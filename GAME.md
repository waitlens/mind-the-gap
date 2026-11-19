# Mind the Gap

*A found-footage walk up the Northern line, through a station that does not end.*

You got off the last train at **Mornington Crescent**. The train has gone, the
staff have gone, and the station keeps going: passages, stairs, escalators,
platforms and cross-passages that repeat and are never quite the same twice.
The way out is up the line. The station would rather you did not find it.

Nothing chases you and nothing can hurt you. It is eerie, not gory.

This is a non-commercial fan game. It uses the real line, station names and
roundel, but it is not affiliated with or endorsed by Transport for London.
Nothing is copied from photographs: every tile, sign, map and train is drawn
at runtime (see `REFERENCES.md` for the reference photos that were studied,
and `LONDON.md` for the thinking behind the look).

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

Aim the small viewfinder cross at a sign, line diagram, poster, notice,
whiteboard, newspaper, clock, indicator board or help point. When `[E] read …` appears, press it: the
camcorder zooms in and a caption card shows what the thing says — for a line
diagram, the full list of stations in order. Press again (or walk away) to put
it down.

Announcements are spoken **and** subtitled on the camcorder display, so the
game is fully playable with the sound off. The voice is a set of pre-recorded
clips (`public/voice/`, made with `tools/record_voice.py`); anything without a
clip falls back to the browser's own speech synthesis. The title screen has
switches for spoken announcements and for a sharper picture.

Works in portrait and landscape. Headphones recommended.

## The line

Everything in the station is generated from one description of the Northern
line (`src/game/line.js`): every station of every branch in order, its
interchanges and their line colours. Name boards, the name fired into the
tiles, friezes, line diagrams, direction signs, indicator boards, train
destinations and announcements all read from it, so they agree with each other
— until the station starts to go wrong.

Where to find the diagrams:

- **Track-side wall of every platform:** the tall panel, "Northern line /
  Southbound platform 2", with every station ahead of you, the interchange
  rings and colour bars, both branches, and *this station* in a blue box.
- **Platform wall:** a long strip of the whole line with a "You are here"
  marker.
- **Passages:** the diagram for one of the station's platforms.
- **Junction halls:** "Northbound platform 1 / Southbound platform 2" signs
  with the principal stations served.

## How to win

You are walking **up the Edgware branch**:

`Mornington Crescent → Camden Town → Chalk Farm → Belsize Park → Hampstead → Golders Green`

Golders Green is where the real line comes out of the tunnel into the open
air, so that is the way out.

Every so often the passages end in a **junction**: a small tiled hall where
the way splits **left** and **right**. One branch is right. A few metres down
either branch a gate slams shut behind you — there is no going back.

- A **right** choice takes you one station up the line.
- A **wrong** choice sends you two stations back down it (never further than
  Mornington Crescent), and the station gets stranger.
- After Hampstead, a last climb, a gate line, and daylight.

You can always tell where you are: the name on the roundels, the name fired
into the tiles, and the tile colour itself — each station has its own (navy at
Mornington Crescent, pale blue at Camden Town, ox-blood at Chalk Farm, brown at
Belsize Park, dusty pink at Hampstead, whose tiles still say *Heath Street*).

You are never told outright which branch is right. The rules are explained
once: you step off the last train facing a **Customer Information** board on
the Mornington Crescent platform (white panel, blue header, five numbered
rules — READ it), and the PA's only unprompted remark about them is a single
welcome announcement pointing you to it. Staff notices pinned to the walls
further on (small white sheets with a blue header) repeat the rules one at a
time.

### The rules (spoilers)

<details>
<summary>Show the rules the staff notices teach</summary>

There are three kinds of junction:

1. **Signs.** Both branches have a "Way out" sign. A genuine one is **yellow
   and black** (either way round — both exist on the real network), says
   exactly **"Way out"** (capital W, small o) in plain block lettering, and
   has one arrow. The false one breaks that in exactly one way: `Exit`,
   `Way in`, `WAY OUT`, `Way Out`, `Way cut`, white on blue, mirrored
   lettering, serifs, a two-headed arrow, an arrow pointing the other way…
   Early junctions are obvious; later ones are subtle. Zoom in with `E`: the
   caption card spells out exactly what the sign says.
