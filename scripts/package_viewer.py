from cad_delivery import ensure_cad
from terrain_contact import grade_pads
"""Build a crawlable root viewer and a self-contained double-click edition."""
from pathlib import Path
import json,base64,re,hashlib,gzip
from html import escape
from datetime import date
import numpy as np
from PIL import Image
from scipy.interpolate import RegularGridInterpolator
from shapely.geometry import shape,mapping,box
from shapely.ops import transform
from pyproj import Transformer
from curation import LANDMARKS

root=Path(__file__).resolve().parents[1];out=root/'output';assets=root/'assets'
ensure_cad(root)
config=json.loads((root/'config/site.config.json').read_text());site=config['url']
assert site=='https://'+config['domain']+'/'
records=json.loads((out/'buildings.json').read_text());summary=json.loads((out/'model_summary.json').read_text())
neighbors=json.loads((out/'neighboring_records.json').read_text());neighbor_report=json.loads((out/'neighboring_areas.json').read_text())
for n in neighbors:n['contextLabel']=n.get('contextLabel',False)or n['name'] in ['Tower Plaza','Graduate Ann Arbor','Michigan Theater','State Theatre','Nickels Arcade','Kerrytown Market','Zingerman’s Delicatessen']
short={
'1000155':('Burton Tower','伯顿塔'),'1000152':('Angell Hall','安杰尔楼'),'1000177':('Hill Auditorium','希尔礼堂'),'1000172':('Rackham','拉克姆研究生院'),'1000120':('Michigan Union','密西根学生会馆'),'1000191':('Michigan League','密西根联盟会馆'),'1000185':('Hatcher Library','哈彻图书馆'),'1000151':('Museum of Art','艺术博物馆'),'1000184':('Cook Law Library','库克法律图书馆'),'1000179':('Hutchins Hall','哈钦斯楼'),'1000108':('Lawyers Club','律师俱乐部'),'1000159':('Clements Library','克莱门茨图书馆'),'1000198':('Detroit Observatory','底特律天文台'),'1005188':('Ross School of Business','罗斯商学院'),'1005177':('North Quad','北庭院综合楼'),'1000394':('Lurie Tower','卢里塔'),'1000396':('Duderstadt Center','杜德施塔特中心'),'1000446':('Ford Presidential Library','福特总统图书馆'),'1000432':('Art & Architecture','艺术与建筑楼'),'1005092':('Beyster Building','拜斯特楼'),'1005418':('Ford Robotics','福特机器人楼'),'1000711':('Michigan Stadium','密西根体育场'),'1000700':('Crisler Center','克里斯勒中心'),'1000709':('Yost Ice Arena','约斯特冰球馆'),'1005173':("Mott & Women’s Hospital",'莫特儿童与妇女医院'),'1005109':('Frankel Cardiovascular Center','弗兰克尔心血管中心'),'1005440':('Kahn Pavilion','卡恩医疗楼'),'1005037':('Biomedical Science Research','生物医学科学研究楼'),'1005504':('Leinweber Building','莱因韦伯楼')}
for r in records:
    if r['facility_id'] in short:r['short'],r['short_zh']=short[r['facility_id']]
    if r['facility_id']=='1000415':r['name_zh']='船舶与海洋工程楼'
    if r['facility_id']=='1000429':r['name_zh']='工业与运营工程楼'
    if r['facility_id']=='1000807':r['name_zh']='Physical Properties 楼'
    if r['facility_id']=='1005146':r['name_zh']='心血管中心停车楼'
    r['aliases_zh']=[r['facility_id'],r.get('official_name') or '']
(out/'viewer_records.json').write_text(json.dumps(records,ensure_ascii=False,indent=2))

