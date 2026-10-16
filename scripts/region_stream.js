import * as THREE from 'three';
import {applyTerrainLighting,createTerrainLighting} from './terrain_lighting.js';
import {stabilizeBuildingMaterial,stabilizeCampusShadows} from './surface_rendering.js';
import {chooseRegions,regionLimits} from './region_policy.js';

const pause=()=>new Promise(resolve=>setTimeout(resolve,0));
const decoder=new TextDecoder();
export function parseRegionPacket(buffer){
 const bytes=buffer instanceof Uint8Array?buffer:new Uint8Array(buffer),view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),length=view.getUint32(0,true);
 if(length<2||length>bytes.byteLength-4)throw new Error('Invalid regional model header');
 const header=JSON.parse(decoder.decode(bytes.subarray(4,4+length))),start=4+length;
 const read=(range,Type)=>{const[offset,size]=range;if(offset<0||size<0||start+offset+size>bytes.byteLength||size%Type.BYTES_PER_ELEMENT)throw new Error('Invalid regional model buffer');return new Type(bytes.buffer,bytes.byteOffset+start+offset,size/Type.BYTES_PER_ELEMENT);};
 return {header,read};
}
export async function inflateRegion(bytes){return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer());}
async function decodeBase64(text,report=()=>{}){const bytes=new Uint8Array(text.length/4*3-(text.endsWith('==')?2:text.endsWith('=')?1:0));let at=0;for(let i=0;i<text.length;i+=262144){const s=atob(text.slice(i,i+262144));for(let j=0;j<s.length;j++)bytes[at++]=s.charCodeAt(j);report({phase:'decode',loaded:at,total:bytes.length});await pause();}return bytes;}
export async function readRegionAsset(asset,inline,report=()=>{},signal){
 let bytes;
 if(inline?.[asset.id])bytes=await decodeBase64(inline[asset.id],report);
 else if(location.protocol==='file:'){
  // One in-flight script, no permanent decoded cache. A local HTML can load
  // classic scripts without fetch/file-origin permissions or a server.
  const value=await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=asset.local;s.onload=()=>{s.remove();const text=window.__UMICH_REGION__;delete window.__UMICH_REGION__;typeof text==='string'?resolve(text):reject(new Error('Empty regional model'));};s.onerror=()=>{s.remove();reject(new Error('Local regional model unavailable'));};document.head.append(s);});bytes=await decodeBase64(value,report);
 }else{
  const response=await fetch(asset.url,{signal});if(!response.ok)throw new Error('Regional model HTTP '+response.status);
  const chunks=[];let loaded=0;const reader=response.body?.getReader();
  if(reader){while(true){const{done,value}=await reader.read();if(done)break;chunks.push(value);loaded+=value.length;report({phase:'read',loaded,total:asset.transferBytes});}bytes=new Uint8Array(loaded);let offset=0;for(const b of chunks){bytes.set(b,offset);offset+=b.length;}}
  else bytes=new Uint8Array(await response.arrayBuffer());
 }
 if(bytes.length!==asset.transferBytes)throw new Error('Regional model length mismatch');
 if(globalThis.crypto?.subtle){const hash=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(x=>x.toString(16).padStart(2,'0')).join('');if(hash!==asset.sha256)throw new Error('Regional model integrity mismatch');}
 return bytes;
}

