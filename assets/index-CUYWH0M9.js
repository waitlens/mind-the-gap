(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ll="170",qh=0,Hl=1,$h=2,Au=1,Yh=2,Fn=3,$n=0,He=1,Sn=2,hi=0,sr=1,Gl=2,Vl=3,Wl=4,jh=5,wi=100,Zh=101,Kh=102,Jh=103,Qh=104,tf=200,ef=201,nf=202,rf=203,so=204,ao=205,sf=206,af=207,of=208,lf=209,cf=210,uf=211,hf=212,ff=213,df=214,oo=0,lo=1,co=2,dr=3,uo=4,ho=5,fo=6,po=7,Ru=0,pf=1,mf=2,fi=0,gf=1,_f=2,vf=3,xf=4,yf=5,Mf=6,Sf=7,Cu=300,pr=301,mr=302,mo=303,go=304,ra=306,Wr=1e3,Gn=1001,_o=1002,dn=1003,bf=1004,as=1005,Ae=1006,_a=1007,ci=1008,Yn=1009,Pu=1010,Lu=1011,Xr=1012,cl=1013,Di=1014,Vn=1015,Jr=1016,ul=1017,hl=1018,gr=1020,Du=35902,Iu=1021,Uu=1022,fn=1023,Nu=1024,Fu=1025,ar=1026,_r=1027,Ou=1028,fl=1029,ku=1030,dl=1031,pl=1033,Bs=33776,Hs=33777,Gs=33778,Vs=33779,vo=35840,xo=35841,yo=35842,Mo=35843,So=36196,bo=37492,Eo=37496,To=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Lo=37814,Do=37815,Io=37816,Uo=37817,No=37818,Fo=37819,Oo=37820,ko=37821,Ws=36492,zo=36494,Bo=36495,zu=36283,Ho=36284,Go=36285,Vo=36286,Ef=3200,Tf=3201,wf=0,Af=1,Xe="",Qe="srgb",Ni="srgb-linear",sa="linear",ee="srgb",ki=7680,Xl=519,Rf=512,Cf=513,Pf=514,Bu=515,Lf=516,Df=517,If=518,Uf=519,ql=35044,$l="300 es",Wn=2e3,Ys=2001;class Mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,Wo=180/Math.PI;function Qr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function Nf(n,t){return(n%t+t)%t}function xa(n,t,e){return(1-e)*n+e*t}function Tr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,i,r,s,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=r[0],d=r[3],p=r[6],y=r[1],v=r[4],x=r[7],C=r[2],E=r[5],T=r[8];return s[0]=a*_+o*y+l*C,s[3]=a*d+o*v+l*E,s[6]=a*p+o*x+l*T,s[1]=c*_+u*y+h*C,s[4]=c*d+u*v+h*E,s[7]=c*p+u*x+h*T,s[2]=f*_+m*y+g*C,s[5]=f*d+m*v+g*E,s[8]=f*p+m*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=e*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new It;function Hu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ff(){const n=js("canvas");return n.style.display="block",n}const Yl={};function Fr(n){n in Yl||(Yl[n]=!0,console.warn(n))}function Of(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function kf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xe?sa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jl=[.64,.33,.3,.6,.15,.06],Zl=[.2126,.7152,.0722],Kl=[.3127,.329],Jl=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ni]:{primaries:jl,whitePoint:Kl,transfer:sa,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:Zl,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:jl,whitePoint:Kl,transfer:ee,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:Zl,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let zi;class Bf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=js("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class Gu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ma(r[a].image)):s.push(Ma(r[a]))}else s=Ma(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;class Ne extends Mr{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Gn,r=Gn,s=Ae,a=ci,o=fn,l=Yn,c=Ne.DEFAULT_ANISOTROPY,u=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Qr(),this.name="",this.source=new Gu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Cu;Ne.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(m+1)/2,C=(p+1)/2,E=(u+f)/4,T=(h+_)/4,P=(g+d)/4;return v>x&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=T/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,e),this}let y=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Mr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ae,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ne(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Vf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Vu extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends Ne{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let d=1-o;const p=l*f+c*m+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,p*y);d=Math.sin(d*E)/C,o=Math.sin(o*E)/C}const x=o*y;if(l=l*d+f*x,c=c*d+m*x,u=u*d+g*x,h=h*d+_*x,d===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-o*m,t[e+2]=c*g+u*m+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new W,tc=new ts;class es{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),ls.subVectors(this.max,wr),Bi.subVectors(t.a,wr),Hi.subVectors(t.b,wr),Gi.subVectors(t.c,wr),ti.subVectors(Hi,Bi),ei.subVectors(Gi,Hi),_i.subVectors(Bi,Gi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-_i.z,_i.y,ti.z,0,-ti.x,ei.z,0,-ei.x,_i.z,0,-_i.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-_i.y,_i.x,0];return!ba(e,Bi,Hi,Gi,ls)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Bi,Hi,Gi,ls))?!1:(cs.crossVectors(ti,ei),e=[cs.x,cs.y,cs.z],ba(e,Bi,Hi,Gi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new W,new W,new W,new W,new W,new W,new W,new W],an=new W,os=new es,Bi=new W,Hi=new W,Gi=new W,ti=new W,ei=new W,_i=new W,wr=new W,ls=new W,cs=new W,vi=new W;function ba(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xf=new es,Ar=new W,Ea=new W;class ml{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(Ea)),this.expandByPoint(Ar.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new W,Ta=new W,us=new W,ni=new W,wa=new W,hs=new W,Aa=new W;class Wu{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ta.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(Ta);const s=t.distanceTo(e)*.5,a=-this.direction.dot(us),o=ni.dot(this.direction),l=-ni.dot(us),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ta).addScaledVector(us,f),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,r,s){wa.subVectors(e,t),hs.subVectors(i,t),Aa.crossVectors(wa,hs);let a=this.direction.dot(Aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,t);const l=o*this.direction.dot(hs.crossVectors(ni,hs));if(l<0)return null;const c=o*this.direction.dot(wa.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(Aa);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d)}set(t,e,i,r,s,a,o,l,c,u,h,f,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,$f)}lookAt(t,e,i){const r=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),ii.crossVectors(i,Ve),ii.lengthSq()===0&&(Math.abs(i.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),ii.crossVectors(i,Ve)),ii.normalize(),fs.crossVectors(Ve,ii),r[0]=ii.x,r[4]=fs.x,r[8]=Ve.x,r[1]=ii.y,r[5]=fs.y,r[9]=Ve.y,r[2]=ii.z,r[6]=fs.z,r[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],d=i[10],p=i[14],y=i[3],v=i[7],x=i[11],C=i[15],E=r[0],T=r[4],P=r[8],S=r[12],M=r[1],A=r[5],U=r[9],L=r[13],D=r[2],F=r[6],X=r[10],Z=r[14],q=r[3],z=r[7],$=r[11],J=r[15];return s[0]=a*E+o*M+l*D+c*q,s[4]=a*T+o*A+l*F+c*z,s[8]=a*P+o*U+l*X+c*$,s[12]=a*S+o*L+l*Z+c*J,s[1]=u*E+h*M+f*D+m*q,s[5]=u*T+h*A+f*F+m*z,s[9]=u*P+h*U+f*X+m*$,s[13]=u*S+h*L+f*Z+m*J,s[2]=g*E+_*M+d*D+p*q,s[6]=g*T+_*A+d*F+p*z,s[10]=g*P+_*U+d*X+p*$,s[14]=g*S+_*L+d*Z+p*J,s[3]=y*E+v*M+x*D+C*q,s[7]=y*T+v*A+x*F+C*z,s[11]=y*P+v*U+x*X+C*$,s[15]=y*S+v*L+x*Z+C*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+_*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+d*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+p*(-r*o*u-e*l*h+e*o*f+r*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],y=h*d*c-_*f*c+_*l*m-o*d*m-h*l*p+o*f*p,v=g*f*c-u*d*c-g*l*m+a*d*m+u*l*p-a*f*p,x=u*_*c-g*h*c+g*o*m-a*_*m-u*o*p+a*h*p,C=g*h*l-u*_*l-g*o*f+a*_*f+u*o*d-a*h*d,E=e*y+i*v+r*x+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=y*T,t[1]=(_*f*s-h*d*s-_*r*m+i*d*m+h*r*p-i*f*p)*T,t[2]=(o*d*s-_*l*s+_*r*c-i*d*c-o*r*p+i*l*p)*T,t[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*T,t[4]=v*T,t[5]=(u*d*s-g*f*s+g*r*m-e*d*m-u*r*p+e*f*p)*T,t[6]=(g*l*s-a*d*s-g*r*c+e*d*c+a*r*p-e*l*p)*T,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*m+e*l*m)*T,t[8]=x*T,t[9]=(g*h*s-u*_*s-g*i*m+e*_*m+u*i*p-e*h*p)*T,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*p+e*o*p)*T,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*T,t[12]=C*T,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*d+e*h*d)*T,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*d-e*o*d)*T,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*f+e*o*f)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,d=a*h,p=o*h,y=l*c,v=l*u,x=l*h,C=i.x,E=i.y,T=i.z;return r[0]=(1-(_+p))*C,r[1]=(m+x)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(m-x)*E,r[5]=(1-(f+p))*E,r[6]=(d+y)*E,r[7]=0,r[8]=(g+v)*T,r[9]=(d-y)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Vi.set(r[0],r[1],r[2]).length();const a=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],on.copy(this);const c=1/s,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Wn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let m,g;if(o===Wn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ys)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Wn){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),f=(e+t)*c,m=(i+r)*u;let g,_;if(o===Wn)g=(a+s)*h,_=-2*h;else if(o===Ys)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Vi=new W,on=new he,qf=new W(0,0,0),$f=new W(1,1,1),ii=new W,fs=new W,Ve=new W,ec=new he,nc=new ts;class jn{constructor(t=0,e=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yf=0;const ic=new W,Wi=new ts,Dn=new he,ds=new W,Rr=new W,jf=new W,Zf=new ts,rc=new W(1,0,0),sc=new W(0,1,0),ac=new W(0,0,1),oc={type:"added"},Kf={type:"removed"},Xi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class qe extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new W,e=new jn,i=new ts,r=new W(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new he},normalMatrix:{value:new It}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ds.copy(t):ds.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Rr,ds,this.up):Dn.lookAt(ds,Rr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}qe.DEFAULT_UP=new W(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new W,In=new W,Ca=new W,Un=new W,qi=new W,$i=new W,lc=new W,Pa=new W,La=new W,Da=new W,Ia=new me,Ua=new me,Na=new me;class un{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ln.subVectors(r,e),In.subVectors(i,e),Ca.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(In),l=ln.dot(Ca),c=In.dot(In),u=In.dot(Ca),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,i),Na.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ia,s.x),a.addScaledVector(Ua,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),In.subVectors(t,e),ln.cross(In).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,i),$i.subVectors(s,i),Pa.subVectors(t,i);const l=qi.dot(Pa),c=$i.dot(Pa);if(l<=0&&c<=0)return e.copy(i);La.subVectors(t,r);const u=qi.dot(La),h=$i.dot(La);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(qi,a);Da.subVectors(t,s);const m=qi.dot(Da),g=$i.dot(Da);if(g>=0&&m<=g)return e.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector($i,o);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return lc.subVectors(s,r),o=(h-u)/(h-u+(m-g)),e.copy(r).addScaledVector(lc,o);const p=1/(d+_+f);return a=_*p,o=f*p,e.copy(i).addScaledVector(qi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Fa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=Nf(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Fa(a,s,t+1/3),this.g=Fa(a,s,t),this.b=Fa(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Qe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Be(Le.r*255,0,255))*65536+Math.round(Be(Le.g*255,0,255))*256+Math.round(Be(Le.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Le.copy(this),e);const i=Le.r,r=Le.g,s=Le.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Qe){qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,i=Le.g,r=Le.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(ps);const i=xa(ri.h,ps.h,e),r=xa(ri.s,ps.s,e),s=xa(ri.l,ps.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new jt;jt.NAMES=Xu;let Jf=0;class aa extends Mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Qr(),this.name="",this.blending=sr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ao,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==so&&(i.blendSrc=this.blendSrc),this.blendDst!==ao&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qu extends aa{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new W,ms=new Zt;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class $u extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yu extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Li extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Qf=0;const Ze=new he,Oa=new qe,Yi=new W,We=new es,Cr=new es,we=new W;class Kn extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?Yu:$u)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,i){return Ze.makeTranslation(t,e,i),this.applyMatrix4(Ze),this}scale(t,e,i){return Ze.makeScale(t,e,i),this.applyMatrix4(Ze),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Li(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];We.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(We.min,Cr.min),We.expandByPoint(we),we.addVectors(We.max,Cr.max),We.expandByPoint(we)):(We.expandByPoint(Cr.min),We.expandByPoint(Cr.max))}We.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),we.add(Yi)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new W,l[P]=new W;const c=new W,u=new W,h=new W,f=new Zt,m=new Zt,g=new Zt,_=new W,d=new W;function p(P,S,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(A),d.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(A),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(d),l[S].add(d),l[M].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const M=y[P],A=M.start,U=M.count;for(let L=A,D=A+U;L<D;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new W,x=new W,C=new W,E=new W;function T(P){C.fromBufferAttribute(r,P),E.copy(C);const S=o[P];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(E,S);const A=x.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,A)}for(let P=0,S=y.length;P<S;++P){const M=y[P],A=M.start,U=M.count;for(let L=A,D=A+U;L<D;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[m++]}return new De(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new he,xi=new Wu,gs=new ml,uc=new W,_s=new W,vs=new W,xs=new W,ka=new W,ys=new W,hc=new W,Ms=new W;class en extends qe{constructor(t=new Kn,e=new qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ka.fromBufferAttribute(h,t),a?ys.addScaledVector(ka,u):ys.addScaledVector(ka.sub(e),u))}e.add(ys)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere),gs.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(gs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(gs,uc)===null||xi.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(cc.copy(s).invert(),xi.copy(t.ray).applyMatrix4(cc),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,C=v;x<C;x+=3){const E=o.getX(x),T=o.getX(x+1),P=o.getX(x+2);r=Ss(this,p,t,i,c,u,h,E,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=o.getX(d),v=o.getX(d+1),x=o.getX(d+2);r=Ss(this,a,t,i,c,u,h,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let x=y,C=v;x<C;x+=3){const E=x,T=x+1,P=x+2;r=Ss(this,p,t,i,c,u,h,E,T,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const y=d,v=d+1,x=d+2;r=Ss(this,a,t,i,c,u,h,y,v,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function td(n,t,e,i,r,s,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===$n,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:n}}function Ss(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,_s),n.getVertexPosition(l,vs),n.getVertexPosition(c,xs);const u=td(n,t,e,i,_s,vs,xs,hc);if(u){const h=new W;un.getBarycoord(hc,_s,vs,xs,h),r&&(u.uv=un.getInterpolatedAttribute(r,o,l,c,h,new Zt)),s&&(u.uv1=un.getInterpolatedAttribute(s,o,l,c,h,new Zt)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};un.getNormal(_s,vs,xs,f.normal),u.face=f,u.barycoord=h}return u}class ns extends Kn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(u,3)),this.setAttribute("uv",new Li(h,2));function g(_,d,p,y,v,x,C,E,T,P,S){const M=x/T,A=C/P,U=x/2,L=C/2,D=E/2,F=T+1,X=P+1;let Z=0,q=0;const z=new W;for(let $=0;$<X;$++){const J=$*A-L;for(let Y=0;Y<F;Y++){const rt=Y*M-U;z[_]=rt*y,z[d]=J*v,z[p]=D,c.push(z.x,z.y,z.z),z[_]=0,z[d]=0,z[p]=E>0?1:-1,u.push(z.x,z.y,z.z),h.push(Y/T),h.push(1-$/P),Z+=1}}for(let $=0;$<P;$++)for(let J=0;J<T;J++){const Y=f+J+F*$,rt=f+J+F*($+1),B=f+(J+1)+F*($+1),K=f+(J+1)+F*$;l.push(Y,rt,K),l.push(rt,B,K),q+=6}o.addGroup(m,q,S),m+=q,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ie(n){const t={};for(let e=0;e<n.length;e++){const i=vr(n[e]);for(const r in i)t[r]=i[r]}return t}function ed(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ju(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const nd={clone:vr,merge:Ie};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends aa{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Zu extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new W,fc=new Zt,dc=new Zt;class tn extends Zu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,fc,dc),e.subVectors(dc,fc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(va*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Zi=1;class sd extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(ji,Zi,t,e);r.layers=this.layers,this.add(r);const s=new tn(ji,Zi,t,e);s.layers=this.layers,this.add(s);const a=new tn(ji,Zi,t,e);a.layers=this.layers,this.add(a);const o=new tn(ji,Zi,t,e);o.layers=this.layers,this.add(o);const l=new tn(ji,Zi,t,e);l.layers=this.layers,this.add(l);const c=new tn(ji,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ku extends Ne{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:pr,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ku(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ns(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:hi});s.uniforms.tEquirect.value=e;const a=new en(r,s),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Ae),new sd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const za=new W,od=new W,ld=new It;class Ei{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=za.subVectors(i,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ld.getNormalMatrix(t),r=this.coplanarPoint(za).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ml,bs=new W;class Ju{constructor(t=new Ei,e=new Ei,i=new Ei,r=new Ei,s=new Ei,a=new Ei){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,d-m,x-p).normalize(),i[1].setComponents(l+s,f+c,d+m,x+p).normalize(),i[2].setComponents(l+a,f+u,d+g,x+y).normalize(),i[3].setComponents(l-a,f-u,d-g,x-y).normalize(),i[4].setComponents(l-o,f-h,d-_,x-v).normalize(),e===Wn)i[5].setComponents(l+o,f+h,d+_,x+v).normalize();else if(e===Ys)i[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(bs.x=r.normal.x>0?t.max.x:t.min.x,bs.y=r.normal.y>0?t.max.y:t.min.y,bs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function cd(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class oa extends Kn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<u;p++){const y=p*f-a;for(let v=0;v<c;v++){const x=v*h-s;g.push(x,-y,0),_.push(0,0,1),d.push(v/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const v=y+c*p,x=y+c*(p+1),C=y+1+c*(p+1),E=y+1+c*p;m.push(v,x,E),m.push(x,C,E)}this.setIndex(m),this.setAttribute("position",new Li(g,3)),this.setAttribute("normal",new Li(_,3)),this.setAttribute("uv",new Li(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.widthSegments,t.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
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
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
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
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,F0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:ud,alphahash_pars_fragment:hd,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:kd,emissivemap_pars_fragment:zd,colorspace_fragment:Bd,colorspace_pars_fragment:Hd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:$d,fog_pars_vertex:Yd,fog_fragment:jd,fog_pars_fragment:Zd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:rp,lights_phong_fragment:sp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:up,lights_fragment_end:hp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:kp,premultiplied_alpha_fragment:zp,project_vertex:Bp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:$p,shadowmask_pars_fragment:Yp,skinbase_vertex:jp,skinning_pars_vertex:Zp,skinning_vertex:Kp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:u0,backgroundCube_vert:h0,backgroundCube_frag:f0,cube_vert:d0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:v0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:b0,meshbasic_frag:E0,meshlambert_vert:T0,meshlambert_frag:w0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:I0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:O0,points_frag:k0,shadow_vert:z0,shadow_frag:B0,sprite_vert:H0,sprite_frag:G0},lt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Mn={basic:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ie([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ie([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ie([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ie([lt.points,lt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ie([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ie([lt.common,lt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ie([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ie([lt.sprite,lt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ie([lt.common,lt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ie([lt.lights,lt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Mn.physical={uniforms:Ie([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Es={r:0,b:0,g:0},Mi=new jn,V0=new he;function W0(n,t,e,i,r,s,a){const o=new jt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const x=g(y);x===null?p(o,l):x&&x.isColor&&(p(x,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===ra)?(u===void 0&&(u=new en(new ns(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:vr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Mi)),u.material.toneMapped=qt.getTransfer(x.colorSpace)!==ee,(h!==x||f!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new en(new oa(2,2),new wn({name:"BackgroundMaterial",uniforms:vr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Es,ju(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:d}}function X0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(M,A,U,L,D){let F=!1;const X=h(L,U,A);s!==X&&(s=X,c(s.object)),F=m(M,L,U,D),F&&g(M,L,U,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,x(M,A,U,L),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,A,U){const L=U.wireframe===!0;let D=i[M.id];D===void 0&&(D={},i[M.id]=D);let F=D[A.id];F===void 0&&(F={},D[A.id]=F);let X=F[L];return X===void 0&&(X=f(l()),F[L]=X),X}function f(M){const A=[],U=[],L=[];for(let D=0;D<e;D++)A[D]=0,U[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function m(M,A,U,L){const D=s.attributes,F=A.attributes;let X=0;const Z=U.getAttributes();for(const q in Z)if(Z[q].location>=0){const $=D[q];let J=F[q];if(J===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),$===void 0||$.attribute!==J||J&&$.data!==J.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function g(M,A,U,L){const D={},F=A.attributes;let X=0;const Z=U.getAttributes();for(const q in Z)if(Z[q].location>=0){let $=F[q];$===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const J={};J.attribute=$,$&&$.data&&(J.data=$.data),D[q]=J,X++}s.attributes=D,s.attributesNum=X,s.index=L}function _(){const M=s.newAttributes;for(let A=0,U=M.length;A<U;A++)M[A]=0}function d(M){p(M,0)}function p(M,A){const U=s.newAttributes,L=s.enabledAttributes,D=s.attributeDivisors;U[M]=1,L[M]===0&&(n.enableVertexAttribArray(M),L[M]=1),D[M]!==A&&(n.vertexAttribDivisor(M,A),D[M]=A)}function y(){const M=s.newAttributes,A=s.enabledAttributes;for(let U=0,L=A.length;U<L;U++)A[U]!==M[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function v(M,A,U,L,D,F,X){X===!0?n.vertexAttribIPointer(M,A,U,D,F):n.vertexAttribPointer(M,A,U,L,D,F)}function x(M,A,U,L){_();const D=L.attributes,F=U.getAttributes(),X=A.defaultAttributeValues;for(const Z in F){const q=F[Z];if(q.location>=0){let z=D[Z];if(z===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),z!==void 0){const $=z.normalized,J=z.itemSize,Y=t.get(z);if(Y===void 0)continue;const rt=Y.buffer,B=Y.type,K=Y.bytesPerElement,ct=B===n.INT||B===n.UNSIGNED_INT||z.gpuType===cl;if(z.isInterleavedBufferAttribute){const at=z.data,Et=at.stride,Ct=z.offset;if(at.isInstancedInterleavedBuffer){for(let Ut=0;Ut<q.locationSize;Ut++)p(q.location+Ut,at.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ut=0;Ut<q.locationSize;Ut++)d(q.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ut=0;Ut<q.locationSize;Ut++)v(q.location+Ut,J/q.locationSize,B,$,Et*K,(Ct+J/q.locationSize*Ut)*K,ct)}else{if(z.isInstancedBufferAttribute){for(let at=0;at<q.locationSize;at++)p(q.location+at,z.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let at=0;at<q.locationSize;at++)d(q.location+at);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let at=0;at<q.locationSize;at++)v(q.location+at,J/q.locationSize,B,$,J*K,J/q.locationSize*at*K,ct)}}else if(X!==void 0){const $=X[Z];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(q.location,$);break;case 3:n.vertexAttrib3fv(q.location,$);break;case 4:n.vertexAttrib4fv(q.location,$);break;default:n.vertexAttrib1fv(q.location,$)}}}}y()}function C(){P();for(const M in i){const A=i[M];for(const U in A){const L=A[U];for(const D in L)u(L[D].object),delete L[D];delete A[U]}delete i[M]}}function E(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const U in A){const L=A[U];for(const D in L)u(L[D].object),delete L[D];delete A[U]}delete i[M.id]}function T(M){for(const A in i){const U=i[A];if(U[M.id]===void 0)continue;const L=U[M.id];for(const D in L)u(L[D].object),delete L[D];delete U[M.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function q0(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==fn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vn&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:E}}function Y0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ei,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const y=s?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=u(g,f,v,m);for(let C=0;C!==v;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let v=0,x=m;v!==_;++v,x+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(d,x),d[x+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function j0(n){let t=new WeakMap;function e(a,o){return o===mo?a.mapping=pr:o===go&&(a.mapping=mr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===go)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ad(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class th extends Zu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,pc=[.125,.215,.35,.446,.526,.582],Ai=20,Ba=new th,mc=new jt;let Ha=null,Ga=0,Va=0,Wa=!1;const Ti=(1+Math.sqrt(5))/2,Ki=1/Ti,gc=[new W(-Ti,Ki,0),new W(Ti,Ki,0),new W(-Ki,0,Ti),new W(Ki,0,Ti),new W(0,Ti,-Ki),new W(0,Ti,Ki),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ae,minFilter:Ae,generateMipmaps:!1,type:Jr,format:fn,colorSpace:Ni,depthBuffer:!1},r=vc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(s)),this._blurMaterial=K0(s,t,e)}return r}_compileMaterial(t){const e=new en(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,i,r){const o=new tn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mc),u.toneMapping=fi,u.autoClear=!1;const m=new qu({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new en(new ns,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(mc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Ts(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===pr||t.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ts(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ba)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gc[(r-s-1)%gc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),_=s/g,d=isFinite(s)?1+Math.floor(u*_):Ai;d>Ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ai}`);const p=[];let y=0;for(let T=0;T<Ai;++T){const P=T/_,S=Math.exp(-P*P/2);p.push(S),T===0?y+=S:T<d&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const x=this._sizeLods[r],C=3*x*(r>v-nr?r-v+nr:0),E=4*(this._cubeSize-x);Ts(e,C,E,3*x,2*x),l.setRenderTarget(e),l.render(h,Ba)}}function Z0(n){const t=[],e=[],i=[];let r=n;const s=n-nr+1+pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-nr?l=pc[a-n+nr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,d=2,p=1,y=new Float32Array(_*g*m),v=new Float32Array(d*g*m),x=new Float32Array(p*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,P=E>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(S,_*g*E),v.set(f,d*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const C=new Kn;C.setAttribute("position",new De(y,_)),C.setAttribute("uv",new De(v,d)),C.setAttribute("faceIndex",new De(x,p)),t.push(C),r>nr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vc(n,t,e){const i=new pi(n,t,e);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function K0(n,t,e){const i=new Float32Array(Ai),r=new W(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_l(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function xc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_l(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function yc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function _l(){return`

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
	`}function J0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===go,u=l===pr||l===mr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new _c(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new _c(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Q0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tm(n,t,e,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,p=_.length;d<p;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let d=0,p=_.length;d<p;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,x=y.length;v<x;v+=3){const C=y[v+0],E=y[v+1],T=y[v+2];f.push(C,E,E,T,T,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const C=v+0,E=v+1,T=v+2;f.push(C,E,E,T,T,C)}}else return;const d=new(Hu(f)?Yu:$u)(f,1);d.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function em(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,f*a,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,i,1)}function h(f,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y]*_[y];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function im(n,t,e){const i=new WeakMap,r=new me;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let C=o.attributes.position.count*x,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*E*4*h),P=new Vu(T,C,E,h);P.type=Vn,P.needsUpdate=!0;const S=x*4;for(let A=0;A<h;A++){const U=p[A],L=y[A],D=v[A],F=C*E*4*A;for(let X=0;X<U.count;X++){const Z=X*S;g===!0&&(r.fromBufferAttribute(U,X),T[F+Z+0]=r.x,T[F+Z+1]=r.y,T[F+Z+2]=r.z,T[F+Z+3]=0),_===!0&&(r.fromBufferAttribute(L,X),T[F+Z+4]=r.x,T[F+Z+5]=r.y,T[F+Z+6]=r.z,T[F+Z+7]=0),d===!0&&(r.fromBufferAttribute(D,X),T[F+Z+8]=r.x,T[F+Z+9]=r.y,T[F+Z+10]=r.z,T[F+Z+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Zt(C,E)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function rm(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class eh extends Ne{constructor(t,e,i,r,s,a,o,l,c,u=ar){if(u!==ar&&u!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Di),i===void 0&&u===_r&&(i=gr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nh=new Ne,Mc=new eh(1,1),ih=new Vu,rh=new Wf,sh=new Ku,Sc=[],bc=[],Ec=new Float32Array(16),Tc=new Float32Array(9),wc=new Float32Array(4);function Sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Sc[r];if(s===void 0&&(s=new Float32Array(r),Sc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function la(n,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function om(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function cm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),Te(e,i)}}function um(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Tc.set(i),n.uniformMatrix3fv(this.addr,!1,Tc),Te(e,i)}}function hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;Ec.set(i),n.uniformMatrix4fv(this.addr,!1,Ec),Te(e,i)}}function fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function gm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function vm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function ym(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mc.compareFunction=Bu,s=Mc):s=nh,e.setTexture2D(t||s,r)}function Mm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||rh,r)}function Sm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||sh,r)}function bm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ih,r)}function Em(n){switch(n){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return bm}}function Tm(n,t){n.uniform1fv(this.addr,t)}function wm(n,t){const e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function Am(n,t){const e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function Rm(n,t){const e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function Cm(n,t){const e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Pm(n,t){const e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Lm(n,t){const e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dm(n,t){n.uniform1iv(this.addr,t)}function Im(n,t){n.uniform2iv(this.addr,t)}function Um(n,t){n.uniform3iv(this.addr,t)}function Nm(n,t){n.uniform4iv(this.addr,t)}function Fm(n,t){n.uniform1uiv(this.addr,t)}function Om(n,t){n.uniform2uiv(this.addr,t)}function km(n,t){n.uniform3uiv(this.addr,t)}function zm(n,t){n.uniform4uiv(this.addr,t)}function Bm(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||nh,s[a])}function Hm(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||rh,s[a])}function Gm(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||sh,s[a])}function Vm(n,t,e){const i=this.cache,r=t.length,s=la(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ih,s[a])}function Wm(n){switch(n){case 5126:return Tm;case 35664:return wm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return km;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Xm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class $m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Ac(n,t){n.seq.push(t),n.map[t.id]=t}function Ym(n,t,e){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),a=Xa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ac(e,c===void 0?new Xm(o,n,t):new qm(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new $m(o),Ac(e,h)),e=h}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Ym(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Rc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jm=37297;let Zm=0;function Km(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Cc=new It;function Jm(n){qt._getMatrix(Cc,qt.workingColorSpace,n);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case sa:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Km(n.getShaderSource(t),a)}else return r}function Qm(n,t){const e=Jm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tg(n,t){let e;switch(t){case gf:e="Linear";break;case _f:e="Reinhard";break;case vf:e="Cineon";break;case xf:e="ACESFilmic";break;case Mf:e="AgX";break;case Sf:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new W;function eg(){qt.getLuminanceCoefficients(ws);const n=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function ig(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Or(n){return n!==""}function Lc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(n){return n.replace(sg,og)}const ag=new Map;function og(n,t){let e=kt[t];if(e===void 0){const i=ag.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(n){return n.replace(lg,cg)}function cg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ug(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Au?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mr:t="ENVMAP_MODE_REFRACTION";break}return t}function dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ru:t="ENVMAP_BLENDING_MULTIPLY";break;case pf:t="ENVMAP_BLENDING_MIX";break;case mf:t="ENVMAP_BLENDING_ADD";break}return t}function pg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mg(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ug(e),c=hg(e),u=fg(e),h=dg(e),f=pg(e),m=ng(e),g=ig(s),_=r.createProgram();let d,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(d=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?kt.tonemapping_pars_fragment:"",e.toneMapping!==fi?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),a=Xo(a),a=Lc(a,e),a=Dc(a,e),o=Xo(o),o=Lc(o,e),o=Dc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+d+a,x=y+p+o,C=Rc(r,r.VERTEX_SHADER,v),E=Rc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,C),r.attachShader(_,E),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(C).trim(),D=r.getShaderInfoLog(E).trim();let F=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,E);else{const Z=Pc(r,C,"vertex"),q=Pc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+Z+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||D==="")&&(X=!1);X&&(A.diagnostics={runnable:F,programLog:U,vertexShader:{log:L,prefix:d},fragmentShader:{log:D,prefix:p}})}r.deleteShader(C),r.deleteShader(E),P=new Xs(r,_),S=rg(r,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,jm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let gg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vg(t),e.set(t,i)),i}}class vg{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}}function xg(n,t,e,i,r,s,a){const o=new gl,l=new _g,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,M,A,U,L){const D=U.fog,F=L.geometry,X=S.isMeshStandardMaterial?U.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),q=Z&&Z.mapping===ra?Z.image.height:null,z=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=$!==void 0?$.length:0;let Y=0;F.morphAttributes.position!==void 0&&(Y=1),F.morphAttributes.normal!==void 0&&(Y=2),F.morphAttributes.color!==void 0&&(Y=3);let rt,B,K,ct;if(z){const Qt=Mn[z];rt=Qt.vertexShader,B=Qt.fragmentShader}else rt=S.vertexShader,B=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);const at=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),Ct=L.isInstancedMesh===!0,Ut=L.isBatchedMesh===!0,se=!!S.map,Wt=!!S.matcap,ge=!!Z,k=!!S.aoMap,Ye=!!S.lightMap,Ht=!!S.bumpMap,Gt=!!S.normalMap,At=!!S.displacementMap,ae=!!S.emissiveMap,wt=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,H=S.clearcoat>0,tt=S.dispersion>0,it=S.iridescence>0,Q=S.sheen>0,St=S.transmission>0,ht=b&&!!S.anisotropyMap,gt=H&&!!S.clearcoatMap,Xt=H&&!!S.clearcoatNormalMap,st=H&&!!S.clearcoatRoughnessMap,_t=it&&!!S.iridescenceMap,Rt=it&&!!S.iridescenceThicknessMap,Pt=Q&&!!S.sheenColorMap,vt=Q&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Ot=!!S.specularColorMap,ie=!!S.specularIntensityMap,I=St&&!!S.transmissionMap,ut=St&&!!S.thicknessMap,j=!!S.gradientMap,et=!!S.alphaMap,pt=S.alphaTest>0,ft=!!S.alphaHash,Nt=!!S.extensions;let fe=fi;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Ce={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:B,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ut,batchingColor:Ut&&L._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&L.instanceColor!==null,instancingMorph:Ct&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ni,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:Wt,envMap:ge,envMapMode:ge&&Z.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:Ye,bumpMap:Ht,normalMap:Gt,displacementMap:f&&At,emissiveMap:ae,normalMapObjectSpace:Gt&&S.normalMapType===Af,normalMapTangentSpace:Gt&&S.normalMapType===wf,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:ht,clearcoat:H,clearcoatMap:gt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:st,dispersion:tt,iridescence:it,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:Q,sheenColorMap:Pt,sheenRoughnessMap:vt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ie,transmission:St,transmissionMap:I,thicknessMap:ut,gradientMap:j,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:ft,combine:S.combine,mapUv:se&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:Ye&&_(S.lightMap.channel),bumpMapUv:Ht&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:At&&_(S.displacementMap.channel),emissiveMapUv:ae&&_(S.emissiveMap.channel),metalnessMapUv:wt&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Vt&&_(S.specularMap.channel),specularColorMapUv:Ot&&_(S.specularColorMap.channel),specularIntensityMapUv:ie&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ut&&_(S.thicknessMap.channel),alphaMapUv:et&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Gt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(se||et),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const M=g[S.type];let A;if(M){const U=Mn[M];A=nd.clone(U.uniforms)}else A=S.uniforms;return A}function C(S,M){let A;for(let U=0,L=u.length;U<L;U++){const D=u[U];if(D.cacheKey===M){A=D,++A.usedTimes;break}}return A===void 0&&(A=new mg(n,M,S,s),u.push(A)),A}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:P}}function yg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Mg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Fc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,f,m,g,_,d){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),t++,p}function o(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,f,m,g,_,d){const p=a(h,f,m,g,_,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Mg),i.length>1&&i.sort(f||Nc),r.length>1&&r.sort(f||Nc)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Sg(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Fc,n.set(i,[a])):r>=s.length?(a=new Fc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function bg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new jt};break;case"SpotLight":e={position:new W,direction:new W,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[t.id]=e,e}}}function Eg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Tg=0;function wg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ag(n){const t=new bg,e=Eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new he,a=new he;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,y=0,v=0,x=0,C=0,E=0,T=0;c.sort(wg);for(let S=0,M=c.length;S<M;S++){const A=c[S],U=A.color,L=A.intensity,D=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*L,h+=U.g*L,f+=U.b*L;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],L);T++}else if(A.isDirectionalLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,q=e.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=A.shadow.matrix,y++}i.directional[m]=X,m++}else if(A.isSpotLight){const X=t.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(U).multiplyScalar(L),X.distance=D,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[_]=X;const Z=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,Z.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[_]=Z.matrix,A.castShadow){const q=e.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=F,x++}_++}else if(A.isRectAreaLight){const X=t.get(A);X.color.copy(U).multiplyScalar(L),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),i.rectArea[d]=X,d++}else if(A.isPointLight){const X=t.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){const Z=A.shadow,q=e.get(A);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=A.shadow.matrix,v++}i.point[g]=X,g++}else if(A.isHemisphereLight){const X=t.get(A);X.skyColor.copy(A.color).multiplyScalar(L),X.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[p]=X,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=T,i.version=Tg++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const d=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),h++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),m++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),a.identity(),s.copy(v.matrixWorld),s.premultiply(d),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:i}}function Oc(n){const t=new Ag(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Rg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Oc(n),t.set(r,[o])):s>=a.length?(o=new Oc(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Cg extends aa{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pg extends aa{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`;function Ig(n,t,e){let i=new Ju;const r=new Zt,s=new Zt,a=new me,o=new Cg({depthPacking:Tf}),l=new Pg,c={},u=e.maxTextureSize,h={[$n]:He,[He]:$n,[Sn]:Sn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let p=this.type;this.render=function(E,T,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),U=n.state;U.setBlending(hi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==Fn&&this.type===Fn,D=p===Fn&&this.type!==Fn;for(let F=0,X=E.length;F<X;F++){const Z=E[F],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const z=q.getFrameExtents();if(r.multiply(z),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,q.mapSize.y=s.y)),q.map===null||L===!0||D===!0){const J=this.type!==Fn?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new pi(r.x,r.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const $=q.getViewportCount();for(let J=0;J<$;J++){const Y=q.getViewport(J);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),U.viewport(a),q.updateMatrices(Z,J),i=q.getFrustum(),x(T,P,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Fn&&y(q,P),q.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(S,M,A)};function y(E,T){const P=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,P,m,_,null)}function v(E,T,P,S){let M=null;const A=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=M.uuid,L=T.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let F=D[L];F===void 0&&(F=M.clone(),D[L]=F,T.addEventListener("dispose",C)),M=F}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Fn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=P}return M}function x(E,T,P,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Fn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const L=t.update(E),D=E.material;if(Array.isArray(D)){const F=L.groups;for(let X=0,Z=F.length;X<Z;X++){const q=F[X],z=D[q.materialIndex];if(z&&z.visible){const $=v(E,z,S,M);E.onBeforeShadow(n,E,T,P,L,$,q),n.renderBufferDirect(P,null,L,$,E,q),E.onAfterShadow(n,E,T,P,L,$,q)}}}else if(D.visible){const F=v(E,D,S,M);E.onBeforeShadow(n,E,T,P,L,F,null),n.renderBufferDirect(P,null,L,F,E,null),E.onAfterShadow(n,E,T,P,L,F,null)}}const U=E.children;for(let L=0,D=U.length;L<D;L++)x(U[L],T,P,S,M)}function C(E){E.target.removeEventListener("dispose",C);for(const P in c){const S=c[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ug={[oo]:lo,[co]:fo,[uo]:po,[dr]:ho,[lo]:oo,[fo]:co,[po]:uo,[ho]:dr};function Ng(n,t){function e(){let I=!1;const ut=new me;let j=null;const et=new me(0,0,0,0);return{setMask:function(pt){j!==pt&&!I&&(n.colorMask(pt,pt,pt,pt),j=pt)},setLocked:function(pt){I=pt},setClear:function(pt,ft,Nt,fe,Ce){Ce===!0&&(pt*=fe,ft*=fe,Nt*=fe),ut.set(pt,ft,Nt,fe),et.equals(ut)===!1&&(n.clearColor(pt,ft,Nt,fe),et.copy(ut))},reset:function(){I=!1,j=null,et.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,j=null,et=null,pt=null;return{setReversed:function(ft){if(ut!==ft){const Nt=t.get("EXT_clip_control");ut?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const fe=pt;pt=null,this.setClear(fe)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?at(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(ft){j!==ft&&!I&&(n.depthMask(ft),j=ft)},setFunc:function(ft){if(ut&&(ft=Ug[ft]),et!==ft){switch(ft){case oo:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case ho:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=ft}},setLocked:function(ft){I=ft},setClear:function(ft){pt!==ft&&(ut&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){I=!1,j=null,et=null,pt=null,ut=!1}}}function r(){let I=!1,ut=null,j=null,et=null,pt=null,ft=null,Nt=null,fe=null,Ce=null;return{setTest:function(Qt){I||(Qt?at(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!I&&(n.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,rn,Rn){(j!==Qt||et!==rn||pt!==Rn)&&(n.stencilFunc(Qt,rn,Rn),j=Qt,et=rn,pt=Rn)},setOp:function(Qt,rn,Rn){(ft!==Qt||Nt!==rn||fe!==Rn)&&(n.stencilOp(Qt,rn,Rn),ft=Qt,Nt=rn,fe=Rn)},setLocked:function(Qt){I=Qt},setClear:function(Qt){Ce!==Qt&&(n.clearStencil(Qt),Ce=Qt)},reset:function(){I=!1,ut=null,j=null,et=null,pt=null,ft=null,Nt=null,fe=null,Ce=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,C=null,E=null,T=new jt(0,0,0),P=0,S=!1,M=null,A=null,U=null,L=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=Z>=2);let z=null,$={};const J=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),rt=new me().fromArray(J),B=new me().fromArray(Y);function K(I,ut,j,et){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(I,ft),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<j;Nt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ut+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const ct={};ct[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ct[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ct[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(n.DEPTH_TEST),a.setFunc(dr),Ht(!1),Gt(Hl),at(n.CULL_FACE),k(hi);function at(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Et(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ct(I,ut){return h[I]!==ut?(n.bindFramebuffer(I,ut),h[I]=ut,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(I,ut){let j=m,et=!1;if(I){j=f.get(ut),j===void 0&&(j=[],f.set(ut,j));const pt=I.textures;if(j.length!==pt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Nt=pt.length;ft<Nt;ft++)j[ft]=n.COLOR_ATTACHMENT0+ft;j.length=pt.length,et=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,et=!0);et&&n.drawBuffers(j)}function se(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Wt={[wi]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};Wt[Jh]=n.MIN,Wt[Qh]=n.MAX;const ge={[tf]:n.ZERO,[ef]:n.ONE,[nf]:n.SRC_COLOR,[so]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[of]:n.DST_COLOR,[sf]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[ao]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[af]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[ff]:n.CONSTANT_ALPHA,[df]:n.ONE_MINUS_CONSTANT_ALPHA};function k(I,ut,j,et,pt,ft,Nt,fe,Ce,Qt){if(I===hi){_===!0&&(Et(n.BLEND),_=!1);return}if(_===!1&&(at(n.BLEND),_=!0),I!==jh){if(I!==d||Qt!==S){if((p!==wi||x!==wi)&&(n.blendEquation(n.FUNC_ADD),p=wi,x=wi),Qt)switch(I){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,v=null,C=null,E=null,T.set(0,0,0),P=0,d=I,S=Qt}return}pt=pt||ut,ft=ft||j,Nt=Nt||et,(ut!==p||pt!==x)&&(n.blendEquationSeparate(Wt[ut],Wt[pt]),p=ut,x=pt),(j!==y||et!==v||ft!==C||Nt!==E)&&(n.blendFuncSeparate(ge[j],ge[et],ge[ft],ge[Nt]),y=j,v=et,C=ft,E=Nt),(fe.equals(T)===!1||Ce!==P)&&(n.blendColor(fe.r,fe.g,fe.b,Ce),T.copy(fe),P=Ce),d=I,S=!1}function Ye(I,ut){I.side===Sn?Et(n.CULL_FACE):at(n.CULL_FACE);let j=I.side===He;ut&&(j=!j),Ht(j),I.blending===sr&&I.transparent===!1?k(hi):k(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const et=I.stencilWrite;o.setTest(et),et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Gt(I){I!==qh?(at(n.CULL_FACE),I!==A&&(I===Hl?n.cullFace(n.BACK):I===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),A=I}function At(I){I!==U&&(X&&n.lineWidth(I),U=I)}function ae(I,ut,j){I?(at(n.POLYGON_OFFSET_FILL),(L!==ut||D!==j)&&(n.polygonOffset(ut,j),L=ut,D=j)):Et(n.POLYGON_OFFSET_FILL)}function wt(I){I?at(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function R(I){I===void 0&&(I=n.TEXTURE0+F-1),z!==I&&(n.activeTexture(I),z=I)}function b(I,ut,j){j===void 0&&(z===null?j=n.TEXTURE0+F-1:j=z);let et=$[j];et===void 0&&(et={type:void 0,texture:void 0},$[j]=et),(et.type!==I||et.texture!==ut)&&(z!==j&&(n.activeTexture(j),z=j),n.bindTexture(I,ut||ct[I]),et.type=I,et.texture=ut)}function H(){const I=$[z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){rt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),rt.copy(I))}function vt(I){B.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),B.copy(I))}function Vt(I,ut){let j=c.get(ut);j===void 0&&(j=new WeakMap,c.set(ut,j));let et=j.get(I);et===void 0&&(et=n.getUniformBlockIndex(ut,I.name),j.set(I,et))}function Ot(I,ut){const et=c.get(ut).get(I);l.get(ut)!==et&&(n.uniformBlockBinding(ut,et,I.__bindingPointIndex),l.set(ut,et))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},z=null,$={},h={},f=new WeakMap,m=[],g=null,_=!1,d=null,p=null,y=null,v=null,x=null,C=null,E=null,T=new jt(0,0,0),P=0,S=!1,M=null,A=null,U=null,L=null,D=null,rt.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:Ct,drawBuffers:Ut,useProgram:se,setBlending:k,setMaterial:Ye,setFlipSided:Ht,setCullFace:Gt,setLineWidth:At,setPolygonOffset:ae,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Xt,texStorage3D:st,texSubImage2D:Q,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Pt,viewport:vt,reset:ie}}function kc(n,t,e,i){const r=Fg(i);switch(e){case Iu:return n*t;case Nu:return n*t;case Fu:return n*t*2;case Ou:return n*t/r.components*r.byteLength;case fl:return n*t/r.components*r.byteLength;case ku:return n*t*2/r.components*r.byteLength;case dl:return n*t*2/r.components*r.byteLength;case Uu:return n*t*3/r.components*r.byteLength;case fn:return n*t*4/r.components*r.byteLength;case pl:return n*t*4/r.components*r.byteLength;case Bs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xo:case Mo:return Math.max(n,16)*Math.max(t,8)/4;case vo:case yo:return Math.max(n,8)*Math.max(t,8)/2;case So:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ws:case zo:case Bo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zu:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Go:case Vo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fg(n){switch(n){case Yn:case Pu:return{byteLength:1,components:1};case Xr:case Lu:case Jr:return{byteLength:2,components:1};case ul:case hl:return{byteLength:2,components:4};case Di:case cl:case Vn:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Og(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return m?new OffscreenCanvas(R,b):js("canvas")}function _(R,b,H){let tt=1;const it=wt(R);if((it.width>H||it.height>H)&&(tt=H/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(tt*it.width),St=Math.floor(tt*it.height);h===void 0&&(h=g(Q,St));const ht=b?g(Q,St):h;return ht.width=Q,ht.height=St,ht.getContext("2d").drawImage(R,0,0,Q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+St+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function d(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,b,H,tt,it=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=b;if(b===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),b===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),b===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),b===n.RGBA){const St=it?sa:qt.getTransfer(tt);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=St===ee?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(R,b){let H;return R?b===null||b===Di||b===gr?H=n.DEPTH24_STENCIL8:b===Vn?H=n.DEPTH32F_STENCIL8:b===Xr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Di||b===gr?H=n.DEPTH_COMPONENT24:b===Vn?H=n.DEPTH_COMPONENT32F:b===Xr&&(H=n.DEPTH_COMPONENT16),H}function C(R,b){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==dn&&R.minFilter!==Ae?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),P(b),b.isVideoTexture&&u.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),M(b)}function P(R){const b=i.get(R);if(b.__webglInit===void 0)return;const H=R.source,tt=f.get(H);if(tt){const it=tt[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(R),Object.keys(tt).length===0&&f.delete(H)}i.remove(R)}function S(R){const b=i.get(R);n.deleteTexture(b.__webglTexture);const H=R.source,tt=f.get(H);delete tt[b.__cacheKey],a.memory.textures--}function M(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let it=0;it<b.__webglFramebuffer[tt].length;it++)n.deleteFramebuffer(b.__webglFramebuffer[tt][it]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=R.textures;for(let tt=0,it=H.length;tt<it;tt++){const Q=i.get(H[tt]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(H[tt])}i.remove(R)}let A=0;function U(){A=0}function L(){const R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function D(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const H=i.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(H,R,b);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function X(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){B(H,R,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function Z(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){B(H,R,b);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function q(R,b){const H=i.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}const z={[Wr]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},$={[dn]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[as]:n.NEAREST_MIPMAP_LINEAR,[Ae]:n.LINEAR,[_a]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},J={[Rf]:n.NEVER,[Uf]:n.ALWAYS,[Cf]:n.LESS,[Bu]:n.LEQUAL,[Pf]:n.EQUAL,[If]:n.GEQUAL,[Lf]:n.GREATER,[Df]:n.NOTEQUAL};function Y(R,b){if(b.type===Vn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ae||b.magFilter===_a||b.magFilter===as||b.magFilter===ci||b.minFilter===Ae||b.minFilter===_a||b.minFilter===as||b.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,z[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,z[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,z[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==as&&b.minFilter!==ci||b.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function rt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const tt=b.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const Q=D(b);if(Q!==R.__cacheKey){it[Q]===void 0&&(it[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),it[Q].usedTimes++;const St=it[R.__cacheKey];St!==void 0&&(it[R.__cacheKey].usedTimes--,St.usedTimes===0&&S(b)),R.__cacheKey=Q,R.__webglTexture=it[Q].texture}return H}function B(R,b,H){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);const it=rt(R,b),Q=b.source;e.bindTexture(tt,R.__webglTexture,n.TEXTURE0+H);const St=i.get(Q);if(Q.version!==St.__version||it===!0){e.activeTexture(n.TEXTURE0+H);const ht=qt.getPrimaries(qt.workingColorSpace),gt=b.colorSpace===Xe?null:qt.getPrimaries(b.colorSpace),Xt=b.colorSpace===Xe||ht===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=_(b.image,!1,r.maxTextureSize);st=ae(b,st);const _t=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type);let Pt=v(b.internalFormat,_t,Rt,b.colorSpace,b.isVideoTexture);Y(tt,b);let vt;const Vt=b.mipmaps,Ot=b.isVideoTexture!==!0,ie=St.__version===void 0||it===!0,I=Q.dataReady,ut=C(b,st);if(b.isDepthTexture)Pt=x(b.format===_r,b.type),ie&&(Ot?e.texStorage2D(n.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Pt,st.width,st.height,0,_t,Rt,null));else if(b.isDataTexture)if(Vt.length>0){Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,ut,Pt,Vt[0].width,Vt[0].height);for(let j=0,et=Vt.length;j<et;j++)vt=Vt[j],Ot?I&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(n.TEXTURE_2D,j,Pt,vt.width,vt.height,0,_t,Rt,vt.data);b.generateMipmaps=!1}else Ot?(ie&&e.texStorage2D(n.TEXTURE_2D,ut,Pt,st.width,st.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,_t,Rt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,st.width,st.height,0,_t,Rt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Pt,Vt[0].width,Vt[0].height,st.depth);for(let j=0,et=Vt.length;j<et;j++)if(vt=Vt[j],b.format!==fn)if(_t!==null)if(Ot){if(I)if(b.layerUpdates.size>0){const pt=kc(vt.width,vt.height,b.format,b.type);for(const ft of b.layerUpdates){const Nt=vt.data.subarray(ft*pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ft,vt.width,vt.height,1,_t,Nt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,st.depth,_t,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Pt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,st.depth,_t,Rt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,Pt,vt.width,vt.height,st.depth,0,_t,Rt,vt.data)}else{Ot&&ie&&e.texStorage2D(n.TEXTURE_2D,ut,Pt,Vt[0].width,Vt[0].height);for(let j=0,et=Vt.length;j<et;j++)vt=Vt[j],b.format!==fn?_t!==null?Ot?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,j,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,_t,Rt,vt.data):e.texImage2D(n.TEXTURE_2D,j,Pt,vt.width,vt.height,0,_t,Rt,vt.data)}else if(b.isDataArrayTexture)if(Ot){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Pt,st.width,st.height,st.depth),I)if(b.layerUpdates.size>0){const j=kc(st.width,st.height,b.format,b.type);for(const et of b.layerUpdates){const pt=st.data.subarray(et*j/st.data.BYTES_PER_ELEMENT,(et+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,_t,Rt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Rt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,_t,Rt,st.data);else if(b.isData3DTexture)Ot?(ie&&e.texStorage3D(n.TEXTURE_3D,ut,Pt,st.width,st.height,st.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Rt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,_t,Rt,st.data);else if(b.isFramebufferTexture){if(ie)if(Ot)e.texStorage2D(n.TEXTURE_2D,ut,Pt,st.width,st.height);else{let j=st.width,et=st.height;for(let pt=0;pt<ut;pt++)e.texImage2D(n.TEXTURE_2D,pt,Pt,j,et,0,_t,Rt,null),j>>=1,et>>=1}}else if(Vt.length>0){if(Ot&&ie){const j=wt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Pt,j.width,j.height)}for(let j=0,et=Vt.length;j<et;j++)vt=Vt[j],Ot?I&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,_t,Rt,vt):e.texImage2D(n.TEXTURE_2D,j,Pt,_t,Rt,vt);b.generateMipmaps=!1}else if(Ot){if(ie){const j=wt(st);e.texStorage2D(n.TEXTURE_2D,ut,Pt,j.width,j.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Rt,st)}else e.texImage2D(n.TEXTURE_2D,0,Pt,_t,Rt,st);d(b)&&p(tt),St.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,H){if(b.image.length!==6)return;const tt=rt(R,b),it=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const Q=i.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(n.TEXTURE0+H);const St=qt.getPrimaries(qt.workingColorSpace),ht=b.colorSpace===Xe?null:qt.getPrimaries(b.colorSpace),gt=b.colorSpace===Xe||St===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!Xt&&!st?_t[et]=_(b.image[et],!0,r.maxCubemapSize):_t[et]=st?b.image[et].image:b.image[et],_t[et]=ae(b,_t[et]);const Rt=_t[0],Pt=s.convert(b.format,b.colorSpace),vt=s.convert(b.type),Vt=v(b.internalFormat,Pt,vt,b.colorSpace),Ot=b.isVideoTexture!==!0,ie=Q.__version===void 0||tt===!0,I=it.dataReady;let ut=C(b,Rt);Y(n.TEXTURE_CUBE_MAP,b);let j;if(Xt){Ot&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Vt,Rt.width,Rt.height);for(let et=0;et<6;et++){j=_t[et].mipmaps;for(let pt=0;pt<j.length;pt++){const ft=j[pt];b.format!==fn?Pt!==null?Ot?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Pt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,ft.width,ft.height,Pt,vt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,Vt,ft.width,ft.height,0,Pt,vt,ft.data)}}}else{if(j=b.mipmaps,Ot&&ie){j.length>0&&ut++;const et=wt(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Vt,et.width,et.height)}for(let et=0;et<6;et++)if(st){Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Pt,vt,_t[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,_t[et].width,_t[et].height,0,Pt,vt,_t[et].data);for(let pt=0;pt<j.length;pt++){const Nt=j[pt].image[et].image;Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Nt.width,Nt.height,Pt,vt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Vt,Nt.width,Nt.height,0,Pt,vt,Nt.data)}}else{Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Pt,vt,_t[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Vt,Pt,vt,_t[et]);for(let pt=0;pt<j.length;pt++){const ft=j[pt];Ot?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Pt,vt,ft.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,Vt,Pt,vt,ft.image[et])}}}d(b)&&p(n.TEXTURE_CUBE_MAP),Q.__version=it.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ct(R,b,H,tt,it,Q){const St=s.convert(H.format,H.colorSpace),ht=s.convert(H.type),gt=v(H.internalFormat,St,ht,H.colorSpace),Xt=i.get(b),st=i.get(H);if(st.__renderTarget=b,!Xt.__hasExternalTextures){const _t=Math.max(1,b.width>>Q),Rt=Math.max(1,b.height>>Q);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,gt,_t,Rt,b.depth,0,St,ht,null):e.texImage2D(it,Q,gt,_t,Rt,0,St,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,it,st.__webglTexture,0,Ht(b)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,it,st.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(R,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){const tt=b.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=x(b.stencilBuffer,it),St=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Ht(b);Gt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Q,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,R)}else{const tt=b.textures;for(let it=0;it<tt.length;it++){const Q=tt[it],St=s.convert(Q.format,Q.colorSpace),ht=s.convert(Q.type),gt=v(Q.internalFormat,St,ht,Q.colorSpace),Xt=Ht(b);H&&Gt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,gt,b.width,b.height):Gt(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt,gt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,gt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(b.depthTexture);tt.__renderTarget=b,(!tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const it=tt.__webglTexture,Q=Ht(b);if(b.depthTexture.format===ar)Gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(b.depthTexture.format===_r)Gt(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ct(R){const b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=tt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=n.createRenderbuffer(),at(b.__webglDepthbuffer[tt],R,!1);else{const it=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),at(b.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(R,b,H){const tt=i.get(R);b!==void 0&&ct(tt.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ct(R)}function se(R){const b=R.texture,H=i.get(R),tt=i.get(b);R.addEventListener("dispose",T);const it=R.textures,Q=R.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,a.memory.textures++),Q){H.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ht]=[];for(let gt=0;gt<b.mipmaps.length;gt++)H.__webglFramebuffer[ht][gt]=n.createFramebuffer()}else H.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)H.__webglFramebuffer[ht]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(St)for(let ht=0,gt=it.length;ht<gt;ht++){const Xt=i.get(it[ht]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Gt(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const gt=it[ht];H.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ht]);const Xt=s.convert(gt.format,gt.colorSpace),st=s.convert(gt.type),_t=v(gt.internalFormat,Xt,st,gt.colorSpace,R.isXRRenderTarget===!0),Rt=Ht(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,H.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),at(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),Y(n.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)ct(H.__webglFramebuffer[ht][gt],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else ct(H.__webglFramebuffer[ht],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);d(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,gt=it.length;ht<gt;ht++){const Xt=it[ht],st=i.get(Xt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Y(n.TEXTURE_2D,Xt),ct(H.__webglFramebuffer,R,Xt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),d(Xt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),Y(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let gt=0;gt<b.mipmaps.length;gt++)ct(H.__webglFramebuffer[gt],R,b,n.COLOR_ATTACHMENT0,ht,gt);else ct(H.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,ht,0);d(b)&&p(ht),e.unbindTexture()}R.depthBuffer&&Ct(R)}function Wt(R){const b=R.textures;for(let H=0,tt=b.length;H<tt;H++){const it=b[H];if(d(it)){const Q=y(R),St=i.get(it).__webglTexture;e.bindTexture(Q,St),p(Q),e.unbindTexture()}}}const ge=[],k=[];function Ye(R){if(R.samples>0){if(Gt(R)===!1){const b=R.textures,H=R.width,tt=R.height;let it=n.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(R),ht=b.length>1;if(ht)for(let gt=0;gt<b.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<b.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Xt=i.get(b[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xt,0)}n.blitFramebuffer(0,0,H,tt,0,0,H,tt,it,n.NEAREST),l===!0&&(ge.length=0,k.length=0,ge.push(n.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(Q),k.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<b.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const Xt=i.get(b[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ht(R){return Math.min(r.maxSamples,R.samples)}function Gt(R){const b=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function ae(R,b){const H=R.colorSpace,tt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ni&&H!==Xe&&(qt.getTransfer(H)===ee?(tt!==fn||it!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ut,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Gt}function kg(n,t){function e(i,r=Xe){let s;const a=qt.getTransfer(r);if(i===Yn)return n.UNSIGNED_BYTE;if(i===ul)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pu)return n.BYTE;if(i===Lu)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===cl)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===fn)return n.RGBA;if(i===Nu)return n.LUMINANCE;if(i===Fu)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Ou)return n.RED;if(i===fl)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===dl)return n.RG_INTEGER;if(i===pl)return n.RGBA_INTEGER;if(i===Bs||i===Hs||i===Gs||i===Vs)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vo||i===xo||i===yo||i===Mo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===So||i===bo||i===Eo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===So||i===bo)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===wo||i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No||i===Fo||i===Oo||i===ko)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===To)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ro)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Co)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Io)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ws||i===zo||i===Bo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ws)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zu||i===Ho||i===Go||i===Vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ws)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class zg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kr extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),p=this._getHandJoint(c,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new wn({vertexShader:Hg,fragmentShader:Gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends Mr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Vg,d=e.getContextAttributes();let p=null,y=null;const v=[],x=[],C=new Zt;let E=null;const T=new tn;T.viewport=new me;const P=new tn;P.viewport=new me;const S=[T,P],M=new zg;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new qa,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new qa,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new qa,v[B]=K),K.getHandSpace()};function L(B){const K=x.indexOf(B.inputSource);if(K===-1)return;const ct=v[K];ct!==void 0&&(ct.update(B.inputSource,B.frame,c||a),ct.dispatchEvent({type:B.type,data:B.inputSource}))}function D(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",F);for(let B=0;B<v.length;B++){const K=x[B];K!==null&&(x[B]=null,v[B].disconnect(K))}A=null,U=null,_.reset(),t.setRenderTarget(p),m=null,f=null,h=null,r=null,y=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",D),r.addEventListener("inputsourceschange",F),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const K={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new pi(m.framebufferWidth,m.framebufferHeight,{format:fn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let K=null,ct=null,at=null;d.depth&&(at=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=d.stencil?_r:ar,ct=d.stencil?gr:Di);const Et={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Et),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:fn,type:Yn,depthTexture:new eh(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(B){for(let K=0;K<B.removed.length;K++){const ct=B.removed[K],at=x.indexOf(ct);at>=0&&(x[at]=null,v[at].disconnect(ct))}for(let K=0;K<B.added.length;K++){const ct=B.added[K];let at=x.indexOf(ct);if(at===-1){for(let Ct=0;Ct<v.length;Ct++)if(Ct>=x.length){x.push(ct),at=Ct;break}else if(x[Ct]===null){x[Ct]=ct,at=Ct;break}if(at===-1)break}const Et=v[at];Et&&Et.connect(ct)}}const X=new W,Z=new W;function q(B,K,ct){X.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);const at=X.distanceTo(Z),Et=K.projectionMatrix.elements,Ct=ct.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),se=Et[14]/(Et[10]+1),Wt=(Et[9]+1)/Et[5],ge=(Et[9]-1)/Et[5],k=(Et[8]-1)/Et[0],Ye=(Ct[8]+1)/Ct[0],Ht=Ut*k,Gt=Ut*Ye,At=at/(-k+Ye),ae=At*-k;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ae),B.translateZ(At),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Et[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const wt=Ut+At,R=se+At,b=Ht-ae,H=Gt+(at-ae),tt=Wt*se/R*wt,it=ge*se/R*wt;B.projectionMatrix.makePerspective(b,H,tt,it,wt,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function z(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,ct=B.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),M.near=P.near=T.near=K,M.far=P.far=T.far=ct,(A!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far),T.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;const at=B.parent,Et=M.cameras;z(M,at);for(let Ct=0;Ct<Et.length;Ct++)z(Et[Ct],at);Et.length===2?q(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),$(B,M,at)};function $(B,K,ct){ct===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(ct.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Wo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let J=null;function Y(B,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const ct=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let at=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Ct=0;Ct<ct.length;Ct++){const Ut=ct[Ct];let se=null;if(m!==null)se=m.getViewport(Ut);else{const ge=h.getViewSubImage(f,Ut);se=ge.viewport,Ct===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let Wt=S[Ct];Wt===void 0&&(Wt=new tn,Wt.layers.enable(Ct),Wt.viewport=new me,S[Ct]=Wt),Wt.matrix.fromArray(Ut.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ut.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(se.x,se.y,se.width,se.height),Ct===0&&(M.matrix.copy(Wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(Wt)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Ct=h.getDepthInformation(ct[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,r.renderState)}}for(let ct=0;ct<v.length;ct++){const at=x[ct],Et=v[ct];at!==null&&Et!==void 0&&Et.update(at,K,c||a)}J&&J(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const rt=new Qu;rt.setAnimationLoop(Y),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}const Si=new jn,Xg=new he;function qg(n,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,ju(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),u(d,p)):p.isMeshStandardMaterial?(s(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,x)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,y,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===He&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===He&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(d.envMap.value=v,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Si)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,y,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=v*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const y=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $g(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",d));const C=v.program;i.updateUBOMapping(y,C);const E=t.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){const v=h();y.__bindingPointIndex=v;const x=n.createBuffer(),C=y.__size,E=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=r[y.id],x=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=x.length;E<T;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=P.length;S<M;S++){const A=P[S];if(m(A,E,S,C)===!0){const U=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let F=0;F<L.length;F++){const X=L[F],Z=_(X);typeof X=="number"||typeof X=="boolean"?(A.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,U+D,A.__data)):X.isMatrix3?(A.__data[0]=X.elements[0],A.__data[1]=X.elements[1],A.__data[2]=X.elements[2],A.__data[3]=0,A.__data[4]=X.elements[3],A.__data[5]=X.elements[4],A.__data[6]=X.elements[5],A.__data[7]=0,A.__data[8]=X.elements[6],A.__data[9]=X.elements[7],A.__data[10]=X.elements[8],A.__data[11]=0):(X.toArray(A.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,v,x,C){const E=y.value,T=v+"_"+x;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){const v=y.uniforms;let x=0;const C=16;for(let T=0,P=v.length;T<P;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,A=S.length;M<A;M++){const U=S[M],L=Array.isArray(U.value)?U.value:[U.value];for(let D=0,F=L.length;D<F;D++){const X=L[D],Z=_(X),q=x%C,z=q%Z.boundary,$=q+z;x+=z,$!==0&&C-$<Z.storage&&(x+=C-$),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Z.storage}}}const E=x%C;return E>0&&(x+=C-E),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function d(y){const v=y.target;v.removeEventListener("dispose",d);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Yg{constructor(t={}){const{canvas:e=Ff(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=fi,this.toneMappingExposure=1;const x=this;let C=!1,E=0,T=0,P=null,S=-1,M=null;const A=new me,U=new me;let L=null;const D=new jt(0);let F=0,X=e.width,Z=e.height,q=1,z=null,$=null;const J=new me(0,0,X,Z),Y=new me(0,0,X,Z);let rt=!1;const B=new Ju;let K=!1,ct=!1;const at=new he,Et=new he,Ct=new W,Ut=new me,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ge(){return P===null?q:1}let k=i;function Ye(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),k===null){const N="webgl2";if(k=Ye(N,w),k===null)throw Ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Gt,At,ae,wt,R,b,H,tt,it,Q,St,ht,gt,Xt,st,_t,Rt,Pt,vt,Vt,Ot,ie,I;function ut(){Ht=new Q0(k),Ht.init(),Ot=new kg(k,Ht),Gt=new $0(k,Ht,t,Ot),At=new Ng(k,Ht),Gt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ae=new nm(k),wt=new yg,R=new Og(k,Ht,At,wt,Gt,Ot,ae),b=new j0(x),H=new J0(x),tt=new cd(k),ie=new X0(k,tt),it=new tm(k,tt,ae,ie),Q=new rm(k,it,tt,ae),Pt=new im(k,Gt,R),st=new Y0(wt),St=new xg(x,b,H,Ht,Gt,ie,st),ht=new qg(x,wt),gt=new Sg,Xt=new Rg(Ht),Rt=new W0(x,b,H,At,Q,m,l),_t=new Ig(x,Q,Gt),I=new $g(k,ae,Gt,At),vt=new q0(k,Ht,ae),Vt=new em(k,Ht,ae),ae.programs=St.programs,x.capabilities=Gt,x.extensions=Ht,x.properties=wt,x.renderLists=gt,x.shadowMap=_t,x.state=At,x.info=ae}ut();const j=new Wg(x,k);this.xr=j,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(X,Z,!1))},this.getSize=function(w){return w.set(X,Z)},this.setSize=function(w,N,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Z=N,e.width=Math.floor(w*q),e.height=Math.floor(N*q),G===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(X*q,Z*q).floor()},this.setDrawingBufferSize=function(w,N,G){X=w,Z=N,q=G,e.width=Math.floor(w*G),e.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,N,G,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,N,G,V),At.viewport(A.copy(J).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,N,G,V){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,N,G,V),At.scissor(U.copy(Y).multiplyScalar(q).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){At.setScissorTest(rt=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(w=!0,N=!0,G=!0){let V=0;if(w){let O=!1;if(P!==null){const ot=P.texture.format;O=ot===pl||ot===dl||ot===fl}if(O){const ot=P.texture.type,dt=ot===Yn||ot===Di||ot===Xr||ot===gr||ot===ul||ot===hl,xt=Rt.getClearColor(),yt=Rt.getClearAlpha(),Dt=xt.r,Ft=xt.g,Mt=xt.b;dt?(g[0]=Dt,g[1]=Ft,g[2]=Mt,g[3]=yt,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=Mt,_[3]=yt,k.clearBufferiv(k.COLOR,0,_))}else V|=k.COLOR_BUFFER_BIT}N&&(V|=k.DEPTH_BUFFER_BIT),G&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),Xt.dispose(),wt.dispose(),b.dispose(),H.dispose(),Q.dispose(),ie.dispose(),I.dispose(),St.dispose(),j.dispose(),j.removeEventListener("sessionstart",Il),j.removeEventListener("sessionend",Ul),gi.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ae.autoReset,N=_t.enabled,G=_t.autoUpdate,V=_t.needsUpdate,O=_t.type;ut(),ae.autoReset=w,_t.enabled=N,_t.autoUpdate=G,_t.needsUpdate=V,_t.type=O}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const N=w.target;N.removeEventListener("dispose",Nt),fe(N)}function fe(w){Ce(w),wt.remove(w)}function Ce(w){const N=wt.get(w).programs;N!==void 0&&(N.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,V,O,ot){N===null&&(N=se);const dt=O.isMesh&&O.matrixWorld.determinant()<0,xt=Vh(w,N,G,V,O);At.setMaterial(V,dt);let yt=G.index,Dt=1;if(V.wireframe===!0){if(yt=it.getWireframeAttribute(G),yt===void 0)return;Dt=2}const Ft=G.drawRange,Mt=G.attributes.position;let $t=Ft.start*Dt,re=(Ft.start+Ft.count)*Dt;ot!==null&&($t=Math.max($t,ot.start*Dt),re=Math.min(re,(ot.start+ot.count)*Dt)),yt!==null?($t=Math.max($t,0),re=Math.min(re,yt.count)):Mt!=null&&($t=Math.max($t,0),re=Math.min(re,Mt.count));const oe=re-$t;if(oe<0||oe===1/0)return;ie.setup(O,V,xt,G,yt);let Fe,Kt=vt;if(yt!==null&&(Fe=tt.get(yt),Kt=Vt,Kt.setIndex(Fe)),O.isMesh)V.wireframe===!0?(At.setLineWidth(V.wireframeLinewidth*ge()),Kt.setMode(k.LINES)):Kt.setMode(k.TRIANGLES);else if(O.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*ge()),O.isLineSegments?Kt.setMode(k.LINES):O.isLineLoop?Kt.setMode(k.LINE_LOOP):Kt.setMode(k.LINE_STRIP)}else O.isPoints?Kt.setMode(k.POINTS):O.isSprite&&Kt.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Kt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Kt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,Cn=O._multiDrawCounts,Jt=O._multiDrawCount,sn=yt?tt.get(yt).bytesPerElement:1,Oi=wt.get(V).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)Oi.setValue(k,"_gl_DrawID",Ge),Kt.render(bt[Ge]/sn,Cn[Ge])}else if(O.isInstancedMesh)Kt.renderInstances($t,oe,O.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Cn=Math.min(G.instanceCount,bt);Kt.renderInstances($t,oe,Cn)}else Kt.render($t,oe)};function Qt(w,N,G){w.transparent===!0&&w.side===Sn&&w.forceSinglePass===!1?(w.side=He,w.needsUpdate=!0,ss(w,N,G),w.side=$n,w.needsUpdate=!0,ss(w,N,G),w.side=Sn):ss(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),p=Xt.get(G),p.init(N),v.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==G&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ot=O.material;if(ot)if(Array.isArray(ot))for(let dt=0;dt<ot.length;dt++){const xt=ot[dt];Qt(xt,G,O),V.add(xt)}else Qt(ot,G,O),V.add(ot)}),v.pop(),p=null,V},this.compileAsync=function(w,N,G=null){const V=this.compile(w,N,G);return new Promise(O=>{function ot(){if(V.forEach(function(dt){wt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){O(w);return}setTimeout(ot,10)}Ht.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let rn=null;function Rn(w){rn&&rn(w)}function Il(){gi.stop()}function Ul(){gi.start()}const gi=new Qu;gi.setAnimationLoop(Rn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){rn=w,j.setAnimationLoop(w),w===null?gi.stop():gi.start()},j.addEventListener("sessionstart",Il),j.addEventListener("sessionend",Ul),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,P),p=Xt.get(w,v.length),p.init(N),v.push(p),Et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B.setFromProjectionMatrix(Et),ct=this.localClippingEnabled,K=st.init(this.clippingPlanes,ct),d=gt.get(w,y.length),d.init(),y.push(d),j.enabled===!0&&j.isPresenting===!0){const ot=x.xr.getDepthSensingMesh();ot!==null&&ga(ot,N,-1/0,x.sortObjects)}ga(w,N,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(z,$),Wt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Wt&&Rt.addToRenderList(d,w),this.info.render.frame++,K===!0&&st.beginShadows();const G=p.state.shadowsArray;_t.render(G,w,N),K===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,O=d.transmissive;if(p.setupLights(),N.isArrayCamera){const ot=N.cameras;if(O.length>0)for(let dt=0,xt=ot.length;dt<xt;dt++){const yt=ot[dt];Fl(V,O,w,yt)}Wt&&Rt.render(w);for(let dt=0,xt=ot.length;dt<xt;dt++){const yt=ot[dt];Nl(d,w,yt,yt.viewport)}}else O.length>0&&Fl(V,O,w,N),Wt&&Rt.render(w),Nl(d,w,N);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,N),ie.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],K===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function ga(w,N,G,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){V&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const dt=Q.update(w),xt=w.material;xt.visible&&d.push(w,dt,xt,G,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){const dt=Q.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ut.copy(dt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(xt)){const yt=dt.groups;for(let Dt=0,Ft=yt.length;Dt<Ft;Dt++){const Mt=yt[Dt],$t=xt[Mt.materialIndex];$t&&$t.visible&&d.push(w,dt,$t,G,Ut.z,Mt)}}else xt.visible&&d.push(w,dt,xt,G,Ut.z,null)}}const ot=w.children;for(let dt=0,xt=ot.length;dt<xt;dt++)ga(ot[dt],N,G,V)}function Nl(w,N,G,V){const O=w.opaque,ot=w.transmissive,dt=w.transparent;p.setupLightsView(G),K===!0&&st.setGlobalState(x.clippingPlanes,G),V&&At.viewport(A.copy(V)),O.length>0&&rs(O,N,G),ot.length>0&&rs(ot,N,G),dt.length>0&&rs(dt,N,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Fl(w,N,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Jr:Yn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ot=p.state.transmissionRenderTarget[V.id],dt=V.viewport||A;ot.setSize(dt.z,dt.w);const xt=x.getRenderTarget();x.setRenderTarget(ot),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&Rt.render(G);const yt=x.toneMapping;x.toneMapping=fi;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),K===!0&&st.setGlobalState(x.clippingPlanes,V),rs(w,G,V),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,$t=N.length;Mt<$t;Mt++){const re=N[Mt],oe=re.object,Fe=re.geometry,Kt=re.material,bt=re.group;if(Kt.side===Sn&&oe.layers.test(V.layers)){const Cn=Kt.side;Kt.side=He,Kt.needsUpdate=!0,Ol(oe,G,V,Fe,Kt,bt),Kt.side=Cn,Kt.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}x.setRenderTarget(xt),x.setClearColor(D,F),Dt!==void 0&&(V.viewport=Dt),x.toneMapping=yt}function rs(w,N,G){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ot=w.length;O<ot;O++){const dt=w[O],xt=dt.object,yt=dt.geometry,Dt=V===null?dt.material:V,Ft=dt.group;xt.layers.test(G.layers)&&Ol(xt,N,G,yt,Dt,Ft)}}function Ol(w,N,G,V,O,ot){w.onBeforeRender(x,N,G,V,O,ot),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,N,G,V,w,ot),O.transparent===!0&&O.side===Sn&&O.forceSinglePass===!1?(O.side=He,O.needsUpdate=!0,x.renderBufferDirect(G,N,V,O,w,ot),O.side=$n,O.needsUpdate=!0,x.renderBufferDirect(G,N,V,O,w,ot),O.side=Sn):x.renderBufferDirect(G,N,V,O,w,ot),w.onAfterRender(x,N,G,V,O,ot)}function ss(w,N,G){N.isScene!==!0&&(N=se);const V=wt.get(w),O=p.state.lights,ot=p.state.shadowsArray,dt=O.state.version,xt=St.getParameters(w,O.state,ot,N,G),yt=St.getProgramCacheKey(xt);let Dt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Dt===void 0&&(w.addEventListener("dispose",Nt),Dt=new Map,V.programs=Dt);let Ft=Dt.get(yt);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===dt)return zl(w,xt),Ft}else xt.uniforms=St.getUniforms(w),w.onBeforeCompile(xt,x),Ft=St.acquireProgram(xt,yt),Dt.set(yt,Ft),V.uniforms=xt.uniforms;const Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=st.uniform),zl(w,xt),V.needsLights=Xh(w),V.lightsStateVersion=dt,V.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function kl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Xs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function zl(w,N){const G=wt.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Vh(w,N,G,V,O){N.isScene!==!0&&(N=se),R.resetTextureUnits();const ot=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,xt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ni,yt=(V.isMeshStandardMaterial?H:b).get(V.envMap||dt),Dt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let oe=fi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,bt=wt.get(V),Cn=p.state.lights;if(K===!0&&(ct===!0||w!==M)){const je=w===M&&V.id===S;st.setState(V,w,je)}let Jt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Cn.state.version||bt.outputColorSpace!==xt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==yt||V.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==st.numPlanes||bt.numIntersection!==st.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==Mt||bt.morphNormals!==$t||bt.morphColors!==re||bt.toneMapping!==oe||bt.morphTargetsCount!==Kt)&&(Jt=!0):(Jt=!0,bt.__version=V.version);let sn=bt.currentProgram;Jt===!0&&(sn=ss(V,N,O));let Oi=!1,Ge=!1,br=!1;const le=sn.getUniforms(),pn=bt.uniforms;if(At.useProgram(sn.program)&&(Oi=!0,Ge=!0,br=!0),V.id!==S&&(S=V.id,Ge=!0),Oi||M!==w){At.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),kf(at),zf(at),le.setValue(k,"projectionMatrix",at)):le.setValue(k,"projectionMatrix",w.projectionMatrix),le.setValue(k,"viewMatrix",w.matrixWorldInverse);const Jn=le.map.cameraPosition;Jn!==void 0&&Jn.setValue(k,Ct.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&le.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ge=!0,br=!0)}if(O.isSkinnedMesh){le.setOptional(k,O,"bindMatrix"),le.setOptional(k,O,"bindMatrixInverse");const je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),le.setValue(k,"boneTexture",je.boneTexture,R))}O.isBatchedMesh&&(le.setOptional(k,O,"batchingTexture"),le.setValue(k,"batchingTexture",O._matricesTexture,R),le.setOptional(k,O,"batchingIdTexture"),le.setValue(k,"batchingIdTexture",O._indirectTexture,R),le.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(k,"batchingColorTexture",O._colorsTexture,R));const Er=G.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Pt.update(O,G,sn),(Ge||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,le.setValue(k,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(pn.envMapIntensity.value=N.environmentIntensity),Ge&&(le.setValue(k,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&Wh(pn,br),ot&&V.fog===!0&&ht.refreshFogUniforms(pn,ot),ht.refreshMaterialUniforms(pn,V,q,Z,p.state.transmissionRenderTarget[w.id]),Xs.upload(k,kl(bt),pn,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xs.upload(k,kl(bt),pn,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(k,"center",O.center),le.setValue(k,"modelViewMatrix",O.modelViewMatrix),le.setValue(k,"normalMatrix",O.normalMatrix),le.setValue(k,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const je=V.uniformsGroups;for(let Jn=0,Qn=je.length;Jn<Qn;Jn++){const Bl=je[Jn];I.update(Bl,sn),I.bind(Bl,sn)}}return sn}function Wh(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Xh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,G){wt.get(w.texture).__webglTexture=N,wt.get(w.depthTexture).__webglTexture=G;const V=wt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=wt.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){P=w,E=N,T=G;let V=!0,O=null,ot=!1,dt=!1;if(w){const yt=wt.get(w);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(k.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(yt.__hasExternalTextures)R.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&wt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Dt=w.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);const Ft=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][G]:O=Ft[N],ot=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[G]:O=Ft,A.copy(w.viewport),U.copy(w.scissor),L=w.scissorTest}else A.copy(J).multiplyScalar(q).floor(),U.copy(Y).multiplyScalar(q).floor(),L=rt;if(At.bindFramebuffer(k.FRAMEBUFFER,O)&&V&&At.drawBuffers(w,O),At.viewport(A),At.scissor(U),At.setScissorTest(L),ot){const yt=wt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,G)}else if(dt){const yt=wt.get(w.texture),Dt=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,G||0,Dt)}S=-1},this.readRenderTargetPixels=function(w,N,G,V,O,ot,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){At.bindFramebuffer(k.FRAMEBUFFER,xt);try{const yt=w.texture,Dt=yt.format,Ft=yt.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&G>=0&&G<=w.height-O&&k.readPixels(N,G,V,O,Ot.convert(Dt),Ot.convert(Ft),ot)}finally{const yt=P!==null?wt.get(P).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,V,O,ot,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){const yt=w.texture,Dt=yt.format,Ft=yt.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&G>=0&&G<=w.height-O){At.bindFramebuffer(k.FRAMEBUFFER,xt);const Mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Mt),k.bufferData(k.PIXEL_PACK_BUFFER,ot.byteLength,k.STREAM_READ),k.readPixels(N,G,V,O,Ot.convert(Dt),Ot.convert(Ft),0);const $t=P!==null?wt.get(P).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,$t);const re=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Of(k,re,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ot),k.deleteBuffer(Mt),k.deleteSync(re),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),O=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),dt=N!==null?N.x:0,xt=N!==null?N.y:0;R.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,dt,xt,O,ot),At.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,V=null,O=0){w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let ot,dt,xt,yt,Dt,Ft,Mt,$t,re;const oe=w.isCompressedTexture?w.mipmaps[O]:w.image;G!==null?(ot=G.max.x-G.min.x,dt=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,yt=G.min.x,Dt=G.min.y,Ft=G.isBox3?G.min.z:0):(ot=oe.width,dt=oe.height,xt=oe.depth||1,yt=0,Dt=0,Ft=0),V!==null?(Mt=V.x,$t=V.y,re=V.z):(Mt=0,$t=0,re=0);const Fe=Ot.convert(N.format),Kt=Ot.convert(N.type);let bt;N.isData3DTexture?(R.setTexture3D(N,0),bt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),bt=k.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),bt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const Cn=k.getParameter(k.UNPACK_ROW_LENGTH),Jt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sn=k.getParameter(k.UNPACK_SKIP_PIXELS),Oi=k.getParameter(k.UNPACK_SKIP_ROWS),Ge=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,oe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,oe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ft);const br=w.isDataArrayTexture||w.isData3DTexture,le=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const pn=wt.get(w),Er=wt.get(N),je=wt.get(pn.__renderTarget),Jn=wt.get(Er.__renderTarget);At.bindFramebuffer(k.READ_FRAMEBUFFER,je.__webglFramebuffer),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Qn=0;Qn<xt;Qn++)br&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,O,Ft+Qn),w.isDepthTexture?(le&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,O,re+Qn),k.blitFramebuffer(yt,Dt,ot,dt,Mt,$t,ot,dt,k.DEPTH_BUFFER_BIT,k.NEAREST)):le?k.copyTexSubImage3D(bt,O,Mt,$t,re+Qn,yt,Dt,ot,dt):k.copyTexSubImage2D(bt,O,Mt,$t,re+Qn,yt,Dt,ot,dt);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(bt,O,Mt,$t,re,ot,dt,xt,Fe,Kt,oe.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(bt,O,Mt,$t,re,ot,dt,xt,Fe,oe.data):k.texSubImage3D(bt,O,Mt,$t,re,ot,dt,xt,Fe,Kt,oe):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,Mt,$t,ot,dt,Fe,Kt,oe.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,Mt,$t,oe.width,oe.height,Fe,oe.data):k.texSubImage2D(k.TEXTURE_2D,O,Mt,$t,ot,dt,Fe,Kt,oe);k.pixelStorei(k.UNPACK_ROW_LENGTH,Cn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Jt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Oi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ge),O===0&&N.generateMipmaps&&k.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,V=null,O=0){return w.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],O=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,V,O)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){E=0,T=0,P=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class ah extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ca extends Ne{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const jg={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=oh(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,m;if(i&&(s=t_(n,t,s,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let g=e;g<r;g+=e)h=n[g],f=n[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return qr(s,a,e,o,l,m,0),a}};function oh(n,t,e,i,r){let s,a;if(r===h_(n,t,e,i)>0)for(s=t;s<e;s+=i)a=zc(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=zc(s,n[s],n[s+1],a);return a&&ua(a,a.next)&&(Yr(a),a=a.next),a}function Ii(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ua(e,e.next)||ue(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function qr(n,t,e,i,r,s,a){if(!n)return;!a&&s&&s_(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Kg(n,i,r,s):Zg(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Yr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Jg(Ii(n),t,e),qr(n,t,e,i,r,s,2)):a===2&&Qg(n,t,e,i,r,s):qr(Ii(n),t,e,i,r,s,1);break}}}function Zg(n){const t=n.prev,e=n,i=n.next;if(ue(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&ir(r,o,s,l,a,c,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kg(n,t,e,i){const r=n.prev,s=n,a=n.next;if(ue(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,p=qo(m,g,t,e,i),y=qo(_,d,t,e,i);let v=n.prevZ,x=n.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&ir(o,u,l,h,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&ir(o,u,l,h,c,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=d&&v!==r&&v!==a&&ir(o,u,l,h,c,f,v.x,v.y)&&ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=d&&x!==r&&x!==a&&ir(o,u,l,h,c,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jg(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!ua(r,s)&&lh(r,i,i.next,s)&&$r(r,s)&&$r(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Yr(i),Yr(i.next),i=n=s),i=i.next}while(i!==n);return Ii(i)}function Qg(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&l_(a,o)){let l=ch(a,o);a=Ii(a,a.next),l=Ii(l,l.next),qr(a,t,e,i,r,s,0),qr(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function t_(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=oh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(o_(c));for(r.sort(e_),s=0;s<r.length;s++)e=n_(r[s],e);return e}function e_(n,t){return n.x-t.x}function n_(n,t){const e=i_(n,t);if(!e)return t;const i=ch(e,n);return Ii(i,i.next),Ii(e,e.next)}function i_(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ir(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),$r(e,n)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&r_(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function r_(n,t){return ue(n.prev,n,t.prev)<0&&ue(t.next,n,n.next)<0}function s_(n,t,e,i){let r=n;do r.z===0&&(r.z=qo(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,a_(r)}function a_(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function qo(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function o_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ir(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function l_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!c_(n,t)&&($r(n,t)&&$r(t,n)&&u_(n,t)&&(ue(n.prev,n,t.prev)||ue(n,t.prev,t))||ua(n,t)&&ue(n.prev,n,n.next)>0&&ue(t.prev,t,t.next)>0)}function ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ua(n,t){return n.x===t.x&&n.y===t.y}function lh(n,t,e,i){const r=Rs(ue(n,t,e)),s=Rs(ue(n,t,i)),a=Rs(ue(e,i,n)),o=Rs(ue(e,i,t));return!!(r!==s&&a!==o||r===0&&As(n,e,t)||s===0&&As(n,i,t)||a===0&&As(e,n,i)||o===0&&As(e,t,i))}function As(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Rs(n){return n>0?1:n<0?-1:0}function c_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&lh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $r(n,t){return ue(n.prev,n,n.next)<0?ue(n,t,n.next)>=0&&ue(n,n.prev,t)>=0:ue(n,t,n.prev)<0||ue(n,n.next,t)<0}function u_(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ch(n,t){const e=new $o(n.i,n.x,n.y),i=new $o(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function zc(n,t,e,i){const r=new $o(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $o(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h_(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class vl{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return vl.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Bc(t),Hc(i,t);let a=t.length;e.forEach(Bc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Hc(i,e[l]);const o=jg.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Bc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Hc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const Gc=new he;class f_{constructor(t,e,i=0,r=1/0){this.ray=new Wu(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,i=[]){return Yo(t,this,i,e),i.sort(Vc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Yo(t[r],this,i,e);return i.sort(Vc),i}}function Vc(n,t){return n.distance-t.distance}function Yo(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Yo(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);function nn(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function lr(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class Re{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const r of t)e+=Math.max(0,r[1]);let i=this.next()*e;for(const r of t)if(i-=Math.max(0,r[1]),i<=0)return r[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const r=Math.floor(this.next()*(i+1));[e[i],e[r]]=[e[r],e[i]]}return e}fork(t=0){return new Re(nn(Math.floor(this.next()*4294967296),t))}}const Ue=(n,t,e)=>n<t?t:n>e?e:n,d_=(n,t,e)=>n+(t-n)*e,Wc=(n,t,e)=>{const i=Ue((e-n)/(t-n),0,1);return i*i*(3-2*i)},Ci=(n,t,e,i)=>d_(n,t,1-Math.exp(-e*i)),$a=Math.PI*2;function p_(n,t){let e=(t-n)%$a;return e>Math.PI&&(e-=$a),e<-Math.PI&&(e+=$a),e}function Se(n,t=0){const e=Math.floor(n),i=n-e,r=nn(e,t)/2147483648-1,s=nn(e+1,t)/2147483648-1,a=i*i*(3-2*i);return r+(s-r)*a}const ve="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",En="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",cr="'VT323', 'Courier New', monospace";function An(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function m_(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function xl(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const r=new ca(n);return r.colorSpace=Xe,r.wrapS=t?Wr:Gn,r.wrapT=e?Wr:Gn,r.generateMipmaps=i,r.minFilter=i?ci:Ae,r.magFilter=Ae,r.anisotropy=2,r.needsUpdate=!0,r}function g_(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function yl(n,t){const[e,i,r]=g_(n),s=a=>Math.max(0,Math.min(255,Math.round(t>=0?a+(255-a)*t:a*(1+t))));return`rgb(${s(e)},${s(i)},${s(r)})`}function jr(n,t,e,i,r,s=1,a=1,o=!0){const l=new Re(s);n.save(),n.beginPath(),n.rect(t,e,i,r),n.clip();const c=Math.floor(i*r/900*a);for(let u=0;u<c;u++){const h=l.range(.02,.09)*a;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${h})`:`rgba(255,255,240,${h*.6})`;const f=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,r),f,f*l.range(.5,o?3:1.4))}for(let u=0;o&&u<Math.floor(i/90*a);u++){const h=t+l.range(0,i),f=e+l.range(0,r*.7),m=l.range(r*.05,r*.35),g=n.createLinearGradient(0,f,0,f+m);g.addColorStop(0,`rgba(40,30,15,${.1*a})`),g.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=g,n.fillRect(h,f,l.range(2,7),m)}n.restore()}function $e(n,t,e,i,r=ve,s=400){let a=i;n.font=`${s} ${a}px ${r}`;const o=n.measureText(t).width;return o>e&&(a=Math.max(6,Math.floor(a*e/o)),n.font=`${s} ${a}px ${r}`),a}function Zr(n,t,e){const i=[];for(const r of String(t).split(`
`)){let s="";for(const a of r.split(" ")){const o=s?`${s} ${a}`:a;n.measureText(o).width>e&&s?(i.push(s),s=a):s=o}i.push(s)}return i}function jo(n,t,e,i,r,s){const a={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[r]??0;n.save(),n.translate(t,e),n.rotate(a),n.strokeStyle=s,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const Yt={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},qs={ring:"#dc241f",bar:"#0019a8",text:"#ffffff",panel:"#fbfaf4"},bn={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},__=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function Ml(n,t,e,i,r={}){let s=r.ring||qs.ring,a=r.bar||qs.bar;const o=r.defect||null;o==="swap"&&([s,a]=[a,s]);const l=i*.56,c=i*1.26,u=i*.815,h=i*.37;if(n.save(),n.translate(t,e),o==="tilt"&&n.rotate(-.07),n.strokeStyle=s,n.lineWidth=h,n.lineCap="butt",o==="solid")n.fillStyle=s,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill();else if(o==="gap")for(const[m,g]of[[-Math.PI*.86,-Math.PI*.2],[-Math.PI*.08,Math.PI*1.02]])n.beginPath(),n.arc(0,0,u,m,g),n.stroke();else n.beginPath(),n.arc(0,0,u,0,Math.PI*2),n.stroke();if(o==="double"&&(n.lineWidth=h*.32,n.beginPath(),n.arc(0,0,u*.5,0,Math.PI*2),n.stroke()),r.frame){n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.03);for(const m of[i,i*.63])n.beginPath(),n.arc(0,0,m,0,Math.PI*2),n.stroke()}const f=o==="low"?i*.22:0;if(n.fillStyle=a,n.fillRect(-c,f-l/2,c*2,l),r.frame&&(n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.035),n.strokeRect(-c,f-l/2,c*2,l)),r.name){const m=String(r.name).toUpperCase();n.fillStyle=r.text||qs.text,n.textAlign="center",n.textBaseline="middle";const g=l*.78;try{n.letterSpacing=`${(g*.05).toFixed(1)}px`}catch{}$e(n,m,c*2-l*.5,g,ve),o==="mirror"&&n.scale(-1,1),n.fillText(m,0,f+l*.05);try{n.letterSpacing="0px"}catch{}}n.restore()}function ha(n,t,e,i,r={}){n.fillStyle=qs.panel,n.fillRect(0,0,t,e);const s=Math.max(2,Math.min(t,e)*.035);n.strokeStyle="#6d7275",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const a=Math.min(t*.9/2.52,e*.38);Ml(n,t/2,e/2,a,{name:i,...r})}const uh=["tilt","double","solid","swap","gap","low","mirror"],ke=n=>document.getElementById(n);function Xc(n,t){if(!n)return;const e=An(360,200);Ml(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function v_(){const n=ke("title"),t=ke("pause"),e=ke("end"),i=ke("touch"),r=ke("fade"),s=(o,l)=>o.classList.toggle("hidden",!l);return{drawMarks(){Xc(ke("title-mark"),"Mind the Gap"),Xc(ke("end-mark"),"Way out")},showTitle(){s(n,!0),s(t,!1),s(e,!1),s(i,!1)},showPlaying(o){s(n,!1),s(t,!1),s(e,!1),s(i,!!o),r.classList.remove("on")},showPause(){s(t,!0),s(i,!1)},whiteOut(){r.classList.remove("black"),r.classList.add("on")},showEnd(o){const l=ke("end-stats");l.replaceChildren();for(const[c,u]of o){const h=document.createElement("dt");h.textContent=c;const f=document.createElement("dd");f.textContent=u,l.append(h,f)}s(e,!0),s(i,!1),s(t,!1),setTimeout(()=>r.classList.remove("on"),400)},onStart(o){ke("btn-start").addEventListener("click",o)},onResume(o){ke("btn-resume").addEventListener("click",o)},onAgain(o){ke("btn-again").addEventListener("click",o)},onVoice(o){const l=ke("opt-voice");l.addEventListener("change",()=>o(l.checked))},onHQ(o){const l=ke("opt-hq");l.addEventListener("change",()=>o(l.checked))},setLoading(o){const l=ke("btn-start");l.disabled=!!o,l.textContent=o?"Loading…":"Press to begin"}}}const x_=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,y_=`
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
}`;function M_(n,t){const e=new wn({vertexShader:x_,fragmentShader:y_,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new Zt(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new Kn;i.setAttribute("position",new De(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new De(new Float32Array([0,0,2,0,0,2]),2));const r=new en(i,e);r.frustumCulled=!1;const s=new ah;s.add(r);const a=new th(-1,1,1,-1,0,1);return{scene:s,camera:a,uniforms:e.uniforms,material:e}}class S_{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new Yg({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=Ni,this.gl.autoClear=!0,this.gl.setClearColor(new jt().setRGB(...Yt.fogColor),1),this.target=new pi(64,64,{minFilter:Ae,magFilter:Ae,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Xe,this.dv=M_(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,r=this.mobile?1280:2200;let s=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);s=Math.min(s,r/Math.max(t,e)),this.gl.setPixelRatio(s),this.gl.setSize(t,e,!1);let a=this.mobile?Yt.internalHMobile:Yt.internalH;this.hq&&(a=Math.round(a*1.45));let o,l;i>=1?(l=a,o=Math.round(a*Math.min(i,2.4))):(o=Math.round(a*.8),l=Math.round(o/Math.max(i,.42))),this.target.setSize(o,l),this.dv.uniforms.uInRes.value.set(o,l),this.overlay.resize(o,l),this.width=t,this.height=e,this.aspect=i,this.iw=o,this.ih=l}render(t,e,i){const r=this.gl;this.dv.uniforms.uTime.value=i%1e3,r.setRenderTarget(this.target),r.render(t,e),this.drawCalls=r.info.render.calls,this.triangles=r.info.render.triangles,r.setRenderTarget(null),r.render(this.dv.scene,this.dv.camera)}}const Pr=n=>String(n).padStart(2,"0");class b_{constructor(){this.canvas=An(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new ca(this.canvas),this.texture.colorSpace=Xe,this.texture.generateMipmaps=!1,this.texture.minFilter=Ae,this.texture.magFilter=Ae,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,r,s="left",a="#fff"){const o=this.ctx;o.font=`400 ${r}px ${cr}`,o.textAlign=s,o.textBaseline="alphabetic",o.lineWidth=Math.max(2,r*.16),o.strokeStyle="rgba(0,0,0,0.85)",o.lineJoin="round",o.strokeText(t,e,i),o.fillStyle=a,o.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,r=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(r===this.sig)return;this.sig=r;const s=this.ctx,a=this.canvas.width,o=this.canvas.height;s.clearRect(0,0,a,o);const l=o>a,c=Math.min(a,o)/(l?300:400),u=18*c,h=22*c;if(t.live){i&&(s.fillStyle="#ff2a1a",s.beginPath(),s.arc(u+h*2.05,u+h*.42,h*.3,0,7),s.fill()),this.text("REC",u,u+h*.75,h,"left","#fff");const g=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${g}:${Pr(_)}:${Pr(d)}`,u,u+h*1.75,h*.9);const p=a-u-h*1.9,y=u+h*.12;s.strokeStyle="#fff",s.lineWidth=Math.max(2,c*2),s.strokeRect(p,y,h*1.7,h*.66),s.fillStyle="#fff",s.fillRect(p+h*1.7,y+h*.2,h*.14,h*.26);const v=Math.max(1,3-Math.floor(e/600));for(let A=0;A<v;A++)s.fillRect(p+h*.12+A*h*.52,y+h*.12,h*.4,h*.42);this.text("SP",p-h*.5,u+h*.75,h,"right");const x=t.date,C=x.getHours()%12||12,E=x.getHours()<12?"AM":"PM",T=this.mobile?u+h*2.75:o-u;this.text(`${__[x.getMonth()]} ${Pr(x.getDate())} ${x.getFullYear()}`,a-u,T-h*1.05,h,"right"),this.text(`${C}:${Pr(x.getMinutes())}:${Pr(x.getSeconds())} ${E}`,a-u,T,h,"right"),s.strokeStyle="rgba(255,255,255,0.55)",s.lineWidth=Math.max(1.5,c*1.5);const P=a/2,S=o/2,M=7*c;if(s.beginPath(),s.moveTo(P-M,S),s.lineTo(P-M*.35,S),s.moveTo(P+M*.35,S),s.lineTo(P+M,S),s.moveTo(P,S-M),s.lineTo(P,S-M*.35),s.moveTo(P,S+M*.35),s.lineTo(P,S+M),s.stroke(),t.zoom>.05){const A=u,U=this.mobile?u+h*3:o-u-h*.3,L=h*4;this.text("W",A,U,h*.8),this.text("T",A+L+h*.9,U,h*.8),s.strokeStyle="#fff",s.strokeRect(A+h*.6,U-h*.45,L,h*.36),s.fillStyle="#fff",s.fillRect(A+h*.6,U-h*.45,L*t.zoom,h*.36)}}const f=(l?21:24)*c;let m=o-u-h*(l?2.6:2.3);if(this.mobile&&(m=o*(l?.74:.86)),t.reading){const g=t.reading.text.length>170;let _=g?f*.74:f,d;for(let C=0;C<6&&(s.font=`400 ${_}px ${cr}`,d=Zr(s,t.reading.text,a*(g?.9:.8)),!((d.length+1.6)*_*1.02<o*(l?.42:.46)));C++)_*=.9;const p=(d.length+(t.reading.title?1.3:.3))*_*1.02+_*.5,y=g?m-p+(this.mobile?0:h*1.1):Math.min(m-p,o*.62),v=g?a*.03:a*.07;s.fillStyle=`rgba(0,0,0,${g?.72:.62})`,s.fillRect(v,y,a-v*2,p);let x=y+_*1;t.reading.title&&(this.text(t.reading.title,a/2,x,_*.82,"center","#ffd329"),x+=_*1.1);for(const C of d)this.text(C,g?v+_*.6:a/2,x,_,g?"left":"center"),x+=_*1.02;m=y-f*.4}else t.prompt&&this.text(t.prompt,a/2,o*.5+34*c,f*.9,"center","#ffd329");if(t.caption){s.font=`400 ${f}px ${cr}`;const g=Zr(s,t.caption,a*.84);let _=m-(g.length-1)*f*1.02;t.captionTag&&this.text(t.captionTag,a/2,_-f*1.08,f*.8,"center","#9fd8ff");for(const d of g)this.text(d,a/2,_,f,"center"),_+=f*1.02}t.hint&&this.text(t.hint,a/2,u+h*3.2,f*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const E_=`
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
}`,T_=`
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
}`,zr={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new jt().setRGB(...Yt.fogColor)},uFogDensity:{value:Yt.fogDensity}};function hh(n,t,e=!1,i=null){const r={};return e&&(r.CUTOUT=1),i&&(r.CLIP=1),new wn({defines:r,vertexShader:E_,fragmentShader:T_,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:zr.uPower,uCam:zr.uCam,uFogColor:zr.uFogColor,uFogDensity:zr.uFogDensity,...i?{uClip:i}:{}},side:$n})}const qc=[1,1,1],ai=new W,Cs=new W,$c=new It;function fh(n,t,e){const i=Math.cos(e.yaw),r=Math.sin(e.yaw);for(let s=0;s<t.length;s+=3){const a=t[s],o=t[s+1],l=t[s+2];n[s]=e.x+a*i+l*r,n[s+1]=e.y+o,n[s+2]=e.z-a*r+l*i}}class dh{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&($c.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new he().makeScale(-1,1,1):null)}place(t,e,i,r=0){const s=new he().makeRotationY(r);return s.setPosition(t,e,i),this.setXf(s)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}_vert(t,e,i,r,s,a){this.m?(ai.set(e[0],e[1],e[2]).applyMatrix4(this.m),Cs.set(i[0],i[1],i[2]).applyMatrix3($c),t.pos.push(ai.x,ai.y,ai.z),t.nrm.push(Cs.x,Cs.y,Cs.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(r,s);const o=a&&a.tint||qc;return t.tint.push(o[0],o[1],o[2]),t.emit.push(a&&a.emit!==void 0?a.emit+(a.flick?1e3:0):-1),t.n++}quad(t,e,i,r,s,a,o,l){return this.quadN(t,e,i,r,s,a,a,a,a,a,o,l)}quadN(t,e,i,r,s,a,o,l,c,u,h,f){const m=this._layer(t),g=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],p=r[0]-e[0],y=r[1]-e[1],v=r[2]-e[2],x=_*v-d*y,C=d*p-g*v,E=g*y-_*p,T=x*a[0]+C*a[1]+E*a[2]>=0!=!!this.flip,P=this._vert(m,e,o,h[0],h[1],f),S=this._vert(m,i,l,h[2],h[1],f),M=this._vert(m,r,c,h[2],h[3],f),A=this._vert(m,s,u,h[0],h[3],f);T?m.idx.push(P,S,M,P,M,A):m.idx.push(P,M,S,P,A,M)}quadUV(t,e,i,r,s,a,o,l,c,u,h){const f=this._layer(t),m=i[0]-e[0],g=i[1]-e[1],_=i[2]-e[2],d=r[0]-e[0],p=r[1]-e[1],y=r[2]-e[2],v=(g*y-_*p)*a[0]+(_*d-m*y)*a[1]+(m*p-g*d)*a[2]>=0!=!!this.flip,x=this._vert(f,e,a,o[0],o[1],h),C=this._vert(f,i,a,l[0],l[1],h),E=this._vert(f,r,a,c[0],c[1],h),T=this._vert(f,s,a,u[0],u[1],h);v?f.idx.push(x,C,E,x,E,T):f.idx.push(x,E,C,x,T,E)}tri(t,e,i,r,s,a,o,l,c){const u=this._layer(t),h=i[0]-e[0],f=i[1]-e[1],m=i[2]-e[2],g=r[0]-e[0],_=r[1]-e[1],d=r[2]-e[2],p=(f*d-m*_)*s[0]+(m*g-h*d)*s[1]+(h*_-f*g)*s[2]>=0!=!!this.flip,y=this._vert(u,e,s,a[0],a[1],c),v=this._vert(u,i,s,o[0],o[1],c),x=this._vert(u,r,s,l[0],l[1],c);p?u.idx.push(y,v,x):u.idx.push(y,x,v)}grid(t,e,i,r,s,a,o,l,c,u=!1){for(let h=0;h<s;h++)for(let f=0;f<a;f++){const m=(v,x)=>[e[0]+i[0]*v+r[0]*x,e[1]+i[1]*v+r[1]*x,e[2]+i[2]*v+r[2]*x],g=h/s,_=(h+1)/s,d=f/a,p=(f+1)/a,y=u?l:[l[0]+(l[2]-l[0])*g,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*p];this.quad(t,m(g,d),m(_,d),m(_,p),m(g,p),o,y,c)}}box(t,e,i,r,s,a,o,l,c,u="xXyYzZ"){const h=(f,m,g,_,d)=>this.quad(t,f,m,g,_,d,l,c);u.includes("x")&&h([e,i,o],[e,i,r],[e,a,r],[e,a,o],[-1,0,0]),u.includes("X")&&h([s,i,r],[s,i,o],[s,a,o],[s,a,r],[1,0,0]),u.includes("y")&&h([e,i,r],[s,i,r],[s,i,o],[e,i,o],[0,-1,0]),u.includes("Y")&&h([e,a,r],[s,a,r],[s,a,o],[e,a,o],[0,1,0]),u.includes("z")&&h([s,i,r],[e,i,r],[e,a,r],[s,a,r],[0,0,-1]),u.includes("Z")&&h([e,i,o],[s,i,o],[s,a,o],[e,a,o],[0,0,1])}addLight(t,e,i,r=1,s=7,a=!1,o=qc){this.m&&(ai.set(t,e,i).applyMatrix4(this.m),t=ai.x,e=ai.y,i=ai.z),this.lights.push({x:t,y:e,z:i,i:r,r2:s*s,flicker:a,color:o})}addPortal(t,e,i,r){this.portals.push({x:t,y:e,z:i,dx:Math.sin(r),dz:Math.cos(r)})}_lightAt(t,e,i,r,s,a,o){const l=o.x-t,c=o.y-e,u=o.z-i,h=l*l+c*c+u*u;if(h>=o.r2)return 0;const f=(1-h/o.r2)**2,m=1/Math.sqrt(h+1e-6),g=Math.max(0,(r*l+s*c+a*u)*m);return o.i*f*(.38+.62*g)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(s=>({x:s.x,y:s.y+2.3,z:s.z,i:.85,r2:36})),r={};for(const s of Object.keys(this.layers)){const a=this.layers[s],o=new Uint8Array(a.n*4);for(let u=0;u<a.n;u++){const h=a.tint[u*3],f=a.tint[u*3+1],m=a.tint[u*3+2];let g,_,d,p=0;const y=a.emit[u];if(y>=0){const v=y>=1e3,x=v?y-1e3:y,C=v?.1:1;g=h*x*C,_=f*x*C,d=m*x*C,p=v?x*.9:0}else{const v=a.pos[u*3],x=a.pos[u*3+1],C=a.pos[u*3+2],E=a.nrm[u*3],T=a.nrm[u*3+1],P=a.nrm[u*3+2];let S=1;for(const M of this.portals){const A=Math.abs((v-M.x)*M.dx+(C-M.z)*M.dz),U=Math.abs((v-M.x)*M.dz-(C-M.z)*M.dx),L=Math.hypot(U,Math.max(0,x-M.y-2.2));U<4&&Math.abs(x-M.y)<5&&(S=Math.min(S,Math.max(Wc(.1,2.4,A),Wc(1.7,2.9,L))))}g=t[0],_=t[1],d=t[2];for(const M of this.lights){const A=this._lightAt(v,x,C,E,T,P,M)*S;A<=0||(M.flicker?p+=A:(g+=A*M.color[0],_+=A*M.color[1],d+=A*M.color[2]))}for(const M of i){const A=this._lightAt(v,x,C,E,T,P,M);g+=A,_+=A*.98,d+=A*.93}g*=h,_*=f,d*=m,p*=(h+f+m)/3}o[u*4]=Math.min(255,g*127.5),o[u*4+1]=Math.min(255,_*127.5),o[u*4+2]=Math.min(255,d*127.5),o[u*4+3]=Math.min(255,p*127.5)}const l=new Kn,c=new Float32Array(a.pos);e&&fh(c,a.pos,e),l.userData.local=a.pos,l.setAttribute("position",new De(c,3)),l.setAttribute("uv",new De(new Float32Array(a.uv),2)),l.setAttribute("aLight",new De(o,4,!0)),l.setIndex(new De(a.n>65535?new Uint32Array(a.idx):new Uint16Array(a.idx),1)),l.computeBoundingSphere(),r[s]=l}return r}}let w_=1;const A_=new Set(["sheet","cut","gate","figure"]);function Yc(n,t,e){const i=Math.cos(e),r=Math.sin(e);let s=1/0,a=-1/0,o=1/0,l=-1/0;for(const[c,u]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const h=t.x+c*i+u*r,f=t.z-c*r+u*i;s=Math.min(s,h),a=Math.max(a,h),o=Math.min(o,f),l=Math.max(l,f)}return[s,t.y+n[1],o,a,t.y+n[4],l]}function jc(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}class R_{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const r=new Re(i),s=t.plan(r,e),a=this._make(t,s,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=a,this.refresh(!0),a}_make(t,e,i,r,s,a,o,l){const c={id:w_++,def:t,p:e.p,env:i,seed:l,pos:r,yaw:s,parent:a,exitIndex:o,exits:e.exits.map(u=>({...u,child:null})),box:Yc(e.box,r,s),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((u,h)=>Math.max(u,Math.hypot(h.x,h.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],r=Math.cos(t.yaw),s=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*r+i.z*s,y:t.pos.y+i.y,z:t.pos.z-i.x*s+i.z*r},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&jc(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:r,yaw:s}=this.exitPose(t,e);let a=null;for(let o=0;o<14;o++){const l=nn(t.seed,e*31+o*977+1),c=new Re(l),u=this.hooks.choose(t,e,o,c);if(!u)break;const h=u.def.plan(c,u.env);a||(a={pick:u,plan:h,seed:l});const f=Yc(h.box,r,s);if(!(!u.force&&!this._fits(f,t)))return i.child=this._make(u.def,h,u.env,r,s,t,e,l),i.child}return this.stats.deadEnds++,a?(i.child=this._make(a.pick.def,a.plan,a.pick.env,r,s,t,e,a.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=Yt.ahead,i=Yt.sight||46,r=7;for(const o of this.nodes.values())o.dist=1/0,o.path=1/0;const s=[this.current];this.current.dist=0,this.current.path=0;const a=o=>o.dist<=e||o.path<=i&&o.dist<=r;for(;s.length;){const o=s.shift();if(o.dist<e||o.path<i&&o.dist<r)for(let l=0;l<o.exits.length;l++)this.expand(o,l);for(const l of this.neighbours(o))l.dist>o.dist+1&&(l.dist=o.dist+1,l.path=o===this.current?0:o.path+(o.span||8),s.push(l))}for(const o of this.nodes.values())a(o)&&!o.built&&!this.buildQueue.includes(o)?this.buildQueue.push(o):o.built&&o.dist>e+1&&o.path>i+10&&this.unbuild(o);if(this.buildQueue.sort((o,l)=>o.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift());this.cull()}cull(){const t=[...this.nodes.values()].filter(i=>i.built).sort((i,r)=>i.dist-r.dist),e=[];for(const i of t){const r=a=>a.parent===i||i.parent===a,s=i.dist>1&&e.some(a=>!r(a)&&jc(i.box,a.box,.4));i.built.group.visible=!s,i.hiddenByFold=s,s||e.push(i)}}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),this.cull(),!0}return!1}build(t){if(t.built)return;const e=new dh,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,r={b:e,p:t.p,rng:new Re(nn(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},s=t.def.build(r)||{},a=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),o=new kr;o.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(a)){const u=c==="sheet"?l:this.hooks.textures(c,t),h=new en(a[c],hh(u,t.flick,A_.has(c)));h.matrixAutoUpdate=!1,h.name=c,c==="gate"&&(h.visible=!!t.gateShut),c==="figure"&&(h.visible=!t.figureGone),o.add(h)}this.scene.add(o),o.updateMatrixWorld(!0),t.built={group:o,sheetTex:l,cells:s.cells||[],walls:s.walls||[],items:s.items||[],frames:s.frames||null,extra:s.extra||null,gate:o.children.find(c=>c.name==="gate")||null,figure:o.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const r of e.children)r.geometry.dispose(),r.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const r of this.nodes.values())if(r.pos.x-=t,r.pos.y-=e,r.pos.z-=i,r.box[0]-=t,r.box[3]-=t,r.box[1]-=e,r.box[4]-=e,r.box[2]-=i,r.box[5]-=i,!!r.built)for(const s of r.built.group.children){const a=s.geometry.attributes.position;fh(a.array,s.geometry.userData.local,{x:r.pos.x,y:r.pos.y,z:r.pos.z,yaw:r.yaw}),a.needsUpdate=!0,s.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const r=i.pop();if(this.nodes.has(r.id)){this.unbuild(r),this.nodes.delete(r.id);for(const s of this.neighbours(r))s!==e&&this.nodes.has(s.id)&&i.push(s)}}}}function fa(n,t,e){const i=t-n.pos.x,r=e-n.pos.z,s=Math.cos(n.yaw),a=Math.sin(n.yaw);return[i*s-r*a,i*a+r*s]}function ur(n,t,e,i){const r=Math.cos(n.yaw),s=Math.sin(n.yaw);return[n.pos.x+t*r+i*s,n.pos.y+e,n.pos.z-t*s+i*r]}function Ya(n,t,e,i,r=.02){if(!n.built)return null;const[s,a]=fa(n,t,e);let o=null,l=1.6;for(const c of n.built.cells){const u=c.bx-c.ax,h=c.bz-c.az,f=u*u+h*h,m=((s-c.ax)*u+(a-c.az)*h)/f;if(m<-r||m>1+r||Math.abs((s-c.ax)*h-(a-c.az)*u)/Math.sqrt(f)>c.hw+r)continue;const _=m<0?0:m>1?1:m,d=n.pos.y+c.ya+(c.yb-c.ya)*_,p=Math.abs(d-i);p<l&&(l=p,o={y:d,cell:c,t:_})}return o}function Ps(n,t,e,i){const r=n.current;let s=Ya(r,t,e,i);if(s)return{node:r,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))if(s=Ya(a,t,e,i),s)return{node:a,y:s.y,cell:s.cell,t:s.t};for(const a of n.neighbours(r))for(const o of n.neighbours(a))if(o!==r&&(s=Ya(o,t,e,i),s))return{node:o,y:s.y,cell:s.cell,t:s.t};return null}function C_(n,t,e){if(!n.built)return!1;let[i,r]=fa(n,t.x,t.z),s=!1;const a=t.y-n.pos.y;for(const o of n.built.walls){if(o.length>4&&(a<o[4]||a>o[5]))continue;const l=o[2]-o[0],c=o[3]-o[1],u=l*l+c*c;let h=u>0?((i-o[0])*l+(r-o[1])*c)/u:0;h=h<0?0:h>1?1:h;const f=o[0]+l*h,m=o[1]+c*h,g=i-f,_=r-m,d=g*g+_*_;if(d<e*e&&d>1e-9){const p=Math.sqrt(d),y=(e-p)/p;i+=g*y,r+=_*y,s=!0}}if(s){const o=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*o+r*l,t.z=n.pos.z-i*l+r*o}return s}function ja(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let r=0;r<2;r++){let s=!1;for(const a of i)s=C_(a,t,e)||s;if(!s)break}}function P_(n,t,e,i,r){const s=t.x,a=t.z;t.x+=e,t.z+=i,ja(n,t,r);let o=Ps(n,t.x,t.z,t.y);return!o&&(t.x=s+e,t.z=a,ja(n,t,r),o=Ps(n,t.x,t.z,t.y),o||(t.x=s,t.z=a+i,ja(n,t,r),o=Ps(n,t.x,t.z,t.y)),!o)?(t.x=s,t.z=a,Ps(n,s,a,t.y)):o}class L_{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=Yt.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null}spawn(t,e,i,r){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=r+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+Yt.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=Ue(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let r=e.mx,s=e.mz;const a=Math.hypot(r,s);a>1&&(r/=a,s/=a);const o=e.run&&s>.3,l=(o?Yt.run:Yt.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),u=Math.cos(this.yaw),h=(-c*s+u*r)*l,f=(-u*s-c*r)*l,m=a>.01?9:12;this.vx=Ci(this.vx,h,m,t),this.vz=Ci(this.vz,f,m,t);const g=this.pos.x,_=this.pos.z,d=P_(i,this.pos,this.vx*t,this.vz*t,Yt.radius);let p=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const y=Math.hypot(this.pos.x-g,this.pos.z-_);this.speed=y/Math.max(t,1e-4),this.walked+=y;const v=o?1.05:.74,x=Math.floor(this.stepDist/v);this.stepDist+=y,Math.floor(this.stepDist/v)!==x&&(p=!0),this.zoom=Ci(this.zoom,this.zoomTarget,7,t);const C=this.pos.y+Yt.eye;this.eyeY=Ci(this.eyeY,C,16,t);const E=this.stepDist/v*Math.PI,T=Ue(this.speed/Yt.walk,0,1.6),P=-Math.abs(Math.sin(E))*.035*T,S=Math.sin(E)*.018*T,M=this.t,A=Se(M*.55,11)*.011+Se(M*2.3,12)*.003,U=Se(M*.47,21)*.012+Se(M*2.7,22)*.003,L=this.shake||0,D=Se(M*.4,31)*.01+Math.sin(E)*.006*T+Se(M*23,43)*.012*L,F=this.camera;F.position.set(this.pos.x+u*S,this.eyeY+P,this.pos.z-c*S),F.rotation.set(this.pitch+A*(1-.6*this.zoom)+Se(M*29,41)*.009*L,this.yaw+U*(1-.6*this.zoom)+Se(M*31,42)*.007*L,D);const X=Yt.fov-36*this.zoom;return Math.abs(F.fov-X)>.01&&(F.fov=X,F.updateProjectionMatrix()),{step:p,running:o}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function D_(n,t,e){const i=new Set,r=()=>{const o=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=o,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",o=>{o.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(o.code)&&o.preventDefault(),i.add(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!0),(o.code==="KeyP"||o.code==="Escape"&&!s())&&e.pause())}),window.addEventListener("keyup",o=>{i.delete(o.code),r(),(o.code==="KeyE"||o.code==="Space"||o.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),r()});function s(){return document.pointerLockElement===t}const a=()=>{if(!(s()||!t.requestPointerLock))try{const o=t.requestPointerLock();o&&o.catch&&o.catch(()=>{})}catch{}};return document.addEventListener("mousemove",o=>{if(!s())return;const l=.0022;Math.abs(o.movementX)>400||Math.abs(o.movementY)>400||(n.lookX+=o.movementX*l,n.lookY+=o.movementY*l)}),t.addEventListener("mousedown",o=>{if(!s()){a();return}o.button===0&&e.use(!0)}),window.addEventListener("mouseup",o=>{o.button===0&&s()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(s())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:a,locked:s,release:()=>{s()&&document.exitPointerLock()}}}function I_(n,t){const e=T=>document.getElementById(T),i=e("stick-zone"),r=e("look-zone"),s=e("stick-base"),a=e("stick-knob"),o=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!r)return{reset(){}};const u=52;let h=null,f=0,m=0,g=null,_=0,d=0,p=!1;const y=(T,P)=>{a.style.transform=`translate(${T}px, ${P}px)`},v=()=>{h=null,n.tmx=0,n.tmz=0,n.trun=p,y(0,0),s.style.left="",s.style.top="",s.style.bottom=""};i.addEventListener("pointerdown",T=>{if(h!==null)return;h=T.pointerId,f=T.clientX,m=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}const P=s.offsetWidth,S=s.offsetHeight;s.style.left=`${f-P/2}px`,s.style.top=`${m-S/2}px`,s.style.bottom="auto",T.preventDefault()}),i.addEventListener("pointermove",T=>{if(T.pointerId!==h)return;let P=T.clientX-f,S=T.clientY-m;const M=Math.hypot(P,S);M>u&&(P*=u/M,S*=u/M),y(P,S);const A=.12,U=P/u,L=S/u;n.tmx=Math.abs(U)<A?0:U,n.tmz=Math.abs(L)<A?0:-L,n.trun=p||M>u*1.35,T.preventDefault()});const x=T=>{T.pointerId===h&&v()};i.addEventListener("pointerup",x),i.addEventListener("pointercancel",x),r.addEventListener("pointerdown",T=>{if(g===null){g=T.pointerId,_=T.clientX,d=T.clientY;try{r.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),r.addEventListener("pointermove",T=>{if(T.pointerId!==g)return;const P=.0052;n.lookX+=(T.clientX-_)*P,n.lookY+=(T.clientY-d)*P,_=T.clientX,d=T.clientY,T.preventDefault()});const C=T=>{T.pointerId===g&&(g=null)};r.addEventListener("pointerup",C),r.addEventListener("pointercancel",C),((T,P,S)=>{T.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),T.classList.add("on"),P()});const M=A=>{A.preventDefault(),T.classList.remove("on"),S&&S()};T.addEventListener("pointerup",M),T.addEventListener("pointercancel",M)})(o,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),p=!p,n.trun=p,l.classList.toggle("on",p)}),c.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()});for(const T of["touchstart","touchmove","gesturestart"])document.addEventListener(T,P=>{P.target.closest&&P.target.closest("#touch")&&P.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",T=>T.preventDefault()),{reset:()=>{v(),g=null}}}function Sl(n=Yt.passW,t=Yt.passSpring,e=Yt.passCrown,i=5,r=2){const s=[],a=n/2,o=e-t;for(let u=0;u<=r;u++)s.push({x:-a,y:t*u/r,nx:1,ny:0});for(let u=1;u<=i;u++){const h=Math.PI/2*(u/i),f=-a*Math.cos(h),m=t+o*Math.sin(h);let g=-f/(a*a),_=-(m-t)/(o*o);const d=Math.hypot(g,_)||1;s.push({x:f,y:m,nx:g/d,ny:_/d})}let l=0;s[0].s=0;for(let u=1;u<s.length;u++)l+=Math.hypot(s[u].x-s[u-1].x,s[u].y-s[u-1].y),s[u].s=l;const c=s.map(u=>({...u,v:u.s/l}));for(let u=s.length-2;u>=0;u--){const h=s[u];c.push({x:-h.x,y:h.y,nx:-h.nx,ny:h.ny,s:h.s,v:h.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const Lt=Sl();function U_(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),r=[];for(let s=0;s<=i;s++){const a=n*s/i;r.push({x:0,y:e?e(a):0,z:a,yaw:0})}return r}function N_(n,t,e=1){const i=Math.sign(t)||1,r=Math.abs(t),s=Math.max(2,Math.round(n*r/e)),a=[];for(let o=0;o<=s;o++){const l=r*o/s;a.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return a}function _e(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function Ls(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function di(n,t,e,i={}){const r=i.layer||"tile",s=i.uPeriod||6,[a,o]=i.vRange||[.004,.996],l=[i.u0||0];for(let f=1;f<t.length;f++){const m=t[f-1],g=t[f];l.push(l[f-1]+Math.hypot(g.x-m.x,g.z-m.z))}const c=[],u=[],h=e.W/2;for(let f=0;f<t.length-1;f++){const m=t[f],g=t[f+1],_=l[f]/s,d=l[f+1]/s;for(let p=0;p<e.length-1;p++){const y=e[p],v=e[p+1],x=Ls(m,y.nx,y.ny),C=Ls(g,y.nx,y.ny),E=Ls(g,v.nx,v.ny),T=Ls(m,v.nx,v.ny),P=[(x[0]+E[0])/2,(x[1]+E[1])/2,(x[2]+E[2])/2];n.quadN(r,_e(m,y.x,y.y),_e(g,y.x,y.y),_e(g,v.x,v.y),_e(m,v.x,v.y),P,x,C,E,T,[_,a+(o-a)*y.v,d,a+(o-a)*v.v],i.wallOpts)}if(i.floor){const p=Math.max(1,Math.round(e.W));for(let y=0;y<p;y++){const v=-h+e.W*y/p,x=-h+e.W*(y+1)/p;n.quad("atlas",_e(m,v,0),_e(m,x,0),_e(g,x,0),_e(g,v,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:m.x,az:m.z,bx:g.x,bz:g.z,hw:h,ya:m.y,yb:g.y});for(const p of[-1,1]){const y=_e(m,p*h,0),v=_e(g,p*h,0);u.push([y[0],y[2],v[0],v[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:u,dist:l}}function bl(n,t=.25){const e=n[0],i=n[n.length-1],r=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return r.W=n.W,r.crown=n.crown,r.spring=n.spring,r.len=n.len,r}function ph(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function xr(n,t,e,i,r,s,a,o){const l=[Math.sin(t.yaw)*r,0,Math.cos(t.yaw)*r],c=a||((g,_)=>[g/6,.004+_/3.63*.992]),u=g=>_e(t,g.x,g.y),h=g=>c(g.x,g.y),f=e.length,m=(g,_,d,p)=>n.quadUV(s,u(g),u(_),u(d),u(p),l,h(g),h(_),h(d),h(p),o);if(i)for(let g=0;g<f-1;g++)m(e[g],e[g+1],i[g+1],i[g]);else for(let g=0;g<Math.floor((f-1)/2);g++)m(e[g],e[g+1],e[f-2-g],e[f-1-g])}function be(n,t,e,i,r,s=.12,a=.08){for(let o=0;o<r;o++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,s)})`:`rgba(255,255,255,${i.range(.02,a)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const te=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},F_={floor(n,t,e,i){te(n,t,e,"#77746b");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}be(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){te(n,t,e,"#3d3c39");const r=4,s=t/r;for(let a=0;a<r;a++)for(let o=0;o<r;o++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(a*s+1,o*s+1,s-2,s-2)}be(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){te(n,t,e,"#a9a493"),be(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){te(n,t,e,"#c9a94a"),be(n,t,e,i,500,.12,.06);const r=6,s=t/r;for(let a=0;a<r;a++)for(let o=-1;o<r;o++){const l=(o+.5+(a%2?.5:0))*s,c=(a+.5)*s;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,s*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,s*.25,0,7),n.fill()}},yellow(n,t,e,i){te(n,t,e,"#e2b81e"),be(n,t,e,i,700,.22,.05)},white(n,t,e){te(n,t,e,"#ffffff")},black(n,t,e){te(n,t,e,"#0b0b0b")},blackout(n,t,e){te(n,t,e,"#000000")},navy(n,t,e,i){te(n,t,e,"#14213d"),be(n,t,e,i,200,.1,.04)},cream(n,t,e,i){te(n,t,e,"#e6dfc6"),be(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){te(n,t,e,"#2a2c2e"),be(n,t,e,i,200,.1,.05)},metal(n,t,e,i){te(n,t,e,"#9aa0a3");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,r,t,1)},steelDark(n,t,e,i){te(n,t,e,"#3b3f42");for(let r=0;r<e;r++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,r,t,1)},wood(n,t,e,i){te(n,t,e,"#6b4526");for(let r=0;r<90;r++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let r=1;r<4;r++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,r*e/4-1,t,2)},rubber(n,t,e,i){te(n,t,e,"#161616"),be(n,t,e,i,200,.2,.08)},tread(n,t,e){te(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){te(n,t,e,"#6f6c64"),be(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let r=0;r<t;r+=8)n.fillRect(r,4,4,8)},riser(n,t,e,i){te(n,t,e,"#4a4843"),be(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){te(n,t,e,"#1f1d1a"),be(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){te(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),be(n,t,e,i,300,.2,.1)},grille(n,t,e){te(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){te(n,t,e,"#3a3936"),be(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${ve}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),be(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){te(n,t,e,"#e3dfd0"),be(n,t,e,i,900,.25,.04)},cable(n,t,e,i){te(n,t,e,"#23211e"),be(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((s,a)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][a],n.fillRect(0,e*s,t,a%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*s,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){te(n,t,e,"#141311"),be(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let r=1;r<4;r++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,r*e/4,t,2)},lamp(n,t,e){te(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){te(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let r=20+i/8%2*4;r<t-16;r+=8)n.fillRect(r,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){te(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){te(n,t,e,"#7d8386"),be(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},Za=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},O_={door(n,t,e,i){Za(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${En}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let r=0;r<60;r++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,r=t/i;for(let o=0;o<=i;o++)n.beginPath(),n.moveTo(o*r,0),n.lineTo(o*r,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const s=5,a=e/s;for(let o=0;o<s;o++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*r,o*a),n.lineTo((l+1)*r,(o+1)*a),n.stroke(),n.beginPath(),n.moveTo((l+1)*r,o*a),n.lineTo(l*r,(o+1)*a),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${ve}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(r,s,a)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,r,t*.2,0,7),n.fill(),n.fillStyle=s,n.beginPath(),n.arc(t/2,r,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${En}`,n.fillText(a,t/2,r+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let r=28;r<t-24;r+=8)n.fillRect(r,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let r=0;r<5;r++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,r*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,r*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const r of[.08,.5,.92])n.fillRect(t*r-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${En}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){Za(n,t,e,"#1d1a17");const r=6,s=t/r;for(let o=0;o<r;o++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(o*s+2,3,s-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(o*s+2,3,s-4,4)}const a=n.createLinearGradient(0,0,0,e);a.addColorStop(0,"rgba(10,8,6,0.08)"),a.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=a,n.fillRect(0,0,t,e);for(let o=0;o<260;o++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){Za(n,t,e,"#6a6f72");for(let r=0;r<e;r+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,r,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,r+9,t,3);for(let r=0;r<120;r++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}},ui=1024,Je=128,mh={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1]};let Lr=null,Ka=null;function k_(){if(Lr)return Lr;Lr=An(ui,ui);const n=Lr.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,ui,ui);const t={...F_,...O_};for(const[e,[i,r,s,a]]of Object.entries(mh)){const o=t[e];n.save(),n.translate(i*Je,r*Je),n.beginPath(),n.rect(0,0,s*Je,a*Je),n.clip(),o?o(n,s*Je,a*Je,new Re(lr(e))):(n.fillStyle="#f0f",n.fillRect(0,0,s*Je,a*Je)),n.restore()}return Lr}function z_(){return Ka||(Ka=xl(k_())),Ka}function Bt(n,t=3){const e=mh[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*Je+t,r=e[1]*Je+t,s=e[2]*Je-t*2,a=e[3]*Je-t*2;return[i/ui,1-(r+a)/ui,(i+s)/ui,1-r/ui]}function Zs(n,t,e,i,r){const s=Bt(n);return[s[0]+(s[2]-s[0])*t,s[1]+(s[3]-s[1])*e,s[0]+(s[2]-s[0])*i,s[1]+(s[3]-s[1])*r]}function ne(n){return Zs(n,.4,.4,.6,.6)}const B_=()=>Bt("lamp"),H_=()=>ne("metal");function Fi(n,t,e,i={}){const r=i.len||1.25,s=.14,a=i.x||0,[o,,l]=_e(t,a,0);n.place(o,t.y+e,l,t.yaw);const u={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-s/2,-.07,-r/2],[s/2,-.07,-r/2],[s/2,-.07,r/2],[-s/2,-.07,r/2],[0,-1,0],B_(),u),n.box("atlas",-s/2,-.07,-r/2,s/2,0,r/2,H_(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(o,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function gh(n,t,e,i,r={}){const s=e[e.length-1]-e[0],a=Math.max(0,Math.round(s/4.4)-1),o=[];for(let l=1;l<=a;l++){const c=e[0]+s*l/(a+1);let u=0;for(;u<e.length-1&&e[u]<c;)u++;const h=t[u];Fi(n,h,i-.04,{dead:!!r.dark,flick:r.faulty===l-1}),o.push(h)}return o}function mi(n,t,e){Fi(n,t,e-.04,{noLight:!0}),Pi(n,t,1.56)}function Pi(n,t,e,i="floor"){const[r,,s]=_e(t,0,0);n.place(r,t.y,s,t.yaw),n.quad("atlas",[-e,-.003,-.16],[e,-.003,-.16],[e,-.003,.16],[-e,-.003,.16],[0,1,0],ne(i)),n.setXf(null)}function Zn(n,t,e,i,r,s,a,o,l,c,u=.02){const h=i*(r-u),f=[h,s,i>0?-a/2:a/2],m=[h,s,i>0?a/2:-a/2],[g,,_]=_e(e,0,0);n.place(g,e.y,_,e.yaw),n.quad(t,f,m,[m[0],s+o,m[2]],[f[0],s+o,f[2]],[-i,0,0],l,c),n.setXf(null);const d=_e(e,h,s+o/2);return{x:d[0],y:d[1],z:d[2]}}function G_(n,t,e,i,r,s,a,o="steelDark",l=.035){const c=ne(o);Zn(n,"atlas",t,e,i,r-l,s+2*l,l,c,null,.03),Zn(n,"atlas",t,e,i,r+a,s+2*l,l,c,null,.03);const[u,,h]=_e(t,0,0);n.place(u,t.y,h,t.yaw);const f=e*(i-.03);for(const m of[-s/2-l,s/2])n.quad("atlas",[f,r,m],[f,r,m+l],[f,r+a,m+l],[f,r+a,m],[-e,0,0],c);n.setXf(null)}function $s(n,t,e,i,r,s,a,o,l,c=0){const[u,,h]=_e(e,c,0);n.place(u,e.y,h,e.yaw),n.quad(t,[r/2,i,-.03],[-r/2,i,-.03],[-r/2,i+s,-.03],[r/2,i+s,-.03],[0,0,-1],a,l),o&&n.quad(t,[-r/2,i,.03],[r/2,i,.03],[r/2,i+s,.03],[-r/2,i+s,.03],[0,0,1],o,l);const f=ne("signBack");n.box("atlas",-r/2,i,-.03,r/2,i+s,.03,f,null,"xXyY");for(const m of[-r*.35,r*.35])n.box("atlas",m-.012,i+s,-.012,m+.012,i+s+.5,.012,f,null,"xXzZ");return n.setXf(null),{x:u,y:e.y+i+s/2,z:h}}const V_=["Ladies and gentlemen, there is a good service on the Northern line.","This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Please stand behind the yellow line, and stand clear of the doors.","Please keep your belongings with you at all times.","Customers are reminded that the last northbound train has departed.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail.","Please stand on the right on the escalators.","See it, say it. Speak to a member of staff, if you can find one."],W_=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on the Northern line, and on all other lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train does not stop at {next}. The next train does not stop.","This is {station}. The next station is {station}."],X_=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","This is North End. This station was never opened. Please do not alight here.","Please do not turn round."],Zo=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.'},{key:"line",title:"STAFF NOTICE",text:"Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. After Hampstead the line comes out into the open air. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards."},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.'},{key:"tiles",title:"STAFF NOTICE",text:"Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line."},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away."},{key:"train",title:"NIGHT STAFF",text:'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"'}],q_=["Service information: Good service on all lines. (All of them?)","Thought for the day: The way out is always signed. Not every sign is the way out.","Thought for the day: If in doubt, listen. Then ask who is speaking.","Service information: This station closed at 00:47. If you are reading this, please leave.","Lost property: one umbrella, one left glove, one passenger.","Thought for the day: A clock is only wrong in one direction.","Northern line: Good service. Bank branch: Good service. This platform: closed.","Thought for the day: Mornington Crescent. (You cannot say that yet.)","Lifts out of service. Please use the 320 steps. Do not count them."],$_=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"],["The Heath","Fresh air, four stops north"],["Night service","Does not run tonight"],["Keep left","Unless it says keep right"],["Lost property","It will turn up at Baker Street"],["Camden Lock Market","Open Sundays. Closed now"]],Y_=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],j_=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function Z_(n,t,e,i,r,s){const[a,o,l]=r;n.fillStyle=a,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=o,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let u=0;u<5;u++)n.fillRect(0,e*(.46+u*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let u=0;u<14;u++){n.fillStyle=u%2?o:l,n.beginPath(),n.moveTo(0,0);const h=Math.PI+u/14*Math.PI,f=Math.PI+(u+1)/14*Math.PI;n.lineTo(Math.cos(h)*t*2,Math.sin(h)*t*2),n.lineTo(Math.cos(f)*t*2,Math.sin(f)*t*2),n.fill()}n.restore(),n.fillStyle=a,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let u=6;u>0;u--)n.fillStyle=u%2?o:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*u/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=o,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=o,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(s){n.fillStyle="rgba(8,8,8,0.92)";const u=t*i.range(.25,.75),h=e*.62,f=e*.12;n.beginPath(),n.ellipse(u,h-f*1.25,f*.2,f*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(u-f*.32,h),n.lineTo(u-f*.22,h-f),n.lineTo(u+f*.22,h-f),n.lineTo(u+f*.32,h),n.fill()}}function is(n,t,e,i,r=!1,s=!1){if(s){const h=Math.max(2,Math.min(t,e)*.035);n.fillStyle="#62676a",n.fillRect(0,0,t,e),n.save(),n.translate(h,h),n.beginPath(),n.rect(0,0,t-2*h,e-2*h),n.clip();const f=is(n,t-2*h,e-2*h,i,r,!1);return n.restore(),f}const a=i.pick(j_),[o,l]=i.pick(r?Y_:$_);Z_(n,t,e,i,a,r);const c=a[2];n.fillStyle=a[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=a[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=a[1]===a[0]?c:a[1],n.font=`400 ${e*.085}px ${ve}`;const u=Zr(n,o,t*.86).slice(0,2);return u.forEach((h,f)=>n.fillText(h,t/2,e*(.775+f*.085)-(u.length-1)*e*.02,t*.9)),n.fillStyle=a[2]===a[0]?"#fff":a[2],$e(n,l,t*.84,e*.045,En,700),n.fillText(l,t/2,e*.93),jr(n,0,0,t,e,i.int(1,99999),.6),{headline:o,strap:l}}function Ko(n,t,e,i,r){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,i.title,t*.86,e*.1,ve),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let s=e*.07,a;for(;n.font=`400 ${s}px ${En}`,a=Zr(n,i.text,t*.86),!(a.length*s*1.25<e*.74||s<5);)s*=.92;a.forEach((o,l)=>n.fillText(o,t*.07,e*.22+l*s*1.25)),n.fillStyle="#b3261e";for(const[o,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*o,e*l+2,Math.max(2,t*.018),0,7),n.fill();r&&jr(n,0,0,t,e,r.int(1,99999),.5)}function K_(n,t,e,i,r){n.fillStyle="#b9bcbd",n.fillRect(0,0,t,e),n.fillStyle="#f7f7f2",n.fillRect(t*.03,e*.04,t*.94,e*.92),n.fillStyle="#14213d",n.fillRect(t*.03,e*.04,t*.94,e*.16),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,"Service information",t*.8,e*.1,ve),n.fillText("Service information",t/2,e*.125),n.fillStyle="#1d2f8a",n.textAlign="left",n.textBaseline="top";let s=e*.09,a;for(;n.font=`italic 400 ${s}px ${En}`,a=Zr(n,i,t*.84),!(a.length*s*1.3<e*.68||s<5);)s*=.92;a.forEach((o,l)=>{n.save(),n.translate(t*.08,e*.25+l*s*1.3),n.rotate(r?r.range(-.02,.02):0),n.fillText(o,0,0),n.restore()})}const Br={exit:{level:0,text:"Exit"},in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},no:{level:0,text:"No way out"},red:{level:0,text:"Way out",bg:"#b3261e",fg:bn.white},blue:{level:1,text:"Way out",bg:bn.blue,fg:bn.white},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a"},serif:{level:2,text:"Way out",font:"Georgia, 'Times New Roman', serif"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function J_(n,t,e=!1){const i=n?Br[n]:null,r={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",s=i?i.text:"Way out";let a=e?" (yellow on black)":" (black on yellow)";if(i&&i.bg===bn.blue)a=" (white on blue)";else if(i&&i.bg==="#b3261e")a=" (white on red)";else if(i&&i.bg)a=" (black on pale green)";else if(i&&i.mirror)a=" (the lettering is back to front)";else{if(i&&i.arrow2)return`↔ ${s}`;i&&i.flipArrow?a=" (the arrow points the other way)":i&&i.font&&(a=" (the lettering has serifs)")}return t==="left"?`${r} ${s}${a}`:`${s} ${r}${a}`}function da(n,t,e,{dir:i="up",defect:r=null,inverted:s=!1}={}){const a=r?Br[r]:{},o=a.bg||(s?bn.black:bn.yellow),l=a.fg||(s?bn.yellow:bn.black);n.fillStyle=o,n.fillRect(0,0,t,e);const c=n.createLinearGradient(0,0,0,e);c.addColorStop(0,"rgba(0,0,0,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0.10)"),c.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=yl("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const u=a.text||"Way out",h=e*.56,f=i!=="right",m=f?e*.52:t-e*.52,g=f?e*1:e*.3,_=f?t-e*.3:t-e*1;let d=i;a.flipArrow&&(d={left:"right",right:"left",up:"down"}[i]),jo(n,m,e/2,h,d,l),a.arrow2&&jo(n,m,e/2,h,{left:"right",right:"left",up:"down"}[i],l),n.fillStyle=l,n.textBaseline="middle",$e(n,u,_-g,e*.62,a.font||ve),n.save(),a.mirror?(n.translate((g+_)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(u,0,e*.53)):(n.textAlign=f?"left":"right",n.fillText(u,f?g:_,e*.53)),n.restore()}function Zc(n,t,e,i,r={}){n.fillStyle="#f7f6ee",n.fillRect(0,0,t,e),n.fillStyle="#2b2d2f",n.fillRect(0,0,t,Math.max(1,e*.07)),n.fillRect(0,e-Math.max(1,e*.07),t,Math.max(1,e*.07)),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(t-1,0,1,e);const s=r.arrow?e*2.7:0;n.fillStyle="#0019a8",n.textAlign="center",n.textBaseline="middle";try{n.letterSpacing=`${(e*.035).toFixed(1)}px`}catch{}$e(n,i.toUpperCase(),(t-s)*.62,e*.56,ve),n.fillText(i.toUpperCase(),(t-s)*.5,e*.53);try{n.letterSpacing="0px"}catch{}r.note&&(n.font=`400 ${e*.24}px ${En}`,n.textAlign="left",n.fillText(r.note,e*.3,e*.52)),r.arrow&&(n.save(),n.translate(t-s-e*.25,e*.2),da(n,s,e*.6,{dir:r.arrow,inverted:!0}),n.restore())}function Q_(n,t,e,i,r){const a=e/7,o=a*3;n.fillStyle=r.grout,n.fillRect(0,0,t,e);for(let h=0;h<7;h++)for(let f=h%2?-o/2:0;f<t;f+=o)n.fillStyle=yl(r.ground,(h*7+Math.round(f/o)*13)%9/100-.05),n.fillRect(f+.5,h*a+.5,o-1,a-1);const l=`· ${i.toUpperCase().split(" ").join(" · ")} ·`;n.fillStyle=r.letter||r.skirt,n.textAlign="center",n.textBaseline="middle";const c=a*5*1.36;n.font=`700 ${c}px Georgia, 'Times New Roman', serif`;const u=n.measureText(l).width;n.save(),n.translate(t/2,e*.52),n.scale(Math.min(.86,t*.96/u),1),n.fillText(l,0,0),n.restore();for(let h=1;h<7;h++)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,h*a,t,1)}function pa(n,t,e,i,{bg:r=bn.blue,fg:s=bn.white,sub:a=""}={}){n.fillStyle=r,n.fillRect(0,0,t,e),n.strokeStyle=s,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=s,n.textAlign="center",n.textBaseline="middle",$e(n,i,t*.84,e*(a?.4:.52),ve),n.fillText(i,t/2,e*(a?.38:.53)),a&&($e(n,a,t*.84,e*.22,En),n.fillText(a,t/2,e*.72))}function _h(n,t,e,i,r,s=null){n.fillStyle=r.ground,n.fillRect(0,0,t,e);const a=e/5;n.strokeStyle=r.grout,n.lineWidth=1;for(let c=0;c<t;c+=a*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=a)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=r.band,n.lineWidth=a*.55,n.strokeRect(a*.3,a*.3,t-a*.6,e-a*.6),n.fillStyle=r.skirt,n.textAlign="center",n.textBaseline="middle";const o=s?t*.6:t*.8;$e(n,i,o,e*.42,ve);const l=s==="left"?t*.6:s==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),s){const c=s==="left"?t*.17:t*.83,u=s==="left"?-1:1;n.beginPath(),n.moveTo(c-u*e*.42,e*.5),n.lineTo(c+u*e*.05,e*.42),n.lineTo(c+u*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+u*e*.2,e*.5),n.lineTo(c-u*e*.02,e*.3),n.lineTo(c-u*e*.02,e*.7),n.closePath(),n.fill()}}const Kc={northern:"#000000",bakerloo:"#b36305",central:"#e32017",circle:"#ffd300",district:"#00782a",hammersmith:"#f3a9bb",jubilee:"#a0a5a9",metropolitan:"#9b0056",piccadilly:"#003688",victoria:"#0098d4",waterloo:"#95cdba",elizabeth:"#6950a1",dlr:"#00a4a7",rail:"#e1251b"},vh={edgware:["Edgware","Burnt Oak","Colindale","Hendon Central","Brent Cross","Golders Green","Hampstead","Belsize Park","Chalk Farm"],barnet:["High Barnet","Totteridge & Whetstone","Woodside Park","West Finchley","Finchley Central","East Finchley","Highgate","Archway","Tufnell Park","Kentish Town"],charingX:["Mornington Crescent","Euston","Warren Street","Goodge Street","Tottenham Court Road","Leicester Square","Charing Cross","Embankment","Waterloo"],bank:["Euston","King's Cross St. Pancras","Angel","Old Street","Moorgate","Bank","London Bridge","Borough","Elephant & Castle"],morden:["Oval","Stockwell","Clapham North","Clapham Common","Clapham South","Balham","Tooting Bec","Tooting Broadway","Colliers Wood","South Wimbledon","Morden"],battersea:["Nine Elms","Battersea Power Station"]},Ks={at:"Finchley Central",name:"Mill Hill East"},El={Euston:["victoria","rail"],"Warren Street":["victoria"],"Tottenham Court Road":["central","elizabeth"],"Leicester Square":["piccadilly"],"Charing Cross":["bakerloo","rail"],Embankment:["bakerloo","circle","district"],Waterloo:["bakerloo","jubilee","waterloo","rail"],"King's Cross St. Pancras":["circle","hammersmith","metropolitan","piccadilly","victoria","rail"],"Old Street":["rail"],Moorgate:["circle","hammersmith","metropolitan","elizabeth","rail"],Bank:["central","waterloo","dlr"],"London Bridge":["jubilee","rail"],"Elephant & Castle":["bakerloo","rail"],Stockwell:["victoria"],Balham:["rail"],"Kentish Town":["rail"]},Tl=[["North End","Golders Green","Hampstead"],["South Kentish Town","Kentish Town","Camden Town"],["City Road","Angel","Old Street"],["King William Street","Bank","London Bridge"]],Jo=["Mornington Crescent","Camden Town","Chalk Farm","Belsize Park","Hampstead"],tv="Golders Green",Js={"Mornington Crescent":{theme:{id:"mornington",ground:"#ece4c4",band:"#1d2a5e",accent:"#1d2a5e",skirt:"#182250",grout:"#bdb596",letter:"#7a1f2b"}},"Camden Town":{theme:{id:"camden",ground:"#e9e6cf",band:"#5d86c5",accent:"#5d86c5",skirt:"#3f5f96",grout:"#b9b6a0",letter:"#27406f"}},"Chalk Farm":{theme:{id:"chalk",ground:"#ede6cd",band:"#8e1b24",accent:"#8e1b24",skirt:"#6f141c",grout:"#beb69c",letter:"#6f141c"}},"Belsize Park":{theme:{id:"belsize",ground:"#ebe3c6",band:"#5c1a22",accent:"#5c1a22",skirt:"#4a141b",grout:"#bdb497",letter:"#3d1016"}},Hampstead:{tiled:"Heath Street",theme:{id:"hampstead",ground:"#ece2bd",band:"#5a1820",accent:"#a8706a",skirt:"#4b141b",grout:"#beb38f",letter:"#5a1820"}},"Golders Green":{theme:{id:"golders",ground:"#eee9d6",band:"#2a5a3c",accent:"#2a5a3c",skirt:"#1f4530",grout:"#bfbaa6",letter:"#1f4530"}}},ev=n=>n>=Jo.length?tv:Jo[Math.max(0,n)],xh=n=>(Js[n]||Js["Mornington Crescent"]).theme,nv=n=>Js[n]&&Js[n].tiled||n,Ui=n=>n==="north"?1:2,yr=n=>n==="north"?"Northbound":"Southbound",Qo="#16213f",iv="#1c3f94",rv="#f6f6f1";function sv(n){let t=0;for(const e of n)t+=e.type==="trunk"?e.stations.length:Math.max(e.left.length,e.right.length)+(e.rejoin?1:0)+(e.spur?.6:0);return t}function av(n,t,e,i,r,s,a,o){const l=El[t];if(!l)return;let c=e;for(const u of l.slice(0,5)){const h=u==="rail"?s*1.5:s*2,f=s*.62,m=r<0?c-h:c;if(m<a||m+h>o)break;u==="rail"?(n.strokeStyle=Kc.rail,n.lineWidth=Math.max(1,s*.2),n.lineJoin="miter",n.beginPath(),n.moveTo(m,i-f*.42),n.lineTo(m+h,i-f*.42),n.lineTo(m,i+f*.42),n.lineTo(m+h,i+f*.42),n.stroke()):(n.fillStyle=Kc[u],n.fillRect(m,i-f/2,h,f)),c+=r*(h+s*.45)}}function Ja(n,t,e,i,r,s,a={}){const o=Math.max(2,s*.42),l=!!El[t]||a.circle;n.strokeStyle="#000",n.fillStyle="#000",n.lineWidth=o,a.terminus&&(n.beginPath(),n.moveTo(e-s*.7,i),n.lineTo(e+s*.7,i),n.stroke()),l?(n.fillStyle="#fff",n.beginPath(),n.arc(e,i,s*.55,0,7),n.fill(),n.lineWidth=Math.max(1.5,s*.26),n.beginPath(),n.arc(e,i,s*.55,0,7),n.stroke()):a.terminus||(n.beginPath(),n.moveTo(e,i),n.lineTo(e+r*s*.85,i),n.stroke());const c=e+r*s*1.35;n.textAlign=r<0?"right":"left",n.textBaseline="middle";let u=[t];if(t.length>17&&t.includes(" ")){const _=t.split(" ");let d=1,p=1/0;for(let y=1;y<_.length;y++){const v=Math.abs(_.slice(0,y).join(" ").length-_.slice(y).join(" ").length);v<p&&(p=v,d=y)}u=[_.slice(0,d).join(" "),_.slice(d).join(" ")]}let h=s*(u.length>1?1:1.18);const f=(a.room||1e9)-s*1.5;n.font=`400 ${h}px ${ve}`;let m=Math.max(...u.map(_=>n.measureText(_).width));m>f&&(h*=f/m,n.font=`400 ${h}px ${ve}`,m=f);const g=u.length>1?h*.52:0;if(a.current){const _=r<0?c-m-s*.5:c-s*.5,d=u.length>1?s*2.5:s*1.8;n.fillStyle=iv,n.fillRect(_,i-d/2,m+s,d),n.fillStyle="#fff"}else n.fillStyle=a.odd?"#5a0d14":Qo;a.current&&a.blank||u.forEach((_,d)=>n.fillText(_,c,i+s*.06+(u.length>1?d?g:-g:0))),av(n,t,c+r*(m+s*(a.current?1.1:.7)),i,r,s,a.lo??-1e9,a.hi??1e9)}function wl(n,t,e,i,r={}){n.fillStyle=rv,n.fillRect(0,0,t,e);const s=Math.max(3,t*.022);n.strokeStyle="#5f6467",n.lineWidth=s,n.strokeRect(s/2,s/2,t-s,e-s);const a=t*.075;n.fillStyle=Qo,n.textAlign="left",n.textBaseline="alphabetic",n.font=`400 ${e*.03}px ${En}`,n.fillText("Northern line",a,e*.052),$e(n,`${yr(r.dir)} platform ${Ui(r.dir)}`,t-a*2,e*.047,ve),n.fillText(`${yr(r.dir)} platform ${Ui(r.dir)}`,a,e*.102),n.strokeStyle="#9aa0a3",n.lineWidth=Math.max(1,e*.003),n.beginPath(),n.moveTo(a,e*.128),n.lineTo(t-a,e*.128),n.stroke();const o=e*.17,l=e*.965,c=sv(i),u=Math.min(e*.052,(l-o)/Math.max(1,c)),h=Math.min(u*.6,t*.03),f=t*.37,m=t*.57,g=f-t*.05,_=t*.95-m,d=Math.max(2,h*.42),p=E=>{n.strokeStyle="#000",n.lineWidth=d,n.lineJoin="round",n.lineCap="butt",n.beginPath(),E.forEach((T,P)=>P?n.lineTo(T[0],T[1]):n.moveTo(T[0],T[1])),n.stroke()},y=r.odd||new Set;let v=o+u*.5,x=!0;const C=i.length===1;i.forEach((E,T)=>{const P=i[T+1];if(E.type==="trunk"){const S=C||T>0?1:-1,M=i[T-1],A=M&&M.rejoin?v-u:v,U=v+u*(E.stations.length-1);p([[f,A],[f,P?U+u*.5:U]]),E.stations.forEach((L,D)=>{const F=x&&D===0;Ja(n,L,f,v,S,h,{current:F,blank:F&&E.hideCurrent,circle:F,terminus:!P&&D===E.stations.length-1,odd:y.has(L),room:S<0?g:t*.95-f,lo:t*.045,hi:t*.955}),v+=u}),x=!1}else{const S=Math.max(E.left.length,E.right.length),M=v-u*.5,A=v+u*(S-1),U=v+u*(E.left.length-1),L=v+u*(E.right.length-1);if(p([[f,M],[f,E.rejoin?A+u:U]]),p([[f,M],[f+h*.8,M+u*.12],[m-h*.8,M+u*.12],[m,M+u*.45],[m,E.rejoin?A+u*.45:L]]),E.rejoin&&p([[m,A+u*.45],[m-h*.8,A+u*.82],[f+h*.8,A+u*.82],[f,A+u]]),E.left.forEach((D,F)=>Ja(n,D,f,v+u*F,-1,h,{terminus:!E.rejoin&&F===E.left.length-1,odd:y.has(D),room:g,lo:t*.045,hi:t*.955})),E.right.forEach((D,F)=>Ja(n,D,m,v+u*F,1,h,{terminus:!E.rejoin&&F===E.right.length-1,odd:y.has(D),room:_,lo:t*.045,hi:t*.955})),E.spur&&E.left.includes(E.spur.at)){const D=v+u*E.left.indexOf(E.spur.at),F=(f+m)/2;p([[f,D+u*.5],[F-h*.6,D+u*.5],[F,D+u*.68],[F,D+u*1]]),p([[F-h*.7,D+u*1],[F+h*.7,D+u*1]]),n.fillStyle=Qo,n.textAlign="center",n.textBaseline="top",n.font=`400 ${h*.95}px ${ve}`,E.spur.name.replace(" East",`
East`).split(`
`).forEach((X,Z)=>n.fillText(X,F,D+u*1.12+Z*h*1.05))}v=A+u*(E.rejoin?2:1)}})}const{edgware:rr,barnet:yh,charingX:hr,bank:Mh,morden:Sh,battersea:bh}=vh,Hr=n=>n.slice().reverse(),Qa=[{type:"trunk",stations:["Kennington"]},{type:"split",left:Sh,right:bh,rejoin:!1,labels:["to Morden","to Battersea Power Station"]}],Jc={type:"split",left:hr,right:Mh,rejoin:!0,labels:["via Charing Cross","via Bank"]},ov={type:"split",left:Hr(yh),right:Hr(rr),rejoin:!1,labels:["High Barnet branch","Edgware branch"],spur:Ks};function ma(n,t){const e=rr.indexOf(n),i=hr.indexOf(n),r=a=>({...a,left:a.left&&a.left.slice(),right:a.right&&a.right.slice(),stations:a.stations&&a.stations.slice()});let s;return t==="north"?e>=0?s=[{type:"trunk",stations:Hr(rr.slice(0,e+1))}]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town",...Hr(rr)]}]:s=[{type:"trunk",stations:[...Hr(hr.slice(0,Math.max(0,i)+1)),"Camden Town"]},ov]:e>=0?s=[{type:"trunk",stations:[...rr.slice(e),"Camden Town"]},Jc,...Qa]:n==="Camden Town"?s=[{type:"trunk",stations:["Camden Town"]},Jc,...Qa]:s=[{type:"trunk",stations:[...hr.slice(Math.max(0,i)),"Kennington"]},Qa[1]],s.map(r)}function lv(n,t){const e=hr.includes(n);return t==="north"?e?[["Edgware",""],["High Barnet",""],["Edgware",""],["Mill Hill East",""]]:[["Edgware",""],["Edgware",""],["Golders Green",""]]:e?[["Battersea Power Station",""],["Kennington",""],["Morden",""]]:[["Morden","via Bank"],["Kennington","via Charing Cross"],["Battersea Power Station","via Charing Cross"],["Morden","via Bank"]]}function Eh(n,t,e=""){const i=ma(n,t);if(i[0].stations.length>1)return i[0].stations[1];const r=i[1];return r?t==="north"?e==="High Barnet"?r.left[0]:r.right[0]:e==="via Bank"?r.right[0]:r.left[0]:null}function Qs(n,t,e){const i=[];if(n.forEach((r,s)=>{if(r.type==="trunk")i.push({arr:r.stations,prev:null,si:s});else{const a=n[s-1]?n[s-1].stations[n[s-1].stations.length-1]:null;i.push({arr:r.left,prev:a,si:s},{arr:r.right,prev:a,si:s})}}),t==="ghost"){for(const[r,s,a]of e.shuffle(Tl))for(const{arr:o,prev:l}of i)for(let c=0;c<o.length;c++){const u=c===0?l:o[c-1];if(u===s&&o[c]===a||u===a&&o[c]===s)return o.splice(c,0,r),"ghost"}return null}if(t==="swap"){const r=i.filter(o=>o.arr.length>=4);if(!r.length)return null;const{arr:s}=e.pick(r),a=e.int(1,s.length-3);return[s[a],s[a+1]]=[s[a+1],s[a]],"swap"}if(t==="repeat"){const r=n[0].stations;for(let s=1;s<Math.min(4,r.length);s++)r[s]=r[0];return r.length>1?"repeat":null}return t==="missing"?(n[0].hideCurrent=!0,"missing"):null}function Th(n,t,e){const i=s=>s.join(", "),r=[`Northern line. ${yr(t)} platform ${Ui(t)}.`];return e.forEach((s,a)=>{if(s.type==="trunk"){const o=a===0?s.stations.slice(1):s.stations;a===0&&r.push(s.hideCurrent?"This station: (the box is blank).":`This station: ${s.stations[0]}.`),o.length&&r.push(`${a===0?"Then":"Then on to"} ${i(o)}.`)}else{let o=i(s.left);s.spur&&s.left.includes(s.spur.at)&&(o+=` (and ${s.spur.name}, from ${s.spur.at})`);const l=c=>c[0].toUpperCase()+c.slice(1);r.push(`${l(s.labels[0])}: ${o}. ${l(s.labels[1])}: ${i(s.right)}.`)}}),r.join(" ")}function cv(n,t=[]){const e=r=>r.join(", "),i=t.length?` Also marked: ${e(t.map(r=>r[0]))}.`:"";return`Northern line. You are here: ${n}. Edgware branch: ${e(rr)}. High Barnet branch: ${e(yh)} (and ${Ks.name}). Then Camden Town. Via Charing Cross: ${e(hr)}. Via Bank: ${e(Mh)}. Then Kennington. To Morden: ${e(Sh)}. To Battersea Power Station: ${e(bh)}.${i}`}const qn=Lt.W/2;function wh(n){const t=n.env.seenNotices||new Set,e=Zo.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:Zo)}function uv(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=o.chance(Math.min(.7,(n.env.wrong||0)*.17));let c;const u=a.add(104,164,(f,m,g)=>{c=is(f,m,g,o,l)}),h=Zn(s,"sheet",t,e,r,.52,.64,1,u,null,.045);G_(s,t,e,r-.01,.52,.64,1),i.push({...h,r:4.2,label:"read poster",title:"POSTER",text:`${c.headline}. ${c.strap}.`})}function Qc(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=wh(n),c=a.add(168,216,(h,f,m)=>Ko(h,f,m,l,o)),u=Zn(s,"sheet",t,e,r,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...u,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:h=>h.story.noticeRead(l.key)})}function hv(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o}=n,l=o.pick(q_),c=a.add(200,150,(h,f,m)=>K_(h,f,m,l,o)),u=Zn(s,"sheet",t,e,r,.7,.86,.645,c,null,.045);i.push({...u,r:4.2,label:"read board",title:"SERVICE INFORMATION",text:l})}const to=.95,Ds=2,tu=.25;function fv(n,t,e){const{b:i}=n;Zn(i,"atlas",t,e,qn-tu+.03,0,to,Ds,Bt("door"),null,.03);const r=ne("steelDark"),[s,,a]=_e(t,0,0);i.place(s,t.y,a,t.yaw);const o=e*qn,l=e*(qn-tu),c=.06,u=-to/2-c,h=to/2+c,f=Ds+c;i.quad("atlas",[l,0,u],[l,0,u+c],[l,f,u+c],[l,f,u],[-e,0,0],r),i.quad("atlas",[l,0,h-c],[l,0,h],[l,f,h],[l,f,h-c],[-e,0,0],r),i.quad("atlas",[l,Ds,u],[l,Ds,h],[l,f,h],[l,f,u],[-e,0,0],r),i.quad("atlas",[o,0,u],[l,0,u],[l,f,u],[o,f,u],[0,0,-1],r),i.quad("atlas",[l,0,h],[o,0,h],[o,f,h],[l,f,h],[0,0,1],r),i.quad("atlas",[o,f,u],[l,f,u],[l,f,h],[o,f,h],[0,1,0],r),i.setXf(null)}function eu(n,t,e,i,r,s,a){Zn(n.b,i==="extinguisher"?"cut":"atlas",t,e,qn,r,s,a,Bt(i),null,.04)}function dv(n,t,e,i){const{b:r,sheet:s,rng:a}=n,o=a.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=s.add(220,54,(u,h,f)=>_h(u,h,f,o,n.theme,null)),c=Zn(r,"sheet",t,e,qn,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:o})}function pv(n,t,e,i,r,s,a,o,l=.04){const c=Lt.W/2,u=Lt.spring,h=Lt.crown-u,f=S=>{if(S<=u)return{X:c,nx:1,ny:0};const M=Math.min(1,(S-u)/h),A=c*Math.sqrt(1-M*M),U=A/(c*c),L=(S-u)/(h*h),D=Math.hypot(U,L)||1;return{X:A,nx:U/D,ny:L/D}},m=[],g=10,_=a/g;let d=r,p=0;m.push({y:d,...f(d)});for(let S=1;S<=g;S++){const M=_*S;for(;p<M;){const U=f(d),L=f(d+.005);p+=Math.hypot(L.X-U.X,.005),d+=.005}m.push({y:d,...f(d)})}const[y,,v]=_e(e,0,0);n.place(y,e.y,v,e.yaw);const x=i>0?-s/2:s/2,C=-x,E=(S,M)=>[i*(S.X-l*S.nx),S.y-l*S.ny,M];for(let S=0;S<g;S++){const M=m[S],A=m[S+1],U=o[1]+(o[3]-o[1])*(S/g),L=o[1]+(o[3]-o[1])*((S+1)/g),D=[-i*(M.nx+A.nx)/2,-(M.ny+A.ny)/2,0];n.quad(t,E(M,x),E(M,C),E(A,C),E(A,x),D,[o[0],U,o[2],L])}n.setXf(null);const T=m[g>>1],P=_e(e,i*(T.X-l),T.y);return{x:P[0],y:P[1],z:P[2]}}function mv(n,t,e,i,r=qn){const{b:s,sheet:a,rng:o,env:l}=n,c=o.chance(.5)?"north":"south",u=ma(l.station,c);o.chance(Math.min(.8,(l.wrong||0)*.2))&&Qs(u,o.pick(["ghost","ghost","swap","repeat"]),o);const h=a.add(200,300,(m,g,_)=>wl(m,g,_,u,{station:l.station,dir:c})),f=pv(s,"sheet",t,e,.6,.9,1.35,h,.04);i.push({...f,r:5,label:"read line diagram",title:"LINE DIAGRAM",text:Th(l.station,c,u)})}function gv(n,t,e){const{rng:i}=n,r=[],s=t.every(m=>Math.abs(m.yaw)<1e-6&&Math.abs(m.y-t[0].y)<1e-6),a=e[e.length-1]-e[0];if(!s||a<5.5)return r;const o=[];for(let m=2.2;m<=a-2.2;m+=1.55)o.push(m);let l=!1,c=!1,u=!1;const h=[],f=i.chance(n.env.noticeChance??.34);for(const m of[-1,1]){let g=0;for(const _ of o){if(g>0){g--;continue}const d={x:0,y:0,z:_,yaw:0},p=i.next();if(f&&!l&&p<.3){Qc(n,d,m,r),l=!0;continue}if(p<.1&&!u){mv(n,d,m,r),u=!0;continue}p<.5?uv(n,d,m,r):p<.56&&_>3&&_<a-3?fv(n,d,m):p<.62?hv(n,d,m,r):p<.67&&!c&&_<a-3?(dv(n,d,m,r),c=!0,g=1):p<.72?eu(n,d,m,"grille",.25,.5,.5):p<.76?eu(n,d,m,"extinguisher",.75,.45,.45):h.push([d,m])}}if(f&&!l&&h.length){const[m,g]=i.pick(h);Qc(n,m,g,r)}return r}function _v(n,t,e){return n.sheet?gv(n,t,e):[]}const xn=.5;function vv(n,t=3.4,e=40){const{b:i}=n,r=Lt.W/2+.1,s=Lt.crown+.1,a={emit:0};i.quad("gate",[-r,0,.06],[r,0,.06],[r,s,.06],[-r,s,.06],[0,0,1],ne("blackout"),a);const o=Bt("gate"),l={emit:.34};for(const[c,u]of[[-r,0],[0,r]])i.quad("gate",[c,0,xn],[u,0,xn],[u,s,xn],[c,s,xn],[0,0,1],o,l);return i.box("gate",-.035,0,xn-.02,.035,s,xn+.03,ne("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,xn+.03,.09,1.16,xn+.07,ne("metal"),{emit:.5},"xXyYZ"),{x0:-r,x1:r,z0:t,z1:e,gate:!0,fire:(c,u)=>c.director.commit(u)}}const nu=[-(Lt.W/2+.2),xn+.25,Lt.W/2+.2,xn+.25];function Ah(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function Rh(n,t){const{b:e,p:i}=n,r=di(e,t,Lt,{floor:Bt("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const s=t[t.length-1];e.addPortal(s.x,s.y,s.z,s.yaw),mi(e,t[0],Lt.crown),gh(e,t,r.dist,Lt.crown,i.lights);const a=_v(n,t,r.dist),o={};return n.env.gate&&(o.zones=[vv(n,3.4,r.length+1)]),{cells:r.cells,walls:r.walls,items:a,frames:t,extra:o}}const xv={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:Ah(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return Rh(n,U_(n.p.len,1))}},bi=4.5,yv={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:Ah(n,t)},exits:[{x:e*bi,y:0,z:bi,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,bi,3.3,bi+1.9]:[-bi,-.4,0,1.9,3.3,bi+1.9]}},build(n){return Rh(n,N_(bi,n.p.dir*Math.PI/2,.9))}},Dr=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function Mv(n,t,e,i){const r=n.x-i.x,s=n.y-i.y,a=t.x-i.x,o=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(r*r+s*s)*(a*c-l*o)-(a*a+o*o)*(r*c-l*s)+(l*l+c*c)*(r*o-a*s)}function Sv(n,t,e=60){const i=n.length,r=t.map(([s,a,o])=>Dr(n[s],n[a],n[o])>=0?[s,a,o]:[s,o,a]).filter(([s,a,o])=>Math.abs(Dr(n[s],n[a],n[o]))>1e-12);for(let s=0;s<e;s++){const a=new Map;r.forEach((c,u)=>{for(let h=0;h<3;h++){const f=c[h],m=c[(h+1)%3],g=f<m?f*i+m:m*i+f,_=a.get(g);_?_.push(u):a.set(g,[u])}});const o=new Set;let l=0;for(const[c,u]of a){if(u.length!==2||o.has(u[0])||o.has(u[1]))continue;const h=Math.floor(c/i),f=c%i,m=r[u[0]],g=r[u[1]],_=m.find(v=>v!==h&&v!==f),d=g.find(v=>v!==h&&v!==f),[p,y]=Dr(n[h],n[f],n[_])>0?[h,f]:[f,h];Mv(n[p],n[y],n[_],n[d])<=1e-10||Dr(n[_],n[p],n[d])<=1e-12||Dr(n[d],n[y],n[_])<=1e-12||(r[u[0]]=[_,p,d],r[u[1]]=[d,y,_],o.add(u[0]),o.add(u[1]),l++)}if(!l)break}return r}function bv(n,t,e){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s];a.y>e!=o.y>e&&t<(o.x-a.x)*(e-a.y)/(o.y-a.y)+a.x&&(i=!i)}return i}function Ev(n,t,e){let i=1/0;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r],o=n[s],l=o.x-a.x,c=o.y-a.y,u=l*l+c*c;let h=u>0?((t-a.x)*l+(e-a.y)*c)/u:0;h=h<0?0:h>1?1:h,i=Math.min(i,Math.hypot(t-(a.x+l*h),e-(a.y+c*h)))}return i}function Ch(n,t,e,i,r=[]){const s=[{x:n,y:e}];for(const a of r.slice().sort((o,l)=>o[0].x-l[0].x)){s.push({x:a[0].x,y:e});for(const o of a)o.y>e+1e-6&&s.push({x:o.x,y:o.y});s.push({x:a[a.length-1].x,y:e})}return s.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),s.filter((a,o)=>o===0||Math.hypot(a.x-s[o-1].x,a.y-s[o-1].y)>1e-6)}function Ph(n,t,e,i,r={}){const s=r.layer||"tile",a=r.uv||((d,p)=>[d/6,.004+Math.max(0,p)/3.63*.992]),o=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=r.grid??1.1,c=[];i.forEach((d,p)=>{const y=i[(p+1)%i.length];c.push({x:d.x,y:d.y});const v=Math.hypot(y.x-d.x,y.y-d.y),x=l>0&&v>1.5*l?Math.ceil(v/l):1;for(let C=1;C<x;C++){const E=C/x,T=(C%2?7e-4:-7e-4)/v;c.push({x:d.x+(y.x-d.x)*E-(y.y-d.y)*T,y:d.y+(y.y-d.y)*E+(y.x-d.x)*T})}});const u=[];if(l>0){let d=1/0,p=-1/0,y=1/0,v=-1/0;for(const E of c)d=Math.min(d,E.x),p=Math.max(p,E.x),y=Math.min(y,E.y),v=Math.max(v,E.y);const x=Math.max(1,Math.round((p-d)/l)),C=Math.max(1,Math.round((v-y)/l));for(let E=1;E<x;E++)for(let T=1;T<C;T++){const P=(nn(E*73+11,T*151+5)/4294967296-.5)*.3,S=(nn(E*199+3,T*37+17)/4294967296-.5)*.3,M=d+(p-d)*(E+(T%2?.25:-.25)+P)/x,A=y+(v-y)*(T+S)/C;r.keep&&!r.keep(M,A)||!bv(c,M,A)||Ev(c,M,A)<l*.3||u.push([new Zt(M,A)])}}const h=c.map(d=>new Zt(d.x,d.y)),f=vl.triangulateShape(h,u),m=h.concat(u.map(d=>d[0])),g=Sv(m,f),_=d=>_e(t,d.x,d.y);for(const[d,p,y]of g){const v=m[d],x=m[p],C=m[y];n.tri(s,_(v),_(x),_(C),o,a(v.x,v.y),a(x.x,x.y),a(C.x,C.y),r.o)}return g.length}const Is=.05,iu=.004;function Tv(n,t){const{x0:e,x1:i,z0:r,z1:s,H:a}=t,o=t.portals||[],l=[],c={S:{f:{x:0,y:0,z:r,yaw:0},facing:1,lat:g=>g,t0:e,t1:i,pt:g=>[g,r]},N:{f:{x:0,y:0,z:s,yaw:0},facing:-1,lat:g=>g,t0:e,t1:i,pt:g=>[g,s]},W:{f:{x:e,y:0,z:0,yaw:Math.PI/2},facing:1,lat:g=>-g,t0:r,t1:s,pt:g=>[e,g]},E:{f:{x:i,y:0,z:0,yaw:Math.PI/2},facing:-1,lat:g=>-g,t0:r,t1:s,pt:g=>[i,g]}};for(const g of Object.keys(c)){const _=c[g],d=o.filter(E=>E.wall===g).sort((E,T)=>E.at-T.at),p=_.lat(_.t0-Is),y=_.lat(_.t1+Is),v=d.map(E=>Lt.map(T=>({x:_.lat(E.at)+T.x+T.nx*iu,y:T.y+T.ny*iu}))),x=Ch(Math.min(p,y),Math.max(p,y),-Is,a+Is,v);Ph(n,_.f,_.facing,x,{layer:"tile",grid:1,uv:(E,T)=>[(E-3.1)/6+.5,.004+.992*T/3.63]});let C=_.t0;for(const E of d)l.push([..._.pt(C),..._.pt(E.at-Lt.W/2)]),C=E.at+Lt.W/2;l.push([..._.pt(C),..._.pt(_.t1)])}const u=Math.max(1,Math.round(i-e)),h=Math.max(1,Math.round(s-r));n.grid("atlas",[e,0,r],[i-e,0,0],[0,0,s-r],u,h,[0,1,0],t.floor||Bt("floor"),null,!0),n.grid("atlas",[e,a,r],[i-e,0,0],[0,0,s-r],u,h,[0,-1,0],t.ceil||Bt("concrete"),null,!0);const f=(e+i)/2;return{cells:[{ax:f,az:r,bx:f,bz:s,hw:(i-e)/2,ya:0,yb:0}],walls:l.filter(g=>Math.hypot(g[2]-g[0],g[3]-g[1])>.01)}}const tl=512,el=256,Al={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let Us=null,Tt=null,Ri=null,Lh=null;function Dh(){if(Us)return;Us=An(tl,el),Tt=Us.getContext("2d");const n=An(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),Lh=Tt.createPattern(n,"repeat"),Ri=new ca(Us),Ri.colorSpace=Xe,Ri.generateMipmaps=!1,Ri.minFilter=Ae,Ri.magFilter=Ae}function wv(){return Dh(),Ri}function ta(n){const[t,e,i,r]=Al[n],s=1;return[(t+s)/tl,1-(e+r-s)/el,(t+i-s)/tl,1-(e+s)/el]}function ru(n,t,e){const[i,r,s,a]=Al[n];Tt.save(),Tt.beginPath(),Tt.rect(i,r,s,a),Tt.clip(),Tt.fillStyle="#060504",Tt.fillRect(i,r,s,a),Tt.fillStyle="#ffab1a",Tt.font=`400 30px ${cr}`,Tt.textBaseline="middle";const o=a/4;t.slice(0,3).forEach((l,c)=>{const u=r+o*(c+.5)+2;Tt.textAlign="left",Tt.fillText(l.l||"",i+10,u,l.r?s-110:s-20),l.r&&(Tt.textAlign="right",Tt.fillText(l.r,i+s-10,u))}),Tt.textAlign="center",Tt.fillText(e||"",i+s/2,r+o*3.5+1,s-20),Tt.fillStyle=Lh,Tt.fillRect(i,r,s,a),Tt.restore()}function su(n,t,e){const[i,r,s,a]=Al[n],o=i+s/2,l=r+a/2,c=s*.46;Tt.save(),Tt.beginPath(),Tt.rect(i,r,s,a),Tt.clip(),Tt.fillStyle="#1a1b1c",Tt.fillRect(i,r,s,a),Tt.fillStyle=e?"#e8e2cc":"#f2efe4",Tt.beginPath(),Tt.arc(o,l,c,0,7),Tt.fill(),Tt.strokeStyle="#14213d",Tt.lineWidth=3,Tt.beginPath(),Tt.arc(o,l,c-1.5,0,7),Tt.stroke(),Tt.strokeStyle="#111";for(let f=0;f<12;f++){const m=f/12*Math.PI*2,g=c*(f%3===0?.74:.82);Tt.lineWidth=f%3===0?4:2,Tt.beginPath(),Tt.moveTo(o+Math.sin(m)*g,l-Math.cos(m)*g),Tt.lineTo(o+Math.sin(m)*c*.9,l-Math.cos(m)*c*.9),Tt.stroke()}const u=(f,m,g,_)=>{const d=f*Math.PI*2;Tt.strokeStyle=_,Tt.lineWidth=g,Tt.lineCap="round",Tt.beginPath(),Tt.moveTo(o-Math.sin(d)*m*.15,l+Math.cos(d)*m*.15),Tt.lineTo(o+Math.sin(d)*m,l-Math.cos(d)*m),Tt.stroke()},h=(t%43200+43200)%43200;u(h/43200,c*.5,5,"#111"),u(h%3600/3600,c*.74,3.5,"#111"),u(Math.floor(h%60)/60,c*.8,1.6,"#b3261e"),Tt.fillStyle="#b3261e",Tt.beginPath(),Tt.arc(o,l,4,0,7),Tt.fill(),Tt.restore()}function Av(n){Dh(),ru("board",n.rows||[],n.footer||""),ru("board2",n.rows2||[],n.footer2||""),su("clock",n.tod||0,!1),su("clockBack",n.todBack||0,!0),Ri.needsUpdate=!0}const ea="#16213f",nl="#1c3f94",Ih="#f6f6f1";function Rv(n,t,e,i,r,s,a={}){n.save(),n.translate(e,i),n.rotate(r?-.87:.87),n.font=`400 ${s}px ${ve}`,n.textBaseline="middle",n.textAlign="left";const o=t.split(" ");let l=[t];if(t.length>12&&o.length>1){let u=1,h=1/0;for(let f=1;f<o.length;f++){const m=Math.abs(o.slice(0,f).join(" ").length-o.slice(f).join(" ").length);m<h&&(h=m,u=f)}l=[o.slice(0,u).join(" "),o.slice(u).join(" ")]}const c=s*.9;if(a.current){const u=Math.max(...l.map(h=>n.measureText(h).width));n.fillStyle=nl,n.fillRect(c-s*.35,-s*.62*l.length,u+s*.7,s*1.24*l.length)}n.fillStyle=a.current?"#fff":a.odd?"#7a0f18":ea,l.forEach((u,h)=>n.fillText(u,c,(h-(l.length-1)/2)*s*1.05)),n.restore()}function Uh(n,t,e,i={}){const{edgware:r,barnet:s,charingX:a,bank:o,morden:l,battersea:c}=vh;n.fillStyle=Ih,n.fillRect(0,0,t,e);const u=Math.max(2,e*.03);n.strokeStyle="#5f6467",n.lineWidth=u,n.strokeRect(u/2,u/2,t-u,e-u),n.fillStyle="#000",n.fillRect(t*.845,e*.7,t*.14,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",$e(n,"Northern line",t*.125,e*.12,ve),n.fillText("Northern line",t*.915,e*.805);const h=s.length,f=h+1+a.length,m=f+1+l.length,g=t*.03,_=t*.925/(m-1),d=D=>g+D*_,p=e*.44,y=e*.57,v=Math.max(2,e*.022),x=e*.054,C=Math.max(2,e*.022),E=D=>{n.strokeStyle="#000",n.lineWidth=C,n.lineJoin="round",n.beginPath(),D.forEach((F,X)=>X?n.lineTo(F[0],F[1]):n.moveTo(F[0],F[1])),n.stroke()},T=D=>d(D+1),P=D=>d(D*.93);E([[T(0),p],[d(m-1),p]]),E([[P(0),y],[d(h)-_*.75,y],[d(h),p]]),E([[d(h),p],[d(h)+_*.75,y],[d(f)-_*.75,y],[d(f),p]]),E([[d(f),p],[d(f)+_*.75,y],[d(f+2),y]]);const S=P(s.indexOf(Ks.at)),M=(p+y)/2;E([[S,y],[S+_*.3,M]]),E([[S+_*.3-v,M],[S+_*.3+v,M]]),n.fillStyle=ea,n.textAlign="left",n.textBaseline="middle",n.font=`400 ${x*.82}px ${ve}`,n.fillText(Ks.name,S+_*.3+v*1.8,M);const A=i.current,U=(D,F,X,Z,q={})=>{const z=!!El[D]||D===A||D==="Camden Town"||D==="Kennington";n.strokeStyle="#000",n.lineWidth=C*.7,z?(n.fillStyle=D===A?nl:"#fff",n.beginPath(),n.arc(F,X,v*1.35,0,7),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(F,X),n.lineTo(F,X+(Z?-v*1.6:v*1.6)),n.stroke()),Rv(n,D,F,X+(Z?-v*2.2:v*2.2),Z,x,{current:D===A,odd:q.odd})};r.forEach((D,F)=>U(D,T(F),p,!0)),U("Camden Town",d(h),p,!0),a.forEach((D,F)=>U(D,d(h+1+F),p,!0)),U("Kennington",d(f),p,!0),l.forEach((D,F)=>U(D,d(f+1+F),p,!0)),s.forEach((D,F)=>U(D,P(F),y,!1)),o.forEach((D,F)=>U(D,d(h+1+F*.94+.2),y,!1)),c.forEach((D,F)=>U(D,d(f+1+F),y,!1));for(const[D,F]of i.ghosts||[]){const X=r.indexOf(F),Z=s.indexOf(F),q=o.indexOf(F);X>=0?U(D,T(X+.5),p,!0,{odd:!0}):Z>=0?U(D,P(Z+.5),y,!1,{odd:!0}):q>=0&&U(D,d(h+1+(q+.5)*.94+.2),y,!1,{odd:!0})}const L=[[r,T],[["Camden Town"],()=>d(h)],[a,D=>d(h+1+D)]];for(const[D,F]of L){const X=D.indexOf(A);if(X<0)continue;const Z=F(X);n.fillStyle=nl,n.beginPath(),n.moveTo(Z,p+v*2.2),n.lineTo(Z-v*1.6,p+v*4.6),n.lineTo(Z+v*1.6,p+v*4.6),n.fill(),n.fillRect(Z-x*3.4,p+v*4.5,x*6.8,x*1.5),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${x}px ${ve}`,n.fillText("You are here",Z,p+v*4.5+x*.8)}}function Nh(n,t,e,{dir:i="north",arrow:r="right",list:s=""}={}){n.fillStyle=Ih,n.fillRect(0,0,t,e),n.fillStyle="#000",n.fillRect(0,0,t,e*.24),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${e*.15}px ${ve}`,n.fillText("Northern line",e*.16,e*.13);const a=r!=="right";jo(n,a?e*.42:t-e*.42,e*.58,e*.42,r,ea);const o=a?e*.8:e*.16,l=a?t-e*.16:t-e*.8,c=`${yr(i)} platform ${Ui(i)}`;n.fillStyle=ea,n.textAlign=a?"left":"right",$e(n,c,l-o,e*(s?.3:.36),ve),n.fillText(c,a?o:l,e*(s?.5:.6)),s&&($e(n,s,l-o,e*.14,En),n.fillText(s,a?o:l,e*.8)),n.strokeStyle="#5f6467",n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(1,1,t-2,e-2)}const Fh=["North End","South Kentish Town","City Road","King William Street","Bull & Bush","Aldwych","Down Street","British Museum","York Road","Brompton Road"],au={Hampstead:["Heath Street"],"Chalk Farm":["Adelaide Road"],"Mornington Crescent":["Seymour Street","Mornington Cresent"],"Camden Town":["Camden Road"],"Belsize Park":["Belsize"]};function Cv(n,t){const e=[];for(let r=1;r<n.length-1;r++)/[a-z]/.test(n[r])&&/[a-z]/.test(n[r+1])&&n[r]!==n[r+1]&&e.push(r);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function Rl(n,t,e){const i=Math.min(.7,t*.15);if(!e.chance(i))return n;const r=e.next()*Math.min(5,t+1);if(r<1)return Cv(n,e);if(r<1.8){const s=e.int(1,n.length-2);return n.slice(0,s)+n.slice(s+1)}return r<2.8&&au[n]?e.pick(au[n]):e.pick(Fh)}const Cl=n=>Fh.includes(n),mn=3.5,vn=5,ou=2.95;function Ji(n,t,e,i,r,s,a,o){const l=vn-.03;return n.quad(t,[e+r/2,i,l],[e-r/2,i,l],[e-r/2,i+s,l],[e+r/2,i+s,l],[0,0,-1],a,o),{x:e,y:i+s/2,z:l}}const Pv={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,r=Object.keys(Br).filter(a=>Br[a].level<=i&&Br[a].level>=i-1),s=n.chance(.5);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(r),lie:e==="announce"?n.chance(.3+.12*i):!1,dirs:s?["north","south"]:["south","north"]},exits:[{x:mn,y:0,z:vn/2,yaw:Math.PI/2},{x:-mn,y:0,z:vn/2,yaw:-Math.PI/2}],box:[-mn-.4,-.4,0,mn+.4,3.4,vn+.4]}},build(n){const{b:t,p:e,sheet:i,rng:r,env:s}=n,a=Tv(t,{x0:-mn,x1:mn,z0:0,z1:vn,H:ou,portals:[{wall:"S",at:0},{wall:"E",at:vn/2},{wall:"W",at:vn/2}]});t.addPortal(0,0,0,0),t.addPortal(mn,0,vn/2,Math.PI/2),t.addPortal(-mn,0,vn/2,-Math.PI/2),mi(t,{x:0,y:0,z:0,yaw:0},Lt.crown);for(const d of[-1.7,1.7])Fi(t,{x:d,y:0,z:2.2,yaw:Math.PI/2},ou-.02,{power:.6,radius:6.5});const o=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,to:e.dirs[0]},{cx:-1.72,dir:"right",exit:1,to:e.dirs[1]}];for(const d of c){const p=e.correct===d.exit;if(e.kind==="signs"){const y=p?null:e.defect,v=i.add(250,56,(C,E,T)=>da(C,E,T,{dir:d.dir,defect:y})),x=Ji(t,"sheet",d.cx,1.52,1.9,.425,v,l);o.push({...x,r:7,cone:.93,label:"read sign",title:"SIGN",text:J_(y,d.dir),junctionSign:!0})}else{const y=i.add(250,56,(C,E,T)=>Nh(C,E,T,{dir:d.to,arrow:d.dir})),v=Ji(t,"sheet",d.cx,1.52,1.9,.425,y,l),x=`Northern line · ${yr(d.to)} platform ${Ui(d.to)}`;o.push({...v,r:7,cone:.93,label:"read sign",title:"SIGN",text:d.dir==="left"?`← ${x}`:`${x} →`})}if(e.kind==="clock"){const y=!p,v=Ji(t,"dyn",d.cx,2.08,.62,.62,ta(y?"clockBack":"clock"),{emit:1.05});o.push({...v,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:y?"The second hand is ticking backwards.":"The clock is keeping time."})}}const u=Ji(t,"dyn",0,2.12,1.26,.42,ta("board2"),{emit:1.15});o.push({...u,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const h=Rl(s.station,s.wrong,r),f=i.add(200,92,(d,p,y)=>ha(d,p,y,h)),m=Ji(t,"sheet",0,1.42,1.24,.57,f,null);o.push({...m,r:6,cone:.95,label:"read name",title:"STATION",text:Cl(h)?`${h}. There is no such station on this line.`:h});const g=Ji(t,"cut",0,.62,.34,.68,Bt("helpPoint"),null);o.push({...g,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(d,p,y)=>d.director.helpPoint(y)});const _=[{x0:-mn,x1:mn,z0:.8,z1:vn,fire:(d,p)=>d.director.enterJunction(p)}];return{cells:a.cells,walls:a.walls,items:o,extra:{zones:_}}}},nt={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};nt.back=nt.cx-Math.sqrt(nt.R*nt.R-nt.cy*nt.cy);nt.th0=Math.PI+Math.asin(nt.cy/nt.R);nt.th1=-Math.asin((nt.cy-nt.bed)/nt.R);nt.sCrown=nt.R*(nt.th0-Math.PI/2);nt.wallBed=nt.cx+Math.sqrt(nt.R*nt.R-(nt.cy-nt.bed)**2);nt.track=(nt.edge+nt.wallBed)/2;function Lv(n,t){const e=n-nt.cy;return nt.cx+t*Math.sqrt(Math.max(0,nt.R*nt.R-e*e))}const Dv=9,Iv=10,Uv=nt.R*(Math.PI/2-nt.th1);function lu(n,t,e,i){const r=[];for(let s=0;s<=e;s++){const a=n+(t-n)*s/e;r.push({x:nt.cx+nt.R*Math.cos(a),y:nt.cy+nt.R*Math.sin(a),nx:-Math.cos(a),ny:-Math.sin(a),v:i(a)})}return r}function Nv(n,t,e){const i=d=>e*d,r=lu(nt.th0,Math.PI/2,Dv,d=>.502+.496*(nt.R*(nt.th0-d)/nt.sCrown)),s=lu(Math.PI/2,nt.th1,Iv,d=>.002+.496*(nt.R*(Math.PI/2-d)/Uv)),a=Math.round(t/1.5);for(const d of[r,s])for(let p=0;p<a;p++){const y=t*p/a,v=t*(p+1)/a;for(let x=0;x<d.length-1;x++){const C=d[x],E=d[x+1],T=[i(C.nx),C.ny,0],P=[i(E.nx),E.ny,0],S=[(T[0]+P[0])/2,(T[1]+P[1])/2,0];n.quadN("ptile",[i(C.x),C.y,y],[i(C.x),C.y,v],[i(E.x),E.y,v],[i(E.x),E.y,y],S,T,T,P,P,[y/6,C.v,v/6,E.v])}}const o=[0,1,0],l=(d,p,y=0,v=1)=>Zs(d,y,p?.5:0,v,p?1:.5),c=[[nt.back-.05,-.55,d=>l("floor",d)],[-.55,.55,d=>l("floor",d)],[.55,.95,()=>Bt("tactile")],[.95,1.05,()=>ne("yellow")],[1.05,1.45,d=>l("floorDark",d,.05,.45)],[1.45,nt.edge,()=>ne("edge")]],u=Math.round(t/.5);for(const[d,p,y]of c)for(let v=0;v<u;v++){const x=t*v/u,C=t*(v+1)/u;n.quad("atlas",[i(d),0,x],[i(p),0,x],[i(p),0,C],[i(d),0,C],o,y(v%2))}const h=Bt("mindgap");for(let d=4.5;d<t-3;d+=6.5){const p=.85*e;n.quad("atlas",[i(1.07),.004,d-p],[i(1.07),.004,d+p],[i(1.43),.004,d+p],[i(1.43),.004,d-p],o,h)}const f=Math.round(t/2);for(let d=0;d<f;d++){const p=t*d/f,y=t*(d+1)/f;n.quad("atlas",[i(1.56),nt.bed,p],[i(1.56),nt.bed,y],[i(1.56),-.06,y],[i(1.56),-.06,p],[e,0,0],Bt("riser")),n.quad("atlas",[i(1.56),-.06,p],[i(nt.edge),-.06,p],[i(nt.edge),-.06,y],[i(1.56),-.06,y],[0,-1,0],ne("black")),n.quad("atlas",[i(nt.edge),-.06,p],[i(nt.edge),-.06,y],[i(nt.edge),0,y],[i(nt.edge),0,p],[e,0,0],ne("edge"))}const m=Bt("ballast");for(let d=0;d<Math.round(t);d++)for(const[p,y]of[[1.56,nt.track],[nt.track,nt.wallBed+.12]])n.quad("atlas",[i(p),nt.bed,d],[i(y),nt.bed,d],[i(y),nt.bed,d+1],[i(p),nt.bed,d+1],o,m);const g=Bt("rail"),_=ne("steelDark");for(const[d,p]of nt.rails){const y=nt.track+d;for(let v=0;v<t;v+=3){const x=Math.min(t,v+3),C=nt.bed+p,E=.035;n.quad("atlas",[i(y-E),C,v],[i(y+E),C,v],[i(y+E),C,x],[i(y-E),C,x],o,g),n.quad("atlas",[i(y-E),nt.bed,v],[i(y-E),nt.bed,x],[i(y-E),C,x],[i(y-E),C,v],[-e,0,0],_)}}return{back:r,track:s}}const pe={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},cu=12,Ns=5;function Fs(n,t,e){const i=[];for(let r=0;r<=Ns;r++)i.push({x:n-t,y:e+(pe.spring-e)*r/Ns,ox:-1,oy:0});for(let r=1;r<cu;r++){const s=Math.PI*(1-r/cu);i.push({x:n+t*Math.cos(s),y:pe.spring+t*Math.sin(s),ox:Math.cos(s),oy:Math.sin(s)})}for(let r=Ns;r>=0;r--)i.push({x:n+t,y:e+(pe.spring-e)*r/Ns,ox:1,oy:0});return i}function uu(n,t,e,i,r=!0){const s=S=>i*S,a=nt.track,o=nt.bed,l=o-.3,c=nt.cy+nt.R+.35,u=[Fs(a,pe.hw+pe.ring*.5,l)];r&&u.push(Lt.map(S=>({x:S.x+S.nx*.004,y:S.y+S.ny*.004})));const h=Ch(nt.back-.45,nt.cx+nt.R+.35,l,c,u).map(S=>({x:s(S.x),y:S.y}));Ph(n,{x:0,y:0,z:t,yaw:0},e,h,{layer:"tile",grid:.6,uv:(S,M)=>[(S*i+3)/6,.004+.992*M/3.63]});const f=t+e*pe.proud,m=[0,0,e],g=o-.02,_=Fs(a,pe.hw,g),d=Fs(a,pe.hw+pe.ring,g),p=[Zs("brick",0,0,.5,1),Zs("brick",.5,0,1,1)],y=ne("soot");for(let S=0;S<_.length-1;S++){const M=_[S],A=_[S+1],U=d[S+1],L=d[S];n.quad("atlas",[s(M.x),M.y,f],[s(A.x),A.y,f],[s(U.x),U.y,f],[s(L.x),L.y,f],m,p[S%2]);const D=[s((L.ox+U.ox)/2),(L.oy+U.oy)/2,0];n.quad("atlas",[s(L.x),L.y,f],[s(U.x),U.y,f],[s(U.x),U.y,t],[s(L.x),L.y,t],D,y)}const v=Fs(a,pe.hw+.006,g),x=Bt("soot"),C=[[0,.22,.2],[.22,.55,.1],[.55,pe.depth,.04]];for(const[S,M,A]of C){const U=f-e*S,L=f-e*M;for(let z=0;z<v.length-1;z++){const $=v[z],J=v[z+1],Y=[s(-($.ox+J.ox)/2),-($.oy+J.oy)/2,0];n.quad("atlas",[s($.x),$.y,U],[s(J.x),J.y,U],[s(J.x),J.y,L],[s($.x),$.y,L],Y,x,{emit:A})}const D=a-pe.hw-.01,F=a+pe.hw+.01,X=S===0?t+e*.2:U,Z=o-.003;n.quad("atlas",[s(D),Z,X],[s(F),Z,X],[s(F),Z,L],[s(D),Z,L],[0,1,0],Bt("ballast"),{emit:A*1.2});const q=S===0?t:U;for(const[z,$]of nt.rails){const J=a+z,Y=o+$,rt=.035;n.quad("atlas",[s(J-rt),Y,q],[s(J+rt),Y,q],[s(J+rt),Y,L],[s(J-rt),Y,L],[0,1,0],Bt("rail"),{emit:A*2.4})}}const E=f-e*pe.depth,T=pe.spring+pe.hw+.06,P=pe.hw+.06;n.quad("atlas",[s(a-P),g,E],[s(a+P),g,E],[s(a+P),T,E],[s(a-P),T,E],m,ne("blackout"),{emit:0})}function On(n,t,e,i,r,s,a,o,l,c,u=.04){return il(n,t,e,i,r,s,a,o,l,c,u,1)}function il(n,t,e,i,r,s,a,o,l,c,u=.05,h=4){const f=-i*e*s/2,m=_=>e*(Lv(_,i)-i*u);for(let _=0;_<h;_++){const d=a+(o-a)*_/h,p=a+(o-a)*(_+1)/h,y=l[1]+(l[3]-l[1])*_/h,v=l[1]+(l[3]-l[1])*(_+1)/h,x=m(d),C=m(p),E=(d+p)/2-nt.cy,T=-i*Math.sqrt(Math.max(0,nt.R*nt.R-E*E))/nt.R;n.quad(t,[x,d,r+f],[x,d,r-f],[C,p,r-f],[C,p,r+f],[e*T,-E/nt.R,0],[l[0],y,l[2],v],c)}const g=(a+o)/2;return{x:m(g),y:g,z:r}}function Fv(n,t,e,i){const r=_=>t*_,s=nt.back+.14,a=nt.back+.6,o=e-.9,l=e+.9,c=Bt("bench"),u=ne("steelDark"),h=Math.min(r(s),r(a)),f=Math.max(r(s),r(a));n.box("cut",h,.4,o,f,.46,l,c,null,"xXyYzZ");const m=r(s+.02),g=r(s+.07);n.box("cut",Math.min(m,g),.56,o,Math.max(m,g),.95,l,c,null,"xXYzZ");for(const _ of[o+.12,e,l-.12])n.box("atlas",h+.05,0,_-.03,f-.05,.4,_+.03,u,null,"xXzZ");i.push([r(a+.05),o,r(a+.05),l],[r(s),o,r(a+.05),o],[r(s),l,r(a+.05),l])}function Ov(n,t,e,i){const{b:r,p:s,sheet:a,rng:o,env:l}=n,c=l.wrong||0,u=l.station,h=s.dir,f=ma(u,h);let m=null;if(o.chance(Math.min(.85,c*.22))){const S=o.weighted([["ghost",4],["swap",2],["repeat",c>=2?1.5:0],["missing",c>=3?1.5:0]]);m=Qs(f,S,o)||Qs(f,"swap",o)}const g=a.add(360,540,(S,M,A)=>wl(S,M,A,f,{dir:h})),_=Math.min(t*.42,13),d=il(r,"sheet",e,1,_,1.5,1.14,3.39,g,null,.05,5);i.push({...d,r:13,cone:.93,label:"read line diagram",title:"LINE DIAGRAM",text:Th(u,h,f),fault:m,onRead:S=>{S.state.diagramsRead=(S.state.diagramsRead||0)+1}});const p=[0,1].map(()=>{const S=Rl(u,c,o),M=o.chance(Math.min(.5,c*.14))?o.pick(uh):null;return{text:Cl(S)?`${S}. There is no such station on this line.`:M?`${S} — the roundel is not quite right.`:S,uv:a.add(100,100,(U,L,D)=>ha(U,L,D,S,{defect:M}))}});let y=0;const v=S=>{const M=p[y++%2],A=On(r,"sheet",e,1,S,.7,1.55,2.25,M.uv,null,.05);i.push({...A,r:10,cone:.96,label:"read name board",title:"STATION",text:M.text})};v(_-1.45),v(_+1.45);const x=[0,1,2].map(()=>{const S=o.chance(Math.min(.7,c*.17));let M;return{uv:a.add(240,140,(U,L,D)=>{M=is(U,L,D,o,S,!0)}),text:`${M.headline}. ${M.strap}.`}}),C=3.6,E=1.5,T=[[2.2,_-2.2],[_+2.2,t-2.2]];let P=0;for(const[S,M]of T){const A=Math.floor((M-S+E)/(C+E));if(A<1)continue;const U=(M-S-C)/Math.max(1,A-1);for(let L=0;L<A;L++){const D=A===1?(S+M)/2:S+C/2+U*L,F=x[P++%3],X=il(r,"sheet",e,1,D,C,1.22,3.3,F.uv,null,.05,4);i.push({...X,r:10,cone:.95,label:"read poster",title:"ADVERTISEMENT",text:F.text}),L<A-1&&U-C>.9&&v(D+U/2)}}}function kv(n,t,e){const{b:i,p:r,sheet:s,rng:a,env:o}=n,l=[],c=[],u=[],h=o.wrong||0,f=o.station,m=r.dir,g=Y=>e*Y,_=Math.round((t-6)/4.5)*3+1;for(let Y=0;Y<_;Y++){const rt=3+(t-6)*Y/(_-1),B=Y%3===0,K=Math.floor(Y/3);Fi(i,{x:g(.5),y:0,z:rt,yaw:0},3.45,{dead:r.dark&&K%3!==1,flick:r.faulty===K,noLight:!B,power:.62,radius:9.5,len:1.25})}Ov(n,t,e,l);const d=e>0?"left":"right",p=[s.add(384,36,(Y,rt,B)=>Zc(Y,rt,B,f,{arrow:d})),s.add(384,36,(Y,rt,B)=>Zc(Y,rt,B,f,{note:f==="Camden Town"?"Edgware branch":""}))];let y=0;for(let Y=1.5;Y<t-1;Y+=3,y++)On(i,"sheet",e,-1,Y,3,2.47,2.75,p[y%2],null,.03);const v=[0,1].map(()=>{const Y=Rl(f,h,a),rt=a.chance(Math.min(.6,h*.16))?a.pick(uh):null;return{text:Cl(Y)?`${Y}. There is no such station on this line.`:rt?`${Y} — the roundel is not quite right.`:Y,uv:s.add(150,183,(K,ct,at)=>ha(K,ct,at,Y,{defect:rt}))}}),x=nv(f),C=Math.min(5,1+.2*(x.length+2*x.split(" ").length)),E=s.add(512,Math.round(512*.53/C),(Y,rt,B)=>Q_(Y,rt,B,x,o.theme)),T=h>=1.5&&a.chance(Math.min(.8,h*.2))?a.shuffle(Tl).slice(0,a.int(1,2)):[],P=s.add(800,168,(Y,rt,B)=>Uh(Y,rt,B,{current:f,ghosts:T})),S=["roundel",r.start?"notice":"poster","name","poster","roundel","strip","poster","roundel","name","poster","help"],M={roundel:1.15,poster:1,name:C,strip:4.4,notice:.5,help:.34};let A=3,U=0,L=0;for(;U<40;){const Y=S[U%S.length],rt=M[Y];if(A+rt>t-2.6)break;const B=A+rt/2;if(Y==="roundel"){const K=v[L++%2],ct=On(i,"sheet",e,-1,B,rt,.85,2.25,K.uv);l.push({...ct,r:6,label:"read name board",title:"STATION",text:K.text})}else if(Y==="poster"){const K=a.chance(Math.min(.7,h*.17));let ct;const at=s.add(112,168,(Ct,Ut,se)=>{ct=is(Ct,Ut,se,a,K,!0)}),Et=On(i,"sheet",e,-1,B,rt,.62,2.12,at);l.push({...Et,r:5,label:"read poster",title:"POSTER",text:`${ct.headline}. ${ct.strap}.`})}else if(Y==="name"){const K=On(i,"sheet",e,-1,B,rt,1.72,2.25,E,null,.025);l.push({...K,r:7,label:"read tiles",title:"TILED NAME",text:`· ${x.toUpperCase().split(" ").join(" · ")} ·${x!==f?` (the frieze says ${f})`:""}`}),Fv(i,e,B,c)}else if(Y==="strip"){const K=On(i,"sheet",e,-1,B,rt,1,1.92,P);l.push({...K,r:6,cone:.92,label:"read line map",title:"NORTHERN LINE",text:cv(f,T)})}else if(Y==="notice"){const K=Zo[0],ct=s.add(168,216,(Et,Ct,Ut)=>Ko(Et,Ct,Ut,K,a)),at=On(i,"sheet",e,-1,B,rt,.95,1.6,ct,{tint:[1.1,1.1,1.1]});l.push({...at,r:4.5,label:"read notice",title:K.title,text:K.text,clue:!0,onRead:Et=>Et.story.noticeRead(K.key)})}else{const K=On(i,"cut",e,-1,B,rt,.7,1.38,Bt("helpPoint"));l.push({...K,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(ct,at,Et)=>ct.director.helpPoint(Et)})}A+=rt+.7,U++}if(!r.start&&a.chance(.45)){const Y=wh(n),rt=s.add(168,216,(K,ct,at)=>Ko(K,ct,at,Y,a)),B=On(i,"sheet",e,-1,1.9,.5,.95,1.6,rt,{tint:[1.1,1.1,1.1]});l.push({...B,r:4.5,label:"read notice",title:Y.title,text:Y.text,clue:!0,onRead:K=>K.story.noticeRead(Y.key)})}const D=ta("board"),F=$s(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,D,D,{emit:1.2},g(.15));l.push({...F,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const X=!!(o.stretch&&o.stretch.clocksBack),Z=ta(X?"clockBack":"clock"),q=$s(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,Z,Z,{emit:1.05},g(1.2));l.push({...q,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:X?"The second hand is ticking backwards.":"The clock is keeping time."});const z=s.add(250,56,(Y,rt,B)=>da(Y,rt,B,{dir:"up"})),$=s.add(250,56,(Y,rt,B)=>pa(Y,rt,B,`${yr(m)} platform ${Ui(m)}`,{sub:"Northern line",bg:"#f6f6f1",fg:"#16213f"})),J=$s(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,z,$,{emit:1.25},g(0));if(l.push({...J,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}),i.quad("atlas",[g(nt.track+.98),.9,t+.4],[g(nt.track+1.13),.9,t+.4],[g(nt.track+1.13),1.05,t+.4],[g(nt.track+.98),1.05,t+.4],[0,0,-1],ne("white"),{emit:1.6,tint:[1,.12,.08]}),r.figure){const Y=g(.75),rt=t-7;i.quad("figure",[Y+.3,0,rt],[Y-.3,0,rt],[Y-.3,1.78,rt],[Y+.3,1.78,rt],[0,0,-1],Bt("figure"),{emit:.02}),u.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(B,K)=>B.director.events.figureGone(K)})}return{items:l,walls:c,zones:u}}const zv={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=e?30:n.pick([30,36,36,42]),r=n.sign(),s=t.stretch,a=s?s.plan.slice(0,t.idx).filter(h=>h==="platform").length:0,o=s&&s.dir||"north",l=a%2?o==="north"?"south":"north":o,c=nt.back-.4,u=nt.cx+nt.R+.4;return{p:{L:i,side:r,start:e,dir:l,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:r>0?[c,-2.4,-1.2-.2,u,nt.cy+nt.R+.3,i+pe.depth+.2]:[-u,-2.4,-1.2-.2,-c,nt.cy+nt.R+.3,i+pe.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:r}=e;Nv(t,i,r),uu(t,0,1,r,!e.start),uu(t,i,-1,r,!0),e.start||(t.addPortal(0,0,0,0),mi(t,{x:0,y:0,z:0,yaw:0},Lt.crown)),t.addPortal(0,0,i,0);const s=kv(n,i,r),a=m=>r*m,o=(nt.back+nt.edge)/2,l=(nt.edge-nt.back)/2,c=[{ax:a(o),az:0,bx:a(o),bz:i,hw:l,ya:0,yb:0}],u=Lt.W/2,h=[[a(nt.back+.08),0,a(nt.back+.08),i],[a(nt.edge-.1),0,a(nt.edge-.1),i],[a(nt.back),i,a(-u),i],[a(u),i,a(nt.edge),i]];e.start?h.push([a(nt.back),0,a(nt.edge),0]):h.push([a(nt.back),0,a(-u),0],[a(u),0,a(nt.edge),0]);for(const m of s.walls)h.push(m);const f={zones:s.zones};return e.start&&(f.spawn={x:a(.1),z:6,yaw:0}),{cells:c,walls:h,items:s.items,extra:f}}},Bv=.16,Hv=.3,gn=1.6,Tn=(n,t)=>n+t*Hv,Kr=(n,t,e)=>n+t*Bv*e;function Pl(n,t,e,i,r=[-1.5,-.5,.5,1.5],s=0,a=null){const o=Bt("stairTread"),l=Bt("riser");for(let c=0;c<e;c++){const u=Tn(t,c),h=Tn(t,c+1),f=Kr(s,i>0?c+1:c,i),m=Kr(s,i>0?c:c+1,i);for(let g=0;g<r.length-1;g++){const _=r[g],d=r[g+1];i>0?n.quad("atlas",[d,f,h],[_,f,h],[_,f,u],[d,f,u],[0,1,0],o,a):n.quad("atlas",[_,f,u],[d,f,u],[d,f,h],[_,f,h],[0,1,0],o,a),i>0?n.quad("atlas",[_,m,u],[d,m,u],[d,f,u],[_,f,u],[0,0,-1],l,a):n.quad("atlas",[_,m,h],[d,m,h],[d,f,h],[_,f,h],[0,0,1],l,a)}}}function Ll(n,t,e,i,r,s,a=.025,o="rubber",l=null){const c=ne(o),u=[t-a,i+a,e],h=[t+a,i+a,e],f=[t+a,s+a,r],m=[t-a,s+a,r];n.quad("atlas",u,h,f,m,[0,1,0],c,l);const g=t>0?-1:1,_=t+g*a;n.quad("atlas",[_,i-a,e],[_,i+a,e],[_,s+a,r],[_,s-a,r],[g,0,0],c,l)}const Gv={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),r=Tn(0,i),s=Kr(0,i,e),a=Tn(gn,i)+gn;return{p:{dir:e,n:i,run:r,rise:s,len:a,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:s,z:a,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,a]}},build(n){const{b:t,p:e}=n,i=Tn(gn,e.n),r=h=>Ue((h-gn)/e.run,0,1)*e.rise,s=[0,gn],a=Math.round(e.run/.9);for(let h=1;h<a;h++)s.push(gn+e.run*h/a);s.push(i,e.len);const o=s.map(h=>({x:0,y:r(h),z:h,yaw:0})),l=di(t,o,bl(Lt),{floor:null});for(const h of l.cells)h.surface="stone";const c=Lt.W/2,u=Bt("floor");for(let h=0;h<3;h++){const f=-c+h,m=f+1;t.quad("atlas",[f,0,0],[m,0,0],[m,0,gn],[f,0,gn],[0,1,0],u),t.quad("atlas",[f,e.rise,i],[m,e.rise,i],[m,e.rise,e.len],[f,e.rise,e.len],[0,1,0],u)}Pl(t,gn,e.n,e.dir);for(const h of[-c+.09,c-.09])Ll(t,h,gn-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,o[0],Lt.crown),gh(t,o,l.dist,Lt.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:o}}},Dl=5.4,de=Dl/2,rl=1.2,sl=3.7,eo=Sl(Dl,rl,sl),oi=3.6,_n=1.2,hu=Math.tan(Math.PI/6),Qi=[-.95,.95],cn=.5,ze=.92,Vv={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),r=i*hu*e,s=oi*2+i;return{p:{dir:e,run:i,rise:r,len:s,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:r,z:s,yaw:0}],box:[-de-.4,Math.min(0,r)-.5,0,de+.4,Math.max(0,r)+4.3,s]}},build(n){const{b:t,p:e,sheet:i,rng:r}=n,s=oi,a=oi+e.run,o=z=>Ue((z-s)/e.run,0,1)*e.rise,l=[0,oi-_n,s],c=Math.round(e.run/1.2);for(let z=1;z<=c;z++)l.push(s+e.run*z/c);l.push(a+_n,e.len);const u=l.map(z=>({x:0,y:o(z),z,yaw:0}));di(t,u,eo,{floor:null}),xr(t,u[0],eo,Lt,1,"tile"),xr(t,u[u.length-1],eo,Lt,-1,"tile");const h=[0,1,0],f=Bt("floor"),m=Bt("deck"),g=ne("metal");for(const[z,$,J]of[[0,oi-_n,0],[a+_n,e.len,e.rise]])t.grid("atlas",[-de-.04,J,z],[Dl+.08,0,0],[0,0,$-z],5,2,h,f,null,!0);const _=.4,d=Math.round(e.run/_),p=e.rise/d,y=z=>z===d?a:s+z*_,v=z=>z===d?e.rise:z*p,x=Bt("tread"),C=ne("steelDark"),E=Bt("comb");for(const z of Qi){const $=z-cn,J=z+cn;for(const[Y,rt,B]of[[oi-_n,s,0],[a,a+_n,e.rise]])t.quad("atlas",[$,B,Y],[J,B,Y],[J,B,rt],[$,B,rt],h,m);t.quad("atlas",[$,.003,s-.25],[J,.003,s-.25],[J,.003,s],[$,.003,s],h,E),t.quad("atlas",[J,e.rise+.003,a+.25],[$,e.rise+.003,a+.25],[$,e.rise+.003,a],[J,e.rise+.003,a],h,E);for(let Y=0;Y<d;Y++){const rt=y(Y),B=y(Y+1),K=v(p>0?Y+1:Y),ct=v(p>0?Y:Y+1);t.quad("atlas",[$,K,rt],[J,K,rt],[J,K,B],[$,K,B],h,x);const at=p>0?rt:B;t.quad("atlas",[$,ct,at],[J,ct,at],[J,K,at],[$,K,at],[0,0,p>0?-1:1],C)}}Pi(t,u[0],de+.04),Pi(t,u[u.length-1],de+.04),Pi(t,{x:0,y:0,z:oi-_n,yaw:0},de),Pi(t,{x:0,y:e.rise,z:a+_n,yaw:0},de);const T=[-de,Qi[0]-cn,Qi[0]+cn,Qi[1]-cn,Qi[1]+cn,de],P=oi-_n,S=a+_n,M=[[P,s,0,0],[s,a,0,e.rise],[a,S,e.rise,e.rise]];for(const[z,$,J,Y]of M){for(let rt=0;rt<6;rt+=2){const B=T[rt],K=T[rt+1];t.quad("atlas",[B,J+ze,z],[K,J+ze,z],[K,Y+ze,$],[B,Y+ze,$],h,m)}for(const[rt,B]of[[T[1],1],[T[2],-1],[T[3],1],[T[4],-1]])t.quad("atlas",[rt,J,z],[rt,Y,$],[rt,Y+ze,$],[rt,J+ze,z],[B,0,0],g),t.quad("atlas",[rt,J-.3,z],[rt,Y-.3,$],[rt,Y,$],[rt,J,z],[B,0,0],ne("steelDark")),Ll(t,rt+B*.03,z,J+ze+.04,$,Y+ze+.04,.04)}for(let z=0;z<6;z+=2){const $=T[z],J=T[z+1];t.quad("atlas",[$,0,P],[J,0,P],[J,ze,P],[$,ze,P],[0,0,-1],g),t.quad("atlas",[$,e.rise,S],[J,e.rise,S],[J,e.rise+ze,S],[$,e.rise+ze,S],[0,0,1],g)}const A=i.add(150,46,(z,$,J)=>pa(z,$,J,"Stand on the right",{bg:"#0019a8"}));for(let z=0;z<3;z++){const $=s+e.run*(.2+.3*z),J=o($)+ze;t.quad("sheet",[.24,J+.02,$],[-.24,J+.02,$],[-.24,J+.17,$],[.24,J+.17,$],[0,0,-1],A),t.quad("sheet",[-.24,J+.02,$+.01],[.24,J+.02,$+.01],[.24,J+.17,$+.01],[-.24,J+.17,$+.01],[0,0,1],A)}const U=Math.max(2,Math.round(e.run/3.2));for(let z=0;z<U;z++){const $=s+e.run*(z+.5)/U,J=o($)+ze,Y=e.faulty===z;t.box("atlas",-.04,J,$-.04,.04,J+1.25,$+.04,ne("steelDark"),null,"xXzZ"),t.box("atlas",-.2,J+1.25,$-.2,.2,J+1.36,$+.2,Bt("uplight"),{emit:1.5,flick:Y},"xXzZY"),t.addLight(0,J+2.2,$,.5,8,Y,[1,.95,.82])}for(const[z,$]of[[1.6,0],[e.len-1.6,e.rise]])Fi(t,{x:0,y:$,z,yaw:Math.PI/2},sl-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,u[0],Lt.crown);const L=[];for(let z=0;z<4;z++)L.push(i.add(84,116,($,J,Y)=>is($,J,Y,r,r.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const D=z=>de*Math.cos(Math.asin(Ue((z-rl)/(sl-rl),0,1)));let F=0;for(let z=s+.8;z<a-.4;z+=1.5,F++){const $=o(z),J=hu*Math.sign(e.rise)*.27;for(const Y of[-1,1]){const rt=Y*(D(1.55)-.04),B=Y*(D(2.3)-.04);t.quad("sheet",[rt,$+1.55-J*Y,z-.27*Y],[rt,$+1.55+J*Y,z+.27*Y],[B,$+2.3+J*Y,z+.27*Y],[B,$+2.3-J*Y,z-.27*Y],[-Y,0,0],L[(F+(Y>0?2:0))%4])}}const X=[{ax:0,az:0,bx:0,bz:P,hw:de,ya:0,yb:0},{ax:0,az:S,bx:0,bz:e.len,hw:de,ya:e.rise,yb:e.rise}],Z=[[-de,0,-de,P],[de,0,de,P],[-de,S,-de,e.len],[de,S,de,e.len]],q=Lt.W/2;for(const z of[0,e.len])Z.push([-de,z,-q,z],[q,z,de,z]);for(const z of Qi){for(const[$,J,Y,rt]of M)X.push({ax:z,az:$,bx:z,bz:J,hw:cn,ya:Y,yb:rt,surface:"metal"});Z.push([z-cn,P,z-cn,S],[z+cn,P,z+cn,S])}for(let z=0;z<6;z+=2)Z.push([T[z],P,T[z+1],P],[T[z],S,T[z+1],S]);return{cells:X,walls:Z,items:[],frames:u}}},Ke=3,Wv=5.2,Ir=24,Xv={type:"exit",plan(){const n=Tn(0,Ir),t=Kr(0,Ir,1),e=Tn(Ke,Ir)+Wv;return{p:{run:n,rise:t,len:e},exits:[],box:[-1.9,-.4,0,1.9,t+3.3,e]}},build(n){const{b:t,p:e,sheet:i}=n,r=L=>Ue((L-Ke)/e.run,0,1)*e.rise,s=[0,1.5,Ke],a=Math.round(e.run/.9);for(let L=1;L<=a;L++)s.push(Ke+e.run*L/a);s.push(e.len-2.2,e.len);const o=s.map(L=>({x:0,y:r(L),z:L,yaw:0})),l=di(t,o,bl(Lt),{floor:null});for(const L of l.cells)L.surface="stone";const c=Lt.W/2,u=Bt("floor"),h=-c-.03,f=Lt.W+.06,m=Tn(Ke,Ir);t.grid("atlas",[h,0,0],[f,0,0],[0,0,Ke],3,3,[0,1,0],u,null,!0),t.grid("atlas",[h,e.rise,m],[f,0,0],[0,0,e.len-m],3,4,[0,1,0],u,null,!0),Pl(t,Ke,Ir,1,[0,1,2,3].map(L=>h+f*(L/3)));for(const L of[-c+.09,c-.09])Ll(t,L,Ke-.3,.95,Ke+e.run+.3,e.rise+.95);const g={x:0,y:e.rise,z:e.len-.02,yaw:0},_=ne("daylight");xr(t,g,ph(Lt),null,-1,"atlas",()=>[(_[0]+_[2])/2,(_[1]+_[3])/2],{emit:2}),t.addLight(0,e.rise+1.6,e.len-.6,2.4,11,!1,[1,1,1]),t.addLight(0,e.rise+1.2,e.len-3.5,1.2,9,!1,[1,1,1]);const d=Bt("gate");for(const L of[-1,1]){const D=L*(c-.06),F=m+.3;t.quad("cut",[D,e.rise,F],[D,e.rise,F+.7],[D,e.rise+2.3,F+.7],[D,e.rise+2.3,F],[-L,0,0],d,{emit:.25})}const p=m+1.5,y=p+1,v=[],x=ne("metal"),C=e.rise;for(const L of[-.5,.5]){t.box("atlas",L-.11,C,p,L+.11,C+.98,y,x,null,"xXYzZ"),t.quad("atlas",[L-.08,C+.985,p+.08],[L+.08,C+.985,p+.08],[L+.08,C+.985,p+.26],[L-.08,C+.985,p+.26],[0,1,0],ne("yellow"),{emit:1.1}),t.quad("atlas",[L+.06,C+.7,p-.005],[L-.06,C+.7,p-.005],[L-.06,C+.82,p-.005],[L+.06,C+.82,p-.005],[0,0,-1],ne("white"),{emit:1.7,tint:[.15,1,.3]});for(const D of[-1,1]){const F=L+D*.125;t.quad("atlas",[F,C+.25,p+.5],[F,C+.25,p+.9],[F,C+.85,p+.9],[F,C+.85,p+.5],[D,0,0],ne("white"),{tint:[.85,.12,.1]})}v.push([L-.11,p,L-.11,y],[L+.11,p,L+.11,y],[L-.11,p,L+.11,p],[L-.11,y,L+.11,y])}t.addPortal(0,0,0,0),mi(t,o[0],Lt.crown),Fi(t,{x:0,y:r(Ke+e.run*.3),z:Ke+e.run*.3,yaw:0},Lt.crown-.04,{});const E=i.add(250,56,(L,D,F)=>da(L,D,F,{dir:"up"})),T=i.add(250,56,(L,D,F)=>pa(L,D,F,"No entry")),S=[{...$s(t,"sheet",{x:0,y:0,z:Ke-.6,yaw:0},2.1,1.7,.38,E,T,{emit:1.3}),r:8,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"}],M=l.walls.concat([[-c,e.len-.4,c,e.len-.4]],v),A={y0:e.rise-.6,y1:e.rise+.6},U=[{x0:-c,x1:c,z0:p+.2,z1:y,...A,fire:L=>{L.audio.sfx("touchOut"),L.director.setHint("Golders Green. The air is cold and smells of rain.",6)}},{x0:-c,x1:c,z0:y+.9,z1:e.len,...A,fire:L=>L.director.win()}];return{cells:l.cells,walls:M,items:S,frames:o,extra:{zones:U}}}},qv={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,r=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],s=di(t,r,Lt,{floor:Bt("floor")}),a=Bt("shutter");xr(t,{x:0,y:0,z:e.len-.02,yaw:0},ph(Lt),null,-1,"atlas",(u,h)=>[a[0]+(a[2]-a[0])*(u/Lt.W+.5),a[1]+(a[3]-a[1])*(h/Lt.crown)]),t.addPortal(0,0,0,0),mi(t,r[0],Lt.crown);const o=i.add(200,60,(u,h,f)=>pa(u,h,f,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],o);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:s.cells,walls:s.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:r}}},al=2.3,Oh=2.4,no=Sl(al,1.2,Oh),ye=1.2,Os=2.5,$v={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),r=Tn(ye+Os,e)+Os+ye,s=Kr(0,e,i);return{p:{steps:e,dir:i,len:r,rise:s,flick:n.chance(.35)},exits:[{x:0,y:s,z:r,yaw:0}],box:[-1.9,Math.min(0,s)-.4,0,1.9,Math.max(0,s)+3.3,r]}},build(n){const{b:t,p:e,sheet:i,theme:r}=n,s=ye+Os,a=Tn(s,e.steps),o=a-s,l=E=>(o>0?Ue((E-s)/o,0,1):E>=s?1:0)*e.rise,c=E=>({x:0,y:l(E),z:E,yaw:0}),u=di(t,[c(0),c(ye)],Lt,{floor:Bt("floor")}),h=[ye,ye+1.25,s];o>0&&h.push(a),h.push(a+1.25,e.len-ye);const f=di(t,h.map(c),bl(no),{floor:null,u0:ye}),m=di(t,[c(e.len-ye),c(e.len)],Lt,{floor:Bt("floor"),u0:e.len-ye});xr(t,c(ye),Lt,no,-1,"tile"),xr(t,c(e.len-ye),Lt,no,1,"tile");const g=al/2,_=Bt("floorDark"),d=-g-.03,p=al+.06;t.grid("atlas",[d,0,ye],[p,0,0],[0,0,Os],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,a],[p,0,0],[0,0,e.len-ye-a],2,3,[0,1,0],_,null,!0),e.steps>0&&Pl(t,s,e.steps,e.dir,[0,1,2].map(E=>d+p*(E/2)),0),Pi(t,c(ye),Lt.W/2,"floorDark"),Pi(t,c(e.len-ye),Lt.W/2,"floorDark");for(const E of f.cells)E.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),mi(t,c(0),Lt.crown),Fi(t,c((s+a)/2),Oh-.03,{flick:e.flick,power:.8,radius:6,len:.9});const y=[],v=[["TO THE TRAINS",-1,ye+1.3],["WAY OUT",1,e.len-ye-1.3]];for(const[E,T,P]of v){const S=i.add(220,54,(A,U,L)=>_h(A,U,L,E,r,T>0?"right":"left")),M=Zn(t,"sheet",c(P),T,g,l(P)+.72,1.4,.345,S,null,.025);y.push({...M,r:4,label:"read tiles",title:"TILED LEGEND",text:E==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const x=u.walls.concat(f.walls,m.walls),C=Lt.W/2;for(const E of[ye,e.len-ye])x.push([-C,E,-g,E],[g,E,C,E]);return{cells:u.cells.concat(f.cells,m.cells),walls:x,items:y}}},zn={corridor:xv,bend:yv,junction:Pv,platform:zv,stairs:Gv,escalator:Vv,exit:Xv,deadend:qv,cross:$v},yn=n=>!!zn[n];function fu(n,t={}){const e=n.stretchCount+1,i=new Re(nn(n.seed,1e3+e*13)),r=[];if(t.first&&r.push(yn("platform")?"platform":"corridor"),t.fromJunction&&r.push("corridor"),t.exit)r.push("corridor",yn("exit")?"exit":"corridor");else{const o=i.int(2,4);let l=t.first?1:0,c=r[r.length-1]||"";for(let u=0;u<o;u++){const h=i.weighted([["corridor",c==="corridor"?1:3],["bend",c==="bend"?.4:2.2],["stairs",yn("stairs")&&c!=="stairs"?1.5:0],["escalator",yn("escalator")&&c!=="escalator"?.7:0],["platform",yn("platform")&&l<1&&u>0?1.6:0]]);r.push(h),h==="platform"&&(l++,yn("cross")&&i.chance(.5)&&r.push("cross","platform")),c=h}yn("platform")&&!r.includes("platform")&&r.splice(i.int(Math.min(1,r.length),r.length),0,"platform"),r[r.length-1]!=="corridor"&&r.push("corridor"),r.push(yn("junction")?"junction":"corridor")}t.fromJunction&&n.testBranch&&r.splice(0,r.length,"corridor",...n.testBranch),n.stretchCount++;let s=n.progress;t.fromJunction&&(s=t.correct?n.progress+1:Math.max(0,n.progress-2));const a=ev(s);return{id:e,plan:r,rng:i,index:Math.min(s,Jo.length),station:a,theme:xh(a),dir:i.chance(.5)?"north":"south",dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const Yv=new Set(["junction","cross"]);function jv(n){return p_(0,n)}function Zv(n,t,e,i,r){const s=n.game.world,a=jv(s.exitPose(t,e).yaw);let o=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(o=n.branchStretch(t,e),l=0);let c=o.plan[l];c===void 0&&(c="corridor",l=o.plan.length);const u=_=>n.envFor(o,l,{yaw:a,..._}),h=_=>n.envFor(o,l-1,{yaw:a,filler:!0,..._}),f=a>.1?-1:a<-.1?1:0;if(i===0){if(Yv.has(c)&&f!==0)return{def:zn.bend,env:h({turn:f})};if(c==="bend"){const _=f!==0?f:r.sign();return{def:zn.bend,env:u({turn:_})}}if(c==="junction")return{def:zn.junction,env:u(n.junctionEnv(r))};if(l===0&&o.fromJunction){const _=t.env;return{def:zn.corridor,env:u({gate:!0,len:8,noticeChance:0,theme:_.theme,station:_.station}),force:!0}}return{def:zn[c]||zn.corridor,env:u({})}}const m=[];f!==0?m.push(["bend",{turn:f}]):m.push(["bend",{turn:1}],["bend",{turn:-1}]),m.push(["corridor",{short:!0}]),yn("stairs")&&m.push(["stairs",{dir:-1}],["stairs",{dir:1}]),yn("escalator")&&m.push(["escalator",{dir:-1}],["escalator",{dir:1}]),m.push(["corridor",{short:!0,tiny:!0}]);const g=m[i-1];return g?{def:zn[g[0]],env:h(g[1])}:null}const io=n=>String(n).padStart(2,"0"),du={"Battersea Power Station":"Battersea Pwr Stn","via Charing Cross":"via CX","via Bank":"via Bank"},pu=["There is a good service on the Northern line","Please stand behind the yellow line","Mind the gap between the train and the platform","This station closes after the last train","Please keep your belongings with you at all times","Check front of train for destination"],mu=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain","North End. This train does not stop at North End"];function Kv(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function gu(n){const t=(Math.floor(n)%86400+86400)%86400;return`${io(Math.floor(t/3600))}:${io(Math.floor(t/60)%60)}:${io(t%60)}`}function _u(n,t,e=28){const i=`${n}   ***   `,r=Math.floor(t*5)%i.length;return(i+i+i).slice(r,r+e)}const Jv=n=>n<=0?"due":`${n} min${n===1?"":"s"}`;function kh(n,t,e,i,r){const s=lv(n,t),a=[];for(let o=0;o<2;o++){const l=e.nextAt+o*e.period,c=new Re(nn(r,Math.round(l))),[u,h]=s[Math.floor(c.next()*s.length)],f=`${du[u]||u}${h?` ${du[h]||h}`:""}`;a.push({dest:u,via:h,label:f,secs:l-i})}return a}function Qv(n,t){n.anchorTod===void 0&&(n.anchorTod=Kv(),n.anchorT=t);const e=n.game,i=n.anchorTod+(t-n.anchorT),r=n.anchorTod-(t-n.anchorT),s=Yt.goal-n.progress,a=n.wrong,o=Math.floor(t/12),l=new Re(nn(n.seed,o)),c=l.chance(Math.min(.85,a*.2)),u=e.world&&e.world.current,h=u&&u.env.station||"Mornington Crescent",f=(u&&u.def.type==="platform"?u.p.dir:u&&u.env.pdir)||"north",m=e.trains?e.trains.schedule():{nextAt:e.state.time+150,period:240},g=kh(h,f,m,e.state.time,n.seed);let _=s<=0?"approaching":`${s} min${s===1?"":"s"}`;a>=3&&Math.floor(t*4)%23===0&&(_=l.pick(["-- mins","99 mins","never"]));const d=(C,E)=>({l:`${C} ${E.label}`,r:Jv(Math.max(0,Math.ceil(E.secs/60)))});let p=[d(1,g[0]),{l:"2 Way out",r:_},d(3,g[1])];c&&(p[2]=l.pick([{l:"3 Check front of train",r:""},{l:`3 ${h}`,r:"due"},{l:"3 North End",r:"-- mins"},{l:"3 Not in service",r:""}])),e.trains&&e.trains.atPlatform()&&(p[0]={l:`1 ${g[0].label}`,r:""});const y=n.lastWrong?r:i,x=o%3===1?_u(c?l.pick(mu):l.pick(pu),t):gu(y);return{rows:p,footer:x,rows2:[{l:"Way out",r:_},{l:n.lastWrong?"You are going the wrong way":"Follow the yellow and black signs"},{l:_u(c?l.pick(mu):l.pick(pu),t)}],footer2:gu(y),tod:i,todBack:r}}class tx{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new Re(nn(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=fu(this,{first:!0});e&&(i.plan=e.slice());const r=zn[i.plan[0]],s=this.envFor(i,0);return t.start(r,s,nn(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,pdir:t.dir,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,...i}}choose(t,e,i,r){return Zv(this,t,e,i,r)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,r=i&&this.progress+1>=Yt.goal;t.branches[e]=fu(this,{correct:i,fromJunction:t,exit:r,clocksBack:!i})}return t.branches[e]}junctionEnv(t){const e=this.junctionsPlanned++,i=this.progress<2?0:this.progress<4?1:2,r=e===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||r,jlevel:this.forceLevel??i}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min(Yt.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}boardState(t){return Qv(this,t)}}class ex{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.last=null,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,r=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:r,dur:r+Math.max(3.2,i*.43)+.8,spoken:!1,a:t,tag:t.tag!==void 0?t.tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const r=this.rng.next();let s=V_,a=!1;r<Math.min(.8,i*.22)&&(s=i>=3&&this.rng.chance(.5)?X_:W_,a=!0);const o=e.state.station||"this station",l=this.rng.pick(s).replaceAll("{station}",o).replaceAll("{next}",Eh(o,"north")||"the next station");this.say({text:l,chime:a&&this.rng.chance(.6)?"fall":"rise",odd:a})}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class nx{constructor(t){this.game=t,this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=Ci(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;this.dipT>0&&(i=.35+.3*Se(t*18,9));const r=this.game.trains?this.game.trains.level:0;return r>.02&&(i*=1-.22*r*(.5+.5*Se(t*14,4))),this.blackout>0&&(i=.02),this.pow=Ci(this.pow,i,20,e||.016),this.pow}}function ix(n,t){const e=n.world,i=e.current,r=n.state;if(!i)return;const s=i.env;s.station&&r.station!==s.station&&(r.station=s.station);const a=i.built;if(!a||!a.extra)return;const[o,l]=fa(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(a.extra.zones)for(const u of a.extra.zones)u.done||o>=u.x0&&o<=u.x1&&l>=u.z0&&l<=u.z1&&(u.y0===void 0||c>=u.y0&&c<=u.y1)&&(u.once!==!1&&(u.done=!0),u.fire(n,i,u,t))}function rx(n,t){const e=n.p,i=s=>s===0?"left":"right",r=s=>`${e.dirs[s]==="north"?"northbound":"southbound"} platform`;if(e.kind==="announce"){const s=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow signs for the ${r(s)}. To the ${i(s)}. Please.`,`The way out is by the ${r(s)}, on the ${i(s)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(s)}, for the ${r(s)}. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${r(s)}, to the ${i(s)}.`,`Customers for the way out should keep to the ${i(s)} for the ${r(s)}.`,`The way out is by way of the ${r(s)}, on your ${i(s)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return e.kind==="clock"?{text:"Customers are reminded that all station clocks run forwards.",chime:"rise",urgent:!0}:{text:"Please follow the yellow and black signs for the way out.",chime:"rise",urgent:!0}}const sx=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function ax(n,t){const e=rx(t,n.director.announcer.rng);t.announcement=e,n.director.announcer.say(e),n.state.junctionKind=t.p.kind}function ox(n,t){const e=n.director.announcer;if(t.p.kind==="announce"&&t.announcement){e.say({...t.announcement,urgent:!0}),n.director.reading=null,n.player.zoomTarget=0;return}const i=e.rng.pick(sx);e.say({text:i,chime:"none",urgent:!0}),n.director.reading=null,n.player.zoomTarget=0}function lx(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,r=n.story,s=n.director.events;t.gateShut=!0,t.gateWall=nu,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(nu));const a=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const o=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(o,l,c);const u=n.player;u.pos.x-=o,u.pos.y-=l,u.pos.z-=c,u.eyeY-=l,i.refresh(),n.audio.sfx("gate"),s.lightsOut(.28),s.glitch(a?.5:1.3),e.def.type==="junction"&&(r.decide(a),a?r.progress>=Yt.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),s.brownOut(2.2)),n.state.lastChoice=a?"right":"wrong")}class cx{constructor(t){this.game=t,this.announcer=new ex(t),this.events=new nx(t),this.reset()}reset(){this.target=null,this.reading=null,this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Mornington Crescent. Walk up the line to the way out. Staff notices explain how.",8)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){ax(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read both signs before you choose.",7))}helpPoint(t){ox(this.game,t)}commit(t){lx(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),r=Math.floor(e.time%60),s=[["Tape length",`${i}:${String(r).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Sent back down the line",`${e.wrongTurns} time${e.wrongTurns===1?"":"s"}`],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(s),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,3).map(r=>r.r?`${r.l} … ${r.r}`:r.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:r}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:r},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,r)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,r=e.viewDir(),s=e.pos.x,a=e.eyeY,o=e.pos.z;let l=null,c=0;const u=[i.current,...i.neighbours(i.current)];for(const h of u)if(h.built)for(const f of h.built.items){if(f.hidden)continue;const[m,g,_]=ur(h,f.x,f.y,f.z),d=m-s,p=g-a,y=_-o,v=Math.hypot(d,p,y);if(v>(f.r||5.5)||v<.2)continue;const x=(d*r.x+p*r.y+y*r.z)/v,C=f.cone||.9;if(x<C)continue;const E=x-v*.01;E>c&&(c=E,l={item:f,node:h,d:v,dot:x})}if(this.target=l,this.reading){const h=this.reading,[f,m,g]=ur(h.node,h.item.x,h.item.y,h.item.z),_=f-s,d=m-a,p=g-o,y=Math.hypot(_,d,p),v=(_*r.x+d*r.y+p*r.z)/Math.max(y,.001);(y>(h.item.r||5.5)+1.5||v<.55||!h.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[r,s]=this.hints.shift();this.setHint(r,s)}e.step&&i.audio.footstep(e.running,i.player.loc),ix(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,r=new Date;let s="";t&&this.target&&!this.reading&&(s=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const a=this.announcer.caption();i.caption=a?a.text:"",i.prompt=s,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:r,live:i.started,caption:a?a.text:"",captionTag:a?a.tag:"",prompt:s,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const o=e.renderer.dv.uniforms;o.uTrack.value=this.events.tracking,o.uZoom.value=e.player.zoom}}const Hn=512,na=256,Bn={side:[0,0,512,160],front:[0,164,150,92],rear:[154,164,150,92],roof:[310,170,30,30],dark:[350,170,30,30],lamp:[390,170,30,30],tail:[430,170,30,30]},fr=[-.78,1.5];let ks=null,mt=null,Gr=null;const zt=n=>160-(n-fr[0])/(fr[1]-fr[0])*160;function vu(n,t,e,i){const r=mt.createLinearGradient(0,zt(i),0,zt(e));r.addColorStop(0,"#fff6d6"),r.addColorStop(.55,"#e9dba4"),r.addColorStop(1,"#8c8468"),mt.fillStyle="#1b1c1e",mt.fillRect(n-2,zt(i)-2,t+4,zt(e)-zt(i)+4),mt.fillStyle=r,mt.fillRect(n,zt(i),t,zt(e)-zt(i)),mt.fillStyle="rgba(40,40,60,0.55)",mt.fillRect(n+t*.3,zt(i),2,zt(e)-zt(i)),mt.fillRect(n,zt(e+.16),t,zt(e)-zt(e+.16))}function ux(){const n=60.23529411764706;mt.fillStyle="#15161a",mt.fillRect(0,zt(-.05),Hn,160-zt(-.05));for(const[e,i]of[[.9,2.3],[6.2,7.6]]){mt.fillStyle="#26282c",mt.fillRect(e*n,zt(-.25),(i-e)*n,zt(-.7)-zt(-.25));for(const r of[e+.35,i-.35])mt.fillStyle="#3a3c40",mt.beginPath(),mt.arc(r*n,zt(-.48),.27*70,0,7),mt.fill()}mt.fillStyle="#f2f2ee",mt.fillRect(0,0,Hn,zt(.42)),mt.fillStyle="#0c2a8e",mt.fillRect(0,zt(.42),Hn,zt(-.05)-zt(.42)),mt.fillStyle="#9da2a6",mt.fillRect(0,0,Hn,zt(1.42));const t=[[.25,.62,"door1"],[1.05,1.3,"win"],[2.5,1.3,"door2"],[3.95,.6,"win"],[4.7,.5,"win"],[5.35,1.3,"door2"],[6.8,1.3,"win"],[8.2,0,""]];for(const[e,i,r]of t)if(r==="win")vu(e*n,i*n,.72,1.3);else if(r){mt.fillStyle="#d5231d",mt.fillRect(e*n,zt(1.42),i*n,zt(-.05)-zt(1.42));const s=r==="door2"?2:1;for(let a=0;a<s;a++){const o=(e+i/s*a)*n,l=i/s*n;vu(o+l*.2,l*.6,.62,1.3),mt.fillStyle="rgba(0,0,0,0.5)",mt.fillRect(o,zt(1.42),1.5,zt(-.05)-zt(1.42))}mt.fillStyle="#e7c21c",mt.fillRect(e*n,zt(-.02),i*n,3)}Ml(mt,4.6*n,zt(.2)-6,12,{name:""}),mt.fillStyle="rgba(60,45,25,0.16)";for(let e=0;e<260;e++)mt.fillRect(Math.random()*Hn,zt(.5)+Math.random()*(160-zt(.5)),2,2+Math.random()*5)}function xu(n,t){const[,e,i,r]=Bn.front;mt.fillStyle="#d5231d",mt.fillRect(n,e,i,r),mt.fillStyle="#9da2a6",mt.fillRect(n,e,i,r*.06),mt.fillStyle="#101113",mt.fillRect(n+i*.06,e+r*.2,i*.88,r*.34),mt.fillStyle="#2a2f36";for(const[s,a]of[[.09,.36],[.41,.59],[.64,.91]])mt.fillRect(n+i*s,e+r*.23,i*(a-s),r*.28);mt.fillStyle="#101113",mt.fillRect(n+i*.3,e+r*.07,i*.4,r*.11),mt.fillStyle="#101113",mt.fillRect(n,e+r*.86,i,r*.14);for(const s of[.16,.84])mt.fillStyle=t,mt.beginPath(),mt.arc(n+i*s,e+r*.7,r*.055,0,7),mt.fill(),mt.fillStyle="#55120f",mt.beginPath(),mt.arc(n+i*(s<.5?s+.09:s-.09),e+r*.7,r*.04,0,7),mt.fill()}function zh(){if(ks)return;ks=An(Hn,na),mt=ks.getContext("2d"),mt.fillStyle="#15161a",mt.fillRect(0,0,Hn,na),ux(),xu(Bn.front[0],"#fff4c8"),xu(Bn.rear[0],"#ff2a1a");const n=(t,e)=>{mt.fillStyle=e,mt.fillRect(t[0]-3,t[1]-3,t[2]+6,t[3]+6)};n(Bn.roof,"#8d9296"),n(Bn.dark,"#131417"),n(Bn.lamp,"#fff6d8"),n(Bn.tail,"#ff2a1a"),Gr=new ca(ks),Gr.colorSpace=Xe,Gr.anisotropy=2}function hx(){return zh(),Gr}function fx(n){zh();const[t,e,i,r]=Bn.front;mt.fillStyle="#0b0a08",mt.fillRect(t+i*.31,e+r*.08,i*.38,r*.09),mt.fillStyle="#ffb21e",mt.textAlign="center",mt.textBaseline="middle";let s=r*.1;mt.font=`400 ${s}px ${cr}`;const a=mt.measureText(n).width;a>i*.36&&(s*=i*.36/a,mt.font=`400 ${s}px ${cr}`),mt.fillText(n,t+i*.5,e+r*.128),Gr.needsUpdate=!0}function Ur(n){const[t,e,i,r]=Bn[n];return[(t+.5)/Hn,1-(e+r-.5)/na,(t+i-.5)/Hn,1-(e+.5)/na]}const hn={cars:4,carLen:8.5,gap:.32};hn.length=hn.cars*hn.carLen+(hn.cars-1)*hn.gap;const tr=[[.98,-.78],[1.2,-.3],[1.2,.75],[1.1,1.15],[.88,1.5],[.6,1.76],[.3,1.88],[0,1.9]],dx=4;function px(n,t,e,i){const r=t-hn.carLen,s=t,a=Ur("side"),o=Ur("roof"),l=Ur("dark"),c=f=>a[1]+(a[3]-a[1])*(f-fr[0])/(fr[1]-fr[0]),u={emit:.8},h={emit:.42};for(const f of[-1,1])for(let m=0;m<tr.length-1;m++){const[g,_]=tr[m],[d,p]=tr[m+1],y=[f*(p-_),-(d-g)*1,0],v=[f*g,_],x=[f*d,p];if(m<dx){const C=f>0?a[0]:a[2],E=f>0?a[2]:a[0];n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,[C,c(_),E,c(p)],u)}else n.quad("train",[v[0],v[1],s],[v[0],v[1],r],[x[0],x[1],r],[x[0],x[1],s],y,o,h)}n.quad("train",[-.98,-.78,r],[.98,-.78,r],[.98,-.78,s],[-.98,-.78,s],[0,-1,0],l,{emit:.1});for(const[f,m,g]of[[s,1,e?"front":null],[r,-1,i?"rear":null]]){const _=g?Ur(g):l,d=(y,v)=>g?[_[0]+(_[2]-_[0])*(.5+m*y/2.4),_[1]+(_[3]-_[1])*((v+.78)/2.68)]:[(_[0]+_[2])/2,(_[1]+_[3])/2],p={emit:g?.85:.25};for(let y=0;y<tr.length-1;y++){const[v,x]=tr[y],[C,E]=tr[y+1];n.quadUV("train",[-v,x,f],[v,x,f],[C,E,f],[-C,E,f],[0,0,m],d(-v,x),d(v,x),d(C,E),d(-C,E),p)}if(g){const y=Ur(g==="front"?"lamp":"tail");for(const v of[-.82,.82])n.quad("train",[v-.09,-.08,f+m*.02],[v+.09,-.08,f+m*.02],[v+.09,.1,f+m*.02],[v-.09,.1,f+m*.02],[0,0,m],y,{emit:2})}}}let zs=null;function mx(){if(zs)return zs;const n=new dh;for(let s=0;s<hn.cars;s++)px(n,-s*(hn.carLen+hn.gap),s===0,s===hn.cars-1);const t=n.bake([0,0,0]).train,e={value:new me(0,1,-1e6,1e6)},i=hh(hx(),null,!1,e);i.side=Sn;const r=new en(t,i);return r.frustumCulled=!1,r.visible=!1,r.name="train",zs={mesh:r,clip:e},zs}const Nr=5.5,gx=6.5,yu=10.5,_x=1;class vx{constructor(t){this.game=t;const{mesh:e,clip:i}=mx();this.mesh=e,this.clip=i,t.scene.add(e),this.reset()}reset(){this.rng=new Re((this.game.state.seed||1)^31249),this.nextAt=75,this.period=215,this.phase="idle",this.node=null,this.t=0,this.s=0,this.level=0,this.target=0,this.seenId=0,this.count=0,this.mesh.visible=!1}schedule(){return{nextAt:this.nextAt,period:this.period}}atPlatform(){return this.phase==="dwell"}soon(t=3){this.phase==="idle"&&(this.nextAt=this.game.state.time+t+Nr)}_done(){this.phase="idle",this.node=null,this.mesh.visible=!1,this.target=0,this.nextAt=this.game.state.time+this.period*this.rng.range(.8,1.25)}_begin(t){const e=this.game,i=e.state,r=t.env.station,s=t.p.dir,a=kh(r,s,this.schedule(),i.time,e.story.seed)[0];this.train=a,this.node=t,this.phase="approach",this.t=0,this.count++,i.trains=this.count,fx(a.dest.replace("Battersea Power Station","Battersea")),e.audio.sfx("trainApproach"),e.director.announcer.say({text:`The train now approaching platform ${Ui(s)} is not in service. Please stand well back from the platform edge.`,chime:"rise"}),e.director.setHint("A warm wind pushes out of the tunnel. It smells of brake dust.",5)}update(t){const e=this.game,i=e.state.time,r=e.world.current,s=e.director.events,a=!!(r&&r.def.type==="platform"&&r.built);if(a&&r.id!==this.seenId&&(this.seenId=r.id,this.phase==="idle"&&!r.p.start&&(this.nextAt=Math.min(this.nextAt,i+Nr+this.rng.range(9,20)))),this.t+=t,this.phase==="idle")i>=this.nextAt-Nr&&(a?this._begin(r):(this.phase="distant",this.t=0,e.audio.sfx("train")));else if(this.phase==="distant")this.target=.75*Math.sin(Ue(this.t/9,0,1)*Math.PI),this.t>9&&this._done();else{const o=this.node;if(!o.built||!e.world.nodes.has(o.id)){this._done();return}const l=o.p.L,c=l-1.3,u=-1.2;if(this.phase==="approach")this.target=.75*Ue(this.t/Nr,0,1),this.t>=Nr&&(this.phase="arrive",this.t=0,this.mesh.visible=!0,s.glitch(.5));else if(this.phase==="arrive"){const h=Ue(this.t/gx,0,1);this.s=u+(c-u)*(1-(1-h)*(1-h)),this.target=1-.7*h,!this.braked&&h>.45&&(this.braked=!0,e.audio.sfx("trainBrake")),h>=1&&(this.phase="dwell",this.t=0,this.braked=!1,this.spoke=0)}else if(this.phase==="dwell"){this.target=.22;const h=f=>e.director.announcer.say({text:f,chime:"none",tag:"(from the train)"});if(this.spoke===0&&this.t>.9){this.spoke=1;const f=o.env.station,m=this.train,g=Eh(f,o.p.dir,m.via||m.dest)||f,_=e.state.wrong;h(_>=2.5&&this.rng.chance(.5)?`This is ${f}. The next station is ${f}. The doors will not open at this station.`:`This is ${f}. This is a Northern line train to ${m.dest}${m.via?` ${m.via}`:""}. The next station is ${g}. The doors will not open at this station.`)}this.spoke===1&&this.t>yu-2.6&&(this.spoke=2,e.audio.sfx("doorChime"),h("Stand clear of the doors, please.")),this.t>=yu&&(this.phase="depart",this.t=0,e.audio.sfx("trainDepart"))}else this.phase==="depart"&&(this.s=c+.5*_x*this.t*this.t,this.target=Ue(.3+this.t*.12,0,1),this.s-hn.length>l+pe.depth&&(s.glitch(.4),this._done()));if(this.node){const h=o.p.side,[f,m,g]=ur(o,h*nt.track,0,this.s);this.mesh.position.set(f,m,g),this.mesh.rotation.y=o.yaw;const _=Math.sin(o.yaw),d=Math.cos(o.yaw),p=o.pos.x*_+o.pos.z*d;this.clip.value.set(_,d,p-pe.depth+.07,p+l+pe.depth-.07)}}this.level=Ci(this.level,this.target,this.target>this.level?2.2:.9,t),e.player.shake=this.level*(a&&this.node?1:.25),e.state.train=this.phase}}function ro(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class xx{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,u,h]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const f=e.createOscillator();f.type=u,f.frequency.value=c;const m=e.createGain();m.gain.value=h,f.connect(m),m.connect(i),f.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const r=e.createOscillator();r.type="square",r.frequency.value=100;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=2900,s.Q.value=1.4,r.connect(s),s.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),r.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,ro(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const a=ro(e,t.white,.8);a.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,a.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const o=e.createGain();o.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,ro(e,t.white,1.3).connect(l),l.connect(o),o.connect(t.out)}update(t,e){const i=this.ctx,r=i.currentTime,s=.12;this.t+=t;const a=this.t,o=e.director.events,l=e.world.current,c=e.state.wrong,u=o.pow,h=l?l.flick.value:1,f=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*u*f*(1-c*.03),r,s),this.buzz.gain.setTargetAtTime(.004+(h<.5?0:.006)*u+(1-u)*.01,r,.02);const m=e.trains?e.trains.level:0;this.rumble.gain.setTargetAtTime(.16+.1*Se(a*.13,1)+m*.75,r,.3),this.rumbleLP.frequency.setTargetAtTime(62+m*120,r,.4);const g=l&&l.def.type==="platform"?1.5:1,_=.5+.5*Se(a*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+m*.11)*g,r,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*Se(a*.17,3))+m*500,r,.5);const d=Math.max(0,Se(a*.11,4)-.35)+m*.25;this.whistle.gain.setTargetAtTime(d*.05*g,r,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*Se(a*.23,5),r,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Me(n,{freq:t,to:e,type:i="sine",dur:r=.3,gain:s=.2,attack:a=.005,at:o=0,rev:l=.5,dry:c=1}){const u=n.ctx,h=u.currentTime+o,f=u.createOscillator();f.type=i,f.frequency.setValueAtTime(t,h),e&&f.frequency.exponentialRampToValueAtTime(e,h+r);const m=u.createGain();if(m.gain.setValueAtTime(1e-4,h),m.gain.exponentialRampToValueAtTime(s,h+a),m.gain.exponentialRampToValueAtTime(1e-4,h+r),f.connect(m),c>0){const g=u.createGain();g.gain.value=c,m.connect(g),g.connect(n.out)}if(l>0){const g=u.createGain();g.gain.value=l,m.connect(g),g.connect(n.rev)}f.start(h),f.stop(h+r+.05)}function ce(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:r=1e3,q:s=1,at:a=0,rev:o=.4,dry:l=1,attack:c=.002,sweep:u=0}){const h=n.ctx,f=h.currentTime+a,m=h.createBufferSource();m.buffer=n.white,m.loop=t>1.2;const g=h.createBiquadFilter();g.type=i,g.frequency.setValueAtTime(r,f),g.Q.value=s,u&&g.frequency.exponentialRampToValueAtTime(u,f+t);const _=h.createGain();if(_.gain.setValueAtTime(1e-4,f),_.gain.exponentialRampToValueAtTime(e,f+c),_.gain.exponentialRampToValueAtTime(1e-4,f+t),m.connect(g),g.connect(_),l>0){const d=h.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(o>0){const d=h.createGain();d.gain.value=o,_.connect(d),d.connect(n.rev)}m.start(f,Math.random()*1.5),m.stop(f+t+.05)}function er(n,t,e,i=.16){Me(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Me(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Me(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function yx(n,t,e,i){const r=(t?1.25:1)*(.85+Math.random()*.3),s=(i?1.06:.95)*(.94+Math.random()*.12);Me(n,{freq:95*s,to:48,dur:.09,gain:.16*r,rev:.35}),e==="metal"?(ce(n,{dur:.07,gain:.12*r,type:"bandpass",freq:2300*s,q:5,rev:.6}),Me(n,{freq:610*s,dur:.22,gain:.03*r,type:"triangle",rev:.8,dry:.4})):e==="stone"?ce(n,{dur:.06,gain:.11*r,type:"bandpass",freq:1250*s,q:1.2,rev:.7}):(ce(n,{dur:.045,gain:.13*r,type:"highpass",freq:1900*s,q:.7,rev:.75}),ce(n,{dur:.03,gain:.05*r,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const Mx={chimeRise(n){er(n,392,0),er(n,493.9,.42),er(n,587.3,.84)},chimeFall(n){er(n,587.3,0),er(n,493.9,.42),er(n,380,.84,.17)},zoom(n){Me(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){ce(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Me(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),ce(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),ce(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Me(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)ce(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,r]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Me(n,{freq:e*(.99+Math.random()*.02),dur:r,gain:i,at:t,rev:.9,dry:.7,attack:.002});ce(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),ce(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);ce(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}ce(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Me(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),ce(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},touchOut(n){Me(n,{freq:2350,dur:.14,gain:.07,type:"triangle",attack:.004,rev:.4,dry:.9})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Me(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Me(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Me(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Me(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Me(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},Sx={trainApproach(n){ce(n,{dur:9.5,gain:.32,type:"lowpass",freq:110,sweep:420,attack:4.8,rev:.7,dry:.8}),ce(n,{dur:6,gain:.012,type:"bandpass",freq:2900,sweep:3700,q:26,attack:3.5,rev:1,dry:.2});for(let t=0;t<14;t++){const e=5.2+t*(.2+t*.022);ce(n,{dur:.06,gain:.16-t*.008,type:"lowpass",freq:330,at:e,rev:.8,dry:.7}),ce(n,{dur:.05,gain:.1-t*.005,type:"lowpass",freq:300,at:e+.085,rev:.8,dry:.7})}},trainBrake(n){ce(n,{dur:2.6,gain:.03,type:"bandpass",freq:3300,sweep:2300,q:34,attack:.5,rev:1,dry:.5}),ce(n,{dur:2.2,gain:.018,type:"bandpass",freq:4500,sweep:3200,q:40,attack:.7,at:.3,rev:1,dry:.4}),ce(n,{dur:.9,gain:.07,type:"highpass",freq:2600,at:3.3,attack:.03,rev:.6,dry:.8}),Me(n,{freq:70,to:42,dur:.5,gain:.12,at:3.2,rev:.5})},doorChime(n){for(let t=0;t<9;t++)Me(n,{freq:1960,dur:.11,gain:.05,at:.9+t*.21,type:"triangle",attack:.004,rev:.6,dry:.7});ce(n,{dur:.12,gain:.12,type:"lowpass",freq:500,at:3,rev:.7})},trainDepart(n){for(const[t,e,i,r]of[[.2,110,330,2.6],[2.5,180,520,3],[5.2,260,700,3.6]])Me(n,{freq:e,to:i,dur:r,gain:.03,at:t,type:"sawtooth",attack:.4,rev:.8,dry:.5}),Me(n,{freq:e*2.02,to:i*2.02,dur:r,gain:.012,at:t,type:"triangle",attack:.4,rev:.8,dry:.4});ce(n,{dur:9.5,gain:.26,type:"lowpass",freq:140,sweep:380,attack:3,rev:.7,dry:.8});for(let t=0;t<16;t++){const e=1.6+7.2*(1-Math.sqrt(1-t/16));ce(n,{dur:.055,gain:.07+t*.006,type:"lowpass",freq:320,at:e,rev:.8,dry:.7})}}},bx=["Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel","Microsoft Susan","Microsoft Maisie","Martha","Kate","Serena","Stephanie","Fiona","Moira","Karen","Tessa","Catherine","Samantha","Victoria","Allison","Ava","Susan","Zoe","Microsoft Zira","Microsoft Aria","Microsoft Jenny","Google US English"],Ex=/\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;class Tx{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(s=>/^en/i.test(s.lang)),i=e.filter(s=>/en[-_]GB/i.test(s.lang));for(const s of bx){const a=i.find(o=>o.name.includes(s))||e.find(o=>o.name.includes(s));if(a&&!/\bmale\b/i.test(a.name)){this.voice=a;return}}const r=s=>/female|woman/i.test(s.name)||!Ex.test(s.name);this.voice=i.find(r)||e.find(r)||i[0]||e[0]||null}prime(){if(!(!this.synth||!this.enabled))try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}speak(t,e={}){if(!(!this.synth||!this.enabled))try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.86:1,i.volume=.85,this.synth.speak(i)}catch{}}stop(){if(this.synth)try{this.synth.cancel()}catch{}}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function Mu(n,t,e){const i=Math.floor(n.sampleRate*t),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;e?(a=(a+.02*l)/1.02,s[o]=a*3.5):s[o]=l}return r}function wx(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let r=0;r<2;r++){const s=i.getChannelData(r);let a=0;for(let o=0;o<e;o++){const l=o/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+r)),u=Math.random()*2-1,h=.25+.75*Math.exp(-l*3);a+=(u-a)*h,s[o]=a*c}}return i}class Ax{constructor(){this.ctx=null,this.ready=!1,this.voice=new Tx,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const r=e.createConvolver();r.buffer=wx(e);const s=e.createGain();s.gain.value=.55,this.rev.connect(r),r.connect(s),s.connect(this.master),this.white=Mu(e,2,!1),this.brown=Mu(e,4,!0),this.ambient=new xx(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=Mx[t]||Sx[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{yx(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const ol=26,Vr=.0756,Rx={wall:6.83,track:8.02,frieze:2.75,dado:.91,trackDado:5.7};function Su(n,t,e,i,r,s,a){n.fillStyle=yl(s,a.range(-.07,.05)),n.fillRect(t,e,i,r),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,r*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+r-1.5,i-2,1),a.chance(.03)&&(n.fillStyle=a.chance(.5)?"rgba(60,50,35,0.22)":"rgba(255,255,255,0.18)",n.fillRect(t+1,e+1,i-2,r-2))}function Bh(n,t,e,i,r,s,a,o){const l=t/ol,c=Vr*i,u=Math.ceil(r/Vr);n.fillStyle=s.grout,n.fillRect(0,e-r*i,t,r*i);for(let h=0;h<u;h++){const f=e-(h+1)*c,m=h%2?l/2:0;for(let g=-1;g<ol;g++){const _=g*l+m,d=((_+l/2)/t%1+1)%1,p=o(h,(h+.5)*Vr,d);p&&(Su(n,_+.5,f+.5,l-1,c-1,p,a),_+l>t&&Su(n,_-t+.5,f+.5,l-1,c-1,p,a))}}}const ia=n=>Math.round(n/Vr),Hh=(n,t)=>Math.min(...t.map(e=>Math.abs(n-e)))*ol;function Cx(n){const i=141.04683195592287,r=An(1024,512),s=r.getContext("2d"),a=new Re(lr(n.id+"passage")),o=[ia(1.2),ia(1.45)];Bh(s,1024,512,i,3.63,n,a,(c,u,h)=>{if(u<.91)return n.skirt;if(o.includes(c))return n.band;if(u>1.6){const f=Hh(h,[.5]);if(f<.5)return n.band;if(f<1.05)return n.accent}return n.ground});const l=s.createLinearGradient(0,0,0,512);return l.addColorStop(0,"rgba(25,20,12,0.4)"),l.addColorStop(.3,"rgba(25,20,12,0.1)"),l.addColorStop(.8,"rgba(25,20,12,0)"),l.addColorStop(1,"rgba(25,20,12,0.25)"),s.fillStyle=l,s.fillRect(0,0,1024,512),jr(s,0,0,1024,512,lr(n.id)+7,1,!1),r}function bu(n,t,e,i,r,s){n.fillStyle="#e4dcc0",n.fillRect(t,e,i,r);for(let a=0;a<26;a++){const o=t+s.range(0,i),l=e+s.range(0,r),c=s.range(30,120);for(const u of[-i,0,i]){const h=n.createRadialGradient(o+u,l,0,o+u,l,c);h.addColorStop(0,`rgba(60,48,26,${s.range(.04,.1)})`),h.addColorStop(1,"rgba(60,48,26,0)"),n.fillStyle=h,n.fillRect(o+u-c,l-c,c*2,c*2)}}}function Px(n){const i=Rx,r=An(1024,1024),s=r.getContext("2d"),a=new Re(lr(n.id+"platform")),o=512/i.wall,l=[.25,.75],c=.16*(1024/6),u=.38*(1024/6),h=(y,v)=>{for(const x of l)for(const C of[-1,1]){const E=x*1024+C*u/2-c/2;s.fillStyle=n.band,s.fillRect(E,y,c,v),s.fillStyle="rgba(255,255,255,0.10)",s.fillRect(E,y,2,v),s.fillStyle="rgba(0,0,0,0.25)";for(let T=y;T<y+v;T+=Vr*o*3)s.fillRect(E,T,c,1)}};bu(s,0,0,1024,512,a),h(0,512-i.frieze*o);const f=[ia(1.2),ia(1.45)];Bh(s,1024,512,o,i.frieze,n,a,(y,v,x)=>v<i.dado?n.skirt:f.includes(y)||Hh(x,l.flatMap(C=>[C-.032,C+.032]))<.55?n.band:n.ground);const m=512/i.track,g=y=>1024-y*m;bu(s,0,512,1024,512,a),h(g(i.trackDado),i.trackDado*m),s.fillStyle="#17181a",s.fillRect(0,512,1024,g(i.trackDado)-512),s.fillStyle=n.band,s.fillRect(0,g(3.6)-3,1024,6);const _=[[.25,6,"#0b0b0b"],[.42,4,"#3a3a3a"],[.6,7,"#101010"],[.78,4,"#4a2c1a"],[1,5,"#0c0c0c"]];for(const[y,v,x]of _){const C=g(i.trackDado+y);s.fillStyle=x,s.fillRect(0,C,1024,v),s.fillStyle="rgba(255,255,255,0.13)",s.fillRect(0,C,1024,1)}for(let y=40;y<1024;y+=170)s.fillStyle="#2c2d2f",s.fillRect(y,g(i.trackDado+1.1),5,1*m);jr(s,0,512,1024,512,lr(n.id)+3,.8,!1);const d=s.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(25,20,12,0.38)"),d.addColorStop(.35,"rgba(25,20,12,0.1)"),d.addColorStop(.85,"rgba(25,20,12,0)"),d.addColorStop(1,"rgba(25,20,12,0.22)"),s.fillStyle=d,s.fillRect(0,0,1024,512);const p=s.createLinearGradient(0,1024,0,512);return p.addColorStop(0,"rgba(25,20,12,0.38)"),p.addColorStop(.4,"rgba(25,20,12,0.12)"),p.addColorStop(1,"rgba(25,20,12,0.05)"),s.fillStyle=p,s.fillRect(0,512,1024,512),jr(s,0,0,1024,512,lr(n.id)+7,1,!1),r}function Lx(n,t="passage"){return t==="platform"?Px(n):Cx(n)}const Eu=new Map;function Tu(n,t="passage"){const e=n.id+":"+t;let i=Eu.get(e);return i||(i=xl(Lx(n,t),{repeatU:!0}),Eu.set(e,i)),i}const li=3;class Dx{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.free=[{x:0,y:0,w:t,h:t}],this.used=!1,this.overflow=0}_ensure(){this.canvas||(this.canvas=An(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}_place(t,e){let i=-1,r=1/0;for(let l=0;l<this.free.length;l++){const c=this.free[l];c.w>=t&&c.h>=e&&c.w*c.h<r&&(i=l,r=c.w*c.h)}if(i<0)return null;const s=this.free.splice(i,1)[0],a=s.w-t,o=s.h-e;return a>o?(a>8&&this.free.push({x:s.x+t,y:s.y,w:a,h:s.h}),o>8&&this.free.push({x:s.x,y:s.y+e,w:t,h:o})):(o>8&&this.free.push({x:s.x,y:s.y+e,w:s.w,h:o}),a>8&&this.free.push({x:s.x+t,y:s.y,w:a,h:e})),{x:s.x,y:s.y}}add(t,e,i){this._ensure();const r=this.size;t=Math.min(Math.round(t),r-li*2),e=Math.min(Math.round(e),r-li*2);let s=this._place(t+li*2,e+li*2);if(!s){this.overflow++;for(let u=0;u<4&&!s;u++)t=Math.max(8,Math.round(t*.7)),e=Math.max(8,Math.round(e*.7)),s=this._place(t+li*2,e+li*2);s||(s={x:0,y:0})}const a=s.x+li,o=s.y+li,l=this.ctx;l.save(),l.translate(a,o),l.beginPath(),l.rect(0,0,t,e),l.clip(),l.clearRect(0,0,t,e),i(l,t,e),l.restore(),this.used=!0;const c=.5;return[(a+c)/r,1-(o+e-c)/r,(a+t-c)/r,1-(o+c)/r]}finish(){return this.used?xl(this.canvas):null}}function Ix(n,t){const e=t.env.theme||xh("Mornington Crescent");return n==="tile"?Tu(e,"passage"):n==="ptile"?Tu(e,"platform"):n==="dyn"?wv():z_()}function Ux(n){return new Dx(n.def.sheetSize||512)}let wu="";function Nx(n,t){const e=n.state,r=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;r!==wu&&(wu=r,Av(n.story.boardState(t)))}class Fx{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new b_,this.overlay.mobile=this.mobile,this.renderer=new S_(t,this.overlay,{mobile:this.mobile}),this.scene=new ah,this.camera=new tn(Yt.fov,this.renderer.aspect,.08,90),this.player=new L_(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:Yt.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new Ax,this.story=new tx(this),this.world=new R_(this.scene,{choose:(i,r,s,a)=>this.story.choose(i,r,s,a),textures:(i,r)=>Ix(i,r),makeSheet:i=>Ux(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new cx(this),this.trains=new vx(this),this.keyboard=D_(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=I_(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0,r=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.progress=r,this.story.wrong=i,this.story.base=i;const s=this.story.begin(this.world,e),a=s.built&&s.built.extra&&s.built.extra.spawn;if(a){const o=Math.cos(s.yaw),l=Math.sin(s.yaw);this.player.spawn(s.pos.x+a.x*o+a.z*l,s.pos.y,s.pos.z-a.x*l+a.z*o,s.yaw+(a.yaw||0))}else this.player.spawn(s.pos.x,s.pos.y,s.pos.z+1.5,s.yaw);Object.assign(this.state,{won:!1,time:0,progress:r,wrong:i,junctions:0,wrongTurns:0,cluesRead:0,station:s.env.station}),this.director.reset(),this.trains&&this.trains.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=Ue((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const r=e.started&&!e.paused&&!e.won;try{r?this.step(i):this.idle(i)}catch(s){e.errors++,e.errors<5&&console.error(s)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,r=this.player;e.time+=t,i.mx=Ue(i.kmx+i.tmx,-1,1),i.mz=Ue(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const s=r.update(t,i,this.world);this.world.pump(),this.trains.update(t),this.director.update(t,s),this.animate(t),e.x=+r.pos.x.toFixed(2),e.y=+r.pos.y.toFixed(2),e.z=+r.pos.z.toFixed(2),e.yaw=+r.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+Yt.eye,e.pos.z),this.camera.rotation.set(e.pitch+Se(e.t*.3,5)*.03,e.yaw+Se(e.t*.21,6)*.08,Se(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let r=0;for(const s of this.world.nodes.values()){if(!s.built)continue;r++;const a=Se(e*1.3+s.phase,3),o=Se(e*23+s.phase*7,4);s.flick.value=a>.15-i*.04?o>-.2?1:.15:o>.55?.9:.04}this.state.built=r,zr.uPower.value=this.director.power(e,t),Nx(this,e)}}const Ox={diagram(n,t,e,i){const r=ma(i.station||"Camden Town",i.dir||"south");i.corrupt&&Qs(r,i.corrupt,new Re(i.seed||1)),wl(n,t,e,r,{station:i.station,dir:i.dir||"south"})},roundel(n,t,e,i){ha(n,t,e,i.name||"Camden Town",i)},strip(n,t,e,i){Uh(n,t,e,{current:i.station||"Mornington Crescent",ghosts:i.ghosts?Tl:[]})},psign(n,t,e,i){Nh(n,t,e,i)}};function kx(n,t,e,i={}){const r=An(t,e);return Ox[n](r.getContext("2d"),t,e,i),r.toDataURL("image/png")}function zx(n,t){const e=t.player,i=t.world,r=(s,a,o,l,c=0)=>{const[u,h,f]=ur(s,a,c,o);return i.current=s,i.refresh(!0),e.spawn(u,h,f,s.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(s=0,a=0,o=!1){t.input.kmx=s,t.input.kmz=a,t.input.krun=!!o},look(s=0,a=0){e.yaw+=s,e.pitch+=a},face(s,a=0){e.yaw=s,e.pitch=a},tp(s,a,o){e.pos.x=s,e.pos.y=a,e.pos.z=o,e.eyeY=a+1.62},advance(s=1,a=0){let o=i.current;for(let l=0;l<s;l++){const c=o.exits[Math.min(a,o.exits.length-1)];if(!c||(c.child||i.expand(o,o.exits.indexOf(c)),!c.child))break;o=c.child}return r(o,0,.6,0)},seek(s,a=60,o=0){let l=i.current;for(let c=0;c<a;c++){const u=l.exits[Math.min(o,l.exits.length-1)];if(!u||(u.child||i.expand(l,l.exits.indexOf(u)),!u.child))return null;if(l=u.child,i.current=l,i.refresh(!0),l.def.type===s)return r(l,0,.6,0)}return null},at(s,a,o=0,l=0){return r(i.current,s,a,o,l)},folds(){return[...i.nodes.values()].filter(s=>s.hiddenByFold).length},items(){const s=i.current;return s.built?s.built.items.map(a=>({label:a.label,x:a.x,y:a.y,z:a.z})):[]},info(){const s=i.current;return{type:s.def.type,id:s.id,yaw:+s.yaw.toFixed(2),pos:[s.pos.x,s.pos.y,s.pos.z].map(a=>+a.toFixed(1)),exits:s.exits.length,nodes:i.nodes.size,station:s.env.station,idx:s.env.idx,plan:s.env.stretch?s.env.stretch.plan.join(","):"",items:s.built?s.built.items.map(a=>a.label||a.title||"?"):[]}},voidPixels(s=!1){const a=t.renderer,o=a.gl,l=o.getClearColor(new jt);o.setClearColor(16711935,1),o.setRenderTarget(a.target),o.render(t.scene,t.camera);const c=new Uint8Array(a.iw*a.ih*4);o.readRenderTargetPixels(a.target,0,0,a.iw,a.ih,c),o.setRenderTarget(null),o.setClearColor(l,1);let u=0;const h=[];for(let f=0;f<c.length;f+=4)if(c[f]>180&&c[f+1]<90&&c[f+2]>180&&(u++,s&&h.length<400)){const m=f/4%a.iw,g=Math.floor(f/4/a.iw),_=new W((m+.5)/a.iw*2-1,(g+.5)/a.ih*2-1,.5).unproject(t.camera),d=t.camera.position,p=s.y!==void 0?(s.y-d.y)/(_.y-d.y):((s.z??0)-d.z)/(_.z-d.z);h.push([d.x+(_.x-d.x)*p,d.y+(_.y-d.y)*p,d.z+(_.z-d.z)*p].map(y=>+y.toFixed(3)).concat([m,g,c[f],c[f+1],c[f+2]]))}return s?{n:u,hits:h}:u},pick(s,a){const o=t.renderer,l=new f_;return l.setFromCamera(new Zt((s+.5)/o.iw*2-1,(a+.5)/o.ih*2-1),t.camera),l.intersectObjects(t.scene.children,!0).slice(0,3).map(u=>{const h=[...i.nodes.values()].find(_=>_.built&&_.built.group===u.object.parent),[f,m]=h?fa(h,u.point.x,u.point.z):[u.point.x,u.point.z],g={x:f,y:u.point.y-(h?h.pos.y:0),z:m};return{layer:u.object.name,node:h?h.def.type:"?",d:+u.distance.toFixed(3),local:[g.x,g.y,g.z].map(_=>+_.toFixed(3)),uv:u.uv?[+u.uv.x.toFixed(4),+u.uv.y.toFixed(4)]:null,face:u.faceIndex}})},buildAll(s=12){const a=[Yt.ahead,Yt.sight];return Yt.ahead=s,Yt.sight=1e6,i.refresh(!0),[Yt.ahead,Yt.sight]=a,[...i.nodes.values()].filter(o=>o.built).map(o=>o.def.type)},scanVoid(s=8,a=[-.5,0,.45]){const o=t.camera,l=o.far;o.far=600,o.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{}};for(const u of i.nodes.values())if(u.built)for(const h of u.built.cells)for(const f of[.25,.75]){const[m,g,_]=ur(u,h.ax+(h.bx-h.ax)*f,h.ya+(h.yb-h.ya)*f,h.az+(h.bz-h.az)*f);for(let d=0;d<s;d++)for(const p of a){const y=d/s*Math.PI*2+.11;o.position.set(m+.0137,g+1.6071,_-.0093),o.rotation.set(p+.013,y,.007),o.updateMatrixWorld(!0);const v=n.debug.voidPixels();c.views++,c.total+=v,v&&(c.byType[u.def.type]=(c.byType[u.def.type]||0)+v),v&&(!c.worst||v>c.worst.n)&&(c.worst={n:v,type:u.def.type,id:u.id,cam:[o.position.x,o.position.y,o.position.z,o.rotation.x,o.rotation.y,o.rotation.z]})}}return o.far=l,o.updateProjectionMatrix(),c},preview:kx,train(s=2){return t.trains.soon(s),t.trains.schedule()},plan(s,a=7,o=0,l=0){return t.reset(a,s,o,l),n.debug.info()},take(s=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const a=i.current,o=s?a.p.correct:1-a.p.correct,l=a.p.kind;a.exits[o].child||i.expand(a,o);const c=a.exits[o].child;i.current=c,i.refresh(!0);const[u,h,f]=ur(c,0,0,4.2);return e.spawn(u,h,f,c.yaw),t.director.commit(c),{kind:l,exit:o,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(s,a){t.story.forceKind=s||null,t.story.forceLevel=a},branch(s){t.story.testBranch=s||null},setProgress(s){t.story.progress=s,t.state.progress=s},setWrong(s){t.story.wrong=s,t.state.wrong=s},say(s,a="rise"){t.director.announcer.say({text:s,chime:a})},glitch(s=1){t.director.events.glitch(s)},use(){return t.director.scan(),t.director.use(!0),t.state.reading},freeze(s=!0){t.frozen=s},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const Nn=v_(),kn={ready:!1,state:{started:!1,ready:!1},start(){Gh=!0}};let Gh=!1;window.__game=kn;async function Bx(){Nn.setLoading(!0),await m_(),Nn.drawMarks();let n;try{n=new Fx(document.getElementById("view"),Nn)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}kn.game=n,kn.state=n.state,kn.start=()=>n.start(),kn.pause=()=>n.pause(),kn.resume=()=>n.resume(),kn.reset=t=>n.reset(t),zx(kn,n),n.state.ready=!0,kn.ready=!0,Nn.onStart(()=>n.start()),Nn.onResume(()=>n.resume()),Nn.onAgain(()=>n.start()),Nn.onVoice(t=>n.audio.setVoiceEnabled(t)),Nn.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),Nn.setLoading(!1),Gh&&n.start()}Bx();
