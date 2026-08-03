// Central business information for West John Auto.
// Edit these values to update contact details, services, and reviews site-wide.

export const business = {
  name: 'West John Auto',
  chineseName: '诚信车行',
  tagline: 'Auto Repair & Auto Body',
  since: 1990,
  phoneDisplay: '(516) 931-8582',
  phoneHref: 'tel:+15169318582',
  rating: 4.6,
  reviewCount: 408,
  address: {
    street: '285 W John St',
    city: 'Hicksville',
    state: 'NY',
    zip: '11801',
  },
  mapQuery: '285 W John St, Hicksville, NY 11801',
  website: 'west-john-auto.business.site',
  hours: [
    { day: 'Monday', time: '8:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '8:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: '8:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}

// Services grouped into meaningful categories for clean presentation.
export const serviceGroups = [
  {
    icon: 'engine',
    title: 'Engine & Diagnostics',
    items: [
      'Auto engine diagnostic',
      'Auto engine tuning',
      'Engine repair',
      'General repairs & maintenance',
      'Electrical repair',
      'Auto battery replacement',
    ],
  },
  {
    icon: 'brake',
    title: 'Brakes & Suspension',
    items: [
      'Auto brake repair & replacement',
      'Brake pads & rotors',
      'Steering & suspension repair',
      'Steering & suspension replacement',
      'Wheel alignment',
      'Exhaust system repair & replacement',
    ],
  },
  {
    icon: 'transmission',
    title: 'Transmission',
    items: [
      'Transmission repair',
      'Transmission replacement',
      'Axles & drive shafts',
      'Chassis work',
    ],
  },
  {
    icon: 'ac',
    title: 'A/C & Climate',
    items: [
      'A/C installation & repair',
      'Auto A/C recharge',
      'Auto A/C replacement',
      'Air & cabin filter replacement',
    ],
  },
  {
    icon: 'tire',
    title: 'Tires & Maintenance',
    items: [
      'Tire replacement & change',
      'Tire rotations',
      'Oil change',
      'Wiper blade installation',
      'Auto maintenance',
    ],
  },
  {
    icon: 'body',
    title: 'Auto Body & Glass',
    items: [
      'Body & trim / collision repair',
      'Painting & bumper painting',
      'Auto glass & windshield replacement',
      'Side, rear & sunroof glass',
      'Auto power window repair',
    ],
  },
  {
    icon: 'inspection',
    title: 'Inspections & Emissions',
    items: [
      'NY State vehicle inspection',
      'Vehicle safety inspection',
      'Auto emissions testing',
      'Used car multi-point inspection',
    ],
  },
  {
    icon: 'tesla',
    title: 'EV & Tesla Service',
    items: [
      '100% Original Tesla OEM parts',
      'Tesla repair & body work',
      'Finished inside our shop',
    ],
  },
]

export const reviews = [
  {
    quote:
      'After a quick diagnostic, they’ll offer me some service options to choose. Honest and no pressure.',
    author: 'Google Reviewer',
  },
  {
    quote: 'Hugo and staff really go the extra mile with their service. Highly recommend.',
    author: 'Google Reviewer',
  },
  {
    quote: '10/10 body shop, incredible people who do great work. My car looks brand new.',
    author: 'Google Reviewer',
  },
]
