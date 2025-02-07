# components/sections/ArticleSection.vue
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

interface Props {
  title: string;
  content: string;
}

const props = defineProps<Props>();
console.log('ArticleSection props:', props); // Debug

// Formatage amélioré du markdown avec support du gras et des sous-titres
const formattedContent = computed(() => {
  let inList = false;
  return props.content
    .split('\n')
    .map(line => {
      const trimmedLine = line.trim();
      
      // Traitement du texte en gras
      const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Traitement des sous-titres
      if (trimmedLine.startsWith('# ')) {
        return `<h5 class="h5">${formattedLine.substring(2)}</h5>`;
      }
      
      // Début d'une liste
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          inList = true;
          return '<ul>' + `<li>${formattedLine.substring(2)}</li>`;
        }
        return `<li>${formattedLine.substring(2)}</li>`;
      }
      // Fin de liste et début d'un paragraphe normal
      if (inList && trimmedLine && !trimmedLine.startsWith('- ')) {
        inList = false;
        return '</ul>' + `<p>${formattedLine}</p>`;
      }
      // Paragraphe normal
      if (!inList && trimmedLine) {
        return `<p>${formattedLine}</p>`;
      }
      // Ligne vide dans une liste
      if (inList && !trimmedLine) {
        inList = false;
        return '</ul>';
      }
      // Ligne vide hors liste
      return '';
    })
    .join('') + (inList ? '</ul>' : '');
});
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
  white-space: pre-wrap;
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
