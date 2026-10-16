"""Build bounded spatial LOD packets; original metric CAD is read-only.

The overview is a simplified positional derivative. Near packets preserve the
source triangles, apart from removing invisible decorative surface undersides.
Repeated connected parts share normalized geometry and instance transforms.
"""
from pathlib import Path
import json,struct,hashlib,gzip,subprocess,sys,math,shutil,pickle
from collections import defaultdict,Counter
import numpy as np
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components

ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'assets/stream';OUT.mkdir(exist_ok=True)
TMP=ROOT/'tmp/stream-build';TMP.mkdir(parents=True,exist_ok=True)
SIZE=192;source=ROOT/'output/UMich_AnnArbor.3ds';blob=source.read_bytes()
layers=json.loads((ROOT/'output/layer_map.json').read_text());records=json.loads((ROOT/'output/buildings.json').read_text())+json.loads((ROOT/'output/neighboring_records.json').read_text())
owners={r['layer']:i+1 for i,r in enumerate(records)};byid={i+1:r for i,r in enumerate(records)}
SURF={'ContextGround':-101,'Ground':-100,'ContextSoil':-99,'ContextGrass':-94.5,'ContextForest':-93.5,'ContextGravel':-92,'ContextLot':-91,'ContextPaving':-76,'ContextWalk':-74.8,'ContextPath':-78,'RailBallast':-81,'RailSleeper':-69,'Rail':-68,'Sand':-95,'Grass':-94,'Garden':-93,'Road':-80,'Walk':-75,'Paving':-70,'Court':-65,'Track':-64,'Water':-60,'Marking':-50}
SOLID={'Ground','ContextGround'};TREES={'Leaves','ContextLeaves','Trunk'}
ROOF={'ContextBrick','ContextStone','ContextPanel','Brick','NorthBrick','Terracotta','Sandstone','Limestone','LightStone','Concrete','WhitePanel','MetalPanel'}
high=defaultdict(lambda:defaultdict(list));low=defaultdict(lambda:defaultdict(list));instances=defaultdict(lambda:defaultdict(list));templates={};tree_canonical={};repeat_count=0;input_tri=0
tile=lambda x,y:f'{math.floor(x/SIZE)}_{math.floor(y/SIZE)}'
def chunks(a,z):
 while a+6<=z:
  tag,n=struct.unpack_from('<HI',blob,a)
  assert n>=6 and a+n<=z
  yield tag,a,a+n;a+=n
def compact(v,f):
 used,ix=np.unique(f.reshape(-1),return_inverse=True)
 return v[used].astype('<f4'),ix.reshape(-1,3).astype('<u4')
def normals(v,f):
 tri=v[f];n=np.cross(tri[:,1]-tri[:,0],tri[:,2]-tri[:,0]);length=np.linalg.norm(n,axis=1);return n/np.maximum(length[:,None],1e-15)
def add(target,key,v,f,mat,owner,neighbor,detail=False,kind='building',order=0):
 if not len(f):return
 target[key][(mat,owner,neighbor,detail,kind,order)].append(compact(v,f))
def component_ranges(v,f):
 # CAD concatenates disconnected furnishings/windows. Compute components on
 # vertex indices so coincident facade pieces never become a welded object.
 edges=f[:,[0,1,1,2,2,0]].reshape(-1,2)
 graph=coo_matrix((np.ones(len(edges),dtype=np.uint8),(edges[:,0],edges[:,1])),shape=(len(v),len(v))).tocsr()
 n,labels=connected_components(graph,directed=False);face_labels=labels[f[:,0]]
 order=np.argsort(face_labels,kind='stable');breaks=np.flatnonzero(np.diff(face_labels[order]))+1
 return [f[a]for a in np.split(order,breaks)]
def instance(v,f,mat,owner,neighbor,detail,key):
 global repeat_count
 vv,ff=compact(v,f);a=vv.min(axis=0);b=vv.max(axis=0);scale=b-a
 if np.min(scale)<1e-5:return False
 normalized=((vv-a)/scale).astype('<f4')
 digest=hashlib.sha256(np.round(normalized,3).tobytes()+ff.tobytes()).hexdigest()[:20]
 if digest not in templates:templates[digest]=(normalized,ff)
 instances[key][(mat,neighbor,detail,digest)].append([*map(float,a),*map(float,scale),owner]);repeat_count+=1
 return True
