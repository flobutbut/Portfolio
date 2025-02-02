<template>
  <div class="method-card">
    <div class="method-icon">
      <slot name="icon"></slot>
    </div>
    <h3 class="md-bold">{{ title }}</h3>
    <p class="md-regular">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped>
.method-card {
  background-color: var(--surface-medium);
  border-radius: var(--radius-md);
  padding: calc(var(--space-md) * 3);
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 2);
}

.method-icon {
  color: var(--text-medium);
  margin-bottom: var(--space-md);
  width: 100%; /* Prend toute la largeur disponible */
  height: auto; /* La hauteur s'adapte */
  display: flex;
}


.method-card h3 {
  color: var(--text-front);
}

.method-card p {
  color: var(--text-medium);
}
</style>