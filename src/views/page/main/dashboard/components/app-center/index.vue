<template>
    <div class="card-content">
        <div class="card-title">
            <slot name="title"></slot>
        </div>
        <el-col class="card-box" v-for="(node, index) in nodes" :key="index" :span="isPersonalEdition ? 8 : 4">
            <template v-if="node.url">
                <a @click="redirectTo(node)">
                    <div class="card-box-icon" :style="node.style">
                        <icon :icon="node.icon" color="#fff" width="56" height="56" />
                    </div>
                    <div class="card-box-text">{{ node.label }}</div>
                </a>
            </template>
            <template v-else>
                <el-popover popper-class="app-center-popover" placement="top" title="" width="200" trigger="click" content="暂未上线，敬请期待！">
                    <a slot="reference">
                        <div class="card-box-icon" :style="node.style">
                            <icon :icon="node.icon" color="#fff" width="56" height="56" />
                        </div>
                        <div class="card-box-text">{{ node.label }}</div>
                    </a>
                </el-popover>
            </template>
        </el-col>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss">
.app-center-popover {
    text-align: center;
}
</style>
