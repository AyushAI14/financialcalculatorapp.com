import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://financialcalculatorapp.com',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'chart.js/auto': path.resolve(__dirname, './src/lib/chart-setup.ts')
      }
    }
  },

  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'es',
      'de',
      'ja',
      'fr',
      'pt'
    ],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite'
    },
    fallback: {
      es: 'en',
      de: 'en',
      ja: 'en',
      fr: 'en',
      pt: 'en'
    }
  }
});