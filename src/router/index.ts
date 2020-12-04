import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index.vue'
import ConsolePage from '../views/consolePages/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ConsolIndex',
    component: ConsolePage
  },
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: Index
  // },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
