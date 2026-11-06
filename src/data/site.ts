// Everything a non-developer is likely to change lives here.
// Anything marked TBC shows as "TBC" on the site until you fill it in.

export const event = {
  name: 'JBFE Sea to Sea',
  edition: 'JBFE Sea to Sea South',
  year: 2027,
  dates: '7–11 May',
  datesLong: 'Fri 7 – Tue 11 May 2027',
  startDate: '2027-05-07',
  endDate: '2027-05-11',
  startHotel: 'Trennerys Hotel (Seagulls)',
  midHotel: 'Kob Inn',
  teamsMax: 60,
  teamSize: '2 to 25 riders', // TBC: old pages say 2–6, 2–8 and 2–25
  // Entry link for South 2027. Replace once the event is live on the entries system.
  enterUrl: 'https://entries.redcherryevents.co.za/',
  entriesOpen: true,
  riderHubUrl: 'https://riderapp.redcherryevents.co.za/',
  loginUrl: 'https://entries.redcherryevents.co.za/registrations',
  videoId: '82LaaA-cggw',
};

export const contact = {
  phone: '041 581 5335',
  phoneHref: 'tel:+27415815335',
  email: 'team@redcherryevents.co.za',
  address: '156 Villers Road, Walmer, Gqeberha',
  hours: 'Mon–Thu 8am–5pm · Fri 8am–3pm',
  facebook: 'https://www.facebook.com/seatoseaepic',
  instagram: 'https://www.instagram.com/sea_to_sea_za/',
  organiser: 'https://www.redcherryevents.co.za/',
};

// Prices: leave as null until South 2027 pricing is published (shows "Price TBC").
export const packages = [
  {
    id: 'rider',
    name: 'Rider entry',
    price: null as number | null,
    note: 'Per rider, all four nights',
    items: [
      '4 nights in hotels. No camping.',
      '12 meals over 4 days',
      'Your luggage and fuel moved for you',
      'Water points every day',
      'Full medical backup and chopper standby',
      '3 days of riding on your pick of grade',
      'JBFE Sea to Sea apparel',
      'Free beers at the finish line each day',
    ],
    cta: 'Enter your team',
  },
  {
    id: 'supporter',
    name: 'Supporter entry',
    price: null as number | null,
    note: 'No riding. Max two per team.',
    items: [
      '4 nights in hotels',
      '12 meals over 4 days',
      'JBFE Sea to Sea supporter apparel',
    ],
    cta: 'Add a supporter',
  },
];

export const deposit = null as number | null; // TBC: old pages say R1 500 and R5 000

export const grades = [
  {
    id: 'gold',
    name: 'Gold',
    dots: '●●●',
    who: 'Hard enduro, for riders who love a challenge.',
    body: 'Think Bronze Roof level. Steeper climbs and tighter single track. About 75% of the riding is shared with Silver, so your team still meets up.',
    img: 'climb',
    alt: 'A rider climbing a rocky track through coastal bush',
  },
  {
    id: 'silver',
    name: 'Silver',
    dots: '●●○',
    who: 'For weekend warriors who just want to have fun.',
    body: 'The usual first-timer pick, and the route the kids ride on 65s with long-range tanks. Cliff-top tracks, beaches and villages, with the Adventure route there if you want a quick way home.',
    img: 'track',
    alt: 'A jeep track winding across green hills towards the sea',
  },
  {
    id: 'adventure',
    name: 'Adventure',
    dots: '●○○',
    who: 'Twisty gravel for the big bikes.',
    body: 'Built for the T7, 790 and Africa Twin crowd. Mostly gravel roads with friendly jeep track and a bit of single track thrown in. Around 120 km a day.',
    img: 'coast-aerial',
    alt: 'Aerial view of the Wild Coast with a gravel road along the cliffs',
  },
];

export const days = [
  {
    dow: 'Fri', num: '7', mon: 'May', ride: false,
    label: 'Arrive',
    title: 'Registration at Trennerys',
    meta: 'Goodie bags, helmet check, dinner and the first riders’ briefing. Sleep: Trennerys Hotel (Seagulls).',
  },
  {
    dow: 'Sat', num: '8', mon: 'May', ride: true,
    label: 'Day 1',
    title: 'Trennerys to Kob Inn',
    meta: 'Up the coast through the tribal lands. Refuel and lunch at the water point. Sleep: Kob Inn.',
  },
  {
    dow: 'Sun', num: '9', mon: 'May', ride: true,
    label: 'Day 2',
    title: 'Kob Inn loop',
    meta: 'Out and back from Kob Inn, so no packing up. Home in time for Beer O’Clock. Sleep: Kob Inn.',
  },
  {
    dow: 'Mon', num: '10', mon: 'May', ride: true,
    label: 'Day 3',
    title: 'Kob Inn to Trennerys',
    meta: 'Back down the coast to the finish arch. Prize-giving and medals. Sleep: Trennerys Hotel (Seagulls).',
  },
  {
    dow: 'Tue', num: '11', mon: 'May', ride: false,
    label: 'Depart',
    title: 'Done and Dusted!',
    meta: 'Breakfast, load the bakkie and head home.',
  },
];

export const typicalDay = [
  ['06:30', 'Breakfast'],
  ['07:30', 'Luggage and fuel to the truck'],
  ['08:00', 'Ride out'],
  ['Midday', 'Water point: lunch, fuel, cold drinks'],
  ['15:00', 'Most teams are in'],
  ['16:00', 'Beer O’Clock'],
  ['19:00', 'Dinner'],
  ['20:30', 'Riders’ briefing for tomorrow'],
];

export const sponsors = {
  title: { name: 'JBFE', href: 'https://www.jbfe.co.za/', logo: '/logos/jbfe.png' },
  supporters: [
    { name: 'Supermoist', href: 'https://supermoist.co.za/', logo: '/logos/smoist.png' },
    { name: 'Green Motion', href: null, logo: '/logos/gmotion.png' },
    { name: 'Eastern Cape Motors', href: 'https://easterncapemotors.co.za/', logo: '/logos/ecmp.png' },
    { name: 'Oxygen Tyres', href: null, logo: '/logos/otyres.png' },
  ],
};

export const otherEvents = [
  { name: 'Inner City Enduro', href: 'https://innercityenduro.co.za/' },
  { name: 'Sea to Ski', href: 'http://www.seatoski.co.za/' },
  { name: 'Rallye Raid', href: 'https://www.rallyeraid.co.za/' },
  { name: 'Dirt Bike Tours', href: 'http://www.dirtbiketours.co.za/' },
];

export const rand = (n: number | null) =>
  n == null ? 'Price TBC' : 'R' + n.toLocaleString('en-ZA').replace(/,/g, ' ').replace(/ /g, ' ');
