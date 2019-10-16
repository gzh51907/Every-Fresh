<template>
  <div>
    <img
      @click="back"
      src="//static-as.missfresh.cn/frontend/item/static/img/search-goods-back.a157fb3.png"
      class="back-image"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch(value)"
      @input="close"
    >
      <div @click="clear" slot="right-icon" ref="close" style="padding: 0 10px;display:none">
        <van-icon name="close" />
      </div>
      <div slot="action" @click="onSearch(value)">搜索</div>
    </van-search>
    <div v-if="!typedate.length">
      <div class="keyword-panel">
        <div class="title-container">
          <div class="title">热门搜索</div>
          <!---->
        </div>
        <div class="content">
          <div class="item-box">
            <span v-for="item1 in remen" @click="onSearch(item1)">{{item1}}</span>
          </div>
        </div>
      </div>
      <div class="keyword-panel">
        <div class="title-container">
          <div class="title">历史记录</div>
          <div class="clear-history">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAFoTx1HAAAAAXNSR0IArs4c6QAAAKBJREFUKBWVUkEOhCAMZI239W58hdlv8SC4c+Q1PINfYGsyZBaNIAc7bWemWDWGj3OucP6ElTvAZ8osfokLp38I4YtBf01OGE9gU8yEO5CtYoxLh960WQ18d6Eq4+bllroRAxtEKSWtf/SB471PpZQdeROTtfaH2ikUQRbBimInZjHYKkfFSEZwfUmeOIKrENNeR90a/0KtgX5i2mzbHs8P6yZbziMqfrAAAAAASUVORK5CYII="
              alt
              class="clear-history-img"
            />
            <span class="clear-history-text" @click="del">清空历史记录</span>
          </div>
        </div>
        <div class="content">
          <div class="item-box">
            <span v-for="item2 in hissearch">{{item2}}</span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="product-list-item-wrap"
      v-else
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
                    <span class="price">{{(item.vip_price_pro.price_down.price/100).toFixed(1)}}</span>
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
                    <!---->
                  </div>
                </div>
              </div>
              <!---->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!--  -->

    <div class="cart-count">
      <!---->
    </div>
  </div>
