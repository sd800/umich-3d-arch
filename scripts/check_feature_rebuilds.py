"""Focused exported-geometry checks for CPP and the three Courtyards buildings."""
from pathlib import Path
import json,struct
import numpy as np
from shapely.geometry import shape,Point
from power_plant import STACKS
r=Path(__file__).resolve().parents[1];out=r/'output';campus=json.loads((out/'buildings.json').read_text());cpp=next(b for b in campus if b['facility_id']=='1000260');neighbors=json.loads((out/'neighboring_records.json').read_text());courts=[b for b in neighbors if b['facility_id']in ['relation/3874939','relation/3874940','relation/3874941']];assert len(courts)==3 and all(b['neighbor']and b['levels']==4 and b['courtyard_voids']==1 for b in courts)
assert cpp['height_status']=='published'and abs(cpp['height']-238*.3048)<.001
assert cpp['architecture_detail']['2022_turbine_addition']
features=json.loads((out/'neighboring_footprints.geojson').read_text())['features'];footprints={f['properties']['code']:shape(f['geometry'])for f in features};holes={b['code']:shape({'type':'Polygon','coordinates':[list(footprints[b['code']].interiors[0].coords)]})for b in courts};codes=set(holes);blob=(out/'UMich_AnnArbor.3ds').read_bytes();vertices=[];courtyard_top_overlap=0

def walk(a,b,name=''):
 global courtyard_top_overlap
 while a<b:
  tag,size=struct.unpack_from('<HI',blob,a);end=a+size
  if tag in [0x4d4d,0x3d3d,0x4100]:walk(a+6,end,name)
  elif tag==0x4000:
   stop=blob.index(0,a+6,end);walk(stop+1,end,blob[a+6:stop].decode('ascii'))
  elif tag==0x4110:
   code=name[:5]if name.startswith('N')else name[:4]
   if code==cpp['code']or code in codes and 'B'in name:
    count=struct.unpack_from('<H',blob,a+6)[0];v=np.frombuffer(blob,dtype='<f4',count=count*3,offset=a+8).reshape(-1,3)
    if code==cpp['code']:vertices.extend(v)
    else:
     count=struct.unpack_from('<H',blob,end+6)[0];f=np.frombuffer(blob,dtype='<u2',count=count*4,offset=end+8).reshape(-1,4)[:,:3];ts=v[f];normal=np.cross(ts[:,1]-ts[:,0],ts[:,2]-ts[:,0]);centers=ts[normal[:,2]>1e-6].mean(axis=1)
     for c in centers:
      if holes[code].buffer(-.03).contains(Point(*c[:2])):courtyard_top_overlap+=1
  a=end
walk(0,len(blob));assert not courtyard_top_overlap,'Apartment body caps close a real courtyard'
v=np.asarray(vertices);stack_results=[]
for spec in STACKS:
 distance=np.linalg.norm(v[:,:2]-spec['center'],axis=1);peak=float(v[distance<spec['radius_m']+.25,2].max())-cpp['ground_m'];assert abs(peak-spec['height_m'])<.002,(spec['name'],peak);stack_results.append({'name':spec['name'],'published_height_m':spec['height_m'],'exported_height_m':peak})
report={'central_power_plant':{'code':cpp['code'],'published_stack_heights':stack_results,'industrial_volumes':cpp['architecture_detail']['industrial_volumes']},'courtyards_apartments':[{'code':b['code'],'address':b['address'],'exterior_storeys':b['levels'],'courtyard_voids':b['courtyard_voids']}for b in courts],'courtyard_body_cap_intrusions':courtyard_top_overlap,'passed':True};(out/'feature_rebuild_validation.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
