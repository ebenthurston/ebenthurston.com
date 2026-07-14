import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Every page on this site is statically pre-rendered at build time.
// AI crawlers and humans receive identical HTML — nothing depends on
// client-side JavaScript.
export default defineConfig({
  site: 'https://ebenthurston.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
