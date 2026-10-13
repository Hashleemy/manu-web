// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { resolveSiteUrl } from './src/data/site.js';

export default defineConfig({
  // Canonical URL for sitemap, OG tags and JSON-LD.
  // Set `domain` in src/data/site.js once the custom domain is decided;
  // until then Netlify's own URL is used automatically.
  site: resolveSiteUrl(),
  integrations: [sitemap()],
});
