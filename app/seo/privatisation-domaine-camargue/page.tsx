import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { SeoPrivatisationDomaineCamarguePageBody } from '@/components/page-bodies/seo/privatisation-domaine-camarguePageBody';
import privatisationSeoJsonLd from '@/lib/jsonld/seo/privatisation-domaine-camargue.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.seoPrivatisation;

export default function SeoPrivatisationDomainePage() {
  return (
    <PageShell jsonLd={privatisationSeoJsonLd as unknown[]}>
      <SeoPrivatisationDomaineCamarguePageBody />
    </PageShell>
  );
}
