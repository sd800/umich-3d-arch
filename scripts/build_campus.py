"""Ann Arbor exterior campus model: public GIS, USGS terrain, explicit height certainty."""
import pathlib, json, math, csv, struct, xml.etree.ElementTree as ET
import numpy as np
import trimesh
import rhino3dm as rh
from shapely.geometry import Polygon, MultiPolygon, Point, LineString, box, shape, mapping
from shapely.geometry.polygon import orient
from shapely.ops import unary_union, transform
from shapely import affinity, set_precision, constrained_delaunay_triangles
from pyproj import Transformer

ROOT=pathlib.Path(__file__).resolve().parents[1]; OUT=ROOT/'output';OUT.mkdir(exist_ok=True)
TF=Transformer.from_crs(4326,32617,always_xy=True)
LON,LAT=-83.7382,42.2764;OX,OY=TF.transform(LON,LAT)
COLORS={
 'Foundation':(174,172,151),'NorthBrick':(149,99,77),'Terracotta':(162,77,50),'Sandstone':(190,166,133),'MetalPanel':(147,154,154),
 'RoofGlazing':(119,157,170),'RoofMembrane':(85,91,88),'RoofGravel':(149,145,132),'RoofZinc':(132,148,153),'RoofGreen':(105,132,76),'RoofEdge':(93,103,103),'Seat':(161,169,169),'Screen':(24,35,44),
 'Limestone':(207,194,166),'LightStone':(225,217,195),'Brick':(144,86,67),
 'Slate':(71,75,79),'Tile':(137,67,47),'Concrete':(197,198,193),'WhitePanel':(225,226,219),
 'Metal':(113,124,128),'Glass':(113,157,174),'DarkGlass':(59,83,91),'Frame':(64,65,64),
 'Ground':(218,218,207),'Road':(81,86,89),'Paving':(195,186,164),'Walk':(215,210,191),
 'Grass':(116,149,96),'Garden':(93,127,83),'Water':(83,144,166),'Track':(159,83,62),
 'Court':(89,132,122),'Marking':(232,228,207),'Leaves':(67,116,75),'Trunk':(119,95,68),
 'Furniture':(72,78,72),'Solar':(50,73,88),'Blue':(0,39,76),'Maize':(255,203,5),'Sand':(213,198,159),
}
model=rh.File3dm();model.ApplicationName='University of Michigan Ann Arbor Public-source Exterior Model'
model.Settings.ModelUnitSystem=rh.UnitSystem.Meters;model.Settings.ModelAbsoluteTolerance=.01
model.Settings.ModelAngleToleranceDegrees=1
anchor=model.Settings.EarthAnchorPoint;anchor.Name='Ann Arbor local origin / WGS84'
anchor.EarthBasepointLatitude=LAT;anchor.EarthBasepointLongitude=LON
anchor.ModelBasePoint=rh.Point3d(0,0,0);anchor.ModelNorth=rh.Vector3d(0,1,0);anchor.ModelEast=rh.Vector3d(1,0,0)
model.Settings.EarthAnchorPoint=anchor
mats={};layers={};objects=[];meshdata=[];layer_map={};records=[];native_count=0
for name,c in COLORS.items():
    m=rh.Material();m.Name=name;m.DiffuseColor=(*c,255);m.Shine=0
    if name=='Glass':m.Transparency=.12
    mats[name]=model.Materials.Add(m)
def layer(name,mat):
    r=rh.Layer();r.Name=name;r.Color=(*COLORS[mat],255);layers[name]=model.Layers.Add(r);return layers[name]
layer('环境_Environment','Grass')
def polygons(g):
    if g.is_empty:return []
    if isinstance(g,Polygon):
        g=set_precision(g.buffer(0),.005).simplify(.002,preserve_topology=True).buffer(0)
        if not isinstance(g,Polygon):return polygons(g)
        g=Polygon(g.exterior,[ring for ring in g.interiors if Polygon(ring).area>.04])
        return [orient(g,1)] if g.area>.025 else []
    if hasattr(g,'geoms'):return [p for a in g.geoms for p in polygons(a)]
    return []
def attr(name,lay,mat,info=None):
    a=rh.ObjectAttributes();a.Name=name;a.LayerIndex=layers[lay];a.MaterialIndex=mats[mat]
    a.MaterialSource=rh.ObjectMaterialSource.MaterialFromObject;a.ColorSource=rh.ObjectColorSource.ColorFromObject;a.ObjectColor=(*COLORS[mat],255)
    for k,v in (info or {}).items():a.SetUserString(k,str(v))
    return a
def rhmesh(m):
    r=rh.Mesh()
    for v in m.vertices:r.Vertices.Add(*map(float,v))
    for f in m.faces:r.Faces.AddFace(*map(int,f))
    r.Normals.ComputeNormals();r.Compact();assert r.IsValid
    return r
def extrusion(p,z,h):
    triangles=constrained_delaunay_triangles(p)
    vertices=[];faces=[];index={}
    for tri in triangles.geoms:
        face=[]
        for xy in list(tri.exterior.coords)[:3]:
            if xy not in index:index[xy]=len(vertices);vertices.append(xy)
            face.append(index[xy])
        faces.append(face)
    m=trimesh.creation.extrude_triangulation(np.asarray(vertices),np.asarray(faces),float(h));m.apply_translation([0,0,z])
    m.merge_vertices(digits_vertex=7);m.remove_unreferenced_vertices()
    trimesh.repair.fix_normals(m,multibody=True)
    if not (m.is_watertight and m.is_winding_consistent):
        # Public GIS overlays may contain near-coincident edges. Try an
        # independent triangulator, then small topology regularization of touching boundaries.
        for delta in [0,.003,-.003,.008,-.008,.015,-.015,.03,-.03]:
            q=p if not delta else p.buffer(delta,join_style=2).buffer(-delta,join_style=2)
            parts=[trimesh.creation.extrude_polygon(a,float(h),engine='earcut') for a in polygons(q)]
            if not parts:continue
            candidate=trimesh.util.concatenate(parts);candidate.apply_translation([0,0,z]);trimesh.repair.fix_normals(candidate,multibody=True)
            if candidate.is_watertight and candidate.is_winding_consistent:
                m=candidate;break
    if not (m.is_watertight and m.is_winding_consistent):
        # Valid GIS polygons with point-touching holes extrude to a
        # non-manifold shell. Closed triangular cells preserve their volume.
        cells=[]
        for tri in constrained_delaunay_triangles(p).geoms:
            if tri.area<1e-10:continue
            coords=np.asarray(tri.exterior.coords)[:3]
            cell=trimesh.creation.extrude_triangulation(coords,np.array([[0,1,2]]),float(h));cell.apply_translation([0,0,z]);cells.append(cell)
        m=trimesh.util.concatenate(cells);trimesh.repair.fix_normals(m,multibody=True)
    assert m.is_watertight and m.is_winding_consistent,(p.bounds,h)
    return m
