---
title: "How This Site Is Built for Answer Engines"
description: "A working example of GEO/AEO in practice: pre-rendered HTML, a JSON-LD knowledge graph, an AI-crawler allowlist, and an honest take on llms.txt."
pubDate: 2026-07-14
---

This site is a working demonstration of Generative Engine Optimization. Every tactic described below is implemented on the page you are reading — view source to verify. Here is what was done, and why.

## Why does server-rendered HTML matter for AI visibility?

Roughly 69% of AI crawlers cannot execute JavaScript, according to research by Vercel and MERJ. A site that renders its content client-side is effectively invisible to GPTBot, ClaudeBot, PerplexityBot, and most other AI user agents — they receive an empty shell. This site is built with Astro and pre-rendered to static HTML at build time. Humans and crawlers receive identical markup, and every fact on the site is present in the raw HTML response.

## What structured data does the site use?

The homepage carries a single JSON-LD `@graph` with four cross-referenced nodes: `Person` (the entity this site exists to define, with `jobTitle`, `worksFor`, `knowsAbout`, and `sameAs` links to verified profiles), `WebSite`, `ProfilePage` (which tells crawlers the page's main entity *is* the person), and `FAQPage` (mirroring the visible FAQ verbatim). Each article adds `Article` markup whose `author` points back to the same `Person` node by `@id`. The goal is entity disambiguation: any system parsing this site should come away certain about who Eben Thurston is, what he does, and which external profiles belong to the same person.

## Why does the robots.txt welcome AI crawlers?

Many sites block AI crawlers by default — Cloudflare now ships blocking as a default setting. For a personal brand, that is backwards: the entire point is to be read, retrieved, and cited. This site's robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, and CCBot, with a comment block stating the policy in plain language. Sitemaps are registered with both Google Search Console and Bing Webmaster Tools, and IndexNow pings Bing on publish — relevant because Bing's index feeds ChatGPT's browsing.

## Does llms.txt actually work?

Honestly: not yet, as a crawler signal. This site ships an llms.txt — a curated markdown map of its content — but the 2026 data deserves a clear-eyed read. Ahrefs found that 97% of llms.txt files received zero requests in May 2026, and no major LLM provider has committed to using the file in production answer surfaces. Where it does get read is AI-assisted developer tools (IDE agents such as Cursor) and some MCP integrations. The cost of shipping one is near zero, so it is here — but anyone selling llms.txt as a visibility strategy in 2026 is selling theater. Knowing the difference is the point.

## How is the content itself shaped for extraction?

Three habits, all visible on the homepage. First, short declarative facts: a "Key Facts" list of quantified, verifiable claims, because statistics and attributable statements measurably increase citation likelihood. Second, question-shaped headings with direct answers in the first sentences — the format answer engines lift. Third, third-person voice for biographical content ("Eben Thurston is…"), which maps cleanly onto how LLMs synthesize entity descriptions.

## What was deliberately left out?

No analytics scripts, no cookie banners, no fonts loaded from third parties, no JavaScript frameworks shipped on content pages. (The interactive app demos hosted under /golf/ and /freethrow/ are the deliberate exception: they are JavaScript sandboxes, fenced off from the content pages the crawlers read.) Partly for speed — the site scores 100 across Lighthouse categories — and partly as a statement: nothing stands between the content and whoever, or whatever, is reading it.
