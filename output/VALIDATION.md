# Delivery validation

- Rhino v7, meter units; 3941 nonempty layers.
- 4101 valid closed native massing solids, 12948 closed mesh objects, 604 footprint curves.
- Independent Three.js 3DS import: 17049 preserved object names, 8,820,432 triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Current architecture: individual Law Quadrangle, Diag core, Lurie and Leinweber reconstructions, corrected exterior-level interpretation and local roof ranges. No automatically generated rooftop machinery. Satellite-referenced parking rows retain drive aisles and exclude unmarked areas. English is the default regardless of device locale.
- Current compression: 70.40 MB → 37.95 MB; exact restored CAD SHA-256 and all mesh positions/normals/indices/material groups. Single-worker transfer, bounded streaming decode and cooperative fallback checks pass.
- Viewer tests: English/Chinese language selection; HTTP compressed binary, local classic script, inline model and error paths; SHA-256 equality with original CAD bytes.
- Camera checks: 554 building targets × three viewport proportions = 1662 zoom-out/refit cases, retaining access to the whole campus.
- Navigation: 48 viewport, bearing and view combinations plus 144 exact-level/low-angle cases; mouse/touch direction, terrain pivots, cursor zoom, horizon and zoom-step limits, no inertia, drag/pinch selection and local preset checks.
- Loading: streamed-byte integrity, worker geometry/face groups identical to CAD import, and main-thread fallback/error checks.
- Browser checks: real loading percentage and byte counts, district presets, pan/rotation, landmark zoom-out and responsive layout.
- Rendering checks: original CAD vertices retained; upward map skins, structural occlusion and 48 depth-frustum cases. Real WebGL checks cover 48 moving views, 144 pixel samples, glass occlusion and removal of shadows cast by sectioned geometry. Terrain GPU checks reproduce the original per-triangle lighting discontinuity and confirm continuous shading independent of the terrain triangle diagonal. Roof checks include 800 samples and 48 uniform-color views, physical depth separation across buffer formats, stable roof lighting, taller occluders and an actual North Campus coplanar-roof regression.
- SEO checks: canonical/domain consistency, sitemap/robots, social metadata, bilingual static directory, local asset links, structured 3DModel checksum, single-file embedding and repository-safe asset sizes.

The checks validate deliverable integrity and behavior; they do not certify public-source geometry as an as-built survey.

## Neighboring-area checks

- 3,385 distinct neighboring footprints and independent CAD layers, with no duplicate or campus-footprint overlap.
- All 5 retained source snapshot hashes verified.
- 3,385 actual exported context-ground contact samples; maximum gap 0.00000365 m.
- Browser verification: default visibility, complete context toggle without camera movement, campus-only counts, unpinned search results, neighboring locate/highlight, Chinese labels, ordinary pan and exact horizontal terrain occlusion.

## Ground and roof corrections

- 7 reported ground gaps have actual exported terrain below them. Forest Hill internal drives use a separate muted material.
- Read back 1,255 horizontal roof finish planes across all 554 campus facilities: no overlapping different roof finishes.
- Actual before/after roof geometry: 168 WebGL moving views; 92 original color conflicts reproduced, corrected maximum sample color difference 0.
- Ann Arbor Railroad uses retained active centerlines, standard gauge, ballast and sleepers; streets remain visible at level crossings.

- Central Power Plant: both exported stack peaks match the published heights; separate industrial halls retained.
- Courtyards: three four-storey footprints, three open courtyards and no apartment body caps intruding into the mapped court voids.
