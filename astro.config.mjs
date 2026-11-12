// @ts-check
import { defineConfig } from 'astro/config';

// Defaults target the production domain (Cloudflare).
// The GitHub Pages preview build overrides these via env vars (see .github/workflows/pages.yml).
const site = process.env.SITE_URL || 'https://www.thestarchamberarcade.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
});
