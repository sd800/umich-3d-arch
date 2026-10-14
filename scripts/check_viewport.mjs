import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {OrthographicCamera,Vector3} from 'three';
import {CampusMapControls,levelCampusView} from './campus_controls.js';
import {createViewportRenderLoop} from './viewport_rendering.js';
import {updateCampusZoomLimit} from './camera_limits.js';
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`);
// ResizeObserver runs after animation callbacks. Clearing there can be painted
// before a newly requested animation callback gets a chance to draw.
let oldBuffer='drawn',oldNextFrame;
oldBuffer='empty';oldNextFrame=()=>{oldBuffer='drawn';};
assert.equal(oldBuffer,'empty','The old observer path exposes a blank paint');oldNextFrame();
let cases=0;
for(const level of [false,true]) {
  const host={clientWidth:1000,clientHeight:650},jobs=[],events=[];
  let buffer='drawn',frameHeight=1300,resizes=0,draws=0;
  const camera=new OrthographicCamera(-1000,1000,650,-650,.1,30000);camera.up.set(0,0,1);camera.position.set(1800,-3000,2400);
  const controls=new CampusMapControls(camera);controls.target.set(0,0,0);controls.update();camera.zoom=1.6;
  if(level){levelCampusView(controls);controls._viewLift=35;}
  function frustum(){const a=host.clientWidth/host.clientHeight;camera.left=-frameHeight*a/2;camera.right=frameHeight*a/2;camera.top=frameHeight/2;camera.bottom=-frameHeight/2;camera.updateProjectionMatrix();controls.syncViewOffset();updateCampusZoomLimit(camera,controls,5000);}
  frustum();const rotation=camera.quaternion.clone(),target=controls.target.clone(),zoom=camera.zoom,lift=controls._viewLift||0;
  const loop=createViewportRenderLoop({host,renderer:{setSize(w,h,style){assert.equal(style,false);assert.equal(w,host.clientWidth);assert.equal(h,host.clientHeight);buffer='empty';resizes++;events.push('resize');}},resize:ratio=>{frameHeight*=ratio;frustum();events.push('frustum');},draw:()=>{assert.ok(camera.projectionMatrix.elements.every(Number.isFinite));buffer='drawn';draws++;events.push('draw');},requestFrame:fn=>jobs.push(fn)});
  loop.request();loop.request();assert.equal(jobs.length,1);jobs.shift()();assert.deepEqual(events,['resize','frustum','draw']);
  const pixels=frameHeight/host.clientHeight/camera.zoom;
  for(const [w,h] of [[920,600],[800,600],[700,720],[390,700],[1150,850]]) {
    host.clientWidth=w;host.clientHeight=h;
    assert.ok(loop.needsResize());loop.request();loop.request();
    assert.equal(buffer,'drawn','Resize notifications keep the last rendered buffer until the draw frame');assert.equal(jobs.length,1);
    jobs.shift()();assert.equal(buffer,'drawn','No empty buffer remains at paint');
    near(frameHeight/h/camera.zoom,pixels);near(camera.zoom,zoom);near(camera.quaternion.angleTo(rotation),0);near(controls.target.distanceTo(target),0);near(controls._viewLift||0,lift);
    cases++;
  }
  const before=resizes;assert.equal(loop.needsResize(),false);loop.request();jobs.shift()();assert.equal(resizes,before,'Unchanged dimensions never clear the buffer');
  host.clientWidth=0;host.clientHeight=0;assert.equal(loop.needsResize(),false);loop.request();jobs.shift()();assert.equal(resizes,before);assert.equal(buffer,'drawn');
  host.clientWidth=500;host.clientHeight=700;loop.request();host.clientWidth=600;host.clientHeight=750;loop.request();jobs.shift()();near(frameHeight/750/camera.zoom,pixels);
  host.clientWidth=650;host.clientHeight=800;assert.ok(loop.drawNow());assert.equal(buffer,'drawn','Export redraws the latest size atomically');near(frameHeight/800/camera.zoom,pixels);
  assert.ok(draws>0);
}
const viewer=readFileSync(new URL('./viewer.js',import.meta.url),'utf8');
assert.ok(!viewer.includes('renderer.setSize('),'Viewer buffer sizes are changed only inside the atomic draw loop');
assert.ok(viewer.includes('if(viewportLoop.needsResize())render(false)'),'Resize does not invalidate the fixed shadow map');
assert.ok(viewer.includes('viewportLoop.drawNow();renderer.domElement.toBlob'),'PNG export uses the current viewport size');
const template=readFileSync(new URL('./viewer.template.html',import.meta.url),'utf8');assert.ok(!template.includes('id="level-view"'),'No Level button remains');assert.ok(!viewer.includes("$('level-view')"),'No removed-button handlers remain');
const pkg=JSON.parse(readFileSync(new URL('../package.json',import.meta.url),'utf8'));
if(pkg.name==='uw-seattle-model') {
  assert.ok(viewer.includes('direction=new THREE.Vector3(.55,-1.5,1.3)'));
  const camera=new OrthographicCamera(-1,1,1,-1);camera.up.set(0,0,1);camera.position.set(.55,-1.5,1.3);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);
  const north=new Vector3(0,1,0).transformDirection(camera.matrixWorldInverse),bearing=Math.atan2(north.x,north.y)*180/Math.PI;
  assert.ok(bearing>28&&bearing<32,'UW north points about 30 degrees toward the upper right');
}
console.log(`Viewport regression passed: ${cases} aerial/level resize cases; atomic resize/draw, duplicate/hidden/latest-size handling, stable scale/framing and PNG export.`);
