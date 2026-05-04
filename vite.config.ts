import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/',
  // Port dédié : évite d’afficher un autre projet si un Vite tiers occupe encore 5173.
  server: {
    port: 5180,
    host: true,
    open: true,
    strictPort: true
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/i.test(name ?? '')) {
            return 'assets/images/[name][extname]'
          }
          return 'assets/[name][hash][extname]'
        }
      }
    }
  },
  publicDir: 'public'
})