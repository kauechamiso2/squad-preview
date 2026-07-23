// Per-route SEO metadata. Used both by the client entry (document title) and
// by the prerender script (static <head> injected into each generated page).

export const SITE_URL = 'https://squad.com';
export const SITE_NAME = 'Squad';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SEO = {
  '/': {
    title: 'Squad — um time de agentes de IA para o seu negócio',
    description:
      'O Squad é um time de agentes de IA que assume o marketing, as vendas, o financeiro e a operação da sua empresa. Trabalhando juntos, com contexto compartilhado, 24 horas por dia.',
    path: '/',
  },
  '/maky': {
    title: 'Maky — sua estrategista de marketing com IA | Squad',
    description:
      'A Maky é a agente de marketing do Squad: acompanha a concorrência, cria e agenda posts, responde comentários e coloca campanhas no ar — rodando todo dia pelo seu negócio.',
    path: '/maky',
  },
  '/waz': {
    title: 'Waz — seu especialista em vendas com IA | Squad',
    description:
      'O Waz é o agente de vendas do Squad: fala com sua base inteira no WhatsApp, monta propostas comerciais em minutos e atende seus clientes no automático — rodando todo dia pelo seu negócio.',
    path: '/waz',
  },
  '/fin': {
    title: 'Fin — seu gestor financeiro com IA | Squad',
    description:
      'O Fin é o agente financeiro do Squad: centraliza os pagamentos da sua empresa, mostra quanto entra e quanto sai e projeta o caixa do próximo mês — rodando todo dia pelo seu negócio.',
    path: '/fin',
  },
  '/pipo': {
    title: 'Pipo — seu especialista em pessoas com IA | Squad',
    description:
      'O Pipo é o agente de RH do Squad: treina sua equipe, responde as dúvidas do time na hora e organiza a triagem de currículos pra novas vagas — rodando todo dia pelo seu negócio.',
    path: '/pipo',
  },
  '/opy': {
    title: 'Opy — sua gestora de operações com IA | Squad',
    description:
      'A Opy é a agente de operações do Squad: monta a escala do seu time, avisa quando um turno fica sem cobertura e deixa o colaborador pedir troca direto pelo app — rodando todo dia pelo seu negócio.',
    path: '/opy',
  },
  '/juri': {
    title: 'Juri — seu jurídico de plantão com IA | Squad',
    description:
      'A Juri é a agente jurídica do Squad: organiza todos os seus contratos num só lugar, avisa quando algum está perto de vencer e deixa o e-mail de renovação pronto pra você enviar — rodando todo dia pelo seu negócio.',
    path: '/juri',
  },
  '/aprendizagem': {
    title: 'Aprendizagem — cada ferramenta explicada por gente de verdade | Squad',
    description:
      'Mentoria ao vivo, curso no seu tempo e um especialista te acompanhando. Você aprende a usar cada módulo do Squad com ajuda de verdade.',
    path: '/aprendizagem',
  },
  '/integracoes': {
    title: 'Integrações — conecte suas ferramentas ao Squad',
    description:
      'O Squad se conecta às ferramentas que sua empresa já usa, como Instagram, WhatsApp, Shopify, Meta, Gmail e mais. Com a integração, os agentes ganham o contexto que precisam pra agir sozinhos.',
    path: '/integracoes',
  },
  '/conhecimento': {
    title: 'Base de Conhecimento — ensine uma vez, todo agente aprende | Squad',
    description:
      'A Base de Conhecimento do Squad reúne as regras, os processos, as perguntas frequentes e os artigos do seu negócio num só lugar. Todo agente consulta a mesma base, então a resposta é sempre a mesma.',
    path: '/conhecimento',
  },
  '/catalogo': {
    title: 'Catálogo — cadastre uma vez, todo agente vende certo | Squad',
    description:
      'Produtos e Serviços reúne o que você vende, o preço e o estoque num só lugar. Todo agente do Squad vende a partir dessa mesma informação, então preço, prazo e disponibilidade nunca ficam desencontrados.',
    path: '/catalogo',
  },
};

