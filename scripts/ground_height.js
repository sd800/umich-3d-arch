/** Grade pads and terrain share one height lookup for camera and hover rays. */
const caches=new WeakMap(),cellSize=64;
function insideRing(ring,x,y){
 let inside=false;
 for(let i=0,j=ring.length-1;i<ring.length;j=i++){
  const [ax,ay]=ring[j],[bx,by]=ring[i];
  const cross=(x-ax)*(by-ay)-(y-ay)*(bx-ax);
  // CAD uses a 5 mm plan precision grid; accept the same boundary tolerance.
  const length=Math.hypot(bx-ax,by-ay);
  if(length>0&&Math.abs(cross)/length<.006&&x>=Math.min(ax,bx)-.006&&x<=Math.max(ax,bx)+.006&&y>=Math.min(ay,by)-.006&&y<=Math.max(ay,by)+.006)return true;
  if((ay>y)!==(by>y)&&x<(bx-ax)*(y-ay)/(by-ay)+ax)inside=!inside;
 }
 return inside;
}
function padHeight(data,x,y){
 if(!data.groundPads)return null;
 let cells=caches.get(data);
 if(!cells){
  cells=new Map();
  for(const pad of data.groundPads){
   const [a,b,c,d]=pad.bounds;
   for(let ix=Math.floor((a-.006)/cellSize);ix<=Math.floor((c+.006)/cellSize);ix++)for(let iy=Math.floor((b-.006)/cellSize);iy<=Math.floor((d+.006)/cellSize);iy++){
    const key=ix+','+iy;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(pad);
   }
  }
  caches.set(data,cells);
 }
 let height=null;
 for(const pad of cells.get(Math.floor(x/cellSize)+','+Math.floor(y/cellSize))||[]){
  const polygons=pad.geometry.type==='Polygon'?[pad.geometry.coordinates]:pad.geometry.coordinates;
  if(polygons.some(rings=>insideRing(rings[0],x,y)&&!rings.slice(1).some(ring=>insideRing(ring,x,y))))height=Math.max(height??-Infinity,pad.height);
 }
 return height;
}
export function groundHeight(data,x,y){
 const pad=padHeight(data,x,y);if(pad!==null)return pad;
 const grid=data.groundGrid;if(!grid)return 0;
 const interval=(values,v)=>{let i=0;while(i<values.length-2&&values[i+1]<v)i++;return [i,Math.max(0,Math.min(1,(v-values[i])/(values[i+1]-values[i])))];};
 const [ix,u]=interval(grid.x,x),[iy,v]=interval(grid.y,y),a=grid.heights[iy],b=grid.heights[iy+1];
 return (a[ix]*(1-u)+a[ix+1]*u)*(1-v)+(b[ix]*(1-u)+b[ix+1]*u)*v;
}
