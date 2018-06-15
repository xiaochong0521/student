<template>
    <div class="login">
        <div class="login-box">
            <div class="title">
                登录UStutor
            </div>
            <div class="inps">
                <input type="text" class="" v-model="mobile_no" placeholder="请输入注册手机号码或邮箱地址">
                <input type="password" v-model="passwd" placeholder="请输入登录密码">
            </div>
            <div class="remember-num">
                <input type="checkbox" class="check">
                <div class="text">
                    <span>下次自动登录</span>
                    <span class="forget">忘记密码？</span>
                </div>
            </div>
            <button class="btn" @click="login">登录</button>
            <div class="regist-now">
                立即注册，免费领取试听课
                <img src="../assets/jian.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                mobile_no: '',
                passwd: ''
            }
            
        },
        methods:{
            login(){
                var that = this;
                //验证手机格式是否正确
               var filter1  = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
               //验证邮箱格式是否正确
               var filter2  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (filter1.test(that.mobile_no)||filter2.test(that.mobile_no)){
                     if(that.passwd){
                         this.baseAxios.post('auth/login',{
                            "password": that.passwd,
                            "username": that.mobile_no,
                            "usertype": "Student"
                         })
                         .then(function(res){
                            //  存储token
                             localStorage.setItem('Authorization',res.data.Authorization)
                             that.$router.push({
                                path:'/center/personal'
                             })
                         })
                         .catch(function(res){

                         })
                     }
                }else{
                    alert('您的邮件或者手机号码格式不正确');
                    return false;
                }
            }
        }
    }
</script>

<style scoped>
    .login{
        height: 600px;
        background: url('../assets/bj01.jpg') no-repeat;
        position: relative;
    }
    .login-box{
        width: 370px;
        height: 450px;
        background: #FFFFFF;
        border-radius: 10px;
        position: absolute;
        top: 75px;
        right: 150px;
    }
    .title{
        height: 80px;
        font-size: 22px;
        color: #333333;
        line-height: 80px;
        text-indent: 32px;
        border-bottom: 3px solid #FF8200;
    }
    .inps input{
        width: 300px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top: 21px;
        text-indent: 18px;
        outline: none;
    }
    .inps{
        padding-top: 18px;
    }
    .text{
        font-size: 14px;
        color: #666666;
        float: left;
        width: 277px;
    }
    .check{
        float: left;
        width: 14px;
        height: 14px;
        margin-top: 2px;
        margin-right: 8px;
    }
    .remember-num{
        width: 300px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 14px;
        /* cursor: pointer; */
    }
    .forget{
        float: right;
        cursor: pointer;
    }
    .btn{
        background: #FF8200;
        border-radius: 5px;
        width: 300px;
        height: 52px;
        outline: none;
        font-size: 18px;
        color: #FFFFFF;
        margin: 30px 34px 0 36px;
    }
    .regist-now{
        font-size: 14px;
        color: #FF8200;
        text-align: center;
        margin-top: 30px;
        cursor: pointer;
    }
</style>