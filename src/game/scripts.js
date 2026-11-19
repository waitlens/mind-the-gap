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
    'The way out is up the line, beyond Hampstead. A wrong turn takes you two stations back.',
    '“Way out” is listed on the indicator boards. If its minutes go up, you went wrong.',
  ],
  foot: 'Thank you for travelling on the Northern line.',
  keys: ['yellow', 'chime', 'clock', 'line', 'board'],
};
export const customerInfoText = () => `${CUSTOMER_INFO.intro}\n${CUSTOMER_INFO.rules.map((r, i) => `${i + 1}. ${r}`).join('\n')}`;

// Said once, a few seconds after the game starts.
export const WELCOME = 'This station is now closed. Please read the customer information notice on the platform, then make your way to the way out.';

// Staff notices: the rare clues that teach the rules of the station.
// Each: { title, text, key }.
export const NOTICES = [
  { key: 'yellow', title: 'STAFF NOTICE', text: 'Our way out signs are yellow and black, and nothing else. They say "Way out" — capital W, small o — in plain block lettering, with one arrow. We never write "Exit". Anything else was not put up by us. Do not follow it.' },
  { key: 'line', title: 'STAFF NOTICE', text: 'Going up the line from here: Mornington Crescent, Camden Town, Chalk Farm, Belsize Park, Hampstead. After Hampstead the line comes out into the open air. Each right turn takes you one station up. A wrong turn puts you two back. Read the name boards.' },
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
