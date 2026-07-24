import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import dashboard from '../../assets/juri-dashboard.png';
import dashboardMobile from '../../assets/juri-dashboard-mobile.png';
import dashboardEn from '../../assets/juri-dashboard-en.png';
import dashboardMobileEn from '../../assets/juri-dashboard-mobile-en.png';
import character from '../../assets/juri-character.png';
import { WHATSAPP_CONTACT } from '../../links';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './JuriHero.module.css';

// Título -> subtítulo -> CTA, em sequência (stagger). MotionConfig com
// reducedMotion="user" já respeita prefers-reduced-motion (mantém o fade,
// remove o deslocamento) sem precisar de media query manual aqui.
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

function JuriHero() {
  const { t, locale } = useLocale();
  // Assets só têm PT e EN; espanhol usa a versão em inglês.
  const en = locale !== 'pt';
  const dash = en ? dashboardEn : dashboard;
  const dashMobile = en ? dashboardMobileEn : dashboardMobile;
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
            {nl2br(t('pages.juri.hero.title'))}
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('pages.juri.hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
              {t('pages.juri.hero.cta')}
            </Button>
          </motion.div>
        </motion.div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <img
              src={dash}
              alt="Painel de Contratos do Squad conduzido pela Juri"
              className={styles.dashboard}
            />
            {/* Mobile shows a zoomed-in crop of the panel (legible on small screens) */}
            <img
              src={dashMobile}
              alt=""
              aria-hidden="true"
              className={styles.dashboardMobile}
            />
          </div>
          {/* Character sits outside the card so it's never clipped by its overflow */}
          <span className={styles.characterShadow} aria-hidden="true" />
          <img
            src={character}
            alt=""
            aria-hidden="true"
            className={styles.character}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

export default JuriHero;
