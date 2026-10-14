/** Lossless 3DS geometry codecs + gzip. Original CAD deliverables are never rewritten. */
import {readFileSync,writeFileSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {MeshoptEncoder as Encoder} from './vendor/meshopt_encoder.js';
import {restoreCampusBytes} from './campus_codec.js';
const root=new URL('../',import.meta.url),pkg=JSON.parse(readFileSync(new URL('package.json',root),'utf8'));
const name={'uchicago-hydepark-model':'UChicago_HydePark','umich-ann-arbor-model':'UMich_AnnArbor','uw-seattle-model':'UW_Seattle'}[pkg.name];
const source=readFileSync(new URL(`output/${name}.3ds`,root)),dv=new DataView(source.buffer,source.byteOffset,source.byteLength),ranges=[];
const hash=b=>createHash('sha256').update(b).digest('hex');
function walk(start,end){
  for(let p=start;p<end;){
    const id=dv.getUint16(p,true),size=dv.getUint32(p+2,true),stop=p+size;
    if(size<6||stop>end)throw Error('Invalid source 3DS chunks');
    if([0x4d4d,0x3d3d,0x4100].includes(id))walk(p+6,stop);
    else if(id===0x4000){let next=p+6;while(next<stop&&source[next++]);walk(next,stop);}
    else if(id===0x4110||id===0x4120){const count=dv.getUint16(p+6,true),offset=p+8,length=count*(id===0x4110?12:8);if(offset+length>stop)throw Error('Invalid geometry');ranges.push({offset,length,count,kind:id===0x4110?1:2});}
    p=stop;
  }
}
await Encoder.ready;walk(0,source.length);ranges.sort((a,b)=>a.offset-b.offset);
const segments=[],chunks=[];let pos=0;
function add(kind,count,original,packed){segments.push([kind,count,original,packed.length]);chunks.push(packed);}
for(const item of ranges){
  if(item.offset<pos)throw Error('Overlapping source ranges');
  if(item.offset>pos)add(0,0,item.offset-pos,source.subarray(pos,item.offset));
  const raw=source.subarray(item.offset,item.offset+item.length);
  if(item.kind===1)add(1,item.count,item.length,Encoder.encodeVertexBuffer(raw,item.count,12));
  else {
    const indices=new Uint16Array(item.count*3),flags=new Uint16Array(item.count);
    for(let i=0;i<item.count;i++){for(let k=0;k<3;k++)indices[i*3+k]=dv.getUint16(item.offset+i*8+k*2,true);flags[i]=dv.getUint16(item.offset+i*8+6,true);}
    const encoded=Encoder.encodeIndexSequence(new Uint8Array(indices.buffer),indices.length,2),head=Buffer.alloc(4);head.writeUInt32LE(encoded.length);
    add(2,item.count,item.length,Buffer.concat([head,encoded,new Uint8Array(flags.buffer)]));
  }
  pos=item.offset+item.length;
}
if(pos<source.length)add(0,0,source.length-pos,source.subarray(pos));
const header=Buffer.from(JSON.stringify(segments)),prefix=Buffer.alloc(16);prefix.write('CMP3DS01');prefix.writeUInt32LE(source.length,8);prefix.writeUInt32LE(header.length,12);
const packed=Buffer.concat([prefix,header,...chunks]),compressed=gzipSync(packed,{level:9});
const signature=createHash('sha256').update(source);for(const path of ['scripts/pack_web_model.mjs','scripts/vendor/meshopt_encoder.js','scripts/campus_codec.js'])signature.update(readFileSync(new URL(path,root)));
const report={buildSignature:signature.digest('hex'),format:'campus-3ds-v1',codec:'meshoptimizer 1.3.0 lossless vertex/index-sequence codecs + gzip',source:`output/${name}.3ds`,sourceBytes:source.length,sourceSha256:hash(source),ordinaryGzipBytes:gzipSync(source,{level:6}).length,previousTransferBytes:pkg.name==='uchicago-hydepark-model'?source.length:gzipSync(source,{level:6}).length,packedBytes:packed.length,transferBytes:compressed.length,transferSha256:hash(compressed),maxEncodedBlockBytes:Math.max(...segments.map(s=>s[3])),decodedGeometryChanged:false};
const restored=await restoreCampusBytes(compressed,{modelFormat:report.format,modelByteLength:source.length,modelPackedByteLength:packed.length},()=>{},async()=>{});
if(hash(restored)!==hash(source))throw Error('Lossless round trip failed');
writeFileSync(new URL('assets/campus-model.bin',root),compressed);writeFileSync(new URL('output/web_model_report.json',root),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({model:name,previousMB:(report.previousTransferBytes/1e6).toFixed(2),newMB:(compressed.length/1e6).toFixed(2),savedPercent:(100*(1-compressed.length/report.previousTransferBytes)).toFixed(1),roundTrip:'exact source SHA-256'}));
