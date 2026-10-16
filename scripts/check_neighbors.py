"""Check the delivered neighboring database against source ownership and CAD ground."""
from pathlib import Path
import gzip,hashlib,json,re,struct
import numpy as np
from shapely.geometry import shape,Point,Polygon
from shapely.ops import unary_union,transform
from shapely.strtree import STRtree
from pyproj import Transformer
r=Path(__file__).resolve().parents[1];out=r/'output'
records=json.loads((out/'neighboring_records.json').read_text());report=json.loads((out/'neighboring_areas.json').read_text());layers=json.loads((out/'layer_map.json').read_text())
manifest=json.loads((r/'sources/neighboring_source_manifest.json').read_text())
for entry in manifest['sources']:assert hashlib.sha256(gzip.decompress((r/'sources'/entry['file']).read_bytes())).hexdigest()==entry['raw_sha256']
features=json.loads((out/'neighboring_footprints.geojson').read_text())['features'];polys=[shape(f['geometry'])for f in features];tree=STRtree(polys)
assert len(records)==len(polys)==len(report['pads'])==report['buildings']>0
assert all(b['neighbor'] and b['zone']=='neighbors' and not b['landmark'] and not b['automatic_rooftop_boxes'] for b in records)
assert len({b['layer']for b in records})==len(records) and len({b['code']for b in records})==len(records)
campus=json.loads((out/'footprints_local_meters.geojson').read_text())['features'];protected=unary_union([shape(f['geometry'])for f in campus])
assert sum(p.intersection(protected).area for p in polys)<.05,'Neighbors overlap university facility footprints'
for i,p in enumerate(polys):
 assert p.is_valid and p.area>24
 for j in tree.query(p):
  if j>i:assert p.intersection(polys[j]).area<.025,'Duplicate neighboring volumes'
 assert any(v['layer']==records[i]['layer'] and v['category']=='neighbor-building'for v in layers.values())
# Read only the actual exported context-ground triangles, avoiding full scene decoding.
blob=(out/'UMich_AnnArbor.3ds').read_bytes();triangles=[]
def walk(a,b,name=''):
 while a<b:
  tag,size=struct.unpack_from('<HI',blob,a);end=a+size
  assert size>=6 and end<=b
  if tag in [0x4d4d,0x3d3d,0x4100]:walk(a+6,end,name)
  elif tag==0x4000:
   stop=blob.index(0,a+6,end);obj=blob[a+6:stop].decode('ascii');walk(stop+1,end,obj)
  elif tag==0x4110 and layers.get(name,{}).get('category')=='neighbor-environment' and layers[name]['material']=='ContextGround':
   count=struct.unpack_from('<H',blob,a+6)[0];vertices=np.frombuffer(blob,dtype='<f4',count=count*3,offset=a+8).reshape(-1,3)
   ftag,fsize=struct.unpack_from('<HI',blob,end);assert ftag==0x4120
   count=struct.unpack_from('<H',blob,end+6)[0];faces=np.frombuffer(blob,dtype='<u2',count=count*4,offset=end+8).reshape(-1,4)[:,:3];vv=vertices[faces];normal=np.cross(vv[:,1]-vv[:,0],vv[:,2]-vv[:,0]);triangles.extend(vv[normal[:,2]>1e-7])
  a=end
walk(0,len(blob));triangles=np.asarray(triangles);ground_polys=[Polygon(t[:,:2])for t in triangles];ground_tree=STRtree(ground_polys);worst=0
for sample in report['ground_samples']:
 x,y,z=sample['position'];p=Point(x,y);heights=[]
 for k in ground_tree.query(p,predicate='intersects'):
  a,b,c=triangles[k];u=b-a;v=c-a;det=u[0]*v[1]-u[1]*v[0];d=np.array([x,y])-a[:2];uu=(d[0]*v[1]-d[1]*v[0])/det;vv=(u[0]*d[1]-u[1]*d[0])/det;heights.append(float(a[2]+uu*u[2]+vv*v[2]))
 assert heights,('Missing ground',sample['code'])
 gap=abs(z-max(heights));worst=max(worst,gap);assert gap<.025,(sample['code'],gap)
html=(r/'index.html').read_text();data=json.loads(re.search(r'<script id="campus-data"[^>]*>(.*?)</script>',html,re.S)[1])
assert len(data['neighbors'])==len(records) and len(data['neighborPads'])==len(records)
assert len(data['records'])==len(campus) and set(b['zone']for b in data['records'])=={'central','north','medical','athletic'}
result={'neighboring_buildings':len(records),'retained_source_hashes_verified':len(manifest['sources']),'duplicate_or_campus_overlaps':0,'ground_samples':len(report['ground_samples']),'maximum_ground_contact_gap_m':worst,'ground_triangles':len(triangles),'separate_building_and_environment_layers':True,'passed':True}
(out/'neighboring_validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
