import {parseGLBMeshes,inflateGLB} from './glb_model.js';
self.onmessage=async({data})=>{
 try{
  const request=data instanceof ArrayBuffer?{bytes:data}:data;
  let bytes=await inflateGLB(new Uint8Array(request.bytes));
  if(request.action==='download'){self.postMessage({type:'download',blob:new Blob([bytes],{type:'model/gltf-binary'})});return;}
  const result=await parseGLBMeshes(bytes,event=>self.postMessage({type:'progress',...event}));bytes=null;
  const transfers=new Set();for(const mesh of result.meshes){for(const a of Object.values(mesh.attributes))transfers.add(a.array.buffer);if(mesh.index)transfers.add(mesh.index.buffer);}
  self.postMessage({type:'result',...result},[...transfers]);
 }catch(error){self.postMessage({type:'error',message:error.message});}
};
