import { postJson } from '../../http'

/**
 * 首页接口
 */
export default {
    /**
     * 查询在建项目动态
     * @param {*} params 
     */
    fetchProjDynamicList(params) {
        return postJson('/lz/om/common/personal/building/project/dynamic', params)
    },
    /**
     * 查询经营看板
     * @param {*} params 
     */
    fetchBoardList(params) {
        return postJson('/lz/om/common/personal/business/board', params)
    },
    /**
     * 查询工作台
     * @param {*} params 
     */
    fetchWorkbenchList(params) {
        return postJson('/lz/om/common/personal/my/workbench', params)
    },
    /**
     * 查询用户信息
     */
    fetchInfo() {
        return postJson('/lz/account/passport/index')
    }
}
