<template>
  <section class="single-image-section">
    <div class="image-container">
      <img :src="imageUrl" :alt="alt || ''" class="image" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  alt?: string;
}

defineProps<Props>();
</script>

<style scoped>
.single-image-section {
  display: flex;
  justify-content: flex-end;

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  /* padding-right: calc(var(--space-md) * 0); */
  padding-right: 15%;
}

.image-container {
  width: calc(420px * 1.8); /* 16/10 ratio basé sur height 480px */
  height: 420px;
  background-color: var(--highlight-default);
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

/* Tablettes */
@media (max-width: 1024px) {
  .single-image-section {
    justify-content: center;

    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 10%;
    padding-right: 0;
  }

  .image-container {
    width: 100%;
    height: auto;
    aspect-ratio: 16/10;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .single-image-section {
    padding-left: 10%;
    padding-right: 0;
  }
}
</style>
