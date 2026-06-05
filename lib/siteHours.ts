/** Libellés horaires officiels — source unique pour tout le site. */
export const SITE_SEASON = 'Ouvert de juin à septembre';

export const SITE_HOURS_WEEK = 'Mer. – Sam. 12h – 19h';

export const SITE_HOURS_SUNDAY = 'Dim. 12h – 00h (United)';

export const SITE_HOURS_LINE = `${SITE_SEASON} · ${SITE_HOURS_WEEK} · ${SITE_HOURS_SUNDAY}`;

/** Version compacte header mobile */
export const SITE_HOURS_SHORT = 'Juin – sept. · Mer.–Sam. 12h–19h · Dim. 12h–00h';

/** Bloc contact (plusieurs lignes) */
export const SITE_HOURS_CONTACT_LINES = [
  SITE_SEASON,
  'Mercredi → Samedi : 12h – 19h',
  'Dimanche : 12h – 00h (United)',
  'Lundi & mardi fermés',
] as const;
