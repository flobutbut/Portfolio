// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../views/OverviewPage.vue'
import RealizationsPage from '../views/RealizationsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import RealizationDetail from '../views/RealizationDetail.vue'

const router = createRouter({
 history: createWebHistory(),
 routes: [
   { 
     path: '/', 
     component: OverviewPage,
     name: 'overview' 
   },
   { 
     path: '/realizations', 
     component: RealizationsPage,
     name: 'realizations'
   },
   { 
     path: '/contact', 
     component: ContactPage,
     name: 'contact'
   },
   { 
    path: '/realization/:id', 
    component: RealizationDetail,
    name: 'realization',
    props: route => ({
      returnRoute: route.query.from || 'realizations',
      projectId: route.params.id
    }),
    meta: { layout: 'blank' } 
   },
   {
     path: '/:pathMatch(.*)*',
     redirect: '/'
   }
 ],
  // Ajout de la configuration scrollBehavior
  scrollBehavior(to, from, savedPosition) {
    // Si l'utilisateur utilise les boutons back/forward du navigateur
    if (savedPosition) {
      return savedPosition
    }
    // Dans tous les autres cas, retour en haut de la page
    return { top: 0 }
  }
})

export default router