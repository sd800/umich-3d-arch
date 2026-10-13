"""Render the exact exported CAD mesh arrays into an orthographic bird's-eye preview."""
import sys,pathlib,json,math
import numpy as np
from PIL import Image,ImageDraw,ImageFont
ROOT=pathlib.Path(__file__).resolve().parents[1];OUT=ROOT/'output'
d=np.load(OUT/'preview_mesh_data.npz');v=d['vertices'];f=d['faces'];c=d['colors']
MODE="plan" if "--plan" in sys.argv else "aerial"
if '--central' in sys.argv:
    centroids=v[f].mean(axis=1)
    mask=(centroids[:,0]>-700)&(centroids[:,0]<1050)&(centroids[:,1]>-650)&(centroids[:,1]<850)
    f=f[mask];c=c[mask];used=np.unique(f);remap=np.zeros(len(v),dtype=int);remap[used]=np.arange(len(used));v=v[used];f=remap[f]
S=1;W,H=2400,1850
canvas=Image.new('RGB',(W*S,H*S),(245,246,241));draw=ImageDraw.Draw(canvas)
back=np.array([0.,0.,1.]) if MODE=="plan" else np.array([1.15,-.95,1.20]);back/=np.linalg.norm(back)
right=np.array([1.,0.,0.]) if MODE=="plan" else np.cross(np.array([0.,0.,1.]),back);right/=np.linalg.norm(right)
up=np.cross(back,right)
def project(v):return np.column_stack([v@right,v@up,v@back])
pv=project(v);xmin,ymin=pv[:,:2].min(axis=0);xmax,ymax=pv[:,:2].max(axis=0)
scale=min((W-220)/(xmax-xmin),(H-430)/(ymax-ymin))
xoff=(W-(xmax-xmin)*scale)/2-xmin*scale
yoff=260+(H-430-(ymax-ymin)*scale)/2+ymax*scale
screen=np.column_stack(((pv[:,0]*scale+xoff)*S,(-pv[:,1]*scale+yoff)*S))
tri=v[f];norm=np.cross(tri[:,1]-tri[:,0],tri[:,2]-tri[:,0]);length=np.linalg.norm(norm,axis=1);norm/=np.maximum(length[:,None],1e-10)
light=np.array([-.35,-.55,1.]);light/=np.linalg.norm(light)
shade=.67+.33*np.maximum(norm@light,0)
rgb=np.clip(c*shade[:,None],0,255).astype(np.uint8)
# Depth buffering is necessary: large ground triangles cross several buildings.
pixels=np.full((H*S,W*S,3),[245,246,241],dtype=np.uint8)
depth=np.full((H*S,W*S),-np.inf,dtype=np.float32)
visible=np.flatnonzero(norm@back>1e-7)
for i in visible:
    pp=screen[f[i]];zz=pv[f[i],2]
    bx0=max(0,int(np.floor(pp[:,0].min())));bx1=min(W*S-1,int(np.ceil(pp[:,0].max())))
    by0=max(0,int(np.floor(pp[:,1].min())));by1=min(H*S-1,int(np.ceil(pp[:,1].max())))
    if bx1<bx0 or by1<by0:continue
    x0,y0=pp[0];x1,y1=pp[1];x2,y2=pp[2]
    den=(y1-y2)*(x0-x2)+(x2-x1)*(y0-y2)
    if abs(den)<1e-9:continue
    xx=np.arange(bx0,bx1+1,dtype=np.float32)[None,:]+.5
    yy=np.arange(by0,by1+1,dtype=np.float32)[:,None]+.5
    wa=((y1-y2)*(xx-x2)+(x2-x1)*(yy-y2))/den
    wb=((y2-y0)*(xx-x2)+(x0-x2)*(yy-y2))/den
    wc=1-wa-wb;z=wa*zz[0]+wb*zz[1]+wc*zz[2]
    sub=depth[by0:by1+1,bx0:bx1+1]
    mask=(wa>=-1e-6)&(wb>=-1e-6)&(wc>=-1e-6)&(z>sub)
    sub[mask]=z[mask];pixels[by0:by1+1,bx0:bx1+1][mask]=rgb[i]
canvas=Image.fromarray(pixels);draw=ImageDraw.Draw(canvas)
fonts=['/System/Library/Fonts/PingFang.ttc','/System/Library/Fonts/STHeiti Light.ttc']
fontpath=next((q for q in fonts if pathlib.Path(q).exists()),None)
def font(n):return ImageFont.truetype(fontpath,n*S) if fontpath else ImageFont.load_default()
draw.text((110*S,70*S),'UNIVERSITY OF MICHIGAN',font=font(54),fill=(39,66,71))
draw.text((112*S,150*S),'Ann Arbor campus  /  '+('North-up roof plan' if MODE=='plan' else ('Central Campus exterior view' if '--central' in sys.argv else 'Four-sector exterior model'))+'  /  1 unit = 1 meter',font=font(24),fill=(87,111,110))
draw.line((110*S,210*S,(W-110)*S,210*S),fill=(204,215,207),width=2*S)
items=[('Limestone',(207,194,166)),('Glass',(113,157,174)),('Roads',(81,86,89)),('Plazas',(195,186,164)),('Green space',(116,149,96))]
x=112;y=H-130
for text,color in items:
    draw.rounded_rectangle((x*S,y*S,(x+24)*S,(y+24)*S),radius=4*S,fill=color)
    draw.text(((x+36)*S,(y-5)*S),text,font=font(22),fill=(67,88,89));x+=215
draw.text((112*S,(H-75)*S),'University GIS footprints & landscape; USGS terrain. Heights, roofs and facades carry explicit approximation notes.',font=font(20),fill=(102,116,111))
# Scale is valid for the horizontal screen direction of this orthographic projection.
bar=500*scale
x=(W-110-bar);y=H-125
draw.line((x*S,y*S,(x+bar)*S,y*S),fill=(51,75,74),width=3*S)
draw.line((x*S,(y-8)*S,x*S,(y+8)*S),fill=(51,75,74),width=2*S)
draw.line(((x+bar)*S,(y-8)*S,(x+bar)*S,(y+8)*S),fill=(51,75,74),width=2*S)
draw.text(((x+bar/2-35)*S,(y+15)*S),'500 m',font=font(20),fill=(51,75,74))
if MODE=='plan':
    for r in json.loads((OUT/'buildings.json').read_text()):
        if not r['landmark']:continue
        xx=r['center'][0]*scale+xoff;yy=-r['center'][1]*scale+yoff
        label=r['code'];bb=draw.textbbox((xx,yy),label,font=font(18));ww=bb[2]-bb[0]
        draw.rounded_rectangle((xx-ww/2-5,yy-14,xx+ww/2+5,yy+12),radius=3,fill=(250,250,246),outline=(128,0,0),width=1)
        draw.text((xx-ww/2,yy-13),label,font=font(18),fill=(0,39,76))
    draw.text((W-140,120),'N',font=font(28),fill=(0,39,76))
    draw.line((W-131,196,W-131,154),fill=(0,39,76),width=3)
    draw.polygon([(W-131,144),(W-139,158),(W-123,158)],fill=(0,39,76))
canvas.resize((W,H),Image.Resampling.LANCZOS).save(OUT/('campus_plan.png' if MODE=='plan' else 'campus_aerial.png'))


print(MODE,'preview written')
