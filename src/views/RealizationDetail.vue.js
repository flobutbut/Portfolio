import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { MarkdownProjectParser } from "../utils/markdownParser";
import CloseIcon from "../components/icons/CloseIcon.vue";
import RealizationHero from "../components/sections_realization/RealizationHero.vue";
import HorizontalCarousel from "../components/sections_realization/HorizontalCarousel.vue";
import ArticleSection from "../components/sections_realization/ArticleSection.vue";
import ColumnsSection from "../components/sections_realization/ColumnsSection.vue";
import SingleImageSection from "../components/sections_realization/SingleImageSection.vue";
import CoteSection from "../components/sections_realization/CoteSection.vue";
import ParallaxImageSection from "../components/sections_realization/ParallaxImageSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
// Map des composants disponibles
const SECTION_COMPONENTS = {
    hero: RealizationHero,
    carousel: HorizontalCarousel,
    article: ArticleSection,
    columns: ColumnsSection,
    singleImage: SingleImageSection,
    parallaxImage: ParallaxImageSection,
    quote: CoteSection,
};
// Fonction pour obtenir le bon composant
const getSectionComponent = (type) => {
    return SECTION_COMPONENTS[type] || null;
};
const props = withDefaults(defineProps(), {
    returnRoute: "realizations",
});
const project = ref(null);
const router = useRouter();
const parser = new MarkdownProjectParser();
const loadProject = async () => {
    try {
        const modules = import.meta.glob("../content/projects/*.md", {
            as: "raw",
            eager: true,
        });
        // Trouver le module correspondant à l'ID du projet
        const projectEntry = Object.entries(modules).find(([path]) => path.includes(props.projectId));
        if (!projectEntry) {
            console.error("Project file not found");
            router.push({ name: "realizations" });
            return;
        }
        const [_, content] = projectEntry;
        const projectData = parser.parseProject(content);
        if (!projectData) {
            console.error("Failed to parse project data");
            router.push({ name: "realizations" });
            return;
        }
        project.value = projectData;
        console.log("Project loaded successfully:", projectData);
    }
    catch (error) {
        console.error("Error loading project:", error);
        router.push({ name: "realizations" });
    }
};
onMounted(() => {
    loadProject();
});
const goBack = () => {
    router.push({ name: props.returnRoute });
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    returnRoute: "realizations",
});
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['close-button',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("realization-detail") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.goBack) },
        ...{ class: ("close-button") },
    });
    // @ts-ignore
    /** @type { [typeof CloseIcon, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(CloseIcon, new CloseIcon({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    if (__VLS_ctx.project) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
            ...{ class: ("content") },
        });
        for (const [sectionId] of __VLS_getVForSourceType((__VLS_ctx.project.sections.order))) {
            const __VLS_5 = ((__VLS_ctx.getSectionComponent(__VLS_ctx.project.sections.content[sectionId].type)));
            // @ts-ignore
            const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
                ...(__VLS_ctx.project.sections.content[sectionId].data),
            }));
            const __VLS_7 = __VLS_6({
                ...(__VLS_ctx.project.sections.content[sectionId].data),
            }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        }
    }
    // @ts-ignore
    /** @type { [typeof ContactSection, ] } */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(ContactSection, new ContactSection({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ['realization-detail', 'close-button', 'content',];
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
            CloseIcon: CloseIcon,
            ContactSection: ContactSection,
            getSectionComponent: getSectionComponent,
            project: project,
            goBack: goBack,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=RealizationDetail.vue.js.map