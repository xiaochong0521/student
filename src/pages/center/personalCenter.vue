<template>
    <div class="personal">
        <div class="top">
            <div class="top-lef">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="top-rig">
                <div class="student-mess">
                    <div class="bans">
                        <div class="names">Alexander</div>
                        <img src="../../assets/bianji.png" alt="">
                    </div>
                    <div class="student-num">
                        <span class="student-id">学生ID：01120180903134</span>
                        <span class="student-age">年龄：12岁</span>
                    </div>
                </div>
                <div class="rest">
                    <img src="../../assets/jian.png" alt="">
                    <span class="rest-time">剩余课时：<span class="rest-course">128</span> 节</span>
                    <span class="course-detail">课时详情</span>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="mid-tit">
                <div class="tit-lef">即将开课</div>
                <div class="more">更多 >></div>
            </div>
            <div class="course-details">
                <div class="course-tit">
                    <div class="eslji">
                        ESL英语综合提升中级
                    </div>
                    <div class="times">
                        <img src="../../assets/time.png" alt="">
                        <span>2018-06-08  13：00-13：50</span>
                    </div>
                </div>
                <div class="course-main">
                    <div class="lesson">
                        <div class="lesson-name">
                            Lesson 1 Exploring Space and Astronomy
                        </div>
                        <div class="teacher">
                            <img src="../../assets/logo.png" alt="">
                            <span>Kira Yuan</span>
                        </div>
                    </div>
                    <ul class="detail-les">
                        <li>
                            <div class="les-lef">
                                <img src="../../assets/dian_01.png" alt="">
                                <span>Exploring Space and Astronomy</span>
                            </div>
                            <div class="les-rig">
                                <img src="../../assets/yulan.png" alt="">
                                <span>预览课件</span>
                            </div>
                        </li>
                        <li>
                            <div class="les-lef">
                                <img src="../../assets/dian_01.png" alt="">
                                <span>Exploring Space and Astronomy</span>
                            </div>
                            <div class="les-rig">
                                <img src="../../assets/yulan.png" alt="">
                                <span>预览课件</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="mid-tit">
                <div class="tit-lef">待完成的作业</div>
                <div class="more">更多 >></div>
            </div>
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
                            <img src="../../assets/chakanzuoye.png" alt="">
                            查看作业
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
    .personal{
        width: 800px;
        float: right;
    }
    .top{
        width: 800px;
        height: 190px;
        background: #fff;
        overflow: hidden;
    }
    .top-lef{
        float: left;
    }
    .top-lef img{
        border: 4px solid #FFE178;
        width: 108px;
        height: 108px;
        border-radius: 50%;
        padding: 2px;
        margin: 20px;
    }
    .top-rig{
        float: left;
        width: 640px;
    }
    .bans{
        overflow: hidden;
        padding-top: 37px;
    }
    .names,.bans img{
        float: left;
    }
    .names{
        font-size: 24px;
        color: #333333;
    }
    .bans img{
        margin: 10px 10px;
    }
    .student-num{
        font-size: 14px;
        color: #333333;
        margin-top: 19px;
    }
    .student-mess{
        height: 127px;
        border-bottom: 1px solid #f5f5f5;
        width: 100%;
    }
    .rest{
        padding-top: 20px;
    }
    .rest-time{
        font-size: 14px;
        color: #333333;
    }
    .rest-course{
        color: #FF8200
    }
    .course-detail{
        font-size: 14px;
        color: #999999;
        margin-left: 20px;
        cursor: pointer;
    }
    .mid{
        width: 740px;
        margin-top: 20px;
        background: #fff;
        overflow: hidden;
        padding: 0 30px;
        padding-bottom: 38px;
    }
    .mid-tit{
        height: 65px;
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
    .course-details{
        width: 100%;
    }
    .course-tit{
        width: 100%;
        overflow: hidden;
        background: #FFECA7;
        height: 60px;
    }
    .eslji{
        float: left;
        margin: 10px 20px;
        background: #FFFFFF;
        border-radius: 5px;
        font-size: 14px;
        color: #FF8200;
        text-align: center;
        line-height: 40px;
        height: 40px;
        width: 170px;
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
    .lesson{
        border-bottom: 1px solid #FFF0BB;
        overflow: hidden;
        height: 60px;
        line-height: 60px;
    }
    .lesson-name{
        padding-left: 30px;
        font-size: 14px;
        color: #333333;
        float: left;
    }
    .teacher{
        float: right;
        padding-right: 20px;

    }
    .teacher img{
        width: 30px;
        height: 30px;
        float: left;
        border-radius: 50%;
        margin: 15px;
    }
    .teacher span{
        font-size: 14px;
        color: #333333;
    }
    .detail-les{
        padding-bottom: 27px;
    }
    .detail-les li{
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
    }
    .les-lef{
        float: left;
        padding-left: 30px; 
    }
    .les-lef img{
        margin: 15px 12px 15px 0;
        float: left;
    }
    .les-lef span{
        font-size: 14px;
        color: #333333;
    }
    .les-rig{
        width: 120px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        float: right;
        font-size: 14px;
        color: #333333;
        margin-right: 20px; 
    }
    .les-rig img{
        float: left;
        margin: 13px 11px 7px 19px;
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
    }
    .check-homework img{
        float: left;
        margin: 10px 10px 10px 17px;
    }
</style>