import {createOutdoorPicker,groundPoint,installCampusHover} from './outdoor_hover.js';
import {createViewportRenderLoop} from './viewport_rendering.js';
import {createTerrainLighting,applyTerrainLighting} from './terrain_lighting.js';
import {createTerrainMass,prepareLandscape,prepareBuildingRoofs,stabilizeBuildingMaterial,updateCampusDepthRange,setCampusClipping,updateCampusDetailDepth,stabilizeCampusShadows,fitCampusSun} from './surface_rendering.js';
import {groundHeight} from './ground_height.js';
import {installMapSelection} from './map_selection.js';
import {CampusMapControls,setRotationMode,frameCampusBox} from './campus_controls.js';
import {parseCampusModel,recoverCampusDownload,nextPaint} from './model_parser.js';
import {loadingIndicator} from './loading.js';
import * as THREE from 'three';
import {initialLanguage} from './locale.js';
import {loadModelBytes} from './model_data.js';
import {updateCampusZoomLimit} from './camera_limits.js';

const data=JSON.parse(document.getElementById('campus-data').textContent);
const $=id=>document.getElementById(id), records=data.records;
const en=Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el=>[el.dataset.i18n,el.textContent]));
Object.assign(en,{layers:'Building layers',mobileLayers:'Buildings',search:'Search building or ID',empty:'No matching buildings',exploreTitle:'Explore the campus',exploreSub:'Choose a building to see dimensions, geometry notes and sources.',intro:'Individual building layers, a separate landscape layer, and architectural highlights. The model combines official mapped footprints with labeled height estimates and USGS terrain.',published:'Published height',planning:'Planning drawing',estimated:'Estimated height',highest:'Model peak',area:'Mapped footprint',width:'East–west extent',depth:'North–south extent',focus:'Locate',isolate:'Isolate',clear:'Deselect',sourceHeight:'Height source',sourceMap:'Footprint source',precision:'Public map extents are approximate. Roof and facade details are simplified; no survey accuracy is claimed.',basisLabel:'Height basis: ',error:'Interactive rendering is unavailable. A static preview is shown. Use a WebGL 2 browser with graphics acceleration enabled. Dimensions and the 3DS download are still available.',static:'Static preview · WebGL unavailable',lost:'Graphics context interrupted. Reopen the HTML to restore the model.',hide:'Hide ',show:'Show ',status:'Meters · public-source exterior model',languageLabel:'Switch to Chinese',prevLabel:'Previous landmark',nextLabel:'Next landmark',cutLabel:'Height of horizontal slice',modelLabel:'Interactive University of Michigan campus model',searchLabel:'Search buildings',sidebarLabel:'Building layers and dimensions',tourLabel:'Choose a landmark',snapshotTitle:'UMich Campus 3D Model'});
const zh={title:'密西根大学 · 三维校区',subtitle:'安娜堡校区模型',offline:'离线可用',download:'下载 3DS',save:'保存视图',eyebrow:'安娜堡 · 校园空间图集',closeSidebar:'收起',visible:'显示建筑',unit:'模型单位',environment:'环境景观',details:'建筑外部细节',labels:'地标名称',shadows:'光照阴影',layers:'建筑图层',mobileLayers:'建筑',showAll:'全部显示',all:'全部',landmarks:'地标建筑',quads:'主庭院区',north:'北校区',south:'南部片区',east:'东部片区',medical:'医学中心',aerial:'校区鸟瞰',core:'中央校区',plan:'总平面图',reset:'重置',help:'操作与来源',tourTitle:'建筑漫游 · 校园地标',explore:'查看',cut:'水平剖切',stone:'石灰岩',glass:'玻璃',roads:'道路',plazas:'广场',green:'绿地',loading:'正在打开校园模型…',mouseHelp:'拖动旋转 · 滚轮缩放 · 右键平移',helpHeading:'在三维空间中探索校园',helpOrbit:'鼠标左键拖动旋转，滚轮缩放，右键拖动平移。触屏设备使用单指旋转，双指缩放或平移。',helpSelect:'点击模型或列表中的建筑，查看尺寸、形态说明和资料来源。可以逐栋隐藏，也可以单独查看。',helpTour:'通过建筑漫游查看地标，切换外部细节，或用水平剖切对比体块。剖切仅表示外部表面，不表示内部楼层或室内结构。',helpOffline:'模型、三维引擎和预览均内嵌在 HTML 中。无需网络或服务器，直接用浏览器打开即可。交互显示需要 WebGL 2。',helpAccuracy:'1 单位 = 1 米。平面采用带地理坐标的公开地图，部分地标高度来自学校或项目公开资料；其他高度、屋顶、立面开窗、树位和道路宽度为近似。地面依据 USGS 公开地形采样。这是独立制作的室外空间研究模型，不是学校官方 BIM 或实测模型。',helpLanguages:'设备语言偏好中有中文时首次打开默认中文，其余设备默认英文。浏览器存储可用时会记住手动选择。中文建筑名为便于识别的译名。',sources:'资料来源',officialMap:'学校官方地图',architecture:'学校建筑介绍',cityData:'USGS 公开地形',snapshot:'公开资料快照 · 2026年10月12日',close:'关闭',search:'搜索建筑名称或编号',empty:'没有匹配的建筑',exploreTitle:'探索校园空间',exploreSub:'选择建筑，查看尺寸、形态说明与来源。',intro:'建筑逐栋分层，室外环境单独成层，包含校园地标。模型采用公开地图轮廓、公开资料所载高度及明确标注的估算尺寸。',published:'公开资料所载高度',planning:'规划图尺寸',estimated:'高度估算',highest:'建筑最高点',area:'平面占地面积',width:'东西向范围',depth:'南北向范围',focus:'定位建筑',isolate:'单独查看',clear:'取消选择',sourceHeight:'高度来源',sourceMap:'平面来源',precision:'平面轮廓取自公开地图，屋顶及立面细节为简化表达；尺寸未经过实测校核。',basisLabel:'高度依据：',error:'当前浏览器无法启动交互显示，已显示静态预览。请使用支持 WebGL 2 的浏览器并启用图形加速。尺寸查询与 3DS 下载仍可使用。',static:'静态预览 · WebGL 未启用',lost:'三维显示暂时中断，重新打开 HTML 可恢复模型。',hide:'隐藏 ',show:'显示 ',status:'单位：米 · 公开资料室外模型',languageLabel:'Switch to English',prevLabel:'上一个地标',nextLabel:'下一个地标',cutLabel:'水平剖切高度',modelLabel:'可旋转与缩放的密西根大学校园模型',searchLabel:'搜索建筑',sidebarLabel:'建筑图层与尺寸信息',tourLabel:'选择校园地标',snapshotTitle:'密西根大学 · 三维校区'};


