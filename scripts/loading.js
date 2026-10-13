const stages={local:[0,.03],read:[0,.4],decode:[.4,.5],unpack:[.5,.6],parse:[.6,.8],scene:[.8,.96],render:[.96,.99],ready:[1,1]};
export function loadingPercent({phase,loaded,total}) {
  const [start,end]=stages[phase]||[0,0];
  if (!(total>0)) return null;
  return Math.round(100*(start+(end-start)*Math.max(0,Math.min(1,loaded/total))));
}
export function loadingIndicator(progress,status,label) {
  let state={phase:'read'}, last=0;
  function update(next=state) {
    state=next; const value=loadingPercent(state),text=label('load_'+state.phase);
    if (value===null) progress.removeAttribute('value');
    else { last=Math.max(last,value); if(progress.value!==last)progress.value=last; }
    progress.setAttribute('aria-label',text);
    const amount=state.total>0&&['read','decode','unpack'].includes(state.phase)?` · ${(state.loaded/1048576).toFixed(1)} / ${(state.total/1048576).toFixed(1)} MB`:'';
    const message=text+amount+(value===null?'':` · ${label('load_total')} ${last}%`);
    if(status.textContent!==message)status.textContent=message;
  }
  return {update,refresh:()=>update(state)};
}
