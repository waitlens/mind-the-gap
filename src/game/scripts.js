// All the words: announcements, staff notices (the rare clues) and the
// copy on posters. Eerie, never gory.

// Ordinary announcements, in the network's own phrasing.
// {station} = where you are, {next} = the next station up the line.
export const AMBIENT = [
  'Ladies and gentlemen, there is a good service on the Northern line.',
  'This station is now closed. Please make your way to the way out.',
  'Please mind the gap between the train and the platform.',
  'Please stand behind the yellow line, and stand clear of the doors.',
  'Please keep your belongings with you at all times.',
  'Customers are reminded that the last northbound train has departed.',
  'This is {station}. Please follow the signs for the way out.',
  'Please take care on the stairs and hold the handrail.',
  'Please stand on the right on the escalators.',
];

// The British Transport Police security message, played on a fixed timer
// (see announcer.js). The last one is for when the station has gone wrong.
export const SECURITY = [
  'This is a security message. If you see something that doesn\'t look right, speak to staff, or text the British Transport Police on 61016. We\'ll sort it. See it, say it, sorted.',
  'If you see something that doesn\'t look right, speak to staff, or text British Transport Police on 61016, and we\'ll get it sorted. That\'s 61016. See it, say it, sorted.',
];
export const SECURITY_ODD = [
  'If you see something that doesn\'t look right, speak to staff. If you can find one. See it, say it, sorted.',
];

// Said inside the train that is standing at a platform with its doors open
// (world/trainstop.js): one line in each car as you walk through.
export const TRAIN_PA = [
  'This train is being held here to regulate the service. We will be on the move shortly.',
  'This is a Northern line train to Edgware. Please move right down inside the cars.',
];
export const TRAIN_PA_ODD = [
  'This train terminates here. All change, please. All change.',
  'This train is being held here. We do not know what is holding it.',
  'The next station is this one. The next station is this one.',
];

// The deep-level shelter under Camden Town (world/seg_shelter.js). The
// Ministry of Works' warning about smoking, the two entrances and the plan's
// heading are recorded at the real place; the wording is in the manner of
// the time. `phone` is what the warden's telephone says (a voice clip).
export const SHELTER = {
  phone: 'Warden’s post, Camden Town. Yes, we can hear you walking about. All the bunks are taken tonight.',
  bunks: 'Steel bunks, three high: lengthwise along this wall, and across the tunnel in bays of six on the other side. Each was let to one named person. If they did not come down, it stayed empty.',
  mow: ['MINISTRY OF WORKS', 'NO SMOKING', ['Smoking is strictly forbidden in every part of this shelter.', 'Any member of the staff found smoking will be dismissed.'], 'BY ORDER'],
  rules: ['DEEP SHELTER', 'TO SHELTERERS', ['Occupy only the bunk shown on your ticket.', 'Take your bedding up with you each morning.', 'Lights are lowered at 10.30 p.m.'], 'SHELTER WARDEN'],
  rulesOdd: ['Occupy only the bunk shown on your ticket.', 'Your bunk has been kept for you.', 'You may go up in the morning, if it comes.'],
  plan: 'Camden Town deep shelter. Two tunnels side by side, upper and lower decks, 8,000 bunks, sections A to H. Shafts at Underhill Street and Buck Street. This is section F.',
  lower: 'Lower deck. The chain is padlocked. More bunks down there, and a lamp somebody has left burning.',
};

// The emergency stairs at Hampstead (world/seg_spiral.js). `green` and
// `sign` are the wording of the real plates at the foot of the stairs, and
// "equivalent to climbing a 15 storey building" is on the real ones too;
// `signs` are the plates that turn up again part of the way up, which ought
// by then to be saying a smaller number. `hints`: [landing, what you notice].
export const SPIRAL = {
  green: ['Emergency', 'stairs'],
  sign: ['This stairway has over 320 steps', 'Do not use except in an emergency'],
  signs: [
    ['This stairway has over 320 steps', 'Equivalent to climbing a 15 storey building'],
    ['This stairway has over 340 steps', 'Equivalent to climbing a 16 storey building'],
  ],
  hints: [
    [3, 'Seventeen steps, a landing. Seventeen steps, a landing.'],
    [8, 'Cream tiles, a reddish-brown border, the same lamp. You have stopped counting.'],
    [13, 'Your legs ache. The numbers on the pillar are going down. Mostly.'],
    [18, 'Colder air from above. It smells of rain.'],
  ],
};

