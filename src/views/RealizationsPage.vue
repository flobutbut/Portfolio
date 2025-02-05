// Dans RealizationsPage.vue
<script setup lang="ts">
import { ref, onMounted } from "vue";
import RealizationCard from "../components/RealizationCard.vue";
import { ContentParser } from "../utils/markdownParser";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const projects = ref<Project[]>([]);
const parser = new ContentParser();

onMounted(async () => {
  try {
    const modules = (await import.meta.glob("../content/projects/*.md", {
      query: "?raw",
      import: "default",
      eager: true
    })) as Record<string, string>;

    console.log("Found modules:", Object.keys(modules));

    const loadedProjects = Object.entries(modules).map(([path, content]) => {
      console.log('Processing file:', path);
      const projectData = parser.parseForCard(content as string);
      console.log('Parsed data:', projectData);
      
      if (!projectData) return null;
      
      return {
        id: projectData.id,
        title: projectData.title,
        description: projectData.description,
        imageUrl: projectData.cover || '', // Utilise le cover comme imageUrl
      };
    }).filter(p => p !== null);

    console.log('Loaded projects:', loadedProjects);
    projects.value = loadedProjects;
  } catch (error) {
    console.error("Error loading projects:", error);
  }
});
</script>

<template>
  <main class="realizations-page">
    <header class="header">
      <h1 class="h1">Réalisations</h1>
      <p class="md-regular">
        Découvrez mes derniers projets en tant que Product Designer
      </p>
    </header>

    <div v-if="projects.length > 0" class="realizations-grid">
      <RealizationCard
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
      />
    </div>
    <p v-else>Chargement des projets...</p>
  </main>
</template>

<style scoped>
.realizations-page {
  padding-left: 15%;
  padding-right: 15%;

  min-height: 100vh;
}

.header {
  height: 70vh;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: var(--space-none);
}

.header h1 {
  color: var(--text-front);
}

.header p {
  color: var(--text-medium);
}

.realizations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: calc(var(--space-md) * 4);
  padding-bottom: calc(var(--space-md) * 20);
  margin: 0 auto;
}

/* Tablettes */
@media (max-width: 1024px) {
  .realizations-page {
    padding-left: 10%;
    padding-right: 10%;
    min-height: 100vh;
  }
  .realizations-grid {
    padding-bottom: calc(var(--space-md) * 15);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .realizations-page {
    padding-left: 6%;
    padding-right: 6%;
    min-height: 100vh;
  }

  .realizations-grid {
    grid-template-columns: 1fr;


    padding-bottom: calc(var(--space-md) * 15);
  }
}
</style>
