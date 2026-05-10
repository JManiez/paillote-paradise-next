import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoSoireeDimancheAiguesMortesPageBody } from '@/components/page-bodies/seo/soiree-dimanche-aigues-mortesPageBody';
import soireeDimancheJsonLd from '@/lib/jsonld/seo/soiree-dimanche-aigues-mortes.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoSoireeDimanche;

export default function SeoSoireeDimanchePage() {
  return (
    <PageShell jsonLd={soireeDimancheJsonLd as unknown[]}>
      <SeoSoireeDimancheAiguesMortesPageBody />
    </PageShell>
  );
}
