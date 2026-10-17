"""Ann Arbor context from retained OSM geometry, kept separate from campus layers.
Building footprints and streets are mapped; facade members and untagged heights
are exterior interpretations. Campus-owned footprints always take precedence.
"""
from courtyards_architecture import build_courtyards
from pathlib import Path
import csv,gzip,json,math,re,xml.etree.ElementTree as ET
import numpy as np
import trimesh
from shapely.geometry import Polygon,Point,LineString,box,shape,mapping
from shapely.ops import unary_union,transform,linemerge,polygonize
from shapely import segmentize,points,get_coordinates
from shapely.strtree import STRtree
from pyproj import Transformer

ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'output'
TF=Transformer.from_crs(4326,32617,always_xy=True);OX,OY=TF.transform(-83.7382,42.2764)
def project(x,y,z=None):
 a,b=TF.transform(x,y);return np.asarray(a)-OX,np.asarray(b)-OY
REGIONS={
 'central':[-83.7520,42.2700,-83.7275,42.2860],
 'stadium':[-83.7545,42.2605,-83.7370,42.2705],
 'south_state':[-83.7545,42.2430,-83.7245,42.2665],
 'broadway':[-83.7380,42.2850,-83.7225,42.2980],
 'plymouth':[-83.7225,42.2980,-83.7030,42.3040],
}
CONTEXT_COLORS={'ContextGround':(191,194,176),'ContextSoil':(180,184,164),'ContextGrass':(125,151,107),'ContextForest':(103,132,88),'ContextLot':(158,159,146),'ContextGravel':(172,166,146),'ContextPaving':(193,187,168),'ContextWalk':(207,201,180),'ContextPath':(156,157,136),'RailBallast':(145,138,119),'RailSleeper':(111,99,80),'Rail':(75,79,77),'ContextBrick':(148,113,93),'ContextStone':(185,181,164),'ContextPanel':(161,167,165),'ContextGlass':(105,137,147),'ContextLeaves':(85,118,83),'RoofContext':(113,118,112),'RoofContextSlate':(79,85,85),'RoofContextWarm':(157,150,134)}
CITY_HEIGHT='https://www.a2gov.org/media/ionpwgug/premium-evaluation-2023-08-08-packet-building-heights-doc.pdf'
# Historical city inventory: feet converted to meters; exterior subdivisions remain estimates.
PROFILES={
 'Tower Plaza':(26,267*.3048,'ContextStone',CITY_HEIGHT),
 'Graduate Ann Arbor':(15,144*.3048,'ContextBrick',CITY_HEIGHT),
 'University Towers':(18,205*.3048,'ContextPanel',CITY_HEIGHT),
 'Landmark':(14,163*.3048,'ContextPanel',CITY_HEIGHT),
 'Zaragon Place':(10,116*.3048,'ContextBrick',CITY_HEIGHT),
 'Foundry Lofts':(14,150*.3048,'ContextBrick',CITY_HEIGHT),
}
COURTYARDS={'relation/3874939':'1760','relation/3874940':'1770','relation/3874941':'1780'}
EXTERIOR_REFERENCES={
 'Tower Plaza':'https://www.onealconstruction.com/project/tower-plaza-north-face-recladding/',
 'Graduate Ann Arbor':'https://www.hilton.com/en/hotels/arbgagu-graduate-ann-arbor/',
 'Michigan Theater':'https://marquee-arts.org/contact/',
 'State Theatre':'https://marquee-arts.org/contact/',
 'Nickels Arcade':'https://www.annarbor.org/listing/nickels-arcade/1108/',
}

CHINESE={'Kerrytown Market':'Kerrytown 市集','University Of Michigan Credit Union':'密西根大学信用合作社','University of Michigan Credit Union':'密西根大学信用合作社','Tower Plaza':'Tower Plaza 大楼','Graduate Ann Arbor':'安娜堡 Graduate 酒店','Michigan Theater':'密西根剧院','State Theatre':'州立剧院','Nickels Arcade':'尼克尔斯拱廊','University Towers':'University Towers 公寓','Landmark':'Landmark 公寓','Zaragon Place':'Zaragon Place 公寓','Kerrytown Market & Shops':'Kerrytown 市集与商铺','Ann Arbor Hands-On Museum':'安娜堡动手体验博物馆','Ann Arbor District Library':'安娜堡地区图书馆','Ann Arbor City Hall':'安娜堡市政厅','Blake Transit Center':'布莱克公交中心','Zingerman’s Delicatessen':'Zingerman’s 熟食店'}
ALIASES={'Graduate by Hilton Ann Arbor':'Graduate Ann Arbor','Michigan Theatre':'Michigan Theater','State Theater':'State Theatre','Zingerman\'s Delicatessen':'Zingerman’s Delicatessen'}

