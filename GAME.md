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

`Mornington Crescent → Camden Town → Chalk Farm → Belsize Park → Hampstead`

Hampstead is the last of them, and the deepest station on the whole network:
its platforms are 58.5 m below the street. The way out is at the top of its
emergency stairs.

Every so often — about eight stretches of passage, stairs, escalator, lift
and platform apart, a minute or so of walking — the passages end in a
**junction**: a small tiled hall where the way splits **left** and **right**. One branch is right. A few metres down
either branch a gate slams shut behind you — there is no going back.

- A **right** choice takes you one station up the line.
- A **wrong** choice sends you two stations back down it (never further than
  Mornington Crescent), and the station gets stranger. The first time — and
  about half the times after — the wrong way takes you there through **South
  Kentish Town**, on the other branch out of Camden Town: closed on 5 June
  1924, dark, dusty, its exits bricked up. Trains go through it without
  stopping. A passage at the far end lets you back into the network.
- Take the right way at Hampstead and a gate lets you into the emergency
  stairs: "This stairway has over 320 steps. Do not use except in an
  emergency." At the top, a last flight into the ticket hall. The gate line
  is shut: touch out at a yellow reader (READ). It will not have your card
  the first time. Try again.

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
The lift, which on your first ride says only what a lift says, now and then
adds a sentence in the same calm voice: *"There is no need to select a
floor. Your floor has been selected for you."* — *"Please stand clear of the
doors. You are expected on the next level."* — *"This lift is going down. We
know where you are going."* About one ride in three; three in five once you
have taken two wrong turns; and after a third, in a lift that is going down,
sometimes *"It was always going down."*

### Trains

Trains still come through after the last train. The indicator counts one
down, a warm wind pushes out of the tunnel, and a Northern line train comes
out of the dark, stops, keeps its doors shut, tells you where you are and what
the next station is, and leaves. It is not in service. You cannot board it.

Now and then there is one you *can* board: three cars of 1995 Stock standing
at a platform, lights on, nobody aboard, held "to regulate the service". The
doors of the two end cars are open, the middle car's are not, and the
platform alongside it is boarded off — "Platform closed. Please pass along
inside the train." So you get on, walk through the doors between the cars,
and get off at the far end. The train has something to say in each car.

## What is in it

- Endless procedural layout from modular segments — corridor, curved bend,
  stairs, escalator shaft, lift, platform, cross-passage, junction — planned
  a few segments ahead of you and torn down behind you.
