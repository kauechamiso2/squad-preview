import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../ConhecimentoMemoria/ConhecimentoMemoria.module.css';

function CatalogoMemoria() {
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
          A vitrine que todo
          <br />
          agente enxerga
        </h2>
        <div className={styles.text}>
          <p>
            Hoje seu catálogo provavelmente vive espalhado: uma tabela de preço no
            Excel, o estoque de cabeça, a forma de entrega combinada no boca a boca
            com cada cliente. Produtos e Serviços organiza tudo isso num só lugar e
            coloca à disposição de cada agente. Você cadastra o que vende, define
            como entrega e como cobra, e acompanha cada venda do início ao fim.
            Quanto mais completo o catálogo, mais rápido um agente fecha uma venda
            sem te perguntar nada.
          </p>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default CatalogoMemoria;
