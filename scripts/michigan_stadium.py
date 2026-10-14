"""Sunken bowl, two mapped premium buildings and field-aligned markings.
The official footprint is retained. Bowl sections and member sizes are estimates;
90 seating bands represent the continuous bowl, not a certified row inventory.
"""
import math
import numpy as np
import trimesh
from shapely.geometry import Polygon,Point,LineString,box
from shapely import affinity
from shapely.ops import unary_union

def stadium_outline(p):return Polygon(max(([p]if p.geom_type=='Polygon'else p.geoms),key=lambda q:q.area).exterior)
def field_opening(p):
    rings=[Polygon(r)for q in ([p]if p.geom_type=='Polygon'else p.geoms)for r in q.interiors]
    return max(rings,key=lambda q:q.area)

def wedge(inner,outer,i,z,h):
    j=(i+1)%len(inner);xy=[inner[i],outer[i],outer[j],inner[j]]
    vertices=[[*p,z0]for z0 in [z-h,z]for p in xy]
    faces=[[0,2,1],[0,3,2],[4,5,6],[4,6,7],[0,1,5],[0,5,4],[1,2,6],[1,6,5],[2,3,7],[2,7,6],[3,0,4],[3,4,7]]
    m=trimesh.Trimesh(vertices=vertices,faces=faces,process=True);trimesh.repair.fix_normals(m);return m

