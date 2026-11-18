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
  { key: 'train', title: 'NIGHT STAFF', text: 'Trains still run through after the last train. They are not in service. Do not board. Stand behind the yellow line and let it go. — written in biro underneath: "it stops anyway"' },
];

// Whiteboard "thought of the day" — flavour, sometimes useful.
export const WHITEBOARD = [
  'Service information: Good service on all lines. (All of them?)',
  'Thought for the day: The way out is always signed. Not every sign is the way out.',
  'Thought for the day: If in doubt, listen. Then ask who is speaking.',
  'Service information: This station closed at 00:47. If you are reading this, please leave.',
  'Lost property: one umbrella, one left glove, one passenger.',
  'Thought for the day: A clock is only wrong in one direction.',
  'Northern line: Good service. Bank branch: Good service. This platform: closed.',
  'Thought for the day: Mornington Crescent. (You cannot say that yet.)',
  'Lifts out of service. Please use the 320 steps. Do not count them.',
];

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
