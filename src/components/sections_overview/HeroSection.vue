<template>
  <section class="hero section">
    <div class="container hero__inner">
      <p class="eyebrow" v-reveal>Florian Butour · Product Designer Senior</p>
      <h1 class="h1 hero__title" v-reveal="{ delay: 80 }">
        Expert en design d'interfaces pour solutions SaaS et B2B.
      </h1>
      <p class="lg-regular hero__lead" v-reveal="{ delay: 160 }">
        J'accompagne les équipes produit dans la conception d'outils métier clairs, cohérents
        et évolutifs : recherche utilisateur, design systems et stratégie produit.
      </p>
      <div class="hero__actions" v-reveal="{ delay: 240 }">
        <AppButton :to="{ name: 'realizations' }">
          Voir les réalisations
          <template #icon><ArrowIcon /></template>
        </AppButton>
        <AppButton variant="secondary" :to="{ name: 'contact' }">Me contacter</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '../ui/AppButton.vue'
import ArrowIcon from '../icons/ArrowIcon.vue'
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: min(72vh, 760px);
  padding-top: clamp(40px, 8vw, 96px);
  padding-bottom: clamp(40px, 8vw, 96px);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hero__title {
  max-width: 18ch;
}

.hero__lead {
  max-width: 60ch;
  color: var(--text-medium);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
    padding-top: var(--space-8);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
