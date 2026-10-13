from pathlib import Path
import hashlib
r=Path(__file__).resolve().parents[1]
bundle=r/'tmp/rendering-check.js'
html=(r/'scripts/rendering-check.html').read_text().replace('../tmp/rendering-check.js','rendering-check.js?v='+hashlib.sha256(bundle.read_bytes()).hexdigest()[:12])
(r/'tmp/rendering-check.html').write_text(html)
print('GPU check page: tmp/rendering-check.html')
