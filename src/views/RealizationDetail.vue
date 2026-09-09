<template>
  <div class="detail" v-if="entry">
    <button type="button" class="detail__close" aria-label="Fermer et revenir à la liste" @click="goBack">
      <CloseIcon />
    </button>

    <main id="main" class="detail__content">
      <RealizationHero :entry="entry" />

      <component
        :is="SECTION_COMPONENTS[section.type]"
        v-for="(section, index) in entry.sections"
        :key="`${entry.id}-${index}`"
        v-bind="sectionProps(section)"
      />
    </main>

    <nav class="detail__pager section" aria-label="Navigation entre les pages">
      <div class="container detail__pager-inner">
        <router-link v-if="previous" :to="linkTo(previous)" class="detail__pager-link">
          <span class="sm-regular detail__pager-label">Précédent</span>
          <span class="h4">{{ previous.title }}</span>
        </router-link>
        <span v-else></span>
        <router-link v-if="next" :to="linkTo(next)" class="detail__pager-link is-next">
          <span class="sm-regular detail__pager-label">Suivant</span>
          <span class="h4">{{ next.title }}</span>
        </router-link>
      </div>
    </nav>

    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { Component } from 'vue'
import { projects, experiences } from '../content'
import type { Entry, Section } from '../content'
import { SITE_TITLE } from '../router'
import CloseIcon from '../components/icons/CloseIcon.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import RealizationHero from '../components/sections_realization/RealizationHero.vue'
import GallerySection from '../components/sections_realization/GallerySection.vue'
import ArticleSection from '../components/sections_realization/ArticleSection.vue'
import ColumnsSection from '../components/sections_realization/ColumnsSection.vue'
import ImageSection from '../components/sections_realization/ImageSection.vue'
import QuoteSection from '../components/sections_realization/QuoteSection.vue'

const SECTION_COMPONENTS: Record<Section['type'], Component> = {
  gallery: GallerySection,
  article: ArticleSection,
  columns: ColumnsSection,
  image: ImageSection,
  quote: QuoteSection,
}

interface Props {
  collection: 'projects' | 'experiences'
  id: string
}

const props = defineProps<Props>()
const router = useRouter()

const list = computed<Entry[]>(() => (props.collection === 'projects' ? projects : experiences))
const index = computed(() => list.value.findIndex((item) => item.id === props.id))
const entry = computed(() => list.value[index.value])
const previous = computed(() => (index.value > 0 ? list.value[index.value - 1] : undefined))
const next = computed(() =>
  index.value < list.value.length - 1 ? list.value[index.value + 1] : undefined,
)

const listRoute = computed(() => (props.collection === 'projects' ? 'realizations' : 'overview'))

const linkTo = (item: Entry) => ({
  name: item.kind === 'project' ? 'realization' : 'experience',
  params: { id: item.id },
})

/** Retire la clé `type` pour ne pas la propager comme attribut HTML. */
const sectionProps = (section: Section) =>
  Object.fromEntries(Object.entries(section).filter(([key]) => key !== 'type'))

const goBack = () => {
  const cameFromSite = typeof window !== 'undefined' && window.history.state?.back
  if (cameFromSite) router.back()
  else router.push({ name: listRoute.value })
}

watch(
  entry,
  (value) => {
    if (!value) {
      router.replace({ name: listRoute.value })
      return
    }
    document.title = `${value.title} · ${SITE_TITLE}`
  },
  { immediate: true },
)
</script>

<style scoped>
.detail {
  position: relative;
  min-height: 100vh;
  background-color: var(--surface-back);
}

.detail__close {
  position: fixed;
  top: var(--space-2);
  right: var(--space-2);
  z-index: 100;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-medium);
  background-color: rgba(19, 36, 48, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-front);
  transition:
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.detail__close:hover {
  border-color: var(--text-front);
  background-color: var(--surface-medium);
  transform: rotate(90deg);
}

.detail__content {
  padding-bottom: var(--space-8);
}

.detail__pager {
  padding-block: var(--space-4);
  border-top: 1px solid var(--border-medium);
}

.detail__pager-inner {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
}

.detail__pager-link {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  color: var(--text-front);
  transition: color var(--duration-fast) var(--ease-out);
}

.detail__pager-link.is-next {
  text-align: right;
  margin-left: auto;
}

.detail__pager-link:hover {
  color: var(--highlight-default);
}

.detail__pager-label {
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .detail__pager-inner {
    flex-direction: column;
    gap: var(--space-3);
  }

  .detail__pager-link.is-next {
    text-align: left;
    margin-left: 0;
  }
}
</style>
