import * as THREE from 'three';
import before from './fixtures/medical_roofs_before.json';
import after from '../tmp/medical_roofs_after.json';
import {updateCampusDepthRange} from './surface_rendering.js';
const result=document.querySelector('#results');
try {
 const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setSize(320,320);renderer.outputColorSpace=THREE.SRGBColorSpace;document.body.append(renderer.domElement);
 const target=new THREE.WebGLRenderTarget(320,320);target.texture.colorSpace=THREE.SRGBColorSpace;renderer.setRenderTarget(target);
 const camera=new THREE.OrthographicCamera(-80,80,80,-80,.1,100000);camera.up.set(0,0,1);
 const bounds=new THREE.Box3(new THREE.Vector3(-1600,-4000,-50),new THREE.Vector3(3300,3300,200));
 const palette={RoofGravel:0x959184,RoofMembrane:0x555b58,Metal:0x717c80};
 function sceneFor(fixture){const scene=new THREE.Scene();for(const source of fixture.meshes){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(source.positions,3));g.setIndex(source.index);const m=new THREE.MeshBasicMaterial({color:palette[source.material]});scene.add(new THREE.Mesh(g,m));}return scene;}
 function read(point){const q=point.clone().project(camera),pixel=new Uint8Array(4);renderer.readRenderTargetPixels(target,Math.floor((q.x+1)*160),Math.floor((q.y+1)*160),1,1,pixel);return [...pixel].slice(0,3);}
 let oldWrong=0,samples=0,maxDelta=0;const buildings=[];
 for(const fixed of after){
  const old=before.find(f=>f.code===fixed.code),legacy=sceneFor(old),current=sceneFor(fixed);let checked=0,legacyWrong=0;
  const color=new THREE.Color(palette[fixed.meshes.find(m=>m.material.startsWith('Roof')).material]).convertLinearToSRGB();
  const expected=[color.r,color.g,color.b].map(v=>Math.round(v*255));
  for(const xyz of fixed.samples){const p=new THREE.Vector3(...xyz);
   for(let step=0;step<24;step++){
    const angle=step*Math.PI/6,tilt=[.25,.65,1.15][step%3];camera.zoom=[1,2,5][step%3];camera.updateProjectionMatrix();const pivot=p.clone().add(new THREE.Vector3((step%4)*.017,(step%5)*.013,0));camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*Math.sin(tilt),Math.sin(angle)*Math.sin(tilt),Math.cos(tilt)),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,bounds);
    renderer.render(legacy,camera);if(read(p).some((v,i)=>Math.abs(v-expected[i])>3)){oldWrong++;legacyWrong++;}
    renderer.render(current,camera);const delta=Math.max(...read(p).map((v,i)=>Math.abs(v-expected[i])));maxDelta=Math.max(maxDelta,delta);if(delta>3)throw Error(fixed.code+' unstable roof finish at frame '+step+': '+read(p)+' / '+expected);checked++;samples++;
   }
  }
  buildings.push({code:fixed.code,frames:checked,legacyWrong});
 }
 if(!oldWrong||samples<72)throw Error('Actual medical roof conflict was not reproduced');
 result.textContent=JSON.stringify({status:'passed',buildings,frames:samples,oldWrong,maxColorDelta:maxDelta,depthBits:renderer.getContext().getParameter(renderer.getContext().DEPTH_BITS),checks:['Actual delivered before/after roof meshes','Pan, rotate and three zoom levels','Unchanged building heights and designed roof colors','No geometry overlap hidden with depth-test disabling']},null,2);
 renderer.setRenderTarget(null);renderer.render(sceneFor(after.find(f=>f.code==='M464')),camera);
}catch(error){result.textContent=JSON.stringify({status:'failed',error:error.message},null,2);console.error(error);}
