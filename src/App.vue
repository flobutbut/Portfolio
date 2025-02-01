<template>
  <div class="app">
    <template v-if="!isBlankLayout">
      <NavBar />
      <router-view />
      <Footer />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
  <!-- comment -->
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/sections/NavBar.vue'
import Footer from './components/sections/Footer.vue'
// import { Analytics } from '@vercel/analytics/vue'

const route = useRoute()
const isBlankLayout = computed(() => route.meta.layout === 'blank')

watch(
  () => route.path,
  (newPath) => {
    console.log('Route changed to:', newPath)
  },
  { immediate: true }
)
</script>
<style>
.app {
  background-color: var(--surface-back);
  min-height: 100vh;
}
</style>