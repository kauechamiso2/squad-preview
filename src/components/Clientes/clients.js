import caseJuliaPhoto from '../../assets/case-julia-photo.jpg';
import logoBrigadayros from '../../assets/logo-brigadayros.png';

/**
 * Everything on each client card is editable here: quote, name, role,
 * company logo, background image (the dark gradient is applied in code),
 * a short lightweight loop for the card's hover preview, and the Vidalytics
 * embed (id + url) played in the modal.
 */
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
