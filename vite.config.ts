import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /hermes-m3-portfolio/.
export default defineConfig({
  plugins: [react()],
  base: '/hermes-m3-portfolio/',
})
