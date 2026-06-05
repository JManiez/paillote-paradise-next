import type { Metadata } from 'next';

export const SITE_URL = 'https://www.pailloteparadise.fr';
export const SITE_NAME = 'La Paillote Paradise';
export const OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpg`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
};

const buildMetadata = (seo: PageSeo): Metadata => ({
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${SITE_URL}${seo.path}` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}${seo.path}`,
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    locale: 'fr_FR',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.ogTitle ?? seo.title,
    description: seo.ogDescription ?? seo.description,
    images: [OG_IMAGE],
  },
});

export const pageSeo = {
  home: buildMetadata({
    title:
      'La Paillote Paradise — Bar à Tapas, Piscine & Soirées à Aigues-Mortes | Domaine du Petit Chaumont',
    description:
      "La Paillote Paradise, paillote privée en Camargue sur domaine viticole. Tapas maison, cocktails, vins du domaine, piscine privée et soirées. Parking gratuit. Domaine du Petit Chaumont, Aigues-Mortes.",
    path: '/',
    ogTitle:
      'La Paillote Paradise — Bar à Tapas, Piscine & Soirées à Aigues-Mortes',
    ogDescription:
      "Paillote privée sur domaine viticole en Camargue. Tapas, cocktails, vins du domaine, piscine privée, soirées. Parking gratuit. Domaine du Petit Chaumont, Aigues-Mortes.",
  }),
  restaurant: buildMetadata({
    title:
      'Bar à Tapas en Camargue — Tapas maison, vins du domaine | La Paillote Paradise Aigues-Mortes',
    description:
      "Bar à tapas en Camargue : tapas méditerranéennes faites maison, vins du Domaine du Petit Chaumont, terrasse face à la piscine. Réservation conseillée à Aigues-Mortes.",
    path: '/restaurant',
  }),
  bar: buildMetadata({
    title:
      'Bar & Cocktails en Camargue — Cocktails signature à Aigues-Mortes | La Paillote Paradise',
    description:
      "Bar à cocktails au cœur de la Camargue : cocktails signature, mocktails raffinés, vins du domaine. Cadre privilégié au bord de la piscine, parking gratuit. Aigues-Mortes.",
    path: '/bar',
  }),
  piscineTransats: buildMetadata({
    title:
      'Piscine & Transats en Camargue — Pool day privé à Aigues-Mortes | La Paillote Paradise',
    description:
      "Piscine privée et transats premium en Camargue. Pool day, journée farniente au bord de l'eau, cocktails et tapas. Parking gratuit, cadre isolé. Aigues-Mortes.",
    path: '/piscine-transats',
  }),
  soirees: buildMetadata({
    title:
      'Soirées & DJ Sets en Camargue — La Grande Soirée du Dimanche | La Paillote Paradise',
    description:
      "Soirées thématiques toute la semaine et la Grande Soirée du Dimanche — l'événement phare en Camargue. DJ Guest, ambiance pool party. Aigues-Mortes.",
    path: '/soirees',
  }),
  privatisation: buildMetadata({
    title:
      'Privatisation & Groupes en Camargue — EVJF, EVG, anniversaires | La Paillote Paradise',
    description:
      "Privatisez La Paillote Paradise pour vos événements : EVJF, EVG, anniversaires, séminaires, mariages. Domaine privé en Camargue, à 5 min d'Aigues-Mortes.",
    path: '/privatisation',
  }),
  galerie: buildMetadata({
    title: 'Galerie photos — La Paillote Paradise en images | Aigues-Mortes',
    description:
      "Découvrez La Paillote Paradise en images : ambiance piscine, soirées, tapas, cocktails, mariages et événements privés en Camargue.",
    path: '/galerie',
  }),
  contact: buildMetadata({
    title:
      'Contact & Réservation — La Paillote Paradise Aigues-Mortes | Domaine du Petit Chaumont',
    description:
      "Réservez votre table, transat ou soirée à La Paillote Paradise. Domaine du Petit Chaumont, Aigues-Mortes — Camargue. Parking gratuit, accès facile.",
    path: '/contact',
  }),
  mentions: buildMetadata({
    title: 'Mentions légales | La Paillote Paradise',
    description: "Mentions légales de La Paillote Paradise — Domaine du Petit Chaumont, Aigues-Mortes.",
    path: '/mentions-legales',
  }),
  privacy: buildMetadata({
    title: 'Politique de confidentialité | La Paillote Paradise',
    description: "Politique de confidentialité de La Paillote Paradise — Domaine du Petit Chaumont, Aigues-Mortes.",
    path: '/politique-confidentialite',
  }),
  // SEO local pages
  seoRestaurant: buildMetadata({
    title:
      'Bar à Tapas à Aigues-Mortes — Restaurant en Camargue | La Paillote Paradise',
    description:
      "Bar à tapas en Camargue à Aigues-Mortes : tapas faites maison, vins du Domaine du Petit Chaumont, terrasse au bord de la piscine. Ouvert de juin à septembre.",
    path: '/seo/restaurant-paillote-aigues-mortes',
  }),
  seoPiscine: buildMetadata({
    title: 'Piscine privée en Camargue — Pool day à Aigues-Mortes | La Paillote Paradise',
    description:
      "Piscine privée en Camargue, transats premium, pool day. Au bord de l'eau, à 5 min d'Aigues-Mortes. Domaine isolé, parking gratuit.",
    path: '/seo/piscine-privee-camargue',
  }),
  seoSoireeDimanche: buildMetadata({
    title:
      'Soirée du Dimanche à Aigues-Mortes — United by La Paillote | La Grande Soirée en Camargue',
    description:
      "United by La Paillote Paradise, la Grande Soirée du Dimanche en Camargue : DJ Guest international, pool party, de 12h à minuit. Aigues-Mortes.",
    path: '/seo/soiree-dimanche-aigues-mortes',
  }),
  seoPaillote: buildMetadata({
    title:
      'Paillote en Camargue — Bar, Piscine & Soirées | La Paillote Paradise Aigues-Mortes',
    description:
      "La paillote incontournable en Camargue : bar à tapas, cocktails, piscine privée et soirées. Domaine du Petit Chaumont, Aigues-Mortes.",
    path: '/seo/paillote-camargue',
  }),
  seoPrivatisation: buildMetadata({
    title:
      'Privatiser un domaine en Camargue — EVJF, EVG, mariages | La Paillote Paradise',
    description:
      "Privatisation d'un domaine viticole en Camargue : EVJF, EVG, anniversaires, mariages, séminaires. Cadre exclusif, piscine, jardin. Aigues-Mortes.",
    path: '/seo/privatisation-domaine-camargue',
  }),
} as const;
