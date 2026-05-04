<template>
  <section class="article-section">
    <div class="content-wrapper">
      <h4 class="h4">{{ title }}</h4>
      <div class="md-regular content" v-html="formattedContent"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MarkdownIt from 'markdown-it';

interface Props {
  title: string;
  content: string;
}

const props = defineProps<Props>();

const md = new MarkdownIt({ breaks: true });

const formattedContent = computed(() => md.render(props.content));
</script>

<style scoped>
.article-section {
  padding-top: calc(var(--space-md) * 5);
  padding-bottom: calc(var(--space-md) * 2);

  padding-left: 35%;
  padding-right: 15%;
}

.h4 {
  color: var(--text-front);
  margin-bottom: calc(var(--space-md) * 1);
}

.content {
  color: var(--text-medium);
}

.content :deep(p) {
  margin-bottom: var(--space-md);
}

.content :deep(ul) {
  margin-bottom: var(--space-md);
  padding-left: 0;
}

.content :deep(li) {
  position: relative;
  padding-left: calc(var(--space-md) * 2);
  margin-bottom: var(--space-sm);
  list-style: none;
}

.content :deep(li)::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--text-medium);
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5) {
  color: var(--text-front);
  margin-top: calc(var(--space-md) * 2);
  margin-bottom: var(--space-none);
}

.content :deep(strong) {
  font-weight: 600;
  color: var(--text-front);
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
