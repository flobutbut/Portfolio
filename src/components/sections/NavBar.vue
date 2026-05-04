<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <router-link to="/" class="logo-link">
        <h1>Florian Butour <span class="dot">•</span> Senior Product designer</h1>
      </router-link>
    </div>
    <div class="navbar-menu" :class="{ 'active': isMenuOpen }">
      <router-link 
        to="/" 
        class="menu-item"
        :class="{ 'active': isActive('overview') }"
        @click="closeMenu"
      >
        Overview
      </router-link>
      <router-link 
        to="/realizations" 
        class="menu-item"
        :class="{ 'active': isActive('realizations') }"
        @click="closeMenu"
      >
        Réalisations
      </router-link>
      <router-link 
  to="/contact" 
  class="menu-item"
  :class="{ 'active': isActive('contact') }"
  @click="closeMenu"
>
  Contact
</router-link>
    </div>
    <button 
      class="mobile-menu-toggle" 
      @click="toggleMenu" 
      v-show="isMobile"
      :class="{ 'active': isMenuOpen }"
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoint } from '../../composables/useBreakpoint'

const route = useRoute()
const isMenuOpen = ref(false)
const isMobile = useBreakpoint(768)

const isActive = (routeName: string) => {
  const path = routeName === 'overview' ? '/' : `/${routeName}`
  return route.path === path
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--space-md) * 3) calc(var(--space-md) * 5);
  background-color: var(--surface-back);
  color: var(--text-front);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-logo h1 {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
}

.logo-link {
  text-decoration: none;
  color: var(--text-front);
}

.dot {
  color: var(--highlight-default);
}

.navbar-menu {
  display: flex;
  gap: var(--space-none);
}

.menu-item {
  color: var(--text-medium);
  font-family: 'Inter';
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
  border: none;
  background: none;
  padding: calc(var(--space-md) / 2) calc(var(--space-md) * 2);
  border-radius: var(--radius-sm);
}

.menu-item:hover, 
.menu-item.active {
  color: var(--text-front);
}

.menu-item.active {
  background-color: var(--highlight-default);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-md);
  transition: transform 0.3s ease;
}

.mobile-menu-toggle.active {
  transform: rotate(180deg);
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-front);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    inset: 0;
    top: 0;
    background-color: var(--surface-back);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: calc(var(--space-md) * 4);
    visibility: hidden;
    z-index: 100;
  }

  .navbar-menu.active {
    visibility: visible;
  }

  .menu-item {
    font-family: 'Inter';
    font-weight: 700;
    font-style: italic;
    font-size: 28px;
    line-height: 32px;
    transform: translateX(50px);
    opacity: 0;
    transition: none;
    padding: calc(var(--space-md) * 2) 0;
  }

  .menu-item.active {
    background-color: transparent;
    color: var(--highlight-default);
  }

  .navbar-menu.active .menu-item {
    transform: translateX(0);
    opacity: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
  }

  .navbar-menu.active .menu-item:nth-child(1) {
    transition-delay: 0.1s;
  }

  .navbar-menu.active .menu-item:nth-child(2) {
    transition-delay: 0.2s;
  }

  .navbar-menu.active .menu-item:nth-child(3) {
    transition-delay: 0.3s;
  }

  .navbar-menu.active .menu-item:nth-child(4) {
    transition-delay: 0.4s;
  }

  .mobile-menu-toggle {
    display: flex;
    z-index: 101;
  }
}
</style>