// Per-locale title/description overrides. Structural fields (path) stay on the
// PT base above; only the human-facing copy is translated here. Missing routes
// fall back to the PT base, so partial coverage never breaks a page.
export const SEO_I18N = {
  en: {
    '/': {
      title: 'Squad — a team of AI agents for your business',
      description:
        "Squad is a team of AI agents that takes over your company's marketing, sales, finance and operations. Working together, with shared context, 24 hours a day.",
    },
    '/maky': {
      title: 'Maky — your AI marketing strategist | Squad',
      description:
        "Maky is Squad's marketing agent: she tracks competitors, creates and schedules posts, replies to comments and launches campaigns — running every day for your business.",
    },
    '/waz': {
      title: 'Waz — your AI sales specialist | Squad',
      description:
        "Waz is Squad's sales agent: he talks to your entire base on WhatsApp, builds sales proposals in minutes and serves your customers automatically — running every day for your business.",
    },
    '/fin': {
      title: 'Fin — your AI finance manager | Squad',
      description:
        "Fin is Squad's finance agent: he centralizes your company's payments, shows what comes in and what goes out and projects next month's cash flow — running every day for your business.",
    },
    '/pipo': {
      title: 'Pipo — your AI people specialist | Squad',
      description:
        "Pipo is Squad's HR agent: he trains your team, answers their questions on the spot and organizes résumé screening for new roles — running every day for your business.",
    },
    '/opy': {
      title: 'Opy — your AI operations manager | Squad',
      description:
        "Opy is Squad's operations agent: she builds your team's schedule, flags when a shift is left uncovered and lets employees request swaps right from the app — running every day for your business.",
    },
    '/juri': {
      title: 'Juri — your on-call AI legal team | Squad',
      description:
        "Juri is Squad's legal agent: she keeps all your contracts in one place, warns you when one is about to expire and drafts the renewal email ready to send — running every day for your business.",
    },
    '/aprendizagem': {
      title: 'Learning — every tool explained by real people | Squad',
      description:
        'Live mentoring, a course at your own pace, and a specialist alongside you. You learn to use every Squad module with real help.',
    },
    '/integracoes': {
      title: 'Integrations — connect your tools to Squad',
      description:
        'Squad connects to the tools your company already uses, like Instagram, WhatsApp, Shopify, Meta, Gmail and more. With each integration, the agents get the context they need to act on their own.',
    },
    '/conhecimento': {
      title: 'Knowledge Base — teach once, every agent learns | Squad',
      description:
        "Squad's Knowledge Base brings your business's rules, processes, FAQs and articles together in one place. Every agent draws from the same base, so the answer is always the same.",
    },
    '/catalogo': {
      title: 'Catalog — set it up once, every agent sells it right | Squad',
      description:
        'Products and Services brings together what you sell, the price and the stock in one place. Every Squad agent sells from that same information, so price, delivery time and availability never fall out of sync.',
    },
  },
  es: {
    '/': {
      title: 'Squad — un equipo de agentes de IA para tu negocio',
      description:
        'Squad es un equipo de agentes de IA que asume el marketing, las ventas, las finanzas y la operación de tu empresa. Trabajando juntos, con contexto compartido, las 24 horas del día.',
    },
    '/maky': {
      title: 'Maky — tu estratega de marketing con IA | Squad',
      description:
        'Maky es la agente de marketing de Squad: sigue a la competencia, crea y programa publicaciones, responde comentarios y lanza campañas — trabajando todos los días por tu negocio.',
    },
    '/waz': {
      title: 'Waz — tu especialista en ventas con IA | Squad',
      description:
        'Waz es el agente de ventas de Squad: habla con toda tu base en WhatsApp, arma propuestas comerciales en minutos y atiende a tus clientes en automático — trabajando todos los días por tu negocio.',
    },
    '/fin': {
      title: 'Fin — tu gestor financiero con IA | Squad',
      description:
        'Fin es el agente financiero de Squad: centraliza los pagos de tu empresa, muestra cuánto entra y cuánto sale y proyecta la caja del próximo mes — trabajando todos los días por tu negocio.',
    },
    '/pipo': {
      title: 'Pipo — tu especialista en personas con IA | Squad',
      description:
        'Pipo es el agente de RR. HH. de Squad: entrena a tu equipo, responde las dudas del equipo al instante y organiza el filtrado de currículos para nuevas vacantes — trabajando todos los días por tu negocio.',
    },
    '/opy': {
      title: 'Opy — tu gestora de operaciones con IA | Squad',
      description:
        'Opy es la agente de operaciones de Squad: arma los turnos de tu equipo, avisa cuando un turno queda sin cobertura y deja que el colaborador pida cambios desde la app — trabajando todos los días por tu negocio.',
    },
    '/juri': {
      title: 'Juri — tu equipo legal de guardia con IA | Squad',
      description:
        'Juri es la agente legal de Squad: organiza todos tus contratos en un solo lugar, avisa cuando alguno está por vencer y deja el correo de renovación listo para enviar — trabajando todos los días por tu negocio.',
    },
    '/aprendizagem': {
      title: 'Aprendizaje — cada herramienta explicada por gente de verdad | Squad',
      description:
        'Mentoría en vivo, curso a tu ritmo y un especialista acompañándote. Aprendes a usar cada módulo de Squad con ayuda de verdad.',
    },
    '/integracoes': {
      title: 'Integraciones — conecta tus herramientas a Squad',
      description:
        'Squad se conecta a las herramientas que tu empresa ya usa, como Instagram, WhatsApp, Shopify, Meta, Gmail y más. Con la integración, los agentes obtienen el contexto que necesitan para actuar solos.',
    },
    '/conhecimento': {
      title: 'Base de Conocimiento — enseña una vez, todo agente aprende | Squad',
      description:
        'La Base de Conocimiento de Squad reúne las reglas, los procesos, las preguntas frecuentes y los artículos de tu negocio en un solo lugar. Todo agente consulta la misma base, así la respuesta es siempre la misma.',
    },
    '/catalogo': {
      title: 'Catálogo — cárgalo una vez, todo agente vende bien | Squad',
      description:
        'Productos y Servicios reúne lo que vendes, el precio y el stock en un solo lugar. Todo agente de Squad vende a partir de esa misma información, así el precio, el plazo y la disponibilidad nunca quedan desencontrados.',
    },
  },
};

export function getSeo(path) {
  const clean = (path || '/').replace(/\/+$/, '') || '/';
  return SEO[clean] || SEO['/'];
}

/**
 * Locale-aware SEO. Returns the PT base merged with the locale override for the
 * route (title + description). Unknown locales/routes fall back to PT.
 */
export function getLocalizedSeo(path, locale) {
  const clean = (path || '/').replace(/\/+$/, '') || '/';
  const base = SEO[clean] || SEO['/'];
  const override = (SEO_I18N[locale] && SEO_I18N[locale][clean]) || null;
  return override ? { ...base, ...override } : base;
}

/** Build the raw <head> tags (as an HTML string) for a route — used at build time. */
export function renderHeadTags(path) {
  const seo = getSeo(path);
  const url = `${SITE_URL}${seo.path === '/' ? '' : seo.path}`;
  const esc = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    // Open Graph
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(DEFAULT_OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(DEFAULT_OG_IMAGE)}" />`,
  ].join('\n    ');
}
