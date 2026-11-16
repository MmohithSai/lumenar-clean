import type { Metadata } from 'next';
import Faq from '@/components/Faq';
import Fit from '@/components/Fit';
import PlanCards from '@/components/PlanCards';
import Reveal from '@/components/Reveal';
import Shell from '@/components/Shell';
import AccountApp from '@/components/mocks/AccountApp';
import CompareTable from '@/components/sections/pricing/CompareTable';
import { Badge, PageHero, Section, SectionHead } from '@/components/ui';
import { PRICING_FAQ } from '@/content/site';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Agents per resolved session in Lumenar credits, software per seat. Example pricing while Lumenar is in pilot.',
};

export default function PricingPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Pricing"
        title={<>Pay for work that <em>got done.</em></>}
        lede="Agents are billed per resolved session, from one balance of Lumenar credits. Products are billed per seat. Lumenar is in pilot, so every figure here is an example."
      />

      <Section className="mt-4!"><PlanCards /></Section>
      <Reveal><CompareTable /></Reveal>

      <Section>
        <Reveal>
          <SectionHead eyebrow="One account" title="One balance of credits for every agent." lede="Every agent draws from the same Lumenar credits; every product shows its seats. Invoices and the trust centre live in the same place." />
          <div className="dots mt-12 rounded-2xl border border-line bg-raise p-2.5 sm:rounded-3xl sm:p-6 lg:p-10">
            <div className="overflow-hidden rounded-[10px] shadow-window">
              <Fit label="The Lumenar account, with sample credits, usage and invoices"><AccountApp /></Fit>
            </div>
          </div>
          <p className="t-small mt-4 flex items-center gap-2">Sample data throughout. <Badge /></p>
        </Reveal>
      </Section>

      <Section>
        <SectionHead eyebrow="Questions" title="Pricing, plainly." center className="mb-10" />
        <Faq items={PRICING_FAQ} />
      </Section>
    </Shell>
  );
}
