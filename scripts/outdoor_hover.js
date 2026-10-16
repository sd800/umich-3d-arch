import {Vector3} from 'three';
function ringArea(ring){let a=0;for(let i=0,j=ring.length-1;i<ring.length;j=i++)a+=ring[j][0]*ring[i][1]-ring[i][0]*ring[j][1];return Math.abs(a)/2;}
function inRing(ring,x,y){let inside=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){
 const [ax,ay]=ring[j],[bx,by]=ring[i],cross=(x-ax)*(by-ay)-(y-ay)*(bx-ax);
 if(Math.abs(cross)<1e-7&&x>=Math.min(ax,bx)-1e-7&&x<=Math.max(ax,bx)+1e-7&&y>=Math.min(ay,by)-1e-7&&y<=Math.max(ay,by)+1e-7)return true;
 if((ay>y)!==(by>y)&&x<(bx-ax)*(y-ay)/(by-ay)+ax)inside=!inside;
}return inside;}
/** Smallest mapped area wins, so a fountain inside a plaza gets its own name. */
export function createOutdoorPicker(places){
 const entries=places.flatMap(place=>{const g=place.hitArea;if(!g)return [];const polygons=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];
 return polygons.filter(p=>p[0]?.length>=4).map(rings=>{const xs=rings[0].map(p=>p[0]),ys=rings[0].map(p=>p[1]);return {place,rings,area:ringArea(rings[0])-rings.slice(1).reduce((a,r)=>a+ringArea(r),0),bounds:[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]};});}).sort((a,b)=>a.area-b.area);
 return (x,y,visible=()=>true)=>entries.find(({place,bounds:b,rings:r})=>visible(place)&&x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3]&&inRing(r[0],x,y)&&!r.slice(1).some(h=>inRing(h,x,y)))?.place||null;
}
/** Resolve the ray against sampled ground, avoiding nearly horizontal rays. */
export function groundPoint(ray,height,z=0,maxDistance=50000){
 if(ray.direction.z>=-.02)return null;
 let point;
 for(let i=0;i<5;i++){const distance=(z-ray.origin.z)/ray.direction.z;if(distance<0||distance>maxDistance)return null;point=ray.at(distance,new Vector3());const next=height(point.x,point.y);if(!Number.isFinite(next))return null;if(Math.abs(next-z)<.02)return point;z=next;}
 return point;
}
/** One hover lookup per paint; drags, touch and leaving cancel pending tips. */
export function installCampusHover(canvas,{resolve,show,hide,requestFrame=callback=>requestAnimationFrame(callback)}){
 let latest=null,queued=false;
 const stop=()=>{latest=null;hide();};
 const move=e=>{if(e.buttons||e.pointerType==='touch'){stop();return;}latest={clientX:e.clientX,clientY:e.clientY};if(queued)return;queued=true;
  requestFrame(()=>{queued=false;if(!latest)return;const e=latest,box=canvas.getBoundingClientRect();if(box.width<1||box.height<1||e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom){stop();return;}const value=resolve(e);if(value)show(value,e);else hide();});};
 canvas.addEventListener('pointermove',move);for(const event of ['pointerdown','pointerleave','pointercancel'])canvas.addEventListener(event,stop);
 return ()=>{stop();canvas.removeEventListener('pointermove',move);for(const event of ['pointerdown','pointerleave','pointercancel'])canvas.removeEventListener(event,stop);};
}
