import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import characters from '../../assets/int-characters.png';
import logoGmail from '../../assets/int-logo-gmail.png';
import logoMeta from '../../assets/int-logo-meta.png';
import logoShopify from '../../assets/int-logo-shopify.png';
import logoWhatsapp from '../../assets/int-logo-whatsapp.png';
import logoInstagram from '../../assets/int-logo-instagram.png';
import logoGmb from '../../assets/int-logo-gmb.png';
import logoHubspot from '../../assets/int-logo-hubspot.png';
import logoLojaIntegrada from '../../assets/int-logo-lojaintegrada.png';
import { WHATSAPP_CTA } from '../../links';
import styles from './IntegracoesHero.module.css';

// Título -> subtítulo -> CTA, em sequência (stagger). MotionConfig com
// reducedMotion="user" respeita prefers-reduced-motion (mantém o fade,
// remove o deslocamento).
const contentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const CARDS = [
  { name: 'Gmail', logo: logoGmail },
  { name: 'Meta', logo: logoMeta },
  { name: 'Shopify', logo: logoShopify },
  { name: 'WhatsApp', logo: logoWhatsapp },
  { name: 'Instagram', logo: logoInstagram },
  { name: 'Google\nMy Business', logo: logoGmb },
  { name: 'HubSpot', logo: logoHubspot },
  { name: 'Loja Integrada', logo: logoLojaIntegrada },
];

function Card({ name, logo }) {
  return (
    <div className={styles.card}>
      <p className={styles.cardName}>{name}</p>
      <img src={logo} alt="" aria-hidden="true" className={styles.cardLogo} />
    </div>
  );
}

function IntegracoesHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className={styles.hero}>
        <motion.div
          className={styles.content}
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            Conecte todas as ferramentas do
            <br />
            seu negócio em um só lugar
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            O Squad se conecta às ferramentas que sua empresa já usa, como
            Instagram, WhatsApp e Shopify. Com a integração, os agentes ganham o
            contexto que precisam pra agir sozinhos, sem você copiar informação de
            um sistema pro outro.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" href={WHATSAPP_CTA} withArrow>
              Contratar agora
            </Button>
          </motion.div>
        </motion.div>

        <div className={styles.visual}>
          {/* Infinite horizontal marquee of integration cards (pauses on hover) */}
          <div className={styles.marquee}>
            <div className={styles.track}>
              {[...CARDS, ...CARDS].map((c, i) => (
                <Card key={`${c.name}-${i}`} {...c} />
              ))}
            </div>
          </div>

          {/* Characters stand in front of the cards */}
          <img
            src={characters}
            alt="Time de agentes do Squad"
            className={styles.characters}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

export default IntegracoesHero;
