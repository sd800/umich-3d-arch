"""Keep full metric CAD locally; publish lossless compressed archives below GitHub's limit."""
from pathlib import Path
import argparse,gzip,hashlib,json,shutil,lzma
ROOT=Path(__file__).resolve().parents[1]
FILES=['UMich_AnnArbor.3ds','UMich_AnnArbor_Layered.3dm']
def ensure_cad(root=ROOT):
 for name in FILES:
  p=Path(root)/'output'/name
  if not p.exists():
   archive=Path(str(p)+('.xz' if p.suffix=='.3dm' else '.gz'))
   opener=lzma.open if p.suffix=='.3dm' else gzip.open
   with opener(archive,'rb')as src,p.open('wb')as dst:shutil.copyfileobj(src,dst)
def package_cad(root=ROOT):
 out=Path(root)/'output';items=[]
 for name in FILES:
  p=out/name;is_rhino=p.suffix=='.3dm';q=out/(name+('.xz'if is_rhino else '.gz'));digest=hashlib.sha256(p.read_bytes()).hexdigest()
  with p.open('rb')as src,q.open('wb')as dst:
   if is_rhino:
    with lzma.LZMAFile(dst,'wb',preset=6)as packed:shutil.copyfileobj(src,packed)
   else:
    with gzip.GzipFile(filename='',mode='wb',compresslevel=6,fileobj=dst,mtime=0)as packed:shutil.copyfileobj(src,packed)
  decoded=lzma.decompress(q.read_bytes())if is_rhino else gzip.decompress(q.read_bytes())
  assert hashlib.sha256(decoded).hexdigest()==digest
  assert q.stat().st_size<100*1024*1024,(name,q.stat().st_size)
  items.append({'source':str(p.relative_to(root)),'archive':str(q.relative_to(root)),'sourceBytes':p.stat().st_size,'archiveBytes':q.stat().st_size,'sourceSha256':digest,'archiveSha256':hashlib.sha256(q.read_bytes()).hexdigest()})
 (out/'cad_delivery.json').write_text(json.dumps({'format':'gzip (3DS) / XZ (Rhino)','files':items},indent=2)+'\n');return items
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--extract',action='store_true');args=parser.parse_args()
 if args.extract:ensure_cad()
 else:print(json.dumps(package_cad(),indent=2))
