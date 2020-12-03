const tagsView = {
    state: {
        visitedViews: [],
        cachedViews: []
    },
    mutations: {
        ADD_VISITED_VIEW: (state, view) => {
            let idx = -1
            let newView = {}
            let flag = state.visitedViews.some((v, index) => {
                let isHaveSame = v.path === view.path
                if (isHaveSame) {
                    idx = index
                    newView = v
                    newView.query = view.query
                    newView.fullPath = view.fullPath
                }
                return isHaveSame
            })
            if (flag) {
                (idx > -1) && (state.visitedViews.splice(idx, 1, newView))
            } else {
                let obj = {
                    title: view.meta.title,
                    name: view.name,
                    path: view.path,
                    fullPath: view.fullPath,
                    query: view.query,
                    params: view.params
                    // matched: view.matched
                }
                state.visitedViews.push(obj)
            }
        },
        ADD_CACHED_VIEW: (state, view) => {
            if (state.cachedViews.includes(view.name)) return
            if (!view.meta.noCache) {
                state.cachedViews.push(view.name)
            }
        },

        DEL_VISITED_VIEW: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews.splice(i, 1)
                    break
                }
            }
        },
        DEL_CACHED_VIEW: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },

        DEL_OTHERS_VISITED_VIEWS: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews = state.visitedViews.slice(i, i + 1)
                    break
                }
            }
            // 除首页外 清空所有缓存的路由
            if (view.name === 'dashboard') {
                state.visitedViews = []
            }
        },
        DEL_OTHERS_CACHED_VIEWS: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews = state.cachedViews.slice(index, index + 1)
                    break
                }
            }
            // 除首页外 清空所有缓存的路由
            if (view.name === 'dashboard') {
                state.cachedViews = []
            }
        },

        DEL_ALL_VISITED_VIEWS: state => {
            state.visitedViews = []
        },
        DEL_ALL_CACHED_VIEWS: state => {
            state.cachedViews = []
        },

        UPDATE_VISITED_VIEW: (state, view) => {
            for (let v of state.visitedViews) {
                if (v.path === view.path) {
                    v = Object.assign(v, view)
                    break
                }
            }
        }

    },
    actions: {
        addView({ dispatch }, view) {
            dispatch('addVisitedView', view)
            dispatch('addCachedView', view)
        },
        addVisitedView({ commit }, view) {
            commit('ADD_VISITED_VIEW', view)
        },
        addCachedView({ commit }, view) {
            commit('ADD_CACHED_VIEW', view)
        },
        delView({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delVisitedView', view)
                dispatch('delCachedView', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delVisitedView({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_VISITED_VIEW', view)
                resolve([...state.visitedViews])
            })
        },
        delCachedView({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_CACHED_VIEW', view)
                resolve([...state.cachedViews])
            })
        },

        delOthersViews({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delOthersVisitedViews', view)
                dispatch('delOthersCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delOthersVisitedViews({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        },
        delOthersCachedViews({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_CACHED_VIEWS', view)
                resolve([...state.cachedViews])
            })
        },

        delAllViews({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delAllVisitedViews', view)
                dispatch('delAllCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delAllVisitedViews({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_VISITED_VIEWS')
                resolve([...state.visitedViews])
            })
        },
        delAllCachedViews({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_CACHED_VIEWS')
                resolve([...state.cachedViews])
            })
        },

        updateVisitedView({ commit }, view) {
            commit('UPDATE_VISITED_VIEW', view)
        }
    }
}

export default tagsView
