/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import axios from 'axios'
import config from 'common/config'
import { Message as $msgBox } from 'element-ui'
import { errorHandle } from './errorHandle'
import { getToken, getCompanyToken, getCompanyCookieToken } from 'common/auth'
import { ERROR_CODES } from './errCode'

const host = config.api.host
// 请求超时时间
const timeout = 60 * 1000

// build http header
function buildHeader (option) {
    let token = getToken()
    let companyToken = getCompanyToken()
    if (!token) return {}

    let headers = {
        login_token: `${token}`
    }

    
    if (companyToken) {
        headers.company_token = `${companyToken}`
    } else {
        const cookieCompanyToken = getCompanyCookieToken()
        if (cookieCompanyToken) {
            headers.company_token = `${cookieCompanyToken}`
        }
    }
    if (option) {
        headers = { ...headers, ...option }
    }
    return headers
}

function handleError (err = {}) {
    let errorCode = err.code
    // 如果是手动取消的请求，不显示错误信息
    if (axios.isCancel(errorCode)) {
        console.log(errorCode)
    } else {
        errorHandle(err)
        let msg = err.message || '发生未知错误，请重试'
        if (('' + errorCode).indexOf('timeout') > -1) {
            msg = '加载超时！请检查你的网络'
        }
        $msgBox({
            type: 'warning',
            dangerouslyUseHTMLString: true,
            customClass: 'warning',
            iconClass: 'msg-warning',
            duration: 3000,
            message: `<div class="p1">${msg}</div>`
        })
    }
}

function processData (apiData = {}) {
    let request = {
        ...apiData
    }
    return request
}

function transformResponse (_data) {
    let data
    try {
        data = JSON.parse(_data)
    } catch (e) {
        return _data
    }
    if (data) {
        let { code } = data
        if (code === '1') {
            return data.data
        } else {
            if (!ERROR_CODES.includes(code)) {
                handleError(data)
            } else {
                let msg = JSON.stringify(data) || '发生未知错误，请重试'
                throw new Error(msg)
            }
        }
    } else {
        let msg = 'Unknow Error'
        throw new Error(msg)
    }
}

// axios配置
let axiosConfig = (option = {}) => {
    return {
        baseURL: host,
        headers: buildHeader(option),
        timeout: timeout,
        // responseType: 'json',
        // transformRequest: [function (data) {
        //     if (data instanceof FormData) {
        //         return data
        //     } else {
        //         let contType = option['Content-Type']
        //         if (contType && contType.indexOf('application/json') > -1) {
        //             return JSON.stringify(data)
        //         } else {
        //             return data
        //         }
        //     }
        // }],
        transformResponse: [function (data) {
            return transformResponse(data)
        }]
    }
}

let axiosCreater = (resquestConfig = {}) => {
    let nax = axios.create(resquestConfig)
    nax.interceptors.request.use(respConfig => {
        let token = getToken()
        if (!token) {
            return null
        }
        return respConfig
    })
    return nax
}

// http get method
export function get (url, data) {
    let nax = axiosCreater(axiosConfig())
    return nax.get(`${host}${url}`, {
        params: processData(data)
    }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

// http post method
export function post (url, data) {
    let nax = axiosCreater(axiosConfig({
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }))
    return nax.post(`${host}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postJson (url, data, curHost = host) {
    let nax = axiosCreater(axiosConfig({
        responseType: 'json',
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax.post(`${curHost}${url}`, processData(data)).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postFile (url, data) {
    let nax = axiosCreater({
        headers: buildHeader({})
    })
    return nax.post(`${host}${url}`, data).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export function postString (url, data) {
    let nax = axiosCreater(axiosConfig({
        responseType: 'text',
        'Content-Type': 'application/json;charset=utf-8'
    }))
    return nax({
        url: `${host}${url}`,
        method: 'POST',
        data: processData(data)
    }).then((res) => {
        return res.data
    }).catch((error) => {
        throw error
    })
}

export function postBlob (url, data) {
    let nax = axiosCreater(axiosConfig())
    return nax.post(`${host}${url}`, processData(data), { responseType: 'blob', timeout: 180000 }).then((res) => {
        return res.data
    }).catch((err) => {
        throw err
    })
}

export let postExportExcel = `${host}`
