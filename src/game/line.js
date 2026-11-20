// The Northern line as data. Every map, name board, indicator row and
// announcement in the game is generated from this file, so they all agree.
// Stations are listed north → south along each section of the line.

export const LINE_COLORS = {
  northern: '#000000', bakerloo: '#b36305', central: '#e32017', circle: '#ffd300', district: '#00782a',
  hammersmith: '#f3a9bb', jubilee: '#a0a5a9', metropolitan: '#9b0056', piccadilly: '#003688',
  victoria: '#0098d4', waterloo: '#95cdba', elizabeth: '#6950a1', dlr: '#00a4a7', rail: '#e1251b',
};
export const LINE_NAMES = {
  northern: 'Northern', bakerloo: 'Bakerloo', central: 'Central', circle: 'Circle', district: 'District',
  hammersmith: 'Hammersmith & City', jubilee: 'Jubilee', metropolitan: 'Metropolitan', piccadilly: 'Piccadilly',
  victoria: 'Victoria', waterloo: 'Waterloo & City', elizabeth: 'Elizabeth line', dlr: 'DLR', rail: 'National Rail',
};

export const SECTIONS = {
  edgware: ['Edgware', 'Burnt Oak', 'Colindale', 'Hendon Central', 'Brent Cross', 'Golders Green', 'Hampstead', 'Belsize Park', 'Chalk Farm'],
  barnet: ['High Barnet', 'Totteridge & Whetstone', 'Woodside Park', 'West Finchley', 'Finchley Central', 'East Finchley',
    'Highgate', 'Archway', 'Tufnell Park', 'Kentish Town'],
  charingX: ['Mornington Crescent', 'Euston', 'Warren Street', 'Goodge Street', 'Tottenham Court Road', 'Leicester Square',
    'Charing Cross', 'Embankment', 'Waterloo'],
  bank: ['Euston', "King's Cross St. Pancras", 'Angel', 'Old Street', 'Moorgate', 'Bank', 'London Bridge', 'Borough', 'Elephant & Castle'],
  morden: ['Oval', 'Stockwell', 'Clapham North', 'Clapham Common', 'Clapham South', 'Balham', 'Tooting Bec', 'Tooting Broadway',
    'Colliers Wood', 'South Wimbledon', 'Morden'],
  battersea: ['Nine Elms', 'Battersea Power Station'],
};
export const SPUR = { at: 'Finchley Central', name: 'Mill Hill East' };

// Other lines (and National Rail) you can change to at each station.
export const INTERCHANGE = {
  Euston: ['victoria', 'rail'], 'Warren Street': ['victoria'], 'Tottenham Court Road': ['central', 'elizabeth'],
  'Leicester Square': ['piccadilly'], 'Charing Cross': ['bakerloo', 'rail'], Embankment: ['bakerloo', 'circle', 'district'],
  Waterloo: ['bakerloo', 'jubilee', 'waterloo', 'rail'],
  "King's Cross St. Pancras": ['circle', 'hammersmith', 'metropolitan', 'piccadilly', 'victoria', 'rail'],
  'Old Street': ['rail'], Moorgate: ['circle', 'hammersmith', 'metropolitan', 'elizabeth', 'rail'],
  Bank: ['central', 'waterloo', 'dlr'], 'London Bridge': ['jubilee', 'rail'], 'Elephant & Castle': ['bakerloo', 'rail'],
  Stockwell: ['victoria'], Balham: ['rail'], 'Kentish Town': ['rail'],
};

// Stations that are on the diagram only when the station has gone wrong:
// real ones that never opened, or closed long ago. [name, between, and]
export const GHOSTS = [
  ['North End', 'Golders Green', 'Hampstead'],             // built 1906, never opened ("Bull & Bush")
  ['South Kentish Town', 'Kentish Town', 'Camden Town'],   // closed 1924
  ['City Road', 'Angel', 'Old Street'],                    // closed 1922
  ['King William Street', 'Bank', 'London Bridge'],        // closed 1900
];

// The walk: get off at Mornington Crescent and go up the Edgware branch.
// The next stop after Hampstead, Golders Green, is in the open air.
export const WALK = ['Mornington Crescent', 'Camden Town', 'Chalk Farm', 'Belsize Park', 'Hampstead'];
export const SURFACE = 'Golders Green';

// Tile colours of the walk's stations (see REFERENCES.md) and the name that
// is fired into their platform tiles.
export const STATIONS = {
  'Mornington Crescent': { theme: { id: 'mornington', ground: '#ece4c4', band: '#1d2a5e', accent: '#1d2a5e', skirt: '#182250', grout: '#bdb596', letter: '#7a1f2b' } },
  'Camden Town': { theme: { id: 'camden', ground: '#e9e6cf', band: '#5d86c5', accent: '#5d86c5', skirt: '#3f5f96', grout: '#b9b6a0', letter: '#27406f' } },
  'Chalk Farm': { theme: { id: 'chalk', ground: '#ede6cd', band: '#9a1b24', accent: '#9a1b24', skirt: '#7a141c', grout: '#beb69c', letter: '#6f141c' } },
  'Belsize Park': { theme: { id: 'belsize', ground: '#ebe3c6', band: '#4d2418', accent: '#4d2418', skirt: '#3d1c12', grout: '#bdb497', letter: '#3a160f' } },
  Hampstead: { tiled: 'Heath Street', theme: { id: 'hampstead', ground: '#ece2bd', band: '#a66f6a', accent: '#a66f6a', skirt: '#5a1820', grout: '#beb38f', letter: '#5a1820' } },
  'Golders Green': { theme: { id: 'golders', ground: '#eee9d6', band: '#2a5a3c', accent: '#2a5a3c', skirt: '#1f4530', grout: '#bfbaa6', letter: '#1f4530' } },
};

// The station the wrong turns lead through. South Kentish Town is on the
// other branch out of Camden Town (towards Kentish Town): opened with the
// line on 22 June 1907, planned as "Castle Road" — the name was already fired
// into its tiles and had to be painted over — and closed on 5 June 1924
// during a strike at Lots Road power station. It never reopened; trains have
// passed through without stopping ever since. Tiling: cream and dark red.
export const GHOST_STATION = {
  name: 'South Kentish Town', built: 'Castle Road', opened: '22 June 1907', closed: '5 June 1924', between: ['Camden Town', 'Kentish Town'],
};
STATIONS[GHOST_STATION.name] = {
  tiled: GHOST_STATION.built,
  theme: { id: 'skt', ground: '#cfc6a6', band: '#5e2020', accent: '#5e2020', skirt: '#4a1a1a', grout: '#8f876f', letter: '#3f1414' },
};

export const stationAt = (i) => (i >= WALK.length ? SURFACE : WALK[Math.max(0, i)]);
export const themeOf = (name) => (STATIONS[name] || STATIONS['Mornington Crescent']).theme;
export const tiledName = (name) => (STATIONS[name] && STATIONS[name].tiled) || name;

// Platform numbers: northbound 1, southbound 2 (true of every station on the walk).
export const platformNo = (dir) => (dir === 'north' ? 1 : 2);
export const dirWord = (dir) => (dir === 'north' ? 'Northbound' : 'Southbound');
