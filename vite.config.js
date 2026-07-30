import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set VITE_BASE (e.g. /squad-preview/) to deploy under a sub-path; defaults
  // to '/' for local dev and root deploys.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // App principal (home + rotas SPA pré-renderizadas)
        main: resolve(import.meta.dirname, 'index.html'),
        // Landings de anúncio clonadas do squad-website (só para inspeção)
        saibamais: resolve(import.meta.dirname, 'saibamais/index.html'),
        crmWhatsapp: resolve(import.meta.dirname, 'crm-whatsapp/index.html'),
        wazVendas: resolve(import.meta.dirname, 'waz-vendas/index.html'),
        wazVendas2: resolve(import.meta.dirname, 'waz-vendas-2/index.html'),
        wazVendas3: resolve(import.meta.dirname, 'waz-vendas-3/index.html'),
      },
    },
  },
  server: {
    port: Number(process.env.PORT) || 5173,
  },
})
