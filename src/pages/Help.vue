<template>
  <div>
    <el-container>
      <el-header>
         <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')" class="helpheadbtn"></el-button>
          <span class="helphead">客服与帮助</span>
      </el-header>
      <el-main>
        <h2 style="text-align:left">猜你想问</h2>
        <ul>
            <li>
               <el-link @click.native="goto('order')" 
               :underline="false"
                class="minespan">1、如何催单</el-link>
            </li>
             <li>
                 <el-link @click.native="goto('address')" 
               :underline="false"
                class="minespan">2、商品不想要了怎么退款</el-link>
            </li>
             <li>
               <el-link @click.native="goto('security')" 
               :underline="false"
                class="minespan">3、修改收获信息</el-link>
            </li>
        </ul>
        <div style="width: 100%;
            height: 0.5rem;
            background: #f4f4f4;  "></div>
        <ul>    
             <li>
                 <el-link @click.native="goto('help')" 
               :underline="false"
                class="minespan">4、红包不可用原因</el-link>
            </li>
             <li>
                <el-link @click.native="goto('feedback')" 
               :underline="false"
                class="minespan">5、商品卷怎么使用</el-link>
            </li>
        </ul>
        <div style="width: 100%;
            height: 0.5rem;
            background: #f4f4f4; "></div>
        <ul>
            <li >
               <el-link @click.native="goto('aboutus')" 
               :underline="false"
                class="minespan">6、如何开发票</el-link>
            </li>
            <li >
               <el-link @click.native="goto('aboutus')" 
               :underline="false"
                class="minespan">7、企业订购</el-link>
            </li>
        </ul>
        <el-button type="danger" style="width:100%;margin-top:50px">在线客服</el-button>
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
.helpheadbtn{
      width:1.333333rem;
      height:1.333333rem;
      position: absolute;
      top:0;
      left:0;
  }
  .helphead{
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