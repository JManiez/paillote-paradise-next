import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/restaurant';

export const metadata: Metadata = pageSeo.restaurant;

export default function RestaurantPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
