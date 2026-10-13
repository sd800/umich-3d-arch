"""Validate release files and exact calendar commit messages."""
from pathlib import Path
import sys,re,subprocess,datetime,json
r=Path(__file__).resolve().parents[1]
def git(*args):return subprocess.check_output(['git',*args],cwd=r,text=True).strip()
index=len(sys.argv)>1
version=git('show',':VERSION') if index else (r/'VERSION').read_text().strip()
changelog=git('show',':CHANGELOG.md') if index else (r/'CHANGELOG.md').read_text()
pattern=r"[0-9]{2}\.(?:[1-9]|1[0-2])\.(?:[1-9]|[12][0-9]|3[01])\.[1-9][0-9]*"
assert re.fullmatch(pattern,version),'Invalid calendar version'
y,m,d,n=map(int,version.split('.'));datetime.date(2000+y,m,d)
assert '## '+version+' ' in changelog,'Current release is missing from CHANGELOG.md'
assert not re.search(r'[\u4e00-\u9fff]',changelog),'CHANGELOG.md must be English'
subjects=git('log','--format=%s').splitlines()
allow_initial=json.loads((r/'package.json').read_text())['name']=='umich-ann-arbor-model'
for i,subject in enumerate(subjects):
    if subject=='Add files' and allow_initial and i==len(subjects)-1:continue
    assert re.fullmatch('Release '+pattern,subject),'Non-calendar history: '+subject
    assert '## '+subject.removeprefix('Release ')+' ' in changelog,'Historical changelog entry missing'
if index:
    message=Path(sys.argv[1]).read_text().strip()
    assert message=='Release '+version,'Commit message must be exactly Release '+version
    assert message not in subjects,'Release version already exists; increment the sequence'
    prefix='Release '+'.'.join(version.split('.')[:3])+'.'
    sequences=[int(x[len(prefix):]) for x in subjects if x.startswith(prefix)]
    assert n==max(sequences,default=0)+1,'Use the next release sequence for this day'
print('Release policy valid:',version)
