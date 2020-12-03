import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './dashboard.vue'
import AppCenter from './components/app-center'
import AppCarousel from './components/carousel'
import Board from './components/board'
import Workbench from './components/workbench'
import ProjectDynamic from './components/project-dynamic'
import Guide from './components/guide'
import { appCenterData, carouselData, boardData, workbenchData } from './data'
import { getCompanyId, getCompanyToken } from 'common/auth'
import { Store as ComStore } from 'store/modules/common'

/**
 * @description 商务经理个人版首页
 * @author liugy
 * @date 2020-03-16
 * @export
 * @class Dashboard
 * @extends {Vue}
 */
@Component({
    name: 'dashboard',
    mixins: [template],
    components: {
        AppCenter,
        AppCarousel,
        Board,
        Workbench,
        ProjectDynamic,
        Guide
    }
})

export default class Dashboard extends Vue {
    @ComStore.getter('subVersion') subVersion
    @ComStore.action('setSubVersion') setSubVersion
    @ComStore.action('setVersion') setVersion
    options = {
        appCenterData,
        carouselData,
        boardData,
        workbenchData,
        projectDynamicData: []
    }
    info = {
        userName: null,
        companyName: null,
        post: null,
        dept: null,
        status: null
    }
    ruleForm = {
        workbenchList: []
    }

    /**
     * @description 是否已加入组织
     * @readonly
     * @memberof Dashboard
     */
    get hasOrgs () {
        return !this.utils.isEmpty(this.info.companyName)
    }

    get infoStyle () {
        if (!this.hasOrgs) {
            return {
                width: '100%',
                maxWidth: '1286px',
                margin: 'auto',
                marginBottom: '16px'
            }
        }
    }

    /**
     * @description 是否为商务经理个人版
     * @readonly
     * @memberof Dashboard
     */
    get isPersonalEdition () {
        return this.subVersion === 3
    }

    created () {
        this.init()
    }

    async init () {
        await this.fetchInfo()
        await this.fetchBoard()
        await this.fetchWorkbench()
        await this.fetchProjDynamic()
    }

    /**
     * @description 跳转
     * @author liugy
     * @date 2020-03-17
     * @param {*} _module
     * @param {*} path
     * @memberof Dashboard
     */
    redirectTo (_module, path) {
        this.open(this.config.api[_module] + path + '?companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
    }

    /**
     * @description 查询经营看板数据
     * @author liugy
     * @date 2020-03-18
     * @memberof Dashboard
     */
    fetchBoard () {
        if (!this.hasOrgs) return
        return this.api.homeApi.fetchBoardList().then(resp => {
            if (resp) {
                let keyArr = Object.keys(resp)
                keyArr.forEach((key, index) => {
                    let obj = this.utils.arrayAttrToObj(this.options.boardData, 'prop', key)
                    if (obj) {
                        obj.count = resp[key]
                    }
                })
            }
        })
    }

    /**
     * @description 查询我的工作台数据
     * @author liugy
     * @date 2020-03-18
     * @memberof Dashboard
     */
    fetchWorkbench () {
        if (!this.hasOrgs) return
        return this.api.homeApi.fetchWorkbenchList().then(resp => {
            if (resp) {
                this.ruleForm.workbenchList = resp.map((item, index) => {
                    let obj = this.utils.arrayAttrToObj(this.options.workbenchData, 'type', item.bizType)
                    if (obj) {
                        item.path = obj.path
                        item.iconName = obj.iconName
                    }

                    let temp = {
                        path: item.path,
                        iconName: item.iconName,
                        label: item.bizTypeDesc,
                        bizType: item.bizType,
                        count: item.pendingCount,
                        sort: item.sortNum,
                        code: item.errorCode,
                        servicePersonalNames: item.servicePersonalNames,
                        validityEndTime: item.validityEndTime,
                        validityStartTime: item.validityStartTime
                    }
                    return temp
                })
                // 按待办数量最多的正排序
                // this.ruleForm.workbenchList.sort((a, b) => b.sort - a.sort)
                // 商务经理个人版最多只显示16个待办
                if (this.isPersonalEdition) {
                    console.log('this.ruleForm.workbenchList', this.ruleForm.workbenchList)
                    this.ruleForm.workbenchList.splice(15, this.ruleForm.workbenchList.length)
                } else {
                    this.ruleForm.workbenchList = this.ruleForm.workbenchList.filter(item => item.count > 0)
                }
            }
        })
    }

    /**
     * @description 查询在建项目数据
     * @author liugy
     * @date 2020-03-19
     * @memberof Dashboard
     */
    fetchProjDynamic (params = {}) {
        if (!this.hasOrgs) return
        params.pageNum = this.pagination.page
        params.pageSize = this.pagination.size
        params.projStatus = 6
        params.companyId = getCompanyId()
        this.pageLoading = true
        return this.api.homeApi.fetchProjDynamicList(params).then(resp => {
            if (resp) {
                this.pageLoading = false
                this.options.projectDynamicData = resp.list
                this.pagination.total = resp.total
            }
        })
    }

    /**
     * @description 查询用户信息
     * @author liugy
     * @date 2020-03-19
     * @memberof Dashboard
     */
    fetchInfo () {
        return this.api.homeApi.fetchInfo().then(resp => {
            if (resp) {
                this.info = { ...resp }
                if (this.hasOrgs) {
                    this.info.status = 1
                } else {
                    this.info.status = 2
                }
                this.setSubVersion(resp.subVersion)
                this.setVersion(resp.version)
            }
        })
    }

    handleSizeChange (val) {
        this.pagination.size = val
        this.fetchProjDynamic()
    }

    handleCurrentChange (val) {
        this.pagination.page = val
        this.fetchProjDynamic()
    }
}
