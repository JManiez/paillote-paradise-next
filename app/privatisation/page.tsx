import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/privatisation';

export const metadata: Metadata = pageSeo.privatisation;

export default function PrivatisationPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
