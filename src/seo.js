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

export function getSeo(path) {
  const clean = (path || '/').replace(/\/+$/, '') || '/';
  return SEO[clean] || SEO['/'];
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
