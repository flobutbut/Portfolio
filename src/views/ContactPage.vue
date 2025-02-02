<template>
  <main class="contact-page">
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import ContactSection from "../components/sections/ContactSection.vue";
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: var(--surface-back);
  color: var(--text-front);
}
</style>
