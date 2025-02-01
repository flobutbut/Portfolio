# components/sections/MethodsSection.vue
<template>
  <div class="methods-section">
    <p class="subtitle md-regular">Méthodes</p>
    <h3 class="h3">
      Ce que j'apporte pour un design de vos produits plus impactant et plus
      efficace.
    </h3>

    <div class="methods-grid">
      <MethodCard
        v-for="method in methods"
        :key="method.title"
        :title="method.title"
        :description="method.description"
      >
        <template #icon>
          <component :is="method.icon" />
        </template>
      </MethodCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import MethodCard from "../MethodCard.vue";
import CollaborationIcon from "../icons/MethodeCollaborationIcon.vue"
import EmpathyIcon from "../icons/MethodeEmpathyIcon.vue"
import PlanificationIcon from "../icons/MethodePlanificationIcon.vue"
import PragmatismeIcon from "../icons/MethodePragmatismeIcon.vue"

const methods = [
  {
    title: "Pragmatisme",
    description:
      "J'évalue chaque solution selon ses conséquences pratiques, en se concentrant uniquement sur sa valeur d'usage. Les idées ne sont pas jugées vraies ou fausses, mais utiles ou non",
    icon: PragmatismeIcon, // Nous créerons ces icônes séparément
  },
  {
    title: "Collaboration",
    description:
      "Je crois en la force du collectif et du partage des expertises. Chaque projet est une opportunité d'enrichir mutuellement nos approches pour créer des solutions plus pertinentes et innovantes",
    icon: CollaborationIcon,
  },
  {
    title: "Empathie",
    description:
      "Il s'agit de comprendre les besoins pour proposer une solution adaptée pouvant à la fois simplifier l'usage et améliorer le ressenti de l'utilisateur",
    icon: EmpathyIcon,
  },
  {
    title: "Planification",
    description:
      "Personne ne peut tout faire d'un coup. Vos solutions doivent être testées et éprouvées. Je vous proposerai une vision stratégique et une planification de vos projets pour un déploiement optimal",
    icon: PlanificationIcon,
  },
];
</script>

<style scoped>
.methods-section {
  display: flex;
  flex-direction: column;

  padding-top: calc(var(--space-md) * 20);
  padding-bottom: calc(var(--space-md) * 10);
  padding-right: calc(var(--space-md) * 6);
  padding-left: calc(var(--space-md) * 10);

}

.subtitle {
  color: var(--text-medium);
  margin-bottom: var(--space-none);
}

.methods-section h3 {
  margin-bottom: calc(var(--space-md) * 4);
  max-width: 700px;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: calc(var(--space-md) * 2);
}

.methods-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.methods-item h4 {
  color: var(--text-front);
}

.methods-item p {
  color: var(--text-medium);
}

/* Tablettes */
@media (max-width: 1024px) {
  .methods-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-right: calc(var(--space-md) * 5);
    padding-left: calc(var(--space-md) * 5);
    gap: var(--space-none);
  }

  .methods-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .methods-section h3 {
    max-width: 600px;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .methods-section {
    padding-top: calc(var(--space-md) * 4);
    padding-bottom: calc(var(--space-md) * 4);
    
    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);
    gap: var(--space-none);
  }

  .methods-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 3);
  }

  .methods-section h3 {
    max-width: 100%;
  }
}
</style>
