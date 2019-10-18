/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 14:19:38
 * @LastEditTime: 2019-10-18 19:09:39
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
            return state.cartList.reduce((prev,item)=>prev+item.noVip_price*item.qty,0)
        },
        getQty:(state)=>(sku)=>{ //获取该商品的数量
            let qty1 = '';
           state.cartList.forEach(item=>{
                if(item.sku == sku){
                  qty1 = item.qty  
                }
            })
           
            return qty1;
        },
        getCart_show:(state)=>(sku)=>{
            let isok = '';
            state.cartList.forEach(item=>{
                if(item.sku == sku){
                    isok = item.cart_show
                }
            })
            return isok;
        }
    },
    mutations:{  
        addCart(state,goods){
            state.cartList.unshift(goods);
        },
        changeQty(state,{sku,qty}){
            state.cartList.forEach(item=>{
                if(item.sku == sku){ //修改商品数量
                    if(qty > item.stock){
                        item.qty = item.stock;
                        alert('库存不足')
                    }else{
                        item.qty = qty;
                    }
                    
                }
            })
        },
        removeQty(state,sku){//删除商品
            state.cartList = state.cartList.filter(item=>item.sku!=sku);
        },
        clearCart(state){
            state.cartList = [];//清空购物车
        }
    },

      
}
export default cart;