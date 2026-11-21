// The lift's fittings that carry words or light up (second half of
// tex/lift.js): the steel header in the car and the hood over a landing
// door with their dark LED windows; the three LED messages, worded as
// photographed at Borough ("LIFT TRAVELLING DOWN" on the landing, "STAND
// CLEAR DOORS CLOSING" in the car); the "LIFT 1" plate; the column of
// position lamps; EXIT; AUTOMATIC SERVICE (Russell Square); NEXT LIFT; and
// the small notice "Please pass right inside the lift".

// Dot-matrix text on black: solid glyphs, then a dark grid to cut them into dots.
function led(c, reg, text, colour, t) {
  const [x, y, w, h] = reg;
  c.save();
  c.beginPath(); c.rect(x, y, w, h); c.clip();
  c.fillStyle = '#050607'; c.fillRect(x, y, w, h);
  c.fillStyle = colour; c.textAlign = 'center'; c.textBaseline = 'middle';
  t.fitText(c, text, w - 10, h * 1.05, t.OSD_FONT);
  c.shadowColor = colour; c.shadowBlur = 3;
  c.fillText(text, x + w / 2, y + h * 0.52);
  c.shadowBlur = 0;
  c.fillStyle = 'rgba(0,0,0,0.5)';
  for (let px = x; px < x + w; px += 2) c.fillRect(px, y, 0.8, h);
  for (let py = y; py < y + h; py += 2) c.fillRect(x, py, w, 0.8);
  c.restore();
}

function arrow(c, cx, cy, s, up, colour) {
  c.fillStyle = colour;
  c.beginPath();
  const d = up ? -1 : 1;
  c.moveTo(cx, cy + d * s); c.lineTo(cx - s * 0.8, cy - d * s * 0.1); c.lineTo(cx - s * 0.28, cy - d * s * 0.1);
  c.lineTo(cx - s * 0.28, cy - d * s); c.lineTo(cx + s * 0.28, cy - d * s); c.lineTo(cx + s * 0.28, cy - d * s * 0.1); c.lineTo(cx + s * 0.8, cy - d * s * 0.1);
  c.fill();
}

// The sign hanging over the way to the lift (drawn on the segment's sign
// sheet). wayout: Russell Square's lower landing — "Way out" yellow on
// black beside "↑ Lifts to street", blue on white. Otherwise the ticket
// hall kind (Goodge Street): "Northern line" and "↑ Lifts".
export function drawLiftsSign(c, w, h, wayout) {
  const font = "'Hammersmith One', 'Gill Sans', 'Trebuchet MS', sans-serif";
  c.fillStyle = '#f6f4ea'; c.fillRect(0, 0, w, h);
  c.fillStyle = '#16205e'; c.fillRect(0, 0, w, h * 0.09);
  c.strokeStyle = '#2b2d2f'; c.lineWidth = 2; c.strokeRect(1, 1, w - 2, h - 2);
  c.textBaseline = 'middle'; c.textAlign = 'left';
  const split = wayout ? w * 0.38 : w * 0.56, text = wayout ? 'Lifts to street' : 'Lifts';
  if (wayout) {
    c.fillStyle = '#141414'; c.fillRect(h * 0.14, h * 0.2, split - h * 0.28, h * 0.66);
    c.fillStyle = '#ffd329'; c.font = `400 ${h * 0.4}px ${font}`; c.fillText('Way out', h * 0.3, h * 0.55, split - h * 0.6);
  } else {
    c.fillStyle = '#16205e'; c.font = `400 ${h * 0.42}px ${font}`; c.fillText('Northern line', h * 0.3, h * 0.56, split - h * 0.5);
  }
  // the arrow: straight on
  const ax = split + h * 0.32, ay = h * 0.55, s = h * 0.24;
  c.strokeStyle = '#16205e'; c.lineWidth = h * 0.07; c.lineCap = 'butt';
  c.beginPath(); c.moveTo(ax, ay + s); c.lineTo(ax, ay - s); c.moveTo(ax - s * 0.8, ay - s * 0.2); c.lineTo(ax, ay - s); c.lineTo(ax + s * 0.8, ay - s * 0.2); c.stroke();
  c.fillStyle = '#16205e'; c.font = `400 ${h * 0.4}px ${font}`; c.fillText(text, ax + h * 0.34, h * 0.56, w - ax - h * 0.5);
}