def read_osm():
 manifest=json.loads((ROOT/'sources/neighboring_source_manifest.json').read_text());nodes={};ways={};relations={}
 for entry in sorted(manifest['sources'],key=lambda x:x['retrieved']):
  root=ET.fromstring(gzip.decompress((ROOT/'sources'/entry['file']).read_bytes()))
  for node in root.findall('node'):nodes[node.get('id')]=node
  for way in root.findall('way'):ways[way.get('id')]=way
  for relation in root.findall('relation'):relations[relation.get('id')]=relation
 def tags(el):return {t.get('k'):t.get('v')for t in el.findall('tag')}
 xy={ident:project(float(n.get('lon')),float(n.get('lat')))for ident,n in nodes.items()}
 features=[];members=set()
 for ident,r in relations.items():
  t=tags(r)
  if t.get('type')!='multipolygon' or not any(k in t for k in ['building','landuse','natural','leisure','amenity']):continue
  rings={'outer':[],'inner':[]}
  for member in r.findall('member'):
   if member.get('type')!='way':continue
   w=ways.get(member.get('ref'))
   if w is None:continue
   refs=[n.get('ref')for n in w.findall('nd')]
   if any(n not in xy for n in refs):continue
   if len(refs)>2:rings['inner'if member.get('role')=='inner'else'outer'].append(LineString([xy[n]for n in refs]))
  def areas(lines):
   return unary_union(list(polygonize(unary_union(lines)))) if lines else Polygon()
  g=areas(rings['outer']).difference(areas(rings['inner'])).buffer(0)
  if not g.is_empty:
   features.append({'properties':{**t,'osm_id':'relation/'+ident},'poly':g})
   if t.get('building'):members.update(m.get('ref')for m in r.findall('member')if m.get('type')=='way')
 for ident,w in ways.items():
  t=tags(w);refs=[n.get('ref')for n in w.findall('nd')]
  if len(refs)<2 or any(n not in xy for n in refs):continue
  if t.get('building')and ident in members:continue
  coordinates=[xy[n]for n in refs]
  g=Polygon(coordinates).buffer(0)if refs[0]==refs[-1]and len(refs)>3 and (not t.get('highway')or t.get('area')=='yes')else LineString(coordinates)
  if not g.is_empty:features.append({'properties':{**t,'osm_id':'way/'+ident},'poly':g})
 pois=[{'properties':{**tags(n),'osm_id':'node/'+ident},'poly':Point(xy[ident])}for ident,n in nodes.items()if n.findall('tag')]
 return features,pois

