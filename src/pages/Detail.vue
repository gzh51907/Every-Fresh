<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-16 16:57:41
 * @LastEditTime: 2019-10-19 11:56:39
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="product-detail">
        <div class="detail-title-container">
            <div class="detail-title">
                <div class="buttons-left"></div>
                <div class="title-list">
                    <div class="title-detail detail-title-active">商品详情</div>
                </div>
                <div class="product-share">
                    <img
                    src="../assets/public img/share.png"
                    alt="" class="share-img"> 
                    <img alt="" class="share-img" style="display: none;">
                </div>
            </div>
        </div>
        <div class="scrollBox" v-if="detailDate != null ">
            <div class="product-img-container">
                <van-swipe 
                @change="onChange"
                :loop= 'true'
                :autoplay="3000"
                >
                    <van-swipe-item v-for="item in detailDate.data.images">
                        <img style="width:100%;" :src="item" alt="">
                    </van-swipe-item>

                    <div class="custom-indicator swiper-pagination banner-slider swiper-pagination-fraction" slot="indicator">
                        {{ current + 1 }}/{{detailDate.data.images.length}}
                    </div>
                </van-swipe>
            </div>
            <div class="product-describe">
                <div class="product-describe-title"><span class="subtitle-text">{{detailDate.data.subtitle}}</span></div>
                <div class="product-item-title product-detail-name">
                    <p class="sub-title padding">{{detailDate.data.name}}</p>
                    <!---->
                </div>
                <div class="product-item-price flex product-detail-price">
                    <div class="price-left flex">
                    <div class="price-area flex">
                        <div class="right-price">
                        <div class="up-price" style="color: rgb(255, 72, 145);"><span class="sign">￥</span> <span
                            class="price">{{(detailDate.data.price/100).toFixed(1)}}</span></div>
                        </div>
                    </div>
                    <!---->
                    </div>
                    <div class="down-area"><span class="sales-volume">已售{{detailDate.data.sales_volume}}份</span></div>
                </div>
                <div class="product-attr-container product-attrs">
                    <div class="image-text-container product-attr"><span class="promotion-img"></span>
                    <div class="image-text">
                        产地<span>中国</span></div>
                    <!---->
                    </div>
                    <div class="image-text-container product-attr"><span class="promotion-img"></span>
                    <!---->
                    <div class="image-text">
                        2小时达
                    </div>
                    </div>
                    <div class="promotion-attr product-attr"><span class="promotion-img"></span> <span
                        class="promotion-text">实付满0包邮</span></div>
                </div>
            </div>
            <div class="container">
                <div class="wrapper">
                    <div >优惠</div>
                    <div class="detail">详情</div>
                    <div class="promotionInfo">
                    <div class="flex proList">
                        <img src="https://j-image.missfresh.cn/img_20190717185346501.png" class="tit"> 
                        <span class="text">每人每天购买不超过1件，享受此优惠</span>
                    </div>
                    </div>
                </div>
                <!---->
            </div>
            <div class="product-share-info">
                <div class="product-redpack"><img src="https://j-image.missfresh.cn/img_20171029215450695.png"
                    class="product-redpack-img"> <span class="share-product-text">该商品分享可领49减10红包
                    <i></i></span> <span class="go-share-btn">去分享</span></div>
                <p class="share-count">{{detailDate.data.product_share_info_v2.share_product_text}}</p>
                <!---->
            </div>
            <div class="safe-container">
                <div class="security product-safe-area">
                    <div class="security-tit">
                    <span class="security-tit-title">安心指纹</span>
                    <div class="security-box">
                        <span class="security-tit-see">点击查看</span>
                        <!----> 
                        <span class="security-to-right">&gt;</span></div>
                    </div>
                    <!---->
                    <div class="scroll-box">
                    <div class="security-item-wrap">
                        <div class="security-item">
                        <img src="https://j-image.missfresh.cn/img_20180313023856777.png" alt="">
                        <p class="item-text">优鲜安心检测</p>
                        </div>
                        <div class="security-item">
                        <img src="https://image.missfresh.cn/3acaea400d1d4e4485fb4a8df941373d.png" alt="">
                        <p class="item-text">经营证件</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="light-spots-container">
                <div class="title-list-container">
                    <div class="image-text">亮点</div>
                    <div class="product-buyer-box">
                    <div class="buyer-description">
                        <p class="marks marks-left">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAAXNSR0IArs4c6QAAAbBJREFUSA2Vlb9Lw0AUx3NnyNBOWQKhdhIHNxHUUURwdBBFwTo49L+yo+AmqIPgj0Uc/Ac61LFp6+haMMTvC024PC/NvYPy7n3z7vPN3eWuymNtPB5/Qtox5Jtut9szcqduE0ebFBSvIzdNPa31o1nj0nfhVIwBrcxMKfXbarWeXMxYTSOHG18wwHsYhj9Mc0kbOaXxbDbbBnGNUcXL7MopjdM0PWOmXpZlD1xryl05uTEMFIAVY+zvCF/zV5OR+VzCyY0nk8kuBq2aEPTFs5VwihkfM1Na5n6SJPc4Gn30yy3hdWaOOmcOLbEHgxEG0Rm2Niz7axAEvSiKvq0FC1HC0XTYl5kSE88P5vP5LWL+ojZzKUdjNkc2kEXbm06nVxY9l6Qc2rvTOhjXMeN/e2jUiDgasA1j8NIuarfqCqQcmnFQB7PobYtWSCIO7fFbMbIponZYVyPl4F9P39XBuA74NdeKXMpR2JsV3DjPiPsFxBZh+tLpdA4RM9tzKYeWOvV9/xzxwwYkjUxxgVzWmS5qRJzyQsAbKzqniCf4bQLWhtEQSziI43iwzJSMi+bK+QMInPrVvAF7kgAAAABJRU5ErkJggg==">
                        </p>
                        <ul class="commodity-details">
                        <li class="list-item" v-for="index in detailDate.data.description">
                            <p class="list-item-text">{{index}}</p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div class="graphic-details-container">
                <div class="graphic-list-container">
                    <div class="title-list-container">
                    <div class="image-text">商品详情</div>
                    <ul class="list-container">
                        <li class="list-item list-point">
                        <p class="list-item-text text-color">规格: {{detailDate.data.unit}}</p>
                        </li>
                        <li class="list-item list-point">
                        <p class="list-item-text text-color">重量: {{detailDate.data.weight}}</p>
                        </li>
                        <li class="list-item list-point">
                        <p class="list-item-text text-color">包装: {{detailDate.data.pack}}</p>
                        </li>
                        <li class="list-item list-point">
                        <p class="list-item-text text-color">保质期: {{detailDate.data.storage_time}}</p>
                        </li>
                        <li class="list-item list-point">
                        <p class="list-item-text text-color">贮存方法: {{detailDate.data.storage_method}}</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <!-- 介绍 -->
                <div class="instruction-list-container">
                    <div class="image-pre-container instruction-item" v-for="instructe in detailDate.data.instruction"><img
                        :src="instructe.image" class="image-pre-img">
                    </div>
                    
                </div>
            </div>
            <div class="blank-placeholder"></div>
            <!--  -->
        </div>
        <!--  -->
        
        <div class="address-bar-container">
            <div class="address-choose-left">
                <div class="delivery-range no-tips"><img
                    src="//static-as.missfresh.cn/frontend/item/static/img/detail-location-icon.16058b6.png" alt=""
                    class="position-icon"> <span>送至 &nbsp;</span> <span>广州市天河区文化局</span> <img
                    src="https://j-image.missfresh.cn/img_20161108170831264.png?mryxw=165&amp;mryxh=42" alt=""
                    class="delivery-icon"></div>
                <!---->
            </div> <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAT9JREFUWAnt2D1uwkAQBWAM4QT+uYLtg9ASJFpElSJXyA2SUyAOADeg4wJESFiuqJF9AArLmU0XK4h18t6IYlayLNuj2W+fi7U8GNiwBCwBS8AS6CaQpuk0y7J59z7jeoRoGobhrm3bFzlf67reI3re6gEBR1F0kQlmckzYaAhYUv1MkuQsKT+z0RCwe31VVR000DCwFhoK1kDDwWw0BcxE08AsNBXMQNPBaLQKGIlWA6PQquDf0HEcH2WXPLlnPmPoU/RINergPM+XTdOsJAQ391tRFJs+gQR9iv9b28WWZfnet6caGIF1i1MBo7AqYCSWDkZjqWAGlgZmYSlgJhYOZmOhYA0sDCy/qhbyT2ItDb+327/sYA7jM1DfEh8yGR3rFvTks6p7NUEQvMoxlg+Z7b1ae24JWAKWgCXwI4Ev8aEVfKBO8NcAAAAASUVORK5CYII="
                class="address-choose-arrow">
        </div>
        <!--  -->
        <div class="product-bar-footer-container">
            <div class="image-spot-container product-image-spot">
                <div class="image-spot-img"
                style="background-image: url(&quot;//static-as.missfresh.cn/frontend/item/static/img/shop-icon.03511f0.png&quot;);">
                </div>
                <!----> <span class="image-spot-dot" style="width:20px" @click="toCart">{{cartLength}}</span>
            </div>
            <div class="switch-button-container unclickable flex add-cart-btn clickable">
                <div class="add-cart-btn" @click="addCart(detailDate.data.sku)">加入购物车</div>
                <!---->
            </div>
        </div>
        <!-- <div class="price_tip left">
            <span class="amount">￥0.9</span>
            <span class="notice">已免运费</span>
        </div> -->
    </div>
