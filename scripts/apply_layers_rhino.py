"""Run inside Rhino after importing UMich_AnnArbor.3ds.
3DS does not store native Rhino layers; restore them using layer_map.json.
The native .3dm delivery already contains all layers and meter units.
"""
import os,json,io
import rhinoscriptsyntax as rs
try:
    root=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path=os.path.join(root,'output','layer_map.json')
except NameError:
    path=None
if not path or not os.path.exists(path):
    path=rs.OpenFileName('Choose output/layer_map.json','JSON (*.json)|*.json||')
if path:
    with io.open(path,'r',encoding='utf-8') as f:layer_map=json.load(f)
    rs.EnableRedraw(False)
    count=0
    try:
        for oid in rs.AllObjects() or []:
            name=rs.ObjectName(oid)
            if name not in layer_map:continue
            layer=layer_map[name]['layer']
            if not rs.IsLayer(layer):rs.AddLayer(layer)
            rs.ObjectLayer(oid,layer);count+=1
    finally:rs.EnableRedraw(True)
    print('Restored layers for %s campus objects.'%count)
