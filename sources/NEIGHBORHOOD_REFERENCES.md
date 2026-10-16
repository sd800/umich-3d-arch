# Ann Arbor campus neighboring areas

## Sources

- [OpenStreetMap](https://www.openstreetmap.org/copyright): georeferenced building footprints and courtyard holes, mapped streets and paths, surface parking outlines, land use and mapped trees. Three additional source snapshots cover downtown/Kerrytown, Broadway and the river/arboretum on 15 October 2026. Retained architecture snapshots cover Central/Athletic and North Campus on 13 October. `neighboring_source_manifest.json` records each request and the uncompressed source SHA-256.
- [U-M Facilities & Operations](https://map.fo.umich.edu/): active university footprints take precedence over overlapping contributed geometry. University-operated facilities are excluded from neighboring classification. Neighboring areas are a context grouping, not a cadastral ownership survey.
- [USGS 3DEP](https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer): the same local terrain datum as the campus model; building grades match the highest sampled/exported ground below each footprint. Closed foundations extend beneath the terrain.
- [City of Ann Arbor downtown building-height inventory](https://www.a2gov.org/media/ionpwgug/premium-evaluation-2023-08-08-packet-building-heights-doc.pdf): historical municipal storey/height estimates for Tower Plaza, University Towers, Graduate Ann Arbor (listed as Campus Inn at 615 E Huron), Landmark (601 Forest), Zaragon Place and Foundry Lofts. Feet are converted to meters. These remain municipal estimates rather than measured current surveys.
- [Tower Plaza north-face recladding / O’Neal Construction](https://www.onealconstruction.com/project/tower-plaza-north-face-recladding/): 26-storey tower and curtain-wall reference.
- [Graduate by Hilton Ann Arbor](https://www.hilton.com/en/hotels/arbgagu-graduate-ann-arbor/): current hotel name and address.
- [Marquee Arts](https://marquee-arts.org/contact/): Michigan Theater and State Theatre names/addresses.
- [Nickels Arcade / Destination Ann Arbor](https://www.annarbor.org/listing/nickels-arcade/1108/) and [Kerrytown district](https://www.annarbor.org/things-to-do/downtown/kerrytown/): place identity and neighborhood context.

## Modeling and controls

The context extends around State Street, South University, Main Street/Kerrytown, Packard and the stadium, Broadway, and Plymouth Road. Each accepted building retains its mapped outline and courtyard openings, an individual `N` CAD layer, a closed contact foundation, attached windows and entrances, and its own flat or pitched roof. Small pitched residential roofs and flat commercial volumes are differentiated. Secondary facade modules, untagged heights and roof forms are interpretations. No automatic rooftop machinery is added. Party-wall window conflicts and duplicate mapped footprints are excluded. New road/sidewalk geometry fills urban gaps without covering the university’s mapped landscape surfaces. Parking outlines are retained without inventing a stripe grid. Mapped tree points are retained; supplemental woodland/cemetery canopy estimates are described separately below.

A restrained, slightly muted material palette separates context from the university architecture. Context data remains separate in `neighboring_records.json`, `neighboring_footprints.geojson`, `neighboring_building_dimensions_and_sources.csv` and `neighboring_areas.json`. All project filenames are English.

`⁺Campus neighboring areas` is checked by default and appears first in All when search is empty. Turning it off hides the complete context group, including landscape, labels and picking, without moving the camera or changing campus visibility. Search includes both campus and neighboring buildings; the group control is absent while searching. Every neighboring label uses the `⁺` prefix. Campus building counts and the 29-stop campus tour remain campus-only. English is the default; Chinese is an explicit language choice.

The neighboring database is © OpenStreetMap contributors, ODbL 1.0. No raw reference photography is redistributed.

## Ground continuity and land cover

The terrain closes omitted internal parcels and joins narrow seams between study areas. Official mapped planting, paving, buildings and water take priority. North Campus gaps and Nichols Arboretum use mapped forest/meadow boundaries, with locally interpreted unrecorded transitions. Residential land use receives subdued lawns and short building setbacks; commercial blocks receive paved/aggregate ground, mapped surface parking and attached entry paths. Narrow entry links and supplemental canopy positions are approximate. Existing GIS tree points remain distinct in model counts.

Forest Hill Cemetery is retained as neighboring context. Its retained OSM service-drive centerlines and mapped internal paths are excluded from ordinary road/roadside-sidewalk passes, then rebuilt in a muted internal-path material against continuous grass and approximate canopy cover. They are genuine circulation routes, rather than arbitrary drawn lines. The whole cemetery context and its label can be hidden with the neighboring-area control.

Ground character was visually reviewed with [Esri World Imagery](https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer), using the request/extent metadata retained in `ground_imagery_reference.json`. Imagery dates vary; no raster is embedded or redistributed. Nichols Arboretum is cross-checked against [MBGNA natural-area resources](https://mbgna.umich.edu/natural-area-data-resources) and its [official campus-plan description](https://campusplan2050.umich.edu/plans-and-maps/central-campus/nichols-arboretum/). Woodland outlines and soil/turf transitions are study-model interpretations where finer survey data is unavailable.

`output/ground_context_validation.json` records terrain probes at the reported north-campus gaps and cemetery, and verifies that cemetery circulation no longer uses the main-road material.

The Ann Arbor Railroad right of way near Buhr and the athletic district uses retained OSM active railway centerlines and the tagged 1.435 m gauge. Rail, sleeper and ballast dimensions are simplified exterior interpretations. Road surfaces remain visible at level crossings; abandoned sidings are not rendered as active track. Its campus location is cross-checked against the [official Central Campus plan](https://campusplan2050.umich.edu/plans-and-maps/central-campus/).

## Courtyards apartments beside NCRB

The [property’s official address](https://courtyardsapts.com/) and [move-in building list](https://courtyardsapts.com/p/movein/) identify 1760, 1770 and 1780 Broadway Street. The [official exterior gallery](https://courtyardsapts.com/gallery/) was inspected for the pale lower facade, brick upper floors, narrow vertical windows and light cornice. Retained OSM relations 3874939, 3874940 and 3874941 supply all three four-storey footprints with courtyard voids. The private parcel lay just outside the rectangular Broadway selection; it is now explicitly included as neighboring context. Height, courtyard paving and secondary facade members remain approximate.

## Courtyards exterior optimization — 16 October 2026

The property’s [official aerial](https://courtyardsapts.com/assets/images/cache/cMe9cnw5XtAzri9NaNEF5Cv2ZI4I6BwBE6ZDj6Dk-4d8d171fb758355329d243db2d541432.jpg) shows the three courtyard rings with dark gray hipped roof ranges, cream lower masonry and alternating upper brick/white fields. It also reveals a partially exposed lower street level below the four main residential storeys on the sloping site. [Official exterior/amenity photographs](https://courtyardsapts.com/gallery/) inform narrow framed windows, the supported entrance canopy, court patio paving and a restrained pergola/seating interpretation. Retained OSM outlines and their three interior rings remain authoritative. The four-floor tag counts main residential storeys; eaves, hip rise, downhill lower exposure, cladding module positions and furniture are photo-informed exterior estimates. No photo pixels are redistributed. Courtyards standing-label registration is disabled; search, selection and hover remain available.
