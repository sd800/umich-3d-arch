# UMich priority architecture reference audit

Read-only audit, 2026-10-14. Source records: arch-umich/output/viewer_records.json and sources/official_base_buildings.geojson. Every image URL identified as **viewed** below was actually opened and visually inspected in the Codex browser. Metric model heights remain estimates unless a measurement is explicitly documented. Exterior tiers counted from a photograph are observations, not surveyed floor elevations.

## Verified model / GIS associations

| Viewer code | Official GIS FACILITY_ID | Building | GIS OBJECTID | GIS FloorCount |
|---|---|---|---|---|
| M058 | 1000158 | Chemistry & Dow Lab. | 830806 | 11 |
| M064 | 1000189 | Dana Building | 830859 | 6 |
| M068 | 1000197 | Mason Hall | 830725 | 7 |
| M078 | 1000208 | Randall Lab | 831446 | 9 |
| M080 | 1000152 | Angell Hall and Tisch Hall | 830887 | 8 |
| M081 | 1000206 | Angell Hall Auditoriums | 830886 | 3 |
| M087 | 1000175 | Haven Hall | 830885 | 11 |
| M089 | 1000185 | Hatcher - North | 830805 | 11 |
| M092 | 1000181 | Hatcher - South | 830731 | 10 |
| M094 | 1000167 | West Hall | 830809 | 6 |
| M099 | 1000227 | Shapiro Library | 830810 | 6 |
| M101 | 1000159 | Clements Library | 830894 | 6 |
| M112 | 1000108 | Lawyers Club and Munger Charles T Residences | 831021 | 6 |
| M117 | 1000109 | Cook John P Building | 831022 | 5 |
| M126 | 1000184 | Cook Legal Research (Law Library) | 831015, also 816125 | 14 |
| M132 | 1000179 | Hutchins Hall | 831014 | 6 |
| M140 | 1005235 | Jeffries Hall | 830981 | 6 |
| M379 | **null in GIS** | Leinweber Building | 831430 | null |
| M401 | 1000394 | Lurie Tower | 830751 | 12 |

M379's viewer facility_id is 1005504, but this audit cannot authenticate that number from the supplied official GeoJSON. Its name and location identify OBJECTID 831430. Do not equate any GIS FloorCount with above-ground facade stories.

## Diag core: actionable geometry

**Best overview image, viewed:** https://tour.umich.edu/uploads/haven-hall-04.jpg . Despite its Haven filename, this is a wide aerial covering Angell, Mason/Haven, Hatcher North/South and nearby buildings. It is an unusually useful official roof and relative-height reference.

### Angell / Tisch / Auditoriums (M080 / M081)
- Angell: long, pale limestone State Street facade; central eight-column Doric portico with straight entablature and a taller rectangular center block. **No triangular pediment over the portico and no pitched main roof.** Flat dark roof areas behind parapets; small white observatory dome on a rooftop housing near center. Rear/side walls are red-brown brick with pale stone corners, belts and cornice, unlike the all-limestone front.
- Four floors are documented by Bentley. Original facade length is documented as 480 ft (146.3 m); this is a check on overall footprint scale, not a substitute for GIS geometry.
- Tisch: red brick connector joining Angell and Haven, flat roof and pale stone cap. Current photograph shows three upper window rows over a recessed/open ground arcade: four visible tiers. Treat that as photo-observed, not a surveyed count. Stone base arcade is broad rectangular openings; windows are individual large rectangles with dark mullions. Do not style it as a limestone neoclassical wing.
- The auditorium footprint is a separate low rear mass; aerial shows flat roof and lower height than office/classroom wings. Do not propagate Angell's four-story facade across it.
- Text: https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/angell-hall/
- Current Angell/Tisch campus gallery: https://maps.studentlife.umich.edu/building/james-b-angell-hall-and-tisch-hall
- **Viewed Tisch details:** https://mapproxy.studentlife.umich.edu/images/james-b-angell-hall-and-tisch-hall/XP2S1682.jpg and https://mapproxy.studentlife.umich.edu/images/james-b-angell-hall-and-tisch-hall/XP2S1683.jpg

