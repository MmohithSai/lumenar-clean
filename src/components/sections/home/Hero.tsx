import Link from 'next/link';
import Fit from '@/components/Fit';
import AgentsConsole from '@/components/mocks/AgentsConsole';
import { Button, Icon } from '@/components/ui';
import { HOME } from '@/content/site';

/** Centred headline with one marked phrase, then the product itself in a framed window. */
export default function Hero() {
  const { announce, hero } = HOME;
  return (
    <section className="wrap pt-[clamp(40px,6vw,88px)]">
      <div className="grid justify-items-center gap-7 text-center">
        <Link href="/contact" className="arrive inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface py-1 pr-3.5 pl-1 text-left text-[13px] leading-5 text-fg-2 shadow-card transition-colors hover:border-[var(--hover-line)]">
          <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-[.04em] text-accent-ink uppercase">{announce.tag}</span>
          {announce.text}
        </Link>
        <h1 className="t-display arrive max-w-[960px] [animation-delay:.06s]">{hero.before} <em>{hero.accent}</em></h1>
        <p className="t-lede arrive max-w-[600px] [animation-delay:.14s]">{hero.lede}</p>
        <div className="arrive flex flex-wrap justify-center gap-3 [animation-delay:.2s]">
          <Button href={hero.primary.href}>{hero.primary.label}</Button>
          <Button href={hero.secondary.href} variant="ghost" arrow>{hero.secondary.label}</Button>
        </div>
      </div>

      <div className="arrive relative mt-[clamp(40px,5vw,72px)] [animation-delay:.28s]">
        <div className="dots rounded-2xl border border-line bg-raise p-2.5 sm:rounded-3xl sm:p-6 lg:p-10">
          <div className="overflow-hidden rounded-[10px] shadow-window">
            <Fit label="The Lumenar agents console, with sample data: a fleet of agents, one session's plan, trace and approval gate">
              <AgentsConsole />
            </Fit>
          </div>
        </div>
        <div data-tone="paper" aria-hidden="true" className="absolute top-14 -left-7 hidden -rotate-3 items-center gap-3 rounded-xl border border-line bg-surface! py-2.5 pr-4 pl-2.5 shadow-float xl:flex">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-ink"><Icon name="check" size={16} /></span>
          <span className="grid text-[13px] leading-[18px]"><b className="font-medium">Plan approved</b><span className="text-fg-3">before any step runs</span></span>
        </div>
        <div data-tone="ink" aria-hidden="true" className="absolute -right-7 bottom-16 hidden rotate-2 items-center gap-3 rounded-xl py-2.5 pr-4 pl-2.5 shadow-float xl:flex">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-ink"><Icon name="receipt" size={16} /></span>
          <span className="grid text-[13px] leading-[18px]"><b className="font-medium">Receipt</b><span className="font-mono text-[11px] text-fg-2">6 steps · 41s · $0.08</span></span>
        </div>
      </div>
      <p className="t-small mt-4 text-center">Sample data. Screens marked Example are samples while Lumenar is in pilot.</p>
    </section>
  );
}