def boxmesh(x,y,z,sx,sy,sz):
    m=trimesh.creation.box(extents=(sx,sy,sz));m.apply_translation((x,y,z+sz/2));return m
def cylinder(a,b,r=.1,sections=8):
    return trimesh.creation.cylinder(radius=r,segment=np.asarray([a,b]),sections=sections)
def native_extrude(p,z,h,name,lay,mat,info):
    global native_count
    c=rh.PolylineCurve([rh.Point3d(float(x),float(y),float(z)) for x,y in p.exterior.coords]);e=rh.Extrusion.Create(c,float(h),True)
    for ring in p.interiors:e.AddInnerProfile(rh.PolylineCurve([rh.Point3d(float(x),float(y),float(z)) for x,y in ring.coords]))
    assert e.IsValid and e.IsSolid
    model.Objects.AddExtrusion(e,attr(name,lay,mat,info));native_count+=1
def push(name,m,mat,lay,native=True,info=None):
    assert len(m.vertices)<65536 and len(m.faces)<65536
    assert m.is_watertight and np.isfinite(m.vertices).all(),name
    objects.append({'name':name,'mesh':m,'mat':mat});meshdata.append((m,mat))
    layer_map[name]={'layer':lay,'category':'environment' if lay=='环境_Environment' else 'building','material':mat}
    if native:model.Objects.AddMesh(rhmesh(m),attr(name,lay,mat,info))
def chunk_meshes(prefix,ms,mat,lay,info=None):
    part=[];nv=nf=0;idx=0
    def flush():
        nonlocal idx
        if part:push(prefix+f'{idx:02d}',trimesh.util.concatenate(part),mat,lay,info=info);idx+=1
    for m in ms:
        if nv+len(m.vertices)>58000 or nf+len(m.faces)>58000:flush();part=[];nv=nf=0
        part.append(m);nv+=len(m.vertices);nf+=len(m.faces)
    flush()
def pitched(p,z,rise,axis=None):
    # Split on the ridge before triangulation, so each half is exactly planar.
    a,b,c,d=p.bounds;axis=axis or ('y' if d-b>c-a else 'x')
    mid=(a+c)/2 if axis=='y' else (b+d)/2;half=(c-a)/2 if axis=='y' else (d-b)/2
    cuts=[box(a-1,b-1,mid,d+1),box(mid,b-1,c+1,d+1)] if axis=='y' else [box(a-1,b-1,c+1,mid),box(a-1,mid,c+1,d+1)]
    ms=[]
    for cut in cuts:
        for q in polygons(p.intersection(cut)):
            m=extrusion(q,z,.12);h=rise*np.maximum(.001,1-abs(m.vertices[:,0 if axis=='y' else 1]-mid)/max(half,.1))
            top=m.vertices[:,2]>z+.06;m.vertices[top,2]+=h[top];ms.append(m)
    return ms
def facade(ms,p,z,h,levels,gothic=False,continuous=False,spacing=3.7):
    # Windows are illustrative repeated bays, not measured facade openings.
    for ring in [p.exterior]+list(p.interiors):
        cc=np.asarray(ring.coords)
        for a,b in zip(cc[:-1],cc[1:]):
            v=b-a;length=np.linalg.norm(v)
            if length<3.7:continue
            u=v/length;n=np.array([u[1],-u[0]])
            for k in range(max(1,int(levels))):
                zz=z+(k+.23)*h/max(1,levels);wh=min(h/max(1,levels)*.56,2.8)
                if zz+wh>z+h-.25:continue
                nwin=max(1,int(length/spacing));ww=min(spacing*.48,2.0)
                if continuous:ww=length/nwin-.16
                for j in range(nwin):
                    c=a+u*((j+.5)*length/nwin)+n*.07
                    pts=[(-ww/2,0),(ww/2,0),(ww/2,wh*.73),(ww*.28,wh*.92),(0,wh),(-ww*.28,wh*.92),(-ww/2,wh*.73)] if gothic else [(-ww/2,0),(ww/2,0),(ww/2,wh),(-ww/2,wh)]
                    wm=trimesh.creation.extrude_polygon(Polygon(pts),.08,engine='earcut')
                    # local window plane X/Z; thickness points away from wall.
                    vv=wm.vertices.copy();wm.vertices=np.column_stack((c[0]+vv[:,0]*u[0]+vv[:,2]*n[0],c[1]+vv[:,0]*u[1]+vv[:,2]*n[1],zz+vv[:,1]))
                    trimesh.repair.fix_normals(wm);ms['DarkGlass' if gothic else 'Glass'].append(wm)
                    # slender mullion and stone sill
                    for off in [0]:
                        aa=(c[0]+off*u[0]+n[0]*.11,c[1]+off*u[1]+n[1]*.11,zz)
                        bb=(aa[0],aa[1],zz+wh)
                        if gothic:ms['LightStone'].append(cylinder(aa,bb,.045,4))
                        else:
                            center=np.array(aa[:2]);profile=Polygon([center-u*.035-n*.035,center+u*.035-n*.035,center+u*.035+n*.035,center-u*.035+n*.035]);ms['Frame'].append(extrusion(profile,zz,wh))
def crenellations(ms,p,top,corner_height=2.0):
    a,b,c,d=p.bounds
    for x,y in [(a+.45,b+.45),(a+.45,d-.45),(c-.45,b+.45),(c-.45,d-.45)]:
        ms['LightStone'].append(boxmesh(x,y,top,1.0,1.0,corner_height))
    for aa,bb in zip(np.asarray(p.exterior.coords)[:-1],np.asarray(p.exterior.coords)[1:]):
        v=bb-aa;length=np.linalg.norm(v)
        for t in np.arange(1.2,length-1,2.3):
            q=aa+v*t/length;ms['Limestone'].append(boxmesh(*q,top,.8,.8,.8))

