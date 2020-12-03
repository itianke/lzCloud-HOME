// 复写toFixed的四舍五入方法

// eslint-disable-next-line no-extend-native
Number.prototype.toFixed = function(s) {
    let times = Math.pow(10, s)
    let des = 0
    if (this > 0) des = this * times + 0.5
    else des = this * times - 0.5
    des = parseInt(des, 10) / times
    return des + ''
}
