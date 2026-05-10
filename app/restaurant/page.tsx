import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { RestaurantPageBody } from '@/components/page-bodies/restaurantPageBody';
import restaurantJsonLd from '@/lib/jsonld/restaurant.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.restaurant;

export default function RestaurantPage() {
  return (
    <PageShell jsonLd={restaurantJsonLd as unknown[]}>
      <RestaurantPageBody />
    </PageShell>
  );
}
