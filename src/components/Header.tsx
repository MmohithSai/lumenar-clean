import Link from 'next/link';
import HeaderMenus from './HeaderMenus';
import { Button, Logo } from './ui';

/** Sticky header: logo, navigation, and the pilot call to action. */
export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label="Lumenar home" className="flex items-center"><Logo /></Link>
        <HeaderMenus />
        <div className="hidden nav:block"><Button href="/contact" size="sm">Request a pilot</Button></div>
      </div>
    </header>
  );
}
