<template>
  <article class="experience-card">
    <div class="experience-card__header">
      <h3 class="h4">{{ experience.title }}</h3>
      <p class="sm-regular experience-card__meta">
        {{ experience.role }} · {{ experience.duration }}
      </p>
    </div>
    <p class="md-regular experience-card__description">{{ experience.description }}</p>

    <AppButton
      variant="secondary"
      class="experience-card__button"
      :to="{ name: 'experience', params: { id: experience.id } }"
    >
      Voir l'expérience
      <template #icon>
        <ArrowIcon />
      </template>
    </AppButton>
  </article>
</template>

<script setup lang="ts">
import AppButton from './ui/AppButton.vue'
import ArrowIcon from './icons/ArrowIcon.vue'
import type { Experience } from '../content'

interface Props {
  experience: Experience
}

defineProps<Props>()
</script>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  height: 100%;
  padding: var(--space-4);
  background-color: var(--surface-medium);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-md);
  transition:
    border-color var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out);
}

.experience-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.experience-card__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.experience-card__meta {
  color: var(--text-muted);
}

.experience-card__description {
  color: var(--text-medium);
}

.experience-card__button {
  margin-top: auto;
  align-self: flex-start;
  padding-top: var(--space-1);
}

@media (max-width: 640px) {
  .experience-card {
    padding: var(--space-3);
  }
}
</style>
