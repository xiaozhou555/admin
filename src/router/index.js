import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/home'
import Page1 from '../page/homepage/page1.vue'
import Page1_2 from '../page/homepage/page1-2.vue'
import Page2 from '../page/homepage2/page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: true,
      },
      component: Home,
      redirect: '/home/page1',
      children: [
        {
          path: '/home/page1',
          name: 'page1',
          meta: {
            requireAuth: true,
          },
          component:Page1
        },
        {
          path: '/home/page1-2',
          name: 'page1-2',
          meta: {
            requireAuth: true,
          },
          component:Page1_2
        },
        {
          path: '/home/page2',
          name: 'page2',
          meta: {
            requireAuth: true,
          },
          component:Page2
        },
      ]
    },
  ]
})
