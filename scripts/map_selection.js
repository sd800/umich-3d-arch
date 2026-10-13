/** A drag returning to its starting point and multi-touch must never become a click. */
export function installMapSelection(canvas,select) {
  const pointers=new Set();let tap=null;
  canvas.addEventListener('pointerdown',event=>{
    pointers.add(event.pointerId);
    tap=pointers.size===1&&event.button===0&&event.isPrimary!==false?{id:event.pointerId,x:event.clientX,y:event.clientY}:null;
  });
  canvas.addEventListener('pointermove',event=>{
    if(tap&&event.pointerId===tap.id&&Math.hypot(event.clientX-tap.x,event.clientY-tap.y)>=5)tap=null;
  });
  canvas.addEventListener('pointerup',event=>{
    const clicked=tap&&event.pointerId===tap.id&&pointers.size===1&&event.button===0;
    pointers.delete(event.pointerId);tap=null;if(clicked)select(event);
  });
  canvas.addEventListener('pointercancel',event=>{pointers.delete(event.pointerId);tap=null;});
}
