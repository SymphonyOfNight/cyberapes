<template>
    <el-card class="box-card">
        <div slot="header" style="text-align: center">
            <el-button-group>
                <el-button plain style="width: 150px;" @click="goToLoginPage()">登录</el-button>
                <el-button plain style="width: 150px;" type="primary">注册</el-button>
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
            <el-form-item prop="password2">
                <el-input type="password2" placeholder="确认密码" v-model="userinfo.password2">
                    <el-button slot="prepend" icon="el-icon-lock"></el-button>
                </el-input>
            </el-form-item>
            <el-form-item style="margin-top: 20px;">
                <el-button type="primary" @click="registe()" style="width: 360px;">注册</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import {PostUserRegiste} from '../../api/api.js';

    export default {
        name: "Registe",
        data() {
            /**
             * 确认密码：自定义验证器
             * @param rule
             * @param value
             * @param callback
             */
            var validatePassword2 = (rule, value, callback) => {
                if(value == ''){
                    callback(new Error('请再次输入密码'));
                }else if(value !== this.userinfo.password){
                    callback(new Error('两次输入密码不一致'));
                }else {
                    callback();
                }
            }
            return {
                // 记住账号
                checked: this.ApesUtils.getStorage(this.ApesConstants.APES_LOGIN_REMEMBER_ME)||true,
                // 表单信息
                userinfo: {
                    username: '',
                    password: '',
                    password2:''
                },
                error: {
                    flag: false,
                    message: ''
                },
                // 表单校验规则
                rules: {
                    username: [
                        {required: true, message: '请输入用户名或手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    password2:[
                        { validator: validatePassword2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            /**
             * 登陆按钮事件
             */
            goToLoginPage: function(){
                this.$goRouter('/login')
            },
            /**
             * 获取表单数据
             */
            getData: function(){
                return this.userinfo;
            },
            /**
             * 确认注册按钮事件
             */
            registe: function () {
                this.$refs['userinfo'].validate((valid) => {
                    if (valid) {
                        PostUserRegiste(this.getData()).then(res => {
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
    html, body{
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
    .loginForm{
        height: 100%;
    }
</style>