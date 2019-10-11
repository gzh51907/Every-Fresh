<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 17:05:33
 * @LastEditTime: 2019-10-10 22:11:15
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <div class="content">
      <div class="head">
        <div class="tab-image">
          <img src="../assets/img3/author-default.png" alt />
        </div>
        <div class="tab">
          <el-tabs v-model="activeName" style="marign-left:12px;marign-right:12px;" @tab-click='handleclick'>
            <el-tab-pane label="精选" name="first" @click="jingxuan">
              <div class="article-list" v-for="item in JXdata" :key="item.module.id">
                <div class="list-wrap">
                  <div class="list-header">
                    <p class="list-title">{{item.module.name}}</p>
                    <p class="list-desc">{{item.module.subtitle}}</p>
                  </div>
                  <div class="article-big">
                    <div class="big-wrap" v-for="item in item.articles" :key="item.title">
                      <div class="article-card">
                        <div class="follow-user-item">
                          <img :src="item.authorPhoto" alt />
                          <span>{{item.nickname}}</span>
                        </div>
                        <div class="article_cover">
                          <img :src="item.titlePic" alt class="article_header_img" />
                        </div>
                        <h3 class="article_title">{{item.title}}</h3>
                        <div class="article_controls">
                          <div class="control-item article_reading">浏览 {{item.fontReadNo}}</div>
                          <div class="control-btn-area">
                            <i class="el-icon-share"></i>
                            分享
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="big-wrap" v-for="item in item.articles" :key="item.articleId">
                      <div class="asc-wrap">
                        <div class="article-image">
                          <img :src="item.titlePic" alt />
                        </div>
                        <div class="article-info">
                          <div class="follow-user-item">
                            <img :src="item.authorPhoto" alt />
                            <span class="user_name">{{item.nickname}}</span>
                          </div>
                          <p class="article-title oveflow-ellipsis-line2">{{item.title}}</p>
                          <div class="article-tool">
                            <div class="tool-left">
                              <span class="article-tool-view">浏览 {{item.fontReadNo}}}</span>
                            </div>
                            <div class="tool-right">
                              <span class="acticle-tool-share">
                                <i class="el-icon-share"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="快手食谱" name="second" @click.native="kuaishou">
                <div class="article-list" v-for="item in JXdata" :key="item.module.id">
                <div class="list-wrap">
                  <div class="list-header">
                    <p class="list-title">{{item.module.name}}</p>
                    <p class="list-desc">{{item.module.subtitle}}</p>
                  </div>
                  <div class="article-big">
                    <div class="big-wrap" v-for="item in item.articles" :key="item.title">
                      <div class="article-card">
                        <div class="follow-user-item">
                          <img :src="item.authorPhoto" alt />
                          <span>{{item.nickname}}</span>
                        </div>
                        <div class="article_cover">
                          <img :src="item.titlePic" alt class="article_header_img" />
                        </div>
                        <h3 class="article_title">{{item.title}}</h3>
                        <div class="article_controls">
                          <div class="control-item article_reading">浏览 {{item.fontReadNo}}</div>
                          <div class="control-btn-area">
                            <i class="el-icon-share"></i>
                            分享
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="big-wrap" v-for="item in item.articles" :key="item.articleId">
                      <div class="asc-wrap">
                        <div class="article-image">
                          <img :src="item.titlePic" alt />
                        </div>
                        <div class="article-info">
                          <div class="follow-user-item">
                            <img :src="item.authorPhoto" alt />
                            <span class="user_name">{{item.nickname}}</span>
                          </div>
                          <p class="article-title oveflow-ellipsis-line2">{{item.title}}</p>
                          <div class="article-tool">
                            <div class="tool-left">
                              <span class="article-tool-view">浏览 {{item.fontReadNo}}}</span>
                            </div>
                            <div class="tool-right">
                              <span class="acticle-tool-share">
                                <i class="el-icon-share"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="甜点饮品" name="third" @click="tiandian">
                   <div class="article-list" v-for="item in JXdata" :key="item.module.id">
                <div class="list-wrap">
                  <div class="list-header">
                    <p class="list-title">{{item.module.name}}</p>
                    <p class="list-desc">{{item.module.subtitle}}</p>
                  </div>
                  <div class="article-big">
                    <div class="big-wrap" v-for="item in item.articles" :key="item.title">
                      <div class="article-card">
                        <div class="follow-user-item">
                          <img :src="item.authorPhoto" alt />
                          <span>{{item.nickname}}</span>
                        </div>
                        <div class="article_cover">
                          <img :src="item.titlePic" alt class="article_header_img" />
                        </div>
                        <h3 class="article_title">{{item.title}}</h3>
                        <div class="article_controls">
                          <div class="control-item article_reading">浏览 {{item.fontReadNo}}</div>
                          <div class="control-btn-area">
                            <i class="el-icon-share"></i>
                            分享
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="big-wrap" v-for="item in item.articles" :key="item.articleId">
                      <div class="asc-wrap">
                        <div class="article-image">
                          <img :src="item.titlePic" alt />
                        </div>
                        <div class="article-info">
                          <div class="follow-user-item">
                            <img :src="item.authorPhoto" alt />
                            <span class="user_name">{{item.nickname}}</span>
                          </div>
                          <p class="article-title oveflow-ellipsis-line2">{{item.title}}</p>
                          <div class="article-tool">
                            <div class="tool-left">
                              <span class="article-tool-view">浏览 {{item.fontReadNo}}}</span>
                            </div>
                            <div class="tool-right">
                              <span class="acticle-tool-share">
                                <i class="el-icon-share"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="生活百科" name="fourth" @tab-click="baike">
                   <div class="article-list" v-for="item in JXdata" :key="item.module.id">
                <div class="list-wrap">
                  <div class="list-header">
                    <p class="list-title">{{item.module.name}}</p>
                    <p class="list-desc">{{item.module.subtitle}}</p>
                  </div>
                  <div class="article-big">
                    <div class="big-wrap" v-for="item in item.articles" :key="item.title">
                      <div class="article-card">
                        <div class="follow-user-item">
                          <img :src="item.authorPhoto" alt />
                          <span>{{item.nickname}}</span>
                        </div>
                        <div class="article_cover">
                          <img :src="item.titlePic" alt class="article_header_img" />
                        </div>
                        <h3 class="article_title">{{item.title}}</h3>
                        <div class="article_controls">
                          <div class="control-item article_reading">浏览 {{item.fontReadNo}}</div>
                          <div class="control-btn-area">
                            <i class="el-icon-share"></i>
                            分享
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="big-wrap" v-for="item in item.articles" :key="item.articleId">
                      <div class="asc-wrap">
                        <div class="article-image">
                          <img :src="item.titlePic" alt />
                        </div>
                        <div class="article-info">
                          <div class="follow-user-item">
                            <img :src="item.authorPhoto" alt />
                            <span class="user_name">{{item.nickname}}</span>
                          </div>
                          <p class="article-title oveflow-ellipsis-line2">{{item.title}}</p>
                          <div class="article-tool">
                            <div class="tool-left">
                              <span class="article-tool-view">浏览 {{item.fontReadNo}}}</span>
                            </div>
                            <div class="tool-right">
                              <span class="acticle-tool-share">
                                <i class="el-icon-share"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
