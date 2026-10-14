"""Public-photo exterior interpretations for the Diag, Law Quad and Lurie Tower.
Original GIS plan geometry is retained. Section elevations and small members remain estimates.
"""
import numpy as np
import trimesh
from shapely.geometry import box,Point,Polygon,LineString
from shapely.ops import unary_union

CORE={
'1000555':(7,24.8,'BuffBrick','RoofMembrane'),
'1000060':(6,23.8,'Brick','RoofMembrane'),
'1000063':(8,29.4,'Brick','RoofMembrane'),
'1000054':(3,17.2,'Brick','Slate'),
'1000066':(4,19.4,'Brick','Slate'),
'1000152':(4,20.0,'Brick','RoofMembrane'),
'1000206':(2,7.8,'Brick','RoofMembrane'),
'1000197':(4,17.2,'Brick','RoofMembrane'),
'1000175':(8,30.4,'Brick','RoofMembrane'),
'1000185':(4,22.4,'Brick','Tile'),
'1000181':(8,32.8,'Brick','RoofMembrane'),
'1000227':(4,17.4,'Brick','RoofMembrane'),
'1000159':(2,13.0,'Limestone','RoofMembrane'),
'1000189':(4,18.5,'BuffBrick','RoofMembrane'),
'1000158':(4,18.7,'Brick','RoofMembrane'),
'1000208':(4,17.8,'Brick','RoofMembrane'),
'1005517':(5,21.0,'Brick','RoofMembrane'),
'1000167':(4,33.0,'Brick','Tile'),
'1000211':(4,18.5,'Brick','RoofMembrane'),
'1000216':(3,13.3,'Brick','Tile'),
'1000151':(2,17.5,'Limestone','RoofMembrane'),
'1000172':(4,23.5,'Sandstone','RoofMembrane'),
'1000191':(5,23.2,'Brick','Slate'),
'1000120':(6,31.8,'Brick','Slate'),
'1000108':(3,21.0,'Granite','Slate'),
'1000109':(3,19.0,'Granite','Slate'),
'1000184':(8,41.0,'Granite','Slate'),
'1000179':(4,23.0,'Granite','Slate'),
'1005235':(4,19.2,'Granite','RoofMembrane'),
}
REFS={
'1000152':'https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/angell-hall/',
'1000185':'https://www.lib.umich.edu/visit-and-study/floor-plans/hatcher-library-north-floors/',
'1000181':'https://www.lib.umich.edu/visit-and-study/floor-plans/hatcher-library-south-floors/',
'1000159':'https://clements.umich.edu/about/history/construction-of-the-library/',
'1000227':'https://www.lib.umich.edu/visit-and-study/floor-plans/shapiro-library-floors/',
'1000189':'https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/dana-building/',
'1000158':'https://bentley.umich.edu/discover/bentley-materials/campus-tour/building-index/chemistry-building/',
'1000167':'https://regents.umich.edu/files/meetings/09-14/2014-09-IX-9.pdf',
'1000197':'https://umaec.umich.edu/projects/completed-projects/mason-hall-and-haven-hall-addition-and-renovation/',
'1000175':'https://umaec.umich.edu/projects/completed-projects/mason-hall-and-haven-hall-addition-and-renovation/',
'1000208':'https://maps.studentlife.umich.edu/building/harrison-m-randall-laboratory',
}
REFS['1000555']='https://tour.umich.edu/text-based/locations/bursley-hall/'
REFS['1000060']='https://tour.umich.edu/text-based/locations/mary-markley-hall/'
REFS['1000063']='https://tour.umich.edu/text-based/locations/south-quad/'
REFS['1000054']='https://tour.umich.edu/text-based/locations/east-quad/'
REFS['1000066']='https://tour.umich.edu/text-based/locations/west-quad/'
REFS['1000120']='https://tour.umich.edu/text-based/locations/michigan-union/'
REFS['1000172']='https://tour.umich.edu/text-based/locations/rackham-school-of-graduate-studies/'
REFS['1000211']='https://tour.umich.edu/text-based/locations/school-of-kinesiology/'
REFS['1000191']='https://tour.umich.edu/text-based/locations/michigan-league/'
LAW={'1000108','1000109','1000184','1000179','1005235'}
for ident in LAW:REFS[ident]='https://michigan.law.umich.edu/about-michigan-law/michigan-law-architecture'

