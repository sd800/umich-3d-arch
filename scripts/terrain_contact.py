"""Flat grade pads for client camera/hover; same published footprint/grade as CAD."""
import json
from shapely.geometry import shape

def grade_pads(out):
    return [{'code':f['properties']['code'],'height':f['properties'].get('ground_m',0),'bounds':list(shape(f['geometry']).bounds),'geometry':f['geometry']} for f in json.loads((out/'footprints_local_meters.geojson').read_text())['features']]
