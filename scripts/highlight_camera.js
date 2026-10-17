import {Vector3} from 'three';

// A bearing describes the camera side, clockwise from model north (+Y).
// Previously authored record presets have precedence over this presentation catalogue.
export function highlightCamera(record,catalogue,fallback={}) {
 const id=String(record?.facility_id??record?.osm_id??'');
 const view=catalogue.views[id];
 let direction=record?.focus_direction;
 if(!direction&&view){
  const a=view.azimuth_deg*Math.PI/180,e=view.elevation_deg*Math.PI/180;
  direction=[Math.sin(a),Math.cos(a),Math.tan(e)];
 }
 direction??=fallback.direction;
 return {direction:direction?new Vector3(...direction):undefined,pad:record?.focus_padding??view?.padding??fallback.pad??1.55};
}
