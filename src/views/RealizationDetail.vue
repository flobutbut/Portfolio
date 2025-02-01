<template>
  <div class="realization-detail">
    <button class="close-button" @click="goBack">
      <CloseIcon />
    </button>

    <main class="content" v-if="project">
      <!-- Rendu dynamique des sections -->
      <template v-for="sectionId in project.sections.order" :key="sectionId">
        <component
          :is="getSectionComponent(project.sections.content[sectionId].type)"
          v-bind="project.sections.content[sectionId].data"
        />
      </template>
    </main>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { MarkdownProjectParser } from "../utils/markdownParser";

import CloseIcon from "../components/icons/CloseIcon.vue";
import RealizationHero from "../components/sections_realization/RealizationHero.vue";
import HorizontalCarousel from "../components/sections_realization/HorizontalCarousel.vue";
import ArticleSection from "../components/sections_realization/ArticleSection.vue";
import ColumnsSection from "../components/sections_realization/ColumnsSection.vue";
import SingleImageSection from "../components/sections_realization/SingleImageSection.vue";
import CoteSection from "../components/sections_realization/CoteSection.vue";
import ParallaxImageSection from "../components/sections_realization/ParallaxImageSection.vue";

import ContactSection from "../components/sections/ContactSection.vue";

// Map des composants disponibles
const SECTION_COMPONENTS = {
  hero: RealizationHero,
  carousel: HorizontalCarousel,
  article: ArticleSection,
  columns: ColumnsSection,
  singleImage: SingleImageSection,
  parallaxImage: ParallaxImageSection, 
  quote: CoteSection,
} as const;

// Fonction pour obtenir le bon composant
const getSectionComponent = (type: string) => {
  return SECTION_COMPONENTS[type as keyof typeof SECTION_COMPONENTS] || null;
};

interface Props {
  returnRoute?: string;
  projectId: string;
}

const props = withDefaults(defineProps<Props>(), {
  returnRoute: "realizations",
});

const project = ref<ReturnType<MarkdownProjectParser["parseProject"]>>(null);
const router = useRouter();
const parser = new MarkdownProjectParser();

const loadProject = async () => {
  try {
    const modules = import.meta.glob("../content/projects/*.md", {
      as: "raw",
      eager: true,
    });

    // Trouver le module correspondant à l'ID du projet
    const projectEntry = Object.entries(modules).find(([path]) =>
      path.includes(props.projectId)
    );

    if (!projectEntry) {
      console.error("Project file not found");
      router.push({ name: "realizations" });
      return;
    }

    const [_, content] = projectEntry;
    const projectData = parser.parseProject(content as string);

    if (!projectData) {
      console.error("Failed to parse project data");
      router.push({ name: "realizations" });
      return;
    }

    project.value = projectData;
    console.log("Project loaded successfully:", projectData);
  } catch (error) {
    console.error("Error loading project:", error);
    router.push({ name: "realizations" });
  }
};

onMounted(() => {
  loadProject();
});

const goBack = () => {
  router.push({ name: props.returnRoute });
};
</script>

<style scoped>
.realization-detail {
  min-height: 100vh;
  background-color: var(--surface-back);
  position: relative;
}

.close-button {
  position: fixed;
  top: calc(var(--space-md) * 2);
  right: calc(var(--space-md) * 2);
  padding: var(--space-md);

  z-index: 100;

  background: none;
  border: none;
  color: var(--text-front);
  cursor: pointer;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: var(--surface-medium);
}

.content {
  color: var(--text-front);
}
</style>
