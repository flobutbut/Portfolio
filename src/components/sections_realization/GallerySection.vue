<template>
  <section class="gallery" aria-roledescription="carrousel" aria-label="Galerie du projet" v-reveal>
    <div ref="track" class="gallery__track" @scroll.passive="onScroll">
      <figure
        v-for="(image, index) in images"
        :key="image.src"
        class="gallery__item"
        :aria-label="`Image ${index + 1} sur ${images.length}`"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
          width="1440"
          height="900"
        />
      </figure>
    </div>

    <div class="gallery__controls" :style="{ paddingInline: 'var(--inset)' }">
      <div class="gallery__dots" role="tablist" aria-label="Choisir une image">
        <button
          v-for="(image, index) in images"
          :key="image.src"
          type="button"
          class="gallery__dot"
          :class="{ 'is-active': index === current }"
          :aria-label="`Aller à l'image ${index + 1}`"
          :aria-current="index === current ? 'true' : undefined"
          @click="scrollTo(index)"
        />
      </div>

      <div class="gallery__arrows">
        <button
          type="button"
          class="gallery__arrow"
          aria-label="Image précédente"
          :disabled="current === 0"
          @click="scrollTo(current - 1)"
        >
          <ChevronIcon class="gallery__arrow-icon is-prev" />
        </button>
        <button
          type="button"
          class="gallery__arrow"
          aria-label="Image suivante"
          :disabled="current === images.length - 1"
          @click="scrollTo(current + 1)"
        >
          <ChevronIcon />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import ChevronIcon from '../icons/ChevronIcon.vue'
import type { GalleryImage } from '../../content'

interface Props {
  images: GalleryImage[]
}

defineProps<Props>()

const track = ref<HTMLElement | null>(null)
const current = ref(0)
let frame = 0

const itemElements = () =>
  Array.from(track.value?.querySelectorAll<HTMLElement>('.gallery__item') ?? [])

const onScroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const el = track.value
    if (!el) return
    const items = itemElements()
    const origin = el.scrollLeft + parseFloat(getComputedStyle(el).paddingLeft)
    let closest = 0
    let minDistance = Number.POSITIVE_INFINITY
    items.forEach((item, index) => {
      const distance = Math.abs(item.offsetLeft - origin)
      if (distance < minDistance) {
        minDistance = distance
        closest = index
      }
    })
    current.value = closest
  })
}

const scrollTo = (index: number) => {
  const el = track.value
  const items = itemElements()
  const target = items[index]
  if (!el || !target) return
  const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft)
  el.scrollTo({ left: target.offsetLeft - paddingLeft, behavior: 'smooth' })
}

onUnmounted(() => cancelAnimationFrame(frame))
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-block: var(--space-4) var(--space-6);
}

.gallery__track {
  --item-width: min(78vw, 880px);
  --item-gap: var(--space-3);
  display: flex;
  gap: var(--item-gap);
  padding-inline: var(--inset);
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--inset);
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}

.gallery__track::-webkit-scrollbar {
  display: none;
}

.gallery__item {
  flex: 0 0 var(--item-width);
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-md);
  background-color: var(--surface-medium);
  scroll-snap-align: start;
}

.gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.gallery__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.gallery__dots {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.gallery__dot {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-full);
}

.gallery__dot::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--text-muted);
  transition:
    transform var(--duration-base) var(--ease-out),
    background-color var(--duration-base) var(--ease-out);
}

.gallery__dot.is-active::before {
  transform: scale(1.35);
  background-color: var(--highlight-default);
}

.gallery__arrows {
  display: flex;
  gap: var(--space-1);
}

.gallery__arrow {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-full);
  color: var(--text-front);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out),
    opacity var(--duration-fast) var(--ease-out);
}

.gallery__arrow:hover:not(:disabled) {
  border-color: var(--text-front);
  background-color: rgba(255, 255, 255, 0.05);
}

.gallery__arrow:disabled {
  opacity: 0.3;
  cursor: default;
}

.gallery__arrow-icon.is-prev {
  transform: rotate(180deg);
}

@media (max-width: 640px) {
  .gallery__track {
    --item-width: calc(100% - var(--space-4));
    --item-gap: var(--space-2);
  }

  .gallery__arrows {
    display: none;
  }
}
</style>
