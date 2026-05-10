import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PrivatisationPageBody } from '@/components/page-bodies/privatisationPageBody';
import privatisationJsonLd from '@/lib/jsonld/privatisation.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.privatisation;

export default function PrivatisationPage() {
  return (
    <PageShell jsonLd={privatisationJsonLd as unknown[]}>
      <PrivatisationPageBody />
    </PageShell>
  );
}
