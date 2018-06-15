<template>
    <div class="question">
        <div class="main">
            <div class="tit">
                （一）软件要求
            </div>
            <ul class="list">
                <li>建议使用谷歌Chrome浏览器</li>
                <li>请确保您的Flash Player为最新版本</li>
            </ul>
        </div>
        <div class="main">
            <div class="tit">
                （二）下载
            </div>
            <ul class="list">
                <li>点击下载Chrome浏览器Windows版本</li>
                <li>点击下载Chrome浏览器Mac版本 </li>
                <li>  点击下载最新版本的Adobe Flash Player</li>
            </ul>
        </div>
        <div class="main">
            <div class="tit">
                （三）使用设备
            </div>
            <ul class="list">
                <li>笔记本/PC</li>
                <li>摄像头 </li>
                <li>耳麦</li>
                <li>网络</li>
            </ul>
        </div>
        <div class="main">
            <div class="tit">
                （四）常见问题
            </div>
            <ul class="list">
                <li class="q">
                    <img src="../../assets/Q.png" alt="">
                    无法打开官网首页
                </li>
                <li class="a">
                    <img src="../../assets/A.png" alt="">
                    <ul>
                        <li>确认电脑是否联网</li>
                        <li>网址是否输入正确</li>
                        <li>路由器断电重启</li>
                        <li>重启电脑</li>
                    </ul>
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
    .question{
        float: right;
        background: #fff;
        width: 800px;
    }
    .main{
        width: 740px;
        margin: 0 auto;
        padding: 20px 0;
        padding-bottom: 0;
    }
    .tit{
        background: #F6F6F6;
        width: 740px;
        height: 40px;
        line-height: 40px;
        border-left: 3px solid #F6F6F6;
        text-indent: 10px;
        font-size: 16px;
        color: #333333;
    }
    .list{
        margin: 14px 30px;

    }
    .list li{
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #151515;
    }
    .q,.a{
        list-style: none;
        line-height: 24px;
        overflow: hidden;
    }
    .q img,.a img{
        float: left;
        margin: 5px;
    }
    .a ul{
        float: left;
        margin-left: 20px;
    }
    .a{
        min-height: 180px;
    }
</style>