import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs/promises';
import { apps, SITE } from './src/apps.mjs';

/**
 * The app pages under public/ are authored as standalone single-file HTML and
 * copied in verbatim, so they arrive with a bare <head>. This integration adds
 * the metadata they need — canonical, description, social tags, favicons, and
 * SoftwareApplication structured data whose author points at the site's Person
 * node — after the build, so replacing an app file never drops any of it.
 */
function injectAppMetadata() {
  return {
    name: 'inject-app-metadata',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        for (const app of apps) {
          const file = new URL(`${app.slug}/index.html`, dir);
          let html;
          try {
            html = await fs.readFile(file, 'utf-8');
          } catch {
            logger.warn(`no built file for app "${app.slug}" — skipped`);
            continue;
          }

          if (html.includes('data-injected-metadata')) continue;

          const url = `${SITE}/${app.slug}/`;
          const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || app.name;

          const schema = {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: app.name,
            url,
            description: app.description,
            applicationCategory: app.category,
            operatingSystem: 'Any (modern web browser)',
            browserRequirements: 'Requires JavaScript and HTML5 canvas',
            isAccessibleForFree: true,
            inLanguage: 'en-US',
            author: { '@id': `${SITE}/#person` },
            publisher: { '@id': `${SITE}/#person` },
            isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website` },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          };

          const head = [
            '<meta data-injected-metadata content="build-time">',
            `<meta name="description" content="${app.description.replace(/"/g, '&quot;')}">`,
            `<meta name="author" content="Eben Thurston">`,
            `<link rel="canonical" href="${url}">`,
            '<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">',
            '<link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96">',
            '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
            '<meta property="og:type" content="website">',
            `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}">`,
            `<meta property="og:description" content="${app.description.replace(/"/g, '&quot;')}">`,
            `<meta property="og:url" content="${url}">`,
            '<meta property="og:site_name" content="Eben Thurston">',
            `<meta property="og:image" content="${SITE}/eben-thurston.jpg">`,
            '<meta name="twitter:card" content="summary">',
            `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
          ].join('\n');

          await fs.writeFile(file, html.replace('</head>', `${head}\n</head>`), 'utf-8');
          logger.info(`metadata injected: /${app.slug}/`);
        }
      },
    },
  };
}

// Every page on this site is statically pre-rendered at build time.
// AI crawlers and humans receive identical HTML — nothing depends on
// client-side JavaScript.
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      customPages: [
        `${SITE}/sandbox/`,
        ...apps.map((a) => `${SITE}/${a.slug}/`),
      ],
    }),
    injectAppMetadata(),
  ],
  build: {
    format: 'directory',
  },
});
