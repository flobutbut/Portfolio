<template>
  <section class="image section-detail">
    <div class="container">
      <figure
        ref="figure"
        class="image__figure"
        :class="{ 'is-portrait': isPortrait, 'has-parallax': hasParallax }"
        :style="{ '--ratio': ratio.replace('/', ' / ') }"
        v-reveal
      >
        <div class="image__frame">
          <img
            :src="src"
            :alt="alt"
            loading="lazy"
            decoding="async"
            :style="{ transform: `translate3d(0, ${offset}px, 0)` }"
          />
        </div>
        <figcaption v-if="caption" class="sm-regular image__caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'
import type { Ratio } from '../../content'

interface Props {
  src: string
  alt: string
  ratio?: Ratio
  parallax?: boolean
  caption?: string
}

const props = withDefaults(defineProps<Props>(), {
  ratio: '16/10',
  parallax: false,
})

/** Amplitude du déplacement, en fraction de la hauteur du cadre (l'image est agrandie d'autant). */
const PARALLAX_STRENGTH = 0.12

const reducedMotion = useReducedMotion()
const figure = ref<HTMLElement | null>(null)
const offset = ref(0)
let frame = 0
let observer: IntersectionObserver | null = null
let isListening = false

const isPortrait = computed(() => {
  const [w, h] = props.ratio.split('/').map(Number)
  return h > w
})

const hasParallax = computed(() => props.parallax && !reducedMotion.value)

const update = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const el = figure.value
    if (!el || !hasParallax.value) {
      offset.value = 0
      return
    }
    const rect = el.getBoundingClientRect()
    const viewport = window.innerHeight
    // progress : 0 quand le cadre entre par le bas, 1 quand il sort par le haut
    const progress = (viewport - rect.top) / (viewport + rect.height)
    const clamped = Math.min(1, Math.max(0, progress))
    const range = rect.height * PARALLAX_STRENGTH
    offset.value = (clamped - 0.5) * 2 * range
  })
}

const listen = (active: boolean) => {
  if (active === isListening) return
  isListening = active
  if (active) {
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
  } else {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  }
}

onMounted(() => {
  if (!props.parallax || !figure.value) return
  observer = new IntersectionObserver(([entry]) => listen(entry.isIntersecting), {
    rootMargin: '10% 0px',
  })
  observer.observe(figure.value)
})

onUnmounted(() => {
  observer?.disconnect()
  listen(false)
  cancelAnimationFrame(frame)
})
</script>

<style scoped>
.image {
  padding-block: var(--space-6);
}

.image__figure {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
  max-width: 880px;
  margin-left: auto;
}

.image__figure.is-portrait {
  max-width: 640px;
}

.image__frame {
  position: relative;
  aspect-ratio: var(--ratio);
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-medium);
}

.image__frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  will-change: transform;
}

/* Avec parallaxe, l'image est plus haute que le cadre pour ne jamais découvrir le fond. */
.has-parallax .image__frame img {
  position: absolute;
  inset: -12% 0;
  height: 124%;
  object-position: center;
}

.image__caption {
  color: var(--text-muted);
}

@media (max-width: 1024px) {
  .image__figure {
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .image {
    padding-block: var(--space-4);
  }

  .image__frame {
    border-radius: var(--radius-sm);
  }
}
</style>
