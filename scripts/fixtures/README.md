# Roof regression fixture

`umich_roof.json` preserves the Float32 positions, indices and transforms of the body, metal roof sheet and concrete roof inset of G. G. Brown Building (`M373`) in the delivered UMich model. Its independently triangulated, coplanar roof surfaces reproduce the North Campus rendering conflict at large camera distances. The fixture is shared by the three viewers' WebGL regression checks; it does not add a building to either other campus.

`medical_roofs_before.json` preserves the original coplanar roof finishes of North Quad, Frankel Cardiovascular Center, Kahn Pavilion and Mott/Women’s Hospital. `check_roof_surfaces.py` creates a temporary corrected fixture from the current exported 3DS; the focused WebGL check reproduces competing colors in the original mesh and checks stable designed finishes while panning, rotating and zooming.
