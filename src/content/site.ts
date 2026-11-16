/* All copy and data in one place.
 * Real facts: the metrics, the status list and the team.
 * Anything invented (agents, products, prices) is marked `example` and renders with an "Example" badge. */

export const EMAIL = 'lumenar.dev@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/company/lumenar.in/posts';
export const LEGAL_NAME = 'Lumenar Global Pvt. Ltd.';

export const NAV = [
  { href: '/agents', label: 'Agents' },
  { href: '/software', label: 'Software' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/trust', label: 'Trust' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/company', label: 'Company' },
];

export const RUNS_ON = ['vLLM', 'SGLang', 'OpenAI-compatible API', 'Open models'];

/** Measured on Lumenar's own coding-agent logs. */
export const METRICS = [
  { value: '99.2%', label: 'of all tokens in our own agent sessions were input, not output' },
  { value: '88.5%', label: 'of those input tokens had been sent before' },
  { value: '1.43B', label: 'prompt tokens measured across 17,780 model calls' },
];

/** Cost model for one 60-turn example task. A model, not a measurement. `share` is the bar width against the first row. */
export const COST_MODEL = [
  { label: 'No reuse', value: '$2.95', share: 100 },
  { label: '+ prefix cache', value: '$0.47', share: 16 },
  { label: '+ cache and step routing', value: '$0.30', share: 10 },
];

/** The four mechanisms of the session layer. */
export const MECHANISMS = [
  {
    name: 'Keeps each session on its cache',
    tags: ['KV cache', 'Session routing'],
    desc: 'Requests from one agent session go to the GPU that already holds its KV cache, so old context isn’t computed again.',
  },
  {
    name: 'Lays out prompts so they stay cacheable',
    tags: ['Prefix caching', 'Prompt layout'],
    desc: 'Stable parts go first and new turns go last: system prompt, tools, repo map, then turns. One changed token early in the prompt breaks the cache for everything after it.',
  },
  {
    name: 'Picks a model for each step',
    tags: ['Step routing', 'Small + large models'],
    desc: 'Reading files, searching and running tests go to a small model. Planning and debugging go to a large one.',
  },
  {
    name: 'Hands the session over on a switch',
    tags: ['Session log', 'Model handoff'],
    desc: 'The session lives in a log that no single model owns, so a new model can pick it up where the last one stopped.',
  },
];

/** What happens when you switch models mid-session. */
export const SWITCH_STEPS = [
  { name: 'Freeze', desc: 'Stop at a clean turn boundary.' },
  { name: 'Compact', desc: 'Fold old turns into the session log, keeping the plan, decisions and open files.' },
  { name: 'Render', desc: 'Write the log in the new model’s chat template and tool format.' },
  { name: 'Warm up', desc: 'One prefill fills the new model’s cache.' },
  { name: 'Check', desc: 'A short probe confirms the new model knows the plan.' },
  { name: 'Go on', desc: 'The agent continues from the same turn.' },
];

export const HOW_AN_AGENT_WORKS = [
  { name: 'Plan', desc: 'The agent writes its plan first. A person can approve it or change it before any work starts.' },
  { name: 'Run', desc: 'Each step is traced: what it read, which tool it called, how long it took.' },
  { name: 'Approve', desc: 'Anything irreversible, like a refund or a merge, waits at a gate with Approve and Redirect.' },
  { name: 'Receipt', desc: 'Every session ends with a receipt: steps, time and cost. The audit log is append-only.' },
];

/** Example agents. Job title plus catalogue ID. */
export const AGENTS = [
  { title: 'Support Agent', id: 'LMN-2041', job: 'Answers tickets, looks up orders and drafts replies.', tools: ['tickets.read', 'orders.get', 'policy.search'], approval: 'Refunds and credits' },
  { title: 'Billing Agent', id: 'LMN-2077', job: 'Handles invoices, failed payments and plan changes.', tools: ['invoices.get', 'payments.retry', 'plans.change'], approval: 'Any refund or plan downgrade' },
  { title: 'Research Agent', id: 'LMN-2110', job: 'Reads your data and writes the weekly summary.', tools: ['warehouse.query', 'docs.search', 'report.write'], approval: 'Sending a report outside the team' },
  { title: 'Code Review Agent', id: 'LMN-2153', job: 'Reviews pull requests and runs the tests.', tools: ['repo.read', 'tests.run', 'pr.comment'], approval: 'Merging or pushing to main' },
  { title: 'Onboarding Agent', id: 'LMN-2190', job: 'Sets up new accounts and sends the welcome sequence.', tools: ['accounts.create', 'email.draft', 'crm.update'], approval: 'The first email to each account' },
];

