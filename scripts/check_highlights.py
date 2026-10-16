"""Focused coverage and exported-carillon checks for the highlight revision."""
from pathlib import Path
import json,struct
import numpy as np
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
r=Path(__file__).resolve().parents[1];pkg=json.loads((r/'package.json').read_text())['name'];kind={'umich-ann-arbor-model':('UMich_AnnArbor',29,{'M035':('Bronze',53),'M401':('Bronze',60)}),'ucsb-campus-model':('UCSB_MainCampus',24,{'S061':('Gold',61)}),'uchicago-hydepark-model':('UChicago_HydePark',19,{})}[pkg];name,total,bells=kind
records=json.loads((r/'output/buildings.json').read_text());highlights=[x for x in records if x['landmark']];assert len(highlights)==total
layers=json.loads((r/'output/layer_map.json').read_text())
for b in highlights:
 s=b.get('highlight_joinery');assert s is not None,b['name']
 if s['added_triangles']:assert any(n.startswith(b['code']+'HD')for n in layers),b['name']
 else:assert s['hollow_bells']or b['code']in bells,b['name']
result={'highlights':total,'framed_openings':sum(b['highlight_joinery']['framed_openings']for b in highlights),'all_highlights_covered':True,'carillons':{}}
if bells:
 blob=(r/'output'/f'{name}.3ds').read_bytes();counts={k:0 for k in bells}
 def walk(a,z):
  while a<z:
   tag,n=struct.unpack_from('<HI',blob,a);end=a+n
   if tag in [0x4d4d,0x3d3d]:walk(a+6,end)
   elif tag==0x4000:
    stop=blob.index(0,a+6,end);nm=blob[a+6:stop].decode();code=nm[:4]
    if code in bells and layers[nm]['material']==bells[code][0]:
     b=stop+1
     while b<end:
      t,size=struct.unpack_from('<HI',blob,b)
      if t==0x4100:
       c=b+6;nv=None;f=None
       while c<b+size:
        t1,n1=struct.unpack_from('<HI',blob,c)
        if t1==0x4110:nv=struct.unpack_from('<H',blob,c+6)[0]
        elif t1==0x4120:
         nf=struct.unpack_from('<H',blob,c+6)[0];f=np.frombuffer(blob,dtype='<u2',count=nf*4,offset=c+8).reshape(-1,4)[:,:3]
        c+=n1
       edges=f[:,[0,1,1,2,2,0]].reshape(-1,2);graph=coo_matrix((np.ones(len(edges)),(edges[:,0],edges[:,1])),shape=(nv,nv)).tocsr();counts[code]+=connected_components(graph,directed=False)[0]
      b+=size
   a=end
 walk(0,len(blob))
 for code,count in counts.items():assert count==bells[code][1],(code,count,bells[code]);result['carillons'][code]=count
if pkg=='ucsb-campus-model':
 by={b['facility_id']:b for b in highlights};assert by['280']['levels']==3;assert by['332']['levels']==2;assert 'folded' in by['303']['partition_en'];assert by['345']['highlight_joinery']['guardrails_m']>0
if pkg=='uchicago-hydepark-model':assert next(x for x in highlights if x['osm_id']==157655069)['levels']==1
(r/'output/highlight_refinement_validation.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result))
