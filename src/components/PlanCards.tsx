import { Badge, Button, Icon } from '@/components/ui';
import { PLANS } from '@/content/site';

/** The four plans. The featured one sits in a lime frame with a pill on top. All prices are examples. */
export default function PlanCards() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {PLANS.map((p) => (
        <li key={p.name} className={`relative grid grid-rows-[auto_auto_1fr_auto] gap-6 rounded-2xl border bg-surface p-6 ${p.featured ? 'border-transparent shadow-[0_0_0_4px_var(--accent),var(--sh-float)]' : 'border-line'}`}>
          {p.featured && <span className="absolute -top-3.5 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-medium tracking-[.04em] text-accent-ink uppercase shadow-[inset_0_0_0_1px_rgba(10,10,10,.14)]">Most teams start here</span>}
          <div className="flex items-center justify-between gap-3"><h3 className="t-plan">{p.name}</h3><Badge /></div>
          <div className="grid gap-1">
            <p className="t-price">{p.price}</p>
            <p className="text-[14px] text-fg-3">{p.unit}</p>
          </div>
          <div className="grid content-start gap-5">
            <p className="t-body">{p.desc}</p>
            <ul className="grid gap-2.5 border-t border-line pt-5">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[14px] leading-5">
                  <span className="mt-px grid size-[18px] flex-none place-items-center rounded-full bg-accent text-accent-ink"><Icon name="check" size={12} /></span>{it}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid">
            {p.featured ? <Button href="/contact">{p.cta}</Button> : <Button href="/contact" variant="ghost">{p.cta}</Button>}
          </div>
        </li>
      ))}
    </ul>
  );
}
