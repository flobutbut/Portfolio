<template>
  <section class="strategy section">
    <div class="container">
      <header class="section-header" v-reveal>
        <p class="eyebrow">Approche</p>
        <h2 class="h2">Une vision produit, de la stratégie à l'interface.</h2>
      </header>

      <div class="strategy__blocks">
        <article
          v-for="(block, index) in blocks"
          :key="block.title"
          class="strategy__block"
          v-reveal="{ delay: index * 80 }"
        >
          <h3 class="h3 strategy__title">{{ block.title }}</h3>
          <div class="strategy__grid">
            <div v-for="item in block.items" :key="item.title" class="strategy__item">
              <h4 class="md-bold">{{ item.title }}</h4>
              <p class="md-regular">{{ item.text }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blocks = [
  {
    title: 'Vision & flexibilité',
    items: [
      {
        title: 'Environnement agile',
        text: "Chaque itération de sprint est une opportunité d'ajuster, tester et livrer des solutions alignées sur les objectifs stratégiques et les besoins des utilisateurs.",
      },
      {
        title: 'Stratégie produit',
        text: "J'intègre la vision stratégique et les objectifs business dans la roadmap design afin d'assurer une évolution cohérente et alignée avec votre entreprise.",
      },
    ],
  },
  {
    title: 'Écosystème & cohérence',
    items: [
      {
        title: 'Écosystème produits',
        text: 'Je conçois des écosystèmes produits harmonieux, assurant une cohérence graphique et ergonomique, ainsi qu’une interopérabilité optimale pour une expérience utilisateur fluide et évolutive.',
      },
      {
        title: 'Design system',
        text: 'Je mets en place des design systems pour garantir une unité visuelle et ergonomique entre vos produits. J’optimise également les processus de conception et de développement afin de vous faire gagner du temps.',
      },
    ],
  },
  {
    title: 'Optimisation & adaptation',
    items: [
      {
        title: "Outils d'analyse",
        text: 'J’analyse les données utilisateurs pour extraire des insights pertinents qui orientent les décisions stratégiques et optimisent la performance des produits.',
      },
      {
        title: 'Indicateurs de performance',
        text: "J'intègre des KPI pour évaluer l'efficacité des interfaces et ajuster les choix de conception en fonction des besoins réels des utilisateurs.",
      },
    ],
  },
]
</script>

<style scoped>
.strategy__blocks {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.strategy__block {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: var(--space-4) var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-medium);
}

.strategy__title {
  max-width: 14ch;
}

.strategy__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}

.strategy__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.strategy__item h4 {
  color: var(--text-front);
}

.strategy__item p {
  color: var(--text-medium);
}

@media (max-width: 1024px) {
  .strategy__block {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .strategy__title {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .strategy__blocks {
    gap: var(--space-6);
  }

  .strategy__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
</style>
