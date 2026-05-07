import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/bar';

export const metadata: Metadata = pageSeo.bar;

export default function BarPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
