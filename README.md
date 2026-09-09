# Portfolio — Florian Butour

Site portfolio (Vue 3 + TypeScript + Vite).

## Démarrer

```sh
yarn            # installer les dépendances
yarn dev        # serveur de développement sur http://localhost:5180
yarn build      # type-check + build de production dans ./dist
yarn preview    # prévisualiser le build
yarn lint       # ESLint
```

## Ajouter un projet

1. Créer `src/content/projects/<id>.ts` :

```ts
import { defineProject, gallery, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'mon-projet',
  order: 7,
  title: 'Mon projet',
  client: 'Client',
  headline: 'Accroche affichée dans le hero de la page détail',
  description: 'Résumé affiché sur la carte.',
  cover: '/assets/projects/mon-projet/cover.webp',
  tags: ['SaaS', 'Design system'],
  sections: [
    gallery(['/assets/projects/mon-projet/1.webp', '/assets/projects/mon-projet/2.webp']),
    columns({ Device: ['Desktop', 'Mobile'], Rôle: ['Product Designer'] }),
    article('Contexte', `Texte en **Markdown**, avec listes et sous-titres \`###\`.`),
    quote('Une citation mise en avant'),
    image('/assets/projects/mon-projet/3.webp', { alt: 'Écran', ratio: '16/10', parallax: true }),
  ],
})
```

2. Déposer les images dans `public/assets/projects/<id>/`.
3. C'est tout : le fichier est découvert automatiquement. `yarn type-check` signale les erreurs de structure.

Les expériences suivent le même principe dans `src/content/experiences/` avec `defineExperience()`.

Voir `CLAUDE.md` pour le détail de l'architecture.
