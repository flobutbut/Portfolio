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
          :style="imageStyle"
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
  aspectRatio?: string;
}

const props = defineProps<Props>();
const sectionRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLImageElement | null>(null);
const translateY = ref(0);

const containerStyle = computed(() => {
  if (props.aspectRatio) {
    return {
      aspectRatio: props.aspectRatio,
      width: 'calc(100% - calc(var(--space-md) * 20))',
      height: 'auto'
    };
  }
  return {
    width: 'calc(100% - calc(var(--space-md) * 20))',
    height: '420px'
  };
});

const wrapperStyle = computed(() => ({
  transform: `translate3d(0, ${translateY.value}px, 0)`,
}));

const imageStyle = computed(() => {
  if (props.aspectRatio) {
    const [width, height] = props.aspectRatio.split('/').map(Number);
    if (height > width) {
      return { 
        objectFit: 'contain' as const,
        objectPosition: 'center'
      };
    }
  }
  return { 
    objectFit: 'cover' as const,
    objectPosition: 'top'
  };
});

const scrollHandler = () => {
  if (!sectionRef.value || !containerRef.value || !imageRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  if (rect.bottom < 0 || rect.top > windowHeight) {
    return;
  }

  const containerHeight = containerRef.value.offsetHeight;
  const imageHeight = imageRef.value.offsetHeight;
  const maxTranslate = imageHeight - containerHeight;
  
  const scrollDistance = windowHeight + containerHeight;
  const relativePosition = windowHeight - rect.top;
  const progress = Math.max(0, Math.min(1, relativePosition / scrollDistance));
  
  const initialOffset = containerHeight * 0.2;
  translateY.value = (-maxTranslate * progress) + initialOffset;
};

const onImageLoad = () => {
  if (!imageRef.value || !containerRef.value) return;
  const containerHeight = containerRef.value.offsetHeight;
  imageRef.value.style.height = `${containerHeight * 2}px`;
  scrollHandler();
};

let ticking = false;
const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrollHandler();
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
});
</script>

<style scoped>
.parallax-image-section {
  display: flex;
  justify-content: flex-end;
  padding-top: calc(var(--space-md) * 10);
  padding-bottom: calc(var(--space-md) * 10);
  padding-right: 15%;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  background-color: transparent;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: transform;
}

.image {
  width: 100%;
  height: 100%;
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
    width: calc(100% - calc(var(--space-md) * 12));
  }
}

/* Mobile */
@media (max-width: 512px) {
  .parallax-image-section {
    padding-top: calc(var(--space-md) * 4);
    padding-bottom: calc(var(--space-md) * 20);
    padding-left: calc(var(--space-md) * 3);
    padding-right: var(--space-none);
  }

  .image-container {
    width: calc(100% - calc(var(--space-md) * 6));
  }
}
</style>