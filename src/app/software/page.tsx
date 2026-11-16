import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Shell from '@/components/Shell';
import Workflow from '@/components/sections/software/Workflow';
import { Badge, Button, Icon, PageHero, Section, SectionHead, Tile, type IconName } from '@/components/ui';
import { PRODUCTS } from '@/content/site';

export const metadata: Metadata = {
  title: 'Software',
  description: 'Lumenar makes calm software with agents inside: the agent drafts, a person sends.',
};

const POINTS: { icon: IconName; title: string; body: string }[] = [
  { icon: 'handoff', title: 'Always labelled.', body: 'In every product an agent’s work sits in its own panel with its name on it, so you always know who did what.' },
  { icon: 'mail', title: 'Drafts, not sends.', body: 'An agent proposes; a person sends, approves or redirects.' },
  { icon: 'receipt', title: 'One receipt everywhere.', body: 'Steps, time and cost, with the same append-only audit log as the agents console.' },
];

export default function SoftwarePage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Software"
        title={<>Software with <em>agents inside.</em></>}
        lede="Calm products for everyday work. When an agent helps, it arrives in its own panel and its work comes as a draft a person sends."
      >
        <Button href="/contact">Talk to us</Button>
        <Button href="#products" variant="ghost">The products</Button>
      </PageHero>

      <Section className="mt-0!">
        <ul className="grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <li key={p.name} className="card grid content-start gap-5 p-7">
              <div className="flex items-start justify-between gap-3"><Tile size="lg" /><Badge /></div>
              <h2 className="t-bento">{p.name}</h2>
              <p className="t-body max-w-[440px]">{p.desc}</p>
            </li>
          ))}
        </ul>
        <p className="t-small mt-4">Every product is Lumenar plus a plain noun, billed per seat, with agents billed in Lumenar credits.</p>
      </Section>

      <Reveal><Workflow /></Reveal>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Agents inside every product" title="The same agent, wherever you work." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {POINTS.map((p) => (
              <li key={p.title} className="card grid content-start gap-4 p-6">
                <span className="grid size-10 place-items-center rounded-lg bg-accent text-accent-ink"><Icon name={p.icon} size={19} /></span>
                <h3 className="t-h3">{p.title}</h3>
                <p className="t-body">{p.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <section className="wrap sec mb-0!">
        <div data-tone="lime" className="grid justify-items-start gap-6 rounded-3xl p-8 sm:p-12 lg:p-16">
          <p className="t-label">Custom builds</p>
          <h2 className="t-h2-lg max-w-[720px]">Need something built from scratch?</h2>
          <p className="max-w-[560px] text-[18px] leading-7 text-fg-2">We take on a few custom builds alongside our own products: design, engineering and launch.</p>
          <Button href="/contact">Tell us what you need</Button>
        </div>
      </section>
    </Shell>
  );
}
