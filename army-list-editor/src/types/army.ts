export const armies: Army[] = [
  {
    name: 'PanOceania',
    image: 'pano.svg',
    sectorials: [
      {
        name: 'PanOceania',
        image: 'pano.svg',
        blacklist: [],
      },
      {
        name: 'Shock Army of Acontecimento',
        image: 'shock-army.svg',
        blacklist: [],
      },
      {
        name: 'Military Orders',
        image: 'military-orders.svg',
        blacklist: [],
      },
      {
        name: 'Neoterran Capitaline Army',
        image: 'neoterra.svg',
        blacklist: [],
      },
      {
        name: 'Varuna Immediate Reaction Division',
        image: 'varuna.svg',
        blacklist: [],
      },
      {
        name: `Svalarheima's Winter Force`,
        image: 'svalarheima.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Yu Jing',
    image: 'yu-jing.svg',
    sectorials: [
      {
        name: 'Yu Jing',
        image: 'yu-jing.svg',
        blacklist: [],
      },
      {
        name: 'Imperial Service',
        image: 'iss.svg',
        blacklist: [],
      },
      {
        name: 'Invincible Army',
        image: 'invincible-army.svg',
        blacklist: [],
      },
      {
        name: 'The White Banner Army',
        image: 'white-banner.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Ariadna',
    image: 'ariadna.svg',
    sectorials: [
      {
        name: 'Ariadna',
        image: 'ariadna.svg',
        blacklist: [],
      },
      {
        name: 'Caledonian Highlander Army',
        image: 'caledonia.svg',
        blacklist: [],
      },
      {
        name: 'Force de Résponse Rapide Merovingienne',
        image: 'mrrf.svg',
        blacklist: [],
      },
      {
        name: 'USAriadna Ranger Force',
        image: 'usariadna.svg',
        blacklist: [],
      },
      {
        name: 'Tartary Army Corps',
        image: 'tak.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Haqqislam',
    image: 'haqq.svg',
    sectorials: [
      {
        name: 'Haqqislam',
        image: 'haqq.svg',
        blacklist: [],
      },
      {
        name: 'Hassassin Bahram',
        image: 'hassassins.svg',
        blacklist: [],
      },
      {
        name: 'Qapu Khalqi',
        image: 'qk.svg',
        blacklist: [],
      },
      {
        name: 'Ramah Taskforce',
        image: 'ramah.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Nomads',
    image: 'nomads.svg',
    sectorials: [
      {
        name: 'Nomads',
        image: 'nomads.svg',
        blacklist: [],
      },
      {
        name: 'Jurisdictionial Command of Corregidor',
        image: 'corregidor.svg',
        blacklist: [],
      },
      {
        name: 'Jurisdictionial Command of Bakunin',
        image: 'bakunin.svg',
        blacklist: [],
      },
      {
        name: 'Jurisdictionial Command of Tunguska',
        image: 'tunguska.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Combined Army',
    image: 'combined-army.svg',
    sectorials: [
      {
        name: 'Combined Army',
        image: 'combined-army.svg',
        blacklist: [],
      },
      {
        name: 'Morat Agression Force',
        image: 'morats.svg',
        blacklist: [],
      },
      {
        name: 'Shasvastii Expeditionary Force',
        image: 'shasvastii.svg',
        blacklist: [],
      },
      {
        name: 'Onyx Contact Force',
        image: 'onyx.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'ALEPH',
    image: 'aleph.svg',
    sectorials: [
      {
        name: 'ALEPH',
        image: 'aleph.svg',
        blacklist: [],
      },
      {
        name: 'Steel Phalanx',
        image: 'steel-phalanx.svg',
        blacklist: [],
      },
      {
        name: 'Operations Subsection of the S.S.S.',
        image: 'oss.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Tohaa',
    image: 'tohaa.svg',
    sectorials: [
      {
        name: 'Tohaa',
        image: 'tohaa.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'Non-Aligned Armies',
    image: 'na2.svg',
    sectorials: [
      {
        name: 'Druze Bayram Security',
        image: 'druze.svg',
        blacklist: [],
      },
      {
        name: 'Japanese Secessionist Army',
        image: 'jsa.svg',
        blacklist: [],
      },
      {
        name: 'Ikari Company',
        image: 'ikari.svg',
        blacklist: [],
      },
      {
        name: 'Starco. Free Company of the Star',
        image: 'starco.svg',
        blacklist: [],
      },
      {
        name: 'Spiral Corps',
        image: 'spiral.svg',
        blacklist: [],
      },
      {
        name: 'Foreign Company',
        image: 'foreign-company.svg',
        blacklist: [],
      },
      {
        name: 'Dahshat Company',
        image: 'dashat.svg',
        blacklist: [],
      },
    ],
  },
  {
    name: 'O-12',
    image: 'o-12.svg',
    sectorials: [
      {
        name: 'O-12',
        image: 'o-12.svg',
        blacklist: [],
      },
    ],
  },
];

const armyNames = [
  'PanOceania',
  'Yu Jing',
  'Ariadna',
  'Haqqislam',
  'Nomads',
  'Combined Army',
  'ALEPH',
  'Tohaa',
  'Non-Aligned Armies',
  'O-12',
] as const;

export type ArmyName = typeof armyNames[number];

export type Army = {
  image: string;
  name: ArmyName;
  sectorials: {
    name: Sectorial;
    image: string;
    blacklist: string[];
  }[];
};

export const sectorials = [
  'PanOceania',
  'Shock Army of Acontecimento',
  'Military Orders',
  'Neoterran Capitaline Army',
  'Varuna Immediate Reaction Division',
  `Svalarheima's Winter Force`,
  'Yu Jing',
  'Imperial Service',
  'Invincible Army',
  'The White Banner Army',
  'Ariadna',
  'Caledonian Highlander Army',
  'Force de Résponse Rapide Merovingienne',
  'USAriadna Ranger Force',
  'Tartary Army Corps',
  'Haqqislam',
  'Qapu Khalqi',
  'Hassassin Bahram',
  'Ramah Taskforce',
  'Nomads',
  'Jurisdictionial Command of Corregidor',
  'Jurisdictionial Command of Bakunin',
  'Jurisdictionial Command of Tunguska',
  'Combined Army',
  'Morat Agression Force',
  'Shasvastii Expeditionary Force',
  'Onyx Contact Force',
  'ALEPH',
  'Steel Phalanx',
  'Operations Subsection of the S.S.S.',
  'Tohaa',
  'Druze Bayram Security',
  'Japanese Secessionist Army',
  'Ikari Company',
  'Starco. Free Company of the Star',
  'Spiral Corps',
  'Foreign Company',
  'Dahshat Company',
  'O-12',
  'NA-2 Mercenaries',
] as const;

export type Sectorial = typeof sectorials[number];
