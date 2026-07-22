# ebenthurston.com

Personal site of [Eben Thurston](https://ebenthurston.com) — a working
demonstration of Generative Engine Optimization (GEO) and Answer Engine
Optimization (AEO). Every page serves identical pre-rendered HTML to humans
and AI crawlers; the site itself is the portfolio piece.

**Live site:** https://ebenthurston.com
**How it's built (and why):** https://ebenthurston.com/insights/built-for-answer-engines/

## AEO features

- Pre-rendered static HTML — no client-side rendering on content pages
  (69% of AI crawlers cannot execute JavaScript)
- JSON-LD knowledge graph: `Person`, `WebSite`, `ProfilePage`, and `FAQPage`
  nodes cross-referenced by `@id`; `Article` + `author` on every insight
- `robots.txt` as an explicit AI-crawler allowlist, with the policy documented
  in comments
- `llms.txt` — curated markdown map of the site (shipped with an honest view
  of its 2026 adoption data)
- IndexNow pings on publish; sitemap + RSS for everything
- Zero analytics, zero cookies, zero third-party requests on content pages

## Stack

- [Astro](https://astro.build) 5, static output
- `@astrojs/sitemap`, `@astrojs/rss`
- Hosted on Vercel, auto-deployed from `main`

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Adding an article

Create `src/content/insights/your-slug.md`:

```markdown
---
title: "Your Title"
description: "One-sentence summary used in meta description, RSS, and llms.txt."
pubDate: 2026-08-01
---

Body in markdown. Question-shaped ## headings with a direct answer in the
first sentence or two of each section.
```

Add the URL to `public/llms.txt`, push — schema, sitemap, RSS, and the
homepage/insights listings update automatically.

## App demos

`/golf/` (BallFlight) and `/freethrow/` (FreeThrow) are single-file,
AI-assisted app builds served from `public/`. They are the deliberate
JavaScript exception to the pre-rendered rule, fenced off from the content
pages crawlers read.
