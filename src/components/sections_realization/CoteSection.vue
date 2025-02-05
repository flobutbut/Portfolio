# components/sections/CoteSection.vue
<template>
  <section class="cote-section">
    <div class="content-wrapper">
      <h3 class="h3">{{ content }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  content: string;
}

const props = withDefaults(defineProps<Props>(), {
  content: ''
});
console.log('CoteSection props:', props); // Debug
</script>

<style scoped>
.cote-section {
  padding-top: calc(var(--space-md) * 5);
  padding-bottom: calc(var(--space-md) * 2);

  padding-left: 35%;
  padding-right: 15%;
}

.content-wrapper {
  max-width: 600px;
}

.h3 {
  color: var(--text-front);
  margin-bottom: calc(var(--space-md) * 1);
  padding-left: calc(var(--space-md)*2);
  border-left: solid 2px var(--border-medium);
}

.content {
  color: var(--text-medium);
  white-space: pre-wrap;
}

/* Tablettes */
@media (max-width: 1024px) {
  .cote-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 20%;
    padding-right: 10%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .cote-section {
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
