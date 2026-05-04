import { ref, onMounted, onUnmounted } from 'vue'

export function useBreakpoint(maxWidth: number) {
  const matches = ref(false)

  const check = () => {
    matches.value = window.innerWidth <= maxWidth
  }

  onMounted(() => {
    check()
    window.addEventListener('resize', check)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', check)
  })

  return matches
}
