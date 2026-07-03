import { SHOTGUN_UNITED_URL } from '@/lib/shotgun';

export type SoireeEventKind = 'united' | 'sbk' | 'latino';

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

const SEASON_START = '2026-05-10';
const SEASON_END = '2026-09-30';

const MONTH_TITLES: Record<number, string> = {
  5: 'Mai — Lancement United',
  6: 'Juin — Début de l’été',
  7: 'Juillet — Haute saison',
  8: 'Août — Plein cœur de saison',
  9: 'Septembre — Closing',
};

function parseIsoLocal(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function toIso(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDateLabel(date: Date, dayPrefix: string): string {
  const day = date.getDate();
  const month = date.toLocaleDateString('fr-FR', { month: 'short' }).replace(/\.$/, '');
  return `${dayPrefix} ${day} ${month}`;
}

function unitedEvent(date: Date, opts?: Partial<SoireeAgendaEvent>): SoireeAgendaEvent {
  const iso = toIso(date);
  const isOpening = iso === SEASON_START;
  const isClosing = iso === '2026-09-27';

  return {
    date: iso,
    dateLabel: formatDateLabel(date, 'Dim.'),
    title: isOpening
      ? 'Ouverture United 2026'
      : isClosing
        ? 'United by La Paillote — Closing saison'
        : 'United by La Paillote',
    kind: 'united',
    tag: isOpening ? 'Ouverture' : isClosing ? 'Closing' : 'United',
    ticketUrl: SHOTGUN_UNITED_URL,
    highlight: isOpening || isClosing,
    ...opts,
  };
}

function sbkEvent(date: Date): SoireeAgendaEvent {
  return {
    date: toIso(date),
    dateLabel: formatDateLabel(date, 'Mer.'),
    title: 'Soirée SBK',
    kind: 'sbk',
    tag: 'SBK',
  };
}

function latinoEvent(date: Date): SoireeAgendaEvent {
  return {
    date: toIso(date),
    dateLabel: formatDateLabel(date, 'Ven.'),
    title: 'Soirée Latino',
    kind: 'latino',
    tag: 'Latino',
  };
}

function buildSeasonEvents(): SoireeAgendaEvent[] {
  const events: SoireeAgendaEvent[] = [];
  const start = parseIsoLocal(SEASON_START);
  const end = parseIsoLocal(SEASON_END);

  for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const day = cursor.getDay();
    if (day === 0) events.push(unitedEvent(new Date(cursor)));
    else if (day === 3) events.push(sbkEvent(new Date(cursor)));
    else if (day === 5) events.push(latinoEvent(new Date(cursor)));
  }

  return events.sort((a, b) => a.date.localeCompare(b.date));
}

function groupByMonth(events: SoireeAgendaEvent[]): SoireeAgendaMonth[] {
  const buckets = new Map<number, SoireeAgendaEvent[]>();

  for (const event of events) {
    const month = parseIsoLocal(event.date).getMonth() + 1;
    const list = buckets.get(month) ?? [];
    list.push(event);
    buckets.set(month, list);
  }

  return [...buckets.entries()]
    .sort(([a], [b]) => a - b)
    .map(([month, monthEvents]) => {
      const united = monthEvents.filter((e) => e.kind === 'united').length;
      const sbk = monthEvents.filter((e) => e.kind === 'sbk').length;
      const latino = monthEvents.filter((e) => e.kind === 'latino').length;
      const parts: string[] = [];
      if (united) parts.push(`${united} dim.`);
      if (sbk) parts.push(`${sbk} mer.`);
      if (latino) parts.push(`${latino} ven.`);

      return {
        id: ['', 'janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'][month] ?? String(month),
        title: MONTH_TITLES[month] ?? `Mois ${month}`,
        summary: parts.join(' · '),
        events: monthEvents,
      };
    });
}

const SEASON_EVENTS = buildSeasonEvents();

/** Calendrier saison 2026 — dimanches United, mercredis SBK, vendredis Latino uniquement. */
export const SOIREES_AGENDA_2026: SoireeAgendaMonth[] = groupByMonth(SEASON_EVENTS);

export const UNITED_EDITIONS_COUNT = SEASON_EVENTS.filter((e) => e.kind === 'united').length;

export const SOIREES_SEASON_EVENTS_COUNT = SEASON_EVENTS.length;
