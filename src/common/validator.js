/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/

/*
 * 校验规则
 */

// 是否邮箱
const _isEmailReg = /^(?:[a-z0-9]+[_\-+.]+)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+.)+([a-z]{2,})+$/i

// 营业执照
const _isLicenseNum = /(^\d{15}$)|(^\d{18}$)/

// 密码
const _isPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,20}$/

// 正整数
const _isInteger = /^(0|\+?[1-9][0-9]*)$/

// 人民币，正整数 保留两位小数
const _rmb = /^(\d+)\.(\d{2}).*$/

export {
    _isLicenseNum,
    _isPassword,
    _isEmailReg,
    _isInteger,
    _rmb
}
