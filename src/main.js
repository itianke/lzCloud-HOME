/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import 'babel-polyfill'
import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'

import './common/browserCheck'
import 'normalize.css/normalize.css'
import 'ui/element'
import 'lz-cloud-ui/lib/element-theme/index.css'
import 'lz-cloud-ui/lib/theme-chalk/index.css'
import 'lz-cloud-ui/lib/theme-chalk/iconfont.css'
import 'lz-cloud-ui/lib/theme-chalk/icon-symbol.js'
import './permission'
import './directive'

import router from './router'
import store from 'store'
import App from 'src/views/app'
import 'src/style/app.scss'
import meta from 'vue-meta'
import * as validate from 'src/common/validate'
// import '@/views/components'

// import all icons
import * as svgicon from 'vue-svgicon'
import './views/icons'

import LzCloudUI from 'lz-cloud-ui'
import clipboard from 'clipboard'

Vue.use(LzCloudUI)
Vue.use(svgicon, { tagName: 'icon' })
Vue.use(meta, { keyName: 'metaInfo' })

Vue.prototype.clipboard = clipboard
Vue.prototype.$validate = validate

// 初始化上传组件
window.initLzUploadFileComponent(process.env.NODE_ENV)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
