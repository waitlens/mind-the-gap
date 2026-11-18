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
