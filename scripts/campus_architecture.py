"""Exterior roof and facade components, kept separate from source plan geometry."""
import numpy as np
import trimesh
from shapely.geometry import box,Point,Polygon
from shapely.ops import unary_union
from architecture_profiles import NORTH,ROSS,REFERENCES

def pyramid(ms,cx,cy,z,size,rise,mat):
    a=size/2;v=[[cx-a,cy-a,z],[cx+a,cy-a,z],[cx+a,cy+a,z],[cx-a,cy+a,z],[cx,cy,z+rise]]
    m=trimesh.Trimesh(vertices=v,faces=[[0,2,1],[0,3,2],[0,1,4],[1,2,4],[2,3,4],[3,0,4]],process=True);trimesh.repair.fix_normals(m);ms[mat].append(m)

def roof_finish(ms,p,z,mat,t,parapet=True):
    for q in t.polygons(p):
        ms[mat].append(t.extrusion(q,z,.16))
        if parapet:
            edge=q.simplify(.03,preserve_topology=True).buffer(-.14,join_style=2).difference(q.simplify(.03,preserve_topology=True).buffer(-.45,join_style=2))
            for part in t.polygons(edge):ms['RoofEdge'].append(t.extrusion(part,z+.16,.38))

def edge_fins(ms,p,z,height,t,mat='Terracotta',spacing=2.6,depth=.45,width=.16):
    for q in t.polygons(p):
        for a,b in zip(np.asarray(q.exterior.coords)[:-1],np.asarray(q.exterior.coords)[1:]):
            vec=b-a;length=np.linalg.norm(vec)
            if length<4:continue
            u=vec/length;n=np.array([u[1],-u[0]])
            for offset in np.arange(1.3,length-.7,spacing):
                c=a+u*offset+n*.12;strip=Polygon([c-u*width/2,c+u*width/2,c+u*width/2+n*depth,c-u*width/2+n*depth]);ms[mat].append(t.extrusion(strip,z,height))

