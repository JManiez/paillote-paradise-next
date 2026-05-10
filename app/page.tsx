import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { HomePageBody } from '@/components/page-bodies/homePageBody';
import homeJsonLd from '@/lib/jsonld/home.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.home;

export default function HomePage() {
  return (
    <PageShell jsonLd={homeJsonLd as unknown[]}>
      <HomePageBody />
    </PageShell>
  );
}
