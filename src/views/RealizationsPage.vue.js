// Dans RealizationsPage.vue
import { ref, onMounted } from "vue";
import RealizationCard from "../components/RealizationCard.vue";
import { MarkdownProjectParser } from "../utils/markdownParser";
const projects = ref([]);
const parser = new MarkdownProjectParser();
onMounted(async () => {
    try {
        const modules = import.meta.glob("../content/projects/*.md", {
            as: "raw",
            eager: true,
        });
        console.log("Loaded modules:", modules);
        const loadedProjects = Object.entries(modules).map(([path, content]) => {
            const projectData = parser.parseProject(content);
            if (!projectData) {
                console.warn("Failed to parse project:", path);
                return null;
            }
            return {
                id: projectData.id,
                card: projectData.card,
            };
        });
        projects.value = loadedProjects.filter((p) => p !== null);
        console.log("Final projects:", projects.value);
    }
    catch (error) {
        console.error("Error loading projects:", error);
    }
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['header', 'header', 'realizations-page', 'realizations-grid', 'realizations-page', 'realizations-grid',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("realizations-page") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: ("header") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
        ...{ class: ("h1") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("md-regular") },
    });
    if (__VLS_ctx.projects.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("realizations-grid") },
        });
        for (const [project] of __VLS_getVForSourceType((__VLS_ctx.projects))) {
            // @ts-ignore
            /** @type { [typeof RealizationCard, ] } */ ;
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(RealizationCard, new RealizationCard({
                key: ((project.id)),
                id: ((project.id)),
                title: ((project.card.title)),
                description: ((project.card.description)),
                imageUrl: ((project.card.imageUrl)),
            }));
            const __VLS_1 = __VLS_0({
                key: ((project.id)),
                id: ((project.id)),
                title: ((project.card.title)),
                description: ((project.card.description)),
                imageUrl: ((project.card.imageUrl)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    ['realizations-page', 'header', 'h1', 'md-regular', 'realizations-grid',];
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
            RealizationCard: RealizationCard,
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
//# sourceMappingURL=RealizationsPage.vue.js.map