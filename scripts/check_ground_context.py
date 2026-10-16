"""Verify filled terrain at the reported gaps and cemetery circulation classification."""
from pathlib import Path
import json,struct
import numpy as np
from shapely.geometry import Point,Polygon,shape
from shapely.strtree import STRtree
from neighboring_areas import read_osm
r=Path(__file__).resolve().parents[1];out=r/'output';data=(out/'UMich_AnnArbor.3ds').read_bytes();layers=json.loads((out/'layer_map.json').read_text());report=json.loads((out/'neighboring_areas.json').read_text())
features,_=read_osm();cem=next(f['poly']for f in features if f['properties'].get('name')=='Forest Hill Cemetery'and f['poly'].area>10000)
triangles=[];bad_road=0;path_area=0;rail_area=0
# Keep actual exported top triangles for ground and circulation only.
def walk(a,b,name=''):
 global bad_road,path_area,rail_area
 while a<b:
  tag,size=struct.unpack_from('<HI',data,a);end=a+size
  if tag in [0x4d4d,0x3d3d,0x4100]:walk(a+6,end,name)
  elif tag==0x4000:
   stop=data.index(0,a+6,end);walk(stop+1,end,data[a+6:stop].decode('ascii'))
  elif tag==0x4110:
   record=layers.get(name,{});mat=record.get('material');layer=record.get('layer')
   if mat in ['Ground','ContextGround','ContextPath','RailBallast']or layer=='环境_Environment'and mat in ['Road','Walk']:
    n=struct.unpack_from('<H',data,a+6)[0];v=np.frombuffer(data,dtype='<f4',count=n*3,offset=a+8).reshape(-1,3);count=struct.unpack_from('<H',data,end+6)[0];f=np.frombuffer(data,dtype='<u2',count=count*4,offset=end+8).reshape(-1,4)[:,:3];vv=v[f];normal=np.cross(vv[:,1]-vv[:,0],vv[:,2]-vv[:,0]);tops=vv[normal[:,2]>1e-7]
    if mat in ['Ground','ContextGround']:triangles.extend(tops)
    elif mat=='RailBallast':rail_area+=sum(Polygon(t[:,:2]).area for t in tops)
    else:
     for t in tops:
      p=Polygon(t[:,:2])
      if not p.intersects(cem):continue
      area=p.intersection(cem).area
      if mat=='ContextPath':path_area+=area
      else:bad_road+=area
  a=end
walk(0,len(data));polys=[Polygon(t[:,:2])for t in triangles];tree=STRtree(polys)
samples=[(1230,2200),(1350,2100),(2400,1550),(2600,1600),(2100,1500),(850,170),(1000,1900)]
for x,y in samples:assert len(tree.query(Point(x,y),predicate='intersects')),('Unfilled terrain gap',x,y)
assert path_area>1000,('Missing cemetery drives',path_area)
assert bad_road<5,('Cemetery drives still use main-road or generic walk rendering',bad_road)
assert report['ground_cover']['continuous_infill_m2']>1e6
assert rail_area>1000 and report['ground_cover']['railway_centerline_m']>1000,('Missing railway corridor',rail_area)
result={'filled_ground_probes':len(samples),'probe_positions_local_m':samples,'forest_hill_internal_drive_area_m2':round(path_area,2),'remaining_main_road_or_walk_overlap_m2':round(bad_road,4),'exported_railway_ballast_area_m2':round(rail_area,2),'ground_cover':report['ground_cover'],'passed':True}
(out/'ground_context_validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
