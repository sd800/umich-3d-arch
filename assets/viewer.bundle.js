(()=>{function Oo(n,e,t){let i=n.groundGrid;if(!i)return 0;let s=(f,h)=>{let u=0;for(;u<f.length-2&&f[u+1]<h;)u++;return[u,Math.max(0,Math.min(1,(h-f[u])/(f[u+1]-f[u])))]},[r,a]=s(i.x,e),[o,l]=s(i.y,t),c=i.heights[o],d=i.heights[o+1];return(c[r]*(1-a)+c[r+1]*a)*(1-l)+(d[r]*(1-a)+d[r+1]*a)*l}function Lc(n,e){let t=new Set,i=null;n.addEventListener("pointerdown",s=>{t.add(s.pointerId),i=t.size===1&&s.button===0&&s.isPrimary!==!1?{id:s.pointerId,x:s.clientX,y:s.clientY}:null}),n.addEventListener("pointermove",s=>{i&&s.pointerId===i.id&&Math.hypot(s.clientX-i.x,s.clientY-i.y)>=5&&(i=null)}),n.addEventListener("pointerup",s=>{let r=i&&s.pointerId===i.id&&t.size===1&&s.button===0;t.delete(s.pointerId),i=null,r&&e(s)}),n.addEventListener("pointercancel",s=>{t.delete(s.pointerId),i=null})}var Xt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,fl=1,ah=2;var wn=1,oh=2,hs=3,hn=0,Yt=1,di=2,Ni=0,ds=1,nr=2,pl=3,ml=4,lh=5;var En=100,ch=101,hh=102,dh=103,uh=104,fh=200,ph=201,mh=202,gh=203,gl=204,_l=205,_h=206,vh=207,xh=208,yh=209,Mh=210,Sh=211,bh=212,wh=213,Eh=214,zr=0,kr=1,Vr=2,jn=3,Hr=4,Gr=5,Wr=6,Xr=7,sr=0,Th=1,Ah=2,li=0,vl=1,xl=2,yl=3,Ml=4,Sl=5,bl=6,wl=7;var El=300,dn=301,Tn=302,ba=303,wa=304,rr=306,qr=1e3,Pi=1001,Yr=1002,Tt=1003,Ch=1004;var ar=1005;var Pt=1006,Ea=1007;var un=1008;var ei=1009,Tl=1010,Al=1011,us=1012,Ta=1013,bi=1014,wi=1015,Ei=1016,Aa=1017,Ca=1018,fs=1020,Cl=35902,Rl=35899,Pl=1021,Il=1022,ui=1023,Ii=1026,fn=1027,Ll=1028,Ra=1029,pn=1030,Pa=1031;var Ia=1033,or=33776,lr=33777,cr=33778,hr=33779,La=35840,Na=35841,Da=35842,Ua=35843,Oa=36196,Fa=37492,Ba=37496,za=37488,ka=37489,dr=37490,Va=37491,Ha=37808,Ga=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,Ja=37815,ja=37816,Ka=37817,$a=37818,Qa=37819,eo=37820,to=37821,io=36492,no=36494,so=36495,ro=36283,ao=36284,ur=36285,oo=36286;var Ns=2300,Zr=2301,Fr=2302,sl=2303,rl=2400,al=2401,ol=2402;var Rh=3200;var Wi=0,Ph=1,Xi="",Ft="srgb",Ds="srgb-linear",Us="linear",Ke="srgb";var Br=7680;var Ih=519,Lh=512,Nh=513,Dh=514,lo=515,Uh=516,Oh=517,co=518,Fh=519,Bh=35044;var Nl="300 es",yi=2e3,Kn=2001;function iu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $n(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zh(){let n=$n("canvas");return n.style.display="block",n}var Nc={},Qn=null;function Dl(...n){let e="THREE."+n.shift();Qn?Qn("log",e,...n):console.log(e,...n)}function kh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=kh(n);let e="THREE."+n.shift();if(Qn)Qn("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Le(...n){n=kh(n);let e="THREE."+n.shift();if(Qn)Qn("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function sn(...n){let e=n.join(" ");e in Nc||(Nc[e]=!0,Ie(...n))}function Vh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Hh={[zr]:kr,[Vr]:Wr,[Hr]:Xr,[jn]:Gr,[kr]:zr,[Wr]:Vr,[Xr]:Hr,[Gr]:jn},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,Is=Math.PI/180,es=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Be(n,e,t){return Math.max(e,Math.min(t,n))}function Ul(n,e){return(n%e+e)%e}function su(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ru(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function au(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function ou(n,e=1){return e-Math.abs(Ul(n,e*2)-e)}function lu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function du(n,e){return n+Math.random()*(e-n)}function uu(n){return n*(.5-Math.random())}function fu(n){n!==void 0&&(Dc=n);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pu(n){return n*Is}function mu(n){return n*es}function gu(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _u(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xu(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),d=a((e+i)/2),f=r((e-i)/2),h=a((e-i)/2),u=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*d,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*d,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*d,o*c);break;case"XZX":n.set(o*d,l*_,l*u,o*c);break;case"YXY":n.set(l*u,o*d,l*_,o*c);break;case"ZYZ":n.set(l*_,l*u,o*d,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ol={DEG2RAD:Is,RAD2DEG:es,generateUUID:ps,clamp:Be,euclideanModulo:Ul,mapLinear:su,inverseLerp:ru,lerp:Ls,damp:au,pingpong:ou,smoothstep:lu,smootherstep:cu,randInt:hu,randFloat:du,randFloatSpread:uu,seededRandom:fu,degToRad:pu,radToDeg:mu,isPowerOfTwo:gu,ceilPowerOfTwo:_u,floorPowerOfTwo:vu,setQuaternionFromProperEuler:xu,normalize:Vt,denormalize:Yn},Vl=class Vl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vl.prototype.isVector2=!0;var Ee=Vl,ri=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],f=i[s+3],h=r[a+0],u=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==u||d!==_){let g=l*h+c*u+d*_+f*y;g<0&&(h=-h,u=-u,_=-_,y=-y,g=-g);let p=1-o;if(g<.9995){let E=Math.acos(g),R=Math.sin(E);p=Math.sin(p*E)/R,o=Math.sin(o*E)/R,l=l*p+h*o,c=c*p+u*o,d=d*p+_*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+u*o,d=d*p+_*o,f=f*p+y*o;let E=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=E,c*=E,d*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],f=r[a],h=r[a+1],u=r[a+2],_=r[a+3];return e[t]=o*_+d*f+l*u-c*h,e[t+1]=l*_+d*h+c*f-o*u,e[t+2]=c*_+d*u+o*h-l*f,e[t+3]=d*_-o*f-l*h-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),f=o(r/2),h=l(i/2),u=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*d*f+c*u*_,this._y=c*u*f-h*d*_,this._z=c*d*_+h*u*f,this._w=c*d*f-h*u*_;break;case"YXZ":this._x=h*d*f+c*u*_,this._y=c*u*f-h*d*_,this._z=c*d*_-h*u*f,this._w=c*d*f+h*u*_;break;case"ZXY":this._x=h*d*f-c*u*_,this._y=c*u*f+h*d*_,this._z=c*d*_+h*u*f,this._w=c*d*f-h*u*_;break;case"ZYX":this._x=h*d*f-c*u*_,this._y=c*u*f+h*d*_,this._z=c*d*_-h*u*f,this._w=c*d*f+h*u*_;break;case"YZX":this._x=h*d*f+c*u*_,this._y=c*u*f+h*d*_,this._z=c*d*_-h*u*f,this._w=c*d*f-h*u*_;break;case"XZY":this._x=h*d*f-c*u*_,this._y=c*u*f-h*d*_,this._z=c*d*_+h*u*f,this._w=c*d*f+h*u*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=i+o+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(d-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hl=class Hl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*d,this.y=i+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Be(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hl.prototype.isVector3=!0;var L=Hl,Fo=new L,Uc=new ri,Gl=class Gl{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],u=i[5],_=i[8],y=s[0],g=s[3],p=s[6],E=s[1],R=s[4],M=s[7],w=s[2],S=s[5],A=s[8];return r[0]=a*y+o*E+l*w,r[3]=a*g+o*R+l*S,r[6]=a*p+o*M+l*A,r[1]=c*y+d*E+f*w,r[4]=c*g+d*R+f*S,r[7]=c*p+d*M+f*A,r[2]=h*y+u*E+_*w,r[5]=h*g+u*R+_*S,r[8]=h*p+u*M+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*r,u=c*r-a*l,_=t*f+i*h+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=f*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=u*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return sn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return sn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gl.prototype.isMatrix3=!0;var Ne=Gl,Bo=new Ne,Oc=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){let n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Us,toXYZ:Oc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:Ke,toXYZ:Oc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}var We=yu();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Nn,Jr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nn===void 0&&(Nn=$n("canvas")),Nn.width=e.width,Nn.height=e.height;let s=Nn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Nn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$n("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mu=0,ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zo(s[a].image)):r.push(zo(s[a]))}else r=zo(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Su=0,ko=new L,Wt=class n extends Mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=Pt,a=un,o=ui,l=ei,c=n.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ps(),this.name="",this.source=new ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=El;Wt.DEFAULT_ANISOTROPY=1;var Wl=class Wl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],u=l[5],_=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(u+1)/2,w=(p+1)/2,S=(d+h)/4,A=(f+y)/4,x=(_+g)/4;return R>M&&R>w?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=S/i,r=A/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=x/r),this.set(i,s,r,t),this}let E=Math.sqrt((g-_)*(g-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(f-y)/E,this.z=(h-d)/E,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Be(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wl.prototype.isVector4=!0;var dt=Wl,jr=class extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ts(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends jr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Os=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kr=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sa=class Sa{constructor(e,t,i,s,r,a,o,l,c,d,f,h,u,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,f,h,u,_,y,g)}set(e,t,i,s,r,a,o,l,c,d,f,h,u,_,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=_,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Dn.setFromMatrixColumn(e,0).length(),r=1/Dn.setFromMatrixColumn(e,1).length(),a=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*d,u=a*f,_=o*d,y=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=u+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+u*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*d,u=l*f,_=c*d,y=c*f;t[0]=h+y*o,t[4]=_*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=u*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*d,u=l*f,_=c*d,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=_+u*o,t[1]=u+_*o,t[5]=a*d,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*d,u=a*f,_=o*d,y=o*f;t[0]=l*d,t[4]=_*c-u,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=u*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,u=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-h*f,t[8]=_*f+u,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=u*f+_,t[10]=h-y*f}else if(e.order==="XZY"){let h=a*l,u=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+y,t[5]=a*d,t[9]=u*f-_,t[2]=_*f-u,t[6]=o*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bu,e,wu)}lookAt(e,t,i){let s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ki.crossVectors(i,ii),Ki.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ki.crossVectors(i,ii)),Ki.normalize(),vr.crossVectors(ii,Ki),s[0]=Ki.x,s[4]=vr.x,s[8]=ii.x,s[1]=Ki.y,s[5]=vr.y,s[9]=ii.y,s[2]=Ki.z,s[6]=vr.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],u=i[13],_=i[2],y=i[6],g=i[10],p=i[14],E=i[3],R=i[7],M=i[11],w=i[15],S=s[0],A=s[4],x=s[8],T=s[12],N=s[1],O=s[5],k=s[9],G=s[13],D=s[2],V=s[6],J=s[10],Z=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=a*S+o*N+l*D+c*ie,r[4]=a*A+o*O+l*V+c*X,r[8]=a*x+o*k+l*J+c*Q,r[12]=a*T+o*G+l*Z+c*te,r[1]=d*S+f*N+h*D+u*ie,r[5]=d*A+f*O+h*V+u*X,r[9]=d*x+f*k+h*J+u*Q,r[13]=d*T+f*G+h*Z+u*te,r[2]=_*S+y*N+g*D+p*ie,r[6]=_*A+y*O+g*V+p*X,r[10]=_*x+y*k+g*J+p*Q,r[14]=_*T+y*G+g*Z+p*te,r[3]=E*S+R*N+M*D+w*ie,r[7]=E*A+R*O+M*V+w*X,r[11]=E*x+R*k+M*J+w*Q,r[15]=E*T+R*G+M*Z+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],u=e[14],_=e[3],y=e[7],g=e[11],p=e[15],E=l*u-c*h,R=o*u-c*f,M=o*h-l*f,w=a*u-c*d,S=a*h-l*d,A=a*f-o*d;return t*(y*E-g*R+p*M)-i*(_*E-g*w+p*S)+s*(_*R-y*w+p*A)-r*(_*M-y*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],u=e[11],_=e[12],y=e[13],g=e[14],p=e[15],E=t*o-i*a,R=t*l-s*a,M=t*c-r*a,w=i*l-s*o,S=i*c-r*o,A=s*c-r*l,x=d*y-f*_,T=d*g-h*_,N=d*p-u*_,O=f*g-h*y,k=f*p-u*y,G=h*p-u*g,D=E*G-R*k+M*O+w*N-S*T+A*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/D;return e[0]=(o*G-l*k+c*O)*V,e[1]=(s*k-i*G-r*O)*V,e[2]=(y*A-g*S+p*w)*V,e[3]=(h*S-f*A-u*w)*V,e[4]=(l*N-a*G-c*T)*V,e[5]=(t*G-s*N+r*T)*V,e[6]=(g*M-_*A-p*R)*V,e[7]=(d*A-h*M+u*R)*V,e[8]=(a*k-o*N+c*x)*V,e[9]=(i*N-t*k-r*x)*V,e[10]=(_*S-y*M+p*E)*V,e[11]=(f*M-d*S-u*E)*V,e[12]=(o*T-a*O-l*x)*V,e[13]=(t*O-i*T+s*x)*V,e[14]=(y*R-_*w-g*E)*V,e[15]=(d*w-f*R+h*E)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,h=r*c,u=r*d,_=r*f,y=a*d,g=a*f,p=o*f,E=l*c,R=l*d,M=l*f,w=i.x,S=i.y,A=i.z;return s[0]=(1-(y+p))*w,s[1]=(u+M)*w,s[2]=(_-R)*w,s[3]=0,s[4]=(u-M)*S,s[5]=(1-(h+p))*S,s[6]=(g+E)*S,s[7]=0,s[8]=(_+R)*A,s[9]=(g-E)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Dn.set(s[0],s[1],s[2]).length(),o=Dn.set(s[4],s[5],s[6]).length(),l=Dn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_i.copy(this);let c=1/a,d=1/o,f=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=d,_i.elements[5]*=d,_i.elements[6]*=d,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=yi,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),u=(i+s)/(i-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===yi)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Kn)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=yi,l=!1){let c=this.elements,d=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),u=-(i+s)/(i-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===yi)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Kn)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sa.prototype.isMatrix4=!0;var Qe=Sa,Dn=new L,_i=new Qe,bu=new L(0,0,0),wu=new L(1,1,1),Ki=new L,vr=new L,ii=new L,Bc=new Qe,zc=new ri,Si=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eu=0,kc=new L,Un=new ri,Fi=new Qe,xr=new L,As=new L,Tu=new L,Au=new ri,Vc=new L(1,0,0),Hc=new L(0,1,0),Gc=new L(0,0,1),Wc={type:"added"},Cu={type:"removed"},On={type:"childadded",child:null},Vo={type:"childremoved",child:null},At=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Si,i=new ri,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ne}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(As,xr,this.up):Fi.lookAt(xr,As,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Un.setFromRotationMatrix(Fi),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),On.child=e,this.dispatchEvent(On),On.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),On.child=e,this.dispatchEvent(On),On.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),u=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),u.length>0&&(i.animations=u),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ru={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&h>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=Ul(e,1),t=Be(t,0,1),i=Be(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ho(a,r,e+1/3),this.g=Ho(a,r,e),this.b=Ho(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return We.workingToColorSpace(Ot.copy(this),e),Math.round(Be(Ot.r*255,0,255))*65536+Math.round(Be(Ot.g*255,0,255))*256+Math.round(Be(Ot.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Ft){We.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(yr);let i=Ls($i.h,yr.h,t),s=Ls($i.s,yr.s,t),r=Ls($i.l,yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Ce;Ce.NAMES=Gh;var Fs=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vi=new L,Bi=new L,Go=new L,zi=new L,Fn=new L,Bn=new L,Xc=new L,Wo=new L,Xo=new L,qo=new L,Yo=new dt,Zo=new dt,Jo=new dt,nn=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vi.subVectors(s,t),Bi.subVectors(i,t),Go.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(Bi),l=vi.dot(Go),c=Bi.dot(Bi),d=Bi.dot(Go),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(c*l-o*d)*h,_=(a*d-o*l)*h;return r.set(1-u-_,_,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Yo.setScalar(0),Zo.setScalar(0),Jo.setScalar(0),Yo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,i),Jo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(e,t,i,s){return vi.subVectors(i,t),Bi.subVectors(e,t),vi.cross(Bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),vi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Fn.subVectors(s,i),Bn.subVectors(r,i),Wo.subVectors(e,i);let l=Fn.dot(Wo),c=Bn.dot(Wo);if(l<=0&&c<=0)return t.copy(i);Xo.subVectors(e,s);let d=Fn.dot(Xo),f=Bn.dot(Xo);if(d>=0&&f<=d)return t.copy(s);let h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(Fn,a);qo.subVectors(e,r);let u=Fn.dot(qo),_=Bn.dot(qo);if(_>=0&&u<=_)return t.copy(r);let y=u*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Bn,o);let g=d*_-u*f;if(g<=0&&f-d>=0&&u-_>=0)return Xc.subVectors(r,s),o=(f-d)/(f-d+(u-_)),t.copy(s).addScaledVector(Xc,o);let p=1/(g+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(Fn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Sr.subVectors(this.max,Cs),zn.subVectors(e.a,Cs),kn.subVectors(e.b,Cs),Vn.subVectors(e.c,Cs),Qi.subVectors(kn,zn),en.subVectors(Vn,kn),_n.subVectors(zn,Vn);let t=[0,-Qi.z,Qi.y,0,-en.z,en.y,0,-_n.z,_n.y,Qi.z,0,-Qi.x,en.z,0,-en.x,_n.z,0,-_n.x,-Qi.y,Qi.x,0,-en.y,en.x,0,-_n.y,_n.x,0];return!jo(t,zn,kn,Vn,Sr)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,zn,kn,Vn,Sr))?!1:(br.crossVectors(Qi,en),t=[br.x,br.y,br.z],jo(t,zn,kn,Vn,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new L,new L,new L,new L,new L,new L,new L,new L],xi=new L,Mr=new ai,zn=new L,kn=new L,Vn=new L,Qi=new L,en=new L,_n=new L,Cs=new L,Sr=new L,br=new L,vn=new L;function jo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){vn.fromArray(n,r);let o=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),d=i.dot(vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var _t=new L,wr=new Ee,Pu=0,Ht=class extends Mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Bs=class extends Ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zs=class extends Ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Gt=class extends Ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},Iu=new ai,Rs=new L,Ko=new L,ss=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Iu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Ko)),this.expandByPoint(Rs.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lu=0,hi=new Qe,$o=new At,Hn=new L,ni=new ai,Ps=new ai,Et=new L,$t=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?zs:Bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(ni.min,Ps.min),ni.expandByPoint(Et),Et.addVectors(ni.max,Ps.max),ni.expandByPoint(Et)):(ni.expandByPoint(Ps.min),ni.expandByPoint(Ps.max))}ni.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Et.fromBufferAttribute(o,c),l&&(Hn.fromBufferAttribute(e,c),Et.add(Hn)),s=Math.max(s,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ht(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new L,l[x]=new L;let c=new L,d=new L,f=new L,h=new Ee,u=new Ee,_=new Ee,y=new L,g=new L;function p(x,T,N){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,N),h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,T),_.fromBufferAttribute(r,N),d.sub(c),f.sub(c),u.sub(h),_.sub(h);let O=1/(u.x*_.y-_.x*u.y);isFinite(O)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(O),g.copy(f).multiplyScalar(u.x).addScaledVector(d,-_.x).multiplyScalar(O),o[x].add(y),o[T].add(y),o[N].add(y),l[x].add(g),l[T].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,T=E.length;x<T;++x){let N=E[x],O=N.start,k=N.count;for(let G=O,D=O+k;G<D;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let R=new L,M=new L,w=new L,S=new L;function A(x){w.fromBufferAttribute(s,x),S.copy(w);let T=o[x];R.copy(T),R.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(S,T);let O=M.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,O)}for(let x=0,T=E.length;x<T;++x){let N=E[x],O=N.start,k=N.count;for(let G=O,D=O+k;G<D;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,u=i.count;h<u;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,d=new L,f=new L;if(e)for(let h=0,u=e.count;h<u;h+=3){let _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d),u=0,_=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*d;for(let p=0;p<d;p++)h[_++]=c[u++]}return new Ht(h,d,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){let h=c[d],u=e(h,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){let u=c[f];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=new L,Nu=new L,Du=new Ne,Rt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qo.subVectors(i,t).cross(Nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Du.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Uu=0,yt=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=ds,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Rt().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$r=class extends yt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Vi=new L,el=new L,Er=new L,Tr=new L,Mn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){el.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=Tr.dot(this.direction),l=-Tr.dot(Er),c=Tr.lengthSq(),d=Math.abs(1-a*a),f,h,u,_;if(d>0)if(f=a*l-o,h=a*o-l,_=r*d,f>=0)if(h>=-_)if(h<=_){let y=1/d;f*=y,h*=y,u=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),u=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(el).addScaledVector(Er,h),u}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,h=e.y-a.y,u=e.z-a.z,_=t.x-a.x,y=t.y-a.y,g=t.z-a.z,p=i.x-a.x,E=i.y-a.y,R=i.z-a.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(d),A,x,T,N,O,k,G,D,V,J,Z,ie;if(M>=w&&M>=S?(T=l,k=f,V=_,ie=p,l>=0?(A=c,x=d,N=h,O=u,G=y,D=g,J=E,Z=R):(A=d,x=c,N=u,O=h,G=g,D=y,J=R,Z=E)):w>=S?(T=c,k=h,V=y,ie=E,c>=0?(A=d,x=l,N=u,O=f,G=g,D=_,J=R,Z=p):(A=l,x=d,N=f,O=u,G=_,D=g,J=p,Z=R)):(T=d,k=u,V=g,ie=R,d>=0?(A=l,x=c,N=f,O=h,G=_,D=y,J=p,Z=E):(A=c,x=l,N=h,O=f,G=y,D=_,J=E,Z=p)),T===0)return null;let X=A/T,Q=x/T,te=1/T,Re=N-X*k,Te=O-Q*k,st=G-X*V,Xe=D-Q*V,Ze=J-X*ie,q=Z-Q*ie,$=Ze*Xe-q*st,ve=Re*q-Te*Ze,De=st*Te-Xe*Re;if(s){if($<0||ve<0||De<0)return null}else if(($<0||ve<0||De<0)&&($>0||ve>0||De>0))return null;let ge=$+ve+De;if(ge===0)return null;let ze=te*($*k+ve*V+De*ie);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rs=class extends yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=sr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qc=new Qe,xn=new Mn,Ar=new ss,Yc=new L,Cr=new L,Rr=new L,Pr=new L,tl=new L,Ir=new L,Zc=new L,Lr=new L,Bt=class extends At{constructor(e=new $t,t=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],f=r[l];d!==0&&(tl.fromBufferAttribute(f,e),a?Ir.addScaledVector(tl,d):Ir.addScaledVector(tl.sub(t),d))}t.add(Ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),xn.copy(e.ray).recast(e.near),!(Ar.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Ar,Yc)===null||xn.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&(qc.copy(r).invert(),xn.copy(e.ray).applyMatrix4(qc),!(i.boundingBox!==null&&xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let g=h[_],p=a[g.materialIndex],E=Math.max(g.start,u.start),R=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let M=E,w=R;M<w;M+=3){let S=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);s=Nr(this,p,e,i,c,d,f,S,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=_,p=y;g<p;g+=3){let E=o.getX(g),R=o.getX(g+1),M=o.getX(g+2);s=Nr(this,a,e,i,c,d,f,E,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let g=h[_],p=a[g.materialIndex],E=Math.max(g.start,u.start),R=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let M=E,w=R;M<w;M+=3){let S=M,A=M+1,x=M+2;s=Nr(this,p,e,i,c,d,f,S,A,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=_,p=y;g<p;g+=3){let E=g,R=g+1,M=g+2;s=Nr(this,a,e,i,c,d,f,E,R,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ou(n,e,t,i,s,r,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===hn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:n}}function Nr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Cr),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Pr);let d=Ou(n,e,t,i,Cr,Rr,Pr,Zc);if(d){let f=new L;nn.getBarycoord(Zc,Cr,Rr,Pr,f),s&&(d.uv=nn.getInterpolatedAttribute(s,o,l,c,f,new Ee)),r&&(d.uv1=nn.getInterpolatedAttribute(r,o,l,c,f,new Ee)),a&&(d.normal=nn.getInterpolatedAttribute(a,o,l,c,f,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new L,materialIndex:0};nn.getNormal(Cr,Rr,Pr,h.normal),d.face=h,d.barycoord=f}return d}var Qr=class extends Wt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Tt,d=Tt,f,h){super(null,a,o,l,c,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=new ss,Fu=new Ee(.5,.5),Dr=new L,as=class{constructor(e=new Rt,t=new Rt,i=new Rt,s=new Rt,r=new Rt,a=new Rt){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],h=r[6],u=r[7],_=r[8],y=r[9],g=r[10],p=r[11],E=r[12],R=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,u-d,p-_,w-E).normalize(),s[1].setComponents(c+a,u+d,p+_,w+E).normalize(),s[2].setComponents(c+o,u+f,p+y,w+R).normalize(),s[3].setComponents(c-o,u-f,p-y,w-R).normalize(),i)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,u-h,p-g,w-M).normalize();else if(s[4].setComponents(c-l,u-h,p-g,w-M).normalize(),t===yi)s[5].setComponents(c+l,u+h,p+g,w+M).normalize();else if(t===Kn)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){yn.center.set(0,0,0);let t=Fu.distanceTo(e.center);return yn.radius=.7071067811865476+t,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var ea=class extends yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Vs=class extends Wt{constructor(e=[],t=dn,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var rn=class extends Wt{constructor(e,t,i=bi,s,r,a,o=Tt,l=Tt,c,d=Ii,f=1){if(d!==Ii&&d!==fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends rn{constructor(e,t=bi,i=dn,s,r,a=Tt,o=Tt,l,c=Ii){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},os=class n extends $t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],f=[],h=0,u=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function _(y,g,p,E,R,M,w,S,A,x,T){let N=M/A,O=w/x,k=M/2,G=w/2,D=S/2,V=A+1,J=x+1,Z=0,ie=0,X=new L;for(let Q=0;Q<J;Q++){let te=Q*O-G;for(let Re=0;Re<V;Re++){let Te=Re*N-k;X[y]=Te*E,X[g]=te*R,X[p]=D,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=S>0?1:-1,d.push(X.x,X.y,X.z),f.push(Re/A),f.push(1-Q/x),Z+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<A;te++){let Re=h+te+V*Q,Te=h+te+V*(Q+1),st=h+(te+1)+V*(Q+1),Xe=h+(te+1)+V*Q;l.push(Re,Te,Xe),l.push(Te,st,Xe),ie+=6}o.addGroup(u,ie,T),u+=ie,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gs=class n extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,f=e/o,h=t/l,u=[],_=[],y=[],g=[];for(let p=0;p<d;p++){let E=p*h-a;for(let R=0;R<c;R++){let M=R*f-r;_.push(M,-E,0),y.push(0,0,1),g.push(R/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let R=E+c*p,M=E+c*(p+1),w=E+1+c*(p+1),S=E+1+c*p;u.push(R,M,S),u.push(M,w,S)}this.setIndex(u),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ia=class extends yt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function An(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Jc(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Jc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function zt(n){let e={};for(let t=0;t<n.length;t++){let i=An(n[t]);for(let s in i)e[s]=i[s]}return e}function Jc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bu(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Wh={clone:An,merge:zt},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=An(e.uniforms),this.uniformsGroups=Bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ce().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Qe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ws=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xs=class extends yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},na=class extends Xs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Sn=class extends yt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=sr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sa=class extends yt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ra=class extends yt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},aa=class extends yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=sr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qs=class extends yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ys=class extends yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},oa=class extends yt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wi,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends ks{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Gn(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function il(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var an=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends an{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=e,o=2*t-i;break;case ol:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case al:a=e,l=2*i-t;break;case ol:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,_=(i-t)/(s-t),y=_*_,g=y*_,p=-h*g+2*h*y-h*_,E=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*_+1,R=(-1-u)*g+(1.5+u)*y+.5*_,M=u*g-u*y;for(let w=0;w!==o;++w)r[w]=p*a[d+w]+E*a[c+w]+R*a[l+w]+M*a[f+w];return r}},ha=class extends an{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),f=1-d;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*d;return r}},da=class extends an{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ua=class extends an{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let _=(i-t)/(s-t),y=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*_;return r}let h=o*2,u=e-1;for(let _=0;_!==o;++_){let y=a[c+_],g=a[l+_],p=u*h+_*2,E=f[p],R=f[p+1],M=e*h+_*2,w=d[M],S=d[M+1],A=Hu(i,t,E,w,s);r[_]=Xh(A,y,R,S,g)}return r}};function Xh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Vu(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Hu(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Xh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Vu(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var oi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gn(t,this.TimeBufferType),this.values=Gn(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Gn(e.times,Array),values:Gn(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),il(e.settings)&&(i.settings={inTangents:Gn(e.settings.inTangents,Array),outTangents:Gn(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ns:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;il(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Le("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Le("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Le("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,u=f+i;for(let _=0;_!==i;++_){let y=t[f+_];if(y!==t[h+_]||y!==t[u+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let u=0;u!==i;++u)t[h+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Zr;var on=class extends oi{constructor(e,t,i){super(e,t,i)}};on.prototype.ValueTypeName="bool";on.prototype.ValueBufferType=Array;on.prototype.DefaultInterpolation=Ns;on.prototype.InterpolantFactoryMethodLinear=void 0;on.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends oi{constructor(e,t,i,s){super(e,t,i,s)}};fa.prototype.ValueTypeName="color";var pa=class extends oi{constructor(e,t,i,s){super(e,t,i,s)}};pa.prototype.ValueTypeName="number";var ma=class extends an{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zs=class extends oi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ln=class extends oi{constructor(e,t,i){super(e,t,i)}};ln.prototype.ValueTypeName="string";ln.prototype.ValueBufferType=Array;ln.prototype.DefaultInterpolation=Ns;ln.prototype.InterpolantFactoryMethodLinear=void 0;ln.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends oi{constructor(e,t,i,s){super(e,t,i,s)}};ga.prototype.ValueTypeName="vector";var Jn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Kc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Kc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Kc(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _a=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qh=new _a,Li=class{constructor(e){this.manager=e!==void 0?e:qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},ll=class extends Error{constructor(e,t){super(e),this.response=t}},ls=class extends Li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:i,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=Hi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=h?parseInt(h):0,_=u!==0,y=0,g=new ReadableStream({start(p){E();function E(){f.read().then(({done:R,value:M})=>{if(R)p.close();else{y+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:u});for(let S=0,A=d.length;S<A;S++){let x=d[S];x.onProgress&&x.onProgress(w)}p.enqueue(M),E()}},R=>{p.error(R)})}}});return new Response(g)}else throw new ll(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(h);return c.arrayBuffer().then(_=>u.decode(_))}}}).then(c=>{Jn.add(`file:${e}`,c);let d=Hi[e];delete Hi[e];for(let f=0,h=d.length;f<h;f++){let u=d[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{let d=Hi[e];if(d===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let f=0,h=d.length;f<h;f++){let u=d[f];u.onError&&u.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Wn=new WeakMap,va=class extends Li{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Wn.get(a);f===void 0&&(f=[],Wn.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=$n("img");function l(){d(),t&&t(this);let f=Wn.get(this)||[];for(let h=0;h<f.length;h++){let u=f[h];u.onLoad&&u.onLoad(this)}Wn.delete(this),r.manager.itemEnd(e)}function c(f){d(),s&&s(f),Jn.remove(`image:${e}`);let h=Wn.get(this)||[];for(let u=0;u<h.length;u++){let _=h[u];_.onError&&_.onError(f)}Wn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Js=class extends Li{constructor(e){super(e)}load(e,t,i,s){let r=new Wt,a=new va(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},js=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ks=class extends js{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nl=new Qe,$c=new L,Qc=new L,xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Kn||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ur=new L,Or=new ri,Ri=new L,$s=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ur,Or,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Or,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ur,Or,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Or,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tn=new L,eh=new Ee,th=new Ee,jt=class extends $s{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tn.x,tn.y).multiplyScalar(-e/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-e/tn.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var cn=class extends $s{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cl=class extends xa{constructor(){super(new cn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ih={},er=class n extends Li{constructor(e){super(e),this.textures={}}load(e,t,i,s){let r=this,a=new ls(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):Le(l),r.manager.itemError(e)}},i,s)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return n.createMaterialFromType(e)}static createMaterialFromType(e){let i={ShadowMaterial:ia,SpriteMaterial:$r,RawShaderMaterial:Ws,ShaderMaterial:Qt,PointsMaterial:ea,MeshPhysicalMaterial:na,MeshStandardMaterial:Xs,MeshPhongMaterial:Sn,MeshToonMaterial:sa,MeshNormalMaterial:ra,MeshLambertMaterial:aa,MeshDepthMaterial:qs,MeshDistanceMaterial:Ys,MeshBasicMaterial:rs,MeshMatcapMaterial:oa,LineDashedMaterial:la,LineBasicMaterial:ks,Material:yt,...ih}[e],s;return i===void 0?(sn(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new yt):s=new i,s}static registerMaterial(e,t){ih[e]=t}},tr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xn=-90,qn=1,ya=class extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(Xn,qn,e,t);s.layers=this.layers,this.add(s);let r=new jt(Xn,qn,e,t);r.layers=this.layers,this.add(r);let a=new jt(Xn,qn,e,t);a.layers=this.layers,this.add(a);let o=new jt(Xn,qn,e,t);o.layers=this.layers,this.add(o);let l=new jt(Xn,qn,e,t);l.layers=this.layers,this.add(l);let c=new jt(Xn,qn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ma=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bl="\\[\\]\\.:\\/",Gu=new RegExp("["+Bl+"]","g"),zl="[^"+Bl+"]",Wu="[^"+Bl.replace("\\.","")+"]",Xu=/((?:WC+[\/:])*)/.source.replace("WC",zl),qu=/(WCOD+)?/.source.replace("WCOD",Wu),Yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),Ju=new RegExp("^"+Xu+qu+Yu+Zu+"$"),ju=["material","materials","bones","map"],hl=class{constructor(e,t,i){let s=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gu,"")}static parseTrackName(e){let t=Ju.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ju.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=hl;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ev=new Float32Array(1);var nh=new Qe,bn=class{constructor(e,t,i=0,s=1/0){this.ray=new Mn(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(e,t=!0,i=[]){return dl(e,this,i,t),i.sort(sh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)dl(e[s],this,i,t);return i.sort(sh),i}};function sh(n,e){return n.distance-e.distance}function dl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)dl(r[a],e,t,!0)}}var cs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Be(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Xl=class Xl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Xl.prototype.isMatrix2=!0;var ul=Xl;var ir=class extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function kl(n,e,t,i){let s=Ku(i);switch(t){case Pl:return n*e;case Ll:return n*e/s.components*s.byteLength;case Ra:return n*e/s.components*s.byteLength;case pn:return n*e*2/s.components*s.byteLength;case Pa:return n*e*2/s.components*s.byteLength;case Il:return n*e*3/s.components*s.byteLength;case ui:return n*e*4/s.components*s.byteLength;case Ia:return n*e*4/s.components*s.byteLength;case or:case lr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cr:case hr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case La:case Da:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Fa:case za:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:case dr:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case to:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case io:case no:case so:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ro:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ur:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ku(n){switch(n){case ei:case Tl:return{byteLength:1,components:1};case us:case Al:case Ei:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case bi:case Ta:case wi:return{byteLength:4,components:1};case Cl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function pd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qu(n){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((u,_)=>u.start-_.start);let h=0;for(let u=1;u<f.length;u++){let _=f[h],y=f[u];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let u=0,_=f.length;u<_;u++){let y=f[u];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:df,beginnormal_vertex:uf,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:vf,clipping_planes_vertex:xf,color_fragment:yf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:bf,common:wf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:Cf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Lf,envmap_fragment:Nf,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Yf,envmap_vertex:Ff,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:jf,lights_phong_pars_fragment:Kf,lights_physical_fragment:$f,lights_physical_pars_fragment:Qf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:ip,lightprobes_pars_fragment:np,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:dp,metalnessmap_fragment:up,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:xp,normal_fragment_maps:yp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Ip,project_vertex:Lp,dithering_fragment:Np,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:kp,skinbase_vertex:Vp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:jp,uv_pars_fragment:Kp,uv_pars_vertex:$p,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:im,backgroundCube_vert:nm,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distance_vert:cm,distance_frag:hm,equirect_vert:dm,equirect_frag:um,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:xm,meshmatcap_frag:ym,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Cm,points_vert:Rm,points_frag:Pm,shadow_vert:Im,shadow_frag:Lm,sprite_vert:Nm,sprite_frag:Dm},de={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Ui={basic:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:zt([de.points,de.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:zt([de.common,de.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:zt([de.sprite,de.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:zt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:zt([de.lights,de.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Ui.physical={uniforms:zt([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var ho={r:0,b:0,g:0},Um=new Qe,md=new Ne;md.set(-1,0,0,0,1,0,0,0,1);function Om(n,e,t,i,s,r){let a=new Ce(0),o=s===!0?0:1,l,c,d=null,f=0,h=null;function u(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let M=E.backgroundBlurriness>0;R=e.get(R,M)}return R}function _(E){let R=!1,M=u(E);M===null?g(a,o):M&&M.isColor&&(g(M,1),R=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(E,R){let M=u(R);M&&(M.isCubeTexture||M.mapping===rr)?(c===void 0&&(c=new Bt(new os(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:An(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(md),c.material.toneMapped=We.getTransfer(M.colorSpace)!==Ke,(d!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Bt(new Gs(2,2),new Qt({name:"BackgroundMaterial",uniforms:An(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=We.getTransfer(M.colorSpace)!==Ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,R){E.getRGB(ho,Fl(n)),t.buffers.color.setClear(ho.r,ho.g,ho.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:_,addToRenderList:y,dispose:p}}function Fm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(O,k,G,D,V){let J=!1,Z=f(O,D,G,k);r!==Z&&(r=Z,c(r.object)),J=u(O,D,G,V),J&&_(O,D,G,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(O,k,G,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function d(O){return n.deleteVertexArray(O)}function f(O,k,G,D){let V=D.wireframe===!0,J=i[k.id];J===void 0&&(J={},i[k.id]=J);let Z=O.isInstancedMesh===!0?O.id:0,ie=J[Z];ie===void 0&&(ie={},J[Z]=ie);let X=ie[G.id];X===void 0&&(X={},ie[G.id]=X);let Q=X[V];return Q===void 0&&(Q=h(l()),X[V]=Q),Q}function h(O){let k=[],G=[],D=[];for(let V=0;V<t;V++)k[V]=0,G[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:D,object:O,attributes:{},index:null}}function u(O,k,G,D){let V=r.attributes,J=k.attributes,Z=0,ie=G.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=V[X],Re=J[X];if(Re===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(Re=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(Re=O.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function _(O,k,G,D){let V={},J=k.attributes,Z=0,ie=G.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=J[X];te===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(te=O.instanceColor));let Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),V[X]=Re,Z++}r.attributes=V,r.attributesNum=Z,r.index=D}function y(){let O=r.newAttributes;for(let k=0,G=O.length;k<G;k++)O[k]=0}function g(O){p(O,0)}function p(O,k){let G=r.newAttributes,D=r.enabledAttributes,V=r.attributeDivisors;G[O]=1,D[O]===0&&(n.enableVertexAttribArray(O),D[O]=1),V[O]!==k&&(n.vertexAttribDivisor(O,k),V[O]=k)}function E(){let O=r.newAttributes,k=r.enabledAttributes;for(let G=0,D=k.length;G<D;G++)k[G]!==O[G]&&(n.disableVertexAttribArray(G),k[G]=0)}function R(O,k,G,D,V,J,Z){Z===!0?n.vertexAttribIPointer(O,k,G,V,J):n.vertexAttribPointer(O,k,G,D,V,J)}function M(O,k,G,D){y();let V=D.attributes,J=G.getAttributes(),Z=k.defaultAttributeValues;for(let ie in J){let X=J[ie];if(X.location>=0){let Q=V[ie];if(Q===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){let te=Q.normalized,Re=Q.itemSize,Te=e.get(Q);if(Te===void 0)continue;let st=Te.buffer,Xe=Te.type,Ze=Te.bytesPerElement,q=Xe===n.INT||Xe===n.UNSIGNED_INT||Q.gpuType===Ta;if(Q.isInterleavedBufferAttribute){let $=Q.data,ve=$.stride,De=Q.offset;if($.isInstancedInterleavedBuffer){for(let ge=0;ge<X.locationSize;ge++)p(X.location+ge,$.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ge=0;ge<X.locationSize;ge++)g(X.location+ge);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ge=0;ge<X.locationSize;ge++)R(X.location+ge,Re/X.locationSize,Xe,te,ve*Ze,(De+Re/X.locationSize*ge)*Ze,q)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<X.locationSize;$++)p(X.location+$,Q.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<X.locationSize;$++)g(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,st);for(let $=0;$<X.locationSize;$++)R(X.location+$,Re/X.locationSize,Xe,te,Re*Ze,Re/X.locationSize*$*Ze,q)}}else if(Z!==void 0){let te=Z[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}E()}function w(){T();for(let O in i){let k=i[O];for(let G in k){let D=k[G];for(let V in D){let J=D[V];for(let Z in J)d(J[Z].object),delete J[Z];delete D[V]}}delete i[O]}}function S(O){if(i[O.id]===void 0)return;let k=i[O.id];for(let G in k){let D=k[G];for(let V in D){let J=D[V];for(let Z in J)d(J[Z].object),delete J[Z];delete D[V]}}delete i[O.id]}function A(O){for(let k in i){let G=i[k];for(let D in G){let V=G[D];if(V[O.id]===void 0)continue;let J=V[O.id];for(let Z in J)d(J[Z].object),delete J[Z];delete V[O.id]}}}function x(O){for(let k in i){let G=i[k],D=O.isInstancedMesh===!0?O.id:0,V=G[D];if(V!==void 0){for(let J in V){let Z=V[J];for(let ie in Z)d(Z[ie].object),delete Z[ie];delete V[J]}delete G[D],Object.keys(G).length===0&&delete i[k]}}}function T(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function Bm(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let u=0;u<d;u++)h+=c[u];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==ui&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ei&&A!==wi&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:M,maxSamples:w,samples:S}}function km(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Rt,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||i!==0||s;return s=h,i=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){let _=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!g)r?d(null):c();else{let E=r?0:i,R=E*4,M=p.clippingState||null;l.value=M,M=d(_,h,R,u);for(let w=0;w!==R;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,u,_){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,_!==!0||g===null){let p=u+y*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,M=u;R!==y;++R,M+=4)a.copy(f[R]).applyMatrix4(E,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var gs=4,Vm=6,Hm=20,Gm=256,fr=new cn,Yh=new Ce,ql=null,Yl=0,Zl=0,Jl=!1,Wm=new L,Cn=new L,fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Wm}=r;ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,Zl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dn||e.mapping===Tn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ei,format:ui,colorSpace:Ds,depthBuffer:!1},s=Zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Xm(r)),this._blurMaterial=Ym(r,e,t),this._ggxMaterial=qm(r,e,t)}return s}_compileMaterial(e){let t=new Bt(new $t,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,i,s,r){let l=new jt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Yh),f.toneMapping=li,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new os,new rs({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy(Yh),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let w=this._cubeSize;ms(s,M*w,R>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=u,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===dn||e.mapping===Tn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=c*1.25,u=f*h,{_lodMax:_}=this,y=this._sizeLods[i],g=3*y*(i>_-gs?i-_+gs:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=_-t,ms(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,ms(e,g,p,3*y,2*y),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],f=3*d*(s>this._lodMax-gs?s-this._lodMax+gs:0),h=4*(this._cubeSize-d);ms(t,f,h,3*d,2*d),a.setRenderTarget(t),a.render(l,fr)}};function Xm(n){let e=[],t=[],i=n,s=n-gs+1+Vm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,u=3,_=new Float32Array(u*h*f),y=new Float32Array(u*h*f);for(let p=0;p<f;p++){let E=p%3*2/3-1,R=p>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(M,u*h*p);for(let w=0;w<h;w++){let S=d[w*2]*2-1,A=d[w*2+1]*2-1;p===0?Cn.set(1,A,S):p===1?Cn.set(-S,1,-A):p===2?Cn.set(-S,A,1):p===3?Cn.set(-1,A,-S):p===4?Cn.set(-S,-1,A):Cn.set(S,A,-1),Cn.toArray(y,(p*h+w)*u)}}let g=new $t;g.setAttribute("position",new Ht(_,u)),g.setAttribute("outputDirection",new Ht(y,u)),t.push(new Bt(g,null)),i>gs&&i--}return{lodMeshes:t,sizeLods:e}}function Zh(n,e,t){let i=new Kt(n,e,t);return i.texture.mapping=rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qm(n,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ym(n,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:Hm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:go(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Jh(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function jh(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var po=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new os(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:An(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Ni});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===un&&(t.minFilter=Pt),new ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Zm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,u=!1){return h==null?null:u?a(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===ba||u===wa)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new po(_.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let u=h.mapping,_=u===ba||u===wa,y=u===dn||u===Tn;if(_||y){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new fo(n)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return _&&E&&E.height>0||y&&E&&l(E)?(i===null&&(i=new fo(n)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,u){return u===ba?h.mapping=dn:u===wa&&(h.mapping=Tn),h}function l(h){let u=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&u++;return u===_}function c(h){let u=h.target;u.removeEventListener("dispose",c);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Jm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&sn("WebGLRenderer: "+i+" extension not supported."),s}}}function jm(n,e,t,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let u=r.get(h);u&&(e.remove(u),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let u in h)e.update(h[u],n.ARRAY_BUFFER)}function c(f){let h=[],u=f.index,_=f.attributes.position,y=0;if(_===void 0)return;if(u!==null){let E=u.array;y=u.version;for(let R=0,M=E.length;R<M;R+=3){let w=E[R+0],S=E[R+1],A=E[R+2];h.push(w,S,S,A,A,w)}}else{let E=_.array;y=_.version;for(let R=0,M=E.length/3-1;R<M;R+=3){let w=R+0,S=R+1,A=R+2;h.push(w,S,S,A,A,w)}}let g=new(_.count>=65535?zs:Bs)(h,1);g.version=y;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function d(f){let h=r.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Km(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,u){u!==0&&(n.drawElementsInstanced(i,h,r,f*a,u),t.update(h,i,u))}function d(f,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,u);let y=0;for(let g=0;g<u;g++)y+=h[g];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function $m(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qm(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,h=i.get(o);if(h===void 0||h.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],R=0;u===!0&&(R=1),_===!0&&(R=2),y===!0&&(R=3);let M=o.attributes.position.count*R,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*w*4*f),A=new Os(S,M,w,f);A.type=wi,A.needsUpdate=!0;let x=R*4;for(let N=0;N<f;N++){let O=g[N],k=p[N],G=E[N],D=M*w*4*N;for(let V=0;V<O.count;V++){let J=V*x;u===!0&&(s.fromBufferAttribute(O,V),S[D+J+0]=s.x,S[D+J+1]=s.y,S[D+J+2]=s.z,S[D+J+3]=0),_===!0&&(s.fromBufferAttribute(k,V),S[D+J+4]=s.x,S[D+J+5]=s.y,S[D+J+6]=s.z,S[D+J+7]=0),y===!0&&(s.fromBufferAttribute(G,V),S[D+J+8]=s.x,S[D+J+9]=s.y,S[D+J+10]=s.z,S[D+J+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Ee(M,w)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let _=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function eg(n,e,t,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var tg={[vl]:"LINEAR_TONE_MAPPING",[xl]:"REINHARD_TONE_MAPPING",[yl]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function ig(n,e,t,i,s,r){let a=new Kt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new $t;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let d=new Ws({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(c,d),h=new cn(-1,1,1,-1,0,1),u=null,_=null,y=!1,g,p=null,E=[],R=!1;this.setSize=function(M,w){a.setSize(M,w),o!==null&&o.setSize(M,w),l!==null&&l.setSize(M,w);for(let S=0;S<E.length;S++){let A=E[S];A.setSize&&A.setSize(M,w)}},this.setEffects=function(M){E=M,R=E.length>0&&E[0].isRenderPass===!0;let w=a.width,S=a.height;E.length>0&&o===null&&(o=new Kt(w,S,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(w,S,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){let x=E[A];x.setSize&&x.setSize(w,S)}},this.begin=function(M,w){if(y||M.toneMapping===li&&E.length===0)return!1;if(p=w,w!==null){let S=w.width,A=w.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return R===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=li,!0},this.hasRenderPass=function(){return R},this.end=function(M,w){M.toneMapping=g,y=!0;let S=a,A=o;for(let x=0;x<E.length;x++){let T=E[x];T.enabled!==!1&&(T.render(M,A,S,w),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(u!==M.outputColorSpace||_!==M.toneMapping){u=M.outputColorSpace,_=M.toneMapping,d.defines={},We.getTransfer(u)===Ke&&(d.defines.SRGB_TRANSFER="");let x=tg[_];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var gd=new Wt,$l=new rn(1,1),_d=new Os,vd=new Kr,xd=new Vs,Kh=[],$h=[],Qh=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function vs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _o(n,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ng(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function og(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),St(t,i)}}function lg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),St(t,i)}}function cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),St(t,i)}}function hg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function pg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function vg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($l.compareFunction=t.isReversedDepthBuffer()?co:lo,r=$l):r=gd,t.setTexture2D(e||r,s)}function xg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vd,s)}function yg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xd,s)}function Mg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_d,s)}function Sg(n){switch(n){case 5126:return ng;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return dg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Mg}}function bg(n,e){n.uniform1fv(this.addr,e)}function wg(n,e){let t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function Eg(n,e){let t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function Tg(n,e){let t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ag(n,e){let t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cg(n,e){let t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rg(n,e){let t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pg(n,e){n.uniform1iv(this.addr,e)}function Ig(n,e){n.uniform2iv(this.addr,e)}function Lg(n,e){n.uniform3iv(this.addr,e)}function Ng(n,e){n.uniform4iv(this.addr,e)}function Dg(n,e){n.uniform1uiv(this.addr,e)}function Ug(n,e){n.uniform2uiv(this.addr,e)}function Og(n,e){n.uniform3uiv(this.addr,e)}function Fg(n,e){n.uniform4uiv(this.addr,e)}function Bg(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=$l:a=gd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function zg(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vd,r[a])}function kg(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function Vg(n,e,t){let i=this.cache,s=e.length,r=_o(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_d,r[a])}function Hg(n){switch(n){case 5126:return bg;case 35664:return wg;case 35665:return Eg;case 35666:return Tg;case 35674:return Ag;case 35675:return Cg;case 35676:return Rg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Ng;case 5125:return Dg;case 36294:return Ug;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}var Ql=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sg(t.type)}},ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}},tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},jl=/(\w+)(\])?(\[|\.)?/g;function id(n,e){n.seq.push(e),n.map[e.id]=e}function Gg(n,e,t){let i=n.name,s=i.length;for(jl.lastIndex=0;;){let r=jl.exec(i),a=jl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){id(t,c===void 0?new Ql(o,n,e):new ec(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tc(o),id(t,f)),t=f}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Gg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function nd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Wg=37297,Xg=0;function qg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var sd=new Ne;function Yg(n){We._getMatrix(sd,We.workingColorSpace,n);let e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case Us:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+qg(n.getShaderSource(e),o)}else return r}function Zg(n,e){let t=Yg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Jg={[vl]:"Linear",[xl]:"Reinhard",[yl]:"Cineon",[Ml]:"ACESFilmic",[bl]:"AgX",[wl]:"Neutral",[Sl]:"Custom"};function jg(n,e){let t=Jg[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uo=new L;function Kg(){We.getLuminanceCoefficients(uo);let n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Qg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function ad(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(t_,n_)}var i_=new Map;function n_(n,e){let t=Fe[e];if(t===void 0){let i=i_.get(e);if(i!==void 0)t=Fe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(s_,r_)}function r_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var a_={[wn]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function o_(n){return a_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[dn]:"ENVMAP_TYPE_CUBE",[Tn]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function c_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":l_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var h_={[Tn]:"ENVMAP_MODE_REFRACTION"};function d_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u_={[sr]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function f_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":u_[n.combine]||"ENVMAP_BLENDING_NONE"}function p_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function m_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=o_(t),c=c_(t),d=d_(t),f=f_(t),h=p_(t),u=$g(t),_=Qg(r),y=s.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(g=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Fe.tonemapping_pars_fragment:"",t.toneMapping!==li?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),Kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=ic(a),a=ad(a,t),a=od(a,t),o=ic(o),o=ad(o,t),o=od(o,t),a=ld(a),o=ld(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=E+g+a,M=E+p+o,w=nd(s,s.VERTEX_SHADER,R),S=nd(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(O){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(w)||"",D=s.getShaderInfoLog(S)||"",V=k.trim(),J=G.trim(),Z=D.trim(),ie=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,S);else{let Q=rd(s,w,"vertex"),te=rd(s,S,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+V+`
`+Q+`
`+te)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(J===""||Z==="")&&(X=!1);X&&(O.diagnostics={runnable:ie,programLog:V,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(w),s.deleteShader(S),x=new _s(s,y),T=e_(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(y,Wg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=S,this}var g_=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new sc(e),t.set(e,i)),i}},sc=class{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}};function __(n){return n===pn||n===dr||n===ur}function v_(n,e,t,i,s,r){let a=new is,o=new nc,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer,h=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,N,O,k,G){let D=O.fog,V=k.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||J,Z),X=ie&&ie.mapping===rr?ie.image.height:null,Q=u[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Re=te!==void 0?te.length:0,Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let st,Xe,Ze,q;if(Q){let at=Ui[Q];st=at.vertexShader,Xe=at.fragmentShader}else{st=x.vertexShader,Xe=x.fragmentShader;let at=o.getVertexShaderStage(x),Je=o.getFragmentShaderStage(x);o.update(x,at,Je),Ze=at.id,q=Je.id}let $=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),De=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,ze=!!x.map,xt=!!x.matcap,ke=!!ie,Ye=!!x.aoMap,rt=!!x.lightMap,Ge=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,wt=!!x.displacementMap,Jt=!!x.emissiveMap,ut=!!x.metalnessMap,mt=!!x.roughnessMap,I=x.anisotropy>0,Nt=x.clearcoat>0,$e=x.dispersion>0,b=x.retroreflectivity>0,m=x.iridescence>0,U=x.sheen>0,z=x.transmission>0,W=I&&!!x.anisotropyMap,se=Nt&&!!x.clearcoatMap,re=Nt&&!!x.clearcoatNormalMap,Y=Nt&&!!x.clearcoatRoughnessMap,K=m&&!!x.iridescenceMap,ae=m&&!!x.iridescenceThicknessMap,be=U&&!!x.sheenColorMap,he=U&&!!x.sheenRoughnessMap,oe=!!x.specularMap,we=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Ue=z&&!!x.transmissionMap,P=z&&!!x.thicknessMap,le=!!x.gradientMap,j=!!x.alphaMap,ce=x.alphaTest>0,pe=!!x.alphaHash,ee=!!x.extensions,Ae=li;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ae=n.toneMapping);let Me={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:Xe,defines:x.defines,customVertexShaderID:Ze,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:De,instancingColor:De&&k.instanceColor!==null,instancingMorph:De&&k.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:xt,envMap:ke,envMapMode:ke&&ie.mapping,envMapCubeUVHeight:X,aoMap:Ye,lightMap:rt,bumpMap:Ge,normalMap:ht,displacementMap:wt,emissiveMap:Jt,normalMapObjectSpace:ht&&x.normalMapType===Ph,normalMapTangentSpace:ht&&x.normalMapType===Wi,packedNormalMap:ht&&x.normalMapType===Wi&&__(x.normalMap.format),metalnessMap:ut,roughnessMap:mt,anisotropy:I,anisotropyMap:W,clearcoat:Nt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:Y,dispersion:$e,retroreflection:b,iridescence:m,iridescenceMap:K,iridescenceThicknessMap:ae,sheen:U,sheenColorMap:be,sheenRoughnessMap:he,specularMap:oe,specularColorMap:we,specularIntensityMap:Pe,transmission:z,transmissionMap:Ue,thicknessMap:P,gradientMap:le,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ce,alphaHash:pe,combine:x.combine,mapUv:ze&&_(x.map.channel),aoMapUv:Ye&&_(x.aoMap.channel),lightMapUv:rt&&_(x.lightMap.channel),bumpMapUv:Ge&&_(x.bumpMap.channel),normalMapUv:ht&&_(x.normalMap.channel),displacementMapUv:wt&&_(x.displacementMap.channel),emissiveMapUv:Jt&&_(x.emissiveMap.channel),metalnessMapUv:ut&&_(x.metalnessMap.channel),roughnessMapUv:mt&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:se&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(x.sheenRoughnessMap.channel),specularMapUv:oe&&_(x.specularMap.channel),specularColorMapUv:we&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:Ue&&_(x.transmissionMap.channel),thicknessMapUv:P&&_(x.thicknessMap.channel),alphaMapUv:j&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ht||I),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(ze||j),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Te,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===Ke,decodeVideoTextureEmissive:Jt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===Ke,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(p(T,x),E(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let T=u[x.type],N;if(T){let O=Ui[T];N=Wh.clone(O.uniforms)}else N=x.uniforms;return N}function M(x,T){let N=d.get(T);return N!==void 0?++N.usedTimes:(N=new m_(n,T,x,s),c.push(N),d.set(T,N)),N}function w(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:A}}function x_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function y_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,_,y,g,p){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:u,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},n[e]=E):(E.id=h.id,E.object=h,E.geometry=u,E.material=_,E.materialVariant=a(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=g,E.group=p),e++,E}function l(h,u,_,y,g,p,E){E.reversedDepth===!0&&(g=-g);let R=o(h,u,_,y,g,p);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):t.push(R)}function c(h,u,_,y,g,p){let E=o(h,u,_,y,g,p);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):t.unshift(E)}function d(h,u){t.length>1&&t.sort(h||y_),i.length>1&&i.sort(u||hd),s.length>1&&s.sort(u||hd)}function f(){for(let h=e,u=n.length;h<u;h++){let _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function M_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new dd,n.set(i,[a])):s>=r.length?(a=new dd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function b_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var w_=0;function E_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T_(n){let e=new S_,t=b_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new Qe,a=new Qe;function o(c){let d=0,f=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let u=0,_=0,y=0,g=0,p=0,E=0,R=0,M=0,w=0,S=0,A=0,x=0,T=0,N=0;c.sort(E_);for(let k=0,G=c.length;k<G;k++){let D=c[k],V=D.color,J=D.intensity,Z=D.distance,ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pn?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=V.r*J,f+=V.g*J,h+=V.b*J;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],J);N++}else if(D.isSunLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=te,i.sunShadowMap[_]=ie;let Re=Q.getViewportCount();for(let Te=0;Te<Re;Te++)i.sunShadowMatrix[y+Te]=Q.getMatrix(Te),i.sunShadowCascade[y+Te]=Q._cascadeData[Te];y+=Re,_++}i.sun[u]=X,u++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=D.shadow.matrix,w++}i.directional[g]=X,g++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(V).multiplyScalar(J),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[E]=X;let Q=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[E]=Q.matrix,D.castShadow){let te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[E]=te,i.spotShadowMap[E]=ie,A++}E++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(V).multiplyScalar(J),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[R]=X,R++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let Q=D.shadow,te=t.get(D);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=D.shadow.matrix,S++}i.point[p]=X,p++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(J),X.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[M]=X,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;let O=i.hash;(O.sunLength!==u||O.directionalLength!==g||O.pointLength!==p||O.spotLength!==E||O.rectAreaLength!==R||O.hemiLength!==M||O.numSunShadows!==_||O.numDirectionalShadows!==w||O.numPointShadows!==S||O.numSpotShadows!==A||O.numSpotMaps!==x||O.numLightProbes!==N)&&(i.sun.length=u,i.directional.length=g,i.spot.length=E,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=N,O.sunLength=u,O.directionalLength=g,O.pointLength=p,O.spotLength=E,O.rectAreaLength=R,O.hemiLength=M,O.numSunShadows=_,O.numDirectionalShadows=w,O.numPointShadows=S,O.numSpotShadows=A,O.numSpotMaps=x,O.numLightProbes=N,i.version=w_++)}function l(c,d){let f=0,h=0,u=0,_=0,y=0,g=0,p=d.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){let M=c[E];if(M.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(M.isSpotLight){let w=i.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function ud(n){let e=new T_(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function A_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ud(n),e.set(s,[o])):r>=a.length?(o=new ud(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,P_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],I_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],fd=new Qe,pr=new L,Kl=new L;function L_(n,e,t){let i=new as,s=new Ee,r=new Ee,a=new dt,o=new qs,l=new Ys,c={},d=t.maxTextureSize,f={[hn]:Yt,[Yt]:hn,[di]:di},h=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:C_,fragmentShader:R_}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let _=new $t;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wn;let p=this.type;this.render=function(S,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===oh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wn);let T=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ni),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=p!==this.type;G&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(V=>V.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,V=S.length;D<V;D++){let J=S[D],Z=J.shadow;if(Z===void 0){Ie("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ie=Z.getFrameExtents();s.multiply(ie),r.copy(Z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,Z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,Z.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=X,Z.map===null||G===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===hs){if(J.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Kt(s.x,s.y,{format:pn,type:Ei,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new rn(s.x,s.y,wi),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Ii,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Tt,Z.map.depthTexture.magFilter=Tt}else J.isPointLight?(Z.map=new po(s.x),Z.map.depthTexture=new ta(s.x,bi)):(Z.map=new Kt(s.x,s.y),Z.map.depthTexture=new rn(s.x,s.y,bi)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Ii,this.type===wn?(Z.map.depthTexture.compareFunction=X?co:lo,Z.map.depthTexture.minFilter=Pt,Z.map.depthTexture.magFilter=Pt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Tt,Z.map.depthTexture.magFilter=Tt);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let Q=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let te=0;te<Q;te++){let Re=Z.getCamera(te);if(J.isPointLight){let Te=Z.camera,st=Z.matrix,Xe=J.distance||Te.far;Xe!==Te.far&&(Te.far=Xe,Te.updateProjectionMatrix()),pr.setFromMatrixPosition(J.matrixWorld),Te.position.copy(pr),Kl.copy(Te.position),Kl.add(P_[te]),Te.up.copy(I_[te]),Te.lookAt(Kl),Te.updateMatrixWorld(),st.makeTranslation(-pr.x,-pr.y,-pr.z),fd.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(fd,Te.coordinateSystem,Te.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,te),n.clear();else{te===0&&(n.setRenderTarget(Z.map),n.clear());let Te=Z.getViewport(te);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),k.viewport(a)}i=Z.getFrustum(te),M(A,x,Re,J,this.type)}Z.isPointLightShadow!==!0&&this.type===hs&&E(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(T,N,O)};function E(S,A){let x=e.update(y);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null?S.mapPass=new Kt(s.x,s.y,{format:pn,type:Ei}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,x,h,y,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,x,u,y,null)}function R(S,A,x,T){let N=null,O=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)N=O;else if(N=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=N.uuid,G=A.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let V=D[G];V===void 0&&(V=N.clone(),D[G]=V,A.addEventListener("dispose",w)),N=V}if(N.visible=A.visible,N.wireframe=A.wireframe,T===hs?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:f[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=n.properties.get(N);k.light=x}return N}function M(S,A,x,T,N){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===hs)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let G=e.update(S),D=S.material;if(Array.isArray(D)){let V=G.groups;for(let J=0,Z=V.length;J<Z;J++){let ie=V[J],X=D[ie.materialIndex];if(X&&X.visible){let Q=R(S,X,T,N);S.onBeforeShadow(n,S,A,x,G,Q,ie),n.renderBufferDirect(x,null,G,Q,S,ie),S.onAfterShadow(n,S,A,x,G,Q,ie)}}}else if(D.visible){let V=R(S,D,T,N);S.onBeforeShadow(n,S,A,x,G,V,null),n.renderBufferDirect(x,null,G,V,S,null),S.onAfterShadow(n,S,A,x,G,V,null)}}let k=S.children;for(let G=0,D=k.length;G<D;G++)M(k[G],A,x,T,N)}function w(S){S.target.removeEventListener("dispose",w);for(let x in c){let T=c[x],N=S.target.uuid;N in T&&(T[N].dispose(),delete T[N])}}}function N_(n,e){function t(){let P=!1,le=new dt,j=null,ce=new dt(0,0,0,0);return{setMask:function(pe){j!==pe&&!P&&(n.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){P=pe},setClear:function(pe,ee,Ae,Me,at){at===!0&&(pe*=Me,ee*=Me,Ae*=Me),le.set(pe,ee,Ae,Me),ce.equals(le)===!1&&(n.clearColor(pe,ee,Ae,Me),ce.copy(le))},reset:function(){P=!1,j=null,ce.set(-1,0,0,0)}}}function i(){let P=!1,le=!1,j=null,ce=null,pe=null;return{setReversed:function(ee){if(le!==ee){let Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let Me=pe;pe=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ee){ee?$(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ee){j!==ee&&!P&&(n.depthMask(ee),j=ee)},setFunc:function(ee){if(le&&(ee=Hh[ee]),ce!==ee){switch(ee){case zr:n.depthFunc(n.NEVER);break;case kr:n.depthFunc(n.ALWAYS);break;case Vr:n.depthFunc(n.LESS);break;case jn:n.depthFunc(n.LEQUAL);break;case Hr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Wr:n.depthFunc(n.GREATER);break;case Xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ee}},setLocked:function(ee){P=ee},setClear:function(ee){pe!==ee&&(pe=ee,le&&(ee=1-ee),n.clearDepth(ee))},reset:function(){P=!1,j=null,ce=null,pe=null,le=!1}}}function s(){let P=!1,le=null,j=null,ce=null,pe=null,ee=null,Ae=null,Me=null,at=null;return{setTest:function(Je){P||(Je?$(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(Je){le!==Je&&!P&&(n.stencilMask(Je),le=Je)},setFunc:function(Je,gi,Ai){(j!==Je||ce!==gi||pe!==Ai)&&(n.stencilFunc(Je,gi,Ai),j=Je,ce=gi,pe=Ai)},setOp:function(Je,gi,Ai){(ee!==Je||Ae!==gi||Me!==Ai)&&(n.stencilOp(Je,gi,Ai),ee=Je,Ae=gi,Me=Ai)},setLocked:function(Je){P=Je},setClear:function(Je){at!==Je&&(n.clearStencil(Je),at=Je)},reset:function(){P=!1,le=null,j=null,ce=null,pe=null,ee=null,Ae=null,Me=null,at=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,d={},f={},h={},u=new WeakMap,_=[],y=null,g=!1,p=null,E=null,R=null,M=null,w=null,S=null,A=null,x=new Ce(0,0,0),T=0,N=!1,O=null,k=null,G=null,D=null,V=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ie=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=ie>=2);let Q=null,te={},Re=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),st=new dt().fromArray(Re),Xe=new dt().fromArray(Te);function Ze(P,le,j,ce){let pe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(P,ee),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<j;Ae++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(le+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ee}let q={};q[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(jn),Ge(!1),ht(fl),$(n.CULL_FACE),Ye(Ni);function $(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function ve(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function De(P,le){return h[P]!==le?(n.bindFramebuffer(P,le),h[P]=le,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=le),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=le),!0):!1}function ge(P,le){let j=_,ce=!1;if(P){j=u.get(le),j===void 0&&(j=[],u.set(le,j));let pe=P.textures;if(j.length!==pe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=pe.length;ee<Ae;ee++)j[ee]=n.COLOR_ATTACHMENT0+ee;j.length=pe.length,ce=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ce=!0);ce&&n.drawBuffers(j)}function ze(P){return y!==P?(n.useProgram(P),y=P,!0):!1}let xt={[En]:n.FUNC_ADD,[ch]:n.FUNC_SUBTRACT,[hh]:n.FUNC_REVERSE_SUBTRACT};xt[dh]=n.MIN,xt[uh]=n.MAX;let ke={[fh]:n.ZERO,[ph]:n.ONE,[mh]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[Mh]:n.SRC_ALPHA_SATURATE,[xh]:n.DST_COLOR,[_h]:n.DST_ALPHA,[gh]:n.ONE_MINUS_SRC_COLOR,[_l]:n.ONE_MINUS_SRC_ALPHA,[yh]:n.ONE_MINUS_DST_COLOR,[vh]:n.ONE_MINUS_DST_ALPHA,[Sh]:n.CONSTANT_COLOR,[bh]:n.ONE_MINUS_CONSTANT_COLOR,[wh]:n.CONSTANT_ALPHA,[Eh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ye(P,le,j,ce,pe,ee,Ae,Me,at,Je){if(P===Ni){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&($(n.BLEND),g=!0),P!==lh){if(P!==p||Je!==N){if((E!==En||w!==En)&&(n.blendEquation(n.FUNC_ADD),E=En,w=En),Je)switch(P){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Le("WebGLState: Invalid blending: ",P);break}else switch(P){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pl:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",P);break}R=null,M=null,S=null,A=null,x.set(0,0,0),T=0,p=P,N=Je}return}pe=pe||le,ee=ee||j,Ae=Ae||ce,(le!==E||pe!==w)&&(n.blendEquationSeparate(xt[le],xt[pe]),E=le,w=pe),(j!==R||ce!==M||ee!==S||Ae!==A)&&(n.blendFuncSeparate(ke[j],ke[ce],ke[ee],ke[Ae]),R=j,M=ce,S=ee,A=Ae),(Me.equals(x)===!1||at!==T)&&(n.blendColor(Me.r,Me.g,Me.b,at),x.copy(Me),T=at),p=P,N=!1}function rt(P,le){P.side===di?ve(n.CULL_FACE):$(n.CULL_FACE);let j=P.side===Yt;le&&(j=!j),Ge(j),P.blending===ds&&P.transparent===!1?Ye(Ni):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ce=P.stencilWrite;o.setTest(ce),ce&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){O!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),O=P)}function ht(P){P!==rh?($(n.CULL_FACE),P!==k&&(P===fl?n.cullFace(n.BACK):P===ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),k=P}function wt(P){P!==G&&(Z&&n.lineWidth(P),G=P)}function Jt(P,le,j){P?($(n.POLYGON_OFFSET_FILL),(D!==le||V!==j)&&(D=le,V=j,a.getReversed()&&(le=-le),n.polygonOffset(le,j))):ve(n.POLYGON_OFFSET_FILL)}function ut(P){P?$(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function mt(P){P===void 0&&(P=n.TEXTURE0+J-1),Q!==P&&(n.activeTexture(P),Q=P)}function I(P,le,j){j===void 0&&(Q===null?j=n.TEXTURE0+J-1:j=Q);let ce=te[j];ce===void 0&&(ce={type:void 0,texture:void 0},te[j]=ce),(ce.type!==P||ce.texture!==le)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(P,le||q[P]),ce.type=P,ce.texture=le)}function Nt(){let P=te[Q];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $e(){try{n.compressedTexImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function m(){try{n.texSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function U(){try{n.texSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function se(){try{n.texStorage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function re(){try{n.texStorage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function Y(){try{n.texImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function K(){try{n.texImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ae(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function be(P,le){f[P]!==le&&(n.pixelStorei(P,le),f[P]=le)}function he(P){st.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),st.copy(P))}function oe(P){Xe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function we(P,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let ce=j.get(P);ce===void 0&&(ce=n.getUniformBlockIndex(le,P.name),j.set(P,ce))}function Pe(P,le){let ce=c.get(le).get(P);l.get(le)!==ce&&(n.uniformBlockBinding(le,ce,P.__bindingPointIndex),l.set(le,ce))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,te={},h={},u=new WeakMap,_=[],y=null,g=!1,p=null,E=null,R=null,M=null,w=null,S=null,A=null,x=new Ce(0,0,0),T=0,N=!1,O=null,k=null,G=null,D=null,V=null,st.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:ve,bindFramebuffer:De,drawBuffers:ge,useProgram:ze,setBlending:Ye,setMaterial:rt,setFlipSided:Ge,setCullFace:ht,setLineWidth:wt,setPolygonOffset:Jt,setScissorTest:ut,activeTexture:mt,bindTexture:I,unbindTexture:Nt,compressedTexImage2D:$e,compressedTexImage3D:b,texImage2D:Y,texImage3D:K,pixelStorei:be,getParameter:ae,updateUBOMapping:we,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:re,texSubImage2D:m,texSubImage3D:U,compressedTexSubImage2D:z,compressedTexSubImage3D:W,scissor:he,viewport:oe,reset:Ue}}function D_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,d=new WeakMap,f=new Set,h,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,m){return _?new OffscreenCanvas(b,m):$n("canvas")}function g(b,m,U){let z=1,W=$e(b);if((W.width>U||W.height>U)&&(z=U/Math.max(W.width,W.height)),z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let se=Math.floor(z*W.width),re=Math.floor(z*W.height);h===void 0&&(h=y(se,re));let Y=m?y(se,re):h;return Y.width=se,Y.height=re,Y.getContext("2d").drawImage(b,0,0,se,re),Ie("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+re+")."),Y}else return"data"in b&&Ie("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),b;return b}function p(b){return b.generateMipmaps}function E(b){n.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,m,U,z,W,se=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re;z&&(re=e.get("EXT_texture_norm16"),re||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=m;if(m===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8),U===n.UNSIGNED_SHORT&&re&&(Y=re.R16_EXT),U===n.SHORT&&re&&(Y=re.R16_SNORM_EXT)),m===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),m===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8),U===n.UNSIGNED_SHORT&&re&&(Y=re.RG16_EXT),U===n.SHORT&&re&&(Y=re.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),m===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),U===n.UNSIGNED_INT&&(Y=n.RGB32UI),U===n.BYTE&&(Y=n.RGB8I),U===n.SHORT&&(Y=n.RGB16I),U===n.INT&&(Y=n.RGB32I)),m===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),U===n.UNSIGNED_INT&&(Y=n.RGBA32UI),U===n.BYTE&&(Y=n.RGBA8I),U===n.SHORT&&(Y=n.RGBA16I),U===n.INT&&(Y=n.RGBA32I)),m===n.RGB&&(U===n.UNSIGNED_SHORT&&re&&(Y=re.RGB16_EXT),U===n.SHORT&&re&&(Y=re.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),m===n.RGBA){let K=se?Us:We.getTransfer(W);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=K===Ke?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&re&&(Y=re.RGBA16_EXT),U===n.SHORT&&re&&(Y=re.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(b,m){let U;return b?m===null||m===bi||m===fs?U=n.DEPTH24_STENCIL8:m===wi?U=n.DEPTH32F_STENCIL8:m===us&&(U=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===bi||m===fs?U=n.DEPTH_COMPONENT24:m===wi?U=n.DEPTH_COMPONENT32F:m===us&&(U=n.DEPTH_COMPONENT16),U}function S(b,m){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tt&&b.minFilter!==Pt?Math.log2(Math.max(m.width,m.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?m.mipmaps.length:1}function A(b){let m=b.target;m.removeEventListener("dispose",A),T(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&f.delete(m)}function x(b){let m=b.target;m.removeEventListener("dispose",x),O(m)}function T(b){let m=i.get(b);if(m.__webglInit===void 0)return;let U=b.source,z=u.get(U);if(z){let W=z[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&N(b),Object.keys(z).length===0&&u.delete(U)}i.remove(b)}function N(b){let m=i.get(b);n.deleteTexture(m.__webglTexture);let U=b.source,z=u.get(U);delete z[m.__cacheKey],a.memory.textures--}function O(b){let m=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(m.__webglFramebuffer[z]))for(let W=0;W<m.__webglFramebuffer[z].length;W++)n.deleteFramebuffer(m.__webglFramebuffer[z][W]);else n.deleteFramebuffer(m.__webglFramebuffer[z]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[z])}else{if(Array.isArray(m.__webglFramebuffer))for(let z=0;z<m.__webglFramebuffer.length;z++)n.deleteFramebuffer(m.__webglFramebuffer[z]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let z=0;z<m.__webglColorRenderbuffer.length;z++)m.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[z]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let U=b.textures;for(let z=0,W=U.length;z<W;z++){let se=i.get(U[z]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(U[z])}i.remove(b)}let k=0;function G(){k=0}function D(){return k}function V(b){k=b}function J(){let b=k;return b>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function Z(b){let m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function ie(b,m){let U=i.get(b);if(b.isVideoTexture&&I(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let z=b.image;if(z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(U,b,m);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+m)}function X(b,m){let U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){ve(U,b,m);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+m)}function Q(b,m){let U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){ve(U,b,m);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+m)}function te(b,m){let U=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){De(U,b,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+m)}let Re={[qr]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Yr]:n.MIRRORED_REPEAT},Te={[Tt]:n.NEAREST,[Ch]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[un]:n.LINEAR_MIPMAP_LINEAR},st={[Lh]:n.NEVER,[Fh]:n.ALWAYS,[Nh]:n.LESS,[lo]:n.LEQUAL,[Dh]:n.EQUAL,[co]:n.GEQUAL,[Uh]:n.GREATER,[Oh]:n.NOTEQUAL};function Xe(b,m){if(m.type===wi&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Pt||m.magFilter===Ea||m.magFilter===ar||m.magFilter===un||m.minFilter===Pt||m.minFilter===Ea||m.minFilter===ar||m.minFilter===un)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Re[m.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Re[m.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Re[m.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Te[m.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Te[m.minFilter]),m.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,st[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==ar&&m.minFilter!==un||m.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ze(b,m){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,m.addEventListener("dispose",A));let z=m.source,W=u.get(z);W===void 0&&(W={},u.set(z,W));let se=Z(m);if(se!==b.__cacheKey){W[se]===void 0&&(W[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[se].usedTimes++;let re=W[b.__cacheKey];re!==void 0&&(W[b.__cacheKey].usedTimes--,re.usedTimes===0&&N(m)),b.__cacheKey=se,b.__webglTexture=W[se].texture}return U}function q(b,m,U){return Math.floor(Math.floor(b/U)/m)}function $(b,m,U,z){let se=b.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,U,z,m.data);else{se.sort((be,he)=>be.start-he.start);let re=0;for(let be=1;be<se.length;be++){let he=se[re],oe=se[be],we=he.start+he.count,Pe=q(oe.start,m.width,4),Ue=q(he.start,m.width,4);oe.start<=we+1&&Pe===Ue&&q(oe.start+oe.count-1,m.width,4)===Pe?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,se[re]=oe)}se.length=re+1;let Y=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let be=0,he=se.length;be<he;be++){let oe=se[be],we=Math.floor(oe.start/4),Pe=Math.ceil(oe.count/4),Ue=we%m.width,P=Math.floor(we/m.width),le=Pe,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Ue,P,le,j,U,z,m.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ve(b,m,U){let z=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(z=n.TEXTURE_3D);let W=Ze(b,m),se=m.source;t.bindTexture(z,b.__webglTexture,n.TEXTURE0+U);let re=i.get(se);if(se.version!==re.__version||W===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let j=We.getPrimaries(We.workingColorSpace),ce=m.colorSpace===Xi?null:We.getPrimaries(m.colorSpace),pe=m.colorSpace===Xi||j===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let K=g(m.image,!1,s.maxTextureSize);K=Nt(m,K);let ae=r.convert(m.format,m.colorSpace),be=r.convert(m.type),he=M(m.internalFormat,ae,be,m.normalized,m.colorSpace,m.isVideoTexture);Xe(z,m);let oe,we=m.mipmaps,Pe=m.isVideoTexture!==!0,Ue=re.__version===void 0||W===!0,P=se.dataReady,le=S(m,K);if(m.isDepthTexture)he=w(m.format===fn,m.type),Ue&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,he,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,he,K.width,K.height,0,ae,be,null));else if(m.isDataTexture)if(we.length>0){Pe&&Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let j=0,ce=we.length;j<ce;j++)oe=we[j],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,j,he,oe.width,oe.height,0,ae,be,oe.data);m.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height),P&&$(m,K,ae,be)):t.texImage2D(n.TEXTURE_2D,0,he,K.width,K.height,0,ae,be,K.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,we[0].width,we[0].height,K.depth);for(let j=0,ce=we.length;j<ce;j++)if(oe=we[j],m.format!==ui)if(ae!==null)if(Pe){if(P)if(m.layerUpdates.size>0){let pe=kl(oe.width,oe.height,m.format,m.type);for(let ee of m.layerUpdates){let Ae=oe.data.subarray(ee*pe/oe.data.BYTES_PER_ELEMENT,(ee+1)*pe/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ee,oe.width,oe.height,1,ae,Ae)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,K.depth,ae,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,he,oe.width,oe.height,K.depth,0,oe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,K.depth,ae,be,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,he,oe.width,oe.height,K.depth,0,ae,be,oe.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Pe&&Ue&&t.texStorage2D(n.TEXTURE_2D,le,he,we[0].width,we[0].height);for(let j=0,ce=we.length;j<ce;j++)oe=we[j],m.format!==ui?ae!==null?Pe?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,he,oe.width,oe.height,0,oe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?P&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,oe.width,oe.height,ae,be,oe.data):t.texImage2D(n.TEXTURE_2D,j,he,oe.width,oe.height,0,ae,be,oe.data)}else if(m.isDataArrayTexture)if(Pe){if(Ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,he,K.width,K.height,K.depth),P)if(m.layerUpdates.size>0){let j=kl(K.width,K.height,m.format,m.type);for(let ce of m.layerUpdates){let pe=K.data.subarray(ce*j/K.data.BYTES_PER_ELEMENT,(ce+1)*j/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,K.width,K.height,1,ae,be,pe)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,be,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,K.width,K.height,K.depth,0,ae,be,K.data);else if(m.isData3DTexture)Pe?(Ue&&t.texStorage3D(n.TEXTURE_3D,le,he,K.width,K.height,K.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,be,K.data)):t.texImage3D(n.TEXTURE_3D,0,he,K.width,K.height,K.depth,0,ae,be,K.data);else if(m.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(n.TEXTURE_2D,le,he,K.width,K.height);else{let j=K.width,ce=K.height;for(let pe=0;pe<le;pe++)t.texImage2D(n.TEXTURE_2D,pe,he,j,ce,0,ae,be,null),j>>=1,ce>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),K.parentNode!==j){j.appendChild(K),f.add(m),j.onpaint=ce=>{let pe=ce.changedElements;for(let ee of f)pe.includes(ee.image)&&(ee.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let pe=n.RGBA,ee=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,pe,ee,Ae,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(we.length>0){if(Pe&&Ue){let j=$e(we[0]);t.texStorage2D(n.TEXTURE_2D,le,he,j.width,j.height)}for(let j=0,ce=we.length;j<ce;j++)oe=we[j],Pe?P&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ae,be,oe):t.texImage2D(n.TEXTURE_2D,j,he,ae,be,oe);m.generateMipmaps=!1}else if(Pe){if(Ue){let j=$e(K);t.texStorage2D(n.TEXTURE_2D,le,he,j.width,j.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,be,K)}else t.texImage2D(n.TEXTURE_2D,0,he,ae,be,K);p(m)&&E(z),re.__version=se.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function De(b,m,U){if(m.image.length!==6)return;let z=Ze(b,m),W=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);let se=i.get(W);if(W.version!==se.__version||z===!0){t.activeTexture(n.TEXTURE0+U);let re=We.getPrimaries(We.workingColorSpace),Y=m.colorSpace===Xi?null:We.getPrimaries(m.colorSpace),K=m.colorSpace===Xi||re===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ae=m.isCompressedTexture||m.image[0].isCompressedTexture,be=m.image[0]&&m.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ae&&!be?he[ee]=g(m.image[ee],!0,s.maxCubemapSize):he[ee]=be?m.image[ee].image:m.image[ee],he[ee]=Nt(m,he[ee]);let oe=he[0],we=r.convert(m.format,m.colorSpace),Pe=r.convert(m.type),Ue=M(m.internalFormat,we,Pe,m.normalized,m.colorSpace),P=m.isVideoTexture!==!0,le=se.__version===void 0||z===!0,j=W.dataReady,ce=S(m,oe);Xe(n.TEXTURE_CUBE_MAP,m);let pe;if(ae){P&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,oe.width,oe.height);for(let ee=0;ee<6;ee++){pe=he[ee].mipmaps;for(let Ae=0;Ae<pe.length;Ae++){let Me=pe[Ae];m.format!==ui?we!==null?P?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ue,Me.width,Me.height,0,Me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Me.width,Me.height,we,Pe,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ue,Me.width,Me.height,0,we,Pe,Me.data)}}}else{if(pe=m.mipmaps,P&&le){pe.length>0&&ce++;let ee=$e(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){P?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,we,Pe,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,he[ee].width,he[ee].height,0,we,Pe,he[ee].data);for(let Ae=0;Ae<pe.length;Ae++){let at=pe[Ae].image[ee].image;P?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,at.width,at.height,we,Pe,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ue,at.width,at.height,0,we,Pe,at.data)}}else{P?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,we,Pe,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,we,Pe,he[ee]);for(let Ae=0;Ae<pe.length;Ae++){let Me=pe[Ae];P?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,we,Pe,Me.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ue,we,Pe,Me.image[ee])}}}p(m)&&E(n.TEXTURE_CUBE_MAP),se.__version=W.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function ge(b,m,U,z,W,se){let re=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),K=M(U.internalFormat,re,Y,U.normalized,U.colorSpace),ae=i.get(m),be=i.get(U);if(be.__renderTarget=m,!ae.__hasExternalTextures){let he=Math.max(1,m.width>>se),oe=Math.max(1,m.height>>se);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,se,K,he,oe,m.depth,0,re,Y,null):t.texImage2D(W,se,K,he,oe,0,re,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),mt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,W,be.__webglTexture,0,ut(m)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,W,be.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(b,m,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),m.depthBuffer){let z=m.depthTexture,W=z&&z.isDepthTexture?z.type:null,se=w(m.stencilBuffer,W),re=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(m),se,m.width,m.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(m),se,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,se,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,b)}else{let z=m.textures;for(let W=0;W<z.length;W++){let se=z[W],re=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),K=M(se.internalFormat,re,Y,se.normalized,se.colorSpace);mt(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut(m),K,m.width,m.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut(m),K,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,K,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(b,m,U){let z=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(m.depthTexture);if(W.__renderTarget=m,(!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),z){if(W.__webglInit===void 0&&(W.__webglInit=!0,m.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,m.depthTexture);let ae=r.convert(m.depthTexture.format),be=r.convert(m.depthTexture.type),he;m.depthTexture.format===Ii?he=n.DEPTH_COMPONENT24:m.depthTexture.format===fn&&(he=n.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,m.width,m.height,0,ae,be,null)}}else ie(m.depthTexture,0);let se=W.__webglTexture,re=ut(m),Y=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,K=m.depthTexture.format===fn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Ii)mt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Y,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,K,Y,se,0);else if(m.depthTexture.format===fn)mt(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Y,se,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,K,Y,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(b){let m=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){let z=b.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),z){let W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,z.removeEventListener("dispose",W)};z.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=z}if(b.depthTexture&&!m.__autoAllocateDepthBuffer)if(U)for(let z=0;z<6;z++)xt(m.__webglFramebuffer[z],b,z);else{let z=b.texture.mipmaps;z&&z.length>0?xt(m.__webglFramebuffer[0],b,0):xt(m.__webglFramebuffer,b,0)}else if(U){m.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[z]),m.__webglDepthbuffer[z]===void 0)m.__webglDepthbuffer[z]=n.createRenderbuffer(),ze(m.__webglDepthbuffer[z],b,!1);else{let W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}else{let z=b.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),ze(m.__webglDepthbuffer,b,!1);else{let W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ye(b,m,U){let z=i.get(b);m!==void 0&&ge(z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ke(b)}function rt(b){let m=b.texture,U=i.get(b),z=i.get(m);b.addEventListener("dispose",x);let W=b.textures,se=b.isWebGLCubeRenderTarget===!0,re=W.length>1;if(re||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=m.version,a.memory.textures++),se){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let K=0;K<m.mipmaps.length;K++)U.__webglFramebuffer[Y][K]=n.createFramebuffer()}else U.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<m.mipmaps.length;Y++)U.__webglFramebuffer[Y]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(re)for(let Y=0,K=W.length;Y<K;Y++){let ae=i.get(W[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&mt(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<W.length;Y++){let K=W[Y];U.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let ae=r.convert(K.format,K.colorSpace),be=r.convert(K.type),he=M(K.internalFormat,ae,be,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),oe=ut(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,he,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,m);for(let Y=0;Y<6;Y++)if(m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)ge(U.__webglFramebuffer[Y][K],b,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else ge(U.__webglFramebuffer[Y],b,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(m)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Y=0,K=W.length;Y<K;Y++){let ae=W[Y],be=i.get(ae),he=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,be.__webglTexture),Xe(he,ae),ge(U.__webglFramebuffer,b,ae,n.COLOR_ATTACHMENT0+Y,he,0),p(ae)&&E(he)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),Xe(Y,m),m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)ge(U.__webglFramebuffer[K],b,m,n.COLOR_ATTACHMENT0,Y,K);else ge(U.__webglFramebuffer,b,m,n.COLOR_ATTACHMENT0,Y,0);p(m)&&E(Y),t.unbindTexture()}b.depthBuffer&&ke(b)}function Ge(b){let m=b.textures;for(let U=0,z=m.length;U<z;U++){let W=m[U];if(p(W)){let se=R(b),re=i.get(W).__webglTexture;t.bindTexture(se,re),E(se),t.unbindTexture()}}}let ht=[],wt=[];function Jt(b){if(b.samples>0){if(mt(b)===!1){let m=b.textures,U=b.width,z=b.height,W=n.COLOR_BUFFER_BIT,se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(b),Y=m.length>1;if(Y)for(let ae=0;ae<m.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<m.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let be=i.get(m[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,W,n.NEAREST),l===!0&&(ht.length=0,wt.length=0,ht.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(ht.push(se),wt.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<m.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let be=i.get(m[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let m=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function ut(b){return Math.min(s.maxSamples,b.samples)}function mt(b){let m=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function I(b){let m=a.render.frame;d.get(b)!==m&&(d.set(b,m),b.update())}function Nt(b,m){let U=b.colorSpace,z=b.format,W=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Ds&&U!==Xi&&(We.getTransfer(U)===Ke?(z!==ui||W!==ei)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",U)),m}function $e(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.getTextureUnits=D,this.setTextureUnits=V,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Ye,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U_(n,e){function t(i,s=Xi){let r,a=We.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===Aa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ca)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tl)return n.BYTE;if(i===Al)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Ta)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Ei)return n.HALF_FLOAT;if(i===Pl)return n.ALPHA;if(i===Il)return n.RGB;if(i===ui)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===fn)return n.DEPTH_STENCIL;if(i===Ll)return n.RED;if(i===Ra)return n.RED_INTEGER;if(i===pn)return n.RG;if(i===Pa)return n.RG_INTEGER;if(i===Ia)return n.RGBA_INTEGER;if(i===or||i===lr||i===cr||i===hr)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===La||i===Na||i===Da||i===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Fa||i===Ba||i===za||i===ka||i===dr||i===Va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oa||i===Fa)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===za)return r.COMPRESSED_R11_EAC;if(i===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(i===dr)return r.COMPRESSED_RG11_EAC;if(i===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===ja||i===Ka||i===$a||i===Qa||i===eo||i===to)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ha)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ga)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ka)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$a)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===to)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===no||i===so)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===io)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ro||i===ao||i===ur||i===oo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Hs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Qt({vertexShader:O_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends Mi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,u=null,_=null,y=typeof XRWebGLBinding<"u",g=new rc,p={},E=t.getContextAttributes(),R=null,M=null,w=[],S=[],A=new Ee,x=null,T=null,N=new jt;N.viewport=new dt;let O=new jt;O.viewport=new dt;let k=[N,O],G=new Ma,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=w[q];return $===void 0&&($=new ns,w[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=w[q];return $===void 0&&($=new ns,w[q]=$),$.getGripSpace()},this.getHand=function(q){let $=w[q];return $===void 0&&($=new ns,w[q]=$),$.getHandSpace()};function J(q){let $=S.indexOf(q.inputSource);if($===-1)return;let ve=w[$];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||a),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ie);for(let q=0;q<w.length;q++){let $=S[q];$!==null&&(S[q]=null,w[q].disconnect($))}D=null,V=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(R),u=null,h=null,f=null,s=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ie),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,De=null,ge=null;E.depth&&(ge=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=E.stencil?fn:Ii,De=E.stencil?fs:bi);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Kt(h.textureWidth,h.textureHeight,{format:ui,type:ei,depthTexture:new rn(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Kt(u.framebufferWidth,u.framebufferHeight,{format:ui,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(q){for(let $=0;$<q.removed.length;$++){let ve=q.removed[$],De=S.indexOf(ve);De>=0&&(S[De]=null,w[De].disconnect(ve))}for(let $=0;$<q.added.length;$++){let ve=q.added[$],De=S.indexOf(ve);if(De===-1){for(let ze=0;ze<w.length;ze++)if(ze>=S.length){S.push(ve),De=ze;break}else if(S[ze]===null){S[ze]=ve,De=ze;break}if(De===-1)break}let ge=w[De];ge&&ge.connect(ve)}}let X=new L,Q=new L;function te(q,$,ve){X.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(ve.matrixWorld);let De=X.distanceTo(Q),ge=$.projectionMatrix.elements,ze=ve.projectionMatrix.elements,xt=ge[14]/(ge[10]-1),ke=ge[14]/(ge[10]+1),Ye=(ge[9]+1)/ge[5],rt=(ge[9]-1)/ge[5],Ge=(ge[8]-1)/ge[0],ht=(ze[8]+1)/ze[0],wt=xt*Ge,Jt=xt*ht,ut=De/(-Ge+ht),mt=ut*-Ge;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(mt),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let I=xt+ut,Nt=ke+ut,$e=wt-mt,b=Jt+(De-mt),m=Ye*ke/Nt*I,U=rt*ke/Nt*I;q.projectionMatrix.makePerspective($e,b,m,U,I,Nt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Re(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let $=q.near,ve=q.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),G.near=O.near=N.near=$,G.far=O.far=N.far=ve,(D!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,V=G.far),G.layers.mask=q.layers.mask|6,N.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let De=q.parent,ge=G.cameras;Re(G,De);for(let ze=0;ze<ge.length;ze++)Re(ge[ze],De);ge.length===2?te(G,N,O):G.projectionMatrix.copy(N.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),Te(q,G,De)};function Te(q,$,ve){ve===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(q){return p[q]};let st=null;function Xe(q,$){if(d=$.getViewerPose(c||a),_=$,d!==null){let ve=d.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let De=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let ke=0;ke<ve.length;ke++){let Ye=ve[ke],rt=null;if(u!==null)rt=u.getViewport(Ye);else{let ht=f.getViewSubImage(h,Ye);rt=ht.viewport,ke===0&&(e.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(M))}let Ge=k[ke];Ge===void 0&&(Ge=new jt,Ge.layers.enable(ke),Ge.viewport=new dt,k[ke]=Ge),Ge.matrix.fromArray(Ye.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ye.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(rt.x,rt.y,rt.width,rt.height),ke===0&&(G.matrix.copy(Ge.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(Ge)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ke=f.getDepthInformation(ve[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let ke=0;ke<ve.length;ke++){let Ye=ve[ke].camera;if(Ye){let rt=p[Ye];rt||(rt=new Hs,p[Ye]=rt);let Ge=f.getCameraImage(Ye);rt.sourceTexture=Ge}}}}for(let ve=0;ve<w.length;ve++){let De=S[ve],ge=w[ve];De!==null&&ge!==void 0&&ge.update(De,$,c||a)}st&&st(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}let Ze=new pd;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(q){st=q},this.dispose=function(){}}},B_=new Qe,yd=new Ne;yd.set(-1,0,0,0,1,0,0,0,1);function z_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Fl(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&u(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),R=E.envMap,M=E.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let S=w.program;i.uniformBlockBinding(M,S)}function c(M,w){let S=s[M.id];S===void 0&&(g(M),S=d(M),s[M.id]=S,M.addEventListener("dispose",E));let A=w.program;i.updateUBOMapping(M,A);let x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function d(M){let w=f();M.__bindingPointIndex=w;let S=n.createBuffer(),A=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=s[M.id],S=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,T=S.length;x<T;x++){let N=S[x];if(Array.isArray(N))for(let O=0,k=N.length;O<k;O++)u(N[O],x,O,A);else u(N,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,w,S,A){if(y(M,w,S,A)===!0){let x=M.__offset,T=M.value;if(Array.isArray(T)){let N=0;for(let O=0;O<T.length;O++){let k=T[O],G=p(k);_(k,M.__data,N),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(N+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function _(M,w,S){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,S)}function y(M,w,S,A){let x=M.value,T=w+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let N=A[T];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function g(M){let w=M.uniforms,S=0,A=16;for(let T=0,N=w.length;T<N;T++){let O=Array.isArray(w[T])?w[T]:[w[T]];for(let k=0,G=O.length;k<G;k++){let D=O[k],V=Array.isArray(D.value)?D.value:[D.value];for(let J=0,Z=V.length;J<Z;J++){let ie=V[J],X=p(ie),Q=S%A,te=Q%X.boundary,Re=Q+te;S+=te,Re!==0&&A-Re<X.storage&&(S+=A-Re),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=X.storage}}}let x=S%A;return x>0&&(S+=A-x),M.__size=S,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),w}function E(M){let w=M.target;w.removeEventListener("dispose",E);let S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function H_(){return Di===null&&(Di=new Qr(V_,16,16,pn,Ei),Di.name="DFG_LUT",Di.minFilter=Pt,Di.magFilter=Pt,Di.wrapS=Pi,Di.wrapT=Pi,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var mo=class{constructor(e={}){let{canvas:t=zh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=ei}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let y=u,g=new Set([Ia,Pa,Ra]),p=new Set([ei,bi,us,fs,Aa,Ca]),E=new Uint32Array(4),R=new Int32Array(4),M=new L,w=null,S=null,A=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,k=null,G=null,D=null,V=null;this._outputColorSpace=Ft;let J=0,Z=0,ie=null,X=-1,Q=null,te=new dt,Re=new dt,Te=null,st=new Ce(0),Xe=0,Ze=t.width,q=t.height,$=1,ve=null,De=null,ge=new dt(0,0,Ze,q),ze=new dt(0,0,Ze,q),xt=!1,ke=new as,Ye=!1,rt=!1,Ge=new Qe,ht=new L,wt=new dt,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function mt(){return ie===null?$:1}let I=i;function Nt(v,C){return t.getContext(v,C)}let $e,b,m,U,z,W,se,re,Y,K,ae,be,he,oe,we,Pe,Ue,P,le,j,ce,pe,ee;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",gi,!1),I===null){let C="webgl2";if(I=Nt(C,v),I===null)throw Nt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Le("WebGLRenderer: "+v.message),v}function Ae(){$e=new Jm(I),$e.init(),ce=new U_(I,$e),b=new zm(I,$e,e,ce),m=new N_(I,$e),b.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),G=I.createFramebuffer(),D=I.createFramebuffer(),V=I.createFramebuffer(),U=new $m(I),z=new x_,W=new D_(I,$e,m,z,b,ce,U),se=new Zm(N),re=new Qu(I),pe=new Fm(I,re),Y=new jm(I,re,U,pe),K=new eg(I,Y,re,pe,U),P=new Qm(I,b,W),we=new km(z),ae=new v_(N,se,$e,b,pe,we),be=new z_(N,z),he=new M_,oe=new A_($e),Ue=new Om(N,se,m,K,_,l),Pe=new L_(N,K,b),ee=new k_(I,U,b,m),le=new Bm(I,$e,U),j=new Km(I,$e,U),U.programs=ae.programs,N.capabilities=b,N.extensions=$e,N.properties=z,N.renderLists=he,N.shadowMap=Pe,N.state=m,N.info=U}y!==ei&&(T=new ig(y,t.width,t.height,o,s,r));let Me=new ac(N,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=$e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=$e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(Ze,q,!1))},this.getSize=function(v){return v.set(Ze,q)},this.setSize=function(v,C,H=!0){if(Me.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=v,q=C,t.width=Math.floor(v*$),t.height=Math.floor(C*$),H===!0&&(t.style.width=v+"px",t.style.height=C+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(Ze*$,q*$).floor()},this.setDrawingBufferSize=function(v,C,H){Ze=v,q=C,$=H,t.width=Math.floor(v*H),t.height=Math.floor(C*H),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(y===ei){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(ge)},this.setViewport=function(v,C,H,F){v.isVector4?ge.set(v.x,v.y,v.z,v.w):ge.set(v,C,H,F),m.viewport(te.copy(ge).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,C,H,F){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,C,H,F),m.scissor(Re.copy(ze).multiplyScalar($).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(v){m.setScissorTest(xt=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){De=v},this.getClearColor=function(v){return v.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,H=!0){let F=0;if(v){let B=!1;if(ie!==null){let fe=ie.texture.format;B=g.has(fe)}if(B){let fe=ie.texture.type,_e=p.has(fe),ue=Ue.getClearColor(),xe=Ue.getClearAlpha(),Se=ue.r,Oe=ue.g,Ve=ue.b;_e?(E[0]=Se,E[1]=Oe,E[2]=Ve,E[3]=xe,I.clearBufferuiv(I.COLOR,0,E)):(R[0]=Se,R[1]=Oe,R[2]=Ve,R[3]=xe,I.clearBufferiv(I.COLOR,0,R))}else F|=I.COLOR_BUFFER_BIT}C&&(F|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),k=v},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",gi,!1),Ue.dispose(),he.dispose(),oe.dispose(),z.dispose(),se.dispose(),K.dispose(),pe.dispose(),ee.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",bc),Me.removeEventListener("sessionend",wc),gn.stop()};function at(v){v.preventDefault(),Dl("WebGLRenderer: Context Lost."),O=!0}function Je(){Dl("WebGLRenderer: Context Restored."),O=!1;let v=U.autoReset,C=Pe.enabled,H=Pe.autoUpdate,F=Pe.needsUpdate,B=Pe.type;Ae(),U.autoReset=v,Pe.enabled=C,Pe.autoUpdate=H,Pe.needsUpdate=F,Pe.type=B}function gi(v){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ai(v){let C=v.target;C.removeEventListener("dispose",Ai),Jd(C)}function Jd(v){jd(v),z.remove(v)}function jd(v){let C=z.get(v).programs;C!==void 0&&(C.forEach(function(H){ae.releaseProgram(H)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,H,F,B,fe){C===null&&(C=Jt);let _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=Qd(v,C,H,F,B);m.setMaterial(F,_e);let xe=H.index,Se=1;if(F.wireframe===!0){if(xe=Y.getWireframeAttribute(H),xe===void 0)return;Se=2}let Oe=H.drawRange,Ve=H.attributes.position,ye=Oe.start*Se,je=(Oe.start+Oe.count)*Se;fe!==null&&(ye=Math.max(ye,fe.start*Se),je=Math.min(je,(fe.start+fe.count)*Se)),xe!==null?(ye=Math.max(ye,0),je=Math.min(je,xe.count)):Ve!=null&&(ye=Math.max(ye,0),je=Math.min(je,Ve.count));let gt=je-ye;if(gt<0||gt===1/0)return;pe.setup(B,F,ue,H,xe);let lt,nt=le;if(xe!==null&&(lt=re.get(xe),nt=j,nt.setIndex(lt)),B.isMesh)F.wireframe===!0?(m.setLineWidth(F.wireframeLinewidth*mt()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(B.isLine){let Dt=F.linewidth;Dt===void 0&&(Dt=1),m.setLineWidth(Dt*mt()),B.isLineSegments?nt.setMode(I.LINES):B.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else B.isPoints?nt.setMode(I.POINTS):B.isSprite&&nt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if($e.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Dt=B._multiDrawStarts,me=B._multiDrawCounts,kt=B._multiDrawCount,qe=xe?re.get(xe).bytesPerElement:1,ci=z.get(F).currentProgram.getUniforms();for(let Ci=0;Ci<kt;Ci++)ci.setValue(I,"_gl_DrawID",Ci),nt.render(Dt[Ci]/qe,me[Ci])}else if(B.isInstancedMesh)nt.renderInstances(ye,gt,B.count);else if(H.isInstancedBufferGeometry){let Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,me=Math.min(H.instanceCount,Dt);nt.renderInstances(ye,gt,me)}else nt.render(ye,gt)};function Sc(v,C,H,F){k!==null&&v.isNodeMaterial&&k.setObject(F,v),Ye===!0&&we.setState(v,H,!1),v.transparent===!0&&v.side===di&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,_r(v,C,F),v.side=hn,v.needsUpdate=!0,_r(v,C,F),v.side=di):_r(v,C,F)}this.compile=function(v,C,H=null){H===null&&(H=v),k!==null&&k.renderStart(v,C,H),S=oe.get(H),S.init(C),x.push(S),H.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),v!==H&&v.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),rt=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,rt),Ye===!0&&we.setGlobalState(this.clippingPlanes,C),k!==null&&Pe.render(S.state.shadowsArray,H,C);let F=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let fe=B.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){let ue=fe[_e];Sc(ue,H,C,B),F.add(ue)}else Sc(fe,H,C,B),F.add(fe)}),S=x.pop(),k!==null&&k.renderEnd(),F},this.compileAsync=function(v,C,H=null){let F=this.compile(v,C,H);return new Promise(B=>{function fe(){if(F.forEach(function(_e){let xe=z.get(_e).currentProgram;(xe===void 0||xe.isReady())&&F.delete(_e)}),F.size===0){B(v);return}setTimeout(fe,10)}$e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Do=null;function Kd(v){Do&&Do(v)}function bc(){gn.stop()}function wc(){gn.start()}let gn=new pd;gn.setAnimationLoop(Kd),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(v){Do=v,Me.setAnimationLoop(v),v===null?gn.stop():gn.start()},Me.addEventListener("sessionstart",bc),Me.addEventListener("sessionend",wc),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;k!==null&&k.renderStart(v,C);let H=Me.enabled===!0&&Me.isPresenting===!0,F=T!==null&&(ie===null||H)&&T.begin(N,ie);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(C),C=Me.getCamera()),v.isScene===!0&&v.onBeforeRender(N,v,C,ie),S=oe.get(v,x.length),S.init(C),S.state.textureUnits=W.getTextureUnits(),x.push(S),Ge.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ke.setFromProjectionMatrix(Ge,yi,C.reversedDepth),rt=this.localClippingEnabled,Ye=we.init(this.clippingPlanes,rt),w=he.get(v,A.length),w.init(),A.push(w),Me.enabled===!0&&Me.isPresenting===!0){let _e=N.xr.getDepthSensingMesh();_e!==null&&Uo(_e,C,-1/0,N.sortObjects)}Uo(v,C,0,N.sortObjects),w.finish(),k!==null&&k.updateLights(S.state.lightsArray),N.sortObjects===!0&&w.sort(ve,De),ut=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ut&&Ue.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&we.beginShadows();let B=S.state.shadowsArray;if(Pe.render(B,v,C),Ye===!0&&we.endShadows(),(F&&T.hasRenderPass())===!1){let _e=w.opaque,ue=w.transmissive;if(S.setupLights(),C.isArrayCamera){let xe=C.cameras;if(ue.length>0)for(let Se=0,Oe=xe.length;Se<Oe;Se++){let Ve=xe[Se];Tc(_e,ue,v,Ve)}ut&&Ue.render(v);for(let Se=0,Oe=xe.length;Se<Oe;Se++){let Ve=xe[Se];Ec(w,v,Ve,Ve.viewport)}}else ue.length>0&&Tc(_e,ue,v,C),ut&&Ue.render(v),Ec(w,v,C)}ie!==null&&Z===0&&(W.updateMultisampleRenderTarget(ie),W.updateRenderTargetMipmap(ie)),F&&T.end(N),v.isScene===!0&&v.onAfterRender(N,v,C),pe.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(S=x[x.length-1],W.setTextureUnits(S.state.textureUnits),Ye===!0&&we.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,k!==null&&k.renderEnd()};function Uo(v,C,H,F){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLightProbeGrid)S.pushLightProbeGrid(v);else if(v.isLight)S.pushLight(v),v.castShadow&&S.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(ke)){F&&wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ge);let _e=K.update(v),ue=v.material;ue.visible&&w.push(v,_e,ue,H,wt.z,null,C)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(ke))){let _e=K.update(v),ue=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),wt.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),wt.copy(_e.boundingSphere.center)),wt.applyMatrix4(v.matrixWorld).applyMatrix4(Ge)),Array.isArray(ue)){let xe=_e.groups;for(let Se=0,Oe=xe.length;Se<Oe;Se++){let Ve=xe[Se],ye=ue[Ve.materialIndex];ye&&ye.visible&&w.push(v,_e,ye,H,wt.z,Ve,C)}}else ue.visible&&w.push(v,_e,ue,H,wt.z,null,C)}}let fe=v.children;for(let _e=0,ue=fe.length;_e<ue;_e++)Uo(fe[_e],C,H,F)}function Ec(v,C,H,F){let{opaque:B,transmissive:fe,transparent:_e}=v;S.setupLightsView(H),Ye===!0&&we.setGlobalState(N.clippingPlanes,H),F&&m.viewport(te.copy(F)),B.length>0&&gr(B,C,H),fe.length>0&&gr(fe,C,H),_e.length>0&&gr(_e,C,H),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Tc(v,C,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[F.id]===void 0){let ye=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[F.id]=new Kt(1,1,{generateMipmaps:!0,type:ye?Ei:ei,minFilter:un,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let fe=S.state.transmissionRenderTarget[F.id],_e=F.viewport||te;fe.setSize(_e.z*N.transmissionResolutionScale,_e.w*N.transmissionResolutionScale);let ue=N.getRenderTarget(),xe=N.getActiveCubeFace(),Se=N.getActiveMipmapLevel();N.setRenderTarget(fe),N.getClearColor(st),Xe=N.getClearAlpha(),Xe<1&&N.setClearColor(16777215,.5),N.clear(),ut&&Ue.render(H);let Oe=N.toneMapping;N.toneMapping=li;let Ve=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),S.setupLightsView(F),Ye===!0&&we.setGlobalState(N.clippingPlanes,F),gr(v,H,F),W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let je=0,gt=C.length;je<gt;je++){let lt=C[je],{object:nt,geometry:Dt,material:me,group:kt}=lt;if(me.side===di&&nt.layers.test(F.layers)){let qe=me.side;me.side=Yt,me.needsUpdate=!0,Ac(nt,H,F,Dt,me,kt),me.side=qe,me.needsUpdate=!0,ye=!0}}ye===!0&&(W.updateMultisampleRenderTarget(fe),W.updateRenderTargetMipmap(fe))}N.setRenderTarget(ue,xe,Se),N.setClearColor(st,Xe),Ve!==void 0&&(F.viewport=Ve),N.toneMapping=Oe}function gr(v,C,H){let F=C.isScene===!0?C.overrideMaterial:null;for(let B=0,fe=v.length;B<fe;B++){let _e=v[B],{object:ue,geometry:xe,group:Se}=_e,Oe=_e.material;Oe.allowOverride===!0&&F!==null&&(Oe=F),ue.layers.test(H.layers)&&Ac(ue,C,H,xe,Oe,Se)}}function Ac(v,C,H,F,B,fe){k!==null&&B.isNodeMaterial&&k.setObject(v,B),v.onBeforeRender(N,C,H,F,B,fe),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(N,C,H,F,v,fe),B.transparent===!0&&B.side===di&&B.forceSinglePass===!1?(B.side=Yt,B.needsUpdate=!0,N.renderBufferDirect(H,C,F,B,v,fe),B.side=hn,B.needsUpdate=!0,N.renderBufferDirect(H,C,F,B,v,fe),B.side=di):N.renderBufferDirect(H,C,F,B,v,fe),v.onAfterRender(N,C,H,F,B,fe)}function _r(v,C,H){C.isScene!==!0&&(C=Jt);let F=z.get(v),B=S.state.lights,fe=S.state.shadowsArray,_e=B.state.version,ue=ae.getParameters(v,B.state,fe,C,H,S.state.lightProbeGridArray),xe=ae.getProgramCacheKey(ue),Se=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;let Oe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=se.get(v.envMap||F.environment,Oe),F.envMapRotation=F.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Se===void 0&&(v.addEventListener("dispose",Ai),Se=new Map,F.programs=Se);let Ve=Se.get(xe);if(Ve!==void 0){if(F.currentProgram===Ve&&F.lightsStateVersion===_e)return Rc(v,ue),Ve}else ue.uniforms=ae.getUniforms(v),k!==null&&v.isNodeMaterial&&k.build(v,H,ue),v.onBeforeCompile(ue,N),Ve=ae.acquireProgram(ue,xe),Se.set(xe,Ve),F.uniforms=ue.uniforms;let ye=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=we.uniform),Rc(v,ue),F.needsLights=tu(v),F.lightsStateVersion=_e,F.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.sunLights.value=B.state.sun,ye.sunLightShadows.value=B.state.sunShadow,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.sunShadowMatrix.value=B.state.sunShadowMatrix,ye.sunShadowCascade.value=B.state.sunShadowCascade,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),F.lightProbeGrid=S.state.lightProbeGridArray.length>0,F.currentProgram=Ve,F.uniformsList=null,Ve}function Cc(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=_s.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Rc(v,C){let H=z.get(v);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function $d(v,C){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let H=0,F=v.length;H<F;H++){let B=v[H];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function Qd(v,C,H,F,B){C.isScene!==!0&&(C=Jt),W.resetTextureUnits();let fe=C.fog,_e=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,ue=ie===null?N.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:We.workingColorSpace,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Se=se.get(F.envMap||_e,xe),Oe=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ye=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,gt=!!H.morphAttributes.color,lt=li;F.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=N.toneMapping);let nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=nt!==void 0?nt.length:0,me=z.get(F),kt=S.state.lights;if(Ye===!0&&(rt===!0||v!==Q)){let ot=v===Q&&F.id===X;we.setState(F,v,ot)}let qe=!1;F.version===me.__version?(me.needsLights&&me.lightsStateVersion!==kt.state.version||me.outputColorSpace!==ue||B.isBatchedMesh&&me.batching===!1||!B.isBatchedMesh&&me.batching===!0||B.isBatchedMesh&&me.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&me.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&me.instancing===!1||!B.isInstancedMesh&&me.instancing===!0||B.isSkinnedMesh&&me.skinning===!1||!B.isSkinnedMesh&&me.skinning===!0||B.isInstancedMesh&&me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&me.instancingMorph===!1&&B.morphTexture!==null||me.envMap!==Se||F.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==we.numPlanes||me.numIntersection!==we.numIntersection)||me.vertexAlphas!==Oe||me.vertexTangents!==Ve||me.morphTargets!==ye||me.morphNormals!==je||me.morphColors!==gt||me.toneMapping!==lt||me.morphTargetsCount!==Dt||!!me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,me.__version=F.version);let ci=me.currentProgram;qe===!0&&(ci=_r(F,C,B),k&&F.isNodeMaterial&&k.onUpdateProgram(F,ci,me));let Ci=!1,Zi=!1,In=!1,tt=ci.getUniforms(),pt=me.uniforms;if(m.useProgram(ci.program)&&(Ci=!0,Zi=!0,In=!0),F.id!==X&&(X=F.id,Zi=!0),me.needsLights){let ot=$d(S.state.lightProbeGridArray,B);me.lightProbeGrid!==ot&&(me.lightProbeGrid=ot,Zi=!0)}if(Ci||Q!==v){m.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),tt.setValue(I,"projectionMatrix",v.projectionMatrix),tt.setValue(I,"viewMatrix",v.matrixWorldInverse);let ji=tt.map.cameraPosition;ji!==void 0&&ji.setValue(I,ht.setFromMatrixPosition(v.matrixWorld)),b.logarithmicDepthBuffer&&tt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&tt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Zi=!0,In=!0)}if(me.needsLights&&(kt.state.sunShadowMap.length>0&&tt.setValue(I,"sunShadowMap",kt.state.sunShadowMap,W),kt.state.directionalShadowMap.length>0&&tt.setValue(I,"directionalShadowMap",kt.state.directionalShadowMap,W),kt.state.spotShadowMap.length>0&&tt.setValue(I,"spotShadowMap",kt.state.spotShadowMap,W),kt.state.pointShadowMap.length>0&&tt.setValue(I,"pointShadowMap",kt.state.pointShadowMap,W)),B.isSkinnedMesh){tt.setOptional(I,B,"bindMatrix"),tt.setOptional(I,B,"bindMatrixInverse");let ot=B.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),tt.setValue(I,"boneTexture",ot.boneTexture,W))}B.isBatchedMesh&&(tt.setOptional(I,B,"batchingTexture"),tt.setValue(I,"batchingTexture",B._matricesTexture,W),tt.setOptional(I,B,"batchingIdTexture"),tt.setValue(I,"batchingIdTexture",B._indirectTexture,W),tt.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&tt.setValue(I,"batchingColorTexture",B._colorsTexture,W));let Ji=H.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&P.update(B,H,ci),(Zi||me.receiveShadow!==B.receiveShadow)&&(me.receiveShadow=B.receiveShadow,tt.setValue(I,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(pt.envMapIntensity.value=C.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=H_()),Zi){if(tt.setValue(I,"toneMappingExposure",N.toneMappingExposure),me.needsLights&&eu(pt,In),fe&&F.fog===!0&&be.refreshFogUniforms(pt,fe),be.refreshMaterialUniforms(pt,F,$,q,S.state.transmissionRenderTarget[v.id]),me.needsLights&&me.lightProbeGrid){let ot=me.lightProbeGrid;pt.probesSH.value=ot.texture,pt.probesMin.value.copy(ot.boundingBox.min),pt.probesMax.value.copy(ot.boundingBox.max),pt.probesResolution.value.copy(ot.resolution)}_s.upload(I,Cc(me),pt,W)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_s.upload(I,Cc(me),pt,W),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&tt.setValue(I,"center",B.center),tt.setValue(I,"modelViewMatrix",B.modelViewMatrix),tt.setValue(I,"normalMatrix",B.normalMatrix),tt.setValue(I,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let ot=F.uniformsGroups;for(let ji=0,Ln=ot.length;ji<Ln;ji++){let Ic=ot[ji];ee.update(Ic,ci),ee.bind(Ic,ci)}}return ci}function eu(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function tu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(v,C,H){let F=z.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),z.get(v.texture).__webglTexture=C,z.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let H=z.get(v);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,H=0){ie=v,J=C,Z=H;let F=null,B=!1,fe=!1;if(v){let ue=z.get(v);if(ue.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(I.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(v.viewport),Re.copy(v.scissor),Te=v.scissorTest,m.viewport(te),m.scissor(Re),m.setScissorTest(Te),X=-1;return}else if(ue.__webglFramebuffer===void 0)W.setupRenderTarget(v);else if(ue.__hasExternalTextures)W.rebindTextures(v,z.get(v.texture).__webglTexture,z.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Oe=v.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&z.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);let Se=z.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Se[C])?F=Se[C][H]:F=Se[C],B=!0):v.samples>0&&W.useMultisampledRTT(v)===!1?F=z.get(v).__webglMultisampledFramebuffer:Array.isArray(Se)?F=Se[H]:F=Se,te.copy(v.viewport),Re.copy(v.scissor),Te=v.scissorTest}else te.copy(ge).multiplyScalar($).floor(),Re.copy(ze).multiplyScalar($).floor(),Te=xt;if(H!==0&&(F=G),m.bindFramebuffer(I.FRAMEBUFFER,F)&&m.drawBuffers(v,F),m.viewport(te),m.scissor(Re),m.setScissorTest(Te),B){let ue=z.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,ue.__webglTexture,H)}else if(fe){let ue=C;for(let xe=0;xe<v.textures.length;xe++){let Se=z.get(v.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,Se.__webglTexture,H,ue)}}else if(v!==null&&H!==0){let ue=z.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,H)}X=-1};function Pc(v){let C=z.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=b.textureFormatReadable(v.format),C.__typeReadable=b.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,H,F,B,fe,_e,ue=0){if(!(v&&v.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){m.bindFramebuffer(I.FRAMEBUFFER,xe);try{let Se=v.textures[ue],Oe=Se.format,Ve=Se.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue);let ye=Pc(Se);if(ye.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-F&&H>=0&&H<=v.height-B&&I.readPixels(C,H,F,B,ce.convert(Oe),ce.convert(Ve),fe)}finally{let Se=ie!==null?z.get(ie).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(v,C,H,F,B,fe,_e,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=z.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(C>=0&&C<=v.width-F&&H>=0&&H<=v.height-B){m.bindFramebuffer(I.FRAMEBUFFER,xe);let Se=v.textures[ue],Oe=Se.format,Ve=Se.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ue);let ye=Pc(Se);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(C,H,F,B,ce.convert(Oe),ce.convert(Ve),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let gt=ie!==null?z.get(ie).__webglFramebuffer:null;m.bindFramebuffer(I.FRAMEBUFFER,gt);let lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Vh(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(je),I.deleteSync(lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,H=0){let F=Math.pow(2,-H),B=Math.floor(v.image.width*F),fe=Math.floor(v.image.height*F),_e=C!==null?C.x:0,ue=C!==null?C.y:0;W.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_e,ue,B,fe),m.unbindTexture()},this.copyTextureToTexture=function(v,C,H=null,F=null,B=0,fe=0){let _e,ue,xe,Se,Oe,Ve,ye,je,gt,lt=v.isCompressedTexture?v.mipmaps[fe]:v.image;if(H!==null)_e=H.max.x-H.min.x,ue=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Oe=H.min.y,Ve=H.isBox3?H.min.z:0;else{let pt=Math.pow(2,-B);_e=Math.floor(lt.width*pt),ue=Math.floor(lt.height*pt),v.isDataArrayTexture?xe=lt.depth:v.isData3DTexture?xe=Math.floor(lt.depth*pt):xe=1,Se=0,Oe=0,Ve=0}F!==null?(ye=F.x,je=F.y,gt=F.z):(ye=0,je=0,gt=0);let nt=ce.convert(C.format),Dt=ce.convert(C.type),me;C.isData3DTexture?(W.setTexture3D(C,0),me=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(W.setTexture2DArray(C,0),me=I.TEXTURE_2D_ARRAY):(W.setTexture2D(C,0),me=I.TEXTURE_2D),m.activeTexture(I.TEXTURE0),m.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),m.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),m.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);let kt=m.getParameter(I.UNPACK_ROW_LENGTH),qe=m.getParameter(I.UNPACK_IMAGE_HEIGHT),ci=m.getParameter(I.UNPACK_SKIP_PIXELS),Ci=m.getParameter(I.UNPACK_SKIP_ROWS),Zi=m.getParameter(I.UNPACK_SKIP_IMAGES);m.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),m.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),m.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),m.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);let In=v.isDataArrayTexture||v.isData3DTexture,tt=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let pt=z.get(v),Ji=z.get(C),ot=z.get(pt.__renderTarget),ji=z.get(Ji.__renderTarget);m.bindFramebuffer(I.READ_FRAMEBUFFER,ot.__webglFramebuffer),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ln=0;Ln<xe;Ln++)In&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(v).__webglTexture,B,Ve+Ln),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.get(C).__webglTexture,fe,gt+Ln)),I.blitFramebuffer(Se,Oe,_e,ue,ye,je,_e,ue,I.DEPTH_BUFFER_BIT,I.NEAREST);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||z.has(v)){let pt=z.get(v),Ji=z.get(C);m.bindFramebuffer(I.READ_FRAMEBUFFER,D),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,V);for(let ot=0;ot<xe;ot++)In?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.__webglTexture,B,Ve+ot):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pt.__webglTexture,B),tt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ji.__webglTexture,fe,gt+ot):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ji.__webglTexture,fe),B!==0?I.blitFramebuffer(Se,Oe,_e,ue,ye,je,_e,ue,I.COLOR_BUFFER_BIT,I.NEAREST):tt?I.copyTexSubImage3D(me,fe,ye,je,gt+ot,Se,Oe,_e,ue):I.copyTexSubImage2D(me,fe,ye,je,Se,Oe,_e,ue);m.bindFramebuffer(I.READ_FRAMEBUFFER,null),m.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else tt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(me,fe,ye,je,gt,_e,ue,xe,nt,Dt,lt.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(me,fe,ye,je,gt,_e,ue,xe,nt,lt.data):I.texSubImage3D(me,fe,ye,je,gt,_e,ue,xe,nt,Dt,lt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,fe,ye,je,_e,ue,nt,Dt,lt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,fe,ye,je,lt.width,lt.height,nt,lt.data):I.texSubImage2D(I.TEXTURE_2D,fe,ye,je,_e,ue,nt,Dt,lt);m.pixelStorei(I.UNPACK_ROW_LENGTH,kt),m.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qe),m.pixelStorei(I.UNPACK_SKIP_PIXELS,ci),m.pixelStorei(I.UNPACK_SKIP_ROWS,Ci),m.pixelStorei(I.UNPACK_SKIP_IMAGES,Zi),fe===0&&C.generateMipmaps&&I.generateMipmap(me),m.unbindTexture()},this.initRenderTarget=function(v){z.get(v).__webglFramebuffer===void 0&&W.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?W.setTextureCube(v,0):v.isData3DTexture?W.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?W.setTexture2DArray(v,0):W.setTexture2D(v,0),m.unbindTexture()},this.resetState=function(){J=0,Z=0,ie=null,m.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Md={type:"change"},lc={type:"start"},bd={type:"end"},vo=new Mn,Sd=new Rt,W_=Math.cos(70*Ol.DEG2RAD),bt=new L,ti=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oc=1e-6,xo=class extends ir{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xt.ROTATE,MIDDLE:Xt.DOLLY,RIGHT:Xt.PAN},this.touches={ONE:qt.ROTATE,TWO:qt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ri,this._lastTargetPosition=new L,this._quat=new ri().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new L,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new L,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=q_.bind(this),this._onPointerDown=X_.bind(this),this._onPointerUp=Y_.bind(this),this._onContextMenu=e0.bind(this),this._onMouseWheel=j_.bind(this),this._onKeyDown=K_.bind(this),this._onTouchStart=$_.bind(this),this._onTouchMove=Q_.bind(this),this._onMouseDown=Z_.bind(this),this._onMouseMove=J_.bind(this),this._interceptControlDown=t0.bind(this),this._interceptControlUp=i0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=et.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Md),this.update(),this.state=et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ti:i>Math.PI&&(i-=ti),s<-Math.PI?s+=ti:s>Math.PI&&(s-=ti),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=bt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<W_?this.object.lookAt(this.target):(Sd.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(Sd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oc||this._lastTargetPosition.distanceToSquared(this.target)>oc?(this.dispatchEvent(Md),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ti/60*this.autoRotateSpeed*e:ti/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function X_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function q_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Y_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bd),this.state=et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Z_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=et.DOLLY;break;case Xt.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}break;case Xt.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(lc)}function J_(n){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function j_(n){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(n.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bd))}function K_(n){this.enabled!==!1&&this._handleKeyDown(n)}function $_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=et.TOUCH_ROTATE;break;case qt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case qt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=et.TOUCH_DOLLY_PAN;break;case qt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(lc)}function Q_(n){switch(this._trackPointer(n),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=et.NONE}}function e0(n){this.enabled!==!1&&n.preventDefault()}function t0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var cc=new Rt,yo=new bn,xs=new Ee,hc=new L,Mo=class extends xo{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Xt.PAN,MIDDLE:Xt.DOLLY,RIGHT:Xt.ROTATE},this.touches={ONE:qt.PAN,TWO:qt.DOLLY_ROTATE},this._panWorldStart=new L}_handleMouseDownPan(e){if(super._handleMouseDownPan(e),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;cc.setFromNormalAndCoplanarPoint(this.object.up,this.target);let i=this.domElement.getBoundingClientRect();xs.x=(e.clientX-i.left)/i.width*2-1,xs.y=-((e.clientY-i.top)/i.height)*2+1,yo.setFromCamera(xs,this.object),yo.ray.intersectPlane(cc,this._panWorldStart)}_handleMouseMovePan(e){if(this.screenSpacePanning===!0){super._handleMouseMovePan(e);return}let i=this.domElement.getBoundingClientRect();xs.x=(e.clientX-i.left)/i.width*2-1,xs.y=-((e.clientY-i.top)/i.height)*2+1,yo.setFromCamera(xs,this.object),yo.ray.intersectPlane(cc,hc)&&(hc.sub(this._panWorldStart),this._panOffset.copy(hc).negate(),this.update())}};var So=class extends Mo{constructor(e,t=null){e.up.set(0,0,1),super(e,t),this.enableDamping=!1,this.screenSpacePanning=!1,this.zoomToCursor=!0,this.rotateSpeed=.45,this.zoomSpeed=.7,this.minPolarAngle=0,this.maxPolarAngle=Math.PI*.375,this.maxZoom=60,this.touches.TWO=qt.DOLLY_PAN,this.rotationMode=!1}update(e){let t=super.update(e);return this.object.updateMatrixWorld(!0),this._groundPivot()||t}_groundPivot(){if(this.focusPivot||!this.groundHeight||!this.object.isOrthographicCamera)return!1;let e=this.object,t=e.getWorldDirection(new L),i=this.target.clone();if(t.z>-.35)return!1;let s=this.groundHeight(i.x,i.y);for(let o=0;o<8;o++){i.copy(e.position).addScaledVector(t,(s-e.position.z)/t.z);let l=this.groundHeight(i.x,i.y);if(Math.abs(l-s)<.001)break;s=l}let r=i.sub(this.target);if(r.lengthSq()<1e-12)return!1;e.position.add(r),this.target.add(r);let a=super.update();return e.updateMatrixWorld(!0),a}_handleMouseDownPan(e){this.focusPivot=!1,this._groundPivot(),super._handleMouseDownPan(e)}_handleTouchStartPan(e){this.focusPivot=!1,this._groundPivot(),super._handleTouchStartPan(e)}_handleMouseWheel(e){this.focusPivot=!1,this._groundPivot(),super._handleMouseWheel(e)}_pan(e,t){if(!(!this.domElement||this.domElement.clientWidth<1||this.domElement.clientHeight<1)){if(this.focusPivot=!1,this._groundPivot(),this.object.isOrthographicCamera&&!this.screenSpacePanning){let i=new L().setFromMatrixColumn(this.object.matrix,0),s=new L().crossVectors(this.object.up,i).normalize(),r=new L().setFromMatrixColumn(this.object.matrix,1);t/=Math.max(.35,s.dot(r))}super._pan(e,t)}}_handleMouseDownDolly(e){super._handleMouseDownDolly(e),this._updateZoomParameters(e.clientX,e.clientY)}_handleTouchMoveDolly(e){let t=this._scale;super._handleTouchMoveDolly(e),(!Number.isFinite(this._scale)||this._scale<=0)&&(this._scale=t),this._scale=Math.max(t/1.2,Math.min(t*1.2,this._scale))}_customWheelEvent(e){let t=super._customWheelEvent(e);return t.deltaY=Math.max(-250,Math.min(250,t.deltaY)),t}};function dc(n,e){n.rotationMode=!!e,n.mouseButtons.LEFT=e?Xt.ROTATE:Xt.PAN,n.touches.ONE=e?qt.ROTATE:qt.PAN}function wd(n,e,t,{aspect:i,mode:s="aerial",pad:r=1.16,distance:a=3e3,direction:o=new L(1.15,-.95,1.2),minimumHeight:l=50,pivotHeight:c}){let d=t.getCenter(new L);c!==void 0&&(d.z=c);let f=s==="plan"?new L(0,-1e-5,1):o.clone().normalize();e.enableDamping=!1,e.update(),e.focusPivot=c===void 0,n.position.copy(d).addScaledVector(f,a),n.up.set(0,0,1),e.target.copy(d),n.zoom=1,e.update(),n.updateMatrixWorld(!0);let h=new L().setFromMatrixColumn(n.matrix,0),u=new L().setFromMatrixColumn(n.matrix,1),_=1/0,y=-1/0,g=1/0,p=-1/0;for(let E of[t.min.x,t.max.x])for(let R of[t.min.y,t.max.y])for(let M of[t.min.z,t.max.z]){let w=new L(E,R,M).sub(d),S=w.dot(h),A=w.dot(u);_=Math.min(_,S),y=Math.max(y,S),g=Math.min(g,A),p=Math.max(p,A)}return Math.max(2*Math.max(Math.abs(g),Math.abs(p))*r,2*Math.max(Math.abs(_),Math.abs(y))/i*r,l)}var bo=class extends Li{constructor(e){super(e),this.debug=!1,this.group=null,this.materials=[],this.meshes=[]}load(e,t,i,s){let r=this,a=this.path===""?tr.extractUrlBase(e):this.path,o=new ls(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){this.group=new si,this.materials=[],this.meshes=[],this.readFile(e,t);for(let i=0;i<this.meshes.length;i++)this.group.add(this.meshes[i]);return this.group}readFile(e,t){let i=new DataView(e),s=new uc(i,0,this.debugMessage);if(s.id===s0||s.id===r0||s.id===n0){let r=s.readChunk();for(;r;){if(r.id===a0){let a=r.readDWord();this.debugMessage("3DS file version: "+a)}else r.id===f0?this.readMeshData(r,t):this.debugMessage("Unknown main chunk: "+r.hexId);r=s.readChunk()}}this.debugMessage("Parsed "+this.meshes.length+" meshes")}readMeshData(e,t){let i=e.readChunk();for(;i;){if(i.id===p0){let s=+i.readDWord();this.debugMessage("Mesh Version: "+s)}else if(i.id===m0){let s=i.readFloat();this.debugMessage("Master scale: "+s),this.group.scale.set(s,s,s)}else i.id===O0?(this.debugMessage("Named Object"),this.readNamedObject(i)):i.id===g0?(this.debugMessage("Material"),this.readMaterialEntry(i,t)):this.debugMessage("Unknown MDATA chunk: "+i.hexId);i=e.readChunk()}}readNamedObject(e){let t=e.readString(),i=e.readChunk();for(;i;){if(i.id===F0){let s=this.readMesh(i);s.name=t,this.meshes.push(s)}else this.debugMessage("Unknown named object chunk: "+i.hexId);i=e.readChunk()}}readMaterialEntry(e,t){let i=e.readChunk(),s=new Sn;for(;i;){if(i.id===_0)s.name=i.readString(),this.debugMessage("   Name: "+s.name);else if(i.id===E0)this.debugMessage("   Wireframe"),s.wireframe=!0;else if(i.id===T0){let r=i.readByte();s.wireframeLinewidth=r,this.debugMessage("   Wireframe Thickness: "+r)}else if(i.id===b0)s.side=di,this.debugMessage("   DoubleSided");else if(i.id===w0)this.debugMessage("   Additive Blending"),s.blending=nr;else if(i.id===x0)this.debugMessage("   Diffuse Color"),s.color=this.readColor(i);else if(i.id===y0)this.debugMessage("   Specular Color"),s.specular=this.readColor(i);else if(i.id===v0)this.debugMessage("   Ambient color"),s.color=this.readColor(i);else if(i.id===M0){let r=this.readPercentage(i);s.shininess=r*100,this.debugMessage("   Shininess : "+r)}else if(i.id===S0){let r=this.readPercentage(i);s.opacity=1-r,this.debugMessage("  Transparency : "+r),s.transparent=s.opacity<1}else i.id===A0?(this.debugMessage("   ColorMap"),s.map=this.readMap(i,t)):i.id===R0?(this.debugMessage("   BumpMap"),s.bumpMap=this.readMap(i,t)):i.id===C0?(this.debugMessage("   OpacityMap"),s.alphaMap=this.readMap(i,t)):i.id===P0?(this.debugMessage("   SpecularMap"),s.specularMap=this.readMap(i,t)):this.debugMessage("   Unknown material chunk: "+i.hexId);i=e.readChunk()}this.materials[s.name]=s}readMesh(e){let t=e.readChunk(),i=new $t,s=new Sn,r=new Bt(i,s);for(r.name="mesh";t;){if(t.id===B0){let a=t.readWord();this.debugMessage("   Vertex: "+a);let o=[];for(let l=0;l<a;l++)o.push(t.readFloat()),o.push(t.readFloat()),o.push(t.readFloat());i.setAttribute("position",new Gt(o,3))}else if(t.id===z0)this.readFaceArray(t,r);else if(t.id===V0){let a=t.readWord();this.debugMessage("   UV: "+a);let o=[];for(let l=0;l<a;l++)o.push(t.readFloat()),o.push(t.readFloat());i.setAttribute("uv",new Gt(o,2))}else if(t.id===H0){this.debugMessage("   Transformation Matrix (TODO)");let a=[];for(let c=0;c<12;c++)a[c]=t.readFloat();let o=new Qe;o.elements[0]=a[0],o.elements[1]=a[6],o.elements[2]=a[3],o.elements[3]=a[9],o.elements[4]=a[2],o.elements[5]=a[8],o.elements[6]=a[5],o.elements[7]=a[11],o.elements[8]=a[1],o.elements[9]=a[7],o.elements[10]=a[4],o.elements[11]=a[10],o.elements[12]=0,o.elements[13]=0,o.elements[14]=0,o.elements[15]=1,o.transpose();let l=new Qe;l.copy(o).invert(),i.applyMatrix4(l),o.decompose(r.position,r.quaternion,r.scale)}else this.debugMessage("   Unknown mesh chunk: "+t.hexId);t=e.readChunk()}return i.computeVertexNormals(),r}readFaceArray(e,t){let i=e.readWord();this.debugMessage("   Faces: "+i);let s=[];for(let o=0;o<i;++o)s.push(e.readWord(),e.readWord(),e.readWord()),e.readWord();t.geometry.setIndex(s);let r=0,a=0;for(;!e.endOfChunk;){let o=e.readChunk();if(o.id===k0){this.debugMessage("      Material Group");let l=this.readMaterialGroup(o),c=l.index.length*3;t.geometry.addGroup(a,c,r),a+=c,r++;let d=this.materials[l.name];Array.isArray(t.material)===!1&&(t.material=[]),d!==void 0&&t.material.push(d)}else this.debugMessage("      Unknown face array chunk: "+o.hexId)}t.material.length===1&&(t.material=t.material[0])}readMap(e,t){let i=e.readChunk(),s={},r=new Js(this.manager);for(r.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);i;){if(i.id===I0){let a=i.readString();s=r.load(a),this.debugMessage("      File: "+t+a)}else i.id===D0?(s.offset.x=i.readFloat(),this.debugMessage("      OffsetX: "+s.offset.x)):i.id===U0?(s.offset.y=i.readFloat(),this.debugMessage("      OffsetY: "+s.offset.y)):i.id===L0?(s.repeat.x=i.readFloat(),this.debugMessage("      RepeatX: "+s.repeat.x)):i.id===N0?(s.repeat.y=i.readFloat(),this.debugMessage("      RepeatY: "+s.repeat.y)):this.debugMessage("      Unknown map chunk: "+i.hexId);i=e.readChunk()}return s}readMaterialGroup(e){let t=e.readString(),i=e.readWord();this.debugMessage("         Name: "+t),this.debugMessage("         Faces: "+i);let s=[];for(let r=0;r<i;++r)s.push(e.readWord());return{name:t,index:s}}readColor(e){let t=e.readChunk(),i=new Ce;if(t.id===l0||t.id===c0){let s=t.readByte(),r=t.readByte(),a=t.readByte();i.setRGB(s/255,r/255,a/255),this.debugMessage("      Color: "+i.r+", "+i.g+", "+i.b)}else if(t.id===o0||t.id===h0){let s=t.readFloat(),r=t.readFloat(),a=t.readFloat();i.setRGB(s,r,a),this.debugMessage("      Color: "+i.r+", "+i.g+", "+i.b)}else this.debugMessage("      Unknown color chunk: "+t.hexId);return i}readPercentage(e){let t=e.readChunk();switch(t.id){case d0:return t.readShort()/100;case u0:return t.readFloat();default:return this.debugMessage("      Unknown percentage chunk: "+t.hexId),0}}debugMessage(e){this.debug&&console.log(e)}},uc=class n{constructor(e,t,i){this.data=e,this.offset=t,this.position=t,this.debugMessage=i,this.debugMessage instanceof Function&&(this.debugMessage=function(){}),this.id=this.readWord(),this.size=this.readDWord(),this.end=this.offset+this.size,this.end>e.byteLength&&this.debugMessage("Bad chunk size for chunk at "+t)}readChunk(){if(this.endOfChunk)return null;try{let e=new n(this.data,this.position,this.debugMessage);return this.position+=e.size,e}catch{return this.debugMessage("Unable to read chunk at "+this.position),null}}get hexId(){return this.id.toString(16)}get endOfChunk(){return this.position>=this.end}readByte(){let e=this.data.getUint8(this.position,!0);return this.position+=1,e}readFloat(){try{let e=this.data.getFloat32(this.position,!0);return this.position+=4,e}catch(e){return this.debugMessage(e+" "+this.position+" "+this.data.byteLength),0}}readInt(){let e=this.data.getInt32(this.position,!0);return this.position+=4,e}readShort(){let e=this.data.getInt16(this.position,!0);return this.position+=2,e}readDWord(){let e=this.data.getUint32(this.position,!0);return this.position+=4,e}readWord(){let e=this.data.getUint16(this.position,!0);return this.position+=2,e}readString(){let e="",t=this.readByte();for(;t;)e+=String.fromCharCode(t),t=this.readByte();return e}},n0=19789,s0=15786,r0=49725,a0=2,o0=16,l0=17,c0=18,h0=19,d0=48,u0=49,f0=15677,p0=15678,m0=256,g0=45055,_0=40960,v0=40976,x0=40992,y0=41008,M0=41024,S0=41040,b0=41089,w0=41091,E0=41093,T0=41095,A0=41472,C0=41488,R0=41520,P0=41476,I0=41728,L0=41812,N0=41814,D0=41816,U0=41818,O0=16384,F0=16640,B0=16656,z0=16672,k0=16688,V0=16704,H0=16736;var wo=class extends bo{readFaceArray(e,t){if(this.faceGroups=[],super.readFaceArray(e,t),!this.faceGroups.length)return;let i=t.geometry.index.array,s=[];for(let r of this.faceGroups)for(let a of r.index){let o=a*3;s.push(i[o],i[o+1],i[o+2])}if(s.length!==i.length)throw new Error("Incomplete 3DS face material assignments");t.geometry.setIndex(s)}readMaterialGroup(e){let t=super.readMaterialGroup(e);return this.faceGroups.push(t),t}};var Ed=`(()=>{var Yi=1;var Zi=3,ei=0,Ji=1,ni=2;var $i=1,ii=2;var Ki=100;var Qi=204,ji=205;var Fn=0,On=1,Bn=2,Ve=3,zn=4,Vn=5,kn=6,Gn=7,hn=0,ts=1,es=2;var si=1,ri=2,ai=3,oi=4,li=5,ci=6,hi=7;var ui=300,ns=301,di=302;var is=306,Hn=1e3,ce=1001,Wn=1002;var ss=1006;var rs=1008;var as=1009;var os=1015;var ls=1023;var ue=2300,ke=2301,Oe=2302,Xn=2303,qn=2400,Yn=2401,Zn=2402;var cs=0;var fi="",nt="srgb",Jn="srgb-linear",$n="linear",Be="srgb";var ze=7680;var hs=519;var us=35044;var he=2e3,Kn=2001;function xs(d){for(let t=d.length-1;t>=0;--t)if(d[t]>=65535)return!0;return!1}function vs(d){return ArrayBuffer.isView(d)&&!(d instanceof DataView)}function Ge(d){return document.createElementNS("http://www.w3.org/1999/xhtml",d)}var Ri={},He=null;function ds(d){let t=d[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=d[1];e&&e.isStackTrace?d[0]+=" "+e.getLocation():d[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return d}function z(...d){d=ds(d);let t="THREE."+d.shift();if(He)He("warn",t,...d);else{let e=d[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...d)}}function O(...d){d=ds(d);let t="THREE."+d.shift();if(He)He("error",t,...d);else{let e=d[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...d)}}function Jt(...d){let t=d.join(" ");t in Ri||(Ri[t]=!0,z(...d))}var ys={[Fn]:On,[Bn]:kn,[zn]:Gn,[Ve]:Vn,[On]:Fn,[kn]:Bn,[Gn]:zn,[Vn]:Ve},At=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},W=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xl=Math.PI/180,Ms=180/Math.PI;function ye(){let d=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(W[d&255]+W[d>>8&255]+W[d>>16&255]+W[d>>24&255]+"-"+W[t&255]+W[t>>8&255]+"-"+W[t>>16&15|64]+W[t>>24&255]+"-"+W[e&63|128]+W[e>>8&255]+"-"+W[e>>16&255]+W[e>>24&255]+W[n&255]+W[n>>8&255]+W[n>>16&255]+W[n>>24&255]).toLowerCase()}function R(d,t,e){return Math.max(t,Math.min(e,d))}function Ss(d,t){return(d%t+t)%t}function mn(d,t,e){return(1-e)*d+e*t}function se(d,t){switch(t.constructor){case Float32Array:return d;case Uint32Array:return d/4294967295;case Uint16Array:return d/65535;case Uint8Array:case Uint8ClampedArray:return d/255;case Int32Array:return Math.max(d/2147483647,-1);case Int16Array:return Math.max(d/32767,-1);case Int8Array:return Math.max(d/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Y(d,t){switch(t.constructor){case Float32Array:return d;case Uint32Array:return Math.round(d*4294967295);case Uint16Array:return Math.round(d*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(d*255);case Int32Array:return Math.round(d*2147483647);case Int16Array:return Math.round(d*32767);case Int8Array:return Math.round(d*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gi=class gi{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=R(this.x,t.x,e.x),this.y=R(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=R(this.x,t,e),this.y=R(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(R(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gi.prototype.isVector2=!0;var k=gi,mt=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],o=n[i+1],c=n[i+2],h=n[i+3],u=s[r+0],f=s[r+1],p=s[r+2],m=s[r+3];if(h!==m||l!==u||o!==f||c!==p){let _=l*u+o*f+c*p+h*m;_<0&&(u=-u,f=-f,p=-p,m=-m,_=-_);let x=1-a;if(_<.9995){let y=Math.acos(_),S=Math.sin(y);x=Math.sin(x*y)/S,a=Math.sin(a*y)/S,l=l*x+u*a,o=o*x+f*a,c=c*x+p*a,h=h*x+m*a}else{l=l*x+u*a,o=o*x+f*a,c=c*x+p*a,h=h*x+m*a;let y=1/Math.sqrt(l*l+o*o+c*c+h*h);l*=y,o*=y,c*=y,h*=y}}t[e]=l,t[e+1]=o,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],l=n[i+1],o=n[i+2],c=n[i+3],h=s[r],u=s[r+1],f=s[r+2],p=s[r+3];return t[e]=a*p+c*h+l*f-o*u,t[e+1]=l*p+c*u+o*h-a*f,t[e+2]=o*p+c*f+a*u-l*h,t[e+3]=c*p-a*h-l*u-o*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,o=a(n/2),c=a(i/2),h=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(r){case"XYZ":this._x=u*c*h+o*f*p,this._y=o*f*h-u*c*p,this._z=o*c*p+u*f*h,this._w=o*c*h-u*f*p;break;case"YXZ":this._x=u*c*h+o*f*p,this._y=o*f*h-u*c*p,this._z=o*c*p-u*f*h,this._w=o*c*h+u*f*p;break;case"ZXY":this._x=u*c*h-o*f*p,this._y=o*f*h+u*c*p,this._z=o*c*p+u*f*h,this._w=o*c*h-u*f*p;break;case"ZYX":this._x=u*c*h-o*f*p,this._y=o*f*h+u*c*p,this._z=o*c*p-u*f*h,this._w=o*c*h+u*f*p;break;case"YZX":this._x=u*c*h+o*f*p,this._y=o*f*h+u*c*p,this._z=o*c*p-u*f*h,this._w=o*c*h-u*f*p;break;case"XZY":this._x=u*c*h-o*f*p,this._y=o*f*h-u*c*p,this._z=o*c*p+u*f*h,this._w=o*c*h+u*f*p;break;default:z("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],o=e[2],c=e[6],h=e[10],u=n+a+h;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-o)*f,this._z=(r-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+o)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(s-o)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+o)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(R(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,o=e._z,c=e._w;return this._x=n*c+r*a+i*o-s*l,this._y=i*c+r*l+s*a-n*o,this._z=s*c+r*o+n*l-i*a,this._w=r*c-n*a-i*l-s*o,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,r=-r,a=-a);let l=1-e;if(a<.9995){let o=Math.acos(a),c=Math.sin(o);l=Math.sin(l*o)/c,e=Math.sin(e*o)/c,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_i=class _i{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ii.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ii.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,o=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*o+r*h-a*c,this.y=n+l*c+a*o-s*h,this.z=i+l*h+s*c-r*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=R(this.x,t.x,e.x),this.y=R(this.y,t.y,e.y),this.z=R(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=R(this.x,t,e),this.y=R(this.y,t,e),this.z=R(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gn.copy(this).projectOnVector(t),this.sub(gn)}reflect(t){return this.sub(gn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(R(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_i.prototype.isVector3=!0;var g=_i,gn=new g,Ii=new mt,xi=class xi{constructor(t,e,n,i,s,r,a,l,o){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,o)}set(t,e,n,i,s,r,a,l,o){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=n,c[7]=r,c[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],o=n[1],c=n[4],h=n[7],u=n[2],f=n[5],p=n[8],m=i[0],_=i[3],x=i[6],y=i[1],S=i[4],M=i[7],T=i[2],w=i[5],A=i[8];return s[0]=r*m+a*y+l*T,s[3]=r*_+a*S+l*w,s[6]=r*x+a*M+l*A,s[1]=o*m+c*y+h*T,s[4]=o*_+c*S+h*w,s[7]=o*x+c*M+h*A,s[2]=u*m+f*y+p*T,s[5]=u*_+f*S+p*w,s[8]=u*x+f*M+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],o=t[7],c=t[8];return e*r*c-e*a*o-n*s*c+n*a*l+i*s*o-i*r*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],o=t[7],c=t[8],h=c*r-a*o,u=a*l-c*s,f=o*s-r*l,p=e*h+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return t[0]=h*m,t[1]=(i*o-c*n)*m,t[2]=(a*n-i*r)*m,t[3]=u*m,t[4]=(c*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*l-o*e)*m,t[8]=(r*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let l=Math.cos(s),o=Math.sin(s);return this.set(n*l,n*o,-n*(l*r+o*a)+r+t,-i*o,i*l,-i*(-o*r+l*a)+a+e,0,0,1),this}scale(t,e){return Jt("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_n.makeScale(t,e)),this}rotate(t){return Jt("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_n.makeRotation(-t)),this}translate(t,e){return Jt("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_n.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xi.prototype.isMatrix3=!0;var E=xi,_n=new E,Pi=new E().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Li=new E().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bs(){let d={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Be&&(i.r=ft(i.r),i.g=ft(i.g),i.b=ft(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Be&&(i.r=$t(i.r),i.g=$t(i.g),i.b=$t(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?$n:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Jt("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),d.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Jt("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),d.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return d.define({[Jn]:{primaries:t,whitePoint:n,transfer:$n,toXYZ:Pi,fromXYZ:Li,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:Pi,fromXYZ:Li,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),d}var et=bs();function ft(d){return d<.04045?d*.0773993808:Math.pow(d*.9478672986+.0521327014,2.4)}function $t(d){return d<.0031308?d*12.92:1.055*Math.pow(d,.41666)-.055}var Ot,We=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ot===void 0&&(Ot=Ge("canvas")),Ot.width=t.width,Ot.height=t.height;let i=Ot.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ot}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ge("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ft(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ft(e[n]/255)*255):e[n]=ft(e[n]);return{data:e,width:t.width,height:t.height}}else return z("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ts=0,Xe=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ts++}),this.uuid=ye(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(xn(i[r].image)):s.push(xn(i[r]))}else s=xn(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function xn(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap?We.getDataURL(d):d.data?{data:Array.from(d.data),width:d.width,height:d.height,type:d.data.constructor.name}:(z("Texture: Unable to serialize Texture."),{})}var As=0,vn=new g,Dt=class d extends At{constructor(t=d.DEFAULT_IMAGE,e=d.DEFAULT_MAPPING,n=ce,i=ce,s=ss,r=rs,a=ls,l=as,o=d.DEFAULT_ANISOTROPY,c=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:As++}),this.uuid=ye(),this.name="",this.source=new Xe(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=l,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new E,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vn).x}get height(){return this.source.getSize(vn).y}get depth(){return this.source.getSize(vn).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){z(\`Texture.setValues(): parameter '\${e}' has value of undefined.\`);continue}let i=this[e];if(i===void 0){z(\`Texture.setValues(): property '\${e}' does not exist.\`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ui)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hn:t.x=t.x-Math.floor(t.x);break;case ce:t.x=t.x<0?0:1;break;case Wn:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hn:t.y=t.y-Math.floor(t.y);break;case ce:t.y=t.y<0?0:1;break;case Wn:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=ui;Dt.DEFAULT_ANISOTROPY=1;var vi=class vi{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,o=l[0],c=l[4],h=l[8],u=l[1],f=l[5],p=l[9],m=l[2],_=l[6],x=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-m)<.01&&Math.abs(p-_)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+m)<.1&&Math.abs(p+_)<.1&&Math.abs(o+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(o+1)/2,M=(f+1)/2,T=(x+1)/2,w=(c+u)/4,A=(h+m)/4,b=(p+_)/4;return S>M&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=A/n):M>T?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=b/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=b/s),this.set(n,i,s,e),this}let y=Math.sqrt((_-p)*(_-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(_-p)/y,this.y=(h-m)/y,this.z=(u-c)/y,this.w=Math.acos((o+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=R(this.x,t.x,e.x),this.y=R(this.y,t.y,e.y),this.z=R(this.z,t.z,e.z),this.w=R(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=R(this.x,t,e),this.y=R(this.y,t,e),this.z=R(this.z,t,e),this.w=R(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vi.prototype.isVector4=!0;var Qt=vi;var cn=class cn{constructor(t,e,n,i,s,r,a,l,o,c,h,u,f,p,m,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,o,c,h,u,f,p,m,_)}set(t,e,n,i,s,r,a,l,o,c,h,u,f,p,m,_){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=r,x[9]=a,x[13]=l,x[2]=o,x[6]=c,x[10]=h,x[14]=u,x[3]=f,x[7]=p,x[11]=m,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Bt.setFromMatrixColumn(t,0).length(),s=1/Bt.setFromMatrixColumn(t,1).length(),r=1/Bt.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=r*c,f=r*h,p=a*c,m=a*h;e[0]=l*c,e[4]=-l*h,e[8]=o,e[1]=f+p*o,e[5]=u-m*o,e[9]=-a*l,e[2]=m-u*o,e[6]=p+f*o,e[10]=r*l}else if(t.order==="YXZ"){let u=l*c,f=l*h,p=o*c,m=o*h;e[0]=u+m*a,e[4]=p*a-f,e[8]=r*o,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=f*a-p,e[6]=m+u*a,e[10]=r*l}else if(t.order==="ZXY"){let u=l*c,f=l*h,p=o*c,m=o*h;e[0]=u-m*a,e[4]=-r*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*c,e[9]=m-u*a,e[2]=-r*o,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let u=r*c,f=r*h,p=a*c,m=a*h;e[0]=l*c,e[4]=p*o-f,e[8]=u*o+m,e[1]=l*h,e[5]=m*o+u,e[9]=f*o-p,e[2]=-o,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*o,p=a*l,m=a*o;e[0]=l*c,e[4]=m-u*h,e[8]=p*h+f,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-o*c,e[6]=f*h+p,e[10]=u-m*h}else if(t.order==="XZY"){let u=r*l,f=r*o,p=a*l,m=a*o;e[0]=l*c,e[4]=-h,e[8]=o*c,e[1]=u*h+m,e[5]=r*c,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*c,e[10]=m*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Es,t,ws)}lookAt(t,e,n){let i=this.elements;return J.subVectors(t,e),J.lengthSq()===0&&(J.z=1),J.normalize(),yt.crossVectors(n,J),yt.lengthSq()===0&&(Math.abs(n.z)===1?J.x+=1e-4:J.z+=1e-4,J.normalize(),yt.crossVectors(n,J)),yt.normalize(),Me.crossVectors(J,yt),i[0]=yt.x,i[4]=Me.x,i[8]=J.x,i[1]=yt.y,i[5]=Me.y,i[9]=J.y,i[2]=yt.z,i[6]=Me.z,i[10]=J.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],o=n[12],c=n[1],h=n[5],u=n[9],f=n[13],p=n[2],m=n[6],_=n[10],x=n[14],y=n[3],S=n[7],M=n[11],T=n[15],w=i[0],A=i[4],b=i[8],I=i[12],P=i[1],L=i[5],B=i[9],D=i[13],G=i[2],N=i[6],Q=i[10],j=i[14],it=i[3],xt=i[7],vt=i[11],Ft=i[15];return s[0]=r*w+a*P+l*G+o*it,s[4]=r*A+a*L+l*N+o*xt,s[8]=r*b+a*B+l*Q+o*vt,s[12]=r*I+a*D+l*j+o*Ft,s[1]=c*w+h*P+u*G+f*it,s[5]=c*A+h*L+u*N+f*xt,s[9]=c*b+h*B+u*Q+f*vt,s[13]=c*I+h*D+u*j+f*Ft,s[2]=p*w+m*P+_*G+x*it,s[6]=p*A+m*L+_*N+x*xt,s[10]=p*b+m*B+_*Q+x*vt,s[14]=p*I+m*D+_*j+x*Ft,s[3]=y*w+S*P+M*G+T*it,s[7]=y*A+S*L+M*N+T*xt,s[11]=y*b+S*B+M*Q+T*vt,s[15]=y*I+S*D+M*j+T*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],o=t[13],c=t[2],h=t[6],u=t[10],f=t[14],p=t[3],m=t[7],_=t[11],x=t[15],y=l*f-o*u,S=a*f-o*h,M=a*u-l*h,T=r*f-o*c,w=r*u-l*c,A=r*h-a*c;return e*(m*y-_*S+x*M)-n*(p*y-_*T+x*w)+i*(p*S-m*T+x*A)-s*(p*M-m*w+_*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],l=t[2],o=t[6],c=t[10];return e*(r*c-a*o)-n*(s*c-a*l)+i*(s*o-r*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],o=t[7],c=t[8],h=t[9],u=t[10],f=t[11],p=t[12],m=t[13],_=t[14],x=t[15],y=e*a-n*r,S=e*l-i*r,M=e*o-s*r,T=n*l-i*a,w=n*o-s*a,A=i*o-s*l,b=c*m-h*p,I=c*_-u*p,P=c*x-f*p,L=h*_-u*m,B=h*x-f*m,D=u*x-f*_,G=y*D-S*B+M*L+T*P-w*I+A*b;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/G;return t[0]=(a*D-l*B+o*L)*N,t[1]=(i*B-n*D-s*L)*N,t[2]=(m*A-_*w+x*T)*N,t[3]=(u*w-h*A-f*T)*N,t[4]=(l*P-r*D-o*I)*N,t[5]=(e*D-i*P+s*I)*N,t[6]=(_*M-p*A-x*S)*N,t[7]=(c*A-u*M+f*S)*N,t[8]=(r*B-a*P+o*b)*N,t[9]=(n*P-e*B-s*b)*N,t[10]=(p*w-m*M+x*y)*N,t[11]=(h*M-c*w-f*y)*N,t[12]=(a*I-r*L-l*b)*N,t[13]=(e*L-n*I+i*b)*N,t[14]=(m*S-p*T-_*y)*N,t[15]=(c*T-h*S+u*y)*N,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,o=s*r,c=s*a;return this.set(o*r+n,o*a-i*l,o*l+i*a,0,o*a+i*l,c*a+n,c*l-i*r,0,o*l-i*a,c*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,o=s+s,c=r+r,h=a+a,u=s*o,f=s*c,p=s*h,m=r*c,_=r*h,x=a*h,y=l*o,S=l*c,M=l*h,T=n.x,w=n.y,A=n.z;return i[0]=(1-(m+x))*T,i[1]=(f+M)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-M)*w,i[5]=(1-(u+x))*w,i[6]=(_+y)*w,i[7]=0,i[8]=(p+S)*A,i[9]=(_-y)*A,i[10]=(1-(u+m))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Bt.set(i[0],i[1],i[2]).length(),a=Bt.set(i[4],i[5],i[6]).length(),l=Bt.set(i[8],i[9],i[10]).length();s<0&&(r=-r),st.copy(this);let o=1/r,c=1/a,h=1/l;return st.elements[0]*=o,st.elements[1]*=o,st.elements[2]*=o,st.elements[4]*=c,st.elements[5]*=c,st.elements[6]*=c,st.elements[8]*=h,st.elements[9]*=h,st.elements[10]*=h,e.setFromRotationMatrix(st),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,r,a=he,l=!1){let o=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,m;if(l)p=s/(r-s),m=r*s/(r-s);else if(a===he)p=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===Kn)p=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=h,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=he,l=!1){let o=this.elements,c=2/(e-t),h=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,m;if(l)p=1/(r-s),m=r/(r-s);else if(a===he)p=-2/(r-s),m=-(r+s)/(r-s);else if(a===Kn)p=-1/(r-s),m=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=h,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=p,o[14]=m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};cn.prototype.isMatrix4=!0;var Z=cn,Bt=new g,st=new Z,Es=new g(0,0,0),ws=new g(1,1,1),yt=new g,Me=new g,J=new g,Di=new Z,Ni=new mt,Nt=class d{constructor(t=0,e=0,n=0,i=d.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],o=i[5],c=i[9],h=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-R(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(R(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-R(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,o));break;case"YZX":this._z=Math.asin(R(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-R(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:z("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Di.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Di,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ni.setFromEuler(this),this.setFromQuaternion(Ni,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nt.DEFAULT_ORDER="XYZ";var qe=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cs=0,Ui=new g,zt=new mt,ot=new Z,Se=new g,re=new g,Rs=new g,Is=new mt,Fi=new g(1,0,0),Oi=new g(0,1,0),Bi=new g(0,0,1),zi={type:"added"},Ps={type:"removed"},Vt={type:"childadded",child:null},yn={type:"childremoved",child:null},gt=class d extends At{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cs++}),this.uuid=ye(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=d.DEFAULT_UP.clone();let t=new g,e=new Nt,n=new mt,i=new g(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Z},normalMatrix:{value:new E}}),this.matrix=new Z,this.matrixWorld=new Z,this.matrixAutoUpdate=d.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=d.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zt.setFromAxisAngle(t,e),this.quaternion.multiply(zt),this}rotateOnWorldAxis(t,e){return zt.setFromAxisAngle(t,e),this.quaternion.premultiply(zt),this}rotateX(t){return this.rotateOnAxis(Fi,t)}rotateY(t){return this.rotateOnAxis(Oi,t)}rotateZ(t){return this.rotateOnAxis(Bi,t)}translateOnAxis(t,e){return Ui.copy(t).applyQuaternion(this.quaternion),this.position.add(Ui.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fi,t)}translateY(t){return this.translateOnAxis(Oi,t)}translateZ(t){return this.translateOnAxis(Bi,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ot.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Se.copy(t):Se.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),re.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ot.lookAt(re,Se,this.up):ot.lookAt(Se,re,this.up),this.quaternion.setFromRotationMatrix(ot),i&&(ot.extractRotation(i.matrixWorld),zt.setFromRotationMatrix(ot),this.quaternion.premultiply(zt.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(O("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zi),Vt.child=t,this.dispatchEvent(Vt),Vt.child=null):O("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ps),yn.child=t,this.dispatchEvent(yn),yn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ot.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ot.multiply(t.parent.matrixWorld)),t.applyMatrix4(ot),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zi),Vt.child=t,this.dispatchEvent(Vt),Vt.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(re,t,Rs),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(re,Is,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let o=0,c=l.length;o<c;o++){let h=l[o];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,o=this.material.length;l<o;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),o=r(t.textures),c=r(t.images),h=r(t.shapes),u=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),o.length>0&&(n.textures=o),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){let l=[];for(let o in a){let c=a[o];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new g(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var de=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var fs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mt={h:0,s:0,l:0},be={h:0,s:0,l:0};function Mn(d,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?d+(t-d)*6*e:e<1/2?t:e<2/3?d+(t-d)*6*(2/3-e):d}var U=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,et.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=et.workingColorSpace){return this.r=t,this.g=e,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=et.workingColorSpace){if(t=Ss(t,1),e=R(e,0,1),n=R(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Mn(r,s,t+1/3),this.g=Mn(r,s,t),this.b=Mn(r,s,t-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(t,e=nt){function n(s){s!==void 0&&parseFloat(s)<1&&z("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\\w+)\\(([^\\)]*)\\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:z("Color: Unknown color model "+t)}}else if(i=/^\\#([A-Fa-f\\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);z("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nt){let n=fs[t.toLowerCase()];return n!==void 0?this.setHex(n,e):z("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ft(t.r),this.g=ft(t.g),this.b=ft(t.b),this}copyLinearToSRGB(t){return this.r=$t(t.r),this.g=$t(t.g),this.b=$t(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nt){return et.workingToColorSpace(X.copy(this),t),Math.round(R(X.r*255,0,255))*65536+Math.round(R(X.g*255,0,255))*256+Math.round(R(X.b*255,0,255))}getHexString(t=nt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=et.workingColorSpace){et.workingToColorSpace(X.copy(this),e);let n=X.r,i=X.g,s=X.b,r=Math.max(n,i,s),a=Math.min(n,i,s),l,o,c=(a+r)/2;if(a===r)l=0,o=0;else{let h=r-a;switch(o=c<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=o,t.l=c,t}getRGB(t,e=et.workingColorSpace){return et.workingToColorSpace(X.copy(this),e),t.r=X.r,t.g=X.g,t.b=X.b,t}getStyle(t=nt){et.workingToColorSpace(X.copy(this),t);let e=X.r,n=X.g,i=X.b;return t!==nt?\`color(\${t} \${e.toFixed(3)} \${n.toFixed(3)} \${i.toFixed(3)})\`:\`rgb(\${Math.round(e*255)},\${Math.round(n*255)},\${Math.round(i*255)})\`}offsetHSL(t,e,n){return this.getHSL(Mt),this.setHSL(Mt.h+t,Mt.s+e,Mt.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mt),t.getHSL(be);let n=mn(Mt.h,be.h,e),i=mn(Mt.s,be.s,e),s=mn(Mt.l,be.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},X=new U;U.NAMES=fs;var rt=new g,lt=new g,Sn=new g,ct=new g,kt=new g,Gt=new g,Vi=new g,bn=new g,Tn=new g,An=new g,En=new Qt,wn=new Qt,Cn=new Qt,Tt=class d{constructor(t=new g,e=new g,n=new g){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rt.subVectors(t,e),i.cross(rt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rt.subVectors(i,e),lt.subVectors(n,e),Sn.subVectors(t,e);let r=rt.dot(rt),a=rt.dot(lt),l=rt.dot(Sn),o=lt.dot(lt),c=lt.dot(Sn),h=r*o-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,f=(o*l-a*c)*u,p=(r*c-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ct)===null?!1:ct.x>=0&&ct.y>=0&&ct.x+ct.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,ct)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ct.x),l.addScaledVector(r,ct.y),l.addScaledVector(a,ct.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return En.setScalar(0),wn.setScalar(0),Cn.setScalar(0),En.fromBufferAttribute(t,e),wn.fromBufferAttribute(t,n),Cn.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(En,s.x),r.addScaledVector(wn,s.y),r.addScaledVector(Cn,s.z),r}static isFrontFacing(t,e,n,i){return rt.subVectors(n,e),lt.subVectors(t,e),rt.cross(lt).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rt.subVectors(this.c,this.b),lt.subVectors(this.a,this.b),rt.cross(lt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return d.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return d.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return d.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return d.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return d.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;kt.subVectors(i,n),Gt.subVectors(s,n),bn.subVectors(t,n);let l=kt.dot(bn),o=Gt.dot(bn);if(l<=0&&o<=0)return e.copy(n);Tn.subVectors(t,i);let c=kt.dot(Tn),h=Gt.dot(Tn);if(c>=0&&h<=c)return e.copy(i);let u=l*h-c*o;if(u<=0&&l>=0&&c<=0)return r=l/(l-c),e.copy(n).addScaledVector(kt,r);An.subVectors(t,s);let f=kt.dot(An),p=Gt.dot(An);if(p>=0&&f<=p)return e.copy(s);let m=f*o-l*p;if(m<=0&&o>=0&&p<=0)return a=o/(o-p),e.copy(n).addScaledVector(Gt,a);let _=c*p-f*h;if(_<=0&&h-c>=0&&f-p>=0)return Vi.subVectors(s,i),a=(h-c)/(h-c+(f-p)),e.copy(i).addScaledVector(Vi,a);let x=1/(_+m+u);return r=m*x,a=u*x,e.copy(n).addScaledVector(kt,r).addScaledVector(Gt,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Et=class{constructor(t=new g(1/0,1/0,1/0),e=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(at.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(at.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=at.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,at):at.fromBufferAttribute(s,r),at.applyMatrix4(t.matrixWorld),this.expandByPoint(at);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Te.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Te.copy(n.boundingBox)),Te.applyMatrix4(t.matrixWorld),this.union(Te)}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,at),at.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ae),Ae.subVectors(this.max,ae),Ht.subVectors(t.a,ae),Wt.subVectors(t.b,ae),Xt.subVectors(t.c,ae),St.subVectors(Wt,Ht),bt.subVectors(Xt,Wt),It.subVectors(Ht,Xt);let e=[0,-St.z,St.y,0,-bt.z,bt.y,0,-It.z,It.y,St.z,0,-St.x,bt.z,0,-bt.x,It.z,0,-It.x,-St.y,St.x,0,-bt.y,bt.x,0,-It.y,It.x,0];return!Rn(e,Ht,Wt,Xt,Ae)||(e=[1,0,0,0,1,0,0,0,1],!Rn(e,Ht,Wt,Xt,Ae))?!1:(Ee.crossVectors(St,bt),e=[Ee.x,Ee.y,Ee.z],Rn(e,Ht,Wt,Xt,Ae))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,at).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(at).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ht),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ht=[new g,new g,new g,new g,new g,new g,new g,new g],at=new g,Te=new Et,Ht=new g,Wt=new g,Xt=new g,St=new g,bt=new g,It=new g,ae=new g,Ae=new g,Ee=new g,Pt=new g;function Rn(d,t,e,n,i){for(let s=0,r=d.length-3;s<=r;s+=3){Pt.fromArray(d,s);let a=i.x*Math.abs(Pt.x)+i.y*Math.abs(Pt.y)+i.z*Math.abs(Pt.z),l=t.dot(Pt),o=e.dot(Pt),c=n.dot(Pt);if(Math.max(-Math.max(l,o,c),Math.min(l,o,c))>a)return!1}return!0}var V=new g,we=new k,Ls=0,pt=class extends At{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ls++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=us,this.updateRanges=[],this.gpuType=os,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXY(e,we.x,we.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)V.fromBufferAttribute(this,e),V.applyMatrix3(t),this.setXYZ(e,V.x,V.y,V.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)V.fromBufferAttribute(this,e),V.applyMatrix4(t),this.setXYZ(e,V.x,V.y,V.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)V.fromBufferAttribute(this,e),V.applyNormalMatrix(t),this.setXYZ(e,V.x,V.y,V.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)V.fromBufferAttribute(this,e),V.transformDirection(t),this.setXYZ(e,V.x,V.y,V.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=se(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Y(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=se(e,this.array)),e}setX(t,e){return this.normalized&&(e=Y(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=se(e,this.array)),e}setY(t,e){return this.normalized&&(e=Y(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=se(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Y(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=se(e,this.array)),e}setW(t,e){return this.normalized&&(e=Y(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Y(e,this.array),n=Y(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Y(e,this.array),n=Y(n,this.array),i=Y(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Y(e,this.array),n=Y(n,this.array),i=Y(i,this.array),s=Y(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ye=class extends pt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ze=class extends pt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ut=class extends pt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ds=new Et,oe=new g,In=new g,fe=class{constructor(t=new g,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ds.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oe.subVectors(t,this.center);let e=oe.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(oe,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(In.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oe.copy(t.center).add(In)),this.expandByPoint(oe.copy(t.center).sub(In))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ns=0,tt=new Z,Pn=new gt,qt=new g,$=new Et,le=new Et,H=new g,jt=class d extends At{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ns++}),this.uuid=ye(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xs(t)?Ze:Ye)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new E().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tt.makeRotationFromQuaternion(t),this.applyMatrix4(tt),this}rotateX(t){return tt.makeRotationX(t),this.applyMatrix4(tt),this}rotateY(t){return tt.makeRotationY(t),this.applyMatrix4(tt),this}rotateZ(t){return tt.makeRotationZ(t),this.applyMatrix4(tt),this}translate(t,e,n){return tt.makeTranslation(t,e,n),this.applyMatrix4(tt),this}scale(t,e,n){return tt.makeScale(t,e,n),this.applyMatrix4(tt),this}lookAt(t){return Pn.lookAt(t),Pn.updateMatrix(),this.applyMatrix4(Pn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qt).negate(),this.translate(qt.x,qt.y,qt.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ut(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&z("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){O("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];$.setFromBufferAttribute(s),this.morphTargetsRelative?(H.addVectors(this.boundingBox.min,$.min),this.boundingBox.expandByPoint(H),H.addVectors(this.boundingBox.max,$.max),this.boundingBox.expandByPoint(H)):(this.boundingBox.expandByPoint($.min),this.boundingBox.expandByPoint($.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&O('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){O("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if(t){let n=this.boundingSphere.center;if($.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];le.setFromBufferAttribute(a),this.morphTargetsRelative?(H.addVectors($.min,le.min),$.expandByPoint(H),H.addVectors($.max,le.max),$.expandByPoint(H)):($.expandByPoint(le.min),$.expandByPoint(le.max))}$.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)H.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(H));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],l=this.morphTargetsRelative;for(let o=0,c=a.count;o<c;o++)H.fromBufferAttribute(a,o),l&&(qt.fromBufferAttribute(t,o),H.add(qt)),i=Math.max(i,n.distanceToSquared(H))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&O('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){O("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new g,l[b]=new g;let o=new g,c=new g,h=new g,u=new k,f=new k,p=new k,m=new g,_=new g;function x(b,I,P){o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,P),u.fromBufferAttribute(s,b),f.fromBufferAttribute(s,I),p.fromBufferAttribute(s,P),c.sub(o),h.sub(o),f.sub(u),p.sub(u);let L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(m.copy(c).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(L),_.copy(h).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(L),a[b].add(m),a[I].add(m),a[P].add(m),l[b].add(_),l[I].add(_),l[P].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let b=0,I=y.length;b<I;++b){let P=y[b],L=P.start,B=P.count;for(let D=L,G=L+B;D<G;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let S=new g,M=new g,T=new g,w=new g;function A(b){T.fromBufferAttribute(i,b),w.copy(T);let I=a[b];S.copy(I),S.sub(T.multiplyScalar(T.dot(I))).normalize(),M.crossVectors(w,I);let L=M.dot(l[b])<0?-1:1;r.setXYZW(b,S.x,S.y,S.z,L)}for(let b=0,I=y.length;b<I;++b){let P=y[b],L=P.start,B=P.count;for(let D=L,G=L+B;D<G;D+=3)A(t.getX(D+0)),A(t.getX(D+1)),A(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new g,s=new g,r=new g,a=new g,l=new g,o=new g,c=new g,h=new g;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),m=t.getX(u+1),_=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),a.add(c),l.add(c),o.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(_,o.x,o.y,o.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)H.fromBufferAttribute(t,e),H.normalize(),t.setXYZ(e,H.x,H.y,H.z)}toNonIndexed(){function t(a,l){let o=a.array,c=a.itemSize,h=a.normalized,u=new o.constructor(l.length*c),f=0,p=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*c;for(let x=0;x<c;x++)u[p++]=o[f++]}return new pt(u,c,h)}if(this.index===null)return z("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new d,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],o=t(l,n);e.setAttribute(a,o)}let s=this.morphAttributes;for(let a in s){let l=[],o=s[a];for(let c=0,h=o.length;c<h;c++){let u=o[c],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let o=r[a];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let o in l)l[o]!==void 0&&(t[o]=l[o]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let o=n[l];t.data.attributes[l]=o.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let o=this.morphAttributes[l],c=[];for(let h=0,u=o.length;h<u;h++){let f=o[h];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let o in i){let c=i[o];this.setAttribute(o,c.clone(e))}let s=t.morphAttributes;for(let o in s){let c=[],h=s[o];for(let u=0,f=h.length;u<f;u++)c.push(h[u].clone(e));this.morphAttributes[o]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let o=0,c=r.length;o<c;o++){let h=r[o];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ln=new g,Us=new g,Fs=new E,Je=class{constructor(t=new g(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ln.subVectors(n,e).cross(Us.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ln),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fs.getNormalMatrix(t),i=this.coplanarPoint(Ln).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Os=0,pe=class extends At{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Os++}),this.uuid=ye(),this.name="",this.type="Material",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qi,this.blendDst=ji,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=Ve,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){z(\`Material: parameter '\${e}' has value of undefined.\`);continue}let i=this[e];if(i===void 0){z(\`Material: '\${e}' is not a property of THREE.\${this.type}.\`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let l=s[a];delete l.metadata,r.push(l)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new U().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new k().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new k().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ut=new g,Dn=new g,Ce=new g,Re=new g,$e=class{constructor(t=new g,e=new g(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ut)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ut.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ut.copy(this.origin).addScaledVector(this.direction,e),ut.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dn.copy(t).add(e).multiplyScalar(.5),Ce.copy(e).sub(t).normalize(),Re.copy(this.origin).sub(Dn);let s=t.distanceTo(e)*.5,r=-this.direction.dot(Ce),a=Re.dot(this.direction),l=-Re.dot(Ce),o=Re.lengthSq(),c=Math.abs(1-r*r),h,u,f,p;if(c>0)if(h=r*l-a,u=r*a-l,p=s*c,h>=0)if(u>=-p)if(u<=p){let m=1/c;h*=m,u*=m,f=h*(h+r*u+2*a)+u*(r*h+u+2*l)+o}else u=s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+o;else u=-s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+o;else u<=-p?(h=Math.max(0,-(-r*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+o):u<=p?(h=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+o):(h=Math.max(0,-(r*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+u*(u+2*l)+o);else u=r>0?-s:s,h=Math.max(0,-(r*u+a)),f=-h*h+u*(u+2*l)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dn).addScaledVector(Ce,u),f}intersectSphere(t,e){if(t.radius<0)return null;ut.subVectors(t.center,this.origin);let n=ut.dot(this.direction),i=ut.dot(ut)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l,o=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return o>=0?(n=(t.min.x-u.x)*o,i=(t.max.x-u.x)*o):(n=(t.max.x-u.x)*o,i=(t.min.x-u.x)*o),c>=0?(s=(t.min.y-u.y)*c,r=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,r=(t.min.y-u.y)*c),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ut)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,l=a.x,o=a.y,c=a.z,h=t.x-r.x,u=t.y-r.y,f=t.z-r.z,p=e.x-r.x,m=e.y-r.y,_=e.z-r.z,x=n.x-r.x,y=n.y-r.y,S=n.z-r.z,M=Math.abs(l),T=Math.abs(o),w=Math.abs(c),A,b,I,P,L,B,D,G,N,Q,j,it;if(M>=T&&M>=w?(I=l,B=h,N=p,it=x,l>=0?(A=o,b=c,P=u,L=f,D=m,G=_,Q=y,j=S):(A=c,b=o,P=f,L=u,D=_,G=m,Q=S,j=y)):T>=w?(I=o,B=u,N=m,it=y,o>=0?(A=c,b=l,P=f,L=h,D=_,G=p,Q=S,j=x):(A=l,b=c,P=h,L=f,D=p,G=_,Q=x,j=S)):(I=c,B=f,N=_,it=S,c>=0?(A=l,b=o,P=h,L=u,D=p,G=m,Q=x,j=y):(A=o,b=l,P=u,L=h,D=m,G=p,Q=y,j=x)),I===0)return null;let xt=A/I,vt=b/I,Ft=1/I,bi=P-xt*B,Ti=L-vt*B,Ai=D-xt*N,Ei=G-vt*N,wi=Q-xt*it,Ci=j-vt*it,ee=wi*Ei-Ci*Ai,ne=bi*Ci-Ti*wi,ie=Ai*Ti-Ei*bi;if(i){if(ee<0||ne<0||ie<0)return null}else if((ee<0||ne<0||ie<0)&&(ee>0||ne>0||ie>0))return null;let fn=ee+ne+ie;if(fn===0)return null;let pn=Ft*(ee*B+ne*N+ie*it);return(fn>0?pn<0:pn>0)?null:this.at(pn/fn,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class extends pe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=hn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ki=new Z,Lt=new $e,Ie=new fe,Gi=new g,Pe=new g,Le=new g,De=new g,Nn=new g,Ne=new g,Hi=new g,Ue=new g,me=class extends gt{constructor(t=new jt,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ne.set(0,0,0);for(let l=0,o=s.length;l<o;l++){let c=a[l],h=s[l];c!==0&&(Nn.fromBufferAttribute(h,t),r?Ne.addScaledVector(Nn,c):Ne.addScaledVector(Nn.sub(e),c))}e.add(Ne)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ie.copy(n.boundingSphere),Ie.applyMatrix4(s),Lt.copy(t.ray).recast(t.near),!(Ie.containsPoint(Lt.origin)===!1&&(Lt.intersectSphere(Ie,Gi)===null||Lt.origin.distanceToSquared(Gi)>(t.far-t.near)**2))&&(ki.copy(s).invert(),Lt.copy(t.ray).applyMatrix4(ki),!(n.boundingBox!==null&&Lt.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Lt)))}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,o=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,m=u.length;p<m;p++){let _=u[p],x=r[_.materialIndex],y=Math.max(_.start,f.start),S=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){let w=a.getX(M),A=a.getX(M+1),b=a.getX(M+2);i=Fe(this,x,t,n,o,c,h,w,A,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let _=p,x=m;_<x;_+=3){let y=a.getX(_),S=a.getX(_+1),M=a.getX(_+2);i=Fe(this,r,t,n,o,c,h,y,S,M),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,m=u.length;p<m;p++){let _=u[p],x=r[_.materialIndex],y=Math.max(_.start,f.start),S=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let M=y,T=S;M<T;M+=3){let w=M,A=M+1,b=M+2;i=Fe(this,x,t,n,o,c,h,w,A,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let _=p,x=m;_<x;_+=3){let y=_,S=_+1,M=_+2;i=Fe(this,r,t,n,o,c,h,y,S,M),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function Bs(d,t,e,n,i,s,r,a){let l;if(t.side===Ji?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===ei,a),l===null)return null;Ue.copy(a),Ue.applyMatrix4(d.matrixWorld);let o=e.ray.origin.distanceTo(Ue);return o<e.near||o>e.far?null:{distance:o,point:Ue.clone(),object:d}}function Fe(d,t,e,n,i,s,r,a,l,o){d.getVertexPosition(a,Pe),d.getVertexPosition(l,Le),d.getVertexPosition(o,De);let c=Bs(d,t,e,n,Pe,Le,De,Hi);if(c){let h=new g;Tt.getBarycoord(Hi,Pe,Le,De,h),i&&(c.uv=Tt.getInterpolatedAttribute(i,a,l,o,h,new k)),s&&(c.uv1=Tt.getInterpolatedAttribute(s,a,l,o,h,new k)),r&&(c.normal=Tt.getInterpolatedAttribute(r,a,l,o,h,new g),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:o,normal:new g,materialIndex:0};Tt.getNormal(Pe,Le,De,u.normal),c.face=u,c.barycoord=h}return c}function ps(d){let t={};for(let e in d){t[e]={};for(let n in d[e]){let i=d[e][n];if(Wi(i))i.isRenderTargetTexture?(z("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Wi(i[0])){let s=[];for(let r=0,a=i.length;r<a;r++)s[r]=i[r].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function q(d){let t={};for(let e=0;e<d.length;e++){let n=ps(d[e]);for(let i in n)t[i]=n[i]}return t}function Wi(d){return d&&(d.isColor||d.isMatrix3||d.isMatrix4||d.isVector2||d.isVector3||d.isVector4||d.isTexture||d.isQuaternion)}var te=class extends pe{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new U(16777215),this.specular=new U(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cs,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=hn,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Yt(d,t){return!d||d.constructor===t?d:typeof t.BYTES_PER_ELEMENT=="number"?new t(d):Array.prototype.slice.call(d)}function Un(d){return d!==void 0&&d.inTangents!==void 0&&d.outTangents!==void 0}var wt=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qe=class extends wt{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qn,endingEnd:qn}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Yn:s=t,a=2*e-n;break;case Zn:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yn:r=t,l=2*n-e;break;case Zn:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}let o=(n-e)*.5,c=this.valueSize;this._weightPrev=o/(e-a),this._weightNext=o/(l-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,o=l-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),m=p*p,_=m*p,x=-u*_+2*u*m-u*p,y=(1+u)*_+(-1.5-2*u)*m+(-.5+u)*p+1,S=(-1-f)*_+(1.5+f)*m+.5*p,M=f*_-f*m;for(let T=0;T!==a;++T)s[T]=x*r[c+T]+y*r[o+T]+S*r[l+T]+M*r[h+T];return s}},je=class extends wt{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,o=l-a,c=(n-e)/(i-e),h=1-c;for(let u=0;u!==a;++u)s[u]=r[o+u]*h+r[l+u]*c;return s}},tn=class extends wt{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class extends wt{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,o=l-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(n-e)/(i-e),m=1-p;for(let _=0;_!==a;++_)s[_]=r[o+_]*m+r[l+_]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let m=r[o+p],_=r[l+p],x=f*u+p*2,y=h[x],S=h[x+1],M=t*u+p*2,T=c[M],w=c[M+1],A=Vs(n,e,y,T,i);s[p]=ms(A,m,S,w,_)}return s}};function ms(d,t,e,n,i){let s=1-d;return s*s*s*t+3*s*s*d*e+3*s*d*d*n+d*d*d*i}function zs(d,t,e,n,i){let s=1-d;return 3*s*s*(e-t)+6*s*d*(n-e)+3*d*d*(i-n)}function Vs(d,t,e,n,i){let s=(d-t)/(i-t);for(let r=0;r<8;r++){let a=ms(s,t,e,n,i)-d;if(Math.abs(a)<1e-10)break;let l=zs(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var K=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yt(e,this.TimeBufferType),this.values=Yt(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yt(t.times,Array),values:Yt(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Un(t.settings)&&(n.settings={inTangents:Yt(t.settings.inTangents,Array),outTangents:Yt(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tn(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new je(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qe(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new en(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ue:e=this.InterpolantFactoryMethodDiscrete;break;case ke:e=this.InterpolantFactoryMethodLinear;break;case Oe:e=this.InterpolantFactoryMethodSmooth;break;case Xn:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return z("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ue;case this.InterpolantFactoryMethodLinear:return ke;case this.InterpolantFactoryMethodSmooth:return Oe;case this.InterpolantFactoryMethodBezier:return Xn}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Un(this.settings)&&(Xi(this.settings.inTangents,t),Xi(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(O("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(O("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){O("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){O("KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&vs(i))for(let a=0,l=i.length;a!==l;++a){let o=i[a];if(isNaN(o)){O("KeyframeTrack: Value is not a valid number.",this,a,o),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oe,s=t.length-1,r=1;for(let a=1;a<s;++a){let l=!1,o=t[a],c=t[a+1];if(o!==c&&(a!==1||o!==t[0]))if(i)l=!0;else{let h=a*n,u=h-n,f=h+n;for(let p=0;p!==n;++p){let m=e[h+p];if(m!==e[u+p]||m!==e[f+p]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let h=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,o=0;o!==n;++o)e[l+o]=e[a+o];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Un(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Xi(d,t){for(let e=0,n=d.length;e!==n;e+=2)d[e]*=t}K.prototype.ValueTypeName="";K.prototype.TimeBufferType=Float32Array;K.prototype.ValueBufferType=Float32Array;K.prototype.DefaultInterpolation=ke;var Ct=class extends K{constructor(t,e,n){super(t,e,n)}};Ct.prototype.ValueTypeName="bool";Ct.prototype.ValueBufferType=Array;Ct.prototype.DefaultInterpolation=ue;Ct.prototype.InterpolantFactoryMethodLinear=void 0;Ct.prototype.InterpolantFactoryMethodSmooth=void 0;var nn=class extends K{constructor(t,e,n,i){super(t,e,n,i)}};nn.prototype.ValueTypeName="color";var sn=class extends K{constructor(t,e,n,i){super(t,e,n,i)}};sn.prototype.ValueTypeName="number";var rn=class extends wt{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),o=t*a;for(let c=o+a;o!==c;o+=4)mt.slerpFlat(s,0,r,o-a,r,o,l);return s}},ge=class extends K{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new rn(this.times,this.values,this.getValueSize(),t)}};ge.prototype.ValueTypeName="quaternion";ge.prototype.InterpolantFactoryMethodSmooth=void 0;var Rt=class extends K{constructor(t,e,n){super(t,e,n)}};Rt.prototype.ValueTypeName="string";Rt.prototype.ValueBufferType=Array;Rt.prototype.DefaultInterpolation=ue;Rt.prototype.InterpolantFactoryMethodLinear=void 0;Rt.prototype.InterpolantFactoryMethodSmooth=void 0;var an=class extends K{constructor(t,e,n,i){super(t,e,n,i)}};an.prototype.ValueTypeName="vector";var Kt={enabled:!1,files:{},add:function(d,t){this.enabled!==!1&&(qi(d)||(this.files[d]=t))},get:function(d){if(this.enabled!==!1&&!qi(d))return this.files[d]},remove:function(d){delete this.files[d]},clear:function(){this.files={}}};function qi(d){try{let t=d.slice(d.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var on=class{constructor(t,e,n){let i=this,s=!1,r=0,a=0,l,o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,s===!1&&i.onStart!==void 0&&i.onStart(c,r,a),s=!0},this.itemEnd=function(c){r++,i.onProgress!==void 0&&i.onProgress(c,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return o.push(c,h),this},this.removeHandler=function(c){let h=o.indexOf(c);return h!==-1&&o.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=o.length;h<u;h+=2){let f=o[h],p=o[h+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gs=new on,_t=class{constructor(t){this.manager=t!==void 0?t:gs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_t.DEFAULT_MATERIAL_NAME="__DEFAULT";var dt={},Qn=class extends Error{constructor(t,e){super(t),this.response=e}},_e=class extends _t{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Kt.get(\`file:\${t}\`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(dt[t]!==void 0){dt[t].push({onLoad:e,onProgress:n,onError:i});return}dt[t]=[],dt[t].push({onLoad:e,onProgress:n,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(r).then(o=>{if(o.status===200||o.status===0){if(o.status===0&&z("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||o.body===void 0||o.body.getReader===void 0)return o;let c=dt[t],h=o.body.getReader(),u=o.headers.get("X-File-Size")||o.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,m=0,_=new ReadableStream({start(x){y();function y(){h.read().then(({done:S,value:M})=>{if(S)x.close();else{m+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:f});for(let w=0,A=c.length;w<A;w++){let b=c[w];b.onProgress&&b.onProgress(T)}x.enqueue(M),y()}},S=>{x.error(S)})}}});return new Response(_)}else throw new Qn(\`fetch for "\${o.url}" responded with \${o.status}: \${o.statusText}\`,o)}).then(o=>{switch(l){case"arraybuffer":return o.arrayBuffer();case"blob":return o.blob();case"document":return o.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return o.json();default:if(a==="")return o.text();{let h=/charset="?([^;"\\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return o.arrayBuffer().then(p=>f.decode(p))}}}).then(o=>{Kt.add(\`file:\${t}\`,o);let c=dt[t];delete dt[t];for(let h=0,u=c.length;h<u;h++){let f=c[h];f.onLoad&&f.onLoad(o)}}).catch(o=>{let c=dt[t];if(c===void 0)throw this.manager.itemError(t),o;delete dt[t];for(let h=0,u=c.length;h<u;h++){let f=c[h];f.onError&&f.onError(o)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zt=new WeakMap,ln=class extends _t{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Kt.get(\`image:\${t}\`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0);else{let h=Zt.get(r);h===void 0&&(h=[],Zt.set(r,h)),h.push({onLoad:e,onError:i})}return r}let a=Ge("img");function l(){c(),e&&e(this);let h=Zt.get(this)||[];for(let u=0;u<h.length;u++){let f=h[u];f.onLoad&&f.onLoad(this)}Zt.delete(this),s.manager.itemEnd(t)}function o(h){c(),i&&i(h),Kt.remove(\`image:\${t}\`);let u=Zt.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(h)}Zt.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",o,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",o,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kt.add(\`image:\${t}\`,a),s.manager.itemStart(t),a.src=t,a}};var xe=class extends _t{constructor(t){super(t)}load(t,e,n,i){let s=new Dt,r=new ln(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}};var ve=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\\/\\//i.test(e)&&/^\\//.test(t)&&(e=e.replace(/(^https?:\\/\\/[^\\/]+).*/i,"$1")),/^(https?:)?\\/\\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var pi="\\\\[\\\\]\\\\.:\\\\/",ks=new RegExp("["+pi+"]","g"),mi="[^"+pi+"]",Gs="[^"+pi.replace("\\\\.","")+"]",Hs=/((?:WC+[\\/:])*)/.source.replace("WC",mi),Ws=/(WCOD+)?/.source.replace("WCOD",Gs),Xs=/(?:\\.(WC+)(?:\\[(.+)\\])?)?/.source.replace("WC",mi),qs=/\\.(WC+)(?:\\[(.+)\\])?/.source.replace("WC",mi),Ys=new RegExp("^"+Hs+Ws+Xs+qs+"$"),Zs=["material","materials","bones","map"],jn=class{constructor(t,e,n){let i=n||F.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},F=class d{constructor(t,e,n){this.path=e,this.parsedPath=n||d.parseTrackName(e),this.node=d.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new d.Composite(t,e,n):new d(t,e,n)}static sanitizeNodeName(t){return t.replace(/\\s/g,"_").replace(ks,"")}static parseTrackName(t){let e=Ys.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Zs.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=d.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=e.objectIndex;switch(n){case"materials":if(!t.material){O("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){O("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){O("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===o){o=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){O("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){O("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){O("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(o!==void 0){if(t[o]===void 0){O("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[o]}}let r=t[i];if(r===void 0){let o=e.nodeName;O("PropertyBinding: Trying to update property for track: "+o+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){O("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){O("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};F.Composite=jn;F.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};F.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};F.prototype.GetterByBindingType=[F.prototype._getValue_direct,F.prototype._getValue_array,F.prototype._getValue_arrayElement,F.prototype._getValue_toArray];F.prototype.SetterByBindingTypeAndVersioning=[[F.prototype._setValue_direct,F.prototype._setValue_direct_setNeedsUpdate,F.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[F.prototype._setValue_array,F.prototype._setValue_array_setNeedsUpdate,F.prototype._setValue_array_setMatrixWorldNeedsUpdate],[F.prototype._setValue_arrayElement,F.prototype._setValue_arrayElement_setNeedsUpdate,F.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[F.prototype._setValue_fromArray,F.prototype._setValue_fromArray_setNeedsUpdate,F.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vl=new Float32Array(1);var yi=class yi{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};yi.prototype.isMatrix2=!0;var ti=yi;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?z("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var Js=\`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif\`,$s=\`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif\`,Ks=\`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif\`,Qs=\`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif\`,js=\`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif\`,tr=\`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif\`,er=\`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif\`,nr=\`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif\`,ir=\`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif\`,sr=\`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif\`,rr=\`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif\`,ar=\`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif\`,or=\`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated\`,lr=\`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif\`,cr=\`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif\`,hr=\`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif\`,ur=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif\`,dr=\`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif\`,fr=\`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif\`,pr=\`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif\`,mr=\`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif\`,gr=\`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif\`,_r=\`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif\`,xr=\`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated\`,vr=\`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif\`,yr=\`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif\`,Mr=\`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif\`,Sr=\`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif\`,br=\`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif\`,Tr=\`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif\`,Ar="gl_FragColor = linearToOutputTexel( gl_FragColor );",Er=\`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}\`,wr=\`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif\`,Cr=\`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif\`,Rr=\`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif\`,Ir=\`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif\`,Pr=\`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif\`,Lr=\`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif\`,Dr=\`#ifdef USE_FOG
	varying float vFogDepth;
#endif\`,Nr=\`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif\`,Ur=\`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif\`,Fr=\`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}\`,Or=\`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif\`,Br=\`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;\`,zr=\`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert\`,Vr=\`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>\`,kr=\`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif\`,Gr=\`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;\`,Hr=\`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\`,Wr=\`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;\`,Xr=\`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\`,qr=\`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif\`,Yr=\`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}\`,Zr=\`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif\`,Jr=\`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif\`,$r=\`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif\`,Kr=\`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif\`,Qr=\`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif\`,jr=\`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,ta=\`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif\`,ea=\`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif\`,na=\`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif\`,ia=\`#ifdef USE_MAP
	uniform sampler2D map;
#endif\`,sa=\`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif\`,ra=\`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif\`,aa=\`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif\`,oa=\`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif\`,la=\`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif\`,ca=\`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif\`,ha=\`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,ua=\`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif\`,da=\`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif\`,fa=\`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;\`,pa=\`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif\`,ma=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,ga=\`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif\`,_a=\`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif\`,xa=\`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif\`,va=\`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif\`,ya=\`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif\`,Ma=\`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif\`,Sa=\`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif\`,ba=\`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );\`,Ta=\`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}\`,Aa=\`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif\`,Ea=\`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;\`,wa=\`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif\`,Ca=\`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif\`,Ra=\`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif\`,Ia=\`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif\`,Pa=\`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif\`,La=\`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif\`,Da=\`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif\`,Na=\`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}\`,Ua=\`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif\`,Fa=\`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif\`,Oa=\`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif\`,Ba=\`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif\`,za=\`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif\`,Va=\`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif\`,ka=\`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif\`,Ga=\`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }\`,Ha=\`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif\`,Wa=\`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif\`,Xa=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif\`,qa=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif\`,Ya=\`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif\`,Za=\`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif\`,Ja=\`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}\`,$a=\`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,Ka=\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}\`,Qa=\`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,ja=\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}\`,to=\`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,eo=\`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}\`,no=\`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}\`,io=\`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}\`,so=\`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}\`,ro=\`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}\`,ao=\`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}\`,oo=\`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}\`,lo=\`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}\`,co=\`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}\`,ho=\`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,uo=\`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,fo=\`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,po=\`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}\`,mo=\`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,go=\`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}\`,_o=\`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}\`,xo=\`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,vo=\`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,yo=\`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}\`,Mo=\`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,So=\`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,bo=\`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}\`,To=\`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}\`,Ao=\`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}\`,Eo=\`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}\`,wo=\`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}\`,Co=\`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}\`,Ro=\`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}\`,C={alphahash_fragment:Js,alphahash_pars_fragment:$s,alphamap_fragment:Ks,alphamap_pars_fragment:Qs,alphatest_fragment:js,alphatest_pars_fragment:tr,aomap_fragment:er,aomap_pars_fragment:nr,batching_pars_vertex:ir,batching_vertex:sr,begin_vertex:rr,beginnormal_vertex:ar,bsdfs:or,iridescence_fragment:lr,bumpmap_pars_fragment:cr,clipping_planes_fragment:hr,clipping_planes_pars_fragment:ur,clipping_planes_pars_vertex:dr,clipping_planes_vertex:fr,color_fragment:pr,color_pars_fragment:mr,color_pars_vertex:gr,color_vertex:_r,common:xr,cube_uv_reflection_fragment:vr,defaultnormal_vertex:yr,displacementmap_pars_vertex:Mr,displacementmap_vertex:Sr,emissivemap_fragment:br,emissivemap_pars_fragment:Tr,colorspace_fragment:Ar,colorspace_pars_fragment:Er,envmap_fragment:wr,envmap_common_pars_fragment:Cr,envmap_pars_fragment:Rr,envmap_pars_vertex:Ir,envmap_physical_pars_fragment:kr,envmap_vertex:Pr,fog_vertex:Lr,fog_pars_vertex:Dr,fog_fragment:Nr,fog_pars_fragment:Ur,gradientmap_pars_fragment:Fr,lightmap_pars_fragment:Or,lights_lambert_fragment:Br,lights_lambert_pars_fragment:zr,lights_pars_begin:Vr,lights_toon_fragment:Gr,lights_toon_pars_fragment:Hr,lights_phong_fragment:Wr,lights_phong_pars_fragment:Xr,lights_physical_fragment:qr,lights_physical_pars_fragment:Yr,lights_fragment_begin:Zr,lights_fragment_maps:Jr,lights_fragment_end:$r,lightprobes_pars_fragment:Kr,logdepthbuf_fragment:Qr,logdepthbuf_pars_fragment:jr,logdepthbuf_pars_vertex:ta,logdepthbuf_vertex:ea,map_fragment:na,map_pars_fragment:ia,map_particle_fragment:sa,map_particle_pars_fragment:ra,metalnessmap_fragment:aa,metalnessmap_pars_fragment:oa,morphinstance_vertex:la,morphcolor_vertex:ca,morphnormal_vertex:ha,morphtarget_pars_vertex:ua,morphtarget_vertex:da,normal_fragment_begin:fa,normal_fragment_maps:pa,normal_pars_fragment:ma,normal_pars_vertex:ga,normal_vertex:_a,normalmap_pars_fragment:xa,clearcoat_normal_fragment_begin:va,clearcoat_normal_fragment_maps:ya,clearcoat_pars_fragment:Ma,iridescence_pars_fragment:Sa,opaque_fragment:ba,packing:Ta,premultiplied_alpha_fragment:Aa,project_vertex:Ea,dithering_fragment:wa,dithering_pars_fragment:Ca,roughnessmap_fragment:Ra,roughnessmap_pars_fragment:Ia,shadowmap_pars_fragment:Pa,shadowmap_pars_vertex:La,shadowmap_vertex:Da,shadowmask_pars_fragment:Na,skinbase_vertex:Ua,skinning_pars_vertex:Fa,skinning_vertex:Oa,skinnormal_vertex:Ba,specularmap_fragment:za,specularmap_pars_fragment:Va,tonemapping_fragment:ka,tonemapping_pars_fragment:Ga,transmission_fragment:Ha,transmission_pars_fragment:Wa,uv_pars_fragment:Xa,uv_pars_vertex:qa,uv_vertex:Ya,worldpos_vertex:Za,background_vert:Ja,background_frag:$a,backgroundCube_vert:Ka,backgroundCube_frag:Qa,cube_vert:ja,cube_frag:to,depth_vert:eo,depth_frag:no,distance_vert:io,distance_frag:so,equirect_vert:ro,equirect_frag:ao,linedashed_vert:oo,linedashed_frag:lo,meshbasic_vert:co,meshbasic_frag:ho,meshlambert_vert:uo,meshlambert_frag:fo,meshmatcap_vert:po,meshmatcap_frag:mo,meshnormal_vert:go,meshnormal_frag:_o,meshphong_vert:xo,meshphong_frag:vo,meshphysical_vert:yo,meshphysical_frag:Mo,meshtoon_vert:So,meshtoon_frag:bo,points_vert:To,points_frag:Ao,shadow_vert:Eo,shadow_frag:wo,sprite_vert:Co,sprite_frag:Ro},v={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new E},alphaMap:{value:null},alphaMapTransform:{value:new E},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new E}},envmap:{envMap:{value:null},envMapRotation:{value:new E},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new E}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new E}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new E},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new E},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new E},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new E}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new E}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new E}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new g},probesMax:{value:new g},probesResolution:{value:new g}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new E},alphaTest:{value:0},uvTransform:{value:new E}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new E},alphaMap:{value:null},alphaMapTransform:{value:new E},alphaTest:{value:0}}},_s={basic:{uniforms:q([v.common,v.specularmap,v.envmap,v.aomap,v.lightmap,v.fog]),vertexShader:C.meshbasic_vert,fragmentShader:C.meshbasic_frag},lambert:{uniforms:q([v.common,v.specularmap,v.envmap,v.aomap,v.lightmap,v.emissivemap,v.bumpmap,v.normalmap,v.displacementmap,v.fog,v.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:C.meshlambert_vert,fragmentShader:C.meshlambert_frag},phong:{uniforms:q([v.common,v.specularmap,v.envmap,v.aomap,v.lightmap,v.emissivemap,v.bumpmap,v.normalmap,v.displacementmap,v.fog,v.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:C.meshphong_vert,fragmentShader:C.meshphong_frag},standard:{uniforms:q([v.common,v.envmap,v.aomap,v.lightmap,v.emissivemap,v.bumpmap,v.normalmap,v.displacementmap,v.roughnessmap,v.metalnessmap,v.fog,v.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:C.meshphysical_vert,fragmentShader:C.meshphysical_frag},toon:{uniforms:q([v.common,v.aomap,v.lightmap,v.emissivemap,v.bumpmap,v.normalmap,v.displacementmap,v.gradientmap,v.fog,v.lights,{emissive:{value:new U(0)}}]),vertexShader:C.meshtoon_vert,fragmentShader:C.meshtoon_frag},matcap:{uniforms:q([v.common,v.bumpmap,v.normalmap,v.displacementmap,v.fog,{matcap:{value:null}}]),vertexShader:C.meshmatcap_vert,fragmentShader:C.meshmatcap_frag},points:{uniforms:q([v.points,v.fog]),vertexShader:C.points_vert,fragmentShader:C.points_frag},dashed:{uniforms:q([v.common,v.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:C.linedashed_vert,fragmentShader:C.linedashed_frag},depth:{uniforms:q([v.common,v.displacementmap]),vertexShader:C.depth_vert,fragmentShader:C.depth_frag},normal:{uniforms:q([v.common,v.bumpmap,v.normalmap,v.displacementmap,{opacity:{value:1}}]),vertexShader:C.meshnormal_vert,fragmentShader:C.meshnormal_frag},sprite:{uniforms:q([v.sprite,v.fog]),vertexShader:C.sprite_vert,fragmentShader:C.sprite_frag},background:{uniforms:{uvTransform:{value:new E},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:C.background_vert,fragmentShader:C.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new E}},vertexShader:C.backgroundCube_vert,fragmentShader:C.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:C.cube_vert,fragmentShader:C.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:C.equirect_vert,fragmentShader:C.equirect_frag},distance:{uniforms:q([v.common,v.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:C.distance_vert,fragmentShader:C.distance_frag},shadow:{uniforms:q([v.lights,v.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:C.shadow_vert,fragmentShader:C.shadow_frag}};_s.physical={uniforms:q([_s.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new E},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new E},clearcoatNormalScale:{value:new k(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new E},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new E},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new E},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new E},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new E},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new E},transmissionSamplerSize:{value:new k},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new E},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new E},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new E},anisotropyVector:{value:new k},anisotropyMap:{value:null},anisotropyMapTransform:{value:new E}}]),vertexShader:C.meshphysical_vert,fragmentShader:C.meshphysical_frag};var Io=new E;Io.set(-1,0,0,0,1,0,0,0,1);var Ap={[si]:"LINEAR_TONE_MAPPING",[ri]:"REINHARD_TONE_MAPPING",[ai]:"CINEON_TONE_MAPPING",[oi]:"ACES_FILMIC_TONE_MAPPING",[ci]:"AGX_TONE_MAPPING",[hi]:"NEUTRAL_TONE_MAPPING",[li]:"CUSTOM_TONE_MAPPING"};var Ep=new Float32Array(16),wp=new Float32Array(9),Cp=new Float32Array(4);var Rp={[si]:"Linear",[ri]:"Reinhard",[ai]:"Cineon",[oi]:"ACESFilmic",[ci]:"AgX",[hi]:"Neutral",[li]:"Custom"};var Ip={[Yi]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};var Pp={[ns]:"ENVMAP_TYPE_CUBE",[di]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE_UV"};var Lp={[di]:"ENVMAP_MODE_REFRACTION"};var Dp={[hn]:"ENVMAP_BLENDING_MULTIPLY",[ts]:"ENVMAP_BLENDING_MIX",[es]:"ENVMAP_BLENDING_ADD"};var Po=new E;Po.set(-1,0,0,0,1,0,0,0,1);var Np=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var un=class extends _t{constructor(t){super(t),this.debug=!1,this.group=null,this.materials=[],this.meshes=[]}load(t,e,n,i){let s=this,r=this.path===""?ve.extractUrlBase(t):this.path,a=new _e(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(s.parse(l,r))}catch(o){i?i(o):console.error(o),s.manager.itemError(t)}},n,i)}parse(t,e){this.group=new de,this.materials=[],this.meshes=[],this.readFile(t,e);for(let n=0;n<this.meshes.length;n++)this.group.add(this.meshes[n]);return this.group}readFile(t,e){let n=new DataView(t),i=new Mi(n,0,this.debugMessage);if(i.id===Do||i.id===No||i.id===Lo){let s=i.readChunk();for(;s;){if(s.id===Uo){let r=s.readDWord();this.debugMessage("3DS file version: "+r)}else s.id===Go?this.readMeshData(s,e):this.debugMessage("Unknown main chunk: "+s.hexId);s=i.readChunk()}}this.debugMessage("Parsed "+this.meshes.length+" meshes")}readMeshData(t,e){let n=t.readChunk();for(;n;){if(n.id===Ho){let i=+n.readDWord();this.debugMessage("Mesh Version: "+i)}else if(n.id===Wo){let i=n.readFloat();this.debugMessage("Master scale: "+i),this.group.scale.set(i,i,i)}else n.id===ul?(this.debugMessage("Named Object"),this.readNamedObject(n)):n.id===Xo?(this.debugMessage("Material"),this.readMaterialEntry(n,e)):this.debugMessage("Unknown MDATA chunk: "+n.hexId);n=t.readChunk()}}readNamedObject(t){let e=t.readString(),n=t.readChunk();for(;n;){if(n.id===dl){let i=this.readMesh(n);i.name=e,this.meshes.push(i)}else this.debugMessage("Unknown named object chunk: "+n.hexId);n=t.readChunk()}}readMaterialEntry(t,e){let n=t.readChunk(),i=new te;for(;n;){if(n.id===qo)i.name=n.readString(),this.debugMessage("   Name: "+i.name);else if(n.id===tl)this.debugMessage("   Wireframe"),i.wireframe=!0;else if(n.id===el){let s=n.readByte();i.wireframeLinewidth=s,this.debugMessage("   Wireframe Thickness: "+s)}else if(n.id===Qo)i.side=ni,this.debugMessage("   DoubleSided");else if(n.id===jo)this.debugMessage("   Additive Blending"),i.blending=ii;else if(n.id===Zo)this.debugMessage("   Diffuse Color"),i.color=this.readColor(n);else if(n.id===Jo)this.debugMessage("   Specular Color"),i.specular=this.readColor(n);else if(n.id===Yo)this.debugMessage("   Ambient color"),i.color=this.readColor(n);else if(n.id===$o){let s=this.readPercentage(n);i.shininess=s*100,this.debugMessage("   Shininess : "+s)}else if(n.id===Ko){let s=this.readPercentage(n);i.opacity=1-s,this.debugMessage("  Transparency : "+s),i.transparent=i.opacity<1}else n.id===nl?(this.debugMessage("   ColorMap"),i.map=this.readMap(n,e)):n.id===sl?(this.debugMessage("   BumpMap"),i.bumpMap=this.readMap(n,e)):n.id===il?(this.debugMessage("   OpacityMap"),i.alphaMap=this.readMap(n,e)):n.id===rl?(this.debugMessage("   SpecularMap"),i.specularMap=this.readMap(n,e)):this.debugMessage("   Unknown material chunk: "+n.hexId);n=t.readChunk()}this.materials[i.name]=i}readMesh(t){let e=t.readChunk(),n=new jt,i=new te,s=new me(n,i);for(s.name="mesh";e;){if(e.id===fl){let r=e.readWord();this.debugMessage("   Vertex: "+r);let a=[];for(let l=0;l<r;l++)a.push(e.readFloat()),a.push(e.readFloat()),a.push(e.readFloat());n.setAttribute("position",new Ut(a,3))}else if(e.id===pl)this.readFaceArray(e,s);else if(e.id===gl){let r=e.readWord();this.debugMessage("   UV: "+r);let a=[];for(let l=0;l<r;l++)a.push(e.readFloat()),a.push(e.readFloat());n.setAttribute("uv",new Ut(a,2))}else if(e.id===_l){this.debugMessage("   Transformation Matrix (TODO)");let r=[];for(let o=0;o<12;o++)r[o]=e.readFloat();let a=new Z;a.elements[0]=r[0],a.elements[1]=r[6],a.elements[2]=r[3],a.elements[3]=r[9],a.elements[4]=r[2],a.elements[5]=r[8],a.elements[6]=r[5],a.elements[7]=r[11],a.elements[8]=r[1],a.elements[9]=r[7],a.elements[10]=r[4],a.elements[11]=r[10],a.elements[12]=0,a.elements[13]=0,a.elements[14]=0,a.elements[15]=1,a.transpose();let l=new Z;l.copy(a).invert(),n.applyMatrix4(l),a.decompose(s.position,s.quaternion,s.scale)}else this.debugMessage("   Unknown mesh chunk: "+e.hexId);e=t.readChunk()}return n.computeVertexNormals(),s}readFaceArray(t,e){let n=t.readWord();this.debugMessage("   Faces: "+n);let i=[];for(let a=0;a<n;++a)i.push(t.readWord(),t.readWord(),t.readWord()),t.readWord();e.geometry.setIndex(i);let s=0,r=0;for(;!t.endOfChunk;){let a=t.readChunk();if(a.id===ml){this.debugMessage("      Material Group");let l=this.readMaterialGroup(a),o=l.index.length*3;e.geometry.addGroup(r,o,s),r+=o,s++;let c=this.materials[l.name];Array.isArray(e.material)===!1&&(e.material=[]),c!==void 0&&e.material.push(c)}else this.debugMessage("      Unknown face array chunk: "+a.hexId)}e.material.length===1&&(e.material=e.material[0])}readMap(t,e){let n=t.readChunk(),i={},s=new xe(this.manager);for(s.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);n;){if(n.id===al){let r=n.readString();i=s.load(r),this.debugMessage("      File: "+e+r)}else n.id===cl?(i.offset.x=n.readFloat(),this.debugMessage("      OffsetX: "+i.offset.x)):n.id===hl?(i.offset.y=n.readFloat(),this.debugMessage("      OffsetY: "+i.offset.y)):n.id===ol?(i.repeat.x=n.readFloat(),this.debugMessage("      RepeatX: "+i.repeat.x)):n.id===ll?(i.repeat.y=n.readFloat(),this.debugMessage("      RepeatY: "+i.repeat.y)):this.debugMessage("      Unknown map chunk: "+n.hexId);n=t.readChunk()}return i}readMaterialGroup(t){let e=t.readString(),n=t.readWord();this.debugMessage("         Name: "+e),this.debugMessage("         Faces: "+n);let i=[];for(let s=0;s<n;++s)i.push(t.readWord());return{name:e,index:i}}readColor(t){let e=t.readChunk(),n=new U;if(e.id===Oo||e.id===Bo){let i=e.readByte(),s=e.readByte(),r=e.readByte();n.setRGB(i/255,s/255,r/255),this.debugMessage("      Color: "+n.r+", "+n.g+", "+n.b)}else if(e.id===Fo||e.id===zo){let i=e.readFloat(),s=e.readFloat(),r=e.readFloat();n.setRGB(i,s,r),this.debugMessage("      Color: "+n.r+", "+n.g+", "+n.b)}else this.debugMessage("      Unknown color chunk: "+e.hexId);return n}readPercentage(t){let e=t.readChunk();switch(e.id){case Vo:return e.readShort()/100;case ko:return e.readFloat();default:return this.debugMessage("      Unknown percentage chunk: "+e.hexId),0}}debugMessage(t){this.debug&&console.log(t)}},Mi=class d{constructor(t,e,n){this.data=t,this.offset=e,this.position=e,this.debugMessage=n,this.debugMessage instanceof Function&&(this.debugMessage=function(){}),this.id=this.readWord(),this.size=this.readDWord(),this.end=this.offset+this.size,this.end>t.byteLength&&this.debugMessage("Bad chunk size for chunk at "+e)}readChunk(){if(this.endOfChunk)return null;try{let t=new d(this.data,this.position,this.debugMessage);return this.position+=t.size,t}catch{return this.debugMessage("Unable to read chunk at "+this.position),null}}get hexId(){return this.id.toString(16)}get endOfChunk(){return this.position>=this.end}readByte(){let t=this.data.getUint8(this.position,!0);return this.position+=1,t}readFloat(){try{let t=this.data.getFloat32(this.position,!0);return this.position+=4,t}catch(t){return this.debugMessage(t+" "+this.position+" "+this.data.byteLength),0}}readInt(){let t=this.data.getInt32(this.position,!0);return this.position+=4,t}readShort(){let t=this.data.getInt16(this.position,!0);return this.position+=2,t}readDWord(){let t=this.data.getUint32(this.position,!0);return this.position+=4,t}readWord(){let t=this.data.getUint16(this.position,!0);return this.position+=2,t}readString(){let t="",e=this.readByte();for(;e;)t+=String.fromCharCode(e),e=this.readByte();return t}},Lo=19789,Do=15786,No=49725,Uo=2,Fo=16,Oo=17,Bo=18,zo=19,Vo=48,ko=49,Go=15677,Ho=15678,Wo=256,Xo=45055,qo=40960,Yo=40976,Zo=40992,Jo=41008,$o=41024,Ko=41040,Qo=41089,jo=41091,tl=41093,el=41095,nl=41472,il=41488,sl=41520,rl=41476,al=41728,ol=41812,ll=41814,cl=41816,hl=41818,ul=16384,dl=16640,fl=16656,pl=16672,ml=16688,gl=16704,_l=16736;var dn=class extends un{readFaceArray(t,e){if(this.faceGroups=[],super.readFaceArray(t,e),!this.faceGroups.length)return;let n=e.geometry.index.array,i=[];for(let s of this.faceGroups)for(let r of s.index){let a=r*3;i.push(n[a],n[a+1],n[a+2])}if(i.length!==n.length)throw new Error("Incomplete 3DS face material assignments");e.geometry.setIndex(i)}readMaterialGroup(t){let e=super.readMaterialGroup(t);return this.faceGroups.push(e),e}};var Si=class extends dn{readNamedObject(t){super.readNamedObject(t),++this.objects%16===0&&self.postMessage({type:"progress",loaded:t.end,total:this.total})}};self.onmessage=({data:d})=>{try{let t=new Si;t.objects=0,t.total=d.byteLength;let e=t.parse(d,"");e.updateMatrixWorld(!0);let n=[],i=[],s=new Map,r=new Set;if(e.traverse(a=>{if(!a.isMesh)return;let l=a.geometry,o={};for(let[h,u]of Object.entries(l.attributes))o[h]={array:u.array,itemSize:u.itemSize,normalized:u.normalized},r.add(u.array.buffer);let c=(Array.isArray(a.material)?a.material:[a.material]).map(h=>(s.has(h.uuid)||(s.set(h.uuid,i.length),i.push(h.toJSON())),s.get(h.uuid)));l.index&&r.add(l.index.array.buffer),n.push({name:a.name,attributes:o,index:l.index?.array,groups:l.groups,matrix:a.matrixWorld.toArray(),materials:c,multi:Array.isArray(a.material)})}),!n.length)throw new Error("Model contains no geometry");self.postMessage({type:"result",meshes:n,materials:i},[...r])}catch(t){self.postMessage({type:"error",message:t.message})}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
`;var ys=()=>new Promise(n=>requestAnimationFrame(()=>n()));async function Td(n,e=()=>{}){e({phase:"parse",loaded:0,total:n.byteLength}),await ys();let t=()=>{let c=new wo().parse(n.buffer,"");if(!c.children.some(d=>d.isMesh))throw new Error("Model contains no geometry");return e({phase:"parse",loaded:n.byteLength,total:n.byteLength}),c};if(typeof Worker>"u")return t();let i,s=URL.createObjectURL(new Blob([Ed],{type:"text/javascript"}));try{i=new Worker(s)}catch{return URL.revokeObjectURL(s),t()}let r;try{r=await new Promise((c,d)=>{i.onmessage=({data:h})=>{h.type==="progress"?e({phase:"parse",loaded:h.loaded,total:h.total}):h.type==="result"?c(h):h.type==="error"&&d(new Error(h.message))},i.onerror=h=>{h.preventDefault?.(),d(new Error(h.message||"Geometry worker failed"))};let f=n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength);i.postMessage(f,[f])}).finally(()=>{i.terminate(),URL.revokeObjectURL(s)})}catch{return t()}e({phase:"parse",loaded:n.byteLength,total:n.byteLength});let a=new si,o=new er,l=r.materials.map(c=>o.parse(c));for(let c=0;c<r.meshes.length;c++){let d=r.meshes[c],f=new $t;for(let[u,_]of Object.entries(d.attributes))f.setAttribute(u,new Ht(_.array,_.itemSize,_.normalized));d.index&&f.setIndex(new Ht(d.index,1));for(let u of d.groups)f.addGroup(u.start,u.count,u.materialIndex);let h=new Bt(f,d.multi?d.materials.map(u=>l[u]):l[d.materials[0]]);h.name=d.name,new Qe().fromArray(d.matrix).decompose(h.position,h.quaternion,h.scale),a.add(h),c%32===0&&(e({phase:"scene",loaded:c,total:r.meshes.length*2}),await ys())}return a}var W0={local:[0,.03],read:[0,.4],decode:[.4,.5],unpack:[.5,.6],parse:[.6,.8],scene:[.8,.96],render:[.96,.99],ready:[1,1]};function X0({phase:n,loaded:e,total:t}){let[i,s]=W0[n]||[0,0];return t>0?Math.round(100*(i+(s-i)*Math.max(0,Math.min(1,e/t)))):null}function Ad(n,e,t){let i={phase:"read"},s=0;function r(a=i){i=a;let o=X0(i),l=t("load_"+i.phase);o===null?n.removeAttribute("value"):(s=Math.max(s,o),n.value!==s&&(n.value=s)),n.setAttribute("aria-label",l);let c=i.total>0&&["read","decode","unpack"].includes(i.phase)?` \xB7 ${(i.loaded/1048576).toFixed(1)} / ${(i.total/1048576).toFixed(1)} MB`:"",d=l+c+(o===null?"":` \xB7 ${t("load_total")} ${s}%`);e.textContent!==d&&(e.textContent=d)}return{update:r,refresh:()=>r(i)}}function Cd(n,e){return e==="en"||e==="zh"?e:n.some(t=>/^zh(?:-|_|$)/i.test(t))?"zh":"en"}async function Rd(n,e={},t=()=>{}){let i=e.atob||globalThis.atob,s=e.pause||(()=>new Promise(u=>setTimeout(u,0))),r=async u=>{let _=Math.floor(u.length/4)*3-(u.endsWith("==")?2:u.endsWith("=")?1:0),y=new Uint8Array(_),g=0;for(let p=0;p<u.length;p+=262144){let E=i(u.slice(p,p+262144));for(let R=0;R<E.length;R++)y[g++]=E.charCodeAt(R);t({phase:"decode",loaded:g,total:_}),await s()}return y},a=async(u,_,y)=>{let g=u.getReader(),p=[],E=0,R=0;for(;;){let{done:S,value:A}=await g.read();if(S)break;p.push(A),E+=A.byteLength,t({phase:y,loaded:E,total:_}),E-R>=1048576&&(await s(),R=E)}let M=new Uint8Array(E),w=0;for(let S of p)M.set(S,w),w+=S.byteLength;return t({phase:y,loaded:E,total:E}),M},o=async u=>{if(n.compression!=="gzip")return u;let _=e.DecompressionStream||globalThis.DecompressionStream;if(!_)throw new Error("This browser does not support compressed offline models");let y=new Blob([u]).stream().pipeThrough(new _("gzip"));return a(y,n.modelByteLength,"unpack")};if(n.model)return o(await r(n.model));if((e.protocol||globalThis.location.protocol)!=="file:"){t({phase:"read"});let u=await(e.fetch||globalThis.fetch)(n.modelUrl);if(!u.ok)throw new Error(`Model request failed: HTTP ${u.status}`);let _=n.modelTransferBytes||Number(u.headers?.get("Content-Length"))||0,y;return u.body?.getReader?y=await a(u.body,_,"read"):(y=new Uint8Array(await u.arrayBuffer()),t({phase:"read",loaded:y.length,total:y.length})),o(y)}let c=e.document||globalThis.document,d=e.target||globalThis;t({phase:"local"}),await new Promise((u,_)=>{let y=c.createElement("script");y.src=n.offlineModelScript,y.onload=()=>{y.remove(),u()},y.onerror=()=>{y.remove(),_(new Error("Local model data could not be loaded"))},c.head.append(y)});let f=n.modelGlobal||"__UMICH_MODEL_BASE64__",h=d[f];if(delete d[f],typeof h!="string"||!h.length)throw new Error("Local model data is empty");return o(await r(h))}function Pd(n,e,t){let i=Math.min(n.right-n.left,n.top-n.bottom),s=4*Math.max(t,1);e.minZoom=Math.max(Number.EPSILON,Math.min(1,i/s))}var Zt=JSON.parse(document.getElementById("campus-data").textContent),ne=n=>document.getElementById(n),Ti=Zt.records,ws=Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map(n=>[n.dataset.i18n,n.textContent]));Object.assign(ws,{layers:"Building layers",mobileLayers:"Buildings",search:"Search building or ID",empty:"No matching buildings",exploreTitle:"Explore the campus",exploreSub:"Choose a building to see dimensions, geometry notes and sources.",intro:"Individual building layers, a separate landscape layer, and architectural highlights. The model combines official mapped footprints with labeled height estimates and USGS terrain.",published:"Published height",planning:"Planning drawing",estimated:"Estimated height",highest:"Model peak",area:"Mapped footprint",width:"East\u2013west extent",depth:"North\u2013south extent",focus:"Locate",isolate:"Isolate",clear:"Deselect",sourceHeight:"Height source",sourceMap:"Footprint source",precision:"Public map extents are approximate. Roof and facade details are simplified; no survey accuracy is claimed.",basisLabel:"Height basis: ",error:"Interactive rendering is unavailable. A static preview is shown. Use a WebGL 2 browser with graphics acceleration enabled. Dimensions and the 3DS download are still available.",static:"Static preview \xB7 WebGL unavailable",lost:"Graphics context interrupted. Reopen the HTML to restore the model.",hide:"Hide ",show:"Show ",status:"Meters \xB7 public-source exterior model",languageLabel:"Switch to Chinese",prevLabel:"Previous landmark",nextLabel:"Next landmark",cutLabel:"Height of horizontal slice",modelLabel:"Interactive University of Michigan campus model",searchLabel:"Search buildings",sidebarLabel:"Building layers and dimensions",tourLabel:"Choose a landmark",snapshotTitle:"UMich Campus 3D Model"});var Po={title:"\u5BC6\u897F\u6839\u5927\u5B66 \xB7 \u4E09\u7EF4\u6821\u533A",subtitle:"\u5B89\u5A1C\u5821\u6821\u533A\u6A21\u578B",offline:"\u79BB\u7EBF\u53EF\u7528",download:"\u4E0B\u8F7D 3DS",save:"\u4FDD\u5B58\u89C6\u56FE",eyebrow:"\u5B89\u5A1C\u5821 \xB7 \u6821\u56ED\u7A7A\u95F4\u56FE\u96C6",closeSidebar:"\u6536\u8D77",visible:"\u663E\u793A\u5EFA\u7B51",unit:"\u6A21\u578B\u5355\u4F4D",environment:"\u73AF\u5883\u666F\u89C2",details:"\u5EFA\u7B51\u5916\u90E8\u7EC6\u8282",labels:"\u5730\u6807\u540D\u79F0",shadows:"\u5149\u7167\u9634\u5F71",layers:"\u5EFA\u7B51\u56FE\u5C42",mobileLayers:"\u5EFA\u7B51",showAll:"\u5168\u90E8\u663E\u793A",all:"\u5168\u90E8",landmarks:"\u5730\u6807\u5EFA\u7B51",quads:"\u4E3B\u5EAD\u9662\u533A",north:"\u5317\u6821\u533A",south:"\u5357\u90E8\u7247\u533A",east:"\u4E1C\u90E8\u7247\u533A",medical:"\u533B\u5B66\u4E2D\u5FC3",aerial:"\u6821\u533A\u9E1F\u77B0",core:"\u4E2D\u592E\u6821\u533A",plan:"\u603B\u5E73\u9762\u56FE",reset:"\u91CD\u7F6E",help:"\u64CD\u4F5C\u4E0E\u6765\u6E90",tourTitle:"\u5EFA\u7B51\u6F2B\u6E38 \xB7 \u6821\u56ED\u5730\u6807",explore:"\u67E5\u770B",cut:"\u6C34\u5E73\u5256\u5207",stone:"\u77F3\u7070\u5CA9",glass:"\u73BB\u7483",roads:"\u9053\u8DEF",plazas:"\u5E7F\u573A",green:"\u7EFF\u5730",loading:"\u6B63\u5728\u6253\u5F00\u6821\u56ED\u6A21\u578B\u2026",mouseHelp:"\u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u53F3\u952E\u5E73\u79FB",helpHeading:"\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u63A2\u7D22\u6821\u56ED",helpOrbit:"\u9F20\u6807\u5DE6\u952E\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u53F3\u952E\u62D6\u52A8\u5E73\u79FB\u3002\u89E6\u5C4F\u8BBE\u5907\u4F7F\u7528\u5355\u6307\u65CB\u8F6C\uFF0C\u53CC\u6307\u7F29\u653E\u6216\u5E73\u79FB\u3002",helpSelect:"\u70B9\u51FB\u6A21\u578B\u6216\u5217\u8868\u4E2D\u7684\u5EFA\u7B51\uFF0C\u67E5\u770B\u5C3A\u5BF8\u3001\u5F62\u6001\u8BF4\u660E\u548C\u8D44\u6599\u6765\u6E90\u3002\u53EF\u4EE5\u9010\u680B\u9690\u85CF\uFF0C\u4E5F\u53EF\u4EE5\u5355\u72EC\u67E5\u770B\u3002",helpTour:"\u901A\u8FC7\u5EFA\u7B51\u6F2B\u6E38\u67E5\u770B\u5730\u6807\uFF0C\u5207\u6362\u5916\u90E8\u7EC6\u8282\uFF0C\u6216\u7528\u6C34\u5E73\u5256\u5207\u5BF9\u6BD4\u4F53\u5757\u3002\u5256\u5207\u4EC5\u8868\u793A\u5916\u90E8\u8868\u9762\uFF0C\u4E0D\u8868\u793A\u5185\u90E8\u697C\u5C42\u6216\u5BA4\u5185\u7ED3\u6784\u3002",helpOffline:"\u6A21\u578B\u3001\u4E09\u7EF4\u5F15\u64CE\u548C\u9884\u89C8\u5747\u5185\u5D4C\u5728 HTML \u4E2D\u3002\u65E0\u9700\u7F51\u7EDC\u6216\u670D\u52A1\u5668\uFF0C\u76F4\u63A5\u7528\u6D4F\u89C8\u5668\u6253\u5F00\u5373\u53EF\u3002\u4EA4\u4E92\u663E\u793A\u9700\u8981 WebGL 2\u3002",helpAccuracy:"1 \u5355\u4F4D = 1 \u7C73\u3002\u5E73\u9762\u91C7\u7528\u5E26\u5730\u7406\u5750\u6807\u7684\u516C\u5F00\u5730\u56FE\uFF0C\u90E8\u5206\u5730\u6807\u9AD8\u5EA6\u6765\u81EA\u5B66\u6821\u6216\u9879\u76EE\u516C\u5F00\u8D44\u6599\uFF1B\u5176\u4ED6\u9AD8\u5EA6\u3001\u5C4B\u9876\u3001\u7ACB\u9762\u5F00\u7A97\u3001\u6811\u4F4D\u548C\u9053\u8DEF\u5BBD\u5EA6\u4E3A\u8FD1\u4F3C\u3002\u5730\u9762\u4F9D\u636E USGS \u516C\u5F00\u5730\u5F62\u91C7\u6837\u3002\u8FD9\u662F\u72EC\u7ACB\u5236\u4F5C\u7684\u5BA4\u5916\u7A7A\u95F4\u7814\u7A76\u6A21\u578B\uFF0C\u4E0D\u662F\u5B66\u6821\u5B98\u65B9 BIM \u6216\u5B9E\u6D4B\u6A21\u578B\u3002",helpLanguages:"\u8BBE\u5907\u8BED\u8A00\u504F\u597D\u4E2D\u6709\u4E2D\u6587\u65F6\u9996\u6B21\u6253\u5F00\u9ED8\u8BA4\u4E2D\u6587\uFF0C\u5176\u4F59\u8BBE\u5907\u9ED8\u8BA4\u82F1\u6587\u3002\u6D4F\u89C8\u5668\u5B58\u50A8\u53EF\u7528\u65F6\u4F1A\u8BB0\u4F4F\u624B\u52A8\u9009\u62E9\u3002\u4E2D\u6587\u5EFA\u7B51\u540D\u4E3A\u4FBF\u4E8E\u8BC6\u522B\u7684\u8BD1\u540D\u3002",sources:"\u8D44\u6599\u6765\u6E90",officialMap:"\u5B66\u6821\u5B98\u65B9\u5730\u56FE",architecture:"\u5B66\u6821\u5EFA\u7B51\u4ECB\u7ECD",cityData:"USGS \u516C\u5F00\u5730\u5F62",snapshot:"\u516C\u5F00\u8D44\u6599\u5FEB\u7167 \xB7 2026\u5E7410\u670812\u65E5",close:"\u5173\u95ED",search:"\u641C\u7D22\u5EFA\u7B51\u540D\u79F0\u6216\u7F16\u53F7",empty:"\u6CA1\u6709\u5339\u914D\u7684\u5EFA\u7B51",exploreTitle:"\u63A2\u7D22\u6821\u56ED\u7A7A\u95F4",exploreSub:"\u9009\u62E9\u5EFA\u7B51\uFF0C\u67E5\u770B\u5C3A\u5BF8\u3001\u5F62\u6001\u8BF4\u660E\u4E0E\u6765\u6E90\u3002",intro:"\u5EFA\u7B51\u9010\u680B\u5206\u5C42\uFF0C\u5BA4\u5916\u73AF\u5883\u5355\u72EC\u6210\u5C42\uFF0C\u5305\u542B\u6821\u56ED\u5730\u6807\u3002\u6A21\u578B\u91C7\u7528\u516C\u5F00\u5730\u56FE\u8F6E\u5ED3\u3001\u516C\u5F00\u8D44\u6599\u6240\u8F7D\u9AD8\u5EA6\u53CA\u660E\u786E\u6807\u6CE8\u7684\u4F30\u7B97\u5C3A\u5BF8\u3002",published:"\u516C\u5F00\u8D44\u6599\u6240\u8F7D\u9AD8\u5EA6",planning:"\u89C4\u5212\u56FE\u5C3A\u5BF8",estimated:"\u9AD8\u5EA6\u4F30\u7B97",highest:"\u5EFA\u7B51\u6700\u9AD8\u70B9",area:"\u5E73\u9762\u5360\u5730\u9762\u79EF",width:"\u4E1C\u897F\u5411\u8303\u56F4",depth:"\u5357\u5317\u5411\u8303\u56F4",focus:"\u5B9A\u4F4D\u5EFA\u7B51",isolate:"\u5355\u72EC\u67E5\u770B",clear:"\u53D6\u6D88\u9009\u62E9",sourceHeight:"\u9AD8\u5EA6\u6765\u6E90",sourceMap:"\u5E73\u9762\u6765\u6E90",precision:"\u5E73\u9762\u8F6E\u5ED3\u53D6\u81EA\u516C\u5F00\u5730\u56FE\uFF0C\u5C4B\u9876\u53CA\u7ACB\u9762\u7EC6\u8282\u4E3A\u7B80\u5316\u8868\u8FBE\uFF1B\u5C3A\u5BF8\u672A\u7ECF\u8FC7\u5B9E\u6D4B\u6821\u6838\u3002",basisLabel:"\u9AD8\u5EA6\u4F9D\u636E\uFF1A",error:"\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u542F\u52A8\u4EA4\u4E92\u663E\u793A\uFF0C\u5DF2\u663E\u793A\u9759\u6001\u9884\u89C8\u3002\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684\u6D4F\u89C8\u5668\u5E76\u542F\u7528\u56FE\u5F62\u52A0\u901F\u3002\u5C3A\u5BF8\u67E5\u8BE2\u4E0E 3DS \u4E0B\u8F7D\u4ECD\u53EF\u4F7F\u7528\u3002",static:"\u9759\u6001\u9884\u89C8 \xB7 WebGL \u672A\u542F\u7528",lost:"\u4E09\u7EF4\u663E\u793A\u6682\u65F6\u4E2D\u65AD\uFF0C\u91CD\u65B0\u6253\u5F00 HTML \u53EF\u6062\u590D\u6A21\u578B\u3002",hide:"\u9690\u85CF ",show:"\u663E\u793A ",status:"\u5355\u4F4D\uFF1A\u7C73 \xB7 \u516C\u5F00\u8D44\u6599\u5BA4\u5916\u6A21\u578B",languageLabel:"Switch to English",prevLabel:"\u4E0A\u4E00\u4E2A\u5730\u6807",nextLabel:"\u4E0B\u4E00\u4E2A\u5730\u6807",cutLabel:"\u6C34\u5E73\u5256\u5207\u9AD8\u5EA6",modelLabel:"\u53EF\u65CB\u8F6C\u4E0E\u7F29\u653E\u7684\u5BC6\u897F\u6839\u5927\u5B66\u6821\u56ED\u6A21\u578B",searchLabel:"\u641C\u7D22\u5EFA\u7B51",sidebarLabel:"\u5EFA\u7B51\u56FE\u5C42\u4E0E\u5C3A\u5BF8\u4FE1\u606F",tourLabel:"\u9009\u62E9\u6821\u56ED\u5730\u6807",snapshotTitle:"\u5BC6\u897F\u6839\u5927\u5B66 \xB7 \u4E09\u7EF4\u6821\u533A"};Object.assign(ws,{central:"Central campus",athletic:"Athletic campus",core:"Central",north:"North",medical:"Medical",municipal:"Historical city estimate",cityData:"USGS terrain",architecture:"University campus tour",cut:"Elevation slice",intro:`${Ti.length} mapped building layers, one environment layer and ${Ti.filter(n=>n.landmark).length} architectural highlights across the four Ann Arbor sectors.`,helpAccuracy:"1 unit = 1 meter. Building footprints, outdoor surfaces and tree positions follow the university public GIS. Selected heights follow published sources or the city\u2019s historical estimates; other heights and exterior details are estimates. Ground follows USGS 3DEP terrain sampled at about 18 m, with simplified building pads. Model Z = 0 corresponds to 225 m in the DEM datum; the elevation slice uses that local datum. This is an independent exterior study model, not an official BIM or a certified survey.",helpLanguages:"English is the default; a preferred Chinese device language opens the model in Chinese. Manual choices are remembered when browser storage is available. Chinese proper names are independent translations; original English names remain visible in building details."});Object.assign(Po,{central:"\u4E2D\u592E\u6821\u533A",architecture:"\u5B66\u6821\u6821\u56ED\u5BFC\u89C8",athletic:"\u4F53\u80B2\u533A",municipal:"\u5E02\u7EA7\u5386\u53F2\u4F30\u7B97",cut:"\u9AD8\u7A0B\u5256\u5207",cutLabel:"\u9AD8\u7A0B\u5256\u5207\u9AD8\u5EA6",intro:`${Ti.length}\u680B\u6620\u5C04\u5EFA\u7B51\u9010\u680B\u5206\u5C42\uFF0C\u5BA4\u5916\u73AF\u5883\u5355\u72EC\u6210\u5C42\uFF0C\u5305\u542B${Ti.filter(n=>n.landmark).length}\u5904\u5EFA\u7B51\u5730\u6807\uFF0C\u8986\u76D6\u5B89\u5A1C\u5821\u56DB\u4E2A\u4E3B\u8981\u7247\u533A\u3002`,helpAccuracy:"1\u5355\u4F4D\uFF1D1\u7C73\u3002\u5EFA\u7B51\u8F6E\u5ED3\u3001\u5BA4\u5916\u5730\u8868\u4E0E\u6811\u4F4D\u53D6\u81EA\u5B66\u6821\u516C\u5F00GIS\u3002\u90E8\u5206\u9AD8\u5EA6\u91C7\u7528\u516C\u5F00\u8D44\u6599\u6216\u5E02\u7EA7\u5386\u53F2\u4F30\u7B97\uFF0C\u5176\u4F59\u9AD8\u5EA6\u4E0E\u5916\u90E8\u7EC6\u8282\u4E3A\u4F30\u7B97\u3002\u5730\u9762\u4F9D\u636E\u7EA618\u7C73\u91C7\u6837\u95F4\u8DDD\u7684USGS 3DEP\u5730\u5F62\uFF0C\u5EFA\u7B51\u57FA\u5EA7\u5C40\u90E8\u5E73\u6574\u5316\u3002\u6A21\u578BZ\uFF1D0\u5BF9\u5E94DEM\u57FA\u51C6\u4E2D\u7684225\u7C73\uFF0C\u9AD8\u7A0B\u5256\u5207\u6309\u6B64\u5C40\u90E8\u57FA\u51C6\u8BA1\u3002\u8FD9\u662F\u72EC\u7ACB\u5236\u4F5C\u7684\u5BA4\u5916\u7A7A\u95F4\u7814\u7A76\u6A21\u578B\uFF0C\u672A\u7ECF\u8FC7\u5B9E\u6D4B\u6821\u6838\uFF0C\u975E\u5B66\u6821\u5B98\u65B9BIM\u3002",helpLanguages:"\u8BBE\u5907\u8BED\u8A00\u504F\u597D\u4E2D\u6709\u4E2D\u6587\u65F6\uFF0C\u9996\u6B21\u6253\u5F00\u9ED8\u8BA4\u4E2D\u6587\uFF1B\u5176\u4F59\u8BBE\u5907\u9ED8\u8BA4\u82F1\u6587\u3002\u6D4F\u89C8\u5668\u5B58\u50A8\u53EF\u7528\u65F6\u4F1A\u8BB0\u4F4F\u624B\u52A8\u9009\u62E9\u3002\u4E2D\u6587\u5EFA\u7B51\u540D\u79F0\u4E3A\u72EC\u7ACB\u8BD1\u540D\uFF0C\u4E13\u540D\u4FDD\u6301\u539F\u4E49\uFF0C\u8BE6\u60C5\u540C\u65F6\u4FDD\u7559\u82F1\u6587\u540D\u79F0\u4EE5\u4FBF\u5BF9\u7167\u5B98\u65B9\u5730\u56FE\u3002"});Zt.model||(ws.helpOffline="Double-click index.html with its assets and output folders beside it, or open the single-file offline HTML in the output folder. No server is needed for local viewing. WebGL 2 is required for interaction.",Po.helpOffline="\u4FDD\u7559 assets \u548C output \u6587\u4EF6\u5939\uFF0C\u76F4\u63A5\u53CC\u51FB index.html\uFF1B\u4E5F\u53EF\u6253\u5F00 output \u4E2D\u7684\u5355\u6587\u4EF6\u79BB\u7EBF HTML\u3002\u65E0\u9700\u672C\u5730\u670D\u52A1\u5668\uFF0C\u4EA4\u4E92\u663E\u793A\u9700\u8981 WebGL 2\u3002");Object.assign(ws,{rotationMode:"Rotate",load_local:"Reading local model",load_read:"Downloading model",load_decode:"Decoding model data",load_unpack:"Unpacking model",load_parse:"Reading geometry",load_scene:"Preparing buildings and landscape",load_render:"Drawing first view",load_ready:"Ready",load_total:"Overall",helpOrbit:"Drag with the left mouse button to pan; right-drag to rotate. Scroll to zoom at the pointer. On touch screens, one finger pans and two fingers pan or pinch to zoom. Enable Rotate for one-finger rotation. Arrow keys pan and +/\u2212 zoom when the model is focused.",mouseHelp:"Drag to pan \xB7 Right-drag to rotate \xB7 Scroll to zoom"});Object.assign(Po,{rotationMode:"\u65CB\u8F6C",load_local:"\u8BFB\u53D6\u672C\u5730\u6A21\u578B",load_read:"\u4E0B\u8F7D\u6A21\u578B\u6570\u636E",load_decode:"\u89E3\u7801\u6A21\u578B\u6570\u636E",load_unpack:"\u89E3\u538B\u6A21\u578B\u6570\u636E",load_parse:"\u89E3\u6790\u5EFA\u7B51\u51E0\u4F55",load_scene:"\u51C6\u5907\u5EFA\u7B51\u4E0E\u666F\u89C2",load_render:"\u7ED8\u5236\u9996\u4E2A\u89C6\u56FE",load_ready:"\u52A0\u8F7D\u5B8C\u6210",load_total:"\u603B\u4F53",helpOrbit:"\u9F20\u6807\u5DE6\u952E\u62D6\u52A8\u5E73\u79FB\uFF0C\u53F3\u952E\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u4EE5\u6307\u9488\u6240\u5728\u4F4D\u7F6E\u7F29\u653E\u3002\u89E6\u5C4F\u5355\u6307\u5E73\u79FB\uFF0C\u53CC\u6307\u5E73\u79FB\u6216\u634F\u5408\u7F29\u653E\uFF1B\u5F00\u542F\u201C\u65CB\u8F6C\u201D\u540E\u53EF\u5355\u6307\u65CB\u8F6C\u3002\u6A21\u578B\u83B7\u5F97\u7126\u70B9\u65F6\uFF0C\u65B9\u5411\u952E\u5E73\u79FB\uFF0C\uFF0B\uFF0F\uFF0D\u7F29\u653E\u3002",mouseHelp:"\u62D6\u52A8\u5E73\u79FB \xB7 \u53F3\u952E\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E"});var Ld=null;try{Ld=localStorage.getItem("umich-model-language")}catch{}var Lt=Cd(navigator.languages?.length?navigator.languages:[navigator.language||"en"],Ld),it=n=>(Lt==="zh"?Po[n]:ws[n])||ws[n]||n,Nd=Ad(ne("load-progress"),ne("load-status"),it),Ms=n=>Nd.update(n);ne("download-image").disabled=!0;var To=n=>Lt==="zh"&&n.name_zh||n.name,Dd=n=>Lt==="zh"?n.short_zh||n.name_zh||n.name:n.short||n.name,q0=new Map(Ti.map(n=>[n.layer,n])),Io=new Map(Ti.map(n=>[n.code,n])),pi=new Map,Ao=[],Id=[],pc=[],fi=null,Eo="all",He=null,Ss,ft,Ct,Rn,It,vc=1,mn=!1,mc=null,bs=1500,Co="aerial",Ud=!1,Es=ne("sidebar"),vt=ne("viewport"),Od=matchMedia("(max-width:760px)"),Oi=Zt.landmarkOrder.map(n=>Ti.find(e=>e.facility_id===n)).filter(Boolean),qi=0,Fd=new Map;for(let n of Zt.places){let e=document.createElement("div");e.className="map-label place-label",ne("map-labels").append(e),Fd.set(n.id,{el:e,p:n})}var xc=new Map;for(let n of Ti.filter(e=>e.landmark)){let e=document.createElement("div");e.className="map-label",ne("map-labels").append(e),xc.set(n.code,e)}function Bd(){Es.classList.toggle("closed",Od.matches),ne("toggle-sidebar").setAttribute("aria-expanded",String(!Es.classList.contains("closed")))}Bd();Od.addEventListener("change",Bd);ne("toggle-sidebar").onclick=()=>{Es.classList.toggle("closed"),ne("toggle-sidebar").setAttribute("aria-expanded",String(!Es.classList.contains("closed")))};ne("close-sidebar").onclick=()=>{Es.classList.add("closed"),ne("toggle-sidebar").setAttribute("aria-expanded","false")};ne("open-help").onclick=()=>ne("help-dialog").showModal();ne("close-help").onclick=()=>ne("help-dialog").close();ne("help-dialog").addEventListener("click",n=>{if(n.target===n.currentTarget){let e=n.target.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&n.target.close()}});function zd(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Ro=null;ne("download-3ds").onclick=()=>{if(Ro)zd(new Blob([Ro],{type:"application/octet-stream"}),"UMich_AnnArbor.3ds");else{let n=document.createElement("a");n.href=Zt.downloadUrl||Zt.modelUrl,n.download="UMich_AnnArbor.3ds",n.click()}};ne("download-image").onclick=()=>{!He||!mn||(Zd(),He.domElement.toBlob(n=>{n&&zd(n,"UMich_AnnArbor_view.png")}))};function Y0(){let n=ne("search").value.trim().toLowerCase();return Ti.filter(e=>(Eo==="all"||(Eo==="landmark"?e.landmark:e.zone===Eo))&&(!n||[e.name,e.name_zh,e.code,e.short,e.short_zh,...e.aliases_zh||[]].some(t=>t?.toLowerCase().includes(n))))}function Pn(){let n=ne("building-list");n.replaceChildren();let e=Y0();if(!e.length){let t=document.createElement("p");t.className="empty",t.textContent=it("empty"),n.append(t)}for(let t of e){let i=document.createElement("div");i.className="row"+(fi===t.code?" selected":""),i.dataset.code=t.code;let s=document.createElement("input");s.type="checkbox",s.disabled=!mn,s.checked=pi.get(t.code)?.visible??!0,s.setAttribute("aria-label",it("show")+To(t)),s.onchange=()=>Z0(t.code,s.checked);let r=document.createElement("button");r.className="building-button",r.title=t.name;let a=document.createElement("span");a.className="building-name",a.textContent=To(t);let o=document.createElement("span");o.className="building-meta",o.textContent=t.code+" \xB7 "+it(t.zone)+(t.landmark?"  \u25C6":""),r.append(a,o),r.onclick=()=>Yi(t.code,!0),i.append(s,r),n.append(i)}yc()}function yc(){let n=pi.size?[...pi.values()].filter(e=>e.visible).length:Ti.length;ne("visible-count").innerHTML=n+"<small>/ "+Ti.length+"</small>",Ud?ne("status-text").textContent=it("static"):ne("status-text").textContent=it("status")}function Z0(n,e){let t=pi.get(n);t&&(t.visible=e),!e&&n===fi&&Yi(null),yc(),mi()}ne("search").oninput=Pn;for(let n of document.querySelectorAll("[data-category]"))n.onclick=()=>{Eo=n.dataset.category;for(let e of document.querySelectorAll("[data-category]"))e.classList.toggle("active",e===n),e.setAttribute("aria-pressed",String(e===n));Pn()};ne("show-all").onclick=()=>{for(let n of pi.values())n.visible=!0;ne("environment").checked=!0,Ao.forEach(n=>n.visible=!0),Pn(),mi()};ne("environment").onchange=()=>{Ao.forEach(n=>n.visible=ne("environment").checked),mi()};ne("details").onchange=()=>{pc.forEach(n=>n.visible=ne("details").checked),mi()};ne("labels").onchange=mi;ne("shadows").onchange=()=>{He&&(He.shadowMap.enabled=ne("shadows").checked,It.castShadow=ne("shadows").checked,Ss.traverse(n=>{n.isMesh&&(Array.isArray(n.material)?n.material:[n.material]).forEach(e=>e.needsUpdate=!0)}),mi())};var gc=new Rt(new L(0,0,-1),65);function Lo(){let n=ne("cut-enabled").checked,e=Number(ne("cut-height").value);ne("cut-height").disabled=!n,ne("cut-value").textContent=e+" m",gc.constant=e,He&&(He.clippingPlanes=n?[gc]:[],mi())}ne("cut-enabled").onchange=Lo;ne("cut-height").oninput=Lo;function J0(){let n=ne("detail");n.replaceChildren();for(let[e,t]of[["exploreTitle","detail-title"],["exploreSub","detail-sub"],["intro","detail-note"]]){let i=document.createElement("div");i.className=t,i.textContent=it(e),n.append(i)}}function kd(){if(!fi){J0();return}let n=Io.get(fi),e=ne("detail");e.replaceChildren();let t=document.createElement("div");t.className="detail-title",t.textContent=To(n);let i=document.createElement("div");i.className="detail-sub";let s=document.createElement("span");if(s.className="badge "+n.height_status,s.textContent=it(n.height_status),i.append(s,document.createTextNode(n.code+" \xB7 "+it(n.zone))),Lt==="zh"){let f=document.createElement("div");f.textContent=n.name,i.append(f)}let r=document.createElement("dl");r.className="dimensions";for(let[f,h]of[["highest",n.height.toFixed(2)+" m"],["area",Math.round(n.area).toLocaleString(Lt==="zh"?"zh-CN":"en-US")+" m\xB2"],["width",n.width.toFixed(1)+" m"],["depth",n.depth.toFixed(1)+" m"]]){let u=document.createElement("div"),_=document.createElement("dt"),y=document.createElement("dd");_.textContent=it(f),y.textContent=h,u.append(_,y),r.append(u)}let a=document.createElement("div");a.className="detail-actions";for(let[f,h]of[["focus",()=>_c(n.code)],["isolate",()=>{for(let[u,_]of pi)_.visible=u===n.code;Pn(),_c(n.code)}],["clear",()=>Yi(null)]]){let u=document.createElement("button");u.textContent=it(f),u.disabled=!mn&&f!=="clear",u.onclick=h,a.append(u)}let o=document.createElement("p");o.className="detail-note",o.textContent=Lt==="zh"?n.partition:n.partition_en;let l=document.createElement("p");l.className="detail-note",l.textContent=it("basisLabel")+(Lt==="zh"?n.basis:n.basis_en);let c=document.createElement("p");c.className="detail-note",c.textContent=it("precision");let d=document.createElement("p");d.className="detail-note";for(let[f,h]of[["sourceHeight",n.source],["sourceMap",n.footprint_source]]){let u=document.createElement("a");u.href=h,u.target="_blank",u.rel="noopener",u.textContent=it(f),d.append(u,document.createTextNode(" \xB7 "))}e.append(t,i,r,a,o,l,c,d)}function Yi(n,e=!1){fi=n;for(let[t,i]of pi)i.traverse(s=>{s.isMesh&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{r.emissive.set(t===n?9990656:0),r.emissiveIntensity=t===n?.22:0})});if(n){let t=pi.get(n);t&&(t.visible=!0);let i=Oi.findIndex(s=>s.code===n);i>=0&&(qi=i,No())}kd(),Pn(),e&&_c(n),mi()}function No(){let n=ne("tour-select");n.replaceChildren();for(let e of Oi){let t=document.createElement("option");t.value=e.code,t.textContent=Dd(e),n.append(t)}n.value=Oi[qi]?.code||"",ne("tour-step").textContent=qi+1+" / "+Oi.length}function Vd(n){qi=(qi+n+Oi.length)%Oi.length,No(),Yi(Oi[qi].code,!0)}ne("tour-prev").onclick=()=>Vd(-1);ne("tour-next").onclick=()=>Vd(1);ne("tour-go").onclick=()=>Yi(Oi[qi].code,!0);ne("tour-select").onchange=n=>{qi=Oi.findIndex(e=>e.code===n.target.value),No(),Yi(Oi[qi].code,!0)};function Hd(){document.documentElement.lang=Lt==="zh"?"zh-CN":"en";let n=Zt.seo[Lt];document.title=n.title;for(let i of['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]'])document.querySelector(i).content=n.description;for(let i of['meta[property="og:title"]','meta[name="twitter:title"]'])document.querySelector(i).content=n.title;document.querySelector('meta[property="og:locale"]').content=Lt==="zh"?"zh_CN":"en_US",document.querySelector('meta[property="og:locale:alternate"]').content=Lt==="zh"?"en_US":"zh_CN";for(let i of['meta[property="og:image:alt"]','meta[name="twitter:image:alt"]'])document.querySelector(i).content=n.imageAlt;for(let i of document.querySelectorAll("[data-preview-alt]"))i.alt=n.imageAlt;let e=JSON.parse(ne("campus-schema").textContent);for(let i of e["@graph"])i["@type"]==="WebPage"&&(i.name=n.title,i.description=n.description);ne("campus-schema").textContent=JSON.stringify(e);for(let i of document.querySelectorAll("[data-i18n]"))i.textContent=it(i.dataset.i18n);ne("language").textContent=Lt==="zh"?"English":"\u4E2D\u6587",ne("language").setAttribute("aria-label",it("languageLabel")),ne("search").placeholder=it("search"),ne("search").setAttribute("aria-label",it("searchLabel")),Es.setAttribute("aria-label",it("sidebarLabel")),ne("tour-select").setAttribute("aria-label",it("tourLabel")),ne("tour-prev").setAttribute("aria-label",it("prevLabel")),ne("tour-next").setAttribute("aria-label",it("nextLabel")),ne("cut-height").setAttribute("aria-label",it("cutLabel")),He&&He.domElement.setAttribute("aria-label",it("modelLabel"));for(let[i,s]of xc)s.textContent=Dd(Io.get(i));let t=ne("render-error");t&&(t.textContent=it("error")),No(),Pn(),kd(),Nd.refresh(),mi()}ne("language").onclick=()=>{Lt=Lt==="en"?"zh":"en";try{localStorage.setItem("umich-model-language",Lt)}catch{}Hd()};function Gd(){return Math.max(vt.clientWidth,1)/Math.max(vt.clientHeight,1)}function Wd(){if(!ft)return;let n=Gd();ft.left=-bs*n/2,ft.right=bs*n/2,ft.top=bs/2,ft.bottom=-bs/2,ft.updateProjectionMatrix(),Ct&&Pd(ft,Ct,vc)}function Xd(n,e="aerial",t=1.16,i=!1){ft&&(bs=wd(ft,Ct,n,{aspect:Gd(),mode:e,pad:t,distance:Math.max(3e3,vc*1.5),pivotHeight:i?void 0:Oo(Zt,(n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2)}),Wd(),mi())}function qd(){for(let n of["aerial","core","north-view","medical-view","athletic-view","plan"])ne(n).classList.toggle("active",Co===n),ne(n).setAttribute("aria-pressed",String(Co===n))}function Mc(){let n=ne("rotation-mode");n.classList.toggle("active",!!Ct?.rotationMode),n.setAttribute("aria-pressed",String(!!Ct?.rotationMode))}function Yd(){Ct&&dc(Ct,!1),Mc()}ne("rotation-mode").onclick=()=>{Ct&&dc(Ct,!Ct.rotationMode),Mc()};function Ts(n){if(n==="plan"&&Yd(),Co=n,qd(),!Rn)return;let e={core:"central","north-view":"north","medical-view":"medical","athletic-view":"athletic"}[n],t=Zt.districtBounds[e],i=t?new ai(new L(t[0],t[1],0),new L(t[2],t[3],150)):new ai().setFromObject(Rn);Xd(i,n==="plan"?"plan":"aerial")}function _c(n){if(!mn){mc=n;return}let e=pi.get(n);!e||!ft||(e.visible=!0,e.updateWorldMatrix(!0,!0),Co="focus",qd(),Xd(new ai().setFromObject(e),"aerial",1.55,!0))}for(let n of["north-view","medical-view","athletic-view"])ne(n).onclick=()=>Ts(n);ne("aerial").onclick=()=>Ts("aerial");ne("plan").onclick=()=>Ts("plan");ne("core").onclick=()=>Ts("core");ne("reset-view").onclick=()=>{Yd(),Yi(null),ne("cut-enabled").checked=!1,Lo(),Ts("aerial")};function j0(){if(!ft)return;for(let{el:t,p:i}of Fd.values()){if(t.textContent=Lt==="zh"?i.name_zh:i.name,t.style.display="none",!ne("labels").checked)continue;let s=new L(...i.position).project(ft);Math.abs(s.x)>.85||Math.abs(s.y)>.8||(t.style.left=(s.x+1)/2*vt.clientWidth+"px",t.style.top=(1-s.y)/2*vt.clientHeight+"px",t.style.display="block")}let n=[],e=[...xc].sort(([t],[i])=>t===fi?-1:i===fi?1:0);for(let[t,i]of e){let s=Io.get(t),r=pi.get(t);if(i.style.display="none",!ne("labels").checked||!r?.visible||ne("cut-enabled").checked&&s.peak_m>Number(ne("cut-height").value))continue;let a=new L(s.center[0],s.center[1],s.peak_m+3).project(ft);if(Math.abs(a.x)>.92||Math.abs(a.y)>.9||Math.abs(a.z)>1)continue;let o=(a.x+1)/2*vt.clientWidth,l=(1-a.y)/2*vt.clientHeight;if(l<65||l>vt.clientHeight-150||o>vt.clientWidth-255&&l<210)continue;let c=i.textContent.length*(Lt==="zh"?8:5)+18,f=[o-c/2,l-23,o+c/2,l];t!==fi&&n.some(h=>!(h[2]+12<f[0]||f[2]+12<h[0]||h[3]+10<f[1]||f[3]+10<h[1]))||t!==fi&&n.length>9||(n.push(f),i.style.left=o+"px",i.style.top=l+"px",i.style.display="block",i.classList.toggle("selected",t===fi))}}var fc=!1;function mi(){!He||!mn||fc||(fc=!0,requestAnimationFrame(()=>{fc=!1,Zd()}))}function Zd(){if(!He||!mn)return;He.render(Ss,ft);let n=new L(0,1,0).transformDirection(ft.matrixWorldInverse);ne("north-arrow").style.transform="rotate("+Math.atan2(n.x,n.y)+"rad)";let e=(ft.right-ft.left)/ft.zoom/Math.max(vt.clientWidth,1),t=e*80,i=10**Math.floor(Math.log10(t)),s=[1,2,5,10].map(r=>r*i).find(r=>r>=t)||10*i;ne("scale-line").style.width=s/e+"px",ne("scale-text").textContent=s<1?Math.round(s*100)+" cm":s+" m",j0()}Hd();async function K0(){try{let o=function(l){let c=He.domElement.getBoundingClientRect();return a.set((l.clientX-c.left)/c.width*2-1,-(l.clientY-c.top)/c.height*2+1),r.setFromCamera(a,ft),r.intersectObjects(Id.filter(d=>d.visible&&d.parent.visible),!1).find(d=>!ne("cut-enabled").checked||d.point.z<=gc.constant)?.object.userData.code||null};Ro=await Rd(Zt,{},Ms),At.DEFAULT_UP.set(0,0,1),He=new mo({antialias:!0,preserveDrawingBuffer:!0}),He.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),He.setClearColor(15330531),He.outputColorSpace=Ft,He.toneMapping=li,He.shadowMap.enabled=!0,He.shadowMap.type=wn,He.domElement.setAttribute("aria-label",it("modelLabel")),He.domElement.tabIndex=0,ne("canvas-host").append(He.domElement),Ss=new Fs,ft=new cn(-1e3,1e3,1e3,-1e3,.1,1e5),ft.up.set(0,0,1),Ss.add(new Ks(16777215,8687991,2)),It=new Qs(16777215,2.2);let n=new L(...Zt.siteCenter,50);It.position.copy(n).add(new L(-4e3,-6e3,9e3)),It.target.position.copy(n),It.castShadow=!0,It.shadow.mapSize.set(2048,2048),It.shadow.camera.left=-6500,It.shadow.camera.right=6500,It.shadow.camera.top=6500,It.shadow.camera.bottom=-6500,It.shadow.camera.near=1,It.shadow.camera.far=3e4,It.shadow.bias=-15e-5,It.shadow.normalBias=.35,Ss.add(It,It.target),Rn=await Td(Ro,Ms);let e=[];Rn.traverse(l=>{l.isMesh&&e.push(l)});let t=0;for(let l of e){let d=(Array.isArray(l.material)?l.material:[l.material]).map(h=>{let u=h.clone(),_=Zt.palette[u.name];return _&&u.color.setRGB(_[0]/255,_[1]/255,_[2]/255,Ft),u.shininess=u.name==="Glass"?25:0,u.specular.set(u.name==="Glass"?2236962:0),u.flatShading=!0,u.emissiveIntensity=0,u});l.material=Array.isArray(l.material)?d:d[0],l.receiveShadow=!0;let f=q0.get(Zt.layers[l.name]?.layer);if(f){let h=pi.get(f.code);h||(h=new si,h.name=f.code,pi.set(f.code,h),Rn.add(h)),h.attach(l),l.castShadow=!0,l.userData.code=f.code,Id.push(l),l.name.includes("D")&&pc.push(l)}else Ao.push(l),l.castShadow=d.some(h=>["Leaves","Trunk","Furniture"].includes(h.name));++t%32===0&&(Ms({phase:"scene",loaded:e.length+t,total:e.length*2}),await ys())}Ms({phase:"scene",loaded:1,total:1}),Ss.add(Rn),vc=new ai().setFromObject(Rn).getSize(new L).length(),Ao.forEach(l=>l.visible=ne("environment").checked),pc.forEach(l=>l.visible=ne("details").checked),He.shadowMap.enabled=ne("shadows").checked,It.castShadow=ne("shadows").checked,Lo(),Ct=new So(ft,He.domElement),Ct.groundHeight=(l,c)=>Oo(Zt,l,c),Ct.addEventListener("change",mi),Ct.listenToKeyEvents(He.domElement),Mc(),He.domElement.addEventListener("keydown",l=>{l.ctrlKey||l.metaKey||l.altKey||(["+","=","-","_"].includes(l.key)&&(l.preventDefault(),l.key==="+"||l.key==="="?Ct.dollyIn(.9):Ct.dollyOut(.9)),!l.repeat&&l.key.toLowerCase()==="r"&&ne("rotation-mode").click())});let i=vt.clientHeight;new ResizeObserver(()=>{let l=vt.clientHeight;l<1||vt.clientWidth<1||(i>0&&(bs*=l/i),i=l,He.setSize(vt.clientWidth,l),Wd(),mi())}).observe(vt),Ms({phase:"render",loaded:0,total:1}),await ys(),mn=!0,He.setSize(vt.clientWidth,vt.clientHeight),Ts("core"),fi&&Yi(fi,!!mc),mc=null,Pn();let r=new bn,a=new Ee;Lc(He.domElement,l=>Yi(o(l))),He.domElement.addEventListener("pointermove",l=>{let c=ne("hover-tip");if(l.buttons||l.pointerType==="touch"){c.style.display="none";return}let d=o(l);if(d){let f=Io.get(d);c.textContent=To(f)+" \xB7 "+f.height.toFixed(2)+" m",c.style.display="block";let h=vt.getBoundingClientRect();c.style.left=Math.min(l.clientX-h.left+14,vt.clientWidth-c.offsetWidth-10)+"px",c.style.top=Math.min(l.clientY-h.top+14,vt.clientHeight-c.offsetHeight-38)+"px",He.domElement.style.cursor="pointer"}else c.style.display="none",He.domElement.style.cursor="grab"}),He.domElement.addEventListener("pointerleave",()=>ne("hover-tip").style.display="none"),He.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),ne("status-text").textContent=it("lost")}),Ms({phase:"ready",loaded:1,total:1}),await ys(),ne("download-image").disabled=!1,ne("loading").remove()}catch(n){console.error(n),mn=!1,Ct&&Ct.dispose(),He&&He.dispose(),He=null,Ud=!0,ne("canvas-host").replaceChildren(),ne("fallback").src=Zt.preview,ne("fallback").style.display="block",ne("loading").remove();let e=document.createElement("div");e.className="error-message",e.id="render-error",e.textContent=it("error"),vt.append(e),ne("download-image").disabled=!0,yc()}}K0();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
