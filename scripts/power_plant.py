"""Central Power Plant exterior: official footprint, AEC site/render references.
Stack heights follow the 2017 Regents communication; other members approximate.
"""
import numpy as np
import trimesh
from shapely.geometry import Point,Polygon,LineString,box
from shapely.ops import unary_union
REFERENCE='https://umaec.umich.edu/projects/completed-projects/central-power-plant-expansion-2/project-data/'
STACK_SOURCE='https://regents.umich.edu/files/meetings/07-17/2017-07-IX-6.pdf'
STACKS=[{'name':'north','center':[306.0,520.3],'height_m':238*.3048,'radius_m':4.2},{'name':'south','center':[295.93,435.46],'height_m':185*.3048,'radius_m':3.96}]

def build_power_plant(ms,p,base,body,t):
 main=max(t.polygons(p),key=lambda q:q.area)
 # Tall old boiler house, west turbine addition and lower southern/east ranges.
 regions=[(box(285,468,300.7,530),16.2,'Brick'),(box(300.7,478,327.6,530),28.0,'Brick'),(box(327.6,478,333.5,507),21.2,'MetalPanel'),(box(333.0,457,362,483),14.2,'WhitePanel')]
 remaining=main;volumes=[]
 for region,height,wall in regions:
  q=remaining.intersection(region);remaining=remaining.difference(region).buffer(0)
  if not q.is_empty:volumes.append((q,height,wall))
 if not remaining.is_empty:volumes.append((remaining,17.5,'Brick'))
 for q,height,wall in volumes:
  body(q,0,height,wall,False)
  for piece in t.polygons(q):
   ms['RoofMembrane'].append(t.extrusion(piece,base+height,.18))
   rim=piece.difference(piece.buffer(-.24,join_style=2))
   for edge in t.polygons(rim):ms['RoofEdge'].append(t.extrusion(edge,base+height+.18,.36))
   # Large industrial lights/louvres, never a residential window grid.
   for aa,bb in zip(np.array(piece.exterior.coords)[:-1],np.array(piece.exterior.coords)[1:]):
    length=np.linalg.norm(bb-aa)
    if length<9:continue
    u=(bb-aa)/length;n=np.array([u[1],-u[0]])
    if main.buffer(.01).contains(Point(*((aa+bb)/2+n*.4))):continue
    for distance in np.arange(4.2,length-2.8,8.4):
     center=aa+u*distance+n*.13;width=3.2 if wall=='Brick'else 2.6;z=base+2.2;h=min(height-4.0,12.6)
     profile=Polygon([center-u*width/2,center+u*width/2,center+u*width/2+n*.10,center-u*width/2+n*.10])
     ms['DarkGlass'].append(t.extrusion(profile,z,h))
     # Side jambs and head/sill are separate members. Extruding a planar
     # ring through the full height would cover the glass with a stone face.
     for sign in [-1,1]:
      jamb=center+u*sign*(width/2+.13)
      face=Polygon([jamb-u*.13-n*.04,jamb+u*.13-n*.04,jamb+u*.13+n*.25,jamb-u*.13+n*.25])
      ms['LightStone'].append(t.extrusion(face,z-.18,h+.36))
     frame=Polygon([center-u*(width/2+.26)-n*.04,center+u*(width/2+.26)-n*.04,center+u*(width/2+.26)+n*.25,center-u*(width/2+.26)+n*.25])
     for zz in [z-.18,z+h]:ms['LightStone'].append(t.extrusion(frame,zz,.18))
     blade=Polygon([(np.array(xy)+n*.12).tolist()for xy in profile.exterior.coords])
     for zz in np.arange(z+1,z+h,.85):ms['Frame'].append(t.extrusion(blade,zz,.09))
  # Continuous shallow stone base along the new brick frontage.
  if height==16.2:
   skirt=q.buffer(.10,join_style=2).difference(q)
   for edge in t.polygons(skirt):ms['LightStone'].append(t.extrusion(edge,base,2.2))
 # Standalone mapped small west service annex.
 for q in t.polygons(p.difference(main)):
  if q.area>80:body(q,0,5.0,'Concrete',False);ms['RoofMembrane'].append(t.extrusion(q,base+5.0,.18))
 for spec in STACKS:
  x,y=spec['center'];height=spec['height_m'];radius=spec['radius_m'];topradius=radius*.74
  # Closed tapered shell with a recessed dark flue; no open mesh seams.
  shell=Point(x,y).buffer(radius,quad_segs=24).difference(Point(x,y).buffer(radius-.52,quad_segs=24))
  m=t.extrusion(shell,base,height);fraction=(m.vertices[:,2]-base)/height;factor=1-fraction*(1-topradius/radius);m.vertices[:,:2]=np.array([x,y])+(m.vertices[:,:2]-[x,y])*factor[:,None];trimesh.repair.fix_normals(m);ms['Brick'].append(m)
  ms['DarkGlass'].append(t.cylinder((x,y,base+height-2.1),(x,y,base+height-2.0),topradius-.43,48))
  lip=Point(x,y).buffer(topradius+.08,quad_segs=24).difference(Point(x,y).buffer(topradius-.42,quad_segs=24))
  ms['Brick'].append(t.extrusion(lip,base+height-.23,.23))
  for zz in np.arange(11,height-1,11):
   r=radius-(radius-topradius)*zz/height
   ring=Point(x,y).buffer(r+.035,quad_segs=24).difference(Point(x,y).buffer(r-.03,quad_segs=24));ms['MetalPanel'].append(t.extrusion(ring,base+zz,.09))
 # Aerial-visible service duct and glazed ridge light above the old boiler hall.
 duct=box(302.3,473.2,310,484);ms['MetalPanel'].append(t.extrusion(duct,base+17.62,3.6))
 skylight=box(310.4,485,317.5,509);ms['RoofGlazing'].append(t.extrusion(skylight,base+28.18,.72))
 for yy in np.arange(486,509,3):ms['RoofEdge'].append(t.boxmesh(313.95,yy,base+28.9,7.3,.14,.12))
 return {'reference':REFERENCE,'stack_source':STACK_SOURCE,'stacks':STACKS,'industrial_volumes':len(volumes),'2022_turbine_addition':True,'member_dimensions':'Stacks use published heights; XY anchors, industrial wing/roof levels, louvres, ducts and frames are approximate exterior interpretations.'}
