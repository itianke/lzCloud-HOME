/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from 'src/views/components/layout/'

// const _import = require('./_import_' + process.env.NODE_ENV)
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

/**
 * 静态默认路由表
 */
export const constantRouterMap = [
    {
        path: '/redirect',
        component: Layout,
        hide: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/page/redirect/index')
            }]
    },
    {
        path: '/',
        component: Layout,
        redirect: 'dashboard',
        meta: { title: '首页', icon: 'dashboard', noCache: true },
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: () => import('@/views/page/main/dashboard'),
                meta: { title: '首页', icon: 'dashboard', closeable: true }
            }]
    },
    {
        path: '/error',
        component: Layout,
        hide: true,
        children: [
            {
                path: '404',
                components: {
                    'public': () => import('@/views/page/errorPage/404')
                },
                name: 'Page404',
                meta: { title: 'page404', noCache: true, mode: 'public' }
            },
            {
                path: 'noauthorization',
                components: {
                    'public': () => import('@/views/page/errorPage/noauthorization')
                },
                name: 'noauthorization',
                meta: { title: '领筑工程云', noCache: true, mode: 'public' }
            }]
    }
]

const createRouter = () => new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

router.beforeEach((to, from, next) => {
    next()
    // remove loading
    let $loading = document.querySelector('#appPageLoading')
    if ($loading) {
        document.body.removeChild($loading)
    }
})

export default router