def accents(ms,p,base,ident,volumes,t):
    a,b,c,d=p.bounds;x,y=p.centroid.coords[0]
    for q,hh,n,wall,roof in volumes:
        roof_finish(ms,q,base+hh,roof,t)
        if roof=='RoofGlazing':
            aa,bb,cc,dd=q.bounds
            for xx in np.arange(aa+1,cc,4.5):
                for grid in t.polygons(box(xx-.045,bb,xx+.045,dd).intersection(q)):ms['RoofEdge'].append(t.extrusion(grid,base+hh+.17,.07))
            for yy in np.arange(bb+1,dd,4.5):
                for grid in t.polygons(box(aa,yy-.045,cc,yy+.045).intersection(q)):ms['RoofEdge'].append(t.extrusion(grid,base+hh+.17,.07))
        # Recessed base and separated floor-edge bands give the wings depth.
        for part in t.polygons(q):
            edge=part.simplify(.03,preserve_topology=True).buffer(.10,join_style=2).difference(part.simplify(.03,preserve_topology=True).buffer(-.10,join_style=2))
            for zz in [base+.35,base+hh-.22]:
                for g in t.polygons(edge):ms['RoofEdge'if zz>base+hh/2 else 'Sandstone'].append(t.extrusion(g,zz,.16))
        if ident in ROSS:
            edge_fins(ms,q,base+.6,hh-.7,t,'Terracotta',2.35,.32,.13)
        elif ident in ['1005418','1005504','1005092']:
            edge_fins(ms,q,base+1,hh-1.3,t,'RoofEdge',4.8,.38,.12)
    if ident=='1005188':
        # Low north/south pavilions and a real green terrace, separated from the
        # tall terracotta/glass academic bar and the glazed Winter Garden.
        for q,hh,n,wall,roof in volumes:
            if n==2 and wall!='Glass':
                for g in t.polygons(q.buffer(-1.4)):ms['RoofGreen'].append(t.extrusion(g,base+hh+.18,.12))
            if wall=='Glass':
                edge_fins(ms,q,base+hh+.17,.28,t,'RoofEdge',3.2,.05,.12)
        # Long raised glazed canopy along the Tappan frontage; open below.
        canopy=p.intersection(box(a,b+14,a+5,d-12))
        for q in t.polygons(canopy):ms['Glass'].append(t.extrusion(q,base+10.8,.22))
        for yy in np.arange(b+18,d-12,12):
            if p.buffer(1).contains(Point(a+1.8,yy)):ms['Sandstone'].append(t.boxmesh(a+1.8,yy,base-.2,.7,.7,11))
    elif ident=='1005370':
        # Blau's higher bar with a projecting glass bay and a recessed ground floor.
        glass=p.intersection(box(a+.4,b+.3,c-.4,b+3.0))
        for q in t.polygons(glass):ms['Glass'].append(t.extrusion(q,base+13.0,8.5))
        edge_fins(ms,glass,base+13,8.5,t,'RoofEdge',2.8,.1,.08)
    elif ident=='1000137':
        for q in t.polygons(p.buffer(-1.3)):ms['RoofGreen'].append(t.extrusion(q,base+13.48,.15))
        edge_fins(ms,p.intersection(box(a,b,c,b+5)),base+2,10,t,'Glass',1.8,.4,.10)
    elif ident in ['1000135','1000139','1000253']:
        edge_fins(ms,p,base+1,max(v[1]for v in volumes)-1,t,'Terracotta'if ident!='1000253'else 'RoofZinc',2.6,.65,.12)
    elif ident=='1000396':
        main=p.intersection(box(1878,1530,1960,1630));portico=main.intersection(box(1878,1611,1960,1630))
        for q in t.polygons(main):
            ms['Sandstone'].append(t.extrusion(q,base+18.5,.65));ms['RoofZinc'].append(t.extrusion(q,base+19.15,.14))
        for xx in np.arange(1882,1957,14):
            yy=1620.5
            if portico.buffer(.5).contains(Point(xx,yy)):ms['Sandstone'].append(t.boxmesh(xx,yy,base-.2,1.3,1.3,19.4))
        # Large north glazing, full-height open portico, and pyramidal skylights.
        for xx in np.arange(1886,1951,14):
            for yy in [1568,1602]:
                if main.buffer(-4).contains(Point(xx,yy)):pyramid(ms,xx,yy,base+19.29,5.5,2.2,'Glass')
        glass=p.intersection(box(1880,1611,1954,1611.16))
        for q in t.polygons(glass):ms['Glass'].append(t.extrusion(q,base+1,16.6))
    elif ident=='1000432':
        wing=p.intersection(box(1819,1376,1873,1465))
        for q in t.polygons(wing):
            m=t.extrusion(q,base+12.4,.18);top=m.vertices[:,2]>base+12.48;m.vertices[top,2]+=1.6*np.clip((m.vertices[top,1]-1376)/89,0,1);ms['RoofZinc'].append(m)
        edge_fins(ms,wing,base+.7,10.6,t,'WhitePanel',5.5,.42,.24)
    elif ident=='1000407':
        q=p.intersection(box(1965,1805,2040,1864));edge_fins(ms,q,base+1,16.4,t,'RoofEdge',3.3,.48,.15)
    elif ident=='1000440':
        # Brick music-school wings, the central glazed lobby and lower halls.
        lobby=p.intersection(box(1412,1505,1508,1513))
        for q in t.polygons(lobby):ms['Glass'].append(t.extrusion(q,base+.3,7.0))
    elif ident=='1005439':
        studio=p.intersection(box(1377,1311,1413,1343)).buffer(-1.5)
        for q in t.polygons(studio):ms['Glass'].append(t.extrusion(q,base+9.18,1.1));ms['RoofMembrane'].append(t.extrusion(q,base+10.28,.16))
    elif ident=='1005504':
        # Five-storey brick elevations with restrained projecting sunshades.
        edge_fins(ms,p,base+3,18.2,t,'Sandstone',3.7,.65,.13)
    elif ident=='1005418':
        # Curved mapped robot-lab frontage retains a continuous glazed lower zone.
        q=p.intersection(box(a-1,b-1,c+1,b+18));edge_fins(ms,q,base+1,10.6,t,'RoofEdge',5.8,.5,.15)
    return {'reference':REFERENCES.get(ident),'volumes':[{'eaves_m':hh,'storeys':n,'wall':wall,'roof':roof,'area_m2':round(q.area,2)}for q,hh,n,wall,roof in volumes]}

def generic_roof(ms,p,z,roof,t,residential=False):
    if residential:return
    # Modest edge thickness replaces the previous flush, coplanar inset plate.
    roof_finish(ms,p,z,roof,t,parapet=p.area>250)
    # A compact screened service enclosure rather than a huge second roof sheet.
    if p.area>1800:
        q=p.buffer(-6);c=q.representative_point()if not q.is_empty else None
        if c:
            enclosure=box(c.x-3,c.y-2,c.x+3,c.y+2).intersection(q)
            for g in t.polygons(enclosure):
                ms['MetalPanel'].append(t.extrusion(g,z+.18,1.0));ms['RoofEdge'].append(t.extrusion(g,z+1.18,.14))