# Campus source preparation and metric projection.
from scipy.interpolate import RegularGridInterpolator
from shapely import concave_hull, segmentize, points
from shapely.strtree import STRtree
from PIL import Image
from types import SimpleNamespace
from architecture_profiles import NORTH,ROSS,REFERENCES,volumes as architecture_volumes
from campus_architecture import accents as architecture_accents,generic_roof
from michigan_stadium import build_stadium,stadium_outline,field_opening
from curation import names, ZONES, LANDMARKS, GOTHIC, HEIGHTS, HEIGHT_ESTIMATES, EXTERIOR_LEVELS, REFS, GIS, CITY_HEIGHT, BURTON, BURTON_HISTORY, TOUR
TF=Transformer.from_crs(4326,32617,always_xy=True)
LON,LAT=-83.7382,42.2764;OX,OY=TF.transform(LON,LAT)
def project(x,y,z=None):
    a,b=TF.transform(x,y);return np.asarray(a)-OX,np.asarray(b)-OY
def read_features(name):
    result=[]
    for f in json.loads((ROOT/'sources'/('official_'+name+'.geojson')).read_text())['features']:
        if not f.get('geometry'):continue
        q=transform(project,shape(f['geometry']))
        if not q.is_valid:q=q.buffer(0)
        result.append({'id':f['properties']['OBJECTID'],'properties':f['properties'],'poly':q})
    return result
raw=read_features('base_buildings'); grouped={};excluded=[]
for f in raw:
    t=f['properties'];ident=str(t.get('loc_ObjectNum') or ('G'+str(f['id'])))
    if (t.get('loc_SubCampus_descr') not in ZONES or (t.get('loc_SubCampus_descr')=='South Ann Arbor Properties' and ident!='1005397') or t.get('Building_Type') in ['BLDGU','PARKU'] or t.get('Status')=='Planning'):
        excluded.append({'id':ident,'name':t.get('ObjectName'),'reason':'Outside four sectors / underground footprint / planning-only'});continue
    grouped.setdefault(ident,[]).append(f)
buildings=[]
for ident,fs in grouped.items():
    p=unary_union([q for f in fs for q in polygons(f['poly'])if q.area>.1]).buffer(0)
    if p.area<3:continue
    t=fs[0]['properties'];en,zh=names(ident,t.get('ObjectName'))
    # Multiple surveyed footprint pieces belonging to one facility share its layer.
    buildings.append({'id':ident,'properties':t,'poly':p,'name':en,'name_zh':zh,'zone':ZONES[t['loc_SubCampus_descr']]})
buildings.sort(key=lambda f:(list(ZONES.values()).index(f['zone']),-f['poly'].centroid.y,f['poly'].centroid.x))
surfaces=read_features('campus_areas'); sidewalks=read_features('sidewalks');parking=read_features('parking');fields=read_features('fields');water=read_features('water');roads=read_features('roads');treefs=read_features('trees')
def in_campus(f):return f['properties'].get('loc_SubCampus_descr') in ZONES
surfaces=[f for f in surfaces if in_campus(f)];sidewalks=[f for f in sidewalks if in_campus(f)];parking=[f for f in parking if in_campus(f)];fields=[f for f in fields if in_campus(f)]
footprints=unary_union([f['poly'] for f in buildings])
zone_shapes={z:concave_hull(unary_union([f['poly'] for f in buildings if f['zone']==z]),ratio=.25).buffer(45,join_style=2) for z in ['central','north','medical','athletic']}
scope=unary_union(list(zone_shapes.values())+[f['poly'] for f in surfaces if f['poly'].area>500]).buffer(5,join_style=2).simplify(.8,preserve_topology=True).buffer(0)
scope=unary_union([scope,footprints.buffer(2)]).buffer(0)
DEM_DATUM=225.0
meta=json.loads((ROOT/'sources/terrain_export_metadata.json').read_text());extent=meta['extent'];dem=np.asarray(Image.open(ROOT/'sources/terrain_dem.tif'),dtype=float)
assert dem.shape==(meta['height'],meta['width']) and np.isfinite(dem).all() and 200<dem.min()<dem.max()<350
xx=np.linspace(extent['xmin'],extent['xmax'],dem.shape[1],endpoint=False)+(extent['xmax']-extent['xmin'])/dem.shape[1]/2-OX
yy=np.linspace(extent['ymin'],extent['ymax'],dem.shape[0],endpoint=False)+(extent['ymax']-extent['ymin'])/dem.shape[0]/2-OY
interp=RegularGridInterpolator((yy,xx),dem[::-1]-DEM_DATUM,bounds_error=False,fill_value=None)
def raw_ground(x,y):
    x,y=np.broadcast_arrays(x,y);return interp(np.column_stack([y.ravel(),x.ravel()])).reshape(x.shape)
for f in buildings:
    cp=f['poly'].representative_point();f['ground']=float(raw_ground(cp.x,cp.y))
contact_tree=STRtree([f['poly']for f in buildings]);parents=list(range(len(buildings)))
def contact_root(k):
    while parents[k]!=k:parents[k]=parents[parents[k]];k=parents[k]
    return k
for i,f in enumerate(buildings):
    for j in contact_tree.query(f['poly']):
        if j>i and f['id']!='1000711'and buildings[j]['id']!='1000711'and f['poly'].intersection(buildings[j]['poly']).area>.025:parents[contact_root(j)]=contact_root(i)
grade_groups={}
for i,f in enumerate(buildings):grade_groups.setdefault(contact_root(i),[]).append(f)
for group in grade_groups.values():
    if len(group)>1:
        z=sum(f['ground']*f['poly'].area for f in group)/sum(f['poly'].area for f in group)
        for f in group:f['ground']=z
pad_tree=STRtree([f['poly'].buffer(.4) for f in buildings]);pad_z=np.array([f['ground'] for f in buildings])
def ground(x,y):
    x,y=np.broadcast_arrays(x,y);z=np.asarray(raw_ground(x,y));a,b=pad_tree.query(points(x.ravel(),y.ravel()),predicate='within')
    z.ravel()[a]=pad_z[b];return z
anchor=model.Settings.EarthAnchorPoint;anchor.Name='Ann Arbor local origin / WGS84; Z0=225m USGS DEM datum';anchor.EarthBasepointLatitude=LAT;anchor.EarthBasepointLongitude=LON;anchor.EarthBasepointElevation=DEM_DATUM
anchor.ModelBasePoint=rh.Point3d(0,0,0);anchor.ModelNorth=rh.Vector3d(0,1,0);anchor.ModelEast=rh.Vector3d(1,0,0);model.Settings.EarthAnchorPoint=anchor
part_fs=[]
for f in json.loads((ROOT/'sources/architecture_parts.geojson').read_text())['features']:
    g=transform(project,shape(f['geometry'])).buffer(0)
    if not g.is_empty:part_fs.append((f['properties'],g))
