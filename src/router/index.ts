import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../views/OverviewPage.vue'
import RealizationsPage from '../views/RealizationsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import RealizationDetail from '../views/RealizationDetail.vue'

const SITE_TITLE = 'Florian Butour · Product Designer Senior'

declare module 'vue-router' {
  interface RouteMeta {
    /** `blank` masque la barre de navigation et le pied de page. */
    layout?: 'default' | 'blank'
    title?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewPage,
      meta: { title: SITE_TITLE },
    },
    {
      path: '/realizations',
      name: 'realizations',
      component: RealizationsPage,
      meta: { title: `Réalisations · ${SITE_TITLE}` },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: { title: `Contact · ${SITE_TITLE}` },
    },
    {
      path: '/realization/:id',
      name: 'realization',
      component: RealizationDetail,
      props: (route) => ({ collection: 'projects', id: route.params.id }),
      meta: { layout: 'blank' },
    },
    {
      path: '/experience/:id',
      name: 'experience',
      component: RealizationDetail,
      props: (route) => ({ collection: 'experiences', id: route.params.id }),
      meta: { layout: 'blank' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export { SITE_TITLE }
export default router