// South Kentish Town, closed 5 June 1924 (world/ghost_fit.js). The posters
// are in the manner of that summer; the firms, the fête and the remedies
// are invented. [headline, strapline, picture]
export const GHOST = {
  hint: 'South Kentish Town. Nobody has got off here since the fifth of June, 1924.',
  train: 'Light in the tunnel. It is not slowing down.',
  posters: [
    ['Kempton’s Cocoa', 'Sustaining · Nourishing · 4½d the tin', 'cup'],
    ['Summer Sale', 'Hallam & Blythe, Drapers · Commences Monday June 16th', 'sun'],
    ['The Heath by Tram', 'Fresh air for tuppence', 'hill'],
    ['Whitsun Fête', 'Palace Fields · Bands · Fireworks at dusk', 'star'],
    ['Pargeter’s Linctus', 'For the chest · Of all chemists', 'bottle'],
  ],
  notice: ['UNDERGROUND', 'NOTICE', ['This station is CLOSED until further notice.', 'Passengers are requested to use Camden Town or Kentish Town stations.'], '5th June 1924'],
  name: '· CASTLE · ROAD · — fired into the tiles, under a coat of old paint. The name the station was built under.',
  board: 'SOUTH KENTISH TOWN. A solid red disc behind the name bar: the sign as it was before the ring.',
  arch: 'An archway to the lifts, bricked up. The mortar is older than anyone you know.',
  legend: 'WAY OUT → (the tiles point at the bricked-up arch)',
  shelter: 'SHELTER · FIRST AID POST → — stencilled in 1940, when people slept here. The bunks went after the war.',
  dust: 'Dust, thick and even. Yours are the only footprints.',
};

// The ticket hall and its gate line (world/seg_hall.js, game/gates.js).
// "Seek assistance" is what the real gates' displays say; `voice` is spoken
// (a voice clip).
export const GATES = {
  approach: 'The ticket hall. The gates are shut. Touch your card on a yellow reader.',
  reject: 'Two low beeps. Every gate shows a red cross. The display says SEEK ASSISTANCE.',
  voice: 'Seek assistance. There is no one here to assist you.',
  accept: 'One clean beep. Green arrows. Every gate in the line opens at once.',
  out: 'Hampstead. Heath Street. The air is cold and smells of rain.',
  booth: 'Assistance. The blind is down. On the shelf inside, a mug of tea has a skin on it.',
  machine: 'Machine closed. It has been closed since the ticket office was.',
  window: 'TICKETS, in the old tiles, over a shuttered window. Nobody has sold one here for years.',
  wayout: 'Way out ↑ (black on yellow)',
  thought: 'Morning! If you can read this, you found the way out. Mind how you go.',
};

// Slightly wrong.
export const AMBIENT_ODD = [
  'This station is now closed. Please make your way to the way out. If you can.',
  'There is a good service on the Northern line, and on all other lines that still exist.',
  'Please keep your belongings with you. Unattended belongings may be remembered.',
  'Customers are reminded that the last train has departed. It was not your train.',
  'This is {station}. This has always been {station}.',
  'Please stand behind the yellow line. A little further. Thank you.',
  'Would the passenger on the platform please stop looking at the tunnel.',
  'Please do not count the stairs.',
  'The next train does not stop at {next}. The next train does not stop.',
  'This is {station}. The next station is {station}.',
];

// Clearly not staff.
export const AMBIENT_STRANGE = [
  'We can see you on the cameras. You look tired.',
  'Mind the gap. The gap is minding you.',
  'This is {station}. You have been here before. You will be here again.',
  'Please make your way to the way out. It has moved. We are sorry for any inconvenience.',
  'There are no delays. There is nothing left to be delayed.',
  'You are walking the right way. That is what worries us.',
  'This is North End. This station was never opened. Please do not alight here.',
  'Please do not turn round.',
];

// The Customer Information board on the first platform: the rules of the
// station, once, in one place, facing you as you step off the train. (The
// staff notices further on repeat them one at a time; nothing at a junction
// says them aloud any more, except the announcement that is itself the clue.)
// `keys` are the staff notices it makes redundant once it has been read.
export const CUSTOMER_INFO = {
  title: 'Customer Information',
  intro: 'This station is closed. To find the way out:',
  rules: [
    'Follow the yellow and black signs that say “Way out”. Any other sign was not put up by us.',
    'All station clocks run forwards. Never walk under a clock that runs backwards.',
    'Announcements after a rising chime are from staff. A falling chime is not staff: do the opposite of what it says.',
    'The way out is at Hampstead, the last station up the line and the deepest: up its stairs. A wrong turn takes you two stations back.',
    '“Way out” is listed on the indicator boards. If its minutes go up, you went wrong.',
  ],
  foot: 'Thank you for travelling on the Northern line.',
  keys: ['yellow', 'chime', 'clock', 'line', 'board'],
};
export const customerInfoText = () => `${CUSTOMER_INFO.intro}\n${CUSTOMER_INFO.rules.map((r, i) => `${i + 1}. ${r}`).join('\n')}`;

