# components/sections/ExperienceSection.vue
<template>
  <div class="experience-section">
    <h3 class="h3">Expérience</h3>
    <p class="subtitle md-regular">
        Je conçois des solutions UX/UI guidées par une vision stratégique pour résoudre des problèmes, optimiser les performances et créer des expériences impactantes.
    </p>
    
    <div class="logos-container">
      <div v-for="company in companies" :key="company.name" class="logo-card">
        <img :src="company.logo" :alt="company.name">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  {
    name: 'Desoutter',
    logo: '../assets/logos/desoutter.svg'
  },
  {
    name: 'Polysoude',
    logo: '../assets/logos/polysoude.svg'
  },
  {
    name: 'Impact Track',
    logo: '../assets/logos/impact-track.svg'
  },
  {
    name: 'MAIF',
    logo: '../assets/logos/maif.svg'
  },
  {
    name: 'Sharingcloud',
    logo: '../assets/logos/sharingcloud.svg'
  }
]
</script>

<style scoped>
.experience-section {
  display: flex;
  flex-direction: column;
  color: var(--text-front);
  
  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);
  
  padding-right: calc(var(--space-md) * 5);
  padding-left: calc(var(--space-md) * 10);
}

.subtitle {
  color: var(--text-medium);
  margin-bottom: calc(var(--space-md) * 4);
  max-width: 700px;
}

.logos-container {
  display: flex;
  gap: calc(var(--space-md) * 2);
  overflow-x: auto;
  padding: var(--space-md) 0;
}

.logo-card {
  flex: 0 0 154px;
  background: var(--surface-bright);
  border-radius: var(--radius-sm);
  padding: var(--space-none);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
}

.logo-card img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

/* Tablettes */
@media (max-width: 1024px) {
  .experience-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-right: calc(var(--space-md) * 3);
    padding-left: calc(var(--space-md) * 5);
    gap: 0px;
  }

  .subtitle {
    max-width: 600px;
  }

  .logo-card {
    flex: 0 0 140px;
    min-height: 56px;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .experience-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);
  }

  .subtitle {
    max-width: 100%;
    margin-bottom: calc(var(--space-md) * 4);
  }

  .logo-card {
    flex: 0 0 128px;
    min-height: 48px;
  }

  .logos-container {
    gap: var(--space-md);
  }
}
</style>