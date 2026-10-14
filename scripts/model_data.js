/** Stream HTTP model bytes; local editions decode embedded/classic-script data in chunks. */
export async function loadModelBytes(data, environment = {}, report = () => {}) {
  const decode=environment.atob||globalThis.atob;
  const pause=environment.pause||(()=>new Promise(resolve=>setTimeout(resolve,0)));
  const fromBase64=async value=>{
    const length=Math.floor(value.length/4)*3-(value.endsWith('==')?2:value.endsWith('=')?1:0);
    const bytes=new Uint8Array(length); let offset=0;
    for (let i=0;i<value.length;i+=262144) {
      const part=decode(value.slice(i,i+262144));
      for (let j=0;j<part.length;j++) bytes[offset++]=part.charCodeAt(j);
      report({phase:'decode',loaded:offset,total:length}); await pause();
    }
    return bytes;
  };
  const read=async (stream,total,phase)=>{
    const reader=stream.getReader(),chunks=[];let loaded=0,lastPaint=0;
    while (true) {
      const {done,value}=await reader.read(); if (done) break;
      chunks.push(value);loaded+=value.byteLength;report({phase,loaded,total});
      if(loaded-lastPaint>=1048576){await pause();lastPaint=loaded;}
    }
    const bytes=new Uint8Array(loaded);let offset=0;
    for (const chunk of chunks) {bytes.set(chunk,offset);offset+=chunk.byteLength;}
    report({phase,loaded,total:loaded}); return bytes;
  };
  const decompress=async bytes=>{
    if (data.modelFormat==='campus-3ds-v1'||data.compression!=='gzip') return bytes;
    const Decompressor=environment.DecompressionStream||globalThis.DecompressionStream;
    if (!Decompressor) throw new Error('This browser does not support compressed offline models');
    const stream=new Blob([bytes]).stream().pipeThrough(new Decompressor('gzip'));
    return read(stream,data.modelByteLength,'unpack');
  };
  if (data.model) return decompress(await fromBase64(data.model));
  const protocol=environment.protocol||globalThis.location.protocol;
  if (protocol!=='file:') {
    report({phase:'read'});
    const response=await (environment.fetch||globalThis.fetch)(data.modelUrl);
    if (!response.ok) throw new Error(`Model request failed: HTTP ${response.status}`);
    const total=data.modelTransferBytes||Number(response.headers?.get('Content-Length'))||0;
    let bytes;
    if (response.body?.getReader) bytes=await read(response.body,total,'read');
    else {bytes=new Uint8Array(await response.arrayBuffer());report({phase:'read',loaded:bytes.length,total:bytes.length});}
    return decompress(bytes);
  }
  const document=environment.document||globalThis.document,target=environment.target||globalThis;
  report({phase:'local'});
  await new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src=data.offlineModelScript;
    script.onload=()=>{script.remove();resolve();};
    script.onerror=()=>{script.remove();reject(new Error('Local model data could not be loaded'));};
    document.head.append(script);
  });
  const key=data.modelGlobal||'__UMICH_MODEL_BASE64__',value=target[key];delete target[key];
  if (typeof value!=='string'||!value.length) throw new Error('Local model data is empty');
  return decompress(await fromBase64(value));
}
