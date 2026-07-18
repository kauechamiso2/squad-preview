import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from '../MakyFeatures/FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Pipo');
import sec1 from '../../assets/pipo-sec1.png';
import sec2 from '../../assets/pipo-sec2.png';
import sec3 from '../../assets/pipo-sec3.png';
import sec4 from '../../assets/pipo-sec4.png';

const GOLD = 'linear-gradient(90deg, #edb845, #f5d68a)';

const FEATURES = [
  {
    eyebrow: 'RECRUTAMENTO',
    title: 'Da vaga à proposta,\nnum funil só',
    paragraph:
      'O Pipo publica a vaga com a cara da sua empresa, analisa cada currículo e mostra quem tem mais aderência. Do funil organizado até a proposta pronta, tudo no mesmo lugar.',
    image: sec1,
    reverse: false,
  },
  {
    eyebrow: 'WIKI INTERNO',
    title: 'Conhecimento da empresa,\nsempre à mão da equipe',
    paragraph:
      'O Pipo aprende o conteúdo que você já tem e responde a equipe na hora, com a resposta oficial da casa. Ele só usa o que foi aprovado, então nunca inventa uma resposta.',
    image: sec2,
    reverse: true,
  },
  {
    eyebrow: 'PDI',
    title: 'Plano de crescimento pra\ncada colaborador, sem trabalho extra',
    paragraph:
      'O Pipo cria plano de desenvolvimento individual pra cada colaborador, com base no histórico e nas necessidades reais da empresa e da função. Cada pessoa ganha um caminho de crescimento definido, em vez de evolução no improviso.',
    image: sec3,
    reverse: false,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'PROSPECÇÃO DE CANDIDATOS',
    title: 'Candidato certo,\nsem ficar só esperando',
    paragraph:
      'O Pipo pesquisa nas plataformas pra encontrar candidatos, em vez de esperar quem se aplica, e busca o perfil certo pra vaga específica que você quer preencher. Isso tira o trabalho pesado de varrer perfil por perfil e encurta o caminho entre abrir a vaga e ter bons nomes na mão.',
    image: sec4,
    reverse: true,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
];

const SKILL_LABELS = [
  'Triagem de CVs',
  'Wiki interno',
  'PDI',
  'Prospecção candidatos',
];

function PipoFeatures() {
  const { openTool, modal } = useAgentModal(AGENT);

  return (
    <>
      {FEATURES.map((f, i) => {
        const skill = AGENT?.skills.find((s) => s.label === SKILL_LABELS[i]);
        return (
          <div key={f.eyebrow}>
            {i > 0 && <div className={styles.divider} aria-hidden="true" />}
            <FeatureSection
              {...f}
              eyebrowGradient={GOLD}
              onCta={() => openTool(skill)}
            />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default PipoFeatures;
