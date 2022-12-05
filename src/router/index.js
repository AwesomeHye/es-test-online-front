import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // 메인 페이지
  {
    path: '/',
    name: 'nori',
    component: () => import('@/views/nori/nori')
  },
  {
    path: '/standard',
    name: 'standard',
    component: () => import('@/views/standard/standard')
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
