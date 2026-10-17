import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import {Box3,Vector3,OrthographicCamera} from 'three';
import {CampusMapControls,frameCampusBox} from './campus_controls.js';
import {highlightCamera} from './highlight_camera.js';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root),'utf8'));
const catalogue=read('config/highlight-views.json'),records=read('output/viewer_records.json').filter(r=>r.landmark);
const idOf=r=>String(r.facility_id??r.osm_id);
const preserved=Object.keys(catalogue.preserved).filter(id=>id!=='DRUMHELLER');
assert.deepEqual([...Object.keys(catalogue.views),...preserved].sort(),records.map(idOf).sort());
for(const view of Object.values(catalogue.views)){
 assert(view.azimuth_deg>=0&&view.azimuth_deg<360);
 assert(view.elevation_deg>=18&&view.elevation_deg<=45);
 assert(view.padding>=1.45&&view.padding<=1.9);
 assert(view.composition&&view.reference.startsWith('https://'));
}
// Read only exported position chunks; no triangles, textures or GPU allocations.
const layers=read('output/layer_map.json'),byLayer=new Map(records.map(r=>[r.layer,r.code]));
const boxes=new Map(records.map(r=>[r.code,new Box3()]));
const native=fs.readdirSync(new URL('output/',root)).find(name=>name.endsWith('.3ds'));
const bytes=fs.readFileSync(new URL('output/'+native,root));
function chunks(start,end,code){
 for(let p=start;p<end;){
  const tag=bytes.readUInt16LE(p),length=bytes.readUInt32LE(p+2),stop=p+length;
  assert(length>=6&&stop<=end,'Invalid source chunk');
  if(tag===0x4d4d||tag===0x3d3d||tag===0x4100)chunks(p+6,stop,code);
  else if(tag===0x4000){const z=bytes.indexOf(0,p+6);assert(z<stop);const name=bytes.toString('ascii',p+6,z);chunks(z+1,stop,byLayer.get(layers[name]?.layer));}
  else if(tag===0x4110&&code){
   const count=bytes.readUInt16LE(p+6),box=boxes.get(code);assert(p+8+count*12<=stop);
   for(let i=0,at=p+8;i<count;i++,at+=12)box.expandByPoint(new Vector3(bytes.readFloatLE(at),bytes.readFloatLE(at+4),bytes.readFloatLE(at+8)));
  }
  p=stop;
 }
}
chunks(0,bytes.length);
const element={clientWidth:1000,clientHeight:650,getBoundingClientRect:()=>({left:0,top:0,width:1000,height:650})};
const results=[];
for(const r of records){
 const fallback=r.facility_id==='STD'?{direction:[-.9,-1.5,2.1],pad:1.35}:{};
 const shot=highlightCamera(r,catalogue,fallback);assert(shot.direction,'Missing direction '+r.name);
 let b=r.focus_bounds?new Box3(new Vector3(...r.focus_bounds.slice(0,3)),new Vector3(...r.focus_bounds.slice(3))):boxes.get(r.code).clone();
 assert(!b.isEmpty(),r.name+' has no exported mesh bounds');
 for(const id of r.focus_facilities||[]){const sibling=read('output/viewer_records.json').find(x=>x.facility_id===id);if(sibling){
  // AVA is not itself a highlight; its retained source record supplies a conservative companion extent.
  const [x,y]=sibling.center,z=sibling.bottom_m??sibling.ground_m??0;
  b.union(new Box3(new Vector3(x-sibling.width/2,y-sibling.depth/2,z),new Vector3(x+sibling.width/2,y+sibling.depth/2,sibling.peak_m??z+sibling.height)));
 }}
 const elevation=Math.atan2(shot.direction.z,Math.hypot(shot.direction.x,shot.direction.y))*180/Math.PI;
 if(r.facility_id==='SUZ'){assert.deepEqual(shot.direction.toArray(),[-1,-.015,.5]);assert.equal(shot.pad,1.72);assert.deepEqual(b.min.toArray(),r.focus_bounds.slice(0,3));}
 if(r.facility_id==='STD'){assert.deepEqual(shot.direction.toArray(),[-.9,-1.5,2.1]);assert.equal(shot.pad,1.35);}
 for(const aspect of [.55,1,1.8]){
  const camera=new OrthographicCamera(-1000,1000,1000,-1000,.1,100000);camera.up.set(0,0,1);
  const controls=new CampusMapControls(camera);controls.domElement=element;
  const height=frameCampusBox(camera,controls,b,{aspect,pad:shot.pad,direction:shot.direction,distance:15000});
  camera.left=-height*aspect/2;camera.right=height*aspect/2;camera.top=height/2;camera.bottom=-height/2;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  assert(camera.position.clone().sub(controls.target).normalize().distanceTo(shot.direction.clone().normalize())<1e-7);
  assert.equal(controls.enableDamping,false);assert.equal(controls.focusPivot,true);
  for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z]){
   const p=new Vector3(x,y,z).project(camera);assert(Math.abs(p.x)<=1/shot.pad+1e-6&&Math.abs(p.y)<=1/shot.pad+1e-6,`${r.name} cropped at aspect ${aspect}`);
  }
 }
 results.push({code:r.code,id:idOf(r),name:r.name,elevation_deg:Number(elevation.toFixed(2)),direction:shot.direction.toArray(),padding:shot.pad,source_bounds:[...b.min.toArray(),...b.max.toArray()]});
}
// Manual record overrides remain authoritative, including future individually adjusted views.
const first=records[0],custom=highlightCamera({...first,focus_direction:[1,2,3],focus_padding:1.83},catalogue);
assert.deepEqual(custom.direction.toArray(),[1,2,3]);assert.equal(custom.pad,1.83);
const ordinary=highlightCamera({facility_id:'not-a-highlight'},catalogue);assert.equal(ordinary.direction,undefined);assert.equal(ordinary.pad,1.55);
const delivery=read('output/web_model_report.json');
assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),delivery.sourceSha256,'Source CAD digest changed');
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('assets/campus-model.bin',root))).digest('hex'),delivery.transferSha256,'Model packet digest changed');
const report={highlights:records.length,new_camera_presets:Object.keys(catalogue.views).length,preserved:catalogue.preserved,aspect_ratios:[.55,1,1.8],source_mesh_framing:'pass',geometry_unchanged:true,views:results};
fs.writeFileSync(new URL('output/highlight_view_validation.json',root),JSON.stringify(report,null,2)+'\n');
console.log(`Highlights ${records.length}: complete coverage; actual mesh framing at 3 aspect ratios; custom cameras and CAD bytes preserved.`);
