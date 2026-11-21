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

### Hampstead's emergency stairs (`src/world/seg_spiral.js`, `spiral_geom.js`, `spiral_fit.js`, `src/tex/stairwell.js`)

The ending moves. It used to be "one stop further, where the line comes out
into the open at Golders Green"; it is now what the real Hampstead offers
anyone who will not wait for a lift: the emergency stairs. The exit stretch
is therefore still Hampstead — its tiles, its name.

To the numbers: an 18 ft (5.5 m) shaft (the size of the stair shaft at the
same railway's South Kentish Town; Hampstead's own is not published); treads
from a caged central pillar to the wall, 1.5 m wide; "180° sections each of
17 steps" with a mini-landing between; risers of 172 mm, which is what 320
steps in a 55 m shaft come to. That geometry fixes the rest: 34 steps and
5.85 m to the full turn. The game builds nineteen half turns — 323 steps,
55.6 m — so that the way in and the way out are on opposite sides of the
shaft and the count is honestly "over 320".

What you see is from the photograph and the description: black treads with
yellow nosings, a black handrail on the pillar side (and one on the wall),
mesh panels in white-painted frames round the pillar, cream tiling with a
reddish-brown border that follows the stairs (the station's own passage
tiles, mapped along the slope), white-painted panels for the top two turns,
a green "Emergency stairs" plate and the white one — "This stairway has over
320 steps / Do not use except in an emergency" — at the foot.

