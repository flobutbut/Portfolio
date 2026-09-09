<template>
  <section class="showcase section">
    <div class="container">
      <div class="showcase__panel" v-reveal>
        <p class="lg-regular showcase__text">
          Je crée des applications web et mobiles qui ne sont pas seulement agréables
          visuellement, mais aussi intelligentes, évolutives et fonctionnelles.
        </p>

        <router-link
          :to="{ name: 'realization', params: { id: 'le-cedre' } }"
          class="showcase__media"
          aria-label="Voir le projet Le Cèdre"
        >
          <img
            src="/assets/projects/lecedre/Contrat.webp"
            alt="Interface de gestion de contrats conçue pour Le Cèdre"
            width="1440"
            height="900"
            decoding="async"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  /* la visuel déborde du panneau vers le bas : on réserve l'espace */
  --overlap: clamp(48px, 10vw, 120px);
  padding-bottom: calc(var(--section-py) + var(--overlap));
}

.showcase__panel {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 5vw, 56px);
  padding: clamp(28px, 6vw, 80px);
  padding-bottom: 0;
  border-radius: var(--radius-lg);
  background-color: var(--highlight-default);
  color: var(--text-front);
}

.showcase__text {
  max-width: 34ch;
  font-weight: 500;
  color: var(--text-front);
}

.showcase__media {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: calc(var(--overlap) * -1);
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-medium);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
  transition: transform var(--duration-slow) var(--ease-out);
}

.showcase__media:hover {
  transform: translateY(-4px);
}

.showcase__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

@media (max-width: 640px) {
  .showcase__panel {
    border-radius: var(--radius-md);
  }

  .showcase__media {
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-sm);
  }
}
</style>
