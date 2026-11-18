(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="170",Zu=0,Xl=1,Ku=2,Dh=1,Ju=2,Fn=3,$n=0,He=1,bn=2,ui=0,sr=1,ql=2,$l=3,Yl=4,Qu=5,wi=100,tf=101,ef=102,nf=103,rf=104,sf=200,af=201,of=202,lf=203,ho=204,uo=205,cf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,_f=214,fo=0,po=1,mo=2,dr=3,go=4,_o=5,vo=6,xo=7,Lh=0,vf=1,xf=2,fi=0,yf=1,Mf=2,Sf=3,bf=4,Ef=5,Tf=6,wf=7,Ih=300,pr=301,mr=302,yo=303,Mo=304,la=306,Xr=1e3,Gn=1001,So=1002,pn=1003,Af=1004,ls=1005,Ae=1006,Ma=1007,ci=1008,Yn=1009,Uh=1010,Nh=1011,qr=1012,pl=1013,Li=1014,Vn=1015,Qr=1016,ml=1017,gl=1018,gr=1020,Fh=35902,Oh=1021,kh=1022,fn=1023,zh=1024,Bh=1025,ar=1026,_r=1027,Hh=1028,_l=1029,Gh=1030,vl=1031,xl=1033,Vs=33776,Ws=33777,Xs=33778,qs=33779,bo=35840,Eo=35841,To=35842,wo=35843,Ao=36196,Ro=37492,Co=37496,Po=37808,Do=37809,Lo=37810,Io=37811,Uo=37812,No=37813,Fo=37814,Oo=37815,ko=37816,zo=37817,Bo=37818,Ho=37819,Go=37820,Vo=37821,$s=36492,Wo=36494,Xo=36495,Vh=36283,qo=36284,$o=36285,Yo=36286,Rf=3200,Cf=3201,Pf=0,Df=1,Xe="",Qe="srgb",Ni="srgb-linear",ca="linear",ee="srgb",ki=7680,jl=519,Lf=512,If=513,Uf=514,Wh=515,Nf=516,Ff=517,Of=518,kf=519,Zl=35044,Kl="300 es",Wn=2e3,Ks=2001;class Mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,jo=180/Math.PI;function ts(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function zf(n,t){return(n%t+t)%t}function ba(n,t,e){return(1-e)*n+e*t}function Tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,i,r,s,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=r[0],d=r[3],p=r[6],y=r[1],v=r[4],x=r[7],C=r[2],b=r[5],T=r[8];return s[0]=a*_+o*y+l*C,s[3]=a*d+o*v+l*b,s[6]=a*p+o*x+l*T,s[1]=c*_+h*y+u*C,s[4]=c*d+h*v+u*b,s[7]=c*p+h*x+u*T,s[2]=f*_+m*y+g*C,s[5]=f*d+m*v+g*b,s[8]=f*p+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=e*u+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new Ut;function Xh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bf(){const n=Js("canvas");return n.style.display="block",n}const Jl={};function Or(n){n in Jl||(Jl[n]=!0,console.warn(n))}function Hf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Gf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xe?ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ql=[.64,.33,.3,.6,.15,.06],tc=[.2126,.7152,.0722],ec=[.3127,.329],nc=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ni]:{primaries:Ql,whitePoint:ec,transfer:ca,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:tc,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:Ql,whitePoint:ec,transfer:ee,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:tc,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let zi;class Wf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Js("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xf=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ta(r[a].image)):s.push(Ta(r[a]))}else s=Ta(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qf=0;class Ne extends Mr{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Gn,r=Gn,s=Ae,a=ci,o=fn,l=Yn,c=Ne.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ts(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xr:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xr:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Ih;Ne.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(m+1)/2,C=(p+1)/2,b=(h+f)/4,T=(u+_)/4,P=(g+d)/4;return v>x&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=T/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ne(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends $f{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $h extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yf extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let d=1-o;const p=l*f+c*m+h*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,p*y);d=Math.sin(d*b)/C,o=Math.sin(o*b)/C}const x=o*y;if(l=l*d+f*x,c=c*d+m*x,h=h*d+g*x,u=u*d+_*x,d===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,i=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new q,rc=new es;class ns{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cs.copy(i.boundingBox)),cs.applyMatrix4(t.matrixWorld),this.union(cs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),hs.subVectors(this.max,wr),Bi.subVectors(t.a,wr),Hi.subVectors(t.b,wr),Gi.subVectors(t.c,wr),ti.subVectors(Hi,Bi),ei.subVectors(Gi,Hi),_i.subVectors(Bi,Gi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-_i.z,_i.y,ti.z,0,-ti.x,ei.z,0,-ei.x,_i.z,0,-_i.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-_i.y,_i.x,0];return!Aa(e,Bi,Hi,Gi,hs)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Bi,Hi,Gi,hs))?!1:(us.crossVectors(ti,ei),e=[us.x,us.y,us.z],Aa(e,Bi,Hi,Gi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new q,new q,new q,new q,new q,new q,new q,new q],an=new q,cs=new ns,Bi=new q,Hi=new q,Gi=new q,ti=new q,ei=new q,_i=new q,wr=new q,hs=new q,us=new q,vi=new q;function Aa(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jf=new ns,Ar=new q,Ra=new q;class yl{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):jf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Ra)),this.expandByPoint(Ar.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new q,Ca=new q,fs=new q,ni=new q,Pa=new q,ds=new q,Da=new q;class Yh{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ca.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ca);const s=t.distanceTo(e)*.5,a=-this.direction.dot(fs),o=ni.dot(this.direction),l=-ni.dot(fs),c=ni.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ca).addScaledVector(fs,f),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,r,s){Pa.subVectors(e,t),ds.subVectors(i,t),Da.crossVectors(Pa,ds);let a=this.direction.dot(Da),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(ds.crossVectors(ni,ds));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(ni));if(c<0||l+c>a)return null;const h=-o*ni.dot(Da);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,a,o,l,c,h,u,f,m,g,_,d){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,u,f,m,g,_,d)}set(t,e,i,r,s,a,o,l,c,h,u,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zf,t,Kf)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),ii.crossVectors(i,Ve),ii.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),ii.crossVectors(i,Ve)),ii.normalize(),ps.crossVectors(Ve,ii),r[0]=ii.x,r[4]=ps.x,r[8]=Ve.x,r[1]=ii.y,r[5]=ps.y,r[9]=Ve.y,r[2]=ii.z,r[6]=ps.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],d=i[10],p=i[14],y=i[3],v=i[7],x=i[11],C=i[15],b=r[0],T=r[4],P=r[8],S=r[12],M=r[1],A=r[5],N=r[9],L=r[13],I=r[2],D=r[6],H=r[10],$=r[14],V=r[3],B=r[7],Y=r[11],K=r[15];return s[0]=a*b+o*M+l*I+c*V,s[4]=a*T+o*A+l*D+c*B,s[8]=a*P+o*N+l*H+c*Y,s[12]=a*S+o*L+l*$+c*K,s[1]=h*b+u*M+f*I+m*V,s[5]=h*T+u*A+f*D+m*B,s[9]=h*P+u*N+f*H+m*Y,s[13]=h*S+u*L+f*$+m*K,s[2]=g*b+_*M+d*I+p*V,s[6]=g*T+_*A+d*D+p*B,s[10]=g*P+_*N+d*H+p*Y,s[14]=g*S+_*L+d*$+p*K,s[3]=y*b+v*M+x*I+C*V,s[7]=y*T+v*A+x*D+C*B,s[11]=y*P+v*N+x*H+C*Y,s[15]=y*S+v*L+x*$+C*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*u-r*c*u-s*o*f+i*c*f+r*o*m-i*l*m)+_*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*h-s*l*h)+d*(+e*c*u-e*o*m-s*a*u+i*a*m+s*o*h-i*c*h)+p*(-r*o*h-e*l*u+e*o*f+r*a*u-i*a*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],y=u*d*c-_*f*c+_*l*m-o*d*m-u*l*p+o*f*p,v=g*f*c-h*d*c-g*l*m+a*d*m+h*l*p-a*f*p,x=h*_*c-g*u*c+g*o*m-a*_*m-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*f+a*_*f+h*o*d-a*u*d,b=e*y+i*v+r*x+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(_*f*s-u*d*s-_*r*m+i*d*m+u*r*p-i*f*p)*T,t[2]=(o*d*s-_*l*s+_*r*c-i*d*c-o*r*p+i*l*p)*T,t[3]=(u*l*s-o*f*s-u*r*c+i*f*c+o*r*m-i*l*m)*T,t[4]=v*T,t[5]=(h*d*s-g*f*s+g*r*m-e*d*m-h*r*p+e*f*p)*T,t[6]=(g*l*s-a*d*s-g*r*c+e*d*c+a*r*p-e*l*p)*T,t[7]=(a*f*s-h*l*s+h*r*c-e*f*c-a*r*m+e*l*m)*T,t[8]=x*T,t[9]=(g*u*s-h*_*s-g*i*m+e*_*m+h*i*p-e*u*p)*T,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*m-e*o*m)*T,t[12]=C*T,t[13]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*d+e*u*d)*T,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*d-e*o*d)*T,t[15]=(a*u*r-h*o*r+h*i*l-e*u*l-a*i*f+e*o*f)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,m=s*h,g=s*u,_=a*h,d=a*u,p=o*u,y=l*c,v=l*h,x=l*u,C=i.x,b=i.y,T=i.z;return r[0]=(1-(_+p))*C,r[1]=(m+x)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(m-x)*b,r[5]=(1-(f+p))*b,r[6]=(d+y)*b,r[7]=0,r[8]=(g+v)*T,r[9]=(d-y)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const c=1/s,h=1/a,u=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Wn){const l=this.elements,c=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let m,g;if(o===Wn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ks)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Wn){const l=this.elements,c=1/(e-t),h=1/(i-r),u=1/(a-s),f=(e+t)*c,m=(i+r)*h;let g,_;if(o===Wn)g=(a+s)*u,_=-2*u;else if(o===Ks)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vi=new q,on=new ue,Zf=new q(0,0,0),Kf=new q(1,1,1),ii=new q,ps=new q,Ve=new q,sc=new ue,ac=new es;class jn{constructor(t=0,e=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jf=0;const oc=new q,Wi=new es,Ln=new ue,ms=new q,Rr=new q,Qf=new q,td=new es,lc=new q(1,0,0),cc=new q(0,1,0),hc=new q(0,0,1),uc={type:"added"},ed={type:"removed"},Xi={type:"childadded",child:null},La={type:"childremoved",child:null};class qe extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new q,e=new jn,i=new es,r=new q(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ut}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ms.copy(t):ms.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Rr,ms,this.up):Ln.lookAt(ms,Rr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ed),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}qe.DEFAULT_UP=new q(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new q,In=new q,Ia=new q,Un=new q,qi=new q,$i=new q,fc=new q,Ua=new q,Na=new q,Fa=new q,Oa=new me,ka=new me,za=new me;class hn{constructor(t=new q,e=new q,i=new q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),In.subVectors(i,e),Ia.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(In),l=ln.dot(Ia),c=In.dot(In),h=In.dot(Ia),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Oa.setScalar(0),ka.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),za.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Oa,s.x),a.addScaledVector(ka,s.y),a.addScaledVector(za,s.z),a}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),In.subVectors(t,e),ln.cross(In).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),$i.subVectors(s,i),Ua.subVectors(t,i);const l=qi.dot(Ua),c=$i.dot(Ua);if(l<=0&&c<=0)return e.copy(i);Na.subVectors(t,r);const h=qi.dot(Na),u=$i.dot(Na);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(qi,a);Fa.subVectors(t,s);const m=qi.dot(Fa),g=$i.dot(Fa);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector($i,o);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return fc.subVectors(s,r),o=(u-h)/(u-h+(m-g)),e.copy(r).addScaledVector(fc,o);const p=1/(d+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(qi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Ba(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=zf(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ba(a,s,t+1/3),this.g=Ba(a,s,t),this.b=Ba(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=jh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return qt.fromWorkingColorSpace(De.copy(this),t),Math.round(Be(De.r*255,0,255))*65536+Math.round(Be(De.g*255,0,255))*256+Math.round(Be(De.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(De.copy(this),e);const i=De.r,r=De.g,s=De.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Qe){qt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,r=De.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(gs);const i=ba(ri.h,gs.h,e),r=ba(ri.s,gs.s,e),s=ba(ri.l,gs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new jt;jt.NAMES=jh;let nd=0;class ha extends Mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ts(),this.name="",this.blending=sr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ho&&(i.blendSrc=this.blendSrc),this.blendDst!==uo&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zh extends ha{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new q,_s=new Zt;class Le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class Kh extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Jh extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Di extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let id=0;const Ze=new ue,Ha=new qe,Yi=new q,We=new ns,Cr=new ns,we=new q;class Kn extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xh(t)?Jh:Kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Di(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];We.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(We.min,Cr.min),We.expandByPoint(we),we.addVectors(We.max,Cr.max),We.expandByPoint(we)):(We.expandByPoint(Cr.min),We.expandByPoint(Cr.max))}We.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),we.add(Yi)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new q,l[P]=new q;const c=new q,h=new q,u=new q,f=new Zt,m=new Zt,g=new Zt,_=new q,d=new q;function p(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(d),l[S].add(d),l[M].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],A=M.start,N=M.count;for(let L=A,I=A+N;L<I;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new q,x=new q,C=new q,b=new q;function T(P){C.fromBufferAttribute(r,P),b.copy(C);const S=o[P];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(b,S);const A=x.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,A)}for(let P=0,S=y.length;P<S;++P){const M=y[P],A=M.start,N=M.count;for(let L=A,I=A+N;L<I;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[m++]}return new Le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new ue,xi=new Yh,vs=new yl,pc=new q,xs=new q,ys=new q,Ms=new q,Ga=new q,Ss=new q,mc=new q,bs=new q;class en extends qe{constructor(t=new Kn,e=new Zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Ga.fromBufferAttribute(u,t),a?Ss.addScaledVector(Ga,h):Ss.addScaledVector(Ga.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(vs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(vs,pc)===null||xi.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(dc.copy(s).invert(),xi.copy(t.ray).applyMatrix4(dc),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,C=v;x<C;x+=3){const b=o.getX(x),T=o.getX(x+1),P=o.getX(x+2);r=Es(this,p,t,i,c,h,u,b,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=o.getX(d),v=o.getX(d+1),x=o.getX(d+2);r=Es(this,a,t,i,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,C=v;x<C;x+=3){const b=x,T=x+1,P=x+2;r=Es(this,p,t,i,c,h,u,b,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=d,v=d+1,x=d+2;r=Es(this,a,t,i,c,h,u,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function rd(n,t,e,i,r,s,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===$n,o),l===null)return null;bs.copy(o),bs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:n}}function Es(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,xs),n.getVertexPosition(l,ys),n.getVertexPosition(c,Ms);const h=rd(n,t,e,i,xs,ys,Ms,mc);if(h){const u=new q;hn.getBarycoord(mc,xs,ys,Ms,u),r&&(h.uv=hn.getInterpolatedAttribute(r,o,l,c,u,new Zt)),s&&(h.uv1=hn.getInterpolatedAttribute(s,o,l,c,u,new Zt)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};hn.getNormal(xs,ys,Ms,f.normal),h.face=f,h.barycoord=u}return h}class is extends Kn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(u,2));function g(_,d,p,y,v,x,C,b,T,P,S){const M=x/T,A=C/P,N=x/2,L=C/2,I=b/2,D=T+1,H=P+1;let $=0,V=0;const B=new q;for(let Y=0;Y<H;Y++){const K=Y*A-L;for(let st=0;st<D;st++){const vt=st*M-N;B[_]=vt*y,B[d]=K*v,B[p]=I,c.push(B.x,B.y,B.z),B[_]=0,B[d]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(st/T),u.push(1-Y/P),$+=1}}for(let Y=0;Y<P;Y++)for(let K=0;K<T;K++){const st=f+K+D*Y,vt=f+K+D*(Y+1),F=f+(K+1)+D*(Y+1),j=f+(K+1)+D*Y;l.push(st,vt,j),l.push(vt,F,j),V+=6}o.addGroup(m,V,S),m+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=vr(n[e]);for(const r in i)t[r]=i[r]}return t}function sd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ad={clone:vr,merge:Ie};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends ha{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tu extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new q,gc=new Zt,_c=new Zt;class tn extends tu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,gc,_c),e.subVectors(_c,gc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Zi=1;class cd extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ji,Zi,t,e);r.layers=this.layers,this.add(r);const s=new tn(ji,Zi,t,e);s.layers=this.layers,this.add(s);const a=new tn(ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new tn(ji,Zi,t,e);o.layers=this.layers,this.add(o);const l=new tn(ji,Zi,t,e);l.layers=this.layers,this.add(l);const c=new tn(ji,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eu extends Ne{constructor(t,e,i,r,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new eu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new is(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:ui});s.uniforms.tEquirect.value=e;const a=new en(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ae),new cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Va=new q,ud=new q,fd=new Ut;class Ei{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Va.subVectors(i,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||fd.getNormalMatrix(t),r=this.coplanarPoint(Va).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new yl,Ts=new q;class nu{constructor(t=new Ei,e=new Ei,i=new Ei,r=new Ei,s=new Ei,a=new Ei){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,d-m,x-p).normalize(),i[1].setComponents(l+s,f+c,d+m,x+p).normalize(),i[2].setComponents(l+a,f+h,d+g,x+y).normalize(),i[3].setComponents(l-a,f-h,d-g,x-y).normalize(),i[4].setComponents(l-o,f-u,d-_,x-v).normalize(),e===Wn)i[5].setComponents(l+o,f+u,d+_,x+v).normalize();else if(e===Ks)i[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ts.x=r.normal.x>0?t.max.x:t.min.x,Ts.y=r.normal.y>0?t.max.y:t.min.y,Ts.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function dd(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ua extends Kn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<h;p++){const y=p*f-a;for(let v=0;v<c;v++){const x=v*u-s;g.push(x,-y,0),_.push(0,0,1),d.push(v/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const v=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),b=y+1+c*p;m.push(v,x,b),m.push(x,C,b)}this.setIndex(m),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,up=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,D0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,I0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,B0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:bd,begin_vertex:Ed,beginnormal_vertex:Td,bsdfs:wd,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ld,color_fragment:Id,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:kd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Bd,displacementmap_vertex:Hd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Yd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:ap,envmap_vertex:Zd,fog_vertex:Kd,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:tp,gradientmap_pars_fragment:ep,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:rp,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:hp,lights_physical_fragment:up,lights_physical_pars_fragment:fp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:bp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:Tp,morphinstance_vertex:wp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:Dp,normal_fragment_maps:Lp,normal_pars_fragment:Ip,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Bp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:t0,skinning_vertex:e0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:r0,tonemapping_fragment:s0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:u0,worldpos_vertex:f0,background_vert:d0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:v0,depth_vert:x0,depth_frag:y0,distanceRGBA_vert:M0,distanceRGBA_frag:S0,equirect_vert:b0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:w0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:D0,meshmatcap_frag:L0,meshnormal_vert:I0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:F0,meshphysical_vert:O0,meshphysical_frag:k0,meshtoon_vert:z0,meshtoon_frag:B0,points_vert:H0,points_frag:G0,shadow_vert:V0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},lt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Sn={basic:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ie([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ie([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ie([lt.points,lt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ie([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ie([lt.common,lt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ie([lt.sprite,lt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ie([lt.common,lt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ie([lt.lights,lt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Sn.physical={uniforms:Ie([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ws={r:0,b:0,g:0},Mi=new jn,$0=new ue;function Y0(n,t,e,i,r,s,a){const o=new jt(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new en(new is(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:vr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Mi)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==ee,(u!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new en(new ua(2,2),new wn({name:"BackgroundMaterial",uniforms:vr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(ws,Qh(n)),i.buffers.color.setClear(ws.r,ws.g,ws.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:d}}function j0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,A,N,L,I){let D=!1;const H=u(L,N,A);s!==H&&(s=H,c(s.object)),D=m(M,L,N,I),D&&g(M,L,N,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,x(M,A,N,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,N){const L=N.wireframe===!0;let I=i[M.id];I===void 0&&(I={},i[M.id]=I);let D=I[A.id];D===void 0&&(D={},I[A.id]=D);let H=D[L];return H===void 0&&(H=f(l()),D[L]=H),H}function f(M){const A=[],N=[],L=[];for(let I=0;I<e;I++)A[I]=0,N[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:L,object:M,attributes:{},index:null}}function m(M,A,N,L){const I=s.attributes,D=A.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){const Y=I[V];let K=D[V];if(K===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;H++}return s.attributesNum!==H||s.index!==L}function g(M,A,N,L){const I={},D=A.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){let Y=D[V];Y===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),I[V]=K,H++}s.attributes=I,s.attributesNum=H,s.index=L}function _(){const M=s.newAttributes;for(let A=0,N=M.length;A<N;A++)M[A]=0}function d(M){p(M,0)}function p(M,A){const N=s.newAttributes,L=s.enabledAttributes,I=s.attributeDivisors;N[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),I[M]!==A&&(n.vertexAttribDivisor(M,A),I[M]=A)}function y(){const M=s.newAttributes,A=s.enabledAttributes;for(let N=0,L=A.length;N<L;N++)A[N]!==M[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function v(M,A,N,L,I,D,H){H===!0?n.vertexAttribIPointer(M,A,N,I,D):n.vertexAttribPointer(M,A,N,L,I,D)}function x(M,A,N,L){_();const I=L.attributes,D=N.getAttributes(),H=A.defaultAttributeValues;for(const $ in D){const V=D[$];if(V.location>=0){let B=I[$];if(B===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),B!==void 0){const Y=B.normalized,K=B.itemSize,st=t.get(B);if(st===void 0)continue;const vt=st.buffer,F=st.type,j=st.bytesPerElement,rt=F===n.INT||F===n.UNSIGNED_INT||B.gpuType===pl;if(B.isInterleavedBufferAttribute){const Q=B.data,xt=Q.stride,wt=B.offset;if(Q.isInstancedInterleavedBuffer){for(let Pt=0;Pt<V.locationSize;Pt++)p(V.location+Pt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Pt=0;Pt<V.locationSize;Pt++)d(V.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Pt=0;Pt<V.locationSize;Pt++)v(V.location+Pt,K/V.locationSize,F,Y,xt*j,(wt+K/V.locationSize*Pt)*j,rt)}else{if(B.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,B.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Q=0;Q<V.locationSize;Q++)d(V.location+Q);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Q=0;Q<V.locationSize;Q++)v(V.location+Q,K/V.locationSize,F,Y,K*j,K/V.locationSize*Q*j,rt)}}else if(H!==void 0){const Y=H[$];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(V.location,Y);break;case 3:n.vertexAttrib3fv(V.location,Y);break;case 4:n.vertexAttrib4fv(V.location,Y);break;default:n.vertexAttrib1fv(V.location,Y)}}}}y()}function C(){P();for(const M in i){const A=i[M];for(const N in A){const L=A[N];for(const I in L)h(L[I].object),delete L[I];delete A[N]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const N in A){const L=A[N];for(const I in L)h(L[I].object),delete L[I];delete A[N]}delete i[M.id]}function T(M){for(const A in i){const N=i[A];if(N[M.id]===void 0)continue;const L=N[M.id];for(const I in L)h(L[I].object),delete L[I];delete N[M.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function Z0(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,i,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function K0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==fn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:b}}function J0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ei,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!d)s?h(null):c();else{const y=s?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=h(g,f,v,m);for(let C=0;C!==v;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Q0(n){let t=new WeakMap;function e(a,o){return o===yo?a.mapping=pr:o===Mo&&(a.mapping=mr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yo||o===Mo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hd(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class ru extends tu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,vc=[.125,.215,.35,.446,.526,.582],Ai=20,Wa=new ru,xc=new jt;let Xa=null,qa=0,$a=0,Ya=!1;const Ti=(1+Math.sqrt(5))/2,Ki=1/Ti,yc=[new q(-Ti,Ki,0),new q(Ti,Ki,0),new q(-Ki,0,Ti),new q(Ki,0,Ti),new q(0,Ti,-Ki),new q(0,Ti,Ki),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,$a),this._renderer.xr.enabled=Ya,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Qr,format:fn,colorSpace:Ni,depthBuffer:!1},r=Sc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(s)),this._blurMaterial=em(s,t,e)}return r}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,i,r){const o=new tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(xc),h.toneMapping=fi,h.autoClear=!1;const m=new Zh({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new en(new is,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(xc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;As(r,y*v,p>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===pr||t.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Wa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yc[(r-s-1)%yc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new en(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):Ai;d>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ai}`);const p=[];let y=0;for(let T=0;T<Ai;++T){const P=T/_,S=Math.exp(-P*P/2);p.push(S),T===0?y+=S:T<d&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],C=3*x*(r>v-nr?r-v+nr:0),b=4*(this._cubeSize-x);As(e,C,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Wa)}}function tm(n){const t=[],e=[],i=[];let r=n;const s=n-nr+1+vc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-nr?l=vc[a-n+nr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),v=new Float32Array(d*g*m),x=new Float32Array(p*g*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,P=b>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(S,_*g*b),v.set(f,d*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const C=new Kn;C.setAttribute("position",new Le(y,_)),C.setAttribute("uv",new Le(v,d)),C.setAttribute("faceIndex",new Le(x,p)),t.push(C),r>nr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Sc(n,t,e){const i=new pi(n,t,e);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function em(n,t,e){const i=new Float32Array(Ai),r=new q(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function bc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ec(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function nm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yo||l===Mo,h=l===pr||l===mr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mc(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new Mc(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function im(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Or("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rm(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const C=y[v+0],b=y[v+1],T=y[v+2];f.push(C,b,b,T,T,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const C=v+0,b=v+1,T=v+2;f.push(C,b,b,T,T,C)}}else return;const d=new(Xh(f)?Jh:Kh)(f,1);d.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,d)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function sm(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),e.update(m,i,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,i,1)}function u(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function am(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function om(n,t,e){const i=new WeakMap,r=new me;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let C=o.attributes.position.count*x,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*b*4*u),P=new $h(T,C,b,u);P.type=Vn,P.needsUpdate=!0;const S=x*4;for(let A=0;A<u;A++){const N=p[A],L=y[A],I=v[A],D=C*b*4*A;for(let H=0;H<N.count;H++){const $=H*S;g===!0&&(r.fromBufferAttribute(N,H),T[D+$+0]=r.x,T[D+$+1]=r.y,T[D+$+2]=r.z,T[D+$+3]=0),_===!0&&(r.fromBufferAttribute(L,H),T[D+$+4]=r.x,T[D+$+5]=r.y,T[D+$+6]=r.z,T[D+$+7]=0),d===!0&&(r.fromBufferAttribute(I,H),T[D+$+8]=r.x,T[D+$+9]=r.y,T[D+$+10]=r.z,T[D+$+11]=I.itemSize===4?r.w:1)}}f={count:u,texture:P,size:new Zt(C,b)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function lm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class su extends Ne{constructor(t,e,i,r,s,a,o,l,c,h=ar){if(h!==ar&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=Li),i===void 0&&h===_r&&(i=gr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const au=new Ne,Tc=new su(1,1),ou=new $h,lu=new Yf,cu=new eu,wc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=wc[r];if(s===void 0&&(s=new Float32Array(r),wc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fa(n,t){let e=Ac[t];e===void 0&&(e=new Int32Array(t),Ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Pc.set(i),n.uniformMatrix2fv(this.addr,!1,Pc),Te(e,i)}}function pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Cc.set(i),n.uniformMatrix3fv(this.addr,!1,Cc),Te(e,i)}}function mm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Rc.set(i),n.uniformMatrix4fv(this.addr,!1,Rc),Te(e,i)}}function gm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function Em(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Tc.compareFunction=Wh,s=Tc):s=au,e.setTexture2D(t||s,r)}function Tm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||lu,r)}function wm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||cu,r)}function Am(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ou,r)}function Rm(n){switch(n){case 5126:return cm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(n,t){n.uniform1fv(this.addr,t)}function Pm(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function Dm(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function Lm(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function Im(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Um(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nm(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Fm(n,t){n.uniform1iv(this.addr,t)}function Om(n,t){n.uniform2iv(this.addr,t)}function km(n,t){n.uniform3iv(this.addr,t)}function zm(n,t){n.uniform4iv(this.addr,t)}function Bm(n,t){n.uniform1uiv(this.addr,t)}function Hm(n,t){n.uniform2uiv(this.addr,t)}function Gm(n,t){n.uniform3uiv(this.addr,t)}function Vm(n,t){n.uniform4uiv(this.addr,t)}function Wm(n,t,e){const i=this.cache,r=t.length,s=fa(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||au,s[a])}function Xm(n,t,e){const i=this.cache,r=t.length,s=fa(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||lu,s[a])}function qm(n,t,e){const i=this.cache,r=t.length,s=fa(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||cu,s[a])}function $m(n,t,e){const i=this.cache,r=t.length,s=fa(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ou,s[a])}function Ym(n){switch(n){case 5126:return Cm;case 35664:return Pm;case 35665:return Dm;case 35666:return Lm;case 35674:return Im;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return km;case 35669:case 35673:return zm;case 5125:return Bm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return $m}}class jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Zm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ym(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Dc(n,t){n.seq.push(t),n.map[t.id]=t}function Jm(n,t,e){const i=n.name,r=i.length;for(ja.lastIndex=0;;){const s=ja.exec(i),a=ja.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dc(e,c===void 0?new jm(o,n,t):new Zm(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Km(o),Dc(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Jm(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Lc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Qm=37297;let tg=0;function eg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ic=new Ut;function ng(n){qt._getMatrix(Ic,qt.workingColorSpace,n);const t=`mat3( ${Ic.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case ca:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Uc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+eg(n.getShaderSource(t),a)}else return r}function ig(n,t){const e=ng(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(n,t){let e;switch(t){case yf:e="Linear";break;case Mf:e="Reinhard";break;case Sf:e="Cineon";break;case bf:e="ACESFilmic";break;case Tf:e="AgX";break;case wf:e="Neutral";break;case Ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rs=new q;function sg(){qt.getLuminanceCoefficients(Rs);const n=Rs.x.toFixed(4),t=Rs.y.toFixed(4),e=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function og(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function kr(n){return n!==""}function Nc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(n){return n.replace(cg,ug)}const hg=new Map;function ug(n,t){let e=kt[t];if(e===void 0){const i=hg.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zo(e)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(n){return n.replace(fg,dg)}function dg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function pg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case vf:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function vg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pg(e),c=mg(e),h=gg(e),u=_g(e),f=vg(e),m=ag(e),g=og(s),_=r.createProgram();let d,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(d=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?kt.tonemapping_pars_fragment:"",e.toneMapping!==fi?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Zo(a),a=Nc(a,e),a=Fc(a,e),o=Zo(o),o=Nc(o,e),o=Fc(o,e),a=Oc(a),o=Oc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+d+a,x=y+p+o,C=Lc(r,r.VERTEX_SHADER,v),b=Lc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,C),r.attachShader(_,b),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(C).trim(),I=r.getShaderInfoLog(b).trim();let D=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,b);else{const $=Uc(r,C,"vertex"),V=Uc(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+$+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||I==="")&&(H=!1);H&&(A.diagnostics={runnable:D,programLog:N,vertexShader:{log:L,prefix:d},fragmentShader:{log:I,prefix:p}})}r.deleteShader(C),r.deleteShader(b),P=new Ys(r,_),S=lg(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Qm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Sg(t),e.set(t,i)),i}}class Sg{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}}function bg(n,t,e,i,r,s,a){const o=new Ml,l=new Mg,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,M,A,N,L){const I=N.fog,D=L.geometry,H=S.isMeshStandardMaterial?N.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),V=$&&$.mapping===la?$.image.height:null,B=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=Y!==void 0?Y.length:0;let st=0;D.morphAttributes.position!==void 0&&(st=1),D.morphAttributes.normal!==void 0&&(st=2),D.morphAttributes.color!==void 0&&(st=3);let vt,F,j,rt;if(B){const Qt=Sn[B];vt=Qt.vertexShader,F=Qt.fragmentShader}else vt=S.vertexShader,F=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),rt=l.getFragmentShaderID(S);const Q=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,Pt=L.isBatchedMesh===!0,se=!!S.map,zt=!!S.matcap,ge=!!$,z=!!S.aoMap,Ye=!!S.lightMap,Gt=!!S.bumpMap,Vt=!!S.normalMap,Rt=!!S.displacementMap,ae=!!S.emissiveMap,At=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,G=S.clearcoat>0,tt=S.dispersion>0,it=S.iridescence>0,J=S.sheen>0,bt=S.transmission>0,ht=E&&!!S.anisotropyMap,mt=G&&!!S.clearcoatMap,Xt=G&&!!S.clearcoatNormalMap,at=G&&!!S.clearcoatRoughnessMap,gt=it&&!!S.iridescenceMap,Ct=it&&!!S.iridescenceThicknessMap,Dt=J&&!!S.sheenColorMap,_t=J&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Ot=!!S.specularColorMap,ie=!!S.specularIntensityMap,U=bt&&!!S.transmissionMap,ct=bt&&!!S.thicknessMap,Z=!!S.gradientMap,et=!!S.alphaMap,dt=S.alphaTest>0,ut=!!S.alphaHash,Nt=!!S.extensions;let fe=fi;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Ce={shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:vt,fragmentShader:F,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ni,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:zt,envMap:ge,envMapMode:ge&&$.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:Ye,bumpMap:Gt,normalMap:Vt,displacementMap:f&&Rt,emissiveMap:ae,normalMapObjectSpace:Vt&&S.normalMapType===Df,normalMapTangentSpace:Vt&&S.normalMapType===Pf,metalnessMap:At,roughnessMap:R,anisotropy:E,anisotropyMap:ht,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:at,dispersion:tt,iridescence:it,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:J,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:ie,transmission:bt,transmissionMap:U,thicknessMap:ct,gradientMap:Z,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:dt,alphaHash:ut,combine:S.combine,mapUv:se&&_(S.map.channel),aoMapUv:z&&_(S.aoMap.channel),lightMapUv:Ye&&_(S.lightMap.channel),bumpMapUv:Gt&&_(S.bumpMap.channel),normalMapUv:Vt&&_(S.normalMap.channel),displacementMapUv:Rt&&_(S.displacementMap.channel),emissiveMapUv:ae&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:Wt&&_(S.specularMap.channel),specularColorMapUv:Ot&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:et&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Vt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(se||et),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:st,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bn,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let A;if(M){const N=Sn[M];A=ad.clone(N.uniforms)}else A=S.uniforms;return A}function C(S,M){let A;for(let N=0,L=h.length;N<L;N++){const I=h[N];if(I.cacheKey===M){A=I,++A.usedTimes;break}}return A===void 0&&(A=new xg(n,M,S,s),h.push(A)),A}function b(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:P}}function Eg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Tg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Bc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,f,m,g,_,d){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=d),t++,p}function o(u,f,m,g,_,d){const p=a(u,f,m,g,_,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(u,f,m,g,_,d){const p=a(u,f,m,g,_,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Tg),i.length>1&&i.sort(f||zc),r.length>1&&r.sort(f||zc)}function h(){for(let u=t,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function wg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Bc,n.set(i,[a])):r>=s.length?(a=new Bc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ag(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new jt};break;case"SpotLight":e={position:new q,direction:new q,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[t.id]=e,e}}}function Rg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Cg=0;function Pg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Dg(n){const t=new Ag,e=Rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new ue,a=new ue;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,v=0,x=0,C=0,b=0,T=0;c.sort(Pg);for(let S=0,M=c.length;S<M;S++){const A=c[S],N=A.color,L=A.intensity,I=A.distance,D=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*L,u+=N.g*L,f+=N.b*L;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],L);T++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const $=A.shadow,V=e.get(A);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=D,i.directionalShadowMatrix[m]=A.shadow.matrix,y++}i.directional[m]=H,m++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(N).multiplyScalar(L),H.distance=I,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[_]=H;const $=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,$.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[_]=$.matrix,A.castShadow){const V=e.get(A);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=D,x++}_++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(N).multiplyScalar(L),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[d]=H,d++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const $=A.shadow,V=e.get(A);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=A.shadow.matrix,v++}i.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(L),H.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[p]=H,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=T,i.version=Cg++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const d=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),u++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),m++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),a.identity(),s.copy(v.matrixWorld),s.premultiply(d),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:i}}function Hc(n){const t=new Dg(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Lg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Hc(n),t.set(r,[o])):s>=a.length?(o=new Hc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Ig extends ha{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends ha{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Og(n,t,e){let i=new nu;const r=new Zt,s=new Zt,a=new me,o=new Ig({depthPacking:Cf}),l=new Ug,c={},h=e.maxTextureSize,u={[$n]:He,[He]:$n,[bn]:bn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(b,T,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=p!==Fn&&this.type===Fn,I=p===Fn&&this.type!==Fn;for(let D=0,H=b.length;D<H;D++){const $=b[D],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const B=V.getFrameExtents();if(r.multiply(B),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,V.mapSize.y=s.y)),V.map===null||L===!0||I===!0){const K=this.type!==Fn?{minFilter:pn,magFilter:pn}:{};V.map!==null&&V.map.dispose(),V.map=new pi(r.x,r.y,K),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Y=V.getViewportCount();for(let K=0;K<Y;K++){const st=V.getViewport(K);a.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),N.viewport(a),V.updateMatrices($,K),i=V.getFrustum(),x(T,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Fn&&y(V,P),V.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(S,M,A)};function y(b,T){const P=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,P,m,_,null)}function v(b,T,P,S){let M=null;const A=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=M.uuid,L=T.uuid;let I=c[N];I===void 0&&(I={},c[N]=I);let D=I[L];D===void 0&&(D=M.clone(),I[L]=D,T.addEventListener("dispose",C)),M=D}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Fn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=P}return M}function x(b,T,P,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Fn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const L=t.update(b),I=b.material;if(Array.isArray(I)){const D=L.groups;for(let H=0,$=D.length;H<$;H++){const V=D[H],B=I[V.materialIndex];if(B&&B.visible){const Y=v(b,B,S,M);b.onBeforeShadow(n,b,T,P,L,Y,V),n.renderBufferDirect(P,null,L,Y,b,V),b.onAfterShadow(n,b,T,P,L,Y,V)}}}else if(I.visible){const D=v(b,I,S,M);b.onBeforeShadow(n,b,T,P,L,D,null),n.renderBufferDirect(P,null,L,D,b,null),b.onAfterShadow(n,b,T,P,L,D,null)}}const N=b.children;for(let L=0,I=N.length;L<I;L++)x(N[L],T,P,S,M)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const kg={[fo]:po,[mo]:vo,[go]:xo,[dr]:_o,[po]:fo,[vo]:mo,[xo]:go,[_o]:dr};function zg(n,t){function e(){let U=!1;const ct=new me;let Z=null;const et=new me(0,0,0,0);return{setMask:function(dt){Z!==dt&&!U&&(n.colorMask(dt,dt,dt,dt),Z=dt)},setLocked:function(dt){U=dt},setClear:function(dt,ut,Nt,fe,Ce){Ce===!0&&(dt*=fe,ut*=fe,Nt*=fe),ct.set(dt,ut,Nt,fe),et.equals(ct)===!1&&(n.clearColor(dt,ut,Nt,fe),et.copy(ct))},reset:function(){U=!1,Z=null,et.set(-1,0,0,0)}}}function i(){let U=!1,ct=!1,Z=null,et=null,dt=null;return{setReversed:function(ut){if(ct!==ut){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const fe=dt;dt=null,this.setClear(fe)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?Q(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(ut){Z!==ut&&!U&&(n.depthMask(ut),Z=ut)},setFunc:function(ut){if(ct&&(ut=kg[ut]),et!==ut){switch(ut){case fo:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case vo:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=ut}},setLocked:function(ut){U=ut},setClear:function(ut){dt!==ut&&(ct&&(ut=1-ut),n.clearDepth(ut),dt=ut)},reset:function(){U=!1,Z=null,et=null,dt=null,ct=!1}}}function r(){let U=!1,ct=null,Z=null,et=null,dt=null,ut=null,Nt=null,fe=null,Ce=null;return{setTest:function(Qt){U||(Qt?Q(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!U&&(n.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,rn,Rn){(Z!==Qt||et!==rn||dt!==Rn)&&(n.stencilFunc(Qt,rn,Rn),Z=Qt,et=rn,dt=Rn)},setOp:function(Qt,rn,Rn){(ut!==Qt||Nt!==rn||fe!==Rn)&&(n.stencilOp(Qt,rn,Rn),ut=Qt,Nt=rn,fe=Rn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Ce!==Qt&&(n.clearStencil(Qt),Ce=Qt)},reset:function(){U=!1,ct=null,Z=null,et=null,dt=null,ut=null,Nt=null,fe=null,Ce=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,C=null,b=null,T=new jt(0,0,0),P=0,S=!1,M=null,A=null,N=null,L=null,I=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let B=null,Y={};const K=n.getParameter(n.SCISSOR_BOX),st=n.getParameter(n.VIEWPORT),vt=new me().fromArray(K),F=new me().fromArray(st);function j(U,ct,Z,et){const dt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(U,ut),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<Z;Nt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(ct+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ut}const rt={};rt[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),rt[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),rt[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(dr),Gt(!1),Vt(Xl),Q(n.CULL_FACE),z(ui);function Q(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function xt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function wt(U,ct){return u[U]!==ct?(n.bindFramebuffer(U,ct),u[U]=ct,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Pt(U,ct){let Z=m,et=!1;if(U){Z=f.get(ct),Z===void 0&&(Z=[],f.set(ct,Z));const dt=U.textures;if(Z.length!==dt.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Nt=dt.length;ut<Nt;ut++)Z[ut]=n.COLOR_ATTACHMENT0+ut;Z.length=dt.length,et=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,et=!0);et&&n.drawBuffers(Z)}function se(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const zt={[wi]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[ef]:n.FUNC_REVERSE_SUBTRACT};zt[nf]=n.MIN,zt[rf]=n.MAX;const ge={[sf]:n.ZERO,[af]:n.ONE,[of]:n.SRC_COLOR,[ho]:n.SRC_ALPHA,[df]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[cf]:n.DST_ALPHA,[lf]:n.ONE_MINUS_SRC_COLOR,[uo]:n.ONE_MINUS_SRC_ALPHA,[ff]:n.ONE_MINUS_DST_COLOR,[hf]:n.ONE_MINUS_DST_ALPHA,[pf]:n.CONSTANT_COLOR,[mf]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function z(U,ct,Z,et,dt,ut,Nt,fe,Ce,Qt){if(U===ui){_===!0&&(xt(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),U!==Qu){if(U!==d||Qt!==S){if((p!==wi||x!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,x=wi),Qt)switch(U){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,C=null,b=null,T.set(0,0,0),P=0,d=U,S=Qt}return}dt=dt||ct,ut=ut||Z,Nt=Nt||et,(ct!==p||dt!==x)&&(n.blendEquationSeparate(zt[ct],zt[dt]),p=ct,x=dt),(Z!==y||et!==v||ut!==C||Nt!==b)&&(n.blendFuncSeparate(ge[Z],ge[et],ge[ut],ge[Nt]),y=Z,v=et,C=ut,b=Nt),(fe.equals(T)===!1||Ce!==P)&&(n.blendColor(fe.r,fe.g,fe.b,Ce),T.copy(fe),P=Ce),d=U,S=!1}function Ye(U,ct){U.side===bn?xt(n.CULL_FACE):Q(n.CULL_FACE);let Z=U.side===He;ct&&(Z=!Z),Gt(Z),U.blending===sr&&U.transparent===!1?z(ui):z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const et=U.stencilWrite;o.setTest(et),et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function Vt(U){U!==Zu?(Q(n.CULL_FACE),U!==A&&(U===Xl?n.cullFace(n.BACK):U===Ku?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),A=U}function Rt(U){U!==N&&(H&&n.lineWidth(U),N=U)}function ae(U,ct,Z){U?(Q(n.POLYGON_OFFSET_FILL),(L!==ct||I!==Z)&&(n.polygonOffset(ct,Z),L=ct,I=Z)):xt(n.POLYGON_OFFSET_FILL)}function At(U){U?Q(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function R(U){U===void 0&&(U=n.TEXTURE0+D-1),B!==U&&(n.activeTexture(U),B=U)}function E(U,ct,Z){Z===void 0&&(B===null?Z=n.TEXTURE0+D-1:Z=B);let et=Y[Z];et===void 0&&(et={type:void 0,texture:void 0},Y[Z]=et),(et.type!==U||et.texture!==ct)&&(B!==Z&&(n.activeTexture(Z),B=Z),n.bindTexture(U,ct||rt[U]),et.type=U,et.texture=ct)}function G(){const U=Y[B];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){vt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),vt.copy(U))}function _t(U){F.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),F.copy(U))}function Wt(U,ct){let Z=c.get(ct);Z===void 0&&(Z=new WeakMap,c.set(ct,Z));let et=Z.get(U);et===void 0&&(et=n.getUniformBlockIndex(ct,U.name),Z.set(U,et))}function Ot(U,ct){const et=c.get(ct).get(U);l.get(ct)!==et&&(n.uniformBlockBinding(ct,et,U.__bindingPointIndex),l.set(ct,et))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,Y={},u={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,C=null,b=null,T=new jt(0,0,0),P=0,S=!1,M=null,A=null,N=null,L=null,I=null,vt.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Q,disable:xt,bindFramebuffer:wt,drawBuffers:Pt,useProgram:se,setBlending:z,setMaterial:Ye,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Rt,setPolygonOffset:ae,setScissorTest:At,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:Xt,texStorage3D:at,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Dt,viewport:_t,reset:ie}}function Gc(n,t,e,i){const r=Bg(i);switch(e){case Oh:return n*t;case zh:return n*t;case Bh:return n*t*2;case Hh:return n*t/r.components*r.byteLength;case _l:return n*t/r.components*r.byteLength;case Gh:return n*t*2/r.components*r.byteLength;case vl:return n*t*2/r.components*r.byteLength;case kh:return n*t*3/r.components*r.byteLength;case fn:return n*t*4/r.components*r.byteLength;case xl:return n*t*4/r.components*r.byteLength;case Vs:case Ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:case wo:return Math.max(n,16)*Math.max(t,8)/4;case bo:case To:return Math.max(n,8)*Math.max(t,8)/2;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $s:case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vh:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $o:case Yo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bg(n){switch(n){case Yn:case Uh:return{byteLength:1,components:1};case qr:case Nh:case Qr:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Li:case pl:case Vn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hg(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):Js("canvas")}function _(R,E,G){let tt=1;const it=At(R);if((it.width>G||it.height>G)&&(tt=G/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(tt*it.width),bt=Math.floor(tt*it.height);u===void 0&&(u=g(J,bt));const ht=E?g(J,bt):u;return ht.width=J,ht.height=bt,ht.getContext("2d").drawImage(R,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+bt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function d(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,E,G,tt,it=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),E===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),E===n.RGBA){const bt=it?ca:qt.getTransfer(tt);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=bt===ee?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,E){let G;return R?E===null||E===Li||E===gr?G=n.DEPTH24_STENCIL8:E===Vn?G=n.DEPTH32F_STENCIL8:E===qr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Li||E===gr?G=n.DEPTH_COMPONENT24:E===Vn?G=n.DEPTH_COMPONENT32F:E===qr&&(G=n.DEPTH_COMPONENT16),G}function C(R,E){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Ae?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&h.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),M(E)}function P(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,tt=f.get(G);if(tt){const it=tt[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(R),Object.keys(tt).length===0&&f.delete(G)}i.remove(R)}function S(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const G=R.source,tt=f.get(G);delete tt[E.__cacheKey],a.memory.textures--}function M(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let it=0;it<E.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(E.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)n.deleteFramebuffer(E.__webglFramebuffer[tt]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let tt=0,it=G.length;tt<it;tt++){const J=i.get(G[tt]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(G[tt])}i.remove(R)}let A=0;function N(){A=0}function L(){const R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function I(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function D(R,E){const G=i.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(G,R,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function H(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){F(G,R,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function $(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){F(G,R,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function V(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){j(G,R,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const B={[Xr]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[So]:n.MIRRORED_REPEAT},Y={[pn]:n.NEAREST,[Af]:n.NEAREST_MIPMAP_NEAREST,[ls]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},K={[Lf]:n.NEVER,[kf]:n.ALWAYS,[If]:n.LESS,[Wh]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Ff]:n.NOTEQUAL};function st(R,E){if(E.type===Vn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ae||E.magFilter===Ma||E.magFilter===ls||E.magFilter===ci||E.minFilter===Ae||E.minFilter===Ma||E.minFilter===ls||E.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,B[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,B[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,B[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Y[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pn||E.minFilter!==ls&&E.minFilter!==ci||E.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function vt(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const tt=E.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const J=I(E);if(J!==R.__cacheKey){it[J]===void 0&&(it[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),it[J].usedTimes++;const bt=it[R.__cacheKey];bt!==void 0&&(it[R.__cacheKey].usedTimes--,bt.usedTimes===0&&S(E)),R.__cacheKey=J,R.__webglTexture=it[J].texture}return G}function F(R,E,G){let tt=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=n.TEXTURE_3D);const it=vt(R,E),J=E.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+G);const bt=i.get(J);if(J.version!==bt.__version||it===!0){e.activeTexture(n.TEXTURE0+G);const ht=qt.getPrimaries(qt.workingColorSpace),mt=E.colorSpace===Xe?null:qt.getPrimaries(E.colorSpace),Xt=E.colorSpace===Xe||ht===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let at=_(E.image,!1,r.maxTextureSize);at=ae(E,at);const gt=s.convert(E.format,E.colorSpace),Ct=s.convert(E.type);let Dt=v(E.internalFormat,gt,Ct,E.colorSpace,E.isVideoTexture);st(tt,E);let _t;const Wt=E.mipmaps,Ot=E.isVideoTexture!==!0,ie=bt.__version===void 0||it===!0,U=J.dataReady,ct=C(E,at);if(E.isDepthTexture)Dt=x(E.format===_r,E.type),ie&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Dt,at.width,at.height,0,gt,Ct,null));else if(E.isDataTexture)if(Wt.length>0){Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,Wt[0].width,Wt[0].height);for(let Z=0,et=Wt.length;Z<et;Z++)_t=Wt[Z],Ot?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,Z,Dt,_t.width,_t.height,0,gt,Ct,_t.data);E.generateMipmaps=!1}else Ot?(ie&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,at.width,at.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,gt,Ct,at.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,at.width,at.height,0,gt,Ct,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Dt,Wt[0].width,Wt[0].height,at.depth);for(let Z=0,et=Wt.length;Z<et;Z++)if(_t=Wt[Z],E.format!==fn)if(gt!==null)if(Ot){if(U)if(E.layerUpdates.size>0){const dt=Gc(_t.width,_t.height,E.format,E.type);for(const ut of E.layerUpdates){const Nt=_t.data.subarray(ut*dt/_t.data.BYTES_PER_ELEMENT,(ut+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,ut,_t.width,_t.height,1,gt,Nt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,at.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Dt,_t.width,_t.height,at.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,_t.width,_t.height,at.depth,gt,Ct,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Dt,_t.width,_t.height,at.depth,0,gt,Ct,_t.data)}else{Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,ct,Dt,Wt[0].width,Wt[0].height);for(let Z=0,et=Wt.length;Z<et;Z++)_t=Wt[Z],E.format!==fn?gt!==null?Ot?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(n.TEXTURE_2D,Z,Dt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(E.isDataArrayTexture)if(Ot){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Dt,at.width,at.height,at.depth),U)if(E.layerUpdates.size>0){const Z=Gc(at.width,at.height,E.format,E.type);for(const et of E.layerUpdates){const dt=at.data.subarray(et*Z/at.data.BYTES_PER_ELEMENT,(et+1)*Z/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,gt,Ct,dt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,gt,Ct,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,gt,Ct,at.data);else if(E.isData3DTexture)Ot?(ie&&e.texStorage3D(n.TEXTURE_3D,ct,Dt,at.width,at.height,at.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,gt,Ct,at.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,gt,Ct,at.data);else if(E.isFramebufferTexture){if(ie)if(Ot)e.texStorage2D(n.TEXTURE_2D,ct,Dt,at.width,at.height);else{let Z=at.width,et=at.height;for(let dt=0;dt<ct;dt++)e.texImage2D(n.TEXTURE_2D,dt,Dt,Z,et,0,gt,Ct,null),Z>>=1,et>>=1}}else if(Wt.length>0){if(Ot&&ie){const Z=At(Wt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Dt,Z.width,Z.height)}for(let Z=0,et=Wt.length;Z<et;Z++)_t=Wt[Z],Ot?U&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,gt,Ct,_t):e.texImage2D(n.TEXTURE_2D,Z,Dt,gt,Ct,_t);E.generateMipmaps=!1}else if(Ot){if(ie){const Z=At(at);e.texStorage2D(n.TEXTURE_2D,ct,Dt,Z.width,Z.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Ct,at)}else e.texImage2D(n.TEXTURE_2D,0,Dt,gt,Ct,at);d(E)&&p(tt),bt.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function j(R,E,G){if(E.image.length!==6)return;const tt=vt(R,E),it=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const J=i.get(it);if(it.version!==J.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const bt=qt.getPrimaries(qt.workingColorSpace),ht=E.colorSpace===Xe?null:qt.getPrimaries(E.colorSpace),mt=E.colorSpace===Xe||bt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let et=0;et<6;et++)!Xt&&!at?gt[et]=_(E.image[et],!0,r.maxCubemapSize):gt[et]=at?E.image[et].image:E.image[et],gt[et]=ae(E,gt[et]);const Ct=gt[0],Dt=s.convert(E.format,E.colorSpace),_t=s.convert(E.type),Wt=v(E.internalFormat,Dt,_t,E.colorSpace),Ot=E.isVideoTexture!==!0,ie=J.__version===void 0||tt===!0,U=it.dataReady;let ct=C(E,Ct);st(n.TEXTURE_CUBE_MAP,E);let Z;if(Xt){Ot&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Wt,Ct.width,Ct.height);for(let et=0;et<6;et++){Z=gt[et].mipmaps;for(let dt=0;dt<Z.length;dt++){const ut=Z[dt];E.format!==fn?Dt!==null?Ot?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,ut.width,ut.height,Dt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,0,0,ut.width,ut.height,Dt,_t,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt,Wt,ut.width,ut.height,0,Dt,_t,ut.data)}}}else{if(Z=E.mipmaps,Ot&&ie){Z.length>0&&ct++;const et=At(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Wt,et.width,et.height)}for(let et=0;et<6;et++)if(at){Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,gt[et].width,gt[et].height,Dt,_t,gt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,gt[et].width,gt[et].height,0,Dt,_t,gt[et].data);for(let dt=0;dt<Z.length;dt++){const Nt=Z[dt].image[et].image;Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,Nt.width,Nt.height,Dt,_t,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,Nt.width,Nt.height,0,Dt,_t,Nt.data)}}else{Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Dt,_t,gt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Wt,Dt,_t,gt[et]);for(let dt=0;dt<Z.length;dt++){const ut=Z[dt];Ot?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,0,0,Dt,_t,ut.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,dt+1,Wt,Dt,_t,ut.image[et])}}}d(E)&&p(n.TEXTURE_CUBE_MAP),J.__version=it.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function rt(R,E,G,tt,it,J){const bt=s.convert(G.format,G.colorSpace),ht=s.convert(G.type),mt=v(G.internalFormat,bt,ht,G.colorSpace),Xt=i.get(E),at=i.get(G);if(at.__renderTarget=E,!Xt.__hasExternalTextures){const gt=Math.max(1,E.width>>J),Ct=Math.max(1,E.height>>J);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,J,mt,gt,Ct,E.depth,0,bt,ht,null):e.texImage2D(it,J,mt,gt,Ct,0,bt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Vt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,at.__webglTexture,0,Gt(E)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,at.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(R,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const tt=E.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,J=x(E.stencilBuffer,it),bt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Gt(E);Vt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,J,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,J,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,R)}else{const tt=E.textures;for(let it=0;it<tt.length;it++){const J=tt[it],bt=s.convert(J.format,J.colorSpace),ht=s.convert(J.type),mt=v(J.internalFormat,bt,ht,J.colorSpace),Xt=Gt(E);G&&Vt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,mt,E.width,E.height):Vt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt,mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,mt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const it=tt.__webglTexture,J=Gt(E);if(E.depthTexture.format===ar)Vt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(E.depthTexture.format===_r)Vt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function wt(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=tt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xt(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=n.createRenderbuffer(),Q(E.__webglDepthbuffer[tt],R,!1);else{const it=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Q(E.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(R,E,G){const tt=i.get(R);E!==void 0&&rt(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&wt(R)}function se(R){const E=R.texture,G=i.get(R),tt=i.get(E);R.addEventListener("dispose",T);const it=R.textures,J=R.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=E.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let mt=0;mt<E.mipmaps.length;mt++)G.__webglFramebuffer[ht][mt]=n.createFramebuffer()}else G.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)G.__webglFramebuffer[ht]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ht=0,mt=it.length;ht<mt;ht++){const Xt=i.get(it[ht]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Vt(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const mt=it[ht];G.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);const Xt=s.convert(mt.format,mt.colorSpace),at=s.convert(mt.type),gt=v(mt.internalFormat,Xt,at,mt.colorSpace,R.isXRRenderTarget===!0),Ct=Gt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,gt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),st(n.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)rt(G.__webglFramebuffer[ht][mt],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else rt(G.__webglFramebuffer[ht],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);d(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,mt=it.length;ht<mt;ht++){const Xt=it[ht],at=i.get(Xt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),st(n.TEXTURE_2D,Xt),rt(G.__webglFramebuffer,R,Xt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),d(Xt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),st(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)rt(G.__webglFramebuffer[mt],R,E,n.COLOR_ATTACHMENT0,ht,mt);else rt(G.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ht,0);d(E)&&p(ht),e.unbindTexture()}R.depthBuffer&&wt(R)}function zt(R){const E=R.textures;for(let G=0,tt=E.length;G<tt;G++){const it=E[G];if(d(it)){const J=y(R),bt=i.get(it).__webglTexture;e.bindTexture(J,bt),p(J),e.unbindTexture()}}}const ge=[],z=[];function Ye(R){if(R.samples>0){if(Vt(R)===!1){const E=R.textures,G=R.width,tt=R.height;let it=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),ht=E.length>1;if(ht)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Xt=i.get(E[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,G,tt,0,0,G,tt,it,n.NEAREST),l===!0&&(ge.length=0,z.length=0,ge.push(n.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(J),z.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Xt=i.get(E[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(r.maxSamples,R.samples)}function Vt(R){const E=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ae(R,E){const G=R.colorSpace,tt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ni&&G!==Xe&&(qt.getTransfer(G)===ee?(tt!==fn||it!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Pt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Vt}function Gg(n,t){function e(i,r=Xe){let s;const a=qt.getTransfer(r);if(i===Yn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uh)return n.BYTE;if(i===Nh)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Oh)return n.ALPHA;if(i===kh)return n.RGB;if(i===fn)return n.RGBA;if(i===zh)return n.LUMINANCE;if(i===Bh)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===Gh)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===Vs||i===Ws||i===Xs||i===qs)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===Eo||i===To||i===wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ao||i===Ro||i===Co)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ao||i===Ro)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Co)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===ko||i===zo||i===Bo||i===Ho||i===Go||i===Vo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Io)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===No)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ko)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ho)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Go)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$s||i===Wo||i===Xo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$s)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vh||i===qo||i===$o||i===Yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===$s)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Vg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zr extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
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

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new wn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yg extends Mr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=new $g,d=e.getContextAttributes();let p=null,y=null;const v=[],x=[],C=new Zt;let b=null;const T=new tn;T.viewport=new me;const P=new tn;P.viewport=new me;const S=[T,P],M=new Vg;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let j=v[F];return j===void 0&&(j=new Za,v[F]=j),j.getTargetRaySpace()},this.getControllerGrip=function(F){let j=v[F];return j===void 0&&(j=new Za,v[F]=j),j.getGripSpace()},this.getHand=function(F){let j=v[F];return j===void 0&&(j=new Za,v[F]=j),j.getHandSpace()};function L(F){const j=x.indexOf(F.inputSource);if(j===-1)return;const rt=v[j];rt!==void 0&&(rt.update(F.inputSource,F.frame,c||a),rt.dispatchEvent({type:F.type,data:F.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",D);for(let F=0;F<v.length;F++){const j=x[F];j!==null&&(x[F]=null,v[F].disconnect(j))}A=null,N=null,_.reset(),t.setRenderTarget(p),m=null,f=null,u=null,r=null,y=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const j={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new pi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let j=null,rt=null,Q=null;d.depth&&(Q=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=d.stencil?_r:ar,rt=d.stencil?gr:Li);const xt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(xt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:fn,type:Yn,depthTexture:new su(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(F){for(let j=0;j<F.removed.length;j++){const rt=F.removed[j],Q=x.indexOf(rt);Q>=0&&(x[Q]=null,v[Q].disconnect(rt))}for(let j=0;j<F.added.length;j++){const rt=F.added[j];let Q=x.indexOf(rt);if(Q===-1){for(let wt=0;wt<v.length;wt++)if(wt>=x.length){x.push(rt),Q=wt;break}else if(x[wt]===null){x[wt]=rt,Q=wt;break}if(Q===-1)break}const xt=v[Q];xt&&xt.connect(rt)}}const H=new q,$=new q;function V(F,j,rt){H.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(rt.matrixWorld);const Q=H.distanceTo($),xt=j.projectionMatrix.elements,wt=rt.projectionMatrix.elements,Pt=xt[14]/(xt[10]-1),se=xt[14]/(xt[10]+1),zt=(xt[9]+1)/xt[5],ge=(xt[9]-1)/xt[5],z=(xt[8]-1)/xt[0],Ye=(wt[8]+1)/wt[0],Gt=Pt*z,Vt=Pt*Ye,Rt=Q/(-z+Ye),ae=Rt*-z;if(j.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ae),F.translateZ(Rt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),xt[10]===-1)F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const At=Pt+Rt,R=se+Rt,E=Gt-ae,G=Vt+(Q-ae),tt=zt*se/R*At,it=ge*se/R*At;F.projectionMatrix.makePerspective(E,G,tt,it,At,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function B(F,j){j===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(j.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let j=F.near,rt=F.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(rt=_.depthFar)),M.near=P.near=T.near=j,M.far=P.far=T.far=rt,(A!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,N=M.far),T.layers.mask=F.layers.mask|2,P.layers.mask=F.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;const Q=F.parent,xt=M.cameras;B(M,Q);for(let wt=0;wt<xt.length;wt++)B(xt[wt],Q);xt.length===2?V(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),Y(F,M,Q)};function Y(F,j,rt){rt===null?F.matrix.copy(j.matrixWorld):(F.matrix.copy(rt.matrixWorld),F.matrix.invert(),F.matrix.multiply(j.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(j.projectionMatrix),F.projectionMatrixInverse.copy(j.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=jo*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let K=null;function st(F,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const rt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Q=!1;rt.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let wt=0;wt<rt.length;wt++){const Pt=rt[wt];let se=null;if(m!==null)se=m.getViewport(Pt);else{const ge=u.getViewSubImage(f,Pt);se=ge.viewport,wt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let zt=S[wt];zt===void 0&&(zt=new tn,zt.layers.enable(wt),zt.viewport=new me,S[wt]=zt),zt.matrix.fromArray(Pt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Pt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(se.x,se.y,se.width,se.height),wt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push(zt)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const wt=u.getDepthInformation(rt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,r.renderState)}}for(let rt=0;rt<v.length;rt++){const Q=x[rt],xt=v[rt];Q!==null&&xt!==void 0&&xt.update(Q,j,c||a)}K&&K(F,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const vt=new iu;vt.setAnimationLoop(st),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}const Si=new jn,jg=new ue;function Zg(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Qh(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),u(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,x)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,y,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===He&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===He&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(d.envMap.value=v,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Si)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Kg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",d));const C=v.program;i.updateUBOMapping(y,C);const b=t.render.frame;s[y.id]!==b&&(f(y),s[y.id]=b)}function h(y){const v=u();y.__bindingPointIndex=v;const x=n.createBuffer(),C=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,T=x.length;b<T;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=P.length;S<M;S++){const A=P[S];if(m(A,b,S,C)===!0){const N=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let D=0;D<L.length;D++){const H=L[D],$=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+I,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,x,C){const b=y.value,T=v+"_"+x;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{const P=C[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const C=16;for(let T=0,P=v.length;T<P;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,A=S.length;M<A;M++){const N=S[M],L=Array.isArray(N.value)?N.value:[N.value];for(let I=0,D=L.length;I<D;I++){const H=L[I],$=_(H),V=x%C,B=V%$.boundary,Y=V+B;x+=B,Y!==0&&C-Y<$.storage&&(x+=C-Y),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=$.storage}}}const b=x%C;return b>0&&(x+=C-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Jg{constructor(t={}){const{canvas:e=Bf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let C=!1,b=0,T=0,P=null,S=-1,M=null;const A=new me,N=new me;let L=null;const I=new jt(0);let D=0,H=e.width,$=e.height,V=1,B=null,Y=null;const K=new me(0,0,H,$),st=new me(0,0,H,$);let vt=!1;const F=new nu;let j=!1,rt=!1;const Q=new ue,xt=new ue,wt=new q,Pt=new me,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ge(){return P===null?V:1}let z=i;function Ye(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dl}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),z===null){const O="webgl2";if(z=Ye(O,w),z===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,Vt,Rt,ae,At,R,E,G,tt,it,J,bt,ht,mt,Xt,at,gt,Ct,Dt,_t,Wt,Ot,ie,U;function ct(){Gt=new im(z),Gt.init(),Ot=new Gg(z,Gt),Vt=new K0(z,Gt,t,Ot),Rt=new zg(z,Gt),Vt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),ae=new am(z),At=new Eg,R=new Hg(z,Gt,Rt,At,Vt,Ot,ae),E=new Q0(x),G=new nm(x),tt=new dd(z),ie=new j0(z,tt),it=new rm(z,tt,ae,ie),J=new lm(z,it,tt,ae),Dt=new om(z,Vt,R),at=new J0(At),bt=new bg(x,E,G,Gt,Vt,ie,at),ht=new Zg(x,At),mt=new wg,Xt=new Lg(Gt),Ct=new Y0(x,E,G,Rt,J,m,l),gt=new Og(x,J,Vt),U=new Kg(z,ae,Vt,Rt),_t=new Z0(z,Gt,ae),Wt=new sm(z,Gt,ae),ae.programs=bt.programs,x.capabilities=Vt,x.extensions=Gt,x.properties=At,x.renderLists=mt,x.shadowMap=gt,x.state=Rt,x.info=ae}ct();const Z=new Yg(x,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(H,$,!1))},this.getSize=function(w){return w.set(H,$)},this.setSize=function(w,O,W=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,$=O,e.width=Math.floor(w*V),e.height=Math.floor(O*V),W===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(w,O,W){H=w,$=O,V=W,e.width=Math.floor(w*W),e.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,O,W,X){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,O,W,X),Rt.viewport(A.copy(K).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(st)},this.setScissor=function(w,O,W,X){w.isVector4?st.set(w.x,w.y,w.z,w.w):st.set(w,O,W,X),Rt.scissor(N.copy(st).multiplyScalar(V).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(w){Rt.setScissorTest(vt=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let k=!1;if(P!==null){const ot=P.texture.format;k=ot===xl||ot===vl||ot===_l}if(k){const ot=P.texture.type,ft=ot===Yn||ot===Li||ot===qr||ot===gr||ot===ml||ot===gl,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),It=yt.r,Ft=yt.g,St=yt.b;ft?(g[0]=It,g[1]=Ft,g[2]=St,g[3]=Mt,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=It,_[1]=Ft,_[2]=St,_[3]=Mt,z.clearBufferiv(z.COLOR,0,_))}else X|=z.COLOR_BUFFER_BIT}O&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Xt.dispose(),At.dispose(),E.dispose(),G.dispose(),J.dispose(),ie.dispose(),U.dispose(),bt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ol),Z.removeEventListener("sessionend",kl),gi.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ae.autoReset,O=gt.enabled,W=gt.autoUpdate,X=gt.needsUpdate,k=gt.type;ct(),ae.autoReset=w,gt.enabled=O,gt.autoUpdate=W,gt.needsUpdate=X,gt.type=k}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const O=w.target;O.removeEventListener("dispose",Nt),fe(O)}function fe(w){Ce(w),At.remove(w)}function Ce(w){const O=At.get(w).programs;O!==void 0&&(O.forEach(function(W){bt.releaseProgram(W)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,k,ot){O===null&&(O=se);const ft=k.isMesh&&k.matrixWorld.determinant()<0,yt=$u(w,O,W,X,k);Rt.setMaterial(X,ft);let Mt=W.index,It=1;if(X.wireframe===!0){if(Mt=it.getWireframeAttribute(W),Mt===void 0)return;It=2}const Ft=W.drawRange,St=W.attributes.position;let Yt=Ft.start*It,re=(Ft.start+Ft.count)*It;ot!==null&&(Yt=Math.max(Yt,ot.start*It),re=Math.min(re,(ot.start+ot.count)*It)),Mt!==null?(Yt=Math.max(Yt,0),re=Math.min(re,Mt.count)):St!=null&&(Yt=Math.max(Yt,0),re=Math.min(re,St.count));const oe=re-Yt;if(oe<0||oe===1/0)return;ie.setup(k,X,yt,W,Mt);let Fe,Kt=_t;if(Mt!==null&&(Fe=tt.get(Mt),Kt=Wt,Kt.setIndex(Fe)),k.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*ge()),Kt.setMode(z.LINES)):Kt.setMode(z.TRIANGLES);else if(k.isLine){let Et=X.linewidth;Et===void 0&&(Et=1),Rt.setLineWidth(Et*ge()),k.isLineSegments?Kt.setMode(z.LINES):k.isLineLoop?Kt.setMode(z.LINE_LOOP):Kt.setMode(z.LINE_STRIP)}else k.isPoints?Kt.setMode(z.POINTS):k.isSprite&&Kt.setMode(z.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Kt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Et=k._multiDrawStarts,Cn=k._multiDrawCounts,Jt=k._multiDrawCount,sn=Mt?tt.get(Mt).bytesPerElement:1,Oi=At.get(X).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)Oi.setValue(z,"_gl_DrawID",Ge),Kt.render(Et[Ge]/sn,Cn[Ge])}else if(k.isInstancedMesh)Kt.renderInstances(Yt,oe,k.count);else if(W.isInstancedBufferGeometry){const Et=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Cn=Math.min(W.instanceCount,Et);Kt.renderInstances(Yt,oe,Cn)}else Kt.render(Yt,oe)};function Qt(w,O,W){w.transparent===!0&&w.side===bn&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,os(w,O,W),w.side=$n,w.needsUpdate=!0,os(w,O,W),w.side=bn):os(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),p=Xt.get(W),p.init(O),v.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ot=k.material;if(ot)if(Array.isArray(ot))for(let ft=0;ft<ot.length;ft++){const yt=ot[ft];Qt(yt,W,k),X.add(yt)}else Qt(ot,W,k),X.add(ot)}),v.pop(),p=null,X},this.compileAsync=function(w,O,W=null){const X=this.compile(w,O,W);return new Promise(k=>{function ot(){if(X.forEach(function(ft){At.get(ft).currentProgram.isReady()&&X.delete(ft)}),X.size===0){k(w);return}setTimeout(ot,10)}Gt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let rn=null;function Rn(w){rn&&rn(w)}function Ol(){gi.stop()}function kl(){gi.start()}const gi=new iu;gi.setAnimationLoop(Rn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){rn=w,Z.setAnimationLoop(w),w===null?gi.stop():gi.start()},Z.addEventListener("sessionstart",Ol),Z.addEventListener("sessionend",kl),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,P),p=Xt.get(w,v.length),p.init(O),v.push(p),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),F.setFromProjectionMatrix(xt),rt=this.localClippingEnabled,j=at.init(this.clippingPlanes,rt),d=mt.get(w,y.length),d.init(),y.push(d),Z.enabled===!0&&Z.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&ya(ot,O,-1/0,x.sortObjects)}ya(w,O,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(B,Y),zt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,zt&&Ct.addToRenderList(d,w),this.info.render.frame++,j===!0&&at.beginShadows();const W=p.state.shadowsArray;gt.render(W,w,O),j===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=d.opaque,k=d.transmissive;if(p.setupLights(),O.isArrayCamera){const ot=O.cameras;if(k.length>0)for(let ft=0,yt=ot.length;ft<yt;ft++){const Mt=ot[ft];Bl(X,k,w,Mt)}zt&&Ct.render(w);for(let ft=0,yt=ot.length;ft<yt;ft++){const Mt=ot[ft];zl(d,w,Mt,Mt.viewport)}}else k.length>0&&Bl(X,k,w,O),zt&&Ct.render(w),zl(d,w,O);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,O),ie.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],j===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function ya(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||F.intersectsSprite(w)){X&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const ft=J.update(w),yt=w.material;yt.visible&&d.push(w,ft,yt,W,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||F.intersectsObject(w))){const ft=J.update(w),yt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Pt.copy(ft.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(yt)){const Mt=ft.groups;for(let It=0,Ft=Mt.length;It<Ft;It++){const St=Mt[It],Yt=yt[St.materialIndex];Yt&&Yt.visible&&d.push(w,ft,Yt,W,Pt.z,St)}}else yt.visible&&d.push(w,ft,yt,W,Pt.z,null)}}const ot=w.children;for(let ft=0,yt=ot.length;ft<yt;ft++)ya(ot[ft],O,W,X)}function zl(w,O,W,X){const k=w.opaque,ot=w.transmissive,ft=w.transparent;p.setupLightsView(W),j===!0&&at.setGlobalState(x.clippingPlanes,W),X&&Rt.viewport(A.copy(X)),k.length>0&&as(k,O,W),ot.length>0&&as(ot,O,W),ft.length>0&&as(ft,O,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Bl(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new pi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Qr:Yn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[X.id],ft=X.viewport||A;ot.setSize(ft.z,ft.w);const yt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(I),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),zt&&Ct.render(W);const Mt=x.toneMapping;x.toneMapping=fi;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),j===!0&&at.setGlobalState(x.clippingPlanes,X),as(w,W,X),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let St=0,Yt=O.length;St<Yt;St++){const re=O[St],oe=re.object,Fe=re.geometry,Kt=re.material,Et=re.group;if(Kt.side===bn&&oe.layers.test(X.layers)){const Cn=Kt.side;Kt.side=He,Kt.needsUpdate=!0,Hl(oe,W,X,Fe,Kt,Et),Kt.side=Cn,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}x.setRenderTarget(yt),x.setClearColor(I,D),It!==void 0&&(X.viewport=It),x.toneMapping=Mt}function as(w,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ot=w.length;k<ot;k++){const ft=w[k],yt=ft.object,Mt=ft.geometry,It=X===null?ft.material:X,Ft=ft.group;yt.layers.test(W.layers)&&Hl(yt,O,W,Mt,It,Ft)}}function Hl(w,O,W,X,k,ot){w.onBeforeRender(x,O,W,X,k,ot),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(x,O,W,X,w,ot),k.transparent===!0&&k.side===bn&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,x.renderBufferDirect(W,O,X,k,w,ot),k.side=$n,k.needsUpdate=!0,x.renderBufferDirect(W,O,X,k,w,ot),k.side=bn):x.renderBufferDirect(W,O,X,k,w,ot),w.onAfterRender(x,O,W,X,k,ot)}function os(w,O,W){O.isScene!==!0&&(O=se);const X=At.get(w),k=p.state.lights,ot=p.state.shadowsArray,ft=k.state.version,yt=bt.getParameters(w,k.state,ot,O,W),Mt=bt.getProgramCacheKey(yt);let It=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Nt),It=new Map,X.programs=It);let Ft=It.get(Mt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===ft)return Vl(w,yt),Ft}else yt.uniforms=bt.getUniforms(w),w.onBeforeCompile(yt,x),Ft=bt.acquireProgram(yt,Mt),It.set(Mt,Ft),X.uniforms=yt.uniforms;const St=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=at.uniform),Vl(w,yt),X.needsLights=ju(w),X.lightsStateVersion=ft,X.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMap.value=k.state.directionalShadowMap,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotShadowMap.value=k.state.spotShadowMap,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMap.value=k.state.pointShadowMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function Gl(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Ys.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Vl(w,O){const W=At.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function $u(w,O,W,X,k){O.isScene!==!0&&(O=se),R.resetTextureUnits();const ot=O.fog,ft=X.isMeshStandardMaterial?O.environment:null,yt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ni,Mt=(X.isMeshStandardMaterial?G:E).get(X.envMap||ft),It=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),St=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,re=!!W.morphAttributes.color;let oe=fi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,Et=At.get(X),Cn=p.state.lights;if(j===!0&&(rt===!0||w!==M)){const je=w===M&&X.id===S;at.setState(X,w,je)}let Jt=!1;X.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Cn.state.version||Et.outputColorSpace!==yt||k.isBatchedMesh&&Et.batching===!1||!k.isBatchedMesh&&Et.batching===!0||k.isBatchedMesh&&Et.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Et.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Et.instancing===!1||!k.isInstancedMesh&&Et.instancing===!0||k.isSkinnedMesh&&Et.skinning===!1||!k.isSkinnedMesh&&Et.skinning===!0||k.isInstancedMesh&&Et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Et.instancingMorph===!1&&k.morphTexture!==null||Et.envMap!==Mt||X.fog===!0&&Et.fog!==ot||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==at.numPlanes||Et.numIntersection!==at.numIntersection)||Et.vertexAlphas!==It||Et.vertexTangents!==Ft||Et.morphTargets!==St||Et.morphNormals!==Yt||Et.morphColors!==re||Et.toneMapping!==oe||Et.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,Et.__version=X.version);let sn=Et.currentProgram;Jt===!0&&(sn=os(X,O,k));let Oi=!1,Ge=!1,br=!1;const le=sn.getUniforms(),mn=Et.uniforms;if(Rt.useProgram(sn.program)&&(Oi=!0,Ge=!0,br=!0),X.id!==S&&(S=X.id,Ge=!0),Oi||M!==w){Rt.buffers.depth.getReversed()?(Q.copy(w.projectionMatrix),Gf(Q),Vf(Q),le.setValue(z,"projectionMatrix",Q)):le.setValue(z,"projectionMatrix",w.projectionMatrix),le.setValue(z,"viewMatrix",w.matrixWorldInverse);const Jn=le.map.cameraPosition;Jn!==void 0&&Jn.setValue(z,wt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&le.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ge=!0,br=!0)}if(k.isSkinnedMesh){le.setOptional(z,k,"bindMatrix"),le.setOptional(z,k,"bindMatrixInverse");const je=k.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),le.setValue(z,"boneTexture",je.boneTexture,R))}k.isBatchedMesh&&(le.setOptional(z,k,"batchingTexture"),le.setValue(z,"batchingTexture",k._matricesTexture,R),le.setOptional(z,k,"batchingIdTexture"),le.setValue(z,"batchingIdTexture",k._indirectTexture,R),le.setOptional(z,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(z,"batchingColorTexture",k._colorsTexture,R));const Er=W.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Dt.update(k,W,sn),(Ge||Et.receiveShadow!==k.receiveShadow)&&(Et.receiveShadow=k.receiveShadow,le.setValue(z,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=Mt,mn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),Ge&&(le.setValue(z,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Yu(mn,br),ot&&X.fog===!0&&ht.refreshFogUniforms(mn,ot),ht.refreshMaterialUniforms(mn,X,V,$,p.state.transmissionRenderTarget[w.id]),Ys.upload(z,Gl(Et),mn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ys.upload(z,Gl(Et),mn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&le.setValue(z,"center",k.center),le.setValue(z,"modelViewMatrix",k.modelViewMatrix),le.setValue(z,"normalMatrix",k.normalMatrix),le.setValue(z,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const je=X.uniformsGroups;for(let Jn=0,Qn=je.length;Jn<Qn;Jn++){const Wl=je[Jn];U.update(Wl,sn),U.bind(Wl,sn)}}return sn}function Yu(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function ju(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,W){At.get(w.texture).__webglTexture=O,At.get(w.depthTexture).__webglTexture=W;const X=At.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const W=At.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){P=w,b=O,T=W;let X=!0,k=null,ot=!1,ft=!1;if(w){const Mt=At.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Mt.__hasExternalTextures)R.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const St=w.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ft=!0);const Ft=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?k=Ft[O][W]:k=Ft[O],ot=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[W]:k=Ft,A.copy(w.viewport),N.copy(w.scissor),L=w.scissorTest}else A.copy(K).multiplyScalar(V).floor(),N.copy(st).multiplyScalar(V).floor(),L=vt;if(Rt.bindFramebuffer(z.FRAMEBUFFER,k)&&X&&Rt.drawBuffers(w,k),Rt.viewport(A),Rt.scissor(N),Rt.setScissorTest(L),ot){const Mt=At.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,W)}else if(ft){const Mt=At.get(w.texture),It=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.__webglTexture,W||0,It)}S=-1},this.readRenderTargetPixels=function(w,O,W,X,k,ot,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Rt.bindFramebuffer(z.FRAMEBUFFER,yt);try{const Mt=w.texture,It=Mt.format,Ft=Mt.type;if(!Vt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-k&&z.readPixels(O,W,X,k,Ot.convert(It),Ot.convert(Ft),ot)}finally{const Mt=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,X,k,ot,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Mt=w.texture,It=Mt.format,Ft=Mt.type;if(!Vt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&W>=0&&W<=w.height-k){Rt.bindFramebuffer(z.FRAMEBUFFER,yt);const St=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,St),z.bufferData(z.PIXEL_PACK_BUFFER,ot.byteLength,z.STREAM_READ),z.readPixels(O,W,X,k,Ot.convert(It),Ot.convert(Ft),0);const Yt=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Yt);const re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hf(z,re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,St),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ot),z.deleteBuffer(St),z.deleteSync(re),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,W=0){w.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(w.image.width*X),ot=Math.floor(w.image.height*X),ft=O!==null?O.x:0,yt=O!==null?O.y:0;R.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,ft,yt,k,ot),Rt.unbindTexture()},this.copyTextureToTexture=function(w,O,W=null,X=null,k=0){w.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],k=arguments[3]||0,W=null);let ot,ft,yt,Mt,It,Ft,St,Yt,re;const oe=w.isCompressedTexture?w.mipmaps[k]:w.image;W!==null?(ot=W.max.x-W.min.x,ft=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Mt=W.min.x,It=W.min.y,Ft=W.isBox3?W.min.z:0):(ot=oe.width,ft=oe.height,yt=oe.depth||1,Mt=0,It=0,Ft=0),X!==null?(St=X.x,Yt=X.y,re=X.z):(St=0,Yt=0,re=0);const Fe=Ot.convert(O.format),Kt=Ot.convert(O.type);let Et;O.isData3DTexture?(R.setTexture3D(O,0),Et=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Et=z.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Et=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);const Cn=z.getParameter(z.UNPACK_ROW_LENGTH),Jt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),sn=z.getParameter(z.UNPACK_SKIP_PIXELS),Oi=z.getParameter(z.UNPACK_SKIP_ROWS),Ge=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,oe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Mt),z.pixelStorei(z.UNPACK_SKIP_ROWS,It),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ft);const br=w.isDataArrayTexture||w.isData3DTexture,le=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const mn=At.get(w),Er=At.get(O),je=At.get(mn.__renderTarget),Jn=At.get(Er.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,je.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<yt;Qn++)br&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(w).__webglTexture,k,Ft+Qn),w.isDepthTexture?(le&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(O).__webglTexture,k,re+Qn),z.blitFramebuffer(Mt,It,ot,ft,St,Yt,ot,ft,z.DEPTH_BUFFER_BIT,z.NEAREST)):le?z.copyTexSubImage3D(Et,k,St,Yt,re+Qn,Mt,It,ot,ft):z.copyTexSubImage2D(Et,k,St,Yt,re+Qn,Mt,It,ot,ft);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Et,k,St,Yt,re,ot,ft,yt,Fe,Kt,oe.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Et,k,St,Yt,re,ot,ft,yt,Fe,oe.data):z.texSubImage3D(Et,k,St,Yt,re,ot,ft,yt,Fe,Kt,oe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,St,Yt,ot,ft,Fe,Kt,oe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,St,Yt,oe.width,oe.height,Fe,oe.data):z.texSubImage2D(z.TEXTURE_2D,k,St,Yt,ot,ft,Fe,Kt,oe);z.pixelStorei(z.UNPACK_ROW_LENGTH,Cn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Jt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,sn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Oi),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge),k===0&&O.generateMipmaps&&z.generateMipmap(Et),Rt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W=null,X=null,k=0){return w.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],k=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,W,X,k)},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Rt.unbindTexture()},this.resetState=function(){b=0,T=0,P=null,Rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class hu extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class da extends Ne{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Qg={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=uu(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,m;if(i&&(s=r_(n,t,s,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let g=e;g<r;g+=e)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return $r(s,a,e,o,l,m,0),a}};function uu(n,t,e,i,r){let s,a;if(r===m_(n,t,e,i)>0)for(s=t;s<e;s+=i)a=Vc(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=Vc(s,n[s],n[s+1],a);return a&&pa(a,a.next)&&(jr(a),a=a.next),a}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(pa(e,e.next)||he(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $r(n,t,e,i,r,s,a){if(!n)return;!a&&s&&c_(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?e_(n,i,r,s):t_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),jr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=n_(Ii(n),t,e),$r(n,t,e,i,r,s,2)):a===2&&i_(n,t,e,i,r,s):$r(Ii(n),t,e,i,r,s,1);break}}}function t_(n){const t=n.prev,e=n,i=n.next;if(he(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=m&&ir(r,o,s,l,a,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function e_(n,t,e,i){const r=n.prev,s=n,a=n.next;if(he(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,d=h>u?h>f?h:f:u>f?u:f,p=Ko(m,g,t,e,i),y=Ko(_,d,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&ir(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&he(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&ir(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&ir(o,h,l,u,c,f,x.x,x.y)&&he(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function n_(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!pa(r,s)&&fu(r,i,i.next,s)&&Yr(r,s)&&Yr(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),jr(i),jr(i.next),i=n=s),i=i.next}while(i!==n);return Ii(i)}function i_(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&f_(a,o)){let l=du(a,o);a=Ii(a,a.next),l=Ii(l,l.next),$r(a,t,e,i,r,s,0),$r(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function r_(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=uu(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(u_(c));for(r.sort(s_),s=0;s<r.length;s++)e=a_(r[s],e);return e}function s_(n,t){return n.x-t.x}function a_(n,t){const e=o_(n,t);if(!e)return t;const i=du(e,n);return Ii(i,i.next),Ii(e,e.next)}function o_(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ir(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),Yr(e,n)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&l_(r,e)))&&(r=e,h=u)),e=e.next;while(e!==o);return r}function l_(n,t){return he(n.prev,n,t.prev)<0&&he(t.next,n,n.next)<0}function c_(n,t,e,i){let r=n;do r.z===0&&(r.z=Ko(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,h_(r)}function h_(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function Ko(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function u_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ir(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function f_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!d_(n,t)&&(Yr(n,t)&&Yr(t,n)&&p_(n,t)&&(he(n.prev,n,t.prev)||he(n,t.prev,t))||pa(n,t)&&he(n.prev,n,n.next)>0&&he(t.prev,t,t.next)>0)}function he(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function pa(n,t){return n.x===t.x&&n.y===t.y}function fu(n,t,e,i){const r=Ps(he(n,t,e)),s=Ps(he(n,t,i)),a=Ps(he(e,i,n)),o=Ps(he(e,i,t));return!!(r!==s&&a!==o||r===0&&Cs(n,e,t)||s===0&&Cs(n,i,t)||a===0&&Cs(e,n,i)||o===0&&Cs(e,t,i))}function Cs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ps(n){return n>0?1:n<0?-1:0}function d_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Yr(n,t){return he(n.prev,n,n.next)<0?he(n,t,n.next)>=0&&he(n,n.prev,t)>=0:he(n,t,n.prev)<0||he(n,n.next,t)<0}function p_(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function du(n,t){const e=new Jo(n.i,n.x,n.y),i=new Jo(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Vc(n,t,e,i){const r=new Jo(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jo(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m_(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class bl{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return bl.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Wc(t),Xc(i,t);let a=t.length;e.forEach(Wc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Xc(i,e[l]);const o=Qg.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Wc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Xc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const qc=new ue;class g_{constructor(t,e,i=0,r=1/0){this.ray=new Yh(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(t,e=!0,i=[]){return Qo(t,this,i,e),i.sort($c),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Qo(t[r],this,i,e);return i.sort($c),i}}function $c(n,t){return n.distance-t.distance}function Qo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Qo(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function nn(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function lr(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Re{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const r of t)e+=Math.max(0,r[1]);let i=this.next()*e;for(const r of t)if(i-=Math.max(0,r[1]),i<=0)return r[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const r=Math.floor(this.next()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}fork(t=0){return new Re(nn(Math.floor(this.next()*4294967296),t))}}const Ue=(n,t,e)=>n<t?t:n>e?e:n,__=(n,t,e)=>n+(t-n)*e,Yc=(n,t,e)=>{const i=Ue((e-n)/(t-n),0,1);return i*i*(3-2*i)},Ci=(n,t,e,i)=>__(n,t,1-Math.exp(-e*i)),Ka=Math.PI*2;function v_(n,t){let e=(t-n)%Ka;return e>Math.PI&&(e-=Ka),e<-Math.PI&&(e+=Ka),e}function Se(n,t=0){const e=Math.floor(n),i=n-e,r=nn(e,t)/2147483648-1,s=nn(e+1,t)/2147483648-1,a=i*i*(3-2*i);return r+(s-r)*a}const ve="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",En="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",cr="'VT323', 'Courier New', monospace";function An(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function x_(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function El(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const r=new da(n);return r.colorSpace=Xe,r.wrapS=t?Xr:Gn,r.wrapT=e?Xr:Gn,r.generateMipmaps=i,r.minFilter=i?ci:Ae,r.magFilter=Ae,r.anisotropy=2,r.needsUpdate=!0,r}function y_(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Tl(n,t){const[e,i,r]=y_(n),s=a=>Math.max(0,Math.min(255,Math.round(t>=0?a+(255-a)*t:a*(1+t))));return`rgb(${s(e)},${s(i)},${s(r)})`}function Zr(n,t,e,i,r,s=1,a=1,o=!0){const l=new Re(s);n.save(),n.beginPath(),n.rect(t,e,i,r),n.clip();const c=Math.floor(i*r/900*a);for(let h=0;h<c;h++){const u=l.range(.02,.09)*a;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${u})`:`rgba(255,255,240,${u*.6})`;const f=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,r),f,f*l.range(.5,o?3:1.4))}for(let h=0;o&&h<Math.floor(i/90*a);h++){const u=t+l.range(0,i),f=e+l.range(0,r*.7),m=l.range(r*.05,r*.35),g=n.createLinearGradient(0,f,0,f+m);g.addColorStop(0,`rgba(40,30,15,${.1*a})`),g.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=g,n.fillRect(u,f,l.range(2,7),m)}n.restore()}function $e(n,t,e,i,r=ve,s=400){let a=i;n.font=`${s} ${a}px ${r}`;const o=n.measureText(t).width;return o>e&&(a=Math.max(6,Math.floor(a*e/o)),n.font=`${s} ${a}px ${r}`),a}function Kr(n,t,e){const i=[];for(const r of String(t).split(`
`)){let s="";for(const a of r.split(" ")){const o=s?`${s} ${a}`:a;n.measureText(o).width>e&&s?(i.push(s),s=a):s=o}i.push(s)}return i}function tl(n,t,e,i,r,s){const a={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[r]??0;n.save(),n.translate(t,e),n.rotate(a),n.strokeStyle=s,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const $t={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},js={ring:"#dc241f",bar:"#0019a8",text:"#ffffff",panel:"#fbfaf4"},dn={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},M_=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function wl(n,t,e,i,r={}){let s=r.ring||js.ring,a=r.bar||js.bar;const o=r.defect||null;o==="swap"&&([s,a]=[a,s]);const l=i*.56,c=i*1.26,h=i*.815,u=i*.37;if(n.save(),n.translate(t,e),o==="tilt"&&n.rotate(-.07),n.strokeStyle=s,n.lineWidth=u,n.lineCap="butt",o==="solid")n.fillStyle=s,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill();else if(o==="gap")for(const[m,g]of[[-Math.PI*.86,-Math.PI*.2],[-Math.PI*.08,Math.PI*1.02]])n.beginPath(),n.arc(0,0,h,m,g),n.stroke();else n.beginPath(),n.arc(0,0,h,0,Math.PI*2),n.stroke();if(o==="double"&&(n.lineWidth=u*.32,n.beginPath(),n.arc(0,0,h*.5,0,Math.PI*2),n.stroke()),r.frame){n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.03);for(const m of[i,i*.63])n.beginPath(),n.arc(0,0,m,0,Math.PI*2),n.stroke()}const f=o==="low"?i*.22:0;if(n.fillStyle=a,n.fillRect(-c,f-l/2,c*2,l),r.frame&&(n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.035),n.strokeRect(-c,f-l/2,c*2,l)),r.name){const m=String(r.name).toUpperCase();n.fillStyle=r.text||js.text,n.textAlign="center",n.textBaseline="middle";const g=l*.78;try{n.letterSpacing=`${(g*.05).toFixed(1)}px`}catch{}$e(n,m,c*2-l*.5,g,ve),o==="mirror"&&n.scale(-1,1),n.fillText(m,0,f+l*.05);try{n.letterSpacing="0px"}catch{}}n.restore()}function ma(n,t,e,i,r={}){n.fillStyle=js.panel,n.fillRect(0,0,t,e);const s=Math.max(2,Math.min(t,e)*.035);n.strokeStyle="#6d7275",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const a=Math.min(t*.9/2.52,e*.38);wl(n,t/2,e/2,a,{name:i,...r})}const pu=["tilt","double","solid","swap","gap","low","mirror"],ke=n=>document.getElementById(n);function jc(n,t){if(!n)return;const e=An(360,200);wl(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function S_(){const n=ke("title"),t=ke("pause"),e=ke("end"),i=ke("touch"),r=ke("fade"),s=(o,l)=>o.classList.toggle("hidden",!l);return{drawMarks(){jc(ke("title-mark"),"Mind the Gap"),jc(ke("end-mark"),"Way out")},showTitle(){s(n,!0),s(t,!1),s(e,!1),s(i,!1)},showPlaying(o){s(n,!1),s(t,!1),s(e,!1),s(i,!!o),r.classList.remove("on")},showPause(){s(t,!0),s(i,!1)},whiteOut(){r.classList.remove("black"),r.classList.add("on")},showEnd(o){const l=ke("end-stats");l.replaceChildren();for(const[c,h]of o){const u=document.createElement("dt");u.textContent=c;const f=document.createElement("dd");f.textContent=h,l.append(u,f)}s(e,!0),s(i,!1),s(t,!1),setTimeout(()=>r.classList.remove("on"),400)},onStart(o){ke("btn-start").addEventListener("click",o)},onResume(o){ke("btn-resume").addEventListener("click",o)},onAgain(o){ke("btn-again").addEventListener("click",o)},onVoice(o){const l=ke("opt-voice");l.addEventListener("change",()=>o(l.checked))},onHQ(o){const l=ke("opt-hq");l.addEventListener("change",()=>o(l.checked))},setLoading(o){const l=ke("btn-start");l.disabled=!!o,l.textContent=o?"Loading…":"Press to begin"}}}const b_=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,E_=`
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
}`;function T_(n,t){const e=new wn({vertexShader:b_,fragmentShader:E_,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new Zt(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new Kn;i.setAttribute("position",new Le(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new Le(new Float32Array([0,0,2,0,0,2]),2));const r=new en(i,e);r.frustumCulled=!1;const s=new hu;s.add(r);const a=new ru(-1,1,1,-1,0,1);return{scene:s,camera:a,uniforms:e.uniforms,material:e}}class w_{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new Jg({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=Ni,this.gl.autoClear=!0,this.gl.setClearColor(new jt().setRGB(...$t.fogColor),1),this.target=new pi(64,64,{minFilter:Ae,magFilter:Ae,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Xe,this.dv=T_(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,r=this.mobile?1280:2200;let s=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);s=Math.min(s,r/Math.max(t,e)),this.gl.setPixelRatio(s),this.gl.setSize(t,e,!1);let a=this.mobile?$t.internalHMobile:$t.internalH;this.hq&&(a=Math.round(a*1.45));let o,l;i>=1?(l=a,o=Math.round(a*Math.min(i,2.4))):(o=Math.round(a*.8),l=Math.round(o/Math.max(i,.42))),this.target.setSize(o,l),this.dv.uniforms.uInRes.value.set(o,l),this.overlay.resize(o,l),this.width=t,this.height=e,this.aspect=i,this.iw=o,this.ih=l}render(t,e,i){const r=this.gl;this.dv.uniforms.uTime.value=i%1e3,r.setRenderTarget(this.target),r.render(t,e),this.drawCalls=r.info.render.calls,this.triangles=r.info.render.triangles,r.setRenderTarget(null),r.render(this.dv.scene,this.dv.camera)}}const Pr=n=>String(n).padStart(2,"0");class A_{constructor(){this.canvas=An(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new da(this.canvas),this.texture.colorSpace=Xe,this.texture.generateMipmaps=!1,this.texture.minFilter=Ae,this.texture.magFilter=Ae,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,r,s="left",a="#fff"){const o=this.ctx;o.font=`400 ${r}px ${cr}`,o.textAlign=s,o.textBaseline="alphabetic",o.lineWidth=Math.max(2,r*.16),o.strokeStyle="rgba(0,0,0,0.85)",o.lineJoin="round",o.strokeText(t,e,i),o.fillStyle=a,o.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,r=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(r===this.sig)return;this.sig=r;const s=this.ctx,a=this.canvas.width,o=this.canvas.height;s.clearRect(0,0,a,o);const l=o>a,c=Math.min(a,o)/(l?300:400),h=18*c,u=22*c;if(t.live){i&&(s.fillStyle="#ff2a1a",s.beginPath(),s.arc(h+u*2.05,h+u*.42,u*.3,0,7),s.fill()),this.text("REC",h,h+u*.75,u,"left","#fff");const g=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${g}:${Pr(_)}:${Pr(d)}`,h,h+u*1.75,u*.9);const p=a-h-u*1.9,y=h+u*.12;s.strokeStyle="#fff",s.lineWidth=Math.max(2,c*2),s.strokeRect(p,y,u*1.7,u*.66),s.fillStyle="#fff",s.fillRect(p+u*1.7,y+u*.2,u*.14,u*.26);const v=Math.max(1,3-Math.floor(e/600));for(let A=0;A<v;A++)s.fillRect(p+u*.12+A*u*.52,y+u*.12,u*.4,u*.42);this.text("SP",p-u*.5,h+u*.75,u,"right");const x=t.date,C=x.getHours()%12||12,b=x.getHours()<12?"AM":"PM",T=this.mobile?h+u*2.75:o-h;this.text(`${M_[x.getMonth()]} ${Pr(x.getDate())} ${x.getFullYear()}`,a-h,T-u*1.05,u,"right"),this.text(`${C}:${Pr(x.getMinutes())}:${Pr(x.getSeconds())} ${b}`,a-h,T,u,"right"),s.strokeStyle="rgba(255,255,255,0.55)",s.lineWidth=Math.max(1.5,c*1.5);const P=a/2,S=o/2,M=7*c;if(s.beginPath(),s.moveTo(P-M,S),s.lineTo(P-M*.35,S),s.moveTo(P+M*.35,S),s.lineTo(P+M,S),s.moveTo(P,S-M),s.lineTo(P,S-M*.35),s.moveTo(P,S+M*.35),s.lineTo(P,S+M),s.stroke(),t.zoom>.05){const A=h,N=this.mobile?h+u*3:o-h-u*.3,L=u*4;this.text("W",A,N,u*.8),this.text("T",A+L+u*.9,N,u*.8),s.strokeStyle="#fff",s.strokeRect(A+u*.6,N-u*.45,L,u*.36),s.fillStyle="#fff",s.fillRect(A+u*.6,N-u*.45,L*t.zoom,u*.36)}}const f=(l?21:24)*c;let m=o-h-u*(l?2.6:2.3);if(this.mobile&&(m=o*(l?.74:.86)),t.reading){const g=t.reading.text.length>170;let _=g?f*.74:f,d;for(let C=0;C<6&&(s.font=`400 ${_}px ${cr}`,d=Kr(s,t.reading.text,a*(g?.9:.8)),!((d.length+1.6)*_*1.02<o*(l?.42:.46)));C++)_*=.9;const p=(d.length+(t.reading.title?1.3:.3))*_*1.02+_*.5,y=g?m-p+(this.mobile?0:u*1.1):Math.min(m-p,o*.62),v=g?a*.03:a*.07;s.fillStyle=`rgba(0,0,0,${g?.72:.62})`,s.fillRect(v,y,a-v*2,p);let x=y+_*1;t.reading.title&&(this.text(t.reading.title,a/2,x,_*.82,"center","#ffd329"),x+=_*1.1);for(const C of d)this.text(C,g?v+_*.6:a/2,x,_,g?"left":"center"),x+=_*1.02;m=y-f*.4}else t.prompt&&this.text(t.prompt,a/2,o*.5+34*c,f*.9,"center","#ffd329");if(t.caption){const g=t.caption.length>110?f*(l?.78:.88):f;s.font=`400 ${g}px ${cr}`;const _=Kr(s,t.caption,a*(l?.9:.84));let d=m-(_.length-1)*g*1.02;t.captionTag&&this.text(t.captionTag,a/2,d-g*1.08,f*.8,"center","#9fd8ff");for(const p of _)this.text(p,a/2,d,g,"center"),d+=g*1.02}t.hint&&this.text(t.hint,a/2,h+u*3.2,f*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const R_=`
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
}`,C_=`
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
}`,Br={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new jt().setRGB(...$t.fogColor)},uFogDensity:{value:$t.fogDensity}};function mu(n,t,e=!1,i=null){const r={};return e&&(r.CUTOUT=1),i&&(r.CLIP=1),new wn({defines:r,vertexShader:R_,fragmentShader:C_,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:Br.uPower,uCam:Br.uCam,uFogColor:Br.uFogColor,uFogDensity:Br.uFogDensity,...i?{uClip:i}:{}},side:$n})}const Zc=[1,1,1],ai=new q,Ds=new q,Kc=new Ut;function gu(n,t,e){const i=Math.cos(e.yaw),r=Math.sin(e.yaw);for(let s=0;s<t.length;s+=3){const a=t[s],o=t[s+1],l=t[s+2];n[s]=e.x+a*i+l*r,n[s+1]=e.y+o,n[s+2]=e.z-a*r+l*i}}class _u{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&(Kc.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new ue().makeScale(-1,1,1):null)}place(t,e,i,r=0){const s=new ue().makeRotationY(r);return s.setPosition(t,e,i),this.setXf(s)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}_vert(t,e,i,r,s,a){this.m?(ai.set(e[0],e[1],e[2]).applyMatrix4(this.m),Ds.set(i[0],i[1],i[2]).applyMatrix3(Kc),t.pos.push(ai.x,ai.y,ai.z),t.nrm.push(Ds.x,Ds.y,Ds.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(r,s);const o=a&&a.tint||Zc;return t.tint.push(o[0],o[1],o[2]),t.emit.push(a&&a.emit!==void 0?a.emit+(a.flick?1e3:0):-1),t.n++}quad(t,e,i,r,s,a,o,l){return this.quadN(t,e,i,r,s,a,a,a,a,a,o,l)}quadN(t,e,i,r,s,a,o,l,c,h,u,f){const m=this._layer(t),g=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],p=r[0]-e[0],y=r[1]-e[1],v=r[2]-e[2],x=_*v-d*y,C=d*p-g*v,b=g*y-_*p,T=x*a[0]+C*a[1]+b*a[2]>=0!=!!this.flip,P=this._vert(m,e,o,u[0],u[1],f),S=this._vert(m,i,l,u[2],u[1],f),M=this._vert(m,r,c,u[2],u[3],f),A=this._vert(m,s,h,u[0],u[3],f);T?m.idx.push(P,S,M,P,M,A):m.idx.push(P,M,S,P,A,M)}quadUV(t,e,i,r,s,a,o,l,c,h,u){const f=this._layer(t),m=i[0]-e[0],g=i[1]-e[1],_=i[2]-e[2],d=r[0]-e[0],p=r[1]-e[1],y=r[2]-e[2],v=(g*y-_*p)*a[0]+(_*d-m*y)*a[1]+(m*p-g*d)*a[2]>=0!=!!this.flip,x=this._vert(f,e,a,o[0],o[1],u),C=this._vert(f,i,a,l[0],l[1],u),b=this._vert(f,r,a,c[0],c[1],u),T=this._vert(f,s,a,h[0],h[1],u);v?f.idx.push(x,C,b,x,b,T):f.idx.push(x,b,C,x,T,b)}tri(t,e,i,r,s,a,o,l,c){const h=this._layer(t),u=i[0]-e[0],f=i[1]-e[1],m=i[2]-e[2],g=r[0]-e[0],_=r[1]-e[1],d=r[2]-e[2],p=(f*d-m*_)*s[0]+(m*g-u*d)*s[1]+(u*_-f*g)*s[2]>=0!=!!this.flip,y=this._vert(h,e,s,a[0],a[1],c),v=this._vert(h,i,s,o[0],o[1],c),x=this._vert(h,r,s,l[0],l[1],c);p?h.idx.push(y,v,x):h.idx.push(y,x,v)}grid(t,e,i,r,s,a,o,l,c,h=!1){for(let u=0;u<s;u++)for(let f=0;f<a;f++){const m=(v,x)=>[e[0]+i[0]*v+r[0]*x,e[1]+i[1]*v+r[1]*x,e[2]+i[2]*v+r[2]*x],g=u/s,_=(u+1)/s,d=f/a,p=(f+1)/a,y=h?l:[l[0]+(l[2]-l[0])*g,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*p];this.quad(t,m(g,d),m(_,d),m(_,p),m(g,p),o,y,c)}}box(t,e,i,r,s,a,o,l,c,h="xXyYzZ"){const u=(f,m,g,_,d)=>this.quad(t,f,m,g,_,d,l,c);h.includes("x")&&u([e,i,o],[e,i,r],[e,a,r],[e,a,o],[-1,0,0]),h.includes("X")&&u([s,i,r],[s,i,o],[s,a,o],[s,a,r],[1,0,0]),h.includes("y")&&u([e,i,r],[s,i,r],[s,i,o],[e,i,o],[0,-1,0]),h.includes("Y")&&u([e,a,r],[s,a,r],[s,a,o],[e,a,o],[0,1,0]),h.includes("z")&&u([s,i,r],[e,i,r],[e,a,r],[s,a,r],[0,0,-1]),h.includes("Z")&&u([e,i,o],[s,i,o],[s,a,o],[e,a,o],[0,0,1])}addLight(t,e,i,r=1,s=7,a=!1,o=Zc){this.m&&(ai.set(t,e,i).applyMatrix4(this.m),t=ai.x,e=ai.y,i=ai.z),this.lights.push({x:t,y:e,z:i,i:r,r2:s*s,flicker:a,color:o})}addPortal(t,e,i,r){this.portals.push({x:t,y:e,z:i,dx:Math.sin(r),dz:Math.cos(r)})}_lightAt(t,e,i,r,s,a,o){const l=o.x-t,c=o.y-e,h=o.z-i,u=l*l+c*c+h*h;if(u>=o.r2)return 0;const f=(1-u/o.r2)**2,m=1/Math.sqrt(u+1e-6),g=Math.max(0,(r*l+s*c+a*h)*m);return o.i*f*(.38+.62*g)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(s=>({x:s.x,y:s.y+2.3,z:s.z,i:.85,r2:36})),r={};for(const s of Object.keys(this.layers)){const a=this.layers[s],o=new Uint8Array(a.n*4);for(let h=0;h<a.n;h++){const u=a.tint[h*3],f=a.tint[h*3+1],m=a.tint[h*3+2];let g,_,d,p=0;const y=a.emit[h];if(y>=0){const v=y>=1e3,x=v?y-1e3:y,C=v?.1:1;g=u*x*C,_=f*x*C,d=m*x*C,p=v?x*.9:0}else{const v=a.pos[h*3],x=a.pos[h*3+1],C=a.pos[h*3+2],b=a.nrm[h*3],T=a.nrm[h*3+1],P=a.nrm[h*3+2];let S=1;for(const M of this.portals){const A=Math.abs((v-M.x)*M.dx+(C-M.z)*M.dz),N=Math.abs((v-M.x)*M.dz-(C-M.z)*M.dx),L=Math.hypot(N,Math.max(0,x-M.y-2.2));N<4&&Math.abs(x-M.y)<5&&(S=Math.min(S,Math.max(Yc(.1,2.4,A),Yc(1.7,2.9,L))))}g=t[0],_=t[1],d=t[2];for(const M of this.lights){const A=this._lightAt(v,x,C,b,T,P,M)*S;A<=0||(M.flicker?p+=A:(g+=A*M.color[0],_+=A*M.color[1],d+=A*M.color[2]))}for(const M of i){const A=this._lightAt(v,x,C,b,T,P,M);g+=A,_+=A*.98,d+=A*.93}g*=u,_*=f,d*=m,p*=(u+f+m)/3}o[h*4]=Math.min(255,g*127.5),o[h*4+1]=Math.min(255,_*127.5),o[h*4+2]=Math.min(255,d*127.5),o[h*4+3]=Math.min(255,p*127.5)}const l=new Kn,c=new Float32Array(a.pos);e&&gu(c,a.pos,e),l.userData.local=a.pos,l.setAttribute("position",new Le(c,3)),l.setAttribute("uv",new Le(new Float32Array(a.uv),2)),l.setAttribute("aLight",new Le(o,4,!0)),l.setIndex(new Le(a.n>65535?new Uint32Array(a.idx):new Uint16Array(a.idx),1)),l.computeBoundingSphere(),r[s]=l}return r}}function Ja(n,t,e){const i=Math.cos(e),r=Math.sin(e);let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const[c,h]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const u=t.x+c*i+h*r,f=t.z-c*r+h*i;s=Math.min(s,u),a=Math.max(a,u),o=Math.min(o,f),l=Math.max(l,f)}return[s,t.y+n[1],o,a,t.y+n[4],l]}function el(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}function P_(n,t,e,i,r){const s=[...n.values()].find(l=>l!==t&&el(i,l.box)),a=e.env.stretch,o=s&&s.env.stretch;return{type:e.def.type,after:t.def.type,yaw:+r.toFixed(2),hit:s?s.def.type:"?",rel:s?o===a?"same stretch":"other stretch":"?",box:i.map(l=>+l.toFixed(1)),hitBox:s?s.box.map(l=>+l.toFixed(1)):null,sister:!!(a&&o&&a.fromJunction&&a.fromJunction===o.fromJunction)}}let D_=1;const L_=new Set(["sheet","cut","gate","figure"]);class I_{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0,forced:[]}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const r=new Re(i),s=t.plan(r,e),a=this._make(t,s,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=a,this.refresh(!0),a}_make(t,e,i,r,s,a,o,l){const c={id:D_++,def:t,p:e.p,env:i,seed:l,pos:r,yaw:s,parent:a,exitIndex:o,exits:e.exits.map(h=>({...h,child:null})),box:Ja(e.box,r,s),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((h,u)=>Math.max(h,Math.hypot(u.x,u.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],r=Math.cos(t.yaw),s=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*r+i.z*s,y:t.pos.y+i.y,z:t.pos.z-i.x*s+i.z*r},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&el(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:r,yaw:s}=this.exitPose(t,e);let a=null;for(let o=0;o<14;o++){const l=nn(t.seed,e*31+o*977+1),c=new Re(l),h=this.hooks.choose(t,e,o,c);if(!h)break;const u=h.def.plan(c,h.env);a||(a={pick:h,plan:u,seed:l});const f=Ja(u.box,r,s);if(!(!h.force&&!this._fits(f,t)))return i.child=this._make(h.def,u,h.env,r,s,t,e,l),i.child}return this.stats.deadEnds++,a&&this.stats.forced.length<60&&this.stats.forced.push(P_(this.nodes,t,a.pick,Ja(a.plan.box,r,s),s)),a?(i.child=this._make(a.pick.def,a.plan,a.pick.env,r,s,t,e,a.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=$t.ahead,i=$t.sight||46,r=7;for(const o of this.nodes.values())o.dist=1/0,o.path=1/0;const s=[this.current];this.current.dist=0,this.current.path=0;const a=o=>o.dist<=e||o.path<=i&&o.dist<=r;for(;s.length;){const o=s.shift();if(o.dist<e||o.path<i&&o.dist<r)for(let l=0;l<o.exits.length;l++)this.expand(o,l);for(const l of this.neighbours(o))l.dist>o.dist+1&&(l.dist=o.dist+1,l.path=o===this.current?0:o.path+(o.span||8),s.push(l))}for(const o of this.nodes.values())a(o)&&!o.built&&!this.buildQueue.includes(o)?this.buildQueue.push(o):o.built&&o.dist>e+1&&o.path>i+10&&this.unbuild(o);if(this.buildQueue.sort((o,l)=>o.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift());this.cull()}cull(){const t=[...this.nodes.values()].filter(i=>i.built).sort((i,r)=>i.dist-r.dist),e=[];for(const i of t){const r=a=>a.parent===i||i.parent===a,s=i.dist>1&&e.some(a=>!r(a)&&el(i.box,a.box,.4));i.built.group.visible=!s,i.hiddenByFold=s,s||e.push(i)}}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),this.cull(),!0}return!1}build(t){if(t.built)return;const e=new _u,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,r={b:e,p:t.p,rng:new Re(nn(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},s=t.def.build(r)||{},a=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),o=new zr;o.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(a)){const h=c==="sheet"?l:this.hooks.textures(c,t),u=new en(a[c],mu(h,t.flick,L_.has(c)));u.matrixAutoUpdate=!1,u.name=c,c==="gate"&&(u.visible=!!t.gateShut),c==="figure"&&(u.visible=!t.figureGone),o.add(u)}this.scene.add(o),o.updateMatrixWorld(!0),t.built={group:o,sheetTex:l,sheetOverflow:i?i.overflow:0,cells:s.cells||[],walls:s.walls||[],items:s.items||[],frames:s.frames||null,extra:s.extra||null,gate:o.children.find(c=>c.name==="gate")||null,figure:o.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const r of e.children)r.geometry.dispose(),r.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const r of this.nodes.values())if(r.pos.x-=t,r.pos.y-=e,r.pos.z-=i,r.box[0]-=t,r.box[3]-=t,r.box[1]-=e,r.box[4]-=e,r.box[2]-=i,r.box[5]-=i,!!r.built)for(const s of r.built.group.children){const a=s.geometry.attributes.position;gu(a.array,s.geometry.userData.local,{x:r.pos.x,y:r.pos.y,z:r.pos.z,yaw:r.yaw}),a.needsUpdate=!0,s.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const r=i.pop();if(this.nodes.has(r.id)){this.unbuild(r),this.nodes.delete(r.id);for(const s of this.neighbours(r))s!==e&&this.nodes.has(s.id)&&i.push(s)}}}}function ga(n,t,e){const i=t-n.pos.x,r=e-n.pos.z,s=Math.cos(n.yaw),a=Math.sin(n.yaw);return[i*s-r*a,i*a+r*s]}function hr(n,t,e,i){const r=Math.cos(n.yaw),s=Math.sin(n.yaw);return[n.pos.x+t*r+i*s,n.pos.y+e,n.pos.z-t*s+i*r]}function Qa(n,t,e,i,r=.02){if(!n.built)return null;const[s,a]=ga(n,t,e);let o=null,l=1.6;for(const c of n.built.cells){const h=c.bx-c.ax,u=c.bz-c.az,f=h*h+u*u,m=((s-c.ax)*h+(a-c.az)*u)/f;if(m<-r||m>1+r||Math.abs((s-c.ax)*u-(a-c.az)*h)/Math.sqrt(f)>c.hw+r)continue;const _=m<0?0:m>1?1:m,d=n.pos.y+c.ya+(c.yb-c.ya)*_,p=Math.abs(d-i);p<l&&(l=p,o={y:d,cell:c,t:_})}return o}function Ls(n,t,e,i){const r=n.current;let s=Qa(r,t,e,i);if(s)return{node:r,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))if(s=Qa(a,t,e,i),s)return{node:a,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))for(const o of n.neighbours(a))if(o!==r&&(s=Qa(o,t,e,i),s))return{node:o,y:s.y,cell:s.cell,t:s.t};return null}function U_(n,t,e){if(!n.built)return!1;let[i,r]=ga(n,t.x,t.z),s=!1;const a=t.y-n.pos.y;for(const o of n.built.walls){if(o.length>4&&(a<o[4]||a>o[5]))continue;const l=o[2]-o[0],c=o[3]-o[1],h=l*l+c*c;let u=h>0?((i-o[0])*l+(r-o[1])*c)/h:0;u=u<0?0:u>1?1:u;const f=o[0]+l*u,m=o[1]+c*u,g=i-f,_=r-m,d=g*g+_*_;if(d<e*e&&d>1e-9){const p=Math.sqrt(d),y=(e-p)/p;i+=g*y,r+=_*y,s=!0}}if(s){const o=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*o+r*l,t.z=n.pos.z-i*l+r*o}return s}function to(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let r=0;r<2;r++){let s=!1;for(const a of i)s=U_(a,t,e)||s;if(!s)break}}function N_(n,t,e,i,r){const s=t.x,a=t.z;t.x+=e,t.z+=i,to(n,t,r);let o=Ls(n,t.x,t.z,t.y);return!o&&(t.x=s+e,t.z=a,to(n,t,r),o=Ls(n,t.x,t.z,t.y),o||(t.x=s,t.z=a+i,to(n,t,r),o=Ls(n,t.x,t.z,t.y)),!o)?(t.x=s,t.z=a,Ls(n,s,a,t.y)):o}class F_{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=$t.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null,this.windX=0,this.windZ=0,this.shake=0}spawn(t,e,i,r){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=r+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+$t.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=Ue(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let r=e.mx,s=e.mz;const a=Math.hypot(r,s);a>1&&(r/=a,s/=a);const o=e.run&&s>.3,l=(o?$t.run:$t.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),h=Math.cos(this.yaw),u=(-c*s+h*r)*l,f=(-h*s-c*r)*l,m=a>.01?9:12;this.vx=Ci(this.vx,u,m,t),this.vz=Ci(this.vz,f,m,t);const g=this.pos.x,_=this.pos.z,d=N_(i,this.pos,(this.vx+this.windX)*t,(this.vz+this.windZ)*t,$t.radius);let p=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const y=Math.hypot(this.pos.x-g,this.pos.z-_);this.speed=y/Math.max(t,1e-4),this.walked+=y;const v=o?1.05:.74,x=Math.floor(this.stepDist/v);this.stepDist+=Math.min(y,Math.hypot(this.vx,this.vz)*t),Math.floor(this.stepDist/v)!==x&&(p=!0),this.zoom=Ci(this.zoom,this.zoomTarget,7,t);const C=this.pos.y+$t.eye;this.eyeY=Ci(this.eyeY,C,16,t);const b=this.stepDist/v*Math.PI,T=Ue(this.speed/$t.walk,0,1.6),P=-Math.abs(Math.sin(b))*.035*T,S=Math.sin(b)*.018*T,M=this.t,A=Se(M*.55,11)*.011+Se(M*2.3,12)*.003,N=Se(M*.47,21)*.012+Se(M*2.7,22)*.003,L=this.shake||0,I=Se(M*.4,31)*.01+Math.sin(b)*.006*T+Se(M*23,43)*.012*L,D=this.camera;D.position.set(this.pos.x+h*S,this.eyeY+P,this.pos.z-c*S),D.rotation.set(this.pitch+A*(1-.6*this.zoom)+Se(M*29,41)*.009*L,this.yaw+N*(1-.6*this.zoom)+Se(M*31,42)*.007*L,I);const H=$t.fov-(D.aspect<1?20:36)*this.zoom;return Math.abs(D.fov-H)>.01&&(D.fov=H,D.updateProjectionMatrix()),{step:p,running:o}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function O_(n,t,e){const i=new Set,r=()=>{const o=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=o,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",o=>{o.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(o.code)&&o.preventDefault(),i.add(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!0),(o.code==="KeyP"||o.code==="Escape"&&!s())&&e.pause())}),window.addEventListener("keyup",o=>{i.delete(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),r()});function s(){return document.pointerLockElement===t}const a=()=>{if(!(s()||!t.requestPointerLock))try{const o=t.requestPointerLock();o&&o.catch&&o.catch(()=>{})}catch{}};return document.addEventListener("mousemove",o=>{if(!s())return;const l=.0022;Math.abs(o.movementX)>400||Math.abs(o.movementY)>400||(n.lookX+=o.movementX*l,n.lookY+=o.movementY*l)}),t.addEventListener("mousedown",o=>{if(!s()){a();return}o.button===0&&e.use(!0)}),window.addEventListener("mouseup",o=>{o.button===0&&s()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(s())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:a,locked:s,release:()=>{s()&&document.exitPointerLock()}}}function k_(n,t){const e=T=>document.getElementById(T),i=e("stick-zone"),r=e("look-zone"),s=e("stick-base"),a=e("stick-knob"),o=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!r)return{reset(){}};const h=52;let u=null,f=0,m=0,g=null,_=0,d=0,p=!1;const y=(T,P)=>{a.style.transform=`translate(${T}px, ${P}px)`},v=()=>{u=null,n.tmx=0,n.tmz=0,n.trun=p,y(0,0),s.style.left="",s.style.top="",s.style.bottom=""};i.addEventListener("pointerdown",T=>{if(u!==null)return;u=T.pointerId,f=T.clientX,m=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}const P=s.offsetWidth,S=s.offsetHeight;s.style.left=`${f-P/2}px`,s.style.top=`${m-S/2}px`,s.style.bottom="auto",T.preventDefault()}),i.addEventListener("pointermove",T=>{if(T.pointerId!==u)return;let P=T.clientX-f,S=T.clientY-m;const M=Math.hypot(P,S);M>h&&(P*=h/M,S*=h/M),y(P,S);const A=.12,N=P/h,L=S/h;n.tmx=Math.abs(N)<A?0:N,n.tmz=Math.abs(L)<A?0:-L,n.trun=p||M>h*1.35,T.preventDefault()});const x=T=>{T.pointerId===u&&v()};i.addEventListener("pointerup",x),i.addEventListener("pointercancel",x),r.addEventListener("pointerdown",T=>{if(g===null){g=T.pointerId,_=T.clientX,d=T.clientY;try{r.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),r.addEventListener("pointermove",T=>{if(T.pointerId!==g)return;const P=.0052;n.lookX+=(T.clientX-_)*P,n.lookY+=(T.clientY-d)*P,_=T.clientX,d=T.clientY,T.preventDefault()});const C=T=>{T.pointerId===g&&(g=null)};r.addEventListener("pointerup",C),r.addEventListener("pointercancel",C),((T,P,S)=>{T.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),T.classList.add("on"),P()});const M=A=>{A.preventDefault(),T.classList.remove("on"),S&&S()};T.addEventListener("pointerup",M),T.addEventListener("pointercancel",M)})(o,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),p=!p,n.trun=p,l.classList.toggle("on",p)}),c.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()});for(const T of["touchstart","touchmove","gesturestart"])document.addEventListener(T,P=>{P.target.closest&&P.target.closest("#touch")&&P.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",T=>T.preventDefault()),{reset:()=>{v(),g=null}}}function Al(n=$t.passW,t=$t.passSpring,e=$t.passCrown,i=5,r=2){const s=[],a=n/2,o=e-t;for(let h=0;h<=r;h++)s.push({x:-a,y:t*h/r,nx:1,ny:0});for(let h=1;h<=i;h++){const u=Math.PI/2*(h/i),f=-a*Math.cos(u),m=t+o*Math.sin(u);let g=-f/(a*a),_=-(m-t)/(o*o);const d=Math.hypot(g,_)||1;s.push({x:f,y:m,nx:g/d,ny:_/d})}let l=0;s[0].s=0;for(let h=1;h<s.length;h++)l+=Math.hypot(s[h].x-s[h-1].x,s[h].y-s[h-1].y),s[h].s=l;const c=s.map(h=>({...h,v:h.s/l}));for(let h=s.length-2;h>=0;h--){const u=s[h];c.push({x:-u.x,y:u.y,nx:-u.nx,ny:u.ny,s:u.s,v:u.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const Lt=Al();function z_(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),r=[];for(let s=0;s<=i;s++){const a=n*s/i;r.push({x:0,y:e?e(a):0,z:a,yaw:0})}return r}function B_(n,t,e=1){const i=Math.sign(t)||1,r=Math.abs(t),s=Math.max(2,Math.round(n*r/e)),a=[];for(let o=0;o<=s;o++){const l=r*o/s;a.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return a}function _e(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function Is(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function di(n,t,e,i={}){const r=i.layer||"tile",s=i.uPeriod||6,[a,o]=i.vRange||[.004,.996],l=[i.u0||0];for(let f=1;f<t.length;f++){const m=t[f-1],g=t[f];l.push(l[f-1]+Math.hypot(g.x-m.x,g.z-m.z))}const c=[],h=[],u=e.W/2;for(let f=0;f<t.length-1;f++){const m=t[f],g=t[f+1],_=l[f]/s,d=l[f+1]/s;for(let p=0;p<e.length-1;p++){const y=e[p],v=e[p+1],x=Is(m,y.nx,y.ny),C=Is(g,y.nx,y.ny),b=Is(g,v.nx,v.ny),T=Is(m,v.nx,v.ny),P=[(x[0]+b[0])/2,(x[1]+b[1])/2,(x[2]+b[2])/2];n.quadN(r,_e(m,y.x,y.y),_e(g,y.x,y.y),_e(g,v.x,v.y),_e(m,v.x,v.y),P,x,C,b,T,[_,a+(o-a)*y.v,d,a+(o-a)*v.v],i.wallOpts)}if(i.floor){const p=Math.max(1,Math.round(e.W));for(let y=0;y<p;y++){const v=-u+e.W*y/p,x=-u+e.W*(y+1)/p;n.quad("atlas",_e(m,v,0),_e(m,x,0),_e(g,x,0),_e(g,v,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:m.x,az:m.z,bx:g.x,bz:g.z,hw:u,ya:m.y,yb:g.y});for(const p of[-1,1]){const y=_e(m,p*u,0),v=_e(g,p*u,0);h.push([y[0],y[2],v[0],v[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:h,dist:l}}function Rl(n,t=.25){const e=n[0],i=n[n.length-1],r=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return r.W=n.W,r.crown=n.crown,r.spring=n.spring,r.len=n.len,r}function vu(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function xr(n,t,e,i,r,s,a,o){const l=[Math.sin(t.yaw)*r,0,Math.cos(t.yaw)*r],c=a||((g,_)=>[g/6,.004+_/3.63*.992]),h=g=>_e(t,g.x,g.y),u=g=>c(g.x,g.y),f=e.length,m=(g,_,d,p)=>n.quadUV(s,h(g),h(_),h(d),h(p),l,u(g),u(_),u(d),u(p),o);if(i)for(let g=0;g<f-1;g++)m(e[g],e[g+1],i[g+1],i[g]);else for(let g=0;g<Math.floor((f-1)/2);g++)m(e[g],e[g+1],e[f-2-g],e[f-1-g])}function be(n,t,e,i,r,s=.12,a=.08){for(let o=0;o<r;o++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,s)})`:`rgba(255,255,255,${i.range(.02,a)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const te=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},H_={floor(n,t,e,i){te(n,t,e,"#77746b");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}be(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){te(n,t,e,"#3d3c39");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}be(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){te(n,t,e,"#a9a493"),be(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){te(n,t,e,"#c9a94a"),be(n,t,e,i,500,.12,.06);const r=6,s=t/r;for(let a=0;a<r;a++)for(let o=-1;o<r;o++){const l=(o+.5+(a%2?.5:0))*s,c=(a+.5)*s;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,s*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,s*.25,0,7),n.fill()}},yellow(n,t,e,i){te(n,t,e,"#e2b81e"),be(n,t,e,i,700,.22,.05)},white(n,t,e){te(n,t,e,"#ffffff")},black(n,t,e){te(n,t,e,"#0b0b0b")},blackout(n,t,e){te(n,t,e,"#000000")},navy(n,t,e,i){te(n,t,e,"#14213d"),be(n,t,e,i,200,.1,.04)},cream(n,t,e,i){te(n,t,e,"#e6dfc6"),be(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){te(n,t,e,"#2a2c2e"),be(n,t,e,i,200,.1,.05)},metal(n,t,e,i){te(n,t,e,"#9aa0a3");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,r,t,1)},steelDark(n,t,e,i){te(n,t,e,"#3b3f42");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,r,t,1)},wood(n,t,e,i){te(n,t,e,"#6b4526");for(let r=0;r<90;r++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let r=1;r<4;r++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,r*e/4-1,t,2)},rubber(n,t,e,i){te(n,t,e,"#161616"),be(n,t,e,i,200,.2,.08)},tread(n,t,e){te(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){te(n,t,e,"#6f6c64"),be(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let r=0;r<t;r+=8)n.fillRect(r,4,4,8)},riser(n,t,e,i){te(n,t,e,"#4a4843"),be(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){te(n,t,e,"#1f1d1a"),be(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){te(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),be(n,t,e,i,300,.2,.1)},grille(n,t,e){te(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){te(n,t,e,"#3a3936"),be(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${ve}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),be(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){te(n,t,e,"#e3dfd0"),be(n,t,e,i,900,.25,.04)},cable(n,t,e,i){te(n,t,e,"#23211e"),be(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((s,a)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][a],n.fillRect(0,e*s,t,a%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*s,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){te(n,t,e,"#141311"),be(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let r=1;r<4;r++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,r*e/4,t,2)},lamp(n,t,e){te(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){te(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let r=20+i/8%2*4;r<t-16;r+=8)n.fillRect(r,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){te(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){te(n,t,e,"#7d8386"),be(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},eo=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},G_={door(n,t,e,i){eo(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${En}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let r=0;r<60;r++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,r=t/i;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const s=5,a=e/s;for(let o=0;o<s;o++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*r,o*a),n.lineTo((l+1)*r,(o+1)*a),n.stroke(),n.beginPath(),n.moveTo((l+1)*r,o*a),n.lineTo(l*r,(o+1)*a),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${ve}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(r,s,a)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,r,t*.2,0,7),n.fill(),n.fillStyle=s,n.beginPath(),n.arc(t/2,r,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${En}`,n.fillText(a,t/2,r+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let r=28;r<t-24;r+=8)n.fillRect(r,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let r=0;r<5;r++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,r*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,r*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const r of[.08,.5,.92])n.fillRect(t*r-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${En}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){eo(n,t,e,"#1d1a17");const r=6,s=t/r;for(let o=0;o<r;o++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(o*s+2,3,s-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(o*s+2,3,s-4,4)}const a=n.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(10,8,6,0.08)"),a.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=a,n.fillRect(0,0,t,e);for(let o=0;o<260;o++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){eo(n,t,e,"#6a6f72");for(let r=0;r<e;r+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,r,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r+9,t,3);for(let r=0;r<120;r++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}},hi=1024,Je=128,xu={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1]};let Dr=null,no=null;function V_(){if(Dr)return Dr;Dr=An(hi,hi);const n=Dr.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,hi,hi);const t={...H_,...G_};for(const[e,[i,r,s,a]]of Object.entries(xu)){const o=t[e];n.save(),n.translate(i*Je,r*Je),n.beginPath(),n.rect(0,0,s*Je,a*Je),n.clip(),o?o(n,s*Je,a*Je,new Re(lr(e))):(n.fillStyle="#f0f",n.fillRect(0,0,s*Je,a*Je)),n.restore()}return Dr}function W_(){return no||(no=El(V_())),no}function Ht(n,t=3){const e=xu[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*Je+t,r=e[1]*Je+t,s=e[2]*Je-t*2,a=e[3]*Je-t*2;return[i/hi,1-(r+a)/hi,(i+s)/hi,1-r/hi]}function Qs(n,t,e,i,r){const s=Ht(n);return[s[0]+(s[2]-s[0])*t,s[1]+(s[3]-s[1])*e,s[0]+(s[2]-s[0])*i,s[1]+(s[3]-s[1])*r]}function ne(n){return Qs(n,.4,.4,.6,.6)}const X_=()=>Ht("lamp"),q_=()=>ne("metal");function Fi(n,t,e,i={}){const r=i.len||1.25,s=.14,a=i.x||0,[o,,l]=_e(t,a,0);n.place(o,t.y+e,l,t.yaw);const h={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-s/2,-.07,-r/2],[s/2,-.07,-r/2],[s/2,-.07,r/2],[-s/2,-.07,r/2],[0,-1,0],X_(),h),n.box("atlas",-s/2,-.07,-r/2,s/2,0,r/2,q_(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(o,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function yu(n,t,e,i,r={}){const s=e[e.length-1]-e[0],a=Math.max(0,Math.round(s/4.4)-1),o=[];for(let l=1;l<=a;l++){const c=e[0]+s*l/(a+1);let h=0;for(;h<e.length-1&&e[h]<c;)h++;const u=t[h];Fi(n,u,i-.04,{dead:!!r.dark,flick:r.faulty===l-1}),o.push(u)}return o}function mi(n,t,e){Fi(n,t,e-.04,{noLight:!0}),Pi(n,t,1.56)}function Pi(n,t,e,i="floor"){const[r,,s]=_e(t,0,0);n.place(r,t.y,s,t.yaw),n.quad("atlas",[-e,-.003,-.16],[e,-.003,-.16],[e,-.003,.16],[-e,-.003,.16],[0,1,0],ne(i)),n.setXf(null)}function Zn(n,t,e,i,r,s,a,o,l,c,h=.02){const u=i*(r-h),f=[u,s,i>0?-a/2:a/2],m=[u,s,i>0?a/2:-a/2],[g,,_]=_e(e,0,0);n.place(g,e.y,_,e.yaw),n.quad(t,f,m,[m[0],s+o,m[2]],[f[0],s+o,f[2]],[-i,0,0],l,c),n.setXf(null);const d=_e(e,u,s+o/2);return{x:d[0],y:d[1],z:d[2]}}function $_(n,t,e,i,r,s,a,o="steelDark",l=.035){const c=ne(o);Zn(n,"atlas",t,e,i,r-l,s+2*l,l,c,null,.03),Zn(n,"atlas",t,e,i,r+a,s+2*l,l,c,null,.03);const[h,,u]=_e(t,0,0);n.place(h,t.y,u,t.yaw);const f=e*(i-.03);for(const m of[-s/2-l,s/2])n.quad("atlas",[f,r,m],[f,r,m+l],[f,r+a,m+l],[f,r+a,m],[-e,0,0],c);n.setXf(null)}function Zs(n,t,e,i,r,s,a,o,l,c=0){const[h,,u]=_e(e,c,0);n.place(h,e.y,u,e.yaw),n.quad(t,[r/2,i,-.03],[-r/2,i,-.03],[-r/2,i+s,-.03],[r/2,i+s,-.03],[0,0,-1],a,l),o&&n.quad(t,[-r/2,i,.03],[r/2,i,.03],[r/2,i+s,.03],[-r/2,i+s,.03],[0,0,1],o,l);const f=ne("signBack");n.box("atlas",-r/2,i,-.03,r/2,i+s,.03,f,null,"xXyY");for(const m of[-r*.35,r*.35])n.box("atlas",m-.012,i+s,-.012,m+.012,i+s+.5,.012,f,null,"xXzZ");return n.setXf(null),{x:h,y:e.y+i+s/2,z:u}}const Y_=["Ladies and gentlemen, there is a good service on the Northern line.","This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Please stand behind the yellow line, and stand clear of the doors.","Please keep your belongings with you at all times.","Customers are reminded that the last northbound train has departed.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail.","Please stand on the right on the escalators.","See it, say it. Speak to a member of staff, if you can find one."],j_=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on the Northern line, and on all other lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train does not stop at {next}. The next train does not stop.","This is {station}. The next station is {station}."],Z_=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","This is North End. This station was never opened. Please do not alight here.","Please do not turn round."],ta=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.'},{key:"line",title:"STAFF NOTICE",text:"Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. After Hampstead the line comes out into the open air. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards."},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.'},{key:"tiles",title:"STAFF NOTICE",text:"Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line."},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away."},{key:"train",title:"NIGHT STAFF",text:'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"'}],K_=["Service information: Good service on all lines. (All of them?)","Thought for the day: The way out is always signed. Not every sign is the way out.","Thought for the day: If in doubt, listen. Then ask who is speaking.","Service information: This station closed at 00:47. If you are reading this, please leave.","Lost property: one umbrella, one left glove, one passenger.","Thought for the day: A clock is only wrong in one direction.","Northern line: Good service. Bank branch: Good service. This platform: closed.","Thought for the day: Mornington Crescent. (You cannot say that yet.)","Lifts out of service. Please use the 320 steps. Do not count them."],J_=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"],["The Heath","Fresh air, four stops north"],["Night service","Does not run tonight"],["Keep left","Unless it says keep right"],["Lost property","It will turn up at Baker Street"],["Camden Lock Market","Open Sundays. Closed now"]],Q_=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],tv=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function ev(n,t,e,i,r,s){const[a,o,l]=r;n.fillStyle=a,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=o,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let h=0;h<5;h++)n.fillRect(0,e*(.46+h*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let h=0;h<14;h++){n.fillStyle=h%2?o:l,n.beginPath(),n.moveTo(0,0);const u=Math.PI+h/14*Math.PI,f=Math.PI+(h+1)/14*Math.PI;n.lineTo(Math.cos(u)*t*2,Math.sin(u)*t*2),n.lineTo(Math.cos(f)*t*2,Math.sin(f)*t*2),n.fill()}n.restore(),n.fillStyle=a,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let h=6;h>0;h--)n.fillStyle=h%2?o:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*h/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=o,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=o,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(s){n.fillStyle="rgba(8,8,8,0.92)";const h=t*i.range(.25,.75),u=e*.62,f=e*.12;n.beginPath(),n.ellipse(h,u-f*1.25,f*.2,f*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(h-f*.32,u),n.lineTo(h-f*.22,u-f),n.lineTo(h+f*.22,u-f),n.lineTo(h+f*.32,u),n.fill()}}function rs(n,t,e,i,r=!1,s=!1){if(s){const u=Math.max(2,Math.min(t,e)*.035);n.fillStyle="#62676a",n.fillRect(0,0,t,e),n.save(),n.translate(u,u),n.beginPath(),n.rect(0,0,t-2*u,e-2*u),n.clip();const f=rs(n,t-2*u,e-2*u,i,r,!1);return n.restore(),f}const a=i.pick(tv),[o,l]=i.pick(r?Q_:J_);ev(n,t,e,i,a,r);const c=a[2];n.fillStyle=a[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=a[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=a[1]===a[0]?c:a[1],n.font=`400 ${e*.085}px ${ve}`;const h=Kr(n,o,t*.86).slice(0,2);return h.forEach((u,f)=>n.fillText(u,t/2,e*(.775+f*.085)-(h.length-1)*e*.02,t*.9)),n.fillStyle=a[2]===a[0]?"#fff":a[2],$e(n,l,t*.84,e*.045,En,700),n.fillText(l,t/2,e*.93),Zr(n,0,0,t,e,i.int(1,99999),.6),{headline:o,strap:l}}function nl(n,t,e,i,r){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,i.title,t*.86,e*.1,ve),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let s=e*.07,a;for(;n.font=`400 ${s}px ${En}`,a=Kr(n,i.text,t*.86),!(a.length*s*1.25<e*.74||s<5);)s*=.92;a.forEach((o,l)=>n.fillText(o,t*.07,e*.22+l*s*1.25)),n.fillStyle="#b3261e";for(const[o,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*o,e*l+2,Math.max(2,t*.018),0,7),n.fill();r&&Zr(n,0,0,t,e,r.int(1,99999),.5)}function nv(n,t,e,i,r){n.fillStyle="#b9bcbd",n.fillRect(0,0,t,e),n.fillStyle="#f7f7f2",n.fillRect(t*.03,e*.04,t*.94,e*.92),n.fillStyle="#14213d",n.fillRect(t*.03,e*.04,t*.94,e*.16),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,"Service information",t*.8,e*.1,ve),n.fillText("Service information",t/2,e*.125),n.fillStyle="#1d2f8a",n.textAlign="left",n.textBaseline="top";let s=e*.09,a;for(;n.font=`italic 400 ${s}px ${En}`,a=Kr(n,i,t*.84),!(a.length*s*1.3<e*.68||s<5);)s*=.92;a.forEach((o,l)=>{n.save(),n.translate(t*.08,e*.25+l*s*1.3),n.rotate(r?r.range(-.02,.02):0),n.fillText(o,0,0),n.restore()})}const Hr={exit:{level:0,text:"Exit"},in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},no:{level:0,text:"No way out"},red:{level:0,text:"Way out",bg:"#b3261e",fg:dn.white},blue:{level:1,text:"Way out",bg:dn.blue,fg:dn.white},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a",fg:dn.black},serif:{level:2,text:"Way out",font:"Georgia, 'Times New Roman', serif"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function iv(n,t,e=!1){const i=n?Hr[n]:null,r={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",s=i?i.text:"Way out";let a=e?" (yellow on black)":" (black on yellow)";if(i&&i.bg===dn.blue)a=" (white on blue)";else if(i&&i.bg==="#b3261e")a=" (white on red)";else if(i&&i.bg)a=" (black on pale green)";else if(i&&i.mirror)a=" (the lettering is back to front)";else{if(i&&i.arrow2)return`↔ ${s}`;i&&i.flipArrow?a=" (the arrow points the other way)":i&&i.font&&(a=" (the lettering has serifs)")}return t==="left"?`${r} ${s}${a}`:`${s} ${r}${a}`}function _a(n,t,e,{dir:i="up",defect:r=null,inverted:s=!1}={}){const a=r?Hr[r]:{},o=a.bg||(s?dn.black:dn.yellow),l=a.fg||(s?dn.yellow:dn.black);n.fillStyle=o,n.fillRect(0,0,t,e);const c=n.createLinearGradient(0,0,0,e);c.addColorStop(0,"rgba(0,0,0,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0.10)"),c.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=Tl("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const h=a.text||"Way out",u=e*.56,f=i!=="right",m=f?e*.52:t-e*.52,g=f?e*1:e*.3,_=f?t-e*.3:t-e*1;let d=i;a.flipArrow&&(d={left:"right",right:"left",up:"down"}[i]),tl(n,m,e/2,u,d,l),a.arrow2&&tl(n,m,e/2,u,{left:"right",right:"left",up:"down"}[i],l),n.fillStyle=l,n.textBaseline="middle",$e(n,h,_-g,e*.62,a.font||ve),n.save(),a.mirror?(n.translate((g+_)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(h,0,e*.53)):(n.textAlign=f?"left":"right",n.fillText(h,f?g:_,e*.53)),n.restore()}function Jc(n,t,e,i,r={}){n.fillStyle="#f7f6ee",n.fillRect(0,0,t,e),n.fillStyle="#2b2d2f",n.fillRect(0,0,t,Math.max(1,e*.07)),n.fillRect(0,e-Math.max(1,e*.07),t,Math.max(1,e*.07)),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(t-1,0,1,e);const s=r.arrow?e*2.7:0;n.fillStyle="#0019a8",n.textAlign="center",n.textBaseline="middle";try{n.letterSpacing=`${(e*.035).toFixed(1)}px`}catch{}$e(n,i.toUpperCase(),(t-s)*.62,e*.56,ve),n.fillText(i.toUpperCase(),(t-s)*.5,e*.53);try{n.letterSpacing="0px"}catch{}r.note&&(n.font=`400 ${e*.24}px ${En}`,n.textAlign="left",n.fillText(r.note,e*.3,e*.52)),r.arrow&&(n.save(),n.translate(t-s-e*.25,e*.2),_a(n,s,e*.6,{dir:r.arrow,inverted:!0}),n.restore())}function rv(n,t,e,i,r){const a=e/7,o=a*3;n.fillStyle=r.grout,n.fillRect(0,0,t,e);for(let u=0;u<7;u++)for(let f=u%2?-o/2:0;f<t;f+=o)n.fillStyle=Tl(r.ground,(u*7+Math.round(f/o)*13)%9/100-.05),n.fillRect(f+.5,u*a+.5,o-1,a-1);const l=`· ${i.toUpperCase().split(" ").join(" · ")} ·`;n.fillStyle=r.letter||r.skirt,n.textAlign="center",n.textBaseline="middle";const c=a*5*1.36;n.font=`700 ${c}px Georgia, 'Times New Roman', serif`;const h=n.measureText(l).width;n.save(),n.translate(t/2,e*.52),n.scale(Math.min(.86,t*.96/h),1),n.fillText(l,0,0),n.restore();for(let u=1;u<7;u++)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,u*a,t,1)}function va(n,t,e,i,{bg:r=dn.blue,fg:s=dn.white,sub:a=""}={}){n.fillStyle=r,n.fillRect(0,0,t,e),n.strokeStyle=s,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=s,n.textAlign="center",n.textBaseline="middle",$e(n,i,t*.84,e*(a?.4:.52),ve),n.fillText(i,t/2,e*(a?.38:.53)),a&&($e(n,a,t*.84,e*.22,En),n.fillText(a,t/2,e*.72))}function Mu(n,t,e,i,r,s=null){n.fillStyle=r.ground,n.fillRect(0,0,t,e);const a=e/5;n.strokeStyle=r.grout,n.lineWidth=1;for(let c=0;c<t;c+=a*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=a)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=r.band,n.lineWidth=a*.55,n.strokeRect(a*.3,a*.3,t-a*.6,e-a*.6),n.fillStyle=r.skirt,n.textAlign="center",n.textBaseline="middle";const o=s?t*.6:t*.8;$e(n,i,o,e*.42,ve);const l=s==="left"?t*.6:s==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),s){const c=s==="left"?t*.17:t*.83,h=s==="left"?-1:1;n.beginPath(),n.moveTo(c-h*e*.42,e*.5),n.lineTo(c+h*e*.05,e*.42),n.lineTo(c+h*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+h*e*.2,e*.5),n.lineTo(c-h*e*.02,e*.3),n.lineTo(c-h*e*.02,e*.7),n.closePath(),n.fill()}}const Qc={northern:"#000000",bakerloo:"#b36305",central:"#e32017",circle:"#ffd300",district:"#00782a",hammersmith:"#f3a9bb",jubilee:"#a0a5a9",metropolitan:"#9b0056",piccadilly:"#003688",victoria:"#0098d4",waterloo:"#95cdba",elizabeth:"#6950a1",dlr:"#00a4a7",rail:"#e1251b"},th={northern:"Northern",bakerloo:"Bakerloo",central:"Central",circle:"Circle",district:"District",hammersmith:"Hammersmith & City",jubilee:"Jubilee",metropolitan:"Metropolitan",piccadilly:"Piccadilly",victoria:"Victoria",waterloo:"Waterloo & City",elizabeth:"Elizabeth line",dlr:"DLR",rail:"National Rail"},Su={edgware:["Edgware","Burnt Oak","Colindale","Hendon Central","Brent Cross","Golders Green","Hampstead","Belsize Park","Chalk Farm"],barnet:["High Barnet","Totteridge & Whetstone","Woodside Park","West Finchley","Finchley Central","East Finchley","Highgate","Archway","Tufnell Park","Kentish Town"],charingX:["Mornington Crescent","Euston","Warren Street","Goodge Street","Tottenham Court Road","Leicester Square","Charing Cross","Embankment","Waterloo"],bank:["Euston","King's Cross St. Pancras","Angel","Old Street","Moorgate","Bank","London Bridge","Borough","Elephant & Castle"],morden:["Oval","Stockwell","Clapham North","Clapham Common","Clapham South","Balham","Tooting Bec","Tooting Broadway","Colliers Wood","South Wimbledon","Morden"],battersea:["Nine Elms","Battersea Power Station"]},ea={at:"Finchley Central",name:"Mill Hill East"},xa={Euston:["victoria","rail"],"Warren Street":["victoria"],"Tottenham Court Road":["central","elizabeth"],"Leicester Square":["piccadilly"],"Charing Cross":["bakerloo","rail"],Embankment:["bakerloo","circle","district"],Waterloo:["bakerloo","jubilee","waterloo","rail"],"King's Cross St. Pancras":["circle","hammersmith","metropolitan","piccadilly","victoria","rail"],"Old Street":["rail"],Moorgate:["circle","hammersmith","metropolitan","elizabeth","rail"],Bank:["central","waterloo","dlr"],"London Bridge":["jubilee","rail"],"Elephant & Castle":["bakerloo","rail"],Stockwell:["victoria"],Balham:["rail"],"Kentish Town":["rail"]},Cl=[["North End","Golders Green","Hampstead"],["South Kentish Town","Kentish Town","Camden Town"],["City Road","Angel","Old Street"],["King William Street","Bank","London Bridge"]],il=["Mornington Crescent","Camden Town","Chalk Farm","Belsize Park","Hampstead"],sv="Golders Green",na={"Mornington Crescent":{theme:{id:"mornington",ground:"#ece4c4",band:"#1d2a5e",accent:"#1d2a5e",skirt:"#182250",grout:"#bdb596",letter:"#7a1f2b"}},"Camden Town":{theme:{id:"camden",ground:"#e9e6cf",band:"#5d86c5",accent:"#5d86c5",skirt:"#3f5f96",grout:"#b9b6a0",letter:"#27406f"}},"Chalk Farm":{theme:{id:"chalk",ground:"#ede6cd",band:"#9a1b24",accent:"#9a1b24",skirt:"#7a141c",grout:"#beb69c",letter:"#6f141c"}},"Belsize Park":{theme:{id:"belsize",ground:"#ebe3c6",band:"#4d2418",accent:"#4d2418",skirt:"#3d1c12",grout:"#bdb497",letter:"#3a160f"}},Hampstead:{tiled:"Heath Street",theme:{id:"hampstead",ground:"#ece2bd",band:"#a66f6a",accent:"#a66f6a",skirt:"#5a1820",grout:"#beb38f",letter:"#5a1820"}},"Golders Green":{theme:{id:"golders",ground:"#eee9d6",band:"#2a5a3c",accent:"#2a5a3c",skirt:"#1f4530",grout:"#bfbaa6",letter:"#1f4530"}}},av=n=>n>=il.length?sv:il[Math.max(0,n)],bu=n=>(na[n]||na["Mornington Crescent"]).theme,ov=n=>na[n]&&na[n].tiled||n,Ui=n=>n==="north"?1:2,yr=n=>n==="north"?"Northbound":"Southbound",rl="#16213f",lv="#1c3f94",cv="#f6f6f1";function hv(n){let t=0;for(const e of n)t+=e.type==="trunk"?e.stations.length:Math.max(e.left.length,e.right.length)+(e.rejoin?1:0)+(e.spur?.6:0);return t}function uv(n,t,e,i,r,s,a,o){const l=xa[t];if(!l)return;let c=e;for(const h of l.slice(0,5)){const u=h==="rail"?s*1.5:s*2,f=s*.62,m=r<0?c-u:c;if(m<a||m+u>o)break;h==="rail"?(n.strokeStyle=Qc.rail,n.lineWidth=Math.max(1,s*.2),n.lineJoin="miter",n.beginPath(),n.moveTo(m,i-f*.42),n.lineTo(m+u,i-f*.42),n.lineTo(m,i+f*.42),n.lineTo(m+u,i+f*.42),n.stroke()):(n.fillStyle=Qc[h],n.fillRect(m,i-f/2,u,f)),c+=r*(u+s*.45)}}function io(n,t,e,i,r,s,a={}){const o=Math.max(2,s*.42),l=!!xa[t]||a.circle;n.strokeStyle="#000",n.fillStyle="#000",n.lineWidth=o,a.terminus&&(n.beginPath(),n.moveTo(e-s*.7,i),n.lineTo(e+s*.7,i),n.stroke()),l?(n.fillStyle="#fff",n.beginPath(),n.arc(e,i,s*.55,0,7),n.fill(),n.lineWidth=Math.max(1.5,s*.26),n.beginPath(),n.arc(e,i,s*.55,0,7),n.stroke()):a.terminus||(n.beginPath(),n.moveTo(e,i),n.lineTo(e+r*s*.85,i),n.stroke());const c=e+r*s*1.35;n.textAlign=r<0?"right":"left",n.textBaseline="middle";let h=[t];if(t.length>17&&t.includes(" ")){const _=t.split(" ");let d=1,p=1/0;for(let y=1;y<_.length;y++){const v=Math.abs(_.slice(0,y).join(" ").length-_.slice(y).join(" ").length);v<p&&(p=v,d=y)}h=[_.slice(0,d).join(" "),_.slice(d).join(" ")]}let u=s*(h.length>1?1:1.18);const f=(a.room||1e9)-s*1.5;n.font=`400 ${u}px ${ve}`;let m=Math.max(...h.map(_=>n.measureText(_).width));m>f&&(u*=f/m,n.font=`400 ${u}px ${ve}`,m=f);const g=h.length>1?u*.52:0;if(a.current){const _=r<0?c-m-s*.5:c-s*.5,d=h.length>1?s*2.5:s*1.8;n.fillStyle=lv,n.fillRect(_,i-d/2,m+s,d),n.fillStyle="#fff"}else n.fillStyle=a.odd?"#5a0d14":rl;a.current&&a.blank||h.forEach((_,d)=>n.fillText(_,c,i+s*.06+(h.length>1?d?g:-g:0))),uv(n,t,c+r*(m+s*(a.current?1.1:.7)),i,r,s,a.lo??-1e9,a.hi??1e9)}function Pl(n,t,e,i,r={}){n.fillStyle=cv,n.fillRect(0,0,t,e);const s=Math.max(3,t*.022);n.strokeStyle="#5f6467",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const a=t*.075;n.fillStyle=rl,n.textAlign="left",n.textBaseline="alphabetic",n.font=`400 ${e*.03}px ${En}`,n.fillText("Northern line",a,e*.052),$e(n,`${yr(r.dir)} platform ${Ui(r.dir)}`,t-a*2,e*.047,ve),n.fillText(`${yr(r.dir)} platform ${Ui(r.dir)}`,a,e*.102),n.strokeStyle="#9aa0a3",n.lineWidth=Math.max(1,e*.003),n.beginPath(),n.moveTo(a,e*.128),n.lineTo(t-a,e*.128),n.stroke();const o=e*.17,l=e*.965,c=hv(i),h=Math.min(e*.052,(l-o)/Math.max(1,c)),u=Math.min(h*.6,t*.03),f=t*.37,m=t*.57,g=f-t*.05,_=t*.95-m,d=Math.max(2,u*.42),p=b=>{n.strokeStyle="#000",n.lineWidth=d,n.lineJoin="round",n.lineCap="butt",n.beginPath(),b.forEach((T,P)=>P?n.lineTo(T[0],T[1]):n.moveTo(T[0],T[1])),n.stroke()},y=r.odd||new Set;let v=o+h*.5,x=!0;const C=i.length===1;i.forEach((b,T)=>{const P=i[T+1];if(b.type==="trunk"){const S=C||T>0?1:-1,M=i[T-1],A=M&&M.rejoin?v-h:v,N=v+h*(b.stations.length-1);p([[f,A],[f,P?N+h*.5:N]]),b.stations.forEach((L,I)=>{const D=x&&I===0;io(n,L,f,v,S,u,{current:D,blank:D&&b.hideCurrent,circle:D,terminus:!P&&I===b.stations.length-1,odd:y.has(L),room:S<0?g:t*.95-f,lo:t*.045,hi:t*.955}),v+=h}),x=!1}else{const S=Math.max(b.left.length,b.right.length),M=v-h*.5,A=v+h*(S-1),N=v+h*(b.left.length-1),L=v+h*(b.right.length-1);if(p([[f,M],[f,b.rejoin?A+h:N]]),p([[f,M],[f+u*.8,M+h*.12],[m-u*.8,M+h*.12],[m,M+h*.45],[m,b.rejoin?A+h*.45:L]]),b.rejoin&&p([[m,A+h*.45],[m-u*.8,A+h*.82],[f+u*.8,A+h*.82],[f,A+h]]),b.left.forEach((I,D)=>io(n,I,f,v+h*D,-1,u,{terminus:!b.rejoin&&D===b.left.length-1,odd:y.has(I),room:g,lo:t*.045,hi:t*.955})),b.right.forEach((I,D)=>io(n,I,m,v+h*D,1,u,{terminus:!b.rejoin&&D===b.right.length-1,odd:y.has(I),room:_,lo:t*.045,hi:t*.955})),b.spur&&b.left.includes(b.spur.at)){const I=v+h*b.left.indexOf(b.spur.at),D=(f+m)/2;p([[f,I+h*.5],[D-u*.6,I+h*.5],[D,I+h*.68],[D,I+h*1]]),p([[D-u*.7,I+h*1],[D+u*.7,I+h*1]]),n.fillStyle=rl,n.textAlign="center",n.textBaseline="top",n.font=`400 ${u*.95}px ${ve}`,b.spur.name.replace(" East",`
East`).split(`
`).forEach((H,$)=>n.fillText(H,D,I+h*1.12+$*u*1.05))}v=A+h*(b.rejoin?2:1)}})}const{edgware:rr,barnet:Eu,charingX:ur,bank:Tu,morden:wu,battersea:Au}=Su,Gr=n=>n.slice().reverse(),ro=[{type:"trunk",stations:["Kennington"]},{type:"split",left:wu,right:Au,rejoin:!1,labels:["to Morden","to Battersea Power Station"]}],eh={type:"split",left:ur,right:Tu,rejoin:!0,labels:["via Charing Cross","via Bank"]},fv={type:"split",left:Gr(Eu),right:Gr(rr),rejoin:!1,labels:["High Barnet branch","Edgware branch"],spur:ea};function ss(n,t){const e=rr.indexOf(n),i=ur.indexOf(n),r=a=>({...a,left:a.left&&a.left.slice(),right:a.right&&a.right.slice(),stations:a.stations&&a.stations.slice()});let s;return t==="north"?e>=0?s=[{type:"trunk",stations:Gr(rr.slice(0,e+1))}]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town",...Gr(rr)]}]:s=[{type:"trunk",stations:[...Gr(ur.slice(0,Math.max(0,i)+1)),"Camden Town"]},fv]:e>=0?s=[{type:"trunk",stations:[...rr.slice(e),"Camden Town"]},eh,...ro]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town"]},eh,...ro]:s=[{type:"trunk",stations:[...ur.slice(Math.max(0,i)),"Kennington"]},ro[1]],s.map(r)}function dv(n,t){const e=ur.includes(n);return t==="north"?e?[["Edgware",""],["High Barnet",""],["Edgware",""],["Mill Hill East",""]]:[["Edgware",""],["Edgware",""],["Golders Green",""]]:e?[["Battersea Power Station",""],["Kennington",""],["Morden",""]]:[["Morden","via Bank"],["Kennington","via Charing Cross"],["Battersea Power Station","via Charing Cross"],["Morden","via Bank"]]}function Ru(n,t,e=""){const i=ss(n,t);if(i[0].stations.length>1)return i[0].stations[1];const r=i[1];return r?t==="north"?e==="High Barnet"?r.left[0]:r.right[0]:e==="via Bank"?r.right[0]:r.left[0]:null}const pv=n=>{const t=xa[n];if(!t)return"";const e=t.map(i=>i==="rail"?"National Rail services":i==="dlr"||i==="elizabeth"?`the ${th[i]}`:`the ${th[i]} line`);return`Change here for ${e.length>1?`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`:e[0]}.`};function mv(n,t){const e=[],i=r=>{r&&r!==n&&!e.includes(r)&&e.push(r)};return ss(n,t).forEach((r,s)=>{r.type==="trunk"?(s===0&&i(r.stations[1]),i(r.stations[r.stations.length-1])):r.rejoin?r.labels.forEach(a=>i(a.replace("via ",""))):(i(r.left[r.left.length-1]),i(r.right[r.right.length-1]))}),e}function gv(n,t,e=""){return n==="Camden Town"?t==="north"?"Change here for the High Barnet branch.":e==="via Bank"?"Change here for trains via Charing Cross.":"Change here for trains via Bank.":pv(n)}function _v(n,t,e,i=""){const r=Ru(n,t,i||e)||n,s=gv(n,t,i);return`This is ${n}. ${s?`${s} `:""}This is a Northern line train to ${e}${i?` ${i}`:""}. The next station is ${r}. The doors will not open at this station.`}const vv=n=>`This is ${n}. The next station is ${n}. The doors will not open at this station.`;function ia(n,t,e){const i=[];if(n.forEach((r,s)=>{if(r.type==="trunk")i.push({arr:r.stations,prev:null,si:s});else{const a=n[s-1]?n[s-1].stations[n[s-1].stations.length-1]:null;i.push({arr:r.left,prev:a,si:s},{arr:r.right,prev:a,si:s})}}),t==="ghost"){for(const[r,s,a]of e.shuffle(Cl))for(const{arr:o,prev:l}of i)for(let c=0;c<o.length;c++){const h=c===0?l:o[c-1];if(h===s&&o[c]===a||h===a&&o[c]===s)return o.splice(c,0,r),"ghost"}return null}if(t==="swap"){const r=i.filter(o=>o.arr.length>=4);if(!r.length)return null;const{arr:s}=e.pick(r),a=e.int(1,s.length-3);return[s[a],s[a+1]]=[s[a+1],s[a]],"swap"}if(t==="repeat"){const r=n[0].stations;for(let s=1;s<Math.min(4,r.length);s++)r[s]=r[0];return r.length>1?"repeat":null}return t==="missing"?(n[0].hideCurrent=!0,"missing"):null}function Cu(n,t,e){const i=s=>s.join(", "),r=[`Northern line. ${yr(t)} platform ${Ui(t)}.`];return e.forEach((s,a)=>{if(s.type==="trunk"){const o=a===0?s.stations.slice(1):s.stations;a===0&&r.push(s.hideCurrent?"This station: (the box is blank).":`This station: ${s.stations[0]}.`),o.length&&r.push(`${a===0?"Then":"Then on to"} ${i(o)}.`)}else{let o=i(s.left);s.spur&&s.left.includes(s.spur.at)&&(o+=` (and ${s.spur.name}, from ${s.spur.at})`);const l=c=>c[0].toUpperCase()+c.slice(1);r.push(`${l(s.labels[0])}: ${o}. ${l(s.labels[1])}: ${i(s.right)}.`)}}),r.join(" ")}function xv(n,t=[]){const e=r=>r.join(", "),i=t.length?` Also marked: ${e(t.map(r=>r[0]))}.`:"";return`Northern line. You are here: ${n}. Edgware branch: ${e(rr)}. High Barnet branch: ${e(Eu)} (and ${ea.name}). Then Camden Town. Via Charing Cross: ${e(ur)}. Via Bank: ${e(Tu)}. Then Kennington. To Morden: ${e(wu)}. To Battersea Power Station: ${e(Au)}.${i}`}const qn=Lt.W/2;function Pu(n){const t=n.env.seenNotices||new Set,e=ta.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:ta)}const yv=3;function nh(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=n.posterPool||(n.posterPool=[]);let c;if(l.length<yv){const u=o.chance(Math.min(.7,(n.env.wrong||0)*.17));let f;c={uv:a.add(104,164,(g,_,d)=>{f=rs(g,_,d,o,u)}),text:`${f.headline}. ${f.strap}.`},l.push(c)}else c=l[o.int(0,l.length-1)];const h=Zn(s,"sheet",t,e,r,.52,.64,1,c.uv,null,.045);$_(s,t,e,r-.01,.52,.64,1),i.push({...h,r:4.2,label:"read poster",title:"POSTER",text:c.text})}function ih(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=Pu(n),c=a.add(168,216,(u,f,m)=>nl(u,f,m,l,o)),h=Zn(s,"sheet",t,e,r,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...h,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:u=>u.story.noticeRead(l.key)})}function Mv(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=o.pick(K_),c=a.add(200,150,(u,f,m)=>nv(u,f,m,l,o)),h=Zn(s,"sheet",t,e,r,.7,.86,.645,c,null,.045);i.push({...h,r:4.2,label:"read board",title:"SERVICE INFORMATION",text:l})}const so=.95,Us=2,rh=.25;function Sv(n,t,e){const{b:i}=n;Zn(i,"atlas",t,e,qn-rh+.03,0,so,Us,Ht("door"),null,.03);const r=ne("steelDark"),[s,,a]=_e(t,0,0);i.place(s,t.y,a,t.yaw);const o=e*qn,l=e*(qn-rh),c=.06,h=-so/2-c,u=so/2+c,f=Us+c;i.quad("atlas",[l,0,h],[l,0,h+c],[l,f,h+c],[l,f,h],[-e,0,0],r),i.quad("atlas",[l,0,u-c],[l,0,u],[l,f,u],[l,f,u-c],[-e,0,0],r),i.quad("atlas",[l,Us,h],[l,Us,u],[l,f,u],[l,f,h],[-e,0,0],r),i.quad("atlas",[o,0,h],[l,0,h],[l,f,h],[o,f,h],[0,0,-1],r),i.quad("atlas",[l,0,u],[o,0,u],[o,f,u],[l,f,u],[0,0,1],r),i.quad("atlas",[o,f,h],[l,f,h],[l,f,u],[o,f,u],[0,1,0],r),i.setXf(null)}function sh(n,t,e,i,r,s,a){Zn(n.b,i==="extinguisher"?"cut":"atlas",t,e,qn,r,s,a,Ht(i),null,.04)}function bv(n,t,e,i){const{b:r,sheet:s,rng:a}=n,o=a.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=s.add(220,54,(h,u,f)=>Mu(h,u,f,o,n.theme,null)),c=Zn(r,"sheet",t,e,qn,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:o})}function Ev(n,t,e,i,r,s,a,o,l=.04){const c=Lt.W/2,h=Lt.spring,u=Lt.crown-h,f=S=>{if(S<=h)return{X:c,nx:1,ny:0};const M=Math.min(1,(S-h)/u),A=c*Math.sqrt(1-M*M),N=A/(c*c),L=(S-h)/(u*u),I=Math.hypot(N,L)||1;return{X:A,nx:N/I,ny:L/I}},m=[],g=10,_=a/g;let d=r,p=0;m.push({y:d,...f(d)});for(let S=1;S<=g;S++){const M=_*S;for(;p<M;){const N=f(d),L=f(d+.005);p+=Math.hypot(L.X-N.X,.005),d+=.005}m.push({y:d,...f(d)})}const[y,,v]=_e(e,0,0);n.place(y,e.y,v,e.yaw);const x=i>0?-s/2:s/2,C=-x,b=(S,M)=>[i*(S.X-l*S.nx),S.y-l*S.ny,M];for(let S=0;S<g;S++){const M=m[S],A=m[S+1],N=o[1]+(o[3]-o[1])*(S/g),L=o[1]+(o[3]-o[1])*((S+1)/g),I=[-i*(M.nx+A.nx)/2,-(M.ny+A.ny)/2,0];n.quad(t,b(M,x),b(M,C),b(A,C),b(A,x),I,[o[0],N,o[2],L])}n.setXf(null);const T=m[g>>1],P=_e(e,i*(T.X-l),T.y);return{x:P[0],y:P[1],z:P[2]}}function Tv(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o,env:l}=n,c=o.chance(.5)?"north":"south",h=ss(l.station,c);o.chance(Math.min(.8,(l.wrong||0)*.2))&&ia(h,o.pick(["ghost","ghost","swap","repeat"]),o);const u=a.add(200,300,(m,g,_)=>Pl(m,g,_,h,{station:l.station,dir:c})),f=Ev(s,"sheet",t,e,.6,.9,1.35,u,.04);i.push({...f,r:5,label:"read line diagram",title:"LINE DIAGRAM",text:Cu(l.station,c,h)})}function wv(n,t,e){const{rng:i}=n,r=[],s=t.every(d=>Math.abs(d.yaw)<1e-6&&Math.abs(d.y-t[0].y)<1e-6),a=e[e.length-1]-e[0];if(!s||a<5.5)return r;const o=[];for(let d=2.2;d<=a-2.2;d+=1.55)o.push(d);let l=!1,c=!1,h=!1,u=!1;const f=[],m=[],g=(d,p)=>m.push([d,p]),_=i.chance(n.env.noticeChance??.34);for(const d of[-1,1]){let p=0;for(const y of o){if(p>0){p--;continue}const v={x:0,y:0,z:y,yaw:0},x=i.next();if(_&&!l&&x<.3){g(1,()=>ih(n,v,d,r)),l=!0;continue}if(x<.1&&!h){g(0,()=>Tv(n,v,d,r)),h=!0;continue}x<.5?g(4,()=>nh(n,v,d,r)):x<.56&&y>3&&y<a-3?g(5,()=>Sv(n,v,d)):x<.62?u?g(4,()=>nh(n,v,d,r)):(g(2,()=>Mv(n,v,d,r)),u=!0):x<.67&&!c&&y<a-3?(g(3,()=>bv(n,v,d,r)),c=!0,p=1):x<.72?g(5,()=>sh(n,v,d,"grille",.25,.5,.5)):x<.76?g(5,()=>sh(n,v,d,"extinguisher",.75,.45,.45)):f.push([v,d])}}if(_&&!l&&f.length){const[d,p]=i.pick(f);g(1,()=>ih(n,d,p,r))}m.sort((d,p)=>d[0]-p[0]);for(const[,d]of m)d();return r}function Av(n,t,e){return n.sheet?wv(n,t,e):[]}const yn=.5;function Rv(n,t=3.4,e=40){const{b:i}=n,r=Lt.W/2+.1,s=Lt.crown+.1,a={emit:0};i.quad("gate",[-r,0,.06],[r,0,.06],[r,s,.06],[-r,s,.06],[0,0,1],ne("blackout"),a);const o=Ht("gate"),l={emit:.34};for(const[c,h]of[[-r,0],[0,r]])i.quad("gate",[c,0,yn],[h,0,yn],[h,s,yn],[c,s,yn],[0,0,1],o,l);return i.box("gate",-.035,0,yn-.02,.035,s,yn+.03,ne("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,yn+.03,.09,1.16,yn+.07,ne("metal"),{emit:.5},"xXyYZ"),{x0:-r,x1:r,z0:t,z1:e,gate:!0,fire:(c,h)=>c.director.commit(h)}}const ah=[-(Lt.W/2+.2),yn+.25,Lt.W/2+.2,yn+.25];function Du(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function Lu(n,t){const{b:e,p:i}=n,r=di(e,t,Lt,{floor:Ht("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const s=t[t.length-1];e.addPortal(s.x,s.y,s.z,s.yaw),mi(e,t[0],Lt.crown),yu(e,t,r.dist,Lt.crown,i.lights);const a=Av(n,t,r.dist),o={};return n.env.gate&&(o.zones=[Rv(n,3.4,r.length+1)]),{cells:r.cells,walls:r.walls,items:a,frames:t,extra:o}}const Cv={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:Du(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return Lu(n,z_(n.p.len,1))}},bi=4.5,Pv={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:Du(n,t)},exits:[{x:e*bi,y:0,z:bi,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,bi,3.3,bi+1.9]:[-bi,-.4,0,1.9,3.3,bi+1.9]}},build(n){return Lu(n,B_(bi,n.p.dir*Math.PI/2,.9))}},Lr=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function Dv(n,t,e,i){const r=n.x-i.x,s=n.y-i.y,a=t.x-i.x,o=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(r*r+s*s)*(a*c-l*o)-(a*a+o*o)*(r*c-l*s)+(l*l+c*c)*(r*o-a*s)}function Lv(n,t,e=60){const i=n.length,r=t.map(([s,a,o])=>Lr(n[s],n[a],n[o])>=0?[s,a,o]:[s,o,a]).filter(([s,a,o])=>Math.abs(Lr(n[s],n[a],n[o]))>1e-12);for(let s=0;s<e;s++){const a=new Map;r.forEach((c,h)=>{for(let u=0;u<3;u++){const f=c[u],m=c[(u+1)%3],g=f<m?f*i+m:m*i+f,_=a.get(g);_?_.push(h):a.set(g,[h])}});const o=new Set;let l=0;for(const[c,h]of a){if(h.length!==2||o.has(h[0])||o.has(h[1]))continue;const u=Math.floor(c/i),f=c%i,m=r[h[0]],g=r[h[1]],_=m.find(v=>v!==u&&v!==f),d=g.find(v=>v!==u&&v!==f),[p,y]=Lr(n[u],n[f],n[_])>0?[u,f]:[f,u];Dv(n[p],n[y],n[_],n[d])<=1e-10||Lr(n[_],n[p],n[d])<=1e-12||Lr(n[d],n[y],n[_])<=1e-12||(r[h[0]]=[_,p,d],r[h[1]]=[d,y,_],o.add(h[0]),o.add(h[1]),l++)}if(!l)break}return r}function Iv(n,t,e){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s];a.y>e!=o.y>e&&t<(o.x-a.x)*(e-a.y)/(o.y-a.y)+a.x&&(i=!i)}return i}function Uv(n,t,e){let i=1/0;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s],l=o.x-a.x,c=o.y-a.y,h=l*l+c*c;let u=h>0?((t-a.x)*l+(e-a.y)*c)/h:0;u=u<0?0:u>1?1:u,i=Math.min(i,Math.hypot(t-(a.x+l*u),e-(a.y+c*u)))}return i}function Iu(n,t,e,i,r=[]){const s=[{x:n,y:e}];for(const a of r.slice().sort((o,l)=>o[0].x-l[0].x)){s.push({x:a[0].x,y:e});for(const o of a)o.y>e+1e-6&&s.push({x:o.x,y:o.y});s.push({x:a[a.length-1].x,y:e})}return s.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),s.filter((a,o)=>o===0||Math.hypot(a.x-s[o-1].x,a.y-s[o-1].y)>1e-6)}function Uu(n,t,e,i,r={}){const s=r.layer||"tile",a=r.uv||((d,p)=>[d/6,.004+Math.max(0,p)/3.63*.992]),o=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=r.grid??1.1,c=[];i.forEach((d,p)=>{const y=i[(p+1)%i.length];c.push({x:d.x,y:d.y});const v=Math.hypot(y.x-d.x,y.y-d.y),x=l>0&&v>1.5*l?Math.ceil(v/l):1;for(let C=1;C<x;C++){const b=C/x,T=(C%2?7e-4:-7e-4)/v;c.push({x:d.x+(y.x-d.x)*b-(y.y-d.y)*T,y:d.y+(y.y-d.y)*b+(y.x-d.x)*T})}});const h=[];if(l>0){let d=1/0,p=-1/0,y=1/0,v=-1/0;for(const b of c)d=Math.min(d,b.x),p=Math.max(p,b.x),y=Math.min(y,b.y),v=Math.max(v,b.y);const x=Math.max(1,Math.round((p-d)/l)),C=Math.max(1,Math.round((v-y)/l));for(let b=1;b<x;b++)for(let T=1;T<C;T++){const P=(nn(b*73+11,T*151+5)/4294967296-.5)*.3,S=(nn(b*199+3,T*37+17)/4294967296-.5)*.3,M=d+(p-d)*(b+(T%2?.25:-.25)+P)/x,A=y+(v-y)*(T+S)/C;r.keep&&!r.keep(M,A)||!Iv(c,M,A)||Uv(c,M,A)<l*.3||h.push([new Zt(M,A)])}}const u=c.map(d=>new Zt(d.x,d.y)),f=bl.triangulateShape(u,h),m=u.concat(h.map(d=>d[0])),g=Lv(m,f),_=d=>_e(t,d.x,d.y);for(const[d,p,y]of g){const v=m[d],x=m[p],C=m[y];n.tri(s,_(v),_(x),_(C),o,a(v.x,v.y),a(x.x,x.y),a(C.x,C.y),r.o)}return g.length}const Ns=.05,oh=.004;function Nv(n,t){const{x0:e,x1:i,z0:r,z1:s,H:a}=t,o=t.portals||[],l=[],c={S:{f:{x:0,y:0,z:r,yaw:0},facing:1,lat:g=>g,t0:e,t1:i,pt:g=>[g,r]},N:{f:{x:0,y:0,z:s,yaw:0},facing:-1,lat:g=>g,t0:e,t1:i,pt:g=>[g,s]},W:{f:{x:e,y:0,z:0,yaw:Math.PI/2},facing:1,lat:g=>-g,t0:r,t1:s,pt:g=>[e,g]},E:{f:{x:i,y:0,z:0,yaw:Math.PI/2},facing:-1,lat:g=>-g,t0:r,t1:s,pt:g=>[i,g]}};for(const g of Object.keys(c)){const _=c[g],d=o.filter(b=>b.wall===g).sort((b,T)=>b.at-T.at),p=_.lat(_.t0-Ns),y=_.lat(_.t1+Ns),v=d.map(b=>Lt.map(T=>({x:_.lat(b.at)+T.x+T.nx*oh,y:T.y+T.ny*oh}))),x=Iu(Math.min(p,y),Math.max(p,y),-Ns,a+Ns,v);Uu(n,_.f,_.facing,x,{layer:"tile",grid:1,uv:(b,T)=>[(b-3.1)/6+.5,.004+.992*T/3.63]});let C=_.t0;for(const b of d)l.push([..._.pt(C),..._.pt(b.at-Lt.W/2)]),C=b.at+Lt.W/2;l.push([..._.pt(C),..._.pt(_.t1)])}const h=Math.max(1,Math.round(i-e)),u=Math.max(1,Math.round(s-r));n.grid("atlas",[e,0,r],[i-e,0,0],[0,0,s-r],h,u,[0,1,0],t.floor||Ht("floor"),null,!0),n.grid("atlas",[e,a,r],[i-e,0,0],[0,0,s-r],h,u,[0,-1,0],t.ceil||Ht("concrete"),null,!0);const f=(e+i)/2;return{cells:[{ax:f,az:r,bx:f,bz:s,hw:(i-e)/2,ya:0,yb:0}],walls:l.filter(g=>Math.hypot(g[2]-g[0],g[3]-g[1])>.01)}}const sl=512,al=256,Dl={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let Fs=null,Tt=null,Ri=null,Nu=null;function Fu(){if(Fs)return;Fs=An(sl,al),Tt=Fs.getContext("2d");const n=An(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),Nu=Tt.createPattern(n,"repeat"),Ri=new da(Fs),Ri.colorSpace=Xe,Ri.generateMipmaps=!1,Ri.minFilter=Ae,Ri.magFilter=Ae}function Fv(){return Fu(),Ri}function ra(n){const[t,e,i,r]=Dl[n],s=1;return[(t+s)/sl,1-(e+r-s)/al,(t+i-s)/sl,1-(e+s)/al]}function lh(n,t,e){const[i,r,s,a]=Dl[n];Tt.save(),Tt.beginPath(),Tt.rect(i,r,s,a),Tt.clip(),Tt.fillStyle="#060504",Tt.fillRect(i,r,s,a),Tt.fillStyle="#ffab1a",Tt.font=`400 30px ${cr}`,Tt.textBaseline="middle";const o=a/4;t.slice(0,3).forEach((l,c)=>{const h=r+o*(c+.5)+2;Tt.textAlign="left",Tt.fillText(l.l||"",i+10,h,l.r?s-110:s-20),l.r&&(Tt.textAlign="right",Tt.fillText(l.r,i+s-10,h))}),Tt.textAlign="center",Tt.fillText(e||"",i+s/2,r+o*3.5+1,s-20),Tt.fillStyle=Nu,Tt.fillRect(i,r,s,a),Tt.restore()}function ch(n,t,e){const[i,r,s,a]=Dl[n],o=i+s/2,l=r+a/2,c=s*.46;Tt.save(),Tt.beginPath(),Tt.rect(i,r,s,a),Tt.clip(),Tt.fillStyle="#1a1b1c",Tt.fillRect(i,r,s,a),Tt.fillStyle=e?"#e8e2cc":"#f2efe4",Tt.beginPath(),Tt.arc(o,l,c,0,7),Tt.fill(),Tt.strokeStyle="#14213d",Tt.lineWidth=3,Tt.beginPath(),Tt.arc(o,l,c-1.5,0,7),Tt.stroke(),Tt.strokeStyle="#111";for(let f=0;f<12;f++){const m=f/12*Math.PI*2,g=c*(f%3===0?.74:.82);Tt.lineWidth=f%3===0?4:2,Tt.beginPath(),Tt.moveTo(o+Math.sin(m)*g,l-Math.cos(m)*g),Tt.lineTo(o+Math.sin(m)*c*.9,l-Math.cos(m)*c*.9),Tt.stroke()}const h=(f,m,g,_)=>{const d=f*Math.PI*2;Tt.strokeStyle=_,Tt.lineWidth=g,Tt.lineCap="round",Tt.beginPath(),Tt.moveTo(o-Math.sin(d)*m*.15,l+Math.cos(d)*m*.15),Tt.lineTo(o+Math.sin(d)*m,l-Math.cos(d)*m),Tt.stroke()},u=(t%43200+43200)%43200;h(u/43200,c*.5,5,"#111"),h(u%3600/3600,c*.74,3.5,"#111"),h(Math.floor(u%60)/60,c*.8,1.6,"#b3261e"),Tt.fillStyle="#b3261e",Tt.beginPath(),Tt.arc(o,l,4,0,7),Tt.fill(),Tt.restore()}function Ov(n){Fu(),lh("board",n.rows||[],n.footer||""),lh("board2",n.rows2||[],n.footer2||""),ch("clock",n.tod||0,!1),ch("clockBack",n.todBack||0,!0),Ri.needsUpdate=!0}const sa="#16213f",ol="#1c3f94",Ou="#f6f6f1";function kv(n,t,e,i,r,s,a={}){n.save(),n.translate(e,i),n.rotate(r?-.87:.87),n.font=`400 ${s}px ${ve}`,n.textBaseline="middle",n.textAlign="left";const o=t.split(" ");let l=[t];if(t.length>12&&o.length>1){let h=1,u=1/0;for(let f=1;f<o.length;f++){const m=Math.abs(o.slice(0,f).join(" ").length-o.slice(f).join(" ").length);m<u&&(u=m,h=f)}l=[o.slice(0,h).join(" "),o.slice(h).join(" ")]}const c=s*.9;if(a.current){const h=Math.max(...l.map(u=>n.measureText(u).width));n.fillStyle=ol,n.fillRect(c-s*.35,-s*.62*l.length,h+s*.7,s*1.24*l.length)}n.fillStyle=a.current?"#fff":a.odd?"#7a0f18":sa,l.forEach((h,u)=>n.fillText(h,c,(u-(l.length-1)/2)*s*1.05)),n.restore()}function ku(n,t,e,i={}){const{edgware:r,barnet:s,charingX:a,bank:o,morden:l,battersea:c}=Su;n.fillStyle=Ou,n.fillRect(0,0,t,e);const h=Math.max(2,e*.03);n.strokeStyle="#5f6467",n.lineWidth=h,n.strokeRect(h/2,h/2,t-h,e-h),n.fillStyle="#000",n.fillRect(t*.845,e*.7,t*.14,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,"Northern line",t*.125,e*.12,ve),n.fillText("Northern line",t*.915,e*.805);const u=s.length,f=u+1+a.length,m=f+1+l.length,g=t*.03,_=t*.925/(m-1),d=I=>g+I*_,p=e*.44,y=e*.57,v=Math.max(2,e*.022),x=e*.054,C=Math.max(2,e*.022),b=I=>{n.strokeStyle="#000",n.lineWidth=C,n.lineJoin="round",n.beginPath(),I.forEach((D,H)=>H?n.lineTo(D[0],D[1]):n.moveTo(D[0],D[1])),n.stroke()},T=I=>d(I+1),P=I=>d(I*.93);b([[T(0),p],[d(m-1),p]]),b([[P(0),y],[d(u)-_*.75,y],[d(u),p]]),b([[d(u),p],[d(u)+_*.75,y],[d(f)-_*.75,y],[d(f),p]]),b([[d(f),p],[d(f)+_*.75,y],[d(f+2),y]]);const S=P(s.indexOf(ea.at)),M=(p+y)/2;b([[S,y],[S+_*.3,M]]),b([[S+_*.3-v,M],[S+_*.3+v,M]]),n.fillStyle=sa,n.textAlign="left",n.textBaseline="middle",n.font=`400 ${x*.82}px ${ve}`,n.fillText(ea.name,S+_*.3+v*1.8,M);const A=i.current,N=(I,D,H,$,V={})=>{const B=!!xa[I]||I===A||I==="Camden Town"||I==="Kennington";n.strokeStyle="#000",n.lineWidth=C*.7,B?(n.fillStyle=I===A?ol:"#fff",n.beginPath(),n.arc(D,H,v*1.35,0,7),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(D,H),n.lineTo(D,H+($?-v*1.6:v*1.6)),n.stroke()),kv(n,I,D,H+($?-v*2.2:v*2.2),$,x,{current:I===A,odd:V.odd})};r.forEach((I,D)=>N(I,T(D),p,!0)),N("Camden Town",d(u),p,!0),a.forEach((I,D)=>N(I,d(u+1+D),p,!0)),N("Kennington",d(f),p,!0),l.forEach((I,D)=>N(I,d(f+1+D),p,!0)),s.forEach((I,D)=>N(I,P(D),y,!1)),o.forEach((I,D)=>N(I,d(u+1+D*.94+.2),y,!1)),c.forEach((I,D)=>N(I,d(f+1+D),y,!1));for(const[I,D]of i.ghosts||[]){const H=r.indexOf(D),$=s.indexOf(D),V=o.indexOf(D);H>=0?N(I,T(H+.5),p,!0,{odd:!0}):$>=0?N(I,P($+.5),y,!1,{odd:!0}):V>=0&&N(I,d(u+1+(V+.5)*.94+.2),y,!1,{odd:!0})}const L=[[r,T],[["Camden Town"],()=>d(u)],[a,I=>d(u+1+I)]];for(const[I,D]of L){const H=I.indexOf(A);if(H<0)continue;const $=D(H);n.fillStyle=ol,n.beginPath(),n.moveTo($,p+v*2.2),n.lineTo($-v*1.6,p+v*4.6),n.lineTo($+v*1.6,p+v*4.6),n.fill(),n.fillRect($-x*3.4,p+v*4.5,x*6.8,x*1.5),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${x}px ${ve}`,n.fillText("You are here",$,p+v*4.5+x*.8)}}function zu(n,t,e,{dir:i="north",arrow:r="right",list:s=""}={}){n.fillStyle=Ou,n.fillRect(0,0,t,e),n.fillStyle="#000",n.fillRect(0,0,t,e*.24),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${e*.15}px ${ve}`,n.fillText("Northern line",e*.16,e*.13);const a=r!=="right";tl(n,a?e*.42:t-e*.42,e*.58,e*.42,r,sa);const o=a?e*.8:e*.16,l=a?t-e*.16:t-e*.8,c=`${yr(i)} platform ${Ui(i)}`;n.fillStyle=sa,n.textAlign=a?"left":"right",$e(n,c,l-o,e*(s?.3:.36),ve),n.fillText(c,a?o:l,e*(s?.5:.6)),s&&($e(n,s,l-o,e*.14,En),n.fillText(s,a?o:l,e*.8)),n.strokeStyle="#5f6467",n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(1,1,t-2,e-2)}const Bu=["North End","South Kentish Town","City Road","King William Street","Bull & Bush","Aldwych","Down Street","British Museum","York Road","Brompton Road"],hh={Hampstead:["Heath Street"],"Chalk Farm":["Adelaide Road"],"Mornington Crescent":["Seymour Street","Mornington Cresent"],"Camden Town":["Camden Road"],"Belsize Park":["Belsize"]};function zv(n,t){const e=[];for(let r=1;r<n.length-1;r++)/[a-z]/.test(n[r])&&/[a-z]/.test(n[r+1])&&n[r]!==n[r+1]&&e.push(r);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function Ll(n,t,e){const i=Math.min(.7,t*.15);if(!e.chance(i))return n;const r=e.next()*Math.min(5,t+1);if(r<1)return zv(n,e);if(r<1.8){const s=e.int(1,n.length-2);return n.slice(0,s)+n.slice(s+1)}return r<2.8&&hh[n]?e.pick(hh[n]):e.pick(Bu)}const Il=n=>Bu.includes(n),gn=3.5,xn=5,uh=2.95;function Ji(n,t,e,i,r,s,a,o){const l=xn-.03;return n.quad(t,[e+r/2,i,l],[e-r/2,i,l],[e-r/2,i+s,l],[e+r/2,i+s,l],[0,0,-1],a,o),{x:e,y:i+s/2,z:l}}const Bv={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,r=Object.keys(Hr).filter(a=>Hr[a].level<=i&&Hr[a].level>=i-1),s=n.chance(.5);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(r),lie:e==="announce"?n.chance(.3+.12*i):!1,dirs:s?["north","south"]:["south","north"],inverted:n.chance(.4)},exits:[{x:gn,y:0,z:xn/2,yaw:Math.PI/2},{x:-gn,y:0,z:xn/2,yaw:-Math.PI/2}],box:[-gn-.4,-.4,0,gn+.4,3.4,xn+.4]}},build(n){const{b:t,p:e,sheet:i,rng:r,env:s}=n,a=Nv(t,{x0:-gn,x1:gn,z0:0,z1:xn,H:uh,portals:[{wall:"S",at:0},{wall:"E",at:xn/2},{wall:"W",at:xn/2}]});t.addPortal(0,0,0,0),t.addPortal(gn,0,xn/2,Math.PI/2),t.addPortal(-gn,0,xn/2,-Math.PI/2),mi(t,{x:0,y:0,z:0,yaw:0},Lt.crown);for(const d of[-1.7,1.7])Fi(t,{x:d,y:0,z:2.2,yaw:Math.PI/2},uh-.02,{power:.6,radius:6.5});const o=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,to:e.dirs[0]},{cx:-1.72,dir:"right",exit:1,to:e.dirs[1]}];for(const d of c){const p=e.correct===d.exit;if(e.kind==="signs"){const y=p?null:e.defect,v=!!e.inverted,x=i.add(250,56,(b,T,P)=>_a(b,T,P,{dir:d.dir,defect:y,inverted:v})),C=Ji(t,"sheet",d.cx,1.52,1.9,.425,x,l);o.push({...C,r:7,cone:.93,label:"read sign",title:"SIGN",text:iv(y,d.dir,v),junctionSign:!0})}else{const y=mv(s.station,d.to),v=i.add(280,84,(b,T,P)=>zu(b,T,P,{dir:d.to,arrow:d.dir,list:y.join("  ·  ")})),x=Ji(t,"sheet",d.cx,1.44,1.9,.57,v,l),C=`Northern line · ${yr(d.to)} platform ${Ui(d.to)} · ${y.join(", ")}`;o.push({...x,r:7,cone:.93,label:"read sign",title:"SIGN",text:d.dir==="left"?`← ${C}`:`${C} →`})}if(e.kind==="clock"){const y=!p,v=Ji(t,"dyn",d.cx,2.08,.62,.62,ra(y?"clockBack":"clock"),{emit:1.05});o.push({...v,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:y?"The second hand is ticking backwards.":"The clock is keeping time."})}}const h=Ji(t,"dyn",0,2.12,1.26,.42,ra("board2"),{emit:1.15});o.push({...h,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const u=Ll(s.station,s.wrong,r),f=i.add(200,92,(d,p,y)=>ma(d,p,y,u)),m=Ji(t,"sheet",0,1.42,1.24,.57,f,null);o.push({...m,r:6,cone:.95,label:"read name",title:"STATION",text:Il(u)?`${u}. There is no such station on this line.`:u});const g=Ji(t,"cut",0,.62,.34,.68,Ht("helpPoint"),null);o.push({...g,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(d,p,y)=>d.director.helpPoint(y)});const _=[{x0:-gn,x1:gn,z0:.8,z1:xn,fire:(d,p)=>d.director.enterJunction(p)}];return{cells:a.cells,walls:a.walls,items:o,extra:{zones:_}}}},nt={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};nt.back=nt.cx-Math.sqrt(nt.R*nt.R-nt.cy*nt.cy);nt.th0=Math.PI+Math.asin(nt.cy/nt.R);nt.th1=-Math.asin((nt.cy-nt.bed)/nt.R);nt.sCrown=nt.R*(nt.th0-Math.PI/2);nt.wallBed=nt.cx+Math.sqrt(nt.R*nt.R-(nt.cy-nt.bed)**2);nt.track=(nt.edge+nt.wallBed)/2;function Hv(n,t){const e=n-nt.cy;return nt.cx+t*Math.sqrt(Math.max(0,nt.R*nt.R-e*e))}const Gv=9,Vv=10,Wv=nt.R*(Math.PI/2-nt.th1);function fh(n,t,e,i){const r=[];for(let s=0;s<=e;s++){const a=n+(t-n)*s/e;r.push({x:nt.cx+nt.R*Math.cos(a),y:nt.cy+nt.R*Math.sin(a),nx:-Math.cos(a),ny:-Math.sin(a),v:i(a)})}return r}function Xv(n,t,e){const i=d=>e*d,r=fh(nt.th0,Math.PI/2,Gv,d=>.502+.496*(nt.R*(nt.th0-d)/nt.sCrown)),s=fh(Math.PI/2,nt.th1,Vv,d=>.002+.496*(nt.R*(Math.PI/2-d)/Wv)),a=Math.round(t/1.5);for(const d of[r,s])for(let p=0;p<a;p++){const y=t*p/a,v=t*(p+1)/a;for(let x=0;x<d.length-1;x++){const C=d[x],b=d[x+1],T=[i(C.nx),C.ny,0],P=[i(b.nx),b.ny,0],S=[(T[0]+P[0])/2,(T[1]+P[1])/2,0];n.quadN("ptile",[i(C.x),C.y,y],[i(C.x),C.y,v],[i(b.x),b.y,v],[i(b.x),b.y,y],S,T,T,P,P,[y/6,C.v,v/6,b.v])}}const o=[0,1,0],l=(d,p,y=0,v=1)=>Qs(d,y,p?.5:0,v,p?1:.5),c=[[nt.back-.05,-.55,d=>l("floor",d)],[-.55,.55,d=>l("floor",d)],[.55,.95,()=>Ht("tactile")],[.95,1.05,()=>ne("yellow")],[1.05,1.45,d=>l("floorDark",d,.05,.45)],[1.45,nt.edge,()=>ne("edge")]],h=Math.round(t/.5);for(const[d,p,y]of c)for(let v=0;v<h;v++){const x=t*v/h,C=t*(v+1)/h;n.quad("atlas",[i(d),0,x],[i(p),0,x],[i(p),0,C],[i(d),0,C],o,y(v%2))}const u=Ht("mindgap");for(let d=4.5;d<t-3;d+=6.5){const p=.85*e;n.quad("atlas",[i(1.07),.004,d-p],[i(1.07),.004,d+p],[i(1.43),.004,d+p],[i(1.43),.004,d-p],o,u)}const f=Math.round(t/2);for(let d=0;d<f;d++){const p=t*d/f,y=t*(d+1)/f;n.quad("atlas",[i(1.56),nt.bed,p],[i(1.56),nt.bed,y],[i(1.56),-.06,y],[i(1.56),-.06,p],[e,0,0],Ht("riser")),n.quad("atlas",[i(1.56),-.06,p],[i(nt.edge),-.06,p],[i(nt.edge),-.06,y],[i(1.56),-.06,y],[0,-1,0],ne("black")),n.quad("atlas",[i(nt.edge),-.06,p],[i(nt.edge),-.06,y],[i(nt.edge),0,y],[i(nt.edge),0,p],[e,0,0],ne("edge"))}const m=Ht("ballast");for(let d=0;d<Math.round(t);d++)for(const[p,y]of[[1.56,nt.track],[nt.track,nt.wallBed+.12]])n.quad("atlas",[i(p),nt.bed,d],[i(y),nt.bed,d],[i(y),nt.bed,d+1],[i(p),nt.bed,d+1],o,m);const g=Ht("rail"),_=ne("steelDark");for(const[d,p]of nt.rails){const y=nt.track+d;for(let v=0;v<t;v+=3){const x=Math.min(t,v+3),C=nt.bed+p,b=.035;n.quad("atlas",[i(y-b),C,v],[i(y+b),C,v],[i(y+b),C,x],[i(y-b),C,x],o,g),n.quad("atlas",[i(y-b),nt.bed,v],[i(y-b),nt.bed,x],[i(y-b),C,x],[i(y-b),C,v],[-e,0,0],_)}}return{back:r,track:s}}const pe={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},dh=12,Os=5;function ks(n,t,e){const i=[];for(let r=0;r<=Os;r++)i.push({x:n-t,y:e+(pe.spring-e)*r/Os,ox:-1,oy:0});for(let r=1;r<dh;r++){const s=Math.PI*(1-r/dh);i.push({x:n+t*Math.cos(s),y:pe.spring+t*Math.sin(s),ox:Math.cos(s),oy:Math.sin(s)})}for(let r=Os;r>=0;r--)i.push({x:n+t,y:e+(pe.spring-e)*r/Os,ox:1,oy:0});return i}function ph(n,t,e,i,r=!0){const s=S=>i*S,a=nt.track,o=nt.bed,l=o-.3,c=nt.cy+nt.R+.35,h=[ks(a,pe.hw+pe.ring*.5,l)];r&&h.push(Lt.map(S=>({x:S.x+S.nx*.004,y:S.y+S.ny*.004})));const u=Iu(nt.back-.45,nt.cx+nt.R+.35,l,c,h).map(S=>({x:s(S.x),y:S.y}));Uu(n,{x:0,y:0,z:t,yaw:0},e,u,{layer:"tile",grid:.6,uv:(S,M)=>[(S*i+3)/6,.004+.992*M/3.63]});const f=t+e*pe.proud,m=[0,0,e],g=o-.02,_=ks(a,pe.hw,g),d=ks(a,pe.hw+pe.ring,g),p=[Qs("brick",0,0,.5,1),Qs("brick",.5,0,1,1)],y=ne("soot");for(let S=0;S<_.length-1;S++){const M=_[S],A=_[S+1],N=d[S+1],L=d[S];n.quad("atlas",[s(M.x),M.y,f],[s(A.x),A.y,f],[s(N.x),N.y,f],[s(L.x),L.y,f],m,p[S%2]);const I=[s((L.ox+N.ox)/2),(L.oy+N.oy)/2,0];n.quad("atlas",[s(L.x),L.y,f],[s(N.x),N.y,f],[s(N.x),N.y,t],[s(L.x),L.y,t],I,y)}const v=ks(a,pe.hw+.006,g),x=Ht("soot"),C=[[0,.22,.2],[.22,.55,.1],[.55,pe.depth,.04]];for(const[S,M,A]of C){const N=f-e*S,L=f-e*M;for(let B=0;B<v.length-1;B++){const Y=v[B],K=v[B+1],st=[s(-(Y.ox+K.ox)/2),-(Y.oy+K.oy)/2,0];n.quad("atlas",[s(Y.x),Y.y,N],[s(K.x),K.y,N],[s(K.x),K.y,L],[s(Y.x),Y.y,L],st,x,{emit:A})}const I=a-pe.hw-.01,D=a+pe.hw+.01,H=S===0?t+e*.2:N,$=o-.003;n.quad("atlas",[s(I),$,H],[s(D),$,H],[s(D),$,L],[s(I),$,L],[0,1,0],Ht("ballast"),{emit:A*1.2});const V=S===0?t:N;for(const[B,Y]of nt.rails){const K=a+B,st=o+Y,vt=.035;n.quad("atlas",[s(K-vt),st,V],[s(K+vt),st,V],[s(K+vt),st,L],[s(K-vt),st,L],[0,1,0],Ht("rail"),{emit:A*2.4})}}const b=f-e*pe.depth,T=pe.spring+pe.hw+.06,P=pe.hw+.06;n.quad("atlas",[s(a-P),g,b],[s(a+P),g,b],[s(a+P),T,b],[s(a-P),T,b],m,ne("blackout"),{emit:0})}function On(n,t,e,i,r,s,a,o,l,c,h=.04){return ll(n,t,e,i,r,s,a,o,l,c,h,1)}function ll(n,t,e,i,r,s,a,o,l,c,h=.05,u=4){const f=-i*e*s/2,m=_=>e*(Hv(_,i)-i*h);for(let _=0;_<u;_++){const d=a+(o-a)*_/u,p=a+(o-a)*(_+1)/u,y=l[1]+(l[3]-l[1])*_/u,v=l[1]+(l[3]-l[1])*(_+1)/u,x=m(d),C=m(p),b=(d+p)/2-nt.cy,T=-i*Math.sqrt(Math.max(0,nt.R*nt.R-b*b))/nt.R;n.quad(t,[x,d,r+f],[x,d,r-f],[C,p,r-f],[C,p,r+f],[e*T,-b/nt.R,0],[l[0],y,l[2],v],c)}const g=(a+o)/2;return{x:m(g),y:g,z:r}}function qv(n,t,e,i){const r=_=>t*_,s=nt.back+.14,a=nt.back+.6,o=e-.9,l=e+.9,c=Ht("bench"),h=ne("steelDark"),u=Math.min(r(s),r(a)),f=Math.max(r(s),r(a));n.box("cut",u,.4,o,f,.46,l,c,null,"xXyYzZ");const m=r(s+.02),g=r(s+.07);n.box("cut",Math.min(m,g),.56,o,Math.max(m,g),.95,l,c,null,"xXYzZ");for(const _ of[o+.12,e,l-.12])n.box("atlas",u+.05,0,_-.03,f-.05,.4,_+.03,h,null,"xXzZ");i.push([r(a+.05),o,r(a+.05),l],[r(s),o,r(a+.05),o],[r(s),l,r(a+.05),l])}function $v(n,t,e,i){const{b:r,p:s,sheet:a,rng:o,env:l}=n,c=l.wrong||0,h=l.station,u=s.dir,f=ss(h,u);let m=null;if(o.chance(Math.min(.85,c*.22))){const S=o.weighted([["ghost",4],["swap",2],["repeat",c>=2?1.5:0],["missing",c>=3?1.5:0]]);m=ia(f,S,o)||ia(f,"swap",o)}const g=a.add(360,540,(S,M,A)=>Pl(S,M,A,f,{dir:u})),_=Math.min(t*.42,13),d=ll(r,"sheet",e,1,_,1.5,1.14,3.39,g,null,.05,5);i.push({...d,r:13,cone:.93,label:"read line diagram",title:"LINE DIAGRAM",text:Cu(h,u,f),fault:m,onRead:S=>{S.state.diagramsRead=(S.state.diagramsRead||0)+1}});const p=[0,1].map(()=>{const S=Ll(h,c,o),M=o.chance(Math.min(.5,c*.14))?o.pick(pu):null;return{text:Il(S)?`${S}. There is no such station on this line.`:M?`${S} — the roundel is not quite right.`:S,uv:a.add(100,100,(N,L,I)=>ma(N,L,I,S,{defect:M}))}});let y=0;const v=S=>{const M=p[y++%2],A=On(r,"sheet",e,1,S,.7,1.55,2.25,M.uv,null,.05);i.push({...A,r:10,cone:.96,label:"read name board",title:"STATION",text:M.text})};v(_-1.45),v(_+1.45);const x=[0,1,2].map(()=>{const S=o.chance(Math.min(.7,c*.17));let M;return{uv:a.add(240,140,(N,L,I)=>{M=rs(N,L,I,o,S,!0)}),text:`${M.headline}. ${M.strap}.`}}),C=3.6,b=1.5,T=[[2.2,_-2.2],[_+2.2,t-2.2]];let P=0;for(const[S,M]of T){const A=Math.floor((M-S+b)/(C+b));if(A<1)continue;const N=(M-S-C)/Math.max(1,A-1);for(let L=0;L<A;L++){const I=A===1?(S+M)/2:S+C/2+N*L,D=x[P++%3],H=ll(r,"sheet",e,1,I,C,1.22,3.3,D.uv,null,.05,4);i.push({...H,r:10,cone:.95,label:"read poster",title:"ADVERTISEMENT",text:D.text}),L<A-1&&N-C>.9&&v(I+N/2)}}}function Yv(n,t,e){const{b:i,p:r,sheet:s,rng:a,env:o}=n,l=[],c=[],h=[],u=o.wrong||0,f=o.station,m=r.dir,g=F=>e*F,_=Math.round((t-6)/4.5)*3+1;for(let F=0;F<_;F++){const j=3+(t-6)*F/(_-1),rt=F%3===0,Q=Math.floor(F/3);Fi(i,{x:g(.5),y:0,z:j,yaw:0},3.45,{dead:r.dark&&Q%3!==1,flick:r.faulty===Q,noLight:!rt,power:.62,radius:9.5,len:1.25})}const d=ov(f),p=Math.min(5,1+.2*(d.length+2*d.split(" ").length)),y=u>=1.5&&a.chance(Math.min(.8,u*.2))?a.shuffle(Cl).slice(0,a.int(1,2)):[],v=s.add(800,168,(F,j,rt)=>ku(F,j,rt,{current:f,ghosts:y})),x=s.add(512,Math.round(512*.53/p),(F,j,rt)=>rv(F,j,rt,d,o.theme));$v(n,t,e,l);const C=e>0?"left":"right",b=[s.add(384,36,(F,j,rt)=>Jc(F,j,rt,f,{arrow:C})),s.add(384,36,(F,j,rt)=>Jc(F,j,rt,f,{note:f==="Camden Town"?"Edgware branch":""}))];let T=0;for(let F=1.5;F<t-1;F+=3,T++)On(i,"sheet",e,-1,F,3,2.47,2.75,b[T%2],null,.03);const P=[0,1].map(()=>{const F=Ll(f,u,a),j=a.chance(Math.min(.6,u*.16))?a.pick(pu):null;return{text:Il(F)?`${F}. There is no such station on this line.`:j?`${F} — the roundel is not quite right.`:F,uv:s.add(150,183,(Q,xt,wt)=>ma(Q,xt,wt,F,{defect:j}))}}),S=[0,1,2].map(()=>{const F=a.chance(Math.min(.7,u*.17));let j;return{uv:s.add(112,168,(Q,xt,wt)=>{j=rs(Q,xt,wt,a,F,!0)}),text:`${j.headline}. ${j.strap}.`}});let M=0;const A=["roundel",r.start?"notice":"poster","name","poster","roundel","strip","poster","roundel","name","poster","help"],N={roundel:1.15,poster:1,name:p,strip:4.4,notice:.5,help:.34};let L=3,I=0,D=0;for(;I<40;){const F=A[I%A.length],j=N[F];if(L+j>t-2.6)break;const rt=L+j/2;if(F==="roundel"){const Q=P[D++%2],xt=On(i,"sheet",e,-1,rt,j,.85,2.25,Q.uv);l.push({...xt,r:6,label:"read name board",title:"STATION",text:Q.text})}else if(F==="poster"){const Q=S[M++%3],xt=On(i,"sheet",e,-1,rt,j,.62,2.12,Q.uv);l.push({...xt,r:5,label:"read poster",title:"POSTER",text:Q.text})}else if(F==="name"){const Q=On(i,"sheet",e,-1,rt,j,1.72,2.25,x,null,.025);l.push({...Q,r:7,label:"read tiles",title:"TILED NAME",text:`· ${d.toUpperCase().split(" ").join(" · ")} ·${d!==f?` (the frieze says ${f})`:""}`}),qv(i,e,rt,c)}else if(F==="strip"){const Q=On(i,"sheet",e,-1,rt,j,1,1.92,v);l.push({...Q,r:6,cone:.92,label:"read line map",title:"NORTHERN LINE",text:xv(f,y)})}else if(F==="notice"){const Q=ta.find(Pt=>Pt.key==="line")||ta[0],xt=s.add(168,216,(Pt,se,zt)=>nl(Pt,se,zt,Q,a)),wt=On(i,"sheet",e,-1,rt,j,.95,1.6,xt,{tint:[1.1,1.1,1.1]});l.push({...wt,r:4.5,label:"read notice",title:Q.title,text:Q.text,clue:!0,onRead:Pt=>Pt.story.noticeRead(Q.key)})}else{const Q=On(i,"cut",e,-1,rt,j,.7,1.38,Ht("helpPoint"));l.push({...Q,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(xt,wt,Pt)=>xt.director.helpPoint(Pt)})}L+=j+.7,I++}if(!r.start&&a.chance(.45)){const F=Pu(n),j=s.add(168,216,(Q,xt,wt)=>nl(Q,xt,wt,F,a)),rt=On(i,"sheet",e,-1,1.9,.5,.95,1.6,j,{tint:[1.1,1.1,1.1]});l.push({...rt,r:4.5,label:"read notice",title:F.title,text:F.text,clue:!0,onRead:Q=>Q.story.noticeRead(F.key)})}const H=ra("board"),$=Zs(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,H,H,{emit:1.2},g(.15));l.push({...$,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const V=!!(o.stretch&&o.stretch.clocksBack),B=ra(V?"clockBack":"clock"),Y=Zs(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,B,B,{emit:1.05},g(1.2));l.push({...Y,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:V?"The second hand is ticking backwards.":"The clock is keeping time."});const K=s.add(250,56,(F,j,rt)=>_a(F,j,rt,{dir:"up"})),st=s.add(250,56,(F,j,rt)=>va(F,j,rt,`${yr(m)} platform ${Ui(m)}`,{sub:"Northern line",bg:"#f6f6f1",fg:"#16213f"})),vt=Zs(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,K,st,{emit:1.25},g(0));if(l.push({...vt,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}),i.quad("atlas",[g(nt.track+.98),.9,t+.4],[g(nt.track+1.13),.9,t+.4],[g(nt.track+1.13),1.05,t+.4],[g(nt.track+.98),1.05,t+.4],[0,0,-1],ne("white"),{emit:1.6,tint:[1,.12,.08]}),r.figure){const F=g(.75),j=t-7;i.quad("figure",[F+.3,0,j],[F-.3,0,j],[F-.3,1.78,j],[F+.3,1.78,j],[0,0,-1],Ht("figure"),{emit:.02}),h.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(rt,Q)=>rt.director.events.figureGone(Q)})}return{items:l,walls:c,zones:h}}const jv={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=e?30:n.pick([30,36,36,42]),r=n.sign(),s=t.stretch,a=s?s.plan.slice(0,t.idx).filter(u=>u==="platform").length:0,o=s&&s.dir||"north",l=a%2?o==="north"?"south":"north":o,c=nt.back-.4,h=nt.cx+nt.R+.4;return{p:{L:i,side:r,start:e,dir:l,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:r>0?[c,-2.4,-1.2-.2,h,nt.cy+nt.R+.3,i+pe.depth+.2]:[-h,-2.4,-1.2-.2,-c,nt.cy+nt.R+.3,i+pe.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:r}=e;Xv(t,i,r),ph(t,0,1,r,!e.start),ph(t,i,-1,r,!0),e.start||(t.addPortal(0,0,0,0),mi(t,{x:0,y:0,z:0,yaw:0},Lt.crown)),t.addPortal(0,0,i,0);const s=Yv(n,i,r),a=m=>r*m,o=(nt.back+nt.edge)/2,l=(nt.edge-nt.back)/2,c=[{ax:a(o),az:0,bx:a(o),bz:i,hw:l,ya:0,yb:0}],h=Lt.W/2,u=[[a(nt.back+.08),0,a(nt.back+.08),i],[a(nt.edge-.1),0,a(nt.edge-.1),i],[a(nt.back),i,a(-h),i],[a(h),i,a(nt.edge),i]];e.start?u.push([a(nt.back),0,a(nt.edge),0]):u.push([a(nt.back),0,a(-h),0],[a(h),0,a(nt.edge),0]);for(const m of s.walls)u.push(m);const f={zones:s.zones};return e.start&&(f.spawn={x:a(.1),z:6,yaw:0}),{cells:c,walls:u,items:s.items,extra:f}}},Zv=.16,Kv=.3,_n=1.6,Tn=(n,t)=>n+t*Kv,Jr=(n,t,e)=>n+t*Zv*e;function Ul(n,t,e,i,r=[-1.5,-.5,.5,1.5],s=0,a=null){const o=Ht("stairTread"),l=Ht("riser");for(let c=0;c<e;c++){const h=Tn(t,c),u=Tn(t,c+1),f=Jr(s,i>0?c+1:c,i),m=Jr(s,i>0?c:c+1,i);for(let g=0;g<r.length-1;g++){const _=r[g],d=r[g+1];i>0?n.quad("atlas",[d,f,u],[_,f,u],[_,f,h],[d,f,h],[0,1,0],o,a):n.quad("atlas",[_,f,h],[d,f,h],[d,f,u],[_,f,u],[0,1,0],o,a),i>0?n.quad("atlas",[_,m,h],[d,m,h],[d,f,h],[_,f,h],[0,0,-1],l,a):n.quad("atlas",[_,m,u],[d,m,u],[d,f,u],[_,f,u],[0,0,1],l,a)}}}function Nl(n,t,e,i,r,s,a=.025,o="rubber",l=null){const c=ne(o),h=[t-a,i+a,e],u=[t+a,i+a,e],f=[t+a,s+a,r],m=[t-a,s+a,r];n.quad("atlas",h,u,f,m,[0,1,0],c,l);const g=t>0?-1:1,_=t+g*a;n.quad("atlas",[_,i-a,e],[_,i+a,e],[_,s+a,r],[_,s-a,r],[g,0,0],c,l)}const Jv={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),r=Tn(0,i),s=Jr(0,i,e),a=Tn(_n,i)+_n;return{p:{dir:e,n:i,run:r,rise:s,len:a,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:s,z:a,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,a]}},build(n){const{b:t,p:e}=n,i=Tn(_n,e.n),r=u=>Ue((u-_n)/e.run,0,1)*e.rise,s=[0,_n],a=Math.round(e.run/.9);for(let u=1;u<a;u++)s.push(_n+e.run*u/a);s.push(i,e.len);const o=s.map(u=>({x:0,y:r(u),z:u,yaw:0})),l=di(t,o,Rl(Lt),{floor:null});for(const u of l.cells)u.surface="stone";const c=Lt.W/2,h=Ht("floor");for(let u=0;u<3;u++){const f=-c+u,m=f+1;t.quad("atlas",[f,0,0],[m,0,0],[m,0,_n],[f,0,_n],[0,1,0],h),t.quad("atlas",[f,e.rise,i],[m,e.rise,i],[m,e.rise,e.len],[f,e.rise,e.len],[0,1,0],h)}Ul(t,_n,e.n,e.dir);for(const u of[-c+.09,c-.09])Nl(t,u,_n-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,o[0],Lt.crown),yu(t,o,l.dist,Lt.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:o}}},Fl=5.4,de=Fl/2,cl=1.2,hl=3.7,ao=Al(Fl,cl,hl),oi=3.6,vn=1.2,mh=Math.tan(Math.PI/6),Qi=[-.95,.95],cn=.5,ze=.92,Qv={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),r=i*mh*e,s=oi*2+i;return{p:{dir:e,run:i,rise:r,len:s,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:r,z:s,yaw:0}],box:[-de-.4,Math.min(0,r)-.5,0,de+.4,Math.max(0,r)+4.3,s]}},build(n){const{b:t,p:e,sheet:i,rng:r}=n,s=oi,a=oi+e.run,o=B=>Ue((B-s)/e.run,0,1)*e.rise,l=[0,oi-vn,s],c=Math.round(e.run/1.2);for(let B=1;B<=c;B++)l.push(s+e.run*B/c);l.push(a+vn,e.len);const h=l.map(B=>({x:0,y:o(B),z:B,yaw:0}));di(t,h,ao,{floor:null}),xr(t,h[0],ao,Lt,1,"tile"),xr(t,h[h.length-1],ao,Lt,-1,"tile");const u=[0,1,0],f=Ht("floor"),m=Ht("deck"),g=ne("metal");for(const[B,Y,K]of[[0,oi-vn,0],[a+vn,e.len,e.rise]])t.grid("atlas",[-de-.04,K,B],[Fl+.08,0,0],[0,0,Y-B],5,2,u,f,null,!0);const _=.4,d=Math.round(e.run/_),p=e.rise/d,y=B=>B===d?a:s+B*_,v=B=>B===d?e.rise:B*p,x=Ht("tread"),C=ne("steelDark"),b=Ht("comb");for(const B of Qi){const Y=B-cn,K=B+cn;for(const[st,vt,F]of[[oi-vn,s,0],[a,a+vn,e.rise]])t.quad("atlas",[Y,F,st],[K,F,st],[K,F,vt],[Y,F,vt],u,m);t.quad("atlas",[Y,.003,s-.25],[K,.003,s-.25],[K,.003,s],[Y,.003,s],u,b),t.quad("atlas",[K,e.rise+.003,a+.25],[Y,e.rise+.003,a+.25],[Y,e.rise+.003,a],[K,e.rise+.003,a],u,b);for(let st=0;st<d;st++){const vt=y(st),F=y(st+1),j=v(p>0?st+1:st),rt=v(p>0?st:st+1);t.quad("atlas",[Y,j,vt],[K,j,vt],[K,j,F],[Y,j,F],u,x);const Q=p>0?vt:F;t.quad("atlas",[Y,rt,Q],[K,rt,Q],[K,j,Q],[Y,j,Q],[0,0,p>0?-1:1],C)}}Pi(t,h[0],de+.04),Pi(t,h[h.length-1],de+.04),Pi(t,{x:0,y:0,z:oi-vn,yaw:0},de),Pi(t,{x:0,y:e.rise,z:a+vn,yaw:0},de);const T=[-de,Qi[0]-cn,Qi[0]+cn,Qi[1]-cn,Qi[1]+cn,de],P=oi-vn,S=a+vn,M=[[P,s,0,0],[s,a,0,e.rise],[a,S,e.rise,e.rise]];for(const[B,Y,K,st]of M){for(let vt=0;vt<6;vt+=2){const F=T[vt],j=T[vt+1];t.quad("atlas",[F,K+ze,B],[j,K+ze,B],[j,st+ze,Y],[F,st+ze,Y],u,m)}for(const[vt,F]of[[T[1],1],[T[2],-1],[T[3],1],[T[4],-1]])t.quad("atlas",[vt,K,B],[vt,st,Y],[vt,st+ze,Y],[vt,K+ze,B],[F,0,0],g),t.quad("atlas",[vt,K-.3,B],[vt,st-.3,Y],[vt,st,Y],[vt,K,B],[F,0,0],ne("steelDark")),Nl(t,vt+F*.03,B,K+ze+.04,Y,st+ze+.04,.04)}for(let B=0;B<6;B+=2){const Y=T[B],K=T[B+1];t.quad("atlas",[Y,0,P],[K,0,P],[K,ze,P],[Y,ze,P],[0,0,-1],g),t.quad("atlas",[Y,e.rise,S],[K,e.rise,S],[K,e.rise+ze,S],[Y,e.rise+ze,S],[0,0,1],g)}const A=i.add(150,46,(B,Y,K)=>va(B,Y,K,"Stand on the right",{bg:"#0019a8"}));for(let B=0;B<3;B++){const Y=s+e.run*(.2+.3*B),K=o(Y)+ze;t.quad("sheet",[.24,K+.02,Y],[-.24,K+.02,Y],[-.24,K+.17,Y],[.24,K+.17,Y],[0,0,-1],A),t.quad("sheet",[-.24,K+.02,Y+.01],[.24,K+.02,Y+.01],[.24,K+.17,Y+.01],[-.24,K+.17,Y+.01],[0,0,1],A)}const N=Math.max(2,Math.round(e.run/3.2));for(let B=0;B<N;B++){const Y=s+e.run*(B+.5)/N,K=o(Y)+ze,st=e.faulty===B;t.box("atlas",-.04,K,Y-.04,.04,K+1.25,Y+.04,ne("steelDark"),null,"xXzZ"),t.box("atlas",-.2,K+1.25,Y-.2,.2,K+1.36,Y+.2,Ht("uplight"),{emit:1.5,flick:st},"xXzZY"),t.addLight(0,K+2.2,Y,.5,8,st,[1,.95,.82])}for(const[B,Y]of[[1.6,0],[e.len-1.6,e.rise]])Fi(t,{x:0,y:Y,z:B,yaw:Math.PI/2},hl-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,h[0],Lt.crown);const L=[];for(let B=0;B<4;B++)L.push(i.add(84,116,(Y,K,st)=>rs(Y,K,st,r,r.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const I=B=>de*Math.cos(Math.asin(Ue((B-cl)/(hl-cl),0,1)));let D=0;for(let B=s+.8;B<a-.4;B+=1.5,D++){const Y=o(B),K=mh*Math.sign(e.rise)*.27;for(const st of[-1,1]){const vt=st*(I(1.55)-.04),F=st*(I(2.3)-.04);t.quad("sheet",[vt,Y+1.55-K*st,B-.27*st],[vt,Y+1.55+K*st,B+.27*st],[F,Y+2.3+K*st,B+.27*st],[F,Y+2.3-K*st,B-.27*st],[-st,0,0],L[(D+(st>0?2:0))%4])}}const H=[{ax:0,az:0,bx:0,bz:P,hw:de,ya:0,yb:0},{ax:0,az:S,bx:0,bz:e.len,hw:de,ya:e.rise,yb:e.rise}],$=[[-de,0,-de,P],[de,0,de,P],[-de,S,-de,e.len],[de,S,de,e.len]],V=Lt.W/2;for(const B of[0,e.len])$.push([-de,B,-V,B],[V,B,de,B]);for(const B of Qi){for(const[Y,K,st,vt]of M)H.push({ax:B,az:Y,bx:B,bz:K,hw:cn,ya:st,yb:vt,surface:"metal"});$.push([B-cn,P,B-cn,S],[B+cn,P,B+cn,S])}for(let B=0;B<6;B+=2)$.push([T[B],P,T[B+1],P],[T[B],S,T[B+1],S]);return{cells:H,walls:$,items:[],frames:h}}},Ke=3,tx=5.2,Ir=24,ex={type:"exit",plan(){const n=Tn(0,Ir),t=Jr(0,Ir,1),e=Tn(Ke,Ir)+tx;return{p:{run:n,rise:t,len:e},exits:[],box:[-1.9,-.4,0,1.9,t+3.3,e]}},build(n){const{b:t,p:e,sheet:i}=n,r=D=>Ue((D-Ke)/e.run,0,1)*e.rise,s=[0,1.5,Ke],a=Math.round(e.run/.9);for(let D=1;D<=a;D++)s.push(Ke+e.run*D/a);s.push(e.len-2.2,e.len);const o=s.map(D=>({x:0,y:r(D),z:D,yaw:0})),l=di(t,o,Rl(Lt),{floor:null});for(const D of l.cells)D.surface="stone";const c=Lt.W/2,h=Ht("floor"),u=-c-.03,f=Lt.W+.06,m=Tn(Ke,Ir);t.grid("atlas",[u,0,0],[f,0,0],[0,0,Ke],3,3,[0,1,0],h,null,!0),t.grid("atlas",[u,e.rise,m],[f,0,0],[0,0,e.len-m],3,4,[0,1,0],h,null,!0),Ul(t,Ke,Ir,1,[0,1,2,3].map(D=>u+f*(D/3)));for(const D of[-c+.09,c-.09])Nl(t,D,Ke-.3,.95,Ke+e.run+.3,e.rise+.95);const g={x:0,y:e.rise,z:e.len-.02,yaw:0},_=ne("daylight");xr(t,g,vu(Lt),null,-1,"atlas",()=>[(_[0]+_[2])/2,(_[1]+_[3])/2],{emit:2}),t.addLight(0,e.rise+1.6,e.len-.6,1.9,10,!1,[1,1,1]),t.addLight(0,e.rise+1.2,e.len-3.2,.7,8,!1,[1,1,1]);const d=Ht("gate");for(const D of[-1,1]){const H=D*(c-.06),$=m+.3;t.quad("cut",[H,e.rise,$],[H,e.rise,$+.7],[H,e.rise+2.3,$+.7],[H,e.rise+2.3,$],[-D,0,0],d,{emit:.25})}const p=m+1.5,y=p+1,v=[],x=ne("metal"),C=e.rise,b=.09,T=[-1.41,-.47,.47,1.41];T.forEach((D,H)=>{t.box("atlas",D-b,C,p,D+b,C+.98,y,x,{tint:[.62,.65,.68]},"xXYzZ"),H>0&&(t.quad("atlas",[D-.07,C+.985,p+.08],[D+.07,C+.985,p+.08],[D+.07,C+.985,p+.24],[D-.07,C+.985,p+.24],[0,1,0],ne("yellow"),{emit:1.1}),t.quad("atlas",[D+.05,C+.72,p-.005],[D-.05,C+.72,p-.005],[D-.05,C+.82,p-.005],[D+.05,C+.82,p-.005],[0,0,-1],ne("white"),{emit:1.7,tint:[.15,1,.3]}));for(const $ of[-1,1]){if(H===0&&$<0||H===T.length-1&&$>0)continue;const V=D+$*(b+.012);t.quad("atlas",[V,C+.3,p+.52],[V,C+.3,p+.9],[V,C+.85,p+.9],[V,C+.85,p+.52],[$,0,0],ne("white"),{tint:[.85,.12,.1]})}v.push([D-b,p,D-b,y],[D+b,p,D+b,y],[D-b,p,D+b,p],[D-b,y,D+b,y])}),t.addPortal(0,0,0,0),mi(t,o[0],Lt.crown),Fi(t,{x:0,y:r(Ke+e.run*.3),z:Ke+e.run*.3,yaw:0},Lt.crown-.04,{});const P=i.add(250,56,(D,H,$)=>_a(D,H,$,{dir:"up"})),S=i.add(250,56,(D,H,$)=>va(D,H,$,"No entry")),A=[{...Zs(t,"sheet",{x:0,y:0,z:Ke-.6,yaw:0},2.1,1.7,.38,P,S,{emit:1.3}),r:8,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}],N=l.walls.concat([[-c,e.len-.4,c,e.len-.4]],v),L={y0:e.rise-.6,y1:e.rise+.6},I=[{x0:-c,x1:c,z0:p+.2,z1:y,...L,fire:D=>{D.audio.sfx("touchOut"),D.director.setHint("Golders Green. The air is cold and smells of rain.",6)}},{x0:-c,x1:c,z0:y+.9,z1:e.len,...L,fire:D=>D.director.win()}];return{cells:l.cells,walls:N,items:A,frames:o,extra:{zones:I}}}},nx={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,r=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],s=di(t,r,Lt,{floor:Ht("floor")}),a=Ht("shutter");xr(t,{x:0,y:0,z:e.len-.02,yaw:0},vu(Lt),null,-1,"atlas",(h,u)=>[a[0]+(a[2]-a[0])*(h/Lt.W+.5),a[1]+(a[3]-a[1])*(u/Lt.crown)]),t.addPortal(0,0,0,0),mi(t,r[0],Lt.crown);const o=i.add(200,60,(h,u,f)=>va(h,u,f,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],o);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:s.cells,walls:s.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:r}}},ul=2.3,Hu=2.4,oo=Al(ul,1.2,Hu),ye=1.2,zs=2.5,ix={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),r=Tn(ye+zs,e)+zs+ye,s=Jr(0,e,i);return{p:{steps:e,dir:i,len:r,rise:s,flick:n.chance(.35)},exits:[{x:0,y:s,z:r,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,r]}},build(n){const{b:t,p:e,sheet:i,theme:r}=n,s=ye+zs,a=Tn(s,e.steps),o=a-s,l=b=>(o>0?Ue((b-s)/o,0,1):b>=s?1:0)*e.rise,c=b=>({x:0,y:l(b),z:b,yaw:0}),h=di(t,[c(0),c(ye)],Lt,{floor:Ht("floor")}),u=[ye,ye+1.25,s];o>0&&u.push(a),u.push(a+1.25,e.len-ye);const f=di(t,u.map(c),Rl(oo),{floor:null,u0:ye}),m=di(t,[c(e.len-ye),c(e.len)],Lt,{floor:Ht("floor"),u0:e.len-ye});xr(t,c(ye),Lt,oo,-1,"tile"),xr(t,c(e.len-ye),Lt,oo,1,"tile");const g=ul/2,_=Ht("floorDark"),d=-g-.03,p=ul+.06;t.grid("atlas",[d,0,ye],[p,0,0],[0,0,zs],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,a],[p,0,0],[0,0,e.len-ye-a],2,3,[0,1,0],_,null,!0),e.steps>0&&Ul(t,s,e.steps,e.dir,[0,1,2].map(b=>d+p*(b/2)),0),Pi(t,c(ye),Lt.W/2,"floorDark"),Pi(t,c(e.len-ye),Lt.W/2,"floorDark");for(const b of f.cells)b.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,c(0),Lt.crown),Fi(t,c((s+a)/2),Hu-.03,{flick:e.flick,power:.8,radius:6,len:.9});const y=[],v=[["TO THE TRAINS",-1,ye+1.3],["WAY OUT",1,e.len-ye-1.3]];for(const[b,T,P]of v){const S=i.add(220,54,(A,N,L)=>Mu(A,N,L,b,r,T>0?"right":"left")),M=Zn(t,"sheet",c(P),T,g,l(P)+.72,1.4,.345,S,null,.025);y.push({...M,r:4,label:"read tiles",title:"TILED LEGEND",text:b==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const x=h.walls.concat(f.walls,m.walls),C=Lt.W/2;for(const b of[ye,e.len-ye])x.push([-C,b,-g,b],[g,b,C,b]);return{cells:h.cells.concat(f.cells,m.cells),walls:x,items:y}}},zn={corridor:Cv,bend:Pv,junction:Bv,platform:jv,stairs:Jv,escalator:Qv,exit:ex,deadend:nx,cross:ix},Mn=n=>!!zn[n];function gh(n,t={}){const e=n.stretchCount+1,i=new Re(nn(n.seed,1e3+e*13)),r=[];if(t.first&&r.push(Mn("platform")?"platform":"corridor"),t.fromJunction&&r.push("corridor"),t.exit)r.push("corridor",Mn("exit")?"exit":"corridor");else{const o=i.int(2,4);let l=t.first?1:0,c=r[r.length-1]||"";for(let h=0;h<o;h++){const u=i.weighted([["corridor",c==="corridor"?1:3],["bend",c==="bend"?.4:2.2],["stairs",Mn("stairs")&&c!=="stairs"?1.5:0],["escalator",Mn("escalator")&&c!=="escalator"?.7:0],["platform",Mn("platform")&&l<1&&h>0?1.6:0]]);r.push(u),u==="platform"&&(l++,Mn("cross")&&i.chance(.5)&&r.push("cross","platform")),c=u}Mn("platform")&&!r.includes("platform")&&r.splice(i.int(Math.min(1,r.length),r.length),0,"platform"),r[r.length-1]!=="corridor"&&r.push("corridor"),r.push(Mn("junction")?"junction":"corridor")}t.fromJunction&&n.testBranch&&r.splice(0,r.length,"corridor",...n.testBranch),n.stretchCount++;const s=t.index??n.progress,a=av(s);return{id:e,plan:r,rng:i,index:Math.min(s,il.length),station:a,theme:bu(a),out:t.fromJunction?t.exitIndex===0?1:-1:0,dir:i.chance(.5)?"north":"south",dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const rx=new Set(["junction","cross"]);function sx(n){return v_(0,n)}function ax(n,t,e,i,r){const s=n.game.world,a=sx(s.exitPose(t,e).yaw);let o=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(o=n.branchStretch(t,e),l=0);let c=o.plan[l];c===void 0&&(c="corridor",l=o.plan.length);const h=p=>n.envFor(o,l,{yaw:a,...p}),u=p=>n.envFor(o,l-1,{yaw:a,filler:!0,...p}),f=a>.1?-1:a<-.1?1:0,m=rx.has(c)||c==="corridor"&&o.plan[l+1]==="junction";if(i===0){if(m&&f!==0)return{def:zn.bend,env:u({turn:f})};if(c==="bend"){const p=f!==0?f:o.out||r.sign();return{def:zn.bend,env:h({turn:p})}}if(c==="junction")return{def:zn.junction,env:h(n.junctionEnv(r,o))};if(l===0&&o.fromJunction){const p=t.env;return{def:zn.corridor,env:h({gate:!0,len:8,noticeChance:0,theme:p.theme,station:p.station}),force:!0}}return{def:zn[c]||zn.corridor,env:h({})}}const g=[],_=o.out||1;f!==0?g.push(["bend",{turn:f}]):g.push(["bend",{turn:_}]),g.push(["corridor",{short:!0}]),Mn("stairs")&&g.push(["stairs",{dir:-1}],["stairs",{dir:1}]),Mn("escalator")&&g.push(["escalator",{dir:-1}],["escalator",{dir:1}]),g.push(["corridor",{short:!0,tiny:!0}]),f===0&&g.push(["bend",{turn:-_}]);const d=g[i-1];return d?{def:zn[d[0]],env:u(d[1])}:null}const lo=n=>String(n).padStart(2,"0"),_h={"Battersea Power Station":"Battersea Pwr Stn","via Charing Cross":"via CX","via Bank":"via Bank"},vh=["There is a good service on the Northern line","Please stand behind the yellow line","Mind the gap between the train and the platform","This station closes after the last train","Please keep your belongings with you at all times","Check front of train for destination"],xh=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain","North End. This train does not stop at North End"];function ox(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function yh(n){const t=(Math.floor(n)%86400+86400)%86400;return`${lo(Math.floor(t/3600))}:${lo(Math.floor(t/60)%60)}:${lo(t%60)}`}function Mh(n,t,e=28){const i=`${n}   ***   `,r=Math.floor(t*5)%i.length;return(i+i+i).slice(r,r+e)}const lx=n=>n<=0?"due":`${n} min${n===1?"":"s"}`;function Gu(n,t,e,i,r){const s=dv(n,t),a=[];for(let o=0;o<2;o++){const l=e.nextAt+o*e.period,c=new Re(nn(r,Math.round(l))),[h,u]=s[Math.floor(c.next()*s.length)],f=`${_h[h]||h}${u?` ${_h[u]||u}`:""}`;a.push({dest:h,via:u,label:f,secs:l-i})}return a}function cx(n,t){n.anchorTod===void 0&&(n.anchorTod=ox(),n.anchorT=t);const e=n.game,i=n.anchorTod+(t-n.anchorT),r=n.anchorTod-(t-n.anchorT),s=$t.goal-n.progress,a=n.wrong,o=Math.floor(t/12),l=new Re(nn(n.seed,o)),c=l.chance(Math.min(.85,a*.2)),h=e.world&&e.world.current,u=h&&h.env.station||"Mornington Crescent",f=(h&&h.def.type==="platform"?h.p.dir:h&&h.env.pdir)||"north",m=e.trains?e.trains.schedule():{nextAt:e.state.time+150,period:240},g=Gu(u,f,m,e.state.time,n.seed);let _=s<=0?"approaching":`${s} min${s===1?"":"s"}`;a>=3&&Math.floor(t*4)%23===0&&(_=l.pick(["-- mins","99 mins","never"]));const d=(C,b)=>({l:`${C} ${b.label}`,r:lx(Math.max(0,Math.ceil(b.secs/60)))});let p=[d(1,g[0]),{l:"2 Way out",r:_},d(3,g[1])];c&&(p[2]=l.pick([{l:"3 Check front of train",r:""},{l:`3 ${u}`,r:"due"},{l:"3 North End",r:"-- mins"},{l:"3 Not in service",r:""}])),e.trains&&e.trains.atPlatform()&&(p[0]={l:`1 ${g[0].label}`,r:""});const y=n.lastWrong?r:i,x=o%3===1?Mh(c?l.pick(xh):l.pick(vh),t):yh(y);return{rows:p,footer:x,rows2:[{l:"Way out",r:_},{l:n.lastWrong?"You are going the wrong way":"Follow the yellow and black signs"},{l:Mh(c?l.pick(xh):l.pick(vh),t)}],footer2:yh(y),tod:i,todBack:r}}class hx{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new Re(nn(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=gh(this,{first:!0});e&&(i.plan=e.slice());const r=zn[i.plan[0]],s=this.envFor(i,0);return t.start(r,s,nn(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,pdir:t.dir,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,...i}}choose(t,e,i,r){return ax(this,t,e,i,r)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,r=t.env.stretch?t.env.stretch.index:this.progress,s=i?r+1:Math.max(0,r-2);t.branches[e]=gh(this,{correct:i,fromJunction:t,exitIndex:e,exit:s>=$t.goal,index:s,clocksBack:!i})}return t.branches[e]}junctionEnv(t,e){const i=this.junctionsPlanned++,r=e?e.index:this.progress,s=r<2?0:r<4?1:2,a=i===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||a,jlevel:this.forceLevel??s}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min($t.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}boardState(t){return cx(this,t)}}class ux{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.last=null,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,r=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:r,dur:r+Math.max(3.2,i*.43)+.8,spoken:!1,a:t,tag:t.tag!==void 0?t.tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const r=this.rng.next();let s=Y_,a=!1;r<Math.min(.8,i*.22)&&(s=i>=3&&this.rng.chance(.5)?Z_:j_,a=!0);const o=e.state.station||"this station",l=this.rng.pick(s).replaceAll("{station}",o).replaceAll("{next}",Ru(o,"north")||"the next station");this.say({text:l,chime:a&&this.rng.chance(.6)?"fall":"rise",odd:a})}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class fx{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=Ci(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;this.dipT>0&&(i=.35+.3*Se(t*18,9));const r=this.game.trains?this.game.trains.level:0;return r>.02&&(i*=1-.22*r*(.5+.5*Se(t*14,4))),this.blackout>0&&(i=.02),this.pow=Ci(this.pow,i,20,e||.016),this.pow}}function dx(n,t){const e=n.world,i=e.current,r=n.state;if(!i)return;const s=i.env;s.station&&r.station!==s.station&&(r.station=s.station);const a=i.built;if(!a||!a.extra)return;const[o,l]=ga(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(a.extra.zones)for(const h of a.extra.zones)h.done||o>=h.x0&&o<=h.x1&&l>=h.z0&&l<=h.z1&&(h.y0===void 0||c>=h.y0&&c<=h.y1)&&(h.once!==!1&&(h.done=!0),h.fire(n,i,h,t))}function px(n,t){const e=n.p,i=s=>s===0?"left":"right",r=s=>`${e.dirs[s]==="north"?"northbound":"southbound"} platform`;if(e.kind==="announce"){const s=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow signs for the ${r(s)}. To the ${i(s)}. Please.`,`The way out is by the ${r(s)}, on the ${i(s)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(s)}, for the ${r(s)}. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${r(s)}, to the ${i(s)}.`,`Customers for the way out should keep to the ${i(s)} for the ${r(s)}.`,`The way out is by way of the ${r(s)}, on your ${i(s)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return e.kind==="clock"?{text:"Customers are reminded that all station clocks run forwards.",chime:"rise",urgent:!0}:{text:"Please follow the yellow and black signs for the way out.",chime:"rise",urgent:!0}}const mx=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function gx(n,t){const e=px(t,n.director.announcer.rng);t.announcement=e,n.director.announcer.say(e),n.state.junctionKind=t.p.kind}function _x(n,t){const e=n.director.announcer;if(t.p.kind==="announce"&&t.announcement){e.say({...t.announcement,urgent:!0}),n.director.reading=null,n.player.zoomTarget=0;return}const i=e.rng.pick(mx);e.say({text:i,chime:"none",urgent:!0}),n.director.reading=null,n.player.zoomTarget=0}function vx(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,r=n.story,s=n.director.events;t.gateShut=!0,t.gateWall=ah,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(ah));const a=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const o=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(o,l,c);const h=n.player;if(h.pos.x-=o,h.pos.y-=l,h.pos.z-=c,h.eyeY-=l,i.refresh(),n.audio.sfx("gate"),s.lightsOut(.28),s.glitch(a?.5:1.3),e.def.type!=="junction")return;r.decide(a);const u=t.env.stretch?t.env.stretch.index:r.progress;r.progress=Math.min($t.goal,u),n.state.progress=r.progress,a?r.progress>=$t.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),s.brownOut(2.2)),n.state.lastChoice=a?"right":"wrong"}class xx{constructor(t){this.game=t,this.announcer=new ux(t),this.events=new fx(t),this.reset()}reset(){this.target=null,this.reading=null,this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Mornington Crescent. Walk up the line to the way out. Staff notices explain how.",8)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){gx(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read the signs, watch the clocks, listen for the chime.",7))}helpPoint(t){_x(this.game,t)}commit(t){vx(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),r=Math.floor(e.time%60),s=[["Tape length",`${i}:${String(r).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Sent back down the line",`${e.wrongTurns} time${e.wrongTurns===1?"":"s"}`],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(s),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,3).map(r=>r.r?`${r.l} … ${r.r}`:r.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:r}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:r},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,r)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,r=e.viewDir(),s=e.pos.x,a=e.eyeY,o=e.pos.z;let l=null,c=0;const h=[i.current,...i.neighbours(i.current)];for(const u of h)if(u.built)for(const f of u.built.items){if(f.hidden)continue;const[m,g,_]=hr(u,f.x,f.y,f.z),d=m-s,p=g-a,y=_-o,v=Math.hypot(d,p,y);if(v>(f.r||5.5)||v<.2)continue;const x=(d*r.x+p*r.y+y*r.z)/v,C=f.cone||.9;if(x<C)continue;const b=x-v*.01;b>c&&(c=b,l={item:f,node:u,d:v,dot:x})}if(this.target=l,this.reading){const u=this.reading,[f,m,g]=hr(u.node,u.item.x,u.item.y,u.item.z),_=f-s,d=m-a,p=g-o,y=Math.hypot(_,d,p),v=(_*r.x+d*r.y+p*r.z)/Math.max(y,.001);(y>(u.item.r||5.5)+1.5||v<.55||!u.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[r,s]=this.hints.shift();this.setHint(r,s)}e.step&&i.audio.footstep(e.running,i.player.loc),dx(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,r=new Date;let s="";t&&this.target&&!this.reading&&(s=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const a=this.announcer.caption();i.caption=a?a.text:"",i.prompt=s,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:r,live:i.started,caption:a?a.text:"",captionTag:a?a.tag:"",prompt:s,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const o=e.renderer.dv.uniforms;o.uTrack.value=this.events.tracking,o.uZoom.value=e.player.zoom}}const Hn=512,aa=256,Bn={side:[0,0,512,160],front:[0,164,150,92],rear:[154,164,150,92],roof:[310,170,30,30],dark:[350,170,30,30],lamp:[390,170,30,30],tail:[430,170,30,30]},fr=[-.78,1.5];let Bs=null,pt=null,Vr=null;const Bt=n=>160-(n-fr[0])/(fr[1]-fr[0])*160;function Sh(n,t,e,i){const r=pt.createLinearGradient(0,Bt(i),0,Bt(e));r.addColorStop(0,"#fff6d6"),r.addColorStop(.55,"#e9dba4"),r.addColorStop(1,"#8c8468"),pt.fillStyle="#1b1c1e",pt.fillRect(n-2,Bt(i)-2,t+4,Bt(e)-Bt(i)+4),pt.fillStyle=r,pt.fillRect(n,Bt(i),t,Bt(e)-Bt(i)),pt.fillStyle="rgba(40,40,60,0.55)",pt.fillRect(n+t*.3,Bt(i),2,Bt(e)-Bt(i)),pt.fillRect(n,Bt(e+.16),t,Bt(e)-Bt(e+.16))}function yx(){const n=60.23529411764706;pt.fillStyle="#15161a",pt.fillRect(0,Bt(-.05),Hn,160-Bt(-.05));for(const[e,i]of[[.9,2.3],[6.2,7.6]]){pt.fillStyle="#26282c",pt.fillRect(e*n,Bt(-.25),(i-e)*n,Bt(-.7)-Bt(-.25));for(const r of[e+.35,i-.35])pt.fillStyle="#3a3c40",pt.beginPath(),pt.arc(r*n,Bt(-.48),.27*70,0,7),pt.fill()}pt.fillStyle="#f2f2ee",pt.fillRect(0,0,Hn,Bt(.42)),pt.fillStyle="#0c2a8e",pt.fillRect(0,Bt(.42),Hn,Bt(-.05)-Bt(.42)),pt.fillStyle="#9da2a6",pt.fillRect(0,0,Hn,Bt(1.42));const t=[[.25,.62,"door1"],[1.05,1.3,"win"],[2.5,1.3,"door2"],[3.95,.6,"win"],[4.7,.5,"win"],[5.35,1.3,"door2"],[6.8,1.3,"win"],[8.2,0,""]];for(const[e,i,r]of t)if(r==="win")Sh(e*n,i*n,.72,1.3);else if(r){pt.fillStyle="#d5231d",pt.fillRect(e*n,Bt(1.42),i*n,Bt(-.05)-Bt(1.42));const s=r==="door2"?2:1;for(let a=0;a<s;a++){const o=(e+i/s*a)*n,l=i/s*n;Sh(o+l*.2,l*.6,.62,1.3),pt.fillStyle="rgba(0,0,0,0.5)",pt.fillRect(o,Bt(1.42),1.5,Bt(-.05)-Bt(1.42))}pt.fillStyle="#e7c21c",pt.fillRect(e*n,Bt(-.02),i*n,3)}wl(pt,4.6*n,Bt(.2)-6,12,{name:""}),pt.fillStyle="rgba(60,45,25,0.16)";for(let e=0;e<260;e++)pt.fillRect(Math.random()*Hn,Bt(.5)+Math.random()*(160-Bt(.5)),2,2+Math.random()*5)}function bh(n,t){const[,e,i,r]=Bn.front;pt.fillStyle="#d5231d",pt.fillRect(n,e,i,r),pt.fillStyle="#9da2a6",pt.fillRect(n,e,i,r*.06),pt.fillStyle="#101113",pt.fillRect(n+i*.06,e+r*.2,i*.88,r*.34),pt.fillStyle="#2a2f36";for(const[s,a]of[[.09,.36],[.41,.59],[.64,.91]])pt.fillRect(n+i*s,e+r*.23,i*(a-s),r*.28);pt.fillStyle="#101113",pt.fillRect(n+i*.3,e+r*.07,i*.4,r*.11),pt.fillStyle="#101113",pt.fillRect(n,e+r*.86,i,r*.14);for(const s of[.16,.84])pt.fillStyle=t,pt.beginPath(),pt.arc(n+i*s,e+r*.7,r*.055,0,7),pt.fill(),pt.fillStyle="#55120f",pt.beginPath(),pt.arc(n+i*(s<.5?s+.09:s-.09),e+r*.7,r*.04,0,7),pt.fill()}function Vu(){if(Bs)return;Bs=An(Hn,aa),pt=Bs.getContext("2d"),pt.fillStyle="#15161a",pt.fillRect(0,0,Hn,aa),yx(),bh(Bn.front[0],"#fff4c8"),bh(Bn.rear[0],"#ff2a1a");const n=(t,e)=>{pt.fillStyle=e,pt.fillRect(t[0]-3,t[1]-3,t[2]+6,t[3]+6)};n(Bn.roof,"#8d9296"),n(Bn.dark,"#131417"),n(Bn.lamp,"#fff6d8"),n(Bn.tail,"#ff2a1a"),Vr=new da(Bs),Vr.colorSpace=Xe,Vr.anisotropy=2}function Mx(){return Vu(),Vr}function Sx(n){Vu();const[t,e,i,r]=Bn.front;pt.fillStyle="#0b0a08",pt.fillRect(t+i*.31,e+r*.08,i*.38,r*.09),pt.fillStyle="#ffb21e",pt.textAlign="center",pt.textBaseline="middle";let s=r*.1;pt.font=`400 ${s}px ${cr}`;const a=pt.measureText(n).width;a>i*.36&&(s*=i*.36/a,pt.font=`400 ${s}px ${cr}`),pt.fillText(n,t+i*.5,e+r*.128),Vr.needsUpdate=!0}function Ur(n){const[t,e,i,r]=Bn[n];return[(t+.5)/Hn,1-(e+r-.5)/aa,(t+i-.5)/Hn,1-(e+.5)/aa]}const un={cars:4,carLen:8.5,gap:.32};un.length=un.cars*un.carLen+(un.cars-1)*un.gap;const tr=[[.98,-.78],[1.2,-.3],[1.2,.75],[1.1,1.15],[.88,1.5],[.6,1.76],[.3,1.88],[0,1.9]],bx=4;function Ex(n,t,e,i){const r=t-un.carLen,s=t,a=Ur("side"),o=Ur("roof"),l=Ur("dark"),c=f=>a[1]+(a[3]-a[1])*(f-fr[0])/(fr[1]-fr[0]),h={emit:.8},u={emit:.42};for(const f of[-1,1])for(let m=0;m<tr.length-1;m++){const[g,_]=tr[m],[d,p]=tr[m+1],y=[f*(p-_),-(d-g)*1,0],v=[f*g,_],x=[f*d,p];if(m<bx){const C=f>0?a[0]:a[2],b=f>0?a[2]:a[0];n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,[C,c(_),b,c(p)],h)}else n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,o,u)}n.quad("train",[-.98,-.78,r],[.98,-.78,r],[.98,-.78,s],[-.98,-.78,s],[0,-1,0],l,{emit:.1});for(const[f,m,g]of[[s,1,e?"front":null],[r,-1,i?"rear":null]]){const _=g?Ur(g):l,d=(y,v)=>g?[_[0]+(_[2]-_[0])*(.5+m*y/2.4),_[1]+(_[3]-_[1])*((v+.78)/2.68)]:[(_[0]+_[2])/2,(_[1]+_[3])/2],p={emit:g?.85:.25};for(let y=0;y<tr.length-1;y++){const[v,x]=tr[y],[C,b]=tr[y+1];n.quadUV("train",[-v,x,f],[v,x,f],[C,b,f],[-C,b,f],[0,0,m],d(-v,x),d(v,x),d(C,b),d(-C,b),p)}if(g){const y=Ur(g==="front"?"lamp":"tail");for(const v of[-.82,.82])n.quad("train",[v-.09,-.08,f+m*.02],[v+.09,-.08,f+m*.02],[v+.09,.1,f+m*.02],[v-.09,.1,f+m*.02],[0,0,m],y,{emit:2})}}}let Hs=null;function Tx(){if(Hs)return Hs;const n=new _u;for(let s=0;s<un.cars;s++)Ex(n,-s*(un.carLen+un.gap),s===0,s===un.cars-1);const t=n.bake([0,0,0]).train,e={value:new me(0,1,-1e6,1e6)},i=mu(Mx(),null,!1,e);i.side=bn;const r=new en(t,i);return r.frustumCulled=!1,r.visible=!1,r.name="train",Hs={mesh:r,clip:e},Hs}const Nr=5.5,wx=6.5,Ax=1,Eh="Please mind the gap between the train and the platform.";class Rx{constructor(t){this.game=t;const{mesh:e,clip:i}=Tx();this.mesh=e,this.clip=i,t.scene.add(e),this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^31249),this.nextAt=32,this.period=215,this.phase="idle",this.node=null,this.t=0,this.s=0,this.level=0,this.target=0,this.seenId=0,this.count=0,this.mesh.visible=!1,this.game.state.train="idle",this.game.state.trains=0}schedule(){return{nextAt:this.nextAt,period:this.period}}atPlatform(){return this.phase==="dwell"}soon(t=3){this.phase==="idle"&&(this.nextAt=this.game.state.time+t+Nr)}_done(){this.phase="idle",this.node=null,this.mesh.visible=!1,this.target=0,this.nextAt=this.game.state.time+this.period*this.rng.range(.8,1.25)}_begin(t){const e=this.game,i=e.state,r=t.env.station,s=t.p.dir,a=Gu(r,s,this.schedule(),i.time,e.story.seed)[0];this.train=a,this.node=t,this.phase="approach",this.t=0,this.count++,i.trains=this.count,Sx(a.dest.replace("Battersea Power Station","Battersea")),e.audio.sfx("trainApproach"),e.director.announcer.say({text:`The train now approaching platform ${Ui(s)} is not in service. Please stand well back from the platform edge.`,chime:"rise"}),e.director.setHint("A warm wind pushes out of the tunnel. It smells of brake dust.",5)}update(t){const e=this.game,i=e.state.time,r=e.world.current,s=e.director.events,a=!!(r&&r.def.type==="platform"&&r.built);if(a&&r.id!==this.seenId&&(this.seenId=r.id,this.phase==="idle"&&!r.p.start&&(this.nextAt=Math.min(this.nextAt,i+Nr+this.rng.range(9,20)))),this.t+=t,this.phase==="idle")i>=this.nextAt-Nr&&(a?this._begin(r):(this.phase="distant",this.t=0,e.audio.sfx("train")));else if(this.phase==="distant")this.target=.75*Math.sin(Ue(this.t/9,0,1)*Math.PI),this.t>9&&this._done();else{const c=this.node;if(!c.built||!e.world.nodes.has(c.id)){this._done();return}const h=c.p.L,u=h-1.3,f=-1.2;if(this.phase==="approach")this.target=.75*Ue(this.t/Nr,0,1),this.t>=Nr&&(this.phase="arrive",this.t=0,this.mesh.visible=!0,s.glitch(.5));else if(this.phase==="arrive"){const m=Ue(this.t/wx,0,1);this.s=f+(u-f)*(1-(1-m)*(1-m)),this.target=1-.7*m,!this.braked&&m>.45&&(this.braked=!0,e.audio.sfx("trainBrake")),m>=1&&(this.phase="dwell",this.t=0,this.braked=!1,this.spoke=0)}else if(this.phase==="dwell"){this.target=.22;const m=e.director.announcer,g=d=>Math.max(3.2,d.split(/\s+/).length*.43)+.8,_=(d,p)=>m.say({text:d,chime:"none",tag:"(from the train)",urgent:p});if(this.spoke===0&&this.t>.4&&(this.spoke=1,m.say({text:Eh,chime:"none",tag:"(platform)",urgent:!0}),this.tCall=this.t+g(Eh)+.2),this.spoke===1&&this.t>this.tCall){this.spoke=2;const d=c.env.station,p=this.train,y=e.state.wrong>=2.5&&this.rng.chance(.5)?vv(d):_v(d,c.p.dir,p.dest,p.via);_(y,!0),this.tClose=this.t+g(y)+.3}this.spoke===2&&this.t>this.tClose&&(this.spoke=3,_("Stand clear of the doors, please.")),this.spoke===3&&this.t>this.tClose+1.5&&(this.spoke=4,e.audio.sfx("doorChime")),this.spoke===4&&this.t>this.tClose+5&&(this.phase="depart",this.t=0,e.audio.sfx("trainDepart"))}else this.phase==="depart"&&(this.s=u+.5*Ax*this.t*this.t,this.target=Ue(.3+this.t*.12,0,1),this.s-un.length>h+pe.depth&&(s.glitch(.4),this._done()));if(this.node){const m=c.p.side,[g,_,d]=hr(c,m*nt.track,0,this.s);this.mesh.position.set(g,_,d),this.mesh.rotation.y=c.yaw;const p=Math.sin(c.yaw),y=Math.cos(c.yaw),v=c.pos.x*p+c.pos.z*y;this.clip.value.set(p,y,v-pe.depth+.07,v+h+pe.depth-.07)}}this.level=Ci(this.level,this.target,this.target>this.level?2.2:.9,t);const o=a&&this.node===r;e.player.shake=this.level*(o?1:.25);const l=o&&this.phase!=="dwell"?(this.phase==="depart"?.1:.2)*this.level*(1-.8*e.player.zoom):0;e.player.windX=l?Math.sin(r.yaw)*l:0,e.player.windZ=l?Math.cos(r.yaw)*l:0,this.node&&this.node.built&&!this.node.built.group.visible?this.mesh.visible=!1:this.node&&(this.phase==="arrive"||this.phase==="dwell"||this.phase==="depart")&&(this.mesh.visible=!0),e.state.train=this.phase}}function co(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class Cx{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,h,u]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const f=e.createOscillator();f.type=h,f.frequency.value=c;const m=e.createGain();m.gain.value=u,f.connect(m),m.connect(i),f.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const r=e.createOscillator();r.type="square",r.frequency.value=100;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=2900,s.Q.value=1.4,r.connect(s),s.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),r.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,co(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const a=co(e,t.white,.8);a.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,a.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const o=e.createGain();o.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,co(e,t.white,1.3).connect(l),l.connect(o),o.connect(t.out)}update(t,e){const i=this.ctx,r=i.currentTime,s=.12;this.t+=t;const a=this.t,o=e.director.events,l=e.world.current,c=e.state.wrong,h=o.pow,u=l?l.flick.value:1,f=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*h*f*(1-c*.03),r,s),this.buzz.gain.setTargetAtTime(.004+(u<.5?0:.006)*h+(1-h)*.01,r,.02);const m=e.trains?e.trains.level:0;this.rumble.gain.setTargetAtTime(.16+.1*Se(a*.13,1)+m*.75,r,.3),this.rumbleLP.frequency.setTargetAtTime(62+m*120,r,.4);const g=l&&l.def.type==="platform"?1.5:1,_=.5+.5*Se(a*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+m*.11)*g,r,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*Se(a*.17,3))+m*500,r,.5);const d=Math.max(0,Se(a*.11,4)-.35)+m*.25;this.whistle.gain.setTargetAtTime(d*.05*g,r,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*Se(a*.23,5),r,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Me(n,{freq:t,to:e,type:i="sine",dur:r=.3,gain:s=.2,attack:a=.005,at:o=0,rev:l=.5,dry:c=1}){const h=n.ctx,u=h.currentTime+o,f=h.createOscillator();f.type=i,f.frequency.setValueAtTime(t,u),e&&f.frequency.exponentialRampToValueAtTime(e,u+r);const m=h.createGain();if(m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(s,u+a),m.gain.exponentialRampToValueAtTime(1e-4,u+r),f.connect(m),c>0){const g=h.createGain();g.gain.value=c,m.connect(g),g.connect(n.out)}if(l>0){const g=h.createGain();g.gain.value=l,m.connect(g),g.connect(n.rev)}f.start(u),f.stop(u+r+.05)}function ce(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:r=1e3,q:s=1,at:a=0,rev:o=.4,dry:l=1,attack:c=.002,sweep:h=0}){const u=n.ctx,f=u.currentTime+a,m=u.createBufferSource();m.buffer=n.white,m.loop=t>1.2;const g=u.createBiquadFilter();g.type=i,g.frequency.setValueAtTime(r,f),g.Q.value=s,h&&g.frequency.exponentialRampToValueAtTime(h,f+t);const _=u.createGain();if(_.gain.setValueAtTime(1e-4,f),_.gain.exponentialRampToValueAtTime(e,f+c),_.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(g),g.connect(_),l>0){const d=u.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(o>0){const d=u.createGain();d.gain.value=o,_.connect(d),d.connect(n.rev)}m.start(f,Math.random()*1.5),m.stop(f+t+.05)}function er(n,t,e,i=.16){Me(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Me(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Me(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function Px(n,t,e,i){const r=(t?1.25:1)*(.85+Math.random()*.3),s=(i?1.06:.95)*(.94+Math.random()*.12);Me(n,{freq:95*s,to:48,dur:.09,gain:.16*r,rev:.35}),e==="metal"?(ce(n,{dur:.07,gain:.12*r,type:"bandpass",freq:2300*s,q:5,rev:.6}),Me(n,{freq:610*s,dur:.22,gain:.03*r,type:"triangle",rev:.8,dry:.4})):e==="stone"?ce(n,{dur:.06,gain:.11*r,type:"bandpass",freq:1250*s,q:1.2,rev:.7}):(ce(n,{dur:.045,gain:.13*r,type:"highpass",freq:1900*s,q:.7,rev:.75}),ce(n,{dur:.03,gain:.05*r,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const Dx={chimeRise(n){er(n,392,0),er(n,493.9,.42),er(n,587.3,.84)},chimeFall(n){er(n,587.3,0),er(n,493.9,.42),er(n,380,.84,.17)},zoom(n){Me(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){ce(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Me(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),ce(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),ce(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Me(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)ce(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,r]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Me(n,{freq:e*(.99+Math.random()*.02),dur:r,gain:i,at:t,rev:.9,dry:.7,attack:.002});ce(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),ce(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);ce(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}ce(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Me(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),ce(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},touchOut(n){Me(n,{freq:2350,dur:.14,gain:.07,type:"triangle",attack:.004,rev:.4,dry:.9})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Me(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Me(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Me(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Me(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Me(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},Lx={trainApproach(n){ce(n,{dur:9.5,gain:.32,type:"lowpass",freq:110,sweep:420,attack:4.8,rev:.7,dry:.8}),ce(n,{dur:6,gain:.012,type:"bandpass",freq:2900,sweep:3700,q:26,attack:3.5,rev:1,dry:.2});for(let t=0;t<14;t++){const e=5.2+t*(.2+t*.022);ce(n,{dur:.06,gain:.16-t*.008,type:"lowpass",freq:330,at:e,rev:.8,dry:.7}),ce(n,{dur:.05,gain:.1-t*.005,type:"lowpass",freq:300,at:e+.085,rev:.8,dry:.7})}},trainBrake(n){ce(n,{dur:2.6,gain:.03,type:"bandpass",freq:3300,sweep:2300,q:34,attack:.5,rev:1,dry:.5}),ce(n,{dur:2.2,gain:.018,type:"bandpass",freq:4500,sweep:3200,q:40,attack:.7,at:.3,rev:1,dry:.4}),ce(n,{dur:.9,gain:.07,type:"highpass",freq:2600,at:3.3,attack:.03,rev:.6,dry:.8}),Me(n,{freq:70,to:42,dur:.5,gain:.12,at:3.2,rev:.5})},doorChime(n){for(let t=0;t<9;t++)Me(n,{freq:1960,dur:.11,gain:.05,at:.9+t*.21,type:"triangle",attack:.004,rev:.6,dry:.7});ce(n,{dur:.12,gain:.12,type:"lowpass",freq:500,at:3,rev:.7})},trainDepart(n){for(const[t,e,i,r]of[[.2,110,330,2.6],[2.5,180,520,3],[5.2,260,700,3.6]])Me(n,{freq:e,to:i,dur:r,gain:.03,at:t,type:"sawtooth",attack:.4,rev:.8,dry:.5}),Me(n,{freq:e*2.02,to:i*2.02,dur:r,gain:.012,at:t,type:"triangle",attack:.4,rev:.8,dry:.4});ce(n,{dur:9.5,gain:.26,type:"lowpass",freq:140,sweep:380,attack:3,rev:.7,dry:.8});for(let t=0;t<16;t++){const e=1.6+7.2*(1-Math.sqrt(1-t/16));ce(n,{dur:.055,gain:.07+t*.006,type:"lowpass",freq:320,at:e,rev:.8,dry:.7})}}},Th="./voice/";function Ix(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}const Ux=["Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel","Microsoft Susan","Microsoft Maisie","Martha","Kate","Serena","Stephanie","Fiona","Moira","Karen","Tessa","Catherine","Samantha","Victoria","Allison","Ava","Susan","Zoe","Microsoft Zira","Microsoft Aria","Microsoft Jenny","Google US English"],Nx=/\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;class Fx{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.clips=null,this.ctx=null,this.dest=null,this.src=null,this.buffers=new Map,this.seq=0,typeof fetch<"u"&&fetch(`${Th}index.json`).then(t=>t.ok?t.json():[]).then(t=>{this.clips=new Set(t)}).catch(()=>{}),this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(s=>/^en/i.test(s.lang)),i=e.filter(s=>/en[-_]GB/i.test(s.lang));for(const s of Ux){const a=i.find(o=>o.name.includes(s))||e.find(o=>o.name.includes(s));if(a&&!/\bmale\b/i.test(a.name)){this.voice=a;return}}const r=s=>/female|woman/i.test(s.name)||!Nx.test(s.name);this.voice=i.find(r)||e.find(r)||i[0]||e[0]||null}prime(){if(this.enabled&&this.synth)try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}attach(t,e){this.ctx=t,this.dest=e}_buffer(t){return this.buffers.has(t)||this.buffers.set(t,fetch(`${Th}${t}.mp3`).then(e=>e.arrayBuffer()).then(e=>new Promise((i,r)=>this.ctx.decodeAudioData(e,i,r)))),this.buffers.get(t)}speak(t,e={}){if(!this.enabled)return;this._stopAll();const i=Ix(t);if(this.clips&&this.clips.has(i)&&this.ctx){const r=++this.seq;this._buffer(i).then(s=>{if(r!==this.seq||!this.enabled)return;const a=this.ctx.createBufferSource();a.buffer=s,a.playbackRate.value=e.odd?.88:1;const o=this.ctx.createGain();o.gain.value=.8,a.connect(o),o.connect(this.dest),a.start(),this.src=a}).catch(()=>{this.buffers.delete(i),r===this.seq&&this._synth(t,e)});return}this._synth(t,e)}_synth(t,e){if(this.synth)try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.86:1,i.volume=.85,this.synth.speak(i)}catch{}}_stopAll(){if(this.seq++,this.src){try{this.src.stop()}catch{}this.src=null}if(this.synth)try{this.synth.cancel()}catch{}}stop(){this._stopAll()}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function wh(n,t,e){const i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;e?(a=(a+.02*l)/1.02,s[o]=a*3.5):s[o]=l}return r}function Ox(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let r=0;r<2;r++){const s=i.getChannelData(r);let a=0;for(let o=0;o<e;o++){const l=o/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+r)),h=Math.random()*2-1,u=.25+.75*Math.exp(-l*3);a+=(h-a)*u,s[o]=a*c}}return i}class kx{constructor(){this.ctx=null,this.ready=!1,this.voice=new Fx,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const r=e.createConvolver();r.buffer=Ox(e);const s=e.createGain();s.gain.value=.55,this.rev.connect(r),r.connect(s),s.connect(this.master),this.white=wh(e,2,!1),this.brown=wh(e,4,!0),this.ambient=new Cx(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.attach(e,this.master),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=Dx[t]||Lx[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{Px(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const fl=26,Wr=.0756,zx={wall:6.83,track:8.02,frieze:2.75,dado:.91,trackDado:5.7};function Ah(n,t,e,i,r,s,a){n.fillStyle=Tl(s,a.range(-.07,.05)),n.fillRect(t,e,i,r),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,r*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+r-1.5,i-2,1),a.chance(.03)&&(n.fillStyle=a.chance(.5)?"rgba(60,50,35,0.22)":"rgba(255,255,255,0.18)",n.fillRect(t+1,e+1,i-2,r-2))}function Wu(n,t,e,i,r,s,a,o){const l=t/fl,c=Wr*i,h=Math.ceil(r/Wr);n.fillStyle=s.grout,n.fillRect(0,e-r*i,t,r*i);for(let u=0;u<h;u++){const f=e-(u+1)*c,m=u%2?l/2:0;for(let g=-1;g<fl;g++){const _=g*l+m,d=((_+l/2)/t%1+1)%1,p=o(u,(u+.5)*Wr,d);p&&(Ah(n,_+.5,f+.5,l-1,c-1,p,a),_+l>t&&Ah(n,_-t+.5,f+.5,l-1,c-1,p,a))}}}const oa=n=>Math.round(n/Wr),Xu=(n,t)=>Math.min(...t.map(e=>Math.abs(n-e)))*fl;function Bx(n){const i=141.04683195592287,r=An(1024,512),s=r.getContext("2d"),a=new Re(lr(n.id+"passage")),o=[oa(1.2),oa(1.45)];Wu(s,1024,512,i,3.63,n,a,(c,h,u)=>{if(h<.91)return n.skirt;if(o.includes(c))return n.band;if(h>1.6){const f=Xu(u,[.5]);if(f<.5)return n.band;if(f<1.05)return n.accent}return n.ground});const l=s.createLinearGradient(0,0,0,512);return l.addColorStop(0,"rgba(25,20,12,0.4)"),l.addColorStop(.3,"rgba(25,20,12,0.1)"),l.addColorStop(.8,"rgba(25,20,12,0)"),l.addColorStop(1,"rgba(25,20,12,0.25)"),s.fillStyle=l,s.fillRect(0,0,1024,512),Zr(s,0,0,1024,512,lr(n.id)+7,1,!1),r}function Rh(n,t,e,i,r,s){n.fillStyle="#e4dcc0",n.fillRect(t,e,i,r);for(let a=0;a<26;a++){const o=t+s.range(0,i),l=e+s.range(0,r),c=s.range(30,120);for(const h of[-i,0,i]){const u=n.createRadialGradient(o+h,l,0,o+h,l,c);u.addColorStop(0,`rgba(60,48,26,${s.range(.04,.1)})`),u.addColorStop(1,"rgba(60,48,26,0)"),n.fillStyle=u,n.fillRect(o+h-c,l-c,c*2,c*2)}}}function Hx(n){const i=zx,r=An(1024,1024),s=r.getContext("2d"),a=new Re(lr(n.id+"platform")),o=512/i.wall,l=[.25,.75],c=.16*(1024/6),h=.38*(1024/6),u=(y,v)=>{for(const x of l)for(const C of[-1,1]){const b=x*1024+C*h/2-c/2;s.fillStyle=n.band,s.fillRect(b,y,c,v),s.fillStyle="rgba(255,255,255,0.10)",s.fillRect(b,y,2,v),s.fillStyle="rgba(0,0,0,0.25)";for(let T=y;T<y+v;T+=Wr*o*3)s.fillRect(b,T,c,1)}};Rh(s,0,0,1024,512,a),u(0,512-i.frieze*o);const f=[oa(1.2),oa(1.45)];Wu(s,1024,512,o,i.frieze,n,a,(y,v,x)=>v<i.dado?n.skirt:f.includes(y)||Xu(x,l.flatMap(C=>[C-.032,C+.032]))<.55?n.band:n.ground);const m=512/i.track,g=y=>1024-y*m;Rh(s,0,512,1024,512,a),u(g(i.trackDado),i.trackDado*m),s.fillStyle="#17181a",s.fillRect(0,512,1024,g(i.trackDado)-512),s.fillStyle=n.band,s.fillRect(0,g(3.6)-3,1024,6);const _=[[.25,6,"#0b0b0b"],[.42,4,"#3a3a3a"],[.6,7,"#101010"],[.78,4,"#4a2c1a"],[1,5,"#0c0c0c"]];for(const[y,v,x]of _){const C=g(i.trackDado+y);s.fillStyle=x,s.fillRect(0,C,1024,v),s.fillStyle="rgba(255,255,255,0.13)",s.fillRect(0,C,1024,1)}for(let y=40;y<1024;y+=170)s.fillStyle="#2c2d2f",s.fillRect(y,g(i.trackDado+1.1),5,1*m);Zr(s,0,512,1024,512,lr(n.id)+3,.8,!1);const d=s.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(25,20,12,0.38)"),d.addColorStop(.35,"rgba(25,20,12,0.1)"),d.addColorStop(.85,"rgba(25,20,12,0)"),d.addColorStop(1,"rgba(25,20,12,0.22)"),s.fillStyle=d,s.fillRect(0,0,1024,512);const p=s.createLinearGradient(0,1024,0,512);return p.addColorStop(0,"rgba(25,20,12,0.38)"),p.addColorStop(.4,"rgba(25,20,12,0.12)"),p.addColorStop(1,"rgba(25,20,12,0.05)"),s.fillStyle=p,s.fillRect(0,512,1024,512),Zr(s,0,0,1024,512,lr(n.id)+7,1,!1),r}function Gx(n,t="passage"){return t==="platform"?Hx(n):Bx(n)}const Gs=new Map,Fr=[],Vx=4;function Ch(n,t="passage"){const e=Fr.indexOf(n.id);for(e>=0&&Fr.splice(e,1),Fr.push(n.id);Fr.length>Vx;){const s=Fr.shift();for(const a of["passage","platform"]){const o=Gs.get(`${s}:${a}`);o&&(o.dispose(),Gs.delete(`${s}:${a}`))}}const i=`${n.id}:${t}`;let r=Gs.get(i);return r||(r=El(Gx(n,t),{repeatU:!0}),Gs.set(i,r)),r}const li=3;class Wx{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.free=[{x:0,y:0,w:t,h:t}],this.used=!1,this.overflow=0}_ensure(){this.canvas||(this.canvas=An(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}_place(t,e){let i=-1,r=1/0;for(let l=0;l<this.free.length;l++){const c=this.free[l];c.w>=t&&c.h>=e&&c.w*c.h<r&&(i=l,r=c.w*c.h)}if(i<0)return null;const s=this.free.splice(i,1)[0],a=s.w-t,o=s.h-e;return a>o?(a>8&&this.free.push({x:s.x+t,y:s.y,w:a,h:s.h}),o>8&&this.free.push({x:s.x,y:s.y+e,w:t,h:o})):(o>8&&this.free.push({x:s.x,y:s.y+e,w:s.w,h:o}),a>8&&this.free.push({x:s.x+t,y:s.y,w:a,h:e})),{x:s.x,y:s.y}}add(t,e,i){this._ensure();const r=this.size;t=Math.min(Math.round(t),r-li*2),e=Math.min(Math.round(e),r-li*2);let s=this._place(t+li*2,e+li*2);if(!s){this.overflow++;for(let h=0;h<4&&!s;h++)t=Math.max(8,Math.round(t*.7)),e=Math.max(8,Math.round(e*.7)),s=this._place(t+li*2,e+li*2);s||(s={x:0,y:0})}const a=s.x+li,o=s.y+li,l=this.ctx;l.save(),l.translate(a,o),l.beginPath(),l.rect(0,0,t,e),l.clip(),l.clearRect(0,0,t,e),i(l,t,e),l.restore(),this.used=!0;const c=.5;return[(a+c)/r,1-(o+e-c)/r,(a+t-c)/r,1-(o+c)/r]}finish(){return this.used?El(this.canvas):null}}function Xx(n,t){const e=t.env.theme||bu("Mornington Crescent");return n==="tile"?Ch(e,"passage"):n==="ptile"?Ch(e,"platform"):n==="dyn"?Fv():W_()}function qx(n){return new Wx(n.def.sheetSize||512)}let Ph="";function $x(n,t){const e=n.state,r=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;r!==Ph&&(Ph=r,Ov(n.story.boardState(t)))}class Yx{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new A_,this.overlay.mobile=this.mobile,this.renderer=new w_(t,this.overlay,{mobile:this.mobile}),this.scene=new hu,this.camera=new tn($t.fov,this.renderer.aspect,.08,90),this.player=new F_(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:$t.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new kx,this.story=new hx(this),this.world=new I_(this.scene,{choose:(i,r,s,a)=>this.story.choose(i,r,s,a),textures:(i,r)=>Xx(i,r),makeSheet:i=>qx(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new xx(this),this.trains=new Rx(this),this.keyboard=O_(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=k_(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0,r=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.progress=r,this.story.wrong=i,this.story.base=i;const s=this.story.begin(this.world,e),a=s.built&&s.built.extra&&s.built.extra.spawn;if(a){const o=Math.cos(s.yaw),l=Math.sin(s.yaw);this.player.spawn(s.pos.x+a.x*o+a.z*l,s.pos.y,s.pos.z-a.x*l+a.z*o,s.yaw+(a.yaw||0))}else this.player.spawn(s.pos.x,s.pos.y,s.pos.z+1.5,s.yaw);Object.assign(this.state,{won:!1,time:0,progress:r,wrong:i,junctions:0,wrongTurns:0,cluesRead:0,station:s.env.station}),this.director.reset(),this.trains&&this.trains.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=Ue((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const r=e.started&&!e.paused&&!e.won;try{r?this.step(i):this.idle(i)}catch(s){e.errors++,e.errors<5&&console.error(s)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,r=this.player;e.time+=t,i.mx=Ue(i.kmx+i.tmx,-1,1),i.mz=Ue(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const s=r.update(t,i,this.world);this.world.pump(),this.trains.update(t),this.director.update(t,s),this.animate(t),e.x=+r.pos.x.toFixed(2),e.y=+r.pos.y.toFixed(2),e.z=+r.pos.z.toFixed(2),e.yaw=+r.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+$t.eye,e.pos.z),this.camera.rotation.set(e.pitch+Se(e.t*.3,5)*.03,e.yaw+Se(e.t*.21,6)*.08,Se(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let r=0;for(const s of this.world.nodes.values()){if(!s.built)continue;r++;const a=Se(e*1.3+s.phase,3),o=Se(e*23+s.phase*7,4);s.flick.value=a>.15-i*.04?o>-.2?1:.15:o>.55?.9:.04}this.state.built=r,Br.uPower.value=this.director.power(e,t),$x(this,e)}}const jx={diagram(n,t,e,i){const r=ss(i.station||"Camden Town",i.dir||"south");i.corrupt&&ia(r,i.corrupt,new Re(i.seed||1)),Pl(n,t,e,r,{station:i.station,dir:i.dir||"south"})},roundel(n,t,e,i){ma(n,t,e,i.name||"Camden Town",i)},strip(n,t,e,i){ku(n,t,e,{current:i.station||"Mornington Crescent",ghosts:i.ghosts?Cl:[]})},psign(n,t,e,i){zu(n,t,e,i)}};function Zx(n,t,e,i={}){const r=An(t,e);return jx[n](r.getContext("2d"),t,e,i),r.toDataURL("image/png")}function Kx(n,t){const e=t.player,i=t.world,r=(s,a,o,l,c=0)=>{const[h,u,f]=hr(s,a,c,o);return i.current=s,i.refresh(!0),e.spawn(h,u,f,s.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(s=0,a=0,o=!1){t.input.kmx=s,t.input.kmz=a,t.input.krun=!!o},look(s=0,a=0){e.yaw+=s,e.pitch+=a},face(s,a=0){e.yaw=s,e.pitch=a},tp(s,a,o){e.pos.x=s,e.pos.y=a,e.pos.z=o,e.eyeY=a+1.62},advance(s=1,a=0){let o=i.current;for(let l=0;l<s;l++){const c=o.exits[Math.min(a,o.exits.length-1)];if(!c||(c.child||i.expand(o,o.exits.indexOf(c)),!c.child))break;o=c.child}return r(o,0,.6,0)},seek(s,a=60,o=0){let l=i.current;for(let c=0;c<a;c++){const h=l.exits[Math.min(o,l.exits.length-1)];if(!h||(h.child||i.expand(l,l.exits.indexOf(h)),!h.child))return null;if(l=h.child,i.current=l,i.refresh(!0),l.def.type===s)return r(l,0,.6,0)}return null},at(s,a,o=0,l=0){return r(i.current,s,a,o,l)},folds(){return[...i.nodes.values()].filter(s=>s.hiddenByFold).length},items(){const s=i.current;return s.built?s.built.items.map(a=>({label:a.label,x:a.x,y:a.y,z:a.z})):[]},info(){const s=i.current;return{type:s.def.type,id:s.id,yaw:+s.yaw.toFixed(2),pos:[s.pos.x,s.pos.y,s.pos.z].map(a=>+a.toFixed(1)),exits:s.exits.length,nodes:i.nodes.size,station:s.env.station,idx:s.env.idx,plan:s.env.stretch?s.env.stretch.plan.join(","):"",items:s.built?s.built.items.map(a=>a.label||a.title||"?"):[]}},voidPixels(s=!1){const a=t.renderer,o=a.gl,l=o.getClearColor(new jt);o.setClearColor(16711935,1),o.setRenderTarget(a.target),o.render(t.scene,t.camera);const c=new Uint8Array(a.iw*a.ih*4);o.readRenderTargetPixels(a.target,0,0,a.iw,a.ih,c),o.setRenderTarget(null),o.setClearColor(l,1);let h=0;const u=[];for(let f=0;f<c.length;f+=4)if(c[f]>180&&c[f+1]<90&&c[f+2]>180&&(h++,s&&u.length<400)){const m=f/4%a.iw,g=Math.floor(f/4/a.iw),_=new q((m+.5)/a.iw*2-1,(g+.5)/a.ih*2-1,.5).unproject(t.camera),d=t.camera.position,p=s.y!==void 0?(s.y-d.y)/(_.y-d.y):((s.z??0)-d.z)/(_.z-d.z);u.push([d.x+(_.x-d.x)*p,d.y+(_.y-d.y)*p,d.z+(_.z-d.z)*p].map(y=>+y.toFixed(3)).concat([m,g,c[f],c[f+1],c[f+2]]))}return s?{n:h,hits:u}:h},pick(s,a){const o=t.renderer,l=new g_;return l.setFromCamera(new Zt((s+.5)/o.iw*2-1,(a+.5)/o.ih*2-1),t.camera),l.intersectObjects(t.scene.children,!0).slice(0,3).map(h=>{const u=[...i.nodes.values()].find(_=>_.built&&_.built.group===h.object.parent),[f,m]=u?ga(u,h.point.x,h.point.z):[h.point.x,h.point.z],g={x:f,y:h.point.y-(u?u.pos.y:0),z:m};return{layer:h.object.name,node:u?u.def.type:"?",d:+h.distance.toFixed(3),local:[g.x,g.y,g.z].map(_=>+_.toFixed(3)),uv:h.uv?[+h.uv.x.toFixed(4),+h.uv.y.toFixed(4)]:null,face:h.faceIndex}})},buildAll(s=12){const a=[$t.ahead,$t.sight];return $t.ahead=s,$t.sight=1e6,i.refresh(!0),[$t.ahead,$t.sight]=a,[...i.nodes.values()].filter(o=>o.built).map(o=>o.def.type)},scanVoid(s=8,a=[-.5,0,.45]){const o=t.camera,l=o.far;o.far=600,o.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{}};for(const h of i.nodes.values())if(h.built)for(const u of h.built.cells)for(const f of[.25,.75]){const[m,g,_]=hr(h,u.ax+(u.bx-u.ax)*f,u.ya+(u.yb-u.ya)*f,u.az+(u.bz-u.az)*f);for(let d=0;d<s;d++)for(const p of a){const y=d/s*Math.PI*2+.11;o.position.set(m+.0137,g+1.6071,_-.0093),o.rotation.set(p+.013,y,.007),o.updateMatrixWorld(!0);const v=n.debug.voidPixels();c.views++,c.total+=v,v&&(c.byType[h.def.type]=(c.byType[h.def.type]||0)+v),v&&(!c.worst||v>c.worst.n)&&(c.worst={n:v,type:h.def.type,id:h.id,cam:[o.position.x,o.position.y,o.position.z,o.rotation.x,o.rotation.y,o.rotation.z]})}}return o.far=l,o.updateProjectionMatrix(),c},preview:Zx,train(s=2){return t.trains.soon(s),t.trains.schedule()},fuzz(s=6,a=12,o=1){const l={takes:0,planned:-i.stats.planned,forced:0,folds:0,overflow:0,mismatch:0,exits:0};i.stats.deadEnds=0,i.stats.forced.length=0;for(let c=o;c<o+s;c++){t.reset(c);let h=c*7919,u=0;for(let f=0;f<a;f++){h=h*1103515245+12345&2147483647;const m=c%5===0?!1:(h>>8)%3!==0,g=n.debug.take(m);if(!g){l.exits++;break}l.takes++,u=m?u+1:Math.max(0,u-2),(i.current.env.stretch.index!==u||g.progress!==Math.min(u,$t.goal))&&l.mismatch++,n.debug.buildAll(5),l.folds=Math.max(l.folds,n.debug.folds());for(const d of i.nodes.values())d.built&&d.built.sheetOverflow&&l.overflow++}}return l.planned+=i.stats.planned,l.forced=i.stats.deadEnds,l.clashes=i.stats.forced.slice(0,3),l.errors=t.state.errors,t.reset(o),l},plan(s,a=7,o=0,l=0){return t.reset(a,s,o,l),n.debug.info()},take(s=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const a=i.current,o=s?a.p.correct:1-a.p.correct,l=a.p.kind;a.exits[o].child||i.expand(a,o);const c=a.exits[o].child;i.current=c,i.refresh(!0);const[h,u,f]=hr(c,0,0,4.2);return e.spawn(h,u,f,c.yaw),t.director.commit(c),{kind:l,exit:o,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(s,a){t.story.forceKind=s||null,t.story.forceLevel=a},branch(s){t.story.testBranch=s||null},setProgress(s){t.story.progress=s,t.state.progress=s},setWrong(s){t.story.wrong=s,t.state.wrong=s},say(s,a="rise"){t.director.announcer.say({text:s,chime:a})},glitch(s=1){t.director.events.glitch(s)},use(){return t.director.scan(),t.director.use(!0),t.state.reading},freeze(s=!0){t.frozen=s},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const Nn=S_(),kn={ready:!1,state:{started:!1,ready:!1},start(){qu=!0}};let qu=!1;window.__game=kn;async function Jx(){Nn.setLoading(!0),await x_(),Nn.drawMarks();let n;try{n=new Yx(document.getElementById("view"),Nn)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}kn.game=n,kn.state=n.state,kn.start=()=>n.start(),kn.pause=()=>n.pause(),kn.resume=()=>n.resume(),kn.reset=t=>n.reset(t),Kx(kn,n),n.state.ready=!0,kn.ready=!0,Nn.onStart(()=>n.start()),Nn.onResume(()=>n.resume()),Nn.onAgain(()=>n.start()),Nn.onVoice(t=>n.audio.setVoiceEnabled(t)),Nn.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),Nn.setLoading(!1),qu&&n.start()}Jx();
