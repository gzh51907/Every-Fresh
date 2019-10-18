<!--
 * @Description: In User Settings Edita
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-18 16:12:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="cart_box">
    <div
      v-show="addressShow"
      class="vux-popup-dialog vux-popup-bottom vux-popup-show"
      style="height:100%;z-index:999;"
    >
      <div class="address-chose" ref="address">
        <div class="mf-header">
          <div class="mf-header-wrap">
            <div class="mf-header-back" @click="closeAddress"></div>
            <div class="mf-header-title">选择收货地址</div>
            <div class="mf-header-right">新增地址</div>
          </div>
        </div>
        <div class="address-bar">
          <div class="address-input">
            <div class="address-city">广州市</div>
            <div class="address-position">请输入要收货的小区/写字楼</div>
          </div>
        </div>
        <div class="trans-tip">因各地区商品和配送服务不同，请您选择准确收获地址</div>
        <div class="location-bar">
          <span>
            <span class="location-success">广州市</span>
            <span class="location-info">当前位置</span>
          </span>
          <span class="location-refresh location-loading"></span>
        </div>
      </div>
    </div>
    <div></div>

    <div class="C-empty">
      <div class="cart-top">
        <div class="C-block-wrap no-margin-top C-locat-wrap">
          <div class="C-locat-icon"></div>
          <span class="C-locat-city" @click="chooseAddress">广州市天河区文化局</span>
          <div class="location-arrow"></div>
        </div>
      </div>
      <p class="C-empty-text" v-if="titleShow">你还没有添加任何商品</p>
      <div class="C-block-wrap C-group-wrap" v-else>
        <div class="C-group-header-wrap">
          <div class="C-group-header">
            <!-- <div class="C-checkbox selected">
              <i class="C-checkbox-c"></i>
            </div>-->
            <input type="checkbox" class="C-checkbox" v-model="checkAll" />
            <p class="C-group-title">2小时达</p>
            <span class="C-group-header-right">包邮</span>
          </div>
        </div>

        <div class="C-group-content">
          <div class="C-group-header-wrap"></div>
          <div class="C-group-item-list" v-if="cartList ">
            <div class="P-item-wrap cart" v-for="(item,index) in cartList" :key="index">
              <div
                class="P-item-content flex shop-item-index-0"
                style="transition: -webkit-transform 200ms ease 0s;
                 transform: translate3d(0px, 0px, 0px);"
              >
                <input type="checkbox" class="C-checkbox" v-model="checkAll" />
                <div class="P-item-image">
                  <img
                    class="P-item-img"
                    width="70"
                    height="70"
                    :src="item.goods_image"
                    alt
                  />
                </div>
                <div class="P-item-info">
                  <p
                    class="P-item-info-line P-item-name"
                    style="width:70%;"
                  >{{item.goods_name}}</p>
                  <p class="P-item-info-line P-item-tags">
                    <span
                      class="P-item-tag place-tag"
                      style="background-color:rgb(255,255,255)"
                      v-if="item.goods_tag"
                    >{{item.goods_tag}}</span>
                  </p>
                  <div class="P-item-info-line P-item-price flex" style="color:rgb(255,72,145)">
                    <span class="P-item-price-unit" style="color:rgb(255,72,145)">￥</span>
                    <span
                      class="P-item-price-price"
                      style="color:rgb(255,72,145)"
                    >{{item.noVip_price/100}}</span>
                    <span
                      class="P-item-price-origin"
                      style="color:rgb(150,150,150)"
                      v-if="item.vip_price"
                    >￥{{item.vip_price/100}}</span>
                  </div>
                  <div class="P-item-controller flex">
                    <span class="P-item-controller-btn sub" @click="sub(item.sku,item.qty)">-</span>
                    <span class="P-item-controller-num">{{item.qty}}</span>
                    <span class="P-item-controller-btn add" @click="add(item.sku,item.qty)">+</span>
                  </div>
                </div>
              </div>

              <div
                @click="removeItem(item.sku)"
                class="P-item-delete flex"
                style="opacity:1"
              >
                <span>删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="open-vip-wrap" v-if="!titleShow">
        <div class="open-vip-box flex-box">
          <div class="open-vip-box-top">
            <img
              class="open-vip-icon"
              src="https://j-image.missfresh.cn/img_20181205175918600.png"
              alt
            />
          </div>
          <div class="open-vip-box-bot-r">
            <span class="open-text">
              <i style="color:#ff4891;">￥6/月</i>
              立即开通
            </span>
            <span class="select-box">
              <img src="https://j-image.missfresh.cn/img_20181206163746310.png" alt />
            </span>
          </div>
        </div>
      </div>
      <div class="price-list-panel order-promotion-wrap" v-if="!titleShow">
        <ul class="price-list-ul">
          <li class="rela item-content-totalprice">
            <p class="abs li-left">商品总价</p>
            <p class="li-right">
              <span class="el active">￥{{totalPrice/100}}</span>
            </p>
          </li>
          <li class="rela">
            <p class="abs li-left">商品实付</p>
            <p class="li-right">￥{{totalPrice/100}}</p>
          </li>
          <li class="rela">
            <p class="abs li-left">运费</p>
            <p class="li-right">包邮</p>
          </li>
          <!-- <li class="rela"></li>
          <li class="rela"></li>-->
        </ul>
        <p class="total-price">
          合计
          <span>￥{{totalPrice/100}}</span>
        </p>
      </div>
      <div class="C-recommend-wrap">
        <div class="C-recommend-title">推荐商品</div>
        <div class="C-recommend-items">
          <div class="two-columns-item" v-for="(item,index) in recommend" :key="index">
            <div class="product-img-wrap">
              <img class="product-img" :src="item.image" alt />
              <div
                class="product-promote-tag"
                style="color:rgb(255,255,255);background:linear-gradient(46deg,rgb(250,4,51),rgb(250,82,30));"
              >{{item.promotionTag.name}}</div>
            </div>
            <div class="product-title">{{item.name}}</div>
            <div class="product-subtitle">{{item.subtitle}}</div>
            <div class="product-bottom">
              <div class="product-prices">
                <span
                  class="sub-price"
                  style="color:rgb(255,72,145)"
                  v-if="item.pricePro.vip"
                >￥{{item.pricePro.vip.price/100}}</span>
              </div>
              <div class="product-prices">
                <span
                  class="main-price"
                  style="color:rgb(150,150,150)"
                >￥{{item.pricePro.noVip.price/100}}</span>
              </div>
            </div>
            <div class="product-ctrl">
              <img class="product-ctrl-bg" src="../assets/img3/blur-bg.png" alt />

              <img class="product-addcart-img" src="../assets/img3/new-cart.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="C-footer-wrap" v-if="!titleShow">
        <div class="C-footer-content flex" style="bottom:49px;">
          <input type="checkbox" class="C-checkbox" v-model="checkAll" />
          <div class="C-footer-label">全选</div>
          <div class="C-footer-price">
            <p class="C-footer-total">
              <span style="color:rgb(38,38,38)">合计：</span>
              <span style="color:rgb(255,72,145)">￥{{totalPrice/100}}</span>
            </p>
            <p class="C-footer-info" style="color:rgb(150,150,150);">包邮</p>
          </div>
          <div class="C-footer-btn flex" @click="jiesuan">去结算</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import recommend from "../assets/js-Data/recommend";
