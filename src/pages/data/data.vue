<template>
    <div class="data">
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
            </div>
        </div>
        <div class="fill-information">
            <ul>
                <li>
                    <div class="fill-names">学生姓名：</div>
                </li>
                <li>
                    <div class="fill-names">学生性别：</div>
                </li>
                <li>
                    <div class="fill-names">学生邮箱：</div>
                </li>
                <li>
                    <div class="fill-names">出生日期：</div>
                </li>
                <li>
                    <div class="fill-names">所在学校：</div>
                </li>
                <li>
                    <div class="fill-names">所在年级：</div>
                </li>
                <li>
                    <div class="fill-names">家长姓名：</div>
                </li>
                <li>
                    <div class="fill-names">家长电话：</div>
                </li>
                <li>
                    <div class="fill-names">家长邮箱：</div>
                </li>
                <li>
                    <div class="fill-names">是否打算出国：</div>
                </li>
                <li>
                    <div class="fill-names">预计出国时间：</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .data{
        width: 800px;
        float: right;
    }
    .top{
        width: 800px;
        height: 150px;
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
    .fill-information{
        width: 800px;
        height: 496px;
        background-color: #fff;
        margin-top: 20px;
    }
    .fill-information ul{
        padding: 20px;

    }
    .fill-information ul li{
        height: 40px;
        line-height: 40px;
        overflow: hidden;
    }   
    .fill-names{
        text-align: right;
        float: left;
        width: 148px;
        font-size: 14px;
        color: #333333;
    }
</style>