# References — "Mind the Gap"

Research notes for the look and sound of the game. **Nothing here was copied
into the game**: no photographs, logos, fonts or recordings are hot-linked or
shipped. Every texture (tiles, signs, posters, the station symbol, the
dot-matrix boards) is drawn at runtime on a `<canvas>`, every sound is
synthesised with WebAudio.

For public release the game deliberately does **not** reproduce the real
Transport for London roundel or any real station name. See
[What was deliberately changed](#what-was-deliberately-changed).

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

## What was deliberately changed

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
| Oblong glazed tiles, cream ground, coloured dado band and rings over the vault, one colour scheme per station | `tex/tiles.js`, seven schemes in `config.js` (`THEMES`) |
| Platform tunnel as a large tube with the platform to one side; four-rail track in a pit; dark running-tunnel mouths | `world/platform_shell.js` |
| Name boards repeated along the wall with a line-coloured name frieze between them | `world/platform_fit.js`, `tex/symbol.js`, `tex/signs.js` |
| "Way out" as black sentence-case lettering on a yellow panel; white-on-blue direction signs; one consistent arrow | `tex/signs.js` — and the false signs each break exactly one of those rules |
| Tiled "WAY OUT" / "TO THE TRAINS" legends with a comet-tailed arrow in cross-passages | `tex/signs.js` (`drawTileLegend`), `world/seg_cross.js` |
| "MIND THE GAP" on the coping, yellow line, offset-blister tactile strip | `tex/atlas_paint.js`, `world/platform_shell.js` |
| Inclined barrel-vaulted escalator shaft, grooved yellow-edged treads, rubber handrails, central deck with uplighters, small framed adverts up both walls | `world/seg_escalator.js` |
| Amber dot-matrix indicator: order, destination, minutes, time of day in the bottom row | `tex/dynamic.js`, `game/boards.js` |
| Double Royal / four-sheet poster proportions in plain metal frames | `tex/posters.js`, `world/dress_passage.js` |
| Collapsible lattice gates closing the station after the last train | `world/gate.js` |
| Line colour families | `config.js` (`LINES`, with invented line names) |

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
