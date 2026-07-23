import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import bg from '../../assets/int-cta-bg.png';
import { WHATSAPP_CTA } from '../../links';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './IntegracoesCta.module.css';

function IntegracoesCta() {
  const { t } = useLocale();
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.banner}>
          <img src={bg} alt="" aria-hidden="true" className={styles.bg} />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.content}>
            <h2 className={styles.title}>{nl2br(t('cta.hireTitle'))}</h2>
            <Button size="lg" href={WHATSAPP_CTA} withArrow>
              {t('cta.hireNow')}
            </Button>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default IntegracoesCta;
