<template>
    <el-container>
        <el-header>
            <header-bar from="HOME" :config="config.api" :defaultActive="1" :enabledDropdown="true" @refresh="handleChangeOrg"> </header-bar>
        </el-header>
        <el-container class="app-wrapper">
            <el-main class="el-main-container" style="margin-left: 0;">
                <main-container :needMenu="false"></main-container>
            </el-main>
            <guide></guide>
            <lz-message :config="config.api" :isMsgModelShow="isMsgModelShow"></lz-message>
        </el-container>
    </el-container>
</template>

<style src="./layout.scss" lang="scss" scoped></style>
