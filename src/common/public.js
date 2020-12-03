import Vue from 'vue'
import Component from 'vue-class-component'
import { phoneFormat, dateFormat, dateTimeFormat, priceFormat, showPercent, moneyFilter, moneyFormat, percentTwoNum, decimalTwoNum, registeredCapitalFilter } from 'common/filters'
import commonRules from './rules'
import { validString, validateAmount, validateMobile, validateArea, validatePercent, validateBankNoRquired, validCompanyTel } from './customRules'
import { filterOpts } from 'common/constant'
import { Store as CommonStore } from 'store/modules/common'
import busOpt from './businessOpts'
import './reToFixed'

/**
 * 通用基类
 *
 * @export
 * @class Public
 * @extends {Vue}
 */
@Component({
    filters: {
        phoneFormat,
        dateFormat,
        dateTimeFormat,
        priceFormat,
        showPercent,
        moneyFilter,
        moneyFormat,
        percentTwoNum,
        decimalTwoNum,
        registeredCapitalFilter
    },
    methods: {
        validString,
        validateAmount,
        validateMobile,
        validateArea,
        validatePercent,
        validateBankNoRquired,
        validCompanyTel,
        filterOpts
    }
})
export default class Public extends Vue {
    /**
     * 系统版本 1:基础 2:企业
     */
    @CommonStore.getter('version') version

    btnLoading = false
    tableLoading = true
    pageLoading = true
    pageLoadingText = 'LOADING'
    userInfo = {}
    table = {
        data: [],
        url: null,
        maxHeight: 0,
        hasData: null
    }
    pagination = {
        total: 0,
        page: 1,
        size: 10,
        pageSizes: [10, 20, 50, 100]
    }
    dialog = {
        data: null,
        visible: false,
        title: null,
        size: 'normal'
    }
    tabs = {
        activeName: null
    }
    rules = commonRules
    searchParams = {}
    typeArr = ['primary', 'primary', 'success', 'danger', 'warning', 'info', 'info']
    printData = {}

    hidePageLoading() {
        if (this.pageLoading) {
            setTimeout(() => {
                this.pageLoading = false
            }, 200)
        }
    }

    /**
     * 业务类型
     *
     * @readonly
     * @memberof Public
     */
    get bussinessOptType() {
        let { name } = this.$route
        let busObj = this.utils.arrayAttrToObj(busOpt, 'name', name)

        if (busObj) {
            let versionObj = busObj[`version${this.version}`]
            return versionObj ? versionObj.model : null
        }
        return null
    }

    /**
     * 权限码列表
     *
     * @readonly
     * @memberof Public
     */
    get rolesData() {
        return localStorage.getItem('z_roles')
    }
}
