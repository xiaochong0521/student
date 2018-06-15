<template>
    <div class="finish">
        <div class="mid-tit">
            <div class="tit-lef">Lesson 1 Exploring Space and Astronomy</div>
        </div>
        <div class="process">
            <span>
                <img src="../../assets/logo.png" alt="">
                Kira Yuan
            </span>
            <span class="state">2018.04.30 13:00 - 13:50</span>
        </div>
        
        <div class="mid">
            
            <div class="course-details">
                <div class="course-tit">
                    <div class="les-name">
                        <img src="../../assets/dian_01.png" alt="">
                          Exploring Space and Astronomy 作业名称
                    </div>
                    
                    <div class="times">
                        <span>Homework</span>
                    </div>
                </div>
                <div class="course-main">
                    <div class="contains">
                        Alex and I practiced writing a narrative story together. I wrote a sentence, and he followed by writing 
the next. I taught him that each sentence, no matter how crazy, needs to logically follow the sentence before. By the end of the story, he was doing that a lot better. Skills the student exhibited well: Good writing!
                    </div>
                    <div class="down">
                        <div class="box">
                            <img src="../../assets/fujian.png" alt="">
                            <div class="wenzi">
                                <p>Alex and I practiced writing </p>
                                <p class="download">下载附件</p>
                            </div>
                        </div>
                        <div class="box">
                            <img src="../../assets/fujian.png" alt="">
                            <div class="wenzi">
                                <p>Alex and I practiced writing </p>
                                <p class="download">下载附件</p>
                            </div>
                        </div>
                    </div>
                    <ul class="detail-les">
                        
                        <div class="check-homework">
                            <img src="../../assets/chakanzuoye.png" alt="">
                            查看作业
                        </div>
                        <div class="check-homework">
                            <img src="../../assets/fanhui.png" alt="">
                            返回
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
        max-width: 320px;
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
        margin-bottom: 20px;
        line-height: 30px;
    }
    .process .state{
        margin-left: 100px;
        font-size: 14px;
        color: #999999;
    }
    .process img{
        width: 30px;height: 30px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    .contains{
        width: 714px;
        margin: 19px 11px 35px 15px;
        font-size: 14px;
        color: #666666;
        line-height: 27px;
    }
    .box{
        overflow: hidden;
        width: 242px;
        margin-left: 50px;
        float: left;
    }
    .box img{
        float: left;
        margin-right:13px; 
    }
    .box p{
        font-size: 14px;
        color: #666666;
    }
    .box p.download{
        font-size: 14px;
        color: #FF8200;
    }
    .down{
        overflow: hidden;
    }
</style>