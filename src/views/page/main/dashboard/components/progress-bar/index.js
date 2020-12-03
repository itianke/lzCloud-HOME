import Vue from 'src/views/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './index.vue'

@Component({
    name: 'progress-bar',
    mixins: [template]
})
export default class ProgressBar extends Vue {
    @Prop({
        type: String,
        default: 'horizontal'
    })
    direction

    @Prop({
        type: String,
        default: 'line'
    })
    type

    @Prop({
        type: String,
        default: null
    })
    text

    @Prop({
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
    })
    percentage

    @Prop({
        type: Number,
        default: 6
    })
    strokeWidth

    @Prop({
        type: [String, Array, Function],
        default: ''
    })
    color

    @Prop({
        type: String,
        default: '#2DD7AD'
    })
    fontColor

    @Prop({
        type: Array,
        default: () => []
    })
    riskList

    get barStyle () {
        const style = {}
        style.width = this.percentage + '%'
        style.backgroundColor = this.getCurrentColor(this.percentage)
        return style
    }

    get percentStyle () {
        if (this.percentage >= 100) {
            return {
                fontSize: '32px'
            }
        }
    }

    get symbolStyle () {
        if (this.percentage >= 100) {
            return {
                fontSize: '20px'
            }
        }
    }

    created () {

    }

    getCurrentColor (percentage) {
        if (typeof this.color === 'function') {
            return this.color(percentage)
        } else if (typeof this.color === 'string') {
            return this.color
        } else {
            return this.getLevelColor(percentage)
        }
    }

    getLevelColor (percentage) {
        const colorArray = this.getColorArray.sort((a, b) => a.percentage - b.percentage)
        for (let i = 0; i < colorArray.length; i++) {
            let item = colorArray[i]
            if (item.percentage > percentage) {
                return item.color
            }
        }
        return colorArray[colorArray.length - 1].color
    }

    getColorArray () {
        const color = this.color
        const span = 100 / color.length
        return color.map((seriesColor, index) => {
            if (typeof seriesColor === 'string') {
                return {
                    color: seriesColor,
                    progress: (index + 1) * span
                }
            }
            return seriesColor
        })
    }
}
