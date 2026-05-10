import type { Metadata } from 'next';
import { PageShell } from '@/components/PageShell';
import { ContactPageBody } from '@/components/page-bodies/contactPageBody';
import contactJsonLd from '@/lib/jsonld/contact.json';
import { pageSeo } from '@/lib/seo';

export const metadata: Metadata = pageSeo.contact;

export default function ContactPage() {
  return (
    <PageShell jsonLd={contactJsonLd as unknown[]}>
      <ContactPageBody />
    </PageShell>
  );
}
