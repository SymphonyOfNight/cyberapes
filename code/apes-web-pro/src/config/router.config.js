// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      // dashboard
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home/Index'),
        meta: { title: '首页', icon: 'home', keepAlive: true }
      // },
      //
      // // user
      // {
      //   path: '/account/center',
      //   name: 'center',
      //   component: () => import('@/views/account/center/Index'),
      //   meta: { title: '圈子', icon: 'team', keepAlive: true }
      // },
      //
      // // user
      // {
      //   path: '/dashboard/workplace',
      //   name: 'Workplace',
      //   component: () => import('@/views/dashboard/Workplace'),
      //   meta: { title: '我', icon: 'user', keepAlive: true }
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
