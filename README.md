# 项目名称
* 每日优鲜

## 演示
官网地址：[每日优鲜](https://www.missfresh.cn)
上线地址：http://49.232.154.155:2001

## git仓库地址
https://github.com/gzh51907/EveryDay-Fresh.git

## 团队与分工
* 组长：吴汶峰，成员：高少强,张伟豪
* 吴汶峰负责模块： 登录、注册、登出、我的、路由守卫
* 高少强负责模块： 分类、发现、购物车
* 张伟豪负责模块： 首页、列表页、详情页

## 项目页面截图
![avatar](/img/1.png);
![avatar](/img/2.png);
![avatar](/img/3.png);
![avatar](/img/4.png);
## 项目目录说明
|-- .gitignore
    |-- babel.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- public  （公共目录）
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- js
    |       |-- jquery-1.11.3.min.js
    |       |-- jquery-3.4.1.min.js
    |-- src
        |-- App.vue
        |-- config.json
        |-- main.js
        |-- assets （静态资源目录）
        |   |-- logo.png
        |   |-- homedatajs
        |   |-- img3
        |   |-- js-Data
        |   |-- public img
        |-- components
        |   |-- HelloWorld.vue
        |-- mongoDB （mongoDB数据库目录）
        |   |-- config.json
        |   |-- index.html
        |   |-- login.html
        |   |-- reg.html
        |   |-- server.js
        |   |-- try_catch.html
        |   |-- assets
        |   |-- db
        |   |   |-- index.js
        |   |   |-- mongo.js
        |   |   |-- mysql.js
        |   |-- routers
        |   |   |-- goods.js
        |   |   |-- index.js
        |   |   |-- user.js
        |   |-- utils
        |       |-- index.js
        |       |-- token.js
        |-- pages （项目代码）
        |   |-- AboutUs.vue
        |   |-- Address.vue
        |   |-- Agreement.vue
        |   |-- Article.vue
        |   |-- Cart.vue   （购物车模块）
        |   |-- ceshi.html
        |   |-- Classify.vue  （分类模块）
        |   |-- Detail.vue
        |   |-- Discover.vue （发现模块）
        |   |-- Feedback.vue
        |   |-- Help.vue
        |   |-- Home.vue      （首页模块）
        |   |-- Login.vue     （登录模块）
        |   |-- Mine.vue     （我的模块）
        |   |-- Mineaddress.vue
        |   |-- Order.vue
        |   |-- Privacy.vue
        |   |-- R.vue         （注册模块）
        |   |-- Search.vue
        |   |-- Security.vue
        |-- router 
        |   |-- index.js
        |-- store
            |-- cart.js
            |-- common.js
            |-- index.js
## 技术栈
* Vue
* Vue-Router
* Vuex
* Vue-Cli
* axios
* elementUI/Vant/Swiper
* git
