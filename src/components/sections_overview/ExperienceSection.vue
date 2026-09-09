<template>
  <section class="experiences section">
    <div class="container">
      <header class="section-header" v-reveal>
        <p class="eyebrow">Parcours</p>
        <h2 class="h2">Expériences professionnelles</h2>
        <p class="md-regular">Plus de 10 ans d'expérience en conception de produits numériques.</p>
      </header>

      <div class="experiences__grid">
        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="experience.id"
          :experience="experience"
          v-reveal="{ delay: index * 100 }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceCard from '../ExperienceCard.vue'
import { experiences } from '../../content'
</script>

<style scoped>
.experiences__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-2);
}

@media (max-width: 640px) {
  .experiences__grid {
    grid-template-columns: 1fr;
  }
}
</style>
