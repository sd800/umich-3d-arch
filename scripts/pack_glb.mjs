/** Lossless EXT_meshopt_compression. Plain download GLB remains extension-free. */
import {readFileSync,writeFileSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {MeshoptEncoder as Encoder} from './vendor/meshopt_encoder.js';
const hash=b=>createHash('sha256').update(b).digest('hex');
export function unpackGLB(b){if(b.readUInt32LE(0)!==0x46546c67||b.readUInt32LE(4)!==2||b.readUInt32LE(8)!==b.length)throw Error('Invalid GLB');const n=b.readUInt32LE(12);return {doc:JSON.parse(b.subarray(20,20+n)),binary:b.subarray(28+n)};}
export function packGLB(doc,binary){let j=Buffer.from(JSON.stringify(doc)),n=(4-j.length%4)%4;j=Buffer.concat([j,Buffer.alloc(n,32)]);binary=Buffer.concat([binary,Buffer.alloc((4-binary.length%4)%4)]);const h=Buffer.alloc(20);h.writeUInt32LE(0x46546c67);h.writeUInt32LE(2,4);h.writeUInt32LE(28+j.length+binary.length,8);h.writeUInt32LE(j.length,12);h.writeUInt32LE(0x4e4f534a,16);const bh=Buffer.alloc(8);bh.writeUInt32LE(binary.length);bh.writeUInt32LE(0x004e4942,4);return Buffer.concat([h,j,bh,binary]);}
export async function compressGLB(source){
 await Encoder.ready;const {doc,binary}=unpackGLB(source),parts=[];let size=0,fallback=0,blocks=0;const accessorOf=new Map(doc.accessors.map(a=>[a.bufferView,a]));
 function append(b){const padding=(4-size%4)%4;if(padding){parts.push(Buffer.alloc(padding));size+=padding;}const offset=size;parts.push(b);size+=b.length;return offset;}
 for(let i=0;i<doc.bufferViews.length;i++){
  const view=doc.bufferViews[i],raw=binary.subarray(view.byteOffset||0,(view.byteOffset||0)+view.byteLength),a=accessorOf.get(i);let stride,mode,count,encoded;
  if(a&&a.type==='SCALAR'&&view.target===34963){stride=a.componentType===5123?2:4;mode='INDICES';count=a.count;encoded=Encoder.encodeIndexSequence(raw,count,stride);}
  else if(a){stride=view.byteStride||({5126:4,5125:4,5123:2,5122:2,5121:1,5120:1}[a.componentType])*({SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16}[a.type]);count=a.count;if(stride%4===0&&stride<=256&&raw.length===count*stride){mode='ATTRIBUTES';encoded=Encoder.encodeVertexBuffer(raw,count,stride);}}
  if(encoded){const offset=append(Buffer.from(encoded));view.buffer=1;view.byteOffset=fallback;fallback+=view.byteLength;fallback=(fallback+3)&~3;view.extensions={...view.extensions,EXT_meshopt_compression:{buffer:0,byteOffset:offset,byteLength:encoded.length,byteStride:stride,count,mode}};blocks++;}
  else{view.buffer=0;view.byteOffset=append(raw);}
 }
 doc.extensionsUsed=[...new Set([...(doc.extensionsUsed||[]),'EXT_meshopt_compression'])];doc.extensionsRequired=[...new Set([...(doc.extensionsRequired||[]),'EXT_meshopt_compression'])];
 doc.buffers=[{byteLength:size},{byteLength:fallback,extensions:{EXT_meshopt_compression:{fallback:true}}}];return {bytes:packGLB(doc,Buffer.concat(parts)),blocks};
}
if(process.argv[1]&&import.meta.url===new URL('file://'+process.argv[1]).href){
 const root=new URL('../',import.meta.url),pkg=JSON.parse(readFileSync(new URL('package.json',root)));const name={'uchicago-hydepark-model':'UChicago_HydePark','umich-ann-arbor-model':'UMich_AnnArbor','uw-seattle-model':'UW_Seattle','ucsb-campus-model':'UCSB_MainCampus'}[pkg.name];
 const source=readFileSync(new URL(`output/${name}.glb`,root)),packed=await compressGLB(source),compressed=gzipSync(packed.bytes,{level:9});
 writeFileSync(new URL('assets/campus-model.glb.gz',root),compressed);const report={format:'glb-meshopt-v1',codec:'glTF 2.0 + EXT_meshopt_compression (lossless) + gzip',source:`output/${name}.glb`,sourceBytes:source.length,sourceSha256:hash(source),packedBytes:packed.bytes.length,transferBytes:compressed.length,transferSha256:hash(compressed),compressedViews:packed.blocks,geometryChanged:false};writeFileSync(new URL('output/web_model_report.json',root),JSON.stringify(report,null,2)+'\n');console.log(report);
}
