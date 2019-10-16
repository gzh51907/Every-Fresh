<template>
  <div>
    <el-container>
      <el-header style="border-bottom: 1px solid #f5f5f5;">
         <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')" class="auheadbtn"></el-button>
         <span class="auhead">设置</span>
      </el-header>
      <el-main>
        <div class="aulogo">
           <img src="../assets/img3/logo.png" alt="">
        </div>
         <ul>
            <li>
               <el-link @click.native="goto('order')" 
               :underline="false"
                class="minespan">账户与安全</el-link>
            </li>
             <li>
                 <el-link @click.native="goto('address')" 
               :underline="false"
                class="minespan">意见与反馈</el-link>
            </li>
             <li>
               <el-link @click.native="goto('security')" 
               :underline="false"
                class="minespan">欢迎评分</el-link>
            </li>
        </ul>
        <div style="width: 100%;
            height: 0.5rem;
            background: #f4f4f4;  "></div>
        <ul>    
             <li>
                 <el-link @click.native="goto('help')" 
               :underline="false"
                class="minespan">用户协议</el-link>
            </li>
             <li>
                <el-link @click.native="goto('feedback')" 
               :underline="false"
                class="minespan">隐私政策</el-link>
            </li>
        </ul>
        <div style="width: 100%;
            height: 0.5rem;
            background: #f4f4f4; "></div>
        <ul>
            <li >
               <el-link @click.native="goto('aboutus')" 
               :underline="false"
                class="minespan">版本检测</el-link>
            </li>
            <li >
               <el-link @click.native="goto('aboutus')" 
               :underline="false"
                class="minespan">清除缓存</el-link>
            </li>
                     
        </ul>
        <el-button type="danger" style="width:100%;margin-top:5px" @click.native="logout">退出</el-button>
      </el-main>
    </el-container>
  </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            goto(name){
                this.$router.push({name});
            },
            logout(){
                this.$router.push('mine');
             localStorage.removeItem('username')
             
            }
        }
    }
</script>
<style scoped lang='scss'>
* {
}
html,
body {
  height: 100%;
  width: 100%;
  .auheadbtn{
      width:1.333333rem;
      height:1.333333rem;
      position: absolute;
      top:0;
      left:0;
  }
  .auhead{
      width:100%;
      height:100%;
      display:inline-block;
      text-align:center;
      line-height:3.8rem;
      color:#262626;
      font-size:1.386667rem;
  }
  .aulogo{
    width:6.666667rem;
    height:6.666667rem;
    margin: auto;
    img{
        width:6.666667rem;
        height:6.666667rem;
    }
  }
}
</style>