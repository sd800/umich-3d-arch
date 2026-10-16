/** Choose the narrower Guide first only when it fits the remaining row. */
export function stackHighlightsActions(available,guideWidth,exploreWidth,gap=6){
 return guideWidth<=available+.5&&guideWidth+exploreWidth+gap>available+.5;
}
/** Compact landmark panel; independent of camera and selection state. */
export function installHighlightsPanel({panel,button,content,title,label,actions,guide,text}) {
  const header=button.parentElement;
  let collapsed=false,layoutFrame=0;
  const toolbar=actions.parentElement,win=button.ownerDocument.defaultView;
  function layout(){
    layoutFrame=0;
    if(!collapsed){actions.classList.remove('stacked-actions');return;}
    const buttons=[...toolbar.children].filter(el=>el!==actions&&el.getClientRects().length);
    const last=buttons.at(-1),right=toolbar.getBoundingClientRect().right;
    const gap=parseFloat(win.getComputedStyle(toolbar).columnGap)||0;
    const available=last?right-last.getBoundingClientRect().right-gap:toolbar.clientWidth;
    const gw=guide.getBoundingClientRect().width,ew=button.getBoundingClientRect().width;
    actions.style.setProperty('--guide-width',gw+'px');
    actions.classList.toggle('stacked-actions',stackHighlightsActions(available,gw,ew));
  }
  function queueLayout(){if(!layoutFrame)layoutFrame=win.requestAnimationFrame(layout);}
  const observer=new win.ResizeObserver(queueLayout);observer.observe(toolbar);
  button.ownerDocument.fonts?.ready.then(queueLayout);

  function refresh() {
    const active=button.ownerDocument.activeElement;
    const restoreFocus=active===button||(collapsed&&content.contains(active));
    const parent=collapsed?actions:header;
    if(button.parentElement!==parent){
      if(collapsed)actions.insertBefore(button,guide);
      else header.append(button);
    }
    panel.hidden=collapsed;
    panel.classList.toggle('is-collapsed',collapsed);
    button.classList.toggle('map-action',collapsed);
    content.hidden=collapsed;title.hidden=collapsed;label.hidden=!collapsed;
    title.textContent=text('tourTitle');label.textContent=text('exploreHighlights');
    panel.setAttribute('aria-labelledby',title.id);
    const action=text(collapsed?'expandHighlights':'collapseHighlights');
    button.setAttribute('aria-expanded',String(!collapsed));
    button.setAttribute('aria-label',action);button.title=action;
    if(restoreFocus)button.focus({preventScroll:true});
    queueLayout();
  }
  button.addEventListener('click',()=>{collapsed=!collapsed;refresh();});
  refresh();
  return {refresh};
}
