/** Compact landmark panel; independent of camera and selection state. */
export function installHighlightsPanel({panel,button,content,title,label,actions,guide,text}) {
  const header=button.parentElement;
  let collapsed=false;
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
  }
  button.addEventListener('click',()=>{collapsed=!collapsed;refresh();});
  refresh();
  return {refresh};
}
