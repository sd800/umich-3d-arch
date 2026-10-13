/** Bilinear lookup in the viewer's small, georeferenced terrain sample. */
export function groundHeight(data,x,y) {
  const grid=data.groundGrid;if(!grid)return 0;
  const interval=(values,v)=>{let i=0;while(i<values.length-2&&values[i+1]<v)i++;return [i,Math.max(0,Math.min(1,(v-values[i])/(values[i+1]-values[i])))];};
  const [ix,u]=interval(grid.x,x),[iy,v]=interval(grid.y,y),a=grid.heights[iy],b=grid.heights[iy+1];
  return (a[ix]*(1-u)+a[ix+1]*u)*(1-v)+(b[ix]*(1-u)+b[ix+1]*u)*v;
}
