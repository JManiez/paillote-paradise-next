import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.privatisation;

export default function PrivatisationPage() {
  const { htmlContent, jsonLd } = loadPage('privatisation');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
