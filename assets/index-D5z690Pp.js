(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="170",Fd=0,qf=1,zd=2,nh=1,Bd=2,vi=3,Pi=0,_n=1,Un=2,ji=0,lr=1,$f=2,Xf=3,Yf=4,Hd=5,ms=100,Gd=101,Vd=102,Wd=103,qd=104,$d=200,Xd=201,Yd=202,Zd=203,jl=204,Kl=205,jd=206,Kd=207,Jd=208,Qd=209,tp=210,ep=211,np=212,ip=213,sp=214,Jl=0,Ql=1,tc=2,pr=3,ec=4,nc=5,ic=6,sc=7,ih=0,rp=1,op=2,Ki=0,ap=1,lp=2,cp=3,fp=4,up=5,hp=6,dp=7,sh=300,mr=301,gr=302,rc=303,oc=304,ka=306,oo=1e3,Ti=1001,ac=1002,Jn=1003,pp=1004,Lo=1005,We=1006,ja=1007,Yi=1008,Li=1009,rh=1010,oh=1011,ao=1012,rf=1013,As=1014,Ei=1015,xo=1016,of=1017,af=1018,_r=1020,ah=35902,lh=1021,ch=1022,jn=1023,fh=1024,uh=1025,cr=1026,yr=1027,hh=1028,lf=1029,dh=1030,cf=1031,ff=1033,ya=33776,va=33777,xa=33778,Sa=33779,lc=35840,cc=35841,fc=35842,uc=35843,hc=36196,dc=37492,pc=37496,mc=37808,gc=37809,_c=37810,yc=37811,vc=37812,xc=37813,Sc=37814,bc=37815,Mc=37816,Tc=37817,Ec=37818,wc=37819,Ac=37820,Rc=37821,ba=36492,Cc=36494,Pc=36495,ph=36283,Lc=36284,Dc=36285,Ic=36286,mp=3200,gp=3201,_p=0,yp=1,Tn="",Ln="srgb",Ls="srgb-linear",Oa="linear",ge="srgb",Us=7680,Zf=519,vp=512,xp=513,Sp=514,mh=515,bp=516,Mp=517,Tp=518,Ep=519,jf=35044,Kf="300 es",wi=2e3,Ea=2001;class Tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ka=Math.PI/180,Uc=180/Math.PI;function So(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function gn(n,t,e){return Math.max(t,Math.min(e,n))}function wp(n,t){return(n%t+t)%t}function Ja(n,t,e){return(1-e)*n+e*t}function Lr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],m=i[8],_=s[0],d=s[3],g=s[6],S=s[1],y=s[4],b=s[7],A=s[2],M=s[5],T=s[8];return r[0]=o*_+a*S+l*A,r[3]=o*d+a*y+l*M,r[6]=o*g+a*b+l*T,r[1]=c*_+f*S+h*A,r[4]=c*d+f*y+h*M,r[7]=c*g+f*b+h*T,r[2]=u*_+p*S+m*A,r[5]=u*d+p*y+m*M,r[8]=u*g+p*b+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,p=c*r-o*l,m=e*h+i*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*c-f*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Wt;function gh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ap(){const n=wa("canvas");return n.style.display="block",n}const Jf={};function Wr(n){n in Jf||(Jf[n]=!0,console.warn(n))}function Rp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Cp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=fr(n.r),n.g=fr(n.g),n.b=fr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Tn?Oa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Qf=[.64,.33,.3,.6,.15,.06],t0=[.2126,.7152,.0722],e0=[.3127,.329],n0=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i0=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Ls]:{primaries:Qf,whitePoint:e0,transfer:Oa,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t0,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:Qf,whitePoint:e0,transfer:ge,toXYZ:n0,fromXYZ:i0,luminanceCoefficients:t0,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}});let Ns;class Lp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=wa("canvas")),Ns.width=t.width,Ns.height=t.height;const i=Ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ri(e[i]/255)*255):e[i]=Ri(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dp=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=So(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tl(s[o].image)):r.push(tl(s[o]))}else r=tl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ip=0;class ln extends Tr{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,i=Ti,s=Ti,r=We,o=Yi,a=jn,l=Li,c=ln.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=So(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=sh;ln.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],m=l[9],_=l[2],d=l[6],g=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(m-d)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(m+d)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(p+1)/2,A=(g+1)/2,M=(f+u)/4,T=(h+_)/4,w=(m+d)/4;return y>b&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=M/i,r=T/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=w/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=w/r),this.set(i,s,r,e),this}let S=Math.sqrt((d-m)*(d-m)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(d-m)/S,this.y=(h-_)/S,this.z=(u-f)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Up extends Tr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _h(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Up{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yh extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Np extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3];const u=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==u||c!==p||f!==m){let d=1-a;const g=l*u+c*p+f*m+h*_,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const A=Math.sqrt(y),M=Math.atan2(A,g*S);d=Math.sin(d*M)/A,a=Math.sin(a*M)/A}const b=a*S;if(l=l*d+u*b,c=c*d+p*b,f=f*d+m*b,h=h*d+_*b,d===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=A,c*=A,f*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+f*h+l*p-c*u,t[e+1]=l*m+f*u+c*h-a*p,t[e+2]=c*m+f*p+a*u-l*h,t[e+3]=f*m-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),u=l(i/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h-u*p*m;break;case"YXZ":this._x=u*f*h+c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h+u*p*m;break;case"ZXY":this._x=u*f*h-c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h-u*p*m;break;case"ZYX":this._x=u*f*h-c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h+u*p*m;break;case"YZX":this._x=u*f*h+c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h-u*p*m;break;case"XZY":this._x=u*f*h-c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,i=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(s0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(s0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(gn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new Q,s0=new bo;class Mo{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Do.copy(i.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),Io.subVectors(this.max,Dr),ks.subVectors(t.a,Dr),Os.subVectors(t.b,Dr),Fs.subVectors(t.c,Dr),Oi.subVectors(Os,ks),Fi.subVectors(Fs,Os),ns.subVectors(ks,Fs);let e=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ns.y,ns.x,0];return!nl(e,ks,Os,Fs,Io)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,ks,Os,Fs,Io))?!1:(Uo.crossVectors(Oi,Fi),e=[Uo.x,Uo.y,Uo.z],nl(e,ks,Os,Fs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Gn=new Q,Do=new Mo,ks=new Q,Os=new Q,Fs=new Q,Oi=new Q,Fi=new Q,ns=new Q,Dr=new Q,Io=new Q,Uo=new Q,is=new Q;function nl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),f=i.dot(is);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const kp=new Mo,Ir=new Q,il=new Q;class uf{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ir.subVectors(t,this.center);const e=Ir.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ir.copy(t.center).add(il)),this.expandByPoint(Ir.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new Q,sl=new Q,No=new Q,zi=new Q,rl=new Q,ko=new Q,ol=new Q;class vh{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){sl.copy(t).add(e).multiplyScalar(.5),No.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(sl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(No),a=zi.dot(this.direction),l=-zi.dot(No),c=zi.lengthSq(),f=Math.abs(1-o*o);let h,u,p,m;if(f>0)if(h=o*l-a,u=o*a-l,m=r*f,h>=0)if(u>=-m)if(u<=m){const _=1/f;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(sl).addScaledVector(No,u),p}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){rl.subVectors(e,t),ko.subVectors(i,t),ol.crossVectors(rl,ko);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);const l=a*this.direction.dot(ko.crossVectors(zi,ko));if(l<0)return null;const c=a*this.direction.dot(rl.cross(zi));if(c<0||l+c>o)return null;const f=-a*zi.dot(ol);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,i,s,r,o,a,l,c,f,h,u,p,m,_,d){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,f,h,u,p,m,_,d)}set(t,e,i,s,r,o,a,l,c,f,h,u,p,m,_,d){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=f,g[10]=h,g[14]=u,g[3]=p,g[7]=m,g[11]=_,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*f,p=o*h,m=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*f,p=l*h,m=c*f,_=c*h;e[0]=u+_*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*f,p=l*h,m=c*f,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*f,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*f,p=o*h,m=a*f,_=a*h;e[0]=l*f,e[4]=m*c-p,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*f,e[4]=_-u*h,e[8]=m*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+m,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*l,p=o*c,m=a*l,_=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+_,e[5]=o*f,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*f,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Op,t,Fp)}lookAt(t,e,i){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Bi.crossVectors(i,Sn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Bi.crossVectors(i,Sn)),Bi.normalize(),Oo.crossVectors(Sn,Bi),s[0]=Bi.x,s[4]=Oo.x,s[8]=Sn.x,s[1]=Bi.y,s[5]=Oo.y,s[9]=Sn.y,s[2]=Bi.z,s[6]=Oo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],m=i[2],_=i[6],d=i[10],g=i[14],S=i[3],y=i[7],b=i[11],A=i[15],M=s[0],T=s[4],w=s[8],v=s[12],x=s[1],E=s[5],P=s[9],L=s[13],D=s[2],k=s[6],N=s[10],B=s[14],U=s[3],R=s[7],z=s[11],H=s[15];return r[0]=o*M+a*x+l*D+c*U,r[4]=o*T+a*E+l*k+c*R,r[8]=o*w+a*P+l*N+c*z,r[12]=o*v+a*L+l*B+c*H,r[1]=f*M+h*x+u*D+p*U,r[5]=f*T+h*E+u*k+p*R,r[9]=f*w+h*P+u*N+p*z,r[13]=f*v+h*L+u*B+p*H,r[2]=m*M+_*x+d*D+g*U,r[6]=m*T+_*E+d*k+g*R,r[10]=m*w+_*P+d*N+g*z,r[14]=m*v+_*L+d*B+g*H,r[3]=S*M+y*x+b*D+A*U,r[7]=S*T+y*E+b*k+A*R,r[11]=S*w+y*P+b*N+A*z,r[15]=S*v+y*L+b*B+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],p=t[14],m=t[3],_=t[7],d=t[11],g=t[15];return m*(+r*l*h-s*c*h-r*a*u+i*c*u+s*a*p-i*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*f-r*l*f)+d*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*f-i*c*f)+g*(-s*a*f-e*l*h+e*a*u+s*o*h-i*o*u+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],p=t[11],m=t[12],_=t[13],d=t[14],g=t[15],S=h*d*c-_*u*c+_*l*p-a*d*p-h*l*g+a*u*g,y=m*u*c-f*d*c-m*l*p+o*d*p+f*l*g-o*u*g,b=f*_*c-m*h*c+m*a*p-o*_*p-f*a*g+o*h*g,A=m*h*l-f*_*l-m*a*u+o*_*u+f*a*d-o*h*d,M=e*S+i*y+s*b+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=S*T,t[1]=(_*u*r-h*d*r-_*s*p+i*d*p+h*s*g-i*u*g)*T,t[2]=(a*d*r-_*l*r+_*s*c-i*d*c-a*s*g+i*l*g)*T,t[3]=(h*l*r-a*u*r-h*s*c+i*u*c+a*s*p-i*l*p)*T,t[4]=y*T,t[5]=(f*d*r-m*u*r+m*s*p-e*d*p-f*s*g+e*u*g)*T,t[6]=(m*l*r-o*d*r-m*s*c+e*d*c+o*s*g-e*l*g)*T,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*p+e*l*p)*T,t[8]=b*T,t[9]=(m*h*r-f*_*r-m*i*p+e*_*p+f*i*g-e*h*g)*T,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*g+e*a*g)*T,t[11]=(f*a*r-o*h*r-f*i*c+e*h*c+o*i*p-e*a*p)*T,t[12]=A*T,t[13]=(f*_*s-m*h*s+m*i*u-e*_*u-f*i*d+e*h*d)*T,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*d-e*a*d)*T,t[15]=(o*h*s-f*a*s+f*i*l-e*h*l-o*i*u+e*a*u)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,p=r*f,m=r*h,_=o*f,d=o*h,g=a*h,S=l*c,y=l*f,b=l*h,A=i.x,M=i.y,T=i.z;return s[0]=(1-(_+g))*A,s[1]=(p+b)*A,s[2]=(m-y)*A,s[3]=0,s[4]=(p-b)*M,s[5]=(1-(u+g))*M,s[6]=(d+S)*M,s[7]=0,s[8]=(m+y)*T,s[9]=(d-S)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zs.set(s[0],s[1],s[2]).length();const o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);const c=1/r,f=1/o,h=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=f,Vn.elements[5]*=f,Vn.elements[6]*=f,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=wi){const l=this.elements,c=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),u=(i+s)/(i-s);let p,m;if(a===wi)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Ea)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=wi){const l=this.elements,c=1/(e-t),f=1/(i-s),h=1/(o-r),u=(e+t)*c,p=(i+s)*f;let m,_;if(a===wi)m=(o+r)*h,_=-2*h;else if(a===Ea)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zs=new Q,Vn=new Re,Op=new Q(0,0,0),Fp=new Q(1,1,1),Bi=new Q,Oo=new Q,Sn=new Q,r0=new Re,o0=new bo;class Di{constructor(t=0,e=0,i=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return r0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(r0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return o0.setFromEuler(this),this.setFromQuaternion(o0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const a0=new Q,Bs=new bo,mi=new Re,Fo=new Q,Ur=new Q,Bp=new Q,Hp=new bo,l0=new Q(1,0,0),c0=new Q(0,1,0),f0=new Q(0,0,1),u0={type:"added"},Gp={type:"removed"},Hs={type:"childadded",child:null},al={type:"childremoved",child:null};class En extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new Q,e=new Di,i=new bo,s=new Q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new Wt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(l0,t)}rotateY(t){return this.rotateOnAxis(c0,t)}rotateZ(t){return this.rotateOnAxis(f0,t)}translateOnAxis(t,e){return a0.copy(t).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(l0,t)}translateY(t){return this.translateOnAxis(c0,t)}translateZ(t){return this.translateOnAxis(f0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fo.copy(t):Fo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ur,Fo,this.up):mi.lookAt(Fo,Ur,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(mi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u0),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gp),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u0),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}En.DEFAULT_UP=new Q(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new Q,gi=new Q,ll=new Q,_i=new Q,Gs=new Q,Vs=new Q,h0=new Q,cl=new Q,fl=new Q,ul=new Q,hl=new Ie,dl=new Ie,pl=new Ie;class Zn{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Wn.subVectors(t,e),s.cross(Wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Wn.subVectors(s,e),gi.subVectors(i,e),ll.subVectors(t,e);const o=Wn.dot(Wn),a=Wn.dot(gi),l=Wn.dot(ll),c=gi.dot(gi),f=gi.dot(ll),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return hl.setScalar(0),dl.setScalar(0),pl.setScalar(0),hl.fromBufferAttribute(t,e),dl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(dl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(t,e,i,s){return Wn.subVectors(i,e),gi.subVectors(t,e),Wn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Wn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Zn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Gs.subVectors(s,i),Vs.subVectors(r,i),cl.subVectors(t,i);const l=Gs.dot(cl),c=Vs.dot(cl);if(l<=0&&c<=0)return e.copy(i);fl.subVectors(t,s);const f=Gs.dot(fl),h=Vs.dot(fl);if(f>=0&&h<=f)return e.copy(s);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(Gs,o);ul.subVectors(t,r);const p=Gs.dot(ul),m=Vs.dot(ul);if(m>=0&&p<=m)return e.copy(r);const _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Vs,a);const d=f*m-p*h;if(d<=0&&h-f>=0&&p-m>=0)return h0.subVectors(r,s),a=(h-f)/(h-f+(p-m)),e.copy(s).addScaledVector(h0,a);const g=1/(d+_+u);return o=_*g,a=u*g,e.copy(i).addScaledVector(Gs,o).addScaledVector(Vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},zo={h:0,s:0,l:0};function ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ae{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=wp(t,1),e=gn(e,0,1),i=gn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ml(o,r,t+1/3),this.g=ml(o,r,t),this.b=ml(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const i=xh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return ie.fromWorkingColorSpace(Qe.copy(this),t),Math.round(gn(Qe.r*255,0,255))*65536+Math.round(gn(Qe.g*255,0,255))*256+Math.round(gn(Qe.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ln){ie.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(zo);const i=Ja(Hi.h,zo.h,e),s=Ja(Hi.s,zo.s,e),r=Ja(Hi.l,zo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new ae;ae.NAMES=xh;let Vp=0;class Fa extends Tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=So(),this.name="",this.blending=lr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Kl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Kl&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sh extends Fa{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new Q,Bo=new le;class en{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jf,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Lr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jf&&(t.usage=this.usage),t}}class bh extends en{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mh extends en{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class bs extends en{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wp=0;const Rn=new Re,gl=new En,Ws=new Q,bn=new Mo,Nr=new Mo,Ve=new Q;class Ui extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gh(t)?Mh:bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bs(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(bn.min,Nr.min),bn.expandByPoint(Ve),Ve.addVectors(bn.max,Nr.max),bn.expandByPoint(Ve)):(bn.expandByPoint(Nr.min),bn.expandByPoint(Nr.max))}bn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ve.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),Ve.add(Ws)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new Q,l[w]=new Q;const c=new Q,f=new Q,h=new Q,u=new le,p=new le,m=new le,_=new Q,d=new Q;function g(w,v,x){c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,v),h.fromBufferAttribute(i,x),u.fromBufferAttribute(r,w),p.fromBufferAttribute(r,v),m.fromBufferAttribute(r,x),f.sub(c),h.sub(c),p.sub(u),m.sub(u);const E=1/(p.x*m.y-m.x*p.y);isFinite(E)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(E),d.copy(h).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(E),a[w].add(_),a[v].add(_),a[x].add(_),l[w].add(d),l[v].add(d),l[x].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,v=S.length;w<v;++w){const x=S[w],E=x.start,P=x.count;for(let L=E,D=E+P;L<D;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new Q,b=new Q,A=new Q,M=new Q;function T(w){A.fromBufferAttribute(s,w),M.copy(A);const v=a[w];y.copy(v),y.sub(A.multiplyScalar(A.dot(v))).normalize(),b.crossVectors(M,v);const E=b.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,E)}for(let w=0,v=S.length;w<v;++w){const x=S[w],E=x.start,P=x.count;for(let L=E,D=E+P;L<D;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,f=new Q,h=new Q;if(t)for(let u=0,p=t.count;u<p;u+=3){const m=t.getX(u+0),_=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let p=0,m=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let g=0;g<f;g++)u[m++]=c[p++]}return new en(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ui,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d0=new Re,ss=new vh,Ho=new uf,p0=new Q,Go=new Q,Vo=new Q,Wo=new Q,_l=new Q,qo=new Q,m0=new Q,$o=new Q;class On extends En{constructor(t=new Ui,e=new Sh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],h=r[l];f!==0&&(_l.fromBufferAttribute(h,t),o?qo.addScaledVector(_l,f):qo.addScaledVector(_l.sub(e),f))}e.add(qo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(Ho.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ho,p0)===null||ss.origin.distanceToSquared(p0)>(t.far-t.near)**2))&&(d0.copy(r).invert(),ss.copy(t.ray).applyMatrix4(d0),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const d=u[m],g=o[d.materialIndex],S=Math.max(d.start,p.start),y=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,A=y;b<A;b+=3){const M=a.getX(b),T=a.getX(b+1),w=a.getX(b+2);s=Xo(this,g,t,i,c,f,h,M,T,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let d=m,g=_;d<g;d+=3){const S=a.getX(d),y=a.getX(d+1),b=a.getX(d+2);s=Xo(this,o,t,i,c,f,h,S,y,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const d=u[m],g=o[d.materialIndex],S=Math.max(d.start,p.start),y=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let b=S,A=y;b<A;b+=3){const M=b,T=b+1,w=b+2;s=Xo(this,g,t,i,c,f,h,M,T,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=m,g=_;d<g;d+=3){const S=d,y=d+1,b=d+2;s=Xo(this,o,t,i,c,f,h,S,y,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function qp(n,t,e,i,s,r,o,a){let l;if(t.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Pi,a),l===null)return null;$o.copy(a),$o.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($o);return c<e.near||c>e.far?null:{distance:c,point:$o.clone(),object:n}}function Xo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Go),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Wo);const f=qp(n,t,e,i,Go,Vo,Wo,m0);if(f){const h=new Q;Zn.getBarycoord(m0,Go,Vo,Wo,h),s&&(f.uv=Zn.getInterpolatedAttribute(s,a,l,c,h,new le)),r&&(f.uv1=Zn.getInterpolatedAttribute(r,a,l,c,h,new le)),o&&(f.normal=Zn.getInterpolatedAttribute(o,a,l,c,h,new Q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new Q,materialIndex:0};Zn.getNormal(Go,Vo,Wo,u.normal),f.face=u,f.barycoord=h}return f}class To extends Ui{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,p=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bs(c,3)),this.setAttribute("normal",new bs(f,3)),this.setAttribute("uv",new bs(h,2));function m(_,d,g,S,y,b,A,M,T,w,v){const x=b/T,E=A/w,P=b/2,L=A/2,D=M/2,k=T+1,N=w+1;let B=0,U=0;const R=new Q;for(let z=0;z<N;z++){const H=z*E-L;for(let $=0;$<k;$++){const Y=$*x-P;R[_]=Y*S,R[d]=H*y,R[g]=D,c.push(R.x,R.y,R.z),R[_]=0,R[d]=0,R[g]=M>0?1:-1,f.push(R.x,R.y,R.z),h.push($/T),h.push(1-z/w),B+=1}}for(let z=0;z<w;z++)for(let H=0;H<T;H++){const $=u+H+k*z,Y=u+H+k*(z+1),G=u+(H+1)+k*(z+1),K=u+(H+1)+k*z;l.push($,Y,K),l.push(Y,G,K),U+=6}a.addGroup(p,U,v),p+=U,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=vr(n[e]);for(const s in i)t[s]=i[s]}return t}function $p(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Th(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Xp={clone:vr,merge:nn};var Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Fa{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Eh extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new Q,g0=new le,_0=new le;class Dn extends Eh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-t/Gi.z)}getViewSize(t,e){return this.getViewBounds(t,g0,_0),e.subVectors(_0,g0)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ka*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qs=-90,$s=1;class jp extends En{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(qs,$s,t,e);s.layers=this.layers,this.add(s);const r=new Dn(qs,$s,t,e);r.layers=this.layers,this.add(r);const o=new Dn(qs,$s,t,e);o.layers=this.layers,this.add(o);const a=new Dn(qs,$s,t,e);a.layers=this.layers,this.add(a);const l=new Dn(qs,$s,t,e);l.layers=this.layers,this.add(l);const c=new Dn(qs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(h,u,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class wh extends ln{constructor(t,e,i,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kp extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new To(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ji});r.uniforms.tEquirect.value=e;const o=new On(s,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=We),new jp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const yl=new Q,Jp=new Q,Qp=new Wt;class hs{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=yl.subVectors(i,e).cross(Jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new uf,Yo=new Q;class Ah{constructor(t=new hs,e=new hs,i=new hs,s=new hs,r=new hs,o=new hs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],p=s[8],m=s[9],_=s[10],d=s[11],g=s[12],S=s[13],y=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,d-p,b-g).normalize(),i[1].setComponents(l+r,u+c,d+p,b+g).normalize(),i[2].setComponents(l+o,u+f,d+m,b+S).normalize(),i[3].setComponents(l-o,u-f,d-m,b-S).normalize(),i[4].setComponents(l-a,u-h,d-_,b-y).normalize(),e===wi)i[5].setComponents(l+a,u+h,d+_,b+y).normalize();else if(e===Ea)i[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Yo.x=s.normal.x>0?t.max.x:t.min.x,Yo.y=s.normal.y>0?t.max.y:t.min.y,Yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tm(n){const t=new WeakMap;function e(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<h.length;p++){const m=h[u],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,m=h.length;p<m;p++){const _=h[p];n.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class za extends Ui{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,p=[],m=[],_=[],d=[];for(let g=0;g<f;g++){const S=g*u-o;for(let y=0;y<c;y++){const b=y*h-r;m.push(b,-S,0),_.push(0,0,1),d.push(y/a),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){const y=S+c*g,b=S+c*(g+1),A=S+1+c*(g+1),M=S+1+c*g;p.push(y,b,M),p.push(b,A,M)}this.setIndex(p),this.setAttribute("position",new bs(m,3)),this.setAttribute("normal",new bs(_,3)),this.setAttribute("uv",new bs(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.width,t.height,t.widthSegments,t.heightSegments)}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Vm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
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
#endif`,Qm=`struct PhysicalMaterial {
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
}`,tg=`
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ig=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,Bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,l1=`#define DISTANCE
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
}`,c1=`#define DISTANCE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`uniform float scale;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#define LAMBERT
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
}`,_1=`#define LAMBERT
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
}`,y1=`#define MATCAP
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
}`,v1=`#define MATCAP
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
}`,x1=`#define NORMAL
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
}`,S1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,M1=`#define PHONG
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
}`,T1=`#define STANDARD
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
}`,E1=`#define STANDARD
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
}`,w1=`#define TOON
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
}`,A1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,L1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,I1=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:fm,begin_vertex:um,beginnormal_vertex:hm,bsdfs:dm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:xm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Mm,common:Tm,cube_uv_reflection_fragment:Em,defaultnormal_vertex:wm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Im,envmap_common_pars_fragment:Um,envmap_pars_fragment:Nm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Xm,envmap_vertex:Om,fog_vertex:Fm,fog_pars_vertex:zm,fog_fragment:Bm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Vm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:qm,lights_pars_begin:$m,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:jm,lights_phong_pars_fragment:Km,lights_physical_fragment:Jm,lights_physical_pars_fragment:Qm,lights_fragment_begin:tg,lights_fragment_maps:eg,lights_fragment_end:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:og,map_fragment:ag,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:fg,metalnessmap_fragment:ug,metalnessmap_pars_fragment:hg,morphinstance_vertex:dg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:_g,normal_fragment_begin:yg,normal_fragment_maps:vg,normal_pars_fragment:xg,normal_pars_vertex:Sg,normal_vertex:bg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:wg,iridescence_pars_fragment:Ag,opaque_fragment:Rg,packing:Cg,premultiplied_alpha_fragment:Pg,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ig,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:Og,shadowmap_vertex:Fg,shadowmask_pars_fragment:zg,skinbase_vertex:Bg,skinning_pars_vertex:Hg,skinning_vertex:Gg,skinnormal_vertex:Vg,specularmap_fragment:Wg,specularmap_pars_fragment:qg,tonemapping_fragment:$g,tonemapping_pars_fragment:Xg,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:jg,uv_pars_vertex:Kg,uv_vertex:Jg,worldpos_vertex:Qg,background_vert:t1,background_frag:e1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:s1,cube_frag:r1,depth_vert:o1,depth_frag:a1,distanceRGBA_vert:l1,distanceRGBA_frag:c1,equirect_vert:f1,equirect_frag:u1,linedashed_vert:h1,linedashed_frag:d1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:_1,meshmatcap_vert:y1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:S1,meshphong_vert:b1,meshphong_frag:M1,meshphysical_vert:T1,meshphysical_frag:E1,meshtoon_vert:w1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:P1,shadow_frag:L1,sprite_vert:D1,sprite_frag:I1},pt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},li={basic:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:nn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:nn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:nn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:nn([pt.points,pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:nn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:nn([pt.common,pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:nn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:nn([pt.sprite,pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:nn([pt.common,pt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:nn([pt.lights,pt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};li.physical={uniforms:nn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Zo={r:0,b:0,g:0},os=new Di,U1=new Re;function N1(n,t,e,i,s,r,o){const a=new ae(0);let l=r===!0?0:1,c,f,h=null,u=0,p=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const b=m(S);b===null?g(a,l):b&&b.isColor&&(g(b,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(S,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===ka)?(f===void 0&&(f=new On(new To(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:vr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(os)),f.material.toneMapped=ie.getTransfer(b.colorSpace)!==ge,(h!==b||u!==b.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,h=b,u=b.version,p=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new On(new za(2,2),new fi({name:"BackgroundMaterial",uniforms:vr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==ge,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,y){S.getRGB(Zo,Th(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:_,addToRenderList:d}}function k1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,E,P,L,D){let k=!1;const N=h(L,P,E);r!==N&&(r=N,c(r.object)),k=p(x,L,P,D),k&&m(x,L,P,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(x,E,P,L),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function f(x){return n.deleteVertexArray(x)}function h(x,E,P){const L=P.wireframe===!0;let D=i[x.id];D===void 0&&(D={},i[x.id]=D);let k=D[E.id];k===void 0&&(k={},D[E.id]=k);let N=k[L];return N===void 0&&(N=u(l()),k[L]=N),N}function u(x){const E=[],P=[],L=[];for(let D=0;D<e;D++)E[D]=0,P[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:L,object:x,attributes:{},index:null}}function p(x,E,P,L){const D=r.attributes,k=E.attributes;let N=0;const B=P.getAttributes();for(const U in B)if(B[U].location>=0){const z=D[U];let H=k[U];if(H===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),z===void 0||z.attribute!==H||H&&z.data!==H.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function m(x,E,P,L){const D={},k=E.attributes;let N=0;const B=P.getAttributes();for(const U in B)if(B[U].location>=0){let z=k[U];z===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(z=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(z=x.instanceColor));const H={};H.attribute=z,z&&z.data&&(H.data=z.data),D[U]=H,N++}r.attributes=D,r.attributesNum=N,r.index=L}function _(){const x=r.newAttributes;for(let E=0,P=x.length;E<P;E++)x[E]=0}function d(x){g(x,0)}function g(x,E){const P=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;P[x]=1,L[x]===0&&(n.enableVertexAttribArray(x),L[x]=1),D[x]!==E&&(n.vertexAttribDivisor(x,E),D[x]=E)}function S(){const x=r.newAttributes,E=r.enabledAttributes;for(let P=0,L=E.length;P<L;P++)E[P]!==x[P]&&(n.disableVertexAttribArray(P),E[P]=0)}function y(x,E,P,L,D,k,N){N===!0?n.vertexAttribIPointer(x,E,P,D,k):n.vertexAttribPointer(x,E,P,L,D,k)}function b(x,E,P,L){_();const D=L.attributes,k=P.getAttributes(),N=E.defaultAttributeValues;for(const B in k){const U=k[B];if(U.location>=0){let R=D[B];if(R===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(R=x.instanceColor)),R!==void 0){const z=R.normalized,H=R.itemSize,$=t.get(R);if($===void 0)continue;const Y=$.buffer,G=$.type,K=$.bytesPerElement,at=G===n.INT||G===n.UNSIGNED_INT||R.gpuType===rf;if(R.isInterleavedBufferAttribute){const st=R.data,xt=st.stride,At=R.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<U.locationSize;Ft++)g(U.location+Ft,st.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<U.locationSize;Ft++)d(U.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let Ft=0;Ft<U.locationSize;Ft++)y(U.location+Ft,H/U.locationSize,G,z,xt*K,(At+H/U.locationSize*Ft)*K,at)}else{if(R.isInstancedBufferAttribute){for(let st=0;st<U.locationSize;st++)g(U.location+st,R.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let st=0;st<U.locationSize;st++)d(U.location+st);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let st=0;st<U.locationSize;st++)y(U.location+st,H/U.locationSize,G,z,H*K,H/U.locationSize*st*K,at)}}else if(N!==void 0){const z=N[B];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(U.location,z);break;case 3:n.vertexAttrib3fv(U.location,z);break;case 4:n.vertexAttrib4fv(U.location,z);break;default:n.vertexAttrib1fv(U.location,z)}}}}S()}function A(){w();for(const x in i){const E=i[x];for(const P in E){const L=E[P];for(const D in L)f(L[D].object),delete L[D];delete E[P]}delete i[x]}}function M(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const P in E){const L=E[P];for(const D in L)f(L[D].object),delete L[D];delete E[P]}delete i[x.id]}function T(x){for(const E in i){const P=i[E];if(P[x.id]===void 0)continue;const L=P[x.id];for(const D in L)f(L[D].object),delete L[D];delete P[x.id]}}function w(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:S}}function O1(n,t,e){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function o(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),e.update(f,i,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let m=0;m<h;m++)p+=f[m];e.update(p,i,1)}function l(c,f,h,u){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],f[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_]*u[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function F1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Li&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ei&&!w)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:A,maxSamples:M}}function z1(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hs,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,p){const m=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,g=n.get(h);if(!s||m===null||m.length===0||r&&!d)r?f(null):c();else{const S=r?0:i,y=S*4;let b=g.clippingState||null;l.value=b,b=f(m,u,y,p);for(let A=0;A!==y;++A)b[A]=e[A];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,p,m){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,m!==!0||d===null){const g=p+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let y=0,b=p;y!==_;++y,b+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function B1(n){let t=new WeakMap;function e(o,a){return a===rc?o.mapping=mr:a===oc&&(o.mapping=gr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ch extends Eh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rr=4,y0=[.125,.215,.35,.446,.526,.582],gs=20,vl=new Ch,v0=new ae;let xl=null,Sl=0,bl=0,Ml=!1;const ds=(1+Math.sqrt(5))/2,Xs=1/ds,x0=[new Q(-ds,Xs,0),new Q(ds,Xs,0),new Q(-Xs,0,ds),new Q(Xs,0,ds),new Q(0,ds,-Xs),new Q(0,ds,Xs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class S0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){xl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,Sl,bl),this._renderer.xr.enabled=Ml,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:xo,format:jn,colorSpace:Ls,depthBuffer:!1},s=b0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=b0(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H1(r)),this._blurMaterial=G1(r,t,e)}return s}_compileMaterial(t){const e=new On(this._lodPlanes[0],t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,i,s){const a=new Dn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(v0),f.toneMapping=Ki,f.autoClear=!1;const p=new Sh({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new On(new To,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(v0),_=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;jo(s,S*y,g>2?y:0,y,y),f.setRenderTarget(s),_&&f.render(m,a),f.render(t,a)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===mr||t.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M0());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;jo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,vl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=x0[(s-r-1)%x0.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new On(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gs-1),_=r/m,d=isFinite(r)?1+Math.floor(f*_):gs;d>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${gs}`);const g=[];let S=0;for(let T=0;T<gs;++T){const w=T/_,v=Math.exp(-w*w/2);g.push(v),T===0?S+=v:T<d&&(S+=2*v)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const b=this._sizeLods[s],A=3*b*(s>y-rr?s-y+rr:0),M=4*(this._cubeSize-b);jo(e,A,M,3*b,2*b),l.setRenderTarget(e),l.render(h,vl)}}function H1(n){const t=[],e=[],i=[];let s=n;const r=n-rr+1+y0.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-rr?l=y0[o-n+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,m=6,_=3,d=2,g=1,S=new Float32Array(_*m*p),y=new Float32Array(d*m*p),b=new Float32Array(g*m*p);for(let M=0;M<p;M++){const T=M%3*2/3-1,w=M>2?0:-1,v=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];S.set(v,_*m*M),y.set(u,d*m*M);const x=[M,M,M,M,M,M];b.set(x,g*m*M)}const A=new Ui;A.setAttribute("position",new en(S,_)),A.setAttribute("uv",new en(y,d)),A.setAttribute("faceIndex",new en(b,g)),t.push(A),s>rr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function b0(n,t,e){const i=new Qi(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function G1(n,t,e){const i=new Float32Array(gs),s=new Q(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:df(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function M0(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function T0(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function df(){return`

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
	`}function V1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===oc,f=l===mr||l===gr;if(c||f){let h=t.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new S0(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new S0(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function W1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q1(n,t,e,i){const s={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let d=0,g=_.length;d<g;d++)t.remove(_[d])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)t.update(u[m],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const _=p[m];for(let d=0,g=_.length;d<g;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,m=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let y=0,b=S.length;y<b;y+=3){const A=S[y+0],M=S[y+1],T=S[y+2];u.push(A,M,M,T,T,A)}}else if(m!==void 0){const S=m.array;_=m.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const A=y+0,M=y+1,T=y+2;u.push(A,M,M,T,T,A)}}else return;const d=new(gh(u)?Mh:bh)(u,1);d.version=_;const g=r.get(h);g&&t.remove(g),r.set(h,d)}function f(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function $1(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),e.update(p,i,1)}function c(u,p,m){m!==0&&(n.drawElementsInstanced(i,p,r,u*o,m),e.update(p,i,m))}function f(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g];e.update(d,i,1)}function h(u,p,m,_){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)c(u[g]/o,p[g],_[g]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S]*_[S];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function X1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Y1(n,t,e){const i=new WeakMap,s=new Ie;function r(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let x=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let b=0;m===!0&&(b=1),_===!0&&(b=2),d===!0&&(b=3);let A=a.attributes.position.count*b,M=1;A>t.maxTextureSize&&(M=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*M*4*h),w=new yh(T,A,M,h);w.type=Ei,w.needsUpdate=!0;const v=b*4;for(let E=0;E<h;E++){const P=g[E],L=S[E],D=y[E],k=A*M*4*E;for(let N=0;N<P.count;N++){const B=N*v;m===!0&&(s.fromBufferAttribute(P,N),T[k+B+0]=s.x,T[k+B+1]=s.y,T[k+B+2]=s.z,T[k+B+3]=0),_===!0&&(s.fromBufferAttribute(L,N),T[k+B+4]=s.x,T[k+B+5]=s.y,T[k+B+6]=s.z,T[k+B+7]=0),d===!0&&(s.fromBufferAttribute(D,N),T[k+B+8]=s.x,T[k+B+9]=s.y,T[k+B+10]=s.z,T[k+B+11]=D.itemSize===4?s.w:1)}}u={count:h,texture:w,size:new le(A,M)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let d=0;d<c.length;d++)m+=c[d];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Z1(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ph extends ln{constructor(t,e,i,s,r,o,a,l,c,f=cr){if(f!==cr&&f!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===cr&&(i=As),i===void 0&&f===yr&&(i=_r),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Jn,this.minFilter=l!==void 0?l:Jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lh=new ln,E0=new Ph(1,1),Dh=new yh,Ih=new Np,Uh=new wh,w0=[],A0=[],R0=new Float32Array(16),C0=new Float32Array(9),P0=new Float32Array(4);function Er(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=w0[s];if(r===void 0&&(r=new Float32Array(s),w0[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=A0[t];e===void 0&&(e=new Int32Array(t),A0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function j1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function K1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function J1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function Q1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function t2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;P0.set(i),n.uniformMatrix2fv(this.addr,!1,P0),Ge(e,i)}}function e2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;C0.set(i),n.uniformMatrix3fv(this.addr,!1,C0),Ge(e,i)}}function n2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;R0.set(i),n.uniformMatrix4fv(this.addr,!1,R0),Ge(e,i)}}function i2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function s2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function r2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function o2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function a2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function l2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function c2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function f2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function u2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(E0.compareFunction=mh,r=E0):r=Lh,e.setTexture2D(t||r,s)}function h2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ih,s)}function d2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Uh,s)}function p2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Dh,s)}function m2(n){switch(n){case 5126:return j1;case 35664:return K1;case 35665:return J1;case 35666:return Q1;case 35674:return t2;case 35675:return e2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return s2;case 35668:case 35672:return r2;case 35669:case 35673:return o2;case 5125:return a2;case 36294:return l2;case 36295:return c2;case 36296:return f2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return h2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(n,t){n.uniform1fv(this.addr,t)}function _2(n,t){const e=Er(t,this.size,2);n.uniform2fv(this.addr,e)}function y2(n,t){const e=Er(t,this.size,3);n.uniform3fv(this.addr,e)}function v2(n,t){const e=Er(t,this.size,4);n.uniform4fv(this.addr,e)}function x2(n,t){const e=Er(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function S2(n,t){const e=Er(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function b2(n,t){const e=Er(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function M2(n,t){n.uniform1iv(this.addr,t)}function T2(n,t){n.uniform2iv(this.addr,t)}function E2(n,t){n.uniform3iv(this.addr,t)}function w2(n,t){n.uniform4iv(this.addr,t)}function A2(n,t){n.uniform1uiv(this.addr,t)}function R2(n,t){n.uniform2uiv(this.addr,t)}function C2(n,t){n.uniform3uiv(this.addr,t)}function P2(n,t){n.uniform4uiv(this.addr,t)}function L2(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lh,r[o])}function D2(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ih,r[o])}function I2(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uh,r[o])}function U2(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dh,r[o])}function N2(n){switch(n){case 5126:return g2;case 35664:return _2;case 35665:return y2;case 35666:return v2;case 35674:return x2;case 35675:return S2;case 35676:return b2;case 5124:case 35670:return M2;case 35667:case 35671:return T2;case 35668:case 35672:return E2;case 35669:case 35673:return w2;case 5125:return A2;case 36294:return R2;case 36295:return C2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return I2;case 36289:case 36303:case 36311:case 36292:return U2}}class k2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m2(e.type)}}class O2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N2(e.type)}}class F2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function L0(n,t){n.seq.push(t),n.map[t.id]=t}function z2(n,t,e){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){L0(e,c===void 0?new k2(a,n,t):new O2(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new F2(a),L0(e,h)),e=h}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);z2(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function D0(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const B2=37297;let H2=0;function G2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const I0=new Wt;function V2(n){ie._getMatrix(I0,ie.workingColorSpace,n);const t=`mat3( ${I0.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Oa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function U0(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G2(n.getShaderSource(t),o)}else return s}function W2(n,t){const e=V2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function q2(n,t){let e;switch(t){case ap:e="Linear";break;case lp:e="Reinhard";break;case cp:e="Cineon";break;case fp:e="ACESFilmic";break;case hp:e="AgX";break;case dp:e="Neutral";break;case up:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ko=new Q;function $2(){ie.getLuminanceCoefficients(Ko);const n=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Y2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Z2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qr(n){return n!==""}function N0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(j2,J2)}const K2=new Map;function J2(n,t){let e=jt[t];if(e===void 0){const i=K2.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O0(n){return n.replace(Q2,t_)}function t_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function F0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function e_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case rp:t="ENVMAP_BLENDING_MIX";break;case op:t="ENVMAP_BLENDING_ADD";break}return t}function r_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function o_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=e_(e),c=n_(e),f=i_(e),h=s_(e),u=r_(e),p=X2(e),m=Y2(r),_=s.createProgram();let d,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),d.length>0&&(d+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qr).join(`
`),g.length>0&&(g+=`
`)):(d=[F0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),g=[F0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?q2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,W2("linearToOutputTexel",e.outputColorSpace),$2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Nc(o),o=N0(o,e),o=k0(o,e),a=Nc(a),a=N0(a,e),a=k0(a,e),o=O0(o),a=O0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",e.glslVersion===Kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+d+o,b=S+g+a,A=D0(s,s.VERTEX_SHADER,y),M=D0(s,s.FRAGMENT_SHADER,b);s.attachShader(_,A),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(A).trim(),D=s.getShaderInfoLog(M).trim();let k=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,M);else{const B=U0(s,A,"vertex"),U=U0(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+B+`
`+U)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||D==="")&&(N=!1);N&&(E.diagnostics={runnable:k,programLog:P,vertexShader:{log:L,prefix:d},fragmentShader:{log:D,prefix:g}})}s.deleteShader(A),s.deleteShader(M),w=new Ma(s,_),v=Z2(s,_)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,B2)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}let a_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new c_(t),e.set(t,i)),i}}class c_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function f_(n,t,e,i,s,r,o){const a=new hf,l=new l_,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,x,E,P,L){const D=P.fog,k=L.geometry,N=v.isMeshStandardMaterial?P.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||N),U=B&&B.mapping===ka?B.image.height:null,R=m[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,H=z!==void 0?z.length:0;let $=0;k.morphAttributes.position!==void 0&&($=1),k.morphAttributes.normal!==void 0&&($=2),k.morphAttributes.color!==void 0&&($=3);let Y,G,K,at;if(R){const he=li[R];Y=he.vertexShader,G=he.fragmentShader}else Y=v.vertexShader,G=v.fragmentShader,l.update(v),K=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const st=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),At=L.isInstancedMesh===!0,Ft=L.isBatchedMesh===!0,Yt=!!v.map,Ot=!!v.matcap,Z=!!B,O=!!v.aoMap,ut=!!v.lightMap,ht=!!v.bumpMap,Rt=!!v.normalMap,dt=!!v.displacementMap,qt=!!v.emissiveMap,Ct=!!v.metalnessMap,F=!!v.roughnessMap,C=v.anisotropy>0,X=v.clearcoat>0,rt=v.dispersion>0,lt=v.iridescence>0,it=v.sheen>0,It=v.transmission>0,_t=C&&!!v.anisotropyMap,Mt=X&&!!v.clearcoatMap,ee=X&&!!v.clearcoatNormalMap,ct=X&&!!v.clearcoatRoughnessMap,Tt=lt&&!!v.iridescenceMap,zt=lt&&!!v.iridescenceThicknessMap,Ht=it&&!!v.sheenColorMap,Et=it&&!!v.sheenRoughnessMap,te=!!v.specularMap,Zt=!!v.specularColorMap,ye=!!v.specularIntensityMap,V=It&&!!v.transmissionMap,gt=It&&!!v.thicknessMap,tt=!!v.gradientMap,ot=!!v.alphaMap,St=v.alphaTest>0,yt=!!v.alphaHash,$t=!!v.extensions;let Ce=Ki;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const Ke={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:G,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ls,alphaToCoverage:!!v.alphaToCoverage,map:Yt,matcap:Ot,envMap:Z,envMapMode:Z&&B.mapping,envMapCubeUVHeight:U,aoMap:O,lightMap:ut,bumpMap:ht,normalMap:Rt,displacementMap:u&&dt,emissiveMap:qt,normalMapObjectSpace:Rt&&v.normalMapType===yp,normalMapTangentSpace:Rt&&v.normalMapType===_p,metalnessMap:Ct,roughnessMap:F,anisotropy:C,anisotropyMap:_t,clearcoat:X,clearcoatMap:Mt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:lt,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:it,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:te,specularColorMap:Zt,specularIntensityMap:ye,transmission:It,transmissionMap:V,thicknessMap:gt,gradientMap:tt,opaque:v.transparent===!1&&v.blending===lr&&v.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:yt,combine:v.combine,mapUv:Yt&&_(v.map.channel),aoMapUv:O&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:ht&&_(v.bumpMap.channel),normalMapUv:Rt&&_(v.normalMap.channel),displacementMapUv:dt&&_(v.displacementMap.channel),emissiveMapUv:qt&&_(v.emissiveMap.channel),metalnessMapUv:Ct&&_(v.metalnessMap.channel),roughnessMapUv:F&&_(v.roughnessMap.channel),anisotropyMapUv:_t&&_(v.anisotropyMap.channel),clearcoatMapUv:Mt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(v.sheenRoughnessMap.channel),specularMapUv:te&&_(v.specularMap.channel),specularColorMapUv:Zt&&_(v.specularColorMap.channel),specularIntensityMapUv:ye&&_(v.specularIntensityMap.channel),transmissionMapUv:V&&_(v.transmissionMap.channel),thicknessMapUv:gt&&_(v.thicknessMap.channel),alphaMapUv:ot&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Rt||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Yt||ot),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:$,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Yt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$t&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&v.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function g(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const E in v.defines)x.push(E),x.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(S(x,v),y(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function y(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const x=m[v.type];let E;if(x){const P=li[x];E=Xp.clone(P.uniforms)}else E=v.uniforms;return E}function A(v,x){let E;for(let P=0,L=f.length;P<L;P++){const D=f[P];if(D.cacheKey===x){E=D,++E.usedTimes;break}}return E===void 0&&(E=new o_(n,x,v,r),f.push(E)),E}function M(v){if(--v.usedTimes===0){const x=f.indexOf(v);f[x]=f[f.length-1],f.pop(),v.destroy()}}function T(v){l.remove(v)}function w(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:b,acquireProgram:A,releaseProgram:M,releaseShaderCache:T,programs:f,dispose:w}}function u_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function h_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function z0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function B0(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,u,p,m,_,d){let g=n[t];return g===void 0?(g={id:h.id,object:h,geometry:u,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:d},n[t]=g):(g.id=h.id,g.object=h,g.geometry=u,g.material=p,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=_,g.group=d),t++,g}function a(h,u,p,m,_,d){const g=o(h,u,p,m,_,d);p.transmission>0?i.push(g):p.transparent===!0?s.push(g):e.push(g)}function l(h,u,p,m,_,d){const g=o(h,u,p,m,_,d);p.transmission>0?i.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(h,u){e.length>1&&e.sort(h||h_),i.length>1&&i.sort(u||z0),s.length>1&&s.sort(u||z0)}function f(){for(let h=t,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function d_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new B0,n.set(i,[o])):s>=r.length?(o=new B0,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function p_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new ae};break;case"SpotLight":e={position:new Q,direction:new Q,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function m_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let g_=0;function __(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y_(n){const t=new p_,e=m_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Re,o=new Re;function a(c){let f=0,h=0,u=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,m=0,_=0,d=0,g=0,S=0,y=0,b=0,A=0,M=0,T=0;c.sort(__);for(let v=0,x=c.length;v<x;v++){const E=c[v],P=E.color,L=E.intensity,D=E.distance,k=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=P.r*L,h+=P.g*L,u+=P.b*L;else if(E.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(E.sh.coefficients[N],L);T++}else if(E.isDirectionalLight){const N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const B=E.shadow,U=e.get(E);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=E.shadow.matrix,S++}i.directional[p]=N,p++}else if(E.isSpotLight){const N=t.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(P).multiplyScalar(L),N.distance=D,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,i.spot[_]=N;const B=E.shadow;if(E.map&&(i.spotLightMap[A]=E.map,A++,B.updateMatrices(E),E.castShadow&&M++),i.spotLightMatrix[_]=B.matrix,E.castShadow){const U=e.get(E);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=k,b++}_++}else if(E.isRectAreaLight){const N=t.get(E);N.color.copy(P).multiplyScalar(L),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),i.rectArea[d]=N,d++}else if(E.isPointLight){const N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){const B=E.shadow,U=e.get(E);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,U.shadowCameraNear=B.camera.near,U.shadowCameraFar=B.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=E.shadow.matrix,y++}i.point[m]=N,m++}else if(E.isHemisphereLight){const N=t.get(E);N.skyColor.copy(E.color).multiplyScalar(L),N.groundColor.copy(E.groundColor).multiplyScalar(L),i.hemi[g]=N,g++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const w=i.hash;(w.directionalLength!==p||w.pointLength!==m||w.spotLength!==_||w.rectAreaLength!==d||w.hemiLength!==g||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==b||w.numSpotMaps!==A||w.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=d,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+A-M,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=T,w.directionalLength=p,w.pointLength=m,w.spotLength=_,w.rectAreaLength=d,w.hemiLength=g,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=b,w.numSpotMaps=A,w.numLightProbes=T,i.version=g_++)}function l(c,f){let h=0,u=0,p=0,m=0,_=0;const d=f.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const y=c[g];if(y.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(y.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),p++}else if(y.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),u++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:i}}function H0(n){const t=new y_(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new H0(n),t.set(s,[a])):r>=o.length?(a=new H0(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class x_ extends Fa{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends Fa{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`;function T_(n,t,e){let i=new Ah;const s=new le,r=new le,o=new Ie,a=new x_({depthPacking:gp}),l=new S_,c={},f=e.maxTextureSize,h={[Pi]:_n,[_n]:Pi,[Un]:Un},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:b_,fragmentShader:M_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ui;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(m,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let g=this.type;this.render=function(M,T,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const v=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ji),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=g!==vi&&this.type===vi,D=g===vi&&this.type!==vi;for(let k=0,N=M.length;k<N;k++){const B=M[k],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const R=U.getFrameExtents();if(s.multiply(R),r.copy(U.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/R.x),s.x=r.x*R.x,U.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/R.y),s.y=r.y*R.y,U.mapSize.y=r.y)),U.map===null||L===!0||D===!0){const H=this.type!==vi?{minFilter:Jn,magFilter:Jn}:{};U.map!==null&&U.map.dispose(),U.map=new Qi(s.x,s.y,H),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const z=U.getViewportCount();for(let H=0;H<z;H++){const $=U.getViewport(H);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),P.viewport(o),U.updateMatrices(B,H),i=U.getFrustum(),b(T,w,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&S(U,w),U.needsUpdate=!1}g=this.type,d.needsUpdate=!1,n.setRenderTarget(v,x,E)};function S(M,T){const w=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Qi(s.x,s.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,w,u,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,w,p,_,null)}function y(M,T,w,v){let x=null;const E=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)x=E;else if(x=w.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=x.uuid,L=T.uuid;let D=c[P];D===void 0&&(D={},c[P]=D);let k=D[L];k===void 0&&(k=x.clone(),D[L]=k,T.addEventListener("dispose",A)),x=k}if(x.visible=T.visible,x.wireframe=T.wireframe,v===vi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=n.properties.get(x);P.light=w}return x}function b(M,T,w,v,x){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===vi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const L=t.update(M),D=M.material;if(Array.isArray(D)){const k=L.groups;for(let N=0,B=k.length;N<B;N++){const U=k[N],R=D[U.materialIndex];if(R&&R.visible){const z=y(M,R,v,x);M.onBeforeShadow(n,M,T,w,L,z,U),n.renderBufferDirect(w,null,L,z,M,U),M.onAfterShadow(n,M,T,w,L,z,U)}}}else if(D.visible){const k=y(M,D,v,x);M.onBeforeShadow(n,M,T,w,L,k,null),n.renderBufferDirect(w,null,L,k,M,null),M.onAfterShadow(n,M,T,w,L,k,null)}}const P=M.children;for(let L=0,D=P.length;L<D;L++)b(P[L],T,w,v,x)}function A(M){M.target.removeEventListener("dispose",A);for(const w in c){const v=c[w],x=M.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const E_={[Jl]:Ql,[tc]:ic,[ec]:sc,[pr]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:pr};function w_(n,t){function e(){let V=!1;const gt=new Ie;let tt=null;const ot=new Ie(0,0,0,0);return{setMask:function(St){tt!==St&&!V&&(n.colorMask(St,St,St,St),tt=St)},setLocked:function(St){V=St},setClear:function(St,yt,$t,Ce,Ke){Ke===!0&&(St*=Ce,yt*=Ce,$t*=Ce),gt.set(St,yt,$t,Ce),ot.equals(gt)===!1&&(n.clearColor(St,yt,$t,Ce),ot.copy(gt))},reset:function(){V=!1,tt=null,ot.set(-1,0,0,0)}}}function i(){let V=!1,gt=!1,tt=null,ot=null,St=null;return{setReversed:function(yt){if(gt!==yt){const $t=t.get("EXT_clip_control");gt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ce=St;St=null,this.setClear(Ce)}gt=yt},getReversed:function(){return gt},setTest:function(yt){yt?st(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(yt){tt!==yt&&!V&&(n.depthMask(yt),tt=yt)},setFunc:function(yt){if(gt&&(yt=E_[yt]),ot!==yt){switch(yt){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=yt}},setLocked:function(yt){V=yt},setClear:function(yt){St!==yt&&(gt&&(yt=1-yt),n.clearDepth(yt),St=yt)},reset:function(){V=!1,tt=null,ot=null,St=null,gt=!1}}}function s(){let V=!1,gt=null,tt=null,ot=null,St=null,yt=null,$t=null,Ce=null,Ke=null;return{setTest:function(he){V||(he?st(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(he){gt!==he&&!V&&(n.stencilMask(he),gt=he)},setFunc:function(he,Bn,ui){(tt!==he||ot!==Bn||St!==ui)&&(n.stencilFunc(he,Bn,ui),tt=he,ot=Bn,St=ui)},setOp:function(he,Bn,ui){(yt!==he||$t!==Bn||Ce!==ui)&&(n.stencilOp(he,Bn,ui),yt=he,$t=Bn,Ce=ui)},setLocked:function(he){V=he},setClear:function(he){Ke!==he&&(n.clearStencil(he),Ke=he)},reset:function(){V=!1,gt=null,tt=null,ot=null,St=null,yt=null,$t=null,Ce=null,Ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,p=[],m=null,_=!1,d=null,g=null,S=null,y=null,b=null,A=null,M=null,T=new ae(0,0,0),w=0,v=!1,x=null,E=null,P=null,L=null,D=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=B>=2);let R=null,z={};const H=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),Y=new Ie().fromArray(H),G=new Ie().fromArray($);function K(V,gt,tt,ot){const St=new Uint8Array(4),yt=n.createTexture();n.bindTexture(V,yt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<tt;$t++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return yt}const at={};at[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(pr),ht(!1),Rt(qf),st(n.CULL_FACE),O(ji);function st(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function xt(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function At(V,gt){return h[V]!==gt?(n.bindFramebuffer(V,gt),h[V]=gt,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(V,gt){let tt=p,ot=!1;if(V){tt=u.get(gt),tt===void 0&&(tt=[],u.set(gt,tt));const St=V.textures;if(tt.length!==St.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,$t=St.length;yt<$t;yt++)tt[yt]=n.COLOR_ATTACHMENT0+yt;tt.length=St.length,ot=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(tt)}function Yt(V){return m!==V?(n.useProgram(V),m=V,!0):!1}const Ot={[ms]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};Ot[Wd]=n.MIN,Ot[qd]=n.MAX;const Z={[$d]:n.ZERO,[Xd]:n.ONE,[Yd]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[jd]:n.DST_ALPHA,[Zd]:n.ONE_MINUS_SRC_COLOR,[Kl]:n.ONE_MINUS_SRC_ALPHA,[Qd]:n.ONE_MINUS_DST_COLOR,[Kd]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[np]:n.ONE_MINUS_CONSTANT_COLOR,[ip]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function O(V,gt,tt,ot,St,yt,$t,Ce,Ke,he){if(V===ji){_===!0&&(xt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),V!==Hd){if(V!==d||he!==v){if((g!==ms||b!==ms)&&(n.blendEquation(n.FUNC_ADD),g=ms,b=ms),he)switch(V){case lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $f:n.blendFunc(n.ONE,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $f:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,y=null,A=null,M=null,T.set(0,0,0),w=0,d=V,v=he}return}St=St||gt,yt=yt||tt,$t=$t||ot,(gt!==g||St!==b)&&(n.blendEquationSeparate(Ot[gt],Ot[St]),g=gt,b=St),(tt!==S||ot!==y||yt!==A||$t!==M)&&(n.blendFuncSeparate(Z[tt],Z[ot],Z[yt],Z[$t]),S=tt,y=ot,A=yt,M=$t),(Ce.equals(T)===!1||Ke!==w)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Ke),T.copy(Ce),w=Ke),d=V,v=!1}function ut(V,gt){V.side===Un?xt(n.CULL_FACE):st(n.CULL_FACE);let tt=V.side===_n;gt&&(tt=!tt),ht(tt),V.blending===lr&&V.transparent===!1?O(ji):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const ot=V.stencilWrite;a.setTest(ot),ot&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){x!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),x=V)}function Rt(V){V!==Fd?(st(n.CULL_FACE),V!==E&&(V===qf?n.cullFace(n.BACK):V===zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),E=V}function dt(V){V!==P&&(N&&n.lineWidth(V),P=V)}function qt(V,gt,tt){V?(st(n.POLYGON_OFFSET_FILL),(L!==gt||D!==tt)&&(n.polygonOffset(gt,tt),L=gt,D=tt)):xt(n.POLYGON_OFFSET_FILL)}function Ct(V){V?st(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function F(V){V===void 0&&(V=n.TEXTURE0+k-1),R!==V&&(n.activeTexture(V),R=V)}function C(V,gt,tt){tt===void 0&&(R===null?tt=n.TEXTURE0+k-1:tt=R);let ot=z[tt];ot===void 0&&(ot={type:void 0,texture:void 0},z[tt]=ot),(ot.type!==V||ot.texture!==gt)&&(R!==tt&&(n.activeTexture(tt),R=tt),n.bindTexture(V,gt||at[V]),ot.type=V,ot.texture=gt)}function X(){const V=z[R];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(V){Y.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Y.copy(V))}function Et(V){G.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),G.copy(V))}function te(V,gt){let tt=c.get(gt);tt===void 0&&(tt=new WeakMap,c.set(gt,tt));let ot=tt.get(V);ot===void 0&&(ot=n.getUniformBlockIndex(gt,V.name),tt.set(V,ot))}function Zt(V,gt){const ot=c.get(gt).get(V);l.get(gt)!==ot&&(n.uniformBlockBinding(gt,ot,V.__bindingPointIndex),l.set(gt,ot))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},R=null,z={},h={},u=new WeakMap,p=[],m=null,_=!1,d=null,g=null,S=null,y=null,b=null,A=null,M=null,T=new ae(0,0,0),w=0,v=!1,x=null,E=null,P=null,L=null,D=null,Y.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:xt,bindFramebuffer:At,drawBuffers:Ft,useProgram:Yt,setBlending:O,setMaterial:ut,setFlipSided:ht,setCullFace:Rt,setLineWidth:dt,setPolygonOffset:qt,setScissorTest:Ct,activeTexture:F,bindTexture:C,unbindTexture:X,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:zt,updateUBOMapping:te,uniformBlockBinding:Zt,texStorage2D:ee,texStorage3D:ct,texSubImage2D:it,texSubImage3D:It,compressedTexSubImage2D:_t,compressedTexSubImage3D:Mt,scissor:Ht,viewport:Et,reset:ye}}function G0(n,t,e,i){const s=A_(i);switch(e){case lh:return n*t;case fh:return n*t;case uh:return n*t*2;case hh:return n*t/s.components*s.byteLength;case lf:return n*t/s.components*s.byteLength;case dh:return n*t*2/s.components*s.byteLength;case cf:return n*t*2/s.components*s.byteLength;case ch:return n*t*3/s.components*s.byteLength;case jn:return n*t*4/s.components*s.byteLength;case ff:return n*t*4/s.components*s.byteLength;case ya:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cc:case uc:return Math.max(n,16)*Math.max(t,8)/4;case lc:case fc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case dc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ba:case Cc:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ph:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(n){switch(n){case Li:case rh:return{byteLength:1,components:1};case ao:case oh:case xo:return{byteLength:2,components:1};case of:case af:return{byteLength:2,components:4};case As:case rf:case Ei:return{byteLength:4,components:1};case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function R_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,f=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,C){return p?new OffscreenCanvas(F,C):wa("canvas")}function _(F,C,X){let rt=1;const lt=Ct(F);if((lt.width>X||lt.height>X)&&(rt=X/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const it=Math.floor(rt*lt.width),It=Math.floor(rt*lt.height);h===void 0&&(h=m(it,It));const _t=C?m(it,It):h;return _t.width=it,_t.height=It,_t.getContext("2d").drawImage(F,0,0,it,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+It+")."),_t}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),F;return F}function d(F){return F.generateMipmaps}function g(F){n.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(F,C,X,rt,lt=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let it=C;if(C===n.RED&&(X===n.FLOAT&&(it=n.R32F),X===n.HALF_FLOAT&&(it=n.R16F),X===n.UNSIGNED_BYTE&&(it=n.R8)),C===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.R8UI),X===n.UNSIGNED_SHORT&&(it=n.R16UI),X===n.UNSIGNED_INT&&(it=n.R32UI),X===n.BYTE&&(it=n.R8I),X===n.SHORT&&(it=n.R16I),X===n.INT&&(it=n.R32I)),C===n.RG&&(X===n.FLOAT&&(it=n.RG32F),X===n.HALF_FLOAT&&(it=n.RG16F),X===n.UNSIGNED_BYTE&&(it=n.RG8)),C===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RG8UI),X===n.UNSIGNED_SHORT&&(it=n.RG16UI),X===n.UNSIGNED_INT&&(it=n.RG32UI),X===n.BYTE&&(it=n.RG8I),X===n.SHORT&&(it=n.RG16I),X===n.INT&&(it=n.RG32I)),C===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGB8UI),X===n.UNSIGNED_SHORT&&(it=n.RGB16UI),X===n.UNSIGNED_INT&&(it=n.RGB32UI),X===n.BYTE&&(it=n.RGB8I),X===n.SHORT&&(it=n.RGB16I),X===n.INT&&(it=n.RGB32I)),C===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),X===n.UNSIGNED_INT&&(it=n.RGBA32UI),X===n.BYTE&&(it=n.RGBA8I),X===n.SHORT&&(it=n.RGBA16I),X===n.INT&&(it=n.RGBA32I)),C===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),C===n.RGBA){const It=lt?Oa:ie.getTransfer(rt);X===n.FLOAT&&(it=n.RGBA32F),X===n.HALF_FLOAT&&(it=n.RGBA16F),X===n.UNSIGNED_BYTE&&(it=It===ge?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function b(F,C){let X;return F?C===null||C===As||C===_r?X=n.DEPTH24_STENCIL8:C===Ei?X=n.DEPTH32F_STENCIL8:C===ao&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===As||C===_r?X=n.DEPTH_COMPONENT24:C===Ei?X=n.DEPTH_COMPONENT32F:C===ao&&(X=n.DEPTH_COMPONENT16),X}function A(F,C){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==Jn&&F.minFilter!==We?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function M(F){const C=F.target;C.removeEventListener("dispose",M),w(C),C.isVideoTexture&&f.delete(C)}function T(F){const C=F.target;C.removeEventListener("dispose",T),x(C)}function w(F){const C=i.get(F);if(C.__webglInit===void 0)return;const X=F.source,rt=u.get(X);if(rt){const lt=rt[C.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&v(F),Object.keys(rt).length===0&&u.delete(X)}i.remove(F)}function v(F){const C=i.get(F);n.deleteTexture(C.__webglTexture);const X=F.source,rt=u.get(X);delete rt[C.__cacheKey],o.memory.textures--}function x(F){const C=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(C.__webglFramebuffer[rt]))for(let lt=0;lt<C.__webglFramebuffer[rt].length;lt++)n.deleteFramebuffer(C.__webglFramebuffer[rt][lt]);else n.deleteFramebuffer(C.__webglFramebuffer[rt]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[rt])}else{if(Array.isArray(C.__webglFramebuffer))for(let rt=0;rt<C.__webglFramebuffer.length;rt++)n.deleteFramebuffer(C.__webglFramebuffer[rt]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let rt=0;rt<C.__webglColorRenderbuffer.length;rt++)C.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[rt]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=F.textures;for(let rt=0,lt=X.length;rt<lt;rt++){const it=i.get(X[rt]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(X[rt])}i.remove(F)}let E=0;function P(){E=0}function L(){const F=E;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),E+=1,F}function D(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function k(F,C){const X=i.get(F);if(F.isVideoTexture&&dt(F),F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){const rt=F.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(X,F,C);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+C)}function N(F,C){const X=i.get(F);if(F.version>0&&X.__version!==F.version){G(X,F,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+C)}function B(F,C){const X=i.get(F);if(F.version>0&&X.__version!==F.version){G(X,F,C);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+C)}function U(F,C){const X=i.get(F);if(F.version>0&&X.__version!==F.version){K(X,F,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+C)}const R={[oo]:n.REPEAT,[Ti]:n.CLAMP_TO_EDGE,[ac]:n.MIRRORED_REPEAT},z={[Jn]:n.NEAREST,[pp]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},H={[vp]:n.NEVER,[Ep]:n.ALWAYS,[xp]:n.LESS,[mh]:n.LEQUAL,[Sp]:n.EQUAL,[Tp]:n.GEQUAL,[bp]:n.GREATER,[Mp]:n.NOTEQUAL};function $(F,C){if(C.type===Ei&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===We||C.magFilter===ja||C.magFilter===Lo||C.magFilter===Yi||C.minFilter===We||C.minFilter===ja||C.minFilter===Lo||C.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,R[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,R[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,R[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,z[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,H[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Jn||C.minFilter!==Lo&&C.minFilter!==Yi||C.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Y(F,C){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",M));const rt=C.source;let lt=u.get(rt);lt===void 0&&(lt={},u.set(rt,lt));const it=D(C);if(it!==F.__cacheKey){lt[it]===void 0&&(lt[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),lt[it].usedTimes++;const It=lt[F.__cacheKey];It!==void 0&&(lt[F.__cacheKey].usedTimes--,It.usedTimes===0&&v(C)),F.__cacheKey=it,F.__webglTexture=lt[it].texture}return X}function G(F,C,X){let rt=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(rt=n.TEXTURE_3D);const lt=Y(F,C),it=C.source;e.bindTexture(rt,F.__webglTexture,n.TEXTURE0+X);const It=i.get(it);if(it.version!==It.__version||lt===!0){e.activeTexture(n.TEXTURE0+X);const _t=ie.getPrimaries(ie.workingColorSpace),Mt=C.colorSpace===Tn?null:ie.getPrimaries(C.colorSpace),ee=C.colorSpace===Tn||_t===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ct=_(C.image,!1,s.maxTextureSize);ct=qt(C,ct);const Tt=r.convert(C.format,C.colorSpace),zt=r.convert(C.type);let Ht=y(C.internalFormat,Tt,zt,C.colorSpace,C.isVideoTexture);$(rt,C);let Et;const te=C.mipmaps,Zt=C.isVideoTexture!==!0,ye=It.__version===void 0||lt===!0,V=it.dataReady,gt=A(C,ct);if(C.isDepthTexture)Ht=b(C.format===yr,C.type),ye&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Ht,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Tt,zt,null));else if(C.isDataTexture)if(te.length>0){Zt&&ye&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,te[0].width,te[0].height);for(let tt=0,ot=te.length;tt<ot;tt++)Et=te[tt],Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Tt,zt,Et.data);C.generateMipmaps=!1}else Zt?(ye&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,ct.width,ct.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,zt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Tt,zt,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ht,te[0].width,te[0].height,ct.depth);for(let tt=0,ot=te.length;tt<ot;tt++)if(Et=te[tt],C.format!==jn)if(Tt!==null)if(Zt){if(V)if(C.layerUpdates.size>0){const St=G0(Et.width,Et.height,C.format,C.type);for(const yt of C.layerUpdates){const $t=Et.data.subarray(yt*St/Et.data.BYTES_PER_ELEMENT,(yt+1)*St/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,yt,Et.width,Et.height,1,Tt,$t)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ct.depth,Tt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ct.depth,Tt,zt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Et.width,Et.height,ct.depth,0,Tt,zt,Et.data)}else{Zt&&ye&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,te[0].width,te[0].height);for(let tt=0,ot=te.length;tt<ot;tt++)Et=te[tt],C.format!==jn?Tt!==null?Zt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Tt,zt,Et.data)}else if(C.isDataArrayTexture)if(Zt){if(ye&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ht,ct.width,ct.height,ct.depth),V)if(C.layerUpdates.size>0){const tt=G0(ct.width,ct.height,C.format,C.type);for(const ot of C.layerUpdates){const St=ct.data.subarray(ot*tt/ct.data.BYTES_PER_ELEMENT,(ot+1)*tt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,Tt,zt,St)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(C.isData3DTexture)Zt?(ye&&e.texStorage3D(n.TEXTURE_3D,gt,Ht,ct.width,ct.height,ct.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(C.isFramebufferTexture){if(ye)if(Zt)e.texStorage2D(n.TEXTURE_2D,gt,Ht,ct.width,ct.height);else{let tt=ct.width,ot=ct.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Ht,tt,ot,0,Tt,zt,null),tt>>=1,ot>>=1}}else if(te.length>0){if(Zt&&ye){const tt=Ct(te[0]);e.texStorage2D(n.TEXTURE_2D,gt,Ht,tt.width,tt.height)}for(let tt=0,ot=te.length;tt<ot;tt++)Et=te[tt],Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Tt,zt,Et):e.texImage2D(n.TEXTURE_2D,tt,Ht,Tt,zt,Et);C.generateMipmaps=!1}else if(Zt){if(ye){const tt=Ct(ct);e.texStorage2D(n.TEXTURE_2D,gt,Ht,tt.width,tt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,zt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Tt,zt,ct);d(C)&&g(rt),It.__version=it.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function K(F,C,X){if(C.image.length!==6)return;const rt=Y(F,C),lt=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+X);const it=i.get(lt);if(lt.version!==it.__version||rt===!0){e.activeTexture(n.TEXTURE0+X);const It=ie.getPrimaries(ie.workingColorSpace),_t=C.colorSpace===Tn?null:ie.getPrimaries(C.colorSpace),Mt=C.colorSpace===Tn||It===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let ot=0;ot<6;ot++)!ee&&!ct?Tt[ot]=_(C.image[ot],!0,s.maxCubemapSize):Tt[ot]=ct?C.image[ot].image:C.image[ot],Tt[ot]=qt(C,Tt[ot]);const zt=Tt[0],Ht=r.convert(C.format,C.colorSpace),Et=r.convert(C.type),te=y(C.internalFormat,Ht,Et,C.colorSpace),Zt=C.isVideoTexture!==!0,ye=it.__version===void 0||rt===!0,V=lt.dataReady;let gt=A(C,zt);$(n.TEXTURE_CUBE_MAP,C);let tt;if(ee){Zt&&ye&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,te,zt.width,zt.height);for(let ot=0;ot<6;ot++){tt=Tt[ot].mipmaps;for(let St=0;St<tt.length;St++){const yt=tt[St];C.format!==jn?Ht!==null?Zt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,te,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,yt.width,yt.height,Ht,Et,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,te,yt.width,yt.height,0,Ht,Et,yt.data)}}}else{if(tt=C.mipmaps,Zt&&ye){tt.length>0&&gt++;const ot=Ct(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt[ot].width,Tt[ot].height,Ht,Et,Tt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Tt[ot].width,Tt[ot].height,0,Ht,Et,Tt[ot].data);for(let St=0;St<tt.length;St++){const $t=tt[St].image[ot].image;Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,$t.width,$t.height,Ht,Et,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,te,$t.width,$t.height,0,Ht,Et,$t.data)}}else{Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Et,Tt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Ht,Et,Tt[ot]);for(let St=0;St<tt.length;St++){const yt=tt[St];Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Ht,Et,yt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,te,Ht,Et,yt.image[ot])}}}d(C)&&g(n.TEXTURE_CUBE_MAP),it.__version=lt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function at(F,C,X,rt,lt,it){const It=r.convert(X.format,X.colorSpace),_t=r.convert(X.type),Mt=y(X.internalFormat,It,_t,X.colorSpace),ee=i.get(C),ct=i.get(X);if(ct.__renderTarget=C,!ee.__hasExternalTextures){const Tt=Math.max(1,C.width>>it),zt=Math.max(1,C.height>>it);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,Mt,Tt,zt,C.depth,0,It,_t,null):e.texImage2D(lt,it,Mt,Tt,zt,0,It,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,lt,ct.__webglTexture,0,ht(C)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,lt,ct.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(F,C,X){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){const rt=C.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,it=b(C.stencilBuffer,lt),It=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=ht(C);Rt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,it,C.width,C.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,it,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,it,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,F)}else{const rt=C.textures;for(let lt=0;lt<rt.length;lt++){const it=rt[lt],It=r.convert(it.format,it.colorSpace),_t=r.convert(it.type),Mt=y(it.internalFormat,It,_t,it.colorSpace),ee=ht(C);X&&Rt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Mt,C.width,C.height):Rt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Mt,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=i.get(C.depthTexture);rt.__renderTarget=C,(!rt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),k(C.depthTexture,0);const lt=rt.__webglTexture,it=ht(C);if(C.depthTexture.format===cr)Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(C.depthTexture.format===yr)Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function At(F){const C=i.get(F),X=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const rt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),rt){const lt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),C.__depthDisposeCallback=lt}C.__boundDepthTexture=rt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xt(C.__webglFramebuffer,F)}else if(X){C.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[rt]),C.__webglDepthbuffer[rt]===void 0)C.__webglDepthbuffer[rt]=n.createRenderbuffer(),st(C.__webglDepthbuffer[rt],F,!1);else{const lt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=C.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),st(C.__webglDepthbuffer,F,!1);else{const rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(F,C,X){const rt=i.get(F);C!==void 0&&at(rt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&At(F)}function Yt(F){const C=F.texture,X=i.get(F),rt=i.get(C);F.addEventListener("dispose",T);const lt=F.textures,it=F.isWebGLCubeRenderTarget===!0,It=lt.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=C.version,o.memory.textures++),it){X.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<C.mipmaps.length;Mt++)X.__webglFramebuffer[_t][Mt]=n.createFramebuffer()}else X.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let _t=0;_t<C.mipmaps.length;_t++)X.__webglFramebuffer[_t]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(It)for(let _t=0,Mt=lt.length;_t<Mt;_t++){const ee=i.get(lt[_t]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Rt(F)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const Mt=lt[_t];X.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[_t]);const ee=r.convert(Mt.format,Mt.colorSpace),ct=r.convert(Mt.type),Tt=y(Mt.internalFormat,ee,ct,Mt.colorSpace,F.isXRRenderTarget===!0),zt=ht(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Tt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,X.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),st(X.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),$(n.TEXTURE_CUBE_MAP,C);for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0)for(let Mt=0;Mt<C.mipmaps.length;Mt++)at(X.__webglFramebuffer[_t][Mt],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else at(X.__webglFramebuffer[_t],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(C)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,Mt=lt.length;_t<Mt;_t++){const ee=lt[_t],ct=i.get(ee);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),$(n.TEXTURE_2D,ee),at(X.__webglFramebuffer,F,ee,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),d(ee)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(_t=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),$(_t,C),C.mipmaps&&C.mipmaps.length>0)for(let Mt=0;Mt<C.mipmaps.length;Mt++)at(X.__webglFramebuffer[Mt],F,C,n.COLOR_ATTACHMENT0,_t,Mt);else at(X.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,_t,0);d(C)&&g(_t),e.unbindTexture()}F.depthBuffer&&At(F)}function Ot(F){const C=F.textures;for(let X=0,rt=C.length;X<rt;X++){const lt=C[X];if(d(lt)){const it=S(F),It=i.get(lt).__webglTexture;e.bindTexture(it,It),g(it),e.unbindTexture()}}}const Z=[],O=[];function ut(F){if(F.samples>0){if(Rt(F)===!1){const C=F.textures,X=F.width,rt=F.height;let lt=n.COLOR_BUFFER_BIT;const it=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(F),_t=C.length>1;if(_t)for(let Mt=0;Mt<C.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Mt=0;Mt<C.length;Mt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);const ee=i.get(C[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,X,rt,0,0,X,rt,lt,n.NEAREST),l===!0&&(Z.length=0,O.length=0,Z.push(n.COLOR_ATTACHMENT0+Mt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Z.push(it),O.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Mt=0;Mt<C.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,It.__webglColorRenderbuffer[Mt]);const ee=i.get(C[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function ht(F){return Math.min(s.maxSamples,F.samples)}function Rt(F){const C=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function dt(F){const C=o.render.frame;f.get(F)!==C&&(f.set(F,C),F.update())}function qt(F,C){const X=F.colorSpace,rt=F.format,lt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==Ls&&X!==Tn&&(ie.getTransfer(X)===ge?(rt!==jn||lt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Ct(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=k,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=U,this.rebindTextures=Ft,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Rt}function C_(n,t){function e(i,s=Tn){let r;const o=ie.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===of)return n.UNSIGNED_SHORT_4_4_4_4;if(i===af)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return n.BYTE;if(i===oh)return n.SHORT;if(i===ao)return n.UNSIGNED_SHORT;if(i===rf)return n.INT;if(i===As)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===xo)return n.HALF_FLOAT;if(i===lh)return n.ALPHA;if(i===ch)return n.RGB;if(i===jn)return n.RGBA;if(i===fh)return n.LUMINANCE;if(i===uh)return n.LUMINANCE_ALPHA;if(i===cr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===lf)return n.RED_INTEGER;if(i===dh)return n.RG;if(i===cf)return n.RG_INTEGER;if(i===ff)return n.RGBA_INTEGER;if(i===ya||i===va||i===xa||i===Sa)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lc||i===cc||i===fc||i===uc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===dc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mc||i===gc||i===_c||i===yc||i===vc||i===xc||i===Sc||i===bc||i===Mc||i===Tc||i===Ec||i===wc||i===Ac||i===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ba||i===Cc||i===Pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ba)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ph||i===Lc||i===Dc||i===Ic)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class P_ extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $r extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),g=this._getHandJoint(c,_);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $r;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:D_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new On(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Tr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,m=null;const _=new U_,d=e.getContextAttributes();let g=null,S=null;const y=[],b=[],A=new le;let M=null;const T=new Dn;T.viewport=new Ie;const w=new Dn;w.viewport=new Ie;const v=[T,w],x=new P_;let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=y[G];return K===void 0&&(K=new El,y[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=y[G];return K===void 0&&(K=new El,y[G]=K),K.getGripSpace()},this.getHand=function(G){let K=y[G];return K===void 0&&(K=new El,y[G]=K),K.getHandSpace()};function L(G){const K=b.indexOf(G.inputSource);if(K===-1)return;const at=y[K];at!==void 0&&(at.update(G.inputSource,G.frame,c||o),at.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",k);for(let G=0;G<y.length;G++){const K=b[G];K!==null&&(b[G]=null,y[G].disconnect(K))}E=null,P=null,_.reset(),t.setRenderTarget(g),p=null,u=null,h=null,s=null,S=null,Y.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",D),s.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const K={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qi(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let K=null,at=null,st=null;d.depth&&(st=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=d.stencil?yr:cr,at=d.stencil?_r:As);const xt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Qi(u.textureWidth,u.textureHeight,{format:jn,type:Li,depthTexture:new Ph(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(G){for(let K=0;K<G.removed.length;K++){const at=G.removed[K],st=b.indexOf(at);st>=0&&(b[st]=null,y[st].disconnect(at))}for(let K=0;K<G.added.length;K++){const at=G.added[K];let st=b.indexOf(at);if(st===-1){for(let At=0;At<y.length;At++)if(At>=b.length){b.push(at),st=At;break}else if(b[At]===null){b[At]=at,st=At;break}if(st===-1)break}const xt=y[st];xt&&xt.connect(at)}}const N=new Q,B=new Q;function U(G,K,at){N.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(at.matrixWorld);const st=N.distanceTo(B),xt=K.projectionMatrix.elements,At=at.projectionMatrix.elements,Ft=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),Ot=(xt[9]+1)/xt[5],Z=(xt[9]-1)/xt[5],O=(xt[8]-1)/xt[0],ut=(At[8]+1)/At[0],ht=Ft*O,Rt=Ft*ut,dt=st/(-O+ut),qt=dt*-O;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qt),G.translateZ(dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xt[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ct=Ft+dt,F=Yt+dt,C=ht-qt,X=Rt+(st-qt),rt=Ot*Yt/F*Ct,lt=Z*Yt/F*Ct;G.projectionMatrix.makePerspective(C,X,rt,lt,Ct,F),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function R(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let K=G.near,at=G.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(at=_.depthFar)),x.near=w.near=T.near=K,x.far=w.far=T.far=at,(E!==x.near||P!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,P=x.far),T.layers.mask=G.layers.mask|2,w.layers.mask=G.layers.mask|4,x.layers.mask=T.layers.mask|w.layers.mask;const st=G.parent,xt=x.cameras;R(x,st);for(let At=0;At<xt.length;At++)R(xt[At],st);xt.length===2?U(x,T,w):x.projectionMatrix.copy(T.projectionMatrix),z(G,x,st)};function z(G,K,at){at===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Uc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let H=null;function $(G,K){if(f=K.getViewerPose(c||o),m=K,f!==null){const at=f.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let st=!1;at.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let At=0;At<at.length;At++){const Ft=at[At];let Yt=null;if(p!==null)Yt=p.getViewport(Ft);else{const Z=h.getViewSubImage(u,Ft);Yt=Z.viewport,At===0&&(t.setRenderTargetTextures(S,Z.colorTexture,u.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(S))}let Ot=v[At];Ot===void 0&&(Ot=new Dn,Ot.layers.enable(At),Ot.viewport=new Ie,v[At]=Ot),Ot.matrix.fromArray(Ft.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(Ft.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),At===0&&(x.matrix.copy(Ot.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Ot)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const At=h.getDepthInformation(at[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let at=0;at<y.length;at++){const st=b[at],xt=y[at];st!==null&&xt!==void 0&&xt.update(st,K,c||o)}H&&H(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),m=null}const Y=new Rh;Y.setAnimationLoop($),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}const as=new Di,k_=new Re;function O_(n,t){function e(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function i(d,g){g.color.getRGB(d.fogColor.value,Th(n)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,S,y,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(d,g):g.isMeshToonMaterial?(r(d,g),h(d,g)):g.isMeshPhongMaterial?(r(d,g),f(d,g)):g.isMeshStandardMaterial?(r(d,g),u(d,g),g.isMeshPhysicalMaterial&&p(d,g,b)):g.isMeshMatcapMaterial?(r(d,g),m(d,g)):g.isMeshDepthMaterial?r(d,g):g.isMeshDistanceMaterial?(r(d,g),_(d,g)):g.isMeshNormalMaterial?r(d,g):g.isLineBasicMaterial?(o(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?l(d,g,S,y):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,e(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===_n&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,e(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===_n&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,e(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,e(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const S=t.get(g),y=S.envMap,b=S.envMapRotation;y&&(d.envMap.value=y,as.copy(b),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),d.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(as)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,d.aoMapTransform))}function o(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function l(d,g,S,y){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*S,d.scale.value=y*.5,g.map&&(d.map.value=g.map,e(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function f(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function h(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function u(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,S){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function _(d,g){const S=t.get(g).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function F_(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;i.uniformBlockBinding(S,b)}function c(S,y){let b=s[S.id];b===void 0&&(m(S),b=f(S),s[S.id]=b,S.addEventListener("dispose",d));const A=y.program;i.updateUBOMapping(S,A);const M=t.render.frame;r[S.id]!==M&&(u(S),r[S.id]=M)}function f(S){const y=h();S.__bindingPointIndex=y;const b=n.createBuffer(),A=S.__size,M=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,b),b}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const y=s[S.id],b=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,T=b.length;M<T;M++){const w=Array.isArray(b[M])?b[M]:[b[M]];for(let v=0,x=w.length;v<x;v++){const E=w[v];if(p(E,M,v,A)===!0){const P=E.__offset,L=Array.isArray(E.value)?E.value:[E.value];let D=0;for(let k=0;k<L.length;k++){const N=L[k],B=_(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+D,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,y,b,A){const M=S.value,T=y+"_"+b;if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:A[T]=M.clone(),!0;{const w=A[T];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[T]=M,!0}else if(w.equals(M)===!1)return w.copy(M),!0}return!1}function m(S){const y=S.uniforms;let b=0;const A=16;for(let T=0,w=y.length;T<w;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,E=v.length;x<E;x++){const P=v[x],L=Array.isArray(P.value)?P.value:[P.value];for(let D=0,k=L.length;D<k;D++){const N=L[D],B=_(N),U=b%A,R=U%B.boundary,z=U+R;b+=R,z!==0&&A-z<B.storage&&(b+=A-z),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=B.storage}}}const M=b%A;return M>0&&(b+=A-M),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function d(S){const y=S.target;y.removeEventListener("dispose",d);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class z_{constructor(t={}){const{canvas:e=Ap(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let d=null,g=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this.toneMapping=Ki,this.toneMappingExposure=1;const b=this;let A=!1,M=0,T=0,w=null,v=-1,x=null;const E=new Ie,P=new Ie;let L=null;const D=new ae(0);let k=0,N=e.width,B=e.height,U=1,R=null,z=null;const H=new Ie(0,0,N,B),$=new Ie(0,0,N,B);let Y=!1;const G=new Ah;let K=!1,at=!1;const st=new Re,xt=new Re,At=new Q,Ft=new Ie,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Z(){return w===null?U:1}let O=i;function ut(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sf}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",yt,!1),O===null){const W="webgl2";if(O=ut(W,I),O===null)throw ut(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ht,Rt,dt,qt,Ct,F,C,X,rt,lt,it,It,_t,Mt,ee,ct,Tt,zt,Ht,Et,te,Zt,ye,V;function gt(){ht=new W1(O),ht.init(),Zt=new C_(O,ht),Rt=new F1(O,ht,t,Zt),dt=new w_(O,ht),Rt.reverseDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),qt=new X1(O),Ct=new u_,F=new R_(O,ht,dt,Ct,Rt,Zt,qt),C=new B1(b),X=new V1(b),rt=new tm(O),ye=new k1(O,rt),lt=new q1(O,rt,qt,ye),it=new Z1(O,lt,rt,qt),Ht=new Y1(O,Rt,F),ct=new z1(Ct),It=new f_(b,C,X,ht,Rt,ye,ct),_t=new O_(b,Ct),Mt=new d_,ee=new v_(ht),zt=new N1(b,C,X,dt,it,p,l),Tt=new T_(b,it,Rt),V=new F_(O,qt,Rt,dt),Et=new O1(O,ht,qt),te=new $1(O,ht,qt),qt.programs=It.programs,b.capabilities=Rt,b.extensions=ht,b.properties=Ct,b.renderLists=Mt,b.shadowMap=Tt,b.state=dt,b.info=qt}gt();const tt=new N_(b,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(N,B,!1))},this.getSize=function(I){return I.set(N,B)},this.setSize=function(I,W,j=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=I,B=W,e.width=Math.floor(I*U),e.height=Math.floor(W*U),j===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(N*U,B*U).floor()},this.setDrawingBufferSize=function(I,W,j){N=I,B=W,U=j,e.width=Math.floor(I*j),e.height=Math.floor(W*j),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(H)},this.setViewport=function(I,W,j,J){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,W,j,J),dt.viewport(E.copy(H).multiplyScalar(U).round())},this.getScissor=function(I){return I.copy($)},this.setScissor=function(I,W,j,J){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,W,j,J),dt.scissor(P.copy($).multiplyScalar(U).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(I){dt.setScissorTest(Y=I)},this.setOpaqueSort=function(I){R=I},this.setTransparentSort=function(I){z=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,W=!0,j=!0){let J=0;if(I){let q=!1;if(w!==null){const ft=w.texture.format;q=ft===ff||ft===cf||ft===lf}if(q){const ft=w.texture.type,vt=ft===Li||ft===As||ft===ao||ft===_r||ft===of||ft===af,Pt=zt.getClearColor(),Lt=zt.getClearAlpha(),Gt=Pt.r,Xt=Pt.g,Dt=Pt.b;vt?(m[0]=Gt,m[1]=Xt,m[2]=Dt,m[3]=Lt,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Gt,_[1]=Xt,_[2]=Dt,_[3]=Lt,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}W&&(J|=O.DEPTH_BUFFER_BIT),j&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Mt.dispose(),ee.dispose(),Ct.dispose(),C.dispose(),X.dispose(),it.dispose(),ye.dispose(),V.dispose(),It.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Of),tt.removeEventListener("sessionend",Ff),es.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=qt.autoReset,W=Tt.enabled,j=Tt.autoUpdate,J=Tt.needsUpdate,q=Tt.type;gt(),qt.autoReset=I,Tt.enabled=W,Tt.autoUpdate=j,Tt.needsUpdate=J,Tt.type=q}function yt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function $t(I){const W=I.target;W.removeEventListener("dispose",$t),Ce(W)}function Ce(I){Ke(I),Ct.remove(I)}function Ke(I){const W=Ct.get(I).programs;W!==void 0&&(W.forEach(function(j){It.releaseProgram(j)}),I.isShaderMaterial&&It.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,j,J,q,ft){W===null&&(W=Yt);const vt=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Nd(I,W,j,J,q);dt.setMaterial(J,vt);let Lt=j.index,Gt=1;if(J.wireframe===!0){if(Lt=lt.getWireframeAttribute(j),Lt===void 0)return;Gt=2}const Xt=j.drawRange,Dt=j.attributes.position;let oe=Xt.start*Gt,ve=(Xt.start+Xt.count)*Gt;ft!==null&&(oe=Math.max(oe,ft.start*Gt),ve=Math.min(ve,(ft.start+ft.count)*Gt)),Lt!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Lt.count)):Dt!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,Dt.count));const Se=ve-oe;if(Se<0||Se===1/0)return;ye.setup(q,J,Pt,j,Lt);let cn,ce=Et;if(Lt!==null&&(cn=rt.get(Lt),ce=te,ce.setIndex(cn)),q.isMesh)J.wireframe===!0?(dt.setLineWidth(J.wireframeLinewidth*Z()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(q.isLine){let Ut=J.linewidth;Ut===void 0&&(Ut=1),dt.setLineWidth(Ut*Z()),q.isLineSegments?ce.setMode(O.LINES):q.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else q.isPoints?ce.setMode(O.POINTS):q.isSprite&&ce.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ut=q._multiDrawStarts,hi=q._multiDrawCounts,fe=q._multiDrawCount,Hn=Lt?rt.get(Lt).bytesPerElement:1,Is=Ct.get(J).currentProgram.getUniforms();for(let xn=0;xn<fe;xn++)Is.setValue(O,"_gl_DrawID",xn),ce.render(Ut[xn]/Hn,hi[xn])}else if(q.isInstancedMesh)ce.renderInstances(oe,Se,q.count);else if(j.isInstancedBufferGeometry){const Ut=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,hi=Math.min(j.instanceCount,Ut);ce.renderInstances(oe,Se,hi)}else ce.render(oe,Se)};function he(I,W,j){I.transparent===!0&&I.side===Un&&I.forceSinglePass===!1?(I.side=_n,I.needsUpdate=!0,Po(I,W,j),I.side=Pi,I.needsUpdate=!0,Po(I,W,j),I.side=Un):Po(I,W,j)}this.compile=function(I,W,j=null){j===null&&(j=I),g=ee.get(j),g.init(W),y.push(g),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),I!==j&&I.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const J=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ft=q.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const Pt=ft[vt];he(Pt,j,q),J.add(Pt)}else he(ft,j,q),J.add(ft)}),y.pop(),g=null,J},this.compileAsync=function(I,W,j=null){const J=this.compile(I,W,j);return new Promise(q=>{function ft(){if(J.forEach(function(vt){Ct.get(vt).currentProgram.isReady()&&J.delete(vt)}),J.size===0){q(I);return}setTimeout(ft,10)}ht.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Bn=null;function ui(I){Bn&&Bn(I)}function Of(){es.stop()}function Ff(){es.start()}const es=new Rh;es.setAnimationLoop(ui),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(I){Bn=I,tt.setAnimationLoop(I),I===null?es.stop():es.start()},tt.addEventListener("sessionstart",Of),tt.addEventListener("sessionend",Ff),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,W,w),g=ee.get(I,y.length),g.init(W),y.push(g),xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(xt),at=this.localClippingEnabled,K=ct.init(this.clippingPlanes,at),d=Mt.get(I,S.length),d.init(),S.push(d),tt.enabled===!0&&tt.isPresenting===!0){const ft=b.xr.getDepthSensingMesh();ft!==null&&Za(ft,W,-1/0,b.sortObjects)}Za(I,W,0,b.sortObjects),d.finish(),b.sortObjects===!0&&d.sort(R,z),Ot=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ot&&zt.addToRenderList(d,I),this.info.render.frame++,K===!0&&ct.beginShadows();const j=g.state.shadowsArray;Tt.render(j,I,W),K===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=d.opaque,q=d.transmissive;if(g.setupLights(),W.isArrayCamera){const ft=W.cameras;if(q.length>0)for(let vt=0,Pt=ft.length;vt<Pt;vt++){const Lt=ft[vt];Bf(J,q,I,Lt)}Ot&&zt.render(I);for(let vt=0,Pt=ft.length;vt<Pt;vt++){const Lt=ft[vt];zf(d,I,Lt,Lt.viewport)}}else q.length>0&&Bf(J,q,I,W),Ot&&zt.render(I),zf(d,I,W);w!==null&&(F.updateMultisampleRenderTarget(w),F.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(b,I,W),ye.resetDefaultState(),v=-1,x=null,y.pop(),y.length>0?(g=y[y.length-1],K===!0&&ct.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function Za(I,W,j,J){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||G.intersectsSprite(I)){J&&Ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xt);const vt=it.update(I),Pt=I.material;Pt.visible&&d.push(I,vt,Pt,j,Ft.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||G.intersectsObject(I))){const vt=it.update(I),Pt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ft.copy(I.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ft.copy(vt.boundingSphere.center)),Ft.applyMatrix4(I.matrixWorld).applyMatrix4(xt)),Array.isArray(Pt)){const Lt=vt.groups;for(let Gt=0,Xt=Lt.length;Gt<Xt;Gt++){const Dt=Lt[Gt],oe=Pt[Dt.materialIndex];oe&&oe.visible&&d.push(I,vt,oe,j,Ft.z,Dt)}}else Pt.visible&&d.push(I,vt,Pt,j,Ft.z,null)}}const ft=I.children;for(let vt=0,Pt=ft.length;vt<Pt;vt++)Za(ft[vt],W,j,J)}function zf(I,W,j,J){const q=I.opaque,ft=I.transmissive,vt=I.transparent;g.setupLightsView(j),K===!0&&ct.setGlobalState(b.clippingPlanes,j),J&&dt.viewport(E.copy(J)),q.length>0&&Co(q,W,j),ft.length>0&&Co(ft,W,j),vt.length>0&&Co(vt,W,j),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function Bf(I,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Qi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?xo:Li,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ft=g.state.transmissionRenderTarget[J.id],vt=J.viewport||E;ft.setSize(vt.z,vt.w);const Pt=b.getRenderTarget();b.setRenderTarget(ft),b.getClearColor(D),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear(),Ot&&zt.render(j);const Lt=b.toneMapping;b.toneMapping=Ki;const Gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),K===!0&&ct.setGlobalState(b.clippingPlanes,J),Co(I,j,J),F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Dt=0,oe=W.length;Dt<oe;Dt++){const ve=W[Dt],Se=ve.object,cn=ve.geometry,ce=ve.material,Ut=ve.group;if(ce.side===Un&&Se.layers.test(J.layers)){const hi=ce.side;ce.side=_n,ce.needsUpdate=!0,Hf(Se,j,J,cn,ce,Ut),ce.side=hi,ce.needsUpdate=!0,Xt=!0}}Xt===!0&&(F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft))}b.setRenderTarget(Pt),b.setClearColor(D,k),Gt!==void 0&&(J.viewport=Gt),b.toneMapping=Lt}function Co(I,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ft=I.length;q<ft;q++){const vt=I[q],Pt=vt.object,Lt=vt.geometry,Gt=J===null?vt.material:J,Xt=vt.group;Pt.layers.test(j.layers)&&Hf(Pt,W,j,Lt,Gt,Xt)}}function Hf(I,W,j,J,q,ft){I.onBeforeRender(b,W,j,J,q,ft),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(b,W,j,J,I,ft),q.transparent===!0&&q.side===Un&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,b.renderBufferDirect(j,W,J,q,I,ft),q.side=Pi,q.needsUpdate=!0,b.renderBufferDirect(j,W,J,q,I,ft),q.side=Un):b.renderBufferDirect(j,W,J,q,I,ft),I.onAfterRender(b,W,j,J,q,ft)}function Po(I,W,j){W.isScene!==!0&&(W=Yt);const J=Ct.get(I),q=g.state.lights,ft=g.state.shadowsArray,vt=q.state.version,Pt=It.getParameters(I,q.state,ft,W,j),Lt=It.getProgramCacheKey(Pt);let Gt=J.programs;J.environment=I.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(I.isMeshStandardMaterial?X:C).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,Gt===void 0&&(I.addEventListener("dispose",$t),Gt=new Map,J.programs=Gt);let Xt=Gt.get(Lt);if(Xt!==void 0){if(J.currentProgram===Xt&&J.lightsStateVersion===vt)return Vf(I,Pt),Xt}else Pt.uniforms=It.getUniforms(I),I.onBeforeCompile(Pt,b),Xt=It.acquireProgram(Pt,Lt),Gt.set(Lt,Xt),J.uniforms=Pt.uniforms;const Dt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Dt.clippingPlanes=ct.uniform),Vf(I,Pt),J.needsLights=Od(I),J.lightsStateVersion=vt,J.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.directionalShadowMap.value=q.state.directionalShadowMap,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotShadowMap.value=q.state.spotShadowMap,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMap.value=q.state.pointShadowMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Xt,J.uniformsList=null,Xt}function Gf(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=Ma.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Vf(I,W){const j=Ct.get(I);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Nd(I,W,j,J,q){W.isScene!==!0&&(W=Yt),F.resetTextureUnits();const ft=W.fog,vt=J.isMeshStandardMaterial?W.environment:null,Pt=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ls,Lt=(J.isMeshStandardMaterial?X:C).get(J.envMap||vt),Gt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!j.morphAttributes.position,oe=!!j.morphAttributes.normal,ve=!!j.morphAttributes.color;let Se=Ki;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Se=b.toneMapping);const cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=cn!==void 0?cn.length:0,Ut=Ct.get(J),hi=g.state.lights;if(K===!0&&(at===!0||I!==x)){const An=I===x&&J.id===v;ct.setState(J,I,An)}let fe=!1;J.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==hi.state.version||Ut.outputColorSpace!==Pt||q.isBatchedMesh&&Ut.batching===!1||!q.isBatchedMesh&&Ut.batching===!0||q.isBatchedMesh&&Ut.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ut.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ut.instancing===!1||!q.isInstancedMesh&&Ut.instancing===!0||q.isSkinnedMesh&&Ut.skinning===!1||!q.isSkinnedMesh&&Ut.skinning===!0||q.isInstancedMesh&&Ut.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ut.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ut.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ut.instancingMorph===!1&&q.morphTexture!==null||Ut.envMap!==Lt||J.fog===!0&&Ut.fog!==ft||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Gt||Ut.vertexTangents!==Xt||Ut.morphTargets!==Dt||Ut.morphNormals!==oe||Ut.morphColors!==ve||Ut.toneMapping!==Se||Ut.morphTargetsCount!==ce)&&(fe=!0):(fe=!0,Ut.__version=J.version);let Hn=Ut.currentProgram;fe===!0&&(Hn=Po(J,W,q));let Is=!1,xn=!1,Cr=!1;const be=Hn.getUniforms(),ti=Ut.uniforms;if(dt.useProgram(Hn.program)&&(Is=!0,xn=!0,Cr=!0),J.id!==v&&(v=J.id,xn=!0),Is||x!==I){dt.buffers.depth.getReversed()?(st.copy(I.projectionMatrix),Cp(st),Pp(st),be.setValue(O,"projectionMatrix",st)):be.setValue(O,"projectionMatrix",I.projectionMatrix),be.setValue(O,"viewMatrix",I.matrixWorldInverse);const Ni=be.map.cameraPosition;Ni!==void 0&&Ni.setValue(O,At.setFromMatrixPosition(I.matrixWorld)),Rt.logarithmicDepthBuffer&&be.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&be.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),x!==I&&(x=I,xn=!0,Cr=!0)}if(q.isSkinnedMesh){be.setOptional(O,q,"bindMatrix"),be.setOptional(O,q,"bindMatrixInverse");const An=q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(O,"boneTexture",An.boneTexture,F))}q.isBatchedMesh&&(be.setOptional(O,q,"batchingTexture"),be.setValue(O,"batchingTexture",q._matricesTexture,F),be.setOptional(O,q,"batchingIdTexture"),be.setValue(O,"batchingIdTexture",q._indirectTexture,F),be.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&be.setValue(O,"batchingColorTexture",q._colorsTexture,F));const Pr=j.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ht.update(q,j,Hn),(xn||Ut.receiveShadow!==q.receiveShadow)&&(Ut.receiveShadow=q.receiveShadow,be.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ti.envMap.value=Lt,ti.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(ti.envMapIntensity.value=W.environmentIntensity),xn&&(be.setValue(O,"toneMappingExposure",b.toneMappingExposure),Ut.needsLights&&kd(ti,Cr),ft&&J.fog===!0&&_t.refreshFogUniforms(ti,ft),_t.refreshMaterialUniforms(ti,J,U,B,g.state.transmissionRenderTarget[I.id]),Ma.upload(O,Gf(Ut),ti,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ma.upload(O,Gf(Ut),ti,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&be.setValue(O,"center",q.center),be.setValue(O,"modelViewMatrix",q.modelViewMatrix),be.setValue(O,"normalMatrix",q.normalMatrix),be.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const An=J.uniformsGroups;for(let Ni=0,ki=An.length;Ni<ki;Ni++){const Wf=An[Ni];V.update(Wf,Hn),V.bind(Wf,Hn)}}return Hn}function kd(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Od(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,W,j){Ct.get(I.texture).__webglTexture=W,Ct.get(I.depthTexture).__webglTexture=j;const J=Ct.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const j=Ct.get(I);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,j=0){w=I,M=W,T=j;let J=!0,q=null,ft=!1,vt=!1;if(I){const Lt=Ct.get(I);if(Lt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(Lt.__hasExternalTextures)F.rebindTextures(I,Ct.get(I.texture).__webglTexture,Ct.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Dt=I.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&Ct.has(Dt)&&(I.width!==Dt.image.width||I.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const Gt=I.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);const Xt=Ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xt[W])?q=Xt[W][j]:q=Xt[W],ft=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?q=Ct.get(I).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[j]:q=Xt,E.copy(I.viewport),P.copy(I.scissor),L=I.scissorTest}else E.copy(H).multiplyScalar(U).floor(),P.copy($).multiplyScalar(U).floor(),L=Y;if(dt.bindFramebuffer(O.FRAMEBUFFER,q)&&J&&dt.drawBuffers(I,q),dt.viewport(E),dt.scissor(P),dt.setScissorTest(L),ft){const Lt=Ct.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,j)}else if(vt){const Lt=Ct.get(I.texture),Gt=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,j||0,Gt)}v=-1},this.readRenderTargetPixels=function(I,W,j,J,q,ft,vt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){dt.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Lt=I.texture,Gt=Lt.format,Xt=Lt.type;if(!Rt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-J&&j>=0&&j<=I.height-q&&O.readPixels(W,j,J,q,Zt.convert(Gt),Zt.convert(Xt),ft)}finally{const Lt=w!==null?Ct.get(w).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,W,j,J,q,ft,vt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){const Lt=I.texture,Gt=Lt.format,Xt=Lt.type;if(!Rt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-J&&j>=0&&j<=I.height-q){dt.bindFramebuffer(O.FRAMEBUFFER,Pt);const Dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(W,j,J,q,Zt.convert(Gt),Zt.convert(Xt),0);const oe=w!==null?Ct.get(w).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,oe);const ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Rp(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(Dt),O.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,j=0){I.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const J=Math.pow(2,-j),q=Math.floor(I.image.width*J),ft=Math.floor(I.image.height*J),vt=W!==null?W.x:0,Pt=W!==null?W.y:0;F.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,vt,Pt,q,ft),dt.unbindTexture()},this.copyTextureToTexture=function(I,W,j=null,J=null,q=0){I.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],W=arguments[2],q=arguments[3]||0,j=null);let ft,vt,Pt,Lt,Gt,Xt,Dt,oe,ve;const Se=I.isCompressedTexture?I.mipmaps[q]:I.image;j!==null?(ft=j.max.x-j.min.x,vt=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,Lt=j.min.x,Gt=j.min.y,Xt=j.isBox3?j.min.z:0):(ft=Se.width,vt=Se.height,Pt=Se.depth||1,Lt=0,Gt=0,Xt=0),J!==null?(Dt=J.x,oe=J.y,ve=J.z):(Dt=0,oe=0,ve=0);const cn=Zt.convert(W.format),ce=Zt.convert(W.type);let Ut;W.isData3DTexture?(F.setTexture3D(W,0),Ut=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(F.setTexture2DArray(W,0),Ut=O.TEXTURE_2D_ARRAY):(F.setTexture2D(W,0),Ut=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const hi=O.getParameter(O.UNPACK_ROW_LENGTH),fe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Hn=O.getParameter(O.UNPACK_SKIP_PIXELS),Is=O.getParameter(O.UNPACK_SKIP_ROWS),xn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);const Cr=I.isDataArrayTexture||I.isData3DTexture,be=W.isDataArrayTexture||W.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const ti=Ct.get(I),Pr=Ct.get(W),An=Ct.get(ti.__renderTarget),Ni=Ct.get(Pr.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ki=0;ki<Pt;ki++)Cr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(I).__webglTexture,q,Xt+ki),I.isDepthTexture?(be&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(W).__webglTexture,q,ve+ki),O.blitFramebuffer(Lt,Gt,ft,vt,Dt,oe,ft,vt,O.DEPTH_BUFFER_BIT,O.NEAREST)):be?O.copyTexSubImage3D(Ut,q,Dt,oe,ve+ki,Lt,Gt,ft,vt):O.copyTexSubImage2D(Ut,q,Dt,oe,ve+ki,Lt,Gt,ft,vt);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else be?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Ut,q,Dt,oe,ve,ft,vt,Pt,cn,ce,Se.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,q,Dt,oe,ve,ft,vt,Pt,cn,Se.data):O.texSubImage3D(Ut,q,Dt,oe,ve,ft,vt,Pt,cn,ce,Se):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,Dt,oe,ft,vt,cn,ce,Se.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,Dt,oe,Se.width,Se.height,cn,Se.data):O.texSubImage2D(O.TEXTURE_2D,q,Dt,oe,ft,vt,cn,ce,Se);O.pixelStorei(O.UNPACK_ROW_LENGTH,hi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,fe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Hn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Is),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xn),q===0&&W.generateMipmaps&&O.generateMipmap(Ut),dt.unbindTexture()},this.copyTextureToTexture3D=function(I,W,j=null,J=null,q=0){return I.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,I=arguments[2],W=arguments[3],q=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,j,J,q)},this.initRenderTarget=function(I){Ct.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),dt.unbindTexture()},this.resetState=function(){M=0,T=0,w=null,dt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Nh extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ha extends ln{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const B_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=kh(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,u,p;if(i&&(r=q_(n,t,r,e)),n.length>80*e){a=c=n[0],l=f=n[1];for(let m=e;m<s;m+=e)h=n[m],u=n[m+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);p=Math.max(c-a,f-l),p=p!==0?32767/p:0}return lo(r,o,e,a,l,p,0),o}};function kh(n,t,e,i,s){let r,o;if(s===ny(n,t,e,i)>0)for(r=t;r<e;r+=i)o=V0(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=V0(r,n[r],n[r+1],o);return o&&Ga(o,o.next)&&(fo(o),o=o.next),o}function Rs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ga(e,e.next)||Ae(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&j_(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?G_(n,i,s,r):H_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),fo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=V_(Rs(n),t,e),lo(n,t,e,i,s,r,2)):o===2&&W_(n,t,e,i,s,r):lo(Rs(n),t,e,i,s,r,1);break}}}function H_(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let m=i.next;for(;m!==t;){if(m.x>=f&&m.x<=u&&m.y>=h&&m.y<=p&&or(s,a,r,l,o,c,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function G_(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ae(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,m=f<h?f<u?f:u:h<u?h:u,_=a>l?a>c?a:c:l>c?l:c,d=f>h?f>u?f:u:h>u?h:u,g=kc(p,m,t,e,i),S=kc(_,d,t,e,i);let y=n.prevZ,b=n.nextZ;for(;y&&y.z>=g&&b&&b.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=d&&y!==s&&y!==o&&or(a,f,l,h,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=_&&b.y>=m&&b.y<=d&&b!==s&&b!==o&&or(a,f,l,h,c,u,b.x,b.y)&&Ae(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=d&&y!==s&&y!==o&&or(a,f,l,h,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=S;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=d&&b!==s&&b!==o&&or(a,f,l,h,c,u,b.x,b.y)&&Ae(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function V_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Ga(s,r)&&Oh(s,i,i.next,r)&&co(s,r)&&co(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),fo(i),fo(i.next),i=n=r),i=i.next}while(i!==n);return Rs(i)}function W_(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Q_(o,a)){let l=Fh(o,a);o=Rs(o,o.next),l=Rs(l,l.next),lo(o,t,e,i,s,r,0),lo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function q_(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=kh(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(J_(c));for(s.sort($_),r=0;r<s.length;r++)e=X_(s[r],e);return e}function $_(n,t){return n.x-t.x}function X_(n,t){const e=Y_(n,t);if(!e)return t;const i=Fh(e,n);return Rs(i,i.next),Rs(e,e.next)}function Y_(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&or(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),co(e,n)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&Z_(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function Z_(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function j_(n,t,e,i){let s=n;do s.z===0&&(s.z=kc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,K_(s)}function K_(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function kc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function J_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function or(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Q_(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!ty(n,t)&&(co(n,t)&&co(t,n)&&ey(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||Ga(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ga(n,t){return n.x===t.x&&n.y===t.y}function Oh(n,t,e,i){const s=Qo(Ae(n,t,e)),r=Qo(Ae(n,t,i)),o=Qo(Ae(e,i,n)),a=Qo(Ae(e,i,t));return!!(s!==r&&o!==a||s===0&&Jo(n,e,t)||r===0&&Jo(n,i,t)||o===0&&Jo(e,n,i)||a===0&&Jo(e,t,i))}function Jo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qo(n){return n>0?1:n<0?-1:0}function ty(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function co(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function ey(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Fh(n,t){const e=new Oc(n.i,n.x,n.y),i=new Oc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function V0(n,t,e,i){const s=new Oc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ny(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class pf{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pf.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];W0(t),q0(i,t);let o=t.length;e.forEach(W0);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,q0(i,e[l]);const a=B_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function W0(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function q0(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const $0=new Re;class iy{constructor(t,e,i=0,s=1/0){this.ray=new vh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($0),this}intersectObject(t,e=!0,i=[]){return Fc(t,this,i,e),i.sort(X0),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Fc(t[s],this,i,e);return i.sort(X0),i}}function X0(n,t){return n.distance-t.distance}function Fc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);function $e(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function ur(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class _e{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const s of t)e+=Math.max(0,s[1]);let i=this.next()*e;for(const s of t)if(i-=Math.max(0,s[1]),i<=0)return s[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}fork(t=0){return new _e($e(Math.floor(this.next()*4294967296),t))}}const qe=(n,t,e)=>n<t?t:n>e?e:n,sy=(n,t,e)=>n+(t-n)*e,zc=(n,t,e)=>{const i=qe((e-n)/(t-n),0,1);return i*i*(3-2*i)},xs=(n,t,e,i)=>sy(n,t,1-Math.exp(-e*i)),wl=Math.PI*2;function ry(n,t){let e=(t-n)%wl;return e>Math.PI&&(e-=wl),e<-Math.PI&&(e+=wl),e}function Oe(n,t=0){const e=Math.floor(n),i=n-e,s=$e(e,t)/2147483648-1,r=$e(e+1,t)/2147483648-1,o=i*i*(3-2*i);return s+(r-s)*o}const re="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",Kt="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",Ji="'VT323', 'Courier New', monospace",Ss="'Patrick Hand', 'Segoe Print', 'Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive";function vn(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function oy(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'","400 32px 'Patrick Hand'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function Ds(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const s=new Ha(n);return s.colorSpace=Tn,s.wrapS=t?oo:Ti,s.wrapT=e?oo:Ti,s.generateMipmaps=i,s.minFilter=i?Yi:We,s.magFilter=We,s.anisotropy=2,s.needsUpdate=!0,s}function ay(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Va(n,t){const[e,i,s]=ay(n),r=o=>Math.max(0,Math.min(255,Math.round(t>=0?o+(255-o)*t:o*(1+t))));return`rgb(${r(e)},${r(i)},${r(s)})`}function Xe(n,t,e,i,s,r=1,o=1,a=!0){const l=new _e(r);n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip();const c=Math.floor(i*s/900*o);for(let f=0;f<c;f++){const h=l.range(.02,.09)*o;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${h})`:`rgba(255,255,240,${h*.6})`;const u=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,s),u,u*l.range(.5,a?3:1.4))}for(let f=0;a&&f<Math.floor(i/90*o);f++){const h=t+l.range(0,i),u=e+l.range(0,s*.7),p=l.range(s*.05,s*.35),m=n.createLinearGradient(0,u,0,u+p);m.addColorStop(0,`rgba(40,30,15,${.1*o})`),m.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=m,n.fillRect(h,u,l.range(2,7),p)}n.restore()}function xe(n,t,e,i,s=re,r=400){let o=i;n.font=`${r} ${o}px ${s}`;const a=n.measureText(t).width;return a>e&&(o=Math.max(6,Math.floor(o*e/a)),n.font=`${r} ${o}px ${s}`),o}function zn(n,t,e){const i=[];for(const s of String(t).split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;n.measureText(a).width>e&&r?(i.push(r),r=o):r=a}i.push(r)}return i}function uo(n,t,e,i,s,r){const o={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[s]??0;n.save(),n.translate(t,e),n.rotate(o),n.strokeStyle=r,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const se={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},Ms={ring:"#dc241f",bar:"#0019a8",text:"#ffffff",panel:"#fbfaf4"},Kn={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},ly=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function wr(n,t,e,i,s={}){let r=s.ring||Ms.ring,o=s.bar||Ms.bar;const a=s.defect||null;a==="swap"&&([r,o]=[o,r]);const l=i*.56,c=i*1.26,f=i*.815,h=i*.37;if(n.save(),n.translate(t,e),a==="tilt"&&n.rotate(-.07),n.strokeStyle=r,n.lineWidth=h,n.lineCap="butt",a==="solid")n.fillStyle=r,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill();else if(a==="gap")for(const[p,m]of[[-Math.PI*.86,-Math.PI*.2],[-Math.PI*.08,Math.PI*1.02]])n.beginPath(),n.arc(0,0,f,p,m),n.stroke();else n.beginPath(),n.arc(0,0,f,0,Math.PI*2),n.stroke();if(a==="double"&&(n.lineWidth=h*.32,n.beginPath(),n.arc(0,0,f*.5,0,Math.PI*2),n.stroke()),s.frame){n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.03);for(const p of[i,i*.63])n.beginPath(),n.arc(0,0,p,0,Math.PI*2),n.stroke()}const u=a==="low"?i*.22:0;if(n.fillStyle=o,n.fillRect(-c,u-l/2,c*2,l),s.frame&&(n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.035),n.strokeRect(-c,u-l/2,c*2,l)),s.name){const p=String(s.name).toUpperCase();n.fillStyle=s.text||Ms.text,n.textAlign="center",n.textBaseline="middle";const m=l*.78;try{n.letterSpacing=`${(m*.05).toFixed(1)}px`}catch{}xe(n,p,c*2-l*.5,m,re),a==="mirror"&&n.scale(-1,1),n.fillText(p,0,u+l*.05);try{n.letterSpacing="0px"}catch{}}n.restore()}function Eo(n,t,e,i,s={}){n.fillStyle=Ms.panel,n.fillRect(0,0,t,e);const r=Math.max(2,Math.min(t,e)*.035);n.strokeStyle="#6d7275",n.lineWidth=r,n.strokeRect(r/2,r/2,t-r,e-r);const o=Math.min(t*.9/2.52,e*.38);wr(n,t/2,e/2,o,{name:i,...s})}const zh=["tilt","double","solid","swap","gap","low","mirror"],un=n=>document.getElementById(n);function Y0(n,t){if(!n)return;const e=vn(360,200);wr(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function cy(){const n=un("title"),t=un("pause"),e=un("end"),i=un("touch"),s=un("fade"),r=(a,l)=>a.classList.toggle("hidden",!l);return{drawMarks(){Y0(un("title-mark"),"Mind the Gap"),Y0(un("end-mark"),"Way out")},showTitle(){r(n,!0),r(t,!1),r(e,!1),r(i,!1)},showPlaying(a){r(n,!1),r(t,!1),r(e,!1),r(i,!!a),s.classList.remove("on")},showPause(){r(t,!0),r(i,!1)},whiteOut(){s.classList.remove("black"),s.classList.add("on")},showEnd(a){const l=un("end-stats");l.replaceChildren();for(const[c,f]of a){const h=document.createElement("dt");h.textContent=c;const u=document.createElement("dd");u.textContent=f,l.append(h,u)}r(e,!0),r(i,!1),r(t,!1),setTimeout(()=>s.classList.remove("on"),400)},onStart(a){un("btn-start").addEventListener("click",a)},onResume(a){un("btn-resume").addEventListener("click",a)},onAgain(a){un("btn-again").addEventListener("click",a)},onVoice(a){const l=un("opt-voice");l.addEventListener("change",()=>a(l.checked))},onHQ(a){const l=un("opt-hq");l.addEventListener("change",()=>a(l.checked))},setLoading(a){const l=un("btn-start");l.disabled=!!a,l.textContent=a?"Loading…":"Press to begin"}}}const fy=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,uy=`
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
}`;function hy(n,t){const e=new fi({vertexShader:fy,fragmentShader:uy,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new le(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new Ui;i.setAttribute("position",new en(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new en(new Float32Array([0,0,2,0,0,2]),2));const s=new On(i,e);s.frustumCulled=!1;const r=new Nh;r.add(s);const o=new Ch(-1,1,1,-1,0,1);return{scene:r,camera:o,uniforms:e.uniforms,material:e}}class dy{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new z_({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=Ls,this.gl.autoClear=!0,this.gl.setClearColor(new ae().setRGB(...se.fogColor),1),this.target=new Qi(64,64,{minFilter:We,magFilter:We,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=Tn,this.dv=hy(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,s=this.mobile?1280:2200;let r=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);r=Math.min(r,s/Math.max(t,e)),this.gl.setPixelRatio(r),this.gl.setSize(t,e,!1);let o=this.mobile?se.internalHMobile:se.internalH;this.hq&&(o=Math.round(o*1.45));let a,l;i>=1?(l=o,a=Math.round(o*Math.min(i,2.4))):(a=Math.round(o*.8),l=Math.round(a/Math.max(i,.42))),this.target.setSize(a,l),this.dv.uniforms.uInRes.value.set(a,l),this.overlay.resize(a,l),this.width=t,this.height=e,this.aspect=i,this.iw=a,this.ih=l}render(t,e,i){const s=this.gl;this.dv.uniforms.uTime.value=i%1e3,s.setRenderTarget(this.target),s.render(t,e),this.drawCalls=s.info.render.calls,this.triangles=s.info.render.triangles,s.setRenderTarget(null),s.render(this.dv.scene,this.dv.camera)}}const kr=n=>String(n).padStart(2,"0");class py{constructor(){this.canvas=vn(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new Ha(this.canvas),this.texture.colorSpace=Tn,this.texture.generateMipmaps=!1,this.texture.minFilter=We,this.texture.magFilter=We,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,s,r="left",o="#fff"){const a=this.ctx;a.font=`400 ${s}px ${Ji}`,a.textAlign=r,a.textBaseline="alphabetic",a.lineWidth=Math.max(2,s*.16),a.strokeStyle="rgba(0,0,0,0.85)",a.lineJoin="round",a.strokeText(t,e,i),a.fillStyle=o,a.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,s=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(s===this.sig)return;this.sig=s;const r=this.ctx,o=this.canvas.width,a=this.canvas.height;r.clearRect(0,0,o,a);const l=a>o,c=Math.min(o,a)/(l?300:400),f=18*c,h=22*c;if(t.live){i&&(r.fillStyle="#ff2a1a",r.beginPath(),r.arc(f+h*2.05,f+h*.42,h*.3,0,7),r.fill()),this.text("REC",f,f+h*.75,h,"left","#fff");const m=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${m}:${kr(_)}:${kr(d)}`,f,f+h*1.75,h*.9);const g=o-f-h*1.9,S=f+h*.12;r.strokeStyle="#fff",r.lineWidth=Math.max(2,c*2),r.strokeRect(g,S,h*1.7,h*.66),r.fillStyle="#fff",r.fillRect(g+h*1.7,S+h*.2,h*.14,h*.26);const y=Math.max(1,3-Math.floor(e/600));for(let E=0;E<y;E++)r.fillRect(g+h*.12+E*h*.52,S+h*.12,h*.4,h*.42);this.text("SP",g-h*.5,f+h*.75,h,"right");const b=t.date,A=b.getHours()%12||12,M=b.getHours()<12?"AM":"PM",T=this.mobile?f+h*2.75:a-f;this.text(`${ly[b.getMonth()]} ${kr(b.getDate())} ${b.getFullYear()}`,o-f,T-h*1.05,h,"right"),this.text(`${A}:${kr(b.getMinutes())}:${kr(b.getSeconds())} ${M}`,o-f,T,h,"right"),r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=Math.max(1.5,c*1.5);const w=o/2,v=a/2,x=7*c;if(r.beginPath(),r.moveTo(w-x,v),r.lineTo(w-x*.35,v),r.moveTo(w+x*.35,v),r.lineTo(w+x,v),r.moveTo(w,v-x),r.lineTo(w,v-x*.35),r.moveTo(w,v+x*.35),r.lineTo(w,v+x),r.stroke(),t.zoom>.05){const E=f,P=this.mobile?f+h*3:a-f-h*.3,L=h*4;this.text("W",E,P,h*.8),this.text("T",E+L+h*.9,P,h*.8),r.strokeStyle="#fff",r.strokeRect(E+h*.6,P-h*.45,L,h*.36),r.fillStyle="#fff",r.fillRect(E+h*.6,P-h*.45,L*t.zoom,h*.36)}}const u=(l?21:24)*c;let p=a-f-h*(l?2.6:2.3);if(this.mobile&&(p=a*(l?.74:.86)),t.reading){const m=t.reading.text.length>170;let _=m?u*.74:u,d;for(let A=0;A<6&&(r.font=`400 ${_}px ${Ji}`,d=zn(r,t.reading.text,o*(m?.9:.8)),!((d.length+1.6)*_*1.02<a*(l?.42:.46)));A++)_*=.9;const g=(d.length+(t.reading.title?1.3:.3))*_*1.02+_*.5,S=m?p-g+(this.mobile?0:h*1.1):Math.min(p-g,a*.62),y=m?o*.03:o*.07;r.fillStyle=`rgba(0,0,0,${m?.72:.62})`,r.fillRect(y,S,o-y*2,g);let b=S+_*1;t.reading.title&&(this.text(t.reading.title,o/2,b,_*.82,"center","#ffd329"),b+=_*1.1);for(const A of d)this.text(A,m?y+_*.6:o/2,b,_,m?"left":"center"),b+=_*1.02;p=S-u*.4}else t.prompt&&this.text(t.prompt,o/2,a*.5+34*c,u*.9,"center","#ffd329");if(t.caption){const m=t.caption.length>110?u*(l?.78:.88):u;r.font=`400 ${m}px ${Ji}`;const _=zn(r,t.caption,o*(l?.9:.84));let d=p-(_.length-1)*m*1.02;t.captionTag&&this.text(t.captionTag,o/2,d-m*1.08,u*.8,"center","#9fd8ff");for(const g of _)this.text(g,o/2,d,m,"center"),d+=m*1.02}t.hint&&this.text(t.hint,o/2,f+h*3.2,u*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const my=`
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
}`,gy=`
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
}`,Xr={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new ae().setRGB(...se.fogColor)},uFogDensity:{value:se.fogDensity}};function Bh(n,t,e=!1,i=null){const s={};return e&&(s.CUTOUT=1),i&&(s.CLIP=1),new fi({defines:s,vertexShader:my,fragmentShader:gy,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:Xr.uPower,uCam:Xr.uCam,uFogColor:Xr.uFogColor,uFogDensity:Xr.uFogDensity,...i?{uClip:i}:{}},side:Pi})}const Z0=[1,1,1],Vi=new Q,ta=new Q,j0=new Wt;function mf(n,t,e){const i=Math.cos(e.yaw),s=Math.sin(e.yaw);for(let r=0;r<t.length;r+=3){const o=t[r],a=t[r+1],l=t[r+2];n[r]=e.x+o*i+l*s,n[r+1]=e.y+a,n[r+2]=e.z-o*s+l*i}}class Hh{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&(j0.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new Re().makeScale(-1,1,1):null)}place(t,e,i,s=0){const r=new Re().makeRotationY(s);return r.setPosition(t,e,i),this.setXf(r)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}count(t){return this._layer(t).n}_vert(t,e,i,s,r,o){this.m?(Vi.set(e[0],e[1],e[2]).applyMatrix4(this.m),ta.set(i[0],i[1],i[2]).applyMatrix3(j0),t.pos.push(Vi.x,Vi.y,Vi.z),t.nrm.push(ta.x,ta.y,ta.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(s,r);const a=o&&o.tint||Z0;return t.tint.push(a[0],a[1],a[2]),t.emit.push(o&&o.emit!==void 0?o.emit+(o.flick?1e3:0):-1),t.n++}quad(t,e,i,s,r,o,a,l){return this.quadN(t,e,i,s,r,o,o,o,o,o,a,l)}quadN(t,e,i,s,r,o,a,l,c,f,h,u){const p=this._layer(t),m=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],g=s[0]-e[0],S=s[1]-e[1],y=s[2]-e[2],b=_*y-d*S,A=d*g-m*y,M=m*S-_*g,T=b*o[0]+A*o[1]+M*o[2]>=0!=!!this.flip,w=this._vert(p,e,a,h[0],h[1],u),v=this._vert(p,i,l,h[2],h[1],u),x=this._vert(p,s,c,h[2],h[3],u),E=this._vert(p,r,f,h[0],h[3],u);T?p.idx.push(w,v,x,w,x,E):p.idx.push(w,x,v,w,E,x)}quadUV(t,e,i,s,r,o,a,l,c,f,h){const u=this._layer(t),p=i[0]-e[0],m=i[1]-e[1],_=i[2]-e[2],d=s[0]-e[0],g=s[1]-e[1],S=s[2]-e[2],y=(m*S-_*g)*o[0]+(_*d-p*S)*o[1]+(p*g-m*d)*o[2]>=0!=!!this.flip,b=this._vert(u,e,o,a[0],a[1],h),A=this._vert(u,i,o,l[0],l[1],h),M=this._vert(u,s,o,c[0],c[1],h),T=this._vert(u,r,o,f[0],f[1],h);y?u.idx.push(b,A,M,b,M,T):u.idx.push(b,M,A,b,T,M)}tri(t,e,i,s,r,o,a,l,c){const f=this._layer(t),h=i[0]-e[0],u=i[1]-e[1],p=i[2]-e[2],m=s[0]-e[0],_=s[1]-e[1],d=s[2]-e[2],g=(u*d-p*_)*r[0]+(p*m-h*d)*r[1]+(h*_-u*m)*r[2]>=0!=!!this.flip,S=this._vert(f,e,r,o[0],o[1],c),y=this._vert(f,i,r,a[0],a[1],c),b=this._vert(f,s,r,l[0],l[1],c);g?f.idx.push(S,y,b):f.idx.push(S,b,y)}grid(t,e,i,s,r,o,a,l,c,f=!1){for(let h=0;h<r;h++)for(let u=0;u<o;u++){const p=(y,b)=>[e[0]+i[0]*y+s[0]*b,e[1]+i[1]*y+s[1]*b,e[2]+i[2]*y+s[2]*b],m=h/r,_=(h+1)/r,d=u/o,g=(u+1)/o,S=f?l:[l[0]+(l[2]-l[0])*m,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*g];this.quad(t,p(m,d),p(_,d),p(_,g),p(m,g),a,S,c)}}box(t,e,i,s,r,o,a,l,c,f="xXyYzZ"){const h=(u,p,m,_,d)=>this.quad(t,u,p,m,_,d,l,c);f.includes("x")&&h([e,i,a],[e,i,s],[e,o,s],[e,o,a],[-1,0,0]),f.includes("X")&&h([r,i,s],[r,i,a],[r,o,a],[r,o,s],[1,0,0]),f.includes("y")&&h([e,i,s],[r,i,s],[r,i,a],[e,i,a],[0,-1,0]),f.includes("Y")&&h([e,o,s],[r,o,s],[r,o,a],[e,o,a],[0,1,0]),f.includes("z")&&h([r,i,s],[e,i,s],[e,o,s],[r,o,s],[0,0,-1]),f.includes("Z")&&h([e,i,a],[r,i,a],[r,o,a],[e,o,a],[0,0,1])}addLight(t,e,i,s=1,r=7,o=!1,a=Z0){this.m&&(Vi.set(t,e,i).applyMatrix4(this.m),t=Vi.x,e=Vi.y,i=Vi.z),this.lights.push({x:t,y:e,z:i,i:s,r2:r*r,flicker:o,color:a})}addPortal(t,e,i,s){this.portals.push({x:t,y:e,z:i,dx:Math.sin(s),dz:Math.cos(s)})}_lightAt(t,e,i,s,r,o,a){const l=a.x-t,c=a.y-e,f=a.z-i,h=l*l+c*c+f*f;if(h>=a.r2)return 0;const u=(1-h/a.r2)**2,p=1/Math.sqrt(h+1e-6),m=Math.max(0,(s*l+r*c+o*f)*p);return a.i*u*(.38+.62*m)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(r=>({x:r.x,y:r.y+2.3,z:r.z,i:.85,r2:36})),s={};for(const r of Object.keys(this.layers)){const o=this.layers[r],a=new Uint8Array(o.n*4);for(let f=0;f<o.n;f++){const h=o.tint[f*3],u=o.tint[f*3+1],p=o.tint[f*3+2];let m,_,d,g=0;const S=o.emit[f];if(S>=0){const y=S>=1e3,b=y?S-1e3:S,A=y?.1:1;m=h*b*A,_=u*b*A,d=p*b*A,g=y?b*.9:0}else{const y=o.pos[f*3],b=o.pos[f*3+1],A=o.pos[f*3+2],M=o.nrm[f*3],T=o.nrm[f*3+1],w=o.nrm[f*3+2];let v=1;for(const x of this.portals){const E=Math.abs((y-x.x)*x.dx+(A-x.z)*x.dz),P=Math.abs((y-x.x)*x.dz-(A-x.z)*x.dx),L=Math.hypot(P,Math.max(0,b-x.y-2.2));P<4&&Math.abs(b-x.y)<5&&(v=Math.min(v,Math.max(zc(.1,2.4,E),zc(1.7,2.9,L))))}m=t[0],_=t[1],d=t[2];for(const x of this.lights){const E=this._lightAt(y,b,A,M,T,w,x)*v;E<=0||(x.flicker?g+=E:(m+=E*x.color[0],_+=E*x.color[1],d+=E*x.color[2]))}for(const x of i){const E=this._lightAt(y,b,A,M,T,w,x);m+=E,_+=E*.98,d+=E*.93}m*=h,_*=u,d*=p,g*=(h+u+p)/3}a[f*4]=Math.min(255,m*127.5),a[f*4+1]=Math.min(255,_*127.5),a[f*4+2]=Math.min(255,d*127.5),a[f*4+3]=Math.min(255,g*127.5)}const l=new Ui,c=new Float32Array(o.pos);e&&mf(c,o.pos,e),l.userData.local=o.pos,l.setAttribute("position",new en(c,3)),l.setAttribute("uv",new en(new Float32Array(o.uv),2)),l.setAttribute("aLight",new en(a,4,!0)),l.setIndex(new en(o.n>65535?new Uint32Array(o.idx):new Uint16Array(o.idx),1)),l.computeBoundingSphere(),s[r]=l}return s}}function Al(n,t,e){const i=Math.cos(e),s=Math.sin(e);let r=1/0,o=-1/0,a=1/0,l=-1/0;for(const[c,f]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const h=t.x+c*i+f*s,u=t.z-c*s+f*i;r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,u),l=Math.max(l,u)}return[r,t.y+n[1],a,o,t.y+n[4],l]}function Bc(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}function _y(n,t,e,i,s){const r=[...n.values()].find(l=>l!==t&&Bc(i,l.box)),o=e.env.stretch,a=r&&r.env.stretch;return{type:e.def.type,after:t.def.type,yaw:+s.toFixed(2),hit:r?r.def.type:"?",rel:r?a===o?"same stretch":"other stretch":"?",box:i.map(l=>+l.toFixed(1)),hitBox:r?r.box.map(l=>+l.toFixed(1)):null,sister:!!(o&&a&&o.fromJunction&&o.fromJunction===a.fromJunction)}}let yy=1;const vy=new Set(["sheet","cut","gate","figure"]);class xy{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0,forced:[]}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const s=new _e(i),r=t.plan(s,e),o=this._make(t,r,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=o,this.refresh(!0),o}_make(t,e,i,s,r,o,a,l){const c={id:yy++,def:t,p:e.p,env:i,seed:l,pos:s,yaw:r,parent:o,exitIndex:a,exits:e.exits.map(f=>({...f,child:null})),box:Al(e.box,s,r),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((f,h)=>Math.max(f,Math.hypot(h.x,h.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],s=Math.cos(t.yaw),r=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*s+i.z*r,y:t.pos.y+i.y,z:t.pos.z-i.x*r+i.z*s},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&Bc(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:s,yaw:r}=this.exitPose(t,e);let o=null;for(let a=0;a<14;a++){const l=$e(t.seed,e*31+a*977+1),c=new _e(l),f=this.hooks.choose(t,e,a,c);if(!f)break;const h=f.def.plan(c,f.env);o||(o={pick:f,plan:h,seed:l});const u=Al(h.box,s,r);if(!(!f.force&&!this._fits(u,t)))return i.child=this._make(f.def,h,f.env,s,r,t,e,l),i.child}return this.stats.deadEnds++,o&&this.stats.forced.length<60&&this.stats.forced.push(_y(this.nodes,t,o.pick,Al(o.plan.box,s,r),r)),o?(i.child=this._make(o.pick.def,o.plan,o.pick.env,s,r,t,e,o.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=se.ahead,i=se.sight||46,s=7;for(const a of this.nodes.values())a.dist=1/0,a.path=1/0;const r=[this.current];this.current.dist=0,this.current.path=0;const o=a=>a.dist<=e||a.path<=i&&a.dist<=s;for(;r.length;){const a=r.shift();if(a.dist<e||a.path<i&&a.dist<s)for(let l=0;l<a.exits.length;l++)this.expand(a,l);for(const l of this.neighbours(a))l.dist>a.dist+1&&(l.dist=a.dist+1,l.path=a===this.current?0:a.path+(a.span||8),r.push(l))}for(const a of this.nodes.values())o(a)&&!a.built&&!this.buildQueue.includes(a)?this.buildQueue.push(a):a.built&&a.dist>e+1&&a.path>i+10&&this.unbuild(a);if(this.buildQueue.sort((a,l)=>a.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift());this.cull()}cull(){const t=[...this.nodes.values()].filter(i=>i.built).sort((i,s)=>i.dist-s.dist),e=[];for(const i of t){const s=o=>o.parent===i||i.parent===o,r=i.dist>1&&e.some(o=>!s(o)&&Bc(i.box,o.box,.4));i.built.group.visible=!r,i.hiddenByFold=r,r||e.push(i)}}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),this.cull(),!0}return!1}build(t){if(t.built)return;const e=new Hh,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,s={b:e,p:t.p,rng:new _e($e(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},r=t.def.build(s)||{},o=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),a=new $r;a.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(o)){const f=c==="sheet"||c.startsWith("sheet:"),h=f?l:this.hooks.textures(c,t),u=new On(o[c],Bh(h,t.flick,f||vy.has(c)));u.matrixAutoUpdate=!1,u.name=c,c==="gate"&&(u.visible=!!t.gateShut),c==="figure"&&(u.visible=!t.figureGone),t.def.layerVisible&&(u.visible=t.def.layerVisible(c,t)!==!1&&u.visible),a.add(u)}this.scene.add(a),a.updateMatrixWorld(!0),t.built={group:a,sheetTex:l,sheetOverflow:i?i.overflow:0,cells:r.cells||[],walls:r.walls||[],items:r.items||[],frames:r.frames||null,extra:r.extra||null,gate:a.children.find(c=>c.name==="gate")||null,figure:a.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const s of e.children)s.geometry.dispose(),s.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const s of this.nodes.values())if(s.pos.x-=t,s.pos.y-=e,s.pos.z-=i,s.box[0]-=t,s.box[3]-=t,s.box[1]-=e,s.box[4]-=e,s.box[2]-=i,s.box[5]-=i,!!s.built)for(const r of s.built.group.children){const o=r.geometry.attributes.position;mf(o.array,r.geometry.userData.local,{x:s.pos.x,y:s.pos.y,z:s.pos.z,yaw:s.yaw}),o.needsUpdate=!0,r.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const s=i.pop();if(this.nodes.has(s.id)){this.unbuild(s),this.nodes.delete(s.id);for(const r of this.neighbours(s))r!==e&&this.nodes.has(r.id)&&i.push(r)}}}}function Ts(n,t,e){const i=t-n.pos.x,s=e-n.pos.z,r=Math.cos(n.yaw),o=Math.sin(n.yaw);return[i*r-s*o,i*o+s*r]}function $i(n,t,e,i){const s=Math.cos(n.yaw),r=Math.sin(n.yaw);return[n.pos.x+t*s+i*r,n.pos.y+e,n.pos.z-t*r+i*s]}function Ta(n,t,e,i,s=.02){if(!n.built)return null;const[r,o]=Ts(n,t,e);let a=null,l=1.6;for(const c of n.built.cells){const f=c.bx-c.ax,h=c.bz-c.az,u=f*f+h*h,p=((r-c.ax)*f+(o-c.az)*h)/u;if(p<-s||p>1+s||Math.abs((r-c.ax)*h-(o-c.az)*f)/Math.sqrt(u)>c.hw+s)continue;const _=p<0?0:p>1?1:p,d=n.pos.y+c.ya+(c.yb-c.ya)*_,g=Math.abs(d-i);g<l&&(l=g,a={y:d,cell:c,t:_})}return a}function ea(n,t,e,i){const s=n.current;let r=Ta(s,t,e,i);if(r)return{node:s,y:r.y,cell:r.cell,t:r.t};for(const o of n.neighbours(s))if(r=Ta(o,t,e,i),r)return{node:o,y:r.y,cell:r.cell,t:r.t};for(const o of n.neighbours(s))for(const a of n.neighbours(o))if(a!==s&&(r=Ta(a,t,e,i),r))return{node:a,y:r.y,cell:r.cell,t:r.t};return null}function Sy(n,t,e){if(!n.built)return!1;let[i,s]=Ts(n,t.x,t.z),r=!1;const o=t.y-n.pos.y;for(const a of n.built.walls){if(a.length>4&&(o<a[4]||o>a[5]))continue;const l=a[2]-a[0],c=a[3]-a[1],f=l*l+c*c;let h=f>0?((i-a[0])*l+(s-a[1])*c)/f:0;h=h<0?0:h>1?1:h;const u=a[0]+l*h,p=a[1]+c*h,m=i-u,_=s-p,d=m*m+_*_;if(d<e*e&&d>1e-9){const g=Math.sqrt(d),S=(e-g)/g;i+=m*S,s+=_*S,r=!0}}if(r){const a=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*a+s*l,t.z=n.pos.z-i*l+s*a}return r}function Rl(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let s=0;s<2;s++){let r=!1;for(const o of i)r=Sy(o,t,e)||r;if(!r)break}}function by(n,t,e,i,s){const r=t.x,o=t.z;t.x+=e,t.z+=i,Rl(n,t,s);let a=ea(n,t.x,t.z,t.y);return!a&&(t.x=r+e,t.z=o,Rl(n,t,s),a=ea(n,t.x,t.z,t.y),a||(t.x=r,t.z=o+i,Rl(n,t,s),a=ea(n,t.x,t.z,t.y)),!a)?(t.x=r,t.z=o,ea(n,r,o,t.y)):a}class My{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=se.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null,this.windX=0,this.windZ=0,this.shake=0}spawn(t,e,i,s){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=s+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+se.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=qe(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let s=e.mx,r=e.mz;const o=Math.hypot(s,r);o>1&&(s/=o,r/=o);const a=e.run&&r>.3,l=(a?se.run:se.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),f=Math.cos(this.yaw),h=(-c*r+f*s)*l,u=(-f*r-c*s)*l,p=o>.01?9:12;this.vx=xs(this.vx,h,p,t),this.vz=xs(this.vz,u,p,t);const m=this.pos.x,_=this.pos.z,d=by(i,this.pos,(this.vx+this.windX)*t,(this.vz+this.windZ)*t,se.radius);let g=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const S=Math.hypot(this.pos.x-m,this.pos.z-_);this.speed=S/Math.max(t,1e-4),this.walked+=S;const y=a?1.05:.74,b=Math.floor(this.stepDist/y);this.stepDist+=Math.min(S,Math.hypot(this.vx,this.vz)*t),Math.floor(this.stepDist/y)!==b&&(g=!0),this.zoom=xs(this.zoom,this.zoomTarget,7,t);const A=this.pos.y+se.eye;this.eyeY=xs(this.eyeY,A,16,t);const M=this.stepDist/y*Math.PI,T=qe(this.speed/se.walk,0,1.6),w=-Math.abs(Math.sin(M))*.035*T,v=Math.sin(M)*.018*T,x=this.t,E=Oe(x*.55,11)*.011+Oe(x*2.3,12)*.003,P=Oe(x*.47,21)*.012+Oe(x*2.7,22)*.003,L=this.shake||0,D=Oe(x*.4,31)*.01+Math.sin(M)*.006*T+Oe(x*23,43)*.012*L,k=this.camera;k.position.set(this.pos.x+f*v,this.eyeY+w,this.pos.z-c*v),k.rotation.set(this.pitch+E*(1-.6*this.zoom)+Oe(x*29,41)*.009*L,this.yaw+P*(1-.6*this.zoom)+Oe(x*31,42)*.007*L,D);const N=se.fov-(k.aspect<1?20:36)*this.zoom;return Math.abs(k.fov-N)>.01&&(k.fov=N,k.updateProjectionMatrix()),{step:g,running:a}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function Ty(n,t,e){const i=new Set,s=()=>{const a=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=a,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",a=>{a.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(a.code)&&a.preventDefault(),i.add(a.code),s(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!0),(a.code==="KeyP"||a.code==="Escape"&&!r())&&e.pause())}),window.addEventListener("keyup",a=>{i.delete(a.code),s(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),s()});function r(){return document.pointerLockElement===t}const o=()=>{if(!(r()||!t.requestPointerLock))try{const a=t.requestPointerLock();a&&a.catch&&a.catch(()=>{})}catch{}};return document.addEventListener("mousemove",a=>{if(!r())return;const l=.0022;Math.abs(a.movementX)>400||Math.abs(a.movementY)>400||(n.lookX+=a.movementX*l,n.lookY+=a.movementY*l)}),t.addEventListener("mousedown",a=>{if(!r()){o();return}a.button===0&&e.use(!0)}),window.addEventListener("mouseup",a=>{a.button===0&&r()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(r())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:o,locked:r,release:()=>{r()&&document.exitPointerLock()}}}function Ey(n,t){const e=T=>document.getElementById(T),i=e("stick-zone"),s=e("look-zone"),r=e("stick-base"),o=e("stick-knob"),a=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!s)return{reset(){}};const f=52;let h=null,u=0,p=0,m=null,_=0,d=0,g=!1;const S=(T,w)=>{o.style.transform=`translate(${T}px, ${w}px)`},y=()=>{h=null,n.tmx=0,n.tmz=0,n.trun=g,S(0,0),r.style.left="",r.style.top="",r.style.bottom=""};i.addEventListener("pointerdown",T=>{if(h!==null)return;h=T.pointerId,u=T.clientX,p=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}const w=r.offsetWidth,v=r.offsetHeight;r.style.left=`${u-w/2}px`,r.style.top=`${p-v/2}px`,r.style.bottom="auto",T.preventDefault()}),i.addEventListener("pointermove",T=>{if(T.pointerId!==h)return;let w=T.clientX-u,v=T.clientY-p;const x=Math.hypot(w,v);x>f&&(w*=f/x,v*=f/x),S(w,v);const E=.12,P=w/f,L=v/f;n.tmx=Math.abs(P)<E?0:P,n.tmz=Math.abs(L)<E?0:-L,n.trun=g||x>f*1.35,T.preventDefault()});const b=T=>{T.pointerId===h&&y()};i.addEventListener("pointerup",b),i.addEventListener("pointercancel",b),s.addEventListener("pointerdown",T=>{if(m===null){m=T.pointerId,_=T.clientX,d=T.clientY;try{s.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),s.addEventListener("pointermove",T=>{if(T.pointerId!==m)return;const w=.0052;n.lookX+=(T.clientX-_)*w,n.lookY+=(T.clientY-d)*w,_=T.clientX,d=T.clientY,T.preventDefault()});const A=T=>{T.pointerId===m&&(m=null)};s.addEventListener("pointerup",A),s.addEventListener("pointercancel",A),((T,w,v)=>{T.addEventListener("pointerdown",E=>{E.preventDefault(),E.stopPropagation(),T.classList.add("on"),w()});const x=E=>{E.preventDefault(),T.classList.remove("on"),v&&v()};T.addEventListener("pointerup",x),T.addEventListener("pointercancel",x)})(a,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),g=!g,n.trun=g,l.classList.toggle("on",g)}),c.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()});for(const T of["touchstart","touchmove","gesturestart"])document.addEventListener(T,w=>{w.target.closest&&w.target.closest("#touch")&&w.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",T=>T.preventDefault()),{reset:()=>{y(),m=null}}}function gf(n=se.passW,t=se.passSpring,e=se.passCrown,i=5,s=2){const r=[],o=n/2,a=e-t;for(let f=0;f<=s;f++)r.push({x:-o,y:t*f/s,nx:1,ny:0});for(let f=1;f<=i;f++){const h=Math.PI/2*(f/i),u=-o*Math.cos(h),p=t+a*Math.sin(h);let m=-u/(o*o),_=-(p-t)/(a*a);const d=Math.hypot(m,_)||1;r.push({x:u,y:p,nx:m/d,ny:_/d})}let l=0;r[0].s=0;for(let f=1;f<r.length;f++)l+=Math.hypot(r[f].x-r[f-1].x,r[f].y-r[f-1].y),r[f].s=l;const c=r.map(f=>({...f,v:f.s/l}));for(let f=r.length-2;f>=0;f--){const h=r[f];c.push({x:-h.x,y:h.y,nx:-h.nx,ny:h.ny,s:h.s,v:h.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const wt=gf();function wy(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),s=[];for(let r=0;r<=i;r++){const o=n*r/i;s.push({x:0,y:e?e(o):0,z:o,yaw:0})}return s}function Ay(n,t,e=1){const i=Math.sign(t)||1,s=Math.abs(t),r=Math.max(2,Math.round(n*s/e)),o=[];for(let a=0;a<=r;a++){const l=s*a/r;o.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return o}function we(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function na(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function yn(n,t,e,i={}){const s=i.layer||"tile",r=i.uPeriod||6,[o,a]=i.vRange||[.004,.996],l=[i.u0||0];for(let u=1;u<t.length;u++){const p=t[u-1],m=t[u];l.push(l[u-1]+Math.hypot(m.x-p.x,m.z-p.z))}const c=[],f=[],h=e.W/2;for(let u=0;u<t.length-1;u++){const p=t[u],m=t[u+1],_=l[u]/r,d=l[u+1]/r;for(let g=0;g<e.length-1;g++){const S=e[g],y=e[g+1],b=na(p,S.nx,S.ny),A=na(m,S.nx,S.ny),M=na(m,y.nx,y.ny),T=na(p,y.nx,y.ny),w=[(b[0]+M[0])/2,(b[1]+M[1])/2,(b[2]+M[2])/2];n.quadN(s,we(p,S.x,S.y),we(m,S.x,S.y),we(m,y.x,y.y),we(p,y.x,y.y),w,b,A,M,T,[_,o+(a-o)*S.v,d,o+(a-o)*y.v],i.wallOpts)}if(i.floor){const g=Math.max(1,Math.round(e.W));for(let S=0;S<g;S++){const y=-h+e.W*S/g,b=-h+e.W*(S+1)/g;n.quad("atlas",we(p,y,0),we(p,b,0),we(m,b,0),we(m,y,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:p.x,az:p.z,bx:m.x,bz:m.z,hw:h,ya:p.y,yb:m.y});for(const g of[-1,1]){const S=we(p,g*h,0),y=we(m,g*h,0);f.push([S[0],S[2],y[0],y[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:f,dist:l}}function _f(n,t=.25){const e=n[0],i=n[n.length-1],s=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return s.W=n.W,s.crown=n.crown,s.spring=n.spring,s.len=n.len,s}function wo(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function xr(n,t,e,i,s,r,o,a){const l=[Math.sin(t.yaw)*s,0,Math.cos(t.yaw)*s],c=o||((m,_)=>[m/6,.004+_/3.63*.992]),f=m=>we(t,m.x,m.y),h=m=>c(m.x,m.y),u=e.length,p=(m,_,d,g)=>n.quadUV(r,f(m),f(_),f(d),f(g),l,h(m),h(_),h(d),h(g),a);if(i)for(let m=0;m<u-1;m++)p(e[m],e[m+1],i[m+1],i[m]);else for(let m=0;m<Math.floor((u-1)/2);m++)p(e[m],e[m+1],e[u-2-m],e[u-1-m])}function Fe(n,t,e,i,s,r=.12,o=.08){for(let a=0;a<s;a++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,r)})`:`rgba(255,255,255,${i.range(.02,o)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const de=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Ry={floor(n,t,e,i){de(n,t,e,"#77746b");const s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(o*r+1,a*r+1,r-2,r-2)}Fe(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){de(n,t,e,"#3d3c39");const s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(o*r+1,a*r+1,r-2,r-2)}Fe(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){de(n,t,e,"#a9a493"),Fe(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){de(n,t,e,"#c9a94a"),Fe(n,t,e,i,500,.12,.06);const s=6,r=t/s;for(let o=0;o<s;o++)for(let a=-1;a<s;a++){const l=(a+.5+(o%2?.5:0))*r,c=(o+.5)*r;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,r*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,r*.25,0,7),n.fill()}},yellow(n,t,e,i){de(n,t,e,"#e2b81e"),Fe(n,t,e,i,700,.22,.05)},white(n,t,e){de(n,t,e,"#ffffff")},black(n,t,e){de(n,t,e,"#0b0b0b")},blackout(n,t,e){de(n,t,e,"#000000")},navy(n,t,e,i){de(n,t,e,"#14213d"),Fe(n,t,e,i,200,.1,.04)},cream(n,t,e,i){de(n,t,e,"#e6dfc6"),Fe(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){de(n,t,e,"#2a2c2e"),Fe(n,t,e,i,200,.1,.05)},metal(n,t,e,i){de(n,t,e,"#9aa0a3");for(let s=0;s<e;s++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,s,t,1)},steelDark(n,t,e,i){de(n,t,e,"#3b3f42");for(let s=0;s<e;s++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,s,t,1)},wood(n,t,e,i){de(n,t,e,"#6b4526");for(let s=0;s<90;s++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let s=1;s<4;s++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,s*e/4-1,t,2)},rubber(n,t,e,i){de(n,t,e,"#161616"),Fe(n,t,e,i,200,.2,.08)},tread(n,t,e){de(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){de(n,t,e,"#6f6c64"),Fe(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let s=0;s<t;s+=8)n.fillRect(s,4,4,8)},riser(n,t,e,i){de(n,t,e,"#4a4843"),Fe(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){de(n,t,e,"#1f1d1a"),Fe(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){de(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),Fe(n,t,e,i,300,.2,.1)},grille(n,t,e){de(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){de(n,t,e,"#3a3936"),Fe(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${re}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),Fe(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){de(n,t,e,"#e3dfd0"),Fe(n,t,e,i,900,.25,.04)},cable(n,t,e,i){de(n,t,e,"#23211e"),Fe(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((r,o)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][o],n.fillRect(0,e*r,t,o%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*r,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){de(n,t,e,"#141311"),Fe(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let s=1;s<4;s++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,s*e/4,t,2)},lamp(n,t,e){de(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){de(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let s=20+i/8%2*4;s<t-16;s+=8)n.fillRect(s,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){de(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){de(n,t,e,"#7d8386"),Fe(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},Cl=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Cy={door(n,t,e,i){Cl(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${Kt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let s=0;s<60;s++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,s=t/i;for(let a=0;a<=i;a++)n.beginPath(),n.moveTo(a*s,0),n.lineTo(a*s,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const r=5,o=e/r;for(let a=0;a<r;a++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*s,a*o),n.lineTo((l+1)*s,(a+1)*o),n.stroke(),n.beginPath(),n.moveTo((l+1)*s,a*o),n.lineTo(l*s,(a+1)*o),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${re}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(s,r,o)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,s,t*.2,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(t/2,s,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${Kt}`,n.fillText(o,t/2,s+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let s=28;s<t-24;s+=8)n.fillRect(s,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let s=0;s<5;s++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,s*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,s*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const s of[.08,.5,.92])n.fillRect(t*s-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${Kt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){Cl(n,t,e,"#1d1a17");const s=6,r=t/s;for(let a=0;a<s;a++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(a*r+2,3,r-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(a*r+2,3,r-4,4)}const o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(10,8,6,0.08)"),o.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=o,n.fillRect(0,0,t,e);for(let a=0;a<260;a++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){Cl(n,t,e,"#6a6f72");for(let s=0;s<e;s+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,s,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,s+9,t,3);for(let s=0;s<120;s++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}};function Py(n,t,e){const i=new _e(320);n.fillStyle="#232427",n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,0.06)";for(let r=e*.3;r<e;r+=5)for(let o=Math.round(r/5)%2*2.5;o<t;o+=5)n.fillRect(o,r,2,2);const s=e*.24;n.fillStyle="#e3bd17",n.fillRect(0,0,t,s),n.fillStyle="rgba(0,0,0,0.22)";for(let r=0;r<t;r+=3)n.fillRect(r,1,1,s-2);for(let r=0;r<26;r++)n.fillStyle=`rgba(30,26,18,${i.range(.15,.5)})`,n.fillRect(i.range(0,t),i.range(0,s),i.range(1,5),i.range(1,3));n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,s,t,1.5)}function Ly(n,t,e){n.fillStyle="#101112",n.fillRect(0,0,t,e),n.strokeStyle="#4d5054",n.lineWidth=1.1;const i=t/7;n.save(),n.beginPath(),n.rect(0,0,t,e),n.clip();for(let r=-e;r<t+e;r+=i)n.beginPath(),n.moveTo(r,0),n.lineTo(r+e*.5,e),n.stroke(),n.beginPath(),n.moveTo(r+e*.5,0),n.lineTo(r,e),n.stroke();n.restore();const s=Math.max(3,t*.09);n.fillStyle="#cfccbf",n.fillRect(0,0,s,e),n.fillRect(t-s,0,s,e),n.fillRect(0,0,t,s*.8),n.fillRect(0,e-s*.8,t,s*.8),n.fillRect(0,e*.5-s*.3,t,s*.6),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(s,0,1,e),n.fillRect(t-s-1,0,1,e),Xe(n,0,0,t,e,99,.8,!0)}function Dy(n,t,e,i,s=!1){n.fillStyle=s?"#e6e0cc":"#f1eee3",n.fillRect(0,0,t,e),n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=1,n.strokeRect(.5,.5,t-1,e-1),n.fillStyle=s?"#1f3fae":"#141414",n.textAlign="center",n.textBaseline="middle",xe(n,i,t*.8,e*.62,s?Ss:re),n.save(),n.translate(t/2,e*.54),s&&n.rotate(-.06),n.fillText(i,0,0),n.restore(),n.fillStyle="rgba(190,170,110,0.75)";for(const[r,o]of[[0,0],[t-t*.22,0],[0,e-e*.1],[t-t*.22,e-e*.1]])n.fillRect(r,o,t*.22,e*.1)}function Iy(n,t,e,i){const s=Math.max(2,t*.035);n.fillStyle="#7b8084",n.fillRect(0,0,t,e),n.fillStyle="#f4f3ec",n.fillRect(s,s,t-2*s,e-2*s),n.fillStyle="#16205e",n.textAlign="left",n.textBaseline="alphabetic";let r=e*.13,o;for(;n.font=`400 ${r}px ${Kt}`,o=i.flatMap((c,f)=>(f?[""]:[]).concat(zn(n,c,t-2*s-t*.12))),!(o.reduce((c,f)=>c+(f?r*1.16:r*.5),0)<e-2*s-e*.1||r<5);)r*=.94;let a=s+e*.06+r;n.strokeStyle="#16205e",n.lineWidth=r*.03;for(const l of o)l?(n.fillText(l,s+t*.06,a),n.strokeText(l,s+t*.06,a),a+=r*1.16):a+=r*.5;Xe(n,s,s,t-2*s,e-2*s,i[0].length*13,.35,!1)}function Uy(n,t,e,i){const s=Math.max(2,t*.035);n.fillStyle="#7b8084",n.fillRect(0,0,t,e),n.fillStyle="#0b8a43",n.fillRect(s,s,t-2*s,e-2*s),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="alphabetic";const r=Math.min((e-2*s)/(i.length*1.25),e*.36);n.font=`700 ${r}px ${Kt}`,i.forEach((o,a)=>n.fillText(o,s+t*.07,s+r*(1.05+a*1.15),t-2*s-t*.12))}const Zi=1024,Pn=128,Gh={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1],cage:[4,6,1,2],treadY:[5,6,1,1]};let Or=null,Pl=null;function Ny(){if(Or)return Or;Or=vn(Zi,Zi);const n=Or.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,Zi,Zi);const t={...Ry,...Cy,cage:Ly,treadY:Py};for(const[e,[i,s,r,o]]of Object.entries(Gh)){const a=t[e];n.save(),n.translate(i*Pn,s*Pn),n.beginPath(),n.rect(0,0,r*Pn,o*Pn),n.clip(),a?a(n,r*Pn,o*Pn,new _e(ur(e))):(n.fillStyle="#f0f",n.fillRect(0,0,r*Pn,o*Pn)),n.restore()}return Or}function ky(){return Pl||(Pl=Ds(Ny())),Pl}function Nt(n,t=3){const e=Gh[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*Pn+t,s=e[1]*Pn+t,r=e[2]*Pn-t*2,o=e[3]*Pn-t*2;return[i/Zi,1-(s+o)/Zi,(i+r)/Zi,1-s/Zi]}function Aa(n,t,e,i,s){const r=Nt(n);return[r[0]+(r[2]-r[0])*t,r[1]+(r[3]-r[1])*e,r[0]+(r[2]-r[0])*i,r[1]+(r[3]-r[1])*s]}function Vt(n){return Aa(n,.4,.4,.6,.6)}const Oy=()=>Nt("lamp"),Fy=()=>Vt("metal");function Ii(n,t,e,i={}){const s=i.len||1.25,r=.14,o=i.x||0,[a,,l]=we(t,o,0);n.place(a,t.y+e,l,t.yaw);const f={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-r/2,-.07,-s/2],[r/2,-.07,-s/2],[r/2,-.07,s/2],[-r/2,-.07,s/2],[0,-1,0],Oy(),f),n.box("atlas",-r/2,-.07,-s/2,r/2,0,s/2,Fy(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(a,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function Vh(n,t,e,i,s={}){const r=e[e.length-1]-e[0],o=Math.max(0,Math.round(r/4.4)-1),a=[];for(let l=1;l<=o;l++){const c=e[0]+r*l/(o+1);let f=0;for(;f<e.length-1&&e[f]<c;)f++;const h=t[f];Ii(n,h,i-.04,{dead:!!s.dark,flick:s.faulty===l-1}),a.push(h)}return a}function Qn(n,t,e){Ii(n,t,e-.04,{noLight:!0}),Ai(n,t,1.56)}function Ai(n,t,e,i="floor"){const[s,,r]=we(t,0,0);n.place(s,t.y,r,t.yaw),n.quad("atlas",[-e,-.003,-.8],[e,-.003,-.8],[e,-.003,.8],[-e,-.003,.8],[0,1,0],Vt(i)),n.setXf(null)}function ts(n,t,e,i,s,r,o,a,l,c,f=.02){const h=i*(s-f),u=[h,r,i>0?-o/2:o/2],p=[h,r,i>0?o/2:-o/2],[m,,_]=we(e,0,0);n.place(m,e.y,_,e.yaw),n.quad(t,u,p,[p[0],r+a,p[2]],[u[0],r+a,u[2]],[-i,0,0],l,c),n.setXf(null);const d=we(e,h,r+a/2);return{x:d[0],y:d[1],z:d[2]}}function zy(n,t,e,i,s,r,o,a="steelDark",l=.035){const c=Vt(a);ts(n,"atlas",t,e,i,s-l,r+2*l,l,c,null,.03),ts(n,"atlas",t,e,i,s+o,r+2*l,l,c,null,.03);const[f,,h]=we(t,0,0);n.place(f,t.y,h,t.yaw);const u=e*(i-.03);for(const p of[-r/2-l,r/2])n.quad("atlas",[u,s,p],[u,s,p+l],[u,s+o,p+l],[u,s+o,p],[-e,0,0],c);n.setXf(null)}function Jr(n,t,e,i,s,r,o,a,l,c=0){const[f,,h]=we(e,c,0);n.place(f,e.y,h,e.yaw),n.quad(t,[s/2,i,-.03],[-s/2,i,-.03],[-s/2,i+r,-.03],[s/2,i+r,-.03],[0,0,-1],o,l),a&&n.quad(t,[-s/2,i,.03],[s/2,i,.03],[s/2,i+r,.03],[-s/2,i+r,.03],[0,0,1],a,l);const u=Vt("signBack");n.box("atlas",-s/2,i,-.03,s/2,i+r,.03,u,null,"xXyY");for(const p of[-s*.35,s*.35])n.box("atlas",p-.012,i+r,-.012,p+.012,i+r+.5,.012,u,null,"xXzZ");return n.setXf(null),{x:f,y:e.y+i+r/2,z:h}}const By=["Ladies and gentlemen, there is a good service on the Northern line.","This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Please stand behind the yellow line, and stand clear of the doors.","Please keep your belongings with you at all times.","Customers are reminded that the last northbound train has departed.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail.","Please stand on the right on the escalators."],K0=["This is a security message. If you see something that doesn't look right, speak to staff, or text the British Transport Police on 61016. We'll sort it. See it, say it, sorted.","If you see something that doesn't look right, speak to staff, or text British Transport Police on 61016, and we'll get it sorted. That's 61016. See it, say it, sorted."],Hy=["If you see something that doesn't look right, speak to staff. If you can find one. See it, say it, sorted."],J0=["This train is being held here to regulate the service. We will be on the move shortly.","This is a Northern line train to Edgware. Please move right down inside the cars."],Ll=["This train terminates here. All change, please. All change.","This train is being held here. We do not know what is holding it.","The next station is this one. The next station is this one."],Ye={phone:"Warden’s post, Camden Town. Yes, we can hear you walking about. All the bunks are taken tonight.",bunks:"Steel bunks, three high: lengthwise along this wall, and across the tunnel in bays of six on the other side. Each was let to one named person. If they did not come down, it stayed empty.",mow:["MINISTRY OF WORKS","NO SMOKING",["Smoking is strictly forbidden in every part of this shelter.","Any member of the staff found smoking will be dismissed."],"BY ORDER"],rules:["DEEP SHELTER","TO SHELTERERS",["Occupy only the bunk shown on your ticket.","Take your bedding up with you each morning.","Lights are lowered at 10.30 p.m."],"SHELTER WARDEN"],rulesOdd:["Occupy only the bunk shown on your ticket.","Your bunk has been kept for you.","You may go up in the morning, if it comes."],plan:"Camden Town deep shelter. Two tunnels side by side, upper and lower decks, 8,000 bunks, sections A to H. Shafts at Underhill Street and Buck Street. This is section F.",lower:"Lower deck. The chain is padlocked. More bunks down there, and a lamp somebody has left burning."},ls={green:["Emergency","stairs"],sign:["This stairway has over 320 steps","Do not use except in an emergency"],signs:[["This stairway has over 320 steps","Equivalent to climbing a 15 storey building"],["This stairway has over 340 steps","Equivalent to climbing a 16 storey building"]],hints:[[3,"Seventeen steps, a landing. Seventeen steps, a landing."],[8,"Cream tiles, a reddish-brown border, the same lamp. You have stopped counting."],[13,"Your legs ache. The numbers on the pillar are going down. Mostly."],[18,"Colder air from above. It smells of rain."]]},dn={hint:"South Kentish Town. Nobody has got off here since the fifth of June, 1924.",train:"Light in the tunnel. It is not slowing down.",posters:[["Kempton’s Cocoa","Sustaining · Nourishing · 4½d the tin","cup"],["Summer Sale","Hallam & Blythe, Drapers · Commences Monday June 16th","sun"],["The Heath by Tram","Fresh air for tuppence","hill"],["Whitsun Fête","Palace Fields · Bands · Fireworks at dusk","star"],["Pargeter’s Linctus","For the chest · Of all chemists","bottle"]],notice:["UNDERGROUND","NOTICE",["This station is CLOSED until further notice.","Passengers are requested to use Camden Town or Kentish Town stations."],"5th June 1924"],name:"· CASTLE · ROAD · — fired into the tiles, under a coat of old paint. The name the station was built under.",board:"SOUTH KENTISH TOWN. A solid red disc behind the name bar: the sign as it was before the ring.",arch:"An archway to the lifts, bricked up. The mortar is older than anyone you know.",legend:"WAY OUT → (the tiles point at the bricked-up arch)",shelter:"SHELTER · FIRST AID POST → — stencilled in 1940, when people slept here. The bunks went after the war.",dust:"Dust, thick and even. Yours are the only footprints."},Yn={approach:"The ticket hall. The gates are shut. Touch your card on a yellow reader.",reject:"Two low beeps. Every gate shows a red cross. The display says SEEK ASSISTANCE.",voice:"Seek assistance. There is no one here to assist you.",accept:"One clean beep. Green arrows. Every gate in the line opens at once.",out:"Hampstead. Heath Street. The air is cold and smells of rain.",booth:"Assistance. The blind is down. On the shelf inside, a mug of tea has a skin on it.",machine:"Machine closed. It has been closed since the ticket office was.",window:"TICKETS, in the old tiles, over a shuttered window. Nobody has sold one here for years.",wayout:"Way out ↑ (black on yellow)",thought:"Morning! If you can read this, you found the way out. Mind how you go."},Gy=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on the Northern line, and on all other lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train does not stop at {next}. The next train does not stop.","This is {station}. The next station is {station}."],Vy=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","This is North End. This station was never opened. Please do not alight here.","Please do not turn round."],ho={title:"Customer Information",intro:"This station is closed. To find the way out:",rules:["Follow the yellow and black signs that say “Way out”. Any other sign was not put up by us.","All station clocks run forwards. Never walk under a clock that runs backwards.","Announcements after a rising chime are from staff. A falling chime is not staff: do the opposite of what it says.","The way out is at Hampstead, the last station up the line and the deepest: up its stairs. A wrong turn takes you two stations back.","“Way out” is listed on the indicator boards. If its minutes go up, you went wrong."],foot:"Thank you for travelling on the Northern line.",keys:["yellow","chime","clock","line","board"]},Wy=()=>`${ho.intro}
${ho.rules.map((n,t)=>`${t+1}. ${n}`).join(`
`)}`,Xi={clear:"Please stand clear of the doors.",closing:"Doors closing.",up:"This lift is going up.",down:"This lift is going down.",odd:{select:["There is no need to select a floor.","Your floor has been selected for you."],expected:"You are expected on the next level.",know:"We know where you are going.",always:"It was always going down."},signUp:`Way out (yellow on black) · ↑ Lifts to street
On the back: To the trains · Northern line`,signDown:`Northern line · ↑ Lifts
On the back: To the trains · Northern line`,notice:"AUTOMATIC SERVICE. — NEXT LIFT ▸ — Please pass right inside the lift.",panel:"LIFT 1. A small dark window, a speaker, a yellow ALARM BUTTON. There are no buttons for floors: it only goes to one other place.",hint:"Lift 1. Automatic service: the doors are opening for you."},qy="This station is now closed. Please read the customer information notice on the platform, then make your way to the way out.",Q0=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.'},{key:"line",title:"STAFF NOTICE",text:"Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. Hampstead is the deepest station on the network, and the way out is at the top of its stairs. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards."},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.'},{key:"tiles",title:"STAFF NOTICE",text:"Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line."},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away."},{key:"whiteboard",title:"STAFF NOTICE",text:"The whiteboards are written each morning by the duty staff, who sign them with their own name. A board signed by anyone else, or by no one, was not written by us. Take no directions from it."},{key:"train",title:"NIGHT STAFF",text:'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"'}],$y=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"],["The Heath","Fresh air, four stops north"],["Night service","Does not run tonight"],["Keep left","Unless it says keep right"],["Lost property","It will turn up at Baker Street"],["Camden Lock Market","Open Sundays. Closed now"]],Xy=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],Yy=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function Zy(n,t,e,i,s,r){const[o,a,l]=s;n.fillStyle=o,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=a,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let f=0;f<5;f++)n.fillRect(0,e*(.46+f*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let f=0;f<14;f++){n.fillStyle=f%2?a:l,n.beginPath(),n.moveTo(0,0);const h=Math.PI+f/14*Math.PI,u=Math.PI+(f+1)/14*Math.PI;n.lineTo(Math.cos(h)*t*2,Math.sin(h)*t*2),n.lineTo(Math.cos(u)*t*2,Math.sin(u)*t*2),n.fill()}n.restore(),n.fillStyle=o,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let f=6;f>0;f--)n.fillStyle=f%2?a:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*f/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=a,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=a,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(r){n.fillStyle="rgba(8,8,8,0.92)";const f=t*i.range(.25,.75),h=e*.62,u=e*.12;n.beginPath(),n.ellipse(f,h-u*1.25,u*.2,u*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(f-u*.32,h),n.lineTo(f-u*.22,h-u),n.lineTo(f+u*.22,h-u),n.lineTo(f+u*.32,h),n.fill()}}function Ar(n,t,e,i,s=!1,r=!1){if(r){const h=Math.max(2,Math.min(t,e)*.035);n.fillStyle="#62676a",n.fillRect(0,0,t,e),n.save(),n.translate(h,h),n.beginPath(),n.rect(0,0,t-2*h,e-2*h),n.clip();const u=Ar(n,t-2*h,e-2*h,i,s,!1);return n.restore(),u}const o=i.pick(Yy),[a,l]=i.pick(s?Xy:$y);Zy(n,t,e,i,o,s);const c=o[2];n.fillStyle=o[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=o[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=o[1]===o[0]?c:o[1],n.font=`400 ${e*.085}px ${re}`;const f=zn(n,a,t*.86).slice(0,2);return f.forEach((h,u)=>n.fillText(h,t/2,e*(.775+u*.085)-(f.length-1)*e*.02,t*.9)),n.fillStyle=o[2]===o[0]?"#fff":o[2],xe(n,l,t*.84,e*.045,Kt,700),n.fillText(l,t/2,e*.93),Xe(n,0,0,t,e,i.int(1,99999),.6),{headline:a,strap:l}}function Wh(n,t,e,i,s){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",xe(n,i.title,t*.86,e*.1,re),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let r=e*.07,o;for(;n.font=`400 ${r}px ${Kt}`,o=zn(n,i.text,t*.86),!(o.length*r*1.25<e*.74||r<5);)r*=.92;o.forEach((a,l)=>n.fillText(a,t*.07,e*.22+l*r*1.25)),n.fillStyle="#b3261e";for(const[a,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*a,e*l+2,Math.max(2,t*.018),0,7),n.fill();s&&Xe(n,0,0,t,e,s.int(1,99999),.5)}const Qr={exit:{level:0,text:"Exit"},in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},no:{level:0,text:"No way out"},red:{level:0,text:"Way out",bg:"#b3261e",fg:Kn.white},blue:{level:1,text:"Way out",bg:Kn.blue,fg:Kn.white},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a",fg:Kn.black},serif:{level:2,text:"Way out",font:"Georgia, 'Times New Roman', serif"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function jy(n,t,e=!1){const i=n?Qr[n]:null,s={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",r=i?i.text:"Way out";let o=e?" (yellow on black)":" (black on yellow)";if(i&&i.bg===Kn.blue)o=" (white on blue)";else if(i&&i.bg==="#b3261e")o=" (white on red)";else if(i&&i.bg)o=" (black on pale green)";else if(i&&i.mirror)o=" (the lettering is back to front)";else{if(i&&i.arrow2)return`↔ ${r}`;i&&i.flipArrow?o=" (the arrow points the other way)":i&&i.font&&(o=" (the lettering has serifs)")}return t==="left"?`${s} ${r}${o}`:`${r} ${s}${o}`}function Wa(n,t,e,{dir:i="up",defect:s=null,inverted:r=!1}={}){const o=s?Qr[s]:{},a=o.bg||(r?Kn.black:Kn.yellow),l=o.fg||(r?Kn.yellow:Kn.black);n.fillStyle=a,n.fillRect(0,0,t,e);const c=n.createLinearGradient(0,0,0,e);c.addColorStop(0,"rgba(0,0,0,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0.10)"),c.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=Va("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const f=o.text||"Way out",h=e*.56,u=i!=="right",p=u?e*.52:t-e*.52,m=u?e*1:e*.3,_=u?t-e*.3:t-e*1;let d=i;o.flipArrow&&(d={left:"right",right:"left",up:"down"}[i]),uo(n,p,e/2,h,d,l),o.arrow2&&uo(n,p,e/2,h,{left:"right",right:"left",up:"down"}[i],l),n.fillStyle=l,n.textBaseline="middle",xe(n,f,_-m,e*.62,o.font||re),n.save(),o.mirror?(n.translate((m+_)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(f,0,e*.53)):(n.textAlign=u?"left":"right",n.fillText(f,u?m:_,e*.53)),n.restore()}function tu(n,t,e,i,s={}){n.fillStyle="#f7f6ee",n.fillRect(0,0,t,e),n.fillStyle="#2b2d2f",n.fillRect(0,0,t,Math.max(1,e*.07)),n.fillRect(0,e-Math.max(1,e*.07),t,Math.max(1,e*.07)),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(t-1,0,1,e);const r=s.arrow?e*2.7:0;n.fillStyle="#0019a8",n.textAlign="center",n.textBaseline="middle";try{n.letterSpacing=`${(e*.035).toFixed(1)}px`}catch{}xe(n,i.toUpperCase(),(t-r)*.62,e*.56,re),n.fillText(i.toUpperCase(),(t-r)*.5,e*.53);try{n.letterSpacing="0px"}catch{}s.note&&(n.font=`400 ${e*.24}px ${Kt}`,n.textAlign="left",n.fillText(s.note,e*.3,e*.52)),s.arrow&&(n.save(),n.translate(t-r-e*.25,e*.2),Wa(n,r,e*.6,{dir:s.arrow,inverted:!0}),n.restore())}function qh(n,t,e,i,s){const o=e/7,a=o*3;n.fillStyle=s.grout,n.fillRect(0,0,t,e);for(let h=0;h<7;h++)for(let u=h%2?-a/2:0;u<t;u+=a)n.fillStyle=Va(s.ground,(h*7+Math.round(u/a)*13)%9/100-.05),n.fillRect(u+.5,h*o+.5,a-1,o-1);const l=`· ${i.toUpperCase().split(" ").join(" · ")} ·`;n.fillStyle=s.letter||s.skirt,n.textAlign="center",n.textBaseline="middle";const c=o*5*1.36;n.font=`700 ${c}px Georgia, 'Times New Roman', serif`;const f=n.measureText(l).width;n.save(),n.translate(t/2,e*.52),n.scale(Math.min(.86,t*.96/f),1),n.fillText(l,0,0),n.restore();for(let h=1;h<7;h++)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,h*o,t,1)}function Rr(n,t,e,i,{bg:s=Kn.blue,fg:r=Kn.white,sub:o=""}={}){n.fillStyle=s,n.fillRect(0,0,t,e),n.strokeStyle=r,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=r,n.textAlign="center",n.textBaseline="middle",xe(n,i,t*.84,e*(o?.4:.52),re),n.fillText(i,t/2,e*(o?.38:.53)),o&&(xe(n,o,t*.84,e*.22,Kt),n.fillText(o,t/2,e*.72))}function yf(n,t,e,i,s,r=null){n.fillStyle=s.ground,n.fillRect(0,0,t,e);const o=e/5;n.strokeStyle=s.grout,n.lineWidth=1;for(let c=0;c<t;c+=o*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=o)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=s.band,n.lineWidth=o*.55,n.strokeRect(o*.3,o*.3,t-o*.6,e-o*.6),n.fillStyle=s.skirt,n.textAlign="center",n.textBaseline="middle";const a=r?t*.6:t*.8;xe(n,i,a,e*.42,re);const l=r==="left"?t*.6:r==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),r){const c=r==="left"?t*.17:t*.83,f=r==="left"?-1:1;n.beginPath(),n.moveTo(c-f*e*.42,e*.5),n.lineTo(c+f*e*.05,e*.42),n.lineTo(c+f*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+f*e*.2,e*.5),n.lineTo(c-f*e*.02,e*.3),n.lineTo(c-f*e*.02,e*.7),n.closePath(),n.fill()}}const Ky=[["Be kind to each other. It costs nothing, and the trains still run.","heart"],["Stand on the right, walk on the left – and smile!","smile"],["If it isn’t signed by one of us, we didn’t write it. Have a lovely day!","star","signed"],["Kindness is like the Northern line: it goes both ways.","train"],["Today’s forecast below ground: 100% chance of no rain.","sun"],["Our clocks only go one way. So do Mondays. Chin up!","sun","clock"],["Tea solves most things. Signal failures take a bit longer.","cup"],["You’re not late. You’re on a later version of on time.","smile"],["A chime that goes UP means it’s one of us talking. Always nice to hear a friendly voice!","note","chime"],["Don’t let the escalator get you down. That’s only its job on one side.","smile"],["Lost your brolly? Baker Street. Lost your way? Follow the yellow and black signs.","brolly","yellow"],["Whoever you’re rushing for will wait. Walk, don’t run.","heart"],["Mind the gap between who you are and who you were before your first cuppa.","cup"],["Every stop north is one nearer fresh air. Keep going – you’re doing brilliantly.","train","line"],["Shortest journey on the network: one smile, platform to platform.","smile"]],Jy=[["You’ve read this board before.","tally"],["Staff have gone home. Who wrote this?","query"],["Be kind to each other. There is only one of you.","heart"],["Stand on the right. Walk on the left. Don’t look behind.","eye"],["Smile! The cameras like it.","eye"],["This board is wiped clean every night. Tonight hasn’t finished yet.","tally"],["Yesterday’s thought is still underneath. It won’t rub out.","query"],["The date above is correct. It has been correct for some time.","tally"],["Thank you for not counting the stairs. (We know you did.)","smile"],["Don’t let the escalator get you down. Let it take you where it wants.","spiral"],["A clock going backwards is not trying to help you.","query","clock"]],Qy=[["You.","eye"],["I have so many passages now. Stay and see them all.","spiral"],["No more thoughts today. Only walking.","tally"],["You wrote this. You’ll write it again tomorrow.","tally"],["The way out is a thought I had once.","spiral"],["Mind the gap. I do. I mind it very much.","eye"],["Please stop reading me.","eye"]],tv=["Dave","Maureen","Priya","Winston","Bev","Kofi","Tariq","Sue"],ev=["CSA","Station Supervisor","early turn","night turn","ticket hall"],nv=["Y.O.U.","a member of staff?","(unsigned)","you know who"],iv=["The Station","The Station","me","you"],pe={blue:"#1f3fae",black:"#1c1c22",red:"#c5281f",green:"#1d7a40"},Fr=["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"],eu=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],nu=n=>`${n}${n%100>10&&n%100<14?"th":["th","st","nd","rd"][n%10]||"th"}`;function vf(n,t,e=new Date){const i=r=>`${Fr[r.getDay()]} ${nu(r.getDate())} ${eu[r.getMonth()]}`,s=i(e);return n===0?s:n===1?t.pick([`${s} (again)`,`${s}, still`,`${Fr[e.getDay()]}? ${nu(e.getDate())} ${eu[e.getMonth()]}`,i(new Date(e.getTime()-864e5))]):t.pick(["Today. Always today","No date",`${Fr[e.getDay()]} ${Fr[e.getDay()]} ${Fr[e.getDay()]}`])}function xf(n,t){return n.chance(.2)?`Your ${t} team`:`${n.pick(tv)}, ${n.pick(ev)}`}function Sf(n,t){return n.head=n.head||t.toUpperCase(),n.caption=`${n.head} · ${n.date}
${n.title}: ${n.text}
— ${n.sign}`,n}function sv(n,t,e){return Sf({tier:0,clue:null,title:"Thought for the day",date:vf(0,n),ink:pe.blue,doodle:"sun",text:e,sign:xf(n,t)},t)}function rv(n,t){const e=Math.min(.6,Math.max(0,t-2)*.3),i=Math.min(.7,t*.28);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function bf(n,t,e={}){const i=t.wrong||0,s=t.station||"Mornington Crescent",r=e.cheery?0:rv(n,i),o=[Ky,Jy,Qy][r],a=(t.stretch?t.stretch.id*4:0)+(t.idx||0),[l,c,f]=o[($e(t.gseed||1,77+r)+a)%o.length],h={tier:r,text:l,doodle:c,clue:f||null,title:"Thought for the day",date:vf(r,n),ink:r===2?pe.red:r===1?pe.black:n.pick([pe.blue,pe.blue,pe.black]),sign:r===0?xf(n,s):n.pick(r===1?nv:iv)};return r===2&&n.chance(.4)&&(h.head="THIS STATION"),Sf(h,s)}const ov=[n=>`Way out today: ${n}-hand passage. Mind how you go!`,n=>`Lift’s out again – sorry! For the way out, keep ${n}.`,n=>`Works on tonight. The way out is by the ${n}-hand passage. Thanks for your patience!`],av=[n=>`Way out today: ${n}. Trust me.`,n=>`Go ${n}. Everybody goes ${n}. Nobody has complained.`,n=>`The ${n}-hand passage has missed you. Come along.`],iu={signs:"Our signs are yellow and black and say “Way out”. Anything fancier isn’t one of ours!",announce:"If the chime goes down, don’t go with it. Wait for the one that goes UP.",clock:"Clocks here go forwards, like the rest of us. Don’t walk under one that doesn’t."};function $h(n,t,e){const i=t.wrong||0,s=t.station||"Mornington Crescent",r=n.chance(Math.min(.5,Math.max(0,i-.6)*.16)),o=!r&&n.chance(.35),a=o?-1:r?1-e.correct:e.correct,l=a===0?"left":"right",c={tier:r?2:0,clue:"junction",says:a,lie:r,title:o||r?"Thought for the day":"Today’s travel tip",text:o?iu[e.kind]||iu.signs:n.pick(r?av:ov)(l),doodle:o?"star":l,date:vf(r?1:0,n),ink:r?pe.red:n.pick([pe.blue,pe.black]),sign:r?"The Station":xf(n,s)};return Sf(c,s)}function ne(n,t,e,i,s,r=.5,o=!1){n.strokeStyle=i,n.lineWidth=s,n.lineCap="round",n.lineJoin="round",n.beginPath(),t.forEach(([a,l],c)=>{const f=a+e.range(-r,r),h=l+e.range(-r,r);c?n.lineTo(f,h):n.moveTo(f,h)}),o&&n.closePath(),n.stroke()}const qn=(n,t,e,i=e,s=0,r=Math.PI*2,o=14)=>{const a=[];for(let l=0;l<=o;l++){const c=s+(r-s)*l/o;a.push([n+Math.cos(c)*e,t+Math.sin(c)*i])}return a};function Ys(n,t,e,i,s,r,o,{slope:a=0,bold:l=!1,align:c="left"}={}){n.fillStyle=r,n.textAlign="left",n.textBaseline="alphabetic",n.strokeStyle=r,n.lineJoin="round",n.lineWidth=s*(l?.075:.05);const f=String(t).split(" ").map(_=>{const d=s*o.range(.96,1.04);return n.font=`400 ${d}px ${Ss}`,{word:_,s:d,w:n.measureText(_).width}}),h=s*.27,u=f.reduce((_,d)=>_+d.w,0)+h*(f.length-1);let p=c==="right"?e-u:c==="center"?e-u/2:e;const m=p;for(const _ of f)n.font=`400 ${_.s}px ${Ss}`,n.save(),n.translate(p,i+(p-m)*a+o.range(-.035,.035)*s),n.rotate(a+o.range(-.03,.03)),n.fillText(_.word,0,0),n.strokeText(_.word,0,0),n.restore(),p+=_.w+h;return u}const Xh={smile(n,t,e,i,s,r){ne(n,qn(t,e,i),r,s,i*.13,.4),ne(n,qn(t,e+i*.08,i*.55,i*.5,.25,Math.PI-.25,6),r,s,i*.13,.3);for(const o of[-1,1])ne(n,[[t+o*i*.34,e-i*.36],[t+o*i*.34,e-i*.2]],r,s,i*.16,.2)},heart(n,t,e,i,s,r){const o=[];for(let a=0;a<=18;a++){const l=a/18*Math.PI*2;o.push([t+i*.062*16*Math.sin(l)**3,e-i*.062*(13*Math.cos(l)-5*Math.cos(2*l)-2*Math.cos(3*l)-Math.cos(4*l))])}ne(n,o,r,pe.red,i*.14,.4)},star(n,t,e,i,s,r){const o=[];for(let a=0;a<=5;a++){const l=-Math.PI/2+a*(Math.PI*4/5);o.push([t+Math.cos(l)*i,e+Math.sin(l)*i])}ne(n,o,r,s,i*.12,.5)},sun(n,t,e,i,s,r){ne(n,qn(t,e,i*.5),r,pe.red,i*.13,.4);for(let o=0;o<8;o++){const a=o/8*Math.PI*2;ne(n,[[t+Math.cos(a)*i*.7,e+Math.sin(a)*i*.7],[t+Math.cos(a)*i,e+Math.sin(a)*i]],r,pe.red,i*.12,.4)}},cup(n,t,e,i,s,r){ne(n,[[t-i*.6,e-i*.15],[t-i*.48,e+i*.8],[t+i*.38,e+i*.8],[t+i*.5,e-i*.15]],r,s,i*.13,.4,!0),ne(n,qn(t+i*.55,e+i*.3,i*.3,i*.28,-1.3,1.3,6),r,s,i*.12,.3);for(const o of[-.25,.15])ne(n,[[t+i*o,e-i*.35],[t+i*(o+.14),e-i*.6],[t+i*o,e-i*.82],[t+i*(o+.12),e-i*1.05]],r,s,i*.09,.3)},train(n,t,e,i,s,r){ne(n,[[t-i*.7,e+i*.75],[t-i*.7,e-i*.35],[t-i*.35,e-i*.85],[t+i*.35,e-i*.85],[t+i*.7,e-i*.35],[t+i*.7,e+i*.75]],r,s,i*.12,.4,!0),ne(n,[[t-i*.18,e+i*.75],[t-i*.18,e-i*.5],[t+i*.18,e-i*.5],[t+i*.18,e+i*.75]],r,s,i*.09,.3);for(const o of[-1,1])ne(n,[[t+o*i*.3,e-i*.4],[t+o*i*.56,e-i*.4],[t+o*i*.56,e],[t+o*i*.3,e],[t+o*i*.3,e-i*.4]],r,s,i*.08,.3),ne(n,qn(t+o*i*.45,e+i*.42,i*.1),r,pe.red,i*.1,.2)},note(n,t,e,i,s,r){ne(n,qn(t-i*.35,e+i*.6,i*.28,i*.2),r,s,i*.2,.3),ne(n,[[t-i*.1,e+i*.6],[t-i*.1,e-i*.8],[t+i*.45,e-i*.45]],r,s,i*.13,.3),ne(n,[[t+i*.75,e+i*.5],[t+i*.75,e-i*.5]],r,pe.red,i*.12,.3),ne(n,[[t+i*.5,e-i*.2],[t+i*.75,e-i*.55],[t+i,e-i*.2]],r,pe.red,i*.12,.3)},brolly(n,t,e,i,s,r){ne(n,[...qn(t,e-i*.1,i*.9,i*.75,Math.PI,Math.PI*2,9),[t-i*.9,e-i*.1]],r,s,i*.12,.4),ne(n,[[t,e-i*.1],[t,e+i*.7],[t-i*.12,e+i*.9],[t-i*.3,e+i*.75]],r,s,i*.12,.3)},tally(n,t,e,i,s,r){for(let o=0;o<2;o++){const a=t-i*.95+o*i*1.15;for(let l=0;l<4;l++)ne(n,[[a+l*i*.2,e-i*.6],[a+l*i*.2,e+i*.6]],r,s,i*.1,.6);ne(n,[[a-i*.15,e+i*.4],[a+i*.75,e-i*.4]],r,s,i*.1,.6)}},query(n,t,e,i,s,r){ne(n,[...qn(t,e-i*.4,i*.42,i*.42,Math.PI,Math.PI*2.45,8),[t,e+i*.25]],r,s,i*.15,.4),ne(n,[[t,e+i*.7],[t,e+i*.74]],r,s,i*.2,.2)},eye(n,t,e,i,s,r){ne(n,[...qn(t,e+i*.5,i,i*.95,Math.PI*1.17,Math.PI*1.83,7),...qn(t,e-i*.5,i,i*.95,Math.PI*.17,Math.PI*.83,7)],r,s,i*.11,.3,!0),ne(n,qn(t,e,i*.3),r,s,i*.12,.2),ne(n,[[t,e-.5],[t,e+.5]],r,s,i*.26,.1)},spiral(n,t,e,i,s,r){const o=[];for(let a=0;a<=40;a++){const l=a*.42,c=i*a/40;o.push([t+Math.cos(l)*c,e+Math.sin(l)*c])}ne(n,o,r,s,i*.1,.3)},left(n,t,e,i,s,r){Xh.right(n,t,e,-i,s,r)},right(n,t,e,i,s,r){const o=Math.abs(i)*.2;ne(n,[[t-i,e],[t+i*.9,e]],r,s,o,.5),ne(n,[[t+i*.35,e-Math.abs(i)*.55],[t+i,e],[t+i*.35,e+Math.abs(i)*.55]],r,s,o,.5)}};function Yh(n,t,e,i,s){const r=Math.max(3,e*.034),o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"#c9cdd0"),o.addColorStop(.5,"#a9aeb2"),o.addColorStop(1,"#8d9296"),n.fillStyle=o,n.fillRect(0,0,t,e),n.fillStyle="#4b4f53";for(const[P,L]of[[0,0],[t-r*1.5,0],[0,e-r*1.5],[t-r*1.5,e-r*1.5]])n.fillRect(P,L,r*1.5,r*1.5);n.fillStyle="#f7f7f3",n.fillRect(r,r,t-2*r,e-2*r),n.save(),n.beginPath(),n.rect(r,r,t-2*r,e-2*r),n.clip();for(let P=0;P<5;P++){const L=e*s.range(.3,.85),D=t*s.range(.05,.5);ne(n,[[D,L],[D+t*s.range(.2,.45),L+e*s.range(-.06,.06)]],s,`rgba(40,60,140,${s.range(.025,.05)})`,e*s.range(.05,.11),2)}i.tier>0&&Ys(n,"Be kind to each other",t*.1,e*.62,e*.13,"rgba(30,45,110,0.11)",s,{slope:-.03});const a=i.head||"";let l=e*.125;n.font=`400 ${l}px ${Ss}`;const c=n.measureText(a).width+l*.4*a.split(" ").length;c>t*.84&&(l*=t*.84/c);const f=Ys(n,a,t/2,r+e*.135,l,pe.black,s,{bold:!0,align:"center"});ne(n,[[t/2-f/2-2,r+e*.16],[t/2,r+e*.168],[t/2+f/2+2,r+e*.158]],s,pe.black,Math.max(1,e*.011),.5);const h=e*.088,u=r+e*.27,p=Ys(n,i.title||"Thought for the day",t*.07,u,h,i.tier===2?pe.black:pe.red,s,{bold:!0}),m=[];for(let P=0;P<=p;P+=h*.45)m.push([t*.07+P,u+h*.2+(m.length%2?1:-1)*h*.05]);ne(n,m,s,i.tier===2?pe.black:pe.red,Math.max(1,e*.008),.3);let _=e*.07;n.font=`400 ${_}px ${Ss}`;const d=t*.93-(t*.07+p)-h*.6,g=n.measureText(i.date||"").width*1.12;g>d&&(_*=Math.max(.6,d/g)),Ys(n,i.date||"",t*.935,u,_,pe.blue,s,{align:"right"});const S=r+e*.33,y=e*.8,b=t*.84;let A=e*(i.text.length<14?.24:.15),M;for(;n.font=`400 ${A*1.05}px ${Ss}`,M=zn(n,i.text,b),!(M.length*A*1.08<=y-S||A<6);)A*=.94;const T=Math.min(A*1.22,(y-S)/M.length),w=S+(y-S-T*M.length)/2+A*.82;M.forEach((P,L)=>Ys(n,P,t*.08+s.range(0,t*.015),w+L*T,A,i.ink||pe.blue,s,{slope:s.range(-.012,.012)}));let v=e*.085;n.font=`400 ${v}px ${Ss}`;const x=n.measureText(`– ${i.sign}`).width*1.15;x>t*.6&&(v*=t*.6/x),Ys(n,`– ${i.sign}`,t*.93,e*.925,v,i.tier===2?pe.red:i.ink===pe.black?pe.blue:pe.black,s,{slope:-.04,align:"right"});const E=Xh[i.doodle];E&&E(n,t*.15,e*.875,e*.058,i.tier===2?pe.red:pe.green,s),n.restore(),n.strokeStyle="rgba(60,64,68,0.55)",n.lineWidth=1,n.strokeRect(r-.5,r-.5,t-2*r+1,e-2*r+1),Xe(n,r,r,t-2*r,e-2*r,s.int(1,99999),.22,!1)}const Hc=[240,180],_s={tint:[.9,.92,.95]},Zh=[[.14,.22,.78],[.82,.13,.1],[.09,.09,.11]],jh={tint:[.9,.9,.9]};function wn(n){return n.rng2||(n.rng2=new _e($e(n.node?n.node.seed:1,4242)))}function Kh(n,t){return{...n,r:4.6,label:"read whiteboard",title:"STAFF WHITEBOARD",text:t.caption,board:{tier:t.tier,clue:t.clue,says:t.says??-1,lie:!!t.lie}}}const Mf=(n,t)=>n.sheet.add(Hc[0],Hc[1],(e,i,s)=>Yh(e,i,s,t,wn(n)));function lv(n,t,e,i,s){const{b:r}=n,o=1,a=.75,l=.84,c=Mf(n,s),[f,,h]=we(t,0,0);r.place(f,t.y,h,t.yaw);const u=e*(i-.05),p=e*(i+.03),m=e>0?-o/2:o/2;r.quad("sheet",[u,l,m],[u,l,-m],[u,l+a,-m],[u,l+a,m],[-e,0,0],c,jh);const _=Vt("metal"),d=e>0?"x":"X";r.box("atlas",Math.min(u,p),l,-o/2,Math.max(u,p),l+a,o/2,_,_s,"yYzZ");const g=e*(i-.125);r.box("atlas",Math.min(g,p),l-.045,-o*.4,Math.max(g,p),l-.015,o*.4,_,_s,`yYzZ${d}`);const S=e*(i-.09);Zh.forEach((b,A)=>{const M=-.3+A*.17+(A===2?.16:0);r.box("atlas",S-.011,l-.015,M,S+.011,l+.007,M+.125,Vt("white"),{tint:b},"xXYzZ")}),r.setXf(null);const y=we(t,u,l+a/2);return Kh({x:y[0],y:y[1],z:y[2],n:[-e*Math.cos(t.yaw),e*Math.sin(t.yaw)]},s)}function su(n,t,e,i,s,r){for(const[o,a]of[[-1,0],[1,0],[0,-1],[0,1]]){const l=a!==0?i:0,c=o!==0?i:0,f=(h,u)=>[h[0]+o*i+u*l,h[1],h[2]+a*i+u*c];n.quad("atlas",f(t,-1),f(t,1),f(e,1),f(e,-1),[o,0,a],s,r)}}function Tf(n,t,e,i,s,r=0,o=null){const{b:a}=n,l=.9,c=.675,f=.9,h=.2,u=o||Mf(n,s),p=E=>-.22+(E-f)*h,m=f+c*.98,_=p(f),d=p(m);a.place(t,r,e,i),a.quad("sheet",[l/2,f,_],[-l/2,f,_],[-l/2,m,d],[l/2,m,d],[0,h,-.98],u,jh);const g=Vt("metal"),S=Vt("signBack"),y=.016;a.quad("atlas",[-l/2,f,_+y],[l/2,f,_+y],[l/2,m,d+y],[-l/2,m,d+y],[0,-h,.98],S),a.quad("atlas",[-l/2,m,d],[l/2,m,d],[l/2,m,d+y],[-l/2,m,d+y],[0,1,0],g,_s);for(const E of[-1,1])a.quad("atlas",[E*l/2,f,_],[E*l/2,f,_+y],[E*l/2,m,d+y],[E*l/2,m,d],[E,0,0],g,_s),su(a,[E*.37,0,p(0)+.045],[E*.37,1.64,p(1.64)+.045],.016,g,_s);su(a,[0,1.5,p(1.5)+.06],[0,0,.38],.016,g,_s),a.box("atlas",-l*.47,f-.03,_-.085,l*.47,f,_+.02,g,_s,"xXyYzZ"),Zh.forEach((E,P)=>{const L=-.3+P*.17+(P===2?.2:0);a.box("atlas",L,f,_-.07,L+.125,f+.022,_-.048,Vt("white"),{tint:E},"xXYzZ")}),a.setXf(null);const b=Math.cos(i),A=Math.sin(i),M=(E,P)=>[t+E*b+P*A,e-E*A+P*b],[T,w]=M(0,(_+d)/2),v=[M(-.45,-.43),M(.45,-.43),M(.45,.4),M(-.45,.4)],x=v.map((E,P)=>[...E,...v[(P+1)%4]]);return{item:Kh({x:T,y:r+(f+m)/2,z:w,n:[-A,-b]},s),walls:x}}const ru={northern:"#000000",bakerloo:"#b36305",central:"#e32017",circle:"#ffd300",district:"#00782a",hammersmith:"#f3a9bb",jubilee:"#a0a5a9",metropolitan:"#9b0056",piccadilly:"#003688",victoria:"#0098d4",waterloo:"#95cdba",elizabeth:"#6950a1",dlr:"#00a4a7",rail:"#e1251b"},ou={northern:"Northern",bakerloo:"Bakerloo",central:"Central",circle:"Circle",district:"District",hammersmith:"Hammersmith & City",jubilee:"Jubilee",metropolitan:"Metropolitan",piccadilly:"Piccadilly",victoria:"Victoria",waterloo:"Waterloo & City",elizabeth:"Elizabeth line",dlr:"DLR",rail:"National Rail"},Jh={edgware:["Edgware","Burnt Oak","Colindale","Hendon Central","Brent Cross","Golders Green","Hampstead","Belsize Park","Chalk Farm"],barnet:["High Barnet","Totteridge & Whetstone","Woodside Park","West Finchley","Finchley Central","East Finchley","Highgate","Archway","Tufnell Park","Kentish Town"],charingX:["Mornington Crescent","Euston","Warren Street","Goodge Street","Tottenham Court Road","Leicester Square","Charing Cross","Embankment","Waterloo"],bank:["Euston","King's Cross St. Pancras","Angel","Old Street","Moorgate","Bank","London Bridge","Borough","Elephant & Castle"],morden:["Oval","Stockwell","Clapham North","Clapham Common","Clapham South","Balham","Tooting Bec","Tooting Broadway","Colliers Wood","South Wimbledon","Morden"],battersea:["Nine Elms","Battersea Power Station"]},Ra={at:"Finchley Central",name:"Mill Hill East"},qa={Euston:["victoria","rail"],"Warren Street":["victoria"],"Tottenham Court Road":["central","elizabeth"],"Leicester Square":["piccadilly"],"Charing Cross":["bakerloo","rail"],Embankment:["bakerloo","circle","district"],Waterloo:["bakerloo","jubilee","waterloo","rail"],"King's Cross St. Pancras":["circle","hammersmith","metropolitan","piccadilly","victoria","rail"],"Old Street":["rail"],Moorgate:["circle","hammersmith","metropolitan","elizabeth","rail"],Bank:["central","waterloo","dlr"],"London Bridge":["jubilee","rail"],"Elephant & Castle":["bakerloo","rail"],Stockwell:["victoria"],Balham:["rail"],"Kentish Town":["rail"]},Ef=[["North End","Golders Green","Hampstead"],["South Kentish Town","Kentish Town","Camden Town"],["City Road","Angel","Old Street"],["King William Street","Bank","London Bridge"]],to=["Mornington Crescent","Camden Town","Chalk Farm","Belsize Park","Hampstead"],cv="Golders Green",po={"Mornington Crescent":{theme:{id:"mornington",ground:"#ece4c4",band:"#1d2a5e",accent:"#1d2a5e",skirt:"#182250",grout:"#bdb596",letter:"#7a1f2b"}},"Camden Town":{theme:{id:"camden",ground:"#e9e6cf",band:"#5d86c5",accent:"#5d86c5",skirt:"#3f5f96",grout:"#b9b6a0",letter:"#27406f"}},"Chalk Farm":{theme:{id:"chalk",ground:"#ede6cd",band:"#9a1b24",accent:"#9a1b24",skirt:"#7a141c",grout:"#beb69c",letter:"#6f141c"}},"Belsize Park":{theme:{id:"belsize",ground:"#ebe3c6",band:"#4d2418",accent:"#4d2418",skirt:"#3d1c12",grout:"#bdb497",letter:"#3a160f"}},Hampstead:{tiled:"Heath Street",theme:{id:"hampstead",ground:"#ece2bd",band:"#a66f6a",accent:"#a66f6a",skirt:"#5a1820",grout:"#beb38f",letter:"#5a1820"}},"Golders Green":{theme:{id:"golders",ground:"#eee9d6",band:"#2a5a3c",accent:"#2a5a3c",skirt:"#1f4530",grout:"#bfbaa6",letter:"#1f4530"}}},mo={name:"South Kentish Town",built:"Castle Road"};po[mo.name]={tiled:mo.built,theme:{id:"skt",ground:"#cfc6a6",band:"#5e2020",accent:"#5e2020",skirt:"#4a1a1a",grout:"#8f876f",letter:"#3f1414"}};const fv=n=>n>=to.length?cv:to[Math.max(0,n)],wf=n=>(po[n]||po["Mornington Crescent"]).theme,uv=n=>po[n]&&po[n].tiled||n,Cs=n=>n==="north"?1:2,Sr=n=>n==="north"?"Northbound":"Southbound",Gc="#16213f",hv="#1c3f94",dv="#f6f6f1";function pv(n){let t=0;for(const e of n)t+=e.type==="trunk"?e.stations.length:Math.max(e.left.length,e.right.length)+(e.rejoin?1:0)+(e.spur?.6:0);return t}function mv(n,t,e,i,s,r,o,a){const l=qa[t];if(!l)return;let c=e;for(const f of l.slice(0,5)){const h=f==="rail"?r*1.5:r*2,u=r*.62,p=s<0?c-h:c;if(p<o||p+h>a)break;f==="rail"?(n.strokeStyle=ru.rail,n.lineWidth=Math.max(1,r*.2),n.lineJoin="miter",n.beginPath(),n.moveTo(p,i-u*.42),n.lineTo(p+h,i-u*.42),n.lineTo(p,i+u*.42),n.lineTo(p+h,i+u*.42),n.stroke()):(n.fillStyle=ru[f],n.fillRect(p,i-u/2,h,u)),c+=s*(h+r*.45)}}function Dl(n,t,e,i,s,r,o={}){const a=Math.max(2,r*.42),l=!!qa[t]||o.circle;n.strokeStyle="#000",n.fillStyle="#000",n.lineWidth=a,o.terminus&&(n.beginPath(),n.moveTo(e-r*.7,i),n.lineTo(e+r*.7,i),n.stroke()),l?(n.fillStyle="#fff",n.beginPath(),n.arc(e,i,r*.55,0,7),n.fill(),n.lineWidth=Math.max(1.5,r*.26),n.beginPath(),n.arc(e,i,r*.55,0,7),n.stroke()):o.terminus||(n.beginPath(),n.moveTo(e,i),n.lineTo(e+s*r*.85,i),n.stroke());const c=e+s*r*1.35;n.textAlign=s<0?"right":"left",n.textBaseline="middle";let f=[t];if(t.length>17&&t.includes(" ")){const _=t.split(" ");let d=1,g=1/0;for(let S=1;S<_.length;S++){const y=Math.abs(_.slice(0,S).join(" ").length-_.slice(S).join(" ").length);y<g&&(g=y,d=S)}f=[_.slice(0,d).join(" "),_.slice(d).join(" ")]}let h=r*(f.length>1?1:1.18);const u=(o.room||1e9)-r*1.5;n.font=`400 ${h}px ${re}`;let p=Math.max(...f.map(_=>n.measureText(_).width));p>u&&(h*=u/p,n.font=`400 ${h}px ${re}`,p=u);const m=f.length>1?h*.52:0;if(o.current){const _=s<0?c-p-r*.5:c-r*.5,d=f.length>1?r*2.5:r*1.8;n.fillStyle=hv,n.fillRect(_,i-d/2,p+r,d),n.fillStyle="#fff"}else n.fillStyle=o.odd?"#5a0d14":Gc;o.current&&o.blank||f.forEach((_,d)=>n.fillText(_,c,i+r*.06+(f.length>1?d?m:-m:0))),mv(n,t,c+s*(p+r*(o.current?1.1:.7)),i,s,r,o.lo??-1e9,o.hi??1e9)}function Af(n,t,e,i,s={}){n.fillStyle=dv,n.fillRect(0,0,t,e);const r=Math.max(3,t*.022);n.strokeStyle="#5f6467",n.lineWidth=r,n.strokeRect(r/2,r/2,t-r,e-r);const o=t*.075;n.fillStyle=Gc,n.textAlign="left",n.textBaseline="alphabetic",n.font=`400 ${e*.03}px ${Kt}`,n.fillText("Northern line",o,e*.052),xe(n,`${Sr(s.dir)} platform ${Cs(s.dir)}`,t-o*2,e*.047,re),n.fillText(`${Sr(s.dir)} platform ${Cs(s.dir)}`,o,e*.102),n.strokeStyle="#9aa0a3",n.lineWidth=Math.max(1,e*.003),n.beginPath(),n.moveTo(o,e*.128),n.lineTo(t-o,e*.128),n.stroke();const a=e*.17,l=e*.965,c=pv(i),f=Math.min(e*.052,(l-a)/Math.max(1,c)),h=Math.min(f*.6,t*.03),u=t*.37,p=t*.57,m=u-t*.05,_=t*.95-p,d=Math.max(2,h*.42),g=M=>{n.strokeStyle="#000",n.lineWidth=d,n.lineJoin="round",n.lineCap="butt",n.beginPath(),M.forEach((T,w)=>w?n.lineTo(T[0],T[1]):n.moveTo(T[0],T[1])),n.stroke()},S=s.odd||new Set;let y=a+f*.5,b=!0;const A=i.length===1;i.forEach((M,T)=>{const w=i[T+1];if(M.type==="trunk"){const v=A||T>0?1:-1,x=i[T-1],E=x&&x.rejoin?y-f:y,P=y+f*(M.stations.length-1);g([[u,E],[u,w?P+f*.5:P]]),M.stations.forEach((L,D)=>{const k=b&&D===0;Dl(n,L,u,y,v,h,{current:k,blank:k&&M.hideCurrent,circle:k,terminus:!w&&D===M.stations.length-1,odd:S.has(L),room:v<0?m:t*.95-u,lo:t*.045,hi:t*.955}),y+=f}),b=!1}else{const v=Math.max(M.left.length,M.right.length),x=y-f*.5,E=y+f*(v-1),P=y+f*(M.left.length-1),L=y+f*(M.right.length-1);if(g([[u,x],[u,M.rejoin?E+f:P]]),g([[u,x],[u+h*.8,x+f*.12],[p-h*.8,x+f*.12],[p,x+f*.45],[p,M.rejoin?E+f*.45:L]]),M.rejoin&&g([[p,E+f*.45],[p-h*.8,E+f*.82],[u+h*.8,E+f*.82],[u,E+f]]),M.left.forEach((D,k)=>Dl(n,D,u,y+f*k,-1,h,{terminus:!M.rejoin&&k===M.left.length-1,odd:S.has(D),room:m,lo:t*.045,hi:t*.955})),M.right.forEach((D,k)=>Dl(n,D,p,y+f*k,1,h,{terminus:!M.rejoin&&k===M.right.length-1,odd:S.has(D),room:_,lo:t*.045,hi:t*.955})),M.spur&&M.left.includes(M.spur.at)){const D=y+f*M.left.indexOf(M.spur.at),k=(u+p)/2;g([[u,D+f*.5],[k-h*.6,D+f*.5],[k,D+f*.68],[k,D+f*1]]),g([[k-h*.7,D+f*1],[k+h*.7,D+f*1]]),n.fillStyle=Gc,n.textAlign="center",n.textBaseline="top",n.font=`400 ${h*.95}px ${re}`,M.spur.name.replace(" East",`
East`).split(`
`).forEach((N,B)=>n.fillText(N,k,D+f*1.12+B*h*1.05))}y=E+f*(M.rejoin?2:1)}})}const{edgware:ar,barnet:Qh,charingX:hr,bank:td,morden:ed,battersea:nd}=Jh,eo=n=>n.slice().reverse(),Il=[{type:"trunk",stations:["Kennington"]},{type:"split",left:ed,right:nd,rejoin:!1,labels:["to Morden","to Battersea Power Station"]}],au={type:"split",left:hr,right:td,rejoin:!0,labels:["via Charing Cross","via Bank"]},gv={type:"split",left:eo(Qh),right:eo(ar),rejoin:!1,labels:["High Barnet branch","Edgware branch"],spur:Ra};function Ao(n,t){const e=ar.indexOf(n),i=hr.indexOf(n),s=o=>({...o,left:o.left&&o.left.slice(),right:o.right&&o.right.slice(),stations:o.stations&&o.stations.slice()});let r;return t==="north"?e>=0?r=[{type:"trunk",stations:eo(ar.slice(0,e+1))}]:n==="Camden Town"?r=[{type:"trunk",stations:["Camden Town",...eo(ar)]}]:r=[{type:"trunk",stations:[...eo(hr.slice(0,Math.max(0,i)+1)),"Camden Town"]},gv]:e>=0?r=[{type:"trunk",stations:[...ar.slice(e),"Camden Town"]},au,...Il]:n==="Camden Town"?r=[{type:"trunk",stations:["Camden Town"]},au,...Il]:r=[{type:"trunk",stations:[...hr.slice(Math.max(0,i)),"Kennington"]},Il[1]],r.map(s)}function _v(n,t){const e=hr.includes(n);return t==="north"?e?[["Edgware",""],["High Barnet",""],["Edgware",""],["Mill Hill East",""]]:[["Edgware",""],["Edgware",""],["Golders Green",""]]:e?[["Battersea Power Station",""],["Kennington",""],["Morden",""]]:[["Morden","via Bank"],["Kennington","via Charing Cross"],["Battersea Power Station","via Charing Cross"],["Morden","via Bank"]]}function id(n,t,e=""){const i=Ao(n,t);if(i[0].stations.length>1)return i[0].stations[1];const s=i[1];return s?t==="north"?e==="High Barnet"?s.left[0]:s.right[0]:e==="via Bank"?s.right[0]:s.left[0]:null}const yv=n=>{const t=qa[n];if(!t)return"";const e=t.map(i=>i==="rail"?"National Rail services":i==="dlr"||i==="elizabeth"?`the ${ou[i]}`:`the ${ou[i]} line`);return`Change here for ${e.length>1?`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`:e[0]}.`};function vv(n,t){const e=[],i=s=>{s&&s!==n&&!e.includes(s)&&e.push(s)};return Ao(n,t).forEach((s,r)=>{s.type==="trunk"?(r===0&&i(s.stations[1]),i(s.stations[s.stations.length-1])):s.rejoin?s.labels.forEach(o=>i(o.replace("via ",""))):(i(s.left[s.left.length-1]),i(s.right[s.right.length-1]))}),e}function xv(n,t,e=""){return n==="Camden Town"?t==="north"?"Change here for the High Barnet branch.":e==="via Bank"?"Change here for trains via Charing Cross.":"Change here for trains via Bank.":yv(n)}function Sv(n,t,e,i=""){const s=id(n,t,i||e)||n,r=xv(n,t,i);return`This is ${n}. ${r?`${r} `:""}This is a Northern line train to ${e}${i?` ${i}`:""}. The next station is ${s}. The doors will not open at this station.`}const bv=n=>`This is ${n}. The next station is ${n}. The doors will not open at this station.`;function Ca(n,t,e){const i=[];if(n.forEach((s,r)=>{if(s.type==="trunk")i.push({arr:s.stations,prev:null,si:r});else{const o=n[r-1]?n[r-1].stations[n[r-1].stations.length-1]:null;i.push({arr:s.left,prev:o,si:r},{arr:s.right,prev:o,si:r})}}),t==="ghost"){for(const[s,r,o]of e.shuffle(Ef))for(const{arr:a,prev:l}of i)for(let c=0;c<a.length;c++){const f=c===0?l:a[c-1];if(f===r&&a[c]===o||f===o&&a[c]===r)return a.splice(c,0,s),"ghost"}return null}if(t==="swap"){const s=i.filter(a=>a.arr.length>=4);if(!s.length)return null;const{arr:r}=e.pick(s),o=e.int(1,r.length-3);return[r[o],r[o+1]]=[r[o+1],r[o]],"swap"}if(t==="repeat"){const s=n[0].stations;for(let r=1;r<Math.min(4,s.length);r++)s[r]=s[0];return s.length>1?"repeat":null}return t==="missing"?(n[0].hideCurrent=!0,"missing"):null}function sd(n,t,e){const i=r=>r.join(", "),s=[`Northern line. ${Sr(t)} platform ${Cs(t)}.`];return e.forEach((r,o)=>{if(r.type==="trunk"){const a=o===0?r.stations.slice(1):r.stations;o===0&&s.push(r.hideCurrent?"This station: (the box is blank).":`This station: ${r.stations[0]}.`),a.length&&s.push(`${o===0?"Then":"Then on to"} ${i(a)}.`)}else{let a=i(r.left);r.spur&&r.left.includes(r.spur.at)&&(a+=` (and ${r.spur.name}, from ${r.spur.at})`);const l=c=>c[0].toUpperCase()+c.slice(1);s.push(`${l(r.labels[0])}: ${a}. ${l(r.labels[1])}: ${i(r.right)}.`)}}),s.join(" ")}function Mv(n,t=[]){const e=s=>s.join(", "),i=t.length?` Also marked: ${e(t.map(s=>s[0]))}.`:"";return`Northern line. You are here: ${n}. Edgware branch: ${e(ar)}. High Barnet branch: ${e(Qh)} (and ${Ra.name}). Then Camden Town. Via Charing Cross: ${e(hr)}. Via Bank: ${e(td)}. Then Kennington. To Morden: ${e(ed)}. To Battersea Power Station: ${e(nd)}.${i}`}const Ci=wt.W/2;function rd(n){const t=n.env.seenNotices||new Set,e=Q0.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:Q0)}const Vc=3,Pa={diagram:[200,300],notice:[168,216],board:Hc,legend:[220,54],poster:[104,164]};function Tv(n,t,e,i,s=Ci){const{b:r,sheet:o,rng:a}=n,l=n.posterPool||(n.posterPool=[]);let c;if(l.length<(n.posterCap||Vc)){const h=a.chance(Math.min(.7,(n.env.wrong||0)*.17));let u;c={uv:o.add(Pa.poster[0],Pa.poster[1],(m,_,d)=>{u=Ar(m,_,d,a,h)}),text:`${u.headline}. ${u.strap}.`},l.push(c)}else c=l[a.int(0,l.length-1)];const f=ts(r,"sheet",t,e,s,.52,.64,1,c.uv,null,.045);zy(r,t,e,s-.01,.52,.64,1),i.push({...f,r:4.2,label:"read poster",title:"POSTER",text:c.text})}function lu(n,t,e,i,s=Ci){const{b:r,sheet:o,rng:a}=n,l=rd(n),c=o.add(168,216,(h,u,p)=>Wh(h,u,p,l,a)),f=ts(r,"sheet",t,e,s,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...f,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:h=>h.story.noticeRead(l.key)})}function cu(n,t,e,i,s=Ci){i.push(lv(n,t,e,s,bf(wn(n),n.env)))}const Ul=.95,ia=2,fu=.25;function Ev(n,t,e){const{b:i}=n;ts(i,"atlas",t,e,Ci-fu+.03,0,Ul,ia,Nt("door"),null,.03);const s=Vt("steelDark"),[r,,o]=we(t,0,0);i.place(r,t.y,o,t.yaw);const a=e*Ci,l=e*(Ci-fu),c=.06,f=-Ul/2-c,h=Ul/2+c,u=ia+c;i.quad("atlas",[l,0,f],[l,0,f+c],[l,u,f+c],[l,u,f],[-e,0,0],s),i.quad("atlas",[l,0,h-c],[l,0,h],[l,u,h],[l,u,h-c],[-e,0,0],s),i.quad("atlas",[l,ia,f],[l,ia,h],[l,u,h],[l,u,f],[-e,0,0],s),i.quad("atlas",[a,0,f],[l,0,f],[l,u,f],[a,u,f],[0,0,-1],s),i.quad("atlas",[l,0,h],[a,0,h],[a,u,h],[l,u,h],[0,0,1],s),i.quad("atlas",[a,u,f],[l,u,f],[l,u,h],[a,u,h],[0,1,0],s),i.setXf(null)}function uu(n,t,e,i,s,r,o){ts(n.b,i==="extinguisher"?"cut":"atlas",t,e,Ci,s,r,o,Nt(i),null,.04)}function wv(n,t,e,i){const{b:s,sheet:r,rng:o}=n,a=o.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=r.add(220,54,(f,h,u)=>yf(f,h,u,a,n.theme,null)),c=ts(s,"sheet",t,e,Ci,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:a})}function Av(n,t,e,i,s,r,o,a,l=.04){const c=wt.W/2,f=wt.spring,h=wt.crown-f,u=v=>{if(v<=f)return{X:c,nx:1,ny:0};const x=Math.min(1,(v-f)/h),E=c*Math.sqrt(1-x*x),P=E/(c*c),L=(v-f)/(h*h),D=Math.hypot(P,L)||1;return{X:E,nx:P/D,ny:L/D}},p=[],m=10,_=o/m;let d=s,g=0;p.push({y:d,...u(d)});for(let v=1;v<=m;v++){const x=_*v;for(;g<x;){const P=u(d),L=u(d+.005);g+=Math.hypot(L.X-P.X,.005),d+=.005}p.push({y:d,...u(d)})}const[S,,y]=we(e,0,0);n.place(S,e.y,y,e.yaw);const b=i>0?-r/2:r/2,A=-b,M=(v,x)=>[i*(v.X-l*v.nx),v.y-l*v.ny,x];for(let v=0;v<m;v++){const x=p[v],E=p[v+1],P=a[1]+(a[3]-a[1])*(v/m),L=a[1]+(a[3]-a[1])*((v+1)/m),D=[-i*(x.nx+E.nx)/2,-(x.ny+E.ny)/2,0];n.quad(t,M(x,b),M(x,A),M(E,A),M(E,b),D,[a[0],P,a[2],L])}n.setXf(null);const T=p[m>>1],w=we(e,i*(T.X-l),T.y);return{x:w[0],y:w[1],z:w[2]}}function Rv(n,t,e,i,s=Ci){const{b:r,sheet:o,rng:a,env:l}=n,c=a.chance(.5)?"north":"south",f=Ao(l.station,c);a.chance(Math.min(.8,(l.wrong||0)*.2))&&Ca(f,a.pick(["ghost","ghost","swap","repeat"]),a);const h=o.add(200,300,(p,m,_)=>Af(p,m,_,f,{station:l.station,dir:c})),u=Av(r,"sheet",t,e,.6,.9,1.35,h,.04);i.push({...u,r:5,label:"read line diagram",title:"LINE DIAGRAM",text:sd(l.station,c,f)})}const Cv=1.55,hu={notice:.22,board:.4};function Pv(n,t,e){const{rng:i}=n,s=[],r=t.every(w=>Math.abs(w.yaw)<1e-6&&Math.abs(w.y-t[0].y)<1e-6),o=e[e.length-1]-e[0];if(!r||o<5.5)return s;const a=[];for(let w=2.2;w<=o-2.2;w+=Cv)a.push(w);let l=!1,c=!1,f=!1,h=!1;const u=[],p=[],m=(w,v,x,E,P)=>p.push({prio:w,fn:v,kind:x,f:E,side:P}),_={[-1]:new Set,1:new Set},d=(w,v)=>![v-1,v,v+1].some(x=>_[w].has(x))&&!_[-w].has(v),g=(w,v,x,E,P)=>{const L={x:0,y:0,z:a[v],yaw:0};_[w].add(v),m(x,()=>P(n,L,w,s),E,L,w)},S=i.chance(n.env.noticeChance??hu.notice),y=wn(n).chance(n.env.boardChance??hu.board),b=wn(n);for(const w of[-1,1])for(let v=0;v<a.length;v++){const x=a[v],E={x:0,y:0,z:x,yaw:0},P=i.next(),L=d(w,v);if(L&&S&&!l&&P<.3){g(w,v,1,"notice",lu),l=!0;continue}if(L&&P<.1&&!f){g(w,v,0,"diagram",Rv),f=!0;continue}P<.5?L?g(w,v,4,"poster",Tv):u.push([w,v]):P<.56&&x>3&&x<o-3?m(5,()=>Ev(n,E,w)):P<.62?L&&y&&!h?(g(w,v,2,"board",cu),h=!0):u.push([w,v]):P<.67&&L&&!c&&x<o-3?(g(w,v,3,"legend",wv),c=!0):P<.72?m(5,()=>uu(n,E,w,"grille",.25,.5,.5)):P<.76?m(5,()=>uu(n,E,w,"extinguisher",.75,.45,.45)):u.push([w,v])}const A=(w,v,x,E)=>{const P=u.filter(([D,k])=>d(D,k)),L=p.filter(D=>D.kind==="poster");if(P.length){const D=P[E(P.length)];u.splice(u.indexOf(D),1),g(D[0],D[1],w,v,x)}else if(L.length){const D=L[E(L.length)];D.prio=w,D.kind=v,D.fn=()=>x(n,D.f,D.side,s)}};S&&!l&&A(1,"notice",lu,w=>i.int(0,w-1)),y&&!h&&A(2,"board",cu,w=>b.int(0,w-1)),p.sort((w,v)=>w.prio-v.prio);const M=p.filter(w=>w.kind&&w.kind!=="poster").map(w=>Pa[w.kind]),T=n.sheet.room(M.concat(Array(Vc).fill(Pa.poster)))-M.length;n.posterCap=Math.max(1,Math.min(Vc,T));for(const w of p)w.fn();return s}function Lv(n,t,e){return n.sheet?Pv(n,t,e):[]}const oi=.5;function Dv(n,t=3.4,e=40){const{b:i}=n,s=wt.W/2+.1,r=wt.crown+.1,o={emit:0};i.quad("gate",[-s,0,.06],[s,0,.06],[s,r,.06],[-s,r,.06],[0,0,1],Vt("blackout"),o);const a=Nt("gate"),l={emit:.34};for(const[c,f]of[[-s,0],[0,s]])i.quad("gate",[c,0,oi],[f,0,oi],[f,r,oi],[c,r,oi],[0,0,1],a,l);return i.box("gate",-.035,0,oi-.02,.035,r,oi+.03,Vt("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,oi+.03,.09,1.16,oi+.07,Vt("metal"),{emit:.5},"xXyYZ"),{x0:-s,x1:s,z0:t,z1:e,gate:!0,fire:(c,f)=>c.director.commit(f)}}const du=[-(wt.W/2+.2),oi+.25,wt.W/2+.2,oi+.25];function od(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function ad(n,t){const{b:e,p:i}=n,s=yn(e,t,wt,{floor:Nt("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const r=t[t.length-1];e.addPortal(r.x,r.y,r.z,r.yaw),Qn(e,t[0],wt.crown),Vh(e,t,s.dist,wt.crown,i.lights);const o=Lv(n,t,s.dist),a={};return n.env.gate&&(a.zones=[Dv(n,3.4,s.length+1)]),{cells:s.cells,walls:s.walls,items:o,frames:t,extra:a}}const Iv={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:od(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return ad(n,wy(n.p.len,1))}},cs=4.5,Uv={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:od(n,t)},exits:[{x:e*cs,y:0,z:cs,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,cs,3.3,cs+1.9]:[-cs,-.4,0,1.9,3.3,cs+1.9]}},build(n){return ad(n,Ay(cs,n.p.dir*Math.PI/2,.9))}},zr=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function Nv(n,t,e,i){const s=n.x-i.x,r=n.y-i.y,o=t.x-i.x,a=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(s*s+r*r)*(o*c-l*a)-(o*o+a*a)*(s*c-l*r)+(l*l+c*c)*(s*a-o*r)}function kv(n,t,e=60){const i=n.length,s=t.map(([r,o,a])=>zr(n[r],n[o],n[a])>=0?[r,o,a]:[r,a,o]).filter(([r,o,a])=>Math.abs(zr(n[r],n[o],n[a]))>1e-12);for(let r=0;r<e;r++){const o=new Map;s.forEach((c,f)=>{for(let h=0;h<3;h++){const u=c[h],p=c[(h+1)%3],m=u<p?u*i+p:p*i+u,_=o.get(m);_?_.push(f):o.set(m,[f])}});const a=new Set;let l=0;for(const[c,f]of o){if(f.length!==2||a.has(f[0])||a.has(f[1]))continue;const h=Math.floor(c/i),u=c%i,p=s[f[0]],m=s[f[1]],_=p.find(y=>y!==h&&y!==u),d=m.find(y=>y!==h&&y!==u),[g,S]=zr(n[h],n[u],n[_])>0?[h,u]:[u,h];Nv(n[g],n[S],n[_],n[d])<=1e-10||zr(n[_],n[g],n[d])<=1e-12||zr(n[d],n[S],n[_])<=1e-12||(s[f[0]]=[_,g,d],s[f[1]]=[d,S,_],a.add(f[0]),a.add(f[1]),l++)}if(!l)break}return s}function Ov(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){const o=n[s],a=n[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function Fv(n,t,e){let i=1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){const o=n[s],a=n[r],l=a.x-o.x,c=a.y-o.y,f=l*l+c*c;let h=f>0?((t-o.x)*l+(e-o.y)*c)/f:0;h=h<0?0:h>1?1:h,i=Math.min(i,Math.hypot(t-(o.x+l*h),e-(o.y+c*h)))}return i}function ld(n,t,e,i,s=[]){const r=[{x:n,y:e}];for(const o of s.slice().sort((a,l)=>a[0].x-l[0].x)){r.push({x:o[0].x,y:e});for(const a of o)a.y>e+1e-6&&r.push({x:a.x,y:a.y});r.push({x:o[o.length-1].x,y:e})}return r.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),r.filter((o,a)=>a===0||Math.hypot(o.x-r[a-1].x,o.y-r[a-1].y)>1e-6)}function Ro(n,t,e,i,s={}){const r=s.layer||"tile",o=s.uv||((d,g)=>[d/6,.004+Math.max(0,g)/3.63*.992]),a=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=s.grid??1.1,c=[];i.forEach((d,g)=>{const S=i[(g+1)%i.length];c.push({x:d.x,y:d.y});const y=Math.hypot(S.x-d.x,S.y-d.y),b=l>0&&y>1.5*l?Math.ceil(y/l):1;for(let A=1;A<b;A++){const M=A/b,T=(A%2?7e-4:-7e-4)/y;c.push({x:d.x+(S.x-d.x)*M-(S.y-d.y)*T,y:d.y+(S.y-d.y)*M+(S.x-d.x)*T})}});const f=[];if(l>0){let d=1/0,g=-1/0,S=1/0,y=-1/0;for(const M of c)d=Math.min(d,M.x),g=Math.max(g,M.x),S=Math.min(S,M.y),y=Math.max(y,M.y);const b=Math.max(1,Math.round((g-d)/l)),A=Math.max(1,Math.round((y-S)/l));for(let M=1;M<b;M++)for(let T=1;T<A;T++){const w=($e(M*73+11,T*151+5)/4294967296-.5)*.3,v=($e(M*199+3,T*37+17)/4294967296-.5)*.3,x=d+(g-d)*(M+(T%2?.25:-.25)+w)/b,E=S+(y-S)*(T+v)/A;s.keep&&!s.keep(x,E)||!Ov(c,x,E)||Fv(c,x,E)<l*.3||f.push([new le(x,E)])}}const h=c.map(d=>new le(d.x,d.y)),u=pf.triangulateShape(h,f),p=h.concat(f.map(d=>d[0])),m=kv(p,u),_=d=>we(t,d.x,d.y);for(const[d,g,S]of m){const y=p[d],b=p[g],A=p[S];n.tri(r,_(y),_(b),_(A),a,o(y.x,y.y),o(b.x,b.y),o(A.x,A.y),s.o)}return m.length}const sa=.05,pu=.004;function cd(n,t){const{x0:e,x1:i,z0:s,z1:r,H:o}=t,a=t.y||0,l=t.portals||[],c=[],f={S:{f:{x:0,y:a,z:s,yaw:0},facing:1,lat:_=>_,t0:e,t1:i,pt:_=>[_,s]},N:{f:{x:0,y:a,z:r,yaw:0},facing:-1,lat:_=>_,t0:e,t1:i,pt:_=>[_,r]},W:{f:{x:e,y:a,z:0,yaw:Math.PI/2},facing:1,lat:_=>-_,t0:s,t1:r,pt:_=>[e,_]},E:{f:{x:i,y:a,z:0,yaw:Math.PI/2},facing:-1,lat:_=>-_,t0:s,t1:r,pt:_=>[i,_]}};for(const _ of Object.keys(f)){const d=f[_],g=l.filter(T=>T.wall===_).sort((T,w)=>T.at-w.at),S=d.lat(d.t0-sa),y=d.lat(d.t1+sa),b=g.map(T=>wt.map(w=>({x:d.lat(T.at)+w.x+w.nx*pu,y:w.y+w.ny*pu}))),A=ld(Math.min(S,y),Math.max(S,y),-sa,o+sa,b);Ro(n,d.f,d.facing,A,{layer:t.layer||"tile",grid:1,uv:t.uv||((T,w)=>[(T-3.1)/6+.5,.004+.992*w/3.63])});let M=d.t0;for(const T of g)c.push([...d.pt(M),...d.pt(T.at-wt.W/2)]),M=T.at+wt.W/2;c.push([...d.pt(M),...d.pt(d.t1)])}const h=Math.max(1,Math.round(i-e)),u=Math.max(1,Math.round(r-s));n.grid("atlas",[e,a,s],[i-e,0,0],[0,0,r-s],h,u,[0,1,0],t.floor||Nt("floor"),null,!0),n.grid("atlas",[e,a+o,s],[i-e,0,0],[0,0,r-s],h,u,[0,-1,0],t.ceil||Nt("concrete"),t.ceilOpts||null,!0);const p=(e+i)/2;return{cells:[{ax:p,az:s,bx:p,bz:r,hw:(i-e)/2,ya:a,yb:a}],walls:c.filter(_=>Math.hypot(_[2]-_[0],_[3]-_[1])>.01)}}const go=512,_o=256,$a={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let ra=null,kt=null,ys=null,fd=null;function ud(){if(ra)return;ra=vn(go,_o),kt=ra.getContext("2d");const n=vn(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),fd=kt.createPattern(n,"repeat"),ys=new Ha(ra),ys.colorSpace=Tn,ys.generateMipmaps=!1,ys.minFilter=We,ys.magFilter=We}function zv(){return ud(),ys}function yo(n){const[t,e,i,s]=$a[n],r=1;return[(t+r)/go,1-(e+s-r)/_o,(t+i-r)/go,1-(e+r)/_o]}function Bv(n,t,e=1){const[i,s,r,o]=$a[n],a=o/4;return[(i+8)/go,1-(s+a*(t+1)-1)/_o,(i+8+(r-16)*e)/go,1-(s+a*t+2)/_o]}function mu(n,t,e){const[i,s,r,o]=$a[n];kt.save(),kt.beginPath(),kt.rect(i,s,r,o),kt.clip(),kt.fillStyle="#060504",kt.fillRect(i,s,r,o),kt.fillStyle="#ffab1a",kt.font=`400 30px ${Ji}`,kt.textBaseline="middle";const a=o/4;t.slice(0,3).forEach((l,c)=>{const f=s+a*(c+.5)+2;kt.textAlign="left",kt.fillText(l.l||"",i+10,f,l.r?r-110:r-20),l.r&&(kt.textAlign="right",kt.fillText(l.r,i+r-10,f))}),kt.textAlign="center",kt.fillText(e||"",i+r/2,s+a*3.5+1,r-20),kt.fillStyle=fd,kt.fillRect(i,s,r,o),kt.restore()}function gu(n,t,e){const[i,s,r,o]=$a[n],a=i+r/2,l=s+o/2,c=r*.46;kt.save(),kt.beginPath(),kt.rect(i,s,r,o),kt.clip(),kt.fillStyle="#1a1b1c",kt.fillRect(i,s,r,o),kt.fillStyle=e?"#e8e2cc":"#f2efe4",kt.beginPath(),kt.arc(a,l,c,0,7),kt.fill(),kt.strokeStyle="#14213d",kt.lineWidth=3,kt.beginPath(),kt.arc(a,l,c-1.5,0,7),kt.stroke(),kt.strokeStyle="#111";for(let u=0;u<12;u++){const p=u/12*Math.PI*2,m=c*(u%3===0?.74:.82);kt.lineWidth=u%3===0?4:2,kt.beginPath(),kt.moveTo(a+Math.sin(p)*m,l-Math.cos(p)*m),kt.lineTo(a+Math.sin(p)*c*.9,l-Math.cos(p)*c*.9),kt.stroke()}const f=(u,p,m,_)=>{const d=u*Math.PI*2;kt.strokeStyle=_,kt.lineWidth=m,kt.lineCap="round",kt.beginPath(),kt.moveTo(a-Math.sin(d)*p*.15,l+Math.cos(d)*p*.15),kt.lineTo(a+Math.sin(d)*p,l-Math.cos(d)*p),kt.stroke()},h=(t%43200+43200)%43200;f(h/43200,c*.5,5,"#111"),f(h%3600/3600,c*.74,3.5,"#111"),f(Math.floor(h%60)/60,c*.8,1.6,"#b3261e"),kt.fillStyle="#b3261e",kt.beginPath(),kt.arc(a,l,4,0,7),kt.fill(),kt.restore()}function Hv(n){ud(),mu("board",n.rows||[],n.footer||""),mu("board2",n.rows2||[],n.footer2||""),gu("clock",n.tod||0,!1),gu("clockBack",n.todBack||0,!0),ys.needsUpdate=!0}const La="#16213f",Wc="#1c3f94",hd="#f6f6f1";function Gv(n,t,e,i,s,r,o={}){n.save(),n.translate(e,i),n.rotate(s?-.87:.87),n.font=`400 ${r}px ${re}`,n.textBaseline="middle",n.textAlign="left";const a=t.split(" ");let l=[t];if(t.length>12&&a.length>1){let f=1,h=1/0;for(let u=1;u<a.length;u++){const p=Math.abs(a.slice(0,u).join(" ").length-a.slice(u).join(" ").length);p<h&&(h=p,f=u)}l=[a.slice(0,f).join(" "),a.slice(f).join(" ")]}const c=r*.9;if(o.current){const f=Math.max(...l.map(h=>n.measureText(h).width));n.fillStyle=Wc,n.fillRect(c-r*.35,-r*.62*l.length,f+r*.7,r*1.24*l.length)}n.fillStyle=o.current?"#fff":o.odd?"#7a0f18":La,l.forEach((f,h)=>n.fillText(f,c,(h-(l.length-1)/2)*r*1.05)),n.restore()}function dd(n,t,e,i={}){const{edgware:s,barnet:r,charingX:o,bank:a,morden:l,battersea:c}=Jh;n.fillStyle=hd,n.fillRect(0,0,t,e);const f=Math.max(2,e*.03);n.strokeStyle="#5f6467",n.lineWidth=f,n.strokeRect(f/2,f/2,t-f,e-f),n.fillStyle="#000",n.fillRect(t*.845,e*.7,t*.14,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",xe(n,"Northern line",t*.125,e*.12,re),n.fillText("Northern line",t*.915,e*.805);const h=r.length,u=h+1+o.length,p=u+1+l.length,m=t*.03,_=t*.925/(p-1),d=D=>m+D*_,g=e*.44,S=e*.57,y=Math.max(2,e*.022),b=e*.054,A=Math.max(2,e*.022),M=D=>{n.strokeStyle="#000",n.lineWidth=A,n.lineJoin="round",n.beginPath(),D.forEach((k,N)=>N?n.lineTo(k[0],k[1]):n.moveTo(k[0],k[1])),n.stroke()},T=D=>d(D+1),w=D=>d(D*.93);M([[T(0),g],[d(p-1),g]]),M([[w(0),S],[d(h)-_*.75,S],[d(h),g]]),M([[d(h),g],[d(h)+_*.75,S],[d(u)-_*.75,S],[d(u),g]]),M([[d(u),g],[d(u)+_*.75,S],[d(u+2),S]]);const v=w(r.indexOf(Ra.at)),x=(g+S)/2;M([[v,S],[v+_*.3,x]]),M([[v+_*.3-y,x],[v+_*.3+y,x]]),n.fillStyle=La,n.textAlign="left",n.textBaseline="middle",n.font=`400 ${b*.82}px ${re}`,n.fillText(Ra.name,v+_*.3+y*1.8,x);const E=i.current,P=(D,k,N,B,U={})=>{const R=!!qa[D]||D===E||D==="Camden Town"||D==="Kennington";n.strokeStyle="#000",n.lineWidth=A*.7,R?(n.fillStyle=D===E?Wc:"#fff",n.beginPath(),n.arc(k,N,y*1.35,0,7),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(k,N),n.lineTo(k,N+(B?-y*1.6:y*1.6)),n.stroke()),Gv(n,D,k,N+(B?-y*2.2:y*2.2),B,b,{current:D===E,odd:U.odd})};s.forEach((D,k)=>P(D,T(k),g,!0)),P("Camden Town",d(h),g,!0),o.forEach((D,k)=>P(D,d(h+1+k),g,!0)),P("Kennington",d(u),g,!0),l.forEach((D,k)=>P(D,d(u+1+k),g,!0)),r.forEach((D,k)=>P(D,w(k),S,!1)),a.forEach((D,k)=>P(D,d(h+1+k*.94+.2),S,!1)),c.forEach((D,k)=>P(D,d(u+1+k),S,!1));for(const[D,k]of i.ghosts||[]){const N=s.indexOf(k),B=r.indexOf(k),U=a.indexOf(k);N>=0?P(D,T(N+.5),g,!0,{odd:!0}):B>=0?P(D,w(B+.5),S,!1,{odd:!0}):U>=0&&P(D,d(h+1+(U+.5)*.94+.2),S,!1,{odd:!0})}const L=[[s,T],[["Camden Town"],()=>d(h)],[o,D=>d(h+1+D)]];for(const[D,k]of L){const N=D.indexOf(E);if(N<0)continue;const B=k(N);n.fillStyle=Wc,n.beginPath(),n.moveTo(B,g+y*2.2),n.lineTo(B-y*1.6,g+y*4.6),n.lineTo(B+y*1.6,g+y*4.6),n.fill(),n.fillRect(B-b*3.4,g+y*4.5,b*6.8,b*1.5),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${b}px ${re}`,n.fillText("You are here",B,g+y*4.5+b*.8)}}function pd(n,t,e,{dir:i="north",arrow:s="right",list:r=""}={}){n.fillStyle=hd,n.fillRect(0,0,t,e),n.fillStyle="#000",n.fillRect(0,0,t,e*.24),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${e*.15}px ${re}`,n.fillText("Northern line",e*.16,e*.13);const o=s!=="right";uo(n,o?e*.42:t-e*.42,e*.58,e*.42,s,La);const a=o?e*.8:e*.16,l=o?t-e*.16:t-e*.8,c=`${Sr(i)} platform ${Cs(i)}`;n.fillStyle=La,n.textAlign=o?"left":"right",xe(n,c,l-a,e*(r?.3:.36),re),n.fillText(c,o?a:l,e*(r?.5:.6)),r&&(xe(n,r,l-a,e*.14,Kt),n.fillText(r,o?a:l,e*.8)),n.strokeStyle="#5f6467",n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(1,1,t-2,e-2)}const md=["North End","South Kentish Town","City Road","King William Street","Bull & Bush","Aldwych","Down Street","British Museum","York Road","Brompton Road"],_u={Hampstead:["Heath Street"],"Chalk Farm":["Adelaide Road"],"Mornington Crescent":["Seymour Street","Mornington Cresent"],"Camden Town":["Camden Road"],"Belsize Park":["Belsize"]};function Vv(n,t){const e=[];for(let s=1;s<n.length-1;s++)/[a-z]/.test(n[s])&&/[a-z]/.test(n[s+1])&&n[s]!==n[s+1]&&e.push(s);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function Rf(n,t,e){const i=Math.min(.7,t*.15);if(!e.chance(i))return n;const s=e.next()*Math.min(5,t+1);if(s<1)return Vv(n,e);if(s<1.8){const r=e.int(1,n.length-2);return n.slice(0,r)+n.slice(r+1)}return s<2.8&&_u[n]?e.pick(_u[n]):e.pick(md)}const Cf=n=>md.includes(n),ei=3.5,ri=5,yu=2.95;function Zs(n,t,e,i,s,r,o,a){const l=ri-.03;return n.quad(t,[e+s/2,i,l],[e-s/2,i,l],[e-s/2,i+r,l],[e+s/2,i+r,l],[0,0,-1],o,a),{x:e,y:i+r/2,z:l}}const Wv={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,s=Object.keys(Qr).filter(o=>Qr[o].level<=i&&Qr[o].level>=i-1),r=n.chance(.5);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(s),lie:e==="announce"?n.chance(.3+.12*i):!1,dirs:r?["north","south"]:["south","north"],inverted:n.chance(.4)},exits:[{x:ei,y:0,z:ri/2,yaw:Math.PI/2},{x:-ei,y:0,z:ri/2,yaw:-Math.PI/2}],box:[-ei-.4,-.4,0,ei+.4,3.4,ri+.4]}},build(n){const{b:t,p:e,sheet:i,rng:s,env:r}=n,o=cd(t,{x0:-ei,x1:ei,z0:0,z1:ri,H:yu,portals:[{wall:"S",at:0},{wall:"E",at:ri/2},{wall:"W",at:ri/2}]});t.addPortal(0,0,0,0),t.addPortal(ei,0,ri/2,Math.PI/2),t.addPortal(-ei,0,ri/2,-Math.PI/2),Qn(t,{x:0,y:0,z:0,yaw:0},wt.crown);for(const S of[-1.7,1.7])Ii(t,{x:S,y:0,z:2.2,yaw:Math.PI/2},yu-.02,{power:.6,radius:6.5});const a=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,to:e.dirs[0]},{cx:-1.72,dir:"right",exit:1,to:e.dirs[1]}];for(const S of c){const y=e.correct===S.exit;if(e.kind==="signs"){const b=y?null:e.defect,A=!!e.inverted,M=i.add(250,56,(w,v,x)=>Wa(w,v,x,{dir:S.dir,defect:b,inverted:A})),T=Zs(t,"sheet",S.cx,1.52,1.9,.425,M,l);a.push({...T,r:7,cone:.93,label:"read sign",title:"SIGN",text:jy(b,S.dir,A),junctionSign:!0})}else{const b=vv(r.station,S.to),A=i.add(280,84,(w,v,x)=>pd(w,v,x,{dir:S.to,arrow:S.dir,list:b.join("  ·  ")})),M=Zs(t,"sheet",S.cx,1.44,1.9,.57,A,l),T=`Northern line · ${Sr(S.to)} platform ${Cs(S.to)} · ${b.join(", ")}`;a.push({...M,r:7,cone:.93,label:"read sign",title:"SIGN",text:S.dir==="left"?`← ${T}`:`${T} →`})}if(e.kind==="clock"){const b=!y,A=Zs(t,"dyn",S.cx,2.08,.62,.62,yo(b?"clockBack":"clock"),{emit:1.05});a.push({...A,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:b?"The second hand is ticking backwards.":"The clock is keeping time."})}}const f=Zs(t,"dyn",0,2.12,1.26,.42,yo("board2"),{emit:1.15});a.push({...f,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const h=Rf(r.station,r.wrong,s),u=i.add(200,92,(S,y,b)=>Eo(S,y,b,h)),p=Zs(t,"sheet",0,1.42,1.24,.57,u,null);a.push({...p,r:6,cone:.95,label:"read name",title:"STATION",text:Cf(h)?`${h}. There is no such station on this line.`:h});const m=Zs(t,"cut",0,.62,.34,.68,Nt("helpPoint"),null);a.push({...m,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(S,y,b)=>S.director.helpPoint(b)});const _=wn(n),d=o.walls;if(_.chance(r.boardChance??.2)){const S=_.sign(),y=Tf(n,S*2.95,4.3,S*.63,$h(_,r,e));a.push(y.item),d.push(...y.walls)}const g=[{x0:-ei,x1:ei,z0:.8,z1:ri,fire:(S,y)=>S.director.enterJunction(y)}];return{cells:o.cells,walls:d,items:a,extra:{zones:g}}}},nt={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};nt.back=nt.cx-Math.sqrt(nt.R*nt.R-nt.cy*nt.cy);nt.th0=Math.PI+Math.asin(nt.cy/nt.R);nt.th1=-Math.asin((nt.cy-nt.bed)/nt.R);nt.sCrown=nt.R*(nt.th0-Math.PI/2);nt.wallBed=nt.cx+Math.sqrt(nt.R*nt.R-(nt.cy-nt.bed)**2);nt.track=(nt.edge+nt.wallBed)/2;function gd(n,t){const e=n-nt.cy;return nt.cx+t*Math.sqrt(Math.max(0,nt.R*nt.R-e*e))}const qv=9,$v=10,Xv=nt.R*(Math.PI/2-nt.th1);function vu(n,t,e,i){const s=[];for(let r=0;r<=e;r++){const o=n+(t-n)*r/e;s.push({x:nt.cx+nt.R*Math.cos(o),y:nt.cy+nt.R*Math.sin(o),nx:-Math.cos(o),ny:-Math.sin(o),v:i(o)})}return s}function Yv(n,t,e,i={}){const s=g=>e*g,r=vu(nt.th0,Math.PI/2,qv,g=>.502+.496*(nt.R*(nt.th0-g)/nt.sCrown)),o=vu(Math.PI/2,nt.th1,$v,g=>.002+.496*(nt.R*(Math.PI/2-g)/Xv)),a=Math.round(t/1.5);for(const g of[r,o])for(let S=0;S<a;S++){const y=t*S/a,b=t*(S+1)/a;for(let A=0;A<g.length-1;A++){const M=g[A],T=g[A+1],w=[s(M.nx),M.ny,0],v=[s(T.nx),T.ny,0],x=[(w[0]+v[0])/2,(w[1]+v[1])/2,0];n.quadN("ptile",[s(M.x),M.y,y],[s(M.x),M.y,b],[s(T.x),T.y,b],[s(T.x),T.y,y],x,w,w,v,v,[y/6,M.v,b/6,T.v])}}const l=[0,1,0],c=(g,S,y=0,b=1)=>Aa(g,y,S?.5:0,b,S?1:.5),f=[[nt.back-.05,-.55,g=>c("floor",g)],[-.55,.55,g=>c("floor",g)],...i.plain?[[.55,.95,g=>c("floorDark",g,.5,.9)],[.95,1.05,g=>c("floorDark",g,.9,1)]]:[[.55,.95,()=>Nt("tactile")],[.95,1.05,()=>Vt("yellow")]],[1.05,1.45,g=>c("floorDark",g,.05,.45)],[1.45,nt.edge+.004,()=>Vt("edge")]],h=Math.round(t/.5);for(const[g,S,y]of f)for(let b=0;b<h;b++){const A=t*b/h,M=t*(b+1)/h;n.quad("atlas",[s(g),0,A],[s(S),0,A],[s(S),0,M],[s(g),0,M],l,y(b%2))}const u=Nt("mindgap");for(let g=4.5;g<t-3&&!i.plain;g+=6.5){const S=.85*e;n.quad("atlas",[s(1.07),.004,g-S],[s(1.07),.004,g+S],[s(1.43),.004,g+S],[s(1.43),.004,g-S],l,u)}const p=Math.round(t/2);for(let g=0;g<p;g++){const S=t*g/p,y=t*(g+1)/p;n.quad("atlas",[s(1.56),nt.bed,S],[s(1.56),nt.bed,y],[s(1.56),-.06,y],[s(1.56),-.06,S],[e,0,0],Nt("riser")),n.quad("atlas",[s(1.56),-.06,S],[s(nt.edge),-.06,S],[s(nt.edge),-.06,y],[s(1.56),-.06,y],[0,-1,0],Vt("black")),n.quad("atlas",[s(nt.edge),-.06,S],[s(nt.edge),-.06,y],[s(nt.edge),0,y],[s(nt.edge),0,S],[e,0,0],Vt("edge"))}const m=Nt("ballast");for(let g=0;g<Math.round(t);g++)for(const[S,y]of[[1.5,nt.track],[nt.track,nt.wallBed+.12]])n.quad("atlas",[s(S),nt.bed,g],[s(y),nt.bed,g],[s(y),nt.bed,g+1],[s(S),nt.bed,g+1],l,m);const _=Nt("rail"),d=Vt("steelDark");for(const[g,S]of nt.rails){const y=nt.track+g;for(let b=0;b<t;b+=3){const A=Math.min(t,b+3),M=nt.bed+S,T=.035;n.quad("atlas",[s(y-T),M,b],[s(y+T),M,b],[s(y+T),M,A],[s(y-T),M,A],l,_),n.quad("atlas",[s(y-T),nt.bed,b],[s(y-T),nt.bed,A],[s(y-T),M,A],[s(y-T),M,b],[-e,0,0],d)}}return{back:r,track:o}}const Ee={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},xu=12,oa=5;function aa(n,t,e){const i=[];for(let s=0;s<=oa;s++)i.push({x:n-t,y:e+(Ee.spring-e)*s/oa,ox:-1,oy:0});for(let s=1;s<xu;s++){const r=Math.PI*(1-s/xu);i.push({x:n+t*Math.cos(r),y:Ee.spring+t*Math.sin(r),ox:Math.cos(r),oy:Math.sin(r)})}for(let s=oa;s>=0;s--)i.push({x:n+t,y:e+(Ee.spring-e)*s/oa,ox:1,oy:0});return i}function Su(n,t,e,i,s=!0){const r=v=>i*v,o=nt.track,a=nt.bed,l=a-.3,c=nt.cy+nt.R+.35,f=[aa(o,Ee.hw+Ee.ring*.5,l)];s&&f.push(wt.map(v=>({x:v.x+v.nx*.004,y:v.y+v.ny*.004})));const h=ld(nt.back-.45,nt.cx+nt.R+.35,l,c,f).map(v=>({x:r(v.x),y:v.y}));Ro(n,{x:0,y:0,z:t,yaw:0},e,h,{layer:"tile",grid:.6,uv:(v,x)=>[(v*i+3)/6,.004+.992*x/3.63]});const u=t+e*Ee.proud,p=[0,0,e],m=a-.02,_=aa(o,Ee.hw,m),d=aa(o,Ee.hw+Ee.ring,m),g=[Aa("brick",0,0,.5,1),Aa("brick",.5,0,1,1)],S=Vt("soot");for(let v=0;v<_.length-1;v++){const x=_[v],E=_[v+1],P=d[v+1],L=d[v];n.quad("atlas",[r(x.x),x.y,u],[r(E.x),E.y,u],[r(P.x),P.y,u],[r(L.x),L.y,u],p,g[v%2]);const D=[r((L.ox+P.ox)/2),(L.oy+P.oy)/2,0];n.quad("atlas",[r(L.x),L.y,u],[r(P.x),P.y,u],[r(P.x),P.y,t],[r(L.x),L.y,t],D,S)}const y=aa(o,Ee.hw+.006,m),b=Nt("soot"),A=[[0,.22,.2],[.22,.55,.1],[.55,Ee.depth,.04]];for(const[v,x,E]of A){const P=u-e*v,L=u-e*x;for(let R=0;R<y.length-1;R++){const z=y[R],H=y[R+1],$=[r(-(z.ox+H.ox)/2),-(z.oy+H.oy)/2,0];n.quad("atlas",[r(z.x),z.y,P],[r(H.x),H.y,P],[r(H.x),H.y,L],[r(z.x),z.y,L],$,b,{emit:E})}const D=o-Ee.hw-.01,k=o+Ee.hw+.01,N=v===0?t+e*.2:P,B=a-.003;n.quad("atlas",[r(D),B,N],[r(k),B,N],[r(k),B,L],[r(D),B,L],[0,1,0],Nt("ballast"),{emit:E*1.2});const U=v===0?t:P;for(const[R,z]of nt.rails){const H=o+R,$=a+z,Y=.035;n.quad("atlas",[r(H-Y),$,U],[r(H+Y),$,U],[r(H+Y),$,L],[r(H-Y),$,L],[0,1,0],Nt("rail"),{emit:E*2.4})}}const M=u-e*Ee.depth,T=Ee.spring+Ee.hw+.06,w=Ee.hw+.06;n.quad("atlas",[r(o-w),m,M],[r(o+w),m,M],[r(o+w),T,M],[r(o-w),T,M],p,Vt("blackout"),{emit:0})}function je(n,t,e,i,s,r,o,a,l,c,f=.04){return Es(n,t,e,i,s,r,o,a,l,c,f,1)}function Es(n,t,e,i,s,r,o,a,l,c,f=.05,h=4){const u=-i*e*r/2,p=_=>e*(gd(_,i)-i*f);for(let _=0;_<h;_++){const d=o+(a-o)*_/h,g=o+(a-o)*(_+1)/h,S=l[1]+(l[3]-l[1])*_/h,y=l[1]+(l[3]-l[1])*(_+1)/h,b=p(d),A=p(g),M=(d+g)/2-nt.cy,T=-i*Math.sqrt(Math.max(0,nt.R*nt.R-M*M))/nt.R;n.quad(t,[b,d,s+u],[b,d,s-u],[A,g,s-u],[A,g,s+u],[e*T,-M/nt.R,0],[l[0],S,l[2],y],c)}const m=(o+a)/2;return{x:p(m),y:m,z:s}}function _d(n,t,e,i){const s=_=>t*_,r=nt.back+.14,o=nt.back+.6,a=e-.9,l=e+.9,c=Nt("bench"),f=Vt("steelDark"),h=Math.min(s(r),s(o)),u=Math.max(s(r),s(o));n.box("cut",h,.4,a,u,.46,l,c,null,"xXyYzZ");const p=s(r+.02),m=s(r+.07);n.box("cut",Math.min(p,m),.56,a,Math.max(p,m),.95,l,c,null,"xXYzZ");for(const _ of[a+.12,e,l-.12])n.box("atlas",h+.05,0,_-.03,u-.05,.4,_+.03,f,null,"xXzZ");i.push([s(o+.05),a,s(o+.05),l],[s(r),a,s(o+.05),a],[s(r),l,s(o+.05),l])}function Zv(n,t,e,i,s=null){const{b:r,p:o,sheet:a,rng:l,env:c}=n,f=c.wrong||0,h=c.station,u=o.dir,p=Ao(h,u);let m=null;if(l.chance(Math.min(.85,f*.22))){const x=l.weighted([["ghost",4],["swap",2],["repeat",f>=2?1.5:0],["missing",f>=3?1.5:0]]);m=Ca(p,x,l)||Ca(p,"swap",l)}const _=a.add(360,540,(x,E,P)=>Af(x,E,P,p,{dir:u})),d=Math.min(t*.42,13),g=Es(r,"sheet",e,1,d,1.5,1.14,3.39,_,null,.05,5);i.push({...g,r:13,cone:.93,label:"read line diagram",title:"LINE DIAGRAM",text:sd(h,u,p),fault:m,onRead:x=>{x.state.diagramsRead=(x.state.diagramsRead||0)+1}}),s&&s();const S=[0,1].map(()=>{const x=Rf(h,f,l),E=l.chance(Math.min(.5,f*.14))?l.pick(zh):null;return{text:Cf(x)?`${x}. There is no such station on this line.`:E?`${x} — the roundel is not quite right.`:x,uv:a.add(100,100,(L,D,k)=>Eo(L,D,k,x,{defect:E}))}});let y=0;const b=x=>{const E=S[y++%2],P=je(r,"sheet",e,1,x,.7,1.55,2.25,E.uv,null,.05);i.push({...P,r:10,cone:.96,label:"read name board",title:"STATION",text:E.text})};b(d-1.45),b(d+1.45);const A=[0,1,2].map(()=>{const x=l.chance(Math.min(.7,f*.17));let E;return{uv:a.add(240,140,(L,D,k)=>{E=Ar(L,D,k,l,x,!0)}),text:`${E.headline}. ${E.strap}.`}}),M=3.6,T=6,w=[[2.2,d-2.2],[d+2.2,t-2.2]];let v=0;for(const[x,E]of w){const P=Math.floor((E-x+T)/(M+T));if(P<1)continue;const L=(E-x-M)/Math.max(1,P-1);for(let D=0;D<P;D++){const k=P===1?(x+E)/2:x+M/2+L*D,N=A[v++%3],B=Es(r,"sheet",e,1,k,M,1.22,3.3,N.uv,null,.05,4);i.push({...B,r:10,cone:.95,label:"read poster",title:"ADVERTISEMENT",text:N.text}),D<P-1&&L-M>.9&&b(k+L/2),P===1&&E-x-M>7&&(b((x+k-M/2)/2),b((E+k+M/2)/2))}}return{ads:A.map(x=>x.uv)}}function yd(n,t,e,i,s,r){const o=Math.max(2,t*.022),a=Ms.bar,l="#17191f";n.fillStyle="#6d7275",n.fillRect(0,0,t,e),n.fillStyle=Ms.panel,n.fillRect(o,o,t-2*o,e-2*o);const c=e*.135,f=c*.3;n.fillStyle=a,n.fillRect(o,o,t-2*o,c),n.fillStyle=Ms.panel,n.beginPath(),n.arc(o+c*.62,o+c/2,f*1.42,0,7),n.fill(),wr(n,o+c*.62,o+c/2,f),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle";const h=o+c*1.22;xe(n,i.title,t-o-h-t*.04,c*.46,re),n.fillText(i.title,h,o+c*.53);const u=t*.075,p=o+c+e*.04;n.fillStyle=l,n.textBaseline="alphabetic";const m=xe(n,i.intro,t-2*u,e*.043,Kt,700);n.fillText(i.intro,u,p+m*.8);const _=p+m*1.7,d=e*.905,g=i.rules.length;let S=e*.047,y,b,A,M;for(;n.font=`400 ${S}px ${Kt}`,M=S*1.75,b=S*1.2,A=S*.62,y=i.rules.map(v=>zn(n,v,t-2*u-M)),!(y.reduce((v,x)=>v+x.length*b,0)+A*(g-1)<=d-_||S<5);)S*=.96;let T=_;y.forEach((w,v)=>{n.fillStyle=a,n.beginPath(),n.arc(u+S*.62,T+b*.48,S*.66,0,7),n.fill(),n.fillStyle="#fff",n.textAlign="center",n.font=`700 ${S*.95}px ${Kt}`,n.fillText(String(v+1),u+S*.62,T+b*.48+S*.33),n.fillStyle=l,n.strokeStyle=l,n.lineWidth=S*.035,n.textAlign="left",n.font=`400 ${S}px ${Kt}`,w.forEach((x,E)=>{n.fillText(x,u+M,T+b*(E+.78)),n.strokeText(x,u+M,T+b*(E+.78))}),T+=w.length*b+A}),n.fillStyle=a,n.fillRect(u,e*.925,t-2*u,Math.max(1,e*.004)),n.fillStyle="#4a4f58",xe(n,`${s} · ${i.foot}`,t-2*u,e*.03,Kt,400),n.fillText(`${s} · ${i.foot}`,u,e*.962),r&&Xe(n,o,o,t-2*o,e-2*o,r.int(1,99999),.3,!1)}const bu="THE COMMUTE",jv=[["Tube strike threat over night shifts","Union and bosses to meet for last-ditch talks on Thursday","Commuters could face a 24-hour walkout next week unless a deal is reached. “Nobody wants this,” said both sides, separately.","tunnel"],["Rain, then more rain","Umbrella sales soar as forecasters give up on the weekend","The Met Office says it will stop raining “eventually”. Until then Londoners are advised to carry a brolly and lower their expectations.","rain"],["Commuters face Northern line delays","Signal failure at Camden Town blamed for a morning of misery","Passengers were told to follow the yellow and black signs to the way out and carry on above ground. A good service resumed by ten.","train","yellow"],["House prices up again","A parking space in Hampstead sells for more than a house in Hull","Estate agents called the plot “deceptively spacious” and “moments from the Tube”. It has no roof.","house"],["Fox walks into pub","Regulars at a Chalk Farm local say he stayed for the quiz","The landlord said the fox “kept himself to himself” and left before last orders. He is understood to have come second.","fox"],["Northern line’s old tiles to be saved","Every station has its own colours, and now they are protected","The patterns were designed so passengers could tell stations apart at a glance. “If the colours change, you’ve moved on,” said a heritage officer.","tiles","tiles"],["Lost property drowning in umbrellas","Also handed in this month: a wedding dress, a tuba and “several” false teeth","Staff at Baker Street say nine in ten items are never claimed. “People get off the train and simply forget what they came down with.”","rain"],["Station clocks to be put right on Sunday","Engineers promise every clock on the line will agree by Monday","A spokesman said station clocks “only ever run forwards” and asked anyone who sees one doing otherwise to tell a member of staff.","clock","clock"]],Kv=[["Passenger still missing after last train","Staff searched the station twice. It was longer the second time","Anyone who travelled on the last northbound service is asked to come forward, if they can find the way out.","figure"],["Commuters face Northern line delays","The 23:47 has now been due for eleven days","A spokesman apologised for the inconvenience, and for the announcement, which he said he had not made.","train"],["Rain expected. Nobody has been up to check","Forecasters say conditions above ground “cannot be confirmed”","The last person to go up for a look has not come back down. Colleagues say this is a good sign.","rain"],["Fox seen on platform 2","It was waiting for a train. It let three go by","Witnesses said the fox “seemed to know which way was out” and set off up the line, northwards. Nobody followed it.","fox","line"],["Strike called off: no staff left to strike","Union says its members “went home some time ago”","Announcements continue as normal. Passengers are reminded that staff announcements begin with a rising chime. The others do not.","tunnel","chime"],["Yesterday’s paper printed again today","Readers say they do not mind. Readers say they do not mind","The editor could not be reached for comment, and neither could the stairs to his office.","paper"]],Jv=[["Commuter last seen at Mornington Crescent","Carrying a camcorder. Reading a newspaper","The commuter is described as tired. If you see them, do not approach. If you are them, keep walking up the line.","figure","line"],["Station “has no end”, say staff","“We stopped measuring at Hampstead,” admits surveyor","The way out is believed to still exist. It was last recorded north of here, behind a sign that says exactly “Way out”.","tunnel","yellow"],["You are reading this","And it is reading you. Page 2: what it has learned","Put the paper down. Not there. That is where you found it last time.","eye"],["No news today","Nothing has happened above ground since you came down","This edition will be reprinted until further notice. The date at the top of the page is correct.","blank"]],Yr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],vd=["January","February","March","April","May","June","July","August","September","October","November","December"],la=n=>`${Yr[n.getDay()]} ${n.getDate()} ${vd[n.getMonth()]} ${n.getFullYear()}`;function Qv(n,t,e=new Date){const i=s=>la(new Date(e.getTime()-s*864e5));return n===0?la(e):n===1?t.pick([i(1),i(7),`${la(e)} · ${la(e)}`,`${Yr[e.getDay()]} ${e.getDate()} ${vd[e.getMonth()]}, again`]):t.pick(["Saturday 22 June 1907",i(365*19+t.int(0,300)),`${Yr[e.getDay()]}, ${Yr[e.getDay()]}, ${Yr[e.getDay()]}`])}function tx(n,t){const e=Math.min(.55,Math.max(0,t-2)*.28),i=Math.min(.7,t*.3);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function Pf(n,t,e={}){const i=e.tier??tx(n,t.wrong||0),s=[jv,Kv,Jv][i],r=(t.stretch?t.stretch.id*3:0)+(t.idx||0),[o,a,l,c,f]=s[($e(t.gseed||1,61+i)+r)%s.length],h=Qv(i,n);return{tier:i,name:bu,date:h,head:o,stand:a,para:l,photo:c,clue:f||null,issue:i===2?"No. 0":`No. ${n.int(4100,6900).toLocaleString("en-GB")}`,caption:`${bu} · ${h}
${o.toUpperCase()}
${a}.
${l}`}}const Wi="#2b2b2a",Zr="#8f8f88",$n="#d9d8cf",qc={tunnel(n,t,e,i,s){for(let r=5;r>0;r--)n.fillStyle=r%2?Zr:$n,n.beginPath(),n.arc(t+i/2,e+s*.56,i*.62*r/5,0,7),n.fill();n.fillStyle=Wi,n.beginPath(),n.arc(t+i/2,e+s*.56,i*.1,0,7),n.fill(),n.fillRect(t,e+s*.86,i,s*.14)},train(n,t,e,i,s){qc.tunnel(n,t,e,i,s),n.fillStyle=$n,n.fillRect(t+i*.3,e+s*.3,i*.4,s*.56),n.fillStyle=Wi,n.fillRect(t+i*.34,e+s*.36,i*.13,s*.2),n.fillRect(t+i*.53,e+s*.36,i*.13,s*.2),n.fillStyle="#fff",n.fillRect(t+i*.35,e+s*.7,i*.07,s*.06),n.fillRect(t+i*.58,e+s*.7,i*.07,s*.06)},rain(n,t,e,i,s){n.fillStyle=Wi,n.beginPath(),n.arc(t+i*.5,e+s*.55,i*.3,Math.PI,0),n.fill(),n.fillRect(t+i*.49,e+s*.55,i*.025,s*.34),n.strokeStyle=$n,n.lineWidth=1;for(let r=0;r<16;r++){const o=t+r*37%100/100*i,a=e+r*53%100/100*s*.8;n.beginPath(),n.moveTo(o,a),n.lineTo(o-i*.04,a+s*.14),n.stroke()}},house(n,t,e,i,s){n.fillStyle=$n,n.fillRect(t,e,i,s*.5);for(let r=0;r<3;r++){const o=t+i*(.06+r*.31),a=i*.26;n.fillStyle=r===1?Wi:"#55554f",n.fillRect(o,e+s*.42,a,s*.58),n.beginPath(),n.moveTo(o-1,e+s*.42),n.lineTo(o+a/2,e+s*.18),n.lineTo(o+a+1,e+s*.42),n.fill(),n.fillStyle=$n,n.fillRect(o+a*.3,e+s*.56,a*.4,s*.14)}},fox(n,t,e,i,s){const r=t+i/2,o=e+s*.55,a=Math.min(i,s)*.36;n.fillStyle=Wi,n.beginPath(),n.moveTo(r-a,o-a*.35),n.lineTo(r-a*.75,o-a*1.25),n.lineTo(r-a*.25,o-a*.7),n.lineTo(r+a*.25,o-a*.7),n.lineTo(r+a*.75,o-a*1.25),n.lineTo(r+a,o-a*.35),n.lineTo(r,o+a),n.fill(),n.fillStyle=$n;for(const l of[-1,1])n.beginPath(),n.arc(r+l*a*.4,o-a*.2,a*.11,0,7),n.fill()},tiles(n,t,e,i,s){for(let r=0;r<6;r++)for(let o=0;o<9;o++)n.fillStyle=r===1||r===4?Wi:(o+r)%5===0?Zr:$n,n.fillRect(t+i*(o-r%2*.5)/8+.5,e+s*r/6+.5,i/8-1,s/6-1)},clock(n,t,e,i,s){const r=t+i/2,o=e+s/2,a=Math.min(i,s)*.4;n.fillStyle=$n,n.beginPath(),n.arc(r,o,a,0,7),n.fill(),n.strokeStyle=Wi,n.lineWidth=Math.max(1,a*.1),n.beginPath(),n.arc(r,o,a,0,7),n.stroke(),n.beginPath(),n.moveTo(r,o),n.lineTo(r,o-a*.7),n.moveTo(r,o),n.lineTo(r+a*.45,o+a*.2),n.stroke()},figure(n,t,e,i,s){n.fillStyle="#6d6d68",n.fillRect(t,e,i,s),n.fillStyle=$n,n.beginPath(),n.moveTo(t,e+s),n.lineTo(t+i*.42,e+s*.5),n.lineTo(t+i*.58,e+s*.5),n.lineTo(t+i,e+s),n.fill(),n.fillStyle="#0d0d0d";const r=t+i*.5,o=e+s*.62,a=s*.2;n.beginPath(),n.ellipse(r,o-a*1.25,a*.2,a*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(r-a*.32,o),n.lineTo(r-a*.22,o-a),n.lineTo(r+a*.22,o-a),n.lineTo(r+a*.32,o),n.fill()},paper(n,t,e,i,s){for(let r=0;r<4;r++){const o=.78**r,a=i*.5*o,l=s*.86*o,c=t+i/2-a/2,f=e+s/2-l/2;n.fillStyle=$n,n.fillRect(c,f,a,l),n.fillStyle=Wi,n.fillRect(c,f,a,l*.16),n.fillRect(c+a*.1,f+l*.24,a*.8,l*.08),n.fillStyle=Zr,n.fillRect(c+a*.1,f+l*.4,a*.8,l*.5)}},eye(n,t,e,i,s){const r=t+i/2,o=e+s/2;n.fillStyle=$n,n.beginPath(),n.ellipse(r,o,i*.4,s*.3,0,0,7),n.fill(),n.fillStyle=Zr,n.beginPath(),n.arc(r,o,s*.24,0,7),n.fill(),n.fillStyle="#0d0d0d",n.beginPath(),n.arc(r,o,s*.12,0,7),n.fill()},blank(){}};function Mu(n,t,e,i,s,r,o){n.fillStyle="rgba(40,40,38,0.62)";let a=r.int(3,6);for(let l=e;l+o*.5<=e+s;l+=o)a--,n.fillRect(t,l,a===0?i*r.range(.3,.75):i*r.range(.93,1),Math.max(1,o*.42)),a===0&&(a=r.int(3,6),l+=o*.5)}function xd(n,t,e,i,s){const r=t*.045,o="#161616";n.fillStyle=i.tier===2?"#ddd7c4":"#e9e6db",n.fillRect(0,0,t,e);const a=e*.135,l=e*.05;n.fillStyle="#d21f26",n.fillRect(0,0,t,a),n.save(),n.translate(t/2,a*.54),n.transform(1,0,-.16,1,0,0),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",xe(n,i.name,t*.86,a*.86,re),n.fillText(i.name,0,0),n.restore(),n.fillStyle="#0c2f7a",n.fillRect(0,a,t,l),n.textBaseline="middle",n.textAlign="left",n.fillStyle="#fff",xe(n,i.date,t*.66,l*.72,Kt,700),n.fillText(i.date,r,a+l*.54,t*.7),n.textAlign="right",n.fillStyle="#ffd329",n.font=`700 ${l*.72}px ${Kt}`,n.fillText("FREE",t-r,a+l*.54);const c=i.head.toUpperCase(),f=a+l+e*.02,h=e*.235;let u=e*.125,p;for(;n.font=`400 ${u}px ${re}`,p=zn(n,c,t-2*r),!(p.length<=3&&p.length*u*.98<=h&&p.every(v=>n.measureText(v).width<=t-2*r)||u<6);)u*=.94;n.fillStyle=o,n.textAlign="left",n.textBaseline="alphabetic",p.forEach((v,x)=>n.fillText(v,r,f+u*(.84+x*.98)));let m=f+p.length*u*.98+e*.012;const _=Math.max(5,e*.04);n.font=`700 ${_}px ${Kt}`;const d=zn(n,i.stand,t-2*r).slice(0,3);d.forEach((v,x)=>n.fillText(v,r,m+_*(.85+x*1.12))),m+=d.length*_*1.12+e*.014,n.fillStyle=o,n.fillRect(r,m,t-2*r,Math.max(1,e*.004)),m+=e*.014;const g=(t-2*r)*.6,S=Math.min(e*.26,(e-m)*.55),y=Math.max(2.4,e*.0165);n.save(),n.beginPath(),n.rect(r,m,g,S),n.clip(),n.fillStyle=Zr,n.fillRect(r,m,g,S),(qc[i.photo]||qc.blank)(n,r,m,g,S),n.fillStyle="rgba(233,230,219,0.28)";for(let v=m;v<m+S;v+=2)for(let x=r+((v-m)%4?1:0);x<r+g;x+=2)n.fillRect(x,v,1,1);n.restore(),n.strokeStyle=o,n.lineWidth=.6,n.strokeRect(r,m,g,S);const b=t*.03,A=(t-2*r-2*b)/3;Mu(n,r+g+b,m,t-2*r-g-b,S,s,y);const M=m+S+e*.02,T=e*.955;for(let v=0;v<3;v++)Mu(n,r+v*(A+b),M,A,T-M,s,y);n.fillStyle=o,n.font=`700 ${Math.max(4,e*.026)}px ${Kt}`,n.textAlign="right",n.fillText(`${i.issue} · Turn to page 2`,t-r,e*.985);const w=n.createLinearGradient(0,e*.47,0,e*.56);w.addColorStop(0,"rgba(0,0,0,0)"),w.addColorStop(.35,"rgba(255,255,255,0.3)"),w.addColorStop(.5,"rgba(0,0,0,0.2)"),w.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=w,n.fillRect(0,e*.47,t,e*.09),Xe(n,0,0,t,e,s.int(1,99999),i.tier?.8:.45,!1)}const Tu=[150,194],js=.31,Ks=.4,Js=3,fs=4,ex={tint:[.8,.78,.72]},Sd=(n,t)=>n.sheet.add(Tu[0],Tu[1],(e,i,s)=>xd(e,i,s,t,wn(n)));function $c(n,t,e,i,s,r,o,a={}){const{b:l}=n,c=wn(n),f=a.floor?.006:.004,h=a.floor?.005:.009,u=[],p=[c.pick([0,Js]),c.pick([0,fs])];for(let A=0;A<=fs;A++){u.push([]);for(let M=0;M<=Js;M++){let T=f+c.range(0,h);A===fs/2&&(T+=a.floor?.004:.012),M===p[0]&&A===p[1]&&(T+=a.floor?.012:.04),u[A].push(T)}}l.place(t,e,i,s);const m=A=>js/2-js*A/Js,_=A=>-Ks/2+Ks*A/fs,d=o[2]-o[0],g=o[3]-o[1];for(let A=0;A<fs;A++)for(let M=0;M<Js;M++)l.quad("sheet",[m(M),u[A][M],_(A)],[m(M+1),u[A][M+1],_(A)],[m(M+1),u[A+1][M+1],_(A+1)],[m(M),u[A+1][M],_(A+1)],[0,1,0],[o[0]+d*M/Js,o[1]+g*A/fs,o[0]+d*(M+1)/Js,o[1]+g*(A+1)/fs],a.floor?{tint:[.86,.85,.82]}:null);const S=c.range(.008,.022)*c.sign(),y=-c.range(.008,.02),b=.002;return l.quad("atlas",[js/2+S,b,-Ks/2+y],[-js/2+S,b,-Ks/2+y],[-js/2+S,b,Ks/2+y],[js/2+S,b,Ks/2+y],[0,1,0],Vt("white"),ex),l.setXf(null),{x:t,y:e+.02,z:i,n:a.n||[0,0],r:3.4,cone:.86,label:"read newspaper",title:"NEWSPAPER",text:r.caption,paper:{tier:r.tier,clue:r.clue,floor:!!a.floor}}}function nx(n,t,e){const{b:i,p:s,sheet:r,rng:o,env:a}=n,l=[],c=[],f=[],h=a.wrong||0,u=a.station,p=s.dir,m=Z=>e*Z,_=Math.round((t-6)/4.5)*3+1;for(let Z=0;Z<_;Z++){const O=3+(t-6)*Z/(_-1),ut=Z%3===0,ht=Math.floor(Z/3);Ii(i,{x:m(.5),y:0,z:O,yaw:0},3.45,{dead:s.dark&&ht%3!==1,flick:s.faulty===ht,noLight:!ut,power:.62,radius:9.5,len:1.25})}const d=uv(u),g=Math.min(5,1+.2*(d.length+2*d.split(" ").length)),S=h>=1.5&&o.chance(Math.min(.8,h*.2))?o.shuffle(Ef).slice(0,o.int(1,2)):[],y=r.add(800,168,(Z,O,ut)=>dd(Z,O,ut,{current:u,ghosts:S})),b=r.add(512,Math.round(512*.53/g),(Z,O,ut)=>qh(Z,O,ut,d,a.theme));let A=null,M=null,T=null;const w=Zv(n,t,e,l,()=>{const Z=wn(n);if(s.start&&(T=r.add(288,360,(O,ut,ht)=>yd(O,ut,ht,ho,u,Z))),s.start||Z.chance(a.boardChance??.4)){const O=bf(Z,a,{cheery:s.start});A={th:O,face:Mf(n,O)}}s.start||(M=r.reserve(168,216))}),v=Z=>{const O=(ht,Rt,dt)=>Wh(ht,Rt,dt,Z,o),ut=M;return M=null,ut?r.paint(ut,O):r.add(168,216,O)},x=e>0?"left":"right",E=[r.add(384,36,(Z,O,ut)=>tu(Z,O,ut,u,{arrow:x})),r.add(384,36,(Z,O,ut)=>tu(Z,O,ut,u,{note:u==="Camden Town"?"Edgware branch":""}))];let P=0;for(let Z=1.5;Z<t-1;Z+=3,P++)je(i,"sheet",e,-1,Z,3,2.47,2.75,E[P%2],null,.03);const L=[0,1].map(()=>{const Z=Rf(u,h,o),O=o.chance(Math.min(.6,h*.16))?o.pick(zh):null;return{text:Cf(Z)?`${Z}. There is no such station on this line.`:O?`${Z} — the roundel is not quite right.`:Z,uv:r.add(150,183,(ht,Rt,dt)=>Eo(ht,Rt,dt,Z,{defect:O}))}}),D=[0,1].map(()=>{const Z=o.chance(Math.min(.7,h*.17));let O;return{uv:r.add(112,168,(ht,Rt,dt)=>{O=Ar(ht,Rt,dt,o,Z,!0)}),text:`${O.headline}. ${O.strap}.`}});let k=0;const N=["roundel","name","poster","roundel","strip","roundel","name","poster","help"];s.start&&N.splice(1,0,"info");const B={roundel:1.15,poster:1,name:g,strip:4.4,info:1.4,help:.34},U=1,R=[];let z=null,H=3,$=0,Y=0;for(;$<40;){const Z=N[$%N.length],O=B[Z];if(Z==="info"&&$>1){$++;continue}if(H+O>t-2.6)break;if(Z==="poster"&&A&&H+O>t-4.8){$++;continue}const ut=H+O/2;if(Z==="roundel"){const ht=L[Y++%2],Rt=je(i,"sheet",e,-1,ut,O,.85,2.25,ht.uv);l.push({...Rt,r:6,label:"read name board",title:"STATION",text:ht.text})}else if(Z==="poster"){const ht=D[k++%2],Rt=je(i,"sheet",e,-1,ut,O,.62,2.12,ht.uv);l.push({...Rt,r:5,label:"read poster",title:"POSTER",text:ht.text})}else if(Z==="name"){const ht=je(i,"sheet",e,-1,ut,O,1.72,2.25,b,null,.025);l.push({...ht,r:7,label:"read tiles",title:"TILED NAME",text:`· ${d.toUpperCase().split(" ").join(" · ")} ·${d!==u?` (the frieze says ${u})`:""}`}),_d(i,e,ut,c),R.push(ut)}else if(Z==="strip"){const ht=je(i,"sheet",e,-1,ut,O,1,1.92,y);l.push({...ht,r:6,cone:.92,label:"read line map",title:"NORTHERN LINE",text:Mv(u,S)})}else if(Z==="info"){const ht=Es(i,"sheet",e,-1,ut,O,.5,2.25,T,null,.04,3);l.push({...ht,r:5.5,n:[e,0],label:"read customer information",title:"CUSTOMER INFORMATION",text:Wy(),clue:!0,info:!0,onRead:Rt=>ho.keys.forEach(dt=>Rt.story.noticeRead(dt))}),z={x:m(.3),z:ut,yaw:-e*Math.PI/2}}else{const ht=je(i,"cut",e,-1,ut,O,.7,1.38,Nt("helpPoint"));l.push({...ht,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(Rt,dt,qt)=>Rt.director.helpPoint(qt)})}H+=O+U,$++}if(!s.start&&o.chance(.3)){const Z=rd(n),O=v(Z),ut=je(i,"sheet",e,-1,1.9,.5,.95,1.6,O,{tint:[1.1,1.1,1.1]});l.push({...ut,r:4.5,label:"read notice",title:Z.title,text:Z.text,clue:!0,onRead:ht=>ht.story.noticeRead(Z.key)})}if(A){const Z=Tf(n,m(nt.back+.62),t-1.9,-e*.5,A.th,0,A.face);l.push(Z.item);for(const O of Z.walls)c.push(O)}const G=yo("board"),K=Jr(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,G,G,{emit:1.2},m(.15));l.push({...K,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const at=!!(a.stretch&&a.stretch.clocksBack),st=yo(at?"clockBack":"clock"),xt=Jr(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,st,st,{emit:1.05},m(1.2));l.push({...xt,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:at?"The second hand is ticking backwards.":"The clock is keeping time."});const At=r.add(250,56,(Z,O,ut)=>Wa(Z,O,ut,{dir:"up"})),Ft=r.add(250,56,(Z,O,ut)=>Rr(Z,O,ut,`${Sr(p)} platform ${Cs(p)}`,{sub:"Northern line",bg:"#f6f6f1",fg:"#16213f"})),Yt=Jr(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,At,Ft,{emit:1.25},m(0));l.push({...Yt,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"});const Ot=wn(n);if(R.length&&!s.train&&Ot.chance(a.paperChance??.3)){const Z=Pf(Ot,a),O=Sd(n,Z),ut=Ot.pick(R),ht=Ot.chance(.25),Rt=-e*Math.PI/2+Ot.range(-.4,.4),dt=[e,0];ht?l.push($c(n,m(nt.back+Ot.range(.85,1.05)),0,ut+Ot.sign()*Ot.range(.3,1.2),Rt+Ot.range(-.5,.5),Z,O,{floor:!0,n:dt})):l.push($c(n,m(nt.back+.41),.46,ut+Ot.range(-.6,.6),Rt,Z,O,{n:dt}))}if(i.quad("atlas",[m(nt.track+.98),.9,t+.4],[m(nt.track+1.13),.9,t+.4],[m(nt.track+1.13),1.05,t+.4],[m(nt.track+.98),1.05,t+.4],[0,0,-1],Vt("white"),{emit:1.6,tint:[1,.12,.08]}),s.figure){const Z=m(.75),O=t-7;i.quad("figure",[Z+.3,0,O],[Z-.3,0,O],[Z-.3,1.78,O],[Z+.3,1.78,O],[0,0,-1],Nt("figure"),{emit:.02}),f.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(ut,ht)=>ut.director.events.figureGone(ht)})}return{items:l,walls:c,zones:f,spawn:z,art:{strip:y,ads:w.ads}}}const ix=[["#7d3327","#e2d3a8","#2b3550"],["#2b3550","#e0d2ab","#8a3a2c"],["#4f5a34","#e4d7b0","#6e2f25"],["#a47a2c","#efe3bf","#2b3550"]],Eu={cup(n,t,e,i,s,r){n.fillStyle=r,n.beginPath(),n.moveTo(t-i*.7,e-i*.3),n.lineTo(t-i*.5,e+i*.6),n.lineTo(t+i*.5,e+i*.6),n.lineTo(t+i*.7,e-i*.3),n.fill(),n.strokeStyle=r,n.lineWidth=i*.14,n.beginPath(),n.arc(t+i*.78,e+i*.1,i*.28,-1.2,1.4),n.stroke(),n.lineWidth=i*.08;for(const o of[-.25,.2])n.beginPath(),n.moveTo(t+i*o,e-i*.5),n.quadraticCurveTo(t+i*(o+.25),e-i*.8,t+i*o,e-i*1.1),n.stroke()},sun(n,t,e,i,s,r){n.fillStyle=r;for(let o=0;o<12;o++){const a=o/12*Math.PI*2;n.beginPath(),n.moveTo(t,e),n.lineTo(t+Math.cos(a-.09)*i*1.3,e+Math.sin(a-.09)*i*1.3),n.lineTo(t+Math.cos(a+.09)*i*1.3,e+Math.sin(a+.09)*i*1.3),n.fill()}n.fillStyle=s,n.beginPath(),n.arc(t,e,i*.62,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(t,e,i*.48,0,7),n.fill()},hill(n,t,e,i,s,r){n.fillStyle=r,n.beginPath(),n.moveTo(t-i*1.5,e+i*.7),n.quadraticCurveTo(t-i*.4,e-i*.9,t+i*.3,e+i*.1),n.quadraticCurveTo(t+i*.9,e-i*.5,t+i*1.5,e+i*.7),n.fill(),n.fillRect(t-i*.2,e-i*.75,i*.1,i*.5),n.beginPath(),n.arc(t-i*.15,e-i*.85,i*.3,0,7),n.fill()},star(n,t,e,i,s,r){n.fillStyle=r;for(const[o,a,l]of[[0,0,1],[-1,-.5,.5],[.95,-.6,.6],[.7,.6,.4]]){n.beginPath();for(let c=0;c<10;c++){const f=-Math.PI/2+c/10*Math.PI*2,h=(c%2?.4:1)*i*l;n.lineTo(t+o*i+Math.cos(f)*h,e+a*i+Math.sin(f)*h)}n.fill()}},bottle(n,t,e,i,s,r){n.fillStyle=r,n.fillRect(t-i*.38,e-i*.3,i*.76,i*1.1),n.fillRect(t-i*.14,e-i*.95,i*.28,i*.7),n.fillStyle=s,n.fillRect(t-i*.28,e,i*.56,i*.45)}};function sx(n,t,e,i,s){const[r,o,a]=i,[l,c,f]=s.pick(ix);n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=l,n.lineWidth=Math.max(2,t*.025),n.strokeRect(t*.05,t*.05,t*.9,e-t*.1),n.fillStyle=l,n.fillRect(t*.05,t*.05,t*.9,e*.44),(Eu[a]||Eu.sun)(n,t/2,e*.27,Math.min(t,e)*.17,l,c),n.fillStyle=l,n.textAlign="center",n.textBaseline="alphabetic";let h=e*.105,u;for(;n.font=`400 ${h}px ${re}`,u=zn(n,r.toUpperCase(),t*.8),!(u.length<=2||h<6);)h*=.92;u.forEach((S,y)=>n.fillText(S,t/2,e*.6+y*h*1.05,t*.84)),n.fillStyle=f,n.fillRect(t*.3,e*.6+u.length*h*1.05-h*.55,t*.4,Math.max(1,e*.008));let p=e*.05,m;for(;n.font=`700 ${p}px ${Kt}`,m=zn(n,o,t*.78),!(m.length<=3||p<5);)p*=.92;m.forEach((S,y)=>n.fillText(S,t/2,e*.64+u.length*h*1.05+y*p*1.2)),n.fillStyle="rgba(214,203,170,0.5)",n.fillRect(0,0,t,e);for(let S=0;S<5;S++){const y=s.range(0,t),b=s.range(0,e),A=s.range(t*.15,t*.45),M=n.createRadialGradient(y,b,A*.6,y,b,A);M.addColorStop(0,"rgba(70,55,30,0)"),M.addColorStop(.85,"rgba(70,55,30,0.16)"),M.addColorStop(1,"rgba(70,55,30,0)"),n.fillStyle=M,n.fillRect(y-A,b-A,A*2,A*2)}n.clearRect(0,0,0,0);const _=s.chance(.5)?0:t,d=t*s.range(.18,.34),g=e*s.range(.1,.2);n.fillStyle="#b9b094",n.beginPath(),n.moveTo(_,0),n.lineTo(_===0?d:t-d,0),n.lineTo(_,g),n.fill(),Xe(n,0,0,t,e,r.length*19+7,1.2,!0)}function rx(n,t,e,i,s,r=.72){n.fillStyle=i,n.globalAlpha=r,n.fillRect(0,0,t,e),n.globalAlpha=1;for(let o=0;o<40;o++){const a=s.range(0,e),l=s.range(0,t);n.fillStyle=`rgba(${s.chance(.5)?"255,250,230":"70,60,40"},${s.range(.03,.09)})`,n.fillRect(l,a,s.range(t*.1,t*.5),s.range(1,3))}}function ox(n,t,e,i){n.fillStyle="#6d6558",n.fillRect(0,0,t,e);const s=e/22,r=s*2.9;for(let a=0;a<22;a++)for(let l=a%2?-r/2:0;l<t;l+=r){const c=i.range(-14,14);n.fillStyle=`rgb(${112+c},${62+c*.6},${48+c*.5})`,n.fillRect(l+.8,a*s+.8,r-1.6,s-1.6)}const o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(20,16,10,0.45)"),o.addColorStop(.4,"rgba(20,16,10,0.12)"),o.addColorStop(1,"rgba(20,16,10,0.3)"),n.fillStyle=o,n.fillRect(0,0,t,e),Xe(n,0,0,t,e,1924,1,!0)}function ax(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#3d3f3c",n.lineWidth=1.3;const i=e/5;n.save(),n.beginPath(),n.rect(2,2,t-4,e-4),n.clip();for(let s=-e;s<t+e;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+e,e),n.stroke(),n.beginPath(),n.moveTo(s+e,0),n.lineTo(s,e),n.stroke();n.restore(),n.strokeStyle="#4a2a22",n.lineWidth=5,n.strokeRect(2.5,2.5,t-5,e-5),n.strokeStyle="rgba(255,220,190,0.18)",n.lineWidth=1,n.strokeRect(1.5,1.5,t-3,e-3),n.fillStyle="#4a2a22",n.fillRect(t/2-2,0,4,e)}function lx(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#2f3330",n.fillRect(0,0,t,e*.07),n.fillRect(0,e*.5,t,e*.05);for(let i=0;i<=8;i++)n.fillRect((t-4)*(i/8),0,i%4===0?5:2.5,e)}function Xc(n,t,e,i,s=null){n.clearRect(0,0,t,e),n.fillStyle="rgba(214,206,180,0.92)",n.fillRect(0,0,t,e),n.fillStyle="#1b1a17",n.textBaseline="middle",n.textAlign="center";const r=s?e*.9:0,o=xe(n,i,t-r-e*.5,e*.62,Kt,700),a=s==="left"?(t+r)/2:s==="right"?(t-r)/2:t/2;n.fillText(i,a,e*.54),n.fillStyle="rgba(214,206,180,0.95)";const l=n.measureText(i).width;for(let c=a-l/2+o*.33;c<a+l/2;c+=o*.62)n.fillRect(c,e*.54-o*.08,1.3,o*.5);s&&uo(n,s==="left"?r*.55:t-r*.55,e/2,e*.6,s,"#1b1a17"),Xe(n,0,0,t,e,i.length*31+5,.7,!1)}function cx(n,t,e,i,s=null){n.fillStyle="#ecebe2",n.fillRect(0,0,t,e),n.strokeStyle="#161616",n.lineWidth=Math.max(2,e*.06),n.strokeRect(2,2,t-4,e-4),n.fillStyle="#161616",n.textBaseline="middle",n.textAlign="center";const r=s?e*1:0;xe(n,i.toUpperCase(),t-r-e*.6,e*.5,re),n.fillText(i.toUpperCase(),s==="left"?(t+r)/2:s==="right"?(t-r)/2:t/2,e*.55),s&&uo(n,s==="left"?r*.6:t-r*.6,e/2,e*.62,s,"#161616");for(const[o,a]of[[.03,.14],[.97,.14],[.03,.86],[.97,.86]])n.fillStyle="#8b8a80",n.beginPath(),n.arc(t*o,e*a,2,0,7),n.fill();Xe(n,0,0,t,e,i.length*17+3,.6,!1)}function Yc(n,t,e,i,s,r,o){n.fillStyle="#e4dcc0",n.fillRect(0,0,t,e),n.strokeStyle="#2a2620",n.lineWidth=1.5,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#1d1a15",n.textAlign="center",n.textBaseline="alphabetic",xe(n,i,t*.84,e*.085,re),n.fillText(i,t/2,e*.13),n.fillRect(t*.2,e*.155,t*.6,1.2),xe(n,s,t*.84,e*.12,re),n.fillText(s,t/2,e*.29);let a=e*.062,l;for(;n.font=`400 ${a}px ${Kt}`,l=r.flatMap(c=>zn(n,c,t*.8).concat([""])),!(l.length*a*1.2<e*.5||a<5);)a*=.93;n.textAlign="left",l.forEach((c,f)=>n.fillText(c,t*.1,e*.39+f*a*1.2)),n.textAlign="right",n.font=`700 ${e*.05}px ${Kt}`,n.fillText(o,t*.9,e*.94),Xe(n,0,0,t,e,i.length*7+11,1,!0)}function fx(n,t,e,i){n.fillStyle="#e6dfc6",n.fillRect(0,0,t,e),n.strokeStyle="#2a2620",n.lineWidth=1.5,n.strokeRect(3,3,t-6,e-6),n.fillStyle="#1d1a15",n.textAlign="center",n.textBaseline="alphabetic",xe(n,"CAMDEN TOWN DEEP SHELTER",t*.86,e*.12,re),n.fillText("CAMDEN TOWN DEEP SHELTER",t/2,e*.16);const s=t*.1,r=t*.9,o=e*.42,a=e*.66,l=e*.085;n.fillStyle="#c9c0a2";for(const c of[o,a])n.fillRect(s,c-l/2,r-s,l);for(const c of[.25,.5,.75,1])n.fillRect(s+(r-s)*c-(c===1?l*.6:l*.3),o,l*.6,a-o);n.strokeStyle="#1d1a15",n.lineWidth=1;for(const c of[o,a])n.strokeRect(s,c-l/2,r-s,l);n.font=`700 ${e*.055}px ${Kt}`,"ABCDEFGH".split("").forEach((c,f)=>{const h=s+(r-s)*(f%4+.5)/4,u=f<4?o:a;c===i?(n.fillStyle="#a3261c",n.fillRect(h-l*.9,u-l/2+1,l*1.8,l-2),n.fillStyle="#fff"):n.fillStyle="#1d1a15",n.fillText(c,h,u+e*.02)}),n.fillStyle="#1d1a15";for(const[c,f]of[[s,"UNDERHILL ST."],[r,"BUCK ST."]])n.beginPath(),n.arc(c,(o+a)/2,l*.75,0,7),n.fill(),n.font=`700 ${e*.05}px ${Kt}`,n.fillText(f,Math.min(t*.82,Math.max(t*.18,c)),e*.86);n.font=`400 ${e*.045}px ${Kt}`,n.fillText("UPPER AND LOWER DECKS · 8,000 BUNKS",t/2,e*.27),Xe(n,0,0,t,e,77,.9,!0)}function ux(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#4a2f1b",n.fillRect(t*.14,e*.06,t*.72,e*.88),n.fillStyle="rgba(255,220,170,0.12)",n.fillRect(t*.14,e*.06,t*.72,3),n.fillStyle="#17150f";for(const i of[.36,.64])n.beginPath(),n.arc(t*i,e*.2,t*.11,0,7),n.fill();n.fillRect(t*.26,e*.42,t*.48,e*.06),n.fillStyle="#0d0c0a",n.beginPath(),n.roundRect(t*.02,e*.34,t*.2,e*.5,6),n.fill(),n.fillRect(t*.84,e*.5,t*.12,e*.05),n.beginPath(),n.arc(t*.95,e*.525,t*.05,0,7),n.fill(),n.fillStyle="#d8cfae",n.fillRect(t*.3,e*.6,t*.4,e*.2),n.fillStyle="#1d1a15",n.font=`700 ${e*.05}px ${Kt}`,n.textAlign="center",n.textBaseline="middle",n.fillText("WARDEN",t/2,e*.66),n.fillText("1 RING",t/2,e*.74)}function hx(n,t,e){const{b:i,p:s,sheet:r,env:o}=n,a=wn(n),l=o.theme,c=[],f=[],h=[],u=N=>e*N,p=e>0?"left":"right",m=4,_=r.add(512,68,(N,B,U)=>{qh(N,B,U,mo.built,l),rx(N,B,U,"#c4bb9c",a,.66)}),d=r.add(150,183,(N,B,U)=>{Eo(N,B,U,mo.name,{defect:"solid"}),N.fillStyle="rgba(200,190,160,0.38)",N.fillRect(0,0,B,U)}),S=a.shuffle(dn.posters).slice(0,4).map(N=>({spec:N,uv:r.add(120,180,(B,U,R)=>sx(B,U,R,N,a))})),y=r.add(132,168,(N,B,U)=>Yc(N,B,U,...dn.notice)),b=r.add(220,54,(N,B,U)=>yf(N,B,U,"WAY OUT",l,p)),A=r.add(164,33,(N,B,U)=>Xc(N,B,U,"SHELTER")),M=r.add(164,33,(N,B,U)=>Xc(N,B,U,"FIRST AID POST",p)),T={tint:[.9,.88,.82]},w=(N,B)=>c.push({...N,n:[e,0],r:5,...B});w(je(i,"sheet",e,-1,2.4,.45,1,1.57,y,T),{r:4.5,label:"read notice",title:dn.notice[1],text:`${dn.notice[0]}. ${dn.notice[2].join(" ")} ${dn.notice[3]}.`,clue:!1});const v=N=>w(je(i,"sheet",e,-1,N,1.15,.85,2.25,d,T),{r:6,label:"read name board",title:"STATION",text:dn.board}),x=(N,B)=>w(je(i,"sheet",e,-1,N,1,.62,2.12,S[B].uv,T),{label:"read poster",title:"POSTER, 1924",text:`${S[B].spec[0]}. ${S[B].spec[1]}. (Faded almost to nothing.)`}),E=r.add(120,172,(N,B,U)=>ox(N,B,U,a)),P={tint:[.3,.1,.1]},L=Vt("white"),D=N=>{const B=Es(i,"sheet",e,-1,N,1.5,0,2.15,E,null,.035,3);for(const U of[-.8,.8])Es(i,"atlas",e,-1,N+U,.1,0,2.25,L,P,.045,3);je(i,"atlas",e,-1,N,1.7,2.15,2.27,L,P,.045),w(B,{y:1.3,r:4.5,label:"look at archway",title:"ARCHWAY",text:dn.arch,arch:!0})};v(4.2),D(6.6),je(i,"sheet",e,-1,8.7,.9,1.47,1.65,A),w(je(i,"sheet",e,-1,8.7,.9,1.26,1.44,M),{r:4.5,label:"read lettering",title:"STENCILLED ON THE TILES",text:dn.shelter}),x(11,0),w(je(i,"sheet",e,-1,15.5,m,1.72,2.25,_,null,.025),{r:7,label:"read tiles",title:"TILED NAME",text:dn.name}),_d(i,e,15.5,f),x(20,1),v(22.6),w(je(i,"sheet",e,-1,25,1.5,1.3,1.67,b,null,.025),{r:4.5,label:"read tiles",title:"TILED LEGEND",text:dn.legend.replace("→",e>0?"←":"→")}),D(27.6),x(30.6,2),w(Es(i,"sheet",e,1,t*.55,1.6,1.25,3.3,S[3].uv,T,.05,4),{n:[-e,0],r:10,cone:.95,label:"read poster",title:"POSTER, 1924",text:`${S[3].spec[0]}. ${S[3].spec[1]}. (Faded almost to nothing.)`});const k=Nt("lamp");return[3.2,9.8,18.6,24,32.2].forEach((N,B)=>{const U=s.faulty===B-1;je(i,"atlas",e,-1,N,.3,2.28,2.4,k,{emit:1.4,flick:U,tint:[1,.8,.52]},.06),i.addLight(u(gd(2.3,-1)+.6),2.15,N,.78,9,U,[1,.82,.58])}),c.push({x:u(.3),y:.05,z:t*.5,r:3,cone:.8,n:[0,-1],label:"look at floor",title:"DUST",text:dn.dust}),h.push({x0:-9,x1:9,z0:1.2,z1:8,fire:N=>{N.director.setHint(dn.hint,8),N.director.events.glitch(.9),N.state.ghostVisits=(N.state.ghostVisits||0)+1}}),{items:c,walls:f,zones:h,spawn:null,art:null}}const Fn=512,Lf={moquette:[0,0,128,128],floor:[128,0,64,64],floorDark:[192,0,64,64],panel:[256,0,64,64],ceiling:[320,0,64,64],light:[384,0,64,32],plinth:[384,32,64,32],pole:[448,0,24,64],black:[480,0,24,64],louvre:[128,64,128,32],steel:[128,96,64,32],glass:[192,96,64,32],doorIn:[0,128,64,160],doorOut:[64,128,64,160],endDoor:[128,128,64,160],livery:[192,128,32,160],roof:[224,128,32,32],under:[224,160,32,32],red:[224,192,32,32],hoarding:[224,224,32,64],alarm:[256,128,48,48],priority:[304,128,48,48],warning:[352,128,48,48],logo:[400,128,96,48],displayBox:[256,176,96,32],number:[352,176,96,32],seatEnd:[256,208,64,80]},Le=[-.62,1.78],Br="#e9e4d0",dx="#1b2f86";function Zc(n,t,e,i,s,r,o,a){for(let l=0;l<o;l++)n.fillStyle=r.pick(a),n.fillRect(t+r.range(0,i-1),e+r.range(0,s-1),r.range(.8,1.8),r.range(.8,1.8))}function px(n,t,e,i,s,r){n.fillStyle="#2247a8",n.fillRect(t,e,i,s);const o=4,a=i/o,l="#162f78",c="#2d5cc4",f="#4a7ad8";for(let h=0;h<o;h++)for(let u=0;u<o;u++){const p=t+(u+.5)*a,m=e+(h+.5)*a,_=(u+h*2)%4,d=a*.36;n.lineWidth=a*.13,n.strokeStyle=(u+h)%2?l:c,n.fillStyle=(u+h)%2?c:l,_===0?(n.beginPath(),n.arc(p,m,d,.3,Math.PI*1.7),n.stroke()):_===1?(n.fillRect(p-d*.35,m-d,d*.7,d*2),n.fillStyle=f,n.fillRect(p-d*.2,m-d*.8,d*.4,d*.4)):_===2?(n.beginPath(),n.arc(p,m+d*.4,d,Math.PI,0),n.fill(),n.fillRect(p-d*.1,m-d*1,d*.2,d*.5)):(n.fillRect(p-d,m-d*.7,d*.45,d*1.5),n.fillRect(p+d*.55,m-d*.7,d*.45,d*1.5),n.fillRect(p-d,m,d*2,d*.22)),(u*3+h*5)%7===0&&(n.strokeStyle=(u+h)%2?"#d8364a":"#35b9cf",n.lineWidth=a*.07,n.beginPath(),n.arc(p+d*.9,m-d*.9,d*.3,0,7),n.stroke())}Zc(n,t,e,i,s,r,900,["rgba(255,255,255,0.07)","rgba(0,0,20,0.12)"])}function Nl(n,t,e,i,s,r,o){n.fillStyle=r,n.fillRect(t,e,i,s);const a=t+i*(o?.3:.16),l=i*(o?.4:.68),c=e+s*.1,f=s*(o?.5:.42);n.fillStyle="#17191c",n.beginPath(),n.roundRect(a-2,c-2,l+4,f+4,7),n.fill();const h=n.createLinearGradient(0,c,0,c+f);h.addColorStop(0,"#39424a"),h.addColorStop(1,"#14181c"),n.fillStyle=h,n.beginPath(),n.roundRect(a,c,l,f,5),n.fill(),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(a+l*.12,c+3,l*.16,f-6),n.fillStyle="#131416",n.fillRect(t,e,2.5,s),n.fillRect(t+i-2.5,e,2.5,s),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(t,e+s-6,i,6)}function mx(n){const t=new _e(1995),e=s=>Lf[s],i=(s,r)=>{const[o,a,l,c]=e(s);n.fillStyle=r,n.fillRect(o-2,a-2,l+4,c+4)};n.fillStyle="#3a3b3d",n.fillRect(0,0,Fn,Fn),px(n,...e("moquette"),t),i("floor","#b4b7b6"),Zc(n,...e("floor"),t,700,["#8f9291","#d2d5d3","#a3a6a5","#6f7272"]),i("floorDark","#35383d"),Zc(n,...e("floorDark"),t,600,["#23262a","#4b4f55","#b9a53a","#5c6067"]),i("panel",Br);{const[s,r,o,a]=e("panel");n.fillStyle="rgba(0,0,0,0.05)",n.fillRect(s,r+a-3,o,3),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(s,r,o,3)}i("ceiling","#f1efe6"),i("light","#fffdf0"),i("pole",dx),i("black","#17181b"),i("steel","#8d9296"),i("glass","#20262b"),i("roof","#8d9296"),i("under","#131417"),i("red","#d5231d");{const[s,r,o,a]=e("pole");n.fillStyle="rgba(255,255,255,0.28)",n.fillRect(s+o*.3,r,o*.18,a)}{const[s,r,o,a]=e("plinth");n.fillStyle="#4b4f55",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#26282c";for(let l=0;l<9;l++)n.fillRect(s+8+l*5.5,r+8,3,a-16)}{const[s,r,o,a]=e("louvre");n.fillStyle="#2a2c30",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#0f1012";for(let l=0;l<7;l++)n.fillRect(s,r+3+l*4.2,o,2.2)}{const[s,r,o,a]=e("hoarding");n.fillStyle="#11308f",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(s,r,1.5,a),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(s+2,r,2,a)}Nl(n,...e("doorIn"),Br,!1),Nl(n,...e("doorOut"),"#d5231d",!1),Nl(n,...e("endDoor"),Br,!0);{const[s,r,o,a]=e("livery"),l=c=>r+a-(c-Le[0])/(Le[1]-Le[0])*a;n.fillStyle="#15161a",n.fillRect(s-2,l(-.05),o+4,r+a+2-l(-.05)),n.fillStyle="#0c2a8e",n.fillRect(s-2,l(.45),o+4,l(-.05)-l(.45)),n.fillStyle="#f2f2ee",n.fillRect(s-2,l(1.7),o+4,l(.45)-l(1.7)),n.fillStyle="#9da2a6",n.fillRect(s-2,r-2,o+4,l(1.7)-r+2)}{const[s,r,o,a]=e("alarm");n.fillStyle="#c8201c",n.fillRect(s,r,o,a),n.fillStyle="#fff",n.font=`700 9px ${Kt}`,n.textAlign="center",n.fillText("Emergency",s+o/2,r+13),n.fillText("alarm",s+o/2,r+23),n.fillStyle="#7a1210",n.fillRect(s+o*.3,r+a*.58,o*.4,a*.28)}{const[s,r,o,a]=e("priority");n.fillStyle="#1b2f86",n.fillRect(s,r,o,a),n.fillStyle="#fff",n.font=`700 9px ${Kt}`,n.textAlign="center",n.fillText("Priority",s+o/2,r+20),n.fillText("seat",s+o/2,r+31)}{const[s,r,o,a]=e("warning");n.fillStyle=Br,n.fillRect(s,r,o,a),n.fillStyle="#f2c81e",n.beginPath(),n.moveTo(s+o/2,r+5),n.lineTo(s+o-6,r+a-7),n.lineTo(s+6,r+a-7),n.fill(),n.fillStyle="#111",n.fillRect(s+o/2-2,r+18,4,13),n.fillRect(s+o/2-2,r+34,4,4)}{const[s,r,o,a]=e("logo");n.fillStyle="#f2f2ee",n.fillRect(s-2,r-2,o+4,a+4),wr(n,s+o/2,r+a/2,a*.36,{name:"Underground"})}{const[s,r,o,a]=e("displayBox");n.fillStyle="#1b1c1f",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#0a0a0b",n.fillRect(s+4,r+5,o-8,a-10)}{const[s,r,o,a]=e("number");n.fillStyle="#f2f2ee",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#16171a",n.font=`400 22px ${re}`,n.textAlign="center",n.textBaseline="middle",n.fillText("52607",s+o/2,r+a/2+1),n.textBaseline="alphabetic"}{const[s,r,o,a]=e("seatEnd");n.fillStyle=Br,n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#93a3a8",n.fillRect(s+5,r+5,o-10,a*.45),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(s+9,r+7,5,a*.45-4),n.fillStyle="#1b2f86",n.fillRect(s+3,r+3,o-6,2.5)}}let kl=null;function gx(){if(!kl){const n=vn(Fn,Fn);mx(n.getContext("2d")),kl=Ds(n)}return kl}function In(n,t=1.5){const[e,i,s,r]=Lf[n];return[(e+t)/Fn,1-(i+r-t)/Fn,(e+s-t)/Fn,1-(i+t)/Fn]}function on(n){const[t,e,i,s]=Lf[n];return[(t+i*.4)/Fn,1-(e+s*.6)/Fn,(t+i*.6)/Fn,1-(e+s*.4)/Fn]}const bi=512,Da=256,Si={side:[0,0,512,160],front:[0,164,150,92],rear:[154,164,150,92],roof:[310,170,30,30],dark:[350,170,30,30],lamp:[390,170,30,30],tail:[430,170,30,30]},dr=[-.78,1.5];let ca=null,bt=null,no=null;const Qt=n=>160-(n-dr[0])/(dr[1]-dr[0])*160;function wu(n,t,e,i){const s=bt.createLinearGradient(0,Qt(i),0,Qt(e));s.addColorStop(0,"#fff6d6"),s.addColorStop(.55,"#e9dba4"),s.addColorStop(1,"#8c8468"),bt.fillStyle="#1b1c1e",bt.fillRect(n-2,Qt(i)-2,t+4,Qt(e)-Qt(i)+4),bt.fillStyle=s,bt.fillRect(n,Qt(i),t,Qt(e)-Qt(i)),bt.fillStyle="rgba(40,40,60,0.55)",bt.fillRect(n+t*.3,Qt(i),2,Qt(e)-Qt(i)),bt.fillRect(n,Qt(e+.16),t,Qt(e)-Qt(e+.16))}function _x(){const n=60.23529411764706;bt.fillStyle="#15161a",bt.fillRect(0,Qt(-.05),bi,160-Qt(-.05));for(const[e,i]of[[.9,2.3],[6.2,7.6]]){bt.fillStyle="#26282c",bt.fillRect(e*n,Qt(-.25),(i-e)*n,Qt(-.7)-Qt(-.25));for(const s of[e+.35,i-.35])bt.fillStyle="#3a3c40",bt.beginPath(),bt.arc(s*n,Qt(-.48),.27*70,0,7),bt.fill()}bt.fillStyle="#f2f2ee",bt.fillRect(0,0,bi,Qt(.42)),bt.fillStyle="#0c2a8e",bt.fillRect(0,Qt(.42),bi,Qt(-.05)-Qt(.42)),bt.fillStyle="#9da2a6",bt.fillRect(0,0,bi,Qt(1.42));const t=[[.25,.62,"door1"],[1.05,1.3,"win"],[2.5,1.3,"door2"],[3.95,.6,"win"],[4.7,.5,"win"],[5.35,1.3,"door2"],[6.8,1.3,"win"],[8.2,0,""]];for(const[e,i,s]of t)if(s==="win")wu(e*n,i*n,.72,1.3);else if(s){bt.fillStyle="#d5231d",bt.fillRect(e*n,Qt(1.42),i*n,Qt(-.05)-Qt(1.42));const r=s==="door2"?2:1;for(let o=0;o<r;o++){const a=(e+i/r*o)*n,l=i/r*n;wu(a+l*.2,l*.6,.62,1.3),bt.fillStyle="rgba(0,0,0,0.5)",bt.fillRect(a,Qt(1.42),1.5,Qt(-.05)-Qt(1.42))}bt.fillStyle="#e7c21c",bt.fillRect(e*n,Qt(-.02),i*n,3)}wr(bt,4.6*n,Qt(.2)-6,12,{name:""}),bt.fillStyle="rgba(60,45,25,0.16)";for(let e=0;e<260;e++)bt.fillRect(Math.random()*bi,Qt(.5)+Math.random()*(160-Qt(.5)),2,2+Math.random()*5)}function Au(n,t){const[,e,i,s]=Si.front;bt.fillStyle="#d5231d",bt.fillRect(n,e,i,s),bt.fillStyle="#9da2a6",bt.fillRect(n,e,i,s*.06),bt.fillStyle="#101113",bt.fillRect(n+i*.06,e+s*.2,i*.88,s*.34),bt.fillStyle="#2a2f36";for(const[r,o]of[[.09,.36],[.41,.59],[.64,.91]])bt.fillRect(n+i*r,e+s*.23,i*(o-r),s*.28);bt.fillStyle="#101113",bt.fillRect(n+i*.3,e+s*.07,i*.4,s*.11),bt.fillStyle="#101113",bt.fillRect(n,e+s*.86,i,s*.14);for(const r of[.16,.84])bt.fillStyle=t,bt.beginPath(),bt.arc(n+i*r,e+s*.7,s*.055,0,7),bt.fill(),bt.fillStyle="#55120f",bt.beginPath(),bt.arc(n+i*(r<.5?r+.09:r-.09),e+s*.7,s*.04,0,7),bt.fill()}function bd(){if(ca)return;ca=vn(bi,Da),bt=ca.getContext("2d"),bt.fillStyle="#15161a",bt.fillRect(0,0,bi,Da),_x(),Au(Si.front[0],"#fff4c8"),Au(Si.rear[0],"#ff2a1a");const n=(t,e)=>{bt.fillStyle=e,bt.fillRect(t[0]-3,t[1]-3,t[2]+6,t[3]+6)};n(Si.roof,"#8d9296"),n(Si.dark,"#131417"),n(Si.lamp,"#fff6d8"),n(Si.tail,"#ff2a1a"),no=new Ha(ca),no.colorSpace=Tn,no.anisotropy=2}function Md(){return bd(),no}function yx(n){bd();const[t,e,i,s]=Si.front;bt.fillStyle="#0b0a08",bt.fillRect(t+i*.31,e+s*.08,i*.38,s*.09),bt.fillStyle="#ffb21e",bt.textAlign="center",bt.textBaseline="middle";let r=s*.1;bt.font=`400 ${r}px ${Ji}`;const o=bt.measureText(n).width;o>i*.36&&(r*=i*.36/o,bt.font=`400 ${r}px ${Ji}`),bt.fillText(n,t+i*.5,e+s*.128),no.needsUpdate=!0}function vs(n){const[t,e,i,s]=Si[n];return[(t+.5)/bi,1-(e+s-.5)/Da,(t+i-.5)/bi,1-(e+.5)/Da]}const Nn={len:17.77,gap:.25,half:1.315,doorHead:1.88,endDoor:.66},Mn=[[0,1.2,1.315,0],[.85,1.2,1.315,.85],[1.05,1.2,1.315,1.05],[1.38,1.16,1.275,1.4],[1.6,1.07,1.19,1.63],[1.72,1,1.12,1.76],[1.88,.83,.95,1.94],[1.98,.62,.74,2.06],[2.05,.34,.42,2.14],[2.07,0,0,2.175]],vx=1,xx=4,Hr=6,us=Mn.length-1;function Df(n){const t=n==="dm";return{type:n,cab:t?15.9:0,doors:[{z:.97,w:.703},{z:6.11,w:1.406},{z:11.66,w:1.406}].concat(t?[]:[{z:16.8,w:.703}]),windows:[[1.85,3.23],[3.45,4.82],[7.4,8.79],[8.99,10.37],[12.95,14.32],t?[14.54,15.7]:[14.54,15.92]],benches:[[1.52,5.15,7],[7.12,8.14,2,!0],[8.14,9.7,3],[9.7,10.72,2,!0],t?[12.62,15.74,6]:[12.62,16.25,7]]}}function Ru(n,t){const e=[];let i=0;for(const[s,r]of t.slice().sort((o,a)=>o[0]-a[0]))s>i+1e-6&&e.push([i,s]),i=Math.max(i,r);return i<n-1e-6&&e.push([i,n]),e}const Sx=n=>[n.z-n.w/2,n.z+n.w/2];function bx(n,t){const{xc:e,ps:i,z0:s,fy:r}=t,o=Df(t.type),a=Nn.len,l=(M,T,w)=>[e+M,r+T,s+w],c={emit:1},f={emit:.9},h={emit:.72},u={emit:.35},p=on("panel"),m=In("livery"),_=on("roof"),d=M=>m[1]+(m[3]-m[1])*(Math.min(Le[1],M)-Le[0])/(Le[1]-Le[0]),g=o.doors.map(Sx),S=o.windows;for(const M of[-1,1]){for(let w=0;w<us;w++){const v=(at,st)=>st+(st-at)*.005/Math.max(.05,Math.abs(st-at)+.05),[x,E,P,L]=Mn[w],[D,k,N,B]=Mn[w+1],U=w===0?-.02:x,R=w<us-1?D+.004:D,z=w<us-1?B+.004:B,H=w<us-1?v(E,k):k,$=(w<Hr?g:[]).concat(w>=vx&&w<xx?S:[]),Y=[-M*(R-U),H-E,0],G=w===7,K=w>=7;for(const[at,st]of Ru(a,$)){const xt=G?In("light"):K?on("ceiling"):p;n.quad("car",l(M*E,U,at),l(M*E,U,st),l(M*H,R,st),l(M*H,R,at),Y,xt,G?{emit:2}:w===0?f:c);const At=w>=5?_:[m[0],d(L),m[2],d(z)];n.quad("car",l(M*P,L,at),l(M*P,L,st),l(M*N,z,st),l(M*N,z,at),[M,.2,0],At,h)}}n.quad("car",l(M*1.2,Le[0],0),l(M*1.2,Le[0],a),l(M*1.315,0,a),l(M*1.315,0,0),[M,0,0],[m[0],d(Le[0]),m[2],d(0)],h);const T=t.open&&M===i;for(const w of o.doors){const v=w.w>1?[[w.z-w.w/2,w.z,-1],[w.z,w.z+w.w/2,1]]:[[w.z-w.w/2,w.z+w.w/2,w.z<a/2?1:-1]];for(const[L,D,k]of v){const N=T?k*(D-L):0,B=T?.05:.025,U=L+N,R=D+N;for(const[z,H]of[[0,2],[2,4],[4,6]]){const $=Mn[z],Y=Mn[H],G=at=>at/Mn[Hr][3],K=(at,st,xt,At,Ft)=>{const Yt=In(at),Ot=[Yt[0],Yt[1]+(Yt[3]-Yt[1])*G($[3]),Yt[2],Yt[1]+(Yt[3]-Yt[1])*G(Y[3])];n.quad("car",l(M*st,$[3],U),l(M*st,$[3],R),l(M*xt,Y[3],R),l(M*xt,Y[3],U),At,Ot,Ft)};K("doorOut",$[2]+B,Y[2]+B,[M,0,0],h),T||K("doorIn",$[2]-.02,Y[2]-.02,[-M,0,0],c)}}const x=on("black");for(const[L,D]of[[w.z-w.w/2,1],[w.z+w.w/2,-1]])for(let k=0;k<Hr;k++){const N=Mn[k],B=Mn[k+1];n.quad("car",l(M*N[1],N[0],L),l(M*N[2],N[3],L),l(M*B[2],B[3],L),l(M*B[1],B[0],L),[0,0,D],x,u)}const E=Mn[Hr];if(n.quad("car",l(M*E[1],E[0],w.z-w.w/2),l(M*E[1],E[0],w.z+w.w/2),l(M*E[2],E[3],w.z+w.w/2),l(M*E[2],E[3],w.z-w.w/2),[0,-1,0],x,u),!T)continue;const P=t.edge+.03;n.quad("car",l(M*1.2,.004,w.z-w.w/2),l(M*P,.004,w.z-w.w/2),l(M*P,.004,w.z+w.w/2),l(M*1.2,.004,w.z+w.w/2),[0,1,0],on("steel"),{emit:.7})}}const b=Ru(a,g.map(([M,T])=>[M-.12,T+.12])).map(M=>[M,"floor"]).concat(g.map(([M,T])=>[[Math.max(0,M-.12),Math.min(a,T+.12)],"floorDark"]));for(const[[M,T],w]of b)for(let v=M;v<T-1e-6;v+=1.2){const x=Math.min(T,v+1.2);for(const[E,P]of[[-1.215,0],[0,1.215]])n.quad("car",l(E,0,v),l(P,0,v),l(P,0,x),l(E,0,x),[0,1,0],In(w),{emit:.86})}n.quad("car",l(-1.2,Le[0],0),l(1.2,Le[0],0),l(1.2,Le[0],a),l(-1.2,Le[0],a),[0,-1,0],on("under"),{emit:.1});const A=[[0,1,t.endOpen[0],"end"],[a,-1,t.endOpen[1],o.cab?"cabface":"end"]];o.cab&&A.push([o.cab,-1,!1,"bulkhead"]);for(const[M,T,w,v]of A){const x=M+T*.05,E=Nn.endDoor/2;for(let P=0;P<us;P++){const L=Mn[P],D=Mn[P+1],k=w&&P<Hr?[[-1,-E],[E,1]]:[[-1,1]];for(const[N,B]of k){const U=(R,z)=>Math.abs(R)===1?R*z:R;if(v!=="cabface"&&n.quad("car",l(U(N,L[1]),L[0],x),l(U(B,L[1]),L[0],x),l(U(B,D[1]),D[0],x),l(U(N,D[1]),D[0],x),[0,0,T],P>=7?on("ceiling"):p,c),v!=="bulkhead")if(v==="cabface"){const R=vs("front"),z=$=>R[0]+(R[2]-R[0])*(.5+$/(2*Nn.half)),H=$=>R[1]+(R[3]-R[1])*(($-Le[0])/(Mn[us][3]-Le[0]));n.quadUV("train",l(-L[2],L[3],M),l(L[2],L[3],M),l(D[2],D[3],M),l(-D[2],D[3],M),[0,0,-T],[z(-L[2]),H(L[3])],[z(L[2]),H(L[3])],[z(D[2]),H(D[3])],[z(-D[2]),H(D[3])],{emit:.8})}else n.quad("car",l(U(N,L[2]),L[3],M),l(U(B,L[2]),L[3],M),l(U(B,D[2]),D[3],M),l(U(N,D[2]),D[3],M),[0,0,-T],on("under"),{emit:.5})}}if(v==="cabface"){const P=vs("front"),L=D=>P[1]+(P[3]-P[1])*((D-Le[0])/(Mn[us][3]-Le[0]));n.quadUV("train",l(-1.2,Le[0],M),l(1.2,Le[0],M),l(1.315,0,M),l(-1.315,0,M),[0,0,-T],[P[0]+(P[2]-P[0])*.04,L(Le[0])],[P[2]-(P[2]-P[0])*.04,L(Le[0])],[P[2],L(0)],[P[0],L(0)],{emit:.8})}else if(!w||v==="bulkhead"){const P=In(v==="bulkhead"?"doorIn":"endDoor");n.quad("car",l(T*-E,0,x+T*.01),l(T*E,0,x+T*.01),l(T*E,Nn.doorHead,x+T*.01),l(T*-E,Nn.doorHead,x+T*.01),[0,0,T],P,{emit:.94})}}return o}const Ze={front:.68,top:.44,back:.9};function Mx(n,t,e){const{xc:i,ps:s,z0:r,fy:o}=t,a=Df(t.type),l=Nn.len,c=(y,b,A)=>[i+y,o+b,r+A],f=In("moquette"),h=on("black"),u=In("pole"),p={emit:.92},m={emit:1},_={emit:.72},d=(y,b,A,M,T=.018)=>{for(const[w,v]of[[-1,0],[1,0],[0,-1],[0,1]]){const x=v?T:0,E=w?T:0;n.quad("car",c(y+w*T-x,A,b+v*T-E),c(y+w*T+x,A,b+v*T+E),c(y+w*T+x,M,b+v*T+E),c(y+w*T-x,M,b+v*T-E),[w,0,v],u,m)}},g=a.cab?[1.52,5.15,7.12,10.72,12.62]:[1.52,5.15,7.12,10.72,12.62,16.25];for(const y of[-1,1]){for(const[A,M,T,w]of a.benches){const v=(M-A)/T;for(let x=0;x<T;x++){const E=A+x*v+.03,P=E+v-.06;if(w){n.quad("car",c(y*1.13,.42,E),c(y*1.13,.42,P),c(y*1.15,.92,P),c(y*1.15,.92,E),[-y,0,0],f,p);continue}n.quad("car",c(y*Ze.front,Ze.top,E),c(y*1.17,Ze.top,E),c(y*1.17,Ze.top,P),c(y*Ze.front,Ze.top,P),[0,1,0],f,p),n.quad("car",c(y*1.14,Ze.top+.02,E),c(y*1.14,Ze.top+.02,P),c(y*1.19,Ze.back,P),c(y*1.19,Ze.back,E),[-y,.1,0],f,p)}if(!w){n.quad("car",c(y*Ze.front,0,A),c(y*Ze.front,0,M),c(y*Ze.front,Ze.top,M),c(y*Ze.front,Ze.top,A),[-y,0,0],In("plinth"),{emit:.8});for(let x=0;x<=T;x++){const E=A+x*v;n.quad("car",c(y*.76,.665,E-.025),c(y*1.15,.665,E-.025),c(y*1.15,.665,E+.025),c(y*.76,.665,E+.025),[0,1,0],h,{emit:.7}),n.quad("car",c(y*.76,.6,E-.025),c(y*.76,.6,E+.025),c(y*.76,.665,E+.025),c(y*.76,.665,E-.025),[-y,0,0],h,{emit:.5})}}}for(const A of g){const M=In("seatEnd");for(const T of[-1,1])n.quad("car",c(y*.66,0,A+T*.012),c(y*1.19,0,A+T*.012),c(y*1.19,1.3,A+T*.012),c(y*.66,1.3,A+T*.012),[0,0,T],M,m);d(y*.7,A,0,1.93)}for(const[A,M]of[[1.52,5.15],[7.12,10.72],[12.62,a.cab?15.7:16.25]]){const w=y*.72,v=.016;n.quad("car",c(w-v,1.87-v,A),c(w+v,1.87-v,A),c(w+v,1.87-v,M),c(w-v,1.87-v,M),[0,-1,0],u,m);for(const k of[-1,1])n.quad("car",c(w+k*v,1.87-v,A),c(w+k*v,1.87-v,M),c(w+k*v,1.87+v,M),c(w+k*v,1.87+v,A),[k,0,0],u,m);const x=[y*1.061,1.592],E=[y*.821,1.872],P=(A+M)/2,L=(k,N,B)=>{const U=y>0?N-B/2:N+B/2,R=y>0?N+B/2:N-B/2;n.quad("sheet",c(x[0],x[1],U),c(x[0],x[1],R),c(E[0],E[1],R),c(E[0],E[1],U),[-y,-.6,0],k,{emit:.95})};if(e&&e.strip&&L(e.strip,P,1.57),e&&e.ads&&e.ads.length){const k=Math.round(A*3+(y>0?1:0));L(e.ads[k%e.ads.length],P-1.2,.56),L(e.ads[(k+1)%e.ads.length],P+1.2,.56)}const D=y>0?-.26:.26;n.box("car",i+Math.min(y*.85,y*.93),o+1.645,r+P-.3,i+Math.max(y*.85,y*.93),o+1.795,r+P+.3,on("black"),{emit:.5},"xXyzZ"),n.quad("dyn",c(y*.846,1.68,P+D),c(y*.846,1.68,P-D),c(y*.846,1.76,P-D),c(y*.846,1.76,P+D),[-y,0,0],Bv("board2",2,.5),{emit:1.3})}for(const A of a.doors.filter(M=>M.w>1)){const M=A.z+A.w/2+.16,T=.07,w=y>0?M-T:M+T,v=y>0?M+T:M-T;n.quad("car",c(y*1.19,1.2,w),c(y*1.19,1.2,v),c(y*1.19,1.34,v),c(y*1.19,1.34,w),[-y,0,0],In("alarm"),m)}const b=(A,M,T,w,v)=>{const x=y>0?M+T/2:M-T/2,E=y>0?M-T/2:M+T/2;n.quad("car",c(y*1.322,w,x),c(y*1.322,w,E),c(y*1.322,v,E),c(y*1.322,v,x),[y,0,0],In(A),_)};if(b("logo",8.89,.56,.5,.78),b("number",a.cab?5:16,.44,.5,.65),a.cab)for(const[A,M]of[[0,1.05],[-.05,0]])n.quad("car",c(y*1.323,A,16.35),c(y*1.323,A,l),c(y*1.323,M,l),c(y*1.323,M,16.35),[y,0,0],on("red"),_)}for(const y of a.doors.filter(b=>b.w>1))d(0,y.z,0,2.06);const S=on("under");for(const[y,b,A]of[[2,4.65,.85],[13.1,15.75,.85],[6.3,11.4,1.05]])n.box("car",i-A,o-.96,r+y,i+A,o-.6,r+b,S,{emit:.16},"xXzZ")}function Tx(n){const{xc:t,ps:e,z0:i,fy:s}=n,r=Df(n.type),o=Nn.len,a=1.17,l=r.cab?r.cab-.05:o,c=[{ax:t,az:i,bx:t,bz:i+l,hw:a,ya:s,yb:s,surface:"metal"}],f=[[t-e*a,i,t-e*a,i+l]],h=[];let u=0;for(const m of n.open?r.doors:[]){const _=Math.max(m.w-.1,.95);f.push([t+e*a,i+u,t+e*a,i+m.z-_/2]),u=m.z+_/2,h.push([i+m.z,_]),c.push({ax:t+e*.9,az:i+m.z,bx:t+e*(n.edge+.3),bz:i+m.z,hw:_/2-.02,ya:s,yb:0,surface:"metal"}),m.w>1&&f.push([t,i+m.z,t,i+m.z])}f.push([t+e*a,i+u,t+e*a,i+l]);const p=.92/2;for(const[m,_]of[[0,n.endOpen[0]],[l,n.endOpen[1]&&!r.cab]])_?f.push([t-a,i+m,t-p,i+m],[t+p,i+m,t+a,i+m]):f.push([t-a,i+m,t+a,i+m]);for(const m of[-1,1])for(const[_,d,,g]of r.benches){if(g)continue;const S=t+m*(Ze.front-.04);f.push([S,i+_,S,i+d],[S,i+_,t+m*a,i+_],[S,i+d,t+m*a,i+d])}return{cells:c,walls:f,doors:h}}const jr={L:58,z0:2.1,floor:.03,offset:.08},Ex="Please mind the gap between the train and the platform.",fa=["Platform closed","Please pass along inside the train"];function wx(n,t,e,i){const{b:s,sheet:r}=n,o=v=>e*v,a=o(nt.track-jr.offset),l=-e,c=nt.track-jr.offset-nt.edge,f=jr.floor,h=Nn.len+Nn.gap,u=[{type:"undm",open:!0,endOpen:[!1,!0]},{type:"t",open:!1,endOpen:[!0,!0]},{type:"dm",open:!0,endOpen:[!0,!1]}].map((v,x)=>({...v,xc:a,ps:l,fy:f,edge:c,z0:jr.z0+x*h})),p=[],m=[],_=[],d=[],g=[];for(const v of u){bx(s,v),Mx(s,v,i);const x=Tx(v);p.push(...x.cells),m.push(...x.walls);for(const[E,P]of x.doors)g.push([E-P/2,E+P/2]),P>1&&s.addLight(o(nt.edge-.5),1.3,E,.55,5.5,!1,[1,.98,.9])}for(let v=0;v<u.length-1;v++){const x=u[v].z0+Nn.len,E=u[v+1].z0;p.push({ax:a,az:x-.25,bx:a,bz:E+.25,hw:.45,ya:f,yb:f,surface:"metal"});for(const P of[-1,1])m.push([a+P*.47,x,a+P*.47,E]);s.quad("car",[a-.42,f-.01,x-.02],[a+.42,f-.01,x-.02],[a+.42,f-.01,E+.02],[a-.42,f-.01,E+.02],[0,1,0],on("steel"),{emit:.5})}const S=r.add(250,70,(v,x,E)=>Rr(v,x,E,fa[0],{sub:fa[1],bg:"#f6f6f1",fg:"#16213f"})),y=In("hoarding"),b=nt.back-.12,A=nt.edge,M=2.45;for(const[v,x]of[[u[1].z0+.3,-1],[u[1].z0+Nn.len-.3,1]]){for(const U of[x,-x]){const R=v+U*.03;for(let z=b;z<A-1e-6;z+=.61){const H=Math.min(A,z+.61);s.quad("car",[o(z),0,R],[o(H),0,R],[o(H),M,R],[o(z),M,R],[0,0,U],y,{emit:.42})}}s.quad("car",[o(b),M,v-.03],[o(A),M,v-.03],[o(A),M,v+.03],[o(b),M,v+.03],[0,1,0],on("black"),{emit:.2}),s.quad("car",[o(A),0,v-.03],[o(A),0,v+.03],[o(A),M,v+.03],[o(A),M,v-.03],[e,0,0],on("black"),{emit:.2}),m.push([o(b),v,o(A+.3),v]);const E=-.2,P=1.5,L=.42,D=1.25,k=v+x*.045,N=E-x*P/2,B=E+x*P/2;s.quad("sheet",[N,D,k],[B,D,k],[B,D+L,k],[N,D+L,k],[0,0,x],S,{emit:.9}),_.push({x:E,y:D+L/2,z:k,r:7,n:[0,x],label:"read notice",title:"NOTICE",text:`${fa[0]}. ${fa[1]}. We apologise for any inconvenience.`})}const T=(v,x,E)=>{const P=v.state.wrong,L=v.director.announcer,D=P>=2&&L.rng.chance(Math.min(.75,P*.2));L.say({text:D?E:x,chime:"none",tag:"(inside the train)",odd:D,urgent:!0})},w=[[J0[0],Ll[1]],[J0[1],Ll[2]],[Ex,Ll[0]]];return u.forEach((v,x)=>{const E=x===1?5:1.2;d.push({x0:Math.min(a-1.1,a+1.1),x1:Math.max(a-1.1,a+1.1),z0:v.z0+E,z1:v.z0+Nn.len-E,fire:P=>{T(P,w[x][0],w[x][1]),x===0&&(P.audio.sfx("doorChime"),P.director.setHint("The saloon lights are on. Nobody is aboard.",5),P.state.boarded=(P.state.boarded||0)+1)}})}),_.push({x:a,y:f+1.2,z:u[2].z0+15.82,r:3.2,n:[0,-1],label:"try cab door",title:"CAB DOOR",text:"Locked. Through the glass of the next door along, the platform carries on."}),{cells:p,walls:m,items:_,zones:d,gaps:g,cars:u}}const vo={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=t.platformL||(e?30:n.pick([30,36,36,42])),s=n.sign(),r=t.stretch,o=r?r.plan.slice(0,t.idx).filter(h=>h==="platform"||h==="trainstop").length:0,a=r&&r.dir||"north",l=o%2?a==="north"?"south":"north":a,c=nt.back-.4,f=nt.cx+nt.R+.4;return{p:{L:i,side:s,start:e,dir:l,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:s>0?[c,-2.4,-1.2-.2,f,nt.cy+nt.R+.3,i+Ee.depth+.2]:[-f,-2.4,-1.2-.2,-c,nt.cy+nt.R+.3,i+Ee.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:s}=e;Yv(t,i,s,{plain:!!e.ghost}),Su(t,0,1,s,!e.start),Su(t,i,-1,s,!0),e.ghost?(t.addPortal(0,0,0,0),Ai(t,{x:0,y:0,z:0,yaw:0},1.56)):e.start||(t.addPortal(0,0,0,0),Qn(t,{x:0,y:0,z:0,yaw:0},wt.crown)),t.addPortal(0,0,i,0);const r=e.ghost?hx(n,i,s):nx(n,i,s),o=_=>s*_,a=(nt.back+nt.edge)/2,l=(nt.edge-nt.back)/2,c=[{ax:o(a),az:0,bx:o(a),bz:i,hw:l,ya:0,yb:0}],f=wt.W/2,h=e.train?wx(n,i,s,r.art):null,u=[[o(nt.back+.08),0,o(nt.back+.08),i],[o(nt.back),i,o(-f),i],[o(f),i,o(nt.edge),i]];let p=0;for(const[_,d]of h?h.gaps:[])u.push([o(nt.edge-.1),p,o(nt.edge-.1),_]),p=d;u.push([o(nt.edge-.1),p,o(nt.edge-.1),i]),e.start?u.push([o(nt.back),0,o(nt.edge),0]):u.push([o(nt.back),0,o(-f),0],[o(f),0,o(nt.edge),0]);for(const _ of r.walls)u.push(_);const m={zones:r.zones};return h&&(c.push(...h.cells),u.push(...h.walls),r.items.push(...h.items),m.zones.push(...h.zones)),e.start&&(m.spawn=r.spawn||{x:o(.1),z:6,yaw:0}),{cells:c,walls:u,items:r.items,extra:m}}},Ax={type:"trainstop",sheetSize:1024,plan(n,t){const e=vo.plan(n,{...t,platformL:jr.L});return Object.assign(e.p,{train:!0,figure:!1,start:!1}),e},build:n=>vo.build(n)},Rx={type:"ghost",sheetSize:1024,plan(n,t){const e=vo.plan(n,{...t,platformL:36});return Object.assign(e.p,{ghost:!0,figure:!1,start:!1,dark:!1,faulty:n.int(0,2)}),e},build:n=>vo.build(n)},Cx=.16,io=.3,ni=1.6,ci=(n,t)=>n+t*io,Ps=(n,t,e)=>n+t*Cx*e;function Xa(n,t,e,i,s=[-1.5,-.5,.5,1.5],r=0,o=null){const a=Nt("stairTread"),l=Nt("riser");for(let c=0;c<e;c++){const f=ci(t,c),h=ci(t,c+1),u=Ps(r,i>0?c+1:c,i),p=Ps(r,i>0?c:c+1,i);for(let m=0;m<s.length-1;m++){const _=s[m],d=s[m+1];i>0?n.quad("atlas",[d,u,h],[_,u,h],[_,u,f],[d,u,f],[0,1,0],a,o):n.quad("atlas",[_,u,f],[d,u,f],[d,u,h],[_,u,h],[0,1,0],a,o),i>0?n.quad("atlas",[_,p,f],[d,p,f],[d,u,f],[_,u,f],[0,0,-1],l,o):n.quad("atlas",[_,p,h],[d,p,h],[d,u,h],[_,u,h],[0,0,1],l,o)}}}function If(n,t,e,i,s,r,o=.025,a="rubber",l=null){const c=Vt(a),f=[t-o,i+o,e],h=[t+o,i+o,e],u=[t+o,r+o,s],p=[t-o,r+o,s];n.quad("atlas",f,h,u,p,[0,1,0],c,l);const m=t>0?-1:1,_=t+m*o;n.quad("atlas",[_,i-o,e],[_,i+o,e],[_,r+o,s],[_,r-o,s],[m,0,0],c,l)}const Px={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),s=ci(0,i),r=Ps(0,i,e),o=ci(ni,i)+ni;return{p:{dir:e,n:i,run:s,rise:r,len:o,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:r,z:o,yaw:0}],box:[-1.9,Math.min(0,r)-.4,0,1.9,Math.max(0,r)+3.3,o]}},build(n){const{b:t,p:e}=n,i=ci(ni,e.n),s=h=>qe((h-ni)/e.run,0,1)*e.rise,r=[0,ni],o=Math.round(e.run/.9);for(let h=1;h<o;h++)r.push(ni+e.run*h/o);r.push(i,e.len);const a=r.map(h=>({x:0,y:s(h),z:h,yaw:0})),l=yn(t,a,_f(wt),{floor:null});for(const h of l.cells)h.surface="stone";const c=wt.W/2,f=Nt("floor");for(let h=0;h<3;h++){const u=-c+h,p=u+1;t.quad("atlas",[u,0,0],[p,0,0],[p,0,ni],[u,0,ni],[0,1,0],f),t.quad("atlas",[u,e.rise,i],[p,e.rise,i],[p,e.rise,e.len],[u,e.rise,e.len],[0,1,0],f)}Xa(t,ni,e.n,e.dir);for(const h of[-c+.09,c-.09])If(t,h,ni-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),Qn(t,a[0],wt.crown),Vh(t,a,l.dist,wt.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:a}}},Uf=5.4,Pe=Uf/2,jc=1.2,Kc=3.7,Ol=gf(Uf,jc,Kc),qi=3.6,ii=1.2,Cu=Math.tan(Math.PI/6),Qs=[-.95,.95],Xn=.5,hn=.92,Lx={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),s=i*Cu*e,r=qi*2+i;return{p:{dir:e,run:i,rise:s,len:r,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:s,z:r,yaw:0}],box:[-Pe-.4,Math.min(0,s)-.5,0,Pe+.4,Math.max(0,s)+4.3,r]}},build(n){const{b:t,p:e,sheet:i,rng:s}=n,r=qi,o=qi+e.run,a=R=>qe((R-r)/e.run,0,1)*e.rise,l=[0,qi-ii,r],c=Math.round(e.run/1.2);for(let R=1;R<=c;R++)l.push(r+e.run*R/c);l.push(o+ii,e.len);const f=l.map(R=>({x:0,y:a(R),z:R,yaw:0}));yn(t,f,Ol,{floor:null}),xr(t,f[0],Ol,wt,1,"tile"),xr(t,f[f.length-1],Ol,wt,-1,"tile");const h=[0,1,0],u=Nt("floor"),p=Nt("deck"),m=Vt("metal");for(const[R,z,H]of[[0,qi-ii,0],[o+ii,e.len,e.rise]])t.grid("atlas",[-Pe-.04,H,R],[Uf+.08,0,0],[0,0,z-R],5,2,h,u,null,!0);const _=.4,d=Math.round(e.run/_),g=e.rise/d,S=R=>R===d?o:r+R*_,y=R=>R===d?e.rise:R*g,b=Nt("tread"),A=Vt("steelDark"),M=Nt("comb");for(const R of Qs){const z=R-Xn,H=R+Xn;for(const[$,Y,G]of[[qi-ii,r,0],[o,o+ii,e.rise]])t.quad("atlas",[z,G,$],[H,G,$],[H,G,Y],[z,G,Y],h,p);t.quad("atlas",[z,.003,r-.25],[H,.003,r-.25],[H,.003,r],[z,.003,r],h,M),t.quad("atlas",[H,e.rise+.003,o+.25],[z,e.rise+.003,o+.25],[z,e.rise+.003,o],[H,e.rise+.003,o],h,M);for(let $=0;$<d;$++){const Y=S($),G=S($+1),K=y(g>0?$+1:$),at=y(g>0?$:$+1);t.quad("atlas",[z,K,Y],[H,K,Y],[H,K,G],[z,K,G],h,b);const st=g>0?Y:G;t.quad("atlas",[z,at,st],[H,at,st],[H,K,st],[z,K,st],[0,0,g>0?-1:1],A)}}Ai(t,f[0],Pe+.04),Ai(t,f[f.length-1],Pe+.04),Ai(t,{x:0,y:0,z:qi-ii,yaw:0},Pe),Ai(t,{x:0,y:e.rise,z:o+ii,yaw:0},Pe);const T=[-Pe,Qs[0]-Xn,Qs[0]+Xn,Qs[1]-Xn,Qs[1]+Xn,Pe],w=qi-ii,v=o+ii,x=[[w,r,0,0],[r,o,0,e.rise],[o,v,e.rise,e.rise]];for(const[R,z,H,$]of x){for(let Y=0;Y<6;Y+=2){const G=T[Y],K=T[Y+1];t.quad("atlas",[G,H+hn,R],[K,H+hn,R],[K,$+hn,z],[G,$+hn,z],h,p)}for(const[Y,G]of[[T[1],1],[T[2],-1],[T[3],1],[T[4],-1]])t.quad("atlas",[Y,H,R],[Y,$,z],[Y,$+hn,z],[Y,H+hn,R],[G,0,0],m),t.quad("atlas",[Y,H-.3,R],[Y,$-.3,z],[Y,$,z],[Y,H,R],[G,0,0],Vt("steelDark")),If(t,Y+G*.03,R,H+hn+.04,z,$+hn+.04,.04)}for(let R=0;R<6;R+=2){const z=T[R],H=T[R+1];t.quad("atlas",[z,0,w],[H,0,w],[H,hn,w],[z,hn,w],[0,0,-1],m),t.quad("atlas",[z,e.rise,v],[H,e.rise,v],[H,e.rise+hn,v],[z,e.rise+hn,v],[0,0,1],m)}const E=i.add(150,46,(R,z,H)=>Rr(R,z,H,"Stand on the right",{bg:"#0019a8"}));for(let R=0;R<3;R++){const z=r+e.run*(.2+.3*R),H=a(z)+hn;t.quad("sheet",[.24,H+.02,z],[-.24,H+.02,z],[-.24,H+.17,z],[.24,H+.17,z],[0,0,-1],E),t.quad("sheet",[-.24,H+.02,z+.01],[.24,H+.02,z+.01],[.24,H+.17,z+.01],[-.24,H+.17,z+.01],[0,0,1],E)}const P=Math.max(2,Math.round(e.run/3.2));for(let R=0;R<P;R++){const z=r+e.run*(R+.5)/P,H=a(z)+hn,$=e.faulty===R;t.box("atlas",-.04,H,z-.04,.04,H+1.25,z+.04,Vt("steelDark"),null,"xXzZ"),t.box("atlas",-.2,H+1.25,z-.2,.2,H+1.36,z+.2,Nt("uplight"),{emit:1.5,flick:$},"xXzZY"),t.addLight(0,H+2.2,z,.5,8,$,[1,.95,.82])}for(const[R,z]of[[1.6,0],[e.len-1.6,e.rise]])Ii(t,{x:0,y:z,z:R,yaw:Math.PI/2},Kc-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),Qn(t,f[0],wt.crown);const L=[];for(let R=0;R<4;R++)L.push(i.add(84,116,(z,H,$)=>Ar(z,H,$,s,s.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const D=R=>Pe*Math.cos(Math.asin(qe((R-jc)/(Kc-jc),0,1)));let k=0;for(let R=r+.8;R<o-.4;R+=2.25,k++){const z=a(R),H=Cu*Math.sign(e.rise)*.27;for(const $ of[-1,1]){const Y=$*(D(1.55)-.04),G=$*(D(2.3)-.04);t.quad("sheet",[Y,z+1.55-H*$,R-.27*$],[Y,z+1.55+H*$,R+.27*$],[G,z+2.3+H*$,R+.27*$],[G,z+2.3-H*$,R-.27*$],[-$,0,0],L[(k+($>0?2:0))%4])}}const N=[{ax:0,az:0,bx:0,bz:w,hw:Pe,ya:0,yb:0},{ax:0,az:v,bx:0,bz:e.len,hw:Pe,ya:e.rise,yb:e.rise}],B=[[-Pe,0,-Pe,w],[Pe,0,Pe,w],[-Pe,v,-Pe,e.len],[Pe,v,Pe,e.len]],U=wt.W/2;for(const R of[0,e.len])B.push([-Pe,R,-U,R],[U,R,Pe,R]);for(const R of Qs){for(const[z,H,$,Y]of x)N.push({ax:R,az:z,bx:R,bz:H,hw:Xn,ya:$,yb:Y,surface:"metal"});B.push([R-Xn,w,R-Xn,v],[R+Xn,w,R+Xn,v])}for(let R=0;R<6;R+=2)B.push([T[R],w,T[R+1],w],[T[R],v,T[R+1],v]);return{cells:N,walls:B,items:[],frames:f}}},Dx={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,s=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],r=yn(t,s,wt,{floor:Nt("floor")}),o=Nt("shutter");xr(t,{x:0,y:0,z:e.len-.02,yaw:0},wo(wt),null,-1,"atlas",(f,h)=>[o[0]+(o[2]-o[0])*(f/wt.W+.5),o[1]+(o[3]-o[1])*(h/wt.crown)]),t.addPortal(0,0,0,0),Qn(t,s[0],wt.crown);const a=i.add(200,60,(f,h,u)=>Rr(f,h,u,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],a);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:r.cells,walls:r.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:s}}},Jc={uPeriod:3,height:3.4},Kr="#1e4a35",Qc="#3f7a5c",Td="#e9e1c4";function Ix(n,t){const e=new _e(1907),i=t/Jc.height,s=m=>t-m*i;n.fillStyle="#e4dcc2",n.fillRect(0,0,t,t);const r=40,o=t/r,a=.15*i;n.fillStyle="#b9b29a",n.fillRect(0,s(1.72),t,s(.2)-s(1.72));for(let m=0;m<10;m++)for(let _=0;_<r;_++)n.fillStyle=Va(Td,e.range(-.06,.04)),n.fillRect(_*o+.5,s(.2+(m+1)*.152)+.5,o-1,a-1),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(_*o+1,s(.2+(m+1)*.152)+1,o-2,2);const l=(m,_,d)=>{n.fillStyle=d,n.fillRect(0,s(_),t,s(m)-s(_)),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(0,s(_),t,Math.max(1,(s(m)-s(_))*.2))};l(0,.2,Kr),l(1.72,1.78,Kr),l(1.98,2.05,Kr),n.fillStyle="#2a5d45",n.fillRect(0,s(1.98),t,s(1.78)-s(1.98));const c=12,f=t/c,h=(s(1.98)+s(1.78))/2,u=(s(1.78)-s(1.98))*.42;for(let m=0;m<c;m++){const _=(m+.5)*f;n.fillStyle=Kr,n.beginPath(),n.ellipse(_,h,f*.2,u,0,0,7),n.fill(),n.fillStyle=Qc,n.beginPath(),n.ellipse(_-f*.05,h-u*.25,f*.08,u*.4,0,0,7),n.fill();for(const d of[-1,1])n.fillStyle=Qc,n.beginPath(),n.moveTo(_+d*f*.22,h+u*.7),n.quadraticCurveTo(_+d*f*.5,h,_+d*f*.3,h-u*.9),n.quadraticCurveTo(_+d*f*.3,h,_+d*f*.22,h+u*.7),n.fill();n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(m*f,s(1.98),1,s(1.78)-s(1.98))}const p=n.createLinearGradient(0,0,0,t);p.addColorStop(0,"rgba(30,24,12,0.3)"),p.addColorStop(.35,"rgba(30,24,12,0.04)"),p.addColorStop(.9,"rgba(30,24,12,0)"),p.addColorStop(1,"rgba(30,24,12,0.25)"),n.fillStyle=p,n.fillRect(0,0,t,t),Xe(n,0,0,t,t,1907,.8,!1)}let Fl=null;function Ux(){if(!Fl){const n=vn(512,512);Ix(n.getContext("2d"),512),Fl=Ds(n,{repeatU:!0})}return Fl}function Nx(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#2a2c30",n.beginPath(),n.arc(t/2,e/2,t*.49,0,7),n.fill(),n.fillStyle="#f5cf12",n.beginPath(),n.arc(t/2,e/2,t*.42,0,7),n.fill(),n.strokeStyle="#fff",n.lineWidth=t*.07,n.lineCap="round";for(const i of[.16,.27])n.beginPath(),n.arc(t*.42,e*.56,t*i,-1.1,.3),n.stroke()}function Pu(n,t,e,i=!1){n.clearRect(0,0,t,e),n.fillStyle=i?"#1c1d20":"#6e7377",n.beginPath(),n.roundRect(1,1,t-2,e-2,t*.45),n.fill(),n.strokeStyle=i?"#3a3c40":"#3f4347",n.lineWidth=3,n.beginPath(),n.roundRect(3,3,t-6,e-6,t*.4),n.stroke(),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(t*.25,e*.12,t*.12,e*.7)}function zl(n,t,e,i){n.fillStyle="#0a0a0b",n.fillRect(0,0,t,e),n.lineCap="round",n.lineWidth=t*.16,i==="no"?(n.strokeStyle="#ff2a1c",n.beginPath(),n.moveTo(t*.25,e*.25),n.lineTo(t*.75,e*.75),n.moveTo(t*.75,e*.25),n.lineTo(t*.25,e*.75),n.stroke()):i==="go"?(n.strokeStyle="#2ee35a",n.beginPath(),n.moveTo(t*.5,e*.8),n.lineTo(t*.5,e*.22),n.moveTo(t*.24,e*.46),n.lineTo(t*.5,e*.2),n.lineTo(t*.76,e*.46),n.stroke()):(n.strokeStyle="#ffb21e",n.beginPath(),n.moveTo(t*.28,e*.5),n.lineTo(t*.72,e*.5),n.stroke())}function kx(n,t,e,i){const s=n.createLinearGradient(0,0,t,0);s.addColorStop(0,"#8b9094"),s.addColorStop(.5,"#c3c7ca"),s.addColorStop(1,"#84898d"),n.fillStyle=s,n.fillRect(0,0,t,e),n.fillStyle="#2d3034",n.fillRect(0,0,t,e*.1),n.fillRect(0,e*.9,t,e*.1),n.fillStyle="#16205e",n.fillRect(t*.14,e*.2,t*.72,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${e*.15}px ${Kt}`,n.fillText(String(i),t/2,e*.305)}function Ox(n,t,e,i){n.fillStyle="#d9dcdd",n.fillRect(0,0,t,e),n.fillStyle="#16205e",n.fillRect(0,0,t,e*.13),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",xe(n,i==="cards"?"Tickets · Cards only":"Tickets and Oyster",t*.86,e*.055,re),n.fillText(i==="cards"?"Tickets · Cards only":"Tickets and Oyster",t/2,e*.068),n.fillStyle="#0c0d10",n.fillRect(t*.12,e*.19,t*.76,e*.27),n.fillStyle="#ffb21e",n.font=`400 ${e*.045}px ${Ji}`,n.fillText("Machine closed",t/2,e*.325),n.fillStyle="#2b2e33",n.fillRect(t*.14,e*.52,t*.3,e*.11),n.fillRect(t*.56,e*.52,t*.3,e*.05),i!=="cards"&&(n.fillRect(t*.56,e*.6,t*.3,e*.03),n.fillStyle="#f5cf12",n.beginPath(),n.arc(t*.28,e*.72,t*.09,0,7),n.fill()),n.fillStyle="#1a1c1f",n.fillRect(t*.2,e*.82,t*.6,e*.1),n.strokeStyle="#8d9296",n.lineWidth=2,n.strokeRect(1,1,t-2,e-2)}function Fx(n,t,e){n.fillStyle="#3d4654",n.fillRect(0,0,t,e),n.fillStyle="#16205e",n.fillRect(0,0,t,e*.11),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",xe(n,"Assistance",t*.8,e*.07,re),n.fillText("Assistance",t/2,e*.058);const i=n.createLinearGradient(0,e*.15,0,e*.6);i.addColorStop(0,"#11151b"),i.addColorStop(1,"#07090c"),n.fillStyle=i,n.fillRect(t*.08,e*.15,t*.84,e*.45),n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(t*.14,e*.17,t*.1,e*.4),n.fillStyle="#2b323d",n.fillRect(t*.08,e*.62,t*.84,e*.03)}function zx(n,t,e){n.fillStyle=Kr,n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(0,0,t,3),n.fillStyle=Td,n.fillRect(t*.08,e*.05,t*.84,e*.17),n.fillStyle="#17362a",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${e*.12}px Georgia, 'Times New Roman', serif`,n.fillText("TICKETS",t/2,e*.14,t*.78),n.fillStyle="#585d61",n.beginPath(),n.moveTo(t*.14,e*.95),n.lineTo(t*.14,e*.5),n.quadraticCurveTo(t*.5,e*.2,t*.86,e*.5),n.lineTo(t*.86,e*.95),n.fill(),n.fillStyle="rgba(0,0,0,0.3)";for(let i=e*.34;i<e*.95;i+=e*.035)n.fillRect(t*.14,i,t*.72,1.5);n.strokeStyle=Qc,n.lineWidth=t*.03,n.beginPath(),n.moveTo(t*.14,e*.95),n.lineTo(t*.14,e*.5),n.quadraticCurveTo(t*.5,e*.2,t*.86,e*.5),n.lineTo(t*.86,e*.95),n.stroke()}function Bx(n,t,e){n.clearRect(0,0,t,e),wr(n,t/2,e/2,e*.38,{name:"Underground"})}const Bt={WALK:.62,STAN:.155,WIDE:1.08,MANUAL:1.35,LEN:1.9,H:1,GATES:6,BOOTH:[.99,1.24,2.3],FIRST:-3.385,NUMBER:41};function Hx(n,t,e,i,s,r){const{b:o,sheet:a}=n,l=[],c=[],f=[],h=[],u=Vt("metal"),p=Vt("steelDark"),m=e-Bt.LEN/2,_=e+Bt.LEN/2,d={reader:a.add(48,48,Nx),leaf:a.add(40,120,(v,x,E)=>Pu(v,x,E)),wide:a.add(56,150,(v,x,E)=>Pu(v,x,E,!0)),wait:a.add(32,32,(v,x,E)=>zl(v,x,E,"wait")),no:a.add(32,32,(v,x,E)=>zl(v,x,E,"no")),go:a.add(32,32,(v,x,E)=>zl(v,x,E,"go")),booth:a.add(110,250,Fx)},g=[];for(let v=0;v<=Bt.GATES;v++)g.push(Bt.FIRST+v*(Bt.WALK+Bt.STAN));g.push(g[Bt.GATES]+Bt.STAN+Bt.WIDE),g.forEach((v,x)=>{const E=a.add(30,110,(G,K,at)=>kx(G,K,at,Bt.NUMBER+x));o.box("atlas",v,t,m+.02,v+Bt.STAN,t+.1,_-.02,p,null,"xXzZ"),o.box("atlas",v,t+.1,m,v+Bt.STAN,t+Bt.H,_,u,{tint:[.92,.94,.96]},"xXY"),o.quad("sheet",[v+Bt.STAN,t+.1,m],[v,t+.1,m],[v,t+Bt.H,m],[v+Bt.STAN,t+Bt.H,m],[0,0,-1],E),o.quad("sheet",[v,t+.1,_],[v+Bt.STAN,t+.1,_],[v+Bt.STAN,t+Bt.H,_],[v,t+Bt.H,_],[0,0,1],E);const P=v+.035,L=v+Bt.STAN-.035;if(c.push([P,m,P,_],[L,m,L,_],[P,m,L,m],[P,_,L,_]),x===g.length-1)return;const D=x===Bt.GATES,k=D?Bt.WIDE:Bt.WALK,N=v+Bt.STAN,B=N+k,U=v+Bt.STAN/2,R=m+.2;h.push((N+B)/2),o.quad("atlas",[N,t+.004,m],[B,t+.004,m],[B,t+.004,_],[N,t+.004,_],[0,1,0],Vt("rubber")),o.box("atlas",U-.07,t+Bt.H,R-.07,U+.07,t+Bt.H+.03,R+.07,p,null,"xXzZ"),o.quad("sheet",[U+.075,t+Bt.H+.032,R-.075],[U-.075,t+Bt.H+.032,R-.075],[U-.075,t+Bt.H+.032,R+.075],[U+.075,t+Bt.H+.032,R+.075],[0,1,0],d.reader,{emit:.9}),o.box("atlas",U-.035,t+Bt.H,R+.16,U+.035,t+Bt.H+.2,R+.23,p,null,"xXY");for(const[G,K]of[["sheet:gWait",d.wait],["sheet:gNo",d.no],["sheet:gGo",d.go]])o.quad(G,[U+.035,t+Bt.H+.1,R+.159],[U-.035,t+Bt.H+.1,R+.159],[U-.035,t+Bt.H+.2,R+.159],[U+.035,t+Bt.H+.2,R+.159],[0,0,-1],K,{emit:1.7}),o.quad(G,[U-.035,t+Bt.H+.1,R+.231],[U+.035,t+Bt.H+.1,R+.231],[U+.035,t+Bt.H+.2,R+.231],[U-.035,t+Bt.H+.2,R+.231],[0,0,1],K,{emit:1.7});const z=k/2-.015,H=t+(D?.15:.2),$=t+(D?1.45:1.12),Y=D?d.wide:d.leaf;for(const[G,K]of[[N,1],[B,-1]]){for(const at of[-1,1])o.quad("sheet:padShut",[G,H,e+at*.012],[G+K*z,H,e+at*.012],[G+K*z,$,e+at*.012],[G,$,e+at*.012],[0,0,at],Y);o.quad("sheet:padOpen",[G+K*.02,H,e],[G+K*.02,H,e+z],[G+K*.02,$,e+z],[G+K*.02,$,e],[K,0,0],Y)}f.push([N-.04,e,B+.04,e]),l.push({x:U,y:t+Bt.H+.04,z:R,r:2.3,cone:.72,n:[0,-1],label:"touch card on reader",title:"",text:"",reader:x,onRead:r})});const S=g[g.length-1]+Bt.STAN,y=S+Bt.MANUAL,[b,A,M]=Bt.BOOTH,T=y+.2,w=(v,x,E=1.3)=>{o.box("atlas",v,t,e-.02,x,t+E,e+.02,u,{tint:[.6,.63,.66]},"xXYzZ"),c.push([v,e,x,e])};for(const v of[-1,1])o.quad("cut",[S,t+.05,e+v*.01],[y,t+.05,e+v*.01],[y,t+1.3,e+v*.01],[S,t+1.3,e+v*.01],[0,0,v],Nt("gate"),{emit:.3});return o.box("atlas",S,t+1.28,e-.025,y,t+1.33,e+.025,p,null,"xXyYzZ"),o.box("atlas",y,t,e-.04,y+.06,t+1.36,e+.04,p,null,"xXYzZ"),c.push([S,e,y+.06,e]),w(i,g[0]),w(y+.06,T),w(T+b,s),o.box("atlas",T,t,e-A/2,T+b,t+M,e+A/2,p,{tint:[.75,.82,.95]},"xXY"),o.quad("sheet",[T+b,t,e-A/2],[T,t,e-A/2],[T,t+M,e-A/2],[T+b,t+M,e-A/2],[0,0,-1],d.booth),o.quad("sheet",[T,t,e+A/2],[T+b,t,e+A/2],[T+b,t+M,e+A/2],[T,t+M,e+A/2],[0,0,1],d.booth),c.push([T,e-A/2,T+b,e-A/2],[T,e+A/2,T+b,e+A/2],[T,e-A/2,T,e+A/2],[T+b,e-A/2,T+b,e+A/2]),l.push({x:T+b/2,y:t+1.5,z:e-A/2,r:3.5,n:[0,-1],label:"look in",title:"ASSISTANCE",text:"",booth:!0}),{items:l,walls:c,shut:f,walkways:h}}function Gx(n,t,e){const{b:i,sheet:s,env:r}=n,{x0:o,x1:a,H:l,rise:c,z0:f,z1:h,zg:u,zOut:p}=t,m=wn(n),_=[],d=[],g=s.add(250,56,(P,L,D)=>Wa(P,L,D,{dir:"up"})),S=s.add(250,56,(P,L,D)=>Rr(P,L,D,"To the trains",{sub:"Northern line"})),y=["cash","cards"].map(P=>s.add(110,232,(L,D,k)=>Ox(L,D,k,P))),b=s.add(160,200,zx),A=s.add(200,90,Bx);for(const P of[-2.3,1,4.3])for(const L of[f+2.4,f+7.3])Ii(i,{x:P,y:c,z:L,yaw:Math.PI/2},l-.02,{power:.8,radius:7.5});const M=Jr(i,"sheet",{x:0,y:c,z:f+2.2,yaw:0},2.55,1.7,.38,g,S,{emit:1.25});_.push({...M,r:8,cone:.94,n:[0,-1],label:"read sign",title:"SIGN",text:Yn.wayout});const T=h-.03,w=(P,L,D,k,N,B)=>(i.quad(B&&B.layer?B.layer:"sheet",[L+k/2,c+D,T],[L-k/2,c+D,T],[L-k/2,c+D+N,T],[L+k/2,c+D+N,T],[0,0,-1],P,B&&B.opts),{x:L,y:c+D+N/2,z:T,n:[0,-1]});_.push({...w(g,0,2.86,1.7,.38,{opts:{emit:1.25}}),r:9,cone:.94,label:"read sign",title:"SIGN",text:Yn.wayout}),w(A,-2.9,1.25,1.2,.54),_.push({...w(yo("clock"),2.6,2.15,.62,.62,{layer:"dyn",opts:{emit:1.05}}),r:9,cone:.95,label:"look at clock",title:"CLOCK",text:"The clock is keeping time. It is morning."});const v=(P,L,D,k,N,B)=>{const U=o+B;return B>.05&&i.box("atlas",o,c,L-k/2,U,c+D+N,L+k/2,Vt("steelDark"),null,"YzZ"),i.quad("sheet",[U+.004,c+D,L+k/2],[U+.004,c+D,L-k/2],[U+.004,c+D+N,L-k/2],[U+.004,c+D+N,L+k/2],[1,0,0],P),B>.05&&d.push([U,L-k/2,U,L+k/2],[o,L-k/2,U,L-k/2],[o,L+k/2,U,L+k/2]),{x:U,y:c+D+N/2,z:L,n:[1,0]}};y.forEach((P,L)=>_.push({...v(P,u+1.9+L*1.02,0,.9,1.9,.5),r:4,label:"read machine",title:"TICKET MACHINE",text:Yn.machine})),_.push({...v(b,u+4.45,.5,1.3,1.62,.03),r:5,label:"read tiles",title:"TICKET WINDOW",text:Yn.window});const x=Tf(n,a-1,u+2.9,1.15,sv(m,r.station||"Hampstead",Yn.thought),c);_.push(x.item),d.push(...x.walls);const E=Nt("gate");for(const P of[-1,1]){const L=P*1.44;i.quad("cut",[L,c,h+.05],[L,c,h+.7],[L,c+2.3,h+.7],[L,c+2.3,h+.05],[-P,0,0],E,{emit:.25})}for(const P of e.items)P.booth&&(P.text=Yn.booth);return{items:_,walls:d,zOut:p}}const Ed=(n,t)=>n==="sheet:gWait"?t==="wait":n==="sheet:gNo"?t==="no":n==="sheet:gGo"?t==="go":n==="sheet:padShut"?t!=="go":n==="sheet:padOpen"?t==="go":!0,Vx=(n,t)=>Ed(n,t.gateState||"wait");function Ia(n,t){if(n.gateState=t,!n.built)return;for(const i of n.built.group.children)i.name.startsWith("sheet:")&&(i.visible=Ed(i.name,t));const e=n.built.extra;if(t==="go"){e&&e.shut&&(n.built.walls=n.built.walls.filter(i=>!e.shut.includes(i)));for(const i of n.built.items)i.reader!==void 0&&(i.hidden=!0)}}function Wx(n,t){const e=n.state,i=n.director,s=i.events,r=e.time;if(i.reading=null,n.player.zoomTarget=0,!(t.gateState==="go"||t.gateBusy&&r<t.gateBusy)){if(t.gateTouches=(t.gateTouches||0)+1,e.gateTouches=t.gateTouches,t.gateTouches===1){Ia(t,"no"),e.gate="no",n.audio.sfx("touchFail"),s.brownOut(1.5),s.glitch(.8),i.setHint(Yn.reject,6),i.announcer.say({text:Yn.voice,chime:"none",tag:"(the gate)",odd:!0,urgent:!0}),t.gateBusy=r+3.2;return}Ia(t,"go"),e.gate="go",n.audio.sfx("touchOut"),n.audio.sfx("paddles"),s.glitch(.3),i.setHint(Yn.accept,6)}}function qx(n,t){t.gateState==="no"&&n.state.time>=t.gateBusy&&(Ia(t,"wait"),n.state.gate="wait")}const Nf=12,wd=1.2,$x=.6,kf=4,Be={x0:-4.5,x1:6.5,depth:10,H:3.4};Be.rise=Ps(0,Nf,1);Be.z0=ci(wd,Nf)+$x;Be.z1=Be.z0+Be.depth;Be.zg=Be.z0+4.6;Be.zOut=Be.z1+.8;Be.zEnd=ci(Be.zOut,kf)+1.3;Be.top=Be.rise+Ps(0,kf,1);function Lu(n,t,e,i,s,r){const o=ci(0,i),a=r+Ps(0,i,1),l=d=>r+qe((d-e)/o,0,1)*(a-r),c=[t,e];for(let d=1,g=Math.max(1,Math.round(o/.9));d<=g;d++)c.push(e+o*d/g);c.push(s);const f=yn(n,c.map(d=>({x:0,y:l(d),z:d,yaw:0})),_f(wt),{floor:null,u0:t});for(const d of f.cells)d.surface="stone";const h=wt.W/2,u=-h-.03,p=wt.W+.06,m=Nt("floor"),_=e+o;n.grid("atlas",[u,r,t],[p,0,0],[0,0,e-t],3,2,[0,1,0],m,null,!0),n.grid("atlas",[u,a,_],[p,0,0],[0,0,s-_],3,2,[0,1,0],m,null,!0),Xa(n,e,i,1,[0,1,2,3].map(d=>u+p*(d/3)),r);for(const d of[-h+.09,h-.09])If(n,d,e-.3,r+.95,_+.3,a+.95);return f}const Xx={type:"exit",sheetSize:1024,layerVisible:Vx,plan(){return{p:{},exits:[],box:[Be.x0-.4,-.4,0,Be.x1+.4,Be.top+3.5,Be.zEnd+.2]}},build(n){const{b:t,node:e}=n,{x0:i,x1:s,H:r,rise:o,z0:a,z1:l,zg:c,zOut:f,zEnd:h,top:u}=Be,p=wt.W/2,m=Lu(t,0,wd,Nf,a,0);t.addPortal(0,0,0,0),Qn(t,{x:0,y:0,z:0,yaw:0},wt.crown);const _=cd(t,{x0:i,x1:s,z0:a,z1:l,H:r,y:o,layer:"hall",uv:(w,v)=>[w/Jc.uPeriod,.003+.994*v/Jc.height],portals:[{wall:"S",at:0},{wall:"N",at:0}],ceilOpts:{tint:[.96,.95,.9]}});for(const w of[a,l])Ai(t,{x:0,y:o,z:w,yaw:0},1.56);const d=Lu(t,l,f,kf,h,o),g=Vt("daylight");xr(t,{x:0,y:u,z:h-.02,yaw:0},wo(wt),null,-1,"atlas",()=>[(g[0]+g[2])/2,(g[1]+g[3])/2],{emit:2}),t.addLight(0,u+1.6,h-.6,1.9,10,!1,[1,1,1]),t.addLight(0,o+1.5,l-1.2,1,8.5,!1,[1,1,1]);const S=Hx(n,o,c,i,s,(w,v,x)=>Wx(w,x)),y=Gx(n,Be,S),b=[...m.cells,..._.cells,...d.cells],A=[...m.walls,..._.walls,...d.walls,[-p,h-.4,p,h-.4],...S.walls,...y.walls];if(e.gateState!=="go")A.push(...S.shut);else for(const w of S.items)w.reader!==void 0&&(w.hidden=!0);const M={y0:o-.5,y1:o+.7},T=[{x0:i,x1:s,z0:a+.5,z1:c-1.1,...M,fire:w=>w.director.setHint(Yn.approach,7)},{x0:i,x1:s,z0:a,z1:l,...M,once:!1,fire:(w,v)=>qx(w,v)},{x0:i,x1:s,z0:c+1.1,z1:l,...M,fire:w=>w.director.setHint(Yn.out,6)},{x0:-p,x1:p,z0:f+.4,z1:h,y0:o-.5,y1:u+.7,fire:w=>w.director.win()}];return{cells:b,walls:A,items:[...S.items,...y.items],extra:{zones:T,shut:S.shut}}}},tf=2.3,Ad=2.4,Bl=gf(tf,1.2,Ad),Ne=1.2,ua=2.5,Yx={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),s=ci(Ne+ua,e)+ua+Ne,r=Ps(0,e,i);return{p:{steps:e,dir:i,len:s,rise:r,flick:n.chance(.35)},exits:[{x:0,y:r,z:s,yaw:0}],box:[-1.9,Math.min(0,r)-.4,0,1.9,Math.max(0,r)+3.3,s]}},build(n){const{b:t,p:e,sheet:i,theme:s}=n,r=Ne+ua,o=ci(r,e.steps),a=o-r,l=M=>(a>0?qe((M-r)/a,0,1):M>=r?1:0)*e.rise,c=M=>({x:0,y:l(M),z:M,yaw:0}),f=yn(t,[c(0),c(Ne)],wt,{floor:Nt("floor")}),h=[Ne,Ne+1.25,r];a>0&&h.push(o),h.push(o+1.25,e.len-Ne);const u=yn(t,h.map(c),_f(Bl),{floor:null,u0:Ne}),p=yn(t,[c(e.len-Ne),c(e.len)],wt,{floor:Nt("floor"),u0:e.len-Ne});xr(t,c(Ne),wt,Bl,-1,"tile"),xr(t,c(e.len-Ne),wt,Bl,1,"tile");const m=tf/2,_=Nt("floorDark"),d=-m-.03,g=tf+.06;t.grid("atlas",[d,0,Ne],[g,0,0],[0,0,ua],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,o],[g,0,0],[0,0,e.len-Ne-o],2,3,[0,1,0],_,null,!0),e.steps>0&&Xa(t,r,e.steps,e.dir,[0,1,2].map(M=>d+g*(M/2)),0),Ai(t,c(Ne),wt.W/2,"floorDark"),Ai(t,c(e.len-Ne),wt.W/2,"floorDark");for(const M of u.cells)M.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),Qn(t,c(0),wt.crown),Ii(t,c((r+o)/2),Ad-.03,{flick:e.flick,power:.8,radius:6,len:.9});const S=[],y=[["TO THE TRAINS",-1,Ne+1.3],["WAY OUT",1,e.len-Ne-1.3]];for(const[M,T,w]of y){const v=i.add(220,54,(E,P,L)=>yf(E,P,L,M,s,T>0?"right":"left")),x=ts(t,"sheet",c(w),T,m,l(w)+.72,1.4,.345,v,null,.025);S.push({...x,r:4,label:"read tiles",title:"TILED LEGEND",text:M==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const b=f.walls.concat(u.walls,p.walls),A=wt.W/2;for(const M of[Ne,e.len-Ne])b.push([-A,M,-m,M],[m,M,A,M]);return{cells:f.cells.concat(u.cells,p.cells),walls:b,items:S}}},sn=512,Hl=6,ha=8;function Zx(n){const t=new _e(1942),e=sn/Hl,i=sn/ha;n.fillStyle="#d9d2b8",n.fillRect(0,0,sn,sn);for(let r=0;r<Hl;r++){for(let o=0;o<ha;o++){const a=r*e,l=o*i,c=e*.13,f=i*.11,h=t.range(-10,8);n.fillStyle=`rgb(${186+h},${178+h},${152+h})`,n.fillRect(a+c,l+f,e-2*c,i-2*f);const u=n.createLinearGradient(0,l+f,0,l+i-f);u.addColorStop(0,"rgba(40,32,18,0.42)"),u.addColorStop(.35,"rgba(40,32,18,0.08)"),u.addColorStop(1,"rgba(255,250,230,0.16)"),n.fillStyle=u,n.fillRect(a+c,l+f,e-2*c,i-2*f),n.fillStyle="rgba(30,24,14,0.3)",n.fillRect(a+c,l+f,2,i-2*f),n.fillStyle="rgba(255,250,235,0.22)",n.fillRect(a+e-c-2,l+f,2,i-2*f),n.fillStyle="rgba(60,50,34,0.35)",n.beginPath(),n.arc(a+e/2,l+i/2,e*.045,0,7),n.fill()}n.fillStyle="rgba(40,32,20,0.55)",n.fillRect(r*e-.8,0,1.6,sn);for(let o=0;o<ha;o++)for(const a of[-e*.06,e*.06]){const l=((r*e+a)%sn+sn)%sn,c=(o+.5)*i;if(n.fillStyle="#6b5a3e",n.beginPath(),n.arc(l,c,2.6,0,7),n.fill(),n.fillStyle="rgba(255,245,220,0.35)",n.beginPath(),n.arc(l-.7,c-.7,1,0,7),n.fill(),t.chance(.3)){const f=n.createLinearGradient(0,c,0,c+i*.9);f.addColorStop(0,"rgba(120,62,24,0.4)"),f.addColorStop(1,"rgba(120,62,24,0)"),n.fillStyle=f,n.fillRect(l-1.5,c,3,i*.9)}}}for(let r=0;r<Hl;r++)for(let o=r%2?2:0;o<=ha;o+=4)n.fillStyle="rgba(40,32,20,0.5)",n.fillRect(r*e,o*i-.8,e,1.6);n.fillStyle="rgba(70,58,40,0.5)",n.font="700 11px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("L.P.T.B.",e*2.5,i*3.5-9);const s=n.createLinearGradient(0,0,0,sn);s.addColorStop(0,"rgba(30,24,14,0.3)"),s.addColorStop(.3,"rgba(30,24,14,0.05)"),s.addColorStop(.75,"rgba(30,24,14,0.06)"),s.addColorStop(1,"rgba(34,30,16,0.42)"),n.fillStyle=s,n.fillRect(0,0,sn,sn),Xe(n,0,0,sn,sn,4242,1.1,!1)}let Gl=null;function jx(){if(!Gl){const n=vn(sn,sn);Zx(n.getContext("2d")),Gl=Ds(n,{repeatU:!0})}return Gl}const Du={uPeriod:3},mt={R:2.515,YC:-.05,CEIL:2.2,XT:.555,GW:.8,STUB:2,WALL:.3,DOOR_W:1.1,DOOR_H:2,UNIT:1.9,UNITS:14,STAIR:{x0:.95,x1:2.05,steps:9},TIERS:[.22,.85,1.45],LONG:[-1.45,-.84],CROSS:[.82,2.57]};mt.LEN=mt.UNITS*mt.UNIT+.6;mt.Z0=mt.STUB+mt.WALL;mt.Z1=mt.Z0+mt.LEN;mt.TOTAL=mt.Z1+mt.WALL+mt.STUB;mt.ZS=mt.Z0+.3+7*mt.UNIT;const Vl=(n,t)=>mt.XT+t*Math.sqrt(Math.max(0,mt.R*mt.R-(n-mt.YC)**2));function Kx(n,t){const{b:e,sheet:i,env:s}=n,{Z0:r,Z1:o,ZS:a,TIERS:l}=mt,c=U=>t*U,f=[],h=(s.wrong||0)>=2.5,u=i.add(132,168,(U,R,z)=>Yc(U,R,z,...Ye.mow)),p=i.add(132,168,(U,R,z)=>Yc(U,R,z,Ye.rules[0],Ye.rules[1],h?Ye.rulesOdd:Ye.rules[2],Ye.rules[3])),m=i.add(200,136,(U,R,z)=>fx(U,R,z,h?"C":"F")),_=(U,R,z=200)=>i.add(z,38,(H,$,Y)=>cx(H,$,Y,U,R)),d=(U,R)=>i.add(164,33,(z,H,$)=>Xc(z,H,$,U,R)),g=(U,R)=>t>0==R<0?U?"right":"left":U?"left":"right",S={buck:_("Buck Street entrance",g(!0,-1)),tube:_("To the tube station",g(!0,1)),under:_("Underhill Street entrance",g(!0,1)),lower:_("Lower deck",null,104),section:d("SECTION F"),bunks:d("BUNKS 2401 – 2640"),canteen:d("CANTEEN",g(!0,-1)),lav:d("LAVATORIES",g(!0,-1)),aid:d("MEDICAL AID POST",g(!0,-1)),mesh:i.add(128,64,(U,R,z)=>ax(U,R,z)),rail:i.add(128,64,(U,R,z)=>lx(U,R,z)),phone:i.add(64,96,(U,R,z)=>ux(U,R,z))},y={tint:[.42,.17,.13]},b=Vt("white"),A=(U,R,z=1.5)=>e.box("atlas",c(U)-.02,0,R-.02,c(U)+.02,z,R+.02,b,y,"xXzZ"),[M,T]=mt.LONG,[w,v]=mt.CROSS;for(let U=0;U<mt.UNITS;U++){const R=r+.3+U*mt.UNIT,z=R+mt.UNIT;A(T,R);for(const H of l)e.quad("sheet",[c(M),H,R+.03],[c(M),H,z-.03],[c(T),H,z-.03],[c(T),H,R+.03],[0,1,0],S.mesh),e.quad("atlas",[c(T),H-.045,R],[c(T),H-.045,z],[c(T),H,z],[c(T),H,R],[t,0,0],b,y);if(e.quad("sheet",[c(T+.012),l[1]-.61,R+.04],[c(T+.012),l[1]-.61,z-.04],[c(T+.012),l[1]-.05,z-.04],[c(T+.012),l[1]-.05,R+.04],[t,0,0],S.mesh),!(U===0||U===mt.UNITS-1||U>=6&&U<=8))for(const[H,$]of[[R+.02,R+.63],[R+1.25,R+1.86]]){A(w,H),A(w,$);for(const Y of l){const G=Math.min(v,Vl(Y+.05,1)-.06);e.quad("sheet",[c(w),Y,H],[c(G),Y,H],[c(G),Y,$],[c(w),Y,$],[0,1,0],S.mesh),e.quad("atlas",[c(w),Y-.045,H],[c(w),Y-.045,$],[c(w),Y,$],[c(w),Y,H],[-t,0,0],b,y)}}}A(T,r+.3+mt.UNITS*mt.UNIT),f.push({x:c(-1),y:.95,z:r+6.2,r:3.6,n:[t,0],label:"look at bunks",title:"BUNKS",text:Ye.bunks});const x=(U,R,z,H,$,Y,G)=>{const K=-R*t,at=z+K*H/2,st=z-K*H/2,xt=c(Vl($,R)-R*.035),At=c(Vl(Y,R)-R*.035);e.quad("sheet",[xt,$,at],[xt,$,st],[At,Y,st],[At,Y,at],[K,-.6,0],U),f.push({x:(xt+At)/2,y:($+Y)/2,z,r:5,n:[K,0],label:"read lettering",title:"STENCILLED ON THE LINING",text:G})};x(S.bunks,-1,r+8.5,1.9,1.64,1.9,"BUNKS 2401 – 2640"),x(S.section,1,r+5.2,1.7,1.72,1.96,"SECTION F"),x(S.section,-1,r+21.5,1.7,1.64,1.88,"SECTION F");const E=(U,R,z,H,$,Y,G)=>{const K=Y>0?r+.03:o-.03,at=c(R)-Y*H/2,st=c(R)+Y*H/2;e.quad("sheet",[at,z,K],[st,z,K],[st,z+$,K],[at,z+$,K],[0,0,Y],U,{tint:[1.05,1.05,1.05]}),G&&f.push({x:c(R),y:z+$/2,z:K,r:4.5,n:[0,Y],...G})},P=U=>({label:"read sign",title:"SIGN",text:U});E(S.buck,1.42,1.68,1.15,.22,-1,P(`Buck Street entrance ${t>0?"→":"←"} (through the door)`)),E(m,1.55,.98,.8,.545,-1,{label:"read plan",title:"PLAN",text:Ye.plan}),E(S.canteen,2.33,1.36,.66,.132,-1),E(S.lav,2.33,1.18,.66,.132,-1),E(S.aid,2.33,1,.66,.132,-1),f.push({x:c(2.33),y:1.24,z:o-.03,r:4.5,n:[0,-1],label:"read lettering",title:"STENCILLED ON THE WALL",text:"CANTEEN · LAVATORIES · MEDICAL AID POST — all through the door, in the next section."}),E(S.phone,.84,1.14,.3,.45,-1,{label:"lift receiver",title:"TELEPHONE",text:"A wall telephone in a wooden case. The card says WARDEN — 1 RING. You lift the receiver.",r:3.2,onRead:U=>U.director.announcer.say({text:Ye.phone,chime:"none",tag:"(telephone)",urgent:!0})}),E(S.tube,1.42,1.68,1.15,.22,1,P(`${t>0?"←":"→"} To the tube station (the way you came)`)),E(S.under,1.42,1.4,1.15,.22,1,P(`${t>0?"←":"→"} Underhill Street entrance`)),E(u,1.3,.74,.45,.57,1,{label:"read notice",title:Ye.mow[0],text:`${Ye.mow[1]}. ${Ye.mow[2].join(" ")} ${Ye.mow[3]}.`}),E(p,1.95,.74,.45,.57,1,{label:"read notice",title:"TO SHELTERERS",text:`${(h?Ye.rulesOdd:Ye.rules[2]).join(" ")} — ${Ye.rules[3]}`});const L=mt.STAIR,D=a+L.steps*io+.6;for(const[U,R]of[[L.x0,-1],[L.x0,1],[L.x1,-1]])e.quad("sheet",[c(U),0,a],[c(U),0,D],[c(U),1,D],[c(U),1,a],[t*R,0,0],S.rail);for(const U of[-1,1])e.quad("sheet",[c(L.x0),0,D],[c(L.x1),0,D],[c(L.x1),1,D],[c(L.x0),1,D],[0,0,U],S.rail);e.box("atlas",Math.min(c(L.x0),c(L.x1)),.8,a-.008,Math.max(c(L.x0),c(L.x1)),.815,a+.008,Vt("black"),null,"yYzZ");const k=(L.x0+L.x1)/2,N=c(k)+.25,B=c(k)-.25;return e.quad("sheet",[N,.6,a-.012],[B,.6,a-.012],[B,.79,a-.012],[N,.79,a-.012],[0,0,-1],S.lower),f.push({x:c(k),y:.7,z:a-.012,r:3.2,n:[0,-1],label:"read plate",title:"ON THE CHAIN",text:Ye.lower}),{items:f}}function da(n,t,e,i,s){const r=mt.DOOR_W/2-.005,o=mt.DOOR_H-.005,a=i.length,l=[{x:i[0].x,y:-.06},{x:-r,y:-.06},{x:-r,y:o},{x:r,y:o},{x:r,y:-.06},{x:i[a-1].x,y:-.06}];for(let c=a-1;c>=0;c--)i[c].y>.01&&l.push({x:i[c].x,y:i[c].y});Ro(n,{x:0,y:0,z:t,yaw:0},e,l,s)}const Jx={type:"shelter",sheetSize:512,plan(n,t){const e=n.sign(),i=mt.XT-mt.R-.25,s=mt.XT+mt.R+.25;return{p:{side:e,faulty:n.int(0,5),dark:n.chance(.15+.05*(t.wrong||0))},exits:[{x:0,y:0,z:mt.TOTAL,yaw:0}],box:e>0?[i,-2.6,0,s,3.3,mt.TOTAL]:[-s,-2.6,0,-i,3.3,mt.TOTAL]}},build(n){const{b:t,p:e}=n,{R:i,YC:s,CEIL:r,XT:o,GW:a,Z0:l,Z1:c,ZS:f}=mt,h=e.side,u=Z=>h*Z,p=Z=>({x:0,y:0,z:Z,yaw:0}),m=yn(t,[p(0),p(mt.STUB)],wt,{floor:Nt("floor")}),_=yn(t,[p(mt.TOTAL-mt.STUB),p(mt.TOTAL)],wt,{floor:Nt("floor"),u0:mt.TOTAL-mt.STUB});t.addPortal(0,0,0,0),t.addPortal(0,0,mt.TOTAL,0),Qn(t,p(0),wt.crown);const d=wo(wt,.05);da(t,mt.STUB,-1,d,{layer:"tile",grid:.7}),da(t,mt.TOTAL-mt.STUB,1,d,{layer:"tile",grid:.7});const g=6,S=Math.asin((-.04-s)/i),y=Math.asin((r-s)/i),b=Z=>Array.from({length:g+1},(O,ut)=>{const ht=S+(y-S)*ut/g;return{x:o+Z*i*Math.cos(ht),y:s+i*Math.sin(ht),nx:-Z*Math.cos(ht),ny:-Math.sin(ht),v:ut/g}}),A=b(-1),M=b(1),T=[...A.map(Z=>({x:u(Z.x)-h*.05,y:Z.y+.03})),...M.slice().reverse().map(Z=>({x:u(Z.x)+h*.05,y:Z.y+.03}))];h<0&&T.reverse();const w=Vt("cream"),v={tint:[.86,.84,.76]};da(t,l,1,T,{layer:"atlas",grid:.8,uv:()=>[(w[0]+w[2])/2,(w[1]+w[3])/2],o:v}),da(t,c,-1,T,{layer:"atlas",grid:.8,uv:()=>[(w[0]+w[2])/2,(w[1]+w[3])/2],o:v});const x=Vt("steelDark"),E=mt.DOOR_W/2;for(const[Z,O]of[[mt.STUB,l],[c,mt.TOTAL-mt.STUB]]){for(const ut of[-1,1])t.quad("atlas",[ut*E,-.03,Z],[ut*E,-.03,O],[ut*E,mt.DOOR_H+.01,O],[ut*E,mt.DOOR_H+.01,Z],[-ut,0,0],x);t.quad("atlas",[-E-.01,mt.DOOR_H,Z],[E+.01,mt.DOOR_H,Z],[E+.01,mt.DOOR_H,O],[-E-.01,mt.DOOR_H,O],[0,-1,0],x),t.quad("atlas",[-E-.02,.003,Z-.05],[E+.02,.003,Z-.05],[E+.02,.003,O+.05],[-E-.02,.003,O+.05],[0,1,0],Nt("floorDark")),t.quad("atlas",[-E-.3,-.003,Z-.6],[E+.3,-.003,Z-.6],[E+.3,-.003,O+.6],[-E-.3,-.003,O+.6],[0,1,0],Nt("floorDark"))}const P=Nt("door");t.quad("atlas",[u(-E-.08),0,l+.05],[u(-E-1.03),0,l+.05],[u(-E-1.03),1.98,l+.05],[u(-E-.08),1.98,l+.05],[0,0,1],P,{tint:[.55,.62,.55]}),t.quad("atlas",[u(-E-1.03),0,c-.05],[u(-E-.08),0,c-.05],[u(-E-.08),1.98,c-.05],[u(-E-1.03),1.98,c-.05],[0,0,-1],P,{tint:[.55,.62,.55]});const L=Math.round(mt.LEN),D=.04,k=Array.from({length:L+1},(Z,O)=>O===0?l-D:O===L?c+D:l+mt.LEN*O/L);for(const Z of[A,M])for(let O=0;O<L;O++){const ut=k[O],ht=k[O+1];for(let Rt=0;Rt<g;Rt++){const dt=Z[Rt],qt=Z[Rt+1],Ct=[u(dt.nx),dt.ny,0],F=[u(qt.nx),qt.ny,0];t.quadN("lining",[u(dt.x),dt.y,ut],[u(dt.x),dt.y,ht],[u(qt.x),qt.y,ht],[u(qt.x),qt.y,ut],[(Ct[0]+F[0])/2,(Ct[1]+F[1])/2,0],Ct,Ct,F,F,[ut/Du.uPeriod,.003+.994*dt.v,ht/Du.uPeriod,.003+.994*qt.v])}}const N=Nt("concrete"),B=Math.sqrt(i*i-s*s)+.04,U=Math.sqrt(i*i-(r-s)**2)+.04,R=mt.STAIR,z=.01,H=[f,f+R.steps*io+.6-z],$=k.concat(H).sort((Z,O)=>Z-O).filter((Z,O,ut)=>O===0||Z-ut[O-1]>.02);for(let Z=0;Z<$.length-1;Z++){const O=$[Z],ut=$[Z+1];for(const[dt,qt]of[[o-U,o],[o,o+U]])t.quad("atlas",[u(dt),r,O],[u(qt),r,O],[u(qt),r,ut],[u(dt),r,ut],[0,-1,0],N,{tint:[.9,.88,.8]});const ht=O>=H[0]-.03&&ut<=H[1]+.03,Rt=[[o-B,-a,.82],[-a,a,.66],[a,R.x0+z,.82]].concat(ht?[]:[[R.x0+z,R.x1-z,.82]],[[R.x1-z,o+B,.82]]);for(const[dt,qt,Ct]of Rt)t.quad("atlas",[u(dt),0,O],[u(qt),0,O],[u(qt),0,ut],[u(dt),0,ut],[0,1,0],N,{tint:[Ct,Ct,Ct*.97]})}const Y=H[1]+z,G=-1.44-.02,K=Vt("blackout");Xa(t,f+.3,R.steps,-1,h>0?[R.x0,R.x1]:[-2.05,-.95],0),t.quad("atlas",[u(R.x0),0,f-.03],[u(R.x1),0,f-.03],[u(R.x1),0,f+.3],[u(R.x0),0,f+.3],[0,1,0],N,{tint:[.82,.82,.8]}),t.quad("atlas",[u(R.x0),G,f+.3+R.steps*io],[u(R.x1),G,f+.3+R.steps*io],[u(R.x1),G,Y+2],[u(R.x0),G,Y+2],[0,1,0],N,{tint:[.5,.5,.48]});for(const[Z,O]of[[R.x0,1],[R.x1,-1]])t.quad("atlas",[u(Z),G-.3,f],[u(Z),G-.3,Y+2],[u(Z),0,Y+2],[u(Z),0,f],[h*O,0,0],N,{tint:[.55,.54,.5]});t.quad("atlas",[u(R.x0),-.22,Y],[u(R.x1),-.22,Y],[u(R.x1),0,Y],[u(R.x0),0,Y],[0,0,-1],N,{tint:[.5,.5,.46]}),t.quad("atlas",[u(R.x0),G-.3,Y+2],[u(R.x1),G-.3,Y+2],[u(R.x1),-.2,Y+2],[u(R.x0),-.2,Y+2],[0,0,-1],K,{emit:0}),t.quad("atlas",[u(R.x0),-.22,Y],[u(R.x1),-.22,Y],[u(R.x1),-.22,Y+2],[u(R.x0),-.22,Y+2],[0,-1,0],K,{emit:.02}),t.quad("atlas",[u(R.x0),G-.3,f],[u(R.x1),G-.3,f],[u(R.x1),0,f],[u(R.x0),0,f],[0,0,1],N,{tint:[.5,.5,.46]}),t.addLight(u((R.x0+R.x1)/2),-.9,Y-.6,.4,3.2,!1,[1,.8,.5]);const at=Nt("lamp");for(let Z=0;Z<6;Z++){const O=l+2.4+Z*((mt.LEN-4.8)/5),ut=e.dark&&Z%2===1,ht=e.faulty===Z;t.box("atlas",-.11,r-.1,O-.07,.11,r,O+.07,Vt("steelDark"),null,"xXzZ"),t.quad("atlas",[-.1,r-.1,O-.06],[.1,r-.1,O-.06],[.1,r-.1,O+.06],[-.1,r-.1,O+.06],[0,-1,0],at,{emit:ut?.1:1.5,flick:ht,tint:[1,.82,.55]}),ut||t.addLight(0,r-.35,O,.78,7,ht,[1,.84,.58])}const st=Kx(n,h),xt=(Z,O,ut)=>({ax:0,az:Z,bx:0,bz:O,hw:ut,ya:0,yb:0,surface:"stone"}),At=[...m.cells,xt(mt.STUB-.1,l+.1,E-.05),xt(l,c,a),xt(c-.1,mt.TOTAL-mt.STUB+.1,E-.05),..._.cells,{ax:u(a-.1),az:f-.65,bx:u(R.x1-.05),bz:f-.65,hw:.6,ya:0,yb:0,surface:"stone"}],Ft=[...m.walls,..._.walls],Yt=wt.W/2+.1,Ot=a+.1;for(const[Z,O]of[[mt.STUB,Yt],[l,Ot],[c,Ot],[mt.TOTAL-mt.STUB,Yt]])Ft.push([-O,Z,-E,Z],[E,Z,O,Z]);for(const[Z,O]of[[mt.STUB,l],[c,mt.TOTAL-mt.STUB]])for(const ut of[-1,1])Ft.push([ut*E,Z,ut*E,O]);return Ft.push([u(-a),l,u(-a),c],[u(a),l,u(a),f-1.25],[u(a),f,u(a),c]),Ft.push([u(a),f-1.25,u(R.x1),f-1.25],[u(R.x1),f-1.25,u(R.x1),f],[u(a),f,u(R.x1),f]),{cells:At,walls:Ft,items:st.items,frames:[p(0),p(mt.TOTAL)]}}},et={R0:1.25,R1:2.75,RC:1.28,RA:2.5,RISE:.172,STEPS:17,HALVES:19,LAND:23.6*Math.PI/180,SLAB:.35,STUB:2,THROAT:.28,DOOR_H:2.1,CEIL:3};et.STEP=(Math.PI-et.LAND)/et.STEPS;et.PER=et.STEPS+1;et.TURN=2*et.PER;et.N=1+et.HALVES*et.PER;et.H=et.HALVES*et.STEPS*et.RISE;et.DOOR_W=2*et.R1*Math.sin(et.LAND/2);et.ZC=et.STUB+et.THROAT+et.R1*Math.cos(et.LAND/2);const De=n=>n===0?-et.LAND/2:Math.floor((n-1)/et.PER)*Math.PI+et.LAND/2+(n-1)%et.PER*et.STEP,pn=n=>n===0?0:(Math.floor((n-1)/et.PER)*et.STEPS+(n-1)%et.PER)*et.RISE,Qx=n=>n===0||(n-1)%et.PER===et.STEPS,pa=n=>n===0?0:n*et.PER;function tS(n,t){const e=[];for(let s=0;s<et.HALVES-1;s++)e.push({n:s<=3?17-s:18-s,hand:!1});const i=t>=3?3:t>=1.5?2:1;for(let s=0;s<i;s++){const r=n.int(6,15);e[r]={n:e[r].n+n.int(2,4),hand:!0}}return e}function eS(n){const{env:t}=n,e=wn(n),i=Pf(e,t);return{story:i,paper:Sd(n,i),core:Nt("cage"),tread:Nt("treadY")}}function nS(n,t,e){const{b:i,sheet:s,p:r}=n,o=r.dir,a=wn(n),l=r.wrong||0,{R1:c,RC:f,N:h,H:u}=et,p=[],m=[],_=D=>[o*Math.cos(D),0,Math.sin(D)],d=D=>[o*Math.sin(D),0,-Math.cos(D)],g=c*Math.cos(et.LAND/2),S=(D,k,N,B,U,R)=>{const z=e(g-.025,k,0),H=_(k),$=-o*B/2;return i.quad("sheet",[z[0]+H[0]*$,N,z[2]+H[2]*$],[z[0]-H[0]*$,N,z[2]-H[2]*$],[z[0]-H[0]*$,N+U,z[2]-H[2]*$],[z[0]+H[0]*$,N+U,z[2]+H[2]*$],d(k).map(Y=>-Y),D,R),{x:z[0],y:N+U/2,z:z[2],n:[-d(k)[0],-d(k)[2]]}},y=(D,k,N,B,U)=>{const R=e(f+.012,k,0),z=_(k),H=o*B/2;return i.quad("sheet",[R[0]+z[0]*H,N,R[2]+z[2]*H],[R[0]-z[0]*H,N,R[2]-z[2]*H],[R[0]-z[0]*H,N+U,R[2]-z[2]*H],[R[0]+z[0]*H,N+U,R[2]+z[2]*H],d(k),D,{tint:[1.05,1.05,1.05]}),{x:R[0],y:N+U/2,z:R[2],n:[d(k)[0],d(k)[2]]}},b=D=>s.add(132,132,(k,N,B)=>Iy(k,N,B,D)),A=s.add(132,54,(D,k,N)=>Uy(D,k,N,ls.green)),M=et.STUB-.03,T=-o*1,w=(D,k,N,B)=>i.quad("sheet",[T+N/2,k,M],[T-N/2,k,M],[T-N/2,k+B,M],[T+N/2,k+B,M],[0,0,-1],D,{tint:[1.05,1.05,1.05]});w(b(ls.sign),1.02,.5,.5),w(A,1.56,.5,.205),p.push({x:T,y:1.35,z:M,r:5,n:[0,-1],label:"read sign",title:"SIGN",text:`${ls.green.join(" ")}. ${ls.sign.join(". ")}.`,stairSign:0});const v=tS(a,l),x=new Map,E=Nt("lamp");for(let D=0;D<=et.HALVES;D++){const k=pa(D),N=(De(k)+De(k+1))/2,B=pn(k),U=e(g-.05,N,B+2.38),R=_(N),z=r.faulty===D,H=l>=3&&D%7===5;if(i.quad("atlas",[U[0]-R[0]*.17,U[1]-.06,U[2]-R[2]*.17],[U[0]+R[0]*.17,U[1]-.06,U[2]+R[2]*.17],[U[0]+R[0]*.17,U[1]+.06,U[2]+R[2]*.17],[U[0]-R[0]*.17,U[1]+.06,U[2]-R[2]*.17],d(N).map(st=>-st),E,{emit:H?.1:1.7,flick:z,tint:[1,.95,.82]}),!H){const st=e(c-.5,N,B+2.15);i.addLight(st[0],st[1],st[2],.95,6.8,z,[1,.95,.84])}if(m.push({x0:-c,x1:c,z0:et.ZC-c,z1:et.ZC+c,y0:B-.2,y1:B+.5,once:!1,fire:st=>{st.state.landing=D}}),D===0||D===et.HALVES)continue;const{n:$,hand:Y}=v[D-1],G=`${$}${Y?"h":""}`;x.has(G)||x.set(G,s.add(36,48,(st,xt,At)=>Dy(st,xt,At,String($),Y)));const K=D>1?v[D-2].n:18,at=Y?" Written by hand, over another number.":$===K?" The landing below said the same.":$>K?" That is more than the last one.":"";p.push({...y(x.get(G),N,B+1.42,.21,.28),r:3.4,label:"read number",title:"ON THE PILLAR",text:`A sheet of paper taped to the pillar: “${$}”.${at}`,landing:D,number:$})}[[6,ls.signs[0]],[12,ls.signs[l>=2.5?1:0]]].forEach(([D,k],N)=>{const B=pa(D),U=(De(B)+De(B+1))/2;p.push({...S(b(k),U,pn(B)+1.1,.5,.5,{tint:[1.05,1.05,1.05]}),r:4,label:"read sign",title:"SIGN",text:`${k.join(". ")}.`,stairSign:N+1})});const P=Vt("rubber"),L=[0,1,0];for(const[D,k,N]of[[f+.07,1,!1],[c-.08,-1,!0]])for(let B=0;B<h;B++){if(N&&(B===0||B===h-1))continue;const U=De(B),R=De(B+1),z=pn(B)+.95,H=pn(B+1)+.95,$=(U+R)/2;i.quad("atlas",e(D-.02,U,z),e(D+.02,U,z),e(D+.02,R,H),e(D-.02,R,H),L,P);const Y=D+k*.02;i.quad("atlas",e(Y,U,z-.04),e(Y,R,H-.04),e(Y,R,H),e(Y,U,z),d($).map(G=>G*k),P)}for(const D of l>=3?[5,11,16]:[5,11]){const k=pa(D),N=(De(k)+De(k+1))/2+.03,B=e(2.25,N,pn(k));p.push($c(n,B[0],B[1],B[2],a.range(0,6.28),t.story,t.paper,{floor:!0,n:[-d(N)[0],-d(N)[2]]}))}return ls.hints.forEach(([D,k])=>{const N=pn(pa(D));m.push({x0:-c,x1:c,z0:et.ZC-c,z1:et.ZC+c,y0:N-.2,y1:N+.5,fire:B=>B.director.setHint(k,6)})}),m.push({x0:-c,x1:c,z0:et.ZC-c,z1:2*et.ZC,y0:u-.3,y1:u+.6,fire:D=>{D.state.climbed=(D.state.climbed||0)+1}}),{items:p,zones:m}}const Ua=et.DOOR_H-.006;function Iu(n,t,e,i){const s=et.DOOR_W/2,r=wo(wt,.05),o=r.length,a=[{x:r[0].x,y:-.06},{x:-s,y:-.06},{x:-s,y:Ua},{x:s,y:Ua},{x:s,y:-.06},{x:r[o-1].x,y:-.06}];for(let l=o-1;l>=0;l--)r[l].y>.01&&a.push({x:r[l].x,y:r[l].y});Ro(n,{x:0,y:i,z:t,yaw:0},e,a,{layer:"tile",grid:.7})}function Uu(n,t,e,i){const s=et.DOOR_W/2+.006,r=Vt("steelDark"),o=Nt("floorDark");for(const a of[-1,1])n.quad("atlas",[a*s,i-.03,t],[a*s,i-.03,e],[a*s,i+et.DOOR_H+.01,e],[a*s,i+et.DOOR_H+.01,t],[-a,0,0],r);n.quad("atlas",[-s-.01,i+et.DOOR_H,t],[s+.01,i+et.DOOR_H,t],[s+.01,i+et.DOOR_H,e],[-s-.01,i+et.DOOR_H,e],[0,-1,0],r),n.quad("atlas",[-s-.02,i,t-.04],[s+.02,i,t-.04],[s+.02,i,e+.04],[-s-.02,i,e+.04],[0,1,0],o),n.quad("atlas",[-s-.02,i+.003,t-.05],[s+.02,i+.003,t-.05],[s+.02,i+.003,e+.05],[-s-.02,i+.003,e+.05],[0,1,0],o),n.quad("atlas",[-s-.3,i-.003,t-.6],[s+.3,i-.003,t-.6],[s+.3,i-.003,e+.6],[-s-.3,i-.003,e+.6],[0,1,0],o)}const iS={type:"spiral",sheetSize:512,plan(n,t){const e=n.sign(),i=et.R1+.35;return{p:{dir:e,faulty:n.int(2,et.HALVES-2),wrong:t.wrong||0},exits:[{x:0,y:et.H,z:2*et.ZC,yaw:0}],box:[-i,-.6,0,i,et.H+et.CEIL+.4,2*et.ZC]}},build(n){const{b:t,p:e}=n,i=e.dir,{R0:s,R1:r,N:o,TURN:a,H:l}=et,c=2*et.ZC,f=(R,z,H)=>[i*R*Math.sin(z),H,et.ZC-R*Math.cos(z)],h=R=>[i*Math.cos(R),0,Math.sin(R)],u=(R,z=0)=>({x:0,y:z,z:R,yaw:0}),p=eS(n),m=yn(t,[u(0),u(et.STUB)],wt,{floor:Nt("floor")}),_=yn(t,[u(c-et.STUB,l),u(c,l)],wt,{floor:Nt("floor"),u0:3});t.addPortal(0,0,0,0),t.addPortal(0,l,c,0),Qn(t,u(0),wt.crown),Iu(t,et.STUB,-1,0),Iu(t,c-et.STUB,1,l),Uu(t,et.STUB,et.STUB+et.THROAT+.03,0),Uu(t,c-et.STUB-et.THROAT-.03,c-et.STUB,l);const d=Vt("cream"),g=[0,1,0],S=(R,z)=>R+a<=o-1?pn(z+a)-et.SLAB:l+et.CEIL+.05,y=R=>.004+.992*R/3.63;for(let R=0;R<o;R++){const z=De(R),H=De(R+1),$=pn(R),Y=pn(R+1),G=(z+H)/2,K=[-i*Math.sin(G),0,Math.cos(G)],at=R>=o-2*a;[[-.35,Ua],[Ua,null]].forEach(([xt,At],Ft)=>{if(Ft===0&&(R===0||R===o-1))return;const Yt=$+xt,Ot=Y+xt,Z=At===null?S(R,R):$+At,O=At===null?S(R,R+1):Y+At,ut=f(r,z,Yt),ht=f(r,H,Ot),Rt=f(r,H,O),dt=f(r,z,Z);at?t.quad("atlas",ut,ht,Rt,dt,K,d,{tint:[1.02,1.02,.98]}):t.quadUV("tile",ut,ht,Rt,dt,K,[z*r/6,y(Yt-$)],[H*r/6,y(Ot-Y)],[H*r/6,y(O-Y)],[z*r/6,y(Z-$)])}),Qx(R)?t.quad("atlas",f(s,z,$),f(r,z,$),f(r,H,$),f(s,H,$),g,Nt("floorDark")):(t.quad("atlas",f(r,H,Y),f(s,H,Y),f(s,z,Y),f(r,z,Y),g,p.tread),t.quad("atlas",f(s,z,$),f(r,z,$),f(r,z,Y),f(s,z,Y),h(z).map(xt=>-xt),Nt("riser"),{tint:[.6,.6,.62]})),R>=a&&t.quad("atlas",f(s,z,$-et.SLAB),f(r,z,$-et.SLAB),f(r,H,Y-et.SLAB),f(s,H,Y-et.SLAB),[0,-1,0],d,{tint:[.74,.72,.66]}),R>=o-a&&t.quad("atlas",f(s,z,l+et.CEIL),f(r,z,l+et.CEIL),f(r,H,l+et.CEIL),f(s,H,l+et.CEIL),[0,-1,0],d,{tint:[.95,.95,.92]})}const b=24,A=et.RC,M=1.95,T=Math.ceil((l+et.CEIL+.55)/M);for(let R=0;R<b;R++){const z=R/b*Math.PI*2,H=(R+1)/b*Math.PI*2,$=(z+H)/2;for(let Y=0;Y<T;Y++){const G=-.5+Y*M,K=-.5+(Y+1)*M;t.quad("atlas",f(A,z,G),f(A,H,G),f(A,H,K),f(A,z,K),[i*Math.sin($),0,-Math.cos($)],p.core)}}const w=De(0),v=De(o),x=pn(a)-et.SLAB+.05,E=r+.05;t.quadUV("tile",f(s,w,-.1),f(E,w,-.1),f(E,w,x),f(s,w,x),h(w),[0,y(-.1)],[.25,y(-.1)],[.25,y(x)],[0,y(x)]),t.quad("atlas",f(s,v,l-.1),f(E,v,l-.1),f(E,v,l+et.CEIL+.05),f(s,v,l+et.CEIL+.05),h(v).map(R=>-R),d,{tint:[1.02,1.02,.98]}),t.quad("atlas",f(s,v,l-et.SLAB),f(E,v,l-et.SLAB),f(E,v,l+et.CEIL+.05),f(s,v,l+et.CEIL+.05),h(v),d,{tint:[.9,.9,.86]});const P=pn(o-a)-et.SLAB-.1;t.quad("atlas",f(r+.012,v-.035,P),f(r+.012,v+.035,P),f(r+.012,v+.035,l+et.CEIL+.05),f(r+.012,v-.035,l+et.CEIL+.05),[-i*Math.sin(v),0,Math.cos(v)],d,{tint:[1,1,.96]});const L=[...m.cells,..._.cells],D=[...m.walls,..._.walls],k=et.DOOR_W/2;L.push({ax:0,az:et.STUB-.1,bx:0,bz:et.STUB+et.THROAT+.5,hw:k-.04,ya:0,yb:0,surface:"stone"},{ax:0,az:c-et.STUB-et.THROAT-.5,bx:0,bz:c-et.STUB+.1,hw:k-.04,ya:l,yb:l,surface:"stone"});for(let R=0;R<o;R++){const z=f(et.RA,De(R),0),H=f(et.RA,De(R+1),0);L.push({ax:z[0],az:z[2],bx:H[0],bz:H[2],hw:1.3,ya:pn(R),yb:pn(R+1),surface:"stone"})}const N=(R,z,H,$,Y,G)=>{const K=f(R,z,0),at=f(H,$,0);D.push(Y===void 0?[K[0],K[2],at[0],at[2]]:[K[0],K[2],at[0],at[2],Y,G])};for(let R=0;R<a;R++)R===0?N(r,De(0),r,De(1),2,1e9):R===(o-1)%a?N(r,De(R),r,De(R+1),-1e9,l-2):N(r,De(R),r,De(R+1));for(let R=0;R<16;R++)N(A+.02,R/16*Math.PI*2,A+.02,(R+1)/16*Math.PI*2);N(s,w,r,w,-1,2.5),N(s,v,r,v,l-2.5,1e9);const B=wt.W/2+.1;for(const[R,z,H]of[[et.STUB,et.STUB+et.THROAT,et.STUB],[c-et.STUB-et.THROAT,c-et.STUB,c-et.STUB]])for(const $ of[-1,1])D.push([$*k,R,$*k,z],[$*k,H,$*B,H]);const U=nS(n,p,f);return{cells:L,walls:D,items:U.items,extra:{zones:U.zones}}}};function Wl(n,t,e,i,s){const[r,o,a,l]=t;n.save(),n.beginPath(),n.rect(r,o,a,l),n.clip(),n.fillStyle="#050607",n.fillRect(r,o,a,l),n.fillStyle=i,n.textAlign="center",n.textBaseline="middle",s.fitText(n,e,a-10,l*1.05,s.OSD_FONT),n.shadowColor=i,n.shadowBlur=3,n.fillText(e,r+a/2,o+l*.52),n.shadowBlur=0,n.fillStyle="rgba(0,0,0,0.5)";for(let c=r;c<r+a;c+=2)n.fillRect(c,o,.8,l);for(let c=o;c<o+l;c+=2)n.fillRect(r,c,a,.8);n.restore()}function sS(n,t,e,i,s,r){n.fillStyle=r,n.beginPath();const o=s?-1:1;n.moveTo(t,e+o*i),n.lineTo(t-i*.8,e-o*i*.1),n.lineTo(t-i*.28,e-o*i*.1),n.lineTo(t-i*.28,e-o*i),n.lineTo(t+i*.28,e-o*i),n.lineTo(t+i*.28,e-o*i*.1),n.lineTo(t+i*.8,e-o*i*.1),n.fill()}function rS(n,t,e,i){const s="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif";n.fillStyle="#f6f4ea",n.fillRect(0,0,t,e),n.fillStyle="#16205e",n.fillRect(0,0,t,e*.09),n.strokeStyle="#2b2d2f",n.lineWidth=2,n.strokeRect(1,1,t-2,e-2),n.textBaseline="middle",n.textAlign="left";const r=i?t*.38:t*.56,o=i?"Lifts to street":"Lifts";i?(n.fillStyle="#141414",n.fillRect(e*.14,e*.2,r-e*.28,e*.66),n.fillStyle="#ffd329",n.font=`400 ${e*.4}px ${s}`,n.fillText("Way out",e*.3,e*.55,r-e*.6)):(n.fillStyle="#16205e",n.font=`400 ${e*.42}px ${s}`,n.fillText("Northern line",e*.3,e*.56,r-e*.5));const a=r+e*.32,l=e*.55,c=e*.24;n.strokeStyle="#16205e",n.lineWidth=e*.07,n.lineCap="butt",n.beginPath(),n.moveTo(a,l+c),n.lineTo(a,l-c),n.moveTo(a-c*.8,l-c*.2),n.lineTo(a,l-c),n.lineTo(a+c*.8,l-c*.2),n.stroke(),n.fillStyle="#16205e",n.font=`400 ${e*.4}px ${s}`,n.fillText(o,a+e*.34,e*.56,t-a-e*.5)}function oS(n,t,e){const{steel:i,r:s}=e;let[r,o,a,l]=t.head;i(n,r,o,a,l,s,-8),n.fillStyle="#060708",n.fillRect(r+a*.2,o+l*.22,a*.6,l*.56),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(r,o+l-2,a,2),[r,o,a,l]=t.hood,i(n,r,o,a,l,s,0),n.fillStyle="#2a2d30",n.fillRect(r+a*.04,o+l*.14,a*.92,l*.5),n.fillStyle="#060708",n.fillRect(r+a*.06,o+l*.2,a*.8,l*.38),n.fillStyle="#17191b";for(let f=0;f<5;f++)for(let h=0;h<4;h++)n.beginPath(),n.arc(r+a*.885+f*5,o+l*.25+h*5,1.3,0,7),n.fill();n.fillStyle="#15171a",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${l*.28}px ${e.BODY_FONT}`,n.fillText("1",r+a/2,o+l*.83),Wl(n,t.ledClose,"STAND CLEAR DOORS CLOSING","#bfe0ff",e),Wl(n,t.ledUp,"LIFT TRAVELLING UP","#35e06a",e),Wl(n,t.ledDown,"LIFT TRAVELLING DOWN","#35e06a",e),[r,o,a,l]=t.plate,i(n,r,o,a,l,s,12),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=1,n.strokeRect(r+.5,o+.5,a-1,l-1),n.fillStyle="#121315",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${l*.3}px ${e.HEAD_FONT}`,n.fillText("LIFT",r+a/2,o+l*.28,a*.86),n.font=`400 ${l*.5}px ${e.HEAD_FONT}`,n.fillText("1",r+a/2,o+l*.7),[r,o,a,l]=t.lamps,i(n,r,o,a,l,s,6);for(let f=0;f<7;f++)n.fillStyle="#1b1213",n.fillRect(r+a*.33,o+l*(.07+f*.127),a*.34,l*.085);[r,o,a,l]=t.lampOn,n.fillStyle="#2a0806",n.fillRect(r,o,a,l);const c=n.createRadialGradient(r+a/2,o+l/2,1,r+a/2,o+l/2,a*.6);c.addColorStop(0,"#fff0d8"),c.addColorStop(.35,"#ff5a2e"),c.addColorStop(1,"#a01208"),n.fillStyle=c,n.fillRect(r+1,o+1,a-2,l-2);for(const[f,h]of[["arrowUp",!0],["arrowDn",!1]])[r,o,a,l]=t[f],n.fillStyle="#140504",n.fillRect(r,o,a,l),sS(n,r+a/2,o+l/2,a*.36,h,"#ff4a26");[r,o,a,l]=t.exit,n.fillStyle="#0a0a0b",n.fillRect(r,o,a,l),n.fillStyle="#ff7a3c",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${l*.62}px ${e.BODY_FONT}`,n.shadowColor="#ff5a20",n.shadowBlur=3,n.fillText("EXIT",r+a/2,o+l*.54),n.shadowBlur=0,[r,o,a,l]=t.auto,i(n,r,o,a,l,s,-2),n.fillStyle="#0b0b0c",n.fillRect(r+a*.08,o+l*.1,a*.84,l*.8),n.fillStyle="#f2f1ea",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${l*.24}px ${e.BODY_FONT}`,n.fillText("AUTOMATIC",r+a/2,o+l*.36,a*.76),n.fillText("SERVICE",r+a/2,o+l*.66,a*.76);for(const[f,h]of[["next",!1],["nextOn",!0]])[r,o,a,l]=t[f],i(n,r,o,a,l,s,-6),n.fillStyle="#0b0b0c",n.fillRect(r+4,o+4,a-8,l-8),n.fillStyle=h?"#fff3e0":"#b9b6ad",n.textAlign="left",n.textBaseline="middle",n.font=`700 ${l*.44}px ${e.BODY_FONT}`,n.fillText("NEXT LIFT",r+10,o+l*.53,a*.62),n.fillStyle=h?"#ff8a2a":"#3a2a20",h&&(n.shadowColor="#ff6a10",n.shadowBlur=4),n.beginPath(),n.moveTo(r+a-9,o+l/2),n.lineTo(r+a-22,o+l*.26),n.lineTo(r+a-22,o+l*.74),n.fill(),n.shadowBlur=0;[r,o,a,l]=t.notice,n.fillStyle="#efece0",n.fillRect(r,o,a,l),n.strokeStyle="rgba(0,0,0,0.3)",n.lineWidth=1,n.strokeRect(r+.5,o+.5,a-1,l-1),n.fillStyle="#16205e",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${l*.19}px ${e.BODY_FONT}`,["Please","pass right","inside the","lift"].forEach((f,h)=>n.fillText(f,r+a*.1,o+l*(.2+h*.2),a*.8));for(const[f,h]of[[.06,.08],[.94,.08],[.06,.92],[.94,.92]])n.fillStyle="#8a8d8f",n.beginPath(),n.arc(r+a*f,o+l*h,1.3,0,7),n.fill()}const br=1024,Mr=512,mn={leafF:[0,0,96,448],leafS:[96,0,104,448],wall:[200,0,448,352],end:[648,0,104,448],panel:[752,0,104,448],ceil:[856,0,168,216],floor:[856,216,96,96],steel:[952,216,72,48],dark:[952,264,72,48],sill:[856,312,168,40],jamb:[856,352,168,24],notice:[856,376,80,64],rail:[936,376,88,24],black:[936,400,88,24],head:[200,352,448,40],hood:[200,392,448,56],ledClose:[0,448,300,28],ledUp:[0,480,240,28],ledDown:[244,480,240,28],plate:[520,448,56,64],lamps:[576,448,24,64],lampOn:[600,448,16,16],arrowUp:[616,448,16,16],arrowDn:[632,448,16,16],exit:[600,464,48,24],auto:[648,448,104,64],next:[752,448,104,32],nextOn:[752,480,104,32]};function Te(n,t=1.5){const[e,i,s,r]=mn[n];return[(e+t)/br,1-(i+r-t)/Mr,(e+s-t)/br,1-(i+t)/Mr]}function ef(n){const[t,e,i,s]=mn[n];return[(t+i*.4)/br,1-(e+s*.6)/Mr,(t+i*.6)/br,1-(e+s*.4)/Mr]}function ws(n,t,e,i,s,r,o=0){const a=n.createLinearGradient(t,0,t+i,0),l=c=>{const f=Math.round(c+o);return`rgb(${f},${f+3},${f+6})`};a.addColorStop(0,l(150)),a.addColorStop(.3,l(186)),a.addColorStop(.55,l(166)),a.addColorStop(.8,l(190)),a.addColorStop(1,l(148)),n.fillStyle=a,n.fillRect(t,e,i,s);for(let c=0;c<i*1.6;c++)n.fillStyle=r.chance(.5)?`rgba(255,255,255,${r.range(.02,.09)})`:`rgba(20,24,30,${r.range(.02,.08)})`,n.fillRect(t+r.range(0,i),e+r.range(0,s),1,r.range(s*.1,s*.6));for(let c=0;c<3&&s>200;c++)n.fillStyle=`rgba(235,238,240,${r.range(.04,.09)})`,n.beginPath(),n.ellipse(t+r.range(.2,.8)*i,e+s*r.range(.4,.7),i*r.range(.15,.4),s*r.range(.02,.05),r.range(-.4,.4),0,7),n.fill()}function Nu(n,t,e,i){const[s,r,o,a]=mn[t];if(ws(n,s,r,o,a,e,i?-6:4),n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(s,r,2,a),n.fillRect(s+o-2,r,2,a),n.fillStyle="rgba(255,255,255,0.2)",n.fillRect(s+2,r,1,a),!i)return;const l=a/2.12,c=s+o*.3,f=o*.42,h=r+a-1.62*l,u=.3*l;n.fillStyle="#23272b",n.fillRect(c-2,h-2,f+4,u+4);const p=n.createLinearGradient(0,h,0,h+u);p.addColorStop(0,"#4c545a"),p.addColorStop(1,"#2c3338"),n.fillStyle=p,n.fillRect(c,h,f,u),n.strokeStyle="rgba(200,210,215,0.28)",n.lineWidth=.6;for(let S=1;S<6;S++)n.beginPath(),n.moveTo(c+f*S/6,h),n.lineTo(c+f*S/6,h+u),n.stroke();for(let S=1;S<8;S++)n.beginPath(),n.moveTo(c,h+u*S/8),n.lineTo(c+f,h+u*S/8),n.stroke();const m=h+u+.07*l,_=.12*l,d=s+o*.12,g=o*.78;n.fillStyle="#f6d21c",n.fillRect(d,m,g,_),n.fillStyle="#16161a",n.beginPath(),n.moveTo(d+4,m+_*.48),n.lineTo(d+11,m+_*.48),n.lineTo(d+7.5,m+_*.12),n.fill(),n.textAlign="left",n.textBaseline="middle",n.font=`700 ${_*.34}px ${Kt}`,n.fillText("Caution",d+14,m+_*.3),n.font=`400 ${_*.2}px ${Kt}`,n.fillText("Obstructing the doors",d+4,m+_*.62,g-8),n.fillText("can be dangerous",d+4,m+_*.84,g-8),n.fillStyle="#1a8f52",n.fillRect(s+o*.3,r+a-.86*l,o*.4,.035*l)}function aS(n,t){const[e,i,s,r]=mn.wall,o=r/2.3;n.fillStyle="#e6e2d2",n.fillRect(e,i,s,r);const a=n.createLinearGradient(0,i,0,i+r);a.addColorStop(0,"rgba(255,255,255,0.10)"),a.addColorStop(.55,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(40,30,10,0.16)"),n.fillStyle=a,n.fillRect(e,i,s,r);for(let l=0;l<260;l++)n.fillStyle=`rgba(60,50,30,${t.range(.02,.07)})`,n.fillRect(e+t.range(0,s),i+t.range(0,r),t.range(1,3),t.range(1,4));n.fillStyle="#2b2c2e";for(let l=0;l<=4;l++)n.fillRect(e+Math.min(s-2,s*l/4)-(l?1:0),i,2,r);n.fillRect(e,i+r-1.08*o,s,1.5),ws(n,e,i+r-.16*o,s,.16*o,t,-20),n.fillStyle="#17181a";for(let l=e+6;l<e+s-6;l+=7)n.fillRect(l,i+r-.12*o,2.5,.07*o);n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(e,i+r-.16*o,s,1.5)}function ku(n,t,e,i){const[s,r,o,a]=mn[t],l=a/2.3;if(ws(n,s,r,o,a,e,-4),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(s,r+a-.16*l,o,1.5),!i)return;const c=s+o*.16,f=o*.68,h=u=>r+a-u*l;n.strokeStyle="rgba(30,34,38,0.7)",n.lineWidth=1.2,n.strokeRect(c,h(1.72),f,.2*l),n.fillStyle="#0d0f11",n.fillRect(c+f*.1,h(1.68),f*.8,.11*l),n.strokeRect(c,h(1.48),f,.5*l),n.fillStyle="#2a2d30";for(let u=0;u<6;u++)for(let p=0;p<5;p++)n.beginPath(),n.arc(c+f*.14+u*f*.085,h(1.42)+p*.03*l,.9,0,7),n.fill();n.fillStyle="#f4f2ea",n.fillRect(c+f*.64,h(1.44),f*.28,.1*l),n.fillStyle="#15171a",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${.035*l}px ${Kt}`,n.fillText("LIFT",c+f*.78,h(1.41)),n.font=`700 ${.05*l}px ${Kt}`,n.fillText("1",c+f*.78,h(1.37)),n.fillStyle="#c0281c",n.font=`700 ${.028*l}px ${Kt}`,n.fillText("ALARM BUTTON",s+o/2,h(1.22),f*.9),n.fillStyle="#3a3d40",n.beginPath(),n.arc(s+o/2,h(1.12),.04*l,0,7),n.fill(),n.fillStyle="#e9c21a",n.beginPath(),n.arc(s+o/2,h(1.12),.028*l,0,7),n.fill(),n.strokeRect(c,h(.92),f,.62*l),n.fillStyle="#17181a",n.beginPath(),n.arc(c+f*.5,h(.6),1.6,0,7),n.fill()}function lS(n,t){const[e,i,s,r]=mn.ceil;n.fillStyle="#e9e8e2",n.fillRect(e,i,s,r);for(let o=0;o<90;o++)n.fillStyle=`rgba(50,45,35,${t.range(.02,.06)})`,n.fillRect(e+t.range(0,s),i+t.range(0,r),2,2);n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(e,i+r/2,s,1),n.fillRect(e+s/2,i,1,r);for(const o of[.3,.7]){const a=i+r*o,l=n.createRadialGradient(e+s/2,a,2,e+s/2,a,s*.55);l.addColorStop(0,"rgba(255,255,250,0.9)"),l.addColorStop(1,"rgba(255,255,250,0)"),n.fillStyle=l,n.fillRect(e,a-r*.14,s,r*.28),n.fillStyle="#9fa3a5",n.fillRect(e+s*.1,a-5,s*.8,10),n.fillStyle="#ffffff",n.fillRect(e+s*.13,a-2.5,s*.74,5)}n.fillStyle="#8f9496",n.beginPath(),n.arc(e+s*.2,i+r*.5,9,0,7),n.fill(),n.strokeStyle="#4c5052",n.lineWidth=1;for(const o of[3,6])n.beginPath(),n.arc(e+s*.2,i+r*.5,o,0,7),n.stroke()}function cS(n,t){let[e,i,s,r]=mn.floor;n.fillStyle="#6f7375",n.fillRect(e,i,s,r);for(let a=0;a<500;a++)n.fillStyle=t.chance(.5)?`rgba(20,20,22,${t.range(.04,.14)})`:`rgba(210,212,214,${t.range(.03,.1)})`,n.fillRect(e+t.range(0,s),i+t.range(0,r),t.range(1,4),t.range(1,3));[e,i,s,r]=mn.steel,ws(n,e,i,s,r,t),[e,i,s,r]=mn.dark,n.fillStyle="#16181a",n.fillRect(e,i,s,r),[e,i,s,r]=mn.black,n.fillStyle="#0c0c0d",n.fillRect(e,i,s,r),[e,i,s,r]=mn.rail,ws(n,e,i,s,r,t,10),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(e,i+3,s,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(e,i+r-4,s,4),[e,i,s,r]=mn.sill;const o=n.createLinearGradient(0,i,0,i+r);o.addColorStop(0,"#a58c4e"),o.addColorStop(.5,"#c9b06a"),o.addColorStop(1,"#9c8446"),n.fillStyle=o,n.fillRect(e,i,s,r),n.fillStyle="#1c1a14";for(const a of[.14,.26,.7,.82])n.fillRect(e,i+r*a,s,2);n.fillStyle="#050505",n.fillRect(e,i+r*.47,s,r*.09),n.fillStyle="rgba(40,30,10,0.75)",n.textAlign="center",n.textBaseline="middle",n.font=`700 5px ${Kt}`,n.fillText("O T I S",e+s/2,i+r*.37),[e,i,s,r]=mn.jamb,ws(n,e,i,s,r,t,-14),n.fillStyle="#0b0c0d",n.fillRect(e+s*.3,i,s*.52,r)}let ql=null;function fS(){const n=vn(br,Mr),t=n.getContext("2d"),e=new _e(1907);return t.fillStyle="#8f9396",t.fillRect(0,0,br,Mr),Nu(t,"leafF",e,!0),Nu(t,"leafS",e,!1),aS(t,e),ku(t,"end",e,!1),ku(t,"panel",e,!0),lS(t,e),cS(t,e),oS(t,mn,{steel:ws,r:e,fitText:xe,HEAD_FONT:re,BODY_FONT:Kt,OSD_FONT:Ji}),n}function uS(){return ql||(ql=Ds(fS())),ql}const Jt={STUB:3.6,DEP:.34,CAR_W:2.3,CAR_D:2.9,CAR_H:2.3,DOOR_W:1.4,DOOR_H:2.1,FAST:.7,SLOW:.37};Jt.ZA=Jt.STUB;Jt.ZC0=Jt.ZA+Jt.DEP;Jt.ZC1=Jt.ZC0+Jt.CAR_D;Jt.ZB=Jt.ZC1+Jt.DEP;Jt.LEN=Jt.ZB+Jt.STUB;const ke=Jt.CAR_W/2,me=Jt.DOOR_W/2,Cn={LS0:.1,LS1:.135,F0:.14,F1:.24,CS0:.245,CS1:.28},tn={wall:{emit:.95},ceil:{emit:1.06},floor:{emit:.8},steel:{emit:.9},lining:{emit:.74},door:{emit:.9},lit:{emit:1.5}};function an(n,t,e,i,s,r,o,a,l,c){const f=a<0?Math.max(e,i):Math.min(e,i),h=a<0?Math.min(e,i):Math.max(e,i);n.quad(t,[f,s,o],[h,s,o],[h,r,o],[f,r,o],[0,0,a],l,c)}function so(n,t,e,i,s,r,o,a,l,c){const f=a>0?Math.max(i,s):Math.min(i,s),h=a>0?Math.min(i,s):Math.max(i,s);n.quad(t,[e,r,f],[e,r,h],[e,o,h],[e,o,f],[a,0,0],l,c)}const hS=(n,t,e)=>{const i=Te(n);return[i[0]+(i[2]-i[0])*t,i[1],i[0]+(i[2]-i[0])*e,i[3]]};function dS(n,t,e){const{ZC0:i,ZC1:s,CAR_H:r,DOOR_H:o}=Jt,a=t+r;n.grid("lift",[-ke-.02,t,i-.02],[Jt.CAR_W+.04,0,0],[0,0,Jt.CAR_D+.04],3,4,[0,1,0],Te("floor"),tn.floor,!0);const l=Te("ceil");n.quad("lift",[ke+.02,a,i-.02],[-ke-.02,a,i-.02],[-ke-.02,a,s+.02],[ke+.02,a,s+.02],[0,-1,0],l,tn.ceil);for(const c of[-1,1])so(n,"lift",c*ke,i-.02,s+.02,t-.02,a+.02,-c,Te("wall"),tn.wall),n.box("lift",c>0?ke-.055:-ke,t+.93,i+.22,c>0?ke:-ke+.055,t+1.03,s-.22,Te("rail"),tn.steel,c>0?"xyYzZ":"XyYzZ"),e.forEach((f,h)=>{const u=i+Jt.CAR_D*(.2+.3*h),p=c>0?h:e.length-1-h;so(n,"sheet",c*(ke-.012),u-.21,u+.21,t+1.24,t+1.84,-c,e[p],{emit:.95})});for(const[c,f]of[[i,1],[s,-1]])an(n,"lift",me-.002,ke+.02,t-.02,a+.02,c,f,Te(f<0?"panel":"end"),tn.steel),an(n,"lift",-ke-.02,-me+.002,t-.02,a+.02,c,f,Te("end"),tn.steel),an(n,"lift",-me-.03,me+.03,t+o-.012,a+.02,c-f*.002,f,hS("head",.19,.81),tn.steel);an(n,"lift",me+.12,me+.34,t+1.88,t+1.99,s-.004,-1,Te("exit"),tn.lit)}function Ou(n,t,e,i){const s=l=>t+e*l,r=i+Jt.DOOR_H,o=Te("jamb");for(const l of[-1,1]){const c=l*(me+.005);n.quadUV("lift",[c,i-.02,s(-.02)],[c,i-.02,s(.36)],[c,r+.02,s(.36)],[c,r+.02,s(-.02)],[-l,0,0],[o[0],o[1]],[o[2],o[1]],[o[2],o[3]],[o[0],o[3]],tn.lining)}n.quadUV("lift",[-me-.02,r,s(-.02)],[-me-.02,r,s(.35)],[me+.02,r,s(.35)],[me+.02,r,s(-.02)],[0,-1,0],[o[0],o[1]],[o[2],o[1]],[o[2],o[3]],[o[0],o[3]],tn.lining);const a=Te("sill");n.quadUV("lift",[-me-.02,i+.003,s(-.05)],[me+.02,i+.003,s(-.05)],[me+.02,i+.003,s(.39)],[-me-.02,i+.003,s(.39)],[0,1,0],[a[0],a[3]],[a[2],a[3]],[a[2],a[1]],[a[0],a[1]],tn.floor),n.quad("atlas",[-me-.3,i-.003,s(-.6)],[me+.3,i-.003,s(-.6)],[me+.3,i-.003,s(.6)],[-me-.3,i-.003,s(.6)],[0,1,0],Nt("floorDark"))}function ma(n,t,e,i,s,r=!0){const o=d=>e+i*d,a=s-.01,l=s+Jt.DOOR_H+.03,c=n.count(t),f=[],h=d=>{for(;f.length<n.count(t)-c;)f.push(d)},u=Te("leafF"),p=Te("leafS"),m=ef("black"),_=ef("dark");for(const d of[-1,1])r&&an(n,t,0,d*.36,a,l,o(Cn.F0),-i,u),an(n,t,0,d*.36,a,l,o(Cn.F1),i,u,tn.door),r&&so(n,t,0,o(Cn.F0),o(Cn.F1),a,l,-d,m,tn.lining),d>0&&(r&&an(n,t,-.007,.007,a,l,o(Cn.F0-.0015),-i,m),an(n,t,-.007,.007,a,l,o(Cn.F1+.0015),i,m,tn.lining)),h(d*Jt.FAST),r&&(an(n,t,d*.33,d*.74,a,l,o(Cn.LS0),-i,p),so(n,t,d*.33,o(Cn.LS0),o(Cn.LS1+.006),a,l,-d,_)),an(n,t,d*.33,d*.74,a,l,o(Cn.CS1),i,p,tn.door),so(n,t,d*.33,o(Cn.CS0-.006),o(Cn.CS1),a,l,-d,_,tn.lining),h(d*Jt.SLOW);return f}function Fu(n,t){const{ZA:e,ZC0:i,ZC1:s,ZB:r}=Jt,o=(c,f,h,u)=>[c,f,h,u,t[0],t[1]],a=[{ax:0,az:i-.02,bx:0,bz:s+.02,hw:ke,ya:n,yb:n,surface:"metal"}],l=[o(-ke,i,-ke,s),o(ke,i,ke,s)];for(const c of[i,s])l.push(o(-ke,c,-me,c),o(me,c,ke,c));for(const c of[-1,1])l.push(o(c*me,e,c*me,i),o(c*me,s,c*me,r));return{cells:a,walls:l,shutA:o(-me,e+.19,me,e+.19),shutB:o(-me,r-.19,me,r-.19)}}const tr=1.7,er=2.2,pS=1.6,ps=()=>({st:"idle",t:0,a:0,b:0,lv:0,lamp:0}),Ya=n=>n.lift||(n.lift=ps()),Mi=n=>n.p.dir>0?0:6;function Rd(n,t){const e=Ya(t);if(n==="liftA")return e.lv===0;if(n==="liftB")return e.lv===1;if(!n.startsWith("liftd:"))return!0;const i=n.slice(6);return i==="land"?e.st==="idle"||e.st==="closingB"||e.st==="gone"&&e.t<7:i==="ride"?e.st==="ride":i==="close"?e.st==="closing"||e.st==="closingB"||e.st==="held":i==="next"?e.st==="opening"||e.st==="open"||e.st==="warn":i===`p${e.lamp}`}function Cd(n){const t=Ya(n),e=n.built,i=e.extra.lift;for(const a of e.group.children)a.name.startsWith("lift")&&(a.visible=Rd(a.name,n));for(const[a,l]of[["liftA",t.a],["liftB",t.b]]){const c=i.doors[a],f=e.group.children.find(p=>p.name===a);if(!f||c.at===l)continue;const h=f.geometry.userData.local,u=f.geometry.attributes.position;c.base||(c.base=c.travel.map((p,m)=>h[m*3]));for(let p=0;p<c.travel.length;p++)h[p*3]=c.base[p]+c.travel[p]*l;mf(u.array,h,{x:n.pos.x,y:n.pos.y,z:n.pos.z,yaw:n.yaw}),u.needsUpdate=!0,f.geometry.computeBoundingSphere(),c.at=l}const s=t.st==="open"||t.st==="warn"||t.st==="opening"&&t.a>.6,r=t.st==="openB"||t.st==="openingB"&&t.b>.6,o=(s?1:0)+(r?2:0);i.pass!==o&&(i.pass=o,e.walls=i.fixed.concat(s?[]:[i.shutA],r?[]:[i.shutB]))}const nr=n=>zc(0,1,qe(n,0,1));class mS{constructor(t){this.game=t,this.reset()}reset(){this.rides=0,this.lastOdd=null,this.force=null,Object.assign(this.game.state,{lift:"",liftRides:0,liftOdd:""})}say(t,e){const i=this.game.director.announcer;i.quiet(e+6),i.say({text:t,chime:"none",tag:"(the lift)",urgent:!0,dur:e})}script(t){const e=Xi,i=e.odd,s=this.game.state,r=t.p.dir>0?e.up:e.down;let o=this.force||null;if(!o&&this.rides>0&&t.p.odd<(s.wrongTurns>=2?.6:1/3)){const f=["select","expected","know"].filter(h=>h!==this.lastOdd);o=s.wrongTurns>=3&&t.p.dir<0&&$e(t.seed,31)%10<3?"always":f[$e(t.seed,4711)%f.length]}o==="always"&&t.p.dir>0&&(o="know"),o&&(this.lastOdd=o);const a=o==="select"?[[0,i.select[0],2.7],[3.2,i.select[1],2.9]]:o==="expected"?[[0,e.clear,2.3],[3,i.expected,2.8]]:[[0,e.clear,2.2]],l=o==="know"?[[0,r,2.2],[3,i.know,2.7]]:o==="always"?[[0,e.down,2.2],[3.2,i.always,2.6]]:[[0,r,2.4]],c=a[a.length-1];return{odd:o,warn:a,warnEnd:c[0]+c[2]+.2,ride:l}}update(t){const e=this.game;let i=0,s=null;for(const r of e.world.nodes.values())r.def.type!=="lift"||!r.built||(i=Math.max(i,this.tick(r,t)),Cd(r),r===e.world.current&&(s=r));i>0&&(e.player.shake=Math.max(e.player.shake||0,i)),e.state.lift=s?s.lift.st:"",e.state.liftOdd=s&&s.lift.script&&s.lift.script.odd||""}tick(t,e){const i=Ya(t),s=this.game,r=s.player,{ZA:o,ZC0:a,ZC1:l,ZB:c}=Jt,f=t.p.rise,h=s.world.current===t,[,u]=Ts(t,r.pos.x,r.pos.z),p=r.pos.y-t.pos.y,m=h&&Math.abs(p)<1.2,_=h&&Math.abs(p-f)<1.2,d=h&&u>a+.35&&u<l+.05,g=h&&u>o+.2&&u<c-.2,S=A=>{i.st=A,i.t=0},y=A=>{for(const[M,T,w]of A)i.t-e<=M&&i.t>M&&this.say(T,w)};i.t+=e;let b=0;if(i.st==="idle")i.lamp=Mi(t)+Math.sign(t.p.dir)*(2-Math.floor(i.t/.8)%3),m&&u>.3&&u<o+.1&&(S("opening"),i.lamp=Mi(t),s.audio.sfx("liftDing"),s.audio.sfx("liftDoor",{dur:tr}),s.director.setHint(Xi.hint,5));else if(i.st==="opening")i.a=nr(i.t/tr),i.t>=tr&&S("open");else if(i.st==="open")d&&m?i.t>1.1&&(S("warn"),i.script=i.script||this.script(t)):i.t=0;else if(i.st==="warn")y(i.script.warn),d&&m?i.t>i.script.warnEnd&&(S("closing"),this.say(Xi.closing,1.6)):S("open");else if(i.st==="closing")i.t-e<.45&&i.t>=.45&&s.audio.sfx("liftDoor",{dur:er,shut:!0}),i.a=1-nr((i.t-.45)/er),i.t>=.45+er&&(i.a=0,S("shut"));else if(i.st==="shut")i.t>.55&&(S("ride"),i.T=t.p.h/pS,i.script=i.script||this.script(t),s.audio.sfx("liftHum",{dur:i.T}),g&&(r.eyeY-=.035*t.p.dir));else if(i.st==="ride"){const A=qe(i.t/i.T,0,1);y(i.script.ride),i.lamp=Math.round(Mi(t)+Math.sign(t.p.dir)*6*nr(A)),b=.42*qe(Math.min(i.t/.7,(i.T-i.t)/.7),0,1),i.lv===0&&A>=.5&&(i.lv=1,g&&m&&(r.pos.y+=f,r.eyeY+=f)),A>=1&&(S("openingB"),s.audio.sfx("liftDing",{arrive:!0}),g&&(r.eyeY+=.03*t.p.dir),this.rides++,s.state.liftRides=this.rides)}else i.st==="openingB"?(i.t-e<.5&&i.t>=.5&&s.audio.sfx("liftDoor",{dur:tr}),i.b=nr((i.t-.5)/tr),i.t>=.5+tr&&S("openB")):i.st==="openB"?(!h||_&&u>c+1.7)&&(S("closingB"),s.audio.sfx("liftDoor",{dur:er,shut:!0,far:!0})):i.st==="closingB"?(i.b=1-nr(i.t/er),i.t>=er&&(i.b=0,S("gone"))):i.st==="gone"&&(i.lamp=Math.round(Mi(t)+Math.sign(t.p.dir)*6*(1-nr(i.t/7))));return b}}function gS(n,t,e={}){const i=n.world,s=n.player;let r=i.current;if((!r||r.def.type!=="lift")&&(r=[...i.nodes.values()].filter(u=>u.def.type==="lift"&&u.built).sort((u,p)=>u.dist-p.dist)[0]),!r)return null;const o=Ya(r),a=Math.cos(r.yaw),l=Math.sin(r.yaw),c=(u,p,m=0)=>{s.spawn(r.pos.x+m*a+u*l,r.pos.y+p,r.pos.z-m*l+u*a,r.yaw),s.loc=null,i.current=r,i.refresh(!0)},f=e.z??Jt.ZC0+1.2;e.odd!==void 0&&n.lifts&&(n.lifts.force=e.odd||null),t==="idle"&&Object.assign(o,ps()),t==="open"&&Object.assign(o,ps(),{st:"open",a:1,lamp:Mi(r)}),t==="board"&&(Object.assign(o,ps(),{st:"open",a:1,lamp:Mi(r),t:1}),c(f,0,e.x)),t==="half"&&(Object.assign(o,ps(),{st:"held",a:e.a??.45,lamp:Mi(r)}),c(f,0,e.x)),t==="ride"&&(Object.assign(o,ps(),{st:"shut",t:.5,lamp:Mi(r)}),c(f,0,e.x)),t==="arrive"&&(Object.assign(o,ps(),{st:"openB",b:1,lv:1,lamp:6-Mi(r)}),c(f,r.p.rise,e.x)),t&&r.built&&Cd(r);const h=r.built?r.built.group.children:[];return{st:o.st,odd:o.script&&o.script.odd||null,force:n.lifts?n.lifts.force:null,t:+o.t.toFixed(2),a:+o.a.toFixed(2),b:+o.b.toFixed(2),lv:o.lv,lamp:o.lamp,dir:r.p.dir,rise:r.p.rise,rides:n.lifts?n.lifts.rides:0,layers:h.filter(u=>u.visible).map(u=>u.name),tris:h.reduce((u,p)=>u+p.geometry.index.count/3,0)}}const ze=Jt.DOOR_W/2,_S={"Chalk Farm":9.2,"Mornington Crescent":11.4};function zu(n,t,e,i){const s=ze-.006,r=Jt.DOOR_H-.006,o=wo(wt,.05),a=o.length,l=[{x:o[0].x,y:-.06},{x:-s,y:-.06},{x:-s,y:r},{x:s,y:r},{x:s,y:-.06},{x:o[a-1].x,y:-.06}];for(let c=a-1;c>=0;c--)o[c].y>.01&&l.push({x:o[c].x,y:o[c].y});Ro(n,{x:0,y:i,z:t,yaw:0},e,l,{layer:"tile",grid:.7})}function Bu(n,t,e,i,s){const r=ef("steel"),o=h=>e*h,a=h=>t+e*h,l=(h,u,p,m,_,d)=>n.box("lift",Math.min(o(h),o(u)),i+p,Math.min(t,a(_)),Math.max(o(h),o(u)),i+m,Math.max(t,a(_)),r,null,d),c=(h,u,p,m,_,d,g,S=.012)=>an(n,h,o(u),o(p),i+m,i+_,a(S),e,d,g),f=Jt.DOOR_H;l(ze,ze+.09,-.02,f+.09,.03,"xXzZ"),l(-ze-.09,-ze,-.02,f+.09,.03,"xXzZ"),l(-ze,ze,f,f+.09,.03,"yzZ"),l(-.85,.85,f+.09,f+.3,.12,"xXyY"),c("lift",-.85,.85,f+.09,f+.3,Te("hood"),null,.12),c("liftd:land",-.748,.612,f+.178,f+.258,Te(s.back),{emit:1.6},.123),c("lift",.86,.98,1.5,1.82,Te("lamps"));for(let h=0;h<7;h++){const u=1.82-.32*(.07+(6-h)*.127);c(`liftd:p${h}`,.9,.94,u-.027,u,Te("lampOn"),{emit:1.7},.014)}c("lift",-1.02,-.84,1.62,1.83,Te("plate")),s.side&&(c("lift",-1.14,-.8,1.9,2.005,Te("next")),c("liftd:next",-1.14,-.8,1.9,2.005,Te("nextOn"),{emit:1.35},.014),c("lift",-1.08,-.8,1.22,1.39,Te("auto")),c("lift",.84,1.04,1.22,1.38,Te("notice")))}const yS={type:"lift",sheetSize:512,layerVisible:Rd,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=_S[t.station]||n.pick([9.2,11.4]),s=e*i;return{p:{dir:e,h:i,rise:s,odd:n.next()},exits:[{x:0,y:s,z:Jt.LEN,yaw:0}],box:[-1.9,Math.min(0,s)-.5,0,1.9,Math.max(0,s)+3.3,Jt.LEN]}},build(n){const{b:t,p:e,sheet:i,rng:s,env:r}=n,{ZA:o,ZC0:a,ZC1:l,ZB:c,LEN:f}=Jt,h=e.rise,u=(N,B=0)=>({x:0,y:B,z:N,yaw:0}),p=Nt("floor"),m=yn(t,[u(0),u(1.2),u(2.4),u(o)],wt,{floor:p}),_=yn(t,[u(c,h),u(c+1.2,h),u(c+2.4,h),u(f,h)],wt,{floor:p,u0:3});t.addPortal(0,0,0,0),t.addPortal(0,h,f,0),Qn(t,u(0),wt.crown),Ii(t,u(o-1.45),wt.crown-.04),Ii(t,u(c+1.45,h),wt.crown-.04),zu(t,o,-1,0),zu(t,c,1,h);const d=e.dir>0?"ledDown":"ledUp";Bu(t,o,-1,0,{side:!0,back:d}),Bu(t,c,1,h,{side:!1,back:d});const g=Math.min(.6,(r.wrong||0)*.15),S=[0,1,2].map(()=>i.add(84,120,(N,B,U)=>Ar(N,B,U,s,s.chance(g),!0))),y={};for(const[N,B]of[[0,0],[h,1]]){dS(t,N,S),Ou(t,o,1,N),Ou(t,c,-1,N),B===0?(y.liftA={travel:ma(t,"liftA",o,1,N)},ma(t,"lift",c,-1,N,!1)):(ma(t,"lift",o,1,N,!1),y.liftB={travel:ma(t,"liftB",c,-1,N)});for(const[U,R]of[[a,1],[l,-1]])an(t,"liftd:close",-.62,.62,N+Jt.DOOR_H+.05,N+Jt.DOOR_H+.15,U+R*.004,R,Te("ledClose"),{emit:1.6}),an(t,"liftd:ride",-.5,.5,N+Jt.DOOR_H+.05,N+Jt.DOOR_H+.15,U+R*.004,R,Te(e.dir>0?"ledUp":"ledDown"),{emit:1.6});an(t,"lift",-ze-.15,-ze-.05,N+1.5,N+1.77,l-.004,-1,Te("lamps"),{emit:.9});for(let U=0;U<7;U++){const R=1.77-.27*(.07+(6-U)*.127);an(t,`liftd:p${U}`,-ze-.117,-ze-.083,N+R-.023,N+R,l-.006,-1,Te("lampOn"),{emit:1.7})}}const b=e.dir>0&&!(r.stretch&&r.stretch.correct===!1),A=i.add(250,56,(N,B,U)=>rS(N,B,U,b)),M=i.add(250,56,(N,B,U)=>Rr(N,B,U,"To the trains",{sub:"Northern line"})),w=[{...Jr(t,"sheet",u(1.3),2.28,1.3,.29,A,M,{emit:1.25}),r:7,cone:.94,n:[0,-1],label:"read sign",title:"SIGN",text:b?Xi.signUp:Xi.signDown},{x:-.94,y:1.3,z:o-.02,r:2.6,cone:.9,n:[0,-1],label:"read notice",title:"LIFT 1",text:Xi.notice},{x:ze+.23,y:1.25,z:l-.01,r:2.4,cone:.9,n:[0,-1],label:"look at panel",title:"LIFT 1",text:Xi.panel},{x:ze+.23,y:h+1.25,z:l-.01,r:2.4,cone:.9,n:[0,-1],label:"look at panel",title:"LIFT 1",text:Xi.panel}],v=[-1.2,2.2],x=[h-1.2,h+2.2],E=Fu(0,v),P=Fu(h,x),L=wt.W/2,D=[...m.cells,..._.cells,...E.cells,...P.cells,{ax:0,az:o-.3,bx:0,bz:a+.3,hw:ze-.02,ya:0,yb:0,surface:"metal"},{ax:0,az:l-.3,bx:0,bz:c+.3,hw:ze-.02,ya:h,yb:h,surface:"metal"}];for(const N of[...m.cells,..._.cells])N.surface="tile";const k=[...m.walls,..._.walls,...E.walls,...P.walls,E.shutB,P.shutA,[-L,o,-ze,o,v[0],v[1]],[ze,o,L,o,v[0],v[1]],[-L,c,-ze,c,x[0],x[1]],[ze,c,L,c,x[0],x[1]]];return{cells:D,walls:[...k,E.shutA,P.shutB],items:w,extra:{lift:{doors:y,fixed:k,shutA:E.shutA,shutB:P.shutB}}}}},ai={corridor:Iv,bend:Uv,junction:Wv,platform:vo,trainstop:Ax,ghost:Rx,stairs:Px,escalator:Lx,exit:Xx,deadend:Dx,cross:Yx,shelter:Jx,spiral:iS,lift:yS},rn=n=>!!ai[n];function Hu(n,t={}){const e=n.stretchCount+1,i=new _e($e(n.seed,1e3+e*13)),s=[];if(t.first&&s.push(rn("platform")?"platform":"corridor"),t.fromJunction&&s.push("corridor"),t.exit)s.push(rn("spiral")?"spiral":"corridor",rn("exit")?"exit":"corridor");else{const c=i.int(7,9),f={},h=_=>f[_]||0;let u=s[s.length-1]||"",p="";const m=t.first||!rn("platform")?-1:i.int(2,c-3);for(let _=0;_<c;_++){const d=h("stairs")+h("escalator")+h("lift"),g=_===m?"platform":i.weighted([["corridor",u==="corridor"?0:3],["bend",u==="bend"?0:p==="bend"?.8:2.2],["stairs",rn("stairs")&&u!=="stairs"&&h("stairs")<2?1.5/(1+d):0],["escalator",rn("escalator")&&u!=="escalator"&&h("escalator")<1?1/(1+d):0],["lift",rn("lift")&&u!=="lift"&&h("lift")<1&&_>0&&_<c-1?1/(1+d):0]]);s.push(g),f[g]=h(g)+1,g==="platform"&&rn("cross")&&i.chance(.5)&&s.push("cross","platform"),p=u,u=g}s[s.length-1]!=="corridor"&&s.push("corridor"),s.push(rn("junction")?"junction":"corridor")}const r=new _e($e(n.seed,5e3+e*17));if(rn("trainstop")&&!t.exit){const c=s.findIndex((f,h)=>f==="platform"&&!(t.first&&h===0));c>=0&&r.chance(n.trainStops?.22:t.first?.25:.5)&&(s[c]="trainstop",n.trainStops=(n.trainStops||0)+1)}rn("ghost")&&t.fromJunction&&t.correct===!1&&!t.exit&&r.chance(n.game.state.wrongTurns?.5:1)&&s.splice(1,0,"ghost","corridor"),t.fromJunction&&n.testBranch&&s.splice(0,s.length,"corridor",...n.testBranch),n.stretchCount++;const o=t.index??n.progress,a=t.exit?to[to.length-1]:fv(o),l=t.fromJunction&&n.testBranch;return rn("shelter")&&a==="Camden Town"&&!t.exit&&!l&&r.chance(n.shelters?.4:1)&&(s.splice(r.int(Math.min(1,s.length-2),s.length-2),0,"shelter"),n.shelters=(n.shelters||0)+1),{id:e,plan:s,rng:i,index:Math.min(o,to.length),station:a,theme:wf(a),out:t.fromJunction?t.exitIndex===0?1:-1:0,dir:i.chance(.5)?"north":"south",dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const vS=new Set(["junction","cross"]);function xS(n){return ry(0,n)}function SS(n,t,e,i,s){const r=n.game.world,o=xS(r.exitPose(t,e).yaw);let a=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(a=n.branchStretch(t,e),l=0);let c=a.plan[l];c===void 0&&(c="corridor",l=a.plan.length);const f=g=>n.envFor(a,l,{yaw:o,...g}),h=g=>n.envFor(a,l-1,{yaw:o,filler:!0,...g}),u=o>.1?-1:o<-.1?1:0,p=vS.has(c)||c==="corridor"&&a.plan[l+1]==="junction";if(i===0){if(p&&u!==0)return{def:ai.bend,env:h({turn:u})};if(c==="bend"){const g=u!==0?u:a.out||s.sign();return{def:ai.bend,env:f({turn:g})}}if(c==="junction")return{def:ai.junction,env:f(n.junctionEnv(s,a))};if(l===0&&a.fromJunction){const g=t.env;return{def:ai.corridor,env:f({gate:!0,len:8,noticeChance:0,theme:g.theme,station:g.station}),force:!0}}if(c==="ghost"&&rn("ghost")){const g=mo.name;return{def:ai.ghost,env:f({station:g,theme:wf(g),ambient:[.05,.052,.056]})}}return{def:ai[c]||ai.corridor,env:f({})}}const m=[],_=a.out||1;u!==0?m.push(["bend",{turn:u}]):m.push(["bend",{turn:_}]),m.push(["corridor",{short:!0}]),rn("stairs")&&m.push(["stairs",{dir:-1}],["stairs",{dir:1}]),rn("escalator")&&m.push(["escalator",{dir:-1}],["escalator",{dir:1}]),m.push(["corridor",{short:!0,tiny:!0}]),u===0&&m.push(["bend",{turn:-_}]);const d=m[i-1];return d?{def:ai[d[0]],env:h(d[1])}:null}const $l=n=>String(n).padStart(2,"0"),Gu={"Battersea Power Station":"Battersea Pwr Stn","via Charing Cross":"via CX","via Bank":"via Bank"},Vu=["There is a good service on the Northern line","Please stand behind the yellow line","Mind the gap between the train and the platform","This station closes after the last train","Please keep your belongings with you at all times","Check front of train for destination"],Wu=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain","North End. This train does not stop at North End"];function bS(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function qu(n){const t=(Math.floor(n)%86400+86400)%86400;return`${$l(Math.floor(t/3600))}:${$l(Math.floor(t/60)%60)}:${$l(t%60)}`}function $u(n,t,e=28){const i=`${n}   ***   `,s=Math.floor(t*5)%i.length;return(i+i+i).slice(s,s+e)}const MS=n=>n<=0?"due":`${n} min${n===1?"":"s"}`;function Pd(n,t,e,i,s){const r=_v(n,t),o=[];for(let a=0;a<2;a++){const l=e.nextAt+a*e.period,c=new _e($e(s,Math.round(l))),[f,h]=r[Math.floor(c.next()*r.length)],u=`${Gu[f]||f}${h?` ${Gu[h]||h}`:""}`;o.push({dest:f,via:h,label:u,secs:l-i})}return o}function TS(n,t){n.anchorTod===void 0&&(n.anchorTod=bS(),n.anchorT=t);const e=n.game,i=n.anchorTod+(t-n.anchorT),s=n.anchorTod-(t-n.anchorT),r=se.goal-n.progress,o=n.wrong,a=Math.floor(t/12),l=new _e($e(n.seed,a)),c=l.chance(Math.min(.85,o*.2)),f=e.world&&e.world.current,h=f&&f.env.station||"Mornington Crescent",u=(f&&f.def.type==="platform"?f.p.dir:f&&f.env.pdir)||"north",p=e.trains?e.trains.schedule():{nextAt:e.state.time+150,period:240},m=Pd(h,u,p,e.state.time,n.seed);let _=r<=0?"approaching":`${r} min${r===1?"":"s"}`;o>=3&&Math.floor(t*4)%23===0&&(_=l.pick(["-- mins","99 mins","never"]));const d=(A,M)=>({l:`${A} ${M.label}`,r:MS(Math.max(0,Math.ceil(M.secs/60)))});let g=[d(1,m[0]),{l:"2 Way out",r:_},d(3,m[1])];c&&(g[2]=l.pick([{l:"3 Check front of train",r:""},{l:`3 ${h}`,r:"due"},{l:"3 North End",r:"-- mins"},{l:"3 Not in service",r:""}])),e.trains&&e.trains.atPlatform()&&(g[0]={l:`1 ${m[0].label}`,r:""});const S=n.lastWrong?s:i,b=a%3===1?$u(c?l.pick(Wu):l.pick(Vu),t):qu(S);return{rows:g,footer:b,rows2:[{l:"Way out",r:_},{l:n.lastWrong?"You are going the wrong way":"Follow the yellow and black signs"},{l:$u(c?l.pick(Wu):l.pick(Vu),t)}],footer2:qu(S),tod:i,todBack:s}}class ES{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new _e($e(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.trainStops=0,this.shelters=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=Hu(this,{first:!0});e&&(i.plan=e.slice());const s=ai[i.plan[0]],r=this.envFor(i,0);return t.start(s,r,$e(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,pdir:t.dir,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,gseed:this.seed,...i}}choose(t,e,i,s){return SS(this,t,e,i,s)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,s=t.env.stretch?t.env.stretch.index:this.progress,r=i?s+1:Math.max(0,s-2);t.branches[e]=Hu(this,{correct:i,fromJunction:t,exitIndex:e,exit:r>=se.goal,index:r,clocksBack:!i})}return t.branches[e]}junctionEnv(t,e){const i=this.junctionsPlanned++,s=e?e.index:this.progress,r=s<2?0:s<4?1:2,o=i===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||o,jlevel:this.forceLevel??r}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min(se.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}boardState(t){return TS(this,t)}}class wS{constructor(t){this.game=t,this.reset()}reset(){this.rng=new _e((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.nextSecurity=45,this.securityN=0,this.welcomeT=0,this.quietT=0,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}welcome(t=3){this.welcomeT=t}quiet(t){this.quietT=Math.max(this.quietT||0,t)}hush(){this.welcomeT=0,this.queue.length=0,this.cur&&this.finish()}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,s=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:s,dur:s+(t.dur||Math.max(3.2,i*.43)+.8),spoken:!1,a:t,tag:t.tag!==void 0?t.tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(this.welcomeT>0&&(this.welcomeT-=t,this.welcomeT<=0&&this.say({text:qy,chime:"rise"})),!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(this.quietT>0){this.quietT-=t;return}if(e.state.segment!=="ghost"){if(this.nextSecurity-=t,this.nextSecurity<=0){this.nextSecurity=180,this.nextAmbient=Math.max(this.nextAmbient,20);const i=e.state.wrong>=3&&this.securityN%3===2,s=i?Hy[0]:K0[this.securityN%K0.length];this.securityN++,this.say({text:s,chime:i?"fall":"rise",odd:i});return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const s=this.rng.next();let r=By,o=!1;s<Math.min(.8,i*.22)&&(r=i>=3&&this.rng.chance(.5)?Vy:Gy,o=!0);const a=e.state.station||"this station",l=this.rng.pick(r).replaceAll("{station}",a).replaceAll("{next}",id(a,"north")||"the next station");this.say({text:l,chime:o&&this.rng.chance(.6)?"fall":"rise",odd:o})}}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class AS{constructor(t){this.game=t,this.reset()}reset(){this.rng=new _e((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=xs(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;this.dipT>0&&(i=.35+.3*Oe(t*18,9));const s=this.game.trains?this.game.trains.level:0;return s>.02&&(i*=1-.22*s*(.5+.5*Oe(t*14,4))),this.blackout>0&&(i=.02),this.pow=xs(this.pow,i,20,e||.016),this.pow}}function RS(n,t){const e=n.world,i=e.current,s=n.state;if(!i)return;const r=i.env;r.station&&s.station!==r.station&&(s.station=r.station);const o=i.built;if(!o||!o.extra)return;const[a,l]=Ts(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(o.extra.zones)for(const f of o.extra.zones)f.done||a>=f.x0&&a<=f.x1&&l>=f.z0&&l<=f.z1&&(f.y0===void 0||c>=f.y0&&c<=f.y1)&&(f.once!==!1&&(f.done=!0),f.fire(n,i,f,t))}function Ld(n,t){const e=n.p,i=r=>r===0?"left":"right",s=r=>`${e.dirs[r]==="north"?"northbound":"southbound"} platform`;if(e.kind==="announce"){const r=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow signs for the ${s(r)}. To the ${i(r)}. Please.`,`The way out is by the ${s(r)}, on the ${i(r)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(r)}, for the ${s(r)}. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${s(r)}, to the ${i(r)}.`,`Customers for the way out should keep to the ${i(r)} for the ${s(r)}.`,`The way out is by way of the ${s(r)}, on your ${i(r)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return null}const Xu={clock:"Customers are reminded that all station clocks run forwards.",signs:"Please follow the yellow and black signs for the way out."},CS=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function PS(n,t){n.state.junctionKind=t.p.kind,t.announcement===void 0&&(t.announcement=Ld(t,n.director.announcer.rng)),t.announcement&&n.director.announcer.say(t.announcement)}function LS(n,t){const e=n.director.announcer,i=t.p.kind;n.director.reading=null,n.player.zoomTarget=0,i==="announce"?(t.announcement===void 0&&(t.announcement=Ld(t,e.rng)),e.say({...t.announcement,urgent:!0})):Xu[i]?e.say({text:Xu[i],chime:"rise",urgent:!0}):e.say({text:e.rng.pick(CS),chime:"none",urgent:!0})}function DS(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,s=n.story,r=n.director.events;t.gateShut=!0,t.gateWall=du,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(du));const o=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const a=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(a,l,c);const f=n.player;if(f.pos.x-=a,f.pos.y-=l,f.pos.z-=c,f.eyeY-=l,i.refresh(),n.audio.sfx("gate"),r.lightsOut(.28),r.glitch(o?.5:1.3),e.def.type!=="junction")return;s.decide(o);const h=t.env.stretch?t.env.stretch.index:s.progress;s.progress=Math.min(se.goal,h),n.state.progress=s.progress,o?s.progress>=se.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),r.brownOut(2.2)),n.state.lastChoice=o?"right":"wrong"}class IS{constructor(t){this.game=t,this.announcer=new wS(t),this.events=new AS(t),this.reset()}reset(){this.target=null,this.reading=null,this.game.player&&(this.game.player.zoomTarget=0),this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Mornington Crescent. The Customer Information board in front of you explains how to find the way out.",9),this.announcer.welcome(3)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){PS(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read the signs, watch the clocks, listen for the chime.",7))}helpPoint(t){LS(this.game,t)}commit(t){DS(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),s=Math.floor(e.time%60),r=[["Tape length",`${i}:${String(s).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Sent back down the line",`${e.wrongTurns} time${e.wrongTurns===1?"":"s"}`],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(r),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,3).map(s=>s.r?`${s.l} … ${s.r}`:s.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:s}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:s},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,s)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,s=e.viewDir(),r=e.pos.x,o=e.eyeY,a=e.pos.z;let l=null,c=0;const f=[i.current,...i.neighbours(i.current)];for(const h of f)if(h.built)for(const u of h.built.items){if(u.hidden)continue;const[p,m,_]=$i(h,u.x,u.y,u.z),d=p-r,g=m-o,S=_-a,y=Math.hypot(d,g,S);if(y>(u.r||5.5)||y<.2)continue;const b=(d*s.x+g*s.y+S*s.z)/y,A=u.cone||.9;if(b<A)continue;const M=b-y*.01;M>c&&(c=M,l={item:u,node:h,d:y,dot:b})}if(this.target=l,this.reading){const h=this.reading,[u,p,m]=$i(h.node,h.item.x,h.item.y,h.item.z),_=u-r,d=p-o,g=m-a,S=Math.hypot(_,d,g),y=(_*s.x+d*s.y+g*s.z)/Math.max(S,.001);(S>(h.item.r||5.5)+1.5||y<.55||!h.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[s,r]=this.hints.shift();this.setHint(s,r)}e.step&&i.audio.footstep(e.running,i.player.loc),RS(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,s=new Date;let r="";t&&this.target&&!this.reading&&(r=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const o=this.announcer.caption();i.caption=o?o.text:"",i.prompt=r,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:s,live:i.started,caption:o?o.text:"",captionTag:o?o.tag:"",prompt:r,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const a=e.renderer.dv.uniforms;a.uTrack.value=this.events.tracking,a.uZoom.value=e.player.zoom}}const kn={cars:4,carLen:8.5,gap:.32};kn.length=kn.cars*kn.carLen+(kn.cars-1)*kn.gap;const ir=[[.98,-.78],[1.2,-.3],[1.2,.75],[1.1,1.15],[.88,1.5],[.6,1.76],[.3,1.88],[0,1.9]],US=4;function NS(n,t,e,i){const s=t-kn.carLen,r=t,o=vs("side"),a=vs("roof"),l=vs("dark"),c=u=>o[1]+(o[3]-o[1])*(u-dr[0])/(dr[1]-dr[0]),f={emit:.8},h={emit:.42};for(const u of[-1,1])for(let p=0;p<ir.length-1;p++){const[m,_]=ir[p],[d,g]=ir[p+1],S=[u*(g-_),-(d-m)*1,0],y=[u*m,_],b=[u*d,g];if(p<US){const A=u>0?o[0]:o[2],M=u>0?o[2]:o[0];n.quad("train",[y[0],y[1],r],[y[0],y[1],s],[b[0],b[1],s],[b[0],b[1],r],S,[A,c(_),M,c(g)],f)}else n.quad("train",[y[0],y[1],r],[y[0],y[1],s],[b[0],b[1],s],[b[0],b[1],r],S,a,h)}n.quad("train",[-.98,-.78,s],[.98,-.78,s],[.98,-.78,r],[-.98,-.78,r],[0,-1,0],l,{emit:.1});for(const[u,p,m]of[[r,1,e?"front":null],[s,-1,i?"rear":null]]){const _=m?vs(m):l,d=(S,y)=>m?[_[0]+(_[2]-_[0])*(.5+p*S/2.4),_[1]+(_[3]-_[1])*((y+.78)/2.68)]:[(_[0]+_[2])/2,(_[1]+_[3])/2],g={emit:m?.85:.25};for(let S=0;S<ir.length-1;S++){const[y,b]=ir[S],[A,M]=ir[S+1];n.quadUV("train",[-y,b,u],[y,b,u],[A,M,u],[-A,M,u],[0,0,p],d(-y,b),d(y,b),d(A,M),d(-A,M),g)}if(m){const S=vs(m==="front"?"lamp":"tail");for(const y of[-.82,.82])n.quad("train",[y-.09,-.08,u+p*.02],[y+.09,-.08,u+p*.02],[y+.09,.1,u+p*.02],[y-.09,.1,u+p*.02],[0,0,p],S,{emit:2})}}}let ga=null;function kS(){if(ga)return ga;const n=new Hh;for(let r=0;r<kn.cars;r++)NS(n,-r*(kn.carLen+kn.gap),r===0,r===kn.cars-1);const t=n.bake([0,0,0]).train,e={value:new Ie(0,1,-1e6,1e6)},i=Bh(Md(),null,!1,e);i.side=Un;const s=new On(t,i);return s.frustumCulled=!1,s.visible=!1,s.name="train",ga={mesh:s,clip:e},ga}const Gr=5.5,OS=6.5,FS=1,zS=15,Yu="Please mind the gap between the train and the platform.";class BS{constructor(t){this.game=t;const{mesh:e,clip:i}=kS();this.mesh=e,this.clip=i,t.scene.add(e),this.reset()}reset(){this.rng=new _e((this.game.state.seed||1)^31249),this.nextAt=32,this.period=215,this.phase="idle",this.node=null,this.t=0,this.s=0,this.level=0,this.target=0,this.seenId=0,this.count=0,this.mesh.visible=!1,this.game.state.train="idle",this.game.state.trains=0}schedule(){return{nextAt:this.nextAt,period:this.period}}atPlatform(){return this.phase==="dwell"}soon(t=3){this.phase==="idle"&&(this.nextAt=this.game.state.time+t+Gr)}_done(){this.phase="idle",this.node=null,this.mesh.visible=!1,this.target=0,this.nextAt=this.game.state.time+this.period*this.rng.range(.8,1.25)}_begin(t){const e=this.game,i=e.state,s=t.env.station,r=t.p.dir,o=Pd(s,r,this.schedule(),i.time,e.story.seed)[0];if(this.train=o,this.node=t,this.phase="approach",this.t=0,this.count++,this.passing=!!t.p.ghost,i.trains=this.count,yx(o.dest.replace("Battersea Power Station","Battersea")),e.audio.sfx("trainApproach"),this.passing){e.director.setHint(dn.train,5);return}e.director.announcer.say({text:`The train now approaching platform ${Cs(r)} is not in service. Please stand well back from the platform edge.`,chime:"rise"}),e.director.setHint("A warm wind pushes out of the tunnel. It smells of brake dust.",5)}update(t){const e=this.game,i=e.state.time,s=e.world.current,r=e.director.events,o=!!(s&&(s.def.type==="platform"||s.def.type==="ghost")&&s.built);if(o&&s.id!==this.seenId&&(this.seenId=s.id,this.phase==="idle"&&!s.p.start&&(this.nextAt=Math.min(this.nextAt,i+Gr+(s.p.ghost?this.rng.range(6,10):this.rng.range(9,20))))),this.t+=t,this.phase==="idle")i>=this.nextAt-Gr&&(o?this._begin(s):(this.phase="distant",this.t=0,e.audio.sfx("train")));else if(this.phase==="distant")this.target=.75*Math.sin(qe(this.t/9,0,1)*Math.PI),this.t>9&&this._done();else{const c=this.node;if(!c.built||!e.world.nodes.has(c.id)){this._done();return}const f=c.p.L,h=f-1.3,u=-1.2;if(this.phase==="approach")this.target=.75*qe(this.t/Gr,0,1),this.t>=Gr&&(this.phase=this.passing?"pass":"arrive",this.t=0,this.mesh.visible=!0,r.glitch(.5),this.passing&&e.audio.sfx("train"));else if(this.phase==="pass")this.s=u+zS*this.t,this.target=1,this.s-kn.length>f+Ee.depth&&(r.glitch(.4),e.state.trainsPassed=(e.state.trainsPassed||0)+1,this._done());else if(this.phase==="arrive"){const p=qe(this.t/OS,0,1);this.s=u+(h-u)*(1-(1-p)*(1-p)),this.target=1-.7*p,!this.braked&&p>.45&&(this.braked=!0,e.audio.sfx("trainBrake")),p>=1&&(this.phase="dwell",this.t=0,this.braked=!1,this.spoke=0)}else if(this.phase==="dwell"){this.target=.22;const p=e.director.announcer,m=d=>Math.max(3.2,d.split(/\s+/).length*.43)+.8,_=(d,g)=>p.say({text:d,chime:"none",tag:"(from the train)",urgent:g});if(this.spoke===0&&this.t>.4&&(this.spoke=1,p.say({text:Yu,chime:"none",tag:"(platform)",urgent:!0}),this.tCall=this.t+m(Yu)+.2),this.spoke===1&&this.t>this.tCall){this.spoke=2;const d=c.env.station,g=this.train,S=e.state.wrong>=2.5&&this.rng.chance(.5)?bv(d):Sv(d,c.p.dir,g.dest,g.via);_(S,!0),this.tClose=this.t+m(S)+.3}this.spoke===2&&this.t>this.tClose&&(this.spoke=3,_("Stand clear of the doors, please.")),this.spoke===3&&this.t>this.tClose+1.5&&(this.spoke=4,e.audio.sfx("doorChime")),this.spoke===4&&this.t>this.tClose+5&&(this.phase="depart",this.t=0,e.audio.sfx("trainDepart"))}else this.phase==="depart"&&(this.s=h+.5*FS*this.t*this.t,this.target=qe(.3+this.t*.12,0,1),this.s-kn.length>f+Ee.depth&&(r.glitch(.4),this._done()));if(this.node){const p=c.p.side,[m,_,d]=$i(c,p*nt.track,0,this.s);this.mesh.position.set(m,_,d),this.mesh.rotation.y=c.yaw;const g=Math.sin(c.yaw),S=Math.cos(c.yaw),y=c.pos.x*g+c.pos.z*S;this.clip.value.set(g,S,y-Ee.depth+.07,y+f+Ee.depth-.07)}}this.level=xs(this.level,this.target,this.target>this.level?2.2:.9,t);const a=o&&this.node===s;e.player.shake=this.level*(a?1:.25);const l=a&&this.phase!=="dwell"?(this.phase==="depart"?.1:.2)*this.level*(1-.8*e.player.zoom):0;e.player.windX=l?Math.sin(s.yaw)*l:0,e.player.windZ=l?Math.cos(s.yaw)*l:0,this.node&&this.node.built&&!this.node.built.group.visible?this.mesh.visible=!1:this.node&&(this.phase==="arrive"||this.phase==="pass"||this.phase==="dwell"||this.phase==="depart")&&(this.mesh.visible=!0),e.state.train=this.phase}}function Xl(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class HS{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,f,h]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const u=e.createOscillator();u.type=f,u.frequency.value=c;const p=e.createGain();p.gain.value=h,u.connect(p),p.connect(i),u.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const s=e.createOscillator();s.type="square",s.frequency.value=100;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2900,r.Q.value=1.4,s.connect(r),r.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),s.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,Xl(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const o=Xl(e,t.white,.8);o.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,o.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const a=e.createGain();a.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,Xl(e,t.white,1.3).connect(l),l.connect(a),a.connect(t.out)}update(t,e){const i=this.ctx,s=i.currentTime,r=.12;this.t+=t;const o=this.t,a=e.director.events,l=e.world.current,c=e.state.wrong,f=a.pow,h=l?l.flick.value:1,u=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*f*u*(1-c*.03),s,r),this.buzz.gain.setTargetAtTime(.004+(h<.5?0:.006)*f+(1-f)*.01,s,.02);const p=e.trains?e.trains.level:0;this.rumble.gain.setTargetAtTime(.16+.1*Oe(o*.13,1)+p*.75,s,.3),this.rumbleLP.frequency.setTargetAtTime(62+p*120,s,.4);const m=l&&(l.def.type==="platform"||l.def.type==="trainstop")?1.5:1,_=.5+.5*Oe(o*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+p*.11)*m,s,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*Oe(o*.17,3))+p*500,s,.5);const d=Math.max(0,Oe(o*.11,4)-.35)+p*.25;this.whistle.gain.setTargetAtTime(d*.05*m,s,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*Oe(o*.23,5),s,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Me(n,{freq:t,to:e,type:i="sine",dur:s=.3,gain:r=.2,attack:o=.005,at:a=0,rev:l=.5,dry:c=1}){const f=n.ctx,h=f.currentTime+a,u=f.createOscillator();u.type=i,u.frequency.setValueAtTime(t,h),e&&u.frequency.exponentialRampToValueAtTime(e,h+s);const p=f.createGain();if(p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(r,h+o),p.gain.exponentialRampToValueAtTime(1e-4,h+s),u.connect(p),c>0){const m=f.createGain();m.gain.value=c,p.connect(m),m.connect(n.out)}if(l>0){const m=f.createGain();m.gain.value=l,p.connect(m),m.connect(n.rev)}u.start(h),u.stop(h+s+.05)}function ue(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:s=1e3,q:r=1,at:o=0,rev:a=.4,dry:l=1,attack:c=.002,sweep:f=0}){const h=n.ctx,u=h.currentTime+o,p=h.createBufferSource();p.buffer=n.white,p.loop=t>1.2;const m=h.createBiquadFilter();m.type=i,m.frequency.setValueAtTime(s,u),m.Q.value=r,f&&m.frequency.exponentialRampToValueAtTime(f,u+t);const _=h.createGain();if(_.gain.setValueAtTime(1e-4,u),_.gain.exponentialRampToValueAtTime(e,u+c),_.gain.exponentialRampToValueAtTime(1e-4,u+t),p.connect(m),m.connect(_),l>0){const d=h.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(a>0){const d=h.createGain();d.gain.value=a,_.connect(d),d.connect(n.rev)}p.start(u,Math.random()*1.5),p.stop(u+t+.05)}function sr(n,t,e,i=.16){Me(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Me(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Me(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function GS(n,t,e,i){const s=(t?1.25:1)*(.85+Math.random()*.3),r=(i?1.06:.95)*(.94+Math.random()*.12);Me(n,{freq:95*r,to:48,dur:.09,gain:.16*s,rev:.35}),e==="metal"?(ue(n,{dur:.07,gain:.12*s,type:"bandpass",freq:2300*r,q:5,rev:.6}),Me(n,{freq:610*r,dur:.22,gain:.03*s,type:"triangle",rev:.8,dry:.4})):e==="stone"?ue(n,{dur:.06,gain:.11*s,type:"bandpass",freq:1250*r,q:1.2,rev:.7}):(ue(n,{dur:.045,gain:.13*s,type:"highpass",freq:1900*r,q:.7,rev:.75}),ue(n,{dur:.03,gain:.05*s,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const VS={chimeRise(n){sr(n,392,0),sr(n,493.9,.42),sr(n,587.3,.84)},chimeFall(n){sr(n,587.3,0),sr(n,493.9,.42),sr(n,380,.84,.17)},zoom(n){Me(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){ue(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Me(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),ue(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),ue(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Me(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)ue(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,s]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Me(n,{freq:e*(.99+Math.random()*.02),dur:s,gain:i,at:t,rev:.9,dry:.7,attack:.002});ue(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),ue(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);ue(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}ue(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Me(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),ue(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},touchOut(n){Me(n,{freq:2350,dur:.14,gain:.07,type:"triangle",attack:.004,rev:.4,dry:.9})},touchFail(n){for(const t of[0,.19])Me(n,{freq:620,dur:.15,gain:.08,at:t,type:"square",attack:.004,rev:.4,dry:.9})},paddles(n){for(let t=0;t<7;t++)Me(n,{freq:150-t*7,dur:.11,gain:.07,at:.03*t,type:"triangle",attack:.002,rev:.6,dry:.8})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Me(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Me(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Me(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Me(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Me(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},WS={trainApproach(n){ue(n,{dur:9.5,gain:.32,type:"lowpass",freq:110,sweep:420,attack:4.8,rev:.7,dry:.8}),ue(n,{dur:6,gain:.012,type:"bandpass",freq:2900,sweep:3700,q:26,attack:3.5,rev:1,dry:.2});for(let t=0;t<14;t++){const e=5.2+t*(.2+t*.022);ue(n,{dur:.06,gain:.16-t*.008,type:"lowpass",freq:330,at:e,rev:.8,dry:.7}),ue(n,{dur:.05,gain:.1-t*.005,type:"lowpass",freq:300,at:e+.085,rev:.8,dry:.7})}},trainBrake(n){ue(n,{dur:2.6,gain:.03,type:"bandpass",freq:3300,sweep:2300,q:34,attack:.5,rev:1,dry:.5}),ue(n,{dur:2.2,gain:.018,type:"bandpass",freq:4500,sweep:3200,q:40,attack:.7,at:.3,rev:1,dry:.4}),ue(n,{dur:.9,gain:.07,type:"highpass",freq:2600,at:3.3,attack:.03,rev:.6,dry:.8}),Me(n,{freq:70,to:42,dur:.5,gain:.12,at:3.2,rev:.5})},doorChime(n){for(let t=0;t<9;t++)Me(n,{freq:1960,dur:.11,gain:.05,at:.9+t*.21,type:"triangle",attack:.004,rev:.6,dry:.7});ue(n,{dur:.12,gain:.12,type:"lowpass",freq:500,at:3,rev:.7})},trainDepart(n){for(const[t,e,i,s]of[[.2,110,330,2.6],[2.5,180,520,3],[5.2,260,700,3.6]])Me(n,{freq:e,to:i,dur:s,gain:.03,at:t,type:"sawtooth",attack:.4,rev:.8,dry:.5}),Me(n,{freq:e*2.02,to:i*2.02,dur:s,gain:.012,at:t,type:"triangle",attack:.4,rev:.8,dry:.4});ue(n,{dur:9.5,gain:.26,type:"lowpass",freq:140,sweep:380,attack:3,rev:.7,dry:.8});for(let t=0;t<16;t++){const e=1.6+7.2*(1-Math.sqrt(1-t/16));ue(n,{dur:.055,gain:.07+t*.006,type:"lowpass",freq:320,at:e,rev:.8,dry:.7})}}};function Yl(n,{freq:t,type:e="sine",dur:i,gain:s,attack:r=.6,release:o=.8,rev:a=.3,dry:l=1,to:c=0}){const f=n.ctx,h=f.currentTime,u=f.createOscillator();u.type=e,u.frequency.setValueAtTime(t,h),c&&(u.frequency.linearRampToValueAtTime(c,h+r),u.frequency.setValueAtTime(c,h+i-o),u.frequency.linearRampToValueAtTime(t,h+i));const p=f.createGain();if(p.gain.setValueAtTime(1e-4,h),p.gain.linearRampToValueAtTime(s,h+r),p.gain.setValueAtTime(s,h+Math.max(r,i-o)),p.gain.linearRampToValueAtTime(1e-4,h+i),u.connect(p),l>0){const m=f.createGain();m.gain.value=l,p.connect(m),m.connect(n.out)}if(a>0){const m=f.createGain();m.gain.value=a,p.connect(m),m.connect(n.rev)}u.start(h),u.stop(h+i+.05)}const qS={liftDing(n,t){const e=(i,s)=>{Me(n,{freq:i,dur:1.4,gain:.11,at:s,rev:.7,dry:.7,attack:.006}),Me(n,{freq:i*2.01,dur:.7,gain:.03,at:s,rev:.5,dry:.4})};e(830,0),t.arrive&&e(622,.38)},liftDoor(n,t){const e=t.dur||2,i=t.far?.5:1;ue(n,{dur:.03,gain:.09*i,type:"highpass",freq:2200,rev:.3}),ue(n,{dur:e,gain:.05*i,type:"lowpass",freq:240,q:.8,at:.05,rev:.35,attack:.25}),ue(n,{dur:e*.9,gain:.012*i,type:"bandpass",freq:1700,q:7,at:.1,rev:.4,attack:.3,sweep:1300}),t.shut&&(Me(n,{freq:74,to:46,dur:.22,gain:.2*i,at:e-.08,rev:.4}),ue(n,{dur:.05,gain:.1*i,type:"bandpass",freq:900,q:2,at:e-.07,rev:.4}))},liftHum(n,t){const e=t.dur||6;ue(n,{dur:.04,gain:.12,type:"bandpass",freq:1300,q:3,rev:.3}),Yl(n,{freq:46,to:58,dur:e,gain:.2,attack:1,release:1.1,rev:.25}),Yl(n,{freq:92,to:116,type:"triangle",dur:e,gain:.05,attack:1,release:1.1,rev:.25}),Yl(n,{freq:276,to:348,dur:e,gain:.012,attack:1.2,release:1.2,rev:.3}),ue(n,{dur:e,gain:.02,type:"bandpass",freq:520,q:1.4,rev:.3,attack:.9}),ue(n,{dur:.05,gain:.1,type:"bandpass",freq:1e3,q:3,at:e-.05,rev:.3})}},Zu="./voice/";function $S(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}const XS=["Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel","Microsoft Susan","Microsoft Maisie","Martha","Kate","Serena","Stephanie","Fiona","Moira","Karen","Tessa","Catherine","Samantha","Victoria","Allison","Ava","Susan","Zoe","Microsoft Zira","Microsoft Aria","Microsoft Jenny","Google US English"],YS=/\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;class ZS{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.clips=null,this.ctx=null,this.dest=null,this.src=null,this.buffers=new Map,this.seq=0,typeof fetch<"u"&&fetch(`${Zu}index.json`).then(t=>t.ok?t.json():[]).then(t=>{this.clips=new Set(t)}).catch(()=>{}),this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(r=>/^en/i.test(r.lang)),i=e.filter(r=>/en[-_]GB/i.test(r.lang));for(const r of XS){const o=i.find(a=>a.name.includes(r))||e.find(a=>a.name.includes(r));if(o&&!/\bmale\b/i.test(o.name)){this.voice=o;return}}const s=r=>/female|woman/i.test(r.name)||!YS.test(r.name);this.voice=i.find(s)||e.find(s)||i[0]||e[0]||null}prime(){if(this.enabled&&this.synth)try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}attach(t,e){this.ctx=t,this.dest=e}_buffer(t){return this.buffers.has(t)||this.buffers.set(t,fetch(`${Zu}${t}.mp3`).then(e=>e.arrayBuffer()).then(e=>new Promise((i,s)=>this.ctx.decodeAudioData(e,i,s)))),this.buffers.get(t)}speak(t,e={}){if(!this.enabled)return;this._stopAll();const i=$S(t);if(this.clips&&this.clips.has(i)&&this.ctx){const s=++this.seq;this._buffer(i).then(r=>{if(s!==this.seq||!this.enabled)return;const o=this.ctx.createBufferSource();o.buffer=r,o.playbackRate.value=e.odd?.88:1;const a=this.ctx.createGain();a.gain.value=.8,o.connect(a),a.connect(this.dest),o.start(),this.src=o}).catch(()=>{this.buffers.delete(i),s===this.seq&&this._synth(t,e)});return}this._synth(t,e)}_synth(t,e){if(this.synth)try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.86:1,i.volume=.85,this.synth.speak(i)}catch{}}_stopAll(){if(this.seq++,this.src){try{this.src.stop()}catch{}this.src=null}if(this.synth)try{this.synth.cancel()}catch{}}stop(){this._stopAll()}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function ju(n,t,e){const i=Math.floor(n.sampleRate*t),s=n.createBuffer(1,i,n.sampleRate),r=s.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;e?(o=(o+.02*l)/1.02,r[a]=o*3.5):r[a]=l}return s}function jS(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let s=0;s<2;s++){const r=i.getChannelData(s);let o=0;for(let a=0;a<e;a++){const l=a/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+s)),f=Math.random()*2-1,h=.25+.75*Math.exp(-l*3);o+=(f-o)*h,r[a]=o*c}}return i}class KS{constructor(){this.ctx=null,this.ready=!1,this.voice=new ZS,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const s=e.createConvolver();s.buffer=jS(e);const r=e.createGain();r.gain.value=.55,this.rev.connect(s),s.connect(r),r.connect(this.master),this.white=ju(e,2,!1),this.brown=ju(e,4,!0),this.ambient=new HS(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.attach(e,this.master),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=VS[t]||WS[t]||qS[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{GS(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const nf=26,ro=.0756,JS={wall:6.83,track:8.02,frieze:2.75,dado:.91,trackDado:5.7};function Ku(n,t,e,i,s,r,o){n.fillStyle=Va(r,o.range(-.07,.05)),n.fillRect(t,e,i,s),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,s*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+s-1.5,i-2,1),o.chance(.03)&&(n.fillStyle=o.chance(.5)?"rgba(60,50,35,0.22)":"rgba(255,255,255,0.18)",n.fillRect(t+1,e+1,i-2,s-2))}function Dd(n,t,e,i,s,r,o,a){const l=t/nf,c=ro*i,f=Math.ceil(s/ro);n.fillStyle=r.grout,n.fillRect(0,e-s*i,t,s*i);for(let h=0;h<f;h++){const u=e-(h+1)*c,p=h%2?l/2:0;for(let m=-1;m<nf;m++){const _=m*l+p,d=((_+l/2)/t%1+1)%1,g=a(h,(h+.5)*ro,d);g&&(Ku(n,_+.5,u+.5,l-1,c-1,g,o),_+l>t&&Ku(n,_-t+.5,u+.5,l-1,c-1,g,o))}}}const Na=n=>Math.round(n/ro),Id=(n,t)=>Math.min(...t.map(e=>Math.abs(n-e)))*nf;function QS(n){const i=141.04683195592287,s=vn(1024,512),r=s.getContext("2d"),o=new _e(ur(n.id+"passage")),a=[Na(1.2),Na(1.45)];Dd(r,1024,512,i,3.63,n,o,(c,f,h)=>{if(f<.91)return n.skirt;if(a.includes(c))return n.band;if(f>1.6){const u=Id(h,[.5]);if(u<.5)return n.band;if(u<1.05)return n.accent}return n.ground});const l=r.createLinearGradient(0,0,0,512);return l.addColorStop(0,"rgba(25,20,12,0.4)"),l.addColorStop(.3,"rgba(25,20,12,0.1)"),l.addColorStop(.8,"rgba(25,20,12,0)"),l.addColorStop(1,"rgba(25,20,12,0.25)"),r.fillStyle=l,r.fillRect(0,0,1024,512),Xe(r,0,0,1024,512,ur(n.id)+7,1,!1),s}function Ju(n,t,e,i,s,r){n.fillStyle="#e4dcc0",n.fillRect(t,e,i,s);for(let o=0;o<26;o++){const a=t+r.range(0,i),l=e+r.range(0,s),c=r.range(30,120);for(const f of[-i,0,i]){const h=n.createRadialGradient(a+f,l,0,a+f,l,c);h.addColorStop(0,`rgba(60,48,26,${r.range(.04,.1)})`),h.addColorStop(1,"rgba(60,48,26,0)"),n.fillStyle=h,n.fillRect(a+f-c,l-c,c*2,c*2)}}}function tb(n){const i=JS,s=vn(1024,1024),r=s.getContext("2d"),o=new _e(ur(n.id+"platform")),a=512/i.wall,l=[.25,.75],c=.16*(1024/6),f=.38*(1024/6),h=(S,y)=>{for(const b of l)for(const A of[-1,1]){const M=b*1024+A*f/2-c/2;r.fillStyle=n.band,r.fillRect(M,S,c,y),r.fillStyle="rgba(255,255,255,0.10)",r.fillRect(M,S,2,y),r.fillStyle="rgba(0,0,0,0.25)";for(let T=S;T<S+y;T+=ro*a*3)r.fillRect(M,T,c,1)}};Ju(r,0,0,1024,512,o),h(0,512-i.frieze*a);const u=[Na(1.2),Na(1.45)];Dd(r,1024,512,a,i.frieze,n,o,(S,y,b)=>y<i.dado?n.skirt:u.includes(S)||Id(b,l.flatMap(A=>[A-.032,A+.032]))<.55?n.band:n.ground);const p=512/i.track,m=S=>1024-S*p;Ju(r,0,512,1024,512,o),h(m(i.trackDado),i.trackDado*p),r.fillStyle="#17181a",r.fillRect(0,512,1024,m(i.trackDado)-512),r.fillStyle=n.band,r.fillRect(0,m(3.6)-3,1024,6);const _=[[.25,6,"#0b0b0b"],[.42,4,"#3a3a3a"],[.6,7,"#101010"],[.78,4,"#4a2c1a"],[1,5,"#0c0c0c"]];for(const[S,y,b]of _){const A=m(i.trackDado+S);r.fillStyle=b,r.fillRect(0,A,1024,y),r.fillStyle="rgba(255,255,255,0.13)",r.fillRect(0,A,1024,1)}for(let S=40;S<1024;S+=170)r.fillStyle="#2c2d2f",r.fillRect(S,m(i.trackDado+1.1),5,1*p);Xe(r,0,512,1024,512,ur(n.id)+3,.8,!1);const d=r.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(25,20,12,0.38)"),d.addColorStop(.35,"rgba(25,20,12,0.1)"),d.addColorStop(.85,"rgba(25,20,12,0)"),d.addColorStop(1,"rgba(25,20,12,0.22)"),r.fillStyle=d,r.fillRect(0,0,1024,512);const g=r.createLinearGradient(0,1024,0,512);return g.addColorStop(0,"rgba(25,20,12,0.38)"),g.addColorStop(.4,"rgba(25,20,12,0.12)"),g.addColorStop(1,"rgba(25,20,12,0.05)"),r.fillStyle=g,r.fillRect(0,512,1024,512),Xe(r,0,0,1024,512,ur(n.id)+7,1,!1),s}function eb(n,t="passage"){return t==="platform"?tb(n):QS(n)}const _a=new Map,Vr=[],nb=4;function Qu(n,t="passage"){const e=Vr.indexOf(n.id);for(e>=0&&Vr.splice(e,1),Vr.push(n.id);Vr.length>nb;){const r=Vr.shift();for(const o of["passage","platform"]){const a=_a.get(`${r}:${o}`);a&&(a.dispose(),_a.delete(`${r}:${o}`))}}const i=`${n.id}:${t}`;let s=_a.get(i);return s||(s=Ds(eb(n,t),{repeatU:!0}),_a.set(i,s)),s}const si=3;class ib{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.free=[{x:0,y:0,w:t,h:t}],this.used=!1,this.overflow=0}_ensure(){this.canvas||(this.canvas=vn(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}_place(t,e){let i=-1,s=1/0;for(let l=0;l<this.free.length;l++){const c=this.free[l];c.w>=t&&c.h>=e&&c.w*c.h<s&&(i=l,s=c.w*c.h)}if(i<0)return null;const r=this.free.splice(i,1)[0],o=r.w-t,a=r.h-e;return o>a?(o>8&&this.free.push({x:r.x+t,y:r.y,w:o,h:r.h}),a>8&&this.free.push({x:r.x,y:r.y+e,w:t,h:a})):(a>8&&this.free.push({x:r.x,y:r.y+e,w:r.w,h:a}),o>8&&this.free.push({x:r.x+t,y:r.y,w:o,h:e})),{x:r.x,y:r.y}}room(t){const e=this.free;this.free=e.map(s=>({...s}));let i=0;for(const[s,r]of t){if(!this._place(Math.round(s)+si*2,Math.round(r)+si*2))break;i++}return this.free=e,i}add(t,e,i){return this.paint(this.reserve(t,e),i)}reserve(t,e){const i=this.size;t=Math.min(Math.round(t),i-si*2),e=Math.min(Math.round(e),i-si*2);let s=this._place(t+si*2,e+si*2);if(!s){this.overflow++;for(let r=0;r<4&&!s;r++)t=Math.max(8,Math.round(t*.7)),e=Math.max(8,Math.round(e*.7)),s=this._place(t+si*2,e+si*2);s||(s={x:0,y:0})}return{x:s.x+si,y:s.y+si,w:t,h:e}}paint(t,e){this._ensure();const i=this.size,{x:s,y:r,w:o,h:a}=t,l=this.ctx;l.save(),l.translate(s,r),l.beginPath(),l.rect(0,0,o,a),l.clip(),l.clearRect(0,0,o,a),e(l,o,a),l.restore(),this.used=!0;const c=.5;return[(s+c)/i,1-(r+a-c)/i,(s+o-c)/i,1-(r+c)/i]}finish(){return this.used?Ds(this.canvas):null}}function sb(n,t){const e=t.env.theme||wf("Mornington Crescent");return n==="tile"?Qu(e,"passage"):n==="ptile"?Qu(e,"platform"):n==="dyn"?zv():n==="car"?gx():n==="lining"?jx():n==="hall"?Ux():n==="train"?Md():n.startsWith("lift")?uS():ky()}function rb(n){return new ib(n.def.sheetSize||512)}let th="";function ob(n,t){const e=n.state,s=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;s!==th&&(th=s,Hv(n.story.boardState(t)))}class ab{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new py,this.overlay.mobile=this.mobile,this.renderer=new dy(t,this.overlay,{mobile:this.mobile}),this.scene=new Nh,this.camera=new Dn(se.fov,this.renderer.aspect,.08,90),this.player=new My(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:se.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new KS,this.story=new ES(this),this.world=new xy(this.scene,{choose:(i,s,r,o)=>this.story.choose(i,s,r,o),textures:(i,s)=>sb(i,s),makeSheet:i=>rb(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new IS(this),this.trains=new BS(this),this.lifts=new mS(this),this.keyboard=Ty(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=Ey(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0,s=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.progress=s,this.story.wrong=i,this.story.base=i;const r=this.story.begin(this.world,e),o=r.built&&r.built.extra&&r.built.extra.spawn;if(o){const a=Math.cos(r.yaw),l=Math.sin(r.yaw);this.player.spawn(r.pos.x+o.x*a+o.z*l,r.pos.y,r.pos.z-o.x*l+o.z*a,r.yaw+(o.yaw||0))}else this.player.spawn(r.pos.x,r.pos.y,r.pos.z+1.5,r.yaw);Object.assign(this.state,{won:!1,time:0,progress:s,wrong:i,junctions:0,wrongTurns:0,cluesRead:0,station:r.env.station}),this.director.reset(),this.trains&&this.trains.reset(),this.lifts&&this.lifts.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=qe((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const s=e.started&&!e.paused&&!e.won;try{s?this.step(i):this.idle(i)}catch(r){e.errors++,e.errors<5&&console.error(r)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,s=this.player;e.time+=t,i.mx=qe(i.kmx+i.tmx,-1,1),i.mz=qe(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const r=s.update(t,i,this.world);this.world.pump(),this.trains.update(t),this.lifts.update(t),this.director.update(t,r),this.animate(t),e.x=+s.pos.x.toFixed(2),e.y=+s.pos.y.toFixed(2),e.z=+s.pos.z.toFixed(2),e.yaw=+s.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+se.eye,e.pos.z),this.camera.rotation.set(e.pitch+Oe(e.t*.3,5)*.03,e.yaw+Oe(e.t*.21,6)*.08,Oe(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let s=0;for(const r of this.world.nodes.values()){if(!r.built)continue;s++;const o=Oe(e*1.3+r.phase,3),a=Oe(e*23+r.phase*7,4);r.flick.value=o>.15-i*.04?a>-.2?1:.15:a>.55?.9:.04}this.state.built=s,Xr.uPower.value=this.director.power(e,t),ob(this,e)}}const Zl=n=>({wrong:n.wrong||0,station:n.station||"Camden Town",gseed:n.seed||1,idx:n.idx||0}),lb={diagram(n,t,e,i){const s=Ao(i.station||"Camden Town",i.dir||"south");i.corrupt&&Ca(s,i.corrupt,new _e(i.seed||1)),Af(n,t,e,s,{station:i.station,dir:i.dir||"south"})},roundel(n,t,e,i){Eo(n,t,e,i.name||"Camden Town",i)},strip(n,t,e,i){dd(n,t,e,{current:i.station||"Mornington Crescent",ghosts:i.ghosts?Ef:[]})},psign(n,t,e,i){pd(n,t,e,i)},whiteboard(n,t,e,i){const s=new _e(i.seed||1);Yh(n,t,e,i.junction?$h(s,Zl(i),i.junction):bf(s,Zl(i),i),s)},info(n,t,e,i){yd(n,t,e,ho,i.station||"Mornington Crescent",new _e(i.seed||1))},paper(n,t,e,i){const s=new _e(i.seed||1);xd(n,t,e,Pf(s,Zl(i),i),s)}};function cb(n,t,e,i={}){const s=vn(t,e);return lb[n](s.getContext("2d"),t,e,i),s.toDataURL("image/png")}const eh={shelter:{plan:["platform","corridor","shelter","corridor","junction"],advance:2,at:[0,3.2]},ghost:{plan:["platform","corridor","ghost","corridor","junction"],advance:2,at:[0,2.2],wrong:1.4},hall:{plan:["platform","corridor","exit"],advance:2,at:[0,5.2,0,1.92],progress:4,wrong:2,after(n,t,e){e.z!==void 0&&n.at(e.x??0,e.z,e.yaw??0,1.92)}},spiral:{plan:["platform","corridor","spiral","exit"],advance:2,at:[0,.8],progress:4,wrong:2,after(n,t,e){if(e.landing===void 0)return;const i=t.world.current,s=e.landing===0?0:e.landing*18,r=(De(s)+De(s+1))/2-(e.back??.12);n.at(i.p.dir*2*Math.sin(r),et.ZC-2*Math.cos(r),0,pn(s));const o=r+(e.turn??.75);n.face(Math.atan2(-i.p.dir*Math.cos(o),-Math.sin(o))+i.yaw,e.pitch??.1)}},lift:{plan:["platform","corridor","lift","corridor","junction"],advance:2,at:[0,.12],after(n,t,e){if(e.dir&&n.lift().dir!==e.dir)for(let i=8;i<40&&(t.reset(i,this.plan,e.wrong??0,1),n.advance(2),n.at(0,.12),n.lift().dir!==e.dir);i++);(e.state||e.odd!==void 0)&&n.lift(e.state,e)}},train:{plan:["platform","corridor","trainstop","corridor","junction"],advance:2,at:[0,1.5],after(n,t,e){if(e.car===void 0)return;const i=t.world.current;n.at(i.p.side*3.045,2.1+e.car*18.02+(e.z??9),e.yaw||0)}}};function fb(n,t){const e=t.player,i=t.world,s=(r,o,a,l,c=0)=>{const[f,h,u]=$i(r,o,c,a);return i.current=r,i.refresh(!0),e.spawn(f,h,u,r.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(r=0,o=0,a=!1){t.input.kmx=r,t.input.kmz=o,t.input.krun=!!a},look(r=0,o=0){e.yaw+=r,e.pitch+=o},face(r,o=0){e.yaw=r,e.pitch=o},tp(r,o,a){e.pos.x=r,e.pos.y=o,e.pos.z=a,e.eyeY=o+1.62},advance(r=1,o=0){let a=i.current;for(let l=0;l<r;l++){const c=a.exits[Math.min(o,a.exits.length-1)];if(!c||(c.child||i.expand(a,a.exits.indexOf(c)),!c.child))break;a=c.child}return s(a,0,.6,0)},seek(r,o=60,a=0){let l=i.current;for(let c=0;c<o;c++){const f=l.exits[Math.min(a,l.exits.length-1)];if(!f||(f.child||i.expand(l,l.exits.indexOf(f)),!f.child))return null;if(l=f.child,i.current=l,i.refresh(!0),l.def.type===r)return s(l,0,.6,0)}return null},find(r,o=1.6,a={}){let l=i.current,c=a.skip||0;for(let f=0;f<=(a.max||40);f++){i.current=l,i.refresh(!0);const h=l.built?l.built.items.filter(p=>(p.label||"").includes(r)&&(!a.test||a.test(p))):[];if(h.length>c){const p=h[c],m=p.n||[-Math.sign(p.x),0],_=p.x+m[0]*o,d=p.z+m[1]*o,[g,,S]=$i(l,_,0,d),y=a.ly===void 0?Ta(l,g,S,l.pos.y+p.y-1.3):null;s(l,_,d,0,y?y.y-l.pos.y:a.ly||0);const[b,A,M]=$i(l,p.x,p.y,p.z),T=b-e.pos.x,w=M-e.pos.z;return e.yaw=Math.atan2(-T,-w),e.pitch=Math.atan2(A-e.eyeY,Math.hypot(T,w)),{type:l.def.type,station:l.env.station,text:p.text,board:p.board,paper:p.paper,correct:l.p.correct}}c-=h.length;const u=l.exits[0];if(!u||(u.child||i.expand(l,0),!u.child))return null;l=u.child}return null},at(r,o,a=0,l=0){return s(i.current,r,o,a,l)},cam(){return t.camera},gates(r){const o=i.current;return r&&Ia(o,r),{state:o.gateState||"wait",busy:o.gateBusy,touches:o.gateTouches||0,time:t.state.time,zones:o.built&&o.built.extra?o.built.extra.zones.map(a=>!!a.done):[]}},lift(r,o){return gS(t,r,o)},dirOf(){const r=i.current;return r.p.dir??r.p.side??1},leaks(r=i.current){const o=t.camera,a=o.far,l=n.debug.scanVoid();o.far=600,o.updateProjectionMatrix();const c=(h,u)=>Ts(r,h,u).map(p=>+p.toFixed(2)),f=l.list.map(h=>{o.position.set(h.cam[0],h.cam[1],h.cam[2]),o.rotation.set(h.cam[3],h.cam[4],h.cam[5]),o.updateMatrixWorld(!0);const u=n.debug.voidPixels({y:0}).hits[0],p=u?n.debug.pick(u[3],u[4]):[];return{from:h.type,at:c(h.cam[0],h.cam[2]).concat(+(h.cam[1]-r.pos.y).toFixed(2)),rot:[+h.cam[3].toFixed(2),+h.cam[4].toFixed(2)],n:h.n,px:u?[u[3],u[4]]:null,under:p.slice(0,2).map(m=>`${m.layer}:${m.node}@${m.local.map(_=>_.toFixed(2)).join(",")} d${m.d.toFixed(1)}`)}});return o.far=a,o.updateProjectionMatrix(),{total:l.total,byType:l.byType,leaks:f}},showVoid(r=!0){t.renderer.gl.setClearColor(r?16711935:0,1)},local(){const r=i.current,[o,a]=Ts(r,e.pos.x,e.pos.z);return{x:o,y:e.pos.y-r.pos.y,z:a,type:r.def.type}},folds(){return[...i.nodes.values()].filter(r=>r.hiddenByFold).length},boxes(){return[...i.nodes.values()].map(r=>({id:r.id,type:r.def.type,dist:r.dist,built:!!r.built,hidden:!!r.hiddenByFold,box:r.box.map(o=>+o.toFixed(1))}))},items(){const r=i.current;return r.built?r.built.items.map(o=>({label:o.label,x:o.x,y:o.y,z:o.z})):[]},info(){const r=i.current;return{type:r.def.type,id:r.id,yaw:+r.yaw.toFixed(2),pos:[r.pos.x,r.pos.y,r.pos.z].map(o=>+o.toFixed(1)),exits:r.exits.length,nodes:i.nodes.size,station:r.env.station,idx:r.env.idx,plan:r.env.stretch?r.env.stretch.plan.join(","):"",items:r.built?r.built.items.map(o=>o.label||o.title||"?"):[]}},voidPixels(r=!1){const o=t.renderer,a=o.gl,l=a.getClearColor(new ae);a.setClearColor(16711935,1),a.setRenderTarget(o.target),a.render(t.scene,t.camera);const c=new Uint8Array(o.iw*o.ih*4);a.readRenderTargetPixels(o.target,0,0,o.iw,o.ih,c),a.setRenderTarget(null),a.setClearColor(l,1);let f=0;const h=[];for(let u=0;u<c.length;u+=4)if(c[u]>180&&c[u+1]<90&&c[u+2]>180&&(f++,r&&h.length<400)){const p=u/4%o.iw,m=Math.floor(u/4/o.iw),_=new Q((p+.5)/o.iw*2-1,(m+.5)/o.ih*2-1,.5).unproject(t.camera),d=t.camera.position,g=r.y!==void 0?(r.y-d.y)/(_.y-d.y):((r.z??0)-d.z)/(_.z-d.z);h.push([d.x+(_.x-d.x)*g,d.y+(_.y-d.y)*g,d.z+(_.z-d.z)*g].map(S=>+S.toFixed(3)).concat([p,m,c[u],c[u+1],c[u+2]]))}return r?{n:f,hits:h}:f},pick(r,o,a=!1,l=3){const c=t.renderer,f=new iy;f.setFromCamera(new le((r+.5)/c.iw*2-1,(o+.5)/c.ih*2-1),t.camera);const h=[];a&&t.scene.traverse(p=>{p.material&&p.material.side!==Un&&(h.push([p.material,p.material.side]),p.material.side=Un)});const u=f.intersectObjects(t.scene.children,!0).slice(0,l);for(const[p,m]of h)p.side=m;return u.map(p=>{const m=[...i.nodes.values()].find(S=>S.built&&S.built.group===p.object.parent),[_,d]=m?Ts(m,p.point.x,p.point.z):[p.point.x,p.point.z],g={x:_,y:p.point.y-(m?m.pos.y:0),z:d};return{layer:p.object.name,node:m?m.def.type:"?",d:+p.distance.toFixed(3),local:[g.x,g.y,g.z].map(S=>+S.toFixed(3)),uv:p.uv?[+p.uv.x.toFixed(4),+p.uv.y.toFixed(4)]:null,face:p.faceIndex}})},buildAll(r=12){const o=[se.ahead,se.sight];return se.ahead=r,se.sight=1e6,i.refresh(!0),[se.ahead,se.sight]=o,[...i.nodes.values()].filter(a=>a.built).map(a=>a.def.type)},scanVoid(r=8,o=[-.5,0,.45]){const a=t.camera,l=a.far;a.far=600,a.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{},list:[]};for(const f of i.nodes.values()){if(!f.built)continue;const h=f.built.cells,u=Math.max(1,Math.ceil(h.length/48));for(let p=0;p<h.length;p++){if(u>1&&p>=12&&p<h.length-12&&p%u)continue;const m=h[p];for(const _ of[.25,.75]){const[d,g,S]=$i(f,m.ax+(m.bx-m.ax)*_,m.ya+(m.yb-m.ya)*_,m.az+(m.bz-m.az)*_);for(let y=0;y<r;y++)for(const b of o){const A=y/r*Math.PI*2+.11;a.position.set(d+.0137,g+1.6071,S-.0093),a.rotation.set(b+.013,A,.007),a.updateMatrixWorld(!0);const M=n.debug.voidPixels();c.views++,c.total+=M,M&&(c.byType[f.def.type]=(c.byType[f.def.type]||0)+M),M&&(!c.worst||M>c.worst.n)&&(c.worst={n:M,type:f.def.type,id:f.id,cam:[a.position.x,a.position.y,a.position.z,a.rotation.x,a.rotation.y,a.rotation.z]}),M&&c.list.length<300&&c.list.push({n:M,type:f.def.type,cam:[a.position.x,a.position.y,a.position.z,a.rotation.x,a.rotation.y,a.rotation.z]})}}}}return a.far=l,a.updateProjectionMatrix(),c},preview:cb,overflow(){return[...i.nodes.values()].filter(r=>r.built&&r.built.sheetOverflow).map(r=>({type:r.def.type,n:r.built.sheetOverflow,labels:r.built.items.map(o=>o.label).join(",")}))},census(){return[...i.nodes.values()].filter(r=>r.built).map(r=>({key:`${t.state.seed}:${r.id}`,type:r.def.type,boards:r.built.items.filter(o=>o.board).map(o=>o.board),papers:r.built.items.filter(o=>o.paper).map(o=>o.paper)}))},builtCount(){return[...i.nodes.values()].filter(r=>r.built).length},train(r=2){return t.trains.soon(r),t.trains.schedule()},fuzz(r=6,o=12,a=1){const l={takes:0,planned:-i.stats.planned,forced:0,folds:0,overflow:0,mismatch:0,exits:0};i.stats.deadEnds=0,i.stats.forced.length=0;for(let c=a;c<a+r;c++){t.reset(c);let f=c*7919,h=0;for(let u=0;u<o;u++){f=f*1103515245+12345&2147483647;const p=c%5===0?!1:(f>>8)%3!==0,m=n.debug.take(p);if(!m){l.exits++;break}l.takes++,h=p?h+1:Math.max(0,h-2),(i.current.env.stretch.index!==h||m.progress!==Math.min(h,se.goal))&&l.mismatch++,n.debug.buildAll(5),l.folds=Math.max(l.folds,n.debug.folds());for(const d of i.nodes.values())d.built&&d.built.sheetOverflow&&l.overflow++}}return l.planned+=i.stats.planned,l.forced=i.stats.deadEnds,l.clashes=i.stats.forced.slice(0,3),l.errors=t.state.errors,t.reset(a),l},scene(r,o={}){const a=eh[r];if(!a)return Object.keys(eh);n.debug.force(null),n.debug.branch(null),t.reset(o.seed??a.seed??7,a.plan,o.wrong??a.wrong??0,a.progress??1),t.director.reset(),a.advance&&n.debug.advance(a.advance);const l=a.at||[0,1.2,0];return n.debug.at(l[0],l[1],l[2]||0,l[3]||0),a.after&&a.after(n.debug,t,o),n.debug.info()},measure(r=8,o=100){const a=u=>u.def.type==="spiral"?129:u.def.type==="exit"?19:u.def.type==="bend"?7.1:u.exits[0]?Math.hypot(u.exits[0].x,u.exits[0].z):6,l=[];for(let u=o;u<o+r;u++){t.reset(u);const p=[];let m=i.current,_={m:0,n:0,types:[]},d=0;for(;m&&d++<400;){if(_.m+=a(m),_.n++,_.types.push(m.def.type),m.def.type==="junction"){if(p.push(_),_={m:0,n:0,types:[]},i.current=m,i.refresh(!0),!n.debug.take(!0))break;m=i.current;continue}if(!m.exits.length){p.push(_);break}m.exits[0].child||i.expand(m,0),m=m.exits[0].child}l.push({seed:u,metres:Math.round(p.reduce((g,S)=>g+S.m,0)),stretches:p.map(g=>({m:Math.round(g.m),n:g.n,types:g.types.join(" ")}))})}const c=u=>+(l.reduce((p,m)=>p+u(m),0)/l.length).toFixed(1),f=l.flatMap(u=>u.stretches.slice(0,-1)),h={};for(const u of f)for(const p of u.types.split(" "))h[p]=(h[p]||0)+1;return t.reset(o),{runMetres:c(u=>u.metres),junctions:c(u=>u.stretches.length-1),stretchMetres:+(f.reduce((u,p)=>u+p.m,0)/f.length).toFixed(1),stretchSegments:+(f.reduce((u,p)=>u+p.n,0)/f.length).toFixed(1),exitMetres:c(u=>u.stretches[u.stretches.length-1].m),types:h,sample:l[0].stretches.map(u=>`${u.m}m: ${u.types}`)}},plan(r,o=7,a=0,l=0){return t.reset(o,r,a,l),n.debug.info()},take(r=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const o=i.current,a=r?o.p.correct:1-o.p.correct,l=o.p.kind;o.exits[a].child||i.expand(o,a);const c=o.exits[a].child;i.current=c,i.refresh(!0);const[f,h,u]=$i(c,0,0,4.2);return e.spawn(f,h,u,c.yaw),t.director.commit(c),{kind:l,exit:a,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(r,o){t.story.forceKind=r||null,t.story.forceLevel=o},branch(r){t.story.testBranch=r||null},setProgress(r){t.story.progress=r,t.state.progress=r},setWrong(r){t.story.wrong=r,t.state.wrong=r},say(r,o="rise"){t.director.announcer.say({text:r,chime:o})},glitch(r=1){t.director.events.glitch(r)},use(){return t.director.scan(),t.director.use(!0),t.director.reading?t.director.reading.text:""},hush(){const r=t.director;r.hint="",r.hintT=0,r.hints.length=0,r.announcer.hush()},freeze(r=!0){t.frozen=r},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const yi=cy(),xi={ready:!1,state:{started:!1,ready:!1},start(){Ud=!0}};let Ud=!1;window.__game=xi;async function ub(){yi.setLoading(!0),await oy(),yi.drawMarks();let n;try{n=new ab(document.getElementById("view"),yi)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}xi.game=n,xi.state=n.state,xi.start=()=>n.start(),xi.pause=()=>n.pause(),xi.resume=()=>n.resume(),xi.reset=t=>n.reset(t),fb(xi,n),n.state.ready=!0,xi.ready=!0,yi.onStart(()=>n.start()),yi.onResume(()=>n.resume()),yi.onAgain(()=>n.start()),yi.onVoice(t=>n.audio.setVoiceEnabled(t)),yi.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),yi.setLoading(!1),Ud&&n.start()}ub();
