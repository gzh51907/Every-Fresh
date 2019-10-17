<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-16 17:54:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="category product-category-swiper">
    <div class="category-nav">
      <section class="category-nav-wrap">
        <van-tabs
          style="width: auto;"
          title-active-color="#ff4891"
          color="#ff4891"
          @change="changeDate"
        >
          <!-- <van-tab 
                        v-for="index in listdate" 
                        :title="index.name" 
                        :key="index.name"
                        style="width: auto;"
                        
                        >
                            {{ index.name }}
          </van-tab>-->
          <van-tab title="热销爆品">
            <div class="category-box">
              <div
                class="swiper-container category-swiper swiper-container-horizontal swiper-container-autoheight swiper-container-android"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide category-swiper-slide swiper-slide-active">
                    <div class="product-category-contaier" active="true">
                      <section class="recommend-title">
                        <div class="recommend-text">
                          <img src="../assets/public img/img_20170627185311186.png" />
                          <em>优鲜严选</em>
                        </div>
                        <div class="recommend-text">
                          <img src="../assets/public img/img_20170627184654084.png" />
                          <em>安心检测</em>
                        </div>
                        <div class="recommend-text">
                          <img src="../assets/public img/img_20170718194948016.png" />
                          <em>赔付保障</em>
                        </div>
                      </section>
                      <div class="category-border">
                        <div></div>
                      </div>
                      <section class="prdCard-wrap">
                        <img src="../assets/public img/img_20180409221722548.png" alt class="bgImg" />
                        <div class="category-wrap">
                          <div class="lantern-wrap lantern-five">
                            <div class="lantern-item">
                              <div class="lantern-item-img">
                                <img
                                  data-v-f6a0fd68
                                  src="../assets/public img/img_20181127211810194.png"
                                  class="image-view"
                                  style
                                />
                              </div>
                              <p>本周新品</p>
                            </div>
                            <div class="lantern-item">
                              <div class="lantern-item-img">
                                <img
                                  data-v-f6a0fd68
                                  src="../assets/public img/img_20181127212305318.png"
                                  class="image-view"
                                  style
                                />
                              </div>
                              <p>邀请有礼</p>
                            </div>
                            <div class="lantern-item">
                              <div class="lantern-item-img">
                                <img
                                  data-v-f6a0fd68
                                  src="../assets/public img/img_20181127212018922.png"
                                  class="image-view"
                                  style
                                />
                              </div>
                              <p>每日签到</p>
                            </div>
                            <div class="lantern-item">
                              <div class="lantern-item-img">
                                <img
                                  data-v-f6a0fd68
                                  src="../assets/public img/img_20181127212340988.png"
                                  class="image-view"
                                  style
                                />
                              </div>
                              <p>凑单专区</p>
                            </div>
                            <div class="lantern-item">
                              <div class="lantern-item-img">
                                <img
                                  data-v-f6a0fd68
                                  src="../assets/public img/img_20181127212459157.png"
                                  class="image-view"
                                  style
                                />
                              </div>
                              <p>开通会员</p>
                            </div>
                          </div>
                          <div class="card-wrap">
                            <img
                              data-v-f6a0fd68
                              src="../assets/public img/img_20190109222906305.jpg"
                              class="image-view"
                              style
                            />
                            <img
                              data-v-f6a0fd68
                              src="../assets/public img/img_20181212223823585.png"
                              class="image-view"
                              style
                            />
                          </div>
                        </div>
                      </section>
                      <div class="all-products-wrap">
                        <div class="product-container">
                          <div
                            class="product-list-divider-wrap"
                            style="background-color: rgb(255, 255, 255);"
                          >
                            <div class="list-divider-container product-list-divider">
                              <div class="banner-img" style="height: 75.544px;">
                                <img
                                  data-v-f6a0fd68
                                  src="https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&amp;mryxh=142"
                                  class="image-view divider-banner"
                                  style
                                />
                              </div>
                            </div>
                            <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;"></div>
                          </div>
                          <div
                            class="product-list-item-wrap"
                            v-for="item in newdate"
                            :key="item.subtitle"
                            style="background-color: rgb(255, 255, 255);"
                            @click="goto(item.sku)"
                          >
                            <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;">
                              <section class="product-item-container">
                                <div class="product-item">
                                  <div class="item-image">
                                    <div class="promotion">
                                      <div class="product-item-promotion"></div>
                                    </div>
                                    <div class="product-item-image">
                                      <img :src="item.image" class="vux-x-img b-loaded" id />
                                    </div>
                                  </div>
                                  <div class="item-detail">
                                    <div class="item-title">
                                      <div class="product-item-title">
                                        <p class="sub-title">{{item.name}}</p>
                                        <p class="mess-title">{{item.subtitle}}</p>
                                      </div>
                                    </div>
                                    <div class="item-tag">
                                      <div class="product-item-tag">
                                        <span>
                                          <p
                                            class="tag-text"
                                            style="background-color: rgb(255, 255, 255); border-color: rgb(245, 159, 193); color: rgb(245, 159, 193);"
                                          >
                                            <span
                                              class="product-item-tag-txt"
                                            >{{item.product_tags[0].name}}</span>
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                    <div class="item-price">
                                      <div class="product-item-price">
                                        <div class="up-price-height">
                                          <div
                                            class="up-price"
                                            style="color: rgb(150, 150, 150); text-decoration: line-through; display: none;"
                                          >
                                            <span class="name"></span>
                                            <span class="sign">￥</span>
                                            <span
                                              class="price"
                                            >{{(item.vip_price_pro.price_up.price/100)}}</span>
                                          </div>
                                        </div>
                                        <div class="down-price" style="color: rgb(255, 72, 145);">
                                          <span class="sign">￥</span>
                                          <span
                                            class="price"
                                          >{{(item.vip_price_pro.price_down.price/100)}}</span>
                                          <span class="name"></span>

                                          <span
                                            class="has-line-through"
                                            style="color: rgb(150, 150, 150); text-decoration: line-through;"
                                          >
                                            ￥
                                            <span
                                              class="price has-line"
                                            >{{(item.vip_price_pro.price_up.price/100)}}</span>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="item-cart">
                                      <div class="product-item-cart">
                                        <div class="cart">
                                          <img
                                            src="../assets/public img/img_20170425134548759.png"
                                            class="image"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab v-for="(index,idx) in listdate" :key="index.internal_id" :title="index.name" v-if="idx != 0">
            <div
              
              class="product-list-item-wrap"
              v-for="item in typedate"
              style="background-color: rgb(255, 255, 255);"
            >
              <!---->
              <div
                style="padding: 0px 1%; width: 100%; box-sizing: border-box;"
                v-if="item.image"
                @click="goto(item.sku)"
              >
                <section class="product-item-container">
                  <div class="product-item">
                    <div class="item-image">
                      <div class="promotion">
                        <div class="product-item-promotion">
                          <!---->
                          <!---->
                        </div>
                      </div>
                      <div class="product-item-image">
                        <img :src="item.image" class="vux-x-img b-loaded" id />
                      </div>
                    </div>
                    <div class="item-detail">
                      <div class="item-title">
                        <div class="product-item-title">
                          <p class="sub-title">{{item.name}}</p>
                          <p class="mess-title">{{item.subtitle}}</p>
                        </div>
                      </div>
                      <div class="item-tag">
                        <div class="product-item-tag">
                          <span>
                            <p
                              class="tag-text"
                              style="background-color: rgb(255, 255, 255); border-color: rgb(245, 159, 193); color: rgb(245, 159, 193);"
                              v-if="item.product_tags"
                            >
                              <!---->
                              <span class="product-item-tag-txt">{{item.product_tags[0].name}}</span>
                            </p>
                            <p v-else>
                              <span class="product-item-tag-txt"></span>
                            </p>
                          </span>
                        </div>
                      </div>
                      <div class="item-price">
                        <div class="product-item-price">
                          <div class="up-price-height">
                            <div
                              class="up-price"
                              style="color: rgb(150, 150, 150); text-decoration: line-through; display: none;"
                            >
                              <span class="name"></span>
                              <span class="sign">￥</span>
                              <span class="price">{{(item.vip_price_pro.price_up.price/100)}}</span>
                            </div>
                          </div>
                          <div class="down-price" style="color: rgb(255, 72, 145);">
                            <!---->
                            <span class="sign">￥</span>
                            <span
                              class="price"
                            >{{(item.vip_price_pro.price_down.price/100).toFixed(1)}}</span>
                            <span class="name"></span>
                            <!---->
                            <span
                              class="has-line-through"
                              style="color: rgb(150, 150, 150); text-decoration: line-through;"
                            >
                              ￥
                              <span
                                class="price has-line"
                              >{{(item.vip_price_pro.price_up.price/100).toFixed(1)}}</span>
                            </span>
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="item-cart">
                        <div class="product-item-cart">
                          <!---->
                          <div class="cart">
                            <img src="../assets/public img/img_20170425134548759.png" class="image" />
                            
                          </div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                </section>
              </div>
              <div
                class="product-list-divider-wrap"
                style="background-color: rgb(255, 255, 255);"
                v-else
              >
                <div class="list-divider-container product-list-divider">
                  <div class="banner-img" v-for="index in item.banner">
                    <img
                      v-if="index.path"
                      :src="index.path"
                      class="image-view divider-banner"
                      style
                    />
                    <div class="title-text" v-else>
                      <p class="title-text-first" style="color: rgb(0, 0, 0);">{{item.second_title}}</p>
                      <p class="title-text-second">{{item.tags}}</p>
                    </div>
                  </div>
                </div>
                <div style="padding: 0px 1%; width: 100%; box-sizing: border-box;">
                  <!---->
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>

        <!-- <div class="category-nav-btn"></div> -->
        <!-- <div class="category-nav-img" style="display: none;">
                <h3>
                    全部品类
                    <i></i>
                </h3>
                <ul class="category-nav-ul">
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225039946.png?mryxw=120&amp;mryxh=120&quot;);"></i> <h4>热销爆品</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190104093258105.png?mryxw=140&amp;mryxh=140&quot;);"></i> <h4>优鲜菜场</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190516225131129.jpg?mryxw=360&amp;mryxh=360&quot;);"></i> <h4>时令尝鲜</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731151220429.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>大闸蟹</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190218143311278.png?mryxw=1059&amp;mryxh=1058&quot;);"></i> <h4>会员特价</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190516151037947.jpg?mryxw=360&amp;mryxh=360&quot;);"></i> <h4>时令尝鲜</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190802103405008.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>水果</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190722173402139.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>肉蛋</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190802103540761.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>蔬菜</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190415010710117.png?mryxw=96&amp;mryxh=96&quot;);"></i> <h4>时令水果</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150330705.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>乳品</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150439766.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>水产</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150537413.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>零食</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150633429.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>酒水</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190802104448761.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>粮油</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150742469.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>日百</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150834995.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>速食</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190731150939014.jpg?mryxw=500&amp;mryxh=500&quot;);"></i> <h4>熟食</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215607573.png?mryxw=96&amp;mryxh=96&quot;);"></i> <h4>新鲜蔬菜</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411233944397.png?mryxw=96&amp;mryxh=96&quot;);"></i> <h4>肉禽蛋类</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225647021.png?mryxw=140&amp;mryxh=140&quot;);"></i> <h4>卤味熟食</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215703249.png?mryxw=96&amp;mryxh=96&quot;);"></i> <h4>海鲜水产</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190411215729751.png?mryxw=96&amp;mryxh=96&quot;);"></i> <h4>乳品雪糕</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225358505.png?mryxw=140&amp;mryxh=140&quot;);"></i> <h4>休闲零食</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225750228.png?mryxw=140&amp;mryxh=140&quot;);"></i> <h4>坚果糕点</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20181212225617637.png?mryxw=140&amp;mryxh=140&quot;);"></i> <h4>酒水饮料</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190329212200665.png?mryxw=144&amp;mryxh=144&quot;);"></i> <h4>粮油调味</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190329213300525.png?mryxw=144&amp;mryxh=144&quot;);"></i> <h4>速食面点</h4></li>
                    <li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190516181026862.png?mryxw=144&amp;mryxh=144&quot;);"></i> <h4>家居清洁</h4></li><li><i class="icon" style="background-image: url(&quot;https://j-image.missfresh.cn/mis_img_20190516181359703.png?mryxw=144&amp;mryxh=144&quot;);"></i> <h4>美妆个护</h4></li>
                </ul>
            </div> 
            <div class="category-nav-mask01" style="display: none;"></div>
        <div class="category-nav-mask02" style="display: none;"></div>-->
        <!-- <div id="slideLoading" class="slideLoading" style="display: none;">
                <img src="https://j-image.missfresh.cn/img_20181204113632737.gif" alt="">
            </div> 
            <div id="address-warning" class="address-warning" style="display: none;">
                <i></i> <em></em>
        </div>-->
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Tab, Tabs, Button } from "vant";
import homeData from "../assets/homedatajs/homedata.js";
import homeList from "../assets/homedatajs/homelist.js";

