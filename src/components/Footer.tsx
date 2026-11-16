import Link from 'next/link';
import { EMAIL, LEGAL_NAME, LINKEDIN, NAV } from '@/content/site';
import { Logo } from './ui';

const COLUMNS = [
  { title: 'Product', links: NAV.slice(0, 3) },
  { title: 'Company', links: [...NAV.slice(3), { href: '/contact', label: 'Contact' }] },
];

/** The lime slab: links, legal line and the full-width wordmark. */
export default function Footer() {
  return (
    <footer data-tone="lime" className="relative mt-[clamp(72px,9vw,128px)] overflow-hidden rounded-t-3xl">
      <div className="wrap">
        <div className="grid gap-10 pt-14 pb-14 sm:grid-cols-2 nav:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="grid content-start gap-4">
            <Link href="/" aria-label="Lumenar home" className="flex items-center"><Logo size={30} /></Link>
            <p className="max-w-[300px] text-[15px] leading-6 text-fg-2">Agents and software on one session layer. In pilot: screens and prices marked Example are samples.</p>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.title} className="grid content-start gap-3.5">
              <h3 className="t-label">{c.title}</h3>
              <ul className="grid gap-2.5">
                {c.links.map((l) => <li key={l.href}><Link href={l.href} className="t-nav link-accent text-[15px]!">{l.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div className="grid content-start gap-3.5">
            <h3 className="t-label">Reach us</h3>
            <ul className="grid gap-2.5">
              <li><a href={`mailto:${EMAIL}`} className="t-nav link-accent text-[15px]! break-all">{EMAIL}</a></li>
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="t-nav link-accent text-[15px]!">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-6 pb-10">
          <span className="text-[13px] text-fg-2">© {LEGAL_NAME}</span>
          <span className="text-[13px] text-fg-2">In pilot. Example screens and prices are labelled.</span>
        </div>
      </div>
      <span className="wordmark" aria-hidden="true">LUMENAR</span>
    </footer>
  );
}
