import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { loadPage } from '../../lib/loadPage';

export const metadata: Metadata = pageSeo.piscineTransats;

export default function PiscineTransatsPage() {
  const { htmlContent, jsonLd } = loadPage('piscine-transats');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
