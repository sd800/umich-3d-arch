# Project decisions

- Model: University of Michigan, Ann Arbor, four principal sectors: Central, North, Medical and Athletic.
- 中文校名：密西根大学；Michigan 一律译为密西根；Ann Arbor 一律译为安娜堡。
- Individual building layers plus one environment layer; model units meters.
- Reuse UChicago viewer behavior and readability, including campus-wide zoom limits.
- English default regardless of device locale; retain the manual Chinese switch and remembered choice.
- Root index.html works by double-click; provide 3DS, layered Rhino and standalone offline HTML.
- Use university public GIS footprints and names; keep height certainty and survey limitations explicit.
- Domain: https://umich.arch.songming.org/; repository: https://github.com/sd800/umich-3d-arch; push with the existing sd800 SSH key.
- English title: UMich Campus 3D Model; Chinese title: 密西根大学 · 三维校区.
- Logo: Michigan Blue background, Michigan Maize block M and an upright rectangular map with a route and location pin.
- Preserve original English names beside faithful independent Chinese translations.
- Git branch: main; requested final state: no other local or remote branches; initial commit message: Add files.

## Architectural refinement

The current model reworks 79 facility profiles, including North Campus teaching/research buildings, the Ross ensemble and Michigan Stadium. The official facility footprint remains the plan envelope. Secondary OSM part outlines and public university/architect exterior descriptions support wing cuts and material choices; elevations, repeated bays and most section sizes are approximate.

- Ross: KPF exterior/aerial and massing material, terracotta/glass, lower pavilions, terraces and the retained Kresge green roof: https://www.kpf.com/story/the-making-of-university-of-michigan-stephen-m-ross-school-of-business . Blau is represented separately on its official footprint.
- Duderstadt: university account of the north glazing and pyramidal skylights: https://www.dc.umich.edu/about-the-dc/history/ . The open north portico and lower connector are distinguished.
- Beyster and Ford Robotics: university engineering tour (four-storey atrium / four-storey robotics complex): https://tour.umich.edu/text-based/tours/engineering/ .
- Leinweber: the completed-building description takes precedence over older four-storey design announcements and OSM tags: https://leinweber.bldg.umich.edu/about/ .
- Moore and the Taubman addition: https://smtd.umich.edu/facilities/earl-v-moore-building/ and https://taubmancollege.umich.edu/about/facilities/art-architecture-building/ .
- Stadium: https://mgoblue.com/sports/2017/6/16/facilities-michigan-stadium-html and https://mgoblue.com/news/2022/10/18/football-athletics-unveils-renderings-of-new-michigan-stadium-scoreboards . The model uses a simplified below-grade bowl section, 90 display bands and 44 aisle divisions; these do not certify the present seat-row inventory. The historical 360 × 160 ft playing-field dimensions are retained. East/west premium building plan edges use mapped OSM parts.

Ground meshes have exact footprint holes and separately level pads. Intersecting mapped wings share a visualization grade; closed below-grade supports prevent open building bases. The stadium has an intentional ground excavation and a retaining perimeter, whose contact is tested instead of treating its seating bowl as a flat slab. Sub-0.1 m² GIS fragments are removed from derived building footprints; untouched source snapshots remain available.

Roof finishes are individually assigned (membrane, gravel, metal, green roof and pitched slate) and remain colored by the model. Roof-edge, terrain and shadow stabilization is retained. Window frames use rectangular sections with fewer redundant faces. Optional all-zero 3DS smoothing tables are omitted; imported vertices, normals, triangles and material groups were compared before and after the storage change and are identical. The layered Rhino file is retained independently.


## Outdoor parking references

The source audit reviews each model-scope grouped surface parking polygon against public Esri World Imagery. `sources/parking_satellite_review.json` retains stable export URLs, image extents, observation limits and original lot IDs; no imagery is redistributed. `sources/parking_rows.json` contains explicitly interpreted row paths, not a stripe array fitted to a lot envelope. `sources/parking_paint.geojson`, where present, retains primary CAD dividers or individually observed paint. Bay spacing and depth remain exterior approximations; faded/obscured paint, construction, service areas and unmarked parcels receive no invented grid. Current building footprints and planting override old paint. `output/parking_validation.json` records the rendered paths and clearance policy.

## Major building finish and southern context — 17 October 2026

Major campus buildings (at least 800 m² and 6 m tall, excluding parking and utility/service structures) now receive supported reveals around their existing glass panes, transoms where the opening permits them, and coping following actual modeled roof edges. These near-detail meshes retain the D classification and are omitted from the regional overview. Custom landmark reconstruction is preserved. Existing building-specific wing divisions and courtyard holes are preserved; missing elevations and facade module dimensions remain estimates. No random roof machinery or free-standing facade fins are added.

The Rhino delivery uses the same F32 mesh positions as the 3DS instead of carrying redundant double-coordinate copies; native extrusion profiles remain unchanged. Vertex normals are derived from stored faces by CAD readers rather than duplicated in the file. All 20,637 generated mesh objects passed validity and closedness checks during this storage conversion. The 3DS geometry is unchanged by this storage step.
