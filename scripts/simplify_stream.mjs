/** Offline only: bounded batches of positional LOD simplification. */
import {readFileSync,writeFileSync} from 'node:fs';
import {MeshoptSimplifier} from 'meshoptimizer';
await MeshoptSimplifier.ready;
for(const file of process.argv.slice(2)){
 const b=readFileSync(file),nv=b.readUInt32LE(0),nf=b.readUInt32LE(4),p=new Float32Array(nv*3),f=new Uint32Array(nf*3);
 for(let i=0;i<p.length;i++)p[i]=b.readFloatLE(8+i*4);
 for(let i=0;i<f.length;i++)f[i]=b.readUInt32LE(8+p.byteLength+i*4);
 const [indices]=MeshoptSimplifier.simplify(f,p,3,Math.min(f.length,Math.max(12,Math.floor(f.length*.22/3)*3)),.001,['LockBorder']);
 const h=Buffer.alloc(8);h.writeUInt32LE(nv);h.writeUInt32LE(indices.length/3,4);
 writeFileSync(file,Buffer.concat([h,Buffer.from(p.buffer),Buffer.from(indices.buffer,indices.byteOffset,indices.byteLength)]));
}