place_terms={}
for line in '''
Ingalls Mall North|英格尔斯林荫广场北段
Gateway Garden|Gateway Garden（门户花园）
Palmer Field|帕尔默运动场
Elbel Field|埃尔贝尔运动场
U-M Track and Field Stadum|密西根大学田径场
East University Mall North|东大学大道林荫广场北段
Alexandra Hicks Herb Knot Garden|亚历山德拉·希克斯香草结园
Wilpon Complex|威尔庞体育设施群
Michigan Stadium Field|密西根体育场比赛场地
Mcity|Mcity 智能网联汽车试验场
Betsy Barbour Front Lawn|贝齐·巴伯宿舍楼前草坪
Mitchell Field|米切尔运动场
Duderstadt Center Front Lawn|杜德施塔特中心前草坪
Gerstacker Grove|格斯塔克尔林园
Front Lawn Michigan Union|密西根学生会馆前草坪
Front of Angel Hall|安杰尔楼前广场
Lawn Between Gorguze and FXB|戈古兹楼与巴尼奥楼之间的草坪
Shapiro Undergraduate Library Plaza|夏皮罗本科图书馆广场
U-M Soccer Stadium|密西根大学足球场
Rackham East Lawn|拉克姆研究生院东草坪
Lawn Between Walgreen Drama Center and Pierpont|沃尔格林戏剧中心与皮尔庞特中心之间的草坪
William Clay Ford Outdoor Courts|威廉·克莱·福特室外球场
Nichols Arboretum|尼科尔斯树木园
Football Practice Field|美式橄榄球训练场
Perennial Garden|宿根花园
Nichols Arboretum Peony Garden|尼科尔斯树木园牡丹园
Medicinal Plant Garden|药用植物园
North Campus Research Complex|北校区研究综合体
Wave Field|Wave Field（波浪地景）
Bonsai and Penjing Garden|盆栽与盆景园
Lawn Between Hatcher and Clements Libraries|哈彻图书馆与克莱门茨图书馆之间的草坪
William W. Cook Law Quadrangle|威廉·W·库克法学院庭院
Ferry Field|费里运动场
Diag Grass Area|The Diag 草坪区
Radiation Sciences Lab East Lawn|辐射科学实验楼东草坪
Radrick Farms|拉德里克农庄
The Diag Proper|The Diag 中央铺装广场
Ingalls Mall Fountain|英格尔斯林荫广场喷泉
Commons|Commons（公共活动区）
Stephen M. Ross Athletic Campus South Complex|斯蒂芬·M·罗斯体育区南部设施群
UM Golf Course|密西根大学高尔夫球场
Front Lawn Museum of Art|艺术博物馆前草坪
Radrick Farms Golf Course|拉德里克农庄高尔夫球场
Ingalls Mall South|英格尔斯林荫广场南段
East University Mall South|东大学大道林荫广场南段
Dunderstadt Portico & Plaza|杜德施塔特中心柱廊与广场
Felch Park|费尔奇公园
Perry Building Front Lawn|佩里楼前草坪
U-M Lacrosse Stadium|密西根大学长曲棍球场
Hatcher Library Portico|哈彻图书馆柱廊
Lurie Reflection Pool|卢里倒影池
Palmer Plaza|帕尔默广场
East University Mall - Weiser Hall|东大学大道林荫广场 · 韦瑟楼段
Radiation Sciences Lab West Lawn|辐射科学实验楼西草坪
Regents Plaza|校董广场
Lorch Hall Lawn|洛尔奇楼草坪
Ocker Field|奥克尔曲棍球场
Mars Yard|Mars Yard（火星模拟场地）
Engineering Arch|工程学院拱门
The Charles J. Strosacker Foundation Plaza|查尔斯·J·斯特罗萨克基金会广场
Peter S. Fuss Pavilion|彼得·S·富斯亭
Eula D. Marcks Garden|尤拉·D·马尔克斯花园
East Quad Garden|东庭院宿舍区花园
The Diag|The Diag 中央绿地
Ingalls Mall|英格尔斯林荫广场
East University Mall|东大学大道林荫广场
Wolverine Village|Wolverine Village（狼獾村）
Geddes Complex|格迪斯楼群
'''.strip().splitlines():
    en,zh=line.split('|');place_terms[en]=zh
source_places=json.loads((root/'sources/official_places.geojson').read_text())['features']
assert all(f['properties']['NamedSpace'].strip() in place_terms for f in source_places)
tf=Transformer.from_crs(4326,32617,always_xy=True);ox,oy=summary['origin_utm']
def project(x,y,z=None):
    a,b=tf.transform(x,y);return np.asarray(a)-ox,np.asarray(b)-oy
