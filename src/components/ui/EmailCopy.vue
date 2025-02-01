<template>
  <div class="email-copy">
    <div class="email-input md-regular" :class="{ 'is-copied': isCopied }">{{ email }}</div>
    <button class="copy-button" @click="copyEmail">
      <span class="md-regular">Copier</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  email: string
}

const props = defineProps<Props>()
const isCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.email)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 1000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}
</script>

<style scoped>
.email-copy {
  display: flex;
  align-items: center;
  background-color: var(--surface-back);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.email-input {
  flex: 1;
  padding: var(--space-md) calc(var(--space-md) * 2);
  color: var(--text-medium);
}

.copy-button {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) calc(var(--space-md) * 4);
  background-color: var(--highlight-default);
  border: none;
  color: var(--text-front);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.copy-button:hover {
  background-color: var(--highlight-hover);
}


.email-input.is-copied {
  position: relative;
}

.email-input.is-copied::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--highlight-default);
  opacity: 0.2;
  animation: highlight 1s ease-out forwards;
}

@keyframes highlight {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
}


/* Mobile */
@media (max-width: 512px) {
  .email-copy {
    flex-direction: column;
    align-items: stretch;
    background-color: transparent;
  }

  .email-input {
    background-color: var(--surface-back);
    text-align: center;
    border-radius: var(--radius-sm);
    padding: calc(var(--space-md) * 2) calc(var(--space-md) * 2);
  }
  .email-input.is-copied::after {
    border-radius: var(--radius-sm);
  }

  .copy-button {
    margin-top: var(--space-md);
    justify-content: center;
    border-radius: var(--radius-sm);
  }
}
</style>