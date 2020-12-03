<template>
    <div class="container">
        <el-row class="app-content" v-if="hasOrgs">
            <el-col :span="24">
                <el-col class="section" :span="12">
                    <app-carousel :nodes="options.carouselData" />
                </el-col>
                <el-col class="section-right" :span="12">
                    <div class="app-content-right">
                        <div class="app-info" :style="infoStyle" v-if="!isPersonalEdition">
                            <label class="title">欢迎您，{{ info.userName }}！</label>
                            <div class="desc">
                                <template v-if="hasOrgs">
                                    <div class="desc-item">
                                        <div class="desc-label">当前组织</div>
                                        <div class="desc-value">{{ info.companyName }}</div>
                                    </div>
                                    <div class="desc-item">
                                        <div class="desc-label">当前职务</div>
                                        <div class="desc-value">{{ info.post }}</div>
                                    </div>
                                    <div class="desc-item">
                                        <div class="desc-label">所属部门</div>
                                        <div class="desc-value">{{ info.dept }}</div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="desc-item">
                                        <div class="desc-value">您当前未加入任何组织，请根据您的角色，按提示进入使用领筑云服务~</div>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <app-center :nodes="options.appCenterData" :isPersonalEdition="isPersonalEdition">
                            <label slot="title">应用中心</label>
                        </app-center>
                    </div>
                </el-col>
            </el-col>
        </el-row>

        <el-row v-if="hasOrgs">
            <el-col :span="24">
                <el-col class="section" :span="12" v-if="isPersonalEdition">
                    <board :nodes="options.boardData">
                        <div slot="title">经营看板</div>
                        <div slot="link">
                            <a @click="redirectTo('LZY', '/report-management/project-report')">查看经营报表</a>
                        </div>
                    </board>
                </el-col>
                <el-col class="section" :span="isPersonalEdition ? 12 : 24">
                    <workbench :nodes="ruleForm.workbenchList" :isPersonalEdition="isPersonalEdition">
                        <template slot="title">{{ isPersonalEdition ? '我的工作台' : '我的待办事项' }}</template>
                        <div slot="link">
                            <a @click="redirectTo('LZY', '/')">进入经营管理</a>
                        </div>
                    </workbench>
                </el-col>
            </el-col>
        </el-row>

        <el-row v-if="isPersonalEdition" style="padding-bottom: 24px;">
            <project-dynamic :nodes="options.projectDynamicData" :loading="pageLoading">
                <template slot="title">在建项目动态</template>
                <div slot="link">
                    <a @click="redirectTo('LZY', '/operation/project-preparation/contract-signed')">查看全部项目</a>
                </div>
                <el-pagination
                    slot="pagination"
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagination.page"
                    :page-sizes="pagination.pageSizes"
                    :page-size="pagination.size"
                    layout="prev, pager, next, sizes, jumper, total"
                    :total="pagination.total"
                >
                </el-pagination>
            </project-dynamic>
        </el-row>

        <div class="app-info-wrapper" v-if="info.status === 2 && !hasOrgs">
            <div>
                <el-row class="app-info" :style="infoStyle" v-if="!isPersonalEdition">
                    <label class="title">欢迎您，{{ info.userName }}！</label>
                    <div class="desc">
                        <template v-if="hasOrgs">
                            <label>当前组织：{{ info.companyName }}</label>
                            <label>当前职务：{{ info.post }}</label>
                            <label>所属部门：{{ info.dept }}</label>
                        </template>
                        <template v-else>
                            <label>您当前未加入任何组织，请根据您的角色，按提示进入使用领筑云服务~</label>
                        </template>
                    </div>
                </el-row>
                <guide></guide>
            </div>
        </div>
    </div>
</template>

<style src="./dashboard.scss" lang="scss" scoped></style>
