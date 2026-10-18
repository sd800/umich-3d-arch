# Regional rendering

Scope: all UMich regions. The streaming build reads the current CAD without changing it.

The web viewer first loads a simplified overview, then downloads full-detail 192 m regions near the view center or a selected building. Overview batches span 768 m to reduce draw calls; a region mask prevents double surfaces during detail replacement. Pixel-scale thresholds have hysteresis; requests wait until navigation settles, run one at a time, and stale requests are aborted. Failed detail requests retain the overview.

Repeated trees and facade components share indexed templates and instance transforms. Building feature IDs retain selection, per-building visibility, isolate, and elevation clipping in batched geometry. The overview removes small facade parts, simplifies within a relative 0.001 position error bound before 5 cm quantization, and uses 20-face tree crowns. Near regions use source triangles with normalized shared templates for repeated components; these browsing derivatives are not a substitute for the unchanged CAD download.

Detail residency budgets: 40 MiB / 1.1 million triangles / 7 regions for coarse pointers or screens no wider than 760 px; 100 MiB / 2.8 million triangles / 16 regions otherwise. These are detail geometry limits, not total browser memory limits. Overview, framebuffer and other browser resources are additional. Geometry and instance buffers are disposed on eviction.

Generated overview: 22,406,455 transfer bytes; 2,917,196 triangles; 975 draw entries; 65,969,650 estimated geometry bytes. There are 574 detailed regions.

HTTP uses content-hashed binary packets; local double-click uses paired classic-script packets with integrity checks. The standalone edition embeds compressed packets and decodes only the overview and requested regions. Its Guide links to adjacent 3DM, FBX and GLB downloads, with lossless XZ archives for oversized files.

Build after CAD changes: `npm run build:stream`, then `npm run build`. The Python model toolchain needs NumPy, SciPy and trimesh; meshoptimizer 1.3.0 is a pinned build dependency. Focused checks: `npm run check:stream`, model-byte/SEO checks and applicable interaction checks.

## GLB geometry delivery

The region builder now reads the extension-free full GLB. Near cells and independent overview cells are standard gzipped GLBs; the overview file is only their directory/container. Instancing, feature ownership, visibility rules, detail thresholds and memory budgets are unchanged. The UCSB campus subset uses losslessly compressed GLB separately from its neighboring cells. See `COMPRESSION.md` for formats and integrity checks.