### Mason / Haven (M068 / M087)
- Mason original classroom mass is **four stories**, not the current model's five. Haven office slab is **eight stories**. Both use flat roofs; distinguish low classroom wings from tall office slab and the later tall addition between them.
- Red brick, large dark-framed rectangular windows, pale concrete/stone horizontal bands and base. Current entrance addition has tall glazing strips/projecting glass bays and a broad metal canopy; this is specific geometry, not generic fins on every edge.
- AEC documents an eight-story addition to Haven extending to the south end of Mason. Flat-roof tops include small mechanical housings, not continuous pitched roofs.
- Text: https://umaec.umich.edu/projects/completed-projects/mason-hall-and-haven-hall-addition-and-renovation/
- Original four/eight-story allocation: https://milproj.dc.umich.edu/mort/original/1975/Mason-Haven%20Angell%20Addition%201952/index.html (web search cache readable; browser certificate prevents direct page use).
- **Viewed:** overview above, plus https://tour.umich.edu/uploads/mason-01.jpg . Tour prose erroneously calls the current Mason the 1841 original; use Bentley/AEC construction history instead.

### Hatcher North / South (M089 / M092)
- North: four main floors, with basement and stack sublevels. Current model's five exterior stories should not be inferred from GIS 11. Red-brown brick; broad pale cornice; north reading-room facade has very tall multi-pane vertical windows. **Red hipped roof** on its prominent north range, with stepped rooftop brick ventilation/mechanical volumes farther back. Avoid one red hip over its whole irregular footprint.
- South: eight floors documented by the operating library. Large, substantially taller flat-roof modern brick slab behind North; facades combine broad blank brick piers with dark horizontal window bands. Aerial shows pronounced stepped rooftop mechanical/ventilation blocks and a pinkish/light roof cap. Do not give it the North building's tile hip.
- Operating library: https://www.lib.umich.edu/visit-and-study/floor-plans/hatcher-library-north-floors/ and https://www.lib.umich.edu/visit-and-study/floor-plans/hatcher-library-south-floors/
- **Viewed North frontage:** https://tour.umich.edu/uploads/hatcher-01.jpg ; North/South roof relationship is clear in overview aerial.

### Shapiro (M099)
- Four floors plus basement; flat roof. Modern brown/red brick volumes with strong light-gray horizontal floor bands. Facade has **repeated projecting, faceted glass bay windows**, with solid gray spandrels at each floor; copy their projection rhythm instead of placing flat identical windows on a slab.
- **Viewed:** https://tour.umich.edu/uploads/UGLI-02.jpg . Current Clements campus photo also shows its adjacent brick-and-pale-band side.
- Floors: https://www.lib.umich.edu/visit-and-study/floor-plans/shapiro-library-floors/

### Clements (M101)
- **Two-story historic limestone mass** (not three generic equal facade stories). Low rectangular building with a flat/parapeted roof, deep pale cornice and prominent central **three rounded-arch loggia** over broad steps/terrace. Loggia reads as one tall space. Side windows are tall rectangular openings. Its underground addition should not become a visible multistory above-ground wing.
- Construction description explicitly says Kahn enlarged prototype to two stories and flattened roof: https://clements.umich.edu/about/history/construction-of-the-library/
- **Viewed current front:** https://maps.studentlife.umich.edu/building/william-l-clements-library (first gallery photo, https://mapproxy.studentlife.umich.edu/images/william-l-clements-library/XP2S1707.jpg).

### Dana (M064)
- Historic perimeter: dressed rough gray fieldstone lower walls; mottled light-buff brick upper stories, Bedford limestone east/west entrances, projecting pale cornice and small pedimented entrance projections. Photograph shows straight/parapeted perimeter roofline; no generic giant gable.
- Original was three stories plus basement. 1999-2003 renovation added upper space and covered courtyard: an inset raised clerestory/partial fifth floor and central atrium skylight. Do not model the GIS six levels as six exterior stories, nor leave original open court entirely empty. Exact renovated roof facets were not directly visible in the exterior photo; keep those labeled approximate.
- Historic text: https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/dana-building/
- Renovation: https://record.umich.edu/articles/green-dana-is-environmentally-friendly/ and https://umaec.umich.edu/ProjectSustainability/sustainablityP00000145.pdf (AEC/Quinn Evans project sheet describes four existing floors plus partial fifth; read via web text, no PDF image rendered).
- **Viewed current facade:** https://tour.umich.edu/uploads/dana.jpg

