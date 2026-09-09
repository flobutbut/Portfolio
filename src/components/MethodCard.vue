<template>
  <article class="method-card">
    <div class="method-card__icon" aria-hidden="true">
      <slot name="icon"></slot>
    </div>
    <h3 class="h5">{{ title }}</h3>
    <p class="md-regular">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<style scoped>
.method-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  height: 100%;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background-color: var(--surface-medium);
  border: 1px solid var(--border-medium);
}

.method-card__icon {
  margin-bottom: var(--space-1);
  color: var(--text-medium);
}

.method-card__icon :deep(svg) {
  width: 100%;
  max-width: 224px;
  height: auto;
}

.method-card p {
  color: var(--text-medium);
}
</style>
