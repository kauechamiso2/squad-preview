import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';
import sec3 from '../../assets/cat-sec3.png';
import sec4 from '../../assets/cat-sec4.png';
import sec5 from '../../assets/cat-sec5.png';

const GREEN = 'linear-gradient(90deg, #34c759, #7ed99a)';
const BLUE_PURPLE = 'linear-gradient(90deg, #0091ff, #a78bfa)';
const BLUE = 'linear-gradient(90deg, #0091ff, #7ab8f5)';

const FEATURES = [
  {
    eyebrow: 'CATÁLOGO',
    title: 'Todo tipo de venda,\nno mesmo catálogo',
    paragraph:
      'Cadastre produto físico, produto digital, serviço ou pacote de serviços, cada um com fotos, descrição e preço. Se o produto tem variação, como cor, tamanho ou duração, você adiciona a variante e o preço ajusta sozinho pra cada opção. O estoque fica ligado ao cadastro, então ninguém vende o que já acabou.',
    image: sec3,
    reverse: false,
    gradient: GREEN,
  },
  {
    eyebrow: 'COMO VOCÊ RECEBE',
    title: 'Entrega e cobrança,\ndefinidas uma vez',
    paragraph:
      'Escolha como cada produto chega ao cliente: entrega pela transportadora, retirada no seu endereço, ou combinar depois com quem comprou. Escolha também como cobrar: link único à vista ou parcelado, sinal na hora com o restante cobrado depois, ou cobrança manual por fora. Você define uma vez, e todo agente vende seguindo essa mesma regra.',
    image: sec4,
    reverse: true,
    gradient: BLUE_PURPLE,
  },
  {
    eyebrow: 'HISTÓRICO DE VENDAS',
    title: 'Cada venda,\ndo pagamento até\na entrega',
    paragraph:
      'Toda venda fica registrada com cliente, valor, forma de pagamento e status de entrega. Quando falta receber o restante, um clique envia o link de cobrança. Quando o pedido sai, um clique marca como entregue. Nada fica só na sua memória.',
    image: sec5,
    reverse: false,
    gradient: BLUE,
  },
];

function CatalogoFeatures() {
  return (
    <MotionConfig reducedMotion="user">
      {FEATURES.map((f, i) => (
        <motion.div
          key={f.eyebrow}
          variants={revealVariants}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {i > 0 && <div className={styles.divider} aria-hidden="true" />}
          <FeatureSection {...f} eyebrowGradient={f.gradient} hideCta />
        </motion.div>
      ))}
    </MotionConfig>
  );
}

export default CatalogoFeatures;
