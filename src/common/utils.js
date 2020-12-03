/**
 * 工具类
 */

/**
 *判断是否为空
 *
 * @export
 * @param {*} val 字符串 对象
 * @returns
 */
export function isEmpty(val) {
    if (val === undefined || val === null || val === '' || val.length === 0) { return true }
    if (typeof val === 'string') {
        if (val.trim().length === 0) return true
    } else if (typeof val === 'object') {
        if (JSON.stringify(val) === '{}') return true
    }
    return false
}

/**
 *判断是否不为空
 *
 * @export
 * @param {*} val 字符串 对象
 * @returns
 */
export function isUnEmpty(val) {
    if (val === undefined || val === null || val === '' || val.length === 0) { return false }
    if (typeof val === 'string') {
        if (val.trim().length === 0) return false
    } else if (typeof val === 'object') {
        if (JSON.stringify(val) === '{}') return false
    }
    return true
}

/**
 *非空判断(数组)
 *
 * @export
 * @param {*} array
 * @returns
 */
export function isEmptyArray(array) {
    if (array && Array.isArray(array) && array.length > 0) { return false }
    return true
}

/**
 *更新对象值
 *
 * @export
 * @param {*} original
 * @param {*} obj
 * @returns
 */
export function setKeyValue(original, obj) {
    for (const key in obj) {
        original[key] = obj[key]
    }
    return original
}

/**
 * 深复制
 *
 * @export
 * @param {*} source
 * @returns
 */
export function copy(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    for (const keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {}
                targetObj[keys] = copy(source[keys])
            } else {
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}

/**
 * 计算两个日期之间相差天数
 *
 * @export
 * @param {*} date1
 * @param {*} date2
 * @returns
 */
export function caluDiffDays(date1, date2) {
    let sDate1 = Date.parse(date1)
    let sDate2 = Date.parse(date2)
    let diffDate = sDate2 - sDate1
    diffDate = Math.abs(diffDate)
    let diffDays = Math.floor(diffDate / (24 * 3600 * 1000))
    return diffDays
}

/**
 * 判断数组里面是否包含属性
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} str
 * @returns
 */
export function arrayIndexOf(array, attr, str) {
    var subStr = []
    for (var obj in array) {
        subStr.push(array[obj][attr])
    }
    if (subStr.indexOf(str) >= 0) { return true }
    return false
}

/**
 * 判断数组某个对象包包含某个字符串的对象
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} str
 * @returns
 */
export function arrayAttrToObj(array, attr, str) {
    if (Array.isArray(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][attr] === str) { return array[i] }
        }
    }
    return null
}

/**
 * 合并两个对象
 * @param {*} obj1
 * @param {*} obj2
 * @returns
 */
export function objMerge(obj1, obj2) {
    return Object.assign(obj1, obj2)
}

/**
 * 开始时间限制
 * @author
 * @date   2018-11-09
 * @return {[type]}   [description]
 */
export const startTimeLimit = (limitTime, limitNow = false) => {
    return {
        disabledDate(time) {
            let curTime = time.getTime()
            let now = Date.now() - 8.64e7
            let date = new Date(limitTime)
            let dateTime = date.getTime() ? date.getTime() : Infinity
            return (limitNow && curTime < now) || curTime > dateTime
        }
    }
}

/**
 * endTimeLimit
 * @author
 * @date   2018-11-09
 * @param  time  limitTime 需要限制的开始时间
 * @param  {Boolean}  limitNow  是否限制今天
 * @return {[type]}             [description]
 */
export const endTimeLimit = (limitTime, limitNow = false) => {
    return {
        disabledDate(time) {
            let curTime = time.getTime()
            let now = Date.now() - 8.64e7
            let date = new Date(limitTime)
            //   dateTime = date.getTime() ? date.getTime() - 8.64e7 : now;
            let dateTime = date.getTime()
            return (limitNow && curTime < now) || curTime <= dateTime
        }
    }
}

/**
 * 从数组中删除属性
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} val
 * @returns
 */
export function arrayRemoveAttrVal(array, attr, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][attr] === val) { return array.splice(i, 1) }
    }
    return array
}

/**
 * 检查数组中是否有属性 返回下标
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} val
 * @returns
 */
export function arrayAttrToIndex(array, attr, val) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][attr] === val) { return i }
    }
    return -1
}

/**
 * 填充数组中的空值为-
 *
 * @export
 * @param {*} val
 * @returns
 */
export function fillEmpty(arr) {
    return Array.isArray(arr) ? arr.map(item => {
        for (let key in item) {
            if (isEmpty(item[key])) {
                item[key] = '-'
            }
        }
        return item
    }) : []
}

/**
 * 格式话日期
 *
 * @export
 * @param {*} pattern
 * @returns
 */
export function formatDate(date, pattern) {
    let newDate = new Date(date)
    let o = {
        'M+': newDate.getMonth() + 1, // 月份
        'd+': newDate.getDate(), // 日
        'h+': newDate.getHours(), // 小时
        'm+': newDate.getMinutes(), // 分
        's+': newDate.getSeconds(), // 秒
        'q+': Math.floor((newDate.getMonth() + 3) / 3), // 季度
        'S': newDate.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(pattern)) pattern = pattern.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(pattern)) pattern = pattern.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return pattern
}

// eslint-disable-next-line no-extend-native
Date.prototype.Format = function(fmt) {
    let o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    return fmt
}
