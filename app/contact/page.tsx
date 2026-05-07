import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/contact';

export const metadata: Metadata = pageSeo.contact;

export default function ContactPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
