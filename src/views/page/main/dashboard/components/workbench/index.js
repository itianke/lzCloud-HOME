import Mixins from '../mixins'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'
import countTo from 'vue-count-to'
import { getCompanyToken, getCompanyId } from 'common/auth'

@Component({
    name: 'workbench',
    mixins: [template],
    components: {
        countTo
    }
})

export default class Workbench extends Mixins {
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

    // 异常类型
    warningArr = [{
        type: -101,
        active: 'risk',
        code: 'errorCode',
        servicePersonalNames: 'servicePersonalNames'
    }, {
        type: -102,
        active: 'warningCount',
        servicePersonalNames: 'servicePersonalNames'
    }, {
        type: -103,
        validityEndTime: 'validityEndTime',
        servicePersonalNames: 'servicePersonalNames'
    }, {
        type: -104,
        active: '1',
        validityEndTime: 'validityEndTime',
        servicePersonalNames: 'servicePersonalNames'
    }]

    get viewWidth () {
        return document.body.clientWidth > 1440
    }

    redirectTo (path, params) {
        let { code, bizType, validityStartTime, validityEndTime, servicePersonalNames } = params
        console.log('params', params)
        let obj = this.utils.arrayAttrToObj(this.warningArr, 'type', bizType)
        let url = `${path}?`
        let arr = []
        let companyToken = getCompanyToken()
        let companyId = getCompanyId()
        if (!this.utils.isEmpty(companyToken)) {
            arr.push(`companyToken=${encodeURIComponent(companyToken)}`)
        }
        if (!this.utils.isEmpty(companyId)) {
            arr.push(`companyId=${encodeURIComponent(companyId)}`)
        }
        if (code) {
            arr.push(`code=${code}`)
        }
        if (obj && obj.active) {
            arr.push(`active=${obj.active}`)
        }
        if (obj && obj.tabs) {
            arr.push(`tabs=${obj.tabs}`)
        }
        if (validityStartTime) {
            arr.push(`validityStartTime=${validityStartTime}`)
        }
        if (validityEndTime) {
            arr.push(`validityEndTime=${validityEndTime}`)
        }
        if (servicePersonalNames) {
            arr.push(`servicePersonalNames=${servicePersonalNames}`)
        }
        this.open(url + arr.join('&'))
    }

    isWarningType (type) {
        return this.utils.arrayAttrToObj(this.warningArr, 'type', type)
    }
}
