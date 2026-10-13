import {CampusTDSLoader} from './campus_tds_loader.js';
class ProgressLoader extends CampusTDSLoader {
  readNamedObject(chunk) {
    super.readNamedObject(chunk);
    if (++this.objects % 16 === 0) self.postMessage({type:'progress',loaded:chunk.end,total:this.total});
  }
}
self.onmessage=({data})=>{
  try {
    const loader=new ProgressLoader(); loader.objects=0; loader.total=data.byteLength;
    const group=loader.parse(data,''); group.updateMatrixWorld(true);
    const meshes=[], materials=[], materialIds=new Map(), transfers=new Set();
    group.traverse(mesh=>{
      if (!mesh.isMesh) return;
      const geometry=mesh.geometry, attributes={};
      for (const [name,attribute] of Object.entries(geometry.attributes)) {
        attributes[name]={array:attribute.array,itemSize:attribute.itemSize,normalized:attribute.normalized};
        transfers.add(attribute.array.buffer);
      }
      const ids=(Array.isArray(mesh.material)?mesh.material:[mesh.material]).map(material=>{
        if (!materialIds.has(material.uuid)) {
          materialIds.set(material.uuid,materials.length); materials.push(material.toJSON());
        }
        return materialIds.get(material.uuid);
      });
      if (geometry.index) transfers.add(geometry.index.array.buffer);
      meshes.push({name:mesh.name,attributes,index:geometry.index?.array,groups:geometry.groups,matrix:mesh.matrixWorld.toArray(),materials:ids,multi:Array.isArray(mesh.material)});
    });
    if(!meshes.length)throw new Error('Model contains no geometry');
    self.postMessage({type:'result',meshes,materials},[...transfers]);
  } catch (error) { self.postMessage({type:'error',message:error.message}); }
};
