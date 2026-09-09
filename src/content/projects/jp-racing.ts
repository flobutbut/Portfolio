import { defineProject, gallery, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'jp-racing',
  order: 2,
  title: 'JP Racing',
  client: 'JP Racing',
  headline:
    'Une solution digitale complète associant e-commerce et configurateur 3D pour la personnalisation de roues de vélo',
  description: 'Plateforme e-commerce et configurateur 3D pour roues de vélo sur mesure.',
  cover: '/assets/projects/jpracing/Home.webp',
  tags: ['E-commerce', 'Configurateur 3D', 'Freelance'],
  sections: [
    gallery([
      { src: '/assets/projects/jpracing/Home.webp', alt: "Page d'accueil JP Racing" },
      { src: '/assets/projects/jpracing/Explo.webp', alt: 'Exploration du catalogue' },
      { src: '/assets/projects/jpracing/Config-01.webp', alt: 'Configurateur de roues, étape 1' },
      { src: '/assets/projects/jpracing/Comparaison.webp', alt: 'Comparateur de configurations' },
    ]),

    columns({
      Compétences: ['Conception UX/UI', 'Développement e-commerce', 'Création de marque digitale'],
      Caractéristiques: ['Site e-commerce', 'Mission freelance'],
    }),

    article(
      'Présentation',
      `
JP Racing est une entreprise vendéenne spécialisée dans la conception et l'assemblage de roues de vélo sur mesure. Leur expertise permet d'équiper les cyclistes avec des roues assemblées main, adaptées à leur pratique et à leurs besoins spécifiques.
`,
    ),

    article(
      'Objectifs du projet',
      `
Le projet visait deux objectifs principaux : moderniser la plateforme e-commerce existante et développer un configurateur 3D permettant aux utilisateurs de personnaliser leurs roues. Cette solution devait intégrer un système de vérification de compatibilité entre les différents composants selon l'usage prévu.
`,
    ),

    article(
      'Solution e-commerce',
      `
La nouvelle plateforme e-commerce de JP Racing a été conçue pour simplifier le processus de sélection et de personnalisation des roues de vélo. L'interface guide les utilisateurs à travers les différentes options de configuration tout en assurant la compatibilité technique des composants.

Le système intègre un comparateur intelligent qui aide les cyclistes à évaluer différentes configurations selon leurs besoins spécifiques. Des suggestions de configurations pré-établies sont également proposées, s'appuyant sur l'expertise de JP Racing pour différents types de pratiques cyclistes.

Cette approche structure le parcours d'achat autour de deux axes principaux :

- l'accompagnement technique pour les clients souhaitant une personnalisation détaillée ;
- une solution clé en main pour ceux préférant s'appuyer sur des configurations éprouvées.
`,
    ),

    image('/assets/projects/jpracing/Explo.webp', {
      alt: 'Page d’exploration du catalogue JP Racing',
      ratio: '16/20',
      parallax: true,
    }),

    quote('Un configurateur 3D intuitif pour une personnalisation précise'),

    article(
      'Le configurateur',
      `
La conception du configurateur s'est appuyée sur une collaboration étroite avec JP Racing pour garantir la précision technique des options proposées. Cette approche a permis de développer un outil à la fois fonctionnel et accessible, répondant aux besoins des utilisateurs comme aux exigences techniques du produit.
`,
    ),

    image('/assets/projects/jpracing/Config-02.webp', {
      alt: 'Configurateur 3D JP Racing',
      ratio: '16/10',
    }),

    article(
      'Résultats',
      `
La nouvelle plateforme répond aux objectifs initiaux en offrant une expérience d'achat fluide et un outil de configuration précis. L'interface modernisée et le configurateur 3D permettent à JP Racing de proposer une solution digitale complète, adaptée aux attentes actuelles des clients et aux spécificités techniques du secteur.

La combinaison du site e-commerce et du configurateur 3D offre aux clients une expérience d'achat guidée, tout en conservant la flexibilité nécessaire pour des choix personnalisés. Cette solution maintient un équilibre entre accessibilité pour l'utilisateur et précision technique du produit final.
`,
    ),
  ],
})
