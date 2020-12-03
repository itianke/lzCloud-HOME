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

<style lang="scss" scoped src="./index.scss"></style>
