import { CERTIFICATIONS, TRUST, TRUST_ROWS } from '@/content/site';

/** Four mini panels, each above a bold-led sentence. Certifications are planned, never shown as earned. */
export default function TrustGrid() {
  return (
    <div className="grid gap-10">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((t) => (
          <li key={t.name} className="grid content-start gap-5">
            <div data-c="trust-panel" className="grid content-start gap-4 rounded-xl bg-surface p-6">
              <p className="t-eyebrow text-fg-3!">{t.name}</p>
              <dl className="grid gap-3">
                {TRUST_ROWS[t.name]?.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between gap-3">
                    <dt className="t-small">{r.label}</dt>
                    <dd className="t-nav text-fg-2 normal-case!">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="t-trust"><strong className="font-semibold text-fg">{t.name}.</strong> {t.desc}</p>
          </li>
        ))}
      </ul>
      <p className="t-small text-center">Planned, not yet earned: {CERTIFICATIONS.join(' · ')}</p>
    </div>
  );
}
