<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-14 09:22:33
 * @LastEditTime: 2019-10-17 20:29:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="article_box">
    <div class="article">
      <div class="article-cover">
        <div class="article-header-image-wrap">
          <img :src="articleData.titlePic" alt class="article-header-image" />
          <div class="pswp vux-previewer" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="psw__bg"></div>
            <div class="pswp_scroll-wrap">
              <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="article-header-wrap">
          <div class="article-header">
            <h2 class="article-title">{{articleData.title}}</h2>
            <p class="article-desc"></p>
            <div class="user-info">
              <div class="user-info-left">
                <img
                  class="user-info_thumbnail"
                  src="https://j-image.missfresh.cn/img_20180705193539136.jpg"
                  alt
                />
                <span class="user-info__name overflow-ellipsis">{{articleData.nickname}}</span>
              </div>
              <div class="user-info__btn-follow">
                <span>
                  <i class="my-icon-plus"></i>
                  关注
                </span>
              </div>
            </div>
            <p class="line-1px"></p>
          </div>
          <div></div>
          <div class="article-body-wrap">
            <div class="article-body" v-html="articleData.content"></div>
            <p class="line-1px"></p>
          </div>
          <div class="article-footer-wrap">
            <div class="control-item article__collection">
              <van-icon name="like-o" />
              {{articleData.fontCollectNo}}
            </div>
            <div class="control-item article__btn-share">
              <van-icon name="share" />
              {{articleData.shareNo}}
            </div>
          </div>
          <div class="article-comment-wrap">
            <div class="article-comment-container comment-list-empty">
              <h3 class="comment-title">精选留言</h3>
              <ul class="comment-list-wrap no-comment-bg">
                <p class="line-1px"></p>
              </ul>
              <div class="comment-action-wrap action-btn-center">
                <span class="comment-on">我要留言</span>
              </div>
            </div>
          </div>
          <div class="article-footer-btns">
            <div class="article-footer-btn">
              <span class="article-comment-entry">朕有话讲...</span>
            </div>
            <div class="article-footer-btns-right">
              <div class="article-footer-btn">
                <van-icon name="like-o" />收藏
              </div>
              <div class="article-footer-btn">
                <van-icon name="share" />分享
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="recommend-list"
      infinite-scroll-disabled="infiniteSrollDisabled"
      infinite-scroll-distance="50"
      infinite-scroll-immediate-check="false"
    >
      <div class="recommend-list__hd">
        <p class="list-title">热门推荐</p>
        <p class="list-desc list-desc-before">看得不过瘾？Pick更多好滋味</p>
      </div>
      <p class="line-1px"></p>
      <div class="recommend-article asc-wrap" @click="toArticle(item.articleId)" v-for="item in recommendList" :key="item.articleId">
        <div class="article-image">
          <div
            class="article-img image-loaded"
           :style="{ backgroundImage:`url(${item.titlePic})` }"
          ></div>
        </div>
        <div class="article-info">
          <div class="follow-user-item">
            <img
              :src="item.authorPhoto"
              alt
              class="user__thumbnail"
            />
            <span class="user__name overflow-ellipsis">{{item.nickname}}</span>
          </div>
          <p class="article-title">{{item.title}}</p>
          <div class="article-tool">
            <div class="tool-left">
              <span class="article-tool-view overflow-ellipsis">浏览 {{item.fontReadNo}}</span>
            </div>
            <div class="tool-right">
              <span class="article-tool-share">
                <van-icon name="share" style="font-weight:600;font-size:17px;"/>
              </span>
            </div>
            
          </div>
        </div>
    
      </div>
    </div>
    <div class="article-footer-btns-placeholder"></div>
  </div>
