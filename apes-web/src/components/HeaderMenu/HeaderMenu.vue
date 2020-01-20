<template>
    <a-menu mode="horizontal" class="menu" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">首页<router-link to='/home'></router-link></a-menu-item>
        <a-menu-item key="2">我的<router-link to='/me/myArticles'></router-link></a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
</template>

<script>
    export default {
        name: "HeaderMenu",
        data() {
            return {}
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {}
    }
</script>

<style lang="less" scoped>

    .menu {
        border: 0;
        margin-top: -2px;
        line-height: 64px;
    }

</style>