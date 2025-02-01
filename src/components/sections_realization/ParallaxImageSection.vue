# components/sections/ParallaxImageSection.vue
<template>
  <section class="parallax-image-section" ref="sectionRef">
    <div 
      class="image-container" 
      ref="containerRef"
      :style="containerStyle"
    >
      <img 
        :src="imageUrl" 
        :alt="alt || ''" 
        class="image" 
        ref="imageRef"
        :style="imageStyle"
        @load="onImageLoad"
      />
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
const imageRef = ref<HTMLElement | null>(null);
const translateY = ref(0);
const imageRatio = ref(1.5); // Default scaling factor for parallax effect
const naturalRatio = ref(0); // Will store image's natural aspect ratio

// Compute container style based on provided aspect ratio
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

// Compute image style including transform
const imageStyle = computed(() => ({
  transform: `translateY(${translateY.value}px)`,
  height: `${imageRatio.value * 100}%`
}));

// Handle image load to get natural dimensions
const onImageLoad = () => {
  if (imageRef.value) {
    const img = imageRef.value;
    naturalRatio.value = img.naturalHeight / img.naturalWidth;
    
    // Adjust parallax scaling based on image dimensions
    const containerHeight = containerRef.value?.offsetHeight || 0;
    const idealHeight = containerHeight * 1.5; // 50% more than container for parallax
    imageRatio.value = Math.max(1.5, idealHeight / containerHeight);
    
    // Initial position calculation
    scrollHandler();
  }
};

const scrollHandler = () => {
  if (!sectionRef.value || !containerRef.value || !imageRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const containerHeight = containerRef.value.offsetHeight;
  const imageHeight = imageRef.value.offsetHeight;
  const windowHeight = window.innerHeight;

  // Calculate maximum scroll distance based on image and container heights
  const maxTranslate = imageHeight - containerHeight;

  // Only animate when section is visible
  if (rect.top < windowHeight && rect.bottom > 0) {
    // Calculate progress (0 to 1) based on section visibility
    const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
    
    // Apply smooth translation with bounds checking
    translateY.value = -Math.max(0, Math.min(maxTranslate, maxTranslate * progress));
  }
};

// Debounce helper for resize handling
const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// Resize handler
const handleResize = debounce(() => {
  onImageLoad();
  scrollHandler();
});

// Set up intersection observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', scrollHandler, { passive: true });
        } else {
          window.removeEventListener('scroll', scrollHandler);
        }
      });
    },
    { threshold: 0 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  // Add resize listener
  window.addEventListener('resize', handleResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
  window.removeEventListener('resize', handleResize);
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
  position: relative;
  background-color: var(--highlight-default);
  overflow: hidden;
  border-radius: var(--radius-lg);
}

/* When no aspect ratio is provided, use default height */
.image-container:not([style*="aspect-ratio"]) {
  height: 420px;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  will-change: transform;
  transition: transform 0.1s ease-out;
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