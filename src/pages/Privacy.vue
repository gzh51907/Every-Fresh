<template>
  <div>
    <el-container>
      <el-header>
         <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('login')"></el-button>
      </el-header>
      <el-main>
        <h2 style="text-align:center">每日优鲜隐私政策</h2>
        <p>更新日期：2019年9月27日</p>
        <p>更新日期：2019年6月24日</p>
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