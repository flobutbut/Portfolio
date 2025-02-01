<template>
  <div class="competence-section">
    <h3 class="h3">Compétences</h3>
    <p class="subtitle md-regular">
      J'identifie les problèmes, conçois des solutions et optimise les
      performances grâce à mon expertise en conception et stratégie UX/UI.
    </p>

    <div class="competence-container">
      <div class="skills-list">
        <SkillItem v-for="skill in technicalSkills" :key="skill" :text="skill">
          <template #icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </template>
        </SkillItem>
      </div>

      <div class="skills-list">
        <SkillItem v-for="skill in softSkills" :key="skill" :text="skill">
          <template #icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </template>
        </SkillItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillItem from "../SkillItem.vue";

const technicalSkills = [
  "Audit d'interface",
  "Recherche utilisateurs",
  "Design de service",
  "Design system",
  "Branding d'interface",
  "Stratégie produit",
  "Amélioration continue",
  "Roadmap produit",
  "Prototypage",
  "Outils d'analyse",
  "Gestion agile",
  "Accessibilité",
  "Gestion de projet",
];

const softSkills = [
  "Esprit critique et analytique",
  "Collaboration interdisciplinaire",
  "Communication claire et persuasive",
  "Empathie utilisateur",
  "Prise de décision stratégique",
  "Résolution de problèmes complexes",
  "Adaptabilité face au changement",
  "Organisation et gestion des priorités",
  "Gestion de compétences",
];
</script>

<style scoped>
.competence-section {
  color: var(--text-front);
  display: flex;
  flex-direction: column;

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-right: calc(var(--space-md) * 0);
  padding-left: calc(var(--space-md) * 10);
}

.subtitle {
  color: var(--text-medium);
  margin-bottom: calc(var(--space-md) * 2);
  max-width: 700px;
}

.competence-section h3 {
  margin-bottom: calc(var(--space-md) * 0);
}

.competence-container {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 8);
}

.skills-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Tablettes */
@media (max-width: 1024px) {
  .competence-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);

    padding-left: calc(var(--space-md) * 5);
    padding-right: calc(var(--space-md) * 0);
  }

  .competence-container {
    gap: calc(var(--space-md) * 6);
  }

  .subtitle {
    max-width: 600px;
  }
}

/* Mobile */
@media (max-width: 512px) {
  .competence-section {
    padding-top: calc(var(--space-md) * 4);
    padding-bottom: calc(var(--space-md) * 4);

    padding-left: calc(var(--space-md) * 3);
    padding-right: var(--space-none);
  }

  .competence-container {
    flex-direction: column;
    gap: calc(var(--space-md) * 4);
  }

  .subtitle {
    max-width: 100%;
    margin-bottom: calc(var(--space-md) * 4);
  }

}
</style>
