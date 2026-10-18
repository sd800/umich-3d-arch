"""Portable GLB 2.0 and binary FBX 7.4 from the same metric construction meshes.

Download GLB has no required extensions. The browser's compressed derivative is
built separately; Rhino native solids and all construction sources are retained.
"""
from pathlib import Path
import json,struct,zlib,hashlib,math
import numpy as np

def read_legacy_meshes(path):
    """One-time compatibility import; new source builds call export_scene directly."""
    blob=Path(path).read_bytes()
    def chunks(a,z):
        while a+6<=z:
            tag,n=struct.unpack_from('<HI',blob,a)
            if n<6 or a+n>z:raise ValueError('Invalid legacy chunk')
            yield tag,a,a+n;a+=n
    for tag,a,z in chunks(6,len(blob)):
        if tag!=0x3d3d:continue
        for tag,c,d in chunks(a+6,z):
            if tag!=0x4000:continue
            end=blob.index(0,c+6);name=blob[c+6:end].decode('ascii');v=f=None
            for tag,e,h in chunks(end+1,d):
                if tag!=0x4100:continue
                for tag,j,k in chunks(e+6,h):
                    if tag==0x4110:
                        n=struct.unpack_from('<H',blob,j+6)[0];v=np.frombuffer(blob,dtype='<f4',count=n*3,offset=j+8).reshape(-1,3)
                    if tag==0x4120:
                        n=struct.unpack_from('<H',blob,j+6)[0];f=np.frombuffer(blob,dtype='<u2',count=n*4,offset=j+8).reshape(-1,4)[:,:3]
            if v is not None and f is not None:yield name,v,f

def scene_name(root):
    return {'uchicago-hydepark-model':'UChicago_HydePark','umich-ann-arbor-model':'UMich_AnnArbor','uw-seattle-model':'UW_Seattle','ucsb-campus-model':'UCSB_MainCampus'}[json.loads((Path(root)/'package.json').read_text())['name']]

def linear(c):
    return [float(v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4)for v in np.asarray(c)/255]

