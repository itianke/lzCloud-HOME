
import Vue from 'src/views/base'
import { Component, Prop } from 'vue-property-decorator'

/**
 *公用首页组件js
 *
 * @export
 * @class Mixins
 * @extends {Vue}
 */
@Component
export default class Mixins extends Vue {
    @Prop({
        type: Boolean,
        default: true
    })
    show
    
    @Prop({
        type: Number,
        default: 18
    })
    lg

    @Prop({
        type: Number,
        default: 24
    })
    sm

    @Prop({
        type: Number,
        default: 24
    })
    xs

    @Prop({
        type: String
    })
    name

    /**
     *跳转链接
     *
     * @memberof Panel
     */
    @Prop({
        type: String,
        default: '/main/registry'
    })
    redirect
}
