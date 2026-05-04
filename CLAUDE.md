# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
yarn dev          # Start dev server at localhost:5180 (port dédié, voir vite.config)
yarn build        # Type-check + build to ./dist
yarn preview      # Preview production build
yarn type-check   # Run vue-tsc without emitting
yarn lint         # Run ESLint with auto-fix
yarn format       # Run Prettier on src/
```

There are no tests in this project.

## Architecture

This is a Vue 3 + TypeScript portfolio site built with Vite. Deployed to GitHub Pages via `.github/workflow/deploy.yml` on pushes to `main`.

### Routing (`src/router/index.ts`)

Four routes: `/` (OverviewPage), `/realizations` (RealizationsPage), `/contact` (ContactPage), `/realization/:id` (RealizationDetail). The detail route uses `meta: { layout: 'blank' }` which strips the NavBar/Footer in `App.vue`.

### Content system

Projects and experience articles live in `src/content/` as Markdown files with a custom format:

1. **YAML frontmatter** — `type`, `id`, `metadata` (title, description, cover image)
2. **Section blocks** — `## @componentName` headers followed by YAML data

`ContentParser` in `src/utils/markdownParser.ts` handles two modes:
- `parseForCard()` — extracts frontmatter only (used for grid/card views)
- `parseContent()` — parses frontmatter + all `## @component` sections into a `{ metadata, sections[] }` structure

`RealizationsPage.vue` uses `import.meta.glob("../content/projects/*.md")` to load all project files eagerly.

`RealizationDetail.vue` maps section component names to actual Vue components via `SECTION_COMPONENTS` and renders them dynamically with `<component :is="...">`.

### Available section components for content files

| Key in `## @key` | Component |
|---|---|
| `hero` | `RealizationHero` |
| `carousel` | `HorizontalCarousel` |
| `article` | `ArticleSection` |
| `columns` | `ColumnsSection` |
| `singleImage` | `SingleImageSection` |
| `parallaxImage` | `ParallaxImageSection` |
| `quote` | `CoteSection` |

### Component layout

- `src/components/sections/` — shared across pages (NavBar, Footer, ContactSection)
- `src/components/sections_overview/` — sections composing `OverviewPage`
- `srctml/components/sections_realization/` — sections composing `RealizationDetail`
- `src/components/` — reusable cards (ExperienceCard, RealizationCard, MethodCard, SkillItem)

### Styling

Global design tokens are defined as CSS custom properties in `src/assets/styles/global.css`:
- Colors: `--text-front`, `--text-medium`, `--surface-back`, `--surface-medium`, `--surface-bright`, `--highlight-default`, `--highlight-hover`, `--border-medium`
- Spacing: `--space-none` (0px), `--space-md` (8px) — compound spacing uses `calc(var(--space-md) * N)`
- Border radius: `--radius-sm`, `--radius-md`, `--radius-lg`
- Font: Inter (loaded from local `/fonts/` via `@font-face`)
- Breakpoints: tablet `max-width: 1024px`, mobile `max-width: 512px`

The `@` alias resolves to `src/`.

### Adding a new project

1. Create `src/content/projects/<id>.md` with frontmatter and `## @section` blocks
2. Add project images to `public/assets/projects/<id>/`
3. The file is auto-discovered via `import.meta.glob` — no registration needed
