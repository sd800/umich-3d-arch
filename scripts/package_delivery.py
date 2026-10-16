"""Write source provenance, bilingual usage notes and a portable delivery archive."""
from pathlib import Path
import json,hashlib,zipfile,subprocess
r=Path(__file__).resolve().parents[1];out=r/'output';s=json.loads((out/'model_summary.json').read_text());records=json.loads((out/'viewer_records.json').read_text())
readme=f'''# UMich Campus 3D Model

A bilingual exterior model of the **University of Michigan, Ann Arbor**. Open `index.html` by double-clicking it with its `assets` and `output` folders beside it, or use the standalone offline HTML in `output`.

密西根大学安娜堡校区的室外三维模型，覆盖中央校区、北校区、医学中心和体育区。英文为默认语言；首次打开统一使用英文，可手动切换中英文。

## Deliverables

| File | Purpose |
| --- | --- |
| `index.html` | Root website and double-click viewer |
| `output/UMich_Campus_Offline.html` | Self-contained offline viewer |
| `output/UMich_AnnArbor.3ds.gz` | Losslessly archived 3DS mesh model; coordinates in meters |
| `output/UMich_AnnArbor_Layered.3dm.xz` | XZ-archived Rhino v7 model with native layers and meter units |
| `output/layer_map.json` | 3DS object names → individual building / environment layers |
| `scripts/apply_layers_rhino.py` | Restore layers after importing the 3DS into Rhino |
| `output/building_dimensions_and_sources.csv` | Building dimensions, height certainty and source references |
| `output/campus_aerial.png` | Detailed Central Campus exterior view |
| `output/campus_overview.png` | Four-sector overview |
| `output/campus_plan.png` | North-up campus plan |

The model contains **{s['buildings']} campus building layers + one campus environment layer**, plus **{s['neighboring_buildings']:,} neighboring building layers and a separate neighboring environment layer**, {s['landmarks']} architectural highlights and {s['trees']:,} mapped tree positions. Buildings sharing one official facility number share one layer, including disconnected mapped pieces. Underground-only footprints and planning-only buildings are listed in `output/excluded_records.json`.

The initial view is centered on The Diag’s central plaza, looking from the southwest at a lower oblique angle with Central Campus clearly visible. Campus and Reset restore the same center, bearing and scale; district buttons provide closer views.

The viewer supports English/Chinese search, individual visibility, architectural tours, locate/isolate, district camera presets, a north-up plan, metric scale, labels, shadows, exterior details, elevation slices, 3DS download and PNG view export. Zoom-out limits remain campus-wide after selecting any landmark.

## Data and dimensions

- Footprints, road/sidewalk areas, plazas, planting, sports fields and tree positions: [U-M Facilities & Operations public GIS](https://map.fo.umich.edu/).
- Terrain: [USGS 3DEP bare-earth DEM](https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer), resampled at approximately 18 m. Landscape surfaces are draped in smaller patches; building pads are locally flattened.
- Projection: EPSG:32617, local meter offsets from {s['origin_wgs84']}. Model Z = 0 corresponds to 225 m in the DEM datum. Elevation slices use this local datum, rather than measuring height above every building’s pad.
- Heights: Burton Tower and Central Power Plant use published peak/stack heights; six buildings use the city’s **historical estimates**; the remaining heights, roof partitions, facade bays and exterior storeys are explicit estimates. U-M GIS `FloorCount` is preserved separately and is **not assumed to mean above-ground storeys**.
- Central Power Plant: north/south stack heights use the 2017 Regents refurbishment record, 238 ft / 185 ft respectively. Industrial hall levels, stack positions and secondary members remain approximate.
- Burton Tower: the selected university Record figure is 212 ft / 64.6176 m. Bentley Historical Library reports 192 ft. This discrepancy is disclosed in the viewer and has not been resolved by measurement.
- Wave Field: its published 90 ft square footprint informs the artwork’s scale; wave amplitude and phase are illustrative.

This is an independent exterior study model. Mapped XY dimensions are georeferenced public-map extents, rather than survey-certified dimensions. Roofs, facades, local surface levels and tree shapes are simplified. Study-ground outlines and surrounding circulation provide spatial context for the four campus sectors. Sources and interpretation notes are in `sources/SOURCES.md`.

### Rhino and 3DS

Use the `.3dm` file for native building layers and editable closed massing solids. 3DS does not encode Rhino’s native layer structure. When importing `.3ds`, set the import units to meters, then run `scripts/apply_layers_rhino.py` and select `output/layer_map.json`. Campus outdoor meshes use `环境_Environment`; context landscape uses `Neighboring_Environment` and each neighboring building has an individual `N` layer. Published CAD archives use gzip for 3DS and XZ for Rhino to fit GitHub’s per-file limit. Run `python3 scripts/cad_delivery.py --extract` after cloning to restore both native CAD files locally. The website’s Download 3DS button restores the original native file in a worker on demand.

## Website and SEO

The intended domain is **umich.arch.songming.org**. Canonical URL, Open Graph/Twitter cards, bilingual titles/descriptions, structured WebSite/WebPage/3DModel data, sitemap, robots and `CNAME` are configured consistently. The static HTML includes all {s['buildings'] + s['neighboring_buildings']} campus and neighboring English/Chinese building names for crawling and no-JavaScript browsing.

The interactive payload uses lossless geometry coding plus gzip; the original `.3ds` remains available to download. The root local edition loads compressed data through a classic script to avoid `file://` fetch restrictions. The single-file offline edition embeds the model, font, preview and engine. Use a current browser with WebGL 2 and Compression Streams support.

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
python3 scripts/cad_delivery.py
npm run build:model
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
npm run check:neighbors
python3 scripts/package_delivery.py
```

The source snapshots are included; rebuilding the delivered geometry does not require live GIS access. Temporary building caches are ignored and are invalidated when building code, curation or footprints change. Model sources and third-party notices are retained in the delivery archive.
'''
readme+='''
## Low-angle navigation

The view can tilt continuously from overhead to exactly horizontal. Low-angle vertical panning adjusts orthographic framing instead of intersecting nearly parallel ground rays, and cursor zoom stays anchored without tilting the camera. Ground pivots, immediate stopping and explicit rotation are retained. `npm run check:interaction` includes 144 low-angle cases across elevations, bearings and viewport proportions.

## Rendering checks

Map skins use stable compositing and continuous lighting from the existing DEM samples, with smooth normals across duplicated top-surface vertices. Near-vertical extrusion seams are excluded from map skins; the actual terrain positions and building/tree cast shadows are retained. Buildings and landscape structures retain depth occlusion. The interactive viewer preserves the delivered CAD coordinates and model bytes.

Run `npm run check:rendering` for CAD surface and depth-frustum checks. Run `npm run build:rendering-check`, serve the repository root, and open `tmp/rendering-check.html` for GPU pixel, glass-occlusion, section-shadow and 800 roof-sample regression checks.

Roof shadow filtering uses a fixed PCF kernel with receiver-plane depth correction. The sun volume is fixed to campus bounds. Hidden body caps use neutral shading; individually designed membrane, gravel, slate, shingle, zinc, copper, glass and planted roofs retain their materials. Pitched surfaces retain natural directional shading. Small orthographic depth priorities separate roof sheets and concrete accents while retaining ordinary building occlusion and original CAD coordinates. The GPU check also covers roof lighting and coplanar details during pan, rotation and zoom.
'''
readme+='\n## Project layout\n\n- `index.html`: website entry; root SEO files and `CNAME` support publishing.\n- `assets/`: browser engine, fonts, icons and local model payload.\n- `config/`: custom site configuration.\n- `docs/`: project decisions and third-party license notices.\n- `scripts/`: model generators, packaging and necessary checks.\n- `sources/`: source snapshots and provenance.\n- `output/`: CAD files, offline edition, reports and delivery archive.\n- Root `VERSION`, `CHANGELOG.md` and package manifests record releases and builds.\n'
web_report=json.loads((out/'web_model_report.json').read_text())
readme+=f'\n## Website model compression\n\nThe initial model transfer is **{web_report["transferBytes"]/1e6:.2f} MB**, down from **{web_report["previousTransferBytes"]/1e6:.2f} MB** ({100*(1-web_report["transferBytes"]/web_report["previousTransferBytes"]):.1f}% smaller). The web stream uses meshoptimizer 1.3.0 lossless vertex/index-sequence coding followed by gzip. No quantization or simplification is applied; its decoded SHA-256 matches the original 3DS. The decoded geometry is identical to the original full 3DS. Published CAD is losslessly archived; the web Download 3DS action still saves the native file.\n\nA single browser worker streams gzip decompression, restores small geometry blocks and parses the CAD model. Its compressed input and resulting geometry buffers are transferred rather than copied. The full intermediate archive is never retained. Scene setup yields to rendering between time slices; browsers that block workers use cooperative per-object parsing. Standalone HTML restores the downloadable CAD on demand in a worker. Decoder JavaScript/WebAssembly is bundled locally and requires no CDN. See `output/web_model_report.json` for byte counts, source digest and maximum block size. `npm run build:model` rebuilds the stream; `npm run check:compression` checks lossless restoration and worker behavior.\n'
readme+='''
## Architectural and parking refinement

The Law Quadrangle, The Diag core, Lurie Tower and Leinweber use individual public-reference reconstructions. Roof ranges, local wing heights, dormers, porticoes, window bays and material finishes are specific to those buildings; footprint area no longer generates rooftop machinery. Mapped exterior tags supplement all-campus review, with primary university sources taking precedence over conflicting generic tags.

See `sources/ARCHITECTURE_REFERENCES.md`, `sources/ARCHITECTURE_EXTENDED_REFERENCES.md` and `sources/building_specs.json`. Detail previews are in `output/law_quadrangle_detail.png`, `output/diag_core_detail.png`, `output/lurie_tower_detail.png` and `output/leinweber_detail.png`. Heights and individual facade modules remain public-source estimates where surveyed dimensions are unavailable.

Outdoor parking uses explicit satellite-referenced row paths and observed paint, clipped clear of current buildings and planting. `sources/parking_satellite_review.json` retains each imagery reference and review result. Unmarked, construction, service and obscured areas do not receive an inferred stripe grid.
'''
readme+='''
## Ground continuity

North Campus and the arboretum have connected terrain, mapped woodland/meadow cover and estimated supplementary canopies. Neighboring residential/commercial parcels use turf, paved aprons and mapped parking rather than undifferentiated pale ground. Forest Hill Cemetery retains its mapped circulation as subdued internal paths with grass and canopy cover. See `output/ground_context_validation.json` and the ground review in `sources/NEIGHBORHOOD_REFERENCES.md`.

## Campus neighboring areas

Ann Arbor context is visible by default. In All, the first item is **⁺Campus neighboring areas**; clear its checkbox to restore campus-only rendering without moving the camera. The control is not pinned while searching. Neighboring buildings are searchable, selectable and individually visible, with ⁺ before every neighboring name. Campus visibility counts, tours and camera presets remain independent.

The scope includes State Street, South University, Main Street/Kerrytown, Packard/stadium streets, Broadway and Plymouth Road. Footprints retain courtyard holes; windows and street-facing entrances attach to individual flat/pitched volumes. Closed foundations meet the same USGS terrain as campus. A restrained context palette distinguishes surrounding buildings. The new geometry fills streets and walks missing from the broad study-ground extent while preserving mapped university surfaces. Mapped surface parking and green areas are retained; no invented parking stripes or automatic roof boxes are introduced.

See `sources/NEIGHBORHOOD_REFERENCES.md` and `sources/neighboring_source_manifest.json`. Separate records, metric footprints, dimensions/sources and validation are in the `output/neighboring_*` files. The neighboring database is © OpenStreetMap contributors, ODbL 1.0. Untagged heights, secondary facade modules and roof forms remain exterior interpretations.
''';
(r/'README.md').write_text(readme)
sources='''# Sources and modeling decisions

Public data snapshot: 12 October 2026. All measurements in the model are meters.

| Source | Used for | Limits |
| --- | --- | --- |
| [University public GIS](https://map.fo.umich.edu/) | Named building outlines, facility numbers, FloorCount, campus sectors; mapped roads, walks, lawns, planting, sports markings and tree positions | Public map geometry, not a measured facade/height survey; mapped status and names can lag recent changes |
| [Official campus information](https://campusinfo.umich.edu/campusmap) | Four principal Ann Arbor sectors | Sector names are spatial labels, not a cadastral boundary survey |
| [University campus tour](https://tour.umich.edu/) | Names and exterior descriptions | Exterior-form reference |
| [USGS 3DEP](https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer) | Bare-earth elevation | F32 raster, bilinear export to EPSG:32617, ~18 m sampling; approximate building pads and draped surfaces |
| [City height inventory, Appendix B p.11](https://www.a2gov.org/media/aoxh1zdd/appendixb_10-10-13.pdf) | Historical estimates for Lurie Tower, Weiser/Denison, Kellogg, cardiovascular center, biomedical research and Thayer | Compiled 18 February 2009; the table explicitly calls them estimated heights |
| [University Record: Burton Tower](https://record.umich.edu/articles/burton-memorial-tower/) | Selected 212 ft peak | Conflicts with the historical 192 ft account |
| [Bentley: Burton Tower](https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/burton-tower/) | 120 ft bell-floor level and exterior description; source conflict | Historical account states 192 ft overall |
| [Michigan Law architecture](https://michigan.law.umich.edu/about-michigan-law/michigan-law-architecture) | Law Quadrangle buildings and Gothic ensemble | Roof/tower partitions are simplified; underground library remains underground |
| [Bentley: stadium construction](https://bentley.umich.edu/athdept/stadium/stadtext/stadbild.htm) | Bowl form and 360 × 160 ft field | Historical dimensions; seating bands, suites and vertical profiles are estimates |
| [HOK: Kahn Pavilion](https://www.hok.com/projects/view/michigan-medicine-kahn-health-care-pavilion/) | Current hospital name, 12-storey design and stepped exterior | GIS retains “Clinical Inpatient Tower”; local exterior heights estimated |
| [U-M CSE facilities](https://cse.engin.umich.edu/about/our-facilities/) | Leinweber building name and 2025 completion | Exterior volumes remain simplified |
| [UMMA: Wave Field](https://umma.umich.edu/objects/wave-field-aps1995-1/) | Maya Lin earthwork and 90 ft square footprint | Wave geometry is illustrative |
| [2025 university brand guide](https://brand.umich.edu/wp-content/uploads/2025/02/250027-U-M-Style-Guide-February2025.pdf) | Blue #00274c and maize #ffcb05 | Independently drawn project M / map-scroll icon |

University map layers are those explicitly published by its web application. Paginated layers were fetched by object ID in batches and checked against the complete returned ID list. `retrieval_manifest.json` records complete tree, sidewalk and campus-surface queries. Public editor identities were removed from snapshots.

Ann Arbor municipal footprint-service retrieval was unavailable. Later public OSM snapshots supply matched building levels, roof-shape tags and selected secondary building-part edges; contradictory tags yield to specific university references, and heights remain explicitly estimated. OSM is not used as a hidden measured-height source. U-M official footprints are the model’s XY source. Above-ground facility pieces are grouped by facility number; underground-only outlines and planning-only features are omitted from raised massing and recorded separately.

Official GIS floor counts may include underground, roof and mezzanine labels or multiple wings. The original field is retained, while estimated exterior storeys are separately recorded. Published heights, source conflicts and historical city estimates have distinct viewer badges and bilingual notes.

Surface topology cleanup removes tiny sliver holes; a valid 2D footprint with point-touching boundaries may be represented as adjacent closed triangular volume cells to avoid an open extrusion. All deliverable Rhino objects are read back and checked for valid geometry and closed solids/meshes.


## Architecture review

`ARCHITECTURE_REFERENCES.md` and `ARCHITECTURE_EXTENDED_REFERENCES.md` record the primary exterior images actually inspected and separate documented floor counts from visual and metric approximations. `building_specs.json` links matched public roof/storey tags to the official facility footprint. Specific photographs override generic tags (including the built five-storey Leinweber and the distinct Hatcher North stack sublevels). No automatic rooftop machinery is inferred from footprint size.

All facility layers are reviewed for roof form, exterior-level interpretation and source association. Detail is strongest where current university images or published descriptions resolve the form; unreconstructed individual window modules remain approximate. No raw architectural photography is redistributed.
'''
sources+='\n## Neighboring areas\n\nAnn Arbor context sources, snapshot checksums, ownership exclusions, historical municipal heights and geometry interpretations are documented in [NEIGHBORHOOD_REFERENCES.md](NEIGHBORHOOD_REFERENCES.md). The separate neighboring database and retained snapshots are © OpenStreetMap contributors, ODbL 1.0.\n'
(r/'sources/SOURCES.md').write_text(sources)
translations='''# Chinese naming decisions / 中文译名校对

- University of Michigan：密西根大学；Michigan：密西根；Ann Arbor：安娜堡。
- Huron River：休伦河；Detroit：底特律；Washtenaw：沃什特诺。
- The Diag → The Diag 中央绿地：保留英文专名并说明场地用途，不把专名机械译为“对角线”。
- Ingalls Mall：英格尔斯林荫广场；校园步行开放空间中的 Mall 不译为“购物中心”。
- Law Quadrangle：法学院庭院；Quad / Quadrangle 依语境区分庭院与住宿、教学综合体。East / West / South Quadrangle 译为对应的庭院宿舍区。
- North Quadrangle Residential & Academic Complex：北庭院住宿与教学综合楼，保留其住宿、教学双重用途。
- Gerstacker Grove：格斯塔克尔林园，保留 Grove 的林地/庭园含义。
- Hall：依具体用途译为楼、宿舍楼、礼堂或会馆，不一律译为大厅。Commons 依实际共享用途译为公共活动中心或公共活动区。
- Pavilion：卡恩项目是大型医院建筑，译为医疗楼；确属园林亭体的 Peter S. Fuss Pavilion 译为亭。
- Football：美式橄榄球；Soccer：足球；Field Hockey：曲棍球；Lacrosse：长曲棍球。
- 专名采用通行音译或保持英文；没有可靠通行译名时保留英文名称，避免杜撰。人名缩写与命名信息保留，不根据其姓名猜测建筑用途。

建筑详情保留原英文全名和官方 GIS 名称供对照。中文译名属于本项目的独立译名，不声明是校方指定译名。`scripts/curation.py` 保存建筑名称；`place_names_zh.json` 校对官方地图的68项公共地点名称。官方原始数据中的拼写差异保留在来源快照中，展示名称则按已确认的建筑名称校正。
'''
(r/'sources/TRANSLATION_NOTES.md').write_text(translations)
usage=f'''# 密西根大学安娜堡校区模型使用说明

覆盖中央校区、北校区、医学中心和体育区。{s['buildings']}栋映射建筑逐栋分层，室外环境统一在“环境_Environment”层，含{s['landmarks']}处建筑地标和{s['trees']:,}处映射树位。单位：米。

1. 保留 `index.html`、`assets`、`output` 的相对位置，直接双击根目录的 `index.html`。
2. 仅需单个网页文件时，打开 `output/UMich_Campus_Offline.html`。三维显示需要当前版本浏览器的 WebGL 2 和压缩流支持。
3. 默认英文；不受设备语言影响，右上角可切换中英文。
4. 左键拖动平移、右键拖动旋转，滚轮按指针位置缩放；触屏单指或双指平移，双指捏合缩放、扭转旋转朝向，开启“旋转”后可单指调整朝向与俯仰。选择地标后可以继续缩回全校范围。
5. 选择建筑以查看平面尺寸、模型最高点和资料说明，可单独查看或逐栋隐藏。片区按钮切换镜头，列表中的片区标签用于筛选建筑。
6. “高程剖切”使用模型局部高程基准：Z=0对应公开DEM基准中的225米。它不是每栋建筑的相对层高，也不表示室内楼层。
7. Rhino 推荐打开分层 `.3dm`；导入 `.3ds` 时选择米作为单位，再运行 `scripts/apply_layers_rhino.py` 恢复图层。

建筑平面、道路、步道、绿地与树位采用学校公开GIS；地形依据USGS数据约18米间距采样，建筑基座局部平整化。多数建筑高度、屋顶、立面和树冠形态为估算。市级高度清单所载数值是2009年的历史估算；伯顿塔的两份官方高度资料存在差异，模型采用212英尺（64.6176米），并在详情中披露192英尺的另一记录。模型未经过实测校核。

“Michigan”统一译为“密西根”，“Ann Arbor”统一译为“安娜堡”。地名与建筑译名保持原义，英文专名保留以便查证。来源与完整中文译名说明见 `sources`。
'''
(out/'usage_guide.md').write_text(usage)
web_report=json.loads((out/'web_model_report.json').read_text())
checks={'rhino':json.loads((out/'rhino_validation.json').read_text()),'3ds':json.loads((out/'3ds_validation.json').read_text())}
validation=f'''# Delivery validation

- Rhino v7, meter units; {checks['rhino']['nonempty_layers']} nonempty layers.
- {checks['rhino']['closed_native_solids']} valid closed native massing solids, {checks['rhino']['closed_mesh_objects']} closed mesh objects, {checks['rhino']['plan_curves']} footprint curves.
- Independent Three.js 3DS import: {checks['3ds']['objects']} preserved object names, {checks['3ds']['triangles']:,} triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Current architecture: individual Law Quadrangle, Diag core, Lurie and Leinweber reconstructions, corrected exterior-level interpretation and local roof ranges. No automatically generated rooftop machinery. Satellite-referenced parking rows retain drive aisles and exclude unmarked areas. English is the default regardless of device locale.
- Current compression: {web_report["previousTransferBytes"]/1e6:.2f} MB → {web_report["transferBytes"]/1e6:.2f} MB; exact restored CAD SHA-256 and all mesh positions/normals/indices/material groups. Single-worker transfer, bounded streaming decode and cooperative fallback checks pass.
- Viewer tests: English/Chinese language selection; HTTP compressed binary, local classic script, inline model and error paths; SHA-256 equality with original CAD bytes.
- Camera checks: {len(records)} building targets × three viewport proportions = {len(records)*3} zoom-out/refit cases, retaining access to the whole campus.
- Navigation: 48 viewport, bearing and view combinations plus 144 exact-level/low-angle cases; mouse/touch direction, terrain pivots, cursor zoom, horizon and zoom-step limits, no inertia, drag/pinch selection and local preset checks.
- Loading: streamed-byte integrity, worker geometry/face groups identical to CAD import, and main-thread fallback/error checks.
- Browser checks: real loading percentage and byte counts, district presets, pan/rotation, landmark zoom-out and responsive layout.
- Rendering checks: original CAD vertices retained; upward map skins, structural occlusion and 48 depth-frustum cases. Real WebGL checks cover 48 moving views, 144 pixel samples, glass occlusion and removal of shadows cast by sectioned geometry. Terrain GPU checks reproduce the original per-triangle lighting discontinuity and confirm continuous shading independent of the terrain triangle diagonal. Roof checks include 800 samples and 48 uniform-color views, physical depth separation across buffer formats, stable roof lighting, taller occluders and an actual North Campus coplanar-roof regression.
- SEO checks: canonical/domain consistency, sitemap/robots, social metadata, bilingual static directory, local asset links, structured 3DModel checksum, single-file embedding and repository-safe asset sizes.

The checks validate deliverable integrity and behavior; they do not certify public-source geometry as an as-built survey.
'''
neighbor_validation=json.loads((out/'neighboring_validation.json').read_text())
validation+=f'\n## Neighboring-area checks\n\n- {neighbor_validation["neighboring_buildings"]:,} distinct neighboring footprints and independent CAD layers, with no duplicate or campus-footprint overlap.\n- All {neighbor_validation["retained_source_hashes_verified"]} retained source snapshot hashes verified.\n- {neighbor_validation["ground_samples"]:,} actual exported context-ground contact samples; maximum gap {neighbor_validation["maximum_ground_contact_gap_m"]:.8f} m.\n- Browser verification: default visibility, complete context toggle without camera movement, campus-only counts, unpinned search results, neighboring locate/highlight, Chinese labels, ordinary pan and exact horizontal terrain occlusion.\n'
ground_validation=json.loads((out/'ground_context_validation.json').read_text())
roof_validation=json.loads((out/'roof_surface_validation.json').read_text())
roof_gpu=json.loads((out/'medical_roof_gpu_validation.json').read_text())
validation+=f'\n## Ground and roof corrections\n\n- {ground_validation["filled_ground_probes"]} reported ground gaps have actual exported terrain below them. Forest Hill internal drives use a separate muted material.\n- Read back {roof_validation["checked_finish_planes"]:,} horizontal roof finish planes across all {roof_validation["campus_buildings"]} campus facilities: no overlapping different roof finishes.\n- Actual before/after roof geometry: {roof_gpu["frames"]} WebGL moving views; {roof_gpu["oldWrong"]} original color conflicts reproduced, corrected maximum sample color difference {roof_gpu["maxColorDelta"]}.\n- Ann Arbor Railroad uses retained active centerlines, standard gauge, ballast and sleepers; streets remain visible at level crossings.\n'
feature_validation=json.loads((out/'feature_rebuild_validation.json').read_text())
validation+='\n- Central Power Plant: both exported stack peaks match the published heights; separate industrial halls retained.\n- Courtyards: three four-storey footprints, three open courtyards and no apartment body caps intruding into the mapped court voids.\n'
(out/'VALIDATION.md').write_text(validation)
paths=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard'],cwd=r,text=True).splitlines()
files=[r/p for p in paths if (r/p).is_file()and (r/p).suffix not in ['.zip','.npz','.3ds','.3dm']and not p.endswith('.DS_Store')]
files.append(out/'UMich_Campus_Offline.html')

archive=out/'UMich_AnnArbor_Delivery.zip'
with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(files):z.write(p,p.relative_to(r))
with zipfile.ZipFile(archive) as z:assert z.testzip() is None
print('Documentation written; delivery ZIP:',len(files),'files,',archive.stat().st_size,'bytes')
