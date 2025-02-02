# components/sections/HeroSection.vue
<template>
  <div class="hero">
    <h1 class="h1">
      Expert en design d'interfaces<br />pour solutions SaaS et B2B.
    </h1>
    <p class="md-regular">
      Je conçois des solutions digitales innovantes et centrées utilisateur.
    </p>
  </div>
</template>

<style scoped>
.hero {
  height: 70vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 15%;
  padding-right: 15%;
  
  gap: var(--space-md);
}

/* Tablettes */
@media (max-width: 1024px) {
  .hero {
    padding-left: 10%;
    padding-right: 10%;
    transform: translateY(-20px);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .hero {
    padding-left: calc(var(--space-md) * 3);
    padding-right: calc(var(--space-md) * 3);

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
