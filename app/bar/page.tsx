import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { BarPageBody } from '@/components/page-bodies/barPageBody';
import barJsonLd from '@/lib/jsonld/bar.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.bar;

export default function BarPage() {
  return (
    <PageShell jsonLd={barJsonLd as unknown[]}>
      <BarPageBody />
    </PageShell>
  );
}
