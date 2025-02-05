<template>
  <section class="experience-section">
    <h3 class="h3">Expériences professionnelles</h3>
    <p class="subtitle md-regular">Plus de 10 ans d'expérience en conception de produits</p>

    <div class="experience-grid">
      <template v-if="experiences.length > 0">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.id"
          v-bind="experience"
        />
      </template>
      <p v-else>Chargement des expériences...</p>
    </div>
  </section>
</template>

<script setup lang="ts">  
import { ref, onMounted } from "vue";
import ExperienceCard from "../ExperienceCard.vue";
import { ContentParser } from "../../utils/markdownParser";

const experiences = ref<any[]>([]);
const parser = new ContentParser();
onMounted(async () => {
  try {
    const modules = import.meta.glob('../../content/experience/exp-*.md', {
      query: '?raw',
      import: 'default',
      eager: true
    });

    console.log('Found modules:', Object.keys(modules));

    const loadedExperiences = Object.entries(modules).map(([path, content]) => {
      console.log('Processing file:', path);
      const expData = parser.parseForCard(content as string);
      console.log('Parsed data:', expData);
      
      if (!expData) return null;
      
      return {
        id: expData.id,
        title: expData.title,
        role: expData.role,
        description: expData.description,
      };
    }).filter(e => e !== null);

    console.log('Loaded experiences:', loadedExperiences);
    experiences.value = loadedExperiences;
  } catch (error) {
    console.error('Error loading experiences:', error);
  }
});
</script>

<style scoped>
.experience-section {
  display: flex;
  flex-direction: column;

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-right: 15%;
  padding-left: 15%;
}

.subtitle {
  color: var(--text-medium);
  max-width: 700px;
  margin-bottom: calc(var(--space-md) * 4);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--space-md) * 2);
}

/* Tablettes */
@media (max-width: 1024px) {
  .experience-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: 10%;
    padding-right: 10%;
  }

  .experience-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--space-md) * 2);
  }

  .subtitle {
    max-width: 600px;
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

  .experience-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 2);
    margin-top: var(--space-none);
  }

  .subtitle {
    max-width: 100%;
  }
}
</style>
