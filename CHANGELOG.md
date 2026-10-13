# Changelog

All notable changes to UMich Campus 3D Model are recorded here. Versions use `YY.M.D.NUM`, with a separate release sequence for each day in America/Chicago.

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