part_tree=STRtree([q for _,q in part_fs])
for f in buildings:
    f['parts']=[part_fs[k]for k in part_tree.query(f['poly'])if part_fs[k][1].intersection(f['poly']).area>max(8,part_fs[k][1].area*.6)]
stadium_feature=next(f for f in buildings if f['id']=='1000711');stadium_void=stadium_outline(stadium_feature['poly']);stadium_grade_band=stadium_void.difference(stadium_void.buffer(-2))
print('Preparing',len(buildings),'building layers; terrain and public mapped landscape',flush=True)

# BUILDING CACHE: regenerate when geometry inputs or building code change.
import hashlib,pickle
signature=hashlib.sha256(b''.join((ROOT/'scripts'/name).read_bytes()for name in ['architecture_profiles.py','campus_architecture.py','michigan_stadium.py'])+(ROOT/'sources/architecture_parts.geojson').read_bytes()+(ROOT/'scripts/curation.py').read_bytes()+(ROOT/'sources/official_base_buildings.geojson').read_bytes()+pathlib.Path(__file__).read_text().split('# LANDSCAPE')[0].encode()).hexdigest()
cache=ROOT/'tmp/building-cache.pkl';cache_signature=ROOT/'tmp/building-cache.sha';cache_rhino=ROOT/'tmp/building-cache.3dm'
if cache.exists() and cache_signature.exists() and cache_rhino.exists() and cache_signature.read_text()==signature:
    saved=pickle.loads(cache.read_bytes());model=rh.File3dm.Read(str(cache_rhino));assert model is not None
    objects=saved['objects'];layer_map=saved['layer_map'];records=saved['records'];native_count=saved['native_count'];layers=saved['layers'];meshdata=[(o['mesh'],o['mat']) for o in objects]
    print('Reused validated building cache:',len(records),flush=True)
