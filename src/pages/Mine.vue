<template>
    <div>
        <el-main>
            <div style="width:100%;height:300px;background:#58bc58;position: relative;">
                <el-button type="danger" plain @click.native="goto('login')" id="logbtn">用户登录 </el-button>
            </div>
            <div>
                {{username}}的主页
            </div>

        </el-main>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                username:''
            }
        },
        methods:{
            goto(name){
                this.$router.push({name});
            }
        },
        created(){
            // this.username = this.$route.query.username
             this.username = this.$route.params.username;
        }
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
</style>