<template>
    <el-col class="guide-card-list" :span="24">
        <el-col class="guide-card" :span="6">
            <div class="guide-modal">
                <span class="icon">
                    <icon icon="guide-manager" width="96" height="96" color="#FFFFFF"></icon>
                </span>
                <span class="line"></span>
                <span class="introduce">我是商务经理</span>
                <div class="steps">
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/realName-auth')">第一步：完成实名认证</span>
                    <span class="redirect" @click="redirect(config.api.LZY + '/')">第二步：开通工程云商务经理版</span>
                    <span class="redirect" @click="redirect(config.api.LZY + '/cooperation/league/apply-cooperation')">第三步：进入工程云，申请签约<br>合作工程公司</span>
                </div>
            </div>
        </el-col>
        <el-col class="guide-card" :span="6">
            <div class="guide-modal">
                <span class="icon">
                    <icon icon="guide-master" width="96" height="96" color="#FFFFFF"></icon>
                </span>
                <span class="line"></span>
                <span class="introduce">我是工程公司管理员</span>
                <div class="steps">
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/realName-auth')">第一步：完成实名认证</span>
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/user-auth')">第二步：完成企业及工程公司认证</span>
                    <span class="redirect" @click="redirect(config.api.LZY + '/')">第三步：开通工程云企业版</span>
                    <span class="redirect" @click="redirect(config.api.BBC + '/organization-manage/staff-invite')">第四步：邀请员工加入企业<br>开始进行经营管理</span>
                </div>
            </div>
        </el-col>
        <el-col class="guide-card" :span="6">
            <div class="guide-modal">
                <span class="icon">
                    <icon icon="guide-customer" width="96" height="96" color="#FFFFFF"></icon>
                </span>
                <span class="line"></span>
                <span class="introduce">我是员工</span>
                <div class="steps">
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/realName-auth')">第一步：完成实名认证</span>
                    <span>第二步：受邀进入已开通企业</span>
                    <span>第三步：切换进入企业开始使用</span>
                </div>
            </div>
        </el-col>
        <el-col class="guide-card" :span="6">
            <div class="guide-modal">
                <span class="icon">
                    <icon icon="guide-labor" width="96" height="96" color="#FFFFFF"></icon>
                </span>
                <span class="line"></span>
                <span class="introduce">我是劳务公司</span>
                <div class="steps">
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/realName-auth')">第一步：完成实名认证</span>
                    <span class="redirect" @click="redirect(config.api.PAM + '/auth/user-auth')">第二步：完成企业及劳务公司认证</span>
                    <span class="redirect" @click="redirect(config.api.LWY + '/')">第三步：开通劳务云管理系统</span>
                    <span>第四步：受邀与工程公司达成合作</span>
                </div>
            </div>
        </el-col>
    </el-col>
</template>

<style lang='scss' scoped>
.guide-card-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .guide-card {
        width: 310px;
        height: 441px;
        text-align: center;
        &:not(:last-child) {
            margin-right: 16px;
        }
        span {
            display: inline-block;
            width: 100%;
        }
        &:nth-of-type(1) {
            background: url('/static/business-manager.png') 100% 100% no-repeat;
        }
        &:nth-of-type(2) {
            background: url('/static/master.png') 100% 100% no-repeat;
        }
        &:nth-of-type(3) {
            background: url('/static/customer.png') 100% 100% no-repeat;
        }
        &:nth-of-type(4) {
            background: url('/static/labor-company.png') 100% 100% no-repeat;
        }
        .guide-modal {
            background-color: rgba(7, 18, 54, .6);
            width: 100%;
            height: 100%;
            padding: 40px 24px;
            &:hover {
                background: rgba(28, 76, 228, .8);
                transition: .5s;
                .icon, .line {
                    display: none;
                }
                .steps {
                    display: inline-block;
                    span {
                        &:not(:last-child) {
                            margin-bottom: 32px;
                        }
                        &:first-child {
                            margin-top: 72px;
                        }
                    }
                }
            }
            .icon {
                margin-top: 68px;
            }
            .line {
                background: #FFFFFF;
                width: 40px;
                height: 4px;
                margin: 24px 0 24px 0;
            }
            .introduce {
                font-size: 24px;
                line-height: 31px;
                color: #FFFFFF;
                transition: .5s;
            }
            .steps {
                display: none;
                font-size: 16px;
                line-height: 24px;
                color: rgba(255,255,255,0.88);
                transition: .5s;
                .redirect {
                    cursor: pointer;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
