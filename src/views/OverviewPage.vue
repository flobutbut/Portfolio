<template>
  <main class="overview">
    <HeroSection />
    <ShowcaseSection />
    <MethodsSection />
    <CompetenceSection />
    <ExperienceSection />
    <StrategySection />
    <RealisationsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from "../components/sections_overview/HeroSection.vue";
import ShowcaseSection from "../components/sections_overview/ShowcaseSection.vue";
import MethodsSection from "../components/sections_overview/MethodsSection.vue";
import CompetenceSection from "../components/sections_overview/CompetenceSection.vue";
import ExperienceSection from "../components/sections_overview/ExperienceSection.vue";
import StrategySection from "../components/sections_overview/StrategySection.vue";
import RealisationsSection from "../components/sections_overview/RealisationsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
</script>

<style scoped>
.overview {
  padding-left: var(--space-none);
  padding-right: var(--space-none);

  color: var(--text-front);
}

/* Tablettes */
@media (max-width: 1024px) {
  .overview {
    padding-left: var(--space-none);
    padding-right: var(--space-none);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .overview {
    padding-left: var(--space-none);
    padding-right: var(--space-none);
  }
}
</style>
