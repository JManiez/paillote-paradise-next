import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SoireesPageBody } from '@/components/page-bodies/soireesPageBody';
import soireesJsonLd from '@/lib/jsonld/soirees.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.soirees;

export default function SoireesPage() {
  return (
    <PageShell jsonLd={soireesJsonLd as unknown[]}>
      <SoireesPageBody />
    </PageShell>
  );
}
