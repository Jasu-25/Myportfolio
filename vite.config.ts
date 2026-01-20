import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { cloudflareVitePlugin } from '@cloudflare/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cloudflareVitePlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      protocol: 'wss',
    },
  },
})