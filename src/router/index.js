import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/components/test'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/activeAccount',
    name: 'ActivePage',
    component: () => import('@/components/activePage')
  }
]
export default new Router({
  routes: constantRouterMap
})
