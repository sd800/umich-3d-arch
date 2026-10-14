# Web model transport


The initial model transfer is **17.39 MB**, down from **35.59 MB** (51.1% smaller). The web stream uses meshoptimizer 1.3.0 lossless vertex/index-sequence coding followed by gzip. No quantization or simplification is applied; its decoded SHA-256 matches the original 3DS. Rhino and original 3DS downloads stay unchanged.

A single browser worker streams gzip decompression, restores small geometry blocks and parses the CAD model. Its compressed input and resulting geometry buffers are transferred rather than copied. The full intermediate archive is never retained. Scene setup yields to rendering between time slices; browsers that block workers use cooperative per-object parsing. Standalone HTML restores the downloadable CAD on demand in a worker. Decoder JavaScript/WebAssembly is bundled locally and requires no CDN. See `output/web_model_report.json` for byte counts, source digest and maximum block size. `npm run build:model` rebuilds the stream; `npm run check:compression` checks lossless restoration and worker behavior.

## Memory and responsiveness

- At most one decode/parse worker per load. No worker pool is created.
- A full source CAD buffer still exists temporarily inside that worker; meshes and GPU resources necessarily consume memory too. Compression reduces transfer and duplicate input buffers, not the final model complexity.
- Native gzip output is consumed a block at a time. Blocks are limited to 4 MiB; the current maximum is recorded in the report. Face decoding needs one additional local 16-bit index array.
- The no-worker path yields between objects; a single 3DS object remains the indivisible parsing unit. This improves responsiveness but cannot guarantee identical performance on every browser/device.
- HTTP and root file editions download the original CAD directly on request. The standalone edition recovers the same CAD bytes in a separate on-demand worker after startup.
