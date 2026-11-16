'use client';
import { useId, useState, type KeyboardEvent } from 'react';

/** Accessible tab wiring: roving focus and arrow keys. Each section supplies its own markup. */
export function useTabs(count: number, initial = 0) {
  const id = useId();
  const [active, setActive] = useState(initial);
  const tabId = (i: number) => `${id}-tab-${i}`;
  const panelId = `${id}-panel`;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: count - 1 };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = (moves[e.key] + count) % count;
    setActive(next);
    document.getElementById(tabId(next))?.focus();
  };

  return {
    active,
    setActive,
    listProps: { role: 'tablist' as const },
    tabProps: (i: number) => ({
      id: tabId(i),
      role: 'tab' as const,
      type: 'button' as const,
      'aria-selected': i === active,
      'aria-controls': panelId,
      tabIndex: i === active ? 0 : -1,
      onClick: () => setActive(i),
      onKeyDown,
    }),
    panelProps: { id: panelId, role: 'tabpanel' as const, 'aria-labelledby': tabId(active), tabIndex: 0 },
  };
}
