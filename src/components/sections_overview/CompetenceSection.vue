<template>
  <section class="competences section">
    <div class="container">
      <header class="section-header" v-reveal>
        <p class="eyebrow">Savoir-faire</p>
        <h2 class="h2">Compétences</h2>
        <p class="md-regular">
          J'identifie les problèmes, conçois des solutions et optimise les performances grâce
          à mon expertise en conception et stratégie UX/UI.
        </p>
      </header>

      <div class="competences__grid">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="competences__group"
          v-reveal
        >
          <h3 class="h4 competences__group-title">{{ group.title }}</h3>
          <ul class="competences__list">
            <SkillItem
              v-for="(skill, index) in group.skills"
              :key="skill"
              :text="skill"
              v-reveal="{ delay: Math.min(index, 8) * 50 }"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillItem from '../SkillItem.vue'

const skillGroups = [
  {
    title: 'Expertises',
    skills: [
      "Audit d'interface",
      'Recherche utilisateur',
      'Design de service',
      'Design system',
      "Branding d'interface",
      "Mapping d'interface",
      'Stratégie produit',
      'Roadmap produit',
      'Amélioration continue',
      'Prototypage',
      "Outils d'analyse",
      'Accessibilité',
      'Gestion de projet',
      'Gestion agile',
    ],
  },
  {
    title: 'Savoir-être',
    skills: [
      'Esprit critique et analytique',
      'Collaboration interdisciplinaire',
      'Communication claire et persuasive',
      'Empathie utilisateur',
      'Prise de décision stratégique',
      'Résolution de problèmes complexes',
      'Adaptabilité face au changement',
      'Organisation et gestion des priorités',
      'Gestion des compétences',
    ],
  },
]
</script>

<style scoped>
.competences__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8);
}

.competences__group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.competences__group-title {
  padding-bottom: var(--space-1);
  border-bottom: 2px solid var(--highlight-default);
  width: fit-content;
}

.competences__list {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1024px) {
  .competences__grid {
    gap: var(--space-6);
  }
}

@media (max-width: 640px) {
  .competences__grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
}
</style>
