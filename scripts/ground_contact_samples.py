"""Sample grade contacts from exported footprint metadata; no rendering dependency."""
from pathlib import Path
import json
from shapely.geometry import shape
root=Path(__file__).resolve().parents[1];samples=[]
for f in json.loads((root/'output/footprints_local_meters.geojson').read_text())['features']:
    p=shape(f['geometry']);props=f['properties'];z=props.get('ground_m',0)
    if props.get('facility_id')=='1000711':
        from shapely.geometry import Polygon
        p=Polygon(max(([p]if p.geom_type=='Polygon'else p.geoms),key=lambda q:q.area).exterior)
        p=p.difference(p.buffer(-1.6))
    for part in [p]if p.geom_type=='Polygon'else p.geoms:
        q=part.buffer(-.15)
        if q.is_empty:q=part
        if q.geom_type!='Polygon':q=max(q.geoms,key=lambda g:g.area)
        pts=[q.representative_point()]+[q.exterior.interpolate(q.exterior.length*k/6)for k in range(6)]
        samples.extend({'code':props['code'],'name':props['name'],'position':[pt.x,pt.y,z]}for pt in pts)
(root/'output/ground_contact_samples.json').write_text(json.dumps(samples,separators=(',',':')))
