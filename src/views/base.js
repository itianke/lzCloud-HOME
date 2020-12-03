/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'vue'
import api from 'api'
import config from 'common/config'
import { MessageBox, Message } from 'element-ui'
import { checkAcls } from 'common/acl'
import * as utils from 'common/utils'
// import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import Public from 'common/public'
import storage from 'unit/storage'


// @Component
export default class Base extends mixins(Vue, Public) {
    api = api
    config = config
    utils = utils

    // 页面跳转
    goTo (options) {
        this.$router.push(options)
    }

    // 页签打开
    open (path) {
        let templateWindow = window.open()
        templateWindow.location = path
    }

    /**
     * sleep 定时器
     * @param {number} time
     * @returns {Promise}
     */
    sleep (time = 0) {
        return new Promise((resolve) => {
            let timeId = setTimeout(function () {
                resolve(timeId)
            }, time)
        })
    }

    /**
     * alert
     * @param {string} message  提示内容
     * @param {string} title    标题
     * @param {object} options  alert参数
     */
    alert (message, options, title = '') {
        let defOpts = {
            confirmButtonText: '确定',
            confirmButtonClass: 'el-button--primary',
            customClass: 'el-message-box',
            iconClass: `alert-${options.type}`,
            type: ''
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.alert(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * confirm
     * @param {string} message  确认内容
     * @param {string} title    标题
     * @param {object} options  confirm参数
     * @return {Promise}
     * @example
     *  this.confirm('确认').then(confirm => {
     *      if (confirm) {
     *          ...
     *      }
     *  })
     */
    confirm (message, title = '提示', options) {
        let defOpts = {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--primary',
            customClass: 'message-box',
            type: 'warning'
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.confirm(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * confirm
     * @param {string} message  确认内容
     * @param {string} title    标题
     * @param {object} options  confirm参数
     * @return {Promise}
     * @example
     *  this.confirm('确认').then(confirm => {
     *      if (confirm) {
     *          ...
     *      }
     *  })
     */
    confirmBox (message, options) {
        let defOpts = {
            message: message,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--primary',
            customClass: 'message-box',
            type: 'warning'
        }
        defOpts = { ...defOpts, ...options }
        
        return new Promise(async (resolve) => {
            try {
                await MessageBox(defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * confirm
     * @param {string} message  提示内容
     * @param {string} title    标题
     * @param {object} options  延迟时间后执行回调函数
     * @return {Promise}
     * @example
     *  this.message('操作成功', { type: 'success' }, () => {  ...dosomething })
     */
    message (tips, opt, callback) {
        let defOpts = {
            type: `${opt.type}`,
            dangerouslyUseHTMLString: true,
            customClass: `${opt.type}`,
            iconClass: `msg-${opt.type}`,
            duration: 1000,
            message: `<div class="p1">${tips}</div>`,
            onClose: callback
        }
        defOpts = { ...defOpts, ...opt }
        return new Promise(async (resolve) => {
            try {
                await Message(defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * 将 map 转换成 select 选项
     * @param {*} obj
     */
    mapToOptions (obj) {
        let res = []
        Object.keys(obj).forEach((key) => {
            res.push({
                value: String(key),
                label: obj[key]
            })
        })
        return res
    }

    /**
     * validate form
     * @param formName
     */
    validate (refName) {
        return new Promise((resolve) => {
            let ref = refName
            if (typeof refName === 'string') {
                ref = this.$refs[refName]
            }
            ref.validate((valid) => {
                resolve(valid)
            })
        })
    }

    /**
     * 权限判断
     * @param {string[]} acls     权限数组
     * @returns {Boolean}
     * @example
     *      <span v-if="checkAcls(['permission_name', ...])">
     *          ...
     *      </span>
     */
    checkAcls (acls = []) {
        return checkAcls(acls)
    }

    /**
     * 获取用户信息
     */
    getUserInfo () {
        this.userInfo = Object.assign({}, storage.get('userInfo'))
    }

    /**
     * 返回上一页
     *
     * @memberof Base
     */
    goBack () {
        this.$router.go(-1)
    }

    /**
     * 判断是否有权限
     *
     * @param {*} code
     * @returns
     * @memberof Base
     */
    hasPermission (code) {
        return this.rolesData && this.rolesData.includes(code)
    }


    /**
     * 页面判断是否显示按钮
     */
    isShowBtnPermission (status, code) {
        return status && this.hasPermission(code)
    }

    /**
     * 清除当前页签
     *
     * @memberof Base
     */
    clearCurrentTag (viewArray) {
        // 清除列表缓存（保存等行为的时候）
        if (viewArray && viewArray.length > 0) {
            viewArray.filter(viewName => {
                let listView = {
                    name: viewName
                }
                this.$store.dispatch('delCachedView', listView)
            })
        }
    }

    /**
     * 判断是否有查看项目详情权限
     */
    getProjectDetailPermissionCode () {
        return '0600010202'
    }

    /**
     * 跳转至项目详情页面 -- 根据不同状态跳转至不同页面
     * 项目状态 0草稿1报备中2已报备3投标中4已中标5未中标6建设中7已竣工8已过期9已关闭10已删除
     * @param {*} status 项目状态
     * @param {*} projId 项目id
     */
    toProjectDetailPage (status, projId) {
        switch (Number(status)) {
            case 0:
            case 1:
            case 10:
                this.$router.push('/operation/project-preparation/preparation-detail?id=' + projId) // 报备中
                break
            case 2:
            case 3:
            case 4:
            case 5:
            case 8:
            case 9:
                this.$router.push('/operation/project-preparation/setup-detail?id=' + projId) // 已立项
                break
            case 6:
            case 7:
                this.$router.push('/operation/project-preparation/signed-detail?id=' + projId) // 在建 && 竣工
                break
            default:
                break
        }
    }

    /**
     * 根据key获取缓存的查询结果集
     * @param {*} key 
     */
    getCachedSearchConfig(key) {
        // 获取缓存中的配置
        let _configs = storage.get(key)
        // 如果已经设置过 则直接读取缓存
        if (!this.utils.isEmpty(_configs)) {
            try {
                let configProps = JSON.parse(_configs)
                return configProps
            } catch (error) {
                console.error('parse error', error)
                return null
            }
        }
        return null
    }
}
