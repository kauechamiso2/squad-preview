import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../components/ui/Button';
import Footer from '../components/Footer/Footer';
import WhatsAppModal from '../saibamais/WhatsAppModal';
import {
  createWhatsAppSession,
  trackButtonClick,
  trackPageView,
} from './tracking';
import logoSquad from '../assets/logo-squad.svg';
import wazDashboard from '../assets/saibamais/waz-dashboard.png';
import wazDashboardMobile from '../assets/saibamais/waz-dashboard-mobile.png';
import wazCharacter from '../assets/saibamais/waz-character.png';
import wazHl1 from '../assets/saibamais/waz-hl-1.png';
import wazHl2 from '../assets/saibamais/waz-hl-2.png';
import wazHl3 from '../assets/saibamais/waz-hl-3.png';
import wazHl4 from '../assets/saibamais/waz-hl-4.png';
import wazSec2 from '../assets/saibamais/waz-sec2.png';
import base from '../saibamais/SaibaMais.module.css';
import styles from './CrmWhatsapp.module.css';

/*
 * Landing de Google Ads — campanha [Squad] CRM WhatsApp
 * (cluster "crm whatsapp", "crm para whatsapp", "crm com ia", "funil de
 * vendas whatsapp"). Clona a estrutura técnica e o tracking da /saibamais
 * (entry point próprio, popup de captura, Pulse) e aplica o blueprint de
 * conversão: dor com número, como funciona, antes/depois, FAQ de objeções e
 * H1 variável por grupo de anúncio.
 */


const WHATSAPP_NUMBER = '5511952134536';

