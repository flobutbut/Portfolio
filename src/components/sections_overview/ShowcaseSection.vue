# components/sections/ShowcaseSection.vue
<template>
  <section class="showcase-section">
    <div class="showcase-container">
      <div class="project-showcase">
        <div class="project-text">
          <p class="md-regular">
            Je crée des applications web et mobiles qui ne sont pas seulement
            agréables visuellement, mais aussi intelligentes, évolutives et
            fonctionnelles.
          </p>
        </div>
        <div class="project-image-container">
          <div class="project-image">
            <img
              src="../../assets/Visuels/LeCedre.png"
              alt="Application Connor Corp"
              class="rounded-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  background-color: var(--surface-back);

  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);

  padding-left: 15%;
  padding-right: var(--space-none);
}

.showcase-container {
  position: relative;
  width: 100%;
}

.project-showcase {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background-color: var(--highlight-default);
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);

  padding: calc(var(--space-md) * 10) calc(var(--space-md) * 10);
  gap: calc(var(--space-md) * 6);

  display: flex;
  flex-direction: column;
  overflow: visible;
}

.project-text {
  width: 70%;
}

.project-image {
  position: absolute;
  width: calc(100% - calc(var(--space-md) * 20));
  aspect-ratio: 16/9;
}

.rounded-image {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-sm);
  object-fit: cover;
  object-position: top;
}

/* Tablettes */
@media (max-width: 1024px) {
  .showcase-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 20);

    padding-left: 10%;
    padding-right: var(--space-none);
  }

  .project-text {
    width: 80%;
  }
  .project-showcase {
    padding: calc(var(--space-md) * 6) calc(var(--space-md) * 6);
    gap: calc(var(--space-md) * 4);
  }
  .project-image {
    width: calc(100% - calc(var(--space-md) * 12));
  }
}

/* Mobile */
@media (max-width: 512px) {
  .showcase-section {
    padding-top: calc(var(--space-md) * 4);
    padding-bottom: calc(var(--space-md) * 20);
    padding-left: calc(var(--space-md) * 3);
    padding-right: var(--space-none);
  }

  .project-showcase {
    padding: calc(var(--space-md) * 3);
    gap: calc(var(--space-md) * 3);
    height: 520px;
    aspect-ratio: unset;
  }

  .project-image {
    width: 85%;
    height: 65%;
    aspect-ratio: unset;
  }

  .project-text {
    width: 100%;
  }
}
</style>
