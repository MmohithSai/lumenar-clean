import { Icon } from './ui';

/** Native exclusive accordion. */
export default function Faq({ items, name = 'faq' }: { items: { q: string; a: string }[]; name?: string }) {
  return (
    <div className="card mx-auto w-full max-w-[820px] px-5 py-2 sm:px-8">
      {items.map((it) => (
        <details key={it.q} name={name} className="faq-row">
          <summary>
            <span className="t-faq">{it.q}</span>
            <i><Icon name="plus" size={16} /></i>
          </summary>
          <p className="t-body max-w-[640px] pb-6">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
