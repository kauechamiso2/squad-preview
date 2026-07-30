import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LocaleProvider } from '../i18n/LocaleContext.jsx';
import CrmWhatsapp from './CrmWhatsapp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocaleProvider>
      <CrmWhatsapp />
    </LocaleProvider>
  </StrictMode>,
);
