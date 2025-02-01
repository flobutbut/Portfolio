import { ref, onMounted, onBeforeUnmount } from 'vue';
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
const technicalSkillRefs = ref([]);
const softSkillRefs = ref([]);
let observer = null;
// Fonction pour animer l'apparition/disparition séquentiellement
const animateSequentially = (elements, entering) => {
    elements.forEach((element, index) => {
        setTimeout(() => {
            if (entering) {
                element.classList.add('visible');
            }
            else {
                element.classList.remove('visible');
            }
        }, index * 100); // 100ms de délai entre chaque élément
    });
};
onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        // Regrouper les entrées par direction (entrante ou sortante)
        const entering = entries.filter(entry => entry.isIntersecting);
        const exiting = entries.filter(entry => !entry.isIntersecting);
        // Trier les éléments par position verticale
        const sortByPosition = (a, b) => {
            const rectA = a.boundingClientRect;
            const rectB = b.boundingClientRect;
            return rectA.top - rectB.top;
        };
        // Animer les entrées
        if (entering.length) {
            const sortedEntering = entering.sort(sortByPosition);
            animateSequentially(sortedEntering.map(entry => entry.target), true);
        }
        // Animer les sorties
        if (exiting.length) {
            const sortedExiting = exiting.sort(sortByPosition);
            animateSequentially(sortedExiting.map(entry => entry.target), false);
        }
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    // Observer tous les éléments
    const allSkillElements = [...technicalSkillRefs.value, ...softSkillRefs.value];
    allSkillElements.forEach(el => {
        if (el.$el)
            observer?.observe(el.$el);
    });
});
onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['competence-section', 'skill-fade', 'competence-section', 'competence-container', 'subtitle', 'competence-section', 'competence-container', 'subtitle',];
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
    for (const [skill, index] of __VLS_getVForSourceType((__VLS_ctx.technicalSkills))) {
        // @ts-ignore
        /** @type { [typeof SkillItem, typeof SkillItem, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(SkillItem, new SkillItem({
            key: ((skill)),
            text: ((skill)),
            ...{ class: ("skill-fade") },
            ...{ style: (({ '--delay': `${index * 100}ms` })) },
            ref: (((el) => { if (el)
                __VLS_ctx.technicalSkillRefs[index] = el; })),
        }));
        const __VLS_1 = __VLS_0({
            key: ((skill)),
            text: ((skill)),
            ...{ class: ("skill-fade") },
            ...{ style: (({ '--delay': `${index * 100}ms` })) },
            ref: (((el) => { if (el)
                __VLS_ctx.technicalSkillRefs[index] = el; })),
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
    for (const [skill, index] of __VLS_getVForSourceType((__VLS_ctx.softSkills))) {
        // @ts-ignore
        /** @type { [typeof SkillItem, typeof SkillItem, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(SkillItem, new SkillItem({
            key: ((skill)),
            text: ((skill)),
            ...{ class: ("skill-fade") },
            ...{ style: (({ '--delay': `${(index + __VLS_ctx.technicalSkills.length) * 100}ms` })) },
            ref: (((el) => { if (el)
                __VLS_ctx.softSkillRefs[index] = el; })),
        }));
        const __VLS_6 = __VLS_5({
            key: ((skill)),
            text: ((skill)),
            ...{ class: ("skill-fade") },
            ...{ style: (({ '--delay': `${(index + __VLS_ctx.technicalSkills.length) * 100}ms` })) },
            ref: (((el) => { if (el)
                __VLS_ctx.softSkillRefs[index] = el; })),
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
    ['competence-section', 'h3', 'subtitle', 'md-regular', 'competence-container', 'skills-list', 'skill-fade', 'skills-list', 'skill-fade',];
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
            technicalSkillRefs: technicalSkillRefs,
            softSkillRefs: softSkillRefs,
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
//# sourceMappingURL=CompetenceSection.vue.js.map