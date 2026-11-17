// All the words: announcements, staff notices (the rare clues) and the
// copy on posters. Eerie, never gory.

// Ordinary announcements.
export const AMBIENT = [
  'This station is now closed. Please make your way to the way out.',
  'Please mind the gap between the train and the platform.',
  'Stand clear of the doors, please.',
  'Please keep your belongings with you at all times.',
  'There is a good service on all lines.',
  'Customers are reminded that the last train has departed.',
  'Please stand behind the yellow line.',
  'This is {station}. Please follow the signs for the way out.',
  'Please take care on the stairs and hold the handrail.',
];

// Slightly wrong.
export const AMBIENT_ODD = [
  'This station is now closed. Please make your way to the way out. If you can.',
  'There is a good service on all lines that still exist.',
  'Please keep your belongings with you. Unattended belongings may be remembered.',
  'Customers are reminded that the last train has departed. It was not your train.',
  'This is {station}. This has always been {station}.',
  'Please stand behind the yellow line. A little further. Thank you.',
  'Would the passenger on the platform please stop looking at the tunnel.',
  'Please do not count the stairs.',
  'The next train will not be stopping. The next train will not be.',
];

// Clearly not staff.
export const AMBIENT_STRANGE = [
  'We can see you on the cameras. You look tired.',
  'Mind the gap. The gap is minding you.',
  'This is {station}. You have been here before. You will be here again.',
  'Please make your way to the way out. It has moved. We are sorry for any inconvenience.',
  'There are no delays. There is nothing left to be delayed.',
  'You are walking the right way. That is what worries us.',
  'Please do not turn round.',
];

// Staff notices: the rare clues that teach the rules of the station.
// Each: { title, text, key }.
export const NOTICES = [
  { key: 'yellow', title: 'STAFF NOTICE', text: 'Our way out signs are black lettering on yellow, and they say "Way out" — capital W, small o. Anything else was not put up by us. Do not follow it.' },
  { key: 'chime', title: 'STAFF NOTICE', text: 'Our announcements begin with a chime that RISES. If the chime falls, it is not a member of staff speaking. Do the opposite of what it tells you.' },
  { key: 'clock', title: 'STAFF NOTICE', text: 'All station clocks run forwards. If you find one running backwards you have come the wrong way. Do not go under a backwards clock.' },
  { key: 'board', title: 'STAFF NOTICE', text: 'The indicator boards do not lie. "Way out" is listed as a destination. Count the minutes down. If they go up, you went wrong.' },
  { key: 'gate', title: 'STAFF NOTICE', text: 'Gates close behind the last passenger. This is normal. Do not wait at a closed gate. Nothing is coming to open it.' },
  { key: 'symbol', title: 'STAFF NOTICE', text: 'The station symbol is a red ring and a blue bar. One ring. One bar, level. Report any others to — the rest of this notice has been torn away.' },
  { key: 'up', title: 'NIGHT STAFF', text: 'Five right turns and you are out, if every one of them is right. One wrong turn costs you two. — written in biro underneath: "it is counting too"' },
];

// Whiteboard "thought of the day" — flavour, sometimes useful.
export const WHITEBOARD = [
  'Service information: Good service on all lines. (All of them?)',
  'Thought for the day: The way out is always signed. Not every sign is the way out.',
  'Thought for the day: If in doubt, listen. Then ask who is speaking.',
  'Service information: This station closed at 00:47. If you are reading this, please leave.',
  'Lost property: one umbrella, one left glove, one passenger.',
  'Thought for the day: A clock is only wrong in one direction.',
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
