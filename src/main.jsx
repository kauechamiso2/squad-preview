import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getSeo } from './seo.js'
import { stripBase } from './base.js'

const path = stripBase(window.location.pathname)
const root = document.getElementById('root')

// Keep the tab title correct in dev (where head tags aren't prerendered) and
// on client-side navigation.
document.title = getSeo(path).title

const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// Hydrate the prerendered markup in production; fall back to a fresh render in
// dev (where #root is empty).
if (root.childElementCount > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
