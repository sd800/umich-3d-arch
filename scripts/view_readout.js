import {Vector3} from 'three';
const direction=new Vector3(),center=new Vector3(),delta=new Vector3();
/** Orthographic view in the maps' north-positive Y, Z-up metric coordinates. */
export function currentView(camera,controls){
 camera.updateMatrixWorld(true);camera.getWorldDirection(direction);
 // Screen-right remains well-defined in plan view, where the camera's
 // horizontal position alone cannot give a reliable bearing.
 const matrix=camera.matrixWorld.elements;
 const azimuth=(Math.atan2(-matrix[1],matrix[0])*180/Math.PI+540)%360;
 const elevation=Math.atan2(-direction.z,Math.hypot(direction.x,direction.y))*180/Math.PI;
 // Intersect the center ray with the plane through the orbit target. This
 // includes the off-axis framing used when panning close to ground level.
 center.set(0,0,0).unproject(camera);delta.copy(controls.target).sub(center);
 center.addScaledVector(direction,delta.dot(direction));
 return {azimuth,elevation,span:Math.abs(camera.top-camera.bottom)/camera.zoom,center:center.toArray()};
}
const entries=new WeakMap();
const fixed=value=>(Math.abs(value)<.05?0:value).toFixed(1);
export function updateViewReadout(element,camera,controls,language='en'){
 if(!element||!camera||!controls)return;
 let entry=entries.get(element);
 if(!entry){
  const parts=Array.from({length:4},()=>element.appendChild(document.createElement('span')));
  entry={parts,key:''};entries.set(element,entry);
  const footer=element.closest('.statusbar'),viewport=element.closest('.viewport');
  if(footer&&viewport&&typeof ResizeObserver!=='undefined'){
   entry.observer=new ResizeObserver(()=>{
    const lift=Math.max(0,Math.ceil(footer.getBoundingClientRect().height-34));
    viewport.style.setProperty('--view-status-extra',lift+'px');
   });entry.observer.observe(footer);
  }
 }
 const view=currentView(camera,controls),zh=language==='zh';
 const values=[`${zh?'方位':'Az'} ${(Math.round(view.azimuth*10)/10%360).toFixed(1)}°`,`${zh?'仰角':'El'} ${fixed(view.elevation)}°`,`${zh?'视高':'Span'} ${fixed(view.span)} m`,`${zh?'中心':'Center'} (${view.center.map(fixed).join(', ')}) m`];
 const key=language+'|'+values.join('|');if(key===entry.key)return;entry.key=key;
 entry.parts.forEach((part,i)=>part.textContent=values[i]);element.hidden=false;
 element.setAttribute('aria-label',zh?'当前视角':'Current view');
 element.title=zh?'方位从正北顺时针计；仰角为视线与水平面的夹角；视高为可视垂直范围；中心为模型坐标（米）。':'Camera bearing clockwise from north; elevation above horizontal; vertical view span and view center in model meters.';
}
