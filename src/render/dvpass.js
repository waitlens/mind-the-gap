// The camcorder: a single full-screen pass that turns the low-resolution
// render into something that looks like it came off a DV / Hi8 tape.
import * as THREE from 'three';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const FRAG = /* glsl */ `
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
}`;

export function makeDVPass(sceneTex, overlayTex) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      tScene: { value: sceneTex },
      tOverlay: { value: overlayTex },
      uInRes: { value: new THREE.Vector2(640, 400) },
      uTime: { value: 0 },
      uTrack: { value: 0 },
      uNoise: { value: 0.085 },
      uFade: { value: 0 },
      uDark: { value: 0 },
      uZoom: { value: 0 },
    },
    depthTest: false,
    depthWrite: false,
  });
  // one big triangle covering the screen
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 0, 2, 0, 0, 2]), 2));
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  const scene = new THREE.Scene();
  scene.add(mesh);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  return { scene, camera, uniforms: mat.uniforms, material: mat };
}
