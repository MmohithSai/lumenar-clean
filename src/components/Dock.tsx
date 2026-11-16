'use client';
import { useSyncExternalStore } from 'react';
import { Icon } from './ui';

const html = () => document.documentElement;
const subscribe = (cb: () => void) => {
  const mo = new MutationObserver(cb);
  mo.observe(html(), { attributes: true, attributeFilter: ['data-reduced-motion', 'data-theme'] });
  return () => mo.disconnect();
};
const save = (key: string, value: string) => {
  try { localStorage.setItem(key, value); } catch { /* private mode: applies to this page only */ }
};

/** Theme and motion switches. Both are remembered per browser. */
export default function Dock() {
  const still = useSyncExternalStore(subscribe, () => html().dataset.reducedMotion === 'true', () => false);
  const dark = useSyncExternalStore(subscribe, () => html().dataset.theme === 'dark', () => false);

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    html().dataset.theme = next;
    save('lumenar-theme', next);
  };
  const toggleMotion = () => {
    html().dataset.reducedMotion = String(!still);
    save('lumenar-motion', still ? 'on' : 'off');
  };

  return (
    <div className="dock">
      <button type="button" onClick={toggleTheme} aria-pressed={dark} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
        <Icon name={dark ? 'sun' : 'moon'} size={16} />
      </button>
      <button type="button" onClick={toggleMotion} aria-pressed={still} aria-label={still ? 'Resume animations' : 'Pause animations'}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          {still ? <path d="M3 1.5v9l7-4.5z" /> : <path d="M2.5 1.5h2.4v9H2.5zM7.1 1.5h2.4v9H7.1z" />}
        </svg>
      </button>
    </div>
  );
}
