# LONDON.md — making it unmistakably the Tube

Player feedback: *"feels more like Exit 8 than London"*, and *"there is no
master diagram of the whole line"*. Rule change from the player: use the
**real** London Underground — real line, real stations in the real order,
real interchanges and colours, the real roundel. (Non-commercial fan game;
the player accepts the takedown risk. Still no proprietary font files and no
copied photographs: everything is drawn at runtime.)

Reference photos were downloaded to `refs/` (git-ignored) and studied; what
was measured is in `REFERENCES.md` → "Reference photos, round 2".

## Why it read as "Exit 8"

Exit 8 is a clean, white, anonymous corridor with one sign. Our build had the
same grammar: cream tile + one coloured band + a sign, invented names, an
invented logo, no trains, no geography. Nothing in it could *only* be London.

## What makes a deep-level Tube station unmistakable (from the photos)

| # | Thing | In our build before | Impact | Cost |
|---|---|---|---|---|
| 1 | **The roundel**: red ring, blue bar, white caps, on white enamel panels; big ones on the platform wall, small square ones (≈0.7 m) on the track-side wall | altered symbol (notched ring, lozenge bar) | ★★★★★ | low |
| 2 | **Real names and a real line**: Northern line, black; "Mornington Crescent", "Camden Town"… everywhere, all agreeing | invented names, invented lines | ★★★★★ | medium |
| 3 | **Line diagram** on the track-side wall: "Northern line / Southbound platform 2", vertical black line, ticks, interchange circles, line-colour bars, branches, this station in a blue box | missing | ★★★★★ | medium |
| 4 | **Leslie Green platform wall**: station name fired into the tiles in big serif capitals; white frieze strip with the name in blue caps and small yellow-on-black "Way out →" plates; each station its own tile colour | generic band + name strip | ★★★★ | medium |
| 5 | **Track-side wall**: plain cream render, black dado, cable runs, huge curved advert panels, small roundels between them | tiled like the platform side; big name boards low down (the "sign on the floor" bug) | ★★★★ | low |
| 6 | **A train**: 1995 Stock — red cab, white sides, blue skirt, red doors — bursting out of the tunnel with wind and rumble, door chimes, "Mind the gap", "Stand clear of the doors please" | only a far-off rumble | ★★★★★ | high |
| 7 | **Dot-matrix indicator wording**: `1 Edgware  2 mins` / `2 Morden via Bank  9 mins` / clock; "Check front of train" | invented destinations | ★★★ | low |
| 8 | **Announcer wording**: "The next train to Edgware will arrive in 2 minutes", "This is Camden Town. Change here for…", "Please stand clear of the doors" | generic | ★★★ | low |
| 9 | "Way out" (never "Exit"); yellow and black; platform direction signs with a line-colour stripe: "Northbound platform 1" + stations served | partly | ★★★ | low |
| 10 | Platform edge: white line, "MIND THE GAP", buff blister strip, yellow line | already there | – | – |
| 11 | Johnston lettering | Hammersmith One (OFL, Johnston-derived) | ★★ | low if an OFL Johnston revival can be bundled |
| 12 | Gate line / ticket hall at the exit; "Stand on the right" on escalators; heat and brake-dust cues as captions | missing | ★★ | medium |

## The plan (in build order)

**A. One line as data** (`src/game/line.js`): the Northern line — every
station of every branch in order (Edgware, High Barnet + Mill Hill East,
Camden Town junction, Charing Cross branch, Bank branch, Kennington, Morden,
Battersea), with real interchanges and line colours. Everything reads from it.

**B. Geography becomes the game.** The player gets off the last train at
**Mornington Crescent** and has to walk *up the line*:

`Mornington Crescent → Camden Town → Chalk Farm → Belsize Park → Hampstead → (Golders Green)`

That is exactly five steps — and Golders Green is where the real Edgware
branch comes out of the tunnel into daylight, so it is the way out.
Hampstead, the last one, is the deepest station on the network: the game ends
with its long climb. A right choice at a junction moves you one station up
the line; a wrong one sends you two back; at Mornington Crescent it just
repeats. The line diagram's "this station" box is therefore a second progress
display, and every name board, frieze, indicator and announcement agrees.
Each station gets its real tile colours (navy / pale blue / ox-blood /
maroon / chocolate-and-pink).

