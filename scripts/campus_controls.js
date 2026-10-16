import {MOUSE, TOUCH, Vector3} from 'three';
import {MapControls} from 'three/addons/controls/MapControls.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const GROUND_TILT=.35;
/** Z-up navigation from plan through a level view, with no inertia or roll. */
export class CampusMapControls extends MapControls {
  constructor(camera, element = null) {
    camera.up.set(0, 0, 1);
    super(camera, element);
    this.enableDamping=false;
    this.screenSpacePanning=false;
    this.zoomToCursor=true;
    this.rotateSpeed=.45;
    this.zoomSpeed=.7;
    this.minPolarAngle=0;
    this.maxPolarAngle=Math.PI/2;
    this.maxZoom=60;
    this.touches.TWO=TOUCH.DOLLY_PAN;
    this.rotationMode=false;
    // Consume both contacts together so alternating pointer events cannot turn
    // a straight pinch or pan into a transient twist.
    this._touchMoveNow=this._onTouchMove;
    this._onTouchMove=event=>{
      if(this._pointers.length!==2||typeof requestAnimationFrame!=='function'){
        this._touchMoveNow(event);return;
      }
      this._trackPointer(event);
      this._queuedTouchMove=event;
      if(this._touchFrame==null)this._touchFrame=requestAnimationFrame(()=>this._flushTouchMove());
    };
  }
  syncViewOffset() {
    const camera=this.object;
    if(!camera.isOrthographicCamera)return;
    if(Math.abs(this._viewLift||0)<1e-10){if(camera.view?.enabled)camera.clearViewOffset();return;}
    // Store inspection height in world units, not screen pixels. It survives
    // zoom and resize while the orbit pivot stays on its ground plane.
    camera.setViewOffset(1,1,0,-this._viewLift*camera.zoom/(camera.top-camera.bottom),1,1);
  }
  clearViewOffset() {
    this._viewLift=0;this.object.clearViewOffset();this._projectionChanged=true;
  }
  _translateView(rightDistance,upDistance) {
    const camera=this.object,right=new Vector3().setFromMatrixColumn(camera.matrix,0);
    const groundUp=new Vector3().crossVectors(camera.up,right).normalize();
    const screenUp=new Vector3().setFromMatrixColumn(camera.matrix,1);
    const elevation=Math.max(0,groundUp.dot(screenUp));
    // At a level view, ground-plane rays have no finite intersection. Blend
    // toward an off-axis vertical framing shift, without huge ground travel.
    const gain=elevation>=GROUND_TILT?1/elevation:elevation/(GROUND_TILT*GROUND_TILT);
    this._panOffset.addScaledVector(right,rightDistance).addScaledVector(groundUp,upDistance*gain);
    const lift=upDistance*(1-elevation*gain);
    if(Math.abs(lift)>1e-12){this._viewLift=(this._viewLift||0)+lift;this._projectionChanged=true;}
  }
  update(deltaTime) {
    const camera=this.object;let cursorZoom=false;
    if(camera.isOrthographicCamera&&this.zoomToCursor&&this._performCursorZoom){
      // Orthographic cursor zoom needs no ground intersection at any angle.
      camera.updateMatrixWorld(true);this.syncViewOffset();
      const before=new Vector3(this._mouse.x,this._mouse.y,0).unproject(camera),previous=camera.zoom;
      camera.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,camera.zoom/this._scale));
      camera.updateProjectionMatrix();this.syncViewOffset();
      const after=new Vector3(this._mouse.x,this._mouse.y,0).unproject(camera),delta=before.sub(after);
      const right=new Vector3().setFromMatrixColumn(camera.matrix,0),up=new Vector3().setFromMatrixColumn(camera.matrix,1);
      this._translateView(delta.dot(right),delta.dot(up));
      this._scale=1;this._performCursorZoom=false;cursorZoom=previous!==camera.zoom;
    }
    let changed=super.update(deltaTime);camera.updateMatrixWorld(true);
    const lift=this._viewLift||0;
    if(camera.isOrthographicCamera&&Math.abs(lift)>1e-10){
      const right=new Vector3().setFromMatrixColumn(camera.matrix,0),groundUp=new Vector3().crossVectors(camera.up,right).normalize();
      const elevation=groundUp.dot(new Vector3().setFromMatrixColumn(camera.matrix,1));
      if(elevation>=GROUND_TILT){
        // Resume ordinary ground navigation without changing the image.
        const delta=groundUp.multiplyScalar(lift/elevation);camera.position.add(delta);this.target.add(delta);this.clearViewOffset();
        changed=super.update(deltaTime)||changed;camera.updateMatrixWorld(true);
      }
    }
    this.syncViewOffset();changed=this._groundPivot()||changed;
    if((cursorZoom||this._projectionChanged)&&!changed)this.dispatchEvent({type:'change'});
    changed=changed||cursorZoom||Boolean(this._projectionChanged);this._projectionChanged=false;
    return changed;
  }
  _groundPivot() {
    if(this.focusPivot||!this.groundHeight||!this.object.isOrthographicCamera)return false;
    const camera=this.object,direction=camera.getWorldDirection(new Vector3()),point=this.target.clone();
    if(direction.z>-GROUND_TILT)return false;
    let height=this.groundHeight(point.x,point.y);
    for(let i=0;i<8;i++){
      point.copy(camera.position).addScaledVector(direction,(height-camera.position.z)/direction.z);
      const next=this.groundHeight(point.x,point.y);if(Math.abs(next-height)<.001)break;height=next;
    }
    const delta=point.sub(this.target);if(delta.lengthSq()<1e-12)return false;
    camera.position.add(delta);this.target.add(delta);
    const changed=super.update();camera.updateMatrixWorld(true);return changed;
  }
  _handleMouseDownPan(event) {this.focusPivot=false;this._groundPivot();OrbitControls.prototype._handleMouseDownPan.call(this,event);}
  _handleMouseMovePan(event) {OrbitControls.prototype._handleMouseMovePan.call(this,event);}
  _handleTouchStartPan(event) {this.focusPivot=false;this._groundPivot();super._handleTouchStartPan(event);}
  _handleMouseWheel(event) {this.focusPivot=false;this._groundPivot();super._handleMouseWheel(event);}
  _pan(dx,dy) {
    if(!this.domElement||this.domElement.clientWidth<1||this.domElement.clientHeight<1)return;
    this.focusPivot=false;this._groundPivot();
    const camera=this.object;
    if(!camera.isOrthographicCamera){super._pan(dx,dy);return;}
    this._translateView(-dx*(camera.right-camera.left)/camera.zoom/this.domElement.clientWidth,dy*(camera.top-camera.bottom)/camera.zoom/this.domElement.clientHeight);
  }
  _handleMouseDownDolly(event) {
    super._handleMouseDownDolly(event);
    this._updateZoomParameters(event.clientX,event.clientY);
  }
  _handleTouchMoveDolly(event) {
    const previous=this._scale;super._handleTouchMoveDolly(event);
    if(!Number.isFinite(this._scale)||this._scale<=0)this._scale=previous;
    this._scale=Math.max(previous/1.2,Math.min(previous*1.2,this._scale));
    const second=this._getSecondPointerPosition(event);
    if(second)this._updateZoomParameters((event.pageX+second.x)/2+(event.clientX-event.pageX||0),(event.pageY+second.y)/2+(event.clientY-event.pageY||0));
  }
  _flushTouchMove(discard=false) {
    if(this._touchFrame!=null){cancelAnimationFrame(this._touchFrame);this._touchFrame=null;}
    const event=this._queuedTouchMove;this._queuedTouchMove=null;
    if(!discard&&this.enabled&&event&&this._pointers.length===2)this._touchMoveNow(event);
  }
  _addPointer(event) {
    this._flushTouchMove();this._touchTwist=null;super._addPointer(event);
  }
  _removePointer(event) {
    this._flushTouchMove(event.type==='pointercancel');this._touchTwist=null;
    super._removePointer(event);
    // OrbitControls resumes one remaining contact itself; also resume two
    // after an accidental third contact, using fresh positions and baselines.
    if(this._pointers.length===2){
      const id=this._pointers[0],p=this._pointerPositions[id];
      this._onTouchStart({pointerId:id,pageX:p.x,pageY:p.y});
    }
  }
  disconnect() {this._flushTouchMove(true);this._touchTwist=null;super.disconnect();}
  _touchPair(event) {
    if(this._pointers.length!==2||!this.domElement||this.domElement.clientWidth<1||this.domElement.clientHeight<1)return null;
    const a=this._pointerPositions[this._pointers[0]],b=this._pointerPositions[this._pointers[1]];
    if(!a||!b)return null;
    const dx=b.x-a.x,dy=b.y-a.y;
    if(Number.isFinite(event.clientX)&&Number.isFinite(event.clientY))this._touchClientOffset={x:event.clientX-event.pageX,y:event.clientY-event.pageY};
    const offset=this._touchClientOffset||{x:0,y:0};
    // Very close or crossed contacts have no reliable angular direction.
    if(Math.hypot(dx,dy)<24)return null;
    return {angle:Math.atan2(dy,dx),distance:Math.hypot(dx,dy),ax:a.x,ay:a.y,bx:b.x,by:b.y,x:(a.x+b.x)/2+offset.x,y:(a.y+b.y)/2+offset.y};
  }
  _startTouchTwist(pair) {
    const camera=this.object,b=this.domElement.getBoundingClientRect();camera.updateMatrixWorld(true);
    const x=(pair.x-b.left)/b.width*2-1,y=1-(pair.y-b.top)/b.height*2;
    const anchor=new Vector3(x,y,this.target.clone().project(camera).z).unproject(camera);
    const direction=camera.getWorldDirection(new Vector3());
    if(direction.z<-GROUND_TILT)anchor.addScaledVector(direction,(this.target.z-anchor.z)/direction.z);
    return {angle:pair.angle,pending:0,active:false,anchor,start:pair,mode:null,tiltY:pair.y};
  }
  _handleTouchStartDollyPan(event) {
    super._handleTouchStartDollyPan(event);
    const pair=this._touchPair(event);
    this._touchTwist=pair?this._startTouchTwist(pair):null;
  }
  _twoFingerIntent(previous,pair) {
    if(previous.mode)return previous.mode;
    const start=previous.start,dx=pair.x-start.x,dy=pair.y-start.y;
    const a=pair.ay-start.ay,b=pair.by-start.by;
    const turn=Math.atan2(Math.sin(pair.angle-start.angle),Math.cos(pair.angle-start.angle));
    // Decide once per contact pair. Pinching or turning first keeps normal map
    // navigation; a deliberate parallel vertical drag enters tilt instead.
    if(!this.enableRotate||Math.abs(pair.distance-start.distance)>Math.max(6,start.distance*.05)||Math.abs(turn)>3*Math.PI/180||Math.abs(dx)>=8&&Math.abs(dx)*1.5>=Math.abs(dy))previous.mode='map';
    else if(a*b>0&&Math.min(Math.abs(a),Math.abs(b))>=6&&Math.abs(dy)>=8&&Math.abs(dy)>Math.abs(dx)*1.5)previous.mode='tilt';
    else if(Math.hypot(dx,dy)>18)previous.mode='map';
    return previous.mode;
  }
  _applyTouchOrbit(previous,x,y,turn,tilt=0) {
    // Keep one world-space anchor for the whole gesture, including passage
    // through the low-angle view-offset/ground-plane transition.
    this.update();
    const camera=this.object,b=this.domElement.getBoundingClientRect();
    this._rotateLeft(-turn);this._rotateUp(tilt);this.update();
    const after=previous.anchor.clone().project(camera);
    this._pan(((x-b.left)/b.width*2-1-after.x)*b.width/2,(after.y-(1-(y-b.top)/b.height*2))*b.height/2);
  }
  _handleTouchMoveDollyPan(event) {
    const pair=this._touchPair(event),previous=this._touchTwist;
    if(!pair){super._handleTouchStartDollyPan(event);this._touchTwist=null;return;}
    if(!previous){super._handleTouchStartDollyPan(event);this._touchTwist=this._startTouchTwist(pair);return;}
    const hadMode=previous.mode,mode=this._twoFingerIntent(previous,pair);
    if(!mode)return;
    if(mode==='tilt'){
      if(!this.enableRotate)return;
      // The first 8 CSS pixels establish intent without moving the camera.
      // Vertical travel controls pitch, so its on-screen anchor does not pan.
      const dy=pair.y-previous.tiltY-(hadMode?0:Math.sign(pair.y-previous.start.y)*8);
      previous.tiltY=pair.y;
      const angle=2*Math.PI*dy*this.rotateSpeed/Math.max(this.domElement.clientHeight,1);
      this._applyTouchOrbit(previous,previous.start.x,previous.start.y,0,Math.max(-Math.PI/18,Math.min(Math.PI/18,angle)));
      return;
    }
    super._handleTouchMoveDollyPan(event);
    if(!this.enableRotate)return;
    let angle=Math.atan2(Math.sin(pair.angle-previous.angle),Math.cos(pair.angle-previous.angle));
    previous.angle=pair.angle;
    if(!previous.active){
      previous.pending+=angle;
      const threshold=3*Math.PI/180;
      if(Math.abs(previous.pending)<=threshold)return;
      angle=previous.pending-Math.sign(previous.pending)*threshold;previous.active=true;
    }
    angle=Math.max(-Math.PI/8,Math.min(Math.PI/8,angle));
    if(Math.abs(angle)<1e-10)return;
    this._applyTouchOrbit(previous,pair.x,pair.y,angle);
  }
  _customWheelEvent(event) {
    const normalized=super._customWheelEvent(event);
    normalized.deltaY=Math.max(-250,Math.min(250,normalized.deltaY));return normalized;
  }
}

