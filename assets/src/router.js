import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: () => import('./views/Profile.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/menu',
      component: () => import('./views/Menu.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/sign_after',
      component: () => import('./views/Signout.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/signin',
      component: () => import('./views/Signin.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('/signin')
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router
     
