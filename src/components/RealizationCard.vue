# components/RealizationCard.vue
<template>
  <router-link :to="{ name: 'realization', params: { id: id }}" class="realization-card">
    <div class="image-container">
      <img :src="imageUrl" :alt="title" class="card-image" />
    </div>
    <div class="content">
      <h4 class="h4">{{ title }}</h4>
      <p class="md-regular">{{ description }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
  description: string
  imageUrl: string
}

defineProps<Props>()
</script>

<style scoped>
.realization-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease;

  margin-bottom: calc(var(--space-md) * 4);
}

.realization-card:hover {
  transform: translateY(-4px);
}

.image-container {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: var(--highlight-default);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--space-md);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-none);
}

.content h4 {
  color: var(--text-front);
}

.content p {
  color: var(--text-medium);
}
</style>