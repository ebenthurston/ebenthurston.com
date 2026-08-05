---
title: "GEO on a Local Business Site"
description: "Most GEO advice assumes a publishing operation. Purely Mat Pilates has one instructor and six classes a week. Here is what applies, and what does not."
pubDate: 2026-08-05
---

Purely Mat Pilates is a one-instructor mat Pilates studio in Tuckahoe, New York. It relaunched this week, rebuilt on Astro and pre-rendered to static HTML, with a JSON-LD knowledge graph, an AI-crawler allowlist and an llms.txt. Every claim below is verifiable on [purelymatpilates.com](https://purelymatpilates.com).

Most writing about Generative Engine Optimization assumes a content operation: publish frequently, build topical authority, accumulate citations. That advice does not survive contact with a business that teaches six classes a week and has fourteen pages. What follows is what actually applied.

## What does GEO look like when there is no content operation?

Mostly subtraction. The old homepage listed nine nearby towns in a single paragraph, which is the standard local-SEO instinct. Six months of Search Console data showed six of those towns generating around 124 impressions between them, four of them in single digits. Three towns produced real volume, so three towns got real pages, each with the actual Metro-North walk, the parking, and what to expect.

Fewer pages that each answer a question completely beat nine town names in a sentence. For answer engines that difference is sharper than it is for search, because a paragraph listing towns contains no extractable answer to any question a person would ask.

## How do you model a business that operates inside another business?

Jennifer Pagoto teaches inside Prana Yoga, subletting the room. Prana Yoga has its own legitimate Google listing at 62 Main Street. Two businesses, one address, both telling the truth.

The tempting move is to assert the address as your own and hope Google sorts it out. The schema graph instead declares the arrangement: an `ExerciseGym` node whose `containedInPlace` points to a `LocalBusiness` node for the host studio. A subordinate claim that is coherent beats a sole-occupancy claim that conflicts with a listing Google already trusts.

The same reasoning shaped the hours. `openingHoursSpecification` lists only the six class times she is actually present, not notional business hours. At a shared address, where Google suspends listings aggressively, agreement between the schema and the Business Profile is worth more than looking open.

## What makes a credential machine-readable?

Jennifer is a licensed occupational therapist as well as a certified Pilates instructor, a pairing almost no competing studio in Westchester can offer. Stating that in prose is a marketing claim. Stating it in `hasCredential` on a `Person` node, with the certifying body named and linked to lindafit.com, makes it something a machine can follow to a second source.

The distinction matters because entity confidence determines whether a system names a business or hedges. Credentials that resolve to a third party are corroboration. Credentials asserted in body copy are adjectives.

## How do you keep a small site from degrading?

Nobody is going to audit a fourteen-page site every quarter. The failures that matter are invisible ones: two pages drifting onto the same meta description, a title growing past what Google displays, a schema reference pointing at a node that was renamed. Nothing errors. The pages look correct.

So it is enforced mechanically. A script runs after every build and fails the deploy if two pages share a title or description, if a title exceeds 60 characters or a description 158, if any page lacks JSON-LD, if that JSON-LD does not parse, or if any `@id` reference points at a node that does not exist.

It fired during the rebuild, on a 168-character description I had just written. The deploy stopped and the previous version stayed live until the sentence was shorter. On a site nobody has time to audit, that is the difference between a standard and an intention.
