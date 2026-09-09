import { defineProject, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'maif',
  order: 4,
  title: 'MAIF',
  client: 'MAIF',
  headline:
    "Transformer l'expérience des sociétaires par des parcours optimisés et une offre de services enrichie",
  description:
    "Améliorer l'expérience sociétaire grâce à des parcours plus fluides et une offre de services enrichie.",
  cover: '/assets/projects/maif/Logo.webp',
  tags: ['UX research', 'Service design', 'Assurance'],
  sections: [
    image('/assets/projects/maif/Ugo-Call-In.webp', {
      alt: 'Écran issu du projet MAIF',
      ratio: '16/9',
    }),

    columns({
      Compétences: ['Recherche utilisateur (UX)', 'Analyse du parcours client (CX)'],
      'Attributs du projet': ['Expérience sociétaire', 'Expérience conseiller'],
    }),

    article(
      'Contexte du projet',
      `
L'incubateur MAIF s'inscrit dans une démarche d'innovation visant à repenser l'accompagnement des sociétaires au-delà des limites contractuelles traditionnelles. Lorsqu'un assuré ne peut obtenir de solution via la MAIF, il se retrouve souvent démuni. L'incubateur explore donc des alternatives, notamment l'intégration de services tiers. Cette approche permettrait aux sociétaires, même hors du cadre assurantiel classique, de bénéficier d'un accompagnement pertinent, bien que les services proposés restent à leur charge.
`,
    ),

    article(
      'Méthodologie',
      `
L'étude s'appuie sur une approche mixte combinant analyses qualitative et quantitative.

### Immersion terrain
Double écoute des échanges entre sociétaires et téléconseillers pour une compréhension fine des interactions et des difficultés rencontrées.

### Analyse de données
Exploitation d'une base de données d'appels qualifiés afin d'identifier les situations récurrentes.

### Cartographie des parcours
Élaboration de user journey maps détaillées pour visualiser les parcours des sociétaires et identifier les points de friction.
`,
    ),

    article(
      'Enjeux pour les sociétaires',
      `
L'objectif principal est de transformer un refus en opportunité d'accompagnement alternatif. Plutôt que de laisser un assuré sans solution, l'accès à des services tiers lui permet de bénéficier d'une réponse adaptée à ses besoins, même en dehors du cadre assurantiel. Cette approche maintient une relation constructive avec la MAIF, malgré l'impossibilité d'une prise en charge directe.
`,
    ),

    article(
      'Enjeux pour les téléconseillers',
      `
- Gérer l'annonce d'un refus tout en maintenant une relation de confiance.
- Identifier rapidement le service tiers adapté en naviguant efficacement dans un catalogue de solutions alternatives.

Pour répondre à ces enjeux, des outils d'aide à la décision et des guides conversationnels ont été développés afin d'accompagner les téléconseillers dans la transformation d'un refus en proposition constructive.
`,
    ),

    quote('La satisfaction client passe par des solutions concrètes à chaque demande'),

    article(
      'Enjeux pour la MAIF',
      `
L'ambition est de redéfinir la relation assureur-assuré en dépassant le cadre contractuel classique. Cette approche innovante positionne la MAIF comme un conseiller global plutôt qu'un simple prestataire de services assurantiels. L'étude a permis d'optimiser les parcours numériques et d'enrichir le catalogue de services tiers, ouvrant ainsi la voie à un nouveau modèle d'accompagnement assurantiel.
`,
    ),
  ],
})
