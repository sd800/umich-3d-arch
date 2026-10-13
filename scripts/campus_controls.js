import {MOUSE, TOUCH, Vector3} from 'three';
import {MapControls} from 'three/addons/controls/MapControls.js';

/** Ground-aligned map navigation. No inertia, roll, or below-ground orbit. */
export class CampusMapControls extends MapControls {
  constructor(camera, element = null) {
    camera.up.set(0, 0, 1);
    super(camera, element);
    this.enableDamping = false;
    this.screenSpacePanning = false;
    this.zoomToCursor = true;
    this.rotateSpeed = .45;
    this.zoomSpeed = .7;
    this.minPolarAngle = 0;
    // Keep cursor zoom above Three.js's 20-degree horizon cutoff.
    this.maxPolarAngle = Math.PI * .375;
    this.maxZoom = 60;
    this.touches.TWO = TOUCH.DOLLY_PAN;
    this.rotationMode = false;
  }
  update(deltaTime) {
    const changed=super.update(deltaTime);
    this.object.updateMatrixWorld(true);
    return this._groundPivot()||changed;
  }
  _groundPivot() {
    if(this.focusPivot||!this.groundHeight||!this.object.isOrthographicCamera)return false;
    const camera=this.object,direction=camera.getWorldDirection(new Vector3()),point=this.target.clone();
    if(direction.z>-.35)return false;
    let height=this.groundHeight(point.x,point.y);
    for(let i=0;i<8;i++){
      point.copy(camera.position).addScaledVector(direction,(height-camera.position.z)/direction.z);
      const next=this.groundHeight(point.x,point.y);if(Math.abs(next-height)<.001)break;height=next;
    }
    const delta=point.sub(this.target);if(delta.lengthSq()<1e-12)return false;
    // Translate along the view ray: projection stays identical, pivot follows visible ground.
    camera.position.add(delta);this.target.add(delta);
    const changed=super.update();camera.updateMatrixWorld(true);return changed;
  }
  _handleMouseDownPan(event) {this.focusPivot=false;this._groundPivot();super._handleMouseDownPan(event);}
  _handleTouchStartPan(event) {this.focusPivot=false;this._groundPivot();super._handleTouchStartPan(event);}
  _handleMouseWheel(event) {this.focusPivot=false;this._groundPivot();super._handleMouseWheel(event);}
  _pan(dx, dy) {
    if(!this.domElement||this.domElement.clientWidth<1||this.domElement.clientHeight<1)return;
    this.focusPivot=false;this._groundPivot();
    // Mouse map panning uses a ray/ground-plane intersection in MapControls.
    // Touch and keyboard use this orthographic pixel path: match its screen speed.
    if (this.object.isOrthographicCamera && !this.screenSpacePanning) {
      const right = new Vector3().setFromMatrixColumn(this.object.matrix, 0);
      const groundUp = new Vector3().crossVectors(this.object.up, right).normalize();
      const screenUp = new Vector3().setFromMatrixColumn(this.object.matrix, 1);
      dy /= Math.max(.35, groundUp.dot(screenUp));
    }
    super._pan(dx, dy);
  }
  _handleMouseDownDolly(event) {
    super._handleMouseDownDolly(event);
    // r186 passes clientX twice in the middle-button cursor setup.
    this._updateZoomParameters(event.clientX, event.clientY);
  }
  _handleTouchMoveDolly(event) {
    const previous=this._scale;
    super._handleTouchMoveDolly(event);
    if(!Number.isFinite(this._scale)||this._scale<=0)this._scale=previous;
    this._scale=Math.max(previous/1.2,Math.min(previous*1.2,this._scale));
  }
  _customWheelEvent(event) {
    const normalized = super._customWheelEvent(event);
    normalized.deltaY = Math.max(-250, Math.min(250, normalized.deltaY));
    return normalized;
  }
}

export function setRotationMode(controls, enabled) {
  controls.rotationMode = Boolean(enabled);
  controls.mouseButtons.LEFT = enabled ? MOUSE.ROTATE : MOUSE.PAN;
  controls.touches.ONE = enabled ? TOUCH.ROTATE : TOUCH.PAN;
}

/** Fit the requested local box; distant/off-screen geometry cannot set its pivot. */
export function frameCampusBox(camera, controls, box, {
  aspect, mode = 'aerial', pad = 1.16, distance = 3000,
  direction = new Vector3(1.15, -.95, 1.2), minimumHeight = 50, pivotHeight
}) {
  const center = box.getCenter(new Vector3());
  if(pivotHeight!==undefined)center.z=pivotHeight;
  const back = mode === 'plan' ? new Vector3(0, -.00001, 1) : direction.clone().normalize();
  // Drain any old input before installing a preset, never after it.
  controls.enableDamping = false;
  controls.update();
  controls.focusPivot=pivotHeight===undefined;
  camera.position.copy(center).addScaledVector(back, distance);
  camera.up.set(0, 0, 1);
  controls.target.copy(center);
  camera.zoom = 1;
  controls.update();
  camera.updateMatrixWorld(true);
  const right = new Vector3().setFromMatrixColumn(camera.matrix, 0);
  const up = new Vector3().setFromMatrixColumn(camera.matrix, 1);
  let xmin=Infinity, xmax=-Infinity, ymin=Infinity, ymax=-Infinity;
  for (const x of [box.min.x,box.max.x]) for (const y of [box.min.y,box.max.y]) for (const z of [box.min.z,box.max.z]) {
    const point = new Vector3(x,y,z).sub(center), xx=point.dot(right), yy=point.dot(up);
    xmin=Math.min(xmin,xx); xmax=Math.max(xmax,xx); ymin=Math.min(ymin,yy); ymax=Math.max(ymax,yy);
  }
  return Math.max(2*Math.max(Math.abs(ymin),Math.abs(ymax))*pad, 2*Math.max(Math.abs(xmin),Math.abs(xmax))/aspect*pad, minimumHeight);
}
