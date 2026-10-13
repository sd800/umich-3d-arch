/** Load binary 3DS over HTTP; use a local classic script for file:// compatibility. */
export async function loadModelBytes(data, environment = {}) {
  const decode = environment.atob || globalThis.atob;
  const fromBase64 = value => Uint8Array.from(decode(value), c => c.charCodeAt(0));
  const decompress = async bytes => {
    if (data.compression !== 'gzip') return bytes;
    const Decompressor = environment.DecompressionStream || globalThis.DecompressionStream;
    if (!Decompressor) throw new Error('This browser does not support compressed offline models');
    const stream = new Blob([bytes]).stream().pipeThrough(new Decompressor('gzip'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  };
  if (data.model) return decompress(fromBase64(data.model));
  const protocol = environment.protocol || globalThis.location.protocol;
  if (protocol !== 'file:') {
    const response = await (environment.fetch || globalThis.fetch)(data.modelUrl);
    if (!response.ok) throw new Error(`Model request failed: HTTP ${response.status}`);
    return decompress(new Uint8Array(await response.arrayBuffer()));
  }
  const document = environment.document || globalThis.document;
  const target = environment.target || globalThis;
  await new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = data.offlineModelScript;
    script.onload = () => { script.remove(); resolve(); };
    script.onerror = () => { script.remove(); reject(new Error('Local model data could not be loaded')); };
    document.head.append(script);
  });
  const value = target.__UMICH_MODEL_BASE64__;
  delete target.__UMICH_MODEL_BASE64__;
  if (typeof value !== 'string' || !value.length) throw new Error('Local model data is empty');
  return decompress(fromBase64(value));
}
