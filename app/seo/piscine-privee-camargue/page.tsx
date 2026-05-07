import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { loadPage } from '../../../lib/loadPage';

export const metadata: Metadata = pageSeo.seoPiscine;

export default function SeoPiscinePriveeCamarguePage() {
  const { htmlContent, jsonLd } = loadPage('seo/piscine-privee-camargue');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
