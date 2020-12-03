import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './main'
import { filterOpts } from 'common/constant'

@Component({
    name: 'showAuth',
    mixins: [ template ],
    methods: {
        filterOpts
    }
})
export default class ShowAuth extends Vue {
    @Prop({
        type: Object,
        default: null
    })
    data

    list = []
    colorArr = [
        { label: 'enterprise', value: '#929292 #FFF #929292 #787878 #929292 #787878 #929292 #787878 #787878', text: '企业认证', url: `${this.config.api.PAM}/auth/user-auth` },
        { label: 'material', value: '#929292 #787878 #929292 #787878 #929292 #787878 #7E4D9F #787878 #ED1944', text: '材料供应商认证', url: `${this.config.api.PAM}/auth/user-auth` },
        { label: 'enginner', value: '#FFF #787878 #FFF #929292 #787878 #626262 #787878 #787878 #787878', text: '工程公司认证', url: `${this.config.api.PAM}/auth/user-auth` },
        { label: 'realname', value: '#929292 #787878 #929292 #787878 #929292 #787878', text: '实名认证', url: `${this.config.api.PAM}/auth/realName-auth` }
    ]

    created() {
        this.utils.setKeyValue(this.dialog, { size: '500px', title: this.data.title, visible: true })
    }

    mounted() {
    }
    
    handleClose() {
        this.$emit('input', false)
    }

    handleRedirect(path) {
        this.open(path)
    }

    @Watch('data', {
        immediate: true,
        deep: true
    })
    handleWatchAuthData(data) {
        if (!this.utils.isEmpty(data.obj)) {
            data.obj.forEach((item, index) => {
                item = item.toLowerCase()
                let obj = filterOpts(this.colorArr, item, 'label')
                this.list.push({
                    icon: `${item}-auth-big`,
                    color: obj.value,
                    label: obj.text,
                    redirectUrl: obj.url
                })
            })
        }
    }
}
