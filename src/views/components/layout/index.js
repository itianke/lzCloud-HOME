import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './layout.vue'
import { setCompanyId, setCompanyToken } from 'common/auth'
import { Store as CommonStore } from 'store/modules/common'
import Cookies from 'js-cookie'

@Component({
    name: 'layout',
    mixins: [template],
    components: {},
    provide() {
        return {
            config: this.config.api,
            sidebar: {
                sysName: '领筑云看板',
                opened: () => this.opened
            },
            version: this.version
        }
    }
})
export default class Layout extends Vue {
    @CommonStore.action('setSubVersion') setSubVersion
    @CommonStore.getter('sidebar') sidebar

    menuItems = [];
    moduleName = '';
    defaultActive = '2-1';
    moduleItems = [];
    selected = null;
    headerInfo = {
        unReaded: 0,
        unTreated: 0
    };
    isOpend = false;

    driver = null;

    get isMsgModelShow () {
        return JSON.parse(Cookies.get('isFirst'))
    }

    created () {
        setTimeout(() => {
            Cookies.set('isFirst', false, { domain: this.config.api.domain })
        }, 1000)
    }

    handleSendMessage () {
        this.open(this.config.api.PMM + '/sended/new?id=' + this.selected)
    }

    handleMouseOver () {
        this.isOpend = true
    }

    handleMouseOut () {
        this.isOpend = false
    }

    /**
     * 进入系统时校验组织是否存在
     *
     * @returns
     * @memberof Layout
     */
    async handleBeforeActive () {
        // eslint-disable-next-line no-return-await
        return await this.api.commonApi
            .checkOrganization()
            .then(() => {
                return true
            })
            .catch(() => {
                return false
            })
    }

    /**
     * 切换组织
     */
    handleChangeOrg (data) {
        if (data) {
            // 清空其他页签 默认到首页
            // this.handleDelOtherTag()
            this.handleSetCompanyData(data)
            this.handleShowMessage()
        }
    }

    handleSetCompanyData (data) {
        // 设置切换后的组织信息
        setCompanyId(data.companyId)
        setCompanyToken(data.companyToken)
    }

    /**
     * 提示切换成功信息
     *
     * @memberof Layout
     */
    handleShowMessage () {
        this.message('切换组织成功', { type: 'success' }, () => {
            this.handleDelOtherTag()
        })
    }

    /**
     * 清空其他页签
     *
     * @memberof Layout
     */
    handleDelOtherTag () {
        let dashboardObj = {
            name: 'dashboard',
            path: '/dashboard',
            fullPath: '/dashboard',
            title: '首页',
            meta: {
                title: '首页',
                noCache: true
            }
        }
        this.$store.dispatch('delAllViews')
        this.$store.dispatch('addVisitedView', dashboardObj)
        this.$nextTick(() => {
            this.$router.replace({
                path: '/redirect' + dashboardObj.fullPath
            })
        })
    }

    /**
     * @description 查询用户信息
     * @author liugy
     * @date 2020-03-19
     * @memberof Dashboard
     */
    fetchInfo () {
        this.api.homeApi.fetchInfo().then(resp => {
            if (resp) {
                this.setSubVersion(resp.subVersion)
            }
        })
    }
}