else:
    for j,f in enumerate(buildings,1):
        ident,p,t=f['id'],f['poly'],f['properties'];code=f'M{j:03d}';name=f['name'];zh=f['name_zh'];zone=f['zone'];base=f['ground'];a,b,c,d=p.bounds;x,y=p.centroid.x,p.centroid.y
        original_fc=t.get('FloorCount');residential=(450<=int(ident[3:])<=684 if ident.startswith('100') and ident[3:].isdigit() else False) or any(w in name.lower() for w in ['residence','quadrangle','northwood']) or ident in {str(v) for v in range(1000040,1000067)} or ident in ['1000108','1000109','1000555','1000203']
        lev=EXTERIOR_LEVELS.get(ident,max(1,min(12,math.ceil(float(original_fc)*.65))) if original_fc else (2 if residential else 3))
        if name.startswith('Northwood'):lev=2
        if p.area<100 or any(w in name.lower() for w in ['storage','garage','trailer','pump','switching','helipad','mcity','m-air']):lev=1
        height=max(4.5,lev*(3.1 if residential else 3.8)+.8)
        gothic=ident in GOTHIC
        if gothic:height+=4.2
        height=HEIGHT_ESTIMATES.get(ident,height);status='estimated';src=GIS
        basis=f'官方 GIS 的 FloorCount 记录为 {original_fc if original_fc is not None else "未提供"}；该字段未区分地上、地下和夹层。模型采用 {lev} 个地上层的形态估算，层高与屋顶高度为近似。'
        basis_en=f'U-M GIS FloorCount: {original_fc if original_fc is not None else "not provided"}. This field does not distinguish exterior storeys, basements and mezzanines. Modeled exterior storeys ({lev}) and roof/floor heights are estimates.'
        if ident in HEIGHTS:
            height,status,src=HEIGHTS[ident]
            if status=='municipal':
                basis='采用安娜堡市2009年建筑高度清单中的估算值（并非实测）；已换算为米。分区标高、立面与屋顶细节仍为近似。'
                basis_en='Historical estimate in the City of Ann Arbor building-height inventory (18 February 2009), converted from feet to meters. This is not a measured or current survey height.'
            else:
                basis='模型最高点采用学校 The University Record 所载212英尺（64.6176米）；本特利历史图书馆记载192英尺。来源存在差异，模型取212英尺，未实测核定。'
                basis_en='Model peak follows the university Record: 212 ft / 64.6176 m. Bentley Historical Library gives 192 ft. Published sources disagree; this model uses 212 ft without a measured resolution of that discrepancy.'
        wall='Limestone' if gothic or ident in ['1000155','1000152','1000172','1000159','1000191'] else ('Brick' if residential or ident in ['1000120','1000177','1000709'] else 'LightStone')
        profile=(NORTH|ROSS).get(ident)
        if not profile and zone=='north'and not residential and p.area>250 and not any(w in name.lower()for w in ['mcity','switching','chiller','power plant','support','pumping','storage','m-air','ground service']):
            profile=(lev,height,'NorthBrick','RoofGravel');NORTH[ident]=profile
        if profile:lev,height,wall,roof=profile
        else:roof='Slate'if gothic else ('RoofGravel'if wall in ['Limestone','LightStone']else 'RoofMembrane')
        lay=code+'_'+name.replace('/','_').replace(':','_')[:88];layer(lay,wall);ms={k:[] for k in COLORS};bodyidx=0
        info={'Building':name,'ChineseName':zh,'Code':code,'FacilityID':ident,'Units':'meters','FootprintSource':GIS,'HeightBasis':basis_en,'GroundDatum':'USGS 3DEP sampled terrain, local Z0=225m DEM datum; building pad flattened','GeometryDetail':'Public exterior approximation; no interior or surveyed facade reconstruction'}
        partition='保留官方地图中的建筑轮廓与庭院空隙；屋顶、重复窗格、檐口和地上层数为形态近似。建筑基座按公开地形采样，局部地面作平整处理。'
        partition_en='Official mapped footprint and courtyard voids; simplified roof, cornices and illustrative repeated facade bays. Estimated exterior storeys. Each building rests on a locally flattened pad sampled from USGS terrain.'
        def body(g,z,hh,mat=wall,windows=True,levels=None,arch=gothic,cont=False):
            global native_count
            for q in polygons(g):
                if hh<=.015:continue
                nm=code+f'B{body.counter:02d}';body.counter+=1
                native_extrude(q,base+z,hh,nm,lay,mat,info);push(nm,extrusion(q,base+z,hh),mat,lay,native=False)
                if windows:facade(ms,q,base+z,hh,levels or max(1,round(lev*hh/max(height,1))),arch,cont,spacing=5.3)
        body.counter=0
        def flat(g,z,mat=roof):
            for q in polygons(g):ms[mat].append(extrusion(q,base+z,.12))
        def gable(g,z,rise,axis=None,mat=roof):
            for q in polygons(g):ms[mat].extend(pitched(q,base+z,rise,axis))
        def block(xx0,yy0,z,sx,sy,hh,mat=wall):ms[mat].append(boxmesh(xx0,yy0,base+z,sx,sy,hh))
        detail_record={}
        if ident!='1000711':
            for q in polygons(segmentize(p,5)):
                support=extrusion(q,base-1.5,1.51);bottom=support.vertices[:,2]<base-.7
                support.vertices[bottom,2]=np.minimum(base-.2,raw_ground(support.vertices[bottom,0],support.vertices[bottom,1])-1.5)
                ms['Foundation'].append(support)
        if ident=='1000155':
            body(p,0,36.576,levels=8,arch=False)
            inset=p.buffer(-1.25,join_style=2);piers=p.difference(inset);body(piers,36.576,20.2,windows=False)
            for zz in [36.576,54.0,56.6]:flat(p.buffer(.15),zz,'LightStone')
            crown=p.buffer(-.6,join_style=2);body(crown,56.8,2.3,windows=False);gable(crown,59.1,height-59.1-.12,'x','Slate')
            partition='方形石灰岩塔身、36.576米标高的钟室底层、开敞钟室与收分塔冠；模型峰值采用212英尺。学校资料另有192英尺记载，差异未实测核定；各段构造与窗位为近似。'
            partition_en='Square limestone shaft, open belfry above its published 120 ft floor and a stepped crown. Model peak uses 212 ft; an official historical source gives 192 ft. Segment dimensions and facade bays are approximate.'
        elif ident=='1000394':
            # Open tapered concrete piers and separated belfry volumes.
            for dx,dy in [(-.27,-.28),(-.27,.28),(.29,-.28),(.29,.28)]:
                ww=(c-a)*.16;dd=(d-b)*.18;cx=x+dx*(c-a);cy=y+dy*(d-b)
                m=boxmesh(cx,cy,base,ww,dd,height-2.2);top=m.vertices[:,2]>base+height/2;m.vertices[top,0]-=dx*1.5;m.vertices[top,1]-=dy*1.0;ms['Concrete'].append(m)
            for zz in [12,29,height-8]:block(x,y,zz,(c-a)*.76,(d-b)*.8,1.1,'Concrete')
            upper=box(x-(c-a)*.4,y-(d-b)*.4,x+(c-a)*.4,y+(d-b)*.4);body(upper.difference(upper.buffer(-1.3)),height-7,4.8,'Concrete',False);flat(upper,height-.12,'Metal')
            partition='开敞的收分混凝土塔柱、横梁与独立钟室体块；采用安娜堡市2009年清单中的165英尺估算值（50.292米），构件位置与局部尺寸为示意。'
            partition_en='Open tapered concrete piers, cross-beams and separated belfry volumes. Overall 165 ft / 50.292 m follows the city’s 2009 estimate; member sizes and positions are illustrative.'
        elif ident=='1000711':
            detail_record=build_stadium(ms,p,base,f['parts'],body,SimpleNamespace(**globals()))
            partition='下沉式碗形看台、44组通道、灰色座席、东西包厢楼、南北视频屏和沿实际场地长轴的比赛标线；保留官方轮廓，场地为360×160英尺。剖面、楼层和构件尺寸为形态近似。'
            partition_en='Sunken bowl with gray seating, 44 aisle divisions, mapped east/west premium buildings, north/south video boards and field-aligned markings. Official footprint; 360 × 160 ft playing field. Section heights, seating bands and members are approximate exterior interpretations.'
            src=detail_record['reference']
        elif profile:
            volumes=architecture_volumes(ident,p,f['parts'])
            for q,hh,n,mat,roofmat in volumes:body(q,0,hh,mat,True,levels=n,arch=False,cont=mat in ['Glass','MetalPanel']or ident in ['1005188','1005370'])
            detail_record=architecture_accents(ms,p,base,ident,volumes,SimpleNamespace(**globals()))
            partition='保留官方建筑范围与庭院，重新划分高低翼楼、门廊、中庭和屋顶，按各楼特点表达砖、陶板、石材、金属和玻璃；局部分界、外部层数、构件和标高为公开资料基础上的近似。'
            partition_en='Official envelope and courtyard voids retained; rebuilt high/low wings, entrances, atria and roof forms. Brick, terracotta, stone, metal and glass distinguish individual buildings. Part boundaries, exterior storeys, members and elevations remain public-source approximations.'
            if ident in REFERENCES:src=REFERENCES[ident]
        elif ident=='1000700':
            circle=affinity.scale(Point(x-8,y-1).buffer(1,quad_segs=40),49,56);arena=p.intersection(circle);annex=p.difference(arena)
            body(annex,0,12,levels=3,cont=True);flat(annex,12);body(arena,0,15.5,windows=False)
            for q in polygons(arena):
                m=extrusion(segmentize(q,8),base+15.5,.16);top=m.vertices[:,2]>base+15.58;rad=np.sqrt(((m.vertices[:,0]-(x-8))/49)**2+((m.vertices[:,1]-(y-1))/56)**2);m.vertices[top,2]+=8.5*np.maximum(0,1-rad[top]**2);ms['Metal'].append(m)
            partition='区分近圆形主场馆、环形边缘与入口附楼，屋顶采用近似弧面；平面依据学校地图，高度、屋顶曲率与窗格未实测。';partition_en='Near-circular arena, curved roof and lower entrance annexes are separated. Mapped footprint; approximate roof curvature and exterior heights.'
        elif ident in ['1000179','1000184','1000108','1000109']:
            rise=5.0;bh=height-rise
            if ident=='1000184':
                towers=p.intersection(unary_union([box(a-1,b-1,a+17,d+1),box(c-33,b-1,c-15,d+1)]));low=p.difference(towers)
                body(low,0,18,levels=3);gable(low,18,5,'x');body(towers,0,height-1.5,levels=7);flat(towers,height-1.5,'LightStone')
                for q in polygons(towers):crenellations(ms,q,base+height-1.5,1.5)
            else:
                body(p,0,bh,levels=4);gable(p,bh,rise)
                if ident=='1000108':
                    tower=p.intersection(box(x+5,y+8,x+20,y+30));body(tower,0,height-1.4,levels=5);flat(tower,height-1.4,'LightStone')
                    for q in polygons(tower):crenellations(ms,q,base+height-1.4,1.4)
            partition='法学院庭院组群：保留各楼独立平面，表达花岗岩与石灰岩外墙、哥特式尖拱窗、陡坡屋顶及局部塔楼。高度与立面构件为估算；地下图书馆不作为地上体块。'
            partition_en='Law Quadrangle ensemble: distinct mapped buildings, granite/limestone walls, pointed window bays, steep roofs and local towers. Exterior heights and facade details are estimates; underground library footprints are excluded from above-ground massing.'
            src=REFS[ident]
        elif ident=='1000152':
            body(p,0,height-2,levels=4,arch=False);flat(p,height-2);gable(p,height-2,2,'y','Slate')
            for yy0 in np.arange(y-28,y+25,6.4):ms['Limestone'].append(cylinder((a-.9,yy0,base+1),(a-.9,yy0,base+15),.8,10))
            block(a-1,y,15,3,57,1.8,'Limestone');gable(box(a-3,y-28,a+1,y+28),16.8,3.0,'y','Limestone')
            partition='长条教学楼与蒂施附楼保留官方平面；西侧古典柱廊、山花与屋檐为简化表达，尺寸与高度均为形态估算。';partition_en='Mapped Angell/Tisch volumes with a simplified classical west colonnade, pediment and cornice. Local dimensions and heights are estimated.'
        elif ident=='1000177':
            body(p,0,16,levels=3,arch=False);gable(p,16,7,'y','Metal')
            for xx0 in np.arange(a+8,c-5,8):ms['LightStone'].append(cylinder((xx0,b-.4,base),(xx0,b-.4,base+12),.6,8))
            partition='砖石礼堂主体、入口柱列和抬高的主厅屋顶，按真实地图轮廓表示；屋顶轮廓、层高与开窗为近似。';partition_en='Brick auditorium, entrance columns and raised main-hall roof. Official footprint with estimated roof profile and facade bays.'
        elif ident=='1000198':
            dome=Point(x+2,y).buffer(5,quad_segs=24);body(p,0,7,levels=1,arch=False);flat(p,7,'LightStone');body(dome,7,2,'LightStone',False)
            m=trimesh.creation.icosphere(subdivisions=2);m.apply_scale([5,5,5]);m.apply_translation([x+2,y,base+9]);ms['Metal'].append(m)
            partition='历史天文台主体与圆形观测室、金属圆顶的简化体块；位置依据公开轮廓，穹顶半径和标高为估算。';partition_en='Historic observatory block and approximate circular observing room with metal dome. Published footprint; estimated dome radius and levels.'
        elif ident in ['1005188','1000396','1005418','1005092','1005177','1005440','1005173','1005037','1005109','1005504']:
            if ident=='1005037':
                low=p.intersection(box(a-1,b-1,c+1,y-8));high=p.difference(low);body(low,0,13,'Glass',levels=2,cont=True);flat(low,13);body(high,0,height-.2,levels=6,cont=True);flat(high,height-.12)
            elif ident=='1000396':
                annex=p.intersection(box(a-1,b-1,x-38,d+1));main=p.difference(annex);body(annex,0,9,levels=2,cont=True);flat(annex,9);body(main,0,height-.2,levels=4,cont=True);flat(main,height-.12)
            else:
                cut=p.intersection(box(a-1,b-1,a+(c-a)*.28,d+1));main=p.difference(cut);lowheight=height*.65
                body(cut,0,lowheight,levels=max(2,round(lev*.65)),cont=True);flat(cut,lowheight);body(main,0,height-.2,levels=lev,cont=True);flat(main,height-.12)
                pent=main.buffer(-9,join_style=2)
                if not pent.is_empty and height>30:body(pent,height-3.8,3.5,'Metal',False);flat(pent,height-.12,'Metal')
            partition='按映射轮廓区分高低翼楼、玻璃公共空间、退台与屋顶机房；局部体块分界、地上层数、幕墙模数及高度为估算。';partition_en='Mapped irregular footprint divided into approximate high/low wings, glazed communal spaces, setbacks and rooftop plant. Segment boundaries, curtain-wall modules and heights are estimated.'
            if ident=='1005440':
                partition+='卡恩医疗楼已于2025年开放；地上12层依据项目资料，官方GIS仍使用原工程名称。';partition_en+=' Kahn Pavilion opened in 2025; project sources document 12 storeys while GIS retains its former project name.';src=REFS[ident]
        elif gothic or name.startswith('Northwood') or ident=='1000709':
            rise=min(4.8,height*.24);body(p,0,height-rise,levels=lev,arch=gothic);gable(p,height-rise,rise)
        else:
            roof_allowance=1.32 if p.area>1800 else (.54 if p.area>250 else .16)
            body(p,0,height-roof_allowance,levels=lev,arch=False,cont=(t.get('Building_Type')=='PARK'))
            generic_roof(ms,p,base+height-roof_allowance,roof,SimpleNamespace(**globals()))
        for k,(mat,parts) in enumerate(ms.items()):
            if parts:chunk_meshes(code+('D'if mat in ['Glass','DarkGlass','Frame','Solar']else 'M')+f'{k:02d}',parts,mat,lay,info)
        for q in polygons(p):
            crv=rh.PolylineCurve([rh.Point3d(float(x0),float(y0),base) for x0,y0 in q.exterior.coords]);model.Objects.AddCurve(crv,attr(code+'_PLAN',lay,wall,info))
        meshes=[o['mesh'] for o in objects if layer_map[o['name']]['layer']==lay];actual_top=max(m.bounds[1,2] for m in meshes);actual_bottom=min(m.bounds[0,2] for m in meshes)
        r={'code':code,'facility_id':ident,'name':name,'name_zh':zh,'official_name':t.get('ObjectName'),'layer':lay,'zone':zone,'landmark':ident in LANDMARKS,'height':round(float(actual_top-base),4),'height_status':status,'levels':lev,'gis_floor_count':original_fc,'area':round(p.area,2),'width':round(c-a,2),'depth':round(d-b,2),'center':[round(x,3),round(y,3)],'ground_m':round(base,3),'peak_m':round(float(actual_top),3),'bottom_m':round(float(actual_bottom),3),'basis':basis,'basis_en':basis_en,'partition':partition,'partition_en':partition_en,'source':src,'footprint_source':GIS,'architecture_reference':REFS.get(ident,TOUR if ident in LANDMARKS else None),'short':name,'short_zh':zh,'aliases_zh':[],'construction_status':t.get('Status'),'architecture_detail':detail_record,'ground_contact':'bowl perimeter'if ident=='1000711'else 'flat grade pad'}
        if ident in HEIGHTS:assert abs(r['height']-HEIGHTS[ident][0])<.01,(ident,r['height'],HEIGHTS[ident][0])
        records.append(r);f['record']=r
        if j%75==0:print('Buildings',j,flush=True)
    print('Buildings complete:',len(records),flush=True)

    assert model.Write(str(cache_rhino),7)
    cache.write_bytes(pickle.dumps({'objects':objects,'layer_map':layer_map,'records':records,'native_count':native_count,'layers':layers},protocol=5));cache_signature.write_text(signature)
