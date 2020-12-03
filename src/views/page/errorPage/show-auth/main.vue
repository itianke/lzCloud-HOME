<template>
    <div>
        <el-dialog :width="dialog.size" :visible.sync="dialog.visible" @close="handleClose" append-to-body>
            <div class="show-auth-layout">
                <div class="show-tips">
                    <icon icon="warning" color="#F64A33" width="60" height="60" />
                    <span>对不起，无法订购服务，您暂未完成以下资质认证！</span>
                </div>
                <div class="show-item" v-for="(item, index) in list" :key="index">
                    <div class="show-icon">
                        <icon :icon="item.icon" :color="item.color" width="28" height="28" />
                    </div>
                    <div class="show-label">
                        <span>{{ item.label }}</span>
                    </div>
                    <div class="show-option">
                        <el-button size="small" type="primary" @click="handleRedirect(item.redirectUrl)">立即认证</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
@import 'src/style/base/variables';
.show-auth-layout {
    .show-tips {
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
    .show-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-flow: row nowrap;
        margin-bottom: 12px;
        .show-icon {
            margin-left: 50px;
            margin-right: 24px;
            padding-right: 24px;
            border-right: 1px solid #ddd;
        }
        .show-label {
            font-size: $font-size-title;
            max-width: 300px;
            min-width: 150px;
        }
        .show-option {
            // margin-right: 100px;
            .el-button {
                min-width: 100px;
            }
        }
    }
}
</style>
