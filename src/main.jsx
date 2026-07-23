import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LocaleProvider } from './i18n/LocaleContext.jsx'
import { getSeo } from './seo.js'
import { stripBase } from './base.js'
import { initTracking } from './tracking.js'

const path = stripBase(window.location.pathname)
const root = document.getElementById('root')

// Keep the tab title correct in dev (where head tags aren't prerendered) and
// on client-side navigation.
document.title = getSeo(path).title

const app = (
  <StrictMode>
    <LocaleProvider>
      <App path={path} />
    </LocaleProvider>
  </StrictMode>
)

// Hydrate the prerendered markup in production; fall back to a fresh render in
// dev (where #root is empty).
if (root.childElementCount > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

// Analytics/attribution (Pulse page-view + WhatsApp session + Google Ads),
// runs on every page load. Client-only — never during prerender.
initTracking()
