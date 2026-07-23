import AprendizagemHero from '../../components/AprendizagemHero/AprendizagemHero';
import AprendizagemFeature from '../../components/AprendizagemFeature/AprendizagemFeature';
import AprendizagemCompare from '../../components/AprendizagemCompare/AprendizagemCompare';
import AprendizagemFaq from '../../components/AprendizagemFaq/AprendizagemFaq';
/* Mesmo CTA das páginas de recursos (título e botão idênticos ao Figma) */
import IntegracoesCta from '../../components/IntegracoesCta/IntegracoesCta';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import mentorias from '../../assets/apr-mentorias.png';
import suporte from '../../assets/apr-suporte.png';
import especialista from '../../assets/apr-especialista.png';

/* Gradientes dos eyebrows exatamente como no Figma (caixa de 473px) */
const GRAD_MENTORIAS =
  'linear-gradient(94.086deg, #7cc870 0.166%, #b3ddf2 9.83%, #ffd2ea 17.956%)';
const GRAD_SUPORTE =
  'linear-gradient(90deg, #6d7cff 0%, #b3ddf2 22.971%, #f45dac 42.283%)';
const GRAD_ESPECIALISTA =
  'linear-gradient(93.691deg, #6d7cff 0.15%, #0091ff 10.844%, #eac764 19.834%)';

/* Estrutural; os textos vêm de pages.aprendizagem.features (por índice) */
const BLOCKS = [
  { gradient: GRAD_MENTORIAS, image: mentorias, imageWidth: '107.72%' },
  { gradient: GRAD_SUPORTE, image: suporte, imageWidth: '104.44%', reverse: true },
  { gradient: GRAD_ESPECIALISTA, image: especialista },
];

function Aprendizagem() {
  const { t } = useLocale();
  const feats = t('pages.aprendizagem.features');

  return (
    <>
      <AprendizagemHero />

      {BLOCKS.map((b, i) => (
        <AprendizagemFeature
          key={i}
          {...b}
          eyebrow={feats[i].eyebrow}
          title={feats[i].title}
          paragraph={feats[i].paragraph}
        />
      ))}

      <AprendizagemCompare />
      <IntegracoesCta />
      <AprendizagemFaq />
    </>
  );
}

export default Aprendizagem;
