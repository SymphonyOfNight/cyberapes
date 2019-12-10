<template>
    <el-container direction="vertical">
        <Header></Header>
        <el-main class="main">
            <el-container>
                <Aside></Aside>
                <el-main>
                    <slot></slot>
                </el-main>
            </el-container>
        </el-main>
        <Footer></Footer>
    </el-container>
</template>

<script>
    import Header from "../header/Header";
    import Footer from "../footer/Footer";
    import Aside from "../aside/Aside";
    export default {
        name: "IndexLayout",
        components: {Aside, Footer, Header}
    }
</script>

<style>
    .main {
        padding-bottom:150px!important;
        clear: both;
    }
</style>