import {groundHeight} from './ground_height.js';
import {installMapSelection} from './map_selection.js';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Box3,Vector3,OrthographicCamera,Raycaster,Vector2,MOUSE,TOUCH} from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {CampusMapControls,frameCampusBox,setRotationMode} from './campus_controls.js';
import {updateCampusZoomLimit} from './camera_limits.js';
const validation=JSON.parse(readFileSync(new URL('../output/3DS导入校验.json',import.meta.url),'utf8'));
const campus=new Box3(new Vector3(...validation.box_min),new Vector3(...validation.box_max));
const diagonal=campus.getSize(new Vector3()).length();
const element={clientWidth:1000,clientHeight:650,getBoundingClientRect:()=>({left:17,top:39,width:1000,height:650})};
const sample=new Box3(new Vector3(1008,1027,0),new Vector3(3205,2790,150));
function setup(box=sample,aspect=1000/650,mode='aerial',legacy=false){
 const camera=new OrthographicCamera(-1000,1000,1000,-1000,.1,100000);camera.up.set(0,0,1);
 const controls=legacy?new OrbitControls(camera):new CampusMapControls(camera);controls.domElement=element;
 const height=frameCampusBox(camera,controls,box,{aspect,mode,distance:Math.max(3000,diagonal*1.5),pivotHeight:0});
 camera.left=-height*aspect/2;camera.right=height*aspect/2;camera.top=height/2;camera.bottom=-height/2;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
 updateCampusZoomLimit(camera,controls,diagonal);return {camera,controls};
}
const pixel=(point,camera)=>{const p=point.clone().project(camera);return new Vector2((p.x+1)*500,(1-p.y)*325);};
const near=(a,b,msg)=>assert.ok(Math.abs(a-b)<1e-5,`${msg}: ${a} vs ${b}`);
// The previous screen-space path really moved the pivot hundreds of meters off its plane.
const old=setup(sample,1000/650,'aerial',true);old.controls.screenSpacePanning=true;const oldZ=old.controls.target.z;old.controls.pan(0,650);assert.ok(Math.abs(old.controls.target.z-oldZ)>500);
let cases=0;
for(const aspect of [1000/650,1,.46])for(const mode of ['aerial','plan'])for(let bearing=0;bearing<8;bearing++){
 const {camera,controls}=setup(sample,aspect,mode);controls.rotateLeft(bearing*Math.PI/4);camera.updateMatrixWorld(true);
 const original=controls.target.clone(), point=original.clone(),before=pixel(point,camera),rotation=camera.quaternion.clone();
 controls.pan(63,-47);camera.updateMatrixWorld(true);const after=pixel(point,camera);
 near(controls.target.z,original.z,'Ground-plane elevation stays fixed');near(after.x-before.x,63,'Horizontal pan follows pointer');near(after.y-before.y,-47,'Vertical pan follows pointer');
 near(camera.quaternion.angleTo(rotation),0,'Pan never tilts/rotates camera');
 const position=camera.position.clone(),target=controls.target.clone();for(let i=0;i<60;i++)controls.update();near(camera.position.distanceTo(position),0,'No drift after release');near(controls.target.distanceTo(target),0,'No target drift');
 // Actual MapControls ray-plane mouse dragging, not just programmatic panning.
 const probe=controls.target.clone(),start=pixel(probe,camera),z=controls.target.z;
 controls._handleMouseDownPan({clientX:517,clientY:364});controls._handleMouseMovePan({clientX:549,clientY:382});camera.updateMatrixWorld(true);const end=pixel(probe,camera);
 near(end.x-start.x,32,'Mouse ground drag X');near(end.y-start.y,18,'Mouse ground drag Y');near(controls.target.z,z,'Mouse pivot elevation');
 // Wheel preserves the visible map location beneath the pointer at every bearing.
 const ray=new Raycaster(),mouse=new Vector2(.26,.18);ray.setFromCamera(mouse,camera);
 const t=(controls.target.z-ray.ray.origin.z)/ray.ray.direction.z,anchor=ray.ray.at(t,new Vector3());const zoomBefore=pixel(anchor,camera);
 controls._handleMouseWheel(controls._customWheelEvent({clientX:647,clientY:305.5,deltaY:-100,deltaMode:0,ctrlKey:false}));camera.updateMatrixWorld(true);const zoomAfter=pixel(anchor,camera);
 near(zoomAfter.distanceTo(zoomBefore),0,'Cursor zoom anchor');near(controls.target.z,z,'Zoom pivot remains grounded');
 assert.ok(camera.zoom>1);controls.rotateUp(-100);assert.ok(controls.getPolarAngle()<=Math.PI*.375+1e-8);assert.ok(camera.position.z>controls.target.z);
 const preset=sample.clone().translate(new Vector3(1400,-2500,18));frameCampusBox(camera,controls,preset,{aspect,mode,distance:Math.max(3000,diagonal*1.5),pivotHeight:0});const frozen=camera.position.clone();for(let i=0;i<30;i++)controls.update();near(camera.position.distanceTo(frozen),0,'Preset has no residual movement');const presetCenter=preset.getCenter(new Vector3());near(controls.target.x,presetCenter.x,'Local pivot X');near(controls.target.y,presetCenter.y,'Local pivot Y');near(controls.target.z,0,'Ground pivot Z');
 assert.equal(controls.mouseButtons.LEFT,MOUSE.PAN);assert.equal(controls.touches.ONE,TOUCH.PAN);assert.equal(controls.touches.TWO,TOUCH.DOLLY_PAN);
 setRotationMode(controls,true);assert.equal(controls.mouseButtons.LEFT,MOUSE.ROTATE);assert.equal(controls.touches.ONE,TOUCH.ROTATE);setRotationMode(controls,false);
 const normalized=controls._customWheelEvent({deltaY:1e9,deltaMode:2,ctrlKey:true});assert.ok(Math.abs(normalized.deltaY)<=250);
 controls._scale=1;controls._dollyStart.set(0,0);controls._pointers=[1,2];
 controls._pointerPositions={1:new Vector2(400,400),2:new Vector2(400,400)};
 controls._handleTouchMoveDolly({pointerId:1,pageX:400,pageY:400,clientX:400,clientY:400});
 assert.ok(Number.isFinite(controls._scale)&&controls._scale>=1/1.2&&controls._scale<=1.2,'Coincident touch contacts cannot produce an abrupt/infinite zoom');
 cases++;
}
console.log(`Interaction passed: old pivot drift reproduced; ${cases} bearing/view/viewport cases; pointer-aligned mouse/touch pan, cursor zoom, fixed local pivots, horizon limits, explicit rotation, no inertia or preset drift.`);

