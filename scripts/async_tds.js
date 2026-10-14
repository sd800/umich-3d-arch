import {Group} from 'three';
// Three.js Chunk-compatible cursor; bounds are checked before every child read.
class Chunk {
  constructor(data,offset,end=data.byteLength){this.data=data;this.offset=offset;this.position=offset;if(offset+6>end)throw Error('Invalid 3DS header');this.id=this.readWord();this.size=this.readDWord();this.end=offset+this.size;if(this.size<6||this.end>end)throw Error('Invalid 3DS chunk');}
  readChunk(){if(this.position===this.end)return null;const child=new Chunk(this.data,this.position,this.end);this.position=child.end;return child;}
  get endOfChunk(){return this.position>=this.end;}
  get hexId(){return this.id.toString(16);}
  readByte(){return this.data.getUint8(this.position++);}
  readWord(){const v=this.data.getUint16(this.position,true);this.position+=2;return v;}
  readDWord(){const v=this.data.getUint32(this.position,true);this.position+=4;return v;}
  readFloat(){const v=this.data.getFloat32(this.position,true);this.position+=4;return v;}
  readShort(){const v=this.data.getInt16(this.position,true);this.position+=2;return v;}
  readInt(){const v=this.data.getInt32(this.position,true);this.position+=4;return v;}
  readString(){let s='';while(this.position<this.end){const c=this.readByte();if(!c)return s;s+=String.fromCharCode(c);}throw Error('Unterminated 3DS name');}
}
/** Yield between named objects when workers are blocked; one object is the bounded unit. */
export async function parseTDSCooperatively(loader,bytes,report=()=>{},pause=()=>new Promise(r=>setTimeout(r,0))){
  const raw=bytes.byteOffset===0&&bytes.byteLength===bytes.buffer.byteLength?bytes.buffer:bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);
  const root=new Chunk(new DataView(raw),0);if(![0x4d4d,0x3daa,0xc23d].includes(root.id))throw Error('Model contains no geometry');
  loader.group=new Group();loader.materials=[];loader.meshes=[];let lastYield=performance.now();
  for(let chunk=root.readChunk();chunk;chunk=root.readChunk()){
    if(chunk.id!==0x3d3d)continue;
    for(let next=chunk.readChunk();next;next=chunk.readChunk()){
      if(next.id===0xafff)loader.readMaterialEntry(next,'');
      else if(next.id===0x0100){const scale=next.readFloat();loader.group.scale.setScalar(scale);}
      else if(next.id===0x4000)loader.readNamedObject(next);
      if(performance.now()-lastYield>6){report({phase:'parse',loaded:next.end,total:bytes.byteLength});await pause();lastYield=performance.now();}
    }
  }
  if(!loader.meshes.length)throw Error('Model contains no geometry');
  for(const mesh of loader.meshes)loader.group.add(mesh);
  report({phase:'parse',loaded:bytes.byteLength,total:bytes.byteLength});return loader.group;
}
