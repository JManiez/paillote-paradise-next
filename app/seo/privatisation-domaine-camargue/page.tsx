import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { htmlContent, jsonLd } from '../../../lib/pages/seo/privatisation-domaine-camargue';

export const metadata: Metadata = pageSeo.seoPrivatisation;

export default function SeoPrivatisationDomaineCamarguePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
