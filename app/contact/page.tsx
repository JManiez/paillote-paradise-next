import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.contact;

export default function ContactPage() {
  const { htmlContent, jsonLd } = loadPage('contact');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