by_facility={r['facility_id']:r for r in records}
for f in buildings:f['record']=by_facility[f['id']]

# LANDSCAPE geometry follows mapped areas and tree positions. Terrain is sampled
# on surface vertices; long surfaces are split into 80m patches for draping.
eg={k:[] for k in COLORS};landscape_counts={}
def env(g,z,hh,mat,drape=True):
    g=g.intersection(scope).buffer(0)
    if mat!='Ground':g=g.difference(stadium_void)
    if g.is_empty:return
    for q in polygons(g):
        q=q.simplify(.01 if mat=='Ground'else .09,preserve_topology=True)
        if q.area<.08:continue
        aa,bb,cc,dd=q.bounds
        patches=[]
        if max(cc-aa,dd-bb)>110:
            for gx in np.arange(math.floor(aa/80)*80,cc,80):
                for gy in np.arange(math.floor(bb/80)*80,dd,80):patches.extend(polygons(q.intersection(box(gx,gy,gx+80,gy+80))))
        else:patches=[q]
        for part in patches:
            for pp in polygons(segmentize(part,18)):
                m=extrusion(pp,z,hh)
                if drape:m.vertices[:,2]+=ground(m.vertices[:,0],m.vertices[:,1])
                eg[mat].append(m)
env(scope.difference(footprints).difference(stadium_void),-5,5,'Ground')
for f in buildings:
    env(stadium_grade_band if f['id']=='1000711'else f['poly'],f['ground']-.18,.18,'Ground',False)
