import caseJuliaPhoto from '../../assets/case-julia-photo.jpg';
import logoBrigadayros from '../../assets/logo-brigadayros.png';

const PT_VIDALYTICS = {
  id: 'ELGZBliCVjBkfcJt',
  url: 'https://fast.vidalytics.com/embeds/prUtymBe/ELGZBliCVjBkfcJt/',
};

/* Vidalytics only supports one live instance of a given embed id per page
   load — mounting the same id twice leaves every instance blank (confirmed
   by testing it directly). So only the middle card plays a real video for
   now; the outer two are static placeholders until they get their own
   distinct embed ids. */
const EN_VIDALYTICS = {
  id: 'rRJrrtcO9rjsghOm',
  url: 'https://fast.vidalytics.com/embeds/prUtymBe/rRJrrtcO9rjsghOm/',
};

/**
 * Testimonial cards. Each entry renders one vertical card:
 * - `vidalytics` (optional) full testimonial, played inline in the card.
 *   Cards without it render as a static placeholder (poster + text, no
 *   play button) until a real video is assigned.
 * - `poster`    frame shown while the video hasn't started
 * - `quote`     overlaid on the bottom of the card
 * - `name` / `role`
 * - `logo` / `logoAlt`  company wordmark, rendered white over the video
 *
 * Swapping a testimonial is editing one item here — nothing else.
 */
export const TESTIMONIALS = [
  {
    // Placeholder — sem vídeo próprio ainda.
    poster: caseJuliaPhoto,
    quote:
      '"O Squad não só automatizou nosso atendimento. Ele destravou o crescimento da empresa.”',
    name: 'Júlia Nussbacker',
    role: 'CEO & Founder',
    logo: logoBrigadayros,
    logoAlt: 'Brigadayros',
  },
  {
    poster: caseJuliaPhoto,
    quote:
      '"O Squad não só automatizou nosso atendimento. Ele destravou o crescimento da empresa.”',
    name: 'Júlia Nussbacker',
    role: 'CEO & Founder',
    logo: logoBrigadayros,
    logoAlt: 'Brigadayros',
    vidalytics: PT_VIDALYTICS,
  },
  {
    // Placeholder — sem vídeo próprio ainda.
    poster: caseJuliaPhoto,
    quote:
      '"O Squad não só automatizou nosso atendimento. Ele destravou o crescimento da empresa.”',
    name: 'Júlia Nussbacker',
    role: 'CEO & Founder',
    logo: logoBrigadayros,
    logoAlt: 'Brigadayros',
  },
];

/* Texto e vídeo variam por idioma; índice a índice, para que trocar um
   depoimento continue sendo editar um item de cada lista. */
const OVERRIDES = {
  en: [
    {
      quote:
        '“Squad didn’t just automate our customer service. It unlocked the company’s growth.”',
      role: 'CEO & Founder',
    },
    {
      quote:
        '“Squad didn’t just automate our customer service. It unlocked the company’s growth.”',
      role: 'CEO & Founder',
      vidalytics: EN_VIDALYTICS,
    },
    {
      quote:
        '“Squad didn’t just automate our customer service. It unlocked the company’s growth.”',
      role: 'CEO & Founder',
    },
  ],
  es: [
    {
      quote:
        '“Squad no solo automatizó nuestra atención. Destrabó el crecimiento de la empresa.”',
      role: 'CEO y Fundadora',
    },
    {
      quote:
        '“Squad no solo automatizó nuestra atención. Destrabó el crecimiento de la empresa.”',
      role: 'CEO y Fundadora',
      vidalytics: EN_VIDALYTICS,
    },
    {
      quote:
        '“Squad no solo automatizó nuestra atención. Destrabó el crecimiento de la empresa.”',
      role: 'CEO y Fundadora',
    },
  ],
};

/* Texto/vídeo por idioma; campo faltando cai para o PT. */
export function getClients(locale) {
  const ov = OVERRIDES[locale];
  if (!ov) return TESTIMONIALS;
  return TESTIMONIALS.map((c, i) => (ov[i] ? { ...c, ...ov[i] } : c));
}
