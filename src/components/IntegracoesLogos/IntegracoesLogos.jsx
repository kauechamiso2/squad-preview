import { motion, MotionConfig } from 'motion/react';
import thumbsDown from '../../assets/icon-thumbs-down.svg';
import thumbsUp from '../../assets/icon-thumbs-up.svg';
import instagram from '../../assets/intg-instagram.png';
import shopify from '../../assets/intg-shopify.png';
import whatsapp from '../../assets/intg-whatsapp.png';
import lojaIntegrada from '../../assets/intg-lojaintegrada.png';
import meta from '../../assets/intg-meta.png';
import gmail from '../../assets/intg-gmail.png';
import gmb from '../../assets/intg-gmb.png';
import hubspot from '../../assets/intg-hubspot.png';
import outlook from '../../assets/intg-outlook.png';
import microsoft from '../../assets/intg-microsoft.png';
import analytics from '../../assets/intg-analytics.png';
import slack from '../../assets/intg-slack.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './IntegracoesLogos.module.css';

const INTEGRATIONS = [
  {
    name: 'Instagram',
    logo: instagram,
    stroke: ['#feda75', '#d62976', '#4f5bd5'],
    text: 'Conectado à Maky. Ela responde comentário e direct, agenda post e cuida da campanha de mídia paga, direto na sua conta.',
  },
  {
    name: 'Shopify',
    logo: shopify,
    stroke: ['#95bf47', '#7ab55c', '#5e8e3e'],
    text: 'Puxa todo o catálogo de produtos pra dentro do Squad, com estoque sempre atualizado. Você vende no automático, sem manter duas versões da loja.',
  },
  {
    name: 'WhatsApp',
    logo: whatsapp,
    stroke: ['#25d366', '#12b45a', '#128c7e'],
    text: 'Conectado ao Waz. Ele responde mensagem, dispara campanha pra base inteira e organiza sua lista de contatos, tudo pelo número que você já usa.',
  },
  {
    name: 'Loja Integrada',
    logo: lojaIntegrada,
    stroke: ['#00c9b7', '#12a5d6', '#2b7fff'],
    text: 'Catálogo, estoque e vendas puxados direto pra dentro do Squad, sem duplicar cadastro em dois lugares.',
  },
  {
    name: 'Meta',
    logo: meta,
    stroke: ['#0088ff', '#0072f5', '#0064e0'],
    text: 'Conecta o Squad às outras áreas da Meta no seu negócio, como o Meta Ads, ampliando o alcance das campanhas além do Instagram e do WhatsApp.',
  },
  { name: 'Gmail', logo: gmail, soon: true },
  { name: 'Google My Business', logo: gmb, soon: true },
  { name: 'HubSpot', logo: hubspot, soon: true },
  { name: 'Outlook', logo: outlook, soon: true },
  { name: 'Microsoft', logo: microsoft, soon: true },
  { name: 'Google Analytics', logo: analytics, soon: true },
  { name: 'Slack', logo: slack, soon: true },
];

const WITHOUT = [
  'Cada ferramenta guarda sua própria versão do dado.',
  'Informação é copiada e colada de um sistema pro outro.',
  'Trocar de ferramenta significa recomeçar do zero.',
  'Cada sistema novo pede treinamento pra equipe toda.',
];

const WITH = [
  'Mesma informação em todas as ferramentas conectadas.',
  'Informação flui sozinha entre as ferramentas conectadas.',
  'Histórico preservado, mesmo trocando de ferramenta.',
  'O agente já sabe usar a ferramenta assim que ela conecta.',
];

function CompareCard({ label, items, icon }) {
  return (
    <div className={styles.compareCard}>
      <p className={styles.compareLabel}>{label}</p>
      {items.map((text) => (
        <div key={text} className={styles.compareRow}>
          <img src={icon} alt="" aria-hidden="true" className={styles.compareIcon} />
          <p className={styles.compareText}>{text}</p>
        </div>
      ))}
    </div>
  );
}

function IntegracoesLogos() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <h2 className={styles.heading}>Integrações disponíveis</h2>

        <ul className={styles.grid}>
          {INTEGRATIONS.map(({ name, logo, text, soon, stroke }) => (
            <li
              key={name}
              className={`${styles.card} ${soon ? styles.cardSoon : ''}`}
              style={
                stroke
                  ? { '--s1': stroke[0], '--s2': stroke[1], '--s3': stroke[2] }
                  : undefined
              }
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className={styles.cardLogo}
              />
              <p className={styles.cardName}>{name}</p>
              <span className={styles.divider} aria-hidden="true" />
              {soon ? (
                <p className={styles.soonText}>Em breve</p>
              ) : (
                <p className={styles.cardText}>{text}</p>
              )}
            </li>
          ))}
        </ul>

        <h2 className={styles.compareTitle}>
          O que muda com squad.com
          <br />
          na sua empresa
        </h2>

        <div className={styles.compareCards}>
          <CompareCard
            label="SEM SQUAD NO SEU TIME"
            items={WITHOUT}
            icon={thumbsDown}
          />
          <CompareCard label="COM SQUAD NO SEU TIME" items={WITH} icon={thumbsUp} />
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default IntegracoesLogos;
