"""Bounded exterior joinery following existing mapped facade openings.

No guessed rooftop plant or free-standing facade rods are generated. Every
frame follows an existing glass component; roof coping follows roof triangles.
"""
import math
import numpy as np
import trimesh
from collections import defaultdict
from shapely.geometry import MultiPoint,Polygon,Point,box
from shapely.ops import unary_union

def bell_mesh(center,radius,height,sections=20):
    profile=[(0,.95),(.08,1),(.18,.90),(.43,.61),(.68,.37),(.88,.27),(1,.22)]
    vertices=[]
    for inner in [False,True]:
        for z,r in profile:
            for i in range(sections):
                a=i*math.tau/sections;rr=max(.08,r-(.12 if inner else 0))*radius
                vertices.append([center[0]+rr*math.cos(a),center[1]+rr*math.sin(a),center[2]+z*height])
    faces=[];n=len(profile)*sections
    for off,reverse in [(0,False),(n,True)]:
        for k in range(len(profile)-1):
            for j in range(sections):
                a=off+k*sections+j;b=off+k*sections+(j+1)%sections;c=b+sections;d=a+sections
                faces.extend([[a,c,b],[a,d,c]]if reverse else[[a,b,c],[a,c,d]])
    for k in [0,len(profile)-1]:
        for j in range(sections):
            a=k*sections+j;b=k*sections+(j+1)%sections
            faces.extend([[a,a+n,b+n],[a,b+n,b]])
    m=trimesh.Trimesh(vertices,faces,process=True);trimesh.repair.fix_normals(m,multibody=True)
    assert m.is_watertight
    return m

def detailed_joinery(ms,p,base,height,t,stone='LightStone',gothic=False,frame_material='Frame',reveal=.115):
    out=defaultdict(list);stats={'framed_openings':0,'transoms':0,'roof_coping_m':0.0,'hollow_bells':0}
    def extrude_profile(profile,c,u,n,z,depth,thickness,mat):
        for q in t.polygons(profile):
            m=t.extrusion(q,0,thickness);v=m.vertices.copy()
            m.vertices=np.column_stack([c[0]+u[0]*v[:,0]+n[0]*(depth+v[:,2]),c[1]+u[1]*v[:,0]+n[1]*(depth+v[:,2]),z+v[:,1]])
            trimesh.repair.fix_normals(m);out[mat].append(m)
    # Only existing vertical panes. Thin roof sheets, atrium solids and broad
    # glass walls stay in their bespoke architecture implementation.
    for mat in ['Glass','DarkGlass']:
        for source in ms.get(mat,[]):
            for m in source.split(only_watertight=False):
                if len(m.vertices)>320 or len(m.vertices)<6:continue
                v=np.asarray(m.vertices);z0,z1=v[:,2].min(),v[:,2].max();hh=z1-z0
                if not 1.0<hh<15:continue
                c=v[:,:2].mean(axis=0);_,axes=np.linalg.eigh(np.cov((v[:,:2]-c).T));n=axes[:,0];u=axes[:,1]
                xx=(v[:,:2]-c)@u;thickness=np.ptp((v[:,:2]-c)@n);width=np.ptp(xx)
                if thickness>.55 or not .38<width<14 or width*hh>85:continue
                inside_plus=p.contains(Point(*(c+n*.35)));inside_minus=p.contains(Point(*(c-n*.35)))
                if inside_plus and not inside_minus:n=-n
                elif inside_plus==inside_minus and np.dot(n,c-np.asarray(p.centroid.coords[0]))<0:n=-n
                depth=float(((v[:,:2]-c)@n).max())+.012
                outline=MultiPoint(np.column_stack([xx,v[:,2]-z0])).convex_hull
                if not isinstance(outline,Polygon)or outline.area<.2:continue
                # A shaped stone/metal reveal follows the arch as well as the
                # rectangular jambs. Its height cannot exceed the pane head.
                frame=outline.buffer(.065,join_style=2).difference(outline.buffer(-.065,join_style=2))
                extrude_profile(frame,c,u,n,z0,depth,reveal,stone if gothic else frame_material)
                stats['framed_openings']+=1
                if width>2.3 and hh>2.0:
                    x0,y0,x1,y1=outline.bounds;cross=box(x0,y0+hh*.58-.026,x1,y0+hh*.58+.026).intersection(outline.buffer(-.075))
                    extrude_profile(cross,c,u,n,z0,depth+.02,.085,stone if gothic else frame_material);stats['transoms']+=1
    # Coping remains supported by the existing roof finish and follows its
    # true concavities/courtyard holes. It never covers a whole flat roof twice.
    for mat,parts in ms.items():
        if not(mat.startswith('Roof')or mat in ['Slate','Tile','Metal']):continue
        for source in parts:
            for m in source.split(only_watertight=False):
                v=np.asarray(m.vertices);lo,hi=v[:,2].min(),v[:,2].max()
                if hi-lo>.35 or lo<base+max(4,height*.45) or hi+.065>=base+height-.015:continue
                faces=m.faces[m.face_normals[:,2]>.8]
                if not len(faces):continue
                q=unary_union([Polygon(v[f,:2])for f in faces]).buffer(0)
                if q.area<45:continue
                strip=q.difference(q.buffer(-.09,join_style=2))
                for part in t.polygons(strip):out['Metal'].append(t.extrusion(part,hi,.065))
                stats['roof_coping_m']+=q.length
    # Guardrails follow the topmost modeled grandstand tread, keeping every
    # support planted on its existing seat/terrace surface.
    seats=[m for source in ms.get('Seat',[])for m in source.split(only_watertight=False)]
    if seats:
        peak=max(m.bounds[1,2]for m in seats)
        for m in seats:
            if abs(m.bounds[1,2]-peak)>.03:continue
            v=np.asarray(m.vertices);faces=m.faces[m.face_normals[:,2]>.8]
            if not len(faces):continue
            top=unary_union([Polygon(v[f,:2])for f in faces]).buffer(0)
            for q in t.polygons(top):
                for a,b in zip(np.asarray(q.exterior.coords)[:-1],np.asarray(q.exterior.coords)[1:]):
                    ln=np.linalg.norm(b-a)
                    if ln<12:continue
                    aa,bb=np.array([*a,peak+1.02]),np.array([*b,peak+1.02])
                    out['Frame'].append(t.cylinder(aa,bb,.04,6));stats['guardrails_m']=stats.get('guardrails_m',0)+ln
                    for u0 in np.linspace(0,1,max(2,int(ln/3)+1)):
                        c=a+(b-a)*u0;out['Frame'].append(t.cylinder((*c,peak-.03),(*c,peak+1.02),.035,6))
    # Replace existing cone placeholders with closed hollow flared bell shells.
    for mat in ['Gold','Bronze']:
        originals=ms.get(mat,[]);replacement=[]
        for source in originals:
            for m in source.split(only_watertight=False):
                lo,hi=m.bounds;size=hi-lo
                if len(m.vertices)<80 and .08<size[0]<2.5 and .15<size[2]<2.5 and abs(size[0]-size[1])<.15:
                    c=(lo+hi)/2;c[2]=lo[2];replacement.append(bell_mesh(c,max(size[:2])/2,size[2]));stats['hollow_bells']+=1
                else:replacement.append(m)
        if replacement:ms[mat]=replacement
    stats['roof_coping_m']=round(stats['roof_coping_m'],2)
    stats['added_triangles']=sum(len(m.faces)for parts in out.values()for m in parts)
    return dict(out),stats
