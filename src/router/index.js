import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/components/layouts/LandingLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/view/HomeView.vue'),
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/documentation',
    },
  ],
})

export default router
