import {TDSLoader} from 'three/addons/loaders/TDSLoader.js';
/** Preserve explicit per-material face membership, including noncontiguous faces. */
export class CampusTDSLoader extends TDSLoader {
  readFaceArray(chunk,mesh) {
    this.faceGroups=[];
    super.readFaceArray(chunk,mesh);
    if (!this.faceGroups.length) return;
    const original=mesh.geometry.index.array, reordered=[];
    for (const group of this.faceGroups) for (const face of group.index) {
      const i=face*3; reordered.push(original[i],original[i+1],original[i+2]);
    }
    if (reordered.length!==original.length) throw new Error('Incomplete 3DS face material assignments');
    mesh.geometry.setIndex(reordered);
  }
  readMaterialGroup(chunk) {
    const group=super.readMaterialGroup(chunk); this.faceGroups.push(group); return group;
  }
}
