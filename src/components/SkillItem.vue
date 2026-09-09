<template>
  <li class="skill-item">
    <CircleCheckIcon class="skill-item__icon" />
    <span class="md-regular">{{ text }}</span>
  </li>
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
  gap: var(--space-2);
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--border-medium);
  color: var(--text-front);
}

.skill-item__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--highlight-default);
}
</style>
