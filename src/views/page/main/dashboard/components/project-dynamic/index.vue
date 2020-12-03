<template>
    <el-col class="dynamic-content" :span="24">
        <div class="dynamic-title">
            <div class="dynamic-title-text">
                <span>
                    <slot name="title"></slot>
                </span>
            </div>
            <div class="dynamic-title-link">
                <slot name="link"></slot>
            </div>
        </div>
        <el-col class="dynamic-page" v-loading="projLoading">
            <template v-if="nodes.length > 0">
                <el-col class="dynamic-col" v-for="(node, index) in nodes" :key="index" :span="12">
                    <div class="dynamic-box" @click="redirect(config.api.LZY + '/operation/project-preparation/signed-detail?id=' + node.id)">
                        <div class="dynamic-box-title">
                            <span>{{ `【${node.projClassOneName}】${node.projName}` }}</span>
                            <div class="title-icon" v-if="node.isRisk === 1">
                                <icon icon="risk-warning" width="22" height="22" style="transform: translateY(-1px);" color="#E8684A"></icon>
                                +{{ node.riskList.length }}
                            </div>
                        </div>
                        <div class="dynamic-box-money">
                            <div class="money">
                                <label>合同金额</label>
                                <label>{{ node.contractAmount | moneyFormat }} 元</label>
                            </div>
                            <div class="money">
                                <label>可用金额</label>
                                <label>{{ node.balanceAmount | moneyFormat }} 元</label>
                            </div>
                        </div>
                        <div class="dynamic-box-content" :style="getWarningStyle(node.isRisk === 1)">
                            <div class="detail">
                                <div class="detail-label"><span>收入</span></div>
                                <div class="detail-board">
                                    <div class="board-content">
                                        <label>已回款金额</label>
                                        <label>{{ node.recvAmount | moneyFormat }} 元</label>
                                    </div>
                                    <div class="board-content warning-label">
                                        <label>剩余应收金额</label>
                                        <label>{{ node.surplusRecv | moneyFormat }} 元</label>
                                    </div>
                                </div>
                            </div>
                            <div class="detail">
                                <div class="detail-label"><span>主成本</span></div>
                                <div class="detail-board">
                                    <div class="board-content">
                                        <label>已付劳务</label>
                                        <label>{{ node.laborPaymentAmount | moneyFormat }} 元</label>
                                    </div>
                                    <div class="board-content">
                                        <label>已付材料</label>
                                        <label>{{ node.materialPaymentAmount | moneyFormat }} 元</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="progress">
                            <progress-bar
                                :percentage="node.refundSchedule > 100 ? 100 : node.refundSchedule"
                                :color="node.isRisk === 1 ? '#E8684A' : '#2DD7AD'"
                                :riskList="node.riskList"
                                :stroke-width="14"
                                text="回款进度"
                                :direction="node.isRisk === 1 ? 'vertical' : 'horizontal'"
                            />
                        </div>
                    </div>
                </el-col>
                <el-col class="dynamic-pagination">
                    <slot name="pagination"></slot>
                </el-col>
            </template>
            <template v-else>
                <el-col class="dynamic-empty">
                    <img src="~/assets/svg/table-empty.svg" />
                    <label>暂无在建项目动态</label>
                </el-col>
            </template>
        </el-col>
    </el-col>
</template>

<style src="./index.scss" lang="scss" scoped></style>
