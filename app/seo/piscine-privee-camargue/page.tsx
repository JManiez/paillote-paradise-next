import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoPiscinePriveeCamarguePageBody } from '@/components/page-bodies/seo/piscine-privee-camarguePageBody';
import piscineJsonLd from '@/lib/jsonld/seo/piscine-privee-camargue.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoPiscine;

export default function SeoPiscinePriveePage() {
  return (
    <PageShell jsonLd={piscineJsonLd as unknown[]}>
      <SeoPiscinePriveeCamarguePageBody />
    </PageShell>
  );
}
