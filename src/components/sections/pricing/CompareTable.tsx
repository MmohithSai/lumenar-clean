import { Badge, Eyebrow, Section } from '@/components/ui';
import { PLAN_COMPARE, PLANS } from '@/content/site';

const HEAD = 't-small py-4 pr-6 text-left text-fg!';

/** Hairline rows. Scrolls inside its own frame on narrow screens. */
export default function CompareTable() {
  return (
    <Section>
      <header className="mb-10 grid gap-3">
        <Eyebrow>Compare plans <Badge /></Eyebrow>
        <h2 id="compare-plans" className="t-h2">What each plan includes</h2>
      </header>
      <div role="region" aria-labelledby="compare-plans" tabIndex={0} className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse border-b border-line">
          <thead>
            <tr>
              <th scope="col" className={HEAD}>Feature</th>
              {PLANS.map((p) => <th key={p.name} scope="col" className={HEAD}>{p.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {PLAN_COMPARE.map((r) => (
              <tr key={r.row} className="border-t border-line">
                <th scope="row" className={HEAD}>{r.row}</th>
                {r.cells.map((c, i) => <td key={i} className="t-small py-4 pr-6 text-fg-2!">{c}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