const listeners={},fakeCanvas={addEventListener(type,handler){listeners[type]=handler;}};let clicks=0;installMapSelection(fakeCanvas,()=>clicks++);
const event=(id,x,y,primary=true)=>({pointerId:id,clientX:x,clientY:y,button:0,isPrimary:primary});
listeners.pointerdown(event(1,100,100));listeners.pointermove(event(1,150,100));listeners.pointermove(event(1,100,100));listeners.pointerup(event(1,100,100));assert.equal(clicks,0,'Return drag cannot click');
listeners.pointerdown(event(1,100,100));listeners.pointerdown(event(2,120,100,false));listeners.pointerup(event(2,120,100,false));listeners.pointerup(event(1,100,100));assert.equal(clicks,0,'Pinch cannot select');
listeners.pointerdown(event(1,100,100));listeners.pointercancel(event(1,100,100));listeners.pointerup(event(1,100,100));assert.equal(clicks,0,'Canceled pointer cannot select');
listeners.pointerdown(event(1,100,100));listeners.pointerup(event(1,100,100));assert.equal(clicks,1,'Normal tap selects');
console.log('Selection passed: drag-return, pinch and canceled gestures never trigger a building selection.');

near(groundHeight({groundGrid:{x:[0,100],y:[0,100],heights:[[0,10],[20,30]]}},50,50),15,'Bilinear terrain sample');
for(let i=0;i<8;i++){
 const {camera,controls}=setup(sample);controls.groundHeight=(x,y)=>20+.02*x-.01*y;controls.focusPivot=false;
 const anchor=controls.target.clone(),before=pixel(anchor,camera);controls.update();camera.updateMatrixWorld(true);near(pixel(anchor,camera).distanceTo(before),0,'Ground rebasing preserves projection');
 assert.ok(Math.abs(controls.target.z-controls.groundHeight(controls.target.x,controls.target.y))<.01);
 controls.rotateLeft(i*Math.PI/4);camera.updateMatrixWorld(true);const point=controls.target.clone(),origin=pixel(point,camera);controls.pan(40,-25);camera.updateMatrixWorld(true);const after=pixel(point,camera);near(after.x-origin.x,40,'Terrain pan X');near(after.y-origin.y,-25,'Terrain pan Y');
 assert.ok(Math.abs(controls.target.z-controls.groundHeight(controls.target.x,controls.target.y))<.01);
}
console.log('Terrain passed: bilinear lookup, invisible pivot rebasing and pan alignment across sloping ground.');
