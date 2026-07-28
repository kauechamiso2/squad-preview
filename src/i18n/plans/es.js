// Overrides en español para los planes (src/components/Pricing/plans.js).
const TOOLS_GROUPS = [
  {
    title: '(Maky/Marketing)',
    items: [
      'Gestor de tráfico pago / landing pages de venta',
      'Generador de blog/AEO',
      'Gestor de comentarios',
      'Creador/programador de posts',
    ],
  },
  {
    title: '(Waz/Atención)',
    items: [
      'Prospección outbound por WhatsApp y llamada',
      'Generador de propuestas comerciales',
      'SDR en WhatsApp',
    ],
  },
  { title: '(Fin/Finanzas)', items: ['Flujo de caja'] },
  { title: '(Juri/Legal)', items: ['Firma y gestión de contratos'] },
  { title: '(Pipo/Recursos Humanos)', items: ['Filtrado de CVs'] },
  { title: '(Opy/Operaciones)', items: ['Gestión de turnos'] },
];

export default {
  start: {
    description: 'Para quien está empezando a automatizar la operación.',
    period: '/mes',
    cta: { label: 'Habla con un consultor' },
    features: [
      {
        label: '1 agente de IA a tu elección y sus herramientas',
        details: { text: 'Cualquiera de los agentes y sus herramientas' },
      },
      { label: 'Onboarding guiado paso a paso' },
      { label: 'Mentoría en grupo' },
      { label: 'Mentoría individual' },
      { label: 'Soporte prioritario' },
    ],
  },
  pro: {
    description:
      'Todas las soluciones y mentorías. El equipo completo trabajando para ti.',
    period: '/mes',
    badge: 'Más elegido',
    cta: { label: 'Quiero el Business' },
    features: [
      {
        label: 'Los 6 agentes',
        details: {
          items: [
            'Maky (Marketing)',
            'Waz (Atención)',
            'Fin (Finanzas)',
            'Opy (Operaciones)',
            'Juri (Legal)',
            'Pipo (Recursos Humanos)',
          ],
        },
      },
      { label: 'Todas las herramientas', details: { groups: TOOLS_GROUPS } },
      {
        label: '8 mentorías en grupo',
        details: { text: 'Acceso a 8 mentorías en vivo que hacemos todos los días' },
      },
      { label: 'Onboarding guiado paso a paso' },
      { label: 'Soporte prioritario' },
    ],
  },
  enterprise: {
    description:
      'Para operaciones que necesitan escala, seguridad y atención dedicada.',
    priceLabel: 'A partir de',
    cta: { label: 'Habla con un consultor' },
    features: [
      { label: 'Todas las herramientas', details: { groups: TOOLS_GROUPS } },
      {
        label: '16 mentorías en grupo',
        details: { text: 'Acceso a todas las mentorías' },
      },
      {
        label: 'Mentoría individual',
        details: {
          text: 'Un gerente de cuenta exclusivo que te apoya siempre que quieras',
        },
      },
      { label: 'Onboarding guiado paso a paso' },
      { label: 'Soporte prioritario' },
    ],
  },
};
