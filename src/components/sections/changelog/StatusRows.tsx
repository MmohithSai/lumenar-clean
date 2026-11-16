import { Button, Chip, Section, SectionHead } from '@/components/ui';
import { STATUS } from '@/content/site';

const LIST = 'mt-10 border-t border-line';
const ROW = 'grid grid-cols-[72px_1fr] items-baseline gap-6 border-b border-line py-5';

export default function StatusRows() {
  return (
    <>
      <Section className="mt-0!">
        <SectionHead eyebrow="What is done" title="Done" />
        <ol className={LIST}>
          {STATUS.done.map((d) => (
            <li key={d} className={ROW}><Chip state="done" /><span className="t-h3">{d}</span></li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHead eyebrow="What comes next" title="Next" />
        <ol className={LIST}>
          {STATUS.next.map((d) => (
            <li key={d} className={ROW}><Chip state="queued">Next</Chip><span className="t-h3">{d}</span></li>
          ))}
        </ol>
        <div className="mt-8"><Button href="/contact">Be a pilot</Button></div>
      </Section>
    </>
  );
}