def prepare_neighbors(c):
 osm,pois=read_osm();print('Read neighboring source features:',len(osm),flush=True);selection=unary_union([*[transform(project,box(*b))for b in REGIONS.values()],*[f['poly']for f in osm if f['properties'].get('name')=='The Courtyards Student Apartments']]).buffer(0)
 # Protect the facilities present in the campus model, including buildings
 # whose names or footprints differ in contributed maps.
 protected=c.footprints
 protected_buffer=protected.buffer(.12)
 accepted=[];candidates=[]
 for f in osm:
  p,t=f['poly'],f['properties']
  if not t.get('building')or p.geom_type not in ['Polygon','MultiPolygon']or p.area<24 or not selection.covers(p.representative_point()):continue
  if t.get('building')in ['roof','construction','demolished','ruins']or t.get('location')=='underground'or t.get('demolished:building'):continue
  if t.get('name','') in ['North Campus Storage Building','North Campus Facilities Service Building','North Campus Housing Service Building','Office of Property Disposition']:continue
  overlap=p.intersection(protected).area if p.intersects(protected)else 0
  if overlap>max(3,p.area*.02):continue
  if p.intersects(protected_buffer):p=p.difference(protected_buffer).buffer(0)
  if p.area>24:candidates.append({**f,'poly':p})
 # A fixed spatial index avoids quadratic comparisons across thousands of outlines.
 candidates.sort(key=lambda a:-a['poly'].area)
 candidate_tree=STRtree([f['poly']for f in candidates]);accepted_by_id={}
 for i,f in enumerate(candidates):
  nearby=[accepted_by_id[int(k)]for k in candidate_tree.query(f['poly'])if int(k)in accepted_by_id]
  used=unary_union(nearby)
  if used.intersection(f['poly']).area>f['poly'].area*.12:continue
  p=f['poly'].difference(used.buffer(.025)).buffer(0)
  if p.area>24:accepted.append({**f,'poly':p});accepted_by_id[i]=p
 primary_names=set(PROFILES)|set(CHINESE)|set(ALIASES)
 named_pois=[poi for poi in pois if poi['properties'].get('name','')in primary_names]
 for f in accepted:
  p,t=f['poly'],dict(f['properties']);t['name']=ALIASES.get(t.get('name'),t.get('name',''))
  if t['osm_id']in COURTYARDS:t.update({'name':'The Courtyards · '+COURTYARDS[t['osm_id']]+' Broadway','building:material':'brick'})
  for poi in named_pois:
   name=poi['properties'].get('name','')
   if p.covers(poi['poly']):t['name']=ALIASES.get(name,name);t['poi_source']='https://www.openstreetmap.org/'+poi['properties']['osm_id'];break
  f['properties']=t
 accepted.sort(key=lambda a:(-a['poly'].centroid.y,a['poly'].centroid.x,a['properties']['osm_id']))
 footprints=unary_union([f['poly']for f in accepted])
 selection=unary_union([selection,*[f['poly'].buffer(3)for f in accepted]]).buffer(0)
 print('Selected neighboring footprints:',len(accepted),flush=True)
 return {'osm':osm,'pois':pois,'selection':selection,'accepted':accepted,'footprints':footprints,'protected':protected}

def numeric(value,default,low,high):
 try:
  match=re.search(r'[\d.]+',str(value));v=float(match[0])if match else default
  if 'ft'in str(value)or "'"in str(value):v*=.3048
  return max(low,min(high,v))
 except (TypeError,ValueError):return default

def register_context_materials(c):
 for name,color in CONTEXT_COLORS.items():
  if name in c.mats:continue
  c.COLORS[name]=color;m=c.rh.Material();m.Name=name;m.DiffuseColor=(*color,255);m.Shine=0;c.mats[name]=c.model.Materials.Add(m)

