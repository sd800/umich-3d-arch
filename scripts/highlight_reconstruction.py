"""Source-specific corrections found by the complete architectural highlight audit.

These exterior models retain GIS plans. Heights and secondary members are estimated
unless separately published. Open clock/bell chambers are true geometry voids.
"""
import math
import numpy as np
import trimesh
from shapely.geometry import box,Polygon,Point,LineString
from shapely.ops import unary_union
from shapely import segmentize
from core_architecture import hipped,cornice,flat,arch_panel
from highlight_finish import bell_mesh

REFS={
'1000155':'https://tour.umich.edu/text-based/tours/diag/',
'1000177':'https://smtd.umich.edu/facilities/hill-auditorium/',
'1000172':'https://rackham.umich.edu/about/rackham-building/history-of-the-rackham-building/',
'1000198':'https://detroitobservatory.umich.edu/history/',
'1000709':'https://tour.umich.edu/text-based/locations/yost-ice-arena/',
'1000700':'https://umaec.umich.edu/projects/completed-projects/crisler-center-renovation-and-addition/'}
FEATURES={
'1000155':['limestone shaft with shallow vertical buttresses','five actual bell-chamber openings per face','three arched central slots and rectangular side slots','open metal clock rings, hands and hour marks','stepped upper chamber and copper crown','53 suspended bronze bells'],
'1000177':['four-storey brick auditorium','four Doric entrance columns and framed south portico','broad entrance steps','broken-slope raised hall roof','stone floor courses and brick attic frieze','separate low mapped ancillary footprint'],
'1000172':['Indiana limestone high central hall and lower wings','copper gabled roof','three bronze-framed entrance portals','broad granite approach stairs','five shallow relief panels and long horizontal cornice'],
'1000198':['historic three-part observatory','23-foot-diameter dome with observing slit','Doric porch facing Ann Street','meridian wing opening strip','separate low 2022 visitor addition and glazed connector'],
'1000709':['single tall Romanesque brick hall','tall round-headed side lights','ascending arched end windows','lower entrance blocks with arched doors','pitched roof with clay eaves and brick corbel course','masonry chimney'],
'1000700':['near-circular arena and lower annex','continuous curved closed roof','clerestory band below roof rim','radial structural roof seams','glazed entrance with supported canopy']}

REFS.update({
'1005177':'https://umaec.umich.edu/wp-content/uploads/2013/11/NQSustain.pdf',
'1005109':'https://www.uofmhealth.org/locations-parking/floor-maps-ann-arbor-medical-campus-buildings/frankel-cardiovascular-center-floor-maps/floor-1-frankel-cardiovascular-center',
'1005440':'https://www.hok.com/projects/view/michigan-medicine-kahn-health-care-pavilion/',
'1005037':'https://medschool.umich.edu/facility/alfred-taubman-biomedical-science-research-building-bsrb',
'1005173':'https://umaec.umich.edu/projects/completed-projects/c-s-mott-childrens-womens-hospitals-replacement-project/'})
FEATURES.update({
'1005177':['seven-storey L-shaped academic wing','ten-storey residence wing','two interlocking open courtyards','low cloister and tall dining lights','brick piers with limestone bands and entrance surrounds'],
'1005109':['separate clinical wings and low garden arrival','rounded winter-garden atrium','curved glazing and stone floor bands','courtyard-facing recesses','narrow mapped bridge wings kept low'],
'1005440':['set-back patient tower and lower clinical podium','pale three-dimensional precast window bays','recessed glazed ground arrival','supported patient-dropoff canopy','separate narrow connection to Frankel'],
'1005037':['terracotta laboratory bar','curved glazed office ribbon','sky-lit atrium between laboratory and office wings','independent round auditorium with tilted metal cap','continuous glass mullion and floor structure'],
'1005173':['nine-storey outpatient wing','twelve-storey inpatient wing','lower clinical podium','curved patient facades with pale precast and dark glass bands','double-height glazed arrival and supported canopy']})

