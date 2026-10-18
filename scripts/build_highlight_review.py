from pathlib import Path
import json,struct,sys,math,gzip
root=Path(__file__).resolve().parents[1];out=root/'output';records=[r for r in json.loads((out/'viewer_records.json').read_text())if r['landmark']];layers=json.loads((out/'layer_map.json').read_text());palette=json.loads((out/'palette.json').read_text());cfg=json.loads((root/'config/highlight-views.json').read_text())['views'];blob=next(out.glob('*.3ds')).read_bytes();data={r['layer']:[]for r in records}
def chunk(tag,b):return struct.pack('<HI',tag,len(b)+6)+b
def walk(a,z):
 while a<z:
  tag,n=struct.unpack_from('<HI',blob,a);end=a+n
  if tag in [0x4d4d,0x3d3d]:walk(a+6,end)
  elif tag==0x4000:
   stop=blob.index(0,a+6,end);name=blob[a+6:stop].decode();info=layers.get(name,{})
   if info.get('layer')in data:data[info['layer']].append(blob[a:end])
  a=end
walk(0,len(blob));review=[]
for r in records:
 ident=str(r.get('facility_id',r.get('osm_id')));view=cfg.get(ident,{});code=r['code'];model=chunk(0x4d4d,chunk(0x3d3d,b''.join(data[r['layer']])));(root/'tmp'/('highlight-'+code+'.3ds.gz')).write_bytes(gzip.compress(model))
 review.append({'code':code,'name':r['name'],'url':'highlight-'+code+'.3ds.gz','azimuth':view.get('azimuth_deg',235),'elevation':view.get('elevation_deg',28)})
(root/'tmp/highlight-review-data.json').write_text(json.dumps({'records':review,'layers':layers,'palette':palette}))
(root/'tmp/highlight-review.html').write_text('''<!doctype html><meta charset="utf-8"><title>Architectural highlight review</title><style>body{margin:0;background:#eceee8;color:#222;font:14px system-ui}nav{height:44px;display:flex;gap:12px;align-items:center;padding:0 16px}button{padding:6px 14px}canvas{display:block}#labels{position:fixed;inset:44px 0 0;pointer-events:none;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr)}#labels div{padding:8px 12px;font-size:13px}</style><nav><button id="previous">Previous six</button><span id="status">Loading</span><button id="next">Next six</button><button id="rotate">Other side</button><button id="tilt">Low angle</button></nav><div id="labels"></div><script type="module" src="highlight-review.js"></script>''')
print(root.name,len(review),'review models extracted')
