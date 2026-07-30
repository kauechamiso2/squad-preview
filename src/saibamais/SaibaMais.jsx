import { useCallback, useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Footer from '../components/Footer/Footer';
import WhatsAppModal from './WhatsAppModal';
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
import styles from './SaibaMais.module.css';

/*
 * Landing de Google Ads — keyword "Atendimento de WhatsApp com IA".
 * Página isolada do site principal (entry point próprio em /saibamais),
 * para não conflitar com a página completa do Waz que o designer vai subir.
 */


/* Número e mensagem próprios da landing — links.js continua servindo o site
   principal, então o designer pode mexer nele sem conflitar com esta página. */
const WHATSAPP_NUMBER = '5511952134536';

function whatsappUrl(trackingCode) {
  const base =
    'Olá, gostaria de mais informações sobre o atendimento de WhatsApp com IA.';
  /* O [ref:] é o que o webhook de entrada usa pra casar a conversa com este
     visitante. Se o tracking falhar, a mensagem vai sem ele. */
  const message = trackingCode ? `${base} [ref:${trackingCode}]` : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const HIGHLIGHTS = [
  { img: wazHl1, caption: 'Responde o cliente na hora, 24 horas por dia.' },
  { img: wazHl2, caption: 'Atende no tom da sua marca, com suas regras.' },
  { img: wazHl3, caption: 'Monta a proposta em minutos, pronta pra enviar.' },
  { img: wazHl4, caption: 'Conduz a conversa até converter a venda.' },
];

function SaibaMais() {
  /* null = fechado. 'closing' mantém o modal montado durante a animação de
     saída (--modal-close-dur), igual ao padrão do AgentModal. */
  const [modal, setModal] = useState(null);

  useEffect(trackPageView, []);

  /* Guarda qual CTA abriu o modal, pra atribuir a sessão de WhatsApp ao
     botão certo lá no envio. */
  const openModal = useCallback((buttonName) => {
    trackButtonClick(buttonName);
    setModal({ state: 'open', buttonName });
  }, []);

  const closeModal = useCallback(() => {
    setModal((current) => current && { ...current, state: 'closing' });
    setTimeout(() => setModal(null), 150);
  }, []);
  const handleSubmit = useCallback(async () => {
    const trackingCode = await createWhatsAppSession(
      modal?.buttonName || 'Popup WhatsApp',
    );
    /* location.href e não window.open: depois do await o clique já não conta
       como gesto do usuário e o navegador bloquearia a nova aba. */
    location.href = whatsappUrl(trackingCode);
  }, [modal]);

  return (
    <>
      {/* Header enxuto: sem menu de navegação, para não tirar o visitante
          do anúncio antes da conversão */}
      <header className={styles.header}>
        <div className={styles.headerBar}>
          <a href="/" aria-label="Squad.com">
            <img src={logoSquad} alt="squad.com" className={styles.logo} />
          </a>
          <Button onClick={() => openModal('Header — Falar no WhatsApp')}>
            Falar no WhatsApp
          </Button>
        </div>
      </header>

      <main>
        {/* Bloco 1 — Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Atendimento de WhatsApp com IA
            </h1>
            <p className={styles.heroSubtitle}>
              O Waz é o agente de IA que atende seus clientes no WhatsApp na
              hora, a qualquer hora. Ele responde dúvidas, qualifica o lead e
              monta a proposta comercial no automático — pela API oficial da
              Meta, sem risco de bloqueio do seu número.
            </p>
            <Button size="lg" onClick={() => openModal('Hero — Contrate Waz')}>
              Contrate Waz
            </Button>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <img
                src={wazDashboard}
                alt="Painel de atendimento de WhatsApp do Squad conduzido pelo Waz"
                className={styles.heroDashboard}
              />
              <img
                src={wazDashboardMobile}
                alt=""
                aria-hidden="true"
                className={styles.heroDashboardMobile}
              />
            </div>
            <span className={styles.heroCharacterShadow} aria-hidden="true" />
            <img
              src={wazCharacter}
              alt=""
              aria-hidden="true"
              className={styles.heroCharacter}
            />
          </div>
        </section>

        {/* Bloco 2 — Highlights */}
        <section className={styles.highlights}>
          <ul className={styles.highlightGrid}>
            {HIGHLIGHTS.map(({ img, caption }) => (
              <li key={caption} className={styles.highlightCard}>
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  className={styles.highlightImage}
                />
                <p className={styles.highlightCaption}>{caption}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bloco 3 — Prova do atendimento (o que a keyword promete) */}
        <section className={styles.feature}>
          <div className={styles.featureText}>
            <p className={styles.featureEyebrow}>ATENDIMENTO COM IA</p>
            <h2 className={styles.featureTitle}>
              Resposta na hora, mesmo fora do horário de expediente
            </h2>
            <p className={styles.featureParagraph}>
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
          <div className={styles.featureVisual}>
            <img
              src={wazSec2}
              alt=""
              aria-hidden="true"
              className={styles.featureImage}
            />
          </div>
        </section>

        {/* Bloco 4 — CTA final */}
        <section className={styles.cta}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              Coloque o Waz pra atender seu WhatsApp
            </h2>
            <p className={styles.ctaSubtitle}>
              Fale com a gente no WhatsApp e veja o Waz atendendo com o
              contexto do seu negócio.
            </p>
            <Button
              size="lg"
              variant="white"
              onClick={() => openModal('CTA final — Contrate Waz')}
            >
              Contrate Waz
            </Button>
          </div>
        </section>
      </main>

      <Footer />

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

export default SaibaMais;
