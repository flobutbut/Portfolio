<template>
  <div class="competence-section">
    <h3 class="h3">Compétences</h3>
    <p class="subtitle md-regular">
      J'identifie les problèmes, conçois des solutions et optimise les
      performances grâce à mon expertise en conception et stratégie UX/UI.
    </p>

    <div class="competence-container">
      <div class="skills-list">
        <SkillItem 
          v-for="(skill, index) in technicalSkills" 
          :key="skill" 
          :text="skill"
          class="skill-fade"
          :style="{ '--delay': `${index * 100}ms` }"
          :ref="(el) => { if (el) technicalSkillRefs[index] = el }"
        >
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
        <SkillItem 
          v-for="(skill, index) in softSkills" 
          :key="skill" 
          :text="skill"
          class="skill-fade"
          :style="{ '--delay': `${(index + technicalSkills.length) * 100}ms` }"
          :ref="(el) => { if (el) softSkillRefs[index] = el }"
        >
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SkillItem from "../SkillItem.vue"

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
]

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
]

const technicalSkillRefs = ref<any[]>([])
const softSkillRefs = ref<any[]>([])
let observer: IntersectionObserver | null = null

// Fonction pour animer l'apparition/disparition séquentiellement
const animateSequentially = (elements: Element[], entering: boolean) => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      if (entering) {
        element.classList.add('visible')
      } else {
        element.classList.remove('visible')
      }
    }, index * 100) // 100ms de délai entre chaque élément
  })
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    // Regrouper les entrées par direction (entrante ou sortante)
    const entering = entries.filter(entry => entry.isIntersecting)
    const exiting = entries.filter(entry => !entry.isIntersecting)

    // Trier les éléments par position verticale
    const sortByPosition = (a: IntersectionObserverEntry, b: IntersectionObserverEntry) => {
      const rectA = a.boundingClientRect
      const rectB = b.boundingClientRect
      return rectA.top - rectB.top
    }

    // Animer les entrées
    if (entering.length) {
      const sortedEntering = entering.sort(sortByPosition)
      animateSequentially(sortedEntering.map(entry => entry.target), true)
    }

    // Animer les sorties
    if (exiting.length) {
      const sortedExiting = exiting.sort(sortByPosition)
      animateSequentially(sortedExiting.map(entry => entry.target), false)
    }
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  })

  // Observer tous les éléments
  const allSkillElements = [...technicalSkillRefs.value, ...softSkillRefs.value]
  allSkillElements.forEach(el => {
    if (el.$el) observer?.observe(el.$el)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.competence-section {
  color: var(--text-front);
  display: flex;
  flex-direction: column;
  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-left: 15%;
  padding-right: var(--space-none);
}

.subtitle {
  color: var(--text-medium);
  margin-bottom: calc(var(--space-md) * 2);
  max-width: 600px;
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

/* Animation styles */
.skill-fade {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  will-change: opacity, transform;
}

.skill-fade.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Tablettes */
@media (max-width: 1024px) {
  .competence-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);
    
    padding-left: 10%;
    padding-right: var(--space-none);
  }

  .competence-container {
    gap: calc(var(--space-md) * 6);
  }

  .subtitle {
    max-width: 600px;
    margin-right: 10%;
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