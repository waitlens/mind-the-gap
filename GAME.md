# Mind the Gap

*A found-footage walk through an Underground station that does not end.*

You got off the last train. The train has gone, the staff have gone, and the
station keeps going: passages, stairs, escalators, platforms and cross-passages
that repeat and are never quite the same twice. Somewhere there is a real
**Way out**. The station would rather you did not find it.

Nothing chases you and nothing can hurt you. It is eerie, not gory.

## Run it

```bash
npm install
npm run dev        # development server
npm run build      # production build in dist/ (relative paths, works on a subpath)
npm run preview    # serve dist/
npm test           # headless smoke test (needs Chrome; run `npm run build` first)
```

## Controls

| | Desktop | Phone / tablet |
|---|---|---|
| Walk | `W` `A` `S` `D` (or arrow keys) | left thumb: virtual joystick (appears where you touch) |
| Look | mouse (click the picture to capture the pointer) | right thumb: drag |
| Run | hold `Shift` | **RUN** toggle, or push the stick right to its edge |
| Read / interact | `E` (also `Space`, `Enter` or left click) | **READ** button |
| Pause | `Esc` or `P` | **II** button |

Aim the small viewfinder cross at a sign, poster, notice, clock, indicator
board or help point. When `[E] read …` appears, press it: the camcorder zooms
in and a caption card shows what the thing says. Press again (or walk away) to
put it down.

Announcements are spoken (browser speech synthesis, British English voice
when one is installed) **and** subtitled on the camcorder display, so the game
is fully playable with the sound off. The title screen has switches for
spoken announcements and for a sharper (higher-resolution) picture.

Works in portrait and landscape. Headphones recommended.

## How to win

The station is a chain of passages that ends, every so often, in a
**junction**: a small tiled hall where the way splits **left** and **right**.
One branch is right. Once you walk a few metres down a branch a gate slams
shut behind you — there is no going back.

- A **right** choice brings the way out one step closer.
- A **wrong** choice costs you two steps, and the station gets stranger:
  names stop making sense, the symbol on the name boards goes off, posters
  and announcements turn odd, lights fail more often.
- Make **five** steps of progress and the next passage climbs a last flight
  of stairs into daylight. Walk up into the light to finish.

You are never told outright which branch is right. You have to read the
station. Staff notices pinned to the walls (rare — look for the small white
sheets with a blue header) explain the rules one at a time.

### The rules (spoilers)

<details>
<summary>Show the rules the staff notices teach</summary>

There are three kinds of junction:

1. **Signs.** Both branches have a "Way out" sign. The genuine one is
   **black lettering on a yellow panel, reading exactly "Way out"** (capital
   W, small o) with one plain arrow. The false one breaks that standard in
   exactly one way — wrong colours, `WAY OUT`, `Way Out`, `Way in`,
   `Way cut`, mirrored lettering, a two-headed arrow, an arrow pointing the
   other way… Early junctions are obvious; later ones are subtle. Zoom in
   with `E`: the caption card spells out exactly what the sign says.
2. **Announcement.** The signs only name two lines. As you walk in, the PA
   tells you which line leads to the way out. **A chime that rises means it
   is staff, and true. A chime that falls is not staff — do the opposite.**
   The subtitle shows `♪ chime, rising` or `♪ chime, falling`. Press the help
   point on the wall to hear it again.
3. **Clocks.** A clock hangs over each branch. **Station clocks run
   forwards. Never go under the one whose second hand ticks backwards.**

Two more things worth knowing:

- The **dot-matrix indicators** on platforms and in junctions list
  `Way out … N mins`. That number is how many right choices you still need.
  If it went up, your last choice was wrong.
- After a wrong choice the platform clocks in the next stretch run
  backwards too. That is the station telling you.

</details>

## What is in it

- Endless procedural layout from modular segments — corridor, curved bend,
  stairs, escalator shaft, platform, cross-passage, junction — planned a few
  segments ahead of you and torn down behind you.
- Everything visible is drawn at runtime on canvases: glazed tiling in seven
  colour schemes, the (fictional) station symbol, name boards and friezes,
  way out and direction signs, posters, staff notices, tactile paving, the
  `MIND THE GAP` coping, the dot-matrix boards and the clocks.
- Camcorder post-process: low-resolution render scaled up, barrel distortion,
  colour fringing, scanlines, grain, tape dropouts, head-switching noise,
  occasional tracking wobble, crushed colour, `REC ●`, tape counter and a DV
  date stamp, handheld sway and step bob.
- All sound synthesised with WebAudio: fluorescent hum and ballast buzz, a
  distant rumble, wind in the tunnels, a train that passes somewhere it
  cannot be, footsteps on tile / stone / metal, drips, the gate, the PA chime.
- No real station names and no real roundel: see `REFERENCES.md`.

## For automated testing

`window.__game` is available as soon as the page loads:

- `window.__game.start()` — start (or resume) the game without a click.
- `window.__game.state` — live plain-data state: `started`, `paused`, `won`,
  `frame`, `time`, `fps`, `drawCalls`, `triangles`, `nodes`, `built`,
  `x`/`y`/`z`/`yaw`, `progress`, `goal`, `wrong`, `junctions`, `wrongTurns`,
  `cluesRead`, `station`, `segment`, `caption`, `prompt`, `reading`, `seed`…
- `window.__game.debug` — helpers used by the tests: `input(mx, mz, run)`,
  `look(dyaw, dpitch)`, `advance(n, branch)`, `seek(type)`, `at(x, z)`,
  `take(correct)` (commit to the next junction's right or wrong branch),
  `plan([...types], seed)`, `use()`, `info()`.

`tests/smoke.mjs` serves `dist/`, opens it in headless Chrome, starts the game
and fails on any console error. `--shot=file.png` saves a screenshot,
`--mobile` emulates a phone. `--cracks` additionally checks that the geometry
is watertight: it builds closed test worlds, looks around from several
thousand camera positions with the void painted magenta, and fails if the
void shows through anywhere (pinholes at seams, missing faces).
