import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/politique-confidentialite';

export const metadata: Metadata = pageSeo.privacy;

export default function PolitiqueConfidentialitePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
