import caseJuliaPhoto from '../../assets/case-julia-photo.jpg';
import logoBrigadayros from '../../assets/logo-brigadayros.png';

/**
 * Everything on each client card is editable here: quote, name, role,
 * company logo, background image (the dark gradient is applied in code),
 * a short lightweight loop for the card's hover preview, and the Vidalytics
 * embed (id + url) played in the modal.
 */
const OVERRIDES = {
  en: [
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
  ],
};

/* Texto por idioma (nome/logo/vídeo ficam); campo faltando cai para o PT. */
export function getClients(locale) {
  const ov = OVERRIDES[locale];
  if (!ov) return CLIENTS;
  return CLIENTS.map((c, i) => (ov[i] ? { ...c, ...ov[i] } : c));
}

export const CLIENTS = [
  {
    quote:
      '"O Squad não só automatizou nosso atendimento. Ele destravou o crescimento da empresa.”',
    name: 'Júlia Nussbacker',
    role: 'CEO & Founder',
    logo: logoBrigadayros,
    logoAlt: 'Brigadayros',
    image: caseJuliaPhoto,
    previewVideo: '/videos/case-julia-depoimento-preview.mp4',
    vidalytics: {
      id: 'vidalytics_embed_ELGZBliCVjBkfcJt',
      url: 'https://fast.vidalytics.com/embeds/prUtymBe/ELGZBliCVjBkfcJt/',
    },
  },
];
