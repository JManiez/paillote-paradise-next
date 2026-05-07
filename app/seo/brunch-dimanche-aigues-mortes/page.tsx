import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { loadPage } from '../../../lib/loadPage';

export const metadata: Metadata = pageSeo.seoBrunch;

export default function SeoBrunchDimancheAiguesMortesPage() {
  const { htmlContent, jsonLd } = loadPage('seo/brunch-dimanche-aigues-mortes');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
