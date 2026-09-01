import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const appRoutes = ['privacy-policy', 'terms-of-use', 'disclaimer']

const staticRouteCopies = () => ({
  name: 'static-route-copies',
  closeBundle() {
    const distDir = resolve(process.cwd(), 'dist')
    const indexFile = resolve(distDir, 'index.html')

    appRoutes.forEach((route) => {
      const routeDir = resolve(distDir, route)
      mkdirSync(routeDir, { recursive: true })
      copyFileSync(indexFile, resolve(routeDir, 'index.html'))
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticRouteCopies()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    sourcemap: false,
    minify: 'esbuild'
  },
  esbuild: {
    jsx: 'automatic'
  }
})
