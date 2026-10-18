# Delivery validation

## 26.10.18.5 — GLB / FBX / 3DM delivery

- Native GLB: 27236 mesh objects, 13255560 triangles. Khronos glTF Validator: no errors or warnings on the extension-free download.
- Every native FBX vertex and triangle index matches the corresponding GLB object; meter units, Z-up settings and face normals verified. UChicago also imports with the independent Three.js FBXLoader.
- Web GLB accessor bytes match the native GLB after lossless meshopt/gzip decoding. HTTP, local classic-script and standalone data integrity checks pass.
- Guide lists 3DM, FBX and GLB in order; every linked artifact exists and fits the hosting per-file limit. Oversized native files use lossless XZ archives.
- All 574 regional GLB assets pass index, feature-ID, overview directory, hash, local-script and unchanged mobile/desktop-budget checks.

Earlier verification entries below describe their historical model versions.


- Rhino v7, meter units; 3941 nonempty layers.
- 4101 valid closed native massing solids, 13010 closed mesh objects, 604 footprint curves.
- Independent Three.js 3DS import: 17111 preserved object names, 9,369,232 triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Current architecture: individual Law Quadrangle, Diag core, Lurie and Leinweber reconstructions, corrected exterior-level interpretation and local roof ranges. No automatically generated rooftop machinery. Satellite-referenced parking rows retain drive aisles and exclude unmarked areas. English is the default regardless of device locale.
- Current regional overview: 16.66 MB; lossless full-CAD stream: 158.60 MB source to 39.33 MB transfer. Full-CAD restoration preserves the exact SHA-256.
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

## Release 26.10.16.6 focused follow-up

- Three four-storey Courtyards rings retain their open courts. Exported body/roof checks find zero intrusions into the court interiors; all three roofs have a physical hip rise. Mitred contour ranges replace the initially faceted grid roof.
- Regional assets and overview retain owner IDs, native-source digest, local classic-script byte integrity, hysteresis and explicit mobile/desktop residency limits.
- Current root/standalone data, SEO and native CAD integrity checks pass. Earlier general navigation/loading reports above remain historical regression coverage.
- A four-campus selection check confirms original material colors for Explore, normal tint for direct selection and correct tint removal on tour changes. Actual UW WebGL verifies Explore and direct model/list clicks. Actual UMich WebGL verifies the three Courtyards records, no standing label registration and near-detail geometry.
