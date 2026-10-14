/** Targeted regression: flat building bases must touch the actual exported ground. */
import {groundHeight} from './ground_height.js';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {Vector3} from 'three';
import {TDSLoader} from 'three/addons/loaders/TDSLoader.js';
const root=new URL('../',import.meta.url),path=process.argv[2]||'output/UMich_AnnArbor.3ds';
const bytes=readFileSync(new URL(path,root)),model=new TDSLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');model.updateMatrixWorld(true);
const cells=new Map(),size=20;let triangles=0;
model.traverse(m=>{
 if(!m.isMesh||!m.name.startsWith('E'))return;
 const mats=Array.isArray(m.material)?m.material:[m.material],p=m.geometry.attributes.position,idx=m.geometry.index;
 for(const group of m.geometry.groups.length?m.geometry.groups:[{start:0,count:idx.count,materialIndex:0}]){
  if(mats[group.materialIndex]?.name!=='Ground')continue;
  for(let i=group.start;i<group.start+group.count;i+=3){
   const vs=[0,1,2].map(k=>new Vector3().fromBufferAttribute(p,idx.getX(i+k)).applyMatrix4(m.matrixWorld)),[a,b,c]=vs;
   const det=(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);if(det<1e-7)continue;
   const t={a,b,c,det};triangles++;
   for(let x=Math.floor(Math.min(a.x,b.x,c.x)/size);x<=Math.floor(Math.max(a.x,b.x,c.x)/size);x++)for(let y=Math.floor(Math.min(a.y,b.y,c.y)/size);y<=Math.floor(Math.max(a.y,b.y,c.y)/size);y++){
    const key=x+','+y;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(t);
   }
  }
 }
});
const samples=JSON.parse(readFileSync(new URL('output/ground_contact_samples.json',root),'utf8'));let worstGap=0,worstIntrusion=0,missing=0;const failures=[];
for(const sample of samples){
 const [x,y,z]=sample.position;let ground=-Infinity;
 for(const {a,b,c,det}of cells.get(Math.floor(x/size)+','+Math.floor(y/size))||[]){
  const u=((x-a.x)*(c.y-a.y)-(y-a.y)*(c.x-a.x))/det,v=((b.x-a.x)*(y-a.y)-(b.y-a.y)*(x-a.x))/det;
  if(u>=-1e-5&&v>=-1e-5&&u+v<=1.00001)ground=Math.max(ground,a.z+u*(b.z-a.z)+v*(c.z-a.z));
 }
 if(!Number.isFinite(ground)){missing++;failures.push({...sample,ground:null});continue;}
 worstGap=Math.max(worstGap,z-ground);worstIntrusion=Math.max(worstIntrusion,ground-z);
 if(Math.abs(z-ground)>.025)failures.push({...sample,ground,gap:z-ground});
}
const result={source:path,buildings:new Set(samples.map(s=>s.code)).size,samples:samples.length,ground_top_triangles:triangles,missing_ground_samples:missing,max_floating_gap_m:worstGap,max_intrusion_m:worstIntrusion,passed:failures.length===0,failures:failures.slice(0,10)};
if(!process.argv[2])writeFileSync(new URL('output/ground_contact_validation.json',root),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));if(!result.passed)process.exitCode=1;

if(!process.argv[2]){
 const html=readFileSync(new URL('index.html',root),'utf8'),data=JSON.parse(html.match(/<script id="campus-data"[^>]*>(.*?)<\/script>/s)[1]);
 assert.equal(data.groundPads?.length??data.records.length,new Set(samples.map(s=>s.code)).size);
 for(const sample of samples){const [x,y,z]=sample.position;assert.ok(Math.abs(groundHeight(data,x,y)-z)<.025,'Camera and hover use the same flat building grade: '+sample.code);}
 console.log('Camera/hover pad lookup matches all exported building samples.');
}

const ring=(a,b,c,d)=>[[a,b],[c,b],[c,d],[a,d],[a,b]];
const probe={groundPads:[{height:7,bounds:[0,0,10,10],geometry:{type:'Polygon',coordinates:[ring(0,0,10,10),ring(4,4,6,6)]}}]};
assert.equal(groundHeight(probe,2,2),7);assert.equal(groundHeight(probe,5,5),0);assert.equal(groundHeight(probe,12,5),0);
