export const armies = [
  {
    army: 'PanOceania',
    sectorials: [
      'PanOceania',
      'Shock Army of Acontecimento',
      'Military Orders',
      'Neoterran Capitaline Army',
      'Varuna Immediate Reaction Division',
      `Svalarheima's Winter Force`,
    ],
  },
  {
    army: 'Yu Jing',
    sectorials: [
      'Yu Jing',
      'Imperial Service',
      'Invincible Army',
      'The White Banner Army',
    ],
  },
  {
    army: 'Ariadna',
    sectorials: [
      'Ariadna',
      'Caledonian Highlander Army',
      'Force de Résponse Rapide Merovingienne',
      'USAriadna Ranger Force',
      'Tartary Army Corps',
    ],
  },
  {
    army: 'Haqqislam',
    sectorials: [
      'Haqqislam',
      'Hassassin Bahram',
      'Qapu Khalqi',
      'Ramah Taskforce',
    ],
  },
  {
    army: 'Nomads',
    sectorials: [
      'Nomads',
      'Jurisdicitonial Command of Corregidor',
      'Jurisdicitonial Command of Bakunin',
      'Jurisdicitonial Command of Tunguska',
    ],
  },
  {
    army: 'Combined Army',
    sectorials: [
      'Combined Army',
      'Morat Agression Force',
      'Shasvastii Expeditionary Force',
      'Onyx Contact Force',
    ],
  },
  {
    army: 'ALEPH',
    sectorials: [
      'ALEPH',
      'Steel Phalanx',
      'Operations Subsection of the S.S.S.',
    ],
  },
  {
    army: 'Tohaa',
    sectorials: ['Tohaa'],
  },
  {
    army: 'Non-Aligned Armies',
    sectorials: [
      'Druze Bayram Security',
      'Japanese Secessionist Army',
      'Ikari Company',
      'Starco. Free Company of the Star',
      'Spiral Corps',
      'Foreign Company',
      'Dahshat Company',
    ],
  },
  {
    army: 'O-12',
    sectorials: ['O-12'],
  },
] as const;

export type Army = typeof armies[number]['army'];

export const sectorials = [
  ...armies.flatMap(army => army.sectorials),
  'NA-2 Mercenaries',
] as const;

export type Sectorial = typeof sectorials[number];
