<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->

# Copilot / AI Agent Instructions — ricargoweb

Short, actionable guidance to be immediately productive in this Next.js + TypeScript project.

- **Big picture:** This is a Next.js app (app-router) using TypeScript, Tailwind CSS and Supabase for backend data. The primary UI lives under `src/app/` and reusable UI lives under `src/components/`. There is also a root `app/` (template) — prefer `src/app/` and `src/components/` when changing site pages.

- **Key files to inspect:** `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`, `src/app/page.tsx`, `src/app/track/page.tsx`, `src/components/*`, and `src/lib/supabaseClient.ts`.

- **How the app talks to backend:** `src/lib/supabaseClient.ts` creates a Supabase client using env vars `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. The tracking page queries two tables: `shipments` and `shipment_events`. Example queries are in `src/app/track/page.tsx`.

- **Routing & data flow:** The project uses Next.js app router and path alias `@/*` (see `tsconfig.json`) so imports like `@/components/HeroSection` map to the repo root. Pages under `src/app` are app-router pages; server components are default — client components include a `'use client'` directive at the top (see `src/components/HeroSection.tsx` and `src/app/track/page.tsx`).

- **Conventions you must follow:**
  - Use the `@` alias for intra-repo imports (configured in `tsconfig.json`).
  - Keep UI components in `src/components/` as default-export React components.
  - When using React hooks, declare the file as a client component with `'use client'` on the first line.
  - Query Supabase using the exported `supabase` from `src/lib/supabaseClient.ts`. The tracking page expects rows with fields: `awb_number`, `current_status`, `estimated_arrival`, `receiver_name`, `service_type`, `origin_city`, `destination_city`. Shipment events are stored in `shipment_events` with `shipment_id`, `event_at`, `description`, `location`.

- **Examples to mirror / edit carefully:**
  - Track flow: `src/components/HeroSection.tsx` pushes `router.push('/track?resi=${resi}')` and `src/app/track/page.tsx` reads `useSearchParams()` and calls Supabase. Preserve query param shape `resi` when linking.
  - Type shapes: the `track` page defines local TypeScript interfaces (`Shipment`, `ShipmentEvent`, `TrackingData`) — follow this style for similar data-centric pages.

- **Build / dev / lint commands:**
  - Start dev server: `npm run dev` (localhost:3000)
  - Build: `npm run build` then `npm run start`
  - Lint: `npm run lint`

- **Environment secrets / runtime:**
  - Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for Supabase usage. These are public keys in code and used client-side; if work requires server-only secrets, the repo currently has no server-secret helper file.

- **Styling & assets:** Tailwind v4 is used (`tailwindcss` + `postcss`). Global styles live in `app/globals.css`. Icons come from `lucide-react` and fonts are configured with `next/font` in `app/layout.tsx`.

- **Testing & CI notes:** No test runner is configured in `package.json`. There is no `.github` CI workflow in-tree — add workflows sparingly and document them in this file when created.

- **When making changes:**
  - Prefer minimal diffs: edit `src/` files, update types in-place, and ensure client vs server components are correct (`'use client'`).
  - If adding Supabase queries, reuse `src/lib/supabaseClient.ts` and preserve table/field naming unless migrating the DB.
  - When adding new pages, add them under `src/app` (app-router) and reuse the `Suspense` wrapper pattern for async rendering as used in `src/app/track/page.tsx`.

- **What not to change without confirmation:**
  - Do not remove the `@` path-alias mapping in `tsconfig.json` — many imports rely on it.
  - Do not switch global routing from `src/app` to top-level `app/` without verifying which pages are active; both exist for historical/template reasons.

If anything here is unclear or you want additional examples (e.g., common Supabase query patterns, or adding a server action), tell me which area and I will expand with focused examples.
