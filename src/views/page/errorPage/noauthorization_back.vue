<template>
    <div class="auth-content">
        <div class="auth-box">
            <div class="auth-img">
                <img src="@/assets/noauthorization/logo2x.png" alt="noauthorization" />
            </div>
            <div class="auth-text">
                <div class="auth-name">领筑工程云</div>
                <div class="auth-desc">工程全生命周期云管理</div>
                <div class="auth-desc">项目一秒掌握、流程一键操作、结算一步到位</div>
                <div class="auth-desc">节省80%人力成本、提高100%效率</div>
            </div>
            <div class="auth-button">
                <div class="auth-statusDesc" v-if="status === 1">已申请，请等待工作人员联系!</div>
                <div class="auth-statusDesc" v-if="status === 2">服务已过期，请重新购买!</div>
                <div class="auth-statusDesc" v-if="status === 3">无权限，请先跟管理员申请!</div>
                <div class="auth-statusDesc" v-if="status === 4">审批不通过，请重新购买!</div>
                <div class="auth-statusDesc" v-if="status === 5">服务暂未生效，请耐心等待!</div>
                <el-button type="primary" @click="handleShowBuy" v-if="status === 0 || status === 2 || status === 4">立即订购</el-button>
            </div>
        </div>

        <el-dialog v-if="dialog.visible" :title="dialog.title" width="500px" :visible.sync="dialog.visible" @close="handleClose" append-to-body>
            <el-form :ref="formName" :model="ruleForm" :rules="rules" label-position="left">
                <template v-if="showDefault">
                    <el-form-item label="订购年限" prop="years" label-width="100px">
                        <el-select v-model="ruleForm.years" disabled>
                            <el-option v-for="(item, index) in options.years" :key="index" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订购版本" prop="version" label-width="100px">
                        <el-select v-model="ruleForm.version" placeholder="请选择版本" clearable>
                            <el-option v-for="(item, index) in options.versions" :key="index" :label="item.servName" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="center">
                        <el-button type="primary" @click="handleCreateOrder" :loading="loading" class="auth-btn">立即订购</el-button>
                    </el-form-item>
                </template>
                <template v-else>
                    <div class="auth-success">
                        <icon icon="success" color="#31A400" width="60" height="60" />
                        <span>申请成功!工作人员将与您联系，请耐心等待！</span>
                    </div>
                    <el-form-item class="center">
                        <el-button @click="handleCloseTip" class="auth-btn">关&nbsp;闭</el-button>
                    </el-form-item>
                </template>
            </el-form>
        </el-dialog>

        <show-auth v-model="authDialog.visible" v-if="authDialog.visible" :data="authDialog.data"></show-auth>
    </div>
</template>

<script>
import api from 'api'
import ShowAuth from './show-auth'

export default {
    name: 'noauthorization',
    components: {
        ShowAuth
    },
    data() {
        return {
            loading: false,
            code: null,
            showDefault: true,
            dialog: {
                visible: false,
                title: null
            },
            formName: 'serviceForm',
            ruleForm: {
                id: null,
                years: 1
            },
            rules: {
                years: [{ required: true, message: '请选择年限', trigger: 'change' }],
                version: [{ required: true, message: '请选择版本', trigger: 'change' }]
            },
            options: {
                years: [
                    { label: '一年', value: 1 },
                    { label: '两年', value: 2 },
                    { label: '三年', value: 3 }
                ],
                versions: []
            },
            authDialog: {
                visible: false,
                data: null
            }
        }
    },
    created() {
        let { code } = this.$route.query
        if (code) {
            this.code = code
        }
        this.loadInfo()
    },
    watch: {
        $route: {
            handler(route) {
                let { code } = route.query
                if (code) {
                    this.code = code
                }
            },
            deep: true
        }
    },
    computed: {
        status() {
            let value = null
            // 服务未购买 显示订购入口
            if (this.code === '-120509') {
                value = 0
            } else if (this.code === '-120510') {
                // 申请中
                value = 1
            } else if (this.code === '-120511') {
                // 已过期
                value = 2
            } else if (this.code === '-110105') {
                // 无权限
                value = 3
            } else if (this.code === '-120512') {
                // 购买失败 审核不通过
                value = 4
            } else if (this.code === '-120513') {
                // 服务未生效
                value = 5
            }
            return value
        }
    },
    methods: {
        loadInfo() {
            api.commonApi.fetchServiceBySource({ source: 'om' }).then(resp => {
                this.options.versions = resp
            })
        },
        handleShowBuy() {
            this.dialog.visible = true
            this.dialog.title = '订购服务'
        },
        handleShowAuth(data) {
            this.authDialog.visible = true
            this.authDialog.data = {
                title: '提示',
                obj: data
            }
        },
        handleClose() {
            this.dialog.visible = false
            this.showDefault = true
        },
        handleCloseTip() {
            this.handleClose()
            this.$router.replace({
                path: '/redirect/error/noauthorization'
            })
        },
        handleCreateOrder() {
            this.$refs[this.formName].validate(valid => {
                if (valid) {
                    let params = {
                        id: this.ruleForm.version,
                        years: this.ruleForm.years
                    }
                    api.commonApi.checkServiceAuth({ serviceId: this.ruleForm.version }).then(resp => {
                        if (resp && resp.list && resp.list.length > 0) {
                            this.handleShowAuth(resp.list)
                        } else {
                            this.createOrder(params)
                        }
                    })
                }
            })
        },
        createOrder(params) {
            this.loading = true
            api.commonApi
                .createOrder(params)
                .then(() => {
                    this.showDefault = false
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-form {
    padding: 0 24px;
}
.auth-content {
    width: 100%;
    height: calc(100vh - 56px);
    background: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.auth-box {
    background: #ffffff;
    width: 100%;
    height: 100%;
    max-width: 720px;
    height: 646px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1), 0px 3px 1px -2px rgba(0, 0, 0, 0.06), 0px 2px 2px 0px rgba(0, 0, 0, 0.07);
    float: left;

    .auth-img {
        width: 100%;
        text-align: center;
        img {
            margin-top: 96px;
            width: 100%;
            max-width: 185px;
        }
    }
    .auth-text {
        width: 100%;
        text-align: center;
        .auth-name {
            color: rgba(0, 0, 0, 0.87);
            line-height: 48px;
            font-size: 32px;
            margin: 32px 0;
        }
        .auth-desc {
            color: rgba(0, 0, 0, 0.6);
            line-height: 30px;
            font-size: 20px;
            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }
    .auth-statusDesc {
        margin-top: 10px;
        color: #e84133;
        line-height: 30px;
        font-size: 26px;
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
    .auth-button {
        margin-top: 32px;
        width: 100%;
        text-align: center;
        .el-button {
            width: 240px;
            height: 48px;
        }
    }
}
.auth-btn {
    min-width: 100px;
}
.auth-success {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    margin-bottom: 24px;
    span {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 12px;
    }
}
</style>
