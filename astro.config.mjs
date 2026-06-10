import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://munaagency.com',
  integrations: [sitemap()],
  output: 'static'
});
