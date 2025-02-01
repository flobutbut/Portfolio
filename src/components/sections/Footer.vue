<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Colonne Identité -->
      <div class="footer-column">
        <h3 class="md-bold">Florian Butour</h3>
        <p class="md-regular">Product Designer Senior</p>
      </div>

      <!-- Colonne Contact -->
      <div class="footer-column">
        <h3 class="md-bold">Contact</h3>
        <p class="md-regular">hello@florianbutour.com </p>
        <p class="md-regular">07 61 28 88 20 </p>
      </div>

      <!-- Colonne Société -->
      <div class="footer-column">
        <h3 class="md-bold">CV</h3>
        <a href="https://www.linkedin.com/in/florianbutour/" target="_blank" rel="noopener" class="footer-link md-regular">Linkedin</a>
        <a href="/cv.pdf" download class="footer-link md-regular">CV</a>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--surface-back);
  padding: calc(var(--space-md) * 8) calc(var(--space-md) * 5);
  margin-top: calc(var(--space-md) * 4);
  border-top: 1px solid var(--border-medium);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--space-md) * 2);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-none);
}

.md-bold {
  color: var(--text-front);
  margin-bottom: var(--space-none);
}

.footer-link {
  color: var(--text-medium);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--text-front);
}

.footer p {
  color: var(--text-medium);
}

@media (max-width: 720px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: calc(var(--space-md) * 3);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: calc(var(--space-md) * 3);
  }
}
</style>