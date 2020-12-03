import { isEmpty } from './utils'

/**
 * 校验普通通用字符
 *
 * @export
 * @param {*} rule
 * rule.max 传入的限定最大值
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validString (rule, value, callback) {
    let max = typeof rule.max !== 'undefined' ? rule.max : 255
    let required = typeof rule.required !== 'undefined' ? rule.required : true
    let type = typeof rule.type !== 'undefined' ? rule.type : 'string'
    if (!isEmpty(value) && value.length > max) {
        return callback(new Error('输入值过长'))
    }
    if (required) {
        let msg = type === 'string' ? '请输入' : '请选择'
        if (isEmpty(value)) {
            return callback(new Error(msg))
        }
    }
    callback()
}

/**
 * 校验金额(必填)
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validateAmount (rule, value, callback) {
    let required = typeof rule.required !== 'undefined' ? rule.required : true
    let limit = typeof rule.limit !== 'undefined' ? rule.limit : 0
    // 必填
    if (required && isEmpty(value)) {
        return callback(new Error('请输入'))
    }
    if (required && value - 0 < limit) {
        return callback(new Error('不能小于' + limit))
    }
    if (isNaN(value) && !isEmpty(value)) {
        return callback(new Error('请输入数字'))
    }
    if (!/^[0-9]\d*(\.\d{1,2})?$|^0+(\.\d{1,2})?$/.test(value) && !isEmpty(value)) {
        return callback(new Error('金额最多保留2位小数'))
    }
    if (value > 100e8) {
        return callback(new Error('金额不能超过100亿!'))
    }
    // if (value > 100e8) {
    //     return callback(new Error('金额不能超过100亿!'))
    // }
    callback()
}


/**
 * 校验面积(必填)
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validateArea (rule, value, callback) {
    let required = typeof rule.required !== 'undefined' ? rule.required : true
    // 必填
    if (required && isEmpty(value)) {
        return callback(new Error('请输入'))
    }
    if (required && value <= 0) {
        return callback(new Error('不能小于等于0'))
    }
    if (isNaN(value)) {
        return callback(new Error('请输入数字'))
    }
    if (!/^[1-9]\d*(\.\d{1,2})?$|^0+(\.\d{1,2})?$/.test(value)) {
        return callback(new Error('最多保留2位小数'))
    }
    if (value > 1000e4) {
        return callback(new Error('面积不能超过1000万!'))
    }
    callback()
}

/**
 * 校验金额(非必填)
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validateAmountNoRquired (rule, value, callback) {
    let limit = typeof rule.limit !== 'undefined' ? rule.limit : 0
    if (isEmpty(value)) {
        callback()
    }
    if (isNaN(value)) {
        return callback(new Error('请输入数字'))
    }
    if (value - 0 < limit) {
        return callback(new Error('不能小于' + limit))
    }
    if (!/^([1-9]\d{0,5}|0)(\.[\d]+)?$/.test(value)) {
        return callback(new Error('请输入6位以内数字'))
    }
    callback()
}

/**
 * 校验手机
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validateMobile (rule, value, callback) {
    let required = typeof rule.required !== 'undefined' ? rule.required : false
    const reg = new RegExp(/^1[3-9]\d{9}$/)
    if (required) {
        if (isEmpty(value)) {
            return callback(new Error('请输入'))
        }
        if (!reg.test(value)) {
            return callback(new Error('请输入正确的手机号码'))
        }
        callback()
    } else {
        if (isEmpty(value)) {
            callback()
        } else {
            if (!reg.test(value)) {
                return callback(new Error('请输入正确的手机号码'))
            }
            callback()
        }
    }
}

/**
 * 百分比(非必填)
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validatePercent (rule, value, callback) {
    let max = typeof rule.max !== 'undefined' ? rule.max : 100
    let required = typeof rule.required !== 'undefined' ? rule.required : true
    if (required && isEmpty(value)) {
        return callback(new Error('请输入'))
    }
    if (!required && isEmpty(value)) {
        return callback()
    }
    if (isNaN(value)) {
        return callback(new Error('请输入数字'))
    }
    if (value <= 0) {
        return callback(new Error('不能小于等于0'))
    }
    if (!/^[1-9]\d*(\.\d{1,2})?$|^0+(\.\d{1,2})?$/.test(value)) {
        return callback(new Error('最多保留2位小数'))
    }
    if (value > max) {
        return callback(new Error(`百分比不能超过${max}!`))
    }
    callback()
}


/**
 * 校验银行账号(必填)
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validateBankNoRquired (rule, value, callback) {
    let max = typeof rule.max !== 'undefined' ? rule.max : 255
    if (!isEmpty(value) && value.length > max) {
        return callback(new Error('输入值过长'))
    }
    if (isEmpty(value)) {
        callback()
    }
    if (isNaN(value)) {
        return callback(new Error('请输入数字'))
    }
    callback()
}

/**
 * 校验固定电话
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validCompanyTel (rule, value, callback) {
    let required = typeof rule.required !== 'undefined' ? rule.required : true
    if (!required && isEmpty(value)) {
        return callback()
    }
    if (required && isEmpty(value)) {
        return callback(new Error('请输入'))
    }
    if (!/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value)) {
        return callback(new Error('电话格式不正确'))
    }
    callback()
}


/**
 * 校验正整数
 *
 * @export
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @returns
 */
export function validatePositiveInt (rule, value, callback) {
    if (isEmpty(value)) {
        if (rule.required) {
            return callback(new Error('请输入'))
        } else {
            return callback()
        }
    }
    if (isNaN(value)) {
        return callback(new Error('请输入数字'))
    }
    if (!/^[1-9]\d*$/.test(value)) {
        return callback(new Error('请输入正整数'))
    }
    if (rule.max && value > rule.max) {
        return callback(new Error(`请输入 1-${rule.max} 以内的正整数`))
    }
    callback()
}


export function validateMoney (rule, value, callback) {
    if (value) {
        let num = 0
        if (rule.type === 'single') {
            // 单金额校验
            let val = value.replace(/^\s+|\s+$/g, '')
            let reg = /^-?\d+([,，]{1}\d{3})*(\.\d+)?$/
            if (!reg.test(val)) {
                return callback(new Error('请输入正确的金额'))
            }
            num = val.replace(/[,，]*/g, '')
            if (num > 100e8) {
                return callback(new Error('金额不能超过100亿!'))
            }
        } else if (rule.type === 'double') {
            // 多金额校验
            let val = value.replace(/^\s+|(\s)?|\s+$/g, '')
            let reg = /^(-?\d+([,，]{1}\d{3})*(\.\d+)?[,，]?)+$/
            if (!reg.test(val)) {
                return callback(new Error('请输入正确的金额'))
            }
            let arr = val.split(/[,，]/)
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index]
                if (element > 100e8) {
                    return callback(new Error('金额不能超过100亿!'))
                }
            }
        }
    }

    callback()
}
