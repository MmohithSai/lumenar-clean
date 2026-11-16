import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import StickyTrust from '@/components/sections/trust/StickyTrust';
import { Button, PageHero, Section, SectionHead } from '@/components/ui';
import { EMAIL } from '@/content/site';

export const metadata: Metadata = {
  title: 'Trust & security',
  description: 'Approval gates, an append-only exportable audit log, open models and no lock-in. Certifications are planned, not claimed.',
};

export default function TrustPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Trust & security"
        title={<>Every step on the <em>record.</em></>}
        lede="An agent you can’t audit is an agent you can’t trust. This is how Lumenar is built to keep a person in charge, and what we have and haven’t earned yet."
      />

      <StickyTrust />

      <Section>
        <div className="card grid gap-8 p-7 sm:p-10 md:grid-cols-2">
          <SectionHead eyebrow="Security contact" title="Found something?" />
          <div className="grid justify-items-start gap-4">
            <p className="t-trust">Write to us with the details and how to reproduce it. A founder reads every report.</p>
            <code className="t-code rounded-md bg-raise px-2.5 py-1">{EMAIL}</code>
            <Button href={`mailto:${EMAIL}?subject=Security%20report`}>Email a security report</Button>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
