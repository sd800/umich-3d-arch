import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {inflateSync} from 'node:zlib';
import {FBXLoader} from 'three/addons/loaders/FBXLoader.js';
import {decodeGLB} from './glb_model.js';
const read=p=>readFileSync(new URL('../'+p,import.meta.url)),report=JSON.parse(read('output/exchange_model_report.json')),bytes=read('output/'+report.name+'.fbx'),glb=await decodeGLB(read('output/'+report.name+'.glb'));
assert.equal(bytes.subarray(0,23).toString(),'Kaydara FBX Binary  \0\x1a\0');assert.equal(bytes.readUInt32LE(23),7400);
function node(at){
 const end=bytes.readUInt32LE(at),count=bytes.readUInt32LE(at+4),length=bytes.readUInt32LE(at+8),n=bytes[at+12],name=bytes.subarray(at+13,at+13+n).toString();let pos=at+13+n;const values=[];
 assert.ok(end<=bytes.length&&end>at);
 for(let i=0;i<count;i++){
  const type=String.fromCharCode(bytes[pos++]);let v;
  if(type==='S'||type==='R'){const n=bytes.readUInt32LE(pos);pos+=4;v=bytes.subarray(pos,pos+n);pos+=n;if(type==='S')v=v.toString();}
  else if(type==='L'){v=Number(bytes.readBigInt64LE(pos));pos+=8;}
  else if(type==='D'){v=bytes.readDoubleLE(pos);pos+=8;}
  else if('dif'.includes(type)){const count=bytes.readUInt32LE(pos),encoding=bytes.readUInt32LE(pos+4),n=bytes.readUInt32LE(pos+8);pos+=12;const raw=bytes.subarray(pos,pos+n);pos+=n;v={type,count,raw,encoding};}
  else throw Error('Unknown FBX property '+type);
  values.push(v);
 }
 assert.equal(pos,at+13+n+length);const children=[];
 while(pos+13<=end&&bytes.readUInt32LE(pos)!==0){const c=node(pos);children.push(c);pos=c.end;}
 return {name,values,children,end};
}
const roots=[];for(let p=27;p+13<bytes.length&&bytes.readUInt32LE(p);){const n=node(p);roots.push(n);p=n.end;}
const child=(n,k)=>n.children.find(c=>c.name===k),setting=roots.find(n=>n.name==='GlobalSettings');assert.equal(child(setting,'Properties70').children.find(n=>n.values[0]==='UpAxis').values.at(-1),2);assert.equal(child(setting,'Properties70').children.find(n=>n.values[0]==='UnitScaleFactor').values.at(-1),100);
function array(n){const p=n.values[0],raw=p.encoding?inflateSync(p.raw):p.raw,Type={d:Float64Array,i:Int32Array,f:Float32Array}[p.type];assert.equal(raw.length,p.count*Type.BYTES_PER_ELEMENT);return new Type(raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.length));}
const glbNodes=new Map(glb.doc.nodes.filter(n=>n.mesh!==undefined).map(n=>[n.name,n]));let meshes=0,triangles=0;
for(const n of roots.find(n=>n.name==='Objects').children){if(n.name!=='Geometry')continue;const name=n.values[1].split('\0')[0],source=glbNodes.get(name);assert.ok(source,name);const primitive=glb.doc.meshes[source.mesh].primitives[0],v=array(child(n,'Vertices')),f=array(child(n,'PolygonVertexIndex')),expected=glb.accessor(primitive.attributes.POSITION).array,index=glb.accessor(primitive.indices).array;assert.equal(v.length,expected.length);assert.equal(f.length,index.length);
 for(let i=0;i<v.length;i++)assert.equal(v[i],expected[i]);for(let i=0;i<f.length;i++)assert.equal(i%3===2?-f[i]-1:f[i],index[i]);const normals=array(child(child(n,'LayerElementNormal'),'Normals'));const mapping=child(child(n,'LayerElementNormal'),'MappingInformationType').values[0];assert.ok(['ByPolygon','ByPolygonVertex'].includes(mapping));assert.equal(normals.length,mapping==='ByPolygon'?f.length:f.length*3);for(let i=0;i<normals.length;i+=3)assert.ok(Math.abs(Math.hypot(normals[i],normals[i+1],normals[i+2])-1)<.000002||normals[i]===0&&normals[i+1]===0&&normals[i+2]===0);meshes++;triangles+=f.length/3;
}
assert.equal(meshes,report.meshCount);assert.equal(triangles,report.triangles);
if(report.name==='UChicago_HydePark'){
 const scene=new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.length),'');let count=0,faces=0;scene.traverse(m=>{if(m.isMesh){count++;faces+=m.geometry.attributes.position.count/3;assert.ok(m.material);}});assert.equal(count,meshes);assert.equal(faces,triangles);
}
console.log(`FBX passed: ${meshes} mesh objects, ${triangles} triangles; every coordinate/index matches GLB, metric Z-up settings and valid face normals${report.name==='UChicago_HydePark'?'; independent Three FBXLoader import':''}.`);
