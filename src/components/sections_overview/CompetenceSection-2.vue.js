import SkillItem from "../SkillItem.vue";
const technicalSkills = [
    "Audit d'interface",
    "Recherche utilisateurs",
    "Design de service",
    "Design system",
    "Branding d'interface",
    "Stratégie produit",
    "Amélioration continue",
    "Roadmap produit",
    "Prototypage",
    "Outils d'analyse",
    "Gestion agile",
    "Accessibilité",
    "Gestion de projet",
];
const softSkills = [
    "Esprit critique et analytique",
    "Collaboration interdisciplinaire",
    "Communication claire et persuasive",
    "Empathie utilisateur",
    "Prise de décision stratégique",
    "Résolution de problèmes complexes",
    "Adaptabilité face au changement",
    "Organisation et gestion des priorités",
    "Gestion de compétences",
];
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['competence-section', 'competence-section', 'competence-container', 'subtitle', 'competence-section', 'competence-container', 'subtitle',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("competence-section") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("h3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("subtitle md-regular") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("competence-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skills-list") },
    });
    for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.technicalSkills))) {
        // @ts-ignore
        /** @type { [typeof SkillItem, typeof SkillItem, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(SkillItem, new SkillItem({
            key: ((skill)),
            text: ((skill)),
        }));
        const __VLS_1 = __VLS_0({
            key: ((skill)),
            text: ((skill)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_4.slots;
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("24"),
                height: ("24"),
                viewBox: ("0 0 24 24"),
                fill: ("none"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.circle)({
                cx: ("12"),
                cy: ("12"),
                r: ("4"),
                stroke: ("currentColor"),
                'stroke-width': ("2"),
            });
        }
        var __VLS_4;
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("skills-list") },
    });
    for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.softSkills))) {
        // @ts-ignore
        /** @type { [typeof SkillItem, typeof SkillItem, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(SkillItem, new SkillItem({
            key: ((skill)),
            text: ((skill)),
        }));
        const __VLS_6 = __VLS_5({
            key: ((skill)),
            text: ((skill)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { icon: __VLS_thisSlot } = __VLS_9.slots;
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
                width: ("24"),
                height: ("24"),
                viewBox: ("0 0 24 24"),
                fill: ("none"),
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.circle)({
                cx: ("12"),
                cy: ("12"),
                r: ("4"),
                stroke: ("currentColor"),
                'stroke-width': ("2"),
            });
        }
        var __VLS_9;
    }
    ['competence-section', 'h3', 'subtitle', 'md-regular', 'competence-container', 'skills-list', 'skills-list',];
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
            SkillItem: SkillItem,
            technicalSkills: technicalSkills,
            softSkills: softSkills,
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
//# sourceMappingURL=CompetenceSection-2.vue.js.map