**C. Anomalies that are real London ghosts.** As the station goes wrong the
diagrams gain stations that never opened or were closed long ago — *North
End* (the unfinished "Bull & Bush" between Hampstead and Golders Green),
*South Kentish Town*, *City Road* — name boards switch to them, ticks fall
out of order, or your own station goes missing from the diagram.
Hampstead's tiles say *Heath Street*, as the real ones do.

**D. Strip maps and signs** (`src/tex/linemap.js`): the vertical track-side
diagram (after the Camden Town photo), a long horizontal strip of the whole
line for junction halls and passages, and "Northbound platform 1 /
Southbound platform 2" signs listing the stations served. READ shows the
full ordered list as a caption.

**E. Platform dressing after the photos**: roundel panels at the measured
size and spacing, tiled name, frieze with Way out plates, cream/black
track-side wall with adverts and small roundels (fixes the low sign).

**F. The train** (`src/world/train.js`, `src/game/trains.js`): one merged,
shader-clipped mesh that runs out of one tunnel mouth, stops, and leaves by
the other; indicator counts it down; warm wind, rumble, squeal, door chimes,
on-train announcement. It cannot be boarded: it is not in service.

**G. Wording**: indicator rows, announcements and notices rewritten in the
network's own phrasing. "Way out" stays a listed destination on the
indicator (the progress meter). Way out sign rule updated: yellow and black
either way round is genuine (both exist on the real network); "Exit" is not.

**H. If time allows**: an OFL Johnston revival font, a gate line before the
daylight, "Stand on the right" plates, heat/brake-dust captions.

## Constraints kept

DV look untouched; one extra draw call for the train, none for the maps (they
go on the existing per-segment sign sheet); no new real-time lights; seam and
tunnel-arch fixes untouched (`node tests/smoke.mjs --cracks` must stay clean);
no dead ends (generation fuzz re-run).

## What was built (status after this pass)

| Plan item | State |
|---|---|
| A. One line as data | Done — `src/game/line.js`, `src/game/route.js`. |
| B. Geography is the game | Done — Mornington Crescent → Camden Town → Chalk Farm → Belsize Park → Hampstead → out at Golders Green; a right turn is one station up, a wrong one two back. |
| C. Anomalies from real ghost stations | Done — North End, South Kentish Town, City Road, King William Street on diagrams; closed stations and former names on roundels; swapped, repeated or missing stations. |
| D. Strip maps and signs | Done — track-side line diagram, whole-line strip on the platform wall, diagrams in passages, platform direction signs with stations served in junction halls. READ gives the full ordered list. |
| E. Platform dressing after the photos | Done — roundel panels, name fired into the tiles, white frieze with yellow-on-black Way out plates, plain cream track-side wall with black dado, cable runs, big curved adverts and small roundels. This also fixes the "sign on the floor": it was the old wide name board set at the foot of the track-side wall. |
| F. The train | Done — indicator counts it down; wind, rumble and singing rails; it comes out of one tunnel mouth, stops ("Please mind the gap…", then its own "This is Camden Town. Change here for…"), door chime, "Stand clear of the doors, please", and leaves through the other mouth. One extra draw call. |
| G. Wording | Done — indicator rows, announcements, notices. |
| H. Extras | Gate line with card readers before the daylight; "Stand on the right" plates; warm-wind / brake-dust and cold-air captions. Not done: an OFL Johnston revival font (none could be fetched; lettering stays Hammersmith One, which is Johnston-derived). |

### Where the game knowingly departs from the photographs

- **Tile colours.** Chalk Farm, Belsize Park and Hampstead are all dark reds
  in reality. The game keeps Chalk Farm ox-blood, pushes Belsize Park towards
  brown and gives Hampstead its dusty-pink accent as the main colour, so that
  five stations read as five colours at camcorder resolution — the tiles are
  how you tell which way you went.
- **Camden Town** really has four platforms, two per branch. The game only
  shows its Edgware-branch pair (northbound 1, southbound 2).
- **Platform length** is 30–42 m, not 110 m, so a four-car train stands in for
  a six-car one; fog hides the rest.
- **Trains do not open their doors.** The station is closed.
- **"Way out" on the indicator** is the game's progress meter, not something a
  real indicator shows.

Side-by-side comparisons with the reference photos were saved as
`/tmp/shots/lon_compare_*.png` (platform wall, line diagram, tiles, roundel,
train).

## Round 3: the staff whiteboard

Player request: the handwritten staff whiteboard. (This round also added
posters of verse on the advert panels; they were taken out again in round 5.)

