export default (name) => () => import(`@/views/page/${name}/.vue`)
