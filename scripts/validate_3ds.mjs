import fs from 'node:fs';
import { TDSLoader } from 'three/addons/loaders/TDSLoader.js';
import { Box3 } from 'three';
const filename=process.argv[2];
const buffer=fs.readFileSync(filename);
const array=buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength);
const loader=new TDSLoader();
const group=loader.parse(array,'');
const names=[];let triangles=0;let vertices=0;
group.traverse(o=>{if(o.isMesh){names.push(o.name);const g=o.geometry;vertices+=g.attributes.position.count;triangles+=g.index?g.index.count/3:g.attributes.position.count/3;}});
const bounds=new Box3().setFromObject(group);
const map=JSON.parse(fs.readFileSync(new URL('../output/layer_map.json',import.meta.url),'utf8'));
if(names.length!==Object.keys(map).length)throw new Error('Object count mismatch');
if(names.some(n=>!map[n]))throw new Error('Object names not preserved');
if(names.some(n=>n.length>10))throw new Error('3DS names exceed Rhino limit');
const info={parser:'Three.js TDSLoader (independent 3DS importer)',objects:names.length,triangles,vertices,box_min:bounds.min.toArray(),box_max:bounds.max.toArray(),all_names_preserved:true};
console.log(JSON.stringify(info,null,2));
fs.writeFileSync(new URL('../output/3ds_validation.json',import.meta.url),JSON.stringify(info,null,2));
// Keep storage diagnostics tied to the current native export rather than an
// earlier campus build. A zero-valued smoothing table is optional in 3DS.
let zeroSmoothing=0;
function storageChunks(start,end){for(let p=start;p<end;){const tag=buffer.readUInt16LE(p),n=buffer.readUInt32LE(p+2),stop=p+n;if(n<6||stop>end)throw new Error('Invalid 3DS storage chunk');if(tag===0x4150&&buffer.subarray(p+6,stop).every(x=>x===0))zeroSmoothing++;if([0x4d4d,0x3d3d,0x4100].includes(tag))storageChunks(p+6,stop);else if(tag===0x4000)storageChunks(buffer.indexOf(0,p+6,stop)+1,stop);else if(tag===0x4120)storageChunks(p+8+buffer.readUInt16LE(p+6)*8,stop);p=stop;}}
storageChunks(0,buffer.length);if(zeroSmoothing)throw new Error('Redundant all-zero smoothing tables were reintroduced');
fs.writeFileSync(new URL('../output/3ds_storage_validation.json',import.meta.url),JSON.stringify({source:filename,current_bytes:buffer.length,optional_zero_smoothing_tables_written:zeroSmoothing,storage:'Optional all-zero smoothing tables omitted; independent importer verified all named source meshes.'},null,2)+'\n');
