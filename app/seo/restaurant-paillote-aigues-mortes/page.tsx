import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { htmlContent, jsonLd } from '../../../lib/pages/seo/restaurant-paillote-aigues-mortes';

export const metadata: Metadata = pageSeo.seoRestaurant;

export default function SeoRestaurantPailloteAiguesMortesPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
