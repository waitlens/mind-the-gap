// Lists every line the PA can say (for pre-recording with a neural voice).
// Run: node tools/voice_lines.mjs > tools/voice_lines.txt
import { AMBIENT, AMBIENT_ODD, AMBIENT_STRANGE, SECURITY, SECURITY_ODD, WELCOME, TRAIN_PA, TRAIN_PA_ODD, SHELTER, GATES, LIFT_TEXT } from '../src/game/scripts.js';
import { nextStation, destinations, trainCall, trainCallWrong } from '../src/game/route.js';
import { WALK, SURFACE } from '../src/game/line.js';

const out = new Set();
const stations = [...WALK, SURFACE];
for (const pool of [AMBIENT, AMBIENT_ODD, AMBIENT_STRANGE]) {
  for (const t of pool) {
    for (const st of [...stations, 'this station']) {
      out.add(t.replaceAll('{station}', st).replaceAll('{next}', nextStation(st, 'north') || 'the next station'));
    }
  }
}
for (const t of [...SECURITY, ...SECURITY_ODD]) out.add(t);
out.add(WELCOME);   // once, at the start of a game
for (const t of [...TRAIN_PA, ...TRAIN_PA_ODD]) out.add(t);   // inside the standing train
out.add(SHELTER.phone);                                       // the warden's telephone in the deep shelter
out.add(GATES.voice);                                         // the gate line at the way out, the first time you touch out
for (const k of ['clear', 'closing', 'up', 'down']) out.add(LIFT_TEXT[k]);   // the lift (src/game/lifts.js)
// junction announcements (keep in step with src/game/junctions.js)
for (const plat of ['northbound platform', 'southbound platform']) for (const side of ['left', 'right']) {
  out.add(`For the way out, please follow signs for the ${plat}. To the ${side}. Please.`);
  out.add(`The way out is by the ${plat}, on the ${side}. We would not lie to you.`);
  out.add(`Customers for the way out should keep to the ${side}, for the ${plat}. Do hurry.`);
  out.add(`For the way out, please follow signs for the ${plat}, to the ${side}.`);
  out.add(`Customers for the way out should keep to the ${side} for the ${plat}.`);
  out.add(`The way out is by way of the ${plat}, on your ${side}.`);
}
// (the help point in a clock / sign junction; no longer said on arrival)
out.add('Customers are reminded that all station clocks run forwards.');
out.add('Please follow the yellow and black signs for the way out.');
out.add('Help point. There is nobody at the other end. Please follow the signs.');
out.add('Help point. Your call is in a queue. You are the only caller.');
out.add('Help point. Staff left some time ago. Trust the yellow signs and the rising chime.');
out.add('This is the way out. Please keep walking.');
// trains (keep in step with src/game/trains.js)
out.add('Stand clear of the doors, please.');
for (const p of [1, 2]) out.add(`The train now approaching platform ${p} is not in service. Please stand well back from the platform edge.`);
for (const st of stations) for (const dir of ['north', 'south']) {
  out.add(trainCallWrong(st));
  let ds = [];
  try { ds = destinations(st, dir); } catch { ds = []; }
  for (const [dest, via] of ds) {
    out.add(trainCall(st, dir, dest, via));
  }
}
for (const l of out) console.log(l);