**"Thought for the day."** Real stations keep a whiteboard by the gate line
or in a passage: station name and date across the top, a quote or a bad pun
in marker pen, a doodle, signed by whoever was on the early turn. Here it is
a prop of its own (`src/world/whiteboard.js`): screwed to the passage wall
with a tray of pens under it, or on a three-legged easel at the far end of a
platform (always on the first one) and in the corner of some junction halls.
The face is one 240 x 180 piece on the segment's existing sign sheet
(`src/tex/whiteboard.js`); the frame, tray, pens and legs are a couple of
dozen quads from the shared atlas — no new textures, no new draw calls.

The words (`src/game/thoughts.js`) are written for the game, in the voice of
station staff: cheery at first, quietly wrong as `wrong` rises, and finally
not written by staff at all. The signature is the tell: a named member of
staff (`– Maureen, CSA`, `– Your Camden Town team`) means staff wrote it; the
odd ones are unsigned or signed `Y.O.U.`; the strange ones are signed `The
Station`. A few ordinary boards restate a rule of the station (clocks, the
rising chime, yellow and black signs). The board in a junction hall may say
which passage is the way out: true if staff signed it, the opposite if the
station did — the same kind of rule as the rising and falling chime, taught
by a board and by a staff notice, and never spelt out anywhere else.

**Cost.** Everything goes on the per-segment sign sheets that were already
there. A passage's 512 px sheet cannot always hold a line diagram, a notice,
a whiteboard and three adverts, so the passage now asks the packer what fits
before it draws anything (`Sheet.room`) and shows fewer different adverts if
need be. On platforms the whiteboard and the notice are placed straight
after the line diagram (largest first).
`node tests/smoke.mjs --fuzz=40` reports no sheet overflows.

## Round 4: the paper on the bench

Every Tube platform has one by mid-morning: a free tabloid, read once and
left on the bench. Ours is *The Commute* — an invented title; no real
masthead or logo is imitated beyond the genre (white capitals on red, a blue
date strap, "FREE"). The front page is drawn at runtime (`src/tex/paper.js`):
headline, standfirst, a picture built from a few grey shapes under a halftone
screen, greeked columns, a fold across the middle. The prop
(`src/world/paper.js`) is a dozen quads: a slightly crumpled sheet with a
ridge along the fold, a curled corner and the inside pages slipped out from
under it, lying on the seat of a bench or on the floor next to one.

The stories (`src/game/paper.js`) are written for the game. Ordinary London
news first (strike threat, rain, Northern line delays, house prices, a fox
in a pub); then a passenger missing after the last train and a 23:47 that
has been due for eleven days; then the reader. The date line is today's,
then yesterday's or doubled, then 22 June 1907 — the day this branch opened.
A few stories mention a rule in passing (yellow and black signs, tile
colours, clocks that only run forwards, the rising chime, "up the line");
none of them says which way to turn.

Cost: one 150 x 194 piece, placed last on the platform's sign sheet (the
packer was re-checked for every combination with the whiteboard and
notice), no new texture, no new draw call.

## Round 5: less to read, and the rules said once

Player feedback on the build with whiteboards, verse posters and newspapers:
too many signs and boards, and the PA repeats itself at every junction.

**The verse posters are gone** — code, textures, text, captions, debug hooks.

**Less clutter.** Measured over the same 25 seeded walks (669 segments),
things with words on them that are not wayfinding or station identity
(adverts, staff notices, whiteboards, newspapers) went from 3.2 per segment
to 1.8.
- *Passages:* anything with words on it needs a clear slot of wall on either
  side (the next is at least 3.1 m along) and never faces another across the
  passage. Staff notices in 22% of passages (was 34%), a whiteboard in 40%
  (was 60%).
- *Platform wall:* roundel · tiled name · advert · roundel · line map ·
  roundel · tiled name · advert, a metre apart: two adverts per run instead
  of four, none right beside the whiteboard easel. Notice by the way in on
  30% of platforms (was 45%), easel on 40% (was 60%), newspaper on 30% (was
  42%).
- *Track-side wall:* adverts 6 m apart instead of nearly edge to edge (2 on
  a 30 m platform instead of 3, 4 on a 42 m one instead of 6); every gap
  still has its small roundel.
- *Escalators:* the little framed adverts are half as far apart again.
- *Junction halls:* unchanged, except that the corner whiteboard is rarer
  (20%, was 28%). Way out signs, platform signs, clocks, the indicator, the
  name board, line diagrams and roundels were not touched.

