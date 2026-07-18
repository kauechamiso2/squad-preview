import PipoHero from '../../components/PipoHero/PipoHero';
import PipoHighlights from '../../components/PipoHighlights/PipoHighlights';
import PipoFeatures from '../../components/PipoFeatures/PipoFeatures';
import PipoCompare from '../../components/PipoCompare/PipoCompare';
import PipoCta from '../../components/PipoCta/PipoCta';
import PipoFaq from '../../components/PipoFaq/PipoFaq';

function Pipo() {
  return (
    <>
      <PipoHero />
      <PipoHighlights />
      <PipoFeatures />
      <PipoCompare />
      <PipoCta />
      <PipoFaq />
    </>
  );
}

export default Pipo;
