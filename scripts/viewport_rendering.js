/** Resize the drawing buffer and redraw atomically, before the same browser paint. */
export function createViewportRenderLoop({host,renderer,resize,draw,requestFrame=callback=>requestAnimationFrame(callback)}) {
  let queued=false,width=0,height=0;
  function needsResize() {
    const w=host.clientWidth,h=host.clientHeight;
    return w>0&&h>0&&(w!==width||h!==height);
  }
  function drawNow() {
    const w=host.clientWidth,h=host.clientHeight;
    if(w<1||h<1)return false;
    if(w!==width||h!==height) {
      const ratio=height>0?h/height:1;
      // CSS follows the host; changing its style here can trigger observer feedback.
      renderer.setSize(w,h,false);
      width=w;height=h;resize(ratio);
    }
    draw();
    return true;
  }
  function request() {
    if(queued)return;
    queued=true;
    requestFrame(()=>{queued=false;drawNow();});
  }
  return {request,needsResize,drawNow};
}
