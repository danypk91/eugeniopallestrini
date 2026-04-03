// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.eugeniopallestrini.it',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  integrations: [sitemap(), icon()],
});