def build_stadium(ms,p,base,parts,body,t):
    outer=stadium_outline(p);opening=field_opening(p);center=np.array(opening.centroid.coords[0]);a,b,c,d=outer.bounds
    # Published history describes a predominantly below-grade bowl. The section
    # is represented relative to the campus pad; this is not a surveyed elevation.
    field_z=base-16.5;rim=base+7.4;segments=264;angles=np.arange(segments)*2*math.pi/segments
    directions=np.column_stack((np.cos(angles),np.sin(angles)))
    seating_outer=affinity.scale(Point(*center).buffer(1,quad_segs=128),(c-a)*.45,(d-b)*.475).intersection(outer.buffer(-3))
    inner_r=[];outer_r=[]
    def radius(poly,u):
        line=LineString([center,center+u*1000]);g=line.intersection(poly.boundary)
        pts=[g]if g.geom_type=='Point'else list(g.geoms)
        return max(np.linalg.norm(np.array(pt.coords[0])-center)for pt in pts if pt.geom_type=='Point')
    for u in directions:inner_r.append(radius(opening,u));outer_r.append(radius(seating_outer,u))
    inner_r=np.asarray(inner_r);outer_r=np.asarray(outer_r)
    for row in range(90):
        inner=center+directions*(inner_r+(outer_r-inner_r)*(row/90))[:,None]
        outside=center+directions*(inner_r+(outer_r-inner_r)*((row+1)/90))[:,None]
        z=field_z+.6+(rim-field_z-.6)*(row+1)/90
        for i in range(segments):ms['Concrete'if i%6==0 else 'Seat'].append(wedge(inner,outside,i,z,.25))
    # A retaining perimeter closes the excavated bowl into the ground; it is not
    # a freestanding thin seating disk. Gate/arch details sit on this enclosure.
    casing=outer.difference(outer.buffer(-3.0));body(casing,-19,26.4,'Brick',False)
    suite_parts=[q.intersection(p)for props,q in parts if props.get('osm_id')in ['way/560433244','way/560433245']]
    for q in suite_parts:
        body(q,0,6.8,'Brick',True,levels=2,arch=False)
        body(q,6.8,22.6,'Brick',True,levels=4,arch=False,cont=True)
        for qq in t.polygons(q):
            ms['RoofZinc'].append(t.extrusion(qq,base+29.4,.28))
            edge=qq.buffer(.3).difference(qq.buffer(-.3))
            for part in t.polygons(edge):ms['RoofEdge'].append(t.extrusion(part,base+29.68,.35))
    rect=np.asarray(opening.minimum_rotated_rectangle.exterior.coords)[:4];u=rect[1]-rect[0]
    if np.linalg.norm(u)<np.linalg.norm(rect[2]-rect[1]):u=rect[2]-rect[1]
    u/=np.linalg.norm(u)
    if u[1]<0:u=-u
    v=np.array([u[1],-u[0]])
    def plane_polygon(coords):return Polygon([center+v*xx+u*yy for xx,yy in coords])
    def paint(coords,mat='Marking',zz=.20):
        for q in t.polygons(plane_polygon(coords)):ms[mat].append(t.extrusion(q,field_z+zz,.014))
    field=plane_polygon([(-24.384,-54.864),(24.384,-54.864),(24.384,54.864),(-24.384,54.864)])
    for q in t.polygons(field):ms['Grass'].append(t.extrusion(q,field_z,.15))
    for yy in np.arange(-45.72,45.721,9.144):paint([(-24.384,yy-.055),(24.384,yy-.055),(24.384,yy+.055),(-24.384,yy+.055)])
    for yy in np.arange(-44.806,45.0,.9144):
        for xx in [-24.0,-3.1,3.1,24.0]:paint([(xx-.28,yy-.045),(xx+.28,yy-.045),(xx+.28,yy+.045),(xx-.28,yy+.045)])
    for sign in [-1,1]:
        y0=sign*50.292;paint([(-24.384,y0-4.572),(24.384,y0-4.572),(24.384,y0+4.572),(-24.384,y0+4.572)],'Blue',.18)
        goal=center+u*sign*54.864
        ms['Maize'].append(t.cylinder((*goal,field_z),(*goal,field_z+3.05),.12,8))
        for side in [-1,1]:
            end=goal+v*side*2.82;ms['Maize'].append(t.cylinder((*end,field_z+3.05),(*end,field_z+8.5),.08,6))
        ms['Maize'].append(t.cylinder((*(goal-v*2.82),field_z+3.05),(*(goal+v*2.82),field_z+3.05),.08,6))
    M=[(-9,-6),(-9,6),(-5,6),(0,0),(5,6),(9,6),(9,-6),(4,-6),(4,0),(0,-5),(-4,0),(-4,-6)]
    paint(M,'Maize',.23)
    # Blue-framed north/south video boards, positioned behind the bowl rim.
    for sign in [-1,1]:
        board=center+u*sign*((d-b)*.48);width=46.3;hh=16.8;top=base+34.5
        q=Polygon([board-v*width/2-u*.8,board+v*width/2-u*.8,board+v*width/2+u*.8,board-v*width/2+u*.8])
        for pp in t.polygons(q):ms['Blue'].append(t.extrusion(pp,top-hh,hh))
        screen=q.intersection(q.buffer(-.12))
        # The face is a recessed dark panel; no flickering emissive texture.
        front=board-u*sign*.85
        panel=Polygon([front-v*(width/2-1),front+v*(width/2-1),front+v*(width/2-1)-u*sign*.10,front-v*(width/2-1)-u*sign*.10])
        ms['Screen'].append(t.extrusion(panel,top-hh+1.0,hh-2.2))
        for off in [-width*.36,width*.36]:
            pp=board+v*off;ms['Brick'].append(t.boxmesh(pp[0],pp[1],base-1,2.0,2.0,top-base-hh+2))
    # Brick perimeter pilasters ground the facade, with a stone coping.
    ring=outer.difference(outer.buffer(-.75))
    for q in t.polygons(ring):ms['Sandstone'].append(t.extrusion(q,base+7.4,.18))
    return {'field_z':field_z,'rim_z':rim,'seating_bands':90,'section_aisles':44,'suite_source_parts':['way/560433244','way/560433245'],'field_size_m':[48.768,109.728],'reference':'https://mgoblue.com/sports/2017/6/16/facilities-michigan-stadium-html'}
