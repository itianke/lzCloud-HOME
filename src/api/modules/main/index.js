import { postJson } from '../../http'

export default {
    // 查询用户详细信息
    fetchUserInfo(data) {
        return postJson('/lz/passport/comm/passport/loginUser', data)
    },
    // 获取菜单列表
    fetchMenus(data) {
        return postJson('/lz/platform/curuser/menu/list', data)
    },

    // 获取菜单列表
    fetchHomeInfo(data) {
        return postJson('/lz/om/common/index', data)
    },

    // 获取代办列表
    fetchTodos() {
        return postJson('/lz/om/common/myAuditStatistics')
    }
}