Making it feel endless, without cheating on its length: the landings are
numbered on sheets of paper on the pillar, 17 at the bottom to 1 at the top,
as at the real station — but nineteen flights have eighteen landings between
them, so a number has to come twice (it is 14), and one or more have been
changed by hand to a bigger number than the one below; the plate at the foot
appears again a third of the way up, still saying "over 320" ("Equivalent to
climbing a 15 storey building", which the real signs also say), and again
two thirds of the way up, where it may say 340 and 16; the same dropped
newspaper lies on two landings; every half turn has the same lamp. READ
tells you what a landing's number is and whether it agrees with the last.

Kept walkable: the walking line is two metres out, there is a level landing
every half turn, and nothing happens to the camera. One segment, about
8,000 triangles; the pillar's cage and the treads are two new cells in
spare corners of the shared atlas.

Departures: the real stair begins with a straight flight down from the
ticket hall before the spiral starts (that flight is the game's last few
steps into the hall); the pillar is drawn as a cage with darkness behind it;
shaft and tread dimensions are estimates, as above.

### South Kentish Town (`src/world/ghost_fit.js`, `src/tex/period.js`, the `ghost` segment in `seg_platform.js`)

The line data already listed it among the stations that turn up on diagrams
when the station goes wrong; now you can be sent there. It is the right
ghost for a wrong turn: it lies on the *other* branch out of Camden Town —
the one the walk does not take — between Camden Town and Kentish Town. A
wrong choice at a junction still puts you two stations back; the first time
(and about half the times after) the way there is through this platform.

What is recorded and used: opened 22 June 1907; planned as "Castle Road",
a name already fired into the tiles and painted over (the game shows it
faintly, under the paint, and READ says what it is); closed 5 June 1924
during the Lots Road power station strike and never reopened; cream and
dark red tiling; an air-raid shelter with a first-aid post in 1940; trains
have passed without stopping ever since. So: the platform tube with those
tiles and none of the later furniture (no name frieze, indicator, clock,
yellow line, tactile strip or MIND THE GAP — the shell has a plain mode for
it), bullseye signs of the pre-1917 kind (the solid red disc the game
already had as a "defect"), three posters of that summer on the platform
wall and one across the track (the firms and the fête are invented), a
tiled WAY OUT legend pointing at an archway that has been bricked up, a
second bricked arch, a closure notice dated 5th June 1924, SHELTER and
FIRST AID POST stencilled over the tiles, one old bench, dust. Five dim
bulkhead lamps (one failing) and a lower ambient; the public address is
silent while you are in it. The running train is given a third way of
calling at a platform: not at all — it comes out of one mouth at 15 m/s,
lit, and goes into the other.

Departures: the real platforms were later demolished and the tiling painted
over; the game shows the platform as it was left. The posters, the notice's
wording and the bricked arches are period invention, not record.

One engine change came out of testing it: three long straight platforms in
a row give sight lines of 80 m, at which the 32 cm strip that backs every
floor joint is a fraction of a pixel; the strip is now 1.6 m long.

### The ticket hall and gate line (`src/world/seg_hall.js`, `gateline.js`, `hall_fit.js`, `src/tex/hall.js`, `src/game/gates.js`)

The old ending was a flight of stairs with three cabinets across it. The new
one is a place: Hampstead's ticket hall, reached as the real emergency
stairs reach it — by a last straight flight into its corner.

The hall is a Leslie Green booking hall as the photographs and the listing
descriptions give it: cream tiles laid upright in stack bond, a bottle-green
skirting, a moulded green frieze of fruit and leaves at head height, cream
plaster above; an old ticket window with TICKETS in the tiles, shuttered
since the ticket offices closed; two ticket machines; a clock; the roundel.

The gate line is built to London Underground's Station Planning Standards:
620 mm walkways between 155 mm stanchions for the electric gates, 1,080 mm
for the wide-aisle gate, a manual gate 1,350 wide and 1,300 high, an
attendant's point 990 × 1,240 × 2,300 — and in the numbers Hampstead has
(six electric, one wide-aisle, one manual). The gates are the first electric
kind, as there: stainless stanchions about 1.9 m long on dark plinths, the
round yellow reader fitted on top at the end you walk up to, a small display
on a post, grey paddles (black on the wide gate). Stanchions are numbered
from 41 — Underground gates are numbered in the 40s to 70s.

The twist is what the display on a real gate says when it will not have
your card: SEEK ASSISTANCE. The first touch gets two low beeps, a red cross
on every gate in the line at once, a dip in the lights, and a voice: "Seek
assistance. There is no one here to assist you." (one new clip). The box
marked Assistance is dark. Three seconds later the crosses clear. The second
touch is taken: green arrows, and all the paddles fold back together. Then
the arch, four steps and the daylight, and the game's existing ending.

The displays and paddles are on sign-sheet layers of their own that the
segment shows and hides, so the whole line changes in one go: eight draw
calls and about 2,000 triangles for the hall.

Departures: the hall's plan is a plain 11 × 10 m room, not Hampstead's own
(for which no plan was found); the street is reached by an arch and steps
rather than through the lift lobby; the gate line is straight across.

## Round 7: further between the choices

Player feedback: "you make a choice and a few steps later you must choose
again". A stretch — the run of segments from one junction to the next — was
planned as two to four segments plus a platform; it is now seven to nine,
with a platform (or two joined by a cross-passage) placed somewhere in the
middle rather than at random. For variety no kind of segment comes twice
running in the plan, and the ones that change level (stairs, escalator, and
the lift once it exists) are rationed: at most two flights of stairs, one
escalator and one lift a stretch, each making the next less likely.

Measured over the same ten seeds, always taking the right branch
(`debug.measure`): a stretch went from 103 m and about 7 nodes (counting the
gate passage, the lead-in and the junction itself) to 163 m and about 12; a
whole run from 670 m to 970 m, 1.45 times as long. That is the "one and a
half times, not three" asked for, so the number of right choices needed
stays at five and the walk still has its five real stations.

Cost: none. On a scripted walk the scene averages 18 draw calls and 7,100
triangles on desktop (20 and 9,300 before: there is now proportionally more
passage than platform), 13 and 5,100 on a phone; about ten segments are
built at a time (nine before), and the layout fuzz still never has to force
a segment.

## Round 8: the lift (`src/world/seg_lift.js`, `lift_car.js`, `src/tex/lift.js`, `lift_signs.js`, `src/game/lifts.js`, `src/audio/sfx_lift.js`)

Most of the Northern line's deep stations were built with lifts, and four of
the five on the walk still have them. Research and sources are in
`REFERENCES.md` ("The lift, round 4"); what was built from them:

- **The landing**: a short passage in the station's own tiles, the lift in
  its end wall. Steel architrave; over it a steel hood with a dark LED strip
  and the number 1; four brushed stainless panels, a wired-glass window and
  a yellow "Caution — Obstructing the doors can be dangerous" label on each
  of the middle two, a rubber edge down the centre. Beside the door a column
  of seven lamps (one lit: where the car is), a steel "LIFT 1" plate, a
  "NEXT LIFT" box whose arrow lights while the car stands open, a black
  "AUTOMATIC SERVICE" panel, the notice "Please pass right inside the lift".
  Overhead, Russell Square's sign: "Way out" yellow on black beside
  "↑ Lifts to street" (on a lift that goes down, or in a wrong branch,
  "Northern line · ↑ Lifts", as in Goodge Street's ticket hall).
- **The car**: 2.3 × 2.9 m and 2.3 m high, a door at each end — in by one,
  out by the other, as at Chalk Farm. Cream panels with dark joints, a steel
  rail at hand height, framed posters over it, a slotted skirting; steel
  ends; by the far door a panel with a small window, a speaker, "LIFT 1" and
  a yellow alarm button under a lit "EXIT"; two bare tubes and a round vent
  in the ceiling; a brass sill lettered OTIS.
- **What it says**: on the landing strips "LIFT TRAVELLING DOWN" (or UP)
  while the car is away, and in the car "STAND CLEAR DOORS CLOSING" as the
  doors shut — both worded as photographed at Borough. Aloud, in the same
  recorded voice as the rest of the station: "Please stand clear of the
  doors.", "Doors closing.", "This lift is going up." / "…going down."
- **The ride**: the rise is Chalk Farm's 9.2 m or Mornington Crescent's
  11.4 m at 1.6 m/s, so six or seven seconds, as it would be there. The
  segment holds two copies of the car, one above the other; with all doors
  shut the rider is moved from one to the other in a single frame, and
  because everything in the car is self-lit (nothing baked) the two are
  identical and nothing shows. Meanwhile: a motor hum that winds up and
  down, a light camera shake, the floor pressing up (or dropping away), and
  the lamp stepping along its column. A shut door is a collision wall, so
  there is no walking out mid-ride.
- **Doors**: each is one mesh; the panels' vertices are slid along their
  tracks on the CPU (a hundred or so vertices, only while they move), the
  middle pair twice as far as the outer pair.

Departures, all listed in REFERENCES.md: one lift at the end of a passage
instead of a row of them down one side; no call button (automatic service,
as at Russell Square); the heights of the line's two shallowest lifts
everywhere, since Hampstead's 55 m would take half a minute.

Cost: the lift adds 7 draw calls while you are at it (tiles, props, signs,
the car, one door, two lit layers) and about 750 triangles; a 1024 × 512
canvas for its painting. With a lift in about half the stretches a perfect
run is 937 m of walking plus two or three rides of about 17 s each — as near
as makes no difference the one-and-a-half times of round 7. Layout fuzz:
0 forced; the void scan finds nothing in the lift with its doors shut or
open.

### What the lift adds (`src/game/lifts.js`, `script()`)

The player asked for the lift to say something quietly unsettling "in the
spirit of: we know where you are going, a floor has been selected for you" —
a polite announcement that is slightly wrong, not a horror film. So the lift
never changes its voice, its pace or its chime (it has none), and every odd
sentence comes after the real line it always says and a beat of silence:

- "There is no need to select a floor." … "Your floor has been selected for
  you." — as you step in (the car has no floor buttons to look for);
- "Please stand clear of the doors." … "You are expected on the next level.";
- "This lift is going down." … "We know where you are going." (in a lift
  that is going up, the true line and the same sentence);
- "This lift is going down." … "It was always going down." — only after a
  third wrong turn, only in a lift that is going down, and then on about
  three in ten of its odd rides.

Never on the first ride of a game; afterwards one ride in three, three in
five from the second wrong turn (each lift's roll is fixed when it is
planned, so it does not change if you step out and back in); the first
three never on two odd rides running. Each sentence is its own recorded clip
(five new ones), so the real lines are literally the same recordings whether
or not anything follows them. `debug.scene('lift', { odd: 'know' })` (or
`debug.lift(cmd, { odd })`) forces one.

