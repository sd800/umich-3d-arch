# Sources and modeling decisions

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
