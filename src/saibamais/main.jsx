import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LocaleProvider } from '../i18n/LocaleContext.jsx';
import SaibaMais from './SaibaMais.jsx';

// A landing compartilha o Footer com o site principal, e o Footer usa i18n.
// Envolvemos em LocaleProvider para o texto traduzir (em vez de mostrar as
// chaves) e seguir a detecção de idioma.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <SaibaMais />
    </LocaleProvider>
  </StrictMode>,
);
