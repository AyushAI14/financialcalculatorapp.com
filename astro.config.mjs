import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://fincompute.vercel.app',
  prefetch: {
    prefetchAll: true,
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
      { codes: ['zh-Hans', 'zh-CN', 'zh-SG', 'zh'], path: 'zh-cn' },
      { codes: ['zh-Hant', 'zh-TW', 'zh-HK'], path: 'zh-tw' },
      'de',
      'ja',
      'fr',
      'ko',
      'it',
      'pt',
      'ar',
      'hi',
      'ru',
      'id'
    ],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'rewrite'
    },
    fallback: {
      es: 'en',
      'zh-cn': 'en',
      'zh-tw': 'en',
      de: 'en',
      ja: 'en',
      fr: 'en',
      ko: 'en',
      it: 'en',
      pt: 'en',
      ar: 'en',
      hi: 'en',
      ru: 'en',
      id: 'en'
    }
  }
});