export function setRotationMode(controls,enabled) {
  controls.rotationMode=Boolean(enabled);
  controls.mouseButtons.LEFT=enabled?MOUSE.ROTATE:MOUSE.PAN;
  controls.touches.ONE=enabled?TOUCH.ROTATE:TOUCH.PAN;
}

/** Preserve the local pivot, bearing and scale when switching to elevation. */
export function levelCampusView(controls) {
  controls.rotateUp(controls.getPolarAngle()-Math.PI/2);
}

/** Fit a local box; off-screen geometry cannot set its pivot. */
export function frameCampusBox(camera,controls,box,{
  aspect,mode='aerial',pad=1.16,distance=3000,
  direction=new Vector3(1.15,-.95,1.2),minimumHeight=50,pivotHeight
}) {
  const center=box.getCenter(new Vector3());if(pivotHeight!==undefined)center.z=pivotHeight;
  const back=mode==='plan'?new Vector3(0,-.00001,1):direction.clone().normalize();
  controls.enableDamping=false;controls.update();controls.clearViewOffset?.();
  controls.focusPivot=pivotHeight===undefined;
  camera.position.copy(center).addScaledVector(back,distance);camera.up.set(0,0,1);controls.target.copy(center);camera.zoom=1;
  controls.update();camera.updateMatrixWorld(true);
  const right=new Vector3().setFromMatrixColumn(camera.matrix,0),up=new Vector3().setFromMatrixColumn(camera.matrix,1);
  let xmin=Infinity,xmax=-Infinity,ymin=Infinity,ymax=-Infinity;
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){
    const point=new Vector3(x,y,z).sub(center),xx=point.dot(right),yy=point.dot(up);
    xmin=Math.min(xmin,xx);xmax=Math.max(xmax,xx);ymin=Math.min(ymin,yy);ymax=Math.max(ymax,yy);
  }
  return Math.max(2*Math.max(Math.abs(ymin),Math.abs(ymax))*pad,2*Math.max(Math.abs(xmin),Math.abs(xmax))/aspect*pad,minimumHeight);
}
