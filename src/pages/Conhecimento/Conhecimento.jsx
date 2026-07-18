import ConhecimentoHero from '../../components/ConhecimentoHero/ConhecimentoHero';
import ConhecimentoMemoria from '../../components/ConhecimentoMemoria/ConhecimentoMemoria';
import ConhecimentoMockup from '../../components/ConhecimentoMockup/ConhecimentoMockup';
import ConhecimentoFeatures from '../../components/ConhecimentoFeatures/ConhecimentoFeatures';
import ConhecimentoCompare from '../../components/ConhecimentoCompare/ConhecimentoCompare';
import IntegracoesCta from '../../components/IntegracoesCta/IntegracoesCta';
import ConhecimentoFaq from '../../components/ConhecimentoFaq/ConhecimentoFaq';

function Conhecimento() {
  return (
    <>
      <ConhecimentoHero />
      <ConhecimentoMemoria />
      <ConhecimentoMockup />
      <ConhecimentoFeatures />
      <ConhecimentoCompare />
      <IntegracoesCta />
      <ConhecimentoFaq />
    </>
  );
}

export default Conhecimento;
