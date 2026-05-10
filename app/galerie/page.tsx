import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { GaleriePageBody } from '@/components/page-bodies/galeriePageBody';
import galerieJsonLd from '@/lib/jsonld/galerie.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.galerie;

export default function GaleriePage() {
  return (
    <PageShell jsonLd={galerieJsonLd as unknown[]}>
      <GaleriePageBody />
    </PageShell>
  );
}
