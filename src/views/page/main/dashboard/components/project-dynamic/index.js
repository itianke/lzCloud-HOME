import Vue from 'src/views/base'
import { Component, Prop, Watch } from 'vue-property-decorator'
import template from './index.vue'
import ProgressBar from '../progress-bar'
import { getCompanyToken, getCompanyId } from 'common/auth'

@Component({
    name: 'projectDynamic',
    mixins: [template],
    components: {
        ProgressBar
    }
})
export default class ProjectDynamic extends Vue {
    @Prop({
        type: Array,
        default: () => []
    })
    nodes

    @Prop({
        type: Boolean,
        default: false
    })
    loading

    projLoading = false

    @Watch('loading', {
        immediate: true
    })
    handleWatchLoading (loading) {
        this.projLoading = loading
    }

    created () {
    }

    getWarningStyle (warning) {
        let obj = {}
        obj.marginBottom = warning ? '24px' : '28px'
        return obj
    }

    redirect (path) {
        this.open(path + '&actName=1&turn=1&companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
    }
}
