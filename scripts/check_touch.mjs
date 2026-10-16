import assert from 'node:assert/strict';
import {OrthographicCamera,Vector3,Box3} from 'three';
import {CampusMapControls,frameCampusBox} from './campus_controls.js';

// Exercise the real pointer-down/move/up/cancel handlers, not just rotation math.
let nextFrame=0;const frames=new Map();
globalThis.requestAnimationFrame=fn=>{frames.set(++nextFrame,fn);return nextFrame;};
globalThis.cancelAnimationFrame=id=>frames.delete(id);
function paint(){const jobs=[...frames.values()];frames.clear();for(const fn of jobs)fn();}
const near=(a,b,message)=>assert.ok(Math.abs(a-b)<1e-6,`${message}: ${a} vs ${b}`);
const pixelNear=(a,b,message)=>assert.ok(Math.abs(a-b)<.25,`${message}: ${a} vs ${b}`);
const difference=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
function setup(elevation=45,bearing=0,width=1000,height=650){
 const camera=new OrthographicCamera(-1000,1000,1000,-1000,.1,100000),controls=new CampusMapControls(camera);
 const document={addEventListener(){},removeEventListener(){}},element={clientWidth:width,clientHeight:height,ownerDocument:document,style:{},getRootNode:()=>document,getBoundingClientRect:()=>({left:17,top:39,width,height}),addEventListener(){},removeEventListener(){},setPointerCapture(){},releasePointerCapture(){}};
 controls.domElement=element;controls.minZoom=.1;controls.maxZoom=60;controls.groundHeight=()=>0;
 const box=new Box3(new Vector3(-500,-500,0),new Vector3(500,500,100)),h=frameCampusBox(camera,controls,box,{aspect:width/height,pivotHeight:0});
 camera.left=-h*width/height/2;camera.right=-camera.left;camera.top=h/2;camera.bottom=-h/2;camera.updateProjectionMatrix();
 controls.rotateLeft(bearing);controls.rotateUp(controls.getPolarAngle()-(Math.PI/2-elevation*Math.PI/180));camera.updateMatrixWorld(true);
 const event=(id,x,y,type)=>({pointerId:id,pointerType:'touch',button:0,isPrimary:id===1,clientX:x,clientY:y,pageX:x+120,pageY:y+240,type});
 const down=(id,x,y)=>controls._onPointerDown(event(id,x,y,'pointerdown'));
 const move=(id,x,y)=>controls._onPointerMove(event(id,x,y,'pointermove'));
 const up=(id,x,y,cancel=false)=>controls._onPointerUp(event(id,x,y,cancel?'pointercancel':'pointerup'));
 const pixel=point=>{const p=point.clone().project(camera);return {x:17+(p.x+1)*width/2,y:39+(1-p.y)*height/2};};
 function anchor(x,y){const p=new Vector3((x-17)/width*2-1,1-(y-39)/height*2,controls.target.clone().project(camera).z).unproject(camera),d=camera.getWorldDirection(new Vector3());if(d.z<-.35)p.addScaledVector(d,(controls.target.z-p.z)/d.z);return p;}
 function pair(cx,cy,r,angle,start=false){const dx=r*Math.cos(angle),dy=r*Math.sin(angle);(start?down:move)(1,cx-dx,cy-dy);(start?down:move)(2,cx+dx,cy+dy);}
 return {camera,controls,down,move,up,pixel,anchor,pair};
}
let cases=0;
for(const [width,height] of [[1000,650],[390,740]])for(const elevation of [90,45,5,0])for(const bearing of [0,Math.PI/2,Math.PI,3*Math.PI/2]){
 const s=setup(elevation,bearing,width,height),{camera,controls}=s,cx=17+width*.61,cy=39+height*.47;
 s.pair(cx,cy,55,.4,true);
 const original=controls.getAzimuthalAngle(),polar=controls.getPolarAngle(),fixed=s.anchor(cx,cy);
 // A straight asymmetric event sequence is consumed together, so a pure pinch
 // changes zoom without transient rotation or a change in the elevation angle.
 const zoom=camera.zoom;s.pair(cx,cy,62,.4);near(controls.getAzimuthalAngle(),original,'Touch moves wait for one animation frame');assert.equal(frames.size,1);paint();
 near(difference(controls.getAzimuthalAngle(),original),0,'Pinch never twists');near(controls.getPolarAngle(),polar,'Pinch never tilts');assert.ok(camera.zoom>zoom);
 near(s.pixel(fixed).x,cx,'Pinch anchor X');near(s.pixel(fixed).y,cy,'Pinch anchor Y');
 // Combined pinch + translation + intentional twist keeps the gesture midpoint
 // anchored across all bearings, including a perfectly horizontal camera.
 for(let i=1;i<=5;i++){
  s.pair(cx+i*3,cy-i*2,62+i*2,.4+i*.07);paint();
  pixelNear(s.pixel(fixed).x,cx+i*3,`Combined gesture anchor X (${elevation} degrees)`);pixelNear(s.pixel(fixed).y,cy-i*2,`Combined gesture anchor Y (${elevation} degrees)`);
  near(controls.getPolarAngle(),polar,'Twist does not tilt or roll');near(controls.target.z,0,'Twist pivot remains grounded');
  assert.ok(camera.position.toArray().every(Number.isFinite));
 }
 near(difference(controls.getAzimuthalAngle(),original),.35-3*Math.PI/180,'Rotation follows fingers, with a small intent threshold');
 const frozen=camera.position.clone(),rotation=camera.quaternion.clone(),projection=camera.projectionMatrix.clone();
 s.up(2,cx+100,cy);s.up(1,cx-100,cy);paint();for(let i=0;i<30;i++)controls.update();
 near(camera.position.distanceTo(frozen),0,'No release drift');near(camera.quaternion.angleTo(rotation),0,'No release spin');assert.deepEqual(camera.projectionMatrix.elements,projection.elements);assert.equal(frames.size,0);
 cases++;
}
{
 const s=setup(),k=s.controls;s.pair(510,350,60,0,true);const initial=k.getAzimuthalAngle(),zoom=s.camera.zoom,point=s.anchor(510,350);
 s.pair(532,365,60,0);paint();near(difference(k.getAzimuthalAngle(),initial),0,'Two-finger pan cannot rotate');near(s.camera.zoom,zoom,'Two-finger pan cannot zoom');near(s.pixel(point).x,532,'Two-finger pan X');near(s.pixel(point).y,365,'Two-finger pan Y');
 s.up(2,592,365);const before=s.pixel(point);s.move(1,478,374);paint();near(s.pixel(point).x-before.x,6,'One finger resumes without a jump');near(s.pixel(point).y-before.y,9,'One finger resumes vertically');
 s.down(3,600,380);const pose=s.camera.position.clone();s.move(1,478,374);s.move(3,600,380);paint();near(s.camera.position.distanceTo(pose),0,'Replacement contact resets twist baseline');
 s.down(4,700,400);s.move(4,750,400);paint();near(s.camera.position.distanceTo(pose),0,'Third contact pauses the gesture');s.up(4,750,400);s.move(1,478,374);s.move(3,600,380);paint();near(s.camera.position.distanceTo(pose),0,'Returning to two contacts does not jump');
 const resumed=s.anchor(539,377),angle0=Math.atan2(3,61),radius=Math.hypot(61,3),dx=radius*Math.cos(angle0+.1),dy=radius*Math.sin(angle0+.1);
 s.move(1,539-dx,377-dy);s.move(3,539+dx,377+dy);paint();pixelNear(s.pixel(resumed).x,539,'Third-contact recovery retains viewport anchor X');pixelNear(s.pixel(resumed).y,377,'Third-contact recovery retains viewport anchor Y');
 const angle=k.getAzimuthalAngle();s.move(3,600,430);assert.equal(frames.size,1);s.up(3,600,430,true);paint();near(difference(k.getAzimuthalAngle(),angle),0,'Cancellation discards the queued twist');s.up(1,478,374);
}
{
 const s=setup();s.pair(510,350,60,179*Math.PI/180,true);const angle=s.controls.getAzimuthalAngle();s.pair(510,350,60,185*Math.PI/180);paint();near(difference(s.controls.getAzimuthalAngle(),angle),3*Math.PI/180,'Angle wrap takes the short path');
 s.pair(510,350,1,0);paint();s.pair(510,350,60,0);paint();const stable=s.controls.getAzimuthalAngle();s.pair(510,350,60,0);paint();near(difference(s.controls.getAzimuthalAngle(),stable),0,'Close/crossed contacts cannot flip the camera');
 s.controls.enableRotate=false;s.pair(510,350,60,.7);paint();near(difference(s.controls.getAzimuthalAngle(),stable),0,'Rotation-disable is respected');
 s.move(1,400,300);assert.equal(frames.size,1);s.controls.dispose();assert.equal(frames.size,0);paint();
}
console.log(`Touch passed: ${cases} view/bearing/viewport cases; real batched pointer events, twist direction and midpoint, pure pinch/pan, no tilt/roll/inertia, finger replacement, third contact, cancellation and disposal.`);
