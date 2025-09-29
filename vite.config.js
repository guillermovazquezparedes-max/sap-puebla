import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, strictPort: true },
  build: { outDir: 'dist' },
  // 👇 importante: usa el nombre exacto del repo como base
  base: '/sap-puebla/',
})