terrain_meta=json.loads((root/'sources/terrain_export_metadata.json').read_text());e=terrain_meta['extent'];dem=np.asarray(Image.open(root/'sources/terrain_dem.tif'))
xs=np.linspace(e['xmin'],e['xmax'],dem.shape[1],endpoint=False)+(e['xmax']-e['xmin'])/dem.shape[1]/2-ox
ys=np.linspace(e['ymin'],e['ymax'],dem.shape[0],endpoint=False)+(e['ymax']-e['ymin'])/dem.shape[0]/2-oy
interpolate=RegularGridInterpolator((ys,xs),dem[::-1]-225,bounds_error=False,fill_value=None)
featured={'The Diag','Ingalls Mall','William W. Cook Law Quadrangle','Gerstacker Grove','Ferry Field','Palmer Field','Nichols Arboretum','North Campus Research Complex','Wave Field','Regents Plaza','UM Golf Course'}
places=[];glossary=[];hover_places=[]
for i,f in enumerate(source_places):
    en=f['properties']['NamedSpace'].strip();q=transform(project,shape(f['geometry']));c=q.centroid
    hover_places.append({'id':'P'+str(i),'name':en,'name_zh':place_terms[en],'hitArea':mapping(q.simplify(.25,preserve_topology=True)),'source':'https://map.fo.umich.edu/'})
    glossary.append({'name':en,'name_zh':place_terms[en],'source':'https://map.fo.umich.edu/','note':'English is the original GIS label; Chinese is an independent faithful translation. GIS typos are retained here for traceability.'})
    if en in featured:places.append({'id':'P'+str(i),'name':en,'name_zh':place_terms[en],'position':[round(c.x,2),round(c.y,2),round(float(interpolate([[c.y,c.x]])[0])+1,2)]})
diag=next(f for f in source_places if f['properties']['NamedSpace'].strip()=='The Diag Proper')
diag_center=transform(project,shape(diag['geometry'])).centroid
overview_center=[round(diag_center.x,4),round(diag_center.y,4)]
river=max((f for f in json.loads((root/'sources/official_water.geojson').read_text())['features'] if (f['properties'].get('Name') or '').strip()=='Huron River'),key=lambda f:shape(f['geometry']).area)
from shapely.geometry import box
hover_places.append({'id':'HURON','name':'Huron River','name_zh':'休伦河','hitArea':mapping(transform(project,shape(river['geometry'])).simplify(.5,preserve_topology=True)),'source':'https://map.fo.umich.edu/'})
river_area=transform(project,shape(river['geometry'])).intersection(box(500,900,1400,1700));anchor=river_area.representative_point();hx,hy=anchor.x,anchor.y;hz=float(interpolate([[hy,hx]])[0])+1
places.append({'id':'HURON','name':'Huron River','name_zh':'休伦河（Huron River）','position':[hx,hy,hz]})
(root/'sources/place_names_zh.json').write_text(json.dumps(glossary,ensure_ascii=False,indent=2))
# Named neighboring streets use the same retained centerlines as the model.
from neighboring_areas import read_osm,REGIONS
from shapely.ops import unary_union
context_selection=unary_union([transform(project,box(*b))for b in REGIONS.values()])
context_features,_=read_osm()
# Named public context landscapes remain labeled independently of campus places.
context_extent=shape(neighbor_report.get('land_extent',{'type':'Polygon','coordinates':[]}))
for f in context_features:
    name=f['properties'].get('name','');g=f['poly']
    zhname={'Forest Hill Cemetery':'Forest Hill 墓园','Fuller Park':'富勒公园','Riverside Park':'河滨公园','Broadway Park':'Broadway 公园'}.get(name)
    if not zhname or g.geom_type not in ['Polygon','MultiPolygon']:continue
    hit=g.intersection(context_extent)
    if hit.is_empty:continue
    hover_places.append({'id':'NE_'+name,'name':name,'name_zh':zhname,'neighbor':True,'hitArea':mapping(hit),'source':'https://www.openstreetmap.org/'+f['properties']['osm_id']})
    anchor=hit.representative_point();z=float(interpolate([[anchor.y,anchor.x]])[0])+1
    places.append({'id':'NE_'+name,'name':name,'name_zh':zhname,'neighbor':True,'position':[anchor.x,anchor.y,z]})
for name,zhname in [('South State Street','南州街'),('North State Street','北州街'),('South University Avenue','南大学大道'),('Broadway Street','Broadway 街'),('Plymouth Road','普利茅斯路')]:
    lines=[f['poly']for f in context_features if f['properties'].get('name')==name and f['properties'].get('highway')and f['poly'].geom_type=='LineString']
    if not lines:continue
    hit=unary_union(lines).buffer(3.5).intersection(context_selection)
    if not hit.is_empty:hover_places.append({'id':'NE_'+name,'name':name,'name_zh':zhname,'neighbor':True,'hitArea':mapping(hit),'source':'https://www.openstreetmap.org/copyright'})
