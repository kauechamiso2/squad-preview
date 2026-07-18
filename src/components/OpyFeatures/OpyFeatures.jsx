import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from '../MakyFeatures/FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Opy');
import sec1 from '../../assets/opy-sec1.png';
import sec2 from '../../assets/opy-sec2.png';
import sec3 from '../../assets/opy-sec3.png';
import sec4 from '../../assets/opy-sec4.png';

const TEAL = 'linear-gradient(90deg, #1ab0b3, #5fd0d2)';

const FEATURES = [
  {
    eyebrow: 'ESCALAS',
    title: 'Nenhum turno\npassa despercebido',
    paragraph:
      'A Opy monta a escala do seu time respeitando os limites legais de jornada, com visibilidade de quem trabalha e quando. Se um turno fica sem cobertura, ela avisa na hora, e o colaborador pode pedir troca direto pelo app.',
    image: sec1,
    reverse: false,
  },
  {
    eyebrow: 'CONTROLE DE ESTOQUE',
    title: 'Nunca mais pare a venda\npor falta de insumo',
    paragraph:
      'A Opy controla todos os suprimentos e o estoque do seu negócio num lugar só. Ela avisa antes de faltar item essencial, mostra o que está parado sem girar e dá a base certa pra comprar na hora e na quantidade certas.',
    image: sec2,
    reverse: true,
    cta: 'Em breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'GRAVAÇÃO DE REUNIÕES',
    title: 'Reunião gravada, pra\nrevisar sem depender da memória',
    paragraph:
      'A Opy grava as reuniões do time pra nada importante se perder no calor da conversa. Você volta a qualquer reunião pra lembrar o que foi dito, analisar com calma o que importa e consultar o histórico sempre que precisar.',
    image: sec3,
    reverse: false,
    cta: 'Em breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'OTIMIZADOR DE ENTREGAS',
    title: 'Entrega mais rápida,\nsem depender de marketplace',
    paragraph:
      'A Opy organiza e otimiza o sistema de entregas do seu canal próprio, pra rodar de forma mais eficiente. Isso significa menos gasto por entrega, menos tempo perdido e uma experiência melhor pra quem compra.',
    image: sec4,
    reverse: true,
    cta: 'Em breve',
    ctaDisabled: true,
  },
];

const SKILL_LABELS = [
  'Escalas',
  'Controle de estoque',
  'Gravações de reuniões',
  'Otimizador de entregas',
];

function OpyFeatures() {
  const { openTool, modal } = useAgentModal(AGENT);

  return (
    <>
      {FEATURES.map((f, i) => {
        const skill = AGENT?.skills.find((s) => s.label === SKILL_LABELS[i]);
        return (
          <div key={i}>
            {i > 0 && <div className={styles.divider} aria-hidden="true" />}
            <FeatureSection
              {...f}
              eyebrowGradient={TEAL}
              onCta={() => openTool(skill)}
            />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default OpyFeatures;
