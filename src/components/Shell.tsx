import Dock from './Dock';
import Footer from './Footer';
import Header from './Header';

/** The page frame: skip link, header, main, footer and the theme/motion dock. */
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <a href="#main" className="btn btn-ghost fixed top-2 left-2 z-70 -translate-y-[200%] focus:translate-y-0">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Dock />
    </div>
  );
}
