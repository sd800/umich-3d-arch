# Changelog

All notable changes to UMich Campus 3D Model are recorded here. Versions use `YY.M.D.NUM`, with a separate release sequence for each day in America/Chicago.

## 26.10.13.12 — 2026-10-13

- Compress the website model losslessly with vertex/index-stream coding and gzip: 35.59 MB → 17.39 MB (51.1% less model transfer). Keep the original 3DS and layered Rhino files unchanged.
- Stream decompression and geometry restoration in one background worker; transfer the compressed input and decoded geometry buffers instead of copying expanded CAD onto the UI thread.
- Bound temporary decode blocks, yield during scene preparation, and use cooperative object-by-object parsing when workers cannot start. Restore standalone CAD downloads only when requested.
- Cache model payloads by content digest and verify exact source bytes, geometry attributes, material groups and HTTP/local/standalone editions.

## 26.10.13.11 — 2026-10-13

- Default to English regardless of device locale while preserving manual language switching and remembered choices. Ignore Finder metadata in Git and delivery archives without deleting local files.

- Resize and redraw the WebGL canvas in the same animation frame, combining repeated resize notifications and skipping unchanged or hidden dimensions. Preserve navigation scale and framing while avoiding blank flashes and unnecessary shadow redraws.

- Remove the Level button from the toolbar and update the interaction guide.

- Group custom configuration under config/ and project/license documentation under docs/; update generators and references while preserving root website, SEO, release and build entry files.

- Add bilingual hover names for mapped outdoor places, with building-first picking, smaller-area priority and drag/touch safeguards. Coalesce pointer moves to one lookup per frame.

## 26.10.13.10 — 2026-10-13

- Simplify the Chinese label for The Diag across the viewer, offline edition and place-name documentation while retaining the original English name.

## 26.10.13.9 — 2026-10-13

- Use English filenames for the building dimensions/source CSV, usage guide and 3DS validation report. Update generators, validation scripts and documentation, and regenerate the portable delivery archive.

## 26.10.13.8 — 2026-10-13

- Center the initial view, Campus and Reset on The Diag’s central plaza using its official mapped geometry. Preserve the southwest viewing direction, oblique angle and zoom scale.

## 26.10.13.7 — 2026-10-13

- Match the reference screenshot’s southwest viewing direction and lower oblique angle, replacing the high overview with a larger Central Campus composition.
- Shift framing modestly toward North Campus so its southern buildings appear along the top. Keep Campus, first load and Reset consistent, with district presets and navigation unchanged.

## 26.10.13.6 — 2026-10-13

- Open with a campus-wide bird’s-eye view instead of the Central Campus preset, bringing North Campus, the medical center and the athletic campus into the initial composition.
- Frame the principal building clusters and raise the overview elevation for clearer buildings and landscape connections. Use the same overview for Campus and Reset, while retaining individual district and building views.

## 26.10.13.5 — 2026-10-13

- Restore the full viewing range from overhead to an exactly horizontal elevation. Add a bilingual Level control that retains the current bearing, local pivot and zoom.
- Replace low-angle ground-ray intersections with bounded orthographic panning and continuous vertical framing. Keep ground pivots stable and prevent abrupt travel, reversed directions, camera roll or tilt during pan and cursor zoom.
- Preserve pointer zoom at every elevation; carry inspection framing through resize and clear it when returning to campus, building or plan presets. Retain explicit rotation, immediate stopping, touch safeguards and selected-building highlights.
- Add 144 low-angle regression cases across six elevations, eight bearings and three viewport shapes, covering exact level views, pan, pointer zoom, ground pivots, resize, reset and absence of drift.

## 26.10.13.4 — 2026-10-13

- Derive continuous ground and landscape lighting from the existing DEM sample field, independent of sparse triangulation and flattened building pads. Smooth upward surface geometry, welding duplicated patch vertices for shading without moving terrain or altering CAD data. Remove large triangular light/dark patches around the medical campus and Nichols Arboretum.
- Exclude near-vertical extrusion seams that CAD rounding can misclassify as landscape tops, removing thin dark marks from lawns, walks and other map surfaces.
- Preserve building and tree cast shadows, roof colors and the existing selected-building highlight. Add a real GPU terrain-edge regression that reproduces the old lighting discontinuity and verifies continuous shading after repair.

