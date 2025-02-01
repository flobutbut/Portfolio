const companies = [
    {
        name: 'Desoutter',
        logo: '../assets/logos/desoutter.svg'
    },
    {
        name: 'Polysoude',
        logo: '../assets/logos/polysoude.svg'
    },
    {
        name: 'Impact Track',
        logo: '../assets/logos/impact-track.svg'
    },
    {
        name: 'MAIF',
        logo: '../assets/logos/maif.svg'
    },
    {
        name: 'Sharingcloud',
        logo: '../assets/logos/sharingcloud.svg'
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['logo-card', 'experience-section', 'subtitle', 'logo-card', 'experience-section', 'subtitle', 'logo-card', 'logos-container',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("experience-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("h3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("subtitle md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("logos-container") },
    });
    for (const [company] of __VLS_getVForSourceType((__VLS_ctx.companies))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((company.name)),
            ...{ class: ("logo-card") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
            src: ((company.logo)),
            alt: ((company.name)),
        });
    }
    ['experience-section', 'h3', 'subtitle', 'md-regular', 'logos-container', 'logo-card',];
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
            companies: companies,
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
//# sourceMappingURL=ExperienceSection.vue.js.map