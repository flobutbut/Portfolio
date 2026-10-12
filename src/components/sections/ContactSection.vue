<template>
  <section class="contact section" id="contact">
    <div class="container">
      <div class="contact__card" v-reveal>
        <div class="contact__content">
          <p class="eyebrow">Contact</p>
          <h2 class="h2">Mon profil vous intéresse ?</h2>
          <p class="md-regular">
            Contactez-moi pour un premier échange autour de votre vision produit. Nous
            explorerons ensemble comment mon expertise en design peut contribuer à la réussite
            de vos projets.
          </p>
        </div>

        <div class="contact__actions">
          <EmailCopy email="f.butour@gmail.com" />
          <a
            href="https://www.linkedin.com/in/florianbutour/"
            target="_blank"
            rel="noopener"
            class="contact__linkedin md-regular"
          >
            <LinkedinIcon />
            <span>Me retrouver sur LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import EmailCopy from '../ui/EmailCopy.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
</script>

<style scoped>
.contact__card {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 1fr);
  gap: var(--space-6);
  align-items: center;
  padding: clamp(28px, 5vw, 56px);
  border-radius: var(--radius-lg);
  background-color: var(--surface-medium);
  border: 1px solid var(--border-medium);
}

.contact__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 560px;
}

.contact__content p:not(.eyebrow) {
  color: var(--text-medium);
}

.contact__actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact__linkedin {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  width: fit-content;
  color: var(--text-medium);
  transition: color var(--duration-fast) var(--ease-out);
}

.contact__linkedin:hover {
  color: var(--text-front);
}

@media (max-width: 1024px) {
  .contact__card {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
