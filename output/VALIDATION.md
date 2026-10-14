# Delivery validation

- Rhino v7, meter units; 555 nonempty layers.
- 634 valid closed native massing solids, 1765 closed mesh objects, 606 footprint curves.
- Independent Three.js 3DS import: 2399 preserved object names, 4,439,972 triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Current update: atomic same-frame resize/draw, preserved framing, no Level toolbar option, and bilingual hover picking for 69 mapped outdoor places. English is the default regardless of device locale. Finder metadata is ignored without deleting local files.
- Current compression: 35.59 MB → 17.39 MB; exact restored CAD SHA-256 and all mesh positions/normals/indices/material groups. Single-worker transfer, bounded streaming decode and cooperative fallback checks pass.
- Viewer tests: English/Chinese language selection; HTTP compressed binary, local classic script, inline model and error paths; SHA-256 equality with original CAD bytes.
- Camera checks: 554 building targets × three viewport proportions = 1662 zoom-out/refit cases, retaining access to the whole campus.
- Navigation: 48 viewport, bearing and view combinations plus 144 exact-level/low-angle cases; mouse/touch direction, terrain pivots, cursor zoom, horizon and zoom-step limits, no inertia, drag/pinch selection and local preset checks.
- Loading: streamed-byte integrity, worker geometry/face groups identical to CAD import, and main-thread fallback/error checks.
- Browser checks: real loading percentage and byte counts, district presets, pan/rotation, landmark zoom-out and responsive layout.
- Rendering checks: original CAD vertices retained; upward map skins, structural occlusion and 48 depth-frustum cases. Real WebGL checks cover 48 moving views, 144 pixel samples, glass occlusion and removal of shadows cast by sectioned geometry. Terrain GPU checks reproduce the original per-triangle lighting discontinuity and confirm continuous shading independent of the terrain triangle diagonal. Roof checks include 800 samples and 48 uniform-color views, physical depth separation across buffer formats, stable roof lighting, taller occluders and an actual North Campus coplanar-roof regression.
- SEO checks: canonical/domain consistency, sitemap/robots, social metadata, bilingual static directory, local asset links, structured 3DModel checksum, single-file embedding and repository-safe asset sizes.

The checks validate deliverable integrity and behavior; they do not certify public-source geometry as an as-built survey.
