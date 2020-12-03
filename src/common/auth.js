/* eslint-disable no-eval */
import Cookies from 'js-cookie'
import { isEmpty } from './utils'
import config from 'common/config'
import storage from 'unit/storage'
import sessionStorage from 'unit/sessionStorage'

const key = 'token'
const prefix = 'z_'

// 获取用户信息
export function getToken() {
    let token = Cookies.get(key)
    if (!isEmpty(token)) {
        return token
    }
    return null
}

// 设置用户信息
export function setToken(data) {
    // 设置顶级域
    return Cookies.set(key, data, { domain: config.api.domain })
}

export function setStorageToken(data) {
    storage.set('company_token', data)
}

export function getStorageToken() {
    return storage.get('company_token')
}

// 删除用户信息
export function removeToken() {
    storage.clear()
    sessionStorage.remove('company_token')
    Cookies.set('sevenDay', '', { domain: config.api.domain })
    Cookies.set('companyId', '', { domain: config.api.domain })
    return Cookies.set(key, '', { domain: config.api.domain })
}

// 设置企业Token
export function setCompanyToken(val) {
    sessionStorage.set('company_token', val)
}

export function setCompanyId(val) {
    sessionStorage.set('company_id', val)
}

export function getCompanyId() {
    return sessionStorage.get('company_id')
}

export function getCookieCompanyId() {
    return Cookies.get('companyId')
}


// 获取企业Token
export function getCompanyToken() {
    let companyToken = sessionStorage.get('company_token')
    if (!isEmpty(companyToken)) {
        return companyToken
    }
    return null
}

// 获取cookies里存的companyToken
export function getCompanyCookieToken() {
    let companyToken = Cookies.get('company_token')
    if (!isEmpty(companyToken)) {
        return companyToken
    }
    return null
}

/**
 *
 * 获取菜单
 * @export
 * @returns
 */
export function getMenus() {
    const data = storage.get('menus')
    return eval(data)
}

/**
 *
 * 获取菜单
 * @export
 * @returns
 */
export function getRoutes() {
    const data = storage.get('routes')
    return eval(data)
}

// 设置上次打开的页面
export function setHistoryPath(path) {
    return storage.set('historyPath', encodeURIComponent(path))
}

// 获取上次打开的页面
export function getHistoryPath() {
    return storage.get('historyPath') && decodeURIComponent(storage.get('historyPath'))
}

// 设置上次打开的页面参数
export function setHistoryParams(params) {
    return storage.set('historyParams', params)
}

// 获取上次打开的页面参数
export function getHistoryParams() {
    return storage.get('historyParams')
}

export function setPreview(data) {
    Cookies.set('preview', JSON.stringify(data), { domain: config.api.domain })
}

export function getPreview() {
    let preview = Cookies.get('preview')
    if (!isEmpty(preview)) {
        return JSON.parse(preview)
    }
    return null
}

// 清除当前会话缓存
export function clearSession() {
    sessionStorage.clear()
}

/**
 * 获取权限按钮列表
 *
 * @export
 * @returns
 */
export function getRoles() {
    return new Promise((resolve, reject) => {
        const data = localStorage.getItem(prefix + 'roles')
        resolve(eval(data))
    })
}
