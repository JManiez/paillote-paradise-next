/** Images et point de focus (object-position) pour les héros de pages intérieures. */
export type PageHeroKey =
  | 'bar'
  | 'restaurant'
  | 'piscine'
  | 'soirees'
  | 'contact'
  | 'galerie'
  | 'privatisation'
  | 'seo-restaurant'
  | 'seo-piscine'
  | 'seo-soiree'
  | 'seo-privatisation'
  | 'seo-paillote';

export type PageHeroConfig = {
  src: string;
  alt: string;
  /** Recadrage desktop — ex. "50% 38%" */
  focus: string;
};

export const PAGE_HERO_IMAGES: Record<PageHeroKey, PageHeroConfig> = {
  bar: {
    src: '/assets/images/universe-bar.jpg',
    alt: 'Bar de La Paillote Paradise, cocktails en bord de piscine en Camargue',
    focus: '55% 52%',
  },
  restaurant: {
    src: '/assets/images/hero-restaurant-2025.jpg',
    alt: 'Bar à tapas La Paillote Paradise — terrasse et piscine sur le domaine viticole',
    focus: '50% 42%',
  },
  piscine: {
    src: '/assets/images/hero-piscine-2025.jpg',
    alt: 'Piscine privée de la Paillote Paradise avec transats et parasols, Aigues-Mortes Camargue',
    focus: '50% 38%',
  },
  soirees: {
    src: '/assets/images/hero-soirees-united.jpg',
    alt: 'United by La Paillote — foule et piscine illuminée, soirée DJ en Camargue',
    focus: '50% 40%',
  },
  contact: {
    src: '/assets/images/hero-contact.jpg',
    alt: 'La Paillote Paradise — terrasse et piscine au Domaine du Petit Chaumont, Aigues-Mortes',
    focus: '50% 45%',
  },
  galerie: {
    src: '/assets/images/hero-galerie.jpg',
    alt: 'La Paillote Paradise — piscine, transats et paillote au Domaine du Petit Chaumont',
    focus: '50% 40%',
  },
  privatisation: {
    src: '/assets/images/privatisation-united-2025.jpg',
    alt: 'Espace privatisé pour groupe à La Paillote Paradise — Aigues-Mortes',
    focus: '50% 42%',
  },
  'seo-restaurant': {
    src: '/assets/images/hero-restaurant-2025.jpg',
    alt: 'Restaurant paillote Aigues-Mortes — La Paillote Paradise, bord de piscine en Camargue',
    focus: '50% 42%',
  },
  'seo-piscine': {
    src: '/assets/images/hero-piscine-2025.jpg',
    alt: 'Piscine privée Camargue — La Paillote Paradise Aigues-Mortes, transats et palmiers',
    focus: '50% 38%',
  },
  'seo-soiree': {
    src: '/assets/images/hero-soirees-united.jpg',
    alt: 'Soirée du dimanche Aigues-Mortes — La Paillote Paradise, foule et DJ en Camargue',
    focus: '50% 40%',
  },
  'seo-privatisation': {
    src: '/assets/images/privatisation-united-2025.jpg',
    alt: 'Privatisation domaine Camargue — La Paillote Paradise, Aigues-Mortes',
    focus: '50% 42%',
  },
  'seo-paillote': {
    src: '/assets/images/hero-piscine-2025.jpg',
    alt: 'Paillote Camargue — La Paillote Paradise, bar restaurant piscine Aigues-Mortes',
    focus: '50% 38%',
  },
};
