<template>
  <section class="methods section">
    <div class="container">
      <header class="section-header" v-reveal>
        <p class="eyebrow">Méthodes</p>
        <h2 class="h2">
          Ce que j'apporte pour un design de vos produits plus impactant et plus efficace.
        </h2>
      </header>

      <div class="methods__grid">
        <MethodCard
          v-for="(method, index) in methods"
          :key="method.title"
          :title="method.title"
          :description="method.description"
          v-reveal="{ delay: index * 80 }"
        >
          <template #icon>
            <component :is="method.icon" />
          </template>
        </MethodCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MethodCard from '../MethodCard.vue'
import CollaborationIcon from '../icons/MethodeCollaborationIcon.vue'
import EmpathyIcon from '../icons/MethodeEmpathyIcon.vue'
import PlanificationIcon from '../icons/MethodePlanificationIcon.vue'
import PragmatismeIcon from '../icons/MethodePragmatismeIcon.vue'

const methods = [
  {
    title: 'Pragmatisme',
    description:
      "J'évalue chaque solution selon ses conséquences pratiques, en me concentrant sur sa valeur d'usage. Les idées ne sont pas jugées vraies ou fausses, mais utiles ou non.",
    icon: PragmatismeIcon,
  },
  {
    title: 'Collaboration',
    description:
      "Je crois en la force du collectif et du partage des expertises. Chaque projet est une opportunité d'enrichir mutuellement nos approches pour créer des solutions plus pertinentes et innovantes.",
    icon: CollaborationIcon,
  },
  {
    title: 'Empathie',
    description:
      "Il s'agit de comprendre les besoins pour proposer une solution adaptée, capable à la fois de simplifier l'usage et d'améliorer le ressenti de l'utilisateur.",
    icon: EmpathyIcon,
  },
  {
    title: 'Planification',
    description:
      'Personne ne peut tout faire d’un coup. Vos solutions doivent être testées et éprouvées. Je vous propose une vision stratégique et une planification de vos projets pour un déploiement optimal.',
    icon: PlanificationIcon,
  },
]
</script>

<style scoped>
.methods__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-2);
}

@media (max-width: 1024px) {
  .methods__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .methods__grid {
    grid-template-columns: 1fr;
  }
}
</style>