xi=list(range(0,len(xs),10));yi=list(range(0,len(ys),10))
if xi[-1]!=len(xs)-1:xi.append(len(xs)-1)
if yi[-1]!=len(ys)-1:yi.append(len(ys)-1)
ground_grid={'x':[round(float(xs[i]),2) for i in xi],'y':[round(float(ys[i]),2) for i in yi],'heights':np.round((dem[::-1]-225)[np.ix_(yi,xi)],2).tolist()}
seo={'en':{k:config[k] for k in ['title','description','imageAlt']},'zh':config['zh']}
cad_bytes=(out/'UMich_AnnArbor.glb').read_bytes()
model=(out/'UMich_AnnArbor.glb').read_bytes();from web_model_package import web_payload
web,compressed=web_payload(root,model)
encoded=base64.b64encode(compressed).decode();preview=base64.b64encode((out/'campus_aerial.png').read_bytes()).decode()
rail_hits=unary_union([f['poly'].buffer(4)for f in context_features if f['properties'].get('railway')=='rail'and f['properties'].get('name')=='Ann Arbor Railroad'])
if not rail_hits.is_empty:hover_places.append({'id':'NE_RAIL','name':'Ann Arbor Railroad','name_zh':'安娜堡铁路','neighbor':True,'hitArea':mapping(rail_hits.intersection(shape(neighbor_report['land_extent']))),'source':'https://www.openstreetmap.org/copyright'})

b=summary['bounds'];data={**web,'neighbors':neighbors,'neighborPads':neighbor_report['pads'],'neighborBounds':neighbor_report['bounds'],'groundPads':grade_pads(out),'overviewCenter':overview_center,'groundGrid':ground_grid,'modelByteLength':len(model),'modelTransferBytes':len(compressed),'layers':json.loads((out/'layer_map.json').read_text()),'palette':json.loads((out/'palette.json').read_text()),'records':records,'preview':'output/campus_aerial.png','downloadUrl':'output/UMich_AnnArbor.glb','compression':'gzip','offlineModelScript':'assets/model-local.js','seo':seo,'landmarkOrder':LANDMARKS,'districtBounds':{**summary['district_bounds'],'central':[-650,-650,1000,800]},'siteCenter':[(b[0]+b[2])/2,(b[1]+b[3])/2],'places':places,'hoverPlaces':hover_places}
data['regions']=json.loads((assets/'stream/manifest.json').read_text())
assert data['regions']['sourceSha256']==hashlib.sha256(model).hexdigest()
schema={'@context':'https://schema.org','@graph':[
{'@type':'WebSite','@id':site+'#website','url':site,'name':'UMich Campus 3D Model','inLanguage':['en','zh-CN'],'sameAs':config['repository'],'image':site+'assets/brand/m-map.png'},
{'@type':'WebPage','@id':site+'#webpage','url':site,'name':config['title'],'description':config['description'],'inLanguage':['en','zh-CN'],'isPartOf':{'@id':site+'#website'},'mainEntity':{'@id':site+'#model'},'dateModified':date.today().isoformat(),'primaryImageOfPage':{'@type':'ImageObject','url':site+'output/campus_aerial.png','width':Image.open(out/'campus_aerial.png').width,'height':Image.open(out/'campus_aerial.png').height}},
{'@type':'3DModel','@id':site+'#model','name':'University of Michigan Ann Arbor exterior campus model','description':f"Independent public-source model with {len(records)} campus building layers, {len(neighbors)} independently toggleable neighboring buildings, separate landscape layers, university GIS landscape and sampled USGS terrain. Heights and exterior geometry are approximate and carry source notes.",'contentUrl':site+'output/UMich_AnnArbor.glb','encodingFormat':'model/gltf-binary','contentSize':str(len(cad_bytes))+' bytes','sha256':hashlib.sha256(cad_bytes).hexdigest(),'thumbnailUrl':site+'output/campus_aerial.png','contentLocation':{'@type':'Place','name':'University of Michigan Ann Arbor campus','address':{'@type':'PostalAddress','addressLocality':'Ann Arbor','addressRegion':'MI','addressCountry':'US'}},'isBasedOn':['https://www.openstreetmap.org/copyright','https://map.fo.umich.edu/','https://tour.umich.edu/','https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer','https://www.a2gov.org/media/aoxh1zdd/appendixb_10-10-13.pdf']}
]}
def jsjson(value):return json.dumps(value,ensure_ascii=False,separators=(',',':')).replace('</',r'<\/')
from model_downloads import downloads,links
data['downloads']=downloads(root)

for item in schema['@graph']:
 if item['@type']=='3DModel':
  glb=data['downloads'][2];item['contentUrl']=site+glb['url'];item['encodingFormat']='application/x-xz'if glb['name'].endswith('.xz')else'model/gltf-binary';item['contentSize']=str((root/glb['url']).stat().st_size)+' bytes';item['sha256']=hashlib.sha256((root/glb['url']).read_bytes()).hexdigest()

