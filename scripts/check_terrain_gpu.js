import * as THREE from 'three';
import {prepareLandscape,updateCampusDepthRange} from './surface_rendering.js';
const out=document.getElementById('results');
try{
 const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setSize(256,256);document.body.append(renderer.domElement);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const target=new THREE.WebGLRenderTarget(256,256);target.texture.colorSpace=THREE.SRGBColorSpace;renderer.setRenderTarget(target);
 const scene=new THREE.Scene();scene.background=new THREE.Color(0xffffff);
 const ground=new THREE.Mesh(new THREE.BoxGeometry(30,30,8),new THREE.MeshBasicMaterial({name:'Ground',color:0x809070}));ground.position.z=2;scene.add(ground);
 const building=new THREE.Mesh(new THREE.BoxGeometry(4,4,12),new THREE.MeshBasicMaterial({color:0xff0000}));building.position.z=4;scene.add(building);
 const parts=prepareLandscape(ground),barriers=parts.filter(p=>p.material.userData.campusTerrainWall||p.material.userData.campusTerrainDepth);
 const camera=new THREE.OrthographicCamera(-20,20,15,-15,.1,1000);camera.up.set(0,0,1);
 const pixel=p=>{const q=p.clone().project(camera),v=new Uint8Array(4);renderer.readRenderTargetPixels(target,Math.floor((q.x+1)*128),Math.floor((q.y+1)*128),1,1,v);return [...v].slice(0,3);};
 const expect=(p,color,label)=>{const v=pixel(p);if(v.some((n,i)=>Math.abs(n-color[i])>3))throw new Error(label+': '+v+' expected '+color);};
 const aim=(angle,elevation)=>{const pivot=new THREE.Vector3(0,0,3);camera.position.copy(pivot).add(new THREE.Vector3(Math.cos(angle),Math.sin(angle),Math.tan(elevation*Math.PI/180)).multiplyScalar(100));camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,new THREE.Box3().setFromObject(scene));};
 aim(0,0);barriers.forEach(p=>p.visible=false);renderer.render(scene,camera);expect(new THREE.Vector3(0,0,3),[255,0,0],'Original look-through defect reproduced');barriers.forEach(p=>p.visible=true);
 let cases=0;for(const elevation of [0,5,25])for(let i=0;i<8;i++){aim(i*Math.PI/4,elevation);renderer.render(scene,camera);expect(new THREE.Vector3(0,0,3),[128,144,112],'Buried base is hidden');expect(new THREE.Vector3(0,0,9),[255,0,0],'Above-ground facade stays visible');cases++;}
 const road=new THREE.Mesh(new THREE.BoxGeometry(10,10,.1),new THREE.MeshBasicMaterial({name:'Road',color:0x505050}));road.position.set(8,0,5.8);scene.add(road);prepareLandscape(road);
 camera.up.set(0,1,0);camera.position.set(0,0,100);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,new THREE.Box3().setFromObject(scene));renderer.render(scene,camera);expect(new THREE.Vector3(8,0,6),[80,80,80],'Crossed terrain does not punch holes through road paint');
 renderer.setRenderTarget(null);aim(-Math.PI/2,5);renderer.render(scene,camera);out.textContent=JSON.stringify({status:'passed',lowAngleCases:cases,checks:['Original floating-base defect reproduced','Closed terrain and top depth hide buried geometry','Above-grade facades remain visible','Road paint remains stable across terrain crossings']},null,2);target.dispose();
}catch(error){out.textContent=JSON.stringify({status:'failed',error:error.message},null,2);console.error(error);}
