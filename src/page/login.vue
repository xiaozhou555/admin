<template>
  <div id="login">
    <div class="title">{{page_data.title}}</div>
    <div class="form">
      <!--<div class="title">{{page_data.title}}</div>-->
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm"
                 v-loading="loadFlag"
                 :element-loading-text="page_data.loadTxt">
          <!--帐号-->
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" :placeholder="page_data.account" size="large"></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input type="password" :placeholder="page_data.pwd" v-model="ruleForm.password"
                      @keyup.enter.native="submitForm('ruleForm')" size="large"></el-input>
          </el-form-item>
          <!--登录按钮-->
          <div >
            <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">{{page_data.login}}</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    data() {
//            登录验证
      var validateUsername = function (rule, value, callback) {
        if (value === "") {
          callback(new Error('帐号不能为空'))
        } else {
          callback()
        }
      }
      var validateUserpwd = function (rule, value, callback) {
        if (value === "") {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      return {
        page_data: {
          title: "推一推后台管理系统",
          account: "请输入帐号",
          pwd: "请输入密码",
          login: "登 录",
          loadTxt: "登录中"
        },
        loadFlag: false,
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validateUserpwd, trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
//    登录
      submitForm(formName) {
        const self = this;
//            self.loadFlag=true;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(valid);
            self.$message.success('登录成功')
            sessionStorage.setItem('token','123456')
            self.$router.push({'name':'home'});//跳入主页

          } else {
            self.loadFlag = false;
            self.$message.error('请输入正确的帐号和密码')
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  #login {
    height: 100%;
    width: 100%;
    background: #CC95C0; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #7AA1D2, #DBD4B4, #CC95C0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  #login > .form {
    position: relative;
    background: rgba(255, 255, 255, .2);
    top: 30%;
    left: 50%;
    margin-left: -200px;
    width: 300px;
    height: 180px;
    padding: 40px;
  }

  #login  > .title {
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -200px;
    text-align: center;
    font-size:30px;
    color: #CD98BF;
  }
  .login-btn{
    width:100%;
    background: #4568DC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #B06AB3, #4568DC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    height:45px;
  }
</style>
