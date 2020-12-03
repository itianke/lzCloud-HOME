import Vue from 'vue'

const components = []
const install = (Vue, opts) => {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

Vue.use(install)