print('Reading source triangles',flush=True)
for tag,a,z in chunks(6,len(blob)):
 if tag!=0x3d3d:continue
 for tag,c,d in chunks(a+6,z):
  if tag!=0x4000:continue
  end=blob.index(0,c+6);name=blob[c+6:end].decode();meta=layers[name];v=f=None
  for tag,e,h in chunks(end+1,d):
   if tag!=0x4100:continue
   for tag,j,k in chunks(e+6,h):
    if tag==0x4110:
     count=struct.unpack_from('<H',blob,j+6)[0];v=np.frombuffer(blob,dtype='<f4',count=count*3,offset=j+8).reshape(-1,3).copy()
    if tag==0x4120:
     count=struct.unpack_from('<H',blob,j+6)[0];f=np.frombuffer(blob,dtype='<u2',count=count*4,offset=j+8).reshape(-1,4)[:,:3].astype('<u4')
  assert v is not None and f is not None
  input_tri+=len(f);mat=meta['material'];owner=owners.get(meta['layer'],0);neighbor=meta['category'].startswith('neighbor');detail='D'in name and owner>0
  if owner:
   r=byid[owner];key=tile(*r['center']);n=normals(v,f);centers=v[f].mean(axis=1)
   roof=(mat in ROOF)&(n[:,2]>.7)&(centers[:,2]>r['ground_m']+3)
   for sel,material in [(~roof,mat),(roof,'__RoofCap')]:
    ff=f[sel]
    if not len(ff):continue
    # Repeated facade parts are instanced when there are many disconnected
    # components. Unique architectural assemblies remain ordinary geometry.
    components=component_ranges(v,ff)if detail else [ff]
    if detail and len(components)>5:
     for component in components:
      if len(component)<=320 and instance(v,component,material,owner,neighbor,detail,key):continue
      add(high,key,v,component,material,owner,neighbor,detail)
    else:add(high,key,v,ff,material,owner,neighbor,detail)
    if not detail:add(low,key,v,ff,material,owner,neighbor,False)
  elif mat in TREES:
   for ff in component_ranges(v,f):
    vv,_=compact(v,ff);center=(vv.min(axis=0)+vv.max(axis=0))/2;key=tile(*center[:2])
    if not instance(v,ff,mat,0,neighbor,False,key):add(high,key,v,ff,mat,0,neighbor,False,'accent')
  else:
   n=normals(v,f);surface=mat in SURF;up=n[:,2]>.1
   if surface:
    # Paint is a top skin; ground keeps an opaque top and continuous sides.
    groups=[(f[up],'surface',SURF[mat])]
    if mat in SOLID:
     shell=f[~up];vv=v.copy();top=v[f[up]].reshape(-1,3)
     heights={}
     for x,y,zz in top:heights[(round(float(x),3),round(float(y),3))]=max(heights.get((round(float(x),3),round(float(y),3)),-1e6),float(zz))
     for i in np.unique(shell):
      x,y,zz=vv[i]
      if zz<heights.get((round(float(x),3),round(float(y),3)),zz)-.005:vv[i,2]=-40
     # Classifying a shell by its original source centroid keeps its entire
     # triangle intact; neighboring tiles share identical boundary vertices.
     sf=vv[shell].mean(axis=1);keys=np.array([tile(x,y)for x,y in sf[:,:2]])
     for key in np.unique(keys):
      ff=shell[keys==key];add(high,key,vv,ff,mat,0,neighbor,False,'shell',SURF[mat]-1000);add(low,key,vv,ff,mat,0,neighbor,False,'shell',SURF[mat]-1000)
   else:groups=[(f,'accent',0)]
   for ff,kind,order in groups:
    if not len(ff):continue
    centers=v[ff].mean(axis=1);keys=np.array([tile(x,y)for x,y in centers[:,:2]])
    for key in np.unique(keys):
     sub=ff[keys==key];add(high,key,v,sub,mat,0,neighbor,False,kind,order)
     # Tiny furniture/rails are near-only, retaining their full source form.
     if kind=='surface' or mat in ['Bronze','MetalPanel']:add(low,key,v,sub,mat,0,neighbor,False,kind,order)
