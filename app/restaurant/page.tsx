import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.restaurant;

export default function RestaurantPage() {
  const { htmlContent, jsonLd } = loadPage('restaurant');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
