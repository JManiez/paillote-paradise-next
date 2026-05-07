import type { Metadata } from 'next';
import { PageContent } from '../components/PageContent';
import { pageSeo } from '../lib/seo';
import { loadPage } from '../lib/loadPage';

export const metadata: Metadata = pageSeo.home;

export default function HomePage() {
  const { htmlContent, jsonLd } = loadPage('home');
  return <PageContent htmlContent={htmlContent} jsonLd={jsonLd} />;
}
