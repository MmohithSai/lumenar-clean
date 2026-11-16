'use client';
import { useEffect, useRef, useState } from 'react';
import { Section } from '@/components/ui';
import { HOME } from '@/content/site';

const WORDS = HOME.statement.split(' ');

/** The statement lights up word by word as it crosses the viewport. Without script, or with motion off, it is simply all lit. */
export default function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      /* 0 when the top reaches 85% of the viewport, 1 when the bottom reaches the middle */
      const p = (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.35);
      setLit(Math.round(Math.min(1, Math.max(0, p)) * WORDS.length));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <Section>
      <p ref={ref} className="t-statement mx-auto max-w-[1040px]">
        {WORDS.map((w, i) => (
          <span key={i} className={`scrub ${i < lit ? 'on' : ''}`}>
            {w.includes('%') ? <span className="mark">{w}</span> : w}{' '}
          </span>
        ))}
      </p>
    </Section>
  );
}
