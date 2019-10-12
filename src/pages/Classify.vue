<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-12 09:16:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app-box">
    <div class="wrapper">
      <div class="categories-con">
        <div class="left-con">
          <van-sidebar v-model="activeKey" style="overflow-y:scorll" @change="shift">
            <van-sidebar-item
              :title="item.name"
              v-for="item in categoryData.categories"
              :key="item.name"
            />
          </van-sidebar>
        </div>
        <!-- </div> -->
        <div class="right-con">
          <van-tabs>
            <van-tab v-for="item in classify.secondGroupInfo" :title="item.name" :key="item.name">
              <div class="product-item" v-for="(item,index) in goodsdata" :key="index">
                <div class="product-item-box">
                  <div class="line">
                    <div class="line-split"></div>
                  </div>
                  <div class="single-columns-item category-single-category">
                    <div class="product-img-wrap">
                      <img :src="item.normalProducts.image" alt class="product-img" />
                      <div
                        class="product-promote-tag"
                        style="color: rgb(255, 255, 255);
                        background: linear-gradient(46deg, rgb(250, 4, 51), rgb(250, 82, 30));"
                      >{{item.normalProducts.promotionTag.name}}</div>
                    </div>
                    <div class="product-item-right">
                      <div class="product-title">{{item.normalProducts.name}}</div>
                      <div class="product-subtitle">{{item.normalProducts.subtitle}}</div>
                      <div class="product-bottom">
                        <div class="product-price">
                          <span
                            class="sub-price no-vip"
                            style="color:rgb(255,72,145)"
                          >{{item.normalProducts.pricePro.noVip.price*0.6/100}}</span>
                        </div>
                        <div class="product-price">
                          <span class="main-price">{{item.normalProducts.pricePro.noVip.price/100}}</span>
                        </div>
                      </div>
                      <div class="product-ctrl">
                        <img alt class="product-ctrl-bg" width="48" height="22" />
                        <img :src="item.normalProducts.cart_image" alt class="product-addcart-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import { Sidebar, SidebarItem,Tab, Tabs } from 'vant';
Vue.use(Sidebar).use(SidebarItem).use(Tab).use(Tabs);
import categoryList from "../assets/js-Data/categories"; //数据
import classify1 from "../assets/js-Data/classify";
import c2 from "../assets/js-Data/c2";
console.log(c2.c2.data)
export default {
  data() {
    return {
      categoryData: "",
      activeKey: 0,
      classify: "",
      goodsdata: "",
      dataname:'',
    };
  },
  components:{
    
  },
  methods: {
    getClassify() {
    //   console.log(1);
      this.classify = this.dataname;
    
      this.goodsdata = this.classify.cellList.filter(
        (item, index) => item.cellType != 5
      );
      console.log(this.goodsdata);
    },
    shift(index) {
      if (index == 0) {
      } else if (index == 1) {
        this.dataname = c2.c2.data;
        this.getClassify();
      console.log(this.dataname);
      }
    }
  },
  created() {
      this.categoryData = categoryList.categoryList.data;
      this.dataname = classify1.classify.data;
      this.getClassify();
  }
};
</script>
<style scoped lang='scss'>
* {
}
html,
body {
  height: 100%;
  width: 100%;
}
#app-box {
  height: 100%;
  width: 100%;
  .wrapper {
    height: 100%;
    width: 100%;
    //    flex: 1;
    display: flex;
    .categories-con {
      display: flex;
      width: 100%;
      height: 100%;
      .left-con {
        width: 85px;
        background: #f8f8f8;
        height: 600px;
        overflow-y: scroll;
        padding-bottom: 3.125rem;
        box-sizing: border-box;
        .category-item {
          position: relative;
          width: 100%;
          height: 2.5rem;
          line-height: 2.5rem;
          text-align: center;
          font-size: 0.875rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .right-con {
        position: relative;
        flex: 1;
        height: 600px;
        overflow-y: scroll;
        .product-item {
          color: #fff;
          .product-item-box {
            .line {
              box-sizing: border-box;
              padding: 0 0.625rem;
              .line-split {
                border-top: 0.0625rem solid #f5f5f5;
              }
            }
            .category-single-category {
              padding: 0;
              padding-bottom: 0.875rem;
              .product-img-wrap {
                margin-top: 0.9375rem;
                margin-left: 0.3125rem;
                position: relative;
                font-size: 0;
                line-height: 0;
                .product-img {
                  width: 5.9375rem;
                  height: 5.9375rem;
                }
                .product-promote-tag {
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  white-space: nowrap;
                  padding: 0 0.375rem;
                  border-radius: 0.1875rem;
                  height: 1.125rem;
                  line-height: 1.125rem;
                  font-size: 0.75rem;
                  transform: translate(-50%, 0);
                }
              }
              .product-item-right {
                overflow: hidden;
                position: relative;
                padding-left: 0.9375rem;
                padding-top: 7.2%;
                width: 60%;
                .product-title {
                  padding-right: 0.1875rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  font-size: 0.875rem;
                  color: #474346;
                  line-height: 1.375rem;
                }
                .product-subtitle {
                  font-size: 0.75rem;
                  color: #969696;
                  line-height: 1.25rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              .product-bottom {
                width: 100%;
                margin-top: 0.125rem;
                min-height: 2.125rem;
                -ms-flex-direction: column;
                flex-direction: column;
                -ms-flex-pack: end;
                justify-content: flex-end;
                -webkit-justify-content: flex-end;
                -ms-flex-align: start;
                align-items: flex-start;
                -webkit-align-items: flex-start;
                -ms-flex: 1;
                flex: 1;
                -webkit-flex: 1;
                .product-price {
                  display: flex;
                  align-items: center;
                  .sub-price {
                    padding-top: 0.1875rem;
                    font-size: 0.75rem;
                    line-height: 1rem;
                    font-weight: 500;
                    color: #747474;
                  }
                  .main-price {
                    color: rgb(150, 150, 150);
                    font-size: 0.875rem;
                    line-height: 1.0625rem;
                    font-weight: 500;
                  }
                }
              }
              .product-ctrl {
                bottom: 0.5rem;
                position: absolute;
                right: 0.625rem;
                line-height: 0;
                font-size: 0;
                background: #fff;
                .product-ctrl-bg {
                  display: none;
                  width: 21.3%;
                  height: 9.7%;
                  width: 3rem;
                  height: 1.375rem;
                  position: absolute;
                  bottom: 0;
                  left: -1.25rem;
                  z-index: 1;
                }
                .product-addcart-img {
                  right: 0;
                  width: 1.875rem;
                  height: 1.875rem;
                  z-index: 2;
                  position: relative;
                }
              }
            }
            .single-columns-item {
              position: relative;
              background: #fff;
              display: flex;
              flex-direction: row;
            }
          }
        }
      }
    }
  }
}
</style>