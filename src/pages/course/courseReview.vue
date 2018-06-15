<template>
    <div class="course-review">
        <div class="teacher top">
            <div class="name">
                教师评分
            </div>
            <div class="xin">
                <ul>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star02.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="teacher">
            <div class="name">
                课程评分
            </div>
            <div class="xin">
                <ul>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star01.png" alt="">
                    </li>
                    <li>
                        <img src="../../assets/star02.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="teacher">
            <div class="name">
                意见内容
            </div>
            <div class="text">
                <textarea name="" id="" cols="30" rows="10" placeholder="请输入意见的内容"></textarea>
            </div>
        </div>
        <ul class="detail-les">
            <div class="check-homework center">
                提交
            </div>
            <div class="check-homework">
                取消
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>
    .course-review{
        width: 800px;
        height: 818px;
        float: right;
        background: #ffffff;
    }
    .teacher{
        overflow: hidden;
        margin-bottom: 19px;
    }
    .name{
        float: left;
        text-align: right;
        width: 117px;
        font-size: 14px;
        color: #333333;
        margin-right: 20px;
    }
    ul,li{
        list-style: none;
    }
    li{
        float: left;
        margin-right: 7px;
    }
    .top{
        margin-top: 62px;
    }
    .text textarea{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        width: 550px;
        height: 140px;
        outline: none;
    }
    .detail-les{
        padding-bottom: 27px;
        overflow: hidden;
        margin: 0 auto;
        max-width: 320px;
    }
    .les-name{
        float: left;
        line-height: 60px;
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
    }
    .check-homework{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        font-size: 14px;
        color: #333333;
        margin-top: 24px;
        cursor: pointer;
        float: left;
        margin-right: 20px;
        text-align: center;
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
    .center{
        text-align: center;
        background: #FF8200;
        color: #fff;
    }
</style>