export default {
  data() {
    return {
      activeName: "first",
      JXdata: [],
      firstList: [],
      anthor: [],
      api:'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&env=web&platform=web&uuid=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&version=8.2.0&screen_height=375&screen_width=667&category=1',
    };
  },
//   watch:{
//       if(this.activeName)
//   },
  methods:{
      handleclick(tab,event){
            console.log(tab,event);
            if(tab.$el == 'div#pane-second.el-tab-pane'){
                this.kuaishou();
            }
      },    
      jingxuan(){
          console.log(1);
      },
      kuaishou(){
          console.log(1);
          this.api='https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&env=web&platform=web&uuid=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&version=8.2.0&screen_height=375&screen_width=667&category=21';
      },
        tiandian(){
            this.api = 'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&env=web&platform=web&uuid=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&version=8.2.0&screen_height=375&screen_width=667&category=5'
        },
        baike(){
            console.log(tab,event);
            this.api = 'https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&env=web&platform=web&uuid=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&version=8.2.0&screen_height=375&screen_width=667&category=6'
        }
  },
  mounted() {},
  async created() {
    // this.api =
    //   "https://as-vip.missfresh.cn/as/disc/index/multiLis?device_id=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&env=web&platform=web&uuid=c7da86b0-eb27-11e9-95ff-f76cbd7a063a&version=8.2.0&screen_height=375&screen_width=667&category=1";
    // // axios.get(api).then(res => {
    // //   this.JXdata = res.data;
    // // });
    let {
      data: { data }
    } = await axios.get(this.api);
    this.JXdata = data;
    // data.forEach((item, index) => {
    //   item.articles.forEach((item, index) => {
    //     if (index != 0) {
    //       this.anthor.push(item);
    //     } else {
    //       this.firstList.push(item);
    //     }
    //   });
    // });
    // console.log(this.anthor);
  }
};
</script>
<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  #app {
    height: 100%;
    width: 100%;
    .content {
      width: 100%;

      .head {
        width: 100%;

        height: 40px;
        background: #fff;
        z-index: 999;
        border-bottom: 1px solid #f5f5f5;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        position: relative;
        .tab-image {
          position: absolute;
          width: 24px;
          height: 24px;
          img {
            height: 100%;
            width: 100%;
            border-radius: 100%;
          }
        }
        .tab {
          //      margin-left:12px;
          // margin-right: 12px;
          width: 100%;
          height: 100%;
          // padding-left: 20px;
          .el-tabs {
            margin-left: 12px;
            margin-right: 12px;

            .article-list {
              .list-wrap {
                margin: 0 15px;
                .list-header {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding: 30px 0 10px;
                  .list-title {
                    font-weight: 500;
                    font-size: 22px;
                    color: #474245;
                    line-height: 28px;
                  }
                  .list-desc {
                    padding-left: 11px;
                    font-size: 12px;
                    line-height: 20px;
                    color: #969696;
                    position: relative;
                  }
                  .list-desc::before {
                    position: absolute;
                    display: block;
                    content: "";
                    width: 2px;
                    height: 12px;
                    background: #d8d8d8;
                    border-radius: 8px;
                    top: 50%;
                    left: 5px;
                    transform: translateY(-50%);
                  }
                }
                .article-big {
                  padding-bottom: 22px;
                  .big-wrap {
                  }
                  .big-wrap {
                    padding-top: 0;
                    .article-card {
                      box-sizing: border-box;
                      width: 100%;
                      overflow: hidden;
                      padding: 15px 0;
                      .follow-user-item {
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        overflow: hidden;
                        img {
                          width: 24px;
                          height: 24px;
                          box-sizing: border-box;
                          background: #fff3e8;
                          border: 1px solid #e6e6e6;
                          border-radius: 50%;
                          flex-shrink: 0;
                        }
                        span {
                          font-size: 14px;
                          line-height: 24px;
                          color: #474245;
                          padding: 0 7px;
                        }
                      }
                      .article_cover {
                        width: 100%;
                        height: 194px;
                        max-height: 345px;
                        border-radius: 10px;
                        overflow: hidden;
                        .article_header_img {
                          width: 100%;
                          height: 100%;
                        }
                      }
                      .article_title {
                        padding: 0;
                        margin: 10px 0 20px;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 25px;
                        color: #474245;
                      }
                      .article_controls {
                        display: flex;
                        height: 18px;
                        margin-top: 13px;
                        justify-content: space-between;
                        align-items: center;
                        .control-item {
                          display: flex;
                          align-items: center;
                          font-size: 12px;
                          color: #969696;
                        }
                        .control-btn-area {
                          padding-top: 2px;
                          display: flex;
                          font-size: 16px;
                          padding-left: 39px;
                          align-items: center;
                          i {
                            margin-right: 5px;
                            font-weight: 600;
                            font-size: 16px;
                          }
                        }
                      }
                    }
                    .asc-wrap {
                      display: flex;
                      padding-top: 22px;
                      align-items: center;
                      .article-image {
                        position: relative;
                        width: 150px;
                        height: 103px;
                        overflow: hidden;
                        flex-shrink: 0;
                        border-radius: 10px;
                        font-size: 0;
                        line-height: 0;
                        img {
                          width: 100%;
                          height: 100%;
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
                          img {
                            width: 18px;
                            height: 18px;
                            box-sizing: border-box;
                            background: #fff3e8;
                            border: 1px solid #e6e6e6;
                            border-radius: 50%;
                            flex-shrink: 0;
                          }
                          .user_name {
                            font-size: 12px;
                            line-height: 18px;
                            color: #474245;
                            padding: 0 7px;
                          }
                        }
                        .article-title {
                          margin: 10px 0 8px;
                          font-size: 16px;
                          color: #474346;
                          line-height: 20px;
                        }
                        .oveflow-ellipsis-line2 {
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                        }
                        .article-tool {
                          display: flex;
                          margin-top: 13px;
                          height: 20px;
                          margin-top: 13px;
                          justify-content: space-between;
                          .tool-left {
                            text-overflow: hidden;
                            text-overflow: ellipsis;
                            .article-tool-view {
                              display: flex;
                              font-size: 12px;
                              color: #969696;
                              white-space: nowrap;
                              overflow: hidden;
                              text-overflow: ellipsis;
                            }
                          }
                          .tool-right {
                            .article-tool-share {
                              font-size: 14px;
                              color: #474245;
                              i {
                                font-weight: 600;
                                font-size: 17px;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>