export function createRegionStream({data,parent,renderer,camera,host,onChange=()=>{},report=()=>{},viewTarget=()=>null,mobile=matchMedia('(pointer:coarse)').matches||innerWidth<=760}){
 const manifest=data.regions,root=new THREE.Group();root.name='Regional campus LOD';parent.add(root);
 const base=new Map(),resident=new Map(),materials=new Map(),limits=regionLimits(mobile),codes=manifest.ownerCodes,neighborCodes=new Set((data.neighbors||[]).map(r=>r.code)),codeIds=new Map(codes.map((code,i)=>[code,i+1])),field=createTerrainLighting(data.groundGrid);
 const texWidth=256,texHeight=Math.ceil((codes.length+1)/texWidth),pixels=new Uint8Array(texWidth*texHeight).fill(255),texture=new THREE.DataTexture(pixels,texWidth,texHeight,THREE.RedFormat,THREE.UnsignedByteType);texture.minFilter=texture.magFilter=THREE.NearestFilter;texture.needsUpdate=true;
 const regionPixels=new Uint8Array(256*Math.ceil((manifest.tiles.length+1)/256)).fill(255),regionTexture=new THREE.DataTexture(regionPixels,256,regionPixels.length/256,THREE.RedFormat,THREE.UnsignedByteType);regionTexture.minFilter=regionTexture.magFilter=THREE.NearestFilter;regionTexture.needsUpdate=true;
 const regionIds=new Map(manifest.tiles.map((t,i)=>[t.key,t.regionId||i+1]));
 const uniforms={campusRegions:{value:regionTexture},campusRegionSize:{value:new THREE.Vector2(256,regionPixels.length/256)},campusVisibility:{value:texture},campusVisibilitySize:{value:new THREE.Vector2(texWidth,texHeight)},campusSelected:{value:0},campusCut:{value:100000},campusDetailDenom:{value:1}};
 let environment=true,details=true,neighbors=true,selected=null,states=null,desired=[],wanted=new Set(),timer=null,loading=null,disposed=false,serial=0,lastView='';
 const box=b=>new THREE.Box3(new THREE.Vector3(...b.slice(0,3)),new THREE.Vector3(...b.slice(3))),boxes=new Map(manifest.tiles.map(t=>[t.key,box(t.bounds)]));
 function patch(material,detail=false,depth=false){
  const before=material.onBeforeCompile,cache=material.customProgramCacheKey();
  material.onBeforeCompile=function(shader,renderer){before.call(this,shader,renderer);Object.assign(shader.uniforms,uniforms);
   shader.vertexShader='attribute float campusFeature;\nattribute float campusRegion;\nvarying float vCampusRegion;\nvarying float vCampusFeature;\nvarying float vCampusWorldZ;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvCampusFeature=campusFeature;vCampusRegion=campusRegion;');
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
    vec4 campusPosition=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     campusPosition=instanceMatrix*campusPosition;
    #endif
    vCampusWorldZ=(modelMatrix*campusPosition).z;`);
   shader.fragmentShader='varying float vCampusRegion;\nuniform sampler2D campusRegions;\nuniform vec2 campusRegionSize;\nvarying float vCampusFeature;\nvarying float vCampusWorldZ;\nuniform sampler2D campusVisibility;\nuniform vec2 campusVisibilitySize;\nuniform float campusSelected;\nuniform float campusCut;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>
    float regionId=floor(vCampusRegion+0.5);
    vec2 regionUV=(vec2(mod(regionId,campusRegionSize.x),floor(regionId/campusRegionSize.x))+0.5)/campusRegionSize;
    if(texture2D(campusRegions,regionUV).r<0.5)discard;
    float campusId=floor(vCampusFeature+0.5);
    vec2 campusUV=(vec2(mod(campusId,campusVisibilitySize.x),floor(campusId/campusVisibilitySize.x))+0.5)/campusVisibilitySize;
    if(texture2D(campusVisibility,campusUV).r<0.5 || vCampusWorldZ>campusCut)discard;`);
   if(!depth)shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nif(campusId>0.5 && abs(campusId-campusSelected)<0.5)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(0.95,0.65,0.08),0.32);');
  };material.customProgramCacheKey=()=>cache+'|umich-regions-v1|'+depth;
 }
 function materialFor(e,depth=false){
  const key=[e.mat,e.kind,e.detail,e.rank,depth].join('|');if(materials.has(key))return materials.get(key);
  const color=e.mat==='__VertexColor'?new THREE.Color(0xffffff):e.mat==='__RoofCap'?new THREE.Color(0x727a75):new THREE.Color().setRGB(...(data.palette[e.mat]||[160,160,150]).map(v=>v/255),THREE.SRGBColorSpace);
  const material=depth?new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking}):e.kind==='shell'?new THREE.MeshBasicMaterial({color:color.clone().lerp(new THREE.Color(0x7a826a),.24),side:THREE.DoubleSide}):new THREE.MeshPhongMaterial({color,vertexColors:e.mat==='__VertexColor',flatShading:true,shininess:e.mat==='Glass'?25:0,specular:e.mat==='Glass'?0x222222:0});
  material.name=e.mat;
  if(!depth){stabilizeBuildingMaterial(material,e.detail);if(e.rank&&material.userData.campusDetailRank)material.userData.campusDetailRank=e.rank;stabilizeCampusShadows(material);if(e.kind==='surface'){material.depthWrite=false;applyTerrainLighting(material,field);}if(e.kind==='shell')material.depthWrite=true;}
  patch(material,e.detail,depth);materials.set(key,material);return material;
 }
 function makeGeometry(e,p){
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p.read(e.position,Float32Array),3));g.setAttribute('normal',new THREE.BufferAttribute(p.read(e.normal,Int8Array),3,true));g.setIndex(new THREE.BufferAttribute(p.read(e.index,Uint32Array),1));
  if(e.region)g.setAttribute('campusRegion',new THREE.BufferAttribute(p.read(e.region,Uint16Array),1));
  if(e.color)g.setAttribute('color',new THREE.BufferAttribute(p.read(e.color,Uint8Array),3,true));
  if(e.feature)g.setAttribute('campusFeature',new THREE.BufferAttribute(p.read(e.feature,Uint16Array),1));
  return g;
 }
 async function makeCell(bytes){
  const p=parseRegionPacket(await inflateRegion(bytes)),group=new THREE.Group();let last=performance.now();
  for(const e of p.header.entries){
   const geometry=makeGeometry(e,p);let mesh,isBuilding=e.kind==='building';
   if(e.kind==='instance'){
    const values=p.read(e.instances,Float32Array),stride=e.instanceStride||7,count=values.length/stride;mesh=new THREE.InstancedMesh(geometry,materialFor(e),count);const feature=new Float32Array(count),regions=new Float32Array(count),matrix=new THREE.Matrix4();
    for(let i=0;i<count;i++){const off=i*stride;matrix.makeScale(values[off+3],values[off+4],values[off+5]);matrix.setPosition(values[off],values[off+1],values[off+2]);mesh.setMatrixAt(i,matrix);feature[i]=values[off+6];regions[i]=stride>7?values[off+7]:0;}
    geometry.setAttribute('campusFeature',new THREE.InstancedBufferAttribute(feature,1));geometry.setAttribute('campusRegion',new THREE.InstancedBufferAttribute(regions,1));mesh.instanceMatrix.needsUpdate=true;isBuilding=feature[0]>0;mesh.computeBoundingSphere();
   }else mesh=new THREE.Mesh(geometry,materialFor(e));
   mesh.userData={...e,building:isBuilding};mesh.renderOrder=e.order;mesh.receiveShadow=e.kind!=='shell';mesh.castShadow=isBuilding||e.mat.includes('Leaves')||e.mat==='Trunk';mesh.customDepthMaterial=materialFor(e,true);group.add(mesh);
   if(e.kind==='surface'&&['Ground','ContextGround','Water'].includes(e.mat)){
    const d={...e,kind:'occluder'};const depthMaterial=materialFor(d);depthMaterial.colorWrite=false;depthMaterial.depthWrite=true;depthMaterial.side=THREE.DoubleSide;
    const occluder=new THREE.Mesh(geometry,depthMaterial);occluder.renderOrder=-1;occluder.userData={...e,building:false};group.add(occluder);
   }
   if(performance.now()-last>6){await pause();last=performance.now();}
  }
  group.userData.bounds=box(p.header.bounds);applyOptions(group);return group;
 }
 function applyOptions(group){for(const m of group.children)m.visible=(!m.userData.neighbor||neighbors)&&(m.userData.building||environment)&&(!m.userData.detail||details);}
 function release(group){group.removeFromParent();const geometries=new Set();group.traverse(m=>{if(m.geometry)geometries.add(m.geometry);if(m.isInstancedMesh)m.dispose();});for(const g of geometries)g.dispose();group.clear();}
 async function initialize(){
  const bytes=await readRegionAsset(manifest.base,data.inlineRegions,report);const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),length=view.getUint32(0,true),index=JSON.parse(decoder.decode(bytes.subarray(4,4+length))),start=4+length;
  for(let i=0;i<index.length;i++){const t=index[i],cell=await makeCell(bytes.subarray(start+t.offset,start+t.offset+t.length));base.set(t.key,cell);root.add(cell);report({phase:'scene',loaded:i+1,total:index.length});}
  refreshStats();return root;
 }
 function setState({buildings,selected:nextSelected,environment:env,details:det,neighbors:near,cut}){
  lastView='';states=buildings;selected=nextSelected;environment=env;details=det;neighbors=near;uniforms.campusSelected.value=codeIds.get(selected)||0;uniforms.campusCut.value=cut??100000;
  pixels.fill(255);for(let i=0;i<codes.length;i++)if(buildings.get(codes[i])?.visible===false||neighborCodes.has(codes[i])&&!neighbors)pixels[i+1]=0;
  texture.needsUpdate=true;for(const group of [...base.values(),...[...resident.values()].map(x=>x.group)])applyOptions(group);
 }
 const frustum=new THREE.Frustum(),matrix=new THREE.Matrix4();
 function updateView(){
  if(!base.size||disposed)return;
  for(const mat of materials.values())if(mat.userData.campusDetailBias)mat.userData.campusDetailBias.value=.03*(mat.userData.campusDetailRank||2)/(camera.far-camera.near)+2*(mat.userData.campusDetailRank||2)/(2**24-1);
  camera.updateMatrixWorld();matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(matrix);
  for(const[key,g]of base)g.visible=frustum.intersectsBox(g.userData.bounds);
  for(const[key,cell]of resident)cell.group.visible=frustum.intersectsBox(cell.group.userData.bounds);
  const signature=matrix.elements.map(x=>x.toFixed(7)).join(',');if(signature===lastView)return;lastView=signature;
  clearTimeout(timer);timer=setTimeout(plan,160);
 }
 function plan(){
  if(disposed)return;camera.updateMatrixWorld();matrix.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);frustum.setFromProjectionMatrix(matrix);
  const mpp=(camera.top-camera.bottom)/camera.zoom/Math.max(1,host.clientHeight),record=selected&&[...data.records,...(data.neighbors||[])].find(r=>r.code===selected),focusKey=record?Math.floor(record.center[0]/manifest.cellSize)+'_'+Math.floor(record.center[1]/manifest.cellSize):null;
  // Avoid high detail for groups explicitly hidden by isolate/neighborhood state.
  desired=chooseRegions(manifest.tiles,{mpp,focusKey,visible:t=>(neighbors||!t.neighborOnly)&&frustum.intersectsBox(boxes.get(t.key)),resident:new Set(resident.keys()),center:record?.center||groundCenter(),limits});wanted=new Set(desired.map(t=>t.key));serial++;
  if(loading&&!wanted.has(loading.key))loading.controller.abort();
  let evicted=false;for(const[key,cell]of resident)if(!wanted.has(key)){evicted=true;release(cell.group);resident.delete(key);regionPixels[regionIds.get(key)]=255;regionTexture.needsUpdate=true;}
  refreshStats();pump();if(evicted){renderer.shadowMap.needsUpdate=true;onChange();}
 }
 function groundCenter(){const target=viewTarget();if(target)return[target.x,target.y];const p=new THREE.Vector3();camera.getWorldDirection(p);const d=Math.abs(p.z)>.01?(50-camera.position.z)/p.z:0;return[camera.position.x+p.x*d,camera.position.y+p.y*d];}
 async function pump(){
  if(loading||disposed)return;
  const tile=desired.find(t=>!resident.has(t.key)&&!(t.retryAt>Date.now()));if(!tile)return;
  loading={key:tile.key,controller:new AbortController()};
  try{
   const bytes=await readRegionAsset(tile,data.inlineRegions,()=>{},loading.controller.signal);
   if(!wanted.has(tile.key)||disposed)return;
   const group=await makeCell(bytes);
   if(!wanted.has(tile.key)||disposed){release(group);return;}
   root.add(group);resident.set(tile.key,{group,tile});regionPixels[regionIds.get(tile.key)]=0;regionTexture.needsUpdate=true;
   renderer.shadowMap.needsUpdate=true;refreshStats();onChange();
  }catch(error){if(error.name!=='AbortError'){tile.retryAt=Date.now()+30000;console.warn('Regional detail unavailable; overview retained.',tile.key,error.message);}}
  finally{loading=null;if(!disposed)pump();}
 }
 function pick(raycaster){
  const hits=[];for(const cell of [...base.values(),...[...resident.values()].map(x=>x.group)]){if(!cell.visible||!raycaster.ray.intersectsBox(cell.userData.bounds))continue;const meshes=cell.children.filter(m=>m.visible&&m.userData.building);hits.push(...raycaster.intersectObjects(meshes,false));}
  hits.sort((a,b)=>a.distance-b.distance);
  for(const hit of hits){const attr=hit.object.geometry.getAttribute('campusFeature'),region=hit.object.geometry.getAttribute('campusRegion'),vertex=hit.instanceId??hit.face.a,id=attr.getX(vertex);if(region&&regionPixels[region.getX(vertex)]===0)continue;if(id>0&&pixels[id]&&hit.point.z<=uniforms.campusCut.value)return codes[id-1];}return null;
 }

 function refreshStats(){host.dataset.modelRegions=String(resident.size);host.dataset.modelDetailBytes=String([...resident.values()].reduce((a,x)=>a+x.tile.gpuBytes,0));host.dataset.modelDetailLimit=String(limits.bytes);host.dataset.modelOverviewTriangles=String(manifest.base.triangles);}
 function dispose(){disposed=true;clearTimeout(timer);loading?.controller.abort();for(const g of base.values())release(g);for(const c of resident.values())release(c.group);for(const m of materials.values())m.dispose();texture.dispose();regionTexture.dispose();field?.texture.dispose();root.removeFromParent();}
 return {initialize,setState,updateView,pick,dispose,limits};
}
