<template>
  <main id="main" class="contact-page">
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import ContactSection from '../components/sections/ContactSection.vue'
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
}
</style>
