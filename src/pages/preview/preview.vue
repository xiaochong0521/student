<template>
    <div class="preview">
        <div class="mid">
            <div class="mid-tit">
                <div class="tit-lef">一周内要的上课</div>
                <div class="more"></div>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .preview{
        width: 800px;
        float: right;
    }
    .mid{
        width: 740px;
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
        margin-bottom: 20px;
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
</style>