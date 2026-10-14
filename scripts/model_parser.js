import {BufferAttribute,BufferGeometry,Group,MaterialLoader,Matrix4,Mesh} from 'three';
import {CampusTDSLoader} from './campus_tds_loader.js';
import {parseTDSCooperatively} from './async_tds.js';
import {restoreCampusBytes} from './campus_codec.js';
import workerSource from '../tmp/model-worker.bundle.txt';
export const nextPaint=()=>new Promise(resolve=>requestAnimationFrame(()=>resolve()));

async function runWorker(bytes,options,report,action='parse'){
  if(typeof Worker==='undefined')return null;
  const url=URL.createObjectURL(new Blob([workerSource],{type:'text/javascript'}));let worker;
  try{worker=new Worker(url);}catch{URL.revokeObjectURL(url);return null;}
  try{return await new Promise((resolve,reject)=>{
    worker.onmessage=({data})=>{
      if(data.type==='progress')report({phase:data.phase||'parse',loaded:data.loaded,total:data.total});
      else if(data.type==='result'||data.type==='download')resolve(data);
      else if(data.type==='error')reject(new Error(data.message));
    };
    worker.onerror=event=>{event.preventDefault?.();reject(new Error(event.message||'Geometry worker failed'));};
    // New compressed inputs are moved, not copied. They are no longer needed on
    // the UI thread; CAD downloads load the original separately when requested.
    const buffer=options.modelFormat==='campus-3ds-v1'&&bytes.byteOffset===0&&bytes.byteLength===bytes.buffer.byteLength?bytes.buffer:bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
    const settings={modelFormat:options.modelFormat,modelByteLength:options.modelByteLength,modelPackedByteLength:options.modelPackedByteLength};
    worker.postMessage({bytes:buffer,options:settings,action},[buffer]);
  });}finally{worker.terminate();URL.revokeObjectURL(url);}
}

export async function recoverCampusDownload(bytes,options={}){
  const result=await runWorker(bytes,options,()=>{},'download');
  if(result)return result.blob;
  return new Blob([await restoreCampusBytes(bytes,options)],{type:'application/octet-stream'});
}

export async function parseCampusModel(bytes,report=()=>{},options={}) {
  if(options.modelFormat)report({phase:'unpack',loaded:0,total:options.modelPackedByteLength});
  else report({phase:'parse',loaded:0,total:bytes.byteLength});
  await nextPaint();
  const result=await runWorker(bytes,options,report);
  if(!result){
    const restored=await restoreCampusBytes(bytes,options,report);
    return parseTDSCooperatively(new CampusTDSLoader(),restored,report);
  }
  const group=new Group(),loader=new MaterialLoader(),materials=result.materials.map(json=>loader.parse(json));let lastYield=performance.now();
  for(let i=0;i<result.meshes.length;i++){
    const item=result.meshes[i],geometry=new BufferGeometry();
    for(const [name,a] of Object.entries(item.attributes))geometry.setAttribute(name,new BufferAttribute(a.array,a.itemSize,a.normalized));
    if(item.index)geometry.setIndex(new BufferAttribute(item.index,1));
    for(const g of item.groups)geometry.addGroup(g.start,g.count,g.materialIndex);
    const mesh=new Mesh(geometry,item.multi?item.materials.map(id=>materials[id]):materials[item.materials[0]]);
    mesh.name=item.name;new Matrix4().fromArray(item.matrix).decompose(mesh.position,mesh.quaternion,mesh.scale);group.add(mesh);
    if(performance.now()-lastYield>8){report({phase:'scene',loaded:i,total:result.meshes.length*2});await nextPaint();lastYield=performance.now();}
  }
  return group;
}
