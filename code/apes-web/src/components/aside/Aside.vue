<template>
    <el-aside class="main-aside">
        <el-menu :default-openeds="['1','9']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-s-home"></i>首页</template>
                <el-menu-item-group>
                    <el-menu-item index="11">首页</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="9">
                <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
                <el-menu-item-group>
                    <el-menu-item index="91">个人信息</el-menu-item>
                    <el-menu-item index="92">菜单管理</el-menu-item>
                    <el-menu-item index="93">权限分配</el-menu-item>
                    <el-menu-item index="94">角色管理</el-menu-item>
                    <el-menu-item index="95">日志下载</el-menu-item>
                    <el-menu-item index="96">全局日志搜索</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

    .main-aside {
        width: 200px;
        height: 100%;
        background-color: rgb(238, 241, 246);
        /*padding-bottom: 0px!important;*/
    }
</style>