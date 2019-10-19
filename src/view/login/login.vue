<template>
    <div class="loginBox">
       <div class="loginMain">
           <div class="loginMain_left">
               
           </div>
           <div class="loginMain_right">
               <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm form_box">
                    <el-form-item  prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" show-password placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                        <el-button type="primary" @click="submitForm('ruleForm')" class="login_btn">登录</el-button>
                    </el-form-item>
                </el-form>
                <div class="register_box">
                    <router-link class="registerTip" :to="{name: 'register', path: 'register'}">注册</router-link>
                    <router-link class="pwdTip" :to="123">忘记密码？</router-link>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    //组件
    components: {
    },
    data(){
        return{
             input: '',
            ruleForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入账号名称', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
          }
        }
    },
    props: {
    },
    watch: {
    },
    computed: { 
    },
    created() {
    },
    mounted() {
    },
    methods: { 
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
    
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    @import '../../sass/base/login.scss'
</style>