roadarea=unary_union([f['poly'].intersection(scope) for f in roads]).difference(footprints).buffer(0)
env(roadarea,.025,.07,'Road');landscape_counts['mapped_road_area_m2']=round(roadarea.area,2)
for group,label in [(parking,'parking'),(sidewalks,'sidewalks'),(surfaces,'surface_patches'),(fields,'athletic_fields')]:
    landscape_counts[label]=len(group)
    for f in group:
        p,t=f['poly'],f['properties'];g=p.difference(footprints).difference(roadarea)
        if g.is_empty:continue
        material=t.get('Material') or '';use=t.get('LandUse') or ''
        if use=='Wall':env(g,.13,1.0,'LightStone');continue
        if material in ['Grass','Native Grass Mix','Trees'] or use in ['Lawn','Meadow','Woodlot','Golf, Tee Box']:mat='Grass'
        elif material in ['Wood Mulch','Flowers'] or use.startswith('Bed'):mat='Garden'
        elif material=='Water' or use.startswith('Pond'):mat='Water'
        elif material=='Artificial, Turf':mat='Grass'
        elif use=='Sport, Court':mat='Court'
        elif material=='Asphalt':mat='Road'
        elif material=='Brick':mat='Paving'
        elif material=='Sand':mat='Sand'
        else:mat='Walk'
        env(g,.12,.07,mat)
for f in water:env(f['poly'].difference(footprints),.10,.035,'Water')
# Native sports markings retain their georeferenced shapes.
markings=read_features('athletic_markings')
for f in markings:
    q=f['poly']
    if q.geom_type in ['LineString','MultiLineString']:q=q.buffer(.065,cap_style=2)
    env(q.difference(footprints),.205,.018,'Marking')
from shapely import prepare
footprint_clearance=footprints.buffer(.5);prepare(footprint_clearance);prepare(scope)
# Maya Lin's Wave Field: published 90ft square artwork, mapped placement.
wave_source=json.loads((ROOT/'sources/official_places.geojson').read_text())['features']
wave=next(transform(project,shape(f['geometry'])) for f in wave_source if f['properties']['NamedSpace'].strip()=='Wave Field')
wc=wave.centroid;side=90*.3048;wave=wave.intersection(box(wc.x-side/2,wc.y-side/2,wc.x+side/2,wc.y+side/2))
for wx in np.arange(wc.x-side/2,wc.x+side/2,1.8):
    for wy in np.arange(wc.y-side/2,wc.y+side/2,1.8):
        for q in polygons(wave.intersection(box(wx,wy,wx+1.8,wy+1.8))):
            m=extrusion(q,.22,.11);xx0=m.vertices[:,0];yy0=m.vertices[:,1]
            phase=(yy0-wc.y)/5.1+np.sin((xx0-wc.x)/5.5)*.22
            rise=1.3*np.maximum(0,np.sin(phase*2*np.pi))**2
            m.vertices[:,2]+=ground(xx0,yy0)+rise;eg['Grass'].append(m)
landscape_counts['wave_field']={'published_artwork_width_m':side,'mapped_site':True,'wave_amplitude_and_phase':'Illustrative; not a measured landform','source':'https://umma.umich.edu/objects/wave-field-aps1995-1/'}
def tree_order(f):
    ix=int((f['poly'].x-scope.bounds[0])/160);iy=int((f['poly'].y-scope.bounds[1])/160)
    return sum((((ix>>b)&1)<<(2*b))|(((iy>>b)&1)<<(2*b+1)) for b in range(16))