</template>
<script>
import axios from "axios";
// import {Icon} from 'vant';
// import Vue from 'vue';
// Vue.use(Icon);
export default {
  data() {
    return {
      articleData: "",
      recommendList: ""
    };
  },
  methods:{
    toArticle(id){
      console.log(id)
       this.$router.replace({
          name:'article',
           path:'/discover/article',
           query:{id}
        })
    }
  },
  watch:{
    '$route' (to,from){
        let {id} = this.$route.query;
      
    // console.log(id);
    let api = "https://as-vip.missfresh.cn/as/disc/article/detail?";
   axios.get(api, {
      params: {
        device_id: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        env: "web",
        platform: "web",
        uuid: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        version: "8.2.0",
        screen_height: 375,
        screen_width: 667,
        articleId: id
      }
    }).then(res=>{
      this.articleData = res.data.data;
    });
    
    // let api2 = "https://as-vip.missfresh.cn/as/disc/article/recommendList?";
    // let recommend = await axios.get(api2, {
    //   params: {
    //     device_id: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
    //     env: "web",
    //     platform: "web",
    //     uuid: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
    //     version: "8.2.0",
    //     screen_height: 556,
    //     screen_width: 640,
    //     pageNo: 1,
    //     pageSize: 6
    //   }
    // });
    // this.recommendList = recommend.data.data;
    // console.log(recommend);
    }
  },

  async created() {
    let {id} = this.$route.query;
    // console.log(id);
    let api = "https://as-vip.missfresh.cn/as/disc/article/detail?";
    let { data } = await axios.get(api, {
      params: {
        device_id: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        env: "web",
        platform: "web",
        uuid: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        version: "8.2.0",
        screen_height: 375,
        screen_width: 667,
        articleId: id
      }
    });
    this.articleData = data.data;
    let api2 = "https://as-vip.missfresh.cn/as/disc/article/recommendList?";
    let recommend = await axios.get(api2, {
      params: {
        device_id: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        env: "web",
        platform: "web",
        uuid: "c7da86b0-eb27-11e9-95ff-f76cbd7a063a",
        version: "8.2.0",
        screen_height: 556,
        screen_width: 640,
        pageNo: 1,
        pageSize: 6
      }
    });
    this.recommendList = recommend.data.data;
    // console.log(recommend);
  }
};
</script>
<style scoped lang='scss'>
.overflow-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
i {
  font-style: normal;
}
p {
  margin: 0;
  padding: 0;
}