export default {
  components: {
    [Tabs.name]: Tabs,
    [Button.name]: Button,
    [Tab.name]: Tab
  },
  data() {
    return {
      homeData, //数据
      homeList,
      newdate: [],
      listdate: [],
      typedate: [],
      val: 5
    };
  },
  methods: {
    goto(sku) {
      this.$router.push({ name: "detail", query: { sku } });
    },
    async changeDate(name, index) {

      await axios.get(`http://49.232.154.155:2999/goods/list?list=${name}`).then(response=> {
            this.typedate = response.data[0].products
        })
        .catch(function (error) {
            console.log(error);
        });

      
    }
  },
  async created() {
    // await axios.delete(`http://127.0.0.1:3000/goods/listdel`).then(response=> {
    //         console.log(response)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //删除标题

    this.homeData.data.products.forEach((item, index) => {
      if (!item.image) {
        this.homeData.data.products.splice(index, 1);
      }
    });
    this.newdate = this.homeData.data.products;

    this.listdate = this.homeList.category_list;

    // console.log('list',this.listdate);
    
    
  }
};
</script>

<style lang="scss" scoped>
i,
em {
  font-style: normal;
}
.product-category-swiper {
  // width:100%;
  top: 0;
  bottom: 0;
}
.category {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  align-items: stretch;
}
.category-nav-wrap {
  width: 100%;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
  .category-nav {
    width: 88%;
    display: flex;
    flex-flow: nowrap;
    overflow-x: auto;
    -webkit-box-align: center;
    align-items: center;
    background: #fff;
    white-space: nowrap;
    font-size: 0;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0.25rem;
  }
  .category-nav-btn {
    width: 2.625rem;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
    background: #fff url("../assets/public img/downarr.png") no-repeat center
      0.5rem;
    background-size: 0.875rem;
    z-index: 15;
    background-position-y: 50%;
  }
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  // width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.category-nav-item {
  display: inline-block;
  box-sizing: border-box;
  color: #262626;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  span {
    display: inline-block;
    height: 100%;
    margin: 0 0.9375rem;
    box-sizing: border-box;
    border-bottom: 0.125rem solid transparent;
  }
}
.swiper-slide,
.swiper-slide-active {
  width: 100%;
  padding: 0;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translateZ(0);
}
.category-nav-item-active span {
  color: #ff4891;
  border-bottom: 2px solid #ff4891;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
}
.category .category-box {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.product-category-contaier {
  background-color: #fff;
  .category-border {
    width: 94%;
    height: 1px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
}
.recommend-title {
  width: 100%;
  height: 3.0625rem;
  line-height: 3.0625rem;
  display: -webkit-flex;
  -webkit-justify-content: space-around;
  .recommend-text {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    color: #4d4d4d;
    font-size: 0.75rem;
    img {
      vertical-align: sub;
      width: 1rem;
      height: 1rem;
    }
  }
}
.prdCard-wrap {
  width: 100%;
  position: relative;
  .bgImg {
    width: 100%;
  }
  .category-wrap {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .lantern-wrap {
    width: 100%;
    height: 6.8125rem;
    display: flex;
    box-sizing: border-box;
  }
  .lantern-item {
    position: relative;
    padding-top: 1.5rem;
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    p {
      color: #474245;
      font-size: 0.75rem;
    }
  }
  .lantern-item-img {
    position: relative;
    display: inline-block;
  }
  .lantern-five img {
    width: 2.5rem;
  }
  .lantern-item img {
    display: inline-block;
    width: 2.75rem;
  }
  .card-wrap {
    padding: 0 0.9375rem;
    overflow: hidden;
    img {
      display: inline-block;
      width: 10.625rem;
      height: 6.25rem;
    }
    img:nth-of-type(1) {
      float: left;
    }
    img:nth-of-type(2) {
      float: right;
    }
  }
}
.product-container .product-list-divider-wrap {
  overflow: hidden;
}
.title-text {
  width: 100%;
  text-align: left;
  padding: 0.625rem 1.125rem;
  margin-bottom: 0.5rem;
  margin-bottom: 0;
  .title-text-first {
    font-size: 1.25rem;
    height: 1.875rem;
    line-height: 1.875rem;
    color: #443e42;
  }
  .title-text-second {
    color: #968d91;
    font-size: 0.75rem;
    height: 1.25rem;
    line-height: 1.25rem;
  }
}
.title-container {
  padding: 0 1.125rem;
}
.list-divider-container {
  text-align: center;
  background: #fff;
  .divider-banner {
    width: 100%;
    height: 100%;
  }
}
.banner-img {
  width: 100%;
  display: block;
}
.product-container
  .product-list-divider-wrap
  + .product-list-item-wrap
  .product-item-container {
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
}
.product-item-container {
  padding: 0 0.625rem;
  background-color: #fff;
  .product-item {
    background: #fff;
    width: 100%;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -moz-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-flex: 1;
    flex: 1 1 0;
    position: relative;
    box-sizing: border-box;
    padding: 1.375rem 0;
    border-bottom: 0.0625rem solid #f5f5f5;
    .item-image {
      width: 7.5rem;
      height: 7.5rem;
      margin-right: 0.9375rem;
      margin-left: 0.3125rem;
      position: relative;
    }
    .promotion {
      position: absolute;
      left: 0;
      top: 0;
    }
    .item-detail {
      -webkit-box-flex: 1;
      flex: 1;
      position: relative;
      .item-title {
        margin-top: 0.625rem;
      }
      .item-tag {
        line-height: 1.3125rem;
        height: 1.625rem;
        margin-bottom: 1.25rem;
      }
      .item-price {
        margin-bottom: 0.625rem;
      }
      .item-cart {
        position: absolute;
        right: 0;
        bottom: 0.3125rem;
      }
    }
  }
}
.product-item-title {
  .sub-title {
    font-size: 1rem;
    color: #474245;
  }
  p {
    width: 12.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .mess-title {
    font-size: 0.875rem;
    color: #969696;
  }
}
.product-item-price {
  font-size: 0.75rem;
  line-height: 1;
  .up-price-height {
    min-height: 0.625rem;
  }
  .down-price {
    line-height: 1;
    .name {
      display: inline-block;
      vertical-align: baseline;
    }
    .price {
      font-size: 1rem;
      letter-spacing: -1px;
      display: inline;
      vertical-align: baseline;
      margin-left: -0.3125rem;
    }
    .name {
      display: inline-block;
      vertical-align: baseline;
    }
  }
}
.product-item-cart .cart .image {
  width: 45px;
  display: block;
  -webkit-transform: translateY(18%);
  transform: translateY(18%);
}
.product-item-image img {
  width: 120px;
}
.product-item-tag .tag-text {
  display: inline-block;
  border-radius: 0.125rem;
  font-size: 0.75rem;
  height: 0.875rem;
  line-height: 0.875rem;
  border: 1px solid #c6c6c6;
  margin-right: 0.3125rem;
  padding: 0 0.125rem;
  color: #262626;
  position: relative;
}
</style>