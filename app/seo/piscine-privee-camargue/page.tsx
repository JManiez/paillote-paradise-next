import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { htmlContent, jsonLd } from '../../../lib/pages/seo/piscine-privee-camargue';

export const metadata: Metadata = pageSeo.seoPiscine;

export default function SeoPiscinePriveeCamarguePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
