import type { Metadata, Viewport } from 'next';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClientScripts } from '../components/ClientScripts';
import { JsonLd } from '../components/JsonLd';
import { SITE_NAME, SITE_URL, OG_IMAGE } from '../lib/seo';
import '../styles/style.css';
import '../styles/_organic.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Bar à Tapas, Piscine & Soirées à Aigues-Mortes | Domaine du Petit Chaumont`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "La Paillote Paradise, paillote privée en Camargue sur domaine viticole. Tapas maison, cocktails, vins du domaine, piscine privée et soirées. Parking gratuit. Domaine du Petit Chaumont, Aigues-Mortes.",
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/assets/images/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/assets/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'fr_FR',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#1A1E2E',
  width: 'device-width',
  initialScale: 1,
};

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'BarOrPub', 'NightClub'],
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: 'Paillote Paradise',
      description:
        "Paillote privée sur domaine viticole en Camargue. Bar à tapas, cocktails, vins bio du Domaine du Petit Chaumont, piscine privée et soirées à Aigues-Mortes.",
      url: SITE_URL + '/',
      telephone: '+33XXXXXXXXX',
      email: 'contact@pailloteparadise.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Route du Petit Chaumont, Domaine du Petit Chaumont',
        addressLocality: 'Aigues-Mortes',
        postalCode: '30220',
        addressRegion: 'Gard',
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 43.5667, longitude: 4.1833 },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '11:00',
          closes: '19:00',
          validFrom: '2026-04-01',
          validThrough: '2026-09-30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '12:00',
          closes: '23:59',
          validFrom: '2026-04-01',
          validThrough: '2026-09-30',
        },
      ],
      areaServed: ['Aigues-Mortes', 'Grau-du-Roi', 'Montpellier', 'Nîmes', 'Camargue'],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '300',
      },
      sameAs: [
        'https://www.instagram.com/pailloteparadise',
        'https://www.facebook.com/pailloteparadise',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={businessJsonLd} />
      </head>
      <body>
        <div id="pp-header-slot">
          <Header />
        </div>
        <main id="main">{children}</main>
        <div id="pp-footer-slot">
          <Footer />
        </div>
        <ClientScripts />
      </body>
    </html>
  );
}
