import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://sistemasai.com',
  base: '/',
  trailingSlash: 'ignore',
  
  // Configuración i18n
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  // Configuración de build
  build: {
    assets: 'assets',
    format: 'directory'
  },
  
  // Configuración de Vite
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/i18n': '/src/i18n'
      }
    }
  },
  
  // Configuración del servidor
  server: {
    port: 4321,
    host: true
  }
});