### Chemistry / Dow (M058)
- Original Chemistry and 1949 east addition documented as **four floors plus basement**. Brick walls, pronounced terra-cotta cornice, coped/parapeted **flat roofs**; regular paired tall windows and stone/light lower belt. No uniform eight-story mass across footprint.
- Dow modern extension is a different vocabulary: brown brick, broad pale base/upper roof band, dark individual windows; current photo displays three upper window rows above a lower base and a broad gray rooftop/parapet enclosure. Exact total above-ground count of all Dow portions remains unverified here.
- Text: https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/chemistry-building/ (header date 1856 is misleading; main text clearly identifies current 1909-10 structure).
- **Viewed historic original:** https://bentley.umich.edu/wp-content/uploads/2026/04/bhl-building-chemistry-building.webp
- **Viewed current Dow:** https://maps.studentlife.umich.edu/building/willard-h-dow-chemistry-laboratory and https://mapproxy.studentlife.umich.edu/images/willard-h-dow-chemistry-laboratory/XP2S4319.jpg

### West (M094)
- Four-story brick-and-stone wings; broad red terracotta **hipped roofs**, low repeated dormers, long ridge skylights, and two distinctive **green copper lanterns**. Main corner volume has a large hip/pyramidal roof. Keep Engineering/Denison Arch open at ground level.
- Regents describe 21 original skylights, two lanterns, terracotta tile, copper flashing and flat-seam roofing. Lanterns extend **40 ft above roof**, an explicitly documented value, not the building's overall height.
- **Viewed aerial:** https://tour.umich.edu/uploads/west-hall-02.jpg
- Text: https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/engineering-building-west/
- Roof specification: https://regents.umich.edu/files/meetings/09-14/2014-09-IX-9.pdf
- Tour text wrongly describes a public-school origin; use Bentley for history and tour for photograph.

### Randall (M078)
- Original Kahn building **four stories plus three basements**, explicitly documented; not six equal above-ground floors. Original brick facade has pale stone base, strong stone belt courses, tall vertical windows grouped between brick piers, small decorated spandrels and a large pale cornice. Exterior front photo shows flat/parapeted roofline.
- Later addition is separate modern brick mass with horizontal ribbon-window tiers, vertical black-framed stair glazing and low connecting bridges. Exact renovated/addition total height not authenticated here.
- **Viewed original:** https://sustainable-lsa.umich.edu/wp-content/uploads/2023/12/randall-lab-umich-1-1024x576.jpg
- **Viewed modern wing:** https://mapproxy.studentlife.umich.edu/images/harrison-m-randall-laboratory/XP2S4375.jpg
- Gallery: https://maps.studentlife.umich.edu/building/harrison-m-randall-laboratory
- Four stories/three basements: https://milproj.dc.umich.edu/mort/original/1925/22%20Harrison%20Randall%20Physics%20Building/index.html (web search text; direct browser certificate issue).

## Law Quad: separate roof and tower volumes

Materials are **Weymouth seam-faced granite with Indiana limestone trim**, not uniformly limestone, and not red brick like Martha Cook. Source: https://quadrangle.michigan.law.umich.edu/index.php/issues/summer-2024/100-years-lawyers-club . Gothic windows vary: tall pointed/traceried hall windows, smaller square/rectangular residential groups; avoid one repeated window size.

**Viewed current official image set** from https://michigan.law.umich.edu/about-michigan-law/michigan-law-architecture :
- North/west corner and dining/residential roof relationship: https://michigan.law.umich.edu/sites/default/files/styles/global_width/public/2020-10/IG001_Architecture.jpg?itok=oFt3JM61
- Roof detail/dining hall: https://michigan.law.umich.edu/sites/default/files/styles/global_width/public/2020-10/IG003_Architecture.jpg?itok=DsjN5dLl
- Hutchins exterior/roof: https://michigan.law.umich.edu/sites/default/files/styles/global_width/public/2020-10/IG002_Architecture_0.jpg?itok=Lm1yAGTS
- Legal Research, reading-room/tower and additions: https://michigan.law.umich.edu/sites/default/files/styles/global_width/public/2020-10/IG004_Architecture.jpg?itok=Sw9Bda05

