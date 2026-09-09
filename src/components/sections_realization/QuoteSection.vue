<template>
  <section class="quote section-detail">
    <div class="container">
      <figure class="prose-column quote__figure" v-reveal>
        <blockquote class="h3 quote__text">{{ text }}</blockquote>
        <figcaption v-if="author" class="sm-regular quote__author">— {{ author }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  text: string
  author?: string
}

defineProps<Props>()
</script>

<style scoped>
.quote {
  padding-block: var(--space-5);
}

.quote__figure {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-left: var(--space-3);
  border-left: 3px solid var(--highlight-default);
}

.quote__text {
  color: var(--text-front);
}

.quote__author {
  color: var(--text-muted);
}
</style>
