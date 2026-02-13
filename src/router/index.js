import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Accueil' },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'A propos' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projets',
      name: 'projects',
      meta: { title: 'Projets' },
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: 'Contact' },
      component: () => import('../views/ContactView.vue'),
    },
  ],
    scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const pageTitle = to.meta?.title ? `${to.meta.title} | Creadox` : 'Creadox'
  document.title = pageTitle
})

export default router
