import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LocaleProvider } from '../i18n/LocaleContext.jsx';
import WazVendas3 from './WazVendas3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <WazVendas3 />
    </LocaleProvider>
  </StrictMode>,
);
