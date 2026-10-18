"""Download metadata and portable Guide links, ordered 3DM / FBX / GLB."""
from pathlib import Path
from html import escape
import json,lzma,hashlib
from campus_exchange import scene_name

def downloads(root):
 root=Path(root);name=scene_name(root);items=[]
 for kind,path in [('3DM',root/'output'/f'{name}_Layered.3dm'),('FBX',root/'output'/f'{name}.fbx'),('GLB',root/'output'/f'{name}.glb')]:
  if path.stat().st_size>95*1024*1024:
   target=path.with_suffix(path.suffix+'.xz')
   marker=root/'tmp'/f'{path.name}.xz.sha';digest=hashlib.sha256(path.read_bytes()).hexdigest()
   if not target.exists()or not marker.exists()or marker.read_text()!=digest:
    with path.open('rb')as src,lzma.open(target,'wb',preset=6)as dst:
     while chunk:=src.read(4*1024*1024):dst.write(chunk)
    marker.write_text(digest)
   path=target
  if path.stat().st_size>=100*1024*1024:raise ValueError('Download exceeds GitHub per-file limit: '+str(path))
  items.append({'format':kind,'name':path.name,'url':'output/'+path.name,'label':'Download '+kind})
 return items

def links(payload,offline=False):
 return ' · '.join('<a href="'+escape(i['name']if offline else i['url'],quote=True)+'" download>'+escape(i['label'])+'</a>'for i in payload['downloads'])
