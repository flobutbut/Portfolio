<template>
  <component
    :is="tag"
    class="button"
    :class="[`button--${variant}`]"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener' : undefined"
  >
    <span class="button__label"><slot /></span>
    <span v-if="$slots.icon" class="button__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  to?: RouteLocationRaw
  href?: string
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
})

const tag = computed(() => (props.to ? 'router-link' : props.href ? 'a' : 'button'))
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  min-height: 44px;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-weight: 500;
  font-size: var(--fs-body);
  line-height: 1.2;
  color: var(--text-front);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.button:active {
  transform: translateY(1px);
}

.button--primary {
  background-color: var(--highlight-default);
}

.button--primary:hover {
  background-color: var(--highlight-hover);
}

.button--secondary {
  background-color: transparent;
  border-color: var(--border-strong);
}

.button--secondary:hover {
  border-color: var(--text-front);
  background-color: rgba(255, 255, 255, 0.04);
}

.button--ghost {
  padding-inline: var(--space-1);
  color: var(--text-medium);
}

.button--ghost:hover {
  color: var(--text-front);
}

.button__icon {
  display: inline-flex;
  transition: transform var(--duration-fast) var(--ease-out);
}

.button:hover .button__icon {
  transform: translateX(3px);
}
</style>
