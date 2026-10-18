import assert from 'node:assert/strict';
import {OrthographicCamera,Vector3} from 'three';
import {currentView,updateViewReadout} from './view_readout.js';
const camera=new OrthographicCamera(-100,100,50,-50,.1,5000);camera.up.set(0,0,1);const controls={target:new Vector3(12,-24,7)};
const close=(a,b)=>assert(Math.abs(a-b)<1e-7,`${a} != ${b}`);
for(const [offset,az,el]of [[[0,-100,100],180,45],[[100,0,0],90,0],[[-100,0,100],270,45]]){
 camera.position.copy(controls.target).add(new Vector3(...offset));camera.lookAt(controls.target);camera.updateProjectionMatrix();const view=currentView(camera,controls);close(view.azimuth,az);close(view.elevation,el);close(view.span,100);view.center.forEach((x,i)=>close(x,controls.target.getComponent(i)));
}
camera.zoom=2;camera.updateProjectionMatrix();close(currentView(camera,controls).span,50);
camera.position.copy(controls.target).add(new Vector3(0,-100,100));camera.lookAt(controls.target);camera.updateMatrixWorld(true);const right=new Vector3().setFromMatrixColumn(camera.matrixWorld,1);camera.setViewOffset(1,1,0,-.2,1,1);const shifted=currentView(camera,controls);const displacement=new Vector3(...shifted.center).sub(controls.target);close(Math.abs(displacement.dot(right)),10);close(displacement.dot(camera.getWorldDirection(new Vector3())),0);
const plan=new OrthographicCamera(-100,100,50,-50,.1,5000);plan.up.set(0,1,0);plan.position.set(12,-24,1007);plan.lookAt(controls.target);plan.updateProjectionMatrix();const overhead=currentView(plan,controls);close(overhead.azimuth,180);close(overhead.elevation,90);assert(overhead.center.every(Number.isFinite));
console.log('View readout: cardinal bearings, pitch, zoom-independent span, center, off-axis ground framing and plan view passed.');

// Browser-independent lifecycle check: a narrow footer must not read any
// camera state or create readout nodes, rather than merely hiding rendered data.
const savedGlobals=new Map(['document','getComputedStyle','matchMedia','ResizeObserver'].map(key=>[key,globalThis[key]]));
try{
 let resize,available=340;
 const viewport={style:{setProperty(){}}},footer={getBoundingClientRect:()=>({height:34})};
 const label={getBoundingClientRect:()=>({width:200})};
 const info={get clientWidth(){return available},querySelector:()=>label};
 const output={parentElement:info,hidden:true,children:[],appendChild(node){this.children.push(node);return node},replaceChildren(){this.children=[]},setAttribute(){},removeAttribute(){},closest(selector){return selector==='.statusbar'?footer:viewport}};
 globalThis.document={createElement:tag=>tag==='canvas'?{getContext:()=>({measureText:text=>({width:text.length*6})})}:{textContent:''}};
 globalThis.getComputedStyle=()=>({font:'10px sans-serif',columnGap:'10',paddingLeft:'12',borderLeftWidth:'1'});
 globalThis.matchMedia=()=>({matches:true});
 globalThis.ResizeObserver=class{constructor(fn){resize=fn}observe(){}};
 const unreadableCamera=new Proxy({}, {get(){assert.fail('Disabled readout accessed camera state')}});
 updateViewReadout(output,unreadableCamera,controls);assert.equal(output.hidden,true);assert.equal(output.children.length,0);
 for(let i=0;i<10;i++)updateViewReadout(output,unreadableCamera,controls);
 updateViewReadout(output,camera,controls);available=1000;resize();assert.equal(output.hidden,false);assert.equal(output.children.length,4);
 available=340;resize();assert.equal(output.hidden,true);assert.equal(output.children.length,0);
 updateViewReadout(output,unreadableCamera,controls,'zh');assert.equal(output.children.length,0);
 console.log('Mobile view readout: insufficient space skips all camera reads and data nodes; resizing enables and disables the feature.');
}finally{for(const [key,value]of savedGlobals){if(value===undefined)delete globalThis[key];else globalThis[key]=value}}
