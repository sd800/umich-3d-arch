import {MeshoptDecoder} from './vendor/meshopt_decoder.mjs';
const MAGIC='CMP3DS01',MAX_MODEL=256*1024*1024,MAX_BLOCK=4*1024*1024;
const pauseTask=()=>new Promise(resolve=>setTimeout(resolve,0));

/** Losslessly restore CAD bytes one block at a time; never retain an inflated archive. */
export async function restoreCampusBytes(bytes,options={},report=()=>{},pause=pauseTask) {
  if(options.modelFormat!=='campus-3ds-v1')return bytes;
  if(!MeshoptDecoder.supported)throw new Error('WebAssembly is required for compressed campus models');
  if(typeof DecompressionStream==='undefined')throw new Error('This browser cannot decompress campus models');
  await MeshoptDecoder.ready;
  const reader=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')).getReader();
  let chunk=new Uint8Array(),at=0,consumed=0,lastYield=performance.now();
  async function read(n){
    if(!Number.isSafeInteger(n)||n<0||n>MAX_BLOCK)throw new Error('Invalid compressed model block');
    const result=new Uint8Array(n);let offset=0;
    while(offset<n){
      if(at===chunk.length){const next=await reader.read();if(next.done)throw new Error('Truncated campus model');chunk=next.value;at=0;}
      const count=Math.min(n-offset,chunk.length-at);result.set(chunk.subarray(at,at+count),offset);at+=count;offset+=count;
    }
    consumed+=n;return result;
  }
  try {
    const prefix=await read(16),view=new DataView(prefix.buffer);
    if(new TextDecoder().decode(prefix.subarray(0,8))!==MAGIC)throw new Error('Invalid campus model signature');
    const length=view.getUint32(8,true),headerLength=view.getUint32(12,true);
    if(length<6||length>MAX_MODEL||options.modelByteLength&&length!==options.modelByteLength)throw new Error('Invalid restored model size');
    const segments=JSON.parse(new TextDecoder().decode(await read(headerLength)));
    if(!Array.isArray(segments)||segments.length>160000)throw new Error('Invalid model directory');
    const output=new Uint8Array(length),dv=new DataView(output.buffer);let position=0;
    for(const item of segments){
      if(!Array.isArray(item)||item.length!==4||!item.every(Number.isSafeInteger))throw new Error('Invalid model segment');
      const [kind,count,rawLength,packedLength]=item;
      if(rawLength<0||position+rawLength>length||count<0||count>65535)throw new Error('Invalid model segment size');
      const packed=await read(packedLength),target=output.subarray(position,position+rawLength);
      if(kind===0){if(rawLength!==packedLength)throw new Error('Invalid literal block');target.set(packed);}
      else if(kind===1){if(count*12!==rawLength)throw new Error('Invalid vertex block');MeshoptDecoder.decodeVertexBuffer(target,count,12,packed);}
      else if(kind===2){
        if(count*8!==rawLength||packedLength<4)throw new Error('Invalid face block');
        const size=new DataView(packed.buffer).getUint32(0,true);
        if(size+4+count*2!==packedLength)throw new Error('Invalid face stream');
        const indices=new Uint16Array(count*3),flags=packed.subarray(4+size);
        MeshoptDecoder.decodeIndexSequence(new Uint8Array(indices.buffer),count*3,2,packed.subarray(4,4+size));
        for(let i=0;i<count;i++){
          for(let j=0;j<3;j++)dv.setUint16(position+i*8+j*2,indices[i*3+j],true);
          target[i*8+6]=flags[i*2];target[i*8+7]=flags[i*2+1];
        }
      }else throw new Error('Unknown model segment');
      position+=rawLength;
      if(performance.now()-lastYield>8){report({phase:'unpack',loaded:consumed,total:options.modelPackedByteLength});await pause();lastYield=performance.now();}
    }
    if(position!==length||options.modelPackedByteLength&&consumed!==options.modelPackedByteLength)throw new Error('Incomplete campus model');
    if(at!==chunk.length||!(await reader.read()).done)throw new Error('Trailing campus model data');
    report({phase:'unpack',loaded:consumed,total:consumed});return output;
  }finally{await reader.cancel().catch(()=>{});reader.releaseLock();}
}
