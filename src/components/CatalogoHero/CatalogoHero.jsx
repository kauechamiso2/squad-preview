import { motion, MotionConfig } from 'motion/react';
import Button from '../ui/Button';
import heroDesktop from '../../assets/cat-hero-desktop.png';
import heroMobile from '../../assets/cat-hero-mobile.png';
import { WHATSAPP_CTA } from '../../links';
import styles from './CatalogoHero.module.css';

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

function CatalogoHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className={styles.hero}>
        <div className={styles.stage}>
          <img
            src={heroDesktop}
            alt=""
            aria-hidden="true"
            className={`${styles.art} ${styles.artDesktop}`}
          />

          <motion.div
            className={styles.content}
            variants={contentVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              Cadastre uma vez,
              <br />
              todo agente vende certo.
            </motion.h1>
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Produtos e Serviços reúne o que você vende, o preço e o estoque num
              só lugar. Todo agente do Squad vende a partir dessa mesma informação,
              então preço, prazo e disponibilidade nunca ficam desencontrados.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" href={WHATSAPP_CTA} withArrow>
                Contratar Squad
              </Button>
            </motion.div>
          </motion.div>

          <img
            src={heroMobile}
            alt=""
            aria-hidden="true"
            className={`${styles.art} ${styles.artMobile}`}
          />
        </div>
      </section>
    </MotionConfig>
  );
}

export default CatalogoHero;