</template>
<script>
import { Search, Icon } from "vant";
import homeList from "../assets/homedatajs/homelist.js";
import homeData from "../assets/homedatajs/homedata.js";
import yxcc from "../assets/homedatajs/yxcc.js";
import dzx from "../assets/homedatajs/dzx.js";
import slcx from "../assets/homedatajs/slcx.js";
import hytj from "../assets/homedatajs/hytj.js";
import sg from "../assets/homedatajs/sg.js";
import rd from "../assets/homedatajs/rd.js";
import sc from "../assets/homedatajs/sc.js";
import slsg from "../assets/homedatajs/slsg.js";
import rp from "../assets/homedatajs/rp.js";
import shuichan from "../assets/homedatajs/shuichan.js";
import ls from "../assets/homedatajs/ls.js";
import js from "../assets/homedatajs/js.js";
import ly from "../assets/homedatajs/ly.js";
import rb from "../assets/homedatajs/rb.js";
import ss from "../assets/homedatajs/ss.js";
import shushi from "../assets/homedatajs/shushi.js";
import xxsc from "../assets/homedatajs/xxsc.js";
import rqdl from "../assets/homedatajs/rqdl.js";
import lwss from "../assets/homedatajs/lwss.js";
import hxsc from "../assets/homedatajs/hxsc.js";
import rpxg from "../assets/homedatajs/rpxg.js";
import xxls from "../assets/homedatajs/xxls.js";
import jggd from "../assets/homedatajs/jggd.js";
import jsyl from "../assets/homedatajs/jsyl.js";
import lytw from "../assets/homedatajs/lytw.js";
import ssmd from "../assets/homedatajs/ssmd.js";
export default {
  components: {
    [Search.name]: Search,
    [Icon.name]: Icon
  },
  methods: {
    onSearch(value) {
      if (value == null) {
        return;
      }
      var temp,
        tempStr = "";
      try {
        if (localStorage.getItem("hisname") == null) {
          throw new Error("空或undefined");
        }
        temp = JSON.parse(localStorage.getItem("hisname"));
      } catch (err) {
        // 当localStorage中没有对应key，或key对应内容为空、undefined，或parse出错时
        temp = [];
      }
      temp = temp.map(item => {
        return JSON.stringify(item);
      });
      // 去重
      if (temp.indexOf(JSON.stringify(value)) === -1)
        temp.push(JSON.stringify(value));
      temp.forEach((item, index, arr) => {
        arr.length === index + 1
          ? (tempStr += `${item}`)
          : (tempStr += `${item},`);
      });

      localStorage.setItem("hisname", `[${tempStr}]`);
      //历史搜索

      let rule;
      this.listdate.forEach((item, index) => {
        rule = new RegExp(value, "g");
        if (rule.test(item.name)) {
          if (index == 1) {
            this.typedate = yxcc.yxcc.products;
          } else if (index == 2) {
            this.typedate = slcx.date.products;
          } else if (index == 3) {
            this.typedate = dzx.date.products;
          } else if (index == 4) {
            this.typedate = hytj.date.products;
          } else if (index == 5) {
            this.typedate = slcx.date.products;
          } else if (index == 6) {
            this.typedate = sg.date.products;
          } else if (index == 7) {
            this.typedate = rd.date.products;
          } else if (index == 8) {
            this.typedate = sc.date.products;
          } else if (index == 9) {
            this.typedate = slsg.date.products;
          } else if (index == 10) {
            this.typedate = rp.date.products;
          } else if (index == 11) {
            this.typedate = shuichan.date.products;
          } else if (index == 12) {
            this.typedate = ls.date.products;
          } else if (index == 13) {
            this.typedate = js.date.products;
          } else if (index == 14) {
            this.typedate = ly.date.products;
          } else if (index == 15) {
            this.typedate = rb.date.products;
          } else if (index == 16) {
            this.typedate = ss.date.products;
          } else if (index == 17) {
            this.typedate = shushi.date.products;
          } else if (index == 18) {
            this.typedate = xxsc.date.products;
          } else if (index == 19) {
            this.typedate = rqdl.date.products;
          } else if (index == 20) {
            this.typedate = lwss.date.products;
          } else if (index == 21) {
            this.typedate = hxsc.date.products;
          } else if (index == 22) {
            this.typedate = rpxg.date.products;
          } else if (index == 23) {
            this.typedate = xxls.products;
          } else if (index == 24) {
            this.typedate = jggd.date.products;
          } else if (index == 25) {
            this.typedate = jsyl.date.products;
          } else if (index == 26) {
            this.typedate = lytw.date.products;
          } else if (index == 27) {
            this.typedate = ssmd.date.products;
          }
        }
      });
    },
    close() {
      this.$refs.style = "display:block";
    },
    clear() {
      this.value = "";
    },
    back() {
      let path = this.$route.query.from;
      path = path.substr(1);
      this.$router.push({ name: path });
      // this.$router.go(-1)
    },
    del() {
      localStorage.removeItem("hisname");
    }
  },
  data() {
    return {
      value: "",
      listdate: [],
      typedate: [],
      remen: ["大闸蟹", "水果", "肉蛋", "蔬菜", "零食", "酒水"],
      hissearch: []
    };
  },
  created() {
    // homeList.category_list.splice(0, 1);
    this.listdate = homeList.category_list;
    console.log(this.$route.query.from);
    if (localStorage.getItem("hisname")) {
      let str = localStorage.getItem("hisname");
      str = str.slice(2, -2);
      let arr = str.split('\",\"');
      this.hissearch = arr;
    }
  }
};
</script>
<style lang="scss" scoped>
.back-image {
  width: 1.125rem;
  height: 1.125rem;
  float: left;
  margin-top: 1.1rem;
  margin-left: 0.625rem;
}
.van-search__content {
  width: 17.75rem;
}
.van-search:after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #d7d6dc;
  border-bottom: 1px solid #d7d6dc;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
  top: 50px;
}
.keyword-panel {
  .title-container {
    height: 3.125rem;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 1.5625rem;
    .title {
      float: left;
      padding-left: 0.9375rem;
      line-height: 1.375rem;
      font-size: 0.875rem;
      color: #474245;
      font-weight: bold;
    }
  }
  .content {
    background: white;
    padding: 0.8125rem 0.625rem 0.3125rem 0.3125rem;
    .item-box {
      border-bottom: 0.0625rem solid #e6e6e6;
      padding-bottom: 1.25rem;
      span {
        margin-left: 0.625rem;
        margin-bottom: 0.625rem;
        display: inline-block;
        color: #262626;
        line-height: 1.875rem;
        padding-left: 0.625rem;
        padding-right: 0.625rem;
        background: #f6f5f5;
        border-radius: 0.25rem;
      }
    }
  }
  .title-container {
    height: 3.125rem;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 1.5625rem;
    .title {
      float: left;
      padding-left: 0.9375rem;
      line-height: 1.375rem;
      font-size: 0.875rem;
      color: #474245;
      font-weight: bold;
      margin-bottom: 0;
      margin-left: 0;
    }
    .clear-history {
      float: right;
      margin-right: 0.9375rem;
      .clear-history-img {
        vertical-align: middle;
        width: 0.875rem;
        height: 0.875rem;
      }
      .clear-history-text {
        color: #969696;
        font-size: 0.75rem;
      }
    }
  }
  .content {
    background: white;
    padding: 0.8125rem 0.625rem 0.3125rem 0.3125rem;
    .item-box {
      border-bottom: 0.0625rem solid #e6e6e6;
      padding-bottom: 1.25rem;
      span {
        margin-left: 0.625rem;
        margin-bottom: 0.625rem;
        display: inline-block;
        color: #262626;
        line-height: 1.875rem;
        padding-left: 0.625rem;
        padding-right: 0.625rem;
        background: #f6f5f5;
        border-radius: 0.25rem;
      }
    }
  }
}

.cart-count {
  position: fixed;
  bottom: 1.25rem;
  left: 0.9375rem;
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 50%;
  background: url(//static-as.missfresh.cn/frontend/item/static/img/cart-count.16c60d1.png)
    no-repeat center;
  background-size: 100%;
}
.product-container
  .product-list-divider-wrap
  + .product-list-item-wrap
  .product-item-container {
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
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