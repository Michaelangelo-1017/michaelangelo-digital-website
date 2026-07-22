# Michaelangelo Digital — Website

## Project Overview

This repository contains the marketing website for **Michaelangelo Digital**, the automation-and-web studio founded by Michaelangelo Agbodike in Luton, England. It speaks directly to **UK small business owners** — especially cleaning operators — who want **operations systems**, **compliance tooling**, and **fast, credible websites** without drowning in admin.

Live domain: **[michaelangelo-digital.co.uk](https://www.michaelangelo-digital.co.uk)**.

What each route delivers:

| Page | Purpose |
| --- | --- |
| **[Home](app/page.tsx)** (`/`) | Full marketing narrative — hero, offer cards, origin story, social proof, milestones teaser, testimonial placeholders, final booking call-to-action. |
| **[About](app/about/page.tsx)** (`/about`) | Founder profile, expanded origin story, full milestones SVG timeline (completed + coming soon). |
| **[Services](app/services/page.tsx)** (`/services`) | Operations Systems Assessment Call, CarePath360, and website design pricing. |
| **[Case Studies](app/case-studies/page.tsx)** (`/case-studies`) | Index of live client stories linking through to editorial detail pages. |
| **[Komiklean](app/case-studies/komiklean/page.tsx)** (`/case-studies/komiklean`) | Enquiry automation install — problem solved + placeholders awaiting permission. |
| **[AMPSAC](app/case-studies/ampsac/page.tsx)** (`/case-studies/ampsac`) | Website rebuild — detailed outcome paragraph plus onboarding placeholder. |
| **[Contact](app/contact/page.tsx)** (`/contact`) | n8n-backed contact form + phone/email/WhatsApp + Calendly embed. |
| **[Book](app/book/page.tsx)** (`/book`) | Full-height Calendly booking focused entirely on scheduling a free call. |
| **[Content](app/content/page.tsx)** (`/content`) | Latest YouTube uploads grid (`@MichaelangeloBuilds`) and LinkedIn call-to-action section.

Shared chrome (**Navbar**, **Footer**, session-aware loading splash, cross-route fades) wraps every page from [`app/layout.tsx`](app/layout.tsx).

---

## Tech Stack

| Technology | Version (pinned where relevant) | Role |
| --- | --- | --- |
| **Next.js** | 14.2 (App Router) | Routing, layouts, metadata API, incremental caching on fetch calls. |
| **React** | 18.x | UI layer; `"use client"` islands wrap animations & interactive widgets. |
| **TypeScript** | 5.x | Strict typing everywhere (`strict` mode is enabled). |
| **Tailwind CSS** | 3.4.x | Utility-first styling, bespoke palette extensions in [`tailwind.config.ts`](tailwind.config.ts). |
| **Framer Motion** | 12.38.x | Scroll-triggered animations (`whileInView`), springs, page transitions, SVG stroke draws. |
| **shadcn/ui-style primitives** | n/a (hand-built) | Accessible UI atoms (`Button`, `Input`, `Textarea`, `Label`) built from Radix + `class-variance-authority`, mirroring shadcn conventions. |
| **next/font** | built-in | Fraunces + Inter loaded from Google Fonts via [`app/layout.tsx`](app/layout.tsx). |
| **YouTube Data API v3** | HTTP REST | [`lib/youtube.ts`](lib/youtube.ts) resolves `@MichaelangeloBuilds`, pulls six newest uploads (ISR cache ~6h). |
| **n8n** | webhook | [`/api/contact`](app/api/contact/route.ts) validates and forwards contact payloads server-side. |
| **Calendly** | hosted scheduler | Inline iframe embed via [`CalendlyEmbed`](components/contact/CalendlyEmbed.tsx). |
| **Vercel** | platform | Recommended hosting & CI/CD for Next.js (Edge-friendly builds). |

Other notable libraries: `@radix-ui/react-slot`, `@radix-ui/react-label`, `@radix-ui/react-dialog` (mobile drawer), `lucide-react` icons, `clsx` + `tailwind-merge`, `tailwindcss-animate`.

---

## Project Structure

Annotated tree (everything currently committed — create `public/` locally when you add static assets such as `favicon.ico` or Open Graph artwork):

```
.
├── .env.local.example          # Template for environment variables (clone → `.env.local`).
├── .eslintrc.json              # ESLint Next.js preset.
├── .gitignore                  # Ignores `.next`, `.env.local`, etc.
├── DEPLOY.md                   # Step-by-step production deployment guide (read after README).
├── README.md                   # You are here — developer handbook for this codebase.
├── next-env.d.ts               # Auto-generated Next.js TypeScript pointers.
├── next.config.mjs             # Next.js config — remote image patterns for YouTube thumbnails.
├── package.json / package-lock.json
├── postcss.config.mjs          # PostCSS pipeline for Tailwind.
├── tailwind.config.ts          # Brand palette + animation keyframes + container widths.
├── tsconfig.json               # Path alias `@/*` → repo root.
├── app/
│   ├── globals.css             # Tailwind layers + hero gradient utilities + nav underline helpers.
│   ├── layout.tsx              # Root HTML shell, fonts, metadata defaults, Navbar/Footer/PageTransition/LoadingScreen.
│   ├── page.tsx                # `/` — composes all Home sections.
│   ├── about/page.tsx          # `/about`
│   ├── services/page.tsx       # `/services`
│   ├── contact/page.tsx        # `/contact`
│   ├── book/page.tsx           # `/book`
│   ├── content/page.tsx        # `/content` — async server component pulling YouTube feed.
│   ├── case-studies/
│   │   ├── page.tsx            # `/case-studies`
│   │   ├── komiklean/page.tsx  # `/case-studies/komiklean`
│   │   └── ampsac/page.tsx     # `/case-studies/ampsac`
│   └── api/youtube/route.ts    # Optional debugging endpoint `{ videos }` (dynamic route).
├── components/
│   ├── Logo.tsx                # Text-based Fraunces wordmark with swappable variants.
│   ├── layout/                 # Navbar, Footer, LoadingScreen, MobileMenu, PageTransition.
│   ├── shared/                 # Cross-route helpers (containers, motion primitives, CTAs).
│   ├── ui/                     # shadcn-style form controls (button/input/textarea/label).
│   ├── home/                   # Marketing sections exclusive to `/`.
│   ├── about/                  # Founder story + milestones SVG artwork.
│   ├── services/               # Pricing tables + feature grids.
│   ├── case-studies/           # Listing grid + editorial detail layout.
│   ├── contact/                # Hero, contact form, Calendly embed, contact rails.
│   ├── content/                # Hero, YouTube grid + LinkedIn promo section.
│   └── book/                   # Dedicated booking hero stack.
├── data/
│   ├── navigation.ts           # Primary nav + footer column definitions + contact constants.
│   ├── milestones.ts           # Completed timeline rows + future dashed milestones.
│   ├── testimonials.ts         # Placeholder quotes until real clients approve copy.
│   ├── founder.ts              # Label/value rows rendered on About.
│   ├── services.ts             # Assessment steps + CarePath360 copy + website pricing.
│   └── caseStudies.ts          # Komiklean + AMPSAC editorial sections.
├── lib/
│   ├── animations.ts           # Central Framer Motion variants + viewport presets.
│   ├── utils.ts                # `cn()` Tailwind helper.
│   └── youtube.ts              # Server-only YouTube helper (`fetchLatestVideos`).
└── public/                     # *(create when needed)* — favicons, OG images, downloadable PDFs, etc.
```

---

## Pages

### Home — [`app/page.tsx`](app/page.tsx)

- **Route:** `/`
- **Summary:** Primary storytelling surface — cinematic hero, dual offering cards, editorial origin narrative, trust strip, scrolling milestone teaser, testimonial placeholders, navy closing CTA.
- **Components:** [`Hero`](components/home/Hero.tsx), [`WhatWeDo`](components/home/WhatWeDo.tsx), [`OriginStory`](components/home/OriginStory.tsx), [`SocialProofStrip`](components/home/SocialProofStrip.tsx), [`MilestonesTeaser`](components/home/MilestonesTeaser.tsx), [`Testimonials`](components/home/Testimonials.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** Reads milestone seeds via [`data/milestones.ts`](data/milestones.ts) and testimonials via [`data/testimonials.ts`](data/testimonials.ts). No remote APIs.

### About — [`app/about/page.tsx`](app/about/page.tsx)

- **Route:** `/about`
- **Summary:** Founder dossier, expanded origin story + social links, winding SVG timeline animating completed milestones vs dashed “Coming Soon” markers.
- **Components:** [`AboutHero`](components/about/AboutHero.tsx), [`FounderProfile`](components/about/FounderProfile.tsx), [`FullOriginStory`](components/about/FullOriginStory.tsx), [`MilestonesTimeline`](components/about/MilestonesTimeline.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** [`data/founder.ts`](data/founder.ts), [`data/milestones.ts`](data/milestones.ts). SVG math is internal — no external fetch.

### Services — [`app/services/page.tsx`](app/services/page.tsx)

- **Route:** `/services`
- **Summary:** Operations Systems Assessment Call (apply → call → report walkthrough), CarePath360 compliance platform, and website offering with from-pricing sidebar.
- **Components:** [`ServicesHero`](components/services/ServicesHero.tsx), [`OperationsSystemsAssessment`](components/services/OperationsSystemsAssessment.tsx), [`CarePath360`](components/services/CarePath360.tsx), [`WebsiteBuildSection`](components/services/WebsiteBuildSection.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** [`data/services.ts`](data/services.ts). No remote APIs.

### Case Studies index — [`app/case-studies/page.tsx`](app/case-studies/page.tsx)

- **Route:** `/case-studies`
- **Summary:** Two-card grid linking to long-form stories with hover elevation + stagger motion.
- **Components:** [`CaseStudiesHero`](components/case-studies/CaseStudiesHero.tsx), [`CaseStudiesGrid`](components/case-studies/CaseStudiesGrid.tsx), [`CaseStudyCard`](components/case-studies/CaseStudyCard.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** [`data/caseStudies.ts`](data/caseStudies.ts).

### Komiklean detail — [`app/case-studies/komiklean/page.tsx`](app/case-studies/komiklean/page.tsx)

- **Route:** `/case-studies/komiklean`
- **Summary:** Chaptered editorial layout covering Problem / Onboarding placeholder / Result placeholder with approval pills when copy still pending.
- **Components:** [`CaseStudyDetail`](components/case-studies/CaseStudyDetail.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** [`getCaseStudyBySlug("komiklean")`](data/caseStudies.ts).

### AMPSAC detail — [`app/case-studies/ampsac/page.tsx`](app/case-studies/ampsac/page.tsx)

- **Route:** `/case-studies/ampsac`
- **Summary:** Same editorial shell with hosting outage narrative + rebuilt Next.js/Vercel outcome copy.
- **Components:** [`CaseStudyDetail`](components/case-studies/CaseStudyDetail.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** [`getCaseStudyBySlug("ampsac")`](data/caseStudies.ts).

### Contact — [`app/contact/page.tsx`](app/contact/page.tsx)

- **Route:** `/contact`
- **Summary:** Split grid — server-proxied lead capture vs stacked contact channels + inline Calendly card.
- **Components:** [`ContactHero`](components/contact/ContactHero.tsx), [`ContactForm`](components/contact/ContactForm.tsx), [`ContactDetailsPanel`](components/contact/ContactDetails.tsx) (includes [`CalendlyEmbed`](components/contact/CalendlyEmbed.tsx)), [`Container`](components/shared/Container.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** Client posts to [`/api/contact`](app/api/contact/route.ts), which forwards to n8n via `N8N_CONTACT_WEBHOOK_URL`. Calendly iframe uses `CONTACT_DETAILS.calendly`.

### Book — [`app/book/page.tsx`](app/book/page.tsx)

- **Route:** `/book`
- **Summary:** Session-start friendly hero text above **full-height** Calendly iframe tuned for conversion.
- **Components:** [`BookPageContent`](components/book/BookPageContent.tsx) → [`CalendlyEmbed`](components/contact/CalendlyEmbed.tsx) (`variant="full"`).
- **Data / APIs:** Pure embed — no server fetch.

### Content — [`app/content/page.tsx`](app/content/page.tsx)

- **Route:** `/content`
- **Summary:** Public-build narrative hero, conditional YouTube masonry grid, LinkedIn promo panel, closing CTA band.
- **Components:** [`ContentHero`](components/content/ContentHero.tsx), [`YouTubeFeed`](components/content/YouTubeFeed.tsx), [`VideoCard`](components/content/VideoCard.tsx), [`LinkedInSection`](components/content/LinkedInSection.tsx), [`FinalCTA`](components/home/FinalCTA.tsx).
- **Data / APIs:** Async server invocation of [`fetchLatestVideos(6)`](lib/youtube.ts) guarded by `process.env.YOUTUBE_API_KEY`. Optional [`GET /api/youtube`](app/api/youtube/route.ts) mirrors the same helper for debugging.

---

## Components

Paths below are root-relative markdown links so you can jump straight into the source.

### Layout

| File | Renders | Props | Notes |
| --- | --- | --- | --- |
| [`components/layout/Navbar.tsx`](components/layout/Navbar.tsx) | Fixed top navigation + desktop links + amber booking chip + mobile trigger | none | Tracks scroll to swap transparent ↔ cream treatment; highlights Book CTA with spring hover (`scale 1.03`). |
| [`components/layout/MobileMenu.tsx`](components/layout/MobileMenu.tsx) | Full-screen drawer with mirrored links | `{ open, onClose }` | Locks body scroll while open; staggers list motion. |
| [`components/layout/Footer.tsx`](components/layout/Footer.tsx) | Four-column link grid + legal strip | none | Consumes [`data/navigation.ts`](data/navigation.ts). |
| [`components/layout/LoadingScreen.tsx`](components/layout/LoadingScreen.tsx) | `"MD"` splash | none | Uses `sessionStorage` key `md-session-loaded`; holds 800 ms then fades ~500 ms. |
| [`components/layout/PageTransition.tsx`](components/layout/PageTransition.tsx) | Opacity cross-fade wrapper keyed by pathname | `{ children }` | `AnimatePresence mode="wait"` with variants from [`pageTransition`](lib/animations.ts). |

### Home-only sections

[`Hero`](components/home/Hero.tsx), [`WhatWeDo`](components/home/WhatWeDo.tsx), [`OriginStory`](components/home/OriginStory.tsx), [`SocialProofStrip`](components/home/SocialProofStrip.tsx), [`MilestonesTeaser`](components/home/MilestonesTeaser.tsx), [`Testimonials`](components/home/Testimonials.tsx), [`FinalCTA`](components/home/FinalCTA.tsx) — each is a client component combining Framer Motion + layout primitives; **no props** except internal constants.

### About-only sections

[`AboutHero`](components/about/AboutHero.tsx), [`FounderProfile`](components/about/FounderProfile.tsx), [`FullOriginStory`](components/about/FullOriginStory.tsx), [`MilestonesTimeline`](components/about/MilestonesTimeline.tsx) — heavy motion + SVG path drawing; responsive breakpoint at `768px` switches S-curve vs simplified curve.

### Services-only sections

[`ServicesHero`](components/services/ServicesHero.tsx), [`OperationsSystemsAssessment`](components/services/OperationsSystemsAssessment.tsx), [`CarePath360`](components/services/CarePath360.tsx), [`WebsiteBuildSection`](components/services/WebsiteBuildSection.tsx).

### Case Studies

[`CaseStudiesHero`](components/case-studies/CaseStudiesHero.tsx), [`CaseStudiesGrid`](components/case-studies/CaseStudiesGrid.tsx), [`CaseStudyCard`](components/case-studies/CaseStudyCard.tsx) (`{ study }`), [`CaseStudyDetail`](components/case-studies/CaseStudyDetail.tsx) (`{ study }`).

### Contact & Book

[`ContactHero`](components/contact/ContactHero.tsx), [`ContactForm`](components/contact/ContactForm.tsx), [`ContactDetailsPanel`](components/contact/ContactDetails.tsx), [`CalendlyEmbed`](components/contact/CalendlyEmbed.tsx) (`className?`, `title?`, `variant?: "default" | "full"`), [`BookPageContent`](components/book/BookPageContent.tsx).

### Content route

[`ContentHero`](components/content/ContentHero.tsx), [`YouTubeFeed`](components/content/YouTubeFeed.tsx) (`{ videos }`), [`VideoCard`](components/content/VideoCard.tsx) (`{ video }`), [`LinkedInSection`](components/content/LinkedInSection.tsx).

### Shared utilities

| File | Purpose |
| --- | --- |
| [`components/shared/Container.tsx`](components/shared/Container.tsx) | Width + gutter presets (`size?: "narrow" \| "default" \| "wide"`). |
| [`components/shared/FadeInView.tsx`](components/shared/FadeInView.tsx) | Generic `whileInView` fade-up (`variants` override allowed). |
| [`components/shared/SectionTitle.tsx`](components/shared/SectionTitle.tsx) | Amber eyebrow + Fraunces heading + optional body copy (`tone` switches dark/light text). |
| [`components/shared/CTAButton.tsx`](components/shared/CTAButton.tsx) | Link-based CTA with spring hover + optional arrow (`href`, `external?`, variants). |
| [`components/shared/WordStaggerHeading.tsx`](components/shared/WordStaggerHeading.tsx) | Splits heading text into staggered spans (`text`, `as`, `animateOnLoad`). |
| [`components/shared/ImageReveal.tsx`](components/shared/ImageReveal.tsx) | Clip-path reveal wrapper for photography placeholders. |
| [`components/shared/AnimatedCounter.tsx`](components/shared/AnimatedCounter.tsx) | Count-up animation helper (**currently unused** — safe to import anywhere you need numeric storytelling). |
| [`components/shared/BrandIcons.tsx`](components/shared/BrandIcons.tsx) | Inline SVG replacements for Lucide’s missing social glyphs. |

### `components/ui/*`

Accessible primitives styled like shadcn — [`button.tsx`](components/ui/button.tsx) (`variant`, `size`, `asChild`), [`input.tsx`](components/ui/input.tsx), [`textarea.tsx`](components/ui/textarea.tsx), [`label.tsx`](components/ui/label.tsx).

---

## Animations

### Variant catalogue — [`lib/animations.ts`](lib/animations.ts)

| Variant / constant | Behaviour |
| --- | --- |
| `SPRING` / `SOFT_SPRING` | Shared spring presets for cards + interactions. |
| `EASE` | Cubic-bezier shared across fades. |
| `fadeUp` | Opacity + translateY entrance for sections (`whileInView`). |
| `fadeIn` | Opacity-only fades. |
| `staggerContainer` | Parent variant orchestrating `staggerChildren` (~0.12s). |
| `wordStaggerContainer` / `wordStaggerChild` | Hero typography choreography with blur dissipation. |
| `cardSpringUp` | Heavier vertical spring used on cards + timeline teaser tiles. |
| `clipReveal` | Vertical wipe used by [`ImageReveal`](components/shared/ImageReveal.tsx). |
| `navbarDrop` | Navbar intro slide (`Navbar`). |
| `pageTransition` | Opacity swap orchestrated by [`PageTransition`](components/layout/PageTransition.tsx). |
| `VIEWPORT_ONCE` | `{ once: true, margin: "-80px" }` standard for scroll triggers. |

### Page transitions

[`components/layout/PageTransition.tsx`](components/layout/PageTransition.tsx) wraps `<main>` inside [`app/layout.tsx`](app/layout.tsx). It keys `AnimatePresence` off `usePathname()` and applies `pageTransition` variants. **Adjust timing** by editing `duration` fields inside `pageTransition` in [`lib/animations.ts`](lib/animations.ts) (`visible` currently 0.45 s, `exit` 0.3 s).

### Loading screen

[`LoadingScreen.tsx`](components/layout/LoadingScreen.tsx) gates first paint per browser session:

- Constants `HOLD_MS = 800`, fade-out transition ~0.5 s.
- **Disable entirely:** comment out `<LoadingScreen />` in [`app/layout.tsx`](app/layout.tsx), or short-circuit the component to `return null`.
- **Change duration:** tweak `HOLD_MS` / exit transition inside the component.

### Scroll-triggered sections

Most sections call `whileInView` with `viewport={VIEWPORT_ONCE}`. **Tighten or loosen triggering** by editing `VIEWPORT_ONCE.margin` (string accepted by Framer Motion — e.g. `"-120px"` fires earlier).

### Buttons & cards

Primary CTAs reuse [`CTAButton`](components/shared/CTAButton.tsx) (`whileHover={{ scale: 1.03 }}` spring 400/25). Marketing cards apply Tailwind `hover:-translate-y-1` for the micro lift specified in the brief.

---

## Content Management

### Milestones & timeline

1. Open [`data/milestones.ts`](data/milestones.ts).
2. **Add a completed milestone:** append to `COMPLETED_MILESTONES` with `date`, `shortDate`, `title`, `description`. Keep chronological order so both the Home teaser strip and About SVG stay truthful.
3. **Promote a future item:** move the object from `FUTURE_MILESTONES` into `COMPLETED_MILESTONES` with real dates; delete it from the future array.
4. **Adjust teaser copy on Home:** only the first four completed milestones render in [`MilestonesTeaser`](components/home/MilestonesTeaser.tsx).

### Testimonials

Edit [`data/testimonials.ts`](data/testimonials.ts):

- Flip `isPlaceholder` to `false` once you have permission.
- Replace `quote`, `name`, `company`, optional `role`.
- Cards automatically drop the amber “Placeholder” chip when `isPlaceholder` is false.

### Case studies

[`data/caseStudies.ts`](data/caseStudies.ts) drives both cards + detail templates via `CASE_STUDIES`. Update `summary`, `problem`, `onboarding`, `result` strings — editorial sections read straight from this file.

### Services content

[`data/services.ts`](data/services.ts):

- Assessment how-it-works steps live in `ASSESSMENT_STEPS`.
- Tally qualifying form URL lives in `TALLY_FORM_URL` (placeholder until the live form is ready).
- CarePath360 copy lives in `CAREPATH360`.
- Website from-pricing sits in `WEBSITE_BUILD.priceFrom`.

### Navigation & footer destinations

[`data/navigation.ts`](data/navigation.ts) owns `NAV_LINKS`, footer columns (`FOOTER_GROUPS`), and shared URLs (`CONTACT_DETAILS`). Edit here instead of hardcoding in layout components.

### YouTube channel handle

Change `CHANNEL_HANDLE` inside [`lib/youtube.ts`](lib/youtube.ts) (defaults to `MichaelangeloBuilds`). The API uses `forHandle` — **do not** prefix with `@` in code.

---

## API Integrations

### YouTube Data API v3

- **Purpose:** Pull six newest public uploads for `/content`.
- **Code:** [`lib/youtube.ts`](lib/youtube.ts) (primary), optional [`app/api/youtube/route.ts`](app/api/youtube/route.ts).
- **Environment variable:** `YOUTUBE_API_KEY` (**server-only — never prefix with `NEXT_PUBLIC_`**).
- **Provisioning:** Google Cloud Console → enable **YouTube Data API v3** → Credentials → API key → restrict by HTTP referrer / IP in production.
- **Fallback:** When the key is missing or Google responds with an error, [`YouTubeFeed`](components/content/YouTubeFeed.tsx) shows **“Videos loading, check back soon”** and hides the grid.

### Contact form (n8n)

- **Purpose:** Relay for [`ContactForm`](components/contact/ContactForm.tsx) via [`/api/contact`](app/api/contact/route.ts).
- **Environment variable:** `N8N_CONTACT_WEBHOOK_URL` (**server-only — never prefix with `NEXT_PUBLIC_`**).
- **Provisioning:** Create/open the n8n webhook workflow and paste the URL into Vercel env vars, then redeploy.
- **Fallback:** Missing webhook returns 503; invalid fields return 400; delivery failures return 502 with inline form error text.

### Calendly

- **Purpose:** Inline scheduling on `/contact` + immersive `/book`.
- **Code:** [`CalendlyEmbed`](components/contact/CalendlyEmbed.tsx) reads `CONTACT_DETAILS.calendly` from [`data/navigation.ts`](data/navigation.ts).
- **Credentials:** None — public embed URL.
- **Fallback:** If Calendly is down, the iframe simply fails to render meaningful UI; mitigations include linking out via footer/nav CTAs.

---

## Environment Variables

| Variable | Required? | Purpose | Where to get it |
| --- | --- | --- | --- |
| `YOUTUBE_API_KEY` | Optional locally; **required for live feed** | Authenticates YouTube Data API requests | Google Cloud → APIs & Services → Credentials |
| `N8N_CONTACT_WEBHOOK_URL` | **Required for contact form** | Server-only n8n webhook for `/api/contact` | Your n8n workflow webhook URL |

Create `.env.local` at the repo root:

```bash
cp .env.local.example .env.local
```

Then populate secrets. **Never commit `.env.local`.**

> ⚠️ Any variable prefixed with `NEXT_PUBLIC_` ships to the browser bundle. **Never store private API keys with that prefix.**

---

## Styling and Theming

### Palette (canonical hex values)

| Token | Hex | Usage |
| --- | --- | --- |
| Cream background | `#FAFAF8` | `bg-cream`, global body canvas |
| Ink | `#111111` | Dark hero sections / footer |
| Navy (primary accent) | `#1B2E5E` | Brand chrome, timeline strokes, buttons |
| Amber (secondary accent) | `#E8A838` | Eyebrow labels, pulses, primary CTAs |
| Body text | `#1A1A1A` | `text-body` |
| White on dark | `#FFFFFF` | Hero headings |
| Muted | `#6B7280` | Supporting copy |
| Border | `#E5E3DF` | Cards + dividers |

CSS variables mirroring these live in [`app/globals.css`](app/globals.css) under `:root`.

### Typography

- **Display / headings:** Fraunces (`--font-fraunces`) applied via `font-display`.
- **Body + UI:** Inter (`--font-inter`) via `font-sans`.
- Navigation + uppercase labels use Inter with `tracking-label`.

Font wiring happens in [`app/layout.tsx`](app/layout.tsx).

### Changing the primary accent globally

Update Tailwind **`extend.colors.navy`** (and related scales) inside [`tailwind.config.ts`](tailwind.config.ts). Because components consume semantic classes (`text-navy`, `bg-navy`, `border-navy`), they pick up the change automatically after restarting dev server / rebuilding.

### Tailwind extensions worth knowing

[`tailwind.config.ts`](tailwind.config.ts) defines:

- Custom animations (`gradient-shift`, `pulse-ring`, `soft-pulse`, `marquee`).
- Container gutters tuned for mobile-first breakpoints.
- Drop shadows `shadow-card` / `shadow-card-lg`.

---

## Logo and Branding

[`components/Logo.tsx`](components/Logo.tsx) renders a **text-based wordmark** (“Michaelangelo · *Digital*”) using Fraunces, swapping colours via `variant="dark" | "light"` (navy on cream, white on ink).

### Swapping in a future raster/vector logo

1. Add `public/logo.svg` (or optimized PNG/WebP at **~320 px wide @1x**, plus **@2x** if raster).
2. Replace the inner `<span>` structure with Next.js `<Image />`:

```tsx
import Image from "next/image";

<Image
  src="/logo.svg"
  alt="Michaelangelo Digital"
  width={220}
  height={48}
  priority
/>;
```

3. Keep the `<Link href="/">` wrapper so navigation semantics stay intact.

SVG preferred for razor-sharp dark/light contexts.

---

## Making Common Changes — Quick Reference

1. **Add a milestone:** Append to `COMPLETED_MILESTONES` in [`data/milestones.ts`](data/milestones.ts) with ISO-ish display strings; optionally prune `FUTURE_MILESTONES`.
2. **Ship a real testimonial:** Edit [`data/testimonials.ts`](data/testimonials.ts), set `isPlaceholder: false`, update quote + attribution fields.
3. **Refresh case study copy:** Modify the relevant object inside [`data/caseStudies.ts`](data/caseStudies.ts); cards + detail pages stay in sync automatically.
4. **Change Calendly URLs:** Update the iframe `src` string inside [`components/contact/CalendlyEmbed.tsx`](components/contact/CalendlyEmbed.tsx) once — Contact + Book both inherit it.
5. **Add a new marketing page:** Create `app/<slug>/page.tsx`, export `metadata`, compose sections, then append `{ label, href }` entries to `NAV_LINKS` / footer groups in [`data/navigation.ts`](data/navigation.ts).
6. **Update phone/email/WA:** Edit [`CONTACT_DETAILS`](data/navigation.ts) — Navbar/footer/contact rails read from this single source.
7. **Point YouTube at another channel:** Change `CHANNEL_HANDLE` in [`lib/youtube.ts`](lib/youtube.ts) (handle **without** `@`).

---

## Known Limitations

- **LinkedIn section is static marketing copy + outbound button** — no live embed or API feed by design.
- **Komiklean onboarding/result + AMPSAC onboarding** still carry placeholder language until clients approve quotes.
- **Contact form needs `N8N_CONTACT_WEBHOOK_URL`** set in Vercel (server-only) or submissions return an error.
- **Home testimonials** render deliberate placeholders until real quotes exist (`data/testimonials.ts`).
- **`AnimatedCounter` ships unused** — harmless helper awaiting future metrics storytelling.
- **Open Graph artwork** — wire `metadata.openGraph.images` in [`app/layout.tsx`](app/layout.tsx) or per-page metadata for richer social previews.

---

### Local development quick start

```bash
npm install
cp .env.local.example .env.local   # add secrets as needed
npm run dev                        # http://localhost:3000
```

Run `npm run build` before deploying — it catches TypeScript, ESLint (via `next lint`), and Next.js compile errors early.

Need deployment instructions next? Continue to **[DEPLOY.md](./DEPLOY.md)**.
