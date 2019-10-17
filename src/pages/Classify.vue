<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-17 20:04:33
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
          <!-- <van-tab v-for="item in classify.secondGroupInfo" :title="item.name" :key="item.name"> -->
          <!-- <div class="product-item" v-for='(item,index) in item' v-if="item.cellType==5" :key="index">
                
          </div>-->
          <div class="fold-category-container">
            <div class="list-container">
              <div
                class="item-span"
                @click="toGoods(classify.secondGroupInfo)"
                v-for="item in classify.secondGroupInfo"
                :key="item.name"
                :data-second-group-id="item.secondGroupId"
              >{{item.name}}</div>
            </div>
            <div class="img-box">
              <img class="gray-bg" src="../assets/img3/gray-bg.png" alt />
              <div class="arrow-img arrow-img-white">
                <img src="../assets/img3/arrow-down.png" alt class="arrow-img" />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="product-item" v-for="(item,index) in classify.cellList" :key="index">
              <div
                class="category-title"
                v-if="item.cellType==5"
                :data-id="item.secondGroup"
              >{{item.titleInfo.title}}</div>
              <div class="product-item-box" v-if="item.cellType==7">
                <div class="line">
                  <div class="line-split"></div>
                </div>
                <div class="single-columns-item category-single-category">
                  <div class="product-img-wrap">
                    <img :src="item.normalProducts.image" alt class="product-img" />
                    <div
                      v-if="item.normalProducts.promotionTag.name"
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
                        >￥{{item.normalProducts.pricePro.noVip.price/100}}</span>
                      </div>
                      <div class="product-price">
                        <span
                          class="main-price"
                          v-if="item.normalProducts.pricePro.vip"
                        >￥{{item.normalProducts.pricePro.vip.price/100}}</span>
                      </div>
                    </div>
                    <div class="product-ctrl">
                      <img alt class="product-ctrl-bg" width="48" height="22" />
                      <div v-if="item.normalProducts.sell_out" class="product-cart-btns">
                        <img
                          src="../assets/img3/sub-btn.png"
                          alt
                          class="product-cart-btn sub"
                          @click="sub(item.normalProducts.sku)"
                        />
                        <div class="product-cart-num">{{item.normalProducts.showOrder}}</div>
                        <img
                          src="../assets/img3/add-btn.png"
                          alt
                          class="product-cart-btn add"
                          @click="add(item.normalProducts.sku)"
                        />
                      </div>
                      <img
                        v-else
                        @click="addCart(item.normalProducts.sku)"
                        :src="item.normalProducts.cart_image"
                        alt
                        class="product-addcart-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import "vant/lib/index.css";
import { Sidebar, SidebarItem, Tab, Tabs, Info } from "vant";
// import {MessageBox} from 'element-ui';
// Vue.use(MessageBox);
Vue.use(Sidebar)
  .use(SidebarItem)
  .use(Tab)
  .use(Tabs);
