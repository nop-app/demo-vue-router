import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Edit post',
    component: () => import(/* webpackChunkName: "editPost" */ '../views/EditPost.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Example of a middleware
router.beforeEach((to, from, next) => {
  router.app.$nop.mergeSettings({
    user: 'John Doe'
  })

  next()
})

export default router
