<template>
  <section class="detail-hero section">
    <div class="container detail-hero__inner">
      <p class="eyebrow" v-reveal>{{ eyebrow }}</p>
      <h1 class="h1 detail-hero__title" v-reveal="{ delay: 80 }">{{ entry.headline }}</h1>

      <ul v-if="tags.length" class="detail-hero__tags" aria-label="Mots-clés" v-reveal="{ delay: 160 }">
        <li v-for="tag in tags" :key="tag" class="sm-regular">{{ tag }}</li>
      </ul>

      <p v-if="entry.status === 'wip'" class="detail-hero__notice sm-regular" v-reveal="{ delay: 200 }">
        Étude de cas en cours de rédaction.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Entry } from '../../content'

interface Props {
  entry: Entry
}

const props = defineProps<Props>()

const eyebrow = computed(() =>
  props.entry.kind === 'project'
    ? props.entry.client
    : `${props.entry.company} · ${props.entry.role} · ${props.entry.duration}`,
)

const tags = computed(() => (props.entry.kind === 'project' ? (props.entry.tags ?? []) : []))
</script>

<style scoped>
.detail-hero {
  display: flex;
  align-items: center;
  min-height: min(56vh, 560px);
  padding-top: clamp(96px, 14vw, 140px);
  padding-bottom: clamp(32px, 6vw, 64px);
}

.detail-hero__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.detail-hero__title {
  max-width: 22ch;
}

.detail-hero__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.detail-hero__tags li {
  padding: 2px var(--space-1);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
}

.detail-hero__notice {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  width: fit-content;
  padding: var(--space-xs) var(--space-2);
  border-radius: var(--radius-sm);
  background-color: var(--highlight-soft);
  color: var(--text-front);
}

@media (max-width: 640px) {
  .detail-hero {
    min-height: auto;
    padding-top: var(--space-12);
  }
}
</style>
