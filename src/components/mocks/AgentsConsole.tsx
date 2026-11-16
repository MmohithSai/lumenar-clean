import { Chip, Human, Ring } from '../ui';
import Timer from './Timer';

const SESSIONS = [
  { state: 'working', agent: 'Support Agent', id: 'LMN-2041', task: 'Refund request, order 88213', receipt: '6 steps · 0:41 · $0.08', sel: true },
  { state: 'waiting', agent: 'Billing Agent', id: 'LMN-2077', task: 'Approve refund of $48.00', receipt: '9 steps · 1:12 · $0.11' },
  { state: 'handed', agent: 'Support Agent', to: 'Priya N.', task: 'Damaged item, photo review', receipt: '4 steps · 0:22 · $0.03' },
  { state: 'done', agent: 'Research Agent', id: 'LMN-2110', task: 'Weekly churn summary', receipt: '14 steps · 3:05 · $0.21' },
  { state: 'failed', agent: 'Code Review Agent', id: 'LMN-2153', task: 'Pull request 418, tests timed out', receipt: '7 steps · 2:40 · $0.09' },
  { state: 'queued', agent: 'Onboarding Agent', id: 'LMN-2190', task: 'Welcome sequence, 12 accounts', receipt: 'not started' },
] as const;

const TRACE = [
  ['00:02', 'Read ticket 4812', null, '0.4s'],
  ['00:05', 'Looked up order 88213', 'orders.get', '0.8s'],
  ['00:09', 'Checked refund policy', 'cache 92%', '0.2s'],
  ['00:21', 'Drafted the reply', null, '1.9s'],
  ['00:38', 'Proposed a refund', null, '0.6s'],
] as const;

/** The agents console. Sample data throughout. */
export default function AgentsConsole() {
  return (
    <div className="app app-obs">
      <aside className="rail">
        <div className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/star.webp" alt="" width={15} height={20} className="logo-star" />
          <span>Lumenar</span>
        </div>
        <nav aria-label="Console sections (sample)">
          <span className="on">Fleet</span><span>Sessions</span><span>Approvals <i className="count">1</i></span>
          <span>Teams</span><span>Knowledge</span><span>Audit log</span><span>Credits</span>
        </nav>
        <div className="rail-foot">Sample Co · sample data</div>
      </aside>
      <div className="main">
        <div className="topbar">
          <b>Fleet</b>
          <div className="tb-right"><Chip state="working">4 working</Chip><Chip state="waiting">1 waiting on you</Chip></div>
        </div>
        <table>
          <thead><tr><th>State</th><th>Agent</th><th>Task</th><th>Receipt</th></tr></thead>
          <tbody>
            {SESSIONS.map((s, i) => (
              <tr key={i} className={'sel' in s ? 'sel' : undefined}>
                <td><Chip state={s.state} /></td>
                <td>
                  <Ring size="xs" working={s.state === 'working'} />
                  {s.agent}{' '}
                  {'to' in s
                    ? <>→ <Human size="xs" initials="PN" />{s.to}</>
                    : <span className="mono dim">{s.id}</span>}
                </td>
                <td>{s.task}</td>
                <td className="mono">{s.receipt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside className="trail" aria-label="Selected session trail (sample)">
        <div className="trail-head">
          <Ring working />
          <div><b>Support Agent</b><span className="mono dim">LMN-2041 · working</span></div>
          <Timer />
        </div>
        <div className="planbox">
          <p className="label">Plan · approved by Priya N.</p>
          <ol><li>Read the ticket and the order</li><li>Check the refund policy</li><li>Draft a reply and propose a refund</li></ol>
        </div>
        <ol className="trace">
          {TRACE.map(([t, what, tag, d]) => (
            <li key={t}>
              <span className="mono dim">{t}</span>
              <span>{what} {tag && <span className={`mono ${tag.startsWith('cache') ? 'agent' : 'dim'}`}>{tag}</span>}</span>
              <span className="mono dim">{d}</span>
            </li>
          ))}
        </ol>
        <div className="gate">
          <Chip state="waiting">Needs approval</Chip>
          <b>Refund $48.00 · order 88213</b>
          <p>Within policy: delivered damaged 9 days ago.</p>
          <div className="btns"><span className="primary">Approve</span><span className="ghost">Redirect</span></div>
          <div className="who"><Human initials="PN" /> Priya N. · Support lead</div>
        </div>
        <p className="receipt mono">6 steps · 41s · $0.08 · 88% of context reused</p>
        <p className="audit mono">Audit log · append-only · Export</p>
      </aside>
    </div>
  );
}
