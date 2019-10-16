/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:19:38
 * @LastEditTime: 2019-10-15 16:42:57
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';

let cart = {
    state:{
        cartList:[],
    },
    getters:{
        cartLength(state){ //购物车商品列表长度
            return state.cartList.length;
            
        },
        totalPrice(state){ //计算总价格
            //item.normalProducts.pricePro.noVip.price ---商品价格
            //item.normalProducts.showOrder            --商品数量
            return state.cartList.reduce((prev,item)=>prev+item.normalProducts.pricePro.noVip.price*item.normalProducts.showOrder,0)
        }
    },
    mutations:{
        addCart(state,goods){
            // console.log(goods);
            state.cartList.unshift(goods);
            // console.log(state.cartList);
        },
        changeQty(state,{sku,showOrder}){
            state.cartList.forEach(item=>{
                if(item.normalProducts.sku == sku){ //修改商品数量
                    item.normalProducts.showOrder = showOrder;
                }
            })
        },
        removeQty(state,sku){//删除商品
            state.cartList = state.cartList.filter(item=>item.normalProducts.sku!=sku);
        },
        clearCart(state){
            state.cartList = [];//清空购物车
        }
    }

      
}
export default cart;