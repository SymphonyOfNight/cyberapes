import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/portal/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            //首页
            path: '/',
            name: 'index',
            component: Index
        },
        {
            //登陆
            path: '/login',
            name: 'login',
            component: () => import('../pages/portal/Login.vue')
        },
        {
            //注册
            path: '/registe',
            name: 'registe',
            component: () => import('../pages/portal/Registe.vue')
        }
    ]
})
