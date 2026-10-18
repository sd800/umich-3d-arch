/** Physical openings and supported volumes in the final exported 3DS layers. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {BufferGeometry,Float32BufferAttribute,Mesh,MeshBasicMaterial,DoubleSide,Raycaster,Vector3} from 'three';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(fs.readFileSync(new URL(p,root),'utf8'));
const audit=read('sources/highlight_architecture_audit.json'),records=read('output/viewer_records.json').filter(r=>r.landmark),layers=read('output/layer_map.json');
assert.equal(records.length,audit.building_highlight_count);assert.equal(new Set(audit.audit.map(r=>r.code)).size,records.length);
const selected=new Set(audit.audit.filter(r=>r.decision.startsWith('reconstructed')).map(r=>r.code));
const byLayer=new Map(records.map(r=>[r.layer,r]));const groups=new Map(records.map(r=>[r.code,[]]));
const native=fs.readdirSync(new URL('output/',root)).find(p=>p.endsWith('.3ds')),bytes=fs.readFileSync(new URL('output/'+native,root));
function parse(a,z,meta){for(let at=a;at<z;){const tag=bytes.readUInt16LE(at),n=bytes.readUInt32LE(at+2),end=at+n;assert(n>=6&&end<=z);
 if(tag===0x4d4d||tag===0x3d3d)parse(at+6,end);
 if(tag===0x4000){const stop=bytes.indexOf(0,at+6),name=bytes.toString('ascii',at+6,stop),info=layers[name];if(byLayer.has(info?.layer))parse(stop+1,end,{name,...info});}
 if(tag===0x4100&&meta){let v,f;for(let k=at+6;k<end;){const t=bytes.readUInt16LE(k),s=bytes.readUInt32LE(k+2);if(t===0x4110){const count=bytes.readUInt16LE(k+6);v=new Float32Array(count*3);for(let i=0;i<v.length;i++)v[i]=bytes.readFloatLE(k+8+i*4);}if(t===0x4120){const count=bytes.readUInt16LE(k+6);f=[];for(let i=0;i<count;i++)f.push(bytes.readUInt16LE(k+8+i*8),bytes.readUInt16LE(k+10+i*8),bytes.readUInt16LE(k+12+i*8));}k+=s;}assert(v.every(Number.isFinite));assert(f.every(i=>i<v.length/3));const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(v,3));geometry.setIndex(f);const mesh=new Mesh(geometry,new MeshBasicMaterial({name:meta.material,side:DoubleSide}));mesh.updateMatrixWorld(true);groups.get(byLayer.get(meta.layer).code).push(mesh);}
 at=end;}}
parse(0,bytes.length);const checks=[];
const r=id=>records.find(r=>String(r.facility_id??r.osm_id)===String(id));
const group=(id,material)=>groups.get(r(id).code).filter(m=>!material||m.material.name===material);
function ray(id,origin,direction,far=10000,material){return new Raycaster(new Vector3(...origin),new Vector3(...direction).normalize(),0,far).intersectObjects(group(id,material),false);}
for(const row of audit.audit){const meshes=groups.get(row.code);assert(meshes?.length,row.name+' has no exported detail');if(selected.has(row.code)){let count=0;for(const mesh of meshes)count+=mesh.geometry.index.count/3;assert(count>100,row.name+' is missing its exterior assemblies');}}
function check(condition,label){assert(condition,label);checks.push(label);}
const pkg=read('package.json').name;
if(pkg==='umich-ann-arbor-model'){
 const tower=r('1000155'),[cx,cy]=tower.center,z=tower.ground_m,w=Math.min(tower.width,tower.depth);
 for(const n of [[1,0],[-1,0],[0,1],[0,-1]]){const t=[-n[1],n[0]];
  const probe=(offset,zz)=>ray('1000155',[cx+n[0]*(w/2+1)+t[0]*offset,cy+n[1]*(w/2+1)+t[1]*offset,z+zz],[-n[0],-n[1],0],2.3,'Limestone');
  for(let j=0;j<5;j++)check(probe(-w*.34+j*w*.17,40).length===0,'Burton true bell aperture '+n+' bay '+j);
  check(probe(0,25).length>0,'Burton closed shaft '+n);
  check(probe(w*.085,40).length>0,'Burton solid pier between apertures '+n);
 }
 const obs=r('1000198');const dome=ray('1000198',[557.4,600.8,obs.ground_m+30],[0,0,-1])[0];check(dome&&dome.point.z>obs.ground_m+11,'Detroit hemispherical dome rises above the historic block');
 const add=ray('1000198',[557,585,obs.ground_m+30],[0,0,-1])[0];check(!add||add.point.z<obs.ground_m+5,'Detroit visitor addition remains below historic dome');
}
if(pkg==='ucsb-campus-model'){
 const henley=r('218'),z=henley.ground_m;const atrium=ray('218',[304,386.5,z+40],[0,0,-1])[0];check(!atrium||atrium.point.z<z+1,'Henley oval atrium is open to the sky');
 const rim=ray('218',[312,386.5,z+40],[0,0,-1])[0];check(rim&&rim.point.z>z+10,'Henley atrium has an enclosing upper roof');
 const hssb=r('282');check(ray('282',[-239,25,hssb.ground_m+1.7],[1,0,0],8.5).length===0,'HSSB ground arcade stays physically open');check(ray('282',[-239,25,hssb.ground_m+6],[1,0,0],8.5).length>0,'HSSB upper wing spans its ground arcade');
}
if(pkg==='uchicago-hydepark-model'){
 const mit=r(1228219576),[cx,cy]=mit.center;
 for(const n of [[1,0],[0,1]])check(ray(1228219576,[cx-n[0]*12,cy-n[1]*12,2],[n[0],n[1],0],24).length===0,'Mitchell open cross passage '+n);
 check(ray(1228219576,[cx,cy,40],[0,0,-1])[0].point.z>35,'Mitchell upper tower spans open passage');
 const robie=group(125667497,'Brick'),peaks=robie.flatMap(m=>{const a=m.geometry.attributes.position.array;return Array.from(a).filter((_,i)=>i%3===2)});check(Math.max(...peaks)>10.5&&Math.max(...peaks)<11,'Robie central chimney rises over low horizontal wings');
 const ratner=group(152586235,'WhitePanel');let top=0;for(const m of ratner){m.geometry.computeBoundingBox();top=Math.max(top,m.geometry.boundingBox.max.z);}check(Math.abs(top-30.48)<.1,'Ratner paired mast crowns reach the published 100-foot height');
}
if(pkg==='uw-seattle-model'){
 const denny=r('DEN');const copper=group('DEN','RoofPatina');check(copper.length>0,'Denny uses a copper-patina cupola');let peak=0;for(const mesh of copper){mesh.geometry.computeBoundingBox();peak=Math.max(peak,mesh.geometry.boundingBox.max.z);}check(Math.abs(peak-denny.ground_m-26.18)<.05,'Denny lantern caps the supported copper dome');
 for(const id of ['SAV','RAI','SMI','GWN']){check(group(id,'RoofMembrane').length>0,id+' retains its aerial-verified flat inner roof');check(group(id,'RoofSlate').length>0,id+' retains distinct slate margins');}
}
const result={building_highlights:records.length,reconstructed_buildings:selected.size,all_individual_layers_present:true,physical_checks:checks.length,checks,passed:true};fs.writeFileSync(new URL('output/highlight_form_validation.json',root),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
