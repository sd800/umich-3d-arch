/** Small Guide disclosure; no model loading, frame loop or camera work. */
export function installGuideReferences({dialog,trigger,panel}){
 function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false');}
 function position(){
  if(panel.hidden)return;
  const viewport=window.visualViewport;
  const x=viewport?.offsetLeft||0,y=viewport?.offsetTop||0;
  const width=viewport?.width||innerWidth,height=viewport?.height||innerHeight;
  panel.style.maxWidth=Math.max(0,Math.min(360,width-24))+'px';
  panel.style.maxHeight=Math.max(0,height-24)+'px';
  const anchor=trigger.getBoundingClientRect(),box=panel.getBoundingClientRect();
  const left=Math.max(x+12,Math.min(anchor.left,x+width-box.width-12));
  let top=anchor.top-box.height-9;
  if(top<y+12)top=anchor.bottom+9;
  top=Math.max(y+12,Math.min(top,y+height-box.height-12));
  panel.style.left=left+'px';panel.style.top=top+'px';
 }
 trigger.addEventListener('click',()=>{
  if(!panel.hidden){close();return;}
  panel.hidden=false;trigger.setAttribute('aria-expanded','true');position();
 });
 dialog.addEventListener('pointerdown',event=>{
  if(!panel.hidden&&!panel.contains(event.target)&&!trigger.contains(event.target))close();
 });
 dialog.addEventListener('cancel',event=>{
  if(panel.hidden)return;
  event.preventDefault();close();trigger.focus({preventScroll:true});
 });
 dialog.addEventListener('close',close);
 dialog.addEventListener('scroll',position,{passive:true});
 window.addEventListener('resize',position,{passive:true});
 window.visualViewport?.addEventListener('resize',position,{passive:true});
 window.visualViewport?.addEventListener('scroll',position,{passive:true});
}
