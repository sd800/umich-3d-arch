/** Compact landmark panel; independent of camera and selection state. */
export function installHighlightsPanel({panel,button,content,title,label,text}) {
  let collapsed=false;
  function refresh() {
    const focusInside=content.contains(content.ownerDocument.activeElement);
    panel.classList.toggle('is-collapsed',collapsed);
    button.classList.toggle('map-action',collapsed);
    content.hidden=collapsed;title.hidden=collapsed;label.hidden=!collapsed;
    title.textContent=text('tourTitle');label.textContent=text('exploreHighlights');
    panel.setAttribute('aria-labelledby',collapsed?label.id:title.id);
    const action=text(collapsed?'expandHighlights':'collapseHighlights');
    button.setAttribute('aria-expanded',String(!collapsed));
    button.setAttribute('aria-label',action);button.title=action;
    if(collapsed&&focusInside)button.focus({preventScroll:true});
  }
  button.addEventListener('click',()=>{collapsed=!collapsed;refresh();});
  refresh();
  return {refresh};
}