function whatsappUrl(trackingCode) {
  const base_ =
    'Olá, quero conhecer o CRM com IA para WhatsApp da Squad.';
  /* O [ref:] casa a conversa com este visitante no webhook de entrada. */
  const message = trackingCode ? `${base_} [ref:${trackingCode}]` : base_;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/*
 * H1 por grupo de anúncio: a campanha manda ?h=ia ou ?h=funil na URL final e
 * a página casa o título com o termo buscado (message match) sem precisar de
 * outra landing. Sem parâmetro (ou valor desconhecido), usa o padrão do
 * cluster principal "crm whatsapp".
 */
const HERO_TITLES = {
  default: 'CRM integrado ao WhatsApp',
  ia: 'CRM com IA para o seu WhatsApp',
  funil: 'Seu funil de vendas no WhatsApp',
};

const HIGHLIGHTS = [
  { img: wazHl4, caption: 'Todo lead registrado no funil, sem planilha.' },
  { img: wazHl2, caption: 'Veja em que etapa está cada negociação.' },
  { img: wazHl1, caption: 'IA atende e qualifica antes do vendedor.' },
  { img: wazHl3, caption: 'Proposta pronta em minutos, no automático.' },
];

const PAINS = [
  {
    title: 'Lead esfria em minutos',
    text: 'Quem chega do anúncio espera resposta na hora — inclusive à noite e no fim de semana.',
  },
  {
    title: 'Histórico preso no celular',
    text: 'A negociação vive no WhatsApp de cada vendedor. Se ele sai, o histórico vai junto.',
  },
  {
    title: 'Planilha não faz follow-up',
    text: 'Oportunidade esquecida não avisa: ela simplesmente vira venda do concorrente.',
  },
];

const STEPS = [
  {
    number: '1',
    title: 'Conecte seu WhatsApp',
    text: 'Pela API oficial da Meta, com templates aprovados — seu número segue as regras do WhatsApp Business, sem risco de bloqueio.',
  },
  {
    number: '2',
    title: 'O Waz aprende seu negócio',
    text: 'Catálogo, tabela de preços e o tom da sua marca. Sem código e sem projeto de implantação — rodando em dias.',
  },
  {
    number: '3',
    title: 'Seu funil anda sozinho',
    text: 'Cada conversa vira um lead registrado, com etapa e histórico. O Waz atende, qualifica e entrega o lead quente pro seu time fechar.',
  },
];

const COMPARE = [
  {
    before: 'Leads espalhados em planilha e no WhatsApp de cada vendedor.',
    after: 'Todos os leads num só funil, com etapa e histórico registrados.',
  },
  {
    before: 'Mensagem fora do horário só é respondida no dia seguinte.',
    after: 'Atendimento na hora, 24h — inclusive fim de semana.',
  },
  {
    before: 'Proposta copiada da anterior, ajustada na mão.',
    after: 'Proposta pronta em minutos, na linguagem da sua marca.',
  },
  {
    before: 'Oportunidade some quando o vendedor esquece o follow-up.',
    after: 'Nenhum lead esquecido: tudo fica visível do contato ao pós-venda.',
  },
];

const FAQ = [
  {
    q: 'Preciso abandonar meu CRM ou minha planilha atual?',
    a: 'Não de uma vez. O Waz organiza os leads do WhatsApp num funil próprio dentro do app — você começa por onde a venda acontece e migra o resto no seu ritmo.',
  },
  {
    q: 'O disparo e o atendimento podem bloquear meu número?',
    a: 'O Waz roda sobre a API oficial da Meta, com templates aprovados. Seu número segue as regras oficiais do WhatsApp Business, sem risco de bloqueio por uso indevido.',
  },
  {
    q: 'E se a IA falar algo errado com meu cliente?',
    a: 'O Waz segue o tom e as regras que você define e aprende só com o seu catálogo e preços reais. Propostas comerciais só vão pro cliente depois da sua revisão.',
  },
  {
    q: 'Quanto tempo leva pra implantar?',
    a: 'Dias, não meses. Sem código: você conecta o número, cadastra as informações do negócio e o Waz começa a atender.',
  },
  {
    q: 'Quanto custa?',
    a: 'Uma fração do custo de um SDR contratado (R$ 3.000+/mês com encargos) — e o Waz atende sua base inteira, 24h. Fale com a gente no WhatsApp e receba a proposta pro seu caso.',
  },
];

function CrmWhatsapp() {
  const [modal, setModal] = useState(null);

  useEffect(trackPageView, []);

  /* Lê o ?h= uma vez só — a URL não muda durante a visita. */
  const heroTitle = useMemo(() => {
    const variant = new URLSearchParams(location.search).get('h');
    return HERO_TITLES[variant] || HERO_TITLES.default;
  }, []);

  const openModal = useCallback((buttonName) => {
    trackButtonClick(buttonName);
    setModal({ state: 'open', buttonName });
  }, []);

  const closeModal = useCallback(() => {
    setModal((current) => current && { ...current, state: 'closing' });
    setTimeout(() => setModal(null), 150);
  }, []);

  /* A conversão dispara no envio do formulário, não no clique do botão. */
  const handleSubmit = useCallback(async () => {
    const trackingCode = await createWhatsAppSession(
      modal?.buttonName || 'Popup WhatsApp',
    );
    location.href = whatsappUrl(trackingCode);
  }, [modal]);

  return (
    <>
      <header className={base.header}>
        <div className={base.headerBar}>
          <a href="/" aria-label="Squad.com">
            <img src={logoSquad} alt="squad.com" className={base.logo} />
          </a>
          <Button onClick={() => openModal('Header — Falar no WhatsApp')}>
            Falar no WhatsApp
          </Button>
        </div>
      </header>

      <main>
        {/* Bloco 1 — Hero (H1 variável por grupo de anúncio) */}
        <section className={`${base.hero} ${styles.heroTight}`}>
          <div className={base.heroContent}>
            <h1 className={base.heroTitle}>{heroTitle}</h1>
            <p className={base.heroSubtitle}>
              O Waz registra cada lead no funil, mostra em que etapa está cada
              negociação e ainda atende, qualifica e monta propostas no
              automático — pela API oficial da Meta, sem risco de bloqueio do
              seu número.
            </p>
            <Button
              size="lg"
              onClick={() => openModal('Hero — Fale com o Waz agora')}
            >
              Fale com o Waz agora
            </Button>
          </div>

          <div className={base.heroVisual}>
            <div className={base.heroCard}>
              <img
                src={wazDashboard}
                alt="Funil de vendas do Squad com leads do WhatsApp organizados pelo Waz"
                className={base.heroDashboard}
              />
              <img
                src={wazDashboardMobile}
                alt=""
                aria-hidden="true"
                className={base.heroDashboardMobile}
              />
            </div>
            <span className={base.heroCharacterShadow} aria-hidden="true" />
            <img
              src={wazCharacter}
              alt=""
              aria-hidden="true"
              className={base.heroCharacter}
            />
          </div>
        </section>

        {/* Bloco 2 — Highlights */}
        <section className={`${base.highlights} ${styles.highlightsTight}`}>
          <h2 className={styles.highlightsTitle}>
            Atendimento com IA do começo ao fim
          </h2>
          <ul className={base.highlightGrid}>
            {HIGHLIGHTS.map(({ img, caption }) => (
              <li key={caption} className={base.highlightCard}>
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  className={base.highlightImage}
                />
                <p className={base.highlightCaption}>{caption}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bloco 3 — Dor com número (stat em destaque + cards) */}
        <section className={styles.pain}>
          <div className={styles.painInner}>
            <div className={styles.painHeader}>
              <div className={styles.painStat}>
                <span className={styles.painNumber}>79%</span>
                <p className={styles.painNumberCaption}>
                  das vendas no Brasil passam pelo WhatsApp
                </p>
              </div>
              <h2 className={styles.painTitle}>
                E o seu funil,
                <br />
                passa por onde?
              </h2>
            </div>
            <ul className={styles.painGrid}>
              {PAINS.map(({ title, text }) => (
                <li key={title} className={styles.painCard}>
                  <span className={styles.painIcon} aria-hidden="true">
                    ✕
                  </span>
                  <h3 className={styles.painCardTitle}>{title}</h3>
                  <p className={styles.painCardText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bloco 4 — Como funciona */}
        <section className={styles.steps}>
          <p className={base.featureEyebrow}>COMO FUNCIONA</p>
          <h2 className={styles.stepsTitle}>Rodando em dias, sem código</h2>
          <ol className={styles.stepsGrid}>
            {STEPS.map(({ number, title, text }) => (
              <li key={number} className={styles.stepCard}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {number}
                </span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>
          <Button
            size="lg"
            onClick={() => openModal('Como funciona — Fale com o Waz')}
          >
            Fale com o Waz agora
          </Button>
        </section>

        {/* Bloco 5a — Feature: atendimento com IA (imagem à esquerda) */}
        <section className={`${base.feature} ${styles.featureTight} ${styles.featureReverse}`}>
          <div className={base.featureText}>
            <p className={base.featureEyebrow}>ATENDIMENTO COM IA</p>
            <h2 className={base.featureTitle}>
              Resposta na hora, mesmo fora do horário de expediente
            </h2>
            <p className={base.featureParagraph}>
              O Waz responde o cliente na hora, a qualquer momento do dia,
              seguindo o tom e as regras que você definiu. Quem chega por
              anúncio, comentário ou campanha é atendido no mesmo lugar — e
              nenhuma conversa fica esperando até o dia seguinte.
            </p>
            <Button
              size="lg"
              onClick={() => openModal('Atendimento — Falar no WhatsApp')}
            >
              Falar no WhatsApp
            </Button>
          </div>
          <div className={base.featureVisual}>
            <img
              src={wazSec2}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={base.featureImage}
            />
          </div>
        </section>

        {/* Bloco 5b — Feature: CRM (texto à esquerda, imagem à direita) */}
        <section className={`${base.feature} ${styles.featureTight}`}>
          <div className={base.featureText}>
            <p className={base.featureEyebrow}>CRM + AGENTE DE IA</p>
            <h2 className={base.featureTitle}>
              O CRM que se preenche sozinho, conversa a conversa
            </h2>
            <p className={base.featureParagraph}>
              Cada conversa vira um lead registrado no funil, com etapa e
              histórico. Nada de digitar negociação em planilha no fim do dia:
              seu time abre o app e vê exatamente onde está cada oportunidade,
              do primeiro contato ao pós-venda.
            </p>
            <Button
              size="lg"
              onClick={() => openModal('CRM — Falar no WhatsApp')}
            >
              Falar no WhatsApp
            </Button>
          </div>
          <div className={base.featureVisual}>
            <img
              src={wazDashboard}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={base.featureImage}
            />
          </div>
        </section>

        {/* Bloco 5c — Feature: disparo em massa (imagem à esquerda)
            TODO: trocar a imagem por um visual de disparos (waz-sec1 do
            preview do designer) quando o asset entrar no repo. */}
        <section className={`${base.feature} ${styles.featureTight} ${styles.featureReverse}`}>
          <div className={base.featureText}>
            <p className={base.featureEyebrow}>DISPAROS EM MASSA</p>
            <h2 className={base.featureTitle}>
              Nenhum lead fica perdido no funil
            </h2>
            <p className={base.featureParagraph}>
              Lead que esfriou não é lead perdido. Pelo funil, você segmenta
              quem parou de responder e recupera com follow-up e disparos em
              massa pela API oficial da Meta — com o número protegido. Agende a
              campanha, acompanhe a entrega contato a contato e quem responde
              cai direto no atendimento do Waz.
            </p>
            <Button
              size="lg"
              onClick={() => openModal('Disparo — Falar no WhatsApp')}
            >
              Falar no WhatsApp
            </Button>
          </div>
          <div className={base.featureVisual}>
            <img
              src={wazDashboardMobile}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={base.featureImage}
            />
          </div>
        </section>

        {/* Bloco 6 — Antes / Depois */}
        <section className={styles.compare}>
          <h2 className={styles.compareTitle}>
            O que muda com o Waz no seu WhatsApp
          </h2>
          <div className={styles.compareGrid}>
            <div className={styles.compareCol}>
              <p className={styles.compareLabel}>Sem o Waz</p>
              <ul className={styles.compareList}>
                {COMPARE.map(({ before }) => (
                  <li key={before} className={styles.compareItemBefore}>
                    {before}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.compareCol} ${styles.compareColAfter}`}>
              <p className={styles.compareLabel}>Com o Waz</p>
              <ul className={styles.compareList}>
                {COMPARE.map(({ after }) => (
                  <li key={after} className={styles.compareItemAfter}>
                    {after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/*
          TODO (prova social): quando houver logos autorizados e/ou depoimento
          real com número (cliente, cargo, resultado), inserir aqui um bloco
          entre o antes/depois e o FAQ. Não publicar prova social fictícia.
        */}

        {/* Bloco 7 — CTA (acima do FAQ) */}
        <section className={`${base.cta} ${styles.ctaTight}`}>
          <div className={base.ctaCard}>
            <h2 className={base.ctaTitle}>
              Veja seu funil rodando no WhatsApp
            </h2>
            <p className={base.ctaSubtitle}>
              Fale com o Waz agora e veja na prática como ele atende, qualifica
              e organiza os leads com o contexto do seu negócio. 2 minutos de
              conversa, sem compromisso.
            </p>
            <Button
              size="lg"
              variant="white"
              onClick={() => openModal('CTA final — Fale com o Waz')}
            >
              Fale com o Waz agora
            </Button>
          </div>
        </section>

        {/* Bloco 8 — FAQ de objeções (fecha a página) */}
        <section className={styles.faq}>
          <h2 className={styles.faqTitle}>Perguntas frequentes</h2>
          <div className={styles.faqList}>
            {FAQ.map(({ q, a }) => (
              <details key={q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{q}</summary>
                <p className={styles.faqAnswer}>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* CTA fixo no mobile: a maioria dos cliques da campanha vem de
          celular e a pessoa não deve rolar de volta pra converter. */}
      <div className={styles.stickyBar}>
        <Button
          size="lg"
          onClick={() => openModal('Sticky mobile — Fale com o Waz')}
        >
          Fale com o Waz agora
        </Button>
      </div>

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

export default CrmWhatsapp;
