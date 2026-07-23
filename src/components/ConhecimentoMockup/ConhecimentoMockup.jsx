import { motion, MotionConfig } from 'motion/react';
import mockup from '../../assets/con-s3-mockup.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './ConhecimentoMockup.module.css';

function ConhecimentoMockup() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <img
          src={mockup}
          alt="Painel da Base de Conhecimento do Squad com o time de agentes"
          className={styles.image}
        />
      </motion.section>
    </MotionConfig>
  );
}

export default ConhecimentoMockup;
