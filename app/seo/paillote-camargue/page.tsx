import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { htmlContent, jsonLd } from '../../../lib/pages/seo/paillote-camargue';

export const metadata: Metadata = pageSeo.seoPaillote;

export default function SeoPailloteCamarguePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
