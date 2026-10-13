import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Box3,Vector3,OrthographicCamera} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {CampusMapControls} from './campus_controls.js';
import {updateCampusZoomLimit} from './camera_limits.js';

const records=JSON.parse(readFileSync(new URL('../output/viewer_records.json',import.meta.url),'utf8'));
const validation=JSON.parse(readFileSync(new URL('../output/3ds_validation.json',import.meta.url),'utf8'));
const bounds=new Box3(new Vector3(...validation.box_min),new Vector3(...validation.box_max));
const diagonal=bounds.getSize(new Vector3()).length();
const corners=[];
for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])corners.push(new Vector3(x,y,z));
const containsCampus=camera=>corners.every(corner=>{const p=corner.clone().project(camera);return Math.abs(p.x)<=1 && Math.abs(p.y)<=1;});
function focusedCamera(record,height,aspect,legacy=false){
 const camera=new OrthographicCamera(-height*aspect/2,height*aspect/2,height/2,-height/2,.1,100000);
 camera.up.set(0,0,1);
 const center=new Vector3(...record.center,record.height/2);
 camera.position.copy(center).addScaledVector(new Vector3(1.15,-.95,1.2).normalize(),30000);
 const controls=new (legacy?OrbitControls:CampusMapControls)(camera);controls.target.copy(center);controls.maxZoom=60;controls.update();
 return {camera,controls};
}
// Reproduce the original visible failure with the actual Three.js controller.
const tower=records.find(r=>r.facility_id==='1000155');
const old=focusedCamera(tower,50,1.5,true);old.controls.minZoom=.25;old.controls.dollyOut(1e-6);old.camera.updateMatrixWorld(true);
assert.ok(!containsCampus(old.camera),'Original landmark clamp should prevent returning to a campus-wide view');
let cases=0;
for(const record of records)for(const aspect of [1.5,1,.46]){
 const {camera,controls}=focusedCamera(record,50,aspect);
 updateCampusZoomLimit(camera,controls,diagonal);
 controls.dollyOut(1e-6);camera.updateMatrixWorld(true);
 assert.ok(containsCampus(camera),`${record.code}: must zoom out to include the whole campus at aspect ${aspect}`);
 assert.ok(Number.isFinite(camera.zoom)&&camera.zoom>0);
 // Resize/refit the same controller and ensure the old landmark cannot keep a stale limit.
 camera.left=-1600*aspect/2;camera.right=1600*aspect/2;camera.top=800;camera.bottom=-800;camera.zoom=1;camera.updateProjectionMatrix();
 updateCampusZoomLimit(camera,controls,diagonal);controls.dollyOut(1e-6);camera.updateMatrixWorld(true);
 assert.ok(containsCampus(camera),`${record.code}: full view/resize must keep the campus reachable`);
 assert.equal(controls.maxZoom,60,'Keep existing close-up zoom range');
 cases++;
}
console.log(`Camera regression checks passed: original clamp reproduced; ${records.length} building targets × 3 viewport shapes = ${cases} zoom-out/refit cases cover all campus bounds.`);
