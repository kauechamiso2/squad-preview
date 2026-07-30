import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LocaleProvider } from '../i18n/LocaleContext.jsx';
import WazVendas from './WazVendas.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <WazVendas />
    </LocaleProvider>
  </StrictMode>,
);
