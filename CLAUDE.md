# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn dev          # Start dev server at localhost:5180 (dedicated port, see vite.config.ts)
yarn build        # Type-check (vue-tsc) + build to ./dist
yarn preview      # Preview production build
yarn type-check   # Run vue-tsc without emitting
yarn lint         # Run ESLint 9 (flat config, eslint.config.ts) with auto-fix
yarn format       # Run Prettier on src/
```

There are no tests in this project.

## Architecture

Vue 3 + TypeScript portfolio built with Vite. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `main` (the workflow copies `index.html` to `404.html` so deep links work with history mode).

### Routing (`src/router/index.ts`)

| Path | View | Notes |
|---|---|---|
| `/` | `OverviewPage` | |
| `/realizations` | `RealizationsPage` | grid of projects |
| `/contact` | `ContactPage` | |
| `/realization/:id` | `RealizationDetail` | `collection: 'projects'`, `meta.layout: 'blank'` |
| `/experience/:id` | `RealizationDetail` | `collection: 'experiences'`, `meta.layout: 'blank'` |

`layout: 'blank'` strips the NavBar/Footer in `App.vue`. Every route sets `document.title` via `meta.title` (detail pages set it from the entry).

### Content system (`src/content/`)

Content is **typed TypeScript, not Markdown files**. Each project or experience is one module exporting `defineProject({...})` or `defineExperience({...})` from `src/content/types.ts`.

- `src/content/types.ts` — `Project`, `Experience`, the `Section` discriminated union and the section helpers.
- `src/content/index.ts` — registry. Uses `import.meta.glob` on `./projects/*.ts` and `./experiences/*.ts`, sorts by `order`, throws on duplicate `id`. Exposes `projects`, `experiences`, `getProject(id)`, `getExperience(id)`.
- `src/content/projects/*.ts`, `src/content/experiences/*.ts` — the entries.

Section helpers (all return a `Section`):

| Helper | Renders | Notes |
|---|---|---|
| `gallery([...])` | `GallerySection` | horizontal scroll-snap carousel; strings or `{ src, alt }` |
| `columns({ Title: ['a', 'b'] })` | `ColumnsSection` | any number of columns |
| `article(title, body)` | `ArticleSection` | `body` is Markdown; every heading level renders as `<h3>` |
| `quote(text, author?)` | `QuoteSection` | |
| `image(src, { alt, ratio?, parallax? })` | `ImageSection` | `ratio` like `'16/10'`; `parallax: true` enables scroll parallax |

The hero of a detail page is not a section: it is rendered by `RealizationHero` from the entry's `headline`, `client` (projects) or `company/role/duration` (experiences), `tags` and `status`. `status: 'wip'` shows an "en cours de rédaction" badge on the card and the hero.

Markdown in article bodies is rendered by `src/utils/markdown.ts` (markdown-it, `html: false`). Internal links (`/realization/...`) are intercepted by `ArticleSection` and routed client-side.

### Component layout

- `src/components/sections/` — shared across pages: `AppNavBar`, `AppFooter`, `ContactSection`
- `src/components/sections_overview/` — sections composing `OverviewPage`
- `src/components/sections_realization/` — sections composing `RealizationDetail` (`RealizationHero`, `GallerySection`, `ArticleSection`, `ColumnsSection`, `ImageSection`, `QuoteSection`)
- `src/components/` — cards (`ExperienceCard`, `RealizationCard`, `MethodCard`, `SkillItem`)
- `src/components/ui/` — `AppButton` (renders `router-link`, `a` or `button` depending on `to`/`href`), `EmailCopy`
- `src/components/icons/` — SVG icon components
- `src/directives/reveal.ts` — `v-reveal` / `v-reveal="{ delay }"`: fade-up on first intersection, respects `prefers-reduced-motion`
- `src/composables/` — `useBreakpoint(maxWidth)` (matchMedia), `useReducedMotion()`

### Styling (`src/assets/styles/global.css`)

Design tokens as CSS custom properties: colors (`--text-front`, `--text-medium`, `--text-muted`, `--surface-back`, `--surface-medium`, `--highlight-default`, `--highlight-hover`, `--border-medium`, …), spacing scale (`--space-1` = 8px … `--space-12` = 96px), radii, motion (`--ease-out`, `--duration-*`), fluid type sizes (`--fs-display`, `--fs-h2`, …).

Layout helpers: `.section` (vertical rhythm `--section-py` + horizontal `--inset`), `.container` (`--content-max` = 1120px), `.section-header`, `.prose-column` (right-offset reading column on detail pages), `.prose` (Markdown output), `.eyebrow`.

Font: Inter from Google Fonts (`index.html`, includes italic 600/700 for headings).

Breakpoints (use these literal values): **mobile `max-width: 640px`**, **tablet `max-width: 1024px`**. `BREAKPOINTS` in `useBreakpoint.ts` mirrors them.

The `@` alias resolves to `src/`.

### Adding a new project

1. Create `src/content/projects/<id>.ts` with `defineProject({ id, order, title, client, headline, description, cover, tags, sections: [...] })`
2. Add images to `public/assets/projects/<id>/` and reference them as `/assets/projects/<id>/file.webp`
3. Nothing to register: the file is auto-discovered. `yarn type-check` catches typos in section helpers.
