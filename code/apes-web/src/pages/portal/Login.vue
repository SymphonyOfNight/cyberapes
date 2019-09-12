<template>
        <el-card class="box-card">
            <div slot="header" style="text-align: center">
                <el-button-group>
                    <el-button plain style="width: 150px;" type="primary">登录</el-button>
                    <el-button plain style="width: 150px;" @click="goToRegistePage()">注册</el-button>
                </el-button-group>
            </div>
            <el-form :model="userinfo" status-icon :rules="rules" ref="userinfo">
                <el-form-item prop="username">
                    <el-input placeholder="邮箱/用户名/手机号" v-model="userinfo.username">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="userinfo.password">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div>
                    <el-checkbox v-model="checked">记住我</el-checkbox>
                    <el-link style="float: right;">忘记密码</el-link>
                </div>
                <el-form-item style="margin-top: 20px;">
                    <el-button type="primary" @click="login()" style="width: 360px;">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
</template>

<script>
    import {PostUserLogin} from '../../api/api.js';

    export default {
        name: "Login",
        data() {
            return {
                checked: this.ApesUtils.getStorage(this.ApesConstants.APES_LOGIN_REMEMBER_ME)||true,
                userinfo: {
                    username: '',
                    password: ''
                },
                error: {
                    flag: false,
                    message: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名或手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            /**
             * 注册按钮事件
             */
            goToRegistePage: function(){
                this.$goRouter('/registe')
            },
            /**
             * 记住账号勾选事件
             */
            rememberMe: function(){
                this.ApesUtils.setStorage(this.ApesConstants.APES_LOGIN_REMEMBER_ME, this.checked);
            },
            getData: function(){
                return this.userinfo;
            },
            login: function () {
                this.$refs['userinfo'].validate((valid) => {
                    if (valid) {
                        PostUserLogin(this.getData()).then(res => {
                            return res;
                        })
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    html, body {
        height: 100%;
        overflow-y: hidden;
    }
    body {
        background: linear-gradient(150deg,#7795f8 15%,#6772e5 70%,#555abf 94%)!important;
    }
    .box-card {
        width: 400px;
        height: 350px;
        margin: 100px auto;
        background-color: #ffffff;
        padding: 10px 30px 5px;
        border-radius: 5px;
    }
</style>