del blob
for key,batches in instances.items():
 for ident,values in list(batches.items()):
  mat,neighbor,detail,digest=ident
  if len(values)>=3 or mat in TREES:continue
  v,f=templates[digest]
  for row in values:add(high,key,v*np.asarray(row[3:6])+np.asarray(row[:3]),f,mat,int(row[6]),neighbor,detail)
  del batches[ident]
print('Source read:',input_tri,'triangles;',repeat_count,'shared components;',len(high),'spatial tiles',flush=True)

def combine(parts):
 vs=[];fs=[];n=0
 for v,f in parts:vs.append(v);fs.append(f+n);n+=len(v)
 v=np.concatenate(vs);f=np.concatenate(fs)
 # Welding by exact source float coordinates is safe within one owner/material.
 vv,ix=np.unique(v,axis=0,return_inverse=True);return vv.astype('<f4'),ix[f].astype('<u4')
files=[];jobs=[]
for key,buckets in low.items():
 for ident,parts in list(buckets.items()):
  if ident[4]=='building':
   if ident[0]=='Foundation':continue
   kept=[]
   for v,f in parts:
    for component in component_ranges(v,f):
     vv,ff=compact(v,component);extent=np.ptp(vv,axis=0)
     if sorted(extent)[1]>=1.2:kept.append((vv,ff))
   if not kept:continue
   parts=kept
  v,f=combine(parts);path=TMP/f'{len(files)}.bin';path.write_bytes(struct.pack('<II',len(v),len(f))+v.tobytes()+f.tobytes());files.append(str(path));jobs.append((key,ident,path))
print('Simplifying overview:',len(jobs),'bounded meshes',flush=True)
for i in range(0,len(files),200):subprocess.run(['node','scripts/simplify_stream.mjs',*files[i:i+200]],cwd=ROOT,check=True)
low.clear()
for key,ident,path in jobs:
 data=path.read_bytes();nv,nf=struct.unpack_from('<II',data);v=np.frombuffer(data,dtype='<f4',count=nv*3,offset=8).reshape(-1,3);f=np.frombuffer(data,dtype='<u4',count=nf*3,offset=8+nv*12).reshape(-1,3)
 low[key][ident]=[compact(v,f)]
path_names=set();all_instances=sum(len(v)for b in instances.values()for v in b.values())

def vertex_normals(v,f):
 n=np.zeros_like(v);tri=v[f];fn=np.cross(tri[:,1]-tri[:,0],tri[:,2]-tri[:,0])
 for j in range(3):np.add.at(n,f[:,j],fn)
 n/=np.maximum(np.linalg.norm(n,axis=1)[:,None],1e-10)
 return np.clip(np.round(n*127),-127,127).astype('i1')

palette=json.loads((ROOT/'output/palette.json').read_text())
def linear_color(mat):
 c=np.asarray([114,122,117]if mat=='__RoofCap'else palette.get(mat,[160,160,150]))/255
 return np.round(np.where(c<=.04045,c/12.92,((c+.055)/1.055)**2.4)*255).astype('u1')

