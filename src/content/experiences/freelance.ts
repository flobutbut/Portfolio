import { defineExperience, article, quote } from '../types'

export default defineExperience({
  id: 'freelance',
  order: 1,
  title: 'Freelance',
  company: 'Indépendant',
  role: 'Product Designer',
  duration: '9 ans',
  headline:
    'Conception et accompagnement sur des services SaaS B2B, web et mobiles, et design systems.',
  description:
    "Conception et accompagnement sur des services SaaS B2B, design systems et outils métier. Intervention sur l'UX research, la stratégie produit et l'optimisation des interfaces.",
  sections: [
    article(
      'De la vision à la réalité',
      `
Au cours de mes neuf années d'expérience en tant que concepteur de produits numériques indépendant, j'ai eu l'opportunité de transformer des idées ambitieuses en solutions concrètes et performantes. Cette aventure entrepreneuriale m'a permis de développer une expertise unique, alliant compétences techniques pointues et qualités humaines essentielles, au service de projets toujours plus innovants.
`,
    ),

    article(
      "L'art de donner vie aux projets numériques",
      `
Ma mission va bien au-delà de la simple création d'interfaces. Il s'agit d'accompagner les entreprises dans leur transformation numérique, en apportant des solutions qui répondent précisément à leurs enjeux. Cette approche globale repose sur une vision stratégique du produit, où chaque décision est guidée par une compréhension fine des objectifs business et des besoins utilisateurs.

La capacité à traduire une vision d'entreprise en solutions concrètes nécessite une approche méthodique et réfléchie. Au fil des projets, j'ai développé une expertise dans l'élaboration de feuilles de route produit qui allient ambition et réalisme. Cette vision stratégique s'accompagne naturellement d'une démarche d'amélioration continue, permettant d'ajuster et d'optimiser les solutions au fil du temps.
`,
    ),

    quote(
      "Développer des solutions qui simplifient concrètement le quotidien des utilisateurs.",
    ),

    article(
      "Une approche centrée sur l'humain",
      `
La réussite d'un projet numérique repose avant tout sur sa capacité à répondre aux besoins réels de ses utilisateurs. C'est pourquoi je place la recherche utilisateur au cœur de ma démarche. Cette approche permet de concevoir des services véritablement adaptés aux contextes d'utilisation, tout en veillant à leur accessibilité et à leur inclusivité. L'objectif est simple mais ambitieux : développer des solutions qui simplifient concrètement le quotidien des utilisateurs.
`,
    ),

    article(
      "Une expertise technique au service de l'innovation",
      `
L'expertise technique s'est construite projet après projet, permettant aujourd'hui d'aborder sereinement des défis complexes. La création de design systems évolutifs constitue souvent la colonne vertébrale des projets, assurant cohérence et scalabilité. Cette base solide est enrichie par un travail minutieux sur l'identité visuelle des interfaces, créant des expériences mémorables et efficaces.

Les principales forces techniques développées au fil des années incluent :

- la capacité à réaliser des audits approfondis d'interfaces existantes ;
- la maîtrise des outils de prototypage pour valider rapidement les concepts ;
- l'intégration systématique des principes d'accessibilité ;
- la mise en place d'outils de mesure pour évaluer l'impact des solutions.
`,
    ),

    article(
      'Le facteur humain',
      `
La réussite d'un projet ne repose pas uniquement sur les compétences techniques. L'expérience m'a appris l'importance cruciale des qualités humaines dans la conduite de projets numériques. Un esprit d'analyse aiguisé, couplé à une réelle capacité d'empathie, permet de saisir les enjeux dans leur globalité. La communication claire et persuasive facilite la collaboration avec les équipes pluridisciplinaires, tandis que l'adaptabilité permet de faire face aux inévitables changements qui jalonnent tout projet d'envergure.
`,
    ),

    article(
      'Des résultats concrets illustrés par des projets marquants',
      `
Le projet [Desoutter](/realization/desoutter) illustre parfaitement cette approche globale. La transformation de leurs outils métiers en une plateforme unifiée représentait un défi majeur de complexité technique et organisationnelle. En adoptant une approche structurée et collaborative, nous avons réussi à simplifier le quotidien des utilisateurs tout en améliorant significativement l'efficacité opérationnelle. La mise en place d'un design system robuste a créé une base solide pour les évolutions futures, permettant à la plateforme de s'adapter aux besoins émergents.

Le projet [JP Racing](/realization/jp-racing) démontre quant à lui la capacité à innover tout en restant focalisé sur l'utilisateur. La refonte de leur plateforme e-commerce a permis de créer une expérience d'achat fluide et intuitive, où la complexité technique du configurateur produit s'efface au profit d'une interface accessible et performante.
`,
    ),

    article(
      'Une méthodologie éprouvée',
      `
L'expérience accumulée a permis de développer une méthodologie efficace et adaptable. Celle-ci s'articule autour de quatre phases essentielles : la compréhension approfondie des besoins et du contexte, la conception de solutions innovantes et adaptées, la validation par des tests réguliers, et un accompagnement continu pour garantir le succès sur le long terme.
`,
    ),

    article(
      'Conclusion',
      `
Ces neuf années d'expérience ont forgé une expertise complète en conception de produits numériques, où la technique se met au service des enjeux business et humains. Chaque nouveau projet est une opportunité d'apporter une valeur concrète et durable, en s'appuyant sur des compétences éprouvées et une méthodologie robuste. Cette approche globale, associant expertise technique et compréhension des enjeux métier, permet de transformer efficacement les ambitions numériques en réalisations concrètes et performantes.
`,
    ),
  ],
})