def roof_ranges(p,t):
    """Split long mapped wall ranges before roofing a courtyard or L-shaped plan."""
    remaining=p;out=[];edges=[]
    for q in t.polygons(p):
        for ring in [q.exterior,*q.interiors]:
            xy=np.asarray(ring.coords)
            for a,b in zip(xy[:-1],xy[1:]):
                ln=np.linalg.norm(b-a)
                if ln>14:edges.append((ln,a,b))
    for ln,a,b in sorted(edges,key=lambda v:v[0],reverse=True):
        u=(b-a)/ln;n=np.array([u[1],-u[0]]);mid=(a+b)/2
        if not p.contains(Point(*(mid-n*.15))):n=-n
        ray=LineString([mid-n*.1,mid-n*50]).intersection(p)
        pieces=list(ray.geoms) if hasattr(ray,'geoms')else[ray]
        lengths=[g.length for g in pieces if g.distance(Point(*(mid-n*.25)))<.4]
        depth=min(15,max(4,lengths[0]+.2 if lengths else 10))
        strip=Polygon([a,b,b-n*depth,a-n*depth]);part=remaining.intersection(strip)
        if part.area>12:out.extend(t.polygons(part));remaining=remaining.difference(part)
    out.extend(t.polygons(remaining));return out or t.polygons(p)

def hipped(ms,p,z,rise,mat,t):
    """Four planar roof slopes, clipped to the actual range; short ridge on long roofs."""
    ranges=[]
    for q in t.polygons(p):
        ranges.extend(roof_ranges(q,t) if q.interiors or q.area/q.minimum_rotated_rectangle.area<.68 else [q])
    for q in ranges:
        rr=np.asarray(q.minimum_rotated_rectangle.exterior.coords)[:4];vec=np.roll(rr,-1,axis=0)-rr;u=vec[np.argmax(np.linalg.norm(vec,axis=1))];u/=np.linalg.norm(u);v=np.array([-u[1],u[0]]);c=np.asarray(q.centroid.coords[0]);xy=np.asarray(q.exterior.coords);xx=(xy-c)@u;yy=(xy-c)@v;lo,hi=xx.min(),xx.max();bot,top=yy.min(),yy.max();xm=(lo+hi)/2;ym=(bot+top)/2;half=(top-bot)/2;rl=min(hi-lo,top-bot)/2;left=lo+rl;right=hi-rl
        faces=[[(lo,bot),(hi,bot),(right,ym),(left,ym)],[(lo,top),(left,ym),(right,ym),(hi,top)],[(lo,bot),(left,ym),(lo,top)],[(hi,bot),(hi,top),(right,ym)]]
        for face in faces:
            f=Polygon([c+u*x+v*y for x,y in face])
            for part in t.polygons(q.intersection(f)):
                m=t.extrusion(part,z,.16);local=(m.vertices[:,:2]-c);x0=local@u;y0=local@v;h=rise*np.clip(np.minimum(1-abs(y0-ym)/max(half,.1),np.minimum(x0-lo,hi-x0)/max(rl,.1)),0,1);upper=m.vertices[:,2]>z+.08;m.vertices[upper,2]+=h[upper];trimesh.repair.fix_normals(m);ms[mat].append(m)

def cornice(ms,p,z,t,mat='LightStone',width=.23,thickness=.24):
    for q in t.polygons(p):
        ring=q.buffer(width,join_style=2).difference(q.buffer(-.12,join_style=2))
        for r in t.polygons(ring):ms[mat].append(t.extrusion(r,z,thickness))

