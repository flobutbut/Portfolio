<template>
  <div class="skill-item">
    <div class="skill-icon">
      <CircleCheckIcon />
    </div>
    <p class="md-regular">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import CircleCheckIcon from './icons/CircleCheckIcon.vue'

interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped>
.skill-item {
  display: flex;
  align-items: center;
  gap: calc(var(--space-md) );
  padding: calc(var(--space-md) * 1.5) 0;
  border-bottom: 1px solid var(--border-medium);
}

.skill-icon {
  color: var(--text-medium);
  display: flex;
  align-items: center;
}

.skill-item p {
  color: var(--text-front);
}
</style>