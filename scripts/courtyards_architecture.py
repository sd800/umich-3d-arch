"""Photo-referenced Courtyards exteriors; secondary dimensions approximate."""
import numpy as np
import trimesh
from shapely.geometry import Polygon,Point,LineString,box
from shapely import segmentize
from shapely.ops import unary_union,nearest_points

def build_courtyards(c,p,z,code,lay,info,ms,add_surface,ground,street_union):
    body=12.4;rise=3.2;details={'window_bays':0,'open_courts':0,'hip_roof':True}
    def slab(poly,zz,hh,mat):
        for q in c.polygons(poly):ms[mat].append(c.extrusion(q,zz,hh))
    def face(poly,center,u,n,zz,offset,depth,mat):
        for q in c.polygons(poly):
            m=c.extrusion(q,0,depth);v=m.vertices.copy()
            m.vertices=np.column_stack((center[0]+u[0]*v[:,0]+n[0]*(offset+v[:,2]),center[1]+u[1]*v[:,0]+n[1]*(offset+v[:,2]),zz+v[:,1]))
            trimesh.repair.fix_normals(m);ms[mat].append(m)
    def pane(center,u,n,zz,w,h):
        opening=box(-w/2,0,w/2,h)
        face(opening,center,u,n,zz,.16,.055,'ContextGlass')
        face(opening.buffer(.075,join_style=2).difference(opening),center,u,n,zz,.21,.065,'LightStone')
        face(box(-w/2,h*.47,w/2,h*.47+.045),center,u,n,zz,.28,.035,'WhitePanel')
    for no,q in enumerate(c.polygons(p)):
        c.native_extrude(q,z,body,code+'_Body'+str(no),lay,'ContextBrick',info)
        c.push(code+'B'+str(no),c.extrusion(q,z,body),'ContextBrick',lay,native=False,info=info)
        # A lower, partially exposed street level follows the downslope site.
        support=c.extrusion(segmentize(q,4),z-3.1,3.1);bottom=support.vertices[:,2]<z-1.5
        support.vertices[bottom,2]=np.minimum(z-3.1,c.raw_ground(support.vertices[bottom,0],support.vertices[bottom,1])-1.2)
        ms['ContextStone'].append(support)
        add_surface(q,z-.16,.16,'ContextGround',False,False)
        skin=q.buffer(.115,join_style=2).difference(q)
        slab(skin,z,3.08,'ContextStone')
        # Thin supported belt courses and cornices, clear of the roof surface.
        for zz,depth,hh in [(z+3.08,.17,.16),(z+body-.28,.26,.20),(z+body-.07,.34,.14)]:
            slab(q.buffer(depth,join_style=2).difference(q.buffer(-.08,join_style=2)),zz,hh,'LightStone')
        roof=q.buffer(.32,join_style=2)
        # Mitred offset contours keep each long roof face planar. A regular
        # XY grid gave neighboring triangles slightly different slopes and
        # visible patchwork lighting across an otherwise continuous hip.
        slope=.57;limit=rise/slope;distances=np.r_[np.arange(0,limit,.4),limit]
        for d0,d1 in zip(distances[:-1],distances[1:]):
            outer=roof.buffer(-d0,join_style=2);inner_roof=roof.buffer(-d1,join_style=2)
            for part in c.polygons(outer.difference(inner_roof)):
                m=c.extrusion(part,z+body,.13);top=m.vertices[:,2]>z+body+.06
                for i in np.flatnonzero(top):
                    pt=Point(*m.vertices[i,:2])
                    distance=d0 if inner_roof.is_empty or outer.boundary.distance(pt)<=inner_roof.boundary.distance(pt) else d1
                    m.vertices[i,2]+=distance*slope
                trimesh.repair.fix_normals(m);ms['RoofContextSlate'].append(m)
        for part in c.polygons(roof.buffer(-limit,join_style=2)):
            ms['RoofContextSlate'].append(c.extrusion(part,z+body+rise,.13))
        for inner,ring in enumerate([q.exterior,*q.interiors]):
            cc=np.asarray(ring.coords)
            for a,b in zip(cc[:-1],cc[1:]):
                length=np.linalg.norm(b-a)
                if length<2.7:continue
                u=(b-a)/length;n=np.array([u[1],-u[0]]);count=max(1,round(length/3.05));pitch=length/count
                # Broad pale vertical panels alternate with brick apartment
                # bays; these are attached cladding, not freestanding rods.
                for k in range(count):
                    at=a+u*(k+.5)*pitch
                    if k%7 in [2,3] or inner:
                        face(box(-pitch*.48,0,pitch*.48,body-3.2),at,u,n,z+3.18,.035,.055,'WhitePanel')
                    for level in range(4):pane(at,u,n,z+.65+level*3.1,1.0,1.65);details['window_bays']+=1
                    if not inner and n[0]<-.65:
                        # Show the lower walk-out windows only where the
                        # actual downhill terrain leaves enough wall exposed.
                        at2=at+n*.25;level=float(ground(*at2))
                        if level<z-1.6:pane(at,u,n,z-2.45,1.0,1.45)
                if not inner and n[0]<-.65 and length>25:
                    at=(a+b)/2;ex=at+n*.32;entry=max(z-2.8,min(z,float(ground(*ex))+.10))
                    # Two grounded piers carry the restrained entry portico.
                    for sign in [-1,1]:
                        pi=at+u*sign*1.85+n*1.15;ms['LightStone'].append(c.boxmesh(*pi,entry,.28,.28,2.72))
                    band=Polygon([at-u*2.25-n*.12,at+u*2.25-n*.12,at+u*2.25+n*1.55,at-u*2.25+n*1.55])
                    slab(band,entry+2.72,.23,'LightStone')
                    pane(at,u,n,entry+.05,2.25,2.35)
                    foot=Point(*(at+n*1.3));path=LineString([foot,nearest_points(foot,street_union)[1]]).buffer(1.35,cap_style=2)
                    add_surface(path.difference(p),.16,.055,'ContextWalk')
        # Open court deck with perimeter circulation and a small furnished
        # patio, independently interpreted from the official amenity photos.
        for ring in q.interiors:
            court=Polygon(ring);details['open_courts']+=1;a,b,d,e=court.bounds
            walk=court.difference(court.buffer(-1.6,join_style=2))
            spine=LineString([(a,(b+e)/2),(d,(b+e)/2)]).buffer(1.1).intersection(court)
            patio=box(a+1.6,b+1.6,min(a+10,d-1.6),min(b+11,e-1.6)).intersection(court)
            pavement=unary_union([walk,spine,patio]);lawn=court.difference(pavement)
            add_surface(court,z-.15,.15,'ContextGround',False,False)
            add_surface(pavement,z+.02,.07,'ContextPaving',False,False);add_surface(lawn,z+.02,.055,'ContextGrass',False,False)
            if patio.area>30:
                pc=patio.representative_point();cx,cy=pc.x,pc.y
                for dx in [-2.3,2.3]:
                    for dy in [-2.0,2.0]:ms['LightStone'].append(c.boxmesh(cx+dx,cy+dy,z+.08,.16,.16,2.55))
                for dy in np.arange(-2.2,2.21,.44):ms['LightStone'].append(c.boxmesh(cx,cy+dy,z+2.63,5.1,.14,.16))
                for dx in [-1.3,1.3]:
                    for leg in [-.48,.48]:ms['Furniture'].append(c.boxmesh(cx+dx+leg,cy,z+.08,.08,.38,.42))
                    ms['Furniture'].append(c.boxmesh(cx+dx,cy,z+.50,1.35,.48,.10))
                for xx,yy in [(d-3,b+3),(d-3,e-3)]:
                    if lawn.covers(Point(xx,yy)):
                        ms['Trunk'].append(c.cylinder((xx,yy,z+.04),(xx,yy,z+2.4),.10,5));m=trimesh.creation.icosphere(subdivisions=0,radius=1.5);m.apply_scale([1,1,1.2]);m.apply_translation([xx,yy,z+3.0]);ms['ContextLeaves'].append(m)
    return details
