<template>
  <div class="hero">
    <h1 class="md-regular">
      Florian Butour / Product Designer
    </h1>
    <h2 class="h1">
      Expert en design d'interfaces<br />pour solutions SaaS et B2B.
    </h2>

  </div>
</template>

<style scoped>
.hero {
  height: 70vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);

  gap: var(--space-md);
}

/* Tablettes */
@media (max-width: 1024px) {
  .hero {
    padding-left: var(--section-pad-x-tablet);
    padding-right: var(--section-pad-x-tablet);
    transform: translateY(-20px);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .hero {
    padding-left: var(--section-pad-x-mobile);
    padding-right: var(--section-pad-x-mobile);

    height: 60vh;
    transform: translateY(0);
  }
}

.hero h1 {
  color: var(--text-front);
}

.hero p {
  color: var(--text-medium);
}
</style>
