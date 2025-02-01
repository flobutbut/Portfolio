import EmailCopy from "../ui/EmailCopy.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['contact-content', 'contact-content', 'linkedin-link', 'contact-section', 'contact-card', 'contact-content', 'contact-section', 'contact-card', 'contact-content', 'contact-actions',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("contact-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("contact-card") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("contact-content") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("h3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("contact-actions") },
    });
    // @ts-ignore
    /** @type { [typeof EmailCopy, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(EmailCopy, new EmailCopy({
        email: ("hello@florianbutour.com"),
    }));
    const __VLS_1 = __VLS_0({
        email: ("hello@florianbutour.com"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        href: ("https://www.linkedin.com/in/florianbutour/"),
        target: ("_blank"),
        rel: ("noopener"),
        ...{ class: ("linkedin-link md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("linkedin-icon") },
    });
    // @ts-ignore
    /** @type { [typeof LinkedinIcon, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(LinkedinIcon, new LinkedinIcon({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ['contact-section', 'contact-card', 'contact-content', 'h3', 'md-regular', 'contact-actions', 'linkedin-link', 'md-regular', 'linkedin-icon',];
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
            EmailCopy: EmailCopy,
            LinkedinIcon: LinkedinIcon,
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
//# sourceMappingURL=ContactSection.vue.js.map