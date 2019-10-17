<template>
    <div>
        <el-main>
            <div class="minehead">
                
                <el-button type="danger" plain @click.native="goto('login')" id="logbtn" v-if="!username">用户登录 </el-button>
                <div v-else>
                    <img style="height: 50%;
                        width: 50%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;" src="../assets/img3/touxiang.png" alt />
                </div>
            </div>
            <div>
                {{username}}的主页
                 <ul>
                    <li>
                       <el-link @click.native="goto('order')" 
                       :underline="false"
                        class="minespan">我的订单</el-link>
                    </li>
                     <li>
                         <el-link @click.native="goto('address')" 
                       :underline="false"
                        class="minespan">我的地址</el-link>
                    </li>
                     <li>
                       <el-link @click.native="goto('security')" 
                       :underline="false"
                        class="minespan">账户与安全</el-link>
                    </li>
                     <li>
                         <el-link @click.native="goto('help')" 
                       :underline="false"
                        class="minespan">客户与帮助</el-link>
                    </li>
                     <li>
                        <el-link @click.native="goto('feedback')" 
                       :underline="false"
                        class="minespan">意见反馈</el-link>
                    </li>
                    <li >
                       <el-link @click.native="goto('aboutus')" 
                       :underline="false"
                        class="minespan">关于我们</el-link>
                    </li>
                     
                </ul>
            </div>

        </el-main>
    </div>
</template>
<script>
    export default{
         created(){
            // this.username = this.$route.query.username
            //  this.username = this.$route.params.username;
            let user = localStorage.getItem('username')
            this.username = user;
            console.log(this.username);
        },
        data(){
            return{
                username:''
                
            }
        },
        methods:{
            goto(name){
                this.$router.push({name});
            },
            created() {
              //获取url地址参数
              
              this.activeIndex = this.$route.path;
            
              this.$store.dispatch('checkLogin');
            },
        },
       
    }
</script>
<style>
    #logbtn{
        display:block;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    .minehead{
        width:100%;
        height:10rem;
        position: relative;
        background:url(../assets/img3/mine.png);
    }
    img{
        height: 100%;
        width: 100%;
    }
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
    }
    li{
        width: 100%;
        height: 3.75rem;
    }
    .minespan{
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #f5f5f5;
        display: inline-block;
        color: #4b4b4b;
        line-height:6rem;
    }
</style>