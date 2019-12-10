<template>
    <el-footer class="footer">
        <el-container>
            <el-main class="footer-about">
                about
            </el-main>
            <el-footer class="footer-copyright">
                copyright info.
            </el-footer>
        </el-container>
    </el-footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        position:absolute;
        bottom:0;
        width:100%;
        height:120px!important;
        background-color: #cccccc;
    }
    .footer-about {
        font-size: 12px;
        color: #909399;
        text-align: center;
    }

    .footer-copyright {
        line-height: 30px;
        text-align: center;
        color: #909399;
    }
</style>