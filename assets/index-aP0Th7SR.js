(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="170",ku=0,sl=1,zu=2,Lc=1,Bu=2,Rn=3,On=0,Ne=1,Ln=2,ei=0,Ki=1,al=2,ol=3,ll=4,Hu=5,xi=100,Gu=101,Vu=102,Wu=103,Xu=104,qu=200,Yu=201,$u=202,Zu=203,Ca=204,Pa=205,Ku=206,ju=207,Ju=208,Qu=209,th=210,eh=211,nh=212,ih=213,rh=214,Da=0,La=1,Ia=2,Qi=3,Ua=4,Na=5,Fa=6,Oa=7,Ic=0,sh=1,ah=2,ni=0,oh=1,lh=2,ch=3,uh=4,hh=5,fh=6,dh=7,Uc=300,tr=301,er=302,ka=303,za=304,Ds=306,Tr=1e3,In=1001,Ba=1002,cn=1003,ph=1004,zr=1005,Me=1006,zs=1007,Qn=1008,kn=1009,Nc=1010,Fc=1011,wr=1012,Po=1013,bi=1014,Un=1015,Lr=1016,Do=1017,Lo=1018,nr=1020,Oc=35902,kc=1021,zc=1022,on=1023,Bc=1024,Hc=1025,ji=1026,ir=1027,Gc=1028,Io=1029,Vc=1030,Uo=1031,No=1033,_s=33776,vs=33777,xs=33778,ys=33779,Ha=35840,Ga=35841,Va=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,$a=37808,Za=37809,Ka=37810,ja=37811,Ja=37812,Qa=37813,to=37814,eo=37815,no=37816,io=37817,ro=37818,so=37819,ao=37820,oo=37821,Ms=36492,lo=36494,co=36495,Wc=36283,uo=36284,ho=36285,fo=36286,mh=3200,gh=3201,_h=0,vh=1,je="",Ze="srgb",Ai="srgb-linear",Ls="linear",Qt="srgb",Pi=7680,cl=519,xh=512,yh=513,Mh=514,Xc=515,Sh=516,Eh=517,bh=518,Th=519,ul=35044,hl="300 es",Nn=2e3,ws=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,po=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function wh(n,t){return(n%t+t)%t}function Hs(n,t,e){return(1-e)*n+e*t}function ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,i,r,s,a,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=r[0],d=r[3],p=r[6],M=r[1],x=r[4],v=r[7],L=r[2],w=r[5],b=r[8];return s[0]=a*_+o*M+l*L,s[3]=a*d+o*x+l*w,s[6]=a*p+o*v+l*b,s[1]=c*_+u*M+h*L,s[4]=c*d+u*x+h*w,s[7]=c*p+u*v+h*b,s[2]=f*_+m*M+g*L,s[5]=f*d+m*x+g*w,s[8]=f*p+m*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=e*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Dt;function qc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ah(){const n=As("canvas");return n.style.display="block",n}const fl={};function xr(n){n in fl||(fl[n]=!0,console.warn(n))}function Rh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Ch(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ph(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(n.r=Ji(n.r),n.g=Ji(n.g),n.b=Ji(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===je?Ls:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const dl=[.64,.33,.3,.6,.15,.06],pl=[.2126,.7152,.0722],ml=[.3127,.329],gl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Ai]:{primaries:dl,whitePoint:ml,transfer:Ls,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:pl,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:dl,whitePoint:ml,transfer:Qt,toXYZ:gl,fromXYZ:_l,luminanceCoefficients:pl,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let Di;class Dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=As("canvas")),Di.width=t.width,Di.height=t.height;const i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lh=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ir(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vs(r[a].image)):s.push(Vs(r[a]))}else s=Vs(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Ce extends ar{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,i=In,r=In,s=Me,a=Qn,o=on,l=kn,c=Ce.DEFAULT_ANISOTROPY,u=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ir(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=Uc;Ce.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(m+1)/2,L=(p+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+d)/4;return x>v&&x>L?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=b/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=C/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=C/s),this.set(i,r,s,e),this}let M=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends ar{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ce(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Uh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $c extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends Ce{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-o;const p=l*f+c*m+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),w=Math.atan2(L,p*M);d=Math.sin(d*w)/L,o=Math.sin(o*w)/L}const v=o*M;if(l=l*d+f*v,c=c*d+m*v,u=u*d+g*v,h=h*d+_*v,d===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-o*m,t[e+2]=c*g+u*m+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new G,vl=new Ur;class Nr{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Hr.subVectors(this.max,hr),Li.subVectors(t.a,hr),Ii.subVectors(t.b,hr),Ui.subVectors(t.c,hr),Xn.subVectors(Ii,Li),qn.subVectors(Ui,Ii),ci.subVectors(Li,Ui);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Xs(e,Li,Ii,Ui,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,Li,Ii,Ui,Hr))?!1:(Gr.crossVectors(Xn,qn),e=[Gr.x,Gr.y,Gr.z],Xs(e,Li,Ii,Ui,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new G,new G,new G,new G,new G,new G,new G,new G],en=new G,Br=new Nr,Li=new G,Ii=new G,Ui=new G,Xn=new G,qn=new G,ci=new G,hr=new G,Hr=new G,Gr=new G,ui=new G;function Xs(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ui.fromArray(n,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fh=new Nr,fr=new G,qs=new G;class Fo{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(qs)),this.expandByPoint(fr.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new G,Ys=new G,Vr=new G,Yn=new G,$s=new G,Wr=new G,Zs=new G;class Zc{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ys.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Ys);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=Yn.dot(this.direction),l=-Yn.dot(Vr),c=Yn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ys).addScaledVector(Vr,f),m}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,r,s){$s.subVectors(e,t),Wr.subVectors(i,t),Zs.crossVectors($s,Wr);let a=this.direction.dot(Zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const l=o*this.direction.dot(Wr.crossVectors(Yn,Wr));if(l<0)return null;const c=o*this.direction.dot($s.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(Zs);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d)}set(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oh,t,kh)}lookAt(t,e,i){const r=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),$n.crossVectors(i,Oe),$n.lengthSq()===0&&(Math.abs(i.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),$n.crossVectors(i,Oe)),$n.normalize(),Xr.crossVectors(Oe,$n),r[0]=$n.x,r[4]=Xr.x,r[8]=Oe.x,r[1]=$n.y,r[5]=Xr.y,r[9]=Oe.y,r[2]=$n.z,r[6]=Xr.z,r[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],d=i[10],p=i[14],M=i[3],x=i[7],v=i[11],L=i[15],w=r[0],b=r[4],C=r[8],S=r[12],y=r[1],R=r[5],k=r[9],D=r[13],H=r[2],V=r[6],W=r[10],Z=r[14],P=r[3],X=r[7],$=r[11],j=r[15];return s[0]=a*w+o*y+l*H+c*P,s[4]=a*b+o*R+l*V+c*X,s[8]=a*C+o*k+l*W+c*$,s[12]=a*S+o*D+l*Z+c*j,s[1]=u*w+h*y+f*H+m*P,s[5]=u*b+h*R+f*V+m*X,s[9]=u*C+h*k+f*W+m*$,s[13]=u*S+h*D+f*Z+m*j,s[2]=g*w+_*y+d*H+p*P,s[6]=g*b+_*R+d*V+p*X,s[10]=g*C+_*k+d*W+p*$,s[14]=g*S+_*D+d*Z+p*j,s[3]=M*w+x*y+v*H+L*P,s[7]=M*b+x*R+v*V+L*X,s[11]=M*C+x*k+v*W+L*$,s[15]=M*S+x*D+v*Z+L*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+_*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+d*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],M=h*d*c-_*f*c+_*l*m-o*d*m-h*l*p+o*f*p,x=g*f*c-u*d*c-g*l*m+a*d*m+u*l*p-a*f*p,v=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*f+a*_*f+u*o*d-a*h*d,w=e*M+i*x+r*v+s*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=M*b,t[1]=(_*f*s-h*d*s-_*r*m+i*d*m+h*r*p-i*f*p)*b,t[2]=(o*d*s-_*l*s+_*r*c-i*d*c-o*r*p+i*l*p)*b,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*b,t[4]=x*b,t[5]=(u*d*s-g*f*s+g*r*m-e*d*m-u*r*p+e*f*p)*b,t[6]=(g*l*s-a*d*s-g*r*c+e*d*c+a*r*p-e*l*p)*b,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*m+e*l*m)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*i*m+e*_*m+u*i*p-e*h*p)*b,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*p+e*o*p)*b,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*b,t[12]=L*b,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*d+e*h*d)*b,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*d-e*o*d)*b,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*b,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,d=a*h,p=o*h,M=l*c,x=l*u,v=l*h,L=i.x,w=i.y,b=i.z;return r[0]=(1-(_+p))*L,r[1]=(m+v)*L,r[2]=(g-x)*L,r[3]=0,r[4]=(m-v)*w,r[5]=(1-(f+p))*w,r[6]=(d+M)*w,r[7]=0,r[8]=(g+x)*b,r[9]=(d-M)*b,r[10]=(1-(f+_))*b,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ni.set(r[0],r[1],r[2]).length();const a=Ni.set(r[4],r[5],r[6]).length(),o=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],nn.copy(this);const c=1/s,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Nn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let m,g;if(o===Nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ws)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Nn){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,m=(i+r)*u;let g,_;if(o===Nn)g=(a+s)*h,_=-2*h;else if(o===ws)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ni=new G,nn=new le,Oh=new G(0,0,0),kh=new G(1,1,1),$n=new G,Xr=new G,Oe=new G,xl=new le,yl=new Ur;class zn{constructor(t=0,e=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zh=0;const Ml=new G,Fi=new Ur,bn=new le,qr=new G,dr=new G,Bh=new G,Hh=new Ur,Sl=new G(1,0,0),El=new G(0,1,0),bl=new G(0,0,1),Tl={type:"added"},Gh={type:"removed"},Oi={type:"childadded",child:null},Ks={type:"childremoved",child:null};class He extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new G,e=new zn,i=new Ur,r=new G(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Dt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(dr,qr,this.up):bn.lookAt(qr,dr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(bn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tl),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}He.DEFAULT_UP=new G(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new G,Tn=new G,js=new G,wn=new G,ki=new G,zi=new G,wl=new G,Js=new G,Qs=new G,ta=new G,ea=new fe,na=new fe,ia=new fe;class an{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),rn.subVectors(t,e),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){rn.subVectors(r,e),Tn.subVectors(i,e),js.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(Tn),l=rn.dot(js),c=Tn.dot(Tn),u=Tn.dot(js),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,i),ia.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(na,s.y),a.addScaledVector(ia,s.z),a}static isFrontFacing(t,e,i,r){return rn.subVectors(i,e),Tn.subVectors(t,e),rn.cross(Tn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return an.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,i),zi.subVectors(s,i),Js.subVectors(t,i);const l=ki.dot(Js),c=zi.dot(Js);if(l<=0&&c<=0)return e.copy(i);Qs.subVectors(t,r);const u=ki.dot(Qs),h=zi.dot(Qs);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(ki,a);ta.subVectors(t,s);const m=ki.dot(ta),g=zi.dot(ta);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(zi,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return wl.subVectors(s,r),o=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(wl,o);const p=1/(d+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(ki,a).addScaledVector(zi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Wt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Wt.workingColorSpace){if(t=wh(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ra(a,s,t+1/3),this.g=ra(a,s,t),this.b=ra(a,s,t-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=Kc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Wt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ie(Te.r*255,0,255))*65536+Math.round(Ie(Te.g*255,0,255))*256+Math.round(Ie(Te.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,r=Te.g,s=Te.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Ze){Wt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,r=Te.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Yr);const i=Hs(Zn.h,Yr.h,e),r=Hs(Zn.s,Yr.s,e),s=Hs(Zn.l,Yr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Yt;Yt.NAMES=Kc;let Vh=0;class Is extends ar{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ir(),this.name="",this.blending=Ki,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jc extends Is{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new G,$r=new $t;class we{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ul,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ul&&(t.usage=this.usage),t}}class Jc extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Qc extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ei extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wh=0;const qe=new le,sa=new He,Bi=new G,ke=new Nr,pr=new Nr,ye=new G;class Gn extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?Qc:Jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,i){return qe.makeTranslation(t,e,i),this.applyMatrix4(qe),this}scale(t,e,i){return qe.makeScale(t,e,i),this.applyMatrix4(qe),this}lookAt(t){return sa.lookAt(t),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ei(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ke.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ke.min,pr.min),ke.expandByPoint(ye),ye.addVectors(ke.max,pr.max),ke.expandByPoint(ye)):(ke.expandByPoint(pr.min),ke.expandByPoint(pr.max))}ke.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)ye.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ye.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),ye.add(Bi)),r=Math.max(r,i.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new G,l[C]=new G;const c=new G,u=new G,h=new G,f=new $t,m=new $t,g=new $t,_=new G,d=new G;function p(C,S,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),o[C].add(_),o[S].add(_),o[y].add(_),l[C].add(d),l[S].add(d),l[y].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){const y=M[C],R=y.start,k=y.count;for(let D=R,H=R+k;D<H;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new G,v=new G,L=new G,w=new G;function b(C){L.fromBufferAttribute(r,C),w.copy(L);const S=o[C];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),v.crossVectors(w,S);const R=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,S=M.length;C<S;++C){const y=M[C],R=y.start,k=y.count;for(let D=R,H=R+k;D<H;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new we(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Al=new le,hi=new Zc,Zr=new Fo,Rl=new G,Kr=new G,jr=new G,Jr=new G,aa=new G,Qr=new G,Cl=new G,ts=new G;class ln extends He{constructor(t=new Gn,e=new jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(aa.fromBufferAttribute(h,t),a?Qr.addScaledVector(aa,u):Qr.addScaledVector(aa.sub(e),u))}e.add(Qr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!(Zr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Zr,Rl)===null||hi.origin.distanceToSquared(Rl)>(t.far-t.near)**2))&&(Al.copy(s).invert(),hi.copy(t.ray).applyMatrix4(Al),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let v=M,L=x;v<L;v+=3){const w=o.getX(v),b=o.getX(v+1),C=o.getX(v+2);r=es(this,p,t,i,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=o.getX(d),x=o.getX(d+1),v=o.getX(d+2);r=es(this,a,t,i,c,u,h,M,x,v),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let v=M,L=x;v<L;v+=3){const w=v,b=v+1,C=v+2;r=es(this,p,t,i,c,u,h,w,b,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const M=d,x=d+1,v=d+2;r=es(this,a,t,i,c,u,h,M,x,v),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Xh(n,t,e,i,r,s,a,o){let l;if(t.side===Ne?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===On,o),l===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ts);return c<e.near||c>e.far?null:{distance:c,point:ts.clone(),object:n}}function es(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Kr),n.getVertexPosition(l,jr),n.getVertexPosition(c,Jr);const u=Xh(n,t,e,i,Kr,jr,Jr,Cl);if(u){const h=new G;an.getBarycoord(Cl,Kr,jr,Jr,h),r&&(u.uv=an.getInterpolatedAttribute(r,o,l,c,h,new $t)),s&&(u.uv1=an.getInterpolatedAttribute(s,o,l,c,h,new $t)),a&&(u.normal=an.getInterpolatedAttribute(a,o,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};an.getNormal(Kr,jr,Jr,f.normal),u.face=f,u.barycoord=h}return u}class Fr extends Gn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(h,2));function g(_,d,p,M,x,v,L,w,b,C,S){const y=v/b,R=L/C,k=v/2,D=L/2,H=w/2,V=b+1,W=C+1;let Z=0,P=0;const X=new G;for(let $=0;$<W;$++){const j=$*R-D;for(let at=0;at<V;at++){const St=at*y-k;X[_]=St*M,X[d]=j*x,X[p]=H,c.push(X.x,X.y,X.z),X[_]=0,X[d]=0,X[p]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(at/b),h.push(1-$/C),Z+=1}}for(let $=0;$<C;$++)for(let j=0;j<b;j++){const at=f+j+V*$,St=f+j+V*($+1),Y=f+(j+1)+V*($+1),nt=f+(j+1)+V*$;l.push(at,St,nt),l.push(St,Y,nt),P+=6}o.addGroup(m,P,S),m+=P,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=rr(n[e]);for(const r in i)t[r]=i[r]}return t}function qh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function tu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Yh={clone:rr,merge:Ae};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Is{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class eu extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new G,Pl=new $t,Dl=new $t;class Ke extends eu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Pl,Dl),e.subVectors(Dl,Pl)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Kh extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ke(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const s=new Ke(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const a=new Ke(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new Ke(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const l=new Ke(Hi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Ke(Hi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nu extends Ce{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new nu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ne,blending:ei});s.uniforms.tEquirect.value=e;const a=new ln(r,s),o=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Me),new Kh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const oa=new G,Jh=new G,Qh=new Dt;class _i{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=oa.subVectors(i,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qh.getNormalMatrix(t),r=this.coplanarPoint(oa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Fo,ns=new G;class iu{constructor(t=new _i,e=new _i,i=new _i,r=new _i,s=new _i,a=new _i){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],M=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,d-m,v-p).normalize(),i[1].setComponents(l+s,f+c,d+m,v+p).normalize(),i[2].setComponents(l+a,f+u,d+g,v+M).normalize(),i[3].setComponents(l-a,f-u,d-g,v-M).normalize(),i[4].setComponents(l-o,f-h,d-_,v-x).normalize(),e===Nn)i[5].setComponents(l+o,f+h,d+_,v+x).normalize();else if(e===ws)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ns.x=r.normal.x>0?t.max.x:t.min.x,ns.y=r.normal.y>0?t.max.y:t.min.y,ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function tf(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Us extends Gn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const M=p*f-a;for(let x=0;x<c;x++){const v=x*h-s;g.push(v,-M,0),_.push(0,0,1),d.push(x/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,v=M+c*(p+1),L=M+1+c*(p+1),w=M+1+c*p;m.push(x,v,w),m.push(v,L,w)}this.setIndex(m),this.setAttribute("position",new Ei(g,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,td=`struct PhysicalMaterial {
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
}`,ed=`
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
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
}`,lp=`#if DEPTH_PACKING == 3200
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
}`,cp=`#define DISTANCE
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
}`,up=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,yp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,Sp=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,Tp=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,Rp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Ip=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:rf,alphamap_pars_fragment:sf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:uf,batching_vertex:hf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:Ef,color_vertex:bf,common:Tf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Df,colorspace_fragment:Lf,colorspace_pars_fragment:If,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:$f,envmap_vertex:kf,fog_vertex:zf,fog_pars_vertex:Bf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Kf,lights_phong_fragment:jf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:ad,logdepthbuf_vertex:od,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:ud,map_particle_pars_fragment:hd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:vd,normal_fragment_begin:xd,normal_fragment_maps:yd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:Ed,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Ad,iridescence_pars_fragment:Rd,opaque_fragment:Cd,packing:Pd,premultiplied_alpha_fragment:Dd,project_vertex:Ld,dithering_fragment:Id,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:kd,shadowmap_vertex:zd,shadowmask_pars_fragment:Bd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:qd,tonemapping_fragment:Yd,tonemapping_pars_fragment:$d,transmission_fragment:Zd,transmission_pars_fragment:Kd,uv_pars_fragment:jd,uv_pars_vertex:Jd,uv_vertex:Qd,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:rp,cube_vert:sp,cube_frag:ap,depth_vert:op,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:up,equirect_vert:hp,equirect_frag:fp,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:yp,meshnormal_vert:Mp,meshnormal_frag:Sp,meshphong_vert:Ep,meshphong_frag:bp,meshphysical_vert:Tp,meshphysical_frag:wp,meshtoon_vert:Ap,meshtoon_frag:Rp,points_vert:Cp,points_frag:Pp,shadow_vert:Dp,shadow_frag:Lp,sprite_vert:Ip,sprite_frag:Up},st={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},_n={basic:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([st.common,st.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([st.lights,st.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};_n.physical={uniforms:Ae([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const is={r:0,b:0,g:0},di=new zn,Np=new le;function Fp(n,t,e,i,r,s,a){const o=new Yt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Ds)?(u===void 0&&(u=new ln(new Fr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:rr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),di.copy(x.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler(di)),u.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Qt,(h!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ln(new Us(2,2),new xn({name:"BackgroundMaterial",uniforms:rr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(is,tu(n)),i.buffers.color.setClear(is.r,is.g,is.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:d}}function Op(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,R,k,D,H){let V=!1;const W=h(D,k,R);s!==W&&(s=W,c(s.object)),V=m(y,D,k,H),V&&g(y,D,k,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(y,R,k,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,R,k){const D=k.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let V=H[R.id];V===void 0&&(V={},H[R.id]=V);let W=V[D];return W===void 0&&(W=f(l()),V[D]=W),W}function f(y){const R=[],k=[],D=[];for(let H=0;H<e;H++)R[H]=0,k[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:D,object:y,attributes:{},index:null}}function m(y,R,k,D){const H=s.attributes,V=R.attributes;let W=0;const Z=k.getAttributes();for(const P in Z)if(Z[P].location>=0){const $=H[P];let j=V[P];if(j===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),$===void 0||$.attribute!==j||j&&$.data!==j.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function g(y,R,k,D){const H={},V=R.attributes;let W=0;const Z=k.getAttributes();for(const P in Z)if(Z[P].location>=0){let $=V[P];$===void 0&&(P==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),P==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const j={};j.attribute=$,$&&$.data&&(j.data=$.data),H[P]=j,W++}s.attributes=H,s.attributesNum=W,s.index=D}function _(){const y=s.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function d(y){p(y,0)}function p(y,R){const k=s.newAttributes,D=s.enabledAttributes,H=s.attributeDivisors;k[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),H[y]!==R&&(n.vertexAttribDivisor(y,R),H[y]=R)}function M(){const y=s.newAttributes,R=s.enabledAttributes;for(let k=0,D=R.length;k<D;k++)R[k]!==y[k]&&(n.disableVertexAttribArray(k),R[k]=0)}function x(y,R,k,D,H,V,W){W===!0?n.vertexAttribIPointer(y,R,k,H,V):n.vertexAttribPointer(y,R,k,D,H,V)}function v(y,R,k,D){_();const H=D.attributes,V=k.getAttributes(),W=R.defaultAttributeValues;for(const Z in V){const P=V[Z];if(P.location>=0){let X=H[Z];if(X===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const $=X.normalized,j=X.itemSize,at=t.get(X);if(at===void 0)continue;const St=at.buffer,Y=at.type,nt=at.bytesPerElement,gt=Y===n.INT||Y===n.UNSIGNED_INT||X.gpuType===Po;if(X.isInterleavedBufferAttribute){const lt=X.data,At=lt.stride,Pt=X.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<P.locationSize;Ot++)p(P.location+Ot,lt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<P.locationSize;Ot++)d(P.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Ot=0;Ot<P.locationSize;Ot++)x(P.location+Ot,j/P.locationSize,Y,$,At*nt,(Pt+j/P.locationSize*Ot)*nt,gt)}else{if(X.isInstancedBufferAttribute){for(let lt=0;lt<P.locationSize;lt++)p(P.location+lt,X.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let lt=0;lt<P.locationSize;lt++)d(P.location+lt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let lt=0;lt<P.locationSize;lt++)x(P.location+lt,j/P.locationSize,Y,$,j*nt,j/P.locationSize*lt*nt,gt)}}else if(W!==void 0){const $=W[Z];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(P.location,$);break;case 3:n.vertexAttrib3fv(P.location,$);break;case 4:n.vertexAttrib4fv(P.location,$);break;default:n.vertexAttrib1fv(P.location,$)}}}}M()}function L(){C();for(const y in i){const R=i[y];for(const k in R){const D=R[k];for(const H in D)u(D[H].object),delete D[H];delete R[k]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const k in R){const D=R[k];for(const H in D)u(D[H].object),delete D[H];delete R[k]}delete i[y.id]}function b(y){for(const R in i){const k=i[R];if(k[y.id]===void 0)continue;const D=k[y.id];for(const H in D)u(D[H].object),delete D[H];delete k[y.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function kp(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zp(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==on&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Lr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==kn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Un&&!C)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:L,maxSamples:w}}function Bp(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new _i,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const M=s?0:i,x=M*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,m);for(let L=0;L!==x;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let x=0,v=m;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(d,v),d[v+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Hp(n){let t=new WeakMap;function e(a,o){return o===ka?a.mapping=tr:o===za&&(a.mapping=er),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ka||o===za)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class su extends eu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Ll=[.125,.215,.35,.446,.526,.582],yi=20,la=new su,Il=new Yt;let ca=null,ua=0,ha=0,fa=!1;const vi=(1+Math.sqrt(5))/2,Vi=1/vi,Ul=[new G(-vi,Vi,0),new G(vi,Vi,0),new G(-Vi,0,vi),new G(Vi,0,vi),new G(0,vi,-Vi),new G(0,vi,Vi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ua,ha),this._renderer.xr.enabled=fa,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:Lr,format:on,colorSpace:Ai,depthBuffer:!1},r=Fl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(s)),this._blurMaterial=Vp(s,t,e)}return r}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,i,r){const o=new Ke(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Il),u.toneMapping=ni,u.autoClear=!1;const m=new jc({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new ln(new Fr,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Il),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;rs(r,M*x,p>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;rs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,la)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ul[(r-s-1)%Ul.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ln(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yi-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):yi;d>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${yi}`);const p=[];let M=0;for(let b=0;b<yi;++b){const C=b/_,S=Math.exp(-C*C/2);p.push(S),b===0?M+=S:b<d&&(M+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[r],L=3*v*(r>x-Yi?r-x+Yi:0),w=4*(this._cubeSize-v);rs(e,L,w,3*v,2*v),l.setRenderTarget(e),l.render(h,la)}}function Gp(n){const t=[],e=[],i=[];let r=n;const s=n-Yi+1+Ll.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Yi?l=Ll[a-n+Yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,M=new Float32Array(_*g*m),x=new Float32Array(d*g*m),v=new Float32Array(p*g*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,C=w>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];M.set(S,_*g*w),x.set(f,d*g*w);const y=[w,w,w,w,w,w];v.set(y,p*g*w)}const L=new Gn;L.setAttribute("position",new we(M,_)),L.setAttribute("uv",new we(x,d)),L.setAttribute("faceIndex",new we(v,p)),t.push(L),r>Yi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fl(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=Ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Vp(n,t,e){const i=new Float32Array(yi),r=new G(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ol(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function kl(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ko(){return`

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
	`}function Wp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ka||l===za,u=l===tr||l===er;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Nl(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Nl(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Xp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qp(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let x=0,v=M.length;x<v;x+=3){const L=M[x+0],w=M[x+1],b=M[x+2];f.push(L,w,w,b,b,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const L=x+0,w=x+1,b=x+2;f.push(L,w,w,b,b,L)}}else return;const d=new(qc(f)?Qc:Jc)(f,1);d.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yp(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,i,1)}function h(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=m[M]*_[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $p(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Zp(n,t,e){const i=new WeakMap,r=new fe;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),d===!0&&(v=3);let L=o.attributes.position.count*v,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const b=new Float32Array(L*w*4*h),C=new $c(b,L,w,h);C.type=Un,C.needsUpdate=!0;const S=v*4;for(let R=0;R<h;R++){const k=p[R],D=M[R],H=x[R],V=L*w*4*R;for(let W=0;W<k.count;W++){const Z=W*S;g===!0&&(r.fromBufferAttribute(k,W),b[V+Z+0]=r.x,b[V+Z+1]=r.y,b[V+Z+2]=r.z,b[V+Z+3]=0),_===!0&&(r.fromBufferAttribute(D,W),b[V+Z+4]=r.x,b[V+Z+5]=r.y,b[V+Z+6]=r.z,b[V+Z+7]=0),d===!0&&(r.fromBufferAttribute(H,W),b[V+Z+8]=r.x,b[V+Z+9]=r.y,b[V+Z+10]=r.z,b[V+Z+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new $t(L,w)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Kp(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class au extends Ce{constructor(t,e,i,r,s,a,o,l,c,u=ji){if(u!==ji&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ji&&(i=bi),i===void 0&&u===ir&&(i=nr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new Ce,zl=new au(1,1),lu=new $c,cu=new Nh,uu=new nu,Bl=[],Hl=[],Gl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bl[r];if(s===void 0&&(s=new Float32Array(r),Bl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ns(n,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function Qp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function e0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Wl.set(i),n.uniformMatrix2fv(this.addr,!1,Wl),xe(e,i)}}function n0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Vl.set(i),n.uniformMatrix3fv(this.addr,!1,Vl),xe(e,i)}}function i0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Gl.set(i),n.uniformMatrix4fv(this.addr,!1,Gl),xe(e,i)}}function r0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function o0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function l0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function h0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function f0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zl.compareFunction=Xc,s=zl):s=ou,e.setTexture2D(t||s,r)}function d0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||cu,r)}function p0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||uu,r)}function m0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||lu,r)}function g0(n){switch(n){case 5126:return jp;case 35664:return Jp;case 35665:return Qp;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return r0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return u0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function _0(n,t){n.uniform1fv(this.addr,t)}function v0(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function x0(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function y0(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function M0(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function S0(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function E0(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function b0(n,t){n.uniform1iv(this.addr,t)}function T0(n,t){n.uniform2iv(this.addr,t)}function w0(n,t){n.uniform3iv(this.addr,t)}function A0(n,t){n.uniform4iv(this.addr,t)}function R0(n,t){n.uniform1uiv(this.addr,t)}function C0(n,t){n.uniform2uiv(this.addr,t)}function P0(n,t){n.uniform3uiv(this.addr,t)}function D0(n,t){n.uniform4uiv(this.addr,t)}function L0(n,t,e){const i=this.cache,r=t.length,s=Ns(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||ou,s[a])}function I0(n,t,e){const i=this.cache,r=t.length,s=Ns(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||cu,s[a])}function U0(n,t,e){const i=this.cache,r=t.length,s=Ns(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||uu,s[a])}function N0(n,t,e){const i=this.cache,r=t.length,s=Ns(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),xe(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||lu,s[a])}function F0(n){switch(n){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return b0;case 35667:case 35671:return T0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}class O0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}}class k0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const da=/(\w+)(\])?(\[|\.)?/g;function Xl(n,t){n.seq.push(t),n.map[t.id]=t}function B0(n,t,e){const i=n.name,r=i.length;for(da.lastIndex=0;;){const s=da.exec(i),a=da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xl(e,c===void 0?new O0(o,n,t):new k0(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new z0(o),Xl(e,h)),e=h}}}class Ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);B0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function ql(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const H0=37297;let G0=0;function V0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Yl=new Dt;function W0(n){Wt._getMatrix(Yl,Wt.workingColorSpace,n);const t=`mat3( ${Yl.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case Ls:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $l(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+V0(n.getShaderSource(t),a)}else return r}function X0(n,t){const e=W0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q0(n,t){let e;switch(t){case oh:e="Linear";break;case lh:e="Reinhard";break;case ch:e="Cineon";break;case uh:e="ACESFilmic";break;case fh:e="AgX";break;case dh:e="Neutral";break;case hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ss=new G;function Y0(){Wt.getLuminanceCoefficients(ss);const n=ss.x.toFixed(4),t=ss.y.toFixed(4),e=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Z0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function yr(n){return n!==""}function Zl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(n){return n.replace(j0,Q0)}const J0=new Map;function Q0(n,t){let e=Ft[t];if(e===void 0){const i=J0.get(t);if(i!==void 0)e=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return mo(e)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(n){return n.replace(tm,em)}function em(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jl(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function nm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function im(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function sm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ic:t="ENVMAP_BLENDING_MULTIPLY";break;case sh:t="ENVMAP_BLENDING_MIX";break;case ah:t="ENVMAP_BLENDING_ADD";break}return t}function am(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function om(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=nm(e),c=im(e),u=rm(e),h=sm(e),f=am(e),m=$0(e),g=Z0(s),_=r.createProgram();let d,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(d=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Jl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ni?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,X0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=mo(a),a=Zl(a,e),a=Kl(a,e),o=mo(o),o=Zl(o,e),o=Kl(o,e),a=jl(a),o=jl(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+d+a,v=M+p+o,L=ql(r,r.VERTEX_SHADER,x),w=ql(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(R){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(L).trim(),H=r.getShaderInfoLog(w).trim();let V=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,w);else{const Z=$l(r,L,"vertex"),P=$l(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+Z+`
`+P)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||H==="")&&(W=!1);W&&(R.diagnostics={runnable:V,programLog:k,vertexShader:{log:D,prefix:d},fragmentShader:{log:H,prefix:p}})}r.deleteShader(L),r.deleteShader(w),C=new Ss(r,_),S=K0(r,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,H0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=w,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new um(t),e.set(t,i)),i}}class um{constructor(t){this.id=lm++,this.code=t,this.usedTimes=0}}function hm(n,t,e,i,r,s,a){const o=new Oo,l=new cm,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,y,R,k,D){const H=k.fog,V=D.geometry,W=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),P=Z&&Z.mapping===Ds?Z.image.height:null,X=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,j=$!==void 0?$.length:0;let at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let St,Y,nt,gt;if(X){const jt=_n[X];St=jt.vertexShader,Y=jt.fragmentShader}else St=S.vertexShader,Y=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const lt=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,Ot=D.isBatchedMesh===!0,se=!!S.map,Gt=!!S.matcap,he=!!Z,F=!!S.aoMap,We=!!S.lightMap,zt=!!S.bumpMap,Bt=!!S.normalMap,Tt=!!S.displacementMap,ne=!!S.emissiveMap,bt=!!S.metalnessMap,A=!!S.roughnessMap,E=S.anisotropy>0,O=S.clearcoat>0,J=S.dispersion>0,et=S.iridescence>0,K=S.sheen>0,yt=S.transmission>0,ct=E&&!!S.anisotropyMap,dt=O&&!!S.clearcoatMap,Vt=O&&!!S.clearcoatNormalMap,it=O&&!!S.clearcoatRoughnessMap,pt=et&&!!S.iridescenceMap,wt=et&&!!S.iridescenceThicknessMap,Rt=K&&!!S.sheenColorMap,mt=K&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Nt=!!S.specularColorMap,te=!!S.specularIntensityMap,I=yt&&!!S.transmissionMap,ot=yt&&!!S.thicknessMap,q=!!S.gradientMap,Q=!!S.alphaMap,ft=S.alphaTest>0,ut=!!S.alphaHash,It=!!S.extensions;let ce=ni;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Ee={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:Y,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ai,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:Gt,envMap:he,envMapMode:he&&Z.mapping,envMapCubeUVHeight:P,aoMap:F,lightMap:We,bumpMap:zt,normalMap:Bt,displacementMap:f&&Tt,emissiveMap:ne,normalMapObjectSpace:Bt&&S.normalMapType===vh,normalMapTangentSpace:Bt&&S.normalMapType===_h,metalnessMap:bt,roughnessMap:A,anisotropy:E,anisotropyMap:ct,clearcoat:O,clearcoatMap:dt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:it,dispersion:J,iridescence:et,iridescenceMap:pt,iridescenceThicknessMap:wt,sheen:K,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:te,transmission:yt,transmissionMap:I,thicknessMap:ot,gradientMap:q,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:ut,combine:S.combine,mapUv:se&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:We&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:Bt&&_(S.normalMap.channel),displacementMapUv:Tt&&_(S.displacementMap.channel),emissiveMapUv:ne&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:dt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Nt&&_(S.specularColorMap.channel),specularIntensityMapUv:te&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ot&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Bt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(se||Q),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:at,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ln,flipSided:S.side===Ne,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:It&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&S.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let R;if(y){const k=_n[y];R=Yh.clone(k.uniforms)}else R=S.uniforms;return R}function L(S,y){let R;for(let k=0,D=u.length;k<D;k++){const H=u[k];if(H.cacheKey===y){R=H,++R.usedTimes;break}}return R===void 0&&(R=new om(n,y,S,s),u.push(R)),R}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function fm(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function dm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ql(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,m,g,_,d){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),t++,p}function o(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||dm),i.length>1&&i.sort(f||Ql),r.length>1&&r.sort(f||Ql)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function pm(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new tc,n.set(i,[a])):r>=s.length?(a=new tc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function mm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Yt};break;case"SpotLight":e={position:new G,direction:new G,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function gm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let _m=0;function vm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function xm(n){const t=new mm,e=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new le,a=new le;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,M=0,x=0,v=0,L=0,w=0,b=0;c.sort(vm);for(let S=0,y=c.length;S<y;S++){const R=c[S],k=R.color,D=R.intensity,H=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*D,h+=k.g*D,f+=k.b*D;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],D);b++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,P=e.get(R);P.shadowIntensity=Z.intensity,P.shadowBias=Z.bias,P.shadowNormalBias=Z.normalBias,P.shadowRadius=Z.radius,P.shadowMapSize=Z.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=R.shadow.matrix,M++}i.directional[m]=W,m++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(k).multiplyScalar(D),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[_]=W;const Z=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[_]=Z.matrix,R.castShadow){const P=e.get(R);P.shadowIntensity=Z.intensity,P.shadowBias=Z.bias,P.shadowNormalBias=Z.normalBias,P.shadowRadius=Z.radius,P.shadowMapSize=Z.mapSize,i.spotShadow[_]=P,i.spotShadowMap[_]=V,v++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(k).multiplyScalar(D),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[d]=W,d++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const Z=R.shadow,P=e.get(R);P.shadowIntensity=Z.intensity,P.shadowBias=Z.bias,P.shadowNormalBias=Z.normalBias,P.shadowRadius=Z.radius,P.shadowMapSize=Z.mapSize,P.shadowCameraNear=Z.camera.near,P.shadowCameraFar=Z.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=R.shadow.matrix,x++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(D),W.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[p]=W,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==d||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==L||C.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=d,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=L,C.numLightProbes=b,i.version=_m++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(d),h++}else if(x.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:i}}function ec(n){const t=new xm(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ym(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new ec(n),t.set(r,[o])):s>=a.length?(o=new ec(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Mm extends Is{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sm extends Is{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bm=`uniform sampler2D shadow_pass;
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
}`;function Tm(n,t,e){let i=new iu;const r=new $t,s=new $t,a=new fe,o=new Mm({depthPacking:gh}),l=new Sm,c={},u=e.maxTextureSize,h={[On]:Ne,[Ne]:On,[Ln]:Ln},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Em,fragmentShader:bm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ln(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let p=this.type;this.render=function(w,b,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const D=p!==Rn&&this.type===Rn,H=p===Rn&&this.type!==Rn;for(let V=0,W=w.length;V<W;V++){const Z=w[V],P=Z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const X=P.getFrameExtents();if(r.multiply(X),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,P.mapSize.y=s.y)),P.map===null||D===!0||H===!0){const j=this.type!==Rn?{minFilter:cn,magFilter:cn}:{};P.map!==null&&P.map.dispose(),P.map=new ai(r.x,r.y,j),P.map.texture.name=Z.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const $=P.getViewportCount();for(let j=0;j<$;j++){const at=P.getViewport(j);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),k.viewport(a),P.updateMatrices(Z,j),i=P.getFrustum(),v(b,C,P.camera,Z,this.type)}P.isPointLightShadow!==!0&&this.type===Rn&&M(P,C),P.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(S,y,R)};function M(w,b){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(b,null,C,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(b,null,C,m,_,null)}function x(w,b,C,S){let y=null;const R=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)y=R;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=y.uuid,D=b.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let V=H[D];V===void 0&&(V=y.clone(),H[D]=V,b.addEventListener("dispose",L)),y=V}if(y.visible=b.visible,y.wireframe=b.wireframe,S===Rn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=C}return y}function v(w,b,C,S,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Rn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=t.update(w),H=w.material;if(Array.isArray(H)){const V=D.groups;for(let W=0,Z=V.length;W<Z;W++){const P=V[W],X=H[P.materialIndex];if(X&&X.visible){const $=x(w,X,S,y);w.onBeforeShadow(n,w,b,C,D,$,P),n.renderBufferDirect(C,null,D,$,w,P),w.onAfterShadow(n,w,b,C,D,$,P)}}}else if(H.visible){const V=x(w,H,S,y);w.onBeforeShadow(n,w,b,C,D,V,null),n.renderBufferDirect(C,null,D,V,w,null),w.onAfterShadow(n,w,b,C,D,V,null)}}const k=w.children;for(let D=0,H=k.length;D<H;D++)v(k[D],b,C,S,y)}function L(w){w.target.removeEventListener("dispose",L);for(const C in c){const S=c[C],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const wm={[Da]:La,[Ia]:Fa,[Ua]:Oa,[Qi]:Na,[La]:Da,[Fa]:Ia,[Oa]:Ua,[Na]:Qi};function Am(n,t){function e(){let I=!1;const ot=new fe;let q=null;const Q=new fe(0,0,0,0);return{setMask:function(ft){q!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ut,It,ce,Ee){Ee===!0&&(ft*=ce,ut*=ce,It*=ce),ot.set(ft,ut,It,ce),Q.equals(ot)===!1&&(n.clearColor(ft,ut,It,ce),Q.copy(ot))},reset:function(){I=!1,q=null,Q.set(-1,0,0,0)}}}function i(){let I=!1,ot=!1,q=null,Q=null,ft=null;return{setReversed:function(ut){if(ot!==ut){const It=t.get("EXT_clip_control");ot?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ce=ft;ft=null,this.setClear(ce)}ot=ut},getReversed:function(){return ot},setTest:function(ut){ut?lt(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(ut){q!==ut&&!I&&(n.depthMask(ut),q=ut)},setFunc:function(ut){if(ot&&(ut=wm[ut]),Q!==ut){switch(ut){case Da:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Ua:n.depthFunc(n.EQUAL);break;case Na:n.depthFunc(n.GEQUAL);break;case Fa:n.depthFunc(n.GREATER);break;case Oa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ft!==ut&&(ot&&(ut=1-ut),n.clearDepth(ut),ft=ut)},reset:function(){I=!1,q=null,Q=null,ft=null,ot=!1}}}function r(){let I=!1,ot=null,q=null,Q=null,ft=null,ut=null,It=null,ce=null,Ee=null;return{setTest:function(jt){I||(jt?lt(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(jt){ot!==jt&&!I&&(n.stencilMask(jt),ot=jt)},setFunc:function(jt,Qe,yn){(q!==jt||Q!==Qe||ft!==yn)&&(n.stencilFunc(jt,Qe,yn),q=jt,Q=Qe,ft=yn)},setOp:function(jt,Qe,yn){(ut!==jt||It!==Qe||ce!==yn)&&(n.stencilOp(jt,Qe,yn),ut=jt,It=Qe,ce=yn)},setLocked:function(jt){I=jt},setClear:function(jt){Ee!==jt&&(n.clearStencil(jt),Ee=jt)},reset:function(){I=!1,ot=null,q=null,Q=null,ft=null,ut=null,It=null,ce=null,Ee=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,M=null,x=null,v=null,L=null,w=null,b=new Yt(0,0,0),C=0,S=!1,y=null,R=null,k=null,D=null,H=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(P)[1]),W=Z>=1):P.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),W=Z>=2);let X=null,$={};const j=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),St=new fe().fromArray(j),Y=new fe().fromArray(at);function nt(I,ot,q,Q){const ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(I,ut),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<q;It++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ot+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ut}const gt={};gt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(n.DEPTH_TEST),a.setFunc(Qi),zt(!1),Bt(sl),lt(n.CULL_FACE),F(ei);function lt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function At(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Pt(I,ot){return h[I]!==ot?(n.bindFramebuffer(I,ot),h[I]=ot,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ot),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function Ot(I,ot){let q=m,Q=!1;if(I){q=f.get(ot),q===void 0&&(q=[],f.set(ot,q));const ft=I.textures;if(q.length!==ft.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,It=ft.length;ut<It;ut++)q[ut]=n.COLOR_ATTACHMENT0+ut;q.length=ft.length,Q=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Q=!0);Q&&n.drawBuffers(q)}function se(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Gt={[xi]:n.FUNC_ADD,[Gu]:n.FUNC_SUBTRACT,[Vu]:n.FUNC_REVERSE_SUBTRACT};Gt[Wu]=n.MIN,Gt[Xu]=n.MAX;const he={[qu]:n.ZERO,[Yu]:n.ONE,[$u]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[th]:n.SRC_ALPHA_SATURATE,[Ju]:n.DST_COLOR,[Ku]:n.DST_ALPHA,[Zu]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Qu]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[eh]:n.CONSTANT_COLOR,[nh]:n.ONE_MINUS_CONSTANT_COLOR,[ih]:n.CONSTANT_ALPHA,[rh]:n.ONE_MINUS_CONSTANT_ALPHA};function F(I,ot,q,Q,ft,ut,It,ce,Ee,jt){if(I===ei){_===!0&&(At(n.BLEND),_=!1);return}if(_===!1&&(lt(n.BLEND),_=!0),I!==Hu){if(I!==d||jt!==S){if((p!==xi||v!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,v=xi),jt)switch(I){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.ONE,n.ONE);break;case ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ll:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,x=null,L=null,w=null,b.set(0,0,0),C=0,d=I,S=jt}return}ft=ft||ot,ut=ut||q,It=It||Q,(ot!==p||ft!==v)&&(n.blendEquationSeparate(Gt[ot],Gt[ft]),p=ot,v=ft),(q!==M||Q!==x||ut!==L||It!==w)&&(n.blendFuncSeparate(he[q],he[Q],he[ut],he[It]),M=q,x=Q,L=ut,w=It),(ce.equals(b)===!1||Ee!==C)&&(n.blendColor(ce.r,ce.g,ce.b,Ee),b.copy(ce),C=Ee),d=I,S=!1}function We(I,ot){I.side===Ln?At(n.CULL_FACE):lt(n.CULL_FACE);let q=I.side===Ne;ot&&(q=!q),zt(q),I.blending===Ki&&I.transparent===!1?F(ei):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function Bt(I){I!==ku?(lt(n.CULL_FACE),I!==R&&(I===sl?n.cullFace(n.BACK):I===zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),R=I}function Tt(I){I!==k&&(W&&n.lineWidth(I),k=I)}function ne(I,ot,q){I?(lt(n.POLYGON_OFFSET_FILL),(D!==ot||H!==q)&&(n.polygonOffset(ot,q),D=ot,H=q)):At(n.POLYGON_OFFSET_FILL)}function bt(I){I?lt(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function A(I){I===void 0&&(I=n.TEXTURE0+V-1),X!==I&&(n.activeTexture(I),X=I)}function E(I,ot,q){q===void 0&&(X===null?q=n.TEXTURE0+V-1:q=X);let Q=$[q];Q===void 0&&(Q={type:void 0,texture:void 0},$[q]=Q),(Q.type!==I||Q.texture!==ot)&&(X!==q&&(n.activeTexture(q),X=q),n.bindTexture(I,ot||gt[I]),Q.type=I,Q.texture=ot)}function O(){const I=$[X];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(I){St.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),St.copy(I))}function mt(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ht(I,ot){let q=c.get(ot);q===void 0&&(q=new WeakMap,c.set(ot,q));let Q=q.get(I);Q===void 0&&(Q=n.getUniformBlockIndex(ot,I.name),q.set(I,Q))}function Nt(I,ot){const Q=c.get(ot).get(I);l.get(ot)!==Q&&(n.uniformBlockBinding(ot,Q,I.__bindingPointIndex),l.set(ot,Q))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,$={},h={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,M=null,x=null,v=null,L=null,w=null,b=new Yt(0,0,0),C=0,S=!1,y=null,R=null,k=null,D=null,H=null,St.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:At,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:se,setBlending:F,setMaterial:We,setFlipSided:zt,setCullFace:Bt,setLineWidth:Tt,setPolygonOffset:ne,setScissorTest:bt,activeTexture:A,bindTexture:E,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:pt,texImage3D:wt,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Vt,texStorage3D:it,texSubImage2D:K,texSubImage3D:yt,compressedTexSubImage2D:ct,compressedTexSubImage3D:dt,scissor:Rt,viewport:mt,reset:te}}function nc(n,t,e,i){const r=Rm(i);switch(e){case kc:return n*t;case Bc:return n*t;case Hc:return n*t*2;case Gc:return n*t/r.components*r.byteLength;case Io:return n*t/r.components*r.byteLength;case Vc:return n*t*2/r.components*r.byteLength;case Uo:return n*t*2/r.components*r.byteLength;case zc:return n*t*3/r.components*r.byteLength;case on:return n*t*4/r.components*r.byteLength;case No:return n*t*4/r.components*r.byteLength;case _s:case vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xs:case ys:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Wa:return Math.max(n,16)*Math.max(t,8)/4;case Ha:case Va:return Math.max(n,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ms:case lo:case co:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wc:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ho:case fo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(n){switch(n){case kn:case Nc:return{byteLength:1,components:1};case wr:case Fc:case Lr:return{byteLength:2,components:1};case Do:case Lo:return{byteLength:2,components:4};case bi:case Po:case Un:return{byteLength:4,components:1};case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cm(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return m?new OffscreenCanvas(A,E):As("canvas")}function _(A,E,O){let J=1;const et=bt(A);if((et.width>O||et.height>O)&&(J=O/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(J*et.width),yt=Math.floor(J*et.height);h===void 0&&(h=g(K,yt));const ct=E?g(K,yt):h;return ct.width=K,ct.height=yt,ct.getContext("2d").drawImage(A,0,0,K,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+yt+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function d(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,E,O,J,et=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=E;if(E===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),E===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),E===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),E===n.RGBA){const yt=et?Ls:Wt.getTransfer(J);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=yt===Qt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,E){let O;return A?E===null||E===bi||E===nr?O=n.DEPTH24_STENCIL8:E===Un?O=n.DEPTH32F_STENCIL8:E===wr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bi||E===nr?O=n.DEPTH_COMPONENT24:E===Un?O=n.DEPTH_COMPONENT32F:E===wr&&(O=n.DEPTH_COMPONENT16),O}function L(A,E){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==Me?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){const E=A.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&u.delete(E)}function b(A){const E=A.target;E.removeEventListener("dispose",b),y(E)}function C(A){const E=i.get(A);if(E.__webglInit===void 0)return;const O=A.source,J=f.get(O);if(J){const et=J[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys(J).length===0&&f.delete(O)}i.remove(A)}function S(A){const E=i.get(A);n.deleteTexture(E.__webglTexture);const O=A.source,J=f.get(O);delete J[E.__cacheKey],a.memory.textures--}function y(A){const E=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let et=0;et<E.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(E.__webglFramebuffer[J][et]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=A.textures;for(let J=0,et=O.length;J<et;J++){const K=i.get(O[J]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(O[J])}i.remove(A)}let R=0;function k(){R=0}function D(){const A=R;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),R+=1,A}function H(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function V(A,E){const O=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,E);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+E)}function W(A,E){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+E)}function Z(A,E){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Y(O,A,E);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+E)}function P(A,E){const O=i.get(A);if(A.version>0&&O.__version!==A.version){nt(O,A,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+E)}const X={[Tr]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},$={[cn]:n.NEAREST,[ph]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[Me]:n.LINEAR,[zs]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},j={[xh]:n.NEVER,[Th]:n.ALWAYS,[yh]:n.LESS,[Xc]:n.LEQUAL,[Mh]:n.EQUAL,[bh]:n.GEQUAL,[Sh]:n.GREATER,[Eh]:n.NOTEQUAL};function at(A,E){if(E.type===Un&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Me||E.magFilter===zs||E.magFilter===zr||E.magFilter===Qn||E.minFilter===Me||E.minFilter===zs||E.minFilter===zr||E.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,X[E.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,$[E.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==zr&&E.minFilter!==Qn||E.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function St(A,E){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",w));const J=E.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const K=H(E);if(K!==A.__cacheKey){et[K]===void 0&&(et[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[K].usedTimes++;const yt=et[A.__cacheKey];yt!==void 0&&(et[A.__cacheKey].usedTimes--,yt.usedTimes===0&&S(E)),A.__cacheKey=K,A.__webglTexture=et[K].texture}return O}function Y(A,E,O){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const et=St(A,E),K=E.source;e.bindTexture(J,A.__webglTexture,n.TEXTURE0+O);const yt=i.get(K);if(K.version!==yt.__version||et===!0){e.activeTexture(n.TEXTURE0+O);const ct=Wt.getPrimaries(Wt.workingColorSpace),dt=E.colorSpace===je?null:Wt.getPrimaries(E.colorSpace),Vt=E.colorSpace===je||ct===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let it=_(E.image,!1,r.maxTextureSize);it=ne(E,it);const pt=s.convert(E.format,E.colorSpace),wt=s.convert(E.type);let Rt=x(E.internalFormat,pt,wt,E.colorSpace,E.isVideoTexture);at(J,E);let mt;const Ht=E.mipmaps,Nt=E.isVideoTexture!==!0,te=yt.__version===void 0||et===!0,I=K.dataReady,ot=L(E,it);if(E.isDepthTexture)Rt=v(E.format===ir,E.type),te&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,pt,wt,null));else if(E.isDataTexture)if(Ht.length>0){Nt&&te&&e.texStorage2D(n.TEXTURE_2D,ot,Rt,Ht[0].width,Ht[0].height);for(let q=0,Q=Ht.length;q<Q;q++)mt=Ht[q],Nt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Rt,mt.width,mt.height,0,pt,wt,mt.data);E.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(n.TEXTURE_2D,ot,Rt,it.width,it.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,pt,wt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,it.width,it.height,0,pt,wt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Rt,Ht[0].width,Ht[0].height,it.depth);for(let q=0,Q=Ht.length;q<Q;q++)if(mt=Ht[q],E.format!==on)if(pt!==null)if(Nt){if(I)if(E.layerUpdates.size>0){const ft=nc(mt.width,mt.height,E.format,E.type);for(const ut of E.layerUpdates){const It=mt.data.subarray(ut*ft/mt.data.BYTES_PER_ELEMENT,(ut+1)*ft/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ut,mt.width,mt.height,1,pt,It)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Rt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,mt.width,mt.height,it.depth,pt,wt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Rt,mt.width,mt.height,it.depth,0,pt,wt,mt.data)}else{Nt&&te&&e.texStorage2D(n.TEXTURE_2D,ot,Rt,Ht[0].width,Ht[0].height);for(let q=0,Q=Ht.length;q<Q;q++)mt=Ht[q],E.format!==on?pt!==null?Nt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,mt.width,mt.height,pt,wt,mt.data):e.texImage2D(n.TEXTURE_2D,q,Rt,mt.width,mt.height,0,pt,wt,mt.data)}else if(E.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,Rt,it.width,it.height,it.depth),I)if(E.layerUpdates.size>0){const q=nc(it.width,it.height,E.format,E.type);for(const Q of E.layerUpdates){const ft=it.data.subarray(Q*q/it.data.BYTES_PER_ELEMENT,(Q+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,pt,wt,ft)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,wt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,pt,wt,it.data);else if(E.isData3DTexture)Nt?(te&&e.texStorage3D(n.TEXTURE_3D,ot,Rt,it.width,it.height,it.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,wt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,pt,wt,it.data);else if(E.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(n.TEXTURE_2D,ot,Rt,it.width,it.height);else{let q=it.width,Q=it.height;for(let ft=0;ft<ot;ft++)e.texImage2D(n.TEXTURE_2D,ft,Rt,q,Q,0,pt,wt,null),q>>=1,Q>>=1}}else if(Ht.length>0){if(Nt&&te){const q=bt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,ot,Rt,q.width,q.height)}for(let q=0,Q=Ht.length;q<Q;q++)mt=Ht[q],Nt?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,pt,wt,mt):e.texImage2D(n.TEXTURE_2D,q,Rt,pt,wt,mt);E.generateMipmaps=!1}else if(Nt){if(te){const q=bt(it);e.texStorage2D(n.TEXTURE_2D,ot,Rt,q.width,q.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,wt,it)}else e.texImage2D(n.TEXTURE_2D,0,Rt,pt,wt,it);d(E)&&p(J),yt.__version=K.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function nt(A,E,O){if(E.image.length!==6)return;const J=St(A,E),et=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const K=i.get(et);if(et.version!==K.__version||J===!0){e.activeTexture(n.TEXTURE0+O);const yt=Wt.getPrimaries(Wt.workingColorSpace),ct=E.colorSpace===je?null:Wt.getPrimaries(E.colorSpace),dt=E.colorSpace===je||yt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,pt=[];for(let Q=0;Q<6;Q++)!Vt&&!it?pt[Q]=_(E.image[Q],!0,r.maxCubemapSize):pt[Q]=it?E.image[Q].image:E.image[Q],pt[Q]=ne(E,pt[Q]);const wt=pt[0],Rt=s.convert(E.format,E.colorSpace),mt=s.convert(E.type),Ht=x(E.internalFormat,Rt,mt,E.colorSpace),Nt=E.isVideoTexture!==!0,te=K.__version===void 0||J===!0,I=et.dataReady;let ot=L(E,wt);at(n.TEXTURE_CUBE_MAP,E);let q;if(Vt){Nt&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Ht,wt.width,wt.height);for(let Q=0;Q<6;Q++){q=pt[Q].mipmaps;for(let ft=0;ft<q.length;ft++){const ut=q[ft];E.format!==on?Rt!==null?Nt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Rt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Rt,mt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Ht,ut.width,ut.height,0,Rt,mt,ut.data)}}}else{if(q=E.mipmaps,Nt&&te){q.length>0&&ot++;const Q=bt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,Ht,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Nt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pt[Q].width,pt[Q].height,Rt,mt,pt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,pt[Q].width,pt[Q].height,0,Rt,mt,pt[Q].data);for(let ft=0;ft<q.length;ft++){const It=q[ft].image[Q].image;Nt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,It.width,It.height,Rt,mt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Ht,It.width,It.height,0,Rt,mt,It.data)}}else{Nt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Rt,mt,pt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,Rt,mt,pt[Q]);for(let ft=0;ft<q.length;ft++){const ut=q[ft];Nt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Rt,mt,ut.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Ht,Rt,mt,ut.image[Q])}}}d(E)&&p(n.TEXTURE_CUBE_MAP),K.__version=et.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function gt(A,E,O,J,et,K){const yt=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),dt=x(O.internalFormat,yt,ct,O.colorSpace),Vt=i.get(E),it=i.get(O);if(it.__renderTarget=E,!Vt.__hasExternalTextures){const pt=Math.max(1,E.width>>K),wt=Math.max(1,E.height>>K);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,K,dt,pt,wt,E.depth,0,yt,ct,null):e.texImage2D(et,K,dt,pt,wt,0,yt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Bt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,it.__webglTexture,0,zt(E)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,it.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(A,E,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),E.depthBuffer){const J=E.depthTexture,et=J&&J.isDepthTexture?J.type:null,K=v(E.stencilBuffer,et),yt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=zt(E);Bt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,K,E.width,E.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,A)}else{const J=E.textures;for(let et=0;et<J.length;et++){const K=J[et],yt=s.convert(K.format,K.colorSpace),ct=s.convert(K.type),dt=x(K.internalFormat,yt,ct,K.colorSpace),Vt=zt(E);O&&Bt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,dt,E.width,E.height):Bt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,dt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,dt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function At(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const et=J.__webglTexture,K=zt(E);if(E.depthTexture.format===ji)Bt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(E.depthTexture.format===ir)Bt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Pt(A){const E=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=J}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,A)}else if(O){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),lt(E.__webglDepthbuffer[J],A,!1);else{const et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),lt(E.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(A,E,O){const J=i.get(A);E!==void 0&&gt(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Pt(A)}function se(A){const E=A.texture,O=i.get(A),J=i.get(E);A.addEventListener("dispose",b);const et=A.textures,K=A.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let dt=0;dt<E.mipmaps.length;dt++)O.__webglFramebuffer[ct][dt]=n.createFramebuffer()}else O.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<E.mipmaps.length;ct++)O.__webglFramebuffer[ct]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ct=0,dt=et.length;ct<dt;ct++){const Vt=i.get(et[ct]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Bt(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){const dt=et[ct];O.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Vt=s.convert(dt.format,dt.colorSpace),it=s.convert(dt.type),pt=x(dt.internalFormat,Vt,it,dt.colorSpace,A.isXRRenderTarget===!0),wt=zt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,pt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),at(n.TEXTURE_CUBE_MAP,E);for(let ct=0;ct<6;ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)gt(O.__webglFramebuffer[ct][dt],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else gt(O.__webglFramebuffer[ct],A,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);d(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ct=0,dt=et.length;ct<dt;ct++){const Vt=et[ct],it=i.get(Vt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),at(n.TEXTURE_2D,Vt),gt(O.__webglFramebuffer,A,Vt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),d(Vt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),at(ct,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)gt(O.__webglFramebuffer[dt],A,E,n.COLOR_ATTACHMENT0,ct,dt);else gt(O.__webglFramebuffer,A,E,n.COLOR_ATTACHMENT0,ct,0);d(E)&&p(ct),e.unbindTexture()}A.depthBuffer&&Pt(A)}function Gt(A){const E=A.textures;for(let O=0,J=E.length;O<J;O++){const et=E[O];if(d(et)){const K=M(A),yt=i.get(et).__webglTexture;e.bindTexture(K,yt),p(K),e.unbindTexture()}}}const he=[],F=[];function We(A){if(A.samples>0){if(Bt(A)===!1){const E=A.textures,O=A.width,J=A.height;let et=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(A),ct=E.length>1;if(ct)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const Vt=i.get(E[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,et,n.NEAREST),l===!0&&(he.length=0,F.length=0,he.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(K),F.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const Vt=i.get(E[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const E=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function zt(A){return Math.min(r.maxSamples,A.samples)}function Bt(A){const E=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(A){const E=a.render.frame;u.get(A)!==E&&(u.set(A,E),A.update())}function ne(A,E){const O=A.colorSpace,J=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ai&&O!==je&&(Wt.getTransfer(O)===Qt?(J!==on||et!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=P,this.rebindTextures=Ot,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Bt}function Pm(n,t){function e(i,r=je){let s;const a=Wt.getTransfer(r);if(i===kn)return n.UNSIGNED_BYTE;if(i===Do)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nc)return n.BYTE;if(i===Fc)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===Po)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Lr)return n.HALF_FLOAT;if(i===kc)return n.ALPHA;if(i===zc)return n.RGB;if(i===on)return n.RGBA;if(i===Bc)return n.LUMINANCE;if(i===Hc)return n.LUMINANCE_ALPHA;if(i===ji)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===Gc)return n.RED;if(i===Io)return n.RED_INTEGER;if(i===Vc)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===_s||i===vs||i===xs||i===ys)if(a===Qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Ga||i===Va||i===Wa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xa||i===qa||i===Ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xa||i===qa)return a===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===Za||i===Ka||i===ja||i===Ja||i===Qa||i===to||i===eo||i===no||i===io||i===ro||i===so||i===ao||i===oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$a)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qa)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ms||i===lo||i===co)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ms)return a===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wc||i===uo||i===ho||i===fo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ms)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Dm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mr extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lm={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Um=`
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

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ce,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xn({vertexShader:Im,fragmentShader:Um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ln(new Us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends ar{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Nm,d=e.getContextAttributes();let p=null,M=null;const x=[],v=[],L=new $t;let w=null;const b=new Ke;b.viewport=new fe;const C=new Ke;C.viewport=new fe;const S=[b,C],y=new Dm;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=x[Y];return nt===void 0&&(nt=new pa,x[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=x[Y];return nt===void 0&&(nt=new pa,x[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=x[Y];return nt===void 0&&(nt=new pa,x[Y]=nt),nt.getHandSpace()};function D(Y){const nt=v.indexOf(Y.inputSource);if(nt===-1)return;const gt=x[nt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",V);for(let Y=0;Y<x.length;Y++){const nt=v[Y];nt!==null&&(v[Y]=null,x[Y].disconnect(nt))}R=null,k=null,_.reset(),t.setRenderTarget(p),m=null,f=null,h=null,r=null,M=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",H),r.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const nt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ai(m.framebufferWidth,m.framebufferHeight,{format:on,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let nt=null,gt=null,lt=null;d.depth&&(lt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=d.stencil?ir:ji,gt=d.stencil?nr:bi);const At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(At),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new ai(f.textureWidth,f.textureHeight,{format:on,type:kn,depthTexture:new au(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),St.setContext(r),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Y){for(let nt=0;nt<Y.removed.length;nt++){const gt=Y.removed[nt],lt=v.indexOf(gt);lt>=0&&(v[lt]=null,x[lt].disconnect(gt))}for(let nt=0;nt<Y.added.length;nt++){const gt=Y.added[nt];let lt=v.indexOf(gt);if(lt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=v.length){v.push(gt),lt=Pt;break}else if(v[Pt]===null){v[Pt]=gt,lt=Pt;break}if(lt===-1)break}const At=x[lt];At&&At.connect(gt)}}const W=new G,Z=new G;function P(Y,nt,gt){W.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);const lt=W.distanceTo(Z),At=nt.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Ot=At[14]/(At[10]-1),se=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],he=(At[9]-1)/At[5],F=(At[8]-1)/At[0],We=(Pt[8]+1)/Pt[0],zt=Ot*F,Bt=Ot*We,Tt=lt/(-F+We),ne=Tt*-F;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const bt=Ot+Tt,A=se+Tt,E=zt-ne,O=Bt+(lt-ne),J=Gt*se/A*bt,et=he*se/A*bt;Y.projectionMatrix.makePerspective(E,O,J,et,bt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function X(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let nt=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),y.near=C.near=b.near=nt,y.far=C.far=b.far=gt,(R!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),b.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,y.layers.mask=b.layers.mask|C.layers.mask;const lt=Y.parent,At=y.cameras;X(y,lt);for(let Pt=0;Pt<At.length;Pt++)X(At[Pt],lt);At.length===2?P(y,b,C):y.projectionMatrix.copy(b.projectionMatrix),$(Y,y,lt)};function $(Y,nt,gt){gt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=po*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let j=null;function at(Y,nt){if(u=nt.getViewerPose(c||a),g=nt,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let lt=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Pt=0;Pt<gt.length;Pt++){const Ot=gt[Pt];let se=null;if(m!==null)se=m.getViewport(Ot);else{const he=h.getViewSubImage(f,Ot);se=he.viewport,Pt===0&&(t.setRenderTargetTextures(M,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(M))}let Gt=S[Pt];Gt===void 0&&(Gt=new Ke,Gt.layers.enable(Pt),Gt.viewport=new fe,S[Pt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(se.x,se.y,se.width,se.height),Pt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Gt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=h.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,r.renderState)}}for(let gt=0;gt<x.length;gt++){const lt=v[gt],At=x[gt];lt!==null&&At!==void 0&&At.update(lt,nt,c||a)}j&&j(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const St=new ru;St.setAnimationLoop(at),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const pi=new zn,Om=new le;function km(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,tu(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,M,x):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ne&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ne&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(d.envMap.value=x,pi.copy(v),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(pi)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,M,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=x*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ne&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const M=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zm(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;i.uniformBlockBinding(M,v)}function c(M,x){let v=r[M.id];v===void 0&&(g(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",d));const L=x.program;i.updateUBOMapping(M,L);const w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const x=h();M.__bindingPointIndex=x;const v=n.createBuffer(),L=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=r[M.id],v=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,b=v.length;w<b;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=C.length;S<y;S++){const R=C[S];if(m(R,w,S,L)===!0){const k=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let V=0;V<D.length;V++){const W=D[V],Z=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+H,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,x,v,L){const w=M.value,b=x+"_"+v;if(L[b]===void 0)return typeof w=="number"||typeof w=="boolean"?L[b]=w:L[b]=w.clone(),!0;{const C=L[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return L[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(M){const x=M.uniforms;let v=0;const L=16;for(let b=0,C=x.length;b<C;b++){const S=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,R=S.length;y<R;y++){const k=S[y],D=Array.isArray(k.value)?k.value:[k.value];for(let H=0,V=D.length;H<V;H++){const W=D[H],Z=_(W),P=v%L,X=P%Z.boundary,$=P+X;v+=X,$!==0&&L-$<Z.storage&&(v+=L-$),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Z.storage}}}const w=v%L;return w>0&&(v+=L-w),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function d(M){const x=M.target;x.removeEventListener("dispose",d);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Bm{constructor(t={}){const{canvas:e=Ah(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let L=!1,w=0,b=0,C=null,S=-1,y=null;const R=new fe,k=new fe;let D=null;const H=new Yt(0);let V=0,W=e.width,Z=e.height,P=1,X=null,$=null;const j=new fe(0,0,W,Z),at=new fe(0,0,W,Z);let St=!1;const Y=new iu;let nt=!1,gt=!1;const lt=new le,At=new le,Pt=new G,Ot=new fe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function he(){return C===null?P:1}let F=i;function We(T,U){return e.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const U="webgl2";if(F=We(U,T),F===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let zt,Bt,Tt,ne,bt,A,E,O,J,et,K,yt,ct,dt,Vt,it,pt,wt,Rt,mt,Ht,Nt,te,I;function ot(){zt=new Xp(F),zt.init(),Nt=new Pm(F,zt),Bt=new zp(F,zt,t,Nt),Tt=new Am(F,zt),Bt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ne=new $p(F),bt=new fm,A=new Cm(F,zt,Tt,bt,Bt,Nt,ne),E=new Hp(v),O=new Wp(v),J=new tf(F),te=new Op(F,J),et=new qp(F,J,ne,te),K=new Kp(F,et,J,ne),Rt=new Zp(F,Bt,A),it=new Bp(bt),yt=new hm(v,E,O,zt,Bt,te,it),ct=new km(v,bt),dt=new pm,Vt=new ym(zt),wt=new Fp(v,E,O,Tt,K,m,l),pt=new Tm(v,K,Bt),I=new zm(F,ne,Bt,Tt),mt=new kp(F,zt,ne),Ht=new Yp(F,zt,ne),ne.programs=yt.programs,v.capabilities=Bt,v.extensions=zt,v.properties=bt,v.renderLists=dt,v.shadowMap=pt,v.state=Tt,v.info=ne}ot();const q=new Fm(v,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=zt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=zt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(W,Z,!1))},this.getSize=function(T){return T.set(W,Z)},this.setSize=function(T,U,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,Z=U,e.width=Math.floor(T*P),e.height=Math.floor(U*P),z===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*P,Z*P).floor()},this.setDrawingBufferSize=function(T,U,z){W=T,Z=U,P=z,e.width=Math.floor(T*z),e.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,U,z,B){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,U,z,B),Tt.viewport(R.copy(j).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(at)},this.setScissor=function(T,U,z,B){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,U,z,B),Tt.scissor(k.copy(at).multiplyScalar(P).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){Tt.setScissorTest(St=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,U=!0,z=!0){let B=0;if(T){let N=!1;if(C!==null){const rt=C.texture.format;N=rt===No||rt===Uo||rt===Io}if(N){const rt=C.texture.type,ht=rt===kn||rt===bi||rt===wr||rt===nr||rt===Do||rt===Lo,_t=wt.getClearColor(),vt=wt.getClearAlpha(),Ct=_t.r,Ut=_t.g,xt=_t.b;ht?(g[0]=Ct,g[1]=Ut,g[2]=xt,g[3]=vt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Ct,_[1]=Ut,_[2]=xt,_[3]=vt,F.clearBufferiv(F.COLOR,0,_))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT),z&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),dt.dispose(),Vt.dispose(),bt.dispose(),E.dispose(),O.dispose(),K.dispose(),te.dispose(),I.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",jo),q.removeEventListener("sessionend",Jo),li.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=ne.autoReset,U=pt.enabled,z=pt.autoUpdate,B=pt.needsUpdate,N=pt.type;ot(),ne.autoReset=T,pt.enabled=U,pt.autoUpdate=z,pt.needsUpdate=B,pt.type=N}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function It(T){const U=T.target;U.removeEventListener("dispose",It),ce(U)}function ce(T){Ee(T),bt.remove(T)}function Ee(T){const U=bt.get(T).programs;U!==void 0&&(U.forEach(function(z){yt.releaseProgram(z)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,B,N,rt){U===null&&(U=se);const ht=N.isMesh&&N.matrixWorld.determinant()<0,_t=Nu(T,U,z,B,N);Tt.setMaterial(B,ht);let vt=z.index,Ct=1;if(B.wireframe===!0){if(vt=et.getWireframeAttribute(z),vt===void 0)return;Ct=2}const Ut=z.drawRange,xt=z.attributes.position;let Xt=Ut.start*Ct,ee=(Ut.start+Ut.count)*Ct;rt!==null&&(Xt=Math.max(Xt,rt.start*Ct),ee=Math.min(ee,(rt.start+rt.count)*Ct)),vt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,vt.count)):xt!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,xt.count));const ie=ee-Xt;if(ie<0||ie===1/0)return;te.setup(N,B,_t,z,vt);let Pe,Zt=mt;if(vt!==null&&(Pe=J.get(vt),Zt=Ht,Zt.setIndex(Pe)),N.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*he()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(N.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),Tt.setLineWidth(Mt*he()),N.isLineSegments?Zt.setMode(F.LINES):N.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else N.isPoints?Zt.setMode(F.POINTS):N.isSprite&&Zt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,Mn=N._multiDrawCounts,Kt=N._multiDrawCount,tn=vt?J.get(vt).bytesPerElement:1,Ci=bt.get(B).currentProgram.getUniforms();for(let Fe=0;Fe<Kt;Fe++)Ci.setValue(F,"_gl_DrawID",Fe),Zt.render(Mt[Fe]/tn,Mn[Fe])}else if(N.isInstancedMesh)Zt.renderInstances(Xt,ie,N.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Mn=Math.min(z.instanceCount,Mt);Zt.renderInstances(Xt,ie,Mn)}else Zt.render(Xt,ie)};function jt(T,U,z){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,kr(T,U,z),T.side=On,T.needsUpdate=!0,kr(T,U,z),T.side=Ln):kr(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),p=Vt.get(z),p.init(U),x.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let ht=0;ht<rt.length;ht++){const _t=rt[ht];jt(_t,z,N),B.add(_t)}else jt(rt,z,N),B.add(rt)}),x.pop(),p=null,B},this.compileAsync=function(T,U,z=null){const B=this.compile(T,U,z);return new Promise(N=>{function rt(){if(B.forEach(function(ht){bt.get(ht).currentProgram.isReady()&&B.delete(ht)}),B.size===0){N(T);return}setTimeout(rt,10)}zt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Qe=null;function yn(T){Qe&&Qe(T)}function jo(){li.stop()}function Jo(){li.start()}const li=new ru;li.setAnimationLoop(yn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){Qe=T,q.setAnimationLoop(T),T===null?li.stop():li.start()},q.addEventListener("sessionstart",jo),q.addEventListener("sessionend",Jo),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,C),p=Vt.get(T,x.length),p.init(U),x.push(p),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(At),gt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,gt),d=dt.get(T,M.length),d.init(),M.push(d),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&ks(rt,U,-1/0,v.sortObjects)}ks(T,U,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(X,$),Gt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Gt&&wt.addToRenderList(d,T),this.info.render.frame++,nt===!0&&it.beginShadows();const z=p.state.shadowsArray;pt.render(z,T,U),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=d.opaque,N=d.transmissive;if(p.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let ht=0,_t=rt.length;ht<_t;ht++){const vt=rt[ht];tl(B,N,T,vt)}Gt&&wt.render(T);for(let ht=0,_t=rt.length;ht<_t;ht++){const vt=rt[ht];Qo(d,T,vt,vt.viewport)}}else N.length>0&&tl(B,N,T,U),Gt&&wt.render(T),Qo(d,T,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,U),te.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],nt===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?d=M[M.length-1]:d=null};function ks(T,U,z,B){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){B&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(At);const ht=K.update(T),_t=T.material;_t.visible&&d.push(T,ht,_t,z,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const ht=K.update(T),_t=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ot.copy(ht.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(At)),Array.isArray(_t)){const vt=ht.groups;for(let Ct=0,Ut=vt.length;Ct<Ut;Ct++){const xt=vt[Ct],Xt=_t[xt.materialIndex];Xt&&Xt.visible&&d.push(T,ht,Xt,z,Ot.z,xt)}}else _t.visible&&d.push(T,ht,_t,z,Ot.z,null)}}const rt=T.children;for(let ht=0,_t=rt.length;ht<_t;ht++)ks(rt[ht],U,z,B)}function Qo(T,U,z,B){const N=T.opaque,rt=T.transmissive,ht=T.transparent;p.setupLightsView(z),nt===!0&&it.setGlobalState(v.clippingPlanes,z),B&&Tt.viewport(R.copy(B)),N.length>0&&Or(N,U,z),rt.length>0&&Or(rt,U,z),ht.length>0&&Or(ht,U,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function tl(T,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new ai(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Lr:kn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[B.id],ht=B.viewport||R;rt.setSize(ht.z,ht.w);const _t=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(H),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&wt.render(z);const vt=v.toneMapping;v.toneMapping=ni;const Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),nt===!0&&it.setGlobalState(v.clippingPlanes,B),Or(T,z,B),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let xt=0,Xt=U.length;xt<Xt;xt++){const ee=U[xt],ie=ee.object,Pe=ee.geometry,Zt=ee.material,Mt=ee.group;if(Zt.side===Ln&&ie.layers.test(B.layers)){const Mn=Zt.side;Zt.side=Ne,Zt.needsUpdate=!0,el(ie,z,B,Pe,Zt,Mt),Zt.side=Mn,Zt.needsUpdate=!0,Ut=!0}}Ut===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}v.setRenderTarget(_t),v.setClearColor(H,V),Ct!==void 0&&(B.viewport=Ct),v.toneMapping=vt}function Or(T,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=T.length;N<rt;N++){const ht=T[N],_t=ht.object,vt=ht.geometry,Ct=B===null?ht.material:B,Ut=ht.group;_t.layers.test(z.layers)&&el(_t,U,z,vt,Ct,Ut)}}function el(T,U,z,B,N,rt){T.onBeforeRender(v,U,z,B,N,rt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,U,z,B,T,rt),N.transparent===!0&&N.side===Ln&&N.forceSinglePass===!1?(N.side=Ne,N.needsUpdate=!0,v.renderBufferDirect(z,U,B,N,T,rt),N.side=On,N.needsUpdate=!0,v.renderBufferDirect(z,U,B,N,T,rt),N.side=Ln):v.renderBufferDirect(z,U,B,N,T,rt),T.onAfterRender(v,U,z,B,N,rt)}function kr(T,U,z){U.isScene!==!0&&(U=se);const B=bt.get(T),N=p.state.lights,rt=p.state.shadowsArray,ht=N.state.version,_t=yt.getParameters(T,N.state,rt,U,z),vt=yt.getProgramCacheKey(_t);let Ct=B.programs;B.environment=T.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(T.isMeshStandardMaterial?O:E).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ct===void 0&&(T.addEventListener("dispose",It),Ct=new Map,B.programs=Ct);let Ut=Ct.get(vt);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===ht)return il(T,_t),Ut}else _t.uniforms=yt.getUniforms(T),T.onBeforeCompile(_t,v),Ut=yt.acquireProgram(_t,vt),Ct.set(vt,Ut),B.uniforms=_t.uniforms;const xt=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xt.clippingPlanes=it.uniform),il(T,_t),B.needsLights=Ou(T),B.lightsStateVersion=ht,B.needsLights&&(xt.ambientLightColor.value=N.state.ambient,xt.lightProbe.value=N.state.probe,xt.directionalLights.value=N.state.directional,xt.directionalLightShadows.value=N.state.directionalShadow,xt.spotLights.value=N.state.spot,xt.spotLightShadows.value=N.state.spotShadow,xt.rectAreaLights.value=N.state.rectArea,xt.ltc_1.value=N.state.rectAreaLTC1,xt.ltc_2.value=N.state.rectAreaLTC2,xt.pointLights.value=N.state.point,xt.pointLightShadows.value=N.state.pointShadow,xt.hemisphereLights.value=N.state.hemi,xt.directionalShadowMap.value=N.state.directionalShadowMap,xt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xt.spotShadowMap.value=N.state.spotShadowMap,xt.spotLightMatrix.value=N.state.spotLightMatrix,xt.spotLightMap.value=N.state.spotLightMap,xt.pointShadowMap.value=N.state.pointShadowMap,xt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function nl(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ss.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function il(T,U){const z=bt.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Nu(T,U,z,B,N){U.isScene!==!0&&(U=se),A.resetTextureUnits();const rt=U.fog,ht=B.isMeshStandardMaterial?U.environment:null,_t=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,vt=(B.isMeshStandardMaterial?O:E).get(B.envMap||ht),Ct=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xt=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color;let ie=ni;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ie=v.toneMapping);const Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Pe!==void 0?Pe.length:0,Mt=bt.get(B),Mn=p.state.lights;if(nt===!0&&(gt===!0||T!==y)){const Xe=T===y&&B.id===S;it.setState(B,T,Xe)}let Kt=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Mn.state.version||Mt.outputColorSpace!==_t||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==vt||B.fog===!0&&Mt.fog!==rt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==it.numPlanes||Mt.numIntersection!==it.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==Ut||Mt.morphTargets!==xt||Mt.morphNormals!==Xt||Mt.morphColors!==ee||Mt.toneMapping!==ie||Mt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,Mt.__version=B.version);let tn=Mt.currentProgram;Kt===!0&&(tn=kr(B,U,N));let Ci=!1,Fe=!1,lr=!1;const re=tn.getUniforms(),hn=Mt.uniforms;if(Tt.useProgram(tn.program)&&(Ci=!0,Fe=!0,lr=!0),B.id!==S&&(S=B.id,Fe=!0),Ci||y!==T){Tt.buffers.depth.getReversed()?(lt.copy(T.projectionMatrix),Ch(lt),Ph(lt),re.setValue(F,"projectionMatrix",lt)):re.setValue(F,"projectionMatrix",T.projectionMatrix),re.setValue(F,"viewMatrix",T.matrixWorldInverse);const Vn=re.map.cameraPosition;Vn!==void 0&&Vn.setValue(F,Pt.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&re.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Fe=!0,lr=!0)}if(N.isSkinnedMesh){re.setOptional(F,N,"bindMatrix"),re.setOptional(F,N,"bindMatrixInverse");const Xe=N.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),re.setValue(F,"boneTexture",Xe.boneTexture,A))}N.isBatchedMesh&&(re.setOptional(F,N,"batchingTexture"),re.setValue(F,"batchingTexture",N._matricesTexture,A),re.setOptional(F,N,"batchingIdTexture"),re.setValue(F,"batchingIdTexture",N._indirectTexture,A),re.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&re.setValue(F,"batchingColorTexture",N._colorsTexture,A));const cr=z.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&Rt.update(N,z,tn),(Fe||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,re.setValue(F,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(hn.envMap.value=vt,hn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Fe&&(re.setValue(F,"toneMappingExposure",v.toneMappingExposure),Mt.needsLights&&Fu(hn,lr),rt&&B.fog===!0&&ct.refreshFogUniforms(hn,rt),ct.refreshMaterialUniforms(hn,B,P,Z,p.state.transmissionRenderTarget[T.id]),Ss.upload(F,nl(Mt),hn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ss.upload(F,nl(Mt),hn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(F,"center",N.center),re.setValue(F,"modelViewMatrix",N.modelViewMatrix),re.setValue(F,"normalMatrix",N.normalMatrix),re.setValue(F,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xe=B.uniformsGroups;for(let Vn=0,Wn=Xe.length;Vn<Wn;Vn++){const rl=Xe[Vn];I.update(rl,tn),I.bind(rl,tn)}}return tn}function Fu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,z){bt.get(T.texture).__webglTexture=U,bt.get(T.depthTexture).__webglTexture=z;const B=bt.get(T);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const z=bt.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){C=T,w=U,b=z;let B=!0,N=null,rt=!1,ht=!1;if(T){const vt=bt.get(T);if(vt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(vt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(vt.__hasExternalTextures)A.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const xt=T.depthTexture;if(vt.__boundDepthTexture!==xt){if(xt!==null&&bt.has(xt)&&(T.width!==xt.image.width||T.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);const Ut=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][z]:N=Ut[U],rt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?N=bt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[z]:N=Ut,R.copy(T.viewport),k.copy(T.scissor),D=T.scissorTest}else R.copy(j).multiplyScalar(P).floor(),k.copy(at).multiplyScalar(P).floor(),D=St;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&B&&Tt.drawBuffers(T,N),Tt.viewport(R),Tt.scissor(k),Tt.setScissorTest(D),rt){const vt=bt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,z)}else if(ht){const vt=bt.get(T.texture),Ct=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,z||0,Ct)}S=-1},this.readRenderTargetPixels=function(T,U,z,B,N,rt,ht){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);try{const vt=T.texture,Ct=vt.format,Ut=vt.type;if(!Bt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-B&&z>=0&&z<=T.height-N&&F.readPixels(U,z,B,N,Nt.convert(Ct),Nt.convert(Ut),rt)}finally{const vt=C!==null?bt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,B,N,rt,ht){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const vt=T.texture,Ct=vt.format,Ut=vt.type;if(!Bt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-B&&z>=0&&z<=T.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,_t);const xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.bufferData(F.PIXEL_PACK_BUFFER,rt.byteLength,F.STREAM_READ),F.readPixels(U,z,B,N,Nt.convert(Ct),Nt.convert(Ut),0);const Xt=C!==null?bt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Xt);const ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Rh(F,ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,rt),F.deleteBuffer(xt),F.deleteSync(ee),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,z=0){T.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(T.image.width*B),rt=Math.floor(T.image.height*B),ht=U!==null?U.x:0,_t=U!==null?U.y:0;A.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,ht,_t,N,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(T,U,z=null,B=null,N=0){T.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let rt,ht,_t,vt,Ct,Ut,xt,Xt,ee;const ie=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(rt=z.max.x-z.min.x,ht=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,vt=z.min.x,Ct=z.min.y,Ut=z.isBox3?z.min.z:0):(rt=ie.width,ht=ie.height,_t=ie.depth||1,vt=0,Ct=0,Ut=0),B!==null?(xt=B.x,Xt=B.y,ee=B.z):(xt=0,Xt=0,ee=0);const Pe=Nt.convert(U.format),Zt=Nt.convert(U.type);let Mt;U.isData3DTexture?(A.setTexture3D(U,0),Mt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Mt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Mt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Mn=F.getParameter(F.UNPACK_ROW_LENGTH),Kt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),tn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ci=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ct),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);const lr=T.isDataArrayTexture||T.isData3DTexture,re=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const hn=bt.get(T),cr=bt.get(U),Xe=bt.get(hn.__renderTarget),Vn=bt.get(cr.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<_t;Wn++)lr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(T).__webglTexture,N,Ut+Wn),T.isDepthTexture?(re&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.get(U).__webglTexture,N,ee+Wn),F.blitFramebuffer(vt,Ct,rt,ht,xt,Xt,rt,ht,F.DEPTH_BUFFER_BIT,F.NEAREST)):re?F.copyTexSubImage3D(Mt,N,xt,Xt,ee+Wn,vt,Ct,rt,ht):F.copyTexSubImage2D(Mt,N,xt,Xt,ee+Wn,vt,Ct,rt,ht);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else re?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Mt,N,xt,Xt,ee,rt,ht,_t,Pe,Zt,ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Mt,N,xt,Xt,ee,rt,ht,_t,Pe,ie.data):F.texSubImage3D(Mt,N,xt,Xt,ee,rt,ht,_t,Pe,Zt,ie):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,xt,Xt,rt,ht,Pe,Zt,ie.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,xt,Xt,ie.width,ie.height,Pe,ie.data):F.texSubImage2D(F.TEXTURE_2D,N,xt,Xt,rt,ht,Pe,Zt,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Kt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ci),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&F.generateMipmap(Mt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z=null,B=null,N=0){return T.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,z,B,N)},this.initRenderTarget=function(T){bt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,Tt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class hu extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zo extends Ce{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hm={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=fu(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,m;if(i&&(s=qm(n,t,s,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let g=e;g<r;g+=e)h=n[g],f=n[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ar(s,a,e,o,l,m,0),a}};function fu(n,t,e,i,r){let s,a;if(r===ig(n,t,e,i)>0)for(s=t;s<e;s+=i)a=ic(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=ic(s,n[s],n[s+1],a);return a&&Fs(a,a.next)&&(Cr(a),a=a.next),a}function Ti(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fs(e,e.next)||ae(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(n,t,e,i,r,s,a){if(!n)return;!a&&s&&jm(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Vm(n,i,r,s):Gm(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Cr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Wm(Ti(n),t,e),Ar(n,t,e,i,r,s,2)):a===2&&Xm(n,t,e,i,r,s):Ar(Ti(n),t,e,i,r,s,1);break}}}function Gm(n){const t=n.prev,e=n,i=n.next;if(ae(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&$i(r,o,s,l,a,c,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vm(n,t,e,i){const r=n.prev,s=n,a=n.next;if(ae(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,p=go(m,g,t,e,i),M=go(_,d,t,e,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&$i(o,u,l,h,c,f,x.x,x.y)&&ae(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&$i(o,u,l,h,c,f,v.x,v.y)&&ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&$i(o,u,l,h,c,f,x.x,x.y)&&ae(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&$i(o,u,l,h,c,f,v.x,v.y)&&ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wm(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Fs(r,s)&&du(r,i,i.next,s)&&Rr(r,s)&&Rr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Cr(i),Cr(i.next),i=n=s),i=i.next}while(i!==n);return Ti(i)}function Xm(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tg(a,o)){let l=pu(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Ar(a,t,e,i,r,s,0),Ar(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function qm(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=fu(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Qm(c));for(r.sort(Ym),s=0;s<r.length;s++)e=$m(r[s],e);return e}function Ym(n,t){return n.x-t.x}function $m(n,t){const e=Zm(n,t);if(!e)return t;const i=pu(e,n);return Ti(i,i.next),Ti(e,e.next)}function Zm(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&$i(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),Rr(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Km(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function Km(n,t){return ae(n.prev,n,t.prev)<0&&ae(t.next,n,n.next)<0}function jm(n,t,e,i){let r=n;do r.z===0&&(r.z=go(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Jm(r)}function Jm(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function go(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function $i(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function tg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!eg(n,t)&&(Rr(n,t)&&Rr(t,n)&&ng(n,t)&&(ae(n.prev,n,t.prev)||ae(n,t.prev,t))||Fs(n,t)&&ae(n.prev,n,n.next)>0&&ae(t.prev,t,t.next)>0)}function ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fs(n,t){return n.x===t.x&&n.y===t.y}function du(n,t,e,i){const r=os(ae(n,t,e)),s=os(ae(n,t,i)),a=os(ae(e,i,n)),o=os(ae(e,i,t));return!!(r!==s&&a!==o||r===0&&as(n,e,t)||s===0&&as(n,i,t)||a===0&&as(e,n,i)||o===0&&as(e,t,i))}function as(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function os(n){return n>0?1:n<0?-1:0}function eg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Rr(n,t){return ae(n.prev,n,n.next)<0?ae(n,t,n.next)>=0&&ae(n,n.prev,t)>=0:ae(n,t,n.prev)<0||ae(n,n.next,t)<0}function ng(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function pu(n,t){const e=new _o(n.i,n.x,n.y),i=new _o(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function ic(n,t,e,i){const r=new _o(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _o(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ig(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Bo{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Bo.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];rc(t),sc(i,t);let a=t.length;e.forEach(rc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,sc(i,e[l]);const o=Hm.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function rc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function sc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const ac=new le;class rg{constructor(t,e,i=0,r=1/0){this.ray=new Zc(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ac.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(t,e=!0,i=[]){return vo(t,this,i,e),i.sort(oc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)vo(t[r],this,i,e);return i.sort(oc),i}}function oc(n,t){return n.distance-t.distance}function vo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)vo(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);function un(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function xo(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Ge{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const r of t)e+=Math.max(0,r[1]);let i=this.next()*e;for(const r of t)if(i-=Math.max(0,r[1]),i<=0)return r[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const r=Math.floor(this.next()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}fork(t=0){return new Ge(un(Math.floor(this.next()*4294967296),t))}}const Ve=(n,t,e)=>n<t?t:n>e?e:n,sg=(n,t,e)=>n+(t-n)*e,lc=(n,t,e)=>{const i=Ve((e-n)/(t-n),0,1);return i*i*(3-2*i)},Zi=(n,t,e,i)=>sg(n,t,1-Math.exp(-e*i)),ma=Math.PI*2;function ag(n,t){let e=(t-n)%ma;return e>Math.PI&&(e-=ma),e<-Math.PI&&(e+=ma),e}function Se(n,t=0){const e=Math.floor(n),i=n-e,r=un(e,t)/2147483648-1,s=un(e+1,t)/2147483648-1,a=i*i*(3-2*i);return r+(s-r)*a}const Je="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",ii="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",Es="'VT323', 'Courier New', monospace";function wi(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function og(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function Ho(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const r=new zo(n);return r.colorSpace=je,r.wrapS=t?Tr:In,r.wrapT=e?Tr:In,r.generateMipmaps=i,r.minFilter=i?Qn:Me,r.magFilter=Me,r.anisotropy=2,r.needsUpdate=!0,r}function lg(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function mu(n,t){const[e,i,r]=lg(n),s=a=>Math.max(0,Math.min(255,Math.round(t>=0?a+(255-a)*t:a*(1+t))));return`rgb(${s(e)},${s(i)},${s(r)})`}function Go(n,t,e,i,r,s=1,a=1,o=!0){const l=new Ge(s);n.save(),n.beginPath(),n.rect(t,e,i,r),n.clip();const c=Math.floor(i*r/900*a);for(let u=0;u<c;u++){const h=l.range(.02,.09)*a;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${h})`:`rgba(255,255,240,${h*.6})`;const f=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,r),f,f*l.range(.5,o?3:1.4))}for(let u=0;o&&u<Math.floor(i/90*a);u++){const h=t+l.range(0,i),f=e+l.range(0,r*.7),m=l.range(r*.05,r*.35),g=n.createLinearGradient(0,f,0,f+m);g.addColorStop(0,`rgba(40,30,15,${.1*a})`),g.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=g,n.fillRect(h,f,l.range(2,7),m)}n.restore()}function Bn(n,t,e,i,r=Je,s=400){let a=i;n.font=`${s} ${a}px ${r}`;const o=n.measureText(t).width;return o>e&&(a=Math.max(6,Math.floor(a*e/o)),n.font=`${s} ${a}px ${r}`),a}function Pr(n,t,e){const i=[];for(const r of String(t).split(`
`)){let s="";for(const a of r.split(" ")){const o=s?`${s} ${a}`:a;n.measureText(o).width>e&&s?(i.push(s),s=a):s=o}i.push(s)}return i}function yo(n,t,e,i,r,s){const a={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[r]??0;n.save(),n.translate(t,e),n.rotate(a),n.strokeStyle=s,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const qt={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},Mo=[{id:"meridian",name:"Meridian",color:"#d2281e"},{id:"tallow",name:"Tallow",color:"#1b1b1b"},{id:"garland",name:"Garland",color:"#0a3a8c"},{id:"wren",name:"Wren",color:"#1297d1"},{id:"ashdown",name:"Ashdown",color:"#a8600c"},{id:"verity",name:"Verity",color:"#0d7a32"},{id:"lantern",name:"Lantern",color:"#f2c500"},{id:"marlow",name:"Marlow",color:"#96105a"},{id:"pewter",name:"Pewter",color:"#8f979c"}],gu=[{id:"green",ground:"#e9e2c8",band:"#1f5a3a",accent:"#123a26",skirt:"#17382a",grout:"#b9b095"},{id:"brown",ground:"#ebe3c6",band:"#6a3b1c",accent:"#d9a520",skirt:"#3d2412",grout:"#bdb294"},{id:"custard",ground:"#f1ecd9",band:"#c9892f",accent:"#ecd27a",skirt:"#6d4a1a",grout:"#c4bca2"},{id:"blue",ground:"#e6e3d0",band:"#1c2f5c",accent:"#2a9d9a",skirt:"#162243",grout:"#b4b19e"},{id:"salmon",ground:"#efe4d2",band:"#8c2f45",accent:"#e0907f",skirt:"#4f1b28",grout:"#c0b3a0"},{id:"mauve",ground:"#e8e2d2",band:"#6d5384",accent:"#3e2d52",skirt:"#33263f",grout:"#b8b1a2"},{id:"biscuit",ground:"#e3d6b0",band:"#b3261e",accent:"#14213d",skirt:"#2b2b2b",grout:"#bcae88"}],bs={ring:"#b3261e",bar:"#14213d",text:"#ffffff",panel:"#f4f1e6"},Ue={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},cg=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function _u(n,t,e,i,r={}){let s=r.ring||bs.ring,a=r.bar||bs.bar;const o=r.defect||null;o==="swap"&&([s,a]=[a,s]);const l=i*.44,c=i*1.3,u=i*.81,h=i*.38;n.save(),n.translate(t,e),o==="tilt"&&n.rotate(-.09);const f=o==="solid"?0:Math.asin(Math.min(.95,(l/2+i*.07)/u));n.strokeStyle=s,n.lineWidth=h,n.lineCap="butt";const m=o==="gap"?[[Math.PI+f,Math.PI*1.62],[Math.PI*1.74,2*Math.PI-f],[f,Math.PI-f]]:[[Math.PI+f,2*Math.PI-f],[f,Math.PI-f]];for(const[_,d]of m)n.beginPath(),n.arc(0,0,u,_,d),n.stroke();if(o==="double"){n.lineWidth=h*.3;for(const[_,d]of m)n.beginPath(),n.arc(0,0,u*.52,_-.2,d+.2),n.stroke()}const g=o==="low"?i*.2:0;if(n.fillStyle=a,n.beginPath(),n.moveTo(-c,g),n.lineTo(-c+l/2,g-l/2),n.lineTo(c-l/2,g-l/2),n.lineTo(c,g),n.lineTo(c-l/2,g+l/2),n.lineTo(-c+l/2,g+l/2),n.closePath(),n.fill(),r.name){const _=String(r.name).toUpperCase();n.fillStyle=r.text||bs.text,n.textAlign="center",n.textBaseline="middle",Bn(n,_,(c-l*.55)*2,l*.66,Je),o==="mirror"&&n.scale(-1,1),n.fillText(_,0,g+l*.04)}n.restore()}function vu(n,t,e,i,r={}){n.fillStyle=bs.panel,n.fillRect(0,0,t,e),n.strokeStyle="#1b1b1b",n.lineWidth=Math.max(2,e*.02),n.strokeRect(1,1,t-2,e-2);const s=Math.min(e*.4,t/2.9);_u(n,t/2,e/2,s,{name:i,...r})}const ug=["tilt","double","solid","swap","gap","low","mirror"],Le=n=>document.getElementById(n);function cc(n,t){if(!n)return;const e=wi(360,200);_u(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function hg(){const n=Le("title"),t=Le("pause"),e=Le("end"),i=Le("touch"),r=Le("fade"),s=(o,l)=>o.classList.toggle("hidden",!l);return{drawMarks(){cc(Le("title-mark"),"Mind the Gap"),cc(Le("end-mark"),"Way out")},showTitle(){s(n,!0),s(t,!1),s(e,!1),s(i,!1)},showPlaying(o){s(n,!1),s(t,!1),s(e,!1),s(i,!!o),r.classList.remove("on")},showPause(){s(t,!0),s(i,!1)},whiteOut(){r.classList.remove("black"),r.classList.add("on")},showEnd(o){const l=Le("end-stats");l.replaceChildren();for(const[c,u]of o){const h=document.createElement("dt");h.textContent=c;const f=document.createElement("dd");f.textContent=u,l.append(h,f)}s(e,!0),s(i,!1),s(t,!1),setTimeout(()=>r.classList.remove("on"),400)},onStart(o){Le("btn-start").addEventListener("click",o)},onResume(o){Le("btn-resume").addEventListener("click",o)},onAgain(o){Le("btn-again").addEventListener("click",o)},onVoice(o){const l=Le("opt-voice");l.addEventListener("change",()=>o(l.checked))},onHQ(o){const l=Le("opt-hq");l.addEventListener("change",()=>o(l.checked))},setLoading(o){const l=Le("btn-start");l.disabled=!!o,l.textContent=o?"Loading…":"Press to begin"}}}const fg=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,dg=`
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
}`;function pg(n,t){const e=new xn({vertexShader:fg,fragmentShader:dg,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new $t(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new Gn;i.setAttribute("position",new we(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new we(new Float32Array([0,0,2,0,0,2]),2));const r=new ln(i,e);r.frustumCulled=!1;const s=new hu;s.add(r);const a=new su(-1,1,1,-1,0,1);return{scene:s,camera:a,uniforms:e.uniforms,material:e}}class mg{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new Bm({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=Ai,this.gl.autoClear=!0,this.gl.setClearColor(new Yt().setRGB(...qt.fogColor),1),this.target=new ai(64,64,{minFilter:Me,magFilter:Me,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=je,this.dv=pg(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,r=this.mobile?1280:2200;let s=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);s=Math.min(s,r/Math.max(t,e)),this.gl.setPixelRatio(s),this.gl.setSize(t,e,!1);let a=this.mobile?qt.internalHMobile:qt.internalH;this.hq&&(a=Math.round(a*1.45));let o,l;i>=1?(l=a,o=Math.round(a*Math.min(i,2.4))):(o=Math.round(a*.8),l=Math.round(o/Math.max(i,.42))),this.target.setSize(o,l),this.dv.uniforms.uInRes.value.set(o,l),this.overlay.resize(o,l),this.width=t,this.height=e,this.aspect=i,this.iw=o,this.ih=l}render(t,e,i){const r=this.gl;this.dv.uniforms.uTime.value=i%1e3,r.setRenderTarget(this.target),r.render(t,e),this.drawCalls=r.info.render.calls,this.triangles=r.info.render.triangles,r.setRenderTarget(null),r.render(this.dv.scene,this.dv.camera)}}const mr=n=>String(n).padStart(2,"0");class gg{constructor(){this.canvas=wi(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new zo(this.canvas),this.texture.colorSpace=je,this.texture.generateMipmaps=!1,this.texture.minFilter=Me,this.texture.magFilter=Me,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,r,s="left",a="#fff"){const o=this.ctx;o.font=`400 ${r}px ${Es}`,o.textAlign=s,o.textBaseline="alphabetic",o.lineWidth=Math.max(2,r*.16),o.strokeStyle="rgba(0,0,0,0.85)",o.lineJoin="round",o.strokeText(t,e,i),o.fillStyle=a,o.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,r=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(r===this.sig)return;this.sig=r;const s=this.ctx,a=this.canvas.width,o=this.canvas.height;s.clearRect(0,0,a,o);const l=o>a,c=Math.min(a,o)/(l?300:400),u=18*c,h=22*c;if(t.live){i&&(s.fillStyle="#ff2a1a",s.beginPath(),s.arc(u+h*2.05,u+h*.42,h*.3,0,7),s.fill()),this.text("REC",u,u+h*.75,h,"left","#fff");const g=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${g}:${mr(_)}:${mr(d)}`,u,u+h*1.75,h*.9);const p=a-u-h*1.9,M=u+h*.12;s.strokeStyle="#fff",s.lineWidth=Math.max(2,c*2),s.strokeRect(p,M,h*1.7,h*.66),s.fillStyle="#fff",s.fillRect(p+h*1.7,M+h*.2,h*.14,h*.26);const x=Math.max(1,3-Math.floor(e/600));for(let R=0;R<x;R++)s.fillRect(p+h*.12+R*h*.52,M+h*.12,h*.4,h*.42);this.text("SP",p-h*.5,u+h*.75,h,"right");const v=t.date,L=v.getHours()%12||12,w=v.getHours()<12?"AM":"PM",b=this.mobile?u+h*2.75:o-u;this.text(`${cg[v.getMonth()]} ${mr(v.getDate())} ${v.getFullYear()}`,a-u,b-h*1.05,h,"right"),this.text(`${L}:${mr(v.getMinutes())}:${mr(v.getSeconds())} ${w}`,a-u,b,h,"right"),s.strokeStyle="rgba(255,255,255,0.55)",s.lineWidth=Math.max(1.5,c*1.5);const C=a/2,S=o/2,y=7*c;if(s.beginPath(),s.moveTo(C-y,S),s.lineTo(C-y*.35,S),s.moveTo(C+y*.35,S),s.lineTo(C+y,S),s.moveTo(C,S-y),s.lineTo(C,S-y*.35),s.moveTo(C,S+y*.35),s.lineTo(C,S+y),s.stroke(),t.zoom>.05){const R=u,k=this.mobile?u+h*3:o-u-h*.3,D=h*4;this.text("W",R,k,h*.8),this.text("T",R+D+h*.9,k,h*.8),s.strokeStyle="#fff",s.strokeRect(R+h*.6,k-h*.45,D,h*.36),s.fillStyle="#fff",s.fillRect(R+h*.6,k-h*.45,D*t.zoom,h*.36)}}const f=(l?21:24)*c;let m=o-u-h*(l?2.6:2.3);if(this.mobile&&(m=o*(l?.74:.86)),t.reading){s.font=`400 ${f}px ${Es}`;const g=Pr(s,t.reading.text,a*.8),_=(g.length+(t.reading.title?1.3:.3))*f*1.02+f*.5,d=Math.min(m-_,o*.62);s.fillStyle="rgba(0,0,0,0.62)",s.fillRect(a*.07,d,a*.86,_);let p=d+f*1;t.reading.title&&(this.text(t.reading.title,a/2,p,f*.82,"center","#ffd329"),p+=f*1.1);for(const M of g)this.text(M,a/2,p,f,"center"),p+=f*1.02;m=d-f*.4}else t.prompt&&this.text(t.prompt,a/2,o*.5+34*c,f*.9,"center","#ffd329");if(t.caption){s.font=`400 ${f}px ${Es}`;const g=Pr(s,t.caption,a*.84);let _=m-(g.length-1)*f*1.02;t.captionTag&&this.text(t.captionTag,a/2,_-f*1.08,f*.8,"center","#9fd8ff");for(const d of g)this.text(d,a/2,_,f,"center"),_+=f*1.02}t.hint&&this.text(t.hint,a/2,u+h*3.2,f*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const _g=`
attribute vec4 aLight;        // rgb = baked light / 2, a = light from the faulty tube / 2
uniform float uPower;         // global power level (brown-outs)
uniform float uFlick;         // this segment's faulty tube, 0..1
uniform float uCam;           // camcorder lamp strength
varying vec2 vUv;
varying vec3 vLight;
varying float vFog;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = length(mv.xyz);
  vec3 l = aLight.rgb * 2.0 * uPower + vec3(1.0, 0.97, 0.9) * (aLight.a * 2.0 * uFlick * uPower);
  // camcorder lamp: small warm falloff around the lens axis
  float axis = clamp(-mv.z / max(d, 0.001), 0.0, 1.0);
  l += vec3(1.0, 0.95, 0.85) * uCam * axis * axis / (1.0 + 0.16 * d * d);
  vLight = l;
  vFog = d;
  gl_Position = projectionMatrix * mv;
}`,vg=`
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
void main() {
  vec4 t = texture2D(map, vUv);
#ifdef CUTOUT
  if (t.a < 0.5) discard;
#endif
  vec3 c = t.rgb * vLight;
  float f = 1.0 - exp(-uFogDensity * uFogDensity * vFog * vFog);
  gl_FragColor = vec4(mix(c, uFogColor, clamp(f, 0.0, 1.0)), 1.0);
}`,Sr={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new Yt().setRGB(...qt.fogColor)},uFogDensity:{value:qt.fogDensity}};function xg(n,t,e=!1){return new xn({defines:e?{CUTOUT:1}:{},vertexShader:_g,fragmentShader:vg,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:Sr.uPower,uCam:Sr.uCam,uFogColor:Sr.uFogColor,uFogDensity:Sr.uFogDensity},side:On})}const uc=[1,1,1],jn=new G,ls=new G,hc=new Dt;function xu(n,t,e){const i=Math.cos(e.yaw),r=Math.sin(e.yaw);for(let s=0;s<t.length;s+=3){const a=t[s],o=t[s+1],l=t[s+2];n[s]=e.x+a*i+l*r,n[s+1]=e.y+o,n[s+2]=e.z-a*r+l*i}}class yg{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&(hc.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new le().makeScale(-1,1,1):null)}place(t,e,i,r=0){const s=new le().makeRotationY(r);return s.setPosition(t,e,i),this.setXf(s)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}_vert(t,e,i,r,s,a){this.m?(jn.set(e[0],e[1],e[2]).applyMatrix4(this.m),ls.set(i[0],i[1],i[2]).applyMatrix3(hc),t.pos.push(jn.x,jn.y,jn.z),t.nrm.push(ls.x,ls.y,ls.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(r,s);const o=a&&a.tint||uc;return t.tint.push(o[0],o[1],o[2]),t.emit.push(a&&a.emit!==void 0?a.emit+(a.flick?1e3:0):-1),t.n++}quad(t,e,i,r,s,a,o,l){return this.quadN(t,e,i,r,s,a,a,a,a,a,o,l)}quadN(t,e,i,r,s,a,o,l,c,u,h,f){const m=this._layer(t),g=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],p=r[0]-e[0],M=r[1]-e[1],x=r[2]-e[2],v=_*x-d*M,L=d*p-g*x,w=g*M-_*p,b=v*a[0]+L*a[1]+w*a[2]>=0!=!!this.flip,C=this._vert(m,e,o,h[0],h[1],f),S=this._vert(m,i,l,h[2],h[1],f),y=this._vert(m,r,c,h[2],h[3],f),R=this._vert(m,s,u,h[0],h[3],f);b?m.idx.push(C,S,y,C,y,R):m.idx.push(C,y,S,C,R,y)}quadUV(t,e,i,r,s,a,o,l,c,u,h){const f=this._layer(t),m=i[0]-e[0],g=i[1]-e[1],_=i[2]-e[2],d=r[0]-e[0],p=r[1]-e[1],M=r[2]-e[2],x=(g*M-_*p)*a[0]+(_*d-m*M)*a[1]+(m*p-g*d)*a[2]>=0!=!!this.flip,v=this._vert(f,e,a,o[0],o[1],h),L=this._vert(f,i,a,l[0],l[1],h),w=this._vert(f,r,a,c[0],c[1],h),b=this._vert(f,s,a,u[0],u[1],h);x?f.idx.push(v,L,w,v,w,b):f.idx.push(v,w,L,v,b,w)}tri(t,e,i,r,s,a,o,l,c){const u=this._layer(t),h=i[0]-e[0],f=i[1]-e[1],m=i[2]-e[2],g=r[0]-e[0],_=r[1]-e[1],d=r[2]-e[2],p=(f*d-m*_)*s[0]+(m*g-h*d)*s[1]+(h*_-f*g)*s[2]>=0!=!!this.flip,M=this._vert(u,e,s,a[0],a[1],c),x=this._vert(u,i,s,o[0],o[1],c),v=this._vert(u,r,s,l[0],l[1],c);p?u.idx.push(M,x,v):u.idx.push(M,v,x)}grid(t,e,i,r,s,a,o,l,c,u=!1){for(let h=0;h<s;h++)for(let f=0;f<a;f++){const m=(x,v)=>[e[0]+i[0]*x+r[0]*v,e[1]+i[1]*x+r[1]*v,e[2]+i[2]*x+r[2]*v],g=h/s,_=(h+1)/s,d=f/a,p=(f+1)/a,M=u?l:[l[0]+(l[2]-l[0])*g,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*p];this.quad(t,m(g,d),m(_,d),m(_,p),m(g,p),o,M,c)}}box(t,e,i,r,s,a,o,l,c,u="xXyYzZ"){const h=(f,m,g,_,d)=>this.quad(t,f,m,g,_,d,l,c);u.includes("x")&&h([e,i,o],[e,i,r],[e,a,r],[e,a,o],[-1,0,0]),u.includes("X")&&h([s,i,r],[s,i,o],[s,a,o],[s,a,r],[1,0,0]),u.includes("y")&&h([e,i,r],[s,i,r],[s,i,o],[e,i,o],[0,-1,0]),u.includes("Y")&&h([e,a,r],[s,a,r],[s,a,o],[e,a,o],[0,1,0]),u.includes("z")&&h([s,i,r],[e,i,r],[e,a,r],[s,a,r],[0,0,-1]),u.includes("Z")&&h([e,i,o],[s,i,o],[s,a,o],[e,a,o],[0,0,1])}addLight(t,e,i,r=1,s=7,a=!1,o=uc){this.m&&(jn.set(t,e,i).applyMatrix4(this.m),t=jn.x,e=jn.y,i=jn.z),this.lights.push({x:t,y:e,z:i,i:r,r2:s*s,flicker:a,color:o})}addPortal(t,e,i,r){this.portals.push({x:t,y:e,z:i,dx:Math.sin(r),dz:Math.cos(r)})}_lightAt(t,e,i,r,s,a,o){const l=o.x-t,c=o.y-e,u=o.z-i,h=l*l+c*c+u*u;if(h>=o.r2)return 0;const f=(1-h/o.r2)**2,m=1/Math.sqrt(h+1e-6),g=Math.max(0,(r*l+s*c+a*u)*m);return o.i*f*(.38+.62*g)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(s=>({x:s.x,y:s.y+2.3,z:s.z,i:.85,r2:36})),r={};for(const s of Object.keys(this.layers)){const a=this.layers[s],o=new Uint8Array(a.n*4);for(let u=0;u<a.n;u++){const h=a.tint[u*3],f=a.tint[u*3+1],m=a.tint[u*3+2];let g,_,d,p=0;const M=a.emit[u];if(M>=0){const x=M>=1e3,v=x?M-1e3:M,L=x?.1:1;g=h*v*L,_=f*v*L,d=m*v*L,p=x?v*.9:0}else{const x=a.pos[u*3],v=a.pos[u*3+1],L=a.pos[u*3+2],w=a.nrm[u*3],b=a.nrm[u*3+1],C=a.nrm[u*3+2];let S=1;for(const y of this.portals){const R=Math.abs((x-y.x)*y.dx+(L-y.z)*y.dz),k=Math.abs((x-y.x)*y.dz-(L-y.z)*y.dx),D=Math.hypot(k,Math.max(0,v-y.y-2.2));k<4&&Math.abs(v-y.y)<5&&(S=Math.min(S,Math.max(lc(.1,2.4,R),lc(1.7,2.9,D))))}g=t[0],_=t[1],d=t[2];for(const y of this.lights){const R=this._lightAt(x,v,L,w,b,C,y)*S;R<=0||(y.flicker?p+=R:(g+=R*y.color[0],_+=R*y.color[1],d+=R*y.color[2]))}for(const y of i){const R=this._lightAt(x,v,L,w,b,C,y);g+=R,_+=R*.98,d+=R*.93}g*=h,_*=f,d*=m,p*=(h+f+m)/3}o[u*4]=Math.min(255,g*127.5),o[u*4+1]=Math.min(255,_*127.5),o[u*4+2]=Math.min(255,d*127.5),o[u*4+3]=Math.min(255,p*127.5)}const l=new Gn,c=new Float32Array(a.pos);e&&xu(c,a.pos,e),l.userData.local=a.pos,l.setAttribute("position",new we(c,3)),l.setAttribute("uv",new we(new Float32Array(a.uv),2)),l.setAttribute("aLight",new we(o,4,!0)),l.setIndex(new we(a.n>65535?new Uint32Array(a.idx):new Uint16Array(a.idx),1)),l.computeBoundingSphere(),r[s]=l}return r}}let Mg=1;const Sg=new Set(["sheet","cut","gate","figure"]);function fc(n,t,e){const i=Math.cos(e),r=Math.sin(e);let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const[c,u]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const h=t.x+c*i+u*r,f=t.z-c*r+u*i;s=Math.min(s,h),a=Math.max(a,h),o=Math.min(o,f),l=Math.max(l,f)}return[s,t.y+n[1],o,a,t.y+n[4],l]}function Eg(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}class bg{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const r=new Ge(i),s=t.plan(r,e),a=this._make(t,s,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=a,this.refresh(!0),a}_make(t,e,i,r,s,a,o,l){const c={id:Mg++,def:t,p:e.p,env:i,seed:l,pos:r,yaw:s,parent:a,exitIndex:o,exits:e.exits.map(u=>({...u,child:null})),box:fc(e.box,r,s),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((u,h)=>Math.max(u,Math.hypot(h.x,h.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],r=Math.cos(t.yaw),s=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*r+i.z*s,y:t.pos.y+i.y,z:t.pos.z-i.x*s+i.z*r},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&Eg(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:r,yaw:s}=this.exitPose(t,e);let a=null;for(let o=0;o<14;o++){const l=un(t.seed,e*31+o*977+1),c=new Ge(l),u=this.hooks.choose(t,e,o,c);if(!u)break;const h=u.def.plan(c,u.env);a||(a={pick:u,plan:h,seed:l});const f=fc(h.box,r,s);if(!(!u.force&&!this._fits(f,t)))return i.child=this._make(u.def,h,u.env,r,s,t,e,l),i.child}return this.stats.deadEnds++,a?(i.child=this._make(a.pick.def,a.plan,a.pick.env,r,s,t,e,a.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=qt.ahead,i=qt.sight||46,r=7;for(const o of this.nodes.values())o.dist=1/0,o.path=1/0;const s=[this.current];this.current.dist=0,this.current.path=0;const a=o=>o.dist<=e||o.path<=i&&o.dist<=r;for(;s.length;){const o=s.shift();if(o.dist<e||o.path<i&&o.dist<r)for(let l=0;l<o.exits.length;l++)this.expand(o,l);for(const l of this.neighbours(o))l.dist>o.dist+1&&(l.dist=o.dist+1,l.path=o===this.current?0:o.path+(o.span||8),s.push(l))}for(const o of this.nodes.values())a(o)&&!o.built&&!this.buildQueue.includes(o)?this.buildQueue.push(o):o.built&&o.dist>e+1&&o.path>i+10&&this.unbuild(o);if(this.buildQueue.sort((o,l)=>o.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift())}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),!0}return!1}build(t){if(t.built)return;const e=new yg,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,r={b:e,p:t.p,rng:new Ge(un(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},s=t.def.build(r)||{},a=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),o=new Mr;o.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(a)){const u=c==="sheet"?l:this.hooks.textures(c,t),h=new ln(a[c],xg(u,t.flick,Sg.has(c)));h.matrixAutoUpdate=!1,h.name=c,c==="gate"&&(h.visible=!!t.gateShut),c==="figure"&&(h.visible=!t.figureGone),o.add(h)}this.scene.add(o),o.updateMatrixWorld(!0),t.built={group:o,sheetTex:l,cells:s.cells||[],walls:s.walls||[],items:s.items||[],frames:s.frames||null,extra:s.extra||null,gate:o.children.find(c=>c.name==="gate")||null,figure:o.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const r of e.children)r.geometry.dispose(),r.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const r of this.nodes.values())if(r.pos.x-=t,r.pos.y-=e,r.pos.z-=i,r.box[0]-=t,r.box[3]-=t,r.box[1]-=e,r.box[4]-=e,r.box[2]-=i,r.box[5]-=i,!!r.built)for(const s of r.built.group.children){const a=s.geometry.attributes.position;xu(a.array,s.geometry.userData.local,{x:r.pos.x,y:r.pos.y,z:r.pos.z,yaw:r.yaw}),a.needsUpdate=!0,s.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const r=i.pop();if(this.nodes.has(r.id)){this.unbuild(r),this.nodes.delete(r.id);for(const s of this.neighbours(r))s!==e&&this.nodes.has(s.id)&&i.push(s)}}}}function Os(n,t,e){const i=t-n.pos.x,r=e-n.pos.z,s=Math.cos(n.yaw),a=Math.sin(n.yaw);return[i*s-r*a,i*a+r*s]}function Er(n,t,e,i){const r=Math.cos(n.yaw),s=Math.sin(n.yaw);return[n.pos.x+t*r+i*s,n.pos.y+e,n.pos.z-t*s+i*r]}function ga(n,t,e,i,r=.02){if(!n.built)return null;const[s,a]=Os(n,t,e);let o=null,l=1.6;for(const c of n.built.cells){const u=c.bx-c.ax,h=c.bz-c.az,f=u*u+h*h,m=((s-c.ax)*u+(a-c.az)*h)/f;if(m<-r||m>1+r||Math.abs((s-c.ax)*h-(a-c.az)*u)/Math.sqrt(f)>c.hw+r)continue;const _=m<0?0:m>1?1:m,d=n.pos.y+c.ya+(c.yb-c.ya)*_,p=Math.abs(d-i);p<l&&(l=p,o={y:d,cell:c,t:_})}return o}function cs(n,t,e,i){const r=n.current;let s=ga(r,t,e,i);if(s)return{node:r,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))if(s=ga(a,t,e,i),s)return{node:a,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))for(const o of n.neighbours(a))if(o!==r&&(s=ga(o,t,e,i),s))return{node:o,y:s.y,cell:s.cell,t:s.t};return null}function Tg(n,t,e){if(!n.built)return!1;let[i,r]=Os(n,t.x,t.z),s=!1;const a=t.y-n.pos.y;for(const o of n.built.walls){if(o.length>4&&(a<o[4]||a>o[5]))continue;const l=o[2]-o[0],c=o[3]-o[1],u=l*l+c*c;let h=u>0?((i-o[0])*l+(r-o[1])*c)/u:0;h=h<0?0:h>1?1:h;const f=o[0]+l*h,m=o[1]+c*h,g=i-f,_=r-m,d=g*g+_*_;if(d<e*e&&d>1e-9){const p=Math.sqrt(d),M=(e-p)/p;i+=g*M,r+=_*M,s=!0}}if(s){const o=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*o+r*l,t.z=n.pos.z-i*l+r*o}return s}function _a(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let r=0;r<2;r++){let s=!1;for(const a of i)s=Tg(a,t,e)||s;if(!s)break}}function wg(n,t,e,i,r){const s=t.x,a=t.z;t.x+=e,t.z+=i,_a(n,t,r);let o=cs(n,t.x,t.z,t.y);return!o&&(t.x=s+e,t.z=a,_a(n,t,r),o=cs(n,t.x,t.z,t.y),o||(t.x=s,t.z=a+i,_a(n,t,r),o=cs(n,t.x,t.z,t.y)),!o)?(t.x=s,t.z=a,cs(n,s,a,t.y)):o}class Ag{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=qt.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null}spawn(t,e,i,r){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=r+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+qt.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=Ve(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let r=e.mx,s=e.mz;const a=Math.hypot(r,s);a>1&&(r/=a,s/=a);const o=e.run&&s>.3,l=(o?qt.run:qt.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),u=Math.cos(this.yaw),h=(-c*s+u*r)*l,f=(-u*s-c*r)*l,m=a>.01?9:12;this.vx=Zi(this.vx,h,m,t),this.vz=Zi(this.vz,f,m,t);const g=this.pos.x,_=this.pos.z,d=wg(i,this.pos,this.vx*t,this.vz*t,qt.radius);let p=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const M=Math.hypot(this.pos.x-g,this.pos.z-_);this.speed=M/Math.max(t,1e-4),this.walked+=M;const x=o?1.05:.74,v=Math.floor(this.stepDist/x);this.stepDist+=M,Math.floor(this.stepDist/x)!==v&&(p=!0),this.zoom=Zi(this.zoom,this.zoomTarget,7,t);const L=this.pos.y+qt.eye;this.eyeY=Zi(this.eyeY,L,16,t);const w=this.stepDist/x*Math.PI,b=Ve(this.speed/qt.walk,0,1.6),C=-Math.abs(Math.sin(w))*.035*b,S=Math.sin(w)*.018*b,y=this.t,R=Se(y*.55,11)*.011+Se(y*2.3,12)*.003,k=Se(y*.47,21)*.012+Se(y*2.7,22)*.003,D=Se(y*.4,31)*.01+Math.sin(w)*.006*b,H=this.camera;H.position.set(this.pos.x+u*S,this.eyeY+C,this.pos.z-c*S),H.rotation.set(this.pitch+R*(1-.6*this.zoom),this.yaw+k*(1-.6*this.zoom),D);const V=qt.fov-36*this.zoom;return Math.abs(H.fov-V)>.01&&(H.fov=V,H.updateProjectionMatrix()),{step:p,running:o}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function Rg(n,t,e){const i=new Set,r=()=>{const o=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=o,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",o=>{o.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(o.code)&&o.preventDefault(),i.add(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!0),(o.code==="KeyP"||o.code==="Escape"&&!s())&&e.pause())}),window.addEventListener("keyup",o=>{i.delete(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),r()});function s(){return document.pointerLockElement===t}const a=()=>{if(!(s()||!t.requestPointerLock))try{const o=t.requestPointerLock();o&&o.catch&&o.catch(()=>{})}catch{}};return document.addEventListener("mousemove",o=>{if(!s())return;const l=.0022;Math.abs(o.movementX)>400||Math.abs(o.movementY)>400||(n.lookX+=o.movementX*l,n.lookY+=o.movementY*l)}),t.addEventListener("mousedown",o=>{if(!s()){a();return}o.button===0&&e.use(!0)}),window.addEventListener("mouseup",o=>{o.button===0&&s()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(s())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:a,locked:s,release:()=>{s()&&document.exitPointerLock()}}}function Cg(n,t){const e=b=>document.getElementById(b),i=e("stick-zone"),r=e("look-zone"),s=e("stick-base"),a=e("stick-knob"),o=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!r)return{reset(){}};const u=52;let h=null,f=0,m=0,g=null,_=0,d=0,p=!1;const M=(b,C)=>{a.style.transform=`translate(${b}px, ${C}px)`},x=()=>{h=null,n.tmx=0,n.tmz=0,n.trun=p,M(0,0),s.style.left="",s.style.top="",s.style.bottom=""};i.addEventListener("pointerdown",b=>{if(h!==null)return;h=b.pointerId,f=b.clientX,m=b.clientY;try{i.setPointerCapture(b.pointerId)}catch{}const C=s.offsetWidth,S=s.offsetHeight;s.style.left=`${f-C/2}px`,s.style.top=`${m-S/2}px`,s.style.bottom="auto",b.preventDefault()}),i.addEventListener("pointermove",b=>{if(b.pointerId!==h)return;let C=b.clientX-f,S=b.clientY-m;const y=Math.hypot(C,S);y>u&&(C*=u/y,S*=u/y),M(C,S);const R=.12,k=C/u,D=S/u;n.tmx=Math.abs(k)<R?0:k,n.tmz=Math.abs(D)<R?0:-D,n.trun=p||y>u*1.35,b.preventDefault()});const v=b=>{b.pointerId===h&&x()};i.addEventListener("pointerup",v),i.addEventListener("pointercancel",v),r.addEventListener("pointerdown",b=>{if(g===null){g=b.pointerId,_=b.clientX,d=b.clientY;try{r.setPointerCapture(b.pointerId)}catch{}b.preventDefault()}}),r.addEventListener("pointermove",b=>{if(b.pointerId!==g)return;const C=.0052;n.lookX+=(b.clientX-_)*C,n.lookY+=(b.clientY-d)*C,_=b.clientX,d=b.clientY,b.preventDefault()});const L=b=>{b.pointerId===g&&(g=null)};r.addEventListener("pointerup",L),r.addEventListener("pointercancel",L),((b,C,S)=>{b.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation(),b.classList.add("on"),C()});const y=R=>{R.preventDefault(),b.classList.remove("on"),S&&S()};b.addEventListener("pointerup",y),b.addEventListener("pointercancel",y)})(o,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),p=!p,n.trun=p,l.classList.toggle("on",p)}),c.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),t.pause()});for(const b of["touchstart","touchmove","gesturestart"])document.addEventListener(b,C=>{C.target.closest&&C.target.closest("#touch")&&C.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",b=>b.preventDefault()),{reset:()=>{x(),g=null}}}function Vo(n=qt.passW,t=qt.passSpring,e=qt.passCrown,i=5,r=2){const s=[],a=n/2,o=e-t;for(let u=0;u<=r;u++)s.push({x:-a,y:t*u/r,nx:1,ny:0});for(let u=1;u<=i;u++){const h=Math.PI/2*(u/i),f=-a*Math.cos(h),m=t+o*Math.sin(h);let g=-f/(a*a),_=-(m-t)/(o*o);const d=Math.hypot(g,_)||1;s.push({x:f,y:m,nx:g/d,ny:_/d})}let l=0;s[0].s=0;for(let u=1;u<s.length;u++)l+=Math.hypot(s[u].x-s[u-1].x,s[u].y-s[u-1].y),s[u].s=l;const c=s.map(u=>({...u,v:u.s/l}));for(let u=s.length-2;u>=0;u--){const h=s[u];c.push({x:-h.x,y:h.y,nx:-h.nx,ny:h.ny,s:h.s,v:h.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const Lt=Vo();function Pg(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),r=[];for(let s=0;s<=i;s++){const a=n*s/i;r.push({x:0,y:e?e(a):0,z:a,yaw:0})}return r}function Dg(n,t,e=1){const i=Math.sign(t)||1,r=Math.abs(t),s=Math.max(2,Math.round(n*r/e)),a=[];for(let o=0;o<=s;o++){const l=r*o/s;a.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return a}function _e(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function us(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function ri(n,t,e,i={}){const r=i.layer||"tile",s=i.uPeriod||6,[a,o]=i.vRange||[.004,.996],l=[i.u0||0];for(let f=1;f<t.length;f++){const m=t[f-1],g=t[f];l.push(l[f-1]+Math.hypot(g.x-m.x,g.z-m.z))}const c=[],u=[],h=e.W/2;for(let f=0;f<t.length-1;f++){const m=t[f],g=t[f+1],_=l[f]/s,d=l[f+1]/s;for(let p=0;p<e.length-1;p++){const M=e[p],x=e[p+1],v=us(m,M.nx,M.ny),L=us(g,M.nx,M.ny),w=us(g,x.nx,x.ny),b=us(m,x.nx,x.ny),C=[(v[0]+w[0])/2,(v[1]+w[1])/2,(v[2]+w[2])/2];n.quadN(r,_e(m,M.x,M.y),_e(g,M.x,M.y),_e(g,x.x,x.y),_e(m,x.x,x.y),C,v,L,w,b,[_,a+(o-a)*M.v,d,a+(o-a)*x.v],i.wallOpts)}if(i.floor){const p=Math.max(1,Math.round(e.W));for(let M=0;M<p;M++){const x=-h+e.W*M/p,v=-h+e.W*(M+1)/p;n.quad("atlas",_e(m,x,0),_e(m,v,0),_e(g,v,0),_e(g,x,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:m.x,az:m.z,bx:g.x,bz:g.z,hw:h,ya:m.y,yb:g.y});for(const p of[-1,1]){const M=_e(m,p*h,0),x=_e(g,p*h,0);u.push([M[0],M[2],x[0],x[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:u,dist:l}}function Wo(n,t=.25){const e=n[0],i=n[n.length-1],r=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return r.W=n.W,r.crown=n.crown,r.spring=n.spring,r.len=n.len,r}function yu(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function sr(n,t,e,i,r,s,a,o){const l=[Math.sin(t.yaw)*r,0,Math.cos(t.yaw)*r],c=a||((g,_)=>[g/6,.004+_/3.63*.992]),u=g=>_e(t,g.x,g.y),h=g=>c(g.x,g.y),f=e.length,m=(g,_,d,p)=>n.quadUV(s,u(g),u(_),u(d),u(p),l,h(g),h(_),h(d),h(p),o);if(i)for(let g=0;g<f-1;g++)m(e[g],e[g+1],i[g+1],i[g]);else for(let g=0;g<Math.floor((f-1)/2);g++)m(e[g],e[g+1],e[f-2-g],e[f-1-g])}function me(n,t,e,i,r,s=.12,a=.08){for(let o=0;o<r;o++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,s)})`:`rgba(255,255,255,${i.range(.02,a)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const Jt=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Lg={floor(n,t,e,i){Jt(n,t,e,"#77746b");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}me(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){Jt(n,t,e,"#3d3c39");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}me(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){Jt(n,t,e,"#a9a493"),me(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){Jt(n,t,e,"#c9a94a"),me(n,t,e,i,500,.12,.06);const r=6,s=t/r;for(let a=0;a<r;a++)for(let o=-1;o<r;o++){const l=(o+.5+(a%2?.5:0))*s,c=(a+.5)*s;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,s*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,s*.25,0,7),n.fill()}},yellow(n,t,e,i){Jt(n,t,e,"#e2b81e"),me(n,t,e,i,700,.22,.05)},white(n,t,e){Jt(n,t,e,"#ffffff")},black(n,t,e){Jt(n,t,e,"#0b0b0b")},blackout(n,t,e){Jt(n,t,e,"#000000")},navy(n,t,e,i){Jt(n,t,e,"#14213d"),me(n,t,e,i,200,.1,.04)},cream(n,t,e,i){Jt(n,t,e,"#e6dfc6"),me(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){Jt(n,t,e,"#2a2c2e"),me(n,t,e,i,200,.1,.05)},metal(n,t,e,i){Jt(n,t,e,"#9aa0a3");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,r,t,1)},steelDark(n,t,e,i){Jt(n,t,e,"#3b3f42");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,r,t,1)},wood(n,t,e,i){Jt(n,t,e,"#6b4526");for(let r=0;r<90;r++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let r=1;r<4;r++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,r*e/4-1,t,2)},rubber(n,t,e,i){Jt(n,t,e,"#161616"),me(n,t,e,i,200,.2,.08)},tread(n,t,e){Jt(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){Jt(n,t,e,"#6f6c64"),me(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let r=0;r<t;r+=8)n.fillRect(r,4,4,8)},riser(n,t,e,i){Jt(n,t,e,"#4a4843"),me(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){Jt(n,t,e,"#1f1d1a"),me(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){Jt(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),me(n,t,e,i,300,.2,.1)},grille(n,t,e){Jt(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){Jt(n,t,e,"#3a3936"),me(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${Je}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),me(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){Jt(n,t,e,"#e3dfd0"),me(n,t,e,i,900,.25,.04)},cable(n,t,e,i){Jt(n,t,e,"#23211e"),me(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((s,a)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][a],n.fillRect(0,e*s,t,a%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*s,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){Jt(n,t,e,"#141311"),me(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let r=1;r<4;r++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,r*e/4,t,2)},lamp(n,t,e){Jt(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){Jt(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let r=20+i/8%2*4;r<t-16;r+=8)n.fillRect(r,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){Jt(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){Jt(n,t,e,"#7d8386"),me(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},va=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Ig={door(n,t,e,i){va(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${ii}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let r=0;r<60;r++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,r=t/i;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const s=5,a=e/s;for(let o=0;o<s;o++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*r,o*a),n.lineTo((l+1)*r,(o+1)*a),n.stroke(),n.beginPath(),n.moveTo((l+1)*r,o*a),n.lineTo(l*r,(o+1)*a),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${Je}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(r,s,a)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,r,t*.2,0,7),n.fill(),n.fillStyle=s,n.beginPath(),n.arc(t/2,r,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${ii}`,n.fillText(a,t/2,r+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let r=28;r<t-24;r+=8)n.fillRect(r,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let r=0;r<5;r++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,r*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,r*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const r of[.08,.5,.92])n.fillRect(t*r-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${ii}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){va(n,t,e,"#1d1a17");const r=6,s=t/r;for(let o=0;o<r;o++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(o*s+2,3,s-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(o*s+2,3,s-4,4)}const a=n.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(10,8,6,0.08)"),a.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=a,n.fillRect(0,0,t,e);for(let o=0;o<260;o++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){va(n,t,e,"#6a6f72");for(let r=0;r<e;r+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,r,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r+9,t,3);for(let r=0;r<120;r++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}},ti=1024,$e=128,Mu={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1]};let gr=null,xa=null;function Ug(){if(gr)return gr;gr=wi(ti,ti);const n=gr.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,ti,ti);const t={...Lg,...Ig};for(const[e,[i,r,s,a]]of Object.entries(Mu)){const o=t[e];n.save(),n.translate(i*$e,r*$e),n.beginPath(),n.rect(0,0,s*$e,a*$e),n.clip(),o?o(n,s*$e,a*$e,new Ge(xo(e))):(n.fillStyle="#f0f",n.fillRect(0,0,s*$e,a*$e)),n.restore()}return gr}function Ng(){return xa||(xa=Ho(Ug())),xa}function kt(n,t=3){const e=Mu[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*$e+t,r=e[1]*$e+t,s=e[2]*$e-t*2,a=e[3]*$e-t*2;return[i/ti,1-(r+a)/ti,(i+s)/ti,1-r/ti]}function Rs(n,t,e,i,r){const s=kt(n);return[s[0]+(s[2]-s[0])*t,s[1]+(s[3]-s[1])*e,s[0]+(s[2]-s[0])*i,s[1]+(s[3]-s[1])*r]}function oe(n){return Rs(n,.4,.4,.6,.6)}const Fg=()=>kt("lamp"),Og=()=>oe("metal");function Ri(n,t,e,i={}){const r=i.len||1.25,s=.14,a=i.x||0,[o,,l]=_e(t,a,0);n.place(o,t.y+e,l,t.yaw);const u={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-s/2,-.07,-r/2],[s/2,-.07,-r/2],[s/2,-.07,r/2],[-s/2,-.07,r/2],[0,-1,0],Fg(),u),n.box("atlas",-s/2,-.07,-r/2,s/2,0,r/2,Og(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(o,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function Su(n,t,e,i,r={}){const s=e[e.length-1]-e[0],a=Math.max(0,Math.round(s/4.4)-1),o=[];for(let l=1;l<=a;l++){const c=e[0]+s*l/(a+1);let u=0;for(;u<e.length-1&&e[u]<c;)u++;const h=t[u];Ri(n,h,i-.04,{dead:!!r.dark,flick:r.faulty===l-1}),o.push(h)}return o}function oi(n,t,e){Ri(n,t,e-.04,{noLight:!0}),Si(n,t,1.56)}function Si(n,t,e,i="floor"){const[r,,s]=_e(t,0,0);n.place(r,t.y,s,t.yaw),n.quad("atlas",[-e,-.003,-.16],[e,-.003,-.16],[e,-.003,.16],[-e,-.003,.16],[0,1,0],oe(i)),n.setXf(null)}function Hn(n,t,e,i,r,s,a,o,l,c,u=.02){const h=i*(r-u),f=[h,s,i>0?-a/2:a/2],m=[h,s,i>0?a/2:-a/2],[g,,_]=_e(e,0,0);n.place(g,e.y,_,e.yaw),n.quad(t,f,m,[m[0],s+o,m[2]],[f[0],s+o,f[2]],[-i,0,0],l,c),n.setXf(null);const d=_e(e,h,s+o/2);return{x:d[0],y:d[1],z:d[2]}}function kg(n,t,e,i,r,s,a,o="steelDark",l=.035){const c=oe(o);Hn(n,"atlas",t,e,i,r-l,s+2*l,l,c,null,.03),Hn(n,"atlas",t,e,i,r+a,s+2*l,l,c,null,.03);const[u,,h]=_e(t,0,0);n.place(u,t.y,h,t.yaw);const f=e*(i-.03);for(const m of[-s/2-l,s/2])n.quad("atlas",[f,r,m],[f,r,m+l],[f,r+a,m+l],[f,r+a,m],[-e,0,0],c);n.setXf(null)}function Ts(n,t,e,i,r,s,a,o,l,c=0){const[u,,h]=_e(e,c,0);n.place(u,e.y,h,e.yaw),n.quad(t,[r/2,i,-.03],[-r/2,i,-.03],[-r/2,i+s,-.03],[r/2,i+s,-.03],[0,0,-1],a,l),o&&n.quad(t,[-r/2,i,.03],[r/2,i,.03],[r/2,i+s,.03],[-r/2,i+s,.03],[0,0,1],o,l);const f=oe("signBack");n.box("atlas",-r/2,i,-.03,r/2,i+s,.03,f,null,"xXyY");for(const m of[-r*.35,r*.35])n.box("atlas",m-.012,i+s,-.012,m+.012,i+s+.5,.012,f,null,"xXzZ");return n.setXf(null),{x:u,y:e.y+i+s/2,z:h}}const zg=["This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Stand clear of the doors, please.","Please keep your belongings with you at all times.","There is a good service on all lines.","Customers are reminded that the last train has departed.","Please stand behind the yellow line.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail."],Bg=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on all lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train will not be stopping. The next train will not be."],Hg=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","Please do not turn round."],So=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are black lettering on yellow, and they say "Way out" — capital W, small o. Anything else was not put up by us. Do not follow it.'},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed as a destination. Count the minutes down. If they go up, you went wrong.'},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The station symbol is a red ring and a blue bar. One ring. One bar, level. Report any others to — the rest of this notice has been torn away."},{key:"up",title:"NIGHT STAFF",text:'Five right turns and you are out, if every one of them is right. One wrong turn costs you two. — written in biro underneath: "it is counting too"'}],Gg=["Service information: Good service on all lines. (All of them?)","Thought for the day: The way out is always signed. Not every sign is the way out.","Thought for the day: If in doubt, listen. Then ask who is speaking.","Service information: This station closed at 00:47. If you are reading this, please leave.","Lost property: one umbrella, one left glove, one passenger.","Thought for the day: A clock is only wrong in one direction."],Vg=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"]],Wg=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],Xg=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function qg(n,t,e,i,r,s){const[a,o,l]=r;n.fillStyle=a,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=o,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let u=0;u<5;u++)n.fillRect(0,e*(.46+u*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let u=0;u<14;u++){n.fillStyle=u%2?o:l,n.beginPath(),n.moveTo(0,0);const h=Math.PI+u/14*Math.PI,f=Math.PI+(u+1)/14*Math.PI;n.lineTo(Math.cos(h)*t*2,Math.sin(h)*t*2),n.lineTo(Math.cos(f)*t*2,Math.sin(f)*t*2),n.fill()}n.restore(),n.fillStyle=a,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let u=6;u>0;u--)n.fillStyle=u%2?o:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*u/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=o,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=o,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(s){n.fillStyle="rgba(8,8,8,0.92)";const u=t*i.range(.25,.75),h=e*.62,f=e*.12;n.beginPath(),n.ellipse(u,h-f*1.25,f*.2,f*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(u-f*.32,h),n.lineTo(u-f*.22,h-f),n.lineTo(u+f*.22,h-f),n.lineTo(u+f*.32,h),n.fill()}}function Cs(n,t,e,i,r=!1){const s=i.pick(Xg),[a,o]=i.pick(r?Wg:Vg);qg(n,t,e,i,s,r);const l=s[2];n.fillStyle=s[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=s[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=s[1]===s[0]?l:s[1],n.font=`400 ${e*.085}px ${Je}`;const c=Pr(n,a,t*.86).slice(0,2);return c.forEach((u,h)=>n.fillText(u,t/2,e*(.775+h*.085)-(c.length-1)*e*.02,t*.9)),n.fillStyle=s[2]===s[0]?"#fff":s[2],Bn(n,o,t*.84,e*.045,ii,700),n.fillText(o,t/2,e*.93),Go(n,0,0,t,e,i.int(1,99999),.6),{headline:a,strap:o}}function Eu(n,t,e,i,r){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",Bn(n,i.title,t*.86,e*.1,Je),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let s=e*.07,a;for(;n.font=`400 ${s}px ${ii}`,a=Pr(n,i.text,t*.86),!(a.length*s*1.25<e*.74||s<5);)s*=.92;a.forEach((o,l)=>n.fillText(o,t*.07,e*.22+l*s*1.25)),n.fillStyle="#b3261e";for(const[o,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*o,e*l+2,Math.max(2,t*.018),0,7),n.fill();r&&Go(n,0,0,t,e,r.int(1,99999),.5)}function Yg(n,t,e,i,r){n.fillStyle="#b9bcbd",n.fillRect(0,0,t,e),n.fillStyle="#f7f7f2",n.fillRect(t*.03,e*.04,t*.94,e*.92),n.fillStyle="#14213d",n.fillRect(t*.03,e*.04,t*.94,e*.16),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",Bn(n,"Service information",t*.8,e*.1,Je),n.fillText("Service information",t/2,e*.125),n.fillStyle="#1d2f8a",n.textAlign="left",n.textBaseline="top";let s=e*.09,a;for(;n.font=`italic 400 ${s}px ${ii}`,a=Pr(n,i,t*.84),!(a.length*s*1.3<e*.68||s<5);)s*=.92;a.forEach((o,l)=>{n.save(),n.translate(t*.08,e*.25+l*s*1.3),n.rotate(r?r.range(-.02,.02):0),n.fillText(o,0,0),n.restore()})}const br={in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},blue:{level:0,text:"Way out",bg:Ue.blue,fg:Ue.white},no:{level:0,text:"No way out"},invert:{level:1,text:"Way out",bg:Ue.black,fg:Ue.yellow},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function $g(n,t){const e=n?br[n]:null,i={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",r=e?e.text:"Way out";let s="";if(e&&e.bg===Ue.blue)s=" (white on blue)";else if(e&&e.bg===Ue.black)s=" (yellow on black)";else if(e&&e.bg)s=" (pale green)";else if(e&&e.mirror)s=" (the lettering is back to front)";else{if(e&&e.arrow2)return`↔ ${r}`;e&&e.flipArrow?s=" (the arrow points the other way)":s=e?"":" (black on yellow)"}return t==="left"?`${i} ${r}${s}`:`${r} ${i}${s}`}function Xo(n,t,e,{dir:i="up",defect:r=null}={}){const s=r?br[r]:{},a=s.bg||Ue.yellow,o=s.fg||Ue.black;n.fillStyle=a,n.fillRect(0,0,t,e);const l=n.createLinearGradient(0,0,0,e);l.addColorStop(0,"rgba(0,0,0,0.10)"),l.addColorStop(.5,"rgba(255,255,255,0.10)"),l.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=l,n.fillRect(0,0,t,e),n.strokeStyle=mu("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const c=s.text||"Way out",u=e*.56,h=i!=="right",f=h?e*.52:t-e*.52,m=h?e*1:e*.3,g=h?t-e*.3:t-e*1;let _=i;s.flipArrow&&(_={left:"right",right:"left",up:"down"}[i]),yo(n,f,e/2,u,_,o),s.arrow2&&yo(n,f,e/2,u,{left:"right",right:"left",up:"down"}[i],o),n.fillStyle=o,n.textBaseline="middle",Bn(n,c,g-m,e*.62,Je),n.save(),s.mirror?(n.translate((m+g)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(c,0,e*.53)):(n.textAlign=h?"left":"right",n.fillText(c,h?m:g,e*.53)),n.restore()}function Zg(n,t,e,{text:i,sub:r="",dir:s="up",color:a="#888"}={}){n.fillStyle=Ue.blue,n.fillRect(0,0,t,e),n.fillStyle=a,n.fillRect(0,e*.82,t,e*.18),n.fillStyle="rgba(255,255,255,0.85)",n.fillRect(0,e*.8,t,Math.max(1,e*.02));const o=s!=="right",l=e*.46,c=o?e*.5:t-e*.5;yo(n,c,e*.4,l,s,Ue.white);const u=o?e*.95:e*.3,h=o?t-e*.3:t-e*.95;n.fillStyle=Ue.white,n.textBaseline="middle",n.textAlign=o?"left":"right";const f=Bn(n,i,h-u,e*(r?.36:.46),Je);n.fillText(i,o?u:h,e*(r?.28:.41)),r&&(n.font=`400 ${Math.min(f*.62,e*.22)}px ${ii}`,n.fillText(r,o?u:h,e*.6,h-u))}function Kg(n,t,e,i,r,s=2){n.fillStyle=Ue.white,n.fillRect(0,0,t,e),n.fillStyle=r,n.fillRect(0,e*.14,t,e*.72),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${e*.5}px ${Je}`;const a=["#f2c500","#f3a9bb","#8f979c"].includes(r);n.fillStyle=a?"#14213d":"#fff";for(let o=0;o<s;o++)n.fillText(i.toUpperCase(),t*(o+.5)/s,e*.52,t/s*.9)}function qo(n,t,e,i,{bg:r=Ue.blue,fg:s=Ue.white,sub:a=""}={}){n.fillStyle=r,n.fillRect(0,0,t,e),n.strokeStyle=s,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=s,n.textAlign="center",n.textBaseline="middle",Bn(n,i,t*.84,e*(a?.4:.52),Je),n.fillText(i,t/2,e*(a?.38:.53)),a&&(Bn(n,a,t*.84,e*.22,ii),n.fillText(a,t/2,e*.72))}function bu(n,t,e,i,r,s=null){n.fillStyle=r.ground,n.fillRect(0,0,t,e);const a=e/5;n.strokeStyle=r.grout,n.lineWidth=1;for(let c=0;c<t;c+=a*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=a)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=r.band,n.lineWidth=a*.55,n.strokeRect(a*.3,a*.3,t-a*.6,e-a*.6),n.fillStyle=r.skirt,n.textAlign="center",n.textBaseline="middle";const o=s?t*.6:t*.8;Bn(n,i,o,e*.42,Je);const l=s==="left"?t*.6:s==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),s){const c=s==="left"?t*.17:t*.83,u=s==="left"?-1:1;n.beginPath(),n.moveTo(c-u*e*.42,e*.5),n.lineTo(c+u*e*.05,e*.42),n.lineTo(c+u*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+u*e*.2,e*.5),n.lineTo(c-u*e*.02,e*.3),n.lineTo(c-u*e*.02,e*.7),n.closePath(),n.fill()}}const si=Lt.W/2;function Tu(n){const t=n.env.seenNotices||new Set,e=So.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:So)}function jg(n,t,e,i,r=si){const{b:s,sheet:a,rng:o}=n,l=o.chance(Math.min(.7,(n.env.wrong||0)*.17));let c;const u=a.add(104,164,(f,m,g)=>{c=Cs(f,m,g,o,l)}),h=Hn(s,"sheet",t,e,r,.52,.64,1,u,null,.045);kg(s,t,e,r-.01,.52,.64,1),i.push({...h,r:4.2,label:"read poster",title:"POSTER",text:`${c.headline}. ${c.strap}.`})}function dc(n,t,e,i,r=si){const{b:s,sheet:a,rng:o}=n,l=Tu(n),c=a.add(168,216,(h,f,m)=>Eu(h,f,m,l,o)),u=Hn(s,"sheet",t,e,r,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...u,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:h=>h.story.noticeRead(l.key)})}function Jg(n,t,e,i,r=si){const{b:s,sheet:a,rng:o}=n,l=o.pick(Gg),c=a.add(200,150,(h,f,m)=>Yg(h,f,m,l,o)),u=Hn(s,"sheet",t,e,r,.7,.86,.645,c,null,.045);i.push({...u,r:4.2,label:"read board",title:"SERVICE INFORMATION",text:l})}const ya=.95,hs=2,pc=.25;function Qg(n,t,e){const{b:i}=n;Hn(i,"atlas",t,e,si-pc+.03,0,ya,hs,kt("door"),null,.03);const r=oe("steelDark"),[s,,a]=_e(t,0,0);i.place(s,t.y,a,t.yaw);const o=e*si,l=e*(si-pc),c=.06,u=-ya/2-c,h=ya/2+c,f=hs+c;i.quad("atlas",[l,0,u],[l,0,u+c],[l,f,u+c],[l,f,u],[-e,0,0],r),i.quad("atlas",[l,0,h-c],[l,0,h],[l,f,h],[l,f,h-c],[-e,0,0],r),i.quad("atlas",[l,hs,u],[l,hs,h],[l,f,h],[l,f,u],[-e,0,0],r),i.quad("atlas",[o,0,u],[l,0,u],[l,f,u],[o,f,u],[0,0,-1],r),i.quad("atlas",[l,0,h],[o,0,h],[o,f,h],[l,f,h],[0,0,1],r),i.quad("atlas",[o,f,u],[l,f,u],[l,f,h],[o,f,h],[0,1,0],r),i.setXf(null)}function mc(n,t,e,i,r,s,a){Hn(n.b,i==="extinguisher"?"cut":"atlas",t,e,si,r,s,a,kt(i),null,.04)}function t_(n,t,e,i){const{b:r,sheet:s,rng:a}=n,o=a.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=s.add(220,54,(u,h,f)=>bu(u,h,f,o,n.theme,null)),c=Hn(r,"sheet",t,e,si,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:o})}function e_(n,t,e){const{rng:i}=n,r=[],s=t.every(f=>Math.abs(f.yaw)<1e-6&&Math.abs(f.y-t[0].y)<1e-6),a=e[e.length-1]-e[0];if(!s||a<5.5)return r;const o=[];for(let f=2.2;f<=a-2.2;f+=1.55)o.push(f);let l=!1,c=!1;const u=[],h=i.chance(n.env.noticeChance??.34);for(const f of[-1,1]){let m=0;for(const g of o){if(m>0){m--;continue}const _={x:0,y:0,z:g,yaw:0},d=i.next();if(h&&!l&&d<.3){dc(n,_,f,r),l=!0;continue}d<.5?jg(n,_,f,r):d<.56&&g>3&&g<a-3?Qg(n,_,f):d<.62?Jg(n,_,f,r):d<.67&&!c&&g<a-3?(t_(n,_,f,r),c=!0,m=1):d<.72?mc(n,_,f,"grille",.25,.5,.5):d<.76?mc(n,_,f,"extinguisher",.75,.45,.45):u.push([_,f])}}if(h&&!l&&u.length){const[f,m]=i.pick(u);dc(n,f,m,r)}return r}function n_(n,t,e){return n.sheet?e_(n,t,e):[]}const gn=.5;function i_(n,t=3.4,e=40){const{b:i}=n,r=Lt.W/2+.1,s=Lt.crown+.1,a={emit:0};i.quad("gate",[-r,0,.06],[r,0,.06],[r,s,.06],[-r,s,.06],[0,0,1],oe("blackout"),a);const o=kt("gate"),l={emit:.34};for(const[c,u]of[[-r,0],[0,r]])i.quad("gate",[c,0,gn],[u,0,gn],[u,s,gn],[c,s,gn],[0,0,1],o,l);return i.box("gate",-.035,0,gn-.02,.035,s,gn+.03,oe("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,gn+.03,.09,1.16,gn+.07,oe("metal"),{emit:.5},"xXyYZ"),{x0:-r,x1:r,z0:t,z1:e,gate:!0,fire:(c,u)=>c.director.commit(u)}}const gc=[-(Lt.W/2+.2),gn+.25,Lt.W/2+.2,gn+.25];function wu(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function Au(n,t){const{b:e,p:i}=n,r=ri(e,t,Lt,{floor:kt("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const s=t[t.length-1];e.addPortal(s.x,s.y,s.z,s.yaw),oi(e,t[0],Lt.crown),Su(e,t,r.dist,Lt.crown,i.lights);const a=n_(n,t,r.dist),o={};return n.env.gate&&(o.zones=[i_(n,3.4,r.length+1)]),{cells:r.cells,walls:r.walls,items:a,frames:t,extra:o}}const r_={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:wu(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return Au(n,Pg(n.p.len,1))}},mi=4.5,s_={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:wu(n,t)},exits:[{x:e*mi,y:0,z:mi,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,mi,3.3,mi+1.9]:[-mi,-.4,0,1.9,3.3,mi+1.9]}},build(n){return Au(n,Dg(mi,n.p.dir*Math.PI/2,.9))}},_r=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function a_(n,t,e,i){const r=n.x-i.x,s=n.y-i.y,a=t.x-i.x,o=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(r*r+s*s)*(a*c-l*o)-(a*a+o*o)*(r*c-l*s)+(l*l+c*c)*(r*o-a*s)}function o_(n,t,e=60){const i=n.length,r=t.map(([s,a,o])=>_r(n[s],n[a],n[o])>=0?[s,a,o]:[s,o,a]).filter(([s,a,o])=>Math.abs(_r(n[s],n[a],n[o]))>1e-12);for(let s=0;s<e;s++){const a=new Map;r.forEach((c,u)=>{for(let h=0;h<3;h++){const f=c[h],m=c[(h+1)%3],g=f<m?f*i+m:m*i+f,_=a.get(g);_?_.push(u):a.set(g,[u])}});const o=new Set;let l=0;for(const[c,u]of a){if(u.length!==2||o.has(u[0])||o.has(u[1]))continue;const h=Math.floor(c/i),f=c%i,m=r[u[0]],g=r[u[1]],_=m.find(x=>x!==h&&x!==f),d=g.find(x=>x!==h&&x!==f),[p,M]=_r(n[h],n[f],n[_])>0?[h,f]:[f,h];a_(n[p],n[M],n[_],n[d])<=1e-10||_r(n[_],n[p],n[d])<=1e-12||_r(n[d],n[M],n[_])<=1e-12||(r[u[0]]=[_,p,d],r[u[1]]=[d,M,_],o.add(u[0]),o.add(u[1]),l++)}if(!l)break}return r}function l_(n,t,e){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s];a.y>e!=o.y>e&&t<(o.x-a.x)*(e-a.y)/(o.y-a.y)+a.x&&(i=!i)}return i}function c_(n,t,e){let i=1/0;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s],l=o.x-a.x,c=o.y-a.y,u=l*l+c*c;let h=u>0?((t-a.x)*l+(e-a.y)*c)/u:0;h=h<0?0:h>1?1:h,i=Math.min(i,Math.hypot(t-(a.x+l*h),e-(a.y+c*h)))}return i}function Ru(n,t,e,i,r=[]){const s=[{x:n,y:e}];for(const a of r.slice().sort((o,l)=>o[0].x-l[0].x)){s.push({x:a[0].x,y:e});for(const o of a)o.y>e+1e-6&&s.push({x:o.x,y:o.y});s.push({x:a[a.length-1].x,y:e})}return s.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),s.filter((a,o)=>o===0||Math.hypot(a.x-s[o-1].x,a.y-s[o-1].y)>1e-6)}function Cu(n,t,e,i,r={}){const s=r.layer||"tile",a=r.uv||((d,p)=>[d/6,.004+Math.max(0,p)/3.63*.992]),o=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=r.grid??1.1,c=[];i.forEach((d,p)=>{const M=i[(p+1)%i.length];c.push({x:d.x,y:d.y});const x=Math.hypot(M.x-d.x,M.y-d.y),v=l>0&&x>1.5*l?Math.ceil(x/l):1;for(let L=1;L<v;L++){const w=L/v,b=(L%2?7e-4:-7e-4)/x;c.push({x:d.x+(M.x-d.x)*w-(M.y-d.y)*b,y:d.y+(M.y-d.y)*w+(M.x-d.x)*b})}});const u=[];if(l>0){let d=1/0,p=-1/0,M=1/0,x=-1/0;for(const w of c)d=Math.min(d,w.x),p=Math.max(p,w.x),M=Math.min(M,w.y),x=Math.max(x,w.y);const v=Math.max(1,Math.round((p-d)/l)),L=Math.max(1,Math.round((x-M)/l));for(let w=1;w<v;w++)for(let b=1;b<L;b++){const C=(un(w*73+11,b*151+5)/4294967296-.5)*.3,S=(un(w*199+3,b*37+17)/4294967296-.5)*.3,y=d+(p-d)*(w+(b%2?.25:-.25)+C)/v,R=M+(x-M)*(b+S)/L;r.keep&&!r.keep(y,R)||!l_(c,y,R)||c_(c,y,R)<l*.3||u.push([new $t(y,R)])}}const h=c.map(d=>new $t(d.x,d.y)),f=Bo.triangulateShape(h,u),m=h.concat(u.map(d=>d[0])),g=o_(m,f),_=d=>_e(t,d.x,d.y);for(const[d,p,M]of g){const x=m[d],v=m[p],L=m[M];n.tri(s,_(x),_(v),_(L),o,a(x.x,x.y),a(v.x,v.y),a(L.x,L.y),r.o)}return g.length}const fs=.05,_c=.004;function u_(n,t){const{x0:e,x1:i,z0:r,z1:s,H:a}=t,o=t.portals||[],l=[],c={S:{f:{x:0,y:0,z:r,yaw:0},facing:1,lat:g=>g,t0:e,t1:i,pt:g=>[g,r]},N:{f:{x:0,y:0,z:s,yaw:0},facing:-1,lat:g=>g,t0:e,t1:i,pt:g=>[g,s]},W:{f:{x:e,y:0,z:0,yaw:Math.PI/2},facing:1,lat:g=>-g,t0:r,t1:s,pt:g=>[e,g]},E:{f:{x:i,y:0,z:0,yaw:Math.PI/2},facing:-1,lat:g=>-g,t0:r,t1:s,pt:g=>[i,g]}};for(const g of Object.keys(c)){const _=c[g],d=o.filter(w=>w.wall===g).sort((w,b)=>w.at-b.at),p=_.lat(_.t0-fs),M=_.lat(_.t1+fs),x=d.map(w=>Lt.map(b=>({x:_.lat(w.at)+b.x+b.nx*_c,y:b.y+b.ny*_c}))),v=Ru(Math.min(p,M),Math.max(p,M),-fs,a+fs,x);Cu(n,_.f,_.facing,v,{layer:"tile",grid:1,uv:(w,b)=>[(w-3.1)/6+.5,.004+.992*b/3.63]});let L=_.t0;for(const w of d)l.push([..._.pt(L),..._.pt(w.at-Lt.W/2)]),L=w.at+Lt.W/2;l.push([..._.pt(L),..._.pt(_.t1)])}const u=Math.max(1,Math.round(i-e)),h=Math.max(1,Math.round(s-r));n.grid("atlas",[e,0,r],[i-e,0,0],[0,0,s-r],u,h,[0,1,0],t.floor||kt("floor"),null,!0),n.grid("atlas",[e,a,r],[i-e,0,0],[0,0,s-r],u,h,[0,-1,0],t.ceil||kt("concrete"),null,!0);const f=(e+i)/2;return{cells:[{ax:f,az:r,bx:f,bz:s,hw:(i-e)/2,ya:0,yb:0}],walls:l.filter(g=>Math.hypot(g[2]-g[0],g[3]-g[1])>.01)}}const Eo=512,bo=256,Yo={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let ds=null,Et=null,Mi=null,Pu=null;function Du(){if(ds)return;ds=wi(Eo,bo),Et=ds.getContext("2d");const n=wi(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),Pu=Et.createPattern(n,"repeat"),Mi=new zo(ds),Mi.colorSpace=je,Mi.generateMipmaps=!1,Mi.minFilter=Me,Mi.magFilter=Me}function h_(){return Du(),Mi}function Ps(n){const[t,e,i,r]=Yo[n],s=1;return[(t+s)/Eo,1-(e+r-s)/bo,(t+i-s)/Eo,1-(e+s)/bo]}function vc(n,t,e){const[i,r,s,a]=Yo[n];Et.save(),Et.beginPath(),Et.rect(i,r,s,a),Et.clip(),Et.fillStyle="#060504",Et.fillRect(i,r,s,a),Et.fillStyle="#ffab1a",Et.font=`400 30px ${Es}`,Et.textBaseline="middle";const o=a/4;t.slice(0,3).forEach((l,c)=>{const u=r+o*(c+.5)+2;Et.textAlign="left",Et.fillText(l.l||"",i+10,u,l.r?s-110:s-20),l.r&&(Et.textAlign="right",Et.fillText(l.r,i+s-10,u))}),Et.textAlign="center",Et.fillText(e||"",i+s/2,r+o*3.5+1,s-20),Et.fillStyle=Pu,Et.fillRect(i,r,s,a),Et.restore()}function xc(n,t,e){const[i,r,s,a]=Yo[n],o=i+s/2,l=r+a/2,c=s*.46;Et.save(),Et.beginPath(),Et.rect(i,r,s,a),Et.clip(),Et.fillStyle="#1a1b1c",Et.fillRect(i,r,s,a),Et.fillStyle=e?"#e8e2cc":"#f2efe4",Et.beginPath(),Et.arc(o,l,c,0,7),Et.fill(),Et.strokeStyle="#14213d",Et.lineWidth=3,Et.beginPath(),Et.arc(o,l,c-1.5,0,7),Et.stroke(),Et.strokeStyle="#111";for(let f=0;f<12;f++){const m=f/12*Math.PI*2,g=c*(f%3===0?.74:.82);Et.lineWidth=f%3===0?4:2,Et.beginPath(),Et.moveTo(o+Math.sin(m)*g,l-Math.cos(m)*g),Et.lineTo(o+Math.sin(m)*c*.9,l-Math.cos(m)*c*.9),Et.stroke()}const u=(f,m,g,_)=>{const d=f*Math.PI*2;Et.strokeStyle=_,Et.lineWidth=g,Et.lineCap="round",Et.beginPath(),Et.moveTo(o-Math.sin(d)*m*.15,l+Math.cos(d)*m*.15),Et.lineTo(o+Math.sin(d)*m,l-Math.cos(d)*m),Et.stroke()},h=(t%43200+43200)%43200;u(h/43200,c*.5,5,"#111"),u(h%3600/3600,c*.74,3.5,"#111"),u(Math.floor(h%60)/60,c*.8,1.6,"#b3261e"),Et.fillStyle="#b3261e",Et.beginPath(),Et.arc(o,l,4,0,7),Et.fill(),Et.restore()}function f_(n){Du(),vc("board",n.rows||[],n.footer||""),vc("board2",n.rows2||[],n.footer2||""),xc("clock",n.tod||0,!1),xc("clockBack",n.todBack||0,!0),Mi.needsUpdate=!0}const d_=["Marrow","Hollow","Vesper","Tallow","Gallow","Ember","Quill","Thistle","Cinder","Pallant","Morrow","Ashen","Sable","Wither","Nether","Candle","Sorrow","Mallow","Linnet","Elder","Hush","Mourn","Gossamer","Lantern","Pewter","Rook","Fallow","Dimm","Yarrow","Wax"],Ma=["gate","wick","mere","ford","bourne","stead","well","field","holt","mouth","ditch","combe","by"],Sa=["Cross","Road","Street","Lane","Hill","Green","Common","Circus","Vale","Park","Wharf","Reach"],p_=["Vesper's","Ember's","Mallow's","Quill's","Sorrow's","Linnet's","Wither's"],m_=["Upper","Lower","North","South","Old","Great","Little"],g_=["Nowhere","Still Here","Not Yet","Further On","Mind The","You Again","Last Stop","No Such Place","Almost","Same As Before","Elsewhere","This Station","Keep Walking","Not This One","Below","Further Down","Here Again"];function __(n,t){for(let e=0;e<20;e++){const i=n.pick(d_);let r;switch(n.int(0,6)){case 0:case 1:r=i+n.pick(Ma);break;case 2:r=`${i} ${n.pick(Sa)}`;break;case 3:r=`${i}${n.pick(Ma)} ${n.pick(Sa)}`;break;case 4:r=`Saint ${n.pick(p_)}`;break;case 5:r=`${n.pick(m_)} ${i}${n.pick(Ma)}`;break;default:r=`${i} ${n.pick(Sa)}`}if(!t||!t.has(r))return t&&t.add(r),r}return"Marrowgate"}function v_(n,t){const e=[];for(let r=0;r<n.length-1;r++)/[a-z]/.test(n[r])&&/[a-z]/.test(n[r+1])&&n[r]!==n[r+1]&&e.push(r);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function Lu(n,t,e){const i=Math.min(.75,t*.16);if(!e.chance(i))return n;const r=e.next()*Math.min(5,t+1);if(r<1)return v_(n,e);if(r<1.7){const s=e.int(1,n.length-1);return n.slice(0,s)+n.slice(s+1)}return r<2.4?n.split(" ").map(s=>s[0]+s.slice(1).split("").reverse().join("")).join(" "):r<3.1?n.replace(/[aeiou]/,s=>"aeiou"["aeiou".indexOf(s)+1]||"a"):e.pick(g_)}const x_=["Marrowgate","Hollow Cross","Tallowmere","Vesper Road","Cinderford","Quillstead","Emberwick","Gallow Green","Netherbourne","Pallant Hill","Morrowfield","Sable Reach","Witherholt","Candle Wharf"];function y_(n){return n.pick(x_)}const fn=3.5,mn=5,yc=2.95;function Wi(n,t,e,i,r,s,a,o){const l=mn-.03;return n.quad(t,[e+r/2,i,l],[e-r/2,i,l],[e-r/2,i+s,l],[e+r/2,i+s,l],[0,0,-1],a,o),{x:e,y:i+s/2,z:l}}const M_={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,r=Object.keys(br).filter(a=>br[a].level<=i&&br[a].level>=i-1),s=n.shuffle(Mo).slice(0,2);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(r),lie:e==="announce"?n.chance(.3+.12*i):!1,lineA:s[0],lineB:s[1]},exits:[{x:fn,y:0,z:mn/2,yaw:Math.PI/2},{x:-fn,y:0,z:mn/2,yaw:-Math.PI/2}],box:[-fn-.4,-.4,0,fn+.4,3.4,mn+.4]}},build(n){const{b:t,p:e,sheet:i,rng:r,env:s}=n,a=u_(t,{x0:-fn,x1:fn,z0:0,z1:mn,H:yc,portals:[{wall:"S",at:0},{wall:"E",at:mn/2},{wall:"W",at:mn/2}]});t.addPortal(0,0,0,0),t.addPortal(fn,0,mn/2,Math.PI/2),t.addPortal(-fn,0,mn/2,-Math.PI/2),oi(t,{x:0,y:0,z:0,yaw:0},Lt.crown);for(const d of[-1.7,1.7])Ri(t,{x:d,y:0,z:2.2,yaw:Math.PI/2},yc-.02,{power:.6,radius:6.5});const o=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,line:e.lineA},{cx:-1.72,dir:"right",exit:1,line:e.lineB}];for(const d of c){const p=e.correct===d.exit;if(e.kind==="signs"){const M=p?null:e.defect,x=i.add(250,56,(L,w,b)=>Xo(L,w,b,{dir:d.dir,defect:M})),v=Wi(t,"sheet",d.cx,1.52,1.9,.425,x,l);o.push({...v,r:7,cone:.93,label:"read sign",title:"SIGN",text:$g(M,d.dir),junctionSign:!0})}else{const M=i.add(250,56,(L,w,b)=>Zg(L,w,b,{text:`${d.line.name} line`,dir:d.dir,color:d.line.color})),x=Wi(t,"sheet",d.cx,1.52,1.9,.425,M,l),v=d.dir==="left"?`← ${d.line.name} line`:`${d.line.name} line →`;o.push({...x,r:7,cone:.93,label:"read sign",title:"SIGN",text:v})}if(e.kind==="clock"){const M=!p,x=Wi(t,"dyn",d.cx,2.08,.62,.62,Ps(M?"clockBack":"clock"),{emit:1.05});o.push({...x,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:M?"The second hand is ticking backwards.":"The clock is keeping time."})}}const u=Wi(t,"dyn",0,2.12,1.26,.42,Ps("board2"),{emit:1.15});o.push({...u,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const h=Lu(s.station,s.wrong,r),f=i.add(200,92,(d,p,M)=>vu(d,p,M,h)),m=Wi(t,"sheet",0,1.42,1.24,.57,f,null);o.push({...m,r:6,cone:.95,label:"read name",title:"STATION",text:h});const g=Wi(t,"cut",0,.62,.34,.68,kt("helpPoint"),null);o.push({...g,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(d,p,M)=>d.director.helpPoint(M)});const _=[{x0:-fn,x1:fn,z0:.8,z1:mn,fire:(d,p)=>d.director.enterJunction(p)}];return{cells:a.cells,walls:a.walls,items:o,extra:{zones:_}}}},tt={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};tt.back=tt.cx-Math.sqrt(tt.R*tt.R-tt.cy*tt.cy);tt.th0=Math.PI+Math.asin(tt.cy/tt.R);tt.th1=-Math.asin((tt.cy-tt.bed)/tt.R);tt.sCrown=tt.R*(tt.th0-Math.PI/2);tt.wallBed=tt.cx+Math.sqrt(tt.R*tt.R-(tt.cy-tt.bed)**2);tt.track=(tt.edge+tt.wallBed)/2;function Mc(n,t){const e=n-tt.cy;return tt.cx+t*Math.sqrt(Math.max(0,tt.R*tt.R-e*e))}const To=18;function S_(n){const t=tt.th0+(tt.th1-tt.th0)*n/To,e=tt.R*(tt.th0-t),i=e<=tt.sCrown?e/tt.sCrown:1-(e-tt.sCrown)/tt.sCrown;return{x:tt.cx+tt.R*Math.cos(t),y:tt.cy+tt.R*Math.sin(t),nx:-Math.cos(t),ny:-Math.sin(t),v:.004+.992*i}}function E_(n,t,e){const i=_=>e*_,r=[];for(let _=0;_<=To;_++)r.push(S_(_));const s=Math.round(t/1.5);for(let _=0;_<s;_++){const d=t*_/s,p=t*(_+1)/s;for(let M=0;M<To;M++){const x=r[M],v=r[M+1],L=[i(x.nx),x.ny,0],w=[i(v.nx),v.ny,0],b=[(L[0]+w[0])/2,(L[1]+w[1])/2,0];n.quadN("ptile",[i(x.x),x.y,d],[i(x.x),x.y,p],[i(v.x),v.y,p],[i(v.x),v.y,d],b,L,L,w,w,[d/6,x.v,p/6,v.v])}}const a=[0,1,0],o=(_,d,p=0,M=1)=>Rs(_,p,d?.5:0,M,d?1:.5),l=[[tt.back-.05,-.55,_=>o("floor",_)],[-.55,.55,_=>o("floor",_)],[.55,.95,()=>kt("tactile")],[.95,1.05,()=>oe("yellow")],[1.05,1.45,_=>o("floorDark",_,.05,.45)],[1.45,tt.edge,()=>oe("edge")]],c=Math.round(t/.5);for(const[_,d,p]of l)for(let M=0;M<c;M++){const x=t*M/c,v=t*(M+1)/c;n.quad("atlas",[i(_),0,x],[i(d),0,x],[i(d),0,v],[i(_),0,v],a,p(M%2))}const u=kt("mindgap");for(let _=4.5;_<t-3;_+=6.5){const d=.85*e;n.quad("atlas",[i(1.07),.004,_-d],[i(1.07),.004,_+d],[i(1.43),.004,_+d],[i(1.43),.004,_-d],a,u)}const h=Math.round(t/2);for(let _=0;_<h;_++){const d=t*_/h,p=t*(_+1)/h;n.quad("atlas",[i(1.56),tt.bed,d],[i(1.56),tt.bed,p],[i(1.56),-.06,p],[i(1.56),-.06,d],[e,0,0],kt("riser")),n.quad("atlas",[i(1.56),-.06,d],[i(tt.edge),-.06,d],[i(tt.edge),-.06,p],[i(1.56),-.06,p],[0,-1,0],oe("black")),n.quad("atlas",[i(tt.edge),-.06,d],[i(tt.edge),-.06,p],[i(tt.edge),0,p],[i(tt.edge),0,d],[e,0,0],oe("edge"))}const f=kt("ballast");for(let _=0;_<Math.round(t);_++)for(const[d,p]of[[1.56,tt.track],[tt.track,tt.wallBed+.12]])n.quad("atlas",[i(d),tt.bed,_],[i(p),tt.bed,_],[i(p),tt.bed,_+1],[i(d),tt.bed,_+1],a,f);const m=kt("rail"),g=oe("steelDark");for(const[_,d]of tt.rails){const p=tt.track+_;for(let M=0;M<t;M+=3){const x=Math.min(t,M+3),v=tt.bed+d,L=.035;n.quad("atlas",[i(p-L),v,M],[i(p+L),v,M],[i(p+L),v,x],[i(p-L),v,x],a,m),n.quad("atlas",[i(p-L),tt.bed,M],[i(p-L),tt.bed,x],[i(p-L),v,x],[i(p-L),v,M],[-e,0,0],g)}}return{arc:r}}const ge={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},Sc=12,ps=5;function ms(n,t,e){const i=[];for(let r=0;r<=ps;r++)i.push({x:n-t,y:e+(ge.spring-e)*r/ps,ox:-1,oy:0});for(let r=1;r<Sc;r++){const s=Math.PI*(1-r/Sc);i.push({x:n+t*Math.cos(s),y:ge.spring+t*Math.sin(s),ox:Math.cos(s),oy:Math.sin(s)})}for(let r=ps;r>=0;r--)i.push({x:n+t,y:e+(ge.spring-e)*r/ps,ox:1,oy:0});return i}function Ec(n,t,e,i,r=!0){const s=S=>i*S,a=tt.track,o=tt.bed,l=o-.3,c=tt.cy+tt.R+.35,u=[ms(a,ge.hw+ge.ring*.5,l)];r&&u.push(Lt.map(S=>({x:S.x+S.nx*.004,y:S.y+S.ny*.004})));const h=Ru(tt.back-.45,tt.cx+tt.R+.35,l,c,u).map(S=>({x:s(S.x),y:S.y}));Cu(n,{x:0,y:0,z:t,yaw:0},e,h,{layer:"ptile",grid:.6,uv:(S,y)=>[(S*i+3)/6,.004+.992*y/tt.sCrown]});const f=t+e*ge.proud,m=[0,0,e],g=o-.02,_=ms(a,ge.hw,g),d=ms(a,ge.hw+ge.ring,g),p=[Rs("brick",0,0,.5,1),Rs("brick",.5,0,1,1)],M=oe("soot");for(let S=0;S<_.length-1;S++){const y=_[S],R=_[S+1],k=d[S+1],D=d[S];n.quad("atlas",[s(y.x),y.y,f],[s(R.x),R.y,f],[s(k.x),k.y,f],[s(D.x),D.y,f],m,p[S%2]);const H=[s((D.ox+k.ox)/2),(D.oy+k.oy)/2,0];n.quad("atlas",[s(D.x),D.y,f],[s(k.x),k.y,f],[s(k.x),k.y,t],[s(D.x),D.y,t],H,M)}const x=ms(a,ge.hw+.006,g),v=kt("soot"),L=[[0,.22,.2],[.22,.55,.1],[.55,ge.depth,.04]];for(const[S,y,R]of L){const k=f-e*S,D=f-e*y;for(let X=0;X<x.length-1;X++){const $=x[X],j=x[X+1],at=[s(-($.ox+j.ox)/2),-($.oy+j.oy)/2,0];n.quad("atlas",[s($.x),$.y,k],[s(j.x),j.y,k],[s(j.x),j.y,D],[s($.x),$.y,D],at,v,{emit:R})}const H=a-ge.hw-.01,V=a+ge.hw+.01,W=S===0?t+e*.2:k,Z=o-.003;n.quad("atlas",[s(H),Z,W],[s(V),Z,W],[s(V),Z,D],[s(H),Z,D],[0,1,0],kt("ballast"),{emit:R*1.2});const P=S===0?t:k;for(const[X,$]of tt.rails){const j=a+X,at=o+$,St=.035;n.quad("atlas",[s(j-St),at,P],[s(j+St),at,P],[s(j+St),at,D],[s(j-St),at,D],[0,1,0],kt("rail"),{emit:R*2.4})}}const w=f-e*ge.depth,b=ge.spring+ge.hw+.06,C=ge.hw+.06;n.quad("atlas",[s(a-C),g,w],[s(a+C),g,w],[s(a+C),b,w],[s(a-C),b,w],m,oe("blackout"),{emit:0})}function gi(n,t,e,i,r,s,a,o,l,c,u=.04){const h=e*(Mc(a,i)-i*u),f=e*(Mc(o,i)-i*u),m=-i*e*s/2;return n.quad(t,[h,a,r+m],[h,a,r-m],[f,o,r-m],[f,o,r+m],[-i*e,0,0],l,c),{x:(h+f)/2,y:(a+o)/2,z:r}}function b_(n,t,e,i){const r=_=>t*_,s=tt.back+.14,a=tt.back+.6,o=e-.9,l=e+.9,c=kt("bench"),u=oe("steelDark"),h=Math.min(r(s),r(a)),f=Math.max(r(s),r(a));n.box("cut",h,.4,o,f,.46,l,c,null,"xXyYzZ");const m=r(s+.02),g=r(s+.07);n.box("cut",Math.min(m,g),.56,o,Math.max(m,g),.95,l,c,null,"xXYzZ");for(const _ of[o+.12,e,l-.12])n.box("atlas",h+.05,0,_-.03,f-.05,.4,_+.03,u,null,"xXzZ");i.push([r(a+.05),o,r(a+.05),l],[r(s),o,r(a+.05),o],[r(s),l,r(a+.05),l])}function T_(n,t,e){const{b:i,p:r,sheet:s,rng:a,env:o}=n,l=[],c=[],u=[],h=o.wrong||0,f=D=>e*D;let m=0;const g=Math.round((t-6)/4.2)+1;for(;m<g;m++){const D=3+(t-6)*m/(g-1);Ri(i,{x:f(.5),y:0,z:D,yaw:0},3.45,{dead:r.dark&&m%3!==1,flick:r.faulty===m,power:.62,radius:9.5,len:1.5})}const _=o.line||{color:"#b3261e"},d=s.add(400,26,(D,H,V)=>Kg(D,H,V,o.station,_.color,2));for(let D=1.5;D<t-1;D+=3)gi(i,"sheet",e,-1,D,3,2.5,2.68,d,null,.03);const p=[];for(let D=0;D<3;D++){const H=Lu(o.station,h,a),V=a.chance(Math.min(.6,h*.16))?a.pick(ug):null;p.push({name:H,defect:V,uv:s.add(232,108,(W,Z,P)=>vu(W,Z,P,H,{defect:V}))})}const M=D=>D.defect?`${D.name} — the symbol is not quite right.`:D.name;let x=0;for(let D=5;D<t-3;D+=8.5,x++){const H=p[x%3],V=gi(i,"sheet",e,-1,D,1.5,1.5,2.2,H.uv);l.push({...V,r:6,label:"read name board",title:"STATION",text:M(H)});const W=D+4.25;if(W<t-3){const Z=a.chance(Math.min(.7,h*.17));let P;const X=s.add(112,168,(j,at,St)=>{P=Cs(j,at,St,a,Z)}),$=gi(i,"sheet",e,-1,W,1,.62,2.12,X);l.push({...$,r:5,label:"read poster",title:"POSTER",text:`${P.headline}. ${P.strap}.`})}}x=1;for(let D=4.5;D<t-3;D+=6.2,x++)if(x%2){const H=p[x%3],V=gi(i,"sheet",e,1,D,2.15,1.2,2.2,H.uv);l.push({...V,r:9,cone:.95,label:"read name board",title:"STATION",text:M(H)})}else{const H=a.chance(Math.min(.7,h*.17));let V;const W=s.add(200,150,(P,X,$)=>{V=Cs(P,X,$,a,H)}),Z=gi(i,"sheet",e,1,D,2,.85,2.35,W);l.push({...Z,r:9,cone:.95,label:"read poster",title:"POSTER",text:`${V.headline}. ${V.strap}.`})}if(r.start||a.chance(.45)){const D=r.start?So[0]:Tu(n),H=s.add(168,216,(W,Z,P)=>Eu(W,Z,P,D,a)),V=gi(i,"sheet",e,-1,r.start?10.6:t*.62+2.1,.5,.95,1.6,H,{tint:[1.1,1.1,1.1]});l.push({...V,r:4.5,label:"read notice",title:D.title,text:D.text,clue:!0,onRead:W=>W.story.noticeRead(D.key)})}for(const D of[t*.3,t*.72])b_(i,e,D,c);const v=Ps("board"),L=Ts(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,v,v,{emit:1.2},f(.15));l.push({...L,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const w=!!(o.stretch&&o.stretch.clocksBack),b=Ps(w?"clockBack":"clock"),C=Ts(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,b,b,{emit:1.05},f(1.2));l.push({...C,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:w?"The second hand is ticking backwards.":"The clock is keeping time."});const S=s.add(250,56,(D,H,V)=>Xo(D,H,V,{dir:"up"})),y=s.add(250,56,(D,H,V)=>qo(D,H,V,`Platform ${a.int(1,6)}`,{sub:`${_.name||"Meridian"} line`})),R=Ts(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,S,y,{emit:1.25},f(0));l.push({...R,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"});const k=gi(i,"cut",e,-1,t*.5+1.2,.34,.7,1.38,kt("helpPoint"));if(l.push({...k,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(D,H,V)=>D.director.helpPoint(V)}),i.quad("atlas",[f(tt.track+.98),.9,t+.4],[f(tt.track+1.13),.9,t+.4],[f(tt.track+1.13),1.05,t+.4],[f(tt.track+.98),1.05,t+.4],[0,0,-1],oe("white"),{emit:1.6,tint:[1,.12,.08]}),r.figure){const D=f(.75),H=t-7;i.quad("figure",[D+.3,0,H],[D-.3,0,H],[D-.3,1.78,H],[D+.3,1.78,H],[0,0,-1],kt("figure"),{emit:.02}),u.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(V,W)=>V.director.events.figureGone(W)})}return{items:l,walls:c,zones:u}}const w_={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=e?30:n.pick([30,36,36,42]),r=n.sign(),s=tt.back-.4,a=tt.cx+tt.R+.4;return{p:{L:i,side:r,start:e,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:r>0?[s,-2.4,-1.2-.2,a,tt.cy+tt.R+.3,i+ge.depth+.2]:[-a,-2.4,-1.2-.2,-s,tt.cy+tt.R+.3,i+ge.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:r}=e;E_(t,i,r),Ec(t,0,1,r,!e.start),Ec(t,i,-1,r,!0),e.start||(t.addPortal(0,0,0,0),oi(t,{x:0,y:0,z:0,yaw:0},Lt.crown)),t.addPortal(0,0,i,0);const s=T_(n,i,r),a=m=>r*m,o=(tt.back+tt.edge)/2,l=(tt.edge-tt.back)/2,c=[{ax:a(o),az:0,bx:a(o),bz:i,hw:l,ya:0,yb:0}],u=Lt.W/2,h=[[a(tt.back+.08),0,a(tt.back+.08),i],[a(tt.edge-.1),0,a(tt.edge-.1),i],[a(tt.back),i,a(-u),i],[a(u),i,a(tt.edge),i]];e.start?h.push([a(tt.back),0,a(tt.edge),0]):h.push([a(tt.back),0,a(-u),0],[a(u),0,a(tt.edge),0]);for(const m of s.walls)h.push(m);const f={zones:s.zones};return e.start&&(f.spawn={x:a(.1),z:6,yaw:0}),{cells:c,walls:h,items:s.items,extra:f}}},A_=.16,R_=.3,dn=1.6,vn=(n,t)=>n+t*R_,Dr=(n,t,e)=>n+t*A_*e;function $o(n,t,e,i,r=[-1.5,-.5,.5,1.5],s=0,a=null){const o=kt("stairTread"),l=kt("riser");for(let c=0;c<e;c++){const u=vn(t,c),h=vn(t,c+1),f=Dr(s,i>0?c+1:c,i),m=Dr(s,i>0?c:c+1,i);for(let g=0;g<r.length-1;g++){const _=r[g],d=r[g+1];i>0?n.quad("atlas",[d,f,h],[_,f,h],[_,f,u],[d,f,u],[0,1,0],o,a):n.quad("atlas",[_,f,u],[d,f,u],[d,f,h],[_,f,h],[0,1,0],o,a),i>0?n.quad("atlas",[_,m,u],[d,m,u],[d,f,u],[_,f,u],[0,0,-1],l,a):n.quad("atlas",[_,m,h],[d,m,h],[d,f,h],[_,f,h],[0,0,1],l,a)}}}function Zo(n,t,e,i,r,s,a=.025,o="rubber",l=null){const c=oe(o),u=[t-a,i+a,e],h=[t+a,i+a,e],f=[t+a,s+a,r],m=[t-a,s+a,r];n.quad("atlas",u,h,f,m,[0,1,0],c,l);const g=t>0?-1:1,_=t+g*a;n.quad("atlas",[_,i-a,e],[_,i+a,e],[_,s+a,r],[_,s-a,r],[g,0,0],c,l)}const C_={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),r=vn(0,i),s=Dr(0,i,e),a=vn(dn,i)+dn;return{p:{dir:e,n:i,run:r,rise:s,len:a,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:s,z:a,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,a]}},build(n){const{b:t,p:e}=n,i=vn(dn,e.n),r=h=>Ve((h-dn)/e.run,0,1)*e.rise,s=[0,dn],a=Math.round(e.run/.9);for(let h=1;h<a;h++)s.push(dn+e.run*h/a);s.push(i,e.len);const o=s.map(h=>({x:0,y:r(h),z:h,yaw:0})),l=ri(t,o,Wo(Lt),{floor:null});for(const h of l.cells)h.surface="stone";const c=Lt.W/2,u=kt("floor");for(let h=0;h<3;h++){const f=-c+h,m=f+1;t.quad("atlas",[f,0,0],[m,0,0],[m,0,dn],[f,0,dn],[0,1,0],u),t.quad("atlas",[f,e.rise,i],[m,e.rise,i],[m,e.rise,e.len],[f,e.rise,e.len],[0,1,0],u)}$o(t,dn,e.n,e.dir);for(const h of[-c+.09,c-.09])Zo(t,h,dn-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),oi(t,o[0],Lt.crown),Su(t,o,l.dist,Lt.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:o}}},Ko=5.4,ue=Ko/2,wo=1.2,Ao=3.7,Ea=Vo(Ko,wo,Ao),Jn=3.6,pn=1.2,bc=Math.tan(Math.PI/6),Xi=[-.95,.95],sn=.5,ze=.92,P_={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),r=i*bc*e,s=Jn*2+i;return{p:{dir:e,run:i,rise:r,len:s,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:r,z:s,yaw:0}],box:[-ue-.4,Math.min(0,r)-.5,0,ue+.4,Math.max(0,r)+4.3,s]}},build(n){const{b:t,p:e,sheet:i,rng:r}=n,s=Jn,a=Jn+e.run,o=P=>Ve((P-s)/e.run,0,1)*e.rise,l=[0,Jn-pn,s],c=Math.round(e.run/1.2);for(let P=1;P<=c;P++)l.push(s+e.run*P/c);l.push(a+pn,e.len);const u=l.map(P=>({x:0,y:o(P),z:P,yaw:0}));ri(t,u,Ea,{floor:null}),sr(t,u[0],Ea,Lt,1,"tile"),sr(t,u[u.length-1],Ea,Lt,-1,"tile");const h=[0,1,0],f=kt("floor"),m=kt("deck"),g=oe("metal");for(const[P,X,$]of[[0,Jn-pn,0],[a+pn,e.len,e.rise]])t.grid("atlas",[-ue-.04,$,P],[Ko+.08,0,0],[0,0,X-P],5,2,h,f,null,!0);const _=.4,d=Math.round(e.run/_),p=e.rise/d,M=P=>P===d?a:s+P*_,x=P=>P===d?e.rise:P*p,v=kt("tread"),L=oe("steelDark"),w=kt("comb");for(const P of Xi){const X=P-sn,$=P+sn;for(const[j,at,St]of[[Jn-pn,s,0],[a,a+pn,e.rise]])t.quad("atlas",[X,St,j],[$,St,j],[$,St,at],[X,St,at],h,m);t.quad("atlas",[X,.003,s-.25],[$,.003,s-.25],[$,.003,s],[X,.003,s],h,w),t.quad("atlas",[$,e.rise+.003,a+.25],[X,e.rise+.003,a+.25],[X,e.rise+.003,a],[$,e.rise+.003,a],h,w);for(let j=0;j<d;j++){const at=M(j),St=M(j+1),Y=x(p>0?j+1:j),nt=x(p>0?j:j+1);t.quad("atlas",[X,Y,at],[$,Y,at],[$,Y,St],[X,Y,St],h,v);const gt=p>0?at:St;t.quad("atlas",[X,nt,gt],[$,nt,gt],[$,Y,gt],[X,Y,gt],[0,0,p>0?-1:1],L)}}Si(t,u[0],ue+.04),Si(t,u[u.length-1],ue+.04),Si(t,{x:0,y:0,z:Jn-pn,yaw:0},ue),Si(t,{x:0,y:e.rise,z:a+pn,yaw:0},ue);const b=[-ue,Xi[0]-sn,Xi[0]+sn,Xi[1]-sn,Xi[1]+sn,ue],C=Jn-pn,S=a+pn,y=[[C,s,0,0],[s,a,0,e.rise],[a,S,e.rise,e.rise]];for(const[P,X,$,j]of y){for(let at=0;at<6;at+=2){const St=b[at],Y=b[at+1];t.quad("atlas",[St,$+ze,P],[Y,$+ze,P],[Y,j+ze,X],[St,j+ze,X],h,m)}for(const[at,St]of[[b[1],1],[b[2],-1],[b[3],1],[b[4],-1]])t.quad("atlas",[at,$,P],[at,j,X],[at,j+ze,X],[at,$+ze,P],[St,0,0],g),t.quad("atlas",[at,$-.3,P],[at,j-.3,X],[at,j,X],[at,$,P],[St,0,0],oe("steelDark")),Zo(t,at+St*.03,P,$+ze+.04,X,j+ze+.04,.04)}for(let P=0;P<6;P+=2){const X=b[P],$=b[P+1];t.quad("atlas",[X,0,C],[$,0,C],[$,ze,C],[X,ze,C],[0,0,-1],g),t.quad("atlas",[X,e.rise,S],[$,e.rise,S],[$,e.rise+ze,S],[X,e.rise+ze,S],[0,0,1],g)}const R=Math.max(2,Math.round(e.run/3.2));for(let P=0;P<R;P++){const X=s+e.run*(P+.5)/R,$=o(X)+ze,j=e.faulty===P;t.box("atlas",-.04,$,X-.04,.04,$+1.25,X+.04,oe("steelDark"),null,"xXzZ"),t.box("atlas",-.2,$+1.25,X-.2,.2,$+1.36,X+.2,kt("uplight"),{emit:1.5,flick:j},"xXzZY"),t.addLight(0,$+2.2,X,.5,8,j,[1,.95,.82])}for(const[P,X]of[[1.6,0],[e.len-1.6,e.rise]])Ri(t,{x:0,y:X,z:P,yaw:Math.PI/2},Ao-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),oi(t,u[0],Lt.crown);const k=[];for(let P=0;P<4;P++)k.push(i.add(84,116,(X,$,j)=>Cs(X,$,j,r,r.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const D=P=>ue*Math.cos(Math.asin(Ve((P-wo)/(Ao-wo),0,1)));let H=0;for(let P=s+.8;P<a-.4;P+=1.5,H++){const X=o(P),$=bc*Math.sign(e.rise)*.27;for(const j of[-1,1]){const at=j*(D(1.55)-.04),St=j*(D(2.3)-.04);t.quad("sheet",[at,X+1.55-$*j,P-.27*j],[at,X+1.55+$*j,P+.27*j],[St,X+2.3+$*j,P+.27*j],[St,X+2.3-$*j,P-.27*j],[-j,0,0],k[(H+(j>0?2:0))%4])}}const V=[{ax:0,az:0,bx:0,bz:C,hw:ue,ya:0,yb:0},{ax:0,az:S,bx:0,bz:e.len,hw:ue,ya:e.rise,yb:e.rise}],W=[[-ue,0,-ue,C],[ue,0,ue,C],[-ue,S,-ue,e.len],[ue,S,ue,e.len]],Z=Lt.W/2;for(const P of[0,e.len])W.push([-ue,P,-Z,P],[Z,P,ue,P]);for(const P of Xi){for(const[X,$,j,at]of y)V.push({ax:P,az:X,bx:P,bz:$,hw:sn,ya:j,yb:at,surface:"metal"});W.push([P-sn,C,P-sn,S],[P+sn,C,P+sn,S])}for(let P=0;P<6;P+=2)W.push([b[P],C,b[P+1],C],[b[P],S,b[P+1],S]);return{cells:V,walls:W,items:[],frames:u}}},Ye=3,ba=4.5,vr=24,D_={type:"exit",plan(){const n=vn(0,vr),t=Dr(0,vr,1),e=vn(Ye,vr)+ba;return{p:{run:n,rise:t,len:e},exits:[],box:[-1.9,-.4,0,1.9,t+3.3,e]}},build(n){const{b:t,p:e,sheet:i}=n,r=b=>Ve((b-Ye)/e.run,0,1)*e.rise,s=[0,1.5,Ye],a=Math.round(e.run/.9);for(let b=1;b<=a;b++)s.push(Ye+e.run*b/a);s.push(e.len-2.2,e.len);const o=s.map(b=>({x:0,y:r(b),z:b,yaw:0})),l=ri(t,o,Wo(Lt),{floor:null});for(const b of l.cells)b.surface="stone";const c=Lt.W/2,u=kt("floor"),h=-c-.03,f=Lt.W+.06,m=vn(Ye,vr);t.grid("atlas",[h,0,0],[f,0,0],[0,0,Ye],3,3,[0,1,0],u,null,!0),t.grid("atlas",[h,e.rise,m],[f,0,0],[0,0,e.len-m],3,4,[0,1,0],u,null,!0),$o(t,Ye,vr,1,[0,1,2,3].map(b=>h+f*(b/3)));for(const b of[-c+.09,c-.09])Zo(t,b,Ye-.3,.95,Ye+e.run+.3,e.rise+.95);const g={x:0,y:e.rise,z:e.len-.02,yaw:0},_=oe("daylight");sr(t,g,yu(Lt),null,-1,"atlas",()=>[(_[0]+_[2])/2,(_[1]+_[3])/2],{emit:2}),t.addLight(0,e.rise+1.6,e.len-.6,2.4,11,!1,[1,1,1]),t.addLight(0,e.rise+1.2,e.len-3.5,1.2,9,!1,[1,1,1]);const d=kt("gate");for(const b of[-1,1]){const C=b*(c-.06),S=e.len-ba+.5;t.quad("cut",[C,e.rise,S],[C,e.rise,S+.7],[C,e.rise+2.3,S+.7],[C,e.rise+2.3,S],[-b,0,0],d,{emit:.25})}t.addPortal(0,0,0,0),oi(t,o[0],Lt.crown),Ri(t,{x:0,y:r(Ye+e.run*.3),z:Ye+e.run*.3,yaw:0},Lt.crown-.04,{});const p=i.add(250,56,(b,C,S)=>Xo(b,C,S,{dir:"up"})),M=i.add(250,56,(b,C,S)=>qo(b,C,S,"No entry")),v=[{...Ts(t,"sheet",{x:0,y:0,z:Ye-.6,yaw:0},2.1,1.7,.38,p,M,{emit:1.3}),r:8,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}],L=l.walls.concat([[-c,e.len-.4,c,e.len-.4]]),w=[{x0:-c,x1:c,z0:e.len-ba+1.2,z1:e.len,y0:e.rise-.6,y1:e.rise+.6,fire:b=>b.director.win()}];return{cells:l.cells,walls:L,items:v,frames:o,extra:{zones:w}}}},L_={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,r=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],s=ri(t,r,Lt,{floor:kt("floor")}),a=kt("shutter");sr(t,{x:0,y:0,z:e.len-.02,yaw:0},yu(Lt),null,-1,"atlas",(u,h)=>[a[0]+(a[2]-a[0])*(u/Lt.W+.5),a[1]+(a[3]-a[1])*(h/Lt.crown)]),t.addPortal(0,0,0,0),oi(t,r[0],Lt.crown);const o=i.add(200,60,(u,h,f)=>qo(u,h,f,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],o);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:s.cells,walls:s.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:r}}},Ro=2.3,Iu=2.4,Ta=Vo(Ro,1.2,Iu),pe=1.2,gs=2.5,I_={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),r=vn(pe+gs,e)+gs+pe,s=Dr(0,e,i);return{p:{steps:e,dir:i,len:r,rise:s,flick:n.chance(.35)},exits:[{x:0,y:s,z:r,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,r]}},build(n){const{b:t,p:e,sheet:i,theme:r}=n,s=pe+gs,a=vn(s,e.steps),o=a-s,l=w=>(o>0?Ve((w-s)/o,0,1):w>=s?1:0)*e.rise,c=w=>({x:0,y:l(w),z:w,yaw:0}),u=ri(t,[c(0),c(pe)],Lt,{floor:kt("floor")}),h=[pe,pe+1.25,s];o>0&&h.push(a),h.push(a+1.25,e.len-pe);const f=ri(t,h.map(c),Wo(Ta),{floor:null,u0:pe}),m=ri(t,[c(e.len-pe),c(e.len)],Lt,{floor:kt("floor"),u0:e.len-pe});sr(t,c(pe),Lt,Ta,-1,"tile"),sr(t,c(e.len-pe),Lt,Ta,1,"tile");const g=Ro/2,_=kt("floorDark"),d=-g-.03,p=Ro+.06;t.grid("atlas",[d,0,pe],[p,0,0],[0,0,gs],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,a],[p,0,0],[0,0,e.len-pe-a],2,3,[0,1,0],_,null,!0),e.steps>0&&$o(t,s,e.steps,e.dir,[0,1,2].map(w=>d+p*(w/2)),0),Si(t,c(pe),Lt.W/2,"floorDark"),Si(t,c(e.len-pe),Lt.W/2,"floorDark");for(const w of f.cells)w.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),oi(t,c(0),Lt.crown),Ri(t,c((s+a)/2),Iu-.03,{flick:e.flick,power:.8,radius:6,len:.9});const M=[],x=[["TO THE TRAINS",-1,pe+1.3],["WAY OUT",1,e.len-pe-1.3]];for(const[w,b,C]of x){const S=i.add(220,54,(R,k,D)=>bu(R,k,D,w,r,b>0?"right":"left")),y=Hn(t,"sheet",c(C),b,g,l(C)+.72,1.4,.345,S,null,.025);M.push({...y,r:4,label:"read tiles",title:"TILED LEGEND",text:w==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const v=u.walls.concat(f.walls,m.walls),L=Lt.W/2;for(const w of[pe,e.len-pe])v.push([-L,w,-g,w],[g,w,L,w]);return{cells:u.cells.concat(f.cells,m.cells),walls:v,items:M}}},Pn={corridor:r_,bend:s_,junction:M_,platform:w_,stairs:C_,escalator:P_,exit:D_,deadend:L_,cross:I_};let U_=1;const Dn=n=>!!Pn[n];function Tc(n,t={}){const e=U_++,i=new Ge(un(n.seed,1e3+e*13)),r=[];if(t.first&&r.push(Dn("platform")?"platform":"corridor"),t.fromJunction&&r.push("corridor"),t.exit)r.push("corridor",Dn("exit")?"exit":"corridor");else{const s=i.int(3,5);let a=t.first?1:0,o=r[r.length-1]||"";for(let l=0;l<s;l++){const c=i.weighted([["corridor",o==="corridor"?1:3],["bend",o==="bend"?.4:2.2],["stairs",Dn("stairs")&&o!=="stairs"?1.5:0],["escalator",Dn("escalator")&&o!=="escalator"?.7:0],["platform",Dn("platform")&&a<1&&l>0?1.6:0]]);r.push(c),c==="platform"&&(a++,Dn("cross")&&i.chance(.5)&&r.push("cross","platform")),o=c}r[r.length-1]!=="corridor"&&r.push("corridor"),r.push(Dn("junction")?"junction":"corridor")}return t.fromJunction&&n.testBranch&&r.splice(0,r.length,"corridor",...n.testBranch),n.stretchCount++,{id:e,plan:r,rng:i,station:__(i,n.usedNames),theme:t.theme||n.theme(i),line:i.pick(Mo),line2:i.pick(Mo),dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const N_=new Set(["junction","cross"]);function F_(n){return ag(0,n)}function O_(n,t,e,i,r){const s=n.game.world,a=F_(s.exitPose(t,e).yaw);let o=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(o=n.branchStretch(t,e),l=0);let c=o.plan[l];c===void 0&&(c="corridor",l=o.plan.length);const u=_=>n.envFor(o,l,{yaw:a,..._}),h=_=>n.envFor(o,l-1,{yaw:a,filler:!0,..._}),f=a>.1?-1:a<-.1?1:0;if(i===0){if(N_.has(c)&&f!==0)return{def:Pn.bend,env:h({turn:f})};if(c==="bend"){const _=f!==0?f:r.sign();return{def:Pn.bend,env:u({turn:_})}}return c==="junction"?{def:Pn.junction,env:u(n.junctionEnv(r))}:l===0&&o.fromJunction?{def:Pn.corridor,env:u({gate:!0,len:8,noticeChance:0}),force:!0}:{def:Pn[c]||Pn.corridor,env:u({})}}const m=[];f!==0?m.push(["bend",{turn:f}]):m.push(["bend",{turn:1}],["bend",{turn:-1}]),m.push(["corridor",{short:!0}]),Dn("stairs")&&m.push(["stairs",{dir:-1}],["stairs",{dir:1}]),Dn("escalator")&&m.push(["escalator",{dir:-1}],["escalator",{dir:1}]),m.push(["corridor",{short:!0,tiny:!0}]);const g=m[i-1];return g?{def:Pn[g[0]],env:h(g[1])}:null}const wa=n=>String(n).padStart(2,"0"),k_=["The last train has departed","This station is closed","Please make your way to the way out","Check the front of the train","Mind the gap","Stand behind the yellow line"],z_=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain"];function B_(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function wc(n){const t=(Math.floor(n)%86400+86400)%86400;return`${wa(Math.floor(t/3600))}:${wa(Math.floor(t/60)%60)}:${wa(t%60)}`}function H_(n,t,e=26){const i=`${n}   ***   `,r=Math.floor(t*4)%i.length;return(i+i+i).slice(r,r+e)}function G_(n,t){n.anchorTod===void 0&&(n.anchorTod=B_(),n.anchorT=t);const e=n.anchorTod+(t-n.anchorT),i=n.anchorTod-(t-n.anchorT)*1,r=qt.goal-n.progress,s=n.wrong,a=Math.floor(t/14),o=new Ge(un(n.seed,a)),l=o.chance(Math.min(.85,s*.2)),c=y_(o);let u=r<=0?"approaching":`${r} min${r===1?"":"s"}`;s>=3&&Math.floor(t*4)%23===0&&(u=o.pick(["-- mins","99 mins","never"]));const h=H_(l?o.pick(z_):o.pick(k_),t),f=n.lastWrong?i:e;return{rows:[{l:"1 Way out",r:u},{l:l?`2 ${c}`:"2 Not in service",r:l?o.pick(["-- mins","gone","0 mins"]):""},{l:h}],footer:`Time ${wc(f)}`,rows2:[{l:"Way out",r:u},{l:n.lastWrong?"You are going the wrong way":"Follow the signs"},{l:h}],footer2:`Time ${wc(f)}`,tod:e,todBack:i}}class V_{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new Ge(un(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=Tc(this,{first:!0});e&&(i.plan=e.slice());const r=Pn[i.plan[0]],s=this.envFor(i,0);return t.start(r,s,un(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,line:t.line,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,...i}}choose(t,e,i,r){return O_(this,t,e,i,r)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,r=i&&this.progress+1>=qt.goal;t.branches[e]=Tc(this,{correct:i,fromJunction:t,exit:r,clocksBack:!i})}return t.branches[e]}junctionEnv(t){const e=this.junctionsPlanned++,i=this.progress<2?0:this.progress<4?1:2,r=e===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||r,jlevel:this.forceLevel??i}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min(qt.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}theme(t){return t.pick(gu)}boardState(t){return G_(this,t)}}class W_{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Ge((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.last=null,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,r=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:r,dur:r+Math.max(3.2,i*.43)+.8,spoken:!1,a:t,tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const r=this.rng.next();let s=zg,a=!1;r<Math.min(.8,i*.22)&&(s=i>=3&&this.rng.chance(.5)?Hg:Bg,a=!0);const o=this.rng.pick(s).replace("{station}",e.state.station||"this station");this.say({text:o,chime:a&&this.rng.chance(.6)?"fall":"rise",odd:a})}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class X_{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Ge((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.nextTrain=55,this.trainT=0,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=Zi(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),this.nextTrain-=t,this.nextTrain<=0&&(this.trainT=9,this.nextTrain=this.rng.range(70,140),e.audio.sfx("train")),this.trainT>0&&(this.trainT-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;if(this.dipT>0&&(i=.35+.3*Se(t*18,9)),this.trainT>0){const r=Math.sin(Ve((9-this.trainT)/9,0,1)*Math.PI);i*=1-.22*r*(.5+.5*Se(t*14,4))}return this.blackout>0&&(i=.02),this.pow=Zi(this.pow,i,20,e||.016),this.pow}}function q_(n,t){const e=n.world,i=e.current,r=n.state;if(!i)return;const s=i.env;s.station&&r.station!==s.station&&(r.station=s.station);const a=i.built;if(!a||!a.extra)return;const[o,l]=Os(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(a.extra.zones)for(const u of a.extra.zones)u.done||o>=u.x0&&o<=u.x1&&l>=u.z0&&l<=u.z1&&(u.y0===void 0||c>=u.y0&&c<=u.y1)&&(u.once!==!1&&(u.done=!0),u.fire(n,i,u,t))}function Y_(n,t){const e=n.p,i=s=>s===0?"left":"right",r=s=>(s===0?e.lineA:e.lineB).name;if(e.kind==="announce"){const s=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow the ${r(s)} line. To the ${i(s)}. Please.`,`The way out is by the ${r(s)} line, on the ${i(s)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(s)}, for the ${r(s)} line. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${r(s)} line, to the ${i(s)}.`,`Customers for the way out should keep to the ${i(s)} for the ${r(s)} line.`,`The way out is by way of the ${r(s)} line, on your ${i(s)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return e.kind==="clock"?{text:"Customers are reminded that all station clocks run forwards.",chime:"rise",urgent:!0}:{text:"Please follow the yellow signs for the way out.",chime:"rise",urgent:!0}}const $_=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function Z_(n,t){const e=Y_(t,n.director.announcer.rng);t.announcement=e,n.director.announcer.say(e),n.state.junctionKind=t.p.kind}function K_(n,t){const e=n.director.announcer;if(t.p.kind==="announce"&&t.announcement){e.say({...t.announcement,urgent:!0}),n.director.reading=null,n.player.zoomTarget=0;return}const i=e.rng.pick($_);e.say({text:i,chime:"none",urgent:!0}),n.director.reading=null,n.player.zoomTarget=0}function j_(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,r=n.story,s=n.director.events;t.gateShut=!0,t.gateWall=gc,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(gc));const a=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const o=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(o,l,c);const u=n.player;u.pos.x-=o,u.pos.y-=l,u.pos.z-=c,u.eyeY-=l,i.refresh(),n.audio.sfx("gate"),s.lightsOut(.28),s.glitch(a?.5:1.3),e.def.type==="junction"&&(r.decide(a),a?r.progress>=qt.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),s.brownOut(2.2)),n.state.lastChoice=a?"right":"wrong")}class J_{constructor(t){this.game=t,this.announcer=new W_(t),this.events=new X_(t),this.reset()}reset(){this.target=null,this.reading=null,this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Find the way out. Staff notices on the walls explain how.",7)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){Z_(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read both signs before you choose.",7))}helpPoint(t){K_(this.game,t)}commit(t){j_(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),r=Math.floor(e.time%60),s=[["Tape length",`${i}:${String(r).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Wrong turns",String(e.wrongTurns)],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(s),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,2).map(r=>r.r?`${r.l} … ${r.r}`:r.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:r}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:r},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,r)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,r=e.viewDir(),s=e.pos.x,a=e.eyeY,o=e.pos.z;let l=null,c=0;const u=[i.current,...i.neighbours(i.current)];for(const h of u)if(h.built)for(const f of h.built.items){if(f.hidden)continue;const[m,g,_]=Er(h,f.x,f.y,f.z),d=m-s,p=g-a,M=_-o,x=Math.hypot(d,p,M);if(x>(f.r||5.5)||x<.2)continue;const v=(d*r.x+p*r.y+M*r.z)/x,L=f.cone||.9;if(v<L)continue;const w=v-x*.01;w>c&&(c=w,l={item:f,node:h,d:x,dot:v})}if(this.target=l,this.reading){const h=this.reading,[f,m,g]=Er(h.node,h.item.x,h.item.y,h.item.z),_=f-s,d=m-a,p=g-o,M=Math.hypot(_,d,p),x=(_*r.x+d*r.y+p*r.z)/Math.max(M,.001);(M>(h.item.r||5.5)+1.5||x<.55||!h.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[r,s]=this.hints.shift();this.setHint(r,s)}e.step&&i.audio.footstep(e.running,i.player.loc),q_(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,r=new Date;let s="";t&&this.target&&!this.reading&&(s=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const a=this.announcer.caption();i.caption=a?a.text:"",i.prompt=s,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:r,live:i.started,caption:a?a.text:"",captionTag:a?a.tag:"",prompt:s,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const o=e.renderer.dv.uniforms;o.uTrack.value=this.events.tracking,o.uZoom.value=e.player.zoom}}function Aa(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class Q_{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,u,h]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const f=e.createOscillator();f.type=u,f.frequency.value=c;const m=e.createGain();m.gain.value=h,f.connect(m),m.connect(i),f.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const r=e.createOscillator();r.type="square",r.frequency.value=100;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=2900,s.Q.value=1.4,r.connect(s),s.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),r.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,Aa(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const a=Aa(e,t.white,.8);a.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,a.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const o=e.createGain();o.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,Aa(e,t.white,1.3).connect(l),l.connect(o),o.connect(t.out)}update(t,e){const i=this.ctx,r=i.currentTime,s=.12;this.t+=t;const a=this.t,o=e.director.events,l=e.world.current,c=e.state.wrong,u=o.pow,h=l?l.flick.value:1,f=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*u*f*(1-c*.03),r,s),this.buzz.gain.setTargetAtTime(.004+(h<.5?0:.006)*u+(1-u)*.01,r,.02);const m=o.trainT>0?Math.sin(Ve((9-o.trainT)/9,0,1)*Math.PI):0;this.rumble.gain.setTargetAtTime(.16+.1*Se(a*.13,1)+m*.75,r,.3),this.rumbleLP.frequency.setTargetAtTime(62+m*120,r,.4);const g=l&&l.def.type==="platform"?1.5:1,_=.5+.5*Se(a*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+m*.11)*g,r,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*Se(a*.17,3))+m*500,r,.5);const d=Math.max(0,Se(a*.11,4)-.35)+m*.25;this.whistle.gain.setTargetAtTime(d*.05*g,r,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*Se(a*.23,5),r,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Re(n,{freq:t,to:e,type:i="sine",dur:r=.3,gain:s=.2,attack:a=.005,at:o=0,rev:l=.5,dry:c=1}){const u=n.ctx,h=u.currentTime+o,f=u.createOscillator();f.type=i,f.frequency.setValueAtTime(t,h),e&&f.frequency.exponentialRampToValueAtTime(e,h+r);const m=u.createGain();if(m.gain.setValueAtTime(1e-4,h),m.gain.exponentialRampToValueAtTime(s,h+a),m.gain.exponentialRampToValueAtTime(1e-4,h+r),f.connect(m),c>0){const g=u.createGain();g.gain.value=c,m.connect(g),g.connect(n.out)}if(l>0){const g=u.createGain();g.gain.value=l,m.connect(g),g.connect(n.rev)}f.start(h),f.stop(h+r+.05)}function Be(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:r=1e3,q:s=1,at:a=0,rev:o=.4,dry:l=1,attack:c=.002,sweep:u=0}){const h=n.ctx,f=h.currentTime+a,m=h.createBufferSource();m.buffer=n.white;const g=h.createBiquadFilter();g.type=i,g.frequency.setValueAtTime(r,f),g.Q.value=s,u&&g.frequency.exponentialRampToValueAtTime(u,f+t);const _=h.createGain();if(_.gain.setValueAtTime(1e-4,f),_.gain.exponentialRampToValueAtTime(e,f+c),_.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(g),g.connect(_),l>0){const d=h.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(o>0){const d=h.createGain();d.gain.value=o,_.connect(d),d.connect(n.rev)}m.start(f,Math.random()*1.5),m.stop(f+t+.05)}function qi(n,t,e,i=.16){Re(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Re(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Re(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function tv(n,t,e,i){const r=(t?1.25:1)*(.85+Math.random()*.3),s=(i?1.06:.95)*(.94+Math.random()*.12);Re(n,{freq:95*s,to:48,dur:.09,gain:.16*r,rev:.35}),e==="metal"?(Be(n,{dur:.07,gain:.12*r,type:"bandpass",freq:2300*s,q:5,rev:.6}),Re(n,{freq:610*s,dur:.22,gain:.03*r,type:"triangle",rev:.8,dry:.4})):e==="stone"?Be(n,{dur:.06,gain:.11*r,type:"bandpass",freq:1250*s,q:1.2,rev:.7}):(Be(n,{dur:.045,gain:.13*r,type:"highpass",freq:1900*s,q:.7,rev:.75}),Be(n,{dur:.03,gain:.05*r,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const ev={chimeRise(n){qi(n,392,0),qi(n,493.9,.42),qi(n,587.3,.84)},chimeFall(n){qi(n,587.3,0),qi(n,493.9,.42),qi(n,380,.84,.17)},zoom(n){Re(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){Be(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Re(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),Be(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),Be(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Re(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)Be(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,r]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Re(n,{freq:e*(.99+Math.random()*.02),dur:r,gain:i,at:t,rev:.9,dry:.7,attack:.002});Be(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),Be(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);Be(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}Be(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Re(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),Be(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Re(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Re(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Re(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Re(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Re(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},nv=["Google UK English Female","Google UK English Male","Daniel","Kate","Serena","Martha","Arthur","Microsoft Sonia","Microsoft Libby","Microsoft Ryan","Microsoft Hazel","Microsoft Susan"];class iv{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(i=>/en[-_]GB/i.test(i.lang));for(const i of nv){const r=e.find(s=>s.name.includes(i))||t.find(s=>s.name.includes(i));if(r){this.voice=r;return}}this.voice=e[0]||t.find(i=>/^en/i.test(i.lang))||null}prime(){if(!(!this.synth||!this.enabled))try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}speak(t,e={}){if(!(!this.synth||!this.enabled))try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.72:1,i.volume=.85,this.synth.speak(i)}catch{}}stop(){if(this.synth)try{this.synth.cancel()}catch{}}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function Ac(n,t,e){const i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;e?(a=(a+.02*l)/1.02,s[o]=a*3.5):s[o]=l}return r}function rv(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let r=0;r<2;r++){const s=i.getChannelData(r);let a=0;for(let o=0;o<e;o++){const l=o/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+r)),u=Math.random()*2-1,h=.25+.75*Math.exp(-l*3);a+=(u-a)*h,s[o]=a*c}}return i}class sv{constructor(){this.ctx=null,this.ready=!1,this.voice=new iv,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const r=e.createConvolver();r.buffer=rv(e);const s=e.createGain();s.gain.value=.55,this.rev.connect(r),r.connect(s),s.connect(this.master),this.white=Ac(e,2,!1),this.brown=Ac(e,4,!0),this.ambient=new Q_(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=ev[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{tv(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const Ra=26,av={passage:{rows:48,skirt:2,band:[14,15],thin:[13,16],ringFrom:17,ringHalf:.5,frieze:null},platform:{rows:72,skirt:2,band:[13,15],thin:[12,16],ringFrom:17,ringHalf:1,frieze:null}};function Rc(n,t,e,i,r,s,a){n.fillStyle=mu(s,a.range(-.07,.05)),n.fillRect(t,e,i,r),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,r*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+r-2,i-2,1),a.chance(.035)&&(n.fillStyle=a.chance(.5)?"rgba(60,50,35,0.25)":"rgba(255,255,255,0.2)",n.fillRect(t+1,e+1,i-2,r-2))}function ov(n,t="passage",e=1024,i=512){const r=av[t],s=wi(e,i),a=s.getContext("2d"),o=new Ge(xo(n.id+t)),l=e/Ra,c=i/r.rows;a.fillStyle=n.grout,a.fillRect(0,0,e,i);for(let h=0;h<r.rows;h++){const f=i-(h+1)*c,m=h%2?l/2:0;for(let g=-1;g<Ra;g++){const _=g*l+m,d=((_+l/2)/e+1)%1,p=Math.abs(d-.5)*Ra;let M=n.ground;h<r.skirt?M=n.skirt:h>=r.band[0]&&h<=r.band[1]?M=n.band:r.thin.includes(h)?M=n.accent:r.frieze&&r.frieze.includes(h)?M=n.band:h>=r.ringFrom&&(p<r.ringHalf?M=n.band:p<r.ringHalf+.55&&(M=n.accent)),Rc(a,_+.5,f+.5,l-1,c-1,M,o),_+l>e&&Rc(a,_-e+.5,f+.5,l-1,c-1,M,o)}}const u=a.createLinearGradient(0,0,0,i);u.addColorStop(0,"rgba(25,20,12,0.42)"),u.addColorStop(.3,"rgba(25,20,12,0.12)"),u.addColorStop(.8,"rgba(25,20,12,0.0)"),u.addColorStop(1,"rgba(25,20,12,0.28)"),a.fillStyle=u,a.fillRect(0,0,e,i),Go(a,0,0,e,i,xo(n.id)+7,1.1,!1);for(let h=0;h<9;h++){const f=o.range(0,e),m=o.range(0,i),g=o.range(40,110);for(const _ of[-e,0,e]){const d=a.createRadialGradient(f+_,m,0,f+_,m,g);d.addColorStop(0,"rgba(45,36,20,0.07)"),d.addColorStop(1,"rgba(45,36,20,0)"),a.fillStyle=d,a.fillRect(f+_-g,m-g,g*2,g*2)}}return s}const Cc=new Map;function Pc(n,t="passage"){const e=n.id+":"+t;let i=Cc.get(e);return i||(i=Ho(ov(n,t),{repeatU:!0}),Cc.set(e,i)),i}class lv{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.x=0,this.y=0,this.rowH=0,this.used=!1}_ensure(){this.canvas||(this.canvas=wi(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}add(t,e,i){this._ensure();const r=this.size,s=3;t=Math.min(Math.round(t),r-s*2),e=Math.min(Math.round(e),r-s*2),this.x+t+s>r&&(this.x=0,this.y+=this.rowH+s,this.rowH=0),this.y+e+s>r&&(this.x=0,this.y=0,this.rowH=0,this.overflow=!0);const a=this.x+s,o=this.y+s,l=this.ctx;l.save(),l.translate(a,o),l.beginPath(),l.rect(0,0,t,e),l.clip(),l.clearRect(0,0,t,e),i(l,t,e),l.restore(),this.x+=t+s,this.rowH=Math.max(this.rowH,e),this.used=!0;const c=.5;return[(a+c)/r,1-(o+e-c)/r,(a+t-c)/r,1-(o+c)/r]}finish(){return this.used?Ho(this.canvas):null}}function cv(n,t){const e=t.env.theme||gu[0];return n==="tile"?Pc(e,"passage"):n==="ptile"?Pc(e,"platform"):n==="dyn"?h_():Ng()}function uv(n){return new lv(n.def.sheetSize||512)}let Dc="";function hv(n,t){const e=n.state,r=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;r!==Dc&&(Dc=r,f_(n.story.boardState(t)))}class fv{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new gg,this.overlay.mobile=this.mobile,this.renderer=new mg(t,this.overlay,{mobile:this.mobile}),this.scene=new hu,this.camera=new Ke(qt.fov,this.renderer.aspect,.08,90),this.player=new Ag(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:qt.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new sv,this.story=new V_(this),this.world=new bg(this.scene,{choose:(i,r,s,a)=>this.story.choose(i,r,s,a),textures:(i,r)=>cv(i,r),makeSheet:i=>uv(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new J_(this),this.keyboard=Rg(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=Cg(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.wrong=i,this.story.base=i;const r=this.story.begin(this.world,e),s=r.built&&r.built.extra&&r.built.extra.spawn;if(s){const a=Math.cos(r.yaw),o=Math.sin(r.yaw);this.player.spawn(r.pos.x+s.x*a+s.z*o,r.pos.y,r.pos.z-s.x*o+s.z*a,r.yaw+(s.yaw||0))}else this.player.spawn(r.pos.x,r.pos.y,r.pos.z+1.5,r.yaw);Object.assign(this.state,{won:!1,time:0,progress:0,wrong:i,junctions:0,wrongTurns:0,cluesRead:0}),this.director.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=Ve((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const r=e.started&&!e.paused&&!e.won;try{r?this.step(i):this.idle(i)}catch(s){e.errors++,e.errors<5&&console.error(s)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,r=this.player;e.time+=t,i.mx=Ve(i.kmx+i.tmx,-1,1),i.mz=Ve(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const s=r.update(t,i,this.world);this.world.pump(),this.director.update(t,s),this.animate(t),e.x=+r.pos.x.toFixed(2),e.y=+r.pos.y.toFixed(2),e.z=+r.pos.z.toFixed(2),e.yaw=+r.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+qt.eye,e.pos.z),this.camera.rotation.set(e.pitch+Se(e.t*.3,5)*.03,e.yaw+Se(e.t*.21,6)*.08,Se(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let r=0;for(const s of this.world.nodes.values()){if(!s.built)continue;r++;const a=Se(e*1.3+s.phase,3),o=Se(e*23+s.phase*7,4);s.flick.value=a>.15-i*.04?o>-.2?1:.15:o>.55?.9:.04}this.state.built=r,Sr.uPower.value=this.director.power(e,t),hv(this,e)}}function dv(n,t){const e=t.player,i=t.world,r=(s,a,o,l,c=0)=>{const[u,h,f]=Er(s,a,c,o);return i.current=s,i.refresh(!0),e.spawn(u,h,f,s.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(s=0,a=0,o=!1){t.input.kmx=s,t.input.kmz=a,t.input.krun=!!o},look(s=0,a=0){e.yaw+=s,e.pitch+=a},face(s,a=0){e.yaw=s,e.pitch=a},tp(s,a,o){e.pos.x=s,e.pos.y=a,e.pos.z=o,e.eyeY=a+1.62},advance(s=1,a=0){let o=i.current;for(let l=0;l<s;l++){const c=o.exits[Math.min(a,o.exits.length-1)];if(!c||(c.child||i.expand(o,o.exits.indexOf(c)),!c.child))break;o=c.child}return r(o,0,.6,0)},seek(s,a=60,o=0){let l=i.current;for(let c=0;c<a;c++){const u=l.exits[Math.min(o,l.exits.length-1)];if(!u||(u.child||i.expand(l,l.exits.indexOf(u)),!u.child))return null;if(l=u.child,i.current=l,i.refresh(!0),l.def.type===s)return r(l,0,.6,0)}return null},at(s,a,o=0,l=0){return r(i.current,s,a,o,l)},info(){const s=i.current;return{type:s.def.type,id:s.id,yaw:+s.yaw.toFixed(2),pos:[s.pos.x,s.pos.y,s.pos.z].map(a=>+a.toFixed(1)),exits:s.exits.length,nodes:i.nodes.size,station:s.env.station,idx:s.env.idx,plan:s.env.stretch?s.env.stretch.plan.join(","):"",items:s.built?s.built.items.map(a=>a.label||a.title||"?"):[]}},voidPixels(s=!1){const a=t.renderer,o=a.gl,l=o.getClearColor(new Yt);o.setClearColor(16711935,1),o.setRenderTarget(a.target),o.render(t.scene,t.camera);const c=new Uint8Array(a.iw*a.ih*4);o.readRenderTargetPixels(a.target,0,0,a.iw,a.ih,c),o.setRenderTarget(null),o.setClearColor(l,1);let u=0;const h=[];for(let f=0;f<c.length;f+=4)if(c[f]>180&&c[f+1]<90&&c[f+2]>180&&(u++,s&&h.length<400)){const m=f/4%a.iw,g=Math.floor(f/4/a.iw),_=new G((m+.5)/a.iw*2-1,(g+.5)/a.ih*2-1,.5).unproject(t.camera),d=t.camera.position,p=s.y!==void 0?(s.y-d.y)/(_.y-d.y):((s.z??0)-d.z)/(_.z-d.z);h.push([d.x+(_.x-d.x)*p,d.y+(_.y-d.y)*p,d.z+(_.z-d.z)*p].map(M=>+M.toFixed(3)).concat([m,g,c[f],c[f+1],c[f+2]]))}return s?{n:u,hits:h}:u},pick(s,a){const o=t.renderer,l=new rg;return l.setFromCamera(new $t((s+.5)/o.iw*2-1,(a+.5)/o.ih*2-1),t.camera),l.intersectObjects(t.scene.children,!0).slice(0,3).map(u=>{const h=[...i.nodes.values()].find(_=>_.built&&_.built.group===u.object.parent),[f,m]=h?Os(h,u.point.x,u.point.z):[u.point.x,u.point.z],g={x:f,y:u.point.y-(h?h.pos.y:0),z:m};return{layer:u.object.name,node:h?h.def.type:"?",d:+u.distance.toFixed(3),local:[g.x,g.y,g.z].map(_=>+_.toFixed(3)),uv:u.uv?[+u.uv.x.toFixed(4),+u.uv.y.toFixed(4)]:null,face:u.faceIndex}})},buildAll(s=12){const a=[qt.ahead,qt.sight];return qt.ahead=s,qt.sight=1e6,i.refresh(!0),[qt.ahead,qt.sight]=a,[...i.nodes.values()].filter(o=>o.built).map(o=>o.def.type)},scanVoid(s=8,a=[-.5,0,.45]){const o=t.camera,l=o.far;o.far=600,o.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{}};for(const u of i.nodes.values())if(u.built)for(const h of u.built.cells)for(const f of[.25,.75]){const[m,g,_]=Er(u,h.ax+(h.bx-h.ax)*f,h.ya+(h.yb-h.ya)*f,h.az+(h.bz-h.az)*f);for(let d=0;d<s;d++)for(const p of a){const M=d/s*Math.PI*2+.11;o.position.set(m+.0137,g+1.6071,_-.0093),o.rotation.set(p+.013,M,.007),o.updateMatrixWorld(!0);const x=n.debug.voidPixels();c.views++,c.total+=x,x&&(c.byType[u.def.type]=(c.byType[u.def.type]||0)+x),x&&(!c.worst||x>c.worst.n)&&(c.worst={n:x,type:u.def.type,id:u.id,cam:[o.position.x,o.position.y,o.position.z,o.rotation.x,o.rotation.y,o.rotation.z]})}}return o.far=l,o.updateProjectionMatrix(),c},plan(s,a=7,o=0){return t.reset(a,s,o),n.debug.info()},take(s=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const a=i.current,o=s?a.p.correct:1-a.p.correct,l=a.p.kind;a.exits[o].child||i.expand(a,o);const c=a.exits[o].child;i.current=c,i.refresh(!0);const[u,h,f]=Er(c,0,0,4.2);return e.spawn(u,h,f,c.yaw),t.director.commit(c),{kind:l,exit:o,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(s,a){t.story.forceKind=s||null,t.story.forceLevel=a},branch(s){t.story.testBranch=s||null},setProgress(s){t.story.progress=s,t.state.progress=s},setWrong(s){t.story.wrong=s,t.state.wrong=s},say(s,a="rise"){t.director.announcer.say({text:s,chime:a})},glitch(s=1){t.director.events.glitch(s)},use(){return t.director.scan(),t.director.use(!0),t.state.reading},freeze(s=!0){t.frozen=s},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const An=hg(),Cn={ready:!1,state:{started:!1,ready:!1},start(){Uu=!0}};let Uu=!1;window.__game=Cn;async function pv(){An.setLoading(!0),await og(),An.drawMarks();let n;try{n=new fv(document.getElementById("view"),An)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}Cn.game=n,Cn.state=n.state,Cn.start=()=>n.start(),Cn.pause=()=>n.pause(),Cn.resume=()=>n.resume(),Cn.reset=t=>n.reset(t),dv(Cn,n),n.state.ready=!0,Cn.ready=!0,An.onStart(()=>n.start()),An.onResume(()=>n.resume()),An.onAgain(()=>n.start()),An.onVoice(t=>n.audio.setVoiceEnabled(t)),An.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),An.setLoading(!1),Uu&&n.start()}pv();
