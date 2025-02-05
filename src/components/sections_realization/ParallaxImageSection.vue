# components/sections/ParallaxImageSection.vue
<template>
  <section class="parallax-image-section" ref="sectionRef">
    <div 
      class="image-container" 
      ref="containerRef"
      :style="containerStyle"
    >
      <div class="image-wrapper" :style="wrapperStyle">
        <img 
          :src="imageUrl" 
          :alt="alt || ''" 
          class="image" 
          ref="imageRef"
          @load="onImageLoad"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

interface Props {
  imageUrl: string;
  alt?: string;
  aspectRatio?: string; // Format "16/9", "4/3", etc.
}

const props = defineProps<Props>();

const sectionRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const translateY = ref(0);
const imageRatio = ref(1.2);

// Compute container style
const containerStyle = computed(() => {
  if (props.aspectRatio) {
    const [width, height] = props.aspectRatio.split('/').map(Number);
    return {
      aspectRatio: props.aspectRatio,
      paddingTop: `${(height / width) * 100}%`
    };
  }
  return {};
});

const wrapperStyle = computed(() => ({
  transform: `translate3d(0, ${translateY.value}px, 0)`,
  height: `${imageRatio.value * 100}%`
}));

// Handle image load to get natural dimensions
const onImageLoad = () => {
  if (imageRef.value) {
    const img = imageRef.value;
    const containerHeight = containerRef.value?.offsetHeight || 0;
    imageRatio.value = Math.max(1.3, containerHeight / img.naturalHeight);
    
    // Reset la position initiale
    translateY.value = 0;
    scrollHandler();
  }
};

const scrollHandler = () => {
  if (!sectionRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  if (rect.bottom < 0 || rect.top > windowHeight) {
    translateY.value = 0;
    return;
  }

  const startPoint = windowHeight * 0.85;
  const endPoint = windowHeight * 0.15;
  const totalDistance = rect.height + windowHeight * 0.3;
  const currentProgress = (startPoint - rect.top) / totalDistance;
  const progress = Math.max(0, Math.min(1, currentProgress));

  const maxTranslate = 150;
  const easeProgress = progress * (2 - progress);
  translateY.value = -maxTranslate * easeProgress;
};

// Réduire le debounce pour une réponse plus rapide
const debounce = (fn: Function, ms = 8) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), ms);
  };
};

// Optimisation du scroll handler
const debouncedScrollHandler = debounce(scrollHandler);

// Set up intersection observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
        } else {
          window.removeEventListener('scroll', debouncedScrollHandler);
        }
      });
    },
    { threshold: 0 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', debouncedScrollHandler);
});
</script>

<style scoped>
.parallax-image-section {
  display: flex;
  justify-content: flex-end;
  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);
  padding-right: 15%;
  overflow: hidden;
}

.image-container {
  width: calc(420px * 1.8);
  height: 420px;
  position: relative;
  background-color: var(--highlight-default);
  overflow: hidden;
  border-radius: 6px;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top; /* Force l'alignement en haut */
}

/* When no aspect ratio is provided, use default height */
.image-container:not([style*="aspect-ratio"]) {
  height: 420px;
}

/* Tablettes */
@media (max-width: 1024px) {
  .parallax-image-section {
    justify-content: center;
    padding-top: calc(var(--space-md) * 6);
    padding-bottom: calc(var(--space-md) * 2);
    padding-left: 10%;
    padding-right: 0;
  }

  .image-container {
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .parallax-image-section {
    padding-left: 10%;
    padding-right: 0;
  }
}
</style>