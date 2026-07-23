import { motion, MotionConfig } from 'motion/react';
import shopify from '../../assets/int-logo-shopify.png';
import visual from '../../assets/cat-sec6-visual.png';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './CatalogoShopify.module.css';

function CatalogoShopify() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.card}>
          <div className={styles.text}>
            <span className={styles.logo}>
              <img src={shopify} alt="Shopify" />
            </span>
            <h2 className={styles.title}>
              Já vende pelo Shopify?
              <span className={styles.titleBreak} />
              Conecte a loja e o catálogo sincroniza sozinho, sem recadastrar nada.
            </h2>
            <p className={styles.paragraph}>
              A integração com o Shopify puxa todo o seu catálogo de produtos
              direto pro Squad, com estoque sempre atualizado dos dois lados. Toda
              venda feita por um agente já entra integrada ao seu histórico, sem
              precisar conciliar nada manualmente depois.
            </p>
          </div>

          <div className={styles.visual}>
            <img src={visual} alt="" aria-hidden="true" />
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default CatalogoShopify;
