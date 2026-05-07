import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.galerie;

export default function GaleriePage() {
  const { htmlContent, jsonLd } = loadPage('galerie');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
