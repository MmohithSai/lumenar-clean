'use client';
import { useTabs } from '@/components/Tabs';
import { Eyebrow, Icon, type IconName } from '@/components/ui';
import { COST_MODEL, MECHANISMS } from '@/content/site';
import { useInView } from '@/lib/useInView';

const ICONS: IconName[] = ['cache', 'layout', 'route', 'swap'];

/** The four mechanisms as tabs, beside the cost model they add up to. */
export default function SessionLayer() {
  const tabs = useTabs(MECHANISMS.length);
  const [bars, inView] = useInView<HTMLDListElement>();
  const m = MECHANISMS[tabs.active];

  return (
    <section id="session-layer" className="wrap sec">
      <div className="rounded-3xl bg-raise p-6 sm:p-10 lg:p-14">
        <header className="grid justify-items-start gap-4">
          <Eyebrow>The session layer</Eyebrow>
          <h2 className="t-h2 max-w-[720px]">The layer underneath keeps long sessions cheap.</h2>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card grid content-start overflow-hidden">
            <div {...tabs.listProps} aria-label="Session layer mechanisms" className="grid">
              {MECHANISMS.map((x, i) => (
                <button key={x.name} {...tabs.tabProps(i)} className={`flex items-center gap-3.5 border-b border-line px-5 py-4 text-left transition-colors ${i === tabs.active ? 'bg-accent-soft' : 'hover:bg-raise'}`}>
                  <span className={`grid size-9 flex-none place-items-center rounded-lg ${i === tabs.active ? 'bg-accent text-accent-ink' : 'bg-raise text-fg-2'}`}><Icon name={ICONS[i]} size={17} /></span>
                  <span className="t-h3">{x.name}</span>
                </button>
              ))}
            </div>
            <div {...tabs.panelProps} className="grid content-start gap-4 p-6">
              <p className="t-body text-[16px]! leading-[26px]!">{m.desc}</p>
              <p className="flex flex-wrap gap-2">{m.tags.map((t) => <span key={t} className="tag">{t}</span>)}</p>
            </div>
          </div>

          <div className="card grid content-between gap-8 p-6 sm:p-8">
            <div className="grid gap-2">
              <p className="t-label">Cost of one 60-turn task</p>
              <p className="t-body">A model of how the cost falls as each mechanism is added. Not a measurement.</p>
            </div>
            <dl ref={bars} className="grid gap-5">
              {COST_MODEL.map((c, i) => {
                const last = i === COST_MODEL.length - 1;
                return (
                  <div key={c.label} className="grid gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[15px] text-fg-2">{c.label}</dt>
                      <dd className="font-mono text-[15px] font-medium tabular-nums">{c.value}</dd>
                    </div>
                    <div className="h-7 overflow-hidden rounded-md bg-raise" aria-hidden="true">
                      <div
                        className={`h-full rounded-md transition-[width] duration-700 ease-out ${last ? 'bg-accent shadow-[inset_0_0_0_1px_rgba(10,10,10,.14)]' : 'bg-[color-mix(in_srgb,var(--fg)_22%,var(--raise))]'}`}
                        style={{ width: inView ? `${c.share}%` : 0, transitionDelay: `${i * 120}ms` }}
                      />
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