- **M112 Lawyers Club:** mixed lower communal halls and residential ranges; not a single four-story roof volume. Residential ranges have steep variegated blue-gray/brown slate hips/gables, cross-gables, dormer gables and chunky grouped chimneys. Dining hall is a tall single hall with long simple gable roof; current detail image visibly shows blue-gray standing-seam roof panels, rather than the residential slate texture. Tall pointed windows sit between Gothic buttresses with pinnacles; end gable has paired octagonal turret-like cupolas. Do not extend turret rhythm over residential facade.
- **M117 John P. Cook:** residential east side along Tappan Avenue. Keep its separate narrow perimeter range, slate roof/chimney vocabulary and quad void. Precise current dormitory story count and roof dimensions not independently authenticated in this audit; do not claim surveyed four stories merely because model uses four.
- **M126 Legal Research:** tall square crenellated tower with corner pinnacles; **tower top reads as flat behind Gothic parapet**, not a hip. Attached long reading-room range is much lower, with huge pointed Gothic windows and a pitched gray standing-seam roof. Low office/stack ranges include **flat roofs and mechanical housings**, as visible in IG004. GIS 14 includes library/stack levels and underground Smith addition; it cannot justify one eight-story box over complete footprint. No exact tower height verified here.
- **M132 Hutchins:** documented **four floors**; two main street wings (State and Monroe) plus lower corridors enclosing inner courtyard. Roof photo shows steep gray patterned slate cross-gables, with repeated **gable dormers integrated into wall/roof line**; some lower facade strips have flat parapet roofs. Preserve the enclosed court and the connections to Legal Research. Text: https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/hutchins-hall/
- **M140 Jeffries:** official school says four-story Collegiate Gothic building. Granite/limestone treatment should match Quad. Fine roof shape not visually authenticated here; use a dedicated exterior before adding elaborate gables. Aikens Commons is a separate two-level glass-roofed gathering space occupying gap east of Hutchins/south of Legal Research, not opaque masonry. Source: https://news.umich.edu/regents-approve-design-for-u-m-law-school-building-project/ . Its footprint may be bundled in existing GIS features; do not invent a separate building-ID association.

## Lurie Tower (M401)

- **Viewed:** https://tour.umich.edu/uploads/mphoto_campusaerials_eb-020-.jpg (aerial) and https://tour.umich.edu/uploads/mphoto_lurietower20annvcelb16-095-.jpg (full-height exterior).
- Slender brick-faced, largely windowless shaft; open carillon crown made from separated tall light-colored vertical blades and dark horizontal structure. **Greenish copper hip/pyramidal cap with short top ridge**, broad overhang; not an ordinary flat-roof eight-story building. Base has two dark projecting small pavilion/canopy volumes. There is no ordinary rectangular-window grid on the shaft. Rounded/chamfered shaft edges should not be replaced by a plain sharp-cornered prism.
- Official tour attributes design to Charles Moore and Arthur Anderson: https://tour.umich.edu/text-based/locations/lurie-tower/ . Source prose has a Baird/Lurie carillon naming mistake; images remain useful.
- Metric caution: sources circulate **165 and 167 ft** (50.3-50.9 m). The university-hosted student Name Stories project gives 167, while SAH and a former tour-sign transcription give 165. Neither establishes a surveyed height in this audit. Existing 50.292 m matches 165 ft and can remain an explicitly approximate overall height. Do not label 12 GIS floors as exterior stories.

## Leinweber (M379)

- Current official description explicitly says **five-story**, opened summer 2025: https://leinweber.bldg.umich.edu/about/ . Adjacent to Beyster, with enclosed connecting bridge; terrain slopes so individual faces show fewer tiers.
- **Viewed actual built photos (preferred over 2022 renderings):** https://leinweber.bldg.umich.edu/wp-content/uploads/2025/05/54336123639_e256b91188_b.jpg and https://leinweber.bldg.umich.edu/wp-content/uploads/2025/05/north-view.jpg . Both are published in current official homepage gallery, https://leinweber.bldg.umich.edu/ .
- Buff/golden brick wings, **flat parapet roofs**, a taller gray louvered mechanical penthouse set back above roof, projecting white/silver-framed glazing boxes, and narrow white-gray solar-shade frames between/over tall windows. Those projecting glazed boxes are facade volumes; **do not turn Glass/RoofGlazing records into pitched glass roofs**. Lower entry glazing sits below some cantilevered boxes. Most fenestration is tall paired/individual windows with rhythm set by masonry piers, not all-glass walls over every edge.
- AEC design team: Integrated Design Solutions with Pelli Clarke & Partners: https://umaec.umich.edu/projects/completed-projects/bob-and-betty-beyster-building/project-details/ . No reliable metric roof/penthouse heights found; keep current 24.34 m and subvolume elevations labeled approximate.

## Incremental local geometry anchors for implementation

