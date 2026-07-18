import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import styles from '../MakyFeatures/FeatureSection.module.css';

const AGENT = CHARACTERS.find((c) => c.name === 'Waz');
import sec1 from '../../assets/waz-sec1.png';
import sec2 from '../../assets/waz-sec2.png';
import sec3 from '../../assets/waz-sec3.png';
import sec4 from '../../assets/waz-sec4.png';
import sec5 from '../../assets/waz-sec5.png';

const GREEN = 'linear-gradient(90deg, #34c759, #7ed99a)';

const FEATURES = [
  {
    eyebrow: 'DISPAROS DE WHATSAPP',
    title: 'Fale com sua base inteira\nsem bloquear seu número',
    paragraph:
      'O Waz dispara campanha pra base inteira pela API oficial da Meta, com o número protegido. Você segmenta por grupo, agenda o melhor horário e acompanha a entrega contato a contato.',
    image: sec1,
    reverse: false,
  },
  {
    eyebrow: 'SDR',
    title: 'Resposta na hora,\nmesmo fora do horário de expediente',
    paragraph:
      'O Waz responde o cliente na hora, a qualquer momento do dia, seguindo o tom e as regras que você definiu. Quem chega por anúncio, comentário ou disparo é atendido no mesmo lugar.',
    image: sec2,
    reverse: true,
  },
  {
    eyebrow: 'GERADOR DE PROPOSTA',
    title: 'Proposta pronta,\nsem copiar a antiga',
    paragraph:
      'O Waz monta a proposta comercial em minutos, em slide ou documento, usando o modelo e a linguagem da sua marca. Desconto e ajuste final saem na hora, sem recalcular nada.',
    image: sec3,
    reverse: false,
  },
  {
    eyebrow: 'COACH DE VENDAS',
    title: 'Do primeiro contato ao\npós-venda, tudo num lugar',
    paragraph:
      'O Waz organiza cada lead dentro do app e mostra onde ele está no funil, do primeiro contato ao pós-venda. Toda conversa e etapa fica registrada, então nenhuma oportunidade some por falta de acompanhamento.',
    image: sec4,
    reverse: false,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
  {
    eyebrow: 'BUSCA DE LEADS',
    title: 'Chegue na conversa\nsabendo tudo sobre o lead',
    paragraph:
      'O Waz cria listas de leads a partir de pesquisas na web ou enriquece a planilha que você já tem, sem garimpar contato a contato. Cada lead chega com as informações que o vendedor precisa, pronto pra abordagem simples e direta.',
    image: sec5,
    reverse: true,
    cta: 'Em Breve',
    ctaDisabled: true,
  },
];

const SKILL_LABELS = [
  'Outbound WhatsApp',
  'SDR',
  'Gerador de propostas',
  'Coach de Vendas',
  'Busca de leads',
];

function WazFeatures() {
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
              eyebrowGradient={GREEN}
              onCta={() => openTool(skill)}
            />
          </div>
        );
      })}
      {modal}
    </>
  );
}

export default WazFeatures;
