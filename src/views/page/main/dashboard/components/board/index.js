import Mixins from '../mixins'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'
import countTo from 'vue-count-to'

@Component({
    name: 'board',
    mixins: [template],
    components: {
        countTo
    }
})

export default class Board extends Mixins {
    @Prop({
        type: Array,
        default: () => []
    })
    nodes
}
