import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/sections/NavBar.vue';
import Footer from './components/sections/Footer.vue';
const route = useRoute();
const isBlankLayout = computed(() => route.meta.layout === 'blank');
watch(() => route.path, (newPath) => {
    console.log('Route changed to:', newPath);
}, { immediate: true }); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("app") },
    });
    if (!__VLS_ctx.isBlankLayout) {
        // @ts-ignore
        /** @type { [typeof NavBar, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(NavBar, new NavBar({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
        const __VLS_5 = {}.RouterView;
        /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
        const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        /** @type { [typeof Footer, ] } */ ;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(Footer, new Footer({}));
        const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    }
    else {
        const __VLS_16 = {}.RouterView;
        /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */ ;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
        const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
    }
    ['app',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
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
            NavBar: NavBar,
            Footer: Footer,
            isBlankLayout: isBlankLayout,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=App.vue.js.map