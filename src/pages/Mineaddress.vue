<template>
  <div>
    <el-container>
      <el-header>
         <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')" class="adressheadbtn"></el-button>
         <span class="adresshead">我的收货地址</span>
      </el-header>
      <el-main>
        <el-button type="danger" @click.native="goto('address')" style="width:100%;margin-top:50px">新增收货地址</el-button>
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
  .adressheadbtn{
      width:1.333333rem;
      height:1.333333rem;
      position: absolute;
      top:0;
      left:0;
  }
  .adresshead{
      width:100%;
      height:100%;
      display:inline-block;
      text-align:center;
      line-height:3.8rem;
      color:#262626;
      font-size:1.386667rem;
  }
}
</style>