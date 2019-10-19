<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 10:12:42
 * @LastEditTime: 2019-10-17 17:36:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="container">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/goodsadd' }">
          <a href="/">添加商品</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line"></div>
    <div class="content">
      <div class="form_box">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="商品名称" prop="goods_name">
            <el-col :span="8">
              <el-input v-model="ruleForm.goods_name" size></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品副标题" prop="subtitle">
            <el-col :span="8">
              <el-input v-model="ruleForm.subtitle" size></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品会员价" prop="vipPrice">
            <el-col :span="3">
              <el-input v-model="ruleForm.vipPrice" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品原价" prop="noVipPrice">
            <el-col :span="3">
              <el-input v-model="ruleForm.noVipPrice" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品sku" prop="sku">
            <el-col :span="5">
              <el-input v-model="ruleForm.sku" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品库存" prop="stock">
            <el-col :span="5">
              <el-input v-model="ruleForm.stock" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品图片" prop="image">
            <el-col :span="5">
              <el-input v-model="ruleForm.image" />
            </el-col>
          </el-form-item>
          <el-form-item label="商品标签" prop="goods_tag">
            <el-radio-group v-model="ruleForm.goods_tag">
              <el-radio label="新人专享"></el-radio>
              <el-radio label="限时秒杀"></el-radio>
              <el-radio label="限时1000份"></el-radio>
              <el-radio label="9.9任选3种"></el-radio>
              <el-radio label="限时特惠"></el-radio>
              <el-radio label="今日秒杀"></el-radio>
              <el-radio label="一元秒杀"></el-radio>
              <el-radio label="劲爆*限量"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        goods_name: "",
        subtitle: "",
        vipPice: "",
        noVipPice: "",
        sku: "",
        stock:'',
        image: "",
        goods_tag: ""
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5-10 个字符", trigger: "blur" }
        ],
        subtitle: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5-10 个字符", trigger: "blur" }
        ],
        vipPrice: [
          { required: true, message: "请输入会员价", trigger: "blur" }
        ],
        noVipPrice: [
          { required: true, message: "请输入原价", trigger: "blur" }
        ],
        sku: [{ required: true, message: "请输入商品sku", trigger: "blur" }],
        goods_tag: [{ required: true, message: "请选择标签", trigger: "blur" }],
        stock:[{ required: true, message: "请输入商品库存", trigger: "blur" }],
        image: [
          {
            required: true,
            message: "请输入图片路径",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let api = "http://49.232.154.155:2999/goods/listcreate";
          let {
            goods_name,
            subtitle,
            vipPrice,
            noVipPrice,
            sku,
            stock,
            image,
            goods_tag
          } = this.ruleForm;
          let { data } = await this.$axios.post(api, {
            list: 1,
            goods_name,
            subtitle,
            vipPrice,
            noVipPrice,
            sku,
            stock,
            image,
            goods_tag,

          });
         if(data.code==1){
           alert('商品添加成功');
           this.resetForm(formName);
         }else{
           alert('添加失败')
         }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  
};
</script>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.container { overflow: auto;
  .header {
    height: 50px;
    padding: 10px;
  }
  .line {
    height: 1px;
    background: #ccc;
    margin-bottom: 10px;
  }
  .content {
    //   height: 100%;
    // padding: 20px;
    overflow: auto;
   
  }
}
</style>