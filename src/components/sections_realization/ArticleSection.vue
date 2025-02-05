# components/sections/ArticleSection.vue
<template>
  <section class="article-section">
    <div class="content-wrapper">
      <h4 class="h4">{{ title }}</h4>
      <p class="md-regular content">{{ content }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  content: string;
}

const props = defineProps<Props>();
console.log('ArticleSection props:', props); // Debug
</script>

<style scoped>
.article-section {
  padding-top: calc(var(--space-md) * 5);
  padding-bottom: calc(var(--space-md) * 2);

  padding-left: 35%;
  padding-right: 15%;
}

.content-wrapper {
  max-width: 600px;
}

.h4 {
  color: var(--text-front);
  margin-bottom: calc(var(--space-md) * 1);
}

.content {
  color: var(--text-medium);
  white-space: pre-wrap;
}

/* Tablettes */
@media (max-width: 1024px) {
  .article-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 20%;
    padding-right: 10%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .article-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
