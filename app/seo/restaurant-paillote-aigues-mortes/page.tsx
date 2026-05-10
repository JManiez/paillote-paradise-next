import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoRestaurantPailloteAiguesMortesPageBody } from '@/components/page-bodies/seo/restaurant-paillote-aigues-mortesPageBody';
import restaurantSeoJsonLd from '@/lib/jsonld/seo/restaurant-paillote-aigues-mortes.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoRestaurant;

export default function SeoRestaurantPaillotePage() {
  return (
    <PageShell jsonLd={restaurantSeoJsonLd as unknown[]}>
      <SeoRestaurantPailloteAiguesMortesPageBody />
    </PageShell>
  );
}
