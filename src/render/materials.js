// One cheap shader for the whole world: texture x baked vertex light, a
// per-segment flicker term, a faint camera light and exponential fog.
// No real-time lights at all, so it stays fast on phones.
import * as THREE from 'three';
import { CFG } from '../config.js';

const VERT = /* glsl */ `
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
}`;

// highp matters: on phone GPUs mediump is a 16-bit float, far too coarse for
// texture coordinates that run to 5 or more along a tunnel (the tile joints
// would jump about by several texels and flicker).
const FRAG = /* glsl */ `
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
}`;

// Uniforms shared by every world material (same object => one update per frame).
export const worldUniforms = {
  uPower: { value: 1 },
  uCam: { value: 0.22 },
  uFogColor: { value: new THREE.Color().setRGB(...CFG.fogColor) },
  uFogDensity: { value: CFG.fogDensity },
};

// Each segment gets its own material instances so it can flicker on its own;
// three.js shares the compiled program between them.
// cutout = true only for layers whose texture really has holes (lattice
// gates, sign sheets…). Opaque layers never discard, so they cannot open up
// when a distant surface samples a blurred mip level of an atlas.
// clip: a { value: Vector4 } uniform — the mesh is only drawn between two
// parallel vertical planes (the train, which exists only between the two
// tunnel mouths of a platform).
export function makeWorldMaterial(texture, flick, cutout = false, clip = null) {
  const defines = {};
  if (cutout) defines.CUTOUT = 1;
  if (clip) defines.CLIP = 1;
  return new THREE.ShaderMaterial({
    defines,
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      map: { value: texture },
      uFlick: flick || { value: 1 },
      uPower: worldUniforms.uPower,
      uCam: worldUniforms.uCam,
      uFogColor: worldUniforms.uFogColor,
      uFogDensity: worldUniforms.uFogDensity,
      ...(clip ? { uClip: clip } : {}),
    },
    side: THREE.FrontSide,
  });
}
