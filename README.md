# SchengenPass Travel

A static travel website built with Next.js. The destination search, saved places and trip planner run in the browser. The enquiry form opens a prepared draft in the visitor's email app; the visitor must send it there.

## Develop

Requires Node.js 20 or newer.

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The static site is exported to `out/`. GitHub Actions publishes that folder to GitHub Pages on every push to `main`.

## Site URL

The current site URL is `https://fahadasif1.github.io/schengenpass-travel/`. When a custom domain is available, remove `basePath` from `next.config.ts`, update `NEXT_PUBLIC_SITE_URL` in `.github/workflows/pages.yml`, set the custom domain in GitHub Pages, and point the domain's DNS to GitHub Pages.

## Edit the site

- Content and contact details: `lib/data.ts`
- Pages: `app/`
- Components: `components/`
- Styles: `app/globals.css`

The site uses external Unsplash images, so images require an internet connection. The privacy and terms pages contain draft legal details that need review before public promotion.
