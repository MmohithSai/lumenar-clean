'use client';
import Fit from '@/components/Fit';
import { useTabs } from '@/components/Tabs';
import DeskApp from '@/components/mocks/DeskApp';
import { Badge, Chip, Section } from '@/components/ui';
import { PRODUCTS } from '@/content/site';

const LEDGER_ROWS = [
  { what: 'Invoice 2041 · Harbor Supply', amount: '$1,240.00', state: 'done', note: 'Matched to payment' },
  { what: 'Invoice 2042 · Globex', amount: '$3,480.00', state: 'done', note: 'Matched to payment' },
  { what: 'Payment · unknown sender', amount: '$612.50', state: 'waiting', note: 'Flagged for a person' },
  { what: 'Invoice 2044 · Initech', amount: '$980.00', state: 'queued', note: 'Awaiting payment' },
] as const;

/** One tab per product. Desk shows its full screen; Ledger shows the reconciliation list an agent keeps. */
export default function Workflow() {
  const t = useTabs(PRODUCTS.length);
  const product = PRODUCTS[t.active];
  const desk = t.active === 0;

  return (
    <Section id="products">
      <div {...t.listProps} aria-label="Lumenar products" className="mb-5 inline-flex gap-1 rounded-xl border border-line bg-surface p-1">
        {PRODUCTS.map((p, i) => (
          <button key={p.name} {...t.tabProps(i)} className={`rounded-lg px-4 py-2 text-[15px] font-medium transition-colors ${i === t.active ? 'bg-fg text-bg' : 'text-fg-2 hover:bg-raise hover:text-fg'}`}>
            {p.name}
          </button>
        ))}
      </div>
      <div {...t.panelProps} className="dots grid gap-8 rounded-3xl border border-line bg-raise p-5 sm:p-8 lg:p-10">
        <header className="grid max-w-[720px] justify-items-start gap-3">
          <Badge />
          <h2 className="t-h2">{desk ? 'A support inbox where a person sends the reply.' : 'Reconciliation with the odd ones flagged.'}</h2>
          <p className="t-lede">{desk ? 'The agent works in its own panel, cites what it used, and leaves Send to you.' : product.desc}</p>
        </header>
        {desk ? (
          <div className="overflow-hidden rounded-[10px] shadow-window">
            <Fit label="Lumenar Desk, an example product, with sample data"><DeskApp /></Fit>
          </div>
        ) : (
          <ul className="card grid overflow-hidden shadow-window" aria-label="Lumenar Ledger, an example product, with sample data">
            {LEDGER_ROWS.map((r) => (
              <li key={r.what} className="grid items-center gap-x-6 gap-y-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[minmax(0,1.4fr)_auto_minmax(0,1fr)_auto]">
                <span className="text-[15px] font-medium">{r.what}</span>
                <span className="font-mono text-[14px] tabular-nums">{r.amount}</span>
                <span className="text-[14px] text-fg-3">{r.note}</span>
                <Chip state={r.state}>{r.state === 'done' ? 'Matched' : r.state === 'waiting' ? 'Needs a look' : 'Open'}</Chip>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
