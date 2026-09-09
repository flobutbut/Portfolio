import { defineProject, image, article } from '../types'

export default defineProject({
  id: 'workplacetobe',
  order: 6,
  status: 'wip',
  title: 'WorkplaceToBe',
  client: 'Sharingcloud',
  headline:
    'Plateforme collaborateurs de gestion de présence au bureau et de réservation de postes de travail',
  description:
    'Plateforme de gestion de présence au bureau et de réservation de postes de travail.',
  cover: '/assets/projects/workplacetobe/home.webp',
  tags: ['SaaS', 'Smart office', 'Design system'],
  sections: [
    image('/assets/projects/workplacetobe/home.webp', {
      alt: "Page d'accueil WorkplaceToBe",
      ratio: '16/10',
    }),

    article(
      'Étude de cas en cours de rédaction',
      `
Cette page est en cours de rédaction. Le détail de la refonte de l'écosystème Sharingcloud, dont WorkplaceToBe fait partie, est disponible dans l'expérience [Sharingcloud](/experience/sharingcloud).
`,
    ),
  ],
})
