import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set VITE_BASE (e.g. /squad-preview/) to deploy under a sub-path; defaults
  // to '/' for local dev and root deploys.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
})
