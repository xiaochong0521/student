<template>
    <div class="finish">
        <div class="mid-tit">
            <div class="tit-lef">待完成的作业</div>
            <div class="more">
                <img src="../../assets/fanhui.png" alt="">
                返回
            </div>
        </div>
        <div class="process">
            <span>教师：Kira Yuan</span>
            <span class="state"> 进度：01/10</span>
        </div>
        <div class="tab">
            <div class="completed">
                已约课程
            </div>
            <div class="finishs click">
                已上课程
            </div>
        </div>
        <div class="mid">
            
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        Lesson 1 Exploring Space and Astronomy
                    </div>
                    
                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>2018-06-08  13：00-13：50</span>
                    </div>
                </div>
                <div class="course-main">
                    
                    <ul class="detail-les">
                        
                        <div class="check-homework">
                            <img src="../../assets/yulan.png" alt="">
                            预览课件
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/jinrujiaoshi.png" alt="">
                            进入教室
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .finish{
        width: 800px;
        float: right;
        background: #fff;
    }
    .tab{
        width: 740px;
        height: 50px;
        margin: 26px 30px 20px;
        background: #FAFAFA;
        border: 1px solid #DCDCDC;
    }
    .completed,.finishs{
        font-size: 16px;
        color: #666666;
        line-height: 50px;
        float: left;
        text-align: center;
        width: 150px;
        height: 50px;
    }
    .click{
        border-top: 2px solid #FF8200;
        font-size: 16px;
        color: #FF8200;
        background: #fff;
    }
    .mid{
        width: 740px;
        background: #fff;
        overflow: hidden;
        padding: 0 30px;
        padding-bottom: 20px;
    }
    
    .course-details{
        width: 100%;
    }
    .course-tit{
        width: 100%;
        overflow: hidden;
        background: #FFECA7;
        height: 60px;
    }
    .times{
        float: right;
        overflow: hidden;
        padding-right: 20px;
    }
    .times img{
        margin: 20px;
        float: left;

    }
    .times span{
        font-size: 14px;
        color: #666666;
        line-height: 60px;
        float: left;
    }
    .course-main{
        overflow: hidden;
        background: #FFFBED;
        width: 100%;
    }
    .detail-les{
        padding-bottom: 27px;
        overflow: hidden;
        margin: 0 auto;
        max-width: 426px;
    }
    .detail-les li{
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
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
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
    .mid-tit{
        height: 65px;
        width: 740px;
        margin: 0 30px;
    }
    .tit-lef{
        float: left;
        height: 65px;
        line-height: 65px;
        font-size: 18px;
        color: #333333;
    }
    .more{
        float: right;
        height: 65px;
        line-height: 65px;
        cursor: pointer;
        font-size: 14px;
        color: #333333;
    }
    .more img{
        float: left;
        margin: 22px;
    }
    .process{
        margin: 0 30px;
        font-size: 14px;
        color: #333333;
    }
    .process .state{
        margin-left: 100px;
    }
</style>