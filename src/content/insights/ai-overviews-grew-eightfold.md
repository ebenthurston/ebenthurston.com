---
title: "AI Overviews Grew Eightfold. Organic Clicks Held Flat."
description: "A year of Q4-over-Q4 data from TIAA and Nuveen: what AI Overviews did to impressions, clicks and click-through rate, and which pages survived."
pubDate: 2026-08-06
---

Most writing about AI search argues from anecdote or from a handful of tracked prompts. This is a year of aggregate search data from two large financial services brands, TIAA and Nuveen, comparing Q4 2025 with the same quarter a year earlier. I ran integrated search across both properties during that period.

The short version: AI Overview appearances grew almost eightfold, click-through rate fell by roughly a third, and organic clicks finished flat. Those three facts are usually presented as a single story about AI destroying organic traffic. The data says something more specific, and more useful.

## What happened to the headline numbers?

Across both brands, comparing Q4 2025 with Q4 2024:

- Organic impressions rose 43%, to 96.4M
- Organic clicks fell 3%, to 2.4M
- Organic click-through rate fell 32%, to 2.54%
- AI Overview appearances rose from 2.6K to 20.5K
- Traffic referred from AI platforms rose 479%, to 8,833 sessions

Read together, the first three lines describe the mechanism everyone expects. Google surfaced these pages far more often, and a smaller share of those impressions turned into visits. The 43% impression growth is what kept clicks from falling off a cliff. Visibility absorbed the CTR decline almost exactly.

That is the part worth sitting with. A 32% CTR decline sounds catastrophic in isolation. Ending the year with clicks down 3% is a different outcome entirely, and the difference between those two numbers is impressions.

## Did AI Overviews take the clicks?

Not uniformly, and that is the finding.

Broken out by section, the same quarter looks like several different years happening at once:

- Wealth Management: impressions up 259%, clicks up 122% to 46.3K
- IRA: impressions up 322%, clicks up 196% to 20.0K
- TMRW: impressions up 51%, clicks up 15%
- Annuities: impressions up 220%, clicks down 18%
- Plan Sponsors: impressions up 31%, clicks down 41%

Every section gained visibility. Only some converted it. Annuities is the clearest case of the pessimistic story: impressions more than tripled while clicks fell, which is what happens when a generated answer satisfies the query on the results page. Plan Sponsors did worst on both counts.

Wealth Management and IRA went the other way, and by a wide margin. Whatever changed, it did not change evenly, so "AI Overviews reduce clicks" is not a law. It is an outcome that depends on what the page is for.

## Which content earned AI Overview appearances?

Wealth Management is the sharpest example. Its AI Overview appearances went from 200 to 3,822 over the year. Roughly 92% of those appearances came from editorial content rather than product pages, and roughly 95% came from non-brand keywords.

That combination explains the click growth. Editorial content answering non-brand questions is exactly the material a generative answer wants to cite, and citation on a question the reader is still exploring leaves a reason to click through. Product and brand pages compete differently: someone searching a brand term already knows where they are going, and someone reading a definition may not need the source.

The pattern across sections lines up with that reading. The sections that grew clicks are the ones with editorial depth on non-brand terms. The sections that lost clicks are the ones weighted toward brand and transactional queries.

## What does a citation actually require?

One query answers this better than the aggregate data can.

TIAA occupies three positions on the results page for "lifetime income," a competitive non-branded term, using two different pages. That configuration has held for more than a year, including the months since I left the company, so it is not a snapshot of a good week. Anyone can run the search and see it.

The page at tiaa.org/public/learn/lifetime-income ranks first organically and also appears in the AI Overview source panel on the right. A second page, "What is lifetime income," is cited inline against the Annuities bullet inside the answer itself.

<figure>
  <img src="/lifetime-income-serp.webp" alt="Google search results for the query lifetime income. TIAA appears three times: cited inline against the Annuities bullet inside the AI Overview, listed in the AI Overview source panel beneath the U.S. Department of Labor, and ranked first in the organic results below." width="1200" height="1035" loading="lazy" decoding="async" />
  <figcaption>Google results for "lifetime income", August 2026.</figcaption>
</figure>

Precision matters on what this is not. The Department of Labor sits above TIAA in the source panel, and the lead definitional sentence attributes to BlackRock and four others. TIAA is cited, not leading. But it is cited twice, in two different mechanisms, on a query where it also holds the top blue link.

In 2023 I published research measuring the overlap between the top three citations in Google's Search Generative Experience and the top three organic results for the same queries. The overlap was high. The conclusion then was that generative answers were drawing from pages that already ranked, which meant classic ranking work was not obsolete but load-bearing. Three years later, on a page I worked on, that is what the mechanism looks like in production.

## What changes about measurement?

Three things, in order of how quickly they matter.

Impressions stop being a vanity metric. When CTR is falling structurally, impression growth is the only thing standing between you and a click decline. Reporting that leads with clicks will show a flat year and miss that the flat year was earned.

CTR needs a denominator and a comparison. A 32% decline against your own prior year means something different from a 32% decline that tracks the category. Ours tracked the category. Without that context the number reads as a failure rather than a condition.

AI-referred traffic needs its own measurement, and standard tooling was not providing it. We built the tracking to see sessions by platform. Of 8,833 sessions, 7,288 came from ChatGPT, 793 from Perplexity, 440 from Gemini, 326 from Copilot, and 12 from Claude. The concentration matters more than the total: at this stage, optimizing for AI referral traffic largely means optimizing for one platform.

## What I would tell someone starting this

Grow impressions, because that is the buffer. Invest in editorial content on non-brand questions, because that is what gets cited. Keep ranking, because citation follows ranking rather than replacing it. And measure AI referral separately from organic, because it behaves differently and nobody's default reporting will do it for you.

None of that is a departure from search fundamentals. It is a reweighting of them.
