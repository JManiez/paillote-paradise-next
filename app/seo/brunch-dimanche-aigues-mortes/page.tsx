import type { Metadata } from 'next';
import { PageContent } from '../../../components/PageContent';
import { pageSeo } from '../../../lib/seo';
import { htmlContent, jsonLd } from '../../../lib/pages/seo/brunch-dimanche-aigues-mortes';

export const metadata: Metadata = pageSeo.seoBrunch;

export default function SeoBrunchDimancheAiguesMortesPage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
