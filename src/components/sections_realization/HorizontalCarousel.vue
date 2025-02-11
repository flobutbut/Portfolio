<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
  images: string[];
}

const props = defineProps<Props>();

const carouselContainer = ref<HTMLElement | null>(null);
const carousel = ref<HTMLElement | null>(null);
const scrollProgress = ref(0);
const isInView = ref(false);
const currentImageIndex = ref(0);
const isMobile = ref(false);
let carouselWidth = 0;
const touchStart = ref(0);
const touchEnd = ref(0);
const slideDirection = ref('');

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const nextImage = () => {
  if (currentImageIndex.value < props.images.length - 1) {
    slideDirection.value = 'slide-left';
    currentImageIndex.value++;
  }
};

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    slideDirection.value = 'slide-right';
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
    if (swipeDistance > 0) {
      nextImage();
    } else {
      previousImage();
    }
  }
};

const handleAnimationEnd = () => {
  slideDirection.value = '';
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);

  if (!isMobile.value) {
    if (!carousel.value || !carouselContainer.value) return;
    carouselWidth = carousel.value.scrollWidth - window.innerWidth;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio > 0.5) {
          isInView.value = true;
          document.body.style.overflow = "hidden";
        } else {
          isInView.value = false;
          document.body.style.overflow = "";
        }
      },
      {
        threshold: 1,
        rootMargin: "-100px 0px",
      }
    );

    if (carouselContainer.value) {
      observer.observe(carouselContainer.value);
    }

    const handleWheel = (e: WheelEvent) => {
      if (!isInView.value) return;
      e.preventDefault();
      const delta = e.deltaY;
      const newProgress = Math.max(
        0,
        Math.min(scrollProgress.value + delta, carouselWidth)
      );
      if (
        (newProgress === 0 && delta < 0) ||
        (newProgress === carouselWidth && delta > 0)
      ) {
        document.body.style.overflow = "";
        isInView.value = false;
      }
      scrollProgress.value = newProgress;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    onUnmounted(() => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
      document.body.style.overflow = "";
    });
  }
});
</script>

<template>
  <div class="carousel-wrapper">
    <!-- Version desktop avec scroll horizontal -->
    <section v-if="!isMobile" ref="carouselContainer" class="carousel-section">
      <div
        ref="carousel"
        class="carousel"
        :style="{ transform: `translateX(${-scrollProgress}px)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
        >
          <img :src="image" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
    </section>

    <!-- Version mobile avec points de navigation -->
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
            <img 
              :src="images[currentImageIndex]" 
              :alt="`Slide ${currentImageIndex + 1}`" 
            />
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
            @click="currentImageIndex = index"
            :aria-label="`Aller à l'image ${index + 1}`"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  margin-bottom: calc(var(--space-md) * 4);
}

.carousel-section {
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
}

.carousel {
  position: relative;
  width: fit-content;
  height: 440px;
  display: flex;
  gap: calc(var(--space-md) * 4);

  padding-top: 0;
  padding-bottom: 0;

  padding-left: 15%;
  padding-right: 15%;

  will-change: transform;
  transition: transform 0.1s ease-out;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-item {
  width: calc(440px * 1.6);
  height: 440px;
  flex-shrink: 0;
  background-color: var(--highlight-default);
  overflow: hidden;
  border-radius: 6px;
}

/* Nouveaux styles mobile */
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
}

.carousel-item-mobile {
  width: 100%;
  height: 280px;
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
  transition: transform 0.3s ease-out;
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

/* Tablettes */
@media (max-width: 1024px) {
  .carousel-wrapper {
    margin-bottom: calc(var(--space-md) * 4);
  }

  .carousel {
    height: 380px;
    gap: calc(var(--space-md) * 4);

    padding-left: 10%;
    padding-right: 10%;
  }

  .carousel-item {
    width: calc(380px * 1.6);
    height: 380px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .carousel-wrapper {
    margin-bottom: calc(var(--space-md) * 4);
  }

  .carousel-container {
    height: 280px;
  }
}

/* Petit Mobile */
@media (max-width: 480px) {
  .carousel-wrapper {
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

/* Animations de slide */
@keyframes slideLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
