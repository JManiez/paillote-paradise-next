import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PiscineTransatsPageBody } from '@/components/page-bodies/piscine-transatsPageBody';
import piscineTransatsJsonLd from '@/lib/jsonld/piscine-transats.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.piscineTransats;

export default function PiscineTransatsPage() {
  return (
    <PageShell jsonLd={piscineTransatsJsonLd as unknown[]}>
      <PiscineTransatsPageBody />
    </PageShell>
  );
}
