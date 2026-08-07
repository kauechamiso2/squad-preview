import caseJuliaPhoto from '../../assets/case-julia-photo.jpg';
import logoBrigadayrosWhite from '../../assets/logo-brigadayros-white.png';
import arianePhoto from '../../assets/graos-ariane-photo.jpg';
import logoGraosBrasilWhite from '../../assets/logo-graos-brasil-white.png';

/* Vídeos ficam em /public/videos. Prefixa com a base do Vite (import.meta.env
   .BASE_URL) para funcionarem também no preview sob subpath — GitHub Pages
   /squad-preview/ — onde o caminho absoluto "/videos/..." apontaria pra raiz
   errada. Em produção a base é "/", então nada muda. */
const video = (name) => `${import.meta.env.BASE_URL}videos/${name}`;

/**
 * Everything on each client card is editable here: quote, name, role,
 * company logo (rendered white over the video), the static thumbnail, a short
 * lightweight loop that plays muted on hover, and the Vidalytics embed (id +
 * url) opened in the modal on click.
 *
 * `logoVariant` picks the logo size: 'wordmark' (wide) or 'emblem' (circular).
 */

/* Júlia — vídeo com legenda em inglês (usado em EN e ES); o PT mantém o
   vídeo original definido em CLIENTS abaixo. */
const CASE_JULIA_SUBTITLED = {
  id: 'vidalytics_embed_rRJrrtcO9rjsghOm',
  url: 'https://fast.vidalytics.com/embeds/prUtymBe/rRJrrtcO9rjsghOm/',
};
/* O loop de hover do PT tem legenda em português queimada; EN/ES usam a
   versão com legenda em inglês. */
const CASE_JULIA_PREVIEW_EN = video('case-julia-depoimento-preview-en.mp4');

/* Grãos Brasil — mesmo depoimento em dois embeds: PT e uma versão
   legendada para EN/ES. O loop de hover segue o idioma da legenda. */
const GRAOS_VIDALYTICS_PT = {
  id: 'vidalytics_embed_sd6K69zhxdrk2X4E',
  url: 'https://fast.vidalytics.com/embeds/prUtymBe/sd6K69zhxdrk2X4E/',
};
const GRAOS_VIDALYTICS_INTL = {
  id: 'vidalytics_embed_cwbKJIevmOWPkIzQ',
  url: 'https://fast.vidalytics.com/embeds/prUtymBe/cwbKJIevmOWPkIzQ/',
};
const GRAOS_PREVIEW_EN = video('graos-depoimento-preview-en.mp4');

const OVERRIDES = {
  en: [
    {
      quote:
        '“Squad didn’t just automate our customer service. It unlocked the company’s growth.”',
      role: 'CEO & Founder - Brigadayros',
      vidalytics: CASE_JULIA_SUBTITLED,
      previewVideo: CASE_JULIA_PREVIEW_EN,
    },
    {
      quote:
        '“The customer can’t tell they’re talking to an AI. It really feels like a salesperson.”',
      role: 'Sales Manager - Brasil Grãos',
      vidalytics: GRAOS_VIDALYTICS_INTL,
      previewVideo: GRAOS_PREVIEW_EN,
    },
  ],
  es: [
    {
      quote:
        '“Squad no solo automatizó nuestra atención. Destrabó el crecimiento de la empresa.”',
      role: 'CEO y Fundadora - Brigadayros',
      vidalytics: CASE_JULIA_SUBTITLED,
      previewVideo: CASE_JULIA_PREVIEW_EN,
    },
    {
      quote:
        '“El cliente no percibe que está hablando con una IA. Realmente es un vendedor.”',
      role: 'Gerente Comercial - Brasil Grãos',
      vidalytics: GRAOS_VIDALYTICS_INTL,
      previewVideo: GRAOS_PREVIEW_EN,
    },
  ],
};

/* Texto e vídeo por idioma (nome/logo ficam); campo faltando cai para o PT. */
export function getClients(locale) {
  const ov = OVERRIDES[locale];
  if (!ov) return CLIENTS;
  return CLIENTS.map((c, i) => (ov[i] ? { ...c, ...ov[i] } : c));
}

export const CLIENTS = [
  {
    quote:
      '"O Squad não só automatizou nosso atendimento. Ele destravou o crescimento da empresa."',
    name: 'Júlia Nussbacker',
    role: 'CEO & Founder - Brigadayros',
    logo: logoBrigadayrosWhite,
    logoAlt: 'Brigadayros',
    logoVariant: 'wordmark',
    image: caseJuliaPhoto,
    // Enquadramento: centraliza a pessoa no card (foto e vídeo são takes
    // diferentes, por isso posições distintas).
    imagePosition: '40% 50%',
    videoPosition: '36% 50%',
    previewVideo: video('case-julia-depoimento-preview.mp4'),
    vidalytics: {
      id: 'vidalytics_embed_ELGZBliCVjBkfcJt',
      url: 'https://fast.vidalytics.com/embeds/prUtymBe/ELGZBliCVjBkfcJt/',
    },
  },
  {
    quote:
      '"O cliente não consegue perceber que tá falando com uma IA. Realmente é um vendedor."',
    name: 'Ariane Lima',
    role: 'Gerente Comercial - Brasil Grãos',
    logo: logoGraosBrasilWhite,
    logoAlt: 'Brasil Grãos Alimentos',
    logoVariant: 'emblem',
    image: arianePhoto,
    imagePosition: '58% 50%',
    videoPosition: '56% 50%',
    previewVideo: video('graos-depoimento-preview.mp4'),
    vidalytics: GRAOS_VIDALYTICS_PT,
  },
];
