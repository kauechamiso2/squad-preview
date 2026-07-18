// Static-site generation: renders each route to HTML at build time and writes
// a real .html file per page (with its own <head> SEO tags) into dist/.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render } = await import('./dist-server/entry-server.js');
const { SEO, renderHeadTags } = await import('./src/seo.js');

for (const route of Object.keys(SEO)) {
  const appHtml = render(route);
  const headTags = renderHeadTags(route);

  const html = template
    .replace('<!--app-head-->', headTags)
    .replace('<!--app-html-->', appHtml);

  // '/' -> dist/index.html ; '/maky' -> dist/maky/index.html
  const outDir = route === '/' ? dist : path.join(dist, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`prerendered ${route} -> ${path.relative(__dirname, path.join(outDir, 'index.html'))}`);
}
