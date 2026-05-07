import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.privacy;

export default function PolitiqueConfidentialitePage() {
  const { htmlContent, jsonLd } = loadPage('politique-confidentialite');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
