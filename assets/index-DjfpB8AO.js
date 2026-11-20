(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lc="170",r0=0,vf=1,o0=2,Th=1,a0=2,fi=3,xi=0,cn=1,Tn=2,Fi=0,Ws=1,yf=2,xf=3,Sf=4,l0=5,es=100,c0=101,f0=102,u0=103,h0=104,d0=200,p0=201,m0=202,g0=203,wl=204,Al=205,_0=206,v0=207,y0=208,x0=209,S0=210,M0=211,b0=212,T0=213,E0=214,Rl=0,Cl=1,Pl=2,Ks=3,Ll=4,Dl=5,Il=6,Ul=7,Eh=0,w0=1,A0=2,zi=0,R0=1,C0=2,P0=3,L0=4,D0=5,I0=6,U0=7,wh=300,Js=301,Qs=302,Nl=303,kl=304,pa=306,Fr=1e3,pi=1001,Ol=1002,Vn=1003,N0=1004,lo=1005,ze=1006,Ca=1007,ki=1008,Si=1009,Ah=1010,Rh=1011,zr=1012,Dc=1013,hs=1014,mi=1015,Kr=1016,Ic=1017,Uc=1018,tr=1020,Ch=35902,Ph=1021,Lh=1022,Hn=1023,Dh=1024,Ih=1025,qs=1026,er=1027,Uh=1028,Nc=1029,Nh=1030,kc=1031,Oc=1033,Zo=33776,jo=33777,Ko=33778,Jo=33779,Fl=35840,zl=35841,Bl=35842,Hl=35843,Gl=36196,Vl=37492,Wl=37496,ql=37808,Xl=37809,$l=37810,Yl=37811,Zl=37812,jl=37813,Kl=37814,Jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,Qo=36492,rc=36494,oc=36495,kh=36283,ac=36284,lc=36285,cc=36286,k0=3200,O0=3201,F0=0,z0=1,pn="",Sn="srgb",gs="srgb-linear",ma="linear",de="srgb",ys=7680,Mf=519,B0=512,H0=513,G0=514,Oh=515,V0=516,W0=517,q0=518,X0=519,bf=35044,Tf="300 es",gi=2e3,ia=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pa=Math.PI/180,fc=180/Math.PI;function Jr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function ln(n,t,e){return Math.max(t,Math.min(e,n))}function $0(n,t){return(n%t+t)%t}function La(n,t,e){return(1-e)*n+e*t}function ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ae{constructor(t=0,e=0){ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],g=i[8],_=s[0],d=s[3],m=s[6],S=s[1],v=s[4],M=s[7],A=s[2],b=s[5],T=s[8];return r[0]=o*_+a*S+l*A,r[3]=o*d+a*v+l*b,r[6]=o*m+a*M+l*T,r[1]=c*_+f*S+h*A,r[4]=c*d+f*v+h*b,r[7]=c*m+f*M+h*T,r[2]=u*_+p*S+g*A,r[5]=u*d+p*v+g*b,r[8]=u*m+p*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,p=c*r-o*l,g=e*h+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-f*i)*_,t[2]=(a*i-s*o)*_,t[3]=u*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Wt;function Fh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){const n=sa("canvas");return n.style.display="block",n}const Ef={};function Tr(n){n in Ef||(Ef[n]=!0,console.warn(n))}function Z0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function j0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function K0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Xs(n.r),n.g=Xs(n.g),n.b=Xs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pn?ma:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wf=[.64,.33,.3,.6,.15,.06],Af=[.2126,.7152,.0722],Rf=[.3127,.329],Cf=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[gs]:{primaries:wf,whitePoint:Rf,transfer:ma,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:Af,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:wf,whitePoint:Rf,transfer:de,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:Af,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let xs;class J0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=sa("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Q0=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ia(s[o].image)):r.push(Ia(s[o]))}else r=Ia(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?J0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class tn extends rr{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=pi,s=pi,r=ze,o=ki,a=Hn,l=Si,c=tn.DEFAULT_ANISOTROPY,f=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Jr(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Ol:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Ol:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=wh;tn.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],g=l[9],_=l[2],d=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(p+1)/2,A=(m+1)/2,b=(f+u)/4,T=(h+_)/4,E=(g+d)/4;return v>M&&v>A?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=b/i,r=T/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=E/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=E/r),this.set(i,s,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(h-_)/S,this.z=(u-f)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends rr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ep{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bh extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],h=i[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==u||c!==p||f!==g){let d=1-a;const m=l*u+c*p+f*g+h*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),b=Math.atan2(A,m*S);d=Math.sin(d*b)/A,a=Math.sin(a*b)/A}const M=a*S;if(l=l*d+u*M,c=c*d+p*M,f=f*d+g*M,h=h*d+_*M,d===1-a){const A=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=A,c*=A,f*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+f*h+l*p-c*u,t[e+1]=l*g+f*u+c*h-a*p,t[e+2]=c*g+f*p+a*u-l*h,t[e+3]=f*g-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),h=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"YXZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"ZXY":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"ZYX":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"YZX":this._x=u*f*h+c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h-u*p*g;break;case"XZY":this._x=u*f*h-c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ln(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,e=0,i=0){Q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),f=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*f,this.y=i+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ln(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new Q,Lf=new Qr;class to{constructor(t=new Q(1/0,1/0,1/0),e=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),fo.subVectors(this.max,hr),Ss.subVectors(t.a,hr),Ms.subVectors(t.b,hr),bs.subVectors(t.c,hr),wi.subVectors(Ms,Ss),Ai.subVectors(bs,Ms),Vi.subVectors(Ss,bs);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Vi.z,Vi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Vi.z,0,-Vi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Vi.y,Vi.x,0];return!Na(e,Ss,Ms,bs,fo)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Ss,Ms,bs,fo))?!1:(uo.crossVectors(wi,Ai),e=[uo.x,uo.y,uo.z],Na(e,Ss,Ms,bs,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],In=new Q,co=new to,Ss=new Q,Ms=new Q,bs=new Q,wi=new Q,Ai=new Q,Vi=new Q,hr=new Q,fo=new Q,uo=new Q,Wi=new Q;function Na(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),f=i.dot(Wi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const ip=new to,dr=new Q,ka=new Q;class Fc{constructor(t=new Q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(ka)),this.expandByPoint(dr.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new Q,Oa=new Q,ho=new Q,Ri=new Q,Fa=new Q,po=new Q,za=new Q;class Hh{constructor(t=new Q,e=new Q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Oa.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Oa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ho),a=Ri.dot(this.direction),l=-Ri.dot(ho),c=Ri.lengthSq(),f=Math.abs(1-o*o);let h,u,p,g;if(f>0)if(h=o*l-a,u=o*a-l,g=r*f,h>=0)if(u>=-g)if(u<=g){const _=1/f;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Oa).addScaledVector(ho,u),p}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){Fa.subVectors(e,t),po.subVectors(i,t),za.crossVectors(Fa,po);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(po.crossVectors(Ri,po));if(l<0)return null;const c=a*this.direction.dot(Fa.cross(Ri));if(c<0||l+c>o)return null;const f=-a*Ri.dot(za);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,i,s,r,o,a,l,c,f,h,u,p,g,_,d){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,f,h,u,p,g,_,d)}set(t,e,i,s,r,o,a,l,c,f,h,u,p,g,_,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=o*f,p=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*f,p=l*h,g=c*f,_=c*h;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*f,p=l*h,g=c*f,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*f,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*f,p=o*h,g=a*f,_=a*h;e[0]=l*f,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=_-u*h,e[8]=g*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+g,e[10]=u-_*h}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+_,e[5]=o*f,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*f,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,rp)}lookAt(t,e,i){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ci.crossVectors(i,un),Ci.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ci.crossVectors(i,un)),Ci.normalize(),mo.crossVectors(un,Ci),s[0]=Ci.x,s[4]=mo.x,s[8]=un.x,s[1]=Ci.y,s[5]=mo.y,s[9]=un.y,s[2]=Ci.z,s[6]=mo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],g=i[2],_=i[6],d=i[10],m=i[14],S=i[3],v=i[7],M=i[11],A=i[15],b=s[0],T=s[4],E=s[8],y=s[12],x=s[1],w=s[5],P=s[9],L=s[13],D=s[2],N=s[6],k=s[10],B=s[14],U=s[3],R=s[7],z=s[11],H=s[15];return r[0]=o*b+a*x+l*D+c*U,r[4]=o*T+a*w+l*N+c*R,r[8]=o*E+a*P+l*k+c*z,r[12]=o*y+a*L+l*B+c*H,r[1]=f*b+h*x+u*D+p*U,r[5]=f*T+h*w+u*N+p*R,r[9]=f*E+h*P+u*k+p*z,r[13]=f*y+h*L+u*B+p*H,r[2]=g*b+_*x+d*D+m*U,r[6]=g*T+_*w+d*N+m*R,r[10]=g*E+_*P+d*k+m*z,r[14]=g*y+_*L+d*B+m*H,r[3]=S*b+v*x+M*D+A*U,r[7]=S*T+v*w+M*N+A*R,r[11]=S*E+v*P+M*k+A*z,r[15]=S*y+v*L+M*B+A*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*u+i*c*u+s*a*p-i*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*f-r*l*f)+d*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*f-i*c*f)+m*(-s*a*f-e*l*h+e*a*u+s*o*h-i*o*u+i*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],S=h*d*c-_*u*c+_*l*p-a*d*p-h*l*m+a*u*m,v=g*u*c-f*d*c-g*l*p+o*d*p+f*l*m-o*u*m,M=f*_*c-g*h*c+g*a*p-o*_*p-f*a*m+o*h*m,A=g*h*l-f*_*l-g*a*u+o*_*u+f*a*d-o*h*d,b=e*S+i*v+s*M+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=S*T,t[1]=(_*u*r-h*d*r-_*s*p+i*d*p+h*s*m-i*u*m)*T,t[2]=(a*d*r-_*l*r+_*s*c-i*d*c-a*s*m+i*l*m)*T,t[3]=(h*l*r-a*u*r-h*s*c+i*u*c+a*s*p-i*l*p)*T,t[4]=v*T,t[5]=(f*d*r-g*u*r+g*s*p-e*d*p-f*s*m+e*u*m)*T,t[6]=(g*l*r-o*d*r-g*s*c+e*d*c+o*s*m-e*l*m)*T,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*p+e*l*p)*T,t[8]=M*T,t[9]=(g*h*r-f*_*r-g*i*p+e*_*p+f*i*m-e*h*m)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*m+e*a*m)*T,t[11]=(f*a*r-o*h*r-f*i*c+e*h*c+o*i*p-e*a*p)*T,t[12]=A*T,t[13]=(f*_*s-g*h*s+g*i*u-e*_*u-f*i*d+e*h*d)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*d-e*a*d)*T,t[15]=(o*h*s-f*a*s+f*i*l-e*h*l-o*i*u+e*a*u)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,p=r*f,g=r*h,_=o*f,d=o*h,m=a*h,S=l*c,v=l*f,M=l*h,A=i.x,b=i.y,T=i.z;return s[0]=(1-(_+m))*A,s[1]=(p+M)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(u+m))*b,s[6]=(d+S)*b,s[7]=0,s[8]=(g+v)*T,s[9]=(d-S)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const c=1/r,f=1/o,h=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){const l=this.elements,c=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),u=(i+s)/(i-s);let p,g;if(a===gi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ia)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){const l=this.elements,c=1/(e-t),f=1/(i-s),h=1/(o-r),u=(e+t)*c,p=(i+s)*f;let g,_;if(a===gi)g=(o+r)*h,_=-2*h;else if(a===ia)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ts=new Q,Un=new Te,sp=new Q(0,0,0),rp=new Q(1,1,1),Ci=new Q,mo=new Q,un=new Q,Df=new Te,If=new Qr;class Mi{constructor(t=0,e=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Df.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Df,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return If.setFromEuler(this),this.setFromQuaternion(If,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let op=0;const Uf=new Q,Es=new Qr,oi=new Te,go=new Q,pr=new Q,ap=new Q,lp=new Qr,Nf=new Q(1,0,0),kf=new Q(0,1,0),Of=new Q(0,0,1),Ff={type:"added"},cp={type:"removed"},ws={type:"childadded",child:null},Ba={type:"childremoved",child:null};class mn extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Q,e=new Mi,i=new Qr,s=new Q(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Wt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Nf,t)}rotateY(t){return this.rotateOnAxis(kf,t)}rotateZ(t){return this.rotateOnAxis(Of,t)}translateOnAxis(t,e){return Uf.copy(t).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nf,t)}translateY(t){return this.translateOnAxis(kf,t)}translateZ(t){return this.translateOnAxis(Of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(pr,go,this.up):oi.lookAt(go,pr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(oi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ff),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ff),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}mn.DEFAULT_UP=new Q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new Q,ai=new Q,Ha=new Q,li=new Q,As=new Q,Rs=new Q,zf=new Q,Ga=new Q,Va=new Q,Wa=new Q,qa=new Pe,Xa=new Pe,$a=new Pe;class Bn{constructor(t=new Q,e=new Q,i=new Q){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),ai.subVectors(i,e),Ha.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ai),l=Nn.dot(Ha),c=ai.dot(ai),f=ai.dot(Ha),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*f)*u,g=(o*f-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return qa.setScalar(0),Xa.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,i),$a.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector($a,r.z),o}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),ai.subVectors(t,e),Nn.cross(ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Nn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),Rs.subVectors(r,i),Ga.subVectors(t,i);const l=As.dot(Ga),c=Rs.dot(Ga);if(l<=0&&c<=0)return e.copy(i);Va.subVectors(t,s);const f=As.dot(Va),h=Rs.dot(Va);if(f>=0&&h<=f)return e.copy(s);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(i).addScaledVector(As,o);Wa.subVectors(t,r);const p=As.dot(Wa),g=Rs.dot(Wa);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Rs,a);const d=f*g-p*h;if(d<=0&&h-f>=0&&p-g>=0)return zf.subVectors(r,s),a=(h-f)/(h-f+(p-g)),e.copy(s).addScaledVector(zf,a);const m=1/(d+_+u);return o=_*m,a=u*m,e.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=$0(t,1),e=ln(e,0,1),i=ln(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const i=Gh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return ee.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ln(Xe.r*255,0,255))*65536+Math.round(ln(Xe.g*255,0,255))*256+Math.round(ln(Xe.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Sn){ee.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(_o);const i=La(Pi.h,_o.h,e),s=La(Pi.s,_o.s,e),r=La(Pi.l,_o.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new re;re.NAMES=Gh;let fp=0;class ga extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Jr(),this.name="",this.blending=Ws,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Al,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Al&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vh extends ga{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new Q,vo=new ae;class $e{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bf&&(t.usage=this.usage),t}}class Wh extends $e{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qh extends $e{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ls extends $e{constructor(t,e,i){super(new Float32Array(t),e,i)}}let up=0;const yn=new Te,Za=new mn,Cs=new Q,hn=new to,mr=new to,Fe=new Q;class bi extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?qh:Wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ls(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(hn.min,mr.min),hn.expandByPoint(Fe),Fe.addVectors(hn.max,mr.max),hn.expandByPoint(Fe)):(hn.expandByPoint(mr.min),hn.expandByPoint(mr.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Fe.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(t,c),Fe.add(Cs)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new Q,l[E]=new Q;const c=new Q,f=new Q,h=new Q,u=new ae,p=new ae,g=new ae,_=new Q,d=new Q;function m(E,y,x){c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),h.fromBufferAttribute(i,x),u.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),f.sub(c),h.sub(c),p.sub(u),g.sub(u);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),d.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(w),a[E].add(_),a[y].add(_),a[x].add(_),l[E].add(d),l[y].add(d),l[x].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let E=0,y=S.length;E<y;++E){const x=S[E],w=x.start,P=x.count;for(let L=w,D=w+P;L<D;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new Q,M=new Q,A=new Q,b=new Q;function T(E){A.fromBufferAttribute(s,E),b.copy(A);const y=a[E];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(b,y);const w=M.dot(l[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,w)}for(let E=0,y=S.length;E<y;++E){const x=S[E],w=x.start,P=x.count;for(let L=w,D=w+P;L<D;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,f=new Q,h=new Q;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),d=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let _=0,d=l.length;_<d;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let m=0;m<f;m++)u[g++]=c[p++]}return new $e(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],h=r[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Te,qi=new Hh,yo=new Fc,Hf=new Q,xo=new Q,So=new Q,Mo=new Q,ja=new Q,bo=new Q,Gf=new Q,To=new Q;class An extends mn{constructor(t=new bi,e=new Vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],h=r[l];f!==0&&(ja.fromBufferAttribute(h,t),o?bo.addScaledVector(ja,f):bo.addScaledVector(ja.sub(e),f))}e.add(bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(yo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(yo,Hf)===null||qi.origin.distanceToSquared(Hf)>(t.far-t.near)**2))&&(Bf.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],m=o[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let M=S,A=v;M<A;M+=3){const b=a.getX(M),T=a.getX(M+1),E=a.getX(M+2);s=Eo(this,m,t,i,c,f,h,b,T,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const S=a.getX(d),v=a.getX(d+1),M=a.getX(d+2);s=Eo(this,o,t,i,c,f,h,S,v,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const d=u[g],m=o[d.materialIndex],S=Math.max(d.start,p.start),v=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let M=S,A=v;M<A;M+=3){const b=M,T=M+1,E=M+2;s=Eo(this,m,t,i,c,f,h,b,T,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const S=d,v=d+1,M=d+2;s=Eo(this,o,t,i,c,f,h,S,v,M),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function hp(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===xi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:n}}function Eo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,So),n.getVertexPosition(c,Mo);const f=hp(n,t,e,i,xo,So,Mo,Gf);if(f){const h=new Q;Bn.getBarycoord(Gf,xo,So,Mo,h),s&&(f.uv=Bn.getInterpolatedAttribute(s,a,l,c,h,new ae)),r&&(f.uv1=Bn.getInterpolatedAttribute(r,a,l,c,h,new ae)),o&&(f.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new Q),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new Q,materialIndex:0};Bn.getNormal(xo,So,Mo,u.normal),f.face=u,f.barycoord=h}return f}class eo extends bi{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ls(c,3)),this.setAttribute("normal",new ls(f,3)),this.setAttribute("uv",new ls(h,2));function g(_,d,m,S,v,M,A,b,T,E,y){const x=M/T,w=A/E,P=M/2,L=A/2,D=b/2,N=T+1,k=E+1;let B=0,U=0;const R=new Q;for(let z=0;z<k;z++){const H=z*w-L;for(let X=0;X<N;X++){const Y=X*x-P;R[_]=Y*S,R[d]=H*v,R[m]=D,c.push(R.x,R.y,R.z),R[_]=0,R[d]=0,R[m]=b>0?1:-1,f.push(R.x,R.y,R.z),h.push(X/T),h.push(1-z/E),B+=1}}for(let z=0;z<E;z++)for(let H=0;H<T;H++){const X=u+H+N*z,Y=u+H+N*(z+1),G=u+(H+1)+N*(z+1),K=u+(H+1)+N*z;l.push(X,Y,K),l.push(Y,G,K),U+=6}a.addGroup(p,U,y),p+=U,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=nr(n[e]);for(const s in i)t[s]=i[s]}return t}function dp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const pp={clone:nr,merge:Ze};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ga{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $h extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new Q,Vf=new ae,Wf=new ae;class Mn extends $h{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fc*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Wf),e.subVectors(Wf,Vf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class _p extends mn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const l=new Mn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ps,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(h,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Yh extends tn{constructor(t,e,i,s,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vp extends Bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new eo(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new An(s,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=ze),new _p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ka=new Q,yp=new Q,xp=new Wt;class Qi{constructor(t=new Q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ka.subVectors(i,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xp.getNormalMatrix(t),s=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Fc,wo=new Q;class Zh{constructor(t=new Qi,e=new Qi,i=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],f=s[5],h=s[6],u=s[7],p=s[8],g=s[9],_=s[10],d=s[11],m=s[12],S=s[13],v=s[14],M=s[15];if(i[0].setComponents(l-r,u-c,d-p,M-m).normalize(),i[1].setComponents(l+r,u+c,d+p,M+m).normalize(),i[2].setComponents(l+o,u+f,d+g,M+S).normalize(),i[3].setComponents(l-o,u-f,d-g,M-S).normalize(),i[4].setComponents(l-a,u-h,d-_,M-v).normalize(),e===gi)i[5].setComponents(l+a,u+h,d+_,M+v).normalize();else if(e===ia)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sp(n){const t=new WeakMap;function e(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class _a extends bi{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,p=[],g=[],_=[],d=[];for(let m=0;m<f;m++){const S=m*u-o;for(let v=0;v<c;v++){const M=v*h-r;g.push(M,-S,0),_.push(0,0,1),d.push(v/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const v=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),b=S+1+c*m;p.push(v,M,b),p.push(M,A,b)}this.setIndex(p),this.setAttribute("position",new ls(g,3)),this.setAttribute("normal",new ls(_,3)),this.setAttribute("uv",new ls(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bp=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,Sm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Og=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,qg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Mp,alphahash_pars_fragment:bp,alphamap_fragment:Tp,alphamap_pars_fragment:Ep,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:kp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Fp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Bp,color_fragment:Hp,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:qp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:fm,lights_lambert_fragment:um,lights_lambert_pars_fragment:hm,lights_pars_begin:dm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:vm,lights_physical_fragment:ym,lights_physical_pars_fragment:xm,lights_fragment_begin:Sm,lights_fragment_maps:Mm,lights_fragment_end:bm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Um,morphcolor_vertex:Nm,morphnormal_vertex:km,morphtarget_pars_vertex:Om,morphtarget_vertex:Fm,normal_fragment_begin:zm,normal_fragment_maps:Bm,normal_pars_fragment:Hm,normal_pars_vertex:Gm,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Ym,opaque_fragment:Zm,packing:jm,premultiplied_alpha_fragment:Km,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:fg,specularmap_fragment:ug,specularmap_pars_fragment:hg,tonemapping_fragment:dg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:yg,worldpos_vertex:xg,background_vert:Sg,background_frag:Mg,backgroundCube_vert:bg,backgroundCube_frag:Tg,cube_vert:Eg,cube_frag:wg,depth_vert:Ag,depth_frag:Rg,distanceRGBA_vert:Cg,distanceRGBA_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ig,linedashed_frag:Ug,meshbasic_vert:Ng,meshbasic_frag:kg,meshlambert_vert:Og,meshlambert_frag:Fg,meshmatcap_vert:zg,meshmatcap_frag:Bg,meshnormal_vert:Hg,meshnormal_frag:Gg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:qg,meshphysical_frag:Xg,meshtoon_vert:$g,meshtoon_frag:Yg,points_vert:Zg,points_frag:jg,shadow_vert:Kg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:t1},pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Jn={basic:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new re(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ze([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ze([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new re(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ze([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ze([pt.points,pt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ze([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ze([pt.common,pt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ze([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ze([pt.sprite,pt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ze([pt.common,pt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ze([pt.lights,pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Jn.physical={uniforms:Ze([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ao={r:0,b:0,g:0},$i=new Mi,e1=new Te;function n1(n,t,e,i,s,r,o){const a=new re(0);let l=r===!0?0:1,c,f,h=null,u=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const M=g(S);M===null?m(a,l):M&&M.isColor&&(m(M,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(S,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===pa)?(f===void 0&&(f=new An(new eo(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:nr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),$i.copy(v.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(e1.makeRotationFromEuler($i)),f.material.toneMapped=ee.getTransfer(M.colorSpace)!==de,(h!==M||u!==M.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,h=M,u=M.version,p=n.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new An(new _a(2,2),new ti({name:"BackgroundMaterial",uniforms:nr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(Ao,Xh(n)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:d}}function i1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(x,w,P,L,D){let N=!1;const k=h(L,P,w);r!==k&&(r=k,c(r.object)),N=p(x,L,P,D),N&&g(x,L,P,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(x,w,P,L),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function f(x){return n.deleteVertexArray(x)}function h(x,w,P){const L=P.wireframe===!0;let D=i[x.id];D===void 0&&(D={},i[x.id]=D);let N=D[w.id];N===void 0&&(N={},D[w.id]=N);let k=N[L];return k===void 0&&(k=u(l()),N[L]=k),k}function u(x){const w=[],P=[],L=[];for(let D=0;D<e;D++)w[D]=0,P[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:L,object:x,attributes:{},index:null}}function p(x,w,P,L){const D=r.attributes,N=w.attributes;let k=0;const B=P.getAttributes();for(const U in B)if(B[U].location>=0){const z=D[U];let H=N[U];if(H===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(H=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(H=x.instanceColor)),z===void 0||z.attribute!==H||H&&z.data!==H.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function g(x,w,P,L){const D={},N=w.attributes;let k=0;const B=P.getAttributes();for(const U in B)if(B[U].location>=0){let z=N[U];z===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(z=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(z=x.instanceColor));const H={};H.attribute=z,z&&z.data&&(H.data=z.data),D[U]=H,k++}r.attributes=D,r.attributesNum=k,r.index=L}function _(){const x=r.newAttributes;for(let w=0,P=x.length;w<P;w++)x[w]=0}function d(x){m(x,0)}function m(x,w){const P=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;P[x]=1,L[x]===0&&(n.enableVertexAttribArray(x),L[x]=1),D[x]!==w&&(n.vertexAttribDivisor(x,w),D[x]=w)}function S(){const x=r.newAttributes,w=r.enabledAttributes;for(let P=0,L=w.length;P<L;P++)w[P]!==x[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function v(x,w,P,L,D,N,k){k===!0?n.vertexAttribIPointer(x,w,P,D,N):n.vertexAttribPointer(x,w,P,L,D,N)}function M(x,w,P,L){_();const D=L.attributes,N=P.getAttributes(),k=w.defaultAttributeValues;for(const B in N){const U=N[B];if(U.location>=0){let R=D[B];if(R===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(R=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(R=x.instanceColor)),R!==void 0){const z=R.normalized,H=R.itemSize,X=t.get(R);if(X===void 0)continue;const Y=X.buffer,G=X.type,K=X.bytesPerElement,at=G===n.INT||G===n.UNSIGNED_INT||R.gpuType===Dc;if(R.isInterleavedBufferAttribute){const st=R.data,xt=st.stride,wt=R.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<U.locationSize;Ft++)m(U.location+Ft,st.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<U.locationSize;Ft++)d(U.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let Ft=0;Ft<U.locationSize;Ft++)v(U.location+Ft,H/U.locationSize,G,z,xt*K,(wt+H/U.locationSize*Ft)*K,at)}else{if(R.isInstancedBufferAttribute){for(let st=0;st<U.locationSize;st++)m(U.location+st,R.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let st=0;st<U.locationSize;st++)d(U.location+st);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let st=0;st<U.locationSize;st++)v(U.location+st,H/U.locationSize,G,z,H*K,H/U.locationSize*st*K,at)}}else if(k!==void 0){const z=k[B];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(U.location,z);break;case 3:n.vertexAttrib3fv(U.location,z);break;case 4:n.vertexAttrib4fv(U.location,z);break;default:n.vertexAttrib1fv(U.location,z)}}}}S()}function A(){E();for(const x in i){const w=i[x];for(const P in w){const L=w[P];for(const D in L)f(L[D].object),delete L[D];delete w[P]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const w=i[x.id];for(const P in w){const L=w[P];for(const D in L)f(L[D].object),delete L[D];delete w[P]}delete i[x.id]}function T(x){for(const w in i){const P=i[w];if(P[x.id]===void 0)continue;const L=P[x.id];for(const D in L)f(L[D].object),delete L[D];delete P[x.id]}}function E(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:d,disableUnusedAttributes:S}}function s1(n,t,e){let i;function s(c){i=c}function r(c,f){n.drawArrays(i,c,f),e.update(f,i,1)}function o(c,f,h){h!==0&&(n.drawArraysInstanced(i,c,f,h),e.update(f,i,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let g=0;g<h;g++)p+=f[g];e.update(p,i,1)}function l(c,f,h,u){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_]*u[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Hn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Si&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==mi&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:b}}function o1(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Qi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,m=n.get(h);if(!s||g===null||g.length===0||r&&!d)r?f(null):c();else{const S=r?0:i,v=S*4;let M=m.clippingState||null;l.value=M,M=f(g,u,v,p);for(let A=0;A!==v;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(h,u,p,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const m=p+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,M=p;v!==_;++v,M+=4)o.copy(h[v]).applyMatrix4(S,a),o.normal.toArray(d,M),d[M+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function a1(n){let t=new WeakMap;function e(o,a){return a===Nl?o.mapping=Js:a===kl&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===kl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Kh extends $h{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,qf=[.125,.215,.35,.446,.526,.582],ns=20,Ja=new Kh,Xf=new re;let Qa=null,tl=0,el=0,nl=!1;const ts=(1+Math.sqrt(5))/2,Ds=1/ts,$f=[new Q(-ts,Ds,0),new Q(ts,Ds,0),new Q(-Ds,0,ts),new Q(Ds,0,ts),new Q(0,ts,-Ds),new Q(0,ts,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Yf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Kr,format:Hn,colorSpace:gs,depthBuffer:!1},s=Zf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l1(r)),this._blurMaterial=c1(r,t,e)}return s}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,i,s){const a=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(Xf),f.toneMapping=zi,f.autoClear=!1;const p=new Vh({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new An(new eo,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(Xf),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Ro(s,S*v,m>2?v:0,v,v),f.setRenderTarget(s),_&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Js||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ja)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$f[(s-r-1)%$f.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new An(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),_=r/g,d=isFinite(r)?1+Math.floor(f*_):ns;d>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ns}`);const m=[];let S=0;for(let T=0;T<ns;++T){const E=T/_,y=Math.exp(-E*E/2);m.push(y),T===0?S+=y:T<d&&(S+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;const M=this._sizeLods[s],A=3*M*(s>v-Hs?s-v+Hs:0),b=4*(this._cubeSize-M);Ro(e,A,b,3*M,2*M),l.setRenderTarget(e),l.render(h,Ja)}}function l1(n){const t=[],e=[],i=[];let s=n;const r=n-Hs+1+qf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=qf[o-n+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,g=6,_=3,d=2,m=1,S=new Float32Array(_*g*p),v=new Float32Array(d*g*p),M=new Float32Array(m*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,E=b>2?0:-1,y=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];S.set(y,_*g*b),v.set(u,d*g*b);const x=[b,b,b,b,b,b];M.set(x,m*g*b)}const A=new bi;A.setAttribute("position",new $e(S,_)),A.setAttribute("uv",new $e(v,d)),A.setAttribute("faceIndex",new $e(M,m)),t.push(A),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zf(n,t,e){const i=new Bi(n,t,e);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function c1(n,t,e){const i=new Float32Array(ns),s=new Q(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function jf(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Kf(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function f1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===kl,f=l===Js||l===Qs;if(c||f){let h=t.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Yf(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new Yf(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function u1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h1(n,t,e,i){const s={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)t.remove(_[d])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)t.update(_[d],n.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let v=0,M=S.length;v<M;v+=3){const A=S[v+0],b=S[v+1],T=S[v+2];u.push(A,b,b,T,T,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const A=v+0,b=v+1,T=v+2;u.push(A,b,b,T,T,A)}}else return;const d=new(Fh(u)?qh:Wh)(u,1);d.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,d)}function f(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function d1(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),e.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),e.update(p,i,g))}function f(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,i,1)}function h(u,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*_[S];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function p1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function m1(n,t,e){const i=new WeakMap,s=new Pe;function r(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let x=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),d===!0&&(M=3);let A=a.attributes.position.count*M,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*b*4*h),E=new Bh(T,A,b,h);E.type=mi,E.needsUpdate=!0;const y=M*4;for(let w=0;w<h;w++){const P=m[w],L=S[w],D=v[w],N=A*b*4*w;for(let k=0;k<P.count;k++){const B=k*y;g===!0&&(s.fromBufferAttribute(P,k),T[N+B+0]=s.x,T[N+B+1]=s.y,T[N+B+2]=s.z,T[N+B+3]=0),_===!0&&(s.fromBufferAttribute(L,k),T[N+B+4]=s.x,T[N+B+5]=s.y,T[N+B+6]=s.z,T[N+B+7]=0),d===!0&&(s.fromBufferAttribute(D,k),T[N+B+8]=s.x,T[N+B+9]=s.y,T[N+B+10]=s.z,T[N+B+11]=D.itemSize===4?s.w:1)}}u={count:h,texture:E,size:new ae(A,b)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<c.length;d++)g+=c[d];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function g1(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Jh extends tn{constructor(t,e,i,s,r,o,a,l,c,f=qs){if(f!==qs&&f!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===qs&&(i=hs),i===void 0&&f===er&&(i=tr),super(null,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qh=new tn,Jf=new Jh(1,1),td=new Bh,ed=new np,nd=new Yh,Qf=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function va(n,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function v1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function y1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function x1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function S1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,i))return;iu.set(i),n.uniformMatrix2fv(this.addr,!1,iu),Oe(e,i)}}function M1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,i))return;nu.set(i),n.uniformMatrix3fv(this.addr,!1,nu),Oe(e,i)}}function b1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,i))return;eu.set(i),n.uniformMatrix4fv(this.addr,!1,eu),Oe(e,i)}}function T1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function E1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function w1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function A1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function R1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function C1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function P1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function L1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function D1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jf.compareFunction=Oh,r=Jf):r=Qh,e.setTexture2D(t||r,s)}function I1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ed,s)}function U1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nd,s)}function N1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||td,s)}function k1(n){switch(n){case 5126:return _1;case 35664:return v1;case 35665:return y1;case 35666:return x1;case 35674:return S1;case 35675:return M1;case 35676:return b1;case 5124:case 35670:return T1;case 35667:case 35671:return E1;case 35668:case 35672:return w1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return P1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return N1}}function O1(n,t){n.uniform1fv(this.addr,t)}function F1(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function z1(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function B1(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function H1(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G1(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function V1(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function W1(n,t){n.uniform1iv(this.addr,t)}function q1(n,t){n.uniform2iv(this.addr,t)}function X1(n,t){n.uniform3iv(this.addr,t)}function $1(n,t){n.uniform4iv(this.addr,t)}function Y1(n,t){n.uniform1uiv(this.addr,t)}function Z1(n,t){n.uniform2uiv(this.addr,t)}function j1(n,t){n.uniform3uiv(this.addr,t)}function K1(n,t){n.uniform4uiv(this.addr,t)}function J1(n,t,e){const i=this.cache,s=t.length,r=va(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qh,r[o])}function Q1(n,t,e){const i=this.cache,s=t.length,r=va(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ed,r[o])}function t_(n,t,e){const i=this.cache,s=t.length,r=va(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nd,r[o])}function e_(n,t,e){const i=this.cache,s=t.length,r=va(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||td,r[o])}function n_(n){switch(n){case 5126:return O1;case 35664:return F1;case 35665:return z1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return X1;case 35669:case 35673:return $1;case 5125:return Y1;case 36294:return Z1;case 36295:return j1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}class i_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=k1(e.type)}}class s_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=n_(e.type)}}class r_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function su(n,t){n.seq.push(t),n.map[t.id]=t}function o_(n,t,e){const i=n.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),o=il.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){su(e,c===void 0?new i_(a,n,t):new s_(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new r_(a),su(e,h)),e=h}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);o_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ru(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const a_=37297;let l_=0;function c_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ou=new Wt;function f_(n){ee._getMatrix(ou,ee.workingColorSpace,n);const t=`mat3( ${ou.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case ma:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function au(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+c_(n.getShaderSource(t),o)}else return s}function u_(n,t){const e=f_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h_(n,t){let e;switch(t){case R0:e="Linear";break;case C0:e="Reinhard";break;case P0:e="Cineon";break;case L0:e="ACESFilmic";break;case I0:e="AgX";break;case U0:e="Neutral";break;case D0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new Q;function d_(){ee.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function m_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function g_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Er(n){return n!==""}function lu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(__,y_)}const v_=new Map;function y_(n,t){let e=jt[t];if(e===void 0){const i=v_.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return uc(e)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(n){return n.replace(x_,S_)}function S_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function M_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===a0?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function b_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function E_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case w0:t="ENVMAP_BLENDING_MIX";break;case A0:t="ENVMAP_BLENDING_ADD";break}return t}function w_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function A_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=M_(e),c=b_(e),f=T_(e),h=E_(e),u=w_(e),p=p_(e),g=m_(r),_=s.createProgram();let d,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`)):(d=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),m=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?jt.tonemapping_pars_fragment:"",e.toneMapping!==zi?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),d_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=uc(o),o=lu(o,e),o=cu(o,e),a=uc(a),a=lu(a,e),a=cu(a,e),o=fu(o),a=fu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=S+d+o,M=S+m+a,A=ru(s,s.VERTEX_SHADER,v),b=ru(s,s.FRAGMENT_SHADER,M);s.attachShader(_,A),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(w){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(A).trim(),D=s.getShaderInfoLog(b).trim();let N=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,b);else{const B=au(s,A,"vertex"),U=au(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+B+`
`+U)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||D==="")&&(k=!1);k&&(w.diagnostics={runnable:N,programLog:P,vertexShader:{log:L,prefix:d},fragmentShader:{log:D,prefix:m}})}s.deleteShader(A),s.deleteShader(b),E=new ta(s,_),y=g_(s,_)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,a_)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new P_(t),e.set(t,i)),i}}class P_{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}}function L_(n,t,e,i,s,r,o){const a=new zc,l=new C_,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,x,w,P,L){const D=P.fog,N=L.geometry,k=y.isMeshStandardMaterial?P.environment:null,B=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),U=B&&B.mapping===pa?B.image.height:null,R=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,H=z!==void 0?z.length:0;let X=0;N.morphAttributes.position!==void 0&&(X=1),N.morphAttributes.normal!==void 0&&(X=2),N.morphAttributes.color!==void 0&&(X=3);let Y,G,K,at;if(R){const fe=Jn[R];Y=fe.vertexShader,G=fe.fragmentShader}else Y=y.vertexShader,G=y.fragmentShader,l.update(y),K=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);const st=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,Ft=L.isBatchedMesh===!0,Yt=!!y.map,kt=!!y.matcap,Z=!!B,O=!!y.aoMap,ut=!!y.lightMap,ht=!!y.bumpMap,At=!!y.normalMap,dt=!!y.displacementMap,qt=!!y.emissiveMap,Rt=!!y.metalnessMap,F=!!y.roughnessMap,C=y.anisotropy>0,$=y.clearcoat>0,rt=y.dispersion>0,lt=y.iridescence>0,it=y.sheen>0,Dt=y.transmission>0,_t=C&&!!y.anisotropyMap,bt=$&&!!y.clearcoatMap,Qt=$&&!!y.clearcoatNormalMap,ct=$&&!!y.clearcoatRoughnessMap,Tt=lt&&!!y.iridescenceMap,zt=lt&&!!y.iridescenceThicknessMap,Ht=it&&!!y.sheenColorMap,Et=it&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Zt=!!y.specularColorMap,pe=!!y.specularIntensityMap,V=Dt&&!!y.transmissionMap,gt=Dt&&!!y.thicknessMap,tt=!!y.gradientMap,ot=!!y.alphaMap,St=y.alphaTest>0,vt=!!y.alphaHash,Xt=!!y.extensions;let Ee=zi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ee=n.toneMapping);const We={shaderID:R,shaderType:y.type,shaderName:y.name,vertexShader:Y,fragmentShader:G,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:gs,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:kt,envMap:Z,envMapMode:Z&&B.mapping,envMapCubeUVHeight:U,aoMap:O,lightMap:ut,bumpMap:ht,normalMap:At,displacementMap:u&&dt,emissiveMap:qt,normalMapObjectSpace:At&&y.normalMapType===z0,normalMapTangentSpace:At&&y.normalMapType===F0,metalnessMap:Rt,roughnessMap:F,anisotropy:C,anisotropyMap:_t,clearcoat:$,clearcoatMap:bt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:lt,iridescenceMap:Tt,iridescenceThicknessMap:zt,sheen:it,sheenColorMap:Ht,sheenRoughnessMap:Et,specularMap:Jt,specularColorMap:Zt,specularIntensityMap:pe,transmission:Dt,transmissionMap:V,thicknessMap:gt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:vt,combine:y.combine,mapUv:Yt&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:ut&&_(y.lightMap.channel),bumpMapUv:ht&&_(y.bumpMap.channel),normalMapUv:At&&_(y.normalMap.channel),displacementMapUv:dt&&_(y.displacementMap.channel),emissiveMapUv:qt&&_(y.emissiveMap.channel),metalnessMapUv:Rt&&_(y.metalnessMap.channel),roughnessMapUv:F&&_(y.roughnessMap.channel),anisotropyMapUv:_t&&_(y.anisotropyMap.channel),clearcoatMapUv:bt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(y.sheenRoughnessMap.channel),specularMapUv:Jt&&_(y.specularMap.channel),specularColorMapUv:Zt&&_(y.specularColorMap.channel),specularIntensityMapUv:pe&&_(y.specularIntensityMap.channel),transmissionMapUv:V&&_(y.transmissionMap.channel),thicknessMapUv:gt&&_(y.thicknessMap.channel),alphaMapUv:ot&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(At||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Yt||ot),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:X,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:qt&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)x.push(w),x.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(S(x,y),v(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let w;if(x){const P=Jn[x];w=pp.clone(P.uniforms)}else w=y.uniforms;return w}function A(y,x){let w;for(let P=0,L=f.length;P<L;P++){const D=f[P];if(D.cacheKey===x){w=D,++w.usedTimes;break}}return w===void 0&&(w=new A_(n,x,y,r),f.push(w)),w}function b(y){if(--y.usedTimes===0){const x=f.indexOf(y);f[x]=f[f.length-1],f.pop(),y.destroy()}}function T(y){l.remove(y)}function E(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:f,dispose:E}}function D_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function I_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function du(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,u,p,g,_,d){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},n[t]=m):(m.id=h.id,m.object=h,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=d),t++,m}function a(h,u,p,g,_,d){const m=o(h,u,p,g,_,d);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(h,u,p,g,_,d){const m=o(h,u,p,g,_,d);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,u){e.length>1&&e.sort(h||I_),i.length>1&&i.sort(u||hu),s.length>1&&s.sort(u||hu)}function f(){for(let h=t,u=n.length;h<u;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function U_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new du,n.set(i,[o])):s>=r.length?(o=new du,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function N_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Q,color:new re};break;case"SpotLight":e={position:new Q,direction:new Q,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Q,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Q,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[t.id]=e,e}}}function k_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let O_=0;function F_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function z_(n){const t=new N_,e=k_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Te,o=new Te;function a(c){let f=0,h=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,S=0,v=0,M=0,A=0,b=0,T=0;c.sort(F_);for(let y=0,x=c.length;y<x;y++){const w=c[y],P=w.color,L=w.intensity,D=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=P.r*L,h+=P.g*L,u+=P.b*L;else if(w.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(w.sh.coefficients[k],L);T++}else if(w.isDirectionalLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const B=w.shadow,U=e.get(w);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=w.shadow.matrix,S++}i.directional[p]=k,p++}else if(w.isSpotLight){const k=t.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(P).multiplyScalar(L),k.distance=D,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,i.spot[_]=k;const B=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,B.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[_]=B.matrix,w.castShadow){const U=e.get(w);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=N,M++}_++}else if(w.isRectAreaLight){const k=t.get(w);k.color.copy(P).multiplyScalar(L),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),i.rectArea[d]=k,d++}else if(w.isPointLight){const k=t.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const B=w.shadow,U=e.get(w);U.shadowIntensity=B.intensity,U.shadowBias=B.bias,U.shadowNormalBias=B.normalBias,U.shadowRadius=B.radius,U.shadowMapSize=B.mapSize,U.shadowCameraNear=B.camera.near,U.shadowCameraFar=B.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=w.shadow.matrix,v++}i.point[g]=k,g++}else if(w.isHemisphereLight){const k=t.get(w);k.skyColor.copy(w.color).multiplyScalar(L),k.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[m]=k,m++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const E=i.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==d||E.hemiLength!==m||E.numDirectionalShadows!==S||E.numPointShadows!==v||E.numSpotShadows!==M||E.numSpotMaps!==A||E.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,E.directionalLength=p,E.pointLength=g,E.spotLength=_,E.rectAreaLength=d,E.hemiLength=m,E.numDirectionalShadows=S,E.numPointShadows=v,E.numSpotShadows=M,E.numSpotMaps=A,E.numLightProbes=T,i.version=O_++)}function l(c,f){let h=0,u=0,p=0,g=0,_=0;const d=f.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const v=c[m];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),p++}else if(v.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),u++}else if(v.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),_++}}}return{setup:a,setupView:l,state:i}}function pu(n){const t=new z_(n),e=[],i=[];function s(f){c.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function o(f){i.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function B_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pu(n),t.set(s,[a])):r>=o.length?(a=new pu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class H_ extends ga{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G_ extends ga{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`;function q_(n,t,e){let i=new Zh;const s=new ae,r=new ae,o=new Pe,a=new H_({depthPacking:O0}),l=new G_,c={},f=e.maxTextureSize,h={[xi]:cn,[cn]:xi,[Tn]:Tn},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:V_,fragmentShader:W_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let m=this.type;this.render=function(b,T,E){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Fi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==fi&&this.type===fi,D=m===fi&&this.type!==fi;for(let N=0,k=b.length;N<k;N++){const B=b[N],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const R=U.getFrameExtents();if(s.multiply(R),r.copy(U.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/R.x),s.x=r.x*R.x,U.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/R.y),s.y=r.y*R.y,U.mapSize.y=r.y)),U.map===null||L===!0||D===!0){const H=this.type!==fi?{minFilter:Vn,magFilter:Vn}:{};U.map!==null&&U.map.dispose(),U.map=new Bi(s.x,s.y,H),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const z=U.getViewportCount();for(let H=0;H<z;H++){const X=U.getViewport(H);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),P.viewport(o),U.updateMatrices(B,H),i=U.getFrustum(),M(T,E,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===fi&&S(U,E),U.needsUpdate=!1}m=this.type,d.needsUpdate=!1,n.setRenderTarget(y,x,w)};function S(b,T){const E=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,E,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,E,p,_,null)}function v(b,T,E,y){let x=null;const w=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)x=w;else if(x=E.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=x.uuid,L=T.uuid;let D=c[P];D===void 0&&(D={},c[P]=D);let N=D[L];N===void 0&&(N=x.clone(),D[L]=N,T.addEventListener("dispose",A)),x=N}if(x.visible=T.visible,x.wireframe=T.wireframe,y===fi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=n.properties.get(x);P.light=E}return x}function M(b,T,E,y,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===fi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const L=t.update(b),D=b.material;if(Array.isArray(D)){const N=L.groups;for(let k=0,B=N.length;k<B;k++){const U=N[k],R=D[U.materialIndex];if(R&&R.visible){const z=v(b,R,y,x);b.onBeforeShadow(n,b,T,E,L,z,U),n.renderBufferDirect(E,null,L,z,b,U),b.onAfterShadow(n,b,T,E,L,z,U)}}}else if(D.visible){const N=v(b,D,y,x);b.onBeforeShadow(n,b,T,E,L,N,null),n.renderBufferDirect(E,null,L,N,b,null),b.onAfterShadow(n,b,T,E,L,N,null)}}const P=b.children;for(let L=0,D=P.length;L<D;L++)M(P[L],T,E,y,x)}function A(b){b.target.removeEventListener("dispose",A);for(const E in c){const y=c[E],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const X_={[Rl]:Cl,[Pl]:Il,[Ll]:Ul,[Ks]:Dl,[Cl]:Rl,[Il]:Pl,[Ul]:Ll,[Dl]:Ks};function $_(n,t){function e(){let V=!1;const gt=new Pe;let tt=null;const ot=new Pe(0,0,0,0);return{setMask:function(St){tt!==St&&!V&&(n.colorMask(St,St,St,St),tt=St)},setLocked:function(St){V=St},setClear:function(St,vt,Xt,Ee,We){We===!0&&(St*=Ee,vt*=Ee,Xt*=Ee),gt.set(St,vt,Xt,Ee),ot.equals(gt)===!1&&(n.clearColor(St,vt,Xt,Ee),ot.copy(gt))},reset:function(){V=!1,tt=null,ot.set(-1,0,0,0)}}}function i(){let V=!1,gt=!1,tt=null,ot=null,St=null;return{setReversed:function(vt){if(gt!==vt){const Xt=t.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=St;St=null,this.setClear(Ee)}gt=vt},getReversed:function(){return gt},setTest:function(vt){vt?st(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(vt){tt!==vt&&!V&&(n.depthMask(vt),tt=vt)},setFunc:function(vt){if(gt&&(vt=X_[vt]),ot!==vt){switch(vt){case Rl:n.depthFunc(n.NEVER);break;case Cl:n.depthFunc(n.ALWAYS);break;case Pl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=vt}},setLocked:function(vt){V=vt},setClear:function(vt){St!==vt&&(gt&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){V=!1,tt=null,ot=null,St=null,gt=!1}}}function s(){let V=!1,gt=null,tt=null,ot=null,St=null,vt=null,Xt=null,Ee=null,We=null;return{setTest:function(fe){V||(fe?st(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(fe){gt!==fe&&!V&&(n.stencilMask(fe),gt=fe)},setFunc:function(fe,Ln,ni){(tt!==fe||ot!==Ln||St!==ni)&&(n.stencilFunc(fe,Ln,ni),tt=fe,ot=Ln,St=ni)},setOp:function(fe,Ln,ni){(vt!==fe||Xt!==Ln||Ee!==ni)&&(n.stencilOp(fe,Ln,ni),vt=fe,Xt=Ln,Ee=ni)},setLocked:function(fe){V=fe},setClear:function(fe){We!==fe&&(n.clearStencil(fe),We=fe)},reset:function(){V=!1,gt=null,tt=null,ot=null,St=null,vt=null,Xt=null,Ee=null,We=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,p=[],g=null,_=!1,d=null,m=null,S=null,v=null,M=null,A=null,b=null,T=new re(0,0,0),E=0,y=!1,x=null,w=null,P=null,L=null,D=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=B>=1):U.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=B>=2);let R=null,z={};const H=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),Y=new Pe().fromArray(H),G=new Pe().fromArray(X);function K(V,gt,tt,ot){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(V,vt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<tt;Xt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const at={};at[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(Ks),ht(!1),At(vf),st(n.CULL_FACE),O(Fi);function st(V){f[V]!==!0&&(n.enable(V),f[V]=!0)}function xt(V){f[V]!==!1&&(n.disable(V),f[V]=!1)}function wt(V,gt){return h[V]!==gt?(n.bindFramebuffer(V,gt),h[V]=gt,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ft(V,gt){let tt=p,ot=!1;if(V){tt=u.get(gt),tt===void 0&&(tt=[],u.set(gt,tt));const St=V.textures;if(tt.length!==St.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Xt=St.length;vt<Xt;vt++)tt[vt]=n.COLOR_ATTACHMENT0+vt;tt.length=St.length,ot=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ot=!0);ot&&n.drawBuffers(tt)}function Yt(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const kt={[es]:n.FUNC_ADD,[c0]:n.FUNC_SUBTRACT,[f0]:n.FUNC_REVERSE_SUBTRACT};kt[u0]=n.MIN,kt[h0]=n.MAX;const Z={[d0]:n.ZERO,[p0]:n.ONE,[m0]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[S0]:n.SRC_ALPHA_SATURATE,[y0]:n.DST_COLOR,[_0]:n.DST_ALPHA,[g0]:n.ONE_MINUS_SRC_COLOR,[Al]:n.ONE_MINUS_SRC_ALPHA,[x0]:n.ONE_MINUS_DST_COLOR,[v0]:n.ONE_MINUS_DST_ALPHA,[M0]:n.CONSTANT_COLOR,[b0]:n.ONE_MINUS_CONSTANT_COLOR,[T0]:n.CONSTANT_ALPHA,[E0]:n.ONE_MINUS_CONSTANT_ALPHA};function O(V,gt,tt,ot,St,vt,Xt,Ee,We,fe){if(V===Fi){_===!0&&(xt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),V!==l0){if(V!==d||fe!==y){if((m!==es||M!==es)&&(n.blendEquation(n.FUNC_ADD),m=es,M=es),fe)switch(V){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yf:n.blendFunc(n.ONE,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,v=null,A=null,b=null,T.set(0,0,0),E=0,d=V,y=fe}return}St=St||gt,vt=vt||tt,Xt=Xt||ot,(gt!==m||St!==M)&&(n.blendEquationSeparate(kt[gt],kt[St]),m=gt,M=St),(tt!==S||ot!==v||vt!==A||Xt!==b)&&(n.blendFuncSeparate(Z[tt],Z[ot],Z[vt],Z[Xt]),S=tt,v=ot,A=vt,b=Xt),(Ee.equals(T)===!1||We!==E)&&(n.blendColor(Ee.r,Ee.g,Ee.b,We),T.copy(Ee),E=We),d=V,y=!1}function ut(V,gt){V.side===Tn?xt(n.CULL_FACE):st(n.CULL_FACE);let tt=V.side===cn;gt&&(tt=!tt),ht(tt),V.blending===Ws&&V.transparent===!1?O(Fi):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const ot=V.stencilWrite;a.setTest(ot),ot&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){x!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),x=V)}function At(V){V!==r0?(st(n.CULL_FACE),V!==w&&(V===vf?n.cullFace(n.BACK):V===o0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),w=V}function dt(V){V!==P&&(k&&n.lineWidth(V),P=V)}function qt(V,gt,tt){V?(st(n.POLYGON_OFFSET_FILL),(L!==gt||D!==tt)&&(n.polygonOffset(gt,tt),L=gt,D=tt)):xt(n.POLYGON_OFFSET_FILL)}function Rt(V){V?st(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function F(V){V===void 0&&(V=n.TEXTURE0+N-1),R!==V&&(n.activeTexture(V),R=V)}function C(V,gt,tt){tt===void 0&&(R===null?tt=n.TEXTURE0+N-1:tt=R);let ot=z[tt];ot===void 0&&(ot={type:void 0,texture:void 0},z[tt]=ot),(ot.type!==V||ot.texture!==gt)&&(R!==tt&&(n.activeTexture(tt),R=tt),n.bindTexture(V,gt||at[V]),ot.type=V,ot.texture=gt)}function $(){const V=z[R];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(V){Y.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Y.copy(V))}function Et(V){G.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),G.copy(V))}function Jt(V,gt){let tt=c.get(gt);tt===void 0&&(tt=new WeakMap,c.set(gt,tt));let ot=tt.get(V);ot===void 0&&(ot=n.getUniformBlockIndex(gt,V.name),tt.set(V,ot))}function Zt(V,gt){const ot=c.get(gt).get(V);l.get(gt)!==ot&&(n.uniformBlockBinding(gt,ot,V.__bindingPointIndex),l.set(gt,ot))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},R=null,z={},h={},u=new WeakMap,p=[],g=null,_=!1,d=null,m=null,S=null,v=null,M=null,A=null,b=null,T=new re(0,0,0),E=0,y=!1,x=null,w=null,P=null,L=null,D=null,Y.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:xt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:Yt,setBlending:O,setMaterial:ut,setFlipSided:ht,setCullFace:At,setLineWidth:dt,setPolygonOffset:qt,setScissorTest:Rt,activeTexture:F,bindTexture:C,unbindTexture:$,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:zt,updateUBOMapping:Jt,uniformBlockBinding:Zt,texStorage2D:Qt,texStorage3D:ct,texSubImage2D:it,texSubImage3D:Dt,compressedTexSubImage2D:_t,compressedTexSubImage3D:bt,scissor:Ht,viewport:Et,reset:pe}}function mu(n,t,e,i){const s=Y_(i);switch(e){case Ph:return n*t;case Dh:return n*t;case Ih:return n*t*2;case Uh:return n*t/s.components*s.byteLength;case Nc:return n*t/s.components*s.byteLength;case Nh:return n*t*2/s.components*s.byteLength;case kc:return n*t*2/s.components*s.byteLength;case Lh:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case Oc:return n*t*4/s.components*s.byteLength;case Zo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:case Hl:return Math.max(n,16)*Math.max(t,8)/4;case Fl:case Bl:return Math.max(n,8)*Math.max(t,8)/2;case Gl:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case kh:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Y_(n){switch(n){case Si:case Ah:return{byteLength:1,components:1};case zr:case Rh:case Kr:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case hs:case Dc:case mi:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z_(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,f=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,C){return p?new OffscreenCanvas(F,C):sa("canvas")}function _(F,C,$){let rt=1;const lt=Rt(F);if((lt.width>$||lt.height>$)&&(rt=$/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const it=Math.floor(rt*lt.width),Dt=Math.floor(rt*lt.height);h===void 0&&(h=g(it,Dt));const _t=C?g(it,Dt):h;return _t.width=it,_t.height=Dt,_t.getContext("2d").drawImage(F,0,0,it,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Dt+")."),_t}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),F;return F}function d(F){return F.generateMipmaps}function m(F){n.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(F,C,$,rt,lt=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let it=C;if(C===n.RED&&($===n.FLOAT&&(it=n.R32F),$===n.HALF_FLOAT&&(it=n.R16F),$===n.UNSIGNED_BYTE&&(it=n.R8)),C===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(it=n.R8UI),$===n.UNSIGNED_SHORT&&(it=n.R16UI),$===n.UNSIGNED_INT&&(it=n.R32UI),$===n.BYTE&&(it=n.R8I),$===n.SHORT&&(it=n.R16I),$===n.INT&&(it=n.R32I)),C===n.RG&&($===n.FLOAT&&(it=n.RG32F),$===n.HALF_FLOAT&&(it=n.RG16F),$===n.UNSIGNED_BYTE&&(it=n.RG8)),C===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(it=n.RG8UI),$===n.UNSIGNED_SHORT&&(it=n.RG16UI),$===n.UNSIGNED_INT&&(it=n.RG32UI),$===n.BYTE&&(it=n.RG8I),$===n.SHORT&&(it=n.RG16I),$===n.INT&&(it=n.RG32I)),C===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(it=n.RGB8UI),$===n.UNSIGNED_SHORT&&(it=n.RGB16UI),$===n.UNSIGNED_INT&&(it=n.RGB32UI),$===n.BYTE&&(it=n.RGB8I),$===n.SHORT&&(it=n.RGB16I),$===n.INT&&(it=n.RGB32I)),C===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),$===n.UNSIGNED_INT&&(it=n.RGBA32UI),$===n.BYTE&&(it=n.RGBA8I),$===n.SHORT&&(it=n.RGBA16I),$===n.INT&&(it=n.RGBA32I)),C===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),C===n.RGBA){const Dt=lt?ma:ee.getTransfer(rt);$===n.FLOAT&&(it=n.RGBA32F),$===n.HALF_FLOAT&&(it=n.RGBA16F),$===n.UNSIGNED_BYTE&&(it=Dt===de?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(F,C){let $;return F?C===null||C===hs||C===tr?$=n.DEPTH24_STENCIL8:C===mi?$=n.DEPTH32F_STENCIL8:C===zr&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===hs||C===tr?$=n.DEPTH_COMPONENT24:C===mi?$=n.DEPTH_COMPONENT32F:C===zr&&($=n.DEPTH_COMPONENT16),$}function A(F,C){return d(F)===!0||F.isFramebufferTexture&&F.minFilter!==Vn&&F.minFilter!==ze?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function b(F){const C=F.target;C.removeEventListener("dispose",b),E(C),C.isVideoTexture&&f.delete(C)}function T(F){const C=F.target;C.removeEventListener("dispose",T),x(C)}function E(F){const C=i.get(F);if(C.__webglInit===void 0)return;const $=F.source,rt=u.get($);if(rt){const lt=rt[C.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&y(F),Object.keys(rt).length===0&&u.delete($)}i.remove(F)}function y(F){const C=i.get(F);n.deleteTexture(C.__webglTexture);const $=F.source,rt=u.get($);delete rt[C.__cacheKey],o.memory.textures--}function x(F){const C=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(C.__webglFramebuffer[rt]))for(let lt=0;lt<C.__webglFramebuffer[rt].length;lt++)n.deleteFramebuffer(C.__webglFramebuffer[rt][lt]);else n.deleteFramebuffer(C.__webglFramebuffer[rt]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[rt])}else{if(Array.isArray(C.__webglFramebuffer))for(let rt=0;rt<C.__webglFramebuffer.length;rt++)n.deleteFramebuffer(C.__webglFramebuffer[rt]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let rt=0;rt<C.__webglColorRenderbuffer.length;rt++)C.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[rt]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=F.textures;for(let rt=0,lt=$.length;rt<lt;rt++){const it=i.get($[rt]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove($[rt])}i.remove(F)}let w=0;function P(){w=0}function L(){const F=w;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),w+=1,F}function D(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function N(F,C){const $=i.get(F);if(F.isVideoTexture&&dt(F),F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){const rt=F.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G($,F,C);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+C)}function k(F,C){const $=i.get(F);if(F.version>0&&$.__version!==F.version){G($,F,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+C)}function B(F,C){const $=i.get(F);if(F.version>0&&$.__version!==F.version){G($,F,C);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+C)}function U(F,C){const $=i.get(F);if(F.version>0&&$.__version!==F.version){K($,F,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+C)}const R={[Fr]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},z={[Vn]:n.NEAREST,[N0]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},H={[B0]:n.NEVER,[X0]:n.ALWAYS,[H0]:n.LESS,[Oh]:n.LEQUAL,[G0]:n.EQUAL,[q0]:n.GEQUAL,[V0]:n.GREATER,[W0]:n.NOTEQUAL};function X(F,C){if(C.type===mi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ze||C.magFilter===Ca||C.magFilter===lo||C.magFilter===ki||C.minFilter===ze||C.minFilter===Ca||C.minFilter===lo||C.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,R[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,R[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,R[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,z[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,H[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Vn||C.minFilter!==lo&&C.minFilter!==ki||C.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Y(F,C){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",b));const rt=C.source;let lt=u.get(rt);lt===void 0&&(lt={},u.set(rt,lt));const it=D(C);if(it!==F.__cacheKey){lt[it]===void 0&&(lt[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),lt[it].usedTimes++;const Dt=lt[F.__cacheKey];Dt!==void 0&&(lt[F.__cacheKey].usedTimes--,Dt.usedTimes===0&&y(C)),F.__cacheKey=it,F.__webglTexture=lt[it].texture}return $}function G(F,C,$){let rt=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(rt=n.TEXTURE_3D);const lt=Y(F,C),it=C.source;e.bindTexture(rt,F.__webglTexture,n.TEXTURE0+$);const Dt=i.get(it);if(it.version!==Dt.__version||lt===!0){e.activeTexture(n.TEXTURE0+$);const _t=ee.getPrimaries(ee.workingColorSpace),bt=C.colorSpace===pn?null:ee.getPrimaries(C.colorSpace),Qt=C.colorSpace===pn||_t===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ct=_(C.image,!1,s.maxTextureSize);ct=qt(C,ct);const Tt=r.convert(C.format,C.colorSpace),zt=r.convert(C.type);let Ht=v(C.internalFormat,Tt,zt,C.colorSpace,C.isVideoTexture);X(rt,C);let Et;const Jt=C.mipmaps,Zt=C.isVideoTexture!==!0,pe=Dt.__version===void 0||lt===!0,V=it.dataReady,gt=A(C,ct);if(C.isDepthTexture)Ht=M(C.format===er,C.type),pe&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Ht,ct.width,ct.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Tt,zt,null));else if(C.isDataTexture)if(Jt.length>0){Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,Jt[0].width,Jt[0].height);for(let tt=0,ot=Jt.length;tt<ot;tt++)Et=Jt[tt],Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Tt,zt,Et.data);C.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,ct.width,ct.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,zt,ct.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ct.width,ct.height,0,Tt,zt,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ht,Jt[0].width,Jt[0].height,ct.depth);for(let tt=0,ot=Jt.length;tt<ot;tt++)if(Et=Jt[tt],C.format!==Hn)if(Tt!==null)if(Zt){if(V)if(C.layerUpdates.size>0){const St=mu(Et.width,Et.height,C.format,C.type);for(const vt of C.layerUpdates){const Xt=Et.data.subarray(vt*St/Et.data.BYTES_PER_ELEMENT,(vt+1)*St/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,vt,Et.width,Et.height,1,Tt,Xt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ct.depth,Tt,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,Et.width,Et.height,ct.depth,Tt,zt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,Ht,Et.width,Et.height,ct.depth,0,Tt,zt,Et.data)}else{Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,gt,Ht,Jt[0].width,Jt[0].height);for(let tt=0,ot=Jt.length;tt<ot;tt++)Et=Jt[tt],C.format!==Hn?Tt!==null?Zt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Et.width,Et.height,Tt,zt,Et.data):e.texImage2D(n.TEXTURE_2D,tt,Ht,Et.width,Et.height,0,Tt,zt,Et.data)}else if(C.isDataArrayTexture)if(Zt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Ht,ct.width,ct.height,ct.depth),V)if(C.layerUpdates.size>0){const tt=mu(ct.width,ct.height,C.format,C.type);for(const ot of C.layerUpdates){const St=ct.data.subarray(ot*tt/ct.data.BYTES_PER_ELEMENT,(ot+1)*tt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,ct.width,ct.height,1,Tt,zt,St)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(C.isData3DTexture)Zt?(pe&&e.texStorage3D(n.TEXTURE_3D,gt,Ht,ct.width,ct.height,ct.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,zt,ct.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ct.width,ct.height,ct.depth,0,Tt,zt,ct.data);else if(C.isFramebufferTexture){if(pe)if(Zt)e.texStorage2D(n.TEXTURE_2D,gt,Ht,ct.width,ct.height);else{let tt=ct.width,ot=ct.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Ht,tt,ot,0,Tt,zt,null),tt>>=1,ot>>=1}}else if(Jt.length>0){if(Zt&&pe){const tt=Rt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Ht,tt.width,tt.height)}for(let tt=0,ot=Jt.length;tt<ot;tt++)Et=Jt[tt],Zt?V&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,Tt,zt,Et):e.texImage2D(n.TEXTURE_2D,tt,Ht,Tt,zt,Et);C.generateMipmaps=!1}else if(Zt){if(pe){const tt=Rt(ct);e.texStorage2D(n.TEXTURE_2D,gt,Ht,tt.width,tt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,zt,ct)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Tt,zt,ct);d(C)&&m(rt),Dt.__version=it.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function K(F,C,$){if(C.image.length!==6)return;const rt=Y(F,C),lt=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+$);const it=i.get(lt);if(lt.version!==it.__version||rt===!0){e.activeTexture(n.TEXTURE0+$);const Dt=ee.getPrimaries(ee.workingColorSpace),_t=C.colorSpace===pn?null:ee.getPrimaries(C.colorSpace),bt=C.colorSpace===pn||Dt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Qt=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let ot=0;ot<6;ot++)!Qt&&!ct?Tt[ot]=_(C.image[ot],!0,s.maxCubemapSize):Tt[ot]=ct?C.image[ot].image:C.image[ot],Tt[ot]=qt(C,Tt[ot]);const zt=Tt[0],Ht=r.convert(C.format,C.colorSpace),Et=r.convert(C.type),Jt=v(C.internalFormat,Ht,Et,C.colorSpace),Zt=C.isVideoTexture!==!0,pe=it.__version===void 0||rt===!0,V=lt.dataReady;let gt=A(C,zt);X(n.TEXTURE_CUBE_MAP,C);let tt;if(Qt){Zt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Jt,zt.width,zt.height);for(let ot=0;ot<6;ot++){tt=Tt[ot].mipmaps;for(let St=0;St<tt.length;St++){const vt=tt[St];C.format!==Hn?Ht!==null?Zt?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,vt.width,vt.height,Ht,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,Jt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,vt.width,vt.height,Ht,Et,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,Jt,vt.width,vt.height,0,Ht,Et,vt.data)}}}else{if(tt=C.mipmaps,Zt&&pe){tt.length>0&&gt++;const ot=Rt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ct){Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt[ot].width,Tt[ot].height,Ht,Et,Tt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Tt[ot].width,Tt[ot].height,0,Ht,Et,Tt[ot].data);for(let St=0;St<tt.length;St++){const Xt=tt[St].image[ot].image;Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Xt.width,Xt.height,Ht,Et,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,Jt,Xt.width,Xt.height,0,Ht,Et,Xt.data)}}else{Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ht,Et,Tt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Ht,Et,Tt[ot]);for(let St=0;St<tt.length;St++){const vt=tt[St];Zt?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Ht,Et,vt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,Jt,Ht,Et,vt.image[ot])}}}d(C)&&m(n.TEXTURE_CUBE_MAP),it.__version=lt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function at(F,C,$,rt,lt,it){const Dt=r.convert($.format,$.colorSpace),_t=r.convert($.type),bt=v($.internalFormat,Dt,_t,$.colorSpace),Qt=i.get(C),ct=i.get($);if(ct.__renderTarget=C,!Qt.__hasExternalTextures){const Tt=Math.max(1,C.width>>it),zt=Math.max(1,C.height>>it);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,bt,Tt,zt,C.depth,0,Dt,_t,null):e.texImage2D(lt,it,bt,Tt,zt,0,Dt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),At(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,lt,ct.__webglTexture,0,ht(C)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,lt,ct.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(F,C,$){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){const rt=C.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,it=M(C.stencilBuffer,lt),Dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=ht(C);At(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,it,C.width,C.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,it,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,it,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Dt,n.RENDERBUFFER,F)}else{const rt=C.textures;for(let lt=0;lt<rt.length;lt++){const it=rt[lt],Dt=r.convert(it.format,it.colorSpace),_t=r.convert(it.type),bt=v(it.internalFormat,Dt,_t,it.colorSpace),Qt=ht(C);$&&At(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,bt,C.width,C.height):At(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,bt,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,bt,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=i.get(C.depthTexture);rt.__renderTarget=C,(!rt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),N(C.depthTexture,0);const lt=rt.__webglTexture,it=ht(C);if(C.depthTexture.format===qs)At(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(C.depthTexture.format===er)At(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function wt(F){const C=i.get(F),$=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const rt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),rt){const lt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),C.__depthDisposeCallback=lt}C.__boundDepthTexture=rt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");xt(C.__webglFramebuffer,F)}else if($){C.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[rt]),C.__webglDepthbuffer[rt]===void 0)C.__webglDepthbuffer[rt]=n.createRenderbuffer(),st(C.__webglDepthbuffer[rt],F,!1);else{const lt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=C.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),st(C.__webglDepthbuffer,F,!1);else{const rt=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(F,C,$){const rt=i.get(F);C!==void 0&&at(rt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&wt(F)}function Yt(F){const C=F.texture,$=i.get(F),rt=i.get(C);F.addEventListener("dispose",T);const lt=F.textures,it=F.isWebGLCubeRenderTarget===!0,Dt=lt.length>1;if(Dt||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=C.version,o.memory.textures++),it){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let bt=0;bt<C.mipmaps.length;bt++)$.__webglFramebuffer[_t][bt]=n.createFramebuffer()}else $.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<C.mipmaps.length;_t++)$.__webglFramebuffer[_t]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Dt)for(let _t=0,bt=lt.length;_t<bt;_t++){const Qt=i.get(lt[_t]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&At(F)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const bt=lt[_t];$.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const Qt=r.convert(bt.format,bt.colorSpace),ct=r.convert(bt.type),Tt=v(bt.internalFormat,Qt,ct,bt.colorSpace,F.isXRRenderTarget===!0),zt=ht(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Tt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,$.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),st($.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),X(n.TEXTURE_CUBE_MAP,C);for(let _t=0;_t<6;_t++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)at($.__webglFramebuffer[_t][bt],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,bt);else at($.__webglFramebuffer[_t],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(C)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let _t=0,bt=lt.length;_t<bt;_t++){const Qt=lt[_t],ct=i.get(Qt);e.bindTexture(n.TEXTURE_2D,ct.__webglTexture),X(n.TEXTURE_2D,Qt),at($.__webglFramebuffer,F,Qt,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),d(Qt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(_t=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),X(_t,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)at($.__webglFramebuffer[bt],F,C,n.COLOR_ATTACHMENT0,_t,bt);else at($.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,_t,0);d(C)&&m(_t),e.unbindTexture()}F.depthBuffer&&wt(F)}function kt(F){const C=F.textures;for(let $=0,rt=C.length;$<rt;$++){const lt=C[$];if(d(lt)){const it=S(F),Dt=i.get(lt).__webglTexture;e.bindTexture(it,Dt),m(it),e.unbindTexture()}}}const Z=[],O=[];function ut(F){if(F.samples>0){if(At(F)===!1){const C=F.textures,$=F.width,rt=F.height;let lt=n.COLOR_BUFFER_BIT;const it=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Dt=i.get(F),_t=C.length>1;if(_t)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Qt=i.get(C[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,$,rt,0,0,$,rt,lt,n.NEAREST),l===!0&&(Z.length=0,O.length=0,Z.push(n.COLOR_ATTACHMENT0+bt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Z.push(it),O.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Dt.__webglColorRenderbuffer[bt]);const Qt=i.get(C[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function ht(F){return Math.min(s.maxSamples,F.samples)}function At(F){const C=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function dt(F){const C=o.render.frame;f.get(F)!==C&&(f.set(F,C),F.update())}function qt(F,C){const $=F.colorSpace,rt=F.format,lt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||$!==gs&&$!==pn&&(ee.getTransfer($)===de?(rt!==Hn||lt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}function Rt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=U,this.rebindTextures=Ft,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=At}function j_(n,t){function e(i,s=pn){let r;const o=ee.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return n.BYTE;if(i===Rh)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===Dc)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Ph)return n.ALPHA;if(i===Lh)return n.RGB;if(i===Hn)return n.RGBA;if(i===Dh)return n.LUMINANCE;if(i===Ih)return n.LUMINANCE_ALPHA;if(i===qs)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Uh)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Nh)return n.RG;if(i===kc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===Zo||i===jo||i===Ko||i===Jo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===zl||i===Bl||i===Hl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Vl||i===Wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Vl)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ql||i===Xl||i===$l||i===Yl||i===Zl||i===jl||i===Kl||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===rc||i===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kh||i===ac||i===lc||i===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class K_ extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),m=this._getHandJoint(c,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new wr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:Q_,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends rr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,g=null;const _=new ev,d=e.getContextAttributes();let m=null,S=null;const v=[],M=[],A=new ae;let b=null;const T=new Mn;T.viewport=new Pe;const E=new Mn;E.viewport=new Pe;const y=[T,E],x=new K_;let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=v[G];return K===void 0&&(K=new sl,v[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=v[G];return K===void 0&&(K=new sl,v[G]=K),K.getGripSpace()},this.getHand=function(G){let K=v[G];return K===void 0&&(K=new sl,v[G]=K),K.getHandSpace()};function L(G){const K=M.indexOf(G.inputSource);if(K===-1)return;const at=v[K];at!==void 0&&(at.update(G.inputSource,G.frame,c||o),at.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let G=0;G<v.length;G++){const K=M[G];K!==null&&(M[G]=null,v[G].disconnect(K))}w=null,P=null,_.reset(),t.setRenderTarget(m),p=null,u=null,h=null,s=null,S=null,Y.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const K={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Bi(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let K=null,at=null,st=null;d.depth&&(st=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=d.stencil?er:qs,at=d.stencil?tr:hs);const xt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Bi(u.textureWidth,u.textureHeight,{format:Hn,type:Si,depthTexture:new Jh(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(G){for(let K=0;K<G.removed.length;K++){const at=G.removed[K],st=M.indexOf(at);st>=0&&(M[st]=null,v[st].disconnect(at))}for(let K=0;K<G.added.length;K++){const at=G.added[K];let st=M.indexOf(at);if(st===-1){for(let wt=0;wt<v.length;wt++)if(wt>=M.length){M.push(at),st=wt;break}else if(M[wt]===null){M[wt]=at,st=wt;break}if(st===-1)break}const xt=v[st];xt&&xt.connect(at)}}const k=new Q,B=new Q;function U(G,K,at){k.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(at.matrixWorld);const st=k.distanceTo(B),xt=K.projectionMatrix.elements,wt=at.projectionMatrix.elements,Ft=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),kt=(xt[9]+1)/xt[5],Z=(xt[9]-1)/xt[5],O=(xt[8]-1)/xt[0],ut=(wt[8]+1)/wt[0],ht=Ft*O,At=Ft*ut,dt=st/(-O+ut),qt=dt*-O;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qt),G.translateZ(dt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xt[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Rt=Ft+dt,F=Yt+dt,C=ht-qt,$=At+(st-qt),rt=kt*Yt/F*Rt,lt=Z*Yt/F*Rt;G.projectionMatrix.makePerspective(C,$,rt,lt,Rt,F),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function R(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let K=G.near,at=G.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(at=_.depthFar)),x.near=E.near=T.near=K,x.far=E.far=T.far=at,(w!==x.near||P!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,P=x.far),T.layers.mask=G.layers.mask|2,E.layers.mask=G.layers.mask|4,x.layers.mask=T.layers.mask|E.layers.mask;const st=G.parent,xt=x.cameras;R(x,st);for(let wt=0;wt<xt.length;wt++)R(xt[wt],st);xt.length===2?U(x,T,E):x.projectionMatrix.copy(T.projectionMatrix),z(G,x,st)};function z(G,K,at){at===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(at.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=fc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let H=null;function X(G,K){if(f=K.getViewerPose(c||o),g=K,f!==null){const at=f.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let st=!1;at.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let wt=0;wt<at.length;wt++){const Ft=at[wt];let Yt=null;if(p!==null)Yt=p.getViewport(Ft);else{const Z=h.getViewSubImage(u,Ft);Yt=Z.viewport,wt===0&&(t.setRenderTargetTextures(S,Z.colorTexture,u.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(S))}let kt=y[wt];kt===void 0&&(kt=new Mn,kt.layers.enable(wt),kt.viewport=new Pe,y[wt]=kt),kt.matrix.fromArray(Ft.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ft.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),wt===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(kt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const wt=h.getDepthInformation(at[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,s.renderState)}}for(let at=0;at<v.length;at++){const st=M[at],xt=v[at];st!==null&&xt!==void 0&&xt.update(st,K,c||o)}H&&H(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Y=new jh;Y.setAnimationLoop(X),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}const Yi=new Mi,iv=new Te;function sv(n,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function i(d,m){m.color.getRGB(d.fogColor.value,Xh(n)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,S,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),h(d,m)):m.isMeshPhongMaterial?(r(d,m),f(d,m)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,M)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),_(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,S,v):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===cn&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===cn&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const S=t.get(m),v=S.envMap,M=S.envMapRotation;v&&(d.envMap.value=v,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),d.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Yi)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,S,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*S,d.scale.value=v*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function f(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,S){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const S=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const M=v.program;i.uniformBlockBinding(S,M)}function c(S,v){let M=s[S.id];M===void 0&&(g(S),M=f(S),s[S.id]=M,S.addEventListener("dispose",d));const A=v.program;i.updateUBOMapping(S,A);const b=t.render.frame;r[S.id]!==b&&(u(S),r[S.id]=b)}function f(S){const v=h();S.__bindingPointIndex=v;const M=n.createBuffer(),A=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const v=s[S.id],M=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,T=M.length;b<T;b++){const E=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,x=E.length;y<x;y++){const w=E[y];if(p(w,b,y,A)===!0){const P=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let N=0;N<L.length;N++){const k=L[N],B=_(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,P+D,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,v,M,A){const b=S.value,T=v+"_"+M;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const E=A[T];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return A[T]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function g(S){const v=S.uniforms;let M=0;const A=16;for(let T=0,E=v.length;T<E;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,w=y.length;x<w;x++){const P=y[x],L=Array.isArray(P.value)?P.value:[P.value];for(let D=0,N=L.length;D<N;D++){const k=L[D],B=_(k),U=M%A,R=U%B.boundary,z=U+R;M+=R,z!==0&&A-z<B.storage&&(M+=A-z),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=B.storage}}}const b=M%A;return b>0&&(M+=A-b),S.__size=M,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ov{constructor(t={}){const{canvas:e=Y0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,m=null;const S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=zi,this.toneMappingExposure=1;const M=this;let A=!1,b=0,T=0,E=null,y=-1,x=null;const w=new Pe,P=new Pe;let L=null;const D=new re(0);let N=0,k=e.width,B=e.height,U=1,R=null,z=null;const H=new Pe(0,0,k,B),X=new Pe(0,0,k,B);let Y=!1;const G=new Zh;let K=!1,at=!1;const st=new Te,xt=new Te,wt=new Q,Ft=new Pe,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Z(){return E===null?U:1}let O=i;function ut(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lc}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),O===null){const W="webgl2";if(O=ut(W,I),O===null)throw ut(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ht,At,dt,qt,Rt,F,C,$,rt,lt,it,Dt,_t,bt,Qt,ct,Tt,zt,Ht,Et,Jt,Zt,pe,V;function gt(){ht=new u1(O),ht.init(),Zt=new j_(O,ht),At=new r1(O,ht,t,Zt),dt=new $_(O,ht),At.reverseDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),qt=new p1(O),Rt=new D_,F=new Z_(O,ht,dt,Rt,At,Zt,qt),C=new a1(M),$=new f1(M),rt=new Sp(O),pe=new i1(O,rt),lt=new h1(O,rt,qt,pe),it=new g1(O,lt,rt,qt),Ht=new m1(O,At,F),ct=new o1(Rt),Dt=new L_(M,C,$,ht,At,pe,ct),_t=new sv(M,Rt),bt=new U_,Qt=new B_(ht),zt=new n1(M,C,$,dt,it,p,l),Tt=new q_(M,it,At),V=new rv(O,qt,At,dt),Et=new s1(O,ht,qt),Jt=new d1(O,ht,qt),qt.programs=Dt.programs,M.capabilities=At,M.extensions=ht,M.properties=Rt,M.renderLists=bt,M.shadowMap=Tt,M.state=dt,M.info=qt}gt();const tt=new nv(M,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=ht.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ht.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(I){I!==void 0&&(U=I,this.setSize(k,B,!1))},this.getSize=function(I){return I.set(k,B)},this.setSize=function(I,W,j=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,B=W,e.width=Math.floor(I*U),e.height=Math.floor(W*U),j===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(k*U,B*U).floor()},this.setDrawingBufferSize=function(I,W,j){k=I,B=W,U=j,e.width=Math.floor(I*j),e.height=Math.floor(W*j),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(H)},this.setViewport=function(I,W,j,J){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,W,j,J),dt.viewport(w.copy(H).multiplyScalar(U).round())},this.getScissor=function(I){return I.copy(X)},this.setScissor=function(I,W,j,J){I.isVector4?X.set(I.x,I.y,I.z,I.w):X.set(I,W,j,J),dt.scissor(P.copy(X).multiplyScalar(U).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(I){dt.setScissorTest(Y=I)},this.setOpaqueSort=function(I){R=I},this.setTransparentSort=function(I){z=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(I=!0,W=!0,j=!0){let J=0;if(I){let q=!1;if(E!==null){const ft=E.texture.format;q=ft===Oc||ft===kc||ft===Nc}if(q){const ft=E.texture.type,yt=ft===Si||ft===hs||ft===zr||ft===tr||ft===Ic||ft===Uc,Ct=zt.getClearColor(),Pt=zt.getClearAlpha(),Gt=Ct.r,$t=Ct.g,Lt=Ct.b;yt?(g[0]=Gt,g[1]=$t,g[2]=Lt,g[3]=Pt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Gt,_[1]=$t,_[2]=Lt,_[3]=Pt,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}W&&(J|=O.DEPTH_BUFFER_BIT),j&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),bt.dispose(),Qt.dispose(),Rt.dispose(),C.dispose(),$.dispose(),it.dispose(),pe.dispose(),V.dispose(),Dt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ff),tt.removeEventListener("sessionend",uf),Gi.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=qt.autoReset,W=Tt.enabled,j=Tt.autoUpdate,J=Tt.needsUpdate,q=Tt.type;gt(),qt.autoReset=I,Tt.enabled=W,Tt.autoUpdate=j,Tt.needsUpdate=J,Tt.type=q}function vt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Xt(I){const W=I.target;W.removeEventListener("dispose",Xt),Ee(W)}function Ee(I){We(I),Rt.remove(I)}function We(I){const W=Rt.get(I).programs;W!==void 0&&(W.forEach(function(j){Dt.releaseProgram(j)}),I.isShaderMaterial&&Dt.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,j,J,q,ft){W===null&&(W=Yt);const yt=q.isMesh&&q.matrixWorld.determinant()<0,Ct=n0(I,W,j,J,q);dt.setMaterial(J,yt);let Pt=j.index,Gt=1;if(J.wireframe===!0){if(Pt=lt.getWireframeAttribute(j),Pt===void 0)return;Gt=2}const $t=j.drawRange,Lt=j.attributes.position;let ie=$t.start*Gt,me=($t.start+$t.count)*Gt;ft!==null&&(ie=Math.max(ie,ft.start*Gt),me=Math.min(me,(ft.start+ft.count)*Gt)),Pt!==null?(ie=Math.max(ie,0),me=Math.min(me,Pt.count)):Lt!=null&&(ie=Math.max(ie,0),me=Math.min(me,Lt.count));const _e=me-ie;if(_e<0||_e===1/0)return;pe.setup(q,J,Ct,j,Pt);let en,le=Et;if(Pt!==null&&(en=rt.get(Pt),le=Jt,le.setIndex(en)),q.isMesh)J.wireframe===!0?(dt.setLineWidth(J.wireframeLinewidth*Z()),le.setMode(O.LINES)):le.setMode(O.TRIANGLES);else if(q.isLine){let It=J.linewidth;It===void 0&&(It=1),dt.setLineWidth(It*Z()),q.isLineSegments?le.setMode(O.LINES):q.isLineLoop?le.setMode(O.LINE_LOOP):le.setMode(O.LINE_STRIP)}else q.isPoints?le.setMode(O.POINTS):q.isSprite&&le.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)le.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const It=q._multiDrawStarts,ii=q._multiDrawCounts,ce=q._multiDrawCount,Dn=Pt?rt.get(Pt).bytesPerElement:1,vs=Rt.get(J).currentProgram.getUniforms();for(let fn=0;fn<ce;fn++)vs.setValue(O,"_gl_DrawID",fn),le.render(It[fn]/Dn,ii[fn])}else if(q.isInstancedMesh)le.renderInstances(ie,_e,q.count);else if(j.isInstancedBufferGeometry){const It=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ii=Math.min(j.instanceCount,It);le.renderInstances(ie,_e,ii)}else le.render(ie,_e)};function fe(I,W,j){I.transparent===!0&&I.side===Tn&&I.forceSinglePass===!1?(I.side=cn,I.needsUpdate=!0,ao(I,W,j),I.side=xi,I.needsUpdate=!0,ao(I,W,j),I.side=Tn):ao(I,W,j)}this.compile=function(I,W,j=null){j===null&&(j=I),m=Qt.get(j),m.init(W),v.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),I!==j&&I.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const J=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ft=q.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const Ct=ft[yt];fe(Ct,j,q),J.add(Ct)}else fe(ft,j,q),J.add(ft)}),v.pop(),m=null,J},this.compileAsync=function(I,W,j=null){const J=this.compile(I,W,j);return new Promise(q=>{function ft(){if(J.forEach(function(yt){Rt.get(yt).currentProgram.isReady()&&J.delete(yt)}),J.size===0){q(I);return}setTimeout(ft,10)}ht.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ln=null;function ni(I){Ln&&Ln(I)}function ff(){Gi.stop()}function uf(){Gi.start()}const Gi=new jh;Gi.setAnimationLoop(ni),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(I){Ln=I,tt.setAnimationLoop(I),I===null?Gi.stop():Gi.start()},tt.addEventListener("sessionstart",ff),tt.addEventListener("sessionend",uf),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,W,E),m=Qt.get(I,v.length),m.init(W),v.push(m),xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(xt),at=this.localClippingEnabled,K=ct.init(this.clippingPlanes,at),d=bt.get(I,S.length),d.init(),S.push(d),tt.enabled===!0&&tt.isPresenting===!0){const ft=M.xr.getDepthSensingMesh();ft!==null&&Ra(ft,W,-1/0,M.sortObjects)}Ra(I,W,0,M.sortObjects),d.finish(),M.sortObjects===!0&&d.sort(R,z),kt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,kt&&zt.addToRenderList(d,I),this.info.render.frame++,K===!0&&ct.beginShadows();const j=m.state.shadowsArray;Tt.render(j,I,W),K===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=d.opaque,q=d.transmissive;if(m.setupLights(),W.isArrayCamera){const ft=W.cameras;if(q.length>0)for(let yt=0,Ct=ft.length;yt<Ct;yt++){const Pt=ft[yt];df(J,q,I,Pt)}kt&&zt.render(I);for(let yt=0,Ct=ft.length;yt<Ct;yt++){const Pt=ft[yt];hf(d,I,Pt,Pt.viewport)}}else q.length>0&&df(J,q,I,W),kt&&zt.render(I),hf(d,I,W);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(M,I,W),pe.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?(m=v[v.length-1],K===!0&&ct.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function Ra(I,W,j,J){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||G.intersectsSprite(I)){J&&Ft.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xt);const yt=it.update(I),Ct=I.material;Ct.visible&&d.push(I,yt,Ct,j,Ft.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||G.intersectsObject(I))){const yt=it.update(I),Ct=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ft.copy(I.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ft.copy(yt.boundingSphere.center)),Ft.applyMatrix4(I.matrixWorld).applyMatrix4(xt)),Array.isArray(Ct)){const Pt=yt.groups;for(let Gt=0,$t=Pt.length;Gt<$t;Gt++){const Lt=Pt[Gt],ie=Ct[Lt.materialIndex];ie&&ie.visible&&d.push(I,yt,ie,j,Ft.z,Lt)}}else Ct.visible&&d.push(I,yt,Ct,j,Ft.z,null)}}const ft=I.children;for(let yt=0,Ct=ft.length;yt<Ct;yt++)Ra(ft[yt],W,j,J)}function hf(I,W,j,J){const q=I.opaque,ft=I.transmissive,yt=I.transparent;m.setupLightsView(j),K===!0&&ct.setGlobalState(M.clippingPlanes,j),J&&dt.viewport(w.copy(J)),q.length>0&&oo(q,W,j),ft.length>0&&oo(ft,W,j),yt.length>0&&oo(yt,W,j),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function df(I,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Bi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Kr:Si,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ft=m.state.transmissionRenderTarget[J.id],yt=J.viewport||w;ft.setSize(yt.z,yt.w);const Ct=M.getRenderTarget();M.setRenderTarget(ft),M.getClearColor(D),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),kt&&zt.render(j);const Pt=M.toneMapping;M.toneMapping=zi;const Gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),K===!0&&ct.setGlobalState(M.clippingPlanes,J),oo(I,j,J),F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft),ht.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Lt=0,ie=W.length;Lt<ie;Lt++){const me=W[Lt],_e=me.object,en=me.geometry,le=me.material,It=me.group;if(le.side===Tn&&_e.layers.test(J.layers)){const ii=le.side;le.side=cn,le.needsUpdate=!0,pf(_e,j,J,en,le,It),le.side=ii,le.needsUpdate=!0,$t=!0}}$t===!0&&(F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft))}M.setRenderTarget(Ct),M.setClearColor(D,N),Gt!==void 0&&(J.viewport=Gt),M.toneMapping=Pt}function oo(I,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let q=0,ft=I.length;q<ft;q++){const yt=I[q],Ct=yt.object,Pt=yt.geometry,Gt=J===null?yt.material:J,$t=yt.group;Ct.layers.test(j.layers)&&pf(Ct,W,j,Pt,Gt,$t)}}function pf(I,W,j,J,q,ft){I.onBeforeRender(M,W,j,J,q,ft),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(M,W,j,J,I,ft),q.transparent===!0&&q.side===Tn&&q.forceSinglePass===!1?(q.side=cn,q.needsUpdate=!0,M.renderBufferDirect(j,W,J,q,I,ft),q.side=xi,q.needsUpdate=!0,M.renderBufferDirect(j,W,J,q,I,ft),q.side=Tn):M.renderBufferDirect(j,W,J,q,I,ft),I.onAfterRender(M,W,j,J,q,ft)}function ao(I,W,j){W.isScene!==!0&&(W=Yt);const J=Rt.get(I),q=m.state.lights,ft=m.state.shadowsArray,yt=q.state.version,Ct=Dt.getParameters(I,q.state,ft,W,j),Pt=Dt.getProgramCacheKey(Ct);let Gt=J.programs;J.environment=I.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(I.isMeshStandardMaterial?$:C).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,Gt===void 0&&(I.addEventListener("dispose",Xt),Gt=new Map,J.programs=Gt);let $t=Gt.get(Pt);if($t!==void 0){if(J.currentProgram===$t&&J.lightsStateVersion===yt)return gf(I,Ct),$t}else Ct.uniforms=Dt.getUniforms(I),I.onBeforeCompile(Ct,M),$t=Dt.acquireProgram(Ct,Pt),Gt.set(Pt,$t),J.uniforms=Ct.uniforms;const Lt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),gf(I,Ct),J.needsLights=s0(I),J.lightsStateVersion=yt,J.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.directionalShadowMap.value=q.state.directionalShadowMap,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotShadowMap.value=q.state.spotShadowMap,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMap.value=q.state.pointShadowMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=$t,J.uniformsList=null,$t}function mf(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=ta.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function gf(I,W){const j=Rt.get(I);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function n0(I,W,j,J,q){W.isScene!==!0&&(W=Yt),F.resetTextureUnits();const ft=W.fog,yt=J.isMeshStandardMaterial?W.environment:null,Ct=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gs,Pt=(J.isMeshStandardMaterial?$:C).get(J.envMap||yt),Gt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,$t=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Lt=!!j.morphAttributes.position,ie=!!j.morphAttributes.normal,me=!!j.morphAttributes.color;let _e=zi;J.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=M.toneMapping);const en=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=en!==void 0?en.length:0,It=Rt.get(J),ii=m.state.lights;if(K===!0&&(at===!0||I!==x)){const vn=I===x&&J.id===y;ct.setState(J,I,vn)}let ce=!1;J.version===It.__version?(It.needsLights&&It.lightsStateVersion!==ii.state.version||It.outputColorSpace!==Ct||q.isBatchedMesh&&It.batching===!1||!q.isBatchedMesh&&It.batching===!0||q.isBatchedMesh&&It.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&It.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||q.isInstancedMesh&&It.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&It.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&It.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&It.instancingMorph===!1&&q.morphTexture!==null||It.envMap!==Pt||J.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ct.numPlanes||It.numIntersection!==ct.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==$t||It.morphTargets!==Lt||It.morphNormals!==ie||It.morphColors!==me||It.toneMapping!==_e||It.morphTargetsCount!==le)&&(ce=!0):(ce=!0,It.__version=J.version);let Dn=It.currentProgram;ce===!0&&(Dn=ao(J,W,q));let vs=!1,fn=!1,cr=!1;const ve=Dn.getUniforms(),Wn=It.uniforms;if(dt.useProgram(Dn.program)&&(vs=!0,fn=!0,cr=!0),J.id!==y&&(y=J.id,fn=!0),vs||x!==I){dt.buffers.depth.getReversed()?(st.copy(I.projectionMatrix),j0(st),K0(st),ve.setValue(O,"projectionMatrix",st)):ve.setValue(O,"projectionMatrix",I.projectionMatrix),ve.setValue(O,"viewMatrix",I.matrixWorldInverse);const Ti=ve.map.cameraPosition;Ti!==void 0&&Ti.setValue(O,wt.setFromMatrixPosition(I.matrixWorld)),At.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ve.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),x!==I&&(x=I,fn=!0,cr=!0)}if(q.isSkinnedMesh){ve.setOptional(O,q,"bindMatrix"),ve.setOptional(O,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),ve.setValue(O,"boneTexture",vn.boneTexture,F))}q.isBatchedMesh&&(ve.setOptional(O,q,"batchingTexture"),ve.setValue(O,"batchingTexture",q._matricesTexture,F),ve.setOptional(O,q,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",q._indirectTexture,F),ve.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",q._colorsTexture,F));const fr=j.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Ht.update(q,j,Dn),(fn||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,ve.setValue(O,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Wn.envMap.value=Pt,Wn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Wn.envMapIntensity.value=W.environmentIntensity),fn&&(ve.setValue(O,"toneMappingExposure",M.toneMappingExposure),It.needsLights&&i0(Wn,cr),ft&&J.fog===!0&&_t.refreshFogUniforms(Wn,ft),_t.refreshMaterialUniforms(Wn,J,U,B,m.state.transmissionRenderTarget[I.id]),ta.upload(O,mf(It),Wn,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ta.upload(O,mf(It),Wn,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ve.setValue(O,"center",q.center),ve.setValue(O,"modelViewMatrix",q.modelViewMatrix),ve.setValue(O,"normalMatrix",q.normalMatrix),ve.setValue(O,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const vn=J.uniformsGroups;for(let Ti=0,Ei=vn.length;Ti<Ei;Ti++){const _f=vn[Ti];V.update(_f,Dn),V.bind(_f,Dn)}}return Dn}function i0(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function s0(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,W,j){Rt.get(I.texture).__webglTexture=W,Rt.get(I.depthTexture).__webglTexture=j;const J=Rt.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const j=Rt.get(I);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,j=0){E=I,b=W,T=j;let J=!0,q=null,ft=!1,yt=!1;if(I){const Pt=Rt.get(I);if(Pt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(Pt.__webglFramebuffer===void 0)F.setupRenderTarget(I);else if(Pt.__hasExternalTextures)F.rebindTextures(I,Rt.get(I.texture).__webglTexture,Rt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Lt=I.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&Rt.has(Lt)&&(I.width!==Lt.image.width||I.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(I)}}const Gt=I.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(yt=!0);const $t=Rt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray($t[W])?q=$t[W][j]:q=$t[W],ft=!0):I.samples>0&&F.useMultisampledRTT(I)===!1?q=Rt.get(I).__webglMultisampledFramebuffer:Array.isArray($t)?q=$t[j]:q=$t,w.copy(I.viewport),P.copy(I.scissor),L=I.scissorTest}else w.copy(H).multiplyScalar(U).floor(),P.copy(X).multiplyScalar(U).floor(),L=Y;if(dt.bindFramebuffer(O.FRAMEBUFFER,q)&&J&&dt.drawBuffers(I,q),dt.viewport(w),dt.scissor(P),dt.setScissorTest(L),ft){const Pt=Rt.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,j)}else if(yt){const Pt=Rt.get(I.texture),Gt=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,j||0,Gt)}y=-1},this.readRenderTargetPixels=function(I,W,j,J,q,ft,yt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Rt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){dt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Pt=I.texture,Gt=Pt.format,$t=Pt.type;if(!At.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-J&&j>=0&&j<=I.height-q&&O.readPixels(W,j,J,q,Zt.convert(Gt),Zt.convert($t),ft)}finally{const Pt=E!==null?Rt.get(E).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(I,W,j,J,q,ft,yt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Rt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){const Pt=I.texture,Gt=Pt.format,$t=Pt.type;if(!At.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-J&&j>=0&&j<=I.height-q){dt.bindFramebuffer(O.FRAMEBUFFER,Ct);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(W,j,J,q,Zt.convert(Gt),Zt.convert($t),0);const ie=E!==null?Rt.get(E).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,ie);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Z0(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.deleteBuffer(Lt),O.deleteSync(me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,j=0){I.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const J=Math.pow(2,-j),q=Math.floor(I.image.width*J),ft=Math.floor(I.image.height*J),yt=W!==null?W.x:0,Ct=W!==null?W.y:0;F.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,yt,Ct,q,ft),dt.unbindTexture()},this.copyTextureToTexture=function(I,W,j=null,J=null,q=0){I.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],W=arguments[2],q=arguments[3]||0,j=null);let ft,yt,Ct,Pt,Gt,$t,Lt,ie,me;const _e=I.isCompressedTexture?I.mipmaps[q]:I.image;j!==null?(ft=j.max.x-j.min.x,yt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,Pt=j.min.x,Gt=j.min.y,$t=j.isBox3?j.min.z:0):(ft=_e.width,yt=_e.height,Ct=_e.depth||1,Pt=0,Gt=0,$t=0),J!==null?(Lt=J.x,ie=J.y,me=J.z):(Lt=0,ie=0,me=0);const en=Zt.convert(W.format),le=Zt.convert(W.type);let It;W.isData3DTexture?(F.setTexture3D(W,0),It=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(F.setTexture2DArray(W,0),It=O.TEXTURE_2D_ARRAY):(F.setTexture2D(W,0),It=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const ii=O.getParameter(O.UNPACK_ROW_LENGTH),ce=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Dn=O.getParameter(O.UNPACK_SKIP_PIXELS),vs=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t);const cr=I.isDataArrayTexture||I.isData3DTexture,ve=W.isDataArrayTexture||W.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Wn=Rt.get(I),fr=Rt.get(W),vn=Rt.get(Wn.__renderTarget),Ti=Rt.get(fr.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ei=0;Ei<Ct;Ei++)cr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(I).__webglTexture,q,$t+Ei),I.isDepthTexture?(ve&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(W).__webglTexture,q,me+Ei),O.blitFramebuffer(Pt,Gt,ft,yt,Lt,ie,ft,yt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ve?O.copyTexSubImage3D(It,q,Lt,ie,me+Ei,Pt,Gt,ft,yt):O.copyTexSubImage2D(It,q,Lt,ie,me+Ei,Pt,Gt,ft,yt);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(It,q,Lt,ie,me,ft,yt,Ct,en,le,_e.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(It,q,Lt,ie,me,ft,yt,Ct,en,_e.data):O.texSubImage3D(It,q,Lt,ie,me,ft,yt,Ct,en,le,_e):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,q,Lt,ie,ft,yt,en,le,_e.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,q,Lt,ie,_e.width,_e.height,en,_e.data):O.texSubImage2D(O.TEXTURE_2D,q,Lt,ie,ft,yt,en,le,_e);O.pixelStorei(O.UNPACK_ROW_LENGTH,ii),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,vs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),q===0&&W.generateMipmaps&&O.generateMipmap(It),dt.unbindTexture()},this.copyTextureToTexture3D=function(I,W,j=null,J=null,q=0){return I.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,I=arguments[2],W=arguments[3],q=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,j,J,q)},this.initRenderTarget=function(I){Rt.get(I).__webglFramebuffer===void 0&&F.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),dt.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,dt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class id extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ya extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const av={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=sd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,f,h,u,p;if(i&&(r=hv(n,t,r,e)),n.length>80*e){a=c=n[0],l=f=n[1];for(let g=e;g<s;g+=e)h=n[g],u=n[g+1],h<a&&(a=h),u<l&&(l=u),h>c&&(c=h),u>f&&(f=u);p=Math.max(c-a,f-l),p=p!==0?32767/p:0}return Br(r,o,e,a,l,p,0),o}};function sd(n,t,e,i,s){let r,o;if(s===bv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=gu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=gu(r,n[r],n[r+1],o);return o&&xa(o,o.next)&&(Gr(o),o=o.next),o}function ds(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(xa(e,e.next)||be(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Br(n,t,e,i,s,r,o){if(!n)return;!o&&r&&_v(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?cv(n,i,s,r):lv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Gr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=fv(ds(n),t,e),Br(n,t,e,i,s,r,2)):o===2&&uv(n,t,e,i,s,r):Br(ds(n),t,e,i,s,r,1);break}}}function lv(n){const t=n.prev,e=n,i=n.next;if(be(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,f=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==t;){if(g.x>=f&&g.x<=u&&g.y>=h&&g.y<=p&&Gs(s,a,r,l,o,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(be(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=f<h?f<u?f:u:h<u?h:u,_=a>l?a>c?a:c:l>c?l:c,d=f>h?f>u?f:u:h>u?h:u,m=hc(p,g,t,e,i),S=hc(_,d,t,e,i);let v=n.prevZ,M=n.nextZ;for(;v&&v.z>=m&&M&&M.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Gs(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=p&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&Gs(a,f,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=d&&v!==s&&v!==o&&Gs(a,f,l,h,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=d&&M!==s&&M!==o&&Gs(a,f,l,h,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fv(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!xa(s,r)&&rd(s,i,i.next,r)&&Hr(s,r)&&Hr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Gr(i),Gr(i.next),i=n=r),i=i.next}while(i!==n);return ds(i)}function uv(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let l=od(o,a);o=ds(o,o.next),l=ds(l,l.next),Br(o,t,e,i,s,r,0),Br(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function hv(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=sd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(yv(c));for(s.sort(dv),r=0;r<s.length;r++)e=pv(s[r],e);return e}function dv(n,t){return n.x-t.x}function pv(n,t){const e=mv(n,t);if(!e)return t;const i=od(e,n);return ds(i,i.next),ds(e,e.next)}function mv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let f=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Gs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Hr(e,n)&&(h<f||h===f&&(e.x>s.x||e.x===s.x&&gv(s,e)))&&(s=e,f=h)),e=e.next;while(e!==a);return s}function gv(n,t){return be(n.prev,n,t.prev)<0&&be(t.next,n,n.next)<0}function _v(n,t,e,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,vv(s)}function vv(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function hc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function yv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Gs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function xv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Sv(n,t)&&(Hr(n,t)&&Hr(t,n)&&Mv(n,t)&&(be(n.prev,n,t.prev)||be(n,t.prev,t))||xa(n,t)&&be(n.prev,n,n.next)>0&&be(t.prev,t,t.next)>0)}function be(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function xa(n,t){return n.x===t.x&&n.y===t.y}function rd(n,t,e,i){const s=Lo(be(n,t,e)),r=Lo(be(n,t,i)),o=Lo(be(e,i,n)),a=Lo(be(e,i,t));return!!(s!==r&&o!==a||s===0&&Po(n,e,t)||r===0&&Po(n,i,t)||o===0&&Po(e,n,i)||a===0&&Po(e,t,i))}function Po(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Lo(n){return n>0?1:n<0?-1:0}function Sv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Hr(n,t){return be(n.prev,n,n.next)<0?be(n,t,n.next)>=0&&be(n,n.prev,t)>=0:be(n,t,n.prev)<0||be(n,n.next,t)<0}function Mv(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function od(n,t){const e=new dc(n.i,n.x,n.y),i=new dc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function gu(n,t,e,i){const s=new dc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Hc{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Hc.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];_u(t),vu(i,t);let o=t.length;e.forEach(_u);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vu(i,e[l]);const a=av.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function _u(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}const yu=new Te;class Tv{constructor(t,e,i=0,s=1/0){this.ray=new Hh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,i=[]){return pc(t,this,i,e),i.sort(xu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)pc(t[s],this,i,e);return i.sort(xu),i}}function xu(n,t){return n.distance-t.distance}function pc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lc);function Ye(n,t=0){let e=(n|0)^Math.imul((t|0)+2654435769,2246822507);return e^=e>>>16,e=Math.imul(e,2146121005),e^=e>>>15,e=Math.imul(e,2221713035),e^=e>>>16,e>>>0}function $s(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}class ge{constructor(t=1){this.s=t>>>0||1}next(){let t=this.s+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+Math.floor(this.next()*(e-t+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}weighted(t){let e=0;for(const s of t)e+=Math.max(0,s[1]);let i=this.next()*e;for(const s of t)if(i-=Math.max(0,s[1]),i<=0)return s[0];return t[t.length-1][0]}shuffle(t){const e=t.slice();for(let i=e.length-1;i>0;i--){const s=Math.floor(this.next()*(i+1));[e[i],e[s]]=[e[s],e[i]]}return e}fork(t=0){return new ge(Ye(Math.floor(this.next()*4294967296),t))}}const Qe=(n,t,e)=>n<t?t:n>e?e:n,Ev=(n,t,e)=>n+(t-n)*e,Su=(n,t,e)=>{const i=Qe((e-n)/(t-n),0,1);return i*i*(3-2*i)},os=(n,t,e,i)=>Ev(n,t,1-Math.exp(-e*i)),rl=Math.PI*2;function wv(n,t){let e=(t-n)%rl;return e>Math.PI&&(e-=rl),e<-Math.PI&&(e+=rl),e}function Ie(n,t=0){const e=Math.floor(n),i=n-e,s=Ye(e,t)/2147483648-1,r=Ye(e+1,t)/2147483648-1,o=i*i*(3-2*i);return s+(r-s)*o}const se="'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif",oe="'Cabin', 'Gill Sans', 'Trebuchet MS', sans-serif",cs="'VT323', 'Courier New', monospace",as="'Patrick Hand', 'Segoe Print', 'Bradley Hand', 'Chalkboard SE', 'Comic Sans MS', cursive";function gn(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}async function Av(){if(!document.fonts||!document.fonts.load)return;const n=["400 32px 'Hammersmith One'","400 32px 'Cabin'","700 32px 'Cabin'","400 32px 'VT323'","400 32px 'Patrick Hand'"];try{await Promise.race([Promise.all(n.map(t=>document.fonts.load(t,"Way out 0123"))),new Promise(t=>setTimeout(t,2500))])}catch{}}function ar(n,{repeatU:t=!1,repeatV:e=!1,mip:i=!0}={}){const s=new ya(n);return s.colorSpace=pn,s.wrapS=t?Fr:pi,s.wrapT=e?Fr:pi,s.generateMipmaps=i,s.minFilter=i?ki:ze,s.magFilter=ze,s.anisotropy=2,s.needsUpdate=!0,s}function Rv(n){const t=parseInt(n.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function Sa(n,t){const[e,i,s]=Rv(n),r=o=>Math.max(0,Math.min(255,Math.round(t>=0?o+(255-o)*t:o*(1+t))));return`rgb(${r(e)},${r(i)},${r(s)})`}function Be(n,t,e,i,s,r=1,o=1,a=!0){const l=new ge(r);n.save(),n.beginPath(),n.rect(t,e,i,s),n.clip();const c=Math.floor(i*s/900*o);for(let f=0;f<c;f++){const h=l.range(.02,.09)*o;n.fillStyle=l.chance(.75)?`rgba(30,24,14,${h})`:`rgba(255,255,240,${h*.6})`;const u=l.range(1,5);n.fillRect(t+l.range(0,i),e+l.range(0,s),u,u*l.range(.5,a?3:1.4))}for(let f=0;a&&f<Math.floor(i/90*o);f++){const h=t+l.range(0,i),u=e+l.range(0,s*.7),p=l.range(s*.05,s*.35),g=n.createLinearGradient(0,u,0,u+p);g.addColorStop(0,`rgba(40,30,15,${.1*o})`),g.addColorStop(1,"rgba(40,30,15,0)"),n.fillStyle=g,n.fillRect(h,u,l.range(2,7),p)}n.restore()}function ye(n,t,e,i,s=se,r=400){let o=i;n.font=`${r} ${o}px ${s}`;const a=n.measureText(t).width;return a>e&&(o=Math.max(6,Math.floor(o*e/a)),n.font=`${r} ${o}px ${s}`),o}function Pn(n,t,e){const i=[];for(const s of String(t).split(`
`)){let r="";for(const o of s.split(" ")){const a=r?`${r} ${o}`:o;n.measureText(a).width>e&&r?(i.push(r),r=o):r=a}i.push(r)}return i}function Vr(n,t,e,i,s,r){const o={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2,back:Math.PI/2}[s]??0;n.save(),n.translate(t,e),n.rotate(o),n.strokeStyle=r,n.lineWidth=i*.16,n.lineCap="butt",n.lineJoin="miter",n.beginPath(),n.moveTo(-i*.5,0),n.lineTo(i*.46,0),n.moveTo(i*.1,-i*.38),n.lineTo(i*.48,0),n.lineTo(i*.1,i*.38),n.stroke(),n.restore()}const ne={eye:1.62,radius:.3,walk:2.5,run:4.7,passW:3,passSpring:1.35,passCrown:2.75,goal:5,ahead:3,sight:46,fov:68,fogColor:[.035,.04,.038],fogDensity:.038,internalH:400,internalHMobile:320},fs={ring:"#dc241f",bar:"#0019a8",text:"#ffffff",panel:"#fbfaf4"},Gn={yellow:"#ffd329",black:"#141414",blue:"#14213d",white:"#f6f4ea"},Cv=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function lr(n,t,e,i,s={}){let r=s.ring||fs.ring,o=s.bar||fs.bar;const a=s.defect||null;a==="swap"&&([r,o]=[o,r]);const l=i*.56,c=i*1.26,f=i*.815,h=i*.37;if(n.save(),n.translate(t,e),a==="tilt"&&n.rotate(-.07),n.strokeStyle=r,n.lineWidth=h,n.lineCap="butt",a==="solid")n.fillStyle=r,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill();else if(a==="gap")for(const[p,g]of[[-Math.PI*.86,-Math.PI*.2],[-Math.PI*.08,Math.PI*1.02]])n.beginPath(),n.arc(0,0,f,p,g),n.stroke();else n.beginPath(),n.arc(0,0,f,0,Math.PI*2),n.stroke();if(a==="double"&&(n.lineWidth=h*.32,n.beginPath(),n.arc(0,0,f*.5,0,Math.PI*2),n.stroke()),s.frame){n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.03);for(const p of[i,i*.63])n.beginPath(),n.arc(0,0,p,0,Math.PI*2),n.stroke()}const u=a==="low"?i*.22:0;if(n.fillStyle=o,n.fillRect(-c,u-l/2,c*2,l),s.frame&&(n.strokeStyle="#2a211c",n.lineWidth=Math.max(1,i*.035),n.strokeRect(-c,u-l/2,c*2,l)),s.name){const p=String(s.name).toUpperCase();n.fillStyle=s.text||fs.text,n.textAlign="center",n.textBaseline="middle";const g=l*.78;try{n.letterSpacing=`${(g*.05).toFixed(1)}px`}catch{}ye(n,p,c*2-l*.5,g,se),a==="mirror"&&n.scale(-1,1),n.fillText(p,0,u+l*.05);try{n.letterSpacing="0px"}catch{}}n.restore()}function no(n,t,e,i,s={}){n.fillStyle=fs.panel,n.fillRect(0,0,t,e);const r=Math.max(2,Math.min(t,e)*.035);n.strokeStyle="#6d7275",n.lineWidth=r,n.strokeRect(r/2,r/2,t-r,e-r);const o=Math.min(t*.9/2.52,e*.38);lr(n,t/2,e/2,o,{name:i,...s})}const ad=["tilt","double","solid","swap","gap","low","mirror"],sn=n=>document.getElementById(n);function Mu(n,t){if(!n)return;const e=gn(360,200);lr(e.getContext("2d"),180,100,68,{name:t}),n.replaceChildren(e)}function Pv(){const n=sn("title"),t=sn("pause"),e=sn("end"),i=sn("touch"),s=sn("fade"),r=(a,l)=>a.classList.toggle("hidden",!l);return{drawMarks(){Mu(sn("title-mark"),"Mind the Gap"),Mu(sn("end-mark"),"Way out")},showTitle(){r(n,!0),r(t,!1),r(e,!1),r(i,!1)},showPlaying(a){r(n,!1),r(t,!1),r(e,!1),r(i,!!a),s.classList.remove("on")},showPause(){r(t,!0),r(i,!1)},whiteOut(){s.classList.remove("black"),s.classList.add("on")},showEnd(a){const l=sn("end-stats");l.replaceChildren();for(const[c,f]of a){const h=document.createElement("dt");h.textContent=c;const u=document.createElement("dd");u.textContent=f,l.append(h,u)}r(e,!0),r(i,!1),r(t,!1),setTimeout(()=>s.classList.remove("on"),400)},onStart(a){sn("btn-start").addEventListener("click",a)},onResume(a){sn("btn-resume").addEventListener("click",a)},onAgain(a){sn("btn-again").addEventListener("click",a)},onVoice(a){const l=sn("opt-voice");l.addEventListener("change",()=>a(l.checked))},onHQ(a){const l=sn("opt-hq");l.addEventListener("change",()=>a(l.checked))},setLoading(a){const l=sn("btn-start");l.disabled=!!a,l.textContent=a?"Loading…":"Press to begin"}}}const Lv=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Dv=`
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
}`;function Iv(n,t){const e=new ti({vertexShader:Lv,fragmentShader:Dv,uniforms:{tScene:{value:n},tOverlay:{value:t},uInRes:{value:new ae(640,400)},uTime:{value:0},uTrack:{value:0},uNoise:{value:.085},uFade:{value:0},uDark:{value:0},uZoom:{value:0}},depthTest:!1,depthWrite:!1}),i=new bi;i.setAttribute("position",new $e(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new $e(new Float32Array([0,0,2,0,0,2]),2));const s=new An(i,e);s.frustumCulled=!1;const r=new id;r.add(s);const o=new Kh(-1,1,1,-1,0,1);return{scene:r,camera:o,uniforms:e.uniforms,material:e}}class Uv{constructor(t,e,{mobile:i=!1}={}){this.canvas=t,this.mobile=i,this.hq=!1,this.overlay=e,this.gl=new ov({canvas:t,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=gs,this.gl.autoClear=!0,this.gl.setClearColor(new re().setRGB(...ne.fogColor),1),this.target=new Bi(64,64,{minFilter:ze,magFilter:ze,depthBuffer:!0,stencilBuffer:!1}),this.target.texture.colorSpace=pn,this.dv=Iv(this.target.texture,e.texture),this.drawCalls=0,this.triangles=0,this.resize()}setHQ(t){this.hq=!!t,this.resize()}resize(){const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight),i=t/e,s=this.mobile?1280:2200;let r=Math.min(window.devicePixelRatio||1,this.mobile?2:1.5);r=Math.min(r,s/Math.max(t,e)),this.gl.setPixelRatio(r),this.gl.setSize(t,e,!1);let o=this.mobile?ne.internalHMobile:ne.internalH;this.hq&&(o=Math.round(o*1.45));let a,l;i>=1?(l=o,a=Math.round(o*Math.min(i,2.4))):(a=Math.round(o*.8),l=Math.round(a/Math.max(i,.42))),this.target.setSize(a,l),this.dv.uniforms.uInRes.value.set(a,l),this.overlay.resize(a,l),this.width=t,this.height=e,this.aspect=i,this.iw=a,this.ih=l}render(t,e,i){const s=this.gl;this.dv.uniforms.uTime.value=i%1e3,s.setRenderTarget(this.target),s.render(t,e),this.drawCalls=s.info.render.calls,this.triangles=s.info.render.triangles,s.setRenderTarget(null),s.render(this.dv.scene,this.dv.camera)}}const gr=n=>String(n).padStart(2,"0");class Nv{constructor(){this.canvas=gn(64,64),this.ctx=this.canvas.getContext("2d"),this.texture=new ya(this.canvas),this.texture.colorSpace=pn,this.texture.generateMipmaps=!1,this.texture.minFilter=ze,this.texture.magFilter=ze,this.sig="",this.mobile=!1}resize(t,e){const i=Math.min(2,1400/t);this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(e*i),this.texture.dispose(),this.sig=""}text(t,e,i,s,r="left",o="#fff"){const a=this.ctx;a.font=`400 ${s}px ${cs}`,a.textAlign=r,a.textBaseline="alphabetic",a.lineWidth=Math.max(2,s*.16),a.strokeStyle="rgba(0,0,0,0.85)",a.lineJoin="round",a.strokeText(t,e,i),a.fillStyle=o,a.fillText(t,e,i)}draw(t){const e=Math.floor(t.t),i=Math.floor(t.t*2)%2,s=[e,i,t.live,t.caption,t.captionTag,t.prompt,t.reading&&t.reading.title+t.reading.text,Math.round((t.zoom||0)*10),t.hint,this.canvas.width].join("|");if(s===this.sig)return;this.sig=s;const r=this.ctx,o=this.canvas.width,a=this.canvas.height;r.clearRect(0,0,o,a);const l=a>o,c=Math.min(o,a)/(l?300:400),f=18*c,h=22*c;if(t.live){i&&(r.fillStyle="#ff2a1a",r.beginPath(),r.arc(f+h*2.05,f+h*.42,h*.3,0,7),r.fill()),this.text("REC",f,f+h*.75,h,"left","#fff");const g=Math.floor(e/3600),_=Math.floor(e/60)%60,d=e%60;this.text(`${g}:${gr(_)}:${gr(d)}`,f,f+h*1.75,h*.9);const m=o-f-h*1.9,S=f+h*.12;r.strokeStyle="#fff",r.lineWidth=Math.max(2,c*2),r.strokeRect(m,S,h*1.7,h*.66),r.fillStyle="#fff",r.fillRect(m+h*1.7,S+h*.2,h*.14,h*.26);const v=Math.max(1,3-Math.floor(e/600));for(let w=0;w<v;w++)r.fillRect(m+h*.12+w*h*.52,S+h*.12,h*.4,h*.42);this.text("SP",m-h*.5,f+h*.75,h,"right");const M=t.date,A=M.getHours()%12||12,b=M.getHours()<12?"AM":"PM",T=this.mobile?f+h*2.75:a-f;this.text(`${Cv[M.getMonth()]} ${gr(M.getDate())} ${M.getFullYear()}`,o-f,T-h*1.05,h,"right"),this.text(`${A}:${gr(M.getMinutes())}:${gr(M.getSeconds())} ${b}`,o-f,T,h,"right"),r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=Math.max(1.5,c*1.5);const E=o/2,y=a/2,x=7*c;if(r.beginPath(),r.moveTo(E-x,y),r.lineTo(E-x*.35,y),r.moveTo(E+x*.35,y),r.lineTo(E+x,y),r.moveTo(E,y-x),r.lineTo(E,y-x*.35),r.moveTo(E,y+x*.35),r.lineTo(E,y+x),r.stroke(),t.zoom>.05){const w=f,P=this.mobile?f+h*3:a-f-h*.3,L=h*4;this.text("W",w,P,h*.8),this.text("T",w+L+h*.9,P,h*.8),r.strokeStyle="#fff",r.strokeRect(w+h*.6,P-h*.45,L,h*.36),r.fillStyle="#fff",r.fillRect(w+h*.6,P-h*.45,L*t.zoom,h*.36)}}const u=(l?21:24)*c;let p=a-f-h*(l?2.6:2.3);if(this.mobile&&(p=a*(l?.74:.86)),t.reading){const g=t.reading.text.length>170;let _=g?u*.74:u,d;for(let A=0;A<6&&(r.font=`400 ${_}px ${cs}`,d=Pn(r,t.reading.text,o*(g?.9:.8)),!((d.length+1.6)*_*1.02<a*(l?.42:.46)));A++)_*=.9;const m=(d.length+(t.reading.title?1.3:.3))*_*1.02+_*.5,S=g?p-m+(this.mobile?0:h*1.1):Math.min(p-m,a*.62),v=g?o*.03:o*.07;r.fillStyle=`rgba(0,0,0,${g?.72:.62})`,r.fillRect(v,S,o-v*2,m);let M=S+_*1;t.reading.title&&(this.text(t.reading.title,o/2,M,_*.82,"center","#ffd329"),M+=_*1.1);for(const A of d)this.text(A,g?v+_*.6:o/2,M,_,g?"left":"center"),M+=_*1.02;p=S-u*.4}else t.prompt&&this.text(t.prompt,o/2,a*.5+34*c,u*.9,"center","#ffd329");if(t.caption){const g=t.caption.length>110?u*(l?.78:.88):u;r.font=`400 ${g}px ${cs}`;const _=Pn(r,t.caption,o*(l?.9:.84));let d=p-(_.length-1)*g*1.02;t.captionTag&&this.text(t.captionTag,o/2,d-g*1.08,u*.8,"center","#9fd8ff");for(const m of _)this.text(m,o/2,d,g,"center"),d+=g*1.02}t.hint&&this.text(t.hint,o/2,f+h*3.2,u*.85,"center","rgba(255,255,255,0.85)"),this.texture.needsUpdate=!0}}const kv=`
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
}`,Ov=`
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
}`,Ar={uPower:{value:1},uCam:{value:.22},uFogColor:{value:new re().setRGB(...ne.fogColor)},uFogDensity:{value:ne.fogDensity}};function ld(n,t,e=!1,i=null){const s={};return e&&(s.CUTOUT=1),i&&(s.CLIP=1),new ti({defines:s,vertexShader:kv,fragmentShader:Ov,uniforms:{map:{value:n},uFlick:t||{value:1},uPower:Ar.uPower,uCam:Ar.uCam,uFogColor:Ar.uFogColor,uFogDensity:Ar.uFogDensity,...i?{uClip:i}:{}},side:xi})}const bu=[1,1,1],Di=new Q,Do=new Q,Tu=new Wt;function cd(n,t,e){const i=Math.cos(e.yaw),s=Math.sin(e.yaw);for(let r=0;r<t.length;r+=3){const o=t[r],a=t[r+1],l=t[r+2];n[r]=e.x+o*i+l*s,n[r+1]=e.y+a,n[r+2]=e.z-o*s+l*i}}class fd{constructor(){this.layers={},this.lights=[],this.portals=[],this.m=null,this.flip=!1}setXf(t){return this.m=t,this.flip=!1,t&&(Tu.setFromMatrix4(t),this.flip=t.determinant()<0),this}mirrorX(t){return this.setXf(t?new Te().makeScale(-1,1,1):null)}place(t,e,i,s=0){const r=new Te().makeRotationY(s);return r.setPosition(t,e,i),this.setXf(r)}_layer(t){return this.layers[t]||(this.layers[t]={pos:[],uv:[],nrm:[],tint:[],emit:[],idx:[],n:0})}_vert(t,e,i,s,r,o){this.m?(Di.set(e[0],e[1],e[2]).applyMatrix4(this.m),Do.set(i[0],i[1],i[2]).applyMatrix3(Tu),t.pos.push(Di.x,Di.y,Di.z),t.nrm.push(Do.x,Do.y,Do.z)):(t.pos.push(e[0],e[1],e[2]),t.nrm.push(i[0],i[1],i[2])),t.uv.push(s,r);const a=o&&o.tint||bu;return t.tint.push(a[0],a[1],a[2]),t.emit.push(o&&o.emit!==void 0?o.emit+(o.flick?1e3:0):-1),t.n++}quad(t,e,i,s,r,o,a,l){return this.quadN(t,e,i,s,r,o,o,o,o,o,a,l)}quadN(t,e,i,s,r,o,a,l,c,f,h,u){const p=this._layer(t),g=i[0]-e[0],_=i[1]-e[1],d=i[2]-e[2],m=s[0]-e[0],S=s[1]-e[1],v=s[2]-e[2],M=_*v-d*S,A=d*m-g*v,b=g*S-_*m,T=M*o[0]+A*o[1]+b*o[2]>=0!=!!this.flip,E=this._vert(p,e,a,h[0],h[1],u),y=this._vert(p,i,l,h[2],h[1],u),x=this._vert(p,s,c,h[2],h[3],u),w=this._vert(p,r,f,h[0],h[3],u);T?p.idx.push(E,y,x,E,x,w):p.idx.push(E,x,y,E,w,x)}quadUV(t,e,i,s,r,o,a,l,c,f,h){const u=this._layer(t),p=i[0]-e[0],g=i[1]-e[1],_=i[2]-e[2],d=s[0]-e[0],m=s[1]-e[1],S=s[2]-e[2],v=(g*S-_*m)*o[0]+(_*d-p*S)*o[1]+(p*m-g*d)*o[2]>=0!=!!this.flip,M=this._vert(u,e,o,a[0],a[1],h),A=this._vert(u,i,o,l[0],l[1],h),b=this._vert(u,s,o,c[0],c[1],h),T=this._vert(u,r,o,f[0],f[1],h);v?u.idx.push(M,A,b,M,b,T):u.idx.push(M,b,A,M,T,b)}tri(t,e,i,s,r,o,a,l,c){const f=this._layer(t),h=i[0]-e[0],u=i[1]-e[1],p=i[2]-e[2],g=s[0]-e[0],_=s[1]-e[1],d=s[2]-e[2],m=(u*d-p*_)*r[0]+(p*g-h*d)*r[1]+(h*_-u*g)*r[2]>=0!=!!this.flip,S=this._vert(f,e,r,o[0],o[1],c),v=this._vert(f,i,r,a[0],a[1],c),M=this._vert(f,s,r,l[0],l[1],c);m?f.idx.push(S,v,M):f.idx.push(S,M,v)}grid(t,e,i,s,r,o,a,l,c,f=!1){for(let h=0;h<r;h++)for(let u=0;u<o;u++){const p=(v,M)=>[e[0]+i[0]*v+s[0]*M,e[1]+i[1]*v+s[1]*M,e[2]+i[2]*v+s[2]*M],g=h/r,_=(h+1)/r,d=u/o,m=(u+1)/o,S=f?l:[l[0]+(l[2]-l[0])*g,l[1]+(l[3]-l[1])*d,l[0]+(l[2]-l[0])*_,l[1]+(l[3]-l[1])*m];this.quad(t,p(g,d),p(_,d),p(_,m),p(g,m),a,S,c)}}box(t,e,i,s,r,o,a,l,c,f="xXyYzZ"){const h=(u,p,g,_,d)=>this.quad(t,u,p,g,_,d,l,c);f.includes("x")&&h([e,i,a],[e,i,s],[e,o,s],[e,o,a],[-1,0,0]),f.includes("X")&&h([r,i,s],[r,i,a],[r,o,a],[r,o,s],[1,0,0]),f.includes("y")&&h([e,i,s],[r,i,s],[r,i,a],[e,i,a],[0,-1,0]),f.includes("Y")&&h([e,o,s],[r,o,s],[r,o,a],[e,o,a],[0,1,0]),f.includes("z")&&h([r,i,s],[e,i,s],[e,o,s],[r,o,s],[0,0,-1]),f.includes("Z")&&h([e,i,a],[r,i,a],[r,o,a],[e,o,a],[0,0,1])}addLight(t,e,i,s=1,r=7,o=!1,a=bu){this.m&&(Di.set(t,e,i).applyMatrix4(this.m),t=Di.x,e=Di.y,i=Di.z),this.lights.push({x:t,y:e,z:i,i:s,r2:r*r,flicker:o,color:a})}addPortal(t,e,i,s){this.portals.push({x:t,y:e,z:i,dx:Math.sin(s),dz:Math.cos(s)})}_lightAt(t,e,i,s,r,o,a){const l=a.x-t,c=a.y-e,f=a.z-i,h=l*l+c*c+f*f;if(h>=a.r2)return 0;const u=(1-h/a.r2)**2,p=1/Math.sqrt(h+1e-6),g=Math.max(0,(s*l+r*c+o*f)*p);return a.i*u*(.38+.62*g)}bake(t=[.1,.1,.1],e=null){const i=this.portals.map(r=>({x:r.x,y:r.y+2.3,z:r.z,i:.85,r2:36})),s={};for(const r of Object.keys(this.layers)){const o=this.layers[r],a=new Uint8Array(o.n*4);for(let f=0;f<o.n;f++){const h=o.tint[f*3],u=o.tint[f*3+1],p=o.tint[f*3+2];let g,_,d,m=0;const S=o.emit[f];if(S>=0){const v=S>=1e3,M=v?S-1e3:S,A=v?.1:1;g=h*M*A,_=u*M*A,d=p*M*A,m=v?M*.9:0}else{const v=o.pos[f*3],M=o.pos[f*3+1],A=o.pos[f*3+2],b=o.nrm[f*3],T=o.nrm[f*3+1],E=o.nrm[f*3+2];let y=1;for(const x of this.portals){const w=Math.abs((v-x.x)*x.dx+(A-x.z)*x.dz),P=Math.abs((v-x.x)*x.dz-(A-x.z)*x.dx),L=Math.hypot(P,Math.max(0,M-x.y-2.2));P<4&&Math.abs(M-x.y)<5&&(y=Math.min(y,Math.max(Su(.1,2.4,w),Su(1.7,2.9,L))))}g=t[0],_=t[1],d=t[2];for(const x of this.lights){const w=this._lightAt(v,M,A,b,T,E,x)*y;w<=0||(x.flicker?m+=w:(g+=w*x.color[0],_+=w*x.color[1],d+=w*x.color[2]))}for(const x of i){const w=this._lightAt(v,M,A,b,T,E,x);g+=w,_+=w*.98,d+=w*.93}g*=h,_*=u,d*=p,m*=(h+u+p)/3}a[f*4]=Math.min(255,g*127.5),a[f*4+1]=Math.min(255,_*127.5),a[f*4+2]=Math.min(255,d*127.5),a[f*4+3]=Math.min(255,m*127.5)}const l=new bi,c=new Float32Array(o.pos);e&&cd(c,o.pos,e),l.userData.local=o.pos,l.setAttribute("position",new $e(c,3)),l.setAttribute("uv",new $e(new Float32Array(o.uv),2)),l.setAttribute("aLight",new $e(a,4,!0)),l.setIndex(new $e(o.n>65535?new Uint32Array(o.idx):new Uint16Array(o.idx),1)),l.computeBoundingSphere(),s[r]=l}return s}}function ol(n,t,e){const i=Math.cos(e),s=Math.sin(e);let r=1/0,o=-1/0,a=1/0,l=-1/0;for(const[c,f]of[[n[0],n[2]],[n[3],n[2]],[n[0],n[5]],[n[3],n[5]]]){const h=t.x+c*i+f*s,u=t.z-c*s+f*i;r=Math.min(r,h),o=Math.max(o,h),a=Math.min(a,u),l=Math.max(l,u)}return[r,t.y+n[1],a,o,t.y+n[4],l]}function mc(n,t,e=.25){return n[0]<t[3]-e&&n[3]>t[0]+e&&n[1]<t[4]-e&&n[4]>t[1]+e&&n[2]<t[5]-e&&n[5]>t[2]+e}function Fv(n,t,e,i,s){const r=[...n.values()].find(l=>l!==t&&mc(i,l.box)),o=e.env.stretch,a=r&&r.env.stretch;return{type:e.def.type,after:t.def.type,yaw:+s.toFixed(2),hit:r?r.def.type:"?",rel:r?a===o?"same stretch":"other stretch":"?",box:i.map(l=>+l.toFixed(1)),hitBox:r?r.box.map(l=>+l.toFixed(1)):null,sister:!!(o&&a&&o.fromJunction&&o.fromJunction===a.fromJunction)}}let zv=1;const Bv=new Set(["sheet","cut","gate","figure"]);class Hv{constructor(t,e){this.scene=t,this.hooks=e,this.nodes=new Map,this.current=null,this.buildQueue=[],this.stats={built:0,planned:0,deadEnds:0,forced:[]}}clear(){for(const t of this.nodes.values())this.unbuild(t);this.nodes.clear(),this.current=null,this.buildQueue.length=0}start(t,e,i){this.clear();const s=new ge(i),r=t.plan(s,e),o=this._make(t,r,e,{x:0,y:0,z:0},0,null,-1,i);return this.current=o,this.refresh(!0),o}_make(t,e,i,s,r,o,a,l){const c={id:zv++,def:t,p:e.p,env:i,seed:l,pos:s,yaw:r,parent:o,exitIndex:a,exits:e.exits.map(f=>({...f,child:null})),box:ol(e.box,s,r),built:null,dist:1/0,flick:{value:1},phase:l%1e3/10,span:e.exits.reduce((f,h)=>Math.max(f,Math.hypot(h.x,h.z)),0)||6};return this.nodes.set(c.id,c),this.stats.planned++,c}exitPose(t,e){const i=t.exits[e],s=Math.cos(t.yaw),r=Math.sin(t.yaw);return{pos:{x:t.pos.x+i.x*s+i.z*r,y:t.pos.y+i.y,z:t.pos.z-i.x*r+i.z*s},yaw:t.yaw+i.yaw}}_fits(t,e){for(const i of this.nodes.values())if(i!==e&&!(!i.built&&i.dist>3)&&mc(t,i.box))return!1;return!0}expand(t,e){const i=t.exits[e];if(i.child||i.sealed)return i.child;const{pos:s,yaw:r}=this.exitPose(t,e);let o=null;for(let a=0;a<14;a++){const l=Ye(t.seed,e*31+a*977+1),c=new ge(l),f=this.hooks.choose(t,e,a,c);if(!f)break;const h=f.def.plan(c,f.env);o||(o={pick:f,plan:h,seed:l});const u=ol(h.box,s,r);if(!(!f.force&&!this._fits(u,t)))return i.child=this._make(f.def,h,f.env,s,r,t,e,l),i.child}return this.stats.deadEnds++,o&&this.stats.forced.length<60&&this.stats.forced.push(Fv(this.nodes,t,o.pick,ol(o.plan.box,s,r),r)),o?(i.child=this._make(o.pick.def,o.plan,o.pick.env,s,r,t,e,o.seed),i.child):null}neighbours(t){const e=[];t.parent&&e.push(t.parent);for(const i of t.exits)i.child&&e.push(i.child);return e}refresh(t=!1){const e=ne.ahead,i=ne.sight||46,s=7;for(const a of this.nodes.values())a.dist=1/0,a.path=1/0;const r=[this.current];this.current.dist=0,this.current.path=0;const o=a=>a.dist<=e||a.path<=i&&a.dist<=s;for(;r.length;){const a=r.shift();if(a.dist<e||a.path<i&&a.dist<s)for(let l=0;l<a.exits.length;l++)this.expand(a,l);for(const l of this.neighbours(a))l.dist>a.dist+1&&(l.dist=a.dist+1,l.path=a===this.current?0:a.path+(a.span||8),r.push(l))}for(const a of this.nodes.values())o(a)&&!a.built&&!this.buildQueue.includes(a)?this.buildQueue.push(a):a.built&&a.dist>e+1&&a.path>i+10&&this.unbuild(a);if(this.buildQueue.sort((a,l)=>a.dist-l.dist),t)for(;this.buildQueue.length;)this.build(this.buildQueue.shift());this.cull()}cull(){const t=[...this.nodes.values()].filter(i=>i.built).sort((i,s)=>i.dist-s.dist),e=[];for(const i of t){const s=o=>o.parent===i||i.parent===o,r=i.dist>1&&e.some(o=>!s(o)&&mc(i.box,o.box,.4));i.built.group.visible=!r,i.hiddenByFold=r,r||e.push(i)}}pump(){for(;this.buildQueue.length;){const t=this.buildQueue.shift();if(!(!this.nodes.has(t.id)||t.built||t.dist===1/0))return this.build(t),this.cull(),!0}return!1}build(t){if(t.built)return;const e=new fd,i=this.hooks.makeSheet?this.hooks.makeSheet(t):null,s={b:e,p:t.p,rng:new ge(Ye(t.seed,99)),env:t.env,node:t,sheet:i,theme:t.env.theme,world:this},r=t.def.build(s)||{},o=e.bake(t.env.ambient||[.1,.105,.1],{x:t.pos.x,y:t.pos.y,z:t.pos.z,yaw:t.yaw}),a=new wr;a.matrixAutoUpdate=!1;const l=i?i.finish():null;for(const c of Object.keys(o)){const f=c==="sheet"||c.startsWith("sheet:"),h=f?l:this.hooks.textures(c,t),u=new An(o[c],ld(h,t.flick,f||Bv.has(c)));u.matrixAutoUpdate=!1,u.name=c,c==="gate"&&(u.visible=!!t.gateShut),c==="figure"&&(u.visible=!t.figureGone),t.def.layerVisible&&(u.visible=t.def.layerVisible(c,t)!==!1&&u.visible),a.add(u)}this.scene.add(a),a.updateMatrixWorld(!0),t.built={group:a,sheetTex:l,sheetOverflow:i?i.overflow:0,cells:r.cells||[],walls:r.walls||[],items:r.items||[],frames:r.frames||null,extra:r.extra||null,gate:a.children.find(c=>c.name==="gate")||null,figure:a.children.find(c=>c.name==="figure")||null},t.gateShut&&t.gateWall&&t.built.walls.push(t.gateWall),this.stats.built++,this.hooks.onBuilt&&this.hooks.onBuilt(t)}unbuild(t){if(!t.built)return;const{group:e,sheetTex:i}=t.built;this.scene.remove(e);for(const s of e.children)s.geometry.dispose(),s.material.dispose();i&&i.dispose(),this.hooks.onDisposed&&this.hooks.onDisposed(t),t.built=null}rebase(t,e,i){if(!(!t&&!e&&!i)){for(const s of this.nodes.values())if(s.pos.x-=t,s.pos.y-=e,s.pos.z-=i,s.box[0]-=t,s.box[3]-=t,s.box[1]-=e,s.box[4]-=e,s.box[2]-=i,s.box[5]-=i,!!s.built)for(const r of s.built.group.children){const o=r.geometry.attributes.position;cd(o.array,r.geometry.userData.local,{x:s.pos.x,y:s.pos.y,z:s.pos.z,yaw:s.yaw}),o.needsUpdate=!0,r.geometry.computeBoundingSphere()}}}prune(t,e){const i=[t];for(;i.length;){const s=i.pop();if(this.nodes.has(s.id)){this.unbuild(s),this.nodes.delete(s.id);for(const r of this.neighbours(s))r!==e&&this.nodes.has(r.id)&&i.push(r)}}}}function Ys(n,t,e){const i=t-n.pos.x,s=e-n.pos.z,r=Math.cos(n.yaw),o=Math.sin(n.yaw);return[i*r-s*o,i*o+s*r]}function Ni(n,t,e,i){const s=Math.cos(n.yaw),r=Math.sin(n.yaw);return[n.pos.x+t*s+i*r,n.pos.y+e,n.pos.z-t*r+i*s]}function ea(n,t,e,i,s=.02){if(!n.built)return null;const[r,o]=Ys(n,t,e);let a=null,l=1.6;for(const c of n.built.cells){const f=c.bx-c.ax,h=c.bz-c.az,u=f*f+h*h,p=((r-c.ax)*f+(o-c.az)*h)/u;if(p<-s||p>1+s||Math.abs((r-c.ax)*h-(o-c.az)*f)/Math.sqrt(u)>c.hw+s)continue;const _=p<0?0:p>1?1:p,d=n.pos.y+c.ya+(c.yb-c.ya)*_,m=Math.abs(d-i);m<l&&(l=m,a={y:d,cell:c,t:_})}return a}function Io(n,t,e,i){const s=n.current;let r=ea(s,t,e,i);if(r)return{node:s,y:r.y,cell:r.cell,t:r.t};for(const o of n.neighbours(s))if(r=ea(o,t,e,i),r)return{node:o,y:r.y,cell:r.cell,t:r.t};for(const o of n.neighbours(s))for(const a of n.neighbours(o))if(a!==s&&(r=ea(a,t,e,i),r))return{node:a,y:r.y,cell:r.cell,t:r.t};return null}function Gv(n,t,e){if(!n.built)return!1;let[i,s]=Ys(n,t.x,t.z),r=!1;const o=t.y-n.pos.y;for(const a of n.built.walls){if(a.length>4&&(o<a[4]||o>a[5]))continue;const l=a[2]-a[0],c=a[3]-a[1],f=l*l+c*c;let h=f>0?((i-a[0])*l+(s-a[1])*c)/f:0;h=h<0?0:h>1?1:h;const u=a[0]+l*h,p=a[1]+c*h,g=i-u,_=s-p,d=g*g+_*_;if(d<e*e&&d>1e-9){const m=Math.sqrt(d),S=(e-m)/m;i+=g*S,s+=_*S,r=!0}}if(r){const a=Math.cos(n.yaw),l=Math.sin(n.yaw);t.x=n.pos.x+i*a+s*l,t.z=n.pos.z-i*l+s*a}return r}function al(n,t,e){const i=[n.current,...n.neighbours(n.current)];for(let s=0;s<2;s++){let r=!1;for(const o of i)r=Gv(o,t,e)||r;if(!r)break}}function Vv(n,t,e,i,s){const r=t.x,o=t.z;t.x+=e,t.z+=i,al(n,t,s);let a=Io(n,t.x,t.z,t.y);return!a&&(t.x=r+e,t.z=o,al(n,t,s),a=Io(n,t.x,t.z,t.y),a||(t.x=r,t.z=o+i,al(n,t,s),a=Io(n,t.x,t.z,t.y)),!a)?(t.x=r,t.z=o,Io(n,r,o,t.y)):a}class Wv{constructor(t){this.camera=t,t.rotation.order="YXZ",this.pos={x:0,y:0,z:0},this.yaw=0,this.pitch=0,this.vx=0,this.vz=0,this.eyeY=ne.eye,this.stepDist=0,this.speed=0,this.walked=0,this.t=0,this.zoom=0,this.zoomTarget=0,this.loc=null,this.windX=0,this.windZ=0,this.shake=0}spawn(t,e,i,s){this.pos.x=t,this.pos.y=e,this.pos.z=i,this.yaw=s+Math.PI,this.pitch=0,this.vx=this.vz=0,this.eyeY=e+ne.eye,this.stepDist=0}update(t,e,i){this.t+=t,this.yaw-=e.lookX,this.pitch=Qe(this.pitch-e.lookY,-1.25,1.25),e.lookX=0,e.lookY=0;let s=e.mx,r=e.mz;const o=Math.hypot(s,r);o>1&&(s/=o,r/=o);const a=e.run&&r>.3,l=(a?ne.run:ne.walk)*(1-.35*this.zoom),c=Math.sin(this.yaw),f=Math.cos(this.yaw),h=(-c*r+f*s)*l,u=(-f*r-c*s)*l,p=o>.01?9:12;this.vx=os(this.vx,h,p,t),this.vz=os(this.vz,u,p,t);const g=this.pos.x,_=this.pos.z,d=Vv(i,this.pos,(this.vx+this.windX)*t,(this.vz+this.windZ)*t,ne.radius);let m=!1;d&&(this.loc=d,this.pos.y=d.y,d.node!==i.current&&(i.current=d.node,i.refresh()));const S=Math.hypot(this.pos.x-g,this.pos.z-_);this.speed=S/Math.max(t,1e-4),this.walked+=S;const v=a?1.05:.74,M=Math.floor(this.stepDist/v);this.stepDist+=Math.min(S,Math.hypot(this.vx,this.vz)*t),Math.floor(this.stepDist/v)!==M&&(m=!0),this.zoom=os(this.zoom,this.zoomTarget,7,t);const A=this.pos.y+ne.eye;this.eyeY=os(this.eyeY,A,16,t);const b=this.stepDist/v*Math.PI,T=Qe(this.speed/ne.walk,0,1.6),E=-Math.abs(Math.sin(b))*.035*T,y=Math.sin(b)*.018*T,x=this.t,w=Ie(x*.55,11)*.011+Ie(x*2.3,12)*.003,P=Ie(x*.47,21)*.012+Ie(x*2.7,22)*.003,L=this.shake||0,D=Ie(x*.4,31)*.01+Math.sin(b)*.006*T+Ie(x*23,43)*.012*L,N=this.camera;N.position.set(this.pos.x+f*y,this.eyeY+E,this.pos.z-c*y),N.rotation.set(this.pitch+w*(1-.6*this.zoom)+Ie(x*29,41)*.009*L,this.yaw+P*(1-.6*this.zoom)+Ie(x*31,42)*.007*L,D);const k=ne.fov-(N.aspect<1?20:36)*this.zoom;return Math.abs(N.fov-k)>.01&&(N.fov=k,N.updateProjectionMatrix()),{step:m,running:a}}viewDir(){const t=Math.cos(this.pitch);return{x:-Math.sin(this.yaw)*t,y:Math.sin(this.pitch),z:-Math.cos(this.yaw)*t}}}function qv(n,t,e){const i=new Set,s=()=>{const a=(i.has("KeyW")||i.has("ArrowUp")?1:0)-(i.has("KeyS")||i.has("ArrowDown")?1:0),l=(i.has("KeyD")?1:0)-(i.has("KeyA")?1:0);n.kmx=l,n.kmz=a,n.krun=i.has("ShiftLeft")||i.has("ShiftRight"),n.kturn=(i.has("ArrowRight")?1:0)-(i.has("ArrowLeft")?1:0)};window.addEventListener("keydown",a=>{a.repeat||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(a.code)&&a.preventDefault(),i.add(a.code),s(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!0),(a.code==="KeyP"||a.code==="Escape"&&!r())&&e.pause())}),window.addEventListener("keyup",a=>{i.delete(a.code),s(),(a.code==="KeyE"||a.code==="Space"||a.code==="Enter")&&e.use(!1)}),window.addEventListener("blur",()=>{i.clear(),s()});function r(){return document.pointerLockElement===t}const o=()=>{if(!(r()||!t.requestPointerLock))try{const a=t.requestPointerLock();a&&a.catch&&a.catch(()=>{})}catch{}};return document.addEventListener("mousemove",a=>{if(!r())return;const l=.0022;Math.abs(a.movementX)>400||Math.abs(a.movementY)>400||(n.lookX+=a.movementX*l,n.lookY+=a.movementY*l)}),t.addEventListener("mousedown",a=>{if(!r()){o();return}a.button===0&&e.use(!0)}),window.addEventListener("mouseup",a=>{a.button===0&&r()&&e.use(!1)}),document.addEventListener("pointerlockchange",()=>e.lockChange(r())),document.addEventListener("pointerlockerror",()=>e.lockChange(!1)),{requestLock:o,locked:r,release:()=>{r()&&document.exitPointerLock()}}}function Xv(n,t){const e=T=>document.getElementById(T),i=e("stick-zone"),s=e("look-zone"),r=e("stick-base"),o=e("stick-knob"),a=e("btn-use"),l=e("btn-run"),c=e("btn-pause");if(!i||!s)return{reset(){}};const f=52;let h=null,u=0,p=0,g=null,_=0,d=0,m=!1;const S=(T,E)=>{o.style.transform=`translate(${T}px, ${E}px)`},v=()=>{h=null,n.tmx=0,n.tmz=0,n.trun=m,S(0,0),r.style.left="",r.style.top="",r.style.bottom=""};i.addEventListener("pointerdown",T=>{if(h!==null)return;h=T.pointerId,u=T.clientX,p=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}const E=r.offsetWidth,y=r.offsetHeight;r.style.left=`${u-E/2}px`,r.style.top=`${p-y/2}px`,r.style.bottom="auto",T.preventDefault()}),i.addEventListener("pointermove",T=>{if(T.pointerId!==h)return;let E=T.clientX-u,y=T.clientY-p;const x=Math.hypot(E,y);x>f&&(E*=f/x,y*=f/x),S(E,y);const w=.12,P=E/f,L=y/f;n.tmx=Math.abs(P)<w?0:P,n.tmz=Math.abs(L)<w?0:-L,n.trun=m||x>f*1.35,T.preventDefault()});const M=T=>{T.pointerId===h&&v()};i.addEventListener("pointerup",M),i.addEventListener("pointercancel",M),s.addEventListener("pointerdown",T=>{if(g===null){g=T.pointerId,_=T.clientX,d=T.clientY;try{s.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),s.addEventListener("pointermove",T=>{if(T.pointerId!==g)return;const E=.0052;n.lookX+=(T.clientX-_)*E,n.lookY+=(T.clientY-d)*E,_=T.clientX,d=T.clientY,T.preventDefault()});const A=T=>{T.pointerId===g&&(g=null)};s.addEventListener("pointerup",A),s.addEventListener("pointercancel",A),((T,E,y)=>{T.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation(),T.classList.add("on"),E()});const x=w=>{w.preventDefault(),T.classList.remove("on"),y&&y()};T.addEventListener("pointerup",x),T.addEventListener("pointercancel",x)})(a,()=>t.use(!0),()=>t.use(!1)),l.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),m=!m,n.trun=m,l.classList.toggle("on",m)}),c.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()});for(const T of["touchstart","touchmove","gesturestart"])document.addEventListener(T,E=>{E.target.closest&&E.target.closest("#touch")&&E.preventDefault()},{passive:!1});return document.addEventListener("contextmenu",T=>T.preventDefault()),{reset:()=>{v(),g=null}}}function Gc(n=ne.passW,t=ne.passSpring,e=ne.passCrown,i=5,s=2){const r=[],o=n/2,a=e-t;for(let f=0;f<=s;f++)r.push({x:-o,y:t*f/s,nx:1,ny:0});for(let f=1;f<=i;f++){const h=Math.PI/2*(f/i),u=-o*Math.cos(h),p=t+a*Math.sin(h);let g=-u/(o*o),_=-(p-t)/(a*a);const d=Math.hypot(g,_)||1;r.push({x:u,y:p,nx:g/d,ny:_/d})}let l=0;r[0].s=0;for(let f=1;f<r.length;f++)l+=Math.hypot(r[f].x-r[f-1].x,r[f].y-r[f-1].y),r[f].s=l;const c=r.map(f=>({...f,v:f.s/l}));for(let f=r.length-2;f>=0;f--){const h=r[f];c.push({x:-h.x,y:h.y,nx:-h.nx,ny:h.ny,s:h.s,v:h.s/l})}return c.W=n,c.crown=e,c.spring=t,c.len=l,c}const Ut=Gc();function $v(n,t=1,e=null){const i=Math.max(1,Math.round(n/t)),s=[];for(let r=0;r<=i;r++){const o=n*r/i;s.push({x:0,y:e?e(o):0,z:o,yaw:0})}return s}function Yv(n,t,e=1){const i=Math.sign(t)||1,s=Math.abs(t),r=Math.max(2,Math.round(n*s/e)),o=[];for(let a=0;a<=r;a++){const l=s*a/r;o.push({x:i*n*(1-Math.cos(l)),y:0,z:n*Math.sin(l),yaw:i*l})}return o}function Se(n,t,e){return[n.x+Math.cos(n.yaw)*t,n.y+e,n.z-Math.sin(n.yaw)*t]}function Uo(n,t,e){return[Math.cos(n.yaw)*t,e,-Math.sin(n.yaw)*t]}function Cn(n,t,e,i={}){const s=i.layer||"tile",r=i.uPeriod||6,[o,a]=i.vRange||[.004,.996],l=[i.u0||0];for(let u=1;u<t.length;u++){const p=t[u-1],g=t[u];l.push(l[u-1]+Math.hypot(g.x-p.x,g.z-p.z))}const c=[],f=[],h=e.W/2;for(let u=0;u<t.length-1;u++){const p=t[u],g=t[u+1],_=l[u]/r,d=l[u+1]/r;for(let m=0;m<e.length-1;m++){const S=e[m],v=e[m+1],M=Uo(p,S.nx,S.ny),A=Uo(g,S.nx,S.ny),b=Uo(g,v.nx,v.ny),T=Uo(p,v.nx,v.ny),E=[(M[0]+b[0])/2,(M[1]+b[1])/2,(M[2]+b[2])/2];n.quadN(s,Se(p,S.x,S.y),Se(g,S.x,S.y),Se(g,v.x,v.y),Se(p,v.x,v.y),E,M,A,b,T,[_,o+(a-o)*S.v,d,o+(a-o)*v.v],i.wallOpts)}if(i.floor){const m=Math.max(1,Math.round(e.W));for(let S=0;S<m;S++){const v=-h+e.W*S/m,M=-h+e.W*(S+1)/m;n.quad("atlas",Se(p,v,0),Se(p,M,0),Se(g,M,0),Se(g,v,0),[0,1,0],i.floor,i.floorOpts)}}c.push({ax:p.x,az:p.z,bx:g.x,bz:g.z,hw:h,ya:p.y,yb:g.y});for(const m of[-1,1]){const S=Se(p,m*h,0),v=Se(g,m*h,0);f.push([S[0],S[2],v[0],v[2]])}}return{length:l[l.length-1]-l[0],cells:c,walls:f,dist:l}}function Vc(n,t=.25){const e=n[0],i=n[n.length-1],s=[{...e,y:e.y-t,v:-.05},...n,{...i,y:i.y-t,v:-.05}];return s.W=n.W,s.crown=n.crown,s.spring=n.spring,s.len=n.len,s}function Ma(n,t=.04){return n.map(e=>({x:e.x-e.nx*t,y:e.y<1e-6?-t:e.y-e.ny*t}))}function ir(n,t,e,i,s,r,o,a){const l=[Math.sin(t.yaw)*s,0,Math.cos(t.yaw)*s],c=o||((g,_)=>[g/6,.004+_/3.63*.992]),f=g=>Se(t,g.x,g.y),h=g=>c(g.x,g.y),u=e.length,p=(g,_,d,m)=>n.quadUV(r,f(g),f(_),f(d),f(m),l,h(g),h(_),h(d),h(m),a);if(i)for(let g=0;g<u-1;g++)p(e[g],e[g+1],i[g+1],i[g]);else for(let g=0;g<Math.floor((u-1)/2);g++)p(e[g],e[g+1],e[u-2-g],e[u-1-g])}function Ue(n,t,e,i,s,r=.12,o=.08){for(let a=0;a<s;a++){n.fillStyle=i.chance(.6)?`rgba(0,0,0,${i.range(.02,r)})`:`rgba(255,255,255,${i.range(.02,o)})`;const l=i.range(1,3.5);n.fillRect(i.range(0,t),i.range(0,e),l,l)}}const ue=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},Zv={floor(n,t,e,i){ue(n,t,e,"#77746b");const s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const l=i.range(-10,10);n.fillStyle=`rgb(${132+l},${129+l},${118+l})`,n.fillRect(o*r+1,a*r+1,r-2,r-2)}Ue(n,t,e,i,900,.2,.14),n.fillStyle="rgba(40,34,24,0.10)",n.fillRect(t*.2,0,t*.6,e)},floorDark(n,t,e,i){ue(n,t,e,"#3d3c39");const s=4,r=t/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const l=i.range(-6,6);n.fillStyle=`rgb(${74+l},${72+l},${68+l})`,n.fillRect(o*r+1,a*r+1,r-2,r-2)}Ue(n,t,e,i,700,.2,.08)},concrete(n,t,e,i){ue(n,t,e,"#a9a493"),Ue(n,t,e,i,900,.1,.07)},tactile(n,t,e,i){ue(n,t,e,"#c9a94a"),Ue(n,t,e,i,500,.12,.06);const s=6,r=t/s;for(let o=0;o<s;o++)for(let a=-1;a<s;a++){const l=(a+.5+(o%2?.5:0))*r,c=(o+.5)*r;n.fillStyle="rgba(70,50,10,0.45)",n.beginPath(),n.arc(l+1,c+1.5,r*.27,0,7),n.fill(),n.fillStyle="#e2c566",n.beginPath(),n.arc(l,c,r*.25,0,7),n.fill()}},yellow(n,t,e,i){ue(n,t,e,"#e2b81e"),Ue(n,t,e,i,700,.22,.05)},white(n,t,e){ue(n,t,e,"#ffffff")},black(n,t,e){ue(n,t,e,"#0b0b0b")},blackout(n,t,e){ue(n,t,e,"#000000")},navy(n,t,e,i){ue(n,t,e,"#14213d"),Ue(n,t,e,i,200,.1,.04)},cream(n,t,e,i){ue(n,t,e,"#e6dfc6"),Ue(n,t,e,i,500,.08,.05)},signBack(n,t,e,i){ue(n,t,e,"#2a2c2e"),Ue(n,t,e,i,200,.1,.05)},metal(n,t,e,i){ue(n,t,e,"#9aa0a3");for(let s=0;s<e;s++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.07)})`,n.fillRect(0,s,t,1)},steelDark(n,t,e,i){ue(n,t,e,"#3b3f42");for(let s=0;s<e;s++)n.fillStyle=`rgba(${i.chance(.5)?"255,255,255":"0,0,0"},${i.range(0,.06)})`,n.fillRect(0,s,t,1)},wood(n,t,e,i){ue(n,t,e,"#6b4526");for(let s=0;s<90;s++)n.fillStyle=`rgba(${i.chance(.5)?"30,15,5":"190,140,90"},${i.range(.03,.12)})`,n.fillRect(0,i.range(0,e),t,i.range(1,3));for(let s=1;s<4;s++)n.fillStyle="rgba(20,10,4,0.55)",n.fillRect(0,s*e/4-1,t,2)},rubber(n,t,e,i){ue(n,t,e,"#161616"),Ue(n,t,e,i,200,.2,.08)},tread(n,t,e){ue(n,t,e,"#5c6063");for(let i=0;i<t;i+=4)n.fillStyle="#2c2f31",n.fillRect(i,0,2,e);n.fillStyle="#d9b21c",n.fillRect(0,0,t,7),n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},stairTread(n,t,e,i){ue(n,t,e,"#6f6c64"),Ue(n,t,e,i,700,.18,.1),n.fillStyle="#d9d5c4",n.fillRect(0,0,t,16),n.fillStyle="#2b2b2b";for(let s=0;s<t;s+=8)n.fillRect(s,4,4,8)},riser(n,t,e,i){ue(n,t,e,"#4a4843"),Ue(n,t,e,i,300,.2,.06)},ballast(n,t,e,i){ue(n,t,e,"#1f1d1a"),Ue(n,t,e,i,1400,.3,.1),n.fillStyle="#2e2a24",n.fillRect(0,e*.36,t,e*.28),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,e*.62,t,3)},rail(n,t,e,i){ue(n,t,e,"#4b3a2c"),n.fillStyle="#c9ced1",n.fillRect(0,e*.3,t,e*.4),n.fillStyle="rgba(255,255,255,0.5)",n.fillRect(0,e*.45,t,e*.08),Ue(n,t,e,i,300,.2,.1)},grille(n,t,e){ue(n,t,e,"#55585a"),n.fillStyle="#101010";for(let i=12;i<e-12;i+=9)n.fillRect(12,i,t-24,5);n.strokeStyle="#2a2c2e",n.lineWidth=4,n.strokeRect(4,4,t-8,e-8)},mindgap(n,t,e,i){ue(n,t,e,"#3a3936"),Ue(n,t,e,i,1500,.2,.08),n.fillStyle="#e9e5d6",n.font=`400 ${e*.62}px ${se}`,n.textAlign="center",n.textBaseline="middle",n.fillText("MIND THE GAP",t/2,e*.54),Ue(n,t,e,i,1200,.3,.02)},edge(n,t,e,i){ue(n,t,e,"#e3dfd0"),Ue(n,t,e,i,900,.25,.04)},cable(n,t,e,i){ue(n,t,e,"#23211e"),Ue(n,t,e,i,700,.3,.07),[.18,.26,.34,.5,.56,.74,.8].forEach((r,o)=>{n.fillStyle=["#0c0c0c","#3b3b3b","#141414","#54301a","#0c0c0c","#2c2c2c","#101010"][o],n.fillRect(0,e*r,t,o%3===0?7:4),n.fillStyle="rgba(255,255,255,0.12)",n.fillRect(0,e*r,t,1)}),n.fillStyle="#3a3a3a",n.fillRect(t*.5-3,e*.12,6,e*.76)},soot(n,t,e,i){ue(n,t,e,"#141311"),Ue(n,t,e,i,900,.3,.06),n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(t*.5-2,0,4,e),n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(t*.5+2,0,2,e);for(let s=1;s<4;s++)n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,s*e/4,t,2)},lamp(n,t,e){ue(n,t,e,"#8d9294");const i=n.createLinearGradient(0,e*.2,0,e*.8);i.addColorStop(0,"#dfe8e4"),i.addColorStop(.5,"#ffffff"),i.addColorStop(1,"#dfe8e4"),n.fillStyle=i,n.fillRect(6,e*.22,t-12,e*.56),n.fillStyle="#6c7072",n.fillRect(0,0,6,e),n.fillRect(t-6,0,6,e)},speaker(n,t,e){ue(n,t,e,"#cfcabb"),n.fillStyle="#2a2a2a";for(let i=20;i<e-16;i+=8)for(let s=20+i/8%2*4;s<t-16;s+=8)n.fillRect(s,i,3,3);n.strokeStyle="#8a8676",n.lineWidth=5,n.strokeRect(6,6,t-12,e-12)},comb(n,t,e){ue(n,t,e,"#d9b21c"),n.fillStyle="#2c2f31";for(let i=0;i<t;i+=6)n.fillRect(i,e*.3,3,e*.7)},deck(n,t,e,i){ue(n,t,e,"#7d8386"),Ue(n,t,e,i,500,.12,.1),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(0,0,t,3)},uplight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#fff8e0"),i.addColorStop(.35,"#f0e0b0"),i.addColorStop(1,"#6d6455"),n.fillStyle=i,n.fillRect(0,0,t,e)},daylight(n,t,e){const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#ffffff"),i.addColorStop(1,"#f1f6ff"),n.fillStyle=i,n.fillRect(0,0,t,e)}},ll=(n,t,e,i)=>{n.fillStyle=i,n.fillRect(0,0,t,e)},jv={door(n,t,e,i){ll(n,t,e,"#2c2e30"),n.fillStyle="#6f7577",n.fillRect(6,6,t-12,e-8),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(6,6,4,e-8),n.fillRect(t-10,6,4,e-8),n.fillStyle="#9aa0a3",n.fillRect(10,e-44,t-20,38),n.fillStyle="#1d2f66",n.fillRect(t*.2,e*.2,t*.6,e*.1),n.fillStyle="#fff",n.font=`700 ${e*.036}px ${oe}`,n.textAlign="center",n.textBaseline="middle",n.fillText("STAFF ONLY",t/2,e*.235),n.fillText("No public access",t/2,e*.275),n.fillStyle="#c8cccf",n.fillRect(t-28,e*.5,12,26),n.fillStyle="#101010",n.beginPath(),n.arc(t-22,e*.5+38,3,0,7),n.fill();for(let s=0;s<60;s++)n.fillStyle=`rgba(0,0,0,${i.range(.03,.12)})`,n.fillRect(i.range(6,t-8),i.range(6,e),2,i.range(2,12))},gate(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#17181a",n.lineWidth=5,n.lineCap="butt";const i=10,s=t/i;for(let a=0;a<=i;a++)n.beginPath(),n.moveTo(a*s,0),n.lineTo(a*s,e),n.stroke();n.lineWidth=3.5,n.strokeStyle="#202224";const r=5,o=e/r;for(let a=0;a<r;a++)for(let l=0;l<i;l++)n.beginPath(),n.moveTo(l*s,a*o),n.lineTo((l+1)*s,(a+1)*o),n.stroke(),n.beginPath(),n.moveTo((l+1)*s,a*o),n.lineTo(l*s,(a+1)*o),n.stroke();n.fillStyle="#17181a",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8)},helpPoint(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d9d9d2",n.beginPath(),n.arc(t/2,t/2,t/2-6,Math.PI,0),n.lineTo(t-6,e-6),n.lineTo(6,e-6),n.closePath(),n.fill(),n.fillStyle="#14213d",n.fillRect(16,e*.1,t-32,e*.13),n.fillStyle="#fff",n.font=`400 ${e*.07}px ${se}`,n.textAlign="center",n.textBaseline="middle",n.fillText("Help point",t/2,e*.17);const i=(s,r,o)=>{n.fillStyle="#8a8a84",n.beginPath(),n.arc(t/2,s,t*.2,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(t/2,s,t*.15,0,7),n.fill(),n.fillStyle="#222",n.font=`700 ${e*.04}px ${oe}`,n.fillText(o,t/2,s+t*.3)};i(e*.4,"#1f8a3c","Information"),i(e*.66,"#c9281c","Emergency"),n.fillStyle="#333";for(let s=28;s<t-24;s+=8)n.fillRect(s,e*.86,4,e*.06)},bench(n,t,e,i){n.clearRect(0,0,t,e);for(let s=0;s<5;s++)n.fillStyle=`rgb(${88+i.int(-8,8)},${56+i.int(-6,6)},${30+i.int(-5,5)})`,n.fillRect(0,s*(e/5)+2,t,e/5-4),n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,s*(e/5)+2,t,2);n.fillStyle="#3b3f42";for(const s of[.08,.5,.92])n.fillRect(t*s-4,0,8,e)},extinguisher(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#b8b8b0",n.fillRect(14,4,t-28,e-8),n.fillStyle="#c0281e",n.fillRect(22,12,t-44,e-24),n.fillStyle="#fff",n.font=`700 ${e*.12}px ${oe}`,n.textAlign="center",n.textBaseline="middle",n.fillText("FIRE",t/2,e*.4),n.fillText("POINT",t/2,e*.56)},cctv(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#d6d6cf",n.fillRect(t*.12,e*.3,t*.7,e*.34),n.fillStyle="#111",n.beginPath(),n.arc(t*.78,e*.47,e*.13,0,7),n.fill(),n.fillStyle="#35f",n.beginPath(),n.arc(t*.76,e*.45,e*.035,0,7),n.fill(),n.fillStyle="#8a8a84",n.fillRect(t*.3,e*.05,t*.08,e*.26),n.fillStyle="#c0281e",n.beginPath(),n.arc(t*.2,e*.38,4,0,7),n.fill()},figure(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#050505",n.beginPath(),n.ellipse(t/2,e*.1,t*.13,e*.065,0,0,7),n.fill(),n.beginPath(),n.moveTo(t*.5,e*.15),n.bezierCurveTo(t*.86,e*.17,t*.8,e*.5,t*.76,e*.98),n.lineTo(t*.24,e*.98),n.bezierCurveTo(t*.2,e*.5,t*.14,e*.17,t*.5,e*.15),n.fill()},brick(n,t,e,i){ll(n,t,e,"#1d1a17");const s=6,r=t/s;for(let a=0;a<s;a++){const l=i.int(-10,10);n.fillStyle=`rgb(${138+l},${86+l},${66+l})`,n.fillRect(a*r+2,3,r-4,e-6),n.fillStyle="rgba(255,220,190,0.10)",n.fillRect(a*r+2,3,r-4,4)}const o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(10,8,6,0.08)"),o.addColorStop(1,"rgba(10,8,6,0.55)"),n.fillStyle=o,n.fillRect(0,0,t,e);for(let a=0;a<260;a++)n.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(1,4),i.range(1,6))},shutter(n,t,e,i){ll(n,t,e,"#6a6f72");for(let s=0;s<e;s+=12)n.fillStyle=`rgba(255,255,255,${i.range(.06,.14)})`,n.fillRect(0,s,t,3),n.fillStyle="rgba(0,0,0,0.3)",n.fillRect(0,s+9,t,3);for(let s=0;s<120;s++)n.fillStyle=`rgba(30,20,10,${i.range(.03,.1)})`,n.fillRect(i.range(0,t),i.range(0,e),i.range(2,10),i.range(4,30));n.fillStyle="#2a2c2e",n.fillRect(0,e-14,t,14)}};function Kv(n,t,e){const i=new ge(320);n.fillStyle="#232427",n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,0.06)";for(let r=e*.3;r<e;r+=5)for(let o=Math.round(r/5)%2*2.5;o<t;o+=5)n.fillRect(o,r,2,2);const s=e*.24;n.fillStyle="#e3bd17",n.fillRect(0,0,t,s),n.fillStyle="rgba(0,0,0,0.22)";for(let r=0;r<t;r+=3)n.fillRect(r,1,1,s-2);for(let r=0;r<26;r++)n.fillStyle=`rgba(30,26,18,${i.range(.15,.5)})`,n.fillRect(i.range(0,t),i.range(0,s),i.range(1,5),i.range(1,3));n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(0,s,t,1.5)}function Jv(n,t,e){n.fillStyle="#101112",n.fillRect(0,0,t,e),n.strokeStyle="#4d5054",n.lineWidth=1.1;const i=t/7;n.save(),n.beginPath(),n.rect(0,0,t,e),n.clip();for(let r=-e;r<t+e;r+=i)n.beginPath(),n.moveTo(r,0),n.lineTo(r+e*.5,e),n.stroke(),n.beginPath(),n.moveTo(r+e*.5,0),n.lineTo(r,e),n.stroke();n.restore();const s=Math.max(3,t*.09);n.fillStyle="#cfccbf",n.fillRect(0,0,s,e),n.fillRect(t-s,0,s,e),n.fillRect(0,0,t,s*.8),n.fillRect(0,e-s*.8,t,s*.8),n.fillRect(0,e*.5-s*.3,t,s*.6),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(s,0,1,e),n.fillRect(t-s-1,0,1,e),Be(n,0,0,t,e,99,.8,!0)}function Qv(n,t,e,i,s=!1){n.fillStyle=s?"#e6e0cc":"#f1eee3",n.fillRect(0,0,t,e),n.strokeStyle="rgba(0,0,0,0.25)",n.lineWidth=1,n.strokeRect(.5,.5,t-1,e-1),n.fillStyle=s?"#1f3fae":"#141414",n.textAlign="center",n.textBaseline="middle",ye(n,i,t*.8,e*.62,s?as:se),n.save(),n.translate(t/2,e*.54),s&&n.rotate(-.06),n.fillText(i,0,0),n.restore(),n.fillStyle="rgba(190,170,110,0.75)";for(const[r,o]of[[0,0],[t-t*.22,0],[0,e-e*.1],[t-t*.22,e-e*.1]])n.fillRect(r,o,t*.22,e*.1)}function t2(n,t,e,i){const s=Math.max(2,t*.035);n.fillStyle="#7b8084",n.fillRect(0,0,t,e),n.fillStyle="#f4f3ec",n.fillRect(s,s,t-2*s,e-2*s),n.fillStyle="#16205e",n.textAlign="left",n.textBaseline="alphabetic";let r=e*.13,o;for(;n.font=`400 ${r}px ${oe}`,o=i.flatMap((c,f)=>(f?[""]:[]).concat(Pn(n,c,t-2*s-t*.12))),!(o.reduce((c,f)=>c+(f?r*1.16:r*.5),0)<e-2*s-e*.1||r<5);)r*=.94;let a=s+e*.06+r;n.strokeStyle="#16205e",n.lineWidth=r*.03;for(const l of o)l?(n.fillText(l,s+t*.06,a),n.strokeText(l,s+t*.06,a),a+=r*1.16):a+=r*.5;Be(n,s,s,t-2*s,e-2*s,i[0].length*13,.35,!1)}function e2(n,t,e,i){const s=Math.max(2,t*.035);n.fillStyle="#7b8084",n.fillRect(0,0,t,e),n.fillStyle="#0b8a43",n.fillRect(s,s,t-2*s,e-2*s),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="alphabetic";const r=Math.min((e-2*s)/(i.length*1.25),e*.36);n.font=`700 ${r}px ${oe}`,i.forEach((o,a)=>n.fillText(o,s+t*.07,s+r*(1.05+a*1.15),t-2*s-t*.12))}const Oi=1024,xn=128,ud={floor:[0,0,1,1],floorDark:[1,0,1,1],concrete:[2,0,1,1],tactile:[3,0,1,1],yellow:[4,0,1,1],white:[5,0,1,1],black:[6,0,1,1],metal:[7,0,1,1],wood:[0,1,1,1],rubber:[1,1,1,1],tread:[2,1,1,1],stairTread:[3,1,1,1],riser:[4,1,1,1],ballast:[5,1,1,1],rail:[6,1,1,1],grille:[7,1,1,1],mindgap:[0,2,4,1],cable:[4,2,1,1],soot:[5,2,1,1],lamp:[6,2,1,1],speaker:[7,2,1,1],door:[0,3,1,2],gate:[1,3,2,2],helpPoint:[3,3,1,2],bench:[4,3,2,1],extinguisher:[6,3,1,1],cctv:[7,3,1,1],figure:[4,4,1,2],shutter:[5,4,2,2],daylight:[7,4,1,1],edge:[7,5,1,1],navy:[0,5,1,1],cream:[1,5,1,1],steelDark:[2,5,1,1],signBack:[3,5,1,1],comb:[0,6,1,1],deck:[1,6,1,1],uplight:[2,6,1,1],blackout:[3,6,1,1],brick:[4,5,2,1],cage:[4,6,1,2],treadY:[5,6,1,1]};let _r=null,cl=null;function n2(){if(_r)return _r;_r=gn(Oi,Oi);const n=_r.getContext("2d");n.fillStyle="#3b3a37",n.fillRect(0,0,Oi,Oi);const t={...Zv,...jv,cage:Jv,treadY:Kv};for(const[e,[i,s,r,o]]of Object.entries(ud)){const a=t[e];n.save(),n.translate(i*xn,s*xn),n.beginPath(),n.rect(0,0,r*xn,o*xn),n.clip(),a?a(n,r*xn,o*xn,new ge($s(e))):(n.fillStyle="#f0f",n.fillRect(0,0,r*xn,o*xn)),n.restore()}return _r}function i2(){return cl||(cl=ar(n2())),cl}function Ot(n,t=3){const e=ud[n];if(!e)throw new Error("atlas: unknown cell "+n);const i=e[0]*xn+t,s=e[1]*xn+t,r=e[2]*xn-t*2,o=e[3]*xn-t*2;return[i/Oi,1-(s+o)/Oi,(i+r)/Oi,1-s/Oi]}function ra(n,t,e,i,s){const r=Ot(n);return[r[0]+(r[2]-r[0])*t,r[1]+(r[3]-r[1])*e,r[0]+(r[2]-r[0])*i,r[1]+(r[3]-r[1])*s]}function Vt(n){return ra(n,.4,.4,.6,.6)}const s2=()=>Ot("lamp"),r2=()=>Vt("metal");function _s(n,t,e,i={}){const s=i.len||1.25,r=.14,o=i.x||0,[a,,l]=Se(t,o,0);n.place(a,t.y+e,l,t.yaw);const f={emit:i.dead?.12:1.9,flick:!!i.flick,tint:[1,1,.94]};n.quad("atlas",[-r/2,-.07,-s/2],[r/2,-.07,-s/2],[r/2,-.07,s/2],[-r/2,-.07,s/2],[0,-1,0],s2(),f),n.box("atlas",-r/2,-.07,-s/2,r/2,0,s/2,r2(),{emit:i.dead?.1:.75,flick:!!i.flick},"xXzZ"),n.setXf(null),!i.noLight&&!i.dead&&n.addLight(a,t.y+e-.25,l,i.power||1,i.radius||7.5,!!i.flick,[1,.98,.92])}function hd(n,t,e,i,s={}){const r=e[e.length-1]-e[0],o=Math.max(0,Math.round(r/4.4)-1),a=[];for(let l=1;l<=o;l++){const c=e[0]+r*l/(o+1);let f=0;for(;f<e.length-1&&e[f]<c;)f++;const h=t[f];_s(n,h,i-.04,{dead:!!s.dark,flick:s.faulty===l-1}),a.push(h)}return a}function ei(n,t,e){_s(n,t,e-.04,{noLight:!0}),_i(n,t,1.56)}function _i(n,t,e,i="floor"){const[s,,r]=Se(t,0,0);n.place(s,t.y,r,t.yaw),n.quad("atlas",[-e,-.003,-.8],[e,-.003,-.8],[e,-.003,.8],[-e,-.003,.8],[0,1,0],Vt(i)),n.setXf(null)}function Hi(n,t,e,i,s,r,o,a,l,c,f=.02){const h=i*(s-f),u=[h,r,i>0?-o/2:o/2],p=[h,r,i>0?o/2:-o/2],[g,,_]=Se(e,0,0);n.place(g,e.y,_,e.yaw),n.quad(t,u,p,[p[0],r+a,p[2]],[u[0],r+a,u[2]],[-i,0,0],l,c),n.setXf(null);const d=Se(e,h,r+a/2);return{x:d[0],y:d[1],z:d[2]}}function o2(n,t,e,i,s,r,o,a="steelDark",l=.035){const c=Vt(a);Hi(n,"atlas",t,e,i,s-l,r+2*l,l,c,null,.03),Hi(n,"atlas",t,e,i,s+o,r+2*l,l,c,null,.03);const[f,,h]=Se(t,0,0);n.place(f,t.y,h,t.yaw);const u=e*(i-.03);for(const p of[-r/2-l,r/2])n.quad("atlas",[u,s,p],[u,s,p+l],[u,s+o,p+l],[u,s+o,p],[-e,0,0],c);n.setXf(null)}function na(n,t,e,i,s,r,o,a,l,c=0){const[f,,h]=Se(e,c,0);n.place(f,e.y,h,e.yaw),n.quad(t,[s/2,i,-.03],[-s/2,i,-.03],[-s/2,i+r,-.03],[s/2,i+r,-.03],[0,0,-1],o,l),a&&n.quad(t,[-s/2,i,.03],[s/2,i,.03],[s/2,i+r,.03],[-s/2,i+r,.03],[0,0,1],a,l);const u=Vt("signBack");n.box("atlas",-s/2,i,-.03,s/2,i+r,.03,u,null,"xXyY");for(const p of[-s*.35,s*.35])n.box("atlas",p-.012,i+r,-.012,p+.012,i+r+.5,.012,u,null,"xXzZ");return n.setXf(null),{x:f,y:e.y+i+r/2,z:h}}const a2=["Ladies and gentlemen, there is a good service on the Northern line.","This station is now closed. Please make your way to the way out.","Please mind the gap between the train and the platform.","Please stand behind the yellow line, and stand clear of the doors.","Please keep your belongings with you at all times.","Customers are reminded that the last northbound train has departed.","This is {station}. Please follow the signs for the way out.","Please take care on the stairs and hold the handrail.","Please stand on the right on the escalators."],Eu=["This is a security message. If you see something that doesn't look right, speak to staff, or text the British Transport Police on 61016. We'll sort it. See it, say it, sorted.","If you see something that doesn't look right, speak to staff, or text British Transport Police on 61016, and we'll get it sorted. That's 61016. See it, say it, sorted."],l2=["If you see something that doesn't look right, speak to staff. If you can find one. See it, say it, sorted."],wu=["This train is being held here to regulate the service. We will be on the move shortly.","This is a Northern line train to Edgware. Please move right down inside the cars."],fl=["This train terminates here. All change, please. All change.","This train is being held here. We do not know what is holding it.","The next station is this one. The next station is this one."],He={phone:"Warden’s post, Camden Town. Yes, we can hear you walking about. All the bunks are taken tonight.",bunks:"Steel bunks, three high: lengthwise along this wall, and across the tunnel in bays of six on the other side. Each was let to one named person. If they did not come down, it stayed empty.",mow:["MINISTRY OF WORKS","NO SMOKING",["Smoking is strictly forbidden in every part of this shelter.","Any member of the staff found smoking will be dismissed."],"BY ORDER"],rules:["DEEP SHELTER","TO SHELTERERS",["Occupy only the bunk shown on your ticket.","Take your bedding up with you each morning.","Lights are lowered at 10.30 p.m."],"SHELTER WARDEN"],rulesOdd:["Occupy only the bunk shown on your ticket.","Your bunk has been kept for you.","You may go up in the morning, if it comes."],plan:"Camden Town deep shelter. Two tunnels side by side, upper and lower decks, 8,000 bunks, sections A to H. Shafts at Underhill Street and Buck Street. This is section F.",lower:"Lower deck. The chain is padlocked. More bunks down there, and a lamp somebody has left burning."},Zi={green:["Emergency","stairs"],sign:["This stairway has over 320 steps","Do not use except in an emergency"],signs:[["This stairway has over 320 steps","Equivalent to climbing a 15 storey building"],["This stairway has over 340 steps","Equivalent to climbing a 16 storey building"]],hints:[[3,"Seventeen steps, a landing. Seventeen steps, a landing."],[8,"Cream tiles, a reddish-brown border, the same lamp. You have stopped counting."],[13,"Your legs ache. The numbers on the pillar are going down. Mostly."],[18,"Colder air from above. It smells of rain."]]},on={hint:"South Kentish Town. Nobody has got off here since the fifth of June, 1924.",train:"Light in the tunnel. It is not slowing down.",posters:[["Kempton’s Cocoa","Sustaining · Nourishing · 4½d the tin","cup"],["Summer Sale","Hallam & Blythe, Drapers · Commences Monday June 16th","sun"],["The Heath by Tram","Fresh air for tuppence","hill"],["Whitsun Fête","Palace Fields · Bands · Fireworks at dusk","star"],["Pargeter’s Linctus","For the chest · Of all chemists","bottle"]],notice:["UNDERGROUND","NOTICE",["This station is CLOSED until further notice.","Passengers are requested to use Camden Town or Kentish Town stations."],"5th June 1924"],name:"· CASTLE · ROAD · — fired into the tiles, under a coat of old paint. The name the station was built under.",board:"SOUTH KENTISH TOWN. A solid red disc behind the name bar: the sign as it was before the ring.",arch:"An archway to the lifts, bricked up. The mortar is older than anyone you know.",legend:"WAY OUT → (the tiles point at the bricked-up arch)",shelter:"SHELTER · FIRST AID POST → — stencilled in 1940, when people slept here. The bunks went after the war.",dust:"Dust, thick and even. Yours are the only footprints."},zn={approach:"The ticket hall. The gates are shut. Touch your card on a yellow reader.",reject:"Two low beeps. Every gate shows a red cross. The display says SEEK ASSISTANCE.",voice:"Seek assistance. There is no one here to assist you.",accept:"One clean beep. Green arrows. Every gate in the line opens at once.",out:"Hampstead. Heath Street. The air is cold and smells of rain.",booth:"Assistance. The blind is down. On the shelf inside, a mug of tea has a skin on it.",machine:"Machine closed. It has been closed since the ticket office was.",window:"TICKETS, in the old tiles, over a shuttered window. Nobody has sold one here for years.",wayout:"Way out ↑ (black on yellow)",thought:"Morning! If you can read this, you found the way out. Mind how you go."},c2=["This station is now closed. Please make your way to the way out. If you can.","There is a good service on the Northern line, and on all other lines that still exist.","Please keep your belongings with you. Unattended belongings may be remembered.","Customers are reminded that the last train has departed. It was not your train.","This is {station}. This has always been {station}.","Please stand behind the yellow line. A little further. Thank you.","Would the passenger on the platform please stop looking at the tunnel.","Please do not count the stairs.","The next train does not stop at {next}. The next train does not stop.","This is {station}. The next station is {station}."],f2=["We can see you on the cameras. You look tired.","Mind the gap. The gap is minding you.","This is {station}. You have been here before. You will be here again.","Please make your way to the way out. It has moved. We are sorry for any inconvenience.","There are no delays. There is nothing left to be delayed.","You are walking the right way. That is what worries us.","This is North End. This station was never opened. Please do not alight here.","Please do not turn round."],Wr={title:"Customer Information",intro:"This station is closed. To find the way out:",rules:["Follow the yellow and black signs that say “Way out”. Any other sign was not put up by us.","All station clocks run forwards. Never walk under a clock that runs backwards.","Announcements after a rising chime are from staff. A falling chime is not staff: do the opposite of what it says.","The way out is at Hampstead, the last station up the line and the deepest: up its stairs. A wrong turn takes you two stations back.","“Way out” is listed on the indicator boards. If its minutes go up, you went wrong."],foot:"Thank you for travelling on the Northern line.",keys:["yellow","chime","clock","line","board"]},u2=()=>`${Wr.intro}
${Wr.rules.map((n,t)=>`${t+1}. ${n}`).join(`
`)}`,h2="This station is now closed. Please read the customer information notice on the platform, then make your way to the way out.",Au=[{key:"yellow",title:"STAFF NOTICE",text:'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.'},{key:"line",title:"STAFF NOTICE",text:"Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. Hampstead is the deepest station on the network, and the way out is at the top of its stairs. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards."},{key:"chime",title:"STAFF NOTICE",text:"Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you."},{key:"clock",title:"STAFF NOTICE",text:"All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock."},{key:"board",title:"STAFF NOTICE",text:'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.'},{key:"tiles",title:"STAFF NOTICE",text:"Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line."},{key:"gate",title:"STAFF NOTICE",text:"Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it."},{key:"symbol",title:"STAFF NOTICE",text:"The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away."},{key:"whiteboard",title:"STAFF NOTICE",text:"The whiteboards are written each morning by the duty staff, who sign them with their own name. A board signed by anyone else, or by no one, was not written by us. Take no directions from it."},{key:"train",title:"NIGHT STAFF",text:'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"'}],d2=[["Travel light","Leave it at home"],["Stand on the right","Walk on the left"],["Please hold the handrail","Escalators can be unforgiving"],["See it. Say it.","Someone will sort it"],["The Seaside","Only an hour from the city"],["Night classes","Learn something before morning"],["Brightwell Tea","Still the same after all these years"],["Visit the Gardens","Open daily until dusk"],["Late again?","Blame the clocks"],["Evening Courier","All the news that happened"],["Carry less","Arrive sooner"],["Hartley’s Mints","Curiously persistent"],["The Heath","Fresh air, four stops north"],["Night service","Does not run tonight"],["Keep left","Unless it says keep right"],["Lost property","It will turn up at Baker Street"],["Camden Lock Market","Open Sundays. Closed now"]],p2=[["Have you seen this passenger?","Neither have we"],["You are doing well","Keep walking"],["The Seaside","It is not this way"],["Stand on the right","Stand very still"],["Still here?","So are we"],["Visit the Gardens","They were never open"],["Night classes","You are already enrolled"],["Do not read this poster","Thank you"],["Travel light","You will not need any of it"],["Missing",'One exit. Answers to "Way out"']],m2=[["#0f3057","#f2a541","#f5efe0"],["#7a1f2b","#f0d9a8","#1c1c1c"],["#1d5c4b","#f3e9c6","#e86a33"],["#e9dcc0","#b3261e","#14213d"],["#2b2b3a","#e3b23c","#f4f1e6"],["#c5522b","#f6e7c8","#253a5e"],["#3d6e8e","#f4e4b8","#1b2a38"],["#efe6cf","#1f5a3a","#8c2f45"]];function g2(n,t,e,i,s,r){const[o,a,l]=s;n.fillStyle=o,n.fillRect(0,0,t,e);const c=i.int(0,4);if(c===0){n.fillStyle=a,n.beginPath(),n.arc(t*.5,e*.4,t*.24,0,7),n.fill(),n.fillStyle=l;for(let f=0;f<5;f++)n.fillRect(0,e*(.46+f*.045),t,e*.02);n.fillRect(0,e*.66,t,e*.34)}else if(c===1){n.save(),n.translate(t*.5,e*.62);for(let f=0;f<14;f++){n.fillStyle=f%2?a:l,n.beginPath(),n.moveTo(0,0);const h=Math.PI+f/14*Math.PI,u=Math.PI+(f+1)/14*Math.PI;n.lineTo(Math.cos(h)*t*2,Math.sin(h)*t*2),n.lineTo(Math.cos(u)*t*2,Math.sin(u)*t*2),n.fill()}n.restore(),n.fillStyle=o,n.fillRect(0,e*.62,t,e*.38)}else if(c===2){for(let f=6;f>0;f--)n.fillStyle=f%2?a:l,n.beginPath(),n.arc(t*.5,e*.42,t*.42*f/6,0,7),n.fill();n.fillStyle="#0b0b0b",n.beginPath(),n.arc(t*.5,e*.42,t*.06,0,7),n.fill()}else c===3?(n.fillStyle=a,n.beginPath(),n.moveTo(0,e*.6),n.bezierCurveTo(t*.3,e*.3,t*.5,e*.7,t,e*.38),n.lineTo(t,e),n.lineTo(0,e),n.fill(),n.fillStyle=l,n.beginPath(),n.moveTo(0,e*.72),n.bezierCurveTo(t*.4,e*.5,t*.7,e*.85,t,e*.62),n.lineTo(t,e),n.lineTo(0,e),n.fill()):(n.fillStyle=a,n.fillRect(t*.12,e*.14,t*.5,e*.42),n.fillStyle=l,n.fillRect(t*.4,e*.3,t*.48,e*.36));if(r){n.fillStyle="rgba(8,8,8,0.92)";const f=t*i.range(.25,.75),h=e*.62,u=e*.12;n.beginPath(),n.ellipse(f,h-u*1.25,u*.2,u*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(f-u*.32,h),n.lineTo(f-u*.22,h-u),n.lineTo(f+u*.22,h-u),n.lineTo(f+u*.32,h),n.fill()}}function io(n,t,e,i,s=!1,r=!1){if(r){const h=Math.max(2,Math.min(t,e)*.035);n.fillStyle="#62676a",n.fillRect(0,0,t,e),n.save(),n.translate(h,h),n.beginPath(),n.rect(0,0,t-2*h,e-2*h),n.clip();const u=io(n,t-2*h,e-2*h,i,s,!1);return n.restore(),u}const o=i.pick(m2),[a,l]=i.pick(s?p2:d2);g2(n,t,e,i,o,s);const c=o[2];n.fillStyle=o[0],n.fillRect(0,e*.7,t,e*.3),n.fillStyle=o[1],n.fillRect(0,e*.7,t,e*.012),n.textAlign="center",n.textBaseline="middle",n.fillStyle=o[1]===o[0]?c:o[1],n.font=`400 ${e*.085}px ${se}`;const f=Pn(n,a,t*.86).slice(0,2);return f.forEach((h,u)=>n.fillText(h,t/2,e*(.775+u*.085)-(f.length-1)*e*.02,t*.9)),n.fillStyle=o[2]===o[0]?"#fff":o[2],ye(n,l,t*.84,e*.045,oe,700),n.fillText(l,t/2,e*.93),Be(n,0,0,t,e,i.int(1,99999),.6),{headline:a,strap:l}}function dd(n,t,e,i,s){n.fillStyle="#f3f0e4",n.fillRect(0,0,t,e),n.fillStyle="#14213d",n.fillRect(0,0,t,e*.17),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",ye(n,i.title,t*.86,e*.1,se),n.fillText(i.title,t/2,e*.09),n.fillStyle="#1a1a1a",n.textAlign="left",n.textBaseline="top";let r=e*.07,o;for(;n.font=`400 ${r}px ${oe}`,o=Pn(n,i.text,t*.86),!(o.length*r*1.25<e*.74||r<5);)r*=.92;o.forEach((a,l)=>n.fillText(a,t*.07,e*.22+l*r*1.25)),n.fillStyle="#b3261e";for(const[a,l]of[[.06,.03],[.94,.03]])n.beginPath(),n.arc(t*a,e*l+2,Math.max(2,t*.018),0,7),n.fill();s&&Be(n,0,0,t,e,s.int(1,99999),.5)}const Dr={exit:{level:0,text:"Exit"},in:{level:0,text:"Way in"},question:{level:0,text:"Way out?"},no:{level:0,text:"No way out"},red:{level:0,text:"Way out",bg:"#b3261e",fg:Gn.white},blue:{level:1,text:"Way out",bg:Gn.blue,fg:Gn.white},caps:{level:1,text:"WAY OUT"},mirror:{level:1,text:"Way out",mirror:!0},arrow2:{level:1,text:"Way out",arrow2:!0},pale:{level:1,text:"Way out",bg:"#cfe08a",fg:Gn.black},serif:{level:2,text:"Way out",font:"Georgia, 'Times New Roman', serif"},title:{level:2,text:"Way Out"},cut:{level:2,text:"Way cut"},wav:{level:2,text:"Wav out"},oul:{level:2,text:"Way oul"},wide:{level:2,text:"Way  out"},flip:{level:2,text:"Way out",flipArrow:!0}};function _2(n,t,e=!1){const i=n?Dr[n]:null,s={left:"←",right:"→",up:"↑",down:"↓"}[t]||"",r=i?i.text:"Way out";let o=e?" (yellow on black)":" (black on yellow)";if(i&&i.bg===Gn.blue)o=" (white on blue)";else if(i&&i.bg==="#b3261e")o=" (white on red)";else if(i&&i.bg)o=" (black on pale green)";else if(i&&i.mirror)o=" (the lettering is back to front)";else{if(i&&i.arrow2)return`↔ ${r}`;i&&i.flipArrow?o=" (the arrow points the other way)":i&&i.font&&(o=" (the lettering has serifs)")}return t==="left"?`${s} ${r}${o}`:`${r} ${s}${o}`}function ba(n,t,e,{dir:i="up",defect:s=null,inverted:r=!1}={}){const o=s?Dr[s]:{},a=o.bg||(r?Gn.black:Gn.yellow),l=o.fg||(r?Gn.yellow:Gn.black);n.fillStyle=a,n.fillRect(0,0,t,e);const c=n.createLinearGradient(0,0,0,e);c.addColorStop(0,"rgba(0,0,0,0.10)"),c.addColorStop(.5,"rgba(255,255,255,0.10)"),c.addColorStop(1,"rgba(0,0,0,0.12)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=Sa("#222222",0),n.lineWidth=Math.max(2,e*.04),n.strokeRect(1,1,t-2,e-2);const f=o.text||"Way out",h=e*.56,u=i!=="right",p=u?e*.52:t-e*.52,g=u?e*1:e*.3,_=u?t-e*.3:t-e*1;let d=i;o.flipArrow&&(d={left:"right",right:"left",up:"down"}[i]),Vr(n,p,e/2,h,d,l),o.arrow2&&Vr(n,p,e/2,h,{left:"right",right:"left",up:"down"}[i],l),n.fillStyle=l,n.textBaseline="middle",ye(n,f,_-g,e*.62,o.font||se),n.save(),o.mirror?(n.translate((g+_)/2,0),n.scale(-1,1),n.textAlign="center",n.fillText(f,0,e*.53)):(n.textAlign=u?"left":"right",n.fillText(f,u?g:_,e*.53)),n.restore()}function Ru(n,t,e,i,s={}){n.fillStyle="#f7f6ee",n.fillRect(0,0,t,e),n.fillStyle="#2b2d2f",n.fillRect(0,0,t,Math.max(1,e*.07)),n.fillRect(0,e-Math.max(1,e*.07),t,Math.max(1,e*.07)),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(t-1,0,1,e);const r=s.arrow?e*2.7:0;n.fillStyle="#0019a8",n.textAlign="center",n.textBaseline="middle";try{n.letterSpacing=`${(e*.035).toFixed(1)}px`}catch{}ye(n,i.toUpperCase(),(t-r)*.62,e*.56,se),n.fillText(i.toUpperCase(),(t-r)*.5,e*.53);try{n.letterSpacing="0px"}catch{}s.note&&(n.font=`400 ${e*.24}px ${oe}`,n.textAlign="left",n.fillText(s.note,e*.3,e*.52)),s.arrow&&(n.save(),n.translate(t-r-e*.25,e*.2),ba(n,r,e*.6,{dir:s.arrow,inverted:!0}),n.restore())}function pd(n,t,e,i,s){const o=e/7,a=o*3;n.fillStyle=s.grout,n.fillRect(0,0,t,e);for(let h=0;h<7;h++)for(let u=h%2?-a/2:0;u<t;u+=a)n.fillStyle=Sa(s.ground,(h*7+Math.round(u/a)*13)%9/100-.05),n.fillRect(u+.5,h*o+.5,a-1,o-1);const l=`· ${i.toUpperCase().split(" ").join(" · ")} ·`;n.fillStyle=s.letter||s.skirt,n.textAlign="center",n.textBaseline="middle";const c=o*5*1.36;n.font=`700 ${c}px Georgia, 'Times New Roman', serif`;const f=n.measureText(l).width;n.save(),n.translate(t/2,e*.52),n.scale(Math.min(.86,t*.96/f),1),n.fillText(l,0,0),n.restore();for(let h=1;h<7;h++)n.fillStyle="rgba(255,255,255,0.10)",n.fillRect(0,h*o,t,1)}function so(n,t,e,i,{bg:s=Gn.blue,fg:r=Gn.white,sub:o=""}={}){n.fillStyle=s,n.fillRect(0,0,t,e),n.strokeStyle=r,n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(e*.06,e*.06,t-e*.12,e-e*.12),n.fillStyle=r,n.textAlign="center",n.textBaseline="middle",ye(n,i,t*.84,e*(o?.4:.52),se),n.fillText(i,t/2,e*(o?.38:.53)),o&&(ye(n,o,t*.84,e*.22,oe),n.fillText(o,t/2,e*.72))}function Wc(n,t,e,i,s,r=null){n.fillStyle=s.ground,n.fillRect(0,0,t,e);const o=e/5;n.strokeStyle=s.grout,n.lineWidth=1;for(let c=0;c<t;c+=o*2.4)n.beginPath(),n.moveTo(c,0),n.lineTo(c,e),n.stroke();for(let c=0;c<e;c+=o)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();n.strokeStyle=s.band,n.lineWidth=o*.55,n.strokeRect(o*.3,o*.3,t-o*.6,e-o*.6),n.fillStyle=s.skirt,n.textAlign="center",n.textBaseline="middle";const a=r?t*.6:t*.8;ye(n,i,a,e*.42,se);const l=r==="left"?t*.6:r==="right"?t*.4:t/2;if(n.fillText(i,l,e*.53),r){const c=r==="left"?t*.17:t*.83,f=r==="left"?-1:1;n.beginPath(),n.moveTo(c-f*e*.42,e*.5),n.lineTo(c+f*e*.05,e*.42),n.lineTo(c+f*e*.05,e*.58),n.closePath(),n.fill(),n.beginPath(),n.moveTo(c+f*e*.2,e*.5),n.lineTo(c-f*e*.02,e*.3),n.lineTo(c-f*e*.02,e*.7),n.closePath(),n.fill()}}const v2=[["Be kind to each other. It costs nothing, and the trains still run.","heart"],["Stand on the right, walk on the left – and smile!","smile"],["If it isn’t signed by one of us, we didn’t write it. Have a lovely day!","star","signed"],["Kindness is like the Northern line: it goes both ways.","train"],["Today’s forecast below ground: 100% chance of no rain.","sun"],["Our clocks only go one way. So do Mondays. Chin up!","sun","clock"],["Tea solves most things. Signal failures take a bit longer.","cup"],["You’re not late. You’re on a later version of on time.","smile"],["A chime that goes UP means it’s one of us talking. Always nice to hear a friendly voice!","note","chime"],["Don’t let the escalator get you down. That’s only its job on one side.","smile"],["Lost your brolly? Baker Street. Lost your way? Follow the yellow and black signs.","brolly","yellow"],["Whoever you’re rushing for will wait. Walk, don’t run.","heart"],["Mind the gap between who you are and who you were before your first cuppa.","cup"],["Every stop north is one nearer fresh air. Keep going – you’re doing brilliantly.","train","line"],["Shortest journey on the network: one smile, platform to platform.","smile"]],y2=[["You’ve read this board before.","tally"],["Staff have gone home. Who wrote this?","query"],["Be kind to each other. There is only one of you.","heart"],["Stand on the right. Walk on the left. Don’t look behind.","eye"],["Smile! The cameras like it.","eye"],["This board is wiped clean every night. Tonight hasn’t finished yet.","tally"],["Yesterday’s thought is still underneath. It won’t rub out.","query"],["The date above is correct. It has been correct for some time.","tally"],["Thank you for not counting the stairs. (We know you did.)","smile"],["Don’t let the escalator get you down. Let it take you where it wants.","spiral"],["A clock going backwards is not trying to help you.","query","clock"]],x2=[["You.","eye"],["I have so many passages now. Stay and see them all.","spiral"],["No more thoughts today. Only walking.","tally"],["You wrote this. You’ll write it again tomorrow.","tally"],["The way out is a thought I had once.","spiral"],["Mind the gap. I do. I mind it very much.","eye"],["Please stop reading me.","eye"]],S2=["Dave","Maureen","Priya","Winston","Bev","Kofi","Tariq","Sue"],M2=["CSA","Station Supervisor","early turn","night turn","ticket hall"],b2=["Y.O.U.","a member of staff?","(unsigned)","you know who"],T2=["The Station","The Station","me","you"],he={blue:"#1f3fae",black:"#1c1c22",red:"#c5281f",green:"#1d7a40"},vr=["Sun","Mon","Tues","Weds","Thurs","Fri","Sat"],Cu=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],Pu=n=>`${n}${n%100>10&&n%100<14?"th":["th","st","nd","rd"][n%10]||"th"}`;function qc(n,t,e=new Date){const i=r=>`${vr[r.getDay()]} ${Pu(r.getDate())} ${Cu[r.getMonth()]}`,s=i(e);return n===0?s:n===1?t.pick([`${s} (again)`,`${s}, still`,`${vr[e.getDay()]}? ${Pu(e.getDate())} ${Cu[e.getMonth()]}`,i(new Date(e.getTime()-864e5))]):t.pick(["Today. Always today","No date",`${vr[e.getDay()]} ${vr[e.getDay()]} ${vr[e.getDay()]}`])}function Xc(n,t){return n.chance(.2)?`Your ${t} team`:`${n.pick(S2)}, ${n.pick(M2)}`}function $c(n,t){return n.head=n.head||t.toUpperCase(),n.caption=`${n.head} · ${n.date}
${n.title}: ${n.text}
— ${n.sign}`,n}function E2(n,t,e){return $c({tier:0,clue:null,title:"Thought for the day",date:qc(0,n),ink:he.blue,doodle:"sun",text:e,sign:Xc(n,t)},t)}function w2(n,t){const e=Math.min(.6,Math.max(0,t-2)*.3),i=Math.min(.7,t*.28);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function Yc(n,t,e={}){const i=t.wrong||0,s=t.station||"Mornington Crescent",r=e.cheery?0:w2(n,i),o=[v2,y2,x2][r],a=(t.stretch?t.stretch.id*4:0)+(t.idx||0),[l,c,f]=o[(Ye(t.gseed||1,77+r)+a)%o.length],h={tier:r,text:l,doodle:c,clue:f||null,title:"Thought for the day",date:qc(r,n),ink:r===2?he.red:r===1?he.black:n.pick([he.blue,he.blue,he.black]),sign:r===0?Xc(n,s):n.pick(r===1?b2:T2)};return r===2&&n.chance(.4)&&(h.head="THIS STATION"),$c(h,s)}const A2=[n=>`Way out today: ${n}-hand passage. Mind how you go!`,n=>`Lift’s out again – sorry! For the way out, keep ${n}.`,n=>`Works on tonight. The way out is by the ${n}-hand passage. Thanks for your patience!`],R2=[n=>`Way out today: ${n}. Trust me.`,n=>`Go ${n}. Everybody goes ${n}. Nobody has complained.`,n=>`The ${n}-hand passage has missed you. Come along.`],Lu={signs:"Our signs are yellow and black and say “Way out”. Anything fancier isn’t one of ours!",announce:"If the chime goes down, don’t go with it. Wait for the one that goes UP.",clock:"Clocks here go forwards, like the rest of us. Don’t walk under one that doesn’t."};function md(n,t,e){const i=t.wrong||0,s=t.station||"Mornington Crescent",r=n.chance(Math.min(.5,Math.max(0,i-.6)*.16)),o=!r&&n.chance(.35),a=o?-1:r?1-e.correct:e.correct,l=a===0?"left":"right",c={tier:r?2:0,clue:"junction",says:a,lie:r,title:o||r?"Thought for the day":"Today’s travel tip",text:o?Lu[e.kind]||Lu.signs:n.pick(r?R2:A2)(l),doodle:o?"star":l,date:qc(r?1:0,n),ink:r?he.red:n.pick([he.blue,he.black]),sign:r?"The Station":Xc(n,s)};return $c(c,s)}function te(n,t,e,i,s,r=.5,o=!1){n.strokeStyle=i,n.lineWidth=s,n.lineCap="round",n.lineJoin="round",n.beginPath(),t.forEach(([a,l],c)=>{const f=a+e.range(-r,r),h=l+e.range(-r,r);c?n.lineTo(f,h):n.moveTo(f,h)}),o&&n.closePath(),n.stroke()}const kn=(n,t,e,i=e,s=0,r=Math.PI*2,o=14)=>{const a=[];for(let l=0;l<=o;l++){const c=s+(r-s)*l/o;a.push([n+Math.cos(c)*e,t+Math.sin(c)*i])}return a};function Is(n,t,e,i,s,r,o,{slope:a=0,bold:l=!1,align:c="left"}={}){n.fillStyle=r,n.textAlign="left",n.textBaseline="alphabetic",n.strokeStyle=r,n.lineJoin="round",n.lineWidth=s*(l?.075:.05);const f=String(t).split(" ").map(_=>{const d=s*o.range(.96,1.04);return n.font=`400 ${d}px ${as}`,{word:_,s:d,w:n.measureText(_).width}}),h=s*.27,u=f.reduce((_,d)=>_+d.w,0)+h*(f.length-1);let p=c==="right"?e-u:c==="center"?e-u/2:e;const g=p;for(const _ of f)n.font=`400 ${_.s}px ${as}`,n.save(),n.translate(p,i+(p-g)*a+o.range(-.035,.035)*s),n.rotate(a+o.range(-.03,.03)),n.fillText(_.word,0,0),n.strokeText(_.word,0,0),n.restore(),p+=_.w+h;return u}const gd={smile(n,t,e,i,s,r){te(n,kn(t,e,i),r,s,i*.13,.4),te(n,kn(t,e+i*.08,i*.55,i*.5,.25,Math.PI-.25,6),r,s,i*.13,.3);for(const o of[-1,1])te(n,[[t+o*i*.34,e-i*.36],[t+o*i*.34,e-i*.2]],r,s,i*.16,.2)},heart(n,t,e,i,s,r){const o=[];for(let a=0;a<=18;a++){const l=a/18*Math.PI*2;o.push([t+i*.062*16*Math.sin(l)**3,e-i*.062*(13*Math.cos(l)-5*Math.cos(2*l)-2*Math.cos(3*l)-Math.cos(4*l))])}te(n,o,r,he.red,i*.14,.4)},star(n,t,e,i,s,r){const o=[];for(let a=0;a<=5;a++){const l=-Math.PI/2+a*(Math.PI*4/5);o.push([t+Math.cos(l)*i,e+Math.sin(l)*i])}te(n,o,r,s,i*.12,.5)},sun(n,t,e,i,s,r){te(n,kn(t,e,i*.5),r,he.red,i*.13,.4);for(let o=0;o<8;o++){const a=o/8*Math.PI*2;te(n,[[t+Math.cos(a)*i*.7,e+Math.sin(a)*i*.7],[t+Math.cos(a)*i,e+Math.sin(a)*i]],r,he.red,i*.12,.4)}},cup(n,t,e,i,s,r){te(n,[[t-i*.6,e-i*.15],[t-i*.48,e+i*.8],[t+i*.38,e+i*.8],[t+i*.5,e-i*.15]],r,s,i*.13,.4,!0),te(n,kn(t+i*.55,e+i*.3,i*.3,i*.28,-1.3,1.3,6),r,s,i*.12,.3);for(const o of[-.25,.15])te(n,[[t+i*o,e-i*.35],[t+i*(o+.14),e-i*.6],[t+i*o,e-i*.82],[t+i*(o+.12),e-i*1.05]],r,s,i*.09,.3)},train(n,t,e,i,s,r){te(n,[[t-i*.7,e+i*.75],[t-i*.7,e-i*.35],[t-i*.35,e-i*.85],[t+i*.35,e-i*.85],[t+i*.7,e-i*.35],[t+i*.7,e+i*.75]],r,s,i*.12,.4,!0),te(n,[[t-i*.18,e+i*.75],[t-i*.18,e-i*.5],[t+i*.18,e-i*.5],[t+i*.18,e+i*.75]],r,s,i*.09,.3);for(const o of[-1,1])te(n,[[t+o*i*.3,e-i*.4],[t+o*i*.56,e-i*.4],[t+o*i*.56,e],[t+o*i*.3,e],[t+o*i*.3,e-i*.4]],r,s,i*.08,.3),te(n,kn(t+o*i*.45,e+i*.42,i*.1),r,he.red,i*.1,.2)},note(n,t,e,i,s,r){te(n,kn(t-i*.35,e+i*.6,i*.28,i*.2),r,s,i*.2,.3),te(n,[[t-i*.1,e+i*.6],[t-i*.1,e-i*.8],[t+i*.45,e-i*.45]],r,s,i*.13,.3),te(n,[[t+i*.75,e+i*.5],[t+i*.75,e-i*.5]],r,he.red,i*.12,.3),te(n,[[t+i*.5,e-i*.2],[t+i*.75,e-i*.55],[t+i,e-i*.2]],r,he.red,i*.12,.3)},brolly(n,t,e,i,s,r){te(n,[...kn(t,e-i*.1,i*.9,i*.75,Math.PI,Math.PI*2,9),[t-i*.9,e-i*.1]],r,s,i*.12,.4),te(n,[[t,e-i*.1],[t,e+i*.7],[t-i*.12,e+i*.9],[t-i*.3,e+i*.75]],r,s,i*.12,.3)},tally(n,t,e,i,s,r){for(let o=0;o<2;o++){const a=t-i*.95+o*i*1.15;for(let l=0;l<4;l++)te(n,[[a+l*i*.2,e-i*.6],[a+l*i*.2,e+i*.6]],r,s,i*.1,.6);te(n,[[a-i*.15,e+i*.4],[a+i*.75,e-i*.4]],r,s,i*.1,.6)}},query(n,t,e,i,s,r){te(n,[...kn(t,e-i*.4,i*.42,i*.42,Math.PI,Math.PI*2.45,8),[t,e+i*.25]],r,s,i*.15,.4),te(n,[[t,e+i*.7],[t,e+i*.74]],r,s,i*.2,.2)},eye(n,t,e,i,s,r){te(n,[...kn(t,e+i*.5,i,i*.95,Math.PI*1.17,Math.PI*1.83,7),...kn(t,e-i*.5,i,i*.95,Math.PI*.17,Math.PI*.83,7)],r,s,i*.11,.3,!0),te(n,kn(t,e,i*.3),r,s,i*.12,.2),te(n,[[t,e-.5],[t,e+.5]],r,s,i*.26,.1)},spiral(n,t,e,i,s,r){const o=[];for(let a=0;a<=40;a++){const l=a*.42,c=i*a/40;o.push([t+Math.cos(l)*c,e+Math.sin(l)*c])}te(n,o,r,s,i*.1,.3)},left(n,t,e,i,s,r){gd.right(n,t,e,-i,s,r)},right(n,t,e,i,s,r){const o=Math.abs(i)*.2;te(n,[[t-i,e],[t+i*.9,e]],r,s,o,.5),te(n,[[t+i*.35,e-Math.abs(i)*.55],[t+i,e],[t+i*.35,e+Math.abs(i)*.55]],r,s,o,.5)}};function _d(n,t,e,i,s){const r=Math.max(3,e*.034),o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"#c9cdd0"),o.addColorStop(.5,"#a9aeb2"),o.addColorStop(1,"#8d9296"),n.fillStyle=o,n.fillRect(0,0,t,e),n.fillStyle="#4b4f53";for(const[P,L]of[[0,0],[t-r*1.5,0],[0,e-r*1.5],[t-r*1.5,e-r*1.5]])n.fillRect(P,L,r*1.5,r*1.5);n.fillStyle="#f7f7f3",n.fillRect(r,r,t-2*r,e-2*r),n.save(),n.beginPath(),n.rect(r,r,t-2*r,e-2*r),n.clip();for(let P=0;P<5;P++){const L=e*s.range(.3,.85),D=t*s.range(.05,.5);te(n,[[D,L],[D+t*s.range(.2,.45),L+e*s.range(-.06,.06)]],s,`rgba(40,60,140,${s.range(.025,.05)})`,e*s.range(.05,.11),2)}i.tier>0&&Is(n,"Be kind to each other",t*.1,e*.62,e*.13,"rgba(30,45,110,0.11)",s,{slope:-.03});const a=i.head||"";let l=e*.125;n.font=`400 ${l}px ${as}`;const c=n.measureText(a).width+l*.4*a.split(" ").length;c>t*.84&&(l*=t*.84/c);const f=Is(n,a,t/2,r+e*.135,l,he.black,s,{bold:!0,align:"center"});te(n,[[t/2-f/2-2,r+e*.16],[t/2,r+e*.168],[t/2+f/2+2,r+e*.158]],s,he.black,Math.max(1,e*.011),.5);const h=e*.088,u=r+e*.27,p=Is(n,i.title||"Thought for the day",t*.07,u,h,i.tier===2?he.black:he.red,s,{bold:!0}),g=[];for(let P=0;P<=p;P+=h*.45)g.push([t*.07+P,u+h*.2+(g.length%2?1:-1)*h*.05]);te(n,g,s,i.tier===2?he.black:he.red,Math.max(1,e*.008),.3);let _=e*.07;n.font=`400 ${_}px ${as}`;const d=t*.93-(t*.07+p)-h*.6,m=n.measureText(i.date||"").width*1.12;m>d&&(_*=Math.max(.6,d/m)),Is(n,i.date||"",t*.935,u,_,he.blue,s,{align:"right"});const S=r+e*.33,v=e*.8,M=t*.84;let A=e*(i.text.length<14?.24:.15),b;for(;n.font=`400 ${A*1.05}px ${as}`,b=Pn(n,i.text,M),!(b.length*A*1.08<=v-S||A<6);)A*=.94;const T=Math.min(A*1.22,(v-S)/b.length),E=S+(v-S-T*b.length)/2+A*.82;b.forEach((P,L)=>Is(n,P,t*.08+s.range(0,t*.015),E+L*T,A,i.ink||he.blue,s,{slope:s.range(-.012,.012)}));let y=e*.085;n.font=`400 ${y}px ${as}`;const x=n.measureText(`– ${i.sign}`).width*1.15;x>t*.6&&(y*=t*.6/x),Is(n,`– ${i.sign}`,t*.93,e*.925,y,i.tier===2?he.red:i.ink===he.black?he.blue:he.black,s,{slope:-.04,align:"right"});const w=gd[i.doodle];w&&w(n,t*.15,e*.875,e*.058,i.tier===2?he.red:he.green,s),n.restore(),n.strokeStyle="rgba(60,64,68,0.55)",n.lineWidth=1,n.strokeRect(r-.5,r-.5,t-2*r+1,e-2*r+1),Be(n,r,r,t-2*r,e-2*r,s.int(1,99999),.22,!1)}const gc=[240,180],is={tint:[.9,.92,.95]},vd=[[.14,.22,.78],[.82,.13,.1],[.09,.09,.11]],yd={tint:[.9,.9,.9]};function _n(n){return n.rng2||(n.rng2=new ge(Ye(n.node?n.node.seed:1,4242)))}function xd(n,t){return{...n,r:4.6,label:"read whiteboard",title:"STAFF WHITEBOARD",text:t.caption,board:{tier:t.tier,clue:t.clue,says:t.says??-1,lie:!!t.lie}}}const Zc=(n,t)=>n.sheet.add(gc[0],gc[1],(e,i,s)=>_d(e,i,s,t,_n(n)));function C2(n,t,e,i,s){const{b:r}=n,o=1,a=.75,l=.84,c=Zc(n,s),[f,,h]=Se(t,0,0);r.place(f,t.y,h,t.yaw);const u=e*(i-.05),p=e*(i+.03),g=e>0?-o/2:o/2;r.quad("sheet",[u,l,g],[u,l,-g],[u,l+a,-g],[u,l+a,g],[-e,0,0],c,yd);const _=Vt("metal"),d=e>0?"x":"X";r.box("atlas",Math.min(u,p),l,-o/2,Math.max(u,p),l+a,o/2,_,is,"yYzZ");const m=e*(i-.125);r.box("atlas",Math.min(m,p),l-.045,-o*.4,Math.max(m,p),l-.015,o*.4,_,is,`yYzZ${d}`);const S=e*(i-.09);vd.forEach((M,A)=>{const b=-.3+A*.17+(A===2?.16:0);r.box("atlas",S-.011,l-.015,b,S+.011,l+.007,b+.125,Vt("white"),{tint:M},"xXYzZ")}),r.setXf(null);const v=Se(t,u,l+a/2);return xd({x:v[0],y:v[1],z:v[2],n:[-e*Math.cos(t.yaw),e*Math.sin(t.yaw)]},s)}function Du(n,t,e,i,s,r){for(const[o,a]of[[-1,0],[1,0],[0,-1],[0,1]]){const l=a!==0?i:0,c=o!==0?i:0,f=(h,u)=>[h[0]+o*i+u*l,h[1],h[2]+a*i+u*c];n.quad("atlas",f(t,-1),f(t,1),f(e,1),f(e,-1),[o,0,a],s,r)}}function jc(n,t,e,i,s,r=0,o=null){const{b:a}=n,l=.9,c=.675,f=.9,h=.2,u=o||Zc(n,s),p=w=>-.22+(w-f)*h,g=f+c*.98,_=p(f),d=p(g);a.place(t,r,e,i),a.quad("sheet",[l/2,f,_],[-l/2,f,_],[-l/2,g,d],[l/2,g,d],[0,h,-.98],u,yd);const m=Vt("metal"),S=Vt("signBack"),v=.016;a.quad("atlas",[-l/2,f,_+v],[l/2,f,_+v],[l/2,g,d+v],[-l/2,g,d+v],[0,-h,.98],S),a.quad("atlas",[-l/2,g,d],[l/2,g,d],[l/2,g,d+v],[-l/2,g,d+v],[0,1,0],m,is);for(const w of[-1,1])a.quad("atlas",[w*l/2,f,_],[w*l/2,f,_+v],[w*l/2,g,d+v],[w*l/2,g,d],[w,0,0],m,is),Du(a,[w*.37,0,p(0)+.045],[w*.37,1.64,p(1.64)+.045],.016,m,is);Du(a,[0,1.5,p(1.5)+.06],[0,0,.38],.016,m,is),a.box("atlas",-l*.47,f-.03,_-.085,l*.47,f,_+.02,m,is,"xXyYzZ"),vd.forEach((w,P)=>{const L=-.3+P*.17+(P===2?.2:0);a.box("atlas",L,f,_-.07,L+.125,f+.022,_-.048,Vt("white"),{tint:w},"xXYzZ")}),a.setXf(null);const M=Math.cos(i),A=Math.sin(i),b=(w,P)=>[t+w*M+P*A,e-w*A+P*M],[T,E]=b(0,(_+d)/2),y=[b(-.45,-.43),b(.45,-.43),b(.45,.4),b(-.45,.4)],x=y.map((w,P)=>[...w,...y[(P+1)%4]]);return{item:xd({x:T,y:r+(f+g)/2,z:E,n:[-A,-M]},s),walls:x}}const Iu={northern:"#000000",bakerloo:"#b36305",central:"#e32017",circle:"#ffd300",district:"#00782a",hammersmith:"#f3a9bb",jubilee:"#a0a5a9",metropolitan:"#9b0056",piccadilly:"#003688",victoria:"#0098d4",waterloo:"#95cdba",elizabeth:"#6950a1",dlr:"#00a4a7",rail:"#e1251b"},Uu={northern:"Northern",bakerloo:"Bakerloo",central:"Central",circle:"Circle",district:"District",hammersmith:"Hammersmith & City",jubilee:"Jubilee",metropolitan:"Metropolitan",piccadilly:"Piccadilly",victoria:"Victoria",waterloo:"Waterloo & City",elizabeth:"Elizabeth line",dlr:"DLR",rail:"National Rail"},Sd={edgware:["Edgware","Burnt Oak","Colindale","Hendon Central","Brent Cross","Golders Green","Hampstead","Belsize Park","Chalk Farm"],barnet:["High Barnet","Totteridge & Whetstone","Woodside Park","West Finchley","Finchley Central","East Finchley","Highgate","Archway","Tufnell Park","Kentish Town"],charingX:["Mornington Crescent","Euston","Warren Street","Goodge Street","Tottenham Court Road","Leicester Square","Charing Cross","Embankment","Waterloo"],bank:["Euston","King's Cross St. Pancras","Angel","Old Street","Moorgate","Bank","London Bridge","Borough","Elephant & Castle"],morden:["Oval","Stockwell","Clapham North","Clapham Common","Clapham South","Balham","Tooting Bec","Tooting Broadway","Colliers Wood","South Wimbledon","Morden"],battersea:["Nine Elms","Battersea Power Station"]},oa={at:"Finchley Central",name:"Mill Hill East"},Ta={Euston:["victoria","rail"],"Warren Street":["victoria"],"Tottenham Court Road":["central","elizabeth"],"Leicester Square":["piccadilly"],"Charing Cross":["bakerloo","rail"],Embankment:["bakerloo","circle","district"],Waterloo:["bakerloo","jubilee","waterloo","rail"],"King's Cross St. Pancras":["circle","hammersmith","metropolitan","piccadilly","victoria","rail"],"Old Street":["rail"],Moorgate:["circle","hammersmith","metropolitan","elizabeth","rail"],Bank:["central","waterloo","dlr"],"London Bridge":["jubilee","rail"],"Elephant & Castle":["bakerloo","rail"],Stockwell:["victoria"],Balham:["rail"],"Kentish Town":["rail"]},Kc=[["North End","Golders Green","Hampstead"],["South Kentish Town","Kentish Town","Camden Town"],["City Road","Angel","Old Street"],["King William Street","Bank","London Bridge"]],Ir=["Mornington Crescent","Camden Town","Chalk Farm","Belsize Park","Hampstead"],P2="Golders Green",qr={"Mornington Crescent":{theme:{id:"mornington",ground:"#ece4c4",band:"#1d2a5e",accent:"#1d2a5e",skirt:"#182250",grout:"#bdb596",letter:"#7a1f2b"}},"Camden Town":{theme:{id:"camden",ground:"#e9e6cf",band:"#5d86c5",accent:"#5d86c5",skirt:"#3f5f96",grout:"#b9b6a0",letter:"#27406f"}},"Chalk Farm":{theme:{id:"chalk",ground:"#ede6cd",band:"#9a1b24",accent:"#9a1b24",skirt:"#7a141c",grout:"#beb69c",letter:"#6f141c"}},"Belsize Park":{theme:{id:"belsize",ground:"#ebe3c6",band:"#4d2418",accent:"#4d2418",skirt:"#3d1c12",grout:"#bdb497",letter:"#3a160f"}},Hampstead:{tiled:"Heath Street",theme:{id:"hampstead",ground:"#ece2bd",band:"#a66f6a",accent:"#a66f6a",skirt:"#5a1820",grout:"#beb38f",letter:"#5a1820"}},"Golders Green":{theme:{id:"golders",ground:"#eee9d6",band:"#2a5a3c",accent:"#2a5a3c",skirt:"#1f4530",grout:"#bfbaa6",letter:"#1f4530"}}},Xr={name:"South Kentish Town",built:"Castle Road"};qr[Xr.name]={tiled:Xr.built,theme:{id:"skt",ground:"#cfc6a6",band:"#5e2020",accent:"#5e2020",skirt:"#4a1a1a",grout:"#8f876f",letter:"#3f1414"}};const L2=n=>n>=Ir.length?P2:Ir[Math.max(0,n)],Jc=n=>(qr[n]||qr["Mornington Crescent"]).theme,D2=n=>qr[n]&&qr[n].tiled||n,ps=n=>n==="north"?1:2,sr=n=>n==="north"?"Northbound":"Southbound",_c="#16213f",I2="#1c3f94",U2="#f6f6f1";function N2(n){let t=0;for(const e of n)t+=e.type==="trunk"?e.stations.length:Math.max(e.left.length,e.right.length)+(e.rejoin?1:0)+(e.spur?.6:0);return t}function k2(n,t,e,i,s,r,o,a){const l=Ta[t];if(!l)return;let c=e;for(const f of l.slice(0,5)){const h=f==="rail"?r*1.5:r*2,u=r*.62,p=s<0?c-h:c;if(p<o||p+h>a)break;f==="rail"?(n.strokeStyle=Iu.rail,n.lineWidth=Math.max(1,r*.2),n.lineJoin="miter",n.beginPath(),n.moveTo(p,i-u*.42),n.lineTo(p+h,i-u*.42),n.lineTo(p,i+u*.42),n.lineTo(p+h,i+u*.42),n.stroke()):(n.fillStyle=Iu[f],n.fillRect(p,i-u/2,h,u)),c+=s*(h+r*.45)}}function ul(n,t,e,i,s,r,o={}){const a=Math.max(2,r*.42),l=!!Ta[t]||o.circle;n.strokeStyle="#000",n.fillStyle="#000",n.lineWidth=a,o.terminus&&(n.beginPath(),n.moveTo(e-r*.7,i),n.lineTo(e+r*.7,i),n.stroke()),l?(n.fillStyle="#fff",n.beginPath(),n.arc(e,i,r*.55,0,7),n.fill(),n.lineWidth=Math.max(1.5,r*.26),n.beginPath(),n.arc(e,i,r*.55,0,7),n.stroke()):o.terminus||(n.beginPath(),n.moveTo(e,i),n.lineTo(e+s*r*.85,i),n.stroke());const c=e+s*r*1.35;n.textAlign=s<0?"right":"left",n.textBaseline="middle";let f=[t];if(t.length>17&&t.includes(" ")){const _=t.split(" ");let d=1,m=1/0;for(let S=1;S<_.length;S++){const v=Math.abs(_.slice(0,S).join(" ").length-_.slice(S).join(" ").length);v<m&&(m=v,d=S)}f=[_.slice(0,d).join(" "),_.slice(d).join(" ")]}let h=r*(f.length>1?1:1.18);const u=(o.room||1e9)-r*1.5;n.font=`400 ${h}px ${se}`;let p=Math.max(...f.map(_=>n.measureText(_).width));p>u&&(h*=u/p,n.font=`400 ${h}px ${se}`,p=u);const g=f.length>1?h*.52:0;if(o.current){const _=s<0?c-p-r*.5:c-r*.5,d=f.length>1?r*2.5:r*1.8;n.fillStyle=I2,n.fillRect(_,i-d/2,p+r,d),n.fillStyle="#fff"}else n.fillStyle=o.odd?"#5a0d14":_c;o.current&&o.blank||f.forEach((_,d)=>n.fillText(_,c,i+r*.06+(f.length>1?d?g:-g:0))),k2(n,t,c+s*(p+r*(o.current?1.1:.7)),i,s,r,o.lo??-1e9,o.hi??1e9)}function Qc(n,t,e,i,s={}){n.fillStyle=U2,n.fillRect(0,0,t,e);const r=Math.max(3,t*.022);n.strokeStyle="#5f6467",n.lineWidth=r,n.strokeRect(r/2,r/2,t-r,e-r);const o=t*.075;n.fillStyle=_c,n.textAlign="left",n.textBaseline="alphabetic",n.font=`400 ${e*.03}px ${oe}`,n.fillText("Northern line",o,e*.052),ye(n,`${sr(s.dir)} platform ${ps(s.dir)}`,t-o*2,e*.047,se),n.fillText(`${sr(s.dir)} platform ${ps(s.dir)}`,o,e*.102),n.strokeStyle="#9aa0a3",n.lineWidth=Math.max(1,e*.003),n.beginPath(),n.moveTo(o,e*.128),n.lineTo(t-o,e*.128),n.stroke();const a=e*.17,l=e*.965,c=N2(i),f=Math.min(e*.052,(l-a)/Math.max(1,c)),h=Math.min(f*.6,t*.03),u=t*.37,p=t*.57,g=u-t*.05,_=t*.95-p,d=Math.max(2,h*.42),m=b=>{n.strokeStyle="#000",n.lineWidth=d,n.lineJoin="round",n.lineCap="butt",n.beginPath(),b.forEach((T,E)=>E?n.lineTo(T[0],T[1]):n.moveTo(T[0],T[1])),n.stroke()},S=s.odd||new Set;let v=a+f*.5,M=!0;const A=i.length===1;i.forEach((b,T)=>{const E=i[T+1];if(b.type==="trunk"){const y=A||T>0?1:-1,x=i[T-1],w=x&&x.rejoin?v-f:v,P=v+f*(b.stations.length-1);m([[u,w],[u,E?P+f*.5:P]]),b.stations.forEach((L,D)=>{const N=M&&D===0;ul(n,L,u,v,y,h,{current:N,blank:N&&b.hideCurrent,circle:N,terminus:!E&&D===b.stations.length-1,odd:S.has(L),room:y<0?g:t*.95-u,lo:t*.045,hi:t*.955}),v+=f}),M=!1}else{const y=Math.max(b.left.length,b.right.length),x=v-f*.5,w=v+f*(y-1),P=v+f*(b.left.length-1),L=v+f*(b.right.length-1);if(m([[u,x],[u,b.rejoin?w+f:P]]),m([[u,x],[u+h*.8,x+f*.12],[p-h*.8,x+f*.12],[p,x+f*.45],[p,b.rejoin?w+f*.45:L]]),b.rejoin&&m([[p,w+f*.45],[p-h*.8,w+f*.82],[u+h*.8,w+f*.82],[u,w+f]]),b.left.forEach((D,N)=>ul(n,D,u,v+f*N,-1,h,{terminus:!b.rejoin&&N===b.left.length-1,odd:S.has(D),room:g,lo:t*.045,hi:t*.955})),b.right.forEach((D,N)=>ul(n,D,p,v+f*N,1,h,{terminus:!b.rejoin&&N===b.right.length-1,odd:S.has(D),room:_,lo:t*.045,hi:t*.955})),b.spur&&b.left.includes(b.spur.at)){const D=v+f*b.left.indexOf(b.spur.at),N=(u+p)/2;m([[u,D+f*.5],[N-h*.6,D+f*.5],[N,D+f*.68],[N,D+f*1]]),m([[N-h*.7,D+f*1],[N+h*.7,D+f*1]]),n.fillStyle=_c,n.textAlign="center",n.textBaseline="top",n.font=`400 ${h*.95}px ${se}`,b.spur.name.replace(" East",`
East`).split(`
`).forEach((k,B)=>n.fillText(k,N,D+f*1.12+B*h*1.05))}v=w+f*(b.rejoin?2:1)}})}const{edgware:Vs,barnet:Md,charingX:Zs,bank:bd,morden:Td,battersea:Ed}=Sd,Ur=n=>n.slice().reverse(),hl=[{type:"trunk",stations:["Kennington"]},{type:"split",left:Td,right:Ed,rejoin:!1,labels:["to Morden","to Battersea Power Station"]}],Nu={type:"split",left:Zs,right:bd,rejoin:!0,labels:["via Charing Cross","via Bank"]},O2={type:"split",left:Ur(Md),right:Ur(Vs),rejoin:!1,labels:["High Barnet branch","Edgware branch"],spur:oa};function ro(n,t){const e=Vs.indexOf(n),i=Zs.indexOf(n),s=o=>({...o,left:o.left&&o.left.slice(),right:o.right&&o.right.slice(),stations:o.stations&&o.stations.slice()});let r;return t==="north"?e>=0?r=[{type:"trunk",stations:Ur(Vs.slice(0,e+1))}]:n==="Camden Town"?r=[{type:"trunk",stations:["Camden Town",...Ur(Vs)]}]:r=[{type:"trunk",stations:[...Ur(Zs.slice(0,Math.max(0,i)+1)),"Camden Town"]},O2]:e>=0?r=[{type:"trunk",stations:[...Vs.slice(e),"Camden Town"]},Nu,...hl]:n==="Camden Town"?r=[{type:"trunk",stations:["Camden Town"]},Nu,...hl]:r=[{type:"trunk",stations:[...Zs.slice(Math.max(0,i)),"Kennington"]},hl[1]],r.map(s)}function F2(n,t){const e=Zs.includes(n);return t==="north"?e?[["Edgware",""],["High Barnet",""],["Edgware",""],["Mill Hill East",""]]:[["Edgware",""],["Edgware",""],["Golders Green",""]]:e?[["Battersea Power Station",""],["Kennington",""],["Morden",""]]:[["Morden","via Bank"],["Kennington","via Charing Cross"],["Battersea Power Station","via Charing Cross"],["Morden","via Bank"]]}function wd(n,t,e=""){const i=ro(n,t);if(i[0].stations.length>1)return i[0].stations[1];const s=i[1];return s?t==="north"?e==="High Barnet"?s.left[0]:s.right[0]:e==="via Bank"?s.right[0]:s.left[0]:null}const z2=n=>{const t=Ta[n];if(!t)return"";const e=t.map(i=>i==="rail"?"National Rail services":i==="dlr"||i==="elizabeth"?`the ${Uu[i]}`:`the ${Uu[i]} line`);return`Change here for ${e.length>1?`${e.slice(0,-1).join(", ")} and ${e[e.length-1]}`:e[0]}.`};function B2(n,t){const e=[],i=s=>{s&&s!==n&&!e.includes(s)&&e.push(s)};return ro(n,t).forEach((s,r)=>{s.type==="trunk"?(r===0&&i(s.stations[1]),i(s.stations[s.stations.length-1])):s.rejoin?s.labels.forEach(o=>i(o.replace("via ",""))):(i(s.left[s.left.length-1]),i(s.right[s.right.length-1]))}),e}function H2(n,t,e=""){return n==="Camden Town"?t==="north"?"Change here for the High Barnet branch.":e==="via Bank"?"Change here for trains via Charing Cross.":"Change here for trains via Bank.":z2(n)}function G2(n,t,e,i=""){const s=wd(n,t,i||e)||n,r=H2(n,t,i);return`This is ${n}. ${r?`${r} `:""}This is a Northern line train to ${e}${i?` ${i}`:""}. The next station is ${s}. The doors will not open at this station.`}const V2=n=>`This is ${n}. The next station is ${n}. The doors will not open at this station.`;function aa(n,t,e){const i=[];if(n.forEach((s,r)=>{if(s.type==="trunk")i.push({arr:s.stations,prev:null,si:r});else{const o=n[r-1]?n[r-1].stations[n[r-1].stations.length-1]:null;i.push({arr:s.left,prev:o,si:r},{arr:s.right,prev:o,si:r})}}),t==="ghost"){for(const[s,r,o]of e.shuffle(Kc))for(const{arr:a,prev:l}of i)for(let c=0;c<a.length;c++){const f=c===0?l:a[c-1];if(f===r&&a[c]===o||f===o&&a[c]===r)return a.splice(c,0,s),"ghost"}return null}if(t==="swap"){const s=i.filter(a=>a.arr.length>=4);if(!s.length)return null;const{arr:r}=e.pick(s),o=e.int(1,r.length-3);return[r[o],r[o+1]]=[r[o+1],r[o]],"swap"}if(t==="repeat"){const s=n[0].stations;for(let r=1;r<Math.min(4,s.length);r++)s[r]=s[0];return s.length>1?"repeat":null}return t==="missing"?(n[0].hideCurrent=!0,"missing"):null}function Ad(n,t,e){const i=r=>r.join(", "),s=[`Northern line. ${sr(t)} platform ${ps(t)}.`];return e.forEach((r,o)=>{if(r.type==="trunk"){const a=o===0?r.stations.slice(1):r.stations;o===0&&s.push(r.hideCurrent?"This station: (the box is blank).":`This station: ${r.stations[0]}.`),a.length&&s.push(`${o===0?"Then":"Then on to"} ${i(a)}.`)}else{let a=i(r.left);r.spur&&r.left.includes(r.spur.at)&&(a+=` (and ${r.spur.name}, from ${r.spur.at})`);const l=c=>c[0].toUpperCase()+c.slice(1);s.push(`${l(r.labels[0])}: ${a}. ${l(r.labels[1])}: ${i(r.right)}.`)}}),s.join(" ")}function W2(n,t=[]){const e=s=>s.join(", "),i=t.length?` Also marked: ${e(t.map(s=>s[0]))}.`:"";return`Northern line. You are here: ${n}. Edgware branch: ${e(Vs)}. High Barnet branch: ${e(Md)} (and ${oa.name}). Then Camden Town. Via Charing Cross: ${e(Zs)}. Via Bank: ${e(bd)}. Then Kennington. To Morden: ${e(Td)}. To Battersea Power Station: ${e(Ed)}.${i}`}const yi=Ut.W/2;function Rd(n){const t=n.env.seenNotices||new Set,e=Au.filter(i=>!t.has(i.key));return n.rng.pick(e.length?e:Au)}const vc=3,la={diagram:[200,300],notice:[168,216],board:gc,legend:[220,54],poster:[104,164]};function q2(n,t,e,i,s=yi){const{b:r,sheet:o,rng:a}=n,l=n.posterPool||(n.posterPool=[]);let c;if(l.length<(n.posterCap||vc)){const h=a.chance(Math.min(.7,(n.env.wrong||0)*.17));let u;c={uv:o.add(la.poster[0],la.poster[1],(g,_,d)=>{u=io(g,_,d,a,h)}),text:`${u.headline}. ${u.strap}.`},l.push(c)}else c=l[a.int(0,l.length-1)];const f=Hi(r,"sheet",t,e,s,.52,.64,1,c.uv,null,.045);o2(r,t,e,s-.01,.52,.64,1),i.push({...f,r:4.2,label:"read poster",title:"POSTER",text:c.text})}function ku(n,t,e,i,s=yi){const{b:r,sheet:o,rng:a}=n,l=Rd(n),c=o.add(168,216,(h,u,p)=>dd(h,u,p,l,a)),f=Hi(r,"sheet",t,e,s,.86,.44,.565,c,{tint:[1.08,1.08,1.08]},.045);i.push({...f,r:4.2,label:"read notice",title:l.title,text:l.text,clue:!0,key:l.key,onRead:h=>h.story.noticeRead(l.key)})}function Ou(n,t,e,i,s=yi){i.push(C2(n,t,e,s,Yc(_n(n),n.env)))}const dl=.95,No=2,Fu=.25;function X2(n,t,e){const{b:i}=n;Hi(i,"atlas",t,e,yi-Fu+.03,0,dl,No,Ot("door"),null,.03);const s=Vt("steelDark"),[r,,o]=Se(t,0,0);i.place(r,t.y,o,t.yaw);const a=e*yi,l=e*(yi-Fu),c=.06,f=-dl/2-c,h=dl/2+c,u=No+c;i.quad("atlas",[l,0,f],[l,0,f+c],[l,u,f+c],[l,u,f],[-e,0,0],s),i.quad("atlas",[l,0,h-c],[l,0,h],[l,u,h],[l,u,h-c],[-e,0,0],s),i.quad("atlas",[l,No,f],[l,No,h],[l,u,h],[l,u,f],[-e,0,0],s),i.quad("atlas",[a,0,f],[l,0,f],[l,u,f],[a,u,f],[0,0,-1],s),i.quad("atlas",[l,0,h],[a,0,h],[a,u,h],[l,u,h],[0,0,1],s),i.quad("atlas",[a,u,f],[l,u,f],[l,u,h],[a,u,h],[0,1,0],s),i.setXf(null)}function zu(n,t,e,i,s,r,o){Hi(n.b,i==="extinguisher"?"cut":"atlas",t,e,yi,s,r,o,Ot(i),null,.04)}function $2(n,t,e,i){const{b:s,sheet:r,rng:o}=n,a=o.pick(["TO THE TRAINS","NO EXIT","TO THE TRAINS","PASSENGERS ONLY"]),l=r.add(220,54,(f,h,u)=>Wc(f,h,u,a,n.theme,null)),c=Hi(s,"sheet",t,e,yi,.62,1.5,.37,l,null,.025);i.push({...c,r:4,label:"read tiles",title:"TILED LEGEND",text:a})}function Y2(n,t,e,i,s,r,o,a,l=.04){const c=Ut.W/2,f=Ut.spring,h=Ut.crown-f,u=y=>{if(y<=f)return{X:c,nx:1,ny:0};const x=Math.min(1,(y-f)/h),w=c*Math.sqrt(1-x*x),P=w/(c*c),L=(y-f)/(h*h),D=Math.hypot(P,L)||1;return{X:w,nx:P/D,ny:L/D}},p=[],g=10,_=o/g;let d=s,m=0;p.push({y:d,...u(d)});for(let y=1;y<=g;y++){const x=_*y;for(;m<x;){const P=u(d),L=u(d+.005);m+=Math.hypot(L.X-P.X,.005),d+=.005}p.push({y:d,...u(d)})}const[S,,v]=Se(e,0,0);n.place(S,e.y,v,e.yaw);const M=i>0?-r/2:r/2,A=-M,b=(y,x)=>[i*(y.X-l*y.nx),y.y-l*y.ny,x];for(let y=0;y<g;y++){const x=p[y],w=p[y+1],P=a[1]+(a[3]-a[1])*(y/g),L=a[1]+(a[3]-a[1])*((y+1)/g),D=[-i*(x.nx+w.nx)/2,-(x.ny+w.ny)/2,0];n.quad(t,b(x,M),b(x,A),b(w,A),b(w,M),D,[a[0],P,a[2],L])}n.setXf(null);const T=p[g>>1],E=Se(e,i*(T.X-l),T.y);return{x:E[0],y:E[1],z:E[2]}}function Z2(n,t,e,i,s=yi){const{b:r,sheet:o,rng:a,env:l}=n,c=a.chance(.5)?"north":"south",f=ro(l.station,c);a.chance(Math.min(.8,(l.wrong||0)*.2))&&aa(f,a.pick(["ghost","ghost","swap","repeat"]),a);const h=o.add(200,300,(p,g,_)=>Qc(p,g,_,f,{station:l.station,dir:c})),u=Y2(r,"sheet",t,e,.6,.9,1.35,h,.04);i.push({...u,r:5,label:"read line diagram",title:"LINE DIAGRAM",text:Ad(l.station,c,f)})}const j2=1.55,Bu={notice:.22,board:.4};function K2(n,t,e){const{rng:i}=n,s=[],r=t.every(E=>Math.abs(E.yaw)<1e-6&&Math.abs(E.y-t[0].y)<1e-6),o=e[e.length-1]-e[0];if(!r||o<5.5)return s;const a=[];for(let E=2.2;E<=o-2.2;E+=j2)a.push(E);let l=!1,c=!1,f=!1,h=!1;const u=[],p=[],g=(E,y,x,w,P)=>p.push({prio:E,fn:y,kind:x,f:w,side:P}),_={[-1]:new Set,1:new Set},d=(E,y)=>![y-1,y,y+1].some(x=>_[E].has(x))&&!_[-E].has(y),m=(E,y,x,w,P)=>{const L={x:0,y:0,z:a[y],yaw:0};_[E].add(y),g(x,()=>P(n,L,E,s),w,L,E)},S=i.chance(n.env.noticeChance??Bu.notice),v=_n(n).chance(n.env.boardChance??Bu.board),M=_n(n);for(const E of[-1,1])for(let y=0;y<a.length;y++){const x=a[y],w={x:0,y:0,z:x,yaw:0},P=i.next(),L=d(E,y);if(L&&S&&!l&&P<.3){m(E,y,1,"notice",ku),l=!0;continue}if(L&&P<.1&&!f){m(E,y,0,"diagram",Z2),f=!0;continue}P<.5?L?m(E,y,4,"poster",q2):u.push([E,y]):P<.56&&x>3&&x<o-3?g(5,()=>X2(n,w,E)):P<.62?L&&v&&!h?(m(E,y,2,"board",Ou),h=!0):u.push([E,y]):P<.67&&L&&!c&&x<o-3?(m(E,y,3,"legend",$2),c=!0):P<.72?g(5,()=>zu(n,w,E,"grille",.25,.5,.5)):P<.76?g(5,()=>zu(n,w,E,"extinguisher",.75,.45,.45)):u.push([E,y])}const A=(E,y,x,w)=>{const P=u.filter(([D,N])=>d(D,N)),L=p.filter(D=>D.kind==="poster");if(P.length){const D=P[w(P.length)];u.splice(u.indexOf(D),1),m(D[0],D[1],E,y,x)}else if(L.length){const D=L[w(L.length)];D.prio=E,D.kind=y,D.fn=()=>x(n,D.f,D.side,s)}};S&&!l&&A(1,"notice",ku,E=>i.int(0,E-1)),v&&!h&&A(2,"board",Ou,E=>M.int(0,E-1)),p.sort((E,y)=>E.prio-y.prio);const b=p.filter(E=>E.kind&&E.kind!=="poster").map(E=>la[E.kind]),T=n.sheet.room(b.concat(Array(vc).fill(la.poster)))-b.length;n.posterCap=Math.max(1,Math.min(vc,T));for(const E of p)E.fn();return s}function J2(n,t,e){return n.sheet?K2(n,t,e):[]}const jn=.5;function Q2(n,t=3.4,e=40){const{b:i}=n,s=Ut.W/2+.1,r=Ut.crown+.1,o={emit:0};i.quad("gate",[-s,0,.06],[s,0,.06],[s,r,.06],[-s,r,.06],[0,0,1],Vt("blackout"),o);const a=Ot("gate"),l={emit:.34};for(const[c,f]of[[-s,0],[0,s]])i.quad("gate",[c,0,jn],[f,0,jn],[f,r,jn],[c,r,jn],[0,0,1],a,l);return i.box("gate",-.035,0,jn-.02,.035,r,jn+.03,Vt("steelDark"),{emit:.3},"xXZ"),i.box("gate",-.09,1.02,jn+.03,.09,1.16,jn+.07,Vt("metal"),{emit:.5},"xXyYZ"),{x0:-s,x1:s,z0:t,z1:e,gate:!0,fire:(c,f)=>c.director.commit(f)}}const Hu=[-(Ut.W/2+.2),jn+.25,Ut.W/2+.2,jn+.25];function Cd(n,t){const e=t.wrong||0;return{dark:n.chance(.03+.05*e),faulty:n.chance(.22+.1*e)?n.int(0,3):-1}}function Pd(n,t){const{b:e,p:i}=n,s=Cn(e,t,Ut,{floor:Ot("floor"),u0:i.u0||0});e.addPortal(0,0,0,0);const r=t[t.length-1];e.addPortal(r.x,r.y,r.z,r.yaw),ei(e,t[0],Ut.crown),hd(e,t,s.dist,Ut.crown,i.lights);const o=J2(n,t,s.dist),a={};return n.env.gate&&(a.zones=[Q2(n,3.4,s.length+1)]),{cells:s.cells,walls:s.walls,items:o,frames:t,extra:a}}const ty={type:"corridor",plan(n,t){const e=t.tiny?4:t.short?6:t.len||n.pick([8,12,12,16]);return{p:{len:e,lights:Cd(n,t)},exits:[{x:0,y:0,z:e,yaw:0}],box:[-1.9,-.4,0,1.9,3.3,e]}},build(n){return Pd(n,$v(n.p.len,1))}},ji=4.5,ey={type:"bend",plan(n,t){const e=t.turn||n.sign();return{p:{dir:e,lights:Cd(n,t)},exits:[{x:e*ji,y:0,z:ji,yaw:e*Math.PI/2}],box:e>0?[-1.9,-.4,0,ji,3.3,ji+1.9]:[-ji,-.4,0,1.9,3.3,ji+1.9]}},build(n){return Pd(n,Yv(ji,n.p.dir*Math.PI/2,.9))}},yr=(n,t,e)=>(t.x-n.x)*(e.y-n.y)-(e.x-n.x)*(t.y-n.y);function ny(n,t,e,i){const s=n.x-i.x,r=n.y-i.y,o=t.x-i.x,a=t.y-i.y,l=e.x-i.x,c=e.y-i.y;return(s*s+r*r)*(o*c-l*a)-(o*o+a*a)*(s*c-l*r)+(l*l+c*c)*(s*a-o*r)}function iy(n,t,e=60){const i=n.length,s=t.map(([r,o,a])=>yr(n[r],n[o],n[a])>=0?[r,o,a]:[r,a,o]).filter(([r,o,a])=>Math.abs(yr(n[r],n[o],n[a]))>1e-12);for(let r=0;r<e;r++){const o=new Map;s.forEach((c,f)=>{for(let h=0;h<3;h++){const u=c[h],p=c[(h+1)%3],g=u<p?u*i+p:p*i+u,_=o.get(g);_?_.push(f):o.set(g,[f])}});const a=new Set;let l=0;for(const[c,f]of o){if(f.length!==2||a.has(f[0])||a.has(f[1]))continue;const h=Math.floor(c/i),u=c%i,p=s[f[0]],g=s[f[1]],_=p.find(v=>v!==h&&v!==u),d=g.find(v=>v!==h&&v!==u),[m,S]=yr(n[h],n[u],n[_])>0?[h,u]:[u,h];ny(n[m],n[S],n[_],n[d])<=1e-10||yr(n[_],n[m],n[d])<=1e-12||yr(n[d],n[S],n[_])<=1e-12||(s[f[0]]=[_,m,d],s[f[1]]=[d,S,_],a.add(f[0]),a.add(f[1]),l++)}if(!l)break}return s}function sy(n,t,e){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){const o=n[s],a=n[r];o.y>e!=a.y>e&&t<(a.x-o.x)*(e-o.y)/(a.y-o.y)+o.x&&(i=!i)}return i}function ry(n,t,e){let i=1/0;for(let s=0,r=n.length-1;s<n.length;r=s++){const o=n[s],a=n[r],l=a.x-o.x,c=a.y-o.y,f=l*l+c*c;let h=f>0?((t-o.x)*l+(e-o.y)*c)/f:0;h=h<0?0:h>1?1:h,i=Math.min(i,Math.hypot(t-(o.x+l*h),e-(o.y+c*h)))}return i}function Ld(n,t,e,i,s=[]){const r=[{x:n,y:e}];for(const o of s.slice().sort((a,l)=>a[0].x-l[0].x)){r.push({x:o[0].x,y:e});for(const a of o)a.y>e+1e-6&&r.push({x:a.x,y:a.y});r.push({x:o[o.length-1].x,y:e})}return r.push({x:t,y:e},{x:t,y:i},{x:n,y:i}),r.filter((o,a)=>a===0||Math.hypot(o.x-r[a-1].x,o.y-r[a-1].y)>1e-6)}function Ea(n,t,e,i,s={}){const r=s.layer||"tile",o=s.uv||((d,m)=>[d/6,.004+Math.max(0,m)/3.63*.992]),a=[Math.sin(t.yaw)*e,0,Math.cos(t.yaw)*e],l=s.grid??1.1,c=[];i.forEach((d,m)=>{const S=i[(m+1)%i.length];c.push({x:d.x,y:d.y});const v=Math.hypot(S.x-d.x,S.y-d.y),M=l>0&&v>1.5*l?Math.ceil(v/l):1;for(let A=1;A<M;A++){const b=A/M,T=(A%2?7e-4:-7e-4)/v;c.push({x:d.x+(S.x-d.x)*b-(S.y-d.y)*T,y:d.y+(S.y-d.y)*b+(S.x-d.x)*T})}});const f=[];if(l>0){let d=1/0,m=-1/0,S=1/0,v=-1/0;for(const b of c)d=Math.min(d,b.x),m=Math.max(m,b.x),S=Math.min(S,b.y),v=Math.max(v,b.y);const M=Math.max(1,Math.round((m-d)/l)),A=Math.max(1,Math.round((v-S)/l));for(let b=1;b<M;b++)for(let T=1;T<A;T++){const E=(Ye(b*73+11,T*151+5)/4294967296-.5)*.3,y=(Ye(b*199+3,T*37+17)/4294967296-.5)*.3,x=d+(m-d)*(b+(T%2?.25:-.25)+E)/M,w=S+(v-S)*(T+y)/A;s.keep&&!s.keep(x,w)||!sy(c,x,w)||ry(c,x,w)<l*.3||f.push([new ae(x,w)])}}const h=c.map(d=>new ae(d.x,d.y)),u=Hc.triangulateShape(h,f),p=h.concat(f.map(d=>d[0])),g=iy(p,u),_=d=>Se(t,d.x,d.y);for(const[d,m,S]of g){const v=p[d],M=p[m],A=p[S];n.tri(r,_(v),_(M),_(A),a,o(v.x,v.y),o(M.x,M.y),o(A.x,A.y),s.o)}return g.length}const ko=.05,Gu=.004;function Dd(n,t){const{x0:e,x1:i,z0:s,z1:r,H:o}=t,a=t.y||0,l=t.portals||[],c=[],f={S:{f:{x:0,y:a,z:s,yaw:0},facing:1,lat:_=>_,t0:e,t1:i,pt:_=>[_,s]},N:{f:{x:0,y:a,z:r,yaw:0},facing:-1,lat:_=>_,t0:e,t1:i,pt:_=>[_,r]},W:{f:{x:e,y:a,z:0,yaw:Math.PI/2},facing:1,lat:_=>-_,t0:s,t1:r,pt:_=>[e,_]},E:{f:{x:i,y:a,z:0,yaw:Math.PI/2},facing:-1,lat:_=>-_,t0:s,t1:r,pt:_=>[i,_]}};for(const _ of Object.keys(f)){const d=f[_],m=l.filter(T=>T.wall===_).sort((T,E)=>T.at-E.at),S=d.lat(d.t0-ko),v=d.lat(d.t1+ko),M=m.map(T=>Ut.map(E=>({x:d.lat(T.at)+E.x+E.nx*Gu,y:E.y+E.ny*Gu}))),A=Ld(Math.min(S,v),Math.max(S,v),-ko,o+ko,M);Ea(n,d.f,d.facing,A,{layer:t.layer||"tile",grid:1,uv:t.uv||((T,E)=>[(T-3.1)/6+.5,.004+.992*E/3.63])});let b=d.t0;for(const T of m)c.push([...d.pt(b),...d.pt(T.at-Ut.W/2)]),b=T.at+Ut.W/2;c.push([...d.pt(b),...d.pt(d.t1)])}const h=Math.max(1,Math.round(i-e)),u=Math.max(1,Math.round(r-s));n.grid("atlas",[e,a,s],[i-e,0,0],[0,0,r-s],h,u,[0,1,0],t.floor||Ot("floor"),null,!0),n.grid("atlas",[e,a+o,s],[i-e,0,0],[0,0,r-s],h,u,[0,-1,0],t.ceil||Ot("concrete"),t.ceilOpts||null,!0);const p=(e+i)/2;return{cells:[{ax:p,az:s,bx:p,bz:r,hw:(i-e)/2,ya:a,yb:a}],walls:c.filter(_=>Math.hypot(_[2]-_[0],_[3]-_[1])>.01)}}const $r=512,Yr=256,wa={board:[0,0,384,128],board2:[0,128,384,128],clock:[384,0,128,128],clockBack:[384,128,128,128]};let Oo=null,Nt=null,ss=null,Id=null;function Ud(){if(Oo)return;Oo=gn($r,Yr),Nt=Oo.getContext("2d");const n=gn(4,4),t=n.getContext("2d");t.fillStyle="rgba(0,0,0,0.78)",t.fillRect(0,0,4,1),t.fillRect(0,0,1,4),Id=Nt.createPattern(n,"repeat"),ss=new ya(Oo),ss.colorSpace=pn,ss.generateMipmaps=!1,ss.minFilter=ze,ss.magFilter=ze}function oy(){return Ud(),ss}function Zr(n){const[t,e,i,s]=wa[n],r=1;return[(t+r)/$r,1-(e+s-r)/Yr,(t+i-r)/$r,1-(e+r)/Yr]}function ay(n,t,e=1){const[i,s,r,o]=wa[n],a=o/4;return[(i+8)/$r,1-(s+a*(t+1)-1)/Yr,(i+8+(r-16)*e)/$r,1-(s+a*t+2)/Yr]}function Vu(n,t,e){const[i,s,r,o]=wa[n];Nt.save(),Nt.beginPath(),Nt.rect(i,s,r,o),Nt.clip(),Nt.fillStyle="#060504",Nt.fillRect(i,s,r,o),Nt.fillStyle="#ffab1a",Nt.font=`400 30px ${cs}`,Nt.textBaseline="middle";const a=o/4;t.slice(0,3).forEach((l,c)=>{const f=s+a*(c+.5)+2;Nt.textAlign="left",Nt.fillText(l.l||"",i+10,f,l.r?r-110:r-20),l.r&&(Nt.textAlign="right",Nt.fillText(l.r,i+r-10,f))}),Nt.textAlign="center",Nt.fillText(e||"",i+r/2,s+a*3.5+1,r-20),Nt.fillStyle=Id,Nt.fillRect(i,s,r,o),Nt.restore()}function Wu(n,t,e){const[i,s,r,o]=wa[n],a=i+r/2,l=s+o/2,c=r*.46;Nt.save(),Nt.beginPath(),Nt.rect(i,s,r,o),Nt.clip(),Nt.fillStyle="#1a1b1c",Nt.fillRect(i,s,r,o),Nt.fillStyle=e?"#e8e2cc":"#f2efe4",Nt.beginPath(),Nt.arc(a,l,c,0,7),Nt.fill(),Nt.strokeStyle="#14213d",Nt.lineWidth=3,Nt.beginPath(),Nt.arc(a,l,c-1.5,0,7),Nt.stroke(),Nt.strokeStyle="#111";for(let u=0;u<12;u++){const p=u/12*Math.PI*2,g=c*(u%3===0?.74:.82);Nt.lineWidth=u%3===0?4:2,Nt.beginPath(),Nt.moveTo(a+Math.sin(p)*g,l-Math.cos(p)*g),Nt.lineTo(a+Math.sin(p)*c*.9,l-Math.cos(p)*c*.9),Nt.stroke()}const f=(u,p,g,_)=>{const d=u*Math.PI*2;Nt.strokeStyle=_,Nt.lineWidth=g,Nt.lineCap="round",Nt.beginPath(),Nt.moveTo(a-Math.sin(d)*p*.15,l+Math.cos(d)*p*.15),Nt.lineTo(a+Math.sin(d)*p,l-Math.cos(d)*p),Nt.stroke()},h=(t%43200+43200)%43200;f(h/43200,c*.5,5,"#111"),f(h%3600/3600,c*.74,3.5,"#111"),f(Math.floor(h%60)/60,c*.8,1.6,"#b3261e"),Nt.fillStyle="#b3261e",Nt.beginPath(),Nt.arc(a,l,4,0,7),Nt.fill(),Nt.restore()}function ly(n){Ud(),Vu("board",n.rows||[],n.footer||""),Vu("board2",n.rows2||[],n.footer2||""),Wu("clock",n.tod||0,!1),Wu("clockBack",n.todBack||0,!0),ss.needsUpdate=!0}const ca="#16213f",yc="#1c3f94",Nd="#f6f6f1";function cy(n,t,e,i,s,r,o={}){n.save(),n.translate(e,i),n.rotate(s?-.87:.87),n.font=`400 ${r}px ${se}`,n.textBaseline="middle",n.textAlign="left";const a=t.split(" ");let l=[t];if(t.length>12&&a.length>1){let f=1,h=1/0;for(let u=1;u<a.length;u++){const p=Math.abs(a.slice(0,u).join(" ").length-a.slice(u).join(" ").length);p<h&&(h=p,f=u)}l=[a.slice(0,f).join(" "),a.slice(f).join(" ")]}const c=r*.9;if(o.current){const f=Math.max(...l.map(h=>n.measureText(h).width));n.fillStyle=yc,n.fillRect(c-r*.35,-r*.62*l.length,f+r*.7,r*1.24*l.length)}n.fillStyle=o.current?"#fff":o.odd?"#7a0f18":ca,l.forEach((f,h)=>n.fillText(f,c,(h-(l.length-1)/2)*r*1.05)),n.restore()}function kd(n,t,e,i={}){const{edgware:s,barnet:r,charingX:o,bank:a,morden:l,battersea:c}=Sd;n.fillStyle=Nd,n.fillRect(0,0,t,e);const f=Math.max(2,e*.03);n.strokeStyle="#5f6467",n.lineWidth=f,n.strokeRect(f/2,f/2,t-f,e-f),n.fillStyle="#000",n.fillRect(t*.845,e*.7,t*.14,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",ye(n,"Northern line",t*.125,e*.12,se),n.fillText("Northern line",t*.915,e*.805);const h=r.length,u=h+1+o.length,p=u+1+l.length,g=t*.03,_=t*.925/(p-1),d=D=>g+D*_,m=e*.44,S=e*.57,v=Math.max(2,e*.022),M=e*.054,A=Math.max(2,e*.022),b=D=>{n.strokeStyle="#000",n.lineWidth=A,n.lineJoin="round",n.beginPath(),D.forEach((N,k)=>k?n.lineTo(N[0],N[1]):n.moveTo(N[0],N[1])),n.stroke()},T=D=>d(D+1),E=D=>d(D*.93);b([[T(0),m],[d(p-1),m]]),b([[E(0),S],[d(h)-_*.75,S],[d(h),m]]),b([[d(h),m],[d(h)+_*.75,S],[d(u)-_*.75,S],[d(u),m]]),b([[d(u),m],[d(u)+_*.75,S],[d(u+2),S]]);const y=E(r.indexOf(oa.at)),x=(m+S)/2;b([[y,S],[y+_*.3,x]]),b([[y+_*.3-v,x],[y+_*.3+v,x]]),n.fillStyle=ca,n.textAlign="left",n.textBaseline="middle",n.font=`400 ${M*.82}px ${se}`,n.fillText(oa.name,y+_*.3+v*1.8,x);const w=i.current,P=(D,N,k,B,U={})=>{const R=!!Ta[D]||D===w||D==="Camden Town"||D==="Kennington";n.strokeStyle="#000",n.lineWidth=A*.7,R?(n.fillStyle=D===w?yc:"#fff",n.beginPath(),n.arc(N,k,v*1.35,0,7),n.fill(),n.stroke()):(n.beginPath(),n.moveTo(N,k),n.lineTo(N,k+(B?-v*1.6:v*1.6)),n.stroke()),cy(n,D,N,k+(B?-v*2.2:v*2.2),B,M,{current:D===w,odd:U.odd})};s.forEach((D,N)=>P(D,T(N),m,!0)),P("Camden Town",d(h),m,!0),o.forEach((D,N)=>P(D,d(h+1+N),m,!0)),P("Kennington",d(u),m,!0),l.forEach((D,N)=>P(D,d(u+1+N),m,!0)),r.forEach((D,N)=>P(D,E(N),S,!1)),a.forEach((D,N)=>P(D,d(h+1+N*.94+.2),S,!1)),c.forEach((D,N)=>P(D,d(u+1+N),S,!1));for(const[D,N]of i.ghosts||[]){const k=s.indexOf(N),B=r.indexOf(N),U=a.indexOf(N);k>=0?P(D,T(k+.5),m,!0,{odd:!0}):B>=0?P(D,E(B+.5),S,!1,{odd:!0}):U>=0&&P(D,d(h+1+(U+.5)*.94+.2),S,!1,{odd:!0})}const L=[[s,T],[["Camden Town"],()=>d(h)],[o,D=>d(h+1+D)]];for(const[D,N]of L){const k=D.indexOf(w);if(k<0)continue;const B=N(k);n.fillStyle=yc,n.beginPath(),n.moveTo(B,m+v*2.2),n.lineTo(B-v*1.6,m+v*4.6),n.lineTo(B+v*1.6,m+v*4.6),n.fill(),n.fillRect(B-M*3.4,m+v*4.5,M*6.8,M*1.5),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`400 ${M}px ${se}`,n.fillText("You are here",B,m+v*4.5+M*.8)}}function Od(n,t,e,{dir:i="north",arrow:s="right",list:r=""}={}){n.fillStyle=Nd,n.fillRect(0,0,t,e),n.fillStyle="#000",n.fillRect(0,0,t,e*.24),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle",n.font=`400 ${e*.15}px ${se}`,n.fillText("Northern line",e*.16,e*.13);const o=s!=="right";Vr(n,o?e*.42:t-e*.42,e*.58,e*.42,s,ca);const a=o?e*.8:e*.16,l=o?t-e*.16:t-e*.8,c=`${sr(i)} platform ${ps(i)}`;n.fillStyle=ca,n.textAlign=o?"left":"right",ye(n,c,l-a,e*(r?.3:.36),se),n.fillText(c,o?a:l,e*(r?.5:.6)),r&&(ye(n,r,l-a,e*.14,oe),n.fillText(r,o?a:l,e*.8)),n.strokeStyle="#5f6467",n.lineWidth=Math.max(1.5,e*.03),n.strokeRect(1,1,t-2,e-2)}const Fd=["North End","South Kentish Town","City Road","King William Street","Bull & Bush","Aldwych","Down Street","British Museum","York Road","Brompton Road"],qu={Hampstead:["Heath Street"],"Chalk Farm":["Adelaide Road"],"Mornington Crescent":["Seymour Street","Mornington Cresent"],"Camden Town":["Camden Road"],"Belsize Park":["Belsize"]};function fy(n,t){const e=[];for(let s=1;s<n.length-1;s++)/[a-z]/.test(n[s])&&/[a-z]/.test(n[s+1])&&n[s]!==n[s+1]&&e.push(s);if(!e.length)return n;const i=t.pick(e);return n.slice(0,i)+n[i+1]+n[i]+n.slice(i+2)}function tf(n,t,e){const i=Math.min(.7,t*.15);if(!e.chance(i))return n;const s=e.next()*Math.min(5,t+1);if(s<1)return fy(n,e);if(s<1.8){const r=e.int(1,n.length-2);return n.slice(0,r)+n.slice(r+1)}return s<2.8&&qu[n]?e.pick(qu[n]):e.pick(Fd)}const ef=n=>Fd.includes(n),qn=3.5,Zn=5,Xu=2.95;function Us(n,t,e,i,s,r,o,a){const l=Zn-.03;return n.quad(t,[e+s/2,i,l],[e-s/2,i,l],[e-s/2,i+r,l],[e+s/2,i+r,l],[0,0,-1],o,a),{x:e,y:i+r/2,z:l}}const uy={type:"junction",sheetSize:512,plan(n,t){const e=t.jkind||"signs",i=t.jlevel??0,s=Object.keys(Dr).filter(o=>Dr[o].level<=i&&Dr[o].level>=i-1),r=n.chance(.5);return{p:{kind:e,level:i,correct:n.int(0,1),defect:n.pick(s),lie:e==="announce"?n.chance(.3+.12*i):!1,dirs:r?["north","south"]:["south","north"],inverted:n.chance(.4)},exits:[{x:qn,y:0,z:Zn/2,yaw:Math.PI/2},{x:-qn,y:0,z:Zn/2,yaw:-Math.PI/2}],box:[-qn-.4,-.4,0,qn+.4,3.4,Zn+.4]}},build(n){const{b:t,p:e,sheet:i,rng:s,env:r}=n,o=Dd(t,{x0:-qn,x1:qn,z0:0,z1:Zn,H:Xu,portals:[{wall:"S",at:0},{wall:"E",at:Zn/2},{wall:"W",at:Zn/2}]});t.addPortal(0,0,0,0),t.addPortal(qn,0,Zn/2,Math.PI/2),t.addPortal(-qn,0,Zn/2,-Math.PI/2),ei(t,{x:0,y:0,z:0,yaw:0},Ut.crown);for(const S of[-1.7,1.7])_s(t,{x:S,y:0,z:2.2,yaw:Math.PI/2},Xu-.02,{power:.6,radius:6.5});const a=[],l={emit:1.25},c=[{cx:1.72,dir:"left",exit:0,to:e.dirs[0]},{cx:-1.72,dir:"right",exit:1,to:e.dirs[1]}];for(const S of c){const v=e.correct===S.exit;if(e.kind==="signs"){const M=v?null:e.defect,A=!!e.inverted,b=i.add(250,56,(E,y,x)=>ba(E,y,x,{dir:S.dir,defect:M,inverted:A})),T=Us(t,"sheet",S.cx,1.52,1.9,.425,b,l);a.push({...T,r:7,cone:.93,label:"read sign",title:"SIGN",text:_2(M,S.dir,A),junctionSign:!0})}else{const M=B2(r.station,S.to),A=i.add(280,84,(E,y,x)=>Od(E,y,x,{dir:S.to,arrow:S.dir,list:M.join("  ·  ")})),b=Us(t,"sheet",S.cx,1.44,1.9,.57,A,l),T=`Northern line · ${sr(S.to)} platform ${ps(S.to)} · ${M.join(", ")}`;a.push({...b,r:7,cone:.93,label:"read sign",title:"SIGN",text:S.dir==="left"?`← ${T}`:`${T} →`})}if(e.kind==="clock"){const M=!v,A=Us(t,"dyn",S.cx,2.08,.62,.62,Zr(M?"clockBack":"clock"),{emit:1.05});a.push({...A,r:7,cone:.95,label:"look at clock",title:"CLOCK",text:M?"The second hand is ticking backwards.":"The clock is keeping time."})}}const f=Us(t,"dyn",0,2.12,1.26,.42,Zr("board2"),{emit:1.15});a.push({...f,r:7,cone:.95,label:"read indicator",title:"INDICATOR",dynamic:"board2",text:""});const h=tf(r.station,r.wrong,s),u=i.add(200,92,(S,v,M)=>no(S,v,M,h)),p=Us(t,"sheet",0,1.42,1.24,.57,u,null);a.push({...p,r:6,cone:.95,label:"read name",title:"STATION",text:ef(h)?`${h}. There is no such station on this line.`:h});const g=Us(t,"cut",0,.62,.34,.68,Ot("helpPoint"),null);a.push({...g,r:3.2,label:"press help point",title:"HELP POINT",text:"",help:!0,onRead:(S,v,M)=>S.director.helpPoint(M)});const _=_n(n),d=o.walls;if(_.chance(r.boardChance??.2)){const S=_.sign(),v=jc(n,S*2.95,4.3,S*.63,md(_,r,e));a.push(v.item),d.push(...v.walls)}const m=[{x0:-qn,x1:qn,z0:.8,z1:Zn,fire:(S,v)=>S.director.enterJunction(v)}];return{cells:o.cells,walls:d,items:a,extra:{zones:m}}}},nt={cx:1.8,cy:1.15,R:3.6,edge:1.6,bed:-1.05,rails:[[-.72,.15],[.72,.15],[0,.2],[1.08,.22]]};nt.back=nt.cx-Math.sqrt(nt.R*nt.R-nt.cy*nt.cy);nt.th0=Math.PI+Math.asin(nt.cy/nt.R);nt.th1=-Math.asin((nt.cy-nt.bed)/nt.R);nt.sCrown=nt.R*(nt.th0-Math.PI/2);nt.wallBed=nt.cx+Math.sqrt(nt.R*nt.R-(nt.cy-nt.bed)**2);nt.track=(nt.edge+nt.wallBed)/2;function zd(n,t){const e=n-nt.cy;return nt.cx+t*Math.sqrt(Math.max(0,nt.R*nt.R-e*e))}const hy=9,dy=10,py=nt.R*(Math.PI/2-nt.th1);function $u(n,t,e,i){const s=[];for(let r=0;r<=e;r++){const o=n+(t-n)*r/e;s.push({x:nt.cx+nt.R*Math.cos(o),y:nt.cy+nt.R*Math.sin(o),nx:-Math.cos(o),ny:-Math.sin(o),v:i(o)})}return s}function my(n,t,e,i={}){const s=m=>e*m,r=$u(nt.th0,Math.PI/2,hy,m=>.502+.496*(nt.R*(nt.th0-m)/nt.sCrown)),o=$u(Math.PI/2,nt.th1,dy,m=>.002+.496*(nt.R*(Math.PI/2-m)/py)),a=Math.round(t/1.5);for(const m of[r,o])for(let S=0;S<a;S++){const v=t*S/a,M=t*(S+1)/a;for(let A=0;A<m.length-1;A++){const b=m[A],T=m[A+1],E=[s(b.nx),b.ny,0],y=[s(T.nx),T.ny,0],x=[(E[0]+y[0])/2,(E[1]+y[1])/2,0];n.quadN("ptile",[s(b.x),b.y,v],[s(b.x),b.y,M],[s(T.x),T.y,M],[s(T.x),T.y,v],x,E,E,y,y,[v/6,b.v,M/6,T.v])}}const l=[0,1,0],c=(m,S,v=0,M=1)=>ra(m,v,S?.5:0,M,S?1:.5),f=[[nt.back-.05,-.55,m=>c("floor",m)],[-.55,.55,m=>c("floor",m)],...i.plain?[[.55,.95,m=>c("floorDark",m,.5,.9)],[.95,1.05,m=>c("floorDark",m,.9,1)]]:[[.55,.95,()=>Ot("tactile")],[.95,1.05,()=>Vt("yellow")]],[1.05,1.45,m=>c("floorDark",m,.05,.45)],[1.45,nt.edge+.004,()=>Vt("edge")]],h=Math.round(t/.5);for(const[m,S,v]of f)for(let M=0;M<h;M++){const A=t*M/h,b=t*(M+1)/h;n.quad("atlas",[s(m),0,A],[s(S),0,A],[s(S),0,b],[s(m),0,b],l,v(M%2))}const u=Ot("mindgap");for(let m=4.5;m<t-3&&!i.plain;m+=6.5){const S=.85*e;n.quad("atlas",[s(1.07),.004,m-S],[s(1.07),.004,m+S],[s(1.43),.004,m+S],[s(1.43),.004,m-S],l,u)}const p=Math.round(t/2);for(let m=0;m<p;m++){const S=t*m/p,v=t*(m+1)/p;n.quad("atlas",[s(1.56),nt.bed,S],[s(1.56),nt.bed,v],[s(1.56),-.06,v],[s(1.56),-.06,S],[e,0,0],Ot("riser")),n.quad("atlas",[s(1.56),-.06,S],[s(nt.edge),-.06,S],[s(nt.edge),-.06,v],[s(1.56),-.06,v],[0,-1,0],Vt("black")),n.quad("atlas",[s(nt.edge),-.06,S],[s(nt.edge),-.06,v],[s(nt.edge),0,v],[s(nt.edge),0,S],[e,0,0],Vt("edge"))}const g=Ot("ballast");for(let m=0;m<Math.round(t);m++)for(const[S,v]of[[1.5,nt.track],[nt.track,nt.wallBed+.12]])n.quad("atlas",[s(S),nt.bed,m],[s(v),nt.bed,m],[s(v),nt.bed,m+1],[s(S),nt.bed,m+1],l,g);const _=Ot("rail"),d=Vt("steelDark");for(const[m,S]of nt.rails){const v=nt.track+m;for(let M=0;M<t;M+=3){const A=Math.min(t,M+3),b=nt.bed+S,T=.035;n.quad("atlas",[s(v-T),b,M],[s(v+T),b,M],[s(v+T),b,A],[s(v-T),b,A],l,_),n.quad("atlas",[s(v-T),nt.bed,M],[s(v-T),nt.bed,A],[s(v-T),b,A],[s(v-T),b,M],[-e,0,0],d)}}return{back:r,track:o}}const xe={hw:1.25,spring:.72,ring:.2,proud:.05,depth:1.2},Yu=12,Fo=5;function zo(n,t,e){const i=[];for(let s=0;s<=Fo;s++)i.push({x:n-t,y:e+(xe.spring-e)*s/Fo,ox:-1,oy:0});for(let s=1;s<Yu;s++){const r=Math.PI*(1-s/Yu);i.push({x:n+t*Math.cos(r),y:xe.spring+t*Math.sin(r),ox:Math.cos(r),oy:Math.sin(r)})}for(let s=Fo;s>=0;s--)i.push({x:n+t,y:e+(xe.spring-e)*s/Fo,ox:1,oy:0});return i}function Zu(n,t,e,i,s=!0){const r=y=>i*y,o=nt.track,a=nt.bed,l=a-.3,c=nt.cy+nt.R+.35,f=[zo(o,xe.hw+xe.ring*.5,l)];s&&f.push(Ut.map(y=>({x:y.x+y.nx*.004,y:y.y+y.ny*.004})));const h=Ld(nt.back-.45,nt.cx+nt.R+.35,l,c,f).map(y=>({x:r(y.x),y:y.y}));Ea(n,{x:0,y:0,z:t,yaw:0},e,h,{layer:"tile",grid:.6,uv:(y,x)=>[(y*i+3)/6,.004+.992*x/3.63]});const u=t+e*xe.proud,p=[0,0,e],g=a-.02,_=zo(o,xe.hw,g),d=zo(o,xe.hw+xe.ring,g),m=[ra("brick",0,0,.5,1),ra("brick",.5,0,1,1)],S=Vt("soot");for(let y=0;y<_.length-1;y++){const x=_[y],w=_[y+1],P=d[y+1],L=d[y];n.quad("atlas",[r(x.x),x.y,u],[r(w.x),w.y,u],[r(P.x),P.y,u],[r(L.x),L.y,u],p,m[y%2]);const D=[r((L.ox+P.ox)/2),(L.oy+P.oy)/2,0];n.quad("atlas",[r(L.x),L.y,u],[r(P.x),P.y,u],[r(P.x),P.y,t],[r(L.x),L.y,t],D,S)}const v=zo(o,xe.hw+.006,g),M=Ot("soot"),A=[[0,.22,.2],[.22,.55,.1],[.55,xe.depth,.04]];for(const[y,x,w]of A){const P=u-e*y,L=u-e*x;for(let R=0;R<v.length-1;R++){const z=v[R],H=v[R+1],X=[r(-(z.ox+H.ox)/2),-(z.oy+H.oy)/2,0];n.quad("atlas",[r(z.x),z.y,P],[r(H.x),H.y,P],[r(H.x),H.y,L],[r(z.x),z.y,L],X,M,{emit:w})}const D=o-xe.hw-.01,N=o+xe.hw+.01,k=y===0?t+e*.2:P,B=a-.003;n.quad("atlas",[r(D),B,k],[r(N),B,k],[r(N),B,L],[r(D),B,L],[0,1,0],Ot("ballast"),{emit:w*1.2});const U=y===0?t:P;for(const[R,z]of nt.rails){const H=o+R,X=a+z,Y=.035;n.quad("atlas",[r(H-Y),X,U],[r(H+Y),X,U],[r(H+Y),X,L],[r(H-Y),X,L],[0,1,0],Ot("rail"),{emit:w*2.4})}}const b=u-e*xe.depth,T=xe.spring+xe.hw+.06,E=xe.hw+.06;n.quad("atlas",[r(o-E),g,b],[r(o+E),g,b],[r(o+E),T,b],[r(o-E),T,b],p,Vt("blackout"),{emit:0})}function Ve(n,t,e,i,s,r,o,a,l,c,f=.04){return us(n,t,e,i,s,r,o,a,l,c,f,1)}function us(n,t,e,i,s,r,o,a,l,c,f=.05,h=4){const u=-i*e*r/2,p=_=>e*(zd(_,i)-i*f);for(let _=0;_<h;_++){const d=o+(a-o)*_/h,m=o+(a-o)*(_+1)/h,S=l[1]+(l[3]-l[1])*_/h,v=l[1]+(l[3]-l[1])*(_+1)/h,M=p(d),A=p(m),b=(d+m)/2-nt.cy,T=-i*Math.sqrt(Math.max(0,nt.R*nt.R-b*b))/nt.R;n.quad(t,[M,d,s+u],[M,d,s-u],[A,m,s-u],[A,m,s+u],[e*T,-b/nt.R,0],[l[0],S,l[2],v],c)}const g=(o+a)/2;return{x:p(g),y:g,z:s}}function Bd(n,t,e,i){const s=_=>t*_,r=nt.back+.14,o=nt.back+.6,a=e-.9,l=e+.9,c=Ot("bench"),f=Vt("steelDark"),h=Math.min(s(r),s(o)),u=Math.max(s(r),s(o));n.box("cut",h,.4,a,u,.46,l,c,null,"xXyYzZ");const p=s(r+.02),g=s(r+.07);n.box("cut",Math.min(p,g),.56,a,Math.max(p,g),.95,l,c,null,"xXYzZ");for(const _ of[a+.12,e,l-.12])n.box("atlas",h+.05,0,_-.03,u-.05,.4,_+.03,f,null,"xXzZ");i.push([s(o+.05),a,s(o+.05),l],[s(r),a,s(o+.05),a],[s(r),l,s(o+.05),l])}function gy(n,t,e,i,s=null){const{b:r,p:o,sheet:a,rng:l,env:c}=n,f=c.wrong||0,h=c.station,u=o.dir,p=ro(h,u);let g=null;if(l.chance(Math.min(.85,f*.22))){const x=l.weighted([["ghost",4],["swap",2],["repeat",f>=2?1.5:0],["missing",f>=3?1.5:0]]);g=aa(p,x,l)||aa(p,"swap",l)}const _=a.add(360,540,(x,w,P)=>Qc(x,w,P,p,{dir:u})),d=Math.min(t*.42,13),m=us(r,"sheet",e,1,d,1.5,1.14,3.39,_,null,.05,5);i.push({...m,r:13,cone:.93,label:"read line diagram",title:"LINE DIAGRAM",text:Ad(h,u,p),fault:g,onRead:x=>{x.state.diagramsRead=(x.state.diagramsRead||0)+1}}),s&&s();const S=[0,1].map(()=>{const x=tf(h,f,l),w=l.chance(Math.min(.5,f*.14))?l.pick(ad):null;return{text:ef(x)?`${x}. There is no such station on this line.`:w?`${x} — the roundel is not quite right.`:x,uv:a.add(100,100,(L,D,N)=>no(L,D,N,x,{defect:w}))}});let v=0;const M=x=>{const w=S[v++%2],P=Ve(r,"sheet",e,1,x,.7,1.55,2.25,w.uv,null,.05);i.push({...P,r:10,cone:.96,label:"read name board",title:"STATION",text:w.text})};M(d-1.45),M(d+1.45);const A=[0,1,2].map(()=>{const x=l.chance(Math.min(.7,f*.17));let w;return{uv:a.add(240,140,(L,D,N)=>{w=io(L,D,N,l,x,!0)}),text:`${w.headline}. ${w.strap}.`}}),b=3.6,T=6,E=[[2.2,d-2.2],[d+2.2,t-2.2]];let y=0;for(const[x,w]of E){const P=Math.floor((w-x+T)/(b+T));if(P<1)continue;const L=(w-x-b)/Math.max(1,P-1);for(let D=0;D<P;D++){const N=P===1?(x+w)/2:x+b/2+L*D,k=A[y++%3],B=us(r,"sheet",e,1,N,b,1.22,3.3,k.uv,null,.05,4);i.push({...B,r:10,cone:.95,label:"read poster",title:"ADVERTISEMENT",text:k.text}),D<P-1&&L-b>.9&&M(N+L/2),P===1&&w-x-b>7&&(M((x+N-b/2)/2),M((w+N+b/2)/2))}}return{ads:A.map(x=>x.uv)}}function Hd(n,t,e,i,s,r){const o=Math.max(2,t*.022),a=fs.bar,l="#17191f";n.fillStyle="#6d7275",n.fillRect(0,0,t,e),n.fillStyle=fs.panel,n.fillRect(o,o,t-2*o,e-2*o);const c=e*.135,f=c*.3;n.fillStyle=a,n.fillRect(o,o,t-2*o,c),n.fillStyle=fs.panel,n.beginPath(),n.arc(o+c*.62,o+c/2,f*1.42,0,7),n.fill(),lr(n,o+c*.62,o+c/2,f),n.fillStyle="#fff",n.textAlign="left",n.textBaseline="middle";const h=o+c*1.22;ye(n,i.title,t-o-h-t*.04,c*.46,se),n.fillText(i.title,h,o+c*.53);const u=t*.075,p=o+c+e*.04;n.fillStyle=l,n.textBaseline="alphabetic";const g=ye(n,i.intro,t-2*u,e*.043,oe,700);n.fillText(i.intro,u,p+g*.8);const _=p+g*1.7,d=e*.905,m=i.rules.length;let S=e*.047,v,M,A,b;for(;n.font=`400 ${S}px ${oe}`,b=S*1.75,M=S*1.2,A=S*.62,v=i.rules.map(y=>Pn(n,y,t-2*u-b)),!(v.reduce((y,x)=>y+x.length*M,0)+A*(m-1)<=d-_||S<5);)S*=.96;let T=_;v.forEach((E,y)=>{n.fillStyle=a,n.beginPath(),n.arc(u+S*.62,T+M*.48,S*.66,0,7),n.fill(),n.fillStyle="#fff",n.textAlign="center",n.font=`700 ${S*.95}px ${oe}`,n.fillText(String(y+1),u+S*.62,T+M*.48+S*.33),n.fillStyle=l,n.strokeStyle=l,n.lineWidth=S*.035,n.textAlign="left",n.font=`400 ${S}px ${oe}`,E.forEach((x,w)=>{n.fillText(x,u+b,T+M*(w+.78)),n.strokeText(x,u+b,T+M*(w+.78))}),T+=E.length*M+A}),n.fillStyle=a,n.fillRect(u,e*.925,t-2*u,Math.max(1,e*.004)),n.fillStyle="#4a4f58",ye(n,`${s} · ${i.foot}`,t-2*u,e*.03,oe,400),n.fillText(`${s} · ${i.foot}`,u,e*.962),r&&Be(n,o,o,t-2*o,e-2*o,r.int(1,99999),.3,!1)}const ju="THE COMMUTE",_y=[["Tube strike threat over night shifts","Union and bosses to meet for last-ditch talks on Thursday","Commuters could face a 24-hour walkout next week unless a deal is reached. “Nobody wants this,” said both sides, separately.","tunnel"],["Rain, then more rain","Umbrella sales soar as forecasters give up on the weekend","The Met Office says it will stop raining “eventually”. Until then Londoners are advised to carry a brolly and lower their expectations.","rain"],["Commuters face Northern line delays","Signal failure at Camden Town blamed for a morning of misery","Passengers were told to follow the yellow and black signs to the way out and carry on above ground. A good service resumed by ten.","train","yellow"],["House prices up again","A parking space in Hampstead sells for more than a house in Hull","Estate agents called the plot “deceptively spacious” and “moments from the Tube”. It has no roof.","house"],["Fox walks into pub","Regulars at a Chalk Farm local say he stayed for the quiz","The landlord said the fox “kept himself to himself” and left before last orders. He is understood to have come second.","fox"],["Northern line’s old tiles to be saved","Every station has its own colours, and now they are protected","The patterns were designed so passengers could tell stations apart at a glance. “If the colours change, you’ve moved on,” said a heritage officer.","tiles","tiles"],["Lost property drowning in umbrellas","Also handed in this month: a wedding dress, a tuba and “several” false teeth","Staff at Baker Street say nine in ten items are never claimed. “People get off the train and simply forget what they came down with.”","rain"],["Station clocks to be put right on Sunday","Engineers promise every clock on the line will agree by Monday","A spokesman said station clocks “only ever run forwards” and asked anyone who sees one doing otherwise to tell a member of staff.","clock","clock"]],vy=[["Passenger still missing after last train","Staff searched the station twice. It was longer the second time","Anyone who travelled on the last northbound service is asked to come forward, if they can find the way out.","figure"],["Commuters face Northern line delays","The 23:47 has now been due for eleven days","A spokesman apologised for the inconvenience, and for the announcement, which he said he had not made.","train"],["Rain expected. Nobody has been up to check","Forecasters say conditions above ground “cannot be confirmed”","The last person to go up for a look has not come back down. Colleagues say this is a good sign.","rain"],["Fox seen on platform 2","It was waiting for a train. It let three go by","Witnesses said the fox “seemed to know which way was out” and set off up the line, northwards. Nobody followed it.","fox","line"],["Strike called off: no staff left to strike","Union says its members “went home some time ago”","Announcements continue as normal. Passengers are reminded that staff announcements begin with a rising chime. The others do not.","tunnel","chime"],["Yesterday’s paper printed again today","Readers say they do not mind. Readers say they do not mind","The editor could not be reached for comment, and neither could the stairs to his office.","paper"]],yy=[["Commuter last seen at Mornington Crescent","Carrying a camcorder. Reading a newspaper","The commuter is described as tired. If you see them, do not approach. If you are them, keep walking up the line.","figure","line"],["Station “has no end”, say staff","“We stopped measuring at Hampstead,” admits surveyor","The way out is believed to still exist. It was last recorded north of here, behind a sign that says exactly “Way out”.","tunnel","yellow"],["You are reading this","And it is reading you. Page 2: what it has learned","Put the paper down. Not there. That is where you found it last time.","eye"],["No news today","Nothing has happened above ground since you came down","This edition will be reprinted until further notice. The date at the top of the page is correct.","blank"]],Rr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Gd=["January","February","March","April","May","June","July","August","September","October","November","December"],Bo=n=>`${Rr[n.getDay()]} ${n.getDate()} ${Gd[n.getMonth()]} ${n.getFullYear()}`;function xy(n,t,e=new Date){const i=s=>Bo(new Date(e.getTime()-s*864e5));return n===0?Bo(e):n===1?t.pick([i(1),i(7),`${Bo(e)} · ${Bo(e)}`,`${Rr[e.getDay()]} ${e.getDate()} ${Gd[e.getMonth()]}, again`]):t.pick(["Saturday 22 June 1907",i(365*19+t.int(0,300)),`${Rr[e.getDay()]}, ${Rr[e.getDay()]}, ${Rr[e.getDay()]}`])}function Sy(n,t){const e=Math.min(.55,Math.max(0,t-2)*.28),i=Math.min(.7,t*.3);return n.weighted([[0,Math.max(.08,1-i-e)],[1,i],[2,e]])}function nf(n,t,e={}){const i=e.tier??Sy(n,t.wrong||0),s=[_y,vy,yy][i],r=(t.stretch?t.stretch.id*3:0)+(t.idx||0),[o,a,l,c,f]=s[(Ye(t.gseed||1,61+i)+r)%s.length],h=xy(i,n);return{tier:i,name:ju,date:h,head:o,stand:a,para:l,photo:c,clue:f||null,issue:i===2?"No. 0":`No. ${n.int(4100,6900).toLocaleString("en-GB")}`,caption:`${ju} · ${h}
${o.toUpperCase()}
${a}.
${l}`}}const Ii="#2b2b2a",Cr="#8f8f88",On="#d9d8cf",xc={tunnel(n,t,e,i,s){for(let r=5;r>0;r--)n.fillStyle=r%2?Cr:On,n.beginPath(),n.arc(t+i/2,e+s*.56,i*.62*r/5,0,7),n.fill();n.fillStyle=Ii,n.beginPath(),n.arc(t+i/2,e+s*.56,i*.1,0,7),n.fill(),n.fillRect(t,e+s*.86,i,s*.14)},train(n,t,e,i,s){xc.tunnel(n,t,e,i,s),n.fillStyle=On,n.fillRect(t+i*.3,e+s*.3,i*.4,s*.56),n.fillStyle=Ii,n.fillRect(t+i*.34,e+s*.36,i*.13,s*.2),n.fillRect(t+i*.53,e+s*.36,i*.13,s*.2),n.fillStyle="#fff",n.fillRect(t+i*.35,e+s*.7,i*.07,s*.06),n.fillRect(t+i*.58,e+s*.7,i*.07,s*.06)},rain(n,t,e,i,s){n.fillStyle=Ii,n.beginPath(),n.arc(t+i*.5,e+s*.55,i*.3,Math.PI,0),n.fill(),n.fillRect(t+i*.49,e+s*.55,i*.025,s*.34),n.strokeStyle=On,n.lineWidth=1;for(let r=0;r<16;r++){const o=t+r*37%100/100*i,a=e+r*53%100/100*s*.8;n.beginPath(),n.moveTo(o,a),n.lineTo(o-i*.04,a+s*.14),n.stroke()}},house(n,t,e,i,s){n.fillStyle=On,n.fillRect(t,e,i,s*.5);for(let r=0;r<3;r++){const o=t+i*(.06+r*.31),a=i*.26;n.fillStyle=r===1?Ii:"#55554f",n.fillRect(o,e+s*.42,a,s*.58),n.beginPath(),n.moveTo(o-1,e+s*.42),n.lineTo(o+a/2,e+s*.18),n.lineTo(o+a+1,e+s*.42),n.fill(),n.fillStyle=On,n.fillRect(o+a*.3,e+s*.56,a*.4,s*.14)}},fox(n,t,e,i,s){const r=t+i/2,o=e+s*.55,a=Math.min(i,s)*.36;n.fillStyle=Ii,n.beginPath(),n.moveTo(r-a,o-a*.35),n.lineTo(r-a*.75,o-a*1.25),n.lineTo(r-a*.25,o-a*.7),n.lineTo(r+a*.25,o-a*.7),n.lineTo(r+a*.75,o-a*1.25),n.lineTo(r+a,o-a*.35),n.lineTo(r,o+a),n.fill(),n.fillStyle=On;for(const l of[-1,1])n.beginPath(),n.arc(r+l*a*.4,o-a*.2,a*.11,0,7),n.fill()},tiles(n,t,e,i,s){for(let r=0;r<6;r++)for(let o=0;o<9;o++)n.fillStyle=r===1||r===4?Ii:(o+r)%5===0?Cr:On,n.fillRect(t+i*(o-r%2*.5)/8+.5,e+s*r/6+.5,i/8-1,s/6-1)},clock(n,t,e,i,s){const r=t+i/2,o=e+s/2,a=Math.min(i,s)*.4;n.fillStyle=On,n.beginPath(),n.arc(r,o,a,0,7),n.fill(),n.strokeStyle=Ii,n.lineWidth=Math.max(1,a*.1),n.beginPath(),n.arc(r,o,a,0,7),n.stroke(),n.beginPath(),n.moveTo(r,o),n.lineTo(r,o-a*.7),n.moveTo(r,o),n.lineTo(r+a*.45,o+a*.2),n.stroke()},figure(n,t,e,i,s){n.fillStyle="#6d6d68",n.fillRect(t,e,i,s),n.fillStyle=On,n.beginPath(),n.moveTo(t,e+s),n.lineTo(t+i*.42,e+s*.5),n.lineTo(t+i*.58,e+s*.5),n.lineTo(t+i,e+s),n.fill(),n.fillStyle="#0d0d0d";const r=t+i*.5,o=e+s*.62,a=s*.2;n.beginPath(),n.ellipse(r,o-a*1.25,a*.2,a*.24,0,0,7),n.fill(),n.beginPath(),n.moveTo(r-a*.32,o),n.lineTo(r-a*.22,o-a),n.lineTo(r+a*.22,o-a),n.lineTo(r+a*.32,o),n.fill()},paper(n,t,e,i,s){for(let r=0;r<4;r++){const o=.78**r,a=i*.5*o,l=s*.86*o,c=t+i/2-a/2,f=e+s/2-l/2;n.fillStyle=On,n.fillRect(c,f,a,l),n.fillStyle=Ii,n.fillRect(c,f,a,l*.16),n.fillRect(c+a*.1,f+l*.24,a*.8,l*.08),n.fillStyle=Cr,n.fillRect(c+a*.1,f+l*.4,a*.8,l*.5)}},eye(n,t,e,i,s){const r=t+i/2,o=e+s/2;n.fillStyle=On,n.beginPath(),n.ellipse(r,o,i*.4,s*.3,0,0,7),n.fill(),n.fillStyle=Cr,n.beginPath(),n.arc(r,o,s*.24,0,7),n.fill(),n.fillStyle="#0d0d0d",n.beginPath(),n.arc(r,o,s*.12,0,7),n.fill()},blank(){}};function Ku(n,t,e,i,s,r,o){n.fillStyle="rgba(40,40,38,0.62)";let a=r.int(3,6);for(let l=e;l+o*.5<=e+s;l+=o)a--,n.fillRect(t,l,a===0?i*r.range(.3,.75):i*r.range(.93,1),Math.max(1,o*.42)),a===0&&(a=r.int(3,6),l+=o*.5)}function Vd(n,t,e,i,s){const r=t*.045,o="#161616";n.fillStyle=i.tier===2?"#ddd7c4":"#e9e6db",n.fillRect(0,0,t,e);const a=e*.135,l=e*.05;n.fillStyle="#d21f26",n.fillRect(0,0,t,a),n.save(),n.translate(t/2,a*.54),n.transform(1,0,-.16,1,0,0),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",ye(n,i.name,t*.86,a*.86,se),n.fillText(i.name,0,0),n.restore(),n.fillStyle="#0c2f7a",n.fillRect(0,a,t,l),n.textBaseline="middle",n.textAlign="left",n.fillStyle="#fff",ye(n,i.date,t*.66,l*.72,oe,700),n.fillText(i.date,r,a+l*.54,t*.7),n.textAlign="right",n.fillStyle="#ffd329",n.font=`700 ${l*.72}px ${oe}`,n.fillText("FREE",t-r,a+l*.54);const c=i.head.toUpperCase(),f=a+l+e*.02,h=e*.235;let u=e*.125,p;for(;n.font=`400 ${u}px ${se}`,p=Pn(n,c,t-2*r),!(p.length<=3&&p.length*u*.98<=h&&p.every(y=>n.measureText(y).width<=t-2*r)||u<6);)u*=.94;n.fillStyle=o,n.textAlign="left",n.textBaseline="alphabetic",p.forEach((y,x)=>n.fillText(y,r,f+u*(.84+x*.98)));let g=f+p.length*u*.98+e*.012;const _=Math.max(5,e*.04);n.font=`700 ${_}px ${oe}`;const d=Pn(n,i.stand,t-2*r).slice(0,3);d.forEach((y,x)=>n.fillText(y,r,g+_*(.85+x*1.12))),g+=d.length*_*1.12+e*.014,n.fillStyle=o,n.fillRect(r,g,t-2*r,Math.max(1,e*.004)),g+=e*.014;const m=(t-2*r)*.6,S=Math.min(e*.26,(e-g)*.55),v=Math.max(2.4,e*.0165);n.save(),n.beginPath(),n.rect(r,g,m,S),n.clip(),n.fillStyle=Cr,n.fillRect(r,g,m,S),(xc[i.photo]||xc.blank)(n,r,g,m,S),n.fillStyle="rgba(233,230,219,0.28)";for(let y=g;y<g+S;y+=2)for(let x=r+((y-g)%4?1:0);x<r+m;x+=2)n.fillRect(x,y,1,1);n.restore(),n.strokeStyle=o,n.lineWidth=.6,n.strokeRect(r,g,m,S);const M=t*.03,A=(t-2*r-2*M)/3;Ku(n,r+m+M,g,t-2*r-m-M,S,s,v);const b=g+S+e*.02,T=e*.955;for(let y=0;y<3;y++)Ku(n,r+y*(A+M),b,A,T-b,s,v);n.fillStyle=o,n.font=`700 ${Math.max(4,e*.026)}px ${oe}`,n.textAlign="right",n.fillText(`${i.issue} · Turn to page 2`,t-r,e*.985);const E=n.createLinearGradient(0,e*.47,0,e*.56);E.addColorStop(0,"rgba(0,0,0,0)"),E.addColorStop(.35,"rgba(255,255,255,0.3)"),E.addColorStop(.5,"rgba(0,0,0,0.2)"),E.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=E,n.fillRect(0,e*.47,t,e*.09),Be(n,0,0,t,e,s.int(1,99999),i.tier?.8:.45,!1)}const Ju=[150,194],Ns=.31,ks=.4,Os=3,Ki=4,My={tint:[.8,.78,.72]},Wd=(n,t)=>n.sheet.add(Ju[0],Ju[1],(e,i,s)=>Vd(e,i,s,t,_n(n)));function Sc(n,t,e,i,s,r,o,a={}){const{b:l}=n,c=_n(n),f=a.floor?.006:.004,h=a.floor?.005:.009,u=[],p=[c.pick([0,Os]),c.pick([0,Ki])];for(let A=0;A<=Ki;A++){u.push([]);for(let b=0;b<=Os;b++){let T=f+c.range(0,h);A===Ki/2&&(T+=a.floor?.004:.012),b===p[0]&&A===p[1]&&(T+=a.floor?.012:.04),u[A].push(T)}}l.place(t,e,i,s);const g=A=>Ns/2-Ns*A/Os,_=A=>-ks/2+ks*A/Ki,d=o[2]-o[0],m=o[3]-o[1];for(let A=0;A<Ki;A++)for(let b=0;b<Os;b++)l.quad("sheet",[g(b),u[A][b],_(A)],[g(b+1),u[A][b+1],_(A)],[g(b+1),u[A+1][b+1],_(A+1)],[g(b),u[A+1][b],_(A+1)],[0,1,0],[o[0]+d*b/Os,o[1]+m*A/Ki,o[0]+d*(b+1)/Os,o[1]+m*(A+1)/Ki],a.floor?{tint:[.86,.85,.82]}:null);const S=c.range(.008,.022)*c.sign(),v=-c.range(.008,.02),M=.002;return l.quad("atlas",[Ns/2+S,M,-ks/2+v],[-Ns/2+S,M,-ks/2+v],[-Ns/2+S,M,ks/2+v],[Ns/2+S,M,ks/2+v],[0,1,0],Vt("white"),My),l.setXf(null),{x:t,y:e+.02,z:i,n:a.n||[0,0],r:3.4,cone:.86,label:"read newspaper",title:"NEWSPAPER",text:r.caption,paper:{tier:r.tier,clue:r.clue,floor:!!a.floor}}}function by(n,t,e){const{b:i,p:s,sheet:r,rng:o,env:a}=n,l=[],c=[],f=[],h=a.wrong||0,u=a.station,p=s.dir,g=Z=>e*Z,_=Math.round((t-6)/4.5)*3+1;for(let Z=0;Z<_;Z++){const O=3+(t-6)*Z/(_-1),ut=Z%3===0,ht=Math.floor(Z/3);_s(i,{x:g(.5),y:0,z:O,yaw:0},3.45,{dead:s.dark&&ht%3!==1,flick:s.faulty===ht,noLight:!ut,power:.62,radius:9.5,len:1.25})}const d=D2(u),m=Math.min(5,1+.2*(d.length+2*d.split(" ").length)),S=h>=1.5&&o.chance(Math.min(.8,h*.2))?o.shuffle(Kc).slice(0,o.int(1,2)):[],v=r.add(800,168,(Z,O,ut)=>kd(Z,O,ut,{current:u,ghosts:S})),M=r.add(512,Math.round(512*.53/m),(Z,O,ut)=>pd(Z,O,ut,d,a.theme));let A=null,b=null,T=null;const E=gy(n,t,e,l,()=>{const Z=_n(n);if(s.start&&(T=r.add(288,360,(O,ut,ht)=>Hd(O,ut,ht,Wr,u,Z))),s.start||Z.chance(a.boardChance??.4)){const O=Yc(Z,a,{cheery:s.start});A={th:O,face:Zc(n,O)}}s.start||(b=r.reserve(168,216))}),y=Z=>{const O=(ht,At,dt)=>dd(ht,At,dt,Z,o),ut=b;return b=null,ut?r.paint(ut,O):r.add(168,216,O)},x=e>0?"left":"right",w=[r.add(384,36,(Z,O,ut)=>Ru(Z,O,ut,u,{arrow:x})),r.add(384,36,(Z,O,ut)=>Ru(Z,O,ut,u,{note:u==="Camden Town"?"Edgware branch":""}))];let P=0;for(let Z=1.5;Z<t-1;Z+=3,P++)Ve(i,"sheet",e,-1,Z,3,2.47,2.75,w[P%2],null,.03);const L=[0,1].map(()=>{const Z=tf(u,h,o),O=o.chance(Math.min(.6,h*.16))?o.pick(ad):null;return{text:ef(Z)?`${Z}. There is no such station on this line.`:O?`${Z} — the roundel is not quite right.`:Z,uv:r.add(150,183,(ht,At,dt)=>no(ht,At,dt,Z,{defect:O}))}}),D=[0,1].map(()=>{const Z=o.chance(Math.min(.7,h*.17));let O;return{uv:r.add(112,168,(ht,At,dt)=>{O=io(ht,At,dt,o,Z,!0)}),text:`${O.headline}. ${O.strap}.`}});let N=0;const k=["roundel","name","poster","roundel","strip","roundel","name","poster","help"];s.start&&k.splice(1,0,"info");const B={roundel:1.15,poster:1,name:m,strip:4.4,info:1.4,help:.34},U=1,R=[];let z=null,H=3,X=0,Y=0;for(;X<40;){const Z=k[X%k.length],O=B[Z];if(Z==="info"&&X>1){X++;continue}if(H+O>t-2.6)break;if(Z==="poster"&&A&&H+O>t-4.8){X++;continue}const ut=H+O/2;if(Z==="roundel"){const ht=L[Y++%2],At=Ve(i,"sheet",e,-1,ut,O,.85,2.25,ht.uv);l.push({...At,r:6,label:"read name board",title:"STATION",text:ht.text})}else if(Z==="poster"){const ht=D[N++%2],At=Ve(i,"sheet",e,-1,ut,O,.62,2.12,ht.uv);l.push({...At,r:5,label:"read poster",title:"POSTER",text:ht.text})}else if(Z==="name"){const ht=Ve(i,"sheet",e,-1,ut,O,1.72,2.25,M,null,.025);l.push({...ht,r:7,label:"read tiles",title:"TILED NAME",text:`· ${d.toUpperCase().split(" ").join(" · ")} ·${d!==u?` (the frieze says ${u})`:""}`}),Bd(i,e,ut,c),R.push(ut)}else if(Z==="strip"){const ht=Ve(i,"sheet",e,-1,ut,O,1,1.92,v);l.push({...ht,r:6,cone:.92,label:"read line map",title:"NORTHERN LINE",text:W2(u,S)})}else if(Z==="info"){const ht=us(i,"sheet",e,-1,ut,O,.5,2.25,T,null,.04,3);l.push({...ht,r:5.5,n:[e,0],label:"read customer information",title:"CUSTOMER INFORMATION",text:u2(),clue:!0,info:!0,onRead:At=>Wr.keys.forEach(dt=>At.story.noticeRead(dt))}),z={x:g(.3),z:ut,yaw:-e*Math.PI/2}}else{const ht=Ve(i,"cut",e,-1,ut,O,.7,1.38,Ot("helpPoint"));l.push({...ht,r:3.2,label:"press help point",title:"HELP POINT",text:"",onRead:(At,dt,qt)=>At.director.helpPoint(qt)})}H+=O+U,X++}if(!s.start&&o.chance(.3)){const Z=Rd(n),O=y(Z),ut=Ve(i,"sheet",e,-1,1.9,.5,.95,1.6,O,{tint:[1.1,1.1,1.1]});l.push({...ut,r:4.5,label:"read notice",title:Z.title,text:Z.text,clue:!0,onRead:ht=>ht.story.noticeRead(Z.key)})}if(A){const Z=jc(n,g(nt.back+.62),t-1.9,-e*.5,A.th,0,A.face);l.push(Z.item);for(const O of Z.walls)c.push(O)}const G=Zr("board"),K=na(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.5,1.36,.45,G,G,{emit:1.2},g(.15));l.push({...K,r:9,cone:.94,label:"read indicator",title:"NEXT TRAIN",dynamic:"board",text:""});const at=!!(a.stretch&&a.stretch.clocksBack),st=Zr(at?"clockBack":"clock"),xt=na(i,"dyn",{x:0,y:0,z:t*.5,yaw:0},2.48,.5,.5,st,st,{emit:1.05},g(1.2));l.push({...xt,r:9,cone:.95,label:"look at clock",title:"CLOCK",text:at?"The second hand is ticking backwards.":"The clock is keeping time."});const wt=r.add(250,56,(Z,O,ut)=>ba(Z,O,ut,{dir:"up"})),Ft=r.add(250,56,(Z,O,ut)=>so(Z,O,ut,`${sr(p)} platform ${ps(p)}`,{sub:"Northern line",bg:"#f6f6f1",fg:"#16213f"})),Yt=na(i,"sheet",{x:0,y:0,z:t-7,yaw:0},2.42,1.7,.38,wt,Ft,{emit:1.25},g(0));l.push({...Yt,r:9,cone:.94,label:"read sign",title:"SIGN",text:"Way out ↑ (black on yellow)"});const kt=_n(n);if(R.length&&!s.train&&kt.chance(a.paperChance??.3)){const Z=nf(kt,a),O=Wd(n,Z),ut=kt.pick(R),ht=kt.chance(.25),At=-e*Math.PI/2+kt.range(-.4,.4),dt=[e,0];ht?l.push(Sc(n,g(nt.back+kt.range(.85,1.05)),0,ut+kt.sign()*kt.range(.3,1.2),At+kt.range(-.5,.5),Z,O,{floor:!0,n:dt})):l.push(Sc(n,g(nt.back+.41),.46,ut+kt.range(-.6,.6),At,Z,O,{n:dt}))}if(i.quad("atlas",[g(nt.track+.98),.9,t+.4],[g(nt.track+1.13),.9,t+.4],[g(nt.track+1.13),1.05,t+.4],[g(nt.track+.98),1.05,t+.4],[0,0,-1],Vt("white"),{emit:1.6,tint:[1,.12,.08]}),s.figure){const Z=g(.75),O=t-7;i.quad("figure",[Z+.3,0,O],[Z-.3,0,O],[Z-.3,1.78,O],[Z+.3,1.78,O],[0,0,-1],Ot("figure"),{emit:.02}),f.push({x0:-9,x1:9,z0:t-7-12.5,z1:t,fire:(ut,ht)=>ut.director.events.figureGone(ht)})}return{items:l,walls:c,zones:f,spawn:z,art:{strip:v,ads:E.ads}}}const Ty=[["#7d3327","#e2d3a8","#2b3550"],["#2b3550","#e0d2ab","#8a3a2c"],["#4f5a34","#e4d7b0","#6e2f25"],["#a47a2c","#efe3bf","#2b3550"]],Qu={cup(n,t,e,i,s,r){n.fillStyle=r,n.beginPath(),n.moveTo(t-i*.7,e-i*.3),n.lineTo(t-i*.5,e+i*.6),n.lineTo(t+i*.5,e+i*.6),n.lineTo(t+i*.7,e-i*.3),n.fill(),n.strokeStyle=r,n.lineWidth=i*.14,n.beginPath(),n.arc(t+i*.78,e+i*.1,i*.28,-1.2,1.4),n.stroke(),n.lineWidth=i*.08;for(const o of[-.25,.2])n.beginPath(),n.moveTo(t+i*o,e-i*.5),n.quadraticCurveTo(t+i*(o+.25),e-i*.8,t+i*o,e-i*1.1),n.stroke()},sun(n,t,e,i,s,r){n.fillStyle=r;for(let o=0;o<12;o++){const a=o/12*Math.PI*2;n.beginPath(),n.moveTo(t,e),n.lineTo(t+Math.cos(a-.09)*i*1.3,e+Math.sin(a-.09)*i*1.3),n.lineTo(t+Math.cos(a+.09)*i*1.3,e+Math.sin(a+.09)*i*1.3),n.fill()}n.fillStyle=s,n.beginPath(),n.arc(t,e,i*.62,0,7),n.fill(),n.fillStyle=r,n.beginPath(),n.arc(t,e,i*.48,0,7),n.fill()},hill(n,t,e,i,s,r){n.fillStyle=r,n.beginPath(),n.moveTo(t-i*1.5,e+i*.7),n.quadraticCurveTo(t-i*.4,e-i*.9,t+i*.3,e+i*.1),n.quadraticCurveTo(t+i*.9,e-i*.5,t+i*1.5,e+i*.7),n.fill(),n.fillRect(t-i*.2,e-i*.75,i*.1,i*.5),n.beginPath(),n.arc(t-i*.15,e-i*.85,i*.3,0,7),n.fill()},star(n,t,e,i,s,r){n.fillStyle=r;for(const[o,a,l]of[[0,0,1],[-1,-.5,.5],[.95,-.6,.6],[.7,.6,.4]]){n.beginPath();for(let c=0;c<10;c++){const f=-Math.PI/2+c/10*Math.PI*2,h=(c%2?.4:1)*i*l;n.lineTo(t+o*i+Math.cos(f)*h,e+a*i+Math.sin(f)*h)}n.fill()}},bottle(n,t,e,i,s,r){n.fillStyle=r,n.fillRect(t-i*.38,e-i*.3,i*.76,i*1.1),n.fillRect(t-i*.14,e-i*.95,i*.28,i*.7),n.fillStyle=s,n.fillRect(t-i*.28,e,i*.56,i*.45)}};function Ey(n,t,e,i,s){const[r,o,a]=i,[l,c,f]=s.pick(Ty);n.fillStyle=c,n.fillRect(0,0,t,e),n.strokeStyle=l,n.lineWidth=Math.max(2,t*.025),n.strokeRect(t*.05,t*.05,t*.9,e-t*.1),n.fillStyle=l,n.fillRect(t*.05,t*.05,t*.9,e*.44),(Qu[a]||Qu.sun)(n,t/2,e*.27,Math.min(t,e)*.17,l,c),n.fillStyle=l,n.textAlign="center",n.textBaseline="alphabetic";let h=e*.105,u;for(;n.font=`400 ${h}px ${se}`,u=Pn(n,r.toUpperCase(),t*.8),!(u.length<=2||h<6);)h*=.92;u.forEach((S,v)=>n.fillText(S,t/2,e*.6+v*h*1.05,t*.84)),n.fillStyle=f,n.fillRect(t*.3,e*.6+u.length*h*1.05-h*.55,t*.4,Math.max(1,e*.008));let p=e*.05,g;for(;n.font=`700 ${p}px ${oe}`,g=Pn(n,o,t*.78),!(g.length<=3||p<5);)p*=.92;g.forEach((S,v)=>n.fillText(S,t/2,e*.64+u.length*h*1.05+v*p*1.2)),n.fillStyle="rgba(214,203,170,0.5)",n.fillRect(0,0,t,e);for(let S=0;S<5;S++){const v=s.range(0,t),M=s.range(0,e),A=s.range(t*.15,t*.45),b=n.createRadialGradient(v,M,A*.6,v,M,A);b.addColorStop(0,"rgba(70,55,30,0)"),b.addColorStop(.85,"rgba(70,55,30,0.16)"),b.addColorStop(1,"rgba(70,55,30,0)"),n.fillStyle=b,n.fillRect(v-A,M-A,A*2,A*2)}n.clearRect(0,0,0,0);const _=s.chance(.5)?0:t,d=t*s.range(.18,.34),m=e*s.range(.1,.2);n.fillStyle="#b9b094",n.beginPath(),n.moveTo(_,0),n.lineTo(_===0?d:t-d,0),n.lineTo(_,m),n.fill(),Be(n,0,0,t,e,r.length*19+7,1.2,!0)}function wy(n,t,e,i,s,r=.72){n.fillStyle=i,n.globalAlpha=r,n.fillRect(0,0,t,e),n.globalAlpha=1;for(let o=0;o<40;o++){const a=s.range(0,e),l=s.range(0,t);n.fillStyle=`rgba(${s.chance(.5)?"255,250,230":"70,60,40"},${s.range(.03,.09)})`,n.fillRect(l,a,s.range(t*.1,t*.5),s.range(1,3))}}function Ay(n,t,e,i){n.fillStyle="#6d6558",n.fillRect(0,0,t,e);const s=e/22,r=s*2.9;for(let a=0;a<22;a++)for(let l=a%2?-r/2:0;l<t;l+=r){const c=i.range(-14,14);n.fillStyle=`rgb(${112+c},${62+c*.6},${48+c*.5})`,n.fillRect(l+.8,a*s+.8,r-1.6,s-1.6)}const o=n.createLinearGradient(0,0,0,e);o.addColorStop(0,"rgba(20,16,10,0.45)"),o.addColorStop(.4,"rgba(20,16,10,0.12)"),o.addColorStop(1,"rgba(20,16,10,0.3)"),n.fillStyle=o,n.fillRect(0,0,t,e),Be(n,0,0,t,e,1924,1,!0)}function Ry(n,t,e){n.clearRect(0,0,t,e),n.strokeStyle="#3d3f3c",n.lineWidth=1.3;const i=e/5;n.save(),n.beginPath(),n.rect(2,2,t-4,e-4),n.clip();for(let s=-e;s<t+e;s+=i)n.beginPath(),n.moveTo(s,0),n.lineTo(s+e,e),n.stroke(),n.beginPath(),n.moveTo(s+e,0),n.lineTo(s,e),n.stroke();n.restore(),n.strokeStyle="#4a2a22",n.lineWidth=5,n.strokeRect(2.5,2.5,t-5,e-5),n.strokeStyle="rgba(255,220,190,0.18)",n.lineWidth=1,n.strokeRect(1.5,1.5,t-3,e-3),n.fillStyle="#4a2a22",n.fillRect(t/2-2,0,4,e)}function Cy(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#2f3330",n.fillRect(0,0,t,e*.07),n.fillRect(0,e*.5,t,e*.05);for(let i=0;i<=8;i++)n.fillRect((t-4)*(i/8),0,i%4===0?5:2.5,e)}function Mc(n,t,e,i,s=null){n.clearRect(0,0,t,e),n.fillStyle="rgba(214,206,180,0.92)",n.fillRect(0,0,t,e),n.fillStyle="#1b1a17",n.textBaseline="middle",n.textAlign="center";const r=s?e*.9:0,o=ye(n,i,t-r-e*.5,e*.62,oe,700),a=s==="left"?(t+r)/2:s==="right"?(t-r)/2:t/2;n.fillText(i,a,e*.54),n.fillStyle="rgba(214,206,180,0.95)";const l=n.measureText(i).width;for(let c=a-l/2+o*.33;c<a+l/2;c+=o*.62)n.fillRect(c,e*.54-o*.08,1.3,o*.5);s&&Vr(n,s==="left"?r*.55:t-r*.55,e/2,e*.6,s,"#1b1a17"),Be(n,0,0,t,e,i.length*31+5,.7,!1)}function Py(n,t,e,i,s=null){n.fillStyle="#ecebe2",n.fillRect(0,0,t,e),n.strokeStyle="#161616",n.lineWidth=Math.max(2,e*.06),n.strokeRect(2,2,t-4,e-4),n.fillStyle="#161616",n.textBaseline="middle",n.textAlign="center";const r=s?e*1:0;ye(n,i.toUpperCase(),t-r-e*.6,e*.5,se),n.fillText(i.toUpperCase(),s==="left"?(t+r)/2:s==="right"?(t-r)/2:t/2,e*.55),s&&Vr(n,s==="left"?r*.6:t-r*.6,e/2,e*.62,s,"#161616");for(const[o,a]of[[.03,.14],[.97,.14],[.03,.86],[.97,.86]])n.fillStyle="#8b8a80",n.beginPath(),n.arc(t*o,e*a,2,0,7),n.fill();Be(n,0,0,t,e,i.length*17+3,.6,!1)}function bc(n,t,e,i,s,r,o){n.fillStyle="#e4dcc0",n.fillRect(0,0,t,e),n.strokeStyle="#2a2620",n.lineWidth=1.5,n.strokeRect(4,4,t-8,e-8),n.fillStyle="#1d1a15",n.textAlign="center",n.textBaseline="alphabetic",ye(n,i,t*.84,e*.085,se),n.fillText(i,t/2,e*.13),n.fillRect(t*.2,e*.155,t*.6,1.2),ye(n,s,t*.84,e*.12,se),n.fillText(s,t/2,e*.29);let a=e*.062,l;for(;n.font=`400 ${a}px ${oe}`,l=r.flatMap(c=>Pn(n,c,t*.8).concat([""])),!(l.length*a*1.2<e*.5||a<5);)a*=.93;n.textAlign="left",l.forEach((c,f)=>n.fillText(c,t*.1,e*.39+f*a*1.2)),n.textAlign="right",n.font=`700 ${e*.05}px ${oe}`,n.fillText(o,t*.9,e*.94),Be(n,0,0,t,e,i.length*7+11,1,!0)}function Ly(n,t,e,i){n.fillStyle="#e6dfc6",n.fillRect(0,0,t,e),n.strokeStyle="#2a2620",n.lineWidth=1.5,n.strokeRect(3,3,t-6,e-6),n.fillStyle="#1d1a15",n.textAlign="center",n.textBaseline="alphabetic",ye(n,"CAMDEN TOWN DEEP SHELTER",t*.86,e*.12,se),n.fillText("CAMDEN TOWN DEEP SHELTER",t/2,e*.16);const s=t*.1,r=t*.9,o=e*.42,a=e*.66,l=e*.085;n.fillStyle="#c9c0a2";for(const c of[o,a])n.fillRect(s,c-l/2,r-s,l);for(const c of[.25,.5,.75,1])n.fillRect(s+(r-s)*c-(c===1?l*.6:l*.3),o,l*.6,a-o);n.strokeStyle="#1d1a15",n.lineWidth=1;for(const c of[o,a])n.strokeRect(s,c-l/2,r-s,l);n.font=`700 ${e*.055}px ${oe}`,"ABCDEFGH".split("").forEach((c,f)=>{const h=s+(r-s)*(f%4+.5)/4,u=f<4?o:a;c===i?(n.fillStyle="#a3261c",n.fillRect(h-l*.9,u-l/2+1,l*1.8,l-2),n.fillStyle="#fff"):n.fillStyle="#1d1a15",n.fillText(c,h,u+e*.02)}),n.fillStyle="#1d1a15";for(const[c,f]of[[s,"UNDERHILL ST."],[r,"BUCK ST."]])n.beginPath(),n.arc(c,(o+a)/2,l*.75,0,7),n.fill(),n.font=`700 ${e*.05}px ${oe}`,n.fillText(f,Math.min(t*.82,Math.max(t*.18,c)),e*.86);n.font=`400 ${e*.045}px ${oe}`,n.fillText("UPPER AND LOWER DECKS · 8,000 BUNKS",t/2,e*.27),Be(n,0,0,t,e,77,.9,!0)}function Dy(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#4a2f1b",n.fillRect(t*.14,e*.06,t*.72,e*.88),n.fillStyle="rgba(255,220,170,0.12)",n.fillRect(t*.14,e*.06,t*.72,3),n.fillStyle="#17150f";for(const i of[.36,.64])n.beginPath(),n.arc(t*i,e*.2,t*.11,0,7),n.fill();n.fillRect(t*.26,e*.42,t*.48,e*.06),n.fillStyle="#0d0c0a",n.beginPath(),n.roundRect(t*.02,e*.34,t*.2,e*.5,6),n.fill(),n.fillRect(t*.84,e*.5,t*.12,e*.05),n.beginPath(),n.arc(t*.95,e*.525,t*.05,0,7),n.fill(),n.fillStyle="#d8cfae",n.fillRect(t*.3,e*.6,t*.4,e*.2),n.fillStyle="#1d1a15",n.font=`700 ${e*.05}px ${oe}`,n.textAlign="center",n.textBaseline="middle",n.fillText("WARDEN",t/2,e*.66),n.fillText("1 RING",t/2,e*.74)}function Iy(n,t,e){const{b:i,p:s,sheet:r,env:o}=n,a=_n(n),l=o.theme,c=[],f=[],h=[],u=k=>e*k,p=e>0?"left":"right",g=4,_=r.add(512,68,(k,B,U)=>{pd(k,B,U,Xr.built,l),wy(k,B,U,"#c4bb9c",a,.66)}),d=r.add(150,183,(k,B,U)=>{no(k,B,U,Xr.name,{defect:"solid"}),k.fillStyle="rgba(200,190,160,0.38)",k.fillRect(0,0,B,U)}),S=a.shuffle(on.posters).slice(0,4).map(k=>({spec:k,uv:r.add(120,180,(B,U,R)=>Ey(B,U,R,k,a))})),v=r.add(132,168,(k,B,U)=>bc(k,B,U,...on.notice)),M=r.add(220,54,(k,B,U)=>Wc(k,B,U,"WAY OUT",l,p)),A=r.add(164,33,(k,B,U)=>Mc(k,B,U,"SHELTER")),b=r.add(164,33,(k,B,U)=>Mc(k,B,U,"FIRST AID POST",p)),T={tint:[.9,.88,.82]},E=(k,B)=>c.push({...k,n:[e,0],r:5,...B});E(Ve(i,"sheet",e,-1,2.4,.45,1,1.57,v,T),{r:4.5,label:"read notice",title:on.notice[1],text:`${on.notice[0]}. ${on.notice[2].join(" ")} ${on.notice[3]}.`,clue:!1});const y=k=>E(Ve(i,"sheet",e,-1,k,1.15,.85,2.25,d,T),{r:6,label:"read name board",title:"STATION",text:on.board}),x=(k,B)=>E(Ve(i,"sheet",e,-1,k,1,.62,2.12,S[B].uv,T),{label:"read poster",title:"POSTER, 1924",text:`${S[B].spec[0]}. ${S[B].spec[1]}. (Faded almost to nothing.)`}),w=r.add(120,172,(k,B,U)=>Ay(k,B,U,a)),P={tint:[.3,.1,.1]},L=Vt("white"),D=k=>{const B=us(i,"sheet",e,-1,k,1.5,0,2.15,w,null,.035,3);for(const U of[-.8,.8])us(i,"atlas",e,-1,k+U,.1,0,2.25,L,P,.045,3);Ve(i,"atlas",e,-1,k,1.7,2.15,2.27,L,P,.045),E(B,{y:1.3,r:4.5,label:"look at archway",title:"ARCHWAY",text:on.arch,arch:!0})};y(4.2),D(6.6),Ve(i,"sheet",e,-1,8.7,.9,1.47,1.65,A),E(Ve(i,"sheet",e,-1,8.7,.9,1.26,1.44,b),{r:4.5,label:"read lettering",title:"STENCILLED ON THE TILES",text:on.shelter}),x(11,0),E(Ve(i,"sheet",e,-1,15.5,g,1.72,2.25,_,null,.025),{r:7,label:"read tiles",title:"TILED NAME",text:on.name}),Bd(i,e,15.5,f),x(20,1),y(22.6),E(Ve(i,"sheet",e,-1,25,1.5,1.3,1.67,M,null,.025),{r:4.5,label:"read tiles",title:"TILED LEGEND",text:on.legend.replace("→",e>0?"←":"→")}),D(27.6),x(30.6,2),E(us(i,"sheet",e,1,t*.55,1.6,1.25,3.3,S[3].uv,T,.05,4),{n:[-e,0],r:10,cone:.95,label:"read poster",title:"POSTER, 1924",text:`${S[3].spec[0]}. ${S[3].spec[1]}. (Faded almost to nothing.)`});const N=Ot("lamp");return[3.2,9.8,18.6,24,32.2].forEach((k,B)=>{const U=s.faulty===B-1;Ve(i,"atlas",e,-1,k,.3,2.28,2.4,N,{emit:1.4,flick:U,tint:[1,.8,.52]},.06),i.addLight(u(zd(2.3,-1)+.6),2.15,k,.78,9,U,[1,.82,.58])}),c.push({x:u(.3),y:.05,z:t*.5,r:3,cone:.8,n:[0,-1],label:"look at floor",title:"DUST",text:on.dust}),h.push({x0:-9,x1:9,z0:1.2,z1:8,fire:k=>{k.director.setHint(on.hint,8),k.director.events.glitch(.9),k.state.ghostVisits=(k.state.ghostVisits||0)+1}}),{items:c,walls:f,zones:h,spawn:null,art:null}}const Rn=512,sf={moquette:[0,0,128,128],floor:[128,0,64,64],floorDark:[192,0,64,64],panel:[256,0,64,64],ceiling:[320,0,64,64],light:[384,0,64,32],plinth:[384,32,64,32],pole:[448,0,24,64],black:[480,0,24,64],louvre:[128,64,128,32],steel:[128,96,64,32],glass:[192,96,64,32],doorIn:[0,128,64,160],doorOut:[64,128,64,160],endDoor:[128,128,64,160],livery:[192,128,32,160],roof:[224,128,32,32],under:[224,160,32,32],red:[224,192,32,32],hoarding:[224,224,32,64],alarm:[256,128,48,48],priority:[304,128,48,48],warning:[352,128,48,48],logo:[400,128,96,48],displayBox:[256,176,96,32],number:[352,176,96,32],seatEnd:[256,208,64,80]},Ae=[-.62,1.78],xr="#e9e4d0",Uy="#1b2f86";function Tc(n,t,e,i,s,r,o,a){for(let l=0;l<o;l++)n.fillStyle=r.pick(a),n.fillRect(t+r.range(0,i-1),e+r.range(0,s-1),r.range(.8,1.8),r.range(.8,1.8))}function Ny(n,t,e,i,s,r){n.fillStyle="#2247a8",n.fillRect(t,e,i,s);const o=4,a=i/o,l="#162f78",c="#2d5cc4",f="#4a7ad8";for(let h=0;h<o;h++)for(let u=0;u<o;u++){const p=t+(u+.5)*a,g=e+(h+.5)*a,_=(u+h*2)%4,d=a*.36;n.lineWidth=a*.13,n.strokeStyle=(u+h)%2?l:c,n.fillStyle=(u+h)%2?c:l,_===0?(n.beginPath(),n.arc(p,g,d,.3,Math.PI*1.7),n.stroke()):_===1?(n.fillRect(p-d*.35,g-d,d*.7,d*2),n.fillStyle=f,n.fillRect(p-d*.2,g-d*.8,d*.4,d*.4)):_===2?(n.beginPath(),n.arc(p,g+d*.4,d,Math.PI,0),n.fill(),n.fillRect(p-d*.1,g-d*1,d*.2,d*.5)):(n.fillRect(p-d,g-d*.7,d*.45,d*1.5),n.fillRect(p+d*.55,g-d*.7,d*.45,d*1.5),n.fillRect(p-d,g,d*2,d*.22)),(u*3+h*5)%7===0&&(n.strokeStyle=(u+h)%2?"#d8364a":"#35b9cf",n.lineWidth=a*.07,n.beginPath(),n.arc(p+d*.9,g-d*.9,d*.3,0,7),n.stroke())}Tc(n,t,e,i,s,r,900,["rgba(255,255,255,0.07)","rgba(0,0,20,0.12)"])}function pl(n,t,e,i,s,r,o){n.fillStyle=r,n.fillRect(t,e,i,s);const a=t+i*(o?.3:.16),l=i*(o?.4:.68),c=e+s*.1,f=s*(o?.5:.42);n.fillStyle="#17191c",n.beginPath(),n.roundRect(a-2,c-2,l+4,f+4,7),n.fill();const h=n.createLinearGradient(0,c,0,c+f);h.addColorStop(0,"#39424a"),h.addColorStop(1,"#14181c"),n.fillStyle=h,n.beginPath(),n.roundRect(a,c,l,f,5),n.fill(),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(a+l*.12,c+3,l*.16,f-6),n.fillStyle="#131416",n.fillRect(t,e,2.5,s),n.fillRect(t+i-2.5,e,2.5,s),n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(t,e+s-6,i,6)}function ky(n){const t=new ge(1995),e=s=>sf[s],i=(s,r)=>{const[o,a,l,c]=e(s);n.fillStyle=r,n.fillRect(o-2,a-2,l+4,c+4)};n.fillStyle="#3a3b3d",n.fillRect(0,0,Rn,Rn),Ny(n,...e("moquette"),t),i("floor","#b4b7b6"),Tc(n,...e("floor"),t,700,["#8f9291","#d2d5d3","#a3a6a5","#6f7272"]),i("floorDark","#35383d"),Tc(n,...e("floorDark"),t,600,["#23262a","#4b4f55","#b9a53a","#5c6067"]),i("panel",xr);{const[s,r,o,a]=e("panel");n.fillStyle="rgba(0,0,0,0.05)",n.fillRect(s,r+a-3,o,3),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(s,r,o,3)}i("ceiling","#f1efe6"),i("light","#fffdf0"),i("pole",Uy),i("black","#17181b"),i("steel","#8d9296"),i("glass","#20262b"),i("roof","#8d9296"),i("under","#131417"),i("red","#d5231d");{const[s,r,o,a]=e("pole");n.fillStyle="rgba(255,255,255,0.28)",n.fillRect(s+o*.3,r,o*.18,a)}{const[s,r,o,a]=e("plinth");n.fillStyle="#4b4f55",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#26282c";for(let l=0;l<9;l++)n.fillRect(s+8+l*5.5,r+8,3,a-16)}{const[s,r,o,a]=e("louvre");n.fillStyle="#2a2c30",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#0f1012";for(let l=0;l<7;l++)n.fillRect(s,r+3+l*4.2,o,2.2)}{const[s,r,o,a]=e("hoarding");n.fillStyle="#11308f",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(s,r,1.5,a),n.fillStyle="rgba(255,255,255,0.08)",n.fillRect(s+2,r,2,a)}pl(n,...e("doorIn"),xr,!1),pl(n,...e("doorOut"),"#d5231d",!1),pl(n,...e("endDoor"),xr,!0);{const[s,r,o,a]=e("livery"),l=c=>r+a-(c-Ae[0])/(Ae[1]-Ae[0])*a;n.fillStyle="#15161a",n.fillRect(s-2,l(-.05),o+4,r+a+2-l(-.05)),n.fillStyle="#0c2a8e",n.fillRect(s-2,l(.45),o+4,l(-.05)-l(.45)),n.fillStyle="#f2f2ee",n.fillRect(s-2,l(1.7),o+4,l(.45)-l(1.7)),n.fillStyle="#9da2a6",n.fillRect(s-2,r-2,o+4,l(1.7)-r+2)}{const[s,r,o,a]=e("alarm");n.fillStyle="#c8201c",n.fillRect(s,r,o,a),n.fillStyle="#fff",n.font=`700 9px ${oe}`,n.textAlign="center",n.fillText("Emergency",s+o/2,r+13),n.fillText("alarm",s+o/2,r+23),n.fillStyle="#7a1210",n.fillRect(s+o*.3,r+a*.58,o*.4,a*.28)}{const[s,r,o,a]=e("priority");n.fillStyle="#1b2f86",n.fillRect(s,r,o,a),n.fillStyle="#fff",n.font=`700 9px ${oe}`,n.textAlign="center",n.fillText("Priority",s+o/2,r+20),n.fillText("seat",s+o/2,r+31)}{const[s,r,o,a]=e("warning");n.fillStyle=xr,n.fillRect(s,r,o,a),n.fillStyle="#f2c81e",n.beginPath(),n.moveTo(s+o/2,r+5),n.lineTo(s+o-6,r+a-7),n.lineTo(s+6,r+a-7),n.fill(),n.fillStyle="#111",n.fillRect(s+o/2-2,r+18,4,13),n.fillRect(s+o/2-2,r+34,4,4)}{const[s,r,o,a]=e("logo");n.fillStyle="#f2f2ee",n.fillRect(s-2,r-2,o+4,a+4),lr(n,s+o/2,r+a/2,a*.36,{name:"Underground"})}{const[s,r,o,a]=e("displayBox");n.fillStyle="#1b1c1f",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#0a0a0b",n.fillRect(s+4,r+5,o-8,a-10)}{const[s,r,o,a]=e("number");n.fillStyle="#f2f2ee",n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#16171a",n.font=`400 22px ${se}`,n.textAlign="center",n.textBaseline="middle",n.fillText("52607",s+o/2,r+a/2+1),n.textBaseline="alphabetic"}{const[s,r,o,a]=e("seatEnd");n.fillStyle=xr,n.fillRect(s-2,r-2,o+4,a+4),n.fillStyle="#93a3a8",n.fillRect(s+5,r+5,o-10,a*.45),n.fillStyle="rgba(255,255,255,0.35)",n.fillRect(s+9,r+7,5,a*.45-4),n.fillStyle="#1b2f86",n.fillRect(s+3,r+3,o-6,2.5)}}let ml=null;function Oy(){if(!ml){const n=gn(Rn,Rn);ky(n.getContext("2d")),ml=ar(n)}return ml}function bn(n,t=1.5){const[e,i,s,r]=sf[n];return[(e+t)/Rn,1-(i+r-t)/Rn,(e+s-t)/Rn,1-(i+t)/Rn]}function Je(n){const[t,e,i,s]=sf[n];return[(t+i*.4)/Rn,1-(e+s*.6)/Rn,(t+i*.6)/Rn,1-(e+s*.4)/Rn]}const di=512,fa=256,hi={side:[0,0,512,160],front:[0,164,150,92],rear:[154,164,150,92],roof:[310,170,30,30],dark:[350,170,30,30],lamp:[390,170,30,30],tail:[430,170,30,30]},js=[-.78,1.5];let Ho=null,Mt=null,Nr=null;const Kt=n=>160-(n-js[0])/(js[1]-js[0])*160;function th(n,t,e,i){const s=Mt.createLinearGradient(0,Kt(i),0,Kt(e));s.addColorStop(0,"#fff6d6"),s.addColorStop(.55,"#e9dba4"),s.addColorStop(1,"#8c8468"),Mt.fillStyle="#1b1c1e",Mt.fillRect(n-2,Kt(i)-2,t+4,Kt(e)-Kt(i)+4),Mt.fillStyle=s,Mt.fillRect(n,Kt(i),t,Kt(e)-Kt(i)),Mt.fillStyle="rgba(40,40,60,0.55)",Mt.fillRect(n+t*.3,Kt(i),2,Kt(e)-Kt(i)),Mt.fillRect(n,Kt(e+.16),t,Kt(e)-Kt(e+.16))}function Fy(){const n=60.23529411764706;Mt.fillStyle="#15161a",Mt.fillRect(0,Kt(-.05),di,160-Kt(-.05));for(const[e,i]of[[.9,2.3],[6.2,7.6]]){Mt.fillStyle="#26282c",Mt.fillRect(e*n,Kt(-.25),(i-e)*n,Kt(-.7)-Kt(-.25));for(const s of[e+.35,i-.35])Mt.fillStyle="#3a3c40",Mt.beginPath(),Mt.arc(s*n,Kt(-.48),.27*70,0,7),Mt.fill()}Mt.fillStyle="#f2f2ee",Mt.fillRect(0,0,di,Kt(.42)),Mt.fillStyle="#0c2a8e",Mt.fillRect(0,Kt(.42),di,Kt(-.05)-Kt(.42)),Mt.fillStyle="#9da2a6",Mt.fillRect(0,0,di,Kt(1.42));const t=[[.25,.62,"door1"],[1.05,1.3,"win"],[2.5,1.3,"door2"],[3.95,.6,"win"],[4.7,.5,"win"],[5.35,1.3,"door2"],[6.8,1.3,"win"],[8.2,0,""]];for(const[e,i,s]of t)if(s==="win")th(e*n,i*n,.72,1.3);else if(s){Mt.fillStyle="#d5231d",Mt.fillRect(e*n,Kt(1.42),i*n,Kt(-.05)-Kt(1.42));const r=s==="door2"?2:1;for(let o=0;o<r;o++){const a=(e+i/r*o)*n,l=i/r*n;th(a+l*.2,l*.6,.62,1.3),Mt.fillStyle="rgba(0,0,0,0.5)",Mt.fillRect(a,Kt(1.42),1.5,Kt(-.05)-Kt(1.42))}Mt.fillStyle="#e7c21c",Mt.fillRect(e*n,Kt(-.02),i*n,3)}lr(Mt,4.6*n,Kt(.2)-6,12,{name:""}),Mt.fillStyle="rgba(60,45,25,0.16)";for(let e=0;e<260;e++)Mt.fillRect(Math.random()*di,Kt(.5)+Math.random()*(160-Kt(.5)),2,2+Math.random()*5)}function eh(n,t){const[,e,i,s]=hi.front;Mt.fillStyle="#d5231d",Mt.fillRect(n,e,i,s),Mt.fillStyle="#9da2a6",Mt.fillRect(n,e,i,s*.06),Mt.fillStyle="#101113",Mt.fillRect(n+i*.06,e+s*.2,i*.88,s*.34),Mt.fillStyle="#2a2f36";for(const[r,o]of[[.09,.36],[.41,.59],[.64,.91]])Mt.fillRect(n+i*r,e+s*.23,i*(o-r),s*.28);Mt.fillStyle="#101113",Mt.fillRect(n+i*.3,e+s*.07,i*.4,s*.11),Mt.fillStyle="#101113",Mt.fillRect(n,e+s*.86,i,s*.14);for(const r of[.16,.84])Mt.fillStyle=t,Mt.beginPath(),Mt.arc(n+i*r,e+s*.7,s*.055,0,7),Mt.fill(),Mt.fillStyle="#55120f",Mt.beginPath(),Mt.arc(n+i*(r<.5?r+.09:r-.09),e+s*.7,s*.04,0,7),Mt.fill()}function qd(){if(Ho)return;Ho=gn(di,fa),Mt=Ho.getContext("2d"),Mt.fillStyle="#15161a",Mt.fillRect(0,0,di,fa),Fy(),eh(hi.front[0],"#fff4c8"),eh(hi.rear[0],"#ff2a1a");const n=(t,e)=>{Mt.fillStyle=e,Mt.fillRect(t[0]-3,t[1]-3,t[2]+6,t[3]+6)};n(hi.roof,"#8d9296"),n(hi.dark,"#131417"),n(hi.lamp,"#fff6d8"),n(hi.tail,"#ff2a1a"),Nr=new ya(Ho),Nr.colorSpace=pn,Nr.anisotropy=2}function Xd(){return qd(),Nr}function zy(n){qd();const[t,e,i,s]=hi.front;Mt.fillStyle="#0b0a08",Mt.fillRect(t+i*.31,e+s*.08,i*.38,s*.09),Mt.fillStyle="#ffb21e",Mt.textAlign="center",Mt.textBaseline="middle";let r=s*.1;Mt.font=`400 ${r}px ${cs}`;const o=Mt.measureText(n).width;o>i*.36&&(r*=i*.36/o,Mt.font=`400 ${r}px ${cs}`),Mt.fillText(n,t+i*.5,e+s*.128),Nr.needsUpdate=!0}function rs(n){const[t,e,i,s]=hi[n];return[(t+.5)/di,1-(e+s-.5)/fa,(t+i-.5)/di,1-(e+.5)/fa]}const En={len:17.77,gap:.25,half:1.315,doorHead:1.88,endDoor:.66},dn=[[0,1.2,1.315,0],[.85,1.2,1.315,.85],[1.05,1.2,1.315,1.05],[1.38,1.16,1.275,1.4],[1.6,1.07,1.19,1.63],[1.72,1,1.12,1.76],[1.88,.83,.95,1.94],[1.98,.62,.74,2.06],[2.05,.34,.42,2.14],[2.07,0,0,2.175]],By=1,Hy=4,Sr=6,Ji=dn.length-1;function rf(n){const t=n==="dm";return{type:n,cab:t?15.9:0,doors:[{z:.97,w:.703},{z:6.11,w:1.406},{z:11.66,w:1.406}].concat(t?[]:[{z:16.8,w:.703}]),windows:[[1.85,3.23],[3.45,4.82],[7.4,8.79],[8.99,10.37],[12.95,14.32],t?[14.54,15.7]:[14.54,15.92]],benches:[[1.52,5.15,7],[7.12,8.14,2,!0],[8.14,9.7,3],[9.7,10.72,2,!0],t?[12.62,15.74,6]:[12.62,16.25,7]]}}function nh(n,t){const e=[];let i=0;for(const[s,r]of t.slice().sort((o,a)=>o[0]-a[0]))s>i+1e-6&&e.push([i,s]),i=Math.max(i,r);return i<n-1e-6&&e.push([i,n]),e}const Gy=n=>[n.z-n.w/2,n.z+n.w/2];function Vy(n,t){const{xc:e,ps:i,z0:s,fy:r}=t,o=rf(t.type),a=En.len,l=(b,T,E)=>[e+b,r+T,s+E],c={emit:1},f={emit:.9},h={emit:.72},u={emit:.35},p=Je("panel"),g=bn("livery"),_=Je("roof"),d=b=>g[1]+(g[3]-g[1])*(Math.min(Ae[1],b)-Ae[0])/(Ae[1]-Ae[0]),m=o.doors.map(Gy),S=o.windows;for(const b of[-1,1]){for(let E=0;E<Ji;E++){const y=(at,st)=>st+(st-at)*.005/Math.max(.05,Math.abs(st-at)+.05),[x,w,P,L]=dn[E],[D,N,k,B]=dn[E+1],U=E===0?-.02:x,R=E<Ji-1?D+.004:D,z=E<Ji-1?B+.004:B,H=E<Ji-1?y(w,N):N,X=(E<Sr?m:[]).concat(E>=By&&E<Hy?S:[]),Y=[-b*(R-U),H-w,0],G=E===7,K=E>=7;for(const[at,st]of nh(a,X)){const xt=G?bn("light"):K?Je("ceiling"):p;n.quad("car",l(b*w,U,at),l(b*w,U,st),l(b*H,R,st),l(b*H,R,at),Y,xt,G?{emit:2}:E===0?f:c);const wt=E>=5?_:[g[0],d(L),g[2],d(z)];n.quad("car",l(b*P,L,at),l(b*P,L,st),l(b*k,z,st),l(b*k,z,at),[b,.2,0],wt,h)}}n.quad("car",l(b*1.2,Ae[0],0),l(b*1.2,Ae[0],a),l(b*1.315,0,a),l(b*1.315,0,0),[b,0,0],[g[0],d(Ae[0]),g[2],d(0)],h);const T=t.open&&b===i;for(const E of o.doors){const y=E.w>1?[[E.z-E.w/2,E.z,-1],[E.z,E.z+E.w/2,1]]:[[E.z-E.w/2,E.z+E.w/2,E.z<a/2?1:-1]];for(const[L,D,N]of y){const k=T?N*(D-L):0,B=T?.05:.025,U=L+k,R=D+k;for(const[z,H]of[[0,2],[2,4],[4,6]]){const X=dn[z],Y=dn[H],G=at=>at/dn[Sr][3],K=(at,st,xt,wt,Ft)=>{const Yt=bn(at),kt=[Yt[0],Yt[1]+(Yt[3]-Yt[1])*G(X[3]),Yt[2],Yt[1]+(Yt[3]-Yt[1])*G(Y[3])];n.quad("car",l(b*st,X[3],U),l(b*st,X[3],R),l(b*xt,Y[3],R),l(b*xt,Y[3],U),wt,kt,Ft)};K("doorOut",X[2]+B,Y[2]+B,[b,0,0],h),T||K("doorIn",X[2]-.02,Y[2]-.02,[-b,0,0],c)}}const x=Je("black");for(const[L,D]of[[E.z-E.w/2,1],[E.z+E.w/2,-1]])for(let N=0;N<Sr;N++){const k=dn[N],B=dn[N+1];n.quad("car",l(b*k[1],k[0],L),l(b*k[2],k[3],L),l(b*B[2],B[3],L),l(b*B[1],B[0],L),[0,0,D],x,u)}const w=dn[Sr];if(n.quad("car",l(b*w[1],w[0],E.z-E.w/2),l(b*w[1],w[0],E.z+E.w/2),l(b*w[2],w[3],E.z+E.w/2),l(b*w[2],w[3],E.z-E.w/2),[0,-1,0],x,u),!T)continue;const P=t.edge+.03;n.quad("car",l(b*1.2,.004,E.z-E.w/2),l(b*P,.004,E.z-E.w/2),l(b*P,.004,E.z+E.w/2),l(b*1.2,.004,E.z+E.w/2),[0,1,0],Je("steel"),{emit:.7})}}const M=nh(a,m.map(([b,T])=>[b-.12,T+.12])).map(b=>[b,"floor"]).concat(m.map(([b,T])=>[[Math.max(0,b-.12),Math.min(a,T+.12)],"floorDark"]));for(const[[b,T],E]of M)for(let y=b;y<T-1e-6;y+=1.2){const x=Math.min(T,y+1.2);for(const[w,P]of[[-1.215,0],[0,1.215]])n.quad("car",l(w,0,y),l(P,0,y),l(P,0,x),l(w,0,x),[0,1,0],bn(E),{emit:.86})}n.quad("car",l(-1.2,Ae[0],0),l(1.2,Ae[0],0),l(1.2,Ae[0],a),l(-1.2,Ae[0],a),[0,-1,0],Je("under"),{emit:.1});const A=[[0,1,t.endOpen[0],"end"],[a,-1,t.endOpen[1],o.cab?"cabface":"end"]];o.cab&&A.push([o.cab,-1,!1,"bulkhead"]);for(const[b,T,E,y]of A){const x=b+T*.05,w=En.endDoor/2;for(let P=0;P<Ji;P++){const L=dn[P],D=dn[P+1],N=E&&P<Sr?[[-1,-w],[w,1]]:[[-1,1]];for(const[k,B]of N){const U=(R,z)=>Math.abs(R)===1?R*z:R;if(y!=="cabface"&&n.quad("car",l(U(k,L[1]),L[0],x),l(U(B,L[1]),L[0],x),l(U(B,D[1]),D[0],x),l(U(k,D[1]),D[0],x),[0,0,T],P>=7?Je("ceiling"):p,c),y!=="bulkhead")if(y==="cabface"){const R=rs("front"),z=X=>R[0]+(R[2]-R[0])*(.5+X/(2*En.half)),H=X=>R[1]+(R[3]-R[1])*((X-Ae[0])/(dn[Ji][3]-Ae[0]));n.quadUV("train",l(-L[2],L[3],b),l(L[2],L[3],b),l(D[2],D[3],b),l(-D[2],D[3],b),[0,0,-T],[z(-L[2]),H(L[3])],[z(L[2]),H(L[3])],[z(D[2]),H(D[3])],[z(-D[2]),H(D[3])],{emit:.8})}else n.quad("car",l(U(k,L[2]),L[3],b),l(U(B,L[2]),L[3],b),l(U(B,D[2]),D[3],b),l(U(k,D[2]),D[3],b),[0,0,-T],Je("under"),{emit:.5})}}if(y==="cabface"){const P=rs("front"),L=D=>P[1]+(P[3]-P[1])*((D-Ae[0])/(dn[Ji][3]-Ae[0]));n.quadUV("train",l(-1.2,Ae[0],b),l(1.2,Ae[0],b),l(1.315,0,b),l(-1.315,0,b),[0,0,-T],[P[0]+(P[2]-P[0])*.04,L(Ae[0])],[P[2]-(P[2]-P[0])*.04,L(Ae[0])],[P[2],L(0)],[P[0],L(0)],{emit:.8})}else if(!E||y==="bulkhead"){const P=bn(y==="bulkhead"?"doorIn":"endDoor");n.quad("car",l(T*-w,0,x+T*.01),l(T*w,0,x+T*.01),l(T*w,En.doorHead,x+T*.01),l(T*-w,En.doorHead,x+T*.01),[0,0,T],P,{emit:.94})}}return o}const Ge={front:.68,top:.44,back:.9};function Wy(n,t,e){const{xc:i,ps:s,z0:r,fy:o}=t,a=rf(t.type),l=En.len,c=(v,M,A)=>[i+v,o+M,r+A],f=bn("moquette"),h=Je("black"),u=bn("pole"),p={emit:.92},g={emit:1},_={emit:.72},d=(v,M,A,b,T=.018)=>{for(const[E,y]of[[-1,0],[1,0],[0,-1],[0,1]]){const x=y?T:0,w=E?T:0;n.quad("car",c(v+E*T-x,A,M+y*T-w),c(v+E*T+x,A,M+y*T+w),c(v+E*T+x,b,M+y*T+w),c(v+E*T-x,b,M+y*T-w),[E,0,y],u,g)}},m=a.cab?[1.52,5.15,7.12,10.72,12.62]:[1.52,5.15,7.12,10.72,12.62,16.25];for(const v of[-1,1]){for(const[A,b,T,E]of a.benches){const y=(b-A)/T;for(let x=0;x<T;x++){const w=A+x*y+.03,P=w+y-.06;if(E){n.quad("car",c(v*1.13,.42,w),c(v*1.13,.42,P),c(v*1.15,.92,P),c(v*1.15,.92,w),[-v,0,0],f,p);continue}n.quad("car",c(v*Ge.front,Ge.top,w),c(v*1.17,Ge.top,w),c(v*1.17,Ge.top,P),c(v*Ge.front,Ge.top,P),[0,1,0],f,p),n.quad("car",c(v*1.14,Ge.top+.02,w),c(v*1.14,Ge.top+.02,P),c(v*1.19,Ge.back,P),c(v*1.19,Ge.back,w),[-v,.1,0],f,p)}if(!E){n.quad("car",c(v*Ge.front,0,A),c(v*Ge.front,0,b),c(v*Ge.front,Ge.top,b),c(v*Ge.front,Ge.top,A),[-v,0,0],bn("plinth"),{emit:.8});for(let x=0;x<=T;x++){const w=A+x*y;n.quad("car",c(v*.76,.665,w-.025),c(v*1.15,.665,w-.025),c(v*1.15,.665,w+.025),c(v*.76,.665,w+.025),[0,1,0],h,{emit:.7}),n.quad("car",c(v*.76,.6,w-.025),c(v*.76,.6,w+.025),c(v*.76,.665,w+.025),c(v*.76,.665,w-.025),[-v,0,0],h,{emit:.5})}}}for(const A of m){const b=bn("seatEnd");for(const T of[-1,1])n.quad("car",c(v*.66,0,A+T*.012),c(v*1.19,0,A+T*.012),c(v*1.19,1.3,A+T*.012),c(v*.66,1.3,A+T*.012),[0,0,T],b,g);d(v*.7,A,0,1.93)}for(const[A,b]of[[1.52,5.15],[7.12,10.72],[12.62,a.cab?15.7:16.25]]){const E=v*.72,y=.016;n.quad("car",c(E-y,1.87-y,A),c(E+y,1.87-y,A),c(E+y,1.87-y,b),c(E-y,1.87-y,b),[0,-1,0],u,g);for(const N of[-1,1])n.quad("car",c(E+N*y,1.87-y,A),c(E+N*y,1.87-y,b),c(E+N*y,1.87+y,b),c(E+N*y,1.87+y,A),[N,0,0],u,g);const x=[v*1.061,1.592],w=[v*.821,1.872],P=(A+b)/2,L=(N,k,B)=>{const U=v>0?k-B/2:k+B/2,R=v>0?k+B/2:k-B/2;n.quad("sheet",c(x[0],x[1],U),c(x[0],x[1],R),c(w[0],w[1],R),c(w[0],w[1],U),[-v,-.6,0],N,{emit:.95})};if(e&&e.strip&&L(e.strip,P,1.57),e&&e.ads&&e.ads.length){const N=Math.round(A*3+(v>0?1:0));L(e.ads[N%e.ads.length],P-1.2,.56),L(e.ads[(N+1)%e.ads.length],P+1.2,.56)}const D=v>0?-.26:.26;n.box("car",i+Math.min(v*.85,v*.93),o+1.645,r+P-.3,i+Math.max(v*.85,v*.93),o+1.795,r+P+.3,Je("black"),{emit:.5},"xXyzZ"),n.quad("dyn",c(v*.846,1.68,P+D),c(v*.846,1.68,P-D),c(v*.846,1.76,P-D),c(v*.846,1.76,P+D),[-v,0,0],ay("board2",2,.5),{emit:1.3})}for(const A of a.doors.filter(b=>b.w>1)){const b=A.z+A.w/2+.16,T=.07,E=v>0?b-T:b+T,y=v>0?b+T:b-T;n.quad("car",c(v*1.19,1.2,E),c(v*1.19,1.2,y),c(v*1.19,1.34,y),c(v*1.19,1.34,E),[-v,0,0],bn("alarm"),g)}const M=(A,b,T,E,y)=>{const x=v>0?b+T/2:b-T/2,w=v>0?b-T/2:b+T/2;n.quad("car",c(v*1.322,E,x),c(v*1.322,E,w),c(v*1.322,y,w),c(v*1.322,y,x),[v,0,0],bn(A),_)};if(M("logo",8.89,.56,.5,.78),M("number",a.cab?5:16,.44,.5,.65),a.cab)for(const[A,b]of[[0,1.05],[-.05,0]])n.quad("car",c(v*1.323,A,16.35),c(v*1.323,A,l),c(v*1.323,b,l),c(v*1.323,b,16.35),[v,0,0],Je("red"),_)}for(const v of a.doors.filter(M=>M.w>1))d(0,v.z,0,2.06);const S=Je("under");for(const[v,M,A]of[[2,4.65,.85],[13.1,15.75,.85],[6.3,11.4,1.05]])n.box("car",i-A,o-.96,r+v,i+A,o-.6,r+M,S,{emit:.16},"xXzZ")}function qy(n){const{xc:t,ps:e,z0:i,fy:s}=n,r=rf(n.type),o=En.len,a=1.17,l=r.cab?r.cab-.05:o,c=[{ax:t,az:i,bx:t,bz:i+l,hw:a,ya:s,yb:s,surface:"metal"}],f=[[t-e*a,i,t-e*a,i+l]],h=[];let u=0;for(const g of n.open?r.doors:[]){const _=Math.max(g.w-.1,.95);f.push([t+e*a,i+u,t+e*a,i+g.z-_/2]),u=g.z+_/2,h.push([i+g.z,_]),c.push({ax:t+e*.9,az:i+g.z,bx:t+e*(n.edge+.3),bz:i+g.z,hw:_/2-.02,ya:s,yb:0,surface:"metal"}),g.w>1&&f.push([t,i+g.z,t,i+g.z])}f.push([t+e*a,i+u,t+e*a,i+l]);const p=.92/2;for(const[g,_]of[[0,n.endOpen[0]],[l,n.endOpen[1]&&!r.cab]])_?f.push([t-a,i+g,t-p,i+g],[t+p,i+g,t+a,i+g]):f.push([t-a,i+g,t+a,i+g]);for(const g of[-1,1])for(const[_,d,,m]of r.benches){if(m)continue;const S=t+g*(Ge.front-.04);f.push([S,i+_,S,i+d],[S,i+_,t+g*a,i+_],[S,i+d,t+g*a,i+d])}return{cells:c,walls:f,doors:h}}const Pr={L:58,z0:2.1,floor:.03,offset:.08},Xy="Please mind the gap between the train and the platform.",Go=["Platform closed","Please pass along inside the train"];function $y(n,t,e,i){const{b:s,sheet:r}=n,o=y=>e*y,a=o(nt.track-Pr.offset),l=-e,c=nt.track-Pr.offset-nt.edge,f=Pr.floor,h=En.len+En.gap,u=[{type:"undm",open:!0,endOpen:[!1,!0]},{type:"t",open:!1,endOpen:[!0,!0]},{type:"dm",open:!0,endOpen:[!0,!1]}].map((y,x)=>({...y,xc:a,ps:l,fy:f,edge:c,z0:Pr.z0+x*h})),p=[],g=[],_=[],d=[],m=[];for(const y of u){Vy(s,y),Wy(s,y,i);const x=qy(y);p.push(...x.cells),g.push(...x.walls);for(const[w,P]of x.doors)m.push([w-P/2,w+P/2]),P>1&&s.addLight(o(nt.edge-.5),1.3,w,.55,5.5,!1,[1,.98,.9])}for(let y=0;y<u.length-1;y++){const x=u[y].z0+En.len,w=u[y+1].z0;p.push({ax:a,az:x-.25,bx:a,bz:w+.25,hw:.45,ya:f,yb:f,surface:"metal"});for(const P of[-1,1])g.push([a+P*.47,x,a+P*.47,w]);s.quad("car",[a-.42,f-.01,x-.02],[a+.42,f-.01,x-.02],[a+.42,f-.01,w+.02],[a-.42,f-.01,w+.02],[0,1,0],Je("steel"),{emit:.5})}const S=r.add(250,70,(y,x,w)=>so(y,x,w,Go[0],{sub:Go[1],bg:"#f6f6f1",fg:"#16213f"})),v=bn("hoarding"),M=nt.back-.12,A=nt.edge,b=2.45;for(const[y,x]of[[u[1].z0+.3,-1],[u[1].z0+En.len-.3,1]]){for(const U of[x,-x]){const R=y+U*.03;for(let z=M;z<A-1e-6;z+=.61){const H=Math.min(A,z+.61);s.quad("car",[o(z),0,R],[o(H),0,R],[o(H),b,R],[o(z),b,R],[0,0,U],v,{emit:.42})}}s.quad("car",[o(M),b,y-.03],[o(A),b,y-.03],[o(A),b,y+.03],[o(M),b,y+.03],[0,1,0],Je("black"),{emit:.2}),s.quad("car",[o(A),0,y-.03],[o(A),0,y+.03],[o(A),b,y+.03],[o(A),b,y-.03],[e,0,0],Je("black"),{emit:.2}),g.push([o(M),y,o(A+.3),y]);const w=-.2,P=1.5,L=.42,D=1.25,N=y+x*.045,k=w-x*P/2,B=w+x*P/2;s.quad("sheet",[k,D,N],[B,D,N],[B,D+L,N],[k,D+L,N],[0,0,x],S,{emit:.9}),_.push({x:w,y:D+L/2,z:N,r:7,n:[0,x],label:"read notice",title:"NOTICE",text:`${Go[0]}. ${Go[1]}. We apologise for any inconvenience.`})}const T=(y,x,w)=>{const P=y.state.wrong,L=y.director.announcer,D=P>=2&&L.rng.chance(Math.min(.75,P*.2));L.say({text:D?w:x,chime:"none",tag:"(inside the train)",odd:D,urgent:!0})},E=[[wu[0],fl[1]],[wu[1],fl[2]],[Xy,fl[0]]];return u.forEach((y,x)=>{const w=x===1?5:1.2;d.push({x0:Math.min(a-1.1,a+1.1),x1:Math.max(a-1.1,a+1.1),z0:y.z0+w,z1:y.z0+En.len-w,fire:P=>{T(P,E[x][0],E[x][1]),x===0&&(P.audio.sfx("doorChime"),P.director.setHint("The saloon lights are on. Nobody is aboard.",5),P.state.boarded=(P.state.boarded||0)+1)}})}),_.push({x:a,y:f+1.2,z:u[2].z0+15.82,r:3.2,n:[0,-1],label:"try cab door",title:"CAB DOOR",text:"Locked. Through the glass of the next door along, the platform carries on."}),{cells:p,walls:g,items:_,zones:d,gaps:m,cars:u}}const jr={type:"platform",sheetSize:1024,plan(n,t){const e=!!(t.stretch&&t.stretch.first&&t.idx===0),i=t.platformL||(e?30:n.pick([30,36,36,42])),s=n.sign(),r=t.stretch,o=r?r.plan.slice(0,t.idx).filter(h=>h==="platform"||h==="trainstop").length:0,a=r&&r.dir||"north",l=o%2?a==="north"?"south":"north":a,c=nt.back-.4,f=nt.cx+nt.R+.4;return{p:{L:i,side:s,start:e,dir:l,dark:!e&&n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.3+.1*(t.wrong||0))?n.int(0,6):-1,figure:!e&&(t.wrong||0)>=1&&n.chance(.25+.1*(t.wrong||0))},exits:[{x:0,y:0,z:i,yaw:0}],box:s>0?[c,-2.4,-1.2-.2,f,nt.cy+nt.R+.3,i+xe.depth+.2]:[-f,-2.4,-1.2-.2,-c,nt.cy+nt.R+.3,i+xe.depth+.2]}},build(n){const{b:t,p:e}=n,{L:i,side:s}=e;my(t,i,s,{plain:!!e.ghost}),Zu(t,0,1,s,!e.start),Zu(t,i,-1,s,!0),e.ghost?(t.addPortal(0,0,0,0),_i(t,{x:0,y:0,z:0,yaw:0},1.56)):e.start||(t.addPortal(0,0,0,0),ei(t,{x:0,y:0,z:0,yaw:0},Ut.crown)),t.addPortal(0,0,i,0);const r=e.ghost?Iy(n,i,s):by(n,i,s),o=_=>s*_,a=(nt.back+nt.edge)/2,l=(nt.edge-nt.back)/2,c=[{ax:o(a),az:0,bx:o(a),bz:i,hw:l,ya:0,yb:0}],f=Ut.W/2,h=e.train?$y(n,i,s,r.art):null,u=[[o(nt.back+.08),0,o(nt.back+.08),i],[o(nt.back),i,o(-f),i],[o(f),i,o(nt.edge),i]];let p=0;for(const[_,d]of h?h.gaps:[])u.push([o(nt.edge-.1),p,o(nt.edge-.1),_]),p=d;u.push([o(nt.edge-.1),p,o(nt.edge-.1),i]),e.start?u.push([o(nt.back),0,o(nt.edge),0]):u.push([o(nt.back),0,o(-f),0],[o(f),0,o(nt.edge),0]);for(const _ of r.walls)u.push(_);const g={zones:r.zones};return h&&(c.push(...h.cells),u.push(...h.walls),r.items.push(...h.items),g.zones.push(...h.zones)),e.start&&(g.spawn=r.spawn||{x:o(.1),z:6,yaw:0}),{cells:c,walls:u,items:r.items,extra:g}}},Yy={type:"trainstop",sheetSize:1024,plan(n,t){const e=jr.plan(n,{...t,platformL:Pr.L});return Object.assign(e.p,{train:!0,figure:!1,start:!1}),e},build:n=>jr.build(n)},Zy={type:"ghost",sheetSize:1024,plan(n,t){const e=jr.plan(n,{...t,platformL:36});return Object.assign(e.p,{ghost:!0,figure:!1,start:!1,dark:!1,faulty:n.int(0,2)}),e},build:n=>jr.build(n)},jy=.16,kr=.3,Xn=1.6,Qn=(n,t)=>n+t*kr,ms=(n,t,e)=>n+t*jy*e;function Aa(n,t,e,i,s=[-1.5,-.5,.5,1.5],r=0,o=null){const a=Ot("stairTread"),l=Ot("riser");for(let c=0;c<e;c++){const f=Qn(t,c),h=Qn(t,c+1),u=ms(r,i>0?c+1:c,i),p=ms(r,i>0?c:c+1,i);for(let g=0;g<s.length-1;g++){const _=s[g],d=s[g+1];i>0?n.quad("atlas",[d,u,h],[_,u,h],[_,u,f],[d,u,f],[0,1,0],a,o):n.quad("atlas",[_,u,f],[d,u,f],[d,u,h],[_,u,h],[0,1,0],a,o),i>0?n.quad("atlas",[_,p,f],[d,p,f],[d,u,f],[_,u,f],[0,0,-1],l,o):n.quad("atlas",[_,p,h],[d,p,h],[d,u,h],[_,u,h],[0,0,1],l,o)}}}function of(n,t,e,i,s,r,o=.025,a="rubber",l=null){const c=Vt(a),f=[t-o,i+o,e],h=[t+o,i+o,e],u=[t+o,r+o,s],p=[t-o,r+o,s];n.quad("atlas",f,h,u,p,[0,1,0],c,l);const g=t>0?-1:1,_=t+g*o;n.quad("atlas",[_,i-o,e],[_,i+o,e],[_,r+o,s],[_,r-o,s],[g,0,0],c,l)}const Ky={type:"stairs",plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=t.steps||n.pick([14,16,18,20]),s=Qn(0,i),r=ms(0,i,e),o=Qn(Xn,i)+Xn;return{p:{dir:e,n:i,run:s,rise:r,len:o,lights:{dark:n.chance(.04+.04*(t.wrong||0)),faulty:n.chance(.25)?n.int(0,2):-1}},exits:[{x:0,y:r,z:o,yaw:0}],box:[-1.9,Math.min(0,r)-.4,0,1.9,Math.max(0,r)+3.3,o]}},build(n){const{b:t,p:e}=n,i=Qn(Xn,e.n),s=h=>Qe((h-Xn)/e.run,0,1)*e.rise,r=[0,Xn],o=Math.round(e.run/.9);for(let h=1;h<o;h++)r.push(Xn+e.run*h/o);r.push(i,e.len);const a=r.map(h=>({x:0,y:s(h),z:h,yaw:0})),l=Cn(t,a,Vc(Ut),{floor:null});for(const h of l.cells)h.surface="stone";const c=Ut.W/2,f=Ot("floor");for(let h=0;h<3;h++){const u=-c+h,p=u+1;t.quad("atlas",[u,0,0],[p,0,0],[p,0,Xn],[u,0,Xn],[0,1,0],f),t.quad("atlas",[u,e.rise,i],[p,e.rise,i],[p,e.rise,e.len],[u,e.rise,e.len],[0,1,0],f)}Aa(t,Xn,e.n,e.dir);for(const h of[-c+.09,c-.09])of(t,h,Xn-.3,.95,i+.3,e.rise+.95);return t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),ei(t,a[0],Ut.crown),hd(t,a,l.dist,Ut.crown,e.lights),{cells:l.cells,walls:l.walls,items:[],frames:a}}},af=5.4,we=af/2,Ec=1.2,wc=3.7,gl=Gc(af,Ec,wc),Ui=3.6,$n=1.2,ih=Math.tan(Math.PI/6),Fs=[-.95,.95],Fn=.5,rn=.92,Jy={type:"escalator",sheetSize:512,plan(n,t){const e=t.dir||(n.chance(.5)?1:-1),i=n.pick([9.6,12,14.4]),s=i*ih*e,r=Ui*2+i;return{p:{dir:e,run:i,rise:s,len:r,faulty:n.chance(.3)?n.int(0,3):-1},exits:[{x:0,y:s,z:r,yaw:0}],box:[-we-.4,Math.min(0,s)-.5,0,we+.4,Math.max(0,s)+4.3,r]}},build(n){const{b:t,p:e,sheet:i,rng:s}=n,r=Ui,o=Ui+e.run,a=R=>Qe((R-r)/e.run,0,1)*e.rise,l=[0,Ui-$n,r],c=Math.round(e.run/1.2);for(let R=1;R<=c;R++)l.push(r+e.run*R/c);l.push(o+$n,e.len);const f=l.map(R=>({x:0,y:a(R),z:R,yaw:0}));Cn(t,f,gl,{floor:null}),ir(t,f[0],gl,Ut,1,"tile"),ir(t,f[f.length-1],gl,Ut,-1,"tile");const h=[0,1,0],u=Ot("floor"),p=Ot("deck"),g=Vt("metal");for(const[R,z,H]of[[0,Ui-$n,0],[o+$n,e.len,e.rise]])t.grid("atlas",[-we-.04,H,R],[af+.08,0,0],[0,0,z-R],5,2,h,u,null,!0);const _=.4,d=Math.round(e.run/_),m=e.rise/d,S=R=>R===d?o:r+R*_,v=R=>R===d?e.rise:R*m,M=Ot("tread"),A=Vt("steelDark"),b=Ot("comb");for(const R of Fs){const z=R-Fn,H=R+Fn;for(const[X,Y,G]of[[Ui-$n,r,0],[o,o+$n,e.rise]])t.quad("atlas",[z,G,X],[H,G,X],[H,G,Y],[z,G,Y],h,p);t.quad("atlas",[z,.003,r-.25],[H,.003,r-.25],[H,.003,r],[z,.003,r],h,b),t.quad("atlas",[H,e.rise+.003,o+.25],[z,e.rise+.003,o+.25],[z,e.rise+.003,o],[H,e.rise+.003,o],h,b);for(let X=0;X<d;X++){const Y=S(X),G=S(X+1),K=v(m>0?X+1:X),at=v(m>0?X:X+1);t.quad("atlas",[z,K,Y],[H,K,Y],[H,K,G],[z,K,G],h,M);const st=m>0?Y:G;t.quad("atlas",[z,at,st],[H,at,st],[H,K,st],[z,K,st],[0,0,m>0?-1:1],A)}}_i(t,f[0],we+.04),_i(t,f[f.length-1],we+.04),_i(t,{x:0,y:0,z:Ui-$n,yaw:0},we),_i(t,{x:0,y:e.rise,z:o+$n,yaw:0},we);const T=[-we,Fs[0]-Fn,Fs[0]+Fn,Fs[1]-Fn,Fs[1]+Fn,we],E=Ui-$n,y=o+$n,x=[[E,r,0,0],[r,o,0,e.rise],[o,y,e.rise,e.rise]];for(const[R,z,H,X]of x){for(let Y=0;Y<6;Y+=2){const G=T[Y],K=T[Y+1];t.quad("atlas",[G,H+rn,R],[K,H+rn,R],[K,X+rn,z],[G,X+rn,z],h,p)}for(const[Y,G]of[[T[1],1],[T[2],-1],[T[3],1],[T[4],-1]])t.quad("atlas",[Y,H,R],[Y,X,z],[Y,X+rn,z],[Y,H+rn,R],[G,0,0],g),t.quad("atlas",[Y,H-.3,R],[Y,X-.3,z],[Y,X,z],[Y,H,R],[G,0,0],Vt("steelDark")),of(t,Y+G*.03,R,H+rn+.04,z,X+rn+.04,.04)}for(let R=0;R<6;R+=2){const z=T[R],H=T[R+1];t.quad("atlas",[z,0,E],[H,0,E],[H,rn,E],[z,rn,E],[0,0,-1],g),t.quad("atlas",[z,e.rise,y],[H,e.rise,y],[H,e.rise+rn,y],[z,e.rise+rn,y],[0,0,1],g)}const w=i.add(150,46,(R,z,H)=>so(R,z,H,"Stand on the right",{bg:"#0019a8"}));for(let R=0;R<3;R++){const z=r+e.run*(.2+.3*R),H=a(z)+rn;t.quad("sheet",[.24,H+.02,z],[-.24,H+.02,z],[-.24,H+.17,z],[.24,H+.17,z],[0,0,-1],w),t.quad("sheet",[-.24,H+.02,z+.01],[.24,H+.02,z+.01],[.24,H+.17,z+.01],[-.24,H+.17,z+.01],[0,0,1],w)}const P=Math.max(2,Math.round(e.run/3.2));for(let R=0;R<P;R++){const z=r+e.run*(R+.5)/P,H=a(z)+rn,X=e.faulty===R;t.box("atlas",-.04,H,z-.04,.04,H+1.25,z+.04,Vt("steelDark"),null,"xXzZ"),t.box("atlas",-.2,H+1.25,z-.2,.2,H+1.36,z+.2,Ot("uplight"),{emit:1.5,flick:X},"xXzZY"),t.addLight(0,H+2.2,z,.5,8,X,[1,.95,.82])}for(const[R,z]of[[1.6,0],[e.len-1.6,e.rise]])_s(t,{x:0,y:z,z:R,yaw:Math.PI/2},wc-.1,{power:.6});t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),ei(t,f[0],Ut.crown);const L=[];for(let R=0;R<4;R++)L.push(i.add(84,116,(z,H,X)=>io(z,H,X,s,s.chance(Math.min(.6,(n.env.wrong||0)*.15)))));const D=R=>we*Math.cos(Math.asin(Qe((R-Ec)/(wc-Ec),0,1)));let N=0;for(let R=r+.8;R<o-.4;R+=2.25,N++){const z=a(R),H=ih*Math.sign(e.rise)*.27;for(const X of[-1,1]){const Y=X*(D(1.55)-.04),G=X*(D(2.3)-.04);t.quad("sheet",[Y,z+1.55-H*X,R-.27*X],[Y,z+1.55+H*X,R+.27*X],[G,z+2.3+H*X,R+.27*X],[G,z+2.3-H*X,R-.27*X],[-X,0,0],L[(N+(X>0?2:0))%4])}}const k=[{ax:0,az:0,bx:0,bz:E,hw:we,ya:0,yb:0},{ax:0,az:y,bx:0,bz:e.len,hw:we,ya:e.rise,yb:e.rise}],B=[[-we,0,-we,E],[we,0,we,E],[-we,y,-we,e.len],[we,y,we,e.len]],U=Ut.W/2;for(const R of[0,e.len])B.push([-we,R,-U,R],[U,R,we,R]);for(const R of Fs){for(const[z,H,X,Y]of x)k.push({ax:R,az:z,bx:R,bz:H,hw:Fn,ya:X,yb:Y,surface:"metal"});B.push([R-Fn,E,R-Fn,y],[R+Fn,E,R+Fn,y])}for(let R=0;R<6;R+=2)B.push([T[R],E,T[R+1],E],[T[R],y,T[R+1],y]);return{cells:k,walls:B,items:[],frames:f}}},Qy={type:"deadend",plan(){return{p:{len:3},exits:[],box:[-1.9,-.4,0,1.9,3.3,3]}},build(n){const{b:t,p:e,sheet:i}=n,s=[{x:0,y:0,z:0,yaw:0},{x:0,y:0,z:1.5,yaw:0},{x:0,y:0,z:e.len,yaw:0}],r=Cn(t,s,Ut,{floor:Ot("floor")}),o=Ot("shutter");ir(t,{x:0,y:0,z:e.len-.02,yaw:0},Ma(Ut),null,-1,"atlas",(f,h)=>[o[0]+(o[2]-o[0])*(f/Ut.W+.5),o[1]+(o[3]-o[1])*(h/Ut.crown)]),t.addPortal(0,0,0,0),ei(t,s[0],Ut.crown);const a=i.add(200,60,(f,h,u)=>so(f,h,u,"No exit",{sub:"This way is closed"})),l=e.len-.05;t.quad("sheet",[.6,1.3,l],[-.6,1.3,l],[-.6,1.66,l],[.6,1.66,l],[0,0,-1],a);const c=[{x:0,y:1.48,z:l,r:5,label:"read sign",title:"SIGN",text:"No exit. This way is closed."}];return{cells:r.cells,walls:r.walls.concat([[-1.5,e.len-.3,1.5,e.len-.3]]),items:c,frames:s}}},Ac={uPeriod:3,height:3.4},Lr="#1e4a35",Rc="#3f7a5c",$d="#e9e1c4";function tx(n,t){const e=new ge(1907),i=t/Ac.height,s=g=>t-g*i;n.fillStyle="#e4dcc2",n.fillRect(0,0,t,t);const r=40,o=t/r,a=.15*i;n.fillStyle="#b9b29a",n.fillRect(0,s(1.72),t,s(.2)-s(1.72));for(let g=0;g<10;g++)for(let _=0;_<r;_++)n.fillStyle=Sa($d,e.range(-.06,.04)),n.fillRect(_*o+.5,s(.2+(g+1)*.152)+.5,o-1,a-1),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(_*o+1,s(.2+(g+1)*.152)+1,o-2,2);const l=(g,_,d)=>{n.fillStyle=d,n.fillRect(0,s(_),t,s(g)-s(_)),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(0,s(_),t,Math.max(1,(s(g)-s(_))*.2))};l(0,.2,Lr),l(1.72,1.78,Lr),l(1.98,2.05,Lr),n.fillStyle="#2a5d45",n.fillRect(0,s(1.98),t,s(1.78)-s(1.98));const c=12,f=t/c,h=(s(1.98)+s(1.78))/2,u=(s(1.78)-s(1.98))*.42;for(let g=0;g<c;g++){const _=(g+.5)*f;n.fillStyle=Lr,n.beginPath(),n.ellipse(_,h,f*.2,u,0,0,7),n.fill(),n.fillStyle=Rc,n.beginPath(),n.ellipse(_-f*.05,h-u*.25,f*.08,u*.4,0,0,7),n.fill();for(const d of[-1,1])n.fillStyle=Rc,n.beginPath(),n.moveTo(_+d*f*.22,h+u*.7),n.quadraticCurveTo(_+d*f*.5,h,_+d*f*.3,h-u*.9),n.quadraticCurveTo(_+d*f*.3,h,_+d*f*.22,h+u*.7),n.fill();n.fillStyle="rgba(0,0,0,0.22)",n.fillRect(g*f,s(1.98),1,s(1.78)-s(1.98))}const p=n.createLinearGradient(0,0,0,t);p.addColorStop(0,"rgba(30,24,12,0.3)"),p.addColorStop(.35,"rgba(30,24,12,0.04)"),p.addColorStop(.9,"rgba(30,24,12,0)"),p.addColorStop(1,"rgba(30,24,12,0.25)"),n.fillStyle=p,n.fillRect(0,0,t,t),Be(n,0,0,t,t,1907,.8,!1)}let _l=null;function ex(){if(!_l){const n=gn(512,512);tx(n.getContext("2d"),512),_l=ar(n,{repeatU:!0})}return _l}function nx(n,t,e){n.clearRect(0,0,t,e),n.fillStyle="#2a2c30",n.beginPath(),n.arc(t/2,e/2,t*.49,0,7),n.fill(),n.fillStyle="#f5cf12",n.beginPath(),n.arc(t/2,e/2,t*.42,0,7),n.fill(),n.strokeStyle="#fff",n.lineWidth=t*.07,n.lineCap="round";for(const i of[.16,.27])n.beginPath(),n.arc(t*.42,e*.56,t*i,-1.1,.3),n.stroke()}function sh(n,t,e,i=!1){n.clearRect(0,0,t,e),n.fillStyle=i?"#1c1d20":"#6e7377",n.beginPath(),n.roundRect(1,1,t-2,e-2,t*.45),n.fill(),n.strokeStyle=i?"#3a3c40":"#3f4347",n.lineWidth=3,n.beginPath(),n.roundRect(3,3,t-6,e-6,t*.4),n.stroke(),n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(t*.25,e*.12,t*.12,e*.7)}function vl(n,t,e,i){n.fillStyle="#0a0a0b",n.fillRect(0,0,t,e),n.lineCap="round",n.lineWidth=t*.16,i==="no"?(n.strokeStyle="#ff2a1c",n.beginPath(),n.moveTo(t*.25,e*.25),n.lineTo(t*.75,e*.75),n.moveTo(t*.75,e*.25),n.lineTo(t*.25,e*.75),n.stroke()):i==="go"?(n.strokeStyle="#2ee35a",n.beginPath(),n.moveTo(t*.5,e*.8),n.lineTo(t*.5,e*.22),n.moveTo(t*.24,e*.46),n.lineTo(t*.5,e*.2),n.lineTo(t*.76,e*.46),n.stroke()):(n.strokeStyle="#ffb21e",n.beginPath(),n.moveTo(t*.28,e*.5),n.lineTo(t*.72,e*.5),n.stroke())}function ix(n,t,e,i){const s=n.createLinearGradient(0,0,t,0);s.addColorStop(0,"#8b9094"),s.addColorStop(.5,"#c3c7ca"),s.addColorStop(1,"#84898d"),n.fillStyle=s,n.fillRect(0,0,t,e),n.fillStyle="#2d3034",n.fillRect(0,0,t,e*.1),n.fillRect(0,e*.9,t,e*.1),n.fillStyle="#16205e",n.fillRect(t*.14,e*.2,t*.72,e*.2),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${e*.15}px ${oe}`,n.fillText(String(i),t/2,e*.305)}function sx(n,t,e,i){n.fillStyle="#d9dcdd",n.fillRect(0,0,t,e),n.fillStyle="#16205e",n.fillRect(0,0,t,e*.13),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",ye(n,i==="cards"?"Tickets · Cards only":"Tickets and Oyster",t*.86,e*.055,se),n.fillText(i==="cards"?"Tickets · Cards only":"Tickets and Oyster",t/2,e*.068),n.fillStyle="#0c0d10",n.fillRect(t*.12,e*.19,t*.76,e*.27),n.fillStyle="#ffb21e",n.font=`400 ${e*.045}px ${cs}`,n.fillText("Machine closed",t/2,e*.325),n.fillStyle="#2b2e33",n.fillRect(t*.14,e*.52,t*.3,e*.11),n.fillRect(t*.56,e*.52,t*.3,e*.05),i!=="cards"&&(n.fillRect(t*.56,e*.6,t*.3,e*.03),n.fillStyle="#f5cf12",n.beginPath(),n.arc(t*.28,e*.72,t*.09,0,7),n.fill()),n.fillStyle="#1a1c1f",n.fillRect(t*.2,e*.82,t*.6,e*.1),n.strokeStyle="#8d9296",n.lineWidth=2,n.strokeRect(1,1,t-2,e-2)}function rx(n,t,e){n.fillStyle="#3d4654",n.fillRect(0,0,t,e),n.fillStyle="#16205e",n.fillRect(0,0,t,e*.11),n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",ye(n,"Assistance",t*.8,e*.07,se),n.fillText("Assistance",t/2,e*.058);const i=n.createLinearGradient(0,e*.15,0,e*.6);i.addColorStop(0,"#11151b"),i.addColorStop(1,"#07090c"),n.fillStyle=i,n.fillRect(t*.08,e*.15,t*.84,e*.45),n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(t*.14,e*.17,t*.1,e*.4),n.fillStyle="#2b323d",n.fillRect(t*.08,e*.62,t*.84,e*.03)}function ox(n,t,e){n.fillStyle=Lr,n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,0.14)",n.fillRect(0,0,t,3),n.fillStyle=$d,n.fillRect(t*.08,e*.05,t*.84,e*.17),n.fillStyle="#17362a",n.textAlign="center",n.textBaseline="middle",n.font=`700 ${e*.12}px Georgia, 'Times New Roman', serif`,n.fillText("TICKETS",t/2,e*.14,t*.78),n.fillStyle="#585d61",n.beginPath(),n.moveTo(t*.14,e*.95),n.lineTo(t*.14,e*.5),n.quadraticCurveTo(t*.5,e*.2,t*.86,e*.5),n.lineTo(t*.86,e*.95),n.fill(),n.fillStyle="rgba(0,0,0,0.3)";for(let i=e*.34;i<e*.95;i+=e*.035)n.fillRect(t*.14,i,t*.72,1.5);n.strokeStyle=Rc,n.lineWidth=t*.03,n.beginPath(),n.moveTo(t*.14,e*.95),n.lineTo(t*.14,e*.5),n.quadraticCurveTo(t*.5,e*.2,t*.86,e*.5),n.lineTo(t*.86,e*.95),n.stroke()}function ax(n,t,e){n.clearRect(0,0,t,e),lr(n,t/2,e/2,e*.38,{name:"Underground"})}const Bt={WALK:.62,STAN:.155,WIDE:1.08,MANUAL:1.35,LEN:1.9,H:1,GATES:6,BOOTH:[.99,1.24,2.3],FIRST:-3.385,NUMBER:41};function lx(n,t,e,i,s,r){const{b:o,sheet:a}=n,l=[],c=[],f=[],h=[],u=Vt("metal"),p=Vt("steelDark"),g=e-Bt.LEN/2,_=e+Bt.LEN/2,d={reader:a.add(48,48,nx),leaf:a.add(40,120,(y,x,w)=>sh(y,x,w)),wide:a.add(56,150,(y,x,w)=>sh(y,x,w,!0)),wait:a.add(32,32,(y,x,w)=>vl(y,x,w,"wait")),no:a.add(32,32,(y,x,w)=>vl(y,x,w,"no")),go:a.add(32,32,(y,x,w)=>vl(y,x,w,"go")),booth:a.add(110,250,rx)},m=[];for(let y=0;y<=Bt.GATES;y++)m.push(Bt.FIRST+y*(Bt.WALK+Bt.STAN));m.push(m[Bt.GATES]+Bt.STAN+Bt.WIDE),m.forEach((y,x)=>{const w=a.add(30,110,(G,K,at)=>ix(G,K,at,Bt.NUMBER+x));o.box("atlas",y,t,g+.02,y+Bt.STAN,t+.1,_-.02,p,null,"xXzZ"),o.box("atlas",y,t+.1,g,y+Bt.STAN,t+Bt.H,_,u,{tint:[.92,.94,.96]},"xXY"),o.quad("sheet",[y+Bt.STAN,t+.1,g],[y,t+.1,g],[y,t+Bt.H,g],[y+Bt.STAN,t+Bt.H,g],[0,0,-1],w),o.quad("sheet",[y,t+.1,_],[y+Bt.STAN,t+.1,_],[y+Bt.STAN,t+Bt.H,_],[y,t+Bt.H,_],[0,0,1],w);const P=y+.035,L=y+Bt.STAN-.035;if(c.push([P,g,P,_],[L,g,L,_],[P,g,L,g],[P,_,L,_]),x===m.length-1)return;const D=x===Bt.GATES,N=D?Bt.WIDE:Bt.WALK,k=y+Bt.STAN,B=k+N,U=y+Bt.STAN/2,R=g+.2;h.push((k+B)/2),o.quad("atlas",[k,t+.004,g],[B,t+.004,g],[B,t+.004,_],[k,t+.004,_],[0,1,0],Vt("rubber")),o.box("atlas",U-.07,t+Bt.H,R-.07,U+.07,t+Bt.H+.03,R+.07,p,null,"xXzZ"),o.quad("sheet",[U+.075,t+Bt.H+.032,R-.075],[U-.075,t+Bt.H+.032,R-.075],[U-.075,t+Bt.H+.032,R+.075],[U+.075,t+Bt.H+.032,R+.075],[0,1,0],d.reader,{emit:.9}),o.box("atlas",U-.035,t+Bt.H,R+.16,U+.035,t+Bt.H+.2,R+.23,p,null,"xXY");for(const[G,K]of[["sheet:gWait",d.wait],["sheet:gNo",d.no],["sheet:gGo",d.go]])o.quad(G,[U+.035,t+Bt.H+.1,R+.159],[U-.035,t+Bt.H+.1,R+.159],[U-.035,t+Bt.H+.2,R+.159],[U+.035,t+Bt.H+.2,R+.159],[0,0,-1],K,{emit:1.7}),o.quad(G,[U-.035,t+Bt.H+.1,R+.231],[U+.035,t+Bt.H+.1,R+.231],[U+.035,t+Bt.H+.2,R+.231],[U-.035,t+Bt.H+.2,R+.231],[0,0,1],K,{emit:1.7});const z=N/2-.015,H=t+(D?.15:.2),X=t+(D?1.45:1.12),Y=D?d.wide:d.leaf;for(const[G,K]of[[k,1],[B,-1]]){for(const at of[-1,1])o.quad("sheet:padShut",[G,H,e+at*.012],[G+K*z,H,e+at*.012],[G+K*z,X,e+at*.012],[G,X,e+at*.012],[0,0,at],Y);o.quad("sheet:padOpen",[G+K*.02,H,e],[G+K*.02,H,e+z],[G+K*.02,X,e+z],[G+K*.02,X,e],[K,0,0],Y)}f.push([k-.04,e,B+.04,e]),l.push({x:U,y:t+Bt.H+.04,z:R,r:2.3,cone:.72,n:[0,-1],label:"touch card on reader",title:"",text:"",reader:x,onRead:r})});const S=m[m.length-1]+Bt.STAN,v=S+Bt.MANUAL,[M,A,b]=Bt.BOOTH,T=v+.2,E=(y,x,w=1.3)=>{o.box("atlas",y,t,e-.02,x,t+w,e+.02,u,{tint:[.6,.63,.66]},"xXYzZ"),c.push([y,e,x,e])};for(const y of[-1,1])o.quad("cut",[S,t+.05,e+y*.01],[v,t+.05,e+y*.01],[v,t+1.3,e+y*.01],[S,t+1.3,e+y*.01],[0,0,y],Ot("gate"),{emit:.3});return o.box("atlas",S,t+1.28,e-.025,v,t+1.33,e+.025,p,null,"xXyYzZ"),o.box("atlas",v,t,e-.04,v+.06,t+1.36,e+.04,p,null,"xXYzZ"),c.push([S,e,v+.06,e]),E(i,m[0]),E(v+.06,T),E(T+M,s),o.box("atlas",T,t,e-A/2,T+M,t+b,e+A/2,p,{tint:[.75,.82,.95]},"xXY"),o.quad("sheet",[T+M,t,e-A/2],[T,t,e-A/2],[T,t+b,e-A/2],[T+M,t+b,e-A/2],[0,0,-1],d.booth),o.quad("sheet",[T,t,e+A/2],[T+M,t,e+A/2],[T+M,t+b,e+A/2],[T,t+b,e+A/2],[0,0,1],d.booth),c.push([T,e-A/2,T+M,e-A/2],[T,e+A/2,T+M,e+A/2],[T,e-A/2,T,e+A/2],[T+M,e-A/2,T+M,e+A/2]),l.push({x:T+M/2,y:t+1.5,z:e-A/2,r:3.5,n:[0,-1],label:"look in",title:"ASSISTANCE",text:"",booth:!0}),{items:l,walls:c,shut:f,walkways:h}}function cx(n,t,e){const{b:i,sheet:s,env:r}=n,{x0:o,x1:a,H:l,rise:c,z0:f,z1:h,zg:u,zOut:p}=t,g=_n(n),_=[],d=[],m=s.add(250,56,(P,L,D)=>ba(P,L,D,{dir:"up"})),S=s.add(250,56,(P,L,D)=>so(P,L,D,"To the trains",{sub:"Northern line"})),v=["cash","cards"].map(P=>s.add(110,232,(L,D,N)=>sx(L,D,N,P))),M=s.add(160,200,ox),A=s.add(200,90,ax);for(const P of[-2.3,1,4.3])for(const L of[f+2.4,f+7.3])_s(i,{x:P,y:c,z:L,yaw:Math.PI/2},l-.02,{power:.8,radius:7.5});const b=na(i,"sheet",{x:0,y:c,z:f+2.2,yaw:0},2.55,1.7,.38,m,S,{emit:1.25});_.push({...b,r:8,cone:.94,n:[0,-1],label:"read sign",title:"SIGN",text:zn.wayout});const T=h-.03,E=(P,L,D,N,k,B)=>(i.quad(B&&B.layer?B.layer:"sheet",[L+N/2,c+D,T],[L-N/2,c+D,T],[L-N/2,c+D+k,T],[L+N/2,c+D+k,T],[0,0,-1],P,B&&B.opts),{x:L,y:c+D+k/2,z:T,n:[0,-1]});_.push({...E(m,0,2.86,1.7,.38,{opts:{emit:1.25}}),r:9,cone:.94,label:"read sign",title:"SIGN",text:zn.wayout}),E(A,-2.9,1.25,1.2,.54),_.push({...E(Zr("clock"),2.6,2.15,.62,.62,{layer:"dyn",opts:{emit:1.05}}),r:9,cone:.95,label:"look at clock",title:"CLOCK",text:"The clock is keeping time. It is morning."});const y=(P,L,D,N,k,B)=>{const U=o+B;return B>.05&&i.box("atlas",o,c,L-N/2,U,c+D+k,L+N/2,Vt("steelDark"),null,"YzZ"),i.quad("sheet",[U+.004,c+D,L+N/2],[U+.004,c+D,L-N/2],[U+.004,c+D+k,L-N/2],[U+.004,c+D+k,L+N/2],[1,0,0],P),B>.05&&d.push([U,L-N/2,U,L+N/2],[o,L-N/2,U,L-N/2],[o,L+N/2,U,L+N/2]),{x:U,y:c+D+k/2,z:L,n:[1,0]}};v.forEach((P,L)=>_.push({...y(P,u+1.9+L*1.02,0,.9,1.9,.5),r:4,label:"read machine",title:"TICKET MACHINE",text:zn.machine})),_.push({...y(M,u+4.45,.5,1.3,1.62,.03),r:5,label:"read tiles",title:"TICKET WINDOW",text:zn.window});const x=jc(n,a-1,u+2.9,1.15,E2(g,r.station||"Hampstead",zn.thought),c);_.push(x.item),d.push(...x.walls);const w=Ot("gate");for(const P of[-1,1]){const L=P*1.44;i.quad("cut",[L,c,h+.05],[L,c,h+.7],[L,c+2.3,h+.7],[L,c+2.3,h+.05],[-P,0,0],w,{emit:.25})}for(const P of e.items)P.booth&&(P.text=zn.booth);return{items:_,walls:d,zOut:p}}const Yd=(n,t)=>n==="sheet:gWait"?t==="wait":n==="sheet:gNo"?t==="no":n==="sheet:gGo"?t==="go":n==="sheet:padShut"?t!=="go":n==="sheet:padOpen"?t==="go":!0,fx=(n,t)=>Yd(n,t.gateState||"wait");function ua(n,t){if(n.gateState=t,!n.built)return;for(const i of n.built.group.children)i.name.startsWith("sheet:")&&(i.visible=Yd(i.name,t));const e=n.built.extra;if(t==="go"){e&&e.shut&&(n.built.walls=n.built.walls.filter(i=>!e.shut.includes(i)));for(const i of n.built.items)i.reader!==void 0&&(i.hidden=!0)}}function ux(n,t){const e=n.state,i=n.director,s=i.events,r=e.time;if(i.reading=null,n.player.zoomTarget=0,!(t.gateState==="go"||t.gateBusy&&r<t.gateBusy)){if(t.gateTouches=(t.gateTouches||0)+1,e.gateTouches=t.gateTouches,t.gateTouches===1){ua(t,"no"),e.gate="no",n.audio.sfx("touchFail"),s.brownOut(1.5),s.glitch(.8),i.setHint(zn.reject,6),i.announcer.say({text:zn.voice,chime:"none",tag:"(the gate)",odd:!0,urgent:!0}),t.gateBusy=r+3.2;return}ua(t,"go"),e.gate="go",n.audio.sfx("touchOut"),n.audio.sfx("paddles"),s.glitch(.3),i.setHint(zn.accept,6)}}function hx(n,t){t.gateState==="no"&&n.state.time>=t.gateBusy&&(ua(t,"wait"),n.state.gate="wait")}const lf=12,Zd=1.2,dx=.6,cf=4,Ne={x0:-4.5,x1:6.5,depth:10,H:3.4};Ne.rise=ms(0,lf,1);Ne.z0=Qn(Zd,lf)+dx;Ne.z1=Ne.z0+Ne.depth;Ne.zg=Ne.z0+4.6;Ne.zOut=Ne.z1+.8;Ne.zEnd=Qn(Ne.zOut,cf)+1.3;Ne.top=Ne.rise+ms(0,cf,1);function rh(n,t,e,i,s,r){const o=Qn(0,i),a=r+ms(0,i,1),l=d=>r+Qe((d-e)/o,0,1)*(a-r),c=[t,e];for(let d=1,m=Math.max(1,Math.round(o/.9));d<=m;d++)c.push(e+o*d/m);c.push(s);const f=Cn(n,c.map(d=>({x:0,y:l(d),z:d,yaw:0})),Vc(Ut),{floor:null,u0:t});for(const d of f.cells)d.surface="stone";const h=Ut.W/2,u=-h-.03,p=Ut.W+.06,g=Ot("floor"),_=e+o;n.grid("atlas",[u,r,t],[p,0,0],[0,0,e-t],3,2,[0,1,0],g,null,!0),n.grid("atlas",[u,a,_],[p,0,0],[0,0,s-_],3,2,[0,1,0],g,null,!0),Aa(n,e,i,1,[0,1,2,3].map(d=>u+p*(d/3)),r);for(const d of[-h+.09,h-.09])of(n,d,e-.3,r+.95,_+.3,a+.95);return f}const px={type:"exit",sheetSize:1024,layerVisible:fx,plan(){return{p:{},exits:[],box:[Ne.x0-.4,-.4,0,Ne.x1+.4,Ne.top+3.5,Ne.zEnd+.2]}},build(n){const{b:t,node:e}=n,{x0:i,x1:s,H:r,rise:o,z0:a,z1:l,zg:c,zOut:f,zEnd:h,top:u}=Ne,p=Ut.W/2,g=rh(t,0,Zd,lf,a,0);t.addPortal(0,0,0,0),ei(t,{x:0,y:0,z:0,yaw:0},Ut.crown);const _=Dd(t,{x0:i,x1:s,z0:a,z1:l,H:r,y:o,layer:"hall",uv:(E,y)=>[E/Ac.uPeriod,.003+.994*y/Ac.height],portals:[{wall:"S",at:0},{wall:"N",at:0}],ceilOpts:{tint:[.96,.95,.9]}});for(const E of[a,l])_i(t,{x:0,y:o,z:E,yaw:0},1.56);const d=rh(t,l,f,cf,h,o),m=Vt("daylight");ir(t,{x:0,y:u,z:h-.02,yaw:0},Ma(Ut),null,-1,"atlas",()=>[(m[0]+m[2])/2,(m[1]+m[3])/2],{emit:2}),t.addLight(0,u+1.6,h-.6,1.9,10,!1,[1,1,1]),t.addLight(0,o+1.5,l-1.2,1,8.5,!1,[1,1,1]);const S=lx(n,o,c,i,s,(E,y,x)=>ux(E,x)),v=cx(n,Ne,S),M=[...g.cells,..._.cells,...d.cells],A=[...g.walls,..._.walls,...d.walls,[-p,h-.4,p,h-.4],...S.walls,...v.walls];if(e.gateState!=="go")A.push(...S.shut);else for(const E of S.items)E.reader!==void 0&&(E.hidden=!0);const b={y0:o-.5,y1:o+.7},T=[{x0:i,x1:s,z0:a+.5,z1:c-1.1,...b,fire:E=>E.director.setHint(zn.approach,7)},{x0:i,x1:s,z0:a,z1:l,...b,once:!1,fire:(E,y)=>hx(E,y)},{x0:i,x1:s,z0:c+1.1,z1:l,...b,fire:E=>E.director.setHint(zn.out,6)},{x0:-p,x1:p,z0:f+.4,z1:h,y0:o-.5,y1:u+.7,fire:E=>E.director.win()}];return{cells:M,walls:A,items:[...S.items,...v.items],extra:{zones:T,shut:S.shut}}}},Cc=2.3,jd=2.4,yl=Gc(Cc,1.2,jd),De=1.2,Vo=2.5,mx={type:"cross",plan(n,t){const e=n.pick([0,3,4,5]),i=t.dir||n.sign(),s=Qn(De+Vo,e)+Vo+De,r=ms(0,e,i);return{p:{steps:e,dir:i,len:s,rise:r,flick:n.chance(.35)},exits:[{x:0,y:r,z:s,yaw:0}],box:[-1.9,Math.min(0,r)-.4,0,1.9,Math.max(0,r)+3.3,s]}},build(n){const{b:t,p:e,sheet:i,theme:s}=n,r=De+Vo,o=Qn(r,e.steps),a=o-r,l=b=>(a>0?Qe((b-r)/a,0,1):b>=r?1:0)*e.rise,c=b=>({x:0,y:l(b),z:b,yaw:0}),f=Cn(t,[c(0),c(De)],Ut,{floor:Ot("floor")}),h=[De,De+1.25,r];a>0&&h.push(o),h.push(o+1.25,e.len-De);const u=Cn(t,h.map(c),Vc(yl),{floor:null,u0:De}),p=Cn(t,[c(e.len-De),c(e.len)],Ut,{floor:Ot("floor"),u0:e.len-De});ir(t,c(De),Ut,yl,-1,"tile"),ir(t,c(e.len-De),Ut,yl,1,"tile");const g=Cc/2,_=Ot("floorDark"),d=-g-.03,m=Cc+.06;t.grid("atlas",[d,0,De],[m,0,0],[0,0,Vo],2,3,[0,1,0],_,null,!0),t.grid("atlas",[d,e.rise,o],[m,0,0],[0,0,e.len-De-o],2,3,[0,1,0],_,null,!0),e.steps>0&&Aa(t,r,e.steps,e.dir,[0,1,2].map(b=>d+m*(b/2)),0),_i(t,c(De),Ut.W/2,"floorDark"),_i(t,c(e.len-De),Ut.W/2,"floorDark");for(const b of u.cells)b.surface="stone";t.addPortal(0,0,0,0),t.addPortal(0,e.rise,e.len,0),ei(t,c(0),Ut.crown),_s(t,c((r+o)/2),jd-.03,{flick:e.flick,power:.8,radius:6,len:.9});const S=[],v=[["TO THE TRAINS",-1,De+1.3],["WAY OUT",1,e.len-De-1.3]];for(const[b,T,E]of v){const y=i.add(220,54,(w,P,L)=>Wc(w,P,L,b,s,T>0?"right":"left")),x=Hi(t,"sheet",c(E),T,g,l(E)+.72,1.4,.345,y,null,.025);S.push({...x,r:4,label:"read tiles",title:"TILED LEGEND",text:b==="WAY OUT"?"WAY OUT → (old tiles; they point along the passage)":"← TO THE TRAINS"})}const M=f.walls.concat(u.walls,p.walls),A=Ut.W/2;for(const b of[De,e.len-De])M.push([-A,b,-g,b],[g,b,A,b]);return{cells:f.cells.concat(u.cells,p.cells),walls:M,items:S}}},je=512,xl=6,Wo=8;function gx(n){const t=new ge(1942),e=je/xl,i=je/Wo;n.fillStyle="#d9d2b8",n.fillRect(0,0,je,je);for(let r=0;r<xl;r++){for(let o=0;o<Wo;o++){const a=r*e,l=o*i,c=e*.13,f=i*.11,h=t.range(-10,8);n.fillStyle=`rgb(${186+h},${178+h},${152+h})`,n.fillRect(a+c,l+f,e-2*c,i-2*f);const u=n.createLinearGradient(0,l+f,0,l+i-f);u.addColorStop(0,"rgba(40,32,18,0.42)"),u.addColorStop(.35,"rgba(40,32,18,0.08)"),u.addColorStop(1,"rgba(255,250,230,0.16)"),n.fillStyle=u,n.fillRect(a+c,l+f,e-2*c,i-2*f),n.fillStyle="rgba(30,24,14,0.3)",n.fillRect(a+c,l+f,2,i-2*f),n.fillStyle="rgba(255,250,235,0.22)",n.fillRect(a+e-c-2,l+f,2,i-2*f),n.fillStyle="rgba(60,50,34,0.35)",n.beginPath(),n.arc(a+e/2,l+i/2,e*.045,0,7),n.fill()}n.fillStyle="rgba(40,32,20,0.55)",n.fillRect(r*e-.8,0,1.6,je);for(let o=0;o<Wo;o++)for(const a of[-e*.06,e*.06]){const l=((r*e+a)%je+je)%je,c=(o+.5)*i;if(n.fillStyle="#6b5a3e",n.beginPath(),n.arc(l,c,2.6,0,7),n.fill(),n.fillStyle="rgba(255,245,220,0.35)",n.beginPath(),n.arc(l-.7,c-.7,1,0,7),n.fill(),t.chance(.3)){const f=n.createLinearGradient(0,c,0,c+i*.9);f.addColorStop(0,"rgba(120,62,24,0.4)"),f.addColorStop(1,"rgba(120,62,24,0)"),n.fillStyle=f,n.fillRect(l-1.5,c,3,i*.9)}}}for(let r=0;r<xl;r++)for(let o=r%2?2:0;o<=Wo;o+=4)n.fillStyle="rgba(40,32,20,0.5)",n.fillRect(r*e,o*i-.8,e,1.6);n.fillStyle="rgba(70,58,40,0.5)",n.font="700 11px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("L.P.T.B.",e*2.5,i*3.5-9);const s=n.createLinearGradient(0,0,0,je);s.addColorStop(0,"rgba(30,24,14,0.3)"),s.addColorStop(.3,"rgba(30,24,14,0.05)"),s.addColorStop(.75,"rgba(30,24,14,0.06)"),s.addColorStop(1,"rgba(34,30,16,0.42)"),n.fillStyle=s,n.fillRect(0,0,je,je),Be(n,0,0,je,je,4242,1.1,!1)}let Sl=null;function _x(){if(!Sl){const n=gn(je,je);gx(n.getContext("2d")),Sl=ar(n,{repeatU:!0})}return Sl}const oh={uPeriod:3},mt={R:2.515,YC:-.05,CEIL:2.2,XT:.555,GW:.8,STUB:2,WALL:.3,DOOR_W:1.1,DOOR_H:2,UNIT:1.9,UNITS:14,STAIR:{x0:.95,x1:2.05,steps:9},TIERS:[.22,.85,1.45],LONG:[-1.45,-.84],CROSS:[.82,2.57]};mt.LEN=mt.UNITS*mt.UNIT+.6;mt.Z0=mt.STUB+mt.WALL;mt.Z1=mt.Z0+mt.LEN;mt.TOTAL=mt.Z1+mt.WALL+mt.STUB;mt.ZS=mt.Z0+.3+7*mt.UNIT;const Ml=(n,t)=>mt.XT+t*Math.sqrt(Math.max(0,mt.R*mt.R-(n-mt.YC)**2));function vx(n,t){const{b:e,sheet:i,env:s}=n,{Z0:r,Z1:o,ZS:a,TIERS:l}=mt,c=U=>t*U,f=[],h=(s.wrong||0)>=2.5,u=i.add(132,168,(U,R,z)=>bc(U,R,z,...He.mow)),p=i.add(132,168,(U,R,z)=>bc(U,R,z,He.rules[0],He.rules[1],h?He.rulesOdd:He.rules[2],He.rules[3])),g=i.add(200,136,(U,R,z)=>Ly(U,R,z,h?"C":"F")),_=(U,R,z=200)=>i.add(z,38,(H,X,Y)=>Py(H,X,Y,U,R)),d=(U,R)=>i.add(164,33,(z,H,X)=>Mc(z,H,X,U,R)),m=(U,R)=>t>0==R<0?U?"right":"left":U?"left":"right",S={buck:_("Buck Street entrance",m(!0,-1)),tube:_("To the tube station",m(!0,1)),under:_("Underhill Street entrance",m(!0,1)),lower:_("Lower deck",null,104),section:d("SECTION F"),bunks:d("BUNKS 2401 – 2640"),canteen:d("CANTEEN",m(!0,-1)),lav:d("LAVATORIES",m(!0,-1)),aid:d("MEDICAL AID POST",m(!0,-1)),mesh:i.add(128,64,(U,R,z)=>Ry(U,R,z)),rail:i.add(128,64,(U,R,z)=>Cy(U,R,z)),phone:i.add(64,96,(U,R,z)=>Dy(U,R,z))},v={tint:[.42,.17,.13]},M=Vt("white"),A=(U,R,z=1.5)=>e.box("atlas",c(U)-.02,0,R-.02,c(U)+.02,z,R+.02,M,v,"xXzZ"),[b,T]=mt.LONG,[E,y]=mt.CROSS;for(let U=0;U<mt.UNITS;U++){const R=r+.3+U*mt.UNIT,z=R+mt.UNIT;A(T,R);for(const H of l)e.quad("sheet",[c(b),H,R+.03],[c(b),H,z-.03],[c(T),H,z-.03],[c(T),H,R+.03],[0,1,0],S.mesh),e.quad("atlas",[c(T),H-.045,R],[c(T),H-.045,z],[c(T),H,z],[c(T),H,R],[t,0,0],M,v);if(e.quad("sheet",[c(T+.012),l[1]-.61,R+.04],[c(T+.012),l[1]-.61,z-.04],[c(T+.012),l[1]-.05,z-.04],[c(T+.012),l[1]-.05,R+.04],[t,0,0],S.mesh),!(U===0||U===mt.UNITS-1||U>=6&&U<=8))for(const[H,X]of[[R+.02,R+.63],[R+1.25,R+1.86]]){A(E,H),A(E,X);for(const Y of l){const G=Math.min(y,Ml(Y+.05,1)-.06);e.quad("sheet",[c(E),Y,H],[c(G),Y,H],[c(G),Y,X],[c(E),Y,X],[0,1,0],S.mesh),e.quad("atlas",[c(E),Y-.045,H],[c(E),Y-.045,X],[c(E),Y,X],[c(E),Y,H],[-t,0,0],M,v)}}}A(T,r+.3+mt.UNITS*mt.UNIT),f.push({x:c(-1),y:.95,z:r+6.2,r:3.6,n:[t,0],label:"look at bunks",title:"BUNKS",text:He.bunks});const x=(U,R,z,H,X,Y,G)=>{const K=-R*t,at=z+K*H/2,st=z-K*H/2,xt=c(Ml(X,R)-R*.035),wt=c(Ml(Y,R)-R*.035);e.quad("sheet",[xt,X,at],[xt,X,st],[wt,Y,st],[wt,Y,at],[K,-.6,0],U),f.push({x:(xt+wt)/2,y:(X+Y)/2,z,r:5,n:[K,0],label:"read lettering",title:"STENCILLED ON THE LINING",text:G})};x(S.bunks,-1,r+8.5,1.9,1.64,1.9,"BUNKS 2401 – 2640"),x(S.section,1,r+5.2,1.7,1.72,1.96,"SECTION F"),x(S.section,-1,r+21.5,1.7,1.64,1.88,"SECTION F");const w=(U,R,z,H,X,Y,G)=>{const K=Y>0?r+.03:o-.03,at=c(R)-Y*H/2,st=c(R)+Y*H/2;e.quad("sheet",[at,z,K],[st,z,K],[st,z+X,K],[at,z+X,K],[0,0,Y],U,{tint:[1.05,1.05,1.05]}),G&&f.push({x:c(R),y:z+X/2,z:K,r:4.5,n:[0,Y],...G})},P=U=>({label:"read sign",title:"SIGN",text:U});w(S.buck,1.42,1.68,1.15,.22,-1,P(`Buck Street entrance ${t>0?"→":"←"} (through the door)`)),w(g,1.55,.98,.8,.545,-1,{label:"read plan",title:"PLAN",text:He.plan}),w(S.canteen,2.33,1.36,.66,.132,-1),w(S.lav,2.33,1.18,.66,.132,-1),w(S.aid,2.33,1,.66,.132,-1),f.push({x:c(2.33),y:1.24,z:o-.03,r:4.5,n:[0,-1],label:"read lettering",title:"STENCILLED ON THE WALL",text:"CANTEEN · LAVATORIES · MEDICAL AID POST — all through the door, in the next section."}),w(S.phone,.84,1.14,.3,.45,-1,{label:"lift receiver",title:"TELEPHONE",text:"A wall telephone in a wooden case. The card says WARDEN — 1 RING. You lift the receiver.",r:3.2,onRead:U=>U.director.announcer.say({text:He.phone,chime:"none",tag:"(telephone)",urgent:!0})}),w(S.tube,1.42,1.68,1.15,.22,1,P(`${t>0?"←":"→"} To the tube station (the way you came)`)),w(S.under,1.42,1.4,1.15,.22,1,P(`${t>0?"←":"→"} Underhill Street entrance`)),w(u,1.3,.74,.45,.57,1,{label:"read notice",title:He.mow[0],text:`${He.mow[1]}. ${He.mow[2].join(" ")} ${He.mow[3]}.`}),w(p,1.95,.74,.45,.57,1,{label:"read notice",title:"TO SHELTERERS",text:`${(h?He.rulesOdd:He.rules[2]).join(" ")} — ${He.rules[3]}`});const L=mt.STAIR,D=a+L.steps*kr+.6;for(const[U,R]of[[L.x0,-1],[L.x0,1],[L.x1,-1]])e.quad("sheet",[c(U),0,a],[c(U),0,D],[c(U),1,D],[c(U),1,a],[t*R,0,0],S.rail);for(const U of[-1,1])e.quad("sheet",[c(L.x0),0,D],[c(L.x1),0,D],[c(L.x1),1,D],[c(L.x0),1,D],[0,0,U],S.rail);e.box("atlas",Math.min(c(L.x0),c(L.x1)),.8,a-.008,Math.max(c(L.x0),c(L.x1)),.815,a+.008,Vt("black"),null,"yYzZ");const N=(L.x0+L.x1)/2,k=c(N)+.25,B=c(N)-.25;return e.quad("sheet",[k,.6,a-.012],[B,.6,a-.012],[B,.79,a-.012],[k,.79,a-.012],[0,0,-1],S.lower),f.push({x:c(N),y:.7,z:a-.012,r:3.2,n:[0,-1],label:"read plate",title:"ON THE CHAIN",text:He.lower}),{items:f}}function qo(n,t,e,i,s){const r=mt.DOOR_W/2-.005,o=mt.DOOR_H-.005,a=i.length,l=[{x:i[0].x,y:-.06},{x:-r,y:-.06},{x:-r,y:o},{x:r,y:o},{x:r,y:-.06},{x:i[a-1].x,y:-.06}];for(let c=a-1;c>=0;c--)i[c].y>.01&&l.push({x:i[c].x,y:i[c].y});Ea(n,{x:0,y:0,z:t,yaw:0},e,l,s)}const yx={type:"shelter",sheetSize:512,plan(n,t){const e=n.sign(),i=mt.XT-mt.R-.25,s=mt.XT+mt.R+.25;return{p:{side:e,faulty:n.int(0,5),dark:n.chance(.15+.05*(t.wrong||0))},exits:[{x:0,y:0,z:mt.TOTAL,yaw:0}],box:e>0?[i,-2.6,0,s,3.3,mt.TOTAL]:[-s,-2.6,0,-i,3.3,mt.TOTAL]}},build(n){const{b:t,p:e}=n,{R:i,YC:s,CEIL:r,XT:o,GW:a,Z0:l,Z1:c,ZS:f}=mt,h=e.side,u=Z=>h*Z,p=Z=>({x:0,y:0,z:Z,yaw:0}),g=Cn(t,[p(0),p(mt.STUB)],Ut,{floor:Ot("floor")}),_=Cn(t,[p(mt.TOTAL-mt.STUB),p(mt.TOTAL)],Ut,{floor:Ot("floor"),u0:mt.TOTAL-mt.STUB});t.addPortal(0,0,0,0),t.addPortal(0,0,mt.TOTAL,0),ei(t,p(0),Ut.crown);const d=Ma(Ut,.05);qo(t,mt.STUB,-1,d,{layer:"tile",grid:.7}),qo(t,mt.TOTAL-mt.STUB,1,d,{layer:"tile",grid:.7});const m=6,S=Math.asin((-.04-s)/i),v=Math.asin((r-s)/i),M=Z=>Array.from({length:m+1},(O,ut)=>{const ht=S+(v-S)*ut/m;return{x:o+Z*i*Math.cos(ht),y:s+i*Math.sin(ht),nx:-Z*Math.cos(ht),ny:-Math.sin(ht),v:ut/m}}),A=M(-1),b=M(1),T=[...A.map(Z=>({x:u(Z.x)-h*.05,y:Z.y+.03})),...b.slice().reverse().map(Z=>({x:u(Z.x)+h*.05,y:Z.y+.03}))];h<0&&T.reverse();const E=Vt("cream"),y={tint:[.86,.84,.76]};qo(t,l,1,T,{layer:"atlas",grid:.8,uv:()=>[(E[0]+E[2])/2,(E[1]+E[3])/2],o:y}),qo(t,c,-1,T,{layer:"atlas",grid:.8,uv:()=>[(E[0]+E[2])/2,(E[1]+E[3])/2],o:y});const x=Vt("steelDark"),w=mt.DOOR_W/2;for(const[Z,O]of[[mt.STUB,l],[c,mt.TOTAL-mt.STUB]]){for(const ut of[-1,1])t.quad("atlas",[ut*w,-.03,Z],[ut*w,-.03,O],[ut*w,mt.DOOR_H+.01,O],[ut*w,mt.DOOR_H+.01,Z],[-ut,0,0],x);t.quad("atlas",[-w-.01,mt.DOOR_H,Z],[w+.01,mt.DOOR_H,Z],[w+.01,mt.DOOR_H,O],[-w-.01,mt.DOOR_H,O],[0,-1,0],x),t.quad("atlas",[-w-.02,.003,Z-.05],[w+.02,.003,Z-.05],[w+.02,.003,O+.05],[-w-.02,.003,O+.05],[0,1,0],Ot("floorDark")),t.quad("atlas",[-w-.3,-.003,Z-.6],[w+.3,-.003,Z-.6],[w+.3,-.003,O+.6],[-w-.3,-.003,O+.6],[0,1,0],Ot("floorDark"))}const P=Ot("door");t.quad("atlas",[u(-w-.08),0,l+.05],[u(-w-1.03),0,l+.05],[u(-w-1.03),1.98,l+.05],[u(-w-.08),1.98,l+.05],[0,0,1],P,{tint:[.55,.62,.55]}),t.quad("atlas",[u(-w-1.03),0,c-.05],[u(-w-.08),0,c-.05],[u(-w-.08),1.98,c-.05],[u(-w-1.03),1.98,c-.05],[0,0,-1],P,{tint:[.55,.62,.55]});const L=Math.round(mt.LEN),D=.04,N=Array.from({length:L+1},(Z,O)=>O===0?l-D:O===L?c+D:l+mt.LEN*O/L);for(const Z of[A,b])for(let O=0;O<L;O++){const ut=N[O],ht=N[O+1];for(let At=0;At<m;At++){const dt=Z[At],qt=Z[At+1],Rt=[u(dt.nx),dt.ny,0],F=[u(qt.nx),qt.ny,0];t.quadN("lining",[u(dt.x),dt.y,ut],[u(dt.x),dt.y,ht],[u(qt.x),qt.y,ht],[u(qt.x),qt.y,ut],[(Rt[0]+F[0])/2,(Rt[1]+F[1])/2,0],Rt,Rt,F,F,[ut/oh.uPeriod,.003+.994*dt.v,ht/oh.uPeriod,.003+.994*qt.v])}}const k=Ot("concrete"),B=Math.sqrt(i*i-s*s)+.04,U=Math.sqrt(i*i-(r-s)**2)+.04,R=mt.STAIR,z=.01,H=[f,f+R.steps*kr+.6-z],X=N.concat(H).sort((Z,O)=>Z-O).filter((Z,O,ut)=>O===0||Z-ut[O-1]>.02);for(let Z=0;Z<X.length-1;Z++){const O=X[Z],ut=X[Z+1];for(const[dt,qt]of[[o-U,o],[o,o+U]])t.quad("atlas",[u(dt),r,O],[u(qt),r,O],[u(qt),r,ut],[u(dt),r,ut],[0,-1,0],k,{tint:[.9,.88,.8]});const ht=O>=H[0]-.03&&ut<=H[1]+.03,At=[[o-B,-a,.82],[-a,a,.66],[a,R.x0+z,.82]].concat(ht?[]:[[R.x0+z,R.x1-z,.82]],[[R.x1-z,o+B,.82]]);for(const[dt,qt,Rt]of At)t.quad("atlas",[u(dt),0,O],[u(qt),0,O],[u(qt),0,ut],[u(dt),0,ut],[0,1,0],k,{tint:[Rt,Rt,Rt*.97]})}const Y=H[1]+z,G=-1.44-.02,K=Vt("blackout");Aa(t,f+.3,R.steps,-1,h>0?[R.x0,R.x1]:[-2.05,-.95],0),t.quad("atlas",[u(R.x0),0,f-.03],[u(R.x1),0,f-.03],[u(R.x1),0,f+.3],[u(R.x0),0,f+.3],[0,1,0],k,{tint:[.82,.82,.8]}),t.quad("atlas",[u(R.x0),G,f+.3+R.steps*kr],[u(R.x1),G,f+.3+R.steps*kr],[u(R.x1),G,Y+2],[u(R.x0),G,Y+2],[0,1,0],k,{tint:[.5,.5,.48]});for(const[Z,O]of[[R.x0,1],[R.x1,-1]])t.quad("atlas",[u(Z),G-.3,f],[u(Z),G-.3,Y+2],[u(Z),0,Y+2],[u(Z),0,f],[h*O,0,0],k,{tint:[.55,.54,.5]});t.quad("atlas",[u(R.x0),-.22,Y],[u(R.x1),-.22,Y],[u(R.x1),0,Y],[u(R.x0),0,Y],[0,0,-1],k,{tint:[.5,.5,.46]}),t.quad("atlas",[u(R.x0),G-.3,Y+2],[u(R.x1),G-.3,Y+2],[u(R.x1),-.2,Y+2],[u(R.x0),-.2,Y+2],[0,0,-1],K,{emit:0}),t.quad("atlas",[u(R.x0),-.22,Y],[u(R.x1),-.22,Y],[u(R.x1),-.22,Y+2],[u(R.x0),-.22,Y+2],[0,-1,0],K,{emit:.02}),t.quad("atlas",[u(R.x0),G-.3,f],[u(R.x1),G-.3,f],[u(R.x1),0,f],[u(R.x0),0,f],[0,0,1],k,{tint:[.5,.5,.46]}),t.addLight(u((R.x0+R.x1)/2),-.9,Y-.6,.4,3.2,!1,[1,.8,.5]);const at=Ot("lamp");for(let Z=0;Z<6;Z++){const O=l+2.4+Z*((mt.LEN-4.8)/5),ut=e.dark&&Z%2===1,ht=e.faulty===Z;t.box("atlas",-.11,r-.1,O-.07,.11,r,O+.07,Vt("steelDark"),null,"xXzZ"),t.quad("atlas",[-.1,r-.1,O-.06],[.1,r-.1,O-.06],[.1,r-.1,O+.06],[-.1,r-.1,O+.06],[0,-1,0],at,{emit:ut?.1:1.5,flick:ht,tint:[1,.82,.55]}),ut||t.addLight(0,r-.35,O,.78,7,ht,[1,.84,.58])}const st=vx(n,h),xt=(Z,O,ut)=>({ax:0,az:Z,bx:0,bz:O,hw:ut,ya:0,yb:0,surface:"stone"}),wt=[...g.cells,xt(mt.STUB-.1,l+.1,w-.05),xt(l,c,a),xt(c-.1,mt.TOTAL-mt.STUB+.1,w-.05),..._.cells,{ax:u(a-.1),az:f-.65,bx:u(R.x1-.05),bz:f-.65,hw:.6,ya:0,yb:0,surface:"stone"}],Ft=[...g.walls,..._.walls],Yt=Ut.W/2+.1,kt=a+.1;for(const[Z,O]of[[mt.STUB,Yt],[l,kt],[c,kt],[mt.TOTAL-mt.STUB,Yt]])Ft.push([-O,Z,-w,Z],[w,Z,O,Z]);for(const[Z,O]of[[mt.STUB,l],[c,mt.TOTAL-mt.STUB]])for(const ut of[-1,1])Ft.push([ut*w,Z,ut*w,O]);return Ft.push([u(-a),l,u(-a),c],[u(a),l,u(a),f-1.25],[u(a),f,u(a),c]),Ft.push([u(a),f-1.25,u(R.x1),f-1.25],[u(R.x1),f-1.25,u(R.x1),f],[u(a),f,u(R.x1),f]),{cells:wt,walls:Ft,items:st.items,frames:[p(0),p(mt.TOTAL)]}}},et={R0:1.25,R1:2.75,RC:1.28,RA:2.5,RISE:.172,STEPS:17,HALVES:19,LAND:23.6*Math.PI/180,SLAB:.35,STUB:2,THROAT:.28,DOOR_H:2.1,CEIL:3};et.STEP=(Math.PI-et.LAND)/et.STEPS;et.PER=et.STEPS+1;et.TURN=2*et.PER;et.N=1+et.HALVES*et.PER;et.H=et.HALVES*et.STEPS*et.RISE;et.DOOR_W=2*et.R1*Math.sin(et.LAND/2);et.ZC=et.STUB+et.THROAT+et.R1*Math.cos(et.LAND/2);const Ce=n=>n===0?-et.LAND/2:Math.floor((n-1)/et.PER)*Math.PI+et.LAND/2+(n-1)%et.PER*et.STEP,an=n=>n===0?0:(Math.floor((n-1)/et.PER)*et.STEPS+(n-1)%et.PER)*et.RISE,xx=n=>n===0||(n-1)%et.PER===et.STEPS,Xo=n=>n===0?0:n*et.PER;function Sx(n,t){const e=[];for(let s=0;s<et.HALVES-1;s++)e.push({n:s<=3?17-s:18-s,hand:!1});const i=t>=3?3:t>=1.5?2:1;for(let s=0;s<i;s++){const r=n.int(6,15);e[r]={n:e[r].n+n.int(2,4),hand:!0}}return e}function Mx(n){const{env:t}=n,e=_n(n),i=nf(e,t);return{story:i,paper:Wd(n,i),core:Ot("cage"),tread:Ot("treadY")}}function bx(n,t,e){const{b:i,sheet:s,p:r}=n,o=r.dir,a=_n(n),l=r.wrong||0,{R1:c,RC:f,N:h,H:u}=et,p=[],g=[],_=D=>[o*Math.cos(D),0,Math.sin(D)],d=D=>[o*Math.sin(D),0,-Math.cos(D)],m=c*Math.cos(et.LAND/2),S=(D,N,k,B,U,R)=>{const z=e(m-.025,N,0),H=_(N),X=-o*B/2;return i.quad("sheet",[z[0]+H[0]*X,k,z[2]+H[2]*X],[z[0]-H[0]*X,k,z[2]-H[2]*X],[z[0]-H[0]*X,k+U,z[2]-H[2]*X],[z[0]+H[0]*X,k+U,z[2]+H[2]*X],d(N).map(Y=>-Y),D,R),{x:z[0],y:k+U/2,z:z[2],n:[-d(N)[0],-d(N)[2]]}},v=(D,N,k,B,U)=>{const R=e(f+.012,N,0),z=_(N),H=o*B/2;return i.quad("sheet",[R[0]+z[0]*H,k,R[2]+z[2]*H],[R[0]-z[0]*H,k,R[2]-z[2]*H],[R[0]-z[0]*H,k+U,R[2]-z[2]*H],[R[0]+z[0]*H,k+U,R[2]+z[2]*H],d(N),D,{tint:[1.05,1.05,1.05]}),{x:R[0],y:k+U/2,z:R[2],n:[d(N)[0],d(N)[2]]}},M=D=>s.add(132,132,(N,k,B)=>t2(N,k,B,D)),A=s.add(132,54,(D,N,k)=>e2(D,N,k,Zi.green)),b=et.STUB-.03,T=-o*1,E=(D,N,k,B)=>i.quad("sheet",[T+k/2,N,b],[T-k/2,N,b],[T-k/2,N+B,b],[T+k/2,N+B,b],[0,0,-1],D,{tint:[1.05,1.05,1.05]});E(M(Zi.sign),1.02,.5,.5),E(A,1.56,.5,.205),p.push({x:T,y:1.35,z:b,r:5,n:[0,-1],label:"read sign",title:"SIGN",text:`${Zi.green.join(" ")}. ${Zi.sign.join(". ")}.`,stairSign:0});const y=Sx(a,l),x=new Map,w=Ot("lamp");for(let D=0;D<=et.HALVES;D++){const N=Xo(D),k=(Ce(N)+Ce(N+1))/2,B=an(N),U=e(m-.05,k,B+2.38),R=_(k),z=r.faulty===D,H=l>=3&&D%7===5;if(i.quad("atlas",[U[0]-R[0]*.17,U[1]-.06,U[2]-R[2]*.17],[U[0]+R[0]*.17,U[1]-.06,U[2]+R[2]*.17],[U[0]+R[0]*.17,U[1]+.06,U[2]+R[2]*.17],[U[0]-R[0]*.17,U[1]+.06,U[2]-R[2]*.17],d(k).map(st=>-st),w,{emit:H?.1:1.7,flick:z,tint:[1,.95,.82]}),!H){const st=e(c-.5,k,B+2.15);i.addLight(st[0],st[1],st[2],.95,6.8,z,[1,.95,.84])}if(g.push({x0:-c,x1:c,z0:et.ZC-c,z1:et.ZC+c,y0:B-.2,y1:B+.5,once:!1,fire:st=>{st.state.landing=D}}),D===0||D===et.HALVES)continue;const{n:X,hand:Y}=y[D-1],G=`${X}${Y?"h":""}`;x.has(G)||x.set(G,s.add(36,48,(st,xt,wt)=>Qv(st,xt,wt,String(X),Y)));const K=D>1?y[D-2].n:18,at=Y?" Written by hand, over another number.":X===K?" The landing below said the same.":X>K?" That is more than the last one.":"";p.push({...v(x.get(G),k,B+1.42,.21,.28),r:3.4,label:"read number",title:"ON THE PILLAR",text:`A sheet of paper taped to the pillar: “${X}”.${at}`,landing:D,number:X})}[[6,Zi.signs[0]],[12,Zi.signs[l>=2.5?1:0]]].forEach(([D,N],k)=>{const B=Xo(D),U=(Ce(B)+Ce(B+1))/2;p.push({...S(M(N),U,an(B)+1.1,.5,.5,{tint:[1.05,1.05,1.05]}),r:4,label:"read sign",title:"SIGN",text:`${N.join(". ")}.`,stairSign:k+1})});const P=Vt("rubber"),L=[0,1,0];for(const[D,N,k]of[[f+.07,1,!1],[c-.08,-1,!0]])for(let B=0;B<h;B++){if(k&&(B===0||B===h-1))continue;const U=Ce(B),R=Ce(B+1),z=an(B)+.95,H=an(B+1)+.95,X=(U+R)/2;i.quad("atlas",e(D-.02,U,z),e(D+.02,U,z),e(D+.02,R,H),e(D-.02,R,H),L,P);const Y=D+N*.02;i.quad("atlas",e(Y,U,z-.04),e(Y,R,H-.04),e(Y,R,H),e(Y,U,z),d(X).map(G=>G*N),P)}for(const D of l>=3?[5,11,16]:[5,11]){const N=Xo(D),k=(Ce(N)+Ce(N+1))/2+.03,B=e(2.25,k,an(N));p.push(Sc(n,B[0],B[1],B[2],a.range(0,6.28),t.story,t.paper,{floor:!0,n:[-d(k)[0],-d(k)[2]]}))}return Zi.hints.forEach(([D,N])=>{const k=an(Xo(D));g.push({x0:-c,x1:c,z0:et.ZC-c,z1:et.ZC+c,y0:k-.2,y1:k+.5,fire:B=>B.director.setHint(N,6)})}),g.push({x0:-c,x1:c,z0:et.ZC-c,z1:2*et.ZC,y0:u-.3,y1:u+.6,fire:D=>{D.state.climbed=(D.state.climbed||0)+1}}),{items:p,zones:g}}const ha=et.DOOR_H-.006;function ah(n,t,e,i){const s=et.DOOR_W/2,r=Ma(Ut,.05),o=r.length,a=[{x:r[0].x,y:-.06},{x:-s,y:-.06},{x:-s,y:ha},{x:s,y:ha},{x:s,y:-.06},{x:r[o-1].x,y:-.06}];for(let l=o-1;l>=0;l--)r[l].y>.01&&a.push({x:r[l].x,y:r[l].y});Ea(n,{x:0,y:i,z:t,yaw:0},e,a,{layer:"tile",grid:.7})}function lh(n,t,e,i){const s=et.DOOR_W/2+.006,r=Vt("steelDark"),o=Ot("floorDark");for(const a of[-1,1])n.quad("atlas",[a*s,i-.03,t],[a*s,i-.03,e],[a*s,i+et.DOOR_H+.01,e],[a*s,i+et.DOOR_H+.01,t],[-a,0,0],r);n.quad("atlas",[-s-.01,i+et.DOOR_H,t],[s+.01,i+et.DOOR_H,t],[s+.01,i+et.DOOR_H,e],[-s-.01,i+et.DOOR_H,e],[0,-1,0],r),n.quad("atlas",[-s-.02,i,t-.04],[s+.02,i,t-.04],[s+.02,i,e+.04],[-s-.02,i,e+.04],[0,1,0],o),n.quad("atlas",[-s-.02,i+.003,t-.05],[s+.02,i+.003,t-.05],[s+.02,i+.003,e+.05],[-s-.02,i+.003,e+.05],[0,1,0],o),n.quad("atlas",[-s-.3,i-.003,t-.6],[s+.3,i-.003,t-.6],[s+.3,i-.003,e+.6],[-s-.3,i-.003,e+.6],[0,1,0],o)}const Tx={type:"spiral",sheetSize:512,plan(n,t){const e=n.sign(),i=et.R1+.35;return{p:{dir:e,faulty:n.int(2,et.HALVES-2),wrong:t.wrong||0},exits:[{x:0,y:et.H,z:2*et.ZC,yaw:0}],box:[-i,-.6,0,i,et.H+et.CEIL+.4,2*et.ZC]}},build(n){const{b:t,p:e}=n,i=e.dir,{R0:s,R1:r,N:o,TURN:a,H:l}=et,c=2*et.ZC,f=(R,z,H)=>[i*R*Math.sin(z),H,et.ZC-R*Math.cos(z)],h=R=>[i*Math.cos(R),0,Math.sin(R)],u=(R,z=0)=>({x:0,y:z,z:R,yaw:0}),p=Mx(n),g=Cn(t,[u(0),u(et.STUB)],Ut,{floor:Ot("floor")}),_=Cn(t,[u(c-et.STUB,l),u(c,l)],Ut,{floor:Ot("floor"),u0:3});t.addPortal(0,0,0,0),t.addPortal(0,l,c,0),ei(t,u(0),Ut.crown),ah(t,et.STUB,-1,0),ah(t,c-et.STUB,1,l),lh(t,et.STUB,et.STUB+et.THROAT+.03,0),lh(t,c-et.STUB-et.THROAT-.03,c-et.STUB,l);const d=Vt("cream"),m=[0,1,0],S=(R,z)=>R+a<=o-1?an(z+a)-et.SLAB:l+et.CEIL+.05,v=R=>.004+.992*R/3.63;for(let R=0;R<o;R++){const z=Ce(R),H=Ce(R+1),X=an(R),Y=an(R+1),G=(z+H)/2,K=[-i*Math.sin(G),0,Math.cos(G)],at=R>=o-2*a;[[-.35,ha],[ha,null]].forEach(([xt,wt],Ft)=>{if(Ft===0&&(R===0||R===o-1))return;const Yt=X+xt,kt=Y+xt,Z=wt===null?S(R,R):X+wt,O=wt===null?S(R,R+1):Y+wt,ut=f(r,z,Yt),ht=f(r,H,kt),At=f(r,H,O),dt=f(r,z,Z);at?t.quad("atlas",ut,ht,At,dt,K,d,{tint:[1.02,1.02,.98]}):t.quadUV("tile",ut,ht,At,dt,K,[z*r/6,v(Yt-X)],[H*r/6,v(kt-Y)],[H*r/6,v(O-Y)],[z*r/6,v(Z-X)])}),xx(R)?t.quad("atlas",f(s,z,X),f(r,z,X),f(r,H,X),f(s,H,X),m,Ot("floorDark")):(t.quad("atlas",f(r,H,Y),f(s,H,Y),f(s,z,Y),f(r,z,Y),m,p.tread),t.quad("atlas",f(s,z,X),f(r,z,X),f(r,z,Y),f(s,z,Y),h(z).map(xt=>-xt),Ot("riser"),{tint:[.6,.6,.62]})),R>=a&&t.quad("atlas",f(s,z,X-et.SLAB),f(r,z,X-et.SLAB),f(r,H,Y-et.SLAB),f(s,H,Y-et.SLAB),[0,-1,0],d,{tint:[.74,.72,.66]}),R>=o-a&&t.quad("atlas",f(s,z,l+et.CEIL),f(r,z,l+et.CEIL),f(r,H,l+et.CEIL),f(s,H,l+et.CEIL),[0,-1,0],d,{tint:[.95,.95,.92]})}const M=24,A=et.RC,b=1.95,T=Math.ceil((l+et.CEIL+.55)/b);for(let R=0;R<M;R++){const z=R/M*Math.PI*2,H=(R+1)/M*Math.PI*2,X=(z+H)/2;for(let Y=0;Y<T;Y++){const G=-.5+Y*b,K=-.5+(Y+1)*b;t.quad("atlas",f(A,z,G),f(A,H,G),f(A,H,K),f(A,z,K),[i*Math.sin(X),0,-Math.cos(X)],p.core)}}const E=Ce(0),y=Ce(o),x=an(a)-et.SLAB+.05,w=r+.05;t.quadUV("tile",f(s,E,-.1),f(w,E,-.1),f(w,E,x),f(s,E,x),h(E),[0,v(-.1)],[.25,v(-.1)],[.25,v(x)],[0,v(x)]),t.quad("atlas",f(s,y,l-.1),f(w,y,l-.1),f(w,y,l+et.CEIL+.05),f(s,y,l+et.CEIL+.05),h(y).map(R=>-R),d,{tint:[1.02,1.02,.98]}),t.quad("atlas",f(s,y,l-et.SLAB),f(w,y,l-et.SLAB),f(w,y,l+et.CEIL+.05),f(s,y,l+et.CEIL+.05),h(y),d,{tint:[.9,.9,.86]});const P=an(o-a)-et.SLAB-.1;t.quad("atlas",f(r+.012,y-.035,P),f(r+.012,y+.035,P),f(r+.012,y+.035,l+et.CEIL+.05),f(r+.012,y-.035,l+et.CEIL+.05),[-i*Math.sin(y),0,Math.cos(y)],d,{tint:[1,1,.96]});const L=[...g.cells,..._.cells],D=[...g.walls,..._.walls],N=et.DOOR_W/2;L.push({ax:0,az:et.STUB-.1,bx:0,bz:et.STUB+et.THROAT+.5,hw:N-.04,ya:0,yb:0,surface:"stone"},{ax:0,az:c-et.STUB-et.THROAT-.5,bx:0,bz:c-et.STUB+.1,hw:N-.04,ya:l,yb:l,surface:"stone"});for(let R=0;R<o;R++){const z=f(et.RA,Ce(R),0),H=f(et.RA,Ce(R+1),0);L.push({ax:z[0],az:z[2],bx:H[0],bz:H[2],hw:1.3,ya:an(R),yb:an(R+1),surface:"stone"})}const k=(R,z,H,X,Y,G)=>{const K=f(R,z,0),at=f(H,X,0);D.push(Y===void 0?[K[0],K[2],at[0],at[2]]:[K[0],K[2],at[0],at[2],Y,G])};for(let R=0;R<a;R++)R===0?k(r,Ce(0),r,Ce(1),2,1e9):R===(o-1)%a?k(r,Ce(R),r,Ce(R+1),-1e9,l-2):k(r,Ce(R),r,Ce(R+1));for(let R=0;R<16;R++)k(A+.02,R/16*Math.PI*2,A+.02,(R+1)/16*Math.PI*2);k(s,E,r,E,-1,2.5),k(s,y,r,y,l-2.5,1e9);const B=Ut.W/2+.1;for(const[R,z,H]of[[et.STUB,et.STUB+et.THROAT,et.STUB],[c-et.STUB-et.THROAT,c-et.STUB,c-et.STUB]])for(const X of[-1,1])D.push([X*N,R,X*N,z],[X*N,H,X*B,H]);const U=bx(n,p,f);return{cells:L,walls:D,items:U.items,extra:{zones:U.zones}}}},Kn={corridor:ty,bend:ey,junction:uy,platform:jr,trainstop:Yy,ghost:Zy,stairs:Ky,escalator:Jy,exit:px,deadend:Qy,cross:mx,shelter:yx,spiral:Tx},Ke=n=>!!Kn[n];function ch(n,t={}){const e=n.stretchCount+1,i=new ge(Ye(n.seed,1e3+e*13)),s=[];if(t.first&&s.push(Ke("platform")?"platform":"corridor"),t.fromJunction&&s.push("corridor"),t.exit)s.push(Ke("spiral")?"spiral":"corridor",Ke("exit")?"exit":"corridor");else{const c=i.int(2,4);let f=t.first?1:0,h=s[s.length-1]||"";for(let u=0;u<c;u++){const p=i.weighted([["corridor",h==="corridor"?1:3],["bend",h==="bend"?.4:2.2],["stairs",Ke("stairs")&&h!=="stairs"?1.5:0],["escalator",Ke("escalator")&&h!=="escalator"?.7:0],["platform",Ke("platform")&&f<1&&u>0?1.6:0]]);s.push(p),p==="platform"&&(f++,Ke("cross")&&i.chance(.5)&&s.push("cross","platform")),h=p}Ke("platform")&&!s.includes("platform")&&s.splice(i.int(Math.min(1,s.length),s.length),0,"platform"),s[s.length-1]!=="corridor"&&s.push("corridor"),s.push(Ke("junction")?"junction":"corridor")}const r=new ge(Ye(n.seed,5e3+e*17));if(Ke("trainstop")&&!t.exit){const c=s.findIndex((f,h)=>f==="platform"&&!(t.first&&h===0));c>=0&&r.chance(n.trainStops?.22:t.first?.25:.5)&&(s[c]="trainstop",n.trainStops=(n.trainStops||0)+1)}Ke("ghost")&&t.fromJunction&&t.correct===!1&&!t.exit&&r.chance(n.game.state.wrongTurns?.5:1)&&s.splice(1,0,"ghost","corridor"),t.fromJunction&&n.testBranch&&s.splice(0,s.length,"corridor",...n.testBranch),n.stretchCount++;const o=t.index??n.progress,a=t.exit?Ir[Ir.length-1]:L2(o),l=t.fromJunction&&n.testBranch;return Ke("shelter")&&a==="Camden Town"&&!t.exit&&!l&&r.chance(n.shelters?.4:1)&&(s.splice(r.int(Math.min(1,s.length-2),s.length-2),0,"shelter"),n.shelters=(n.shelters||0)+1),{id:e,plan:s,rng:i,index:Math.min(o,Ir.length),station:a,theme:Jc(a),out:t.fromJunction?t.exitIndex===0?1:-1:0,dir:i.chance(.5)?"north":"south",dark:!t.first&&!t.exit&&i.chance(.06+.05*n.wrong),first:!!t.first,exit:!!t.exit,correct:t.correct,fromJunction:t.fromJunction||null,wrongAtStart:n.wrong,clocksBack:!!t.clocksBack}}const Ex=new Set(["junction","cross"]);function wx(n){return wv(0,n)}function Ax(n,t,e,i,s){const r=n.game.world,o=wx(r.exitPose(t,e).yaw);let a=t.env.stretch,l=t.env.idx+1;t.def.type==="junction"&&(a=n.branchStretch(t,e),l=0);let c=a.plan[l];c===void 0&&(c="corridor",l=a.plan.length);const f=m=>n.envFor(a,l,{yaw:o,...m}),h=m=>n.envFor(a,l-1,{yaw:o,filler:!0,...m}),u=o>.1?-1:o<-.1?1:0,p=Ex.has(c)||c==="corridor"&&a.plan[l+1]==="junction";if(i===0){if(p&&u!==0)return{def:Kn.bend,env:h({turn:u})};if(c==="bend"){const m=u!==0?u:a.out||s.sign();return{def:Kn.bend,env:f({turn:m})}}if(c==="junction")return{def:Kn.junction,env:f(n.junctionEnv(s,a))};if(l===0&&a.fromJunction){const m=t.env;return{def:Kn.corridor,env:f({gate:!0,len:8,noticeChance:0,theme:m.theme,station:m.station}),force:!0}}if(c==="ghost"&&Ke("ghost")){const m=Xr.name;return{def:Kn.ghost,env:f({station:m,theme:Jc(m),ambient:[.05,.052,.056]})}}return{def:Kn[c]||Kn.corridor,env:f({})}}const g=[],_=a.out||1;u!==0?g.push(["bend",{turn:u}]):g.push(["bend",{turn:_}]),g.push(["corridor",{short:!0}]),Ke("stairs")&&g.push(["stairs",{dir:-1}],["stairs",{dir:1}]),Ke("escalator")&&g.push(["escalator",{dir:-1}],["escalator",{dir:1}]),g.push(["corridor",{short:!0,tiny:!0}]),u===0&&g.push(["bend",{turn:-_}]);const d=g[i-1];return d?{def:Kn[d[0]],env:h(d[1])}:null}const bl=n=>String(n).padStart(2,"0"),fh={"Battersea Power Station":"Battersea Pwr Stn","via Charing Cross":"via CX","via Bank":"via Bank"},uh=["There is a good service on the Northern line","Please stand behind the yellow line","Mind the gap between the train and the platform","This station closes after the last train","Please keep your belongings with you at all times","Check front of train for destination"],hh=["The last train has departed. It will depart again","Please stand behind yourself","This station is closed. You are inside it","The way out thanks you for your patience","Do not count the stairs","It is later than the clock says","Mind the gap. The gap minds you","There is a good service on all the lines that remain","North End. This train does not stop at North End"];function Rx(){const n=new Date;return n.getHours()*3600+n.getMinutes()*60+n.getSeconds()+n.getMilliseconds()/1e3}function dh(n){const t=(Math.floor(n)%86400+86400)%86400;return`${bl(Math.floor(t/3600))}:${bl(Math.floor(t/60)%60)}:${bl(t%60)}`}function ph(n,t,e=28){const i=`${n}   ***   `,s=Math.floor(t*5)%i.length;return(i+i+i).slice(s,s+e)}const Cx=n=>n<=0?"due":`${n} min${n===1?"":"s"}`;function Kd(n,t,e,i,s){const r=F2(n,t),o=[];for(let a=0;a<2;a++){const l=e.nextAt+a*e.period,c=new ge(Ye(s,Math.round(l))),[f,h]=r[Math.floor(c.next()*r.length)],u=`${fh[f]||f}${h?` ${fh[h]||h}`:""}`;o.push({dest:f,via:h,label:u,secs:l-i})}return o}function Px(n,t){n.anchorTod===void 0&&(n.anchorTod=Rx(),n.anchorT=t);const e=n.game,i=n.anchorTod+(t-n.anchorT),s=n.anchorTod-(t-n.anchorT),r=ne.goal-n.progress,o=n.wrong,a=Math.floor(t/12),l=new ge(Ye(n.seed,a)),c=l.chance(Math.min(.85,o*.2)),f=e.world&&e.world.current,h=f&&f.env.station||"Mornington Crescent",u=(f&&f.def.type==="platform"?f.p.dir:f&&f.env.pdir)||"north",p=e.trains?e.trains.schedule():{nextAt:e.state.time+150,period:240},g=Kd(h,u,p,e.state.time,n.seed);let _=r<=0?"approaching":`${r} min${r===1?"":"s"}`;o>=3&&Math.floor(t*4)%23===0&&(_=l.pick(["-- mins","99 mins","never"]));const d=(A,b)=>({l:`${A} ${b.label}`,r:Cx(Math.max(0,Math.ceil(b.secs/60)))});let m=[d(1,g[0]),{l:"2 Way out",r:_},d(3,g[1])];c&&(m[2]=l.pick([{l:"3 Check front of train",r:""},{l:`3 ${h}`,r:"due"},{l:"3 North End",r:"-- mins"},{l:"3 Not in service",r:""}])),e.trains&&e.trains.atPlatform()&&(m[0]={l:`1 ${g[0].label}`,r:""});const S=n.lastWrong?s:i,M=a%3===1?ph(c?l.pick(hh):l.pick(uh),t):dh(S);return{rows:m,footer:M,rows2:[{l:"Way out",r:_},{l:n.lastWrong?"You are going the wrong way":"Follow the yellow and black signs"},{l:ph(c?l.pick(hh):l.pick(uh),t)}],footer2:dh(S),tod:i,todBack:s}}class Lx{constructor(t){this.game=t,this.reset(1)}reset(t){this.seed=t>>>0,this.rng=new ge(Ye(this.seed,5)),this.progress=0,this.wrong=0,this.stretchCount=0,this.depth=0,this.penalty=0,this.base=0,this.junctionsPlanned=0,this.trainStops=0,this.shelters=0,this.lastWrong=!1,this.usedNames=new Set,this.seenNotices=new Set,this.log=[]}begin(t,e){const i=ch(this,{first:!0});e&&(i.plan=e.slice());const s=Kn[i.plan[0]],r=this.envFor(i,0);return t.start(s,r,Ye(this.seed,1))}envFor(t,e,i){return{theme:t.theme,stretch:t,idx:e,wrong:this.wrong,station:t.station,pdir:t.dir,ambient:t.dark?[.05,.055,.05]:[.1,.105,.1],seenNotices:this.seenNotices,gseed:this.seed,...i}}choose(t,e,i,s){return Ax(this,t,e,i,s)}branchStretch(t,e){if(t.branches||(t.branches=[]),!t.branches[e]){const i=t.p.correct===e,s=t.env.stretch?t.env.stretch.index:this.progress,r=i?s+1:Math.max(0,s-2);t.branches[e]=ch(this,{correct:i,fromJunction:t,exitIndex:e,exit:r>=ne.goal,index:r,clocksBack:!i})}return t.branches[e]}junctionEnv(t,e){const i=this.junctionsPlanned++,s=e?e.index:this.progress,r=s<2?0:s<4?1:2,o=i===0?"signs":t.weighted([["signs",3],["announce",2],["clock",1.6]]);return{jkind:this.forceKind||o,jlevel:this.forceLevel??r}}onBuilt(){}onDisposed(){}decide(t){const e=this.game.state;e.junctions++,this.depth++,t?(this.progress=Math.min(ne.goal,this.progress+1),this.penalty=Math.max(0,this.penalty-.25),this.lastWrong=!1):(this.progress=Math.max(0,this.progress-2),this.penalty=Math.min(4,this.penalty+1),this.lastWrong=!0,e.wrongTurns++),this.wrong=Math.min(5,this.base+.4*this.depth+this.penalty),e.progress=this.progress,e.wrong=this.wrong,this.log.push(t?1:0)}noticeRead(t){this.seenNotices.add(t)}boardState(t){return Px(this,t)}}class Dx{constructor(t){this.game=t,this.reset()}reset(){this.rng=new ge((this.game.state.seed||1)^659918),this.queue=[],this.cur=null,this.nextAmbient=16,this.nextSecurity=45,this.securityN=0,this.welcomeT=0,this.game.audio&&this.game.audio.stopSpeech()}say(t){t.urgent&&(this.queue.length=0,this.cur&&this.finish()),this.queue.push(t)}welcome(t=3){this.welcomeT=t}hush(){this.welcomeT=0,this.queue.length=0,this.cur&&this.finish()}busy(){return!!this.cur||this.queue.length>0}finish(){this.cur=null,this.game.audio.stopSpeech()}start(t){const e=this.game,i=t.text.split(/\s+/).length,s=t.chime==="none"?0:1.7;t.chime!=="none"&&e.audio.sfx(t.chime==="fall"?"chimeFall":"chimeRise"),this.cur={text:t.text,t:0,chimeDur:s,dur:s+Math.max(3.2,i*.43)+.8,spoken:!1,a:t,tag:t.tag!==void 0?t.tag:t.chime==="none"?"":t.chime==="fall"?"♪ chime, falling":"♪ chime, rising"}}update(t){const e=this.game;if(this.welcomeT>0&&(this.welcomeT-=t,this.welcomeT<=0&&this.say({text:h2,chime:"rise"})),!this.cur&&this.queue.length&&this.start(this.queue.shift()),this.cur){const i=this.cur;i.t+=t,!i.spoken&&i.t>=i.chimeDur&&(i.spoken=!0,e.audio.speak(i.text,{odd:!!i.a.odd})),i.t>=i.dur&&(this.cur=null);return}if(e.state.segment!=="ghost"){if(this.nextSecurity-=t,this.nextSecurity<=0){this.nextSecurity=180,this.nextAmbient=Math.max(this.nextAmbient,20);const i=e.state.wrong>=3&&this.securityN%3===2,s=i?l2[0]:Eu[this.securityN%Eu.length];this.securityN++,this.say({text:s,chime:i?"fall":"rise",odd:i});return}if(this.nextAmbient-=t,this.nextAmbient<=0){const i=e.state.wrong;this.nextAmbient=this.rng.range(38,75);const s=this.rng.next();let r=a2,o=!1;s<Math.min(.8,i*.22)&&(r=i>=3&&this.rng.chance(.5)?f2:c2,o=!0);const a=e.state.station||"this station",l=this.rng.pick(r).replaceAll("{station}",a).replaceAll("{next}",wd(a,"north")||"the next station");this.say({text:l,chime:o&&this.rng.chance(.6)?"fall":"rise",odd:o})}}}caption(){const t=this.cur;return t?t.t<t.chimeDur?{text:"",tag:t.tag}:{text:`"${t.text}"`,tag:t.tag}:null}}class Ix{constructor(t){this.game=t,this.reset()}reset(){this.rng=new ge((this.game.state.seed||1)^20973),this.tracking=0,this.trackT=0,this.nextTrack=12,this.dip=0,this.dipT=0,this.nextDip=40,this.pow=1,this.blackout=0,this.walkT=0,this.echo=[],this.echoT=0}begin(){this.trackT=1}glitch(t=.8){this.trackT=Math.max(this.trackT,t)}brownOut(t=1.2){this.dipT=Math.max(this.dipT,t)}lightsOut(t=1.5){this.blackout=Math.max(this.blackout,t)}figureGone(t){t.figureGone||(t.figureGone=!0,t.built&&t.built.figure&&(t.built.figure.visible=!1),this.glitch(.9),this.lightsOut(.22),this.game.audio.sfx("dip"),this.game.state.figures=(this.game.state.figures||0)+1)}update(t){const e=this.game,i=e.state.wrong;this.nextTrack-=t,this.nextTrack<=0&&(this.trackT=this.rng.range(.4,1.3),this.nextTrack=this.rng.range(14,38)/(1+i*.35)),this.trackT>0&&(this.trackT-=t),this.tracking=os(this.tracking,this.trackT>0?1:0,this.trackT>0?14:5,t),this.nextDip-=t,this.nextDip<=0&&(this.dipT=this.rng.range(.5,1.8),this.nextDip=this.rng.range(35,80)/(1+i*.4),e.audio.sfx("dip")),this.dipT>0&&(this.dipT-=t),this.blackout>0&&(this.blackout-=t),e.player.speed>.8?this.walkT+=t:(this.walkT>3.5&&i>=1.5&&this.rng.chance(.3+i*.08)&&(this.echo=[.42,.95]),this.walkT=0),this.echo.length?(this.echoT+=t,this.echoT>=this.echo[0]&&(this.echo.shift(),e.audio.sfx("echoStep"),this.echo.length||(this.echoT=0))):this.echoT=0}power(t,e){let i=1;this.dipT>0&&(i=.35+.3*Ie(t*18,9));const s=this.game.trains?this.game.trains.level:0;return s>.02&&(i*=1-.22*s*(.5+.5*Ie(t*14,4))),this.blackout>0&&(i=.02),this.pow=os(this.pow,i,20,e||.016),this.pow}}function Ux(n,t){const e=n.world,i=e.current,s=n.state;if(!i)return;const r=i.env;r.station&&s.station!==r.station&&(s.station=r.station);const o=i.built;if(!o||!o.extra)return;const[a,l]=Ys(i,n.player.pos.x,n.player.pos.z),c=n.player.pos.y-i.pos.y;if(o.extra.zones)for(const f of o.extra.zones)f.done||a>=f.x0&&a<=f.x1&&l>=f.z0&&l<=f.z1&&(f.y0===void 0||c>=f.y0&&c<=f.y1)&&(f.once!==!1&&(f.done=!0),f.fire(n,i,f,t))}function Jd(n,t){const e=n.p,i=r=>r===0?"left":"right",s=r=>`${e.dirs[r]==="north"?"northbound":"southbound"} platform`;if(e.kind==="announce"){const r=e.lie?1-e.correct:e.correct;return{text:e.lie?t.pick([`For the way out, please follow signs for the ${s(r)}. To the ${i(r)}. Please.`,`The way out is by the ${s(r)}, on the ${i(r)}. We would not lie to you.`,`Customers for the way out should keep to the ${i(r)}, for the ${s(r)}. Do hurry.`]):t.pick([`For the way out, please follow signs for the ${s(r)}, to the ${i(r)}.`,`Customers for the way out should keep to the ${i(r)} for the ${s(r)}.`,`The way out is by way of the ${s(r)}, on your ${i(r)}.`]),chime:e.lie?"fall":"rise",odd:e.lie,urgent:!0}}return null}const mh={clock:"Customers are reminded that all station clocks run forwards.",signs:"Please follow the yellow and black signs for the way out."},Nx=["Help point. There is nobody at the other end. Please follow the signs.","Help point. Your call is in a queue. You are the only caller.","Help point. Staff left some time ago. Trust the yellow signs and the rising chime."];function kx(n,t){n.state.junctionKind=t.p.kind,t.announcement===void 0&&(t.announcement=Jd(t,n.director.announcer.rng)),t.announcement&&n.director.announcer.say(t.announcement)}function Ox(n,t){const e=n.director.announcer,i=t.p.kind;n.director.reading=null,n.player.zoomTarget=0,i==="announce"?(t.announcement===void 0&&(t.announcement=Jd(t,e.rng)),e.say({...t.announcement,urgent:!0})):mh[i]?e.say({text:mh[i],chime:"rise",urgent:!0}):e.say({text:e.rng.pick(Nx),chime:"none",urgent:!0})}function Fx(n,t){const e=t.parent;if(!e||t.gateShut)return;const i=n.world,s=n.story,r=n.director.events;t.gateShut=!0,t.gateWall=Hu,t.built&&(t.built.gate&&(t.built.gate.visible=!0),t.built.walls.push(Hu));const o=e.def.type==="junction"?e.p.correct===t.exitIndex:!0;t.parent=null,i.prune(e,t);const a=Math.round(t.pos.x),l=Math.round(t.pos.y),c=Math.round(t.pos.z);i.rebase(a,l,c);const f=n.player;if(f.pos.x-=a,f.pos.y-=l,f.pos.z-=c,f.eyeY-=l,i.refresh(),n.audio.sfx("gate"),r.lightsOut(.28),r.glitch(o?.5:1.3),e.def.type!=="junction")return;s.decide(o);const h=t.env.stretch?t.env.stretch.index:s.progress;s.progress=Math.min(ne.goal,h),n.state.progress=s.progress,o?s.progress>=ne.goal&&n.director.announcer.say({text:"This is the way out. Please keep walking.",chime:"rise",urgent:!0}):(n.audio.sfx("wrong"),r.brownOut(2.2)),n.state.lastChoice=o?"right":"wrong"}class zx{constructor(t){this.game=t,this.announcer=new Dx(t),this.events=new Ix(t),this.reset()}reset(){this.target=null,this.reading=null,this.game.player&&(this.game.player.zoomTarget=0),this.hint="",this.hintT=0,this.hints=[],this.firstJunction=!0,this.scanT=0,this.announcer.reset(),this.events.reset()}begin(){this.events.begin(),this.setHint(this.game.mobile?"Left thumb: walk · Right thumb: look":"WASD to walk · mouse to look · E to read signs",7),this.queueHint("Mornington Crescent. The Customer Information board in front of you explains how to find the way out.",9),this.announcer.welcome(3)}setHint(t,e=5){this.hint=t,this.hintT=e}queueHint(t,e=6){this.hints.push([t,e])}enterJunction(t){kx(this.game,t),this.firstJunction&&(this.firstJunction=!1,this.queueHint("One way is right. Read the signs, watch the clocks, listen for the chime.",7))}helpPoint(t){Ox(this.game,t)}commit(t){Fx(this.game,t)}win(){const t=this.game,e=t.state;if(e.won)return;e.won=!0,this.stopReading(),this.announcer.reset(),t.audio.sfx("dawn"),t.audio.fadeOut(4),t.ui.whiteOut(),t.keyboard&&t.keyboard.release();const i=Math.floor(e.time/60),s=Math.floor(e.time%60),r=[["Tape length",`${i}:${String(s).padStart(2,"0")}`],["Junctions taken",String(e.junctions)],["Sent back down the line",`${e.wrongTurns} time${e.wrongTurns===1?"":"s"}`],["Notices read",String(e.cluesRead)],["Distance walked",`${Math.round(t.player.walked)} m`]];setTimeout(()=>t.ui.showEnd(r),2600)}liveText(t){const e=this.game.story.boardState(performance.now()/1e3);return(t.dynamic==="board2"?e.rows2:e.rows).slice(0,3).map(s=>s.r?`${s.l} … ${s.r}`:s.l).join("  /  ")}use(t){const e=this.game;if(!t||!e.state.started||e.state.paused||e.state.won)return;if(this.reading){this.stopReading();return}if(!this.target)return;const{item:i,node:s}=this.target;this.reading={title:i.title||"",text:i.dynamic?this.liveText(i):i.text||"",item:i,node:s},e.player.zoomTarget=1,e.audio.sfx("zoom"),i.seen||(i.seen=!0,i.clue&&e.state.cluesRead++),i.onRead&&i.onRead(e,i,s)}stopReading(){this.reading=null,this.game.player.zoomTarget=0}scan(){const t=this.game,e=t.player,i=t.world,s=e.viewDir(),r=e.pos.x,o=e.eyeY,a=e.pos.z;let l=null,c=0;const f=[i.current,...i.neighbours(i.current)];for(const h of f)if(h.built)for(const u of h.built.items){if(u.hidden)continue;const[p,g,_]=Ni(h,u.x,u.y,u.z),d=p-r,m=g-o,S=_-a,v=Math.hypot(d,m,S);if(v>(u.r||5.5)||v<.2)continue;const M=(d*s.x+m*s.y+S*s.z)/v,A=u.cone||.9;if(M<A)continue;const b=M-v*.01;b>c&&(c=b,l={item:u,node:h,d:v,dot:M})}if(this.target=l,this.reading){const h=this.reading,[u,p,g]=Ni(h.node,h.item.x,h.item.y,h.item.z),_=u-r,d=p-o,m=g-a,S=Math.hypot(_,d,m),v=(_*s.x+d*s.y+m*s.z)/Math.max(S,.001);(S>(h.item.r||5.5)+1.5||v<.55||!h.node.built)&&this.stopReading()}}update(t,e){const i=this.game;if(this.scanT-=t,this.scanT<=0&&(this.scanT=.1,this.scan()),this.hintT>0&&(this.hintT-=t,this.hintT<=0&&(this.hint="")),this.hintT<=0&&this.hints.length){const[s,r]=this.hints.shift();this.setHint(s,r)}e.step&&i.audio.footstep(e.running,i.player.loc),Ux(i,t),this.announcer.update(t),this.events.update(t),i.audio.update(t,i),this.drawOverlay(!0)}power(t,e){return this.events.power(t,e)}drawOverlay(t){const e=this.game,i=e.state,s=new Date;let r="";t&&this.target&&!this.reading&&(r=e.mobile?`[READ] ${this.target.item.label||"read"}`:`[E] ${this.target.item.label||"read"}`);const o=this.announcer.caption();i.caption=o?o.text:"",i.prompt=r,i.reading=this.reading?this.reading.text:"",e.overlay.draw({t:i.time,date:s,live:i.started,caption:o?o.text:"",captionTag:o?o.tag:"",prompt:r,reading:this.reading,zoom:e.player.zoom,hint:t?this.hint:""});const a=e.renderer.dv.uniforms;a.uTrack.value=this.events.tracking,a.uZoom.value=e.player.zoom}}const wn={cars:4,carLen:8.5,gap:.32};wn.length=wn.cars*wn.carLen+(wn.cars-1)*wn.gap;const zs=[[.98,-.78],[1.2,-.3],[1.2,.75],[1.1,1.15],[.88,1.5],[.6,1.76],[.3,1.88],[0,1.9]],Bx=4;function Hx(n,t,e,i){const s=t-wn.carLen,r=t,o=rs("side"),a=rs("roof"),l=rs("dark"),c=u=>o[1]+(o[3]-o[1])*(u-js[0])/(js[1]-js[0]),f={emit:.8},h={emit:.42};for(const u of[-1,1])for(let p=0;p<zs.length-1;p++){const[g,_]=zs[p],[d,m]=zs[p+1],S=[u*(m-_),-(d-g)*1,0],v=[u*g,_],M=[u*d,m];if(p<Bx){const A=u>0?o[0]:o[2],b=u>0?o[2]:o[0];n.quad("train",[v[0],v[1],r],[v[0],v[1],s],[M[0],M[1],s],[M[0],M[1],r],S,[A,c(_),b,c(m)],f)}else n.quad("train",[v[0],v[1],r],[v[0],v[1],s],[M[0],M[1],s],[M[0],M[1],r],S,a,h)}n.quad("train",[-.98,-.78,s],[.98,-.78,s],[.98,-.78,r],[-.98,-.78,r],[0,-1,0],l,{emit:.1});for(const[u,p,g]of[[r,1,e?"front":null],[s,-1,i?"rear":null]]){const _=g?rs(g):l,d=(S,v)=>g?[_[0]+(_[2]-_[0])*(.5+p*S/2.4),_[1]+(_[3]-_[1])*((v+.78)/2.68)]:[(_[0]+_[2])/2,(_[1]+_[3])/2],m={emit:g?.85:.25};for(let S=0;S<zs.length-1;S++){const[v,M]=zs[S],[A,b]=zs[S+1];n.quadUV("train",[-v,M,u],[v,M,u],[A,b,u],[-A,b,u],[0,0,p],d(-v,M),d(v,M),d(A,b),d(-A,b),m)}if(g){const S=rs(g==="front"?"lamp":"tail");for(const v of[-.82,.82])n.quad("train",[v-.09,-.08,u+p*.02],[v+.09,-.08,u+p*.02],[v+.09,.1,u+p*.02],[v-.09,.1,u+p*.02],[0,0,p],S,{emit:2})}}}let $o=null;function Gx(){if($o)return $o;const n=new fd;for(let r=0;r<wn.cars;r++)Hx(n,-r*(wn.carLen+wn.gap),r===0,r===wn.cars-1);const t=n.bake([0,0,0]).train,e={value:new Pe(0,1,-1e6,1e6)},i=ld(Xd(),null,!1,e);i.side=Tn;const s=new An(t,i);return s.frustumCulled=!1,s.visible=!1,s.name="train",$o={mesh:s,clip:e},$o}const Mr=5.5,Vx=6.5,Wx=1,qx=15,gh="Please mind the gap between the train and the platform.";class Xx{constructor(t){this.game=t;const{mesh:e,clip:i}=Gx();this.mesh=e,this.clip=i,t.scene.add(e),this.reset()}reset(){this.rng=new ge((this.game.state.seed||1)^31249),this.nextAt=32,this.period=215,this.phase="idle",this.node=null,this.t=0,this.s=0,this.level=0,this.target=0,this.seenId=0,this.count=0,this.mesh.visible=!1,this.game.state.train="idle",this.game.state.trains=0}schedule(){return{nextAt:this.nextAt,period:this.period}}atPlatform(){return this.phase==="dwell"}soon(t=3){this.phase==="idle"&&(this.nextAt=this.game.state.time+t+Mr)}_done(){this.phase="idle",this.node=null,this.mesh.visible=!1,this.target=0,this.nextAt=this.game.state.time+this.period*this.rng.range(.8,1.25)}_begin(t){const e=this.game,i=e.state,s=t.env.station,r=t.p.dir,o=Kd(s,r,this.schedule(),i.time,e.story.seed)[0];if(this.train=o,this.node=t,this.phase="approach",this.t=0,this.count++,this.passing=!!t.p.ghost,i.trains=this.count,zy(o.dest.replace("Battersea Power Station","Battersea")),e.audio.sfx("trainApproach"),this.passing){e.director.setHint(on.train,5);return}e.director.announcer.say({text:`The train now approaching platform ${ps(r)} is not in service. Please stand well back from the platform edge.`,chime:"rise"}),e.director.setHint("A warm wind pushes out of the tunnel. It smells of brake dust.",5)}update(t){const e=this.game,i=e.state.time,s=e.world.current,r=e.director.events,o=!!(s&&(s.def.type==="platform"||s.def.type==="ghost")&&s.built);if(o&&s.id!==this.seenId&&(this.seenId=s.id,this.phase==="idle"&&!s.p.start&&(this.nextAt=Math.min(this.nextAt,i+Mr+(s.p.ghost?this.rng.range(6,10):this.rng.range(9,20))))),this.t+=t,this.phase==="idle")i>=this.nextAt-Mr&&(o?this._begin(s):(this.phase="distant",this.t=0,e.audio.sfx("train")));else if(this.phase==="distant")this.target=.75*Math.sin(Qe(this.t/9,0,1)*Math.PI),this.t>9&&this._done();else{const c=this.node;if(!c.built||!e.world.nodes.has(c.id)){this._done();return}const f=c.p.L,h=f-1.3,u=-1.2;if(this.phase==="approach")this.target=.75*Qe(this.t/Mr,0,1),this.t>=Mr&&(this.phase=this.passing?"pass":"arrive",this.t=0,this.mesh.visible=!0,r.glitch(.5),this.passing&&e.audio.sfx("train"));else if(this.phase==="pass")this.s=u+qx*this.t,this.target=1,this.s-wn.length>f+xe.depth&&(r.glitch(.4),e.state.trainsPassed=(e.state.trainsPassed||0)+1,this._done());else if(this.phase==="arrive"){const p=Qe(this.t/Vx,0,1);this.s=u+(h-u)*(1-(1-p)*(1-p)),this.target=1-.7*p,!this.braked&&p>.45&&(this.braked=!0,e.audio.sfx("trainBrake")),p>=1&&(this.phase="dwell",this.t=0,this.braked=!1,this.spoke=0)}else if(this.phase==="dwell"){this.target=.22;const p=e.director.announcer,g=d=>Math.max(3.2,d.split(/\s+/).length*.43)+.8,_=(d,m)=>p.say({text:d,chime:"none",tag:"(from the train)",urgent:m});if(this.spoke===0&&this.t>.4&&(this.spoke=1,p.say({text:gh,chime:"none",tag:"(platform)",urgent:!0}),this.tCall=this.t+g(gh)+.2),this.spoke===1&&this.t>this.tCall){this.spoke=2;const d=c.env.station,m=this.train,S=e.state.wrong>=2.5&&this.rng.chance(.5)?V2(d):G2(d,c.p.dir,m.dest,m.via);_(S,!0),this.tClose=this.t+g(S)+.3}this.spoke===2&&this.t>this.tClose&&(this.spoke=3,_("Stand clear of the doors, please.")),this.spoke===3&&this.t>this.tClose+1.5&&(this.spoke=4,e.audio.sfx("doorChime")),this.spoke===4&&this.t>this.tClose+5&&(this.phase="depart",this.t=0,e.audio.sfx("trainDepart"))}else this.phase==="depart"&&(this.s=h+.5*Wx*this.t*this.t,this.target=Qe(.3+this.t*.12,0,1),this.s-wn.length>f+xe.depth&&(r.glitch(.4),this._done()));if(this.node){const p=c.p.side,[g,_,d]=Ni(c,p*nt.track,0,this.s);this.mesh.position.set(g,_,d),this.mesh.rotation.y=c.yaw;const m=Math.sin(c.yaw),S=Math.cos(c.yaw),v=c.pos.x*m+c.pos.z*S;this.clip.value.set(m,S,v-xe.depth+.07,v+f+xe.depth-.07)}}this.level=os(this.level,this.target,this.target>this.level?2.2:.9,t);const a=o&&this.node===s;e.player.shake=this.level*(a?1:.25);const l=a&&this.phase!=="dwell"?(this.phase==="depart"?.1:.2)*this.level*(1-.8*e.player.zoom):0;e.player.windX=l?Math.sin(s.yaw)*l:0,e.player.windZ=l?Math.cos(s.yaw)*l:0,this.node&&this.node.built&&!this.node.built.group.visible?this.mesh.visible=!1:this.node&&(this.phase==="arrive"||this.phase==="pass"||this.phase==="dwell"||this.phase==="depart")&&(this.mesh.visible=!0),e.state.train=this.phase}}function Tl(n,t,e=1){const i=n.createBufferSource();return i.buffer=t,i.loop=!0,i.playbackRate.value=e,i.start(),i}class $x{constructor(t){const e=this.ctx=t.ctx;this.engine=t,this.t=0,this.nextDrip=6,this.hum=e.createGain(),this.hum.gain.value=0;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420;for(const[c,f,h]of[[100,"sawtooth",.5],[50,"sine",.5],[200.4,"triangle",.22],[300,"sine",.08]]){const u=e.createOscillator();u.type=f,u.frequency.value=c;const p=e.createGain();p.gain.value=h,u.connect(p),p.connect(i),u.start()}i.connect(this.hum),this.hum.connect(t.out),this.buzz=e.createGain(),this.buzz.gain.value=0;const s=e.createOscillator();s.type="square",s.frequency.value=100;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2900,r.Q.value=1.4,s.connect(r),r.connect(this.buzz),this.buzz.connect(t.out),this.buzz.connect(t.rev),s.start(),this.rumble=e.createGain(),this.rumble.gain.value=0,this.rumbleLP=e.createBiquadFilter(),this.rumbleLP.type="lowpass",this.rumbleLP.frequency.value=70,Tl(e,t.brown,.6).connect(this.rumbleLP),this.rumbleLP.connect(this.rumble),this.rumble.connect(t.out),this.wind=e.createGain(),this.wind.gain.value=0,this.windBP=e.createBiquadFilter(),this.windBP.type="bandpass",this.windBP.frequency.value=420,this.windBP.Q.value=.9;const o=Tl(e,t.white,.8);o.connect(this.windBP),this.windBP.connect(this.wind),this.wind.connect(t.out),this.wind.connect(t.rev),this.whistle=e.createGain(),this.whistle.gain.value=0,this.whistleBP=e.createBiquadFilter(),this.whistleBP.type="bandpass",this.whistleBP.frequency.value=1300,this.whistleBP.Q.value=14,o.connect(this.whistleBP),this.whistleBP.connect(this.whistle),this.whistle.connect(t.rev);const a=e.createGain();a.gain.value=.0045;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=5200,Tl(e,t.white,1.3).connect(l),l.connect(a),a.connect(t.out)}update(t,e){const i=this.ctx,s=i.currentTime,r=.12;this.t+=t;const o=this.t,a=e.director.events,l=e.world.current,c=e.state.wrong,f=a.pow,h=l?l.flick.value:1,u=l&&l.p&&l.p.lights&&l.p.lights.dark?.35:1;this.hum.gain.setTargetAtTime(.05*f*u*(1-c*.03),s,r),this.buzz.gain.setTargetAtTime(.004+(h<.5?0:.006)*f+(1-f)*.01,s,.02);const p=e.trains?e.trains.level:0;this.rumble.gain.setTargetAtTime(.16+.1*Ie(o*.13,1)+p*.75,s,.3),this.rumbleLP.frequency.setTargetAtTime(62+p*120,s,.4);const g=l&&(l.def.type==="platform"||l.def.type==="trainstop")?1.5:1,_=.5+.5*Ie(o*.09,2);this.wind.gain.setTargetAtTime((.018+.045*_*_+p*.11)*g,s,.4),this.windBP.frequency.setTargetAtTime(300+420*(.5+.5*Ie(o*.17,3))+p*500,s,.5);const d=Math.max(0,Ie(o*.11,4)-.35)+p*.25;this.whistle.gain.setTargetAtTime(d*.05*g,s,.6),this.whistleBP.frequency.setTargetAtTime(1100+500*Ie(o*.23,5),s,.8),this.nextDrip-=t,this.nextDrip<=0&&(this.nextDrip=3+Math.random()*14,this.engine.sfx("drip"))}}function Re(n,{freq:t,to:e,type:i="sine",dur:s=.3,gain:r=.2,attack:o=.005,at:a=0,rev:l=.5,dry:c=1}){const f=n.ctx,h=f.currentTime+a,u=f.createOscillator();u.type=i,u.frequency.setValueAtTime(t,h),e&&u.frequency.exponentialRampToValueAtTime(e,h+s);const p=f.createGain();if(p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(r,h+o),p.gain.exponentialRampToValueAtTime(1e-4,h+s),u.connect(p),c>0){const g=f.createGain();g.gain.value=c,p.connect(g),g.connect(n.out)}if(l>0){const g=f.createGain();g.gain.value=l,p.connect(g),g.connect(n.rev)}u.start(h),u.stop(h+s+.05)}function Me(n,{dur:t=.1,gain:e=.2,type:i="bandpass",freq:s=1e3,q:r=1,at:o=0,rev:a=.4,dry:l=1,attack:c=.002,sweep:f=0}){const h=n.ctx,u=h.currentTime+o,p=h.createBufferSource();p.buffer=n.white,p.loop=t>1.2;const g=h.createBiquadFilter();g.type=i,g.frequency.setValueAtTime(s,u),g.Q.value=r,f&&g.frequency.exponentialRampToValueAtTime(f,u+t);const _=h.createGain();if(_.gain.setValueAtTime(1e-4,u),_.gain.exponentialRampToValueAtTime(e,u+c),_.gain.exponentialRampToValueAtTime(1e-4,u+t),p.connect(g),g.connect(_),l>0){const d=h.createGain();d.gain.value=l,_.connect(d),d.connect(n.out)}if(a>0){const d=h.createGain();d.gain.value=a,_.connect(d),d.connect(n.rev)}p.start(u,Math.random()*1.5),p.stop(u+t+.05)}function Bs(n,t,e,i=.16){Re(n,{freq:t,dur:1.5,gain:i,at:e,rev:.9,dry:.5,attack:.008}),Re(n,{freq:t*2,dur:.9,gain:i*.35,at:e,rev:.6,dry:.3}),Re(n,{freq:t*2.76,dur:.5,gain:i*.14,at:e,rev:.5,dry:.2})}function Yx(n,t,e,i){const s=(t?1.25:1)*(.85+Math.random()*.3),r=(i?1.06:.95)*(.94+Math.random()*.12);Re(n,{freq:95*r,to:48,dur:.09,gain:.16*s,rev:.35}),e==="metal"?(Me(n,{dur:.07,gain:.12*s,type:"bandpass",freq:2300*r,q:5,rev:.6}),Re(n,{freq:610*r,dur:.22,gain:.03*s,type:"triangle",rev:.8,dry:.4})):e==="stone"?Me(n,{dur:.06,gain:.11*s,type:"bandpass",freq:1250*r,q:1.2,rev:.7}):(Me(n,{dur:.045,gain:.13*s,type:"highpass",freq:1900*r,q:.7,rev:.75}),Me(n,{dur:.03,gain:.05*s,type:"bandpass",freq:3600,q:2,at:.035,rev:.6}))}const Zx={chimeRise(n){Bs(n,392,0),Bs(n,493.9,.42),Bs(n,587.3,.84)},chimeFall(n){Bs(n,587.3,0),Bs(n,493.9,.42),Bs(n,380,.84,.17)},zoom(n){Re(n,{freq:360,to:470,type:"triangle",dur:.2,gain:.012,rev:0,dry:1})},click(n){Me(n,{dur:.02,gain:.08,type:"highpass",freq:2500,rev:.2})},dip(n){Re(n,{freq:50,type:"square",dur:.35,gain:.03,rev:.4}),Me(n,{dur:.03,gain:.1,type:"highpass",freq:3e3,rev:.5}),Me(n,{dur:.03,gain:.07,type:"highpass",freq:3e3,at:.22,rev:.5})},drip(n){const t=900+Math.random()*900;Re(n,{freq:t,to:t*.55,dur:.07,gain:.02+Math.random()*.02,rev:1,dry:.1})},gate(n){for(let e=0;e<6;e++)Me(n,{dur:.05,gain:.1,type:"bandpass",freq:1700+e*130,q:3,at:e*.07,rev:.6});const t=.46;for(const[e,i,s]of[[176,.2,1.6],[311,.14,1.3],[507,.1,1],[813,.07,.8],[1247,.05,.55],[1790,.03,.4]])Re(n,{freq:e*(.99+Math.random()*.02),dur:s,gain:i,at:t,rev:.9,dry:.7,attack:.002});Me(n,{dur:.16,gain:.3,type:"lowpass",freq:900,at:t,rev:.9}),Me(n,{dur:.3,gain:.05,type:"bandpass",freq:2600,q:6,at:t+.12,rev:.9})},train(n){for(let t=0;t<26;t++){const e=1.2+t*.27+t%2*.09,i=Math.sin(t/26*Math.PI);Me(n,{dur:.07,gain:.05+.12*i,type:"lowpass",freq:240+200*i,at:e,rev:.9,dry:.3})}Me(n,{dur:3.2,gain:.018,type:"bandpass",freq:2500,sweep:3300,q:28,at:3,rev:1,dry:0,attack:1.2})},echoStep(n){Re(n,{freq:88,to:46,dur:.1,gain:.07,rev:1,dry:.25}),Me(n,{dur:.05,gain:.05,type:"highpass",freq:1700,q:.7,rev:1,dry:.2})},touchOut(n){Re(n,{freq:2350,dur:.14,gain:.07,type:"triangle",attack:.004,rev:.4,dry:.9})},touchFail(n){for(const t of[0,.19])Re(n,{freq:620,dur:.15,gain:.08,at:t,type:"square",attack:.004,rev:.4,dry:.9})},paddles(n){for(let t=0;t<7;t++)Re(n,{freq:150-t*7,dur:.11,gain:.07,at:.03*t,type:"triangle",attack:.002,rev:.6,dry:.8})},dawn(n){for(const[t,e]of[[196,0],[293.7,.4],[392,.8],[587.3,1.3]])Re(n,{freq:t,dur:4.5,gain:.07,at:e,attack:1.5,rev:.9,dry:.6,type:"sine"})},wrong(n){Re(n,{freq:61,to:49,dur:1.8,gain:.2,attack:.5,rev:.6}),Re(n,{freq:92.5,to:87,dur:1.6,gain:.07,attack:.6,rev:.6,type:"triangle"})},right(n){Re(n,{freq:784,dur:.5,gain:.025,rev:.9,dry:.3}),Re(n,{freq:1175,dur:.6,gain:.02,at:.12,rev:.9,dry:.3})}},jx={trainApproach(n){Me(n,{dur:9.5,gain:.32,type:"lowpass",freq:110,sweep:420,attack:4.8,rev:.7,dry:.8}),Me(n,{dur:6,gain:.012,type:"bandpass",freq:2900,sweep:3700,q:26,attack:3.5,rev:1,dry:.2});for(let t=0;t<14;t++){const e=5.2+t*(.2+t*.022);Me(n,{dur:.06,gain:.16-t*.008,type:"lowpass",freq:330,at:e,rev:.8,dry:.7}),Me(n,{dur:.05,gain:.1-t*.005,type:"lowpass",freq:300,at:e+.085,rev:.8,dry:.7})}},trainBrake(n){Me(n,{dur:2.6,gain:.03,type:"bandpass",freq:3300,sweep:2300,q:34,attack:.5,rev:1,dry:.5}),Me(n,{dur:2.2,gain:.018,type:"bandpass",freq:4500,sweep:3200,q:40,attack:.7,at:.3,rev:1,dry:.4}),Me(n,{dur:.9,gain:.07,type:"highpass",freq:2600,at:3.3,attack:.03,rev:.6,dry:.8}),Re(n,{freq:70,to:42,dur:.5,gain:.12,at:3.2,rev:.5})},doorChime(n){for(let t=0;t<9;t++)Re(n,{freq:1960,dur:.11,gain:.05,at:.9+t*.21,type:"triangle",attack:.004,rev:.6,dry:.7});Me(n,{dur:.12,gain:.12,type:"lowpass",freq:500,at:3,rev:.7})},trainDepart(n){for(const[t,e,i,s]of[[.2,110,330,2.6],[2.5,180,520,3],[5.2,260,700,3.6]])Re(n,{freq:e,to:i,dur:s,gain:.03,at:t,type:"sawtooth",attack:.4,rev:.8,dry:.5}),Re(n,{freq:e*2.02,to:i*2.02,dur:s,gain:.012,at:t,type:"triangle",attack:.4,rev:.8,dry:.4});Me(n,{dur:9.5,gain:.26,type:"lowpass",freq:140,sweep:380,attack:3,rev:.7,dry:.8});for(let t=0;t<16;t++){const e=1.6+7.2*(1-Math.sqrt(1-t/16));Me(n,{dur:.055,gain:.07+t*.006,type:"lowpass",freq:320,at:e,rev:.8,dry:.7})}}},_h="./voice/";function Kx(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}const Jx=["Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel","Microsoft Susan","Microsoft Maisie","Martha","Kate","Serena","Stephanie","Fiona","Moira","Karen","Tessa","Catherine","Samantha","Victoria","Allison","Ava","Susan","Zoe","Microsoft Zira","Microsoft Aria","Microsoft Jenny","Google US English"],Qx=/\b(male|daniel|arthur|oliver|ryan|george|thomas|alex|fred|aaron|gordon|lee|rishi|david|mark|guy|james|tom)\b/i;class tS{constructor(){if(this.enabled=!0,this.voice=null,this.synth=typeof window<"u"&&"speechSynthesis"in window?window.speechSynthesis:null,this.clips=null,this.ctx=null,this.dest=null,this.src=null,this.buffers=new Map,this.seq=0,typeof fetch<"u"&&fetch(`${_h}index.json`).then(t=>t.ok?t.json():[]).then(t=>{this.clips=new Set(t)}).catch(()=>{}),this.synth){this.pickVoice();try{this.synth.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}}pickVoice(){let t=[];try{t=this.synth.getVoices()||[]}catch{return}if(!t.length)return;const e=t.filter(r=>/^en/i.test(r.lang)),i=e.filter(r=>/en[-_]GB/i.test(r.lang));for(const r of Jx){const o=i.find(a=>a.name.includes(r))||e.find(a=>a.name.includes(r));if(o&&!/\bmale\b/i.test(o.name)){this.voice=o;return}}const s=r=>/female|woman/i.test(r.name)||!Qx.test(r.name);this.voice=i.find(s)||e.find(s)||i[0]||e[0]||null}prime(){if(this.enabled&&this.synth)try{const t=new SpeechSynthesisUtterance(" ");t.volume=0,this.synth.speak(t)}catch{}}attach(t,e){this.ctx=t,this.dest=e}_buffer(t){return this.buffers.has(t)||this.buffers.set(t,fetch(`${_h}${t}.mp3`).then(e=>e.arrayBuffer()).then(e=>new Promise((i,s)=>this.ctx.decodeAudioData(e,i,s)))),this.buffers.get(t)}speak(t,e={}){if(!this.enabled)return;this._stopAll();const i=Kx(t);if(this.clips&&this.clips.has(i)&&this.ctx){const s=++this.seq;this._buffer(i).then(r=>{if(s!==this.seq||!this.enabled)return;const o=this.ctx.createBufferSource();o.buffer=r,o.playbackRate.value=e.odd?.88:1;const a=this.ctx.createGain();a.gain.value=.8,o.connect(a),a.connect(this.dest),o.start(),this.src=o}).catch(()=>{this.buffers.delete(i),s===this.seq&&this._synth(t,e)});return}this._synth(t,e)}_synth(t,e){if(this.synth)try{this.synth.cancel();const i=new SpeechSynthesisUtterance(t);this.voice?(i.voice=this.voice,i.lang=this.voice.lang):i.lang="en-GB",i.rate=e.odd?.8:.92,i.pitch=e.odd?.86:1,i.volume=.85,this.synth.speak(i)}catch{}}_stopAll(){if(this.seq++,this.src){try{this.src.stop()}catch{}this.src=null}if(this.synth)try{this.synth.cancel()}catch{}}stop(){this._stopAll()}pause(){if(this.synth)try{this.synth.pause()}catch{}}resume(){if(this.synth)try{this.synth.resume()}catch{}}}function vh(n,t,e){const i=Math.floor(n.sampleRate*t),s=n.createBuffer(1,i,n.sampleRate),r=s.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;e?(o=(o+.02*l)/1.02,r[a]=o*3.5):r[a]=l}return s}function eS(n,t=2.6){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let s=0;s<2;s++){const r=i.getChannelData(s);let o=0;for(let a=0;a<e;a++){const l=a/n.sampleRate,c=Math.exp(-l*2.6)*(1+.25*Math.sin(l*61+s)),f=Math.random()*2-1,h=.25+.75*Math.exp(-l*3);o+=(f-o)*h,r[a]=o*c}}return i}class nS{constructor(){this.ctx=null,this.ready=!1,this.voice=new tS,this.stepFoot=0}start(){if(this.ready){this.setPaused(!1);return}try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.25,this.master.connect(i),i.connect(e.destination),this.out=e.createGain(),this.out.connect(this.master),this.rev=e.createGain(),this.rev.gain.value=.9;const s=e.createConvolver();s.buffer=eS(e);const r=e.createGain();r.gain.value=.55,this.rev.connect(s),s.connect(r),r.connect(this.master),this.white=vh(e,2,!1),this.brown=vh(e,4,!0),this.ambient=new $x(this),this.master.gain.setTargetAtTime(.9,e.currentTime,.8),this.ready=!0,e.state==="suspended"&&e.resume().catch(()=>{}),this.voice.attach(e,this.master),this.voice.prime()}catch{this.ready=!1}}setPaused(t){if(this.ready)try{t?(this.ctx.suspend(),this.voice.pause()):(this.ctx.resume(),this.voice.resume())}catch{}}setVoiceEnabled(t){this.voice.enabled=!!t,t||this.voice.stop()}update(t,e){this.ready&&this.ambient&&this.ambient.update(t,e)}sfx(t,e){if(!this.ready)return;const i=Zx[t]||jx[t];if(i)try{i(this,e||{})}catch{}}footstep(t,e){if(!this.ready)return;this.stepFoot^=1;const i=e&&e.cell&&e.cell.surface?e.cell.surface:"tile";try{Yx(this,t,i,this.stepFoot)}catch{}}speak(t,e){this.voice.speak(t,e)}stopSpeech(){this.voice.stop()}fadeOut(t=3){this.ready&&this.master.gain.setTargetAtTime(1e-4,this.ctx.currentTime,t/3)}fadeIn(){this.ready&&this.master.gain.setTargetAtTime(.9,this.ctx.currentTime,.5)}}const Pc=26,Or=.0756,iS={wall:6.83,track:8.02,frieze:2.75,dado:.91,trackDado:5.7};function yh(n,t,e,i,s,r,o){n.fillStyle=Sa(r,o.range(-.07,.05)),n.fillRect(t,e,i,s),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(t+1,e+1,i-2,Math.max(1,s*.18)),n.fillStyle="rgba(0,0,0,0.10)",n.fillRect(t+1,e+s-1.5,i-2,1),o.chance(.03)&&(n.fillStyle=o.chance(.5)?"rgba(60,50,35,0.22)":"rgba(255,255,255,0.18)",n.fillRect(t+1,e+1,i-2,s-2))}function Qd(n,t,e,i,s,r,o,a){const l=t/Pc,c=Or*i,f=Math.ceil(s/Or);n.fillStyle=r.grout,n.fillRect(0,e-s*i,t,s*i);for(let h=0;h<f;h++){const u=e-(h+1)*c,p=h%2?l/2:0;for(let g=-1;g<Pc;g++){const _=g*l+p,d=((_+l/2)/t%1+1)%1,m=a(h,(h+.5)*Or,d);m&&(yh(n,_+.5,u+.5,l-1,c-1,m,o),_+l>t&&yh(n,_-t+.5,u+.5,l-1,c-1,m,o))}}}const da=n=>Math.round(n/Or),t0=(n,t)=>Math.min(...t.map(e=>Math.abs(n-e)))*Pc;function sS(n){const i=141.04683195592287,s=gn(1024,512),r=s.getContext("2d"),o=new ge($s(n.id+"passage")),a=[da(1.2),da(1.45)];Qd(r,1024,512,i,3.63,n,o,(c,f,h)=>{if(f<.91)return n.skirt;if(a.includes(c))return n.band;if(f>1.6){const u=t0(h,[.5]);if(u<.5)return n.band;if(u<1.05)return n.accent}return n.ground});const l=r.createLinearGradient(0,0,0,512);return l.addColorStop(0,"rgba(25,20,12,0.4)"),l.addColorStop(.3,"rgba(25,20,12,0.1)"),l.addColorStop(.8,"rgba(25,20,12,0)"),l.addColorStop(1,"rgba(25,20,12,0.25)"),r.fillStyle=l,r.fillRect(0,0,1024,512),Be(r,0,0,1024,512,$s(n.id)+7,1,!1),s}function xh(n,t,e,i,s,r){n.fillStyle="#e4dcc0",n.fillRect(t,e,i,s);for(let o=0;o<26;o++){const a=t+r.range(0,i),l=e+r.range(0,s),c=r.range(30,120);for(const f of[-i,0,i]){const h=n.createRadialGradient(a+f,l,0,a+f,l,c);h.addColorStop(0,`rgba(60,48,26,${r.range(.04,.1)})`),h.addColorStop(1,"rgba(60,48,26,0)"),n.fillStyle=h,n.fillRect(a+f-c,l-c,c*2,c*2)}}}function rS(n){const i=iS,s=gn(1024,1024),r=s.getContext("2d"),o=new ge($s(n.id+"platform")),a=512/i.wall,l=[.25,.75],c=.16*(1024/6),f=.38*(1024/6),h=(S,v)=>{for(const M of l)for(const A of[-1,1]){const b=M*1024+A*f/2-c/2;r.fillStyle=n.band,r.fillRect(b,S,c,v),r.fillStyle="rgba(255,255,255,0.10)",r.fillRect(b,S,2,v),r.fillStyle="rgba(0,0,0,0.25)";for(let T=S;T<S+v;T+=Or*a*3)r.fillRect(b,T,c,1)}};xh(r,0,0,1024,512,o),h(0,512-i.frieze*a);const u=[da(1.2),da(1.45)];Qd(r,1024,512,a,i.frieze,n,o,(S,v,M)=>v<i.dado?n.skirt:u.includes(S)||t0(M,l.flatMap(A=>[A-.032,A+.032]))<.55?n.band:n.ground);const p=512/i.track,g=S=>1024-S*p;xh(r,0,512,1024,512,o),h(g(i.trackDado),i.trackDado*p),r.fillStyle="#17181a",r.fillRect(0,512,1024,g(i.trackDado)-512),r.fillStyle=n.band,r.fillRect(0,g(3.6)-3,1024,6);const _=[[.25,6,"#0b0b0b"],[.42,4,"#3a3a3a"],[.6,7,"#101010"],[.78,4,"#4a2c1a"],[1,5,"#0c0c0c"]];for(const[S,v,M]of _){const A=g(i.trackDado+S);r.fillStyle=M,r.fillRect(0,A,1024,v),r.fillStyle="rgba(255,255,255,0.13)",r.fillRect(0,A,1024,1)}for(let S=40;S<1024;S+=170)r.fillStyle="#2c2d2f",r.fillRect(S,g(i.trackDado+1.1),5,1*p);Be(r,0,512,1024,512,$s(n.id)+3,.8,!1);const d=r.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(25,20,12,0.38)"),d.addColorStop(.35,"rgba(25,20,12,0.1)"),d.addColorStop(.85,"rgba(25,20,12,0)"),d.addColorStop(1,"rgba(25,20,12,0.22)"),r.fillStyle=d,r.fillRect(0,0,1024,512);const m=r.createLinearGradient(0,1024,0,512);return m.addColorStop(0,"rgba(25,20,12,0.38)"),m.addColorStop(.4,"rgba(25,20,12,0.12)"),m.addColorStop(1,"rgba(25,20,12,0.05)"),r.fillStyle=m,r.fillRect(0,512,1024,512),Be(r,0,0,1024,512,$s(n.id)+7,1,!1),s}function oS(n,t="passage"){return t==="platform"?rS(n):sS(n)}const Yo=new Map,br=[],aS=4;function Sh(n,t="passage"){const e=br.indexOf(n.id);for(e>=0&&br.splice(e,1),br.push(n.id);br.length>aS;){const r=br.shift();for(const o of["passage","platform"]){const a=Yo.get(`${r}:${o}`);a&&(a.dispose(),Yo.delete(`${r}:${o}`))}}const i=`${n.id}:${t}`;let s=Yo.get(i);return s||(s=ar(oS(n,t),{repeatU:!0}),Yo.set(i,s)),s}const Yn=3;class lS{constructor(t=512){this.size=t,this.canvas=null,this.ctx=null,this.free=[{x:0,y:0,w:t,h:t}],this.used=!1,this.overflow=0}_ensure(){this.canvas||(this.canvas=gn(this.size,this.size),this.ctx=this.canvas.getContext("2d"))}_place(t,e){let i=-1,s=1/0;for(let l=0;l<this.free.length;l++){const c=this.free[l];c.w>=t&&c.h>=e&&c.w*c.h<s&&(i=l,s=c.w*c.h)}if(i<0)return null;const r=this.free.splice(i,1)[0],o=r.w-t,a=r.h-e;return o>a?(o>8&&this.free.push({x:r.x+t,y:r.y,w:o,h:r.h}),a>8&&this.free.push({x:r.x,y:r.y+e,w:t,h:a})):(a>8&&this.free.push({x:r.x,y:r.y+e,w:r.w,h:a}),o>8&&this.free.push({x:r.x+t,y:r.y,w:o,h:e})),{x:r.x,y:r.y}}room(t){const e=this.free;this.free=e.map(s=>({...s}));let i=0;for(const[s,r]of t){if(!this._place(Math.round(s)+Yn*2,Math.round(r)+Yn*2))break;i++}return this.free=e,i}add(t,e,i){return this.paint(this.reserve(t,e),i)}reserve(t,e){const i=this.size;t=Math.min(Math.round(t),i-Yn*2),e=Math.min(Math.round(e),i-Yn*2);let s=this._place(t+Yn*2,e+Yn*2);if(!s){this.overflow++;for(let r=0;r<4&&!s;r++)t=Math.max(8,Math.round(t*.7)),e=Math.max(8,Math.round(e*.7)),s=this._place(t+Yn*2,e+Yn*2);s||(s={x:0,y:0})}return{x:s.x+Yn,y:s.y+Yn,w:t,h:e}}paint(t,e){this._ensure();const i=this.size,{x:s,y:r,w:o,h:a}=t,l=this.ctx;l.save(),l.translate(s,r),l.beginPath(),l.rect(0,0,o,a),l.clip(),l.clearRect(0,0,o,a),e(l,o,a),l.restore(),this.used=!0;const c=.5;return[(s+c)/i,1-(r+a-c)/i,(s+o-c)/i,1-(r+c)/i]}finish(){return this.used?ar(this.canvas):null}}function cS(n,t){const e=t.env.theme||Jc("Mornington Crescent");return n==="tile"?Sh(e,"passage"):n==="ptile"?Sh(e,"platform"):n==="dyn"?oy():n==="car"?Oy():n==="lining"?_x():n==="hall"?ex():n==="train"?Xd():i2()}function fS(n){return new lS(n.def.sheetSize||512)}let Mh="";function uS(n,t){const e=n.state,s=`${Math.floor(t*4)}|${e.progress}|${e.wrong}`;s!==Mh&&(Mh=s,ly(n.story.boardState(t)))}class hS{constructor(t,e){this.ui=e,this.mobile=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,document.body.classList.toggle("is-touch",this.mobile),this.overlay=new Nv,this.overlay.mobile=this.mobile,this.renderer=new Uv(t,this.overlay,{mobile:this.mobile}),this.scene=new id,this.camera=new Mn(ne.fov,this.renderer.aspect,.08,90),this.player=new Wv(this.camera),this.input={mx:0,mz:0,run:!1,lookX:0,lookY:0,kmx:0,kmz:0,krun:!1,kturn:0,tmx:0,tmz:0,trun:!1},this.state={started:!1,paused:!1,won:!1,frame:0,time:0,fps:0,drawCalls:0,triangles:0,nodes:0,built:0,x:0,y:0,z:0,yaw:0,progress:0,goal:ne.goal,wrong:0,junctions:0,wrongTurns:0,cluesRead:0,station:"",segment:"",caption:"",prompt:"",seed:0,mobile:this.mobile,errors:0,deadEnds:0},this.audio=new nS,this.story=new Lx(this),this.world=new Hv(this.scene,{choose:(i,s,r,o)=>this.story.choose(i,s,r,o),textures:(i,s)=>cS(i,s),makeSheet:i=>fS(i),onBuilt:i=>this.story.onBuilt(i),onDisposed:i=>this.story.onDisposed(i)}),this.director=new zx(this),this.trains=new Xx(this),this.keyboard=qv(this.input,t,{use:i=>this.director.use(i),pause:()=>this.togglePause(),lockChange:i=>{if(i){this.hadLock=!0;return}this.hadLock&&(this.hadLock=!1,this.state.started&&!this.state.won&&this.pause())}}),this.touch=Xv(this.input,{use:i=>this.director.use(i),pause:()=>this.togglePause()}),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),250)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.started&&!this.state.won&&this.pause()}),this.last=performance.now(),this.fpsAcc=0,this.fpsN=0,this.clock0=new Date,this.reset(),this.renderer.gl.setAnimationLoop(i=>this.frame(i))}resize(){this.renderer.resize(),this.camera.aspect=this.renderer.aspect,this.camera.updateProjectionMatrix()}reset(t,e,i=0,s=0){this.state.seed=t??Math.floor(Math.random()*1e9)|0,this.story.reset(this.state.seed),this.story.progress=s,this.story.wrong=i,this.story.base=i;const r=this.story.begin(this.world,e),o=r.built&&r.built.extra&&r.built.extra.spawn;if(o){const a=Math.cos(r.yaw),l=Math.sin(r.yaw);this.player.spawn(r.pos.x+o.x*a+o.z*l,r.pos.y,r.pos.z-o.x*l+o.z*a,r.yaw+(o.yaw||0))}else this.player.spawn(r.pos.x,r.pos.y,r.pos.z+1.5,r.yaw);Object.assign(this.state,{won:!1,time:0,progress:s,wrong:i,junctions:0,wrongTurns:0,cluesRead:0,station:r.env.station}),this.director.reset(),this.trains&&this.trains.reset()}start(){if(this.state.started&&!this.state.won){this.resume();return}this.state.won&&(this.reset(),this.audio.fadeIn()),this.state.started=!0,this.state.paused=!1,this.clock0=new Date,this.audio.start(),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock(),this.director.begin()}pause(){!this.state.started||this.state.paused||this.state.won||(this.state.paused=!0,this.audio.setPaused(!0),this.ui.showPause())}resume(){this.state.paused&&(this.state.paused=!1,this.audio.setPaused(!1),this.ui.showPlaying(this.mobile),this.mobile||this.keyboard.requestLock())}togglePause(){this.state.paused?this.resume():this.pause()}frame(t){const e=this.state,i=Qe((t-this.last)/1e3,0,.05);this.last=t,e.frame++,this.fpsAcc+=i,this.fpsN++,this.fpsAcc>.5&&(e.fps=Math.round(this.fpsN/this.fpsAcc),this.fpsAcc=0,this.fpsN=0);const s=e.started&&!e.paused&&!e.won;try{s?this.step(i):this.idle(i)}catch(r){e.errors++,e.errors<5&&console.error(r)}this.renderer.render(this.scene,this.camera,t/1e3),e.drawCalls=this.renderer.drawCalls,e.triangles=this.renderer.triangles}step(t){const e=this.state,i=this.input,s=this.player;e.time+=t,i.mx=Qe(i.kmx+i.tmx,-1,1),i.mz=Qe(i.kmz+i.tmz,-1,1),i.run=i.krun||i.trun,i.lookX+=i.kturn*1.9*t;const r=s.update(t,i,this.world);this.world.pump(),this.trains.update(t),this.director.update(t,r),this.animate(t),e.x=+s.pos.x.toFixed(2),e.y=+s.pos.y.toFixed(2),e.z=+s.pos.z.toFixed(2),e.yaw=+s.yaw.toFixed(3),e.nodes=this.world.nodes.size,e.deadEnds=this.world.stats.deadEnds,e.segment=this.world.current?this.world.current.def.type:""}idle(t){const e=this.player;e.t+=t,this.camera.position.set(e.pos.x,e.pos.y+ne.eye,e.pos.z),this.camera.rotation.set(e.pitch+Ie(e.t*.3,5)*.03,e.yaw+Ie(e.t*.21,6)*.08,Ie(e.t*.25,7)*.015),this.world.pump(),this.animate(t),this.director.drawOverlay(!1)}animate(t){const e=performance.now()/1e3,i=this.state.wrong;let s=0;for(const r of this.world.nodes.values()){if(!r.built)continue;s++;const o=Ie(e*1.3+r.phase,3),a=Ie(e*23+r.phase*7,4);r.flick.value=o>.15-i*.04?a>-.2?1:.15:a>.55?.9:.04}this.state.built=s,Ar.uPower.value=this.director.power(e,t),uS(this,e)}}const El=n=>({wrong:n.wrong||0,station:n.station||"Camden Town",gseed:n.seed||1,idx:n.idx||0}),dS={diagram(n,t,e,i){const s=ro(i.station||"Camden Town",i.dir||"south");i.corrupt&&aa(s,i.corrupt,new ge(i.seed||1)),Qc(n,t,e,s,{station:i.station,dir:i.dir||"south"})},roundel(n,t,e,i){no(n,t,e,i.name||"Camden Town",i)},strip(n,t,e,i){kd(n,t,e,{current:i.station||"Mornington Crescent",ghosts:i.ghosts?Kc:[]})},psign(n,t,e,i){Od(n,t,e,i)},whiteboard(n,t,e,i){const s=new ge(i.seed||1);_d(n,t,e,i.junction?md(s,El(i),i.junction):Yc(s,El(i),i),s)},info(n,t,e,i){Hd(n,t,e,Wr,i.station||"Mornington Crescent",new ge(i.seed||1))},paper(n,t,e,i){const s=new ge(i.seed||1);Vd(n,t,e,nf(s,El(i),i),s)}};function pS(n,t,e,i={}){const s=gn(t,e);return dS[n](s.getContext("2d"),t,e,i),s.toDataURL("image/png")}const bh={shelter:{plan:["platform","corridor","shelter","corridor","junction"],advance:2,at:[0,3.2]},ghost:{plan:["platform","corridor","ghost","corridor","junction"],advance:2,at:[0,2.2],wrong:1.4},hall:{plan:["platform","corridor","exit"],advance:2,at:[0,5.2,0,1.92],progress:4,wrong:2,after(n,t,e){e.z!==void 0&&n.at(e.x??0,e.z,e.yaw??0,1.92)}},spiral:{plan:["platform","corridor","spiral","exit"],advance:2,at:[0,.8],progress:4,wrong:2,after(n,t,e){if(e.landing===void 0)return;const i=t.world.current,s=e.landing===0?0:e.landing*18,r=(Ce(s)+Ce(s+1))/2-(e.back??.12);n.at(i.p.dir*2*Math.sin(r),et.ZC-2*Math.cos(r),0,an(s));const o=r+(e.turn??.75);n.face(Math.atan2(-i.p.dir*Math.cos(o),-Math.sin(o))+i.yaw,e.pitch??.1)}},train:{plan:["platform","corridor","trainstop","corridor","junction"],advance:2,at:[0,1.5],after(n,t,e){if(e.car===void 0)return;const i=t.world.current;n.at(i.p.side*3.045,2.1+e.car*18.02+(e.z??9),e.yaw||0)}}};function mS(n,t){const e=t.player,i=t.world,s=(r,o,a,l,c=0)=>{const[f,h,u]=Ni(r,o,c,a);return i.current=r,i.refresh(!0),e.spawn(f,h,u,r.yaw+(l||0)),e.loc=null,n.debug.info()};n.debug={input(r=0,o=0,a=!1){t.input.kmx=r,t.input.kmz=o,t.input.krun=!!a},look(r=0,o=0){e.yaw+=r,e.pitch+=o},face(r,o=0){e.yaw=r,e.pitch=o},tp(r,o,a){e.pos.x=r,e.pos.y=o,e.pos.z=a,e.eyeY=o+1.62},advance(r=1,o=0){let a=i.current;for(let l=0;l<r;l++){const c=a.exits[Math.min(o,a.exits.length-1)];if(!c||(c.child||i.expand(a,a.exits.indexOf(c)),!c.child))break;a=c.child}return s(a,0,.6,0)},seek(r,o=60,a=0){let l=i.current;for(let c=0;c<o;c++){const f=l.exits[Math.min(a,l.exits.length-1)];if(!f||(f.child||i.expand(l,l.exits.indexOf(f)),!f.child))return null;if(l=f.child,i.current=l,i.refresh(!0),l.def.type===r)return s(l,0,.6,0)}return null},find(r,o=1.6,a={}){let l=i.current,c=a.skip||0;for(let f=0;f<=(a.max||40);f++){i.current=l,i.refresh(!0);const h=l.built?l.built.items.filter(p=>(p.label||"").includes(r)&&(!a.test||a.test(p))):[];if(h.length>c){const p=h[c],g=p.n||[-Math.sign(p.x),0],_=p.x+g[0]*o,d=p.z+g[1]*o,[m,,S]=Ni(l,_,0,d),v=a.ly===void 0?ea(l,m,S,l.pos.y+p.y-1.3):null;s(l,_,d,0,v?v.y-l.pos.y:a.ly||0);const[M,A,b]=Ni(l,p.x,p.y,p.z),T=M-e.pos.x,E=b-e.pos.z;return e.yaw=Math.atan2(-T,-E),e.pitch=Math.atan2(A-e.eyeY,Math.hypot(T,E)),{type:l.def.type,station:l.env.station,text:p.text,board:p.board,paper:p.paper,correct:l.p.correct}}c-=h.length;const u=l.exits[0];if(!u||(u.child||i.expand(l,0),!u.child))return null;l=u.child}return null},at(r,o,a=0,l=0){return s(i.current,r,o,a,l)},cam(){return t.camera},gates(r){const o=i.current;return r&&ua(o,r),{state:o.gateState||"wait",busy:o.gateBusy,touches:o.gateTouches||0,time:t.state.time,zones:o.built&&o.built.extra?o.built.extra.zones.map(a=>!!a.done):[]}},dirOf(){const r=i.current;return r.p.dir??r.p.side??1},leaks(r=i.current){const o=t.camera,a=o.far,l=n.debug.scanVoid();o.far=600,o.updateProjectionMatrix();const c=(h,u)=>Ys(r,h,u).map(p=>+p.toFixed(2)),f=l.list.map(h=>{o.position.set(h.cam[0],h.cam[1],h.cam[2]),o.rotation.set(h.cam[3],h.cam[4],h.cam[5]),o.updateMatrixWorld(!0);const u=n.debug.voidPixels({y:0}).hits[0],p=u?n.debug.pick(u[3],u[4]):[];return{from:h.type,at:c(h.cam[0],h.cam[2]).concat(+(h.cam[1]-r.pos.y).toFixed(2)),rot:[+h.cam[3].toFixed(2),+h.cam[4].toFixed(2)],n:h.n,px:u?[u[3],u[4]]:null,under:p.slice(0,2).map(g=>`${g.layer}:${g.node}@${g.local.map(_=>_.toFixed(2)).join(",")} d${g.d.toFixed(1)}`)}});return o.far=a,o.updateProjectionMatrix(),{total:l.total,byType:l.byType,leaks:f}},showVoid(r=!0){t.renderer.gl.setClearColor(r?16711935:0,1)},local(){const r=i.current,[o,a]=Ys(r,e.pos.x,e.pos.z);return{x:o,y:e.pos.y-r.pos.y,z:a,type:r.def.type}},folds(){return[...i.nodes.values()].filter(r=>r.hiddenByFold).length},boxes(){return[...i.nodes.values()].map(r=>({id:r.id,type:r.def.type,dist:r.dist,built:!!r.built,hidden:!!r.hiddenByFold,box:r.box.map(o=>+o.toFixed(1))}))},items(){const r=i.current;return r.built?r.built.items.map(o=>({label:o.label,x:o.x,y:o.y,z:o.z})):[]},info(){const r=i.current;return{type:r.def.type,id:r.id,yaw:+r.yaw.toFixed(2),pos:[r.pos.x,r.pos.y,r.pos.z].map(o=>+o.toFixed(1)),exits:r.exits.length,nodes:i.nodes.size,station:r.env.station,idx:r.env.idx,plan:r.env.stretch?r.env.stretch.plan.join(","):"",items:r.built?r.built.items.map(o=>o.label||o.title||"?"):[]}},voidPixels(r=!1){const o=t.renderer,a=o.gl,l=a.getClearColor(new re);a.setClearColor(16711935,1),a.setRenderTarget(o.target),a.render(t.scene,t.camera);const c=new Uint8Array(o.iw*o.ih*4);a.readRenderTargetPixels(o.target,0,0,o.iw,o.ih,c),a.setRenderTarget(null),a.setClearColor(l,1);let f=0;const h=[];for(let u=0;u<c.length;u+=4)if(c[u]>180&&c[u+1]<90&&c[u+2]>180&&(f++,r&&h.length<400)){const p=u/4%o.iw,g=Math.floor(u/4/o.iw),_=new Q((p+.5)/o.iw*2-1,(g+.5)/o.ih*2-1,.5).unproject(t.camera),d=t.camera.position,m=r.y!==void 0?(r.y-d.y)/(_.y-d.y):((r.z??0)-d.z)/(_.z-d.z);h.push([d.x+(_.x-d.x)*m,d.y+(_.y-d.y)*m,d.z+(_.z-d.z)*m].map(S=>+S.toFixed(3)).concat([p,g,c[u],c[u+1],c[u+2]]))}return r?{n:f,hits:h}:f},pick(r,o,a=!1,l=3){const c=t.renderer,f=new Tv;f.setFromCamera(new ae((r+.5)/c.iw*2-1,(o+.5)/c.ih*2-1),t.camera);const h=[];a&&t.scene.traverse(p=>{p.material&&p.material.side!==Tn&&(h.push([p.material,p.material.side]),p.material.side=Tn)});const u=f.intersectObjects(t.scene.children,!0).slice(0,l);for(const[p,g]of h)p.side=g;return u.map(p=>{const g=[...i.nodes.values()].find(S=>S.built&&S.built.group===p.object.parent),[_,d]=g?Ys(g,p.point.x,p.point.z):[p.point.x,p.point.z],m={x:_,y:p.point.y-(g?g.pos.y:0),z:d};return{layer:p.object.name,node:g?g.def.type:"?",d:+p.distance.toFixed(3),local:[m.x,m.y,m.z].map(S=>+S.toFixed(3)),uv:p.uv?[+p.uv.x.toFixed(4),+p.uv.y.toFixed(4)]:null,face:p.faceIndex}})},buildAll(r=12){const o=[ne.ahead,ne.sight];return ne.ahead=r,ne.sight=1e6,i.refresh(!0),[ne.ahead,ne.sight]=o,[...i.nodes.values()].filter(a=>a.built).map(a=>a.def.type)},scanVoid(r=8,o=[-.5,0,.45]){const a=t.camera,l=a.far;a.far=600,a.updateProjectionMatrix();const c={views:0,total:0,worst:null,byType:{},list:[]};for(const f of i.nodes.values()){if(!f.built)continue;const h=f.built.cells,u=Math.max(1,Math.ceil(h.length/48));for(let p=0;p<h.length;p++){if(u>1&&p>=12&&p<h.length-12&&p%u)continue;const g=h[p];for(const _ of[.25,.75]){const[d,m,S]=Ni(f,g.ax+(g.bx-g.ax)*_,g.ya+(g.yb-g.ya)*_,g.az+(g.bz-g.az)*_);for(let v=0;v<r;v++)for(const M of o){const A=v/r*Math.PI*2+.11;a.position.set(d+.0137,m+1.6071,S-.0093),a.rotation.set(M+.013,A,.007),a.updateMatrixWorld(!0);const b=n.debug.voidPixels();c.views++,c.total+=b,b&&(c.byType[f.def.type]=(c.byType[f.def.type]||0)+b),b&&(!c.worst||b>c.worst.n)&&(c.worst={n:b,type:f.def.type,id:f.id,cam:[a.position.x,a.position.y,a.position.z,a.rotation.x,a.rotation.y,a.rotation.z]}),b&&c.list.length<300&&c.list.push({n:b,type:f.def.type,cam:[a.position.x,a.position.y,a.position.z,a.rotation.x,a.rotation.y,a.rotation.z]})}}}}return a.far=l,a.updateProjectionMatrix(),c},preview:pS,overflow(){return[...i.nodes.values()].filter(r=>r.built&&r.built.sheetOverflow).map(r=>({type:r.def.type,n:r.built.sheetOverflow,labels:r.built.items.map(o=>o.label).join(",")}))},census(){return[...i.nodes.values()].filter(r=>r.built).map(r=>({key:`${t.state.seed}:${r.id}`,type:r.def.type,boards:r.built.items.filter(o=>o.board).map(o=>o.board),papers:r.built.items.filter(o=>o.paper).map(o=>o.paper)}))},builtCount(){return[...i.nodes.values()].filter(r=>r.built).length},train(r=2){return t.trains.soon(r),t.trains.schedule()},fuzz(r=6,o=12,a=1){const l={takes:0,planned:-i.stats.planned,forced:0,folds:0,overflow:0,mismatch:0,exits:0};i.stats.deadEnds=0,i.stats.forced.length=0;for(let c=a;c<a+r;c++){t.reset(c);let f=c*7919,h=0;for(let u=0;u<o;u++){f=f*1103515245+12345&2147483647;const p=c%5===0?!1:(f>>8)%3!==0,g=n.debug.take(p);if(!g){l.exits++;break}l.takes++,h=p?h+1:Math.max(0,h-2),(i.current.env.stretch.index!==h||g.progress!==Math.min(h,ne.goal))&&l.mismatch++,n.debug.buildAll(5),l.folds=Math.max(l.folds,n.debug.folds());for(const d of i.nodes.values())d.built&&d.built.sheetOverflow&&l.overflow++}}return l.planned+=i.stats.planned,l.forced=i.stats.deadEnds,l.clashes=i.stats.forced.slice(0,3),l.errors=t.state.errors,t.reset(a),l},scene(r,o={}){const a=bh[r];if(!a)return Object.keys(bh);n.debug.force(null),n.debug.branch(null),t.reset(o.seed??a.seed??7,a.plan,o.wrong??a.wrong??0,a.progress??1),t.director.reset(),a.advance&&n.debug.advance(a.advance);const l=a.at||[0,1.2,0];return n.debug.at(l[0],l[1],l[2]||0,l[3]||0),a.after&&a.after(n.debug,t,o),n.debug.info()},plan(r,o=7,a=0,l=0){return t.reset(o,r,a,l),n.debug.info()},take(r=!0){if(i.current.def.type!=="junction"&&!n.debug.seek("junction",80))return null;const o=i.current,a=r?o.p.correct:1-o.p.correct,l=o.p.kind;o.exits[a].child||i.expand(o,a);const c=o.exits[a].child;i.current=c,i.refresh(!0);const[f,h,u]=Ni(c,0,0,4.2);return e.spawn(f,h,u,c.yaw),t.director.commit(c),{kind:l,exit:a,progress:t.story.progress,wrong:t.story.wrong,plan:c.env.stretch.plan.join(",")}},force(r,o){t.story.forceKind=r||null,t.story.forceLevel=o},branch(r){t.story.testBranch=r||null},setProgress(r){t.story.progress=r,t.state.progress=r},setWrong(r){t.story.wrong=r,t.state.wrong=r},say(r,o="rise"){t.director.announcer.say({text:r,chime:o})},glitch(r=1){t.director.events.glitch(r)},use(){return t.director.scan(),t.director.use(!0),t.director.reading?t.director.reading.text:""},hush(){const r=t.director;r.hint="",r.hintT=0,r.hints.length=0,r.announcer.hush()},freeze(r=!0){t.frozen=r},story:()=>({progress:t.story.progress,wrong:t.story.wrong,log:t.story.log})}}const ci=Pv(),ui={ready:!1,state:{started:!1,ready:!1},start(){e0=!0}};let e0=!1;window.__game=ui;async function gS(){ci.setLoading(!0),await Av(),ci.drawMarks();let n;try{n=new hS(document.getElementById("view"),ci)}catch(t){console.error(t);const e=document.getElementById("btn-start");e.textContent="WebGL is not available";return}ui.game=n,ui.state=n.state,ui.start=()=>n.start(),ui.pause=()=>n.pause(),ui.resume=()=>n.resume(),ui.reset=t=>n.reset(t),mS(ui,n),n.state.ready=!0,ui.ready=!0,ci.onStart(()=>n.start()),ci.onResume(()=>n.resume()),ci.onAgain(()=>n.start()),ci.onVoice(t=>n.audio.setVoiceEnabled(t)),ci.onHQ(t=>{n.renderer.setHQ(t),n.resize()}),ci.setLoading(!1),e0&&n.start()}gS();
