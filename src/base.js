// Base-path helpers so the app works both at the site root (dev / squad.com)
// and under a sub-path (e.g. a GitHub Pages preview at /squad-preview/).
// Vite injects import.meta.env.BASE_URL from the build's `base` config:
//   dev / normal build -> '/'      preview build -> '/squad-preview/'

const BASE = import.meta.env.BASE_URL || '/';
const trimmed = BASE.replace(/\/$/, ''); // '' at root, '/squad-preview' under a sub-path

/** Turn an app path ('/waz') into a real URL honoring the base. */
export function withBase(appPath = '/') {
  const p = appPath.startsWith('/') ? appPath : `/${appPath}`;
  return `${trimmed}${p}`;
}

/** Turn a real pathname ('/squad-preview/waz') back into an app path ('/waz'). */
export function stripBase(pathname = '/') {
  if (trimmed && pathname.startsWith(trimmed)) {
    return pathname.slice(trimmed.length) || '/';
  }
  return pathname || '/';
}
