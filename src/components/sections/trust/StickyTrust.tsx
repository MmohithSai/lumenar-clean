import Reveal from '@/components/Reveal';
import { Chip, Section, SectionHead } from '@/components/ui';
import { CERTIFICATIONS, TRUST, TRUST_ROWS } from '@/content/site';

/** Trust cards scroll past a sticky column. That column is the certifications, so "planned, not claimed" stays in view. */
export default function StickyTrust() {
  return (
    <Section className="mt-0! grid gap-12 lg:grid-cols-[384px_minmax(0,1fr)] lg:gap-16">
      <div className="grid gap-5 lg:gap-32">
        {TRUST.map((t) => (
          <Reveal key={t.name}>
            <article className="grid gap-2 rounded-xl bg-surface p-2 sm:grid-cols-2">
              <div className="grid content-center gap-3 px-4 py-8 lg:py-24">
                <h2 className="t-h3">{t.name}</h2>
                <p className="t-body">{t.desc}</p>
              </div>
              <dl className="grid content-center gap-3 rounded-lg bg-raise p-6">
                {TRUST_ROWS[t.name]?.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between gap-3">
                    <dt className="t-small text-fg-2!">{r.label}</dt>
                    <dd className="t-nav text-fg-2 normal-case!">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="grid content-start gap-5 self-start lg:sticky lg:top-[240px] lg:order-first">
        <SectionHead eyebrow="Certifications" title="Planned, not claimed" />
        <p className="t-trust">Lumenar holds no certifications yet. These are the ones we are working towards, and they stay marked as planned until they are earned.</p>
        <ul>
          {CERTIFICATIONS.map((c) => (
            <li key={c} className="flex items-center justify-between gap-4 border-t border-line py-3">
              <span className="t-h3">{c}</span>
              <Chip state="queued">Planned</Chip>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
