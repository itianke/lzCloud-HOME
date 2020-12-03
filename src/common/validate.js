let str = ''
// 转换成常见数：整数，0，浮点数，负数；但不包括(对数等、幂次方数)
function toNum() {
    str = str.replace(/[^\d\-\.]/g, '') // 过滤非数字，除第一个“-”，“.”外
    str = str.replace(/^\-/, '$')
        .replace(/\-/g, '')
        .replace('$', '-') // 保留第一个“-”
    str = str.replace(/\./, '@')
        .replace(/\./g, '')
        .replace('@', '.')
        .replace(/^\./, '0.') // 保留第一个“.”
    if (isLt0()) {
        str = str.replace(/^\-/, '')
        fixZero()
        str = '-' + str
    } else {
        fixZero()
    }
}
// 处理前置0
function fixZero() {
    str = str.replace(/^0{2,}/, '0')
    if (isFloat()) {
        str = str.replace(/^0([1-9]\d*)\.(\d+).*$/, '$1.$2')
    } else {
        str = str.replace(/^0([1-9]\d*)$/, '$1') // 非浮点数去掉前置0
    }
}

function isLt0() {
    return /^\-/.test(str)
}

function isFloat() {
    return /\./.test(str)
}

function myZfloat() {
    return str.replace(/^\-/, '')
}

function myInt() {
    let _isLt0 = isLt0() // 必须先存起来
    str = str.replace(/[^\d]/g, '')
    fixZero()
    return _isLt0 ? '-' + str : str
}

function myZint() {
    return myInt().replace(/^\-/, '')
}


/// ////////////////////////////////////////////////
// 以下部分是对外暴露的接口方法  

/** 自然数，负数，0，正数，浮点数
 * @param 传入值
 * @return 校验后替换的值
 */
export function num(param) {
    str = param + ''
    toNum()

    return str
}


/** 大于等于0的数，正浮点数(非负数)
 * @param 传入值
 * @return 校验后替换的值
 */
export function zfloat(param) {
    str = param + ''
    toNum()

    return str.replace(/^\-/, '')
}


/** 负数，浮点数(包括-0,-0.)
 * @param 传入值
 * @return 校验后替换的值
 */
export function ffloat(param) {
    str = param + ''
    toNum()

    return isLt0() ? str : '-' + str
}

/** 整数 (注意：int是保留关键字，所以引起来)
 * @param 传入值
 * @return 校验后替换的值
 */
export function int(param) {
    str = param + ''
    toNum()

    let _isLt0 = isLt0() // 必须先存起来
    str = str.replace(/[^\d]/g, '')
    fixZero()
    return _isLt0 ? '-' + str : str
}

/** 非负整数(包括0)
 * @param 传入值
 * @return 校验后替换的值
 */
export function zint(param) {
    str = param + ''
    toNum()

    return myInt().replace(/^\-/, '')
}

/** 负整数(包括-0，-0.)
 * @param 传入值
 * @return 校验后替换的值
 */
export function fint(param) {
    str = param + ''
    toNum()

    return '-' + myZint()
}

/** 最小值为1的整数
 * @param 传入值
 * @return 校验后替换的值
 */
export function int1(param) {
    str = param + ''
    toNum()

    return myZint().replace(/^0+/, '')
}

/** 保留2位小数
 * @param 传入值
 * @return 校验后替换的值
 */
export function float2(param) {
    str = param + ''
    toNum()

    return myZfloat().replace(/^(\d+)\.(\d{2}).*$/, '$1.$2')
}

/** 保留3位小数
 * @param 传入值
 * @return 校验后替换的值
 */
export function float3(param) {
    str = param + ''
    toNum()

    return myZfloat().replace(/^(\d+)\.(\d{3}).*$/, '$1.$2')
}


/** 人民币
 * @param 传入值
 * @return 校验后替换的值
 */
export function rmb(param) {
    str = param
    toNum()

    let reg = /^(\d+)\.(\d{2}).*$/ // 保留两位小数
    return myZfloat().replace(reg, '$1.$2')
}
