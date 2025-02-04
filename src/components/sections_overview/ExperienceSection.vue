<template>
  <section class="experience-section">
    <h3 class="h3">Expériences professionnelles</h3>
    <p class="subtitle md-regular">Plus de 10 ans d'expérience en conception de produits</p>

    <div class="experience-grid">
      <ExperienceCard
        v-for="experience in experiences"
        :key="experience.id"
        v-bind="experience"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from "../ExperienceCard.vue";
const experiences = [
  {
    id: 'sharingcloud',
    title: "SharingCloud",
    role: "Product designer - 2 ans",
    description: "Refonte des produits de l'écosystème SharingCloud et mise en place d'un design system."
  },
  {
    id: 'freelance',
    title: "Freelance",
    role: "Product designer - 9 ans",
    description: "Conception et accompagnement sur des services SaaS B2B..."
  }
];
</script>

<style scoped>
.experience-section {
  display: flex;
  flex-direction: column;

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-right: 15%;
  padding-left: 15%;
}

.subtitle {
  color: var(--text-medium);
  max-width: 700px;
  margin-bottom: calc(var(--space-md) * 4);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--space-md) * 2);
}

/* Tablettes */
@media (max-width: 1024px) {
  .experience-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: 10%;
    padding-right: 10%;
  }

  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--space-md) * 2);
  }

  .subtitle {
    max-width: 600px;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .experience-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);
  }

  .experience-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 2);
    margin-top: var(--space-none);
  }

  .subtitle {
    max-width: 100%;
  }
}
</style>