def packet(meshes,insts,level):
 chunks=[];entries=[];offset=0;triangles=0;gpu=0;bounds=[]
 def buffer(a,dtype):
  nonlocal offset
  padding=(-offset)%4
  if padding:chunks.append(bytes(padding));offset+=padding
  raw=np.asarray(a,dtype=dtype).tobytes();value=[offset,len(raw)];chunks.append(raw);offset+=len(raw);return value
 def geometry(v,f):
  nonlocal gpu,triangles
  # Face normals stay flat; positional normals are unnecessary with derivative
  # shading. Indexed positions are shared by the top/depth passes.
  v,f=compact(v,f);gpu+=v.nbytes+f.nbytes;triangles+=len(f);bounds.append([v.min(axis=0).tolist(),v.max(axis=0).tolist()])
  gpu+=len(v)*3
  return {'position':buffer(v,'<f4'),'normal':buffer(vertex_normals(v,f),'i1'),'index':buffer(f,'<u4')}
 # Merge owner groups into one draw per tile/material, keeping feature IDs.
 merged=defaultdict(list)
 for ident,parts in meshes.items():
  mat,owner,neighbor,detail,kind,order=ident[:6];region=ident[6]if len(ident)>6 else 0
  for v,f in parts:
   rank=({'Metal':1,'Slate':1,'RoofMembrane':2,'RoofGravel':2,'RoofZinc':2,'RoofGreen':3,'RoofEdge':4,'Concrete':3,'LightStone':3}.get(mat,2)if detail else 0)
   merged[(('__VertexColor'if kind=='building'else mat),neighbor,detail,kind,order,rank)].append((v,f,owner,mat,region))
 for (mat,neighbor,detail,kind,order,rank),parts in merged.items():
  vv=[];ff=[];ids=[];colors=[];regions=[];n=0
  for v,f,owner,original_mat,region in parts:
   vv.append(np.round(v/.05)*.05 if level=='low'else v);ff.append(f+n);ids.append(np.full(len(v),owner,dtype='<u2'));colors.append(np.tile(linear_color(original_mat),(len(v),1)));regions.append(np.full(len(v),region,dtype='<u2'));n+=len(v)
  v=np.concatenate(vv);f=np.concatenate(ff);feature=np.concatenate(ids)
  # Preserve feature index ownership while packing (no cross-owner weld).
  geo={'position':buffer(v,'<f4'),'index':buffer(f,'<u4'),'feature':buffer(feature,'<u2'),'normal':buffer(vertex_normals(v,f),'i1')};gpu+=v.nbytes+f.nbytes+feature.nbytes+len(v)*3;triangles+=len(f);bounds.append([v.min(axis=0).tolist(),v.max(axis=0).tolist()]);
  if mat=='__VertexColor':geo['color']=buffer(np.concatenate(colors),'u1');gpu+=len(v)*3
  if level=='low':geo['region']=buffer(np.concatenate(regions),'<u2');gpu+=len(v)*2
  entries.append(dict(mat=mat,neighbor=neighbor,detail=detail,kind=kind,order=order,rank=rank,**geo))
 normalized_instances=defaultdict(list)
 for (mat,neighbor,detail,digest),values in insts.items():
  if mat in TREES:
   canonical=tree_canonical.setdefault((mat,len(templates[digest][1])),digest)
   digest=canonical
  if level=='low'and mat in ['Leaves','ContextLeaves']:digest='canopy20'
  normalized_instances[(mat,neighbor,detail,digest)].extend(values)
 for (mat,neighbor,detail,digest),values in normalized_instances.items():
  if digest!='canopy20':v,f=templates[digest]
  if level=='low' and mat in ['Leaves','ContextLeaves']:
   # Same canopy positions/envelopes; a 20-face crown at overview scale.
   import trimesh
   m=trimesh.creation.icosphere(subdivisions=0);v=(m.vertices-m.vertices.min(axis=0))/np.ptp(m.vertices,axis=0);f=m.faces.astype('<u4');digest='canopy20'
  if level=='low' and detail:continue
  values=np.asarray(values,dtype='<f4');geo=geometry(v,f);triangles+=(len(values)-1)*len(f);gpu+=len(values)*72
  bounds.extend([[row[:3].tolist(),(row[:3]+row[3:6]).tolist()]for row in values])
  entries.append(dict(mat=mat,neighbor=neighbor,detail=detail,kind='instance',order=0,template=digest,instances=buffer(values,'<f4'),instanceStride=values.shape[1],**geo))
 if not bounds:return None
 b=np.asarray(bounds);bound=[*b[:,0].min(axis=0).tolist(),*b[:,1].max(axis=0).tolist()]
 header=json.dumps({'version':1,'entries':entries,'bounds':bound},separators=(',',':')).encode();pad=(-len(header))%4;header+=b' '*pad
 raw=struct.pack('<I',len(header))+header+b''.join(chunks);compressed=gzip.compress(raw,compresslevel=6,mtime=0)
 return compressed,dict(triangles=int(triangles),gpuBytes=int(gpu),decodedBytes=len(raw),draws=len(entries),bounds=bound)
