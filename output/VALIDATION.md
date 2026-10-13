# Delivery validation

- Rhino v7, meter units; 555 nonempty layers.
- 634 valid closed native massing solids, 1765 closed mesh objects, 606 footprint curves.
- Independent Three.js 3DS import: 2399 preserved object names, 4,439,972 triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Viewer tests: English/Chinese language selection; HTTP compressed binary, local classic script, inline model and error paths; SHA-256 equality with original CAD bytes.
- Camera checks: 554 building targets × three viewport proportions = 1662 zoom-out/refit cases, retaining access to the whole campus.
- Navigation: 48 viewport, bearing and view combinations; mouse/touch direction, terrain pivots, cursor zoom, horizon and zoom-step limits, no inertia, drag/pinch selection and local preset checks.
- Loading: streamed-byte integrity, worker geometry/face groups identical to CAD import, and main-thread fallback/error checks.
- Browser checks: real loading percentage and byte counts, district presets, pan/rotation, landmark zoom-out and responsive layout.
- SEO checks: canonical/domain consistency, sitemap/robots, social metadata, bilingual static directory, local asset links, structured 3DModel checksum, single-file embedding and repository-safe asset sizes.

The checks validate deliverable integrity and behavior; they do not certify public-source geometry as an as-built survey.
