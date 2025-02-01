import MethodCard from "../MethodCard.vue";
import CollaborationIcon from "../icons/MethodeCollaborationIcon.vue";
import EmpathyIcon from "../icons/MethodeEmpathyIcon.vue";
import PlanificationIcon from "../icons/MethodePlanificationIcon.vue";
import PragmatismeIcon from "../icons/MethodePragmatismeIcon.vue";
const methods = [
    {
        title: "Pragmatisme",
        description: "J'évalue chaque solution selon ses conséquences pratiques, en se concentrant uniquement sur sa valeur d'usage. Les idées ne sont pas jugées vraies ou fausses, mais utiles ou non",
        icon: PragmatismeIcon, // Nous créerons ces icônes séparément
    },
    {
        title: "Collaboration",
        description: "Je crois en la force du collectif et du partage des expertises. Chaque projet est une opportunité d'enrichir mutuellement nos approches pour créer des solutions plus pertinentes et innovantes",
        icon: CollaborationIcon,
    },
    {
        title: "Empathie",
        description: "Il s'agit de comprendre les besoins pour proposer une solution adaptée pouvant à la fois simplifier l'usage et améliorer le ressenti de l'utilisateur",
        icon: EmpathyIcon,
    },
    {
        title: "Planification",
        description: "Personne ne peut tout faire d'un coup. Vos solutions doivent être testées et éprouvées. Je vous proposerai une vision stratégique et une planification de vos projets pour un déploiement optimal",
        icon: PlanificationIcon,
    },
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['methods-section', 'methods-item', 'methods-item', 'methods-section', 'methods-grid', 'methods-section', 'methods-section', 'methods-grid', 'methods-section',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("methods-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("subtitle md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("h3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("methods-grid") },
    });
    for (const [method] of __VLS_getVForSourceType((__VLS_ctx.methods))) {
        // @ts-ignore
        /** @type { [typeof MethodCard, typeof MethodCard, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(MethodCard, new MethodCard({
            key: ((method.title)),
            title: ((method.title)),
            description: ((method.description)),
        }));
        const __VLS_1 = __VLS_0({
            key: ((method.title)),
            title: ((method.title)),
            description: ((method.description)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_4.slots;
            const __VLS_5 = ((method.icon));
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
            const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
        }
        var __VLS_4;
    }
    ['methods-section', 'subtitle', 'md-regular', 'h3', 'methods-grid',];
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
            MethodCard: MethodCard,
            methods: methods,
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
//# sourceMappingURL=MethodsSection.vue.js.map