2. **Announcement.** The signs point to the northbound and southbound
   platforms. As you walk in, the PA says which one leads to the way out
   (this is the only kind of junction where the PA speaks on arrival; sign
   and clock junctions are silent).
   **A chime that rises means it is staff, and true. A chime that falls is
   not staff — do the opposite.** The subtitle shows `♪ chime, rising` or
   `♪ chime, falling`. Press the help point to hear it again. (In a sign or
   clock junction the help point reminds you of that hall's rule instead.)
3. **Clocks.** A clock hangs over each branch. **Station clocks run forwards.
   Never go under the one whose second hand ticks backwards.**

Other things worth knowing:

- **Whiteboards.** The duty staff write a "Thought for the day" on the
  station whiteboards and sign it with their own name (`– Dave, CSA`). Now
  and then a board on an easel in a junction hall says which passage is the
  way out. **If a named member of staff signed it, it is true. If it is
  signed `The Station` — or by nobody, or by you — staff did not write it:
  do the opposite.** One of the ordinary boards, and one staff notice, say
  as much.
- The **dot-matrix indicators** list the next trains — and `Way out`, as if it
  were one. Its minutes are the number of right choices you still need. If
  they went up, your last choice was wrong.
- After a wrong choice the platform clocks in the next station run backwards.
- The colours beyond the gate confirm what you did: tiles you have already
  walked through mean you have gone back down the line.

</details>

### When the station goes wrong

The deeper you go, and the more wrong turns you take, the less the station
agrees with itself. Roundels are misspelt, tilted, or name stations that were
closed long ago or never opened; line diagrams gain *North End*, *South
Kentish Town* or *City Road*, lose your station, put stations out of order or
repeat the one you are standing in; indicators and announcements turn odd;
lights fail; sometimes there is someone at the far end of the platform.
The whiteboard's cheerful thought for the day turns into *"You've read this
board before"* and stops being signed by anyone you could name. The free paper left on the bench stops
reporting strikes and rain and starts reporting a passenger who never came
up after the last train; its date repeats, then goes backwards.

### Trains

Trains still come through after the last train. The indicator counts one
down, a warm wind pushes out of the tunnel, and a Northern line train comes
out of the dark, stops, keeps its doors shut, tells you where you are and what
the next station is, and leaves. It is not in service. You cannot board it.

## What is in it

- Endless procedural layout from modular segments — corridor, curved bend,
  stairs, escalator shaft, platform, cross-passage, junction — planned a few
  segments ahead of you and torn down behind you.
- Everything visible is drawn at runtime on canvases: glazed tiling in each
  station's colours with the name fired into it, the roundel, friezes with
  "Way out" plates, line diagrams and strip maps, direction signs, posters,
  staff notices, tactile paving, the `MIND THE GAP` coping, dot-matrix boards,
  clocks and the train's livery.
- **"Thought for the day" whiteboards**: an aluminium-framed board with a
  marker tray on passage walls, or on an easel at the end of a platform and
  in the corner of some junction halls (about one every four segments,
  never in the way). Station name, today's date, a handwritten
  thought in marker pen, a doodle and a signature — all drawn at runtime
  (the handwriting is Patrick Hand, an openly licensed font, set word by
  word a little off the line). 15 ordinary thoughts, 11 odd ones, 7 that
  staff did not write (`src/game/thoughts.js`).
- **An abandoned free newspaper** on a platform bench, or on the floor
  beside one (about one platform in three): *The Commute*, an
  invented morning tabloid — red masthead, blue date strap, a big headline,
  a "photograph" made of a few grey shapes under a halftone screen, and
  columns of greeked text. READ gives the headline, the standfirst and a
  paragraph. 8 ordinary front pages, 6 odd, 4 that are about you
  (`src/game/paper.js`); a few of them mention a rule of the station in
  passing.
- Camcorder post-process: low-resolution render scaled up, barrel distortion,
  colour fringing, scanlines, grain, tape dropouts, head-switching noise,
  occasional tracking wobble, crushed colour, `REC ●`, tape counter and a DV
  date stamp, handheld sway and step bob.
- Sound synthesised with WebAudio: fluorescent hum and ballast buzz, wind in
  the tunnels, the train (rumble, singing rails, brake squeal, door chime,
  motors), footsteps on tile / stone / metal, drips, the gate, the PA chime.

## For automated testing

`window.__game` is available as soon as the page loads:

- `window.__game.start()` — start (or resume) the game without a click.
- `window.__game.state` — live plain-data state: `started`, `paused`, `won`,
  `frame`, `time`, `fps`, `drawCalls`, `triangles`, `nodes`, `built`,
  `x`/`y`/`z`/`yaw`, `progress`, `goal`, `wrong`, `junctions`, `wrongTurns`,
  `cluesRead`, `station`, `segment`, `train`, `caption`, `prompt`, `reading`,
  `seed`…
- `window.__game.debug` — helpers used by the tests: `input(mx, mz, run)`,
  `look(dyaw, dpitch)`, `advance(n, branch)`, `seek(type)`, `at(x, z)`,
  `take(correct)` (commit to the next junction's right or wrong branch),
  `plan([...types], seed, wrong, progress)` (restart with a forced layout,
  strangeness and station), `train(seconds)` (bring the next train forward),
  `use()`, `info()`, `preview(kind, w, h, opts)` (render one sign texture —
  `'whiteboard'`, `'paper'` and `'info'` among them), `find(label, dist)` (walk
  ahead to the next thing whose READ label contains `label`, e.g.
  `'whiteboard'` or `'newspaper'`, and stand in front of it), `census()` /
  `overflow()` (count the boards and newspapers; check no sign sheet ran out
  of room), `hush()` (clear hints and stop the PA, for screenshots).

`tests/smoke.mjs` serves `dist/`, opens it in headless Chrome, starts the game
and fails on any console error. `--shot=file.png` saves a screenshot,
`--mobile` emulates a phone. `--cracks` additionally checks that the geometry
is watertight: it builds closed test worlds, looks around from several
thousand camera positions with the void painted magenta, and fails if the
void shows through anywhere (pinholes at seams, missing faces). `--fuzz`
plays a few hundred junctions from many seeds and fails if the generator ever
has to force one segment on top of another, or if a station does not match
the right and wrong turns taken.
