import { ref } from 'vue';
const props = defineProps();
const isCopied = ref(false);
const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(props.email);
        isCopied.value = true;
        setTimeout(() => {
            isCopied.value = false;
        }, 1000);
    }
    catch (err) {
        console.error('Failed to copy email:', err);
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['copy-button', 'email-input', 'email-input', 'is-copied', 'email-copy', 'email-input', 'email-input', 'is-copied', 'copy-button',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("email-copy") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("email-input md-regular") },
        ...{ class: (({ 'is-copied': __VLS_ctx.isCopied })) },
    });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.copyEmail) },
        ...{ class: ("copy-button") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("md-regular") },
    });
    ['email-copy', 'email-input', 'md-regular', 'is-copied', 'copy-button', 'md-regular',];
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
            isCopied: isCopied,
            copyEmail: copyEmail,
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
//# sourceMappingURL=EmailCopy.vue.js.map