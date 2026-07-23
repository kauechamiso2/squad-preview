import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './AprendizagemFeature.module.css';

/**
 * Bloco de conteúdo da /aprendizagem: texto de um lado, mockup do outro.
 * - `reverse` põe o mockup à esquerda (bloco Suporte).
 * - `gradient` é o gradiente do eyebrow, recortado no texto. Ele é desenhado
 *   sobre uma caixa de 473px (como no Figma) via background-size, então a
 *   rampa de cor cai nas mesmas letras independente da largura do elemento.
 * - `imageWidth` compensa a sangria do export (o PNG do Figma é mais largo que
 *   o frame quando algum balão transborda), mantendo a escala do desenho.
 */
function AprendizagemFeature({
  eyebrow,
  gradient,
  title,
  paragraph,
  image,
  imageWidth = '100%',
  reverse = false,
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={`${styles.section} ${reverse ? styles.reverse : ''}`}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.text}>
          <p className={styles.eyebrow} style={{ backgroundImage: gradient }}>
            {eyebrow}
          </p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>

        <div className={styles.visual}>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className={styles.image}
            style={{ width: imageWidth }}
          />
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default AprendizagemFeature;
