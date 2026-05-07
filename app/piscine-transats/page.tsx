import type { Metadata } from 'next';
import { PageContent } from '../../components/PageContent';
import { pageSeo } from '../../lib/seo';
import { htmlContent, jsonLd } from '../../lib/pages/piscine-transats';

export const metadata: Metadata = pageSeo.piscineTransats;

export default function PiscineTransatsPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