def write(name,packed):
 compressed,report=packed;digest=hashlib.sha256(compressed).hexdigest();filename=f'{name}-{digest[:12]}';path=OUT/(filename+'.bin');path.write_bytes(compressed);encoded=__import__('base64').b64encode(compressed).decode()
 script='// Generated regional model data, not credentials.\nwindow.__UMICH_REGION__="'+'\\\n'.join(encoded[i:i+32]for i in range(0,len(encoded),32))+'";\n';(OUT/(filename+'.js')).write_text(script)
 path_names.update([filename+'.bin',filename+'.js']);return dict(id=name,url='assets/stream/'+filename+'.bin',local='assets/stream/'+filename+'.js',sha256=digest,transferBytes=len(compressed),**report)
overview={};manifest={'format':'umich-regions-v1','cellSize':SIZE,'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'ownerCodes':[r['code']for r in records],'tiles':[]}
# One small initial packet per spatial cell allows viewport culling of batches;
# all compressed base packets share a single HTTP transfer for initial loading.
low_entries={};base_parts={};base_instances={}
keys=sorted(set(high)|set(instances));coarse_mesh=defaultdict(lambda:defaultdict(list));coarse_instances=defaultdict(lambda:defaultdict(list))
for region,key in enumerate(keys,1):
 h=packet(high.get(key,{}),instances.get(key,{}),'high')
 if not h:continue
 high_item=write('tile_'+key,h);high_item['key']=key;high_item['regionId']=region;high_item['neighborOnly']=all(k[2]for k in high.get(key,{}))and all(k[1]for k in instances.get(key,{}));manifest['tiles'].append(high_item)
 x,y=map(int,key.split('_'));coarse=f'{x//4}_{y//4}'
 for ident,parts in low.get(key,{}).items():coarse_mesh[coarse][(*ident,region)].extend(parts)
 for ident,values in instances.get(key,{}).items():coarse_instances[coarse][ident].extend([*row,region]for row in values)
for coarse,parts in coarse_mesh.items():
 packed=packet(parts,coarse_instances.get(coarse,{}),'low')
 if packed:low_entries[coarse]=packed
print('Writing overview and regional assets',flush=True)
base_index=[];base_bytes=[];off=0
for key,(raw,report)in low_entries.items():base_index.append(dict(key=key,offset=off,length=len(raw),**report));base_bytes.append(raw);off+=len(raw)
h=json.dumps(base_index,separators=(',',':')).encode();base=struct.pack('<I',len(h))+h+b''.join(base_bytes)
# Base contains independently gzipped cell packets; its outer container need not
# be inflated into a second full-size overview array.
manifest['base']=write('overview',(base,{'triangles':sum(x['triangles']for x in base_index),'gpuBytes':sum(x['gpuBytes']for x in base_index),'decodedBytes':sum(x['decodedBytes']for x in base_index),'draws':sum(x['draws']for x in base_index),'bounds':json.loads((ROOT/'output/3ds_validation.json').read_text())['box_min']+json.loads((ROOT/'output/3ds_validation.json').read_text())['box_max']}))
for p in OUT.iterdir():
 if p.suffix in ['.bin','.js']and p.name not in path_names:p.unlink()
(OUT/'manifest.json').write_text(json.dumps(manifest,separators=(',',':'))+'\n')
report={'sourceSha256':manifest['sourceSha256'],'originalTriangles':input_tri,'originalObjects':len(layers),'regions':len(manifest['tiles']),'instancedParts':all_instances,'geometryTemplates':len(templates),'overview':manifest['base'],'allRegionalTransferBytes':sum(t['transferBytes']for t in manifest['tiles']),'preservesCAD':True,'overviewApproximation':'Position-only error-bounded simplification; 20-face tree crowns at unchanged source positions. Near regions retain source building triangles and repeated facade geometry; no CAD edits.'}
(ROOT/'output/streaming_model_report.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['regions','instancedParts','geometryTemplates','allRegionalTransferBytes']},indent=2));print('Overview:',manifest['base'],flush=True)