# Spatial batches let the viewer cull offscreen tree groups.
treefs.sort(key=tree_order)
trees=0
for f in treefs:
    p=f['poly'];t=f['properties'];xx0,yy0=p.x,p.y
    if not scope.contains(p) or footprint_clearance.contains(p):continue
    base=float(ground(xx0,yy0));seed=int(f['id']);rng=np.random.default_rng(seed)
    # Locations are surveyed GIS points. Shape, canopy and vertical size are estimates.
    h=7.5+rng.uniform(-1,4);rad=2.0+rng.uniform(0,1.8)
    eg['Trunk'].append(cylinder((xx0,yy0,base-.25),(xx0,yy0,base+h*.66),.16,5))
    m=trimesh.creation.icosphere(subdivisions=1);m.apply_scale([rad,rad,h*.4]);m.apply_translation([xx0,yy0,base+h*.67]);eg['Leaves'].append(m);trees+=1
for k,(mat,parts) in enumerate(eg.items()):
    if parts:chunk_meshes(f'E{k:02d}',parts,mat,'环境_Environment',{'Landscape':'University mapped roads, surfaces, trees and USGS sampled terrain. Approximate surface thickness, walls, tree shapes and heights.','Units':'meters'})
print('Landscape complete:',trees,'mapped trees',flush=True)

for zone,g in [('Campus',scope),*zone_shapes.items()]:
    aa,bb,cc,dd=g.bounds;cx=(aa+cc)/2;cy=(bb+dd)/2;size=max(cc-aa,dd-bb)*.75
    vv=rh.ViewInfo();vv.Name=zone;vv.Viewport.SetCameraLocation(rh.Point3d(cx+size,cy-size,1500));vv.Viewport.SetCameraDirection(rh.Vector3d(-size,size,-1450));vv.Viewport.SetCameraUp(rh.Vector3d(0,0,1));vv.Viewport.TargetPoint=rh.Point3d(cx,cy,50);vv.Viewport.ChangeToParallelProjection(True);vv.Viewport.SetFrustum(-size,size,-size,size,1,40000);model.NamedViews.Add(vv)
model.Strings['ModelNotes']='University of Michigan Ann Arbor exterior approximation. Unit meters. One layer per facility; all environment on 环境_Environment. Source terrain: USGS 3DEP sampled to ~18m; local Z0=225m DEM datum, building pads simplified. Heights distinguish published source conflicts, historical municipal estimates and massing estimates. Not official university BIM or survey.'
assert model.Write(str(OUT/'UMich_AnnArbor_Layered.3dm'),7)
def chunk(tag,data=b''):return struct.pack('<HI',tag,len(data)+6)+data
def zs(s):return s.encode('ascii')+b'\0'
def rgb(c):return chunk(0x0011,bytes(c))
mb=b''
for name,co in COLORS.items():mb+=chunk(0xAFFF,chunk(0xA000,zs(name))+chunk(0xA010,rgb(tuple(int(v*.5) for v in co)))+chunk(0xA020,rgb(co))+chunk(0xA030,rgb((10,10,10))))
ob=b''
for o in objects:
    m=o['mesh'];v=np.asarray(m.vertices,dtype='<f4');ff=np.column_stack((m.faces,np.full(len(m.faces),7))).astype('<u2')
    fc=struct.pack('<H',len(ff))+ff.tobytes()+chunk(0x4130,zs(o['mat'])+struct.pack('<H',len(ff))+np.arange(len(ff),dtype='<u2').tobytes())
    ob+=chunk(0x4000,zs(o['name'])+chunk(0x4100,chunk(0x4110,struct.pack('<H',len(v))+v.tobytes())+chunk(0x4120,fc)))
(OUT/'UMich_AnnArbor.3ds').write_bytes(chunk(0x4D4D,chunk(0x0002,struct.pack('<I',3))+chunk(0x3D3D,chunk(0x3D3E,struct.pack('<I',3))+chunk(0x0100,struct.pack('<f',1))+mb+ob)))
for name,data in [('layer_map',layer_map),('palette',COLORS),('buildings',records),('viewer_records',records)]:
    (OUT/(name+'.json')).write_text(json.dumps(data,ensure_ascii=False,indent=2))
with (OUT/'building_dimensions_and_sources.csv').open('w',encoding='utf-8-sig',newline='') as fd:
    wr=csv.DictWriter(fd,fieldnames=list(records[0]));wr.writeheader();wr.writerows(records)
(OUT/'footprints_local_meters.geojson').write_text(json.dumps({'type':'FeatureCollection','coordinate_system':{'epsg':32617,'origin_easting':OX,'origin_northing':OY,'origin_wgs84':[LON,LAT],'unit':'m','z_datum':'local Z0=225m USGS DEM datum','note':'Local projected meters, not RFC7946 longitude/latitude'},'features':[{'type':'Feature','properties':f['record'],'geometry':mapping(f['poly'])} for f in buildings]},ensure_ascii=False,separators=(',',':')))
av=[];af=[];co=[];off=0
for m,mat in meshdata:av.append(m.vertices);af.append(m.faces+off);co.extend([COLORS[mat]]*len(m.faces));off+=len(m.vertices)
np.savez_compressed(OUT/'preview_mesh_data.npz',vertices=np.vstack(av),faces=np.vstack(af),colors=np.asarray(co,dtype=np.uint8))
summary={'buildings':len(records),'layers':len(model.Layers),'environment_layer':'环境_Environment','native_closed_solids':native_count,'objects_3ds':len(objects),'vertices':off,'triangles':sum(len(m.faces) for m,_ in meshdata),'trees':trees,'landmarks':sum(r['landmark'] for r in records),'published_height_buildings':sum(r['height_status']=='published' for r in records),'municipal_estimate_buildings':sum(r['height_status']=='municipal' for r in records),'estimated_height_buildings':sum(r['height_status']=='estimated' for r in records),'sectors':{z:sum(r['zone']==z for r in records) for z in zone_shapes},'unit':'meters','crs':'EPSG:32617 local offsets','origin_wgs84':[LON,LAT],'origin_utm':[OX,OY],'bounds':scope.bounds,'district_bounds':{z:list(g.bounds) for z,g in zone_shapes.items()},'terrain':'USGS 3DEP F32 bare-earth DEM, bilinear samples ~18m; 80m landscape patches and locally flattened building pads; Z0=225m DEM datum','terrain_source':'https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer','landscape':landscape_counts,'accuracy':'Official mapped footprints and surfaces; historical/published/estimated heights labeled individually. Not a surveyed as-built model.'}
(OUT/'model_summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
(OUT/'excluded_records.json').write_text(json.dumps(excluded,ensure_ascii=False,indent=2))
print(json.dumps(summary,ensure_ascii=False,indent=2),flush=True)
