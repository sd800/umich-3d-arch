import {DataTexture,RGBAFormat,UnsignedByteType,LinearFilter,ClampToEdgeWrapping} from 'three';

/** A continuous normal field from the existing DEM samples, independent of
 * sparse triangulation and locally flattened building pads. Heights stay intact. */
export function createTerrainLighting(grid) {
  if(!grid)return null;
  const width=grid.x.length,height=grid.y.length,bytes=new Uint8Array(width*height*4);
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    const xa=Math.max(0,x-1),xb=Math.min(width-1,x+1),ya=Math.max(0,y-1),yb=Math.min(height-1,y+1);
    const dx=(grid.heights[y][xb]-grid.heights[y][xa])/(grid.x[xb]-grid.x[xa]),dy=(grid.heights[yb][x]-grid.heights[ya][x])/(grid.y[yb]-grid.y[ya]);
    const length=Math.hypot(dx,dy,1),offset=(y*width+x)*4;
    bytes[offset]=Math.round((-dx/length*.5+.5)*255);bytes[offset+1]=Math.round((-dy/length*.5+.5)*255);bytes[offset+2]=Math.round((1/length*.5+.5)*255);bytes[offset+3]=255;
  }
  const texture=new DataTexture(bytes,width,height,RGBAFormat,UnsignedByteType);texture.minFilter=LinearFilter;texture.magFilter=LinearFilter;texture.wrapS=texture.wrapT=ClampToEdgeWrapping;texture.needsUpdate=true;
  return {texture,bounds:[grid.x[0],grid.y[0],grid.x.at(-1)-grid.x[0],grid.y.at(-1)-grid.y[0]],size:[width,height]};
}
export function applyTerrainLighting(material,field) {
  if(material.userData.campusTerrainWall||material.userData.campusTerrainDepth)return;
  if(!field||material.name==='Water')return;
  const previous=material.onBeforeCompile,previousKey=material.customProgramCacheKey();
  material.onBeforeCompile=function(shader,renderer){
    previous.call(this,shader,renderer);
    shader.uniforms.campusTerrainNormals={value:field.texture};shader.uniforms.campusTerrainBounds={value:field.bounds};shader.uniforms.campusTerrainSize={value:field.size};
    shader.vertexShader='varying vec2 vCampusTerrainXY;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvCampusTerrainXY = (modelMatrix * vec4(transformed,1.0)).xy;');
    shader.fragmentShader='varying vec2 vCampusTerrainXY;\nuniform sampler2D campusTerrainNormals;\nuniform vec4 campusTerrainBounds;\nuniform vec2 campusTerrainSize;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`
      float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
      vec2 terrainUV = clamp((vCampusTerrainXY-campusTerrainBounds.xy)/campusTerrainBounds.zw,0.0,1.0);
      terrainUV=(terrainUV*(campusTerrainSize-1.0)+0.5)/campusTerrainSize;
      vec3 worldTerrainNormal=normalize(texture2D(campusTerrainNormals,terrainUV).rgb*2.0-1.0);
      vec3 normal=normalize(mat3(viewMatrix)*worldTerrainNormal);
      vec3 nonPerturbedNormal=normal;
    `);
  };
  material.customProgramCacheKey=()=>previousKey+'|campus-dem-lighting-v1';material.flatShading=false;material.needsUpdate=true;
}
