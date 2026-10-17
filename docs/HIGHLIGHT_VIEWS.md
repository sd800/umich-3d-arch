# Architectural Highlights presentation cameras

`config/highlight-views.json` specifies one camera per newly reviewed highlight, keyed by stable facility/OSM ID. The bearing describes the camera's side of the building, clockwise from model north; elevation is measured above the ground. Entries identify the frontage, court or characteristic roof/volume composition being presented and retain the owner/architect reference already used for the model.

Use an architectural aerial-photography composition: choose the recognizable presentation side, preserve verticals, add a restrained three-quarter turn, and balance the subject with its arrival landscape.

These are editorial camera choices interpreted from mapped plans and exterior photographs, not measured entrance bearings. Low oblique views emphasize facades while retaining enough roof and ground to read depth. Courtyard buildings and sports bowls use higher views to show their spaces. The whole selected building remains within the fit box, including its roof and grounded base.

Explicit camera fields already stored on a building record take precedence. Initial campus/district views, geometry, regional detail budgets, ordinary click highlighting and Highlights' original-material selection are unchanged. Cameras are bundled with the viewer, so HTTP, local double-click and standalone HTML use the same choices without another request.

Run `node scripts/check_highlight_views.mjs` after a camera edit. It checks catalogue coverage, preserved presets, actual exported mesh bounds and portrait/landscape orthographic framing. Use UChicago or UW for shared viewer browser checks.
