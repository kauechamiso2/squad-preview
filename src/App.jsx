import { useEffect } from 'react';
import { useLocale } from './i18n/LocaleContext.jsx';
import { getLocalizedSeo } from './seo.js';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WazContact from './components/WazContact/WazContact';
import Home from './pages/Home';
import Maky from './pages/Maky/Maky';
import Waz from './pages/Waz/Waz';
import Fin from './pages/Fin/Fin';
import Pipo from './pages/Pipo/Pipo';
import Opy from './pages/Opy/Opy';
import Juri from './pages/Juri/Juri';
import Aprendizagem from './pages/Aprendizagem/Aprendizagem';
import Integracoes from './pages/Integracoes/Integracoes';
import Conhecimento from './pages/Conhecimento/Conhecimento';
import Catalogo from './pages/Catalogo/Catalogo';

/* Roteamento por caminho da URL — toda página compartilha Navbar e Footer */
const PAGES = {
  '/': Home,
  '/maky': Maky,
  '/waz': Waz,
  '/fin': Fin,
  '/pipo': Pipo,
  '/opy': Opy,
  '/juri': Juri,
  '/aprendizagem': Aprendizagem,
  '/integracoes': Integracoes,
  '/conhecimento': Conhecimento,
  '/catalogo': Catalogo,
};

function App({ path }) {
  // `path` is passed in on the server (prerender) and on the client (from the
  // browser location), so this component never touches `window` during render.
  const current = (path || '/').replace(/\/+$/, '') || '/';
  const Page = PAGES[current] ?? Home;
  const { locale } = useLocale();

  // Mantém título e descrição da aba no idioma atual. O HTML pré-renderizado vem
  // em PT; após a hidratação o idioma é detectado e aqui atualizamos a <head>.
  useEffect(() => {
    const seo = getLocalizedSeo(current, locale);
    document.title = seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', seo.description);
    document.documentElement.lang = locale;
  }, [current, locale]);

  // Ao chegar com um hash na URL (ex.: vindo de outra página pelo link "Planos"
  // -> /#planos), rola até a âncora depois que o layout assenta. O navegador
  // sozinho não faz isso de forma confiável após a hidratação do React.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash.length < 2) return undefined;
    const id = decodeURIComponent(hash.slice(1));
    const scrollToHash = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: 'start' });
    };
    const t = setTimeout(scrollToHash, 120);
    window.addEventListener('load', scrollToHash, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', scrollToHash);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
      <WazContact />
    </>
  );
}

export default App;
