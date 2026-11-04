<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project rules

Personal portfolio of Carlos Alberto Ríos Naranjo, Frontend Architect. The site
is itself a showcase: every change should read like the work of a senior
frontend engineer.

## Stack

- Next.js 16 App Router with Cache Components, Partial Prefetching, React
  Compiler and typed routes (see `next.config.ts`).
- React 19.3 (`<ViewTransition>` for route animations), TypeScript strict.
- Tailwind CSS 4 with design tokens in `src/app/globals.css`.
- Biome for lint + format, Vitest + Testing Library for unit tests,
  Playwright + axe for end-to-end and accessibility.
- pnpm. Node 22+.

## Commands

| Task | Command |
| --- | --- |
| Dev server | `pnpm dev` |
| Lint + format check | `pnpm lint` (fix: `pnpm lint:fix`) |
| Types | `pnpm typecheck` |
| Unit tests | `pnpm test` |
| E2E + a11y (needs `pnpm build`) | `pnpm test:e2e` |
| Everything CI runs before build | `pnpm check` |

Run `pnpm check` before declaring a task done. Run `pnpm build && pnpm test:e2e`
when a change touches routes, layout, metadata or interactive behavior.

## Architecture

```
src/
  app/          Routes only: layouts, pages, metadata files. No business logic.
  components/   Presentational components. Server Components by default.
  content/      Typed content (profile, experience, case studies). Source of truth for copy.
  lib/          Pure helpers (formatting, SEO). Unit-tested.
  fonts/        Self-hosted variable fonts (OFL).
e2e/            Playwright specs (run against the production build).
```

- **Server Components by default.** Add `"use client"` only for interaction
  (today: `theme-toggle.tsx`). Never fetch in Client Components.
- **Content is data.** Copy lives in `src/content/*.ts`, typed by
  `src/content/types.ts` and validated by `src/content/content.test.ts`.
  Components never hard-code profile facts.
- **Everything is static.** No `cookies()`, `headers()` or uncached fetches in
  pages. If you add data, cache it with `"use cache"` and `cacheLife`.
  `/work/[slug]` exports `ensureStatic = "navigation"`; keep it.
- **No manual memoization.** The React Compiler handles it; do not add
  `useMemo`, `useCallback` or `memo` without a measured reason.
- **Typed links.** Use `next/link` with literal or template hrefs so
  `typedRoutes` can check them.

## Content rules (important)

Facts must match Carlos's Master CV. Never invent employers, dates, metrics,
technologies or responsibilities. When a detail is missing, leave a
`// TODO(carlos): ...` comment instead of guessing. Do not publish client
internal names, code or screenshots.

## Design rules

- Use the tokens (`bg-paper`, `text-ink`, `text-muted`, `border-line`,
  `text-accent`, `text-signal`). No raw hex values in components.
- Both themes must work: check light and dark before finishing UI work.
- One memorable element per page (the hero diagram on the home page). Keep
  the rest quiet: no decorative gradients, no entrance animation on every
  section, no card grids for everything.
- Accessibility is a requirement: semantic landmarks and headings, visible
  focus, `prefers-reduced-motion` respected, WCAG AA contrast. The axe e2e
  test must stay green.
- Copy: sentence case, active voice, buttons say what they do.

## Skills available to agents

Project skills live in `.agents/skills` (Cursor) and `.claude/skills`
(Claude Code, symlinked). `skills-lock.json` pins them.

- `next-dev-loop`: verify changes against the running dev server.
- `vercel-react-best-practices`, `vercel-composition-patterns`: React rules.
- `vercel-react-view-transitions`: route and element animations.
- `web-design-guidelines`: UI review checklist.
- `deploy-to-vercel`: deployment.
- `add-case-study`: this project's workflow for publishing a case study.