.line-1px {
  display: block;
  width: 200%;
  height: 1px;
  transform: scale(0.5);
  transform-origin: left;
  background: #f5f5f5;
}
.article_box {
  .article {
    .article-cover {
      .article-header-image-wrap {
        img {
          display: block;
          width: 100%;
        }
        .pswp {
          display: none;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          overflow: hidden;
          touch-action: none;
          z-index: 1500;
          outline: none;
          .psw__bg {
            will-change: opacity;
            transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0;
            transform: translateZ(0);
          }
          .pswp__scroll-wrap {
            overflow: hidden;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            .pswp__container {
              touch-action: none;
              position: absolute;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              user-select: none;
              .pswp__item {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
              }
            }
          }
        }
        .pswp * {
          box-sizing: border-box;
        }
      }
      .article-header-wrap {
        .article-header {
          box-sizing: border-box;
          padding: 27px 22px 23px;
          .article-title {
            margin: 0;
            font-size: 22px;
            color: #474245;
            line-height: 26px;
            font-weight: 700;
          }
          .article-desc {
            box-sizing: border-box;
            padding: 10px 20px;
            font-size: 14px;
            color: #969696;
            font-size: 14px;
            color: #969696;
            line-height: 20px;
            position: relative;
          }
          .user-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            padding: 0 14px 0 11px;
            background: #f8f8f8;
            border-radius: 8px;
            .user-info-left {
              display: flex;
              .user-info_thumbnail {
                width: 22px;
                height: 22px;
                border: 1px solid #e6e6e6;
                border-radius: 50%;
              }
              .user-info__name {
                max-width: 220px;
                margin-left: 5px;
                font-size: 16px;
                line-height: 22px;
                color: #474245;
              }
            }
            .user-info__btn-follow {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-shrink: 0;
              width: 45px;
              height: 20px;
              line-height: 18px;
              font-size: 10px;
              color: #fff;
              border-radius: 4px;
              background: #ff4891;
              .my-icon-plus {
                display: inline-block;
                position: relative;
                height: 10px;
                width: 12px;
              }
              .my-icon-plus::before {
                display: block;
                content: "";
                position: absolute;
                border-left: 1px solid #fff;
                height: 9px;
                top: 0px;
                left: 4px;
              }
              .my-icon-plus::after {
                display: block;
                content: "";
                position: absolute;
                width: 9px;
                border-top: 1px solid #fff;
                top: 4px;
                left: 0;
              }
            }
          }
        }
        .article-body-wrap {
          width: 100%;
          padding: 0 22px;
          .article-body {
            width: 100%;
            padding: 12px 0 24px;
            overflow: hidden;
            /deep/ img {
              max-width: 100%;
            }
          }
        }
        .article-footer-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 18px;
          margin-top: 14px;
          .control-item {
            display: flex;
            align-items: center;
            i {
              margin-right: 5px;
            }
          }
          .article__btn-share {
            margin: 0 22px 0 30px;
          }
        }
        .article-comment-wrap {
          .article-comment-container {
            padding: 0 15px;
            .comment-title {
              font-size: 20px;
              line-height: 28px;
              color: #474245;
              margin: 20px 0;
            }
            .no-comment-bg {
              height: 110px;
              background-image: url(../assets/img3/comment-empty.jpg);
              background-repeat: no-repeat;
              background-position: 50%;
              background-size: cover;
            }
          }
          .comment-action-wrap {
            justify-content: center;
            display: flex;
            padding: 24px 0;
            text-align: center;
            .comment-on {
              width: 90px;
              color: #ff4891;
              border-color: #ff4891;
            }
            span {
              height: 32px;
              line-height: 32px;
              font-size: 14px;
              border-style: solid;
              border-width: 1px;
              border-radius: 6px;
            }
          }
        }
        .article-footer-btns {
          position: fixed;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 50px;
          display: flex;
          align-items: center;
          background: #fff;
          z-index: 999;
          border-top: 1px solid #f5f5f5;
          .article-footer-btn {
            display: flex;
            height: 35px;
            align-items: center;
            box-sizing: border-box;
            flex-direction: column;
            font-size: 10px;
            color: #969696;
            letter-spacing: 0;
            .article-comment-entry {
              width: 234px;
              box-sizing: border-box;
              height: 35px;
              margin-left: 15px;
              padding: 8px 0 7px 10px;
              background: #f5f5f5;
              border-radius: 4px;
              font-size: 14px;
              color: #c6c6c6;
              font-family: PingFangSC-Regular;
            }
          }
          .article-footer-btns-right {
            flex: 1;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 28px;
            .article-footer-btn {
              display: flex;
              height: 35px;
              align-items: center;
              box-sizing: border-box;
              flex-direction: column;
              font-size: 10px;
              color: #969696;
              letter-spacing: 0;
              i {
                color: #474245;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
  .recommend-list {
    margin: 0 15px;
    padding-bottom: 70px;
    .recommend-list__hd {
      padding: 20px 0 15px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      .list-title {
        font-size: 22px;
        font-weight: 500;
        color: #474245;
        line-height: 22px;
      }
      .list-desc {
        font-size: 12px;
        color: #969696;
        line-height: 14px;
        position: relative;
        padding-left: 11px;
      }
      .list-desc-before::before {
        content: "";
        display: block;
        position: absolute;
        width: 2px;
        height: 12px;
        background: #d8d8d8;
        border-radius: 8px;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
      }
    }
    .recommend-article {
      display: flex;
      border-bottom: none;
      padding-top: 22px;
      .article-image {
        position: relative;
        width: 150px;
        height: 103px;
        overflow: hidden;
        border-radius: 10px;
        line-height: 0;
        font-size: 0;
        .image-loaded {
          background-size: cover;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: 50%;
        }
        .article-img {
          background-color: #f0f0f0;
        }
      }
      .article-info {
        padding-left: 15px;
        flex: 1;
        align-items: center;
        overflow: hidden;
        .follow-user-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          .user__thumbnail {
            width: 24px;
            height: 24px;
            box-sizing: border-box;
            background: #fff3e8;
            border: 1px solid #e6e6e6;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .user__name {
            font-size: 14px;
            line-height: 24px;
            color: #474245;
            padding: 0 7px;
          }
        }
        .article-title {
          margin: 10px 0 8px;
          font-size: 16px;
          color: #474346;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .article-tool{
          display: flex;
          justify-content: space-between;
          margin-top: 13px;
          height: 20px;
          .tool-left{
            overflow: hidden;
            text-overflow: ellipsis;
            .article-tool-view{
              font-size: 12px;
              color: #969696;
            }
          }
          .tool-right{
            flex-shrink: 0;
            .article-tool-share{
              font-size: 14px;
              color: #474245;
            }
          }
        }
      }
    }
  }
}
</style>