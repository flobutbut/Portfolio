import { defineExperience, article, quote, image } from '../types'

export default defineExperience({
  id: 'sharingcloud',
  order: 2,
  title: 'Sharingcloud',
  company: 'Sharingcloud',
  role: 'Product Designer',
  duration: '2 ans',
  headline:
    "Refonte des produits de l'écosystème Sharingcloud et mise en place d'un design system dans un environnement agile.",
  description:
    "Refonte des produits de l'écosystème Sharingcloud et mise en place d'un design system dans un environnement agile.",
  sections: [
    image('/assets/projects/workplacetobe/home.webp', {
      alt: "Page d'accueil de WorkplaceToBe",
      ratio: '16/10',
    }),

    article(
      "L'écosystème Sharingcloud",
      `
Au cours de mon expérience chez Sharingcloud, j'ai eu l'opportunité de travailler sur l'ensemble de l'écosystème de solutions smart office. Voici un aperçu des différents projets :

### WorkplaceToBe
- **Application desktop** : interface principale permettant la gestion complète des espaces de travail.
- **Application mobile** : version mobile optimisée pour l'usage nomade et la réservation rapide.

### Add-in Outlook
Extension intégrée à Microsoft Outlook permettant de :

- réserver des salles directement depuis l'interface de l'e-mail ;
- gérer les réunions et les disponibilités ;
- synchroniser les agendas.

### Devices & hardware
Solutions matérielles pour la gestion des espaces :

- capteurs de présence pour les bureaux ;
- écrans d'affichage pour les salles de réunion ;
- systèmes de badgeage et d'accès.

### Metrics
Plateforme de tableaux de bord et d'analyse de données :

- visualisation des taux d'occupation ;
- rapports d'utilisation des espaces ;
- analyses prédictives pour l'optimisation des espaces.

### Signage
Système de gestion de contenu pour les écrans d'affichage :

- création et diffusion de contenus institutionnels ;
- gestion des playlists et des horaires de diffusion ;
- intégration avec les données de réservation.

Chaque projet a été conçu pour s'intégrer harmonieusement dans l'écosystème global, partageant une base commune de composants et de patterns tout en respectant les spécificités de chaque contexte d'utilisation.
`,
    ),

    quote(
      "La refonte d'un produit ne se résume pas à un simple relooking. C'est une opportunité de repenser l'expérience utilisateur dans sa globalité, en s'appuyant sur des fondations solides.",
    ),

    article(
      'Le défi de la refonte globale',
      `
Face à une interface existante vieillissante, la décision stratégique a été prise de procéder à une refonte complète plutôt qu'à une simple mise à jour. Cette approche « from scratch » a permis de repenser entièrement l'expérience utilisateur des solutions de smart office de Sharingcloud, qui offraient des fonctionnalités essentielles comme la réservation de salles de réunion et la déclaration de présence au bureau.
`,
    ),

    article(
      'Une démarche UX/UI structurée',
      `
Le processus de refonte a suivi une méthodologie rigoureuse :

1. **Analyse des besoins utilisateurs** : identification des irritants existants et des attentes non satisfaites.
2. **Définition de cas d'usage pertinents** : restructuration des parcours utilisateurs pour une expérience plus intuitive.
3. **Conception modulaire** : architecture pensée pour une vente par modules, facilitant à la fois la commercialisation pour l'équipe business et la planification des développements en mode agile.
`,
    ),

    article(
      'Unification multi-plateforme',
      `
L'un des défis majeurs consistait à assurer une cohérence fonctionnelle et visuelle entre les différentes plateformes :

- application SaaS desktop ;
- application mobile ;
- add-in Outlook.

Cette harmonisation a nécessité une réflexion approfondie sur les contextes d'utilisation différents tout en maintenant une logique commune dans les cas d'usage proposés. L'objectif était de permettre aux utilisateurs de passer d'une plateforme à l'autre sans rupture d'expérience.
`,
    ),

    article(
      "Implémentation d'un design system structuré",
      `
Pour soutenir cette vision unifiée, j'ai mis en place un design system complet basé sur les principes de l'Atomic Design.

Le système s'articule autour de quatre niveaux fondamentaux :

1. **Tokens fondamentaux** : couleurs, typographie, espacements et autres variables de base communes à tous les produits.
2. **Composants atomiques** : boutons, champs de formulaire, icônes.
3. **Patterns réutilisables** : structures de cartes, de modales et autres éléments composés.
4. **Librairies spécifiques** : déclinaisons adaptées pour chaque produit (desktop, mobile, add-in).

Une attention particulière a été portée à l'accessibilité des composants, assurant que les produits soient utilisables par le plus grand nombre.
`,
    ),

    article(
      'Management et collaboration',
      `
En parallèle de la conception, j'ai eu l'opportunité de manager un designer en alternance, lui transmettant les bonnes pratiques et l'impliquant activement dans le développement du design system.

La collaboration avec l'équipe technique a été essentielle, en travaillant main dans la main avec :

- le Scrum Master pour l'organisation des sprints ;
- les Product Owners pour la priorisation des fonctionnalités ;
- les développeurs front-end pour assurer la faisabilité et la qualité d'implémentation des composants.
`,
    ),

    article(
      'Méthodologie agile et documentation',
      `
L'intégration des processus de design dans l'environnement agile (Scrum) a nécessité une adaptation des méthodes de travail :

- participation active aux cérémonies agiles (planning, daily, review, rétrospective) ;
- anticipation des designs pour alimenter le backlog ;
- documentation minutieuse du design system pour faciliter son adoption par toute l'équipe.

L'utilisation de Figma comme outil principal a permis une collaboration fluide et une documentation vivante du design system.
`,
    ),

    article(
      'Résultats et impact',
      `
Cette refonte a abouti à une uniformisation réussie de l'expérience utilisateur à travers les différentes plateformes, tout en permettant une flexibilité commerciale grâce à l'approche modulaire. La mise en place du design system a également accéléré considérablement les cycles de développement et assuré une cohérence visuelle et fonctionnelle durable.

Bien que les produits Sharingcloud aient été abandonnés suite au rachat par Witco, cette expérience a constitué une étape importante dans l'évolution de la plateforme et a permis de poser des bases solides en matière de conception de produits SaaS dans le domaine du smart office.
`,
    ),
  ],
})
