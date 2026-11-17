// The train: four tube-profile cars built once as a single merged mesh.
// Local frame: the front of the train is at z = 0 and the cars trail back
// along -z; x = 0 is the track centreline; y = 0 is platform level.
// The mesh is self-lit (the station's baked lighting cannot reach a moving
// object) and is clipped in the shader to the stretch of track between the
// two tunnel mouths, so it appears out of the dark and vanishes into it.
import * as THREE from 'three';
import { GeoBuilder } from './builder.js';
import { makeWorldMaterial } from '../render/materials.js';
import { trainTexture, trainRect, SIDE_Y } from '../tex/train.js';

export const TRAIN = { cars: 4, carLen: 8.5, gap: 0.32 };
TRAIN.length = TRAIN.cars * TRAIN.carLen + (TRAIN.cars - 1) * TRAIN.gap;

// Half cross-section, bottom to crown: it has to pass through the running
// tunnel mouth (see platform_end.js), with the usual few centimetres to spare.
const PROFILE = [[0.98, -0.78], [1.2, -0.3], [1.2, 0.75], [1.1, 1.15], [0.88, 1.5], [0.6, 1.76], [0.3, 1.88], [0, 1.9]];
const N_SIDE = 4;      // profile segments covered by the side livery (up to y = 1.5)

function buildCar(b, zFront, first, last) {
  const z0 = zFront - TRAIN.carLen, z1 = zFront;
  const side = trainRect('side'), roof = trainRect('roof'), dark = trainRect('dark');
  const vOf = (y) => side[1] + ((side[3] - side[1]) * (y - SIDE_Y[0])) / (SIDE_Y[1] - SIDE_Y[0]);
  const body = { emit: 0.8 }, top = { emit: 0.42 };
  for (const sx of [-1, 1]) {
    for (let j = 0; j < PROFILE.length - 1; j++) {
      const [xa, ya] = PROFILE[j], [xb, yb] = PROFILE[j + 1];
      const n = [sx * (yb - ya), -(xb - xa) * 1, 0];                 // outward
      const A = [sx * xa, ya], B = [sx * xb, yb];
      if (j < N_SIDE) {
        // livery: u runs front → back on the near side so door positions match on both
        const u0 = sx > 0 ? side[0] : side[2], u1 = sx > 0 ? side[2] : side[0];
        b.quad('train', [A[0], A[1], z1], [A[0], A[1], z0], [B[0], B[1], z0], [B[0], B[1], z1], n, [u0, vOf(ya), u1, vOf(yb)], body);
      } else b.quad('train', [A[0], A[1], z1], [A[0], A[1], z0], [B[0], B[1], z0], [B[0], B[1], z1], n, roof, top);
    }
  }
  // floor underneath (seen from the platform edge as a dark line)
  b.quad('train', [-0.98, -0.78, z0], [0.98, -0.78, z0], [0.98, -0.78, z1], [-0.98, -0.78, z1], [0, -1, 0], dark, { emit: 0.1 });
  // ends: a fan over the profile; cab faces at the two ends of the train
  for (const [z, nz, cab] of [[z1, 1, first ? 'front' : null], [z0, -1, last ? 'rear' : null]]) {
    const r = cab ? trainRect(cab) : dark;
    const uv = (x, y) => (cab
      ? [r[0] + (r[2] - r[0]) * (0.5 + (nz * x) / 2.4), r[1] + (r[3] - r[1]) * ((y + 0.78) / 2.68)]
      : [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2]);
    const o = { emit: cab ? 0.85 : 0.25 };
    for (let j = 0; j < PROFILE.length - 1; j++) {
      const [xa, ya] = PROFILE[j], [xb, yb] = PROFILE[j + 1];
      b.quadUV('train', [-xa, ya, z], [xa, ya, z], [xb, yb, z], [-xb, yb, z], [0, 0, nz], uv(-xa, ya), uv(xa, ya), uv(xb, yb), uv(-xb, yb), o);
    }
    if (cab) {             // head or tail lamps, just proud of the cab face
      const lamp = trainRect(cab === 'front' ? 'lamp' : 'tail');
      for (const lx of [-0.82, 0.82]) {
        b.quad('train', [lx - 0.09, -0.08, z + nz * 0.02], [lx + 0.09, -0.08, z + nz * 0.02], [lx + 0.09, 0.1, z + nz * 0.02], [lx - 0.09, 0.1, z + nz * 0.02], [0, 0, nz], lamp, { emit: 2 });
      }
    }
  }
}

let shared = null;

// Returns { mesh, clip } — one train for the whole game, hidden when idle.
export function getTrain() {
  if (shared) return shared;
  const b = new GeoBuilder();
  for (let i = 0; i < TRAIN.cars; i++) buildCar(b, -i * (TRAIN.carLen + TRAIN.gap), i === 0, i === TRAIN.cars - 1);
  const geo = b.bake([0, 0, 0]).train;
  const clip = { value: new THREE.Vector4(0, 1, -1e6, 1e6) };
  const mat = makeWorldMaterial(trainTexture(), null, false, clip);
  mat.side = THREE.DoubleSide;
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.visible = false;
  mesh.name = 'train';
  shared = { mesh, clip };
  return shared;
}
