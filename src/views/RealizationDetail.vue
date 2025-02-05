<template>
  <div class="realization-detail">
    <button class="close-button" @click="goBack">
      <CloseIcon />
    </button>

    <main class="content" v-if="project">
      <template v-if="project.sections">
        <template v-for="(section, index) in project.sections" :key="index">
          <component
            v-if="section.data" 
            :is="getSectionComponent(section.component)"
            v-bind="section.data"
          />
        </template>
      </template>
    </main>
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ContentParser } from "../utils/markdownParser";
import CloseIcon from "../components/icons/CloseIcon.vue";
import RealizationHero from "../components/sections_realization/RealizationHero.vue";
import HorizontalCarousel from "../components/sections_realization/HorizontalCarousel.vue";
import ArticleSection from "../components/sections_realization/ArticleSection.vue";
import ColumnsSection from "../components/sections_realization/ColumnsSection.vue";
import SingleImageSection from "../components/sections_realization/SingleImageSection.vue";
import CoteSection from "../components/sections_realization/CoteSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import ParallaxImageSection from "../components/sections_realization/ParallaxImageSection.vue";

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

const router = useRouter();
const parser = new ContentParser();
const project = ref<any>(null);

const loadProject = async () => {
  try {
    const isExperience = props.projectId.startsWith('exp-');
    const baseId = isExperience ? props.projectId.replace('exp-', '') : props.projectId;
    
    const modules = await import.meta.glob<string>("../content/**/*.md", {
      query: "?raw",
      eager: true,
      import: "default",
    });

    console.log('Recherche de l\'ID:', baseId);
    
    const projectEntry = Object.entries(modules).find(([path]) => {
      const matchesFolder = isExperience 
        ? path.includes('/experience/')
        : path.includes('/projects/');
      return matchesFolder && path.toLowerCase().includes(baseId.toLowerCase());
    });

    if (!projectEntry) {
      console.error("Fichier projet non trouvé");
      router.push({ name: "realizations" });
      return;
    }

    const [path, content] = projectEntry;
    console.log('Fichier trouvé:', path);
    
    const projectData = await parser.parseContent(content as string);
    console.log('Données projet parsées:', projectData);

    if (!projectData) {
      console.error("Échec de l'analyse des données du projet");
      router.push({ name: "realizations" });
      return;
    }

    project.value = projectData;
    console.log("Projet chargé avec succès:", project.value);
  } catch (error) {
    console.error("Erreur lors du chargement du projet:", error);
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
  padding-bottom: calc(var(--space-md) * 20);
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

:deep(.contact-section) {
  margin-top: calc(var(--space-md) * 25);
}
</style>

