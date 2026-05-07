import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { loadPage } from '../../../lib/loadPage';

export const metadata: Metadata = pageSeo.seoPrivatisation;

export default function SeoPrivatisationDomaineCamarguePage() {
  const { htmlContent, jsonLd } = loadPage('seo/privatisation-domaine-camargue');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