// The passenger lift (world/seg_lift.js, game/lifts.js). What it says aloud
// is the plain modern wording; the notices are as photographed
// (REFERENCES.md, "The lift, round 4").
export const LIFT_TEXT = {
  clear: 'Please stand clear of the doors.',
  closing: 'Doors closing.',
  up: 'This lift is going up.',
  down: 'This lift is going down.',
  // Now and then (never on your first ride) it adds a sentence, in the same
  // calm voice and after the same real line it always says:
  //   "There is no need to select a floor. Your floor has been selected for you."
  //   "Please stand clear of the doors. You are expected on the next level."
  //   "This lift is going down. We know where you are going."
  //   "This lift is going down. It was always going down."   (rare, and late)
  odd: {
    select: ['There is no need to select a floor.', 'Your floor has been selected for you.'],
    expected: 'You are expected on the next level.',
    know: 'We know where you are going.',
    always: 'It was always going down.',
  },
  signUp: 'Way out (yellow on black) · ↑ Lifts to street\nOn the back: To the trains · Northern line',
  signDown: 'Northern line · ↑ Lifts\nOn the back: To the trains · Northern line',
  notice: 'AUTOMATIC SERVICE. — NEXT LIFT ▸ — Please pass right inside the lift.',
  panel: 'LIFT 1. A small dark window, a speaker, a yellow ALARM BUTTON. There are no buttons for floors: it only goes to one other place.',
  hint: 'Lift 1. Automatic service: the doors are opening for you.',
};

// Said once, a few seconds after the game starts.
export const WELCOME = 'This station is now closed. Please read the customer information notice on the platform, then make your way to the way out.';

// Staff notices: the rare clues that teach the rules of the station.
// Each: { title, text, key }.
export const NOTICES = [
  { key: 'yellow', title: 'STAFF NOTICE', text: 'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.' },
  { key: 'line', title: 'STAFF NOTICE', text: 'Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. Hampstead is the deepest station on the network, and the way out is at the top of its stairs. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards.' },
  { key: 'chime', title: 'STAFF NOTICE', text: 'Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you.' },
  { key: 'clock', title: 'STAFF NOTICE', text: 'All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock.' },
  { key: 'board', title: 'STAFF NOTICE', text: 'The indicator boards do not lie. "Way out" is listed with the trains. Count its minutes down. If they go up, you went wrong.' },
  { key: 'tiles', title: 'STAFF NOTICE', text: 'Every station on this line was given its own tile colours, so that passengers could tell them apart at a glance. If the tiles beyond a gate are colours you have already walked through, you have gone back down the line.' },
  { key: 'gate', title: 'STAFF NOTICE', text: 'Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it.' },
  { key: 'symbol', title: 'STAFF NOTICE', text: 'The roundel is a red ring and a blue bar. One ring. One bar, level. If a line diagram shows a station you do not know — North End, South Kentish Town, City Road — do not alight there. Report it to — the rest of this notice has been torn away.' },
  { key: 'whiteboard', title: 'STAFF NOTICE', text: 'The whiteboards are written each morning by the duty staff, who sign them with their own name. A board signed by anyone else, or by no one, was not written by us. Take no directions from it.' },
  { key: 'train', title: 'NIGHT STAFF', text: 'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"' },
];

// (The whiteboards' "Thought for the day" is in thoughts.js, the free
// newspaper's front pages in paper.js.)

// Poster copy: [headline, strapline]. Ordinary ones…
export const POSTERS = [
  ['Travel light', 'Leave it at home'],
  ['Stand on the right', 'Walk on the left'],
  ['Please hold the handrail', 'Escalators can be unforgiving'],
  ['See it. Say it.', 'Someone will sort it'],
  ['The Seaside', 'Only an hour from the city'],
  ['Night classes', 'Learn something before morning'],
  ['Brightwell Tea', 'Still the same after all these years'],
  ['Visit the Gardens', 'Open daily until dusk'],
  ['Late again?', 'Blame the clocks'],
  ['Evening Courier', 'All the news that happened'],
  ['Carry less', 'Arrive sooner'],
  ['Hartley’s Mints', 'Curiously persistent'],
  ['The Heath', 'Fresh air, four stops north'],
  ['Night service', 'Does not run tonight'],
  ['Keep left', 'Unless it says keep right'],
  ['Lost property', 'It will turn up at Baker Street'],
  ['Camden Lock Market', 'Open Sundays. Closed now'],
];

// …and ones that have gone wrong.
export const POSTERS_ODD = [
  ['Have you seen this passenger?', 'Neither have we'],
  ['You are doing well', 'Keep walking'],
  ['The Seaside', 'It is not this way'],
  ['Stand on the right', 'Stand very still'],
  ['Still here?', 'So are we'],
  ['Visit the Gardens', 'They were never open'],
  ['Night classes', 'You are already enrolled'],
  ['Do not read this poster', 'Thank you'],
  ['Travel light', 'You will not need any of it'],
  ['Missing', 'One exit. Answers to "Way out"'],
];
