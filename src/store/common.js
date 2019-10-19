import axios from 'axios';

export default {
    state:{
        user:null
    },
    mutations:{
        login(state,{username,Authorization}){
            state.user = {
                username,
                Authorization
            }

            // 存入本地存储
            localStorage.setItem("user", JSON.stringify({username,Authorization}));
        },
        logout(state){
            state.user = null;

            // 清空本地存储
            localStorage.removeItem("user");
        }
    },
    actions:{
        async checkLogin(context,payload){
            let user = localStorage.getItem("user");
            if(!user){
                context.commit('logout');
            }
            return 200;
        }
    }
}