<template>
    <div class="zh-progress">
        <div class="zh-progress-bar" v-if="type === 'line'">
            <template v-if="direction === 'vertical'">
                <div class="zh-progress-bar-vertical__box">
                    <div class="zh-progress-bar-vertical__container">
                        <div class="zh-progress-bar-vertical__content">
                            <div class="zh-progress-bar-vertical__outer" :style="{ height: strokeWidth + 'px' }">
                                <div class="zh-progress-bar-vertical__inner" :style="barStyle">
                                    <slot name="text"></slot>
                                </div>
                            </div>
                            <div class="zh-progress-bar-vertical__content-text">
                                <div class="zh-progress-bar-vertical__content-percenage">
                                    <span :class="percentage >= 100 ? 'mini-font' : ''">{{ percentage }}</span>
                                    <span>%</span>
                                </div>
                                <div class="zh-progress-bar-vertical__content-label">{{ text }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="zh-progress-bar-vertical__desc">
                        <div class="line" v-html="riskList[0]"></div>
                        <div class="line" v-html="riskList[1]"></div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="zh-progress-bar-horizontal__box">
                    <div class="zh-progress-bar-horizontal__text" :style="{ color: this.fontColor }">
                        <span :style="percentStyle">{{ percentage }}</span>
                        <span :style="symbolStyle">%</span>
                    </div>
                    <div class="zh-progress-bar-horizontal__content">
                        <div class="zh-progress-bar-horizontal__content-text">{{ text }}</div>
                        <div class="zh-progress-bar-horizontal__outer" :style="{ height: strokeWidth + 'px' }">
                            <div class="zh-progress-bar-horizontal__inner" :style="barStyle">
                                <slot name="text"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.zh-progress {
    position: relative;
    line-height: 1;
    .zh-progress-bar {
        width: 100%;
        box-sizing: border-box;
        display: inline-block;
        vertical-align: middle;
        .zh-progress-bar-vertical__box {
            display: flex;
            flex-flow: row nowrap;
            align-content: flex-start;
            .zh-progress-bar-vertical__container {
                .zh-progress-bar-vertical__content {
                    width: 100%;
                    display: flex;
                    flex-flow: row nowrap;
                    align-content: flex-start;
                    .zh-progress-bar-vertical__outer {
                        background: #d8d8d8;
                        overflow: hidden;
                        position: relative;
                        width: 60px;
                        transform: rotate(270deg);
                        border-radius: 100px;
                        margin-left: -20px;
                        margin: 16px -10px 0 -20px;
                        .zh-progress-bar-vertical__inner {
                            position: absolute;
                            left: 0;
                            top: 0;
                            height: 100%;
                            background: #409eff;
                            border-radius: 100px;
                            text-align: right;
                            line-height: 1;
                            white-space: nowrap;
                            transition: width 0.6s ease;
                        }
                    }
                }
                .zh-progress-bar-vertical__content-text {
                    display: flex;
                    flex-flow: wrap;
                    align-content: flex-start;
                    width: 70px;
                    .zh-progress-bar-vertical__content-percenage {
                        width: 100%;
                        height: 36px;
                        .mini-font {
                            font-size: 28px !important;
                        }
                        span {
                            display: inline-flex;
                            color: rgba(246, 120, 120, 1);
                            &:first-child {
                                font-size: 32px;
                            }
                            &:last-child {
                                font-size: 20px;
                            }
                        }
                    }
                    .zh-progress-bar-vertical__content-label {
                        color: rgba(0, 0, 0, 0.48);
                        line-height: 20px;
                    }
                }
            }
            .zh-progress-bar-vertical__desc {
                height: 60px;
                .line {
                    margin-bottom: 8px;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.68);
                    line-height: 22px;
                    width: 100%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
                .red {
                    color: #d61609;
                }
                .green {
                    color: #27a340;
                }
            }
        }
        .zh-progress-bar-horizontal__box {
            display: flex;
            flex-flow: row nowrap;
            align-content: flex-start;
            height: 56px;
            line-height: 56px;
            .zh-progress-bar-horizontal__text {
                width: 100%;
                max-width: 88px;
                margin-right: 3px;
                span {
                    float: left;
                    font-weight: bold;
                    display: block;
                    &:first-child {
                        font-size: 48px;
                    }
                    &:last-child {
                        font-size: 30px;
                    }
                }
            }
            .zh-progress-bar-horizontal__content {
                width: calc(100% - 88px);
                .zh-progress-bar-horizontal__content-text {
                    font-size: 16px;
                    color: rgba(0, 0, 0, 0.48);
                    line-height: 24px;
                    margin: 4px 0;
                }
                .zh-progress-bar-horizontal__outer {
                    border-radius: 100px;
                    background: #f5f5f5;
                    overflow: hidden;
                    position: relative;
                    vertical-align: middle;
                    .zh-progress-bar-horizontal__inner {
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 100%;
                        background: #409eff;
                        text-align: right;
                        border-radius: 100px;
                        line-height: 1;
                        white-space: nowrap;
                        transition: width 0.6s ease;
                    }
                }
            }
        }
    }
}
</style>
