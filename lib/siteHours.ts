/** Libellés horaires officiels — source unique pour tout le site. */
export const SITE_SEASON = 'Ouvert de juin à septembre';

export const SITE_HOURS_DAY = '11h – 19h';
export const SITE_HOURS_EVENING = '19h – 1h';

export const SITE_HOURS_WEEK = 'Mer. – Sam. 11h – 19h';
export const SITE_HOURS_SUNDAY = 'Dim. 12h – 00h (United)';

export const SITE_HOURS_LINE = `${SITE_SEASON} · ${SITE_HOURS_WEEK} · ${SITE_HOURS_SUNDAY}`;

/** Version compacte header mobile */
export const SITE_HOURS_SHORT =
  'Juin–sept. · Mer.–Sam. 11h–19h · Mer. & ven. soirées · Dim. United';

/** Bloc contact (plusieurs lignes) */
export const SITE_HOURS_CONTACT_LINES = [
  SITE_SEASON,
  'Lundi & mardi : fermé',
  `Mercredi : ${SITE_HOURS_DAY} · soirée SBK ${SITE_HOURS_EVENING}`,
  `Jeudi : ${SITE_HOURS_DAY}`,
  `Vendredi : ${SITE_HOURS_DAY} · soirée Latino ${SITE_HOURS_EVENING}`,
  `Samedi : ${SITE_HOURS_DAY}`,
  'Dimanche : 12h – 00h (United)',
] as const;

/** Accroche agenda accueil */
export const SITE_HOURS_AGENDA_LEAD =
  'Mer. → Sam. : piscine, tapas & cocktails · 11h – 19h · Mer. & ven. : soirées 19h – 1h · Dimanche : United de 12h à minuit.';

/** Texte court univers / SEO */
export const SITE_HOURS_SUMMARY =
  'Du Mercredi au Samedi de 11h à 19h (mercredis & vendredis : soirées jusqu’à 1h), et chaque Dimanche jusqu’à minuit pour United';

const SEASON_VALID = {
  validFrom: '2026-06-01',
  validThrough: '2026-09-30',
} as const;

/** Schema.org — horaires jour + soirées Mer./Ven. + dimanche United */
export const SITE_OPENING_HOURS_JSONLD = [
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '11:00',
    closes: '19:00',
    ...SEASON_VALID,
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Wednesday'],
    opens: '19:00',
    closes: '01:00',
    ...SEASON_VALID,
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Friday'],
    opens: '19:00',
    closes: '01:00',
    ...SEASON_VALID,
  },
  {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: ['Sunday'],
    opens: '12:00',
    closes: '23:59',
    ...SEASON_VALID,
  },
];

/** Variante JSON statique (fichiers .json) */
export const SITE_OPENING_HOURS_JSON = SITE_OPENING_HOURS_JSONLD.map(
  ({ '@type': type, ...rest }) => ({ '@type': type, ...rest }),
);
