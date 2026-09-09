import { defineProject, gallery, columns, article, quote, image } from '../types'

export default defineProject({
  id: 'onetouch',
  order: 5,
  title: 'OneTouch Hospitality',
  client: 'OneTouch Hospitality',
  headline: "Réinventer l'expérience client grâce à une conciergerie numérique d'exception",
  description: "Application tablette de service en chambre pour l'hôtellerie de luxe.",
  cover: '/assets/projects/onetouch/Cover.webp',
  tags: ['Application tablette', 'Design system', 'Multi-services'],
  sections: [
    gallery([
      { src: '/assets/projects/onetouch/Modules.webp', alt: 'Modules de services disponibles' },
      { src: '/assets/projects/onetouch/Menu.webp', alt: 'Menu du service en chambre' },
      { src: '/assets/projects/onetouch/Boutique-2.webp', alt: "Boutique de l'hôtel" },
      { src: '/assets/projects/onetouch/BackOffice-3.webp', alt: 'Back-office des équipes' },
    ]),

    columns({
      Compétences: ['Application tablette', 'Design system', 'Multi-services'],
      Device: ['Tablette', 'Desktop'],
    }),

    article(
      'Une nouvelle ère du service hôtelier',
      `
Imaginez pouvoir accéder à l'ensemble des services d'un hôtel de luxe du bout des doigts, dans l'intimité de votre chambre. OneTouch Hospitality transforme cette vision en réalité.

Une élégante tablette vous attend dans votre chambre, votre portail vers une expérience hôtelière personnalisée. En quelques gestes intuitifs, commandez votre petit-déjeuner avec vos préférences spécifiques, découvrez les trésors de la boutique de l'hôtel, ou formulez des demandes sur mesure. Cette interface raffinée remplace l'appel téléphonique traditionnel par une expérience fluide et discrète.
`,
    ),

    quote('Une orchestration parfaite du service hôtelier'),

    article(
      "Un marché en quête d'excellence",
      `
Le secteur de l'hôtellerie de luxe attendait une solution à la hauteur de ses exigences. Les applications existantes, avec leurs interfaces désuètes et leurs animations tape-à-l'œil, ne reflétaient pas l'élégance et le raffinement attendus dans l'univers du luxe. Les clients méritaient une expérience plus sophistiquée et plus intuitive.
`,
    ),

    image('/assets/projects/onetouch/Modules.webp', {
      alt: 'Modules de services OneTouch',
      ratio: '16/10',
      parallax: true,
    }),

    article(
      'Une expérience shopping personnalisée',
      `
OneTouch Hospitality réinvente le service en chambre. Parcourez la collection exclusive de la boutique depuis votre tablette et demandez à essayer vos coups de cœur directement dans votre chambre. Le personnel de la boutique vous apporte une sélection personnalisée, transformant votre suite en un espace d'essayage privé.
`,
    ),

    image('/assets/projects/onetouch/Boutique-2.webp', {
      alt: 'Boutique OneTouch sur tablette',
      ratio: '16/20',
      parallax: true,
    }),

    quote("La boutique de luxe s'invite dans votre suite"),

    article(
      'Une plateforme intelligente',
      `
OneTouch Hospitality orchestre une symphonie de services. Chaque demande client est instantanément transmise au service concerné de l'hôtel. Un système de droits d'accès sophistiqué permet à chaque département de gérer ses missions efficacement, garantissant une coordination parfaite de l'expérience client.
`,
    ),

    image('/assets/projects/onetouch/BackOffice-3.webp', {
      alt: 'Back-office OneTouch',
      ratio: '16/10',
    }),

    columns({
      Défis: [
        'Décrypter la complexité des processus hôteliers',
        'Créer une solution adaptable aux spécificités de chaque service',
      ],
      Solutions: [
        'Développer une plateforme modulaire et intuitive',
        'Intégrer les besoins spécifiques de chaque département',
      ],
    }),

    article(
      "L'innovation au service de l'excellence",
      `
OneTouch Hospitality redéfinit les standards du service hôtelier de luxe. En mariant technologie de pointe et élégance traditionnelle, nous avons créé une solution qui améliore tant l'expérience client que l'efficacité opérationnelle. Cette plateforme évolutive pose les fondations d'une nouvelle ère dans l'hôtellerie de luxe, où le service d'exception devient encore plus personnalisé et accessible.
`,
    ),

    image('/assets/projects/onetouch/Menu.webp', {
      alt: 'Menu du service en chambre',
      ratio: '16/10',
    }),
  ],
})