def flat(ms,p,z,t,mat='RoofMembrane',parapet=True):
    for q in t.polygons(p):
        ms[mat].append(t.extrusion(q,z,.16))
        if parapet:
            for r in t.polygons(q.buffer(-.10,join_style=2).difference(q.buffer(-.35,join_style=2))):ms['LightStone'].append(t.extrusion(r,z+.16,.26))

def clip_ranges(p,ranges):
    remaining=p;out=[]
    for bounds,height,levels,wall,roof in ranges:
        q=remaining.intersection(box(*bounds));remaining=remaining.difference(q)
        if not q.is_empty:out.append((q,height,levels,wall,roof))
    return out,remaining

def arch_panel(ms,c,u,n,z,w,h,t,mat='DarkGlass'):
    # A round arch with a true curved head, extruded away from the masonry face.
    xy=[(-w/2,0),(w/2,0)]+[(np.cos(a)*w/2,h-w/2+np.sin(a)*w/2)for a in np.linspace(0,np.pi,13)]+[(-w/2,0)]
    m=trimesh.creation.extrude_polygon(Polygon(xy),.10,engine='earcut');v=m.vertices.copy();m.vertices=np.column_stack([c[0]+v[:,0]*u[0]+v[:,2]*n[0],c[1]+v[:,0]*u[1]+v[:,2]*n[1],z+v[:,1]]);trimesh.repair.fix_normals(m);ms[mat].append(m)

def law_dormers(ms,p,z,rise,t,spacing=8.5):
    for q in t.polygons(p):
        for a,b in zip(np.asarray(q.exterior.coords)[:-1],np.asarray(q.exterior.coords)[1:]):
            ln=np.linalg.norm(b-a)
            if ln<15:continue
            u=(b-a)/ln;n=np.array([u[1],-u[0]])
            for s in np.arange(4.3,ln-3.7,spacing):
                c=a+u*s-n*.9;r=Polygon([c-u*1.0-n*.1,c+u*1.0-n*.1,c+u*1.0-n*2.1,c-u*1.0-n*2.1]).intersection(q)
                for part in t.polygons(r):ms['Granite'].append(t.extrusion(part,z+.12,1.7));hipped(ms,part,z+1.82,1.25,'Slate',t)
                cp=c+n*.06;arch_panel(ms,cp,u,n,z+.34,1.2,1.35,t)

def law(ms,p,base,ident,body,t):
    a,b,c,d=p.bounds;parts=[]
    if ident=='1000108':
        ranges=[((-189.7,-231.5,-143.5,-216.5),12.8,1,'Granite','RoofZinc'),((a-1,-198,c+1,d+1),14.5,3,'Granite','Slate'),((a-1,b-1,-159,d+1),13.6,3,'Granite','Slate')]
        parts,rest=clip_ranges(p,ranges);parts.append((rest,14.5,3,'Granite','Slate'))
    elif ident=='1000109':parts=[(p,13.4,3,'Granite','Slate')]
    elif ident=='1000184':
        ranges=[((-84,-307,-66,-294),40.0,8,'Granite','flat'),((-146.5,-291.0,-67,-264),17.2,1,'Granite','RoofZinc'),((-146,-318,-116,-283),8.0,2,'Glass','RoofGlazing')]
        parts,rest=clip_ranges(p,ranges);parts.append((rest,18.4,4,'Granite','flat'))
    elif ident=='1000179':
        ranges=[((a-1,b-1,-182,d+1),16.6,4,'Granite','Slate'),((-182,b-1,c+1,-310),16.6,4,'Granite','Slate')]
        parts,rest=clip_ranges(p,ranges);parts.append((rest,11.8,3,'Granite','flat'))
    else:parts=[(p,18.8,4,'Granite','flat')]
    for q,h,n,wall,roof in parts:
        if q.is_empty:continue
        body(q,0,h,wall,windows=wall!='Glass',levels=n,arch=n==1)
        cornice(ms,q,base+.6,t,'LightStone',.08,.30);cornice(ms,q,base+h-.35,t,'LightStone',.24,.27)
        if roof in ['flat','RoofGlazing']:
            flat(ms,q,base+h,t,'RoofGlazing'if roof=='RoofGlazing'else'RoofMembrane')
            if ident=='1000184'and h>30:
                for part in t.polygons(q):t.crenellations(ms,part,base+h+.42,.58)
        else:
            rise=5.6 if roof=='Slate'else 5.0
            if n==1:
                for part in t.polygons(q):ms[roof].extend(t.pitched(part,base+h,rise,'x'))
            else:hipped(ms,q,base+h,rise,roof,t)
            if n>1:law_dormers(ms,q,base+h,rise,t)
            else:
                # Hall buttresses and tall tracery, bounded below each hall eave.
                for part in t.polygons(q):
                    for aa,bb in zip(np.asarray(part.exterior.coords)[:-1],np.asarray(part.exterior.coords)[1:]):
                        length=np.linalg.norm(bb-aa)
                        if length<17:continue
                        u=(bb-aa)/length;n0=np.array([u[1],-u[0]])
                        for s in np.arange(3,length-2,6.6):
                            cc=aa+u*s+n0*.28;strip=Polygon([cc-u*.25,cc+u*.25,cc+u*.25+n0*.50,cc-u*.25+n0*.50]);ms['LightStone'].append(t.extrusion(strip,base,.75*h))
    return {'reference':REFS[ident],'individual_roof_ranges':len(parts),'style':'Granite, limestone trim, varied residential slate and lower hall roofs','unverified_rooftop_enclosures':False}

