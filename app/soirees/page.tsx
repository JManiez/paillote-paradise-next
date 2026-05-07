import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/soirees';

export const metadata: Metadata = pageSeo.soirees;

export default function SoireesPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
