import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from '../MakyFeatures/FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Fin');
import sec1 from '../../assets/fin-sec1.png';
import sec2 from '../../assets/fin-sec2.png';
import sec3 from '../../assets/fin-sec3.png';
import sec4 from '../../assets/fin-sec4.png';

const BLUE = 'linear-gradient(90deg, #0091ff, #7ec4f2)';

const FEATURES = [
  {
    eyebrow: 'FLUXO DE CAIXA',
    title: 'Saiba quanto sobrou,\nsem abrir planilha',
    paragraph:
      'O Fin centraliza todos os pagamentos do seu negócio, mostra quanto entra, quanto sai e o que sobra de verdade. Ele também projeta o caixa dos próximos meses, pra você planejar compra e crescimento com mais segurança.',
    image: sec1,
    reverse: false,
  },
  {
    eyebrow: 'EMISSÃO DE NF',
    title: 'Menos burocracia,\nmenos chance de erro',
    paragraph:
      'O Fin emite nota fiscal direto na plataforma, sem pular pra outro sistema. O processo fica mais simples e centralizado, reduzindo a chance de erro e deixando a emissão integrada ao resto do financeiro do negócio.',
    image: sec2,
    reverse: true,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'LINKS DE PAGAMENTO',
    title: 'Cobrança pronta,\nsem maquininha nem sistema à parte',
    paragraph:
      'O Fin gera um link de pagamento pra qualquer venda, sem precisar de maquininha nem sistema à parte. O cliente escolhe Pix, cartão ou boleto, e assim que o pagamento cai, o status atualiza sozinho.',
    image: sec3,
    reverse: false,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'COBRANÇA DE CLIENTE',
    title: 'Cobre sozinho,\nsem escrever uma mensagem',
    paragraph:
      'O Fin dispara o lembrete de cobrança sozinho, antes e depois do vencimento, seguindo o tom que você define. A cobrança fica consistente, sem soar robótica ou agressiva, e reduz o valor parado no fluxo de caixa.',
    image: sec4,
    reverse: true,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
];

const SKILL_LABELS = [
  'Fluxo de caixa',
  'Emissão de NF',
  'Links de pagamentos',
  'Cobrança de cliente',
];

function FinFeatures() {
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
              eyebrowGradient={BLUE}
              onCta={() => openTool(skill)}
            />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default FinFeatures;
