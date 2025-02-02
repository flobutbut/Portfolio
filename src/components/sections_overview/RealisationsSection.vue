<template>
  <section class="realisations-section">
    <h3 class="h3">Réalisations détaillées</h3>
    <p class="subtitle md-regular">
      De meilleurs produits pour plus d'efficacité.
    </p>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "../ProjectCard.vue";

const projects = [
  {
    title: "Desoutter",
    description:
      "Mise ne place d'un design systeme et transformation des outils traditionnels en SaaS pour l'industrie du vissage",
  },
  {
    title: "Maif",
    description:
      "Améliorer l'expérience sociétaire grâce à des parcours plus fluides et l'ajout de services complémentaires en fin de service.",
  },
  {
    title: "Kisoigne",
    description:
      "Conception et design du service de mise en relation entre établissements de soins et personnels soignants.",
  },
  {
    title: "JP Racing",
    description:
      "Conception et design du service de mise en relation entre établissements de soins et personnels soignants.",
  },
];
</script>

<style scoped>
.realisations-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--space-md) * 2);
}

/* Tablettes */
@media (max-width: 1024px) {
  .realisations-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: 10%;
    padding-right: 10%;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(var(--space-md) * 2);
  }

  .subtitle {
    max-width: 600px;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .realisations-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 2);
    margin-top: var(--space-none);
  }

  .subtitle {
    max-width: 100%;
  }
}
</style>
