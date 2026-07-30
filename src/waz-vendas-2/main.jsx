import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LocaleProvider } from '../i18n/LocaleContext.jsx';
import WazVendas2 from './WazVendas2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <WazVendas2 />
    </LocaleProvider>
  </StrictMode>,
);
