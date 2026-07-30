import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import WhatsAppModal from '../saibamais/WhatsAppModal';
import {
  createWhatsAppSession,
  trackButtonClick,
  trackPageView,
} from './tracking';
import logoSquad from '../assets/logo-squad.svg';
import wazCharacter from '../assets/saibamais/waz-character.png';
import styles from './WazVendas2.module.css';

/*
 * Landing /waz-vendas — página de vendas completa do Waz, replicada do HTML
 * fornecido pelo time e vestida com o design system do site (Fustat/Inter,
 * preto/branco, eyebrow verde). CTAs seguem o fluxo padrão das landings:
 * popup de captura → WhatsApp, com tracking Pulse próprio.
 */


const WHATSAPP_NUMBER = '5511952134536';

function whatsappUrl(trackingCode, inviter) {
  const base = inviter
    ? `Olá! Recebi um convite do ${inviter} e quero começar com o Waz no meu time comercial.`
    : 'Olá! Quero começar com o Waz no meu time comercial.';
  const message = trackingCode ? `${base} [ref:${trackingCode}]` : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- Conteúdo ---------- */

const WINS = [
  {
    fact: 'Todo lead respondido em segundos.',
    cost: 'De madrugada, no feriado, no pico do expediente: o cliente chama e o Waz responde na hora.',
  },
  {
    fact: 'Follow-up que acontece sozinho.',
    cost: '“Vou pensar” vira retorno agendado. O Waz chama na hora certa, sem depender de memória.',
  },
  {
    fact: 'Sua base inteira comprando de novo.',
    cost: 'Clientes antigos reativados pelo WhatsApp oficial — a venda mais barata que existe.',
  },
  {
    fact: 'Proposta pronta em minutos.',
    cost: 'No padrão da sua marca, sem erro de preço. O lead recebe antes de esfriar.',
  },
  {
    fact: 'Funil visível do lead ao pós-venda.',
    cost: 'Cada negociação em sua etapa, com histórico completo. Nada some no WhatsApp de ninguém.',
  },
  {
    fact: 'Vendedor preparado antes do contato.',
    cost: 'Quem é o cliente, do que precisa, por onde começar — contexto pronto pra abordagem.',
  },
];

const FEATURES = [
  {
    eyebrow: 'Atendimento automático',
    title: 'Nenhum lead deveria esfriar esperando alguém ficar disponível.',
    text: 'Cliente que manda mensagem quer resposta agora. O Waz atende cada conversa na hora — de madrugada, no fim de semana, no meio do seu horário de pico — com o tom, as regras e o conhecimento da sua empresa.',
    bullets: [
      {
        icon: '⚡',
        title: 'Responde na hora, sempre',
        text: 'Sem depender de quem está on-line. Todo cliente atendido no momento em que chama.',
      },
      {
        icon: '🗣',
        title: 'Do jeito da sua empresa',
        text: 'Você define o tom, o que pode e o que não pode. A resposta soa como a sua marca — não como um robô genérico.',
      },
      {
        icon: '✓',
        title: 'Padrão em todas as conversas',
        text: 'O mesmo nível de atendimento para todo cliente, sem depender do humor ou da experiência de quem responde.',
      },
    ],
    quote:
      '“Pode sair do celular. Se um cliente chamar, eu respondo na hora — no tom da sua empresa.”',
    panel: 'chat',
  },
  {
    eyebrow: 'Ativação da base',
    title: 'Sua base não precisa ficar parada esperando o cliente lembrar de você.',
    text: 'Quem já comprou é a venda mais barata que existe. O Waz fala com a sua base inteira pelo WhatsApp — pela API oficial da Meta, sem risco de bloqueio — para reativar clientes antigos, avisar novidades e abrir novas conversas.',
    bullets: [
      {
        icon: '✓',
        title: 'Oficial e sem bloqueio',
        text: 'Campanhas em massa pela API oficial da Meta, com mensagens aprovadas e o número da empresa protegido.',
      },
      {
        icon: '◎',
        title: 'Cada mensagem para quem interessa',
        text: 'Separe a base em grupos — ativos, inativos, VIPs — e fale com cada um do jeito certo.',
      },
      {
        icon: '🕐',
        title: 'Agende e acompanhe',
        text: 'Programe a campanha para a melhor hora e veja a entrega contato a contato.',
      },
    ],
    quote:
      '“Sua base tem cliente pronto para comprar de novo. Eu vou atrás de cada um.”',
    panel: 'disparos',
  },
  {
    eyebrow: 'Gestão das oportunidades',
    title: 'Nenhuma oportunidade deveria desaparecer porque alguém esqueceu de acompanhar.',
    text: 'Lead no WhatsApp, negociação na cabeça, cliente antigo esquecido. O Waz organiza toda a jornada comercial num lugar só: você vê em que etapa está cada negociação, o que precisa ser feito hoje e nada some no meio do caminho.',
    bullets: [
      {
        icon: '▦',
        title: 'Funil visível, do lead ao pós-venda',
        text: 'Cada oportunidade em sua etapa, com histórico completo da conversa ao fechamento.',
      },
      {
        icon: '✓',
        title: 'Follow-up que não depende de memória',
        text: 'O Waz mostra quem precisa ser chamado hoje — antes que a oportunidade esfrie.',
      },
      {
        icon: '🔗',
        title: 'Conectado ao atendimento',
        text: 'A conversa e a negociação vivem no mesmo lugar. Nada de copiar informação de um app para outro.',
      },
    ],
    quote:
      '“Eu lembro de cada negociação e de quem precisa ser chamado hoje. Você só decide onde agir.”',
    panel: 'funil',
  },
  {
    eyebrow: 'Novas oportunidades',
    title: 'Seu vendedor nunca mais entra numa conversa no escuro.',
    text: 'Prospecção hoje é garimpo manual: procurar contato a contato e abordar sem saber nada de quem está do outro lado. O Waz encontra potenciais clientes, enriquece cada um com as informações que importam e entrega o lead pronto para uma abordagem com contexto.',
    bullets: [
      {
        icon: '🌐',
        title: 'Leads direto da internet',
        text: 'Listas criadas a partir de pesquisas na web — sem garimpar contato por contato.',
      },
      {
        icon: '⬆',
        title: 'Sua planilha, enriquecida',
        text: 'Já tem uma base? Suba a planilha e o Waz completa o que falta em cada lead.',
      },
      {
        icon: '🎯',
        title: 'Vendedor preparado antes do contato',
        text: 'Quem é, do que a empresa precisa, por onde começar — tudo antes da primeira mensagem.',
      },
    ],
    quote:
      '“Antes do seu vendedor fazer o primeiro contato, eu conto para ele quem é o cliente e por onde começar.”',
    panel: 'leads',
  },
];

const HUB = [
  { icon: '🌐', title: 'Encontra e prepara', text: 'leads com contexto' },
  { icon: '⚡', title: 'Atende na hora', text: 'todo dia, a qualquer hora' },
  { icon: '↻', title: 'Reativa a base', text: 'pelo WhatsApp oficial' },
  { icon: '▦', title: 'Organiza o funil', text: 'nada se perde' },
  { icon: '▤', title: 'Gera propostas', text: 'em minutos, no seu padrão' },
];

const IMPLEMENTATION = [
  {
    title: 'Onboarding guiado passo a passo',
    text: 'Do primeiro acesso ao Waz funcionando na sua operação, com orientação em cada etapa.',
  },
  {
    title: '4 mentorias em grupo por mês',
    text: 'Encontros recorrentes para tirar dúvidas, estruturar processos e destravar o uso.',
  },
  {
    title: 'Casos de uso para o seu negócio',
    text: 'Aprenda como empresas parecidas com a sua estão transformando o Waz em resultado.',
  },
  {
    title: 'Evolução contínua',
    text: 'A cada mês, um passo a mais: novas frentes da operação entrando no Waz.',
  },
];

const PLAN_ITEMS = [
  {
    title: 'O Waz completo no seu time',
    text: 'Atendimento automático, disparo oficial de WhatsApp, gestão de oportunidades, propostas e busca de leads.',
  },
  {
    title: 'Todas as ferramentas do Waz',
    text: 'Tudo o que o Waz faz hoje — e o que ele passar a fazer — dentro do mesmo plano.',
  },
  {
    title: 'Onboarding guiado passo a passo',
    text: 'Da configuração ao Waz rodando na sua operação, com orientação em cada etapa.',
  },
  {
    title: '4 mentorias em grupo por mês',
    text: 'Acompanhamento recorrente para transformar a ferramenta em resultado.',
  },
];

/* ---------- Mockups (recriados em CSS, sem imagens) ---------- */

function PanelChat() {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Conversas</span>
        <span className={styles.panelHeadNote}>domingo · 23h47</span>
        <span className={styles.pillDark}>Piloto automático</span>
      </div>
      <div className={styles.chat}>
        <p className={styles.bubbleIn}>
          Oi, ainda dá tempo de pedir pra entregar sexta?
          <span className={styles.bubbleTime}>23:47</span>
        </p>
        <p className={styles.bubbleOut}>
          Dá sim! Pedidos confirmados até terça chegam na sexta. Quer que eu já
          separe o seu?<span className={styles.bubbleTime}>23:47</span>
        </p>
        <p className={styles.bubbleIn}>
          Quero! Pode ser no cartão?
          <span className={styles.bubbleTime}>23:49</span>
        </p>
        <p className={styles.bubbleOut}>
          Pode! Vou te enviar o link de pagamento. Qualquer dúvida, é só me
          chamar por aqui. 👍<span className={styles.bubbleTime}>23:49</span>
        </p>
      </div>
    </div>
  );
}

