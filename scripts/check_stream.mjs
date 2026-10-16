import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {chooseRegions,regionLimits} from './region_policy.js';
const root=new URL('../',import.meta.url),read=p=>readFile(new URL(p,root)),hash=b=>createHash('sha256').update(b).digest('hex');
const manifest=JSON.parse(await read('assets/stream/manifest.json'));
assert.equal(hash(await read(manifest.scope==='neighbors'?'output/UCSB_MainCampus.3ds':'output/UMich_AnnArbor.3ds')),manifest.sourceSha256);
const ids=new Set(manifest.tiles.map(t=>t.regionId));assert.equal(ids.size,manifest.tiles.length);
function packet(raw,low){
 const n=raw.readUInt32LE(0),header=JSON.parse(raw.subarray(4,4+n)),offset=4+n;
 for(const e of header.entries){
  for(const field of ['position','normal','index','feature','region','color','instances'])if(e[field]){const[a,b]=e[field];assert.ok(a>=0&&b>=0&&offset+a+b<=raw.length);}
  const count=e.position[1]/12;assert.equal(e.normal[1]/3,count);
  const f=raw.subarray(offset+e.index[0],offset+e.index[0]+e.index[1]);for(let k=0;k<f.length;k+=4)assert.ok(f.readUInt32LE(k)<count);
  if(e.feature){assert.equal(e.feature[1]/2,count);const a=offset+e.feature[0];for(let k=0;k<e.feature[1];k+=2)assert.ok(raw.readUInt16LE(a+k)<=manifest.ownerCodes.length);}
  if(e.region){assert.ok(low);assert.equal(e.region[1]/2,count);const a=offset+e.region[0];for(let k=0;k<e.region[1];k+=2)assert.ok(ids.has(raw.readUInt16LE(a+k)));}
  if(e.instances){const stride=e.instanceStride;assert.equal(e.instances[1]%(stride*4),0);const a=offset+e.instances[0];for(let k=0;k<e.instances[1];k+=stride*4){assert.ok(raw.readFloatLE(a+k+24)<=manifest.ownerCodes.length);if(low)assert.ok(ids.has(raw.readFloatLE(a+k+28)));}}
 }
}
for(const a of [manifest.base,...manifest.tiles]){const b=await read(a.url);assert.equal(b.length,a.transferBytes);assert.equal(hash(b),a.sha256);const local=(await read(a.local)).toString();const encoded=local.slice(local.indexOf('="')+2,local.lastIndexOf('"')).replace(/\\\n/g,'');assert.equal(hash(Buffer.from(encoded,'base64')),a.sha256);if(a===manifest.base){const n=b.readUInt32LE(0),directory=JSON.parse(b.subarray(4,4+n));for(const cell of directory)packet(gunzipSync(b.subarray(4+n+cell.offset,4+n+cell.offset+cell.length)),true);}else packet(gunzipSync(b),false);}
for(const mobile of [true,false]){
 const limits=regionLimits(mobile),tiles=manifest.tiles;
 assert.deepEqual(chooseRegions(tiles,{mpp:20,visible:()=>true,limits}),[]);
 const candidates=chooseRegions(tiles,{mpp:.1,visible:()=>true,limits});assert.ok(candidates.length>0&&candidates.length<=limits.regions);assert.ok(candidates.reduce((s,t)=>s+t.gpuBytes,0)<=limits.bytes);assert.ok(candidates.reduce((s,t)=>s+t.triangles,0)<=limits.triangles);
 assert.deepEqual(chooseRegions(tiles,{mpp:.1,visible:()=>false,limits}),[]);
 const t=tiles.find(t=>t.gpuBytes<limits.bytes&&t.triangles<limits.triangles);assert.deepEqual(chooseRegions([t],{mpp:(limits.enterMpp+limits.exitMpp)/2,visible:()=>true,limits}),[]);assert.equal(chooseRegions([t],{mpp:(limits.enterMpp+limits.exitMpp)/2,visible:()=>true,resident:new Set([t.key]),limits}).length,1);
}
console.log(`Streaming checks passed: ${manifest.tiles.length} regional assets, overview IDs, indices, integrity, local scripts, mobile/desktop budgets and LOD hysteresis.`);

// Large source terrain triangles must not pull detail away from the map pivot.
const one={...regionLimits(),regions:1},tile=(key,bounds,hasBuildings=true)=>({key,bounds,hasBuildings,gpuBytes:10,triangles:10});
assert.equal(chooseRegions([tile('4_4',[0,0,0,1,1,1]),tile('0_0',[0,0,0,5000,5000,1])],{mpp:.1,visible:()=>true,center:[96,96],limits:one})[0].key,'0_0');
assert.equal(chooseRegions([tile('0_0',[0,0,0,192,192,1],false),tile('0_1',[0,192,0,192,384,1])],{mpp:.1,visible:()=>true,center:[96,96],limits:one})[0].key,'0_1');
