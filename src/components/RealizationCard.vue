<template>
  <div class="realization-card" @click="navigateToDetail">
    <div class="image-container">
      <img :src="imageUrl" :alt="title" class="card-image" />
    </div>
    <div class="content">
      <h5 class="h5">{{ title }}</h5>
      <p class="md-regular">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const props = defineProps<Props>();
const router = useRouter();

const navigateToDetail = () => {
  router.push({
    name: 'realization',
    params: { id: props.id },
    query: { from: router.currentRoute.value.name as string }
  });
};
</script>

<style scoped>
.realization-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
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

.content h5 {
  color: var(--text-front);
}

.content p {
  color: var(--text-medium);
}
</style>