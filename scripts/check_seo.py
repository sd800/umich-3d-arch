from urllib.parse import urlsplit
"""Validate domain, crawlable bilingual directory, local resources and model metadata."""
from pathlib import Path
import json,re,hashlib,xml.etree.ElementTree as ET
from html.parser import HTMLParser
r=Path(__file__).resolve().parents[1];config=json.loads((r/'config/site.config.json').read_text());site=config['url'];text=(r/'index.html').read_text()
class Page(HTMLParser):
    def __init__(self):super().__init__();self.meta={};self.links=[];self.local=[];self.h1=0;self.rows=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='meta':self.meta[a.get('name') or a.get('property')]=a.get('content')
        if tag=='link':self.links.append(a)
        if tag=='h1':self.h1+=1
        if 'data-building-name' in a:self.rows.append(a['data-building-name'])
        if tag in ['script','img','link'] and a.get('src',a.get('href','')).startswith(('assets/','output/')):self.local.append(a.get('src',a.get('href')))
p=Page();p.feed(text)
assert p.h1==1
assert next(l['href'] for l in p.links if l.get('rel')=='canonical')==site
assert p.meta['og:url']==site and p.meta['og:image']==site+'output/campus_aerial.png'
assert p.meta['description']==config['description'] and p.meta['theme-color']=='#00274c'
assert 'index, follow' in p.meta['robots'] and (r/'CNAME').read_text().strip()==config['domain']
assert site+'sitemap.xml' in (r/'robots.txt').read_text()
assert ET.parse(r/'sitemap.xml').find('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text==site
for f in p.local:assert (r/urlsplit(f).path).is_file(),f
data=json.loads(re.search(r'<script id="campus-data"[^>]*>(.*?)</script>',text,re.S).group(1))
schema=json.loads(re.search(r'<script id="campus-schema"[^>]*>(.*?)</script>',text,re.S).group(1))
assert len(p.rows)==len(data['records']) and len(set(p.rows))==len(p.rows)
for record in data['records']:
    assert record['name_zh'] and record['name_zh'] in text
    assert record['basis'] and record['partition'] and record['basis_en'] and record['partition_en']
    assert record['height_status'] in ['estimated','published','municipal']
assert data['compression']=='gzip' and (r/data['modelUrl']).is_file()
assert {b['zone'] for b in data['records']}=={'central','north','medical','athletic'}
assert len(data['landmarkOrder'])==len([b for b in data['records'] if b['landmark']])
entity=next(x for x in schema['@graph'] if x['@type']=='3DModel')
assert entity['sha256']==hashlib.sha256((r/'output/UMich_AnnArbor.3ds').read_bytes()).hexdigest()
assert entity['contentUrl']==site+'output/UMich_AnnArbor.3ds'
offline=(r/'output/UMich_Campus_Offline.html').read_text()
assert not re.search(r'<script[^>]+src=',offline) and 'noindex, follow' in offline
assert not any(bad in text for bad in ['uchicago.edu','UChicago','芝加哥大学','密歇根','安阿伯','__SITE_URL__','__CAMPUS_DATA__'])
assert (r/'assets/model-local.js').stat().st_size<100_000_000
print(f'SEO, bilingual directory ({len(p.rows)} buildings), canonical, assets, inline edition and model digest passed.')

assert "viewer.bundle.js?v=" in text, "Viewer updates must invalidate the browser cache"
