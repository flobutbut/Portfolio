import { ref, onMounted, onUnmounted } from 'vue'

/** Vrai si l'utilisateur a demandé une réduction des animations. */
export function useReducedMotion() {
  const reduced = ref(false)
  let mediaQuery: MediaQueryList | null = null

  const update = (event: MediaQueryList | MediaQueryListEvent) => {
    reduced.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    update(mediaQuery)
    mediaQuery.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return reduced
}
