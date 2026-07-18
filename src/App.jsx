import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Maky from './pages/Maky/Maky';
import Waz from './pages/Waz/Waz';
import Fin from './pages/Fin/Fin';
import Pipo from './pages/Pipo/Pipo';
import Opy from './pages/Opy/Opy';
import Juri from './pages/Juri/Juri';
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
  '/integracoes': Integracoes,
  '/conhecimento': Conhecimento,
  '/catalogo': Catalogo,
};

function App({ path }) {
  // `path` is passed in on the server (prerender) and on the client (from the
  // browser location), so this component never touches `window` during render.
  const current = (path || '/').replace(/\/+$/, '') || '/';
  const Page = PAGES[current] ?? Home;

  return (
    <>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  );
}

export default App;