- **A passenger lift** (`src/world/seg_lift.js`, `lift_car.js`,
  `src/game/lifts.js`; sources in `REFERENCES.md`, "The lift, round 4"): a
  short tiled landing with the lift in its end wall — four stainless panels
  under a steel hood whose LED strip reads `LIFT TRAVELLING DOWN`, a column
  of position lamps, `LIFT 1`, `NEXT LIFT`, `AUTOMATIC SERVICE`. The doors
  open as you walk up. Inside, clear of the doors, it says "Please stand
  clear of the doors.", "Doors closing." and "This lift is going up." (or
  down), shuts, hums and shakes for six or seven seconds while the lamp
  steps along its column, and opens its far door 9.2 m or 11.4 m higher or
  lower (Chalk Farm's and Mornington Crescent's real lifts). You cannot
  walk out while it moves, and its door shuts behind you when you leave.
  After your first ride it sometimes says a little more than a lift should
  (see "When the station goes wrong").
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
- **Set pieces modelled on real places** (measurements and sources in
  `REFERENCES.md`, "Scenes, round 3"; `window.__game.debug.scene(name)` jumps
  to each):
  - `train` — the standing train: a three-car unit to the 1995 Stock's real
    dimensions (17.77 m cars, 2.63 m wide, 1,406 mm and 703 mm doors in
    their measured places, 7 + 3 + 7 seats a side), refurbished interior —
    Barman moquette, dark-blue poles, black armrests, speckled floor, line
    diagrams and adverts along the cove, scrolling LED displays.
  - `shelter` — one section of the **Camden Town deep-level shelter** (1942),
    which lies under the station and was once reached from it: a 16 ft 6 in
    bolted-segment tunnel, the upper of its two decks, steel bunks three
    high in the layout recorded there (lengthwise along one wall, in bays of
    six across the other), bulkhead doors, a chained-off stair to the lower
    deck, the plan of the shelter, the Ministry of Works' no-smoking notice,
    arrows to the Buck Street and Underhill Street entrances, dim lamps and
    a warden's telephone that somebody answers. Only ever under Camden Town.
  - `spiral` — **Hampstead's emergency stairs**, the way out: a spiral round
    a caged central pillar in an 18 ft shaft, 17 steps to the half turn and
    a small landing, the real plates at the foot. Nineteen half turns, 323
    steps, 55.6 m — the height of the real lift shaft; about half a minute
    at a run. The landings are numbered on sheets of paper taped to the
    pillar, 17 at the bottom to 1 at the top, as the real ones are; but
    there are eighteen landings, so one number comes twice, and some have
    been corrected by hand. The plate that says how many steps there are
    turns up again part of the way up, no smaller.
  - `hall` — **the ticket hall and gate line**, the ending: a Leslie Green
    booking hall in cream and bottle-green (upright tiles, a moulded green
    frieze), the old TICKETS window behind its shutter, two ticket machines,
    an empty "Assistance" box, a clock that keeps time, yellow-and-black Way
    out signs — and across it a gate line to the Underground's own planning
    widths: six electric gates with 620 mm walkways between 155 mm
    stanchions, a wide-aisle gate (1,080 mm) and a locked manual gate, as
    Hampstead has; yellow reader pads, numbered stanchions, grey paddles.
    The first touch: two low beeps, a red cross on every gate, SEEK
    ASSISTANCE, and a voice that agrees there is nobody to give it. The
    second: one clean beep, green arrows, and every paddle in the line
    folds back at once. Beyond, an arch, four steps, daylight.
  - `ghost` — **South Kentish Town**, the wrong-turn station: cream and dark
    red tiling under a century of dust, the name it was built under (*Castle
    Road*) fired into the tiles and painted over, the solid-disc bullseye
    signs of its day, faded posters from the summer of 1924 (invented), a
    tiled WAY OUT arrow pointing at a bricked-up archway, a closure notice,
    stencilled lettering from its months as an air-raid shelter in 1940,
    five emergency lamps. No announcements reach it. The train comes through
    at speed with its lights on and does not stop.
- Camcorder post-process: low-resolution render scaled up, barrel distortion,
  colour fringing, scanlines, grain, tape dropouts, head-switching noise,
  occasional tracking wobble, crushed colour, `REC ●`, tape counter and a DV
  date stamp, handheld sway and step bob.
- Sound synthesised with WebAudio: fluorescent hum and ballast buzz, wind in
  the tunnels, the train (rumble, singing rails, brake squeal, door chime,
  motors), footsteps on tile / stone / metal, drips, the gate, the PA chime,
  the lift (arrival gong, doors on their tracks, the motor's hum).

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
  of room), `hush()` (clear hints and stop the PA, for screenshots), `scene(name, opts)`
  (jump to a set piece: `'train'` — with `{ car: 0|1|2 }` to stand inside a
  car — `'shelter'`, `'ghost'`, `'spiral'` — with `{ landing: 0…19 }` — `'hall'`
  with `{ z }`, or `'lift'` with `{ state: 'open' | 'board' | 'half' | 'ride' | 'arrive', dir: 1 | -1,
  odd: 'select' | 'expected' | 'know' | 'always' }` — `odd` makes it add that sentence on the next ride),
  `lift(cmd)` (report the nearest lift, or put it in one of those states), `gates(state)` (the gate line: report it, or set it to
  `'wait'`, `'no'` or `'go'`), `measure(seeds)` (play perfect runs and report
  how long a run and a stretch are, in metres and segments), `local()` (where you are in the current segment's
  own coordinates), `leaks()` (every view in which the void shows through,
  and what lies under the leaking pixel), `showVoid()` (paint the void
  magenta in the live picture).

`tests/smoke.mjs` serves `dist/`, opens it in headless Chrome, starts the game
and fails on any console error. `--shot=file.png` saves a screenshot,
`--mobile` emulates a phone. `--cracks` additionally checks that the geometry
is watertight: it builds closed test worlds, looks around from several
thousand camera positions with the void painted magenta, and fails if the
void shows through anywhere (pinholes at seams, missing faces). `--fuzz`
plays a few hundred junctions from many seeds and fails if the generator ever
has to force one segment on top of another, or if a station does not match
the right and wrong turns taken.
