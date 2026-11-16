import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import Shell from '@/components/Shell';
import TeamRows from '@/components/sections/company/TeamRows';
import { PageHero, Section, SectionHead } from '@/components/ui';
import { TEAMS } from '@/content/site';

export const metadata: Metadata = {
  title: 'Company',
  description: 'Lumenar is a small team building agents you can audit, the software they work inside, and the session layer under both.',
};

export default function CompanyPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Company"
        title={<>A small team building agents you can <em>audit.</em></>}
        lede="Lumenar builds agents that do real work and show every step, and the software they work inside. Under both sits a session layer that makes long agent sessions cheaper by not paying for the same context twice."
      />

      <Section className="mt-0!">
        <Reveal>
          <SectionHead eyebrow="How we are organised" title="Three groups, one account." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {TEAMS.map((t, i) => (
              <li key={t.team} data-tone={i === 0 ? 'lime' : undefined} className={`grid content-start gap-4 rounded-2xl p-7 ${i === 0 ? '' : 'card'}`}>
                <p className="t-label">Lumenar {t.team}</p>
                <h3 className="t-bento">{t.sells}</h3>
                <p className="text-[15px] leading-6 text-fg-2">{t.desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <TeamRows />
    </Shell>
  );
}
