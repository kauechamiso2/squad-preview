import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { LocaleProvider } from './i18n/LocaleContext.jsx';

/** Render a route to an HTML string (called by prerender.js at build time).
 *  The prerender always uses the default locale; the client re-detects and
 *  switches after hydration. */
export function render(path) {
  return renderToString(
    <StrictMode>
      <LocaleProvider>
        <App path={path} />
      </LocaleProvider>
    </StrictMode>,
  );
}
