"""Read back the CAD deliverables: metric units, nonempty layers, valid solids."""
from pathlib import Path
import json,collections,math
import rhino3dm as rh
from cad_delivery import ensure_cad
ensure_cad()
r=Path(__file__).resolve().parents[1];out=r/'output'
summary=json.loads((out/'model_summary.json').read_text());records=json.loads((out/'buildings.json').read_text())
neighbors=json.loads((out/'neighboring_records.json').read_text())
m=rh.File3dm.Read(str(out/'UMich_AnnArbor_Layered.3dm'))
assert m and m.Settings.ModelUnitSystem==rh.UnitSystem.Meters
assert len(m.Layers)==len(records)+len(neighbors)+2==summary['layers']
assert {l.Name for l in m.Layers}=={r['layer'] for r in [*records,*neighbors]}|{'环境_Environment','Neighboring_Environment'}
counts=collections.Counter(o.Attributes.LayerIndex for o in m.Objects)
assert set(counts)==set(range(len(m.Layers)))
solids=meshes=curves=0
for o in m.Objects:
    g=o.Geometry;assert g.IsValid,o.Attributes.Name
    if isinstance(g,rh.Extrusion):assert g.IsSolid,o.Attributes.Name;solids+=1
    elif isinstance(g,rh.Mesh):
        assert g.IsClosed,o.Attributes.Name
        for v in g.Vertices:assert all(math.isfinite(x) for x in [v.X,v.Y,v.Z])
        meshes+=1
    elif isinstance(g,rh.Curve):curves+=1
assert solids==summary['native_closed_solids']
info={'format':'Rhino 3DM v7','units':'meters','layers':len(m.Layers),'nonempty_layers':len(counts),'objects':len(m.Objects),'closed_native_solids':solids,'closed_mesh_objects':meshes,'plan_curves':curves,'all_geometry_valid':True,'named_views':[v.Name for v in m.NamedViews],'georeference':{'wgs84':summary['origin_wgs84'],'projection':'EPSG:32617','local_z_zero_m':225}}
(out/'rhino_validation.json').write_text(json.dumps(info,ensure_ascii=False,indent=2));print(json.dumps(info,indent=2))
