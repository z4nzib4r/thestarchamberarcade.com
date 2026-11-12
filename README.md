# The Star Chamber Arcade

Website for The Star Chamber, Athens, Ohio's only arcade. Built with [Astro](https://astro.build) as a static site and deployed to Cloudflare (Workers static assets).

## Develop

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Edit content

Hours, address, contact info, and the game and pinball lists are all in `src/data/site.ts`. The "Open now" badge and today's hours highlight are calculated in the browser using Eastern time from that same data.

## Client preview (GitHub Pages)

Every push to `main` deploys a preview to https://z4nzib4r.github.io/thestarchamberarcade.com/ through `.github/workflows/pages.yml`. That build sets:

- `SITE_URL` and `BASE_PATH` so the site works from the `/thestarchamberarcade.com/` subfolder
- `PUBLIC_NOINDEX=true`, which adds a `noindex` robots tag so search engines don't index the preview

Builds without these variables (local dev, Cloudflare) use the real domain at `/` with no noindex tag. When you move to Cloudflare, delete the workflow file (or turn off Pages in the repo settings).

## Deploy to Cloudflare

```sh
npx wrangler login
npm run deploy    # astro build && wrangler deploy
```

`wrangler.jsonc` serves `dist/` as static assets, and `404.html` handles missing pages. To use the custom domain, add `www.thestarchamberarcade.com` under the Worker's **Settings → Domains & Routes** in the Cloudflare dashboard.

You can also use **Cloudflare Pages with Git**: build command `npm run build`, output directory `dist`.
