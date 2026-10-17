"""Mapped land cover and continuous, modestly interpreted plot transitions.
University landscaped surfaces win; cemetery drives are not arterial roads.
"""
import math,json
import numpy as np
import trimesh
from shapely.geometry import Polygon,Point,box,LineString,shape
from shapely.ops import unary_union,nearest_points,transform
from shapely.strtree import STRtree
from shapely import segmentize

def close_ground(g,radius=160):
 g=g.buffer(radius,quad_segs=4).buffer(-radius,quad_segs=4).buffer(0)
 parts=[g]if g.geom_type=='Polygon'else list(g.geoms)
 return unary_union([Polygon(p.exterior)for p in parts if p.geom_type=='Polygon'])

def prepare_ground(c,prepared):
 fs=prepared['osm'];regions={k:[]for k in ['grass','forest','residential','commercial','bare','paving','parking','cemetery']}
 arb=unary_union([f['poly']for f in fs if f['properties'].get('name')=='Nichols Arboretum'and f['poly'].geom_type in ['Polygon','MultiPolygon']])
 official=[{'properties':f['properties'],'poly':transform(c.project,shape(f['geometry']))}for f in json.loads((c.ROOT/'sources/official_places.geojson').read_text())['features']];arb=unary_union([arb,*[f['poly']for f in official if f['properties'].get('NamedSpace','').strip()=='Nichols Arboretum']])
 for f in fs:
  g,t=f['poly'],f['properties']
  if g.geom_type not in ['Polygon','MultiPolygon']or t.get('building'):continue
  land,natural,leisure=t.get('landuse'),t.get('natural'),t.get('leisure')
  if land=='cemetery' or t.get('amenity')=='grave_yard':regions['cemetery'].append(g)
  elif natural in ['wood','scrub']or land=='forest':regions['forest'].append(g)
  elif land in ['grass','meadow','village_green','recreation_ground','greenery','allotments']or natural in ['grassland','wetland']or leisure in ['park','garden','nature_reserve','pitch','golf_course']:regions['grass'].append(g)
  elif land=='residential':regions['residential'].append(g)
  elif land in ['commercial','retail','industrial','railway','religious']:regions['commercial'].append(g)
  elif land in ['construction','brownfield']or natural in ['bare_rock','sand']:regions['bare'].append(g)
  if t.get('amenity')=='parking'and t.get('parking')not in ['underground','multi-storey']:regions['parking'].append(g)
  if t.get('highway')=='pedestrian' or t.get('place')=='square':regions['paving'].append(g)
 result={k:unary_union(v).buffer(0)for k,v in regions.items()};result['arb']=arb
 # A park boundary tagged as forest can contain explicitly mapped meadows.
 result['forest']=result['forest'].difference(result['grass']).difference(result['cemetery']).buffer(0)
 return result

def canopy(c,region,clearance,ground,target,leaves,spacing=22,max_count=1800):
 if region.is_empty:return 0
 existing=STRtree([f['poly']for f in c.treefs]);count=0
 a,b,d,e=region.bounds
 for x in np.arange(math.floor(a/spacing)*spacing,d,spacing):
  for y in np.arange(math.floor(b/spacing)*spacing,e,spacing):
   seed=(int(x*10)*73856093 ^ int(y*10)*19349663)&0xffffffff;rng=np.random.default_rng(seed)
   xx=x+rng.uniform(3,spacing-3);yy=y+rng.uniform(3,spacing-3);p=Point(xx,yy)
   if not region.contains(p)or clearance.intersects(p)or len(existing.query(p.buffer(6))):continue
   z=float(ground(xx,yy));h=rng.uniform(7,11);rad=rng.uniform(2.4,3.9)
   target['Trunk'].append(c.cylinder((xx,yy,z-.2),(xx,yy,z+h*.65),.16,5))
   m=trimesh.creation.icosphere(subdivisions=1);m.apply_scale([rad,rad,h*.4]);m.apply_translation([xx,yy,z+h*.65]);target[leaves].append(m);count+=1
   if count>=max_count:return count
 return count