def lurie(ms,p,base,h,t):
    a,b,c,d=p.bounds;x,y=1868.5,1673.5;w=7.6;depth=8.0
    shaft=box(x-w/2,y-depth/2,x+w/2,y+depth/2).buffer(-.65,join_style=2).buffer(.65,join_style=1,quad_segs=3)
    for q in t.polygons(shaft):ms['BuffBrick'].append(t.extrusion(q,base,h-23.0))
    # Stepped brick corner piers continue around the open carillon chamber.
    for dx in [-1,1]:
        for dy in [-1,1]:
            pier=box(x+dx*w*.40-.65,y+dy*depth*.40-.70,x+dx*w*.40+.65,y+dy*depth*.40+.70)
            ms['BuffBrick'].append(t.extrusion(pier,base+h-23.0,16.4+(1.0 if dx==dy else 0)))
    cage=box(x-w*.45,y-depth*.45,x+w*.45,y+depth*.45)
    for zz in np.arange(h-22.7,h-2.4,1.9):
        ring=cage.difference(cage.buffer(-.14,join_style=2))
        for q in t.polygons(ring):ms['Frame'].append(t.extrusion(q,base+zz,.17))
    for dx in [-1,0,1]:
        for dy in [-1,1]:ms['Frame'].append(t.boxmesh(x+dx*w*.44,y+dy*depth*.44,base+h-22.7,.15,.15,20.1))
    # Broad flared playing cabin/platform, and four suspended acoustic blades on
    # each primary face. These are specific photographed elements, not facade fins.
    platform=t.extrusion(cage.buffer(.45,join_style=2),base+h-25.0,2.3);lower=platform.vertices[:,2]<base+h-23.8;platform.vertices[lower,:2]=np.array([x,y])+(platform.vertices[lower,:2]-[x,y])*.74;trimesh.repair.fix_normals(platform);ms['MetalPanel'].append(platform)
    for side in [-1,1]:
        for dx in np.linspace(-w*.28,w*.28,4):ms['LightStone'].append(t.boxmesh(x+dx,y+side*depth*.48,base+h-22.5,.62,.28,15.6))
    # Narrow slot at the lower shaft rather than a classroom window grid.
    ms['DarkGlass'].append(t.boxmesh(x,y-depth*.502,base+6.0,.45,.09,h-32.0))
    for level in range(2):
        for ix in range(6):
            for iy in range(5):
                rr=.36-.035*level-.018*ix;bell=trimesh.creation.cone(radius=rr,height=.70-level*.1,sections=8);bell.apply_transform(trimesh.transformations.rotation_matrix(np.pi,[1,0,0]));bell.apply_translation([x+(ix-2.5)*w*.14,y+(iy-2)*depth*.16,base+h-19.5+level*5]);ms['Bronze'].append(bell)
    cap=cage.buffer(.65,join_style=2);hipped(ms,cap,base+h-2.45,2.29,'RoofCopper',t)
    for bounds in [(1874,1674,1879.2,1680.16),(1874.4,1665.97,1878.8,1670.4)]:
        q=box(*bounds).intersection(p)
        for part in t.polygons(q):ms['BuffBrick'].append(t.extrusion(part,base,3.4));hipped(ms,part,base+3.4,1.2,'RoofCopper',t)
    return {'reference':'https://smtd.umich.edu/facilities/ann-and-robert-h-lurie-carillon/','bells':60,'open_belfry':True,'member_dimensions':'Photo-based approximation; overall height remains historical municipal estimate'}

