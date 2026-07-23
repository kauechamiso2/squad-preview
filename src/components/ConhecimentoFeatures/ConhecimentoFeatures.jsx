import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';
import sec1 from '../../assets/con-sec1.png';
import sec2 from '../../assets/con-sec2.png';
import sec3 from '../../assets/con-sec3.png';
import sec4 from '../../assets/con-sec4.png';

const GREEN = 'linear-gradient(90deg, #34c759, #7ed99a)';
const PINK = 'linear-gradient(90deg, #7a5af8, #f45dac)';
const BLUE_GOLD = 'linear-gradient(90deg, #0091ff, #edb845)';

const FEATURES = [
  {
    eyebrow: 'REGRAS DO NEGÓCIO',
    title: 'As regras da casa,\nsempre respeitadas',
    paragraph:
      'Defina o que pode e o que não pode: tom de voz, política de desconto, limite de aprovação, o que precisa passar por um humano. Todo agente segue essas regras à risca, sem depender de quem está de plantão naquele dia.',
    image: sec1,
    reverse: false,
    gradient: GREEN,
  },
  {
    eyebrow: 'PERGUNTAS FREQUENTES',
    title: 'A resposta que não\nmuda dependendo\nde quem responde',
    paragraph:
      'Cadastre as perguntas que mais se repetem, de cliente ou de equipe, com a resposta oficial já pronta. Cada agente puxa dali na hora, então a resposta de hoje é a mesma de daqui a 6 meses, mesmo se quem cadastrou já não estiver mais na empresa.',
    image: sec2,
    reverse: true,
    gradient: PINK,
  },
  {
    eyebrow: 'PROCESSOS',
    title: 'O passo a passo\nque ninguém esquece',
    paragraph:
      'Documente como sua empresa realmente funciona: como abrir um chamado, como fechar o caixa, como treinar alguém novo. Os agentes seguem esse passo a passo à risca, e ele continua registrado mesmo quando quem sabia fazer sai da empresa.',
    image: sec3,
    reverse: false,
    gradient: BLUE_GOLD,
  },
  {
    eyebrow: 'ARTIGOS',
    title: 'Tudo documentado,\nnada perdido',
    paragraph:
      'Reúna manual, política interna e qualquer material que já existe, mesmo que hoje esteja espalhado em PDF, Word ou anotação solta. Os agentes leem, organizam e citam a fonte sempre que usam uma informação de algum artigo.',
    image: sec4,
    reverse: true,
    gradient: GREEN,
  },
];

function ConhecimentoFeatures() {
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

export default ConhecimentoFeatures;
