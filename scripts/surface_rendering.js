import {BufferGeometry,FrontSide,Matrix3,Mesh,Vector3} from 'three';

// Map surfaces are a cartographic stack. Independently draped CAD triangles
// can cross by meters; no depth bias can repair those crossings reliably.
export const SURFACE_ORDER=Object.freeze({Ground:-100,Sand:-95,Grass:-94,Garden:-93,Road:-80,Walk:-75,Paving:-70,Court:-65,Track:-64,Water:-60,Marking:-50});
export function prepareLandscape(mesh) {
  const multi=Array.isArray(mesh.material),materials=multi?mesh.material:[mesh.material];
  if(!materials.some(m=>m.name in SURFACE_ORDER))return [mesh];
  mesh.updateWorldMatrix(true,false);
  const source=mesh.geometry,position=source.getAttribute('position'),index=source.getIndex();
  const normalMatrix=new Matrix3().getNormalMatrix(mesh.matrixWorld).elements;
  const buckets=materials.map(()=>[]),a=new Vector3(),b=new Vector3(),c=new Vector3(),ab=new Vector3(),ac=new Vector3();
  const groups=source.groups.length?source.groups:[{start:0,count:index?.count??position.count,materialIndex:0}];
  for(const group of groups){
    const id=multi?group.materialIndex:0,material=materials[id],surface=material.name in SURFACE_ORDER,out=buckets[id];
    for(let i=group.start;i<group.start+group.count;i+=3){
      const ia=index?index.getX(i):i,ib=index?index.getX(i+1):i+1,ic=index?index.getX(i+2):i+2;
      if(surface){
        a.fromBufferAttribute(position,ia);b.fromBufferAttribute(position,ib);c.fromBufferAttribute(position,ic);
        ab.subVectors(b,a).cross(ac.subVectors(c,a));
        if(ab.x*normalMatrix[2]+ab.y*normalMatrix[5]+ab.z*normalMatrix[8]<=1e-10)continue;
      }
      out.push(ia,ib,ic);
    }
  }
  const result=[];
  for(let i=0;i<materials.length;i++){
    if(!buckets[i].length)continue;
    const geometry=new BufferGeometry();
    for(const [name,attribute] of Object.entries(source.attributes))geometry.setAttribute(name,attribute);
    geometry.setIndex(buckets[i]);
    const material=materials[i],part=new Mesh(geometry,material);
    part.name=mesh.name;part.position.copy(mesh.position);part.quaternion.copy(mesh.quaternion);part.scale.copy(mesh.scale);part.userData={...mesh.userData};
    part.receiveShadow=mesh.receiveShadow;part.castShadow=mesh.castShadow;
    if(material.name in SURFACE_ORDER){
      material.transparent=false;material.opacity=1;material.depthWrite=false;material.depthTest=true;material.side=FrontSide;
      part.renderOrder=SURFACE_ORDER[material.name];part.castShadow=false;
      // No polygon offset: the stack must stay stable at grazing angles too.
      material.polygonOffset=false;
    }
    result.push(part);
  }
  const parent=mesh.parent;if(parent){parent.remove(mesh);parent.add(...result);}
  return result;
}
export function stabilizeBuildingMaterial(material,detail=false) {
  material.depthTest=true;
  if(material.transparent)material.depthWrite=false;
  if(detail){material.polygonOffset=true;material.polygonOffsetFactor=0;material.polygonOffsetUnits=-2;}
}

/** Tight linear orthographic depth range, recomputed without moving the camera. */
export function updateCampusDepthRange(camera,bounds) {
  if(!camera||!bounds||bounds.isEmpty())return;
  const direction=camera.getWorldDirection(new Vector3());let low=Infinity,high=-Infinity;
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
    const depth=new Vector3(x,y,z).sub(camera.position).dot(direction);low=Math.min(low,depth);high=Math.max(high,depth);
  }
  const margin=Math.max(2,(high-low)*.01),near=Math.max(.01,low-margin),far=Math.max(near+1,high+margin);
  if(Math.abs(camera.near-near)>1e-6||Math.abs(camera.far-far)>1e-6){camera.near=near;camera.far=far;camera.updateProjectionMatrix();}
}

/** Apply the same section to visible surfaces and the shadow casters. */
export function setCampusClipping(renderer,campus,plane=null) {
  renderer.clippingPlanes=[];renderer.localClippingEnabled=true;
  campus?.traverse(object=>{
    if(!object.material)return;
    for(const material of Array.isArray(object.material)?object.material:[object.material]){
      const count=material.clippingPlanes?.length||0;
      material.clippingPlanes=plane?[plane]:null;material.clipShadows=true;
      if(count!==(plane?1:0))material.needsUpdate=true;
    }
  });
  renderer.shadowMap.needsUpdate=true;
}
