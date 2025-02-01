<template>
  <section class="realization-hero">
    <div class="content-wrapper">
      <p class="client md-regular">{{ client }}</p>
      <h3 class="h3 title">{{ title }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  client: string;
  title: string;
}

defineProps<Props>();
</script>

<style scoped>
.realization-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background-color: var(--surface-back);
  padding-top: var(--space-none);
  padding-bottom: var(--space-none);

  padding-left: 15%;
  padding-right: 15%;
}

.content-wrapper {
  max-width: 800px;
}

.client {
  color: var(--text-medium);
}

.title {
  color: var(--text-front);
}

/* Tablettes */
@media (max-width: 1024px) {
  .realization-hero {
    min-height: 60vh;
    padding-top: calc(var(--space-md) * 8);
    padding-bottom: calc(var(--space-md) * 8);

    padding-left: 10%;
    padding-right: 25%;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .realization-hero {
    min-height: 50vh;
    padding-top: calc(var(--space-md) * 12);
    padding-bottom: calc(var(--space-md) * 6);

    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
