<template>
  <div class="app">
    <a href="#main" class="skip-link">Aller au contenu</a>
    <AppNavBar v-if="!isBlankLayout" />

    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <AppFooter v-if="!isBlankLayout" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavBar from './components/sections/AppNavBar.vue'
import AppFooter from './components/sections/AppFooter.vue'

const route = useRoute()
const isBlankLayout = computed(() => route.meta.layout === 'blank')
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--surface-back);
}

.app > main {
  flex: 1;
}

.skip-link {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  z-index: 1000;
  padding: var(--space-1) var(--space-2);
  background-color: var(--highlight-default);
  color: var(--text-front);
  border-radius: var(--radius-sm);
  transform: translateY(-200%);
  transition: transform var(--duration-fast) var(--ease-out);
}

.skip-link:focus-visible {
  transform: none;
}
</style>
