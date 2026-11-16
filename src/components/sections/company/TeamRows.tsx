import { Button, Human, Section, SectionHead } from '@/components/ui';
import { initials, LINKEDIN, TEAM } from '@/content/site';

export default function TeamRows() {
  return (
    <Section>
      <SectionHead eyebrow="Founders" title="The people" />
      <div className="mt-10 border-t border-line">
        {TEAM.map((p) => (
          <article key={p.name} className="grid items-center gap-x-9 gap-y-3 border-b border-line pt-[34px] pb-9 nav:grid-cols-[319px_1fr]">
            <div className="flex items-center gap-5">
              <Human size="lg" initials={initials(p.name)} />
              <h3 className="t-h3">{p.name}</h3>
            </div>
            <p className="t-body">{p.role}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={LINKEDIN} variant="ghost">Lumenar on LinkedIn</Button>
        <Button href="/contact">Get in touch</Button>
      </div>
    </Section>
  );
}
