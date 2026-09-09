<template>
  <router-link
    class="realization-card"
    :to="{ name: 'realization', params: { id: project.id } }"
    :aria-label="`Voir le projet ${project.title}`"
  >
    <div class="realization-card__media">
      <img
        :src="project.cover"
        :alt="`Aperçu du projet ${project.title}`"
        loading="lazy"
        decoding="async"
        width="1440"
        height="900"
      />
      <span v-if="project.status === 'wip'" class="realization-card__badge">En cours de rédaction</span>
    </div>

    <div class="realization-card__body">
      <div class="realization-card__heading">
        <h3 class="h5">{{ project.title }}</h3>
        <ArrowIcon class="realization-card__arrow" />
      </div>
      <p class="md-regular">{{ project.description }}</p>
      <ul v-if="project.tags?.length" class="realization-card__tags" aria-label="Mots-clés">
        <li v-for="tag in project.tags" :key="tag" class="sm-regular">{{ tag }}</li>
      </ul>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import ArrowIcon from './icons/ArrowIcon.vue'
import type { Project } from '../content'

interface Props {
  project: Project
}

defineProps<Props>()
</script>

<style scoped>
.realization-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-radius: var(--radius-md);
  color: var(--text-medium);
}

.realization-card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-medium);
}

.realization-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform var(--duration-slow) var(--ease-out);
}

.realization-card:hover .realization-card__media img {
  transform: scale(1.03);
}

.realization-card__badge {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  padding: var(--space-xs) var(--space-1);
  border-radius: var(--radius-sm);
  background-color: rgba(19, 36, 48, 0.85);
  backdrop-filter: blur(6px);
  color: var(--text-front);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.realization-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.realization-card__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
}

.realization-card__arrow {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  opacity: 0;
  transform: translateX(-6px);
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out),
    color var(--duration-base) var(--ease-out);
}

.realization-card:hover .realization-card__arrow,
.realization-card:focus-visible .realization-card__arrow {
  opacity: 1;
  transform: none;
  color: var(--highlight-default);
}

.realization-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-1);
}

.realization-card__tags li {
  padding: 2px var(--space-1);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-medium);
  color: var(--text-muted);
  font-size: 12px;
}

@media (hover: none) {
  .realization-card__arrow {
    opacity: 1;
    transform: none;
  }
}
</style>
