import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VLine',
    'VButton',
    'Group',
    'RectShape',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})
