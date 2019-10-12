<template>


    <div>
        <el-main>
        <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')"></el-button>

        <h2 class="title">登录</h2>

        <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="70px">

          <div class="userbox">
            <el-form-item label="用户名" prop="username" >
              <el-input v-model="ruleForm.username" placeholder="请输入您的手机号" id="userinput" style="width:230px" status-icon:false></el-input>
              
            </el-form-item>
            <div id="dl-del">X</div>
          </div>

          <div class="psdbox">
            <el-form-item label="密码" prop="password" >
              <el-input  v-model="ruleForm.password" autocomplete="off" type="password" placeholder="请输入密码" id="password" status-icon=false   style="width:170px"></el-input>
            </el-form-item>
          </div>

          <el-button type="success" @click="submitForm" style="width:100%;margin-top:50px">登录</el-button>

        </el-form>

        <p style="text-align:center;font-size:14px;" >登录注册表示您同意<el-link type="danger" style="margin-top:-5px;" @click.native="goto('privacy')">《用户协议》</el-link>和<el-link type="danger" style="margin-top:-5px;"  @click.native="goto('agreement')">《隐私政策》</el-link></p>

        <p style="text-align:center;font-size:10px;color:#969696">未注册过的用户将直接未您创建优鲜账户</p>
        </el-main>
    </div>
</template>
<script>
export default{
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {trigger: "blur" },
          {min:11,max:11,trigger:"blur",message:" "}
        ],
        password:[
          {trigger: "blur"},
          { min: 6,max: 12,message: "  ",trigger: "blur"}
        ]
      }
    };
  },
    methods:{
        submitForm() {
        this.$refs.regForm.validate((valid) => {
            // valid:所有校验规则都通过后得到true
          if (valid) {
            alert('submit!');
            let {username, password} = this.ruleForm;
            this.$router.replace({name:'mine',params:{username}});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goto(name){
        this.$router.push({name});
      }
    }
}
</script>

<style>
  .title{
    color:#484246; 
    margin-left:15px;
    margin-bottom:50px;
  }
 .userbox,
 .psdbox{
    width:100%;
    height:50px;
    border-bottom:#eeeeee 1px solid;
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    margin-top:10px;
    position: relative;
    
 }
 #userinput,
 #password{
    border-bottom-width:0px;
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;

 }
 #dl-del{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #c6c6c6;
    border-radius: 50%;
    color:white;
    text-align:center;
    line-height:25px;
    position: absolute;
    top:10px;
    right:50px;
    display:none;

 }
</style>