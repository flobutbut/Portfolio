<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useBreakpoint } from "../../composables/useBreakpoint";

interface Props {
  images: string[];
}

const props = defineProps<Props>();

const carouselWrapper = ref<HTMLElement | null>(null);
const carouselStickyEl = ref<HTMLElement | null>(null);
const carousel = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);
const isMobile = useBreakpoint(768);
let carouselWidth = 0;

const currentImageIndex = ref(0);
const touchStart = ref(0);
const touchEnd = ref(0);
const slideDirection = ref("");

const nextImage = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    slideDirection.value = "slide-left";
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    slideDirection.value = "slide-right";
    currentImageIndex.value--;
  }
};

const handleTouchStart = (e: TouchEvent) => {
  touchStart.value = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEnd.value = e.changedTouches[0].screenX;
  const swipeDistance = touchStart.value - touchEnd.value;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) nextImage();
    else previousImage();
  }
};

const handleAnimationEnd = () => {
  slideDirection.value = "";
};

onMounted(() => {
  if (isMobile.value) return;

  const updateLayout = () => {
    if (!carousel.value || !carouselWrapper.value || !carouselStickyEl.value) return;
    carouselWidth = carousel.value.scrollWidth - window.innerWidth;
    const stickyH = carouselStickyEl.value.offsetHeight;
    carouselWrapper.value.style.height = `${carouselWidth + stickyH}px`;
  };

  const handleScroll = () => {
    if (!carouselWrapper.value) return;
    const wrapperTop = carouselWrapper.value.getBoundingClientRect().top;
    scrollProgress.value = Math.max(0, Math.min(-wrapperTop, carouselWidth));
  };

  updateLayout();

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", () => {
    updateLayout();
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <div class="carousel-outer">
    <!-- Desktop: sticky scroll -->
    <div v-if="!isMobile" ref="carouselWrapper" class="carousel-sticky-wrapper">
      <div ref="carouselStickyEl" class="carousel-sticky">
        <div
          ref="carousel"
          class="carousel"
          :style="{ transform: `translateX(${-scrollProgress}px)` }"
        >
          <div v-for="(image, index) in images" :key="index" class="carousel-item">
            <img :src="image" :alt="`Slide ${index + 1}`" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile: swipe avec dots -->
    <section
      v-else
      class="carousel-section-mobile"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div class="carousel-mobile">
        <div class="carousel-container">
          <div
            class="carousel-item-mobile current"
            :class="slideDirection"
            @animationend="handleAnimationEnd"
          >
            <img :src="images[currentImageIndex]" :alt="`Slide ${currentImageIndex + 1}`" />
          </div>
          <div
            v-if="slideDirection"
            class="carousel-item-mobile next"
            :class="slideDirection"
          >
            <img
              :src="images[slideDirection === 'slide-left' ? currentImageIndex + 1 : currentImageIndex - 1]"
              :alt="`Slide ${slideDirection === 'slide-left' ? currentImageIndex + 2 : currentImageIndex}`"
            />
          </div>
        </div>
        <div class="carousel-dots">
          <button
            v-for="(_, index) in images"
            :key="index"
            class="dot"
            :class="{ active: index === currentImageIndex }"
            :aria-label="`Aller à l'image ${index + 1}`"
            @click="currentImageIndex = index"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.carousel-outer {
  margin-bottom: calc(var(--space-md) * 4);
}

/* ─── Desktop sticky ─── */

.carousel-sticky-wrapper {
  position: relative;
  /* height définie dynamiquement en JS */
}

.carousel-sticky {
  position: sticky;
  top: 0;
  overflow: hidden;
  padding-top: calc(var(--space-md) * 6);
  padding-bottom: calc(var(--space-md) * 6);
}

.carousel {
  display: flex;
  gap: calc(var(--space-md) * 4);
  padding-left: 15%;
  padding-right: 15%;
  width: fit-content;
  will-change: transform;
}

.carousel-item {
  width: calc(440px * 1.6);
  height: 440px;
  flex-shrink: 0;
  background-color: var(--highlight-default);
  overflow: hidden;
  border-radius: 6px;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ─── Mobile ─── */

.carousel-section-mobile {
  padding: 0 10%;
}

.carousel-mobile {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-md) * 2);
}

.carousel-container {
  position: relative;
  overflow: hidden;
  height: 280px;
}

.carousel-item-mobile {
  width: 100%;
  height: 100%;
  background-color: var(--highlight-default);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-item-mobile.current {
  z-index: 1;
}

.carousel-item-mobile.next {
  z-index: 0;
}

.carousel-item-mobile.slide-left {
  animation: slideLeft 0.3s ease-out;
}

.carousel-item-mobile.slide-right {
  animation: slideRight 0.3s ease-out;
}

.carousel-item-mobile.next.slide-left {
  animation: slideInLeft 0.3s ease-out;
}

.carousel-item-mobile.next.slide-right {
  animation: slideInRight 0.3s ease-out;
}

.carousel-item-mobile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: calc(var(--space-md) * 1.5);
  padding: calc(var(--space-md) * 2) 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  padding: 0;
  border: none;
  background-color: var(--text-medium);
  opacity: 0.3;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.dot.active {
  opacity: 1;
}

/* ─── Tablette ─── */

@media (max-width: 1024px) {
  .carousel {
    gap: calc(var(--space-md) * 4);
    padding-left: 10%;
    padding-right: 10%;
  }

  .carousel-item {
    width: calc(380px * 1.6);
    height: 380px;
  }
}

/* ─── Petit mobile ─── */

@media (max-width: 480px) {
  .carousel-outer {
    margin-bottom: calc(var(--space-md) * 2);
  }

  .carousel-section-mobile {
    padding: 0;
  }

  .carousel-container {
    height: 220px;
  }

  .carousel-dots {
    padding: calc(var(--space-md) * 1.5) 0;
  }
}

/* ─── Animations mobile ─── */

@keyframes slideLeft {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}

@keyframes slideRight {
  from { transform: translateX(0); }
  to   { transform: translateX(100%); }
}

@keyframes slideInLeft {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}

@keyframes slideInRight {
  from { transform: translateX(-100%); }
  to   { transform: translateX(0); }
}
</style>
