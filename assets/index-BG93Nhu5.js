(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="170",Yf=0,pc=1,jf=2,fu=1,Zf=2,Hn=3,Kn=0,$e=1,Cn=2,gi=0,Sr=1,mc=2,gc=3,_c=4,Kf=5,Ni=100,Jf=101,Qf=102,td=103,ed=104,nd=200,id=201,rd=202,sd=203,La=204,Ia=205,od=206,ad=207,ld=208,cd=209,hd=210,ud=211,fd=212,dd=213,pd=214,Ua=0,Na=1,Fa=2,Cr=3,ka=4,Oa=5,za=6,Ba=7,du=0,md=1,gd=2,_i=0,_d=1,vd=2,yd=3,xd=4,Md=5,Sd=6,bd=7,pu=300,Pr=301,Dr=302,Ha=303,Ga=304,Ro=306,hs=1e3,qn=1001,Va=1002,yn=1003,Td=1004,ws=1005,Le=1006,Go=1007,pi=1008,Jn=1009,mu=1010,gu=1011,us=1012,Fl=1013,Wi=1014,$n=1015,_s=1016,kl=1017,Ol=1018,Lr=1020,_u=35902,vu=1021,yu=1022,_n=1023,xu=1024,Mu=1025,br=1026,Ir=1027,Su=1028,zl=1029,bu=1030,Bl=1031,Hl=1033,lo=33776,co=33777,ho=33778,uo=33779,Wa=35840,Xa=35841,qa=35842,$a=35843,Ya=36196,ja=37492,Za=37496,Ka=37808,Ja=37809,Qa=37810,tl=37811,el=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,ll=37819,cl=37820,hl=37821,fo=36492,ul=36494,fl=36495,Tu=36283,dl=36284,pl=36285,ml=36286,Ed=3200,wd=3201,Ad=0,Rd=1,Ke="",rn="srgb",$i="srgb-linear",Co="linear",oe="srgb",Zi=7680,vc=519,Cd=512,Pd=513,Dd=514,Eu=515,Ld=516,Id=517,Ud=518,Nd=519,yc=35044,xc="300 es",Yn=2e3,go=2001;class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vo=Math.PI/180,gl=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function Fd(n,t){return(n%t+t)%t}function Wo(n,t,e){return(1-e)*n+e*t}function Hr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,r,s,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=r[0],d=r[3],p=r[6],y=r[1],v=r[4],x=r[7],R=r[2],b=r[5],T=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*d+a*v+l*b,s[6]=o*p+a*x+l*T,s[1]=c*_+h*y+u*R,s[4]=c*d+h*v+u*b,s[7]=c*p+h*x+u*T,s[2]=f*_+m*y+g*R,s[5]=f*d+m*v+g*b,s[8]=f*p+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,m=c*s-o*l,g=e*u+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Ot;function wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){const n=_o("canvas");return n.style.display="block",n}const Mc={};function ts(n){n in Mc||(Mc[n]=!0,console.warn(n))}function Od(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function zd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(n.r=Tr(n.r),n.g=Tr(n.g),n.b=Tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ke?Co:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Sc=[.64,.33,.3,.6,.15,.06],bc=[.2126,.7152,.0722],Tc=[.3127,.329],Ec=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[$i]:{primaries:Sc,whitePoint:Tc,transfer:Co,toXYZ:Ec,fromXYZ:wc,luminanceCoefficients:bc,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Sc,whitePoint:Tc,transfer:oe,toXYZ:Ec,fromXYZ:wc,luminanceCoefficients:bc,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Ki;class Hd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=_o("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gd=0;class Au{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qo(r[o].image)):s.push(qo(r[o]))}else s=qo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class Be extends kr{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=qn,r=qn,s=Le,o=pi,a=_n,l=Jn,c=Be.DEFAULT_ANISOTROPY,h=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=vs(),this.name="",this.source=new Au(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=pu;Be.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(m+1)/2,R=(p+1)/2,b=(h+f)/4,T=(u+_)/4,C=(g+d)/4;return v>x&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=T/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=C/s),this.set(i,r,s,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wd extends kr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Be(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Au(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends Wd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ru extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xd extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let d=1-a;const p=l*f+c*m+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),b=Math.atan2(R,p*y);d=Math.sin(d*b)/R,a=Math.sin(a*b)/R}const x=a*y;if(l=l*d+f*x,c=c*d+m*x,h=h*d+g*x,u=u*d+_*x,d===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ac.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ac.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new X,Ac=new ys;class xs{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Rs.subVectors(this.max,Gr),Ji.subVectors(t.a,Gr),Qi.subVectors(t.b,Gr),tr.subVectors(t.c,Gr),ri.subVectors(Qi,Ji),si.subVectors(tr,Qi),Ei.subVectors(Ji,tr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!Yo(e,Ji,Qi,tr,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Ji,Qi,tr,Rs))?!1:(Cs.crossVectors(ri,si),e=[Cs.x,Cs.y,Cs.z],Yo(e,Ji,Qi,tr,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new X,new X,new X,new X,new X,new X,new X,new X],cn=new X,As=new xs,Ji=new X,Qi=new X,tr=new X,ri=new X,si=new X,Ei=new X,Gr=new X,Rs=new X,Cs=new X,wi=new X;function Yo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wi.fromArray(n,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qd=new xs,Vr=new X,jo=new X;class Gl{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):qd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);const e=Vr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Vr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(jo)),this.expandByPoint(Vr.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new X,Zo=new X,Ps=new X,oi=new X,Ko=new X,Ds=new X,Jo=new X;class Cu{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Zo.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Zo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=oi.dot(this.direction),l=-oi.dot(Ps),c=oi.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zo).addScaledVector(Ps,f),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,r,s){Ko.subVectors(e,t),Ds.subVectors(i,t),Jo.crossVectors(Ko,Ds);let o=this.direction.dot(Jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(Ds.crossVectors(oi,Ds));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(Jo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,i,r,s,o,a,l,c,h,u,f,m,g,_,d){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,f,m,g,_,d)}set(t,e,i,r,s,o,a,l,c,h,u,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/er.setFromMatrixColumn(t,0).length(),s=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Yd)}lookAt(t,e,i){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ai.crossVectors(i,je),ai.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ai.crossVectors(i,je)),ai.normalize(),Ls.crossVectors(je,ai),r[0]=ai.x,r[4]=Ls.x,r[8]=je.x,r[1]=ai.y,r[5]=Ls.y,r[9]=je.y,r[2]=ai.z,r[6]=Ls.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],d=i[10],p=i[14],y=i[3],v=i[7],x=i[11],R=i[15],b=r[0],T=r[4],C=r[8],S=r[12],M=r[1],A=r[5],D=r[9],I=r[13],N=r[2],L=r[6],B=r[10],q=r[14],G=r[3],z=r[7],$=r[11],Z=r[15];return s[0]=o*b+a*M+l*N+c*G,s[4]=o*T+a*A+l*L+c*z,s[8]=o*C+a*D+l*B+c*$,s[12]=o*S+a*I+l*q+c*Z,s[1]=h*b+u*M+f*N+m*G,s[5]=h*T+u*A+f*L+m*z,s[9]=h*C+u*D+f*B+m*$,s[13]=h*S+u*I+f*q+m*Z,s[2]=g*b+_*M+d*N+p*G,s[6]=g*T+_*A+d*L+p*z,s[10]=g*C+_*D+d*B+p*$,s[14]=g*S+_*I+d*q+p*Z,s[3]=y*b+v*M+x*N+R*G,s[7]=y*T+v*A+x*L+R*z,s[11]=y*C+v*D+x*B+R*$,s[15]=y*S+v*I+x*q+R*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*m-i*l*m)+_*(+e*l*m-e*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+d*(+e*c*u-e*a*m-s*o*u+i*o*m+s*a*h-i*c*h)+p*(-r*a*h-e*l*u+e*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],y=u*d*c-_*f*c+_*l*m-a*d*m-u*l*p+a*f*p,v=g*f*c-h*d*c-g*l*m+o*d*m+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*m-o*_*m-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*d-o*u*d,b=e*y+i*v+r*x+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(_*f*s-u*d*s-_*r*m+i*d*m+u*r*p-i*f*p)*T,t[2]=(a*d*s-_*l*s+_*r*c-i*d*c-a*r*p+i*l*p)*T,t[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*m-i*l*m)*T,t[4]=v*T,t[5]=(h*d*s-g*f*s+g*r*m-e*d*m-h*r*p+e*f*p)*T,t[6]=(g*l*s-o*d*s-g*r*c+e*d*c+o*r*p-e*l*p)*T,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*m+e*l*m)*T,t[8]=x*T,t[9]=(g*u*s-h*_*s-g*i*m+e*_*m+h*i*p-e*u*p)*T,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*T,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*m-e*a*m)*T,t[12]=R*T,t[13]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*d+e*u*d)*T,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*d-e*a*d)*T,t[15]=(o*u*r-h*a*r+h*i*l-e*u*l-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,m=s*h,g=s*u,_=o*h,d=o*u,p=a*u,y=l*c,v=l*h,x=l*u,R=i.x,b=i.y,T=i.z;return r[0]=(1-(_+p))*R,r[1]=(m+x)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(m-x)*b,r[5]=(1-(f+p))*b,r[6]=(d+y)*b,r[7]=0,r[8]=(g+v)*T,r[9]=(d-y)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const o=er.set(r[4],r[5],r[6]).length(),a=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],hn.copy(this);const c=1/s,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Yn){const l=this.elements,c=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let m,g;if(a===Yn)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===go)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Yn){const l=this.elements,c=1/(e-t),h=1/(i-r),u=1/(o-s),f=(e+t)*c,m=(i+r)*h;let g,_;if(a===Yn)g=(o+s)*u,_=-2*u;else if(a===go)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const er=new X,hn=new ge,$d=new X(0,0,0),Yd=new X(1,1,1),ai=new X,Ls=new X,je=new X,Rc=new ge,Cc=new ys;class Qn{constructor(t=0,e=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jd=0;const Pc=new X,nr=new ys,kn=new ge,Is=new X,Wr=new X,Zd=new X,Kd=new ys,Dc=new X(1,0,0),Lc=new X(0,1,0),Ic=new X(0,0,1),Uc={type:"added"},Jd={type:"removed"},ir={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Je extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new X,e=new Qn,i=new ys,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Ot}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Is.copy(t):Is.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Wr,Is,this.up):kn.lookAt(Is,Wr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(kn),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),ir.child=t,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Je.DEFAULT_UP=new X(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new X,On=new X,ta=new X,zn=new X,rr=new X,sr=new X,Nc=new X,ea=new X,na=new X,ia=new X,ra=new Me,sa=new Me,oa=new Me;class mn{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),On.subVectors(i,e),ta.subVectors(t,e);const o=un.dot(un),a=un.dot(On),l=un.dot(ta),c=On.dot(On),h=On.dot(ta),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ra.setScalar(0),sa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,i),oa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ra,s.x),o.addScaledVector(sa,s.y),o.addScaledVector(oa,s.z),o}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),On.subVectors(t,e),un.cross(On).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),On.subVectors(this.a,this.b),un.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,i),sr.subVectors(s,i),ea.subVectors(t,i);const l=rr.dot(ea),c=sr.dot(ea);if(l<=0&&c<=0)return e.copy(i);na.subVectors(t,r);const h=rr.dot(na),u=sr.dot(na);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(rr,o);ia.subVectors(t,s);const m=rr.dot(ia),g=sr.dot(ia);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(sr,a);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Nc.subVectors(s,r),a=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(Nc,a);const p=1/(d+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(rr,o).addScaledVector(sr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Us={h:0,s:0,l:0};function aa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=Fd(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=aa(o,s,t+1/3),this.g=aa(o,s,t),this.b=aa(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=Pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Zt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(qe(Fe.r*255,0,255))*65536+Math.round(qe(Fe.g*255,0,255))*256+Math.round(qe(Fe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=rn){Zt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Us);const i=Wo(li.h,Us.h,e),r=Wo(li.s,Us.s,e),s=Wo(li.l,Us.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new te;te.NAMES=Pu;let Qd=0;class Po extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=vs(),this.name="",this.blending=Sr,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Ia&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Du extends Po{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new X,Ns=new ee;class ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class Lu extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Iu extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Gi extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let t0=0;const tn=new ge,la=new Je,or=new X,Ze=new xs,Xr=new xs,Pe=new X;class ei extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Iu:Lu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,i){return tn.makeTranslation(t,e,i),this.applyMatrix4(tn),this}scale(t,e,i){return tn.makeScale(t,e,i),this.applyMatrix4(tn),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gi(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ze.min,Xr.min),Ze.expandByPoint(Pe),Pe.addVectors(Ze.max,Xr.max),Ze.expandByPoint(Pe)):(Ze.expandByPoint(Xr.min),Ze.expandByPoint(Xr.max))}Ze.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(t,c),Pe.add(or)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new X,l[C]=new X;const c=new X,h=new X,u=new X,f=new ee,m=new ee,g=new ee,_=new X,d=new X;function p(C,S,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(d),l[S].add(d),l[M].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],A=M.start,D=M.count;for(let I=A,N=A+D;I<N;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const v=new X,x=new X,R=new X,b=new X;function T(C){R.fromBufferAttribute(r,C),b.copy(R);const S=a[C];v.copy(S),v.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(b,S);const A=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,S=y.length;C<S;++C){const M=y[C],A=M.start,D=M.count;for(let I=A,N=A+D;I<N;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,h=new X,u=new X;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[m++]}return new ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ge,Ai=new Cu,Fs=new Gl,kc=new X,ks=new X,Os=new X,zs=new X,ca=new X,Bs=new X,Oc=new X,Hs=new X;class on extends Je{constructor(t=new ei,e=new Du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ca.fromBufferAttribute(u,t),o?Bs.addScaledVector(ca,h):Bs.addScaledVector(ca.sub(e),h))}e.add(Bs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere),Fs.applyMatrix4(s),Ai.copy(t.ray).recast(t.near),!(Fs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Fs,kc)===null||Ai.origin.distanceToSquared(kc)>(t.far-t.near)**2))&&(Fc.copy(s).invert(),Ai.copy(t.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,R=v;x<R;x+=3){const b=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);r=Gs(this,p,t,i,c,h,u,b,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=a.getX(d),v=a.getX(d+1),x=a.getX(d+2);r=Gs(this,o,t,i,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=o[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,R=v;x<R;x+=3){const b=x,T=x+1,C=x+2;r=Gs(this,p,t,i,c,h,u,b,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=d,v=d+1,x=d+2;r=Gs(this,o,t,i,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function e0(n,t,e,i,r,s,o,a){let l;if(t.side===$e?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Kn,a),l===null)return null;Hs.copy(a),Hs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hs);return c<e.near||c>e.far?null:{distance:c,point:Hs.clone(),object:n}}function Gs(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,ks),n.getVertexPosition(l,Os),n.getVertexPosition(c,zs);const h=e0(n,t,e,i,ks,Os,zs,Oc);if(h){const u=new X;mn.getBarycoord(Oc,ks,Os,zs,u),r&&(h.uv=mn.getInterpolatedAttribute(r,a,l,c,u,new ee)),s&&(h.uv1=mn.getInterpolatedAttribute(s,a,l,c,u,new ee)),o&&(h.normal=mn.getInterpolatedAttribute(o,a,l,c,u,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};mn.getNormal(ks,Os,zs,f.normal),h.face=f,h.barycoord=u}return h}class Ms extends ei{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(h,3)),this.setAttribute("uv",new Gi(u,2));function g(_,d,p,y,v,x,R,b,T,C,S){const M=x/T,A=R/C,D=x/2,I=R/2,N=b/2,L=T+1,B=C+1;let q=0,G=0;const z=new X;for(let $=0;$<B;$++){const Z=$*A-I;for(let rt=0;rt<L;rt++){const xt=rt*M-D;z[_]=xt*y,z[d]=Z*v,z[p]=N,c.push(z.x,z.y,z.z),z[_]=0,z[d]=0,z[p]=b>0?1:-1,h.push(z.x,z.y,z.z),u.push(rt/T),u.push(1-$/C),q+=1}}for(let $=0;$<C;$++)for(let Z=0;Z<T;Z++){const rt=f+Z+L*$,xt=f+Z+L*($+1),Y=f+(Z+1)+L*($+1),it=f+(Z+1)+L*$;l.push(rt,xt,it),l.push(xt,Y,it),G+=6}a.addGroup(m,G,S),m+=G,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=Ur(n[e]);for(const r in i)t[r]=i[r]}return t}function n0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const i0={clone:Ur,merge:Oe};var r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Po{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=n0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Nu extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new X,zc=new ee,Bc=new ee;class sn extends Nu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,zc,Bc),e.subVectors(Bc,zc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ar=-90,lr=1;class o0 extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(ar,lr,t,e);r.layers=this.layers,this.add(r);const s=new sn(ar,lr,t,e);s.layers=this.layers,this.add(s);const o=new sn(ar,lr,t,e);o.layers=this.layers,this.add(o);const a=new sn(ar,lr,t,e);a.layers=this.layers,this.add(a);const l=new sn(ar,lr,t,e);l.layers=this.layers,this.add(l);const c=new sn(ar,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fu extends Be{constructor(t,e,i,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pr,super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class a0 extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Fu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ms(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:gi});s.uniforms.tEquirect.value=e;const o=new on(r,s),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=Le),new o0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const ha=new X,l0=new X,c0=new Ot;class Ii{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=ha.subVectors(i,e).cross(l0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||c0.getNormalMatrix(t),r=this.coplanarPoint(ha).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Gl,Vs=new X;class ku{constructor(t=new Ii,e=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,d-m,x-p).normalize(),i[1].setComponents(l+s,f+c,d+m,x+p).normalize(),i[2].setComponents(l+o,f+h,d+g,x+y).normalize(),i[3].setComponents(l-o,f-h,d-g,x-y).normalize(),i[4].setComponents(l-a,f-u,d-_,x-v).normalize(),e===Yn)i[5].setComponents(l+a,f+u,d+_,x+v).normalize();else if(e===go)i[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Vs.x=r.normal.x>0?t.max.x:t.min.x,Vs.y=r.normal.y>0?t.max.y:t.min.y,Vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ou(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function h0(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Do extends ei{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<h;p++){const y=p*f-o;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),d.push(v/a),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),R=y+1+c*(p+1),b=y+1+c*p;m.push(v,x,b),m.push(x,R,b)}this.setIndex(m),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(_,3)),this.setAttribute("uv",new Gi(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.width,t.height,t.widthSegments,t.heightSegments)}}var u0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Dm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lm=`#define PHONG
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
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Fm=`#define TOON
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
}`,km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Om=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,Hm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:u0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:p0,alphatest_fragment:m0,alphatest_pars_fragment:g0,aomap_fragment:_0,aomap_pars_fragment:v0,batching_pars_vertex:y0,batching_vertex:x0,begin_vertex:M0,beginnormal_vertex:S0,bsdfs:b0,iridescence_fragment:T0,bumpmap_pars_fragment:E0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:C0,color_fragment:P0,color_pars_fragment:D0,color_pars_vertex:L0,color_vertex:I0,common:U0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:k0,displacementmap_vertex:O0,emissivemap_fragment:z0,emissivemap_pars_fragment:B0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ip,envmap_vertex:$0,fog_vertex:Y0,fog_pars_vertex:j0,fog_fragment:Z0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:yp,map_particle_pars_fragment:xp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:bp,morphcolor_vertex:Tp,morphnormal_vertex:Ep,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Dp,normal_vertex:Lp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:kp,opaque_fragment:Op,packing:zp,premultiplied_alpha_fragment:Bp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:$p,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:Zp,skinning_pars_vertex:Kp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:tm,specularmap_pars_fragment:em,tonemapping_fragment:nm,tonemapping_pars_fragment:im,transmission_fragment:rm,transmission_pars_fragment:sm,uv_pars_fragment:om,uv_pars_vertex:am,uv_vertex:lm,worldpos_vertex:cm,background_vert:hm,background_frag:um,backgroundCube_vert:fm,backgroundCube_frag:dm,cube_vert:pm,cube_frag:mm,depth_vert:gm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:ym,equirect_vert:xm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:bm,meshbasic_vert:Tm,meshbasic_frag:Em,meshlambert_vert:wm,meshlambert_frag:Am,meshmatcap_vert:Rm,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Dm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Fm,meshtoon_frag:km,points_vert:Om,points_frag:zm,shadow_vert:Bm,shadow_frag:Hm,sprite_vert:Gm,sprite_frag:Vm},lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Rn={basic:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new te(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Oe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Oe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new te(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Oe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Oe([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Oe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Oe([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Oe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Oe([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Oe([lt.common,lt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Oe([lt.lights,lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Rn.physical={uniforms:Oe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Ws={r:0,b:0,g:0},Ci=new Qn,Wm=new ge;function Xm(n,t,e,i,r,s,o){const a=new te(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Ro)?(h===void 0&&(h=new on(new Ms(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ur(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wm.makeRotationFromEuler(Ci)),h.material.toneMapped=Zt.getTransfer(x.colorSpace)!==oe,(u!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new on(new Do(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ur(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Ws,Uu(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:d}}function qm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,A,D,I,N){let L=!1;const B=u(I,D,A);s!==B&&(s=B,c(s.object)),L=m(M,I,D,N),L&&g(M,I,D,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,x(M,A,D,I),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,D){const I=D.wireframe===!0;let N=i[M.id];N===void 0&&(N={},i[M.id]=N);let L=N[A.id];L===void 0&&(L={},N[A.id]=L);let B=L[I];return B===void 0&&(B=f(l()),L[I]=B),B}function f(M){const A=[],D=[],I=[];for(let N=0;N<e;N++)A[N]=0,D[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function m(M,A,D,I){const N=s.attributes,L=A.attributes;let B=0;const q=D.getAttributes();for(const G in q)if(q[G].location>=0){const $=N[G];let Z=L[G];if(Z===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),$===void 0||$.attribute!==Z||Z&&$.data!==Z.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function g(M,A,D,I){const N={},L=A.attributes;let B=0;const q=D.getAttributes();for(const G in q)if(q[G].location>=0){let $=L[G];$===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const Z={};Z.attribute=$,$&&$.data&&(Z.data=$.data),N[G]=Z,B++}s.attributes=N,s.attributesNum=B,s.index=I}function _(){const M=s.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function d(M){p(M,0)}function p(M,A){const D=s.newAttributes,I=s.enabledAttributes,N=s.attributeDivisors;D[M]=1,I[M]===0&&(n.enableVertexAttribArray(M),I[M]=1),N[M]!==A&&(n.vertexAttribDivisor(M,A),N[M]=A)}function y(){const M=s.newAttributes,A=s.enabledAttributes;for(let D=0,I=A.length;D<I;D++)A[D]!==M[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function v(M,A,D,I,N,L,B){B===!0?n.vertexAttribIPointer(M,A,D,N,L):n.vertexAttribPointer(M,A,D,I,N,L)}function x(M,A,D,I){_();const N=I.attributes,L=D.getAttributes(),B=A.defaultAttributeValues;for(const q in L){const G=L[q];if(G.location>=0){let z=N[q];if(z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),z!==void 0){const $=z.normalized,Z=z.itemSize,rt=t.get(z);if(rt===void 0)continue;const xt=rt.buffer,Y=rt.type,it=rt.bytesPerElement,_t=Y===n.INT||Y===n.UNSIGNED_INT||z.gpuType===Fl;if(z.isInterleavedBufferAttribute){const at=z.data,Pt=at.stride,Nt=z.offset;if(at.isInstancedInterleavedBuffer){for(let Vt=0;Vt<G.locationSize;Vt++)p(G.location+Vt,at.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Vt=0;Vt<G.locationSize;Vt++)d(G.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Vt=0;Vt<G.locationSize;Vt++)v(G.location+Vt,Z/G.locationSize,Y,$,Pt*it,(Nt+Z/G.locationSize*Vt)*it,_t)}else{if(z.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)p(G.location+at,z.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let at=0;at<G.locationSize;at++)d(G.location+at);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let at=0;at<G.locationSize;at++)v(G.location+at,Z/G.locationSize,Y,$,Z*it,Z/G.locationSize*at*it,_t)}}else if(B!==void 0){const $=B[q];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(G.location,$);break;case 3:n.vertexAttrib3fv(G.location,$);break;case 4:n.vertexAttrib4fv(G.location,$);break;default:n.vertexAttrib1fv(G.location,$)}}}}y()}function R(){C();for(const M in i){const A=i[M];for(const D in A){const I=A[D];for(const N in I)h(I[N].object),delete I[N];delete A[D]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const D in A){const I=A[D];for(const N in I)h(I[N].object),delete I[N];delete A[D]}delete i[M.id]}function T(M){for(const A in i){const D=i[A];if(D[M.id]===void 0)continue;const I=D[M.id];for(const N in I)h(I[N].object),delete I[N];delete D[M.id]}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function $m(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ym(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==_n&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function jm(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Ii,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!d)s?h(null):c();else{const y=s?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=h(g,f,v,m);for(let R=0;R!==v;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,x=m;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(d,x),d[x+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Zm(n){let t=new WeakMap;function e(o,a){return a===Ha?o.mapping=Pr:a===Ga&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===Ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new a0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class zu extends Nu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vr=4,Hc=[.125,.215,.35,.446,.526,.582],Fi=20,ua=new zu,Gc=new te;let fa=null,da=0,pa=0,ma=!1;const Ui=(1+Math.sqrt(5))/2,cr=1/Ui,Vc=[new X(-Ui,cr,0),new X(Ui,cr,0),new X(-cr,0,Ui),new X(cr,0,Ui),new X(0,Ui,-cr),new X(0,Ui,cr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,da,pa),this._renderer.xr.enabled=ma,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),pa=this._renderer.getActiveMipmapLevel(),ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:_s,format:_n,colorSpace:$i,depthBuffer:!1},r=Xc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Km(s)),this._blurMaterial=Jm(s,t,e)}return r}_compileMaterial(t){const e=new on(this._lodPlanes[0],t);this._renderer.compile(e,ua)}_sceneToCubeUV(t,e,i,r){const a=new sn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Gc),h.toneMapping=_i,h.autoClear=!1;const m=new Du({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new on(new Ms,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Gc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Xs(r,y*v,p>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Pr||t.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ua)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vc[(r-s-1)%Vc.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new on(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):Fi;d>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Fi}`);const p=[];let y=0;for(let T=0;T<Fi;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?y+=S:T<d&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],R=3*x*(r>v-vr?r-v+vr:0),b=4*(this._cubeSize-x);Xs(e,R,b,3*x,2*x),l.setRenderTarget(e),l.render(u,ua)}}function Km(n){const t=[],e=[],i=[];let r=n;const s=n-vr+1+Hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-vr?l=Hc[o-n+vr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),v=new Float32Array(d*g*m),x=new Float32Array(p*g*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,C=b>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(S,_*g*b),v.set(f,d*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const R=new ei;R.setAttribute("position",new ke(y,_)),R.setAttribute("uv",new ke(v,d)),R.setAttribute("faceIndex",new ke(x,p)),t.push(R),r>vr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xc(n,t,e){const i=new yi(n,t,e);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Jm(n,t,e){const i=new Float32Array(Fi),r=new X(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function qc(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function $c(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===Ga,h=l===Pr||l===Dr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Wc(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Wc(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eg(n,t,e,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const R=y[v+0],b=y[v+1],T=y[v+2];f.push(R,b,b,T,T,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const R=v+0,b=v+1,T=v+2;f.push(R,b,b,T,T,R)}}else return;const d=new(wu(f)?Iu:Lu)(f,1);d.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,d)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ng(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*o,g),e.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,i,1)}function u(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ig(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function rg(n,t,e){const i=new WeakMap,r=new Me;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let R=a.attributes.position.count*x,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*b*4*u),C=new Ru(T,R,b,u);C.type=$n,C.needsUpdate=!0;const S=x*4;for(let A=0;A<u;A++){const D=p[A],I=y[A],N=v[A],L=R*b*4*A;for(let B=0;B<D.count;B++){const q=B*S;g===!0&&(r.fromBufferAttribute(D,B),T[L+q+0]=r.x,T[L+q+1]=r.y,T[L+q+2]=r.z,T[L+q+3]=0),_===!0&&(r.fromBufferAttribute(I,B),T[L+q+4]=r.x,T[L+q+5]=r.y,T[L+q+6]=r.z,T[L+q+7]=0),d===!0&&(r.fromBufferAttribute(N,B),T[L+q+8]=r.x,T[L+q+9]=r.y,T[L+q+10]=r.z,T[L+q+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new ee(R,b)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function sg(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Bu extends Be{constructor(t,e,i,r,s,o,a,l,c,h=br){if(h!==br&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===br&&(i=Wi),i===void 0&&h===Ir&&(i=Lr),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hu=new Be,Yc=new Bu(1,1),Gu=new Ru,Vu=new Xd,Wu=new Fu,jc=[],Zc=[],Kc=new Float32Array(16),Jc=new Float32Array(9),Qc=new Float32Array(4);function Or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=jc[r];if(s===void 0&&(s=new Float32Array(r),jc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Lo(n,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function og(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function hg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Qc.set(i),n.uniformMatrix2fv(this.addr,!1,Qc),Ce(e,i)}}function ug(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Jc.set(i),n.uniformMatrix3fv(this.addr,!1,Jc),Ce(e,i)}}function fg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),Ce(e,i)}}function dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function _g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function Mg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Yc.compareFunction=Eu,s=Yc):s=Hu,e.setTexture2D(t||s,r)}function Sg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Vu,r)}function bg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wu,r)}function Tg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Gu,r)}function Eg(n){switch(n){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return fg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return yg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Tg}}function wg(n,t){n.uniform1fv(this.addr,t)}function Ag(n,t){const e=Or(t,this.size,2);n.uniform2fv(this.addr,e)}function Rg(n,t){const e=Or(t,this.size,3);n.uniform3fv(this.addr,e)}function Cg(n,t){const e=Or(t,this.size,4);n.uniform4fv(this.addr,e)}function Pg(n,t){const e=Or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dg(n,t){const e=Or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lg(n,t){const e=Or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ig(n,t){n.uniform1iv(this.addr,t)}function Ug(n,t){n.uniform2iv(this.addr,t)}function Ng(n,t){n.uniform3iv(this.addr,t)}function Fg(n,t){n.uniform4iv(this.addr,t)}function kg(n,t){n.uniform1uiv(this.addr,t)}function Og(n,t){n.uniform2uiv(this.addr,t)}function zg(n,t){n.uniform3uiv(this.addr,t)}function Bg(n,t){n.uniform4uiv(this.addr,t)}function Hg(n,t,e){const i=this.cache,r=t.length,s=Lo(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Hu,s[o])}function Gg(n,t,e){const i=this.cache,r=t.length,s=Lo(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vu,s[o])}function Vg(n,t,e){const i=this.cache,r=t.length,s=Lo(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wu,s[o])}function Wg(n,t,e){const i=this.cache,r=t.length,s=Lo(e,r);Re(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gu,s[o])}function Xg(n){switch(n){case 5126:return wg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Dg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return kg;case 36294:return Og;case 36295:return zg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class $g{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function th(n,t){n.seq.push(t),n.map[t.id]=t}function jg(n,t,e){const i=n.name,r=i.length;for(ga.lastIndex=0;;){const s=ga.exec(i),o=ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){th(e,c===void 0?new qg(a,n,t):new $g(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Yg(a),th(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);jg(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function eh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zg=37297;let Kg=0;function Jg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const nh=new Ot;function Qg(n){Zt._getMatrix(nh,Zt.workingColorSpace,n);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case Co:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ih(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Jg(n.getShaderSource(t),o)}else return r}function t_(n,t){const e=Qg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e_(n,t){let e;switch(t){case _d:e="Linear";break;case vd:e="Reinhard";break;case yd:e="Cineon";break;case xd:e="ACESFilmic";break;case Sd:e="AgX";break;case bd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new X;function n_(){Zt.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function r_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function s_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function es(n){return n!==""}function rh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(o_,l_)}const a_=new Map;function l_(n,t){let e=Gt[t];if(e===void 0){const i=a_.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(c_,h_)}function h_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ah(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Zf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function f_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function p_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case du:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function m_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function g_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=u_(e),c=f_(e),h=d_(e),u=p_(e),f=m_(e),m=i_(e),g=r_(s),_=r.createProgram();let d,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(d=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Gt.tonemapping_pars_fragment:"",e.toneMapping!==_i?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),o=_l(o),o=rh(o,e),o=sh(o,e),a=_l(a),a=rh(a,e),a=sh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+d+o,x=y+p+a,R=eh(r,r.VERTEX_SHADER,v),b=eh(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(R).trim(),N=r.getShaderInfoLog(b).trim();let L=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,b);else{const q=ih(r,R,"vertex"),G=ih(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+q+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||N==="")&&(B=!1);B&&(A.diagnostics={runnable:L,programLog:D,vertexShader:{log:I,prefix:d},fragmentShader:{log:N,prefix:p}})}r.deleteShader(R),r.deleteShader(b),C=new po(r,_),S=s_(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Zg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let __=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new y_(t),e.set(t,i)),i}}class y_{constructor(t){this.id=__++,this.code=t,this.usedTimes=0}}function x_(n,t,e,i,r,s,o){const a=new Vl,l=new v_,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,M,A,D,I){const N=D.fog,L=I.geometry,B=S.isMeshStandardMaterial?D.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),G=q&&q.mapping===Ro?q.image.height:null,z=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=$!==void 0?$.length:0;let rt=0;L.morphAttributes.position!==void 0&&(rt=1),L.morphAttributes.normal!==void 0&&(rt=2),L.morphAttributes.color!==void 0&&(rt=3);let xt,Y,it,_t;if(z){const re=Rn[z];xt=re.vertexShader,Y=re.fragmentShader}else xt=S.vertexShader,Y=S.fragmentShader,l.update(S),it=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);const at=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Nt=I.isInstancedMesh===!0,Vt=I.isBatchedMesh===!0,qt=!!S.map,nt=!!S.matcap,ct=!!q,U=!!S.aoMap,kt=!!S.lightMap,At=!!S.bumpMap,Lt=!!S.normalMap,Rt=!!S.displacementMap,he=!!S.emissiveMap,Ct=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,H=S.clearcoat>0,Q=S.dispersion>0,et=S.iridescence>0,K=S.sheen>0,Tt=S.transmission>0,ut=E&&!!S.anisotropyMap,gt=H&&!!S.clearcoatMap,Yt=H&&!!S.clearcoatNormalMap,st=H&&!!S.clearcoatRoughnessMap,vt=et&&!!S.iridescenceMap,Dt=et&&!!S.iridescenceThicknessMap,It=K&&!!S.sheenColorMap,yt=K&&!!S.sheenRoughnessMap,$t=!!S.specularMap,Ht=!!S.specularColorMap,le=!!S.specularIntensityMap,F=Tt&&!!S.transmissionMap,ht=Tt&&!!S.thicknessMap,j=!!S.gradientMap,tt=!!S.alphaMap,pt=S.alphaTest>0,ft=!!S.alphaHash,zt=!!S.extensions;let ve=_i;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ue={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:xt,fragmentShader:Y,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Vt,batchingColor:Vt&&I._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&I.instanceColor!==null,instancingMorph:Nt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:$i,alphaToCoverage:!!S.alphaToCoverage,map:qt,matcap:nt,envMap:ct,envMapMode:ct&&q.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:kt,bumpMap:At,normalMap:Lt,displacementMap:f&&Rt,emissiveMap:he,normalMapObjectSpace:Lt&&S.normalMapType===Rd,normalMapTangentSpace:Lt&&S.normalMapType===Ad,metalnessMap:Ct,roughnessMap:P,anisotropy:E,anisotropyMap:ut,clearcoat:H,clearcoatMap:gt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:K,sheenColorMap:It,sheenRoughnessMap:yt,specularMap:$t,specularColorMap:Ht,specularIntensityMap:le,transmission:Tt,transmissionMap:F,thicknessMap:ht,gradientMap:j,opaque:S.transparent===!1&&S.blending===Sr&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:ft,combine:S.combine,mapUv:qt&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:kt&&_(S.lightMap.channel),bumpMapUv:At&&_(S.bumpMap.channel),normalMapUv:Lt&&_(S.normalMap.channel),displacementMapUv:Rt&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:Ct&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:ut&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(S.sheenRoughnessMap.channel),specularMapUv:$t&&_(S.specularMap.channel),specularColorMapUv:Ht&&_(S.specularColorMap.channel),specularIntensityMapUv:le&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Lt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(qt||tt),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pt,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:qt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:zt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&S.extensions.multiDraw===!0||Vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let A;if(M){const D=Rn[M];A=i0.clone(D.uniforms)}else A=S.uniforms;return A}function R(S,M){let A;for(let D=0,I=h.length;D<I;D++){const N=h[D];if(N.cacheKey===M){A=N,++A.usedTimes;break}}return A===void 0&&(A=new g_(n,M,S,s),h.push(A)),A}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:C}}function M_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function S_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ch(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,f,m,g,_,d){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=d),t++,p}function a(u,f,m,g,_,d){const p=o(u,f,m,g,_,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(u,f,m,g,_,d){const p=o(u,f,m,g,_,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||S_),i.length>1&&i.sort(f||lh),r.length>1&&r.sort(f||lh)}function h(){for(let u=t,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function b_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new ch,n.set(i,[o])):r>=s.length?(o=new ch,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function T_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new te};break;case"SpotLight":e={position:new X,direction:new X,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function E_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let w_=0;function A_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function R_(n){const t=new T_,e=E_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new ge,o=new ge;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,v=0,x=0,R=0,b=0,T=0;c.sort(A_);for(let S=0,M=c.length;S<M;S++){const A=c[S],D=A.color,I=A.intensity,N=A.distance,L=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*I,u+=D.g*I,f+=D.b*I;else if(A.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(A.sh.coefficients[B],I);T++}else if(A.isDirectionalLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const q=A.shadow,G=e.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=A.shadow.matrix,y++}i.directional[m]=B,m++}else if(A.isSpotLight){const B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(D).multiplyScalar(I),B.distance=N,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,i.spot[_]=B;const q=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,q.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[_]=q.matrix,A.castShadow){const G=e.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=L,x++}_++}else if(A.isRectAreaLight){const B=t.get(A);B.color.copy(D).multiplyScalar(I),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),i.rectArea[d]=B,d++}else if(A.isPointLight){const B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const q=A.shadow,G=e.get(A);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=A.shadow.matrix,v++}i.point[g]=B,g++}else if(A.isHemisphereLight){const B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(I),B.groundColor.copy(A.groundColor).multiplyScalar(I),i.hemi[p]=B,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==d||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=d,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,i.version=w_++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const d=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),u++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),m++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),o.identity(),s.copy(v.matrixWorld),s.premultiply(d),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:i}}function hh(n){const t=new R_(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function C_(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new hh(n),t.set(r,[a])):s>=o.length?(a=new hh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class P_ extends Po{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D_ extends Po{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U_(n,t,e){let i=new ku;const r=new ee,s=new ee,o=new Me,a=new P_({depthPacking:wd}),l=new D_,c={},h=e.maxTextureSize,u={[Kn]:$e,[$e]:Kn,[Cn]:Cn},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:L_,fragmentShader:I_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let p=this.type;this.render=function(b,T,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(gi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=p!==Hn&&this.type===Hn,N=p===Hn&&this.type!==Hn;for(let L=0,B=b.length;L<B;L++){const q=b[L],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const z=G.getFrameExtents();if(r.multiply(z),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/z.x),r.x=s.x*z.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/z.y),r.y=s.y*z.y,G.mapSize.y=s.y)),G.map===null||I===!0||N===!0){const Z=this.type!==Hn?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new yi(r.x,r.y,Z),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const $=G.getViewportCount();for(let Z=0;Z<$;Z++){const rt=G.getViewport(Z);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),D.viewport(o),G.updateMatrices(q,Z),i=G.getFrustum(),x(T,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&y(G,C),G.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(S,M,A)};function y(b,T){const C=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,C,m,_,null)}function v(b,T,C,S){let M=null;const A=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)M=A;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=M.uuid,I=T.uuid;let N=c[D];N===void 0&&(N={},c[D]=N);let L=N[I];L===void 0&&(L=M.clone(),N[I]=L,T.addEventListener("dispose",R)),M=L}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Hn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=C}return M}function x(b,T,C,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Hn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const I=t.update(b),N=b.material;if(Array.isArray(N)){const L=I.groups;for(let B=0,q=L.length;B<q;B++){const G=L[B],z=N[G.materialIndex];if(z&&z.visible){const $=v(b,z,S,M);b.onBeforeShadow(n,b,T,C,I,$,G),n.renderBufferDirect(C,null,I,$,b,G),b.onAfterShadow(n,b,T,C,I,$,G)}}}else if(N.visible){const L=v(b,N,S,M);b.onBeforeShadow(n,b,T,C,I,L,null),n.renderBufferDirect(C,null,I,L,b,null),b.onAfterShadow(n,b,T,C,I,L,null)}}const D=b.children;for(let I=0,N=D.length;I<N;I++)x(D[I],T,C,S,M)}function R(b){b.target.removeEventListener("dispose",R);for(const C in c){const S=c[C],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const N_={[Ua]:Na,[Fa]:za,[ka]:Ba,[Cr]:Oa,[Na]:Ua,[za]:Fa,[Ba]:ka,[Oa]:Cr};function F_(n,t){function e(){let F=!1;const ht=new Me;let j=null;const tt=new Me(0,0,0,0);return{setMask:function(pt){j!==pt&&!F&&(n.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){F=pt},setClear:function(pt,ft,zt,ve,Ue){Ue===!0&&(pt*=ve,ft*=ve,zt*=ve),ht.set(pt,ft,zt,ve),tt.equals(ht)===!1&&(n.clearColor(pt,ft,zt,ve),tt.copy(ht))},reset:function(){F=!1,j=null,tt.set(-1,0,0,0)}}}function i(){let F=!1,ht=!1,j=null,tt=null,pt=null;return{setReversed:function(ft){if(ht!==ft){const zt=t.get("EXT_clip_control");ht?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ve=pt;pt=null,this.setClear(ve)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?at(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(ft){j!==ft&&!F&&(n.depthMask(ft),j=ft)},setFunc:function(ft){if(ht&&(ft=N_[ft]),tt!==ft){switch(ft){case Ua:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Fa:n.depthFunc(n.LESS);break;case Cr:n.depthFunc(n.LEQUAL);break;case ka:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=ft}},setLocked:function(ft){F=ft},setClear:function(ft){pt!==ft&&(ht&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){F=!1,j=null,tt=null,pt=null,ht=!1}}}function r(){let F=!1,ht=null,j=null,tt=null,pt=null,ft=null,zt=null,ve=null,Ue=null;return{setTest:function(re){F||(re?at(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(re){ht!==re&&!F&&(n.stencilMask(re),ht=re)},setFunc:function(re,an,In){(j!==re||tt!==an||pt!==In)&&(n.stencilFunc(re,an,In),j=re,tt=an,pt=In)},setOp:function(re,an,In){(ft!==re||zt!==an||ve!==In)&&(n.stencilOp(re,an,In),ft=re,zt=an,ve=In)},setLocked:function(re){F=re},setClear:function(re){Ue!==re&&(n.clearStencil(re),Ue=re)},reset:function(){F=!1,ht=null,j=null,tt=null,pt=null,ft=null,zt=null,ve=null,Ue=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,R=null,b=null,T=new te(0,0,0),C=0,S=!1,M=null,A=null,D=null,I=null,N=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=q>=2);let z=null,$={};const Z=n.getParameter(n.SCISSOR_BOX),rt=n.getParameter(n.VIEWPORT),xt=new Me().fromArray(Z),Y=new Me().fromArray(rt);function it(F,ht,j,tt){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(F,ft),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let zt=0;zt<j;zt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ht+zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const _t={};_t[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(n.DEPTH_TEST),o.setFunc(Cr),At(!1),Lt(pc),at(n.CULL_FACE),U(gi);function at(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Pt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Nt(F,ht){return u[F]!==ht?(n.bindFramebuffer(F,ht),u[F]=ht,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Vt(F,ht){let j=m,tt=!1;if(F){j=f.get(ht),j===void 0&&(j=[],f.set(ht,j));const pt=F.textures;if(j.length!==pt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,zt=pt.length;ft<zt;ft++)j[ft]=n.COLOR_ATTACHMENT0+ft;j.length=pt.length,tt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,tt=!0);tt&&n.drawBuffers(j)}function qt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const nt={[Ni]:n.FUNC_ADD,[Jf]:n.FUNC_SUBTRACT,[Qf]:n.FUNC_REVERSE_SUBTRACT};nt[td]=n.MIN,nt[ed]=n.MAX;const ct={[nd]:n.ZERO,[id]:n.ONE,[rd]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[ld]:n.DST_COLOR,[od]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[Ia]:n.ONE_MINUS_SRC_ALPHA,[cd]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[fd]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[pd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(F,ht,j,tt,pt,ft,zt,ve,Ue,re){if(F===gi){_===!0&&(Pt(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),F!==Kf){if(F!==d||re!==S){if((p!==Ni||x!==Ni)&&(n.blendEquation(n.FUNC_ADD),p=Ni,x=Ni),re)switch(F){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,R=null,b=null,T.set(0,0,0),C=0,d=F,S=re}return}pt=pt||ht,ft=ft||j,zt=zt||tt,(ht!==p||pt!==x)&&(n.blendEquationSeparate(nt[ht],nt[pt]),p=ht,x=pt),(j!==y||tt!==v||ft!==R||zt!==b)&&(n.blendFuncSeparate(ct[j],ct[tt],ct[ft],ct[zt]),y=j,v=tt,R=ft,b=zt),(ve.equals(T)===!1||Ue!==C)&&(n.blendColor(ve.r,ve.g,ve.b,Ue),T.copy(ve),C=Ue),d=F,S=!1}function kt(F,ht){F.side===Cn?Pt(n.CULL_FACE):at(n.CULL_FACE);let j=F.side===$e;ht&&(j=!j),At(j),F.blending===Sr&&F.transparent===!1?U(gi):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;a.setTest(tt),tt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),he(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function Lt(F){F!==Yf?(at(n.CULL_FACE),F!==A&&(F===pc?n.cullFace(n.BACK):F===jf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),A=F}function Rt(F){F!==D&&(B&&n.lineWidth(F),D=F)}function he(F,ht,j){F?(at(n.POLYGON_OFFSET_FILL),(I!==ht||N!==j)&&(n.polygonOffset(ht,j),I=ht,N=j)):Pt(n.POLYGON_OFFSET_FILL)}function Ct(F){F?at(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+L-1),z!==F&&(n.activeTexture(F),z=F)}function E(F,ht,j){j===void 0&&(z===null?j=n.TEXTURE0+L-1:j=z);let tt=$[j];tt===void 0&&(tt={type:void 0,texture:void 0},$[j]=tt),(tt.type!==F||tt.texture!==ht)&&(z!==j&&(n.activeTexture(j),z=j),n.bindTexture(F,ht||_t[F]),tt.type=F,tt.texture=ht)}function H(){const F=$[z];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(F){xt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),xt.copy(F))}function yt(F){Y.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function $t(F,ht){let j=c.get(ht);j===void 0&&(j=new WeakMap,c.set(ht,j));let tt=j.get(F);tt===void 0&&(tt=n.getUniformBlockIndex(ht,F.name),j.set(F,tt))}function Ht(F,ht){const tt=c.get(ht).get(F);l.get(ht)!==tt&&(n.uniformBlockBinding(ht,tt,F.__bindingPointIndex),l.set(ht,tt))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},z=null,$={},u={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,R=null,b=null,T=new te(0,0,0),C=0,S=!1,M=null,A=null,D=null,I=null,N=null,xt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:at,disable:Pt,bindFramebuffer:Nt,drawBuffers:Vt,useProgram:qt,setBlending:U,setMaterial:kt,setFlipSided:At,setCullFace:Lt,setLineWidth:Rt,setPolygonOffset:he,setScissorTest:Ct,activeTexture:P,bindTexture:E,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:vt,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Ht,texStorage2D:Yt,texStorage3D:st,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:It,viewport:yt,reset:le}}function uh(n,t,e,i){const r=k_(i);switch(e){case vu:return n*t;case xu:return n*t;case Mu:return n*t*2;case Su:return n*t/r.components*r.byteLength;case zl:return n*t/r.components*r.byteLength;case bu:return n*t*2/r.components*r.byteLength;case Bl:return n*t*2/r.components*r.byteLength;case yu:return n*t*3/r.components*r.byteLength;case _n:return n*t*4/r.components*r.byteLength;case Hl:return n*t*4/r.components*r.byteLength;case lo:case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:case $a:return Math.max(n,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(t,8)/2;case Ya:case ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case fo:case ul:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tu:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function k_(n){switch(n){case Jn:case mu:return{byteLength:1,components:1};case us:case gu:case _s:return{byteLength:2,components:1};case kl:case Ol:return{byteLength:2,components:4};case Wi:case Fl:case $n:return{byteLength:4,components:1};case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O_(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):_o("canvas")}function _(P,E,H){let Q=1;const et=Ct(P);if((et.width>H||et.height>H)&&(Q=H/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*et.width),Tt=Math.floor(Q*et.height);u===void 0&&(u=g(K,Tt));const ut=E?g(K,Tt):u;return ut.width=K,ut.height=Tt,ut.getContext("2d").drawImage(P,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+Tt+")."),ut}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function d(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,E,H,Q,et=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),E===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),E===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),E===n.RGBA){const Tt=et?Co:Zt.getTransfer(Q);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=Tt===oe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(P,E){let H;return P?E===null||E===Wi||E===Lr?H=n.DEPTH24_STENCIL8:E===$n?H=n.DEPTH32F_STENCIL8:E===us&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===Lr?H=n.DEPTH_COMPONENT24:E===$n?H=n.DEPTH_COMPONENT32F:E===us&&(H=n.DEPTH_COMPONENT16),H}function R(P,E){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==Le?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){const E=P.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&h.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),M(E)}function C(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,Q=f.get(H);if(Q){const et=Q[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(P),Object.keys(Q).length===0&&f.delete(H)}i.remove(P)}function S(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const H=P.source,Q=f.get(H);delete Q[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let et=0;et<E.__webglFramebuffer[Q].length;et++)n.deleteFramebuffer(E.__webglFramebuffer[Q][et]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=P.textures;for(let Q=0,et=H.length;Q<et;Q++){const K=i.get(H[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(H[Q])}i.remove(P)}let A=0;function D(){A=0}function I(){const P=A;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),A+=1,P}function N(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function L(P,E){const H=i.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,P,E);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function B(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Y(H,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function q(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Y(H,P,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function G(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){it(H,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const z={[hs]:n.REPEAT,[qn]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},$={[yn]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[Le]:n.LINEAR,[Go]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Z={[Cd]:n.NEVER,[Nd]:n.ALWAYS,[Pd]:n.LESS,[Eu]:n.LEQUAL,[Dd]:n.EQUAL,[Ud]:n.GEQUAL,[Ld]:n.GREATER,[Id]:n.NOTEQUAL};function rt(P,E){if(E.type===$n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Le||E.magFilter===Go||E.magFilter===ws||E.magFilter===pi||E.minFilter===Le||E.minFilter===Go||E.minFilter===ws||E.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,z[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,z[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,z[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==ws&&E.minFilter!==pi||E.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function xt(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));const Q=E.source;let et=f.get(Q);et===void 0&&(et={},f.set(Q,et));const K=N(E);if(K!==P.__cacheKey){et[K]===void 0&&(et[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[K].usedTimes++;const Tt=et[P.__cacheKey];Tt!==void 0&&(et[P.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(E)),P.__cacheKey=K,P.__webglTexture=et[K].texture}return H}function Y(P,E,H){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const et=xt(P,E),K=E.source;e.bindTexture(Q,P.__webglTexture,n.TEXTURE0+H);const Tt=i.get(K);if(K.version!==Tt.__version||et===!0){e.activeTexture(n.TEXTURE0+H);const ut=Zt.getPrimaries(Zt.workingColorSpace),gt=E.colorSpace===Ke?null:Zt.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ke||ut===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let st=_(E.image,!1,r.maxTextureSize);st=he(E,st);const vt=s.convert(E.format,E.colorSpace),Dt=s.convert(E.type);let It=v(E.internalFormat,vt,Dt,E.colorSpace,E.isVideoTexture);rt(Q,E);let yt;const $t=E.mipmaps,Ht=E.isVideoTexture!==!0,le=Tt.__version===void 0||et===!0,F=K.dataReady,ht=R(E,st);if(E.isDepthTexture)It=x(E.format===Ir,E.type),le&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,It,st.width,st.height,0,vt,Dt,null));else if(E.isDataTexture)if($t.length>0){Ht&&le&&e.texStorage2D(n.TEXTURE_2D,ht,It,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)yt=$t[j],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,yt.width,yt.height,vt,Dt,yt.data):e.texImage2D(n.TEXTURE_2D,j,It,yt.width,yt.height,0,vt,Dt,yt.data);E.generateMipmaps=!1}else Ht?(le&&e.texStorage2D(n.TEXTURE_2D,ht,It,st.width,st.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,vt,Dt,st.data)):e.texImage2D(n.TEXTURE_2D,0,It,st.width,st.height,0,vt,Dt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,It,$t[0].width,$t[0].height,st.depth);for(let j=0,tt=$t.length;j<tt;j++)if(yt=$t[j],E.format!==_n)if(vt!==null)if(Ht){if(F)if(E.layerUpdates.size>0){const pt=uh(yt.width,yt.height,E.format,E.type);for(const ft of E.layerUpdates){const zt=yt.data.subarray(ft*pt/yt.data.BYTES_PER_ELEMENT,(ft+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ft,yt.width,yt.height,1,vt,zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,yt.width,yt.height,st.depth,vt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,It,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,yt.width,yt.height,st.depth,vt,Dt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,It,yt.width,yt.height,st.depth,0,vt,Dt,yt.data)}else{Ht&&le&&e.texStorage2D(n.TEXTURE_2D,ht,It,$t[0].width,$t[0].height);for(let j=0,tt=$t.length;j<tt;j++)yt=$t[j],E.format!==_n?vt!==null?Ht?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,j,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,yt.width,yt.height,vt,Dt,yt.data):e.texImage2D(n.TEXTURE_2D,j,It,yt.width,yt.height,0,vt,Dt,yt.data)}else if(E.isDataArrayTexture)if(Ht){if(le&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,It,st.width,st.height,st.depth),F)if(E.layerUpdates.size>0){const j=uh(st.width,st.height,E.format,E.type);for(const tt of E.layerUpdates){const pt=st.data.subarray(tt*j/st.data.BYTES_PER_ELEMENT,(tt+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,vt,Dt,pt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Dt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,vt,Dt,st.data);else if(E.isData3DTexture)Ht?(le&&e.texStorage3D(n.TEXTURE_3D,ht,It,st.width,st.height,st.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Dt,st.data)):e.texImage3D(n.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,vt,Dt,st.data);else if(E.isFramebufferTexture){if(le)if(Ht)e.texStorage2D(n.TEXTURE_2D,ht,It,st.width,st.height);else{let j=st.width,tt=st.height;for(let pt=0;pt<ht;pt++)e.texImage2D(n.TEXTURE_2D,pt,It,j,tt,0,vt,Dt,null),j>>=1,tt>>=1}}else if($t.length>0){if(Ht&&le){const j=Ct($t[0]);e.texStorage2D(n.TEXTURE_2D,ht,It,j.width,j.height)}for(let j=0,tt=$t.length;j<tt;j++)yt=$t[j],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,vt,Dt,yt):e.texImage2D(n.TEXTURE_2D,j,It,vt,Dt,yt);E.generateMipmaps=!1}else if(Ht){if(le){const j=Ct(st);e.texStorage2D(n.TEXTURE_2D,ht,It,j.width,j.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Dt,st)}else e.texImage2D(n.TEXTURE_2D,0,It,vt,Dt,st);d(E)&&p(Q),Tt.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function it(P,E,H){if(E.image.length!==6)return;const Q=xt(P,E),et=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+H);const K=i.get(et);if(et.version!==K.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const Tt=Zt.getPrimaries(Zt.workingColorSpace),ut=E.colorSpace===Ke?null:Zt.getPrimaries(E.colorSpace),gt=E.colorSpace===Ke||Tt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Yt&&!st?vt[tt]=_(E.image[tt],!0,r.maxCubemapSize):vt[tt]=st?E.image[tt].image:E.image[tt],vt[tt]=he(E,vt[tt]);const Dt=vt[0],It=s.convert(E.format,E.colorSpace),yt=s.convert(E.type),$t=v(E.internalFormat,It,yt,E.colorSpace),Ht=E.isVideoTexture!==!0,le=K.__version===void 0||Q===!0,F=et.dataReady;let ht=R(E,Dt);rt(n.TEXTURE_CUBE_MAP,E);let j;if(Yt){Ht&&le&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,$t,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){j=vt[tt].mipmaps;for(let pt=0;pt<j.length;pt++){const ft=j[pt];E.format!==_n?It!==null?Ht?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,ft.width,ft.height,It,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,ft.width,ft.height,It,yt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,$t,ft.width,ft.height,0,It,yt,ft.data)}}}else{if(j=E.mipmaps,Ht&&le){j.length>0&&ht++;const tt=Ct(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,It,yt,vt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,vt[tt].width,vt[tt].height,0,It,yt,vt[tt].data);for(let pt=0;pt<j.length;pt++){const zt=j[pt].image[tt].image;Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,zt.width,zt.height,It,yt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,$t,zt.width,zt.height,0,It,yt,zt.data)}}else{Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,yt,vt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,It,yt,vt[tt]);for(let pt=0;pt<j.length;pt++){const ft=j[pt];Ht?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,It,yt,ft.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,$t,It,yt,ft.image[tt])}}}d(E)&&p(n.TEXTURE_CUBE_MAP),K.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _t(P,E,H,Q,et,K){const Tt=s.convert(H.format,H.colorSpace),ut=s.convert(H.type),gt=v(H.internalFormat,Tt,ut,H.colorSpace),Yt=i.get(E),st=i.get(H);if(st.__renderTarget=E,!Yt.__hasExternalTextures){const vt=Math.max(1,E.width>>K),Dt=Math.max(1,E.height>>K);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,K,gt,vt,Dt,E.depth,0,Tt,ut,null):e.texImage2D(et,K,gt,vt,Dt,0,Tt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),Lt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,st.__webglTexture,0,At(E)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,st.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(P,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,K=x(E.stencilBuffer,et),Tt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=At(E);Lt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,K,E.width,E.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,P)}else{const Q=E.textures;for(let et=0;et<Q.length;et++){const K=Q[et],Tt=s.convert(K.format,K.colorSpace),ut=s.convert(K.type),gt=v(K.internalFormat,Tt,ut,K.colorSpace),Yt=At(E);H&&Lt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,gt,E.width,E.height):Lt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,gt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,gt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const et=Q.__webglTexture,K=At(E);if(E.depthTexture.format===br)Lt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(E.depthTexture.format===Ir)Lt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Nt(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),at(E.__webglDepthbuffer[Q],P,!1);else{const et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(P,E,H){const Q=i.get(P);E!==void 0&&_t(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Nt(P)}function qt(P){const E=P.texture,H=i.get(P),Q=i.get(E);P.addEventListener("dispose",T);const et=P.textures,K=P.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let gt=0;gt<E.mipmaps.length;gt++)H.__webglFramebuffer[ut][gt]=n.createFramebuffer()}else H.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)H.__webglFramebuffer[ut]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ut=0,gt=et.length;ut<gt;ut++){const Yt=i.get(et[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Lt(P)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){const gt=et[ut];H.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Yt=s.convert(gt.format,gt.colorSpace),st=s.convert(gt.type),vt=v(gt.internalFormat,Yt,st,gt.colorSpace,P.isXRRenderTarget===!0),Dt=At(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,vt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),at(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),rt(n.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)_t(H.__webglFramebuffer[ut][gt],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else _t(H.__webglFramebuffer[ut],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);d(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,gt=et.length;ut<gt;ut++){const Yt=et[ut],st=i.get(Yt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),rt(n.TEXTURE_2D,Yt),_t(H.__webglFramebuffer,P,Yt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),d(Yt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),rt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let gt=0;gt<E.mipmaps.length;gt++)_t(H.__webglFramebuffer[gt],P,E,n.COLOR_ATTACHMENT0,ut,gt);else _t(H.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ut,0);d(E)&&p(ut),e.unbindTexture()}P.depthBuffer&&Nt(P)}function nt(P){const E=P.textures;for(let H=0,Q=E.length;H<Q;H++){const et=E[H];if(d(et)){const K=y(P),Tt=i.get(et).__webglTexture;e.bindTexture(K,Tt),p(K),e.unbindTexture()}}}const ct=[],U=[];function kt(P){if(P.samples>0){if(Lt(P)===!1){const E=P.textures,H=P.width,Q=P.height;let et=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(P),ut=E.length>1;if(ut)for(let gt=0;gt<E.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const Yt=i.get(E[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,et,n.NEAREST),l===!0&&(ct.length=0,U.length=0,ct.push(n.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(K),U.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<E.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[gt]);const Yt=i.get(E[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function At(P){return Math.min(r.maxSamples,P.samples)}function Lt(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function he(P,E){const H=P.colorSpace,Q=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==$i&&H!==Ke&&(Zt.getTransfer(H)===oe?(Q!==_n||et!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Vt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Lt}function z_(n,t){function e(i,r=Ke){let s;const o=Zt.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return n.BYTE;if(i===gu)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===_s)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===yu)return n.RGB;if(i===_n)return n.RGBA;if(i===xu)return n.LUMINANCE;if(i===Mu)return n.LUMINANCE_ALPHA;if(i===br)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Su)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===bu)return n.RG;if(i===Bl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===lo||i===co||i===ho||i===uo)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===$a)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ya||i===ja||i===Za)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ya||i===ja)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Za)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===hl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ka)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===ul||i===fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===fo)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tu||i===dl||i===pl||i===ml)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===fo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class B_ extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ns extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
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

}`;class W_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Dn({vertexShader:G_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new on(new Do(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X_ extends kr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=new W_,d=e.getContextAttributes();let p=null,y=null;const v=[],x=[],R=new ee;let b=null;const T=new sn;T.viewport=new Me;const C=new sn;C.viewport=new Me;const S=[T,C],M=new B_;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=v[Y];return it===void 0&&(it=new _a,v[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=v[Y];return it===void 0&&(it=new _a,v[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=v[Y];return it===void 0&&(it=new _a,v[Y]=it),it.getHandSpace()};function I(Y){const it=x.indexOf(Y.inputSource);if(it===-1)return;const _t=v[it];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){const it=x[Y];it!==null&&(x[Y]=null,v[Y].disconnect(it))}A=null,D=null,_.reset(),t.setRenderTarget(p),m=null,f=null,u=null,r=null,y=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",N),r.addEventListener("inputsourceschange",L),d.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const it={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new yi(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let it=null,_t=null,at=null;d.depth&&(at=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=d.stencil?Ir:br,_t=d.stencil?Lr:Wi);const Pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(Pt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new yi(f.textureWidth,f.textureHeight,{format:_n,type:Jn,depthTexture:new Bu(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function L(Y){for(let it=0;it<Y.removed.length;it++){const _t=Y.removed[it],at=x.indexOf(_t);at>=0&&(x[at]=null,v[at].disconnect(_t))}for(let it=0;it<Y.added.length;it++){const _t=Y.added[it];let at=x.indexOf(_t);if(at===-1){for(let Nt=0;Nt<v.length;Nt++)if(Nt>=x.length){x.push(_t),at=Nt;break}else if(x[Nt]===null){x[Nt]=_t,at=Nt;break}if(at===-1)break}const Pt=v[at];Pt&&Pt.connect(_t)}}const B=new X,q=new X;function G(Y,it,_t){B.setFromMatrixPosition(it.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const at=B.distanceTo(q),Pt=it.projectionMatrix.elements,Nt=_t.projectionMatrix.elements,Vt=Pt[14]/(Pt[10]-1),qt=Pt[14]/(Pt[10]+1),nt=(Pt[9]+1)/Pt[5],ct=(Pt[9]-1)/Pt[5],U=(Pt[8]-1)/Pt[0],kt=(Nt[8]+1)/Nt[0],At=Vt*U,Lt=Vt*kt,Rt=at/(-U+kt),he=Rt*-U;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Ct=Vt+Rt,P=qt+Rt,E=At-he,H=Lt+(at-he),Q=nt*qt/P*Ct,et=ct*qt/P*Ct;Y.projectionMatrix.makePerspective(E,H,Q,et,Ct,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function z(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let it=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=C.near=T.near=it,M.far=C.far=T.far=_t,(A!==M.near||D!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,D=M.far),T.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const at=Y.parent,Pt=M.cameras;z(M,at);for(let Nt=0;Nt<Pt.length;Nt++)z(Pt[Nt],at);Pt.length===2?G(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),$(Y,M,at)};function $(Y,it,_t){_t===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Z=null;function rt(Y,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const _t=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let at=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Nt=0;Nt<_t.length;Nt++){const Vt=_t[Nt];let qt=null;if(m!==null)qt=m.getViewport(Vt);else{const ct=u.getViewSubImage(f,Vt);qt=ct.viewport,Nt===0&&(t.setRenderTargetTextures(y,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(y))}let nt=S[Nt];nt===void 0&&(nt=new sn,nt.layers.enable(Nt),nt.viewport=new Me,S[Nt]=nt),nt.matrix.fromArray(Vt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Vt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(qt.x,qt.y,qt.width,qt.height),Nt===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(nt)}const Pt=r.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Nt=u.getDepthInformation(_t[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,r.renderState)}}for(let _t=0;_t<v.length;_t++){const at=x[_t],Pt=v[_t];at!==null&&Pt!==void 0&&Pt.update(at,it,c||o)}Z&&Z(Y,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const xt=new Ou;xt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){Z=Y},this.dispose=function(){}}}const Pi=new Qn,q_=new ge;function $_(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Uu(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,x)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?l(d,p,y,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===$e&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===$e&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(d.envMap.value=v,Pi.copy(x),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),d.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Pi)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",d));const R=v.program;i.updateUBOMapping(y,R);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function h(y){const v=u();y.__bindingPointIndex=v;const x=n.createBuffer(),R=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,T=x.length;b<T;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=C.length;S<M;S++){const A=C[S];if(m(A,b,S,R)===!0){const D=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let L=0;L<I.length;L++){const B=I[L],q=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,D+N,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,x,R){const b=y.value,T=v+"_"+x;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:R[T]=b.clone(),!0;{const C=R[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return R[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const R=16;for(let T=0,C=v.length;T<C;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,A=S.length;M<A;M++){const D=S[M],I=Array.isArray(D.value)?D.value:[D.value];for(let N=0,L=I.length;N<L;N++){const B=I[N],q=_(B),G=x%R,z=G%q.boundary,$=G+z;x+=z,$!==0&&R-$<q.storage&&(x+=R-$),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=q.storage}}}const b=x%R;return b>0&&(x+=R-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class j_{constructor(t={}){const{canvas:e=kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=_i,this.toneMappingExposure=1;const x=this;let R=!1,b=0,T=0,C=null,S=-1,M=null;const A=new Me,D=new Me;let I=null;const N=new te(0);let L=0,B=e.width,q=e.height,G=1,z=null,$=null;const Z=new Me(0,0,B,q),rt=new Me(0,0,B,q);let xt=!1;const Y=new ku;let it=!1,_t=!1;const at=new ge,Pt=new ge,Nt=new X,Vt=new Me,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ct(){return C===null?G:1}let U=i;function kt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),U===null){const k="webgl2";if(U=kt(k,w),U===null)throw kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let At,Lt,Rt,he,Ct,P,E,H,Q,et,K,Tt,ut,gt,Yt,st,vt,Dt,It,yt,$t,Ht,le,F;function ht(){At=new tg(U),At.init(),Ht=new z_(U,At),Lt=new Ym(U,At,t,Ht),Rt=new F_(U,At),Lt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),he=new ig(U),Ct=new M_,P=new O_(U,At,Rt,Ct,Lt,Ht,he),E=new Zm(x),H=new Qm(x),Q=new h0(U),le=new qm(U,Q),et=new eg(U,Q,he,le),K=new sg(U,et,Q,he),It=new rg(U,Lt,P),st=new jm(Ct),Tt=new x_(x,E,H,At,Lt,le,st),ut=new $_(x,Ct),gt=new b_,Yt=new C_(At),Dt=new Xm(x,E,H,Rt,K,m,l),vt=new U_(x,K,Lt),F=new Y_(U,he,Lt,Rt),yt=new $m(U,At,he),$t=new ng(U,At,he),he.programs=Tt.programs,x.capabilities=Lt,x.extensions=At,x.properties=Ct,x.renderLists=gt,x.shadowMap=vt,x.state=Rt,x.info=he}ht();const j=new X_(x,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(B,q,!1))},this.getSize=function(w){return w.set(B,q)},this.setSize=function(w,k,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,q=k,e.width=Math.floor(w*G),e.height=Math.floor(k*G),V===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(B*G,q*G).floor()},this.setDrawingBufferSize=function(w,k,V){B=w,q=k,G=V,e.width=Math.floor(w*V),e.height=Math.floor(k*V),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,k,V,W){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,k,V,W),Rt.viewport(A.copy(Z).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,k,V,W){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,k,V,W),Rt.scissor(D.copy(rt).multiplyScalar(G).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Rt.setScissorTest(xt=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,k=!0,V=!0){let W=0;if(w){let O=!1;if(C!==null){const ot=C.texture.format;O=ot===Hl||ot===Bl||ot===zl}if(O){const ot=C.texture.type,dt=ot===Jn||ot===Wi||ot===us||ot===Lr||ot===kl||ot===Ol,Mt=Dt.getClearColor(),St=Dt.getClearAlpha(),Ft=Mt.r,Bt=Mt.g,bt=Mt.b;dt?(g[0]=Ft,g[1]=Bt,g[2]=bt,g[3]=St,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ft,_[1]=Bt,_[2]=bt,_[3]=St,U.clearBufferiv(U.COLOR,0,_))}else W|=U.COLOR_BUFFER_BIT}k&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),Yt.dispose(),Ct.dispose(),E.dispose(),H.dispose(),K.dispose(),le.dispose(),F.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",oc),j.removeEventListener("sessionend",ac),Ti.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=he.autoReset,k=vt.enabled,V=vt.autoUpdate,W=vt.needsUpdate,O=vt.type;ht(),he.autoReset=w,vt.enabled=k,vt.autoUpdate=V,vt.needsUpdate=W,vt.type=O}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zt(w){const k=w.target;k.removeEventListener("dispose",zt),ve(k)}function ve(w){Ue(w),Ct.remove(w)}function Ue(w){const k=Ct.get(w).programs;k!==void 0&&(k.forEach(function(V){Tt.releaseProgram(V)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,V,W,O,ot){k===null&&(k=qt);const dt=O.isMesh&&O.matrixWorld.determinant()<0,Mt=Xf(w,k,V,W,O);Rt.setMaterial(W,dt);let St=V.index,Ft=1;if(W.wireframe===!0){if(St=et.getWireframeAttribute(V),St===void 0)return;Ft=2}const Bt=V.drawRange,bt=V.attributes.position;let Qt=Bt.start*Ft,ce=(Bt.start+Bt.count)*Ft;ot!==null&&(Qt=Math.max(Qt,ot.start*Ft),ce=Math.min(ce,(ot.start+ot.count)*Ft)),St!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,St.count)):bt!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,bt.count));const ue=ce-Qt;if(ue<0||ue===1/0)return;le.setup(O,W,Mt,V,St);let Ge,ne=yt;if(St!==null&&(Ge=Q.get(St),ne=$t,ne.setIndex(Ge)),O.isMesh)W.wireframe===!0?(Rt.setLineWidth(W.wireframeLinewidth*ct()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(O.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*ct()),O.isLineSegments?ne.setMode(U.LINES):O.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else O.isPoints?ne.setMode(U.POINTS):O.isSprite&&ne.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Et=O._multiDrawStarts,Un=O._multiDrawCounts,ie=O._multiDrawCount,ln=St?Q.get(St).bytesPerElement:1,ji=Ct.get(W).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)ji.setValue(U,"_gl_DrawID",Ye),ne.render(Et[Ye]/ln,Un[Ye])}else if(O.isInstancedMesh)ne.renderInstances(Qt,ue,O.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Un=Math.min(V.instanceCount,Et);ne.renderInstances(Qt,ue,Un)}else ne.render(Qt,ue)};function re(w,k,V){w.transparent===!0&&w.side===Cn&&w.forceSinglePass===!1?(w.side=$e,w.needsUpdate=!0,Es(w,k,V),w.side=Kn,w.needsUpdate=!0,Es(w,k,V),w.side=Cn):Es(w,k,V)}this.compile=function(w,k,V=null){V===null&&(V=w),p=Yt.get(V),p.init(k),v.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const Mt=ot[dt];re(Mt,V,O),W.add(Mt)}else re(ot,V,O),W.add(ot)}),v.pop(),p=null,W},this.compileAsync=function(w,k,V=null){const W=this.compile(w,k,V);return new Promise(O=>{function ot(){if(W.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&W.delete(dt)}),W.size===0){O(w);return}setTimeout(ot,10)}At.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let an=null;function In(w){an&&an(w)}function oc(){Ti.stop()}function ac(){Ti.start()}const Ti=new Ou;Ti.setAnimationLoop(In),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){an=w,j.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},j.addEventListener("sessionstart",oc),j.addEventListener("sessionend",ac),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,C),p=Yt.get(w,v.length),p.init(k),v.push(p),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Pt),_t=this.localClippingEnabled,it=st.init(this.clippingPlanes,_t),d=gt.get(w,y.length),d.init(),y.push(d),j.enabled===!0&&j.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&Ho(ot,k,-1/0,x.sortObjects)}Ho(w,k,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(z,$),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&Dt.addToRenderList(d,w),this.info.render.frame++,it===!0&&st.beginShadows();const V=p.state.shadowsArray;vt.render(V,w,k),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=d.opaque,O=d.transmissive;if(p.setupLights(),k.isArrayCamera){const ot=k.cameras;if(O.length>0)for(let dt=0,Mt=ot.length;dt<Mt;dt++){const St=ot[dt];cc(W,O,w,St)}nt&&Dt.render(w);for(let dt=0,Mt=ot.length;dt<Mt;dt++){const St=ot[dt];lc(d,w,St,St.viewport)}}else O.length>0&&cc(W,O,w,k),nt&&Dt.render(w),lc(d,w,k);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,k),le.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],it===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function Ho(w,k,V,W){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){W&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const dt=K.update(w),Mt=w.material;Mt.visible&&d.push(w,dt,Mt,V,Vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const dt=K.update(w),Mt=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Vt.copy(dt.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Mt)){const St=dt.groups;for(let Ft=0,Bt=St.length;Ft<Bt;Ft++){const bt=St[Ft],Qt=Mt[bt.materialIndex];Qt&&Qt.visible&&d.push(w,dt,Qt,V,Vt.z,bt)}}else Mt.visible&&d.push(w,dt,Mt,V,Vt.z,null)}}const ot=w.children;for(let dt=0,Mt=ot.length;dt<Mt;dt++)Ho(ot[dt],k,V,W)}function lc(w,k,V,W){const O=w.opaque,ot=w.transmissive,dt=w.transparent;p.setupLightsView(V),it===!0&&st.setGlobalState(x.clippingPlanes,V),W&&Rt.viewport(A.copy(W)),O.length>0&&Ts(O,k,V),ot.length>0&&Ts(ot,k,V),dt.length>0&&Ts(dt,k,V),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function cc(w,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new yi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?_s:Jn,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[W.id],dt=W.viewport||A;ot.setSize(dt.z,dt.w);const Mt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(N),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Dt.render(V);const St=x.toneMapping;x.toneMapping=_i;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),it===!0&&st.setGlobalState(x.clippingPlanes,W),Ts(w,V,W),P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot),At.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let bt=0,Qt=k.length;bt<Qt;bt++){const ce=k[bt],ue=ce.object,Ge=ce.geometry,ne=ce.material,Et=ce.group;if(ne.side===Cn&&ue.layers.test(W.layers)){const Un=ne.side;ne.side=$e,ne.needsUpdate=!0,hc(ue,V,W,Ge,ne,Et),ne.side=Un,ne.needsUpdate=!0,Bt=!0}}Bt===!0&&(P.updateMultisampleRenderTarget(ot),P.updateRenderTargetMipmap(ot))}x.setRenderTarget(Mt),x.setClearColor(N,L),Ft!==void 0&&(W.viewport=Ft),x.toneMapping=St}function Ts(w,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const dt=w[O],Mt=dt.object,St=dt.geometry,Ft=W===null?dt.material:W,Bt=dt.group;Mt.layers.test(V.layers)&&hc(Mt,k,V,St,Ft,Bt)}}function hc(w,k,V,W,O,ot){w.onBeforeRender(x,k,V,W,O,ot),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,k,V,W,w,ot),O.transparent===!0&&O.side===Cn&&O.forceSinglePass===!1?(O.side=$e,O.needsUpdate=!0,x.renderBufferDirect(V,k,W,O,w,ot),O.side=Kn,O.needsUpdate=!0,x.renderBufferDirect(V,k,W,O,w,ot),O.side=Cn):x.renderBufferDirect(V,k,W,O,w,ot),w.onAfterRender(x,k,V,W,O,ot)}function Es(w,k,V){k.isScene!==!0&&(k=qt);const W=Ct.get(w),O=p.state.lights,ot=p.state.shadowsArray,dt=O.state.version,Mt=Tt.getParameters(w,O.state,ot,k,V),St=Tt.getProgramCacheKey(Mt);let Ft=W.programs;W.environment=w.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",zt),Ft=new Map,W.programs=Ft);let Bt=Ft.get(St);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===dt)return fc(w,Mt),Bt}else Mt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Mt,x),Bt=Tt.acquireProgram(Mt,St),Ft.set(St,Bt),W.uniforms=Mt.uniforms;const bt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=st.uniform),fc(w,Mt),W.needsLights=$f(w),W.lightsStateVersion=dt,W.needsLights&&(bt.ambientLightColor.value=O.state.ambient,bt.lightProbe.value=O.state.probe,bt.directionalLights.value=O.state.directional,bt.directionalLightShadows.value=O.state.directionalShadow,bt.spotLights.value=O.state.spot,bt.spotLightShadows.value=O.state.spotShadow,bt.rectAreaLights.value=O.state.rectArea,bt.ltc_1.value=O.state.rectAreaLTC1,bt.ltc_2.value=O.state.rectAreaLTC2,bt.pointLights.value=O.state.point,bt.pointLightShadows.value=O.state.pointShadow,bt.hemisphereLights.value=O.state.hemi,bt.directionalShadowMap.value=O.state.directionalShadowMap,bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,bt.spotShadowMap.value=O.state.spotShadowMap,bt.spotLightMatrix.value=O.state.spotLightMatrix,bt.spotLightMap.value=O.state.spotLightMap,bt.pointShadowMap.value=O.state.pointShadowMap,bt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Bt,W.uniformsList=null,Bt}function uc(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function fc(w,k){const V=Ct.get(w);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Xf(w,k,V,W,O){k.isScene!==!0&&(k=qt),P.resetTextureUnits();const ot=k.fog,dt=W.isMeshStandardMaterial?k.environment:null,Mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$i,St=(W.isMeshStandardMaterial?H:E).get(W.envMap||dt),Ft=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Bt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ce=!!V.morphAttributes.color;let ue=_i;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ue=x.toneMapping);const Ge=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,Et=Ct.get(W),Un=p.state.lights;if(it===!0&&(_t===!0||w!==M)){const Qe=w===M&&W.id===S;st.setState(W,w,Qe)}let ie=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Un.state.version||Et.outputColorSpace!==Mt||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==St||W.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==Ft||Et.vertexTangents!==Bt||Et.morphTargets!==bt||Et.morphNormals!==Qt||Et.morphColors!==ce||Et.toneMapping!==ue||Et.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Et.__version=W.version);let ln=Et.currentProgram;ie===!0&&(ln=Es(W,k,O));let ji=!1,Ye=!1,zr=!1;const fe=ln.getUniforms(),xn=Et.uniforms;if(Rt.useProgram(ln.program)&&(ji=!0,Ye=!0,zr=!0),W.id!==S&&(S=W.id,Ye=!0),ji||M!==w){Rt.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),zd(at),Bd(at),fe.setValue(U,"projectionMatrix",at)):fe.setValue(U,"projectionMatrix",w.projectionMatrix),fe.setValue(U,"viewMatrix",w.matrixWorldInverse);const ni=fe.map.cameraPosition;ni!==void 0&&ni.setValue(U,Nt.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ye=!0,zr=!0)}if(O.isSkinnedMesh){fe.setOptional(U,O,"bindMatrix"),fe.setOptional(U,O,"bindMatrixInverse");const Qe=O.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),fe.setValue(U,"boneTexture",Qe.boneTexture,P))}O.isBatchedMesh&&(fe.setOptional(U,O,"batchingTexture"),fe.setValue(U,"batchingTexture",O._matricesTexture,P),fe.setOptional(U,O,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",O._indirectTexture,P),fe.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",O._colorsTexture,P));const Br=V.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&It.update(O,V,ln),(Ye||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,fe.setValue(U,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xn.envMap.value=St,xn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),Ye&&(fe.setValue(U,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&qf(xn,zr),ot&&W.fog===!0&&ut.refreshFogUniforms(xn,ot),ut.refreshMaterialUniforms(xn,W,G,q,p.state.transmissionRenderTarget[w.id]),po.upload(U,uc(Et),xn,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(po.upload(U,uc(Et),xn,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(U,"center",O.center),fe.setValue(U,"modelViewMatrix",O.modelViewMatrix),fe.setValue(U,"normalMatrix",O.normalMatrix),fe.setValue(U,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Qe=W.uniformsGroups;for(let ni=0,ii=Qe.length;ni<ii;ni++){const dc=Qe[ni];F.update(dc,ln),F.bind(dc,ln)}}return ln}function qf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function $f(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,k,V){Ct.get(w.texture).__webglTexture=k,Ct.get(w.depthTexture).__webglTexture=V;const W=Ct.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const V=Ct.get(w);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,V=0){C=w,b=k,T=V;let W=!0,O=null,ot=!1,dt=!1;if(w){const St=Ct.get(w);if(St.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(St.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(St.__hasExternalTextures)P.rebindTextures(w,Ct.get(w.texture).__webglTexture,Ct.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const bt=w.depthTexture;if(St.__boundDepthTexture!==bt){if(bt!==null&&Ct.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const Bt=Ct.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Bt[k])?O=Bt[k][V]:O=Bt[k],ot=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?O=Ct.get(w).__webglMultisampledFramebuffer:Array.isArray(Bt)?O=Bt[V]:O=Bt,A.copy(w.viewport),D.copy(w.scissor),I=w.scissorTest}else A.copy(Z).multiplyScalar(G).floor(),D.copy(rt).multiplyScalar(G).floor(),I=xt;if(Rt.bindFramebuffer(U.FRAMEBUFFER,O)&&W&&Rt.drawBuffers(w,O),Rt.viewport(A),Rt.scissor(D),Rt.setScissorTest(I),ot){const St=Ct.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,V)}else if(dt){const St=Ct.get(w.texture),Ft=k||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,V||0,Ft)}S=-1},this.readRenderTargetPixels=function(w,k,V,W,O,ot,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Rt.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const St=w.texture,Ft=St.format,Bt=St.type;if(!Lt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-W&&V>=0&&V<=w.height-O&&U.readPixels(k,V,W,O,Ht.convert(Ft),Ht.convert(Bt),ot)}finally{const St=C!==null?Ct.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(w,k,V,W,O,ot,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=w.texture,Ft=St.format,Bt=St.type;if(!Lt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-W&&V>=0&&V<=w.height-O){Rt.bindFramebuffer(U.FRAMEBUFFER,Mt);const bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,ot.byteLength,U.STREAM_READ),U.readPixels(k,V,W,O,Ht.convert(Ft),Ht.convert(Bt),0);const Qt=C!==null?Ct.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(U.FRAMEBUFFER,Qt);const ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Od(U,ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ot),U.deleteBuffer(bt),U.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,V=0){w.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(w.image.width*W),ot=Math.floor(w.image.height*W),dt=k!==null?k.x:0,Mt=k!==null?k.y:0;P.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,dt,Mt,O,ot),Rt.unbindTexture()},this.copyTextureToTexture=function(w,k,V=null,W=null,O=0){w.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],k=arguments[2],O=arguments[3]||0,V=null);let ot,dt,Mt,St,Ft,Bt,bt,Qt,ce;const ue=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ot=V.max.x-V.min.x,dt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,St=V.min.x,Ft=V.min.y,Bt=V.isBox3?V.min.z:0):(ot=ue.width,dt=ue.height,Mt=ue.depth||1,St=0,Ft=0,Bt=0),W!==null?(bt=W.x,Qt=W.y,ce=W.z):(bt=0,Qt=0,ce=0);const Ge=Ht.convert(k.format),ne=Ht.convert(k.type);let Et;k.isData3DTexture?(P.setTexture3D(k,0),Et=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Et=U.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Un=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),ji=U.getParameter(U.UNPACK_SKIP_ROWS),Ye=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);const zr=w.isDataArrayTexture||w.isData3DTexture,fe=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const xn=Ct.get(w),Br=Ct.get(k),Qe=Ct.get(xn.__renderTarget),ni=Ct.get(Br.__renderTarget);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Mt;ii++)zr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(w).__webglTexture,O,Bt+ii),w.isDepthTexture?(fe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(k).__webglTexture,O,ce+ii),U.blitFramebuffer(St,Ft,ot,dt,bt,Qt,ot,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):fe?U.copyTexSubImage3D(Et,O,bt,Qt,ce+ii,St,Ft,ot,dt):U.copyTexSubImage2D(Et,O,bt,Qt,ce+ii,St,Ft,ot,dt);Rt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Et,O,bt,Qt,ce,ot,dt,Mt,Ge,ne,ue.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,O,bt,Qt,ce,ot,dt,Mt,Ge,ue.data):U.texSubImage3D(Et,O,bt,Qt,ce,ot,dt,Mt,Ge,ne,ue):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,bt,Qt,ot,dt,Ge,ne,ue.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,bt,Qt,ue.width,ue.height,Ge,ue.data):U.texSubImage2D(U.TEXTURE_2D,O,bt,Qt,ot,dt,Ge,ne,ue);U.pixelStorei(U.UNPACK_ROW_LENGTH,Un),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,ji),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye),O===0&&k.generateMipmaps&&U.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,V=null,W=null,O=0){return w.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],k=arguments[3],O=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,V,W,O)},this.initRenderTarget=function(w){Ct.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,Rt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class Xu extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Io extends Be{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Z_={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=qu(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,m;if(i&&(s=ev(n,t,s,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let g=e;g<r;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return fs(s,o,e,a,l,m,0),o}};function qu(n,t,e,i,r){let s,o;if(r===fv(n,t,e,i)>0)for(s=t;s<e;s+=i)o=fh(s,n[s],n[s+1],o);else for(s=e-i;s>=t;s-=i)o=fh(s,n[s],n[s+1],o);return o&&Uo(o,o.next)&&(ps(o),o=o.next),o}function Xi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Uo(e,e.next)||me(e.prev,e,e.next)===0)){if(ps(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fs(n,t,e,i,r,s,o){if(!n)return;!o&&s&&ov(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?J_(n,i,r,s):K_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),ps(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Q_(Xi(n),t,e),fs(n,t,e,i,r,s,2)):o===2&&tv(n,t,e,i,r,s):fs(Xi(n),t,e,i,r,s,1);break}}}function K_(n){const t=n.prev,e=n,i=n.next;if(me(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=r<s?r<o?r:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&yr(r,a,s,l,o,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J_(n,t,e,i){const r=n.prev,s=n,o=n.next;if(me(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,p=vl(m,g,t,e,i),y=vl(_,d,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&yr(a,h,l,u,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==o&&yr(a,h,l,u,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==o&&yr(a,h,l,u,c,f,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==o&&yr(a,h,l,u,c,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Q_(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Uo(r,s)&&$u(r,i,i.next,s)&&ds(r,s)&&ds(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),ps(i),ps(i.next),i=n=s),i=i.next}while(i!==n);return Xi(i)}function tv(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cv(o,a)){let l=Yu(o,a);o=Xi(o,o.next),l=Xi(l,l.next),fs(o,t,e,i,r,s,0),fs(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ev(n,t,e,i){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=qu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(lv(c));for(r.sort(nv),s=0;s<r.length;s++)e=iv(r[s],e);return e}function nv(n,t){return n.x-t.x}function iv(n,t){const e=rv(n,t);if(!e)return t;const i=Yu(e,n);return Xi(i,i.next),Xi(e,e.next)}function rv(n,t){let e=t,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&yr(o<c?s:i,o,l,c,o<c?i:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),ds(e,n)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&sv(r,e)))&&(r=e,h=u)),e=e.next;while(e!==a);return r}function sv(n,t){return me(n.prev,n,t.prev)<0&&me(t.next,n,n.next)<0}function ov(n,t,e,i){let r=n;do r.z===0&&(r.z=vl(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,av(r)}function av(n){let t,e,i,r,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(o>1);return n}function vl(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function lv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function yr(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function cv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!hv(n,t)&&(ds(n,t)&&ds(t,n)&&uv(n,t)&&(me(n.prev,n,t.prev)||me(n,t.prev,t))||Uo(n,t)&&me(n.prev,n,n.next)>0&&me(t.prev,t,t.next)>0)}function me(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Uo(n,t){return n.x===t.x&&n.y===t.y}function $u(n,t,e,i){const r=Ys(me(n,t,e)),s=Ys(me(n,t,i)),o=Ys(me(e,i,n)),a=Ys(me(e,i,t));return!!(r!==s&&o!==a||r===0&&$s(n,e,t)||s===0&&$s(n,i,t)||o===0&&$s(e,n,i)||a===0&&$s(e,t,i))}function $s(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ys(n){return n>0?1:n<0?-1:0}function hv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&$u(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ds(n,t){return me(n.prev,n,n.next)<0?me(n,t,n.next)>=0&&me(n,n.prev,t)>=0:me(n,t,n.prev)<0||me(n,n.next,t)<0}function uv(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Yu(n,t){const e=new yl(n.i,n.x,n.y),i=new yl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function fh(n,t,e,i){const r=new yl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ps(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fv(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Xl{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Xl.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];dh(t),ph(i,t);let o=t.length;e.forEach(dh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,ph(i,e[l]);const a=Z_.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function dh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function ph(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const mh=new ge;class dv{constructor(t,e,i=0,r=1/0){this.ray=new Cu(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(t,e=!0,i=[]){return xl(t,this,i,e),i.sort(gh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)xl(t[r],this,i,e);return i.sort(gh),i}}function gh(n,t){return n.distance-t.distance}function xl(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)xl(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function He(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function Er(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Se{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const r of t)e+=Math.max(0,r[1]);let i=this.next()*e;for(const r of t)if(i-=Math.max(0,r[1]),i<=0)return r[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const r=Math.floor(this.next()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}fork(t=0){return new Se(He(Math.floor(this.next()*4294967296),t))}}const ze=(n,t,e)=>n<t?t:n>e?e:n,pv=(n,t,e)=>n+(t-n)*e,_h=(n,t,e)=>{const i=ze((e-n)/(t-n),0,1);return i*i*(3-2*i)},zi=(n,t,e,i)=>pv(n,t,1-Math.exp(-e*i)),va=Math.PI*2;function mv(n,t){let e=(t-n)%va;return e>Math.PI&&(e-=va),e<-Math.PI&&(e+=va),e}function we(n,t=0){const e=Math.floor(n),i=n-e,r=He(e,t)/2147483648-1,s=He(e+1,t)/2147483648-1,o=i*i*(3-2*i);return r+(s-r)*o}const _e="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",De="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",wr="'VT323', 'Courier New', monospace",xr="'Patrick Hand', 'Segoe Print', 'Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive";function Ln(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function gv(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'","400 32px 'Patrick Hand'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function ql(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const r=new Io(n);return r.colorSpace=Ke,r.wrapS=t?hs:qn,r.wrapT=e?hs:qn,r.generateMipmaps=i,r.minFilter=i?pi:Le,r.magFilter=Le,r.anisotropy=2,r.needsUpdate=!0,r}function _v(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function $l(n,t){const[e,i,r]=_v(n),s=o=>Math.max(0,Math.min(255,Math.round(t>=0?o+(255-o)*t:o*(1+t))));return`rgb(${s(e)},${s(i)},${s(r)})`}function xi(n,t,e,i,r,s=1,o=1,a=!0){const l=new Se(s);n.save(),n.beginPath(),n.rect(t,e,i,r),n.clip();const c=Math.floor(i*r/900*o);for(let h=0;h<c;h++){const u=l.range(.02,.09)*o;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${u})`:`rgba(255,255,240,${u*.6})`;const f=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,r),f,f*l.range(.5,a?3:1.4))}for(let h=0;a&&h<Math.floor(i/90*o);h++){const u=t+l.range(0,i),f=e+l.range(0,r*.7),m=l.range(r*.05,r*.35),g=n.createLinearGradient(0,f,0,f+m);g.addColorStop(0,`rgba(40,30,15,${.1*o})`),g.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=g,n.fillRect(u,f,l.range(2,7),m)}n.restore()}function Ie(n,t,e,i,r=_e,s=400){let o=i;n.font=`${s} ${o}px ${r}`;const a=n.measureText(t).width;return a>e&&(o=Math.max(6,Math.floor(o*e/a)),n.font=`${s} ${o}px ${r}`),o}function Mi(n,t,e){const i=[];for(const r of String(t).split(`
`)){let s="";for(const o of r.split(" ")){const a=s?`${s} ${o}`:o;n.measureText(a).width>e&&s?(i.push(s),s=o):s=a}i.push(s)}return i}function Ml(n,t,e,i,r,s){const o={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[r]??0;n.save(),n.translate(t,e),n.rotate(o),n.strokeStyle=s,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const Kt={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},Vi={ring:"#dc241f",bar:"#0019a8",text:"#ffffff",panel:"#fbfaf4"},vn={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},vv=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function No(n,t,e,i,r={}){let s=r.ring||Vi.ring,o=r.bar||Vi.bar;const a=r.defect||null;a==="swap"&&([s,o]=[o,s]);const l=i*.56,c=i*1.26,h=i*.815,u=i*.37;if(n.save(),n.translate(t,e),a==="tilt"&&n.rotate(-.07),n.strokeStyle=s,n.lineWidth=u,n.lineCap="butt",a==="solid")n.fillStyle=s,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill();else if(a==="gap")for(const[m,g]of[[-Math.PI*.86,-Math.PI*.2],[-Math.PI*.08,Math.PI*1.02]])n.beginPath(),n.arc(0,0,h,m,g),n.stroke();else n.beginPath(),n.arc(0,0,h,0,Math.PI*2),n.stroke();if(a==="double"&&(n.lineWidth=u*.32,n.beginPath(),n.arc(0,0,h*.5,0,Math.PI*2),n.stroke()),r.frame){n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.03);for(const m of[i,i*.63])n.beginPath(),n.arc(0,0,m,0,Math.PI*2),n.stroke()}const f=a==="low"?i*.22:0;if(n.fillStyle=o,n.fillRect(-c,f-l/2,c*2,l),r.frame&&(n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.035),n.strokeRect(-c,f-l/2,c*2,l)),r.name){const m=String(r.name).toUpperCase();n.fillStyle=r.text||Vi.text,n.textAlign="center",n.textBaseline="middle";const g=l*.78;try{n.letterSpacing=`${(g*.05).toFixed(1)}px`}catch{}Ie(n,m,c*2-l*.5,g,_e),a==="mirror"&&n.scale(-1,1),n.fillText(m,0,f+l*.05);try{n.letterSpacing="0px"}catch{}}n.restore()}function Fo(n,t,e,i,r={}){n.fillStyle=Vi.panel,n.fillRect(0,0,t,e);const s=Math.max(2,Math.min(t,e)*.035);n.strokeStyle="#6d7275",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const o=Math.min(t*.9/2.52,e*.38);No(n,t/2,e/2,o,{name:i,...r})}const ju=["tilt","double","solid","swap","gap","low","mirror"],We=n=>document.getElementById(n);function vh(n,t){if(!n)return;const e=Ln(360,200);No(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function yv(){const n=We("title"),t=We("pause"),e=We("end"),i=We("touch"),r=We("fade"),s=(a,l)=>a.classList.toggle("hidden",!l);return{drawMarks(){vh(We("title-mark"),"Mind the Gap"),vh(We("end-mark"),"Way out")},showTitle(){s(n,!0),s(t,!1),s(e,!1),s(i,!1)},showPlaying(a){s(n,!1),s(t,!1),s(e,!1),s(i,!!a),r.classList.remove("on")},showPause(){s(t,!0),s(i,!1)},whiteOut(){r.classList.remove("black"),r.classList.add("on")},showEnd(a){const l=We("end-stats");l.replaceChildren();for(const[c,h]of a){const u=document.createElement("dt");u.textContent=c;const f=document.createElement("dd");f.textContent=h,l.append(u,f)}s(e,!0),s(i,!1),s(t,!1),setTimeout(()=>r.classList.remove("on"),400)},onStart(a){We("btn-start").addEventListener("click",a)},onResume(a){We("btn-resume").addEventListener("click",a)},onAgain(a){We("btn-again").addEventListener("click",a)},onVoice(a){const l=We("opt-voice");l.addEventListener("change",()=>a(l.checked))},onHQ(a){const l=We("opt-hq");l.addEventListener("change",()=>a(l.checked))},setLoading(a){const l=We("btn-start");l.disabled=!!a,l.textContent=a?"Loading…":"Press to begin"}}}const xv=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Mv=`
precision highp float;
uniform sampler2D tScene;
uniform sampler2D tOverlay;
uniform vec2 uInRes;     // internal render size (px)
uniform float uTime;
uniform float uTrack;    // tracking error 0..1 (occasional wobble)
uniform float uNoise;    // grain amount
uniform float uFade;     // 0 = normal, 1 = white-out
uniform float uDark;     // 0 = normal, 1 = black
uniform float uZoom;     // digital zoom indicator (adds softness)
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec2 barrel(vec2 uv, float k) {
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  return 0.5 + c * (1.0 + k * r2 + k * 0.6 * r2 * r2);
}

vec3 sampleScene(vec2 uv, float ca) {
  vec2 d = (uv - 0.5) * ca;
  // chroma is smeared sideways (low chroma bandwidth), luma stays sharper
  float px = 1.0 / uInRes.x;
  float r = (texture2D(tScene, uv + d + vec2(px, 0.0)).r + texture2D(tScene, uv + d - vec2(px * 1.5, 0.0)).r) * 0.5;
  float g = texture2D(tScene, uv).g;
  float b = (texture2D(tScene, uv - d - vec2(px, 0.0)).b + texture2D(tScene, uv - d + vec2(px * 1.5, 0.0)).b) * 0.5;
  return vec3(r, g, b);
}

void main() {
  vec2 uv = barrel(vUv, 0.085);
  float line = floor(uv.y * uInRes.y);
  float t = uTime;

  // --- tape transport errors: per-line jitter, a rolling tracking band,
  //     and head-switching noise along the bottom edge
  float jitter = (hash(vec2(line, floor(t * 50.0))) - 0.5) * 0.0012;
  float bandY = fract(t * 0.37);
  float band = smoothstep(0.06, 0.0, abs(uv.y - bandY)) * uTrack;
  float wob = sin(uv.y * 38.0 + t * 21.0) * 0.003 * uTrack + band * (0.022 * sin(t * 97.0 + line * 0.7) + 0.015);
  float headSw = smoothstep(0.035, 0.0, uv.y);
  float hs = headSw * (0.012 + 0.02 * hash(vec2(line, floor(t * 30.0))));
  uv.x += jitter + wob + hs;

  vec3 col = vec3(0.0);
  float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  float ca = 0.012 + 0.03 * band + 0.01 * uZoom;
  col = sampleScene(uv, ca);

  // --- on-screen display, burned in before the tape artefacts
  vec2 od = (uv - 0.5) * 0.004;
  vec4 oG = texture2D(tOverlay, uv);
  float oR = texture2D(tOverlay, uv + od).a;
  float oB = texture2D(tOverlay, uv - od).a;
  vec3 oCol = oG.rgb;
  col = vec3(mix(col.r, oCol.r, oR), mix(col.g, oCol.g, oG.a), mix(col.b, oCol.b, oB));

  // --- camcorder colour: slightly crushed, greenish shadows, clipped whites
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(luma), col, 0.86);
  col = pow(max(col, 0.0), vec3(0.94));
  col = (col - 0.035) * 1.16;
  col += vec3(-0.004, 0.012, 0.0) * (1.0 - luma);
  col = mix(col, vec3(1.0), smoothstep(0.92, 1.25, luma) * 0.6);   // bloom-ish clip
  col = floor(col * 40.0 + hash(uv * uInRes + t) ) / 40.0;        // coarse levels with dither

  // --- scanlines, grain, dropouts
  float scan = 0.88 + 0.12 * cos(uv.y * uInRes.y * 6.2831853);
  col *= scan;
  float n = hash(uv * uInRes * 0.9 + vec2(t * 61.7, t * 17.3));
  col += (n - 0.5) * uNoise * (1.0 + 2.0 * band + 1.6 * headSw);
  float dropLine = step(0.9988 - 0.01 * band, hash(vec2(line, floor(t * 24.0))));
  float dropX = step(hash(vec2(floor(t * 24.0), line)), uv.x) * step(uv.x, hash(vec2(line, 3.0)) * 0.6 + 0.4);
  col += dropLine * dropX * 0.55;
  col += band * 0.08 * n;

  // --- vignette and frame edge
  vec2 v = vUv - 0.5;
  col *= 1.0 - dot(v, v) * 0.75;
  col *= inside;

  col = mix(col, vec3(1.0), uFade);
  col *= 1.0 - uDark;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;function Sv(n,t){const e=new Dn({vertexShader:xv,fragmentShader:Mv,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new ee(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new ei;i.setAttribute("position",new ke(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new ke(new Float32Array([0,0,2,0,0,2]),2));const r=new on(i,e);r.frustumCulled=!1;const s=new Xu;s.add(r);const o=new zu(-1,1,1,-1,0,1);return{scene:s,camera:o,uniforms:e.uniforms,material:e}}class bv{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new j_({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=$i,this.gl.autoClear=!0,this.gl.setClearColor(new te().setRGB(...Kt.fogColor),1),this.target=new yi(64,64,{minFilter:Le,magFilter:Le,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Ke,this.dv=Sv(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,r=this.mobile?1280:2200;let s=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);s=Math.min(s,r/Math.max(t,e)),this.gl.setPixelRatio(s),this.gl.setSize(t,e,!1);let o=this.mobile?Kt.internalHMobile:Kt.internalH;this.hq&&(o=Math.round(o*1.45));let a,l;i>=1?(l=o,a=Math.round(o*Math.min(i,2.4))):(a=Math.round(o*.8),l=Math.round(a/Math.max(i,.42))),this.target.setSize(a,l),this.dv.uniforms.uInRes.value.set(a,l),this.overlay.resize(a,l),this.width=t,this.height=e,this.aspect=i,this.iw=a,this.ih=l}render(t,e,i){const r=this.gl;this.dv.uniforms.uTime.value=i%1e3,r.setRenderTarget(this.target),r.render(t,e),this.drawCalls=r.info.render.calls,this.triangles=r.info.render.triangles,r.setRenderTarget(null),r.render(this.dv.scene,this.dv.camera)}}const qr=n=>String(n).padStart(2,"0");class Tv{constructor(){this.canvas=Ln(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new Io(this.canvas),this.texture.colorSpace=Ke,this.texture.generateMipmaps=!1,this.texture.minFilter=Le,this.texture.magFilter=Le,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,r,s="left",o="#fff"){const a=this.ctx;a.font=`400 ${r}px ${wr}`,a.textAlign=s,a.textBaseline="alphabetic",a.lineWidth=Math.max(2,r*.16),a.strokeStyle="rgba(0,0,0,0.85)",a.lineJoin="round",a.strokeText(t,e,i),a.fillStyle=o,a.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,r=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(r===this.sig)return;this.sig=r;const s=this.ctx,o=this.canvas.width,a=this.canvas.height;s.clearRect(0,0,o,a);const l=a>o,c=Math.min(o,a)/(l?300:400),h=18*c,u=22*c;if(t.live){i&&(s.fillStyle="#ff2a1a",s.beginPath(),s.arc(h+u*2.05,h+u*.42,u*.3,0,7),s.fill()),this.text("REC",h,h+u*.75,u,"left","#fff");const g=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${g}:${qr(_)}:${qr(d)}`,h,h+u*1.75,u*.9);const p=o-h-u*1.9,y=h+u*.12;s.strokeStyle="#fff",s.lineWidth=Math.max(2,c*2),s.strokeRect(p,y,u*1.7,u*.66),s.fillStyle="#fff",s.fillRect(p+u*1.7,y+u*.2,u*.14,u*.26);const v=Math.max(1,3-Math.floor(e/600));for(let A=0;A<v;A++)s.fillRect(p+u*.12+A*u*.52,y+u*.12,u*.4,u*.42);this.text("SP",p-u*.5,h+u*.75,u,"right");const x=t.date,R=x.getHours()%12||12,b=x.getHours()<12?"AM":"PM",T=this.mobile?h+u*2.75:a-h;this.text(`${vv[x.getMonth()]} ${qr(x.getDate())} ${x.getFullYear()}`,o-h,T-u*1.05,u,"right"),this.text(`${R}:${qr(x.getMinutes())}:${qr(x.getSeconds())} ${b}`,o-h,T,u,"right"),s.strokeStyle="rgba(255,255,255,0.55)",s.lineWidth=Math.max(1.5,c*1.5);const C=o/2,S=a/2,M=7*c;if(s.beginPath(),s.moveTo(C-M,S),s.lineTo(C-M*.35,S),s.moveTo(C+M*.35,S),s.lineTo(C+M,S),s.moveTo(C,S-M),s.lineTo(C,S-M*.35),s.moveTo(C,S+M*.35),s.lineTo(C,S+M),s.stroke(),t.zoom>.05){const A=h,D=this.mobile?h+u*3:a-h-u*.3,I=u*4;this.text("W",A,D,u*.8),this.text("T",A+I+u*.9,D,u*.8),s.strokeStyle="#fff",s.strokeRect(A+u*.6,D-u*.45,I,u*.36),s.fillStyle="#fff",s.fillRect(A+u*.6,D-u*.45,I*t.zoom,u*.36)}}const f=(l?21:24)*c;let m=a-h-u*(l?2.6:2.3);if(this.mobile&&(m=a*(l?.74:.86)),t.reading){const g=t.reading.text.length>170;let _=g?f*.74:f,d;for(let R=0;R<6&&(s.font=`400 ${_}px ${wr}`,d=Mi(s,t.reading.text,o*(g?.9:.8)),!((d.length+1.6)*_*1.02<a*(l?.42:.46)));R++)_*=.9;const p=(d.length+(t.reading.title?1.3:.3))*_*1.02+_*.5,y=g?m-p+(this.mobile?0:u*1.1):Math.min(m-p,a*.62),v=g?o*.03:o*.07;s.fillStyle=`rgba(0,0,0,${g?.72:.62})`,s.fillRect(v,y,o-v*2,p);let x=y+_*1;t.reading.title&&(this.text(t.reading.title,o/2,x,_*.82,"center","#ffd329"),x+=_*1.1);for(const R of d)this.text(R,g?v+_*.6:o/2,x,_,g?"left":"center"),x+=_*1.02;m=y-f*.4}else t.prompt&&this.text(t.prompt,o/2,a*.5+34*c,f*.9,"center","#ffd329");if(t.caption){const g=t.caption.length>110?f*(l?.78:.88):f;s.font=`400 ${g}px ${wr}`;const _=Mi(s,t.caption,o*(l?.9:.84));let d=m-(_.length-1)*g*1.02;t.captionTag&&this.text(t.captionTag,o/2,d-g*1.08,f*.8,"center","#9fd8ff");for(const p of _)this.text(p,o/2,d,g,"center"),d+=g*1.02}t.hint&&this.text(t.hint,o/2,h+u*3.2,f*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const Ev=`
attribute vec4 aLight;        // rgb = baked light / 2, a = light from the faulty tube / 2
uniform float uPower;         // global power level (brown-outs)
uniform float uFlick;         // this segment's faulty tube, 0..1
uniform float uCam;           // camcorder lamp strength
varying vec2 vUv;
varying vec3 vLight;
varying float vFog;
#ifdef CLIP
uniform vec4 uClip;           // (nx, nz, lo, hi): keep world points with lo < dot(xz, n) < hi
varying float vClip;
#endif
void main() {
  vUv = uv;
#ifdef CLIP
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vClip = dot(wp.xz, uClip.xy);
#endif
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = length(mv.xyz);
  vec3 l = aLight.rgb * 2.0 * uPower + vec3(1.0, 0.97, 0.9) * (aLight.a * 2.0 * uFlick * uPower);
  // camcorder lamp: small warm falloff around the lens axis
  float axis = clamp(-mv.z / max(d, 0.001), 0.0, 1.0);
  l += vec3(1.0, 0.95, 0.85) * uCam * axis * axis / (1.0 + 0.16 * d * d);
  vLight = l;
  vFog = d;
  gl_Position = projectionMatrix * mv;
}`,wv=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D map;
uniform vec3 uFogColor;
uniform float uFogDensity;
varying vec2 vUv;
varying vec3 vLight;
varying float vFog;
#ifdef CLIP
uniform vec4 uClip;
varying float vClip;
#endif
void main() {
#ifdef CLIP
  if (vClip < uClip.z || vClip > uClip.w) discard;
#endif
  vec4 t = texture2D(map, vUv);
#ifdef CUTOUT
  if (t.a < 0.5) discard;
#endif
  vec3 c = t.rgb * vLight;
  float f = 1.0 - exp(-uFogDensity * uFogDensity * vFog * vFog);
  gl_FragColor = vec4(mix(c, uFogColor, clamp(f, 0.0, 1.0)), 1.0);
}`,is={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new te().setRGB(...Kt.fogColor)},uFogDensity:{value:Kt.fogDensity}};function Zu(n,t,e=!1,i=null){const r={};return e&&(r.CUTOUT=1),i&&(r.CLIP=1),new Dn({defines:r,vertexShader:Ev,fragmentShader:wv,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:is.uPower,uCam:is.uCam,uFogColor:is.uFogColor,uFogDensity:is.uFogDensity,...i?{uClip:i}:{}},side:Kn})}const yh=[1,1,1],hi=new X,js=new X,xh=new Ot;function Ku(n,t,e){const i=Math.cos(e.yaw),r=Math.sin(e.yaw);for(let s=0;s<t.length;s+=3){const o=t[s],a=t[s+1],l=t[s+2];n[s]=e.x+o*i+l*r,n[s+1]=e.y+a,n[s+2]=e.z-o*r+l*i}}class Ju{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&(xh.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new ge().makeScale(-1,1,1):null)}place(t,e,i,r=0){const s=new ge().makeRotationY(r);return s.setPosition(t,e,i),this.setXf(s)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}_vert(t,e,i,r,s,o){this.m?(hi.set(e[0],e[1],e[2]).applyMatrix4(this.m),js.set(i[0],i[1],i[2]).applyMatrix3(xh),t.pos.push(hi.x,hi.y,hi.z),t.nrm.push(js.x,js.y,js.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(r,s);const a=o&&o.tint||yh;return t.tint.push(a[0],a[1],a[2]),t.emit.push(o&&o.emit!==void 0?o.emit+(o.flick?1e3:0):-1),t.n++}quad(t,e,i,r,s,o,a,l){return this.quadN(t,e,i,r,s,o,o,o,o,o,a,l)}quadN(t,e,i,r,s,o,a,l,c,h,u,f){const m=this._layer(t),g=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],p=r[0]-e[0],y=r[1]-e[1],v=r[2]-e[2],x=_*v-d*y,R=d*p-g*v,b=g*y-_*p,T=x*o[0]+R*o[1]+b*o[2]>=0!=!!this.flip,C=this._vert(m,e,a,u[0],u[1],f),S=this._vert(m,i,l,u[2],u[1],f),M=this._vert(m,r,c,u[2],u[3],f),A=this._vert(m,s,h,u[0],u[3],f);T?m.idx.push(C,S,M,C,M,A):m.idx.push(C,M,S,C,A,M)}quadUV(t,e,i,r,s,o,a,l,c,h,u){const f=this._layer(t),m=i[0]-e[0],g=i[1]-e[1],_=i[2]-e[2],d=r[0]-e[0],p=r[1]-e[1],y=r[2]-e[2],v=(g*y-_*p)*o[0]+(_*d-m*y)*o[1]+(m*p-g*d)*o[2]>=0!=!!this.flip,x=this._vert(f,e,o,a[0],a[1],u),R=this._vert(f,i,o,l[0],l[1],u),b=this._vert(f,r,o,c[0],c[1],u),T=this._vert(f,s,o,h[0],h[1],u);v?f.idx.push(x,R,b,x,b,T):f.idx.push(x,b,R,x,T,b)}tri(t,e,i,r,s,o,a,l,c){const h=this._layer(t),u=i[0]-e[0],f=i[1]-e[1],m=i[2]-e[2],g=r[0]-e[0],_=r[1]-e[1],d=r[2]-e[2],p=(f*d-m*_)*s[0]+(m*g-u*d)*s[1]+(u*_-f*g)*s[2]>=0!=!!this.flip,y=this._vert(h,e,s,o[0],o[1],c),v=this._vert(h,i,s,a[0],a[1],c),x=this._vert(h,r,s,l[0],l[1],c);p?h.idx.push(y,v,x):h.idx.push(y,x,v)}grid(t,e,i,r,s,o,a,l,c,h=!1){for(let u=0;u<s;u++)for(let f=0;f<o;f++){const m=(v,x)=>[e[0]+i[0]*v+r[0]*x,e[1]+i[1]*v+r[1]*x,e[2]+i[2]*v+r[2]*x],g=u/s,_=(u+1)/s,d=f/o,p=(f+1)/o,y=h?l:[l[0]+(l[2]-l[0])*g,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*p];this.quad(t,m(g,d),m(_,d),m(_,p),m(g,p),a,y,c)}}box(t,e,i,r,s,o,a,l,c,h="xXyYzZ"){const u=(f,m,g,_,d)=>this.quad(t,f,m,g,_,d,l,c);h.includes("x")&&u([e,i,a],[e,i,r],[e,o,r],[e,o,a],[-1,0,0]),h.includes("X")&&u([s,i,r],[s,i,a],[s,o,a],[s,o,r],[1,0,0]),h.includes("y")&&u([e,i,r],[s,i,r],[s,i,a],[e,i,a],[0,-1,0]),h.includes("Y")&&u([e,o,r],[s,o,r],[s,o,a],[e,o,a],[0,1,0]),h.includes("z")&&u([s,i,r],[e,i,r],[e,o,r],[s,o,r],[0,0,-1]),h.includes("Z")&&u([e,i,a],[s,i,a],[s,o,a],[e,o,a],[0,0,1])}addLight(t,e,i,r=1,s=7,o=!1,a=yh){this.m&&(hi.set(t,e,i).applyMatrix4(this.m),t=hi.x,e=hi.y,i=hi.z),this.lights.push({x:t,y:e,z:i,i:r,r2:s*s,flicker:o,color:a})}addPortal(t,e,i,r){this.portals.push({x:t,y:e,z:i,dx:Math.sin(r),dz:Math.cos(r)})}_lightAt(t,e,i,r,s,o,a){const l=a.x-t,c=a.y-e,h=a.z-i,u=l*l+c*c+h*h;if(u>=a.r2)return 0;const f=(1-u/a.r2)**2,m=1/Math.sqrt(u+1e-6),g=Math.max(0,(r*l+s*c+o*h)*m);return a.i*f*(.38+.62*g)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(s=>({x:s.x,y:s.y+2.3,z:s.z,i:.85,r2:36})),r={};for(const s of Object.keys(this.layers)){const o=this.layers[s],a=new Uint8Array(o.n*4);for(let h=0;h<o.n;h++){const u=o.tint[h*3],f=o.tint[h*3+1],m=o.tint[h*3+2];let g,_,d,p=0;const y=o.emit[h];if(y>=0){const v=y>=1e3,x=v?y-1e3:y,R=v?.1:1;g=u*x*R,_=f*x*R,d=m*x*R,p=v?x*.9:0}else{const v=o.pos[h*3],x=o.pos[h*3+1],R=o.pos[h*3+2],b=o.nrm[h*3],T=o.nrm[h*3+1],C=o.nrm[h*3+2];let S=1;for(const M of this.portals){const A=Math.abs((v-M.x)*M.dx+(R-M.z)*M.dz),D=Math.abs((v-M.x)*M.dz-(R-M.z)*M.dx),I=Math.hypot(D,Math.max(0,x-M.y-2.2));D<4&&Math.abs(x-M.y)<5&&(S=Math.min(S,Math.max(_h(.1,2.4,A),_h(1.7,2.9,I))))}g=t[0],_=t[1],d=t[2];for(const M of this.lights){const A=this._lightAt(v,x,R,b,T,C,M)*S;A<=0||(M.flicker?p+=A:(g+=A*M.color[0],_+=A*M.color[1],d+=A*M.color[2]))}for(const M of i){const A=this._lightAt(v,x,R,b,T,C,M);g+=A,_+=A*.98,d+=A*.93}g*=u,_*=f,d*=m,p*=(u+f+m)/3}a[h*4]=Math.min(255,g*127.5),a[h*4+1]=Math.min(255,_*127.5),a[h*4+2]=Math.min(255,d*127.5),a[h*4+3]=Math.min(255,p*127.5)}const l=new ei,c=new Float32Array(o.pos);e&&Ku(c,o.pos,e),l.userData.local=o.pos,l.setAttribute("position",new ke(c,3)),l.setAttribute("uv",new ke(new Float32Array(o.uv),2)),l.setAttribute("aLight",new ke(a,4,!0)),l.setIndex(new ke(o.n>65535?new Uint32Array(o.idx):new Uint16Array(o.idx),1)),l.computeBoundingSphere(),r[s]=l}return r}}function ya(n,t,e){const i=Math.cos(e),r=Math.sin(e);let s=1/0,o=-1/0,a=1/0,l=-1/0;for(const[c,h]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const u=t.x+c*i+h*r,f=t.z-c*r+h*i;s=Math.min(s,u),o=Math.max(o,u),a=Math.min(a,f),l=Math.max(l,f)}return[s,t.y+n[1],a,o,t.y+n[4],l]}function Sl(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}function Av(n,t,e,i,r){const s=[...n.values()].find(l=>l!==t&&Sl(i,l.box)),o=e.env.stretch,a=s&&s.env.stretch;return{type:e.def.type,after:t.def.type,yaw:+r.toFixed(2),hit:s?s.def.type:"?",rel:s?a===o?"same stretch":"other stretch":"?",box:i.map(l=>+l.toFixed(1)),hitBox:s?s.box.map(l=>+l.toFixed(1)):null,sister:!!(o&&a&&o.fromJunction&&o.fromJunction===a.fromJunction)}}let Rv=1;const Cv=new Set(["sheet","cut","gate","figure"]);class Pv{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0,forced:[]}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const r=new Se(i),s=t.plan(r,e),o=this._make(t,s,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=o,this.refresh(!0),o}_make(t,e,i,r,s,o,a,l){const c={id:Rv++,def:t,p:e.p,env:i,seed:l,pos:r,yaw:s,parent:o,exitIndex:a,exits:e.exits.map(h=>({...h,child:null})),box:ya(e.box,r,s),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((h,u)=>Math.max(h,Math.hypot(u.x,u.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],r=Math.cos(t.yaw),s=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*r+i.z*s,y:t.pos.y+i.y,z:t.pos.z-i.x*s+i.z*r},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&Sl(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:r,yaw:s}=this.exitPose(t,e);let o=null;for(let a=0;a<14;a++){const l=He(t.seed,e*31+a*977+1),c=new Se(l),h=this.hooks.choose(t,e,a,c);if(!h)break;const u=h.def.plan(c,h.env);o||(o={pick:h,plan:u,seed:l});const f=ya(u.box,r,s);if(!(!h.force&&!this._fits(f,t)))return i.child=this._make(h.def,u,h.env,r,s,t,e,l),i.child}return this.stats.deadEnds++,o&&this.stats.forced.length<60&&this.stats.forced.push(Av(this.nodes,t,o.pick,ya(o.plan.box,r,s),s)),o?(i.child=this._make(o.pick.def,o.plan,o.pick.env,r,s,t,e,o.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=Kt.ahead,i=Kt.sight||46,r=7;for(const a of this.nodes.values())a.dist=1/0,a.path=1/0;const s=[this.current];this.current.dist=0,this.current.path=0;const o=a=>a.dist<=e||a.path<=i&&a.dist<=r;for(;s.length;){const a=s.shift();if(a.dist<e||a.path<i&&a.dist<r)for(let l=0;l<a.exits.length;l++)this.expand(a,l);for(const l of this.neighbours(a))l.dist>a.dist+1&&(l.dist=a.dist+1,l.path=a===this.current?0:a.path+(a.span||8),s.push(l))}for(const a of this.nodes.values())o(a)&&!a.built&&!this.buildQueue.includes(a)?this.buildQueue.push(a):a.built&&a.dist>e+1&&a.path>i+10&&this.unbuild(a);if(this.buildQueue.sort((a,l)=>a.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift());this.cull()}cull(){const t=[...this.nodes.values()].filter(i=>i.built).sort((i,r)=>i.dist-r.dist),e=[];for(const i of t){const r=o=>o.parent===i||i.parent===o,s=i.dist>1&&e.some(o=>!r(o)&&Sl(i.box,o.box,.4));i.built.group.visible=!s,i.hiddenByFold=s,s||e.push(i)}}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),this.cull(),!0}return!1}build(t){if(t.built)return;const e=new Ju,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,r={b:e,p:t.p,rng:new Se(He(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},s=t.def.build(r)||{},o=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),a=new ns;a.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(o)){const h=c==="sheet"?l:this.hooks.textures(c,t),u=new on(o[c],Zu(h,t.flick,Cv.has(c)));u.matrixAutoUpdate=!1,u.name=c,c==="gate"&&(u.visible=!!t.gateShut),c==="figure"&&(u.visible=!t.figureGone),a.add(u)}this.scene.add(a),a.updateMatrixWorld(!0),t.built={group:a,sheetTex:l,sheetOverflow:i?i.overflow:0,cells:s.cells||[],walls:s.walls||[],items:s.items||[],frames:s.frames||null,extra:s.extra||null,gate:a.children.find(c=>c.name==="gate")||null,figure:a.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const r of e.children)r.geometry.dispose(),r.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const r of this.nodes.values())if(r.pos.x-=t,r.pos.y-=e,r.pos.z-=i,r.box[0]-=t,r.box[3]-=t,r.box[1]-=e,r.box[4]-=e,r.box[2]-=i,r.box[5]-=i,!!r.built)for(const s of r.built.group.children){const o=s.geometry.attributes.position;Ku(o.array,s.geometry.userData.local,{x:r.pos.x,y:r.pos.y,z:r.pos.z,yaw:r.yaw}),o.needsUpdate=!0,s.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const r=i.pop();if(this.nodes.has(r.id)){this.unbuild(r),this.nodes.delete(r.id);for(const s of this.neighbours(r))s!==e&&this.nodes.has(s.id)&&i.push(s)}}}}function ko(n,t,e){const i=t-n.pos.x,r=e-n.pos.z,s=Math.cos(n.yaw),o=Math.sin(n.yaw);return[i*s-r*o,i*o+r*s]}function Bi(n,t,e,i){const r=Math.cos(n.yaw),s=Math.sin(n.yaw);return[n.pos.x+t*r+i*s,n.pos.y+e,n.pos.z-t*s+i*r]}function xa(n,t,e,i,r=.02){if(!n.built)return null;const[s,o]=ko(n,t,e);let a=null,l=1.6;for(const c of n.built.cells){const h=c.bx-c.ax,u=c.bz-c.az,f=h*h+u*u,m=((s-c.ax)*h+(o-c.az)*u)/f;if(m<-r||m>1+r||Math.abs((s-c.ax)*u-(o-c.az)*h)/Math.sqrt(f)>c.hw+r)continue;const _=m<0?0:m>1?1:m,d=n.pos.y+c.ya+(c.yb-c.ya)*_,p=Math.abs(d-i);p<l&&(l=p,a={y:d,cell:c,t:_})}return a}function Zs(n,t,e,i){const r=n.current;let s=xa(r,t,e,i);if(s)return{node:r,y:s.y,cell:s.cell,t:s.t};for(const o of n.neighbours(r))if(s=xa(o,t,e,i),s)return{node:o,y:s.y,cell:s.cell,t:s.t};for(const o of n.neighbours(r))for(const a of n.neighbours(o))if(a!==r&&(s=xa(a,t,e,i),s))return{node:a,y:s.y,cell:s.cell,t:s.t};return null}function Dv(n,t,e){if(!n.built)return!1;let[i,r]=ko(n,t.x,t.z),s=!1;const o=t.y-n.pos.y;for(const a of n.built.walls){if(a.length>4&&(o<a[4]||o>a[5]))continue;const l=a[2]-a[0],c=a[3]-a[1],h=l*l+c*c;let u=h>0?((i-a[0])*l+(r-a[1])*c)/h:0;u=u<0?0:u>1?1:u;const f=a[0]+l*u,m=a[1]+c*u,g=i-f,_=r-m,d=g*g+_*_;if(d<e*e&&d>1e-9){const p=Math.sqrt(d),y=(e-p)/p;i+=g*y,r+=_*y,s=!0}}if(s){const a=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*a+r*l,t.z=n.pos.z-i*l+r*a}return s}function Ma(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let r=0;r<2;r++){let s=!1;for(const o of i)s=Dv(o,t,e)||s;if(!s)break}}function Lv(n,t,e,i,r){const s=t.x,o=t.z;t.x+=e,t.z+=i,Ma(n,t,r);let a=Zs(n,t.x,t.z,t.y);return!a&&(t.x=s+e,t.z=o,Ma(n,t,r),a=Zs(n,t.x,t.z,t.y),a||(t.x=s,t.z=o+i,Ma(n,t,r),a=Zs(n,t.x,t.z,t.y)),!a)?(t.x=s,t.z=o,Zs(n,s,o,t.y)):a}class Iv{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=Kt.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null,this.windX=0,this.windZ=0,this.shake=0}spawn(t,e,i,r){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=r+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+Kt.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=ze(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let r=e.mx,s=e.mz;const o=Math.hypot(r,s);o>1&&(r/=o,s/=o);const a=e.run&&s>.3,l=(a?Kt.run:Kt.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),h=Math.cos(this.yaw),u=(-c*s+h*r)*l,f=(-h*s-c*r)*l,m=o>.01?9:12;this.vx=zi(this.vx,u,m,t),this.vz=zi(this.vz,f,m,t);const g=this.pos.x,_=this.pos.z,d=Lv(i,this.pos,(this.vx+this.windX)*t,(this.vz+this.windZ)*t,Kt.radius);let p=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const y=Math.hypot(this.pos.x-g,this.pos.z-_);this.speed=y/Math.max(t,1e-4),this.walked+=y;const v=a?1.05:.74,x=Math.floor(this.stepDist/v);this.stepDist+=Math.min(y,Math.hypot(this.vx,this.vz)*t),Math.floor(this.stepDist/v)!==x&&(p=!0),this.zoom=zi(this.zoom,this.zoomTarget,7,t);const R=this.pos.y+Kt.eye;this.eyeY=zi(this.eyeY,R,16,t);const b=this.stepDist/v*Math.PI,T=ze(this.speed/Kt.walk,0,1.6),C=-Math.abs(Math.sin(b))*.035*T,S=Math.sin(b)*.018*T,M=this.t,A=we(M*.55,11)*.011+we(M*2.3,12)*.003,D=we(M*.47,21)*.012+we(M*2.7,22)*.003,I=this.shake||0,N=we(M*.4,31)*.01+Math.sin(b)*.006*T+we(M*23,43)*.012*I,L=this.camera;L.position.set(this.pos.x+h*S,this.eyeY+C,this.pos.z-c*S),L.rotation.set(this.pitch+A*(1-.6*this.zoom)+we(M*29,41)*.009*I,this.yaw+D*(1-.6*this.zoom)+we(M*31,42)*.007*I,N);const B=Kt.fov-(L.aspect<1?20:36)*this.zoom;return Math.abs(L.fov-B)>.01&&(L.fov=B,L.updateProjectionMatrix()),{step:p,running:a}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function Uv(n,t,e){const i=new Set,r=()=>{const a=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=a,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",a=>{a.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(a.code)&&a.preventDefault(),i.add(a.code),r(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!0),(a.code==="KeyP"||a.code==="Escape"&&!s())&&e.pause())}),window.addEventListener("keyup",a=>{i.delete(a.code),r(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),r()});function s(){return document.pointerLockElement===t}const o=()=>{if(!(s()||!t.requestPointerLock))try{const a=t.requestPointerLock();a&&a.catch&&a.catch(()=>{})}catch{}};return document.addEventListener("mousemove",a=>{if(!s())return;const l=.0022;Math.abs(a.movementX)>400||Math.abs(a.movementY)>400||(n.lookX+=a.movementX*l,n.lookY+=a.movementY*l)}),t.addEventListener("mousedown",a=>{if(!s()){o();return}a.button===0&&e.use(!0)}),window.addEventListener("mouseup",a=>{a.button===0&&s()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(s())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:o,locked:s,release:()=>{s()&&document.exitPointerLock()}}}function Nv(n,t){const e=T=>document.getElementById(T),i=e("stick-zone"),r=e("look-zone"),s=e("stick-base"),o=e("stick-knob"),a=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!r)return{reset(){}};const h=52;let u=null,f=0,m=0,g=null,_=0,d=0,p=!1;const y=(T,C)=>{o.style.transform=`translate(${T}px, ${C}px)`},v=()=>{u=null,n.tmx=0,n.tmz=0,n.trun=p,y(0,0),s.style.left="",s.style.top="",s.style.bottom=""};i.addEventListener("pointerdown",T=>{if(u!==null)return;u=T.pointerId,f=T.clientX,m=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}const C=s.offsetWidth,S=s.offsetHeight;s.style.left=`${f-C/2}px`,s.style.top=`${m-S/2}px`,s.style.bottom="auto",T.preventDefault()}),i.addEventListener("pointermove",T=>{if(T.pointerId!==u)return;let C=T.clientX-f,S=T.clientY-m;const M=Math.hypot(C,S);M>h&&(C*=h/M,S*=h/M),y(C,S);const A=.12,D=C/h,I=S/h;n.tmx=Math.abs(D)<A?0:D,n.tmz=Math.abs(I)<A?0:-I,n.trun=p||M>h*1.35,T.preventDefault()});const x=T=>{T.pointerId===u&&v()};i.addEventListener("pointerup",x),i.addEventListener("pointercancel",x),r.addEventListener("pointerdown",T=>{if(g===null){g=T.pointerId,_=T.clientX,d=T.clientY;try{r.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),r.addEventListener("pointermove",T=>{if(T.pointerId!==g)return;const C=.0052;n.lookX+=(T.clientX-_)*C,n.lookY+=(T.clientY-d)*C,_=T.clientX,d=T.clientY,T.preventDefault()});const R=T=>{T.pointerId===g&&(g=null)};r.addEventListener("pointerup",R),r.addEventListener("pointercancel",R),((T,C,S)=>{T.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),T.classList.add("on"),C()});const M=A=>{A.preventDefault(),T.classList.remove("on"),S&&S()};T.addEventListener("pointerup",M),T.addEventListener("pointercancel",M)})(a,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),p=!p,n.trun=p,l.classList.toggle("on",p)}),c.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()});for(const T of["touchstart","touchmove","gesturestart"])document.addEventListener(T,C=>{C.target.closest&&C.target.closest("#touch")&&C.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",T=>T.preventDefault()),{reset:()=>{v(),g=null}}}function Yl(n=Kt.passW,t=Kt.passSpring,e=Kt.passCrown,i=5,r=2){const s=[],o=n/2,a=e-t;for(let h=0;h<=r;h++)s.push({x:-o,y:t*h/r,nx:1,ny:0});for(let h=1;h<=i;h++){const u=Math.PI/2*(h/i),f=-o*Math.cos(u),m=t+a*Math.sin(u);let g=-f/(o*o),_=-(m-t)/(a*a);const d=Math.hypot(g,_)||1;s.push({x:f,y:m,nx:g/d,ny:_/d})}let l=0;s[0].s=0;for(let h=1;h<s.length;h++)l+=Math.hypot(s[h].x-s[h-1].x,s[h].y-s[h-1].y),s[h].s=l;const c=s.map(h=>({...h,v:h.s/l}));for(let h=s.length-2;h>=0;h--){const u=s[h];c.push({x:-u.x,y:u.y,nx:-u.nx,ny:u.ny,s:u.s,v:u.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const Ut=Yl();function Fv(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),r=[];for(let s=0;s<=i;s++){const o=n*s/i;r.push({x:0,y:e?e(o):0,z:o,yaw:0})}return r}function kv(n,t,e=1){const i=Math.sign(t)||1,r=Math.abs(t),s=Math.max(2,Math.round(n*r/e)),o=[];for(let a=0;a<=s;a++){const l=r*a/s;o.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return o}function de(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function Ks(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function vi(n,t,e,i={}){const r=i.layer||"tile",s=i.uPeriod||6,[o,a]=i.vRange||[.004,.996],l=[i.u0||0];for(let f=1;f<t.length;f++){const m=t[f-1],g=t[f];l.push(l[f-1]+Math.hypot(g.x-m.x,g.z-m.z))}const c=[],h=[],u=e.W/2;for(let f=0;f<t.length-1;f++){const m=t[f],g=t[f+1],_=l[f]/s,d=l[f+1]/s;for(let p=0;p<e.length-1;p++){const y=e[p],v=e[p+1],x=Ks(m,y.nx,y.ny),R=Ks(g,y.nx,y.ny),b=Ks(g,v.nx,v.ny),T=Ks(m,v.nx,v.ny),C=[(x[0]+b[0])/2,(x[1]+b[1])/2,(x[2]+b[2])/2];n.quadN(r,de(m,y.x,y.y),de(g,y.x,y.y),de(g,v.x,v.y),de(m,v.x,v.y),C,x,R,b,T,[_,o+(a-o)*y.v,d,o+(a-o)*v.v],i.wallOpts)}if(i.floor){const p=Math.max(1,Math.round(e.W));for(let y=0;y<p;y++){const v=-u+e.W*y/p,x=-u+e.W*(y+1)/p;n.quad("atlas",de(m,v,0),de(m,x,0),de(g,x,0),de(g,v,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:m.x,az:m.z,bx:g.x,bz:g.z,hw:u,ya:m.y,yb:g.y});for(const p of[-1,1]){const y=de(m,p*u,0),v=de(g,p*u,0);h.push([y[0],y[2],v[0],v[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:h,dist:l}}function jl(n,t=.25){const e=n[0],i=n[n.length-1],r=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return r.W=n.W,r.crown=n.crown,r.spring=n.spring,r.len=n.len,r}function Qu(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function Nr(n,t,e,i,r,s,o,a){const l=[Math.sin(t.yaw)*r,0,Math.cos(t.yaw)*r],c=o||((g,_)=>[g/6,.004+_/3.63*.992]),h=g=>de(t,g.x,g.y),u=g=>c(g.x,g.y),f=e.length,m=(g,_,d,p)=>n.quadUV(s,h(g),h(_),h(d),h(p),l,u(g),u(_),u(d),u(p),a);if(i)for(let g=0;g<f-1;g++)m(e[g],e[g+1],i[g+1],i[g]);else for(let g=0;g<Math.floor((f-1)/2);g++)m(e[g],e[g+1],e[f-2-g],e[f-1-g])}function Ae(n,t,e,i,r,s=.12,o=.08){for(let a=0;a<r;a++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,s)})`:`rgba(255,255,255,${i.range(.02,o)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const se=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Ov={floor(n,t,e,i){se(n,t,e,"#77746b");const r=4,s=t/r;for(let o=0;o<r;o++)for(let a=0;a<r;a++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(o*s+1,a*s+1,s-2,s-2)}Ae(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){se(n,t,e,"#3d3c39");const r=4,s=t/r;for(let o=0;o<r;o++)for(let a=0;a<r;a++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(o*s+1,a*s+1,s-2,s-2)}Ae(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){se(n,t,e,"#a9a493"),Ae(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){se(n,t,e,"#c9a94a"),Ae(n,t,e,i,500,.12,.06);const r=6,s=t/r;for(let o=0;o<r;o++)for(let a=-1;a<r;a++){const l=(a+.5+(o%2?.5:0))*s,c=(o+.5)*s;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,s*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,s*.25,0,7),n.fill()}},yellow(n,t,e,i){se(n,t,e,"#e2b81e"),Ae(n,t,e,i,700,.22,.05)},white(n,t,e){se(n,t,e,"#ffffff")},black(n,t,e){se(n,t,e,"#0b0b0b")},blackout(n,t,e){se(n,t,e,"#000000")},navy(n,t,e,i){se(n,t,e,"#14213d"),Ae(n,t,e,i,200,.1,.04)},cream(n,t,e,i){se(n,t,e,"#e6dfc6"),Ae(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){se(n,t,e,"#2a2c2e"),Ae(n,t,e,i,200,.1,.05)},metal(n,t,e,i){se(n,t,e,"#9aa0a3");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,r,t,1)},steelDark(n,t,e,i){se(n,t,e,"#3b3f42");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,r,t,1)},wood(n,t,e,i){se(n,t,e,"#6b4526");for(let r=0;r<90;r++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let r=1;r<4;r++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,r*e/4-1,t,2)},rubber(n,t,e,i){se(n,t,e,"#161616"),Ae(n,t,e,i,200,.2,.08)},tread(n,t,e){se(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){se(n,t,e,"#6f6c64"),Ae(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let r=0;r<t;r+=8)n.fillRect(r,4,4,8)},riser(n,t,e,i){se(n,t,e,"#4a4843"),Ae(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){se(n,t,e,"#1f1d1a"),Ae(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){se(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),Ae(n,t,e,i,300,.2,.1)},grille(n,t,e){se(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){se(n,t,e,"#3a3936"),Ae(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${_e}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),Ae(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){se(n,t,e,"#e3dfd0"),Ae(n,t,e,i,900,.25,.04)},cable(n,t,e,i){se(n,t,e,"#23211e"),Ae(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((s,o)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][o],n.fillRect(0,e*s,t,o%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*s,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){se(n,t,e,"#141311"),Ae(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let r=1;r<4;r++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,r*e/4,t,2)},lamp(n,t,e){se(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){se(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let r=20+i/8%2*4;r<t-16;r+=8)n.fillRect(r,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){se(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){se(n,t,e,"#7d8386"),Ae(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},Sa=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},zv={door(n,t,e,i){Sa(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${De}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let r=0;r<60;r++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,r=t/i;for(let a=0;a<=i;a++)n.beginPath(),n.moveTo(a*r,0),n.lineTo(a*r,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const s=5,o=e/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*r,a*o),n.lineTo((l+1)*r,(a+1)*o),n.stroke(),n.beginPath(),n.moveTo((l+1)*r,a*o),n.lineTo(l*r,(a+1)*o),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${_e}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(r,s,o)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,r,t*.2,0,7),n.fill(),n.fillStyle=s,n.beginPath(),n.arc(t/2,r,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${De}`,n.fillText(o,t/2,r+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let r=28;r<t-24;r+=8)n.fillRect(r,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let r=0;r<5;r++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,r*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,r*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const r of[.08,.5,.92])n.fillRect(t*r-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${De}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){Sa(n,t,e,"#1d1a17");const r=6,s=t/r;for(let a=0;a<r;a++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(a*s+2,3,s-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(a*s+2,3,s-4,4)}const o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(10,8,6,0.08)"),o.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=o,n.fillRect(0,0,t,e);for(let a=0;a<260;a++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){Sa(n,t,e,"#6a6f72");for(let r=0;r<e;r+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,r,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r+9,t,3);for(let r=0;r<120;r++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}},mi=1024,nn=128,tf={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1]};let $r=null,ba=null;function Bv(){if($r)return $r;$r=Ln(mi,mi);const n=$r.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,mi,mi);const t={...Ov,...zv};for(const[e,[i,r,s,o]]of Object.entries(tf)){const a=t[e];n.save(),n.translate(i*nn,r*nn),n.beginPath(),n.rect(0,0,s*nn,o*nn),n.clip(),a?a(n,s*nn,o*nn,new Se(Er(e))):(n.fillStyle="#f0f",n.fillRect(0,0,s*nn,o*nn)),n.restore()}return $r}function Hv(){return ba||(ba=ql(Bv())),ba}function Xt(n,t=3){const e=tf[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*nn+t,r=e[1]*nn+t,s=e[2]*nn-t*2,o=e[3]*nn-t*2;return[i/mi,1-(r+o)/mi,(i+s)/mi,1-r/mi]}function vo(n,t,e,i,r){const s=Xt(n);return[s[0]+(s[2]-s[0])*t,s[1]+(s[3]-s[1])*e,s[0]+(s[2]-s[0])*i,s[1]+(s[3]-s[1])*r]}function Jt(n){return vo(n,.4,.4,.6,.6)}const Gv=()=>Xt("lamp"),Vv=()=>Jt("metal");function Yi(n,t,e,i={}){const r=i.len||1.25,s=.14,o=i.x||0,[a,,l]=de(t,o,0);n.place(a,t.y+e,l,t.yaw);const h={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-s/2,-.07,-r/2],[s/2,-.07,-r/2],[s/2,-.07,r/2],[-s/2,-.07,r/2],[0,-1,0],Gv(),h),n.box("atlas",-s/2,-.07,-r/2,s/2,0,r/2,Vv(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(a,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function ef(n,t,e,i,r={}){const s=e[e.length-1]-e[0],o=Math.max(0,Math.round(s/4.4)-1),a=[];for(let l=1;l<=o;l++){const c=e[0]+s*l/(o+1);let h=0;for(;h<e.length-1&&e[h]<c;)h++;const u=t[h];Yi(n,u,i-.04,{dead:!!r.dark,flick:r.faulty===l-1}),a.push(u)}return a}function bi(n,t,e){Yi(n,t,e-.04,{noLight:!0}),Hi(n,t,1.56)}function Hi(n,t,e,i="floor"){const[r,,s]=de(t,0,0);n.place(r,t.y,s,t.yaw),n.quad("atlas",[-e,-.003,-.16],[e,-.003,-.16],[e,-.003,.16],[-e,-.003,.16],[0,1,0],Jt(i)),n.setXf(null)}function Si(n,t,e,i,r,s,o,a,l,c,h=.02){const u=i*(r-h),f=[u,s,i>0?-o/2:o/2],m=[u,s,i>0?o/2:-o/2],[g,,_]=de(e,0,0);n.place(g,e.y,_,e.yaw),n.quad(t,f,m,[m[0],s+a,m[2]],[f[0],s+a,f[2]],[-i,0,0],l,c),n.setXf(null);const d=de(e,u,s+a/2);return{x:d[0],y:d[1],z:d[2]}}function Wv(n,t,e,i,r,s,o,a="steelDark",l=.035){const c=Jt(a);Si(n,"atlas",t,e,i,r-l,s+2*l,l,c,null,.03),Si(n,"atlas",t,e,i,r+o,s+2*l,l,c,null,.03);const[h,,u]=de(t,0,0);n.place(h,t.y,u,t.yaw);const f=e*(i-.03);for(const m of[-s/2-l,s/2])n.quad("atlas",[f,r,m],[f,r,m+l],[f,r+o,m+l],[f,r+o,m],[-e,0,0],c);n.setXf(null)}function mo(n,t,e,i,r,s,o,a,l,c=0){const[h,,u]=de(e,c,0);n.place(h,e.y,u,e.yaw),n.quad(t,[r/2,i,-.03],[-r/2,i,-.03],[-r/2,i+s,-.03],[r/2,i+s,-.03],[0,0,-1],o,l),a&&n.quad(t,[-r/2,i,.03],[r/2,i,.03],[r/2,i+s,.03],[-r/2,i+s,.03],[0,0,1],a,l);const f=Jt("signBack");n.box("atlas",-r/2,i,-.03,r/2,i+s,.03,f,null,"xXyY");for(const m of[-r*.35,r*.35])n.box("atlas",m-.012,i+s,-.012,m+.012,i+s+.5,.012,f,null,"xXzZ");return n.setXf(null),{x:h,y:e.y+i+s/2,z:u}}const Xv=["Ladies and gentlemen, there is a good service on the Northern line.","This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Please stand behind the yellow line, and stand clear of the doors.","Please keep your belongings with you at all times.","Customers are reminded that the last northbound train has departed.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail.","Please stand on the right on the escalators."],Mh=["This is a security message. If you see something that doesn't look right, speak to staff, or text the British Transport Police on 61016. We'll sort it. See it, say it, sorted.","If you see something that doesn't look right, speak to staff, or text British Transport Police on 61016, and we'll get it sorted. That's 61016. See it, say it, sorted."],qv=["If you see something that doesn't look right, speak to staff. If you can find one. See it, say it, sorted."],$v=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on the Northern line, and on all other lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train does not stop at {next}. The next train does not stop.","This is {station}. The next station is {station}."],Yv=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","This is North End. This station was never opened. Please do not alight here.","Please do not turn round."],ms={title:"Customer Information",intro:"This station is closed. To find the way out:",rules:["Follow the yellow and black signs that say “Way out”. Any other sign was not put up by us.","All station clocks run forwards. Never walk under a clock that runs backwards.","Announcements after a rising chime are from staff. A falling chime is not staff: do the opposite of what it says.","The way out is up the line, beyond Hampstead. A wrong turn takes you two stations back.","“Way out” is listed on the indicator boards. If its minutes go up, you went wrong."],foot:"Thank you for travelling on the Northern line.",keys:["yellow","chime","clock","line","board"]},jv=()=>`${ms.intro}
${ms.rules.map((n,t)=>`${t+1}. ${n}`).join(`
`)}`,Zv="This station is now closed. Please read the customer information notice on the platform, then make your way to the way out.",Sh=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.'},{key:"line",title:"STAFF NOTICE",text:"Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. After Hampstead the line comes out into the open air. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards."},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.'},{key:"tiles",title:"STAFF NOTICE",text:"Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line."},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away."},{key:"whiteboard",title:"STAFF NOTICE",text:"The whiteboards are written each morning by the duty staff, who sign them with their own name. A board signed by anyone else, or by no one, was not written by us. Take no directions from it."},{key:"train",title:"NIGHT STAFF",text:'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"'}],Kv=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"],["The Heath","Fresh air, four stops north"],["Night service","Does not run tonight"],["Keep left","Unless it says keep right"],["Lost property","It will turn up at Baker Street"],["Camden Lock Market","Open Sundays. Closed now"]],Jv=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],Qv=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function ty(n,t,e,i,r,s){const[o,a,l]=r;n.fillStyle=o,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=a,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let h=0;h<5;h++)n.fillRect(0,e*(.46+h*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let h=0;h<14;h++){n.fillStyle=h%2?a:l,n.beginPath(),n.moveTo(0,0);const u=Math.PI+h/14*Math.PI,f=Math.PI+(h+1)/14*Math.PI;n.lineTo(Math.cos(u)*t*2,Math.sin(u)*t*2),n.lineTo(Math.cos(f)*t*2,Math.sin(f)*t*2),n.fill()}n.restore(),n.fillStyle=o,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let h=6;h>0;h--)n.fillStyle=h%2?a:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*h/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=a,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=a,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(s){n.fillStyle="rgba(8,8,8,0.92)";const h=t*i.range(.25,.75),u=e*.62,f=e*.12;n.beginPath(),n.ellipse(h,u-f*1.25,f*.2,f*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(h-f*.32,u),n.lineTo(h-f*.22,u-f),n.lineTo(h+f*.22,u-f),n.lineTo(h+f*.32,u),n.fill()}}function Ss(n,t,e,i,r=!1,s=!1){if(s){const u=Math.max(2,Math.min(t,e)*.035);n.fillStyle="#62676a",n.fillRect(0,0,t,e),n.save(),n.translate(u,u),n.beginPath(),n.rect(0,0,t-2*u,e-2*u),n.clip();const f=Ss(n,t-2*u,e-2*u,i,r,!1);return n.restore(),f}const o=i.pick(Qv),[a,l]=i.pick(r?Jv:Kv);ty(n,t,e,i,o,r);const c=o[2];n.fillStyle=o[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=o[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=o[1]===o[0]?c:o[1],n.font=`400 ${e*.085}px ${_e}`;const h=Mi(n,a,t*.86).slice(0,2);return h.forEach((u,f)=>n.fillText(u,t/2,e*(.775+f*.085)-(h.length-1)*e*.02,t*.9)),n.fillStyle=o[2]===o[0]?"#fff":o[2],Ie(n,l,t*.84,e*.045,De,700),n.fillText(l,t/2,e*.93),xi(n,0,0,t,e,i.int(1,99999),.6),{headline:a,strap:l}}function nf(n,t,e,i,r){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",Ie(n,i.title,t*.86,e*.1,_e),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let s=e*.07,o;for(;n.font=`400 ${s}px ${De}`,o=Mi(n,i.text,t*.86),!(o.length*s*1.25<e*.74||s<5);)s*=.92;o.forEach((a,l)=>n.fillText(a,t*.07,e*.22+l*s*1.25)),n.fillStyle="#b3261e";for(const[a,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*a,e*l+2,Math.max(2,t*.018),0,7),n.fill();r&&xi(n,0,0,t,e,r.int(1,99999),.5)}const os={exit:{level:0,text:"Exit"},in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},no:{level:0,text:"No way out"},red:{level:0,text:"Way out",bg:"#b3261e",fg:vn.white},blue:{level:1,text:"Way out",bg:vn.blue,fg:vn.white},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a",fg:vn.black},serif:{level:2,text:"Way out",font:"Georgia, 'Times New Roman', serif"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function ey(n,t,e=!1){const i=n?os[n]:null,r={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",s=i?i.text:"Way out";let o=e?" (yellow on black)":" (black on yellow)";if(i&&i.bg===vn.blue)o=" (white on blue)";else if(i&&i.bg==="#b3261e")o=" (white on red)";else if(i&&i.bg)o=" (black on pale green)";else if(i&&i.mirror)o=" (the lettering is back to front)";else{if(i&&i.arrow2)return`↔ ${s}`;i&&i.flipArrow?o=" (the arrow points the other way)":i&&i.font&&(o=" (the lettering has serifs)")}return t==="left"?`${r} ${s}${o}`:`${s} ${r}${o}`}function Oo(n,t,e,{dir:i="up",defect:r=null,inverted:s=!1}={}){const o=r?os[r]:{},a=o.bg||(s?vn.black:vn.yellow),l=o.fg||(s?vn.yellow:vn.black);n.fillStyle=a,n.fillRect(0,0,t,e);const c=n.createLinearGradient(0,0,0,e);c.addColorStop(0,"rgba(0,0,0,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0.10)"),c.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=$l("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const h=o.text||"Way out",u=e*.56,f=i!=="right",m=f?e*.52:t-e*.52,g=f?e*1:e*.3,_=f?t-e*.3:t-e*1;let d=i;o.flipArrow&&(d={left:"right",right:"left",up:"down"}[i]),Ml(n,m,e/2,u,d,l),o.arrow2&&Ml(n,m,e/2,u,{left:"right",right:"left",up:"down"}[i],l),n.fillStyle=l,n.textBaseline="middle",Ie(n,h,_-g,e*.62,o.font||_e),n.save(),o.mirror?(n.translate((g+_)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(h,0,e*.53)):(n.textAlign=f?"left":"right",n.fillText(h,f?g:_,e*.53)),n.restore()}function bh(n,t,e,i,r={}){n.fillStyle="#f7f6ee",n.fillRect(0,0,t,e),n.fillStyle="#2b2d2f",n.fillRect(0,0,t,Math.max(1,e*.07)),n.fillRect(0,e-Math.max(1,e*.07),t,Math.max(1,e*.07)),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(t-1,0,1,e);const s=r.arrow?e*2.7:0;n.fillStyle="#0019a8",n.textAlign="center",n.textBaseline="middle";try{n.letterSpacing=`${(e*.035).toFixed(1)}px`}catch{}Ie(n,i.toUpperCase(),(t-s)*.62,e*.56,_e),n.fillText(i.toUpperCase(),(t-s)*.5,e*.53);try{n.letterSpacing="0px"}catch{}r.note&&(n.font=`400 ${e*.24}px ${De}`,n.textAlign="left",n.fillText(r.note,e*.3,e*.52)),r.arrow&&(n.save(),n.translate(t-s-e*.25,e*.2),Oo(n,s,e*.6,{dir:r.arrow,inverted:!0}),n.restore())}function ny(n,t,e,i,r){const o=e/7,a=o*3;n.fillStyle=r.grout,n.fillRect(0,0,t,e);for(let u=0;u<7;u++)for(let f=u%2?-a/2:0;f<t;f+=a)n.fillStyle=$l(r.ground,(u*7+Math.round(f/a)*13)%9/100-.05),n.fillRect(f+.5,u*o+.5,a-1,o-1);const l=`· ${i.toUpperCase().split(" ").join(" · ")} ·`;n.fillStyle=r.letter||r.skirt,n.textAlign="center",n.textBaseline="middle";const c=o*5*1.36;n.font=`700 ${c}px Georgia, 'Times New Roman', serif`;const h=n.measureText(l).width;n.save(),n.translate(t/2,e*.52),n.scale(Math.min(.86,t*.96/h),1),n.fillText(l,0,0),n.restore();for(let u=1;u<7;u++)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,u*o,t,1)}function zo(n,t,e,i,{bg:r=vn.blue,fg:s=vn.white,sub:o=""}={}){n.fillStyle=r,n.fillRect(0,0,t,e),n.strokeStyle=s,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=s,n.textAlign="center",n.textBaseline="middle",Ie(n,i,t*.84,e*(o?.4:.52),_e),n.fillText(i,t/2,e*(o?.38:.53)),o&&(Ie(n,o,t*.84,e*.22,De),n.fillText(o,t/2,e*.72))}function rf(n,t,e,i,r,s=null){n.fillStyle=r.ground,n.fillRect(0,0,t,e);const o=e/5;n.strokeStyle=r.grout,n.lineWidth=1;for(let c=0;c<t;c+=o*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=o)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=r.band,n.lineWidth=o*.55,n.strokeRect(o*.3,o*.3,t-o*.6,e-o*.6),n.fillStyle=r.skirt,n.textAlign="center",n.textBaseline="middle";const a=s?t*.6:t*.8;Ie(n,i,a,e*.42,_e);const l=s==="left"?t*.6:s==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),s){const c=s==="left"?t*.17:t*.83,h=s==="left"?-1:1;n.beginPath(),n.moveTo(c-h*e*.42,e*.5),n.lineTo(c+h*e*.05,e*.42),n.lineTo(c+h*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+h*e*.2,e*.5),n.lineTo(c-h*e*.02,e*.3),n.lineTo(c-h*e*.02,e*.7),n.closePath(),n.fill()}}const iy=[["Be kind to each other. It costs nothing, and the trains still run.","heart"],["Stand on the right, walk on the left – and smile!","smile"],["If it isn’t signed by one of us, we didn’t write it. Have a lovely day!","star","signed"],["Kindness is like the Northern line: it goes both ways.","train"],["Today’s forecast below ground: 100% chance of no rain.","sun"],["Our clocks only go one way. So do Mondays. Chin up!","sun","clock"],["Tea solves most things. Signal failures take a bit longer.","cup"],["You’re not late. You’re on a later version of on time.","smile"],["A chime that goes UP means it’s one of us talking. Always nice to hear a friendly voice!","note","chime"],["Don’t let the escalator get you down. That’s only its job on one side.","smile"],["Lost your brolly? Baker Street. Lost your way? Follow the yellow and black signs.","brolly","yellow"],["Whoever you’re rushing for will wait. Walk, don’t run.","heart"],["Mind the gap between who you are and who you were before your first cuppa.","cup"],["Every stop north is one nearer fresh air. Keep going – you’re doing brilliantly.","train","line"],["Shortest journey on the network: one smile, platform to platform.","smile"]],ry=[["You’ve read this board before.","tally"],["Staff have gone home. Who wrote this?","query"],["Be kind to each other. There is only one of you.","heart"],["Stand on the right. Walk on the left. Don’t look behind.","eye"],["Smile! The cameras like it.","eye"],["This board is wiped clean every night. Tonight hasn’t finished yet.","tally"],["Yesterday’s thought is still underneath. It won’t rub out.","query"],["The date above is correct. It has been correct for some time.","tally"],["Thank you for not counting the stairs. (We know you did.)","smile"],["Don’t let the escalator get you down. Let it take you where it wants.","spiral"],["A clock going backwards is not trying to help you.","query","clock"]],sy=[["You.","eye"],["I have so many passages now. Stay and see them all.","spiral"],["No more thoughts today. Only walking.","tally"],["You wrote this. You’ll write it again tomorrow.","tally"],["The way out is a thought I had once.","spiral"],["Mind the gap. I do. I mind it very much.","eye"],["Please stop reading me.","eye"]],oy=["Dave","Maureen","Priya","Winston","Bev","Kofi","Tariq","Sue"],ay=["CSA","Station Supervisor","early turn","night turn","ticket hall"],ly=["Y.O.U.","a member of staff?","(unsigned)","you know who"],cy=["The Station","The Station","me","you"],ae={blue:"#1f3fae",black:"#1c1c22",red:"#c5281f",green:"#1d7a40"},Yr=["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"],Th=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],Eh=n=>`${n}${n%100>10&&n%100<14?"th":["th","st","nd","rd"][n%10]||"th"}`;function sf(n,t,e=new Date){const i=s=>`${Yr[s.getDay()]} ${Eh(s.getDate())} ${Th[s.getMonth()]}`,r=i(e);return n===0?r:n===1?t.pick([`${r} (again)`,`${r}, still`,`${Yr[e.getDay()]}? ${Eh(e.getDate())} ${Th[e.getMonth()]}`,i(new Date(e.getTime()-864e5))]):t.pick(["Today. Always today","No date",`${Yr[e.getDay()]} ${Yr[e.getDay()]} ${Yr[e.getDay()]}`])}function of(n,t){return n.chance(.2)?`Your ${t} team`:`${n.pick(oy)}, ${n.pick(ay)}`}function af(n,t){return n.head=n.head||t.toUpperCase(),n.caption=`${n.head} · ${n.date}
${n.title}: ${n.text}
— ${n.sign}`,n}function hy(n,t){const e=Math.min(.6,Math.max(0,t-2)*.3),i=Math.min(.7,t*.28);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function Zl(n,t,e={}){const i=t.wrong||0,r=t.station||"Mornington Crescent",s=e.cheery?0:hy(n,i),o=[iy,ry,sy][s],a=(t.stretch?t.stretch.id*4:0)+(t.idx||0),[l,c,h]=o[(He(t.gseed||1,77+s)+a)%o.length],u={tier:s,text:l,doodle:c,clue:h||null,title:"Thought for the day",date:sf(s,n),ink:s===2?ae.red:s===1?ae.black:n.pick([ae.blue,ae.blue,ae.black]),sign:s===0?of(n,r):n.pick(s===1?ly:cy)};return s===2&&n.chance(.4)&&(u.head="THIS STATION"),af(u,r)}const uy=[n=>`Way out today: ${n}-hand passage. Mind how you go!`,n=>`Lift’s out again – sorry! For the way out, keep ${n}.`,n=>`Works on tonight. The way out is by the ${n}-hand passage. Thanks for your patience!`],fy=[n=>`Way out today: ${n}. Trust me.`,n=>`Go ${n}. Everybody goes ${n}. Nobody has complained.`,n=>`The ${n}-hand passage has missed you. Come along.`],wh={signs:"Our signs are yellow and black and say “Way out”. Anything fancier isn’t one of ours!",announce:"If the chime goes down, don’t go with it. Wait for the one that goes UP.",clock:"Clocks here go forwards, like the rest of us. Don’t walk under one that doesn’t."};function lf(n,t,e){const i=t.wrong||0,r=t.station||"Mornington Crescent",s=n.chance(Math.min(.5,Math.max(0,i-.6)*.16)),o=!s&&n.chance(.35),a=o?-1:s?1-e.correct:e.correct,l=a===0?"left":"right",c={tier:s?2:0,clue:"junction",says:a,lie:s,title:o||s?"Thought for the day":"Today’s travel tip",text:o?wh[e.kind]||wh.signs:n.pick(s?fy:uy)(l),doodle:o?"star":l,date:sf(s?1:0,n),ink:s?ae.red:n.pick([ae.blue,ae.black]),sign:s?"The Station":of(n,r)};return af(c,r)}function jt(n,t,e,i,r,s=.5,o=!1){n.strokeStyle=i,n.lineWidth=r,n.lineCap="round",n.lineJoin="round",n.beginPath(),t.forEach(([a,l],c)=>{const h=a+e.range(-s,s),u=l+e.range(-s,s);c?n.lineTo(h,u):n.moveTo(h,u)}),o&&n.closePath(),n.stroke()}const fn=(n,t,e,i=e,r=0,s=Math.PI*2,o=14)=>{const a=[];for(let l=0;l<=o;l++){const c=r+(s-r)*l/o;a.push([n+Math.cos(c)*e,t+Math.sin(c)*i])}return a};function hr(n,t,e,i,r,s,o,{slope:a=0,bold:l=!1,align:c="left"}={}){n.fillStyle=s,n.textAlign="left",n.textBaseline="alphabetic",n.strokeStyle=s,n.lineJoin="round",n.lineWidth=r*(l?.075:.05);const h=String(t).split(" ").map(_=>{const d=r*o.range(.96,1.04);return n.font=`400 ${d}px ${xr}`,{word:_,s:d,w:n.measureText(_).width}}),u=r*.27,f=h.reduce((_,d)=>_+d.w,0)+u*(h.length-1);let m=c==="right"?e-f:c==="center"?e-f/2:e;const g=m;for(const _ of h)n.font=`400 ${_.s}px ${xr}`,n.save(),n.translate(m,i+(m-g)*a+o.range(-.035,.035)*r),n.rotate(a+o.range(-.03,.03)),n.fillText(_.word,0,0),n.strokeText(_.word,0,0),n.restore(),m+=_.w+u;return f}const cf={smile(n,t,e,i,r,s){jt(n,fn(t,e,i),s,r,i*.13,.4),jt(n,fn(t,e+i*.08,i*.55,i*.5,.25,Math.PI-.25,6),s,r,i*.13,.3);for(const o of[-1,1])jt(n,[[t+o*i*.34,e-i*.36],[t+o*i*.34,e-i*.2]],s,r,i*.16,.2)},heart(n,t,e,i,r,s){const o=[];for(let a=0;a<=18;a++){const l=a/18*Math.PI*2;o.push([t+i*.062*16*Math.sin(l)**3,e-i*.062*(13*Math.cos(l)-5*Math.cos(2*l)-2*Math.cos(3*l)-Math.cos(4*l))])}jt(n,o,s,ae.red,i*.14,.4)},star(n,t,e,i,r,s){const o=[];for(let a=0;a<=5;a++){const l=-Math.PI/2+a*(Math.PI*4/5);o.push([t+Math.cos(l)*i,e+Math.sin(l)*i])}jt(n,o,s,r,i*.12,.5)},sun(n,t,e,i,r,s){jt(n,fn(t,e,i*.5),s,ae.red,i*.13,.4);for(let o=0;o<8;o++){const a=o/8*Math.PI*2;jt(n,[[t+Math.cos(a)*i*.7,e+Math.sin(a)*i*.7],[t+Math.cos(a)*i,e+Math.sin(a)*i]],s,ae.red,i*.12,.4)}},cup(n,t,e,i,r,s){jt(n,[[t-i*.6,e-i*.15],[t-i*.48,e+i*.8],[t+i*.38,e+i*.8],[t+i*.5,e-i*.15]],s,r,i*.13,.4,!0),jt(n,fn(t+i*.55,e+i*.3,i*.3,i*.28,-1.3,1.3,6),s,r,i*.12,.3);for(const o of[-.25,.15])jt(n,[[t+i*o,e-i*.35],[t+i*(o+.14),e-i*.6],[t+i*o,e-i*.82],[t+i*(o+.12),e-i*1.05]],s,r,i*.09,.3)},train(n,t,e,i,r,s){jt(n,[[t-i*.7,e+i*.75],[t-i*.7,e-i*.35],[t-i*.35,e-i*.85],[t+i*.35,e-i*.85],[t+i*.7,e-i*.35],[t+i*.7,e+i*.75]],s,r,i*.12,.4,!0),jt(n,[[t-i*.18,e+i*.75],[t-i*.18,e-i*.5],[t+i*.18,e-i*.5],[t+i*.18,e+i*.75]],s,r,i*.09,.3);for(const o of[-1,1])jt(n,[[t+o*i*.3,e-i*.4],[t+o*i*.56,e-i*.4],[t+o*i*.56,e],[t+o*i*.3,e],[t+o*i*.3,e-i*.4]],s,r,i*.08,.3),jt(n,fn(t+o*i*.45,e+i*.42,i*.1),s,ae.red,i*.1,.2)},note(n,t,e,i,r,s){jt(n,fn(t-i*.35,e+i*.6,i*.28,i*.2),s,r,i*.2,.3),jt(n,[[t-i*.1,e+i*.6],[t-i*.1,e-i*.8],[t+i*.45,e-i*.45]],s,r,i*.13,.3),jt(n,[[t+i*.75,e+i*.5],[t+i*.75,e-i*.5]],s,ae.red,i*.12,.3),jt(n,[[t+i*.5,e-i*.2],[t+i*.75,e-i*.55],[t+i,e-i*.2]],s,ae.red,i*.12,.3)},brolly(n,t,e,i,r,s){jt(n,[...fn(t,e-i*.1,i*.9,i*.75,Math.PI,Math.PI*2,9),[t-i*.9,e-i*.1]],s,r,i*.12,.4),jt(n,[[t,e-i*.1],[t,e+i*.7],[t-i*.12,e+i*.9],[t-i*.3,e+i*.75]],s,r,i*.12,.3)},tally(n,t,e,i,r,s){for(let o=0;o<2;o++){const a=t-i*.95+o*i*1.15;for(let l=0;l<4;l++)jt(n,[[a+l*i*.2,e-i*.6],[a+l*i*.2,e+i*.6]],s,r,i*.1,.6);jt(n,[[a-i*.15,e+i*.4],[a+i*.75,e-i*.4]],s,r,i*.1,.6)}},query(n,t,e,i,r,s){jt(n,[...fn(t,e-i*.4,i*.42,i*.42,Math.PI,Math.PI*2.45,8),[t,e+i*.25]],s,r,i*.15,.4),jt(n,[[t,e+i*.7],[t,e+i*.74]],s,r,i*.2,.2)},eye(n,t,e,i,r,s){jt(n,[...fn(t,e+i*.5,i,i*.95,Math.PI*1.17,Math.PI*1.83,7),...fn(t,e-i*.5,i,i*.95,Math.PI*.17,Math.PI*.83,7)],s,r,i*.11,.3,!0),jt(n,fn(t,e,i*.3),s,r,i*.12,.2),jt(n,[[t,e-.5],[t,e+.5]],s,r,i*.26,.1)},spiral(n,t,e,i,r,s){const o=[];for(let a=0;a<=40;a++){const l=a*.42,c=i*a/40;o.push([t+Math.cos(l)*c,e+Math.sin(l)*c])}jt(n,o,s,r,i*.1,.3)},left(n,t,e,i,r,s){cf.right(n,t,e,-i,r,s)},right(n,t,e,i,r,s){const o=Math.abs(i)*.2;jt(n,[[t-i,e],[t+i*.9,e]],s,r,o,.5),jt(n,[[t+i*.35,e-Math.abs(i)*.55],[t+i,e],[t+i*.35,e+Math.abs(i)*.55]],s,r,o,.5)}};function hf(n,t,e,i,r){const s=Math.max(3,e*.034),o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"#c9cdd0"),o.addColorStop(.5,"#a9aeb2"),o.addColorStop(1,"#8d9296"),n.fillStyle=o,n.fillRect(0,0,t,e),n.fillStyle="#4b4f53";for(const[D,I]of[[0,0],[t-s*1.5,0],[0,e-s*1.5],[t-s*1.5,e-s*1.5]])n.fillRect(D,I,s*1.5,s*1.5);n.fillStyle="#f7f7f3",n.fillRect(s,s,t-2*s,e-2*s),n.save(),n.beginPath(),n.rect(s,s,t-2*s,e-2*s),n.clip();for(let D=0;D<5;D++){const I=e*r.range(.3,.85),N=t*r.range(.05,.5);jt(n,[[N,I],[N+t*r.range(.2,.45),I+e*r.range(-.06,.06)]],r,`rgba(40,60,140,${r.range(.025,.05)})`,e*r.range(.05,.11),2)}i.tier>0&&hr(n,"Be kind to each other",t*.1,e*.62,e*.13,"rgba(30,45,110,0.11)",r,{slope:-.03});const a=i.head||"";let l=e*.125;n.font=`400 ${l}px ${xr}`;const c=n.measureText(a).width+l*.4*a.split(" ").length;c>t*.84&&(l*=t*.84/c);const h=hr(n,a,t/2,s+e*.135,l,ae.black,r,{bold:!0,align:"center"});jt(n,[[t/2-h/2-2,s+e*.16],[t/2,s+e*.168],[t/2+h/2+2,s+e*.158]],r,ae.black,Math.max(1,e*.011),.5);const u=e*.088,f=s+e*.27,m=hr(n,i.title||"Thought for the day",t*.07,f,u,i.tier===2?ae.black:ae.red,r,{bold:!0}),g=[];for(let D=0;D<=m;D+=u*.45)g.push([t*.07+D,f+u*.2+(g.length%2?1:-1)*u*.05]);jt(n,g,r,i.tier===2?ae.black:ae.red,Math.max(1,e*.008),.3);let _=e*.07;n.font=`400 ${_}px ${xr}`;const d=t*.93-(t*.07+m)-u*.6,p=n.measureText(i.date||"").width*1.12;p>d&&(_*=Math.max(.6,d/p)),hr(n,i.date||"",t*.935,f,_,ae.blue,r,{align:"right"});const y=s+e*.33,v=e*.8,x=t*.84;let R=e*(i.text.length<14?.24:.15),b;for(;n.font=`400 ${R*1.05}px ${xr}`,b=Mi(n,i.text,x),!(b.length*R*1.08<=v-y||R<6);)R*=.94;const T=Math.min(R*1.22,(v-y)/b.length),C=y+(v-y-T*b.length)/2+R*.82;b.forEach((D,I)=>hr(n,D,t*.08+r.range(0,t*.015),C+I*T,R,i.ink||ae.blue,r,{slope:r.range(-.012,.012)}));let S=e*.085;n.font=`400 ${S}px ${xr}`;const M=n.measureText(`– ${i.sign}`).width*1.15;M>t*.6&&(S*=t*.6/M),hr(n,`– ${i.sign}`,t*.93,e*.925,S,i.tier===2?ae.red:i.ink===ae.black?ae.blue:ae.black,r,{slope:-.04,align:"right"});const A=cf[i.doodle];A&&A(n,t*.15,e*.875,e*.058,i.tier===2?ae.red:ae.green,r),n.restore(),n.strokeStyle="rgba(60,64,68,0.55)",n.lineWidth=1,n.strokeRect(s-.5,s-.5,t-2*s+1,e-2*s+1),xi(n,s,s,t-2*s,e-2*s,r.int(1,99999),.22,!1)}const bl=[240,180],ki={tint:[.9,.92,.95]},uf=[[.14,.22,.78],[.82,.13,.1],[.09,.09,.11]],ff={tint:[.9,.9,.9]};function ti(n){return n.rng2||(n.rng2=new Se(He(n.node?n.node.seed:1,4242)))}function df(n,t){return{...n,r:4.6,label:"read whiteboard",title:"STAFF WHITEBOARD",text:t.caption,board:{tier:t.tier,clue:t.clue,says:t.says??-1,lie:!!t.lie}}}const Kl=(n,t)=>n.sheet.add(bl[0],bl[1],(e,i,r)=>hf(e,i,r,t,ti(n)));function dy(n,t,e,i,r){const{b:s}=n,o=1,a=.75,l=.84,c=Kl(n,r),[h,,u]=de(t,0,0);s.place(h,t.y,u,t.yaw);const f=e*(i-.05),m=e*(i+.03),g=e>0?-o/2:o/2;s.quad("sheet",[f,l,g],[f,l,-g],[f,l+a,-g],[f,l+a,g],[-e,0,0],c,ff);const _=Jt("metal"),d=e>0?"x":"X";s.box("atlas",Math.min(f,m),l,-o/2,Math.max(f,m),l+a,o/2,_,ki,"yYzZ");const p=e*(i-.125);s.box("atlas",Math.min(p,m),l-.045,-o*.4,Math.max(p,m),l-.015,o*.4,_,ki,`yYzZ${d}`);const y=e*(i-.09);uf.forEach((x,R)=>{const b=-.3+R*.17+(R===2?.16:0);s.box("atlas",y-.011,l-.015,b,y+.011,l+.007,b+.125,Jt("white"),{tint:x},"xXYzZ")}),s.setXf(null);const v=de(t,f,l+a/2);return df({x:v[0],y:v[1],z:v[2],n:[-e*Math.cos(t.yaw),e*Math.sin(t.yaw)]},r)}function Ah(n,t,e,i,r,s){for(const[o,a]of[[-1,0],[1,0],[0,-1],[0,1]]){const l=a!==0?i:0,c=o!==0?i:0,h=(u,f)=>[u[0]+o*i+f*l,u[1],u[2]+a*i+f*c];n.quad("atlas",h(t,-1),h(t,1),h(e,1),h(e,-1),[o,0,a],r,s)}}function pf(n,t,e,i,r,s=0,o=null){const{b:a}=n,l=.9,c=.675,h=.9,u=.2,f=o||Kl(n,r),m=A=>-.22+(A-h)*u,g=h+c*.98,_=m(h),d=m(g);a.place(t,s,e,i),a.quad("sheet",[l/2,h,_],[-l/2,h,_],[-l/2,g,d],[l/2,g,d],[0,u,-.98],f,ff);const p=Jt("metal"),y=Jt("signBack"),v=.016;a.quad("atlas",[-l/2,h,_+v],[l/2,h,_+v],[l/2,g,d+v],[-l/2,g,d+v],[0,-u,.98],y),a.quad("atlas",[-l/2,g,d],[l/2,g,d],[l/2,g,d+v],[-l/2,g,d+v],[0,1,0],p,ki);for(const A of[-1,1])a.quad("atlas",[A*l/2,h,_],[A*l/2,h,_+v],[A*l/2,g,d+v],[A*l/2,g,d],[A,0,0],p,ki),Ah(a,[A*.37,0,m(0)+.045],[A*.37,1.64,m(1.64)+.045],.016,p,ki);Ah(a,[0,1.5,m(1.5)+.06],[0,0,.38],.016,p,ki),a.box("atlas",-l*.47,h-.03,_-.085,l*.47,h,_+.02,p,ki,"xXyYzZ"),uf.forEach((A,D)=>{const I=-.3+D*.17+(D===2?.2:0);a.box("atlas",I,h,_-.07,I+.125,h+.022,_-.048,Jt("white"),{tint:A},"xXYzZ")}),a.setXf(null);const x=Math.cos(i),R=Math.sin(i),b=(A,D)=>[t+A*x+D*R,e-A*R+D*x],[T,C]=b(0,(_+d)/2),S=[b(-.45,-.43),b(.45,-.43),b(.45,.4),b(-.45,.4)],M=S.map((A,D)=>[...A,...S[(D+1)%4]]);return{item:df({x:T,y:s+(h+g)/2,z:C,n:[-R,-x]},r),walls:M}}const Rh={northern:"#000000",bakerloo:"#b36305",central:"#e32017",circle:"#ffd300",district:"#00782a",hammersmith:"#f3a9bb",jubilee:"#a0a5a9",metropolitan:"#9b0056",piccadilly:"#003688",victoria:"#0098d4",waterloo:"#95cdba",elizabeth:"#6950a1",dlr:"#00a4a7",rail:"#e1251b"},Ch={northern:"Northern",bakerloo:"Bakerloo",central:"Central",circle:"Circle",district:"District",hammersmith:"Hammersmith & City",jubilee:"Jubilee",metropolitan:"Metropolitan",piccadilly:"Piccadilly",victoria:"Victoria",waterloo:"Waterloo & City",elizabeth:"Elizabeth line",dlr:"DLR",rail:"National Rail"},mf={edgware:["Edgware","Burnt Oak","Colindale","Hendon Central","Brent Cross","Golders Green","Hampstead","Belsize Park","Chalk Farm"],barnet:["High Barnet","Totteridge & Whetstone","Woodside Park","West Finchley","Finchley Central","East Finchley","Highgate","Archway","Tufnell Park","Kentish Town"],charingX:["Mornington Crescent","Euston","Warren Street","Goodge Street","Tottenham Court Road","Leicester Square","Charing Cross","Embankment","Waterloo"],bank:["Euston","King's Cross St. Pancras","Angel","Old Street","Moorgate","Bank","London Bridge","Borough","Elephant & Castle"],morden:["Oval","Stockwell","Clapham North","Clapham Common","Clapham South","Balham","Tooting Bec","Tooting Broadway","Colliers Wood","South Wimbledon","Morden"],battersea:["Nine Elms","Battersea Power Station"]},yo={at:"Finchley Central",name:"Mill Hill East"},Bo={Euston:["victoria","rail"],"Warren Street":["victoria"],"Tottenham Court Road":["central","elizabeth"],"Leicester Square":["piccadilly"],"Charing Cross":["bakerloo","rail"],Embankment:["bakerloo","circle","district"],Waterloo:["bakerloo","jubilee","waterloo","rail"],"King's Cross St. Pancras":["circle","hammersmith","metropolitan","piccadilly","victoria","rail"],"Old Street":["rail"],Moorgate:["circle","hammersmith","metropolitan","elizabeth","rail"],Bank:["central","waterloo","dlr"],"London Bridge":["jubilee","rail"],"Elephant & Castle":["bakerloo","rail"],Stockwell:["victoria"],Balham:["rail"],"Kentish Town":["rail"]},Jl=[["North End","Golders Green","Hampstead"],["South Kentish Town","Kentish Town","Camden Town"],["City Road","Angel","Old Street"],["King William Street","Bank","London Bridge"]],Tl=["Mornington Crescent","Camden Town","Chalk Farm","Belsize Park","Hampstead"],py="Golders Green",xo={"Mornington Crescent":{theme:{id:"mornington",ground:"#ece4c4",band:"#1d2a5e",accent:"#1d2a5e",skirt:"#182250",grout:"#bdb596",letter:"#7a1f2b"}},"Camden Town":{theme:{id:"camden",ground:"#e9e6cf",band:"#5d86c5",accent:"#5d86c5",skirt:"#3f5f96",grout:"#b9b6a0",letter:"#27406f"}},"Chalk Farm":{theme:{id:"chalk",ground:"#ede6cd",band:"#9a1b24",accent:"#9a1b24",skirt:"#7a141c",grout:"#beb69c",letter:"#6f141c"}},"Belsize Park":{theme:{id:"belsize",ground:"#ebe3c6",band:"#4d2418",accent:"#4d2418",skirt:"#3d1c12",grout:"#bdb497",letter:"#3a160f"}},Hampstead:{tiled:"Heath Street",theme:{id:"hampstead",ground:"#ece2bd",band:"#a66f6a",accent:"#a66f6a",skirt:"#5a1820",grout:"#beb38f",letter:"#5a1820"}},"Golders Green":{theme:{id:"golders",ground:"#eee9d6",band:"#2a5a3c",accent:"#2a5a3c",skirt:"#1f4530",grout:"#bfbaa6",letter:"#1f4530"}}},my=n=>n>=Tl.length?py:Tl[Math.max(0,n)],gf=n=>(xo[n]||xo["Mornington Crescent"]).theme,gy=n=>xo[n]&&xo[n].tiled||n,qi=n=>n==="north"?1:2,Fr=n=>n==="north"?"Northbound":"Southbound",El="#16213f",_y="#1c3f94",vy="#f6f6f1";function yy(n){let t=0;for(const e of n)t+=e.type==="trunk"?e.stations.length:Math.max(e.left.length,e.right.length)+(e.rejoin?1:0)+(e.spur?.6:0);return t}function xy(n,t,e,i,r,s,o,a){const l=Bo[t];if(!l)return;let c=e;for(const h of l.slice(0,5)){const u=h==="rail"?s*1.5:s*2,f=s*.62,m=r<0?c-u:c;if(m<o||m+u>a)break;h==="rail"?(n.strokeStyle=Rh.rail,n.lineWidth=Math.max(1,s*.2),n.lineJoin="miter",n.beginPath(),n.moveTo(m,i-f*.42),n.lineTo(m+u,i-f*.42),n.lineTo(m,i+f*.42),n.lineTo(m+u,i+f*.42),n.stroke()):(n.fillStyle=Rh[h],n.fillRect(m,i-f/2,u,f)),c+=r*(u+s*.45)}}function Ta(n,t,e,i,r,s,o={}){const a=Math.max(2,s*.42),l=!!Bo[t]||o.circle;n.strokeStyle="#000",n.fillStyle="#000",n.lineWidth=a,o.terminus&&(n.beginPath(),n.moveTo(e-s*.7,i),n.lineTo(e+s*.7,i),n.stroke()),l?(n.fillStyle="#fff",n.beginPath(),n.arc(e,i,s*.55,0,7),n.fill(),n.lineWidth=Math.max(1.5,s*.26),n.beginPath(),n.arc(e,i,s*.55,0,7),n.stroke()):o.terminus||(n.beginPath(),n.moveTo(e,i),n.lineTo(e+r*s*.85,i),n.stroke());const c=e+r*s*1.35;n.textAlign=r<0?"right":"left",n.textBaseline="middle";let h=[t];if(t.length>17&&t.includes(" ")){const _=t.split(" ");let d=1,p=1/0;for(let y=1;y<_.length;y++){const v=Math.abs(_.slice(0,y).join(" ").length-_.slice(y).join(" ").length);v<p&&(p=v,d=y)}h=[_.slice(0,d).join(" "),_.slice(d).join(" ")]}let u=s*(h.length>1?1:1.18);const f=(o.room||1e9)-s*1.5;n.font=`400 ${u}px ${_e}`;let m=Math.max(...h.map(_=>n.measureText(_).width));m>f&&(u*=f/m,n.font=`400 ${u}px ${_e}`,m=f);const g=h.length>1?u*.52:0;if(o.current){const _=r<0?c-m-s*.5:c-s*.5,d=h.length>1?s*2.5:s*1.8;n.fillStyle=_y,n.fillRect(_,i-d/2,m+s,d),n.fillStyle="#fff"}else n.fillStyle=o.odd?"#5a0d14":El;o.current&&o.blank||h.forEach((_,d)=>n.fillText(_,c,i+s*.06+(h.length>1?d?g:-g:0))),xy(n,t,c+r*(m+s*(o.current?1.1:.7)),i,r,s,o.lo??-1e9,o.hi??1e9)}function Ql(n,t,e,i,r={}){n.fillStyle=vy,n.fillRect(0,0,t,e);const s=Math.max(3,t*.022);n.strokeStyle="#5f6467",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const o=t*.075;n.fillStyle=El,n.textAlign="left",n.textBaseline="alphabetic",n.font=`400 ${e*.03}px ${De}`,n.fillText("Northern line",o,e*.052),Ie(n,`${Fr(r.dir)} platform ${qi(r.dir)}`,t-o*2,e*.047,_e),n.fillText(`${Fr(r.dir)} platform ${qi(r.dir)}`,o,e*.102),n.strokeStyle="#9aa0a3",n.lineWidth=Math.max(1,e*.003),n.beginPath(),n.moveTo(o,e*.128),n.lineTo(t-o,e*.128),n.stroke();const a=e*.17,l=e*.965,c=yy(i),h=Math.min(e*.052,(l-a)/Math.max(1,c)),u=Math.min(h*.6,t*.03),f=t*.37,m=t*.57,g=f-t*.05,_=t*.95-m,d=Math.max(2,u*.42),p=b=>{n.strokeStyle="#000",n.lineWidth=d,n.lineJoin="round",n.lineCap="butt",n.beginPath(),b.forEach((T,C)=>C?n.lineTo(T[0],T[1]):n.moveTo(T[0],T[1])),n.stroke()},y=r.odd||new Set;let v=a+h*.5,x=!0;const R=i.length===1;i.forEach((b,T)=>{const C=i[T+1];if(b.type==="trunk"){const S=R||T>0?1:-1,M=i[T-1],A=M&&M.rejoin?v-h:v,D=v+h*(b.stations.length-1);p([[f,A],[f,C?D+h*.5:D]]),b.stations.forEach((I,N)=>{const L=x&&N===0;Ta(n,I,f,v,S,u,{current:L,blank:L&&b.hideCurrent,circle:L,terminus:!C&&N===b.stations.length-1,odd:y.has(I),room:S<0?g:t*.95-f,lo:t*.045,hi:t*.955}),v+=h}),x=!1}else{const S=Math.max(b.left.length,b.right.length),M=v-h*.5,A=v+h*(S-1),D=v+h*(b.left.length-1),I=v+h*(b.right.length-1);if(p([[f,M],[f,b.rejoin?A+h:D]]),p([[f,M],[f+u*.8,M+h*.12],[m-u*.8,M+h*.12],[m,M+h*.45],[m,b.rejoin?A+h*.45:I]]),b.rejoin&&p([[m,A+h*.45],[m-u*.8,A+h*.82],[f+u*.8,A+h*.82],[f,A+h]]),b.left.forEach((N,L)=>Ta(n,N,f,v+h*L,-1,u,{terminus:!b.rejoin&&L===b.left.length-1,odd:y.has(N),room:g,lo:t*.045,hi:t*.955})),b.right.forEach((N,L)=>Ta(n,N,m,v+h*L,1,u,{terminus:!b.rejoin&&L===b.right.length-1,odd:y.has(N),room:_,lo:t*.045,hi:t*.955})),b.spur&&b.left.includes(b.spur.at)){const N=v+h*b.left.indexOf(b.spur.at),L=(f+m)/2;p([[f,N+h*.5],[L-u*.6,N+h*.5],[L,N+h*.68],[L,N+h*1]]),p([[L-u*.7,N+h*1],[L+u*.7,N+h*1]]),n.fillStyle=El,n.textAlign="center",n.textBaseline="top",n.font=`400 ${u*.95}px ${_e}`,b.spur.name.replace(" East",`
East`).split(`
`).forEach((B,q)=>n.fillText(B,L,N+h*1.12+q*u*1.05))}v=A+h*(b.rejoin?2:1)}})}const{edgware:Mr,barnet:_f,charingX:Ar,bank:vf,morden:yf,battersea:xf}=mf,as=n=>n.slice().reverse(),Ea=[{type:"trunk",stations:["Kennington"]},{type:"split",left:yf,right:xf,rejoin:!1,labels:["to Morden","to Battersea Power Station"]}],Ph={type:"split",left:Ar,right:vf,rejoin:!0,labels:["via Charing Cross","via Bank"]},My={type:"split",left:as(_f),right:as(Mr),rejoin:!1,labels:["High Barnet branch","Edgware branch"],spur:yo};function bs(n,t){const e=Mr.indexOf(n),i=Ar.indexOf(n),r=o=>({...o,left:o.left&&o.left.slice(),right:o.right&&o.right.slice(),stations:o.stations&&o.stations.slice()});let s;return t==="north"?e>=0?s=[{type:"trunk",stations:as(Mr.slice(0,e+1))}]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town",...as(Mr)]}]:s=[{type:"trunk",stations:[...as(Ar.slice(0,Math.max(0,i)+1)),"Camden Town"]},My]:e>=0?s=[{type:"trunk",stations:[...Mr.slice(e),"Camden Town"]},Ph,...Ea]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town"]},Ph,...Ea]:s=[{type:"trunk",stations:[...Ar.slice(Math.max(0,i)),"Kennington"]},Ea[1]],s.map(r)}function Sy(n,t){const e=Ar.includes(n);return t==="north"?e?[["Edgware",""],["High Barnet",""],["Edgware",""],["Mill Hill East",""]]:[["Edgware",""],["Edgware",""],["Golders Green",""]]:e?[["Battersea Power Station",""],["Kennington",""],["Morden",""]]:[["Morden","via Bank"],["Kennington","via Charing Cross"],["Battersea Power Station","via Charing Cross"],["Morden","via Bank"]]}function Mf(n,t,e=""){const i=bs(n,t);if(i[0].stations.length>1)return i[0].stations[1];const r=i[1];return r?t==="north"?e==="High Barnet"?r.left[0]:r.right[0]:e==="via Bank"?r.right[0]:r.left[0]:null}const by=n=>{const t=Bo[n];if(!t)return"";const e=t.map(i=>i==="rail"?"National Rail services":i==="dlr"||i==="elizabeth"?`the ${Ch[i]}`:`the ${Ch[i]} line`);return`Change here for ${e.length>1?`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`:e[0]}.`};function Ty(n,t){const e=[],i=r=>{r&&r!==n&&!e.includes(r)&&e.push(r)};return bs(n,t).forEach((r,s)=>{r.type==="trunk"?(s===0&&i(r.stations[1]),i(r.stations[r.stations.length-1])):r.rejoin?r.labels.forEach(o=>i(o.replace("via ",""))):(i(r.left[r.left.length-1]),i(r.right[r.right.length-1]))}),e}function Ey(n,t,e=""){return n==="Camden Town"?t==="north"?"Change here for the High Barnet branch.":e==="via Bank"?"Change here for trains via Charing Cross.":"Change here for trains via Bank.":by(n)}function wy(n,t,e,i=""){const r=Mf(n,t,i||e)||n,s=Ey(n,t,i);return`This is ${n}. ${s?`${s} `:""}This is a Northern line train to ${e}${i?` ${i}`:""}. The next station is ${r}. The doors will not open at this station.`}const Ay=n=>`This is ${n}. The next station is ${n}. The doors will not open at this station.`;function Mo(n,t,e){const i=[];if(n.forEach((r,s)=>{if(r.type==="trunk")i.push({arr:r.stations,prev:null,si:s});else{const o=n[s-1]?n[s-1].stations[n[s-1].stations.length-1]:null;i.push({arr:r.left,prev:o,si:s},{arr:r.right,prev:o,si:s})}}),t==="ghost"){for(const[r,s,o]of e.shuffle(Jl))for(const{arr:a,prev:l}of i)for(let c=0;c<a.length;c++){const h=c===0?l:a[c-1];if(h===s&&a[c]===o||h===o&&a[c]===s)return a.splice(c,0,r),"ghost"}return null}if(t==="swap"){const r=i.filter(a=>a.arr.length>=4);if(!r.length)return null;const{arr:s}=e.pick(r),o=e.int(1,s.length-3);return[s[o],s[o+1]]=[s[o+1],s[o]],"swap"}if(t==="repeat"){const r=n[0].stations;for(let s=1;s<Math.min(4,r.length);s++)r[s]=r[0];return r.length>1?"repeat":null}return t==="missing"?(n[0].hideCurrent=!0,"missing"):null}function Sf(n,t,e){const i=s=>s.join(", "),r=[`Northern line. ${Fr(t)} platform ${qi(t)}.`];return e.forEach((s,o)=>{if(s.type==="trunk"){const a=o===0?s.stations.slice(1):s.stations;o===0&&r.push(s.hideCurrent?"This station: (the box is blank).":`This station: ${s.stations[0]}.`),a.length&&r.push(`${o===0?"Then":"Then on to"} ${i(a)}.`)}else{let a=i(s.left);s.spur&&s.left.includes(s.spur.at)&&(a+=` (and ${s.spur.name}, from ${s.spur.at})`);const l=c=>c[0].toUpperCase()+c.slice(1);r.push(`${l(s.labels[0])}: ${a}. ${l(s.labels[1])}: ${i(s.right)}.`)}}),r.join(" ")}function Ry(n,t=[]){const e=r=>r.join(", "),i=t.length?` Also marked: ${e(t.map(r=>r[0]))}.`:"";return`Northern line. You are here: ${n}. Edgware branch: ${e(Mr)}. High Barnet branch: ${e(_f)} (and ${yo.name}). Then Camden Town. Via Charing Cross: ${e(Ar)}. Via Bank: ${e(vf)}. Then Kennington. To Morden: ${e(yf)}. To Battersea Power Station: ${e(xf)}.${i}`}const Zn=Ut.W/2;function bf(n){const t=n.env.seenNotices||new Set,e=Sh.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:Sh)}const wl=3,So={diagram:[200,300],notice:[168,216],board:bl,legend:[220,54],poster:[104,164]};function Cy(n,t,e,i,r=Zn){const{b:s,sheet:o,rng:a}=n,l=n.posterPool||(n.posterPool=[]);let c;if(l.length<(n.posterCap||wl)){const u=a.chance(Math.min(.7,(n.env.wrong||0)*.17));let f;c={uv:o.add(So.poster[0],So.poster[1],(g,_,d)=>{f=Ss(g,_,d,a,u)}),text:`${f.headline}. ${f.strap}.`},l.push(c)}else c=l[a.int(0,l.length-1)];const h=Si(s,"sheet",t,e,r,.52,.64,1,c.uv,null,.045);Wv(s,t,e,r-.01,.52,.64,1),i.push({...h,r:4.2,label:"read poster",title:"POSTER",text:c.text})}function Dh(n,t,e,i,r=Zn){const{b:s,sheet:o,rng:a}=n,l=bf(n),c=o.add(168,216,(u,f,m)=>nf(u,f,m,l,a)),h=Si(s,"sheet",t,e,r,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...h,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:u=>u.story.noticeRead(l.key)})}function Lh(n,t,e,i,r=Zn){i.push(dy(n,t,e,r,Zl(ti(n),n.env)))}const wa=.95,Js=2,Ih=.25;function Py(n,t,e){const{b:i}=n;Si(i,"atlas",t,e,Zn-Ih+.03,0,wa,Js,Xt("door"),null,.03);const r=Jt("steelDark"),[s,,o]=de(t,0,0);i.place(s,t.y,o,t.yaw);const a=e*Zn,l=e*(Zn-Ih),c=.06,h=-wa/2-c,u=wa/2+c,f=Js+c;i.quad("atlas",[l,0,h],[l,0,h+c],[l,f,h+c],[l,f,h],[-e,0,0],r),i.quad("atlas",[l,0,u-c],[l,0,u],[l,f,u],[l,f,u-c],[-e,0,0],r),i.quad("atlas",[l,Js,h],[l,Js,u],[l,f,u],[l,f,h],[-e,0,0],r),i.quad("atlas",[a,0,h],[l,0,h],[l,f,h],[a,f,h],[0,0,-1],r),i.quad("atlas",[l,0,u],[a,0,u],[a,f,u],[l,f,u],[0,0,1],r),i.quad("atlas",[a,f,h],[l,f,h],[l,f,u],[a,f,u],[0,1,0],r),i.setXf(null)}function Uh(n,t,e,i,r,s,o){Si(n.b,i==="extinguisher"?"cut":"atlas",t,e,Zn,r,s,o,Xt(i),null,.04)}function Dy(n,t,e,i){const{b:r,sheet:s,rng:o}=n,a=o.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=s.add(220,54,(h,u,f)=>rf(h,u,f,a,n.theme,null)),c=Si(r,"sheet",t,e,Zn,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:a})}function Ly(n,t,e,i,r,s,o,a,l=.04){const c=Ut.W/2,h=Ut.spring,u=Ut.crown-h,f=S=>{if(S<=h)return{X:c,nx:1,ny:0};const M=Math.min(1,(S-h)/u),A=c*Math.sqrt(1-M*M),D=A/(c*c),I=(S-h)/(u*u),N=Math.hypot(D,I)||1;return{X:A,nx:D/N,ny:I/N}},m=[],g=10,_=o/g;let d=r,p=0;m.push({y:d,...f(d)});for(let S=1;S<=g;S++){const M=_*S;for(;p<M;){const D=f(d),I=f(d+.005);p+=Math.hypot(I.X-D.X,.005),d+=.005}m.push({y:d,...f(d)})}const[y,,v]=de(e,0,0);n.place(y,e.y,v,e.yaw);const x=i>0?-s/2:s/2,R=-x,b=(S,M)=>[i*(S.X-l*S.nx),S.y-l*S.ny,M];for(let S=0;S<g;S++){const M=m[S],A=m[S+1],D=a[1]+(a[3]-a[1])*(S/g),I=a[1]+(a[3]-a[1])*((S+1)/g),N=[-i*(M.nx+A.nx)/2,-(M.ny+A.ny)/2,0];n.quad(t,b(M,x),b(M,R),b(A,R),b(A,x),N,[a[0],D,a[2],I])}n.setXf(null);const T=m[g>>1],C=de(e,i*(T.X-l),T.y);return{x:C[0],y:C[1],z:C[2]}}function Iy(n,t,e,i,r=Zn){const{b:s,sheet:o,rng:a,env:l}=n,c=a.chance(.5)?"north":"south",h=bs(l.station,c);a.chance(Math.min(.8,(l.wrong||0)*.2))&&Mo(h,a.pick(["ghost","ghost","swap","repeat"]),a);const u=o.add(200,300,(m,g,_)=>Ql(m,g,_,h,{station:l.station,dir:c})),f=Ly(s,"sheet",t,e,.6,.9,1.35,u,.04);i.push({...f,r:5,label:"read line diagram",title:"LINE DIAGRAM",text:Sf(l.station,c,h)})}const Uy=1.55,Nh={notice:.22,board:.4};function Ny(n,t,e){const{rng:i}=n,r=[],s=t.every(C=>Math.abs(C.yaw)<1e-6&&Math.abs(C.y-t[0].y)<1e-6),o=e[e.length-1]-e[0];if(!s||o<5.5)return r;const a=[];for(let C=2.2;C<=o-2.2;C+=Uy)a.push(C);let l=!1,c=!1,h=!1,u=!1;const f=[],m=[],g=(C,S,M,A,D)=>m.push({prio:C,fn:S,kind:M,f:A,side:D}),_={[-1]:new Set,1:new Set},d=(C,S)=>![S-1,S,S+1].some(M=>_[C].has(M))&&!_[-C].has(S),p=(C,S,M,A,D)=>{const I={x:0,y:0,z:a[S],yaw:0};_[C].add(S),g(M,()=>D(n,I,C,r),A,I,C)},y=i.chance(n.env.noticeChance??Nh.notice),v=ti(n).chance(n.env.boardChance??Nh.board),x=ti(n);for(const C of[-1,1])for(let S=0;S<a.length;S++){const M=a[S],A={x:0,y:0,z:M,yaw:0},D=i.next(),I=d(C,S);if(I&&y&&!l&&D<.3){p(C,S,1,"notice",Dh),l=!0;continue}if(I&&D<.1&&!h){p(C,S,0,"diagram",Iy),h=!0;continue}D<.5?I?p(C,S,4,"poster",Cy):f.push([C,S]):D<.56&&M>3&&M<o-3?g(5,()=>Py(n,A,C)):D<.62?I&&v&&!u?(p(C,S,2,"board",Lh),u=!0):f.push([C,S]):D<.67&&I&&!c&&M<o-3?(p(C,S,3,"legend",Dy),c=!0):D<.72?g(5,()=>Uh(n,A,C,"grille",.25,.5,.5)):D<.76?g(5,()=>Uh(n,A,C,"extinguisher",.75,.45,.45)):f.push([C,S])}const R=(C,S,M,A)=>{const D=f.filter(([N,L])=>d(N,L)),I=m.filter(N=>N.kind==="poster");if(D.length){const N=D[A(D.length)];f.splice(f.indexOf(N),1),p(N[0],N[1],C,S,M)}else if(I.length){const N=I[A(I.length)];N.prio=C,N.kind=S,N.fn=()=>M(n,N.f,N.side,r)}};y&&!l&&R(1,"notice",Dh,C=>i.int(0,C-1)),v&&!u&&R(2,"board",Lh,C=>x.int(0,C-1)),m.sort((C,S)=>C.prio-S.prio);const b=m.filter(C=>C.kind&&C.kind!=="poster").map(C=>So[C.kind]),T=n.sheet.room(b.concat(Array(wl).fill(So.poster)))-b.length;n.posterCap=Math.max(1,Math.min(wl,T));for(const C of m)C.fn();return r}function Fy(n,t,e){return n.sheet?Ny(n,t,e):[]}const wn=.5;function ky(n,t=3.4,e=40){const{b:i}=n,r=Ut.W/2+.1,s=Ut.crown+.1,o={emit:0};i.quad("gate",[-r,0,.06],[r,0,.06],[r,s,.06],[-r,s,.06],[0,0,1],Jt("blackout"),o);const a=Xt("gate"),l={emit:.34};for(const[c,h]of[[-r,0],[0,r]])i.quad("gate",[c,0,wn],[h,0,wn],[h,s,wn],[c,s,wn],[0,0,1],a,l);return i.box("gate",-.035,0,wn-.02,.035,s,wn+.03,Jt("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,wn+.03,.09,1.16,wn+.07,Jt("metal"),{emit:.5},"xXyYZ"),{x0:-r,x1:r,z0:t,z1:e,gate:!0,fire:(c,h)=>c.director.commit(h)}}const Fh=[-(Ut.W/2+.2),wn+.25,Ut.W/2+.2,wn+.25];function Tf(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function Ef(n,t){const{b:e,p:i}=n,r=vi(e,t,Ut,{floor:Xt("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const s=t[t.length-1];e.addPortal(s.x,s.y,s.z,s.yaw),bi(e,t[0],Ut.crown),ef(e,t,r.dist,Ut.crown,i.lights);const o=Fy(n,t,r.dist),a={};return n.env.gate&&(a.zones=[ky(n,3.4,r.length+1)]),{cells:r.cells,walls:r.walls,items:o,frames:t,extra:a}}const Oy={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:Tf(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return Ef(n,Fv(n.p.len,1))}},Di=4.5,zy={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:Tf(n,t)},exits:[{x:e*Di,y:0,z:Di,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,Di,3.3,Di+1.9]:[-Di,-.4,0,1.9,3.3,Di+1.9]}},build(n){return Ef(n,kv(Di,n.p.dir*Math.PI/2,.9))}},jr=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function By(n,t,e,i){const r=n.x-i.x,s=n.y-i.y,o=t.x-i.x,a=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(r*r+s*s)*(o*c-l*a)-(o*o+a*a)*(r*c-l*s)+(l*l+c*c)*(r*a-o*s)}function Hy(n,t,e=60){const i=n.length,r=t.map(([s,o,a])=>jr(n[s],n[o],n[a])>=0?[s,o,a]:[s,a,o]).filter(([s,o,a])=>Math.abs(jr(n[s],n[o],n[a]))>1e-12);for(let s=0;s<e;s++){const o=new Map;r.forEach((c,h)=>{for(let u=0;u<3;u++){const f=c[u],m=c[(u+1)%3],g=f<m?f*i+m:m*i+f,_=o.get(g);_?_.push(h):o.set(g,[h])}});const a=new Set;let l=0;for(const[c,h]of o){if(h.length!==2||a.has(h[0])||a.has(h[1]))continue;const u=Math.floor(c/i),f=c%i,m=r[h[0]],g=r[h[1]],_=m.find(v=>v!==u&&v!==f),d=g.find(v=>v!==u&&v!==f),[p,y]=jr(n[u],n[f],n[_])>0?[u,f]:[f,u];By(n[p],n[y],n[_],n[d])<=1e-10||jr(n[_],n[p],n[d])<=1e-12||jr(n[d],n[y],n[_])<=1e-12||(r[h[0]]=[_,p,d],r[h[1]]=[d,y,_],a.add(h[0]),a.add(h[1]),l++)}if(!l)break}return r}function Gy(n,t,e){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r],a=n[s];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function Vy(n,t,e){let i=1/0;for(let r=0,s=n.length-1;r<n.length;s=r++){const o=n[r],a=n[s],l=a.x-o.x,c=a.y-o.y,h=l*l+c*c;let u=h>0?((t-o.x)*l+(e-o.y)*c)/h:0;u=u<0?0:u>1?1:u,i=Math.min(i,Math.hypot(t-(o.x+l*u),e-(o.y+c*u)))}return i}function wf(n,t,e,i,r=[]){const s=[{x:n,y:e}];for(const o of r.slice().sort((a,l)=>a[0].x-l[0].x)){s.push({x:o[0].x,y:e});for(const a of o)a.y>e+1e-6&&s.push({x:a.x,y:a.y});s.push({x:o[o.length-1].x,y:e})}return s.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),s.filter((o,a)=>a===0||Math.hypot(o.x-s[a-1].x,o.y-s[a-1].y)>1e-6)}function Af(n,t,e,i,r={}){const s=r.layer||"tile",o=r.uv||((d,p)=>[d/6,.004+Math.max(0,p)/3.63*.992]),a=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=r.grid??1.1,c=[];i.forEach((d,p)=>{const y=i[(p+1)%i.length];c.push({x:d.x,y:d.y});const v=Math.hypot(y.x-d.x,y.y-d.y),x=l>0&&v>1.5*l?Math.ceil(v/l):1;for(let R=1;R<x;R++){const b=R/x,T=(R%2?7e-4:-7e-4)/v;c.push({x:d.x+(y.x-d.x)*b-(y.y-d.y)*T,y:d.y+(y.y-d.y)*b+(y.x-d.x)*T})}});const h=[];if(l>0){let d=1/0,p=-1/0,y=1/0,v=-1/0;for(const b of c)d=Math.min(d,b.x),p=Math.max(p,b.x),y=Math.min(y,b.y),v=Math.max(v,b.y);const x=Math.max(1,Math.round((p-d)/l)),R=Math.max(1,Math.round((v-y)/l));for(let b=1;b<x;b++)for(let T=1;T<R;T++){const C=(He(b*73+11,T*151+5)/4294967296-.5)*.3,S=(He(b*199+3,T*37+17)/4294967296-.5)*.3,M=d+(p-d)*(b+(T%2?.25:-.25)+C)/x,A=y+(v-y)*(T+S)/R;r.keep&&!r.keep(M,A)||!Gy(c,M,A)||Vy(c,M,A)<l*.3||h.push([new ee(M,A)])}}const u=c.map(d=>new ee(d.x,d.y)),f=Xl.triangulateShape(u,h),m=u.concat(h.map(d=>d[0])),g=Hy(m,f),_=d=>de(t,d.x,d.y);for(const[d,p,y]of g){const v=m[d],x=m[p],R=m[y];n.tri(s,_(v),_(x),_(R),a,o(v.x,v.y),o(x.x,x.y),o(R.x,R.y),r.o)}return g.length}const Qs=.05,kh=.004;function Wy(n,t){const{x0:e,x1:i,z0:r,z1:s,H:o}=t,a=t.portals||[],l=[],c={S:{f:{x:0,y:0,z:r,yaw:0},facing:1,lat:g=>g,t0:e,t1:i,pt:g=>[g,r]},N:{f:{x:0,y:0,z:s,yaw:0},facing:-1,lat:g=>g,t0:e,t1:i,pt:g=>[g,s]},W:{f:{x:e,y:0,z:0,yaw:Math.PI/2},facing:1,lat:g=>-g,t0:r,t1:s,pt:g=>[e,g]},E:{f:{x:i,y:0,z:0,yaw:Math.PI/2},facing:-1,lat:g=>-g,t0:r,t1:s,pt:g=>[i,g]}};for(const g of Object.keys(c)){const _=c[g],d=a.filter(b=>b.wall===g).sort((b,T)=>b.at-T.at),p=_.lat(_.t0-Qs),y=_.lat(_.t1+Qs),v=d.map(b=>Ut.map(T=>({x:_.lat(b.at)+T.x+T.nx*kh,y:T.y+T.ny*kh}))),x=wf(Math.min(p,y),Math.max(p,y),-Qs,o+Qs,v);Af(n,_.f,_.facing,x,{layer:"tile",grid:1,uv:(b,T)=>[(b-3.1)/6+.5,.004+.992*T/3.63]});let R=_.t0;for(const b of d)l.push([..._.pt(R),..._.pt(b.at-Ut.W/2)]),R=b.at+Ut.W/2;l.push([..._.pt(R),..._.pt(_.t1)])}const h=Math.max(1,Math.round(i-e)),u=Math.max(1,Math.round(s-r));n.grid("atlas",[e,0,r],[i-e,0,0],[0,0,s-r],h,u,[0,1,0],t.floor||Xt("floor"),null,!0),n.grid("atlas",[e,o,r],[i-e,0,0],[0,0,s-r],h,u,[0,-1,0],t.ceil||Xt("concrete"),null,!0);const f=(e+i)/2;return{cells:[{ax:f,az:r,bx:f,bz:s,hw:(i-e)/2,ya:0,yb:0}],walls:l.filter(g=>Math.hypot(g[2]-g[0],g[3]-g[1])>.01)}}const Al=512,Rl=256,tc={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let to=null,wt=null,Oi=null,Rf=null;function Cf(){if(to)return;to=Ln(Al,Rl),wt=to.getContext("2d");const n=Ln(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),Rf=wt.createPattern(n,"repeat"),Oi=new Io(to),Oi.colorSpace=Ke,Oi.generateMipmaps=!1,Oi.minFilter=Le,Oi.magFilter=Le}function Xy(){return Cf(),Oi}function bo(n){const[t,e,i,r]=tc[n],s=1;return[(t+s)/Al,1-(e+r-s)/Rl,(t+i-s)/Al,1-(e+s)/Rl]}function Oh(n,t,e){const[i,r,s,o]=tc[n];wt.save(),wt.beginPath(),wt.rect(i,r,s,o),wt.clip(),wt.fillStyle="#060504",wt.fillRect(i,r,s,o),wt.fillStyle="#ffab1a",wt.font=`400 30px ${wr}`,wt.textBaseline="middle";const a=o/4;t.slice(0,3).forEach((l,c)=>{const h=r+a*(c+.5)+2;wt.textAlign="left",wt.fillText(l.l||"",i+10,h,l.r?s-110:s-20),l.r&&(wt.textAlign="right",wt.fillText(l.r,i+s-10,h))}),wt.textAlign="center",wt.fillText(e||"",i+s/2,r+a*3.5+1,s-20),wt.fillStyle=Rf,wt.fillRect(i,r,s,o),wt.restore()}function zh(n,t,e){const[i,r,s,o]=tc[n],a=i+s/2,l=r+o/2,c=s*.46;wt.save(),wt.beginPath(),wt.rect(i,r,s,o),wt.clip(),wt.fillStyle="#1a1b1c",wt.fillRect(i,r,s,o),wt.fillStyle=e?"#e8e2cc":"#f2efe4",wt.beginPath(),wt.arc(a,l,c,0,7),wt.fill(),wt.strokeStyle="#14213d",wt.lineWidth=3,wt.beginPath(),wt.arc(a,l,c-1.5,0,7),wt.stroke(),wt.strokeStyle="#111";for(let f=0;f<12;f++){const m=f/12*Math.PI*2,g=c*(f%3===0?.74:.82);wt.lineWidth=f%3===0?4:2,wt.beginPath(),wt.moveTo(a+Math.sin(m)*g,l-Math.cos(m)*g),wt.lineTo(a+Math.sin(m)*c*.9,l-Math.cos(m)*c*.9),wt.stroke()}const h=(f,m,g,_)=>{const d=f*Math.PI*2;wt.strokeStyle=_,wt.lineWidth=g,wt.lineCap="round",wt.beginPath(),wt.moveTo(a-Math.sin(d)*m*.15,l+Math.cos(d)*m*.15),wt.lineTo(a+Math.sin(d)*m,l-Math.cos(d)*m),wt.stroke()},u=(t%43200+43200)%43200;h(u/43200,c*.5,5,"#111"),h(u%3600/3600,c*.74,3.5,"#111"),h(Math.floor(u%60)/60,c*.8,1.6,"#b3261e"),wt.fillStyle="#b3261e",wt.beginPath(),wt.arc(a,l,4,0,7),wt.fill(),wt.restore()}function qy(n){Cf(),Oh("board",n.rows||[],n.footer||""),Oh("board2",n.rows2||[],n.footer2||""),zh("clock",n.tod||0,!1),zh("clockBack",n.todBack||0,!0),Oi.needsUpdate=!0}const To="#16213f",Cl="#1c3f94",Pf="#f6f6f1";function $y(n,t,e,i,r,s,o={}){n.save(),n.translate(e,i),n.rotate(r?-.87:.87),n.font=`400 ${s}px ${_e}`,n.textBaseline="middle",n.textAlign="left";const a=t.split(" ");let l=[t];if(t.length>12&&a.length>1){let h=1,u=1/0;for(let f=1;f<a.length;f++){const m=Math.abs(a.slice(0,f).join(" ").length-a.slice(f).join(" ").length);m<u&&(u=m,h=f)}l=[a.slice(0,h).join(" "),a.slice(h).join(" ")]}const c=s*.9;if(o.current){const h=Math.max(...l.map(u=>n.measureText(u).width));n.fillStyle=Cl,n.fillRect(c-s*.35,-s*.62*l.length,h+s*.7,s*1.24*l.length)}n.fillStyle=o.current?"#fff":o.odd?"#7a0f18":To,l.forEach((h,u)=>n.fillText(h,c,(u-(l.length-1)/2)*s*1.05)),n.restore()}function Df(n,t,e,i={}){const{edgware:r,barnet:s,charingX:o,bank:a,morden:l,battersea:c}=mf;n.fillStyle=Pf,n.fillRect(0,0,t,e);const h=Math.max(2,e*.03);n.strokeStyle="#5f6467",n.lineWidth=h,n.strokeRect(h/2,h/2,t-h,e-h),n.fillStyle="#000",n.fillRect(t*.845,e*.7,t*.14,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",Ie(n,"Northern line",t*.125,e*.12,_e),n.fillText("Northern line",t*.915,e*.805);const u=s.length,f=u+1+o.length,m=f+1+l.length,g=t*.03,_=t*.925/(m-1),d=N=>g+N*_,p=e*.44,y=e*.57,v=Math.max(2,e*.022),x=e*.054,R=Math.max(2,e*.022),b=N=>{n.strokeStyle="#000",n.lineWidth=R,n.lineJoin="round",n.beginPath(),N.forEach((L,B)=>B?n.lineTo(L[0],L[1]):n.moveTo(L[0],L[1])),n.stroke()},T=N=>d(N+1),C=N=>d(N*.93);b([[T(0),p],[d(m-1),p]]),b([[C(0),y],[d(u)-_*.75,y],[d(u),p]]),b([[d(u),p],[d(u)+_*.75,y],[d(f)-_*.75,y],[d(f),p]]),b([[d(f),p],[d(f)+_*.75,y],[d(f+2),y]]);const S=C(s.indexOf(yo.at)),M=(p+y)/2;b([[S,y],[S+_*.3,M]]),b([[S+_*.3-v,M],[S+_*.3+v,M]]),n.fillStyle=To,n.textAlign="left",n.textBaseline="middle",n.font=`400 ${x*.82}px ${_e}`,n.fillText(yo.name,S+_*.3+v*1.8,M);const A=i.current,D=(N,L,B,q,G={})=>{const z=!!Bo[N]||N===A||N==="Camden Town"||N==="Kennington";n.strokeStyle="#000",n.lineWidth=R*.7,z?(n.fillStyle=N===A?Cl:"#fff",n.beginPath(),n.arc(L,B,v*1.35,0,7),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(L,B),n.lineTo(L,B+(q?-v*1.6:v*1.6)),n.stroke()),$y(n,N,L,B+(q?-v*2.2:v*2.2),q,x,{current:N===A,odd:G.odd})};r.forEach((N,L)=>D(N,T(L),p,!0)),D("Camden Town",d(u),p,!0),o.forEach((N,L)=>D(N,d(u+1+L),p,!0)),D("Kennington",d(f),p,!0),l.forEach((N,L)=>D(N,d(f+1+L),p,!0)),s.forEach((N,L)=>D(N,C(L),y,!1)),a.forEach((N,L)=>D(N,d(u+1+L*.94+.2),y,!1)),c.forEach((N,L)=>D(N,d(f+1+L),y,!1));for(const[N,L]of i.ghosts||[]){const B=r.indexOf(L),q=s.indexOf(L),G=a.indexOf(L);B>=0?D(N,T(B+.5),p,!0,{odd:!0}):q>=0?D(N,C(q+.5),y,!1,{odd:!0}):G>=0&&D(N,d(u+1+(G+.5)*.94+.2),y,!1,{odd:!0})}const I=[[r,T],[["Camden Town"],()=>d(u)],[o,N=>d(u+1+N)]];for(const[N,L]of I){const B=N.indexOf(A);if(B<0)continue;const q=L(B);n.fillStyle=Cl,n.beginPath(),n.moveTo(q,p+v*2.2),n.lineTo(q-v*1.6,p+v*4.6),n.lineTo(q+v*1.6,p+v*4.6),n.fill(),n.fillRect(q-x*3.4,p+v*4.5,x*6.8,x*1.5),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${x}px ${_e}`,n.fillText("You are here",q,p+v*4.5+x*.8)}}function Lf(n,t,e,{dir:i="north",arrow:r="right",list:s=""}={}){n.fillStyle=Pf,n.fillRect(0,0,t,e),n.fillStyle="#000",n.fillRect(0,0,t,e*.24),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${e*.15}px ${_e}`,n.fillText("Northern line",e*.16,e*.13);const o=r!=="right";Ml(n,o?e*.42:t-e*.42,e*.58,e*.42,r,To);const a=o?e*.8:e*.16,l=o?t-e*.16:t-e*.8,c=`${Fr(i)} platform ${qi(i)}`;n.fillStyle=To,n.textAlign=o?"left":"right",Ie(n,c,l-a,e*(s?.3:.36),_e),n.fillText(c,o?a:l,e*(s?.5:.6)),s&&(Ie(n,s,l-a,e*.14,De),n.fillText(s,o?a:l,e*.8)),n.strokeStyle="#5f6467",n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(1,1,t-2,e-2)}const If=["North End","South Kentish Town","City Road","King William Street","Bull & Bush","Aldwych","Down Street","British Museum","York Road","Brompton Road"],Bh={Hampstead:["Heath Street"],"Chalk Farm":["Adelaide Road"],"Mornington Crescent":["Seymour Street","Mornington Cresent"],"Camden Town":["Camden Road"],"Belsize Park":["Belsize"]};function Yy(n,t){const e=[];for(let r=1;r<n.length-1;r++)/[a-z]/.test(n[r])&&/[a-z]/.test(n[r+1])&&n[r]!==n[r+1]&&e.push(r);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function ec(n,t,e){const i=Math.min(.7,t*.15);if(!e.chance(i))return n;const r=e.next()*Math.min(5,t+1);if(r<1)return Yy(n,e);if(r<1.8){const s=e.int(1,n.length-2);return n.slice(0,s)+n.slice(s+1)}return r<2.8&&Bh[n]?e.pick(Bh[n]):e.pick(If)}const nc=n=>If.includes(n),Mn=3.5,En=5,Hh=2.95;function ur(n,t,e,i,r,s,o,a){const l=En-.03;return n.quad(t,[e+r/2,i,l],[e-r/2,i,l],[e-r/2,i+s,l],[e+r/2,i+s,l],[0,0,-1],o,a),{x:e,y:i+s/2,z:l}}const jy={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,r=Object.keys(os).filter(o=>os[o].level<=i&&os[o].level>=i-1),s=n.chance(.5);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(r),lie:e==="announce"?n.chance(.3+.12*i):!1,dirs:s?["north","south"]:["south","north"],inverted:n.chance(.4)},exits:[{x:Mn,y:0,z:En/2,yaw:Math.PI/2},{x:-Mn,y:0,z:En/2,yaw:-Math.PI/2}],box:[-Mn-.4,-.4,0,Mn+.4,3.4,En+.4]}},build(n){const{b:t,p:e,sheet:i,rng:r,env:s}=n,o=Wy(t,{x0:-Mn,x1:Mn,z0:0,z1:En,H:Hh,portals:[{wall:"S",at:0},{wall:"E",at:En/2},{wall:"W",at:En/2}]});t.addPortal(0,0,0,0),t.addPortal(Mn,0,En/2,Math.PI/2),t.addPortal(-Mn,0,En/2,-Math.PI/2),bi(t,{x:0,y:0,z:0,yaw:0},Ut.crown);for(const y of[-1.7,1.7])Yi(t,{x:y,y:0,z:2.2,yaw:Math.PI/2},Hh-.02,{power:.6,radius:6.5});const a=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,to:e.dirs[0]},{cx:-1.72,dir:"right",exit:1,to:e.dirs[1]}];for(const y of c){const v=e.correct===y.exit;if(e.kind==="signs"){const x=v?null:e.defect,R=!!e.inverted,b=i.add(250,56,(C,S,M)=>Oo(C,S,M,{dir:y.dir,defect:x,inverted:R})),T=ur(t,"sheet",y.cx,1.52,1.9,.425,b,l);a.push({...T,r:7,cone:.93,label:"read sign",title:"SIGN",text:ey(x,y.dir,R),junctionSign:!0})}else{const x=Ty(s.station,y.to),R=i.add(280,84,(C,S,M)=>Lf(C,S,M,{dir:y.to,arrow:y.dir,list:x.join("  ·  ")})),b=ur(t,"sheet",y.cx,1.44,1.9,.57,R,l),T=`Northern line · ${Fr(y.to)} platform ${qi(y.to)} · ${x.join(", ")}`;a.push({...b,r:7,cone:.93,label:"read sign",title:"SIGN",text:y.dir==="left"?`← ${T}`:`${T} →`})}if(e.kind==="clock"){const x=!v,R=ur(t,"dyn",y.cx,2.08,.62,.62,bo(x?"clockBack":"clock"),{emit:1.05});a.push({...R,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:x?"The second hand is ticking backwards.":"The clock is keeping time."})}}const h=ur(t,"dyn",0,2.12,1.26,.42,bo("board2"),{emit:1.15});a.push({...h,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const u=ec(s.station,s.wrong,r),f=i.add(200,92,(y,v,x)=>Fo(y,v,x,u)),m=ur(t,"sheet",0,1.42,1.24,.57,f,null);a.push({...m,r:6,cone:.95,label:"read name",title:"STATION",text:nc(u)?`${u}. There is no such station on this line.`:u});const g=ur(t,"cut",0,.62,.34,.68,Xt("helpPoint"),null);a.push({...g,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(y,v,x)=>y.director.helpPoint(x)});const _=ti(n),d=o.walls;if(_.chance(s.boardChance??.2)){const y=_.sign(),v=pf(n,y*2.95,4.3,y*.63,lf(_,s,e));a.push(v.item),d.push(...v.walls)}const p=[{x0:-Mn,x1:Mn,z0:.8,z1:En,fire:(y,v)=>y.director.enterJunction(v)}];return{cells:o.cells,walls:d,items:a,extra:{zones:p}}}},J={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};J.back=J.cx-Math.sqrt(J.R*J.R-J.cy*J.cy);J.th0=Math.PI+Math.asin(J.cy/J.R);J.th1=-Math.asin((J.cy-J.bed)/J.R);J.sCrown=J.R*(J.th0-Math.PI/2);J.wallBed=J.cx+Math.sqrt(J.R*J.R-(J.cy-J.bed)**2);J.track=(J.edge+J.wallBed)/2;function Zy(n,t){const e=n-J.cy;return J.cx+t*Math.sqrt(Math.max(0,J.R*J.R-e*e))}const Ky=9,Jy=10,Qy=J.R*(Math.PI/2-J.th1);function Gh(n,t,e,i){const r=[];for(let s=0;s<=e;s++){const o=n+(t-n)*s/e;r.push({x:J.cx+J.R*Math.cos(o),y:J.cy+J.R*Math.sin(o),nx:-Math.cos(o),ny:-Math.sin(o),v:i(o)})}return r}function tx(n,t,e){const i=d=>e*d,r=Gh(J.th0,Math.PI/2,Ky,d=>.502+.496*(J.R*(J.th0-d)/J.sCrown)),s=Gh(Math.PI/2,J.th1,Jy,d=>.002+.496*(J.R*(Math.PI/2-d)/Qy)),o=Math.round(t/1.5);for(const d of[r,s])for(let p=0;p<o;p++){const y=t*p/o,v=t*(p+1)/o;for(let x=0;x<d.length-1;x++){const R=d[x],b=d[x+1],T=[i(R.nx),R.ny,0],C=[i(b.nx),b.ny,0],S=[(T[0]+C[0])/2,(T[1]+C[1])/2,0];n.quadN("ptile",[i(R.x),R.y,y],[i(R.x),R.y,v],[i(b.x),b.y,v],[i(b.x),b.y,y],S,T,T,C,C,[y/6,R.v,v/6,b.v])}}const a=[0,1,0],l=(d,p,y=0,v=1)=>vo(d,y,p?.5:0,v,p?1:.5),c=[[J.back-.05,-.55,d=>l("floor",d)],[-.55,.55,d=>l("floor",d)],[.55,.95,()=>Xt("tactile")],[.95,1.05,()=>Jt("yellow")],[1.05,1.45,d=>l("floorDark",d,.05,.45)],[1.45,J.edge,()=>Jt("edge")]],h=Math.round(t/.5);for(const[d,p,y]of c)for(let v=0;v<h;v++){const x=t*v/h,R=t*(v+1)/h;n.quad("atlas",[i(d),0,x],[i(p),0,x],[i(p),0,R],[i(d),0,R],a,y(v%2))}const u=Xt("mindgap");for(let d=4.5;d<t-3;d+=6.5){const p=.85*e;n.quad("atlas",[i(1.07),.004,d-p],[i(1.07),.004,d+p],[i(1.43),.004,d+p],[i(1.43),.004,d-p],a,u)}const f=Math.round(t/2);for(let d=0;d<f;d++){const p=t*d/f,y=t*(d+1)/f;n.quad("atlas",[i(1.56),J.bed,p],[i(1.56),J.bed,y],[i(1.56),-.06,y],[i(1.56),-.06,p],[e,0,0],Xt("riser")),n.quad("atlas",[i(1.56),-.06,p],[i(J.edge),-.06,p],[i(J.edge),-.06,y],[i(1.56),-.06,y],[0,-1,0],Jt("black")),n.quad("atlas",[i(J.edge),-.06,p],[i(J.edge),-.06,y],[i(J.edge),0,y],[i(J.edge),0,p],[e,0,0],Jt("edge"))}const m=Xt("ballast");for(let d=0;d<Math.round(t);d++)for(const[p,y]of[[1.56,J.track],[J.track,J.wallBed+.12]])n.quad("atlas",[i(p),J.bed,d],[i(y),J.bed,d],[i(y),J.bed,d+1],[i(p),J.bed,d+1],a,m);const g=Xt("rail"),_=Jt("steelDark");for(const[d,p]of J.rails){const y=J.track+d;for(let v=0;v<t;v+=3){const x=Math.min(t,v+3),R=J.bed+p,b=.035;n.quad("atlas",[i(y-b),R,v],[i(y+b),R,v],[i(y+b),R,x],[i(y-b),R,x],a,g),n.quad("atlas",[i(y-b),J.bed,v],[i(y-b),J.bed,x],[i(y-b),R,x],[i(y-b),R,v],[-e,0,0],_)}}return{back:r,track:s}}const xe={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},Vh=12,eo=5;function no(n,t,e){const i=[];for(let r=0;r<=eo;r++)i.push({x:n-t,y:e+(xe.spring-e)*r/eo,ox:-1,oy:0});for(let r=1;r<Vh;r++){const s=Math.PI*(1-r/Vh);i.push({x:n+t*Math.cos(s),y:xe.spring+t*Math.sin(s),ox:Math.cos(s),oy:Math.sin(s)})}for(let r=eo;r>=0;r--)i.push({x:n+t,y:e+(xe.spring-e)*r/eo,ox:1,oy:0});return i}function Wh(n,t,e,i,r=!0){const s=S=>i*S,o=J.track,a=J.bed,l=a-.3,c=J.cy+J.R+.35,h=[no(o,xe.hw+xe.ring*.5,l)];r&&h.push(Ut.map(S=>({x:S.x+S.nx*.004,y:S.y+S.ny*.004})));const u=wf(J.back-.45,J.cx+J.R+.35,l,c,h).map(S=>({x:s(S.x),y:S.y}));Af(n,{x:0,y:0,z:t,yaw:0},e,u,{layer:"tile",grid:.6,uv:(S,M)=>[(S*i+3)/6,.004+.992*M/3.63]});const f=t+e*xe.proud,m=[0,0,e],g=a-.02,_=no(o,xe.hw,g),d=no(o,xe.hw+xe.ring,g),p=[vo("brick",0,0,.5,1),vo("brick",.5,0,1,1)],y=Jt("soot");for(let S=0;S<_.length-1;S++){const M=_[S],A=_[S+1],D=d[S+1],I=d[S];n.quad("atlas",[s(M.x),M.y,f],[s(A.x),A.y,f],[s(D.x),D.y,f],[s(I.x),I.y,f],m,p[S%2]);const N=[s((I.ox+D.ox)/2),(I.oy+D.oy)/2,0];n.quad("atlas",[s(I.x),I.y,f],[s(D.x),D.y,f],[s(D.x),D.y,t],[s(I.x),I.y,t],N,y)}const v=no(o,xe.hw+.006,g),x=Xt("soot"),R=[[0,.22,.2],[.22,.55,.1],[.55,xe.depth,.04]];for(const[S,M,A]of R){const D=f-e*S,I=f-e*M;for(let z=0;z<v.length-1;z++){const $=v[z],Z=v[z+1],rt=[s(-($.ox+Z.ox)/2),-($.oy+Z.oy)/2,0];n.quad("atlas",[s($.x),$.y,D],[s(Z.x),Z.y,D],[s(Z.x),Z.y,I],[s($.x),$.y,I],rt,x,{emit:A})}const N=o-xe.hw-.01,L=o+xe.hw+.01,B=S===0?t+e*.2:D,q=a-.003;n.quad("atlas",[s(N),q,B],[s(L),q,B],[s(L),q,I],[s(N),q,I],[0,1,0],Xt("ballast"),{emit:A*1.2});const G=S===0?t:D;for(const[z,$]of J.rails){const Z=o+z,rt=a+$,xt=.035;n.quad("atlas",[s(Z-xt),rt,G],[s(Z+xt),rt,G],[s(Z+xt),rt,I],[s(Z-xt),rt,I],[0,1,0],Xt("rail"),{emit:A*2.4})}}const b=f-e*xe.depth,T=xe.spring+xe.hw+.06,C=xe.hw+.06;n.quad("atlas",[s(o-C),g,b],[s(o+C),g,b],[s(o+C),T,b],[s(o-C),T,b],m,Jt("blackout"),{emit:0})}function di(n,t,e,i,r,s,o,a,l,c,h=.04){return Eo(n,t,e,i,r,s,o,a,l,c,h,1)}function Eo(n,t,e,i,r,s,o,a,l,c,h=.05,u=4){const f=-i*e*s/2,m=_=>e*(Zy(_,i)-i*h);for(let _=0;_<u;_++){const d=o+(a-o)*_/u,p=o+(a-o)*(_+1)/u,y=l[1]+(l[3]-l[1])*_/u,v=l[1]+(l[3]-l[1])*(_+1)/u,x=m(d),R=m(p),b=(d+p)/2-J.cy,T=-i*Math.sqrt(Math.max(0,J.R*J.R-b*b))/J.R;n.quad(t,[x,d,r+f],[x,d,r-f],[R,p,r-f],[R,p,r+f],[e*T,-b/J.R,0],[l[0],y,l[2],v],c)}const g=(o+a)/2;return{x:m(g),y:g,z:r}}function ex(n,t,e,i){const r=_=>t*_,s=J.back+.14,o=J.back+.6,a=e-.9,l=e+.9,c=Xt("bench"),h=Jt("steelDark"),u=Math.min(r(s),r(o)),f=Math.max(r(s),r(o));n.box("cut",u,.4,a,f,.46,l,c,null,"xXyYzZ");const m=r(s+.02),g=r(s+.07);n.box("cut",Math.min(m,g),.56,a,Math.max(m,g),.95,l,c,null,"xXYzZ");for(const _ of[a+.12,e,l-.12])n.box("atlas",u+.05,0,_-.03,f-.05,.4,_+.03,h,null,"xXzZ");i.push([r(o+.05),a,r(o+.05),l],[r(s),a,r(o+.05),a],[r(s),l,r(o+.05),l])}function nx(n,t,e,i,r=null){const{b:s,p:o,sheet:a,rng:l,env:c}=n,h=c.wrong||0,u=c.station,f=o.dir,m=bs(u,f);let g=null;if(l.chance(Math.min(.85,h*.22))){const M=l.weighted([["ghost",4],["swap",2],["repeat",h>=2?1.5:0],["missing",h>=3?1.5:0]]);g=Mo(m,M,l)||Mo(m,"swap",l)}const _=a.add(360,540,(M,A,D)=>Ql(M,A,D,m,{dir:f})),d=Math.min(t*.42,13),p=Eo(s,"sheet",e,1,d,1.5,1.14,3.39,_,null,.05,5);i.push({...p,r:13,cone:.93,label:"read line diagram",title:"LINE DIAGRAM",text:Sf(u,f,m),fault:g,onRead:M=>{M.state.diagramsRead=(M.state.diagramsRead||0)+1}}),r&&r();const y=[0,1].map(()=>{const M=ec(u,h,l),A=l.chance(Math.min(.5,h*.14))?l.pick(ju):null;return{text:nc(M)?`${M}. There is no such station on this line.`:A?`${M} — the roundel is not quite right.`:M,uv:a.add(100,100,(I,N,L)=>Fo(I,N,L,M,{defect:A}))}});let v=0;const x=M=>{const A=y[v++%2],D=di(s,"sheet",e,1,M,.7,1.55,2.25,A.uv,null,.05);i.push({...D,r:10,cone:.96,label:"read name board",title:"STATION",text:A.text})};x(d-1.45),x(d+1.45);const R=[0,1,2].map(()=>{const M=l.chance(Math.min(.7,h*.17));let A;return{uv:a.add(240,140,(I,N,L)=>{A=Ss(I,N,L,l,M,!0)}),text:`${A.headline}. ${A.strap}.`}}),b=3.6,T=6,C=[[2.2,d-2.2],[d+2.2,t-2.2]];let S=0;for(const[M,A]of C){const D=Math.floor((A-M+T)/(b+T));if(D<1)continue;const I=(A-M-b)/Math.max(1,D-1);for(let N=0;N<D;N++){const L=D===1?(M+A)/2:M+b/2+I*N,B=R[S++%3],q=Eo(s,"sheet",e,1,L,b,1.22,3.3,B.uv,null,.05,4);i.push({...q,r:10,cone:.95,label:"read poster",title:"ADVERTISEMENT",text:B.text}),N<D-1&&I-b>.9&&x(L+I/2),D===1&&A-M-b>7&&(x((M+L-b/2)/2),x((A+L+b/2)/2))}}}function Uf(n,t,e,i,r,s){const o=Math.max(2,t*.022),a=Vi.bar,l="#17191f";n.fillStyle="#6d7275",n.fillRect(0,0,t,e),n.fillStyle=Vi.panel,n.fillRect(o,o,t-2*o,e-2*o);const c=e*.135,h=c*.3;n.fillStyle=a,n.fillRect(o,o,t-2*o,c),n.fillStyle=Vi.panel,n.beginPath(),n.arc(o+c*.62,o+c/2,h*1.42,0,7),n.fill(),No(n,o+c*.62,o+c/2,h),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle";const u=o+c*1.22;Ie(n,i.title,t-o-u-t*.04,c*.46,_e),n.fillText(i.title,u,o+c*.53);const f=t*.075,m=o+c+e*.04;n.fillStyle=l,n.textBaseline="alphabetic";const g=Ie(n,i.intro,t-2*f,e*.043,De,700);n.fillText(i.intro,f,m+g*.8);const _=m+g*1.7,d=e*.905,p=i.rules.length;let y=e*.047,v,x,R,b;for(;n.font=`400 ${y}px ${De}`,b=y*1.75,x=y*1.2,R=y*.62,v=i.rules.map(S=>Mi(n,S,t-2*f-b)),!(v.reduce((S,M)=>S+M.length*x,0)+R*(p-1)<=d-_||y<5);)y*=.96;let T=_;v.forEach((C,S)=>{n.fillStyle=a,n.beginPath(),n.arc(f+y*.62,T+x*.48,y*.66,0,7),n.fill(),n.fillStyle="#fff",n.textAlign="center",n.font=`700 ${y*.95}px ${De}`,n.fillText(String(S+1),f+y*.62,T+x*.48+y*.33),n.fillStyle=l,n.strokeStyle=l,n.lineWidth=y*.035,n.textAlign="left",n.font=`400 ${y}px ${De}`,C.forEach((M,A)=>{n.fillText(M,f+b,T+x*(A+.78)),n.strokeText(M,f+b,T+x*(A+.78))}),T+=C.length*x+R}),n.fillStyle=a,n.fillRect(f,e*.925,t-2*f,Math.max(1,e*.004)),n.fillStyle="#4a4f58",Ie(n,`${r} · ${i.foot}`,t-2*f,e*.03,De,400),n.fillText(`${r} · ${i.foot}`,f,e*.962),s&&xi(n,o,o,t-2*o,e-2*o,s.int(1,99999),.3,!1)}const Xh="THE COMMUTE",ix=[["Tube strike threat over night shifts","Union and bosses to meet for last-ditch talks on Thursday","Commuters could face a 24-hour walkout next week unless a deal is reached. “Nobody wants this,” said both sides, separately.","tunnel"],["Rain, then more rain","Umbrella sales soar as forecasters give up on the weekend","The Met Office says it will stop raining “eventually”. Until then Londoners are advised to carry a brolly and lower their expectations.","rain"],["Commuters face Northern line delays","Signal failure at Camden Town blamed for a morning of misery","Passengers were told to follow the yellow and black signs to the way out and carry on above ground. A good service resumed by ten.","train","yellow"],["House prices up again","A parking space in Hampstead sells for more than a house in Hull","Estate agents called the plot “deceptively spacious” and “moments from the Tube”. It has no roof.","house"],["Fox walks into pub","Regulars at a Chalk Farm local say he stayed for the quiz","The landlord said the fox “kept himself to himself” and left before last orders. He is understood to have come second.","fox"],["Northern line’s old tiles to be saved","Every station has its own colours, and now they are protected","The patterns were designed so passengers could tell stations apart at a glance. “If the colours change, you’ve moved on,” said a heritage officer.","tiles","tiles"],["Lost property drowning in umbrellas","Also handed in this month: a wedding dress, a tuba and “several” false teeth","Staff at Baker Street say nine in ten items are never claimed. “People get off the train and simply forget what they came down with.”","rain"],["Station clocks to be put right on Sunday","Engineers promise every clock on the line will agree by Monday","A spokesman said station clocks “only ever run forwards” and asked anyone who sees one doing otherwise to tell a member of staff.","clock","clock"]],rx=[["Passenger still missing after last train","Staff searched the station twice. It was longer the second time","Anyone who travelled on the last northbound service is asked to come forward, if they can find the way out.","figure"],["Commuters face Northern line delays","The 23:47 has now been due for eleven days","A spokesman apologised for the inconvenience, and for the announcement, which he said he had not made.","train"],["Rain expected. Nobody has been up to check","Forecasters say conditions above ground “cannot be confirmed”","The last person to go up for a look has not come back down. Colleagues say this is a good sign.","rain"],["Fox seen on platform 2","It was waiting for a train. It let three go by","Witnesses said the fox “seemed to know which way was out” and set off up the line, northwards. Nobody followed it.","fox","line"],["Strike called off: no staff left to strike","Union says its members “went home some time ago”","Announcements continue as normal. Passengers are reminded that staff announcements begin with a rising chime. The others do not.","tunnel","chime"],["Yesterday’s paper printed again today","Readers say they do not mind. Readers say they do not mind","The editor could not be reached for comment, and neither could the stairs to his office.","paper"]],sx=[["Commuter last seen at Mornington Crescent","Carrying a camcorder. Reading a newspaper","The commuter is described as tired. If you see them, do not approach. If you are them, keep walking up the line.","figure","line"],["Station “has no end”, say staff","“We stopped measuring at Hampstead,” admits surveyor","The way out is believed to still exist. It was last recorded north of here, behind a sign that says exactly “Way out”.","tunnel","yellow"],["You are reading this","And it is reading you. Page 2: what it has learned","Put the paper down. Not there. That is where you found it last time.","eye"],["No news today","Nothing has happened above ground since you came down","This edition will be reprinted until further notice. The date at the top of the page is correct.","blank"]],rs=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Nf=["January","February","March","April","May","June","July","August","September","October","November","December"],io=n=>`${rs[n.getDay()]} ${n.getDate()} ${Nf[n.getMonth()]} ${n.getFullYear()}`;function ox(n,t,e=new Date){const i=r=>io(new Date(e.getTime()-r*864e5));return n===0?io(e):n===1?t.pick([i(1),i(7),`${io(e)} · ${io(e)}`,`${rs[e.getDay()]} ${e.getDate()} ${Nf[e.getMonth()]}, again`]):t.pick(["Saturday 22 June 1907",i(365*19+t.int(0,300)),`${rs[e.getDay()]}, ${rs[e.getDay()]}, ${rs[e.getDay()]}`])}function ax(n,t){const e=Math.min(.55,Math.max(0,t-2)*.28),i=Math.min(.7,t*.3);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function Ff(n,t,e={}){const i=e.tier??ax(n,t.wrong||0),r=[ix,rx,sx][i],s=(t.stretch?t.stretch.id*3:0)+(t.idx||0),[o,a,l,c,h]=r[(He(t.gseed||1,61+i)+s)%r.length],u=ox(i,n);return{tier:i,name:Xh,date:u,head:o,stand:a,para:l,photo:c,clue:h||null,issue:i===2?"No. 0":`No. ${n.int(4100,6900).toLocaleString("en-GB")}`,caption:`${Xh} · ${u}
${o.toUpperCase()}
${a}.
${l}`}}const ui="#2b2b2a",ss="#8f8f88",dn="#d9d8cf",Pl={tunnel(n,t,e,i,r){for(let s=5;s>0;s--)n.fillStyle=s%2?ss:dn,n.beginPath(),n.arc(t+i/2,e+r*.56,i*.62*s/5,0,7),n.fill();n.fillStyle=ui,n.beginPath(),n.arc(t+i/2,e+r*.56,i*.1,0,7),n.fill(),n.fillRect(t,e+r*.86,i,r*.14)},train(n,t,e,i,r){Pl.tunnel(n,t,e,i,r),n.fillStyle=dn,n.fillRect(t+i*.3,e+r*.3,i*.4,r*.56),n.fillStyle=ui,n.fillRect(t+i*.34,e+r*.36,i*.13,r*.2),n.fillRect(t+i*.53,e+r*.36,i*.13,r*.2),n.fillStyle="#fff",n.fillRect(t+i*.35,e+r*.7,i*.07,r*.06),n.fillRect(t+i*.58,e+r*.7,i*.07,r*.06)},rain(n,t,e,i,r){n.fillStyle=ui,n.beginPath(),n.arc(t+i*.5,e+r*.55,i*.3,Math.PI,0),n.fill(),n.fillRect(t+i*.49,e+r*.55,i*.025,r*.34),n.strokeStyle=dn,n.lineWidth=1;for(let s=0;s<16;s++){const o=t+s*37%100/100*i,a=e+s*53%100/100*r*.8;n.beginPath(),n.moveTo(o,a),n.lineTo(o-i*.04,a+r*.14),n.stroke()}},house(n,t,e,i,r){n.fillStyle=dn,n.fillRect(t,e,i,r*.5);for(let s=0;s<3;s++){const o=t+i*(.06+s*.31),a=i*.26;n.fillStyle=s===1?ui:"#55554f",n.fillRect(o,e+r*.42,a,r*.58),n.beginPath(),n.moveTo(o-1,e+r*.42),n.lineTo(o+a/2,e+r*.18),n.lineTo(o+a+1,e+r*.42),n.fill(),n.fillStyle=dn,n.fillRect(o+a*.3,e+r*.56,a*.4,r*.14)}},fox(n,t,e,i,r){const s=t+i/2,o=e+r*.55,a=Math.min(i,r)*.36;n.fillStyle=ui,n.beginPath(),n.moveTo(s-a,o-a*.35),n.lineTo(s-a*.75,o-a*1.25),n.lineTo(s-a*.25,o-a*.7),n.lineTo(s+a*.25,o-a*.7),n.lineTo(s+a*.75,o-a*1.25),n.lineTo(s+a,o-a*.35),n.lineTo(s,o+a),n.fill(),n.fillStyle=dn;for(const l of[-1,1])n.beginPath(),n.arc(s+l*a*.4,o-a*.2,a*.11,0,7),n.fill()},tiles(n,t,e,i,r){for(let s=0;s<6;s++)for(let o=0;o<9;o++)n.fillStyle=s===1||s===4?ui:(o+s)%5===0?ss:dn,n.fillRect(t+i*(o-s%2*.5)/8+.5,e+r*s/6+.5,i/8-1,r/6-1)},clock(n,t,e,i,r){const s=t+i/2,o=e+r/2,a=Math.min(i,r)*.4;n.fillStyle=dn,n.beginPath(),n.arc(s,o,a,0,7),n.fill(),n.strokeStyle=ui,n.lineWidth=Math.max(1,a*.1),n.beginPath(),n.arc(s,o,a,0,7),n.stroke(),n.beginPath(),n.moveTo(s,o),n.lineTo(s,o-a*.7),n.moveTo(s,o),n.lineTo(s+a*.45,o+a*.2),n.stroke()},figure(n,t,e,i,r){n.fillStyle="#6d6d68",n.fillRect(t,e,i,r),n.fillStyle=dn,n.beginPath(),n.moveTo(t,e+r),n.lineTo(t+i*.42,e+r*.5),n.lineTo(t+i*.58,e+r*.5),n.lineTo(t+i,e+r),n.fill(),n.fillStyle="#0d0d0d";const s=t+i*.5,o=e+r*.62,a=r*.2;n.beginPath(),n.ellipse(s,o-a*1.25,a*.2,a*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(s-a*.32,o),n.lineTo(s-a*.22,o-a),n.lineTo(s+a*.22,o-a),n.lineTo(s+a*.32,o),n.fill()},paper(n,t,e,i,r){for(let s=0;s<4;s++){const o=.78**s,a=i*.5*o,l=r*.86*o,c=t+i/2-a/2,h=e+r/2-l/2;n.fillStyle=dn,n.fillRect(c,h,a,l),n.fillStyle=ui,n.fillRect(c,h,a,l*.16),n.fillRect(c+a*.1,h+l*.24,a*.8,l*.08),n.fillStyle=ss,n.fillRect(c+a*.1,h+l*.4,a*.8,l*.5)}},eye(n,t,e,i,r){const s=t+i/2,o=e+r/2;n.fillStyle=dn,n.beginPath(),n.ellipse(s,o,i*.4,r*.3,0,0,7),n.fill(),n.fillStyle=ss,n.beginPath(),n.arc(s,o,r*.24,0,7),n.fill(),n.fillStyle="#0d0d0d",n.beginPath(),n.arc(s,o,r*.12,0,7),n.fill()},blank(){}};function qh(n,t,e,i,r,s,o){n.fillStyle="rgba(40,40,38,0.62)";let a=s.int(3,6);for(let l=e;l+o*.5<=e+r;l+=o)a--,n.fillRect(t,l,a===0?i*s.range(.3,.75):i*s.range(.93,1),Math.max(1,o*.42)),a===0&&(a=s.int(3,6),l+=o*.5)}function kf(n,t,e,i,r){const s=t*.045,o="#161616";n.fillStyle=i.tier===2?"#ddd7c4":"#e9e6db",n.fillRect(0,0,t,e);const a=e*.135,l=e*.05;n.fillStyle="#d21f26",n.fillRect(0,0,t,a),n.save(),n.translate(t/2,a*.54),n.transform(1,0,-.16,1,0,0),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",Ie(n,i.name,t*.86,a*.86,_e),n.fillText(i.name,0,0),n.restore(),n.fillStyle="#0c2f7a",n.fillRect(0,a,t,l),n.textBaseline="middle",n.textAlign="left",n.fillStyle="#fff",Ie(n,i.date,t*.66,l*.72,De,700),n.fillText(i.date,s,a+l*.54,t*.7),n.textAlign="right",n.fillStyle="#ffd329",n.font=`700 ${l*.72}px ${De}`,n.fillText("FREE",t-s,a+l*.54);const c=i.head.toUpperCase(),h=a+l+e*.02,u=e*.235;let f=e*.125,m;for(;n.font=`400 ${f}px ${_e}`,m=Mi(n,c,t-2*s),!(m.length<=3&&m.length*f*.98<=u&&m.every(S=>n.measureText(S).width<=t-2*s)||f<6);)f*=.94;n.fillStyle=o,n.textAlign="left",n.textBaseline="alphabetic",m.forEach((S,M)=>n.fillText(S,s,h+f*(.84+M*.98)));let g=h+m.length*f*.98+e*.012;const _=Math.max(5,e*.04);n.font=`700 ${_}px ${De}`;const d=Mi(n,i.stand,t-2*s).slice(0,3);d.forEach((S,M)=>n.fillText(S,s,g+_*(.85+M*1.12))),g+=d.length*_*1.12+e*.014,n.fillStyle=o,n.fillRect(s,g,t-2*s,Math.max(1,e*.004)),g+=e*.014;const p=(t-2*s)*.6,y=Math.min(e*.26,(e-g)*.55),v=Math.max(2.4,e*.0165);n.save(),n.beginPath(),n.rect(s,g,p,y),n.clip(),n.fillStyle=ss,n.fillRect(s,g,p,y),(Pl[i.photo]||Pl.blank)(n,s,g,p,y),n.fillStyle="rgba(233,230,219,0.28)";for(let S=g;S<g+y;S+=2)for(let M=s+((S-g)%4?1:0);M<s+p;M+=2)n.fillRect(M,S,1,1);n.restore(),n.strokeStyle=o,n.lineWidth=.6,n.strokeRect(s,g,p,y);const x=t*.03,R=(t-2*s-2*x)/3;qh(n,s+p+x,g,t-2*s-p-x,y,r,v);const b=g+y+e*.02,T=e*.955;for(let S=0;S<3;S++)qh(n,s+S*(R+x),b,R,T-b,r,v);n.fillStyle=o,n.font=`700 ${Math.max(4,e*.026)}px ${De}`,n.textAlign="right",n.fillText(`${i.issue} · Turn to page 2`,t-s,e*.985);const C=n.createLinearGradient(0,e*.47,0,e*.56);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(.35,"rgba(255,255,255,0.3)"),C.addColorStop(.5,"rgba(0,0,0,0.2)"),C.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=C,n.fillRect(0,e*.47,t,e*.09),xi(n,0,0,t,e,r.int(1,99999),i.tier?.8:.45,!1)}const $h=[150,194],fr=.31,dr=.4,pr=3,Li=4,lx={tint:[.8,.78,.72]},cx=(n,t)=>n.sheet.add($h[0],$h[1],(e,i,r)=>kf(e,i,r,t,ti(n)));function Yh(n,t,e,i,r,s,o,a={}){const{b:l}=n,c=ti(n),h=a.floor?.006:.004,u=a.floor?.005:.009,f=[],m=[c.pick([0,pr]),c.pick([0,Li])];for(let R=0;R<=Li;R++){f.push([]);for(let b=0;b<=pr;b++){let T=h+c.range(0,u);R===Li/2&&(T+=a.floor?.004:.012),b===m[0]&&R===m[1]&&(T+=a.floor?.012:.04),f[R].push(T)}}l.place(t,e,i,r);const g=R=>fr/2-fr*R/pr,_=R=>-dr/2+dr*R/Li,d=o[2]-o[0],p=o[3]-o[1];for(let R=0;R<Li;R++)for(let b=0;b<pr;b++)l.quad("sheet",[g(b),f[R][b],_(R)],[g(b+1),f[R][b+1],_(R)],[g(b+1),f[R+1][b+1],_(R+1)],[g(b),f[R+1][b],_(R+1)],[0,1,0],[o[0]+d*b/pr,o[1]+p*R/Li,o[0]+d*(b+1)/pr,o[1]+p*(R+1)/Li],a.floor?{tint:[.86,.85,.82]}:null);const y=c.range(.008,.022)*c.sign(),v=-c.range(.008,.02),x=.002;return l.quad("atlas",[fr/2+y,x,-dr/2+v],[-fr/2+y,x,-dr/2+v],[-fr/2+y,x,dr/2+v],[fr/2+y,x,dr/2+v],[0,1,0],Jt("white"),lx),l.setXf(null),{x:t,y:e+.02,z:i,n:a.n||[0,0],r:3.4,cone:.86,label:"read newspaper",title:"NEWSPAPER",text:s.caption,paper:{tier:s.tier,clue:s.clue,floor:!!a.floor}}}function hx(n,t,e){const{b:i,p:r,sheet:s,rng:o,env:a}=n,l=[],c=[],h=[],u=a.wrong||0,f=a.station,m=r.dir,g=nt=>e*nt,_=Math.round((t-6)/4.5)*3+1;for(let nt=0;nt<_;nt++){const ct=3+(t-6)*nt/(_-1),U=nt%3===0,kt=Math.floor(nt/3);Yi(i,{x:g(.5),y:0,z:ct,yaw:0},3.45,{dead:r.dark&&kt%3!==1,flick:r.faulty===kt,noLight:!U,power:.62,radius:9.5,len:1.25})}const d=gy(f),p=Math.min(5,1+.2*(d.length+2*d.split(" ").length)),y=u>=1.5&&o.chance(Math.min(.8,u*.2))?o.shuffle(Jl).slice(0,o.int(1,2)):[],v=s.add(800,168,(nt,ct,U)=>Df(nt,ct,U,{current:f,ghosts:y})),x=s.add(512,Math.round(512*.53/p),(nt,ct,U)=>ny(nt,ct,U,d,a.theme));let R=null,b=null,T=null;nx(n,t,e,l,()=>{const nt=ti(n);if(r.start&&(T=s.add(288,360,(ct,U,kt)=>Uf(ct,U,kt,ms,f,nt))),r.start||nt.chance(a.boardChance??.4)){const ct=Zl(nt,a,{cheery:r.start});R={th:ct,face:Kl(n,ct)}}r.start||(b=s.reserve(168,216))});const C=nt=>{const ct=(kt,At,Lt)=>nf(kt,At,Lt,nt,o),U=b;return b=null,U?s.paint(U,ct):s.add(168,216,ct)},S=e>0?"left":"right",M=[s.add(384,36,(nt,ct,U)=>bh(nt,ct,U,f,{arrow:S})),s.add(384,36,(nt,ct,U)=>bh(nt,ct,U,f,{note:f==="Camden Town"?"Edgware branch":""}))];let A=0;for(let nt=1.5;nt<t-1;nt+=3,A++)di(i,"sheet",e,-1,nt,3,2.47,2.75,M[A%2],null,.03);const D=[0,1].map(()=>{const nt=ec(f,u,o),ct=o.chance(Math.min(.6,u*.16))?o.pick(ju):null;return{text:nc(nt)?`${nt}. There is no such station on this line.`:ct?`${nt} — the roundel is not quite right.`:nt,uv:s.add(150,183,(kt,At,Lt)=>Fo(kt,At,Lt,nt,{defect:ct}))}}),I=[0,1].map(()=>{const nt=o.chance(Math.min(.7,u*.17));let ct;return{uv:s.add(112,168,(kt,At,Lt)=>{ct=Ss(kt,At,Lt,o,nt,!0)}),text:`${ct.headline}. ${ct.strap}.`}});let N=0;const L=["roundel","name","poster","roundel","strip","roundel","name","poster","help"];r.start&&L.splice(1,0,"info");const B={roundel:1.15,poster:1,name:p,strip:4.4,info:1.4,help:.34},q=1,G=[];let z=null,$=3,Z=0,rt=0;for(;Z<40;){const nt=L[Z%L.length],ct=B[nt];if(nt==="info"&&Z>1){Z++;continue}if($+ct>t-2.6)break;if(nt==="poster"&&R&&$+ct>t-4.8){Z++;continue}const U=$+ct/2;if(nt==="roundel"){const kt=D[rt++%2],At=di(i,"sheet",e,-1,U,ct,.85,2.25,kt.uv);l.push({...At,r:6,label:"read name board",title:"STATION",text:kt.text})}else if(nt==="poster"){const kt=I[N++%2],At=di(i,"sheet",e,-1,U,ct,.62,2.12,kt.uv);l.push({...At,r:5,label:"read poster",title:"POSTER",text:kt.text})}else if(nt==="name"){const kt=di(i,"sheet",e,-1,U,ct,1.72,2.25,x,null,.025);l.push({...kt,r:7,label:"read tiles",title:"TILED NAME",text:`· ${d.toUpperCase().split(" ").join(" · ")} ·${d!==f?` (the frieze says ${f})`:""}`}),ex(i,e,U,c),G.push(U)}else if(nt==="strip"){const kt=di(i,"sheet",e,-1,U,ct,1,1.92,v);l.push({...kt,r:6,cone:.92,label:"read line map",title:"NORTHERN LINE",text:Ry(f,y)})}else if(nt==="info"){const kt=Eo(i,"sheet",e,-1,U,ct,.5,2.25,T,null,.04,3);l.push({...kt,r:5.5,n:[e,0],label:"read customer information",title:"CUSTOMER INFORMATION",text:jv(),clue:!0,info:!0,onRead:At=>ms.keys.forEach(Lt=>At.story.noticeRead(Lt))}),z={x:g(.3),z:U,yaw:-e*Math.PI/2}}else{const kt=di(i,"cut",e,-1,U,ct,.7,1.38,Xt("helpPoint"));l.push({...kt,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(At,Lt,Rt)=>At.director.helpPoint(Rt)})}$+=ct+q,Z++}if(!r.start&&o.chance(.3)){const nt=bf(n),ct=C(nt),U=di(i,"sheet",e,-1,1.9,.5,.95,1.6,ct,{tint:[1.1,1.1,1.1]});l.push({...U,r:4.5,label:"read notice",title:nt.title,text:nt.text,clue:!0,onRead:kt=>kt.story.noticeRead(nt.key)})}if(R){const nt=pf(n,g(J.back+.62),t-1.9,-e*.5,R.th,0,R.face);l.push(nt.item);for(const ct of nt.walls)c.push(ct)}const xt=bo("board"),Y=mo(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,xt,xt,{emit:1.2},g(.15));l.push({...Y,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const it=!!(a.stretch&&a.stretch.clocksBack),_t=bo(it?"clockBack":"clock"),at=mo(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,_t,_t,{emit:1.05},g(1.2));l.push({...at,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:it?"The second hand is ticking backwards.":"The clock is keeping time."});const Pt=s.add(250,56,(nt,ct,U)=>Oo(nt,ct,U,{dir:"up"})),Nt=s.add(250,56,(nt,ct,U)=>zo(nt,ct,U,`${Fr(m)} platform ${qi(m)}`,{sub:"Northern line",bg:"#f6f6f1",fg:"#16213f"})),Vt=mo(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,Pt,Nt,{emit:1.25},g(0));l.push({...Vt,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"});const qt=ti(n);if(G.length&&qt.chance(a.paperChance??.3)){const nt=Ff(qt,a),ct=cx(n,nt),U=qt.pick(G),kt=qt.chance(.25),At=-e*Math.PI/2+qt.range(-.4,.4),Lt=[e,0];kt?l.push(Yh(n,g(J.back+qt.range(.85,1.05)),0,U+qt.sign()*qt.range(.3,1.2),At+qt.range(-.5,.5),nt,ct,{floor:!0,n:Lt})):l.push(Yh(n,g(J.back+.41),.46,U+qt.range(-.6,.6),At,nt,ct,{n:Lt}))}if(i.quad("atlas",[g(J.track+.98),.9,t+.4],[g(J.track+1.13),.9,t+.4],[g(J.track+1.13),1.05,t+.4],[g(J.track+.98),1.05,t+.4],[0,0,-1],Jt("white"),{emit:1.6,tint:[1,.12,.08]}),r.figure){const nt=g(.75),ct=t-7;i.quad("figure",[nt+.3,0,ct],[nt-.3,0,ct],[nt-.3,1.78,ct],[nt+.3,1.78,ct],[0,0,-1],Xt("figure"),{emit:.02}),h.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(U,kt)=>U.director.events.figureGone(kt)})}return{items:l,walls:c,zones:h,spawn:z}}const ux={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=e?30:n.pick([30,36,36,42]),r=n.sign(),s=t.stretch,o=s?s.plan.slice(0,t.idx).filter(u=>u==="platform").length:0,a=s&&s.dir||"north",l=o%2?a==="north"?"south":"north":a,c=J.back-.4,h=J.cx+J.R+.4;return{p:{L:i,side:r,start:e,dir:l,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:r>0?[c,-2.4,-1.2-.2,h,J.cy+J.R+.3,i+xe.depth+.2]:[-h,-2.4,-1.2-.2,-c,J.cy+J.R+.3,i+xe.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:r}=e;tx(t,i,r),Wh(t,0,1,r,!e.start),Wh(t,i,-1,r,!0),e.start||(t.addPortal(0,0,0,0),bi(t,{x:0,y:0,z:0,yaw:0},Ut.crown)),t.addPortal(0,0,i,0);const s=hx(n,i,r),o=m=>r*m,a=(J.back+J.edge)/2,l=(J.edge-J.back)/2,c=[{ax:o(a),az:0,bx:o(a),bz:i,hw:l,ya:0,yb:0}],h=Ut.W/2,u=[[o(J.back+.08),0,o(J.back+.08),i],[o(J.edge-.1),0,o(J.edge-.1),i],[o(J.back),i,o(-h),i],[o(h),i,o(J.edge),i]];e.start?u.push([o(J.back),0,o(J.edge),0]):u.push([o(J.back),0,o(-h),0],[o(h),0,o(J.edge),0]);for(const m of s.walls)u.push(m);const f={zones:s.zones};return e.start&&(f.spawn=s.spawn||{x:o(.1),z:6,yaw:0}),{cells:c,walls:u,items:s.items,extra:f}}},fx=.16,dx=.3,Sn=1.6,Pn=(n,t)=>n+t*dx,gs=(n,t,e)=>n+t*fx*e;function ic(n,t,e,i,r=[-1.5,-.5,.5,1.5],s=0,o=null){const a=Xt("stairTread"),l=Xt("riser");for(let c=0;c<e;c++){const h=Pn(t,c),u=Pn(t,c+1),f=gs(s,i>0?c+1:c,i),m=gs(s,i>0?c:c+1,i);for(let g=0;g<r.length-1;g++){const _=r[g],d=r[g+1];i>0?n.quad("atlas",[d,f,u],[_,f,u],[_,f,h],[d,f,h],[0,1,0],a,o):n.quad("atlas",[_,f,h],[d,f,h],[d,f,u],[_,f,u],[0,1,0],a,o),i>0?n.quad("atlas",[_,m,h],[d,m,h],[d,f,h],[_,f,h],[0,0,-1],l,o):n.quad("atlas",[_,m,u],[d,m,u],[d,f,u],[_,f,u],[0,0,1],l,o)}}}function rc(n,t,e,i,r,s,o=.025,a="rubber",l=null){const c=Jt(a),h=[t-o,i+o,e],u=[t+o,i+o,e],f=[t+o,s+o,r],m=[t-o,s+o,r];n.quad("atlas",h,u,f,m,[0,1,0],c,l);const g=t>0?-1:1,_=t+g*o;n.quad("atlas",[_,i-o,e],[_,i+o,e],[_,s+o,r],[_,s-o,r],[g,0,0],c,l)}const px={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),r=Pn(0,i),s=gs(0,i,e),o=Pn(Sn,i)+Sn;return{p:{dir:e,n:i,run:r,rise:s,len:o,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:s,z:o,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,o]}},build(n){const{b:t,p:e}=n,i=Pn(Sn,e.n),r=u=>ze((u-Sn)/e.run,0,1)*e.rise,s=[0,Sn],o=Math.round(e.run/.9);for(let u=1;u<o;u++)s.push(Sn+e.run*u/o);s.push(i,e.len);const a=s.map(u=>({x:0,y:r(u),z:u,yaw:0})),l=vi(t,a,jl(Ut),{floor:null});for(const u of l.cells)u.surface="stone";const c=Ut.W/2,h=Xt("floor");for(let u=0;u<3;u++){const f=-c+u,m=f+1;t.quad("atlas",[f,0,0],[m,0,0],[m,0,Sn],[f,0,Sn],[0,1,0],h),t.quad("atlas",[f,e.rise,i],[m,e.rise,i],[m,e.rise,e.len],[f,e.rise,e.len],[0,1,0],h)}ic(t,Sn,e.n,e.dir);for(const u of[-c+.09,c-.09])rc(t,u,Sn-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),bi(t,a[0],Ut.crown),ef(t,a,l.dist,Ut.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:a}}},sc=5.4,ye=sc/2,Dl=1.2,Ll=3.7,Aa=Yl(sc,Dl,Ll),fi=3.6,bn=1.2,jh=Math.tan(Math.PI/6),mr=[-.95,.95],pn=.5,Xe=.92,mx={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),r=i*jh*e,s=fi*2+i;return{p:{dir:e,run:i,rise:r,len:s,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:r,z:s,yaw:0}],box:[-ye-.4,Math.min(0,r)-.5,0,ye+.4,Math.max(0,r)+4.3,s]}},build(n){const{b:t,p:e,sheet:i,rng:r}=n,s=fi,o=fi+e.run,a=z=>ze((z-s)/e.run,0,1)*e.rise,l=[0,fi-bn,s],c=Math.round(e.run/1.2);for(let z=1;z<=c;z++)l.push(s+e.run*z/c);l.push(o+bn,e.len);const h=l.map(z=>({x:0,y:a(z),z,yaw:0}));vi(t,h,Aa,{floor:null}),Nr(t,h[0],Aa,Ut,1,"tile"),Nr(t,h[h.length-1],Aa,Ut,-1,"tile");const u=[0,1,0],f=Xt("floor"),m=Xt("deck"),g=Jt("metal");for(const[z,$,Z]of[[0,fi-bn,0],[o+bn,e.len,e.rise]])t.grid("atlas",[-ye-.04,Z,z],[sc+.08,0,0],[0,0,$-z],5,2,u,f,null,!0);const _=.4,d=Math.round(e.run/_),p=e.rise/d,y=z=>z===d?o:s+z*_,v=z=>z===d?e.rise:z*p,x=Xt("tread"),R=Jt("steelDark"),b=Xt("comb");for(const z of mr){const $=z-pn,Z=z+pn;for(const[rt,xt,Y]of[[fi-bn,s,0],[o,o+bn,e.rise]])t.quad("atlas",[$,Y,rt],[Z,Y,rt],[Z,Y,xt],[$,Y,xt],u,m);t.quad("atlas",[$,.003,s-.25],[Z,.003,s-.25],[Z,.003,s],[$,.003,s],u,b),t.quad("atlas",[Z,e.rise+.003,o+.25],[$,e.rise+.003,o+.25],[$,e.rise+.003,o],[Z,e.rise+.003,o],u,b);for(let rt=0;rt<d;rt++){const xt=y(rt),Y=y(rt+1),it=v(p>0?rt+1:rt),_t=v(p>0?rt:rt+1);t.quad("atlas",[$,it,xt],[Z,it,xt],[Z,it,Y],[$,it,Y],u,x);const at=p>0?xt:Y;t.quad("atlas",[$,_t,at],[Z,_t,at],[Z,it,at],[$,it,at],[0,0,p>0?-1:1],R)}}Hi(t,h[0],ye+.04),Hi(t,h[h.length-1],ye+.04),Hi(t,{x:0,y:0,z:fi-bn,yaw:0},ye),Hi(t,{x:0,y:e.rise,z:o+bn,yaw:0},ye);const T=[-ye,mr[0]-pn,mr[0]+pn,mr[1]-pn,mr[1]+pn,ye],C=fi-bn,S=o+bn,M=[[C,s,0,0],[s,o,0,e.rise],[o,S,e.rise,e.rise]];for(const[z,$,Z,rt]of M){for(let xt=0;xt<6;xt+=2){const Y=T[xt],it=T[xt+1];t.quad("atlas",[Y,Z+Xe,z],[it,Z+Xe,z],[it,rt+Xe,$],[Y,rt+Xe,$],u,m)}for(const[xt,Y]of[[T[1],1],[T[2],-1],[T[3],1],[T[4],-1]])t.quad("atlas",[xt,Z,z],[xt,rt,$],[xt,rt+Xe,$],[xt,Z+Xe,z],[Y,0,0],g),t.quad("atlas",[xt,Z-.3,z],[xt,rt-.3,$],[xt,rt,$],[xt,Z,z],[Y,0,0],Jt("steelDark")),rc(t,xt+Y*.03,z,Z+Xe+.04,$,rt+Xe+.04,.04)}for(let z=0;z<6;z+=2){const $=T[z],Z=T[z+1];t.quad("atlas",[$,0,C],[Z,0,C],[Z,Xe,C],[$,Xe,C],[0,0,-1],g),t.quad("atlas",[$,e.rise,S],[Z,e.rise,S],[Z,e.rise+Xe,S],[$,e.rise+Xe,S],[0,0,1],g)}const A=i.add(150,46,(z,$,Z)=>zo(z,$,Z,"Stand on the right",{bg:"#0019a8"}));for(let z=0;z<3;z++){const $=s+e.run*(.2+.3*z),Z=a($)+Xe;t.quad("sheet",[.24,Z+.02,$],[-.24,Z+.02,$],[-.24,Z+.17,$],[.24,Z+.17,$],[0,0,-1],A),t.quad("sheet",[-.24,Z+.02,$+.01],[.24,Z+.02,$+.01],[.24,Z+.17,$+.01],[-.24,Z+.17,$+.01],[0,0,1],A)}const D=Math.max(2,Math.round(e.run/3.2));for(let z=0;z<D;z++){const $=s+e.run*(z+.5)/D,Z=a($)+Xe,rt=e.faulty===z;t.box("atlas",-.04,Z,$-.04,.04,Z+1.25,$+.04,Jt("steelDark"),null,"xXzZ"),t.box("atlas",-.2,Z+1.25,$-.2,.2,Z+1.36,$+.2,Xt("uplight"),{emit:1.5,flick:rt},"xXzZY"),t.addLight(0,Z+2.2,$,.5,8,rt,[1,.95,.82])}for(const[z,$]of[[1.6,0],[e.len-1.6,e.rise]])Yi(t,{x:0,y:$,z,yaw:Math.PI/2},Ll-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),bi(t,h[0],Ut.crown);const I=[];for(let z=0;z<4;z++)I.push(i.add(84,116,($,Z,rt)=>Ss($,Z,rt,r,r.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const N=z=>ye*Math.cos(Math.asin(ze((z-Dl)/(Ll-Dl),0,1)));let L=0;for(let z=s+.8;z<o-.4;z+=2.25,L++){const $=a(z),Z=jh*Math.sign(e.rise)*.27;for(const rt of[-1,1]){const xt=rt*(N(1.55)-.04),Y=rt*(N(2.3)-.04);t.quad("sheet",[xt,$+1.55-Z*rt,z-.27*rt],[xt,$+1.55+Z*rt,z+.27*rt],[Y,$+2.3+Z*rt,z+.27*rt],[Y,$+2.3-Z*rt,z-.27*rt],[-rt,0,0],I[(L+(rt>0?2:0))%4])}}const B=[{ax:0,az:0,bx:0,bz:C,hw:ye,ya:0,yb:0},{ax:0,az:S,bx:0,bz:e.len,hw:ye,ya:e.rise,yb:e.rise}],q=[[-ye,0,-ye,C],[ye,0,ye,C],[-ye,S,-ye,e.len],[ye,S,ye,e.len]],G=Ut.W/2;for(const z of[0,e.len])q.push([-ye,z,-G,z],[G,z,ye,z]);for(const z of mr){for(const[$,Z,rt,xt]of M)B.push({ax:z,az:$,bx:z,bz:Z,hw:pn,ya:rt,yb:xt,surface:"metal"});q.push([z-pn,C,z-pn,S],[z+pn,C,z+pn,S])}for(let z=0;z<6;z+=2)q.push([T[z],C,T[z+1],C],[T[z],S,T[z+1],S]);return{cells:B,walls:q,items:[],frames:h}}},en=3,gx=5.2,Zr=24,_x={type:"exit",plan(){const n=Pn(0,Zr),t=gs(0,Zr,1),e=Pn(en,Zr)+gx;return{p:{run:n,rise:t,len:e},exits:[],box:[-1.9,-.4,0,1.9,t+3.3,e]}},build(n){const{b:t,p:e,sheet:i}=n,r=L=>ze((L-en)/e.run,0,1)*e.rise,s=[0,1.5,en],o=Math.round(e.run/.9);for(let L=1;L<=o;L++)s.push(en+e.run*L/o);s.push(e.len-2.2,e.len);const a=s.map(L=>({x:0,y:r(L),z:L,yaw:0})),l=vi(t,a,jl(Ut),{floor:null});for(const L of l.cells)L.surface="stone";const c=Ut.W/2,h=Xt("floor"),u=-c-.03,f=Ut.W+.06,m=Pn(en,Zr);t.grid("atlas",[u,0,0],[f,0,0],[0,0,en],3,3,[0,1,0],h,null,!0),t.grid("atlas",[u,e.rise,m],[f,0,0],[0,0,e.len-m],3,4,[0,1,0],h,null,!0),ic(t,en,Zr,1,[0,1,2,3].map(L=>u+f*(L/3)));for(const L of[-c+.09,c-.09])rc(t,L,en-.3,.95,en+e.run+.3,e.rise+.95);const g={x:0,y:e.rise,z:e.len-.02,yaw:0},_=Jt("daylight");Nr(t,g,Qu(Ut),null,-1,"atlas",()=>[(_[0]+_[2])/2,(_[1]+_[3])/2],{emit:2}),t.addLight(0,e.rise+1.6,e.len-.6,1.9,10,!1,[1,1,1]),t.addLight(0,e.rise+1.2,e.len-3.2,.7,8,!1,[1,1,1]);const d=Xt("gate");for(const L of[-1,1]){const B=L*(c-.06),q=m+.3;t.quad("cut",[B,e.rise,q],[B,e.rise,q+.7],[B,e.rise+2.3,q+.7],[B,e.rise+2.3,q],[-L,0,0],d,{emit:.25})}const p=m+1.5,y=p+1,v=[],x=Jt("metal"),R=e.rise,b=.09,T=[-1.41,-.47,.47,1.41];T.forEach((L,B)=>{t.box("atlas",L-b,R,p,L+b,R+.98,y,x,{tint:[.62,.65,.68]},"xXYzZ"),B>0&&(t.quad("atlas",[L-.07,R+.985,p+.08],[L+.07,R+.985,p+.08],[L+.07,R+.985,p+.24],[L-.07,R+.985,p+.24],[0,1,0],Jt("yellow"),{emit:1.1}),t.quad("atlas",[L+.05,R+.72,p-.005],[L-.05,R+.72,p-.005],[L-.05,R+.82,p-.005],[L+.05,R+.82,p-.005],[0,0,-1],Jt("white"),{emit:1.7,tint:[.15,1,.3]}));for(const q of[-1,1]){if(B===0&&q<0||B===T.length-1&&q>0)continue;const G=L+q*(b+.012);t.quad("atlas",[G,R+.3,p+.52],[G,R+.3,p+.9],[G,R+.85,p+.9],[G,R+.85,p+.52],[q,0,0],Jt("white"),{tint:[.85,.12,.1]})}v.push([L-b,p,L-b,y],[L+b,p,L+b,y],[L-b,p,L+b,p],[L-b,y,L+b,y])}),t.addPortal(0,0,0,0),bi(t,a[0],Ut.crown),Yi(t,{x:0,y:r(en+e.run*.3),z:en+e.run*.3,yaw:0},Ut.crown-.04,{});const C=i.add(250,56,(L,B,q)=>Oo(L,B,q,{dir:"up"})),S=i.add(250,56,(L,B,q)=>zo(L,B,q,"No entry")),A=[{...mo(t,"sheet",{x:0,y:0,z:en-.6,yaw:0},2.1,1.7,.38,C,S,{emit:1.3}),r:8,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}],D=l.walls.concat([[-c,e.len-.4,c,e.len-.4]],v),I={y0:e.rise-.6,y1:e.rise+.6},N=[{x0:-c,x1:c,z0:p+.2,z1:y,...I,fire:L=>{L.audio.sfx("touchOut"),L.director.setHint("Golders Green. The air is cold and smells of rain.",6)}},{x0:-c,x1:c,z0:y+.9,z1:e.len,...I,fire:L=>L.director.win()}];return{cells:l.cells,walls:D,items:A,frames:a,extra:{zones:N}}}},vx={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,r=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],s=vi(t,r,Ut,{floor:Xt("floor")}),o=Xt("shutter");Nr(t,{x:0,y:0,z:e.len-.02,yaw:0},Qu(Ut),null,-1,"atlas",(h,u)=>[o[0]+(o[2]-o[0])*(h/Ut.W+.5),o[1]+(o[3]-o[1])*(u/Ut.crown)]),t.addPortal(0,0,0,0),bi(t,r[0],Ut.crown);const a=i.add(200,60,(h,u,f)=>zo(h,u,f,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],a);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:s.cells,walls:s.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:r}}},Il=2.3,Of=2.4,Ra=Yl(Il,1.2,Of),Te=1.2,ro=2.5,yx={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),r=Pn(Te+ro,e)+ro+Te,s=gs(0,e,i);return{p:{steps:e,dir:i,len:r,rise:s,flick:n.chance(.35)},exits:[{x:0,y:s,z:r,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,r]}},build(n){const{b:t,p:e,sheet:i,theme:r}=n,s=Te+ro,o=Pn(s,e.steps),a=o-s,l=b=>(a>0?ze((b-s)/a,0,1):b>=s?1:0)*e.rise,c=b=>({x:0,y:l(b),z:b,yaw:0}),h=vi(t,[c(0),c(Te)],Ut,{floor:Xt("floor")}),u=[Te,Te+1.25,s];a>0&&u.push(o),u.push(o+1.25,e.len-Te);const f=vi(t,u.map(c),jl(Ra),{floor:null,u0:Te}),m=vi(t,[c(e.len-Te),c(e.len)],Ut,{floor:Xt("floor"),u0:e.len-Te});Nr(t,c(Te),Ut,Ra,-1,"tile"),Nr(t,c(e.len-Te),Ut,Ra,1,"tile");const g=Il/2,_=Xt("floorDark"),d=-g-.03,p=Il+.06;t.grid("atlas",[d,0,Te],[p,0,0],[0,0,ro],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,o],[p,0,0],[0,0,e.len-Te-o],2,3,[0,1,0],_,null,!0),e.steps>0&&ic(t,s,e.steps,e.dir,[0,1,2].map(b=>d+p*(b/2)),0),Hi(t,c(Te),Ut.W/2,"floorDark"),Hi(t,c(e.len-Te),Ut.W/2,"floorDark");for(const b of f.cells)b.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),bi(t,c(0),Ut.crown),Yi(t,c((s+o)/2),Of-.03,{flick:e.flick,power:.8,radius:6,len:.9});const y=[],v=[["TO THE TRAINS",-1,Te+1.3],["WAY OUT",1,e.len-Te-1.3]];for(const[b,T,C]of v){const S=i.add(220,54,(A,D,I)=>rf(A,D,I,b,r,T>0?"right":"left")),M=Si(t,"sheet",c(C),T,g,l(C)+.72,1.4,.345,S,null,.025);y.push({...M,r:4,label:"read tiles",title:"TILED LEGEND",text:b==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const x=h.walls.concat(f.walls,m.walls),R=Ut.W/2;for(const b of[Te,e.len-Te])x.push([-R,b,-g,b],[g,b,R,b]);return{cells:h.cells.concat(f.cells,m.cells),walls:x,items:y}}},Vn={corridor:Oy,bend:zy,junction:jy,platform:ux,stairs:px,escalator:mx,exit:_x,deadend:vx,cross:yx},An=n=>!!Vn[n];function Zh(n,t={}){const e=n.stretchCount+1,i=new Se(He(n.seed,1e3+e*13)),r=[];if(t.first&&r.push(An("platform")?"platform":"corridor"),t.fromJunction&&r.push("corridor"),t.exit)r.push("corridor",An("exit")?"exit":"corridor");else{const a=i.int(2,4);let l=t.first?1:0,c=r[r.length-1]||"";for(let h=0;h<a;h++){const u=i.weighted([["corridor",c==="corridor"?1:3],["bend",c==="bend"?.4:2.2],["stairs",An("stairs")&&c!=="stairs"?1.5:0],["escalator",An("escalator")&&c!=="escalator"?.7:0],["platform",An("platform")&&l<1&&h>0?1.6:0]]);r.push(u),u==="platform"&&(l++,An("cross")&&i.chance(.5)&&r.push("cross","platform")),c=u}An("platform")&&!r.includes("platform")&&r.splice(i.int(Math.min(1,r.length),r.length),0,"platform"),r[r.length-1]!=="corridor"&&r.push("corridor"),r.push(An("junction")?"junction":"corridor")}t.fromJunction&&n.testBranch&&r.splice(0,r.length,"corridor",...n.testBranch),n.stretchCount++;const s=t.index??n.progress,o=my(s);return{id:e,plan:r,rng:i,index:Math.min(s,Tl.length),station:o,theme:gf(o),out:t.fromJunction?t.exitIndex===0?1:-1:0,dir:i.chance(.5)?"north":"south",dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const xx=new Set(["junction","cross"]);function Mx(n){return mv(0,n)}function Sx(n,t,e,i,r){const s=n.game.world,o=Mx(s.exitPose(t,e).yaw);let a=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(a=n.branchStretch(t,e),l=0);let c=a.plan[l];c===void 0&&(c="corridor",l=a.plan.length);const h=p=>n.envFor(a,l,{yaw:o,...p}),u=p=>n.envFor(a,l-1,{yaw:o,filler:!0,...p}),f=o>.1?-1:o<-.1?1:0,m=xx.has(c)||c==="corridor"&&a.plan[l+1]==="junction";if(i===0){if(m&&f!==0)return{def:Vn.bend,env:u({turn:f})};if(c==="bend"){const p=f!==0?f:a.out||r.sign();return{def:Vn.bend,env:h({turn:p})}}if(c==="junction")return{def:Vn.junction,env:h(n.junctionEnv(r,a))};if(l===0&&a.fromJunction){const p=t.env;return{def:Vn.corridor,env:h({gate:!0,len:8,noticeChance:0,theme:p.theme,station:p.station}),force:!0}}return{def:Vn[c]||Vn.corridor,env:h({})}}const g=[],_=a.out||1;f!==0?g.push(["bend",{turn:f}]):g.push(["bend",{turn:_}]),g.push(["corridor",{short:!0}]),An("stairs")&&g.push(["stairs",{dir:-1}],["stairs",{dir:1}]),An("escalator")&&g.push(["escalator",{dir:-1}],["escalator",{dir:1}]),g.push(["corridor",{short:!0,tiny:!0}]),f===0&&g.push(["bend",{turn:-_}]);const d=g[i-1];return d?{def:Vn[d[0]],env:u(d[1])}:null}const Ca=n=>String(n).padStart(2,"0"),Kh={"Battersea Power Station":"Battersea Pwr Stn","via Charing Cross":"via CX","via Bank":"via Bank"},Jh=["There is a good service on the Northern line","Please stand behind the yellow line","Mind the gap between the train and the platform","This station closes after the last train","Please keep your belongings with you at all times","Check front of train for destination"],Qh=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain","North End. This train does not stop at North End"];function bx(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function tu(n){const t=(Math.floor(n)%86400+86400)%86400;return`${Ca(Math.floor(t/3600))}:${Ca(Math.floor(t/60)%60)}:${Ca(t%60)}`}function eu(n,t,e=28){const i=`${n}   ***   `,r=Math.floor(t*5)%i.length;return(i+i+i).slice(r,r+e)}const Tx=n=>n<=0?"due":`${n} min${n===1?"":"s"}`;function zf(n,t,e,i,r){const s=Sy(n,t),o=[];for(let a=0;a<2;a++){const l=e.nextAt+a*e.period,c=new Se(He(r,Math.round(l))),[h,u]=s[Math.floor(c.next()*s.length)],f=`${Kh[h]||h}${u?` ${Kh[u]||u}`:""}`;o.push({dest:h,via:u,label:f,secs:l-i})}return o}function Ex(n,t){n.anchorTod===void 0&&(n.anchorTod=bx(),n.anchorT=t);const e=n.game,i=n.anchorTod+(t-n.anchorT),r=n.anchorTod-(t-n.anchorT),s=Kt.goal-n.progress,o=n.wrong,a=Math.floor(t/12),l=new Se(He(n.seed,a)),c=l.chance(Math.min(.85,o*.2)),h=e.world&&e.world.current,u=h&&h.env.station||"Mornington Crescent",f=(h&&h.def.type==="platform"?h.p.dir:h&&h.env.pdir)||"north",m=e.trains?e.trains.schedule():{nextAt:e.state.time+150,period:240},g=zf(u,f,m,e.state.time,n.seed);let _=s<=0?"approaching":`${s} min${s===1?"":"s"}`;o>=3&&Math.floor(t*4)%23===0&&(_=l.pick(["-- mins","99 mins","never"]));const d=(R,b)=>({l:`${R} ${b.label}`,r:Tx(Math.max(0,Math.ceil(b.secs/60)))});let p=[d(1,g[0]),{l:"2 Way out",r:_},d(3,g[1])];c&&(p[2]=l.pick([{l:"3 Check front of train",r:""},{l:`3 ${u}`,r:"due"},{l:"3 North End",r:"-- mins"},{l:"3 Not in service",r:""}])),e.trains&&e.trains.atPlatform()&&(p[0]={l:`1 ${g[0].label}`,r:""});const y=n.lastWrong?r:i,x=a%3===1?eu(c?l.pick(Qh):l.pick(Jh),t):tu(y);return{rows:p,footer:x,rows2:[{l:"Way out",r:_},{l:n.lastWrong?"You are going the wrong way":"Follow the yellow and black signs"},{l:eu(c?l.pick(Qh):l.pick(Jh),t)}],footer2:tu(y),tod:i,todBack:r}}class wx{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new Se(He(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=Zh(this,{first:!0});e&&(i.plan=e.slice());const r=Vn[i.plan[0]],s=this.envFor(i,0);return t.start(r,s,He(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,pdir:t.dir,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,gseed:this.seed,...i}}choose(t,e,i,r){return Sx(this,t,e,i,r)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,r=t.env.stretch?t.env.stretch.index:this.progress,s=i?r+1:Math.max(0,r-2);t.branches[e]=Zh(this,{correct:i,fromJunction:t,exitIndex:e,exit:s>=Kt.goal,index:s,clocksBack:!i})}return t.branches[e]}junctionEnv(t,e){const i=this.junctionsPlanned++,r=e?e.index:this.progress,s=r<2?0:r<4?1:2,o=i===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||o,jlevel:this.forceLevel??s}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min(Kt.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}boardState(t){return Ex(this,t)}}class Ax{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Se((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.nextSecurity=45,this.securityN=0,this.welcomeT=0,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}welcome(t=3){this.welcomeT=t}hush(){this.welcomeT=0,this.queue.length=0,this.cur&&this.finish()}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,r=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:r,dur:r+Math.max(3.2,i*.43)+.8,spoken:!1,a:t,tag:t.tag!==void 0?t.tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(this.welcomeT>0&&(this.welcomeT-=t,this.welcomeT<=0&&this.say({text:Zv,chime:"rise"})),!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(this.nextSecurity-=t,this.nextSecurity<=0){this.nextSecurity=180,this.nextAmbient=Math.max(this.nextAmbient,20);const i=e.state.wrong>=3&&this.securityN%3===2,r=i?qv[0]:Mh[this.securityN%Mh.length];this.securityN++,this.say({text:r,chime:i?"fall":"rise",odd:i});return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const r=this.rng.next();let s=Xv,o=!1;r<Math.min(.8,i*.22)&&(s=i>=3&&this.rng.chance(.5)?Yv:$v,o=!0);const a=e.state.station||"this station",l=this.rng.pick(s).replaceAll("{station}",a).replaceAll("{next}",Mf(a,"north")||"the next station");this.say({text:l,chime:o&&this.rng.chance(.6)?"fall":"rise",odd:o})}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class Rx{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Se((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=zi(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;this.dipT>0&&(i=.35+.3*we(t*18,9));const r=this.game.trains?this.game.trains.level:0;return r>.02&&(i*=1-.22*r*(.5+.5*we(t*14,4))),this.blackout>0&&(i=.02),this.pow=zi(this.pow,i,20,e||.016),this.pow}}function Cx(n,t){const e=n.world,i=e.current,r=n.state;if(!i)return;const s=i.env;s.station&&r.station!==s.station&&(r.station=s.station);const o=i.built;if(!o||!o.extra)return;const[a,l]=ko(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(o.extra.zones)for(const h of o.extra.zones)h.done||a>=h.x0&&a<=h.x1&&l>=h.z0&&l<=h.z1&&(h.y0===void 0||c>=h.y0&&c<=h.y1)&&(h.once!==!1&&(h.done=!0),h.fire(n,i,h,t))}function Bf(n,t){const e=n.p,i=s=>s===0?"left":"right",r=s=>`${e.dirs[s]==="north"?"northbound":"southbound"} platform`;if(e.kind==="announce"){const s=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow signs for the ${r(s)}. To the ${i(s)}. Please.`,`The way out is by the ${r(s)}, on the ${i(s)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(s)}, for the ${r(s)}. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${r(s)}, to the ${i(s)}.`,`Customers for the way out should keep to the ${i(s)} for the ${r(s)}.`,`The way out is by way of the ${r(s)}, on your ${i(s)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return null}const nu={clock:"Customers are reminded that all station clocks run forwards.",signs:"Please follow the yellow and black signs for the way out."},Px=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function Dx(n,t){n.state.junctionKind=t.p.kind,t.announcement===void 0&&(t.announcement=Bf(t,n.director.announcer.rng)),t.announcement&&n.director.announcer.say(t.announcement)}function Lx(n,t){const e=n.director.announcer,i=t.p.kind;n.director.reading=null,n.player.zoomTarget=0,i==="announce"?(t.announcement===void 0&&(t.announcement=Bf(t,e.rng)),e.say({...t.announcement,urgent:!0})):nu[i]?e.say({text:nu[i],chime:"rise",urgent:!0}):e.say({text:e.rng.pick(Px),chime:"none",urgent:!0})}function Ix(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,r=n.story,s=n.director.events;t.gateShut=!0,t.gateWall=Fh,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(Fh));const o=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const a=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(a,l,c);const h=n.player;if(h.pos.x-=a,h.pos.y-=l,h.pos.z-=c,h.eyeY-=l,i.refresh(),n.audio.sfx("gate"),s.lightsOut(.28),s.glitch(o?.5:1.3),e.def.type!=="junction")return;r.decide(o);const u=t.env.stretch?t.env.stretch.index:r.progress;r.progress=Math.min(Kt.goal,u),n.state.progress=r.progress,o?r.progress>=Kt.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),s.brownOut(2.2)),n.state.lastChoice=o?"right":"wrong"}class Ux{constructor(t){this.game=t,this.announcer=new Ax(t),this.events=new Rx(t),this.reset()}reset(){this.target=null,this.reading=null,this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Mornington Crescent. The Customer Information board in front of you explains how to find the way out.",9),this.announcer.welcome(3)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){Dx(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read the signs, watch the clocks, listen for the chime.",7))}helpPoint(t){Lx(this.game,t)}commit(t){Ix(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),r=Math.floor(e.time%60),s=[["Tape length",`${i}:${String(r).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Sent back down the line",`${e.wrongTurns} time${e.wrongTurns===1?"":"s"}`],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(s),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,3).map(r=>r.r?`${r.l} … ${r.r}`:r.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:r}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:r},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,r)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,r=e.viewDir(),s=e.pos.x,o=e.eyeY,a=e.pos.z;let l=null,c=0;const h=[i.current,...i.neighbours(i.current)];for(const u of h)if(u.built)for(const f of u.built.items){if(f.hidden)continue;const[m,g,_]=Bi(u,f.x,f.y,f.z),d=m-s,p=g-o,y=_-a,v=Math.hypot(d,p,y);if(v>(f.r||5.5)||v<.2)continue;const x=(d*r.x+p*r.y+y*r.z)/v,R=f.cone||.9;if(x<R)continue;const b=x-v*.01;b>c&&(c=b,l={item:f,node:u,d:v,dot:x})}if(this.target=l,this.reading){const u=this.reading,[f,m,g]=Bi(u.node,u.item.x,u.item.y,u.item.z),_=f-s,d=m-o,p=g-a,y=Math.hypot(_,d,p),v=(_*r.x+d*r.y+p*r.z)/Math.max(y,.001);(y>(u.item.r||5.5)+1.5||v<.55||!u.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[r,s]=this.hints.shift();this.setHint(r,s)}e.step&&i.audio.footstep(e.running,i.player.loc),Cx(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,r=new Date;let s="";t&&this.target&&!this.reading&&(s=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const o=this.announcer.caption();i.caption=o?o.text:"",i.prompt=s,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:r,live:i.started,caption:o?o.text:"",captionTag:o?o.tag:"",prompt:s,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const a=e.renderer.dv.uniforms;a.uTrack.value=this.events.tracking,a.uZoom.value=e.player.zoom}}const Xn=512,wo=256,Wn={side:[0,0,512,160],front:[0,164,150,92],rear:[154,164,150,92],roof:[310,170,30,30],dark:[350,170,30,30],lamp:[390,170,30,30],tail:[430,170,30,30]},Rr=[-.78,1.5];let so=null,mt=null,ls=null;const Wt=n=>160-(n-Rr[0])/(Rr[1]-Rr[0])*160;function iu(n,t,e,i){const r=mt.createLinearGradient(0,Wt(i),0,Wt(e));r.addColorStop(0,"#fff6d6"),r.addColorStop(.55,"#e9dba4"),r.addColorStop(1,"#8c8468"),mt.fillStyle="#1b1c1e",mt.fillRect(n-2,Wt(i)-2,t+4,Wt(e)-Wt(i)+4),mt.fillStyle=r,mt.fillRect(n,Wt(i),t,Wt(e)-Wt(i)),mt.fillStyle="rgba(40,40,60,0.55)",mt.fillRect(n+t*.3,Wt(i),2,Wt(e)-Wt(i)),mt.fillRect(n,Wt(e+.16),t,Wt(e)-Wt(e+.16))}function Nx(){const n=60.23529411764706;mt.fillStyle="#15161a",mt.fillRect(0,Wt(-.05),Xn,160-Wt(-.05));for(const[e,i]of[[.9,2.3],[6.2,7.6]]){mt.fillStyle="#26282c",mt.fillRect(e*n,Wt(-.25),(i-e)*n,Wt(-.7)-Wt(-.25));for(const r of[e+.35,i-.35])mt.fillStyle="#3a3c40",mt.beginPath(),mt.arc(r*n,Wt(-.48),.27*70,0,7),mt.fill()}mt.fillStyle="#f2f2ee",mt.fillRect(0,0,Xn,Wt(.42)),mt.fillStyle="#0c2a8e",mt.fillRect(0,Wt(.42),Xn,Wt(-.05)-Wt(.42)),mt.fillStyle="#9da2a6",mt.fillRect(0,0,Xn,Wt(1.42));const t=[[.25,.62,"door1"],[1.05,1.3,"win"],[2.5,1.3,"door2"],[3.95,.6,"win"],[4.7,.5,"win"],[5.35,1.3,"door2"],[6.8,1.3,"win"],[8.2,0,""]];for(const[e,i,r]of t)if(r==="win")iu(e*n,i*n,.72,1.3);else if(r){mt.fillStyle="#d5231d",mt.fillRect(e*n,Wt(1.42),i*n,Wt(-.05)-Wt(1.42));const s=r==="door2"?2:1;for(let o=0;o<s;o++){const a=(e+i/s*o)*n,l=i/s*n;iu(a+l*.2,l*.6,.62,1.3),mt.fillStyle="rgba(0,0,0,0.5)",mt.fillRect(a,Wt(1.42),1.5,Wt(-.05)-Wt(1.42))}mt.fillStyle="#e7c21c",mt.fillRect(e*n,Wt(-.02),i*n,3)}No(mt,4.6*n,Wt(.2)-6,12,{name:""}),mt.fillStyle="rgba(60,45,25,0.16)";for(let e=0;e<260;e++)mt.fillRect(Math.random()*Xn,Wt(.5)+Math.random()*(160-Wt(.5)),2,2+Math.random()*5)}function ru(n,t){const[,e,i,r]=Wn.front;mt.fillStyle="#d5231d",mt.fillRect(n,e,i,r),mt.fillStyle="#9da2a6",mt.fillRect(n,e,i,r*.06),mt.fillStyle="#101113",mt.fillRect(n+i*.06,e+r*.2,i*.88,r*.34),mt.fillStyle="#2a2f36";for(const[s,o]of[[.09,.36],[.41,.59],[.64,.91]])mt.fillRect(n+i*s,e+r*.23,i*(o-s),r*.28);mt.fillStyle="#101113",mt.fillRect(n+i*.3,e+r*.07,i*.4,r*.11),mt.fillStyle="#101113",mt.fillRect(n,e+r*.86,i,r*.14);for(const s of[.16,.84])mt.fillStyle=t,mt.beginPath(),mt.arc(n+i*s,e+r*.7,r*.055,0,7),mt.fill(),mt.fillStyle="#55120f",mt.beginPath(),mt.arc(n+i*(s<.5?s+.09:s-.09),e+r*.7,r*.04,0,7),mt.fill()}function Hf(){if(so)return;so=Ln(Xn,wo),mt=so.getContext("2d"),mt.fillStyle="#15161a",mt.fillRect(0,0,Xn,wo),Nx(),ru(Wn.front[0],"#fff4c8"),ru(Wn.rear[0],"#ff2a1a");const n=(t,e)=>{mt.fillStyle=e,mt.fillRect(t[0]-3,t[1]-3,t[2]+6,t[3]+6)};n(Wn.roof,"#8d9296"),n(Wn.dark,"#131417"),n(Wn.lamp,"#fff6d8"),n(Wn.tail,"#ff2a1a"),ls=new Io(so),ls.colorSpace=Ke,ls.anisotropy=2}function Fx(){return Hf(),ls}function kx(n){Hf();const[t,e,i,r]=Wn.front;mt.fillStyle="#0b0a08",mt.fillRect(t+i*.31,e+r*.08,i*.38,r*.09),mt.fillStyle="#ffb21e",mt.textAlign="center",mt.textBaseline="middle";let s=r*.1;mt.font=`400 ${s}px ${wr}`;const o=mt.measureText(n).width;o>i*.36&&(s*=i*.36/o,mt.font=`400 ${s}px ${wr}`),mt.fillText(n,t+i*.5,e+r*.128),ls.needsUpdate=!0}function Kr(n){const[t,e,i,r]=Wn[n];return[(t+.5)/Xn,1-(e+r-.5)/wo,(t+i-.5)/Xn,1-(e+.5)/wo]}const gn={cars:4,carLen:8.5,gap:.32};gn.length=gn.cars*gn.carLen+(gn.cars-1)*gn.gap;const gr=[[.98,-.78],[1.2,-.3],[1.2,.75],[1.1,1.15],[.88,1.5],[.6,1.76],[.3,1.88],[0,1.9]],Ox=4;function zx(n,t,e,i){const r=t-gn.carLen,s=t,o=Kr("side"),a=Kr("roof"),l=Kr("dark"),c=f=>o[1]+(o[3]-o[1])*(f-Rr[0])/(Rr[1]-Rr[0]),h={emit:.8},u={emit:.42};for(const f of[-1,1])for(let m=0;m<gr.length-1;m++){const[g,_]=gr[m],[d,p]=gr[m+1],y=[f*(p-_),-(d-g)*1,0],v=[f*g,_],x=[f*d,p];if(m<Ox){const R=f>0?o[0]:o[2],b=f>0?o[2]:o[0];n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,[R,c(_),b,c(p)],h)}else n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,a,u)}n.quad("train",[-.98,-.78,r],[.98,-.78,r],[.98,-.78,s],[-.98,-.78,s],[0,-1,0],l,{emit:.1});for(const[f,m,g]of[[s,1,e?"front":null],[r,-1,i?"rear":null]]){const _=g?Kr(g):l,d=(y,v)=>g?[_[0]+(_[2]-_[0])*(.5+m*y/2.4),_[1]+(_[3]-_[1])*((v+.78)/2.68)]:[(_[0]+_[2])/2,(_[1]+_[3])/2],p={emit:g?.85:.25};for(let y=0;y<gr.length-1;y++){const[v,x]=gr[y],[R,b]=gr[y+1];n.quadUV("train",[-v,x,f],[v,x,f],[R,b,f],[-R,b,f],[0,0,m],d(-v,x),d(v,x),d(R,b),d(-R,b),p)}if(g){const y=Kr(g==="front"?"lamp":"tail");for(const v of[-.82,.82])n.quad("train",[v-.09,-.08,f+m*.02],[v+.09,-.08,f+m*.02],[v+.09,.1,f+m*.02],[v-.09,.1,f+m*.02],[0,0,m],y,{emit:2})}}}let oo=null;function Bx(){if(oo)return oo;const n=new Ju;for(let s=0;s<gn.cars;s++)zx(n,-s*(gn.carLen+gn.gap),s===0,s===gn.cars-1);const t=n.bake([0,0,0]).train,e={value:new Me(0,1,-1e6,1e6)},i=Zu(Fx(),null,!1,e);i.side=Cn;const r=new on(t,i);return r.frustumCulled=!1,r.visible=!1,r.name="train",oo={mesh:r,clip:e},oo}const Jr=5.5,Hx=6.5,Gx=1,su="Please mind the gap between the train and the platform.";class Vx{constructor(t){this.game=t;const{mesh:e,clip:i}=Bx();this.mesh=e,this.clip=i,t.scene.add(e),this.reset()}reset(){this.rng=new Se((this.game.state.seed||1)^31249),this.nextAt=32,this.period=215,this.phase="idle",this.node=null,this.t=0,this.s=0,this.level=0,this.target=0,this.seenId=0,this.count=0,this.mesh.visible=!1,this.game.state.train="idle",this.game.state.trains=0}schedule(){return{nextAt:this.nextAt,period:this.period}}atPlatform(){return this.phase==="dwell"}soon(t=3){this.phase==="idle"&&(this.nextAt=this.game.state.time+t+Jr)}_done(){this.phase="idle",this.node=null,this.mesh.visible=!1,this.target=0,this.nextAt=this.game.state.time+this.period*this.rng.range(.8,1.25)}_begin(t){const e=this.game,i=e.state,r=t.env.station,s=t.p.dir,o=zf(r,s,this.schedule(),i.time,e.story.seed)[0];this.train=o,this.node=t,this.phase="approach",this.t=0,this.count++,i.trains=this.count,kx(o.dest.replace("Battersea Power Station","Battersea")),e.audio.sfx("trainApproach"),e.director.announcer.say({text:`The train now approaching platform ${qi(s)} is not in service. Please stand well back from the platform edge.`,chime:"rise"}),e.director.setHint("A warm wind pushes out of the tunnel. It smells of brake dust.",5)}update(t){const e=this.game,i=e.state.time,r=e.world.current,s=e.director.events,o=!!(r&&r.def.type==="platform"&&r.built);if(o&&r.id!==this.seenId&&(this.seenId=r.id,this.phase==="idle"&&!r.p.start&&(this.nextAt=Math.min(this.nextAt,i+Jr+this.rng.range(9,20)))),this.t+=t,this.phase==="idle")i>=this.nextAt-Jr&&(o?this._begin(r):(this.phase="distant",this.t=0,e.audio.sfx("train")));else if(this.phase==="distant")this.target=.75*Math.sin(ze(this.t/9,0,1)*Math.PI),this.t>9&&this._done();else{const c=this.node;if(!c.built||!e.world.nodes.has(c.id)){this._done();return}const h=c.p.L,u=h-1.3,f=-1.2;if(this.phase==="approach")this.target=.75*ze(this.t/Jr,0,1),this.t>=Jr&&(this.phase="arrive",this.t=0,this.mesh.visible=!0,s.glitch(.5));else if(this.phase==="arrive"){const m=ze(this.t/Hx,0,1);this.s=f+(u-f)*(1-(1-m)*(1-m)),this.target=1-.7*m,!this.braked&&m>.45&&(this.braked=!0,e.audio.sfx("trainBrake")),m>=1&&(this.phase="dwell",this.t=0,this.braked=!1,this.spoke=0)}else if(this.phase==="dwell"){this.target=.22;const m=e.director.announcer,g=d=>Math.max(3.2,d.split(/\s+/).length*.43)+.8,_=(d,p)=>m.say({text:d,chime:"none",tag:"(from the train)",urgent:p});if(this.spoke===0&&this.t>.4&&(this.spoke=1,m.say({text:su,chime:"none",tag:"(platform)",urgent:!0}),this.tCall=this.t+g(su)+.2),this.spoke===1&&this.t>this.tCall){this.spoke=2;const d=c.env.station,p=this.train,y=e.state.wrong>=2.5&&this.rng.chance(.5)?Ay(d):wy(d,c.p.dir,p.dest,p.via);_(y,!0),this.tClose=this.t+g(y)+.3}this.spoke===2&&this.t>this.tClose&&(this.spoke=3,_("Stand clear of the doors, please.")),this.spoke===3&&this.t>this.tClose+1.5&&(this.spoke=4,e.audio.sfx("doorChime")),this.spoke===4&&this.t>this.tClose+5&&(this.phase="depart",this.t=0,e.audio.sfx("trainDepart"))}else this.phase==="depart"&&(this.s=u+.5*Gx*this.t*this.t,this.target=ze(.3+this.t*.12,0,1),this.s-gn.length>h+xe.depth&&(s.glitch(.4),this._done()));if(this.node){const m=c.p.side,[g,_,d]=Bi(c,m*J.track,0,this.s);this.mesh.position.set(g,_,d),this.mesh.rotation.y=c.yaw;const p=Math.sin(c.yaw),y=Math.cos(c.yaw),v=c.pos.x*p+c.pos.z*y;this.clip.value.set(p,y,v-xe.depth+.07,v+h+xe.depth-.07)}}this.level=zi(this.level,this.target,this.target>this.level?2.2:.9,t);const a=o&&this.node===r;e.player.shake=this.level*(a?1:.25);const l=a&&this.phase!=="dwell"?(this.phase==="depart"?.1:.2)*this.level*(1-.8*e.player.zoom):0;e.player.windX=l?Math.sin(r.yaw)*l:0,e.player.windZ=l?Math.cos(r.yaw)*l:0,this.node&&this.node.built&&!this.node.built.group.visible?this.mesh.visible=!1:this.node&&(this.phase==="arrive"||this.phase==="dwell"||this.phase==="depart")&&(this.mesh.visible=!0),e.state.train=this.phase}}function Pa(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class Wx{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,h,u]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const f=e.createOscillator();f.type=h,f.frequency.value=c;const m=e.createGain();m.gain.value=u,f.connect(m),m.connect(i),f.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const r=e.createOscillator();r.type="square",r.frequency.value=100;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=2900,s.Q.value=1.4,r.connect(s),s.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),r.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,Pa(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const o=Pa(e,t.white,.8);o.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,o.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const a=e.createGain();a.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,Pa(e,t.white,1.3).connect(l),l.connect(a),a.connect(t.out)}update(t,e){const i=this.ctx,r=i.currentTime,s=.12;this.t+=t;const o=this.t,a=e.director.events,l=e.world.current,c=e.state.wrong,h=a.pow,u=l?l.flick.value:1,f=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*h*f*(1-c*.03),r,s),this.buzz.gain.setTargetAtTime(.004+(u<.5?0:.006)*h+(1-h)*.01,r,.02);const m=e.trains?e.trains.level:0;this.rumble.gain.setTargetAtTime(.16+.1*we(o*.13,1)+m*.75,r,.3),this.rumbleLP.frequency.setTargetAtTime(62+m*120,r,.4);const g=l&&l.def.type==="platform"?1.5:1,_=.5+.5*we(o*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+m*.11)*g,r,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*we(o*.17,3))+m*500,r,.5);const d=Math.max(0,we(o*.11,4)-.35)+m*.25;this.whistle.gain.setTargetAtTime(d*.05*g,r,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*we(o*.23,5),r,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Ee(n,{freq:t,to:e,type:i="sine",dur:r=.3,gain:s=.2,attack:o=.005,at:a=0,rev:l=.5,dry:c=1}){const h=n.ctx,u=h.currentTime+a,f=h.createOscillator();f.type=i,f.frequency.setValueAtTime(t,u),e&&f.frequency.exponentialRampToValueAtTime(e,u+r);const m=h.createGain();if(m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(s,u+o),m.gain.exponentialRampToValueAtTime(1e-4,u+r),f.connect(m),c>0){const g=h.createGain();g.gain.value=c,m.connect(g),g.connect(n.out)}if(l>0){const g=h.createGain();g.gain.value=l,m.connect(g),g.connect(n.rev)}f.start(u),f.stop(u+r+.05)}function pe(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:r=1e3,q:s=1,at:o=0,rev:a=.4,dry:l=1,attack:c=.002,sweep:h=0}){const u=n.ctx,f=u.currentTime+o,m=u.createBufferSource();m.buffer=n.white,m.loop=t>1.2;const g=u.createBiquadFilter();g.type=i,g.frequency.setValueAtTime(r,f),g.Q.value=s,h&&g.frequency.exponentialRampToValueAtTime(h,f+t);const _=u.createGain();if(_.gain.setValueAtTime(1e-4,f),_.gain.exponentialRampToValueAtTime(e,f+c),_.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(g),g.connect(_),l>0){const d=u.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(a>0){const d=u.createGain();d.gain.value=a,_.connect(d),d.connect(n.rev)}m.start(f,Math.random()*1.5),m.stop(f+t+.05)}function _r(n,t,e,i=.16){Ee(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Ee(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Ee(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function Xx(n,t,e,i){const r=(t?1.25:1)*(.85+Math.random()*.3),s=(i?1.06:.95)*(.94+Math.random()*.12);Ee(n,{freq:95*s,to:48,dur:.09,gain:.16*r,rev:.35}),e==="metal"?(pe(n,{dur:.07,gain:.12*r,type:"bandpass",freq:2300*s,q:5,rev:.6}),Ee(n,{freq:610*s,dur:.22,gain:.03*r,type:"triangle",rev:.8,dry:.4})):e==="stone"?pe(n,{dur:.06,gain:.11*r,type:"bandpass",freq:1250*s,q:1.2,rev:.7}):(pe(n,{dur:.045,gain:.13*r,type:"highpass",freq:1900*s,q:.7,rev:.75}),pe(n,{dur:.03,gain:.05*r,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const qx={chimeRise(n){_r(n,392,0),_r(n,493.9,.42),_r(n,587.3,.84)},chimeFall(n){_r(n,587.3,0),_r(n,493.9,.42),_r(n,380,.84,.17)},zoom(n){Ee(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){pe(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Ee(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),pe(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),pe(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Ee(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)pe(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,r]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Ee(n,{freq:e*(.99+Math.random()*.02),dur:r,gain:i,at:t,rev:.9,dry:.7,attack:.002});pe(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),pe(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);pe(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}pe(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Ee(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),pe(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},touchOut(n){Ee(n,{freq:2350,dur:.14,gain:.07,type:"triangle",attack:.004,rev:.4,dry:.9})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Ee(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Ee(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Ee(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Ee(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Ee(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},$x={trainApproach(n){pe(n,{dur:9.5,gain:.32,type:"lowpass",freq:110,sweep:420,attack:4.8,rev:.7,dry:.8}),pe(n,{dur:6,gain:.012,type:"bandpass",freq:2900,sweep:3700,q:26,attack:3.5,rev:1,dry:.2});for(let t=0;t<14;t++){const e=5.2+t*(.2+t*.022);pe(n,{dur:.06,gain:.16-t*.008,type:"lowpass",freq:330,at:e,rev:.8,dry:.7}),pe(n,{dur:.05,gain:.1-t*.005,type:"lowpass",freq:300,at:e+.085,rev:.8,dry:.7})}},trainBrake(n){pe(n,{dur:2.6,gain:.03,type:"bandpass",freq:3300,sweep:2300,q:34,attack:.5,rev:1,dry:.5}),pe(n,{dur:2.2,gain:.018,type:"bandpass",freq:4500,sweep:3200,q:40,attack:.7,at:.3,rev:1,dry:.4}),pe(n,{dur:.9,gain:.07,type:"highpass",freq:2600,at:3.3,attack:.03,rev:.6,dry:.8}),Ee(n,{freq:70,to:42,dur:.5,gain:.12,at:3.2,rev:.5})},doorChime(n){for(let t=0;t<9;t++)Ee(n,{freq:1960,dur:.11,gain:.05,at:.9+t*.21,type:"triangle",attack:.004,rev:.6,dry:.7});pe(n,{dur:.12,gain:.12,type:"lowpass",freq:500,at:3,rev:.7})},trainDepart(n){for(const[t,e,i,r]of[[.2,110,330,2.6],[2.5,180,520,3],[5.2,260,700,3.6]])Ee(n,{freq:e,to:i,dur:r,gain:.03,at:t,type:"sawtooth",attack:.4,rev:.8,dry:.5}),Ee(n,{freq:e*2.02,to:i*2.02,dur:r,gain:.012,at:t,type:"triangle",attack:.4,rev:.8,dry:.4});pe(n,{dur:9.5,gain:.26,type:"lowpass",freq:140,sweep:380,attack:3,rev:.7,dry:.8});for(let t=0;t<16;t++){const e=1.6+7.2*(1-Math.sqrt(1-t/16));pe(n,{dur:.055,gain:.07+t*.006,type:"lowpass",freq:320,at:e,rev:.8,dry:.7})}}},ou="./voice/";function Yx(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}const jx=["Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel","Microsoft Susan","Microsoft Maisie","Martha","Kate","Serena","Stephanie","Fiona","Moira","Karen","Tessa","Catherine","Samantha","Victoria","Allison","Ava","Susan","Zoe","Microsoft Zira","Microsoft Aria","Microsoft Jenny","Google US English"],Zx=/\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;class Kx{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.clips=null,this.ctx=null,this.dest=null,this.src=null,this.buffers=new Map,this.seq=0,typeof fetch<"u"&&fetch(`${ou}index.json`).then(t=>t.ok?t.json():[]).then(t=>{this.clips=new Set(t)}).catch(()=>{}),this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(s=>/^en/i.test(s.lang)),i=e.filter(s=>/en[-_]GB/i.test(s.lang));for(const s of jx){const o=i.find(a=>a.name.includes(s))||e.find(a=>a.name.includes(s));if(o&&!/\bmale\b/i.test(o.name)){this.voice=o;return}}const r=s=>/female|woman/i.test(s.name)||!Zx.test(s.name);this.voice=i.find(r)||e.find(r)||i[0]||e[0]||null}prime(){if(this.enabled&&this.synth)try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}attach(t,e){this.ctx=t,this.dest=e}_buffer(t){return this.buffers.has(t)||this.buffers.set(t,fetch(`${ou}${t}.mp3`).then(e=>e.arrayBuffer()).then(e=>new Promise((i,r)=>this.ctx.decodeAudioData(e,i,r)))),this.buffers.get(t)}speak(t,e={}){if(!this.enabled)return;this._stopAll();const i=Yx(t);if(this.clips&&this.clips.has(i)&&this.ctx){const r=++this.seq;this._buffer(i).then(s=>{if(r!==this.seq||!this.enabled)return;const o=this.ctx.createBufferSource();o.buffer=s,o.playbackRate.value=e.odd?.88:1;const a=this.ctx.createGain();a.gain.value=.8,o.connect(a),a.connect(this.dest),o.start(),this.src=o}).catch(()=>{this.buffers.delete(i),r===this.seq&&this._synth(t,e)});return}this._synth(t,e)}_synth(t,e){if(this.synth)try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.86:1,i.volume=.85,this.synth.speak(i)}catch{}}_stopAll(){if(this.seq++,this.src){try{this.src.stop()}catch{}this.src=null}if(this.synth)try{this.synth.cancel()}catch{}}stop(){this._stopAll()}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function au(n,t,e){const i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;e?(o=(o+.02*l)/1.02,s[a]=o*3.5):s[a]=l}return r}function Jx(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let r=0;r<2;r++){const s=i.getChannelData(r);let o=0;for(let a=0;a<e;a++){const l=a/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+r)),h=Math.random()*2-1,u=.25+.75*Math.exp(-l*3);o+=(h-o)*u,s[a]=o*c}}return i}class Qx{constructor(){this.ctx=null,this.ready=!1,this.voice=new Kx,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const r=e.createConvolver();r.buffer=Jx(e);const s=e.createGain();s.gain.value=.55,this.rev.connect(r),r.connect(s),s.connect(this.master),this.white=au(e,2,!1),this.brown=au(e,4,!0),this.ambient=new Wx(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.attach(e,this.master),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=qx[t]||$x[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{Xx(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const Ul=26,cs=.0756,t1={wall:6.83,track:8.02,frieze:2.75,dado:.91,trackDado:5.7};function lu(n,t,e,i,r,s,o){n.fillStyle=$l(s,o.range(-.07,.05)),n.fillRect(t,e,i,r),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,r*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+r-1.5,i-2,1),o.chance(.03)&&(n.fillStyle=o.chance(.5)?"rgba(60,50,35,0.22)":"rgba(255,255,255,0.18)",n.fillRect(t+1,e+1,i-2,r-2))}function Gf(n,t,e,i,r,s,o,a){const l=t/Ul,c=cs*i,h=Math.ceil(r/cs);n.fillStyle=s.grout,n.fillRect(0,e-r*i,t,r*i);for(let u=0;u<h;u++){const f=e-(u+1)*c,m=u%2?l/2:0;for(let g=-1;g<Ul;g++){const _=g*l+m,d=((_+l/2)/t%1+1)%1,p=a(u,(u+.5)*cs,d);p&&(lu(n,_+.5,f+.5,l-1,c-1,p,o),_+l>t&&lu(n,_-t+.5,f+.5,l-1,c-1,p,o))}}}const Ao=n=>Math.round(n/cs),Vf=(n,t)=>Math.min(...t.map(e=>Math.abs(n-e)))*Ul;function e1(n){const i=141.04683195592287,r=Ln(1024,512),s=r.getContext("2d"),o=new Se(Er(n.id+"passage")),a=[Ao(1.2),Ao(1.45)];Gf(s,1024,512,i,3.63,n,o,(c,h,u)=>{if(h<.91)return n.skirt;if(a.includes(c))return n.band;if(h>1.6){const f=Vf(u,[.5]);if(f<.5)return n.band;if(f<1.05)return n.accent}return n.ground});const l=s.createLinearGradient(0,0,0,512);return l.addColorStop(0,"rgba(25,20,12,0.4)"),l.addColorStop(.3,"rgba(25,20,12,0.1)"),l.addColorStop(.8,"rgba(25,20,12,0)"),l.addColorStop(1,"rgba(25,20,12,0.25)"),s.fillStyle=l,s.fillRect(0,0,1024,512),xi(s,0,0,1024,512,Er(n.id)+7,1,!1),r}function cu(n,t,e,i,r,s){n.fillStyle="#e4dcc0",n.fillRect(t,e,i,r);for(let o=0;o<26;o++){const a=t+s.range(0,i),l=e+s.range(0,r),c=s.range(30,120);for(const h of[-i,0,i]){const u=n.createRadialGradient(a+h,l,0,a+h,l,c);u.addColorStop(0,`rgba(60,48,26,${s.range(.04,.1)})`),u.addColorStop(1,"rgba(60,48,26,0)"),n.fillStyle=u,n.fillRect(a+h-c,l-c,c*2,c*2)}}}function n1(n){const i=t1,r=Ln(1024,1024),s=r.getContext("2d"),o=new Se(Er(n.id+"platform")),a=512/i.wall,l=[.25,.75],c=.16*(1024/6),h=.38*(1024/6),u=(y,v)=>{for(const x of l)for(const R of[-1,1]){const b=x*1024+R*h/2-c/2;s.fillStyle=n.band,s.fillRect(b,y,c,v),s.fillStyle="rgba(255,255,255,0.10)",s.fillRect(b,y,2,v),s.fillStyle="rgba(0,0,0,0.25)";for(let T=y;T<y+v;T+=cs*a*3)s.fillRect(b,T,c,1)}};cu(s,0,0,1024,512,o),u(0,512-i.frieze*a);const f=[Ao(1.2),Ao(1.45)];Gf(s,1024,512,a,i.frieze,n,o,(y,v,x)=>v<i.dado?n.skirt:f.includes(y)||Vf(x,l.flatMap(R=>[R-.032,R+.032]))<.55?n.band:n.ground);const m=512/i.track,g=y=>1024-y*m;cu(s,0,512,1024,512,o),u(g(i.trackDado),i.trackDado*m),s.fillStyle="#17181a",s.fillRect(0,512,1024,g(i.trackDado)-512),s.fillStyle=n.band,s.fillRect(0,g(3.6)-3,1024,6);const _=[[.25,6,"#0b0b0b"],[.42,4,"#3a3a3a"],[.6,7,"#101010"],[.78,4,"#4a2c1a"],[1,5,"#0c0c0c"]];for(const[y,v,x]of _){const R=g(i.trackDado+y);s.fillStyle=x,s.fillRect(0,R,1024,v),s.fillStyle="rgba(255,255,255,0.13)",s.fillRect(0,R,1024,1)}for(let y=40;y<1024;y+=170)s.fillStyle="#2c2d2f",s.fillRect(y,g(i.trackDado+1.1),5,1*m);xi(s,0,512,1024,512,Er(n.id)+3,.8,!1);const d=s.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(25,20,12,0.38)"),d.addColorStop(.35,"rgba(25,20,12,0.1)"),d.addColorStop(.85,"rgba(25,20,12,0)"),d.addColorStop(1,"rgba(25,20,12,0.22)"),s.fillStyle=d,s.fillRect(0,0,1024,512);const p=s.createLinearGradient(0,1024,0,512);return p.addColorStop(0,"rgba(25,20,12,0.38)"),p.addColorStop(.4,"rgba(25,20,12,0.12)"),p.addColorStop(1,"rgba(25,20,12,0.05)"),s.fillStyle=p,s.fillRect(0,512,1024,512),xi(s,0,0,1024,512,Er(n.id)+7,1,!1),r}function i1(n,t="passage"){return t==="platform"?n1(n):e1(n)}const ao=new Map,Qr=[],r1=4;function hu(n,t="passage"){const e=Qr.indexOf(n.id);for(e>=0&&Qr.splice(e,1),Qr.push(n.id);Qr.length>r1;){const s=Qr.shift();for(const o of["passage","platform"]){const a=ao.get(`${s}:${o}`);a&&(a.dispose(),ao.delete(`${s}:${o}`))}}const i=`${n.id}:${t}`;let r=ao.get(i);return r||(r=ql(i1(n,t),{repeatU:!0}),ao.set(i,r)),r}const Tn=3;class s1{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.free=[{x:0,y:0,w:t,h:t}],this.used=!1,this.overflow=0}_ensure(){this.canvas||(this.canvas=Ln(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}_place(t,e){let i=-1,r=1/0;for(let l=0;l<this.free.length;l++){const c=this.free[l];c.w>=t&&c.h>=e&&c.w*c.h<r&&(i=l,r=c.w*c.h)}if(i<0)return null;const s=this.free.splice(i,1)[0],o=s.w-t,a=s.h-e;return o>a?(o>8&&this.free.push({x:s.x+t,y:s.y,w:o,h:s.h}),a>8&&this.free.push({x:s.x,y:s.y+e,w:t,h:a})):(a>8&&this.free.push({x:s.x,y:s.y+e,w:s.w,h:a}),o>8&&this.free.push({x:s.x+t,y:s.y,w:o,h:e})),{x:s.x,y:s.y}}room(t){const e=this.free;this.free=e.map(r=>({...r}));let i=0;for(const[r,s]of t){if(!this._place(Math.round(r)+Tn*2,Math.round(s)+Tn*2))break;i++}return this.free=e,i}add(t,e,i){return this.paint(this.reserve(t,e),i)}reserve(t,e){const i=this.size;t=Math.min(Math.round(t),i-Tn*2),e=Math.min(Math.round(e),i-Tn*2);let r=this._place(t+Tn*2,e+Tn*2);if(!r){this.overflow++;for(let s=0;s<4&&!r;s++)t=Math.max(8,Math.round(t*.7)),e=Math.max(8,Math.round(e*.7)),r=this._place(t+Tn*2,e+Tn*2);r||(r={x:0,y:0})}return{x:r.x+Tn,y:r.y+Tn,w:t,h:e}}paint(t,e){this._ensure();const i=this.size,{x:r,y:s,w:o,h:a}=t,l=this.ctx;l.save(),l.translate(r,s),l.beginPath(),l.rect(0,0,o,a),l.clip(),l.clearRect(0,0,o,a),e(l,o,a),l.restore(),this.used=!0;const c=.5;return[(r+c)/i,1-(s+a-c)/i,(r+o-c)/i,1-(s+c)/i]}finish(){return this.used?ql(this.canvas):null}}function o1(n,t){const e=t.env.theme||gf("Mornington Crescent");return n==="tile"?hu(e,"passage"):n==="ptile"?hu(e,"platform"):n==="dyn"?Xy():Hv()}function a1(n){return new s1(n.def.sheetSize||512)}let uu="";function l1(n,t){const e=n.state,r=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;r!==uu&&(uu=r,qy(n.story.boardState(t)))}class c1{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new Tv,this.overlay.mobile=this.mobile,this.renderer=new bv(t,this.overlay,{mobile:this.mobile}),this.scene=new Xu,this.camera=new sn(Kt.fov,this.renderer.aspect,.08,90),this.player=new Iv(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:Kt.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new Qx,this.story=new wx(this),this.world=new Pv(this.scene,{choose:(i,r,s,o)=>this.story.choose(i,r,s,o),textures:(i,r)=>o1(i,r),makeSheet:i=>a1(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new Ux(this),this.trains=new Vx(this),this.keyboard=Uv(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=Nv(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0,r=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.progress=r,this.story.wrong=i,this.story.base=i;const s=this.story.begin(this.world,e),o=s.built&&s.built.extra&&s.built.extra.spawn;if(o){const a=Math.cos(s.yaw),l=Math.sin(s.yaw);this.player.spawn(s.pos.x+o.x*a+o.z*l,s.pos.y,s.pos.z-o.x*l+o.z*a,s.yaw+(o.yaw||0))}else this.player.spawn(s.pos.x,s.pos.y,s.pos.z+1.5,s.yaw);Object.assign(this.state,{won:!1,time:0,progress:r,wrong:i,junctions:0,wrongTurns:0,cluesRead:0,station:s.env.station}),this.director.reset(),this.trains&&this.trains.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=ze((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const r=e.started&&!e.paused&&!e.won;try{r?this.step(i):this.idle(i)}catch(s){e.errors++,e.errors<5&&console.error(s)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,r=this.player;e.time+=t,i.mx=ze(i.kmx+i.tmx,-1,1),i.mz=ze(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const s=r.update(t,i,this.world);this.world.pump(),this.trains.update(t),this.director.update(t,s),this.animate(t),e.x=+r.pos.x.toFixed(2),e.y=+r.pos.y.toFixed(2),e.z=+r.pos.z.toFixed(2),e.yaw=+r.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+Kt.eye,e.pos.z),this.camera.rotation.set(e.pitch+we(e.t*.3,5)*.03,e.yaw+we(e.t*.21,6)*.08,we(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let r=0;for(const s of this.world.nodes.values()){if(!s.built)continue;r++;const o=we(e*1.3+s.phase,3),a=we(e*23+s.phase*7,4);s.flick.value=o>.15-i*.04?a>-.2?1:.15:a>.55?.9:.04}this.state.built=r,is.uPower.value=this.director.power(e,t),l1(this,e)}}const Da=n=>({wrong:n.wrong||0,station:n.station||"Camden Town",gseed:n.seed||1,idx:n.idx||0}),h1={diagram(n,t,e,i){const r=bs(i.station||"Camden Town",i.dir||"south");i.corrupt&&Mo(r,i.corrupt,new Se(i.seed||1)),Ql(n,t,e,r,{station:i.station,dir:i.dir||"south"})},roundel(n,t,e,i){Fo(n,t,e,i.name||"Camden Town",i)},strip(n,t,e,i){Df(n,t,e,{current:i.station||"Mornington Crescent",ghosts:i.ghosts?Jl:[]})},psign(n,t,e,i){Lf(n,t,e,i)},whiteboard(n,t,e,i){const r=new Se(i.seed||1);hf(n,t,e,i.junction?lf(r,Da(i),i.junction):Zl(r,Da(i),i),r)},info(n,t,e,i){Uf(n,t,e,ms,i.station||"Mornington Crescent",new Se(i.seed||1))},paper(n,t,e,i){const r=new Se(i.seed||1);kf(n,t,e,Ff(r,Da(i),i),r)}};function u1(n,t,e,i={}){const r=Ln(t,e);return h1[n](r.getContext("2d"),t,e,i),r.toDataURL("image/png")}function f1(n,t){const e=t.player,i=t.world,r=(s,o,a,l,c=0)=>{const[h,u,f]=Bi(s,o,c,a);return i.current=s,i.refresh(!0),e.spawn(h,u,f,s.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(s=0,o=0,a=!1){t.input.kmx=s,t.input.kmz=o,t.input.krun=!!a},look(s=0,o=0){e.yaw+=s,e.pitch+=o},face(s,o=0){e.yaw=s,e.pitch=o},tp(s,o,a){e.pos.x=s,e.pos.y=o,e.pos.z=a,e.eyeY=o+1.62},advance(s=1,o=0){let a=i.current;for(let l=0;l<s;l++){const c=a.exits[Math.min(o,a.exits.length-1)];if(!c||(c.child||i.expand(a,a.exits.indexOf(c)),!c.child))break;a=c.child}return r(a,0,.6,0)},seek(s,o=60,a=0){let l=i.current;for(let c=0;c<o;c++){const h=l.exits[Math.min(a,l.exits.length-1)];if(!h||(h.child||i.expand(l,l.exits.indexOf(h)),!h.child))return null;if(l=h.child,i.current=l,i.refresh(!0),l.def.type===s)return r(l,0,.6,0)}return null},find(s,o=1.6,a={}){let l=i.current,c=a.skip||0;for(let h=0;h<=(a.max||40);h++){i.current=l,i.refresh(!0);const u=l.built?l.built.items.filter(m=>(m.label||"").includes(s)&&(!a.test||a.test(m))):[];if(u.length>c){const m=u[c],g=m.n||[-Math.sign(m.x),0];r(l,m.x+g[0]*o,m.z+g[1]*o,0,a.ly||0);const[_,d,p]=Bi(l,m.x,m.y,m.z),y=_-e.pos.x,v=p-e.pos.z;return e.yaw=Math.atan2(-y,-v),e.pitch=Math.atan2(d-e.eyeY,Math.hypot(y,v)),{type:l.def.type,station:l.env.station,text:m.text,board:m.board,paper:m.paper,correct:l.p.correct}}c-=u.length;const f=l.exits[0];if(!f||(f.child||i.expand(l,0),!f.child))return null;l=f.child}return null},at(s,o,a=0,l=0){return r(i.current,s,o,a,l)},folds(){return[...i.nodes.values()].filter(s=>s.hiddenByFold).length},items(){const s=i.current;return s.built?s.built.items.map(o=>({label:o.label,x:o.x,y:o.y,z:o.z})):[]},info(){const s=i.current;return{type:s.def.type,id:s.id,yaw:+s.yaw.toFixed(2),pos:[s.pos.x,s.pos.y,s.pos.z].map(o=>+o.toFixed(1)),exits:s.exits.length,nodes:i.nodes.size,station:s.env.station,idx:s.env.idx,plan:s.env.stretch?s.env.stretch.plan.join(","):"",items:s.built?s.built.items.map(o=>o.label||o.title||"?"):[]}},voidPixels(s=!1){const o=t.renderer,a=o.gl,l=a.getClearColor(new te);a.setClearColor(16711935,1),a.setRenderTarget(o.target),a.render(t.scene,t.camera);const c=new Uint8Array(o.iw*o.ih*4);a.readRenderTargetPixels(o.target,0,0,o.iw,o.ih,c),a.setRenderTarget(null),a.setClearColor(l,1);let h=0;const u=[];for(let f=0;f<c.length;f+=4)if(c[f]>180&&c[f+1]<90&&c[f+2]>180&&(h++,s&&u.length<400)){const m=f/4%o.iw,g=Math.floor(f/4/o.iw),_=new X((m+.5)/o.iw*2-1,(g+.5)/o.ih*2-1,.5).unproject(t.camera),d=t.camera.position,p=s.y!==void 0?(s.y-d.y)/(_.y-d.y):((s.z??0)-d.z)/(_.z-d.z);u.push([d.x+(_.x-d.x)*p,d.y+(_.y-d.y)*p,d.z+(_.z-d.z)*p].map(y=>+y.toFixed(3)).concat([m,g,c[f],c[f+1],c[f+2]]))}return s?{n:h,hits:u}:h},pick(s,o){const a=t.renderer,l=new dv;return l.setFromCamera(new ee((s+.5)/a.iw*2-1,(o+.5)/a.ih*2-1),t.camera),l.intersectObjects(t.scene.children,!0).slice(0,3).map(h=>{const u=[...i.nodes.values()].find(_=>_.built&&_.built.group===h.object.parent),[f,m]=u?ko(u,h.point.x,h.point.z):[h.point.x,h.point.z],g={x:f,y:h.point.y-(u?u.pos.y:0),z:m};return{layer:h.object.name,node:u?u.def.type:"?",d:+h.distance.toFixed(3),local:[g.x,g.y,g.z].map(_=>+_.toFixed(3)),uv:h.uv?[+h.uv.x.toFixed(4),+h.uv.y.toFixed(4)]:null,face:h.faceIndex}})},buildAll(s=12){const o=[Kt.ahead,Kt.sight];return Kt.ahead=s,Kt.sight=1e6,i.refresh(!0),[Kt.ahead,Kt.sight]=o,[...i.nodes.values()].filter(a=>a.built).map(a=>a.def.type)},scanVoid(s=8,o=[-.5,0,.45]){const a=t.camera,l=a.far;a.far=600,a.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{}};for(const h of i.nodes.values())if(h.built)for(const u of h.built.cells)for(const f of[.25,.75]){const[m,g,_]=Bi(h,u.ax+(u.bx-u.ax)*f,u.ya+(u.yb-u.ya)*f,u.az+(u.bz-u.az)*f);for(let d=0;d<s;d++)for(const p of o){const y=d/s*Math.PI*2+.11;a.position.set(m+.0137,g+1.6071,_-.0093),a.rotation.set(p+.013,y,.007),a.updateMatrixWorld(!0);const v=n.debug.voidPixels();c.views++,c.total+=v,v&&(c.byType[h.def.type]=(c.byType[h.def.type]||0)+v),v&&(!c.worst||v>c.worst.n)&&(c.worst={n:v,type:h.def.type,id:h.id,cam:[a.position.x,a.position.y,a.position.z,a.rotation.x,a.rotation.y,a.rotation.z]})}}return a.far=l,a.updateProjectionMatrix(),c},preview:u1,overflow(){return[...i.nodes.values()].filter(s=>s.built&&s.built.sheetOverflow).map(s=>({type:s.def.type,n:s.built.sheetOverflow,labels:s.built.items.map(o=>o.label).join(",")}))},census(){return[...i.nodes.values()].filter(s=>s.built).map(s=>({key:`${t.state.seed}:${s.id}`,type:s.def.type,boards:s.built.items.filter(o=>o.board).map(o=>o.board),papers:s.built.items.filter(o=>o.paper).map(o=>o.paper)}))},builtCount(){return[...i.nodes.values()].filter(s=>s.built).length},train(s=2){return t.trains.soon(s),t.trains.schedule()},fuzz(s=6,o=12,a=1){const l={takes:0,planned:-i.stats.planned,forced:0,folds:0,overflow:0,mismatch:0,exits:0};i.stats.deadEnds=0,i.stats.forced.length=0;for(let c=a;c<a+s;c++){t.reset(c);let h=c*7919,u=0;for(let f=0;f<o;f++){h=h*1103515245+12345&2147483647;const m=c%5===0?!1:(h>>8)%3!==0,g=n.debug.take(m);if(!g){l.exits++;break}l.takes++,u=m?u+1:Math.max(0,u-2),(i.current.env.stretch.index!==u||g.progress!==Math.min(u,Kt.goal))&&l.mismatch++,n.debug.buildAll(5),l.folds=Math.max(l.folds,n.debug.folds());for(const d of i.nodes.values())d.built&&d.built.sheetOverflow&&l.overflow++}}return l.planned+=i.stats.planned,l.forced=i.stats.deadEnds,l.clashes=i.stats.forced.slice(0,3),l.errors=t.state.errors,t.reset(a),l},plan(s,o=7,a=0,l=0){return t.reset(o,s,a,l),n.debug.info()},take(s=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const o=i.current,a=s?o.p.correct:1-o.p.correct,l=o.p.kind;o.exits[a].child||i.expand(o,a);const c=o.exits[a].child;i.current=c,i.refresh(!0);const[h,u,f]=Bi(c,0,0,4.2);return e.spawn(h,u,f,c.yaw),t.director.commit(c),{kind:l,exit:a,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(s,o){t.story.forceKind=s||null,t.story.forceLevel=o},branch(s){t.story.testBranch=s||null},setProgress(s){t.story.progress=s,t.state.progress=s},setWrong(s){t.story.wrong=s,t.state.wrong=s},say(s,o="rise"){t.director.announcer.say({text:s,chime:o})},glitch(s=1){t.director.events.glitch(s)},use(){return t.director.scan(),t.director.use(!0),t.director.reading?t.director.reading.text:""},hush(){const s=t.director;s.hint="",s.hintT=0,s.hints.length=0,s.announcer.hush()},freeze(s=!0){t.frozen=s},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const Bn=yv(),Gn={ready:!1,state:{started:!1,ready:!1},start(){Wf=!0}};let Wf=!1;window.__game=Gn;async function d1(){Bn.setLoading(!0),await gv(),Bn.drawMarks();let n;try{n=new c1(document.getElementById("view"),Bn)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}Gn.game=n,Gn.state=n.state,Gn.start=()=>n.start(),Gn.pause=()=>n.pause(),Gn.resume=()=>n.resume(),Gn.reset=t=>n.reset(t),f1(Gn,n),n.state.ready=!0,Gn.ready=!0,Bn.onStart(()=>n.start()),Bn.onResume(()=>n.resume()),Bn.onAgain(()=>n.start()),Bn.onVoice(t=>n.audio.setVoiceEnabled(t)),Bn.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),Bn.setLoading(!1),Wf&&n.start()}d1();
