import { defineProject, gallery, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'desoutter',
  order: 1,
  title: 'Desoutter WebUI',
  client: 'Desoutter',
  headline: "Conception d'un écosystème SaaS unifié pour les outils de vissage industriels",
  description: "Refonte de l'écosystème digital des outils de vissage industriels.",
  cover: '/assets/projects/desoutter/Main.webp',
  tags: ['SaaS', 'Design system', 'Multi-utilisateurs'],
  sections: [
    gallery(
      [
        { src: '/assets/projects/desoutter/Main.webp', alt: 'Tableau de bord principal WebUI' },
        { src: '/assets/projects/desoutter/Multi.webp', alt: 'Vue multi-outils' },
        { src: '/assets/projects/desoutter/pset.webp', alt: 'Configuration des programmes de vissage' },
        { src: '/assets/projects/desoutter/Flow.webp', alt: 'Éditeur de flux de production' },
      ],
    ),

    columns({
      Device: ['Desktop', 'Tablette'],
      'Attributs du projet': ['Application SaaS', 'Design system', 'Multi-utilisateurs'],
    }),

    article(
      'Contexte du projet',
      `
La transformation digitale de Desoutter vise à créer un écosystème SaaS unifié, remplaçant des logiciels historiquement cloisonnés. Le projet WebUI propose une architecture étagée où chaque typologie d'utilisateur accède à des fonctionnalités spécifiques au sein d'une même plateforme, garantissant l'interopérabilité des données et la cohérence des processus.
`,
    ),

    quote('Un écosystème unifié pour des besoins métiers multiples'),

    columns({
      'Écosystème unifié': [
        "Création d'une base commune permettant de connecter et faire communiquer tous les outils métiers entre eux, tout en respectant les besoins spécifiques de chaque utilisateur.",
      ],
      'Projet source': [
        "Création d'une plateforme unique intégrant des workflows métiers distincts tout en garantissant leur interconnexion et l'évolution indépendante de chaque couche fonctionnelle.",
      ],
    }),

    article(
      "Typologies d'utilisateurs",
      `
### Opérateur
Configuration et contrôle des outils, suivi en temps réel, validation des séquences.

### Customer Maintenance
Diagnostic et maintenance, gestion des paramètres techniques, maintenance préventive.

### Process Engineer
Définition des processus, configuration avancée, optimisation des séquences.

### Quality Engineer
Contrôle qualité, traçabilité, validation des processus, gestion des normes.
`,
    ),

    article(
      'Méthodologie',
      `
L'approche méthodologique s'articule autour de la cartographie des interactions entre les différents métiers. Les ateliers de conception ont permis d'identifier les points de convergence et les besoins spécifiques, aboutissant à une architecture permettant à chaque profil d'accéder à ses fonctionnalités tout en partageant un socle commun de données.
`,
    ),

    article(
      'Processus collaboratif',
      `
La collaboration avec les Product Owners a permis d'affiner la structure étagée de la plateforme, où chaque niveau correspond à des besoins métiers spécifiques tout en maintenant une communication fluide entre les couches. Les équipes de développement ont été guidées dans l'implémentation de cette architecture complexe, assurant l'interopérabilité des différentes composantes.
`,
    ),

    article(
      'Le design system comme fondation unificatrice',
      `
La mise en place du design system a joué un rôle central dans l'unification de l'écosystème Desoutter. Au-delà d'une simple bibliothèque de composants, il constitue un véritable cadre stratégique qui répond à plusieurs enjeux clés :

### Cohérence multi-niveaux
Le design system assure une expérience utilisateur cohérente à travers les différentes couches de l'application, tout en s'adaptant aux besoins spécifiques de chaque profil utilisateur. Les composants sont conçus avec une flexibilité permettant leur contextualisation selon le niveau d'accès et les besoins métiers.

### Efficacité de développement
L'approche modulaire du design system accélère significativement le développement en fournissant des composants réutilisables et documentés. Cette standardisation réduit la dette technique et facilite l'évolution parallèle des différentes parties de l'écosystème.

### Évolutivité contrôlée
Le design system intègre un processus de gouvernance qui permet l'évolution des composants tout en maintenant la cohérence globale. Chaque modification est évaluée en fonction de son impact sur l'ensemble de l'écosystème, assurant une croissance maîtrisée du produit.

### Collaboration optimisée
En établissant un langage commun entre les équipes design, développement et produit, le design system facilite la communication et accélère les cycles de décision. Il sert de référence partagée pour tous les acteurs du projet, réduisant les ambiguïtés et renforçant l'alignement des équipes.
`,
    ),

    image('/assets/projects/desoutter/DesignSystem.webp', {
      alt: 'Extrait du design system Desoutter',
      ratio: '16/10',
    }),

    article(
      'Synthèse',
      `
Le projet WebUI illustre la transformation réussie d'outils techniques cloisonnés vers un écosystème SaaS moderne et unifié. L'architecture étagée et le design system permettent de répondre aux besoins spécifiques de chaque métier tout en maintenant une cohérence globale et une interopérabilité optimale des processus.
`,
    ),
  ],
})
