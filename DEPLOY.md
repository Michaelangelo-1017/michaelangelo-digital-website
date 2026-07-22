# Deploying Michaelangelo Digital to production

This guide walks you from a **fresh clone** to a **live HTTPS site** at **https://www.michaelangelo-digital.co.uk** using **Vercel**. Follow the steps in order — each major phase is numbered.

---

## Prerequisites

Before you begin, make sure **all** of the following are ready:

1. **Vercel account** — Sign up at [https://vercel.com](https://vercel.com).
2. **GitHub repository** containing this Next.js project — it must be connected to Vercel later (you can import directly from GitHub in the Vercel dashboard).
3. **YouTube Data API v3 key** from Google Cloud Console (needed if you want the `/content` feed to show real videos in production).
4. **n8n contact webhook URL** (needed so the `/contact` form can deliver messages — set as server-only `N8N_CONTACT_WEBHOOK_URL` in Vercel).
5. **DNS access** for **michaelangelo-digital.co.uk** at your registrar (Cloudflare, Namecheap, GoDaddy, etc.) — you must be able to edit **A** and **CNAME** records.
6. **Node.js 18 or newer** installed on your computer so you can run `npm install`, `npm run build`, and catch errors locally before pushing.

Optional but recommended:

- Access to the Google Search Console / Analytics accounts if you plan validation tags later (not required for this baseline deployment).

---

## Step 1: Clone and install

1. Open your terminal.
2. Clone the GitHub repository (replace the URL with yours):

   ```bash
   git clone https://github.com/<your-org>/<your-repo>.git
   cd <your-repo>
   ```

3. Install JavaScript dependencies:

   ```bash
   npm install
   ```

4. Duplicate the environment template:

   ```bash
   cp .env.local.example .env.local
   ```

5. Open `.env.local` in your editor and fill in values:

   | Key | What to paste |
   | --- | --- |
   | `YOUTUBE_API_KEY` | Google Cloud API key with **YouTube Data API v3** enabled |
   | `N8N_CONTACT_WEBHOOK_URL` | Your n8n webhook URL for contact form submissions (**server-only** — never prefix with `NEXT_PUBLIC_`) |

6. Save `.env.local`. **Never commit this file** — it stays local / in Vercel’s dashboard only.

---

## Step 2: Test locally before deploying

1. Still inside the project folder, run a production build:

   ```bash
   npm run build
   ```

2. If the command exits with errors:
   - Read the **first red TypeScript or ESLint error** at the bottom of the log — fix that issue, then rerun `npm run build`.
   - Common causes:
     - **Type errors** after editing content types (`data/*.ts`).
     - **Invalid imports** after moving components.
     - **Malformed JSX** inside new sections.

3. When `npm run build` succeeds, optionally smoke-test the production server locally:

   ```bash
   npm run start
   ```

   Visit `http://localhost:3000` and click through every route.

4. Remember: a green local build **reduces** surprises on Vercel but does **not** guarantee success if environment variables differ between machines.

**Typical build failures**

| Symptom | Likely cause |
| --- | --- |
| `Type error` pointing at a component file | Props/types mismatch — align interfaces or cast carefully |
| `Module not found` | Wrong import path — confirm `@/` alias matches [`tsconfig.json`](tsconfig.json) |
| `use client` boundary errors | Server component importing hooks — move logic into a child client component |

---

## Step 3: Connect to Vercel

1. Log into [https://vercel.com](https://vercel.com).
2. Click **Add New… → Project**.
3. Under **Import Git Repository**, pick the GitHub repo that holds this codebase.
4. When prompted for framework settings:
   - **Framework Preset:** Next.js (auto-detected).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** leave default (`.next` — Vercel manages this automatically for Next.js).
5. **Do not** override `npm install` unless you know you need a different package manager.
6. Click **Deploy** and wait for the first preview deployment to finish.

> First deploy might succeed **without** environment variables, but `/content` will show the fallback message until you add `YOUTUBE_API_KEY` in Step 4.

---

## Step 4: Add environment variables in Vercel

1. Open your project on Vercel → **Settings → Environment Variables**.
2. Add **`YOUTUBE_API_KEY`**:
   - **Value:** paste the Google API key.
   - **Environments:** enable **Production**, **Preview**, and **Development** (recommended so previews behave like production).
3. Add **`N8N_CONTACT_WEBHOOK_URL`**:
   - **Value:** paste your n8n webhook URL.
   - **Environments:** enable **Production** (and **Preview** if you want preview deploys to accept form tests).
   - Do **not** name this `NEXT_PUBLIC_…` — it must stay server-only.
4. Click **Save** for each variable.
5. After **any** variable change, trigger a redeploy:
   - Go to **Deployments → … menu → Redeploy** on the latest deployment, **or**
   - Push a fresh commit to GitHub (also triggers CI).

Environment variables are **not retroactive** — old deployments keep their snapshot until rebuilt.

---

## Step 5: Connect the custom domain

1. Inside Vercel, open **Settings → Domains**.
2. Click **Add**, enter **`michaelangelo-digital.co.uk`**, confirm.
3. Add **`www.michaelangelo-digital.co.uk`** as well (repeat **Add**).
4. Vercel shows DNS targets — note:
   - **A record** IPv4 address(es) for the **apex** (`@`).
   - **CNAME** target for **`www`** subdomain (often `cname.vercel-dns.com` — copy exactly what Vercel prints).
5. Log into your domain registrar → DNS management.
6. **For the root / apex domain:**
   - Create or edit an **A record** for `@` pointing to Vercel’s IP(s) exactly as listed.
7. **For www:**
   - Create or edit a **CNAME** record for `www` pointing to Vercel’s hostname exactly as listed (some registrars append `.` — follow their UI guidance).
8. Save DNS records. TTL **300 seconds** (5 minutes) is typical while verifying.
9. Return to Vercel → **Refresh** on the Domains page until status shows **Valid Configuration**.
10. Expect DNS propagation delays — often **under an hour**, occasionally up to **48 hours**.

**SSL**

- Vercel automatically issues certificates via Let’s Encrypt once DNS verifies.
- No manual SSL purchase is required.

---

## Step 6: Post-deployment checks

Verify **each** item after DNS resolves:

1. **Homepage loads** at `https://www.michaelangelo-digital.co.uk/` without console errors (open DevTools → Console).
2. **Calendly** renders inside `/contact` and `/book` — you should see time-slot UI, not a blank iframe.
3. **YouTube grid** on `/content` shows six videos **when `YOUTUBE_API_KEY` is set** in Vercel and redeployed.
4. **Contact form** submits successfully **after** `N8N_CONTACT_WEBHOOK_URL` is set in Vercel and redeployed — confirm your n8n workflow receives the payload.
5. Click **every navigation link** on desktop and repeat on a phone-width viewport (hamburger drawer opens, closes, links route correctly).
6. **Animations** — route transitions + scroll reveals should feel identical to local production (`npm run start`).
7. **HTTPS padlock** appears — no mixed-content warnings.
8. **Open Graph preview** — paste the homepage URL into WhatsApp / LinkedIn share debugger:
   - If previews look bare, add `openGraph.images` metadata pointing at hosted artwork (see Known Limitations in [`README.md`](README.md)).
9. **Favicon** — add `app/icon.tsx`, `app/favicon.ico`, or `public/favicon.ico`, redeploy, hard-refresh browser.

---

## Step 7: Configure the n8n contact webhook

Until `N8N_CONTACT_WEBHOOK_URL` is set, `/api/contact` returns **503** and the form shows an error (it will not fake a success message).

1. In n8n, create/open the workflow that receives contact submissions and copy its **webhook URL**.
2. In Vercel → **Settings → Environment Variables**, set **`N8N_CONTACT_WEBHOOK_URL`** to that URL (server-only — no `NEXT_PUBLIC_` prefix).
3. Redeploy.
4. Submit a **test message** on `/contact` and confirm the workflow runs.

---

## Step 8: Replacing placeholder content

Before publicly promoting the site, walk through this checklist:

1. Swap **all three testimonial placeholders** with approved quotes (`data/testimonials.ts`).
2. Update **Komiklean** onboarding + result paragraphs once the client signs off (`data/caseStudies.ts`).
3. Update **AMPSAC onboarding** paragraph once approved (`data/caseStudies.ts`).
4. Replace **founder image placeholders** on Home + About with a real photograph (update the JSX inside [`OriginStory`](components/home/OriginStory.tsx) and [`FounderProfile`](components/about/FounderProfile.tsx)).
5. Double-check **phone number**, **email**, and **WhatsApp** deep link in [`data/navigation.ts`](data/navigation.ts).

---

## Ongoing deployments

1. With GitHub connected, **every push to `main`** triggers a fresh **Production** deployment automatically.
2. View status under **Vercel → Deployments** — green check = live.
3. **Rollback:** open a previously successful deployment → **Promote to Production** (instant revert).
4. **Preview URLs:** push to any non-`main` branch → Vercel comments with a unique preview link — use this for stakeholder QA before merging.

---

## Troubleshooting

### Build fails with TypeScript errors

1. Read the **first** TS error in the Vercel build log.
2. Reproduce locally:

   ```bash
   npm run build
   ```

3. Fix typings, push again.

### Environment variables “not working”

1. Confirm spelling (`YOUTUBE_API_KEY` case-sensitive).
2. Confirm variable is enabled for **Production** **and** that you **Redeployed** after saving.
3. For local testing, ensure `.env.local` exists — restart `npm run dev` after edits.

### YouTube feed empty in production

1. Verify API key restrictions allow Vercel egress IPs **or** temporarily loosen restrictions to diagnose.
2. Confirm **YouTube Data API v3** is enabled for the GCP project tied to that key.
3. Hit `/api/youtube` on your deployment — `{ "videos": null }` indicates lookup failure.

### Contact form never delivers

1. Confirm `N8N_CONTACT_WEBHOOK_URL` is set in Vercel for **Production** and you **Redeployed** after saving.
2. Check the n8n workflow execution history for failed runs.
3. Open browser **Network** tab — failed POST to `/api/contact` shows `400` / `502` / `503` JSON.

### Domain shows **Invalid Configuration**

Common DNS mistakes:

- Apex **A record** still pointing at old host.
- **CNAME flattening** conflicts at registrar (some require ALIAS/ANAME records instead — follow registrar docs).
- Typo in **`www`** hostname.

Use external DNS checker (WhatsMyDNS, etc.) to confirm global propagation.

### Site works on `*.vercel.app` but not custom domain

1. Domain not verified → revisit Step 5.
2. Browser caching old DNS → flush DNS or test incognito after TTL expiry.

---

You are finished when HTTPS works on both **apex** and **www**, dynamic sections behave with live credentials, and stakeholder-approved copy replaced every placeholder called out in Step 8.

Safe shipping 🚀
