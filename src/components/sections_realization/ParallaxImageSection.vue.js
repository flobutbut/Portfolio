import { ref, onMounted, onUnmounted, computed } from 'vue';
const props = defineProps();
const sectionRef = ref(null);
const containerRef = ref(null);
const imageRef = ref(null);
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
    if (!sectionRef.value || !containerRef.value || !imageRef.value)
        return;
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
const debounce = (fn, ms = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), ms);
    };
};
// Resize handler
const handleResize = debounce(() => {
    onImageLoad();
    scrollHandler();
});
// Set up intersection observer
onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                window.addEventListener('scroll', scrollHandler, { passive: true });
            }
            else {
                window.removeEventListener('scroll', scrollHandler);
            }
        });
    }, { threshold: 0 });
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['image-container', 'parallax-image-section', 'image-container', 'parallax-image-section',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("parallax-image-section") },
        ref: ("sectionRef"),
    });
    // @ts-ignore navigation for `const sectionRef = ref()`
    /** @type { typeof __VLS_ctx.sectionRef } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("image-container") },
        ref: ("containerRef"),
        ...{ style: ((__VLS_ctx.containerStyle)) },
    });
    // @ts-ignore navigation for `const containerRef = ref()`
    /** @type { typeof __VLS_ctx.containerRef } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onLoad: (__VLS_ctx.onImageLoad) },
        src: ((__VLS_ctx.imageUrl)),
        alt: ((__VLS_ctx.alt || '')),
        ...{ class: ("image") },
        ref: ("imageRef"),
        ...{ style: ((__VLS_ctx.imageStyle)) },
    });
    // @ts-ignore navigation for `const imageRef = ref()`
    /** @type { typeof __VLS_ctx.imageRef } */ ;
    ['parallax-image-section', 'image-container', 'image',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'sectionRef': __VLS_nativeElements['section'],
        'containerRef': __VLS_nativeElements['div'],
        'imageRef': __VLS_nativeElements['img'],
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
            sectionRef: sectionRef,
            containerRef: containerRef,
            imageRef: imageRef,
            containerStyle: containerStyle,
            imageStyle: imageStyle,
            onImageLoad: onImageLoad,
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
//# sourceMappingURL=ParallaxImageSection.vue.js.map