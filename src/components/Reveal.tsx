'use client';
import { useInView } from '@/lib/useInView';

/** Rises 16px and fades in once, the first time it is seen. */
export default function Reveal({ delay = 0, className = '', children }: { delay?: number; className?: string; children: React.ReactNode }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
