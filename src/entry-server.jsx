import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/** Render a route to an HTML string (called by prerender.js at build time). */
export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  );
}
