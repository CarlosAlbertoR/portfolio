---
name: add-case-study
description: Add or update a case study on Carlos's portfolio. Use when asked to write, publish or edit a case study, project write-up or "work" page in this repository.
---

# add-case-study

Case studies are typed data, not MDX. One file per study in
`src/content/case-studies/`, registered in `src/content/case-studies/index.ts`.

## Steps

1. **Collect facts first.** Ask Carlos for the source material or read it from
   his Master CV. Every claim, metric, technology and date must come from
   him. Missing detail becomes `// TODO(carlos): ...`, never an invention.
2. **Create the file** `src/content/case-studies/<slug>.ts` exporting a
   `CaseStudy` (see `src/content/types.ts`) with `satisfies CaseStudy`.
   - `slug`: kebab-case, stable (it is the URL).
   - `title`: the problem solved, not the company name.
   - `outcome`: one sentence, the result.
   - `sections`: usually The problem, Architecture, decisions, Making it last.
   - `metrics`: only numbers Carlos confirmed, with how they were measured.
   - `status: "draft"` until Carlos approves the text.
3. **Register it** in the `all` array in `index.ts`, in display order.
4. **Link from experience** by setting `caseStudy: "<slug>"` on the matching
   entry in `src/content/experience.ts`.
5. **Confidentiality check.** No client-internal project names, code,
   screenshots, URLs or people unless Carlos says they are public.
6. **Verify.** `pnpm check`, then `pnpm build && pnpm test:e2e`. Add the new
   route to the `pages` array in `e2e/site.spec.ts` so axe checks it.
7. **Publish** by switching `status` to `"published"` once approved.

## Writing style

Plain, specific, first person. Lead each section with the decision and its
reason. Sentence case headings. No superlatives ("cutting-edge",
"seamless"), no filler.
