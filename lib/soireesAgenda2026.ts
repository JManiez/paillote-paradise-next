import { SHOTGUN_UNITED_URL } from '@/lib/shotgun';

export type SoireeEventKind = 'united' | 'special' | 'theme' | 'day';

export type SoireeAgendaEvent = {
  date: string;
  dateLabel: string;
  title: string;
  kind: SoireeEventKind;
  tag: string;
  ticketUrl?: string;
  highlight?: boolean;
};

export type SoireeAgendaMonth = {
  id: string;
  title: string;
  summary: string;
  events: SoireeAgendaEvent[];
};

const united = (date: string, dateLabel: string, title: string, opts?: Partial<SoireeAgendaEvent>): SoireeAgendaEvent => ({
  date,
  dateLabel,
  title,
  kind: 'united',
  tag: 'United',
  ticketUrl: SHOTGUN_UNITED_URL,
  ...opts,
});

/** Calendrier saison 2026 — United dès le 10 mai, closing fin septembre. */
export const SOIREES_AGENDA_2026: SoireeAgendaMonth[] = [
  {
    id: 'mai',
    title: 'Mai — Lancement United',
    summary: '4 éditions',
    events: [
      united('2026-05-10', 'Dim. 10 mai', 'Ouverture United 2026', {
        highlight: true,
        tag: 'Ouverture',
      }),
      united('2026-05-17', 'Dim. 17 mai', 'United by La Paillote'),
      united('2026-05-24', 'Dim. 24 mai', 'United by La Paillote'),
      united('2026-05-31', 'Dim. 31 mai', 'United by La Paillote'),
    ],
  },
  {
    id: 'juin',
    title: 'Juin — Début de l’été',
    summary: '5 dates',
    events: [
      united('2026-06-07', 'Dim. 7 juin', 'United by La Paillote'),
      united('2026-06-14', 'Dim. 14 juin', 'United by La Paillote'),
      {
        date: '2026-06-20',
        dateLabel: 'Sam. 20 juin',
        title: 'Fête de la Musique — Concert live',
        kind: 'special',
        tag: 'Spécial',
      },
      united('2026-06-21', 'Dim. 21 juin', 'United · Solstice d’été', { tag: 'Solstice' }),
      united('2026-06-28', 'Dim. 28 juin', 'United by La Paillote'),
    ],
  },
  {
    id: 'juillet',
    title: 'Juillet — Haute saison',
    summary: '6 dates',
    events: [
      united('2026-07-05', 'Dim. 5 juil.', 'United by La Paillote'),
      united('2026-07-12', 'Dim. 12 juil.', 'United by La Paillote'),
      {
        date: '2026-07-13',
        dateLabel: 'Lun. 13 juil.',
        title: 'Veille du 14 juillet — DJ set & ambiance festive',
        kind: 'theme',
        tag: 'Fête nationale',
      },
      {
        date: '2026-07-14',
        dateLabel: 'Mar. 14 juil.',
        title: 'Fête nationale — Feu d’artifice & soirée',
        kind: 'theme',
        tag: 'Fête nationale',
        highlight: true,
      },
      united('2026-07-19', 'Dim. 19 juil.', 'United by La Paillote'),
      united('2026-07-26', 'Dim. 26 juil.', 'Soirée Blanche — All White Party', {
        tag: 'Thème',
        highlight: true,
      }),
    ],
  },
  {
    id: 'aout',
    title: 'Août — Plein cœur de saison',
    summary: '5 éditions United',
    events: [
      united('2026-08-02', 'Dim. 2 août', 'United by La Paillote'),
      united('2026-08-09', 'Dim. 9 août', 'United by La Paillote'),
      united('2026-08-16', 'Dim. 16 août', 'Soirée Mousse — Summer Foam Party', {
        tag: 'Thème',
        highlight: true,
      }),
      united('2026-08-23', 'Dim. 23 août', 'United by La Paillote'),
      united('2026-08-30', 'Dim. 30 août', 'United by La Paillote'),
    ],
  },
  {
    id: 'septembre',
    title: 'Septembre — Closing',
    summary: '4 éditions',
    events: [
      united('2026-09-06', 'Dim. 6 sept.', 'United by La Paillote'),
      united('2026-09-13', 'Dim. 13 sept.', 'United by La Paillote'),
      united('2026-09-20', 'Dim. 20 sept.', 'United by La Paillote'),
      united('2026-09-27', 'Dim. 27 sept.', 'Grande Finale — Closing saison', {
        tag: 'Closing',
        highlight: true,
      }),
    ],
  },
];

export const UNITED_EDITIONS_COUNT = SOIREES_AGENDA_2026.reduce(
  (n, m) => n + m.events.filter((e) => e.kind === 'united').length,
  0,
);
