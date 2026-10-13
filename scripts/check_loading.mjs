import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {Worker} from 'node:worker_threads';
import {loadModelBytes} from './model_data.js';
import {loadingPercent} from './loading.js';
import {CampusTDSLoader} from './campus_tds_loader.js';
const validation=JSON.parse(readFileSync(new URL('../output/3DS导入校验.json',import.meta.url),'utf8'));
const filename=['UMich_AnnArbor','UChicago_HydePark','XJTU_InnovationHarbour'].find(name=>{try{return readFileSync(new URL(`../output/${name}.3ds`,import.meta.url)).length>0;}catch{return false;}});
const expected=readFileSync(new URL(`../output/${filename}.3ds`,import.meta.url));
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
let events=[];const compressed=gzipSync(expected),input=new Uint8Array(compressed);
const stream=new ReadableStream({start(controller){for(let i=0;i<input.length;i+=1000000)controller.enqueue(input.slice(i,i+1000000));controller.close();}});
const bytes=await loadModelBytes({modelUrl:'model.gz',compression:'gzip',modelByteLength:expected.length},{protocol:'https:',pause:async()=>{},fetch:async()=>({ok:true,headers:{get:()=>String(input.length)},body:stream})},event=>events.push(event));
assert.equal(digest(bytes),digest(expected));
for(const phase of ['read','unpack']){const reports=events.filter(e=>e.phase===phase&&e.total>0&&Number.isFinite(e.loaded));assert.ok(reports.length>1);let last=0;for(const e of reports){assert.ok(e.loaded>=last&&e.loaded<=e.total);last=e.loaded;}assert.equal(reports.at(-1).loaded,reports.at(-1).total);}
assert.equal(loadingPercent({phase:'local'}),null);assert.equal(loadingPercent({phase:'parse',loaded:50,total:100}),70);assert.equal(loadingPercent({phase:'ready',loaded:1,total:1}),100);
const unknown=await loadModelBytes({modelUrl:'raw.3ds'},{protocol:'https:',pause:async()=>{},fetch:async()=>({ok:true,body:new ReadableStream({start(c){c.enqueue(expected);c.close();}})})},event=>{if(event.phase==='read'&&event.total===undefined)assert.equal(loadingPercent(event),null);});assert.equal(digest(unknown),digest(expected));
const bundle=readFileSync(new URL('../tmp/model-worker.bundle.txt',import.meta.url),'utf8');
const source=`const {parentPort}=require('node:worker_threads');global.self={postMessage:(data,transfers)=>parentPort.postMessage(data,transfers)};parentPort.on('message',data=>self.onmessage({data}));\n${bundle}`;
const worker=new Worker(source,{eval:true});let progress=0;const result=await new Promise((resolve,reject)=>{worker.on('message',data=>{if(data.type==='progress'){assert.ok(data.loaded>=progress&&data.loaded<=data.total);progress=data.loaded;}else if(data.type==='result')resolve(data);else reject(new Error(data.message));});worker.on('error',reject);const copy=expected.buffer.slice(expected.byteOffset,expected.byteOffset+expected.byteLength);worker.postMessage(copy,[copy]);});await worker.terminate();
const original=new CampusTDSLoader().parse(expected.buffer.slice(expected.byteOffset,expected.byteOffset+expected.byteLength),'');const meshes=[];original.traverse(m=>{if(m.isMesh)meshes.push(m);});assert.equal(result.meshes.length,validation.objects);assert.equal(meshes.length,result.meshes.length);
let triangles=0;
for(let i=0;i<meshes.length;i++){const a=meshes[i],b=result.meshes[i];assert.equal(a.name,b.name);assert.equal(digest(a.geometry.attributes.position.array),digest(b.attributes.position.array));assert.equal(digest(a.geometry.index.array),digest(b.index));assert.deepEqual(a.geometry.groups,b.groups);triangles+=b.index.length/3;}
assert.equal(triangles,validation.triangles);assert.ok(progress>0);
console.log(`Loading passed: streamed byte/decompression progress, unknown lengths, SHA-256 integrity, worker parse progress and ${result.meshes.length} exact meshes / ${triangles} triangles.`);