template=(root/'scripts/viewer.template.html').read_text();bundle=(root/'tmp/viewer.bundle.js').read_text()
initial=[]
for r in [*records,*neighbors]:
    prefix='⁺' if r.get('neighbor') else ''
    initial.append(f'<div class="row"><span class="building-name" data-building-name="{escape(r["code"])}">{prefix}{escape(r["name"])}</span><span class="building-meta">{prefix}{escape(r["name_zh"])} · {escape(r["code"])}</span></div>')
for token,value in {'__SITE_URL__':site,'__SEO_TITLE__':escape(config['title'],quote=True),'__SEO_DESCRIPTION__':escape(config['description'],quote=True),'__IMAGE_ALT__':escape(config['imageAlt'],quote=True),'__STRUCTURED_DATA__':jsjson(schema),'__INITIAL_BUILDINGS__':''.join(initial),'__INITIAL_COUNT__':str(len(records))}.items():template=template.replace(token,value)
license=((root/'docs/THIRD_PARTY_NOTICES.md').read_text()+'\n'+(assets/'fonts/OFL.txt').read_text()).replace('--','- -');template=template.replace('</head>','<!--\n'+license+'\n-->\n</head>')
def edition(payload,font,preview,icons,logo,script,robots,rhino):
    html=template.replace('__MODEL_DOWNLOADS__',links(payload,robots.startswith('noindex')))
    for token,value in {'__CAMPUS_DATA__':jsjson(payload),'__TITLE_FONT_URL__':font,'__PREVIEW_IMAGE__':preview,'__FAVICON__':icons['32'],'__FAVICON_16__':icons['16'],'__APPLE_ICON__':icons['apple'],'__LOGO__':logo,'__VIEWER_SCRIPT__':script,'__ROBOTS__':robots,'__RHINO_URL__':rhino}.items():html=html.replace(token,value)
    assert not any(token in html for token in ['__CAMPUS_DATA__','__TITLE_FONT_URL__','__PREVIEW_IMAGE__','__FAVICON__','__APPLE_ICON__','__LOGO__','__VIEWER_SCRIPT__','__ROBOTS__','__RHINO_URL__'])
    return html
(assets/'viewer.bundle.js').write_text(bundle)
# This is generated binary model data, not configuration or credentials. Keep
# short physical lines without runtime concatenation or extra decode buffers.
# JavaScript removes each backslash-newline while parsing the string literal.
with (assets/'model-local.js').open('w') as local_model:
    local_model.write('// Generated lossless model data; source: assets/campus-model.bin.\n')
    local_model.write('window.__UMICH_MODEL_BASE64__="')
    for offset in range(0,len(encoded),32):
        if offset:local_model.write('\\\n')
        local_model.write(encoded[offset:offset+32])
    local_model.write('";\n')
html=edition(data,'assets/fonts/Manrope.ttf','output/campus_aerial.png',{'32':'assets/favicon-32.png','16':'assets/favicon-16.png','apple':'assets/apple-touch-icon.png'},'assets/brand/m-map-192.png','<script defer src="assets/viewer.bundle.js?v='+hashlib.sha256(bundle.encode()).hexdigest()[:12]+'"></script>','index, follow, max-image-preview:large','output/UMich_AnnArbor_Layered.3dm.xz')
(root/'index.html').write_text(html)
def png(path):return 'data:image/png;base64,'+base64.b64encode((assets/path).read_bytes()).decode()
inline_regions={item['id']:base64.b64encode((root/item['url']).read_bytes()).decode()for item in [data['regions']['base'],*data['regions']['tiles']]}
offline=edition({**data,'downloads':[{**i,'url':i['name']}for i in data['downloads']],'inlineRegions':inline_regions,'preview':'data:image/png;base64,'+preview},'data:font/ttf;base64,'+base64.b64encode((assets/'fonts/Manrope.ttf').read_bytes()).decode(),'data:image/png;base64,'+preview,{'32':png('favicon-32.png'),'16':png('favicon-16.png'),'apple':png('apple-touch-icon.png')},png('brand/m-map-192.png'),'<script>'+bundle.replace('</script',r'<\/script')+'</script>','noindex, follow','UMich_AnnArbor_Layered.3dm.xz')
(out/'UMich_Campus_Offline.html').write_text(offline)
(root/'CNAME').write_text(config['domain']+'\n')
(root/'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+site+'sitemap.xml\n')
(root/'sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+site+'</loc><lastmod>'+date.today().isoformat()+'</lastmod></url></urlset>\n')
print('Root index:',len(html.encode()),'bytes; offline single file:',len(offline.encode()),'bytes; buildings:',len(records),'places:',len(places))
