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
let carouselWidth = 0;

onMounted(() => {
  if (!carousel.value || !carouselContainer.value) return;

  // Calculer la largeur totale du défilement
  carouselWidth = carousel.value.scrollWidth - window.innerWidth;

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      // Le carousel est centré dans le viewport
      if (entry.intersectionRatio > 0.5) {
        isInView.value = true;
        document.body.style.overflow = "hidden";
      } else {
        isInView.value = false;
        document.body.style.overflow = "";
      }
    },
    {
      threshold: 1, // On observe quand le carousel est à 50% visible
      rootMargin: "-100px 0px", // Crée une marge de 100px en haut et en bas
    }
  );

  if (carouselContainer.value) {
    observer.observe(carouselContainer.value);
  }

  const handleWheel = (e: WheelEvent) => {
    if (!isInView.value) return;

    e.preventDefault();
    const delta = e.deltaY;

    // On calcule la nouvelle position
    const newProgress = Math.max(
      0,
      Math.min(scrollProgress.value + delta, carouselWidth)
    );

    // Si on arrive à une extrémité (0 ou carouselWidth)
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
    observer.disconnect();
    document.body.style.overflow = "";
  });
});
</script>

<template>
  <div class="carousel-wrapper">
    <section ref="carouselContainer" class="carousel-section">
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
  border-radius: var(--radius-lg);
}

.carousel-item {
  width: calc(440px * 1.6);
  height: 440px;
  flex-shrink: 0;
  background-color: var(--highlight-default);
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

  .carousel {
    height: 280px;
    gap: calc(var(--space-md) * 4);
    padding-left: 10%;
    padding-right: 10%;
  }

  .carousel-item {
    width: calc(280px * 1.6);
    height: 280px;
  }
}

/* Petit Mobile */
@media (max-width: 480px) {
  .carousel-wrapper {
    margin-bottom: calc(var(--space-md) * 2);
  }

  .carousel {
    height: 220px;
    gap: calc(var(--space-md) * 4);
    padding-left: 10%;
    padding-right: 10%;
  }

  .carousel-item {
    width: calc(220px * 1.6);
    height: 220px;
  }
}
</style>
