"""Encode the existing bounded regional scene as interoperable GLB primitives.

The regional owner/LOD attributes remain custom glTF attributes; ordinary
viewers see standard mesh geometry and EXT_mesh_gpu_instancing transforms.
"""
from pathlib import Path
import json,struct,gzip,hashlib,base64,subprocess
import numpy as np
from campus_exchange import GLB,scene_name,read_legacy_meshes,export_scene

def regional_glb(raw,palette):
 n=struct.unpack_from('<I',raw)[0];h=json.loads(raw[4:4+n]);offset=4+n;g=GLB(palette);entries=[]
 def read(e,key,dtype,width=1):
  a,b=e[key];return np.frombuffer(raw,dtype=dtype,count=b//np.dtype(dtype).itemsize,offset=offset+a).reshape(-1,width)
 for i,e in enumerate(h['entries']):
  attrs={};copy={k:v for k,v in e.items()if k not in ['position','index','normal','feature','region','color','instances']}
  for key,semantic,dtype,kind,component,norm in [('normal','NORMAL','i1','VEC3',5120,True),('feature','_CAMPUS_FEATURE','<u2','SCALAR',5123,False),('region','_CAMPUS_REGION','<u2','SCALAR',5123,False),('color','COLOR_0','u1','VEC3',5121,True)]:
   if key not in e:continue
   a=read(e,key,dtype,3 if kind=='VEC3'else 1);index=g.accessor(a,kind,component,target=34962,normalized=norm);copy[key]=index;attrs[semantic]=index
   if key=='normal':g.json.setdefault('extensionsUsed',[]).append('KHR_mesh_quantization');g.json.setdefault('extensionsRequired',[]).append('KHR_mesh_quantization')
  v=read(e,'position','<f4',3);f=read(e,'index','<u4',3);ext=None
  if 'instances'in e:
   values=read(e,'instances','<f4',e['instanceStride']);copy['instances']=g.accessor(values.reshape(-1),'SCALAR',5126)
   attributes={'TRANSLATION':g.accessor(values[:,:3],'VEC3',5126),'SCALE':g.accessor(values[:,3:6],'VEC3',5126),'_CAMPUS_FEATURE':g.accessor(values[:,6],'SCALAR',5126)}
   if values.shape[1]>7:attributes['_CAMPUS_REGION']=g.accessor(values[:,7],'SCALAR',5126)
   ext={'EXT_mesh_gpu_instancing':{'attributes':attributes}};g.json.setdefault('extensionsUsed',[]).append('EXT_mesh_gpu_instancing');g.json.setdefault('extensionsRequired',[]).append('EXT_mesh_gpu_instancing')
  ni=g.mesh('cell_'+str(i),v,f,e['mat'],{'campus':copy},attributes=attrs,extensions=ext)
  p=g.json['meshes'][-1]['primitives'][0];copy['position']=p['attributes']['POSITION'];copy['index']=p['indices'];entries.append(copy)
 g.json['extras']={'campus':{'bounds':h['bounds'],'entries':entries}};g.json['extensionsUsed']=sorted(set(g.json.get('extensionsUsed',[])));g.json['extensionsRequired']=sorted(set(g.json.get('extensionsRequired',[])))
 return g.bytes()

def update_report(root,manifest):
 path=root/'output/streaming_model_report.json'
 report=json.loads(path.read_text())if path.exists()else{}
 report.update(sourceSha256=manifest['sourceSha256'],deliveryFormat=manifest['format'],overview=manifest['base'],regions=len(manifest['tiles']),allRegionalTransferBytes=sum(t['transferBytes']for t in manifest['tiles']))
 if manifest.get('campusModel'):report['campusTransferBytes']=manifest['campusModel']['modelTransferBytes']
 path.write_text(json.dumps(report,indent=2)+'\n')

def convert_regions(root):
 root=Path(root);folder=root/'assets/stream';manifest=json.loads((folder/'manifest.json').read_text());palette=json.loads((root/'output/palette.json').read_text())
 if manifest.get('format')=='campus-glb-regions-v1':
  update_report(root,manifest);return
 def save_asset(item,content,suffix='.glb.gz'):
  digest=hashlib.sha256(content).hexdigest();stem=item['id']+'-'+digest[:12];url='assets/stream/'+stem+suffix;local='assets/stream/'+stem+'.js';(root/url).write_bytes(content);enc=base64.b64encode(content).decode();(root/local).write_text('// Generated GLB model data, not credentials.\nwindow.__UMICH_REGION__="'+'\\\n'.join(enc[i:i+32]for i in range(0,len(enc),32))+'";\n')
  return {**item,'url':url,'local':local,'sha256':digest,'transferBytes':len(content)}
 for i,item in enumerate(manifest['tiles']):
  raw=gzip.decompress((root/item['url']).read_bytes());content=gzip.compress(regional_glb(raw,palette),compresslevel=6,mtime=0);manifest['tiles'][i]=save_asset(item,content)
 base=(root/manifest['base']['url']).read_bytes();n=struct.unpack_from('<I',base)[0];directory=json.loads(base[4:4+n]);start=4+n;parts=[];offset=0
 for cell in directory:
  raw=gzip.decompress(base[start+cell['offset']:start+cell['offset']+cell['length']]);content=gzip.compress(regional_glb(raw,palette),compresslevel=6,mtime=0);cell.update(offset=offset,length=len(content));parts.append(content);offset+=len(content)
 j=json.dumps(directory,separators=(',',':')).encode();manifest['base']=save_asset(manifest['base'],struct.pack('<I',len(j))+j+b''.join(parts),'.bin')
 if manifest.get('campusModel'):
  # Existing UCSB campus subset has source-equivalent names and geometry.
  from campus_exchange import pack_glb,unpack_glb
  doc,binary=unpack_glb(root/'output'/f'{scene_name(root)}.glb');old=json.loads((folder/'manifest.json').read_text());layers=json.loads((root/'output/layer_map.json').read_text());neighbor_layers={r['layer']for r in json.loads((root/'output/neighboring_records.json').read_text())};selected=[]
  for ni,node in enumerate(doc['nodes']):
   if 'mesh'in node:
    source=node.get('extras',{}).get('sourceObject',node['name']);meta=layers[source]
    if meta['layer']not in neighbor_layers and meta['category']!='neighbor-environment':selected.append(ni)
  doc['nodes'][0]['children']=selected
  # Keep only campus nodes/meshes/views, with compact buffers (no context cost).
  core=GLB(palette)
  for ni in selected:
   node=doc['nodes'][ni];p=doc['meshes'][node['mesh']]['primitives'][0]
   def array(ai):
    a=doc['accessors'][ai];view=doc['bufferViews'][a['bufferView']];typ={5126:'<f4',5125:'<u4',5123:'<u2'}[a['componentType']];width=3 if a['type']=='VEC3'else 1
    return np.frombuffer(binary,dtype=typ,count=a['count']*width,offset=view.get('byteOffset',0)).reshape(-1,width)
   core.mesh(node['name'],array(p['attributes']['POSITION']),array(p['indices']).reshape(-1,3),doc['materials'][p['material']]['name'],node.get('extras'))
  path=root/'tmp/campus-core.glb';path.write_bytes(core.bytes());subprocess.run(['node','scripts/pack_core_glb.mjs'],cwd=root,check=True)
  manifest['campusModel']=json.loads((root/'tmp/campus-core.json').read_text())
 manifest['format']='campus-glb-regions-v1';manifest['legacySourceSha256']=manifest['sourceSha256'];manifest['sourceSha256']=hashlib.sha256((root/'output'/f'{scene_name(root)}.glb').read_bytes()).hexdigest();(folder/'manifest.json').write_text(json.dumps(manifest,separators=(',',':'))+'\n')
 # Only obsolete generated packets in this manifest are replaced.
 used={Path(a[k]).name for a in [manifest['base'],*manifest['tiles']]for k in ['url','local']}
 if manifest.get('campusModel'):used.update(Path(manifest['campusModel'][k]).name for k in ['modelUrl','offlineModelScript'])
 for p in folder.iterdir():
  if p.suffix in ['.bin','.js']and p.name not in used:p.unlink()
 update_report(root,manifest)
 print('Regional GLBs:',len(manifest['tiles']),'base transfer',manifest['base']['transferBytes'],flush=True)

if __name__=='__main__':convert_regions(Path(__file__).resolve().parents[1])