function PanelDisparos() {
  const rows = [
    ['Reativação · clientes inativos', '1.240 contatos · 10 jul, 09:00', 'Agendada'],
    ['Volta às aulas · promoção', '860 contatos · 07 jul, 17:55', 'Enviada'],
    ['Aviso · novo horário', '3.180 contatos · 04 jul, 13:07', 'Enviada'],
    ['VIPs · pré-lançamento', '96 contatos', 'Rascunho'],
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Disparo de WhatsApp</span>
        <span className={styles.panelHeadNote}>Campanhas oficiais</span>
        <span className={styles.pillGreen}>+ Novo</span>
      </div>
      <div className={styles.statRow}>
        <div className={styles.stat}>
          <strong>18</strong>
          <span>Campanhas</span>
        </div>
        <div className={styles.stat}>
          <strong>2.847</strong>
          <span>Mensagens</span>
        </div>
        <div className={styles.stat}>
          <strong>312</strong>
          <span>Respostas</span>
        </div>
      </div>
      <ul className={styles.rowList}>
        {rows.map(([title, meta, status]) => (
          <li key={title} className={styles.row}>
            <div>
              <p className={styles.rowTitle}>{title}</p>
              <p className={styles.rowMeta}>{meta}</p>
            </div>
            <span
              className={
                status === 'Enviada' ? styles.pillGreen : styles.pillGray
              }
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelFunil() {
  const cols = [
    ['Novo · 6', ['Renan Costa — R$ 1.900', 'Dra. Paula M. — R$ 4.300']],
    ['Em conversa · 9', ['Julia Ribeiro — R$ 3.000', 'Auto Center Sul — R$ 12.500']],
    ['Proposta · 4', ['Acme Agrícola — R$ 35.100', 'André Ribeiro — R$ 1.500']],
    ['Fechamento · 3', ['Colégio Horizonte — R$ 22.800', 'Marcos Lima — R$ 8.400']],
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Funil de vendas</span>
        <span className={styles.panelHeadNote}>R$ 96.400 em negociação</span>
        <span className={styles.pillGreen}>4 para hoje</span>
      </div>
      <div className={styles.kanban}>
        {cols.map(([label, cards]) => (
          <div key={label} className={styles.kanbanCol}>
            <p className={styles.kanbanLabel}>{label}</p>
            {cards.map((card) => (
              <p key={card} className={styles.kanbanCard}>
                {card}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelPropostas() {
  const rows = [
    ['Solução de Hidratação — Acme Agrícola', 'R$ 35.100 · criada em 4 min', 'Vista'],
    ['Garrafa Térmica — Julia Ribeiro', 'R$ 3.000 · criada em 3 min', 'Enviada'],
    ['Copos Térmicos — André Ribeiro', 'R$ 1.500 · criada em 2 min', 'Aceita ✓'],
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Propostas</span>
        <span className={styles.panelHeadNote}>Gere, envie e acompanhe</span>
        <span className={styles.pillGreen}>+ Nova</span>
      </div>
      <div className={styles.statRow}>
        <div className={styles.stat}>
          <strong>6</strong>
          <span>Em aberto</span>
        </div>
        <div className={styles.stat}>
          <strong>5</strong>
          <span>Fechadas</span>
        </div>
        <div className={styles.stat}>
          <strong>R$ 313 mil</strong>
          <span>Em aberto</span>
        </div>
      </div>
      <ul className={styles.rowList}>
        {rows.map(([title, meta, status]) => (
          <li key={title} className={styles.row}>
            <div>
              <p className={styles.rowTitle}>{title}</p>
              <p className={styles.rowMeta}>{meta}</p>
            </div>
            <span
              className={
                status.startsWith('Aceita') ? styles.pillGreen : styles.pillGray
              }
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelLeads() {
  const rows = [
    ['OdontoPrime', 'Dra. Carla · sócia', '2 unidades · agenda cheia'],
    ['Sorriso & Cia', 'Rafael · gestor', 'abriu filial em maio'],
    ['Clínica Vitalle', 'Dr. Nuno · fundador', 'investe em anúncios'],
    ['DentCare', 'Ana · administrativo', 'atendimento só comercial'],
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Busca de leads</span>
        <span className={styles.panelHeadNote}>
          “clínicas odontológicas em Campinas”
        </span>
        <span className={styles.pillGreen}>32 encontrados</span>
      </div>
      <ul className={styles.rowList}>
        {rows.map(([company, contact, context]) => (
          <li key={company} className={styles.row}>
            <div>
              <p className={styles.rowTitle}>{company}</p>
              <p className={styles.rowMeta}>
                {contact} · {context}
              </p>
            </div>
            <span className={styles.pillGreen}>Pronto</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PanelCoach() {
  const rows = [
    ['Roleplay · objeção de preço', 'simulação com o Waz · 12 min', 'Concluído'],
    ['Reunião real · Auto Center Sul', 'gravada e analisada', '3 melhorias'],
    ['Evolução do time · junho', 'feedback individual por vendedor', '↑ progresso'],
  ];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Coach de Vendas</span>
        <span className={styles.panelHeadNote}>
          Roleplay, gravação e análise
        </span>
        <span className={styles.pillGray}>Em breve</span>
      </div>
      <ul className={styles.rowList}>
        {rows.map(([title, meta, status]) => (
          <li key={title} className={styles.row}>
            <div>
              <p className={styles.rowTitle}>{title}</p>
              <p className={styles.rowMeta}>{meta}</p>
            </div>
            <span className={styles.pillGray}>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PANELS = {
  chat: PanelChat,
  disparos: PanelDisparos,
  funil: PanelFunil,
  propostas: PanelPropostas,
  leads: PanelLeads,
  coach: PanelCoach,
};

function WazVendas2() {
  const [modal, setModal] = useState(null);

  useEffect(trackPageView, []);

  /* Programa de indicação: ?invite=Nome_Sobrenome vira "Nome Sobrenome"
     na mensagem do WhatsApp, para o time saber quem indicou. */
  const inviter = useMemo(() => {
    const raw = new URLSearchParams(location.search).get('invite');
    return raw ? raw.replace(/_/g, ' ').replace(/\s+/g, ' ').trim() : null;
  }, []);

  const openModal = useCallback((buttonName) => {
    trackButtonClick(buttonName);
    setModal({ state: 'open', buttonName });
  }, []);

  const closeModal = useCallback(() => {
    setModal((current) => current && { ...current, state: 'closing' });
    setTimeout(() => setModal(null), 150);
  }, []);

  const handleSubmit = useCallback(async () => {
    // Fluxo de indicação (influenciadores/afiliados) NÃO é tráfego pago:
    // não registra a sessão do Pulse (evento de conversão do Google Ads) e
    // a mensagem vai sem o [ref:], para não contaminar as conversões.
    if (inviter) {
      location.href = whatsappUrl(null, inviter);
      return;
    }
    const trackingCode = await createWhatsAppSession(
      modal?.buttonName || 'Popup WhatsApp',
    );
    location.href = whatsappUrl(trackingCode, inviter);
  }, [modal, inviter]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerBar}>
          <a href="/" className={styles.brand} aria-label="Squad.com">
            <img src={logoSquad} alt="squad.com" className={styles.logo} />
            <span className={styles.brandNote}>Waz</span>
          </a>
          <Button onClick={() => openModal('Header — Começar com o Waz')}>
            Começar com o Waz
          </Button>
        </div>
      </header>

      <main>
        {/* Hero (layout central, no estilo da página original) */}
        <section className={styles.hero}>
          <p className={styles.heroEyebrow}>
            <span className={styles.pulseDot} aria-hidden="true" />
            Conheça o Waz — seu agente de IA de vendas e atendimento
          </p>
          <h1 className={styles.heroTitle}>
            O agente de IA que{' '}
            <span className={styles.gr}>vende por você no WhatsApp.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            O Waz entra para o seu time comercial: atende na hora, qualifica,
            reativa sua base e leva cada conversa até o fechamento — todos os
            dias, o dia inteiro.
          </p>
          <div className={styles.heroActions}>
            <Button
              size="lg"
              onClick={() => openModal('Hero — Começar com o Waz')}
            >
              Começar com o Waz →
            </Button>
            <a href="#problema" className={styles.btnGhost}>
              Ver o que o Waz faz por você
            </a>
          </div>

          <div className={styles.heroVisual}>
            <img
              src={wazCharacter}
              alt=""
              aria-hidden="true"
              className={styles.heroWaz}
            />
            <div className={styles.hvFrame}>
              <div className={styles.crm}>
              <div className={styles.crmHead}>
                <span className={styles.crmTitle}>Pipeline comercial</span>
                <span className={styles.crmNew}>+ Novo</span>
              </div>
              <div className={styles.crmStats}>
                <div>
                  <strong>27</strong>
                  <span>Leads abertos</span>
                </div>
                <div>
                  <strong>R$ 184.500</strong>
                  <span>Valor do pipeline</span>
                </div>
                <div>
                  <strong>62%</strong>
                  <span>Taxa de qualificação</span>
                </div>
                <div>
                  <strong>R$ 6.833</strong>
                  <span>Ticket médio</span>
                </div>
                <div>
                  <strong>8 dias</strong>
                  <span>Ciclo médio</span>
                </div>
              </div>
              <div className={styles.crmBoard}>
                <div className={styles.crmCol}>
                  <p className={styles.crmColHead}>
                    <span className={styles.dotBlue} /> Novos leads · 8
                  </p>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Diogo Ferraz</p>
                    <p className={styles.crmMeta}>R$ 0 · WhatsApp</p>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Patrícia Salles</p>
                    <p className={styles.crmMeta}>R$ 0 · Instagram</p>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                </div>
                <div className={styles.crmCol}>
                  <p className={styles.crmColHead}>
                    <span className={styles.dotBlue} /> Em qualificação · 6
                  </p>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Camila Prado</p>
                    <p className={styles.crmMeta}>R$ 8.400 · WhatsApp</p>
                    <span className={styles.tagHot}>Quente</span>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Eduardo Lima</p>
                    <p className={styles.crmMeta}>R$ 12.000 · Ligação</p>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                </div>
                <div className={styles.crmCol}>
                  <p className={styles.crmColHead}>
                    <span className={styles.dotBlue} /> Pronto para compra · 5
                  </p>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Matheus Antunes</p>
                    <p className={styles.crmMeta}>R$ 18.500 · WhatsApp</p>
                    <span className={styles.tagHot}>Reunião hoje</span>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Sabrina Rocha</p>
                    <p className={styles.crmMeta}>R$ 14.000 · Indicação</p>
                    <span className={styles.tagHuman}>Humano</span>
                  </div>
                </div>
                <div className={styles.crmCol}>
                  <p className={styles.crmColHead}>
                    <span className={styles.dotOrange} /> Negociação · 4
                  </p>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Larissa Mendes</p>
                    <p className={styles.crmMeta}>R$ 22.000 · Reunião</p>
                    <span className={styles.tagHot}>Proposta enviada</span>
                    <span className={styles.tagWaz}>Waz</span>
                  </div>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Gustavo Pinho</p>
                    <p className={styles.crmMeta}>R$ 19.600 · WhatsApp</p>
                    <span className={styles.tagHuman}>Humano</span>
                  </div>
                </div>
                <div className={styles.crmCol}>
                  <p className={styles.crmColHead}>
                    <span className={styles.dotGreen} /> Venda · 4
                  </p>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Bruno Tavares</p>
                    <p className={styles.crmMeta}>R$ 12.000 · Reunião</p>
                    <span className={styles.tagWin}>✓ Ganho</span>
                  </div>
                  <div className={styles.crmCard}>
                    <p className={styles.crmName}>Helena Castro</p>
                    <p className={styles.crmMeta}>R$ 8.000 · WhatsApp</p>
                    <span className={styles.tagWin}>✓ Ganho</span>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatTop}`}>
              <span className={styles.floatIcon}>⚡</span>
              <span>
                Respondido na hora
                <small>domingo, 23h47</small>
              </span>
            </div>
            <div className={`${styles.floatCard} ${styles.floatMid}`}>
              <span className={styles.floatIcon}>↻</span>
              <span>
                Base reativada
                <small>128 conversas iniciadas</small>
              </span>
            </div>
            <div className={`${styles.floatCard} ${styles.floatBottom}`}>
              <span className={styles.floatIcon}>✓</span>
              <span>
                Follow-up feito
                <small>nenhuma oportunidade parada</small>
              </span>
            </div>
          </div>
        </section>

        {/* O que muda com o Waz (foco em solução) */}
        <section className={styles.problem} id="problema">
          <div className={styles.problemInner}>
            <p className={styles.secLabel}>Com o Waz no time</p>
            <h2 className={styles.problemTitle}>
              Seu comercial rodando em outro nível, todos os dias.
            </h2>
            <p className={styles.problemLead}>
              Menos trabalho manual, mais oportunidade aproveitada. Isso é o
              que o Waz entrega da primeira semana em diante.
            </p>
            <ul className={styles.lossGrid}>
              {WINS.map(({ fact, cost }) => (
                <li key={fact} className={styles.lossCard}>
                  <span className={styles.lossTag}>Com o Waz</span>
                  <p className={styles.lossFact}>{fact}</p>
                  <p className={styles.lossCost}>{cost}</p>
                </li>
              ))}
            </ul>
            <p className={styles.problemClose}>
              Tudo isso sem contratar mais ninguém.
              <br />
              <span className={styles.gr}>
                Um agente só, cuidando da jornada inteira.
              </span>
            </p>
          </div>
        </section>

        {/* A solução (card preto arredondado com orb verde) */}
        <section className={styles.solutionWrap}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionText}>
              <p className={styles.secLabelLight}>A solução</p>
              <h2 className={styles.solutionTitle}>
                Este é o Waz. O agente de IA que entra para o seu time
                comercial.
              </h2>
              <p className={styles.solutionParagraph}>
                O Waz não é mais um software para o seu time aprender a usar. É{' '}
                <strong>
                  um agente de IA que trabalha na sua operação como um
                  integrante do time
                </strong>{' '}
                — do primeiro contato ao fechamento, fazendo o que hoje depende
                da memória, do horário e da disponibilidade das pessoas.
              </p>
              <p className={styles.solutionParagraph}>
                Ele responde quando ninguém pode responder. Lembra o que todos
                esqueceriam. Reativa quem estava parado. E mantém cada
                negociação visível até o fim.{' '}
                <strong>
                  Um agente só, cuidando da jornada inteira — com resultado
                  comercial como entrega.
                </strong>
              </p>
            </div>
            <div className={styles.wazPortrait}>
              <div className={styles.wazOrb}>
                <img
                  src={wazCharacter}
                  alt=""
                  aria-hidden="true"
                  className={styles.wazOrbImg}
                />
              </div>
              <span className={`${styles.orbChip} ${styles.orbChipTop}`}>
                ⚡ “Eu respondo em segundos”
              </span>
              <span className={`${styles.orbChip} ${styles.orbChipMid}`}>
                ✓ “Eu nunca esqueço um follow-up”
              </span>
              <span className={`${styles.orbChip} ${styles.orbChipBottom}`}>
                ↻ “Eu trabalho 24h, todos os dias”
              </span>
            </div>
          </div>
        </section>

        {/* Features */}
        {FEATURES.map((feature, index) => {
          const Panel = PANELS[feature.panel];
          return (
            <section
              key={feature.eyebrow}
              className={`${styles.feature} ${
                index % 2 === 1 ? styles.featureReverse : ''
              }`}
            >
              <div className={styles.featureText}>
                <p className={styles.eyebrow}>{feature.eyebrow}</p>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureParagraph}>{feature.text}</p>
                <ul className={styles.bulletList}>
                  {feature.bullets.map(({ icon, title, text }) => (
                    <li key={title}>
                      <span className={styles.bulletIcon} aria-hidden="true">
                        {icon}
                      </span>
                      <div>
                        <p className={styles.bulletTitle}>{title}</p>
                        <p className={styles.bulletText}>{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {feature.quote && (
                  <p className={styles.wazQuote}>
                    <span className={styles.wazAvatar} aria-hidden="true">
                      W
                    </span>
                    {feature.quote}
                  </p>
                )}
              </div>
              <div className={styles.featureVisual}>
                <Panel />
              </div>
            </section>
          );
        })}

        {/* Tudo num só lugar */}
        <section className={styles.hub}>
          <p className={styles.eyebrow}>Tudo num só lugar</p>
          <h2 className={styles.sectionTitle}>
            Não são seis ferramentas. É um agente cuidando da jornada inteira.
          </h2>
          <p className={styles.sectionLead}>
            Da descoberta do lead ao pós-venda, o Waz trabalha para sua empresa
            aproveitar mais oportunidades com mais velocidade, mais organização
            e menos desperdício.
          </p>
          <div className={styles.hubCenter}>
            <span className={styles.wazAvatarLg} aria-hidden="true">
              W
            </span>
            <p>
              <strong>Waz</strong> — seu agente de IA, uma operação
            </p>
          </div>
          <ul className={styles.hubGrid}>
            {HUB.map(({ icon, title, text }) => (
              <li key={title} className={styles.hubCard}>
                <span aria-hidden="true">{icon}</span>
                <p className={styles.bulletTitle}>{title}</p>
                <p className={styles.bulletText}>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Implementação */}
        <section className={styles.implementation}>
          <blockquote className={styles.objection}>
            “Vou assinar mais uma ferramenta… e daqui a três meses ninguém na
            empresa vai estar usando.”
            <footer>
              — o que todo empresário pensa (com razão) antes de contratar
              tecnologia
            </footer>
          </blockquote>
          <p className={styles.eyebrow}>Implementação incluída</p>
          <h2 className={styles.sectionTitle}>
            Você não fica sozinho tentando descobrir como usar.
          </h2>
          <p className={styles.sectionLead}>
            Tecnologia sem implementação vira mais uma assinatura esquecida.
            Por isso o Waz não vem sozinho: vem com acompanhamento recorrente
            para colocar a solução em prática na sua operação.
          </p>
          <ul className={styles.implGrid}>
            {IMPLEMENTATION.map(({ title, text }) => (
              <li key={title} className={styles.implCard}>
                <p className={styles.bulletTitle}>{title}</p>
                <p className={styles.bulletText}>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Inner AI */}
        <section className={styles.inner}>
          <p className={styles.eyebrow}>Powered by Inner AI</p>
          <h2 className={styles.sectionTitleLight}>
            Quem está por trás do Waz?
          </h2>
          <p className={styles.innerLead}>
            O Waz é construído pela Inner AI, a maior plataforma de
            inteligência artificial do Brasil — a mesma tecnologia que já
            atende mais de 1 milhão de usuários, agora trabalhando dentro da
            operação comercial da sua empresa.
          </p>
          <ul className={styles.innerStats}>
            <li>
              <strong>+1M</strong>
              <span>Usuários atendidos</span>
            </li>
            <li>
              <strong>R$50M</strong>
              <span>Captados em investimento</span>
            </li>
            <li>
              <strong>#1</strong>
              <span>Plataforma de IA do Brasil</span>
            </li>
          </ul>
        </section>

        {/* Oferta */}
        <section className={styles.offer}>
          <p className={styles.eyebrow}>A oferta</p>
          <h2 className={styles.sectionTitle}>
            Um plano. Tudo incluso. Fácil de decidir.
          </h2>
          <p className={styles.sectionLead}>
            Menos do que custa um vendedor júnior — trabalhando na sua operação
            todos os dias, o dia inteiro.
          </p>
          <div className={styles.planCard}>
            <p className={styles.planTag}>Plano único</p>
            <h3 className={styles.planName}>Waz Essential</h3>
            <p className={styles.planPrice}>
              R$ 2.000<span>/mês</span>
            </p>
            <p className={styles.planLead}>
              Um único agente de IA para atender, reativar, acompanhar,
              organizar e avançar mais oportunidades comerciais.
            </p>
            <ul className={styles.planList}>
              {PLAN_ITEMS.map(({ title, text }) => (
                <li key={title}>
                  <span className={styles.planCheck} aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <p className={styles.bulletTitle}>{title}</p>
                    <p className={styles.bulletText}>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              onClick={() => openModal('Oferta — Começar com o Waz')}
            >
              Começar com o Waz →
            </Button>
            <p className={styles.planNote}>
              Sem multiplicidade de planos. Sem surpresa. Um preço, tudo
              dentro.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className={styles.finalCta}>
          <div className={styles.finalCard}>
            <h2 className={styles.finalTitle}>
              Você já investe para gerar oportunidades. Agora faça sua operação
              conseguir trabalhar mais delas.
            </h2>
            <p className={styles.finalLead}>
              Cada dia de demora, follow-up esquecido e base parada é venda
              saindo pela porta. Coloque o Waz no seu time e ele começa a
              fechar esses espaços na primeira semana.
            </p>
            <Button
              size="lg"
              variant="white"
              onClick={() => openModal('CTA final — Começar com o Waz')}
            >
              Começar com o Waz →
            </Button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          <strong>Waz</strong> — uma solução squad.com, construída pela Inner
          AI. © 2026
        </p>
      </footer>

      {modal && (
        <WhatsAppModal
          state={modal.state}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default WazVendas2;