</template>
<script>
import { Swipe , SwipeItem } from 'vant';
import axios from 'axios'

export default {
    data(){
        return {
            current: 0,
            detailDate:{}
        }
    },
    computed:{
        cartLength(){
            return this.$store.getters.cartLength;
        }
    },
    methods:{
        onChange(index){
            this.current = index;
        },
        toCart(){
            this.$router.push({
                path:'/cart'
            })
        },
        addCart(sku){
            let a = this.detailDate.data;
            let currentGoods = this.$store.state.cart.cartList.filter(item=>item.sku === sku)[0];
            if(currentGoods){
                currentGoods.qty ++;
            }else{
                let goods = {};
                goods.goods_name = a.name;
                goods.sku = a.sku;
                    if (a.pricePro.vip) {
                        goods.vip_price = a.pricePro.vip.price;
                    } else {
                        goods.vip_price = "";
                    }
                goods.noVip_price = a.pricePro.noVip.price;
                goods.goods_image = a.image;
                goods.goods_tag = a.promotionTags[0].name;
                goods.qty = 1;
                goods.stock = a.stock;
                goods.cart_show = true;
                // console.log(goods);
                this.$store.commit("addCart", goods);
            }
        }
    },
    components:{
        [Swipe.name] : Swipe,
        [SwipeItem.name] : SwipeItem
    },
    async created(){
        let detailData = await axios.get(`http://49.232.154.155:2999/goods/detail?sku=${this.$route.query.sku}`);
        console.log(this.$route.query.sku)
        this.detailDate = detailData.data[0]
        // .then(response=> {
        //     console.log(response.data[0]);
        //     this.detailDate = response.data[0]
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

        console.log(detailData)
        console.log(this.detailDate)
    }
}
</script>
<style lang="scss" scoped>
img{
    width: auto;
}
.flex {
    display: -ms-flexbox;
    display: flex;
}
.sign {
    margin-right: -0.3125rem;
}
.sales-volume {
    color: #969696;
    font-size: 0.75rem;
    float: right;
    margin-top: 0.3125rem;
}
.product-detail {
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    .scrollBox {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .safe-container {
        background-color: #f8f8f8;
        padding-top: 0.625rem;
        padding-bottom: 0.625rem;
    }
}
.scroll-box {
    overflow-x: scroll;
    .security-item-wrap {
        padding-top: 0.3125rem;
        padding-bottom: 1.4375rem;
        display: -ms-flexbox;
        display: flex;
        .security-item:first-child {
            margin-left: 0;
        }
        .security-item {
            display: inline-block;
            min-width: 25%;
            text-align: center;
            img {
                width: 1.875rem;
                height: 1.875rem;
            }
            .item-text {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p {
                width: 100%;
                font-size: 0.75rem;
                color: #474245;
            }
        }
    }
}
.security {
    padding: 0 0.9375rem;
    padding-top: 1.25rem;
    background-color: #ffffff;
    .security-tit {
        line-height: 1.75rem;
        .security-tit-title {
            font-size: 1.25rem;
            color: #474245;
            line-height: 1.75rem;
        }
        .security-box {
            float: right;
            color: #969696;
            font-size: 0.75rem;
            .security-tit-see {
                margin-right: 0.1875rem;
                display: inline-block;
            }
            .security-to-right {
                margin-left: 0.3125rem;
            }
        }
    }
    
}
.detail-title {
    transition: all 300ms ease-out;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    color: #4b4b4b;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.06);
    border-bottom: 1PX solid #eee;
    user-select: none;
    z-index: 9;
    box-sizing: border-box;
    width: 100%;
    height: 2.75rem;
    .buttons-left {
        line-height: 2.125rem;
        position: absolute;
    }
    .title-list {
        text-align: center;
        font-size: 1rem;
        line-height: 2.75rem;
        height: 2.75rem;
        margin: 0 auto;
        .detail-title-active {
            border-bottom-color: #ff4891;
            color: #ff4891;
        }
        .title-detail {
            margin-right: 0.9375rem;
        }
        > div {
            height: 100%;
            line-height: 2.75rem;
            border-bottom: 0.1875rem solid transparent;
            color: #262626;
            display: inline-block;
            box-sizing: border-box;
        }
    }
    .product-share {
        position: absolute;
        top: 0;
        right: 0.625rem;
        line-height: 2.75rem;
        .share-img {
            width: 1.375rem;
            vertical-align: middle;
        }
    }
}
.detail-title-container {
    position: relative;
    height: 2.75rem;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
}
.scrollBox {
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.swiper-pagination.banner-slider {
    color: white;
    width: auto;
    left: auto;
    right: 0.5rem;
    bottom: 0.5rem;
    padding: 0 0.5rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.625rem;
}
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
.product-describe {
    padding-left: 0.9375rem;
    padding-top: 0.875rem;
    padding-right: 0.9375rem;
    box-sizing: border-box;
    background: #fff;
    .product-detail-name {
        font-size: 0.875rem;
        color: #474245;
        .sub-title {
            width: 100%;
        }
    }
    .product-describe-title{
        .subtitle-text {
            display: inline-block;
            vertical-align: baseline;
            font-size: 1.125rem;
            color: #474245;
            font-weight: 700;
        }   
    }
    .product-detail-price {
        padding-bottom: 0.1875rem;
        .up-price {
            line-height: 1.25rem;
        }
    }
    .product-attrs {
        margin-top: 0.6875rem;
        padding: 0.75rem 0;
    }
}
.product-attr-container {
    border-top: .5PX solid #f5f5f5;
    overflow: hidden;
    .product-attr {
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 1.25rem;
        color: #262626;
        font-size: 0.75rem;
    }
}
.image-text-container {
    line-height: 1;
    white-space: nowrap;
    .promotion-img {
        height: 0.1875rem;
        width: 0.1875rem;
        border-radius: 50%;
        background: #474245;
        vertical-align: middle;
        display: inline-block;
    }
    .image-text {
        padding-left: 0.1875rem;
        text-align: left;
        color: #262626;
        font-size: 0.75rem;
        display: inline-block;
    }

}
.product-item-price {
    padding-right: 0.9375rem;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: end;
    align-items: flex-end;
}
.price-left {
    flex-direction: column;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    align-items: flex-start;
    -webkit-align-items: flex-start;
    flex: 1;
    -webkit-flex: 1;
}
.price-area {
    -ms-flex-align: center;
    align-items: center;
}
.right-price {
    margin-left: 0.3125rem;
    height: 1.125rem;
    line-height: 1.125rem;
    font-size: 0.75rem;
    font-weight: bold;
}
.product-item-title{
    .sub-title.padding {
        padding-bottom: 0.875rem;
        padding-top: 0.125rem;
    }
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
}
.container {
    padding-top: 0.625rem;
    background: #f8f8f8;
    .wrapper {
        position: relative;
        background: #fff;
        padding: 1.25rem 0.9375rem 0.9375rem;
        .title {
            text-align: left;
            line-height: 1.75rem;
            font-size: 1.25rem;
            color: #474245;
            margin-top: 0;
        }
        .detail {
            position: absolute;
            top: 1.8125rem;
            right: 0.9375rem;
            font-size: 0.75rem;
            color: #C6C6C6;
            display: flex;
            align-items: center;
        }
        .detail::after {
            content: '';
            display: inline-block;
            margin-left: 0.1875rem;
            width: 0.4375rem;
            height: 0.75rem;
            margin-top: -0.125rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAYAAABmMXGeAAAAAXNSR…a8Ozv6nMAGxbZjFZ0C0hG5DzRAXG/QXgGM8UGxVyf5E9c/hUI8yhDZ9/IAAAAASUVORK5CYII=) no-repeat;
            background-size: 0.4375rem 0.75rem;
            background-position: center;
        }
        .promotionInfo {
            display: flex;
            line-height: 1rem;
        }
        .proList {
            align-items: center;
            margin-top: 0.625rem;
            overflow: hidden;
        }
        .tit {
            height: 1rem;
            width: 1.625rem;
            box-sizing: border-box;
        }
        .text {
            font-size: 0.75rem;
            color: #474245;
            margin-left: 0.625rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
.product-share-info {
    margin-bottom: 0.9375rem;
    background: #fff;
    .product-redpack {
        background: url(//static-as.missfresh.cn/frontend/item/static/img/product-share-redpacket.e34d940.png);
        background-size: 100% 100%;
        border-radius: 0.1875rem;
        overflow: hidden;
        white-space: nowrap;
        padding: 1.375rem 0.9375rem;
        .product-redpack-img {
            height: 1rem;
            margin-left: 0.9375rem;
            vertical-align: middle;
        }
        .share-product-text {
            display: inline-block;
            box-sizing: border-box;
            vertical-align: middle;
            white-space: normal;
            width: 66%;
            color: #ff4891;
            font-size: 0.875rem;
            padding-right: 0.625rem;
            i {
                display: inline-block;
                width: 1.375rem;
                height: 1.375rem;
                background: url(//static-as.missfresh.cn/frontend/item/static/img/integral-help-ins.1e2a6de.png) no-repeat;
                background-size: 100% 100%;
                vertical-align: middle;
                position: relative;
                top: -0.0625rem;
            }
        }
        .go-share-btn {
            font-size: 0.75rem;
            color: #FF4891;
            position: relative;
        }
        .go-share-btn::after {
            position: absolute;
            top: 50%;
            margin-top: -0.375rem;
            right: -0.75rem;
            content: "";
            width: 0.5625rem;
            height: 0.625rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAAXNSR…VvuK8m+XxnVaQbz1ZOXYiDV5477jBxOATzEXJqhjYFiweDscvd3vzJ4wAAAABJRU5ErkJggg==) no-repeat left center;
            background-size: 100% 100%;
        }
    }
    .share-count {
        font-size: 0.75rem;
        color: #969696;
        margin-left: 1.75rem;
    }
    .share-count {
        font-size: 0.75rem;
        color: #969696;
        margin-left: 1.75rem;
    }
}
.light-spots-container {
    background: #fff;
    margin: 0.625rem 0.625rem 0;
    padding: 0.375rem;
    .image-text {
        padding-left: 0.1875rem;
        text-align: left;
        color: #474245;
        font-size: 1.25rem;
    }
    .product-buyer-box {
        margin-top: 0.1875rem;
        box-shadow: 0 0.125rem 0.5rem 0 #E7E7E7;
        border-radius: 0.375rem;
        padding: 0.9375rem;
    }
}
.buyer-description {
    background-color: #F5F5F5;
    padding-bottom: 0.75rem;
    .marks-left {
        padding-top: 0.625rem;
        padding-left: 0.875rem;
    }
    .commodity-details {
        background: #F5F5F5;
        border-radius: 0.375rem;
        position: relative;
        padding: 0 0.75rem 0 0.75rem;
        list-style: none;
        .list-item {
            margin-top: 0.5rem;
            position: relative;
            .list-item-text {
                width: 100%;
                line-height: 1.0625rem;
                display: inline-block;
                font-size: 0.875rem;
                color: #474245;
            }
            :first-child {
                margin-top: 0;
            }
        }
    }
    .commodity-details:before {
        content: '';
        position: absolute;
        top: -0.3125rem;
        left: 1.625rem;
        width: 0;
        height: 0;
        border-left: 0.3125rem solid transparent;
        border-right: 0.3125rem solid transparent;
        border-bottom: 0.3125rem solid #F5F5F5;
    }
}
.graphic-details-container {
    background: #fff;
    margin: 0.625rem 0.625rem 0;
    padding: 0.375rem;
}
.title-list-container {
    .image-text {
        padding-left: 0.1875rem;
        text-align: left;
        color: #474245;
        font-size: 1.25rem;
    }
    .list-container {
        list-style: none;
        .list-item {
            position: relative;
        }
        .list-point:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            background: #474245;
            border-radius: 50%;
        }
        .text-color {
            color: #969696;
        }
    }
}
.graphic-details-container .list-container {
    clear: both;
    padding: 0.625rem 0.1875rem 0.625rem;
    .list-item {
        color: #262626;
        line-height: 2.5rem;
        font-size: 0.875rem;
        position: relative;
        box-sizing: border-box;
    }
}
.image-pre-container .image-pre-img {
    display: block;
    width: 100%;
}
.address-bar-container {
    z-index: 4;
    -webkit-overflow-scrolling: touch;
    background: rgba(255, 244, 226, 0.9);
    position: fixed;
    bottom: 2.875rem;
    width: 100%;
    min-height: 2.25rem;
    box-sizing: border-box;
    padding: 0.3125rem 1.875rem 0.25rem 0.6875rem;
    font-size: 0.875rem;
    color: #262626;
    .address-choose-left {
        .delivery-range{
            .no-tips {
                line-height: 1.6875rem;
            }
            .position-icon {
                width: 1.125rem;
                height: auto;
                vertical-align: middle;
            }
            span {
                display: inline-block;
                vertical-align: middle;
            }
            .delivery-icon {
                height: 0.875rem;
                width: auto;
                vertical-align: middle;
            }
        }   
    }
    .address-choose-arrow {
        position: absolute;
        height: 1.375rem;
        width: auto;
        right: 0.4375rem;
        top: 50%;
        transform: translateY(-50%);
    }
}
.product-bar-footer-container {
    display: flex;
    z-index: 4;
    font-size: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.875rem;
    background: #fff;
    box-shadow: 0 -0.0625rem 0.0625rem #e5e5e5;
    .product-image-spot {
        background: #fff;
        width: 4.375rem;
        .image-spot-img {
            height: 100%;
        }
    }
}
.image-spot-container {
    position: relative;
    height: 100%;
    .image-spot-img {
        width: 1.375rem;
        height: 1.375rem;
        margin: 0 auto;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .image-spot-dot {
        position: absolute;
        right: 0.1875rem;
        top: 0.0625rem;
        padding: 0.25rem;
        line-height: 1;
        min-width: 0.75rem;
        text-align: center;
        border-radius: 50%;
        background: #ff4891;
        color: #fff;
        font-size: 0.75rem;
    }
}
.add-cart-btn {
    line-height: 2.875rem;
    text-align: center;
    font-size: 1rem;
    width: 100%;
}
.clickable {
    background: #ff4891;
}
.price_tip.left {
    bottom: 3.625rem;
    left: 0.9375rem;
    right: auto;
}
.price_tip {
    position: fixed;
    bottom: 3.75rem;
    right: 0.875rem;
    height: 1.875rem;
    line-height: 1.875rem;
    background: rgba(0,0,0,.5);
    border-radius: 0.9375rem;
    min-width: 7.5rem;
    z-index: 1000;
    .amount {
        font-size: 0.9375rem;
        line-height: 1.875rem;
        color: #FFF;
        margin: 0 0.9375rem;
    }
    .notice {
        font-size: 0.75rem;
        line-height: 1.875rem;
        color: #FFF;
        margin-right: 0.9375rem;
    }
}
.price_tip.left:after {
    left: 1.25rem;
    right: auto;
}
.price_tip:after {
    content: '';
    position: absolute;
    right: 5.625rem;
    bottom: -0.5rem;
    width: 0;
    height: 0;
    border-width: 0.5rem 0.5rem 0;
    border-style: solid;
    border-color: rgba(0,0,0,.5) transparent transparent;
}
</style>