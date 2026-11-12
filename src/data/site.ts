export const site = {
  name: 'The Star Chamber',
  fullName: 'The Star Chamber Arcade',
  tagline: "Athens, Ohio's only arcade.",
  description:
    "The Star Chamber is Athens, Ohio's only arcade. Arcade games and pinball, beer and boozy seltzers, hard scoop ice cream, novelty candy, and fun!",
  address: {
    street: '74 N Court Street, Suite 001',
    city: 'Athens',
    region: 'OH',
    regionLong: 'Ohio',
    zip: '45701',
  },
  entranceNote: 'Enter on Fern Street — look for the signs! We are right under our friends at Hot Box Chicken.',
  phone: '740-594-0400',
  email: 'thestarchamberarcade@gmail.com',
  instagram: 'https://www.instagram.com/thestarchamberarcade/',
  facebook: 'https://www.facebook.com/p/The-Star-Chamber-Arcade-61579285894701/',
  admission: { price: 5, per: 'half hour' },
};

// day: 0 = Sunday … 6 = Saturday. Times in 24h; close past midnight uses > 24.
export const hours = [
  { day: 1, label: 'Monday', open: 14.5, close: 23, display: '2:30 – 11 pm' },
  { day: 2, label: 'Tuesday', open: 14.5, close: 23, display: '2:30 – 11 pm' },
  { day: 3, label: 'Wednesday', open: 14.5, close: 23, display: '2:30 – 11 pm' },
  { day: 4, label: 'Thursday', open: 14.5, close: 25, display: '2:30 pm – 1 am' },
  { day: 5, label: 'Friday', open: 14.5, close: 25, display: '2:30 pm – 1 am' },
  { day: 6, label: 'Saturday', open: 11, close: 25, display: '11 am – 1 am' },
  { day: 0, label: 'Sunday', open: 11, close: 23, display: '11 am – 11 pm' },
];

export const arcadeGames = [
  '1943', 'After Burner', 'Alien vs. Predator', 'Assault', 'Asteroids', 'Ataxx',
  'Atomic Punk (Bomberman 2)', 'Big Buck Hunter Reloaded', 'Black Emperor', 'Blood Bros.',
  'Burgertime', 'Captain America and the Avengers', 'Centipede', 'Cosmic Avenger',
  'Crazy Taxi', 'Cruisin’ Exotica', 'Cruisin’ USA', 'Crystal Castles', 'Defender',
  'Die Hard Arcade', 'Dig Dug', 'Doctor Mario', 'Donkey Kong', 'Donkey Kong Jr.',
  'Donkey Kong 3', 'Double Dragon 2', 'Elevator Action', 'Final Fight', 'Frogger',
  'Galaga', 'Gauntlet II', 'Gauntlet Dark Legacy', 'Golden Axe', 'Gyruss', 'Heavy Barrel',
  'Hit the Ice', 'Ice Cold Beer', 'Klax', 'Marble Madness', 'Mario Bros.',
  'Marvel vs. Capcom', 'Millipede', 'Moon Patrol', 'Mortal Kombat 3', 'Ms. Pac-Man',
  'NARC', 'NBA Jam', 'NBA Showtime', 'Neo Geo', 'NFL Blitz', 'Pac-Man', 'Pengo', 'Popeye',
  'Q*bert', 'R-Type', 'Rampage World Tour', 'Rampart', 'Renegade', 'Roadblasters',
  'Robotron 2084', 'Sky Shark', 'Sly Spy', 'Smash TV', 'SoulCalibur', 'Space Invaders',
  'Spy Hunter', 'Street Fighter II', 'Sunset Riders', 'Super Hang-On', 'Tapper', 'Tekken Tag Tournament',
  'Tempest', 'Tetris', 'The Simpsons', 'TMNT', 'Toobin’', 'Track and Field', 'Victory Road',
  'Wheel of Fortune', 'X-Men', 'Zaxxon', 'Zookeeper',
];

export const pinballMachines = [
  'Addams Family', 'Attack from Mars', 'Cactus Canyon', 'Creature from the Black Lagoon',
  'Doctor Who', 'Getaway: High Speed 2', 'Godzilla', 'Guns N’ Roses', 'Jaws', 'King Kong',
  'Looney Tunes', 'Pinbot', 'Rick and Morty', 'Scooby-Doo', 'Star Trek: TNG', 'Twilight Zone',
  'Wizard of Oz',
];