def add_campus_ground(c,plan,prepared):
 protected=unary_union([c.footprints,prepared['footprints'],c.roadarea,*[f['poly']for group in [c.surfaces,c.sidewalks,c.parking,c.fields,c.water]for f in group]])
 domain=unary_union([plan['arb'],c.zone_shapes['north'].intersection(c.scope)]).difference(plan['cemetery']).difference(prepared['footprints']).buffer(0)
 missing=domain.difference(protected).buffer(0)
 woods=plan['forest'].intersection(domain).difference(protected).buffer(0)
 meadow=missing.difference(woods).difference(plan['bare']).difference(plan['commercial']).buffer(0)
 c.env(meadow,.065,.045,'ContextGrass');c.env(woods,.075,.045,'ContextForest')
 bare=missing.intersection(plan['bare']);c.env(bare,.07,.04,'ContextGravel')
 clearance=unary_union([c.footprints.buffer(3),prepared['footprints'].buffer(3),c.roadarea.buffer(3),*[f['poly'].buffer(2)for f in c.sidewalks]])
 count=canopy(c,woods,clearance,c.ground,c.eg,'Leaves',24,1500)
 return {'mapped_or_inferred_campus_meadow_m2':round(meadow.area,2),'mapped_campus_woodland_m2':round(woods.area,2),'mapped_construction_ground_m2':round(bare.area,2),'woodland_canopy_estimates':count,'arboretum_source':'U-M named-place GIS / OSM relation 10391031 / MBGNA natural-area maps'}