def build_neighbors(c,prepared):
 from ground_context import close_ground,context_infill
 osm,pois,selection,accepted,neighbor_fp=(prepared[k]for k in ['osm','pois','selection','accepted','footprints'])
 register_context_materials(c)
 c.layer('Neighboring_Environment','ContextGround')
 selection=close_ground(unary_union([selection,c.scope]),180)
 # Clip context to a continuous land boundary and keep actual water clear.
 water=unary_union([f['poly']for f in osm if f['properties'].get('natural')=='water'and f['poly'].geom_type in ['Polygon','MultiPolygon']])
 water=unary_union([water,*[f['poly']for f in c.water if f['poly'].intersects(selection)]])
 area=selection.difference(c.scope).difference(water).buffer(0)
 all_fp=unary_union([prepared['protected'],neighbor_fp])
 # Add missing urban circulation inside broad study-ground bounds as well.
 # The actual mapped campus surfaces remain authoritative and unobscured.
 campus_land=unary_union([c.arb,*[f['poly']for group in [c.surfaces,c.sidewalks,c.parking,c.fields]for f in group]]).difference(c.ground_plan['cemetery'])
 detail_area=selection.difference(water).difference(campus_land).difference(all_fp).difference(c.roadarea).buffer(0)
 print('Preparing neighboring grades and ground',flush=True)
 # Match level pads to the highest real exported campus terrain below them.
 tri=[]
 for m,mat in c.meshdata:
  if mat!='Ground':continue
  vv=m.vertices[m.faces];det=np.cross(vv[:,1]-vv[:,0],vv[:,2]-vv[:,0])[:,2];tri.extend(vv[det>1e-7])
 tri=np.asarray(tri);tri_polys=[Polygon(t[:,:2])for t in tri];tri_tree=STRtree(tri_polys)
 for f in accepted:
  p=segmentize(f['poly'],7);xy=get_coordinates(p);floor=float(np.max(c.raw_ground(xy[:,0],xy[:,1])))+.28
  for k in tri_tree.query(p):
   coords=get_coordinates(p.intersection(tri_polys[k]))
   if not len(coords):continue
   a,b,d=tri[k];u=b-a;v=d-a;det=u[0]*v[1]-u[1]*v[0];delta=coords-a[:2];uu=(delta[:,0]*v[1]-delta[:,1]*v[0])/det;vv=(u[0]*delta[:,1]-u[1]*delta[:,0])/det
   floor=max(floor,float(np.max(a[2]+uu*u[2]+vv*v[2]))+.3)
  f['grade']=floor
 print('Neighbor grades matched:',len(accepted),flush=True)
 pads=[];records=[];samples=[];env={m:[]for m in c.COLORS}
 pad_shapes=[f['poly'].buffer(.1)for f in accepted];pad_tree=STRtree(pad_shapes);pad_heights=np.array([f['grade']for f in accepted])
 def ground(x,y):
  x,y=np.broadcast_arrays(x,y);z=np.array(c.ground(x,y),copy=True);aa,bb=pad_tree.query(points(x.ravel(),y.ravel()),predicate='within');z.ravel()[aa]=pad_heights[bb];return z
 roadparts=[];walkparts=[];roadlines=[];widths={'primary':13,'secondary':11,'tertiary':9,'residential':7,'unclassified':7,'service':4,'living_street':5,'pedestrian':5}
 for f in osm:
  t,g=f['properties'],f['poly'];kind=t.get('highway')
  if g.geom_type not in ['LineString','MultiLineString']or not g.intersects(selection)or t.get('tunnel')=='yes'or t.get('layer','0').startswith('-'):continue
  if kind in widths:
   default_width=widths[kind]
   if g.intersects(transform(project,box(*REGIONS['south_state'])))and kind not in ['service','living_street','pedestrian'] and t.get('lanes'):
    default_width=max(default_width,numeric(t['lanes'],2,1,6)*3.05+.6)
   width=numeric(t.get('width'),default_width,2,28);roadparts.append(g.buffer(width/2,cap_style=2,join_style=1));roadlines.append((g,width,t))
  elif kind in ['footway','path','steps','cycleway']:walkparts.append(g.buffer(numeric(t.get('width'),2.1 if kind!='cycleway'else 3,1,6)/2,cap_style=2,join_style=1))
 # Cemetery drives are real circulation, but their narrow light paving must
 # be classified before ordinary roads and roadside sidewalks are composed.
 cemetery=c.ground_plan['cemetery']
 cemetery_drives=unary_union([*roadparts,*walkparts]).intersection(cemetery)
 c.ground_plan['cemetery_drives']=unary_union([c.ground_plan['cemetery_drives'],cemetery_drives]).buffer(0)
 roads=unary_union(roadparts).intersection(detail_area).difference(c.roadarea).difference(cemetery).buffer(0)
 walks=unary_union([*[g.buffer(w/2+1.8,cap_style=2,join_style=1)for g,w,t in roadlines if t.get('highway')!='service'],*walkparts]).difference(unary_union(roadparts)).intersection(detail_area).difference(c.roadarea).difference(cemetery).buffer(0)
 street_union=unary_union([g for g,w,t in roadlines])
 def add_surface(g,z,hh,mat,drape=True,exclude=True):
  g=g.intersection(area if mat=='ContextGround'else detail_area)if exclude else g
  if exclude:g=g.difference(all_fp)
  if g.is_empty:return
  for q in c.polygons(g):
   a,b,d,e=q.bounds
   for xx in np.arange(math.floor(a/70)*70,d,70):
    for yy in np.arange(math.floor(b/70)*70,e,70):
     for part in c.polygons(q.intersection(box(xx,yy,xx+70,yy+70))):
      m=c.extrusion(segmentize(part,12),z,hh)
      if drape:m.vertices[:,2]+=ground(m.vertices[:,0],m.vertices[:,1])
      env[mat].append(m)
 add_surface(area,-4.5,4.5,'ContextGround');add_surface(water.intersection(selection).difference(c.scope),.025,.05,'Water',True,False);add_surface(roads,.04,.055,'Road');add_surface(walks,.13,.05,'Walk')
 green=[];parking=[]
 for f in osm:
  p,t=f['poly'],f['properties']
  if p.geom_type not in ['Polygon','MultiPolygon']or not p.intersects(detail_area):continue
  if t.get('landuse')in ['grass','forest','meadow','village_green']or t.get('natural')in ['wood','scrub','grassland']or t.get('leisure')in ['park','garden']:green.append(p)
  if t.get('amenity')=='parking'and t.get('parking')not in ['underground','multi-storey']:parking.append(p)
 lawn=unary_union(green).intersection(detail_area).difference(all_fp).difference(roads).difference(walks).buffer(0)
 add_surface(lawn,.08,.06,'Grass')
 lot=unary_union(parking).intersection(detail_area).difference(all_fp).difference(walks).difference(lawn).buffer(0);add_surface(lot,.08,.05,'Road')
 ground_cover=context_infill(c,c.ground_plan,accepted,detail_area,roads,walks,all_fp,add_surface,env,ground)
 # Do not invent parking stripes or crossings: retain only mapped geometry.
 print('Neighbor landscape prepared:',len(accepted),'buildings',flush=True)
 for j,f in enumerate(accepted,1):
  p,t,z=f['poly'],f['properties'],f['grade'];code=f'N{j:04d}';address=' '.join(filter(None,[t.get('addr:housenumber'),t.get('addr:street')]))
  name=t.get('name')or address or 'Ann Arbor building '+t['osm_id'].split('/')[-1];kind=t.get('building','yes');res=kind in ['house','detached','terrace','residential','apartments','dormitory'] or (kind=='yes' and p.area<500 and c.ground_plan['residential'].covers(p.representative_point()) and p.intersects(transform(project,box(*REGIONS['south_state']))))
  levels=int(numeric(t.get('building:levels'),2 if res or p.area<700 else 3,1,28));h=numeric(t.get('height'),levels*(3.05 if res else 3.55)+.6,3,100)
  wall='ContextBrick'if t.get('building:material')=='brick'or kind in ['house','detached','dormitory']else 'ContextStone'if kind in ['church','retail','yes']else 'ContextPanel';source='https://www.openstreetmap.org/'+t['osm_id']
  height_status='estimated'
  if name in PROFILES:levels,h,wall,source=PROFILES[name];height_status='municipal'
  is_courtyards=t['osm_id']in COURTYARDS
  if is_courtyards:h=15.75;levels=4;wall='ContextBrick'
  roof_shape=t.get('roof:shape','gabled'if res and kind not in ['apartments','dormitory']and p.area<400 else'flat');rise=min(3.4,h*.24)if roof_shape in ['gabled','hipped','half-hipped','mansard']else 0;body=h-rise-.15
  roof='RoofContextSlate'if rise else 'RoofContextWarm'if t.get('roof:colour')in ['white','beige','silver']else 'RoofContext'
  lay=code+'_'+name.replace('/',' ').replace(':',' ')[:80];c.layer(lay,wall);ms={m:[]for m in c.COLORS}
  info={'NameEN':name,'Scope':'Campus neighboring areas','Units':'meters','FootprintSource':'https://www.openstreetmap.org/'+t['osm_id'],'Source':source,'Approximation':'Public-source exterior study; untagged height, roof shape and facade modules approximate.'}
  body_no=0
  courtyard_detail=build_courtyards(c,p,z,code,lay,info,ms,add_surface,ground,street_union)if is_courtyards else None
  for q in ([]if is_courtyards else c.polygons(p)):
   c.native_extrude(q,z,body,code+'_Body'+str(body_no),lay,wall,info);c.push(code+'B'+str(body_no),c.extrusion(q,z,body),wall,lay,native=False,info=info);body_no+=1
   support=c.extrusion(segmentize(q,7),z-1.5,1.5);bottom=support.vertices[:,2]<z-.7;support.vertices[bottom,2]=np.minimum(z-1,c.raw_ground(support.vertices[bottom,0],support.vertices[bottom,1])-1.2);ms[wall].append(support)
   add_surface(q,z-.15,.15,'ContextGround',False,False)
   if rise:ms[roof].extend(c.pitched(q,z+body,rise))
   else:ms[roof].append(c.extrusion(q,z+body,.15))
   # Offset closed window panes follow real footprint edges, never party walls.
   for ring in [q.exterior,*q.interiors]:
    cc=np.asarray(ring.coords)
    for a,b in zip(cc[:-1],cc[1:]):
     length=np.linalg.norm(b-a)
     if length<3:continue
     u=(b-a)/length;n=np.array([u[1],-u[0]]);mid=(a+b)/2;outside=Point(*(mid+n*.5))
     if any(k!=j-1 and pad_shapes[k].contains(outside)for k in pad_tree.query(outside)):continue
     near=outside.distance(street_union)<22;count=min(12,max(1,int(length/(4.8 if near else 7.5))))
     for level in range(levels):
      wh=min(1.65,body/levels-.9);zz=z+level*body/levels+.65
      for bay in range(count):
       origin=a+u*((bay+.5)*length/count);width=min(1.25 if res else 2.05,length/count-.5)
       if wh<.5 or width<.4:continue
       if near and level==0 and not res:width=min(3.4,length/count-.4);wh=min(2.5,body/levels-.6);zz=z+.23
       pane=c.boxmesh(0,0,0,width,.075,wh);vv=pane.vertices.copy();pane.vertices=np.column_stack((origin[0]+vv[:,0]*u[0]+(vv[:,1]+.11)*n[0],origin[1]+vv[:,0]*u[1]+(vv[:,1]+.11)*n[1],zz+vv[:,2]));trimesh.repair.fix_normals(pane);ms['ContextGlass'].append(pane)
     if near and length>8:
      # A restrained entrance on the street-facing elevation.
      origin=mid;ww=min(1.8,length*.2);door=c.boxmesh(0,0,0,ww,.09,2.25);vv=door.vertices.copy();door.vertices=np.column_stack((origin[0]+vv[:,0]*u[0]+(vv[:,1]+.12)*n[0],origin[1]+vv[:,0]*u[1]+(vv[:,1]+.12)*n[1],z+.03+vv[:,2]));trimesh.repair.fix_normals(door);ms['ContextGlass'].append(door)
   if not rise:
    edge=q.boundary.buffer(.09,join_style=2).intersection(q)
    for pp in c.polygons(edge):ms[roof].append(c.extrusion(pp,z+body+.15,.16))
  for k,(mat,parts)in enumerate(ms.items()):
   if parts:c.chunk_meshes(code+('D'if mat=='ContextGlass'or is_courtyards and mat in ['LightStone','Furniture','WhitePanel']else'M')+f'{k:02d}',parts,mat,lay,info)
  a,b,d,e=p.bounds;zh=CHINESE.get(name,'安娜堡建筑 '+t['osm_id'].split('/')[-1] if name.startswith('Ann Arbor building ') else name)
  if is_courtyards:zh='The Courtyards 公寓 · Broadway 街 '+COURTYARDS[t['osm_id']]+'号'
  r={'code':code,'facility_id':t['osm_id'],'name':name,'name_zh':zh,'short':name,'short_zh':zh,'layer':lay,'zone':'neighbors','neighbor':True,'landmark':False,'height':round(h,3),'height_status':height_status,'levels':levels,'area':round(p.area,2),'width':round(d-a,2),'depth':round(e-b,2),'center':[round(p.centroid.x,3),round(p.centroid.y,3)],'ground_m':round(z,3),'peak_m':round(z+h,3),'basis_en':('Height and storeys follow the city’s 2023 downtown inventory; these are historical municipal estimates. Other dimensions and facade subdivisions are approximate.' if height_status=='municipal' else 'Mapped OSM height/storey tags where available; missing heights and all secondary dimensions are estimates.'),'basis':('高度与层数采用市政府2023年市中心建筑清单，属于市级历史估算；其他尺寸与立面分格为近似表达。' if height_status=='municipal' else '优先采用 OpenStreetMap 已有高度与层数标记；缺失高度及次要构件尺寸为估算。'),'partition_en':'Mapped footprint and courtyard holes, continuous closed ground support, individual flat or pitched roofs, attached facade windows and street-facing entries. Secondary members are approximate.','partition':'保留地图轮廓与庭院空隙，采用接地的闭合基座、独立平屋顶或坡屋顶、附着于立面的窗格和临街入口；次要构件为近似表达。','source':source,'footprint_source':'https://www.openstreetmap.org/'+t['osm_id'],'address':address,'roof_shape':roof_shape,'height_tags':{k:t[k]for k in ['height','building:levels','roof:shape','building:material']if k in t},'automatic_rooftop_boxes':False,'exterior_source':'https://courtyardsapts.com/gallery/'if is_courtyards else EXTERIOR_REFERENCES.get(name,''),'courtyard_voids':sum(len(q.interiors)for q in c.polygons(p)),'contextLabel':False}
  if is_courtyards:
   r.update({'roof_shape':'hipped','architecture_detail':courtyard_detail,'partition_en':'Four main residential storeys and a partially exposed lower street level, red brick with pale lower masonry and vertical cladding fields, framed narrow windows, supported entry porticoes, courtyard-respecting gray hipped roofs and open landscaped court decks. Secondary dimensions and site furniture are approximate.','partition':'四层住宅与局部临街下层，红砖、浅色基座与竖向墙面分区、附墙窗框、入口门廊、保留庭院的灰色坡屋顶及庭院铺装绿化。次要尺寸和景观构件为近似表达。'})
  records.append(r);f['record']=r;pads.append({'code':code,'height':z,'bounds':list(p.bounds),'geometry':mapping(p)})
  samples.append({'code':code,'position':[p.representative_point().x,p.representative_point().y,z]})
  if j%200==0:print('Neighboring buildings',j,'/',len(accepted),flush=True)
 trees=0;no_tree=unary_union([all_fp.buffer(2),roads,walks,lot])
 for f in pois:
  if f['properties'].get('natural')!='tree'or not detail_area.covers(f['poly'])or no_tree.covers(f['poly']):continue
  x,y=f['poly'].x,f['poly'].y;z=float(ground(x,y));seed=int(f['properties']['osm_id'].split('/')[-1]);h=6.5+(seed%23)/10;rad=1.8+(seed%11)/10
  env['Trunk'].append(c.cylinder((x,y,z-.2),(x,y,z+h*.68),.15,5));m=trimesh.creation.icosphere(subdivisions=0);m.apply_scale([rad,rad,h*.4]);m.apply_translation([x,y,z+h*.68]);env['ContextLeaves'].append(m);trees+=1
 for k,(mat,parts)in enumerate(env.items()):
  if parts:c.chunk_meshes(f'NE{k:02d}',parts,mat,'Neighboring_Environment',{'Scope':'Campus neighboring areas','Sources':'OpenStreetMap contributors / USGS 3DEP','Units':'meters'})
 for entry in c.layer_map.values():
  if entry['layer']=='Neighboring_Environment':entry['category']='neighbor-environment'
  elif entry['layer'].startswith('N'):entry['category']='neighbor-building'
 (OUT/'neighboring_records.json').write_text(json.dumps(records,ensure_ascii=False,indent=2))
 with (OUT/'neighboring_building_dimensions_and_sources.csv').open('w',encoding='utf-8-sig',newline='')as fp:
  writer=csv.DictWriter(fp,fieldnames=list(dict.fromkeys(k for row in records for k in row)));writer.writeheader();writer.writerows(records)
 (OUT/'neighboring_footprints.geojson').write_text(json.dumps({'type':'FeatureCollection','coordinate_system':{'epsg': 32617, 'origin_easting': 274204.49096132047, 'origin_northing': 4684096.36214401, 'origin_wgs84': [-83.7382, 42.2764], 'unit': 'm', 'z_datum': 'local Z0=225m USGS DEM datum', 'note': 'Local projected meters, not RFC7946 longitude/latitude'},'features':[{'type':'Feature','properties':f['record'],'geometry':mapping(f['poly'])}for f in accepted]},ensure_ascii=False,separators=(',',':')))
 report={'ground_cover':ground_cover,'buildings':len(records),'trees':trees,'bounds':list(selection.bounds),'landscape_layer':'Neighboring_Environment','default_visible':True,'street_network':'State Street, South University, Main Street, Kerrytown, Packard, South State Street, South Industrial Highway, Eisenhower Parkway, Broadway and Plymouth Road','pads':pads,'ground_samples':samples,'scope_geometry':mapping(area),'land_extent':mapping(selection),'mapped_road_area_m2':roads.area,'mapped_walk_area_m2':walks.area,'mapped_green_area_m2':lawn.area,'mapped_parking_area_m2':lot.area,'footprint_overlap_campus_m2':neighbor_fp.intersection(prepared['protected']).area,'regions_wgs84':REGIONS}
 (OUT/'neighboring_areas.json').write_text(json.dumps(report,ensure_ascii=False,separators=(',',':')))
 return report
