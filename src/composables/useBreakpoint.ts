import { ref, onMounted, onUnmounted } from 'vue'

/** Breakpoints partagés avec global.css. */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
} as const

/**
 * Renvoie un `ref` booléen vrai quand la fenêtre fait au plus `maxWidth` px.
 * S'appuie sur `matchMedia` : pas d'écouteur `resize` coûteux.
 */
export function useBreakpoint(maxWidth: number) {
  const matches = ref(false)
  let mediaQuery: MediaQueryList | null = null

  const update = (event: MediaQueryList | MediaQueryListEvent) => {
    matches.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)
    update(mediaQuery)
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return matches
}
