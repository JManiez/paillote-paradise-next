import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/galerie';

export const metadata: Metadata = pageSeo.galerie;

export default function GaleriePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
