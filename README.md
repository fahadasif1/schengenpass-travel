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

The site is served at `https://schengenpass.co/` via GitHub Pages (custom domain set by `public/CNAME`; DNS at GoDaddy).

## Edit the site

- Content and contact details: `lib/data.ts`
- Pages: `app/`
- Components: `components/`
- Styles: `app/globals.css`

The site uses external Unsplash images, so images require an internet connection. The privacy and terms pages contain draft legal details that need review before public promotion.