def rebuild(ms,p,base,ident,height,body,t):
    a,b,c,d=p.bounds;x,y=p.centroid.coords[0];statistics={}
    def add(g,z,h,mat):
        for q in t.polygons(g):ms[mat].append(t.extrusion(q,base+z,h))
    def line(aa,bb,z,h,w=.12,mat='Frame'):add(LineString([aa,bb]).buffer(w/2,cap_style=2),z,h,mat)
    def pane(aa,bb,z,h,n,mat='DarkGlass',frame='Bronze',bay=1.2):
        aa,bb,n=np.array(aa),np.array(bb),np.array(n);u=(bb-aa)/np.linalg.norm(bb-aa);v=n*.10
        add(Polygon([aa+v,bb+v,bb+v*2,aa+v*2]),z,h,mat)
        for zz in [z,z+h]:line(aa+v*2,bb+v*2,zz,.08,.10,frame)
        for dd in np.linspace(0,np.linalg.norm(bb-aa),max(2,int(np.linalg.norm(bb-aa)/bay)+1)):
            cc=aa+u*dd+v*2;line(cc-u*.04,cc+u*.04,z,h,.10,frame)
    def profile(g,center,u,n,z,thick,mat):
        center,u,n=np.array(center),np.array(u),np.array(n)
        for q in t.polygons(g):
            m=t.extrusion(q,0,thick);v=m.vertices.copy();m.vertices=np.column_stack([center[0]+u[0]*v[:,0]+n[0]*v[:,2],center[1]+u[1]*v[:,0]+n[1]*v[:,2],base+z+v[:,1]]);trimesh.repair.fix_normals(m);ms[mat].append(m)
    def roof(g,z,rise,mat='RoofCopper'):hipped(ms,g,base+z,rise,mat,t)
    def steps(cx,edge,width,count=8,run=.32,rise=.15,north=False):
        sign=1 if north else -1
        for k in range(count):
            yy=edge+sign*(count-k)*run/2;ms['LightStone'].append(t.boxmesh(cx,yy,base,width,(count-k)*run+1.0,(k+1)*rise))
    if ident=='1000155':
        body(p,0,36.576,'Limestone',windows=False)
        cx,cy=(a+c)/2,(b+d)/2;w=min(c-a,d-b)
        for sign in [-1,1]:
            for axis in [0,1]:
                n=np.array([sign,0])if axis==0 else np.array([0,sign]);u=np.array([-n[1],n[0]]);center=np.array([cx,cy])+n*(w/2-.95)
                # Five openings per face: the middle three have rounded heads.
                outer=box(-w/2,0,w/2,13.35);holes=[]
                for j,xx in enumerate(np.linspace(-w*.34,w*.34,5)):
                    width=1.34 if j in [1,2,3]else 1.12;hh=11.75
                    if j in [1,2,3]:
                        slot=unary_union([box(xx-width/2,.35,xx+width/2,hh-width/2),Point(xx,hh-width/2).buffer(width/2,quad_segs=12)]).intersection(box(xx-width/2,.35,xx+width/2,hh))
                    else:slot=box(xx-width/2,.35,xx+width/2,11.6)
                    holes.append(slot)
                profile(outer.difference(unary_union(holes)),center,u,n,36.576,.95,'Limestone')
                # Upper two setbacks have real narrow vents, not solid caps.
                for z0,ww,hh,slotn in [(49.926,w-.8,5.0,3),(54.926,w-1.8,5.0,5)]:
                    outer2=box(-ww/2,0,ww/2,hh);voids=unary_union([box(xx-.38,.5,xx+.38,hh-1)for xx in np.linspace(-ww*.33,ww*.33,slotn)])
                    c2=np.array([cx,cy])+n*(ww/2-.7);profile(outer2.difference(voids),c2,u,n,z0,.70,'Limestone')
                # Clock dial is an open ring in front of the slotted chamber.
                cp=np.array([cx,cy])+n*(w/2+.10);r=2.6
                ring=Point(0,0).buffer(r,quad_segs=40).difference(Point(0,0).buffer(r-.08,quad_segs=40));profile(ring,cp,u,n,45.0,.10,'WhitePanel')
                for j in range(12):
                    ang=j*math.tau/12;v0=np.array([math.sin(ang),math.cos(ang)]);mark=LineString([v0*(r-.12),v0*(r-.43)]).buffer(.045,cap_style=2);profile(mark,cp,u,n,45,.13,'WhitePanel')
                for end in [(0,2.02),(-1.25,.72)]:profile(LineString([(0,0),end]).buffer(.065,cap_style=2),cp,u,n,45,.16,'WhitePanel')
                # Shaft reveals: sparse vertical windows follow the photographed
                # three-column rhythm, rather than a classroom glazing grid.
                for xx in [-w*.26,0,w*.26]:
                    for zz in np.arange(2.2,35,4.3):
                        cc=np.array([cx,cy])+u*xx+n*(w/2+.02);pane(cc-u*.28,cc+u*.28,zz,1.2,n,frame='Limestone',bay=1)
                    cc=np.array([cx,cy])+u*(xx+.52)+n*(w/2+.06);line(cc-u*.06,cc+u*.06,0,35.9,.12,'LightStone')
        for zz,dd in [(36.4,.14),(49.76,.08),(54.76,-.4),(59.76,-.9)]:add(p.buffer(dd,join_style=2),zz,.16,'LightStone')
        cap=p.buffer(-1.0,join_style=2);roof(cap,59.926,height-59.926-.16)
        # Bells remain behind the apertures, hanging from a connected inner rack.
        for k in range(53):
            row,col=divmod(k,9);cx0=cx+(col-4)*.75;cy0=cy+(row-2.5)*.88
            ms['Bronze'].append(bell_mesh([cx0,cy0,base+41.6],.34-.0025*k,.78-.004*k))
        for yy in np.arange(cy-2.4,cy+2.5,.88):ms['Frame'].append(t.cylinder((cx-3.5,yy,base+42.6),(cx+3.5,yy,base+42.6),.065,6))
        statistics={'true_belfry_openings':20,'clock_rings':4,'bells':53}
    elif ident=='1000177':
        main=max(t.polygons(p),key=lambda q:q.area);extra=p.difference(main);aa,bb,cc,dd=main.bounds;cx=(aa+cc)/2
        body(main,0,16.2,'Brick',levels=4,arch=False);body(extra,0,3.6,'Brick',windows=False)
        roof(extra,3.6,1.0,'Slate')
        # Broken-pitch auditorium roof, clipped into four planes across the span.
        span=cc-aa;cuts=[(aa,aa+span*.13,0,3.1),(aa+span*.13,aa+span*.34,3.1,5.9),(aa+span*.34,cc-span*.34,5.9,5.9),(cc-span*.34,cc-span*.13,5.9,3.1),(cc-span*.13,cc,3.1,0)]
        for l,r,hl,hr in cuts:
            for q in t.polygons(main.intersection(box(l,bb-1,r,dd+1))):
                m=t.extrusion(segmentize(q,4),base+16.2,.16);m.vertices[:,2]+=hl+(m.vertices[:,0]-l)/(r-l)*(hr-hl);trimesh.repair.fix_normals(m);ms['RoofZinc'].append(m)
        for zz in [4.2,9.0,13.9,16.0]:cornice(ms,main,base+zz,t,'LightStone',.14,.24)
        # Four columns and their beam form one supported entrance assembly.
        for xx in np.linspace(cx-10.8,cx+10.8,4):
            ms['LightStone'].append(t.cylinder((xx,bb-.9,base+1.05),(xx,bb-.9,base+12.1),.74,16))
            for zz,rr in [(1.0,.94),(11.85,.94)]:ms['LightStone'].append(t.boxmesh(xx,bb-.9,base+zz,rr*2,rr*2,.26))
        ms['Limestone'].append(t.boxmesh(cx,bb-.9,base+12.1,27.6,3.4,1.25));ms['LightStone'].append(t.boxmesh(cx,bb-.9,base+13.35,28.5,3.8,.34));steps(cx,bb-1.8,30,8,.34,.14)
        for xx in np.linspace(cx-7.8,cx+7.8,3):pane((xx-2.0,bb-.04),(xx+2.0,bb-.04),1.1,6.8,(0,-1),frame='Bronze')
        for xx in np.arange(aa+1,cc,1.1):ms['LightStone'].append(t.boxmesh(xx,bb-.12,base+15.25,.22,.22,.52))
        statistics={'Doric_columns':4,'roof_planes':5,'ancillary_height_m':4.6}
    elif ident=='1000172':
        middle=p.intersection(box(a+(c-a)*.24,b-1,c-(c-a)*.24,d+1));wings=p.difference(middle)
        body(middle,0,22.6,'Limestone',levels=4,arch=False);body(wings,0,15.2,'Limestone',levels=3,arch=False)
        roof(middle,22.6,1.8);flat(ms,wings,base+15.2,t,'RoofMembrane')
        for zz in [.4,5.2,14.8]:cornice(ms,p,base+zz,t,'LightStone',.25,.30)
        for xx in [-5.8,9.25,24.3]:
            pane((xx-2.8,b+.02),(xx+2.8,b+.02),1.3,7.9,(0,-1),frame='Bronze',bay=.92)
            for dx in [-3.1,3.1]:ms['Limestone'].append(t.boxmesh(xx+dx,b-.14,base+1.15,.46,.65,8.9))
            ms['Limestone'].append(t.boxmesh(xx,b-.14,base+10.05,6.65,.65,.65))
        steps((a+c)/2,b-.4,69,9,.35,.14)
        # Low-relief tablets and balcony fronts are schematic, rather than
        # inventing detailed figurative sculptures absent measured references.
        for xx in np.linspace(-15,34,5):
            ms['Sandstone'].append(t.boxmesh(xx,b-.12,base+11.15,3.0,.16,2.4));ms['LightStone'].append(t.boxmesh(xx,b-.23,base+11.48,2.35,.12,1.72))
        statistics={'bronze_portals':3,'relief_tablets':5,'roof_material':'RoofCopper'}
    elif ident=='1000198':
        historic=p.intersection(box(a-1,594,c+1,d+1));link=p.intersection(box(554,589.8,561.5,596));addition=p.difference(unary_union([historic,link]));cx,cy=557.4,600.8
        body(historic,0,5.7,'LightStone',levels=1,arch=False);body(addition,0,4.0,'Sandstone',levels=1,arch=False,cont=True);body(link,0,4.1,'Glass',windows=False)
        flat(ms,historic,base+5.7,t,'RoofMembrane');flat(ms,addition,base+4,t,'RoofGreen');flat(ms,link,base+4.1,t,'RoofZinc')
        drum=Point(cx,cy).buffer(3.5052,quad_segs=48);body(drum,5.7,2.0,'LightStone',windows=False)
        # Closed hemispherical roof with a narrow observing shutter slit.
        n=64;rings=18;verts=[];faces=[]
        for inner in [False,True]:
            rr=3.5052-(.12 if inner else 0)
            for k in range(rings):
                th=k/(rings-1)*math.pi/2
                for j in range(n):
                    ph=j/n*math.tau;verts.append([cx+rr*math.cos(th)*math.cos(ph),cy+rr*math.cos(th)*math.sin(ph),base+7.7+rr*math.sin(th)])
        off=rings*n
        for shift in [0,off]:
            for k in range(rings-1):
                for j in range(n):
                    aa=shift+k*n+j;bb=shift+k*n+(j+1)%n;faces.extend([[aa,bb,bb+n],[aa,bb+n,aa+n]])
        for k in [0,rings-1]:
            for j in range(n):
                aa=k*n+j;bb=k*n+(j+1)%n;faces.extend([[aa,aa+off,bb+off],[aa,bb+off,bb]])
        m=trimesh.Trimesh(verts,faces,process=True);m.update_faces(m.nondegenerate_faces());m.remove_unreferenced_vertices();trimesh.repair.fix_normals(m);assert m.is_watertight;ms['RoofZinc'].append(m)
        for ang in np.linspace(0,math.pi/2,23)[:-1]:
            ang2=ang+math.pi/44
            for dx in [-.30,.30]:
                aa=(cx+dx,cy+3.53*math.cos(ang),base+7.7+3.53*math.sin(ang));bb=(cx+dx,cy+3.53*math.cos(ang2),base+7.7+3.53*math.sin(ang2));ms['Frame'].append(t.cylinder(aa,bb,.065,5))
        # Two-column Doric porch and pediment face Ann Street to the north.
        for xx in [554.8,559.9]:ms['LightStone'].append(t.cylinder((xx,d+.55,base+.9),(xx,d+.55,base+4.7),.30,12))
        ms['LightStone'].append(t.boxmesh(cx,d+.55,base+4.7,7.0,2.3,.40));roof(box(cx-3.7,d-.9,cx+3.7,d+1.9),5.1,.9,'RoofZinc');steps(cx,d+1.0,8,6,.3,.15,True)
        pane((cx-1.0,d+.04),(cx+1.0,d+.04),.95,2.8,(0,1),frame='Limestone')
        # Meridian telescope wing's north-south opening strip.
        add(box(548.8,596.6,549.1,604.7),5.88,.12,'Metal')
        statistics={'dome_diameter_m':7.0104,'historic_and_2022_addition_separate':True,'porch_columns':2}
    elif ident=='1000709':
        hall=p.intersection(box(a+3,b+7,c-3,d-9));entry=p.difference(hall)
        body(hall,0,17.4,'Brick',windows=False);body(entry,0,8.3,'Brick',levels=2,arch=False)
        roof(hall,17.4,5.2,'RoofZinc');flat(ms,entry,base+8.3,t,'RoofMembrane')
        for q in t.polygons(hall):
            for aa,bb in zip(np.asarray(q.exterior.coords)[:-1],np.asarray(q.exterior.coords)[1:]):
                ln=np.linalg.norm(bb-aa);u=(bb-aa)/ln;n=np.array([u[1],-u[0]])
                if ln<20:continue
                if abs(u[1])>.7:
                    for dd in np.arange(4,ln-3,7.9):
                        cc=aa+u*dd+n*.05;arch_panel(ms,cc,u,n,base+6.1,4.1,10.3,t)
                        for zz in np.arange(7,15.5,2.0):line(cc-u*1.8+n*.13,cc+u*1.8+n*.13,zz,.06,.08,'Frame')
                        pier=cc+u*3.0;line(pier-n*.05,pier+n*.56,0,17.6,.52,'Brick')
                else:
                    for dd in np.linspace(ln*.15,ln*.85,7):
                        cc=aa+u*dd+n*.05;hh=5.5-abs(dd-ln/2)/ln*5;arch_panel(ms,cc,u,n,base+11.0,2.7,hh,t)
                # Romanesque brick corbel rhythm follows the real eaves.
                for dd in np.arange(.6,ln,.8):
                    cc=aa+u*dd+n*.10;line(cc-u*.15,cc+u*.15,16.65,.45,.25,'LightStone')
                line(aa+n*.15,bb+n*.15,17.4,.20,.55,'Tile')
        for xx in [a+10,c-10]:
            q=entry.intersection(box(xx-4.6,d-10,xx+4.6,d+.1));body(q,8.3,2.5,'Brick',windows=False);roof(q,10.8,1.8,'Tile');arch_panel(ms,np.array([xx,d+.10]),np.array([1.,0]),np.array([0.,1]),base+.7,4.5,8.0,t)
        chimney=box(c-5.5,d-20,c-3.4,d-17.5);add(chimney,0,27.2,'Brick');cornice(ms,chimney,base+27.1,t,'LightStone',.18,.30)
        statistics={'tall_Romanesque_hall':True,'arched_end_window_bays':14,'masonry_chimney':True}
    elif ident=='1000700':
        center=np.array([x-8,y-1]);ellipse=t.affinity.scale(Point(*center).buffer(1,quad_segs=60),49,56);arena=p.intersection(ellipse);annex=p.difference(arena)
        body(annex,0,10.4,'LightStone',levels=2,arch=False,cont=True);flat(ms,annex,base+10.4,t,'RoofMembrane')
        body(arena,0,13.2,'LightStone',windows=False)
        body(arena,13.2,2.3,'DarkGlass',windows=False)
        # Bottom and top use the same roof function. The previous flat bottom
        # plus raised top made the apparent roof into a deep wedge.
        for xx in np.arange(a,c,8):
            for yy in np.arange(b,d,8):
                for q in t.polygons(segmentize(arena.intersection(box(xx,yy,xx+8,yy+8)),3)):
                    m=t.extrusion(q,base+15.5,.20);rad=np.sqrt(((m.vertices[:,0]-center[0])/49)**2+((m.vertices[:,1]-center[1])/56)**2);m.vertices[:,2]+=7.3*np.maximum(0,1-rad**2);trimesh.repair.fix_normals(m);ms['RoofZinc'].append(m)
        for ang in np.linspace(0,math.tau,48,endpoint=False):
            u=np.array([math.cos(ang)*49,math.sin(ang)*56]);pts=[]
            for radius in np.linspace(.10,.97,18):
                cc=center+u*radius;pts.append((*cc,base+15.74+7.3*(1-radius**2)))
            for aa,bb in zip(pts[:-1],pts[1:]):
                if arena.covers(Point(*aa[:2]))and arena.covers(Point(*bb[:2])):ms['RoofEdge'].append(t.cylinder(aa,bb,.035,5))
            cc=center+u*.995
            if arena.covers(Point(*cc)):ms['LightStone'].append(t.boxmesh(*cc,base+13.2,.20,.20,2.3))
        statistics={'curved_roof_closed_shell':True,'radial_seams':48,'clerestory_height_m':2.3}

    elif ident in {'1005177','1005109','1005440','1005037','1005173'}:
        parts=[];used=Polygon()
        def part(name,mask,hh,levels,mat,glass=False):
            nonlocal used
            q=p.intersection(mask).difference(used);used=unary_union([used,q])
            for g in t.polygons(q):
                body(g,0,hh,mat,windows=False);flat(ms,g,base+hh,t,'RoofMembrane');parts.append((name,g,hh,levels,mat,glass))
            return q
        if ident=='1005177':
            part('academic-north-L',box(a-1,493,c+1,d+1),28.0,7,'Brick')
            part('residential-south',box(a-1,b-1,c+1,475),35.5,10,'Brick')
            part('connecting-cloister',p,4.9,1,'Limestone')
        elif ident=='1005109':
            part('garden-atrium',Point(574.9,740.0).buffer(13.3,quad_segs=40),14.0,3,'LightStone',True)
            part('north-bridge',box(636,813,c+1,d+1),7.2,2,'LightStone',True)
            part('east-bridge',box(640,742,c+1,746),7.2,2,'LightStone',True)
            part('north-clinical',box(a-1,781,636,814),height-.42,6,'LightStone')
            part('clinical-east',box(610,b-1,c+1,814),height-.42,6,'LightStone')
            part('lower-garden-arrival',p,19.0,4,'LightStone',True)
        elif ident=='1005440':
            part('Frankel-connector',box(530,b-1,c+1,d+1),7.0,1,'LightStone',True)
            part('patient-tower',box(449,693,519,d+1),52.8,12,'LightStone')
            part('lower-clinical-podium',p,33.0,7,'Limestone')
        elif ident=='1005037':
            auditorium=p.intersection(Point(356.0,569.5).buffer(17.0,quad_segs=48)).intersection(box(339,b-1,372,584))
            used=auditorium;body(auditorium,0,5.1,'LightStone',windows=False)
            for q in t.polygons(segmentize(auditorium,2.0)):
                m=t.extrusion(q,base+5.1,.17);m.vertices[:,2]+=np.clip((m.vertices[:,1]-560)/24,0,1)*6.4;trimesh.repair.fix_normals(m);ms['RoofZinc'].append(m)
            part('north-laboratories',box(a-1,605,c+1,d+1),height-.42,6,'Terracotta')
            part('skylit-atrium',box(286,593,378,605),24.8,5,'LightStone',True)
            part('curved-office-ribbon',box(286,b-1,c+1,593),24.1,5,'Glass',True)
            part('western-research-bar',p,height-.42,6,'Terracotta')
        elif ident=='1005173':
            part('outpatient-nine-levels',box(a-1,599,889,d+1),39.0,9,'LightStone')
            part('inpatient-twelve-levels',box(889,558,c+1,622),53.0,12,'LightStone')
            part('clinical-podium',p,17.2,4,'LightStone')
        for name,q,hh,levels,mat,glass in parts:
            floor=hh/levels
            for g in t.polygons(q):
                for aa,bb in zip(np.asarray(g.exterior.coords)[:-1],np.asarray(g.exterior.coords)[1:]):
                    ln=np.linalg.norm(bb-aa)
                    if ln<2:continue
                    u=(bb-aa)/ln;n=np.array([u[1],-u[0]]);probe=Point(*((aa+bb)/2+n*.3));blocked=max([height0 for _,other,height0,_,_,_ in parts if other is not q and other.buffer(.05).covers(probe)],default=0)
                    pitch=3.6 if ident=='1005177'else 4.1;count=max(1,int(ln/pitch));step=ln/count
                    for k in range(levels):
                        zz=k*floor+.55
                        if zz<blocked-.1:continue
                        for j in range(count):
                            cc=aa+u*((j+.5)*step);ww=step*(.90 if glass else .67);wh=floor-.95
                            pane(cc-u*ww/2,cc+u*ww/2,zz,wh,n,frame='LightStone'if ident=='1005440'else 'Frame',bay=1.3)
                            if ident=='1005440':
                                # Kahn's angled precast cheeks form shallow 3-D
                                # bays, bounded within each window-floor zone.
                                for side in [-1,1]:
                                    c0=cc+u*side*(ww/2+.12)+n*.17;fin=Polygon([c0-u*.08,c0+u*.08,c0+u*.08+n*.38,c0-u*.08+n*.14]);add(fin,zz-.14,wh+.28,'LightStone')
                        line(aa+n*.15,bb+n*.15,k*floor+.12,.20,.26,'Limestone'if ident=='1005177'else 'Concrete')
                        if glass:
                            line(aa+n*.23,bb+n*.23,k*floor+floor-.28,.15,.18,'RoofEdge')
            # Cap thickness and parapets have positive, disjoint elevations.
            cornice(ms,q,base+hh-.20,t,'LightStone',.13,.18)
        if ident=='1005177':
            # Dining room's tall arched lights are confined to the lower north
            # courtyard, while the residence retains punched masonry bays.
            for xx in np.arange(-176,-124,6.0):arch_panel(ms,np.array([xx,469.7]),np.array([1.,0]),np.array([0.,1]),base+.45,3.6,6.1,t)
            for yy in np.arange(478,505,5.5):
                ms['Limestone'].append(t.boxmesh(-154,yy,base,.45,.45,4.6))
            add(box(-155.5,476,-152.5,507),4.6,.20,'Limestone')
        if ident in {'1005109','1005440','1005173'}:
            cx,cy={'1005109':(578,714),'1005440':(470,663),'1005173':(899,550)}[ident];canopy=box(cx-9,cy-2,cx+9,cy+3)
            add(canopy,4.4,.25,'RoofZinc')
            for xx in [cx-8.4,cx+8.4]:ms['MetalPanel'].append(t.cylinder((xx,cy-1.5,base-.2),(xx,cy-1.5,base+4.4),.16,8))
        statistics={'individually_partitioned_wings':len(parts),'modeled_storeys':{name:n for name,_,_,n,_,_ in parts}}
    return {'reference':REFS[ident],'features':FEATURES[ident],**statistics,'unmeasured_dimensions':'Public-photo exterior interpretation; not surveyed construction drawings.'}