import { Button } from "vant";
import Vue from "vue";
import { getCurves } from "crypto";
Vue.use(Button);
export default {
  data() {
    return {
      addressShow: false,
      titleShow: true,
      recommend: recommend.data.products,
      checkAll: true
    };
  },
  methods: {
    chooseAddress() {
      this.addressShow = true;
    },
    closeAddress() {
      this.addressShow = false;
    },
    removeItem(sku) {
      this.$store.commit("removeQty", sku);
      if (this.$store.getters.cartLength == 0) {
        this.titleShow = true;
      }
    },
    changeQty(sku,qty) {
      //id 和  修改数量

      this.$store.commit("changeQty", { sku, qty });
    },
    sub(sku,qty) {
      // let cartList = this.$store.state.cart.cartList;
      // // console.log(cartList);
      // cartList.forEach(item => {
      //   if (item.normalProducts.sku == sku) {
      //     item.normalProducts.showOrder--;
      //     if (item.normalProducts.showOrder < 1) {
      //       this.removeItem(sku)
      //     }
      //   }
      // });
      qty --;
      if(qty<1){
        this.removeItem(sku)
      }
      this.$store.commit('changeQty',{sku,qty});
    },
    add(sku,qty) {
      qty++;
      this.$store.commit('changeQty',{sku,qty});
      // let cartList = this.$store.state.cart.cartList;
      // cartList.forEach(item => {
      //   if (item.normalProducts.sku == sku) {
      //     item.normalProducts.showOrder++;
      //     if (item.normalProducts.showOrder > item.normalProducts.stock) {
      //       item.normalProducts.showOrder = item.normalProducts.stock;
      //       alert("超出库存数");
      //     }
      //   }
      // });
    },

    jiesuan() {
      alert("购买成功");
    }
  },
  computed: {
   
    cartLength() {
      return this.$store.getters.cartLength;
    },
    cartList() {
      // console.log(this.$store.state.cart.cartList);
      return this.$store.state.cart.cartList;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  created() {
    if (this.$store.getters.cartLength) {
      this.titleShow = false;
    }
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
}
body {
}
div,
p,
ul,
li {
  box-sizing: border-box;
}

i {
  font-style: normal;
}
.flex {
  display: flex;
}
.rela {
  position: relative;
}
.abs {
  position: absolute;
}
#cart_box {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  padding-bottom: 1.25rem;
  padding-top: 5.625rem;
  .vux-popup-dialog {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #eee;
    transition: transform 300ms;
    max-height: 100%;
    overflow-y: auto;
    .address-chose {
      .mf-header {
        position: relative;
        height: 2.75rem;
        .mf-header-wrap {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 2.75rem;
          background: #fff;
          box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
          background-image: linear-gradient(
            0deg,
            #ddd,
            #ddd 50%,
            transparent 50%
          );
          background-position: bottom;
          background-size: 100% 0.0625rem;
          background-repeat: no-repeat;
          z-index: 99;
          .mf-header-back {
            position: absolute;
            left: 0.3125rem;
            top: 0;
            width: 2.75rem;
            height: 2.75rem;
          }
          .mf-header-back::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 1.25rem;
            display: block;
            width: 0.75rem;
            height: 0.75rem;
            border-style: solid;
            border-color: #4b4b4b;
            border-width: 0.0625rem 0 0 0.0625rem;
            transform-origin: center center;
            transform: rotate(-45deg) translate(0, -50%);
          }
          .mf-header-back::after {
            content: "";
            position: absolute;
            top: 1.4375rem;
            left: 0.875rem;
            display: block;
            width: 0.875rem;
            height: 0.0625rem;
            background: #4b4b4b;
          }
          .mf-header-title {
            line-height: 2.75rem;
            font-size: 1.0625rem;
            color: #4b4b4b;
            font-weight: 500;
            text-align: center;
          }
          .mf-header-right {
            position: absolute;
            top: 0;
            right: 0;
            height: 2.75rem;
            padding: 0 0.625rem;
            font-size: 1.0625rem;
            color: #4c4440;
            line-height: 2.75rem;
            font-weight: 300;
          }
        }
      }
      .address-bar {
        background: #fff;
        padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
        height: auto;
        .address-input {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          overflow: hidden;
          white-space: nowrap;
          background: #f5f5f5;
          border-radius: 0.25rem;
          height: 2.1875rem;
          line-height: 2.1875rem;
        }
        .address-city {
          width: auto;
          padding: 0 0.5625rem;
          position: relative;
        }
        .address-city::after {
          content: "";
          height: 0.625rem;
          width: 0.625rem;
          background: url(../assets/img3/select-location.png);
          background-size: 100% 100%;
          position: absolute;
          top: 0.75rem;
          margin-left: 0.25rem;
        }
        .address-position {
          position: relative;
          margin-left: 2.1875rem;
        }
        .address-position::before {
          content: "";
          width: 0.875rem;
          height: 0.875rem;
          background: url(../assets/img3/location-search.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 0.625rem;
          margin-left: -1.125rem;
        }
      }
      .trans-tip {
        font-size: 0.75rem;
        color: #f4a22d;
        padding-left: 0.9375rem;
        height: 2.25rem;
        line-height: 2.25rem;
      }
      .location-bar {
        background: #fff;
        line-height: 2.5rem;
        height: 2.5rem;
        padding-left: 0.9375rem;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        .location-success {
          margin-left: 1.6875rem;
        }
        .location-info {
          color: #969696;
          font-size: 0.875rem;
        }
        .location-refresh {
          position: absolute;
          width: 3.4375rem;
          height: 2.5rem;
          right: 0;
        }
        .location-refresh::after {
          content: "";
          width: 1.375rem;
          height: 1.375rem;
          background: url(../assets/img3/location-refresh.png) no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: 0.5625rem;
          right: 0.9375rem;
        }
      }
      .location-bar::before {
        content: "";
        height: 1.375rem;
        width: 1.375rem;
        background: url(../assets/img3/location-icon.png);
        background-size: 100% 100%;
        position: absolute;
        top: 0.625rem;
      }
    }
  }
  .C-empty {
    background: url(../assets/img3/icon_buycar_empty_icon.png) no-repeat center
      #f5f5f5;
    background-size: 5.625rem 5.625rem;
    // padding-top: 10.125rem;
    background-position-y: 11.375rem;
    .cart-top {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4.875rem;
      background: #fff;
      z-index: 99;
      .C-block-wrap {
        background: #fff;
      }
      .C-locat-wrap {
        margin-top: 0;
        position: relative;
        display: flex;
        justify-content: center;
        box-align: center;
        align-items: center;
        box-pack: center;
        .C-locat-icon {
          width: 0.75rem;
          height: 0.875rem;
          background: url(../assets/img3/img_positionLogo.png) no-repeat center;
          background-size: 0.75rem 0.875rem;
        }
        .C-locat-city {
          position: relative;
          padding: 0 0.375rem;
          font-size: 1rem;
          line-height: 2.75rem;
        }
        .location-arrow {
          background: url(../assets/img3/img_jiantou.png) no-repeat center
            center;
          background-size: 0.75rem 0.4375rem;
          width: 0.75rem;
          height: 0.4375rem;
        }
      }
    }
    .C-empty-text {
      padding: 8rem 0 4.375rem;
      text-align: center;
      font-size: 0.9375rem;
      color: #7f7f7f;
      line-height: 1.25rem;
    }
    .C-block-wrap {
      background: #fff;
      margin-top: 0.625rem;
      .C-group-header-wrap {
        margin: 0;
        .C-group-header {
          padding: 0 0.9375rem;
          height: 2.75rem;
          border-bottom: 0.0625rem solid #f5f5f5;
          align-items: center;
          box-align: center;
          display: flex;
          .C-checkbox {
            width: 1.2rem;
            height: 1.2rem;
          }

          .C-group-title {
            flex: 1;
            font-size: 0.875rem;
            color: #262626;
            box-flex: 1;
          }
          .C-group-header-right {
            max-width: 60%;
            word-break: break-all;
            font-size: 0.8125rem;
            color: #ff4891;
            line-height: 1rem;
            text-align: right;
          }
        }
      }
      .C-group-content {
        .C-group-header {
          margin: 0;
        }
        .C-group-item-list {
          .P-item-wrap {
            box-sizing: content-box;
            position: relative;
            .P-item-content {
              position: relative;
              box-align: center;
              align-items: center;
              padding: 1.25rem 0;
              z-index: 1;
              background: #fff;
              .C-checkbox {
                width: 1.2rem;
                height: 1.2rem;
                margin: 0 0.1875rem;
              }

              .P-item-image {
                width: 4.375rem;
                height: 4.375rem;
                position: relative;
                .P-item-img {
                  width: 100%;
                  height: 100%;
                }
              }
              .P-item-info {
                position: relative;
                box-flex: 1;
                flex: 1;
                padding-left: 0.8125rem;
                overflow: hidden;
                align-self: flex-start;
                .P-item-info-line {
                  padding-bottom: 0.25rem;
                }
                .P-item-name {
                  margin-right: 1.875rem;
                  font-size: 0.875rem;
                  color: #474245;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  padding-bottom: 0;
                }
                .P-item-tags {
                  min-height: 1.25rem;
                  padding-bottom: 0.8125rem;
                  .P-item-tag.place-tag {
                    border-color: #d165e1;
                    color: #d165e1;
                    background: #fff;
                    display: inline-block;
                    padding: 0 0.0625rem;
                    margin-right: 0.375rem;
                    border-radius: 0.125rem;
                    border-width: 0.0625rem;
                    border-style: solid;
                    font-size: 0.625rem;
                    line-height: 0.8125rem;
                  }
                  .P-item-tag:last-child(1) {
                    margin-right: 0;
                  }
                }
                .P-item-price {
                  box-align: end;
                  align-items: center;
                  font-size: 1rem;
                  line-height: 1.25rem;
                  .P-item-price-unit {
                    font-size: 0.9375rem;
                    line-height: 0.875rem;
                  }
                  .P-item-price-price {
                    padding-right: 0.1875rem;
                    font-size: 1rem;
                    line-height: 1.0625rem;
                    font-weight: 500;
                  }
                  .P-item-price-origin {
                    font-size: 0.75rem;
                    line-height: 0.875rem;
                    text-decoration: line-through;
                  }
                }
                .P-item-controller {
                  position: absolute;
                  right: 0.625rem;
                  bottom: 0;
                  box-align: center;
                  align-items: center;
                  background: #fff;
                  .P-item-controller-btn {
                    display: block;
                    width: 1.25rem;
                    height: 1.25rem;
                    border: 0.0625rem solid #e6e6e6;
                    border-radius: 100%;
                    color: #4d4d4d;
                    font-size: 1rem;
                    line-height: 1.025rem;
                    text-align: center;
                  }
                  .P-item-controller-num {
                    flex: 1;
                    width: 1.5625rem;
                    text-align: center;
                    color: #4b4b4b;
                    font-size: 0.875rem;
                    line-height: 1rem;
                    word-break: break-all;
                  }
                }
              }
            }
          }
          .P-item-wrap:last-child(1) {
            border-bottom: 0;
          }
        }
      }
      .P-item-delete {
        position: absolute;
        right: 10px;
        top: 15%;
        height: 30%;
        width: 3.5rem;
        box-pack: center;
        justify-content: center;
        box-align: center;
        align-items: center;
        background: #ff4891;
        color: #fff;
        font-size: 1rem;
        z-index: 1;
      }
    }
    .open-vip-wrap {
      width: 100%;
      margin-top: 0.625rem;
      padding: 0 0.625rem;
      .open-vip-box {
        width: 100%;
        padding: 0 0.5rem;
        background-color: #fff;
        border-radius: 0.625rem;
        display: flex;
        .open-vip-box-top {
          height: 2.5rem;
          line-height: 2.5rem;
          font-size: 0.75rem;
          color: #474245;
          .open-vip-icon {
            width: 3.125rem;
            height: 0.875rem;
            vertical-align: middle;
          }
        }
        .open-vip-box-bot-r {
          line-height: 2.8125rem;
          box-flex: 1;
          flex: 1;
          text-align: right;
          padding-right: 1.875rem;
          position: relative;
          .open-text {
            color: #474245;
          }
          .select-box {
            position: absolute;
            width: 1.875rem;
            height: 100%;
            top: 0;
            right: 0;
            img {
              width: 1.125rem;
              height: 1.125rem;
              position: absolute;
              top: 50%;
              right: 0;
              margin-top: -0.5625rem;
            }
          }
        }
      }
    }
    .price-list-panel {
      font-size: 0.875rem;
      margin-top: 0.625rem;
      width: 100%;
      padding: 0 0.625rem;
      .price-list-ul {
        background-color: #fff;
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;
        padding: 0 0.5rem;
        li {
          min-height: 2.25rem;
          line-height: 2.25rem;
          font-size: 0.875rem;
          border-bottom: 0.0625rem solid #f5f5f5;
          .li-left {
            left: 0.625rem;
          }
          .li-right {
            padding-right: 0.9375rem;
            text-align: right;
          }
        }
        .item-content-totalPrice {
          height: 3.4375rem;
          line-height: 3.4375rem;
          .li-right {
            padding-top: 0.9375rem;
          }
        }
      }
      .total-price {
        width: 100%;
        font-size: 1.125rem;
        text-align: right;
        color: #262626;
        line-height: 3.4375rem;
        padding-right: 0.9375rem;
        background-color: #fff;
        border-bottom-left-radius: 0.625rem;
        border-bottom-right-radius: 0.625rem;
        span {
          color: #ff4891;
        }
      }
    }

    .C-recommend-wrap {
      margin: 1.625rem 0;
      .C-recommend-title {
        padding: 0 0.9375rem;
        font-size: 1.25rem;
        color: #474245;
        line-height: 1.75rem;
      }
      .C-recommend-items {
        display: flex;
        margin: 0.625rem;
        flex-wrap: wrap;
        box-pack: justify;
        justify-content: space-between;
        .two-columns-item {
          position: relative;
          background: #fff;
          border-radius: 0.5rem;
          width: 49.3%;
          padding-bottom: 0.9375rem;
          margin-bottom: 0.3125rem;
          flex-direction: column;
          .product-img-wrap {
            padding: 0.625rem 0.9375rem 0.4375rem 0.9375rem;
            font-size: 0;
            line-height: 0;
            position: relative;
            .product-img {
              width: 100%;
              min-height: 8.4375rem;
            }
            .product-promote-tag {
              position: absolute;
              bottom: 0.4375rem;
              left: 50%;
              transform: translate(-50%, 0);
              padding: 0 0.375rem;
              border-radius: 0.1875rem;
              height: 1.125rem;
              line-height: 1.125rem;
              font-size: 0.75rem;
            }
          }
        }
        .product-title {
          margin: 0 0.625rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.875rem;
          color: #474245;
          line-height: 1.25rem;
        }
        .product-subtitle {
          margin: 0.0625rem 0.625rem 0;
          font-size: 0.75rem;
          color: #969696;
          line-height: 1.0625rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .product-bottom {
          margin: 0.4375rem 0.625rem 0;
          min-height: 2.75rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          flex: 1;
          .product-prices {
            display: flex;
            align-items: center;
            box-align: center;
            .sub-price {
              font-size: 0.75rem;
              line-height: 1.0625rem;
            }
            .main-price {
              font-size: 0.9375rem;
              line-height: 1rem;
              font-weight: 500;
              margin-top: 0.0625rem;
            }
          }
        }
        .product-ctrl {
          position: absolute;
          right: 0.625rem;
          bottom: 0.9375rem;
          line-height: 0;
          font-size: 0;
          background: #fff;
          z-index: 2;
          .product-ctrl-bg {
            width: 3rem;
            height: 1.375rem;
            position: absolute;
            bottom: 0;
            left: -1.625rem;
          }
          .product-addcart-img {
            position: relative;
            width: 1.875rem;
            height: 1.875rem;
            z-index: 2;
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
    }
    .C-footer-wrap {
      position: relative;
      height: 3.0625rem;
      width: 100%;
      .C-footer-content {
        box-align: center;
        align-items: center;
        position: fixed;
        left: 0;
        width: 100%;
        height: 3rem;
        border-top: 0.0625rem solid #e6e6e6;

        box-sizing: border-box;
        padding-left: 0.9375rem;
        background: #fff;
        z-index: 99;
        .C-checkbox {
          width: 1.2rem;
          height: 1.2rem;
        }

        .C-footer-label {
          margin-right: 0.625rem;
          font-size: 0.875rem;
          color: #262626;
        }
        .C-footer-price {
          flex: 1;
          .C-footer-total {
            font-size: 0.875rem;
            line-height: 1rem;
            color: #262626;
          }
          .C-footer-info {
            font-size: 0.75rem;
            line-height: 0.75rem;
            transform-origin: top left;
          }
        }
        .C-footer-btn {
          width: 8.125rem;
          height: 3rem;
          box-align: center;
          align-items: center;
          box-pack: center;
          justify-content: center;
          color: #fff;
          font-size: 1.125rem;
          background-color: #ff4891;
        }
        .C-footer-btn::after {
          content: " ";
          display: inline-block;
          margin-left: 0.1875rem;
          border-color: transparent transparent transparent #fff;
          border-width: 0.25rem 0 0.25rem 0.4375rem;
          border-style: solid;
          width: 0;
          height: 0;
        }
      }
    }
  }
}
</style>