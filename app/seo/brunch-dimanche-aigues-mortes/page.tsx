import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoBrunchDimancheAiguesMortesPageBody } from '@/components/page-bodies/seo/brunch-dimanche-aigues-mortesPageBody';
import brunchJsonLd from '@/lib/jsonld/seo/brunch-dimanche-aigues-mortes.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoBrunch;

export default function SeoBrunchDimanchePage() {
  return (
    <PageShell jsonLd={brunchJsonLd as unknown[]}>
      <SeoBrunchDimancheAiguesMortesPageBody />
    </PageShell>
  );
}
