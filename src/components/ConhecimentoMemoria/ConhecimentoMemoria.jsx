import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './ConhecimentoMemoria.module.css';

function ConhecimentoMemoria() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <h2 className={styles.title}>
          A memória do seu
          <br />
          negócio
        </h2>
        <div className={styles.text}>
          <p>
            Todo negócio já tem esse conhecimento, só que espalhado: na cabeça do
            dono, em conversa de WhatsApp, em documento perdido no Drive, na
            experiência de quem trabalha ali há anos.
          </p>
          <p>
            A Base de Conhecimento do Squad organiza tudo isso em um só lugar e
            coloca à disposição de cada agente. São quatro frentes: as regras do
            seu negócio, as perguntas que se repetem, os processos que sua equipe
            segue e os artigos que documentam o resto. Quanto mais completa a
            base, mais os agentes respondem como você responderia.
          </p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default ConhecimentoMemoria;
