/**
 * Registre du contenu : découvre automatiquement les fichiers de
 * `./projects/*.ts` et `./experiences/*.ts`. Aucun enregistrement manuel.
 */
import type { Entry, Experience, Project } from './types'

export * from './types'

const byOrder = <T extends Entry>(a: T, b: T) =>
  (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
  a.title.localeCompare(b.title, 'fr')

function collect<T extends Entry>(modules: Record<string, { default: T }>): T[] {
  const entries = Object.values(modules).map((module) => module.default)
  const ids = new Set<string>()
  for (const entry of entries) {
    if (ids.has(entry.id)) {
      throw new Error(`Contenu : identifiant dupliqué « ${entry.id} »`)
    }
    ids.add(entry.id)
  }
  return entries.sort(byOrder)
}

export const projects: Project[] = collect(
  import.meta.glob<{ default: Project }>('./projects/*.ts', { eager: true }),
)

export const experiences: Experience[] = collect(
  import.meta.glob<{ default: Experience }>('./experiences/*.ts', { eager: true }),
)

export const getProject = (id: string) => projects.find((project) => project.id === id)

export const getExperience = (id: string) =>
  experiences.find((experience) => experience.id === id)
