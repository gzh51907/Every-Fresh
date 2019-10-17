<template>
  <div>
    <el-container>
      <el-header>
         <el-button icon="el-icon-arrow-left" style="margin-left:0px;border: none;" @click.native="goto('mine')" class="adressheadbtn"></el-button>
         <span class="adresshead">新增地址</span>
      </el-header>
      <div style="width: 100%;
            height: 1rem;
            background: #f4f4f4;  "></div>
      <el-main>
      <div style=" height: 7rem;">
        <div class="sjr">收件人</div>
        <div class="sr">
            <div class="box1">
                <input placeholder="请输入收件人姓名" id="addressname"></input>
            </div>
            <div class="box2">
                <el-radio v-model="radio" label="1">女士    </el-radio>
                <el-radio v-model="radio" label="2">先生    </el-radio>
            </div>
        </div>
      </div>
        <div class="phone">
            <div class="sjhm">
                手机号码
            </div>
            <div class="sr2">
                <input placeholder="请填写收货人号码" id="addressphone"></input>
            </div>
        </div>

        <div class="addresstoo">
            <div class="shdz">
                收货地址
            </div>
            <div class="sr3">
                <input placeholder="请输入收货地址" id="addressaddress"></input>
            </div>
        </div>

        <div class="addresslhmp">
            <div class="lhmp">
                楼号门牌
            </div>
            <div class="sr4">
                <input placeholder="详细地址、例如：3号楼二单元105" id="specificaddress"></input>
            </div>
        </div>
       
       <el-button type="success" @click="goto('mineaddress')" style="width:100%;margin-top:50px">保存收货地址</el-button>

      </el-main>
    </el-container>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                radio: '1',
                labelPosition: 'right',
                formLabelAlign: {
                  name: '',
                  region: '',
                  type: ''
                }
                
            };
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
  .sjr
  {
    width: 29%;
    height: 6.333333rem;

    display: inline-block;
    float:left;
}
   .sr{
    width: 69%;
    height: 6.333333rem;
    display: inline-block;
    float:right;
    .box1,
    .box2
    {
        width: 100%;
        height: 3.2rem;
        border-bottom: 1px solid #eeeeee;
       
    }
    #addressname{
      outline:none;
      border:none;
      display:inline-block;
      width:100%;
        height: 3.2rem;

    }
 
   }
   .phone{
        width:100%;
        height:3.4rem;
        border-bottom: 1px solid #eeeeee;
       .sjhm{
            width: 29%;
            height: 3.333333rem;
            display: inline-block;
            float:left;
            line-height:3.333333rem;
       }
       .sr2{
            width: 69%;
            height: 3.333333rem;
            display: inline-block;
            float:right;
            #addressphone{
                outline:none;
                border:none;
                display:inline-block;
                width:100%;
                height: 3.2rem;
            }
       }
   }
   .addresstoo{
        width:100%;
        height:3.4rem;
        border-bottom: 1px solid #eeeeee;
       .shdz{
            width: 29%;
            height: 3.333333rem;
            display: inline-block;
            float:left;
            line-height:3.333333rem;
       }
       .sr3{
            width: 69%;
            height: 3.333333rem;
            display: inline-block;
            float:right;
            #addressaddress{
                outline:none;
                border:none;
                display:inline-block;
                width:100%;
                height: 3.2rem;
            }
       }
   }
   .addresslhmp{
        width:100%;
        height:3.4rem;
        border-bottom: 1px solid #eeeeee;
       .lhmp{
            width: 29%;
            height: 3.333333rem;
            display: inline-block;
            float:left;
            line-height:3.333333rem;
       }
       .sr4{
            width: 69%;
            height: 3.333333rem;
            display: inline-block;
            float:right;
            #specificaddress{
                outline:none;
                border:none;
                display:inline-block;
                width:100%;
                height: 3.2rem;
            }
       }
   }

}
</style>