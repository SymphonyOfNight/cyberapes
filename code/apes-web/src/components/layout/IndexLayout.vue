<template>
    <el-container>
        <el-header class="top">
            <el-container>
                <el-main class="top-main">
                    header-main
                </el-main>
            </el-container>
        </el-header>
        <el-main>
            <el-container>
                <el-header height="auto" class="main-header">
                    <el-container style="padding-top: 40px; padding-bottom: 40px;">
                        <el-main>
                            <p style="line-height: 60px;font-size: 40px;font-weight: 500;margin: 0;">Topics</p>
                            <p style="margin: 0;">Browse the hotest topics</p>
                        </el-main>
                    </el-container>
                </el-header>
                <el-main class="main-main">
                </el-main>
            </el-container>
        </el-main>
        <el-footer>
            <el-container>
                <el-main class="footer-about">
                    about
                </el-main>
                <el-footer height="30" class="footer-copyright">
                    copyright info.
                </el-footer>
            </el-container>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "IndexLayout"
    }
</script>

<style>

    .el-main, .el-header, .el-footer {
        padding: 0!important;
    }

    .top {
        text-align: center;
    }

    .top-main, .main-main, .footer-about {
        margin-right: auto;
        margin-left: auto;
        padding-left: 10px;
        padding-right: 10px;
        width: 1200px;
        overflow-x: hidden!important;
    }

    .main-header {
        text-align: center;
        border-bottom: 1px solid;
        border-top: 1px solid;
        border-color: #e1e4e8!important;
        background-color: #fafbfc!important;
    }

    .top-main {
        line-height: 60px;
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