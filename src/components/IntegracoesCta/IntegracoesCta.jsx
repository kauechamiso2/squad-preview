import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import bg from '../../assets/int-cta-bg.png';
import { WHATSAPP_CTA } from '../../links';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './IntegracoesCta.module.css';

function IntegracoesCta() {
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
            <h2 className={styles.title}>
              Contrate agora o Squad
              <br />
              para o seu negócio
            </h2>
            <Button size="lg" href={WHATSAPP_CTA} withArrow>
              Contratar agora
            </Button>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default IntegracoesCta;