import categoryList from "../assets/js-Data/categories"; //数据
import c1 from "../assets/js-Data/c1";
import c2 from "../assets/js-Data/c2";
import c3 from "../assets/js-Data/c3";
import c4 from "../assets/js-Data/c4";
import c5 from "../assets/js-Data/c5";
import c6 from "../assets/js-Data/c6";
import c7 from "../assets/js-Data/c7";
import c8 from "../assets/js-Data/c8";
import c9 from "../assets/js-Data/c9";
import c10 from "../assets/js-Data/c10";
import c11 from "../assets/js-Data/c11";
import c12 from "../assets/js-Data/c12";
import c13 from "../assets/js-Data/c13";
import c14 from "../assets/js-Data/c14";
import c15 from "../assets/js-Data/c15";
import c16 from "../assets/js-Data/c16";
import c17 from "../assets/js-Data/c17";
import c18 from "../assets/js-Data/c18";
import c19 from "../assets/js-Data/c19";
// console.log(c1);
export default {
  data() {
    return {
      categoryData: "",
      activeKey: 0,
      classify: "",
      goodsdata: "",
    };
  },
  components: {},
  methods: {
    shift(index) {
      if (index == 0) {
        this.classify = c1.c1.data;
      } else if (index == 1) {
        this.classify = c2.c2.data;
      } else if (index == 2) {
        this.classify = c3.c3.data;
      } else if (index == 3) {
        this.classify = c4.c4.data;
      } else if (index == 4) {
        this.classify = c5.c5.data;
      } else if (index == 5) {
        this.classify = c6.c6.data;
      } else if (index == 6) {
        this.classify = c7.c7.data;
      } else if (index == 7) {
        this.classify = c8.c8.data;
      } else if (index == 8) {
        this.classify = c9.c9.data;
      } else if (index == 9) {
        this.classify = c10.c10.data;
      } else if (index == 10) {
        this.classify = c11.c11.data;
      } else if (index == 11) {
        this.classify = c12.c12.data;
      } else if (index == 12) {
        this.classify = c13.c13.data;
      } else if (index == 13) {
        this.classify = c14.c14.data;
      } else if (index == 14) {
        this.classify = c15.c15.data;
      } else if (index == 15) {
        this.classify = c16.c16.data;
      } else if (index == 16) {
        this.classify = c17.c17.data;
      } else if (index == 17) {
        this.classify = c18.c18.data;
      } else if (index == 18) {
        this.classify = c19.c19.data;
      }
    },
    addCart(sku) {
      //加入购物车
      
      let a = this.classify.cellList.filter(item => item.cellType == 7);
      a.forEach(item => {
        if (item.normalProducts.sku == sku) {
          item.normalProducts.sell_out = true;
        }
      });
      let currentGoods = this.$store.state.cart.cartList.filter(item=>item.normalProducts.sku === sku)[0];
      if(currentGoods){///如果有则修改数量加一
        let showOrder = currentGoods.normalProducts.showOrder ++;
      }else { //没有就直接增加
          let goods = a.filter(item=>item.normalProducts.sku == sku)[0];
        this.$store.commit('addCart',goods);
          
      }
    },
    sub(sku) {
      let a = this.classify.cellList.filter(item => item.cellType == 7);
      a.forEach(item => {
        if (item.normalProducts.sku == sku) {
          item.normalProducts.showOrder--;
          if (item.normalProducts.showOrder < 1) {
            this.$store.commit('removeQty',sku);
            item.normalProducts.sell_out = false;
          }
        }
      });
    },
    add(sku) {
      let a = this.classify.cellList.filter(item => item.cellType == 7);
      a.forEach(item => {
        if (item.normalProducts.sku == sku) {
          item.normalProducts.showOrder++;
          if (item.normalProducts.showOrder > item.normalProducts.stock) {
            item.normalProducts.showOrder = item.normalProducts.stock;
            alert('超出库存数')
            // item.normalProducts.sell_out = false;
            // this.$message ({
            //   type:'info',
            //   message:'超出库存数'
            // })
          }
        }
      });
    },
    toGoods(groupId) {
      let groups = document.getElementsByClassName("category-title");

      let newGroups = Array.from(groups);
      newGroups.forEach(item => {
        console.log(item.getAttribute("data-id"));
        if (item.dataset.secondGroupId == groupId) {
          console.log(item);
        }
      });
    }
  },
  created() {
    this.categoryData = categoryList.categoryList.data;
    this.classify = c1.c1.data;
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
        // padding-bottom: 3.125rem;
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
        .fold-category-container {
          background-color: #fff;
          width: 17.125rem;
          position: relative;
          // top: 20px;
          // z-index: 99;
          .list-container {
            position: relative;
            height: 2.25rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: scroll;
            .item-span {
              font-size: 0.75rem;
              color: #474245;
              height: 2.25rem;
              line-height: 2.25rem;
              padding: 0 0.625rem;
              white-space: nowrap;
            }
          }
          .img-box {
            position: absolute;
            font-size: 0;
            top: 0.5rem;
            right: 0;
            .gray-bg {
              display: inline-block;
              width: 1.875rem;
              height: 1.125rem;
            }
            .arrow-img {
              display: inline-block;
              width: 1.125rem;
              height: 1.125rem;
              background: #fff;
            }
          }
        }
        .container {
          position: relative;
          overflow-x: hidden;
          overflow-y: scroll;
          flex: 1;
          .product-item {
            color: #fff;
            .category-title {
              padding-top: 0.8125rem;
              padding-bottom: 0.3125rem;
              height: 2.0625rem;
              line-height: 1.0625rem;
              font-size: 0.75rem;
              color: #969696;
              text-indent: 0.9375rem;
            }
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
                  .product-cart-btns {
                    display: flex;
                    align-items: center;
                    z-index: 2;
                    .product-cart-btn {
                      box-sizing: border-box;
                      width: 1.3125rem;
                      height: 1.3125rem;
                      z-index: 1;
                    }
                    .product-cart-num {
                      font-size: 0.875rem;
                      color: #4d4d4d;
                      line-height: 1.25rem;
                      padding: 0 0.5rem;
                    }
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
}
</style>