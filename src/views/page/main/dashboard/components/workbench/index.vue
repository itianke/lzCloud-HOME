<template>
    <el-col class="workbench-content" :span="24" :class="isPersonalEdition ? 'height-300' : ''">
        <section class="workbench-title">
            <div class="workbench-title-text">
                <slot name="title"></slot>
            </div>
            <div class="workbench-title-link">
                <slot name="link"></slot>
            </div>
        </section>
        <template v-if="nodes.length > 0">
            <el-col
                class="workbench-col"
                v-for="(node, index) in nodes"
                :key="index"
                :span="isPersonalEdition ? 8 : 4"
                :class="[isPersonalEdition ? 'no-margin-3n' : 'no-margin-6n']"
            >
                <div
                    class="workbench-box"
                    :class="[isWarningType(node.bizType) ? 'warning' : '']"
                    @click="redirectTo(config.api.LZY + node.path, node)"
                    :style="node.style ? node.style : {}"
                >
                    <div class="workbench-box-text">
                        <lz-icon :class="node.iconName" class="mar-right-4 workbench-box-icon"></lz-icon>
                        <span>{{ node.label }}</span>
                    </div>
                    <div class="workbench-box-count" v-if="node.count > 0">
                        <template v-if="isWarningType(node.bizType) && viewWidth">
                            <icon icon="risk-warning" width="22" height="22" style="transform: translateY(-1px);" color="#E8684A"></icon>
                        </template>
                        <label>{{ node.count > 99 ? '99+' : node.count }}</label>
                    </div>
                </div>
            </el-col>
        </template>
        <template v-else>
            <el-col class="workbench-empty">
                <img src="~/assets/svg/table-empty.svg" />
                <label>暂无待办事项</label>
            </el-col>
        </template>
    </el-col>
</template>

<style src="./index.scss" lang="scss" scoped></style>
