import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './index.vue'
import { getCompanyToken, getCompanyId } from 'common/auth'
@Component({
    name: 'Guide',
    mixins: [ template ]
})
export default class Guide extends Vue {
    created() {

    }

    redirect(path) {
        this.open(path + '?companyToken=' + encodeURIComponent(getCompanyToken()) + '&companyId=' + encodeURIComponent(getCompanyId()))
        // this.open(path)
    }
}