export function paintLiftSigns(c, REG, t) {
  const { steel, r } = t;
  let [x, y, w, h] = REG.head;                       // car header: 2.3 m x 0.2 m, the LED window over the doors
  steel(c, x, y, w, h, r, -8);
  c.fillStyle = '#060708'; c.fillRect(x + w * 0.2, y + h * 0.22, w * 0.6, h * 0.56);
  c.fillStyle = 'rgba(0,0,0,0.4)'; c.fillRect(x, y + h - 2, w, 2);
  [x, y, w, h] = REG.hood;                           // landing hood: 1.7 m x 0.21 m
  steel(c, x, y, w, h, r, 0);
  c.fillStyle = '#2a2d30'; c.fillRect(x + w * 0.04, y + h * 0.14, w * 0.92, h * 0.5);
  c.fillStyle = '#060708'; c.fillRect(x + w * 0.06, y + h * 0.2, w * 0.8, h * 0.38);
  c.fillStyle = '#17191b';                           // the speaker grille beside the strip
  for (let i = 0; i < 5; i++) for (let j = 0; j < 4; j++) { c.beginPath(); c.arc(x + w * 0.885 + i * 5, y + h * 0.25 + j * 5, 1.3, 0, 7); c.fill(); }
  c.fillStyle = '#15171a'; c.textAlign = 'center'; c.textBaseline = 'middle';      // the lift's number under it
  c.font = `700 ${h * 0.28}px ${t.BODY_FONT}`; c.fillText('1', x + w / 2, y + h * 0.83);
  led(c, REG.ledClose, 'STAND CLEAR DOORS CLOSING', '#bfe0ff', t);
  led(c, REG.ledUp, 'LIFT TRAVELLING UP', '#35e06a', t);
  led(c, REG.ledDown, 'LIFT TRAVELLING DOWN', '#35e06a', t);
  // "LIFT 1": black on a steel plate (Borough)
  [x, y, w, h] = REG.plate;
  steel(c, x, y, w, h, r, 12);
  c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 1; c.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  c.fillStyle = '#121315'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = `400 ${h * 0.3}px ${t.HEAD_FONT}`; c.fillText('LIFT', x + w / 2, y + h * 0.28, w * 0.86);
  c.font = `400 ${h * 0.5}px ${t.HEAD_FONT}`; c.fillText('1', x + w / 2, y + h * 0.7);
  // the column of seven position lamps, unlit
  [x, y, w, h] = REG.lamps;
  steel(c, x, y, w, h, r, 6);
  for (let k = 0; k < 7; k++) { c.fillStyle = '#1b1213'; c.fillRect(x + w * 0.33, y + h * (0.07 + k * 0.127), w * 0.34, h * 0.085); }
  // one lamp lit; and the arrow that shows at the end of the column
  [x, y, w, h] = REG.lampOn;
  c.fillStyle = '#2a0806'; c.fillRect(x, y, w, h);
  const g = c.createRadialGradient(x + w / 2, y + h / 2, 1, x + w / 2, y + h / 2, w * 0.6);
  g.addColorStop(0, '#fff0d8'); g.addColorStop(0.35, '#ff5a2e'); g.addColorStop(1, '#a01208');
  c.fillStyle = g; c.fillRect(x + 1, y + 1, w - 2, h - 2);
  for (const [name, up] of [['arrowUp', true], ['arrowDn', false]]) {
    [x, y, w, h] = REG[name];
    c.fillStyle = '#140504'; c.fillRect(x, y, w, h);
    arrow(c, x + w / 2, y + h / 2, w * 0.36, up, '#ff4a26');
  }
  // EXIT, lit, by the doors you leave by
  [x, y, w, h] = REG.exit;
  c.fillStyle = '#0a0a0b'; c.fillRect(x, y, w, h);
  c.fillStyle = '#ff7a3c'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `700 ${h * 0.62}px ${t.BODY_FONT}`;
  c.shadowColor = '#ff5a20'; c.shadowBlur = 3; c.fillText('EXIT', x + w / 2, y + h * 0.54); c.shadowBlur = 0;
  // AUTOMATIC SERVICE: white on black, in a steel surround
  [x, y, w, h] = REG.auto;
  steel(c, x, y, w, h, r, -2);
  c.fillStyle = '#0b0b0c'; c.fillRect(x + w * 0.08, y + h * 0.1, w * 0.84, h * 0.8);
  c.fillStyle = '#f2f1ea'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.font = `700 ${h * 0.24}px ${t.BODY_FONT}`;
  c.fillText('AUTOMATIC', x + w / 2, y + h * 0.36, w * 0.76); c.fillText('SERVICE', x + w / 2, y + h * 0.66, w * 0.76);
  // NEXT LIFT, with the arrow that lights when the lift is ready to leave
  for (const [name, on] of [['next', false], ['nextOn', true]]) {
    [x, y, w, h] = REG[name];
    steel(c, x, y, w, h, r, -6);
    c.fillStyle = '#0b0b0c'; c.fillRect(x + 4, y + 4, w - 8, h - 8);
    c.fillStyle = on ? '#fff3e0' : '#b9b6ad'; c.textAlign = 'left'; c.textBaseline = 'middle';
    c.font = `700 ${h * 0.44}px ${t.BODY_FONT}`; c.fillText('NEXT LIFT', x + 10, y + h * 0.53, w * 0.62);
    c.fillStyle = on ? '#ff8a2a' : '#3a2a20';
    if (on) { c.shadowColor = '#ff6a10'; c.shadowBlur = 4; }
    c.beginPath(); c.moveTo(x + w - 9, y + h / 2); c.lineTo(x + w - 22, y + h * 0.26); c.lineTo(x + w - 22, y + h * 0.74); c.fill();
    c.shadowBlur = 0;
  }
  // "Please pass right inside the lift": a small card, blue lettering
  [x, y, w, h] = REG.notice;
  c.fillStyle = '#efece0'; c.fillRect(x, y, w, h);
  c.strokeStyle = 'rgba(0,0,0,0.3)'; c.lineWidth = 1; c.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  c.fillStyle = '#16205e'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.font = `400 ${h * 0.19}px ${t.BODY_FONT}`;
  ['Please', 'pass right', 'inside the', 'lift'].forEach((s, i) => c.fillText(s, x + w * 0.1, y + h * (0.2 + i * 0.2), w * 0.8));
  for (const [sx, sy] of [[0.06, 0.08], [0.94, 0.08], [0.06, 0.92], [0.94, 0.92]]) { c.fillStyle = '#8a8d8f'; c.beginPath(); c.arc(x + w * sx, y + h * sy, 1.3, 0, 7); c.fill(); }
}