**The rules, once.** You now step off the train facing a Customer
Information board (`src/tex/infoboard.js`, text in `scripts.js`): white
enamel, blue header with the roundel, five numbered rules — the yellow and
black "Way out" signs, clocks that run forwards, the rising and falling
chime, up the line and two back, the "Way out" row on the indicators. READ
shows them as a caption and marks the matching staff notices as read. A few
seconds in, the PA says one welcome line pointing at the board (one new
clip). After that a junction only speaks on arrival if the announcement is
the clue; sign and clock junctions are silent. The two lines they used to
say are now what the help point in those halls answers with when pressed.

## Round 6: five real places

The player's brief: scenes "faithful to the real places, as close to 1:1 as
possible". Each was researched first (`REFERENCES.md`, "Scenes, round 3")
and built to the numbers found; where the game departs from them it says so
here.

### The standing train (`src/world/railcar.js`, `railcar_fit.js`, `trainstop.js`, `src/tex/car.js`)

A real half-train — uncoupling motor car, trailer, driving motor car — at
the 1995 Stock's own dimensions from TfL's information sheet: 17.77 m over
body ends, 2.63 m wide, door openings of 1,406 and 703 mm where the drawing
puts them, rows of seven, three and seven seats a side with two tip-ups
either side of the three. The inside is the present-day refurbished one:
Barman moquette, dark-blue poles and rails, black armrests, ivory panels,
the pale speckled floor going dark in the doorways, one pole on the centre
line of each double doorway, diagrams and advert cards along the cove (the
platform's own strip map and adverts, re-used from its sign sheet), LED
displays that scroll the indicator's ticker line. Windows and open doorways
are real openings. The outside uses the running train's colours, and the cab
end its very painting.

It stands at a 58 m platform (the longest in the game; three cars need
54 m). The 1995 Stock is the one deep-level stock with selective door
operation, and the scene uses it: end cars open, middle car shut, the
platform beside the middle car behind blue hoardings — so the route is
through the train. One announcement in each car, in the train's voice
(five new clips).

Departures: the running train is still the short 8.5 m-car one, because it
has to fit a 30 m platform and the game's tunnel mouths; the two are never
seen together. The far-side doors stay shut (there is a tunnel wall there).
Interior headroom (2.07 m) is derived, not sourced. About 8,000 triangles
and two extra draw calls on the one platform that has it.

### The Camden Town deep-level shelter (`src/world/seg_shelter.js`, `shelter_fit.js`, `src/tex/lining.js`, `shelter.js`)

Eight of these were dug under Northern line stations in 1940–42; Camden
Town's is still there, about fifty feet below the platforms, and "a door and
steps" once led down to it from the station. The game's way in is that door.

Built to the recorded numbers: a 5.03 m (16 ft 6 in) bore; two decks, of
which you walk the upper (deck floor just above the tube's centre line,
flat ceiling at 2.2 m, the lining leaning in on both sides); one lettered
section, 27 m of the real 370 m, between two bulkheads with doors. The
lining is the bolted segmental kind in the Clapham South photographs —
half-metre rings of recessed pans, bolt heads, old cream paint, "L.P.T.B."
cast into the odd segment. The bunks follow the description of Camden Town
itself: along one wall, in line with the passage, three tiers with the
middle one a twin whose outer half is hinged down; across the tunnel on the
other side, bays of two stacks of three. That puts the gangway off centre,
as it is. A railed stair-head half way along goes down to the lower deck;
it is chained off, and a lamp has been left on down there.

What is written on the walls is what is recorded: arrows to the "Buck
Street entrance" and the "Underhill Street entrance", a plan headed "Camden
Town deep shelter", a Ministry of Works notice forbidding smoking on pain
of dismissal, canteen / lavatories / medical aid post through the door.
Section letters and bunk numbers are in the manner of the other shelters
(no section names are recorded for Camden Town, so none is invented). The
warden's telephone is the "field telephone" of the brief: lift the receiver
and the warden's post answers (one new clip). When the station has gone
wrong, the rules for shelterers have changed too.

It appears in every game's first Camden Town stretch (and sometimes again
if you are sent back there), and nowhere else. Costs: one more shared
512 px texture (the lining), about 2,400 triangles, three draw calls.
Departures: the real thing is fourteen times as long, has a second tunnel
alongside and cross-passages, and its upper deck's exact levels are not
published — the deck heights are derived from the diameter.

While making the shelter and the train watertight, two hairline leaks in
the existing platform were closed as well (the coping now overhangs the
platform's face by 4 mm, and the track bed runs in under it): they only
showed from the track side, where nobody could stand before the train.
