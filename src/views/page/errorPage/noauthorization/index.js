import Vue from 'src/views/base'
import { Component, Watch } from 'vue-property-decorator'
import template from './index.vue'
import ShowAuth from '../show-auth'

@Component({
    name: 'no-authorization',
    mixins: [ template ],
    components: {
        ShowAuth
    }
})
export default class NoAuthorization extends Vue {
    loading = false
    code = null
    showDefault = true
    formName = 'serviceForm'
    ruleForm = {
        id: null,
        years: 1
    }
    rules = {
        years: [{ required: true, message: '请选择年限', trigger: 'change' }],
        version: [{ required: true, message: '请选择版本', trigger: 'change' }]
    } 
    options = {
        years: [
            { label: '一年', value: 1 },
            { label: '两年', value: 2 },
            { label: '三年', value: 3 }
        ],
        versions: []
    }
    authDialog = {
        visible: false,
        data: null
    }

    get status() {
        let value = null
        // 服务未购买 显示订购入口
        if (this.code === '-120509') {
            value = 0
        } else if (this.code === '-120510') {
            // 申请中
            value = 1
        } else if (this.code === '-120511') {
            // 已过期
            value = 2
        } else if (this.code === '-110105') {
            // 无权限
            value = 3
        } else if (this.code === '-120512') {
            // 购买失败 审核不通过
            value = 4
        } else if (this.code === '-120513') {
            // 服务未生效
            value = 5
        }
        return value
    }

    @Watch('$route', {
        deep: false
    })
    handleWatchRoute(route) {
        let { code } = route.query
        if (code) {
            this.code = code
        }
    }
    
    created() {
        let { code } = this.$route.query
        if (code) {
            this.code = code
        }
        this.loadInfo()
    }

    loadInfo() {
        this.api.commonApi.fetchServiceBySource({ source: 'om' }).then(resp => {
            this.options.versions = resp
        })
    }
    handleShowBuy() {
        this.dialog.visible = true
        this.dialog.title = '订购服务'
    }
    handleShowAuth(data) {
        this.authDialog.visible = true
        this.authDialog.data = {
            title: '提示',
            obj: data
        }
    }
    handleClose() {
        this.dialog.visible = false
        this.showDefault = true
    }
    handleCloseTip() {
        this.handleClose()
        this.$router.replace({
            path: '/redirect/error/noauthorization'
        })
    }
    handleCreateOrder() {
        this.$refs[this.formName].validate(valid => {
            if (valid) {
                let params = {
                    id: this.ruleForm.version,
                    years: this.ruleForm.years
                }
                this.api.commonApi.checkServiceAuth({ serviceId: this.ruleForm.version }).then(resp => {
                    if (resp && resp.list && resp.list.length > 0) {
                        this.handleShowAuth(resp.list)
                    } else {
                        this.createOrder(params)
                    }
                })
            }
        })
    }
    createOrder(params) {
        this.loading = true
        this.api.commonApi
            .createOrder(params)
            .then(() => {
                this.showDefault = false
                this.loading = false
            })
            .catch(() => {
                this.loading = false
            })
    }
}
