# References — "Mind the Gap"

Research notes for the look and sound of the game. **Nothing here was copied
into the game**: no photographs, logo files, fonts or recordings from the
network are hot-linked or shipped. Every texture (tiles, signs, posters, the
roundel, line diagrams, the dot-matrix boards, the train) is drawn at runtime
on a `<canvas>`; every sound effect is synthesised with WebAudio; the PA voice
is a set of clips made with a text-to-speech voice (`tools/record_voice.py`).

**Current state:** since the "London" pass the game uses the *real* Northern
line — real station names in the real order, real interchanges and line
colours, and the real roundel — at the player's explicit request for this
non-commercial fan game (see `LONDON.md`). The first version did the
opposite (an altered symbol and invented names); the section
[What was deliberately changed](#what-was-deliberately-changed-first-version-superseded)
is kept as a record of that. The up-to-date observations are in
[Reference photos, round 2](#reference-photos-round-2-the-real-network).

## What I learned

### Platform tunnels and tiling (Leslie Green / "Yerkes tube" stations, 1906–07)

- Deep-level running tunnels are circular, about 11 ft 8 in (3.56 m) in
  diameter, lined with cast-iron or concrete rings; station platform tunnels
  are a much larger tube with the platform along one side, so the wall behind
  you curves straight up into the ceiling vault.
- Each Leslie Green station got a *standard tiling layout* but its *own colour
  scheme and geometric pattern*, so regular (often illiterate) passengers could
  recognise their stop: repeating panels along the platform, with the station
  name fired into the tiles in big capitals (typically three times along the
  platform), and "bands of coloured tiling [that] stretch from the platforms
  over the roof of the station tunnels" — rings looping overhead at intervals.
- Tiles were small glazed oblongs (9 in × 3 in) laid in horizontal courses on
  a white/cream ground. Around two million were used.
- Recorded colour pairs: a single "deep rich green" (Gloucester Road); brown
  with a yellow accent (Hyde Park Corner); "caramel and custard" / two shades of
  yellow on white (Covent Garden); a dark chain pattern with turquoise border
  (Russell Square); "salmon pink and dark pink" stacked lozenges (Caledonian
  Road); browns in a bold diagonal with a broad vertical dark strip (Holloway
  Road); "bands of mauve tiles" overhead (Earl's Court).
- Passages carry tiled "WAY OUT", "NO EXIT" and "TO THE TRAINS" legends in a
  tiled frame with a comet-tailed arrow; stripes continue up the stairs and
  round to the lifts.
- Ticket halls: bottle-green tiling with an Art Nouveau acanthus or
  pomegranate relief dado, "deep green base tiles" below. Exteriors: ox-blood
  red glazed faience with big semicircular windows.
- 1930s Holden-era stations use pale "biscuit" cream tiling with a thin
  coloured trim band — the other look the game's corridors borrow.

### The station symbol and name boards

- The symbol began in 1908 as a solid red disc behind a blue name bar; Frank
  Pick found it "cumbersome" and had it reworked into a *ring* crossed by a
  bar, standardised by Edward Johnston c.1917–25 with exact proportions.
  Corporate colours are Pantone 485 red and Pantone 072 blue with white
  lettering.
- On platforms the name board is the same device on a white panel with the
  station name in the bar, repeated along the wall, with a continuous
  line-coloured frieze strip carrying the name in between.

### Lettering

- Johnston (1916): a humanist sans — the capital O is a near-perfect circle,
  M is straight sided, lowercase i/j carry a diamond (diagonal square) dot,
  the l has a curled foot. New Johnston (Eiichi Kono, 1979) and Johnston100
  (Monotype, 2016) are TfL's proprietary versions and are *not* available.
- Openly-licensed relatives named by the sources: **Hammersmith One** and
  **Cabin** ("open-source typefaces derived from Johnston"), Railway Sans, and
  Paddington. The game ships Hammersmith One and Cabin via `@fontsource`
  (SIL Open Font License) and falls back to system sans.

### Line colours

Used for friezes, trims and the fictional line names. Hex values as published
by a 2012 survey of TfL's colour guide; Pantone numbers from the Tube-map
article.

| Line | Hex | Pantone |
|---|---|---|
| Bakerloo | `#B36305` | 470 |
| Central | `#E32017` | 485 |
| Circle | `#FFD300` | 116 |
| District | `#00782A` | 356 |
| Hammersmith & City | `#F3A9BB` | 197 |
| Jubilee | `#A0A5A9` | 430 |
| Metropolitan | `#9B0056` | 235 |
| Northern | `#000000` | Black |
| Piccadilly | `#003688` | 072 |
| Victoria | `#0098D4` | 299 |
| Waterloo & City | `#95CDBA` | 338 |

### Way out and wayfinding signs

- Museum examples exist in both directions — an aluminium sign with yellow
  "Way out" lettering on black, and black lettering on a yellow panel — and
  the modern standard is the black-on-yellow panel, back-illuminated, with
  "Way out" in sentence case. Directional signs elsewhere are white on dark
  blue. "Emergency exit" wording is reserved for designated safe exits.
- Signs are governed by the London Underground Signs Manual (S1331, 2002) and
  successors; the rule that mattered here is consistency — same colours, same
  lettering, same arrow everywhere — which is exactly what the game breaks to
  signal that something is wrong.

### Platform edge

- "Mind the gap" dates from 1968, coined for an automated announcement because
  curved platforms leave a gap at the doors; it is "painted along the edges of
  curved platforms", usually lined up with the car doors. Usual wording on
  arrival: "Please mind the gap between the train and the platform"; also
  "Stand clear of the doors please".
- UK rail platforms use the **offset blister** tactile surface: rows of
  flat-topped domes 5 mm high at 66.5 mm centres, each row offset from the
  next, in a strip parallel to the edge (about 400 mm deep, set back from the
  edge), usually buff or yellow, with a painted line.
- Deep-tube track is four-rail: two running rails, a positive rail outside
  and a negative rail in the centre, with a pit between the rails in stations.

### Escalators

- First Underground escalator: Earl's Court, 1911. Treads, skirtings,
  balustrades and advert panels were timber until the 1987 King's Cross fire;
  by 1994 "the timber skirtings, balustrades and advertisement panels on all
  its escalators" had been replaced and wooden treads were being phased out
  (the last, at Greenford, went in 2014).
- The look the game goes for: an inclined barrel-vaulted shaft, grooved
  treads with a yellow edge, black rubber handrails, a central deck with
  uplighter columns, and a rank of small framed adverts climbing both walls.

### Next-train indicators and posters

- Dot-matrix indicators arrived in 1983 and replaced the older illuminated
  boards within a few years: amber characters on black, the next trains listed
  by order, destination and minutes, with the time of day in the bottom row.
- Poster sizes: Double Royal 40 × 25 in (the standard Underground poster),
  Quad Royal 40 × 50 in, and four-sheet 60 × 40 in, in simple metal frames.

## What was deliberately changed (first version, superseded)

*Historical: none of this applies any more — see the note at the top.*

- **The symbol.** The game's sign is a *notched ring crossed by a lozenge* —
  the bar has pointed ends and the ring is broken where the bar passes through
  it, and the colours are shifted (a darker oxide red, an inky navy). It reads
  as "a metro symbol" at a glance but is not the TfL roundel, which is a
  registered trade mark.
- **Station names.** No real station name appears. All names are generated
  from invented parts (e.g. "Marrowgate", "Hollow Cross", "Saint Vesper's").
- **Line names.** Lines are invented ("Meridian line", "Tallow line"…) and
  only borrow the colour families above.
- **Lettering.** Hammersmith One / Cabin (open licence), not Johnston. The
  camcorder display and the dot-matrix boards use VT323 (also SIL Open Font
  License), bundled the same way.

## Where each finding ended up

| Finding | In the game (`src/…`) |
|---|---|
| Oblong glazed tiles, cream ground, coloured dado band and rings over the vault, one colour scheme per station | `tex/tiles.js`; each station's colours in `game/line.js` (`STATIONS`) |
| Platform tunnel as a large tube with the platform to one side; four-rail track in a pit; dark running-tunnel mouths | `world/platform_shell.js` |
| Name boards repeated along the wall with a line-coloured name frieze between them | `world/platform_fit.js`, `tex/symbol.js`, `tex/signs.js` |
| "Way out" as black sentence-case lettering on a yellow panel; white-on-blue direction signs; one consistent arrow | `tex/signs.js` — and the false signs each break exactly one of those rules |
| Tiled "WAY OUT" / "TO THE TRAINS" legends with a comet-tailed arrow in cross-passages | `tex/signs.js` (`drawTileLegend`), `world/seg_cross.js` |
| "MIND THE GAP" on the coping, yellow line, offset-blister tactile strip | `tex/atlas_paint.js`, `world/platform_shell.js` |
| Inclined barrel-vaulted escalator shaft, grooved yellow-edged treads, rubber handrails, central deck with uplighters, small framed adverts up both walls | `world/seg_escalator.js` |
| Amber dot-matrix indicator: order, destination, minutes, time of day in the bottom row | `tex/dynamic.js`, `game/boards.js` |
| Double Royal / four-sheet poster proportions in plain metal frames | `tex/posters.js`, `world/dress_passage.js` |
| Collapsible lattice gates closing the station after the last train | `world/gate.js` |
| Line colours | `game/line.js` (`LINE_COLORS`), used for the interchange bars on the diagrams |

## URLs

- Leslie Green — https://en.wikipedia.org/wiki/Leslie_Green
- The Green Agenda (Leslie Green stations) — https://thebeautyoftransport.com/2013/10/09/the-green-agenda-leslie-green-underground-stations-london-uk/
- Piccadilly tiles (diamond geezer) — https://diamondgeezer.blogspot.com/2013/05/piccadilly-tiles.html
- Piccadilly tiles, part 2 — https://diamondgeezer.blogspot.com/2013/05/piccadilly-tiles-2.html
- London Underground's Edwardian tile patterns (LURS) — https://lurs.org.uk/07%20jan%20LONDON%20UNDERGROUND%E2%80%99S%20EDWARDIAN%20TILE%20PATTERNS.pdf (search summary only; the PDF would not load)
- Covent Garden tube station — https://en.wikipedia.org/wiki/Covent_Garden_tube_station
- Russell Square tube station — https://en.wikipedia.org/wiki/Russell_Square_tube_station
- London Underground (roundel history) — https://en.wikipedia.org/wiki/London_Underground
- The evolution of the roundel (London Transport Museum) — https://www.ltmuseum.co.uk/collections/projects-partnerships/roundel (search summary only)
- Johnston (typeface) — https://en.wikipedia.org/wiki/Johnston_(typeface)
- Tube map (line colours, Pantone references) — https://en.wikipedia.org/wiki/Tube_map
- Tube line colours in hex — https://oobrien.com/?p=2095
- London Underground infrastructure — https://en.wikipedia.org/wiki/London_Underground_infrastructure
- Mind the gap — https://en.wikipedia.org/wiki/Mind_the_gap
- Tactile paving — https://en.wikipedia.org/wiki/Tactile_paving
- Guidance on the Use of Tactile Paving Surfaces (DfT) — https://assets.publishing.service.gov.uk/media/61df0c91e90e07037794fe90/guidance-on-the-use-of-tactile-paving-surfaces.pdf
- Direction sign, "Way out", c.1990 (London Transport Museum) — https://www.ltmuseum.co.uk/collections/collections-online/signs/item/1999-42380
- Direction sign, "Way Out / Emergency Exit" (London Transport Museum) — https://www.ltmuseum.co.uk/collections/collections-online/signs/item/1998-92038
- London Underground Signs Manual S1331 (listing) — https://standards.globalspec.com/std/9960564/s1331
- Escalators, Hansard 9 May 1994 — https://api.parliament.uk/historic-hansard/commons/1994/may/09/escalators-london-underground
- The last wooden escalator — https://www.ianvisits.co.uk/articles/the-last-wooden-escalator-325/
- Where's my Tube? (dot-matrix indicators) — https://www.railengineer.co.uk/wheres-my-tube/
- Next generation next train indicator — https://diamondgeezer.blogspot.com/2013/08/next-generation-next-train-indicator.html
- A lesson in poster sizes — https://vintageposterblog.com/2010/02/19/a-lesson-in-poster-sizes-from-tom-eckersley/

## Reference photos, round 2 (the real network)

From this round the game uses the **real** Underground — Northern line, real
station names, real roundel — at the player's explicit request (see
`LONDON.md`). The sections above that describe an altered symbol and invented
names are history. Still true: no photograph, logo file or proprietary font is
shipped; everything is drawn at runtime. The photos below were downloaded to
`refs/` (git-ignored) only to be looked at and measured.

| Photo (Wikimedia Commons) | Author, licence | Used for |
|---|---|---|
| [Mornington Crescent Station Southbound Platform](https://commons.wikimedia.org/wiki/File:Mornington_Crescent_Station_Southbound_Platform.jpg) | London Less Travelled, CC BY 2.0 | whole-platform composition |
| [Chalk Farm tube station platform](https://commons.wikimedia.org/wiki/File:Chalk_Farm_tube_station_platform.jpg) | Quintin Soloviev, CC BY 4.0 | ox-blood tiling, roundel panels, indicator, 1995 Stock |
| [Camden northernline sbound](https://commons.wikimedia.org/wiki/File:Camden_northernline_sbound.jpg) | My name is not dave, CC BY-SA 4.0 | track-side line diagram and small roundels |
| [Platform 2 map at Kennington](https://commons.wikimedia.org/wiki/File:Platform_2_map_at_Kennington_tube_station_2024-09-06.jpg) | bob walker, CC BY-SA 2.0 | line diagram header, panel and roundel sizes |
| [Elephant & Castle northbound Northern Line map](https://commons.wikimedia.org/wiki/File:Elephant_%26_Castle_tube_station_-_northbound_Northern_Line_map_2005-11-27.jpg) | Chris McKenna (Thryduulf), CC BY-SA 4.0 | older enamel diagram: branches, "THIS STATION" |
| [Camden Town tube station MMB 01](https://commons.wikimedia.org/wiki/File:Camden_Town_tube_station_MMB_01.jpg) | mattbuck, CC BY-SA 3.0 | roundel proportions, frieze, Camden's blue bands |
| [CAMDEN TOWN 261008 CPS](https://commons.wikimedia.org/wiki/File:CAMDEN_TOWN_261008_CPS_(3998879054).jpg) | Chris Sampson, CC BY 2.0 | train front, indicator wording |
| [Kentish Town station MMB 01 1995-stock](https://commons.wikimedia.org/wiki/File:Kentish_Town_station_MMB_01_1995-stock.jpg) | mattbuck, CC BY-SA 3.0 | train side livery |
| [Belsize Park platform tiling](https://commons.wikimedia.org/wiki/File:Belsize_Park_tube_station_platform_tiling.jpg) | Rcsprinter123, CC BY 3.0 | tiled station name, frieze |
| [Hampstead station tiling](https://commons.wikimedia.org/wiki/File:Hampstead_station_tiling.JPG), [roundel](https://commons.wikimedia.org/wiki/File:Hampstead_station_roundel.JPG) | Sunil060902, CC BY-SA 3.0 | "HEATH STREET" tiles, roundel panel |
| [Euston Northern Charing X branch northbound](https://commons.wikimedia.org/wiki/File:Euston_tube_stn_Northern_Charing_X_branch_northbound.JPG) | Sunil060902, CC BY-SA 3.0 | platform edge, adverts, tunnel mouth |
| [WoodGreen roundel and Way Out](https://commons.wikimedia.org/wiki/File:WoodGreen_-_Roundel_and_Way_Out_on_eastbound_platform_after_(4570665885).jpg) | Tom Page, CC BY-SA 2.0 | heritage bullseye and "WAY OUT" enamel |

### What was measured / observed

**Roundel** (Hampstead, Camden Town). Taking the ring's outer radius as R:
inner radius ≈ 0.63 R; bar ≈ 2.52 R long and ≈ 0.56 R high, so it overhangs
the ring by ≈ 0.26 R each side; white capitals ≈ 0.55 of the bar height, well
letter-spaced. Red ≈ `#dc241f`, blue ≈ `#0019a8`. Platform-wall boards are
either a white enamel panel in a grey frame (≈ 1.2 m wide × 1.5 m, roundel
almost filling the width) or a silhouette roundel fixed straight to the tiles
(ring ≈ 1.25 m across, centre ≈ 1.5 m above the platform). Track-side
roundels are small white square panels ≈ 0.7 m in a grey frame, centre
≈ 1.9 m above platform level, one each side of the line diagram and between
the advert panels.

**Line diagram** (Camden Town, Kennington). A white panel in a grey frame,
≈ 1.5 m wide × 2.4 m tall, following the curve of the track-side wall, its
foot on the black dado. Header top-left: "Northern line" (regular, small)
over "Southbound platform 2" (bold, about 1.5× larger), then a thin rule.
Below, a *vertical* diagram: a black line ≈ 6 mm at this scale; a short tick
towards the label for an ordinary station; a white circle with a black
outline for an interchange; this station's name in white on a dark-blue box
at the top; names in mixed case, dark blue-black; small line-colour bars and
the red National Rail double arrow beside interchange names. Southbound from
Camden Town the line forks into the Charing Cross branch (left column,
labels on the left) and the Bank branch (right column, labels on the right),
rejoins at Kennington and runs on to Morden. The older enamel version
(Elephant & Castle) is all capitals with a black "NORTHERN LINE" box and a
black "THIS STATION" arrow.

**Platform wall** (Mornington Crescent, Chalk Farm, Belsize Park,
Hampstead). Cream glazed tiles ≈ 9 × 3 in, stretcher bond. A dark dado of the
station colour to ≈ 0.9–1.0 m; two one-tile bands at ≈ 1.2 and ≈ 1.45 m; the
station name fired into the tiles in dark serif capitals ≈ 0.4–0.45 m high
with centred dots between the words (`· MORNINGTON · CRESCENT ·`,
`BELSIZE : PARK`), its baseline ≈ 1.75 m. Hampstead's tiles read
`· HEATH · STREET ·`, the name the station was built under. Above the tiles,
at ≈ 2.45–2.75 m, a continuous white frieze: the name in blue capitals every
≈ 3 m and a small "Way out →" plate — **yellow lettering on black** — between
them. Tile rings of the station colour cross the vault in pairs every
≈ 3–4 m; the vault between them is plain cream render. Colours: Mornington
Crescent navy; Camden Town pale blue; Chalk Farm ox-blood; Belsize Park
maroon; Hampstead maroon with dusty-pink rings.

**Track-side wall.** Not tiled: cream render above, black below ≈ 1.1 m
(above platform level), cable runs along the black. Advert panels ≈ 3 m tall
in grey frames, curved with the wall, nearly edge to edge.

**Fittings.** Fluorescent battens end to end on a tray over the platform
(≈ 1.2 m tubes, ≈ 0.3 m gaps). Dot-matrix indicator: black box hung at
≈ 2.6 m, amber text, `1 Kennington via Charing Cross  5 mins` /
`2 Morden via Bank  11 mins` / the time centred below. Dark timber slat
benches on black frames, or grey perforated steel seats with yellow ends.

**Platform edge** (Chalk Farm, Kentish Town, Camden Town). From the edge
inwards: white line ≈ 0.1 m; dark strip with `MIND THE GAP` in white capitals
at intervals; buff or yellow blister paving ≈ 0.4 m; yellow line ≈ 0.1 m.

**Train** (1995 Stock). Cab front red with a black window band and an amber
destination blind; sides white above, blue skirt below, red doors, grey roof;
the roundel on the side between the windows.

**Way out signs.** Both colourways are genuine on the network: yellow
lettering on black (frieze plates) and black on yellow (illuminated signs);
always "Way out", sentence case, with one arrow. Heritage enamel: white
"WAY OUT" on blue with a feathered arrow (Wood Green).


### How it was used

The photographs were looked at and measured, never copied: nothing from them
is shipped. Each element was then redrawn in code — `tex/tiles.js` (wall
finishes), `tex/symbol.js` (roundel), `tex/linemap.js` and `tex/linestrip.js`
(diagrams), `tex/signs.js` (frieze, tiled name, Way out), `tex/train.js` and
`world/train.js` (the train), `world/platform_fit.js` and
`world/platform_track.js` (what goes where on the two walls). Where the game
knowingly departs from what the photos show (tile colours pushed apart so the
stations can be told from each other, shorter platforms and trains), it is
listed in `LONDON.md`.

## Scenes, round 3

Research for five scenes that are modelled on particular real places. As
before, nothing below is shipped: the photographs (28, in `refs/s7/`,
git-ignored) and three PDFs were only read and measured; every surface in the
game is drawn at runtime. Where a source did not give a figure, it says so
here, and the game's number is marked *estimated*.

### 1. The 1995 Stock (Northern line train), interior

Sources: TfL "1995 Tube Stock" information sheet, 4th edition (FOI-0838-2122;
dimensioned drawings and an interior photograph); Wikipedia, *London
Underground 1995 Stock*; Commons photographs by Peter Skuce (public domain:
`95 T INTERIOR Northern line.JPG`, `95 DM INTERIOR Northern line.JPG`) and
Rept0n1x (CC BY-SA 3.0).

| What | Figure | Source |
|---|---|---|
| Length over body ends (every car type) | 17,770 mm | TfL sheet |
| Width of body / height above rail | 2,630 mm / 2,875 mm | TfL sheet |
| Passenger door opening, double / single | 1,406 mm / 703 mm | TfL sheet |
| Doors per side | DM: two double, one single; trailer and UNDM: two double, two single | TfL sheet |
| Gap between car bodies / bogie centres | 250 mm (typ.) / 11,124 mm | TfL drawing |
| Unit | three cars, DM – T – UNDM; a train is two units back to back | TfL sheet |
| Seats | 200 fixed + 48 tip-up per train (so 34 + 8 in a trailer) | TfL sheet |
| Lighting | fluorescent, 28 tubes per trailer, in two rows | TfL sheet |
| Displays | six scrolling LED units per car, orange | TfL sheet, Wikipedia |

Measured off the TfL trailer-car drawing (980 px = 17.77 m), from one body
end: single door centred at 0.97 m; seat bay of **seven** from 1.52 to 5.15 m
(seat pitch ≈ 0.52 m with its armrest); double door centred at 6.11 m; the
centre bay — two tip-ups, three fixed seats, two tip-ups — from 7.1 to 10.7 m;
second double door at 11.66 m; second bay of seven 12.62–16.25 m; second
single door at 16.80 m. Windows: two per bay, ≈ 1.4 m × 0.75 m. Both sides
alike: 7 + 3 + 7 = 17 fixed seats a side.

Finishes. As built (1998–2013): yellow grab poles, a charcoal moquette whose
pale marks "formed the letter N", grey floor. Since the 2013–15
refurbishment — the state modelled — the standard **Barman** moquette
(royal blue ground, darker and lighter blue arcs and blocks, small red and
turquoise rings), **dark blue** poles and rails, black armrests, grey seat
plinths, ivory wall and door panels, a speckled pale-grey floor that turns
dark grey in the doorways. Along the cove above the windows: line diagrams
and advert cards, dark ventilation louvres and the LED display boxes; two
continuous light diffusers flank a white centre ceiling panel with round
loudspeaker grilles; one floor-to-ceiling pole stands on the centre line of
each double doorway. The car end has a door to the next car with a narrow
tall window (a plain door in the cab bulkhead of a DM car).
Not found: interior floor-to-ceiling height (estimated 2.07 m: 2,875 mm less
a ≈ 0.70 m floor height and the roof), the announcements' exact wording (the
voice is Celia Drummond's; the game's lines are written in the network's
manner and spoken by its own synthetic voice).

### 2. Camden Town deep-level shelter

Sources: Subterranea Britannica, *Camden Town deep shelter* and *Belsize Park
deep shelter* (site visits by Nick Catford, 2000) and *Deep Level Shelters in
London*; Wikipedia, *London deep-level shelters*; Commons photographs of the
Clapham South shelter, built to the same design (Matt Brown, CC BY 2.0;
Sam Town, CC BY-SA 2.0).

- Two parallel tunnels per shelter, **16 ft 6 in (5.03 m) internal
  diameter**, 1,200 ft (≈ 370 m) long (Wikipedia; one Subterranea Britannica
  page prints "12,000 feet", an obvious slip), each with **two decks**;
  at Camden Town the two tunnels are about 150 ft apart. Built 1940–42;
  Camden Town opened to the public on 16 July 1944. Design capacity 9,600,
  later 8,000.
- Camden Town's shaft heads are in Buck Street and Underhill Street. Its
  upper landing is about 50 ft below the Northern line; "a door and steps up
  50 feet" once led to the station's platforms and has been bricked up —
  the game's way in.
- Each tunnel was partitioned into four or five sections with connecting
  doors. Section names are recorded for Belsize Park and Clapham South;
  **none was found for Camden Town**, so the game letters its section and
  invents no name.
- Bunks (Camden Town): along one wall, in line with the passage, three tiers
  — "a single bunk almost at floor level, a twin bunk above it, one half
  hinged, and another single bunk above that"; the opposite wall has bunks
  at right angles to the passage in bays of "six bunks, two stacks of three
  singles". Steel-framed. So the gangway is off centre.
- Recorded lettering: floor-standing signs with arrows to "Underhill Street
  entrance" and "Buck Street entrance"; a wall map headed "Camden Town deep
  shelter"; a schematic labelled "Home Office deep shelter"; a Ministry of
  Works notice that staff caught smoking will be dismissed; linings embossed
  "LPTB". Medical post, wardens' post, lavatories behind a privacy wall.
- From the Clapham South photographs: bolted segmental lining with deep
  ribs and recessed pans, painted cream-white; the upper deck's floor is near
  the tube's horizontal diameter, its walls lean in to a flat ceiling at
  about 2.1–2.2 m; the lower deck has the ribbed concrete underside of that
  floor for a ceiling; bunk uprights of steel angle with diagonal braces;
  concrete floor with a darker strip down the middle. Deck levels are
  *estimated* from the diameter (two storeys of ≈ 2.1 m and a 0.2 m floor
  fit in 5.03 m).
- Not found: bunk dimensions (6 ft × 2 ft assumed), wartime lamp type, paint
  colours other than what the photographs show.

### 3. Hampstead: the emergency stairs

Sources: Wikipedia, *Hampstead tube station*; diamond geezer,
"Undergroundest" (30 Oct 2013); Commons photograph *Hampstead tube station,
emergency staircase* (Oxyman, CC BY-SA 2.0).

- Deepest platforms on the network: **58.5 m (192 ft)** below the street;
  deepest lift shaft, **55 m (181 ft)**. Opened 22 June 1907. The platform
  tiles read "HEATH STREET".
- The stairs: "over 320 steps" (every source). The signs, read off the
  photograph: a green **"Emergency stairs"** plate, and a white plate in
  dark-blue lettering, **"This stairway has over 320 steps / Do not use
  except in an emergency"**. Another, quoted by diamond geezer: "equivalent
  to climbing a 15 storey building".
- A spiral round "the central supporting pillar", in "180° sections each of
  17 steps" with a mini-landing between; paper labels on the pillar number
  the landings from 1 at the top to 17 at the bottom. Treads are modern,
  black "with yellow safety trim"; a black handrail on the inside; mesh
  panels round the core. The top is "white-painted curved metal panels";
  lower down "the original tiling kicks in" — cream with dark red bands, two
  courses each (photograph). The way in is "tucked away in the back corner
  of the ticket hall", down a straight flight first.
- 320 steps in 55 m is 172 mm a step; 17 steps to the half turn puts a full
  turn at 5.85 m. Shaft diameter was not found for Hampstead: 18 ft (5.5 m),
  the size of the stair shaft at the same line's South Kentish Town, is
  assumed.

### 4. South Kentish Town

Sources: Wikipedia, *South Kentish Town tube station*; Subterranea
Britannica, *South Kentish Town Station* (Nick Catford, 2008); Commons
photograph of the sister station, *Kentish Town stn northbound Northern look
south* (Sunil060902, CC BY-SA 3.0).

- Charing Cross, Euston & Hampstead Railway, between Camden Town and Kentish
  Town on what is now the High Barnet branch — the branch the walk does
  *not* take at Camden Town. Opened 22 June 1907; planned as **Castle
  Road**, a name already "fired into the original Leslie Green tiles" and
  painted over. Some trains passed without stopping from 1908. Closed on
  5 June 1924 during a strike at Lots Road power station and never reopened.
- Platforms 50 ft below the street; one 23 ft lift shaft (two lifts) and an
  18 ft (5.5 m) spiral-stair shaft; two subways and cross-passages to
  partly staggered platforms. Air-raid shelter from 1940 (bunks, first-aid
  post; removed after the war).
- Today the platforms themselves have been demolished; "the cream and dark
  red tiling is clearly visible in the platform area although it has been
  painted over". The game shows the station as it was left in 1924 — the
  platform still there — which is the one deliberate departure.
- John Betjeman's "South Kentish Town" (1951, BBC Home Service): Basil
  Green, an income-tax official, steps off a train that has stopped there
  and is left behind. Based on a real train that opened its doors there.

### 5. Ticket hall and gate line

Sources: London Underground *Station Planning Standards and Guidelines*
(2012; FOI-0523-2122); Kim Rennie, "Underground ticketing system update"
(LURS, *Underground News*); Commons photographs: Belsize Park booking hall
(Andrew Riley, CC BY-SA 4.0), Golders Green ticket barrier (David Howard,
CC BY-SA 2.0), West Kensington gateline (Chris McKenna, CC BY-SA 4.0).

| What | Figure | Source |
|---|---|---|
| Electric gate: walkway / stanchion width | **620 mm / 155 mm** | SPSG |
| Wide-aisle gate walkway | 1,080 mm | SPSG |
| Manual gate with luggage port | 1,300 high, 1,350 wide, 900 opening | SPSG |
| Gateline attendant's point | 2,300 high × 990 × 1,240 | SPSG |
| Station control unit by the gates | 1,802 high × 429 × 473 | SPSG |
| Hampstead's gates | 6 electric (E1), 1 wide-aisle, 1 manual, 1 validator | LURS table |
| E1 gate length | ≈ 1.9 m (*derived*: the E2 is "600mm shorter" and takes "around 68%" of its floor space) | LURS |

- The gate (photographs): brushed stainless stanchion about 1.0 m high on a
  dark grey plinth, rounded ends; a **yellow round reader pad** on top at the
  entry end, right-hand side; a small display on a post that shows a green
  arrow or a red cross; a pair of grey rounded "paddles" that fold flat
  against the stanchions; black ribbed floor plate in the walkway. The
  older display wording, per LURS: "No Entry", "Enter", "Take Ticket" and
  **"Seek Assistance"**.
- A Leslie Green ticket hall (Belsize Park photograph; Historic England's
  description of his stations): cream tiles laid upright in stack bond, a
  bottle-green skirting, and a moulded green frieze band of acanthus or
  pomegranate at about head height; cream plaster above; dark timber door
  frames; pale square floor tiles; steel lift doors. Hampstead's Art
  Nouveau ticket windows survive, out of use (secondary source).
- The game's exit is therefore **Hampstead's own ticket hall**, reached by
  the emergency stairs, and not Golders Green as before.

### URLs (round 3)

- TfL 1995 Tube Stock information sheet — https://foi.tfl.gov.uk/FOI-0838-2122/1995ts%20(Northern)%20Fact%20Sheet%20-%204th%20Edition.pdf
- London Underground 1995 Stock — https://en.wikipedia.org/wiki/London_Underground_1995_Stock
- Camden Town deep shelter — https://www.subbrit.org.uk/sites/camden-town-deep-shelter/
- Belsize Park deep shelter — https://www.subbrit.org.uk/sites/belsize-park-deep-shelter/
- Deep Level Shelters in London — https://www.subbrit.org.uk/features/deep-level-shelters-in-london/
- London deep-level shelters — https://en.wikipedia.org/wiki/London_deep-level_shelters
- Hampstead tube station — https://en.wikipedia.org/wiki/Hampstead_tube_station
- Undergroundest (diamond geezer) — https://diamondgeezer.blogspot.com/2013/10/undergroundest.html
- South Kentish Town tube station — https://en.wikipedia.org/wiki/South_Kentish_Town_tube_station
- South Kentish Town Station (Subterranea Britannica) — https://www.subbrit.org.uk/sites/south-kentish-town-station/
- Station Planning Standards and Guidelines 2012 — https://foi.tfl.gov.uk/FOI-0523-2122/SPSG%202012_Redacted.pdf
- Underground ticketing system update (LURS) — https://www.lurs.org.uk/_files/ugd/98da3e_edc99906c6314a13a0b3dd7cce78d4a4.pdf
- Photographs: Wikimedia Commons, files named above (authors and licences as given).

## The lift, round 4

A deep-level tube station passenger lift: the lower and upper lift
landings, the car, and what it says. Photographs were only looked at
(`refs/s8/`, git-ignored); everything in the game is drawn at runtime.

Sources: Clive's Underground Line Guides, "Lifts and escalators" (CULG,
last modified 2024-04-27); Wikipedia station articles; TfL press releases
on the Covent Garden lifts (2014–15); *Station Planning Standards and
Guidelines* (2012); Commons photographs: Chalk Farm lift (Panhard, CC BY
2.5), Borough lifts 01/02 (Chris McKenna, CC BY-SA 4.0), Passenger lift at
Borough (Andy F, CC BY-SA 2.0), "Lift number 4 will be the next lift" —
Belsize Park (Mike Quinn, CC BY-SA 2.0), Russell Square 6/11 (Chris
Sampson, CC BY 2.0), Goodge Street 2025 set (Hugh Llewelyn, CC BY-SA 2.0),
Goodge Street old lifts (citytransportinfo, CC0), Hampstead lift area
(Andrew Riley, CC BY-SA 4.0), Holloway Road (Hugh Llewelyn, CC BY-SA 2.0),
Edgware Road Bakerloo lifts (Alex Ostrovski, CC BY-SA 4.0), Earl's Court
upper landing (citytransportinfo, CC0), Russell Square "Lifts & Stairs"
tiles (ell brown, CC BY-SA 2.0).

### Numbers

| What | Figure | Source |
|---|---|---|
| Lift rise, Chalk Farm (lifts 1–2, "New Otis") | **9.2 m** (30'2") | CULG |
| Lift rise, Mornington Crescent (1–2, "New Otis") | **11.4 m** (37'5") | CULG |
| Lift rise, Belsize Park (2–4, "New Wadsworth") | 33.2 m (108'10") | CULG, Wikipedia |
| Lift rise, Hampstead (1–4, "New High-Speed Otis") | 55.3 m (181'4") | CULG |
| Others | Covent Garden 34.3 m, Russell Square 30.6 m, Goodge Street 26.0 m, Edgware Road (Bakerloo) 22.1 m, Borough 16.2 m | CULG |
| Shafts | usually "two lifts in a 7m (23') diameter shaft"; three in a 9.1 m (30') shaft at some | CULG |
| Speed | earliest lifts "about 0.6m/s (120' per minute)"; later "2.5m/s (500' per minute) being common" | CULG |
| Bottom landing | "the lift shafts would normally end above the top of the station tunnels with stairs down to platform level" | CULG |
| Capacity | Russell Square: "all fifty-passenger lifts built by Wadsworth"; the 1906–07 Otis lifts carried about 70 | Wikipedia |
| Covent Garden replacement, 2014–15 | new cars "larger", faster, "25 per cent" more capacity; no dimensions published | TfL |
| Waiting area in front of lift doors | 0.45 m² per passenger where doors are entry-only, 0.8 m² where the same doors serve entry and exit | SPSG |
| Car floor area for 50 persons | 3,750 kg rated load → at most **7.0 m²** (*derived* from the EN 81-20 load/area table: 5.00 m² at 2,500 kg + 0.16 m² per 100 kg) | — |
| Door opening | about **1.4 m wide × 2.1 m high** (*measured off* the Belsize Park and Chalk Farm photographs, taking 2.1 m for the height) | photos |

Not found anywhere: published car dimensions, door widths or plated
capacities for the Northern line's lifts, and any official transcript of
the lift announcements. The game's car (2.3 × 2.9 m, 6.7 m², door 1.4 m)
is therefore an estimate that fits the figures above.

### What the photographs show

- **Through cars.** You go in by one side and come out by the other. Chalk
  Farm (2008): looking in through the exit door, a red "No entry" plate on
  the steel header, the far door half open on to the other landing.
  Edgware Road: "No entry to lifts from this side". Goodge Street "still
  uses the original scheme of separate exit and entrance areas"
  (Wikipedia). Earl's Court's upper landing had "NO ENTRY" over the exit
  doors.
- **Landing doors**: brushed stainless steel, four panels opening from the
  centre (Belsize Park, Borough, Russell Square, Holloway Road; Chalk
  Farm's are two panels sliding one way). A small wired-glass vision panel
  in each centre panel, a yellow "Caution — Obstructing the doors can be
  dangerous" label under it, a black rubber edge down the middle. A steel
  architrave, and over it a sloping steel hood with a dark LED strip and
  the lift's number under it.
- **What the LED strips say**: "LIFT TRAVELLING DOWN" (Borough landing,
  green, 2009); "STAND CLEAR DOORS CLOSING" (inside a Borough car, 2006).
  The 1980s Goodge Street lifts had a lit sign "STOP – DOORS CLOSING" and
  "KEEP CLEAR OF THE DOORS" lettered across the doors.
- **Beside the doors**: a steel plate with a column of seven small lamps
  (one lit shows where the car is; an arrow at the end lamp shows which way
  it is going); a steel plate "LIFT 1" with an arrow (Borough), or "Lift 1"
  white on blue (Russell Square); a lit "◄ NEXT LIFT ►" box whose arrow
  points at the lift that will leave next; a black panel "FOR SERVICE /
  PRESS TO CALL LIFT" over a push button (Borough) or "AUTOMATIC SERVICE"
  (Russell Square); a small notice "Please pass right inside the lift".
- **Ways to the lifts**: hanging sign at Russell Square's lower landing,
  "Way out" (yellow on black) beside "↑ Lifts to street" (blue on white);
  in Goodge Street's ticket hall "Northern line / ← Lifts / Stairs ↑" and a
  wall panel with four columns of lamps numbered 1–4. Leslie Green's own
  tiled sign reads "LIFTS & STAIRS".
- **TfL notice, Goodge Street (2025), in full**: "Using the lift. These
  lifts are customer operated: • Please push the button to call the lift
  • Once inside, push the button to operate. Take care not to obstruct the
  doors."
- **Lower lift landing** (Goodge Street, Hampstead): a tiled passage with
  the station's own colours, a row of arched recesses down one side, one
  per lift door; fluorescent battens along the crown; pale floor tiles.
- **Inside the car** (Chalk Farm, Borough): cream panels with dark joints
  on the two long walls, a rail at hand height (a flat steel band at Chalk
  Farm, a green tube at Borough), framed posters above it; both ends are
  steel, with the doors; beside the door a steel panel with a small display
  window, a speaker grille, the lift's number and an alarm button; a lit
  "EXIT" sign by the doors you leave by (Borough); an LED strip over the
  doors; two bare fluorescent tubes across a white ceiling and a round
  vent; a plain grey floor (black at Borough); a slotted steel skirting; a
  brass sill with several door tracks, lettered OTIS.

### What the lifts say

Spoken wording is known only from passengers, not from TfL:

- "Lift number 4 will be the next lift" — Belsize Park, quoted as the
  title of Mike Quinn's 2010 photograph of lift 4.
- "Stand clear, doors closing" and "Please do not obstruct the doors" —
  Hampstead's lifts, recalled on RailUK Forums ("a very stern woman").
- "Stand clear of the doors please" — the voice of other lifts of the same
  generation (Queensway, Lancaster Gate, Chalk Farm, Belsize Park), same
  thread.

The game's lift says "Please stand clear of the doors.", "Doors closing."
and "This lift is going up." / "This lift is going down." — the wording
asked for in the brief, which is the modern form of the above (the sentences
it sometimes adds after them are the game's own writing); the two LED
strips use the photographed wording exactly.

### How the game departs from it

- One lift, straight ahead at the end of a passage, instead of a row of
  two to four down one side of a landing. You still go in one side and out
  the other, and the door you came out of shuts behind you.
- The rise is Chalk Farm's 9.2 m or Mornington Crescent's 11.4 m — each at
  its own station, one or the other elsewhere — at 1.6 m/s, so the ride
  takes about as long as it would there. Belsize Park's and Hampstead's
  lifts rise three and five times as far, so the game does not use their
  heights.
- Automatic service: the doors open as you walk up and close once you are
  inside, as at Russell Square. There is nothing to press.
- No "No entry" plate on the far side: nobody else is coming out.

### URLs (round 4)

- CULG, lifts and escalators — http://www.davros.org/rail/culg/vertical.html
- Covent Garden station — https://en.wikipedia.org/wiki/Covent_Garden_tube_station
- Russell Square station — https://en.wikipedia.org/wiki/Russell_Square_tube_station
- Goodge Street station — https://en.wikipedia.org/wiki/Goodge_Street_tube_station
- Belsize Park station — https://en.wikipedia.org/wiki/Belsize_Park_tube_station
- New lifts to increase Covent Garden station capacity (TfL, 2015) — https://www.tfl.gov.uk/info-for/media/press-releases/2015/february/new-lifts-to-increase-covent-garden-station-capacity
- "Lift number 4 will be the next lift" — https://www.geograph.org.uk/photo/1720538
- RailUK Forums, "Tube train automated announcements 2005" — https://www.railforums.co.uk/threads/tube-train-automated-announcements-2005.264607/page-4
- Photographs: Wikimedia Commons, category "Lifts on the London Underground" and the files named above.
