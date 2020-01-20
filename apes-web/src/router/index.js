import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from "@/layouts/BaseLayout"
// import UserLayout from "@/layouts/UserLayout"
import {
    _isMobile
} from '@/utils/util'
import '@/plugins/ls';

Vue.use(Router)

const routesObjs = [{
        path: '/',
        name: 'Index',
        component: BaseLayout,
        redirect: 'home',
        children: [{
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/Index'),
                meta: {
                    title: '首页'
                },
                // eslint-disable-next-line no-unused-vars
                beforeEnter: (to, from, next) => {
                    // 手机端访问默认路由时全局提示
                    localStorage.setItem("isMobile", _isMobile() ? "true" : "false");
                    next();
                }
            },
            {
                path: '/me/myArticles',
                name: 'MyArticles',
                component: () => import('@/views/me/MyArticles'),
                meta: {
                    title: '我的'
                }
            },
            {
                path: '/article/articleDetail',
                name: 'ArticleDetail',
                component: () => import('@/views/article/ArticleDetail'),
                meta: {
                    title: '我的'
                }
            }
        ]
    },
    // {
    //     path: '/user/login',
    //     component: UserLayout,
    //     meta: {title: '用户登录'},
    //     redirect: '/user/login',
    //     children: [
    //         {
    //             path: '/user/login',
    //             component: () => import('@/views/home/Index'),
    //             meta: {title: '用户登录', keepAlive: true}
    //         },
    //         // {
    //         //     path: '/user/register',
    //         //     name: 'register',
    //         //     component: () => import('@/views/user/Register'),
    //         //     meta: {title: '用户注册', keepAlive: true}
    //         // }
    //     ]
    // }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({
        y: 0
    }),
    routes: routesObjs
})

export default router