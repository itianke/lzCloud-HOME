/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import { getTypes, getModule, getStore } from '../utils/storeUtil'
import { getter, mutation, action } from '../utils/vuexUtil'
import storage from 'src/unit/storage'

export const storeName = 'user'

/** state **/
let state = {
    user: {},
    loggined: false,
    token: null,
    addRouters: [],
    isLoadedRoutes: false,
    roles: [],
    changeOrg: false
}

/** getters **/
let getters = getter(state, {
    user: state => state.user,
    loggined: state => state.loggined,
    addRouters: state => state.addRouters,
    routers: state => state.routers,
    isLoadedRoutes: state => state.isLoadedRoutes,
    roles: state => state.roles,
    changeOrg: state => state.changeOrg
})

/** mutations **/
let mutations = mutation(state, {
    SET_USER(state, data) {
        if (data) {
            state.user = Object.assign({}, data)
            storage.set('user', state.user)
            state.loggined = true
        } else {
            storage.set('user', '')
            state.user = null
            state.loggined = false
            state.token = null
        }
    },
    SET_USER_INFO(state, data) {
        if (data) {
            storage.set('userInfo', data)
        } else {
            storage.set('userInfo', '')
            state.userInfo = null
        }
    },
    SET_LOADED_ROUTES(state, value) {
        state.isLoadedRoutes = value
    },
    SET_ROLES(state, roles) {
        state.roles = roles
        storage.set('roles', roles)
    },
    SET_CHANGE_ORG(state, val) {
        state.changeOrg = val
    }
})

/** actions **/
let actions = action(state, {
    async setUser({ commit }, value) {
        commit('SET_USER', value)
    },
    async setUserInfo({ commit }, value) {
        commit('SET_USER_INFO', value)
    },
    loadedRoutes({ commit }, value) {
        commit('SET_LOADED_ROUTES', value)
    },
    changeOrg({ commit }, value) {
        commit('SET_CHANGE_ORG', value)
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
