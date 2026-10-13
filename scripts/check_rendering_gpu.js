import * as THREE from 'three';
import realRoofFixture from './fixtures/umich_roof.json';
import {prepareBuildingRoofs,prepareLandscape,stabilizeBuildingMaterial,updateCampusDepthRange,setCampusClipping,stabilizeCampusShadows,fitCampusSun,updateCampusDetailDepth} from './surface_rendering.js';
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
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(30,30),new THREE.MeshStandardMaterial({color:0xffffff}));stabilizeCampusShadows(floor.material);floor.receiveShadow=true;shadowScene.add(floor);
  const caster=new THREE.Mesh(new THREE.BoxGeometry(2,2,6),new THREE.MeshStandardMaterial({color:0x888888}));caster.position.z=4;caster.castShadow=true;shadowScene.add(caster);
  shadowScene.add(new THREE.AmbientLight(0xffffff,.4));
  const sun=new THREE.DirectionalLight(0xffffff,2);sun.position.set(-5,-5,10);sun.castShadow=true;sun.shadow.mapSize.set(512,512);Object.assign(sun.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:30});sun.shadow.bias=-.0001;shadowScene.add(sun,sun.target);
  renderer.shadowMap.enabled=true;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
  camera.up.set(0,1,0);camera.position.set(0,0,80);camera.lookAt(0,0,0);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,new THREE.Box3().setFromObject(shadowScene));
  renderer.render(shadowScene,camera);const shaded=pixel(new THREE.Vector3(2,2,0));
  setCampusClipping(renderer,shadowScene,new THREE.Plane(new THREE.Vector3(0,0,-1),.5));renderer.render(shadowScene,camera);const sectioned=pixel(new THREE.Vector3(2,2,0));
  if(sectioned[0]-shaded[0]<30)throw new Error('Clipped building must not leave a floating shadow: '+shaded+' to '+sectioned);
  setCampusClipping(renderer,shadowScene);renderer.setRenderTarget(null);renderer.render(shadowScene,camera);

  // Roof lighting at campus-scale shadow texels, large camera distances and
  // subpixel pans. Sampling interior world points excludes ordinary edge aliasing.
  renderer.setRenderTarget(target);renderer.shadowMap.type=THREE.PCFShadowMap;
  const roofs=new THREE.Scene();roofs.add(new THREE.AmbientLight(0xffffff,.4));
  const roofMaterial=new THREE.MeshPhongMaterial({name:'Metal',color:0x71848b,flatShading:true,shininess:0,specular:0});
  stabilizeCampusShadows(roofMaterial);
  const roof=new THREE.Mesh(new THREE.BoxGeometry(100,100,40),roofMaterial);roof.position.set(4000,6500,20);roof.castShadow=true;roof.receiveShadow=true;roofs.add(roof);
  const roofSun=new THREE.DirectionalLight(0xffffff,2);roofSun.position.set(0,500,9040);roofSun.target.position.set(4000,6500,40);roofSun.castShadow=true;roofSun.shadow.mapSize.set(2048,2048);roofs.add(roofSun,roofSun.target);
  const campusBounds=new THREE.Box3(new THREE.Vector3(0,0,0),new THREE.Vector3(8000,8000,180));fitCampusSun(roofSun,campusBounds);
  camera.up.set(0,0,1);camera.zoom=1;camera.left=-100;camera.right=100;camera.top=100;camera.bottom=-100;
  camera.position.set(4000,6400,140);camera.lookAt(4000,6500,40);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);
  roof.receiveShadow=false;renderer.shadowMap.needsUpdate=true;renderer.render(roofs,camera);const roofColor=pixel(new THREE.Vector3(4000,6500,40));roof.receiveShadow=true;roofMaterial.needsUpdate=true;
  let roofChecks=0,roofMaximumDelta=0;
  for(const zoom of [1,8,60])for(let step=0;step<24;step++){
    const angle=step*Math.PI/12,pivot=new THREE.Vector3(4000+step*.017,6500+step*.013,40);
    camera.zoom=zoom;camera.updateProjectionMatrix();camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*.6,Math.sin(angle)*.6,.8),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);renderer.render(roofs,camera);
    for(const x of [-.1,0,.1])for(const y of [-.1,0,.1]){
      const actual=pixel(new THREE.Vector3(4000+x,6500+y,40)),delta=Math.max(...actual.map((v,i)=>Math.abs(v-roofColor[i])));
      roofMaximumDelta=Math.max(roofMaximumDelta,delta);if(delta>3)throw new Error('Roof self-shadow or lighting shimmer: '+actual+' expected '+roofColor);roofChecks++;
    }
  }
  // A roof sheet 1 cm below a closed body cap, and a differently triangulated,
  // exactly coplanar concrete accent. Both must retain normal depth occlusion.
  const detailScene=new THREE.Scene(),bodyMat=new THREE.MeshBasicMaterial({color:0x0000ff}),metalMat=new THREE.MeshBasicMaterial({name:'Metal',color:0x505050}),accentMat=new THREE.MeshBasicMaterial({name:'Concrete',color:0xffcb05});
  const bodyRoof=new THREE.Mesh(new THREE.BoxGeometry(100,100,40),bodyMat);bodyRoof.position.set(4000,6500,20);
  const sheet=new THREE.Mesh(new THREE.PlaneGeometry(100,100),metalMat),accent=new THREE.Mesh(new THREE.PlaneGeometry(40,40,3,3),accentMat);sheet.position.set(4000,6500,39.99);accent.position.copy(sheet.position);
  stabilizeBuildingMaterial(metalMat,true);stabilizeBuildingMaterial(accentMat,true);detailScene.add(bodyRoof,sheet,accent);
  for(let step=0;step<48;step++){
    const angle=step*Math.PI/8,pivot=new THREE.Vector3(4000+step*.017,6500+step*.013,40);camera.zoom=[1,8,60][step%3];camera.updateProjectionMatrix();camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*.6,Math.sin(angle)*.6,.8),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);updateCampusDetailDepth(camera,detailScene);renderer.render(detailScene,camera);
    expect(new THREE.Vector3(4000,6500,40),[255,203,5],'Coplanar accent stays above metal and body cap step '+step+' range '+(camera.far-camera.near)+' bias '+accentMat.userData.campusDetailBias.value);roofChecks++;
  }
  const occluder=new THREE.Mesh(new THREE.BoxGeometry(4,4,2),new THREE.MeshBasicMaterial({color:0x00274c}));occluder.position.set(4000,6500,41);detailScene.add(occluder);
  for(const bits of [16,24])for(let step=0;step<16;step++){
    const angle=step*Math.PI/8,pivot=new THREE.Vector3(4000,6500,42);camera.zoom=8;camera.updateProjectionMatrix();camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*.6,Math.sin(angle)*.6,.8),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);updateCampusDetailDepth(camera,detailScene,bits);renderer.render(detailScene,camera);
    expect(pivot,[0,39,76],'Depth-biased roofs must not paint over taller structures');roofChecks++;
  }
  // Delivered G. G. Brown roof geometry: different triangulations at the same
  // georeferenced elevation exposed precision errors that local boxes missed.
  const realRoofs=new THREE.Scene();let concrete;
  for(const source of realRoofFixture){
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(source.positions,3));g.setIndex(source.index);g.computeVertexNormals();
    const name=source.materials[0].name,mat=new THREE.MeshBasicMaterial({name,color:name==='Concrete'?0xffcb05:name==='Metal'?0x505050:0x0000ff});stabilizeBuildingMaterial(mat,source.name.includes('D'));
    const mesh=new THREE.Mesh(g,mat);mesh.applyMatrix4(new THREE.Matrix4().fromArray(source.matrix));realRoofs.add(mesh);if(name==='Concrete')concrete=mesh;
  }
  const pos=concrete.geometry.attributes.position,idx=concrete.geometry.index,points=[],a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
  for(let i=0;i<idx.count;i+=3){a.fromBufferAttribute(pos,idx.getX(i));b.fromBufferAttribute(pos,idx.getX(i+1));c.fromBufferAttribute(pos,idx.getX(i+2));if(b.clone().sub(a).cross(c.clone().sub(a)).z>20)points.push(a.clone().add(b).add(c).multiplyScalar(1/3));}
  let originalFailures=0;
  for(let step=0;step<72;step++){
    const pivot=points[step%points.length],angle=step*Math.PI/8,tilt=[.1,.65,1.1][step%3];camera.zoom=[1,8,60][step%3];camera.updateProjectionMatrix();camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*Math.sin(tilt),Math.sin(angle)*Math.sin(tilt),Math.cos(tilt)),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);
    realRoofs.traverse(m=>{const rank=m.material?.userData.campusDetailRank;if(rank)m.material.userData.campusDetailBias.value=.03/(camera.far-camera.near)+2*rank/(2**24-1);});renderer.render(realRoofs,camera);if(pixel(pivot).some((v,i)=>Math.abs(v-[255,203,5][i])>3))originalFailures++;
    updateCampusDetailDepth(camera,realRoofs);renderer.render(realRoofs,camera);expect(pivot,[255,203,5],'Actual North Campus coplanar roof stays stable');roofChecks++;
  }
  if(!originalFailures)throw new Error('Actual roof regression must reproduce the insufficient old depth separation');
  const roofSources=[...realRoofs.children];
  for(const mesh of roofSources)prepareBuildingRoofs(mesh,40,mesh.material.userData.campusDetailRank>0,true);
  let uniformRoofChecks=0;
  for(let step=0;step<48;step++){
    const pivot=points[step%points.length],angle=step*Math.PI/8;camera.zoom=[1,8,60][step%3];camera.updateProjectionMatrix();camera.position.copy(pivot).addScaledVector(new THREE.Vector3(Math.cos(angle)*.6,Math.sin(angle)*.6,.8),15000);camera.lookAt(pivot);camera.updateMatrixWorld(true);updateCampusDepthRange(camera,campusBounds);updateCampusDetailDepth(camera,realRoofs);renderer.render(realRoofs,camera);
    expect(pivot,[101,112,120],'Flat roof material regions use one gray base color');uniformRoofChecks++;
  }


  output.textContent=JSON.stringify({status:'passed',frames,pixelChecks:checks,roofChecks,roofMaximumDelta,originalRoofFailures:originalFailures,uniformRoofChecks,depthBits:renderer.getContext().getParameter(renderer.getContext().DEPTH_BITS),checks:['Terrain crossing reproduced','Surface stack survives pan and rotation','Opaque structures keep normal occlusion','Transparent glass stays depth-tested','Adaptive depth range keeps all surfaces visible','Section clipping removes clipped shadows','Roof lighting stays stable while panning, rotating and zooming','Coplanar roof accents and recessed sheets stay visible','Actual North Campus roof regression reproduced and repaired']},null,2);
  target.dispose();
}catch(error){output.textContent=JSON.stringify({status:'failed',error:error.message},null,2);console.error(error);}
