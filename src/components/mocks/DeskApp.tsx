/* eslint-disable @next/next/no-img-element -- static marks inside a scaled mockup */
import { Chip, Human, Ring } from '../ui';

const MARK = '/brand/star.webp';

const TICKETS = [
  { t: 'Item arrived damaged', c: 'R. Mehta', s: 'working', owner: 'agent', sel: true },
  { t: 'Change billing email', c: 'Harbor Supply', s: 'done', owner: 'agent' },
  { t: 'Bulk discount for 40 seats', c: 'Globex', s: 'handed', owner: 'PN' },
  { t: 'Export failing on Safari', c: 'Initech', s: 'queued', owner: 'AK' },
] as const;
const NAMES = { PN: 'Priya N.', AK: 'Arjun K.' };

const TILES = [
  { n: 'Desk', mark: MARK, g: '', cur: true },
  { n: 'Ledger', mark: MARK, g: '' },
  { n: 'Agents', mark: MARK, g: '' },
  { n: 'Account', mark: MARK, g: '' },
];

/** Lumenar Desk (example product). The agent arrives in its own panel, with a draft a person sends. */
export default function DeskApp() {
  return (
    <div className="app app-day">
      <header className="appbar">
        <span className="ptile sm cur"><img src={MARK} className="logo-star" alt="" width={14} height={18} /></span>
        <b>Lumenar Desk</b>
        <span className="search">Search tickets</span>
        <Human initials="PN" />
        <div className="switcher" aria-label="App switcher (sample)">
          {TILES.map((a) => (
            <span key={a.n} className="app-tile">
              <span className={`ptile ${a.g} ${a.cur ? 'cur' : ''}`}><img src={a.mark} className="logo-star" alt="" width={18} height={24} /></span>
              {a.n}
            </span>
          ))}
        </div>
      </header>
      <div className="daybody">
        <nav className="side" aria-label="Desk sections (sample)">
          <span className="on">Inbox <i>128</i></span><span>Customers</span><span>Reports</span><span>Settings</span>
          <p className="rail-foot">Sample Co · sample data</p>
        </nav>
        <div className="daymain">
          <div className="metrics3">
            <div className="metric"><span className="label">Open tickets</span><b>128</b><span className="dim">−14 since Monday</span></div>
            <div className="metric"><span className="label">First reply</span><b>2h 14m</b><span className="dim">median, this week</span></div>
            <div className="metric"><span className="label">Resolved by agents</span><b>61%</b><span className="dim">with a person&rsquo;s sign-off</span></div>
          </div>
          <table>
            <thead><tr><th>Ticket</th><th>Customer</th><th>State</th><th>Owner</th></tr></thead>
            <tbody>
              {TICKETS.map((r) => (
                <tr key={r.t} className={'sel' in r ? 'sel' : undefined}>
                  <td>{r.t}</td><td>{r.c}</td><td><Chip state={r.s} /></td>
                  <td>
                    {r.owner === 'agent'
                      ? <><Ring size="xs" working={r.s === 'working'} />Support Agent</>
                      : <><Human size="xs" initials={r.owner} />{NAMES[r.owner]}</>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="empty">
            <span className="ptile lg"><img src={MARK} className="logo-star" alt="" width={18} height={24} /></span>
            <div><b>No reports yet</b><p className="dim">Your first report folds out here once a week of tickets is in.</p></div>
            <span className="ghost">New report</span>
          </div>
        </div>
        <aside className="agentpanel" aria-label="Agent panel (sample)">
          <div className="ap-head">
            <Ring working />
            <div><b>Support Agent</b><span className="ai-label">AI agent · Lumenar</span></div>
          </div>
          <Chip state="working">Drafting a reply</Chip>
          <div className="vellum">
            <p className="label">Draft</p>
            <p>Hi Ravi, I&rsquo;m sorry the lamp arrived cracked. I&rsquo;ve set up a full refund of $48.00 to your original payment, and you don&rsquo;t need to send it back. You&rsquo;ll see it in 3 to 5 working days.</p>
          </div>
          <p className="mono dim">6 steps · 41s · cited: Refund policy §2</p>
          <div className="btns"><span className="primary">Send</span><span className="ghost">Edit</span></div>
        </aside>
      </div>
    </div>
  );
}
