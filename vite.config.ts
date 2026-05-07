import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
//
// `base` must match the GitHub Pages project path so that asset URLs in the
// built index.html (and dynamic imports) resolve correctly when the site is
// served from https://<user>.github.io/kalpataru-website/.
export default defineConfig({
  base: '/kalpataru-website/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
