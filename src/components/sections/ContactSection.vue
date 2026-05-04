<template>
  <section class="contact-section">
    <div class="contact-card">
      <div class="contact-content">
        <h3 class="h3">Mon profil vous intéresse ?</h3>
        <p class="md-regular">
          Contactez moi pour un premier échange et discuter de votre vision
          produit afin d'explorer ensemble comment mon expertise en design
          contribuera à la réussite de vos projets.
        </p>

        <div class="contact-actions">
          <EmailCopy email="hello@florianbutour.com" />

          <a
            href="https://www.linkedin.com/in/florianbutour/"
            target="_blank"
            rel="noopener"
            class="linkedin-link md-regular"
          >
            <div class="linkedin-icon">
              <LinkedinIcon />
            </div>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmailCopy from "../ui/EmailCopy.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
</script>

<style scoped>
.contact-section {
  background-color: var(--surface-back);
  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);
  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);
}

.contact-card {
  width: 100%;
}

.contact-content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 2);
}

.contact-content h3 {
  color: var(--text-front);
}

.contact-content p {
  color: var(--text-medium);
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 2);
}

.linkedin-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--text-medium);
  text-decoration: none;
  transition: color 0.2s ease;
}

.linkedin-link:hover {
  color: var(--text-front);
}

.linkedin-icon {
  display: flex;
  align-items: center;
}

/* Tablettes */
@media (max-width: 1024px) {
  .contact-section {
    padding-top: calc(var(--space-md) * 10);
    padding-bottom: calc(var(--space-md) * 10);
    padding-left: var(--section-pad-x-tablet);
    padding-right: var(--section-pad-x-tablet);
  }

  .contact-content {
    max-width: 600px;
    gap: calc(var(--space-md) * 3);
  }
}

/* Mobile */
@media (max-width: 512px) {
  .contact-section {
    padding-top: calc(var(--space-md) * 20);
    padding-right: var(--section-pad-x-mobile);
    padding-left: var(--section-pad-x-mobile);
  }

  .contact-content {
    gap: calc(var(--space-md) * 2);
  }

  .contact-actions {
    gap: calc(var(--space-md) * 2);
  }
}
</style>
