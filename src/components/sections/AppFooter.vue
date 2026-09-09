<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__column">
        <p class="md-bold footer__title">Florian Butour</p>
        <p class="md-regular">Product Designer Senior</p>
      </div>

      <div class="footer__column">
        <p class="md-bold footer__title">Contact</p>
        <a href="mailto:hello@florianbutour.com" class="footer__link md-regular">
          hello@florianbutour.com
        </a>
        <a href="tel:+33761288820" class="footer__link md-regular">07 61 28 88 20</a>
      </div>

      <div class="footer__column">
        <p class="md-bold footer__title">À propos</p>
        <a
          href="https://www.linkedin.com/in/florianbutour/"
          target="_blank"
          rel="noopener"
          class="footer__link md-regular"
        >
          LinkedIn
        </a>
        <a
          href="/CV-FlorianButour-2025.pdf"
          target="_blank"
          rel="noopener"
          class="footer__link md-regular"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>

    <p class="footer__legal sm-regular">© {{ year }} Florian Butour. Tous droits réservés.</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: var(--space-8) var(--inset) var(--space-5);
  border-top: 1px solid var(--border-medium);
  background-color: var(--surface-back);
}

.footer__inner {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}

.footer__column {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  color: var(--text-medium);
}

.footer__title {
  color: var(--text-front);
  margin-bottom: var(--space-xs);
}

.footer__link {
  width: fit-content;
  color: var(--text-medium);
  transition: color var(--duration-fast) var(--ease-out);
}

.footer__link:hover {
  color: var(--text-front);
}

.footer__legal {
  margin-top: var(--space-6);
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .footer {
    padding-top: var(--space-6);
  }

  .footer__inner {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
