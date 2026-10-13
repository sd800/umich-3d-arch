"""Write source provenance, bilingual usage notes and a portable delivery archive."""
from pathlib import Path
import json,hashlib,zipfile
r=Path(__file__).resolve().parents[1];out=r/'output';s=json.loads((out/'model_summary.json').read_text());records=json.loads((out/'viewer_records.json').read_text())
readme=f'''# UMich Campus 3D Model

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

The model contains **{s['buildings']} building layers + one environment layer**, {s['landmarks']} architectural highlights and {s['trees']:,} mapped tree positions. Buildings sharing one official facility number share one layer, including disconnected mapped pieces. Underground-only footprints and planning-only buildings are listed in `output/excluded_records.json`.

The initial view is centered on The Diag’s central plaza, looking from the southwest at a lower oblique angle with Central Campus clearly visible. Campus and Reset restore the same center, bearing and scale; district buttons provide closer views.

The viewer supports English/Chinese search, individual visibility, architectural tours, locate/isolate, district camera presets, a north-up plan, metric scale, labels, shadows, exterior details, elevation slices, 3DS download and PNG view export. Zoom-out limits remain campus-wide after selecting any landmark.

## Data and dimensions

- Footprints, road/sidewalk areas, plazas, planting, sports fields and tree positions: [U-M Facilities & Operations public GIS](https://map.fo.umich.edu/).
- Terrain: [USGS 3DEP bare-earth DEM](https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer), resampled at approximately 18 m. Landscape surfaces are draped in smaller patches; building pads are locally flattened.
- Projection: EPSG:32617, local meter offsets from {s['origin_wgs84']}. Model Z = 0 corresponds to 225 m in the DEM datum. Elevation slices use this local datum, rather than measuring height above every building’s pad.
- Heights: one building uses a published peak with conflicting official accounts; six use the city’s **historical estimates**; the remaining heights, roof partitions, facade bays and exterior storeys are explicit estimates. U-M GIS `FloorCount` is preserved separately and is **not assumed to mean above-ground storeys**.
- Burton Tower: the selected university Record figure is 212 ft / 64.6176 m. Bentley Historical Library reports 192 ft. This discrepancy is disclosed in the viewer and has not been resolved by measurement.
- Wave Field: its published 90 ft square footprint informs the artwork’s scale; wave amplitude and phase are illustrative.

This is an independent exterior study model. Mapped XY dimensions are georeferenced public-map extents, rather than survey-certified dimensions. Roofs, facades, local surface levels and tree shapes are simplified. Study-ground outlines and surrounding circulation provide spatial context for the four campus sectors. Sources and interpretation notes are in `sources/SOURCES.md`.

### Rhino and 3DS

Use the `.3dm` file for native building layers and editable closed massing solids. 3DS does not encode Rhino’s native layer structure. When importing `.3ds`, set the import units to meters, then run `scripts/apply_layers_rhino.py` and select `output/layer_map.json`. All outdoor meshes are assigned to `环境_Environment`.

## Website and SEO

The intended domain is **umich.arch.songming.org**. Canonical URL, Open Graph/Twitter cards, bilingual titles/descriptions, structured WebSite/WebPage/3DModel data, sitemap, robots and `CNAME` are configured consistently. The static HTML includes all {s['buildings']} English and Chinese building names for crawling and no-JavaScript browsing.

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
'''
readme+='''
## Level views

The view can tilt continuously from overhead to exactly horizontal. The Level control keeps the current bearing and scale. Low-angle vertical panning adjusts orthographic framing instead of intersecting nearly parallel ground rays, and cursor zoom stays anchored without tilting the camera. Ground pivots, immediate stopping and explicit rotation are retained. `npm run check:interaction` includes 144 low-angle cases across elevations, bearings and viewport proportions.

## Rendering checks

Map skins use stable compositing and continuous lighting from the existing DEM samples, with smooth normals across duplicated top-surface vertices. Near-vertical extrusion seams are excluded from map skins; the actual terrain positions and building/tree cast shadows are retained. Buildings and landscape structures retain depth occlusion. The interactive viewer preserves the delivered CAD coordinates and model bytes.

Run `npm run check:rendering` for CAD surface and depth-frustum checks. Run `npm run build:rendering-check`, serve the repository root, and open `tmp/rendering-check.html` for GPU pixel, glass-occlusion, section-shadow and 800 roof-sample regression checks.

Roof shadow filtering uses a fixed PCF kernel with receiver-plane depth correction. The sun volume is fixed to campus bounds. Ordinary flat roofs use one neutral gray base color across metal, slate, concrete and body caps; pitched surfaces retain natural directional shading. Small orthographic depth priorities separate roof sheets and concrete accents while retaining ordinary building occlusion and original CAD coordinates. The GPU check also covers roof lighting and coplanar details during pan, rotation and zoom.
'''
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

Ann Arbor municipal footprint-service retrieval and OSM retrieval were unavailable; neither dataset is used as a hidden height source. U-M official footprints are the model’s XY source. Above-ground facility pieces are grouped by facility number; underground-only outlines and planning-only features are omitted from raised massing and recorded separately.

