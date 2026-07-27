// English overrides for Pricing plans (src/components/Pricing/plans.js).
// Plan names (Essential/Business/Enterprise) and prices stay as the source.
const TOOLS_GROUPS = [
  {
    title: '(Maky/Marketing)',
    items: [
      'Paid-traffic manager / sales landing pages',
      'Blog/AEO generator',
      'Comment manager',
      'Post creator/scheduler',
    ],
  },
  {
    title: '(Waz/Support)',
    items: [
      'WhatsApp & call outbound prospecting',
      'Sales proposal generator',
      'SDR on WhatsApp',
    ],
  },
  { title: '(Fin/Finance)', items: ['Cash flow'] },
  { title: '(Juri/Legal)', items: ['Contract signing & management'] },
  { title: '(Pipo/Human Resources)', items: ['Resume screening'] },
  { title: '(Opy/Operations)', items: ['Schedule management'] },
];

export default {
  start: {
    description: 'Perfect for businesses taking their first step into AI automation.',
    period: '/mo',
    cta: { label: 'Get started' },
    features: [
      {
        label: '1 AI agent of your choice and its tools',
        details: { text: 'Any of the agents and their tools' },
      },
      { label: 'Guided, step-by-step onboarding' },
      { label: 'Group mentorship' },
      { label: 'One-on-one mentorship' },
      { label: 'Priority support' },
    ],
  },
  pro: {
    description:
      'Every agent and every session. The full team working for you.',
    period: '/mo',
    badge: 'Most popular',
    cta: { label: 'I want Business' },
    features: [
      {
        label: 'All 6 agents',
        details: {
          items: [
            'Maky (Marketing)',
            'Waz (Support)',
            'Fin (Finance)',
            'Opy (Operations)',
            'Juri (Legal)',
            'Pipo (Human Resources)',
          ],
        },
      },
      { label: 'All tools', details: { groups: TOOLS_GROUPS } },
      {
        label: '8 group mentoring sessions',
        details: { text: 'Access to 8 live mentorships we run every day' },
      },
      { label: 'Guided, step-by-step onboarding' },
      { label: 'Priority support' },
    ],
  },
  enterprise: {
    description:
      'For operations that need scale, security, and dedicated support.',
    priceLabel: 'Starting at',
    cta: { label: 'Talk to a consultant' },
    features: [
      { label: 'All tools', details: { groups: TOOLS_GROUPS } },
      {
        label: '16 group mentoring sessions',
        details: { text: 'Access to all mentorships' },
      },
      {
        label: 'One-on-one mentorship',
        details: {
          text: 'A dedicated account manager who supports you whenever you need',
        },
      },
      { label: 'Guided, step-by-step onboarding' },
      { label: 'Priority support' },
    ],
  },
};
