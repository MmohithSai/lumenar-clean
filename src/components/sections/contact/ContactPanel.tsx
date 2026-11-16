'use client';
import Link from 'next/link';
import { useState } from 'react';
import Faq from '@/components/Faq';
import { Icon, Section } from '@/components/ui';
import { EMAIL, LINKEDIN, PRICING_FAQ } from '@/content/site';

const LABEL = 'flex flex-col gap-2 text-[13px] leading-[19.5px] font-medium text-fg';
const FIELD = 'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[15px] leading-6 font-normal text-fg transition-colors duration-180 placeholder:text-fg-3 focus:border-fg';
const TEXT_LINK = 'link-accent underline underline-offset-2';

/* The form builds a mailto: link and opens the visitor's mail app; nothing is sent from this site. */
function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const subject = `Lumenar pilot: ${get('company') || get('name')}`;
    const body = [
      `Name: ${get('name')}`,
      `Company: ${get('company')}`,
      `Email: ${get('email')}`,
      `Interested in: ${get('interest')}`,
      '',
      get('message'),
    ].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={LABEL}>Your name<input className={FIELD} name="name" required autoComplete="name" /></label>
        <label className={LABEL}>Company<input className={FIELD} name="company" autoComplete="organization" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={LABEL}>Work email<input className={FIELD} name="email" type="email" required autoComplete="email" /></label>
        <label className={LABEL}>
          Interested in
          <select className={FIELD} name="interest" defaultValue="Agents">
            <option>Agents</option>
            <option>Software</option>
            <option>A custom build</option>
            <option>The session layer</option>
          </select>
        </label>
      </div>
      <label className={LABEL}>
        What should the agent do?
        <textarea className={`${FIELD} min-h-36 resize-y`} name="message" required placeholder="The workflow, roughly how often it happens, and what needs a person's sign-off." />
      </label>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <button type="submit" className="cta"><span className="cta-label">Open in my mail app</span><span className="cta-arrow"><Icon name="arrow" /></span></button>
        <span className="t-small">Opens an email to {EMAIL}. Nothing is sent until you press send.</span>
      </div>
    </form>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <span className="flex flex-wrap items-center gap-3">
      <code className="t-code">{EMAIL}</code>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => navigator.clipboard?.writeText(EMAIL).then(() => setCopied(true), () => {})}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  );
}

export default function ContactPanel() {
  return (
    <Section className="mt-0!">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        {/* The form leads at every width, so visual and keyboard order always match. */}
        <div className="dots rounded-3xl border border-line bg-raise p-2.5 sm:p-3">
          <div className="rounded-2xl border border-line bg-surface px-5 py-7 shadow-card sm:px-9 sm:py-9">
            <ContactForm />
          </div>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-4">
            <h2 className="t-h3">Or write to us directly</h2>
            <CopyEmail />
            <p className="t-body">We answer every message ourselves. For security reports, see <Link href="/trust" className={TEXT_LINK}>Trust &amp; security</Link>.</p>
            <p className="t-body"><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>Lumenar on LinkedIn</a></p>
          </div>
          {/* The first entry says "every figure on this page", which is only true on /pricing. */}
          <Faq items={PRICING_FAQ.slice(1)} name="contact-faq" />
        </div>
      </div>
    </Section>
  );
}