export const AGENT_FEATURES = [
  { name: 'Plan first', desc: 'No step runs before the plan is written down. You can approve it, change it or stop it.' },
  { name: 'Step receipts', desc: 'Each step shows what it did, the tool it called and its time. Each session shows steps · time · cost.' },
  { name: 'Trace and audit log', desc: 'The trail of every session is kept in an append-only log you can export.' },
  { name: 'Approval gates', desc: 'Refunds, merges and anything else you mark irreversible wait for a person.' },
  { name: 'Hand-offs to people', desc: 'When a case needs judgement, the agent hands it to a named person with the context attached.' },
  { name: 'Stop, any time', desc: 'A live timer runs while an agent works, next to a Stop button that ends the session at once.' },
];

/** Products. Both are examples while Lumenar is in pilot. */
export const PRODUCTS = [
  { name: 'Lumenar Desk', example: true, desc: 'A support inbox where an agent drafts the reply and a person sends it.' },
  { name: 'Lumenar Ledger', example: true, desc: 'Invoices and reconciliation, with an agent that matches payments and flags the odd ones.' },
];

/** Example pricing while Lumenar is in pilot. */
export const PLANS = [
  { name: 'Pilot', price: '$0', unit: 'for 30 days', desc: 'One agent on one workflow, set up with us, to see the receipts on your own work.', items: ['1 agent', 'Up to 500 resolved sessions', 'Weekly review with the team'], cta: 'Request a pilot' },
  { name: 'Agents', price: '12 credits', unit: 'per resolved session', desc: 'Pay when an agent resolves a session, from one balance of Lumenar credits.', items: ['Any number of agents', 'Approval gates and audit log', '$10 per 1,000 credits'], cta: 'Talk to us', featured: true },
  { name: 'Software', price: '$29', unit: 'per seat / month', desc: 'Lumenar products like Desk and Ledger, with agents inside.', items: ['Per-seat billing', 'Agents billed in credits', 'Every product, one account'], cta: 'Talk to us' },
  { name: 'Enterprise', price: 'Custom', unit: 'annual', desc: 'Your models, your region, your terms.', items: ['Open models on your own GPUs', 'Data residency per workspace', 'A named engineer'], cta: 'Talk to us' },
];

