from pathlib import Path
import hashlib
r=Path(__file__).resolve().parents[1];p=r/'tmp/terrain-check.js'
(r/'tmp/terrain-check.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>Terrain occlusion regression</title><pre id="results">Running</pre><script src="terrain-check.js?v='+hashlib.sha256(p.read_bytes()).hexdigest()[:12]+'"></script></html>')
