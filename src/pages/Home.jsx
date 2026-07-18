import Hero from '../components/Hero/Hero';
import CharacterCarousel from '../components/CharacterCarousel/CharacterCarousel';
import Mentorias from '../components/Mentorias/Mentorias';
import BigNumbers from '../components/BigNumbers/BigNumbers';
import Clientes from '../components/Clientes/Clientes';
import Seguranca from '../components/Seguranca/Seguranca';
import InnerAI from '../components/InnerAI/InnerAI';
import Pricing from '../components/Pricing/Pricing';
import Faq from '../components/Faq/Faq';
import CtaBanner from '../components/CtaBanner/CtaBanner';

function Home() {
  return (
    <>
      <Hero />
      <CharacterCarousel />
      <Mentorias />
      <BigNumbers />
      <Clientes />
      <Seguranca />
      <InnerAI />
      <Pricing />
      {/* Garantia de 90 dias (FreeTrial) escondida por ora, componente mantido no código */}
      <Faq />
      <CtaBanner />
    </>
  );
}

export default Home;
