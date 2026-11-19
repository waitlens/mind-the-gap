// The train that is not going anywhere: one three-car unit of 1995 Stock
// (uncoupling motor car, trailer, driving motor car — half a real train)
// standing at a platform with its saloon lights on and nobody aboard.
// Selective door operation: the two end cars have their doors open, the
// trailer between them does not, and the platform alongside the trailer is
// boarded off — so the way along the platform is through the train: in at
// one car, through the doors between the cars, out at the other.
import { PF } from './platform_shell.js';
import { CAR, buildCarShell } from './railcar.js';
import { fitCar, carCollision } from './railcar_fit.js';
import { carRect, carFlat } from '../tex/car.js';
import { drawPlate } from '../tex/signs.js';
import { TRAIN_PA, TRAIN_PA_ODD } from '../game/scripts.js';

export const TRAINSTOP = { L: 58, z0: 2.1, floor: 0.03, offset: 0.08 };
const MIND_THE_GAP = 'Please mind the gap between the train and the platform.';
const NOTICE = ['Platform closed', 'Please pass along inside the train'];

// ctx: the platform's build context; side: which side the track is on;
// art: { strip, ads } sign-sheet pieces to hang inside the cars.
// Returns { cells, walls, items, zones, gaps } — gaps: stretches of the
// platform edge [z0, z1] that are open doorways.
export function fitTrainstop(ctx, L, side, art) {
  const { b, sheet } = ctx;
  const X = (x) => side * x;
  const xc = X(PF.track - TRAINSTOP.offset), ps = -side, edge = PF.track - TRAINSTOP.offset - PF.edge;
  const fy = TRAINSTOP.floor, pitch = CAR.len + CAR.gap;
  const cars = [
    { type: 'undm', open: true, endOpen: [false, true] },
    { type: 't', open: false, endOpen: [true, true] },
    { type: 'dm', open: true, endOpen: [true, false] },
  ].map((c, i) => ({ ...c, xc, ps, fy, edge, z0: TRAINSTOP.z0 + i * pitch }));
  const cells = [], walls = [], items = [], zones = [], gaps = [];
  for (const car of cars) {
    buildCarShell(b, car);
    fitCar(b, car, art);
    const col = carCollision(car);
    cells.push(...col.cells); walls.push(...col.walls);
    for (const [z, w] of col.doors) {
      gaps.push([z - w / 2, z + w / 2]);
      if (w > 1) b.addLight(X(PF.edge - 0.5), 1.3, z, 0.55, 5.5, false, [1, 0.98, 0.9]);       // light spilling out of the doorway
    }
  }
  // between the cars: a step across the couplings, the tunnel wall on one
  // side and the platform on the other
  for (let i = 0; i < cars.length - 1; i++) {
    const za = cars[i].z0 + CAR.len, zb = cars[i + 1].z0;
    cells.push({ ax: xc, az: za - 0.25, bx: xc, bz: zb + 0.25, hw: 0.45, ya: fy, yb: fy, surface: 'metal' });
    for (const sx of [-1, 1]) walls.push([xc + sx * 0.47, za, xc + sx * 0.47, zb]);
    b.quad('car', [xc - 0.42, fy - 0.01, za - 0.02], [xc + 0.42, fy - 0.01, za - 0.02], [xc + 0.42, fy - 0.01, zb + 0.02], [xc - 0.42, fy - 0.01, zb + 0.02], [0, 1, 0], carFlat('steel'), { emit: 0.5 });
  }
  // --- the hoardings across the platform, either end of the shut car
  const noticeUV = sheet.add(250, 70, (c, w, h) => drawPlate(c, w, h, NOTICE[0], { sub: NOTICE[1], bg: '#f6f6f1', fg: '#16213f' }));
  const board = carRect('hoarding'), xa = PF.back - 0.12, xb = PF.edge, H = 2.45;
  for (const [z, nz] of [[cars[1].z0 + 0.3, -1], [cars[1].z0 + CAR.len - 0.3, 1]]) {
    for (const f of [nz, -nz]) {
      const zz = z + f * 0.03;
      for (let x = xa; x < xb - 1e-6; x += 0.61) {
        const x1 = Math.min(xb, x + 0.61);
        b.quad('car', [X(x), 0, zz], [X(x1), 0, zz], [X(x1), H, zz], [X(x), H, zz], [0, 0, f], board, { emit: 0.42 });
      }
    }
    b.quad('car', [X(xa), H, z - 0.03], [X(xb), H, z - 0.03], [X(xb), H, z + 0.03], [X(xa), H, z + 0.03], [0, 1, 0], carFlat('black'), { emit: 0.2 });
    b.quad('car', [X(xb), 0, z - 0.03], [X(xb), 0, z + 0.03], [X(xb), H, z + 0.03], [X(xb), H, z - 0.03], [side, 0, 0], carFlat('black'), { emit: 0.2 });
    walls.push([X(xa), z, X(xb + 0.3), z]);
    // the notice, facing whoever walks up to the hoarding (reads left to right)
    const cx = -0.2, w = 1.5, h = 0.42, y0 = 1.25, zf = z + nz * 0.045;
    const l = cx - (nz * w) / 2, r = cx + (nz * w) / 2;
    b.quad('sheet', [l, y0, zf], [r, y0, zf], [r, y0 + h, zf], [l, y0 + h, zf], [0, 0, nz], noticeUV, { emit: 0.9 });
    items.push({ x: cx, y: y0 + h / 2, z: zf, r: 7, n: [0, nz], label: 'read notice', title: 'NOTICE', text: `${NOTICE[0]}. ${NOTICE[1]}. We apologise for any inconvenience.` });
  }
  // --- the train's own voice, once in each car
  const say = (game, ok, odd) => {
    const wrong = game.state.wrong, an = game.director.announcer;
    const strange = wrong >= 2 && an.rng.chance(Math.min(0.75, wrong * 0.2));
    an.say({ text: strange ? odd : ok, chime: 'none', tag: '(inside the train)', odd: strange, urgent: true });
  };
  const lines = [[TRAIN_PA[0], TRAIN_PA_ODD[1]], [TRAIN_PA[1], TRAIN_PA_ODD[2]], [MIND_THE_GAP, TRAIN_PA_ODD[0]]];
  cars.forEach((car, i) => {
    const inset = i === 1 ? 5 : 1.2;
    zones.push({
      x0: Math.min(xc - 1.1, xc + 1.1), x1: Math.max(xc - 1.1, xc + 1.1), z0: car.z0 + inset, z1: car.z0 + CAR.len - inset,
      fire: (game) => {
        say(game, lines[i][0], lines[i][1]);
        if (i === 0) { game.audio.sfx('doorChime'); game.director.setHint('The saloon lights are on. Nobody is aboard.', 5); game.state.boarded = (game.state.boarded || 0) + 1; }
      },
    });
  });
  // the pause at the far end of the cab car: there is no way through the cab
  items.push({ x: xc, y: fy + 1.2, z: cars[2].z0 + 15.82, r: 3.2, n: [0, -1], label: 'try cab door', title: 'CAB DOOR', text: 'Locked. Through the glass of the next door along, the platform carries on.' });
  return { cells, walls, items, zones, gaps, cars };
}
