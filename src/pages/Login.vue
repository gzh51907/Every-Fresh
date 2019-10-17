<template>


    <div>
        <el-main>
        <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')"></el-button>

        <h2 class="title">登录</h2>

        <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="70px">

          <div class="userbox">
            <el-form-item label="用户名" prop="username" >
              <el-input v-model="ruleForm.username" placeholder="请输入您的手机号" id="userinput" style="width:230px" status-icon:false ref='tel'></el-input>
              
            </el-form-item>
            <div id="del">X</div>
          </div>

          <div class="psdbox">
            <el-form-item label="密码" prop="password" >
              <el-input  v-model="ruleForm.password" autocomplete="off" type="password" placeholder="请输入密码" id="password" status-icon=false   style="width:170px"></el-input>
            </el-form-item>
          </div>

          <el-button type="success" @click="submitForm" style="width:100%;margin-top:50px">登录</el-button>

          <el-button type="primary" @click.native="goto('reg')" style="width:100%;margin-top:30px;margin-left:0px">注册</el-button>

        </el-form>

        <p style="text-align:center;" >登录注册表示您同意
        <el-link type="danger" style="margin-top:-5px;font-size:.186667rem;" @click.native="goto('privacy')">《用户协议》</el-link>
        和
        <el-link type="danger" style="margin-top:-5px;font-size: .186667rem;"  @click.native="goto('agreement')">《隐私政策》</el-link>
        </p>

        <p style="text-align:center;font-size:.133333rem;color:#969696">未注册过的用户将直接未您创建优鲜账户</p>
         </el-main>
    </div>
</template>
<script>
export default{
  data() {

    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {min:11,max:11,trigger:"blur",message:" "},
          { trigger: "blur" } 
        ],
        password:[
          { min: 6,max: 12,message: "  ",trigger: "blur"},
          {trigger: "blur"},
        ]
      }
    };
  },
    methods:{
        submitForm() {
          this.$refs.regForm.validate(async valid => {
              // valid:所有校验规则都通过后得到true
           if (valid) {
            // alert('submit!');
            // 发起ajax请求，等待服务器返回结果
            // 根据服务器返回结果：注册成功->跳到“我的”

            let { username, password } = this.ruleForm;
            let { data } = await this.$axios.get(
              "http://49.232.154.155:2999/user/login",
              {
                params: {
                  username,
                  password
                }
              }
            );
            // this.$router.replace('/mine')
            if (data.code === 1) {
              let { targetUrl } = this.$route.query;
              console.log('targetUrl:',targetUrl);

              localStorage.setItem('username',username)
              // this.$router.push({path:'/mine'})
               this.$router.replace({
                 path: targetUrl || "/mine"
               });
             
            }else if(data.code === 0){
              alert("用户名或密码不正确");
            }
            } else {
            window.console.log("error submit!!");
            return false;
            }
        });
      },
      goto(name){
        this.$router.push({name});
      }
    },
    mounted(){
     let phone = document.getElementById('userinput');
     let dlDel = document.getElementById('del');
     dlDel.onclick = function () {
      phone.value = '';
      dlDel.style = "display:none";
    } 
    }
    
}
</script>

<style>
  .title{
    color:#484246; 
    margin-left:.2rem;
    margin-bottom:4.666667rem
  }
 .userbox,
 .psdbox{
    width:100%;
    height:3.266667rem;
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
 #del{
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