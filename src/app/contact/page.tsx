import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import ContactPanel from '@/components/sections/contact/ContactPanel';
import { PageHero } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a Lumenar pilot: one agent on one real workflow.',
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contact"
        title={<>Request a <em>pilot.</em></>}
        lede="Tell us the workflow. We’ll set up one agent on it with you and review the receipts together each week."
      />
      <ContactPanel />
    </Shell>
  );
}
