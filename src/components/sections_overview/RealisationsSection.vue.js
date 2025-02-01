import ProjectCard from "../ProjectCard.vue";
const projects = [
    {
        title: "Desoutter",
        description: "Mise ne place d'un design systeme et transformation des outils traditionnels en SaaS pour l'industrie du vissage",
    },
    {
        title: "Maif",
        description: "Améliorer l'expérience sociétaire grâce à des parcours plus fluides et l'ajout de services complémentaires en fin de service.",
    },
    {
        title: "Kisoigne",
        description: "Conception et design du service de mise en relation entre établissements de soins et personnels soignants.",
    },
    {
        title: "JP Racing",
        description: "Conception et design du service de mise en relation entre établissements de soins et personnels soignants.",
    },
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['realisations-section', 'projects-grid', 'subtitle', 'realisations-section', 'projects-grid', 'subtitle',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("realisations-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("h3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("subtitle md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("projects-grid") },
    });
    for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
        // @ts-ignore
        /** @type { [typeof ProjectCard, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(ProjectCard, new ProjectCard({
            key: ((project.title)),
            title: ((project.title)),
            description: ((project.description)),
        }));
        const __VLS_1 = __VLS_0({
            key: ((project.title)),
            title: ((project.title)),
            description: ((project.description)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    ['realisations-section', 'h3', 'subtitle', 'md-regular', 'projects-grid',];
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
            ProjectCard: ProjectCard,
            projects: projects,
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
//# sourceMappingURL=RealisationsSection.vue.js.map