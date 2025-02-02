// Dans RealizationsPage.vue
<script setup lang="ts">
import { ref, onMounted } from "vue";
import RealizationCard from "../components/RealizationCard.vue";
import { MarkdownProjectParser } from "../utils/markdownParser";

interface Project {
  id: string;
  card: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

const projects = ref<Project[]>([]);
const parser = new MarkdownProjectParser();

onMounted(async () => {
  try {
    const modules = (import.meta as any).glob("../content/projects/*.md", {
      query: "?raw",
      eager: true,
      import: "default",
    });

    console.log("Loaded modules:", modules);

    const loadedProjects = Object.entries(modules).map(([path, content]) => {
      const projectData = parser.parseProject(content as string);
      if (!projectData) {
        console.warn("Failed to parse project:", path);
        return null;
      }

      return {
        id: projectData.id,
        card: projectData.card,
      };
    });

    projects.value = loadedProjects.filter((p): p is Project => p !== null);
    console.log("Final projects:", projects.value);
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
        :id="project.id"
        :title="project.card.title"
        :description="project.card.description"
        :imageUrl="project.card.imageUrl"
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
