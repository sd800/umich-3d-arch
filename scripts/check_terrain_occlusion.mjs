import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Group,Mesh,BoxGeometry,MeshBasicMaterial,Raycaster,Vector3} from 'three';
import {CampusTDSLoader} from './campus_tds_loader.js';
import {createTerrainMass,prepareLandscape,SURFACE_ORDER} from './surface_rendering.js';
const root=new URL('../',import.meta.url);
const modelName='UMich_AnnArbor';
const bytes=readFileSync(new URL('output/'+modelName+'.3ds',root));
const model=new CampusTDSLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');model.updateMatrixWorld(true);
const original=[];model.traverse(m=>{if(m.isMesh&&(Array.isArray(m.material)?m.material:[m.material]).some(mat=>['Ground','ContextGround','ShoreGround'].includes(mat.name)))original.push(m);});
const mass=createTerrainMass(original,-30);
let solidFaces=0,shellFaces=0,depthFaces=0;
for(const mesh of original){
 const source=mesh.geometry,materials=Array.isArray(mesh.material)?mesh.material:[mesh.material],multi=Array.isArray(mesh.material),position=source.attributes.position,index=source.index;
 let expected=0;for(const g of source.groups.length?source.groups:[{start:0,count:index?.count??position.count,materialIndex:0}])if(['Ground','ContextGround','ShoreGround'].includes(materials[multi?g.materialIndex:0].name))expected+=g.count;
 const parts=prepareLandscape(mesh,mass);let actual=0;
 for(const part of parts){const mat=part.material;if(!['Ground','ContextGround','ShoreGround'].includes(mat.name))continue;
  if(!mat.userData.campusTerrainWall)assert.equal(part.geometry.attributes.position,position,'Original surface metric vertices are retained');assert.equal(mat.depthTest,true);assert.equal(mat.transparent,false);
  if(mat.userData.campusTerrainDepth){assert.equal(mat.colorWrite,false);assert.equal(mat.depthWrite,true);assert.equal(part.renderOrder,-1);depthFaces+=part.geometry.index.count/3;}
  else{actual+=part.geometry.index.count;if(mat.userData.campusTerrainWall){
   assert.equal(mat.depthWrite,true);const vertices=part.geometry.attributes.position;
   for(const id of new Set(part.geometry.index.array)){
    const v=new Vector3().fromBufferAttribute(vertices,id).applyMatrix4(mesh.matrixWorld),grade=mass.heights.get(Math.round(v.x*1000)+','+Math.round(v.y*1000));
    if(grade!==undefined)assert.ok(Math.abs(v.z+30)<.002||v.z>=grade-.006,'Terrain edges keep their top grade or reach the shared earth base');
   }
   shellFaces+=part.geometry.index.count/3;
  }else{assert.equal(mat.depthWrite,false);assert.ok(part.renderOrder< -1,'Paint precedes the depth barrier');}}
 }
 assert.equal(actual,expected,'Physical terrain retains every side, underside and top triangle exactly once');solidFaces+=actual/3;
}
assert.ok(solidFaces&&shellFaces&&depthFaces,'Exported terrain has a closed shell and an occluding top');
// Horizontal and low-angle rays through a buried structure must meet opaque
// terrain first; road paint retains the separate stable cartographic ordering.
const scene=new Group(),ground=new Mesh(new BoxGeometry(30,30,8),new MeshBasicMaterial({name:'Ground'}));ground.position.z=2;scene.add(ground);const parts=prepareLandscape(ground);scene.updateMatrixWorld(true);
let rayCases=0;for(const elevation of [0,5,25])for(let i=0;i<8;i++){
 const angle=i*Math.PI/4,point=new Vector3(0,0,3),origin=point.clone().add(new Vector3(Math.cos(angle),Math.sin(angle),Math.tan(elevation*Math.PI/180)).multiplyScalar(100));
 const ray=new Raycaster(origin,point.clone().sub(origin).normalize());const hit=ray.intersectObjects(parts.filter(p=>p.material.depthWrite),false)[0];assert.ok(hit&&hit.distance<origin.distanceTo(point),'Buried facade is hidden at '+elevation+' degrees');rayCases++;
}
const road=new Mesh(new BoxGeometry(10,10,.1),new MeshBasicMaterial({name:'Road'}));scene.add(road);const paints=prepareLandscape(road);assert.equal(paints.length,1);assert.equal(paints[0].material.depthWrite,false);assert.ok(paints[0].renderOrder< -1);
console.log(`Terrain occlusion passed: ${solidFaces.toLocaleString()} physical faces preserved, ${shellFaces.toLocaleString()} shell faces, ${depthFaces.toLocaleString()} depth faces; ${rayCases} horizontal/low-angle directions.`);
