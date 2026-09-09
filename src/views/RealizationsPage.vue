<template>
  <main id="main" class="realizations">
    <section class="realizations__hero section">
      <div class="container">
        <p class="eyebrow" v-reveal>Portfolio</p>
        <h1 class="h1 realizations__title" v-reveal="{ delay: 80 }">Réalisations</h1>
        <p class="lg-regular realizations__lead" v-reveal="{ delay: 160 }">
          Une sélection de projets menés en tant que Product Designer : applications SaaS,
          outils métier et design systems.
        </p>
      </div>
    </section>

    <section class="section realizations__list">
      <div class="container">
        <div class="realizations__grid">
          <RealizationCard
            v-for="(project, index) in projects"
            :key="project.id"
            :project="project"
            v-reveal="{ delay: (index % 2) * 80 }"
          />
        </div>
      </div>
    </section>

    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import RealizationCard from '../components/RealizationCard.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import { projects } from '../content'
</script>

<style scoped>
.realizations__hero {
  padding-top: clamp(48px, 10vw, 112px);
  padding-bottom: clamp(24px, 4vw, 48px);
}

.realizations__hero .container {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.realizations__lead {
  max-width: 56ch;
  color: var(--text-medium);
}

.realizations__list {
  padding-top: var(--space-4);
}

.realizations__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8) var(--space-4);
}

@media (max-width: 640px) {
  .realizations__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
}
</style>
