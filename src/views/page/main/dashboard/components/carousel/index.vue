<template>
    <div class="carousel-content">
        <el-carousel trigger="click" height="294px">
            <el-carousel-item v-for="(item, index) in nodes" :key="index">
                <!-- <img class="carousel-panel" :src="`/static/dashboard-bg-1.png?t=${randomKey}`" /> -->
                <!-- <img class="carousel-title" :src="`/static/dashboard-bg-1-text.png?t=${randomKey}`" /> -->
                <!-- <div class="carousel-panel">
                    <div class="carousel-title"></div> -->
                <!-- <div class="carousel-qrcode"></div> -->
                <!-- </div> -->
                <div class="carousel-panel" :style="`background: url('${item.bgImg}') center repeat; ${item.link ? 'cursor:pointer;' : ''}`" @click="handleClick(item)">
                    <img v-if="item.bgTextImg" class="carousel-text-img" :src="`${item.bgTextImg}?t=${randomKey}`" />
                    <div class="carousel-qrcode" v-if="item.cornerImg">
                        <img class="img" :src="`${item.cornerImg}`" />
                        <div class="corner-btn">{{ item.btnText }}</div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style src="./index.scss" lang="scss" scoped></style>
