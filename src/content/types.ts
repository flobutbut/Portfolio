/**
 * Modèle de contenu du portfolio.
 *
 * Chaque projet / expérience est un module TypeScript qui exporte par défaut
 * le résultat de `defineProject()` ou `defineExperience()`. Les sections sont
 * construites avec les helpers ci-dessous : le typage garantit qu'une faute de
 * frappe ou un champ manquant est signalé à la compilation, pas en production.
 *
 * Les corps d'articles sont écrits en Markdown (paragraphes, listes, **gras**,
 * sous-titres `###`).
 */

export type Ratio = `${number}/${number}`

export interface GalleryImage {
  src: string
  alt: string
}

export interface Column {
  title: string
  items: string[]
}

export type Section =
  | { type: 'gallery'; images: GalleryImage[] }
  | { type: 'columns'; columns: Column[] }
  | { type: 'article'; title: string; body: string }
  | { type: 'quote'; text: string; author?: string }
  | {
      type: 'image'
      src: string
      alt: string
      ratio: Ratio
      parallax: boolean
      caption?: string
    }

export type EntryStatus = 'published' | 'wip'

interface EntryBase {
  /** Identifiant d'URL, unique par collection (ex. `desoutter`). */
  id: string
  /** Titre court affiché sur les cartes. */
  title: string
  /** Accroche longue affichée dans le hero de la page détail. */
  headline: string
  /** Résumé d'une phrase affiché sur les cartes. */
  description: string
  /** Ordre d'affichage croissant ; les entrées sans ordre passent en dernier. */
  order?: number
  /** `wip` affiche un badge « en cours de rédaction ». */
  status?: EntryStatus
  sections: Section[]
}

export interface Project extends EntryBase {
  kind: 'project'
  client: string
  cover: string
  tags?: string[]
}

export interface Experience extends EntryBase {
  kind: 'experience'
  company: string
  role: string
  duration: string
}

export type Entry = Project | Experience

/* ─── Helpers de définition ─────────────────────────────────────────── */

export const defineProject = (project: Omit<Project, 'kind'>): Project => ({
  kind: 'project',
  ...project,
})

export const defineExperience = (experience: Omit<Experience, 'kind'>): Experience => ({
  kind: 'experience',
  ...experience,
})

/* ─── Helpers de sections ───────────────────────────────────────────── */

/** Galerie horizontale d'images. Accepte des chemins ou des objets `{ src, alt }`. */
export const gallery = (images: Array<string | GalleryImage>, altPrefix = 'Écran'): Section => ({
  type: 'gallery',
  images: images.map((image, index) =>
    typeof image === 'string' ? { src: image, alt: `${altPrefix} ${index + 1}` } : image,
  ),
})

/** Colonnes de faits clés : `columns({ Device: ['Desktop', 'Tablette'], ... })`. */
export const columns = (definition: Record<string, string[]>): Section => ({
  type: 'columns',
  columns: Object.entries(definition).map(([title, items]) => ({ title, items })),
})

/** Bloc de texte titré, corps en Markdown. */
export const article = (title: string, body: string): Section => ({
  type: 'article',
  title,
  body: body.trim(),
})

/** Citation mise en exergue. */
export const quote = (text: string, author?: string): Section => ({
  type: 'quote',
  text,
  author,
})

/** Image seule, avec parallaxe optionnelle. */
export const image = (
  src: string,
  options: { alt: string; ratio?: Ratio; parallax?: boolean; caption?: string },
): Section => ({
  type: 'image',
  src,
  alt: options.alt,
  ratio: options.ratio ?? '16/10',
  parallax: options.parallax ?? false,
  caption: options.caption,
})
