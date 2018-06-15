<template>
<!-- 完善信息 -->
    <div class="perfect">
        <div class="chenggong">
            <img src="../assets/chenggong.png" alt="">
        </div>
        <div class="base-mess">
            <div class="title">基本信息</div>
            <div class="student-mess">
                <div class="name">
                    <span>*</span>学生姓名
                </div>
                <div>
                    <input type="text" class="inps">
                </div>
            </div>
            <div class="gender">
                <div class="name">
                    <span>*</span>Gender
                </div>
                <div class="radio">
                    <span class="checked"><input type="radio" name="gender"> 男</span>
                    <span><input type="radio" name="gender"> 女</span>
                    <span><input type="radio" name="gender"> 保密</span>
                </div>
            </div>
            <div class="country-grade">
                <div class="country">
                    <div class="name">
                        <span>*</span>在读国家
                    </div>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div class="grade">
                    <div class="name">
                        <span>*</span>所在年级
                    </div>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>
            <div class="course">
                <div class="name">
                    <span>*</span>意向学习科目
                </div>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value=""></option>
                </select>
                <input type="text" class="inps">
            </div>
            <div class="parent-tele">
                <div class="name">
                    <span>*</span>家长电话
                </div>
                <select name="" id="" class="code">
                    <option value=""></option>
                </select>
                <input type="text" class="tele">
            </div>
        </div>
        <button class="btn">确定</button>
    </div>
</template>

<script>
    export default {
        beforeCreate:function(){
            var _that = this;
            _that.baseAxios.get('/api/v1/_bare/subject_category', {q:""})
                .then(function(response){
                    console.log(response)
                })
            
        },
    }
</script>

<style scoped>
    .perfect{
        width: 1000px;
        background: #fff;
        margin: 0 auto;
        height: 1053px;
    }
    .chenggong{
        padding-top: 54px; 
    }
    .chenggong img{
        margin: 0 auto;
        display: block;
    }
    .title{
        font-size: 18px;
        color: #333333;
    }
    .name span{
        color: #FF4433;
    }
    .name{
        font-size: 14px;
        color: #151515;
        line-height: 16px;
        margin-top: 28px;
    }
    .inps{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        outline: none;
        margin-top: 12px;
        width: 198px;
        height: 40px;
    }
    .radio{
        margin-top: 8px;
        font-size: 14px;
        color: #666666;
    }
    .checked{
        color: #FF8200;
    }
    .radio span{
        margin-right: 79px;
    }
    .country,.grade{
        width: 198px;
        float: left;
        margin-right: 20px;
    }
    .country-grade{
        overflow: hidden;
    }
    select{
        margin-top: 12px;
        outline: none;
        width: 198px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        margin-right: 10px;
    }
    .code{
        background: #F3F3F3;
        width: 150px;
        height: 40px;
        margin: 0;
        margin-top: 12px;
        border-radius: 0;
    }
    .tele{
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        width: 278px;
        height: 40px;
        margin-top: 12px;
    }
    .btn{
        width: 150px;
        height: 40px;
        display: block;
        margin: 0 auto;
        background: #FF8200;
        border-radius: 5px;
        font-size: 14px;
        color: #FFFFFF;
        outline: none;
        margin-top: 58px;
    }
    .base-mess{
        margin-top: 79px;
        margin-left: 70px;
    }
</style>