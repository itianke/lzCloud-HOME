<template>
    <div class="board-content">
        <div class="board-title">
            <div class="board-title-text">
                <slot name="title"></slot>
            </div>
            <div class="board-title-link">
                <slot name="link"></slot>
            </div>
        </div>
        <div class="board-container">
            <div class="board-box" v-for="(node, index) in nodes" :key="index" :style="node.style">
                <div class="board-box-text"><lz-icon :class="node.iconName" class="board-box-icon"></lz-icon>{{ node.label }}</div>
                <div class="board-box-count">
                    <count-to :duration="3000" :start-val="0" separator="" :decimals="2" :end-val="node.count" class="count-to"></count-to>
                    <span v-if="node.pattern" class="board-box-count-pattern">{{ node.pattern }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
