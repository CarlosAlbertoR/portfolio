# Carlos Alberto Ríos Naranjo — Portfolio

Personal site of a Frontend Architect. Built to be read by recruiters and
engineering managers, and to be read *as code* by engineers.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Rendering | Cache Components + Partial Prefetching; every route is static |
| React | React 19.3 with React Compiler and `<ViewTransition>` |
| Styling | Tailwind CSS 4, design tokens as CSS variables, light/dark themes |
| Types | TypeScript strict, typed routes, typed content (`satisfies`) |
| Quality | Biome (lint + format), Vitest + Testing Library, Playwright + axe |
| CI | GitHub Actions: lint, types, unit, build, e2e/a11y, Lighthouse budget |
| Fonts | Self-hosted variable fonts via `next/font/local` |

## Getting started

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `pnpm check` | Lint, typecheck and unit tests |
| `pnpm build` | Production build |
| `pnpm test:e2e` | Playwright + axe against the production build (run `pnpm build` first) |

## Project structure

```
src/
  app/          Routes and metadata (sitemap, robots, Open Graph image)
  components/   UI, Server Components by default
  content/      Typed content: profile, experience, projects, case studies
  lib/          Pure helpers (formatting, JSON-LD)
e2e/            End-to-end and accessibility tests
```

Content is data: edit `src/content/*.ts` to change copy. Case studies follow
the `add-case-study` workflow in `.agents/skills/add-case-study/SKILL.md`.

## Decisions

- **Static by default.** No request-time APIs. Unknown case-study slugs return
  a real 404 thanks to `ensureStatic = "navigation"`.
- **No animation library.** CSS for the hero diagram, React `<ViewTransition>`
  for the case-study title morph. Reduced motion is respected.
- **Accessibility is tested,** not assumed: axe runs on every page in CI on
  desktop and mobile.
- **Security headers** (HSTS, nosniff, frame denial, referrer and permissions
  policies) are set in `next.config.ts`.

## AI coding agents

The repo is set up for Cursor and Claude Code:

- `AGENTS.md` (read by both; `CLAUDE.md` imports it) holds the stack, rules and
  commands. Next.js maintains the top block with version-matched docs.
- `.cursor/rules/*.mdc` scope rules to UI and content files.
- `.mcp.json` and `.cursor/mcp.json` register MCP servers: `next-devtools`
  (runtime errors and routes from `next dev`), `context7` (library docs) and
  `playwright` (browser).
- Skills in `.agents/skills` (Cursor) and `.claude/skills` (Claude Code),
  pinned in `skills-lock.json`. Restore with `npx skills experimental_install`.

## Deploy

Import the repo in Vercel; no configuration needed. Optionally set
`NEXT_PUBLIC_SITE_URL` to the final domain for canonical URLs and the sitemap.
