import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Box3,Vector3,OrthographicCamera,Group,Mesh,BufferGeometry,Float32BufferAttribute,BoxGeometry,MeshPhongMaterial} from 'three';
import {CampusTDSLoader} from './campus_tds_loader.js';
import {prepareLandscape,prepareBuildingRoofs,SURFACE_ORDER,stabilizeBuildingMaterial,updateCampusDepthRange} from './surface_rendering.js';
const name=['UMich_AnnArbor','UChicago_HydePark','XJTU_InnovationHarbour'].find(n=>{try{readFileSync(new URL(`../output/${n}.3ds`,import.meta.url));return true;}catch{return false;}});
const bytes=readFileSync(new URL(`../output/${name}.3ds`,import.meta.url));
const campus=new CampusTDSLoader().parse(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');campus.updateMatrixWorld(true);
const layers=JSON.parse(readFileSync(new URL('../output/layer_map.json',import.meta.url),'utf8'));
const meshes=[];campus.traverse(m=>{if(m.isMesh&&layers[m.name]?.category==='environment')meshes.push(m);});
let skins=0,triangles=0,structures=0;
for(const mesh of meshes){
 const original=mesh.geometry,position=original.attributes.position,arrayHash=createHash('sha256').update(position.array).digest('hex'),world=mesh.matrixWorld.clone();
 const originalNormalHash=createHash('sha256').update(original.attributes.normal.array).digest('hex');
 const materialNames=(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(m=>m.name);
 const parts=prepareLandscape(mesh);assert.ok(parts.length);campus.updateMatrixWorld(true);
 for(const part of parts){
  assert.deepEqual(part.matrixWorld.elements,world.elements,'Surface transformation remains georeferenced');
  assert.equal(createHash('sha256').update(part.geometry.attributes.position.array).digest('hex'),arrayHash,'No vertex is raised or flattened');
  const mat=Array.isArray(part.material)?part.material[0]:part.material;
  if(mat.name in SURFACE_ORDER){
   skins++;assert.equal(mat.flatShading,false);assert.notEqual(part.geometry.attributes.normal,original.attributes.normal,'Smooth lighting uses an independent normal attribute');assert.equal(mat.depthWrite,false);assert.equal(mat.depthTest,true);assert.equal(mat.transparent,false);assert.equal(part.renderOrder,SURFACE_ORDER[mat.name]);assert.equal(part.castShadow,false);
   const index=part.geometry.index,a=new Vector3(),b=new Vector3(),c=new Vector3();
   for(let i=0;i<index.count;i+=3){a.fromBufferAttribute(position,index.getX(i)).applyMatrix4(world);b.fromBufferAttribute(position,index.getX(i+1)).applyMatrix4(world);c.fromBufferAttribute(position,index.getX(i+2)).applyMatrix4(world);assert.ok(b.sub(a).cross(c.sub(a)).z>0,'Bottoms and extrusion seams must not overpaint map skins');}
   triangles+=index.count/3;
  }else{structures++;assert.equal(part.geometry,original,'Trees, walls and furniture retain closed geometry');}
 }
 assert.equal(createHash('sha256').update(original.attributes.normal.array).digest('hex'),originalNormalHash,'CAD-imported normals remain untouched');
 assert.deepEqual(materialNames.sort(),[...new Set(parts.flatMap(p=>(Array.isArray(p.material)?p.material:[p.material]).map(m=>m.name)))].sort());
}
assert.ok(skins>0);assert.ok(structures>0);assert.ok(SURFACE_ORDER.Ground<SURFACE_ORDER.Road&&SURFACE_ORDER.Road<SURFACE_ORDER.Marking);
const bounds=new Box3().setFromObject(campus),center=bounds.getCenter(new Vector3()),diagonal=bounds.getSize(new Vector3()).length();
let cases=0;
for(const tilt of [.1,.65,1.1])for(let bearing=0;bearing<16;bearing++){
 const camera=new OrthographicCamera(-1000,1000,700,-700,.1,100000);camera.up.set(0,0,1);
 const back=new Vector3(Math.cos(bearing*Math.PI/8)*Math.sin(tilt),Math.sin(bearing*Math.PI/8)*Math.sin(tilt),Math.cos(tilt));camera.position.copy(center).addScaledVector(back,diagonal*1.5);camera.lookAt(center);camera.updateMatrixWorld(true);
 const before=center.clone().project(camera);updateCampusDepthRange(camera,bounds);const after=center.clone().project(camera);
 assert.ok(Math.abs(before.x-after.x)<1e-10&&Math.abs(before.y-after.y)<1e-10,'Depth refit must not move or zoom the map');assert.ok(camera.near>0&&camera.far>camera.near);
 for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])assert.ok(Math.abs(new Vector3(x,y,z).project(camera).z)<1,'All model geometry must remain inside the depth range');
 assert.ok(camera.far-camera.near<diagonal*1.03+4);cases++;
}
// Multi-material models must split map skins without deleting a retaining wall.
const mixed=new Mesh(new BoxGeometry(10,10,10),Array.from({length:6},(_,i)=>new MeshPhongMaterial({name:i<4?'LightStone':'Road'})));new Group().add(mixed);const parts=prepareLandscape(mixed);assert.ok(parts.some(m=>m.material.name==='Road'));assert.ok(parts.some(m=>m.material.name==='LightStone'));
const single=new Mesh(new BoxGeometry(10,10,10),new MeshPhongMaterial({name:'Ground'}));new Group().add(single);assert.equal(prepareLandscape(single).length,1,'Single materials ignore geometry material indices, as WebGLRenderer does');
const seamGeometry=new BufferGeometry();seamGeometry.setAttribute('position',new Float32BufferAttribute([0,0,0,.001,10,10,0,10,0,0,0,10,10,0,10,0,10,10],3));seamGeometry.setIndex([0,1,2,3,4,5]);seamGeometry.computeVertexNormals();const seamMesh=new Mesh(seamGeometry,new MeshPhongMaterial({name:'Grass'}));new Group().add(seamMesh);const seamParts=prepareLandscape(seamMesh);assert.equal(seamParts[0].geometry.index.count,3,'Rounded extrusion side faces must never paint map skins');
const glass=new MeshPhongMaterial({transparent:true,opacity:.73});stabilizeBuildingMaterial(glass,true);assert.equal(glass.depthWrite,false);assert.equal(glass.depthTest,true);assert.equal(glass.opacity,.73);
const body=new MeshPhongMaterial();stabilizeBuildingMaterial(body);assert.equal(body.depthWrite,true);assert.equal(body.depthTest,true);
let roofCaps=0;
const buildingMeshes=[];campus.traverse(m=>{if(m.isMesh&&layers[m.name]?.category!=='environment')buildingMeshes.push(m);});
const groundByLayer=new Map();for(const mesh of buildingMeshes){const layer=layers[mesh.name]?.layer,z=new Box3().setFromObject(mesh).min.z;groundByLayer.set(layer,Math.min(groundByLayer.get(layer)??Infinity,z));}
for(const mesh of buildingMeshes){
 const original=mesh.geometry,hash=createHash('sha256').update(original.attributes.position.array).digest('hex'),count=original.index?.count??original.attributes.position.count,originalBox=new Box3().setFromObject(mesh);
 const wallColors=new Map((Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(m=>[m.name,m.color.getHex()]));
 const ground=groundByLayer.get(layers[mesh.name]?.layer),parts=prepareBuildingRoofs(mesh,ground,mesh.name.includes('D'),false);let faces=0;
 for(const part of parts){assert.equal(createHash('sha256').update(part.geometry.attributes.position.array).digest('hex'),hash,'Roof coloring retains original positions');faces+=part.geometry.index?.count??part.geometry.attributes.position.count;for(const material of Array.isArray(part.material)?part.material:[part.material])if(material.userData.campusRoof){roofCaps++;assert.equal(material.color.getHex(),0x727a75);assert.equal(material.depthTest,true);}else assert.equal(material.color.getHex(),wallColors.get(material.name),'Walls and stone trim retain their colors');assert.ok(new Box3().setFromObject(part).equals(originalBox),'Roof coloring retains mesh bounds');}
 assert.equal(faces,count,'Roof coloring retains every original triangle exactly once');
}
console.log(`Rendering passed: ${skins} map skins / ${triangles.toLocaleString()} upward triangles, ${structures} unchanged structural meshes, stable material ordering, transparent/details occlusion and ${cases} tight depth-frustum cases.`);
console.log(`Roof color checks passed: ${roofCaps} neutral hidden body caps; designed roof finishes preserved, unchanged triangle membership and georeferenced positions.`);
