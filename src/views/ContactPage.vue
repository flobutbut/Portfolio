<template>
    <main class="contact-page">
      <ContactSection />
    </main>
  </template>
  
  <script setup lang="ts">
  import ContactSection from '../components/sections/ContactSection.vue'
  </script>
  
  <style scoped>
  .contact-page {
    width: 100%;
    min-height: 100vh;
    background-color: var(--surface-back);
    color: var(--text-front);
    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);
  }
  </style>