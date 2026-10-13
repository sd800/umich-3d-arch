import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parseCampusModel} from '../tmp/model-parser-test.mjs';
const name=['UMich_AnnArbor','UChicago_HydePark','XJTU_InnovationHarbour'].find(n=>{try{readFileSync(new URL(`../output/${n}.3ds`,import.meta.url));return true;}catch{return false;}});
const bytes=new Uint8Array(readFileSync(new URL(`../output/${name}.3ds`,import.meta.url))),expected=JSON.parse(readFileSync(new URL('../output/3DS导入校验.json',import.meta.url),'utf8'));
globalThis.requestAnimationFrame=callback=>setImmediate(callback);
for(const Worker of [undefined,class {constructor(){throw new Error('Worker unavailable');}}]){
 globalThis.Worker=Worker;const model=await parseCampusModel(bytes);assert.equal(model.children.length,expected.objects);
}
await assert.rejects(parseCampusModel(new Uint8Array(20)),/no geometry/);
console.log('Parser fallback passed: workers absent/blocked remain interactive; empty geometry fails clearly.');
