<template>
  <button class="button">
    <slot>Button</slot>
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-md);
  background-color: var(--highlight-default);
  color: var(--text-front);
  padding: var(--space-md) calc(var(--space-md) * 2);
  border: none;
  border-radius: var(--radius-sm);
  font-family: 'Inter';
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: var(--highlight-hover);
}
</style>