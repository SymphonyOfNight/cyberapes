<template>
    <el-header class="top">
        <el-container>
            <el-main class="top-main">
                header-main
            </el-main>
        </el-container>
    </el-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .top {
        text-align: center;
    }

    .top-main {
        line-height: 60px;
        margin-right: auto;
        margin-left: auto;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        overflow-x: hidden!important;
    }
</style>