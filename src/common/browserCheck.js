function BrowserType() {
    var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera // 判断是否IE浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1 // 判断是否IE浏览器
    var isEdge = userAgent.indexOf('Windows NT 6.1; WOW64; Trident/7.0;') > -1 && !isIE // 判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1 // 判断是否Safari浏览器
    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1 // 判断Chrome浏览器
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
        reIE.test(userAgent)
        var fIEVersion = parseFloat(RegExp['$1'])
        if (fIEVersion === 7) { return 'IE7' } else if (fIEVersion === 8) { return 'IE8' } else if (fIEVersion === 9) { return 'IE9' } else if (fIEVersion === 10) { return 'IE10' } else { return '0' } // IE版本过低
    }
    if (isIE11) { return 'IE11' }
    if (isFF) { return 'FF' }
    if (isOpera) { return 'Opera' }
    if (isSafari) { return 'Safari' }
    if (isChrome) { return 'Chrome' }
    if (isEdge) { return 'Edge' }
}

let browserType = BrowserType()
if (!(browserType === 'Chrome' || browserType === 'IE11' || browserType === 'Safari' || browserType === 'FF' || browserType === 'Edge')) {
    document.body.innerHTML = `
    <div class="bowerTips" style="height:64px; text-align: center; line-height: 64px; background:rgba(240,248,255,1);color: #101E39;font-size: 16px;">
        由于您的浏览器版本太低，我们暂时关闭了某些高级功能。建议您升级或安装适配更好地 Google Chrome 浏览器。<a href="https://www.google.cn/chrome/" target="_blank" style="cursor: pointer;display: inline-block; height: 42px; width: 136px; line-height: 42px; text-align: center;background: #4682F2;color: #fff;">立即下载</a>
    </div>
    `
}
