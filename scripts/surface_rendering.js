import {BufferGeometry,FrontSide,Matrix3,Mesh,Vector3,ShaderChunk} from 'three';

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
  if(detail){
    // Roof accents and the underlying metal sheet can be exactly coplanar.
    // Separate their depth priorities, without moving CAD vertices.
    material.userData.campusDetailRank={Metal:1,Slate:1,Concrete:3,LightStone:3}[material.name]??2;
    // Polygon-offset units vary between fixed and floating-point depth buffers.
    // Apply a small linear orthographic bias directly in clip space instead.
    const uniform={value:0};material.userData.campusDetailBias=uniform;
    const previous=material.onBeforeCompile,previousKey=material.customProgramCacheKey();
    material.onBeforeCompile=function(shader,renderer){
      previous.call(this,shader,renderer);shader.uniforms.campusDetailBias=uniform;
      shader.vertexShader='uniform float campusDetailBias;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\ngl_Position.z -= 2.0 * campusDetailBias * gl_Position.w;');
    };
    material.customProgramCacheKey=()=>previousKey+'|campus-detail-depth-v1';
    material.polygonOffset=false;
  }
}

/** Color roof caps separately from walls, stone trim and ground-level concrete. */
export function prepareBuildingRoofs(mesh,groundZ=0,detail=false,uniformFlatRoof=false) {
  const multi=Array.isArray(mesh.material),materials=multi?mesh.material:[mesh.material];
  const finishedRoof=material=>['Metal','Slate'].includes(material.name)||material.name.endsWith('Roof');
  const eligible=material=>!material.transparent&&material.name!=='Glass'&&(finishedRoof(material)?uniformFlatRoof:(!detail||material.name==='Concrete'));
  if(!materials.some(eligible))return [mesh];
  mesh.updateWorldMatrix(true,false);
  const source=mesh.geometry,position=source.attributes.position,index=source.index;
  const normalMatrix=new Matrix3().getNormalMatrix(mesh.matrixWorld),a=new Vector3(),b=new Vector3(),c=new Vector3(),normal=new Vector3();
  const buckets=materials.map(()=>({wall:[],roof:[]}));
  for(const group of source.groups.length?source.groups:[{start:0,count:index?.count??position.count,materialIndex:0}]){
    const id=multi?group.materialIndex:0;
    for(let i=group.start;i<group.start+group.count;i+=3){
      const ia=index?index.getX(i):i,ib=index?index.getX(i+1):i+1,ic=index?index.getX(i+2):i+2;
      a.fromBufferAttribute(position,ia);b.fromBufferAttribute(position,ib);c.fromBufferAttribute(position,ic);
      normal.subVectors(b,a).cross(c.clone().sub(a)).applyMatrix3(normalMatrix).normalize();
      const z=a.clone().add(b).add(c).multiplyScalar(1/3).applyMatrix4(mesh.matrixWorld).z;
      const roof=eligible(materials[id])&&normal.z>(finishedRoof(materials[id])?.99:.7)&&z>groundZ+3;
      buckets[id][roof?'roof':'wall'].push(ia,ib,ic);
    }
  }
  if(!buckets.some(bucket=>bucket.roof.length))return [mesh];
  const parts=[];
  for(let id=0;id<materials.length;id++)for(const kind of ['wall','roof']){
    if(!buckets[id][kind].length)continue;
    const geometry=new BufferGeometry();for(const [name,attribute] of Object.entries(source.attributes))geometry.setAttribute(name,attribute);geometry.setIndex(buckets[id][kind]);
    let material=materials[id];
    if(kind==='roof'){
      material=material.clone();material.color.setHex(0x657078);material.shininess=0;material.specular?.set(0);material.userData.campusRoof=true;
      stabilizeBuildingMaterial(material,detail);stabilizeCampusShadows(material);
    }
    const part=new Mesh(geometry,material);part.name=mesh.name;part.position.copy(mesh.position);part.quaternion.copy(mesh.quaternion);part.scale.copy(mesh.scale);part.userData={...mesh.userData};part.castShadow=mesh.castShadow;part.receiveShadow=mesh.receiveShadow;parts.push(part);
  }
  if(mesh.parent){const parent=mesh.parent;parent.remove(mesh);parent.add(...parts);}
  return parts;
}