Object.assign(en,{central:'Central campus',athletic:'Athletic campus',core:'Central',north:'North',medical:'Medical',municipal:'Historical city estimate',cityData:'USGS terrain',architecture:'University campus tour',cut:'Elevation slice',intro:`${records.length} mapped building layers, one environment layer and ${records.filter(r=>r.landmark).length} architectural highlights across the four Ann Arbor sectors.`,helpAccuracy:'1 unit = 1 meter. Building footprints, outdoor surfaces and tree positions follow the university public GIS. Selected heights follow published sources or the city’s historical estimates; other heights and exterior details are estimates. Ground follows USGS 3DEP terrain sampled at about 18 m, with simplified building pads. Model Z = 0 corresponds to 225 m in the DEM datum; the elevation slice uses that local datum. This is an independent exterior study model, not an official BIM or a certified survey.',helpLanguages:'English is the default; a preferred Chinese device language opens the model in Chinese. Manual choices are remembered when browser storage is available. Chinese proper names are independent translations; original English names remain visible in building details.'});
Object.assign(zh,{central:'中央校区',architecture:'学校校园导览',athletic:'体育区',municipal:'市级历史估算',cut:'高程剖切',cutLabel:'高程剖切高度',intro:`${records.length}栋映射建筑逐栋分层，室外环境单独成层，包含${records.filter(r=>r.landmark).length}处建筑地标，覆盖安娜堡四个主要片区。`,helpAccuracy:'1单位＝1米。建筑轮廓、室外地表与树位取自学校公开GIS。部分高度采用公开资料或市级历史估算，其余高度与外部细节为估算。地面依据约18米采样间距的USGS 3DEP地形，建筑基座局部平整化。模型Z＝0对应DEM基准中的225米，高程剖切按此局部基准计。这是独立制作的室外空间研究模型，未经过实测校核，非学校官方BIM。',helpLanguages:'设备语言偏好中有中文时，首次打开默认中文；其余设备默认英文。浏览器存储可用时会记住手动选择。中文建筑名称为独立译名，专名保持原义，详情同时保留英文名称以便对照官方地图。'});

if(!data.model){en.helpOffline='Double-click index.html with its assets and output folders beside it, or open the single-file offline HTML in the output folder. No server is needed for local viewing. WebGL 2 is required for interaction.';zh.helpOffline='保留 assets 和 output 文件夹，直接双击 index.html；也可打开 output 中的单文件离线 HTML。无需本地服务器，交互显示需要 WebGL 2。';}

