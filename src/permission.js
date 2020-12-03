/* eslint-disable no-sequences */
/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
    getToken,
    removeToken,
    setCompanyToken,
    setCompanyId,
    getCompanyToken
} from 'common/auth'
import config from 'common/config'

/**
 * 获取URL参数
 *
 * @param {*} paramName
 * @returns
 */
function getParam (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2])
    return null
}

router.beforeEach((to, from, next) => {
    NProgress.start()
    
    if (getToken()) {
        const companyToken = getParam('companyToken')
        const companyId = getParam('companyId')
        let cacheCtoken = getCompanyToken()
        if (companyToken && cacheCtoken !== decodeURIComponent(companyToken)) {
            setCompanyToken(decodeURIComponent(companyToken))
            if (companyId) {
                setCompanyId(companyId)
            } else {
                setCompanyId('')
            }
            next()
        } else {
            next()
        }
    } else {
        let url = config.api.PAM + '/login'
        removeToken()
        location.href = url
    }
})

router.afterEach((to, from) => {
    document.title = to.meta && to.meta.title || '领筑工程云首页'
    NProgress.done() // 结束Progress
})
