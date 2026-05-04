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
          @load="handleScroll"
          :style="imageStyle"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useBreakpoint } from '../../composables/useBreakpoint';

interface Props {
  imageUrl: string;
  alt?: string;
  aspectRatio?: string;
}

const props = defineProps<Props>();
const sectionRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const translateY = ref(0);
const isMobile = useBreakpoint(512);

const handleScroll = () => {
  if (!sectionRef.value || !containerRef.value) return;

  const rect = sectionRef.value.getBoundingClientRect();
  const scrollProgress = rect.top / window.innerHeight;
  translateY.value = scrollProgress * 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const containerStyle = computed(() => {
  if (props.aspectRatio) {
    const [width, height] = props.aspectRatio.split('/').map(Number);
    const isPortrait = height > width;

    if (isMobile.value) {
      return {
        aspectRatio: isPortrait ? '16/20' : props.aspectRatio,
        width: '100%',
        maxWidth: 'none'
      };
    }

    return {
      aspectRatio: isPortrait ? '16/20' : props.aspectRatio,
      width: 'calc(100% - calc(var(--space-md) * 20))',
      maxWidth: '800px'
    };
  }

  return {
    width: isMobile.value ? '100%' : 'calc(100% - calc(var(--space-md) * 20))',
    height: '420px',
    maxWidth: isMobile.value ? 'none' : '800px'
  };
});

const wrapperStyle = computed(() => ({
  transform: `translate3d(0, ${translateY.value}px, 0)`,
  willChange: 'transform',
}));

const imageStyle = computed(() => {
  if (props.aspectRatio) {
    const [width, height] = props.aspectRatio.split('/').map(Number);
    return {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      objectPosition: height > width ? 'center' : 'top'
    };
  }
  return {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    objectPosition: 'top'
  };
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
  position: relative;
  height: auto;
}

.image {
  display: block;
  width: 100%;
  height: auto;
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
    padding-bottom: calc(var(--space-md) * 7);
    padding-left: 10%;
    padding-right: 0;
  }

  .image-container {
    width: 100%;
    border-radius: 6px 0 0 6px;
  }
}
</style>
