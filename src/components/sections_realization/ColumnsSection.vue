<template>
  <section class="columns section-detail">
    <div class="container">
      <div class="prose-column columns__grid" v-reveal>
        <div v-for="column in columns" :key="column.title" class="columns__item">
          <h2 class="h4">{{ column.title }}</h2>
          <ul class="columns__list">
            <li v-for="item in column.items" :key="item" class="md-regular">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Column } from '../../content'

interface Props {
  columns: Column[]
}

defineProps<Props>()
</script>

<style scoped>
.columns {
  padding-block: var(--space-4);
}

.columns__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-4);
}

.columns__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-left: var(--space-2);
  border-left: 2px solid var(--highlight-default);
}

.columns__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  color: var(--text-medium);
}
</style>
