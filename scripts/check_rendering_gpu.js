import * as THREE from 'three';
import {prepareLandscape,stabilizeBuildingMaterial,updateCampusDepthRange,setCampusClipping} from './surface_rendering.js';
const output=document.getElementById('results');
try {
  const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setSize(256,256);renderer.outputColorSpace=THREE.SRGBColorSpace;document.body.append(renderer.domElement);
  const target=new THREE.WebGLRenderTarget(256,256);target.texture.colorSpace=THREE.SRGBColorSpace;const scene=new THREE.Scene();scene.background=new THREE.Color(0xffffff);
  function box(name,color,x,z,width,height){const material=new THREE.MeshBasicMaterial({name,color});const mesh=new THREE.Mesh(new THREE.BoxGeometry(width,width,height),material);mesh.position.set(x,0,z);scene.add(mesh);return mesh;}
  const ground=box('Ground',0xe0e0e0,0,1,40,2),grass=box('Grass',0x00ff00,0,1.85,15,.1),road=box('Road',0x505050,0,1.4,25,.2),marking=box('Marking',0xffcb05,0,1.4,2,.1);
  const wall=box('LightStone',0x00274c,-14,4,2,4);
  const glass=box('Glass',0xff0000,-14,1.3,2,.2);glass.material.transparent=true;glass.material.opacity=.6;stabilizeBuildingMaterial(glass.material,true);
  const camera=new THREE.OrthographicCamera(-20,20,20,-20,.1,100000);camera.up.set(0,0,1);camera.position.set(0,-50,60);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);
  function pixel(point){const q=point.clone().project(camera),x=Math.floor((q.x+1)*128),y=Math.floor((q.y+1)*128);const rgb=new Uint8Array(4);renderer.readRenderTargetPixels(target,x,y,1,1,rgb);return [...rgb].slice(0,3);}
  function expect(point,color,label){const actual=pixel(point);if(actual.some((v,i)=>Math.abs(v-color[i])>3))throw new Error(label+': '+actual+' expected '+color);}
  renderer.setRenderTarget(target);renderer.render(scene,camera);expect(new THREE.Vector3(0,0,1.45),[224,224,224],'Original terrain crossing reproduced');
  for(const m of [ground,grass,road,marking])prepareLandscape(m);
  const bounds=new THREE.Box3().setFromObject(scene);let frames=0,checks=0;
  for(const tilt of [.001,.65,1.1])for(let step=0;step<16;step++){
    const angle=step*Math.PI/8,pan=new THREE.Vector3((step%3)*.013,((step+1)%3)*.017,0);
    camera.position.copy(pan).add(new THREE.Vector3(Math.sin(tilt)*Math.cos(angle),Math.sin(tilt)*Math.sin(angle),Math.cos(tilt)).multiplyScalar(10000));camera.lookAt(pan);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,bounds);renderer.render(scene,camera);
    expect(new THREE.Vector3(7,0,1.5),[80,80,80],'Road stays above crossed terrain');
    expect(new THREE.Vector3(0,0,1.45),[255,203,5],'Marking stays above road');
    expect(new THREE.Vector3(-14,0,6),[0,39,76],'Opaque building occludes glass behind it');
    frames++;checks+=3;
  }
  const shadowScene=new THREE.Scene();shadowScene.background=new THREE.Color(0xffffff);
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0xffffff}));floor.receiveShadow=true;shadowScene.add(floor);
  const caster=new THREE.Mesh(new THREE.BoxGeometry(2,2,6),new THREE.MeshStandardMaterial({color:0x888888}));caster.position.z=4;caster.castShadow=true;shadowScene.add(caster);
  shadowScene.add(new THREE.AmbientLight(0xffffff,.4));
  const sun=new THREE.DirectionalLight(0xffffff,2);sun.position.set(-5,-5,10);sun.castShadow=true;sun.shadow.mapSize.set(512,512);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:30});sun.shadow.bias=-.0001;shadowScene.add(sun,sun.target);
  renderer.shadowMap.enabled=true;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  camera.up.set(0,1,0);camera.position.set(0,0,80);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,new THREE.Box3().setFromObject(shadowScene));
  renderer.render(shadowScene,camera);const shaded=pixel(new THREE.Vector3(2,2,0));
  setCampusClipping(renderer,shadowScene,new THREE.Plane(new THREE.Vector3(0,0,-1),.5));renderer.render(shadowScene,camera);const sectioned=pixel(new THREE.Vector3(2,2,0));
  if(sectioned[0]-shaded[0]<30)throw new Error('Clipped building must not leave a floating shadow: '+shaded+' to '+sectioned);
  setCampusClipping(renderer,shadowScene);renderer.setRenderTarget(null);renderer.render(shadowScene,camera);

  output.textContent=JSON.stringify({status:'passed',frames,pixelChecks:checks,depthBits:renderer.getContext().getParameter(renderer.getContext().DEPTH_BITS),checks:['Terrain crossing reproduced','Surface stack survives pan and rotation','Opaque structures keep normal occlusion','Transparent glass stays depth-tested','Adaptive depth range keeps all surfaces visible','Section clipping removes clipped shadows']},null,2);
  target.dispose();
}catch(error){output.textContent=JSON.stringify({status:'failed',error:error.message},null,2);console.error(error);}
