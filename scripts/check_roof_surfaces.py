"""Read delivered 3DS roofs and reject different finishes occupying one plane."""
from pathlib import Path
from collections import defaultdict
import json,struct,hashlib
import numpy as np
from shapely.geometry import Polygon
from shapely.ops import unary_union
ROOT=Path(__file__).resolve().parents[1];out=ROOT/'output'
blob=(out/'UMich_AnnArbor.3ds').read_bytes();layers=json.loads((out/'layer_map.json').read_text());records={r['code']:r for r in json.loads((out/'buildings.json').read_text())}
targets={'M008','M464','M472','M481'};planes=defaultdict(lambda:defaultdict(list));fixtures={code:{'code':code,'meshes':[]}for code in targets};roof_triangles=0

def mesh_chunks(start,end,name):
 global roof_triangles
 v=f=None
 while start<end:
  tag,size=struct.unpack_from('<HI',blob,start);stop=start+size
  if tag==0x4100:mesh_chunks(start+6,stop,name)
  elif tag==0x4110:
   n=struct.unpack_from('<H',blob,start+6)[0];v=np.frombuffer(blob,dtype='<f4',count=n*3,offset=start+8).reshape(-1,3)
  elif tag==0x4120:
   n=struct.unpack_from('<H',blob,start+6)[0];f=np.frombuffer(blob,dtype='<u2',count=n*4,offset=start+8).reshape(-1,4)[:,:3]
  start=stop
 if v is None or f is None:return
 item=layers.get(name,{});mat=item.get('material','');code=name[:4]
 if code not in records or mat not in ['Metal','Slate','Concrete','LightStone']and not mat.startswith('Roof'):return
 if code in targets and (mat in ['Metal','Slate']or mat.startswith('Roof'))and 'B'not in name:
  fixtures[code]['meshes'].append({'name':name,'material':mat,'positions':v.ravel().tolist(),'index':f.ravel().tolist()})
 ts=v[f];ns=np.cross(ts[:,1]-ts[:,0],ts[:,2]-ts[:,0]);length=np.linalg.norm(ns,axis=1);ts=ts[(ns[:,2]>.99999*length)&(length>1e-7)]
 for tri in ts:
  z=float(tri[:,2].mean())
  if z<records[code]['ground_m']+3:continue
  planes[(code,round(z,3))][mat].append(Polygon(tri[:,:2]));roof_triangles+=1

def walk(start,end):
 while start<end:
  tag,size=struct.unpack_from('<HI',blob,start);stop=start+size
  if tag in [0x4d4d,0x3d3d]:walk(start+6,stop)
  elif tag==0x4000:
   nul=blob.index(0,start+6,stop);mesh_chunks(nul+1,stop,blob[start+6:nul].decode('ascii'))
  start=stop
walk(0,len(blob));conflicts=[]
for (code,z),materials in planes.items():
 if len(materials)<2:continue
 merged=[(mat,unary_union(polys))for mat,polys in materials.items()]
 for i,(mat,p)in enumerate(merged):
  for other,q in merged[:i]:
   area=p.intersection(q).area
   if area>.1:conflicts.append({'code':code,'name':records[code]['name'],'elevation_m':z,'materials':[mat,other],'overlap_m2':round(area,3)})
old=json.loads((ROOT/'scripts/fixtures/medical_roofs_before.json').read_text())
for fixture in old:fixtures[fixture['code']]['samples']=fixture['samples']
assert all(f['meshes']for f in fixtures.values())
(ROOT/'tmp/medical_roofs_after.json').write_text(json.dumps(list(fixtures.values()),separators=(',',':'))+'\n')
report={'sourceSha256':hashlib.sha256(blob).hexdigest(),'campus_buildings':len(records),'horizontal_roof_triangles':roof_triangles,'checked_finish_planes':len(planes),'conflicting_surfaces':conflicts,'passed':not conflicts}
(out/'roof_surface_validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2));assert report['passed']
