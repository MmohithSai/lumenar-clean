/* eslint-disable @next/next/no-img-element -- static marks inside a scaled mockup */
import { Chip, Ring } from '../ui';

const MARK = '/brand/star.webp';

/** The Lumenar account: one organisation, one credit balance. Sample data throughout. */
export default function AccountApp() {
  return (
    <div className="app app-dawn">
      <aside className="rail">
        <div className="brand"><img src={MARK} className="logo-star" alt="" width={15} height={20} /><span>Lumenar</span></div>
        <nav aria-label="Account sections (sample)">
          <span className="on">Overview</span><span>Credits</span><span>Invoices</span><span>Members</span><span>Trust centre</span>
        </nav>
        <div className="rail-foot">Sample Co · sample data</div>
      </aside>
      <div className="dawnmain">
        <div className="credits">
          <span className="label">Lumenar credits left this month</span>
          <b>42,180</b>
          <div className="bar" role="img" aria-label="58% of credits used"><i /></div>
          <span className="dim">58% used · renews 1 December · agents are billed per resolved session</span>
        </div>
        <div className="cols2">
          <div>
            <p className="label">Usage</p>
            <table>
              <thead><tr><th>What</th><th>Billed by</th><th>This month</th></tr></thead>
              <tbody>
                <tr><td><Ring size="xs" />Support Agent</td><td>1,520 resolved sessions</td><td className="mono">18,240 cr</td></tr>
                <tr><td><Ring size="xs" />Billing Agent</td><td>610 resolved sessions</td><td className="mono">7,320 cr</td></tr>
                <tr><td><span className="ptile xs"><img src={MARK} className="logo-star" alt="" width={8} height={11} /></span>Lumenar Desk</td><td>12 seats</td><td className="mono">$348</td></tr>
                <tr><td><span className="ptile xs"><img src={MARK} className="logo-star" alt="" width={8} height={11} /></span>Lumenar Ledger</td><td>4 seats</td><td className="mono">$116</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="label">Trust centre</p>
            <table>
              <tbody>
                <tr><td>Audit log</td><td>Append-only, kept 1 year, exportable</td></tr>
                <tr><td>Data residency</td><td>Choose a region per workspace</td></tr>
                <tr><td>Approvals</td><td>Required for refunds and anything irreversible</td></tr>
                <tr><td>Certifications</td><td><Chip state="queued">Planned</Chip> SOC 2 Type II, ISO 42001</td></tr>
              </tbody>
            </table>
            <p className="label" style={{ marginTop: 14 }}>Invoices</p>
            <table>
              <tbody>
                <tr><td>October 2026</td><td className="mono">$2,184.00</td><td><Chip state="done">Paid</Chip></td></tr>
                <tr><td>September 2026</td><td className="mono">$1,960.00</td><td><Chip state="done">Paid</Chip></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
