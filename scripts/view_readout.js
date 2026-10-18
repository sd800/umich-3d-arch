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
const mobileQuery='(max-width:760px), (hover:none) and (pointer:coarse)';
function createEntry(element,camera,controls,language){
 const footer=element.closest('.statusbar'),viewport=element.closest('.viewport'),info=element.parentElement,label=info.querySelector('#status-text');
 const entry={camera,controls,language,enabled:false,parts:null,key:'',measure:null,measureKey:'',reservedWidth:0};
 entry.render=()=>{
  if(!entry.enabled)return;
  const view=currentView(entry.camera,entry.controls),zh=entry.language==='zh';
  const values=[`${zh?'方位':'Az'} ${(Math.round(view.azimuth*10)/10%360).toFixed(1)}°`,`${zh?'仰角':'El'} ${fixed(view.elevation)}°`,`${zh?'视高':'Span'} ${fixed(view.span)} m`,`${zh?'中心':'Center'} (${view.center.map(fixed).join(', ')}) m`];
  const key=entry.language+'|'+values.join('|');if(key===entry.key)return;entry.key=key;
  if(!entry.parts)entry.parts=Array.from({length:4},()=>element.appendChild(document.createElement('span')));
  entry.parts.forEach((part,i)=>part.textContent=values[i]);element.hidden=false;
  element.setAttribute('aria-label',zh?'当前视角':'Current view');
  element.title=zh?'方位从正北顺时针计；仰角为视线与水平面的夹角；视高为可视垂直范围；中心为模型坐标（米）。':'Camera bearing clockwise from north; elevation above horizontal; vertical view span and view center in model meters.';
 };
 entry.fit=()=>{
  let enabled=true;
  if(matchMedia(mobileQuery).matches){
   const style=getComputedStyle(element),font=style.font,measureKey=entry.language+'|'+font;
   if(entry.measureKey!==measureKey){
    // Measure static text once per font/language, without reading the camera
    // or creating view-data nodes. Reserve room for signs and large values so
    // navigation never causes the feature to flicker on and off.
    if(!entry.measure){const probe=document.createElement('canvas');probe.width=probe.height=1;entry.measure=probe.getContext('2d');}
    const zh=entry.language==='zh',samples=[`${zh?'方位':'Az'} 359.9°`,`${zh?'仰角':'El'} -90.0°`,`${zh?'视高':'Span'} 99999.9 m`,`${zh?'中心':'Center'} (-99999.9, -99999.9, -99999.9) m`];
    if(entry.measure){entry.measure.font=font;entry.reservedWidth=samples.reduce((sum,text)=>sum+entry.measure.measureText(text).width,0)+3*(parseFloat(style.columnGap)||0)+(parseFloat(style.paddingLeft)||0)+(parseFloat(style.borderLeftWidth)||0);}
    else entry.reservedWidth=600;
    entry.measureKey=measureKey;
   }
   const gap=parseFloat(getComputedStyle(info).columnGap)||0;
   enabled=label.getBoundingClientRect().width+gap+entry.reservedWidth<=info.clientWidth-.5;
  }
  if(entry.enabled!==enabled){
   entry.enabled=enabled;entry.key='';
   if(enabled)entry.render();
   else{element.hidden=true;element.replaceChildren();element.removeAttribute('title');entry.parts=null;}
  }
  if(footer&&viewport){const lift=Math.max(0,Math.ceil(footer.getBoundingClientRect().height-34));viewport.style.setProperty('--view-status-extra',lift+'px');}
 };
 if(typeof ResizeObserver!=='undefined'){
  entry.observer=new ResizeObserver(entry.fit);
  for(const node of [info,label,footer])if(node)entry.observer.observe(node);
 }else addEventListener('resize',entry.fit,{passive:true});
 entry.fit();return entry;
}
export function updateViewReadout(element,camera,controls,language='en'){
 if(!element||!camera||!controls)return;
 let entry=entries.get(element);
 if(!entry){entry=createEntry(element,camera,controls,language);entries.set(element,entry);return;}
 entry.camera=camera;entry.controls=controls;
 if(entry.language!==language){entry.language=language;entry.fit();}
 // Ineligible mobile layouts stop here: no camera math, formatting or DOM
 // updates. Only layout/language changes can reactivate the readout.
 if(entry.enabled)entry.render();
}
