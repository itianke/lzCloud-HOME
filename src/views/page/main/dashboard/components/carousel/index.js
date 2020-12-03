import Mixins from '../mixins'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'carousel',
    mixins: [template],
    components: {
    }
})

export default class Carousel extends Mixins {
    @Prop({
        type: Array,
        default: () => []
    })
    nodes

    get randomKey () {
        return new Date().getTime()
    }

    handleClick (item) {
        if (!item.link) return
        window.open(item.link)
    }
}
