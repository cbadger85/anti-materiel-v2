export const armies: Army[] = [
  {
    name: 'PanOceania',
    image: 'images/pano.svg',
    sectorials: [
      {
        name: 'PanOceania',
        image: 'images/pano.svg',
      },
      {
        name: 'Shock Army of Acontecimento',
        image: 'images/shock-army.svg',
      },
      {
        name: 'Military Orders',
        image: 'images/military-orders.svg',
      },
      {
        name: 'Neoterran Capitaline Army',
        image: 'images/neoterra.svg',
      },
      {
        name: 'Varuna Immediate Reaction Division',
        image: 'images/varuna.svg',
      },
      {
        name: `Svalarheima's Winter Force`,
        image: 'images/svalarheima.svg',
      },
    ],
  },
  {
    name: 'Yu Jing',
    image: 'images/yu-jing.svg',
    sectorials: [
      {
        name: 'Yu Jing',
        image: 'images/yu-jing.svg',
      },
      {
        name: 'Imperial Service',
        image: 'images/iss.svg',
      },
      {
        name: 'Invincible Army',
        image: 'images/invincible-army.svg',
      },
      {
        name: 'The White Banner Army',
        image: 'images/white-banner.svg',
      },
    ],
  },
  {
    name: 'Ariadna',
    image: 'images/ariadna.svg',
    sectorials: [
      {
        name: 'Ariadna',
        image: 'images/ariadna.svg',
      },
      {
        name: 'Caledonian Highlander Army',
        image: 'images/caledonia.svg',
      },
      {
        name: 'Force de Résponse Rapide Merovingienne',
        image: 'images/mrrf.svg',
      },
      {
        name: 'USAriadna Ranger Force',
        image: 'images/usariadna.svg',
      },
      {
        name: 'Tartary Army Corps',
        image: 'images/tak.svg',
      },
    ],
  },
  {
    name: 'Haqqislam',
    image: 'images/haqq.svg',
    sectorials: [
      {
        name: 'Haqqislam',
        image: 'images/haqq.svg',
      },
      {
        name: 'Hassassin Bahram',
        image: 'images/hassassins.svg',
      },
      {
        name: 'Qapu Khalqi',
        image: 'images/qk.svg',
      },
      {
        name: 'Ramah Taskforce',
        image: 'images/ramah.svg',
      },
    ],
  },
  {
    name: 'Nomads',
    image: 'images/nomads.svg',
    sectorials: [
      {
        name: 'Nomads',
        image: 'images/nomads.svg',
      },
      {
        name: 'Jurisdicitonial Command of Corregidor',
        image: 'images/corregidor.svg',
      },
      {
        name: 'Jurisdicitonial Command of Bakunin',
        image: 'images/bakunin.svg',
      },
      {
        name: 'Jurisdicitonial Command of Tunguska',
        image: 'images/tunguska.svg',
      },
    ],
  },
  {
    name: 'Combined Army',
    image: 'images/combined-army.svg',
    sectorials: [
      {
        name: 'Combined Army',
        image: 'images/combined-army.svg',
      },
      {
        name: 'Morat Agression Force',
        image: 'images/morats.svg',
      },
      {
        name: 'Shasvastii Expeditionary Force',
        image: 'images/shasvastii.svg',
      },
      {
        name: 'Onyx Contact Force',
        image: 'images/onyx.svg',
      },
    ],
  },
  {
    name: 'ALEPH',
    image: 'images/aleph.svg',
    sectorials: [
      {
        name: 'ALEPH',
        image: 'images/aleph.svg',
      },
      {
        name: 'Steel Phalanx',
        image: 'images/steel-phalanx.svg',
      },
      {
        name: 'Operations Subsection of the S.S.S.',
        image: 'images/oss.svg',
      },
    ],
  },
  {
    name: 'Tohaa',
    image: 'images/tohaa.svg',
    sectorials: [
      {
        name: 'Tohaa',
        image: 'images/tohaa.svg',
      },
    ],
  },
  {
    name: 'Non-Aligned Armies',
    image: 'images/na2.svg',
    sectorials: [
      {
        name: 'Druze Bayram Security',
        image: 'images/druze.svg',
      },
      {
        name: 'Japanese Secessionist Army',
        image: 'images/jsa.svg',
      },
      {
        name: 'Ikari Company',
        image: 'images/ikari.svg',
      },
      {
        name: 'Starco. Free Company of the Star',
        image: 'images/starco.svg',
      },
      {
        name: 'Spiral Corps',
        image: 'images/spiral.svg',
      },
      {
        name: 'Foreign Company',
        image: 'images/foreign-company.svg',
      },
      {
        name: 'Dahshat Company',
        image: 'images/dashat.svg',
      },
    ],
  },
  {
    name: 'O-12',
    image: 'images/o-12.svg',
    sectorials: [
      {
        name: 'O-12',
        image: 'images/o-12.svg',
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
  'Jurisdicitonial Command of Corregidor',
  'Jurisdicitonial Command of Bakunin',
  'Jurisdicitonial Command of Tunguska',
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
