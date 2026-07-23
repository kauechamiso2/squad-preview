import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import dashboard from '../../assets/apr-dashboard.png';
import characters from '../../assets/apr-characters.png';
import { WHATSAPP_CTA } from '../../links';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './AprendizagemHero.module.css';

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

function AprendizagemHero() {
  const { t } = useLocale();
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
            {t('pages.aprendizagem.hero.title')}
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('pages.aprendizagem.hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button size="lg" href={WHATSAPP_CTA} withArrow>
              {t('pages.aprendizagem.hero.cta')}
            </Button>
          </motion.div>
        </motion.div>

        <div className={styles.visual}>
          {/* No mobile o painel é mostrado em tamanho natural e recortado na
              borda da tela (como no Figma), por isso o wrapper que faz o clip. */}
          <div className={styles.frame}>
            <img
              src={dashboard}
              alt={t('pages.aprendizagem.hero.dashboardAlt')}
              className={styles.dashboard}
            />
          </div>
          {/* Personagens ficam à frente do painel e transbordam a base do card */}
          <img
            src={characters}
            alt=""
            aria-hidden="true"
            className={styles.characters}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

export default AprendizagemHero;
