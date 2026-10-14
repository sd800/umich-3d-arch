"""Render explicit satellite-referenced parking rows and source CAD dividers.
No stripe grid is fitted to a lot's envelope. Source raster is reference-only.
"""
import json,math
import numpy as np
from pathlib import Path
from shapely.geometry import shape,Polygon,LineString
from shapely.ops import unary_union

def parking_detail(root,scope,footprints,planting):
    root=Path(root);lots=json.loads((root/'sources/parking_lots.geojson').read_text());layouts=json.loads((root/'sources/parking_rows.json').read_text());groups={f['properties']['id']:shape(f['geometry'])for f in lots['features']};clear=footprints.buffer(.4).union(planting.buffer(.15));paint=[];audit=[]
    for row in layouts['rows']:
        mask=groups[row['group_id']].intersection(scope).difference(clear).buffer(0)
        path=np.asarray(row['path'],float);count=0
        for a,b in zip(path[:-1],path[1:]):
            ln=np.linalg.norm(b-a)
            if ln<2.6:continue
            u=(b-a)/ln;n=np.array([-u[1],u[0]]);depth=row['depth_m'];spacing=row['spacing_m'];shift=depth/math.tan(math.radians(row['angle_deg']));line=LineString([a,b]).buffer(.045,cap_style=2);paint.append(line.intersection(mask))
            for side in row['sides']:
                offset=(n*depth+u*shift)*side
                for k in range(int(ln/spacing)):
                    start=a+u*spacing*k;end=start+u*spacing;bay=Polygon([start,end,end+offset,start+offset])
                    if bay.intersection(mask).area<bay.area*.90:continue
                    for aa,bb in [(start,start+offset),(end,end+offset)]:paint.append(LineString([aa,bb]).buffer(.045,cap_style=2).intersection(mask))
                    count+=1
        audit.append({'lot':row['group_id'],'name':row['lot_name'],'outlined_bays':count,'path':row['path'],'source':row['reference_url']})
    raw=root/'sources/parking_paint.geojson';native=0
    if raw.exists():
        content=json.loads(raw.read_text());mask=unary_union(list(groups.values())).intersection(scope).difference(clear)
        for feature in content['features']:
            g=shape(feature['geometry']);q=g.buffer(.045,cap_style=2,join_style=2).intersection(mask)
            if not q.is_empty:paint.append(q);native+=1
    result=unary_union([q for q in paint if not q.is_empty]).buffer(0)
    audit={'line_width_m':.09,'native_cad_or_observed_paint_segments':native,'interpreted_row_paths':len(audit),'outlined_bays':sum(q['outlined_bays']for q in audit),'row_results':audit,'array_from_lot_envelope':False,'planting_and_buildings_override_paint':True}
    (root/'output/parking_validation.json').write_text(json.dumps(audit,indent=2)+'\n')
    return result