/** Depth bias in meters, plus distinct representable steps for coplanar details. */
export function updateCampusDetailDepth(camera,campus,depthBits=24) {
  const depthStep=1/(2**depthBits-1);
  campus?.traverse(mesh=>{
    if(!mesh.material)return;
    for(const material of Array.isArray(mesh.material)?mesh.material:[mesh.material]){
      const rank=material.userData.campusDetailRank;
      // Include a physical separation between ranks, not just depth-buffer
      // steps: independently triangulated georeferenced sheets also incur
      // float32 vertex/interpolation error before depth quantization.
      if(rank)material.userData.campusDetailBias.value=.03*rank/(camera.far-camera.near)+2*rank*depthStep;
    }
  });
}

// A fixed PCF kernel avoids Three's screen-pixel random rotation. Receiver-plane
// depth correction keeps neighboring shadow samples on the same roof plane.
const stableShadow=/* glsl */`
float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
  shadowCoord.xyz /= shadowCoord.w;
  vec3 dx=dFdx(shadowCoord.xyz),dy=dFdy(shadowCoord.xyz);
  float determinant=dx.x*dy.y-dx.y*dy.x;
  vec2 gradient=vec2(0.0);
  if(abs(determinant)>1e-16)gradient=clamp(vec2(dx.z*dy.y-dy.z*dx.y,dy.z*dx.x-dx.z*dy.x)/determinant,vec2(-8.0),vec2(8.0));
  vec2 texel=1.0/shadowMapSize;
  float z=shadowCoord.z+shadowBias-dot(abs(gradient),texel)*0.55;
  if(any(lessThan(shadowCoord.xy,vec2(0.0)))||any(greaterThan(shadowCoord.xy,vec2(1.0)))||shadowCoord.z>1.0)return 1.0;
  float shadow=0.0;
  for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++){
    vec2 offset=vec2(float(x),float(y))*texel*shadowRadius;
    shadow+=texture(shadowMap,vec3(shadowCoord.xy+offset,z+dot(gradient,offset)));
  }
  return mix(1.0,shadow/9.0,shadowIntensity);
}
`;
const stableShadowChunk=ShaderChunk.shadowmap_pars_fragment.replace(/float getShadow\( sampler2DShadow shadowMap,[\s\S]*?(?=\n\s*#elif defined\( SHADOWMAP_TYPE_VSM \))/,stableShadow);
export function stabilizeCampusShadows(material) {
  const previous=material.onBeforeCompile,previousKey=material.customProgramCacheKey();
  material.onBeforeCompile=function(shader,renderer){
    previous.call(this,shader,renderer);
    shader.fragmentShader=shader.fragmentShader.replace('#include <shadowmap_pars_fragment>',stableShadowChunk);
  };
  material.customProgramCacheKey=()=>previousKey+'|campus-receiver-plane-pcf-v1';
}

/** A fixed sun volume fitted once to the campus, independent of user navigation. */
export function fitCampusSun(sun,bounds) {
  sun.shadow.updateMatrices(sun);
  const camera=sun.shadow.camera,viewBounds=bounds.clone().applyMatrix4(camera.matrixWorldInverse);
  const margin=Math.max(2,viewBounds.getSize(new Vector3()).length()*.005);
  camera.left=viewBounds.min.x-margin;camera.right=viewBounds.max.x+margin;
  camera.bottom=viewBounds.min.y-margin;camera.top=viewBounds.max.y+margin;
  camera.near=Math.max(.01,-viewBounds.max.z-margin);camera.far=Math.max(camera.near+1,-viewBounds.min.z+margin);
  camera.updateProjectionMatrix();
  sun.shadow.bias=-.03/(camera.far-camera.near);sun.shadow.normalBias=0;
  sun.shadow.needsUpdate=true;
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
