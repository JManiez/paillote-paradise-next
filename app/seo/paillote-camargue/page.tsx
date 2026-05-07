import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { loadPage } from '../../../lib/loadPage';

export const metadata: Metadata = pageSeo.seoPaillote;

export default function SeoPailloteCamarguePage() {
  const { htmlContent, jsonLd } = loadPage('seo/paillote-camargue');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
