<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:57:35
 * @LastEditTime: 2019-10-16 16:59:29
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="header" v-show="!(path ==='/login' || path ==='/mine' || path ==='/privacy' || path ==='/agreement' || path === '/aboutus' || path ==='/help' || path ==='/address' || path ==='/mineaddress' || path ==='/reg' || path ==='/detail' || path === '/search') ">
      <div id="home-head" class="mall-home-head">
        <div class="adv-bar-blank-filler" style="height: 2.375rem;"></div>
        <div class="vux-flexbox locate-bar vux-flex-row" style="top: 0px; z-index: 999;">
          <div
            class="vux-flexbox-item text-center location-wrap"
            style="margin-left: 8px; flex: 0 0 50%; text-align: left; padding-left: 1rem; float:left;margin-top:10px;"
          >
            <div class="chrome-icon">
              <img src="./assets/public img/img_20161108170831264.png" alt class="icon-img" style />
              <div class="chrome-tips">
                <div class="chrome-tips-text" style="display: none;"></div>
              </div>
            </div>
            <div class="location-nav">
              <span class="building-name">广州市天河区文化局</span>
            </div>
          </div>
          <div
            class="vux-flexbox-item text-right"
            style="margin-left: 8px; float:right;margin-top:8px"
            @click="goSearch(path)"
          >
            <div>
              <div class="search-nav">
                <div class="search-nav-box">
                  <img src="./assets/public img/download.png" class="search-nav-img" />
                  <div class="search-nav-text">鸡胸肉8.9元360g</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <router-view />
    <div style="width:100%;height:45px" v-show="!(path ==='/detail' || path === '/search') "></div>
    <div class="footer" v-show="!(path ==='/login' || path ==='/privacy' || path ==='/agreement' || path ==='/aboutus' || path ==='/help' || path ==='/address' || path ==='/mineaddress' || path ==='/reg' || path ==='/detail' || path === '/search') ">
      <div class="weui-tabbar mall-nav">
        <!-- <router-link to="/home"> -->
          <a href="javascript:;" class="weui-tabbar__item">
            <router-link to="/home">
            <i class="el-icon-s-home weui-tabbar__icon weui-tabbar__icon_active"></i>
            <p class="weui-tabbar__label weui-tabbar__icon_active">首页</p>
            </router-link>
          </a>
        <!-- </router-link> -->
        <!-- <router-link to="/classify"> -->
          <a href="javascript:;" class="weui-tabbar__item">
            <router-link to="/classify">
            <i class="el-icon-menu weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">分类</p>
            </router-link>
          </a>
        <!-- </router-link> -->
        <!-- <router-link to="/discover"> -->
          <a href="javascript:;" class="weui-tabbar__item tab-groupBuying">
            <router-link to="/discover">
            <i class="el-icon-discover weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">发现</p>
            <span class="red-dot"></span>
            </router-link>
          </a>
        <!-- </router-link> -->
        <!-- <router-link to="/cart"> -->
        <el-badge :value="cartLenght" class="item">
          <a href="javascript:;" class="weui-tabbar__item tab-shopcar">
            <router-link to="/cart">
            <i class="el-icon-shopping-cart-2 weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">购物车</p>
            </router-link>
          </a>
        </el-badge>
        <!-- </router-link> -->
        <!-- <router-link to="/mine"> -->
          <a href="javascript:;" class="weui-tabbar__item tab-mine">
            <router-link to="/mine">
            <i class="el-icon-user weui-tabbar__icon"></i>
            <p class="weui-tabbar__label">我的</p>
            </router-link>
          </a>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      path:''
    }
  },
  computed:{
    cartLenght(){
      return this.$store.getters.cartLength;
    }
  },
  //       // 判断路由
        mounted() {
          this.path = this.$route.path;
          console.log(this.$route.path)
        },
        watch:{
            $route(to,from){
                this.path = to.path
            }
        },
        methods:{
          goSearch(from){
            this.$router.push({name:'search',query:{from}})
          }
        }
}
</script>

<style lang="scss" scoped>
a{
  color:#999;
}
.mall-home-head {
  line-height: 2.375rem;
  font-size: 0.875rem;
  background-color: white;
  width: 100%;
  .adv-bar-blank-filler {
    transition: all 300ms;
    background-color: #f5f5f5;
  }
  .locate-bar {
    transition: all 300ms;
    position: fixed;
    width: 100%;
    height: 2.5rem;
    z-index: 99;
    background: #fff;
  }
  .location-wrap {
    position: relative;
    white-space: nowrap;
    line-height: 100%;
  }
  .chrome-icon {
    display: inline-block;
    margin: 0 0.125rem;
    .icon-img {
      height: 1em;
      vertical-align: middle;
    }
    .chrome-tips {
      position: absolute;
      top: 1em;
      left: 0;
      z-index: 3;
      width: 100%;
      .chrome-tips-text {
        white-space: normal;
        font-size: 0.625rem;
        background: url("./assets/public img/bg1.png") no-repeat;
        background-size: 100% 100%;
        line-height: 1em;
        padding: 0.9375rem 0.625rem 0.625rem;
        color: #262626;
      }
    }
  }
  .location-nav {
    display: inline-block;
    margin: 0 0.125rem;
    .building-name {
      max-width: 4.875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: middle;
      font-size: 1rem;
    }
  }
  .search-nav {
    margin-right: 0.625rem;
  }
}
.mall-home .text-right {
  text-align: right;
}
.location-nav {
  position: relative;
  text-align: center;
  white-space: nowrap;
  line-height: 1rem;
  .building-name {
    max-width: 4.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
  }
}
.search-nav-box {
  height: 1.25rem;
  line-height: 1.25rem;
}
.search-nav-img {
  display: inline-block;
  vertical-align: middle;
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 0.5625rem;
}
.search-nav-text {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.875rem;
  color: #c6c6c6;
  margin-left: 0.3125rem;
}
.location-nav .building-name:after {
  position: absolute;
  right: -0.75rem;
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-left: 0.2em;
  background: url("./assets/public img/downarrow.png") no-repeat center;
  background-size: 0.6rem;
  vertical-align: middle;
  font-size: 1rem;
}
.mall-home .mall-home-head .location-nav:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.search-nav {
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  box-align: center;
  -moz-box-align: center;
  -webkit-box-align: center;
  height: 1.875rem;
  background: #f5f5f5;
  border-radius: 4rem;
  text-align: left;
  line-height: 1.875rem;
  font-size: 0;
}
.mall-home .mall-nav {
  position: relative !important;
}
.weui-tabbar {
  background-color: rgba(247, 247, 250, 0.95);
}
.mall-nav {
  position: fixed !important;
  line-height: 1;
}
.weui-tabbar {
  display: flex;
  position: absolute;
  z-index: 999;
  bottom: 0;
  width: 100%;
  background-color: #f7f7fa;
}
.weui-tabbar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #c0bfc4;
  color: #c0bfc4;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-tabbar__item {
  display: block;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 5px 0 0;
  font-size: 0;
  color: #999;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-tabbar__icon {
  width: 1.4375rem;
  height: 1.4375rem;
  display: inline-block;
  font-size: 1.4375rem;
}
.weui-tabbar__label {
  text-align: center;
  color: #262626;
  font-size: 10px;
  line-height: 1.8;
}
.weui-tabbar__icon_active {
  color: #ff4891;
}
</style>
