'use client';
import { useEffect, useRef, useState } from 'react';
import { Button, Eyebrow, Icon, Section, type IconName } from '@/components/ui';
import { HOW_AN_AGENT_WORKS as STEPS } from '@/content/site';

const ICONS: IconName[] = ['plan', 'route', 'gate', 'receipt'];

/** Sticky heading on the left; on the right a timeline whose lime line fills as you scroll through it. */
export default function HowItWorks() {
  const list = useRef<HTMLOListElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <Section id="how" className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
      <div className="grid content-start justify-items-start gap-5 lg:sticky lg:top-32 lg:self-start">
        <Eyebrow>How an agent works</Eyebrow>
        <h2 className="t-h2-lg">Plan, run, approve, receipt.</h2>
        <p className="t-lede max-w-[460px]">Every session follows the same four steps, and each one leaves something you can read afterwards.</p>
        <Button href="/agents" variant="ghost" arrow>See the agents</Button>
      </div>
      <ol ref={list} className="relative grid gap-5">
        <span aria-hidden="true" className="absolute top-6 bottom-6 left-[23px] w-0.5 rounded-full bg-line">
          <span className="block w-full origin-top rounded-full bg-accent-text" style={{ height: '100%', transform: `scaleY(${p})` }} />
        </span>
        {STEPS.map((s, i) => {
          const on = p > i / STEPS.length;
          return (
            <li key={s.name} className="relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-5">
              <span className={`relative z-10 grid size-12 place-items-center rounded-xl border transition-colors duration-300 ${on ? 'border-transparent bg-accent text-accent-ink' : 'border-line bg-surface text-fg-3'}`}>
                <Icon name={ICONS[i]} size={20} />
              </span>
              <div className="card grid gap-2 p-6">
                <p className="t-label">Step {i + 1}</p>
                <h3 className="t-bento">{s.name}</h3>
                <p className="t-body">{s.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
