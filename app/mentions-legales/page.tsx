import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/mentions-legales';

export const metadata: Metadata = pageSeo.mentions;

export default function MentionsLegalesPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
