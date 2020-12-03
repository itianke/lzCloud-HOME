import { postJson, postFile, postBlob } from '../../http'
import config from 'common/config'

export default {
    /**
     * 通用请求
     * @param {*} url
     * @param {*} data
     */
    sendMessage(url, data) {
        return postJson(url, data)
    },

    /**
     * 通用请求
     * @param {*} url
     * @param {*} data
     */
    fetchList(url, data) {
        return postJson(url, data)
    },
    /**
     * 通用上传url
     */
    uploadUrl() {
        return '/lz/platform/upload/file'
    },
    /**
     * 通用字典查询
     * @param {*} data
     */
    fetchDictList(data) {
        return postJson('/lz/om/operation/dict/query/list', data)
    },
    /**
     * 省市区列表
     *
     * @returns
     */
    fetchRegions() {
        return postJson('/lz/om/lz/platform/address/province/city/district')
    },
    /**
     * 省市列表
     *
     * @returns
     */
    fetchProvince() {
        return postJson('/lz/platform/address/province/city')
    },
    /**
     * 文件上传
     * @param {*} data
     */
    uploadFile(data) {
        return postFile('/lz/platform/upload/file', data)
    },
    /**
     * 部门下拉数据列表
     * @param {*} data
     */
    fetchApartmentSelectList(data) {
        return postJson('/lz/console/departments/find/tree', data)
    },
    /**
     * 查询职务数据列表
     * @param {*} data
     */
    fetchdDutiesSelectList(data) {
        return postJson('/lz/console/bizpost/find/selectList', data)
    },
    /**
     * 工作台信息加载
     *
     * @param {*} data
     * @returns
     */
    loadViewData(data) {
        return postJson('/lz/console/index/load', data)
    },
    /**
     * 上传文件预览
     * 返回base64字节码
     *
     * @param {*} data
     * @returns
     */
    uploadFilePreview(data) {
        return postJson('/lz/platform/file/view', data)
    },
    /**
     * 下拉通用查询
     * queryType PROJECT:项目  CONTRACT:合同
     */
    fetchSelectList(params) {
        return postJson('/lz/om/common/query/list', params)
    },
    /**
     * 文件上传路径
     * @param {*} data
     */
    uploadFilePath() {
        return `${config.api.host}/lz/platform/upload/file`
    },
    /**
     * 查询发起人列表
     *
     * @param {*} params
     * @returns
     */
    fetchPersonList(params) {
        return postJson('/lz/oa/auth/queryUser', params)
    },
    /**
     * 根据部门查询用户
     *
     * @param {*} params
     * @returns
     */
    fetchUserByDept(params) {
        return postJson('/lz/oa/deptPost/dept/user/list', params)
    },
    /**
     * 根据职务查询用户
     *
     * @param {*} params
     * @returns
     */
    fetchUserByPost(params) {
        return postJson('/lz/oa/deptPost/post/user/list', params)
    },
    /**
     * 公共用户信息查询
     *
     * @returns
     */
    fetchCommonUserInfo() {
        return postJson('/lz/om/common/query/user/info')
    },
    /**
     * 查询当前系统所属版本
     *
     * @returns
     */
    fetchVersion() {
        return postJson('/lz/om/version/query/queryVersion')
    },
    /**
     * 校验能否使用服务
     *
     * @param {*} params
     * @returns
     */
    checkServiceAvailable(params) {
        return postJson('/lz/console/serviceCentre/check/serviceAvailable', params)
    },
    /**
     * 校验是否购买服务
     *
     * @param {*} params
     * @returns
     */
    checkServiceAuth(params) {
        return postJson('/lz/console/serviceCentre/checkServiceAuth', params)
    },
    /**
     * 根据来源查询服务
     *
     * @param {*} params
     * @returns
     */
    fetchServiceBySource(params) {
        return postJson('/lz/console/serviceCentre/queryServiceBySource', params)
    },
    /**
     * 创建服务订单
     *
     * @param {*} params
     * @returns
     */
    createOrder(params) {
        return postJson('/lz/console/serviceCentre/createOrder', params)
    },
    /**
     * 查询部门列表
     *
     * @param {*} params
     * @returns
     */
    fetchPaneApartment(params) {
        return postJson('/lz/oa/deptPost/dept/list', params)
    },
    /**
     * 查询商务经理部门列表
     *
     * @param {*} params
     * @returns
     */
    fetchLeagueApartment(params) {
        return postJson('/lz/oa/league/queryUserDept', params)
    },
    /**
     * 查询商务经理等级
     * @param {*} params 
     */
    fetchLeagueLevel(params) {
        return postJson('/lz/oa/league/queryLevelName', params)
    },
    /**
     * 根据区域ID查询具体地址
     *
     * @param {*} params
     * @returns
     */
    fetchAddressById(params) {
        return postJson('/lz/om/lz/platform/address/queryByAddressId', params)
    },
    /**
     * 工作流查询职务列表
     *
     * @param {*} params
     * @returns
     */
    fetchPaneDuties(params) {
        return postJson('/lz/oa/deptPost/post/list', params)
    },

    /**
     * 通过上传文件名获取文件url
     */
    filePreview(params) {
        return postJson('/lz/platform/file/preview', params)
    },

    /**
     * 字典查询
     */
    getListByValue(params) {
        return postJson('/lz/om/operation/dict/get/listByValue', params)
    },

    /**
     * 导出获取list
     *
     * @param {*} params
     * @returns
     */
    exportList(params) {
        return postJson('/lz/om/export/find/title/list', params)
    },


    /**
     * 导出excel - 项目合同
     *
     * @param {*} params
     * @returns
     */
    exportExcel(params, url) {
        return postBlob(url, params)
    },

    /**
     * 优选管理获取中国/省/市列表
     *
     * @returns
     */
    getApplyFindAddress() {
        return postJson('/lz/om/league/apply/findAddress')
    },

    /**
     * 预算申请，获取优选信息
     */
    getLeagueInfo(params) {
        return postJson('/lz/om/league/cooperation/get/byProjectId', params)
    },
    /**
     * 校验组织是否存在
     *
     * @returns
     */
    checkOrganization(params) {
        return postJson('/lz/console/organization/check/checkOrganization', params)
    }
}