All X/Y below are the supplied **local EPSG:32617 meter offsets** from output/footprints_local_meters.geojson, X east and Y north. These are rough plan envelopes to be clipped against each original footprint, not surveyed architectural subpart polygons. Wing associations come from geometry and the official aerial photos; placement of the Legal Research tower is an inference and needs a visual sanity check in assembled model.

### Law Quad anchors

| Part | Rough local X range | Rough local Y range | Action |
|---|---|---|---|
| M112 north residential range along South University | -157 to -51 | -187 to -174 | Long narrow slate roof; dormer/cross-gable rhythm; preserve eastward extension |
| M112 west/north communal/connecting range | -179 to -158 | -217 to -187 | Keep separate from residential roof height |
| M112 dining hall, east-west long hall | -189 to -144 | -231 to -217 | Long single gable standing-seam roof, huge pointed windows, buttress pinnacles; paired end turrets near eastern end |
| M112 southwestern projecting range | -172 to -160 | -255 to -231 | Separate smaller roof run rather than bridging quad |
| M117 John P. Cook main east residential range | -49 to -37 | -232 to -189 | North-south slate residential range; irregular end pavilions expand bounds to -54/-22 and Y -258/-175 |
| M126 reading-room main north range | -145 to -67 | -291 to -266 | Long east-west steep gable; huge pointed windows; flat-topped corner turrets/pinnacles distinct from main pitched roof |
| M126 east narrow stack/office return | -66 to -53 | -307 to -269 | Separate north-south volume; not a big hip over whole facility |
| M126 tower candidate at southern junction | -84 to -66 | -307 to -294 | Approximate square tower near (X -75,Y -300); crenellated flat crown. Association inferred from aerial and GIS plan, not measured |
| M126 western flat office/stack section candidate | -122 to -93 | -311 to -292 | Distinct flat roof and mechanical equipment; do not apply reading-room gable |
| M132 Hutchins west street wing | -199 to -177 | -322 to -262 | Four floors, steep slate roof run north-south |
| M132 Hutchins south Monroe wing | -190 to -119 | -325 to -308 | Four floors, east-west slate roof with dormer gables |
| M132 low inner north corridor | -177 to -144 | -290 to -283 | Lower flat/parapeted corridor, preserve internal court |
| M132 internal courtyard void | -177 to -158 | -308 to -290 | Explicit original GIS interior ring; keep open |

The GIS footprints already contain small isolated roof/accessory pieces; do not extrude every small fragment to the Legal Research tower height. M126's six outer polygons include pieces only a few square meters.

### Lurie anchors and corrected structural detail

M401 total footprint bounds: **X 1861.8 to 1879.2; Y 1666.0 to 1680.2**. The main tower body is centered roughly **(1868.5,1673.5)** in its large polygon; an eastern/northeastern canopy occupies about **X 1874.2-1879.2, Y 1674.2-1679.9** and the isolated southeastern canopy occupies about **X 1874.4-1878.8, Y 1666.0-1670.4**. Use the compact main shaft for height, rather than lifting those two canopy projections up 50 m.

**Additional photo actually viewed, best crown/cabin detail:** https://news.engin.umich.edu/wp-content/uploads/2024/06/AnnLurie-feature.jpg . University source page: https://news.engin.umich.edu/2024/06/remembering-philanthropist-ann-lurie/ . This clearly shows:
- Stepped tall brick corner piers surrounding a recessed dark cage with repeated **horizontal metal structure**, open above the acoustic shields.
- Four long pale-gray acoustic blades on the photographed face of the upper cage. They start above a broad flared metal box/platform and finish below the roof's open crown. These are real tower-specific vertical plates, unlike the model's arbitrary facade fins.
- Broad flared gray metal cabin/platform enclosure near mid-height of visible shaft, with sloping lower sides. Do not make a glass box covering the whole tower.
- Narrow vertical slot in lower solid brick shaft; no normal grid of windows.
- Overhanging green/gray copper **hipped cap with short ridge** above the open crown.

No exact blade counts on other faces, cabin height, pillar thickness, or intermediate Z elevations authenticated. Approximate ratios may be modeled from photograph but must retain estimated labels.

Authoritative operating university source found late in audit: https://smtd.umich.edu/facilities/ann-and-robert-h-lurie-carillon/ . It confirms largest bells at visitor level 2, performer at level 3, spiral stair between them, and the keyboard in a small room **at center of the bell chamber**. That is a direct reason not to use GIS FloorCount 12 as twelve regular facade levels. Another viewed crown angle: https://tour.umich.edu/uploads/mphoto_umcampusstock16-036-.jpg .
