import Mixins from '../mixins'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'
import { getCompanyToken, getCompanyId } from 'common/auth'

@Component({
    name: 'appCenter',
    mixins: [template],
    components: {
    }
})

export default class AppCenter extends Mixins {
    @Prop({
        type: Array,
        default: () => []
    })
    nodes

    @Prop({
        type: Boolean,
        default: false
    })
    isPersonalEdition

    redirectTo (node) {
        let { url, needValidVersion, outChain } = node
        let type = Object.prototype.toString.call(url)
        if (type === '[object Array]') {
            if (needValidVersion && !outChain) {
                if (this.version === 1) {
                    this.open(url[0] + '?companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
                } else {
                    this.open(url[1] + '?companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
                }
            }
        } else {
            // 外链不需要传token
            console.log(outChain)

            if (outChain) {
                this.open(url)
            } else {
                this.open(url + '?companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
            }
        }
    }
}
