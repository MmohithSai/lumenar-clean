'use client';
import { useLayoutEffect, useRef, useState } from 'react';

const W = 1000;

/** Scales a 1000px-wide product screen down to its container (never up), keeping its height in flow. */
export default function Fit({ children, label }: { children: React.ReactNode; label?: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ s: number; h?: number }>({ s: 1 });

  useLayoutEffect(() => {
    const o = outer.current, i = inner.current;
    if (!o || !i) return;
    const ro = new ResizeObserver(() => {
      const s = Math.min(1, o.clientWidth / W);
      setBox({ s, h: i.offsetHeight * s });
    });
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outer} className="fit" style={{ height: box.h }} role={label ? 'img' : undefined} aria-label={label}>
      <div ref={inner} style={{ transform: `scale(${box.s})` }}>{children}</div>
    </div>
  );
}
