import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from '../MakyFeatures/FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Juri');
import sec1 from '../../assets/juri-sec1.png';
import sec2 from '../../assets/juri-sec2.png';
import sec3 from '../../assets/juri-sec3.png';
import sec4 from '../../assets/juri-sec4.png';

const PURPLE = 'linear-gradient(90deg, #8b5cf6, #b89afa)';

const FEATURES = [
  {
    eyebrow: 'GESTÃO DE CONTRATOS',
    title: 'Prazo de contrato\nnunca mais passa batido',
    paragraph:
      'A Juri guarda todos os seus contratos num só lugar, lê cada um e extrai prazo, valor e multa automaticamente. Antes de vencer, ela avisa e já deixa o e-mail de renovação pronto pra você enviar.',
    image: sec1,
    reverse: false,
  },
  {
    eyebrow: 'GERADOR DE DOCUMENTOS',
    title: 'Contrato criado, sem\ncomeçar do zero toda vez',
    paragraph:
      'A Juri gera os contratos que a equipe precisa, sem começar do zero toda vez, e mantém tudo centralizado com o resto dos contratos do time. Cada documento fica organizado e acessível, reduzindo o risco de furo ou prazo perdido.',
    image: sec2,
    reverse: true,
    cta: 'Em breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'ASSINATURA DIGITAL',
    title: 'Contrato assinado,\nsem imprimir nada',
    paragraph:
      'A Juri envia o contrato pra assinatura digital, com validade jurídica, direto do celular ou computador. Você manda pra todos os signatários de uma vez e acompanha quem já assinou, sem documento parado esperando ninguém.',
    image: sec3,
    reverse: false,
    cta: 'Em breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'REVISÃO DE CONTRATOS',
    title: 'Nenhuma cláusula\nescondida passa despercebida',
    paragraph:
      'A Juri lê o contrato inteiro antes de você assinar, traduz o juridiquês em linguagem simples e destaca cláusulas de risco como multa e renovação automática. Você pode perguntar sobre qualquer trecho e entender o que está assinando antes de se comprometer.',
    image: sec4,
    reverse: true,
    cta: 'Em breve',
    ctaDisabled: true,
  },
];

const SKILL_LABELS = [
  'Gestão de contratos',
  'Gerador de documentos',
  'Assinatura Digital',
  'Revisão de contratos',
];

function JuriFeatures() {
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
              eyebrowGradient={PURPLE}
              onCta={() => openTool(skill)}
            />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default JuriFeatures;