Object.assign(en,{rotationMode:'Rotate',load_local:'Reading local model',load_read:'Downloading model',load_decode:'Decoding model data',load_unpack:'Unpacking model',load_parse:'Reading geometry',load_scene:'Preparing buildings and landscape',load_render:'Drawing first view',load_ready:'Ready',load_total:'Overall',helpOrbit:'Drag with the left mouse button to pan; right-drag to rotate. Scroll to zoom at the pointer. On touch screens, one finger pans and two fingers pan or pinch to zoom. Enable Rotate for one-finger rotation. Arrow keys pan and +/− zoom when the model is focused.',mouseHelp:'Drag to pan · Right-drag to rotate · Scroll to zoom'});
Object.assign(zh,{rotationMode:'旋转',load_local:'读取本地模型',load_read:'下载模型数据',load_decode:'解码模型数据',load_unpack:'解压模型数据',load_parse:'解析建筑几何',load_scene:'准备建筑与景观',load_render:'绘制首个视图',load_ready:'加载完成',load_total:'总体',helpOrbit:'鼠标左键拖动平移，右键拖动旋转，滚轮以指针所在位置缩放。触屏单指平移，双指平移或捏合缩放；开启“旋转”后可单指旋转。模型获得焦点时，方向键平移，＋／－缩放。',mouseHelp:'拖动平移 · 右键旋转 · 滚轮缩放'});
let stored=null;try{stored=localStorage.getItem('umich-model-language');}catch{}
let lang=initialLanguage([],stored);
const t=key=>(lang==='zh'?zh[key]:en[key])||en[key]||key;
const loadingView=loadingIndicator($('load-progress'),$('load-status'),t);
const reportLoad=event=>loadingView.update(event);
$('download-image').disabled=true;$('download-3ds').disabled=Boolean(data.model);
const nameOf=r=>lang==='zh'?(r.name_zh||r.name):r.name;
const brief=r=>lang==='zh'?(r.short_zh||r.name_zh||r.name):(r.short||r.name);
const byLayer=new Map(records.map(r=>[r.layer,r]));const byCode=new Map(records.map(r=>[r.code,r]));
const buildings=new Map(), envMeshes=[], pickMeshes=[], details=[];
let selected=null,category='all',renderer=null,scene,camera,controls,campus,sun,campusDiagonal=1,modelReady=false,pendingFocus=null,renderBounds=null,depthBits=24,frameHeight=1500,viewMode='aerial',staticMode=false;
const sidebar=$('sidebar'),host=$('viewport'),compact=matchMedia('(max-width:760px)');
const tour=data.landmarkOrder.map(id=>records.find(r=>r.facility_id===id)).filter(Boolean);let tourIndex=0;
const placeNodes=new Map();
for(const p of data.places){const el=document.createElement("div");el.className="map-label place-label";$("map-labels").append(el);placeNodes.set(p.id,{el,p});}
const labelNodes=new Map();
for(const r of records.filter(r=>r.landmark)){const el=document.createElement('div');el.className='map-label';$('map-labels').append(el);labelNodes.set(r.code,el);}
function syncSidebar(){sidebar.classList.toggle('closed',compact.matches);$('toggle-sidebar').setAttribute('aria-expanded',String(!sidebar.classList.contains('closed')));}
syncSidebar();compact.addEventListener('change',syncSidebar);
$('toggle-sidebar').onclick=()=>{sidebar.classList.toggle('closed');$('toggle-sidebar').setAttribute('aria-expanded',String(!sidebar.classList.contains('closed')));};
$('close-sidebar').onclick=()=>{sidebar.classList.add('closed');$('toggle-sidebar').setAttribute('aria-expanded','false');};
$('open-help').onclick=()=>$('help-dialog').showModal();$('close-help').onclick=()=>$('help-dialog').close();
$('help-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const b=e.target.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)e.target.close();}});
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
let bytes=null;
$('download-3ds').onclick=async()=>{if(!data.model){const a=document.createElement('a');a.href=data.downloadUrl;a.download='UMich_AnnArbor.3ds';a.click();return;}const button=$('download-3ds');button.disabled=true;try{const input=await loadModelBytes(data);download(await recoverCampusDownload(input,data),'UMich_AnnArbor.3ds');}catch(error){console.error(error);$('status-text').textContent=lang==='zh'?'模型下载失败，请重试':'Model download failed. Please try again.';}finally{button.disabled=false;}};
$('download-image').onclick=()=>{if(!renderer||!modelReady)return;viewportLoop.drawNow();renderer.domElement.toBlob(b=>{if(b)download(b,'UMich_AnnArbor_view.png');});};
function listRecords(){const q=$('search').value.trim().toLowerCase();return records.filter(r=>(category==='all'||(category==='landmark'?r.landmark:r.zone===category))&&(!q||[r.name,r.name_zh,r.code,r.short,r.short_zh,...(r.aliases_zh||[])].some(s=>s?.toLowerCase().includes(q))));}
function refreshList(){
 const list=$('building-list');list.replaceChildren();const shown=listRecords();
 if(!shown.length){const el=document.createElement('p');el.className='empty';el.textContent=t('empty');list.append(el);}
 for(const r of shown){
  const row=document.createElement('div');row.className='row'+(selected===r.code?' selected':'');row.dataset.code=r.code;
  const cb=document.createElement('input');cb.type='checkbox';cb.disabled=!modelReady;cb.checked=buildings.get(r.code)?.visible??true;cb.setAttribute('aria-label',t('show')+nameOf(r));cb.onchange=()=>setVisible(r.code,cb.checked);
  const btn=document.createElement('button');btn.className='building-button';btn.title=r.name;
  const nm=document.createElement('span');nm.className='building-name';nm.textContent=nameOf(r);
  const meta=document.createElement('span');meta.className='building-meta';meta.textContent=r.code+' · '+t(r.zone)+(r.landmark?'  ◆':'');
  btn.append(nm,meta);btn.onclick=()=>selectBuilding(r.code,true);row.append(cb,btn);list.append(row);
 }
 updateCount();
}
function updateCount(){const n=buildings.size?[...buildings.values()].filter(g=>g.visible).length:records.length;$('visible-count').innerHTML=n+'<small>/ '+records.length+'</small>';if(staticMode)$('status-text').textContent=t('static');else $('status-text').textContent=t('status');}
function setVisible(code,value){const g=buildings.get(code);if(g)g.visible=value;if(!value&&code===selected)selectBuilding(null);updateCount();render();}
$('search').oninput=refreshList;
for(const b of document.querySelectorAll('[data-category]'))b.onclick=()=>{category=b.dataset.category;for(const bb of document.querySelectorAll('[data-category]')){bb.classList.toggle('active',bb===b);bb.setAttribute('aria-pressed',String(bb===b));}refreshList();};
$('show-all').onclick=()=>{for(const g of buildings.values())g.visible=true;$('environment').checked=true;envMeshes.forEach(m=>m.visible=true);refreshList();render();};
$('environment').onchange=()=>{envMeshes.forEach(m=>m.visible=$('environment').checked);render();};
$('details').onchange=()=>{details.forEach(m=>m.visible=$('details').checked);render();};
$('labels').onchange=render;
$('shadows').onchange=()=>{if(renderer){renderer.shadowMap.enabled=$('shadows').checked;sun.castShadow=$('shadows').checked;scene.traverse(o=>{if(o.isMesh)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.needsUpdate=true);});render();}};
const clipPlane=new THREE.Plane(new THREE.Vector3(0,0,-1),65);
function updateCut(){const on=$('cut-enabled').checked,h=Number($('cut-height').value);$('cut-height').disabled=!on;$('cut-value').textContent=h+' m';clipPlane.constant=h;if(renderer){setCampusClipping(renderer,campus,on?clipPlane:null);render();}}
$('cut-enabled').onchange=updateCut;$('cut-height').oninput=updateCut;
function emptyDetail(){const p=$('detail');p.replaceChildren();for(const [key,cls] of [['exploreTitle','detail-title'],['exploreSub','detail-sub'],['intro','detail-note']]){const el=document.createElement('div');el.className=cls;el.textContent=t(key);p.append(el);}}
function refreshDetail(){
 if(!selected){emptyDetail();return;}const r=byCode.get(selected),p=$('detail');p.replaceChildren();
 const title=document.createElement('div');title.className='detail-title';title.textContent=nameOf(r);
 const sub=document.createElement('div');sub.className='detail-sub';const badge=document.createElement('span');badge.className='badge '+r.height_status;badge.textContent=t(r.height_status);sub.append(badge,document.createTextNode(r.code+' · '+t(r.zone)));if(lang==='zh'){const original=document.createElement('div');original.textContent=r.name;sub.append(original);}
 const dl=document.createElement('dl');dl.className='dimensions';
 for(const [key,value] of [['highest',r.height.toFixed(2)+' m'],['area',Math.round(r.area).toLocaleString(lang==='zh'?'zh-CN':'en-US')+' m²'],['width',r.width.toFixed(1)+' m'],['depth',r.depth.toFixed(1)+' m']]){const cell=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=t(key);dd.textContent=value;cell.append(dt,dd);dl.append(cell);}
 const actions=document.createElement('div');actions.className='detail-actions';
 for(const [key,fn] of [['focus',()=>focusBuilding(r.code)],['isolate',()=>{for(const[c,g]of buildings)g.visible=c===r.code;refreshList();focusBuilding(r.code);}],['clear',()=>selectBuilding(null)]]){const b=document.createElement('button');b.textContent=t(key);b.disabled=!modelReady&&key!=='clear';b.onclick=fn;actions.append(b);}
 const note=document.createElement('p');note.className='detail-note';note.textContent=lang==='zh'?r.partition:r.partition_en;
 const basis=document.createElement('p');basis.className='detail-note';basis.textContent=t('basisLabel')+(lang==='zh'?r.basis:r.basis_en);
 const prec=document.createElement('p');prec.className='detail-note';prec.textContent=t('precision');
 const links=document.createElement('p');links.className='detail-note';
 for(const[key,url]of [['sourceHeight',r.source],['sourceMap',r.footprint_source]]){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent=t(key);links.append(a,document.createTextNode(' · '));}
 p.append(title,sub,dl,actions,note,basis,prec,links);
}
function selectBuilding(code,focus=false){
 selected=code;for(const[c,g]of buildings)g.traverse(m=>{if(m.isMesh)(Array.isArray(m.material)?m.material:[m.material]).forEach(mat=>{mat.emissive.set(c===code?0x987200:0);mat.emissiveIntensity=c===code?.22:0;});});
 if(code){const g=buildings.get(code);if(g)g.visible=true;const idx=tour.findIndex(r=>r.code===code);if(idx>=0){tourIndex=idx;refreshTour();}}
 refreshDetail();refreshList();if(focus)focusBuilding(code);render();
}
function refreshTour(){const s=$('tour-select');s.replaceChildren();for(const r of tour){const op=document.createElement('option');op.value=r.code;op.textContent=brief(r);s.append(op);}s.value=tour[tourIndex]?.code||'';$('tour-step').textContent=(tourIndex+1)+' / '+tour.length;}
function stepTour(delta){tourIndex=(tourIndex+delta+tour.length)%tour.length;refreshTour();selectBuilding(tour[tourIndex].code,true);}
$('tour-prev').onclick=()=>stepTour(-1);$('tour-next').onclick=()=>stepTour(1);$('tour-go').onclick=()=>selectBuilding(tour[tourIndex].code,true);$('tour-select').onchange=e=>{tourIndex=tour.findIndex(r=>r.code===e.target.value);refreshTour();selectBuilding(tour[tourIndex].code,true);};
function applyLanguage(){
 document.documentElement.lang=lang==='zh'?'zh-CN':'en';
 const seo=data.seo[lang];document.title=seo.title;
 for(const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]'])document.querySelector(selector).content=seo.description;
 for(const selector of ['meta[property="og:title"]','meta[name="twitter:title"]'])document.querySelector(selector).content=seo.title;
 document.querySelector('meta[property="og:locale"]').content=lang==='zh'?'zh_CN':'en_US';
 document.querySelector('meta[property="og:locale:alternate"]').content=lang==='zh'?'en_US':'zh_CN';
 for(const selector of ['meta[property="og:image:alt"]','meta[name="twitter:image:alt"]'])document.querySelector(selector).content=seo.imageAlt;
 for(const el of document.querySelectorAll('[data-preview-alt]'))el.alt=seo.imageAlt;
 const schema=JSON.parse($('campus-schema').textContent);
 for(const node of schema['@graph']){if(node['@type']==='WebPage'){node.name=seo.title;node.description=seo.description;}}
 $('campus-schema').textContent=JSON.stringify(schema);
 for(const el of document.querySelectorAll('[data-i18n]'))el.textContent=t(el.dataset.i18n);
 $('language').textContent=lang==='zh'?'English':'中文';$('language').setAttribute('aria-label',t('languageLabel'));
 $('search').placeholder=t('search');$('search').setAttribute('aria-label',t('searchLabel'));sidebar.setAttribute('aria-label',t('sidebarLabel'));
 $('tour-select').setAttribute('aria-label',t('tourLabel'));$('tour-prev').setAttribute('aria-label',t('prevLabel'));$('tour-next').setAttribute('aria-label',t('nextLabel'));$('cut-height').setAttribute('aria-label',t('cutLabel'));
 if(renderer)renderer.domElement.setAttribute('aria-label',t('modelLabel'));
 for(const[r,el]of labelNodes)el.textContent=brief(byCode.get(r));
 const err=$('render-error');if(err)err.textContent=t('error');refreshTour();refreshList();refreshDetail();loadingView.refresh();render();
}
$('language').onclick=()=>{$('hover-tip').style.display='none';lang=lang==='en'?'zh':'en';try{localStorage.setItem('umich-model-language',lang);}catch{}applyLanguage();};
function aspect(){return Math.max(host.clientWidth,1)/Math.max(host.clientHeight,1);}
function updateFrustum(){if(!camera)return;const a=aspect();camera.left=-frameHeight*a/2;camera.right=frameHeight*a/2;camera.top=frameHeight/2;camera.bottom=-frameHeight/2;camera.updateProjectionMatrix();if(controls){controls.syncViewOffset();updateCampusZoomLimit(camera,controls,campusDiagonal);}}
function fitBox(b,mode='aerial',pad=1.16,focus=false,direction,minimumHeight=50){
 if(!camera)return;frameHeight=frameCampusBox(camera,controls,b,{aspect:aspect(),mode,pad,direction,minimumHeight,distance:Math.max(3000,campusDiagonal*1.5),pivotHeight:focus?undefined:groundHeight(data,(b.min.x+b.max.x)/2,(b.min.y+b.max.y)/2)});updateFrustum();render();
}
function setViewButtons(){for(const key of ['aerial','core','north-view','medical-view','athletic-view','plan']){$(key).classList.toggle('active',viewMode===key);$(key).setAttribute('aria-pressed',String(viewMode===key));}}
function syncRotationButton(){const b=$('rotation-mode');b.classList.toggle('active',Boolean(controls?.rotationMode));b.setAttribute('aria-pressed',String(Boolean(controls?.rotationMode)));}
function resetInteraction(){if(controls)setRotationMode(controls,false);syncRotationButton();}
$('rotation-mode').onclick=()=>{if(controls)setRotationMode(controls,!controls.rotationMode);syncRotationButton();};
function fullView(mode){
 if(mode==='plan')resetInteraction();viewMode=mode;setViewButtons();if(!campus)return;
 const overview=mode==='aerial',zone={core:'central','north-view':'north','medical-view':'medical','athletic-view':'athletic'}[mode];
 const bounds=data.districtBounds[overview?'central':zone];
 const b=bounds?new THREE.Box3(new THREE.Vector3(bounds[0],bounds[1],0),new THREE.Vector3(bounds[2],bounds[3],150)):new THREE.Box3().setFromObject(campus);
 // Keep the reference bearing and scale, centered on the mapped Diag plaza.
 if(overview){const center=b.getCenter(new THREE.Vector3()),[x,y]=data.overviewCenter;b.translate(new THREE.Vector3(x-center.x,y-center.y,0));}
 fitBox(b,mode==='plan'?'plan':'aerial',overview?1.3:1.16,false,overview?new THREE.Vector3(-1.15,-.95,1.2):undefined,overview?2500:50);
}
function focusBuilding(code){if(!modelReady){pendingFocus=code;return;}const g=buildings.get(code);if(!g||!camera)return;g.visible=true;g.updateWorldMatrix(true,true);viewMode='focus';setViewButtons();fitBox(new THREE.Box3().setFromObject(g),'aerial',1.55,true);}
for(const id of ['north-view','medical-view','athletic-view'])$(id).onclick=()=>fullView(id);
$('aerial').onclick=()=>fullView('aerial');$('plan').onclick=()=>fullView('plan');$('core').onclick=()=>fullView('core');$('reset-view').onclick=()=>{resetInteraction();selectBuilding(null);$('cut-enabled').checked=false;updateCut();fullView('aerial');};
function updateLabels(){
 if(!camera)return;
 for(const {el,p} of placeNodes.values()){el.textContent=lang==='zh'?p.name_zh:p.name;el.style.display='none';if(!$('labels').checked)continue;const pos=new THREE.Vector3(...p.position).project(camera);if(Math.abs(pos.x)>.85||Math.abs(pos.y)>.8)continue;el.style.left=(pos.x+1)/2*host.clientWidth+'px';el.style.top=(1-pos.y)/2*host.clientHeight+'px';el.style.display='block';}const boxes=[];const picked=[...labelNodes].sort(([aa],[bb])=>(aa===selected?-1:bb===selected?1:0));
 for(const[code,el]of picked){const r=byCode.get(code),g=buildings.get(code);el.style.display='none';if(!$('labels').checked||!g?.visible)continue;
  if($('cut-enabled').checked&&r.peak_m>Number($('cut-height').value))continue;
  const p=new THREE.Vector3(r.center[0],r.center[1],r.peak_m+3).project(camera);if(Math.abs(p.x)>.92||Math.abs(p.y)>.9||Math.abs(p.z)>1)continue;
  const xx=(p.x+1)/2*host.clientWidth,yy=(1-p.y)/2*host.clientHeight;
  if(yy<65||yy>host.clientHeight-150||(xx>host.clientWidth-255&&yy<210))continue;
  const ww=el.textContent.length*(lang==='zh'?8:5)+18,hh=23;const b=[xx-ww/2,yy-hh,xx+ww/2,yy];
  if(code!==selected&&boxes.some(a=>!(a[2]+12<b[0]||b[2]+12<a[0]||a[3]+10<b[1]||b[3]+10<a[1])))continue;
  if(code!==selected&&boxes.length>9)continue;boxes.push(b);el.style.left=xx+'px';el.style.top=yy+'px';el.style.display='block';el.classList.toggle('selected',code===selected);
 }
}
let viewportLoop=null;
function render(updateShadows=true){if(renderer&&updateShadows!==false)renderer.shadowMap.needsUpdate=true;if(!renderer||!modelReady)return;viewportLoop?.request();}
function drawScene(){
 if(!renderer||!modelReady)return;updateCampusDepthRange(camera,renderBounds);updateCampusDetailDepth(camera,campus,depthBits);renderer.render(scene,camera);const n=new THREE.Vector3(0,1,0).transformDirection(camera.matrixWorldInverse);$('north-arrow').style.transform='rotate('+Math.atan2(n.x,n.y)+'rad)';
 const mpp=(camera.right-camera.left)/camera.zoom/Math.max(host.clientWidth,1),raw=mpp*80,pow=10**Math.floor(Math.log10(raw));const length=[1,2,5,10].map(x=>x*pow).find(x=>x>=raw)||10*pow;
 $('scale-line').style.width=(length/mpp)+'px';$('scale-text').textContent=length<1?Math.round(length*100)+' cm':length+' m';updateLabels();
}
applyLanguage();
async function initializeModel(){
try{
 bytes=await loadModelBytes(data,{},reportLoad);
 THREE.Object3D.DEFAULT_UP.set(0,0,1);renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));renderer.setClearColor(0xe9ece3);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;depthBits=renderer.getContext().getParameter(renderer.getContext().DEPTH_BITS)||24;
 renderer.domElement.setAttribute('aria-label',t('modelLabel'));renderer.domElement.tabIndex=0;$('canvas-host').append(renderer.domElement);
 scene=new THREE.Scene();camera=new THREE.OrthographicCamera(-1000,1000,1000,-1000,.1,100000);camera.up.set(0,0,1);scene.add(new THREE.HemisphereLight(0xffffff,0x849177,2.0));
 sun=new THREE.DirectionalLight(0xffffff,2.2);const siteCenter=new THREE.Vector3(...data.siteCenter,50);sun.position.copy(siteCenter).add(new THREE.Vector3(-4000,-6000,9000));sun.target.position.copy(siteCenter);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-6500;sun.shadow.camera.right=6500;sun.shadow.camera.top=6500;sun.shadow.camera.bottom=-6500;sun.shadow.camera.near=1;sun.shadow.camera.far=30000;sun.shadow.bias=-.00015;sun.shadow.normalBias=.35;scene.add(sun,sun.target);
 const terrainBase=Math.min(-30,...(data.groundGrid?.heights||[]).flat().map(z=>z-30));
 const input=bytes;bytes=null;campus=await parseCampusModel(input,reportLoad,data);const meshes=[];campus.traverse(o=>{if(o.isMesh)meshes.push(o);});
 const terrainMass=createTerrainMass(meshes,terrainBase);
 const terrainLighting=createTerrainLighting(data.groundGrid);let prepared=0,lastPrepared=performance.now();
 for(const m of meshes){
  const old=Array.isArray(m.material)?m.material:[m.material];const materials=old.map(mm=>{const mat=mm.clone();const co=data.palette[mat.name];if(co)mat.color.setRGB(co[0]/255,co[1]/255,co[2]/255,THREE.SRGBColorSpace);mat.shininess=mat.name==='Glass'?25:0;mat.specular.set(mat.name==='Glass'?0x222222:0);mat.flatShading=true;mat.emissiveIntensity=0;stabilizeBuildingMaterial(mat,m.name.includes('D'));stabilizeCampusShadows(mat);return mat;});
  m.material=Array.isArray(m.material)?materials:materials[0];m.receiveShadow=true;
  const r=byLayer.get(data.layers[m.name]?.layer);
  if(r){let g=buildings.get(r.code);if(!g){g=new THREE.Group();g.name=r.code;buildings.set(r.code,g);campus.add(g);}const center=new THREE.Box3().setFromObject(m).getCenter(new THREE.Vector3());for(const part of prepareBuildingRoofs(m,groundHeight(data,center.x,center.y),m.name.includes('D'),false)){g.attach(part);part.castShadow=true;part.userData.code=r.code;pickMeshes.push(part);if(part.name.includes('D'))details.push(part);}}
  else{m.castShadow=materials.some(mat=>['Leaves','Trunk','Furniture'].includes(mat.name));const parts=prepareLandscape(m,terrainMass);for(const part of parts)if(part.renderOrder<0)applyTerrainLighting(part.material,terrainLighting);envMeshes.push(...parts);}
  prepared++;if(performance.now()-lastPrepared>8){reportLoad({phase:'scene',loaded:meshes.length+prepared,total:meshes.length*2});await nextPaint();lastPrepared=performance.now();}
 }
 reportLoad({phase:'scene',loaded:1,total:1});
 scene.add(campus);renderBounds=new THREE.Box3().setFromObject(campus);fitCampusSun(sun,renderBounds);renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;campusDiagonal=new THREE.Box3().setFromObject(campus).getSize(new THREE.Vector3()).length();envMeshes.forEach(m=>m.visible=$('environment').checked);details.forEach(m=>m.visible=$('details').checked);renderer.shadowMap.enabled=$('shadows').checked;sun.castShadow=$('shadows').checked;updateCut();controls=new CampusMapControls(camera,renderer.domElement);controls.groundHeight=(x,y)=>groundHeight(data,x,y);controls.addEventListener('change',()=>render(false));controls.listenToKeyEvents(renderer.domElement);syncRotationButton();
 renderer.domElement.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey)return;if(['+','=','-','_'].includes(e.key)){e.preventDefault();if(e.key==='+'||e.key==='=')controls.dollyIn(.9);else controls.dollyOut(.9);}if(!e.repeat&&e.key.toLowerCase()==='r'){$('rotation-mode').click();}});
 viewportLoop=createViewportRenderLoop({host,renderer,resize:ratio=>{frameHeight*=ratio;updateFrustum();},draw:drawScene});
 const observer=new ResizeObserver(()=>{if(viewportLoop.needsResize())render(false);});observer.observe(host);
 reportLoad({phase:'render',loaded:0,total:1});await nextPaint();modelReady=true;
 fullView('aerial');if(selected)selectBuilding(selected,Boolean(pendingFocus));pendingFocus=null;refreshList();
 const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
 function pick(e){const b=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1);ray.setFromCamera(pointer,camera);return ray.intersectObjects(pickMeshes.filter(m=>m.visible&&m.parent.visible),false).find(h=>!$('cut-enabled').checked||h.point.z<=clipPlane.constant)?.object.userData.code||null;}
 installMapSelection(renderer.domElement,e=>selectBuilding(pick(e)));
 const outdoorPicker=createOutdoorPicker(data.hoverPlaces||data.places||[]);
 installCampusHover(renderer.domElement,{resolve:e=>{
  const code=pick(e);if(code){const r=byCode.get(code);return {text:nameOf(r)+' · '+r.height.toFixed(2)+' m',building:true};}
  if(!$('environment').checked)return null;
  const p=groundPoint(ray.ray,(x,y)=>groundHeight(data,x,y),controls.target.z,Math.max(5000,campusDiagonal*8));
  if(!p||($('cut-enabled').checked&&p.z>clipPlane.constant))return null;
  const place=outdoorPicker(p.x,p.y);return place?{text:nameOf(place),building:false}:null;
 },show:(value,e)=>{const tip=$('hover-tip');tip.textContent=value.text;tip.style.display='block';const b=host.getBoundingClientRect();tip.style.left=Math.min(e.clientX-b.left+14,host.clientWidth-tip.offsetWidth-10)+'px';tip.style.top=Math.min(e.clientY-b.top+14,host.clientHeight-tip.offsetHeight-38)+'px';renderer.domElement.style.cursor=value.building?'pointer':'grab';},hide:()=>{$('hover-tip').style.display='none';renderer.domElement.style.cursor='grab';}});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();$('status-text').textContent=t('lost');});
 reportLoad({phase:'ready',loaded:1,total:1});await nextPaint();$('download-image').disabled=false;$('download-3ds').disabled=false;$('loading').remove();
}catch(err){console.error(err);$('download-3ds').disabled=false;modelReady=false;if(controls)controls.dispose();if(renderer)renderer.dispose();renderer=null;staticMode=true;$('canvas-host').replaceChildren();$('fallback').src=data.preview;$('fallback').style.display='block';$('loading').remove();const note=document.createElement('div');note.className='error-message';note.id='render-error';note.textContent=t('error');host.append(note);$('download-image').disabled=true;updateCount();}

}
initializeModel();
