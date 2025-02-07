<template>
  <section class="single-image-section">
    <div class="image-container">
      <img :src="imageUrl" :alt="description" class="image" />
      <!-- Debug info -->
      <div style="color: red;">
        URL: {{ imageUrl }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string;
  description: string;
}

const props = defineProps<Props>();

// Debug logs
console.log('SingleImageSection props:', props);
console.log('Image URL:', props.imageUrl);

// Destructure les propriétés du content
const { imageUrl, description } = props;
</script>

<style scoped>
.single-image-section {
  display: flex;
  justify-content: flex-end;

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-right: 15%;
}

.image-container {
  width: calc(420px * 1.8);
  height: fit-content; /* au lieu de height fixe */
  max-height: 420px;
  background-color: var(--highlight-default);
  overflow: hidden;
  border-radius: 6px;

}

.image {
  width: 100%;
  height: auto; /* au lieu de 100% */
  object-fit: contain;
}

/* Tablettes */
@media (max-width: 1024px) {
  .single-image-section {
    justify-content: center;

    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);

    padding-left: 10%;
    padding-right: O;
  }

  .image-container {
    width: 100%;
    max-width: 800px;
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
  .image-container {
    width: 100%;
    max-width: 800px;
    height: auto;
    aspect-ratio: 16/10;
    border-radius: 6px 0 0 6px;
  }

}
</style>