Official GIS floor counts may include underground, roof and mezzanine labels or multiple wings. The original field is retained, while estimated exterior storeys are separately recorded. Published heights, source conflicts and historical city estimates have distinct viewer badges and bilingual notes.

Surface topology cleanup removes tiny sliver holes; a valid 2D footprint with point-touching boundaries may be represented as adjacent closed triangular volume cells to avoid an open extrusion. All deliverable Rhino objects are read back and checked for valid geometry and closed solids/meshes.
'''
(r/'sources/SOURCES.md').write_text(sources)
translations='''# Chinese naming decisions / 中文译名校对

- University of Michigan：密西根大学；Michigan：密西根；Ann Arbor：安娜堡。
- Huron River：休伦河；Detroit：底特律；Washtenaw：沃什特诺。
- The Diag：保留英文专名，附“校园中央绿地”的功能说明；不把专名机械译为“对角线”。
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
3. 默认英文；设备语言偏好含中文时首次默认中文，右上角可切换。
4. 左键拖动平移、右键拖动旋转，滚轮按指针位置缩放；触屏单指平移、双指平移或捏合缩放，开启“旋转”后可单指旋转。选择地标后可以继续缩回全校范围。
5. 选择建筑以查看平面尺寸、模型最高点和资料说明，可单独查看或逐栋隐藏。片区按钮切换镜头，列表中的片区标签用于筛选建筑。
6. “高程剖切”使用模型局部高程基准：Z=0对应公开DEM基准中的225米。它不是每栋建筑的相对层高，也不表示室内楼层。
7. Rhino 推荐打开分层 `.3dm`；导入 `.3ds` 时选择米作为单位，再运行 `scripts/apply_layers_rhino.py` 恢复图层。

建筑平面、道路、步道、绿地与树位采用学校公开GIS；地形依据USGS数据约18米间距采样，建筑基座局部平整化。多数建筑高度、屋顶、立面和树冠形态为估算。市级高度清单所载数值是2009年的历史估算；伯顿塔的两份官方高度资料存在差异，模型采用212英尺（64.6176米），并在详情中披露192英尺的另一记录。模型未经过实测校核。

“Michigan”统一译为“密西根”，“Ann Arbor”统一译为“安娜堡”。地名与建筑译名保持原义，英文专名保留以便查证。来源与完整中文译名说明见 `sources`。
'''
(out/'使用说明.md').write_text(usage)
checks={'rhino':json.loads((out/'rhino_validation.json').read_text()),'3ds':json.loads((out/'3DS导入校验.json').read_text())}
validation=f'''# Delivery validation

- Rhino v7, meter units; {checks['rhino']['nonempty_layers']} nonempty layers.
- {checks['rhino']['closed_native_solids']} valid closed native massing solids, {checks['rhino']['closed_mesh_objects']} closed mesh objects, {checks['rhino']['plan_curves']} footprint curves.
- Independent Three.js 3DS import: {checks['3ds']['objects']} preserved object names, {checks['3ds']['triangles']:,} triangles. All 3DS object names comply with the 10-character mapping convention.
- Published / municipal landmark peaks agree with their selected model height values within 1 cm.
- Viewer tests: English/Chinese language selection; HTTP compressed binary, local classic script, inline model and error paths; SHA-256 equality with original CAD bytes.
- Camera checks: {len(records)} building targets × three viewport proportions = {len(records)*3} zoom-out/refit cases, retaining access to the whole campus.
- Navigation: 48 viewport, bearing and view combinations plus 144 exact-level/low-angle cases; mouse/touch direction, terrain pivots, cursor zoom, horizon and zoom-step limits, no inertia, drag/pinch selection and local preset checks.
- Loading: streamed-byte integrity, worker geometry/face groups identical to CAD import, and main-thread fallback/error checks.
- Browser checks: real loading percentage and byte counts, district presets, pan/rotation, landmark zoom-out and responsive layout.
- Rendering checks: original CAD vertices retained; upward map skins, structural occlusion and 48 depth-frustum cases. Real WebGL checks cover 48 moving views, 144 pixel samples, glass occlusion and removal of shadows cast by sectioned geometry. Terrain GPU checks reproduce the original per-triangle lighting discontinuity and confirm continuous shading independent of the terrain triangle diagonal. Roof checks include 800 samples and 48 uniform-color views, physical depth separation across buffer formats, stable roof lighting, taller occluders and an actual North Campus coplanar-roof regression.
- SEO checks: canonical/domain consistency, sitemap/robots, social metadata, bilingual static directory, local asset links, structured 3DModel checksum, single-file embedding and repository-safe asset sizes.

The checks validate deliverable integrity and behavior; they do not certify public-source geometry as an as-built survey.
'''
(out/'VALIDATION.md').write_text(validation)
files=[p for p in r.rglob('*') if p.is_file() and '.git' not in p.parts and 'node_modules' not in p.parts and 'tmp' not in p.parts and '__pycache__' not in p.parts and p.suffix not in ['.zip','.npz']]
archive=out/'UMich_AnnArbor_Delivery.zip'
with zipfile.ZipFile(archive,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
    for p in sorted(files):z.write(p,p.relative_to(r))
with zipfile.ZipFile(archive) as z:assert z.testzip() is None
print('Documentation written; delivery ZIP:',len(files),'files,',archive.stat().st_size,'bytes')
