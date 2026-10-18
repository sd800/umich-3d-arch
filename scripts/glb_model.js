/** Bounded reader for the exporter subset of standard glTF 2.0/GLB.
 * Source-space is retained under a standard Y-up root for other software.
 * Web parsing runs off-thread and transfers decoded geometry once.
 */
import {BufferGeometry,BufferAttribute} from 'three';
import {MeshoptDecoder} from './vendor/meshopt_decoder.mjs';
const types={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},widths={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};
const pause=()=>new Promise(resolve=>setTimeout(resolve,0));
export function readGLB(bytes){
 bytes=bytes instanceof Uint8Array?bytes:new Uint8Array(bytes);const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
 if(bytes.length<28||view.getUint32(0,true)!==0x46546c67||view.getUint32(4,true)!==2||view.getUint32(8,true)!==bytes.length)throw Error('Invalid GLB model');
 const n=view.getUint32(12,true);if(n>bytes.length-28||view.getUint32(16,true)!==0x4e4f534a||view.getUint32(24+n,true)!==0x004e4942)throw Error('Invalid GLB chunks');
 const doc=JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+n))),binary=bytes.subarray(28+n);
 if(doc.asset?.version!=='2.0'||!Array.isArray(doc.meshes))throw Error('Unsupported glTF model');
 return {doc,binary};
}
export async function decodeGLB(bytes,report=()=>{},yieldTask=pause){
 const {doc,binary}=readGLB(bytes),views=new Map();let last=performance.now();
 if(doc.extensionsRequired?.includes('EXT_meshopt_compression')){if(!MeshoptDecoder.supported)throw Error('WebAssembly is required for this compressed GLB');await MeshoptDecoder.ready;}
 for(let i=0;i<doc.bufferViews.length;i++){
  const view=doc.bufferViews[i],ext=view.extensions?.EXT_meshopt_compression;let array;
  if(ext){const size=ext.count*ext.byteStride;if(!Number.isSafeInteger(size)||size<0||size>32*1024*1024||ext.buffer!==0||ext.byteOffset+ext.byteLength>binary.length)throw Error('Invalid compressed GLB buffer');array=new Uint8Array(size);MeshoptDecoder.decodeGltfBuffer(array,ext.count,ext.byteStride,binary.subarray(ext.byteOffset,ext.byteOffset+ext.byteLength),ext.mode,ext.filter||'NONE');}
  else{const start=view.byteOffset||0;if(view.buffer!==0||start+view.byteLength>binary.length)throw Error('Invalid GLB buffer');array=binary.subarray(start,start+view.byteLength);}
  views.set(i,array);
  if(performance.now()-last>7){report({phase:'unpack',loaded:i+1,total:doc.bufferViews.length});await yieldTask();last=performance.now();}
 }
 const cache=new Map();
 function accessor(id){
  if(cache.has(id))return cache.get(id);const a=doc.accessors[id];if(!a||a.sparse)throw Error('Unsupported GLB accessor');const Type=types[a.componentType],width=widths[a.type],view=doc.bufferViews[a.bufferView],raw=views.get(a.bufferView),size=Type?.BYTES_PER_ELEMENT*width,stride=view.byteStride||size,offset=a.byteOffset||0;
  if(!Type||!width||!Number.isSafeInteger(a.count)||a.count<0||offset+(a.count-1)*stride+size>raw.byteLength)throw Error('Invalid GLB attribute');
  let array;if(stride===size&&(raw.byteOffset+offset)%Type.BYTES_PER_ELEMENT===0)array=new Type(raw.buffer,raw.byteOffset+offset,a.count*width);
  else{array=new Type(a.count*width);for(let i=0;i<a.count;i++){const from=raw.subarray(offset+i*stride,offset+i*stride+size);new Uint8Array(array.buffer,i*size,size).set(from);}}
  const result={array,itemSize:width,normalized:Boolean(a.normalized)};cache.set(id,result);return result;
 }
 return {doc,accessor};
}
export async function parseGLBMeshes(bytes,report=()=>{},yieldTask=pause){
 const {doc,accessor}=await decodeGLB(bytes,report,yieldTask);const meshes=[],materials=(doc.materials||[]).map(m=>({metadata:{version:4.6,type:'Material'},uuid:m.name,type:'MeshPhongMaterial',name:m.name,color:0xffffff,specular:0,shininess:0}));let last=performance.now();
 const identity=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];
 for(const node of doc.nodes){if(node.mesh===undefined)continue;const mesh=doc.meshes[node.mesh];if(mesh.primitives.length!==1)throw Error('Unsupported GLB primitive grouping');const p=mesh.primitives[0];if(p.mode!==undefined&&p.mode!==4)throw Error('GLB requires triangle primitives');const position=accessor(p.attributes.POSITION),index=accessor(p.indices).array;
  const attributes={position};if(p.attributes.NORMAL!==undefined)attributes.normal=accessor(p.attributes.NORMAL);else{const g=new BufferGeometry();g.setAttribute('position',new BufferAttribute(position.array,3));g.setIndex(new BufferAttribute(index,1));g.computeVertexNormals();attributes.normal={array:g.attributes.normal.array,itemSize:3,normalized:false};}
  meshes.push({name:node.extras?.sourceObject||node.name,attributes,index,groups:[],matrix:identity,materials:[p.material],multi:false});
  if(performance.now()-last>7){report({phase:'parse',loaded:meshes.length,total:doc.meshes.length});await yieldTask();last=performance.now();}
 }
 report({phase:'parse',loaded:meshes.length,total:meshes.length});if(!meshes.length)throw Error('GLB contains no geometry');return{meshes,materials};
}
export async function inflateGLB(bytes){if(new DataView(bytes.buffer,bytes.byteOffset,Math.min(bytes.byteLength,4)).getUint32(0,true)===0x46546c67)return bytes;return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());}
