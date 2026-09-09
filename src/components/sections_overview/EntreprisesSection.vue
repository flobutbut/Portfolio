<template>
  <section class="companies section">
    <div class="container">
      <header class="section-header" v-reveal>
        <p class="eyebrow">Références</p>
        <h2 class="h2">Clients et entreprises</h2>
        <p class="md-regular">
          Je conçois des solutions UX/UI guidées par une vision stratégique pour résoudre des
          problèmes, optimiser les performances et créer des expériences impactantes.
        </p>
      </header>
    </div>

    <div class="companies__marquee" :class="{ 'is-static': reducedMotion }" v-reveal>
      <ul
        v-for="copy in reducedMotion ? 1 : 2"
        :key="copy"
        class="companies__track"
        :aria-hidden="copy > 1 ? 'true' : undefined"
      >
        <li v-for="company in companies" :key="company.name" class="companies__logo">
          <img
            :src="company.logo"
            :alt="company.name"
            width="464"
            height="192"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReducedMotion } from '../../composables/useReducedMotion'
import desoutterLogo from '@/assets/logos/desoutter.png'
import polysoudeLogo from '@/assets/logos/polysoude.png'
import impacttrackLogo from '@/assets/logos/impacttrack.png'
import maifLogo from '@/assets/logos/maif.png'
import witcoLogo from '@/assets/logos/witco.png'
import sharingcloudLogo from '@/assets/logos/sharingcloud.png'
import jpracingLogo from '@/assets/logos/jpracing.png'
import feniksoLogo from '@/assets/logos/fenikso.png'
import altranLogo from '@/assets/logos/altran.png'

const reducedMotion = useReducedMotion()

const companies = [
  { name: 'Witco', logo: witcoLogo },
  { name: 'Sharingcloud', logo: sharingcloudLogo },
  { name: 'Desoutter', logo: desoutterLogo },
  { name: 'Polysoude', logo: polysoudeLogo },
  { name: 'MAIF', logo: maifLogo },
  { name: 'Fenikso', logo: feniksoLogo },
  { name: 'Impact Track', logo: impacttrackLogo },
  { name: 'JP Racing', logo: jpracingLogo },
  { name: 'Altran', logo: altranLogo },
]
</script>

<style scoped>
.companies__marquee {
  --logo-width: 176px;
  --logo-gap: var(--space-2);
  display: flex;
  gap: var(--logo-gap);
  overflow: hidden;
  padding-block: var(--space-1);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.companies__track {
  display: flex;
  flex-shrink: 0;
  gap: var(--logo-gap);
  animation: marquee 42s linear infinite;
}

.companies__marquee:hover .companies__track {
  animation-play-state: paused;
}

.companies__marquee.is-static {
  padding-inline: var(--inset);
  -webkit-mask-image: none;
  mask-image: none;
}

.companies__marquee.is-static .companies__track {
  flex-wrap: wrap;
  animation: none;
}

.companies__logo {
  flex: 0 0 var(--logo-width);
  aspect-ratio: 464 / 192;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background-color: var(--surface-bright);
  overflow: hidden;
}

.companies__logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--logo-gap)));
  }
}

@media (max-width: 640px) {
  .companies__marquee {
    --logo-width: 136px;
  }
}
</style>
