import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoPailloteCamarguePageBody } from '@/components/page-bodies/seo/paillote-camarguePageBody';
import pailloteJsonLd from '@/lib/jsonld/seo/paillote-camargue.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoPaillote;

export default function SeoPailloteCamarguePage() {
  return (
    <PageShell jsonLd={pailloteJsonLd as unknown[]}>
      <SeoPailloteCamarguePageBody />
    </PageShell>
  );
}
