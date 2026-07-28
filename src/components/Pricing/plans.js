import enPlans from '../../i18n/plans/en';
import esPlans from '../../i18n/plans/es';

/**
 * Pricing plans (v2) — everything editable here.
 * features:
 * - `included: false` renders the gray X row.
 * - `strong: true` renders the label in semibold.
 * - `details` makes the row expandable (the "+" button):
 *   { type: 'text', text } | { type: 'list', items } |
 *   { type: 'groups', groups: [{ title, items }] }
 */
const ALL_TOOLS_GROUPS = [
  {
    title: '(Maky/Marketing)',
    items: [
      'Gestor de tráfego pago / LPs de venda',
      'Gerador de blog/AEO',
      'Gerenciador de comentários',
      'Criador/agendador de posts',
    ],
  },
  {
    title: '(Waz/Atendimento)',
    items: [
      'Prospecção outbound Whatsapp e ligação',
      'Gerador de propostas comerciais',
      'SDR no Whatsapp',
    ],
  },
  { title: '(Fin/Finanças)', items: ['Fluxo de caixa'] },
  { title: '(Juri/Jurídico)', items: ['Assinatura e gestão de contratos'] },
  { title: '(Pipo/Recursos Humanos)', items: ['Triagem de CVs'] },
  { title: '(Opy/Operações)', items: ['Gestão de escalas'] },
];

export const PLANS = [
  {
    id: 'start',
    name: 'Essential',
    description: 'Para quem está começando a automatizar a operação.',
    price: 'R$2.000',
    period: '/mês',
    cta: {
      label: 'Fale com um consultor',
      variant: 'outline',
      arrow: true,
      href: 'https://wa.me/551150395056?text=Oi%21%20Vim%20pelo%20site%20da%20Squad%20e%20me%20interessei%20pelo%20plano%20Essential.%20Pode%20me%20contar%20mais%3F%20%F0%9F%99%82',
    },
    featured: false,
    features: [
      {
        label: '1 agente de IA à sua escolha e suas ferramentas',
        included: true,
        strong: true,
        details: {
          type: 'text',
          text: 'Qualquer um dos agentes e suas ferramentas',
        },
      },
      { label: 'Onboarding guiado passo a passo', included: true },
      { label: 'Mentoria em grupo', included: false },
      { label: 'Mentoria individual', included: false },
      { label: 'Suporte prioritário', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Business',
    description:
      'Todas as soluções e mentorias. O time completo trabalhando por você.',
    price: 'R$3.500',
    period: '/mês',
    cta: {
      label: 'Quero o Business',
      variant: 'pro',
      href: 'https://wa.me/551150395056?text=Oi%21%20Vim%20pelo%20site%20da%20Squad%20e%20me%20interessei%20pelo%20plano%20Business.%20Pode%20me%20contar%20mais%3F%20%F0%9F%99%82',
    },
    featured: true,
    badge: 'Mais escolhido',
    features: [
      {
        label: 'Todos os 6 agentes',
        included: true,
        strong: true,
        details: {
          type: 'list',
          items: [
            'Maky (Marketing)',
            'Waz (Atendimento)',
            'Fin (Finanças)',
            'Opy (Operações)',
            'Juri (Jurídico)',
            'Pipo (Recursos Humanos)',
          ],
        },
      },
      {
        label: 'Todas as ferramentas',
        included: true,
        strong: true,
        details: { type: 'groups', groups: ALL_TOOLS_GROUPS },
      },
      {
        label: '8 Mentorias em grupo',
        included: true,
        details: {
          type: 'text',
          text: 'Acesso a 8 mentorias ao vivo que fazemos todos os dias',
        },
      },
      { label: 'Onboarding guiado passo a passo', included: true },
      { label: 'Suporte prioritário', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description:
      'Para operações que precisam de escala, segurança e atendimento dedicado.',
    priceLabel: 'A partir de',
    price: 'R$6.000',
    period: null,
    cta: {
      label: 'Fale com um consultor',
      variant: 'outline',
      arrow: true,
      href: 'https://wa.me/551150395056?text=Oi%21%20Vim%20pelo%20site%20da%20Squad%20e%20me%20interessei%20pelo%20plano%20Enterprise.%20Pode%20me%20contar%20mais%3F%20%F0%9F%99%82',
    },
    featured: false,
    features: [
      {
        label: 'Todas as ferramentas',
        included: true,
        strong: true,
        details: { type: 'groups', groups: ALL_TOOLS_GROUPS },
      },
      {
        label: '16 Mentorias em grupo',
        included: true,
        details: { type: 'text', text: 'Acesso a todas as mentorias' },
      },
      {
        label: 'Mentoria individual',
        included: true,
        details: {
          type: 'text',
          text: 'Gerente de conta exclusivo que te dá suporte sempre que quiser',
        },
      },
      { label: 'Onboarding guiado passo a passo', included: true },
      { label: 'Suporte prioritário', included: true },
    ],
  },
];

/* --- i18n: sobrepõe só o texto por idioma (nomes de plano e preços ficam). --- */
const PLAN_OVERRIDES = { en: enPlans, es: esPlans };

function mergeFeature(feature, ov) {
  if (!ov) return feature;
  const mf = { ...feature };
  if (ov.label) mf.label = ov.label;
  if (feature.details && ov.details) {
    mf.details = { ...feature.details };
    if (ov.details.text) mf.details.text = ov.details.text;
    if (ov.details.items) mf.details.items = ov.details.items;
    if (ov.details.groups) mf.details.groups = ov.details.groups;
  }
  return mf;
}

function mergePlan(plan, ov) {
  if (!ov) return plan;
  const mp = { ...plan };
  if (ov.name) mp.name = ov.name;
  if (ov.description) mp.description = ov.description;
  if (ov.period) mp.period = ov.period;
  if (ov.priceLabel) mp.priceLabel = ov.priceLabel;
  if (ov.badge) mp.badge = ov.badge;
  if (ov.cta && ov.cta.label) mp.cta = { ...plan.cta, label: ov.cta.label };
  if (ov.features) mp.features = plan.features.map((f, i) => mergeFeature(f, ov.features[i]));
  return mp;
}

/* Inglês usa vírgula como separador de milhar (R$2,000); PT e ES mantêm o
   ponto (R$2.000). Os preços não têm centavos, então a troca é segura. */
function localizePrice(price, locale) {
  return locale === 'en' && price ? price.replace(/\./g, ',') : price;
}

export function getPlans(locale) {
  const ov = PLAN_OVERRIDES[locale];
  return PLANS.map((plan) => {
    const merged = ov ? mergePlan(plan, ov[plan.id]) : { ...plan };
    return merged.price
      ? { ...merged, price: localizePrice(merged.price, locale) }
      : merged;
  });
}
