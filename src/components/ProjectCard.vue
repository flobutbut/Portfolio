# components/ProjectCard.vue
<template>
  <div class="project-card">
    <h4 class="h4">{{ title }}</h4>
    <p class="md-regular">{{ description }}</p>
    <Button class="card-button">
      Voir l'étude de cas
      <template #icon>
        <ArrowIcon />
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue'
import ArrowIcon from './icons/ArrowIcon.vue'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: calc(var(--space-md) * 3);
  background-color: var(--surface-medium);
  border-radius: var(--radius-md);
}

.project-card h3 {
  color: var(--text-front);
}

.project-card p {
  color: var(--text-medium);
}

.card-button {
  margin-top: auto;
  align-self: flex-start;
}
</style>

