import Vue from 'vue'
import { getRoles } from 'common/auth'

// 按钮点击波纹效果
Vue.directive('waves', {
    bind (el, binding) {
        el.addEventListener('click', e => {
            const customOpts = Object.assign({}, binding.value)
            const opts = Object.assign({
                ele: el, // 波纹作用元素
                type: 'hit', // hit点击位置扩散center中心点扩展
                color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
            }, customOpts)
            const target = opts.ele
            if (target) {
                target.style.position = 'relative'
                target.style.overflow = 'hidden'
                const rect = target.getBoundingClientRect()
                let ripple = target.querySelector('.waves-ripple')
                if (!ripple) {
                    ripple = document.createElement('span')
                    ripple.className = 'waves-ripple'
                    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
                    target.appendChild(ripple)
                } else {
                    ripple.className = 'waves-ripple'
                }
                switch (opts.type) {
                    case 'center':
                        ripple.style.top = (rect.height / 2 - ripple.offsetHeight / 2) + 'px'
                        ripple.style.left = (rect.width / 2 - ripple.offsetWidth / 2) + 'px'
                        break
                    default:
                        ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px'
                        ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px'
                }
                ripple.style.backgroundColor = opts.color
                ripple.className = 'waves-ripple z-active'
                return false
            }
        }, false)
    }
})

Vue.directive('has', {
    bind (el, binding) {
        const { value } = binding
        getRoles().then((roles) => {
            if (value && roles) {
                if (!roles.includes(value.toString())) {
                    if (el.tagName === 'A' || el.tagName === 'IMG') {
                        el.className = ''
                        el.style.pointerEvents = 'none'
                    } else {
                        el.style.display = 'none'
                    }
                }
            }
        })
    }
})

// v-dialogDrag: 弹窗拖拽
Vue.directive('dialogDrag', {
    bind (el, binding, vnode, oldVnode) {
        const dialogHeaderEl = el.querySelector('.el-dialog__header')
        const dragDom = el.querySelector('.el-dialog')
        dialogHeaderEl.style.cursor = 'move'

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)

        dialogHeaderEl.onmousedown = (e) => {
            // 鼠标按下，计算当前元素距离可视区的距离
            const disX = e.clientX - dialogHeaderEl.offsetLeft
            const disY = e.clientY - dialogHeaderEl.offsetTop

            // 获取到的值带px 正则匹配替换
            let styL, styT

            // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
            if (sty.left.includes('%')) {
                styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
                styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
            } else {
                styL = +sty.left.replace(/\px/g, '')
                styT = +sty.top.replace(/\px/g, '')
            };

            document.onmousemove = function (e) {
                // 通过事件委托，计算移动的距离
                const l = e.clientX - disX
                const t = e.clientY - disY

                // 移动当前元素
                dragDom.style.left = `${l + styL}px`
                dragDom.style.top = `${t + styT}px`

                // 将此时的位置传出去
                // binding.value({x:e.pageX,y:e.pageY})
            }

            document.onmouseup = function (e) {
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }
})
