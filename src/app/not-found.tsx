import Shell from '@/components/Shell';
import { Button, PageHero } from '@/components/ui';

export default function NotFound() {
  return (
    <Shell>
      <PageHero eyebrow="404" title={<>This page <em>doesn’t exist.</em></>} lede="The link may be old, or the page may have moved.">
        <Button href="/">Back to home</Button>
        <Button href="/agents" variant="ghost">See the agents</Button>
      </PageHero>
    </Shell>
  );
}
