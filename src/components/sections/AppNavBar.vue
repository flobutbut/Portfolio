<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled, 'is-open': isMenuOpen }">
    <div class="navbar__inner">
      <router-link to="/" class="navbar__brand" @click="closeMenu">
        <span class="navbar__name">Florian Butour</span>
        <span class="navbar__dot" aria-hidden="true">•</span>
        <span class="navbar__role">Product Designer Senior</span>
      </router-link>

      <nav id="site-menu" class="navbar__menu" aria-label="Navigation principale">
        <router-link
          v-for="(link, index) in links"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          :style="{ '--index': index }"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <button
        type="button"
        class="navbar__toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="site-menu"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoint, BREAKPOINTS } from '../../composables/useBreakpoint'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/realizations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
]

const route = useRoute()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobile = useBreakpoint(BREAKPOINTS.mobile)

const lockScroll = (locked: boolean) => {
  document.body.style.overflow = locked ? 'hidden' : ''
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  lockScroll(isMenuOpen.value)
}

const closeMenu = () => {
  if (!isMenuOpen.value) return
  isMenuOpen.value = false
  lockScroll(false)
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 8
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu()
}

watch(() => route.fullPath, closeMenu)
watch(isMobile, (mobile) => {
  if (!mobile) closeMenu()
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  lockScroll(false)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(19, 36, 48, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-base) var(--ease-out);
}

.navbar.is-scrolled {
  border-bottom-color: var(--border-medium);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 72px;
  padding-inline: var(--inset);
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 15px;
  line-height: 1.4;
  color: var(--text-front);
  white-space: nowrap;
}

.navbar__dot {
  color: var(--highlight-default);
}

.navbar__role {
  color: var(--text-medium);
}

.navbar__menu {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.navbar__link {
  position: relative;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  font-size: 15px;
  color: var(--text-medium);
  transition:
    color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);
}

.navbar__link:hover {
  color: var(--text-front);
  background-color: rgba(255, 255, 255, 0.05);
}

.navbar__link.router-link-exact-active {
  color: var(--text-front);
  background-color: var(--highlight-default);
}

/* Bouton burger */
.navbar__toggle {
  display: none;
  position: relative;
  z-index: 2;
  width: 44px;
  height: 44px;
  margin-right: calc(var(--space-1) * -1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: var(--radius-sm);
}

.navbar__toggle span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: var(--radius-full);
  background-color: var(--text-front);
  transition:
    transform var(--duration-base) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
}

.is-open .navbar__toggle span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.is-open .navbar__toggle span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.is-open .navbar__toggle span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 1024px) {
  .navbar__role {
    display: none;
  }

  .navbar__dot {
    display: none;
  }
}

@media (max-width: 640px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__menu {
    position: fixed;
    inset: 0;
    z-index: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-8) var(--inset);
    background-color: var(--surface-back);
    visibility: hidden;
    opacity: 0;
    transition:
      opacity var(--duration-base) var(--ease-out),
      visibility 0s linear var(--duration-base);
  }

  .is-open .navbar__menu {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }

  .navbar__link {
    padding: var(--space-1) 0;
    font-size: var(--fs-h2);
    font-weight: 700;
    font-style: italic;
    line-height: 1.2;
    color: var(--text-medium);
    background: none;
    opacity: 0;
    transform: translateY(16px);
    transition:
      opacity var(--duration-base) var(--ease-out),
      transform var(--duration-base) var(--ease-out),
      color var(--duration-fast) var(--ease-out);
  }

  .is-open .navbar__link {
    opacity: 1;
    transform: none;
    transition-delay: calc(80ms + var(--index) * 60ms);
  }

  .navbar__link:hover,
  .navbar__link.router-link-exact-active {
    background: none;
    color: var(--highlight-default);
  }
}
</style>
