# components/ProjectCard.vue
<template>
  <div class="experience-card">
    <h4 class="h4">{{ title }}</h4>
    <p class="md-regular">{{ role }}</p>
    <p class="md-regular description">{{ description }}</p>

    <Button class="card-button" @click="goToDetail">
      Voir l'expérience
      <template #icon>
        <ArrowIcon />
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from './ui/Button.vue'
import ArrowIcon from './icons/ArrowIcon.vue'
import { useRouter } from 'vue-router'

interface Props {
  title: string
  description: string
  role: string
}

const props = defineProps<Props>()
const router = useRouter()
const goToDetail = () => {
  router.push({ name: 'realization', params: { id: props.title.toLowerCase() }})
}
</script>

<style scoped>
.experience-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-none);
  padding: calc(var(--space-md) * 3);
  background-color: var(--surface-medium);
  border-radius: var(--radius-md);
  min-height: 304px;
}

.experience-card h3 {
  color: var(--text-front);
}

.experience-card p {
  color: var(--text-medium);
}

.description{
  margin-top: calc(var(--space-md) * 2);
}

.card-button {
  margin-top: auto;
  align-self: flex-start;
}
</style>

