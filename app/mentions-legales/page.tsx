import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.mentions;

export default function MentionsLegalesPage() {
  const { htmlContent, jsonLd } = loadPage('mentions-legales');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
