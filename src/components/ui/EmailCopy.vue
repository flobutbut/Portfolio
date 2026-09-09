<template>
  <div class="email-copy" :class="{ 'is-copied': isCopied }">
    <a :href="`mailto:${email}`" class="email-copy__value md-regular">{{ email }}</a>
    <button
      type="button"
      class="email-copy__button"
      :aria-label="isCopied ? 'Adresse copiée' : `Copier l'adresse ${email}`"
      @click="copyEmail"
    >
      <span class="email-copy__button-label" aria-live="polite">
        {{ isCopied ? 'Copié' : 'Copier' }}
      </span>
      <CheckIcon v-if="isCopied" class="email-copy__check" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import CheckIcon from '../icons/CheckIcon.vue'

interface Props {
  email: string
}

const props = defineProps<Props>()
const isCopied = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.email)
    isCopied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      isCopied.value = false
    }, 1800)
  } catch (error) {
    console.error("Impossible de copier l'adresse :", error)
  }
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<style scoped>
.email-copy {
  display: flex;
  align-items: stretch;
  background-color: var(--surface-medium);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: border-color var(--duration-fast) var(--ease-out);
}

.email-copy.is-copied {
  border-color: var(--highlight-default);
}

.email-copy__value {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: var(--space-1) var(--space-2);
  color: var(--text-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color var(--duration-fast) var(--ease-out);
}

.email-copy__value:hover {
  color: var(--text-front);
}

.email-copy__button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  min-height: 44px;
  min-width: 108px;
  justify-content: center;
  padding: var(--space-1) var(--space-3);
  background-color: var(--highlight-default);
  color: var(--text-front);
  font-weight: 500;
  transition: background-color var(--duration-fast) var(--ease-out);
}

.email-copy__button:hover {
  background-color: var(--highlight-hover);
}

.email-copy__check {
  width: 18px;
  height: 18px;
}

@media (max-width: 640px) {
  .email-copy {
    flex-direction: column;
  }

  .email-copy__value {
    justify-content: center;
    padding-block: var(--space-2);
  }
}
</style>