## 26.10.13.3 — 2026-10-13

- Use one neutral gray base color for flat roof caps, metal sheets, slate surfaces and concrete insets. Remove material-based light/dark patches within ordinary flat roofs while preserving wall colors and natural lighting on pitched surfaces.
- Preserve the existing selected-building highlight on both roofs and facades.
- Verify uniform roof colors on actual North Campus geometry, retain coplanar depth separation, and update both website and offline editions.

## 26.10.13.2 — 2026-10-13

- Remove flickering roof shadow bands with a fixed sampling kernel and receiver-plane depth correction. Fit a fixed sunlight volume to the campus and use a small physical shadow bias without screen-dependent sampling noise.
- Use subdued gray roof surfaces while preserving wall colors, stone trim and ground-level concrete. Keep roof colors coherent when exterior details are hidden.
- Give coplanar roof sheets and concrete accents distinct depth priorities. Keep thin roof sheets visible above closed building caps using a small orthographic bias that is consistent across depth-buffer formats; preserve CAD coordinates and normal building occlusion.
- Extend real WebGL checks with 800 roof samples covering lighting, coplanar accents, recessed sheets and taller occluders during pan, rotation and zoom. Reproduce and repair the actual North Campus roof conflict with delivered G. G. Brown geometry. Verify actual campus close-ups, North Campus navigation and unchanged CAD downloads.

## 26.10.13.1 — 2026-10-13

- Render ground, roads, walks, paving, lawns, gardens, water and markings in a stable cartographic stack. Keep only their upward-facing skins so intersecting terrain facets and extrusion seams cannot obscure the map.
- Preserve CAD vertex positions and downloads, with normal depth occlusion for buildings, trees, walls and furniture. Retain depth testing for transparent glass and stabilize exterior detail surfaces.
- Fit the orthographic depth range to campus bounds at every view and avoid regenerating unchanged shadows during navigation.
- Apply elevation sections consistently to surfaces and shadow casters, removing shadows cast by clipped geometry.
- Invalidate cached viewer scripts by content checksum so browser reloads receive the current renderer.
- Add CAD surface/frustum checks and a real WebGL regression scene with 48 moving views, 144 pixel samples and section-shadow checks. Verify pan, rotation, layer toggles and actual campus images.

## 26.10.12.1 — 2026-10-12

- Use ground-aligned navigation across Central, North, Medical and Athletic sectors. Left-drag or one finger pans; right-drag and the Rotate control rotate explicitly.
- Keep the pivot aligned with visible USGS terrain, preserve local building inspection and zoom toward the pointer. Remove inertia and limit low-angle views and abrupt zoom steps.
- Prevent drags, multi-touch and canceled gestures from selecting buildings accidentally; add keyboard navigation and coalesce rendering with display frames.
- Retain the intended selection during loading and preserve map scale during viewport resizing.
- Show model loading progress through download, decoding, decompression, geometry parsing and scene preparation. Parse geometry in a background worker.
- Maintain calendar release commit messages, this English changelog and the root VERSION file.

## Add files — 2026-10-12

- Introduce the Ann Arbor exterior model covering Central Campus, North Campus, the Medical Center and Athletic Campus.
- Provide 554 individual building layers, one environment layer, 29 architectural highlights and 13,233 mapped tree positions, with metric 3DS and layered Rhino exports.
- Combine university GIS footprints and outdoor spaces with USGS terrain; distinguish published heights, historical city estimates and modeled heights.
- Provide an English/Chinese root website and standalone offline viewer with search, visibility, district presets, dimensions, sources, slicing and image export.
- Standardize Chinese place names, retain original English names and use a blue/maize M logo above a plain rectangular map.
- Configure SEO for umich.arch.songming.org and publish the initial files on main.
