import type { Directive } from 'vue'

/**
 * v-reveal — révèle un élément à son entrée dans le viewport (une seule fois).
 *
 *   <div v-reveal>…</div>
 *   <div v-reveal="{ delay: 120 }">…</div>   délai en ms (stagger)
 *
 * Le style initial/final est défini dans global.css via `[data-reveal]`.
 * Respecte `prefers-reduced-motion`.
 */

interface RevealOptions {
  delay?: number
}

let observer: IntersectionObserver | null = null

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const getObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return observer
}

export const reveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    el.setAttribute('data-reveal', '')
    const delay = binding.value?.delay ?? 0
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
