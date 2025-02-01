import Button from './ui/Button.vue';
import ArrowIcon from './icons/ArrowIcon.vue';
const __VLS_props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['project-card', 'project-card',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("project-card") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({
        ...{ class: ("h4") },
    });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("md-regular") },
    });
    (__VLS_ctx.description);
    // @ts-ignore
    /** @type { [typeof Button, typeof Button, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Button, new Button({
        ...{ class: ("card-button") },
    }));
    const __VLS_1 = __VLS_0({
        ...{ class: ("card-button") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { icon: __VLS_thisSlot } = __VLS_4.slots;
        // @ts-ignore
        /** @type { [typeof ArrowIcon, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ArrowIcon, new ArrowIcon({}));
        const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    var __VLS_4;
    ['project-card', 'h4', 'md-regular', 'card-button',];
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
            Button: Button,
            ArrowIcon: ArrowIcon,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ProjectCard.vue.js.map