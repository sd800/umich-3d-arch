import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {Worker} from 'node:worker_threads';
import {restoreCampusBytes} from './campus_codec.js';
import {loadModelBytes} from './model_data.js';
import {CampusTDSLoader} from './campus_tds_loader.js';
import {parseTDSCooperatively} from './async_tds.js';
const report=JSON.parse(readFileSync(new URL('../output/web_model_report.json',import.meta.url),'utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
const source=readFileSync(new URL('../'+report.source,import.meta.url)),compressed=readFileSync(new URL('../assets/campus-model.bin',import.meta.url));
const options={modelFormat:report.format,modelByteLength:source.length,modelPackedByteLength:report.packedBytes};
const start=performance.now();let yields=0;
const restored=await restoreCampusBytes(compressed,options,()=>{},async()=>{yields++;});
assert.equal(hash(restored),hash(source));assert.ok(yields>0);assert.ok(report.maxEncodedBlockBytes<4*1024*1024);
const decodeMs=performance.now()-start;
// The worker receives the one compressed buffer by transfer; no expanded CAD
// buffer or second compressed copy is posted from the main thread.
const bundle=readFileSync(new URL('../tmp/model-worker.bundle.txt',import.meta.url),'utf8');
const workerSource=`const {parentPort}=require('node:worker_threads');global.self={postMessage:(data,transfers)=>parentPort.postMessage(data,transfers)};parentPort.on('message',data=>self.onmessage({data}));\n${bundle}`;
async function run(action){
 const worker=new Worker(workerSource,{eval:true}),input=Uint8Array.from(compressed),events=[];
 try{const result=await new Promise((resolve,reject)=>{worker.on('message',data=>{if(data.type==='progress')events.push(data);else if(data.type==='error')reject(Error(data.message));else resolve(data);});worker.on('error',reject);worker.postMessage({bytes:input.buffer,options,action},[input.buffer]);assert.equal(input.byteLength,0);});return {result,events};}finally{await worker.terminate();}
}
const {result,events}=await run('parse');assert.ok(events.some(e=>e.phase==='unpack'));assert.ok(events.some(e=>e.phase==='parse'));
const baseline=new CampusTDSLoader().parse(restored.buffer,'');const meshes=[];baseline.traverse(m=>{if(m.isMesh)meshes.push(m);});assert.equal(result.meshes.length,meshes.length);
for(let i=0;i<meshes.length;i++){
 const a=meshes[i],b=result.meshes[i];assert.equal(a.name,b.name);assert.equal(hash(a.geometry.attributes.position.array),hash(b.attributes.position.array));assert.equal(hash(a.geometry.attributes.normal.array),hash(b.attributes.normal.array));assert.equal(hash(a.geometry.index.array),hash(b.index));assert.deepEqual(a.geometry.groups,b.groups);
}
const nativeDownload=await run('download');assert.equal(hash(new Uint8Array(await nativeDownload.result.blob.arrayBuffer())),hash(source));
if(report.source.includes('UChicago')){
 let pauses=0;const fallback=await parseTDSCooperatively(new CampusTDSLoader(),restored,()=>{},async()=>{pauses++;});assert.ok(pauses>2);assert.equal(fallback.children.length,meshes.length);
 for(let i=0;i<meshes.length;i++){assert.equal(hash(fallback.children[i].geometry.attributes.position.array),hash(meshes[i].geometry.attributes.position.array));assert.equal(hash(fallback.children[i].geometry.index.array),hash(meshes[i].geometry.index.array));}
 const download=await run('download');assert.equal(hash(new Uint8Array(await download.result.blob.arrayBuffer())),hash(source));
 const bad=Buffer.alloc(16);bad.write('CMP3DS01');bad.writeUInt32LE(256*1024*1024,8);bad.writeUInt32LE(2,12);
 await assert.rejects(restoreCampusBytes(gzipSync(Buffer.concat([bad,Buffer.from('[]')])),{modelFormat:report.format}),/size/);
 await assert.rejects(restoreCampusBytes(gzipSync(Buffer.alloc(16)),options),/signature/);
}
console.log(`Compression passed: ${meshes.length} exact meshes (positions, normals, indices and groups); streamed lossless CAD SHA-256, bounded blocks, input transfer and worker progress. Reference decode: ${decodeMs.toFixed(0)} ms. ${report.source.includes('UChicago')?'Cooperative fallback, offline CAD download and corrupt-data guards passed.':''}`);
