"""Package losslessly compressed standard GLB without modifying native CAD."""
from pathlib import Path
import hashlib,json,subprocess

def web_payload(root,source):
 root=Path(root);digest=hashlib.sha256(source).hexdigest();p=root/'output/web_model_report.json'
 report=json.loads(p.read_text()) if p.exists() else {}
 if report.get('format')!='glb-meshopt-v1' or report.get('sourceSha256')!=digest or not(root/'assets/campus-model.glb.gz').exists():
  subprocess.run(['node','scripts/pack_glb.mjs'],cwd=root,check=True);report=json.loads(p.read_text())
 blob=(root/'assets/campus-model.glb.gz').read_bytes();assert hashlib.sha256(blob).hexdigest()==report['transferSha256']
 key={'UChicago_HydePark':'__UCHICAGO_MODEL_BASE64__','UMich_AnnArbor':'__UMICH_MODEL_BASE64__','UW_Seattle':'__UW_MODEL_BASE64__','UCSB_MainCampus':'__UCSB_MODEL_BASE64__'}[Path(report['source']).stem]
 return {'modelGlobal':key,'modelFormat':report['format'],'compression':'gzip','modelPackedByteLength':report['packedBytes'],'modelUrl':'assets/campus-model.glb.gz?v='+report['transferSha256'][:12]},blob
