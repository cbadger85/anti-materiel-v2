export const armies: Army[] = [
  {
    name: 'PanOceania',
    image: 'pano.svg',
    sectorials: [
      {
        name: 'PanOceania',
        image: 'pano.svg',
      },
      {
        name: 'Shock Army of Acontecimento',
        image: 'shock-army.svg',
      },
      {
        name: 'Military Orders',
        image: 'military-orders.svg',
      },
      {
        name: 'Neoterran Capitaline Army',
        image: 'neoterra.svg',
      },
      {
        name: 'Varuna Immediate Reaction Division',
        image: 'varuna.svg',
      },
      {
        name: `Svalarheima's Winter Force`,
        image: 'svalarheima.svg',
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
      },
      {
        name: 'Imperial Service',
        image: 'iss.svg',
      },
      {
        name: 'Invincible Army',
        image: 'invincible-army.svg',
      },
      {
        name: 'The White Banner Army',
        image: 'white-banner.svg',
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
      },
      {
        name: 'Caledonian Highlander Army',
        image: 'caledonia.svg',
      },
      {
        name: 'Force de Résponse Rapide Merovingienne',
        image: 'mrrf.svg',
      },
      {
        name: 'USAriadna Ranger Force',
        image: 'usariadna.svg',
      },
      {
        name: 'Tartary Army Corps',
        image: 'tak.svg',
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
      },
      {
        name: 'Hassassin Bahram',
        image: 'hassassins.svg',
      },
      {
        name: 'Qapu Khalqi',
        image: 'qk.svg',
      },
      {
        name: 'Ramah Taskforce',
        image: 'ramah.svg',
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
      },
      {
        name: 'Jurisdictionial Command of Corregidor',
        image: 'corregidor.svg',
      },
      {
        name: 'Jurisdictionial Command of Bakunin',
        image: 'bakunin.svg',
      },
      {
        name: 'Jurisdictionial Command of Tunguska',
        image: 'tunguska.svg',
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
      },
      {
        name: 'Morat Agression Force',
        image: 'morats.svg',
      },
      {
        name: 'Shasvastii Expeditionary Force',
        image: 'shasvastii.svg',
      },
      {
        name: 'Onyx Contact Force',
        image: 'onyx.svg',
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
      },
      {
        name: 'Steel Phalanx',
        image: 'steel-phalanx.svg',
      },
      {
        name: 'Operations Subsection of the S.S.S.',
        image: 'oss.svg',
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
      },
      {
        name: 'Japanese Secessionist Army',
        image: 'jsa.svg',
      },
      {
        name: 'Ikari Company',
        image: 'ikari.svg',
      },
      {
        name: 'Starco. Free Company of the Star',
        image: 'starco.svg',
      },
      {
        name: 'Spiral Corps',
        image: 'spiral.svg',
      },
      {
        name: 'Foreign Company',
        image: 'foreign-company.svg',
      },
      {
        name: 'Dahshat Company',
        image: 'dashat.svg',
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
