"""Retain small public OSM map snapshots for Ann Arbor campus context."""
from pathlib import Path
from urllib.request import Request,urlopen
import json,gzip,hashlib,datetime
R=Path(__file__).resolve().parents[1]
entries=[]
for name,bbox in [('downtown','-83.758,42.277,-83.727,42.2875'),('broadway','-83.745,42.286,-83.719,42.304'),('river_arboretum','-83.734,42.272,-83.710,42.288')]:
 p=R/'sources'/('osm_neighbors_'+name+'.xml.gz')
 url='https://api.openstreetmap.org/api/0.6/map?bbox='+bbox
 if not p.exists():
  print('Fetching',name,flush=True)
  with urlopen(Request(url,headers={'User-Agent':'Campus3DModels/1.0 public geographic study'}),timeout=120)as response:raw=response.read()
  assert b'<osm 'in raw[:1500]
  p.write_bytes(gzip.compress(raw,compresslevel=9,mtime=0))
 else:raw=gzip.decompress(p.read_bytes())
 entries.append({'file':p.name,'url':url,'retrieved':'2026-10-15','raw_sha256':hashlib.sha256(raw).hexdigest(),'bytes':len(raw)})
for name in ['central_athletic','north']:
 p=R/'sources'/('osm_architecture_'+name+'.xml.gz')
 entries.append({'file':p.name,'retrieved':'2026-10-13','url':json.loads((R/'sources/architecture_osm_manifest.json').read_text())['sources'][0 if name=='north'else 1]['url'],'raw_sha256':hashlib.sha256(gzip.decompress(p.read_bytes())).hexdigest()})
(R/'sources/neighboring_source_manifest.json').write_text(json.dumps({'sources':entries,'license':'OpenStreetMap contributors, ODbL 1.0','license_url':'https://www.openstreetmap.org/copyright'},indent=2)+'\n')
print('Retained',len(entries),'source snapshots',flush=True)
