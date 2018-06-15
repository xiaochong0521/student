<template>
    <div class="regist">
        <div class="main-contain">
            <div class="title">
                <div class="account-registration">
                    账号注册
                </div>
                <router-link to="/useEmail"><div class="use-phone">
                   使用邮箱注册 
                </div></router-link>
            </div>
            <div class="form">
               <div class="phone">
                   <div class="phone-left">
                       手机号
                   </div>
                   <input type="text" v-model="mobile_no" class="inps" placeholder="请输入您的手机号码">
               </div>
               <div class="phone">
                   <div class="phone-left">
                       验证码
                   </div>
                   <div class="inps">
                       <input type="text" class="yan-num" v-model="code" placeholder="请输入短信验证码">
                       <div class="click-btn" @click="sendAjax" v-if="sendNum">
                           {{yzm}}
                       </div>
                       <div class="click-btn" v-if="seconde">
                           {{numbers}}
                       </div>
                   </div>
               </div>
               <div class="phone">
                   <div class="phone-left">
                       设置密码
                   </div>
                   <input type="text" class="inps" v-model="secrtone" placeholder="请设置登录密码（6-20位字符）">
               </div>
               <div class="phone">
                   <div class="phone-left">
                       确认密码
                   </div>
                   <input type="text" class="inps" v-model="secrtAgain" placeholder="请再次输入密码">
               </div>
               <div class="checkbox">
                  <input type="checkbox" checked>
                  <span>我已阅读并同意<span class="instructor">《UStutor用户注册协议》</span></span>
               </div>
               <button class="regist-now" @click="regists">立即注册</button>
               <div class="login">
                   <span>已有账号？<router-link to="/login"><span class="instructor">请登录</span></router-link></span>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'phone',
        data() {
            return{
                mobile_no: '',
                yzm:'获取验证码',
                sendNum: true,
                seconde: false,
                numbers: 60,
                secrtone: '',
                secrtAgain: '',
                code: ''
            }
        },
        methods:{
            // 获取验证码
            sendAjax(){
               var that = this;
                //验证手机格式是否正确
               var filter  = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                if (!filter.test(that.mobile_no)){
                     alert('您的电子邮件格式不正确');
                     return false;
                }
                //获取验证码（手机）
               this.baseAxios.post('auth/smsverify',{
                    "country_code": "86",
                    "mobile_no": that.mobile_no
                })
               .then(function(response) {
                   that.sendNum = false;
                   that.seconde = true;
                   //倒计时
                   var timer = setInterval(function(){
                        if(that.numbers>1){
                           that.numbers--;
                        }else{
                            that.sendNum = true;
                            that.seconde = false;
                            that.numbers = 60;
                            clearInterval(timer);
                        }
                    },1000)
                    // console.log(response)
                })
                .catch(function(response) {
                    console.log(response);
                });
            },
            // 注册
            regists(){
                var that = this;
                if (!that.code) {
                    alert('请输入验证码！');
                    return false;
                }
                if (that.secrtone.length>0&&(that.secrtone == that.secrtAgain)) {
                    //提交注册
                    this.baseAxios.post('auth/register',{
                        "password": that.secrtone,
                        "username": that.mobile_no,
                        "usertype": "Student",
                        "verify_code": that.code
                    })
                    .then(function(res){
                        console.log(res)
                    })
                    .catch(function(res){

                    })
                }else{
                    alert('密码长度不正确或者密码前后不一致，请重新输入！');
                }
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .main-contain{
        width: 830px;
        height: 600px;
        background: #ffffff;
        margin: 0 auto;
        margin-top: 81px;
    }
    .title{
        overflow: hidden;
        height: 86px;
        border: 1px solid #e8e8e8;
    }
    .account-registration{
        padding: 33px 0 20px 0;
        margin-left: 51px;
        float: left;
        border-bottom: 3px solid #FF8200; 
        font-size: 22px;
        color: #333333;
    }
    .use-phone{
        font-size: 14px;
        color: #FF8200;
        float: right;
        margin: 43px 34px 0 0;
        cursor: pointer;
    }
    .phone-left{
        float: left;
        height: 52px;
        width: 225px;
        text-align: right;
        line-height: 52px;
    }
    .inps{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        width: 392px;
        height: 52px;
        float: left;
        margin-left: 20px;
        text-indent: 30px;
        outline:none;
    }
    .phone{
        overflow: hidden;
        margin-top: 20px;
    }
    .yan-num{
        float: left;
        border: none;
        height: 50px;
        width: 278px;
        text-indent: 30px;
        outline:none;
    }
    .click-btn{
        float: right;
        width: 108px;
        height: 44px;
        background: #F5F5F5;
        font-size: 14px;
        color: #666666;
        text-align: center;
        line-height: 44px;
        text-indent: 0;
        margin: 3px;
        cursor: pointer;
    }
    .instructor{
        font-size: 14px;
        color: #FF8200;
        line-height: 20px;
    }
    .checkbox{
        font-size: 14px;
        color: #666666;
        margin-top: 20px;
        text-align: center;
    }
    .regist-now{
        display: block;
        background: #FF8200;
        border-radius: 5px;
        width: 392px;
        height: 52px;
        margin: 0 auto;
        margin-top: 36px;
        font-size: 18px;
        color: #FFFFFF;
        outline:none;
        cursor: pointer;
    }
    .login{
        font-size: 14px;
        color: #333333;
        text-align: center;
        margin-top: 20px;
    }
</style>