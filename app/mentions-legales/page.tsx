import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { MentionsLegalesPageBody } from '@/components/page-bodies/mentions-legalesPageBody';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.mentions;

export default function MentionsLegalesPage() {
  return (
    <PageShell>
      <MentionsLegalesPageBody />
    </PageShell>
  );
}
