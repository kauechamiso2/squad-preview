import CatalogoHero from '../../components/CatalogoHero/CatalogoHero';
import CatalogoMemoria from '../../components/CatalogoMemoria/CatalogoMemoria';
import CatalogoFeatures from '../../components/CatalogoFeatures/CatalogoFeatures';
import CatalogoShopify from '../../components/CatalogoShopify/CatalogoShopify';
import CatalogoCompare from '../../components/CatalogoCompare/CatalogoCompare';
import IntegracoesCta from '../../components/IntegracoesCta/IntegracoesCta';
import CatalogoFaq from '../../components/CatalogoFaq/CatalogoFaq';

function Catalogo() {
  return (
    <>
      <CatalogoHero />
      <CatalogoMemoria />
      <CatalogoFeatures />
      <CatalogoShopify />
      <CatalogoCompare />
      <IntegracoesCta />
      <CatalogoFaq />
    </>
  );
}

export default Catalogo;
