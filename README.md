# UMich Campus 3D Model

A bilingual exterior model of the **University of Michigan, Ann Arbor**. Open `index.html` by double-clicking it with its `assets` and `output` folders beside it, or use the standalone offline HTML in `output`.

密西根大学安娜堡校区的室外三维模型，覆盖中央校区、北校区、医学中心和体育区。英文为默认语言；设备语言偏好中有中文时，首次打开默认中文，也可手动切换。

## Deliverables

| File | Purpose |
| --- | --- |
| `index.html` | Root website and double-click viewer |
| `output/UMich_Campus_Offline.html` | Self-contained offline viewer |
| `output/UMich_AnnArbor.3ds` | 3DS mesh model, coordinates in meters |
| `output/UMich_AnnArbor_Layered.3dm` | Rhino v7 model with native layers and metric units |
| `output/layer_map.json` | 3DS object names → individual building / environment layers |
| `scripts/apply_layers_rhino.py` | Restore layers after importing the 3DS into Rhino |
| `output/建筑尺寸与来源.csv` | Building dimensions, height certainty and source references |
| `output/campus_aerial.png` | Detailed Central Campus exterior view |
| `output/campus_overview.png` | Four-sector overview |
| `output/campus_plan.png` | North-up campus plan |

The model contains **554 building layers + one environment layer**, 29 architectural highlights and 13,233 mapped tree positions. Buildings sharing one official facility number share one layer, including disconnected mapped pieces. Underground-only footprints and planning-only buildings are listed in `output/excluded_records.json`.

The initial view is centered on The Diag’s central plaza, looking from the southwest at a lower oblique angle with Central Campus clearly visible. Campus and Reset restore the same center, bearing and scale; district buttons provide closer views.

The viewer supports English/Chinese search, individual visibility, architectural tours, locate/isolate, district camera presets, a north-up plan, metric scale, labels, shadows, exterior details, elevation slices, 3DS download and PNG view export. Zoom-out limits remain campus-wide after selecting any landmark.

## Data and dimensions

- Footprints, road/sidewalk areas, plazas, planting, sports fields and tree positions: [U-M Facilities & Operations public GIS](https://map.fo.umich.edu/).
- Terrain: [USGS 3DEP bare-earth DEM](https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer), resampled at approximately 18 m. Landscape surfaces are draped in smaller patches; building pads are locally flattened.
- Projection: EPSG:32617, local meter offsets from [-83.7382, 42.2764]. Model Z = 0 corresponds to 225 m in the DEM datum. Elevation slices use this local datum, rather than measuring height above every building’s pad.
- Heights: one building uses a published peak with conflicting official accounts; six use the city’s **historical estimates**; the remaining heights, roof partitions, facade bays and exterior storeys are explicit estimates. U-M GIS `FloorCount` is preserved separately and is **not assumed to mean above-ground storeys**.
- Burton Tower: the selected university Record figure is 212 ft / 64.6176 m. Bentley Historical Library reports 192 ft. This discrepancy is disclosed in the viewer and has not been resolved by measurement.
- Wave Field: its published 90 ft square footprint informs the artwork’s scale; wave amplitude and phase are illustrative.

This is an independent exterior study model. Mapped XY dimensions are georeferenced public-map extents, rather than survey-certified dimensions. Roofs, facades, local surface levels and tree shapes are simplified. Study-ground outlines and surrounding circulation provide spatial context for the four campus sectors. Sources and interpretation notes are in `sources/SOURCES.md`.

### Rhino and 3DS

Use the `.3dm` file for native building layers and editable closed massing solids. 3DS does not encode Rhino’s native layer structure. When importing `.3ds`, set the import units to meters, then run `scripts/apply_layers_rhino.py` and select `output/layer_map.json`. All outdoor meshes are assigned to `环境_Environment`.

## Website and SEO

The intended domain is **umich.arch.songming.org**. Canonical URL, Open Graph/Twitter cards, bilingual titles/descriptions, structured WebSite/WebPage/3DModel data, sitemap, robots and `CNAME` are configured consistently. The static HTML includes all 554 English and Chinese building names for crawling and no-JavaScript browsing.

The interactive payload is gzip-compressed without changing the 3DS geometry; the original `.3ds` remains available to download. The root local edition loads compressed data through a classic script to avoid `file://` fetch restrictions. The single-file offline edition embeds the model, font, preview and engine. Use a current browser with WebGL 2 and Compression Streams support.

For GitHub Pages, publish the repository’s default branch from `/ (root)` and configure the domain’s DNS for the GitHub Pages host. `CNAME` alone does not enable hosting or install an HTTPS certificate.

## Releases

The current calendar version is recorded in `VERSION`; release notes are in the English `CHANGELOG.md`. Commit messages use `Release YY.M.D.NUM`.

## Rebuild

```sh
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r scripts/requirements.txt
npm ci
python3 scripts/build_campus.py
python3 scripts/render_preview.py
cp output/campus_aerial.png output/campus_overview.png
python3 scripts/render_preview.py --central
python3 scripts/render_plan.py
npm run build
python3 scripts/validate_rhino.py
npm run check:3ds
npm run check:camera
npm run check:locale
npm run check:interaction
npm run check:loading
npm run check:rendering
npm run check:release
npm run check:seo
python3 scripts/package_delivery.py
```

The source snapshots are included; rebuilding the delivered geometry does not require live GIS access. Temporary building caches are ignored and are invalidated when building code, curation or footprints change. Model sources and third-party notices are retained in the delivery archive.

## Level views

The view can tilt continuously from overhead to exactly horizontal. The Level control keeps the current bearing and scale. Low-angle vertical panning adjusts orthographic framing instead of intersecting nearly parallel ground rays, and cursor zoom stays anchored without tilting the camera. Ground pivots, immediate stopping and explicit rotation are retained. `npm run check:interaction` includes 144 low-angle cases across elevations, bearings and viewport proportions.

## Rendering checks

Map skins use stable compositing and continuous lighting from the existing DEM samples, with smooth normals across duplicated top-surface vertices. Near-vertical extrusion seams are excluded from map skins; the actual terrain positions and building/tree cast shadows are retained. Buildings and landscape structures retain depth occlusion. The interactive viewer preserves the delivered CAD coordinates and model bytes.

Run `npm run check:rendering` for CAD surface and depth-frustum checks. Run `npm run build:rendering-check`, serve the repository root, and open `tmp/rendering-check.html` for GPU pixel, glass-occlusion, section-shadow and 800 roof-sample regression checks.

Roof shadow filtering uses a fixed PCF kernel with receiver-plane depth correction. The sun volume is fixed to campus bounds. Ordinary flat roofs use one neutral gray base color across metal, slate, concrete and body caps; pitched surfaces retain natural directional shading. Small orthographic depth priorities separate roof sheets and concrete accents while retaining ordinary building occlusion and original CAD coordinates. The GPU check also covers roof lighting and coplanar details during pan, rotation and zoom.