export const PLAN_COMPARE: { row: string; cells: string[] }[] = [
  { row: 'Agents', cells: ['1', 'Unlimited', 'Inside products', 'Unlimited'] },
  { row: 'Billed by', cells: ['Free', 'Resolved session', 'Seat', 'Contract'] },
  { row: 'Approval gates', cells: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { row: 'Audit log export', cells: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { row: 'Open models, no lock-in', cells: ['Yes', 'Yes', 'Yes', 'Yes'] },
  { row: 'Your own GPUs', cells: ['No', 'No', 'No', 'Yes'] },
  { row: 'Support', cells: ['Weekly review', 'Email', 'Email', 'Named engineer'] },
];

export const PRICING_FAQ = [
  { q: 'Are these the real prices?', a: 'Not yet. Lumenar is in pilot, so every figure on this page is example pricing. Pilot terms are agreed with each team.' },
  { q: 'What is a resolved session?', a: 'One piece of work an agent finished, such as a ticket answered or a report written, and that wasn’t handed back unresolved. Sessions an agent hands to a person are not billed as resolved.' },
  { q: 'What are Lumenar credits?', a: 'One balance your whole organisation shares. Every agent draws from it, so you see one number, not one bill per agent.' },
  { q: 'Can we bring our own model?', a: 'Yes. The session layer runs open models on vLLM or SGLang and speaks the OpenAI-compatible API.' },
];

export const TRUST = [
  { name: 'Approvals', desc: 'Anything irreversible, like a refund, a merge or an email to a customer, waits at an approval gate. A named person approves or redirects it, and their name goes in the log.' },
  { name: 'Append-only audit log', desc: 'Every session leaves a trail: the plan, each step, each tool call, each approval. Entries are added, never edited, and the whole log exports.' },
  { name: 'Open models, no lock-in', desc: 'The session layer runs open models on vLLM and SGLang and speaks the OpenAI-compatible API. The session log belongs to no single model, so you can switch models mid-session.' },
  { name: 'How session logs are used', desc: 'A session log is the record of one agent’s work. It is used to run that session, to hand it to another model and to show you what happened. In a pilot we agree in writing what is kept, where, and for how long.' },
];

export const CERTIFICATIONS = ['SOC 2 Type II', 'ISO/IEC 42001'];

/** The real status list. No dates. */
export const STATUS = {
  done: [
    'A market study of 8.56M public posts and issues on inference',
    'The architecture, and a 12-week plan with go / no-go gates',
    'A baseline on real agent logs: 88.5% of prompt tokens repeat',
  ],
  next: [
    'A working prototype of the session layer. The build starts now.',
    'Paying customers',
    'An external benchmark. That’s what a pilot is for.',
  ],
};

/** What each group at Lumenar is responsible for. */
export const TEAMS = [
  { team: 'Labs', sells: 'Agents', desc: 'Builds and runs the agents, and the session layer underneath them.' },
  { team: 'Studio', sells: 'Software', desc: 'Makes the products people use every day, with agents inside.' },
  { team: 'Global', sells: 'The account and the company', desc: 'Holds the account, the credits, trust and the company itself.' },
];

export const TEAM = [
  { name: 'Dilshaan Momin', role: 'Founder and CEO' },
  { name: 'Mohd Guffran', role: 'Founding Engineer' },
  { name: 'Sk Mastan', role: 'Founding Engineer' },
];

/** Homepage copy. */
export const HOME = {
  announce: { tag: 'Pilot', text: 'Lumenar is in pilot. Put one agent on one real workflow.' },
  hero: {
    before: 'Agents that do the work, and',
    accent: 'show it.',
    lede: 'Each agent writes its plan first, leaves a receipt for every step, and waits for a person before anything irreversible.',
    primary: { href: '/contact', label: 'Request a pilot' },
    secondary: { href: '/agents', label: 'See the agents' },
  },
  statement: 'Agents mostly re-read. In our own coding-agent sessions, 99.2% of all tokens were input, and 88.5% of that input had been sent before. So we built the layer underneath: it keeps each session on its cache, picks a model for each step, and leaves you a receipt.',
  closing: {
    title: 'Put one agent on one real workflow.',
    body: 'A pilot is one agent, set up with us, on your own work. You keep the receipts.',
    primary: { href: '/contact', label: 'Request a pilot' },
    secondary: { href: '/changelog', label: 'Where we are' },
  },
};

/** Header dropdowns. Destinations exist on the inner pages. */
export const NAV_MENUS: Record<string, { href: string; title: string; desc: string }[]> = {
  '/agents': [
    { href: '/agents', title: 'Agent catalogue', desc: 'Support, billing, research, code review and onboarding.' },
    { href: '/agents#console', title: 'Agents console', desc: 'Plans, traces, approvals and receipts in one place.' },
    { href: '/agents#under-the-hood', title: 'Session layer', desc: 'Cache, step routing and model handoff.' },
  ],
};

/** The mini panels in the trust grid. Every row restates a sentence in TRUST. */
export const TRUST_ROWS: Record<string, { label: string; value: string }[]> = {
  Approvals: [{ label: 'Refund', value: 'Waits' }, { label: 'Merge', value: 'Waits' }, { label: 'Email to a customer', value: 'Waits' }],
  'Append-only audit log': [{ label: 'The plan', value: 'Logged' }, { label: 'Each tool call', value: 'Logged' }, { label: 'Each approval', value: 'Logged' }],
  'Open models, no lock-in': [{ label: 'vLLM', value: 'Runs on' }, { label: 'SGLang', value: 'Runs on' }, { label: 'API', value: 'OpenAI-compatible' }],
  'How session logs are used': [{ label: 'Run the session', value: 'Yes' }, { label: 'Hand to another model', value: 'Yes' }, { label: 'Show what happened', value: 'Yes' }],
};

export const initials = (name: string) =>
  name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
