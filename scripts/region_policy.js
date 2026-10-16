/** Screen-space LOD and explicit residency budgets, independent of WebGL. */
export function regionLimits(mobile=false){return {bytes:(mobile?40:100)*1048576,triangles:mobile?1100000:2800000,regions:mobile?7:16,enterMpp:mobile?1.5:2.1,exitMpp:mobile?1.85:2.55};}
export function chooseRegions(tiles,{mpp,visible,focusKey=null,center=[0,0],resident=new Set(),limits}){
 const candidates=tiles.filter(t=>visible(t)&&(t.key===focusKey||mpp<(resident.has(t.key)?limits.exitMpp:limits.enterMpp)));
 candidates.sort((a,b)=>(a.key===focusKey?-1:b.key===focusKey?1:0)||distance(a)-distance(b));
 function distance(t){const b=t.bounds,grid=t.key.split('_').map(Number),x=grid.every(Number.isFinite)?(grid[0]+.5)*192:(b[0]+b[3])/2,y=grid.every(Number.isFinite)?(grid[1]+.5)*192:(b[1]+b[4])/2;return Math.hypot(x-center[0],y-center[1])+(t.hasBuildings===false?288:0);}
 let bytes=0,triangles=0;const result=[];
 for(const t of candidates){if(result.length>=limits.regions||bytes+t.gpuBytes>limits.bytes||triangles+t.triangles>limits.triangles)continue;result.push(t);bytes+=t.gpuBytes;triangles+=t.triangles;}
 return result;
}
