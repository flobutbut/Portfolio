import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const isMenuOpen = ref(false);
const isMobile = ref(false);
const isActive = (routeName) => {
    const path = routeName === 'overview' ? '/' : `/${routeName}`;
    return route.path === path;
};
const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = '';
    }
};
const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
};
onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});
onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
    document.body.style.overflow = '';
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['menu-item', 'menu-item', 'menu-item', 'active', 'mobile-menu-toggle', 'active', 'mobile-menu-toggle', 'mobile-menu-toggle', 'active', 'mobile-menu-toggle', 'active', 'mobile-menu-toggle', 'active', 'navbar-menu', 'navbar-menu', 'active', 'menu-item', 'menu-item', 'active', 'navbar-menu', 'active', 'menu-item', 'navbar-menu', 'active', 'menu-item', 'navbar-menu', 'active', 'menu-item', 'navbar-menu', 'active', 'menu-item', 'navbar-menu', 'active', 'menu-item', 'mobile-menu-toggle',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("navbar") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("navbar-logo") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/"),
        ...{ class: ("logo-link") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/"),
        ...{ class: ("logo-link") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("dot") },
    });
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("navbar-menu") },
        ...{ class: (({ 'active': __VLS_ctx.isMenuOpen })) },
    });
    const __VLS_6 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onClick': {} },
        to: ("/"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('overview') })) },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClick': {} },
        to: ("/"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('overview') })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.closeMenu)
    };
    let __VLS_9;
    let __VLS_10;
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_14 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        ...{ 'onClick': {} },
        to: ("/realizations"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('realizations') })) },
    }));
    const __VLS_16 = __VLS_15({
        ...{ 'onClick': {} },
        to: ("/realizations"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('realizations') })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    let __VLS_20;
    const __VLS_21 = {
        onClick: (__VLS_ctx.closeMenu)
    };
    let __VLS_17;
    let __VLS_18;
    __VLS_19.slots.default;
    var __VLS_19;
    const __VLS_22 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({
        ...{ 'onClick': {} },
        to: ("/contact"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('contact') })) },
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onClick': {} },
        to: ("/contact"),
        ...{ class: ("menu-item") },
        ...{ class: (({ 'active': __VLS_ctx.isActive('contact') })) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_28;
    const __VLS_29 = {
        onClick: (__VLS_ctx.closeMenu)
    };
    let __VLS_25;
    let __VLS_26;
    __VLS_27.slots.default;
    var __VLS_27;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.toggleMenu) },
        ...{ class: ("mobile-menu-toggle") },
        ...{ class: (({ 'active': __VLS_ctx.isMenuOpen })) },
        'aria-label': ("Toggle menu"),
    });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isMobile) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    ['navbar', 'navbar-logo', 'logo-link', 'dot', 'navbar-menu', 'active', 'menu-item', 'active', 'menu-item', 'active', 'menu-item', 'active', 'mobile-menu-toggle', 'active',];
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
            isMenuOpen: isMenuOpen,
            isMobile: isMobile,
            isActive: isActive,
            toggleMenu: toggleMenu,
            closeMenu: closeMenu,
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
//# sourceMappingURL=NavBar.vue.js.map