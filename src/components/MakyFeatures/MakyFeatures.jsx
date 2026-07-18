import FeatureSection from './FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from './FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Maky');
import sec3 from '../../assets/maky-sec3.png';
import sec4 from '../../assets/maky-sec4.png';
import sec5 from '../../assets/maky-sec5.png';
import sec6 from '../../assets/maky-sec6.png';
import sec7 from '../../assets/maky-sec7.png';

const FEATURES = [
  {
    eyebrow: 'MONITOR DE CONCORRÊNCIA',
    title: 'Sempre de olho,\nsempre publicando',
    paragraph:
      'A Maky acompanha os perfis dos seus concorrentes todo dia, compara o desempenho com o seu e mostra os posts que mais performaram no segmento. Quando algo funciona, ela rascunha uma versão sua com um clique.',
    image: sec3,
    reverse: false,
  },
  {
    eyebrow: 'COMENTÁRIOS',
    title: 'Todo comentário vira\nconversa, na hora',
    paragraph:
      'Quem comenta no seu post recebe uma mensagem automática no direct, migrando da vitrine pra conversa onde a venda acontece. Funciona mesmo quando são centenas de comentários por dia.',
    image: sec4,
    reverse: true,
  },
  {
    eyebrow: 'CAMPANHAS',
    title: 'Feed sempre ativo,\npublicado na hora certa',
    paragraph:
      'A Maky cria e agenda seus posts no Instagram, estático ou carrossel, a partir do que já sabe sobre sua marca. Você só revisa antes de ir ao ar.',
    image: sec5,
    reverse: false,
  },
  {
    eyebrow: 'BLOG E IA',
    title: 'Apareça nas respostas\ndo ChatGPT',
    paragraph:
      'A Maky escreve conteúdo pra construir a presença da sua marca nas respostas do ChatGPT, Claude e Gemini. Quanto mais cedo você aparece, maior a chance de virar a resposta padrão do seu segmento.',
    image: sec6,
    reverse: true,
  },
  {
    eyebrow: 'MÍDIA PAGA',
    title: 'Mais vendas no Google,\nsem gastar às cegas',
    paragraph:
      'A Maky monta a campanha inteira no Google Ads e só publica depois da sua aprovação. Você entra na frente de quem já procura o que vende, sem precisar aprender a plataforma.',
    image: sec7,
    reverse: false,
  },
];

/* Each feature block opens the same modal as the homepage card, by skill label */
const SKILL_LABELS = [
  'Análise concorrentes',
  'Comentários',
  'Campanhas',
  'Blog / AEO',
  'Tráfego pago',
];

function MakyFeatures() {
  const { openTool, modal } = useAgentModal(AGENT);

  return (
    <>
      {FEATURES.map((f, i) => {
        const skill = AGENT?.skills.find((s) => s.label === SKILL_LABELS[i]);
        return (
          <div key={f.eyebrow}>
            {i > 0 && <div className={styles.divider} aria-hidden="true" />}
            <FeatureSection {...f} onCta={() => openTool(skill)} />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default MakyFeatures;
