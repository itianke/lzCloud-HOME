/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import commonApi from 'src/api/modules/main/common'

export const storeName = 'common'

/** state **/
let state = {
    sidebar: {
        // opened: !+storage.get('sidebarStatus')
        opened: false
    },
    version: null,
    systemCode: null,
    subVersion: null
}

/** getters **/
let getters = getter(state, {
    sidebar: state => state.sidebar,
    version: state => state.version,
    systemCode: state => state.systemCode,
    subVersion: state => state.subVersion
})

/** mutations **/
let mutations = mutation(state, {
    TOGGLE_SIDEBAR(state) {
        state.sidebar.opened = !state.sidebar.opened
    },
    /**
     * 设置版本
     *
     * @param {*} state
     * @param {*} value
     */
    SET_VERSION(state, value) {
        state.version = value
    },
    /**
     * 设置系统代码
     *
     * @param {*} state
     * @param {*} value
     */
    SET_SYSTEM_CODE(state, value) {
        state.systemCode = value
    },
    /**
     * @description 设置系统版本
     * @author liugy
     * @date 2020-03-17
     * @param {*} state
     * @param {*} value
     */
    SET_SYSTEM_VERSION(state, value) {
        state.subVersion = value
    }
})

/** actions **/
let actions = action(state, {
    // sidebar展开状态
    async toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    async fetchVersion({ commit }, value) {
        return new Promise((resolve, reject) => {
            commonApi.fetchVersion().then((data) => {
                if (!data) {
                    // eslint-disable-next-line prefer-promise-reject-errors
                    reject('error')
                }
                commit('SET_VERSION', data.version)
                commit('SET_SYSTEM_CODE', data.subSystemCode)
                commit('SET_SYSTEM_VERSION', data.subVersion)
                resolve(data)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    setSubVersion({ commit }, value) {
        commit('SET_SYSTEM_VERSION', value)
    },
    setVersion({ commit }, value) {
        commit('SET_VERSION', value)
    }
})

/** module store **/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

/** exports **/
export let types = getTypes(store)
export let module = getModule(storeName)
export let Store = getStore(module, types)

export default store