class GLB:
    def __init__(self,palette):
        self.json={'asset':{'version':'2.0','generator':'Campus metric construction exporter','extras':{'units':'meters','sourceUp':'Z'}},'scene':0,'scenes':[{'nodes':[0]}],'nodes':[{'name':'Campus metric origin','rotation':[-math.sqrt(.5),0,0,math.sqrt(.5)],'children':[]}],'meshes':[],'materials':[],'accessors':[],'bufferViews':[],'buffers':[]}
        self.parts=[];self.size=0;self.palette=palette;self.materials={}
    def accessor(self,array,kind,component,bounds=False,target=None,normalized=False):
        arr=np.ascontiguousarray(array);count=int(arr.size/{'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}[kind]);row_bytes=arr.nbytes//max(count,1);stride=(row_bytes+3)&~3;packed=None
        if target==34962 and stride!=row_bytes:
            packed=np.zeros((count,stride),dtype='u1');packed[:,:row_bytes]=arr.view('u1').reshape(count,row_bytes)
        padding=(-self.size)%4
        if padding:self.parts.append(bytes(padding));self.size+=padding
        view={'buffer':0,'byteOffset':self.size,'byteLength':packed.nbytes if packed is not None else arr.nbytes}
        if packed is not None:view['byteStride']=stride
        if target:view['target']=target
        raw=packed.tobytes() if packed is not None else arr.tobytes();self.parts.append(raw);self.size+=len(raw);vi=len(self.json['bufferViews']);self.json['bufferViews'].append(view)
        width={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}[kind]
        a={'bufferView':vi,'componentType':component,'count':count,'type':kind}
        if normalized:a['normalized']=True
        if bounds:a.update(min=arr.reshape(-1,width).min(axis=0).tolist(),max=arr.reshape(-1,width).max(axis=0).tolist())
        self.json['accessors'].append(a);return len(self.json['accessors'])-1
    def material(self,name):
        if name not in self.materials:
            co=self.palette.get(name,[160,160,150]);self.materials[name]=len(self.json['materials']);self.json['materials'].append({'name':name,'pbrMetallicRoughness':{'baseColorFactor':[*linear(co),1],'metallicFactor':0,'roughnessFactor':.5 if 'Glass'in name else 1},'extras':{'sourceColorSRGB':list(co)}})
        return self.materials[name]
    def mesh(self,name,v,f,mat,extras=None,parent=0,attributes=None,extensions=None):
        v=np.asarray(v,dtype='<f4');f=np.asarray(f,dtype='<u2' if np.max(f)<65536 else '<u4')
        p={'attributes':{'POSITION':self.accessor(v,'VEC3',5126,True,34962),**(attributes or {})},'indices':self.accessor(f,'SCALAR',5123 if f.dtype.itemsize==2 else 5125,target=34963),'material':self.material(mat)}
        mi=len(self.json['meshes']);self.json['meshes'].append({'name':name,'primitives':[p]})
        ni=len(self.json['nodes']);node={'name':name,'mesh':mi}
        if extras:node['extras']=extras
        if extensions:node['extensions']=extensions
        self.json['nodes'].append(node);self.json['nodes'][parent].setdefault('children',[]).append(ni);return ni
    def bytes(self):
        b=b''.join(self.parts);self.json['buffers']=[{'byteLength':len(b)}]
        return pack_glb(self.json,b)

def pack_glb(doc,binary):
    j=json.dumps(doc,ensure_ascii=False,separators=(',',':')).encode();j+=b' '*((-len(j))%4);binary+=bytes((-len(binary))%4)
    return struct.pack('<III',0x46546c67,2,28+len(j)+len(binary))+struct.pack('<II',len(j),0x4e4f534a)+j+struct.pack('<II',len(binary),0x004e4942)+binary

def unpack_glb(path):
    b=Path(path).read_bytes();magic,version,total=struct.unpack_from('<III',b);assert magic==0x46546c67 and version==2 and total==len(b)
    n=struct.unpack_from('<I',b,12)[0];return json.loads(b[20:20+n]),memoryview(b)[28+n:]

def iter_glb_meshes(path):
    doc,binary=unpack_glb(path)
    def read(i):
        a=doc['accessors'][i];bv=doc['bufferViews'][a['bufferView']];dtype={5126:'<f4',5125:'<u4',5123:'<u2'}[a['componentType']];width={'VEC3':3,'SCALAR':1}[a['type']]
        return np.frombuffer(binary,dtype=dtype,count=a['count']*width,offset=bv.get('byteOffset',0)+a.get('byteOffset',0)).reshape(-1,width)
    for node in doc['nodes']:
        if 'mesh'not in node:continue
        p=doc['meshes'][node['mesh']]['primitives'][0]
        yield node.get('extras',{}).get('sourceObject',node['name']),read(p['attributes']['POSITION']),read(p['indices']).reshape(-1,3)

# Small binary FBX writer. Each array is zlib-compressed independently; no
# textures or external references are needed for this vertex/material model.
FBX_ARRAY_COMPRESS=True
def prop(value):
    if isinstance(value,np.ndarray):
        a=np.ascontiguousarray(value);code={np.dtype('<f8'):b'd',np.dtype('<i4'):b'i',np.dtype('<f4'):b'f'}[a.dtype];raw=zlib.compress(a.tobytes(),6)if FBX_ARRAY_COMPRESS else a.tobytes()
        return code+struct.pack('<III',a.size,int(FBX_ARRAY_COMPRESS),len(raw))+raw
    if isinstance(value,str):
        b=value.encode();return b'S'+struct.pack('<I',len(b))+b
    if isinstance(value,float):return b'D'+struct.pack('<d',value)
    if isinstance(value,int):return b'L'+struct.pack('<q',value)
    if isinstance(value,bytes):return b'R'+struct.pack('<I',len(value))+value
    raise TypeError(type(value))
def node(name,*properties,children=()):return(name,list(properties),list(children))
def encode_node(n,start):
    name,properties,children=n;name=name.encode();p=b''.join(prop(x)for x in properties);cursor=start+13+len(name)+len(p);encoded=[]
    for child in children:
        b=encode_node(child,cursor);encoded.append(b);cursor+=len(b)
    if children:encoded.append(bytes(13));cursor+=13
    return struct.pack('<IIIB',cursor,len(properties),len(p),len(name))+name+p+b''.join(encoded)
def p70(name,kind,*values):return node('P',name,kind,'','A',*values)
def write_fbx(path,meshes,palette,layers):
    global FBX_ARRAY_COMPRESS
    FBX_ARRAY_COMPRESS='UMich'not in str(path)
    objects=[];connections=[];ids={};nextid=100000
    def allocate():
        nonlocal nextid
        nextid+=1;return nextid
    matids={}
    for name,co in palette.items():
        ident=allocate();matids[name]=ident
        objects.append(node('Material',ident,name+'\x00\x01Material','',children=[node('Version',102),node('ShadingModel','phong'),node('MultiLayer',0),node('Properties70',children=[p70('DiffuseColor','Color',*[float(c/255)for c in co]),p70('DiffuseFactor','Number',1.),p70('SpecularColor','Color',0.,0.,0.),p70('Shininess','Number',0.)])]))
    for name,v,f in meshes:
        meta=layers[name];layer=meta['layer']
        if layer not in ids:
            pid=allocate();ids[layer]=pid;objects.append(node('Model',pid,layer+'\x00\x01Model','Null',children=[node('Version',232),node('Properties70')]));connections.append(node('C','OO',pid,0))
        gid,mid=allocate(),allocate();ff=np.asarray(f,dtype='<i4').copy();ff[:,-1]=-ff[:,-1]-1
        tri=np.asarray(v)[f];norm=np.cross(tri[:,1]-tri[:,0],tri[:,2]-tri[:,0]);norm/=np.maximum(np.linalg.norm(norm,axis=1)[:,None],1e-20)
        normal=np.round(norm,6).astype('<f8')
        objects.append(node('Geometry',gid,name+'\x00\x01Geometry','Mesh',children=[node('GeometryVersion',124),node('Vertices',np.asarray(v,dtype='<f8').reshape(-1)),node('PolygonVertexIndex',ff.reshape(-1)),node('LayerElementNormal',0,children=[node('Version',101),node('Name',''),node('MappingInformationType','ByPolygon'),node('ReferenceInformationType','Direct'),node('Normals',normal.reshape(-1))]),node('LayerElementMaterial',0,children=[node('Version',101),node('Name',''),node('MappingInformationType','AllSame'),node('ReferenceInformationType','IndexToDirect'),node('Materials',np.array([0],dtype='<i4'))]),node('Layer',0,children=[node('Version',100),node('LayerElement',children=[node('Type','LayerElementNormal'),node('TypedIndex',0)]),node('LayerElement',children=[node('Type','LayerElementMaterial'),node('TypedIndex',0)])])]))
        objects.append(node('Model',mid,name+'\x00\x01Model','Mesh',children=[node('Version',232),node('Properties70'),node('Shading',True),node('Culling','CullingOff')]))
        connections.extend([node('C','OO',gid,mid),node('C','OO',matids[meta['material']],mid),node('C','OO',mid,ids[layer])])
    headers=[node('FBXHeaderExtension',children=[node('FBXHeaderVersion',1003),node('FBXVersion',7400),node('Creator','Campus metric construction exporter')]),node('GlobalSettings',children=[node('Version',1000),node('Properties70',children=[p70('UpAxis','int',2),p70('UpAxisSign','int',1),p70('FrontAxis','int',1),p70('FrontAxisSign','int',-1),p70('CoordAxis','int',0),p70('CoordAxisSign','int',1),p70('OriginalUpAxis','int',2),p70('OriginalUpAxisSign','int',1),p70('UnitScaleFactor','double',100.),p70('OriginalUnitScaleFactor','double',100.)])]),node('Documents',children=[node('Count',1),node('Document',1,'Scene','Scene',children=[node('Properties70'),node('RootNode',0)])]),node('Definitions',children=[node('Version',100),node('Count',len(objects))]),node('Objects',children=objects),node('Connections',children=connections)]
    header=b'Kaydara FBX Binary  \x00\x1a\x00'+struct.pack('<I',7400);parts=[header];cursor=len(header)
    for n in headers:b=encode_node(n,cursor);parts.append(b);cursor+=len(b)
    parts.append(bytes(13));Path(path).write_bytes(b''.join(parts))

def export_scene(root,objects,palette,layers,records=()):
    root=Path(root);name=scene_name(root);bylayer={r['layer']:r for r in records};g=GLB(palette);parents={};meshes=[]
    for o in objects:
        mesh=o['mesh'];v=np.asarray(mesh.vertices,dtype='<f4');f=np.asarray(mesh.faces,dtype='<u4');nm=o['name'];meta=layers[nm];lay=meta['layer'];r=bylayer.get(lay,{})
        if lay not in parents:
            parents[lay]=len(g.json['nodes']);g.json['nodes'].append({'name':r.get('name',lay),'extras':{'layer':lay,'code':r.get('code'),'neighbor':r.get('neighbor',False)},'children':[]});g.json['nodes'][0]['children'].append(parents[lay])
        g.mesh(nm,v,f,o['mat'],{**meta,'sourceObject':nm,'code':r.get('code'),'detail':'D'in nm},parents[lay]);meshes.append((nm,v,f))
    path=root/'output'/f'{name}.glb';path.write_bytes(g.bytes());write_fbx(path.with_suffix('.fbx'),meshes,palette,layers)
    report={'format':'glTF 2.0 / FBX 7.4','name':name,'meshCount':len(meshes),'triangles':sum(len(f)for _,_,f in meshes),'vertices':sum(len(v)for _,v,_ in meshes),'sourceCoordinateSystem':'meters, Z up, north +Y; GLB root maps to standard Y up','glbBytes':path.stat().st_size,'fbxBytes':path.with_suffix('.fbx').stat().st_size,'glbSha256':hashlib.sha256(path.read_bytes()).hexdigest(),'fbxSha256':hashlib.sha256(path.with_suffix('.fbx').read_bytes()).hexdigest(),'geometry':'Original construction positions rounded only to Float32 (same precision as previous mesh export); original face sequence and material assignments retained.'}
    (root/'output/exchange_model_report.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report),flush=True)

if __name__=='__main__':
    import sys
    root=Path(__file__).resolve().parents[1];name=scene_name(root);palette=json.loads((root/'output/palette.json').read_text());layers=json.loads((root/'output/layer_map.json').read_text());records=json.loads((root/'output/buildings.json').read_text())
    if(root/'output/neighboring_records.json').exists():records+=json.loads((root/'output/neighboring_records.json').read_text())
    class Mesh:
        def __init__(self,v,f):self.vertices=v;self.faces=f
    objects=[{'name':nm,'mesh':Mesh(v,f),'mat':layers[nm]['material']}for nm,v,f in read_legacy_meshes(root/'output'/f'{name}.3ds')]
    export_scene(root,objects,palette,layers,records)
