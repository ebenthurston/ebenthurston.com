# ebenthurston.com

Personal site of Eben Thurston. Static Astro site, pre-rendered HTML,
built for humans and answer engines alike.

## Stack

- [Astro](https://astro.build) 5 — static output, zero client-side JavaScript
- `@astrojs/sitemap` — sitemap-index.xml generated at build
- `@astrojs/rss` — feed at `/rss.xml`
- No analytics, no cookies, no third-party requests

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Deploy (Vercel — recommended)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New Project** → import the repo. Astro is auto-detected
   (build `astro build`, output `dist/`). Deploy.
3. Add the domain `ebenthurston.com` under Project → Settings → Domains,
   then point the domain's DNS at Vercel (A record `76.76.21.21` or the
   nameservers Vercel shows you). Remove the Tumblr DNS records.
4. Note: prefer Vercel/Netlify DNS over Cloudflare — Cloudflare blocks
   AI crawlers by default, which defeats the purpose of this site.

## Post-launch checklist

- [ ] Register the site in Google Search Console and Bing Webmaster Tools;
      submit `https://ebenthurston.com/sitemap-index.xml` to both.
- [ ] Enable IndexNow in Bing Webmaster Tools.
- [ ] Validate structured data: https://validator.schema.org and
      Google's Rich Results Test on `/`.
- [ ] Update LinkedIn website field to point at ebenthurston.com.
- [ ] As new profiles are aligned (X, GitHub, Crunchbase…), add them to the
      Profiles section AND the `sameAs` array in `src/pages/index.astro`.

## Adding an article

Create `src/content/insights/your-slug.md`:

```markdown
---
title: "Your Title"
description: "One-sentence summary used in meta description, RSS, and llms.txt."
pubDate: 2026-08-01
---

Body in markdown. Use question-shaped ## headings with a direct
answer in the first sentence or two of each section.
```

Then add the article URL to `public/llms.txt`, commit, and push —
Vercel rebuilds automatically. Article schema, sitemap, RSS, and the
homepage/insights listings update on their own.

## Side-project apps (golf, basketball, …)

Deploy each app as its **own** Vercel project on a subdomain
(`golf.ebenthurston.com`, `hoops.ebenthurston.com`) — same Vercel
account, separate repos. Keeps this codebase clean while sharing the
domain's brand. Link them from a Projects section on the homepage
when live.
