# Web model delivery

The viewer uses standard glTF 2.0 binary (GLB). The lossless complete-model derivative is **36.29 MiB** transferred, from a **180.25 MiB** extension-free download GLB. `EXT_meshopt_compression` and gzip reduce transfer; decompressed position/index accessors match the native GLB byte for byte. No quantization or simplification is introduced by this format conversion.

Normal browsing retains regional streaming, instancing and distance-based detail. The complete model is not decoded for initial browsing. Existing mobile/desktop GPU and region budgets remain unchanged. Regional delivery uses gzipped GLBs with quantized normals, vertex colors, object IDs and `EXT_mesh_gpu_instancing`; the overview is a directory containing independent GLB cells. LOD is a visual derivative of the complete CAD export.

A worker inflates/decompresses the complete GLB and calculates normals; geometry buffers transfer once to the main thread. Scene creation and no-worker fallback yield between work slices. The meshoptimizer JavaScript/WebAssembly codec is bundled locally. HTTP loads binary assets; double-click `file://` loads classic scripts, and the standalone edition embeds browsing data. WebGL 2, WebAssembly and Compression Streams are required by current delivery.

Downloads are listed **3DM → FBX → GLB**. 3DM retains editable Rhino solids and individual layers. FBX and GLB retain mesh geometry and material assignments, grouped by building/layer. FBX uses meter units and Z up; GLB uses a standard Y-up root transform with the metric source vertices retained below it. The public download GLB requires no optional extensions. Files exceeding the hosting per-file limit are delivered losslessly as `.xz`; extract before importing.

`output/exchange_model_report.json` records native mesh counts/hashes; `output/web_model_report.json` records complete GLB transfer counts/hashes. `npm run check:glb` verifies lossless accessor equality, HTTP/local/offline byte integrity and ordered downloads; `npm run check:exchange` compares every FBX vertex/index against GLB and checks units/normals. Rendering still needs memory for decoded geometry and framebuffers.
