import type { Metadata } from 'next';
import Shell from '@/components/Shell';
import StatusRows from '@/components/sections/changelog/StatusRows';
import { PageHero } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'What Lumenar has done and what comes next.',
};

export default function ChangelogPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Changelog"
        title={<>Where we <em>are.</em></>}
        lede="What is done and what comes next, as it stands. We add to this list; we don’t rewrite it."
      />
      <StatusRows />
    </Shell>
  );
}