def context_infill(c,plan,accepted,domain,roads,walks,all_fp,add_surface,env,ground):
 blocked=unary_union([roads,walks,all_fp,c.roadarea])
 open_ground=domain.difference(blocked).buffer(0)
 def available(g):return g.intersection(open_ground).buffer(0)
 # A continuous subdued ground skin also covers small unmapped joins.
 add_surface(open_ground,.025,.035,'ContextSoil')
 park=available(unary_union([plan['grass'],plan['cemetery']]))
 wood=available(plan['forest']).difference(park).buffer(0)
 residential=available(plan['residential']).difference(park).difference(wood).buffer(0)
 yards=[];aprons=[];entry_paths=[]
 for f in accepted:
  p,t=f['poly'],f['properties'];kind=t.get('building','yes')
  if kind in ['house','detached','terrace','residential','apartments','dormitory']:
   yards.append(p.buffer(5,join_style=2))
   if not walks.is_empty:
    a,b=nearest_points(p,walks)
    if .1<a.distance(b)<12:
     line=LineString([a,b]);entry_paths.append(line.buffer(.65,cap_style=2))
  else:aprons.append(p.buffer(3.5,join_style=2))
 yard=available(unary_union(yards)).difference(unary_union([wood,park,plan['parking'],plan['commercial'],plan['bare']])).buffer(0)
 grass=unary_union([park,residential,yard]).difference(plan['parking']).buffer(0)
 lot=available(plan['parking']).difference(grass).difference(wood).buffer(0)
 commercial=available(plan['commercial']).difference(grass).difference(wood).difference(lot).buffer(0)
 gravel=available(plan['bare']).difference(grass).difference(wood).difference(lot).difference(commercial).buffer(0)
 paving=available(unary_union([plan['paving'],*aprons])).difference(grass).difference(wood).difference(lot).difference(gravel).buffer(0)
 entrances=available(unary_union(entry_paths)).difference(lot).difference(wood).buffer(0)
 cemetery_drives=c.ground_plan['cemetery_drives'].intersection(domain).difference(all_fp)
 # The long pale strip beside Buhr is the mapped Ann Arbor Railroad right of
 # way. Use actual centerlines/gauge, retaining streets at level crossings.
 rail_clip=unary_union([domain,c.scope]).difference(all_fp)
 rail_lines=[]
 for feature in c.neighbor_prepared['osm']:
  g,t=feature['poly'],feature['properties']
  if t.get('railway')!='rail'or g.geom_type!='LineString'or t.get('tunnel')=='yes':continue
  for line in ([g.intersection(rail_clip)]):
   pieces=[line]if line.geom_type=='LineString'else list(line.geoms)if hasattr(line,'geoms')else[]
   rail_lines.extend(p for p in pieces if p.geom_type=='LineString'and p.length>2)
 ballast=unary_union([line.buffer(3.8,cap_style=2,join_style=1)for line in rail_lines]).intersection(rail_clip)
 railheads=[];ties=[]
 for line in rail_lines:
  # Standard 1.435 m gauge comes from the retained public railway tags.
  for offset in [-.7175,.7175]:railheads.append(line.offset_curve(offset,join_style=1).buffer(.055,cap_style=2))
  for dist in np.arange(.6,line.length-.6,1.4):
   a=line.interpolate(max(0,dist-.1));b=line.interpolate(min(line.length,dist+.1));dx,dy=b.x-a.x,b.y-a.y;length=math.hypot(dx,dy)
   if length<1e-7:continue
   p=line.interpolate(dist);nx,ny=-dy/length,dx/length
   ties.append(LineString([(p.x-nx*1.25,p.y-ny*1.25),(p.x+nx*1.25,p.y+ny*1.25)]).buffer(.10,cap_style=2))
 # Ballast stays below road paint; thin rails/sleepers express level crossings.
 add_surface(ballast,.08,.045,'RailBallast',True,False)
 add_surface(unary_union(ties).intersection(rail_clip),.14,.04,'RailSleeper',True,False)
 add_surface(unary_union(railheads).intersection(rail_clip),.19,.055,'Rail',True,False)
 add_surface(grass,.065,.045,'ContextGrass');add_surface(wood,.075,.045,'ContextForest')
 add_surface(commercial,.08,.035,'ContextLot');add_surface(gravel,.075,.035,'ContextGravel')
 add_surface(lot,.08,.05,'Road');add_surface(paving,.13,.035,'ContextPaving');add_surface(entrances,.15,.03,'ContextWalk')
 add_surface(cemetery_drives,.12,.04,'ContextPath')
 clearance=unary_union([all_fp.buffer(3),roads.buffer(3),walks.buffer(2),lot,entrances.buffer(1),cemetery_drives.buffer(3)])
 forest_trees=canopy(c,wood,clearance,ground,env,'ContextLeaves',24,1000)
 cemetery_trees=canopy(c,available(plan['cemetery']),clearance,ground,env,'ContextLeaves',28,300)
 from neighboring_areas import REGIONS,project
 south=transform(project,box(*REGIONS['south_state']))
 residential_trees=canopy(c,unary_union([residential,yard]).intersection(south),clearance,ground,env,'ContextLeaves',20,500)
 return {'continuous_infill_m2':round(open_ground.area,2),'mapped_park_and_cemetery_m2':round(park.area,2),'mapped_woodland_m2':round(wood.area,2),'residential_landcover_m2':round(residential.area,2),'interpreted_yard_transition_m2':round(yard.area,2),'commercial_ground_m2':round(commercial.area,2),'parking_area_m2':round(lot.area,2),'construction_or_gravel_m2':round(gravel.area,2),'paved_apron_m2':round(paving.area,2),'entry_paths_m2':round(entrances.area,2),'railway_centerline_m':round(sum(line.length for line in rail_lines),2),'railway_ballast_m2':round(ballast.area,2),'cemetery_drive_m2':round(cemetery_drives.area,2),'woodland_canopy_estimates':forest_trees,'cemetery_canopy_estimates':cemetery_trees,'south_residential_canopy_estimates':residential_trees,'interpretation':'Mapped land use and aerial-reviewed surface character; unrecorded setbacks, entry links and canopy positions are approximate.'}
