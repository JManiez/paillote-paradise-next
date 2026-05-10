import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { PolitiqueConfidentialitePageBody } from '@/components/page-bodies/politique-confidentialitePageBody';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.privacy;

export default function PolitiqueConfidentialitePage() {
  return (
    <PageShell>
      <PolitiqueConfidentialitePageBody />
    </PageShell>
  );
}
