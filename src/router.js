import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'

Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      path: '/about',
      component: About
    }
  ]

})

export default router
