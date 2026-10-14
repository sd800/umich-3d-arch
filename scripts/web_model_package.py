"""Prepare the lossless web stream without modifying downloadable CAD files."""
from pathlib import Path
import hashlib,json,subprocess
def web_payload(root,source):
    root=Path(root);digest=hashlib.sha256(source)
    for file in ['scripts/pack_web_model.mjs','scripts/vendor/meshopt_encoder.js','scripts/campus_codec.js']:
        digest.update((root/file).read_bytes())
    path=root/'output/web_model_report.json'
    report=json.loads(path.read_text()) if path.exists() else {}
    if report.get('buildSignature')!=digest.hexdigest() or not (root/'assets/campus-model.bin').exists():
        subprocess.run(['node',str(root/'scripts/pack_web_model.mjs')],cwd=root,check=True)
        report=json.loads(path.read_text())
    blob=(root/'assets/campus-model.bin').read_bytes()
    assert hashlib.sha256(blob).hexdigest()==report['transferSha256']
    key={'UChicago_HydePark':'__UCHICAGO_MODEL_BASE64__','UMich_AnnArbor':'__UMICH_MODEL_BASE64__','UW_Seattle':'__UW_MODEL_BASE64__'}[Path(report['source']).stem]
    return {'modelGlobal':key,'modelFormat':report['format'],'compression':'gzip','modelPackedByteLength':report['packedBytes'],'modelUrl':'assets/campus-model.bin?v='+report['transferSha256'][:12]},blob
