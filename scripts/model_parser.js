import {BufferAttribute,BufferGeometry,Group,MaterialLoader,Matrix4,Mesh} from 'three';
import {CampusTDSLoader} from './campus_tds_loader.js';
import workerSource from '../tmp/model-worker.bundle.txt';
export const nextPaint=()=>new Promise(resolve=>requestAnimationFrame(()=>resolve()));
export async function parseCampusModel(bytes, report=()=>{}) {
  report({phase:'parse',loaded:0,total:bytes.byteLength});
  await nextPaint();
  const fallback=()=>{const group=new CampusTDSLoader().parse(bytes.buffer,'');if(!group.children.some(x=>x.isMesh))throw new Error('Model contains no geometry');report({phase:'parse',loaded:bytes.byteLength,total:bytes.byteLength});return group;};
  if(typeof Worker==='undefined')return fallback();
  let worker;
  const url=URL.createObjectURL(new Blob([workerSource],{type:'text/javascript'}));
  try { worker=new Worker(url); }
  catch {
    URL.revokeObjectURL(url);
    return fallback();
  }
  let result;
  try{result=await new Promise((resolve,reject)=>{
    worker.onmessage=({data})=>{
      if (data.type==='progress') report({phase:'parse',loaded:data.loaded,total:data.total});
      else if (data.type==='result') resolve(data);
      else if (data.type==='error') reject(new Error(data.message));
    };
    worker.onerror=event=>{event.preventDefault?.();reject(new Error(event.message||'Geometry worker failed'));};
    const copy=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
    worker.postMessage(copy,[copy]);
  }).finally(()=>{worker.terminate();URL.revokeObjectURL(url);});}catch{return fallback();}
  report({phase:'parse',loaded:bytes.byteLength,total:bytes.byteLength});
  const group=new Group(), loader=new MaterialLoader(), materials=result.materials.map(json=>loader.parse(json));
  for (let i=0;i<result.meshes.length;i++) {
    const item=result.meshes[i],geometry=new BufferGeometry();
    for (const [name,a] of Object.entries(item.attributes)) geometry.setAttribute(name,new BufferAttribute(a.array,a.itemSize,a.normalized));
    if (item.index) geometry.setIndex(new BufferAttribute(item.index,1));
    for (const g of item.groups) geometry.addGroup(g.start,g.count,g.materialIndex);
    const mesh=new Mesh(geometry,item.multi?item.materials.map(id=>materials[id]):materials[item.materials[0]]);
    mesh.name=item.name; new Matrix4().fromArray(item.matrix).decompose(mesh.position,mesh.quaternion,mesh.scale); group.add(mesh);
    if (i%32===0) { report({phase:'scene',loaded:i,total:result.meshes.length*2}); await nextPaint(); }
  }
  return group;
}
