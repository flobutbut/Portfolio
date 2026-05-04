<template>
  <section class="columns-section">
    <div class="columns-wrapper">
      <!-- Colonne de gauche -->
      <div class="column left-column">
        <h4 class="h4">{{ left.title }}</h4>
        <ul class="custom-list">
          <li v-for="(item, index) in left.items" 
              :key="index" 
              class="md-regular">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Colonne de droite -->
      <div class="column right-column">
        <h4 class="h4">{{ right.title }}</h4>
        <ul class="custom-list">
          <li v-for="(item, index) in right.items" 
              :key="index" 
              class="md-regular">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Column {
  title: string;
  items: string[];
}

interface Props {
  left: Column;
  right: Column;
}

const props = defineProps<Props>();
</script>

<style scoped>
.columns-section {
  padding-top: calc(var(--space-md) * 5);
  padding-bottom: calc(var(--space-md) * 5);

  padding-left: 35%;
  padding-right: 15%;
}

.columns-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(var(--space-md) * 4);
  margin: 0 auto;
}

.column {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding-left: calc(var(--space-md)*2);
  border-left: solid 2px var(--border-medium);
}

.h4 {
  color: var(--text-front);
}

.md-regular {
  color: var(--text-medium);
  white-space: pre-wrap;
}

.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.column-list {
  list-style: none;
  padding-left: 0;
}

.column-list li {
  margin-bottom: var(--space-md);
  color: var(--text-medium);
}

/* Tablettes */
@media (max-width: 1024px) {
  .columns-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 20%;
    padding-right: 10%;
  }

  .columns-wrapper {
    gap: calc(var(--space-md) * 6);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .columns-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 10%;
    padding-right: 10%;
  }

  .columns-wrapper {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 6);
  }
}
</style>
