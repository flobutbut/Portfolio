<template>
  <section class="article section-detail">
    <div class="container">
      <div class="prose-column" v-reveal>
        <h2 class="h4 article__title">{{ title }}</h2>
        <div class="prose md-regular" v-html="html" @click="onClick"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { renderMarkdown } from '../../utils/markdown'

interface Props {
  title: string
  body: string
}

const props = defineProps<Props>()
const router = useRouter()

const html = computed(() => renderMarkdown(props.body))

/** Les liens internes du Markdown passent par le router (pas de rechargement). */
const onClick = (event: MouseEvent) => {
  const anchor = (event.target as HTMLElement).closest('a')
  if (!anchor) return
  const href = anchor.getAttribute('href') ?? ''
  const isInternal = href.startsWith('/') && !href.startsWith('//')
  if (!isInternal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  event.preventDefault()
  router.push(href)
}
</script>

<style scoped>
.article {
  padding-block: var(--space-3);
}

.article + .article {
  padding-top: var(--space-1);
}

.article__title {
  margin-bottom: var(--space-2);
}
</style>
