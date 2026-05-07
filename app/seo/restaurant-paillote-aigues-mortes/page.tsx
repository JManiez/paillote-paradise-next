import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { loadPage } from '../../../lib/loadPage';

export const metadata: Metadata = pageSeo.seoRestaurant;

export default function SeoRestaurantPailloteAiguesMortesPage() {
  const { htmlContent, jsonLd } = loadPage('seo/restaurant-paillote-aigues-mortes');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
