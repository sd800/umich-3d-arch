import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {Worker} from 'node:worker_threads';
import {decodeGLB,readGLB} from './glb_model.js';
import {loadModelBytes} from './model_data.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
const root=new URL('../',import.meta.url),read=p=>readFileSync(new URL(p,root)),json=p=>JSON.parse(read(p)),hash=b=>createHash('sha256').update(b).digest('hex'),data=JSON.parse(read('index.html').toString().match(/<script id="campus-data"[^>]*>(.*?)<\/script>/s)[1]);
const report=json('output/web_model_report.json'),plain=read(report.source),packed=read('assets/campus-model.glb.gz');assert.equal(hash(plain),report.sourceSha256);assert.equal(hash(packed),report.transferSha256);assert.equal(data.modelFormat,'glb-meshopt-v1');
const source=await decodeGLB(plain),decoded=await decodeGLB(gunzipSync(packed));assert.equal(source.doc.meshes.length,decoded.doc.meshes.length);
for(let i=0;i<source.doc.accessors.length;i++){const a=source.accessor(i),b=decoded.accessor(i);assert.equal(hash(a.array),hash(b.array));assert.equal(a.itemSize,b.itemSize);}
assert.equal(source.doc.nodes[0].rotation[0],-Math.sqrt(.5));assert.equal(source.doc.asset.extras.units,'meters');assert.ok(!source.doc.extensionsRequired?.length,'Download GLB should need no extensions');
const local=read('assets/model-local.js').toString(),encoded=JSON.parse(local.slice(local.indexOf('=')+1,-2).replace(/\\\n/g,''));
assert.equal(hash(await loadModelBytes({...data,model:encoded})),hash(packed));let requested;
assert.equal(hash(await loadModelBytes(data,{protocol:'https:',fetch:async url=>{requested=url;return{ok:true,arrayBuffer:async()=>packed.buffer.slice(packed.byteOffset,packed.byteOffset+packed.length)}}})),hash(packed));assert.equal(requested,data.modelUrl);
await assert.rejects(loadModelBytes(data,{protocol:'https:',fetch:async()=>({ok:false,status:404})}),/HTTP 404/);
assert.deepEqual(data.downloads.map(i=>i.format),['3DM','FBX','GLB']);for(const item of data.downloads){const b=read(item.url);assert.ok(b.length>100&&b.length<100*1048576,item.url);}
const prefix={'uchicago-hydepark-model':'UChicago','umich-ann-arbor-model':'UMich','uw-seattle-model':'UW','ucsb-campus-model':'UCSB'}[json('package.json').name];const inline=JSON.parse(read('output/'+prefix+'_Campus_Offline.html').toString().match(/<script id="campus-data"[^>]*>(.*?)<\/script>/s)[1]);
assert.deepEqual(inline.downloads.map(i=>i.format),['3DM','FBX','GLB']);for(const item of inline.downloads)assert.ok(existsSync(new URL('output/'+item.url,root)));
if(inline.model)assert.equal(hash(await loadModelBytes(inline)),hash(packed));
if(data.regions){
 const manifest=data.regions;assert.equal(manifest.format,'campus-glb-regions-v1');assert.equal(manifest.sourceSha256,hash(plain));
 for(const asset of [manifest.base,...manifest.tiles]){const b=read(asset.url);assert.equal(b.length,asset.transferBytes);assert.equal(hash(b),asset.sha256);assert.equal(hash(Buffer.from(inline.inlineRegions[asset.id],'base64')),asset.sha256);}
 if(data.campusModel){const bytes=read(data.campusModel.modelUrl);assert.equal(readGLB(gunzipSync(bytes)).doc.asset.version,'2.0');const p=await decodeGLB(gunzipSync(bytes));assert.ok(p.doc.meshes.length>500);assert.equal(hash(await loadModelBytes(inline.campusModel)),hash(bytes));}
}else{
 // Independent standard loader verifies the public, extension-free download.
 const loaded=await new GLTFLoader().parseAsync(plain.buffer.slice(plain.byteOffset,plain.byteOffset+plain.length),'');let meshes=0,triangles=0;loaded.scene.traverse(m=>{if(m.isMesh){meshes++;triangles+=m.geometry.index.count/3;}});assert.equal(meshes,source.doc.meshes.length);assert.equal(triangles,json('output/exchange_model_report.json').triangles);
 // Real worker, transferred input and cooperative UI fallback share the reader.
 const bundle=read('tmp/model-worker.bundle.txt').toString(),worker=new Worker(`const {parentPort}=require('node:worker_threads');global.self={postMessage:(data,transfers)=>parentPort.postMessage(data,transfers)};parentPort.on('message',data=>self.onmessage({data}));\n${bundle}`,{eval:true});
 try{const input=Uint8Array.from(packed);const result=await new Promise((resolve,reject)=>{worker.on('message',r=>{if(r.type==='error')reject(Error(r.message));else if(r.type==='result')resolve(r)});worker.on('error',reject);worker.postMessage({bytes:input.buffer,options:data},[input.buffer]);assert.equal(input.byteLength,0);});assert.equal(result.meshes.length,meshes);assert.equal(result.meshes.reduce((n,m)=>n+m.index.length/3,0),triangles);}finally{await worker.terminate();}
}
await assert.rejects(decodeGLB(new Uint8Array(32)),/Invalid GLB/);
console.log('GLB passed: lossless attributes, standard coordinates, material/object metadata, HTTP/local/offline bytes, ordered model downloads and applicable worker/standard-loader checks.');
