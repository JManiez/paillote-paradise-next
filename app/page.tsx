import type { Metadata } from 'next';
import { PageContent } from '../components/PageContent';
import { pageSeo } from '../lib/seo';
import { htmlContent, jsonLd } from '../lib/pages/home';

export const metadata: Metadata = pageSeo.home;

export default function HomePage() {
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
