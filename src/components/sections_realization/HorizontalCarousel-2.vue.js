import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps();
const carouselContainer = ref(null);
const carousel = ref(null);
const scrollProgress = ref(0);
const isInView = ref(false);
let carouselWidth = 0;
onMounted(() => {
    if (!carousel.value || !carouselContainer.value)
        return;
    // Calculer la largeur totale du défilement
    carouselWidth = carousel.value.scrollWidth - window.innerWidth;
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        // Le carousel est centré dans le viewport
        if (entry.intersectionRatio > 0.5) {
            isInView.value = true;
            document.body.style.overflow = "hidden";
        }
        else {
            isInView.value = false;
            document.body.style.overflow = "";
        }
    }, {
        threshold: 1, // On observe quand le carousel est à 50% visible
        rootMargin: "-100px 0px", // Crée une marge de 100px en haut et en bas
    });
    if (carouselContainer.value) {
        observer.observe(carouselContainer.value);
    }
    const handleWheel = (e) => {
        if (!isInView.value)
            return;
        e.preventDefault();
        const delta = e.deltaY;
        // On calcule la nouvelle position
        const newProgress = Math.max(0, Math.min(scrollProgress.value + delta, carouselWidth));
        // Si on arrive à une extrémité (0 ou carouselWidth)
        if ((newProgress === 0 && delta < 0) ||
            (newProgress === carouselWidth && delta > 0)) {
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['carousel-item', 'carousel-wrapper', 'carousel', 'carousel-item', 'carousel-wrapper', 'carousel', 'carousel-item', 'carousel-wrapper', 'carousel', 'carousel-item',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("carousel-wrapper") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ref: ("carouselContainer"),
        ...{ class: ("carousel-section") },
    });
    // @ts-ignore navigation for `const carouselContainer = ref()`
    /** @type { typeof __VLS_ctx.carouselContainer } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ref: ("carousel"),
        ...{ class: ("carousel") },
        ...{ style: (({ transform: `translateX(${-__VLS_ctx.scrollProgress}px)` })) },
    });
    // @ts-ignore navigation for `const carousel = ref()`
    /** @type { typeof __VLS_ctx.carousel } */ ;
    for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("carousel-item") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((image)),
            alt: ((`Slide ${index + 1}`)),
        });
    }
    ['carousel-wrapper', 'carousel-section', 'carousel', 'carousel-item',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'carouselContainer': __VLS_nativeElements['section'],
        'carousel': __VLS_nativeElements['div'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            carouselContainer: carouselContainer,
            carousel: carousel,
            scrollProgress: scrollProgress,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HorizontalCarousel-2.vue.js.map