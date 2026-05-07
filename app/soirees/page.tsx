import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.soirees;

export default function SoireesPage() {
  const { htmlContent, jsonLd } = loadPage('soirees');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
