<template>
    <div class="logo">
        <router-link :to="{name:'Home'}">
            <img src="@/assets/logo.svg" alt="logo">
            <h1>{{ title }}</h1>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        components: {},
        props: {
            title: {
                type: String,
                default: 'LOGO.title',
                required: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .logo {
        position: relative;
        width: 165px;
        height: 64px;
        overflow: hidden;
        line-height: 64px;
        transition: all .3s;
        img {
            display: inline-block;
            height: 32px;
            vertical-align: middle;
        }
        h1 {
            display: inline-block;
            margin: 0 0 0 12px;
            font-weight: 400;
            font-size: 16px;
            vertical-align: top
        }
    }
</style>
