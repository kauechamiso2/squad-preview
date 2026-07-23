import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import VidalyticsVideo from '../VidalyticsVideo/VidalyticsVideo';
import { WHATSAPP_CONTACT } from '../../links';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './JuriCta.module.css';

function JuriCta() {
  const { t } = useLocale();
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.cta}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <VidalyticsVideo embedId="AC5GjSKEJoXKZMFL" />

        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.content}>
          <h2 className={styles.title}>{t('pages.juri.cta.title')}</h2>
          <Button size="lg" href={WHATSAPP_CONTACT} withArrow>
            {t('pages.juri.cta.button')}
          </Button>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default JuriCta;