def build_core(ms,p,base,ident,body,t):
    if ident in LAW:return law(ms,p,base,ident,body,t)
    levels,height,wall,roof=CORE[ident];a,b,c,d=p.bounds;x,y=p.centroid.coords[0]
    ranges=[]
    if ident in ['1000555','1000060','1000063']:
        # Separate mapped low commons from the tall residence wings. Boundaries
        # follow map projections; floor elevations remain photo-based estimates.
        low=p.intersection(box(a-1,b-1,c+1,b+(d-b)*.22));parts=[(low,8.6,2,wall,roof),(p.difference(low),height-.45,levels,wall,roof)]
        ranges=[]
    elif ident=='1000172':ranges=[((a+(c-a)*.24,b-1,c-(c-a)*.24,d+1),23.0,4,'Limestone','RoofZinc')]
    elif ident=='1000152':ranges=[((a-1,b-1,a+7,d+1),18.4,4,'Limestone','RoofMembrane'),((-122,b-1,c+1,d+1),15.8,4,'Brick','RoofMembrane')]
    elif ident=='1000185':ranges=[((a-1,3,c+1,d+1),16.8,3,'Brick','Tile')]
    elif ident=='1000158':ranges=[((a-1,b-1,a+63,d+1),17.4,4,'Brick','RoofMembrane')]
    elif ident=='1000151':ranges=[((a-1,-73,c+1,d+1),11.8,2,'LightStone','RoofMembrane')]
    elif ident=='1000191':ranges=[((a-1,b-1,c+1,b+19),14.4,2,'Brick','Slate')]
    elif ident=='1000120':ranges=[((a-1,b-1,c-25,d+1),18.5,4,'Brick','Slate'),((c-25,b+25,c+1,b+57),30.8,6,'Brick','RoofMembrane')]
    if ranges:parts,rest=clip_ranges(p,ranges);parts.append((rest,height-.45 if ident!='1000172'else 15.2,levels if ident!='1000172'else 3,wall,roof))
    elif ident not in ['1000555','1000060','1000063']:parts=[(p,(20.4 if ident=='1000167'else height-.45),levels,wall,roof)]
    for q,hh,n,mat,roofmat in parts:
        if q.is_empty:continue
        body(q,0,hh,mat,True,levels=n,arch=False,cont=ident=='1000181')
        cornice(ms,q,base+.4,t,'Sandstone',.06,.24)
        if ident not in ['1000181','1000206']:cornice(ms,q,base+hh-.22,t,'LightStone',.20,.26)
        if roofmat in ['Tile','Slate'] or ident=='1000172'and roofmat=='RoofZinc':
            hipped(ms,q,base+hh,4.2 if ident=='1000167'else (1.8 if ident=='1000172'else 3.8),roofmat,t)
        else:flat(ms,q,base+hh,t,roofmat)
    if ident=='1000151':
        # Four-column portico belongs to the original museum only.
        for yy in np.linspace(y-8,y+8,4):ms['Limestone'].append(t.cylinder((a-1.3,yy,base+1),(a-1.3,yy,base+10.7),.65,10))
        ms['Limestone'].append(t.boxmesh(a-1.3,y,base+10.7,3.5,21,.65))
    elif ident=='1000152':
        cy=(b+d)/2;xx=a-2.8
        for yy in np.linspace(cy-21,cy+21,8):ms['Limestone'].append(t.cylinder((xx,yy,base+1.4),(xx,yy,base+14.7),.90,12))
        ms['Limestone'].append(t.boxmesh(xx,cy,base+14.7,5.8,49.0,1.4));ms['Limestone'].append(t.boxmesh(xx,cy,base+16.1,6.6,50.0,.45))
        for k in range(4):ms['LightStone'].append(t.boxmesh(a-7.5+k*.4,cy,base,4.2-k*.65,48-k*.3,.35*(k+1)))
        # The one rooftop observatory is confirmed by the official aerial.
        dome=trimesh.creation.icosphere(subdivisions=2);dome.apply_scale([2.5,2.5,2.5]);dome.apply_translation([a+19,cy+2,base+19.3]);ms['WhitePanel'].append(dome)
    elif ident=='1000159':
        # Three arches across the documented northern loggia; solid piers frame
        # the dark openings without a generic grid on this tall facade.
        for xx in np.linspace(x-10,x+10,3):arch_panel(ms,np.array([xx,d+.12]),np.array([1.,0]),np.array([0.,1]),base+2.4,5.2,7.8,t)
        for xx in np.linspace(x-15,x+15,4):ms['Limestone'].append(t.boxmesh(xx,d+.45,base+1.8,.9,1.15,9.2))
        cornice(ms,p,base+12.7,t,'Limestone',.55,.50)
        for k in range(7):ms['LightStone'].append(t.boxmesh(x,d+1+k*.42,base,34,3.9-k*.42,(7-k)*.20))
    elif ident=='1000185':
        front=p.intersection(box(a-1,d-3,c+1,d+1))
        for xx in np.linspace(a+7,c-7,9):
            ms['LightStone'].append(t.boxmesh(xx,d+.13,base+1,.42,.30,13.8))
    elif ident=='1000181':
        # The stepped service blocks are visible in the official roof aerial;
        # they are specific to this library, not a campus-wide roof-box rule.
        q=p.intersection(box(a+8,b+6,c-8,d-5)).buffer(-1)
        for part in t.polygons(q):ms['Brick'].append(t.extrusion(part,base+32.4,2.0));flat(ms,part,base+34.4,t)
    elif ident=='1000227':
        # Faceted projecting reading bays at the public east face.
        for yy in np.arange(b+9,d-6,8.4):
            q=Polygon([(c-.12,yy-2.0),(c+1.2,yy-1.1),(c+1.2,yy+1.1),(c-.12,yy+2.0)])
            for floor in range(4):
                ms['Glass'].append(t.extrusion(q,base+floor*4.2+.6,2.7));ms['Concrete'].append(t.extrusion(q,base+floor*4.2+3.35,.34))
    elif ident=='1000189':
        for q in t.polygons(p.buffer(-4.5)):ms['BuffBrick'].append(t.extrusion(q,base+18.05,1.8));flat(ms,q,base+19.85,t)
    elif ident=='1000167':
        # Two copper lanterns and small repeated dormers along individual ranges.
        for cx,cy in [(a+12,d-13),(c-11,b+16)]:
            q=box(cx-2.1,cy-2.1,cx+2.1,cy+2.1).intersection(p)
            for part in t.polygons(q):ms['RoofCopper'].append(t.extrusion(part,base+24.5,8.0));hipped(ms,part,base+32.5,3.9,'RoofCopper',t)
    return {'reference':REFS.get(ident,'https://tour.umich.edu/text-based/tours/diag/'),'individual_roof_ranges':len(parts),'source_reviewed':ident in REFS or ident in ['1000120','1000191','1000172','1000151','1000211','1000555','1000060','1000063','1000054','1000066'],'member_dimensions':'Exterior interpretation; no surveyed facade dimensions'}
