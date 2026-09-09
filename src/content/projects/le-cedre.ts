import { defineProject, gallery, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'le-cedre',
  order: 3,
  title: 'Le Cèdre',
  client: 'Le Cèdre',
  headline: "Conception d'un outil de gestion de contrats de prestations immobilières",
  description: 'Outil de gestion de contrats de prestations immobilières.',
  cover: '/assets/projects/lecedre/Contrat.webp',
  tags: ['Application métier', 'OOUX', 'Freelance'],
  sections: [
    gallery([
      { src: '/assets/projects/lecedre/Contrat.webp', alt: "Fiche d'un contrat" },
      { src: '/assets/projects/lecedre/Agenda.webp', alt: 'Agenda des interventions' },
      { src: '/assets/projects/lecedre/TousLescontrats.webp', alt: 'Liste de tous les contrats' },
      { src: '/assets/projects/lecedre/Sites.webp', alt: 'Gestion des sites' },
    ]),

    columns({
      Device: ['Desktop', 'Mobile'],
      'Attributs du projet': ['Application professionnelle', 'Mission freelance'],
    }),

    article(
      'Contexte du projet',
      `
Le projet visait à améliorer l'efficacité des gestionnaires de contrats en restructurant leurs outils de travail. La méthodologie OOUX (Object-Oriented UX) a été retenue pour sa capacité à organiser les interfaces autour des objets métier essentiels avant d'aborder les aspects interactifs.
`,
    ),

    quote('Une conception orientée objet pour plus de flexibilité'),

    article(
      'Choix méthodologique',
      `
Le contexte professionnel implique des interactions quotidiennes avec diverses entités (contrats, clients, documents) soumises à des règles spécifiques. L'approche OOUX permet d'éviter la fragmentation des fonctionnalités et offre une vision plus cohérente du système.
`,
    ),

    article(
      'Phases de conception',
      `
Le développement du projet s'est articulé autour de plusieurs étapes :

- entretiens avec les gestionnaires pour identifier leurs besoins ;
- sessions de co-conception pour définir la structure des objets métier ;
- évaluations régulières pour valider les orientations.

Cette méthodologie a permis d'établir une base solide tout en restant alignée avec les contraintes pratiques du terrain.
`,
    ),

    image('/assets/projects/lecedre/Contrat.webp', {
      alt: "Vue détaillée d'un contrat",
      ratio: '16/20',
      parallax: true,
    }),

    columns({
      'Bénéfices observés': [
        "Meilleure lisibilité de l'interface",
        'Navigation simplifiée',
        'Adaptabilité aux évolutions futures',
      ],
      Méthodologie: [
        "Organisation de l'interface selon une hiérarchie d'objets métier claire, facilitant la manipulation des contrats.",
      ],
    }),

    article(
      'Synthèse',
      `
L'application de la méthode OOUX, associée à une démarche collaborative, a abouti à un outil adapté aux pratiques des gestionnaires de contrats. La solution développée transforme un système complexe en une interface structurée et évolutive.

La conception orientée objet s'est révélée particulièrement pertinente pour organiser l'information et faciliter la compréhension des interactions, tout en maintenant la capacité d'évolution du système.
`,
    ),
  ],
})
